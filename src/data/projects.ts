import type { Project, OngoingProjectDetails } from '../types';

/**
 * Projects Data Architecture
 * Allows continuous addition of completed, in-progress, and experimental projects.
 * Updating project status or adding in-depth specs requires zero UI component changes.
 */
export const projectsData: Project[] = [
  {
    id: 'smart-waste-detection',
    title: 'AI-based Smart Waste Detection and Classification System',
    shortDescription: 'Computer vision system developed for real-time automated waste detection and classification.',
    status: 'Completed',
    category: 'AI/ML',
    technologies: ['YOLOv8', 'OpenCV', 'Python', 'Roboflow'],
    // Extensible technical fields - populated as verified details are provided
    problem: '',
    objective: '',
    approach: '',
    architecture: '',
    implementation: '',
    results: '',
    challenges: '',
    futureImprovements: '',
  },
  {
    id: 'lifi-text-communication',
    title: 'LiFi Text Communication System using Arduino',
    shortDescription: 'Visible light communication (VLC) system transmitting textual data wirelessly using optical signals and microcontrollers.',
    status: 'Completed',
    category: 'Embedded / Hardware',
    technologies: ['Arduino', 'Embedded C', 'Hardware Prototyping'],
    // Extensible technical fields - populated as verified details are provided
    problem: '',
    objective: '',
    approach: '',
    architecture: '',
    implementation: '',
    results: '',
    challenges: '',
    futureImprovements: '',
  },
  {
    id: 'assistive-communication-device',
    title: 'Assistive Communication Device',
    shortDescription: 'An embedded assistive communication device that enables non-verbal and paralyzed individuals to communicate through a simple button-based interface. The system uses an ESP32 with a display and buzzer to provide accessible visual and audio feedback for user-selected messages and alerts.',
    status: 'Completed',
    category: 'IoT / Assistive Tech',
    technologies: [],
    currentlyBuilding: false,
  },
  {
    id: 'tachometer-vibration-fault-detection',
    title: 'Tachometer with Vibration Analysis and Fault Detection',
    shortDescription: 'An embedded system for measuring rotational speed and analyzing machine vibrations to identify abnormal vibration patterns and support fault detection.',
    status: 'In Progress',
    category: 'Embedded / Hardware',
    technologies: [],
    currentlyBuilding: true,
  },
];

/**
 * Detailed spotlight architecture for the "Currently Building" section.
 * This structure decouples live progress updates, stages, and hardware/software
 * integration notes from the main project card list.
 */
export const ongoingProjectsData: Record<string, OngoingProjectDetails> = {
  'tachometer-vibration-fault-detection': {
    projectId: 'tachometer-vibration-fault-detection',
    currentStage: 'Under active research & prototyping',
    hardware: [],
    software: [],
    architectureOverview: '',
    developmentUpdates: [],
    futureMilestones: [],
  },
  'assistive-communication-device': {
    projectId: 'assistive-communication-device',
    currentStage: 'Completed',
    hardware: [],
    software: [],
    architectureOverview: '',
    developmentUpdates: [],
    futureMilestones: [],
  },
};
