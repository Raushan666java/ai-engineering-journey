# Module 5: Sequential Logic Circuits Complete Guide
## 🔄 Memory and State-Based Digital Systems

### 🎯 Module Overview
- **Duration**: 3 weeks (45 hours)
- **Difficulty**: Advanced
- **Prerequisites**: Combinational circuits, Boolean algebra
- **Applications**: Memory systems, counters, state machines, control units

## 📋 Learning Objectives
- Understand difference between combinational and sequential circuits
- Design and analyze latches and flip-flops
- Implement registers and shift registers
- Design synchronous and asynchronous counters
- Create finite state machines
- Analyze timing requirements and clock systems

## 🔒 Topic 1: Latches and Flip-Flops

### 1.1 Basic Latch Concepts
```
Sequential Circuit Characteristics:
- Output depends on current inputs AND past history
- Contains memory elements (storage)
- Has feedback paths
- Requires timing considerations

Memory Element: Stores binary information
State: Current stored information
Next State: State after clock transition

Basic Memory Cell using Cross-coupled Inverters:
     ┌─────┐
  Q──┤ NOT ├──Q'──┐
     └─────┘      │
         ↑        │
         │    ┌─────┐
         └────┤ NOT ├──Q
              └─────┘

This creates a bistable circuit with two stable states:
State 1: Q = 1, Q' = 0
State 2: Q = 0, Q' = 1

Problem: No way to change the state externally
Solution: Add control inputs → Latches
```

### 1.2 SR Latch (Set-Reset Latch)
```
NOR-based SR Latch:
Inputs: S (Set), R (Reset)
Outputs: Q, Q'

Circuit:
S ────┐     ┌─── Q
      │  ┌─────┐
      └──┤ NOR ├──┐
         └─────┘  │
             ↑    │
             │    │
         ┌─────┐  │
      ┌──┤ NOR ├──┘
      │  └─────┘
R ────┘     └─── Q'

Truth Table:
S | R | Q(t+1) | Q'(t+1) | Action
--|---|--------|---------|--------
0 | 0 |  Q(t)  |  Q'(t)  | Hold (No change)
0 | 1 |   0    |    1    | Reset
1 | 0 |   1    |    0    | Set
1 | 1 |   0    |    0    | Invalid (Not allowed)

Characteristic Equation: Q(t+1) = S + R'·Q(t)
Constraint: S·R = 0 (S and R cannot be 1 simultaneously)

NAND-based SR Latch:
Uses NAND gates instead of NOR gates
Inputs are active-low (S', R')
Same functionality with inverted inputs

Applications:
- Switch debouncing
- Basic memory element
- Building block for flip-flops
- Control circuits

Timing Considerations:
- Propagation delay through gates
- Race conditions possible
- Asynchronous operation (no clock)
```

### 1.3 Gated SR Latch
```
Problem with Basic SR Latch:
- Changes state immediately when inputs change
- No control over when state changes occur
- Difficult to synchronize with other circuits

Solution: Add Enable (Gate) input

Gated SR Latch Circuit:
S ────┐     ┌─────┐     ┌─── Q
      └─────┤ AND ├─────┤
            └─────┘  ┌─────┐
                ┌────┤ NOR ├──┐
EN ─────────────┤    └─────┘  │
                │        ↑    │
                │        │    │
            ┌─────┐  ┌─────┐  │
      ┌─────┤ AND ├──┤ NOR ├──┘
      │     └─────┘  └─────┘
R ────┘         └─── Q'

Truth Table:
EN | S | R | Q(t+1) | Action
---|---|---|--------|--------
 0 | X | X |  Q(t)  | Hold (Latch disabled)
 1 | 0 | 0 |  Q(t)  | Hold
 1 | 0 | 1 |   0    | Reset
 1 | 1 | 0 |   1    | Set
 1 | 1 | 1 |   ?    | Invalid

Operation:
- When EN = 0: Latch holds current state
- When EN = 1: Latch responds to S and R inputs
- Still asynchronous when enabled

Characteristic Equation: Q(t+1) = S·EN + R'·EN·Q(t) + EN'·Q(t)
Simplified: Q(t+1) = EN·S + EN'·Q(t) + EN·R'·Q(t)
```

### 1.4 D Latch (Data Latch)
```
Problem with SR Latch:
- Invalid state when S = R = 1
- Need to ensure S·R = 0 constraint

Solution: Use single data input D

D Latch Circuit:
D ────┐     ┌─────┐     ┌─── Q
      └─────┤ AND ├─────┤
            └─────┘  ┌─────┐
                ┌────┤ NOR ├──┐
EN ─────────────┤    └─────┘  │
                │        ↑    │
      ┌─────┐   │        │    │
D ────┤ NOT ├───┤    ┌─────┐  │
      └─────┘   │ ┌──┤ NOR ├──┘
            ┌─────┐│  └─────┘
            ┤ AND ├┘      └─── Q'
            └─────┘

Internal connections: S = D·EN, R = D'·EN

Truth Table:
EN | D | Q(t+1) | Action
---|---|--------|--------
 0 | X |  Q(t)  | Hold
 1 | 0 |   0    | Store 0
 1 | 1 |   1    | Store 1

Characteristic Equation: Q(t+1) = EN·D + EN'·Q(t)

Advantages:
- No invalid states
- Single data input
- Transparent when enabled
- Easy to use

Applications:
- Data storage
- Bus interfacing
- Address latching
- Temporary storage

Timing Behavior:
- Transparent latch: Output follows input when enabled
- Setup time: D must be stable before EN goes low
- Hold time: D must remain stable after EN goes low
```

