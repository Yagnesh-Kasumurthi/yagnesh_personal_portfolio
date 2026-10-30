import React from 'react';

interface JournalDiagramProps {
  diagramId: string;
  caption?: string;
}

export const JournalDiagram: React.FC<JournalDiagramProps> = ({ diagramId, caption }) => {
  let content = null;

  switch (diagramId) {
    case 'cpu-datapath':
      content = (
        <svg viewBox="0 0 600 240" fill="none" className="journal-diagram-svg" aria-label="YCPU-8 Microarchitectural Datapath Diagram">
          <rect width="600" height="240" rx="8" fill="#0B1B2B" stroke="#1E3A5A" strokeWidth="1.5" />
          {/* Subtle Grid */}
          <pattern id="diagGrid1" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(56, 189, 248, 0.06)" strokeWidth="0.8" />
          </pattern>
          <rect width="600" height="240" rx="8" fill="url(#diagGrid1)" />

          {/* Program Counter */}
          <rect x="30" y="70" width="85" height="100" rx="6" fill="#102338" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="72" y="95" textAnchor="middle" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">PROG CNTR</text>
          <rect x="42" y="108" width="61" height="24" rx="4" fill="#07121D" stroke="#0EA5E9" strokeWidth="1" />
          <text x="72" y="124" textAnchor="middle" fill="#F97316" fontFamily="'JetBrains Mono', monospace" fontSize="10" fontWeight="700">PC [7:0]</text>
          <text x="72" y="152" textAnchor="middle" fill="#94A3B8" fontFamily="'JetBrains Mono', monospace" fontSize="8">+1 INCREMENT</text>

          {/* PC to Instr Mem Bus */}
          <line x1="115" y1="120" x2="155" y2="120" stroke="#38BDF8" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Instruction Memory */}
          <rect x="155" y="70" width="100" height="100" rx="6" fill="#102338" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="205" y="95" textAnchor="middle" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">INSTR MEM</text>
          <rect x="168" y="108" width="74" height="24" rx="4" fill="#07121D" stroke="#0EA5E9" strokeWidth="1" />
          <text x="205" y="124" textAnchor="middle" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="9">OPCODE [7:0]</text>
          <text x="205" y="152" textAnchor="middle" fill="#94A3B8" fontFamily="'JetBrains Mono', monospace" fontSize="8">256 BYTES</text>

          {/* Instr Mem to Decoder */}
          <line x1="255" y1="120" x2="295" y2="120" stroke="#38BDF8" strokeWidth="2" />

          {/* Opcode Decoder & Control Unit */}
          <rect x="295" y="50" width="105" height="140" rx="6" fill="#102338" stroke="#0EA5E9" strokeWidth="1.5" />
          <text x="347" y="75" textAnchor="middle" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">CONTROL UNIT</text>
          <text x="347" y="92" textAnchor="middle" fill="#94A3B8" fontFamily="'JetBrains Mono', monospace" fontSize="8">OPCODE DECODER</text>
          <rect x="307" y="105" width="81" height="22" rx="3" fill="#07121D" />
          <text x="347" y="120" textAnchor="middle" fill="#F4D35E" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="600">STATE MACHINE</text>
          <text x="347" y="145" textAnchor="middle" fill="#94A3B8" fontFamily="'JetBrains Mono', monospace" fontSize="7">REG_WRITE_EN</text>
          <text x="347" y="160" textAnchor="middle" fill="#94A3B8" fontFamily="'JetBrains Mono', monospace" fontSize="7">ALU_OP[3:0]</text>
          <text x="347" y="175" textAnchor="middle" fill="#94A3B8" fontFamily="'JetBrains Mono', monospace" fontSize="7">JUMP_EN (BRANCH)</text>

          {/* Branch feedback to PC */}
          <path d="M 347 50 L 347 30 L 72 30 L 72 70" fill="none" stroke="#F97316" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="200" y="24" textAnchor="middle" fill="#F97316" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="600">CONDITIONAL BRANCH FEEDBACK (JZ / JMP)</text>

          {/* Control signals to Reg Bank */}
          <line x1="400" y1="100" x2="435" y2="100" stroke="#38BDF8" strokeWidth="1.5" />

          {/* Register Bank (R0-R3) */}
          <rect x="435" y="60" width="75" height="120" rx="6" fill="#102338" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="472" y="80" textAnchor="middle" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">REG BANK</text>
          <rect x="443" y="88" width="59" height="16" rx="3" fill="#07121D" />
          <text x="472" y="100" textAnchor="middle" fill="#E2E8F0" fontFamily="'JetBrains Mono', monospace" fontSize="8">R0: 8-BIT</text>
          <rect x="443" y="108" width="59" height="16" rx="3" fill="#07121D" />
          <text x="472" y="120" textAnchor="middle" fill="#E2E8F0" fontFamily="'JetBrains Mono', monospace" fontSize="8">R1: 8-BIT</text>
          <rect x="443" y="128" width="59" height="16" rx="3" fill="#07121D" />
          <text x="472" y="140" textAnchor="middle" fill="#E2E8F0" fontFamily="'JetBrains Mono', monospace" fontSize="8">R2: 8-BIT</text>
          <rect x="443" y="148" width="59" height="16" rx="3" fill="#07121D" />
          <text x="472" y="160" textAnchor="middle" fill="#E2E8F0" fontFamily="'JetBrains Mono', monospace" fontSize="8">R3: 8-BIT</text>

          {/* Regs to ALU */}
          <line x1="510" y1="105" x2="535" y2="105" stroke="#38BDF8" strokeWidth="1.5" />
          <line x1="510" y1="135" x2="535" y2="135" stroke="#38BDF8" strokeWidth="1.5" />

          {/* ALU */}
          <polygon points="535,75 585,90 585,150 535,165 535,130 543,120 535,110" fill="#102338" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="560" y="115" textAnchor="middle" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">8-BIT</text>
          <text x="560" y="128" textAnchor="middle" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">ALU</text>
          <text x="560" y="142" textAnchor="middle" fill="#F97316" fontFamily="'JetBrains Mono', monospace" fontSize="7" fontWeight="700">FLAGS</text>

          {/* ALU writeback bus */}
          <path d="M 585 120 L 595 120 L 595 205 L 472 205 L 472 180" fill="none" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="535" y="220" textAnchor="middle" fill="#94A3B8" fontFamily="'JetBrains Mono', monospace" fontSize="7">WRITEBACK BUS</text>
        </svg>
      );
      break;

    case 'cmos-inverter':
      content = (
        <svg viewBox="0 0 540 220" fill="none" className="journal-diagram-svg" aria-label="Static CMOS Inverter Schematic">
          <rect width="540" height="220" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* VDD Rail */}
          <line x1="120" y1="35" x2="380" y2="35" stroke="#059669" strokeWidth="2.5" />
          <text x="250" y="26" textAnchor="middle" fill="#059669" fontFamily="'JetBrains Mono', monospace" fontSize="10" fontWeight="700">V_DD (+ Supply)</text>

          {/* pMOS (PUN) Block */}
          <rect x="200" y="55" width="100" height="42" rx="4" fill="#ECFDF5" stroke="#059669" strokeWidth="1.5" />
          <text x="250" y="74" textAnchor="middle" fill="#065F46" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">pMOS PULL-UP (PUN)</text>
          <text x="250" y="88" textAnchor="middle" fill="#047857" fontFamily="'JetBrains Mono', monospace" fontSize="8">Conducts on IN = 0 (V_DD)</text>
          <circle cx="200" cy="76" r="4" fill="#FFFFFF" stroke="#059669" strokeWidth="1.5" />

          {/* Connection line between pMOS and nMOS */}
          <line x1="250" y1="35" x2="250" y2="55" stroke="#059669" strokeWidth="2" />
          <line x1="250" y1="97" x2="250" y2="123" stroke="#1E293B" strokeWidth="2" />

          {/* Output Node */}
          <circle cx="250" cy="110" r="4.5" fill="#2563EB" />
          <line x1="250" y1="110" x2="360" y2="110" stroke="#2563EB" strokeWidth="2" />
          <text x="368" y="114" fill="#2563EB" fontFamily="'JetBrains Mono', monospace" fontSize="10" fontWeight="700">V_OUT</text>
          <rect x="360" y="124" width="140" height="52" rx="4" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1" />
          <text x="430" y="142" textAnchor="middle" fill="#1E3A8A" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="600">Lumped Load C_L</text>
          <text x="430" y="156" textAnchor="middle" fill="#4B5563" fontFamily="'JetBrains Mono', monospace" fontSize="8">t_PLH / t_PHL Switching</text>

          {/* nMOS (PDN) Block */}
          <rect x="200" y="123" width="100" height="42" rx="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
          <text x="250" y="142" textAnchor="middle" fill="#92400E" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">nMOS PULL-DOWN (PDN)</text>
          <text x="250" y="156" textAnchor="middle" fill="#B45309" fontFamily="'JetBrains Mono', monospace" fontSize="8">Conducts on IN = 1 (GND)</text>

          {/* Ground Rail */}
          <line x1="250" y1="165" x2="250" y2="185" stroke="#1E293B" strokeWidth="2" />
          <line x1="220" y1="185" x2="280" y2="185" stroke="#1E293B" strokeWidth="2.5" />
          <line x1="230" y1="190" x2="270" y2="190" stroke="#1E293B" strokeWidth="2" />
          <line x1="240" y1="195" x2="260" y2="195" stroke="#1E293B" strokeWidth="1.5" />
          <text x="250" y="209" textAnchor="middle" fill="#475569" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="600">GND (0V)</text>

          {/* Input Bus */}
          <line x1="80" y1="110" x2="160" y2="110" stroke="#0B1B2B" strokeWidth="2" />
          <line x1="160" y1="76" x2="160" y2="144" stroke="#0B1B2B" strokeWidth="2" />
          <line x1="160" y1="76" x2="196" y2="76" stroke="#0B1B2B" strokeWidth="2" />
          <line x1="160" y1="144" x2="200" y2="144" stroke="#0B1B2B" strokeWidth="2" />
          <text x="70" y="114" textAnchor="end" fill="#0B1B2B" fontFamily="'JetBrains Mono', monospace" fontSize="10" fontWeight="700">V_IN</text>
        </svg>
      );
      break;

    case 'waveform-jz':
      content = (
        <svg viewBox="0 0 560 190" fill="none" className="journal-diagram-svg" aria-label="Branch Waveform Diagram">
          <rect width="560" height="190" rx="8" fill="#07121D" stroke="#1E3A5A" strokeWidth="1.5" />
          {/* Signal Labels */}
          <text x="25" y="45" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">CLK</text>
          <text x="25" y="85" fill="#F4D35E" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">ALU_RES</text>
          <text x="25" y="125" fill="#F97316" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">ZERO_FLAG</text>
          <text x="25" y="165" fill="#34D399" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">PC [7:0]</text>

          {/* Clock Wave */}
          <path d="M 100 48 L 130 48 L 130 32 L 160 32 L 160 48 L 190 48 L 190 32 L 220 32 L 220 48 L 250 48 L 250 32 L 280 32 L 280 48 L 310 48 L 310 32 L 340 32 L 340 48 L 370 48 L 370 32 L 400 32 L 400 48 L 430 48 L 430 32 L 460 32 L 460 48 L 490 48 L 490 32 L 520 32 L 520 48" stroke="#38BDF8" strokeWidth="1.8" />

          {/* ALU_RES */}
          <rect x="100" y="73" width="90" height="18" fill="rgba(244, 211, 94, 0.1)" stroke="#F4D35E" strokeWidth="1" />
          <text x="145" y="86" textAnchor="middle" fill="#F4D35E" fontFamily="'JetBrains Mono', monospace" fontSize="8">8'h05 (NZ)</text>
          <rect x="190" y="73" width="120" height="18" fill="rgba(244, 211, 94, 0.25)" stroke="#F4D35E" strokeWidth="1.5" />
          <text x="250" y="86" textAnchor="middle" fill="#F4D35E" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="700">8'h00 (ZERO!)</text>
          <rect x="310" y="73" width="210" height="18" fill="rgba(244, 211, 94, 0.1)" stroke="#F4D35E" strokeWidth="1" />
          <text x="415" y="86" textAnchor="middle" fill="#F4D35E" fontFamily="'JetBrains Mono', monospace" fontSize="8">8'h12</text>

          {/* ZERO_FLAG */}
          <path d="M 100 132 L 190 132 L 190 114 L 310 114 L 310 132 L 520 132" stroke="#F97316" strokeWidth="2" />
          <text x="250" y="110" textAnchor="middle" fill="#F97316" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="700">FLAG ASSERTED HIGH</text>

          {/* PC [7:0] */}
          <rect x="100" y="153" width="90" height="18" fill="rgba(52, 211, 153, 0.1)" stroke="#34D399" strokeWidth="1" />
          <text x="145" y="166" textAnchor="middle" fill="#34D399" fontFamily="'JetBrains Mono', monospace" fontSize="8">PC=0x08</text>
          <rect x="190" y="153" width="90" height="18" fill="rgba(52, 211, 153, 0.1)" stroke="#34D399" strokeWidth="1" />
          <text x="235" y="166" textAnchor="middle" fill="#34D399" fontFamily="'JetBrains Mono', monospace" fontSize="8">PC=0x09 (JZ)</text>
          <rect x="280" y="153" width="240" height="18" fill="rgba(52, 211, 153, 0.25)" stroke="#34D399" strokeWidth="1.5" />
          <text x="400" y="166" textAnchor="middle" fill="#34D399" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="700">PC=0x24 (TARGET BRANCH ADDRESS LOADED)</text>
        </svg>
      );
      break;

    case 'tachometer-vibration':
      content = (
        <svg viewBox="0 0 540 180" fill="none" className="journal-diagram-svg" aria-label="Tachometer and Vibration Analysis Flow">
          <rect width="540" height="180" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Shaft / Motor Source */}
          <rect x="30" y="45" width="95" height="90" rx="6" fill="#1E293B" stroke="#0EA5E9" strokeWidth="1.5" />
          <text x="77" y="75" textAnchor="middle" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">ROTATING SHAFT</text>
          <circle cx="77" cy="100" r="16" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="77" cy="100" r="4" fill="#F97316" />

          {/* Dual Pickups */}
          <line x1="125" y1="70" x2="165" y2="70" stroke="#059669" strokeWidth="2" />
          <line x1="125" y1="110" x2="165" y2="110" stroke="#2563EB" strokeWidth="2" />

          {/* RPM Sensor Block */}
          <rect x="165" y="50" width="115" height="40" rx="4" fill="#ECFDF5" stroke="#059669" strokeWidth="1.2" />
          <text x="222" y="68" textAnchor="middle" fill="#065F46" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="700">RPM SENSOR</text>
          <text x="222" y="80" textAnchor="middle" fill="#047857" fontFamily="'JetBrains Mono', monospace" fontSize="7">Optical Pulse Train</text>

          {/* Vibration Transducer Block */}
          <rect x="165" y="95" width="115" height="40" rx="4" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.2" />
          <text x="222" y="113" textAnchor="middle" fill="#1E3A8A" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="700">VIB TRANSDUCER</text>
          <text x="222" y="125" textAnchor="middle" fill="#1D4ED8" fontFamily="'JetBrains Mono', monospace" fontSize="7">Analog Accelerometer</text>

          {/* Interconnect to Microcontroller */}
          <line x1="280" y1="70" x2="320" y2="70" stroke="#059669" strokeWidth="2" />
          <line x1="280" y1="115" x2="320" y2="115" stroke="#2563EB" strokeWidth="2" />

          {/* Microcontroller Embedded Unit */}
          <rect x="320" y="40" width="185" height="100" rx="6" fill="#102338" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="412" y="65" textAnchor="middle" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">EMBEDDED MCU</text>
          <rect x="335" y="75" width="155" height="24" rx="3" fill="#07121D" stroke="#0EA5E9" strokeWidth="1" />
          <text x="412" y="91" textAnchor="middle" fill="#F4D35E" fontFamily="'JetBrains Mono', monospace" fontSize="8">RPM Counter + ADC Sampling</text>
          <text x="412" y="118" textAnchor="middle" fill="#94A3B8" fontFamily="'JetBrains Mono', monospace" fontSize="8">Fault Thresholding &amp; Detection</text>
        </svg>
      );
      break;

    case 'lifi-transceiver':
      content = (
        <svg viewBox="0 0 540 160" fill="none" className="journal-diagram-svg" aria-label="LiFi Optical Transceiver Setup">
          <rect width="540" height="160" rx="8" fill="#0B1B2B" stroke="#1E3A5A" strokeWidth="1.5" />
          {/* Arduino TX */}
          <rect x="30" y="40" width="100" height="80" rx="6" fill="#102338" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="80" y="75" textAnchor="middle" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">ARDUINO TX</text>
          <text x="80" y="92" textAnchor="middle" fill="#94A3B8" fontFamily="'JetBrains Mono', monospace" fontSize="8">UART 9600b</text>

          {/* LED Emitter */}
          <circle cx="155" cy="80" r="14" fill="#38BDF8" stroke="#60A5FA" strokeWidth="2" />
          <text x="155" y="83" textAnchor="middle" fill="#0B1B2B" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="700">LED</text>

          {/* Light Beam */}
          <path d="M 169 74 L 370 50 L 370 110 L 169 86 Z" fill="rgba(56, 189, 248, 0.15)" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 2" />
          <text x="270" y="75" textAnchor="middle" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="600">MODULATED BEAM (OOK)</text>
          <text x="270" y="92" textAnchor="middle" fill="#F97316" fontFamily="'JetBrains Mono', monospace" fontSize="7">Free Space Optical Path</text>

          {/* Photodiode RX */}
          <circle cx="385" cy="80" r="14" fill="#0EA5E9" stroke="#38BDF8" strokeWidth="2" />
          <text x="385" y="83" textAnchor="middle" fill="#0B1B2B" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="700">PD</text>

          {/* Arduino RX */}
          <rect x="410" y="40" width="100" height="80" rx="6" fill="#102338" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="460" y="75" textAnchor="middle" fill="#38BDF8" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700">ARDUINO RX</text>
          <text x="460" y="92" textAnchor="middle" fill="#34D399" fontFamily="'JetBrains Mono', monospace" fontSize="8">Comparator &amp; Text</text>
        </svg>
      );
      break;

    default:
      return null;
  }

  return (
    <figure className="journal-diagram-container">
      <div className="journal-diagram-viewport">{content}</div>
      {caption && <figcaption className="journal-diagram-caption">{caption}</figcaption>}
    </figure>
  );
};
