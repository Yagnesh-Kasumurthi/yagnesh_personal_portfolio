import React from 'react';

interface SectionHeaderProps {
  number?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  annotation?: string;
  centered?: boolean;
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  eyebrow,
  title,
  subtitle,
  annotation,
  centered = false,
  dark = false,
}) => {
  return (
    <div className={`editorial-section-header ${centered ? 'editorial-header--centered' : ''} ${dark ? 'editorial-header--dark' : ''}`}>
      {(number || eyebrow) && (
        <div className="editorial-header-eyebrow">
          {number && <span className="header-num">{number}.</span>}
          {eyebrow && <span className="header-label">{eyebrow}</span>}
        </div>
      )}

      <div className="editorial-title-row">
        <h2 className="editorial-title">{title}</h2>
        {annotation && (
          <span className="editorial-header-annotation" aria-hidden="true">
            {annotation}
          </span>
        )}
      </div>

      {subtitle && <p className="editorial-subtitle">{subtitle}</p>}
    </div>
  );
};
