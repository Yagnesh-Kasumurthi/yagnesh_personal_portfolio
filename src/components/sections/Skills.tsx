import React from 'react';
import { Terminal, Cpu, Radio, Sparkles, Layers, Wrench } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { skillCategoriesData } from '../../data';
import './Skills.css';

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Terminal size={18} color="#38BDF8" />;
      case 'ai-computer-vision':
        return <Sparkles size={18} color="#38BDF8" />;
      case 'embedded':
        return <Radio size={18} color="#38BDF8" />;
      case 'digital-vlsi':
        return <Cpu size={18} color="#38BDF8" />;
      case 'design-simulation':
        return <Layers size={18} color="#38BDF8" />;
      case 'dev-tools':
        return <Wrench size={18} color="#38BDF8" />;
      default:
        return <Terminal size={18} color="#38BDF8" />;
    }
  };

  // Filter out the redundancy category "areas-of-interest" to keep exactly the 6 technical domain blocks from reference
  const displayedCategories = skillCategoriesData.filter(c => c.id !== 'areas-of-interest');

  return (
    <section id="skills" className="section-skills section" aria-label="Skills &amp; Technologies">
      <div className="container">
        <SectionHeader
          number="05"
          eyebrow="SKILLS"
          title="Tools &amp; Technologies I Work With."
          subtitle="A grounded technical inventory spanning digital hardware modeling, neural networks, and embedded firmware."
          annotation="Learn Build Explore Grow"
        />

        {/* Technical Grid of Dark Navy Cards on Paper */}
        <div className="skills-editorial-grid">
          {displayedCategories.map((category) => (
            <article key={category.id} className="skill-editorial-card">
              <div className="skill-card-header">
                <div className="skill-icon-box">{getCategoryIcon(category.id)}</div>
                <h3 className="skill-card-title">{category.title}</h3>
              </div>

              <div className="skill-chips-cloud">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-editorial-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
