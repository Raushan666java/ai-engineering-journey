# Module 4: Combinational Logic Circuits Complete Guide
## 🔧 Building Complex Digital Systems

### 🎯 Module Overview
- **Duration**: 3 weeks (45 hours)
- **Difficulty**: Intermediate to Advanced
- **Prerequisites**: Boolean algebra, logic gates
- **Applications**: Arithmetic units, data routing, control systems

## 📋 Learning Objectives
- Design and analyze combinational circuits
- Implement arithmetic operations in digital form
- Understand multiplexers, demultiplexers, encoders, decoders
- Apply combinational circuits in real-world systems
- Optimize circuits for speed and area
- Troubleshoot combinational logic problems

## ➕ Topic 1: Arithmetic Circuits

### 1.1 Half Adder
```
Function: Adds two single bits
Inputs: A, B (single bits)
Outputs: Sum (S), Carry (C)

Truth Table:
A | B | S | C
--|---|---|---
0 | 0 | 0 | 0
0 | 1 | 1 | 0
1 | 0 | 1 | 0
1 | 1 | 0 | 1

Boolean Expressions:
Sum (S) = A ⊕ B (XOR operation)
Carry (C) = A · B (AND operation)

Circuit Implementation:
A ————————————————————————————————————————————————— S = A⊕B
     \                                            /
      \                                          /
       \————————————— XOR ——————————————————————/
      /                                          
     /                                           
B ——/                                            
     \                                           
      \————————————— AND ——————————————————————— C = A·B
     /                                           
A ——/                                            

Gate Count: 1 XOR + 1 AND = 2 gates

Applications:
- Building block for full adders
- Simple binary addition
- Parity generation
- Basic arithmetic units

Limitations:
- Cannot handle carry input from previous stage
- Only suitable for LSB addition
- Cannot be cascaded directly
```

### 1.2 Full Adder
```
Function: Adds three single bits (including carry from previous stage)
Inputs: A, B, Cin (carry input)
Outputs: Sum (S), Cout (carry output)

Truth Table:
A | B | Cin | S | Cout
--|---|-----|---|-----
0 | 0 |  0  | 0 |  0
0 | 0 |  1  | 1 |  0
0 | 1 |  0  | 1 |  0
0 | 1 |  1  | 0 |  1
1 | 0 |  0  | 1 |  0
1 | 0 |  1  | 0 |  1
1 | 1 |  0  | 0 |  1
1 | 1 |  1  | 1 |  1

Boolean Expressions:
Sum (S) = A ⊕ B ⊕ Cin
Carry (Cout) = A·B + Cin·(A ⊕ B)
Alternative: Cout = A·B + A·Cin + B·Cin

K-Map for Sum:
     BCin
   00 01 11 10
A 0  0  1  0  1
  1  1  0  1  0
S = A ⊕ B ⊕ Cin

K-Map for Carry:
     BCin
   00 01 11 10
A 0  0  0  1  0
  1  0  1  1  1
Cout = A·B + Cin·(A ⊕ B)

Implementation using Half Adders:
A ——————————————————————————————————————————————————————————— S
     \                                                      /
      \————— HA1 ————— S1 ————————————————————————————————— /
     /        |                                            /
B ——/         C1 ——————————————————————————————————————————/
                      \                                   /
                       \————— HA2 ————— S ——————————————— /
                      /        |                         /
Cin ——————————————————/         C2 ——————————————————————/
                                      \                 /
                                       \————— OR ————— / Cout
                                      /               /
C1 ——————————————————————————————————/               /

Gate Count: 2 Half Adders + 1 OR = 2 XOR + 3 AND + 1 OR = 6 gates

Applications:
- Multi-bit binary addition
- Building block for ALUs
- Cascadable for any word length
- Subtraction (with 2's complement)
```

### 1.3 Binary Adders
```
Ripple Carry Adder (RCA):
- Cascaded full adders
- Carry propagates from LSB to MSB
- Simple but slow for large word sizes

4-bit Ripple Carry Adder:
A3 B3    A2 B2    A1 B1    A0 B0
 |  |     |  |     |  |     |  |
 FA3      FA2      FA1      FA0
 |        |        |        |
S3       S2       S1       S0
 |        |        |        |
Cout ←— C3 ←—— C2 ←—— C1 ←—— C0 (=0)

Propagation Delay:
- Each FA has delay tPD
- Total delay = n × tPD (for n-bit adder)
- 4-bit RCA: 4 × tPD
- 32-bit RCA: 32 × tPD (too slow!)

Carry Look-ahead Adder (CLA):
- Generates carries in parallel
- Much faster than RCA
- More complex hardware

Generate and Propagate Functions:
Gi = Ai · Bi (carry generate)
Pi = Ai ⊕ Bi (carry propagate)

Carry Equations:
C0 = 0 (no input carry)
C1 = G0 + P0·C0 = G0
C2 = G1 + P1·C1 = G1 + P1·G0
C3 = G2 + P2·C2 = G2 + P2·G1 + P2·P1·G0
C4 = G3 + P3·C3 = G3 + P3·G2 + P3·P2·G1 + P3·P2·P1·G0

Sum Equations:
Si = Pi ⊕ Ci

4-bit CLA Implementation:
- All carries generated simultaneously
- Delay = 2 gate delays (independent of word size)
- Much faster than RCA
- Higher hardware cost

Comparison:
                RCA    CLA
4-bit delay:    4tPD   2tPD
16-bit delay:   16tPD  2tPD
Gate count:     Low    High
Complexity:     Simple Complex
```

