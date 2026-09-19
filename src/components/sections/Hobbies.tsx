import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { hobbiesData, languagesData } from '../../data';
import './Hobbies.css';

export const Hobbies: React.FC = () => {
  const getHobbyMotif = (id: string) => {
    switch (id) {
      case 'chess':
        return (
          <div className="hobby-motif-chess" aria-hidden="true">
            {/* 4x4 Miniature Strategic Grid */}
            <div className="chess-mini-board">
              <span className="square dark" />
              <span className="square light" />
              <span className="square dark" />
              <span className="square light" />
              <span className="square light" />
              <span className="square dark" />
              <span className="square light" />
              <span className="square dark" />
              <span className="square dark" />
              <span className="square light" />
              <span className="square dark" />
              <span className="square light" />
            </div>
          </div>
        );
      case 'reading':
        return (
          <div className="hobby-motif-reading" aria-hidden="true">
            {/* Minimalist Book Outline Sketch */}
            <svg width="36" height="26" viewBox="0 0 36 26" fill="none">
              <path d="M 18 6 C 12 3, 4 4, 2 6 L 2 22 C 4 20, 12 19, 18 22 C 24 19, 32 20, 34 22 L 34 6 C 32 4, 24 3, 18 6 Z" stroke="#2563EB" strokeWidth="1.8" strokeLinejoin="round" />
              <line x1="18" y1="6" x2="18" y2="22" stroke="#2563EB" strokeWidth="1.8" />
            </svg>
          </div>
        );
      case 'painting':
        return (
          <div className="hobby-motif-painting" aria-hidden="true">
            {/* Artistic Brush Stroke Accent */}
            <svg width="42" height="24" viewBox="0 0 42 24" fill="none">
              <path d="M 4 14 C 12 8, 22 18, 38 10" stroke="#F97316" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="37" cy="10" r="3" fill="#F4D35E" />
            </svg>
          </div>
        );
      case 'travelling':
        return (
          <div className="hobby-motif-travel" aria-hidden="true">
            {/* Dotted Route Line with Waypoint Pin */}
            <svg width="42" height="26" viewBox="0 0 42 26" fill="none">
              <path d="M 4 20 C 14 10, 22 24, 34 8" stroke="#8B7BC8" strokeWidth="1.8" strokeDasharray="3 3" />
              <circle cx="34" cy="8" r="3.5" fill="#8B7BC8" />
            </svg>
          </div>
        );
      case 'music':
        return (
          <div className="hobby-motif-music" aria-hidden="true">
            {/* Acoustic Signal Waveform */}
            <svg width="42" height="24" viewBox="0 0 42 24" fill="none">
              <line x1="6" y1="8" x2="6" y2="16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="4" x2="12" y2="20" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
              <line x1="18" y1="1" x2="18" y2="23" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="24" y1="6" x2="24" y2="18" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
              <line x1="30" y1="9" x2="30" y2="15" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
              <line x1="36" y1="10" x2="36" y2="14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const getHobbyConcept = (id: string) => {
    switch (id) {
      case 'chess': return 'Strategic Foresight';
      case 'reading': return 'Technical & Literature';
      case 'painting': return 'Visual Composition';
      case 'travelling': return 'Exploration & Geography';
      case 'music': return 'Acoustic Harmonics';
      default: return 'Pursuits';
    }
  };

  return (
    <section id="hobbies" className="section-hobbies section" aria-label="Beyond Engineering">
      <div className="container">
        <SectionHeader
          eyebrow="PERSPECTIVE &amp; BALANCE"
          title="Beyond Engineering."
          subtitle="Creative pursuits, analytical games, and multilingual communication capabilities."
        />

        <div className="hobbies-editorial-grid">
          {/* Artistic Hobbies Cards */}
          <div className="hobbies-cards-row">
            {hobbiesData.map((hobby) => (
              <div key={hobby.id} className="editorial-hobby-card">
                <div className="hobby-visual-stage">
                  {getHobbyMotif(hobby.id)}
                </div>
                <h3 className="hobby-card-name">{hobby.name}</h3>
                <span className="hobby-card-concept">{getHobbyConcept(hobby.id)}</span>
              </div>
            ))}
          </div>

          {/* Languages Matrix */}
          <div className="languages-editorial-panel">
            <div className="languages-title-group">
              <h3 className="languages-headline">Linguistic Proficiencies</h3>
              <p className="languages-sub">Spoken language fluency for cross-functional engineering collaboration</p>
            </div>

            <div className="languages-list-row">
              {languagesData.map((lang) => (
                <div key={lang.language} className="language-badge-pill">
                  <span className="language-name-label">{lang.language}</span>
                  <span className="language-level-label">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
