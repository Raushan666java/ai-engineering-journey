# Module 7: Introduction to Microprocessors - Complete Guide
## 🖥️ Foundation of Computer Architecture

### 🎯 Module Overview
- **Duration**: 2 weeks (30 hours)
- **Difficulty**: Advanced
- **Prerequisites**: Sequential circuits, memory systems
- **Applications**: Embedded systems, computer architecture, IoT

## 📋 Learning Objectives
- Understand microprocessor architecture and organization
- Learn instruction set architecture (ISA) concepts
- Master assembly language programming
- Design microprocessor-based systems
- Implement I/O interfacing and interrupts
- Understand system bus and timing

## 🏗️ Topic 1: Microprocessor Architecture

### 1.1 Basic Microprocessor Organization
```
Microprocessor Components:
1. Arithmetic Logic Unit (ALU)
   - Performs arithmetic operations (+, -, ×, ÷)
   - Performs logical operations (AND, OR, NOT, XOR)
   - Generates status flags (Zero, Carry, Sign, Overflow)

2. Control Unit (CU)
   - Fetches instructions from memory
   - Decodes instructions
   - Generates control signals
   - Manages instruction execution sequence

3. Register Set
   - General-purpose registers (A, B, C, D, E, H, L)
   - Special-purpose registers (PC, SP, PSW)
   - Index registers and pointers

4. Internal Bus System
   - Data bus (bidirectional)
   - Address bus (unidirectional)
   - Control bus (various signals)

Basic Architecture Diagram:
┌─────────────────────────────────────┐
│           MICROPROCESSOR            │
│  ┌─────────┐    ┌─────────────────┐ │
│  │   ALU   │    │  REGISTER FILE  │ │
│  │         │    │  A B C D E H L  │ │
│  └─────────┘    │  PC SP PSW      │ │
│       │         └─────────────────┘ │
│  ┌─────────┐    ┌─────────────────┐ │
│  │CONTROL  │    │  INSTRUCTION    │ │
│  │  UNIT   │    │    DECODER      │ │
│  └─────────┘    └─────────────────┘ │
└─────────────────────────────────────┘
       │         │         │
   Data Bus  Address Bus Control Bus
```

### 1.2 CPU Organization Models
```
Von Neumann Architecture:
- Single memory space for instructions and data
- Single bus system
- Sequential instruction fetch and execution
- Simpler design but potential bottleneck

Harvard Architecture:
- Separate memory spaces for instructions and data
- Separate bus systems
- Parallel instruction fetch and data access
- Higher performance but more complex

Modified Harvard Architecture:
- Separate instruction and data caches
- Unified main memory
- Best of both architectures
- Used in modern processors

Instruction Execution Cycle:
1. FETCH: Get instruction from memory
2. DECODE: Interpret instruction
3. EXECUTE: Perform operation
4. STORE: Write results back

Detailed Fetch-Decode-Execute Cycle:
┌─────────────┐
│    FETCH    │ ← PC points to instruction
│             │   Memory read operation
└─────────────┘
       ↓
┌─────────────┐
│   DECODE    │ ← Instruction register to decoder
│             │   Generate control signals
└─────────────┘
       ↓
┌─────────────┐
│   EXECUTE   │ ← ALU operation or data transfer
│             │   Update flags and registers
└─────────────┘
       ↓
┌─────────────┐
│    STORE    │ ← Write results to memory/registers
│             │   Update program counter
└─────────────┘
```

### 1.3 Register Organization
```
8085 Microprocessor Register Set:

General Purpose Registers (8-bit each):
- A (Accumulator): Primary register for arithmetic operations
- B, C: Can be used as BC register pair (16-bit)
- D, E: Can be used as DE register pair (16-bit)
- H, L: Can be used as HL register pair (16-bit)

Special Purpose Registers:
- PC (Program Counter): 16-bit, points to next instruction
- SP (Stack Pointer): 16-bit, points to top of stack
- PSW (Program Status Word): 8-bit flags register

Flag Register (PSW) Bits:
Bit 7: S (Sign Flag) - Set if result is negative
Bit 6: Z (Zero Flag) - Set if result is zero
Bit 5: 0 (Always 0)
Bit 4: AC (Auxiliary Carry) - Set for BCD operations
Bit 3: 0 (Always 0)
Bit 2: P (Parity Flag) - Set if result has even parity
Bit 1: 1 (Always 1)
Bit 0: CY (Carry Flag) - Set if carry/borrow generated

Register Usage Examples:
MOV A, B     ; Copy B to A
ADD C        ; A = A + C, update flags
MOV M, A     ; Store A to memory location pointed by HL
LXI H, 2000H ; Load HL pair with 2000H
```