### 1.4 Binary Subtractors
```
Half Subtractor:
Inputs: A (minuend), B (subtrahend)
Outputs: D (difference), Bout (borrow)

Truth Table:
A | B | D | Bout
--|---|---|-----
0 | 0 | 0 |  0
0 | 1 | 1 |  1
1 | 0 | 1 |  0
1 | 1 | 0 |  0

Boolean Expressions:
Difference (D) = A ⊕ B
Borrow (Bout) = A' · B

Full Subtractor:
Inputs: A, B, Bin (borrow input)
Outputs: D (difference), Bout (borrow output)

Truth Table:
A | B | Bin | D | Bout
--|---|-----|---|-----
0 | 0 |  0  | 0 |  0
0 | 0 |  1  | 1 |  1
0 | 1 |  0  | 1 |  1
0 | 1 |  1  | 0 |  1
1 | 0 |  0  | 1 |  0
1 | 0 |  1  | 0 |  0
1 | 1 |  0  | 0 |  0
1 | 1 |  1  | 1 |  1

Boolean Expressions:
Difference (D) = A ⊕ B ⊕ Bin
Borrow (Bout) = A'·B + Bin·(A ⊕ B)'

Alternative Method - Using 2's Complement:
A - B = A + (2's complement of B)
A - B = A + B' + 1

Adder/Subtractor Circuit:
- Use same adder circuit
- XOR gates to complement B when subtracting
- Control signal M: 0 for add, 1 for subtract

4-bit Adder/Subtractor:
B3 B2 B1 B0
 |  |  |  |
XOR XOR XOR XOR ← M (control)
 |  |  |  |
 4-bit Adder ← M (carry input)
 |  |  |  |
S3 S2 S1 S0

When M = 0: Addition (A + B)
When M = 1: Subtraction (A - B = A + B' + 1)
```

### 1.5 BCD Adder
```
BCD (Binary Coded Decimal) Addition Rules:
- Each decimal digit represented by 4 bits
- Valid BCD codes: 0000 to 1001 (0 to 9)
- Invalid codes: 1010 to 1111 (A to F)

BCD Addition Algorithm:
1. Add two BCD digits using binary addition
2. If sum ≤ 9 (≤ 1001), result is correct
3. If sum > 9 or carry generated, add 6 (0110) for correction

Examples:
Case 1: 5 + 3 = 8
  0101 (5)
+ 0011 (3)
-------
  1000 (8) ← Valid BCD, no correction needed

Case 2: 7 + 6 = 13
  0111 (7)
+ 0110 (6)
-------
  1101 (13) ← Invalid BCD (>9), needs correction
+ 0110 (6)  ← Add 6 for correction
-------
 10011 → 0001 0011 (13 in BCD)

Case 3: 9 + 9 = 18
  1001 (9)
+ 1001 (9)
-------
 10010 (18) ← Carry generated, needs correction
+ 0110 (6)  ← Add 6 for correction
-------
 11000 → 0001 1000 (18 in BCD)

BCD Adder Circuit:
- 4-bit binary adder
- Detection logic for correction
- Correction adder (adds 6 when needed)

Correction Logic:
Correction needed when:
- C4 = 1 (carry out of 4-bit adder), OR
- S3·S2 = 1 (sum ≥ 12), OR  
- S3·S1 = 1 (sum = 10 or 11)

Correction = C4 + S3·S2 + S3·S1

BCD Adder Block Diagram:
A3A2A1A0   B3B2B1B0
    |         |
    4-bit Adder
    |    |
   Sum  C4
    |    |
Correction Logic
    |
    4-bit Adder (adds 0110)
    |
BCD Sum Output
```

## 🔀 Topic 2: Multiplexers and Demultiplexers

