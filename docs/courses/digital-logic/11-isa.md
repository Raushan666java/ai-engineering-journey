# Chapter 11: Instruction Set Architecture

## Learning Objectives

By the conclusion of this chapter, the student shall be able to:

1. Define the components of an instruction set architecture
2. Contrast different instruction formats and their trade-offs
3. Describe the principal addressing modes
4. Analyse the MIPS ISA as a representative RISC architecture
5. Write simple assembly programs using common instruction types

## Theory

![Instruction Set Architecture Concepts and MIPS Formats](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/digital-logic/ch11-isa.png)

### 11.1 Instruction Set Architecture (ISA) Overview

The ISA defines the interface between software and hardware. It specifies the programmer-visible state, the instruction formats, the addressing modes, and the behaviour of each instruction. The ISA serves as the contract between compilers and processor implementers.

### 11.2 Instruction Formats

Instructions are encoded as binary words divided into fields. The principal fields are:

- **Opcode**: Specifies the operation to perform.
- **Operand specifiers**: Identify the source and destination operands (registers, memory addresses, or immediate values).

#### 11.2.1 Fixed-Length Formats

RISC architectures use fixed-length instructions (typically 32 bits). This simplifies instruction fetch and decode, enabling efficient pipelining.

#### 11.2.2 Variable-Length Formats

CISC architectures use variable-length instructions (1 to 15 bytes for x86). This improves code density but complicates fetch and decode.

### 11.3 MIPS ISA (Reference)

MIPS is a 32-bit RISC architecture with 32 general-purpose registers (R0 through R31). Register R0 is hardwired to zero. Three instruction formats exist:

#### 11.3.1 R-Type (Register)

| 31:26 | 25:21 | 20:16 | 15:11 | 10:6 | 5:0 |
|:-----:|:-----:|:-----:|:-----:|:----:|:---:|
| opcode | rs | rt | rd | shamt | funct |

- opcode (6 bits): Always 000000 for R-type.
- rs, rt (5 bits each): Source register addresses.
- rd (5 bits): Destination register address.
- shamt (5 bits): Shift amount (used by shift instructions).
- funct (6 bits): Extended opcode for R-type operations.

Example: `ADD rd, rs, rt` — rd = rs + rt.

#### 11.3.2 I-Type (Immediate)

| 31:26 | 25:21 | 20:16 | 15:0 |
|:-----:|:-----:|:-----:|:----:|
| opcode | rs | rt | immediate |

The immediate field is sign-extended to 32 bits for arithmetic operations.

Example: `LW rt, offset(rs)` — rt = Memory[rs + offset].

#### 11.3.3 J-Type (Jump)

| 31:26 | 25:0 |
|:-----:|:----:|
| opcode | target |

The 26-bit target address is left-shifted by 2 and combined with the upper 4 bits of PC + 4 to form the 32-bit jump target.

Example: `J target` — PC = (PC + 4)[31:28] || target &lt;&lt; 2.

### 11.4 Addressing Modes

Addressing modes specify how to compute the effective address of an operand.

| Mode | Effective Address | MIPS Example |
|------|------------------|--------------|
| Register | Operand is in a register | ADD R1, R2, R3 |
| Immediate | Operand is in the instruction | ADDI R1, R2, 100 |
| Base (displacement) | Reg + offset | LW R1, 100(R2) |
| PC-relative | PC + offset | BEQ R1, R2, label |
| Register indirect | [Register] | JR R1 |
| Direct | Address in instruction | J label |
| Indexed | Base + Index | Not in MIPS base ISA |
| Autoincrement | Reg, then Reg++ | Not in MIPS base ISA |

Other architectures support additional modes such as absolute, register deferred, scaled index, and memory-indirect addressing.

### 11.5 Instruction Types

#### 11.5.1 Arithmetic Instructions

ADD, SUB, ADDI, MUL, DIV, etc.

These operations perform computations on register or immediate operands. MIPS arithmetic instructions operate only on registers; memory must be accessed via separate load/store instructions.

#### 11.5.2 Logical Instructions

AND, OR, XOR, NOR, ANDI, ORI, XORI, and shift instructions (SLL, SRL, SRA).

#### 11.5.3 Data Transfer Instructions

Load: LW (load word), LH (load halfword), LB (load byte), LBU, LHU.
Store: SW, SH, SB.

#### 11.5.4 Control Transfer Instructions

- **Conditional branches**: BEQ (branch if equal), BNE (branch if not equal), BLEZ, BGTZ, BLTZ.
- **Unconditional jumps**: J (jump), JR (jump register), JAL (jump and link — saves return address to R31).

