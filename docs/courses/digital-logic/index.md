# Digital Logic & Computer Architecture — Course Overview

## Course Description

This textbook presents a comprehensive treatment of digital logic design and computer architecture, progressing from fundamental number systems through modern multi-core and GPU architectures. The material is suitable for undergraduate students in computer engineering, electrical engineering, and computer science. Each chapter builds systematically upon prior concepts, establishing both theoretical foundations and practical design skills.

## Prerequisites

- Introductory algebra and discrete mathematics
- Familiarity with basic electronics is helpful but not required

## Course Structure

The textbook is organised into sixteen chapters spanning three thematic units:

### Unit I: Digital Logic Foundations (Chapters 1–4)

| Chapter | Title | Topics |
|---------|-------|--------|
| 1 | Number Systems | Decimal, binary, octal, hexadecimal; base conversions; signed number representations; BCD; Gray code |
| 2 | Boolean Algebra | Postulates and theorems; De Morgan's laws; SOP/POS forms; Karnaugh maps; Quine-McCluskey minimisation |
| 3 | Logic Gates | AND, OR, NOT, NAND, NOR, XOR, XNOR; universal gates; TTL and CMOS logic families |
| 4 | Combinational Circuits | Adders, subtractors, multiplexers, demultiplexers, encoders, decoders, comparators, ALU design |

### Unit II: Sequential Logic and Memory (Chapters 5–7)

| Chapter | Title | Topics |
|---------|-------|--------|
| 5 | Flip-Flops | SR, JK, D, T flip-flops; edge triggering; characteristic and excitation tables |
| 6 | Sequential Circuits | State diagrams and tables; Mealy vs Moore machines; registers; counters; sequence detectors |
| 7 | Memory Systems | SRAM, DRAM, ROM, PROM, EPROM, EEPROM, Flash; address decoding; memory organisation |

### Unit III: Computer Architecture (Chapters 8–16)

| Chapter | Title | Topics |
|---------|-------|--------|
| 8 | Computer Architecture | Von Neumann and Harvard models; CPU components; instruction cycle; RISC vs CISC |
| 9 | Datapath Design | ALU integration; register file; data path; control signals; single-cycle implementation |
| 10 | Control Unit | Hardwired and microprogrammed control; control logic; micro-instruction sequencing |
| 11 | Instruction Set Architecture | Instruction formats; addressing modes; MIPS ISA reference |
| 12 | Pipelining | Pipeline stages; structural, data, and control hazards; forwarding; branch prediction |
| 13 | Memory Hierarchy | Cache organisation; direct, associative, set-associative mappings; write policies; virtual memory; TLB |
| 14 | Input/Output | Programmed I/O; interrupt-driven I/O; DMA; I/O buses; I/O processors |
| 15 | Modern Architectures | Superscalar; VLIW; multi-core; GPU architecture; vector processing; speculative execution |

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

[Chapter 1: Number Systems](01-number-systems.md)

[Chapter 2: Boolean Algebra](02-boolean-algebra.md)

[Chapter 3: Logic Gates](03-gates.md)

[Chapter 4: Combinational Circuits](04-combinational-circuits.md)

[Chapter 5: Flip-Flops](05-flipflops.md)

[Chapter 6: Sequential Circuits](06-sequential-circuits.md)

[Chapter 7: Memory Systems](07-memory.md)

[Chapter 8: Computer Architecture](08-computer-architecture.md)

[Chapter 9: Datapath Design](09-datapath.md)

[Chapter 10: Control Unit](10-control-unit.md)

[Chapter 11: Instruction Set Architecture](11-isa.md)

[Chapter 12: Pipelining](12-pipelining.md)

[Chapter 13: Memory Hierarchy](13-memory-hierarchy.md)

[Chapter 14: Input/Output](14-io.md)

[Chapter 15: Modern Architectures](15-modern-arch.md)
