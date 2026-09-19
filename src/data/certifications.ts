import type { Certification } from '../types';
import ibmCertImg from '../assets/images/certifications/ibm-cert.png';
import udemyCertImg from '../assets/images/certifications/udemy-cert.png';
import gfgCertImg from '../assets/images/certifications/gfg-cert.png';

/**
 * Certifications Data Architecture
 * Populated with Yagnesh's verified certificates, high-res certificate images,
 * and official verification credentials.
 */
export const certificationsData: Certification[] = [
  {
    id: 'ibm-ai-intro',
    name: 'Getting Started with Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
    date: 'January 05, 2026',
    description: 'Comprehensive foundational certification in AI principles, machine learning concepts, natural language processing, and computer vision architectures.',
    verificationUrl: 'https://www.credly.com/badges/16f080ca-fbbc-45d7-b3ae-f1dcdb615127',
    credentialId: '16f080ca-fbbc-45d7-b3ae-f1dcdb615127',
    certificateImage: ibmCertImg,
  },
  {
    id: 'udemy-vlsi-design',
    name: 'VLSI Design',
    issuer: 'Udemy',
    date: 'December 15, 2025',
    description: 'Silicon digital VLSI flow, CMOS circuit logic, RTL synthesis, combinational and sequential circuit design, and hardware timing verification.',
    verificationUrl: 'https://ude.my/UC-fa837fee-a530-468d-be5a-c79ba502eed4',
    credentialId: 'UC-fa837fee-a530-468d-be5a-c79ba502eed4',
    certificateImage: udemyCertImg,
  },
  {
    id: 'gfg-python-skill-up',
    name: 'Python Skill Up',
    issuer: 'GeeksforGeeks',
    date: 'January 2026',
    description: 'Advanced Python programming, data structures, algorithmic problem solving, object-oriented software engineering, and computational automation.',
    verificationUrl: '',
    credentialId: 'Nation SkillUp',
    certificateImage: gfgCertImg,
  },
];