### 1.5 Edge-Triggered Flip-Flops
```
Problem with Latches:
- Transparent when enabled
- Output can change multiple times during enable period
- Difficult to create synchronous systems

Solution: Edge-triggered flip-flops
- Change state only at clock edge
- Positive edge: 0→1 transition
- Negative edge: 1→0 transition

D Flip-Flop (Master-Slave):
Two D latches in series with inverted clocks

Master-Slave D Flip-Flop:
D ──→ [D Latch] ──→ [D Latch] ──→ Q
      Master        Slave
        ↑             ↑
      CLK           CLK'

Operation:
1. When CLK = 0: Master enabled, Slave disabled
   - Master follows D input
   - Slave holds previous value
2. When CLK = 1: Master disabled, Slave enabled
   - Master holds current D value
   - Slave copies Master output to Q

Result: Q changes only at positive clock edge

Truth Table:
CLK | D | Q(t+1) | Action
----|---|--------|--------
 ↑  | 0 |   0    | Store 0
 ↑  | 1 |   1    | Store 1
 0  | X |  Q(t)  | Hold
 1  | X |  Q(t)  | Hold

Characteristic Equation: Q(t+1) = D

Timing Parameters:
- Setup Time (tsu): D must be stable before clock edge
- Hold Time (th): D must remain stable after clock edge
- Clock-to-Q delay (tco): Time from clock edge to Q change
- Maximum frequency: fmax = 1/(tco + tsu + logic delay)
```

### 1.6 JK Flip-Flop
```
JK Flip-Flop: Universal flip-flop
Inputs: J (like Set), K (like Reset), CLK
Outputs: Q, Q'

Truth Table:
CLK | J | K | Q(t+1) | Action
----|---|---|--------|--------
 ↑  | 0 | 0 |  Q(t)  | Hold
 ↑  | 0 | 1 |   0    | Reset
 ↑  | 1 | 0 |   1    | Set
 ↑  | 1 | 1 |  Q'(t) | Toggle

Characteristic Equation: Q(t+1) = J·Q'(t) + K'·Q(t)

JK Flip-Flop Implementation:
Can be built using SR flip-flop with feedback

J ────┐     ┌─────┐     ┌─── Q
      └─────┤ AND ├─S───┤
            └─────┘  ┌─────┐
                ┌────┤ SR  ├──┐
CLK ────────────┤    │ FF  │  │
                │ R──└─────┘  │
            ┌─────┐       └───┼─── Q'
      ┌─────┤ AND ├───────────┘
      │     └─────┘
K ────┘

Internal connections: S = J·Q'·CLK, R = K·Q·CLK

Advantages:
- No invalid states
- Toggle capability
- Universal (can implement any flip-flop)
- Versatile for counters

Applications:
- Binary counters
- Frequency dividers
- State machines
- Control circuits

Race Condition in JK:
- When J = K = 1, output toggles
- If clock pulse too wide, multiple toggles possible
- Solution: Master-slave or edge-triggered design
```

### 1.7 T Flip-Flop
```
T Flip-Flop (Toggle Flip-Flop):
Single input T (Toggle)
Toggles output when T = 1

Truth Table:
CLK | T | Q(t+1) | Action
----|---|--------|--------
 ↑  | 0 |  Q(t)  | Hold
 ↑  | 1 |  Q'(t) | Toggle

Characteristic Equation: Q(t+1) = T·Q'(t) + T'·Q(t) = T ⊕ Q(t)

Implementation Methods:

Method 1: Using JK Flip-Flop
T ────┬─── J
      │
      └─── K
CLK ────── CLK

Method 2: Using D Flip-Flop
T ────┐     ┌─────┐
      └─────┤ XOR ├─── D
      ┌─────┴─────┘
Q ────┘
CLK ────── CLK

Applications:
- Binary counters (divide by 2)
- Frequency division
- Clock generation
- Ripple counters

Timing Analysis:
- Maximum toggle frequency = fmax/2
- Propagation delay affects counting speed
- Setup and hold times critical for reliable operation
```

## 📊 Topic 2: Registers and Shift Registers

### 2.1 Parallel Registers
```
Register: Group of flip-flops storing multi-bit data
n-bit register: n flip-flops with common clock

4-bit Parallel Register:
D3 ──→ [D FF] ──→ Q3
D2 ──→ [D FF] ──→ Q2
D1 ──→ [D FF] ──→ Q1
D0 ──→ [D FF] ──→ Q0
        ↑
      CLK (common)

Features:
- All bits loaded simultaneously
- Parallel input, parallel output
- Fast data transfer
- Requires n input lines for n bits

Register with Enable:
Additional control input to enable/disable loading

EN ────┐
       │  ┌─────┐
D3 ────┼──┤ AND ├──→ [D FF] ──→ Q3
       │  └─────┘
CLK ───┘

When EN = 0: Register holds current data
When EN = 1: Register loads new data on clock edge

Register with Clear:
Asynchronous reset capability

CLR ──→ [D FF] ──→ Q (with clear input)

When CLR = 0: Q = 0 (immediate, asynchronous)
When CLR = 1: Normal operation

Applications:
- CPU registers
- Data buffers
- Address storage
- Temporary storage
```

