# Chapter 9: Datapath Design

## Learning Objectives

By the conclusion of this chapter, the student shall be able to:

1. Construct an ALU from basic combinational components
2. Design a register file with read and write ports
3. Describe the data path for a single-cycle processor
4. Derive control signals from instruction opcodes
5. Analyse the timing of single-cycle data path execution

## Theory

### 9.1 Datapath Overview

The datapath is the collection of functional units, registers, and buses that perform data processing operations. It includes the ALU, register file, multiplexers, and interconnecting buses. The control unit supplies select signals that direct data flow through the datapath.

### 9.2 ALU Design

A practical *n*-bit ALU combines arithmetic and logic operations under the control of function select lines.

#### 9.2.1 4-Bit ALU with 4 Functions

A minimal ALU with two control signals F_1 and F_0:

| F_1 | F_0 | Function | Output |
|:---:|:---:|----------|--------|
| 0 | 0 | AND | A &middot; B |
| 0 | 1 | OR | A + B |
| 1 | 0 | ADD | A + B |
| 1 | 1 | SUB | A &minus; B |

The ALU comprises:
- A bitwise AND/OR unit
- An adder/subtractor (controlled by F_0 for subtraction via two's complement)
- A 4-to-1 multiplexer (or 2-to-1 with separate arithmetic/logic select)

#### 9.2.2 ALU with Shifter

A more complete ALU incorporates a barrel shifter supporting left shift, right shift, and rotate operations. A third control field selects the shifter function.

### 9.3 Register File

The register file is a multi-ported memory array providing simultaneous read and write access.

#### 9.3.1 Two-Read, One-Write Register File

A typical register file for a RISC processor has:
- Two read address ports (A1, A2) for source operands
- One write address port (A3) for the destination
- Two read data outputs (RD1, RD2)
- One write data input (WD)
- A write enable signal (WE)

The register file consists of a decoder for each address port and an array of registers with tri-state output buffers.

#### 9.3.2 Register File Timing

Reads are combinational (address to data propagation), while writes occur at the clock edge when WE is asserted.

### 9.4 Single-Cycle Datapath

A single-cycle processor executes each instruction in one clock cycle. The clock period must be long enough to accommodate the worst-case critical path.

#### 9.4.1 R-Type Instruction Datapath

For an R-type instruction (e.g., ADD R1, R2, R3):

1. Instruction fetch: PC addresses instruction memory; the instruction word is loaded.
2. Register read: The register file reads source registers (R2, R3).
3. ALU operation: The ALU receives register values and the ALU control signal.
4. Write-back: The ALU result is written to the destination register (R1).

The datapath includes:
- Instruction memory (read-only during fetch)
- Register file
- ALU
- PC update logic (+4 or branch target)

The critical path is: instruction memory &rarr; register read &rarr; ALU &rarr; register write setup.

#### 9.4.2 I-Type (Immediate) Datapath

For an I-type instruction (e.g., ADDI R1, R2, #imm):

The immediate value from the instruction word is sign-extended to the full word width and fed to one ALU input via a multiplexer (controlled by the ALUSrc signal).

#### 9.4.3 Load Word (LW) Datapath

For LW R1, offset(R2):

1. Register file reads R2.
2. Sign-extended offset is added to R2 by the ALU to form the memory address.
3. Data memory is read at the computed address.
4. The memory data is written back to R1.

Additional datapath elements:
- Data memory
- A multiplexer to select ALU result or memory data for write-back (MemtoReg signal)

#### 9.4.4 Branch Datapath

For BEQ R1, R2, offset:

1. Register file reads R1 and R2.
2. The ALU subtracts and sets the Zero flag.
3. If Zero = 1, the PC is updated with (PC + 4 + sign_extended_offset &lt;&lt; 2).

A second adder computes the branch target (PC + 4 + offset) while the ALU computes the comparison.

### 9.5 Control Signal Design

The control unit generates signals based on the instruction opcode.

| Signal | Effect | R-type | LW | SW | BEQ |
|--------|--------|:------:|:--:|:--:|:---:|
| RegWrite | Enable register write | 1 | 1 | 0 | 0 |
| ALUSrc | ALU input B select (0: register, 1: immediate) | 0 | 1 | 1 | 0 |
| MemRead | Enable data memory read | 0 | 1 | 0 | 0 |
| MemWrite | Enable data memory write | 0 | 0 | 1 | 0 |
| MemtoReg | Write-back select (0: ALU, 1: memory) | 0 | 1 | X | X |
| Branch | Branch instruction | 0 | 0 | 0 | 1 |
| ALUOp | ALU operation code | 10 | 00 | 00 | 01 |

### 9.6 Timing Analysis

The single-cycle clock period *T* must satisfy:

*T* &ge; *t_{PC_out}* + *t_{inst_mem}* + *t_{reg_read}* + *t_{mux}* + *t_{ALU}* + *t_{mux}* + *t_{reg_setup}*

where each term is the worst-case propagation delay of the respective component.

**Critical path analysis for LW**:
1. PC output delay
2. Instruction memory access time
3. Register file read access time
4. MUX delay (ALUSrc)
5. ALU delay (adder)
6. Data memory access time
7. MUX delay (MemtoReg)
8. Register file setup time

The single-cycle design is simple but inefficient because the clock period is set by the slowest instruction. Faster instructions are forced to wait the full period.

## Examples

### Example 9.1: ALU Control Signal Derivation

Derive the ALU control signals for a processor with a 2-bit ALUOp from the control unit and a 6-bit function field from the instruction.

**Solution**: The ALU control unit maps ALUOp and function field to 3-bit ALU control:

| ALUOp | Function Field (bits 5:0) | ALU Control | Operation |
|:-----:|:-------------------------:|:-----------:|-----------|
| 00 | XXXXXXXXXX | 010 | ADD (for LW, SW) |
| 01 | XXXXXXXXXX | 110 | SUB (for BEQ) |
| 10 | 100000 (ADD) | 010 | ADD |
| 10 | 100010 (SUB) | 110 | SUB |
| 10 | 100100 (AND) | 000 | AND |
| 10 | 100101 (OR) | 001 | OR |

### Example 9.2: Single-Cycle Clock Period

A single-cycle processor has component delays: PC = 1 ns, instruction memory = 3 ns, register read = 2 ns, ALU = 5 ns, data memory = 4 ns, register setup = 1 ns, MUX = 0.5 ns. Calculate the minimum clock period.

**Solution**: The critical path is LW: 1 + 3 + 2 + 0.5 + 5 + 4 + 0.5 + 1 = 17 ns. For R-type: 1 + 3 + 2 + 0.5 + 5 + 0.5 + 1 = 13 ns. The clock period must be at least 17 ns, yielding a maximum clock frequency of approximately 58.8 MHz.

### Example 9.3: Register File Port Count

A processor has 32 registers, each 32 bits wide. The register file has two read ports and one write port. Calculate the number of internal storage cells and the number of address and data wires.

**Solution**: Number of storage cells = 32 &times; 32 = 1024 flip-flops. Address wires: 5 for each read port (2 &times; 5 = 10) + 5 for the write port = 15 total address wires. Data wires: 32 &times; 2 (read outputs) + 32 (write input) = 96 data wires.

## Summary

- The datapath comprises the ALU, register file, and interconnect with multiplexers.
- The single-cycle datapath executes each instruction in one clock cycle.
- Control signals are derived from the opcode and determine datapath configuration.
- The clock period is bounded by the worst-case instruction's critical path.
- The register file provides multi-ported access for simultaneous read and write.

## Exercises

### Review Questions

1. What is the purpose of the ALUSrc control signal?
2. Why does the LW instruction have the longest critical path?
3. What is the function of the MemtoReg multiplexer?
4. How does the BEQ instruction compute the branch target address?
5. What is the disadvantage of the single-cycle datapath?

### Application Problems

1. Design a 16-bit ALU with eight functions: ADD, SUB, AND, OR, XOR, NOR, left shift, and right shift. Show the function table.

2. Draw the datapath for the SW instruction and trace the data flow for SW R2, 100(R5).

3. Calculate the minimum clock period for a single-cycle processor with the following component delays (in ns): PC = 0.8, instruction memory = 2.5, register read = 1.5, ALU = 4.0, data memory = 3.5, register setup = 0.8, MUX = 0.3, adder = 2.0.

4. Design the ALU control logic for a processor with ALUOp (2 bits) and a 6-bit function code. Derive the Boolean equations.

5. Extend the single-cycle datapath to support the JAL (jump-and-link) instruction, which saves PC + 4 to the return address register and jumps to the target address.

### Challenge Problem

Design a multi-cycle datapath that breaks the single-cycle into three cycles: fetch, execute, and write-back. Compare the required clock period with the single-cycle design from Application Problem 3. Assume that register-to-register transfers between cycles take 0.5 ns. Show the state diagram and the control signals needed for each cycle.
