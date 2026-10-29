import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import './About.css';

export const About: React.FC = () => {
  const focusAreas = [
    { title: 'AI / ML', desc: 'Computer vision pipelines, YOLOv8 object detection, and neural inference.' },
    { title: 'VLSI Design', desc: 'Digital logic modeling with Verilog HDL and RTL synthesis.' },
    { title: 'Embedded Systems', desc: 'Firmware in C/Embedded C for Arduino, ESP32, and optical transceivers.' },
    { title: 'Edge AI', desc: 'Deploying optimized intelligence on resource-constrained physical devices.' },
  ];

  return (
    <section id="about" className="section-about section" aria-label="About Me">
      <div className="container">
        <SectionHeader
          number="01"
          eyebrow="ABOUT ME"
          title="Turning Curiosity Into Real-World Impact."
        />

        <div className="about-editorial-grid">
          {/* Left Column: Personal Narrative & Focus Areas */}
          <div className="about-content-col">
            <p className="about-lead-paragraph">
              I'm <strong className="about-name-highlight">Yagnesh Kasumurthi</strong>, an Electronics 
              and Communication Engineering undergraduate at <strong>SRM Institute of Science and Technology</strong>.
            </p>

            <p className="about-narrative-paragraph">
              I'm passionate about designing intelligent systems that combine hardware and software to solve 
              real-world problems &mdash; from assistive communication devices to computer vision pipelines and 
              digital VLSI design.
            </p>

            <p className="about-narrative-paragraph">
              I enjoy learning, building, and collaborating on projects that create meaningful impact, 
              grounded in rigorous engineering principles rather than superficial abstractions.
            </p>

            {/* Focus Blocks */}
            <div className="about-focus-grid">
              {focusAreas.map((area) => (
                <div key={area.title} className="about-focus-card">
                  <div className="focus-card-header">
                    <span className="focus-accent-dot" aria-hidden="true" />
                    <h3 className="focus-title">{area.title}</h3>
                  </div>
                  <p className="focus-desc">{area.desc}</p>
                </div>
              ))}
            </div>

            {/* Handwritten Signature & Note */}
            <div className="about-signature-row">
              <div className="handwritten-signature">
                <span>Yagnesh</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="signature-sparkle">
                  <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#F97316" />
                </svg>
              </div>
              <span className="signature-caption">ECE Undergrad &bull; SRM IST</span>
            </div>
          </div>

          {/* Right Column: Editorial Typography Composition (Inspirational Quotes) */}
          <div className="about-visual-col" aria-label="Inspirational Quotes & Engineering Mindset">
            <div className="about-quotes-board">
              {/* Subtle Ambient Wash Backdrop */}
              <div className="quotes-ambient-wash" aria-hidden="true" />

              {/* Technical Registration Marker */}
              <div className="quotes-corner-marker top-left" aria-hidden="true">+</div>
              <div className="quotes-corner-marker bottom-right" aria-hidden="true">+</div>

              {/* Top Annotation */}
              <div className="quotes-top-annotation" aria-hidden="true">
                <span className="annotation-handwritten-text">Engineering Mindset</span>
                <svg width="28" height="18" viewBox="0 0 28 18" fill="none" className="annotation-sketch-curve">
                  <path d="M 2 3 C 12 5, 20 8, 24 15 M 18 15 L 24 15 L 24 9" stroke="#1e3a5a" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* ========================================================
               * Quote 1: "Build. Learn. Improve. Repeat."
               * Style: Elegant handwritten script font, deep navy blue, distinctive visual arrangement
               * ======================================================== */}
              <div className="quote-panel quote-panel-loop">
                <div className="tape-strip" aria-hidden="true" />

                <div className="quote-panel-meta">
                  <span className="quote-kicker-mono">THE ITERATION LOOP // 01</span>
                  <span className="quote-badge-pill">MANIFESTO</span>
                </div>

                <div className="quote-script-cascade" aria-label="Build. Learn. Improve. Repeat.">
                  <div className="script-cascade-row">
                    <span className="step-num-pill">01</span>
                    <span className="script-word">Build.</span>
                    <span className="script-arrow" aria-hidden="true">&rarr;</span>
                    <span className="step-num-pill">02</span>
                    <span className="script-word">Learn.</span>
                  </div>
                  <div className="script-cascade-row secondary-row">
                    <span className="step-num-pill">03</span>
                    <span className="script-word">Improve.</span>
                    <span className="script-arrow" aria-hidden="true">&rarr;</span>
                    <span className="step-num-pill">04</span>
                    <span className="script-word">Repeat.</span>
                    <span className="script-cycle-symbol" aria-hidden="true" title="Continuous cycle">&#8635;</span>
                  </div>
                </div>

                <div className="quote-panel-footnote">
                  <span className="footnote-divider" aria-hidden="true" />
                  <span className="footnote-label">Continuous feedback &bull; Relentless refinement</span>
                </div>
              </div>

              {/* ========================================================
               * Quote 2: "Technology is most powerful when it includes everyone."
               * Style: Refined serif typography, dark charcoal or deep blue, subtle orange accent
               * ======================================================== */}
              <div className="quote-panel quote-panel-mission">
                <div className="quote-mission-accent-box" aria-hidden="true">
                  <Quote size={20} className="quote-mission-icon" />
                </div>

                <div className="quote-panel-meta">
                  <span className="quote-kicker-mono">ETHOS // 02</span>
                  <span className="mission-orange-dot" aria-hidden="true" />
                </div>

                <blockquote className="quote-serif-statement">
                  &ldquo;Technology is most powerful when it <span className="quote-orange-highlight">includes everyone.</span>&rdquo;
                </blockquote>

                <div className="quote-panel-footnote">
                  <span className="footnote-divider" aria-hidden="true" />
                  <span className="footnote-label">Human-Centered Systems &bull; Inclusive Innovation</span>
                </div>
              </div>

              {/* ========================================================
               * Quote 3: "Curiosity today. Innovations tomorrow."
               * Style: Modern, bold typography, tasteful blue or golden-yellow accent
               * ======================================================== */}
              <div className="quote-panel quote-panel-vision">
                <div className="quote-vision-sparkle" aria-hidden="true">
                  <Sparkles size={16} />
                </div>

                <div className="quote-panel-meta">
                  <span className="quote-kicker-mono vision-kicker">VISION // 03</span>
                  <span className="vision-horizon-badge">HORIZON</span>
                </div>

                <div className="quote-bold-statement">
                  <p className="bold-line-curiosity">Curiosity today.</p>
                  <p className="bold-line-innovation">
                    Innovations tomorrow<span className="bold-yellow-period">.</span>
                  </p>
                </div>

                <div className="vision-tags-row">
                  <span className="vision-spec-tag">AI/ML</span>
                  <span className="vision-bullet">&bull;</span>
                  <span className="vision-spec-tag">VLSI</span>
                  <span className="vision-bullet">&bull;</span>
                  <span className="vision-spec-tag">Edge AI</span>
                </div>
              </div>

              {/* Bottom Subtle Blueprint Coordinates */}
              <div className="quotes-board-footer" aria-hidden="true">
                <span className="quotes-mono-ref">REF // SRM_IST_ECE_STUDIO</span>
                <span className="quotes-plus-mark">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
