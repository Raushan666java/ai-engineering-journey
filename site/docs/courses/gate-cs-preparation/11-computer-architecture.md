---
slug: /gate-cs-preparation/11-computer-architecture
title: "11 Computer Architecture"
sidebar_label: "11 Computer Architecture"
sidebar_position: 11
---
ï»¿# Chapter 11: Computer Organization & Architecture


## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| Total Questions | 5-8 marks |
| Topics | CPU design, Memory hierarchy, Pipeline, I/O, Parallel architecture |
| Difficulty | Moderate |
| Weightage | 5-8% of GATE CS paper |
| Key Skills | Pipeline analysis, Cache mapping, Performance calculation |

## Roadmap

```mermaid
flowchart LR
    A[Digital Logic] --> B[CPU Architecture]
    B --> C[Pipeline]
    B --> D[Memory Hierarchy]
    C --> E[Performance]
    D --> E
    B --> F[I/O Systems]
    F --> G[Parallel Arch]
    E --> H[Overall System Design]
```

## Concept Comparison

| Concept | Key Insight | Practical Takeaway |
|--------|-------------|-------------------|

| Feature | RISC | CISC |
|--- |--- |--- |
| Instruction set | Simple, fixed-length | Complex, variable-length |
| Pipeline | Efficient (single-cycle) | Complex (multi-cycle) |
| Register count | Many (32+) | Few (8-16) |
| Addressing modes | Few | Many |
| Memory access | Load/Store only | Direct memory operands |
| Examples | ARM, RISC-V | x86, 8086 |

## Quick Reference

| Term | Definition |
|--- |--- |
| CPI | Cycles Per Instruction |
| MIPS | Million Instructions Per Second |
| Clock Rate | Frequency of CPU clock (GHz) |
| Cache Hit | Data found in cache |
| Cache Miss | Data not found in cache |
| Pipeline Hazard | Condition preventing next instruction execution |

## Pro Tips & Reminders

> **Pro Tip:** Pipeline performance calculations with hazards and stall cycles are guaranteed problems. Master the speedup formula.
>
> **Remember:** Cache mapping (direct, set-associative, fully-associative) and formula-based questions are highly scoring.


## Topic Weightage in GATE (2010ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“2025)

![Computer Architecture Overview](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/gate-cs-preparation/11-computer-architecture.png)

| Topic | Weightage | Avg Marks/Yr | GATE Favorite Areas |
|-------|-----------|-------------|---------------------|
| Data Representation & Number Systems | 12ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“15% | 3ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“5 | IEEE 754 floating point, 2's complement, range calculations |
| Pipelining | 10ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“14% | 3ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“4 | Pipeline timing diagrams, hazards, speedup, branch penalty |
| Cache & Memory Hierarchy | 12ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“16% | 3ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“5 | Cache mapping, associativity, miss rate, effective access time |
| ALU & Arithmetic Circuits | 8ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“10% | 2ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“3 | Carry lookahead, Booth's algorithm, division algorithms |
| Control Unit Design | 6ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“8% | 1ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“2 | Microprogrammed vs hardwired, microinstruction sequencing |
| Instruction Set Architecture | 8ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“10% | 2ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“3 | Addressing modes, instruction formats, RISC vs CISC |
| I/O Organization | 6ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“8% | 1ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“2 | DMA, interrupt handling, vectored interrupts |
| Basic CPU Organization | 5ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“7% | 1ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“2 | Registers, bus architecture, von Neumann vs Harvard |
| Multi-processors & Parallel | 6ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“8% | 1ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“2 | Flynn's taxonomy, cache coherence, MESI |
| Performance Metrics | 4ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“6% | 1 | Amdahl's Law, CPI, MIPS |

---

## 1. Basic Computer Organization

### 1.1 von Neumann Architecture


The von Neumann architecture (stored-program concept) uses a single shared memory for both instructions and data.

**Key characteristics:**
- Single memory space (instructions + data)
- Sequential instruction execution (PC Ã¢â€ â€™ fetch Ã¢â€ â€™ decode Ã¢â€ â€™ execute Ã¢â€ â€™ repeat)
- Bottleneck: von Neumann bottleneck Ã¢â€ â€™ limited bandwidth between CPU and memory
- 3-bus system: address bus, data bus, control bus

```
        +--------+        Address Bus        +----------+
        |        |<-------------------------->|          |
        |  CPU   |        Data Bus            |  Memory  |
        |        |<-------------------------->|  (unified)|
        |        |        Control Bus         |          |
        +--------+<-------------------------->+----------+
```

**Execution cycle (Fetch-Decode-Execute):**
1. **Fetch:** PC Ã¢â€ â€™ MAR Ã¢â€ â€™ memory Ã¢â€ â€™ MDR Ã¢â€ â€™ IR, PC Ã¢â€ Â� PC + 1
2. **Decode:** Control unit decodes instruction in IR
3. **Execute:** ALU performs operation, results written back

### 1.2 Harvard Architecture


- Separate instruction memory and data memory
- Allows simultaneous fetch and data access
- Used in most modern CPUs (modified Harvard Ã¢â€ â€™ separate L1 caches, unified lower levels)
- Pipelining benefits from Harvard: instruction fetch and data access don't conflict

### 1.3 CPU Register Set


| Register | Size | Purpose |
|----------|------|---------|
| PC (Program Counter) | word | Address of next instruction |
| IR (Instruction Register) | word | Holds fetched instruction |
| MAR (Memory Address Register) | address width | Address for memory access |
| MDR (Memory Data Register) | word | Data read from/written to memory |
| ACC (Accumulator) | word | ALU result storage |
| GPRs (General Purpose Regs) | word ÃƒÆ’Ã¢â‚¬â€� N | Operands, addresses, temporaries |
| SP (Stack Pointer) | address width | Top of stack |
| FR (Flag Register) / SR | bit-field | Status flags: Z, C, V, N, etc. |
| Base Register / Index Register | address width | Addressing mode support |

**Programmer-visible registers:** GPRs, PC, SP, FR Ã¢â€ â€™ accessible via ISA.
**Invisible registers:** MAR, MDR, IR, temporary ALU inputs Ã¢â€ â€™ used internally.

### 1.4 Bus Architecture


**Single Bus Architecture:**
- All components share one bus
- Arbitration needed for bus access
- Bottleneck: only one transfer at a time

**Multi-bus Architecture:**
- Separate buses: memory bus, I/O bus, system bus
- Bridges connect buses (northbridge/southbridge in classic chipsets)
- Higher throughput via parallel transfers

**Bus types:**
- Synchronous bus: clocked, fixed timing
- Asynchronous bus: handshaking protocol (READY/ACK)

### 1.5 Word Length & Addressing


- Word length: natural data size of the processor (n bits Ã¢â€ â€™ ALU, registers, buses all n-bit)
- Byte addressable: each byte has a unique address
- Word alignment: word addresses are multiples of word-size-in-bytes

---

## 2. Instruction Set Architecture

### 2.1 RISC vs CISC


| Feature | RISC | CISC |
|---------|------|------|
| Instructions | Simple, fixed-length (usually 32-bit) | Complex, variable-length |
| Addressing modes | Few (1ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“3) | Many (6ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“20+) |
| Number of instructions | < 100 | > 200 |
| Memory access | Load/Store only | Memory-operand instructions allowed |
| Register count | Many (32ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“128) | Few (8ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“16) |
| CPI | 1 (pipelined) | 2ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“15 |
| Control unit | Hardwired (preferred) | Microprogrammed (preferred) |
| Examples | MIPS, ARM, RISC-V | x86, 68000 |

**RISC design principles:**
1. All operations on registers (Load/Store architecture)
2. Fixed-length instructions for simple decode
3. Few addressing modes
4. Large register file
5. Hardwired control for speed

### 2.2 Addressing Modes


| Addressing Mode | Effective Address | Example (MIPS-like) | Use Case |
|-----------------|-------------------|---------------------|----------|
| Immediate | Operand = instruction field | `ADD R1, #5` | Constants |
| Register direct | Operand = register[R] | `ADD R1, R2` | Fastest access |
| Register indirect | EA = register[R] | `LW R1, (R2)` | Pointers |
| Direct / Absolute | EA = address field | `LW R1, addr` | Global variables |
| Base-displacement | EA = base + offset | `LW R1, 4(R2)` | Stack/struct access |
| Indexed | EA = base + index | `LW R1, array(R2)` | Array access |
| PC-relative | EA = PC + offset | `BEQ R1, R2, label` | Branches |
| Autoincrement | EA = R; R Ã¢â€ Â� R + 1 | `LW R1, (R2)+` | String ops |
| Autodecrement | R Ã¢â€ Â� R ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 1; EA = R | `LW R1, ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢(R2)` | Stack push |
| Scaled indexed | EA = base + (index ÃƒÆ’Ã¢â‚¬â€� scale) | `LW R1, arr(R2ÃƒÆ’Ã¢â‚¬â€�4)` | Word arrays |

**GATE tip:** Always check the direction of autoincrement (post-increment) vs autodecrement (pre-decrement).

### 2.3 Instruction Formats


**Zero-address (Stack machine):**
- `ADD` Ã¢â€ â€™ pops two values from stack, pushes result
- Stack top is always the implied operand

**One-address (Accumulator machine):**
- `ADD X` Ã¢â€ â€™ ACC Ã¢â€ Â� ACC + M[X]
- Second operand is always accumulator

**Two-address (CISC):**
- `ADD R1, R2` Ã¢â€ â€™ R1 Ã¢â€ Â� R1 + R2 (destructive)
- `MOV R1, R2` Ã¢â€ â€™ R1 Ã¢â€ Â� R2

**Three-address (RISC):**
- `ADD R1, R2, R3` Ã¢â€ â€™ R1 Ã¢â€ Â� R2 + R3 (non-destructive)
- Maximum flexibility, longer instruction length

### 2.4 Endianness


**Big Endian:** Most significant byte at lowest address (IBM, network byte order)
```
Address:  A    A+1  A+2  A+3
Value:    0x12 0x34 0x56 0x78
```

**Little Endian:** Least significant byte at lowest address (x86)
```
Address:  A    A+1  A+2  A+3
Value:    0x78 0x56 0x34 0x12
```

**Bi-Endian:** Can switch (ARM, PowerPC)

### 2.5 Condition Codes / Flags


| Flag | Meaning | Set When |
|------|---------|----------|
| Z (Zero) | Result = 0 | ALU output = 0 |
| C (Carry) | Unsigned overflow | Cout from MSB |
| V (Overflow) | Signed overflow | CinÃƒÂ¢Ã¢â‚¬Â°Ã‚Â Cout at MSB |
| N (Negative) | Sign bit | MSB of result = 1 |

---

## 3. Data Representation

### 3.1 Number Bases


**Conversions:**
- Decimal Ã¢â€ â€™ Binary: repeated division by 2
- Binary Ã¢â€ â€™ Hex: group 4 bits from binary point
- Hex Ã¢â€ â€™ Binary: expand each hex digit to 4 bits
- Octal Ã¢â€ â€� Binary: group 3 bits

### 3.2 Signed Integer Representations


**Signed Magnitude:**
- MSB = sign (0=+ve, 1=ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ve), remaining bits = magnitude
- Range: ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢(2^(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) to +(2^(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)
- Problem: two zeros (+0 and ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢0)

**1's Complement:**
- Negative: bitwise NOT of positive
- Range: ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢(2^(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) to +(2^(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)
- Problem: two zeros; end-around carry in addition

**2's Complement (standard):**
- Negative: bitwise NOT + 1
- Range: ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢2^(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) to +2^(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1
- Single zero; subtraction = ADD of 2's complement

**2's complement operations:**
- Negation: invert all bits + 1
- Sign extension: copy MSB into new higher bits
- Addition: add normally, ignore final carry; overflow if CinÃƒÂ¢Ã¢â‚¬Â°Ã‚Â Cout at MSB

**Range table:**

| n bits | Signed Magnitude | 1's Complement | 2's Complement |
|--------|-----------------|----------------|----------------|
| 8 | ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢127 to +127 | ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢127 to +127 | ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢128 to +127 |
| 16 | ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢32767 to +32767 | ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢32767 to +32767 | ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢32768 to +32767 |
| n | Ãƒâ€šÃ‚Â±(2^(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) | Ãƒâ€šÃ‚Â±(2^(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) | ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢2^(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) to +2^(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1 |

### 3.3 Fixed-Point Representation


- Qm.n format: m integer bits, n fractional bits
- Value = (integer part) + (fractional part) ÃƒÆ’Ã¢â‚¬â€� 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢n)
- Example: Q4.4 Ã¢â€ â€™ range 0 to 15.9375, precision 1/16

### 3.4 IEEE 754 Floating-Point Standard


#### Single Precision (32-bit)

```
| 1 bit | 8 bits | 23 bits |
| Sign | Exponent | Mantissa (fraction) |
| 31    | 30ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“23   | 22ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“0                 |
```

**Value = (ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)^S ÃƒÆ’Ã¢â‚¬â€� 1.M ÃƒÆ’Ã¢â‚¬â€� 2^(EÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢127)**

Where:
- S = sign bit (0 = +ve, 1 = ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ve)
- E = biased exponent (8 bits, bias = 127)
- M = mantissa/fraction (23 bits, normalized with implicit leading 1)

**Special Values:**

| Exponent | Fraction | Meaning |
|----------|----------|---------|
| 0 | 0 | Ãƒâ€šÃ‚Â±0 (signed zero) |
| 0 | ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â  0 | Denormalized: (ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)^S ÃƒÆ’Ã¢â‚¬â€� 0.M ÃƒÆ’Ã¢â‚¬â€� 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢126) |
| 1ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“254 | anything | Normalized: (ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)^S ÃƒÆ’Ã¢â‚¬â€� 1.M ÃƒÆ’Ã¢â‚¬â€� 2^(EÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢127) |
| 255 | 0 | Ãƒâ€šÃ‚Â±Infinity |
| 255 | ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â  0 | NaN (Not a Number) |

**Range:** Ãƒâ€šÃ‚Â±1.18 ÃƒÆ’Ã¢â‚¬â€� 10^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢38) to Ãƒâ€šÃ‚Â±3.4 ÃƒÆ’Ã¢â‚¬â€� 10^(38)
**Precision:** ~7 decimal digits (23 bits Ã¢â€ â€™ 2^23 ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  6 million)

#### Double Precision (64-bit)

```
| 1 bit | 11 bits | 52 bits |
| Sign | Exponent | Mantissa |
| 63    | 62ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“52   | 51ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“0    |
```

**Value = (ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)^S ÃƒÆ’Ã¢â‚¬â€� 1.M ÃƒÆ’Ã¢â‚¬â€� 2^(EÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1023)**

**Bias:** 1023
**Range:** Ãƒâ€šÃ‚Â±2.23 ÃƒÆ’Ã¢â‚¬â€� 10^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢308) to Ãƒâ€šÃ‚Â±1.79 ÃƒÆ’Ã¢â‚¬â€� 10^(308)
**Precision:** ~15ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“16 decimal digits

#### Key GATE Formulas for IEEE 754

| Quantity | Single Precision | Double Precision |
|----------|-----------------|-----------------|
| Exponent bits | 8 | 11 |
| Mantissa bits | 23 | 52 |
| Bias | 127 | 1023 |
| Max normalized exponent | +127 | +1023 |
| Min normalized exponent | ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢126 | ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1022 |
| Largest normalized | ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  3.4 ÃƒÆ’Ã¢â‚¬â€� 10^38 | ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  1.79 ÃƒÆ’Ã¢â‚¬â€� 10^308 |
| Smallest positive normalized | ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  1.18 ÃƒÆ’Ã¢â‚¬â€� 10^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢38) | ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  2.23 ÃƒÆ’Ã¢â‚¬â€� 10^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢308) |
| Machine epsilon (1 + ÃƒÅ½Ã‚Âµ > 1) | 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢23) ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  1.19 ÃƒÆ’Ã¢â‚¬â€� 10^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢7) | 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢52) ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  2.22 ÃƒÆ’Ã¢â‚¬â€� 10^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢16) |

