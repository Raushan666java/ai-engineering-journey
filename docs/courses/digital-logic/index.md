# Digital Logic — Course Overview

## Course Description

This textbook presents a comprehensive treatment of digital logic design, progressing from fundamental number systems through advanced topics like HDL, DAC/ADC, and timing analysis. The material is suitable for undergraduate students in computer engineering, electrical engineering, and computer science. Each chapter builds systematically upon prior concepts, establishing both theoretical foundations and practical design skills.

## Prerequisites

- Introductory algebra and discrete mathematics
- Familiarity with basic electronics is helpful but not required

## Course Structure

The textbook is organised into fifteen chapters spanning three thematic units:

### Unit I: Digital Logic Foundations (Chapters 1–5)

| Chapter | Title | Topics |
|---------|-------|--------|
| 1 | Introduction | Number systems, binary arithmetic, signed representations, BCD, Gray code |
| 2 | Boolean Algebra | Postulates, theorems, De Morgan's laws, SOP/POS forms, minimisation |
| 3 | Logic Gates | AND, OR, NOT, NAND, NOR, XOR, XNOR; universal gates; logic families |
| 4 | Karnaugh Maps | 2-5 variable K-maps, don't-care conditions, Quine-McCluskey algorithm |
| 5 | Combinational Circuits | Adders, subtractors, multiplexers, demultiplexers, encoders, decoders, comparators |

### Unit II: Sequential Logic (Chapters 6–9)

| Chapter | Title | Topics |
|---------|-------|--------|
| 6 | Sequential Circuits | Latches, flip-flops, state diagrams, Mealy vs Moore machines |
| 7 | State Machines | FSM design, state encoding, sequence detectors, algorithmic state machines |
| 8 | Registers & Counters | Shift registers, synchronous/asynchronous counters, ring counters, applications |
| 9 | Memory Systems | SRAM, DRAM, ROM, PROM, EPROM, EEPROM, Flash; address decoding; memory organisation |

### Unit III: Advanced Topics (Chapters 10–15)

| Chapter | Title | Topics |
|---------|-------|--------|
| 10 | PLA & PAL | Programmable logic arrays, PAL, ROM-based logic design, CPLD architecture |
| 11 | Arithmetic Circuits | Ripple-carry adders, carry-lookahead, multipliers, division, floating-point |
| 12 | HDL | Verilog/VHDL basics, structural/dataflow/behavioural modelling, simulation |
| 13 | DAC & ADC | Sampling theorem, DAC architectures, ADC types, resolution, accuracy |
| 14 | Timing Analysis | Propagation delay, setup/hold constraints, critical path, clock skew, metastability |
| 15 | Advanced Topics | Low-power design, FPGA architecture, asynchronous design, testability |

## Learning Approach

Each chapter follows a consistent pedagogical structure:

1. **Learning Objectives** — Specific, measurable outcomes stated at the outset
2. **Theory** — Formal exposition with definitions, theorems, and explanatory prose
3. **Examples** — Worked problems with step-by-step solutions
4. **Summary** — Concise recapitulation of key concepts
5. **Exercises** — Three tiers of problems: review questions, application problems, and challenge problems

## Notation Conventions

- Binary numbers are suffixed with subscript 2, e.g., `1011_2`
- Hexadecimal numbers use subscript 16, e.g., `A3F_16`
- Active-low signals are denoted by an overline or the suffix `_n`
- Boolean variables appear in italic: *A*, *B*, *C*
- MSB refers to the most significant bit; LSB refers to the least significant bit

## Reference Materials

Students are encouraged to consult the following supplementary resources:

- Morris Mano, *Digital Design*, Pearson
- David A. Patterson and John L. Hennessy, *Computer Organization and Design*, Morgan Kaufmann
- John F. Wakerly, *Digital Design: Principles and Practices*, Pearson
- Harris and Harris, *Digital Design and Computer Architecture*, Morgan Kaufmann

---

[Chapter 1: Introduction](01-introduction.md)

[Chapter 2: Boolean Algebra](02-boolean-algebra.md)

[Chapter 3: Logic Gates](03-logic-gates.md)

[Chapter 4: Karnaugh Maps](04-karnaugh-maps.md)

[Chapter 5: Combinational Circuits](05-combinational-circuits.md)

[Chapter 6: Sequential Circuits](06-sequential-circuits.md)

[Chapter 7: State Machines](07-state-machines.md)

[Chapter 8: Registers & Counters](08-registers-counters.md)

[Chapter 9: Memory Systems](09-memory.md)

[Chapter 10: PLA & PAL](10-pla-pal.md)

[Chapter 11: Arithmetic Circuits](11-arithmetic-circuits.md)

[Chapter 12: HDL](12-hdl.md)

[Chapter 13: DAC & ADC](13-dac-adc.md)

[Chapter 14: Timing Analysis](14-timing-analysis.md)

[Chapter 15: Advanced Topics](15-advanced-topics.md)