## 💾 Topic 2: Instruction Set Architecture

### 2.1 Instruction Format and Types
```
8085 Instruction Format:

1-Byte Instructions:
┌─────────────────────┐
│    OPCODE (8-bit)   │
└─────────────────────┘
Examples: MOV A,B (78H), ADD C (81H)

2-Byte Instructions:
┌─────────────────────┬─────────────────────┐
│    OPCODE (8-bit)   │     DATA (8-bit)    │
└─────────────────────┴─────────────────────┘
Examples: MVI A,05H, ADI 10H

3-Byte Instructions:
┌─────────────────────┬─────────────────────┬─────────────────────┐
│    OPCODE (8-bit)   │   LOW BYTE (8-bit)  │  HIGH BYTE (8-bit)  │
└─────────────────────┴─────────────────────┴─────────────────────┘
Examples: LDA 2050H, JMP 3000H

Instruction Categories:

1. Data Transfer Instructions:
   MOV r1, r2    ; Move data between registers
   MVI r, data   ; Move immediate data to register
   LDA addr      ; Load accumulator direct
   STA addr      ; Store accumulator direct
   LXI rp, data  ; Load register pair immediate
   LDAX rp       ; Load accumulator indirect
   STAX rp       ; Store accumulator indirect

2. Arithmetic Instructions:
   ADD r         ; Add register to accumulator
   ADC r         ; Add with carry
   SUB r         ; Subtract register from accumulator
   SBB r         ; Subtract with borrow
   INR r         ; Increment register
   DCR r         ; Decrement register
   DAD rp        ; Add register pair to HL

3. Logical Instructions:
   ANA r         ; AND register with accumulator
   ORA r         ; OR register with accumulator
   XRA r         ; XOR register with accumulator
   CMP r         ; Compare register with accumulator
   CMA           ; Complement accumulator
   CMC           ; Complement carry flag

4. Branch Instructions:
   JMP addr      ; Unconditional jump
   JZ addr       ; Jump if zero
   JNZ addr      ; Jump if not zero
   JC addr       ; Jump if carry
   JNC addr      ; Jump if no carry
   CALL addr     ; Call subroutine
   RET           ; Return from subroutine

5. Stack Instructions:
   PUSH rp       ; Push register pair onto stack
   POP rp        ; Pop register pair from stack
   XTHL          ; Exchange HL with top of stack
   SPHL          ; Copy HL to SP

6. I/O Instructions:
   IN port       ; Input from port
   OUT port      ; Output to port

7. Machine Control Instructions:
   NOP           ; No operation
   HLT           ; Halt processor
   EI            ; Enable interrupts
   DI            ; Disable interrupts
```

### 2.2 Addressing Modes
```
8085 Addressing Modes:

1. Immediate Addressing:
   MVI A, 05H    ; Load immediate data 05H into A
   ADI 10H       ; Add immediate data 10H to A
   LXI H, 2000H  ; Load immediate 16-bit data into HL

2. Register Addressing:
   MOV A, B      ; Move content of B to A
   ADD C         ; Add content of C to A
   INR D         ; Increment content of D

3. Direct Addressing:
   LDA 2050H     ; Load A from memory location 2050H
   STA 3000H     ; Store A to memory location 3000H

4. Indirect Addressing:
   MOV A, M      ; Load A from memory location pointed by HL
   LDAX B        ; Load A from memory location pointed by BC
   STAX D        ; Store A to memory location pointed by DE

5. Implicit Addressing:
   CMA           ; Complement A (A is implicit)
   RAL           ; Rotate A left through carry
   RET           ; Return (return address from stack is implicit)

Addressing Mode Examples:
┌─────────────────────────────────────────────────────────┐
│ Instruction │ Addressing Mode │ Operation               │
├─────────────────────────────────────────────────────────┤
│ MVI A, 25H  │ Immediate       │ A ← 25H                 │
│ MOV B, A    │ Register        │ B ← A                   │
│ LDA 2000H   │ Direct          │ A ← [2000H]             │
│ MOV A, M    │ Indirect        │ A ← [HL]                │
│ CMA         │ Implicit        │ A ← A̅                   │
└─────────────────────────────────────────────────────────┘
```

