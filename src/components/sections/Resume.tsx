import React, { useState } from 'react';
import { Download, CheckCircle2, Eye, ExternalLink, Maximize2, FileText } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Modal } from '../ui/Modal';
import './Resume.css';

export const Resume: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const pdfUrl = '/Kasumurthi_Yagnesh_Resume.pdf';

  const highlights = [
    'B.Tech ECE (SRM IST Ramapuram)',
    'CGPA: 8.98 / 10 (Dean\'s Scholar)',
    'RTL & Digital VLSI Design',
    'AI & YOLOv8 Computer Vision',
    'Embedded C / ESP32 / Arduino',
    'IBM, Udemy & GFG Certifications',
  ];

  return (
    <section id="resume" className="section-education section" aria-label="Resume &amp; Credentials">
      <div className="container">
        <SectionHeader
          eyebrow="CURRICULUM VITAE"
          title="Official Engineering Dossier."
          subtitle="Directly preview and download the verified two-page undergraduate curriculum vitae detailing coursework, hardware labs, and production AI models."
        />

        <div className="resume-editorial-card">
          {/* Left Narrative */}
          <div className="resume-narrative-col">
            <div className="resume-official-tag">
              <span className="dot-pulse" aria-hidden="true" />
              <span>OFFICIAL 2026 RECRUITMENT SPECIFICATION</span>
            </div>

            <h3 className="resume-headline">
              Kasumurthi Yagnesh &bull; Technical Resume (PDF)
            </h3>
            <p className="resume-summary-text">
              Comprehensive two-page engineering document detailing B.Tech ECE coursework at SRM IST, 
              YOLOv8 automated computer vision pipelines, LiFi optical communication transceiver hardware, 
              VLSI digital logic architecture, and verified industry credentials.
            </p>

            <div className="resume-highlights-grid">
              {highlights.map((item) => (
                <div key={item} className="resume-highlight-pill">
                  <CheckCircle2 size={14} color="#059669" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="resume-buttons-row">
              <a
                href={pdfUrl}
                download="Kasumurthi_Yagnesh_Resume.pdf"
                className="btn-primary"
                id="btn-download-resume-main"
              >
                <Download size={16} />
                <span>Download PDF Resume</span>
              </a>

              <button
                type="button"
                className="btn-secondary"
                id="btn-preview-resume-modal"
                onClick={() => setPreviewOpen(true)}
              >
                <Maximize2 size={15} />
                <span>Fullscreen PDF Viewer</span>
              </button>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-text-link"
                title="Open PDF in separate browser tab"
              >
                <ExternalLink size={14} />
                <span>Open in Tab</span>
              </a>
            </div>
          </div>

          {/* Right: PDF Preview Mockup */}
          <div className="resume-preview-col">
            <div className="resume-mockup-frame">
              <div className="mockup-top-bar">
                <div className="mockup-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="mockup-file-label">Kasumurthi_Yagnesh_Resume.pdf</span>
                <span className="mockup-badge">2 Pages &bull; Verified</span>
              </div>

              <div
                className="mockup-iframe-container"
                onClick={() => setPreviewOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setPreviewOpen(true)}
                title="Click to view full screen"
              >
                <iframe
                  src={`${pdfUrl}#view=FitH&toolbar=0&navpanes=0`}
                  title="Kasumurthi Yagnesh Official Resume PDF Preview"
                  className="mockup-iframe"
                />
                <div className="mockup-hover-overlay">
                  <div className="mockup-overlay-badge">
                    <Eye size={18} />
                    <span>Click to Expand Fullscreen</span>
                  </div>
                </div>
              </div>

              <div className="mockup-bottom-bar">
                <div className="mockup-file-info">
                  <FileText size={14} />
                  <span>ATS-Optimized Engineering Resume</span>
                </div>
                <a
                  href={pdfUrl}
                  download="Kasumurthi_Yagnesh_Resume.pdf"
                  className="mockup-quick-download"
                >
                  <Download size={13} />
                  <span>Quick Save</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Interactive Resume PDF Modal */}
      <Modal
        isOpen={previewOpen}
        onClose={() => setPreviewOpen(false)}
        title="Kasumurthi Yagnesh — Official Resume Document"
        eyebrow="PDF Viewer • Verified 2-Page Dossier"
        footer={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-dim)' }}>
              Kasumurthi_Yagnesh_Resume.pdf
            </span>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <a
                href={pdfUrl}
                download="Kasumurthi_Yagnesh_Resume.pdf"
                className="btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.5rem 1.1rem' }}
              >
                <Download size={14} /> Download PDF
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
              >
                <ExternalLink size={14} /> Open in Tab
              </a>
              <button
                type="button"
                className="btn-secondary"
                style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                onClick={() => setPreviewOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        }
      >
        <div style={{ width: '100%', height: '75vh', minHeight: '480px', borderRadius: '4px', overflow: 'hidden', border: '1px solid #d1d5db' }}>
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            title="Kasumurthi Yagnesh Official Resume PDF Viewer"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      </Modal>
    </section>
  );
};
