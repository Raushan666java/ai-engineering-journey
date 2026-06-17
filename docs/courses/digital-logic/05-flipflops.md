# Chapter 5: Flip-Flops

## Learning Objectives

By the conclusion of this chapter, the student shall be able to:

1. Distinguish between level-sensitive latches and edge-triggered flip-flops
2. Analyse the behaviour of SR, JK, D, and T flip-flops
3. Derive characteristic and excitation tables for each flip-flop type
4. Convert one flip-flop type to another
5. Determine timing parameters including setup time, hold time, and propagation delay

## Theory

![Latches, Flip-Flops and Sequential Components](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/digital-logic/ch04-flipflops-sequential.png)

### 5.1 Latches

A latch is a memory element that samples its inputs continuously and changes outputs accordingly. It is level-sensitive.

#### 5.1.1 SR Latch (NOR Implementation)

The SR latch uses cross-coupled NOR gates. S (set) and R (reset) are active-high inputs.

| S | R | Q_next | Q'_next |
|---|---|--------|---------|
| 0 | 0 | Q (hold) | Q' (hold) |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 (invalid) |

The S = R = 1 state is forbidden because both outputs are forced to 0, violating Q &ne; Q'.

#### 5.1.2 SR Latch (NAND Implementation)

An active-low SR latch uses cross-coupled NAND gates with complemented inputs S_n and R_n.

| S_n | R_n | Q_next | Q'_next |
|----|----|--------|---------|
| 0 | 0 | 1 | 1 (invalid) |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | Q (hold) | Q' (hold) |

#### 5.1.3 Gated SR Latch

Adding an enable (clock) signal produces a gated SR latch. The latch only responds to S and R when the enable is active.

| Enable | S | R | Q_next |
|:------:|---|---|--------|
| 0 | X | X | Q (hold) |
| 1 | 0 | 0 | Q (hold) |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | Invalid |

#### 5.1.4 Gated D Latch

The D latch eliminates the SR latch's invalid state by ensuring S and R are never simultaneously 1.

| Enable | D | Q_next |
|:------:|---|--------|
| 0 | X | Q (hold) |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Q follows D when enable is HIGH; Q holds when enable is LOW.

### 5.2 Edge-Triggered Flip-Flops

Flip-flops sample inputs only at a clock edge (rising or falling). This edge-triggered behaviour is essential for synchronous sequential circuits where multiple flip-flops must update simultaneously.

#### 5.2.1 Positive-Edge-Triggered D Flip-Flop

The D flip-flop captures the value on D at the rising clock edge and holds it until the next rising edge.

| Clock | D | Q_next |
|:----:|---|--------|
| Rising edge | 0 | 0 |
| Rising edge | 1 | 1 |
| Other | X | Q (hold) |

#### 5.2.2 Master-Slave Configuration

A master-slave flip-flop uses two gated latches in series. The master is enabled while the clock is HIGH; the slave is enabled while the clock is LOW. The output changes only at the falling edge, providing pulse-triggered behaviour.

### 5.3 Flip-Flop Types

#### 5.3.1 JK Flip-Flop

The JK flip-flop generalises the SR flip-flop. J corresponds to set, K to reset. The J = K = 1 state toggles the output rather than producing an invalid state.

| Clock | J | K | Q_next | Function |
|:----:|---|---|--------|----------|
| Rising | 0 | 0 | Q | Hold |
| Rising | 0 | 1 | 0 | Reset |
| Rising | 1 | 0 | 1 | Set |
| Rising | 1 | 1 | Q' | Toggle |

#### 5.3.2 T Flip-Flop

The T (toggle) flip-flop changes state when T = 1 at the clock edge.

| Clock | T | Q_next |
|:----:|---|--------|
| Rising | 0 | Q |
| Rising | 1 | Q' |

The T flip-flop is constructed from a JK flip-flop with J = K = T.

#### 5.3.3 Comparison of Flip-Flop Types

| Type | Inputs | Hold | Set | Reset | Toggle | Invalid |
|------|--------|:---:|:---:|:-----:|:------:|:-------:|
| SR | S, R | Yes | Yes | Yes | No | Yes |
| D | D | Yes* | Yes | Yes | No | No |
| JK | J, K | Yes | Yes | Yes | Yes | No |
| T | T | Yes | No | No | Yes | No |

### 5.4 Characteristic and Excitation Tables

The characteristic table defines the flip-flop's next state based on current state and inputs. The excitation table specifies the required inputs to achieve a desired state transition.

#### 5.4.1 SR Flip-Flop

**Characteristic table**: Q_next = S + R' &middot; Q, with constraint S &middot; R = 0.

**Excitation table**:

| Q | Q_next | S | R |
|---|---|:---:|:---:|
| 0 | 0 | 0 | X |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | X | 0 |

#### 5.4.2 JK Flip-Flop

**Characteristic table**: Q_next = J &middot; Q' + K' &middot; Q.

