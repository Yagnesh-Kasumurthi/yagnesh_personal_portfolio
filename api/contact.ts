import { Resend } from 'resend';

export interface ContactRequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  honeypot?: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
}

/**
 * Serverless Contact Form Endpoint
 * Validates inputs, filters spam via honeypot, and delivers email through Resend.
 * Compatible with Vercel Serverless Functions and local Vite middleware.
 */
export default async function handler(req: any, res: any) {
  if (req.method === 'OPTIONS') {
    res.setHeader?.('Access-Control-Allow-Origin', '*');
    res.setHeader?.('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader?.('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const body: ContactRequestBody = req.body || {};
    const { name, email, subject, message, honeypot } = body;

    // 1. Honeypot anti-spam protection (drop bot submissions silently)
    if (honeypot && honeypot.trim().length > 0) {
      return res.status(200).json({
        success: true,
        message: 'Message sent successfully. Thank you for reaching out!',
      });
    }

    // 2. Server-side validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Name is required.' });
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({ success: false, message: 'Email address is required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
    }

    if (!subject || typeof subject !== 'string' || !subject.trim()) {
      return res.status(400).json({ success: false, message: 'Subject is required.' });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ success: false, message: 'Message is required.' });
    }

    // 3. Length checks to guard against payload abuse
    if (name.length > 100) {
      return res.status(400).json({ success: false, message: 'Name must be under 100 characters.' });
    }
    if (email.length > 150) {
      return res.status(400).json({ success: false, message: 'Email must be under 150 characters.' });
    }
    if (subject.length > 200) {
      return res.status(400).json({ success: false, message: 'Subject must be under 200 characters.' });
    }
    if (message.length > 5000) {
      return res.status(400).json({ success: false, message: 'Message must be under 5000 characters.' });
    }

    // 4. Environment configuration
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || 'kasumurthiyagnesh@gmail.com';
    const fromEmail = process.env.EMAIL_FROM || 'Portfolio <onboarding@resend.dev>';

    if (!apiKey) {
      console.error('[Contact API] Missing RESEND_API_KEY in environment variables.');
      return res.status(500).json({
        success: false,
        message: 'Unable to send the message right now. Please try again or contact me directly by email.',
      });
    }

    if (!recipientEmail) {
      console.error('[Contact API] Missing CONTACT_EMAIL in environment variables.');
      return res.status(500).json({
        success: false,
        message: 'Unable to send the message right now. Please try again or contact me directly by email.',
      });
    }

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    const emailBody = `New message received from Yagnesh Kasumurthi's portfolio.

Name:
${name.trim()}

Email:
${email.trim()}

Subject:
${subject.trim()}

Message:
${message.trim()}

Submission Timestamp:
${timestamp} (UTC)
`;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: email.trim(),
      subject: `[Portfolio Contact] ${subject.trim()}`,
      text: emailBody,
    });

    if (error) {
      console.error('[Contact API] Resend error:', error);
      return res.status(502).json({
        success: false,
        message: 'Unable to send the message right now. Please try again or contact me directly by email.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully. Thank you for reaching out!',
    });
  } catch (err: any) {
    console.error('[Contact API] Internal Server Error:', err?.message || err);
    return res.status(500).json({
      success: false,
      message: 'Unable to send the message right now. Please try again or contact me directly by email.',
    });
  }
}
