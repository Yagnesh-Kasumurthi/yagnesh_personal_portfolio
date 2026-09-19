import React, { useState } from 'react';
import { Award, ArrowRight, ExternalLink, ShieldCheck, Eye } from 'lucide-react';
import type { Certification } from '../../types';
import { SectionHeader } from '../ui/SectionHeader';
import { certificationsData } from '../../data';
import { Modal } from '../ui/Modal';
import './Certifications.css';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenCertModal = (cert: Certification) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  return (
    <section id="certifications" className="section-certifications section" aria-label="Certifications">
      <div className="container">
        <SectionHeader
          number="06"
          eyebrow="CERTIFICATIONS"
          title="Courses &amp; Certifications."
          subtitle="Formal engineering credentials validating foundational mastery in Artificial Intelligence, Silicon VLSI, and Programming."
          annotation="Consistent Learning Compounds Over Time."
        />

        {/* Horizontal Row of Credential Cards */}
        <div className="certifications-editorial-grid">
          {certificationsData.map((cert) => (
            <article key={cert.id} className="editorial-cert-card">
              <div className="cert-card-header">
                <span className="cert-issuer-badge">
                  <Award size={14} color="#2563EB" />
                  <span>{cert.issuer}</span>
                </span>
                <span className="cert-date-tag">{cert.date}</span>
              </div>

              <h3 className="cert-card-title">{cert.name}</h3>

              {cert.credentialId && (
                <span className="cert-credential-id">
                  ID: {cert.credentialId}
                </span>
              )}

              <p className="cert-card-desc">{cert.description}</p>

              <div className="cert-card-footer">
                <button
                  type="button"
                  className="editorial-text-link cert-inspect-btn"
                  onClick={() => handleOpenCertModal(cert)}
                >
                  <Eye size={14} />
                  <span>Preview Certificate</span>
                  <ArrowRight size={13} />
                </button>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-verify-link"
                    title="Open official Credly / Issuer verification"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Certificate Preview Modal */}
      {selectedCert && (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedCert.name}
          eyebrow={`Verified Credential // ${selectedCert.issuer}`}
          footer={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#059669', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600 }}>
                <ShieldCheck size={16} /> Verified Authentic Certificate
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {selectedCert.verificationUrl && (
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ fontSize: '0.8rem', padding: '0.5rem 1.1rem' }}
                  >
                    <ExternalLink size={13} /> Official Verification Link
                  </a>
                )}
                <button
                  type="button"
                  className="btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {/* Real Certificate Image Frame */}
            {selectedCert.certificateImage && (
              <div className="cert-preview-image-frame">
                <img
                  src={selectedCert.certificateImage}
                  alt={`${selectedCert.name} certificate`}
                  className="cert-preview-img"
                />
              </div>
            )}

            <div className="cert-details-box">
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--color-text-dark)', fontSize: '1rem' }}>
                  {selectedCert.issuer}
                </h4>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-dim)' }}>
                  Issue Date: {selectedCert.date}
                </span>
              </div>

              {selectedCert.credentialId && (
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-dim)', textTransform: 'uppercase' }}>
                    Credential ID
                  </span>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-blue-tech)', fontWeight: 700 }}>
                    {selectedCert.credentialId}
                  </p>
                </div>
              )}
            </div>

            <p style={{ color: 'var(--color-text-muted)', lineHeight: 'var(--line-height-normal)', fontSize: '0.92rem' }}>
              {selectedCert.description}
            </p>
          </div>
        </Modal>
      )}
    </section>
  );
};
