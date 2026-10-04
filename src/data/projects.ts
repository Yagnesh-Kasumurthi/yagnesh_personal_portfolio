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
    id: 'ycpu-8-processor',
    title: 'YCPU-8 — 8-bit Processor Architecture',
    shortDescription: 'An 8-bit processor designed using Verilog HDL, taking inspiration from the 8086 architecture to model instruction execution, datapath coordination, and register operations.',
    detailedDescription: 'YCPU-8 is an 8-bit processor architecture modeled in Verilog HDL, inspired by the architectural principles of the 8086. It provides a modular hardware design to understand how discrete processor components—program counter, instruction decoder, control unit, register bank, ALU, and datapath—interact seamlessly during the instruction cycle.',
    status: 'Completed',
    category: 'VLSI / Digital Design',
    technologies: ['Verilog HDL', 'Icarus Verilog', 'VaporView', 'VS Code'],
    objective: 'Design, model, and simulate an 8-bit custom processor architecture in Verilog HDL to gain comprehensive insight into processor micro-architecture, instruction decoding, control unit state machines, and register operations.',
    architecture: 'Modular micro-architecture incorporating an 8-bit Program Counter (PC), Instruction Memory, Instruction Decoder, Control Unit, Register Bank (R0–R3, 8-bit each), Arithmetic Logic Unit (ALU), and integrated Datapath with Data Memory.',
    implementation: 'Implemented in Verilog HDL with support for arithmetic, logical, conditional/unconditional jump, and HALT instructions. Features instruction fetch/decode sequencing, operand routing across the 8-bit register bank, and control unit flag management.',
    results: 'Developed modular testbenches with Icarus Verilog and analyzed signal waveforms using VaporView. Successfully verified accurate instruction execution, program control flow, and conditional branch operations including Jump if Zero (JZ).',
    challenges: 'Ensuring cycle-accurate timing and synchronizing control unit branch conditions with program counter updates without introducing race conditions or unintended latches.',
    futureImprovements: 'Expanding the instruction set architecture, introducing pipelining stages for throughput optimization, and synthesizing the RTL for FPGA target platforms.',
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
