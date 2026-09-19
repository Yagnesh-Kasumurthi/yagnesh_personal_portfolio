import React from 'react';
import { BookOpen, GraduationCap, School } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import campusImg from '../../assets/images/campus-ramapuram.png';
import './Education.css';

export const Education: React.FC = () => {
  const educationTimeline = [
    {
      institution: 'SRM Institute of Science and Technology',
      campus: 'Ramapuram Campus • Chennai, Tamil Nadu',
      degree: 'B.Tech in Electronics and Communication Engineering',
      period: '2024 — 2028 (Expected)',
      grade: 'CGPA: 8.98 / 10',
      description: 'Comprehensive curriculum spanning digital electronics, semiconductor physics, VLSI design with Verilog HDL, and signals and communication theory, with active research in edge AI and embedded architectures.',
      icon: <GraduationCap size={20} />,
      isCurrent: true,
      focusTags: ['Digital Logic & RTL', 'VLSI Design', 'Signals & Communications', 'Embedded C', 'Microprocessors'],
    },
    {
      institution: 'Accord School',
      campus: 'Tirupati, Andhra Pradesh',
      degree: 'Class XII — CBSE (AISSCE) • MPC',
      period: '2022 — 2024',
      grade: '85.0%',
      description: 'Higher secondary education focusing on Mathematics, Physics, and Chemistry (MPC) with laboratory experiments and advanced computational problem solving.',
      icon: <School size={20} />,
      isCurrent: false,
      focusTags: ['Mathematics', 'Physics', 'Chemistry'],
    },
    {
      institution: 'Mangal Vidyalayam',
      campus: 'Chittoor, Andhra Pradesh',
      degree: 'Class X — CBSE',
      period: '2020 — 2022',
      grade: '86.8%',
      description: 'Core foundation in STEM disciplines, computer applications, and analytical mathematics.',
      icon: <School size={20} />,
      isCurrent: false,
      focusTags: ['Science & STEM', 'Mathematics', 'Computer Applications'],
    },
  ];

  return (
    <section id="education" className="section-education section" aria-label="Education">
      <div className="container">
        <SectionHeader
          number="02"
          eyebrow="EDUCATION"
          title="My Learning Journey."
          annotation="A place that turns potential into possibilities."
        />

        <div className="education-editorial-grid">
          {/* Left Column: Academic Timeline */}
          <div className="education-timeline-col">
            <div className="education-timeline-track">
              {educationTimeline.map((item) => (
                <div key={item.institution} className="education-timeline-node">
                  <div className={`timeline-marker ${item.isCurrent ? 'marker-active' : ''}`}>
                    {item.icon}
                  </div>

                  <article className="education-timeline-card">
                    <div className="card-top-meta">
                      <div className="institution-info">
                        <h3 className="education-institution-name">{item.institution}</h3>
                        <p className="education-degree-text">{item.degree}</p>
                        <span className="education-campus-text">{item.campus}</span>
                      </div>

                      <div className="education-badge-cluster">
                        <span className="education-period-tag">{item.period}</span>
                        <span className="education-grade-tag">{item.grade}</span>
                      </div>
                    </div>

                    <p className="education-desc-text">{item.description}</p>

                    <div className="education-focus-tags">
                      {item.focusTags.map((tag) => (
                        <span key={tag} className="tech-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Campus Photograph & Book Motif */}
          <div className="education-sketch-col">
            <div className="campus-sketch-card">
              <div className="sketch-header">
                <span className="sketch-tag">CAMPUS // SRM IST</span>
                <span className="sketch-coord">RAMAPURAM</span>
              </div>

              {/* Campus Building Photograph */}
              <div className="campus-photo-container">
                <img
                  src={campusImg}
                  alt="SRM IST Ramapuram Campus Building"
                  className="campus-photo-img"
                  loading="lazy"
                />
                <div className="campus-photo-caption-bar">
                  <span className="campus-photo-caption">RAMAPURAM CAMPUS // CHENNAI</span>
                  <span className="campus-photo-coord">SRM IST</span>
                </div>
              </div>

              {/* Handwritten Book Sketch Motif */}
              <div className="education-book-motif">
                <BookOpen size={24} color="#1e3a5a" />
                <p className="book-quote-text">&ldquo;Education gives structure to dreams.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