### 2.2 Shift Registers
```
Shift Register: Data shifts one position per clock cycle
Types: Left shift, Right shift, Bidirectional

4-bit Right Shift Register:
Serial In ──→ [D FF] ──→ [D FF] ──→ [D FF] ──→ [D FF] ──→ Serial Out
                Q0        Q1        Q2        Q3
                 ↑         ↑         ↑         ↑
               CLK       CLK       CLK       CLK

Operation:
Clock 1: SI → Q0, Q0 → Q1, Q1 → Q2, Q2 → Q3, Q3 → SO
Clock 2: SI → Q0, Q0 → Q1, Q1 → Q2, Q2 → Q3, Q3 → SO
...and so on

Shift Register Types:

1. Serial-In Serial-Out (SISO):
   - One bit in, one bit out
   - Data delay line
   - Slowest but simplest

2. Serial-In Parallel-Out (SIPO):
   - One bit in, all bits out
   - Serial-to-parallel conversion
   - Used in communication systems

3. Parallel-In Serial-Out (PISO):
   - All bits in, one bit out
   - Parallel-to-serial conversion
   - Data transmission

4. Parallel-In Parallel-Out (PIPO):
   - All bits in, all bits out
   - Can also shift
   - Most versatile

Universal Shift Register:
Combines all shift operations with mode control

Mode Control:
00: Hold (no change)
01: Shift right
10: Shift left
11: Parallel load

Applications:
- Serial communication
- Data conversion
- Delay lines
- Sequence generation
- Multiplication/division by 2
```

### 2.3 Ring Counter
```
Ring Counter: Shift register with output fed back to input
Only one bit is 1, others are 0
The 1 circulates around the register

4-bit Ring Counter:
[D FF] ──→ [D FF] ──→ [D FF] ──→ [D FF]
  Q0        Q1        Q2        Q3
   ↑         ↑         ↑         ↑
 CLK       CLK       CLK       CLK
   ↑                             │
   └─────────────────────────────┘

State Sequence:
Clock | Q3 Q2 Q1 Q0 | Decimal
------|-------------|--------
  0   |  0  0  0  1 |    1
  1   |  0  0  1  0 |    2
  2   |  0  1  0  0 |    4
  3   |  1  0  0  0 |    8
  4   |  0  0  0  1 |    1 (repeat)

Characteristics:
- n flip-flops → n states
- Self-decoding (each output represents one state)
- Requires initialization (preset one FF to 1)
- Not self-correcting (if error occurs, wrong sequence)

Initialization Circuit:
Use preset/clear inputs to set initial state
Typically: Q0 = 1, Q1 = Q2 = Q3 = 0

Applications:
- State counters
- Timing sequence generation
- Control unit design
- Stepper motor control
```

### 2.4 Johnson Counter (Twisted Ring Counter)
```
Johnson Counter: Ring counter with inverted feedback
Also called Twisted Ring Counter or Möbius Counter

4-bit Johnson Counter:
[D FF] ──→ [D FF] ──→ [D FF] ──→ [D FF]
  Q0        Q1        Q2        Q3
   ↑         ↑         ↑         ↑
 CLK       CLK       CLK       CLK
   ↑                             │
   └─────────────[NOT]───────────┘

State Sequence:
Clock | Q3 Q2 Q1 Q0 | Decimal
------|-------------|--------
  0   |  0  0  0  0 |    0
  1   |  0  0  0  1 |    1
  2   |  0  0  1  1 |    3
  3   |  0  1  1  1 |    7
  4   |  1  1  1  1 |   15
  5   |  1  1  1  0 |   14
  6   |  1  1  0  0 |   12
  7   |  1  0  0  0 |    8
  8   |  0  0  0  0 |    0 (repeat)

Characteristics:
- n flip-flops → 2n states
- More states than ring counter
- Self-correcting (invalid states lead back to valid sequence)
- Requires no initialization

Decoding Johnson Counter:
Each state can be decoded using 2-input AND gates
State 0: Q3'·Q0'
State 1: Q0·Q3'
State 2: Q0·Q1
...and so on

Advantages over Ring Counter:
- More states with same number of flip-flops
- Self-correcting
- Easier decoding
- No initialization required

Applications:
- Decade counters
- Frequency dividers
- Sequence generators
- Control circuits
```

## 🔢 Topic 3: Counters

### 3.1 Asynchronous (Ripple) Counters
```
Asynchronous Counter: Clock input only to first flip-flop
Other flip-flops triggered by previous stage output
Also called Ripple Counter (clock "ripples" through stages)

4-bit Binary Ripple Counter:
CLK ──→ [T FF] ──→ [T FF] ──→ [T FF] ──→ [T FF]
         Q0        Q1        Q2        Q3
         │         │         │         │
         └─────────┘         │         │
                   └─────────┘         │
                             └─────────┘

All T inputs tied to 1 (always toggle when clocked)

Count Sequence:
CLK | Q3 Q2 Q1 Q0 | Count
----|-------------|------
 0  |  0  0  0  0 |   0
 1  |  0  0  0  1 |   1
 2  |  0  0  1  0 |   2
 3  |  0  0  1  1 |   3
 4  |  0  1  0  0 |   4
... |  ...  ...   |  ...
15  |  1  1  1  1 |  15
16  |  0  0  0  0 |   0 (overflow)

Timing Analysis:
- Each FF has propagation delay tpd
- Total delay = n × tpd (for n-bit counter)
- Maximum frequency limited by total delay
- Glitches occur during count transitions

Propagation Delay Example:
4-bit counter: 4 × 10ns = 40ns total delay
Maximum frequency = 1/(40ns) = 25 MHz

Advantages:
- Simple design
- Low power (only one FF clocked externally)
- Easy to cascade for larger counts

Disadvantages:
- Slow (limited by propagation delay)
- Glitches during transitions
- Not suitable for high-speed applications

Applications:
- Frequency division
- Time delay generation
- Low-speed counting
- Clock generation
```

