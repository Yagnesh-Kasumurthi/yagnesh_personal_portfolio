import React from 'react';
import { Lightbulb } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { profileData } from '../../data';
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
              <span className="signature-caption">Curiosity today &bull; Innovation tomorrow</span>
            </div>
          </div>

          {/* Right Column: Editorial Portrait with Sticky Tape & Quote */}
          <div className="about-visual-col">
            <div className="about-poster-composition">
              {/* Handwritten Note Above Frame */}
              <div className="about-top-note" aria-hidden="true">
                <span>Same Person, Bigger Goals :)</span>
              </div>

              {/* Blue Brush Splash Behind */}
              <div className="about-blue-wash" aria-hidden="true" />

              {/* Portrait Frame with Clean Straight Facing Photo */}
              <div className="about-portrait-card">
                <img
                  src={profileData.photoUrl}
                  alt="Yagnesh Kasumurthi - Profile"
                  className="about-portrait-img"
                  width={340}
                  height={380}
                  loading="lazy"
                />
              </div>

              {/* Taped Quote Card */}
              <div className="about-quote-card">
                <div className="tape-strip" aria-hidden="true" />
                <div className="quote-icon-box" aria-hidden="true">
                  <Lightbulb size={18} color="#F97316" />
                </div>
                <p className="quote-text">
                  &ldquo;Technology is most powerful when it includes everyone.&rdquo;
                </p>
              </div>

              {/* Floating Competencies Mini Tag */}
              <div className="about-floating-tags" aria-hidden="true">
                <span className="mini-tag">AI/ML</span>
                <span className="mini-tag">VLSI Design</span>
                <span className="mini-tag">Edge AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
