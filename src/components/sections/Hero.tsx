import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData, socialLinks } from '../../data';
import './Hero.css';

export const Hero: React.FC = () => {
  const linkedin = socialLinks.find((s) => s.platform === 'LinkedIn');
  const github = socialLinks.find((s) => s.platform === 'GitHub');

  return (
    <section id="hero" className="section-hero hero-section" aria-label="Introduction">
      <div className="container">
        <div className="hero-editorial-grid">
          {/* ========================================================
           * Left Column: Editorial Headline & Identity
           * ======================================================== */}
          <div className="hero-editorial-content">
            <div className="hero-eyebrow-tag">
              <span className="eyebrow-accent-dot" aria-hidden="true" />
              <span>ECE STUDENT &bull; SRM IST</span>
            </div>

            <h1 className="hero-editorial-title">
              Engineering <br />
              <span className="title-serif-italic">Ideas for a</span> <br />
              More Inclusive <br />
              <span className="title-highlight">Tomorrow.</span>
            </h1>

            <div className="hero-identity-statement">
              <p className="hero-role-headline">
                ECE Student | AI/ML, <span className="hero-blue-accent">VLSI &amp; Edge AI</span>
              </p>
              <p className="hero-bio-narrative">
                Passionate about building intelligent hardware and software systems at the intersection 
                of electronics, digital design, and artificial intelligence.
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="hero-actions-row">
              <a href="#projects" className="btn-primary hero-btn-work">
                <span>View My Work</span>
                <ArrowRight size={16} className="arrow-icon" />
              </a>

              <a
                href="/Kasumurthi_Yagnesh_Resume.pdf"
                download="Kasumurthi_Yagnesh_Resume.pdf"
                className="btn-secondary hero-btn-resume"
                title="Download Official PDF Resume"
              >
                <Download size={15} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="hero-socials-strip">
              {linkedin && (
                <a
                  href={linkedin.isPlaceholder ? '#contact' : linkedin.url}
                  target={linkedin.isPlaceholder ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="editorial-social-btn"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                  onClick={(e) => {
                    if (linkedin.isPlaceholder) {
                      e.preventDefault();
                      const contactEl = document.getElementById('contact');
                      contactEl?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <LinkedinIcon size={16} />
                </a>
              )}

              {github && (
                <a
                  href={github.isPlaceholder ? '#contact' : github.url}
                  target={github.isPlaceholder ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="editorial-social-btn"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                  onClick={(e) => {
                    if (github.isPlaceholder) {
                      e.preventDefault();
                      const contactEl = document.getElementById('contact');
                      contactEl?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <GithubIcon size={16} />
                </a>
              )}

              <a
                href={`mailto:${profileData.personalEmail || profileData.contactEmail || 'kasumurthiyagnesh@gmail.com'}`}
                className="editorial-social-btn"
                aria-label="Direct Email"
                title="Send Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* ========================================================
           * Right Column: Editorial Portrait Poster Composition
           * Authentic front-facing photo naturally integrated
           * ======================================================== */}
          <div className="hero-editorial-visual">
            <div className="hero-poster-frame">
              {/* Vibrant Blue Paint Wash Backdrop */}
              <div className="blue-paint-splash" aria-hidden="true" />

              {/* Architectural & Campus Sketch Elements */}
              <svg className="architectural-sketch-overlay" viewBox="0 0 320 320" fill="none" aria-hidden="true">
                <rect x="20" y="40" width="280" height="240" stroke="#0B1B2B" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.25" />
                <line x1="20" y1="160" x2="300" y2="160" stroke="#0B1B2B" strokeWidth="0.5" opacity="0.2" />
                <line x1="160" y1="40" x2="160" y2="280" stroke="#0B1B2B" strokeWidth="0.5" opacity="0.2" />
                <circle cx="160" cy="160" r="110" stroke="#2563EB" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />
                <path d="M 280 20 L 290 20 L 290 30" stroke="#F97316" strokeWidth="1.5" />
                <path d="M 30 290 L 30 300 L 40 300" stroke="#F97316" strokeWidth="1.5" />
                <text x="25" y="275" fill="#0B1B2B" opacity="0.35" fontSize="8" fontFamily="'JetBrains Mono', monospace">
                  LOC: SRM_IST // 12.8234° N, 80.0456° E
                </text>
              </svg>

              {/* Handwritten Floating Annotation: Build. Learn. Improve. Repeat. */}
              <div className="hero-annotation-annotation">
                <span className="annotation-quote">
                  Build.<br />
                  Learn.<br />
                  Improve.<br />
                  Repeat.
                </span>
                <svg width="34" height="28" viewBox="0 0 34 28" fill="none" className="sketch-arrow-curve">
                  <path d="M 4 4 C 18 10, 24 16, 28 24 M 22 24 L 28 24 L 28 18" stroke="#1e3a5a" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Authentic Photo: Straight Front-Facing, Natural, Professionally Framed */}
              <div className="hero-portrait-card">
                <img
                  src={profileData.photoUrl}
                  alt="Yagnesh Kasumurthi - ECE Student in AI/ML, VLSI & Edge AI"
                  className="hero-portrait-img"
                  width={360}
                  height={360}
                  loading="eager"
                />
              </div>

              {/* Yellow Sticky Note: Curiosity today. Innovations tomorrow. */}
              <div className="hero-sticky-note sticky-note">
                <p>Curiosity today.<br />Innovations tomorrow.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
         * Bottom Strip: Engineering Metrics & Affiliation
         * ======================================================== */}
        <div className="hero-metrics-strip">
          <div className="hero-metric-item">
            <span className="metric-number">3+</span>
            <span className="metric-label">Projects</span>
          </div>

          <div className="hero-metric-divider" aria-hidden="true" />

          <div className="hero-metric-item">
            <span className="metric-number metric-symbol">&infin;</span>
            <span className="metric-label">Learning</span>
          </div>

          <div className="hero-metric-divider" aria-hidden="true" />

          <div className="hero-metric-item">
            <span className="metric-number">1</span>
            <span className="metric-label">Goal: Inclusive Technology</span>
          </div>

          <div className="hero-metric-divider" aria-hidden="true" />

          <div className="hero-metric-item hero-metric-affiliation">
            <span className="affiliation-inst">SRM INSTITUTE OF SCIENCE AND TECHNOLOGY</span>
            <span className="affiliation-class">Class of 2028</span>
          </div>
        </div>
      </div>
    </section>
  );
};