### 3.2 Synchronous Counters
```
Synchronous Counter: All flip-flops clocked simultaneously
Faster operation, no ripple delay
More complex logic for next state generation

4-bit Synchronous Binary Counter:
CLK ──→ [T FF] ──→ Q0
        [T FF] ──→ Q1
        [T FF] ──→ Q2
        [T FF] ──→ Q3

Toggle Logic:
T0 = 1 (always toggle)
T1 = Q0
T2 = Q0 · Q1
T3 = Q0 · Q1 · Q2

Implementation:
Q0 ──→ T1
Q0 ──┐
     └──→ [AND] ──→ T2
Q1 ──┘
Q0 ──┐
Q1 ──┼──→ [AND] ──→ T3
Q2 ──┘

Design Process:
1. Determine next state for each current state
2. Find flip-flop input equations
3. Implement logic circuits
4. Connect to common clock

State Table for 4-bit Counter:
Present State | Next State | FF Inputs
Q3 Q2 Q1 Q0  | Q3 Q2 Q1 Q0| T3 T2 T1 T0
-------------|------------|------------
0  0  0  0   | 0  0  0  1 | 0  0  0  1
0  0  0  1   | 0  0  1  0 | 0  0  1  1
0  0  1  0   | 0  0  1  1 | 0  0  0  1
0  0  1  1   | 0  1  0  0 | 0  1  1  1
...          | ...        | ...

Advantages:
- Fast operation (single clock delay)
- No glitches
- Suitable for high-speed applications
- Easy to control (enable/disable)

Disadvantages:
- More complex logic
- Higher power consumption
- More gates required

Applications:
- High-speed counting
- Address generation
- Timing circuits
- Digital clocks
```

### 3.3 Up/Down Counters
```
Up/Down Counter: Can count in both directions
Control input determines count direction

4-bit Up/Down Counter:
UP/DOWN control input
UP = 1: Count up (0,1,2,3,...)
UP = 0: Count down (...,3,2,1,0)

Logic Design:
For Up counting: Ti = Q0 · Q1 · ... · Qi-1
For Down counting: Ti = Q0' · Q1' · ... · Qi-1'

Combined Logic:
T0 = 1
T1 = Q0·UP + Q0'·UP'
T2 = Q0·Q1·UP + Q0'·Q1'·UP'
T3 = Q0·Q1·Q2·UP + Q0'·Q1'·Q2'·UP'

Implementation using Multiplexers:
Each Ti input driven by 2-to-1 MUX
UP signal selects between up and down logic

State Sequence (4-bit):
Up Count:   0→1→2→3→4→5→6→7→8→9→10→11→12→13→14→15→0
Down Count: 15→14→13→12→11→10→9→8→7→6→5→4→3→2→1→0→15

Applications:
- Position control
- Bidirectional counting
- Stack pointers
- Address counters
```

### 3.4 Modulo-N Counters
```
Modulo-N Counter: Counts from 0 to N-1, then resets
Also called Divide-by-N counter

Design Methods:

Method 1: Reset Method
- Use binary counter
- Detect count N
- Reset counter to 0

Decade Counter (Mod-10):
Count sequence: 0,1,2,3,4,5,6,7,8,9,0,1,2,...

Detection Logic:
Count 10 = 1010₂ (Q3=1, Q1=1)
Reset when Q3·Q1 = 1

Circuit:
4-bit counter with reset logic
Q3 ──┐
     └──→ [AND] ──→ RESET
Q1 ──┘

Method 2: Preset Method
- Preset counter to (2ⁿ - N)
- Count up to overflow
- Automatically resets to preset value

Method 3: State Machine Design
- Design custom state sequence
- Use state assignment
- Implement with flip-flops

BCD Counter (8421 Code):
Counts: 0000, 0001, 0010, ..., 1001, 0000
Skips: 1010, 1011, 1100, 1101, 1110, 1111

State Table:
Present | Next  | J3 K3 | J2 K2 | J1 K1 | J0 K0
Q3Q2Q1Q0|Q3Q2Q1Q0|      |      |      |
--------|-------|-------|-------|-------|-------
0000    |0001   | 0  X  | 0  X  | 0  X  | 1  X
0001    |0010   | 0  X  | 0  X  | 1  X  | X  1
...     |...    | ...   | ...   | ...   | ...
1001    |0000   | X  1  | X  1  | X  1  | X  1

K-map Simplification:
J0 = 1, K0 = 1
J1 = Q3'·Q0, K1 = Q0
J2 = Q1·Q0, K2 = Q1·Q0
J3 = Q2·Q1·Q0, K3 = Q0

Applications:
- Decimal counting
- Frequency division
- Time base generation
- Digital clocks
```