### 2.1 Multiplexer (MUX)
```
Definition: Digital switch that selects one of many inputs and routes it to output
Also called: Data selector, MUX

2-to-1 Multiplexer:
Inputs: I0, I1 (data inputs), S (select)
Output: Y

Truth Table:
S | Y
--|---
0 | I0
1 | I1

Boolean Expression: Y = S'·I0 + S·I1

Circuit Implementation:
I0 ————————————————————————————————————————————————————————— Y
     \                                                      /
      \————— AND ————————————————————————————————————————— /
     /        |                                           /
S' —/         |                                          /
              |————————————— OR ——————————————————————— /
              |                                        /
I1 ————————————————————————————————————————————————————/
     \                                                /
      \————— AND ——————————————————————————————————— /
     /                                              /
S ——/                                              /

4-to-1 Multiplexer:
Inputs: I0, I1, I2, I3 (data), S1, S0 (select)
Output: Y

Truth Table:
S1 | S0 | Y
---|----|----- 
 0 |  0 | I0
 0 |  1 | I1
 1 |  0 | I2
 1 |  1 | I3

Boolean Expression:
Y = S1'·S0'·I0 + S1'·S0·I1 + S1·S0'·I2 + S1·S0·I3

General n-to-1 Multiplexer:
- n data inputs (I0 to In-1)
- log2(n) select inputs
- 1 output
- 2^(log2(n)) = n possible selections

8-to-1 MUX: 8 data inputs, 3 select inputs
16-to-1 MUX: 16 data inputs, 4 select inputs

Applications:
1. Data routing in computer systems
2. Function generation (Boolean function implementation)
3. Parallel-to-serial conversion
4. Time-division multiplexing
5. Address decoding

Function Implementation using MUX:
Any Boolean function can be implemented using MUX

Method 1: Direct implementation
- Use function variables as select inputs
- Connect appropriate constants (0, 1) or variables to data inputs

Method 2: Reduced variable method
- Use (n-1) variables as select inputs for n-variable function
- Connect remaining variable, its complement, 0, or 1 to data inputs

Example: F(A,B,C) = Σm(1,2,6,7)
Using 4-to-1 MUX with A,B as select:

AB | F | MUX Input
---|---|----------
00 | 0 | I0 = 0
01 | 1 | I1 = C
10 | 0 | I2 = 0  
11 | 1 | I3 = 1

Tree Structure for Large MUX:
64-to-1 MUX using 8-to-1 MUX:
- 8 pieces of 8-to-1 MUX in first level
- 1 piece of 8-to-1 MUX in second level
- Total select inputs: 6 bits
```

### 2.2 Demultiplexer (DEMUX)
```
Definition: Routes single input to one of many outputs
Also called: Data distributor, DEMUX, Decoder

1-to-2 Demultiplexer:
Inputs: I (data), S (select)
Outputs: Y0, Y1

Truth Table:
S | Y0 | Y1
--|----|----- 
0 | I  | 0
1 | 0  | I

Boolean Expressions:
Y0 = S'·I
Y1 = S·I

1-to-4 Demultiplexer:
Inputs: I (data), S1, S0 (select)
Outputs: Y0, Y1, Y2, Y3

Truth Table:
S1 | S0 | Y0 | Y1 | Y2 | Y3
---|----|----|----|----|----
 0 |  0 | I  | 0  | 0  | 0
 0 |  1 | 0  | I  | 0  | 0
 1 |  0 | 0  | 0  | I  | 0
 1 |  1 | 0  | 0  | 0  | I

Boolean Expressions:
Y0 = S1'·S0'·I
Y1 = S1'·S0·I
Y2 = S1·S0'·I
Y3 = S1·S0·I

General 1-to-n Demultiplexer:
- 1 data input
- log2(n) select inputs
- n outputs
- Only one output active at a time

Applications:
1. Serial-to-parallel conversion
2. Data distribution
3. Memory address decoding
4. Control signal generation
5. Time-division demultiplexing

Relationship between MUX and DEMUX:
- MUX: Many inputs → One output
- DEMUX: One input → Many outputs
- Complementary operations
- Can be used together for data transmission

MUX-DEMUX System:
Data Sources → MUX → Transmission → DEMUX → Data Destinations
    ↑              ↑                    ↑
Select Signals  Single Channel    Same Select Signals
```

### 2.3 Decoder
```
Definition: Converts binary code to corresponding output line activation
n inputs → 2^n outputs (only one output active)

2-to-4 Decoder:
Inputs: A1, A0 (binary code)
Outputs: Y0, Y1, Y2, Y3 (one-hot encoded)

Truth Table:
A1 | A0 | Y0 | Y1 | Y2 | Y3
---|----|----|----|----|----
 0 |  0 | 1  | 0  | 0  | 0
 0 |  1 | 0  | 1  | 0  | 0
 1 |  0 | 0  | 0  | 1  | 0
 1 |  1 | 0  | 0  | 0  | 1

Boolean Expressions:
Y0 = A1'·A0'
Y1 = A1'·A0
Y2 = A1·A0'
Y3 = A1·A0

3-to-8 Decoder:
Inputs: A2, A1, A0
Outputs: Y0 to Y7

Boolean Expressions:
Y0 = A2'·A1'·A0'
Y1 = A2'·A1'·A0
Y2 = A2'·A1·A0'
Y3 = A2'·A1·A0
Y4 = A2·A1'·A0'
Y5 = A2·A1'·A0
Y6 = A2·A1·A0'
Y7 = A2·A1·A0

Decoder with Enable:
- Additional enable input (E or EN)
- All outputs inactive when enable is inactive
- Normal operation when enable is active

Truth Table with Enable:
EN | A1 | A0 | Y0 | Y1 | Y2 | Y3
---|----|----|----|----|----|----- 
 0 | X  | X  | 0  | 0  | 0  | 0
 1 | 0  | 0  | 1  | 0  | 0  | 0
 1 | 0  | 1  | 0  | 1  | 0  | 0
 1 | 1  | 0  | 0  | 0  | 1  | 0
 1 | 1  | 1  | 0  | 0  | 0  | 1

Applications:
1. Memory address decoding
2. Instruction decoding in CPUs
3. I/O port selection
4. Seven-segment display drivers
5. Function generation

Building Larger Decoders:
4-to-16 Decoder using 2-to-4 Decoders:
- One 2-to-4 decoder as "row decoder"
- Four 2-to-4 decoders as "column decoders"
- Enable signals connect row to columns

Decoder vs Demultiplexer:
Similarities:
- Same circuit structure
- n inputs, 2^n outputs
- One output active at a time

Differences:
- Decoder: Code conversion (address → select line)
- Demux: Data routing (data → selected output)
- Decoder inputs are address/code
- Demux has separate data and select inputs
```