### 2.3 Assembly Language Programming
```
Assembly Language Structure:

[LABEL:] MNEMONIC [OPERAND] [;COMMENT]

Example Program: Add two 8-bit numbers
ORG 2000H        ; Origin directive
START: MVI A, 15H    ; Load first number in A
       MVI B, 25H    ; Load second number in B
       ADD B         ; Add B to A
       STA 3000H     ; Store result at 3000H
       HLT           ; Halt the processor
END                  ; End directive

Assembler Directives:
ORG addr    ; Set origin address
DB data     ; Define byte
DW data     ; Define word
DS count    ; Define storage
EQU value   ; Equate symbol to value
END         ; End of program

Sample Programs:

1. Find largest of two numbers:
ORG 2000H
       LDA 3000H     ; Load first number
       MOV B, A      ; Save in B
       LDA 3001H     ; Load second number
       CMP B         ; Compare with first
       JC SECOND     ; Jump if A < B
       STA 3002H     ; Store A (larger)
       JMP END_PROG
SECOND: MOV A, B     ; Move B to A
       STA 3002H     ; Store B (larger)
END_PROG: HLT
END

2. Block transfer program:
ORG 2000H
       LXI H, 3000H  ; Source address
       LXI D, 4000H  ; Destination address
       MVI C, 10H    ; Count
LOOP:  MOV A, M      ; Get source data
       STAX D        ; Store at destination
       INX H         ; Increment source pointer
       INX D         ; Increment destination pointer
       DCR C         ; Decrement count
       JNZ LOOP      ; Continue if not zero
       HLT
END

3. Multiplication by repeated addition:
ORG 2000H
       LDA 3000H     ; Load multiplicand
       MOV B, A      ; Save multiplicand
       LDA 3001H     ; Load multiplier
       MOV C, A      ; Save multiplier
       MVI A, 00H    ; Initialize result
MULT_LOOP: ADD B     ; Add multiplicand
       DCR C         ; Decrement multiplier
       JNZ MULT_LOOP ; Continue if not zero
       STA 3002H     ; Store result
       HLT
END
```

## 🔌 Topic 3: I/O Interfacing

### 3.1 I/O Techniques
```
I/O Interfacing Methods:

1. Memory-Mapped I/O:
   - I/O devices treated as memory locations
   - Same instructions used for memory and I/O
   - Larger address space required
   - Example: MOV A, M (where M points to I/O device)

2. I/O-Mapped I/O (Isolated I/O):
   - Separate address space for I/O devices
   - Special I/O instructions (IN, OUT)
   - 8-bit port addressing (256 ports)
   - Example: IN 01H, OUT 02H

I/O Port Structure:
┌─────────────────────────────────────┐
│           MICROPROCESSOR            │
└─────────────┬───────────────────────┘
              │
         System Bus
              │
┌─────────────┴───────────────────────┐
│          I/O PORT                   │
│  ┌─────────────┐ ┌─────────────────┐│
│  │   ADDRESS   │ │     DATA        ││
│  │   DECODER   │ │    BUFFER       ││
│  └─────────────┘ └─────────────────┘│
│  ┌─────────────┐ ┌─────────────────┐│
│  │   CONTROL   │ │   STATUS        ││
│  │   LOGIC     │ │   REGISTER      ││
│  └─────────────┘ └─────────────────┘│
└─────────────────────────────────────┘
              │
        I/O Device

Simple I/O Interface Design:
Address Lines A7-A0 → Port Address Decoder
Data Lines D7-D0 ↔ Data Buffer
Control Signals:
- IO/M̅ (I/O or Memory)
- RD̅ (Read)
- WR̅ (Write)
```

