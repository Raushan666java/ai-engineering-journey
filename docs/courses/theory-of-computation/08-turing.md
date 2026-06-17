# Chapter 8: Turing Machines

## Learning Objectives

- Define a Turing machine formally.
- Trace Turing machine computations.
- Design Turing machines for specific languages and functions.
- Understand Turing machine variants: multitape, nondeterministic.
- Prove equivalence of Turing machine variants.
- Compare Turing machines with finite automata and PDAs.
- Describe the relationship between Turing machines and algorithms.

## Theory

![Turing Machine State Diagram - a^n b^n c^n](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/theory-of-computation/08-turing.png)

### 8.1 The Turing Machine Model

Alan Turing introduced the Turing machine in 1936 as a model of "computation by a human clerk." It is the most powerful model of computation we have — anything computable by any mechanical process can be computed by a Turing machine (the Church-Turing thesis).

A Turing machine consists of:
- An **infinite tape** divided into cells, each containing a symbol from a finite alphabet.
- A **tape head** that can read and write symbols and move left or right.
- A **finite control** (states) that determines the machine's behavior.

Unlike finite automata, the TM has **unbounded memory** (the infinite tape) and can both **read and write**. Unlike PDAs, the TM can access **any position** on the tape (not just the top of a stack).

### 8.2 Formal Definition of a Turing Machine

A **Turing machine** is a 7-tuple (Q, Σ, Γ, δ, q₀, q_accept, q_reject) where:

- **Q** is a finite set of states.
- **Σ** is the input alphabet (does not contain the blank symbol).
- **Γ** is the tape alphabet (Σ ⊂ Γ, includes blank symbol ␣).
- **δ: Q × Γ → Q × Γ × {L, R}** is the transition function.
- **q₀ ∈ Q** is the start state.
- **q_accept ∈ Q** is the accepting state.
- **q_reject ∈ Q** is the rejecting state (q_reject ≠ q_accept).

A transition δ(q, a) = (r, b, L) means:
- In state q, reading symbol a on the tape,
- Write symbol b, move the head left, and go to state r.

**Computation:** Starting with the input on the tape (head at leftmost symbol), the TM repeatedly applies δ until it enters q_accept (accepts) or q_reject (rejects). The TM may also **loop forever** (never halt).

### 8.3 Configuration and Computation

A **configuration** of a TM is a triple (q, u, v) where:
- q ∈ Q is the current state.
- uv is the tape content (with the head at the first symbol of v).
- All cells beyond the last symbol of uv are blank.

We write configurations as: u q v, where the current state is before the symbol under the head.

Example: `q₀ 0101` means state q₀, tape contains "0101", head at the first 0.

The start configuration on input w is: q₀ w.

An **accepting configuration** has state q_accept. A **rejecting configuration** has state q_reject.

A TM **halts** when it enters q_accept or q_reject. Otherwise it loops.

### 8.4 Turing Machine Language

A Turing machine M **accepts** string w if there is a sequence of configurations C₀, C₁, …, Cₖ where:
- C₀ is the start configuration for w.
- Each Cᵢ yields Cᵢ₊₁ via δ.
- Cₖ is an accepting configuration.

The **language recognized** by M is:
L(M) = { w | M accepts w }

Turing machines recognize exactly the **recursively enumerable** (RE) languages. If a TM halts on all inputs, it's a **decider** and recognizes a **recursive** language.

### 8.5 Designing Turing Machines

Designing TMs is akin to writing low-level programs. Common design patterns:

1. **Marking symbols:** Use tape symbols with dots (e.g., á) to mark already-processed symbols.
2. **Multiple passes:** Sweep the tape left-to-right and right-to-left repeatedly.
3. **Shift and insert:** Move data to make room for new symbols.
4. **Subroutine states:** Use sets of states to implement subroutine-like behavior.
5. **Multi-track tape:** Treat each tape cell as containing a tuple (like an array).