### 2.4 Encoder
```
Definition: Converts one-hot input to corresponding binary code
2^n inputs → n outputs (opposite of decoder)

4-to-2 Encoder:
Inputs: I0, I1, I2, I3 (one-hot)
Outputs: Y1, Y0 (binary code)

Truth Table:
I3 | I2 | I1 | I0 | Y1 | Y0
---|----|----|----|----|----
 0 |  0 |  0 |  1 | 0  | 0
 0 |  0 |  1 |  0 | 0  | 1
 0 |  1 |  0 |  0 | 1  | 0
 1 |  0 |  0 |  0 | 1  | 1

Boolean Expressions:
Y0 = I1 + I3
Y1 = I2 + I3

Problems with Simple Encoder:
1. Only one input should be active
2. All inputs inactive → ambiguous output
3. Multiple inputs active → incorrect output

Priority Encoder:
- Assigns priority to inputs
- Highest priority input determines output
- Additional outputs indicate validity

8-to-3 Priority Encoder:
Inputs: I7, I6, I5, I4, I3, I2, I1, I0 (I7 = highest priority)
Outputs: Y2, Y1, Y0 (binary code), V (valid output)

Truth Table:
I7|I6|I5|I4|I3|I2|I1|I0| Y2|Y1|Y0| V
--|--|--|--|--|--|--|--|---|--|--|---
 0| 0| 0| 0| 0| 0| 0| 0| X | X| X| 0
 0| 0| 0| 0| 0| 0| 0| 1| 0 | 0| 0| 1
 0| 0| 0| 0| 0| 0| 1| X| 0 | 0| 1| 1
 0| 0| 0| 0| 0| 1| X| X| 0 | 1| 0| 1
 0| 0| 0| 0| 1| X| X| X| 0 | 1| 1| 1
 0| 0| 0| 1| X| X| X| X| 1 | 0| 0| 1
 0| 0| 1| X| X| X| X| X| 1 | 0| 1| 1
 0| 1| X| X| X| X| X| X| 1 | 1| 0| 1
 1| X| X| X| X| X| X| X| 1 | 1| 1| 1

Boolean Expressions:
Y0 = I1 + I3 + I5 + I7
Y1 = I2 + I3 + I6 + I7
Y2 = I4 + I5 + I6 + I7
V = I0 + I1 + I2 + I3 + I4 + I5 + I6 + I7

Applications:
1. Keyboard encoding
2. Interrupt priority handling
3. Position encoding
4. Data compression
5. Address generation

Decimal-to-BCD Encoder:
- 10 inputs (0-9)
- 4 outputs (BCD code)
- Used in calculators and digital displays
```

## 🔢 Topic 3: Code Converters

### 3.1 BCD to Seven-Segment Decoder
```
Application: Driving seven-segment displays for decimal digits

Seven-Segment Display:
    a
   ---
f |   | b
   -g-
e |   | c
   ---
    d

Segments: a, b, c, d, e, f, g

BCD to Seven-Segment Truth Table:
BCD Input    | Segments      | Display
D C B A      | a b c d e f g | Digit
-------------|---------------|-------
0 0 0 0      | 1 1 1 1 1 1 0 |   0
0 0 0 1      | 0 1 1 0 0 0 0 |   1
0 0 1 0      | 1 1 0 1 1 0 1 |   2
0 0 1 1      | 1 1 1 1 0 0 1 |   3
0 1 0 0      | 0 1 1 0 0 1 1 |   4
0 1 0 1      | 1 0 1 1 0 1 1 |   5
0 1 1 0      | 1 0 1 1 1 1 1 |   6
0 1 1 1      | 1 1 1 0 0 0 0 |   7
1 0 0 0      | 1 1 1 1 1 1 1 |   8
1 0 0 1      | 1 1 1 1 0 1 1 |   9
1 0 1 0      | X X X X X X X | Invalid
1 0 1 1      | X X X X X X X | Invalid
1 1 0 0      | X X X X X X X | Invalid
1 1 0 1      | X X X X X X X | Invalid
1 1 1 0      | X X X X X X X | Invalid
1 1 1 1      | X X X X X X X | Invalid

Boolean Expressions (using K-maps):
a = A + C + BD + B'D'
b = B' + CD' + C'D
c = B + C' + D
d = A + B'D' + CD' + BC'D + B'C
e = B'D' + CD'
f = A + C'D' + B'C' + B'D
g = A + BC' + B'C + CD'

Implementation:
- Use K-maps to minimize each output
- Don't care conditions for invalid BCD codes (10-15)
- Can use ROM or PLA for implementation
- Commercial ICs available (7447, 7448)

Common Cathode vs Common Anode:
- Common Cathode: Logic 1 lights segment
- Common Anode: Logic 0 lights segment
- Different decoder ICs for each type
```

