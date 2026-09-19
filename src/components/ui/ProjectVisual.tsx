import React from 'react';

interface ProjectVisualProps {
  category: string;
  title: string;
  image?: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ category, title, image }) => {
  if (image) {
    return (
      <img
        src={image}
        alt={`${title} project preview`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    );
  }

  // 1. Assistive Communication Device
  if (
    category.toLowerCase().includes('assistive') ||
    title.toLowerCase().includes('assistive') ||
    category.toLowerCase().includes('iot')
  ) {
    return (
      <svg viewBox="0 0 400 240" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-visual-svg">
        <rect width="400" height="240" fill="#f8fafc" />
        {/* Subtle engineering grid */}
        <pattern id="assistGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.8" />
        </pattern>
        <rect width="400" height="240" fill="url(#assistGrid)" />

        {/* Handheld Device Enclosure */}
        <rect x="90" y="35" width="220" height="170" rx="20" fill="#1e293b" stroke="#334155" strokeWidth="2.5" />
        
        {/* OLED Screen Frame */}
        <rect x="120" y="55" width="160" height="85" rx="10" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
        <text x="145" y="100" fill="#38bdf8" fontFamily="'JetBrains Mono', monospace" fontSize="18" fontWeight="700">
          Hello
        </text>
        {/* Voice Waveform on Screen */}
        <path d="M 205 95 Q 212 78 218 95 T 230 95 T 242 82 T 252 95" stroke="#38bdf8" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Tactile Big Action Button */}
        <circle cx="160" cy="170" r="15" fill="#f97316" />
        <circle cx="160" cy="170" r="18" stroke="#fdba74" strokeWidth="1" strokeDasharray="3 2" />

        {/* Navigation Keypad / Speaker Grille */}
        <circle cx="240" cy="165" r="2.5" fill="#94a3b8" />
        <circle cx="250" cy="165" r="2.5" fill="#94a3b8" />
        <circle cx="260" cy="165" r="2.5" fill="#94a3b8" />
        <circle cx="240" cy="175" r="2.5" fill="#94a3b8" />
        <circle cx="250" cy="175" r="2.5" fill="#94a3b8" />
        <circle cx="260" cy="175" r="2.5" fill="#94a3b8" />

        {/* Subtext */}
        <text x="200" y="222" textAnchor="middle" fill="#64748b" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="600" letterSpacing="0.08em">
          ASSISTIVE SPEECH &amp; MOTOR INTERFACE
        </text>
      </svg>
    );
  }

  // 2. Tachometer with Vibration Analysis and Fault Detection
  if (
    title.toLowerCase().includes('tachometer') ||
    title.toLowerCase().includes('vibration')
  ) {
    return (
      <svg viewBox="0 0 400 240" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-visual-svg">
        <rect width="400" height="240" fill="#0b1b2b" />
        <pattern id="tachoGrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(56, 189, 248, 0.08)" strokeWidth="0.8" />
        </pattern>
        <rect width="400" height="240" fill="url(#tachoGrid)" />

        {/* Tachometer / Rotor Hub (Left) */}
        <g transform="translate(110, 110)">
          <circle cx="0" cy="0" r="50" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.85" />
          <circle cx="0" cy="0" r="32" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
          <circle cx="0" cy="0" r="14" stroke="#38bdf8" strokeWidth="1.5" fill="#07121d" />
          <circle cx="0" cy="0" r="4" fill="#38bdf8" />
          {/* Rotational Notch Indicator */}
          <line x1="0" y1="0" x2="28" y2="-26" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="28" cy="-26" r="3" fill="#f97316" />
          {/* Rotation Arc */}
          <path d="M -24 -34 A 44 44 0 0 1 34 -24" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
          <text x="0" y="26" textAnchor="middle" fill="#38bdf8" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="700">
            RPM SENSOR
          </text>
        </g>

        {/* Vibration Waveform Display (Right) */}
        <g transform="translate(205, 58)">
          <rect x="0" y="0" width="145" height="104" rx="8" stroke="#38bdf8" strokeWidth="1.8" fill="#07121d" />
          <rect x="0" y="0" width="145" height="20" rx="8" fill="rgba(56, 189, 248, 0.12)" />
          <text x="10" y="14" fill="#38bdf8" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="700">
            VIBRATION SPECTRUM
          </text>
          <circle cx="132" cy="10" r="2.5" fill="#f97316" />
          
          {/* Grid Lines */}
          <line x1="10" y1="62" x2="135" y2="62" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="72" y1="26" x2="72" y2="98" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />

          {/* Vibration Waveform */}
          <path
            d="M 12 62 L 28 62 L 38 46 L 48 76 L 58 52 L 68 70 L 80 38 L 92 84 L 104 54 L 114 68 L 133 62"
            stroke="#38bdf8"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Bottom Technical Label */}
        <text x="200" y="215" textAnchor="middle" fill="#94a3b8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="600" letterSpacing="0.08em">
          SPEED MEASUREMENT // VIBRATION FAULT DETECTION
        </text>
      </svg>
    );
  }

  // 3. LiFi Text Communication System using Arduino
  if (
    title.toLowerCase().includes('lifi') ||
    (category.toLowerCase().includes('embedded') && !title.toLowerCase().includes('tachometer')) ||
    category.toLowerCase().includes('hardware')
  ) {
    return (
      <svg viewBox="0 0 400 240" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-visual-svg">
        <rect width="400" height="240" fill="#0b1b2b" />
        <pattern id="lifiGrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(56, 189, 248, 0.08)" strokeWidth="0.8" />
        </pattern>
        <rect width="400" height="240" fill="url(#lifiGrid)" />

        {/* Optical Transmitter Node (Left) */}
        <rect x="40" y="70" width="60" height="100" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="70" y="115" textAnchor="middle" fill="#38bdf8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">
          TX // LED
        </text>
        <circle cx="100" cy="120" r="8" fill="#38bdf8" />

        {/* Optical Receiver Node (Right) */}
        <rect x="300" y="70" width="60" height="100" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="330" y="115" textAnchor="middle" fill="#38bdf8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">
          RX // SENS
        </text>
        <circle cx="300" cy="120" r="8" fill="#0ea5e9" />

        {/* Intense Optical Light Beam */}
        <path d="M 100 115 L 300 100 L 300 140 L 100 125 Z" fill="url(#lifiBeamGradient)" opacity="0.45" />
        <defs>
          <linearGradient id="lifiBeamGradient" x1="100" y1="120" x2="300" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="0.5" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Central Pulse Transmission Wave */}
        <line x1="105" y1="120" x2="295" y2="120" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="8 6" />

        {/* Telemetry packet */}
        <rect x="170" y="65" width="60" height="20" rx="4" fill="rgba(15, 23, 42, 0.85)" stroke="#38bdf8" strokeWidth="1" />
        <text x="200" y="79" textAnchor="middle" fill="#38bdf8" fontFamily="'JetBrains Mono', monospace" fontSize="9">
          VLC // 9600b
        </text>

        <text x="200" y="215" textAnchor="middle" fill="#94a3b8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="600" letterSpacing="0.08em">
          VISIBLE LIGHT COMMUNICATION // ARDUINO
        </text>
      </svg>
    );
  }

  // 3. AI-based Smart Waste Detection and Classification System
  return (
    <svg viewBox="0 0 400 240" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-visual-svg">
      <rect width="400" height="240" fill="#f1f5f9" />
      <pattern id="wasteGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.8" />
      </pattern>
      <rect width="400" height="240" fill="url(#wasteGrid)" />

      {/* Waste Bin 1 with Bounding Box */}
      <rect x="65" y="75" width="90" height="115" rx="4" fill="#64748b" opacity="0.3" stroke="#059669" strokeWidth="1.8" strokeDasharray="5 3" />
      <rect x="65" y="55" width="85" height="18" rx="3" fill="#059669" />
      <text x="72" y="68" fill="#ffffff" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">
        RECYCLABLE 96%
      </text>

      {/* Waste Bin 2 with Bounding Box */}
      <rect x="180" y="75" width="90" height="115" rx="4" fill="#64748b" opacity="0.3" stroke="#2563eb" strokeWidth="1.8" strokeDasharray="5 3" />
      <rect x="180" y="55" width="85" height="18" rx="3" fill="#2563eb" />
      <text x="187" y="68" fill="#ffffff" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">
        ORGANIC 94%
      </text>

      {/* Target Reticle */}
      <circle cx="225" cy="130" r="22" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="225" y1="102" x2="225" y2="158" stroke="#2563eb" strokeWidth="1" />
      <line x1="197" y1="130" x2="253" y2="130" stroke="#2563eb" strokeWidth="1" />

      {/* Detection Confidence Tracker */}
      <rect x="290" y="80" width="80" height="70" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
      <text x="300" y="100" fill="#1e293b" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="700">YOLOv8 DETECT</text>
      <text x="300" y="118" fill="#059669" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">FPS: 42</text>
      <text x="300" y="136" fill="#64748b" fontFamily="'JetBrains Mono', monospace" fontSize="8">MAP: 0.912</text>

      <text x="200" y="222" textAnchor="middle" fill="#64748b" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="600" letterSpacing="0.08em">
        YOLOV8 COMPUTER VISION // REAL-TIME INFERENCE
      </text>
    </svg>
  );
};