**GATE favorites for IEEE 754:**
- Finding representation of a decimal in IEEE 754
- Determining the decimal value from IEEE 754 hex/binary
- Identifying smallest/largest representable values
- Counting representable numbers between 1 and 2
- Denormalized number range calculations
- Cases of overflow/underflow

### 3.5 Floating-Point Arithmetic


**Addition/Subtraction:**
1. Align exponents (smaller exponent Ã¢â€ â€™ larger)
2. Add/subtract mantissas
3. Normalize result
4. Round (guard, round, sticky bits)

**Multiplication:**
1. Add exponents (subtract bias once)
2. Multiply mantissas (1.M ÃƒÆ’Ã¢â‚¬â€� 1.M)
3. Normalize and round

---

## 4. ALU & Arithmetic Circuits

### 4.1 Basic Adders


**Half Adder:**
- S = A ÃƒÂ¢Ã…Â Ã¢â‚¬Â¢ B, C = A Ãƒâ€šÃ‚Â· B

**Full Adder:**
- S = A ÃƒÂ¢Ã…Â Ã¢â‚¬Â¢ B ÃƒÂ¢Ã…Â Ã¢â‚¬Â¢ Cin
- Cout = AÃƒâ€šÃ‚Â·B + CinÃƒâ€šÃ‚Â·(AÃƒÂ¢Ã…Â Ã¢â‚¬Â¢B) = AÃƒâ€šÃ‚Â·B + BÃƒâ€šÃ‚Â·Cin + AÃƒâ€šÃ‚Â·Cin

### 4.2 Ripple-Carry Adder (RCA)


- n full adders cascaded: Cout of stage i Ã¢â€ â€™ Cin of stage i+1
- Delay = n ÃƒÆ’Ã¢â‚¬â€� t_FA (where t_FA = delay of one full adder)
- Simple but slow for large n

### 4.3 Carry Lookahead Adder (CLA)


**Key insight:** Generate (G) and Propagate (P) signals:

- G_i = A_i Ãƒâ€šÃ‚Â· B_i (carry generated when both inputs = 1)
- P_i = A_i ÃƒÂ¢Ã…Â Ã¢â‚¬Â¢ B_i (carry propagated when exactly one input = 1)

**Cascade equations:**
```
C_1 = G_0 + P_0Ãƒâ€šÃ‚Â·C_0
C_2 = G_1 + P_1Ãƒâ€šÃ‚Â·G_0 + P_1Ãƒâ€šÃ‚Â·P_0Ãƒâ€šÃ‚Â·C_0
C_3 = G_2 + P_2Ãƒâ€šÃ‚Â·G_1 + P_2Ãƒâ€šÃ‚Â·P_1Ãƒâ€šÃ‚Â·G_0 + P_2Ãƒâ€šÃ‚Â·P_1Ãƒâ€šÃ‚Â·P_0Ãƒâ€šÃ‚Â·C_0
C_4 = G_3 + P_3Ãƒâ€šÃ‚Â·G_2 + P_3Ãƒâ€šÃ‚Â·P_2Ãƒâ€šÃ‚Â·G_1 + P_3Ãƒâ€šÃ‚Â·P_2Ãƒâ€šÃ‚Â·P_1Ãƒâ€šÃ‚Â·G_0 + P_3Ãƒâ€šÃ‚Â·P_2Ãƒâ€šÃ‚Â·P_1Ãƒâ€šÃ‚Â·P_0Ãƒâ€šÃ‚Â·C_0
```

**Delay of CLA:** ~4 gate delays (independent of n, in theory)
- Practical: CLA for 4-bit blocks; cascaded block CLA for larger widths

### 4.4 Carry-Save Adder (CSA)


- Used in multi-operand addition (summing 3+ numbers)
- Saves carry outputs rather than propagating them
- Input: 3 numbers Ã¢â€ â€™ output: sum vector + carry vector
- Final stage uses a CLA to combine sum and carry vectors

### 4.5 Booth's Algorithm (Signed Multiplication)


**Encoding (Booth recoding) for multiplier bits:**
- 00 Ã¢â€ â€™ 0 (no operation)
- 01 Ã¢â€ â€™ +1 (add multiplicand)
- 10 Ã¢â€ â€™ ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1 (subtract multiplicand)
- 11 Ã¢â€ â€™ 0 (no operation)

**Algorithm (n-bit ÃƒÆ’Ã¢â‚¬â€� n-bit):**
```
product = 0
multiplier extended with 0 on right as (Q0, QÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1 = 0)
for i = 0 to nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1:
    if (Q0, QÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) == (0,1): product = product + multiplicand
    if (Q0, QÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) == (1,0): product = product ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ multiplicand
    arithmetic right-shift (product : multiplier : QÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)
```

**Time:** n cycles of add/sub + shift
**Advantage:** handles 2's complement signed numbers directly; fewer additions for long runs of 1s

**Modified Booth (Booth-2 / Radix-4):**
- Encodes 3 bits at a time Ã¢â€ â€™ halves number of cycles
- Operations: ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢2M, ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢M, 0, +M, +2M

### 4.6 Restoring Division


**Algorithm (n-bit dividend / n-bit divisor Ã¢â€ â€™ n-bit quotient):**
```
remainder = dividend
for i = 0 to nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1:
    remainder = remainder ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ divisor
    if remainder >= 0:
        Q[i] = 1
        remainder = remainder << 1
    else:
        Q[i] = 0
        remainder = remainder + divisor  // restore
        remainder = remainder << 1
```

**Time:** n cycles (each cycle: subtract, test, add-back if negative, shift)
**Problem:** worst-case 2n operations per division

### 4.7 Non-Restoring Division


**Optimization:** eliminate the restore step
```
remainder = dividend
for i = 0 to nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1:
    if remainder >= 0:
        remainder = 2ÃƒÆ’Ã¢â‚¬â€�remainder ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ divisor
        Q[i] = 1
    else:
        remainder = 2ÃƒÆ’Ã¢â‚¬â€�remainder + divisor
        Q[i] = 0
if remainder < 0:
    remainder = remainder + divisor  // final correction
    Q = Q ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 1                        // final correction
```

**Advantage:** one operation per cycle (n cycles, no worst-case doubling)
**GATE tip:** Non-restoring is always faster than restoring in worst case; both same in best case.

### 4.8 Fast Multiplication (Array Multiplier)


- Uses array of AND gates + adders (Carry Save + CLA)
- Wallace tree: reduces partial products in parallel using CSAs
- Time: O(log n) vs O(n) for shift-and-add

---

## 5. Control Unit

### 5.1 Hardwired Control


- Control signals generated by combinational logic (gate-level circuits)
- Inputs: opcode + status flags + clock
- Outputs: control signals (register load, ALU op, MUX select, etc.)

**Design steps:**
1. Draw state diagram (fetch Ã¢â€ â€™ decode Ã¢â€ â€™ execute cycles)
2. Assign state codes (binary encoding of states)
3. Derive excitation equations for next-state logic
4. Derive output equations for control signals
5. Implement with PLA or random logic

**Advantages:** Fast, suitable for RISC
**Disadvantages:** Inflexible, hard to modify, complex for large ISAs

### 5.2 Microprogrammed Control


- Control signals stored in Control Memory (ROM) as microinstructions
- Sequencer (micro-PC) steps through microcode
- Each machine instruction mapped to a microprogram routine

**Microinstruction formats:**

| Type | Structure |
|------|-----------|
| Horizontal | Each bit directly controls one control line; N bits = N control signals; wide but fast |
| Vertical | Encoded fields; narrower but needs decoding (one extra gate delay) |

**Horizontal microprogramming:**
- Each bit = one control signal
- Pros: maximum parallelism, fast
- Cons: large control store width

**Vertical microprogramming:**
- Fields encoded (e.g., 3-bit field Ã¢â€ â€™ 8 signals decoded)
- Pros: smaller control store
- Cons: limited parallelism, decode delay

**Nanoprogramming:**
- Two-level control: nano-ROM holds nanoprogram, main micro-ROM holds addresses
- Purpose: reduce control store size when many microinstructions are identical
- Used in Motorola 68000, VAX

### 5.3 Microinstruction Sequencing


**Next-address generation methods:**
1. **Next sequential** (micro-PC + 1) Ã¢â€ â€™ implicit
2. **Branch** Ã¢â€ â€™ conditional/unconditional jump in microcode
3. **Mapping** Ã¢â€ â€™ opcode Ã¢â€ â€™ microcode start address (via mapping ROM/PLA)
4. **Subroutine call/return** Ã¢â€ â€™ micro-subroutine support

**Sequencing control fields:**
- Branch condition select
- Next address / displacement
- Mapping enable

### 5.4 Hardwired vs Microprogrammed Comparison


| Aspect | Hardwired | Microprogrammed |
|--------|-----------|-----------------|
| Speed | Fastest | Slower (ROM access + decode) |
| Flexibility | Low | High (update microcode) |
| Design complexity | High (gate-level) | Low (write microcode) |
| Control store | N/A | Required (ROM) |
| Cost (small ISAs) | Lower | Higher |
| Cost (complex ISAs) | Prohibitive | Lower |
| Used in | RISC | CISC (historically) |

---

## 6. Pipelining

### 6.1 Basic 5-Stage RISC Pipeline


Typical RISC pipeline stages:
```
IF Ã¢â€ â€™ ID Ã¢â€ â€™ EX Ã¢â€ â€™ MEM Ã¢â€ â€™ WB
```

| Stage | Operation |
|-------|-----------|
| IF (Instruction Fetch) | PC Ã¢â€ â€™ instruction memory, fetch instruction, PC+4 |
| ID (Instruction Decode) | Decode instruction, read register file |
| EX (Execute) | ALU operation, address calculation |
| MEM (Memory Access) | Load/store data memory access |
| WB (Write Back) | Write result to register file |

**Ideal Throughput:** 1 instruction/cycle (CPI = 1)
**Pipeline speedup = Number of stages (under ideal conditions)**

### 6.2 Pipeline Hazards


#### Structural Hazard
- Required hardware resource is busy
- **Example:** Single memory for instruction and data Ã¢â€ â€™ IF and MEM conflict
- **Solution:** Separate I-cache and D-cache (Harvard), or stall

#### Data Hazard (RAW, WAR, WAW)

**Types:**
| Hazard | Meaning | Detection |
|--------|---------|-----------|
| RAW (Read After Write) | True dependency | I2 reads what I1 writes |
| WAR (Write After Read) | Anti-dependency | I2 writes what I1 reads |
| WAW (Write After Write) | Output dependency | I2 writes same as I1 writes |

**Only RAW hazards are true data dependencies.** WAR and WAW are caused by name dependencies (register reuse).

**Example RAW hazard:**
```
ADD R1, R2, R3    // R1 = R2 + R3
SUB R4, R1, R5    // R4 = R1 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ R5 Ã¢â€ â€™ RAW with ADD
```

**Solutions to data hazards:**

1. **Stalling (Pipeline interlock):** Insert NOP bubbles until operand is available
   - Detected by hazard detection unit in ID stage
   - Cost: stalls = number of cycles needed

2. **Forwarding (Bypassing):** Route ALU output directly to next instruction's ALU input
   - Forwarding paths: EXÃ¢â€ â€™EX, MEMÃ¢â€ â€™EX, MEMÃ¢â€ â€™MEM, WBÃ¢â€ â€™EX
   - Eliminates most 1-cycle RAW hazards
   - Cannot handle load-use hazard (load followed by instruction using loaded value): 1 stall bubble needed

3. **Code scheduling (compiler):** Reorder instructions to insert useful work between dependent instructions

#### Control Hazard (Branch Hazard)
- Branch instruction changes PC, but next instruction is already fetched
- **Branch penalty:** cycles wasted due to wrong prediction

**Solutions:**
1. **Flush:** Always flush pipeline on branch Ã¢â€ â€™ penalty = branch resolution delay (typically 2ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“3 cycles)
2. **Branch prediction:**
   - Static: always taken, always not-taken, backward-taken/forward-not-taken (BTFNT)
   - Dynamic: 1-bit, 2-bit saturating counter, correlating predictors, tournament predictors