### 3.2 Binary to Gray Code Converter
```
Gray Code Properties:
- Only one bit changes between consecutive numbers
- Eliminates glitches in digital systems
- Used in position encoders, A/D converters

4-bit Binary to Gray Conversion:
Binary | Gray
B3B2B1B0 | G3G2G1G0
---------|----------
0000     | 0000
0001     | 0001
0010     | 0011
0011     | 0010
0100     | 0110
0101     | 0111
0110     | 0101
0111     | 0100
1000     | 1100
1001     | 1101
1010     | 1111
1011     | 1110
1100     | 1010
1101     | 1011
1110     | 1001
1111     | 1000

Conversion Algorithm:
G3 = B3 (MSB remains same)
G2 = B3 ⊕ B2
G1 = B2 ⊕ B1
G0 = B1 ⊕ B0

General Formula:
Gi = Bi+1 ⊕ Bi (for i = 0 to n-2)
Gn-1 = Bn-1 (MSB)

Circuit Implementation:
B3 ————————————————————————————————————————————————— G3
     \                                              /
      \————————————— XOR ——————————————————————————/ G2
     /                                             /
B2 —/————————————————————————————————————————————— /
     \                                            /
      \————————————— XOR ————————————————————————/ G1
     /                                          /
B1 —/——————————————————————————————————————————— /
     \                                        /
      \————————————— XOR ——————————————————— / G0
     /                                      /
B0 —/                                      /

Gate Count: 3 XOR gates for 4-bit converter
```

### 3.3 Gray to Binary Code Converter
```
Reverse conversion from Gray to Binary

4-bit Gray to Binary Conversion:
Gray | Binary
G3G2G1G0 | B3B2B1B0
---------|----------
0000     | 0000
0001     | 0001
0011     | 0010
0010     | 0011
0110     | 0100
0111     | 0101
0101     | 0110
0100     | 0111
1100     | 1000
1101     | 1001
1111     | 1010
1110     | 1011
1010     | 1100
1011     | 1101
1001     | 1110
1000     | 1111

Conversion Algorithm:
B3 = G3 (MSB remains same)
B2 = B3 ⊕ G2 = G3 ⊕ G2
B1 = B2 ⊕ G1 = G3 ⊕ G2 ⊕ G1
B0 = B1 ⊕ G0 = G3 ⊕ G2 ⊕ G1 ⊕ G0

General Formula:
Bn-1 = Gn-1 (MSB)
Bi = Bi+1 ⊕ Gi (for i = n-2 down to 0)

Alternative (direct):
Bi = Gn-1 ⊕ Gn-2 ⊕ ... ⊕ Gi

Circuit Implementation:
G3 ————————————————————————————————————————————————— B3
     \                                              /
      \————————————— XOR ——————————————————————————/ B2
     /                |                            /
G2 —/                 |                           /
                      |————————————————————————— /
                      |                         /
                      \————————————— XOR ————— / B1
                     /                        /
G1 ——————————————————/                        /
                                              /
                     ————————————————————————/
                    /                       /
                   \————————————— XOR ————/ B0
                  /                      /
G0 ——————————————/                      /

Gate Count: 3 XOR gates for 4-bit converter
```

### 3.4 Excess-3 Code Converter
```
Excess-3 Code: BCD + 3
Self-complementing code (9's complement = 1's complement)

BCD to Excess-3 Conversion:
BCD  | Excess-3
DCBA | ZYXW
-----|--------
0000 | 0011
0001 | 0100
0010 | 0101
0011 | 0110
0100 | 0111
0101 | 1000
0110 | 1001
0111 | 1010
1000 | 1011
1001 | 1100

Truth Table Analysis:
D C B A | Z Y X W
--------|--------
0 0 0 0 | 0 0 1 1
0 0 0 1 | 0 1 0 0
0 0 1 0 | 0 1 0 1
0 0 1 1 | 0 1 1 0
0 1 0 0 | 0 1 1 1
0 1 0 1 | 1 0 0 0
0 1 1 0 | 1 0 0 1
0 1 1 1 | 1 0 1 0
1 0 0 0 | 1 0 1 1
1 0 0 1 | 1 1 0 0

K-map Simplification:
Z = D + CB + CA
Y = C'B + C'A + CB'A'
X = B'A + BA'
W = A'

Circuit Implementation:
- 4 inputs (D, C, B, A)
- 4 outputs (Z, Y, X, W)
- Logic gates as per simplified expressions

Excess-3 to BCD Conversion:
Reverse process: Subtract 3 from Excess-3 code

Applications:
- Decimal arithmetic in early computers
- Self-checking systems
- Error detection in BCD systems
```

