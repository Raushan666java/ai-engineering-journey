# Chapter 10: Control Unit

## Learning Objectives

By the conclusion of this chapter, the student shall be able to:

1. Distinguish between hardwired and microprogrammed control unit designs
2. Design a hardwired control unit using a finite state machine approach
3. Construct a microprogrammed control unit with micro-instruction sequencing
4. Analyse the trade-offs between horizontal and vertical microprogramming
5. Implement micro-instruction formats and micro-address generation logic

## Theory

![Hardwired vs Microprogrammed Control Unit](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/digital-logic/ch10-control-unit.png)

### 10.1 Control Unit Function

The control unit generates the sequence of control signals that direct datapath operation. It receives the instruction opcode and the clock as inputs and produces register enables, MUX selects, ALU control signals, and memory control signals as outputs.

### 10.2 Hardwired Control

A hardwired control unit implements the control logic as a finite state machine using gates, flip-flops, and decoders. The instruction decoder translates the opcode into a set of control signal states for each clock cycle.

#### 10.2.1 State Machine Approach

The control FSM has one or more states per instruction phase. For a single-cycle processor, the control signals are combinational functions of the opcode. For multi-cycle processors, a state machine sequences through fetch, decode, execute, and write-back states.

**Control signal generation for a single-cycle processor**:

RegWrite = opcode(5) &middot; (opcode(4) + opcode(3) + ... )

The actual logic depends on the specific opcode assignments. A decoder converts the *n*-bit opcode into a one-hot representation, and each control signal is a sum of the appropriate one-hot lines.

#### 10.2.2 PLA Implementation

A programmable logic array (PLA) implements the control functions as a two-level AND-OR array. The AND array forms product terms; the OR array sums appropriate product terms for each output. PLAs are area-efficient for large control functions.

### 10.3 Microprogrammed Control

Microprogrammed control stores control signals in a control store (ROM). Each micro-instruction word contains control bits for one clock cycle. A micro-program counter (micro-PC) sequences through the micro-instructions.

#### 10.3.1 Micro-instruction Format

A micro-instruction consists of:

1. **Control field bits**: Directly generate datapath control signals.
2. **Next-address field**: Specifies the address of the next micro-instruction.
3. **Sequencing control bits**: Determine how the next address is computed (sequential, branch, jump).

#### 10.3.2 Horizontal Microprogramming

Each control bit corresponds directly to a single control signal. The micro-instruction word is very wide (hundreds of bits) but requires minimal decoding.

Advantages: High parallelism, fast execution.
Disadvantages: Wide control store, poor code density.

#### 10.3.3 Vertical Microprogramming

Control bits are encoded into a compact format. A decoder expands each encoded field into individual control signals. Multiple micro-instructions may be needed per clock cycle if the fields cannot express all required control signals simultaneously.

Advantages: Narrow control store, good code density.
Disadvantages: More decoding, slower execution.

| Parameter | Horizontal | Vertical |
|-----------|------------|----------|
| Micro-instruction width | 100&ndash;200 bits | 16&ndash;40 bits |
| Decoding | Minimal | Extensive |
| Parallelism | High | Limited |
| Microprogram ROM size | Large | Small |
| Execution speed | Fast | Slower |

#### 10.3.4 Micro-Address Sequencing

The micro-address sequencer generates the address of the next micro-instruction. The sequencing modes include:

- **Increment**: micro-PC &larr; micro-PC + 1 (sequential flow)
- **Branch**: micro-PC &larr; branch address (if condition is true)
- **Jump**: micro-PC &larr; jump address (unconditional)
- **Return**: micro-PC &larr; return address stack (for micro-subroutines)

A mapping ROM translates the instruction opcode to the starting micro-address of the corresponding microprogram.

### 10.4 Wilkes Control Unit

Maurice Wilkes proposed the first microprogrammed control unit in 1951. It consists of a diode matrix that generates control signals as the AND of timing signals and instruction bits. Though obsolete as a physical implementation, Wilkes's concept remains the intellectual foundation of microprogramming.

### 10.5 Comparison: Hardwired vs Microprogrammed

| Aspect | Hardwired | Microprogrammed |
|--------|-----------|-----------------|
| Speed | Fast | Slower |
| Design complexity | High for complex ISAs | Moderate |
| Flexibility | Difficult to modify | Easy to modify |
| Area efficiency | Good | Requires control store |
| Error correction | Requires re-synthesis | ROM update suffices |
| Typical use | RISC processors | CISC processors |

### 10.6 Control Unit Design Procedure