### 8.6 Multitape Turing Machines

A **k-tape Turing machine** has k independent tapes, each with its own read/write head. The transition function becomes:

δ: Q × Γᵏ → Q × Γᵏ × {L, R}ᵏ

The machine reads all k heads simultaneously, writes to all k tapes, and moves all k heads.

**Theorem:** Every multitape Turing machine has an equivalent single-tape Turing machine.

**Proof sketch:** Use a single tape with "tracks" separated by a delimiter #. Each track stores the content of one tape. A special marker (ḃ) indicates the position of each tape's head. Simulating one step of the k-tape machine may require sweeping the entire tape to find all head positions, making the simulation potentially slow but correct.

### 8.7 Nondeterministic Turing Machines

A **nondeterministic Turing machine (NTM)** has a transition function:

δ: Q × Γ → P(Q × Γ × {L, R})

At each step, the NTM may have multiple choices. It accepts if **any** branch leads to q_accept.

**Theorem:** Every NTM has an equivalent deterministic Turing machine.

**Proof sketch:** Simulate the NTM using a **breadth-first** search of the computation tree. The DTM uses three tapes: (1) input tape, (2) work tape, (3) address tape that encodes which branch to take at each step. The DTM systematically tries all possible sequences of nondeterministic choices.

**Consequence for complexity:** The simulation may require exponential time (exploring all branches), but for computability, NTMs add no power.

### 8.8 Turing Machine Variants

Other equivalent variants:
- **Doubly infinite tape:** Tape extends infinitely in both directions.
- **Random access TM:** Can jump to any tape position in one step.
- **Multi-dimensional tape:** Tape is a grid.
- **Oblivious TM:** Head movement depends only on step number, not on input.
- **Write-once TM:** Can write each cell only once.
- **Counter machine:** Uses counters instead of a tape (with 2+ counters, equivalent to TM).

All of these are equivalent in power to the standard single-tape TM.

## Examples

### Example 8.1: TM for L = { aⁿbⁿcⁿ | n ≥ 0 }

Strategy: Scan left to right, marking one a, one b, and one c each pass. Repeat until all symbols are marked.

Detailed transitions:

1. **Initial setup:** Read first symbol.
   - If blank → accept (empty string).
   - If a → mark it as X, move right to find b.
   - If b or c → reject (wrong order).

2. **Mark a, b, c cycle:**
   - From marked a, move right past all a's and Y's to find first b, mark as Y.
   - Move right past all b's and Z's to find first c, mark as Z.
   - Move left to the leftmost X or beginning, repeat.

3. **Cleanup:**
   - When no unmarked a remains, verify all b's and c's are marked.
   - If so, accept.

State design:
- q₀: Initial — find first a, mark as X, go to q₁
- q₁: Finding b — scan right over a, Y; mark first b as Y, go to q₂
- q₂: Finding c — scan right over b, Z; mark first c as Z, go to q₃
- q₃: Return left — scan left over X, Y, Z, a, b, c to leftmost; go to q₀
- q₄: Verification — check all symbols are X, Y, Z
- q_accept, q_reject

### Example 8.2: TM for Binary Increment

Given a binary number on the tape, add 1 to it.

Strategy: Start at the least significant bit (rightmost), propagate carries leftward.

```
State q₀: move right to end of input
  δ(q₀, 0) = (q₀, 0, R)
  δ(q₀, 1) = (q₀, 1, R)
  δ(q₀, ␣) = (q₁, ␣, L)  -- reached end, start incrementing

State q₁: increment current digit
  δ(q₁, 0) = (q₂, 1, L)  -- 0→1, done
  δ(q₁, 1) = (q₁, 0, L)  -- 1→0, carry
  δ(q₁, ␣) = (q₂, 1, L)  -- overflow: 1000... → 1000...1

State q₂: move to start and halt
  δ(q₂, 0) = (q₂, 0, L)
  δ(q₂, 1) = (q₂, 1, L)
  δ(q₂, ␣) = (q_accept, ␣, R)
```

