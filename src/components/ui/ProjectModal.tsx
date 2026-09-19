import React from 'react';
import { ArrowUpRight, ExternalLink, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../../types';
import { Modal } from './Modal';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      eyebrow={`${project.category} // CASE STUDY`}
      footer={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span className={`status-pill ${project.status === 'Completed' ? 'status-pill--completed' : 'status-pill--in-progress'}`}>
            {project.status}
          </span>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '0.5rem 1.1rem', fontSize: '0.8rem' }}
              >
                <GithubIcon size={14} /> View GitHub Repo <ArrowUpRight size={13} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '0.5rem 1.1rem', fontSize: '0.8rem' }}
              >
                <ExternalLink size={14} /> Live Demonstration
              </a>
            )}
            <button
              type="button"
              className="btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        {/* Overview & Short Description */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-dark)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
            Project Overview
          </h4>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 'var(--line-height-normal)', fontSize: '0.95rem' }}>
            {project.shortDescription}
          </p>
          {project.detailedDescription && (
            <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem', lineHeight: 'var(--line-height-normal)', fontSize: '0.95rem' }}>
              {project.detailedDescription}
            </p>
          )}
        </div>

        {/* Technologies Stack */}
        {project.technologies && project.technologies.length > 0 && (
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-blue-tech)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
              Core Technical Stack
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Conditional Case Study Sections - strictly shown ONLY if data exists */}
        {project.problem && (
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-dark)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              Problem Formulation
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>{project.problem}</p>
          </div>
        )}

        {project.objective && (
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-dark)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              Core Objective
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>{project.objective}</p>
          </div>
        )}

        {project.approach && (
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-dark)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              Engineering Approach
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>{project.approach}</p>
          </div>
        )}

        {project.architecture && (
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-dark)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              System Architecture
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>{project.architecture}</p>
          </div>
        )}

        {project.implementation && (
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-dark)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              Hardware &amp; Software Implementation
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>{project.implementation}</p>
          </div>
        )}

        {project.results && (
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-dark)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              Verified Results
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>{project.results}</p>
          </div>
        )}

        {project.challenges && (
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-dark)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              Engineering Challenges
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>{project.challenges}</p>
          </div>
        )}

        {project.futureImprovements && (
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-dark)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              Future Roadmap
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>{project.futureImprovements}</p>
          </div>
        )}

        {/* Technical Highlights Note */}
        <div style={{
          backgroundColor: 'var(--color-paper-secondary)',
          borderRadius: 'var(--radius-sm)',
          padding: '0.85rem 1.15rem',
          border: '1px solid rgba(17, 24, 39, 0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          color: 'var(--color-text-dark)',
          fontSize: '0.84rem'
        }}>
          <Cpu size={18} color="#2563EB" />
          <span>Physical prototype &amp; software pipeline engineered by Yagnesh Kasumurthi at SRM IST.</span>
        </div>
      </div>
    </Modal>
  );
};
