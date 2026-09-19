import type { SkillCategory } from '../types';

/**
 * Skills & Technical Competencies Architecture
 * Strictly organized by engineering domain without artificial proficiency percentages.
 */
export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    skills: ['Python', 'C', 'Verilog HDL'],
  },
  {
    id: 'ai-computer-vision',
    title: 'AI / Computer Vision',
    skills: [
      'OpenCV',
      'YOLOv8',
      'NumPy',
      'Pandas',
      'Machine Learning',
      'Model Training & Testing',
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded Systems',
    skills: [
      'Arduino',
      'Embedded C',
      'ESP32',
      'Microcontroller Programming',
      'Embedded System Development',
    ],
  },
  {
    id: 'digital-vlsi',
    title: 'Digital & VLSI Design',
    skills: [
      'Digital Logic Design',
      'RTL Design',
      'VLSI / HDL',
      'Digital Electronics',
    ],
  },
  {
    id: 'design-simulation',
    title: 'Design & Simulation',
    skills: [
      'KiCad',
      'LTSpice',
      'EasyEDA',
      'ModelSim',
      'Arduino IDE',
    ],
  },
  {
    id: 'dev-tools',
    title: 'Development Tools & Platforms',
    skills: [
      'GitHub',
      'Google Colab',
      'VS Code',
      'Roboflow',
      'FastAPI',
      'Antigravity',
    ],
  },
  {
    id: 'areas-of-interest',
    title: 'Core Areas of Interest',
    skills: [
      'VLSI / Digital Design',
      'IoT',
      'Embedded Systems',
      'Computer Vision',
      'Machine Learning',
      'Artificial Intelligence',
      'Edge AI',
    ],
  },
];