### 3.2 Programmable I/O Devices
```
8255 Programmable Peripheral Interface (PPI):

Features:
- 24 I/O lines organized as 3 ports (A, B, C)
- Port A: 8-bit I/O
- Port B: 8-bit I/O  
- Port C: 8-bit I/O (can be split into two 4-bit ports)
- Multiple operating modes

8255 Pin Configuration:
     ┌─────┐
PA7 ─┤1  40├─ PA0
PA6 ─┤2  39├─ PA1
PA5 ─┤3  38├─ PA2
PA4 ─┤4  37├─ PA3
PA3 ─┤5  36├─ RD̅
PA2 ─┤6  35├─ WR̅
PA1 ─┤7  34├─ RESET
PA0 ─┤8  33├─ D0
PC7 ─┤9  32├─ D1
PC6 ─┤10 31├─ D2
PC5 ─┤11 30├─ D3
PC4 ─┤12 29├─ D4
PC0 ─┤13 28├─ D5
PC1 ─┤14 27├─ D6
PC2 ─┤15 26├─ D7
PC3 ─┤16 25├─ VCC
PB0 ─┤17 24├─ A1
PB1 ─┤18 23├─ A0
PB2 ─┤19 22├─ CS̅
PB3 ─┤20 21├─ GND
     └─────┘

8255 Operating Modes:

Mode 0 (Simple I/O):
- Basic input/output operations
- No handshaking
- All ports can be configured as input or output

Mode 1 (Strobed I/O):
- Handshaking capability
- Port A or B with handshaking
- Port C provides handshaking signals

Mode 2 (Bidirectional I/O):
- Port A only
- Bidirectional data transfer
- Port C provides handshaking

Control Word Format:
┌───┬───┬───┬───┬───┬───┬───┬───┐
│ 1 │PA │PA │PC │PB │PB │PC │PC │
│   │MOD│DIR│UP │MOD│DIR│LOW│LOW│
│   │E  │   │DIR│E  │   │DIR│   │
└───┴───┴───┴───┴───┴───┴───┴───┘
Bit 7: Mode set flag (1)
Bit 6-5: Port A mode (00=Mode 0, 01=Mode 1, 1X=Mode 2)
Bit 4: Port A direction (1=input, 0=output)
Bit 3: Port C upper direction
Bit 2: Port B mode (0=Mode 0, 1=Mode 1)
Bit 1: Port B direction
Bit 0: Port C lower direction

Programming Example:
; Configure 8255: Port A output, Port B input, Port C output
MVI A, 82H      ; Control word: 10000010
OUT 83H         ; Send to control register

; Output data to Port A
MVI A, 55H      ; Data to output
OUT 80H         ; Send to Port A

; Read data from Port B
IN 81H          ; Read from Port B
```