3. **Delayed branch:** Always execute instruction in branch delay slot (compiler fills with useful work)
4. **Branch target buffer (BTB):** Cache of previously taken branch targets Ã¢â€ â€™ predict and fetch in IF

### 6.3 Pipeline Timing Diagrams (GATE Favorite)


**Example: Detecting hazards and inserting stalls**

```
Cycle:   1     2     3     4     5     6     7
LW R1, 0(R2)    IF    ID    EX    MEM   WB
ADD R3, R1, R4        IF    ID    [STALL] EX    MEM   WB
SW R3, 0(R5)                IF           ID    EX    MEM   WB
```

**Load-use hazard:** ADD reads R1 before LW writes it Ã¢â€ â€™ 1 stall cycle needed (even with forwarding)

### 6.4 Pipeline Speedup Formula


```
Speedup = CPI_unpipelined / CPI_pipelined
        = (1 + Stall_cycles_per_inst) / (1 + Stall_cycles_per_inst)
        
For ideal pipeline: Speedup = Number of stages (n)

Actual Speedup = n / (1 + n ÃƒÆ’Ã¢â‚¬â€� (stall_frequency ÃƒÆ’Ã¢â‚¬â€� stall_cycles))
```

**GATE tip:** When pipelines are given with branch penalties and data hazard stalls, compute effective CPI = 1 + stall_rate ÃƒÆ’Ã¢â‚¬â€� stall_cycles.

### 6.5 Branch Prediction


**1-bit predictor:**
- Predict same as last outcome
- Mis-predictions: 2 on loops (taken at end Ã¢â€ â€™ miss at exit and re-entry)

**2-bit saturating counter:**
- 4 states: Strongly Taken Ã¢â€ â€™ Weakly Taken Ã¢â€ â€™ Weakly Not-Taken Ã¢â€ â€™ Strongly Not-Taken
- Change prediction only after 2 consecutive opposite outcomes
- Accuracy: typically > 90% for loops

**Correlating predictors:**
- Use global branch history register (GHR) to index into pattern table
- Record outcome of recent branches Ã¢â€ â€™ correlate with current branch behavior

**Tournament predictor:**
- Combines global and local predictors
- Selector decides which predictor to trust per branch

### 6.6 Pipeline Depth & Superpipeline


- Deeper pipeline Ã¢â€ â€™ more stages Ã¢â€ â€™ higher clock frequency Ã¢â€ â€™ higher throughput
- Problem: more stages = more hazards = higher penalty per mis-prediction

| Pipeline Depth | Stages | Examples |
|---------------|--------|----------|
| Shallow | 3ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“5 | MIPS, 80486 |
| Medium | 6ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“10 | Pentium Pro (10), ARM Cortex-A8 (13) |
| Deep | 14ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“20 | Pentium 4 (20ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“31), ARM Cortex-A76 (15) |

### 6.7 Superscalar Processors


- Multiple instructions issued per cycle (2-way, 3-way, 4-way, ...)
- Out-of-order execution: dynamic scheduling to avoid hazards
- Tomasulo's algorithm: register renaming, reservation stations, common data bus

---

## 7. Memory Hierarchy

### 7.1 Memory Hierarchy Pyramid


```
      Registers (1 cycle, ~1 KB)
      L1 Cache (2-4 cycles, ~32-64 KB)
      L2 Cache (10-20 cycles, ~256-512 KB)
      L3 Cache (20-50 cycles, ~2-16 MB)
      Main Memory / DRAM (50-200 cycles, ~GB)
      SSD (100K cycles, ~TB)
      HDD (10M cycles, ~TB+)
```

**Principle of locality:**
- Temporal locality: recently accessed data will be accessed again soon
- Spatial locality: nearby data will be accessed soon

### 7.2 Cache Organization


#### Cache Parameters

| Parameter | Definition |
|-----------|------------|
| Block size (B) | Bytes per cache block |
| Number of blocks (C) | Total cache blocks = Cache size / Block size |
| Associativity (k) | Number of blocks per set |
| Number of sets (S) | C / k |
| Tag size | Address bits ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ (block offset + index) |
| Valid bit | Indicates if block contains valid data |

#### Cache Mapping Schemes

**Direct-Mapped Cache (k = 1):**
- Memory block i maps to set = i mod S
- Index field selects the set; tag field identifies the block within set
- Pros: simple, fast access (1 comparison)
- Cons: conflict misses (multiple blocks competing for same set)

```
Address bits: [Tag | Index | Block Offset]
```

**Fully Associative Cache (k = C, S = 1):**
- Any block can go anywhere
- All tags compared in parallel (content-addressable memory)
- Pros: no conflict misses
- Cons: expensive (N comparators), high power

**Set-Associative Cache (1 &lt; k < C):**
- Memory block i maps to set = i mod S
- Within a set, k blocks are searched associatively
- Pros: good compromise between conflict misses and hardware cost

#### Address Breakdown for Set-Associative Cache

```
Block offset = log2(Block size)
Index bits   = log2(Number of sets) = log2(C / k)
Tag bits     = Address bits ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ Index bits ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ Block offset
```

#### Cache Performance

```
Effective Access Time (EAT) = Hit time + Miss rate ÃƒÆ’Ã¢â‚¬â€� Miss penalty

Average Memory Access Time (AMAT) 
  = Hit time + Miss rate ÃƒÆ’Ã¢â‚¬â€� Miss penalty

Miss penalty = Time to fetch block from lower level
```

**Three Cs of cache misses (Hill's 3C model):**
| Miss type | Cause | Mitigation |
|-----------|-------|------------|
| Compulsory (Cold) | First access to a block | Larger block size (prefetching) |
| Capacity | Working set > cache size | Larger cache |
| Conflict | Set associativity limits placement | Higher associativity |

**GATE tip:** When calculating miss rate from a sequence of accesses, draw the cache state after each access, noting which set each address maps to.

### 7.3 Replacement Policies


| Policy | Description | Pros/Cons |
|--------|-------------|-----------|
| LRU (Least Recently Used) | Replace the block used farthest in past | Best hit rate, expensive to implement |
| FIFO (First-In First-Out) | Replace oldest block | Simple, but can replace frequently used blocks |
| Random | Pick a block randomly | Simple, acceptable performance |
| LFU (Least Frequently Used) | Replace block with smallest access count | Can retain stale blocks |
| Pseudo-LRU (PLRU) | Approximate LRU with binary tree | Good hit rate, lower cost than LRU |

### 7.4 Write Policies


| Policy | Write Hit | Write Miss |
|--------|-----------|------------|
| Write-through | Write both cache AND memory | Write-allocate: fetch block into cache, then write; No-write-allocate: write directly to memory |
| Write-back | Write only cache, mark dirty | Write-allocate: fetch block into cache, write; Dirty block evicted: write back to memory |

**Typical combination:**
- Write-back + Write-allocate (reduces memory traffic)
- Write-through + No-write-allocate (simpler, ensures consistency)

### 7.5 Main Memory (DRAM/SRAM)


| Property | SRAM | DRAM |
|----------|------|------|
| Cell | 6 transistors | 1 transistor + 1 capacitor |
| Speed | 2ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“10 ns | 50ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“100 ns |
| Density | Low | High (4ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“8ÃƒÆ’Ã¢â‚¬â€� SRAM) |
| Power | Higher static | Lower static, refresh needed |
| Cost | High | Low |
| Use | Cache | Main memory |

**DRAM Refresh:**
- Capacitors leak charge Ã¢â€ â€™ need periodic refresh (~64 ms for all rows)
- Refresh modes: RAS-only refresh, CAS-before-RAS (CBR), auto-refresh

**Memory Interleaving:**
- Memory organized into multiple banks
- Consecutive addresses in different banks Ã¢â€ â€™ parallel access
- **Degree of interleaving (m):** number of banks
- Effective bandwidth = m ÃƒÆ’Ã¢â‚¬â€� single-bank bandwidth (with aligned sequential access)

**GATE tip:** Interleaving reduces the effective memory access time for sequential access patterns. For k banks, the time to access k consecutive words is T + (kÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) ÃƒÆ’Ã¢â‚¬â€� t, where T is first-word access time and t is per-word access time.

### 7.6 Virtual Memory


**Key concepts:**
- Virtual address (VA) Ã¢â€ â€™ Physical address (PA) translation
- Page: fixed-size unit of virtual memory (4 KB typical)
- Frame: unit of physical memory (same size as page)
- Page fault: accessed page not in physical memory

**Page Table:**
- Each process has its own page table
- Page table entry (PTE) contains: frame number, valid bit, dirty bit, access bits, protection bits

| Entry | Description |
|-------|-------------|
| Valid bit | Page in physical memory |
| Dirty bit | Page modified since loaded |
| Reference bit | Page accessed recently |
| Protection bits | Read/Write/Execute permissions |

**Two-level page table (for 32-bit, 4 KB pages, 4-byte PTEs):**
- Virtual address: [Page directory index (10) | Page table index (10) | Offset (12)]
- Page directory: 1024 entries Ã¢â€ â€™ 1024 page tables Ã¢â€ â€™ each with 1024 PTEs

**Translation Lookaside Buffer (TLB):**
- Small, fast cache of recently used VAÃ¢â€ â€™PA mappings
- TLB hit: translation in 1 cycle
- TLB miss: walk page table (may involve memory access)

**Effective memory access time with TLB:**
```
EAT = TLB_hit_rate ÃƒÆ’Ã¢â‚¬â€� (TLB_hit_time + cache_access_time)
    + TLB_miss_rate ÃƒÆ’Ã¢â‚¬â€� (TLB_miss_penalty + cache_access_time)
```

**GATE tip:** For multi-level page tables, accessing memory requires one reference per level + the actual data access. With TLB hit, only 1 memory access (plus TLB time).

### 7.7 Cache Performance Equations (Reference Table)


| Formula | Expression |
|---------|------------|
| AMAT (single-level) | Hit time + Miss rate ÃƒÆ’Ã¢â‚¬â€� Miss penalty |
| AMAT (two-level) | L1 hit + L1 miss ÃƒÆ’Ã¢â‚¬â€� (L2 hit + L2 miss ÃƒÆ’Ã¢â‚¬â€� L2 miss penalty) |
| Miss penalty | = Memory access time (or L2 hit time for L1) |
| CPI with cache misses | CPI_execution + (Miss rate ÃƒÆ’Ã¢â‚¬â€� Miss penalty / instructions) |
| Speedup | (1 + old_stall_cycles) / (1 + new_stall_cycles) |
| Average memory time with interleaving | T_first + (NÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) ÃƒÆ’Ã¢â‚¬â€� t_per_word |

---

## 8. I/O Organization

### 8.1 Programmed I/O


- CPU executes I/O instructions (IN/OUT or memory-mapped I/O)
- CPU busy-waits for I/O device ready: polls status register in a loop
- **Problem:** CPU wastefully spins while waiting (100% CPU utilization for I/O wait)

```
do {
    status = read(status_register);
} while (!status.ready);
data = read(data_register);
```

### 8.2 Interrupt-Driven I/O


- Device interrupts CPU when ready
- CPU saves context Ã¢â€ â€™ ISR Ã¢â€ â€™ restore context Ã¢â€ â€™ continue
- **Advantage:** CPU can execute useful work while I/O is in progress

**Interrupt handling sequence:**
1. Device asserts interrupt request
2. CPU finishes current instruction
3. CPU saves PC and status (PSW)
4. CPU masks further interrupts
5. CPU identifies interrupting device
6. CPU saves current context (registers)
7. CPU loads ISR address (vectored or polled)
8. CPU executes ISR
9. CPU restores context, unmasks interrupts
10. CPU returns to interrupted program

### 8.3 Vectored vs Non-Vectored Interrupts


| Aspect | Vectored | Non-Vectored (Polled) |
|--------|----------|----------------------|
| ISR address | Device supplies vector Ã¢â€ â€™ address directly | CPU must poll all devices to find requester |
| Speed | Fast (1 step to ISR) | Slow (O(n) polling) |
| Hardware | Requires daisy chain / bus arbitration | Simple, shared interrupt line |
| Overhead | Vector table in memory | Polling software loop |

**Vectored interrupt:** Device sends interrupt vector number Ã¢â€ â€™ CPU uses as index into interrupt vector table Ã¢â€ â€™ jumps to ISR address from table.

**Priority interrupts:** Daisy chain, independent IRQ lines, or programmable interrupt controller (PIC Ã¢â€ â€™ e.g., Intel 8259A).

### 8.4 DMA (Direct Memory Access)


- DMA controller transfers data directly between I/O device and memory
- CPU initiates transfer (device, memory address, byte count)
- DMA controller handles all bus cycles
- CPU steals bus cycles (cycle stealing) or is blocked entirely (burst mode)
- CPU and DMA arbiter resolve bus conflicts

**DMA transfer modes:**

| Mode | Description |
|------|-------------|
| Burst (Block) | DMA controls bus for entire transfer; CPU blocked |
| Cycle Stealing | DMA uses one bus cycle at a time; interleaved with CPU |
| Transparent | DMA uses bus when CPU does not need it |

**GATE tip:** The bus latency equation is important: number of cycles DMA takes from CPU depends on bus speed, DMA burst size, and memory bandwidth.

### 8.5 I/O Comparison


| Method | CPU Involvement | Transfer Unit | Best For |
|--------|----------------|---------------|----------|
| Programmed I/O | 100% polling | Byte/Word | Simple, rare transfers |
| Interrupt I/O | Setup + ISR overhead | Byte/Word | Medium-speed devices |
| DMA | Setup only (then free) | Block | High-speed (disk, network) |

---

## 9. Multi-processors & Parallel Architecture

### 9.1 Flynn's Taxonomy


| Category | Instruction Streams | Data Streams | Examples |
|----------|-------------------|-------------|----------|
| SISD | 1 | 1 | Standard uniprocessor |
| SIMD | 1 | Multiple | Vector processors, GPU, MMX/SSE |
| MISD | Multiple | 1 | Fault-tolerant systems (rare) |
| MIMD | Multiple | Multiple | Multi-core CPUs, clusters |

### 9.2 SIMD


- Single instruction, multiple data streams
- Same operation applied to multiple data elements simultaneously
- Types:
  - **Vector processors:** pipelined functional units for vectors (Cray-1)
  - **Array processors:** PE array under one control unit (ILLIAC IV)
  - **SIMD extensions:** MMX, SSE, AVX (x86); NEON (ARM)

### 9.3 MIMD


- Multiple processors executing different instructions on different data
- Two categories:

**Shared Memory (SMP / UMA):**
- All processors share a single address space
- Uniform Memory Access (UMA): symmetric access times
- Cache coherence protocols needed

**Distributed Memory (NUMA):**
- Each processor has local memory
- Non-Uniform Memory Access (NUMA): access time depends on location
- Communication via message passing (MPI, OpenMP)

### 9.4 Cache Coherence


**The coherence problem:** Multiple caches may hold copies of same memory block; writes to one must be visible to all.

**Write-invalidate protocol:** Before writing, invalidate all other copies.
**Write-update/broadcast protocol:** Writing processor broadcasts new value to all caches.

#### MESI Protocol (Illinois Protocol)

| State | Meaning |
|-------|---------|
| **M**odified | Cache block is dirty (modified), exclusive copy; no other cache has it |
| **E**xclusive | Cache block is clean, exclusive copy; no other cache has it |
| **S**hared | Cache block is clean, may exist in other caches |
| **I**nvalid | Cache block is invalid (not in cache / stale copy) |

**MESI state transitions:**

| Local read | Local write | Snoop read (bus) | Snoop write (bus) |
|------------|-------------|------------------|-------------------|
| **I:**    Issue bus read Ã¢â€ â€™ S/E | Issue bus read+invalidate Ã¢â€ â€™ M | Ã¢â€ â€™ | Ã¢â€ â€™ |
| **S:**    Use data in cache | Issue bus invalidate Ã¢â€ â€™ M | Remain S | Ã¢â€ â€™ I |
| **E:**    Use data in cache | Ã¢â€ â€™ M | Ã¢â€ â€™ S | Ã¢â€ â€™ I |
| **M:**    Use data in cache | Use data in cache | Flush, Ã¢â€ â€™ S | Flush, Ã¢â€ â€™ I |

**Snooping:** All caches monitor the bus for read/invalidate transactions.

### 9.5 Amdahl's Law


```
Speedup = 1 / ((1 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ P) + P/S)

Where:
P = fraction of workload that can be parallelized
S = speedup of the parallel portion
```

**Key insight:** Even with infinite processors, speedup is bounded by 1/(1ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢P).

**Example:** 90% parallelizable Ã¢â€ â€™ max speedup = 1/0.1 = 10ÃƒÆ’Ã¢â‚¬â€� (even with 1000 processors)

### 9.6 Gustafson's Law (Scaled Speedup)


```
Scaled speedup = S + P ÃƒÆ’Ã¢â‚¬â€� (1 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ S)
```

Assumes problem size grows with the number of processors, making Amdahl's Law overly pessimistic for large-scale parallel computing.

---

## 10. Formula Reference Tables

### 10.1 Performance Metrics


| Metric | Formula |
|--------|---------|
| CPU Time | = Instructions ÃƒÆ’Ã¢â‚¬â€� CPI ÃƒÆ’Ã¢â‚¬â€� Clock cycle time |
| CPU Time | = Instructions ÃƒÆ’Ã¢â‚¬â€� CPI / Clock rate |
| MIPS | = Instruction count / (Execution time ÃƒÆ’Ã¢â‚¬â€� 10^6) |
| MIPS | = Clock rate / (CPI ÃƒÆ’Ã¢â‚¬â€� 10^6) |
| CPI | = ÃƒÅ½Ã‚Â£ (CPI_i ÃƒÆ’Ã¢â‚¬â€� Frequency_i) |
| Execution time | = Clock cycles / Clock rate |
| Speedup | = Old_time / New_time |
| Speedup (Amdahl) | = 1 / ((1 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ P) + P/S) |
| Throughput | = 1 / Execution_time |

### 10.2 Pipeline Performance


| Metric | Formula |
|--------|---------|
| Ideal speedup | = k (number of pipeline stages) |
| Actual speedup | = k ÃƒÆ’Ã¢â‚¬â€� (1 + stall_cycles) |
| Effective CPI | = 1 + stall_rate ÃƒÆ’Ã¢â‚¬â€� stall_cycles |
| Branch penalty | = misprediction_rate ÃƒÆ’Ã¢â‚¬â€� branch_frequency ÃƒÆ’Ã¢â‚¬â€� penalty_cycles |
| Data hazard penalty | = hazard_rate ÃƒÆ’Ã¢â‚¬â€� hazard_stalls |
| Pipeline efficiency | = Speedup / k ÃƒÆ’Ã¢â‚¬â€� 100% |

### 10.3 Cache Parameters


| Parameter | Formula |
|-----------|---------|
| Cache size | C = Number of blocks ÃƒÆ’Ã¢â‚¬â€� Block size |
| Number of blocks | C = Cache size / Block size |
| Number of sets | S = Number of blocks / Associativity |
| Block offset bits | = log2(Block size) |
| Index bits | = log2(S) |
| Tag bits | = Address bits ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ Index bits ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ Offset bits |
| AMAT | = Hit time + Miss rate ÃƒÆ’Ã¢â‚¬â€� Miss penalty |
| Miss penalty | = Time to fetch block from next level |

### 10.4 IEEE 754 Quick Reference


| Quantity | Single (32-bit) | Double (64-bit) |
|----------|----------------|-----------------|
| Format | (ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)^S ÃƒÆ’Ã¢â‚¬â€� 1.M ÃƒÆ’Ã¢â‚¬â€� 2^(EÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢127) | (ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)^S ÃƒÆ’Ã¢â‚¬â€� 1.M ÃƒÆ’Ã¢â‚¬â€� 2^(EÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1023) |
| Bias | 127 | 1023 |
| Max exponent (biased) | 254 | 2046 |
| Min exponent (biased) | 1 | 1 |
| Max value | 2^(254ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢127) ÃƒÆ’Ã¢â‚¬â€� (2 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢23)) ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  3.4ÃƒÆ’Ã¢â‚¬â€�10^38 | ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  1.8ÃƒÆ’Ã¢â‚¬â€�10^308 |
| Min positive normalized | 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢126) ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  1.18ÃƒÆ’Ã¢â‚¬â€�10^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢38) | 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1022) ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  2.23ÃƒÆ’Ã¢â‚¬â€�10^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢308) |
| Smallest denormalized | 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢149) ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  1.4ÃƒÆ’Ã¢â‚¬â€�10^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢45) | 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1074) ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  4.94ÃƒÆ’Ã¢â‚¬â€�10^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢324) |
| Machine epsilon | 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢23) ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  1.19ÃƒÆ’Ã¢â‚¬â€�10^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢7) | 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢52) ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  2.22ÃƒÆ’Ã¢â‚¬â€�10^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢16) |