## 💻 Programming Implementation

### Combinational Circuit Simulator
```python
class CombinatorialCircuit:
    def __init__(self):
        self.components = {}
        self.connections = {}
        self.inputs = {}
        self.outputs = {}
    
    def add_component(self, name, component_type, **kwargs):
        """Add a component to the circuit"""
        if component_type == 'FULL_ADDER':
            self.components[name] = FullAdder()
        elif component_type == 'MUX':
            self.components[name] = Multiplexer(kwargs.get('inputs', 2))
        elif component_type == 'DECODER':
            self.components[name] = Decoder(kwargs.get('inputs', 2))
        elif component_type == 'ENCODER':
            self.components[name] = Encoder(kwargs.get('inputs', 4))
        else:
            raise ValueError(f"Unknown component type: {component_type}")
    
    def connect(self, from_comp, from_pin, to_comp, to_pin):
        """Connect components"""
        if from_comp not in self.connections:
            self.connections[from_comp] = {}
        self.connections[from_comp][from_pin] = (to_comp, to_pin)
    
    def set_input(self, input_name, value):
        """Set circuit input"""
        self.inputs[input_name] = bool(value)
    
    def evaluate(self):
        """Evaluate the circuit"""
        # Simplified evaluation - real implementation needs topological sort
        results = {}
        for name, component in self.components.items():
            if hasattr(component, 'evaluate'):
                # Get inputs for this component
                inputs = self.get_component_inputs(name)
                results[name] = component.evaluate(inputs)
        return results
    
    def get_component_inputs(self, comp_name):
        """Get inputs for a component"""
        # Simplified - real implementation would trace connections
        return []

class FullAdder:
    def __init__(self):
        self.name = "Full Adder"
    
    def evaluate(self, inputs):
        """Evaluate full adder: inputs = [A, B, Cin]"""
        if len(inputs) != 3:
            raise ValueError("Full adder requires 3 inputs")
        
        A, B, Cin = inputs
        Sum = A ^ B ^ Cin
        Cout = (A & B) | (Cin & (A ^ B))
        
        return {'Sum': Sum, 'Cout': Cout}
    
    def truth_table(self):
        """Generate truth table"""
        print("Full Adder Truth Table:")
        print("A | B | Cin | Sum | Cout")
        print("--|---|-----|-----|-----")
        
        for A in [0, 1]:
            for B in [0, 1]:
                for Cin in [0, 1]:
                    result = self.evaluate([A, B, Cin])
                    print(f"{A} | {B} |  {Cin}  |  {int(result['Sum'])}  |  {int(result['Cout'])}")

class RippleCarryAdder:
    def __init__(self, width):
        self.width = width
        self.full_adders = [FullAdder() for _ in range(width)]
    
    def add(self, A, B, Cin=0):
        """Add two n-bit numbers"""
        if len(A) != self.width or len(B) != self.width:
            raise ValueError(f"Inputs must be {self.width} bits")
        
        Sum = []
        carry = Cin
        
        for i in range(self.width):
            fa_result = self.full_adders[i].evaluate([A[i], B[i], carry])
            Sum.append(fa_result['Sum'])
            carry = fa_result['Cout']
        
        return Sum, carry
    
    def propagation_delay(self, gate_delay=10):
        """Calculate propagation delay in nanoseconds"""
        return self.width * gate_delay

class Multiplexer:
    def __init__(self, num_inputs):
        self.num_inputs = num_inputs
        self.select_bits = self.calculate_select_bits(num_inputs)
    
    def calculate_select_bits(self, num_inputs):
        """Calculate number of select bits needed"""
        import math
        return math.ceil(math.log2(num_inputs))
    
    def evaluate(self, data_inputs, select_inputs):
        """Evaluate multiplexer"""
        if len(data_inputs) != self.num_inputs:
            raise ValueError(f"Expected {self.num_inputs} data inputs")
        
        if len(select_inputs) != self.select_bits:
            raise ValueError(f"Expected {self.select_bits} select inputs")
        
        # Convert select inputs to decimal
        select_value = 0
        for i, bit in enumerate(select_inputs):
            select_value += bit * (2 ** i)
        
        if select_value < len(data_inputs):
            return data_inputs[select_value]
        else:
            return 0  # Invalid selection
    
    def implement_function(self, truth_table, variables):
        """Implement Boolean function using MUX"""
        # Method for implementing Boolean functions
        # This is a simplified version
        pass

class Decoder:
    def __init__(self, num_inputs):
        self.num_inputs = num_inputs
        self.num_outputs = 2 ** num_inputs
    
    def evaluate(self, inputs, enable=True):
        """Evaluate decoder"""
        if len(inputs) != self.num_inputs:
            raise ValueError(f"Expected {self.num_inputs} inputs")
        
        outputs = [0] * self.num_outputs
        
        if enable:
            # Convert inputs to decimal
            input_value = 0
            for i, bit in enumerate(inputs):
                input_value += bit * (2 ** i)
            
            if input_value < self.num_outputs:
                outputs[input_value] = 1
        
        return outputs

class BCDToSevenSegment:
    def __init__(self):
        # Segment patterns for digits 0-9
        self.patterns = {
            0: [1, 1, 1, 1, 1, 1, 0],  # 0
            1: [0, 1, 1, 0, 0, 0, 0],  # 1
            2: [1, 1, 0, 1, 1, 0, 1],  # 2
            3: [1, 1, 1, 1, 0, 0, 1],  # 3
            4: [0, 1, 1, 0, 0, 1, 1],  # 4
            5: [1, 0, 1, 1, 0, 1, 1],  # 5
            6: [1, 0, 1, 1, 1, 1, 1],  # 6
            7: [1, 1, 1, 0, 0, 0, 0],  # 7
            8: [1, 1, 1, 1, 1, 1, 1],  # 8
            9: [1, 1, 1, 1, 0, 1, 1],  # 9
        }
        self.segment_names = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    
    def decode(self, bcd_input):
        """Convert BCD to seven-segment pattern"""
        if len(bcd_input) != 4:
            raise ValueError("BCD input must be 4 bits")
        
        # Convert BCD to decimal
        decimal = 0
        for i, bit in enumerate(bcd_input):
            decimal += bit * (2 ** i)
        
        if decimal in self.patterns:
            return self.patterns[decimal]
        else:
            return [0, 0, 0, 0, 0, 0, 0]  # Invalid BCD
    
    def display_digit(self, bcd_input):
        """Display the seven-segment pattern"""
        pattern = self.decode(bcd_input)
        
        # Create visual representation
        segments = dict(zip(self.segment_names, pattern))
        
        print(f" {'---' if segments['a'] else '   '} ")
        print(f"|{'   ' if not segments['f'] else ''}|{'   ' if not segments['b'] else ''}|")
        print(f" {'---' if segments['g'] else '   '} ")
        print(f"|{'   ' if not segments['e'] else ''}|{'   ' if not segments['c'] else ''}|")
        print(f" {'---' if segments['d'] else '   '} ")

# Example usage
if __name__ == "__main__":
    # Test Full Adder
    fa = FullAdder()
    fa.truth_table()
    
    # Test 4-bit Ripple Carry Adder
    rca = RippleCarryAdder(4)
    A = [1, 0, 1, 1]  # 13 in binary (LSB first)
    B = [0, 1, 1, 0]  # 6 in binary
    Sum, Cout = rca.add(A, B)
    print(f"\n4-bit Addition: {A} + {B} = {Sum}, Carry = {Cout}")
    print(f"Propagation delay: {rca.propagation_delay()}ns")
    
    # Test Multiplexer
    mux = Multiplexer(4)
    data = [0, 1, 0, 1]
    select = [1, 0]  # Select input 1
    output = mux.evaluate(data, select)
    print(f"\n4-to-1 MUX: Data={data}, Select={select}, Output={output}")
    
    # Test BCD to Seven-Segment
    decoder = BCDToSevenSegment()
    bcd = [1, 0, 0, 1]  # 9 in BCD
    print(f"\nBCD {bcd} displays:")
    decoder.display_digit(bcd)
```