### 3.3 Interrupt System
```
8085 Interrupt System:

Interrupt Types:
1. Hardware Interrupts:
   - TRAP (Non-maskable, highest priority)
   - RST 7.5 (Maskable)
   - RST 6.5 (Maskable)
   - RST 5.5 (Maskable)
   - INTR (Maskable, lowest priority)

2. Software Interrupts:
   - RST 0 through RST 7

Interrupt Priority:
TRAP > RST 7.5 > RST 6.5 > RST 5.5 > INTR

Interrupt Vector Table:
┌─────────────┬─────────────┬─────────────┐
│ Interrupt   │ Vector Addr │ Jump Addr   │
├─────────────┼─────────────┼─────────────┤
│ TRAP        │ 0024H       │ User defined│
│ RST 7.5     │ 003CH       │ User defined│
│ RST 6.5     │ 0034H       │ User defined│
│ RST 5.5     │ 002CH       │ User defined│
│ RST 0       │ 0000H       │ 0000H       │
│ RST 1       │ 0008H       │ 0008H       │
│ RST 2       │ 0010H       │ 0010H       │
│ RST 3       │ 0018H       │ 0018H       │
│ RST 4       │ 0020H       │ 0020H       │
│ RST 5       │ 0028H       │ 0028H       │
│ RST 6       │ 0030H       │ 0030H       │
│ RST 7       │ 0038H       │ 0038H       │
└─────────────┴─────────────┴─────────────┘

Interrupt Handling Process:
1. Complete current instruction
2. Save program counter on stack
3. Disable interrupts (except TRAP)
4. Jump to interrupt service routine
5. Execute interrupt service routine
6. Return from interrupt (RET or RETI)
7. Restore program counter from stack
8. Enable interrupts
9. Continue main program

Interrupt Service Routine Example:
; Main program
ORG 2000H
MAIN:   EI          ; Enable interrupts
        MVI A, 00H
LOOP:   INR A
        JMP LOOP

; Interrupt service routine for RST 7.5
ORG 003CH
ISR:    PUSH PSW    ; Save accumulator and flags
        PUSH B      ; Save registers
        PUSH D
        PUSH H
        
        ; Interrupt service code
        IN 01H      ; Read from input port
        OUT 02H     ; Send to output port
        
        POP H       ; Restore registers
        POP D
        POP B
        POP PSW
        EI          ; Re-enable interrupts
        RET         ; Return from interrupt

Interrupt Masking:
SIM instruction controls interrupt masks:
┌───┬───┬───┬───┬───┬───┬───┬───┐
│SOD│SOE│ X │R75│MSE│M75│M65│M55│
└───┴───┴───┴───┴───┴───┴───┴───┘
Bit 7: SOD (Serial Output Data)
Bit 6: SOE (Serial Output Enable)
Bit 5: Don't care
Bit 4: R75 (Reset RST 7.5)
Bit 3: MSE (Mask Set Enable)
Bit 2: M75 (Mask RST 7.5)
Bit 1: M65 (Mask RST 6.5)
Bit 0: M55 (Mask RST 5.5)

Example: Mask RST 6.5 and RST 5.5
MVI A, 0BH      ; MSE=1, M65=1, M55=1
SIM             ; Set interrupt mask
```

## 🚌 Topic 4: System Bus and Timing

### 4.1 Bus Organization
```
8085 Bus Structure:

Address Bus (16-bit):
- A15-A8: Higher order address bus
- AD7-AD0: Multiplexed address/data bus (lower 8 bits)
- Unidirectional during address phase

Data Bus (8-bit):
- D7-D0: Bidirectional data bus
- Multiplexed with lower address bits
- High impedance when not in use

Control Bus:
- ALE (Address Latch Enable)
- RD̅ (Read strobe)
- WR̅ (Write strobe)
- IO/M̅ (I/O or Memory select)
- S0, S1 (Status signals)
- READY (Wait state control)

Bus Timing Diagrams:

Memory Read Cycle:
CLK    ┌─┐   ┌─┐   ┌─┐   ┌─┐
       │ │   │ │   │ │   │ │
       └─┘   └─┘   └─┘   └─┘
       T1    T2    T3    T4

ALE    ┌───┐
       │   │
       └───┘

AD7-0  ├─A7-A0─┤───D7-D0───┤
       │Address│    Data    │

A15-8  ├─────A15-A8────────┤

RD̅     ┌───────┐
              │
              └───────┘

Memory Write Cycle:
CLK    ┌─┐   ┌─┐   ┌─┐   ┌─┐
       │ │   │ │   │ │   │ │
       └─┘   └─┘   └─┘   └─┘
       T1    T2    T3    T4

ALE    ┌───┐
       │   │
       └───┘

AD7-0  ├─A7-A0─┤───D7-D0───┤
       │Address│    Data    │

WR̅     ┌───────┐
              │
              └───────┘

Bus Demultiplexing:
External latch (74LS373) separates address and data:

AD7-AD0 ──┬─── Data Bus (D7-D0)
          │
          └─── 74LS373 ──── Address Bus (A7-A0)
                 │
               ALE
```

