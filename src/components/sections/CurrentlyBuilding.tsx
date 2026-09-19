import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { projectsData, ongoingProjectsData } from '../../data';
import './CurrentlyBuilding.css';

export const CurrentlyBuilding: React.FC = () => {
  const ongoingProject =
    projectsData.find((p) => p.currentlyBuilding) ||
    projectsData.find((p) => p.status === 'In Progress') ||
    projectsData[3];
  const details = ongoingProject ? ongoingProjectsData[ongoingProject.id] : undefined;

  const milestones = [
    { num: '01', title: 'System Architecture', desc: 'Defining RPM measurement & vibration sensing framework', status: 'Completed', completed: true },
    { num: '02', title: 'Hardware Prototyping', desc: 'Tachometer sensor interfacing and vibration signal acquisition', status: 'In Progress', active: true },
    { num: '03', title: 'Vibration Signal Analysis', desc: 'Processing vibration data to detect unwanted and abnormal patterns', status: 'Upcoming', active: false },
    { num: '04', title: 'Fault Detection Testing', desc: 'Characterizing abnormal vibration behavior for early fault detection', status: 'Upcoming', active: false },
    { num: '05', title: 'System Integration', desc: 'Validation and experimental evaluation under rotational loads', status: 'Upcoming', active: false },
  ];

  return (
    <section id="currently-building" className="section-currently-building section" aria-label="Currently Building">
      <div className="container">
        <SectionHeader
          number="04"
          eyebrow="CURRENTLY BUILDING"
          title={ongoingProject ? ongoingProject.title : "Tachometer with Vibration Analysis and Fault Detection"}
          subtitle={ongoingProject ? ongoingProject.shortDescription : "An embedded system for measuring rotational speed and analyzing machine vibrations to identify abnormal vibration patterns and support fault detection."}
          dark={true}
        />

        <div className="blueprint-container">
          <div className="blueprint-card">
            {/* Blueprint Header */}
            <div className="blueprint-top-bar">
              <div className="blueprint-id-tag">
                <span className="blueprint-pulse" aria-hidden="true" />
                <span>ACTIVE R&amp;D // SPEC: TACHO-VIB-0.1</span>
              </div>
              <span className="status-pill status-pill--in-progress">In Progress</span>
            </div>

            <div className="blueprint-content-grid">
              {/* Left: Hand-Drawn Technical Blueprint Sketch of Device */}
              <div className="blueprint-sketch-pane">
                <div className="blueprint-sketch-wrapper">
                  {/* Handwritten Margin Note */}
                  <span className="blueprint-handwritten-note">
                    &ldquo;Rotational Dynamics &amp; Fault Detection.&rdquo;
                  </span>

                  {/* SVG Technical Blueprint Schematic */}
                  <svg viewBox="0 0 380 280" fill="none" className="blueprint-device-svg" aria-label="Tachometer and vibration analysis blueprint schematic">
                    {/* Device Enclosure Outline */}
                    <rect x="50" y="30" width="280" height="220" rx="24" stroke="#38BDF8" strokeWidth="2.5" fill="rgba(11, 27, 43, 0.9)" />
                    <rect x="54" y="34" width="272" height="212" rx="20" stroke="#38BDF8" strokeWidth="0.75" strokeDasharray="4 4" />

                    {/* Rotary Tachometer Hub (Left) */}
                    <g transform="translate(120, 115)">
                      <circle cx="0" cy="0" r="46" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.85" />
                      <circle cx="0" cy="0" r="30" stroke="#0EA5E9" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
                      <circle cx="0" cy="0" r="14" stroke="#38BDF8" strokeWidth="1.5" fill="#07121D" />
                      <circle cx="0" cy="0" r="4" fill="#38BDF8" />
                      {/* Sensor Notch / Pointer */}
                      <line x1="0" y1="0" x2="26" y2="-24" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="26" cy="-24" r="3" fill="#F97316" />
                      {/* Rotation Arc */}
                      <path d="M -22 -32 A 40 40 0 0 1 32 -22" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
                      <text x="0" y="24" textAnchor="middle" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="700">
                        RPM SENSOR
                      </text>
                    </g>

                    {/* Vibration Analysis Display Screen (Right) */}
                    <g transform="translate(195, 62)">
                      <rect x="0" y="0" width="115" height="96" rx="8" stroke="#38BDF8" strokeWidth="1.8" fill="#07121D" />
                      <rect x="0" y="0" width="115" height="18" rx="8" fill="rgba(56, 189, 248, 0.12)" />
                      <text x="8" y="13" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="7" fontWeight="700">
                        VIBRATION PLOT
                      </text>
                      <circle cx="104" cy="9" r="2.5" fill="#F97316" />
                      
                      {/* Grid Lines */}
                      <line x1="8" y1="58" x2="107" y2="58" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
                      <line x1="57" y1="24" x2="57" y2="90" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />

                      {/* Vibration Waveform */}
                      <path
                        d="M 10 58 L 24 58 L 32 44 L 40 70 L 48 50 L 56 64 L 66 38 L 76 76 L 86 52 L 94 62 L 105 58"
                        stroke="#38BDF8"
                        strokeWidth="1.8"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>

                    {/* Center Label on Device */}
                    <text x="190" y="195" textAnchor="middle" fill="#94A3B8" fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="0.1em">
                      SPEED MEASUREMENT • VIBRATION ANALYSIS
                    </text>

                    {/* Hardware Status / Alert Indicator */}
                    <circle cx="150" cy="215" r="10" stroke="#F97316" strokeWidth="1.5" fill="rgba(249, 115, 22, 0.2)" />
                    <circle cx="150" cy="215" r="6" fill="#F97316" />

                    {/* Auxiliary Telemetry Node */}
                    <circle cx="230" cy="215" r="10" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="230" cy="215" r="4" fill="#38BDF8" />

                    {/* Technical Dimensional Callouts */}
                    <line x1="30" y1="30" x2="30" y2="250" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
                    <line x1="25" y1="30" x2="35" y2="30" stroke="#38BDF8" strokeWidth="1" />
                    <line x1="25" y1="250" x2="35" y2="250" stroke="#38BDF8" strokeWidth="1" />
                    <text x="20" y="145" fill="#38BDF8" fontSize="8" fontFamily="'JetBrains Mono', monospace" transform="rotate(-90 20 145)">
                      140 mm
                    </text>
                  </svg>
                </div>
              </div>

              {/* Right: Milestone Trajectory Checklist */}
              <div className="blueprint-milestones-pane">
                <h4 className="milestones-heading">Development Milestones</h4>
                <div className="milestones-timeline">
                  {milestones.map((m) => (
                    <div key={m.num} className={`milestone-item ${m.completed ? 'milestone-completed' : ''} ${m.active ? 'milestone-active' : ''}`}>
                      <div className="milestone-status-icon" aria-hidden="true">
                        <span className="milestone-number">{m.num}</span>
                      </div>
                      <div className="milestone-text-group">
                        <div className="milestone-title-row">
                          <span className="milestone-title">{m.title}</span>
                          <span className={`milestone-badge milestone-badge--${m.status.toLowerCase().replace(/\s+/g, '-')}`}>
                            {m.status}
                          </span>
                        </div>
                        <p className="milestone-desc">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Progress Indicator Bar */}
            <div className="blueprint-progress-footer">
              <div className="progress-label-row">
                <span className="progress-stage-name">
                  Current Stage: {details?.currentStage || 'Under active research & prototyping'}
                </span>
                <span className="progress-percentage-tag">Phase 2 / 5</span>
              </div>
              <div className="progress-track-bar">
                <div className="progress-fill-bar" style={{ width: '40%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