## 🧪 Laboratory Experiments

### Lab 1: Adder Circuits
```
Objective: Design and test binary adder circuits

Equipment:
- Logic gates (AND, OR, XOR)
- 7483 4-bit adder IC
- LED indicators
- Logic switches
- Breadboard

Experiments:
1. Half Adder Implementation:
   - Build using XOR and AND gates
   - Test with all input combinations
   - Verify truth table

2. Full Adder Implementation:
   - Method 1: Using two half adders + OR gate
   - Method 2: Direct gate implementation
   - Compare gate counts and delays

3. 4-bit Ripple Carry Adder:
   - Cascade 4 full adders
   - Test addition of various numbers
   - Measure propagation delay
   - Observe carry propagation

4. BCD Adder:
   - Design correction logic
   - Test BCD addition cases
   - Verify decimal results

Expected Results:
- Half adder: 2 gates, 15ns delay
- Full adder: 6 gates, 25ns delay
- 4-bit RCA: 100ns total delay
- BCD adder: Correct decimal output
```

### Lab 2: Multiplexer Applications
```
Objective: Implement Boolean functions using multiplexers

Equipment:
- 74151 8-to-1 MUX
- 74153 4-to-1 MUX
- Logic switches and LEDs
- Function generator

Experiments:
1. Basic MUX Operation:
   - Test 4-to-1 MUX with all combinations
   - Verify select line operation
   - Measure propagation delay

2. Function Implementation:
   F(A,B,C) = Σm(1,2,6,7)
   - Use 4-to-1 MUX with A,B as select
   - Connect appropriate inputs
   - Verify function table

3. Parallel-to-Serial Conversion:
   - Load 4-bit parallel data
   - Use counter to sequence through MUX
   - Observe serial output

4. Data Routing:
   - Multiple data sources
   - Route to single destination
   - Control with select signals

Applications Tested:
- Boolean function generation
- Data selection and routing
- Waveform generation
- Time-division multiplexing
```

