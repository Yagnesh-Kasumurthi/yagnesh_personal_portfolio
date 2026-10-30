import type { JournalEntry, JournalCategory } from '../types/journal';

/**
 * Engineering Journal Categories Definition & Metadata
 */
export const journalCategories: { id: JournalCategory; label: string; description: string; accentColor: string }[] = [
  {
    id: 'Currently Exploring',
    label: 'Currently Exploring',
    description: 'Technologies, semiconductor concepts, and edge compute architectures under active study.',
    accentColor: '#2563EB', // Tech Blue
  },
  {
    id: 'Technical Insights',
    label: 'Technical Insights',
    description: 'Deep dives and structural observations in digital design, microarchitectures, and computing.',
    accentColor: '#0B1B2B', // Deep Navy
  },
  {
    id: 'Experiment Log',
    label: 'Experiment Log',
    description: 'Practical hardware simulations, testbench waveforms, and laboratory circuit measurements.',
    accentColor: '#F97316', // Warm Orange
  },
  {
    id: 'Lessons Learned',
    label: 'Lessons Learned',
    description: 'Engineering challenges encountered during project builds and how they were solved.',
    accentColor: '#059669', // Emerald
  },
  {
    id: 'Future Challenges',
    label: 'Future Challenges',
    description: 'Architectural roadmaps, prospective hardware investigations, and upcoming project plans.',
    accentColor: '#7C3AED', // Muted Purple
  },
];

/**
 * Engineering Journal Entries Data
 * Managed manually through this TypeScript file.
 * Extensible block-based content architecture.
 */
