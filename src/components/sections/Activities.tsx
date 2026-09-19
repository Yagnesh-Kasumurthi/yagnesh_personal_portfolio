import React from 'react';
import { Users } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { activitiesData } from '../../data';
import './Activities.css';

export const Activities: React.FC = () => {
  return (
    <section id="activities" className="section-activities section" aria-label="Activities &amp; Societies">
      <div className="container">
        <SectionHeader
          eyebrow="COMMUNITY &amp; SOCIETIES"
          title="Collegiate Involvement."
          subtitle="Active engagement with national professional engineering bodies and collegiate technical chapters."
        />

        <div className="activities-editorial-container">
          {activitiesData.map((activity) => (
            <article key={activity.id} className="editorial-activity-card">
              <div className="activity-icon-badge">
                <Users size={22} color="#2563EB" />
              </div>

              <div className="activity-main-content">
                <div className="activity-headline-row">
                  <div>
                    <span className="activity-society-label">{activity.institution} • Student Chapter</span>
                    <h3 className="activity-org-title">{activity.organization}</h3>
                  </div>
                  <span className="activity-role-pill">Role: {activity.role}</span>
                </div>

                <p className="activity-narrative">
                  Engaged student member of the Institution of Electronics and Telecommunication Engineers (IETE) 
                  collegiate forum at SRM Institute of Science and Technology. Participating in electronics seminars, 
                  peer engineering sessions, and student technical showcases.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