## 🔄 Topic 4: State Machines

### 4.1 Finite State Machine Concepts
```
Finite State Machine (FSM): Sequential circuit with finite states
Components:
- States: Distinct conditions of the system
- Inputs: External signals causing transitions
- Outputs: Signals produced by the system
- Transitions: Changes from one state to another

Types of FSMs:

1. Moore Machine:
   - Outputs depend only on current state
   - Output changes only at clock edges
   - More stable, less prone to glitches

2. Mealy Machine:
   - Outputs depend on current state AND inputs
   - Output can change when inputs change
   - Faster response, but may have glitches

State Diagram Elements:
- Circles: States (labeled with state name)
- Arrows: Transitions (labeled with input/output)
- Double circle: Initial state

Example: 2-bit Binary Counter
States: S0(00), S1(01), S2(10), S3(11)
Transitions: Each state goes to next on clock

State Diagram:
    ┌─────┐  1  ┌─────┐
    │ S0  ├────→│ S1  │
    │ 00  │     │ 01  │
    └──┬──┘     └──┬──┘
       ↑           │ 1
     1 │           ↓
    ┌──┴──┐  1  ┌─────┐
    │ S3  │←────┤ S2  │
    │ 11  │     │ 10  │
    └─────┘     └─────┘
```

### 4.2 State Machine Design Process
```
Design Steps:
1. Problem specification
2. State diagram construction
3. State table creation
4. State assignment
5. Flip-flop input equations
6. Output equations
7. Circuit implementation

Example: Sequence Detector (101)
Detect sequence "101" in serial input stream
Output 1 when sequence detected, 0 otherwise

Step 1: State Identification
S0: Initial state (no progress)
S1: Received "1"
S2: Received "10"
S3: Received "101" (output 1)

Step 2: State Diagram
Input: X (serial data)
Output: Z (1 when sequence detected)

       X=0        X=1
    ┌─────┐    ┌─────┐
    │ S0  │    │ S1  │
    │Z=0  │    │Z=0  │
    └─────┘    └─────┘
       ↑          │
    X=0│          │X=1
       │          ↓
    ┌─────┐    ┌─────┐
    │ S2  │    │ S3  │
    │Z=0  │    │Z=1  │
    └─────┘    └─────┘
       ↑          │
    X=0│          │X=0,X=1
       └──────────┘

Step 3: State Table
Present | Input | Next  | Output
State   |   X   | State |   Z
--------|-------|-------|-------
  S0    |   0   |  S0   |   0
  S0    |   1   |  S1   |   0
  S1    |   0   |  S2   |   0
  S1    |   1   |  S1   |   0
  S2    |   0   |  S0   |   0
  S2    |   1   |  S3   |   0
  S3    |   0   |  S2   |   1
  S3    |   1   |  S1   |   1

Step 4: State Assignment
S0 = 00, S1 = 01, S2 = 10, S3 = 11

Step 5: Flip-Flop Input Equations (using D flip-flops)
Present | Input | Next  | D1 | D0
Q1 Q0   |   X   |Q1+Q0+ |    |
--------|-------|-------|----|----- 
00      |   0   |  00   | 0  | 0
00      |   1   |  01   | 0  | 1
01      |   0   |  10   | 1  | 0
01      |   1   |  01   | 0  | 1
10      |   0   |  00   | 0  | 0
10      |   1   |  11   | 1  | 1
11      |   0   |  10   | 1  | 0
11      |   1   |  01   | 0  | 1

K-map for D1:
     X
   0   1
Q1Q0
00  0   0
01  1   0
11  1   0
10  0   1

D1 = Q1'Q0X' + Q1Q0'X

K-map for D0:
     X
   0   1
Q1Q0
00  0   1
01  0   1
11  0   1
10  0   1

D0 = X

Step 6: Output Equation
Z = Q1Q0 (output 1 only in state S3)

Step 7: Circuit Implementation
- 2 D flip-flops for state storage
- Logic gates for D1, D0, and Z
- Clock input for synchronization
```

### 4.3 State Reduction and Assignment
```
State Reduction:
Minimize number of states without changing functionality
Two states are equivalent if:
- Same outputs for all input combinations
- Same next states for all input combinations

State Reduction Example:
Original states: S0, S1, S2, S3, S4
After analysis: S1 and S3 are equivalent
Reduced states: S0, S1, S2, S4 (S3 eliminated)

State Assignment:
Assign binary codes to states
n states require ⌈log₂(n)⌉ flip-flops

Assignment Guidelines:
1. Adjacent states in state diagram should have adjacent codes
2. States with same next state should have adjacent codes
3. States with same output should have adjacent codes

Common Assignment Methods:
1. Binary Assignment: 00, 01, 10, 11
2. Gray Code Assignment: 00, 01, 11, 10
3. One-Hot Assignment: 0001, 0010, 0100, 1000

One-Hot Encoding:
- Each state uses one flip-flop
- Only one flip-flop is 1 at any time
- Advantages: Simple decoding, fast
- Disadvantages: More flip-flops needed

Comparison:
4 states:
- Binary: 2 flip-flops, complex logic
- One-hot: 4 flip-flops, simple logic
- Trade-off: Flip-flops vs. logic complexity
```