#### 11.5.5 Miscellaneous Instructions

- NOP (no operation): encoded as SLL R0, R0, 0.
- SYSCALL: system call for OS services.
- BREAK: breakpoint for debugging.

### 11.6 Calling Convention

The MIPS calling convention partitions the register file:

- R0: Hardwired zero
- R2&ndash;R3: Return values
- R4&ndash;R7: Function arguments (a0&ndash;a3)
- R8&ndash;R15: Temporaries (t0&ndash;t7) — not preserved across calls
- R16&ndash;R23: Saved values (s0&ndash;s7) — preserved across calls
- R24&ndash;R25: Temporaries (t8&ndash;t9)
- R26&ndash;R27: Kernel temporaries
- R28: Global pointer
- R29: Stack pointer
- R30: Frame pointer
- R31: Return address

### 11.7 Instruction Encoding Trade-offs

- **Opcode width**: Wider opcodes allow more instructions but consume bits that could be used for operand specifiers.
- **Register specifier width**: 5 bits (32 registers) or 6 bits (64 registers).
- **Immediate width**: Wider immediates reduce the need for load-immediate sequences but compress the instruction encoding.
- **Orthogonality**: An orthogonal ISA allows any operand to be specified with any addressing mode. CISC ISAs tend toward higher orthogonality; RISC ISAs are deliberately constrained.

### 11.8 RISC-V (Brief Overview)

RISC-V is an open-source ISA gaining widespread adoption. It shares many features with MIPS but introduces several improvements: compressed instructions (16-bit RVC extension), variable-length encoding extensibility, a modular design with mandatory base ISA and optional extensions (M, A, F, D, C), and a larger register file (32 registers).

## Examples

### Example 11.1: MIPS Instruction Encoding

Encode the MIPS instruction `LW R8, 40(R5)`.

**Solution**: LW is I-type. Opcode = 100011. rs = R5 = 00101. rt = R8 = 01000. Offset = 40 = 0000 0000 0010 1000.

Complete 32-bit encoding: 100011 00101 01000 0000000000101000 = 0x8D280028.

### Example 11.2: BEQ Range Calculation

A BEQ instruction is at address 0x1000. The branch target is at address 0x1024. What is the offset field?

**Solution**: BEQ uses PC-relative addressing. Offset = (Target &minus; (PC + 4)) / 4 = (0x1024 &minus; 0x1004) / 4 = 0x20 / 4 = 8.

Offset field is 8 = 0000 0000 0000 1000 in 16 bits.

### Example 11.3: MIPS Assembly Program

Write a MIPS assembly program that computes the sum of the first 10 integers.

**Solution**:
```
    ADDI R1, R0, 0      ; sum = 0
    ADDI R2, R0, 10     ; count = 10
LOOP:
    ADD  R1, R1, R2     ; sum = sum + count
    ADDI R2, R2, -1     ; count = count - 1
    BNE  R2, R0, LOOP   ; if count != 0, loop
```

## Summary

- An ISA defines the programmer-visible interface between software and hardware.
- MIPS uses three instruction formats: R-type, I-type, and J-type, each 32 bits.
- Addressing modes specify how to compute operand effective addresses.
- Instruction types include arithmetic, logical, data transfer, control, and system operations.
- The MIPS calling convention standardises register usage across functions.

## Exercises

### Review Questions

1. What fields are present in a typical instruction format?
2. Why does MIPS restrict arithmetic operations to registers only?
3. Distinguish between PC-relative and absolute addressing.
4. What is the role of the funct field in R-type instructions?
5. Explain why R0 is hardwired to zero in MIPS.

### Application Problems

1. Encode the MIPS instruction `ADDI R5, R6, 200`. Show the binary fields.

2. Calculate the maximum range of a MIPS BEQ instruction. If the branch is at address 0x1000, what are the closest and farthest reachable addresses?

3. Write a MIPS assembly program to find the maximum value in an array of 100 integers stored in memory. Assume the array base address is in R1.

4. For a processor with 64 registers and 256 opcodes, what is the minimum instruction width if all instructions must specify two source registers and one destination register, and no immediates are used?

5. Contrast the encoding of `J` and `JAL` instructions. Why do both save and restore-save addressing modes exist?

### Challenge Problem

Design a minimal instruction set for a custom 16-bit processor with the following requirements: 16 general-purpose registers, byte-addressable memory, and support for arithmetic (ADD, SUB), logic (AND, OR), data transfer (LOAD, STORE), and control (BEQ, JMP). Define the instruction formats, assign opcodes, and write the assembly code for the function F = (A + B) &minus; (C + D). Each instruction must be exactly 16 bits.
