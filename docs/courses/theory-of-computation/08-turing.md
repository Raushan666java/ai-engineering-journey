# Chapter 8: Turing Machines

## Learning Objectives

By the end of this chapter, you should be able to: define a Turing machine formally; design TMs for simple languages; explain the differences between TMs and finite automata/PDAs; understand TM variants (multi-tape, nondeterministic, multi-head) and their equivalence; describe the universal Turing machine and its significance; compute functions using TMs.

## Theory

### Formal Definition

A **Turing machine** (TM) is a 7-tuple

$$M = (Q, \Sigma, \Gamma, \delta, q_0, q_{\text{accept}}, q_{\text{reject}})$$

where:

- $Q$ is a finite set of states
- $\Sigma$ is the input alphabet (does not contain the blank symbol $\sqcup$)
- $\Gamma$ is the tape alphabet, with $\Sigma \subset \Gamma$ and $\sqcup \in \Gamma$
- $\delta : Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$ is the transition function (partial)
- $q_0 \in Q$ is the start state
- $q_{\text{accept}} \in Q$ is the accepting state
- $q_{\text{reject}} \in Q$ is the rejecting state ($q_{\text{reject}} \neq q_{\text{accept}}$)

A TM has an infinite tape (one-dimensional, unbounded in both directions) divided into cells, each containing a symbol from $\Gamma$. The machine has a read/write head that moves left or right one cell per step. The initial tape contains the input string with blanks elsewhere.

### Configuration and Computation

A **configuration** of a TM is a triple $(q, u, v)$ where $q$ is the state, $u$ is the tape content to the left of the head, and $v$ is the tape content from the head position rightward. We write $u q v$ as shorthand.

A configuration $C_1$ **yields** $C_2$ ($C_1 \vdash C_2$) if a single transition applies. For example, if $\delta(q, a) = (p, b, R)$, then:

$$u q a v \vdash u b p v$$

The TM **halts** when it enters $q_{\text{accept}}$ or $q_{\text{reject}}$. Note: unlike finite automata, a TM may also loop forever.

### Language of a TM

A TM $M$ **accepts** input $w$ if there exists a computation $(q_0, \epsilon, w) \vdash^* (q_{\text{accept}}, u, v)$ for some $u, v$. The language of $M$ is:

$$L(M) = \{ w \in \Sigma^* \mid M \text{ accepts } w \}$$

A TM **decides** a language $L$ if it halts on every input (rejecting or accepting) and accepts exactly $L$. A language is **decidable** (recursive) if some TM decides it.

A TM **recognizes** a language $L$ if it accepts exactly $L$ but may loop on non-members. A language is **recognizable** (recursively enumerable) if some TM recognizes it.

### TM Design

Designing TMs involves specifying transitions that manipulate the tape. Common techniques:

- **Marking**: Use symbols like $\dot{a}$ to mark cells already processed.
- **Shifting**: Move a block of symbols right or left to make room.
- **Subroutines**: Copy common patterns (copy, compare, shift) across multiple states.
- **Multiple tracks**: Treat the tape as having multiple tracks by using pairs of symbols from $\Gamma \times \Gamma$.

### TM Variants

**Multi-tape TM**: Has $k$ tapes, each with an independent head. A transition reads all $k$ heads and writes/moves each independently. Multi-tape TMs are no more powerful than single-tape TMs, but they can be faster.

**Theorem 8.1**: Every multi-tape TM has an equivalent single-tape TM.

**Proof**: Use a single tape with tracks separated by a delimiter $\#$. Track $i$ stores tape $i$'s content with a marker $\dot{}$ for head position. Simulate one step of the multi-tape TM by scanning all tracks, reading the marked symbols, then making a second pass to update. The single-tape TM accepts iff the multi-tape TM does. $\square$

**Nondeterministic TM**: The transition function maps to $\mathcal{P}(Q \times \Gamma \times \{L, R\})$.

**Theorem 8.2**: Every nondeterministic TM has an equivalent deterministic TM.

**Proof**: Perform a breadth-first search (BFS) through the tree of possible configurations. Each node is a configuration; children are the configurations reachable in one nondeterministic step. If any branch reaches $q_{\text{accept}}$, the deterministic TM accepts. BFS ensures that if a finite accepting path exists, it will be found. $\square$

### Universal Turing Machine

**Theorem 8.3 (Existence of Universal TM)**: There exists a TM $U$ that, given as input the encoding $\langle M \rangle$ of a TM $M$ and a string $w$, simulates $M$ on $w$ and accepts iff $M$ accepts $w$.

