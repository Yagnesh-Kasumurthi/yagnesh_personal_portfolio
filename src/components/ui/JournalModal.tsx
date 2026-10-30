import React, { useEffect } from 'react';
import { X, ArrowUpRight, Clock, Calendar, Bookmark, Tag, AlertCircle, Lightbulb, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { JournalEntry } from '../../types/journal';
import { journalCategories } from '../../data/journal';
import { JournalCodeBlock } from './JournalCodeBlock';
import { JournalDiagram } from './JournalDiagram';

interface JournalModalProps {
  entry: JournalEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({ entry, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !entry) return null;

  const categoryMeta = journalCategories.find((c) => c.id === entry.category);
  const accentColor = categoryMeta?.accentColor || 'var(--color-blue-tech)';

  return (
    <div
      className="journal-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="journal-modal-title"
      onClick={onClose}
    >
      <div
        className="journal-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="journal-modal-top-bar">
          <div className="journal-modal-header-meta">
            <span
              className="journal-cat-pill"
              style={{
                borderColor: accentColor,
                color: accentColor,
                backgroundColor: `${accentColor}12`
              }}
            >
              <Bookmark size={11} style={{ marginRight: '0.3rem' }} />
              {entry.category}
            </span>

            <span className="journal-modal-date">
              <Calendar size={12} />
              {entry.date}
            </span>

            {entry.readingTime && (
              <span className="journal-modal-time">
                <Clock size={12} />
                {entry.readingTime}
              </span>
            )}
          </div>

          <button
            type="button"
            className="journal-modal-close-btn"
            onClick={onClose}
            aria-label="Close journal entry"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Article Body */}
        <article className="journal-modal-article">
          <header className="journal-article-header">
            <h1 id="journal-modal-title" className="journal-article-title">
              {entry.title}
            </h1>

            {entry.subtitle && (
              <p className="journal-article-subtitle">{entry.subtitle}</p>
            )}

            {/* Tags row */}
            <div className="journal-article-tags">
              {entry.tags.map((tag) => (
                <span key={tag} className="journal-tag-chip">
                  <Tag size={10} style={{ marginRight: '0.25rem', opacity: 0.7 }} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Bar (GitHub / External links) */}
            {(entry.githubUrl || entry.externalUrl) && (
              <div className="journal-article-actions">
                {entry.githubUrl && (
                  <a
                    href={entry.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="journal-link-btn"
                  >
                    <GithubIcon size={14} />
                    <span>View Related Repository</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
                {entry.externalUrl && (
                  <a
                    href={entry.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="journal-link-btn"
                  >
                    <ExternalLink size={14} />
                    <span>External Documentation</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            )}
          </header>

          {/* Optional Cover Image */}
          {entry.coverImage && (
            <div className="journal-article-cover">
              <img src={entry.coverImage} alt={entry.title} />
            </div>
          )}

          {/* Content Blocks */}
          <div className="journal-article-content">
            {entry.blocks.map((block, idx) => {
              switch (block.type) {
                case 'paragraph':
                  return (
                    <p key={idx} className="journal-block-paragraph">
                      {block.text}
                    </p>
                  );

                case 'heading': {
                  const HeadingTag = (block.level === 2 ? 'h2' : block.level === 4 ? 'h4' : 'h3') as keyof React.JSX.IntrinsicElements;
                  return (
                    <HeadingTag key={idx} className={`journal-block-heading journal-heading-l${block.level || 3}`}>
                      {block.text}
                    </HeadingTag>
                  );
                }

                case 'code':
                  return (
                    <JournalCodeBlock
                      key={idx}
                      code={block.code || ''}
                      language={block.language}
                      filename={block.filename}
                      caption={block.caption}
                    />
                  );

                case 'diagram':
                  return (
                    <JournalDiagram
                      key={idx}
                      diagramId={block.diagramId || ''}
                      caption={block.caption}
                    />
                  );

                case 'callout': {
                  const type = block.calloutType || 'note';
                  return (
                    <div key={idx} className={`journal-callout journal-callout--${type}`}>
                      <div className="journal-callout-icon" aria-hidden="true">
                        {type === 'note' && <AlertCircle size={16} />}
                        {type === 'tip' && <Lightbulb size={16} />}
                        {type === 'takeaway' && <CheckCircle2 size={16} />}
                        {type === 'warning' && <AlertTriangle size={16} />}
                      </div>
                      <div className="journal-callout-text">
                        <strong className="journal-callout-label">
                          {type.toUpperCase()}:
                        </strong>{' '}
                        {block.text}
                      </div>
                    </div>
                  );
                }

                case 'list':
                  if (block.listType === 'ordered') {
                    return (
                      <ol key={idx} className="journal-block-list journal-block-list--ordered">
                        {block.items?.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ol>
                    );
                  }
                  return (
                    <ul key={idx} className="journal-block-list journal-block-list--bullet">
                      {block.items?.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  );

                case 'image':
                  return (
                    <figure key={idx} className="journal-block-image-fig">
                      <img src={block.url} alt={block.alt || 'Journal visual'} />
                      {block.caption && <figcaption>{block.caption}</figcaption>}
                    </figure>
                  );

                case 'link':
                  return (
                    <div key={idx} className="journal-block-link-box">
                      <a
                        href={block.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="journal-link-btn"
                      >
                        {block.linkType === 'github' ? <GithubIcon size={14} /> : <ExternalLink size={14} />}
                        <span>{block.linkText || block.url}</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  );

                default:
                  return null;
              }
            })}
          </div>

          {/* Footer note */}
          <footer className="journal-modal-footer">
            <div className="journal-footer-signature">
              <span>Authored by Yagnesh Kasumurthi</span>
              <span className="journal-footer-divider">•</span>
              <span>SRM IST • Department of ECE</span>
            </div>
            <button
              type="button"
              className="btn-secondary"
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.82rem' }}
              onClick={onClose}
            >
              Close Entry
            </button>
          </footer>
        </article>
      </div>
    </div>
  );
};