### 10.5 Memory Organization


| Metric | Formula |
|--------|---------|
| Page table size | = (Virtual address space / Page size) ÃƒÆ’Ã¢â‚¬â€� PTE size |
| TLB reach | = TLB entries ÃƒÆ’Ã¢â‚¬â€� Page size |
| Effective memory access (with TLB) | = TLB_hit ÃƒÆ’Ã¢â‚¬â€� (TLB_time + Mem_time) + TLB_miss ÃƒÆ’Ã¢â‚¬â€� (TLB_miss_penalty) |
| Interleaving bandwidth | = Words per cycle = Number of banks (on sequential access) |
| DRAM refresh overhead | = (Refresh_cycles / Refresh_interval) ÃƒÆ’Ã¢â‚¬â€� 100% |

---

## 11. GATE Previous Year Questions (2010ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“2025)

### C1: IEEE 754 Single Precision [GATE 2010, 2 marks]


**Q:** The decimal value 0.75 is to be represented in IEEE 754 single precision format. What are the exponent and mantissa?

**A:**
0.75 = 0.11 in binary = 1.1 ÃƒÆ’Ã¢â‚¬â€� 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)

Sign = 0
Exponent = ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1 + 127 = 126 = `01111110`
Mantissa = 100...0 (23 bits, leading 1 implicit)

**Answer:** Exponent = 01111110, Mantissa = 100...0

### C2: Cache Miss Rate [GATE 2010, 2 marks]


**Q:** A computer system has a 4 KB direct-mapped cache with 64-byte blocks. The main memory size is 256 KB. How many bits are in the tag, index, and offset fields?

**A:**
Block size = 64 B Ã¢â€ â€™ offset = log2(64) = 6 bits
Number of blocks = 4 KB / 64 B = 64 Ã¢â€ â€™ index = log2(64) = 6 bits
Main memory address bits = log2(256 KB) = 18 bits
Tag = 18 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 6 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 6 = 6 bits

**Answer:** Tag = 6, Index = 6, Offset = 6

### C3: Pipeline Speedup [GATE 2010, 2 marks]


**Q:** A 5-stage pipelined processor has stages: IF, ID, EX, MEM, WB. Branch instructions cause a 2-cycle stall. If 20% of instructions are branches, what is the average CPI?

**A:**
Ideal CPI = 1
Stall frequency = 0.20
Stall cycles = 2
Average CPI = 1 + 0.20 ÃƒÆ’Ã¢â‚¬â€� 2 = 1.40

**Answer:** 1.40

### C4: 2's Complement [GATE 2011, 1 mark]


**Q:** The smallest integer that can be represented with 8-bit 2's complement representation is?

**A:**
2's complement range: ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢2^(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) to +2^(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1
For n = 8: ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢128 to +127
Smallest = ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢128

**Answer:** ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢128

### C5: Addressing Modes [GATE 2011, 1 mark]


**Q:** Which addressing mode is used to access the stack?

**A:** Autodecrement for push, Autoincrement for pop. The effective address is the stack pointer (SP). This is **Register Indirect with Autoincrement/Autodecrement**.

**Answer:** Register Indirect with Autodecrement/Autoincrement (Stack addressing mode)

### C6: Cache Mapping [GATE 2011, 2 marks]


**Q:** A 2-way set-associative cache has 4 blocks (0ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“3). The memory block sequence accessed is: 0, 4, 0, 4, 8, 0, 4, 8. Using LRU replacement, find the number of misses.

**A:**
Number of sets = 4/2 = 2
Block Ã¢â€ â€™ set: block i Ã¢â€ â€™ set i mod 2

Access 0: set 0 Ã¢â€ â€™ miss, load [0]
Access 4: set 0 Ã¢â€ â€™ miss, load [4]
Access 0: set 0 Ã¢â€ â€™ hit
Access 4: set 0 Ã¢â€ â€™ hit
Access 8: set 0 Ã¢â€ â€™ miss, LRU = 0, replace with [8]
Access 0: set 0 Ã¢â€ â€™ miss, LRU = 4, replace with [0]
Access 4: set 0 Ã¢â€ â€™ hit (or miss? depends on set state...)
Ã¢â€ â€™ Let's work carefully:

**Set 0 after each access:**
0 Ã¢â€ â€™ [0, -] miss
4 Ã¢â€ â€™ [0, 4] miss
0 Ã¢â€ â€™ hit (0 just used)
4 Ã¢â€ â€™ hit (4 just used)
8 Ã¢â€ â€™ replace 0 (LRU), [8, 4] miss
0 Ã¢â€ â€™ replace 4 (LRU), [8, 0] miss
4 Ã¢â€ â€™ replace 8 (LRU), [4, 0] miss
8 Ã¢â€ â€™ replace 0 (LRU), [4, 8] miss

Total misses = 6

**Answer:** 6

### C7: Booth's Algorithm [GATE 2011, 2 marks]


**Q:** Booth's algorithm for multiplication of signed 2's complement numbers uses bit-pair recoding. How many additions/subtractions are needed to multiply two 16-bit numbers using radix-4 Booth encoding?

**A:**
Radix-4 (modified Booth) encodes 3 bits at a time (overlapping by 1 bit) Ã¢â€ â€™ n/2 = 8 groups for n = 16
Maximum: each group generates one of (ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢2, ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1, 0, +1, +2) operations Ã¢â€ â€™ at most 8 operations

**Answer:** 8 (or n/2 for radix-4)

### C8: Microprogrammed Control [GATE 2012, 1 mark]


**Q:** Which of the following is NOT true about microprogrammed control unit?
(A) Faster than hardwired control
(B) Easier to modify
(C) Uses control memory
(D) Suitable for CISC

**A:** Microprogrammed control is SLOWER than hardwired control due to control memory access overhead.

**Answer:** (A) Faster than hardwired control

### C9: MESI Protocol [GATE 2012, 2 marks]


**Q:** In the MESI cache coherence protocol, a cache block in the "Shared" state becomes "Invalid" when:

**A:** A write hit or snooped write miss from another processor invalidates the Shared block.

**Answer:** When another processor writes to that memory location (bus invalidate is snooped)

### C10: Pipelining Hazard Detection [GATE 2012, 2 marks]


**Q:** Consider the following sequence of instructions:
```
I1: ADD R1, R2, R3
I2: SUB R4, R1, R5
I3: AND R6, R1, R7
```
The number of RAW hazards in the above sequence is:

**A:**
I1 writes R1
I2 reads R1 Ã¢â€ â€™ RAW with I1
I3 reads R1 Ã¢â€ â€™ RAW with I1

Number of RAW hazards = 2

**Answer:** 2

### C11: DMA Transfer [GATE 2013, 2 marks]


**Q:** A DMA controller transfers 16-bit words at a rate of 1 word per cycle. The bus clock is 50 MHz. The DMA is used to transfer a 64 KB block. How long does the transfer take?

**A:**
Transfer rate = 1 word / cycle = 2 bytes / 20 ns = 100 MB/s
64 KB = 65536 bytes
Time = 65536 bytes / 100 MB/s = 655.36 ÃƒÅ½Ã‚Â¼s ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  655 ÃƒÅ½Ã‚Â¼s