export const journalEntries: JournalEntry[] = [
  {
    id: 'ycpu-8-instruction-decoding-datapath',
    slug: 'ycpu-8-instruction-decoding-datapath',
    title: 'Instruction Decoding and Datapath Coordination in YCPU-8',
    subtitle: 'Modeling multi-stage instruction flow and register operations in an 8-bit custom processor.',
    category: 'Technical Insights',
    date: 'October 24, 2026',
    readingTime: '4 min read',
    shortDescription: 'How the opcode decoder, control unit state machines, and register bank coordinate instruction execution without introducing race conditions.',
    tags: ['Verilog HDL', 'Processor Design', 'VLSI', 'Digital Logic', 'Microarchitecture'],
    githubUrl: 'https://github.com/Yagnesh-Kasumurthi',
    blocks: [
      {
        type: 'paragraph',
        text: 'Designing the YCPU-8 custom 8-bit processor in Verilog HDL provided deep first-principles insight into how classical processor architectures coordinate data transfers. Taking architectural cues from the x86 8086 lineage, the primary engineering objective was isolating individual execution stages—instruction fetch, opcode decoding, operand multiplexing, and writeback—into clearly decoupled hardware blocks.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Microarchitectural Partitioning'
      },
      {
        type: 'paragraph',
        text: 'The processor architecture partitions responsibilities across dedicated modules: an 8-bit Program Counter (PC), synchronous Instruction Memory, an Opcode Decoder, a Control Unit state machine, a four-register Bank (R0 through R3), an 8-bit Arithmetic Logic Unit (ALU), and dedicated Data Memory.'
      },
      {
        type: 'diagram',
        diagramId: 'cpu-datapath',
        caption: 'Figure 1: Simplified RTL Datapath showing Opcode Decoder, Register Bank routing, and ALU execution loop.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Control Unit Signal Generation'
      },
      {
        type: 'paragraph',
        text: 'The control unit decodes 8-bit instruction words where the upper bits designate the operation class (data transfer, arithmetic, bitwise logic, or control flow), and lower bits index destination and source registers.'
      },
      {
        type: 'code',
        language: 'verilog',
        filename: 'control_unit.v',
        code: `// YCPU-8 Instruction Decoder & Control Signal Routing
always @(*) begin
    reg_write_en = 1'b0;
    alu_op       = 4'b0000;
    mem_read     = 1'b0;
    mem_write    = 1'b0;
    jump_en      = 1'b0;

    case (opcode[7:4])
        4'b0001: begin // ADD Rd, Rs
            alu_op       = 4'b0001;
            reg_write_en = 1'b1;
        end
        4'b0010: begin // SUB Rd, Rs
            alu_op       = 4'b0010;
            reg_write_en = 1'b1;
        end
        4'b1000: begin // JZ Address
            if (zero_flag) jump_en = 1'b1;
        end
        default: begin
            // NOP or HALT condition
        end
    endcase
end`
      },
      {
        type: 'callout',
        calloutType: 'takeaway',
        text: 'Key Observation: Complete default assignments at the top of combinational always blocks are essential in Verilog RTL to ensure the synthesis tool does not infer unintended latches for unhandled opcode conditions.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Handling Branch Operations'
      },
      {
        type: 'paragraph',
        text: 'The most delicate synchronization happens during conditional branching (such as Jump if Zero, JZ). The ALU Zero flag must be evaluated and latched before the next rising clock edge so that the Program Counter increments normally or branches to the target address without pipeline bubbles or race conditions.'
      },
      {
        type: 'list',
        listType: 'bullet',
        items: [
          'Ensured combinational ALU flag generation settles well before clock setup time window.',
          'Synchronized PC load enable to assert only when branch condition resolves high.',
          'Verified control flow with dedicated assembly-style test programs in simulation.'
        ]
      }
    ]
  },
  {
    id: 'cmos-logic-fundamentals-propagation-delay',
    slug: 'cmos-logic-fundamentals-propagation-delay',
    title: 'CMOS Logic Fundamentals: Pull-Up/Pull-Down Networks & Propagation Delay',
    subtitle: 'Notes from silicon digital VLSI flow on complementary transistor pairs and timing metrics.',
    category: 'Currently Exploring',
    date: 'October 18, 2026',
    readingTime: '3 min read',
    shortDescription: 'Exploring static CMOS inverter characteristics, why pMOS devices are restricted to pull-up networks, and the physical causes of t_PLH and t_PHL propagation delays.',
    tags: ['VLSI', 'CMOS', 'Digital Electronics', 'Semiconductor', 'RTL Design'],
    blocks: [
      {
        type: 'paragraph',
        text: 'As part of ongoing studies in digital VLSI design and silicon layout principles, I have been analyzing static CMOS logic cells at the transistor level. Understanding the physical complementary behavior between pMOS and nMOS devices clarifies why digital gates exhibit their characteristic switching speeds and noise margins.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'The Complementary Principle'
      },
      {
        type: 'paragraph',
        text: 'Static CMOS circuits rely on two dual networks connected to the output node: a Pull-Up Network (PUN) constructed exclusively with pMOS transistors connected to V_DD, and a Pull-Down Network (PDN) constructed with nMOS transistors connected to Ground (GND).'
      },
      {
        type: 'diagram',
        diagramId: 'cmos-inverter',
        caption: 'Figure 2: Static CMOS Inverter topology illustrating PUN (pMOS) and PDN (nMOS) current paths.'
      },
      {
        type: 'list',
        listType: 'bullet',
        items: [
          'nMOS passes a strong logic 0 (0V) but a degraded logic 1 (V_DD - V_th). Hence, it is restricted to the pull-down network.',
          'pMOS passes a strong logic 1 (V_DD) but a degraded logic 0 (|V_th|). Hence, it is restricted to the pull-up network.',
          'Because hole mobility is approximately 2 to 3 times lower than electron mobility in silicon, pMOS transistors are generally sized with a larger width (W/L ratio) to balance rise and fall transition times.'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Propagation Delay Metrics'
      },
      {
        type: 'paragraph',
        text: 'Gate speed is bounded by charging and discharging the lumped load capacitance (C_L) at the output node, which includes transistor gate capacitances of downstream stages, drain parasitic capacitances, and interconnect wiring capacitance.'
      },
      {
        type: 'callout',
        calloutType: 'note',
        text: 'Propagation delay is quantified using t_PHL (high-to-low transition delay) and t_PLH (low-to-high transition delay), measured from the 50% threshold point of the input voltage to the 50% threshold point of the output voltage.'
      },
      {
        type: 'paragraph',
        text: 'Next in this exploration: investigating dynamic power consumption (P = alpha * C * V^2 * f) and static subthreshold leakage currents as feature sizes scale.'
      }
    ]
  },
  {
    id: 'verilog-simulation-waveform-analysis',
    slug: 'verilog-simulation-waveform-analysis',
    title: 'Verilog Simulation and Waveform Verification with Icarus & VaporView',
    subtitle: 'Verifying register-transfer logic and branch execution through cycle-accurate waveform inspection.',
    category: 'Experiment Log',
    date: 'September 28, 2026',
    readingTime: '4 min read',
    shortDescription: 'Laboratory workflow for compiling Verilog testbenches with Icarus Verilog, dumping VCD waveforms, and verifying signal propagation in VaporView.',
    tags: ['Verilog HDL', 'Icarus Verilog', 'VaporView', 'Simulation', 'Waveforms', 'Testbench'],
    githubUrl: 'https://github.com/Yagnesh-Kasumurthi',
    blocks: [
      {
        type: 'paragraph',
        text: 'Writing Verilog HDL is only half the engineering equation; the more demanding discipline is rigorous verification. During the development of the YCPU-8 processor, signal behavior was systematically validated by compiling testbenches with Icarus Verilog (`iverilog`) and visualizing Value Change Dump (`.vcd`) waveforms in VaporView.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Testbench Structure'
      },
      {
        type: 'paragraph',
        text: 'The testbench generates a stable 50MHz simulated system clock, asserts a synchronized reset pulse to initialize the Program Counter to `8\'h00`, and monitors bus transitions every clock cycle.'
      },
      {
        type: 'code',
        language: 'verilog',
        filename: 'ycpu8_tb.v',
        code: `\`timescale 1ns / 1ps

module ycpu8_tb;
    reg clk;
    reg rst_n;
    wire [7:0] pc_out;
    wire [7:0] alu_result;
    wire zero_flag;

    // Instantiate Device Under Test (DUT)
    ycpu8_top dut (
        .clk(clk),
        .rst_n(rst_n),
        .pc_out(pc_out),
        .alu_result(alu_result),
        .zero_flag(zero_flag)
    );

    // Clock generator: 10ns period -> 100MHz
    always #5 clk = ~clk;

    initial begin
        $dumpfile("ycpu8_waveforms.vcd");
        $dumpvars(0, ycpu8_tb);

        clk   = 0;
        rst_n = 0;
        #15 rst_n = 1; // Release reset synchronously

        #500 $finish;
    end
endmodule`
      },
      {
        type: 'heading',
        level: 3,
        text: 'Waveform Verification Results'
      },
      {
        type: 'diagram',
        diagramId: 'waveform-jz',
        caption: 'Figure 3: Waveform trace demonstrating Zero Flag assertion followed by immediate branch address update in Program Counter.'
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Debugging Insight: When tracing control hazards, always check the exact timing relation between the clock rising edge, flag updates, and register write-enable signals. If a signal transitions simultaneously with the clock, delta cycle ordering can mask real synthesis bugs.'
      },
      {
        type: 'paragraph',
        text: 'Through this workflow, multiple edge cases—including consecutive conditional branch statements and ALU negative overflow flags—were verified before freezing the RTL design.'
      }
    ]
  },
  {
    id: 'tachometer-vibration-signal-acquisition-lessons',
    slug: 'tachometer-vibration-signal-acquisition-lessons',
    title: 'Rotational Speed Measurement and Vibration Signal Acquisition: Practical Lessons',
    subtitle: 'Reflections from implementing tachometer sensing and vibration anomaly monitoring.',
    category: 'Lessons Learned',
    date: 'October 12, 2026',
    readingTime: '5 min read',
    shortDescription: 'Key hardware and firmware takeaways from building the completed Tachometer with Vibration Analysis and Fault Detection system.',
    tags: ['Embedded Systems', 'Vibration Analysis', 'Tachometer', 'Hardware Prototyping', 'Signal Processing'],
    blocks: [
      {
        type: 'paragraph',
        text: 'With the Tachometer with Vibration Analysis and Fault Detection project now fully implemented, reviewing the development trajectory highlights several subtle practical challenges that do not appear in theoretical textbooks.'
      },
      {
        type: 'heading',
        level: 3,
        text: '1. RPM Sensor Interfacing and Pulse Jitter'
      },
      {
        type: 'paragraph',
        text: 'Accurate rotational speed measurement requires clean pulse counting. At varying shaft speeds, optical reflections and sensor positioning can cause false edge triggers. Implementing a hardware RC low-pass filter on the pulse line combined with firmware debounce timeouts was essential to prevent RPM miscalculations at high rotational velocities.'
      },
      {
        type: 'heading',
        level: 3,
        text: '2. Isolating Vibration Transducer Signals'
      },
      {
        type: 'paragraph',
        text: 'Vibration sensing on a mechanical apparatus introduces high-frequency mechanical noise alongside actual operating vibrations. Ground loops and electrical noise from rotating motor drives easily bleed into high-impedance transducer leads.'
      },
      {
        type: 'diagram',
        diagramId: 'tachometer-vibration',
        caption: 'Figure 4: Complete system signal flow showing tachometer pulse counting and vibration acquisition paths.'
      },
      {
        type: 'list',
        listType: 'bullet',
        items: [
          'Direct mechanical coupling: Mounting the vibration transducer solidly to the machine chassis using rigid brackets prevented resonance artifacts.',
          'Consistent sampling rate: Maintaining a deterministic timer interrupt for sampling ensured uniform time-series data.',
          'Baseline thresholding: Capturing undisturbed baseline vibration patterns enabled reliable discrimination between normal rotational hum and abnormal deviations.'
        ]
      },
      {
        type: 'callout',
        calloutType: 'takeaway',
        text: 'Core Lesson: In mixed electro-mechanical embedded instrumentation, mechanical mounting integrity and analog signal shielding are just as critical to measurement fidelity as the firmware processing code.'
      }
    ]
  },
  {
    id: 'synthesizing-custom-rtl-fpga',
    slug: 'synthesizing-custom-rtl-fpga',
    title: 'Synthesizing Custom RTL for FPGA Hardware Platforms',
    subtitle: 'Architectural considerations for moving from software simulation to physical silicon configuration.',
    category: 'Future Challenges',
    date: 'October 28, 2026',
    readingTime: '3 min read',
    shortDescription: 'Technical challenges, clock domain constraints, and pin-assignment workflows planned for synthesizing YCPU-8 onto an FPGA development platform.',
    tags: ['FPGA', 'RTL Synthesis', 'Digital Design', 'Hardware Testing', 'VLSI'],
    blocks: [
      {
        type: 'paragraph',
        text: 'Having verified the YCPU-8 processor architecture through cycle-accurate Verilog simulation in Icarus Verilog, the next major milestone is targeting physical hardware synthesis on an FPGA platform.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Planned Technical Objectives'
      },
      {
        type: 'list',
        listType: 'ordered',
        items: [
          'Clock Division & Debouncing: Generating a stable human-observable clock (1Hz to 10Hz) for step-by-step register inspection, alongside full-speed crystal oscillator inputs.',
          'Memory Resource Mapping: Translating the behavioral register and instruction memory arrays into dedicated Block RAM (BRAM) or distributed LUT RAM primitives.',
          'Physical I/O Constraints: Formulating constraint files (.xdc or .pcf) to map PC outputs, ALU flags, and register states to onboard seven-segment displays and diagnostic LEDs.',
          'Static Timing Analysis (STA): Reviewing setup and hold slack to ensure no timing violations across combinational logic paths.'
        ]
      },
      {
        type: 'callout',
        calloutType: 'note',
        text: 'Challenge Note: In simulation, memory can be initialized instantaneously with $readmemh. On physical hardware, ROM/RAM must be synthesized using vendor memory primitives or an explicit hardware reset state machine.'
      },
      {
        type: 'paragraph',
        text: 'This transition will bridge the gap between abstract RTL modeling and physical silicon implementation.'
      }
    ]
  },
  {
    id: 'lifi-optical-signal-modulation-arduino',
    slug: 'lifi-optical-signal-modulation-arduino',
    title: 'Optical Signal Modulation in Arduino-Based LiFi Communication',
    subtitle: 'Transmitting textual data via modulated LED light beams to a photodetector receiver.',
    category: 'Experiment Log',
    date: 'August 14, 2026',
    readingTime: '4 min read',
    shortDescription: 'Laboratory experiments in optical wireless communication, transmitter LED switching rates, and receiver threshold calibration under ambient light.',
    tags: ['Arduino', 'Embedded C', 'LiFi', 'Hardware Prototyping', 'Optical Communication'],
    blocks: [
      {
        type: 'paragraph',
        text: 'In the completed LiFi Text Communication System, textual ASCII characters were transmitted wirelessly across free space using visible light emitted by high-brightness LEDs. This experimental log documents the transmitter modulation approach and receiver photodiode signal recovery.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Transmitter Modulation Principle'
      },
      {
        type: 'paragraph',
        text: 'Data transmission was implemented using On-Off Keying (OOK) modulation. Textual characters sent from a host terminal were broken down into serial bitstreams, pulsing the LED array at precise microsecond intervals.'
      },
      {
        type: 'code',
        language: 'c',
        filename: 'lifi_transmitter.ino',
        code: `// LiFi Optical Transmitter: Character Serializer
void transmitByte(char c) {
    // Start bit: LED ON
    digitalWrite(LED_TX_PIN, HIGH);
    delayMicroseconds(BIT_PERIOD);

    // 8 Data bits (LSB first)
    for (int i = 0; i < 8; i++) {
        if ((c >> i) & 0x01) {
            digitalWrite(LED_TX_PIN, HIGH);
        } else {
            digitalWrite(LED_TX_PIN, LOW);
        }
        delayMicroseconds(BIT_PERIOD);
    }

    // Stop bit: LED OFF
    digitalWrite(LED_TX_PIN, LOW);
    delayMicroseconds(BIT_PERIOD);
}`
      },
      {
        type: 'diagram',
        diagramId: 'lifi-transceiver',
        caption: 'Figure 5: Optical transmitter-receiver setup with ambient light filtering and comparator amplification.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Overcoming Ambient Light Interference'
      },
      {
        type: 'paragraph',
        text: 'The principal challenge in VLC (Visible Light Communication) is ambient fluorescent and daylight noise. Without optical shielding, DC ambient light saturates the receiver photodiode.'
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Observation: Implementing a collimating aperture lens around the receiver photodiode combined with an adjustable comparator threshold voltage substantially improved reception distance and eliminated stray ambient triggers.'
      }
    ]
  }
];
