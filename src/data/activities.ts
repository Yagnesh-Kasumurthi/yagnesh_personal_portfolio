import type { Activity } from '../types';

/**
 * Activities & Volunteering Data Architecture
 * Allows adding leadership, event organizing, workshops, or club activities later
 * without modifying the UI components.
 */
export const activitiesData: Activity[] = [
  {
    id: 'iete-srm-ist',
    organization: 'IETE Club',
    institution: 'SRM IST',
    role: 'Member',
    // Future expansion fields left empty - strictly no fabricated responsibilities
    duration: '',
    description: '',
    responsibilities: [],
    highlights: [],
  },
];
