import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, BookOpen, Calendar, Clock, Bookmark, Tag, Cpu, SlidersHorizontal } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { journalEntries, journalCategories } from '../../data/journal';
import type { JournalCategory, JournalEntry } from '../../types/journal';
import { JournalModal } from '../ui/JournalModal';
import './Journal.css';

type FilterCategory = 'All' | JournalCategory;

export const Journal: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Extract all unique tags across entries
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    journalEntries.forEach((entry) => {
      entry.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, []);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: journalEntries.length };
    journalCategories.forEach((cat) => {
      counts[cat.id] = journalEntries.filter((e) => e.category === cat.id).length;
    });
    return counts;
  }, []);

  // Filtered and searched entries (chronological - latest first)
  const filteredEntries = useMemo(() => {
    return journalEntries.filter((entry) => {
      // 1. Category filter
      if (activeCategory !== 'All' && entry.category !== activeCategory) {
        return false;
      }

      // 2. Tag filter
      if (selectedTag && !entry.tags.includes(selectedTag)) {
        return false;
      }

      // 3. Search query filter (matches title, description, tags, category, or content blocks)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = entry.title.toLowerCase().includes(query);
        const matchesDesc = entry.shortDescription.toLowerCase().includes(query);
        const matchesSubtitle = entry.subtitle?.toLowerCase().includes(query) ?? false;
        const matchesCategory = entry.category.toLowerCase().includes(query);
        const matchesTags = entry.tags.some((t) => t.toLowerCase().includes(query));
        
        // Deep search in content blocks
        const matchesBlocks = entry.blocks.some((b) => {
          if (b.text && b.text.toLowerCase().includes(query)) return true;
          if (b.code && b.code.toLowerCase().includes(query)) return true;
          if (b.items && b.items.some((item) => item.toLowerCase().includes(query))) return true;
          return false;
        });

        if (!matchesTitle && !matchesDesc && !matchesSubtitle && !matchesCategory && !matchesTags && !matchesBlocks) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, selectedTag, searchQuery]);

  const handleOpenEntry = (entry: JournalEntry) => {
    setSelectedEntry(entry);
    setModalOpen(true);
  };

  const handleResetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setSelectedTag(null);
  };

  return (
    <section id="journal" className="section-journal section" aria-label="Engineering Journal">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          number="04"
          eyebrow="ENGINEERING JOURNAL"
          title="Engineering Journal"
          subtitle="Explore. Experiment. Understand. Innovate."
          annotation="Lab Notebook & Research Log"
        />

        {/* Distinctive Editorial Knowledge Hub Ledger Banner */}
        <div className="journal-ledger-card">
          <div className="journal-ledger-inner">
            <div className="journal-ledger-left">
              <div className="journal-ledger-badge">
                <span className="journal-pulse-dot" aria-hidden="true" />
                <span>KNOWLEDGE ARCHIVE // VOL. 01</span>
              </div>
              <h3 className="journal-ledger-title">
                Continuous Learning, Silicon Experiments &amp; Systems Thinking
              </h3>
              <p className="journal-ledger-desc">
                A public engineering notebook documenting what I am studying, technical concepts I have decoded, laboratory hardware measurements, and future architectural challenges across digital design, embedded systems, and computing.
              </p>
            </div>

            <div className="journal-ledger-stats">
              <div className="journal-stat-item">
                <span className="journal-stat-number">{journalEntries.length}</span>
                <span className="journal-stat-label">Documented Entries</span>
              </div>
              <div className="journal-stat-divider" aria-hidden="true" />
              <div className="journal-stat-item">
                <span className="journal-stat-number">{journalCategories.length}</span>
                <span className="journal-stat-label">Core Categories</span>
              </div>
              <div className="journal-stat-divider" aria-hidden="true" />
              <div className="journal-stat-item">
                <span className="journal-stat-number">{allTags.length}</span>
                <span className="journal-stat-label">Technical Topics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Controls Bar: Category Navigation + Search */}
        <div className="journal-controls-wrapper">
          {/* Category Navigation Pills */}
          <div className="journal-category-nav" role="tablist" aria-label="Filter journal entries by category">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'All'}
              className={`journal-category-btn ${activeCategory === 'All' ? 'active' : ''}`}
              onClick={() => setActiveCategory('All')}
            >
              <span>All Entries</span>
              <span className="journal-count-chip">{categoryCounts['All'] || 0}</span>
            </button>

            {journalCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`journal-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="journal-count-chip">{categoryCounts[cat.id] || 0}</span>
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="journal-search-row">
            <div className="journal-search-box">
              <Search size={16} className="journal-search-icon" aria-hidden="true" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search entries by title, description, code, tags..."
                className="journal-search-input"
                aria-label="Search journal entries"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="journal-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search input"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Quick Tag Filter Toggle Bar */}
            <div className="journal-quick-tags">
              <span className="journal-tags-label">
                <SlidersHorizontal size={12} />
                <span>Tags:</span>
              </span>
              <div className="journal-tags-scroller">
                {selectedTag && (
                  <button
                    type="button"
                    className="journal-tag-filter-pill active"
                    onClick={() => setSelectedTag(null)}
                  >
                    <span>Clear Tag ({selectedTag})</span>
                    <X size={11} />
                  </button>
                )}
                {allTags.slice(0, 8).map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`journal-tag-filter-pill ${selectedTag === tag ? 'active' : ''}`}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results summary / Active filters indicator */}
        {(searchQuery || selectedTag || activeCategory !== 'All') && (
          <div className="journal-filter-status">
            <span>
              Showing <strong>{filteredEntries.length}</strong> {filteredEntries.length === 1 ? 'entry' : 'entries'}
              {activeCategory !== 'All' && <> in <em>{activeCategory}</em></>}
              {selectedTag && <> tagged with <em>#{selectedTag}</em></>}
              {searchQuery && <> matching &ldquo;{searchQuery}&rdquo;</>}
            </span>
            <button
              type="button"
              className="journal-reset-link"
              onClick={handleResetFilters}
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Empty state when no entries match */}
        {filteredEntries.length === 0 ? (
          <div className="journal-empty-state">
            <Cpu size={36} className="journal-empty-icon" />
            <h4 className="journal-empty-title">No Journal Entries Found</h4>
            <p className="journal-empty-desc">
              No entries matched your current filter criteria. Try adjusting your search query or clearing tag filters.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={handleResetFilters}
            >
              View All Entries
            </button>
          </div>
        ) : (
          /* Journal Timeline / Editorial Grid */
          <div className="journal-timeline-grid">
            {filteredEntries.map((entry, index) => {
              const catMeta = journalCategories.find((c) => c.id === entry.category);
              const accentColor = catMeta?.accentColor || 'var(--color-blue-tech)';
              const entryNumber = String(index + 1).padStart(2, '0');

              return (
                <article
                  key={entry.id}
                  className="journal-card"
                  onClick={() => handleOpenEntry(entry)}
                >
                  {/* Top Technical Metadata Row */}
                  <div className="journal-card-header">
                    <div className="journal-card-badge-group">
                      <span
                        className="journal-card-category"
                        style={{
                          borderColor: accentColor,
                          color: accentColor,
                          backgroundColor: `${accentColor}10`
                        }}
                      >
                        <Bookmark size={11} style={{ marginRight: '0.25rem' }} />
                        {entry.category}
                      </span>
                    </div>

                    <div className="journal-card-meta-right">
                      <span className="journal-card-date">
                        <Calendar size={12} />
                        {entry.date}
                      </span>
                      {entry.readingTime && (
                        <span className="journal-card-time">
                          <Clock size={12} />
                          {entry.readingTime}
                        </span>
                      )}
                      <span className="journal-card-index">{entryNumber}</span>
                    </div>
                  </div>

                  {/* Main Card Body */}
                  <div className="journal-card-body">
                    <h3 className="journal-card-title">{entry.title}</h3>
                    <p className="journal-card-desc">{entry.shortDescription}</p>
                  </div>

                  {/* Tags Row */}
                  <div className="journal-card-tags">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`journal-tag-pill ${selectedTag === tag ? 'selected' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTag(selectedTag === tag ? null : tag);
                        }}
                      >
                        <Tag size={10} style={{ marginRight: '0.2rem', opacity: 0.6 }} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Bottom Read More Interaction */}
                  <div className="journal-card-footer">
                    <button
                      type="button"
                      className="journal-read-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenEntry(entry);
                      }}
                    >
                      <BookOpen size={14} />
                      <span>Read Full Entry</span>
                      <ArrowRight size={13} className="arrow-icon" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Entry Detail View Reader Modal */}
      <JournalModal
        entry={selectedEntry}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};