### 4.2 Memory Interfacing
```
Memory Interface Design:

Address Decoding:
For 8K memory (2000H - 3FFFH):
A15 A14 A13 A12 A11 A10 A9 A8
 0   0   1   X   X   X  X  X

Decoder Logic:
CS̅ = A15̅ · A14̅ · A13

Complete Memory Interface:
┌─────────────────────────────────────┐
│           8085 CPU                  │
└─┬─────────┬─────────┬───────────────┘
  │         │         │
Address   Data    Control
  │         │         │
┌─┴─────────┴─────────┴───────────────┐
│        Address Decoder              │
│  ┌─────────────────────────────────┐│
│  │    74LS138 (3-to-8 decoder)    ││
│  └─────────────────────────────────┘│
└─────────────┬───────────────────────┘
              │ CS̅
┌─────────────┴───────────────────────┐
│          Memory Chip                │
│         (2764 - 8K EPROM)          │
│  A12-A0 ←── Address                │
│  D7-D0  ←→  Data                   │
│  CS̅, OE̅ ←── Control               │
└─────────────────────────────────────┘

Memory Map Example:
0000H - 1FFFH: ROM (8K)
2000H - 3FFFH: RAM (8K)
4000H - 5FFFH: I/O Space
6000H - 7FFFH: Expansion
8000H - FFFFH: External Memory

Address Decoding Table:
┌─────────────┬─────────────┬─────────────┐
│ Address     │ A15 A14 A13 │ Device      │
├─────────────┼─────────────┼─────────────┤
│ 0000-1FFF   │  0   0   0  │ ROM         │
│ 2000-3FFF   │  0   0   1  │ RAM         │
│ 4000-5FFF   │  0   1   0  │ I/O         │
│ 6000-7FFF   │  0   1   1  │ Expansion   │
│ 8000-9FFF   │  1   0   0  │ External    │
│ A000-BFFF   │  1   0   1  │ External    │
│ C000-DFFF   │  1   1   0  │ External    │
│ E000-FFFF   │  1   1   1  │ External    │
└─────────────┴─────────────┴─────────────┘
```

### 4.3 System Design Example
```
Complete 8085-based System:

System Components:
1. 8085 Microprocessor
2. 8K EPROM (2764) for program storage
3. 8K RAM (6264) for data storage
4. 8255 PPI for I/O operations
5. Address decoder (74LS138)
6. Address latch (74LS373)
7. Clock generator circuit

System Block Diagram:
┌─────────────────────────────────────┐
│           8085 CPU                  │
│  AD7-0, A15-8, ALE, RD̅, WR̅, IO/M̅   │
└─┬─────────┬─────────┬───────────────┘
  │         │         │
┌─┴─────────┴─────────┴───────────────┐
│        System Bus                   │
└─┬─────────┬─────────┬───────────────┘
  │         │         │
┌─┴─────┐ ┌─┴─────┐ ┌─┴─────────────┐
│ EPROM │ │  RAM  │ │     8255      │
│ 2764  │ │ 6264  │ │     PPI       │
│ 8K×8  │ │ 8K×8  │ │   24 I/O      │
└───────┘ └───────┘ └───────────────┘

Memory and I/O Map:
0000H - 1FFFH: EPROM (Program)
2000H - 3FFFH: RAM (Data)
4000H - 4003H: 8255 PPI
  4000H: Port A
  4001H: Port B
  4002H: Port C
  4003H: Control Register

Sample Application Program:
; Traffic Light Controller
ORG 0000H
START:  LXI SP, 3FFFH    ; Initialize stack pointer
        MVI A, 80H       ; Configure 8255
        OUT 4003H        ; All ports as output
        
MAIN:   MVI A, 0CH       ; Red NS, Green EW
        OUT 4000H        ; Output to Port A
        CALL DELAY       ; Wait
        
        MVI A, 0AH       ; Red NS, Yellow EW
        OUT 4000H
        CALL DELAY
        
        MVI A, 21H       ; Green NS, Red EW
        OUT 4000H
        CALL DELAY
        
        MVI A, 41H       ; Yellow NS, Red EW
        OUT 4000H
        CALL DELAY
        
        JMP MAIN         ; Repeat cycle

DELAY:  LXI D, 0FFFFH    ; Load delay count
LOOP:   DCX D            ; Decrement count
        MOV A, D         ; Check if zero
        ORA E
        JNZ LOOP         ; Continue if not zero
        RET

END

Hardware Connections:
8255 Port A → Traffic Light LEDs
  PA0: NS Red LED
  PA1: NS Yellow LED  
  PA2: NS Green LED
  PA3: EW Red LED
  PA4: EW Yellow LED
  PA5: EW Green LED

Clock Circuit:
Crystal Oscillator (6.144 MHz) → 8085 CLK IN
8085 CLK OUT → System Clock

Reset Circuit:
Power-on Reset → 8085 RESET IN
Manual Reset Switch → 8085 RESET IN
```