**Excitation table**:

| Q | Q_next | J | K |
|---|---|:---:|:---:|
| 0 | 0 | 0 | X |
| 0 | 1 | 1 | X |
| 1 | 0 | X | 1 |
| 1 | 1 | X | 0 |

#### 5.4.3 D Flip-Flop

**Characteristic table**: Q_next = D.

**Excitation table**:

| Q | Q_next | D |
|---|---|:---:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

#### 5.4.4 T Flip-Flop

**Characteristic table**: Q_next = T &oplus; Q.

**Excitation table**:

| Q | Q_next | T |
|---|---|:---:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### 5.5 Timing Parameters

- **Setup time (*t_su*)**: Minimum interval before the clock edge during which data inputs must be stable.
- **Hold time (*t_h*)**: Minimum interval after the clock edge during which data inputs must remain stable.
- **Clock-to-Q propagation delay (*t_cq*)**: Time from clock edge to valid output.
- **Minimum clock period**: *T_min* = *t_cq* + *t_logic* + *t_su*, where *t_logic* is the combinational logic delay between flip-flops.

### 5.6 Flip-Flop Conversion

Any flip-flop type can be converted to another by deriving the appropriate input logic.

**JK to D**: Compare excitation tables: D = J &middot; Q' + K' &middot; Q = J &middot; Q' + K' &middot; Q. Since D must equal Q_next, we set J = D and K = D'.

**D to JK**: The conversion logic: J = D; K = D'.

## Examples

### Example 5.1: SR Latch Waveform Analysis

Given an SR latch with S and R timing diagram: S goes HIGH at t=0 ns, LOW at t=20 ns. R goes HIGH at t=40 ns, LOW at t=60 ns. Assume initial Q = 0.

**Solution**: At t = 0, S = 1, R = 0: Q becomes 1. At t = 20, S = 0, R = 0: Q holds 1. At t = 40, S = 0, R = 1: Q becomes 0. At t = 60, S = 0, R = 0: Q holds 0.

### Example 5.2: D Flip-Flop Timing

A positive-edge-triggered D flip-flop has *t_su* = 5 ns, *t_h* = 2 ns, *t_cq* = 8 ns. The clock period is 20 ns. Determine whether timing constraints are satisfied if D changes 3 ns before the clock edge.

**Solution**: The D input changes 3 ns before the clock edge. Since *t_su* = 5 ns, the setup time is violated (3 ns &lt; 5 ns). The flip-flop may enter a metastable state, and the output is undefined.

### Example 5.3: Flip-Flop Type Conversion

Design a JK flip-flop using a D flip-flop and additional logic.

**Solution**: From the JK characteristic table, Q_next = J &middot; Q' + K' &middot; Q. For a D flip-flop, Q_next = D. Therefore D = J &middot; Q' + K' &middot; Q. This requires an AND-OR network feeding the D input.

### Example 5.4: Frequency Division with T Flip-Flop

Show how a T flip-flop with T = 1 divides the input clock frequency by 2.

**Solution**: With T = 1, the flip-flop toggles on every rising edge. The output Q transitions at half the clock frequency. Connecting *n* T flip-flops in cascade produces frequency division by 2^n.

## Summary

- Latches are level-sensitive; flip-flops are edge-triggered.
- The SR latch has an invalid state when both inputs are asserted.
- The JK flip-flop resolves the invalid state by toggling when both inputs are 1.
- The D flip-flop is the most commonly used type for data storage.
- The T flip-flop toggles its output on each clock edge when enabled.
- Excitation tables specify the input conditions needed for a desired state transition.
- Timing parameters ensure reliable operation in synchronous systems.

## Exercises

### Review Questions

1. What distinguishes a latch from a flip-flop?
2. Why is the S = R = 1 state invalid in an SR latch?
3. Explain the advantage of the JK flip-flop over the SR flip-flop.
4. State the characteristic equation for each flip-flop type.
5. Define setup time and hold time. Why are they important?

### Application Problems

1. Draw the circuit diagram of a gated D latch using NAND gates. Explain its operation with a timing diagram.

2. Construct a JK flip-flop using an SR flip-flop and additional gates. Show the conversion logic.

3. A sequential circuit uses a positive-edge-triggered D flip-flop with *t_su* = 4 ns, *t_h* = 1.5 ns, and *t_cq* = 6 ns. The combinational logic between two flip-flops has a delay of 10 ns. Calculate the maximum clock frequency.

4. Design a divide-by-4 counter using T flip-flops. Show the timing diagram for clock, Q_0, and Q_1.

5. Convert a T flip-flop to a JK flip-flop. Derive the Boolean expression for T in terms of J, K, and Q.

### Challenge Problem

Design a 4-bit shift register using D flip-flops. The register should support parallel load and shift-right operations under the control of a mode signal M (M = 0 for shift, M = 1 for parallel load). Derive the input equation for each D flip-flop and draw the complete circuit.
