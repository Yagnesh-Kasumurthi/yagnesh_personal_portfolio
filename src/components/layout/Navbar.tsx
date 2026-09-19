import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download, ChevronRight } from 'lucide-react';
import './Navbar.css';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Currently Building', href: '#currently-building', id: 'currently-building' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`editorial-navbar ${scrolled ? 'editorial-navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-brand" aria-label="Yagnesh Kasumurthi - Home" onClick={closeMenu}>
          <div className="navbar-logo-mark">YK</div>
          <div className="navbar-brand-text">
            <span className="navbar-logo-name">Yagnesh Kasumurthi</span>
            <span className="navbar-logo-tagline">ECE • SRM IST</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
            >
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="navbar-actions-group">
          <a
            href="/Kasumurthi_Yagnesh_Resume.pdf"
            download="Kasumurthi_Yagnesh_Resume.pdf"
            className="navbar-resume-btn"
            title="Download PDF Resume"
          >
            <Download size={13} />
            <span>Resume</span>
          </a>
          <a href="#contact" className="navbar-cta-btn">
            <span>Let's Connect</span>
            <ArrowUpRight size={14} className="arrow-icon" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="mobile-toggle-btn"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span>{item.label}</span>
            <ChevronRight size={16} opacity={0.6} />
          </a>
        ))}
        <div className="mobile-drawer-actions">
          <a
            href="/Kasumurthi_Yagnesh_Resume.pdf"
            download="Kasumurthi_Yagnesh_Resume.pdf"
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={closeMenu}
          >
            <Download size={15} /> Download Resume
          </a>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={closeMenu}
          >
            Let's Connect <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
};
