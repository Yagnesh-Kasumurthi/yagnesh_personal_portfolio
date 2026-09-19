import React from 'react';
import type { ProjectStatus } from '../../types';

interface StatusBadgeProps {
  status: ProjectStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusClassMap: Record<ProjectStatus, string> = {
    'Completed': 'status-badge--completed',
    'In Progress': 'status-badge--in-progress',
    'Experimental': 'status-badge--experimental',
  };

  return (
    <span className={`status-badge ${statusClassMap[status] || ''}`}>
      <span className="status-indicator-dot" aria-hidden="true" />
      <span>{status}</span>
    </span>
  );
};

interface TechBadgeProps {
  label: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ label }) => {
  return <span className="tech-tag">{label}</span>;
};
