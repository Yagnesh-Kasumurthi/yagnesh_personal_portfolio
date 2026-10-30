/**
 * Core Type Definitions for Yagnesh Kasumurthi's Portfolio
 * Designed for strict type safety, extensibility, and zero hallucinated fields.
 */

export type ProjectStatus = 'Completed' | 'In Progress' | 'Experimental';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription?: string;
  status: ProjectStatus;
  category: 'AI/ML' | 'Embedded / Hardware' | 'VLSI / Digital Design' | 'IoT / Edge AI' | string;
  technologies: string[];
  date?: string;
  image?: string;
  gallery?: string[];
  githubUrl?: string;
  liveUrl?: string;
  
  // Future technical expansion fields (optional, populated as projects progress)
  problem?: string;
  objective?: string;
  approach?: string;
  architecture?: string;
  implementation?: string;
  results?: string;
  challenges?: string;
  futureImprovements?: string;
  
  // Milestone development record
  milestones?: Array<{
    num: string;
    title: string;
    desc: string;
    status: 'Completed' | 'In Progress' | 'Upcoming' | string;
    completed?: boolean;
  }>;
  
  // Flag indicating if this project is featured in "Currently Building" spotlight
  currentlyBuilding?: boolean;
}

export * from './journal';

export interface OngoingProjectDetails {
  projectId: string;
  currentStage?: string;
  hardware?: string[];
  software?: string[];
  architectureOverview?: string;
  developmentUpdates?: Array<{
    date: string;
    update: string;
  }>;
  githubUrl?: string;
  futureMilestones?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description?: string;
  verificationUrl?: string;
  certificateImage?: string;
  certificatePdf?: string;
  credentialId?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface Language {
  language: string;
  proficiency: 'Native Proficiency' | 'Professional Working Proficiency' | 'Limited Working Proficiency' | 'Elementary Working Proficiency' | string;
}

export interface Activity {
  id: string;
  organization: string;
  institution: string;
  role: string;
  duration?: string;
  description?: string;
  responsibilities?: string[];
  highlights?: string[];
}

export interface Hobby {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}

export type SocialPlatform = 
  | 'LinkedIn' 
  | 'GitHub' 
  | 'HackerRank' 
  | 'LeetCode' 
  | 'Kaggle' 
  | 'Hugging Face' 
  | 'Email' 
  | string;

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  url: string;
  label: string;
  isPlaceholder?: boolean;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  expectedGraduation: string;
  highlights?: string[];
}

export interface Profile {
  name: string;
  headline: string;
  about?: string;
  education: Education;
  location?: string;
  photoUrl?: string;
  resumeUrl?: string;
  contactEmail?: string;
  personalEmail?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}
