import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData, socialLinks } from '../../data';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const linkedin = socialLinks.find((s) => s.platform === 'LinkedIn');
  const github = socialLinks.find((s) => s.platform === 'GitHub');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section-footer footer" role="contentinfo">
      <div className="container">
        {/* Top Editorial Quote */}
        <div className="footer-quote-container">
          <p className="footer-quote-text">
            &ldquo;A more inclusive tomorrow is a design choice today.&rdquo;
          </p>
        </div>

        {/* Main Footer Row */}
        <div className="footer-main-row">
          {/* Brand & Identity */}
          <div className="footer-brand-box">
            <div className="footer-logo-badge">YK</div>
            <div className="footer-text-group">
              <span className="footer-author-name">{profileData.name}</span>
              <span className="footer-author-sub">ECE Student | SRM IST</span>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="footer-nav-links" aria-label="Footer Quick Links">
            <a href="#about" className="footer-nav-link">About</a>
            <a href="#education" className="footer-nav-link">Education</a>
            <a href="#projects" className="footer-nav-link">Projects</a>
            <a href="#currently-building" className="footer-nav-link">Building</a>
            <a href="#skills" className="footer-nav-link">Skills</a>
            <a href="#certifications" className="footer-nav-link">Certifications</a>
            <a href="#contact" className="footer-nav-link">Contact</a>
          </nav>

          {/* Social Icons & Back to top */}
          <div className="footer-actions-group">
            <div className="footer-social-icons">
              {linkedin && (
                <a
                  href={linkedin.isPlaceholder ? '#contact' : linkedin.url}
                  target={linkedin.isPlaceholder ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="footer-icon-btn"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={15} />
                </a>
              )}
              {github && (
                <a
                  href={github.isPlaceholder ? '#contact' : github.url}
                  target={github.isPlaceholder ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="footer-icon-btn"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={15} />
                </a>
              )}
              <a
                href={`mailto:${profileData.personalEmail || profileData.contactEmail || 'kasumurthiyagnesh@gmail.com'}`}
                className="footer-icon-btn"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>

            <button
              type="button"
              className="footer-back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top of page"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright-text">
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </p>
          <span className="footer-build-text">
            SRM Institute of Science and Technology &bull; ECE Class of 2028
          </span>
        </div>
      </div>
    </footer>
  );
};