### 4.4 Timing Analysis
```
Critical Timing Parameters:

1. Setup Time (tsu):
   - Input must be stable before clock edge
   - Violation causes metastability

2. Hold Time (th):
   - Input must remain stable after clock edge
   - Violation causes incorrect data capture

3. Clock-to-Output Delay (tco):
   - Time from clock edge to output change
   - Determines maximum operating frequency

4. Propagation Delay (tpd):
   - Delay through combinational logic
   - Affects maximum clock frequency

Maximum Clock Frequency:
fmax = 1/(tco + tpd + tsu)

Where:
- tco: Clock-to-output delay of source FF
- tpd: Propagation delay of combinational logic
- tsu: Setup time of destination FF

Timing Violations:

Setup Violation:
- Input changes too close to clock edge
- May cause metastability
- Solution: Slower clock or faster logic

Hold Violation:
- Input changes too soon after clock edge
- Causes incorrect data capture
- Solution: Add delay to data path

Clock Skew:
- Difference in clock arrival times
- Can cause timing violations
- Minimize with proper clock distribution

Metastability:
- Occurs when setup/hold violated
- Output may oscillate or settle to wrong value
- Probability decreases exponentially with time
- Use synchronizers for asynchronous inputs
```

## 💻 Programming Implementation

### Sequential Circuit Simulator
```python
class FlipFlop:
    def __init__(self, ff_type='D'):
        self.ff_type = ff_type
        self.Q = 0
        self.Q_bar = 1
        self.clock_edge = 'positive'  # or 'negative'
        self.last_clock = 0
    
    def update(self, inputs, clock):
        """Update flip-flop based on inputs and clock"""
        # Detect clock edge
        if self.clock_edge == 'positive':
            edge_detected = (self.last_clock == 0 and clock == 1)
        else:
            edge_detected = (self.last_clock == 1 and clock == 0)
        
        self.last_clock = clock
        
        if edge_detected:
            if self.ff_type == 'D':
                self.Q = inputs.get('D', 0)
            elif self.ff_type == 'JK':
                J = inputs.get('J', 0)
                K = inputs.get('K', 0)
                if J == 0 and K == 0:
                    pass  # Hold
                elif J == 0 and K == 1:
                    self.Q = 0  # Reset
                elif J == 1 and K == 0:
                    self.Q = 1  # Set
                elif J == 1 and K == 1:
                    self.Q = 1 - self.Q  # Toggle
            elif self.ff_type == 'T':
                T = inputs.get('T', 0)
                if T == 1:
                    self.Q = 1 - self.Q  # Toggle
        
        self.Q_bar = 1 - self.Q
        return {'Q': self.Q, 'Q_bar': self.Q_bar}

class Counter:
    def __init__(self, width, counter_type='binary'):
        self.width = width
        self.counter_type = counter_type
        self.flip_flops = [FlipFlop('T') for _ in range(width)]
        self.count = 0
        self.max_count = 2**width - 1
        
        if counter_type == 'decade':
            self.max_count = 9
    
    def clock_pulse(self):
        """Apply one clock pulse to counter"""
        if self.counter_type == 'ripple':
            # Ripple counter - clock propagates through stages
            self.flip_flops[0].update({'T': 1}, 1)
            self.flip_flops[0].update({'T': 1}, 0)
            
            for i in range(1, self.width):
                if self.flip_flops[i-1].Q == 1 and self.flip_flops[i-1].last_clock == 0:
                    self.flip_flops[i].update({'T': 1}, 1)
                    self.flip_flops[i].update({'T': 1}, 0)
        
        elif self.counter_type == 'synchronous':
            # Synchronous counter - all FFs clocked together
            # Calculate T inputs
            t_inputs = [1]  # T0 always 1
            for i in range(1, self.width):
                t_input = 1
                for j in range(i):
                    t_input = t_input and self.flip_flops[j].Q
                t_inputs.append(t_input)
            
            # Update all flip-flops
            for i in range(self.width):
                self.flip_flops[i].update({'T': t_inputs[i]}, 1)
                self.flip_flops[i].update({'T': t_inputs[i]}, 0)
        
        # Update count value
        self.count = 0
        for i in range(self.width):
            self.count += self.flip_flops[i].Q * (2**i)
        
        # Handle modulo counting
        if self.counter_type == 'decade' and self.count > 9:
            self.reset()
    
    def reset(self):
        """Reset counter to 0"""
        for ff in self.flip_flops:
            ff.Q = 0
            ff.Q_bar = 1
        self.count = 0
    
    def get_state(self):
        """Get current counter state"""
        return {
            'count': self.count,
            'binary': ''.join(str(ff.Q) for ff in reversed(self.flip_flops))
        }

class StateMachine:
    def __init__(self):
        self.states = {}
        self.current_state = None
        self.transitions = {}
        self.outputs = {}
    
    def add_state(self, state_name, output_value=0):
        """Add a state to the machine"""
        self.states[state_name] = {
            'output': output_value,
            'transitions': {}
        }
        
        if self.current_state is None:
            self.current_state = state_name
    
    def add_transition(self, from_state, to_state, input_condition):
        """Add transition between states"""
        if from_state in self.states:
            self.states[from_state]['transitions'][input_condition] = to_state
    
    def step(self, input_value):
        """Execute one step of state machine"""
        if self.current_state in self.states:
            transitions = self.states[self.current_state]['transitions']
            
            if input_value in transitions:
                self.current_state = transitions[input_value]
            
            return {
                'state': self.current_state,
                'output': self.states[self.current_state]['output']
            }
        
        return None
    
    def simulate_sequence(self, input_sequence):
        """Simulate state machine with input sequence"""
        results = []
        
        for input_val in input_sequence:
            result = self.step(input_val)
            results.append({
                'input': input_val,
                'state': result['state'],
                'output': result['output']
            })
        
        return results

class SequenceDetector:
    def __init__(self, target_sequence):
        self.target = target_sequence
        self.state_machine = StateMachine()
        self.build_state_machine()
    
    def build_state_machine(self):
        """Build state machine for sequence detection"""
        # Create states
        for i in range(len(self.target) + 1):
            output = 1 if i == len(self.target) else 0
            self.state_machine.add_state(f'S{i}', output)
        
        # Add transitions
        for i in range(len(self.target)):
            current_state = f'S{i}'
            
            # Correct input - advance to next state
            expected_input = int(self.target[i])
            next_state = f'S{i+1}'
            self.state_machine.add_transition(current_state, next_state, expected_input)
            
            # Incorrect input - go back to appropriate state
            wrong_input = 1 - expected_input
            # Find longest prefix that matches suffix
            back_state = 'S0'
            for j in range(i):
                if self.target[:j+1] == self.target[i-j:i+1]:
                    back_state = f'S{j+1}'
            
            self.state_machine.add_transition(current_state, back_state, wrong_input)
        
        # Final state transitions
        final_state = f'S{len(self.target)}'
        self.state_machine.add_transition(final_state, 'S1', 1)
        self.state_machine.add_transition(final_state, 'S0', 0)
    
    def detect(self, input_sequence):
        """Detect target sequence in input"""
        return self.state_machine.simulate_sequence(input_sequence)

# Example usage
if __name__ == "__main__":
    # Test 4-bit synchronous counter
    counter = Counter(4, 'synchronous')
    
    print("4-bit Synchronous Counter:")
    print("Clock | Count | Binary")
    print("------|-------|-------")
    
    for i in range(17):  # Show overflow
        state = counter.get_state()
        print(f"  {i:2d}  |   {state['count']:2d}  | {state['binary']}")
        counter.clock_pulse()
    
    print("\nSequence Detector (101):")
    detector = SequenceDetector("101")
    input_seq = [1, 0, 1, 1, 0, 1, 0, 1]
    
    results = detector.detect(input_seq)
    
    print("Input | State | Output")
    print("------|-------|-------")
    for result in results:
        print(f"  {result['input']}   |  {result['state']}   |   {result['output']}")
    
    # Test T flip-flop
    print("\nT Flip-Flop Test:")
    t_ff = FlipFlop('T')
    
    print("Clock | T | Q")
    print("------|---|---")
    
    test_inputs = [1, 1, 0, 1, 1, 0, 1]
    for i, t_input in enumerate(test_inputs):
        result = t_ff.update({'T': t_input}, 1)
        t_ff.update({'T': t_input}, 0)  # Complete clock cycle
        print(f"  {i+1}   | {t_input} | {result['Q']}")
```