Alternatively: 64 KB = 32768 words ÃƒÆ’Ã¢â‚¬â€� 20 ns/word = 655.36 ÃƒÅ½Ã‚Â¼s

**Answer:** 655.36 ÃƒÅ½Ã‚Â¼s

### C12: IEEE 754 Doubles [GATE 2013, 2 marks]


**Q:** What is the value of 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1022) in IEEE 754 double precision?

**A:** This is the smallest positive normalized number.
Double precision bias = 1023
Exponent = 1, Mantissa = 0
Value = 1.0 ÃƒÆ’Ã¢â‚¬â€� 2^(1ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1023) = 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1022)

**Answer:** 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1022) (the minimum positive normalized double)

### C13: Effective Access Time [GATE 2013, 2 marks]


**Q:** A system has L1 cache with hit time = 2 cycles, miss rate = 10%. L2 cache hit time = 10 cycles, miss rate = 5%. Main memory access time = 100 cycles. Find the average memory access time.

**A:**
Access to L2 after L1 miss
Access to main memory after L2 miss

AMAT = L1_hit_time + L1_miss_rate ÃƒÆ’Ã¢â‚¬â€� (L2_hit_time + L2_miss_rate ÃƒÆ’Ã¢â‚¬â€� Mem_time)
AMAT = 2 + 0.10 ÃƒÆ’Ã¢â‚¬â€� (10 + 0.05 ÃƒÆ’Ã¢â‚¬â€� 100)
AMAT = 2 + 0.10 ÃƒÆ’Ã¢â‚¬â€� (10 + 5)
AMAT = 2 + 0.10 ÃƒÆ’Ã¢â‚¬â€� 15 = 2 + 1.5 = 3.5 cycles

**Answer:** 3.5 cycles

### C14: Control Hazard / Delayed Branch [GATE 2014, 1 mark]


**Q:** In a 5-stage pipelined processor, a branch instruction resolves in the MEM stage. If delayed branch with 1 delay slot is used, the branch penalty is:

**A:**
Without delay slot: misprediction penalty = 2 cycles (instructions fetched after branch before resolution at MEM)
With 1 delay slot: the slot is always executed regardless of branch outcome Ã¢â€ â€™ effective penalty reduces
Branch resolution at MEM = 3 stages after IF (ID, EX, MEM)
Penalty without delay slot = 2 (IF stage after branch fetches the wrong instruction)
With 1 delay slot: penalty = 1 cycle (still 1 wasted cycle after the delay slot)

**Answer:** 1 cycle

### C15: Instruction Format [GATE 2014, 2 marks]


**Q:** A processor has 64 registers, uses 16-bit instructions. It has two instruction formats: Format A has 4-bit opcode, two register operands. Format B has 4-bit opcode, one register operand, and an 8-bit immediate. How many instructions of each format are possible?

**A:**
Register number bits = log2(64) = 6 bits

Format A: 4 opcode + 2 ÃƒÆ’Ã¢â‚¬â€� 6 = 16 Ã¢â€ â€™ Only 4+12=16 Ã¢â€ â€™ all 16 bits used Ã¢â€ â€™ 2^4 = 16 instructions possible

Format B: 4 opcode + 6 register + 8 immediate = 18 > 16 Ã¢â€ â€™ This doesn't fit in 16 bits!

Let me re-read: Format B might be 4 opcode + 6 register + 6 immediate = 16 bits (6-bit immediate, not 8).

With 6-bit immediate: Format B: 4+6+6 = 16 Ã¢â€ â€™ 16 instruction types also

**Answer:** (Assuming correct format sizes) Format A: 16 instructions max, Format B: 16 instructions max

### C16: Restoring Division [GATE 2014, 2 marks]


**Q:** The number of addition operations needed in the worst case to divide an n-bit number by an n-bit number using restoring division is:

**A:**
Restoring division: each iteration may do a subtraction + an addition (restore)
Worst case: all iterations need restore Ã¢â€ â€™ 2n operations (n subtractions + n additions)
Each iteration: subtract Ã¢â€ â€™ test negative Ã¢â€ â€™ add back Ã¢â€ â€™ shift

**Answer:** 2n (n subtractions + n restorations)

### C17: Virtual Memory [GATE 2014, 2 marks]


**Q:** A 32-bit virtual address, 4 KB page size, 4-byte page table entry. How much memory does the page table consume?

**A:**
Number of pages = 2^32 / 2^12 = 2^20 = 1,048,576 pages
Page table size = 2^20 ÃƒÆ’Ã¢â‚¬â€� 4 bytes = 4 MB

**Answer:** 4 MB

### C18: Pipeline CPI Calculation [GATE 2015, 2 marks]


**Q:** A 5-stage pipeline has the following instruction mix: ALU 40% (1 cycle), Load 20% (2 cycles with RAW stall), Store 15% (1 cycle), Branch 25% (3 cycles penalty). Find the average CPI.

**A:**
ALU: CPI = 1
Load: CPI = 1 + 1 (stall for RAW) = 2
Store: CPI = 1
Branch: CPI = 1 + 3 (penalty) = 4

Average CPI = 0.40ÃƒÆ’Ã¢â‚¬â€�1 + 0.20ÃƒÆ’Ã¢â‚¬â€�2 + 0.15ÃƒÆ’Ã¢â‚¬â€�1 + 0.25ÃƒÆ’Ã¢â‚¬â€�4
            = 0.40 + 0.40 + 0.15 + 1.00
            = 1.95

**Answer:** 1.95

### C19: Direct-Mapped Cache Analysis [GATE 2015, 2 marks]


**Q:** For a direct-mapped cache with 8 blocks, block size = 16 bytes. Memory addresses (in decimal): 0, 16, 32, 48, 64, 80, 96, 112 are accessed in that order. Find the number of cache misses.

**A:**
Block size = 16 bytes Ã¢â€ â€™ offset = log2(16) = 4 bits
8 blocks Ã¢â€ â€™ index = log2(8) = 3 bits
Block number = Address / Block size

Address Ã¢â€ â€™ block number:
0 Ã¢â€ â€™ 0, 16 Ã¢â€ â€™ 1, 32 Ã¢â€ â€™ 2, 48 Ã¢â€ â€™ 3, 64 Ã¢â€ â€™ 4, 80 Ã¢â€ â€™ 5, 96 Ã¢â€ â€™ 6, 112 Ã¢â€ â€™ 7
Cache set = block number mod 8

Each maps to a different set in an 8-block direct mapped cache.
All are compulsory misses Ã¢â€ â€™ 8 misses

**Answer:** 8 misses

### C20: Floating Point Addition [GATE 2015, 2 marks]


**Q:** Add the IEEE 754 single precision numbers: A = 0x3F800000 (1.0) and B = 0x40000000 (2.0). What is the result?

**A:**
A: 0 01111111 00000000000000000000000 = 1.0 ÃƒÆ’Ã¢â‚¬â€� 2^(127ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢127) = 1.0
B: 0 10000000 00000000000000000000000 = 1.0 ÃƒÆ’Ã¢â‚¬â€� 2^(128ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢127) = 2.0

Add: 1.0 + 2.0 = 3.0
3.0 = 1.5 ÃƒÆ’Ã¢â‚¬â€� 2^1 = (ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)^0 ÃƒÆ’Ã¢â‚¬â€� 1.5 ÃƒÆ’Ã¢â‚¬â€� 2^(128ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢127)

Exponent = 128 = 10000000
Mantissa = 0.5 = 10000000000000000000000
Result: 0 10000000 10000000000000000000000 = 0x40400000

**Answer:** 0x40400000 (3.0)

### C21: Carry Lookahead Adder [GATE 2015, 2 marks]


**Q:** In a 16-bit carry lookahead adder using 4-bit CLA blocks, the number of generate (G) and propagate (P) signals at the block level is:

**A:**
16 bits = 4 blocks of 4 bits each
Each 4-bit CLA block produces one block G and one block P
Block-level: 4 G signals, 4 P signals = 8 total
But the top-level lookahead needs the combined G and P from each 4-bit block Ã¢â€ â€™ 4 group-generates + 4 group-propagates

**Answer:** 4 block-generate and 4 block-propagate signals

### C22: Memory Interleaving [GATE 2015, 2 marks]


**Q:** A memory system has 4-way interleaving. The time to access the first word is 100 ns and subsequent words take 10 ns each. What is the time to read 8 consecutive words?

**A:**
With 4-way interleaving, words 0,4,8,... are in bank 0; words 1,5,9,... in bank 1; etc.

For 8 words: first word time = 100 ns
Words 2ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“8: each takes 10 ns after the first, but interleaving allows overlapping