### Lab 3: Decoder and Encoder Circuits
```
Objective: Design address decoders and priority encoders

Equipment:
- 74138 3-to-8 decoder
- 74148 8-to-3 priority encoder
- Seven-segment displays
- BCD switches

Experiments:
1. 3-to-8 Decoder:
   - Test all input combinations
   - Verify one-hot output
   - Test enable functionality

2. Memory Address Decoding:
   - Design 4K memory blocks
   - Use decoder for chip select
   - Verify address ranges

3. Seven-Segment Display:
   - BCD to seven-segment decoder
   - Display digits 0-9
   - Test invalid BCD codes

4. Priority Encoder:
   - Test priority resolution
   - Multiple input activation
   - Verify valid output indication

Design Challenge:
- 16-line to 4-line priority encoder
- Cascaded decoder system
- Keyboard encoder matrix
```

### Lab 4: Code Converters
```
Objective: Implement various code conversion circuits

Equipment:
- Logic gates
- ROM/PROM for lookup tables
- Oscilloscope for timing analysis

Experiments:
1. Binary to Gray Converter:
   - 4-bit implementation
   - Test all combinations
   - Verify single-bit changes

2. Gray to Binary Converter:
   - Reverse conversion
   - Cascaded XOR implementation
   - Timing analysis

3. BCD to Excess-3:
   - Truth table implementation
   - K-map simplification
   - Gate-level circuit

4. Excess-3 to BCD:
   - Reverse conversion
   - Subtraction by 3
   - Verification with BCD display

Performance Analysis:
- Gate count comparison
- Propagation delay measurement
- Power consumption analysis
- Area optimization techniques
```

## 📝 Practice Problems (120+ Problems)

### Arithmetic Circuits (1-30)
1. Design a 3-bit binary adder using full adders
2. Implement BCD addition for two 2-digit numbers
3. Design a 4-bit magnitude comparator
4. Create a circuit to multiply by 3 using adders
5. Design a 2's complement subtractor

### Multiplexer Problems (31-60)
31. Implement F(A,B,C,D) = Σm(0,1,3,8,9,15) using 8-to-1 MUX
32. Design a 16-to-1 MUX using 4-to-1 MUX blocks
33. Create a 4-bit parallel-to-serial converter
34. Implement a 4-variable function using 2-to-1 MUX
35. Design a data selector for 8 input sources

### Decoder/Encoder Problems (61-90)
61. Design a 5-to-32 decoder using smaller decoders
62. Implement a hexadecimal to seven-segment decoder
63. Design a 16-to-4 priority encoder with enable
64. Create a keyboard encoder for 16-key matrix
65. Design address decoder for memory system

### Code Converter Problems (91-120)
91. Design a 5-bit binary to Gray converter
92. Implement Excess-3 to BCD converter
93. Create a BCD to binary converter
94. Design a Johnson counter to BCD decoder
95. Implement a parity generator for 8-bit data

## 🎯 Assessment and Evaluation

### Quiz Questions (35 questions)
1. What is the difference between half adder and full adder?
2. How does carry look-ahead improve adder speed?
3. What is the advantage of Gray code over binary?
4. How can a MUX implement any Boolean function?
5. What is the difference between decoder and demultiplexer?

### Design Assignments
1. Complete ALU design using combinational circuits
2. Memory address decoding system
3. Digital display system with multiple formats
4. Data routing and selection system

### Major Project Options
1. **Calculator Design**: Complete BCD calculator with display
2. **Digital Clock**: Time display with seven-segment decoders
3. **Traffic Controller**: Intersection control using combinational logic
4. **Data Acquisition**: Multi-channel data selector and converter

## 📚 Resources and References

### Textbooks
- "Digital Design" by Morris Mano & Michael Ciletti (Chapters 4-6)
- "Digital Electronics" by Anil K. Maini (Chapters 5-7)
- "Fundamentals of Digital Logic" by Brown & Vranesic

### IC Datasheets
- 7400 Series TTL Logic
- 4000 Series CMOS Logic
- 74HC Series High-Speed CMOS
- Specialized function ICs (adders, MUX, decoders)

### Online Resources
- [Digital Circuit Simulator](https://www.falstad.com/circuit/)
- [Logic Design Tutorials](https://www.allaboutcircuits.com/textbook/digital/)
- [IC Pinout Database](https://www.pinouts.org/)

### Software Tools
- Logisim-Evolution: Circuit design and simulation
- Quartus Prime: FPGA design with combinational logic
- MultiSim: Professional circuit simulation
- KiCad: PCB design for digital circuits

## 🏆 Learning Outcomes
After completing this module, you will:
- Design complex combinational circuits from specifications
- Optimize circuits for speed, area, and power
- Understand arithmetic operations in digital systems
- Apply multiplexers and decoders in system design
- Implement code converters for different applications
- Analyze timing and performance characteristics
- Score 90%+ on combinational circuit problems

**Next Module**: Sequential Logic Circuits →