1. Identify all control signals required by the datapath.
2. Determine the sequencing of control signals for each instruction.
3. For hardwired control: derive the state diagram, state table, and output logic.
4. For microprogrammed control: write the microprogram, assign micro-addresses, and implement the control store.

## Examples

### Example 10.1: Hardwired Control for a Single-Cycle Processor

Derive the Boolean expression for the RegWrite control signal for a processor with three instruction types:

- R-type: opcode = 0x00 (6 bits: 000000)
- LW: opcode = 0x23 (100011)
- SW: opcode = 0x2B (101011)
- BEQ: opcode = 0x04 (000100)

**Solution**: RegWrite should be 1 for R-type and LW instructions.

RegWrite = (opcode = 000000) + (opcode = 100011)

Let opcode bits be O_5 through O_0 (O_5 is MSB):

RegWrite = O_5' &middot; O_4' &middot; O_3' &middot; O_2' &middot; O_1' &middot; O_0' + O_5 &middot; O_4' &middot; O_3' &middot; O_2' &middot; O_1' &middot; O_0

= O_4' &middot; O_3' &middot; O_2' &middot; O_1' &middot; (O_5' &middot; O_0' + O_5 &middot; O_0)

= O_4' &middot; O_3' &middot; O_2' &middot; O_1' &middot; (O_5 &oplus; O_0)'

### Example 10.2: Microprogrammed Control for LW

Write the microprogram for the LW instruction in a multi-cycle processor.

**Solution**: The LW instruction requires three cycles:

Cycle 1 (Fetch):
- Control: IR &larr; Mem[PC], PC &larr; PC + 4
- Micro-instruction: MemRead=1, IROut=1, PCInc=1; Next = sequential

Cycle 2 (Decode + Address):
- Control: ALUOut &larr; R[rs] + sign_ext(offset)
- Micro-instruction: ALUSrcA=0, ALUSrcB=01, ALUOp=ADD, ALUOutEn=1; Next = sequential

Cycle 3 (Memory Read + Write-back):
- Control: R[rt] &larr; Mem[ALUOut]
- Micro-instruction: MemRead=1, MemtoReg=1, RegWrite=1; Next = fetch

### Example 10.3: Horizontal vs Vertical Microprogram Comparison

A datapath requires 50 distinct control signals. Compare the control store width for horizontal and vertical microprogramming (assuming 4 encoded fields of 4 bits each for vertical).

**Solution**:
- Horizontal: 50 bits per micro-instruction.
- Vertical: 4 &times; 4 = 16 bits for encoded fields + 4 bits for next address + 2 bits for sequencing control = 22 bits.

The vertical approach saves 28 bits per word but requires decoders that add propagation delay.

## Summary

- Hardwired control implements control logic as a finite state machine; microprogrammed control stores control signals in a ROM.
- Hardwired control is faster but more difficult to design and modify.
- Microprogrammed control offers flexibility and systematic design at the cost of speed.
- Horizontal microprogramming provides maximum parallelism; vertical microprogramming provides compact storage.
- The micro-address sequencer determines the next micro-instruction address using increment, branch, jump, or return operations.

## Exercises

### Review Questions

1. What is the primary difference between hardwired and microprogrammed control?
2. Explain the function of the mapping ROM in a microprogrammed control unit.
3. Distinguish between horizontal and vertical microprogramming.
4. What is a micro-instruction? How does it relate to a machine instruction?
5. Why are RISC processors typically hardwired while CISC processors are often microprogrammed?

### Application Problems

1. Design a hardwired control FSM for a multi-cycle processor with states: FETCH, DECODE, MEM_ADDR, MEM_READ, MEM_WRITE, REG_WRITE, EXECUTE, BRANCH. Show the state diagram and transition conditions based on the instruction opcode.

2. Given a microprogrammed control with a 256-word by 64-bit control store, 4 sequencing control bits, and 3 fields for ALU control, MUX selects, and register enables, determine the number of unique control signals that can be generated.

3. Write a microprogram for the BEQ instruction in a multi-cycle processor. Assume four cycles: fetch, decode, branch target calculation, and condition evaluation with PC update.

4. Design a micro-address sequencer that supports increment, unconditional branch, conditional branch (on Zero flag), and opcode mapping functions. Show the logic for the next-address generation.

5. Compare the total number of bits required for hardwired vs microprogrammed control for a processor with 128 instructions, each requiring an average of 5 control steps. The datapath has 60 control signals.

### Challenge Problem

Design a writable control store (WCS) microprogrammed control unit that can be updated at runtime. The system should support 512 micro-instructions of 72 bits each. Describe the hardware for loading micro-instructions from main memory into the control store, the write protection mechanism, and the sequencing logic. What are the security implications of a WCS in a multi-user system?