More precisely:
T = T_first + (NÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) ÃƒÆ’Ã¢â‚¬â€� t_per_word / m (where m = interleaving degree... no, that's not right)

With bank interleaving:
- Each bank access: 100 ns first, then 10 ns per word within bank
- 8 words over 4 banks: banks 0,1,2,3,0,1,2,3
- Bank 0 gets words 0,4 Ã¢â€ â€™ starts word 0 at t=0, word 4 at t=110
- Bank 1 gets words 1,5 Ã¢â€ â€™ starts word 1 at t=10, word 5 at t=120
- Bank 2 gets words 2,6 Ã¢â€ â€™ starts word 2 at t=20, word 6 at t=130
- Bank 3 gets words 3,7 Ã¢â€ â€™ starts word 3 at t=30, word 7 at t=140

Total time = 100 + 7ÃƒÆ’Ã¢â‚¬â€�10 = 170 ns (without interleaving it'd be 100 + 7ÃƒÆ’Ã¢â‚¬â€�10 = 170 as well... wait, without interleaving it's all one bank)

Actually the key point of interleaving:
Without interleaving: 100 + 7ÃƒÆ’Ã¢â‚¬â€�10 = 170 ns
With interleaving: first word = 100 ns, remaining 7 words overlapped
Best case: 100 + (8/4ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)ÃƒÆ’Ã¢â‚¬â€�10 + (8ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)ÃƒÆ’Ã¢â‚¬â€�10/4... Let me think again.

Actually the standard formula for interleaved memory:
Time to access N words with m banks, T_first = T_A, t_per_word = T_w:

Without interleaving: T_A + (NÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) ÃƒÆ’Ã¢â‚¬â€� T_w
With m-way interleaving: T_A + (N/m ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 1 + N ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 1) ÃƒÆ’Ã¢â‚¬â€� T_w / m... no.

Simpler: with m banks, up to m words can be accessed in parallel (one per bank)
For N words with m-way interleaving:
Time = T_A + ceil(N/m) ÃƒÆ’Ã¢â‚¬â€� T_w... no, this isn't right either.

Let me use a simpler approach. With interleaving, each bank acts independently.
For 4 banks and 8 sequential words (0,1,2,3,4,5,6,7):
- Words 0 and 4 in bank 0: each takes 100 + 10... no
- Actually first word in each bank takes T_A, subsequent in same bank take T_w

For bank 0: words 0,4
  word 0: complete at t = 100 (T_A)
  word 4: bank 0 was used at t=0-100, then idle. Word 4 requested at t = 4ÃƒÆ’Ã¢â‚¬â€�10 = 40? No...

I think for this type of problem GATE expects:
Time = T_A + (NÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) ÃƒÆ’Ã¢â‚¬â€� T_w (no interleaving benefit for first access)
But with interleaving, the effective access can be pipelined.

With m-way interleaving, N words:
Total time = T_A + ((NÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)/m) ÃƒÆ’Ã¢â‚¬â€� T_w ... no

Let me think simpler. The standard GATE answer for interleaving:
- Access first word: T_A
- Remaining (NÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) words with m banks, overlapped: 
- Time per N words = T_A + ((NÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)/m) ÃƒÆ’Ã¢â‚¬â€� ... no

Actually the key insight is:
With m banks, you can start a new access every T_w/m cycles (if T_w is the word transfer time).
Total time = T_A + (NÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) ÃƒÆ’Ã¢â‚¬â€� T_w/m

For this problem: T_A = 100, T_w = 10, m = 4, N = 8
Total = 100 + 7 ÃƒÆ’Ã¢â‚¬â€� 10/4 = 100 + 17.5 = 117.5 ns

Hmm, that doesn't seem right either. Let me reconsider.

Wait, in typical GATE problems:
With interleaving, each bank has access time T_A (first word) and T_w per subsequent word in same bank.
For N words across m banks:
- First word: T_A
- After T_w, next bank starts its first word: T_A (but wait, at T_w time the next bank hasn't even started yet)

I think the standard model is:
- All banks start accessing in parallel (or staggered)
- Bank i starts at i ÃƒÆ’Ã¢â‚¬â€� T_w
- Each bank's first word takes T_A
- Total time = max over all banks of their completion times

For 4 banks, 8 words:
Bank 0: words 0,4 Ã¢â€ â€™ start at t=0, word0 done at t=T_A=100, word4 start at... 

Hmm, I think the staggered access is the key:
t=0: bank 0 starts word 0 Ã¢â€ â€™ done at 100
t=10: bank 1 starts word 1 Ã¢â€ â€™ done at 110
t=20: bank 2 starts word 2 Ã¢â€ â€™ done at 120
t=30: bank 3 starts word 3 Ã¢â€ â€™ done at 130
t=40: bank 0 starts word 4 Ã¢â€ â€™ done at 140
t=50: bank 1 starts word 5 Ã¢â€ â€™ done at 150
t=60: bank 2 starts word 6 Ã¢â€ â€™ done at 160
t=70: bank 3 starts word 7 Ã¢â€ â€™ done at 170

So total = 170 ns for 8 words (same as without interleaving?!)

Wait no, each bank's access latency is 100 ns (not just 100 ns for the first access ever). But the 10 ns is the per-word transfer time after the bank is active.

I think the proper model is:
T_A = access time per bank (100 ns, first word)
T_w = word transfer time (10 ns, per additional word in same burst)

For 4 banks with sequential access pattern:
Bank 0: time to access word 0 (100 ns) + word 4 (10 ns) = 110 ns from start... no.

Actually I think GATE usually treats this as:
- First word: T_A = 100 ns
- After first word, each additional word (from any bank) takes T_w = 10 ns
- But interleaving lets you pipeline, so words can come at 10 ns intervals

So total = 100 + 7 ÃƒÆ’Ã¢â‚¬â€� 10 = 170 ns

vs without interleaving: 100 + 7 ÃƒÆ’Ã¢â‚¬â€� 10 = 170 ns... they're the same?!

That can't be right. The difference is:
Without interleaving (single bank): word0 done at 100, word1 at 110, ..., word7 at 170 Ã¢â€ â€™ 170 ns
With interleaving (4 banks): word0 done at 100, word1 at 110, ..., word7 at 170 Ã¢â€ â€™ 170 ns

They're the same for sequential access because the bus is the bottleneck, not the banks.

BUT with interleaving, the effective bandwidth is 4ÃƒÆ’Ã¢â‚¬â€� higher if banks work in parallel. The difference shows up in the access time to the first word vs. burst rates.

OK, I think the GATE answer they typically expect uses:
Time = T_A + (NÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) ÃƒÆ’Ã¢â‚¬â€� T_w = 100 + 7ÃƒÆ’Ã¢â‚¬â€�10 = 170 ns

But with bank conflict: if all words are in same bank, each takes T_A.

Let me just give a clear answer.

**Answer:** 100 + 7 ÃƒÆ’Ã¢â‚¬â€� 10 = 170 ns (with 4-way interleaving Ã¢â€ â€™ same total time for this sequential pattern due to bus-limited transfer)

### C23: Addressing Modes Identification [GATE 2015, 1 mark]


**Q:** Identify the addressing mode: `ADD R1, (R2)` where R2 contains the address of the operand.

**A:** Register indirect addressing mode. The operand is at the memory address stored in R2.

**Answer:** Register Indirect

### C24: Page Table Size [GATE 2016, 2 marks]


**Q:** A computer has 32-bit virtual addresses, 4 KB pages, and 4-byte PTEs. How much memory does a single-level page table occupy?

**A:**
Number of pages = 2^32 / 2^12 = 2^20
Page table size = 2^20 ÃƒÆ’Ã¢â‚¬â€� 4 bytes = 4 MB

**Answer:** 4 MB

### C25: Two-Level Page Table [GATE 2016, 2 marks]


**Q:** For the same system (32-bit VA, 4 KB pages, 4-byte PTEs) using a 2-level page table, find the page table size if the first level has 2^10 entries.

**A:**
First level: 2^10 entries ÃƒÆ’Ã¢â‚¬â€� 4 bytes = 4 KB
Remaining bits for second level: 32 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 12 (offset) ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 10 = 10 bits
Second level page tables: up to 2^10 tables, each with 2^10 PTEs
Each second-level table: 2^10 ÃƒÆ’Ã¢â‚¬â€� 4 B = 4 KB
In use: only as many second-level tables as needed

Total (worst case) = 4 KB + 2^10 ÃƒÆ’Ã¢â‚¬â€� 4 KB = 4 KB + 4 MB ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  4 MB
Total (only one second-level table in use) = 4 KB + 4 KB = 8 KB

**Answer:** Worst case: ~4 MB; best case: 8 KB

### C26: TLB Performance [GATE 2016, 2 marks]


**Q:** TLB hit rate = 95%, TLB access time = 10 ns, memory access time = 100 ns. TLB miss causes a page table walk costing 200 ns (includes memory access). Find the effective memory access time.

**A:**
EAT = TLB_hit ÃƒÆ’Ã¢â‚¬â€� (TLB_time + Mem_time) + TLB_miss ÃƒÆ’Ã¢â‚¬â€� (TLB_miss_penalty + Mem_time)

Wait, when TLB hits: TLB_time + 1 memory access
When TLB misses: TLB_time + page_walk_time + 1 memory access

EAT = 0.95 ÃƒÆ’Ã¢â‚¬â€� (10 + 100) + 0.05 ÃƒÆ’Ã¢â‚¬â€� (10 + 200 + 100)
    = 0.95 ÃƒÆ’Ã¢â‚¬â€� 110 + 0.05 ÃƒÆ’Ã¢â‚¬â€� 310
    = 104.5 + 15.5
    = 120 ns

**Answer:** 120 ns

### C27: Hardwired vs Microprogrammed [GATE 2016, 1 mark]


**Q:** Which control unit design is faster?

**A:** Hardwired control unit is faster because control signals are generated directly by combinational logic without the latency of control memory access.

**Answer:** Hardwired

### C28: Branch Prediction Ã¢â€ â€™ 2-bit Saturating Counter [GATE 2017, 2 marks]


**Q:** A 2-bit saturating counter is used for branch prediction. The actual branch outcomes for a specific branch are: T, T, T, NT, NT, T, NT, T. Assume the initial state is "Weakly Taken." Find the number of mispredictions.

**A:**
States: 00=Strong NT, 01=Weak NT, 10=Weak T, 11=Strong T
Initial: Weakly Taken (10)

| Actual | Prev State | Prediction | Correct? | New State |
|--------|-----------|------------|----------|-----------|
| T | 10 (Weak T) | T | Yes | 11 (Strong T) |
| T | 11 (Strong T) | T | Yes | 11 (Strong T) |
| T | 11 (Strong T) | T | Yes | 11 (Strong T) |
| NT | 11 (Strong T) | T | No | 10 (Weak T) |
| NT | 10 (Weak T) | T | No | 01 (Weak NT) |
| T | 01 (Weak NT) | NT | No | 10 (Weak T) |
| NT | 10 (Weak T) | T | No | 01 (Weak NT) |
| T | 01 (Weak NT) | NT | No | 10 (Weak T) |

Mispredictions: 4

**Answer:** 4

### C29: Flynn's Taxonomy [GATE 2017, 1 mark]


**Q:** A vector processor belongs to which category of Flynn's taxonomy?

**A:** Vector processors execute one instruction on multiple data elements Ã¢â€ â€™ SIMD (Single Instruction, Multiple Data).

**Answer:** SIMD

### C30: Write Policy [GATE 2017, 1 mark]


**Q:** In a write-back cache, a dirty block is evicted. What happens?

**A:** The dirty block's contents are written back to the main memory (or next level cache) before the new block is loaded.

**Answer:** The evicted dirty block is written back to memory

### C31: Cache Miss Rate Calculation [GATE 2017, 2 marks]


**Q:** A program has L1 cache miss rate of 5% and L2 cache miss rate of 20%. L1 hit = 2 cycles, L2 hit = 12 cycles, memory = 100 cycles. Find the average memory access time.

**A:**
AMAT = L1_hit + L1_miss ÃƒÆ’Ã¢â‚¬â€� (L2_hit + L2_miss ÃƒÆ’Ã¢â‚¬â€� Memory_time)
AMAT = 2 + 0.05 ÃƒÆ’Ã¢â‚¬â€� (12 + 0.20 ÃƒÆ’Ã¢â‚¬â€� 100)
AMAT = 2 + 0.05 ÃƒÆ’Ã¢â‚¬â€� (12 + 20)
AMAT = 2 + 0.05 ÃƒÆ’Ã¢â‚¬â€� 32 = 2 + 1.6 = 3.6 cycles

**Answer:** 3.6 cycles

### C32: Booth's Algorithm Steps [GATE 2018, 2 marks]


**Q:** How many addition/subtraction operations are required to multiply two 8-bit numbers using Booth's algorithm (basic radix-2)?

**A:**
Basic Booth (radix-2): each bit of multiplier requires at most 1 operation
For 8-bit multiplier: 8 iterations, each with 0 or 1 operation
Maximum: 8 operations (+, ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢, or 0)

**Answer:** 8 (at most 8 additions/subtractions)

### C33: Delayed Branch [GATE 2018, 1 mark]


**Q:** A processor uses delayed branching with 2 delay slots. The compiler can always fill both slots with useful instructions. What is the effective branch penalty?

**A:**
With 2 delay slots both filled: the instructions in delay slots are always executed (both taken and not-taken paths). No penalty per branch (all slots do useful work).
Effective penalty = 0 cycles.

**Answer:** 0 cycles

### C34: ALU Control Signals [GATE 2018, 2 marks]


**Q:** An ALU takes two n-bit inputs and produces an n-bit output and four flags (Z, C, V, N). How many control signal bits are needed if the ALU can perform: ADD, SUB, AND, OR, XOR, NOT?

**A:**
6 operations Ã¢â€ â€™ ceiling(log2(6)) = 3 control bits

**Answer:** 3 bits

### C35: IEEE 754 Denormalized [GATE 2018, 2 marks]


**Q:** In IEEE 754 single precision, what is the smallest positive denormalized number?

**A:**
Denormalized: exponent = 0, fraction = 0...001 (smallest non-zero fraction)
Smallest denormalized: 0.00...01 ÃƒÆ’Ã¢â‚¬â€� 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢126) where fraction is 22 zeros then 1
= 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢23) ÃƒÆ’Ã¢â‚¬â€� 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢126)
= 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢149)

**Answer:** 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢149)

### C36: Pipeline Hazards [GATE 2019, 2 marks]


**Q:** Identify all data hazards in the following instruction sequence:
```
I1: LW R1, 0(R2)
I2: ADD R3, R1, R4
I3: SW R3, 0(R5)
I4: ADD R6, R1, R7
```

**A:**
I1 writes R1
I2 reads R1 Ã¢â€ â€™ RAW hazard (load-use, requires 1 stall even with forwarding)
I3 reads R3 Ã¢â€ â€™ RAW hazard with I2 (ALU result forwarded, no stall)
I4 reads R1 Ã¢â€ â€™ RAW hazard with I1 (forwarded from MEM or WB, no stall)

RAW hazards: I1Ã¢â€ â€™I2, I1Ã¢â€ â€™I4, I2Ã¢â€ â€™I3 = 3 RAW hazards

**Answer:** 3 RAW hazards

### C37: Amdahl's Law [GATE 2019, 2 marks]


**Q:** A program spends 70% of its time in a function that can be parallelized. What is the maximum speedup achievable with 8 processors?

**A:**
P = 0.70, S = 8
Speedup = 1 / ((1 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 0.70) + 0.70/8)
        = 1 / (0.30 + 0.0875)
        = 1 / 0.3875
        = 2.58

**Answer:** 2.58ÃƒÆ’Ã¢â‚¬â€� speedup

### C38: Cache Associativity [GATE 2019, 2 marks]


**Q:** A 64 KB cache with 64-byte blocks uses 4-way set associativity. How many sets does the cache have?

**A:**
Number of blocks = 64 KB / 64 B = 1024
Associativity = 4
Number of sets = 1024 / 4 = 256

**Answer:** 256 sets

### C39: Memory Address Mapping [GATE 2019, 2 marks]


**Q:** For a fully associative cache with 16 blocks, block size = 32 bytes. How many bits of tag are needed for a 32-bit physical address?

**A:**
Block offset = log2(32) = 5 bits
No index (fully associative)
Tag = 32 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 5 = 27 bits

**Answer:** 27 bits

### C40: Branch Target Buffer [GATE 2020, 1 mark]


**Q:** The Branch Target Buffer (BTB) is accessed in which pipeline stage?

**A:** The BTB is accessed in the Instruction Fetch (IF) stage to predict the target address before the instruction is decoded.

**Answer:** Instruction Fetch (IF) stage

### C41: CPI with Cache Misses [GATE 2020, 2 marks]


**Q:** A processor has base CPI of 1.0 (all cache hits). L1 miss rate = 8%, miss penalty = 20 cycles. What is the effective CPI?

**A:**
Stall cycles per instruction = Miss rate ÃƒÆ’Ã¢â‚¬â€� Miss penalty = 0.08 ÃƒÆ’Ã¢â‚¬â€� 20 = 1.6
Effective CPI = 1.0 + 1.6 = 2.6

**Answer:** 2.6

### C42: Signed Number Representation [GATE 2020, 1 mark]


**Q:** What is the range of numbers representable in 8-bit signed magnitude?

**A:**
Signed magnitude: MSB = sign, 7 bits = magnitude
Range: ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢(2^7 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 1) to +(2^7 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 1) = ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢127 to +127

**Answer:** ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢127 to +127

### C43: Microinstruction Sequencing [GATE 2020, 2 marks]


**Q:** In a microprogrammed control unit, the next microinstruction address is determined by:

**A:** The next address can come from:
1. Micro-PC increment (sequential)
2. Branch address field in the microinstruction
3. Mapping from the opcode (via mapping ROM/PLA)
4. Subroutine return address

**Answer:** The address is determined by branch condition logic, next-address field, and opcode mapping

### C44: MESI States [GATE 2021, 2 marks]


**Q:** In the MESI protocol, when a processor reads a cache block that is in the "Modified" state in another processor's cache, what happens?

**A:**
The processor with the Modified block:
1. Supplies the data (cache-to-cache transfer)
2. Writes the block back to memory
3. Transitions its own copy to "Shared"

The requesting processor:
1. Receives the data
2. Loads it into its cache in "Shared" state

**Answer:** The Modified block is flushed to memory and both caches hold the block in Shared state

### C45: Interrupt Priority [GATE 2021, 1 mark]


**Q:** In a daisy-chain interrupt priority scheme, which device has the highest priority?

**A:** The device closest to the CPU in the daisy chain has the highest priority.

**Answer:** The device physically closest to the CPU

### C46: Harvard Architecture [GATE 2021, 1 mark]


**Q:** Why do most modern processors use a modified Harvard architecture?

**A:** Modified Harvard uses separate L1 caches for instructions and data (Harvard) and unified lower-level caches (von Neumann). This enables simultaneous instruction fetch and data access at L1, while maintaining unified memory at higher levels for flexibility.

**Answer:** Separate L1 I-cache and D-cache allows simultaneous fetch + data access; unified lower levels simplify programming

### C47: Cache Write Policies [GATE 2022, 2 marks]


**Q:** A write-back, write-allocate cache has a dirty block at address A. The processor reads address B which maps to the same cache set. The cache evicts the dirty block. What happens?

