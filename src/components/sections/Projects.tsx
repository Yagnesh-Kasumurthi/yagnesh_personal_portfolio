import React, { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import type { Project } from '../../types';
import { SectionHeader } from '../ui/SectionHeader';
import { projectsData } from '../../data';
import { ProjectVisual } from '../ui/ProjectVisual';
import { ProjectModal } from '../ui/ProjectModal';
import './Projects.css';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'AI/ML' | 'Embedded' | 'VLSI' | 'IoT / Edge AI'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI/ML') return project.category.includes('AI') || project.category.includes('Vision');
    if (activeFilter === 'Embedded') return project.category.includes('Embedded') || project.category.includes('Hardware');
    if (activeFilter === 'VLSI') return project.category.includes('VLSI') || project.technologies.some(t => t.includes('Verilog'));
    if (activeFilter === 'IoT / Edge AI') return project.category.includes('IoT') || project.category.includes('Assistive');
    return true;
  });

  return (
    <section id="projects" className="section-projects section" aria-label="Engineering Projects">
      <div className="container">
        <div className="projects-header-wrapper">
          <SectionHeader
            number="03"
            eyebrow="PROJECTS"
            title="Building Ideas Into Real Solutions."
            subtitle="A collection of hands-on projects across AI/ML, embedded systems, and communication technologies."
            annotation="Small Projects, Big Possibilities."
          />

          <a href="#projects" className="editorial-text-link projects-view-all" onClick={(e) => { e.preventDefault(); setActiveFilter('All'); }}>
            <span>View All Projects</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="projects-filter-bar" role="tablist" aria-label="Filter projects by discipline">
          {(['All', 'AI/ML', 'Embedded', 'VLSI', 'IoT / Edge AI'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeFilter === tab}
              className={`project-filter-pill ${activeFilter === tab ? 'filter-active' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Editorial Project Cards Grid */}
        <div className="editorial-projects-grid">
          {filteredProjects.map((project, index) => {
            const projectNum = `0${index + 1}`;

            return (
              <article key={project.id} className="editorial-project-card">
                {/* Media Preview Box */}
                <div className="project-card-media" onClick={() => handleOpenModal(project)}>
                  <ProjectVisual
                    category={project.category}
                    title={project.title}
                    image={project.image}
                  />
                  {/* Status Badge in Top Left Corner */}
                  <div className="card-floating-status">
                    <span className={`status-pill ${project.status === 'Completed' ? 'status-pill--completed' : 'status-pill--in-progress'}`}>
                      {project.status}
                    </span>
                  </div>
                  {/* Subtle Project Index Number */}
                  <span className="card-index-watermark">{projectNum}</span>
                </div>

                {/* Card Content Details */}
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-description">{project.shortDescription}</p>

                  {/* Tech Tags */}
                  {project.technologies.length > 0 && (
                    <div className="project-card-tech-row">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Card Action Links */}
                  <div className="project-card-footer">
                    <button
                      type="button"
                      className="editorial-text-link"
                      onClick={() => handleOpenModal(project)}
                    >
                      <Eye size={14} />
                      <span>{project.status === 'In Progress' ? 'Development Journey' : 'View Case Study'}</span>
                      <ArrowRight size={13} />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-link"
                        aria-label="GitHub Repository"
                        title="View GitHub Repository"
                      >
                        <GithubIcon size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};
