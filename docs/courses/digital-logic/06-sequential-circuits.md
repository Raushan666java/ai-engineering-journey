# Chapter 6: Sequential Circuits

## Learning Objectives

By the conclusion of this chapter, the student shall be able to:

1. Distinguish between Mealy and Moore state machine models
2. Construct state diagrams and state tables from problem descriptions
3. Design synchronous sequential circuits using flip-flop excitation tables
4. Analyse and design counters (ripple and synchronous)
5. Implement sequence detectors for arbitrary bit patterns
6. Perform state minimisation and state assignment

## Theory

### 6.1 Sequential Circuit Structure

A sequential circuit comprises a combinational logic block and memory elements (flip-flops). The outputs depend on both the current inputs and the state stored in the memory elements. Two models exist for describing sequential circuits.

### 6.2 Mealy Machine

In the Mealy model, outputs depend on both the present state and the current inputs. Outputs may change asynchronously with input changes within a clock period.

Next state = f(current state, inputs)
Outputs = g(current state, inputs)

### 6.3 Moore Machine

In the Moore model, outputs depend only on the present state. Outputs are synchronised with the clock and are stable throughout each clock period.

Next state = f(current state, inputs)
Outputs = g(current state)

### 6.4 State Diagrams and State Tables

A state diagram is a directed graph where nodes represent states and edges represent transitions. Edge labels follow the convention:

- Mealy: input/output (e.g., 0/1 means input 0 produces output 1)
- Moore: output is written inside the state node; edges carry only the input

A state table tabulates the same information. Columns include present state, input(s), next state, and output(s).

| Present State | Input | Next State | Output |
|--------------|:-----:|-----------|:------:|
| S_0 | 0 | S_1 | 0 |
| S_0 | 1 | S_0 | 1 |
| S_1 | 0 | S_0 | 0 |
| S_1 | 1 | S_1 | 1 |

### 6.5 State Minimisation

State minimisation reduces the number of states while preserving the input-output behaviour. The partitioning method:

1. Partition states into groups based on output values.
2. Split groups whose members have transitions to different groups for the same input.
3. Repeat until no further splitting occurs.

Equivalent states are those that remain in the same group through all partitions.

### 6.6 Counters

Counters are sequential circuits that progress through a predetermined sequence of states.

#### 6.6.1 Ripple Counter

In a ripple (asynchronous) counter, the clock input of each flip-flop is driven by the output of the preceding flip-flop. The delay accumulates through the chain, limiting the maximum counting frequency.

A 4-bit binary ripple counter using T flip-flops with T = 1:

- FF_0 toggles on every clock edge (LSB).
- FF_1 toggles when Q_0 transitions from 1 to 0.
- FF_2 toggles when Q_1 transitions from 1 to 0.
- FF_3 toggles when Q_2 transitions from 1 to 0.

#### 6.6.2 Synchronous Counter

In a synchronous counter, all flip-flops receive the same clock. The count enable logic determines which flip-flops toggle.

For a 4-bit synchronous binary counter:
- T_0 = 1
- T_1 = Q_0
- T_2 = Q_0 &middot; Q_1
- T_3 = Q_0 &middot; Q_1 &middot; Q_2

#### 6.6.3 Mod-N Counter

A modulo-N counter counts from 0 to N &minus; 1 and then resets. For N not a power of 2, additional logic detects the terminal count and resets the counter.

### 6.7 Register

A register is a collection of *n* D flip-flops sharing a common clock, used to store an *n*-bit binary word.

**Shift register**: A register wherein the bits are moved one position left or right on each clock cycle. A serial-in, serial-out (SISO) shift register connects Q_i to D_{i+1}. A parallel-in, parallel-out (PIPO) register provides individual data inputs and outputs for each bit.

### 6.8 Sequence Detector

A sequence detector recognises a specific bit pattern in a serial input stream. The circuit enters a unique state when the pattern is detected and asserts an output.

**Design procedure**:

1. Determine the sequence to detect.
2. Construct the state diagram showing all partial matches.
3. Derive the state table.
4. Perform state assignment.
5. Determine flip-flop input equations using excitation tables.
6. Derive the output equation.
7. Draw the circuit.

## Examples

### Example 6.1: 3-Bit Synchronous Binary Counter

Design a 3-bit synchronous binary counter using JK flip-flops.

**Solution**: The counter sequences through states 000, 001, 010, 011, 100, 101, 110, 111.

Excitation table for JK flip-flops:

| Q | Q_next | J | K |
|---|---|:---:|:---:|
| 0 | 0 | 0 | X |
| 0 | 1 | 1 | X |
| 1 | 0 | X | 1 |
| 1 | 1 | X | 0 |

Present and next state for all flip-flops:

| Q_2 Q_1 Q_0 | Q_2^+ Q_1^+ Q_0^+ | J_2 K_2 | J_1 K_1 | J_0 K_0 |
|-------------|------------------|---------|---------|---------|
| 0 0 0 | 0 0 1 | 0 X | 0 X | 1 X |
| 0 0 1 | 0 1 0 | 0 X | 1 X | X 1 |
| 0 1 0 | 0 1 1 | 0 X | X 0 | 1 X |
| 0 1 1 | 1 0 0 | 1 X | X 1 | X 1 |
| 1 0 0 | 1 0 1 | X 0 | 0 X | 1 X |
| 1 0 1 | 1 1 0 | X 0 | 1 X | X 1 |
| 1 1 0 | 1 1 1 | X 0 | X 0 | 1 X |
| 1 1 1 | 0 0 0 | X 1 | X 1 | X 1 |

From K-maps:
- J_0 = 1, K_0 = 1
- J_1 = Q_0, K_1 = Q_0
- J_2 = Q_0 &middot; Q_1, K_2 = Q_0 &middot; Q_1

### Example 6.2: Sequence Detector

Design a Mealy sequence detector for the pattern 1101. Overlapping sequences are allowed.

**Solution**: States represent how much of the pattern has been matched:
- S_0: No bits matched (initial)
- S_1: '1' matched
- S_2: '11' matched
- S_3: '110' matched
- Detection: S_3 + input '1' produces output 1 and goes to S_1 (since '1' begins a new match)

State diagram transitions from S_0, S_1, S_2, S_3 on inputs 0 and 1. The output is 1 only in the transition from S_3 on input 1.

State table:

| PS | Input=0 | Input=1 |
|----|---------|---------|
| S_0 | S_0, 0 | S_1, 0 |
| S_1 | S_0, 0 | S_2, 0 |
| S_2 | S_3, 0 | S_2, 0 |
| S_3 | S_0, 0 | S_1, 1 |

### Example 6.3: BCD Counter (Mod-10)

Design a synchronous BCD counter that counts 0 through 9 and resets to 0.

**Solution**: The counter must detect state 1001 (9) and transition to 0000 (0) on the next clock. Using D flip-flops:

D_0 = Q_0'
D_1 = Q_0 &middot; Q_1' &middot; Q_2' &middot; Q_3' + Q_1 &middot; Q_0' (after K-map minimisation considering invalid states as don't-cares)
D_2 = Q_2 &oplus; (Q_0 &middot; Q_1)
D_3 = Q_3 &oplus; (Q_0 &middot; Q_1 &middot; Q_2)

The reset condition at count 9 (Q_3 = 1, Q_0 = 1) was used in the derivation.

### Example 6.4: Johnson Counter

A Johnson (twisted-ring) counter connects the complement of the last flip-flop's output to the first flip-flop's input. An *n*-bit Johnson counter cycles through 2*n* states.

For a 4-bit Johnson counter starting at 0000:
0000, 0001, 0011, 0111, 1111, 1110, 1100, 1000, then back to 0000.

## Summary

- Sequential circuits incorporate memory; outputs depend on both inputs and state.
- Mealy machines compute outputs from state and inputs; Moore machines compute outputs from state only.
- State diagrams and state tables are the primary design representations.
- Counters are sequential circuits that cycle through a predetermined state sequence.
- Sequence detectors recognise specific input patterns.
- State minimisation reduces circuit complexity by merging equivalent states.

## Exercises

### Review Questions

1. What is the fundamental difference between combinational and sequential circuits?
2. Compare Mealy and Moore machine models. Which requires fewer states for the same behaviour?
3. Define state minimisation. Why is it important?
4. How does a synchronous counter differ from a ripple counter?
5. What is a sequence detector?

### Application Problems

1. Design a synchronous 3-bit up-down counter using JK flip-flops. An input U controls the direction: U = 1 for up, U = 0 for down. Show the state diagram and circuit.

2. Design a Mealy sequence detector for the pattern 101 (non-overlapping). Show the state diagram, state table, and flip-flop input equations using D flip-flops.

3. Convert the Mealy machine from Problem 2 to an equivalent Moore machine. Compare the state counts.

4. Design a synchronous BCD counter using T flip-flops. Derive the input equations for all four T inputs.

5. A 5-bit Johnson counter is initialised to 00000. List the complete state sequence and determine the number of unique states.

### Challenge Problem

Design a 4-bit universal shift register using JK flip-flops. The register supports four operations controlled by S_1 and S_0:
- S_1 S_0 = 00: Hold (no change)
- S_1 S_0 = 01: Shift right (serial input SR)
- S_1 S_0 = 10: Shift left (serial input SL)
- S_1 S_0 = 11: Parallel load (inputs P_3, P_2, P_1, P_0)

Derive the J and K input equations for each flip-flop and draw the complete circuit.