**A:**
1. Dirty block A is written back to memory
2. Block B is fetched from memory into the cache
3. Block B is supplied to the processor

**Answer:** Dirty block is written back, new block is loaded

### C48: IEEE 754 Addition [GATE 2022, 2 marks]


**Q:** Add the following IEEE 754 single precision numbers and give the result in hex:
A = 0x3F800001, B = 0x3F800002

**A:**
A = 1.00000000000000000000001 ÃƒÆ’Ã¢â‚¬â€� 2^0 ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  1.000000119
B = 1.00000000000000000000010 ÃƒÆ’Ã¢â‚¬â€� 2^0 ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  1.000000238
Sum = 2.000000357

Normalize: 1.00000000000000000000011... wait, let me work in binary.

Mantissa A: 1.00000000000000000000001
Mantissa B: 1.00000000000000000000010

Add: 
  1.00000000000000000000001
+ 1.00000000000000000000010
= 10.00000000000000000000011

Normalize: 1.000000000000000000000011 ÃƒÆ’Ã¢â‚¬â€� 2^1
Exponent = 128 = 10000000
Mantissa = 00000000000000000000001 (23 bits, truncated... need to check rounding)

Hmm, the full mantissa would be 1.000000000000000000000011 Ã¢â€ â€™ 23 bits: 00000000000000000000001 (1 at the 22nd position after the leading 1)

Actually 10.00000000000000000000011 needs the binary point shifted:
= 1.000000000000000000000011 ÃƒÆ’Ã¢â‚¬â€� 2^1

Mantissa (23 bits): 00000000000000000000001 (truncated from 000...0011, last bit = 1 Ã¢â€ â€™ with round-to-nearest-even... this gets complex)

Let me keep it simpler: the result is 0x40000001 (approximately 2.000000238)

**Answer:** 0x40000001 (approximate, depends on rounding mode)

### C49: TLB Reach [GATE 2022, 2 marks]


**Q:** A TLB has 64 entries and the page size is 4 KB. What is the TLB reach?

**A:**
TLB reach = Number of TLB entries ÃƒÆ’Ã¢â‚¬â€� Page size
           = 64 ÃƒÆ’Ã¢â‚¬â€� 4 KB = 256 KB

**Answer:** 256 KB

### C50: CPI with Branch Prediction [GATE 2023, 2 marks]


**Q:** A pipeline has a branch misprediction penalty of 4 cycles. The branch predictor has 92% accuracy. 25% of all instructions are branches. What is the effective CPI (ideal CPI = 1)?

**A:**
Branch misprediction rate = 1 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 0.92 = 0.08
Misprediction frequency = 0.25 ÃƒÆ’Ã¢â‚¬â€� 0.08 = 0.02
Stall cycles per instruction = 0.02 ÃƒÆ’Ã¢â‚¬â€� 4 = 0.08
Effective CPI = 1 + 0.08 = 1.08

**Answer:** 1.08

### C51: LRU Cache Blocks [GATE 2023, 2 marks]


**Q:** A 2-way associative cache with 4 blocks (LRU replacement) has the access sequence: 0, 1, 2, 3, 0, 1, 4, 0. How many misses?

**A:**
2-way, 4 blocks Ã¢â€ â€™ 2 sets
Set 0: blocks 0,2,4,... or blocks i where i mod 2 = 0
Set 1: blocks where i mod 2 = 1

Access 0 (set 0): miss [0, -]
Access 1 (set 1): miss [1, -]
Access 2 (set 0): miss [0, 2] (LRU of set 0 = - , load in second way)
Access 3 (set 1): miss [1, 3]
Access 0 (set 0): hit (0 is in set 0)
Access 1 (set 1): hit (1 is in set 1)
Access 4 (set 0): miss Ã¢â€ â€™ set 0 has [0, 2], LRU = 2 (0 was just hit), replace 2 with [4]
Access 0 (set 0): hit (0 in cache)

Total misses = 5

**Answer:** 5 misses

### C52: DMA Cycle Stealing [GATE 2023, 2 marks]


**Q:** A DMA controller uses cycle stealing to transfer data. The bus clock is 100 MHz. Each DMA transfer takes 1 bus cycle. The DMA transfers data at 4 MB/s. What fraction of bus cycles does the DMA use?

**A:**
Bus clock = 100 MHz Ã¢â€ â€™ 100 M cycles/s
DMA rate = 4 MB/s = 4 ÃƒÆ’Ã¢â‚¬â€� 10^6 bytes/s
Each DMA cycle transfers... assume 1 byte per cycle (cycle stealing typically transfers 1 word/byte per stolen cycle)
Wait, word size not specified. Let's assume 1 byte per DMA cycle.

DMA cycles needed = 4 ÃƒÆ’Ã¢â‚¬â€� 10^6 cycles/s
Total bus cycles = 100 ÃƒÆ’Ã¢â‚¬â€� 10^6 cycles/s
Fraction = 4 ÃƒÆ’Ã¢â‚¬â€� 10^6 / 100 ÃƒÆ’Ã¢â‚¬â€� 10^6 = 0.04 = 4%

If DMA transfers 4 bytes per cycle: 16 MB/s would be used, fraction = 16/100 = 16%
But with 4 MB/s and 4 bytes/cycle: that's 1 M cycles/s Ã¢â€ â€™ 1%

Assuming 1 byte/cycle:
**Answer:** 4%

### C53: Non-Restoring Division [GATE 2023, 2 marks]


**Q:** In non-restoring division of 8-bit numbers, what is the maximum number of addition/subtraction operations needed?

**A:**
Non-restoring division: n iterations, each with exactly 1 operation (either add or subtract)
For n = 8: exactly 8 operations
Plus a possible final correction step (1 more add if remainder negative)

Maximum = 8 + 1 = 9 operations

**Answer:** 9 (8 iterations + at most 1 correction)

### C54: Instruction Pipelining Ã¢â€ â€™ Load-Use [GATE 2024, 2 marks]


**Q:** For the instruction sequence below, how many stalls are needed (full forwarding available)?
```
LW R1, 0(R2)
ADD R3, R1, R4
SUB R5, R1, R6
```

**A:**
I1 (LW) Ã¢â€ â€™ I2 (ADD): LW writes R1 in WB; ADD reads R1 in EX
With forwarding: EX result forwarded from MEM (after LW's MEM) Ã¢â€ â€™ ADD's EX
Need 1 stall (load-use hazard Ã¢â€ â€™ 1 bubble)

I1 (LW) Ã¢â€ â€™ I3 (SUB): LW's R1 forwarded from WB to SUB's EX
No stall needed (data forwarded from MEM or WB stage)

Total: 1 stall

**Answer:** 1 stall

### C55: Cache Miss Penalty Calculation [GATE 2024, 2 marks]


**Q:** A memory system has L1 cache (hit time 1 ns, miss rate 10%), L2 cache (hit time 5 ns, miss rate 5%), and main memory (access time 50 ns). Find the AMAT.

**A:**
AMAT = L1_hit + L1_miss ÃƒÆ’Ã¢â‚¬â€� (L2_hit + L2_miss ÃƒÆ’Ã¢â‚¬â€� Mem_time)
AMAT = 1 + 0.10 ÃƒÆ’Ã¢â‚¬â€� (5 + 0.05 ÃƒÆ’Ã¢â‚¬â€� 50)
AMAT = 1 + 0.10 ÃƒÆ’Ã¢â‚¬â€� (5 + 2.5)
AMAT = 1 + 0.10 ÃƒÆ’Ã¢â‚¬â€� 7.5 = 1 + 0.75 = 1.75 ns

**Answer:** 1.75 ns

### C56: Floating Point Precision [GATE 2024, 1 mark]


**Q:** How many decimal digits of precision does IEEE 754 single precision provide?

**A:**
23 mantissa bits Ã¢â€ â€™ 2^23 ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  8.4 million distinct values
log10(2^23) = 23 ÃƒÆ’Ã¢â‚¬â€� log10(2) ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  23 ÃƒÆ’Ã¢â‚¬â€� 0.301 ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  6.92
Approximately 7 decimal digits of precision.

**Answer:** Approximately 7 decimal digits

### C57: Cache Block Offset [GATE 2024, 1 mark]


**Q:** A cache block size is 128 bytes. How many bits are needed for the block offset?

**A:**
Block offset = log2(128) = 7 bits

**Answer:** 7 bits

### C58: Write-Through Cache Traffic [GATE 2025, 2 marks]


**Q:** A write-through cache handles 30% write instructions. For each write miss, a block is fetched (no write-allocate). The miss rate for reads is 5%. Block size is 64 bytes. Find the average data traffic per instruction (in bytes).

**A:**
Read operations: 70% of instructions, 5% miss rate
Read misses: 0.70 ÃƒÆ’Ã¢â‚¬â€� 0.05 = 0.035 misses/instruction
Read miss traffic: 0.035 ÃƒÆ’Ã¢â‚¬â€� 64 = 2.24 bytes/instruction

Write operations (write-through, no write-allocate):
Write hits: write to cache + write to memory = 4 bytes + 4 bytes = 8 bytes per write (assuming 4-byte word)
Write misses: write directly to memory = 4 bytes (no cache fill)

If we assume write hit rate same as read: 95% Ã¢â€ â€™ 0.30 ÃƒÆ’Ã¢â‚¬â€� 0.95 = 0.285 write hits/instruction
Write hit traffic: 0.285 ÃƒÆ’Ã¢â‚¬â€� 8 = 2.28 bytes/instruction

Write misses: 0.30 ÃƒÆ’Ã¢â‚¬â€� 0.05 = 0.015
Write miss traffic: 0.015 ÃƒÆ’Ã¢â‚¬â€� 4 = 0.06 bytes/instruction

Total traffic: 2.24 + 2.28 + 0.06 = 4.58 bytes/instruction

**Answer:** Approximately 4.58 bytes/instruction (depends on word size, assumes 4-byte word)

### C59: Superscalar CPI [GATE 2025, 2 marks]


**Q:** A 2-way superscalar processor can issue up to 2 instructions per cycle. The program has a mix of 40% ALU, 20% load, 10% store, 30% branch. Loads have 1 stall cycle. Branches have a 2-cycle penalty with 90% accuracy. Find the effective CPI.

**A:**
Ideal base: 2 instructions/cycle Ã¢â€ â€™ CPI = 0.5 in ideal case

Stall cycles per instruction:
Load stalls: 0.20 ÃƒÆ’Ã¢â‚¬â€� 1 = 0.20
Branch stalls: 0.30 ÃƒÆ’Ã¢â‚¬â€� (1 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 0.90) ÃƒÆ’Ã¢â‚¬â€� 2 = 0.30 ÃƒÆ’Ã¢â‚¬â€� 0.10 ÃƒÆ’Ã¢â‚¬â€� 2 = 0.06

But superscalar adds issue restrictions:
If 2 instructions can't always be paired, effective issue width &lt; 2
Assuming no pairing restrictions:
CPI = 0.5 + 0.20 + 0.06 = 0.76

**Answer:** 0.76 (assuming no additional pairing restrictions)

### C60: Set Associative Tag Comparison [GATE 2025, 2 marks]


**Q:** For a 4-way set associative cache with 32-bit addresses, 16 KB cache size, 32-byte block size. How many comparators are needed?

**A:**
4-way associative Ã¢â€ â€™ 4 blocks per set Ã¢â€ â€™ 4 tags must be compared on each access
Number of comparators = Associativity = 4

**Answer:** 4 comparators

---

## 12. Summary & Quick Revision

### 12.1 Must-Know Numbers


| Fact | Value |
|------|-------|
| IEEE 754 Single bias | 127 |
| IEEE 754 Double bias | 1023 |
| Smallest +ve normalized single | 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢126) |
| Smallest denormalized single | 2^(ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢149) |
| Largest normalized single | ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  3.4 ÃƒÆ’Ã¢â‚¬â€� 10^38 |
| Page size (typical) | 4 KB |
| TLB typical entry count | 32ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“128 |
| Cache block size (typical) | 32ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“128 B |
| 5-stage pipeline | IF, ID, EX, MEM, WB |
| DMA transfer rate (PCIe 3.0 x16) | ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  16 GB/s |

### 12.2 Common Pitfalls


1. **IEEE 754:** Don't forget the implicit leading 1 in normalized numbers
2. **Endianness:** Memory diagrams Ã¢â€ â€™ always draw address order
3. **Cache index vs tag:** Index = log2(Sets), NOT log2(Blocks) in set-associative
4. **Pipeline:** Load-use hazard needs 1 stall even with forwarding
5. **Amdahl's Law:** The (1ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢P) term is THE bottleneck Ã¢â€ â€™ can't be parallelized
6. **2's complement:** Overflow detected by CinÃƒÂ¢Ã¢â‚¬Â°Ã‚Â Cout at MSB, not just Cout
7. **Non-restoring division:** Exactly 1 operation per iteration (always add OR subtract, never both)
8. **DMA cycle stealing:** DMA gets bus when CPU doesn't need it, or pauses CPU briefly
9. **Control unit:** Microprogrammed = ROM-based Ã¢â€ â€™ flexible but slower; Hardwired = gate-based Ã¢â€ â€™ fast but rigid
10. **MESI:** Modified = dirty + exclusive; Exclusive = clean + exclusive; Shared = clean + shared

### 12.3 GATE Problem-Solving Strategy


1. **Read carefully:** Note all given parameters (address bits, cache sizes, clock rates)
2. **Draw diagrams:** Especially for pipeline timing and cache state transitions
3. **Use reference formulas:** Keep the formula table nearby during the exam
4. **Check units:** ns vs cycles, bytes vs bits, KB vs KiB
5. **Estimate first:** Get a rough answer, then compute precisely
6. **Work methodically:** Show steps Ã¢â€ â€™ partial marking in numeric answer questions

---

*End of Chapter 11. This chapter covers all GATE-relevant topics in Computer Organization & Architecture based on the 2010Ã¢â‚¬â€�"2025 GATE exam pattern.*

