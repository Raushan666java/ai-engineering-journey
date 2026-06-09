# Chapter 8: Computer Architecture

## Learning Objectives

By the conclusion of this chapter, the student shall be able to:

1. Compare the Von Neumann and Harvard architectural models
2. Identify the major components of a CPU and their functions
3. Describe the instruction fetch-decode-execute cycle
4. Distinguish RISC and CISC design philosophies
5. Analyse the relationship between instruction set design and microarchitecture

## Theory

### 8.1 Von Neumann Architecture

John von Neumann's stored-program computer architecture, described in 1945, introduced the concept that both instructions and data reside in the same memory space and share a common bus. The four principal subsystems are:

1. **Memory**: Stores both instructions and data in a single address space.
2. **Arithmetic Logic Unit (ALU)**: Performs arithmetic and logic operations.
3. **Control Unit**: Decodes instructions and generates control signals.
4. **Input/Output (I/O)**: Interfaces with external devices.

The Von Neumann bottleneck describes the throughput limitation caused by the single shared bus between CPU and memory.

### 8.2 Harvard Architecture

The Harvard architecture employs separate memory spaces for instructions and data, each with its own bus. This permits simultaneous access to instruction and data memory, improving throughput.

| Feature | Von Neumann | Harvard |
|---------|-------------|---------|
| Memory spaces | One (instructions + data) | Two (instructions, data) |
| Buses | One shared bus | Two or more buses |
| Bottleneck | Single bus contention | Reduced contention |
| Complexity | Simpler | More complex |
| Typical use | General-purpose computers | DSPs, microcontrollers |

Modern processors often employ a modified Harvard architecture that uses separate caches for instructions and data while sharing a unified main memory.

### 8.3 CPU Components

#### 8.3.1 Register File

A register file is a small, fast storage array within the CPU. It typically contains 8 to 64 general-purpose registers, each holding one word of data. Special-purpose registers include:

- **Program Counter (PC)**: Holds the address of the next instruction.
- **Instruction Register (IR)**: Holds the currently executing instruction.
- **Memory Address Register (MAR)**: Holds the address for memory access.
- **Memory Data Register (MDR)**: Holds data being read from or written to memory.
- **Accumulator (ACC)**: Holds results of ALU operations (in accumulator-based architectures).
- **Stack Pointer (SP)**: Points to the top of the stack.
- **Status Register (Flag Register)**: Holds condition flags (zero, carry, overflow, negative, etc.).

#### 8.3.2 ALU

The ALU performs arithmetic (addition, subtraction, increment, decrement) and logic (AND, OR, XOR, NOT, shift) operations on operands from the register file. Flag outputs update the status register.

#### 8.3.3 Control Unit

The control unit generates timing and control signals that orchestrate data movement and ALU operations. It interprets the instruction in the IR and produces the sequence of micro-operations required for execution.

### 8.4 Instruction Cycle

The instruction cycle comprises the following phases:

1. **Fetch**: The CPU places the PC value on the address bus and reads the instruction from memory into the IR. The PC is incremented to point to the next instruction.

2. **Decode**: The control unit interprets the opcode to determine the operation to perform and the operands required.

3. **Execute**: The ALU or other functional units perform the operation. This may involve reading registers, computing results, accessing memory, or writing results.

4. **Store (Write-back)**: Results are written to the destination register or memory location.

Some architectures combine phases or add phases for complex instructions.

### 8.5 RISC vs CISC

#### 8.5.1 CISC (Complex Instruction Set Computer)

CISC architectures, exemplified by the x86 family, feature a large instruction set with variable-length instructions, multiple addressing modes, and instructions that perform multiple operations (e.g., memory-to-memory moves with automatic increment).

Advantages:
- Dense code (fewer instructions per program)
- Backward compatibility across generations

Disadvantages:
- Complex control unit (often microprogrammed)
- Variable instruction length complicates pipelining
- Longer design and verification time

#### 8.5.2 RISC (Reduced Instruction Set Computer)

RISC architectures, exemplified by ARM, MIPS, and RISC-V, feature a small instruction set with fixed-length instructions, a load-store memory model, and a large register file.

Characteristics:
- Fixed instruction length (typically 32 bits)
- Only load and store instructions access memory
- All ALU operations operate on registers
- Simple control unit (hardwired)
- One instruction per clock cycle (in the ideal case)