## 🧪 Laboratory Experiments

### Lab 1: Flip-Flop Characteristics
```
Objective: Study different types of flip-flops and their timing

Equipment:
- 7474 D flip-flop
- 7476 JK flip-flop  
- Function generator
- Oscilloscope
- Logic analyzer
- Breadboard and wires

Experiments:

1. D Flip-Flop Testing:
   - Build basic D flip-flop circuit
   - Test with various D inputs and clock
   - Measure setup and hold times
   - Observe metastability

2. JK Flip-Flop Operation:
   - Test all input combinations
   - Verify toggle operation (J=K=1)
   - Measure propagation delays
   - Study race conditions

3. Timing Analysis:
   - Setup time measurement
   - Hold time measurement
   - Clock-to-Q propagation delay
   - Maximum operating frequency

4. Asynchronous Inputs:
   - Test preset and clear functions
   - Verify asynchronous operation
   - Study priority of async inputs

Expected Results:
- D FF: tsu = 20ns, th = 5ns, tpd = 25ns
- JK FF: tsu = 0ns, th = 0ns, tpd = 16ns
- Async inputs override sync operation
```

### Lab 2: Counter Design and Analysis
```
Objective: Design and test various counter circuits

Equipment:
- 7493 4-bit binary counter
- 7490 decade counter
- Individual flip-flops (7474, 7476)
- Logic gates
- Frequency counter
- Oscilloscope

Experiments:

1. Ripple Counter:
   - Build 4-bit ripple counter using T flip-flops
   - Measure propagation delay
   - Observe glitches during transitions
   - Test maximum counting frequency

2. Synchronous Counter:
   - Design 4-bit synchronous counter
   - Implement using JK flip-flops
   - Compare speed with ripple counter
   - Verify glitch-free operation

3. Decade Counter:
   - Build BCD counter (0-9)
   - Implement reset logic for mod-10
   - Test with seven-segment display
   - Verify proper BCD output

4. Up/Down Counter:
   - Design bidirectional counter
   - Implement direction control
   - Test both counting modes
   - Verify proper transitions

Performance Comparison:
Counter Type | Max Freq | Glitches | Complexity
-------------|----------|----------|----------
Ripple       | 25 MHz   | Yes      | Low
Synchronous  | 100 MHz  | No       | High
Decade       | 50 MHz   | No       | Medium
```