## 📊 Performance Analysis and Optimization

### Instruction Timing Analysis
```python
class InstructionTiming:
    def __init__(self):
        self.instruction_cycles = {
            # Data Transfer Instructions
            'MOV_r_r': 1,      # MOV A,B
            'MOV_r_m': 2,      # MOV A,M
            'MOV_m_r': 2,      # MOV M,A
            'MVI_r': 2,        # MVI A,data
            'MVI_m': 3,        # MVI M,data
            'LDA': 4,          # LDA addr
            'STA': 4,          # STA addr
            'LXI': 3,          # LXI H,data
            
            # Arithmetic Instructions
            'ADD_r': 1,        # ADD B
            'ADD_m': 2,        # ADD M
            'ADI': 2,          # ADI data
            'SUB_r': 1,        # SUB B
            'INR_r': 1,        # INR A
            'INR_m': 3,        # INR M
            
            # Branch Instructions
            'JMP': 3,          # JMP addr
            'JZ': 3,           # JZ addr (when jump taken)
            'JNZ': 3,          # JNZ addr (when jump taken)
            'CALL': 5,         # CALL addr
            'RET': 3,          # RET
            
            # I/O Instructions
            'IN': 3,           # IN port
            'OUT': 3,          # OUT port
        }
    
    def calculate_execution_time(self, program, clock_frequency):
        """Calculate program execution time"""
        total_cycles = 0
        
        for instruction in program:
            cycles = self.instruction_cycles.get(instruction, 1)
            total_cycles += cycles
        
        # Each machine cycle = 3 clock periods for 8085
        total_clock_cycles = total_cycles * 3
        execution_time = total_clock_cycles / clock_frequency
        
        return {
            'machine_cycles': total_cycles,
            'clock_cycles': total_clock_cycles,
            'execution_time_seconds': execution_time,
            'execution_time_microseconds': execution_time * 1000000
        }

# Example usage
timing_analyzer = InstructionTiming()
sample_program = ['LXI', 'MVI_r', 'ADD_r', 'STA', 'HLT']
clock_freq = 3000000  # 3 MHz

timing_result = timing_analyzer.calculate_execution_time(sample_program, clock_freq)
print(f"Execution time: {timing_result['execution_time_microseconds']:.2f} μs")
```

## 🎯 Learning Outcomes and Assessment

### Practical Projects
1. **Digital Clock**: Real-time clock using 8085 and 8255
2. **Temperature Monitor**: ADC interface and display system
3. **Stepper Motor Controller**: Precise motor control system
4. **Data Acquisition System**: Multi-channel data logger

### Assessment Criteria
- Microprocessor architecture understanding (25%)
- Assembly language programming (30%)
- I/O interfacing design (25%)
- System integration skills (20%)

### Career Applications
- **Embedded Systems Engineer**: $75K-$130K
- **Microcontroller Programmer**: $70K-$120K
- **Hardware Design Engineer**: $80K-$140K
- **IoT Developer**: $85K-$150K

---

*Microprocessors are the heart of modern digital systems. Understanding their architecture, programming, and interfacing is essential for anyone working in embedded systems, IoT, or computer engineering.*