| Comparison | RISC | CISC |
|------------|------|------|
| Instruction count per program | More | Fewer |
| Instruction length | Fixed | Variable |
| Memory access | Load/store only | Many instructions |
| Registers | Many (16&ndash;128) | Few (8&ndash;16) |
| Control unit | Hardwired | Microprogrammed |
| Pipelining | Easier | Harder |
| Code density | Lower | Higher |

### 8.6 Performance Metrics

#### 8.6.1 Clock Frequency

The clock frequency (measured in Hz) determines the rate at which instructions are processed. Higher frequency generally implies higher performance, but thermal and power limitations constrain maximum frequency.

#### 8.6.2 CPI (Cycles Per Instruction)

CPI is the average number of clock cycles required to execute one instruction. For a given program:

Total execution time = Instruction count &times; CPI &times; Clock period

#### 8.6.3 MIPS and FLOPS

MIPS (million instructions per second) and FLOPS (floating-point operations per second) are throughput metrics. These are highly dependent on the instruction mix and architecture.

### 8.7 Endianness

Endianness describes the byte ordering of multi-byte words in memory.

- **Little-endian**: The least significant byte (LSB) is stored at the lowest memory address.
- **Big-endian**: The most significant byte (MSB) is stored at the lowest memory address.

The choice of endianness affects data interchange between systems and the implementation of multi-byte load/store instructions.

## Examples

### Example 8.1: Execution Time Calculation

A program executes 1 &times; 10^9 instructions on a processor with a clock rate of 2.5 GHz and an average CPI of 1.5. Calculate the execution time.

**Solution**:
Execution time = (1 &times; 10^9) &times; 1.5 &times; (1 / 2.5 &times; 10^9) = 1.5 &times; 10^9 / 2.5 &times; 10^9 = 0.6 seconds.

### Example 8.2: Instruction Trace Analysis

An instruction at address 0x1000 is 4 bytes long. After fetch, what is the new PC value?

**Solution**: Since the instruction is 4 bytes, the PC is incremented by 4: PC = 0x1000 + 4 = 0x1004.

### Example 8.3: RISC vs CISC Code Comparison

Compare the assembly code for computing A = B + C in CISC and RISC architectures.

**CISC (x86)**: `ADD AX, BX` where AX holds B and BX holds C.

**RISC (MIPS)**: `LW R1, addr_B` loads B into R1; `LW R2, addr_C` loads C into R2; `ADD R3, R1, R2` adds them; `SW R3, addr_A` stores the result.

The CISC version uses fewer instructions and memory accesses, while the RISC version uses more instructions but simpler, fixed-length encoding.

## Summary

- The Von Neumann architecture stores instructions and data in a shared memory; the Harvard architecture separates them for higher throughput.
- The CPU comprises the ALU, control unit, register file, and bus interfaces.
- The instruction cycle proceeds through fetch, decode, execute, and write-back phases.
- RISC emphasises simple, fixed-length instructions and load-store architecture; CISC emphasises dense, variable-length instruction sets.
- Performance is a function of instruction count, CPI, and clock frequency.

## Exercises

### Review Questions

1. What is the Von Neumann bottleneck?
2. Name four special-purpose registers in a CPU.
3. Describe the four phases of the instruction cycle.
4. State three characteristics of RISC architecture.
5. How does Harvard architecture improve performance over Von Neumann?

### Application Problems

1. A processor has a clock frequency of 3.0 GHz. A program has 2.5 &times; 10^9 instructions with an average CPI of 1.2. Calculate the execution time.

2. Compare the code sequence for the operation C = (A + B) &times; D in RISC and CISC styles.

3. A processor designer reduces CPI from 2.0 to 1.5 by simplifying the instruction set, but the program's instruction count increases by 30%. The clock frequency remains at 2 GHz. Determine whether performance improves or degrades.

4. A Von Neumann system has a memory access time of 10 ns and an instruction fetch rate of one instruction every 4 clock cycles at 500 MHz. Calculate the fraction of time the bus is occupied with instruction fetches.

5. Research the ARM vs x86 architectural differences. List three advantages of each.

### Challenge Problem

Design a simple accumulator-based computer with the following specifications: 8-bit data word, 16-bit address space, and an instruction set containing LDA (load accumulator), STA (store accumulator), ADD, SUB, JMP, and HLT instructions. Define the instruction formats, describe the fetch-execute cycle for each instruction, and draw the block diagram showing the data paths between the accumulator, ALU, memory, and control unit.