Trace for "1011" (11): q₀1011 → * → 1011 q₁ (at ␣) → 101 q₁ 1 → 10 q₁ 01 → 1 q₁ 001 → q₂ 1100 → * → q_accept 1100 (12).

### Example 8.3: TM for Palindrome Recognition

Language: L = { w ∈ {0,1}* | w = wʀ }.

**Strategy:**
1. Compare first and last symbols — if they match, erase both and repeat.
2. If only ε or one symbol remains, accept.

Transitions (sketch):
- q₀: Read first symbol. If 0 → replace with X, go to q₁ (looking for 0 at end). If 1 → replace with X, go to q₂. If blank → accept.
- q₁: Scan right to end, ignoring 0,1. At blank, move left. If 0 → replace with X, go to q₃. If 1 or X → reject.
- q₂: Symmetric to q₁ for 1.
- q₃: Scan left to beginning (past X's, 0's, 1's). At X → move right to next unprocessed symbol, go to q₀.

### Example 8.4: Simulating a Multitape TM on a Single Tape

To simulate a 2-tape TM on a single tape:
1. Represent tape contents as: #tape1#tape2#.
2. Mark head positions with dots: #0ḃ1#1ǟ0#.
3. To simulate one step: scan from first # to last # to find head positions, read both symbols, then scan back to write and move heads.

### Example 8.5: NTM for the Satisfiability Problem (SAT)

Given a Boolean formula in CNF, determine if there is a satisfying assignment. An NTM can:
1. Nondeterministically write 0 or 1 for each variable (the "guess" phase).
2. Deterministically evaluate the formula (the "check" phase).

If any assignment satisfies the formula, the NTM accepts. The DTM simulation would try all 2ⁿ assignments exponentially.

## Summary

- Turing machines have infinite tape, read/write capability, and bidirectional head movement.
- Formal definition: 7-tuple (Q, Σ, Γ, δ, q₀, q_accept, q_reject).
- TM configurations encode state, tape content, and head position.
- Multitape TMs are equivalent to single-tape TMs (with slower simulation).
- Nondeterministic TMs are equivalent to deterministic TMs (for computability).
- TM recognizes RE languages; TM decider recognizes recursive languages.
- Many TM variants (multitape, multi-dimensional, random-access) are equivalent.

## Exercises

### Basic

1. Design a TM that recognizes L = { 0ⁿ1ⁿ | n ≥ 0 }.
2. Trace the TM from Example 8.1 on input "aabbcc".
3. Design a TM that accepts strings over {a,b} with an equal number of a's and b's.
4. Design a TM that performs binary addition of two numbers separated by +.
5. Explain why every PDA can be simulated by a TM but not vice versa.

### Intermediate

6. Design a TM that computes the function f(n) = n mod 2 (binary to single-bit output).
7. Design a TM that recognizes L = { w ∈ {a,b}* | w = wʀ } (palindromes).
8. Show formally that a TM with a doubly infinite tape is equivalent to a standard TM.
9. Design a 2-tape TM to recognize { aⁿbⁿcⁿ | n ≥ 0 } and then simulate it on a single tape.
10. Design an NTM for the language of Hamiltonian paths in a graph (given as adjacency matrix on the tape).

### Advanced

11. Prove formally that the class of languages recognized by TMs is closed under union, intersection, and concatenation.
12. Show that any multitape TM can be simulated by a single-tape TM with at most quadratic slowdown.
13. Design a TM that recognizes the language { aⁿ | n is a prime number }.
14. Prove that the simulation of an NTM by a DTM may require exponential time (show a language that an NTM decides in O(n) time but requires Ω(2ⁿ) time on a DTM).
15. Implement (in a high-level description) a TM that simulates an arbitrary TM given its description — this is the universal Turing machine concept from Chapter 9.