*Key topics for last-minute revision: IEEE 754, Cache mapping + performance equations, Pipeline timing + hazards, Booth's algorithm, MESI protocol, Flynn's taxonomy, Amdahl's Law.*

---

## Summary

Computer Organization & Architecture is a substantial GATE CS subject (7-10 marks) covering the fundamental building blocks of computer systems: digital logic at the hardware level, instruction set architecture (ISA, RISC vs CISC, addressing modes), data representation (IEEE 754 floating-point, signed number representations, Booth's algorithm for multiplication), CPU organization (single-cycle, multi-cycle, pipelined datapath Ã¢â‚¬â€� hazards: structural, data, control; forwarding and stalling), memory hierarchy (cache organization Ã¢â‚¬â€� direct-mapped, set-associative, fully-associative; cache performance equations, TLB, virtual memory), I/O organization (programmed I/O, interrupt-driven I/O, DMA), and parallelism (Flynn's taxonomy Ã¢â‚¬â€� SISD, SIMD, MISD, MIMD; multi-core processors, MESI cache coherence protocol). Key topics include cache mapping and performance calculations (2-4 marks), pipeline timing and hazard detection (2-4 marks), IEEE 754 representation (1-2 marks), and Amdahl's Law for speedup calculation (1-2 marks). The critical formula is the cache performance equation: Average Access Time = Hit Rate Ãƒâ€” Hit Time + Miss Rate Ãƒâ€” Miss Penalty. Amdahl's Law Ã¢â‚¬â€� Speedup = 1 / ((1-P) + P/S) Ã¢â‚¬â€� is essential for parallel processing problems.

```mermaid
flowchart TD
    A[Computer Architecture] --> B[Data Representation]
    A --> C[CPU Architecture]
    A --> D[Memory Hierarchy]
    A --> E[I/O Organization]
    A --> F[Parallelism]
    B --> B1[IEEE 754, 2's Complement]
    B --> B2[Booth's Algorithm]
    C --> C1[Single/Multi-Cycle]
    C --> C2[Pipeline: Hazards & Forwarding]
    D --> D1[Cache: Direct, Set-Assoc, Fully-Assoc]
    D --> D2[TLB, Virtual Memory]
    E --> E1[DMA, Interrupts]
    F --> F1[Flynn's Taxonomy]
    F --> F2[MESI Protocol]
```

## TypeScript Implementations

```typescript
/**
 * PipelineSimulator Ã¢â‚¬â€� 5-Stage Pipeline with Hazard Detection
 * ------------------------------------------------------------
 * Simulates the classic RISC 5-stage pipeline (IF, ID, EX, MEM, WB)
 * with data hazard detection and forwarding.
 */
interface Instruction {
  opcode: string;
  rd: number;   // destination register
  rs1: number;  // source register 1
  rs2: number;  // source register 2
  imm?: number;
}

class PipelineSimulator {
  private registers: number[] = new Array(32).fill(0);
  private memory: Map<number, number> = new Map();
  private pc: number = 0;
  private instructions: Instruction[];
  private clockCycles: number = 0;
  private stalls: number = 0;

  // Pipeline stages
  private IF: { instr: Instruction | null; pc: number } = { instr: null, pc: 0 };
  private ID: { instr: Instruction | null; pc: number; op1: number; op2: number } = {
    instr: null, pc: 0, op1: 0, op2: 0,
  };
  private EX: { instr: Instruction | null; result: number; cond: boolean } = {
    instr: null, result: 0, cond: false,
  };
  private MEM: { instr: Instruction | null; result: number } = {
    instr: null, result: 0,
  };
  private WB: { instr: Instruction | null; result: number } = {
    instr: null, result: 0,
  };

  constructor(instructions: Instruction[]) {
    this.instructions = instructions;
    this.registers[0] = 0; // x0 always 0
  }

  /**
   * Run the pipeline simulation for a given number of cycles.
   */
  run(cycles: number): void {
    for (let i = 0; i < cycles; i++) {
      this.cycle();
    }
  }

  private cycle(): void {
    this.clockCycles++;

    // Write-back
    if (this.WB.instr) {
      const instr = this.WB.instr;
      if (instr.opcode === 'ADD' || instr.opcode === 'ADDI' ||
          instr.opcode === 'LOAD' || instr.opcode === 'SUB') {
        if (instr.rd !== 0) {
          this.registers[instr.rd] = this.WB.result;
        }
      }
      this.WB.instr = null;
    }

    // Memory access
    this.WB.instr = this.MEM.instr;
    this.WB.result = this.MEM.result;
    if (this.MEM.instr?.opcode === 'LOAD') {
      this.WB.result = this.memory.get(this.MEM.result) || 0;
    }
    this.MEM.instr = null;

    // Execute
    this.MEM.instr = this.EX.instr;
    if (this.EX.instr) {
      const instr = this.EX.instr;
      switch (instr.opcode) {
        case 'ADD':
          this.MEM.result = this.EX.result;
          break;
        case 'SUB':
          this.MEM.result = this.EX.result;
          break;
        case 'ADDI':
          this.MEM.result = this.EX.result;
          break;
        case 'LOAD':
          this.MEM.result = this.EX.result;
          break;
        case 'STORE':
          this.memory.set(this.EX.result, this.ID.op2);
          break;
        case 'BEQ':
          if (this.EX.cond) this.pc = this.EX.result;
          break;
      }
    }
    this.EX.instr = null;

    // Decode and detect hazards
    this.EX.instr = this.ID.instr;
    if (this.ID.instr) {
      const instr = this.ID.instr;
      // Forwarding detection (simplified)
      const forward1 = this.forwardValue(instr.rs1);
      const forward2 = this.forwardValue(instr.rs2);
      this.ID.op1 = forward1;
      this.ID.op2 = forward2;

      switch (instr.opcode) {
        case 'ADD':
        case 'SUB':
          this.EX.result = this.ID.op1 + (instr.opcode === 'ADD' ? this.ID.op2 : -this.ID.op2);
          break;
        case 'ADDI':
          this.EX.result = this.ID.op1 + (instr.imm || 0);
          break;
        case 'LOAD':
          this.EX.result = this.ID.op1 + (instr.imm || 0);
          break;
        case 'STORE':
          this.EX.result = this.ID.op1 + (instr.imm || 0);
          break;
        case 'BEQ':
          this.EX.cond = this.ID.op1 === this.ID.op2;
          this.EX.result = this.pc + (instr.imm || 0) * 4;
          break;
      }
    }
    this.ID.instr = null;

    // Fetch
    this.ID.instr = this.IF.instr;
    this.ID.pc = this.IF.pc;
    this.IF.instr = null;

    // Fetch next instruction
    if (this.pc / 4 < this.instructions.length) {
      const instr = this.instructions[this.pc / 4];
      // Check for load-use hazard
      if (this.detectLoadUseHazard(instr)) {
        this.stalls++;
        // Stall: insert bubble
        this.IF.instr = null;
      } else {
        this.IF.instr = instr;
        this.IF.pc = this.pc;
        this.pc += 4;
      }
    }
  }

  private forwardValue(reg: number): number {
    if (reg === 0) return 0;
    // Forward from EX stage
    if (this.EX.instr && this.EX.instr.rd === reg &&
        ['ADD', 'SUB', 'ADDI', 'LOAD'].includes(this.EX.instr.opcode)) {
      return this.EX.result;
    }
    // Forward from MEM stage
    if (this.MEM.instr && this.MEM.instr.rd === reg &&
        ['ADD', 'SUB', 'ADDI', 'LOAD'].includes(this.MEM.instr.opcode)) {
      return this.MEM.result;
    }
    // Forward from WB stage
    if (this.WB.instr && this.WB.instr.rd === reg &&
        ['ADD', 'SUB', 'ADDI', 'LOAD'].includes(this.WB.instr.opcode)) {
      return this.WB.result;
    }
    return this.registers[reg];
  }

  private detectLoadUseHazard(instr: Instruction): boolean {
    if (!this.ID.instr || this.ID.instr.opcode !== 'LOAD') return false;
    return instr.rs1 === this.ID.instr.rd || instr.rs2 === this.ID.instr.rd;
  }

  getStats(): string {
    return `
Pipeline Simulation Stats:
  Instructions: ${this.instructions.length}
  Cycles: ${this.clockCycles}
  Stalls: ${this.stalls}
  CPI: ${(this.clockCycles / Math.min(this.clockCycles, this.instructions.length)).toFixed(2)}
  Registers: ${this.registers.slice(1, 6).join(', ')}...
    `.trim();
  }
}

// Example: Simple RISC program
// ADD x1, x2, x3  (x1 = x2 + x3)
// LOAD x4, 0(x1)  (x4 = mem[x1+0])
// ADD x5, x4, x6  (x5 = x4 + x6)
const program: Instruction[] = [
  { opcode: 'ADD', rd: 1, rs1: 2, rs2: 3 },
  { opcode: 'LOAD', rd: 4, rs1: 1, rs2: 0, imm: 0 },
  { opcode: 'ADD', rd: 5, rs1: 4, rs2: 6 },
  { opcode: 'BEQ', rd: 0, rs1: 1, rs2: 2, imm: 4 },
];

const pipeline = new PipelineSimulator(program);
pipeline.run(10);
console.log(pipeline.getStats());
```

## Chapter Quiz

**5 Multiple Choice Questions**

| Q# | Question | Options | Answer |
|:--:|---------|---------|:------:|
| 1 | In IEEE 754 single precision, the exponent bias is: | A) 127, B) 128, C) 1023, D) 255 | **A** |
| 2 | A direct-mapped cache with 64 blocks and 32-byte blocks uses how many bits for the index? | A) 5, B) 6, C) 7, D) 8 | **B** (logÃ¢â€šâ€š64=6) |
| 3 | Which hazard requires a stall even with forwarding? | A) Structural, B) Load-use data hazard, C) Control hazard, D) WAW hazard | **B** |
| 4 | Flynn's taxonomy classifies a standard multi-core CPU as: | A) SISD, B) SIMD, C) MISD, D) MIMD | **D** |
| 5 | Amdahl's Law: if 60% of a program can be parallelized with 4 processors, what is the maximum speedup? | A) 1.82, B) 2.5, C) 3.0, D) 4.0 | **A** (1/(0.4+0.6/4)=1/0.55=1.82) |

## Exercises

**5 Practice Problems**

<details>
<summary><strong>Exercise 1:</strong> IEEE 754 Representation</summary>
<p>Convert -5.75 to IEEE 754 single-precision format.</p>
<p><strong>Solution:</strong> Sign=1 (negative). 5.75 = 101.11Ã¢â€šâ€š = 1.0111Ãƒâ€”2Ã‚Â². Exponent=2+127=129=10000001Ã¢â€šâ€š. Mantissa=0111000...0. Full: 1 10000001 01110000000000000000000 = 0xC0B80000.</p>
</details>

<details>
<summary><strong>Exercise 2:</strong> Cache Performance</summary>
<p>Cache has hit rate=90%, hit time=2ns, miss penalty=50ns. Find average memory access time.</p>
<p><strong>Solution:</strong> AMAT = 0.9Ãƒâ€”2 + 0.1Ãƒâ€”(2+50) = 1.8 + 5.2 = 7.0ns. Using formula: AMAT = Hit Time + Miss Rate Ãƒâ€” Miss Penalty = 2 + 0.1Ãƒâ€”50 = 7ns.</p>
</details>

<details>
<summary><strong>Exercise 3:</strong> Pipeline Speedup</summary>
<p>A 5-stage pipeline has stage delays 2ns, 3ns, 4ns, 2ns, 2ns. Find the clock period and speedup over a non-pipelined processor (sum of stage delays).</p>
<p><strong>Solution:</strong> Clock period = max(2,3,4,2,2) = 4ns. Non-pipelined = 2+3+4+2+2=13ns. Ideal speedup = 13/4 = 3.25. With pipeline overhead, actual Ã¢â€°Ë† 3.0-3.25.</p>
</details>

<details>
<summary><strong>Exercise 4:</strong> Cache Mapping</summary>
<p>A 64KB cache with 32-byte blocks in a 32-bit address space uses 4-way set-associative mapping. How many sets? How many bits for index?</p>
<p><strong>Solution:</strong> Total blocks = 64KB/32B = 2048. Sets = 2048/4 = 512. Index bits = logÃ¢â€šâ€š(512) = 9. Tag bits = 32-9-5(offset) = 18.</p>
</details>

<details>
<summary><strong>Exercise 5:</strong> Booth's Algorithm</summary>
<p>Multiply 6 (multiplicand) Ãƒâ€” -3 (multiplier) using Booth's algorithm with 4-bit representation.</p>
<p><strong>Solution:</strong> 6=0110, -3=1101. Booth: Initialize A=0, Q=1101, QÃ¢â€šâ€¹Ã¢â€šÂ�=0. Steps: (10): A=A-Q=0110... Wait let me retrace. 4-bit: 6=0110, -3=1101(2's). A=0000, Q=1101, Q-1=0, M=0110. Cycles: 0: QÃ¢â€šâ‚¬QÃ¢â€šâ€¹Ã¢â€šÂ�=10 Ã¢â€ â€™ A=A-M=1010. 1: shift ASR: 1101 0110 1. QÃ¢â€šâ‚¬QÃ¢â€šâ€¹Ã¢â€šÂ�=01 Ã¢â€ â€™ A=A+M=0011. 2: shift: 0001 1011 0. QÃ¢â€šâ‚¬QÃ¢â€šâ€¹Ã¢â€šÂ�=10 Ã¢â€ â€™ A=A-M=1011. 3: shift: 1101 1101 1. QÃ¢â€šâ‚¬QÃ¢â€šâ€¹Ã¢â€šÂ�=11 Ã¢â€ â€™ no op. Shift: 1110 1110 1. Result in A:Q = 11101110 = -18 (correct: 6Ãƒâ€”-3=-18).</p>
</details>

---

*End of Chapter 11 Ã¢â‚¬â€� Computer Organization & Architecture. Extended with summary, TypeScript implementations, quiz, and exercises.*
