import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { SectionHeader } from '../ui/SectionHeader';
import { profileData, socialLinks } from '../../data';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const linkedin = socialLinks.find((s) => s.platform === 'LinkedIn');
  const github = socialLinks.find((s) => s.platform === 'GitHub');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    // Client-side validation
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    if (!formData.subject.trim()) {
      setStatus({ type: 'error', message: 'Please enter a subject or topic.' });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter your message.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully. Thank you for reaching out!',
        });
        // Clear the form on success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus({
          type: 'error',
          message:
            data?.message ||
            'Unable to send the message right now. Please try again or contact me directly by email.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message:
          'Unable to send the message right now. Please try again or contact me directly by email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-contact section" aria-label="Contact and Inquiries">
      <div className="container">
        <SectionHeader
          number="07"
          eyebrow="GET IN TOUCH"
          title="Let's Build Something Impactful."
          subtitle="Open to technical discussions, internship opportunities, collaborations, and meaningful engineering projects."
          annotation="Ideas to Impact. Let's Talk."
        />

        <div className="contact-editorial-grid">
          {/* Left Column: Direct Touchpoints & Paper Airplane Sketch */}
          <div className="contact-info-column">
            <div className="contact-sketch-box">
              {/* Paper Plane Sketch */}
              <svg width="64" height="48" viewBox="0 0 64 48" fill="none" className="paper-plane-svg">
                <path d="M 4 24 L 60 4 L 38 44 L 28 30 L 4 24 Z" stroke="#2563EB" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(37, 99, 235, 0.05)" />
                <path d="M 28 30 L 60 4" stroke="#2563EB" strokeWidth="1.5" />
                <path d="M 28 30 L 34 38 L 38 44" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* Flight Trail */}
                <path d="M 2 38 C 10 36, 14 30, 20 31" stroke="#F97316" strokeWidth="1.5" strokeDasharray="2 3" />
              </svg>
              <span className="contact-plane-annotation">Direct Channel</span>
            </div>

            <h3 className="contact-direct-heading">
              Connect directly for engineering opportunities, hardware discussions, or research collaborations.
            </h3>

            <div className="contact-cards-stack">
              {/* Personal Email */}
              <a href={`mailto:${profileData.personalEmail || 'kasumurthiyagnesh@gmail.com'}`} className="editorial-touchpoint-card">
                <div className="touchpoint-icon-box">
                  <Mail size={18} color="#0284c7" />
                </div>
                <div>
                  <span className="touchpoint-label">Personal Email</span>
                  <p className="touchpoint-val">{profileData.personalEmail || 'kasumurthiyagnesh@gmail.com'}</p>
                </div>
              </a>

              {/* University Email */}
              <a href={`mailto:${profileData.contactEmail || 'yk8389@srmist.edu.in'}`} className="editorial-touchpoint-card">
                <div className="touchpoint-icon-box">
                  <Mail size={18} color="#2563EB" />
                </div>
                <div>
                  <span className="touchpoint-label">University Email</span>
                  <p className="touchpoint-val">{profileData.contactEmail || 'yk8389@srmist.edu.in'}</p>
                </div>
              </a>

              {/* Direct Phone */}
              <a href="tel:+918309758643" className="editorial-touchpoint-card">
                <div className="touchpoint-icon-box">
                  <Phone size={18} color="#059669" />
                </div>
                <div>
                  <span className="touchpoint-label">Telephone / WhatsApp</span>
                  <p className="touchpoint-val">+91 8309758643</p>
                </div>
              </a>

              {/* Location */}
              <div className="editorial-touchpoint-card">
                <div className="touchpoint-icon-box">
                  <MapPin size={18} color="#F97316" />
                </div>
                <div>
                  <span className="touchpoint-label">Academic Base</span>
                  <p className="touchpoint-val">SRM IST, Ramapuram • Chennai, India</p>
                </div>
              </div>
            </div>

            {/* Social Network Quick Row */}
            <div className="contact-social-pills-row">
              {linkedin && (
                <a
                  href={linkedin.isPlaceholder ? '#contact' : linkedin.url}
                  target={linkedin.isPlaceholder ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="social-pill-link"
                  onClick={(e) => {
                    if (linkedin.isPlaceholder) {
                      e.preventDefault();
                      alert('LinkedIn profile URL will be configured shortly.');
                    }
                  }}
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn</span>
                </a>
              )}

              {github && (
                <a
                  href={github.isPlaceholder ? '#contact' : github.url}
                  target={github.isPlaceholder ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="social-pill-link"
                  onClick={(e) => {
                    if (github.isPlaceholder) {
                      e.preventDefault();
                      alert('GitHub profile URL will be configured shortly.');
                    }
                  }}
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Clean Editorial Form */}
          <div className="contact-form-column">
            <div className="editorial-form-card">
              <form onSubmit={handleSubmit} className="contact-actual-form">
                {/* Anti-spam honeypot field (hidden from human visitors) */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="contact-company-ref">Company Verification</label>
                  <input
                    id="contact-company-ref"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="contact-name" className="editorial-form-label">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    className="editorial-form-input"
                    placeholder="e.g. Dr. Alex Vance / Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="contact-email" className="editorial-form-label">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    className="editorial-form-input"
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="contact-subject" className="editorial-form-label">
                    Subject / Topic *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    disabled={isSubmitting}
                    className="editorial-form-input"
                    placeholder="e.g. Internship Inquiry / Edge AI Research Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="contact-message" className="editorial-form-label">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    disabled={isSubmitting}
                    rows={4}
                    className="editorial-form-textarea"
                    placeholder="Share details regarding your opportunity or technical topic..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {status.message && (
                  <div
                    className={`form-status-alert form-status-alert--${status.type}`}
                    role="status"
                    aria-live="polite"
                  >
                    {status.type === 'success' ? (
                      <CheckCircle2 size={18} color="#059669" />
                    ) : (
                      <AlertCircle size={18} color="#dc2626" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary form-submit-btn"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <ArrowRight size={16} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