**Proof sketch**: The encoding $\langle M \rangle$ lists the states, alphabet, and transition function in binary. The universal TM $U$ has three tapes: one for $\langle M \rangle$, one for $M$'s tape contents, and one for $M$'s current state. $U$ repeatedly:
1. Reads the current symbol under $M$'s head.
2. Searches $\langle M \rangle$ for the matching transition.
3. Writes the new symbol, moves the head, and updates the state.
4. Accepts if $M$ enters $q_{\text{accept}}$. $\square$

The universal TM is the theoretical foundation of the stored-program computer: it treats program descriptions as data.

### TM-Decidable vs. TM-Recognizable

- **Decidable** (recursive): TM always halts. Examples: $\{ w \in \{0, 1\}^* \mid w \text{ has equal 0s and 1s} \}$, $A_{\text{DFA}} = \{ \langle D, w \rangle \mid D \text{ is a DFA accepting } w \}$.
- **Recognizable but not decidable**: TM accepts when it should accept but may loop otherwise. Example: $A_{\text{TM}} = \{ \langle M, w \rangle \mid M \text{ is a TM that accepts } w \}$.
- **Not recognizable**: No TM can recognize the language. Example: $\overline{A_{\text{TM}}}$.

## Examples

### Example 1: TM for $\{ w\#w \mid w \in \{0, 1\}^* \}$

Design a TM that checks if the input consists of two identical strings separated by $\#$.

Strategy (multi-tape):
1. Copy the part before $\#$ to tape 2.
2. Move tape 2's head to the start and advance past $\#$ on tape 1.
3. Compare symbol by symbol: mismatch → reject; all match and both at end → accept.

Single-tape version: zigzag between the two halves, marking matched symbols.

### Example 2: TM for Binary Increment

Design a TM that adds 1 to a binary number on the tape.

Strategy: move the head to the right end of the number, then:
- If current symbol is 0, write 1 and halt (accept).
- If current symbol is 1, write 0 and move left; repeat.

Formally, with $q_0$ = start, $q_1$ = moving right, $q_2$ = incrementing:
$\delta(q_0, a) = (q_1, a, R)$ for $a \in \{0, 1\}$ — move to right end.
$\delta(q_1, \sqcup) = (q_2, \sqcup, L)$ — found the right end.
$\delta(q_2, 1) = (q_2, 0, L)$ — carry.
$\delta(q_2, 0) = (q_{\text{accept}}, 1, L)$ — done.
$\delta(q_2, \sqcup) = (q_{\text{accept}}, 1, L)$ — overflow (e.g., 111 + 1 = 1000).

### Example 3: Universal TM Simulation

Simulate a TM $M$ that checks parity. $M$ has states $\{q_0, q_1, q_{\text{accept}}, q_{\text{reject}}\}$ and reads bits. If the universal TM $U$ is given $\langle M \rangle 001$, it will:
1. Write $M$'s encoding and tape content on its tapes.
2. Step through $M$'s transitions: $q_0$ read 0 → go to $q_0$, move right; $q_0$ read 0 → go to $q_0$; $q_0$ read 1 → go to $q_1$; $q_1$ read $\sqcup$ → reject.
3. $U$ halts in $q_{\text{reject}}$ and reports "reject."

## Summary

- TMs have infinite tape, read/write head, and finite control.
- A TM can accept, reject, or loop.
- Multi-tape and nondeterministic TMs are equivalent to the basic model.
- The universal TM can simulate any other TM given its encoding.
- Decidable languages have TMs that always halt; recognizable languages have TMs that may loop.
- TMs formalize the intuitive notion of "algorithm."

## Exercises

### Review Questions

1. Why does a TM tape need to be infinite?
2. What does it mean for a language to be decidable?
3. How does a universal TM differ from an ordinary TM?
4. Why is the nondeterministic-to-deterministic TM conversion result nontrivial (unlike for finite automata)?

### Application Problems

5. Design a TM that accepts $\{ a^n b^n c^n \mid n \geq 0 \}$.
6. Design a TM that adds two binary numbers (given as $x + y$ on the tape).
7. Describe how to simulate a 3-tape TM on a single-tape TM.
8. Design a TM that decides whether a given string over $\{0, 1\}$ is a palindrome.

### Challenge Problem

9. Prove that a TM with a doubly-infinite tape (unbounded in both directions) is equivalent to a standard TM with a singly-infinite tape. Show how to simulate one with the other.
