/**
 * Type Definitions for Yagnesh Kasumurthi's Engineering Journal
 * Designed for manual management in TypeScript data files with rich content blocks.
 */

export type JournalCategory =
  | 'Currently Exploring'
  | 'Technical Insights'
  | 'Experiment Log'
  | 'Lessons Learned'
  | 'Future Challenges';

export type JournalBlockType =
  | 'paragraph'
  | 'heading'
  | 'code'
  | 'image'
  | 'diagram'
  | 'list'
  | 'callout'
  | 'link';

export interface JournalContentBlock {
  type: JournalBlockType;
  level?: 2 | 3 | 4;
  text?: string;
  code?: string;
  language?: string;
  filename?: string;
  caption?: string;
  url?: string;
  alt?: string;
  items?: string[];
  listType?: 'bullet' | 'ordered';
  calloutType?: 'note' | 'tip' | 'takeaway' | 'warning';
  diagramId?: 'cpu-datapath' | 'cmos-inverter' | 'waveform-jz' | 'tachometer-vibration' | 'lifi-transceiver' | string;
  linkText?: string;
  linkType?: 'github' | 'external' | 'reference';
}

export interface JournalEntry {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: JournalCategory;
  date: string;
  shortDescription: string;
  tags: string[];
  readingTime?: string;
  coverImage?: string;
  githubUrl?: string;
  externalUrl?: string;
  blocks: JournalContentBlock[];
  isDraft?: boolean;
}