### Lab 3: Shift Register Applications
```
Objective: Implement various shift register configurations

Equipment:
- 7495 4-bit shift register
- 74164 SIPO shift register
- 74165 PISO shift register
- LEDs and switches
- Clock generator

Experiments:

1. Serial-to-Parallel Conversion:
   - Use SIPO shift register
   - Input serial data stream
   - Observe parallel output
   - Verify timing relationships

2. Parallel-to-Serial Conversion:
   - Use PISO shift register
   - Load parallel data
   - Clock out serial data
   - Measure conversion time

3. Ring Counter:
   - Build 4-bit ring counter
   - Initialize with single 1
   - Observe circulation pattern
   - Test state decoding

4. Johnson Counter:
   - Build 4-bit Johnson counter
   - Observe 8-state sequence
   - Implement state decoding
   - Verify self-correction

Applications Tested:
- Data transmission
- Sequence generation
- Timing control
- State counting
```

### Lab 4: State Machine Implementation
```
Objective: Design and implement finite state machines

Equipment:
- D flip-flops (7474)
- Logic gates
- Switches for inputs
- LEDs for outputs
- Clock generator

Experiments:

1. Sequence Detector:
   - Design FSM to detect "1011"
   - Implement using D flip-flops
   - Test with various input sequences
   - Verify correct detection

2. Traffic Light Controller:
   - Design 4-state controller
   - Implement timing logic
   - Test state transitions
   - Verify output patterns

3. Vending Machine Controller:
   - Design coin-operated machine
   - Implement state logic
   - Test with coin inputs
   - Verify change calculation

4. Moore vs Mealy Comparison:
   - Implement same function both ways
   - Compare timing behavior
   - Analyze output glitches
   - Measure response times

State Machine Design Process:
1. Problem specification
2. State diagram creation
3. State table development
4. State assignment
5. Logic minimization
6. Circuit implementation
7. Testing and verification
```

## 📝 Practice Problems (110+ Problems)

### Flip-Flop Analysis (1-25)
1. Draw timing diagram for D flip-flop with given D and CLK inputs
2. Design JK flip-flop using SR flip-flop
3. Convert T flip-flop to D flip-flop
4. Analyze setup and hold time violations
5. Calculate maximum operating frequency for flip-flop chain

### Register Problems (26-45)
26. Design 8-bit register with parallel load and clear
27. Implement bidirectional shift register
28. Design universal shift register with mode control
29. Create ring counter with initialization circuit
30. Implement Johnson counter with decoding logic

### Counter Design (46-75)
46. Design mod-12 counter using flip-flops
47. Implement BCD up/down counter
48. Create ripple counter with enable input
49. Design synchronous counter with parallel load
50. Implement frequency divider circuit

### State Machine Problems (76-110)
76. Design FSM for sequence detector "10110"
77. Create traffic light controller with pedestrian crossing
78. Implement elevator controller state machine
79. Design digital lock with 4-digit combination
80. Create washing machine controller FSM

## 🎯 Assessment and Evaluation

### Quiz Questions (40 questions)
1. What is the difference between latch and flip-flop?
2. Why are synchronous counters faster than ripple counters?
3. How does a Johnson counter differ from a ring counter?
4. What causes metastability in flip-flops?
5. How do you determine the number of states in an FSM?

### Design Projects
1. **Digital Clock**: Complete time-keeping system with displays
2. **Frequency Counter**: Measure and display input frequency
3. **Sequence Generator**: Programmable pattern generator
4. **State Machine Controller**: Complex control system design

### Major Project Options
1. **Digital Stopwatch**: Precision timing with lap functionality
2. **Traffic Intersection Controller**: Multi-direction traffic management
3. **Elevator Controller**: Multi-floor elevator system
4. **Digital Combination Lock**: Secure access control system

## 📚 Resources and References

### Textbooks
- "Digital Design" by Morris Mano & Michael Ciletti (Chapters 5-6)
- "Digital Electronics" by Anil K. Maini (Chapters 8-10)
- "Fundamentals of Digital Logic" by Brown & Vranesic (Chapters 7-8)

### IC Datasheets
- 7400 Series Sequential Logic ICs
- 4000 Series CMOS Sequential ICs
- Timing specifications and characteristics
- Application notes and examples

### Online Resources
- [Sequential Logic Simulator](https://www.falstad.com/circuit/)
- [State Machine Design Tools](https://www.state-machine.com/)
- [Timing Analysis Tutorials](https://www.allaboutcircuits.com/textbook/digital/)

### Software Tools
- Logisim-Evolution: Sequential circuit simulation
- Quartus Prime: FPGA implementation of state machines
- ModelSim: HDL simulation and timing analysis
- StateCAD: State machine design and analysis

## 🏆 Learning Outcomes
After completing this module, you will:
- Design and analyze all types of flip-flops and latches
- Implement various register and counter configurations
- Create complex finite state machines
- Understand timing requirements and constraints
- Optimize sequential circuits for speed and area
- Troubleshoot timing-related problems
- Score 95%+ on sequential circuit problems

**Next Module**: Memory Systems and Storage →