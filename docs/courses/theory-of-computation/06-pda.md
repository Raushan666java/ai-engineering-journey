# Chapter 6: Pushdown Automata

## Learning Objectives

By the end of this chapter, you should be able to: define a pushdown automaton formally; design PDAs for context-free languages; distinguish between acceptance by final state and acceptance by empty stack; differentiate deterministic from nondeterministic PDAs; convert CFGs to equivalent PDAs and vice versa; understand why NPDA are more powerful than DPDA.

## Theory

### Formal Definition

A **pushdown automaton** (PDA) is a 6-tuple

$$P = (Q, \Sigma, \Gamma, \delta, q_0, F)$$

where:

- $Q$ is a finite set of states
- $\Sigma$ is a finite input alphabet
- $\Gamma$ is a finite **stack alphabet**
- $\delta : Q \times (\Sigma \cup \{\epsilon\}) \times (\Gamma \cup \{\epsilon\}) \to \mathcal{P}(Q \times \Gamma^*)$ is the transition function
- $q_0 \in Q$ is the start state
- $F \subseteq Q$ is the set of accepting states

The transition $\delta(q, a, X) = \{ (p_1, \gamma_1), \ldots, (p_k, \gamma_k) \}$ means: from state $q$, reading input $a$ (or $\epsilon$), with $X$ on top of the stack (or $\epsilon$ meaning "any/empty"), the PDA may nondeterministically move to state $p_i$ and replace $X$ with $\gamma_i$.

The stack provides unlimited (but last-in-first-out) memory, giving PDAs more power than finite automata.

### Instantaneous Descriptions

An **instantaneous description** (ID) of a PDA is a triple $(q, w, \gamma)$ where:
- $q \in Q$ is the current state
- $w \in \Sigma^*$ is the remaining input
- $\gamma \in \Gamma^*$ is the stack contents (top at the left)

A move $(q, aw, X\beta) \vdash (p, w, \alpha\beta)$ is possible if $(p, \alpha) \in \delta(q, a, X)$. The reflexive transitive closure is $\vdash^*$.

### Acceptance by Final State

A PDA $P$ accepts $w$ by **final state** if $(q_0, w, \epsilon) \vdash^* (q_f, \epsilon, \gamma)$ for some $q_f \in F$ and any $\gamma \in \Gamma^*$.

$$L(P) = \{ w \in \Sigma^* \mid (q_0, w, \epsilon) \vdash^* (q_f, \epsilon, \gamma) \text{ for some } q_f \in F, \gamma \in \Gamma^* \}$$

### Acceptance by Empty Stack

A PDA accepts $w$ by **empty stack** if $(q_0, w, \epsilon) \vdash^* (q, \epsilon, \epsilon)$ for any $q \in Q$. These acceptance modes are equivalent: for any PDA accepting by final state, there is an equivalent PDA accepting by empty stack, and vice versa.

### DPDA vs NPDA

A **deterministic PDA** (DPDA) is a PDA where for every $(q, a, X)$ with $a \in \Sigma \cup \{\epsilon\}$, the transition function satisfies:

- $|\delta(q, a, X)| \leq 1$
- If $\delta(q, \epsilon, X) \neq \emptyset$, then $\delta(q, a, X) = \emptyset$ for all $a \in \Sigma$

That is, at most one move is possible, and epsilon moves preclude reading input.

The class of languages accepted by DPDAs is a strict subset of CFLs. For example, $L = \{ ww^R \mid w \in \{0, 1\}^* \}$ (even-length palindromes) requires nondeterminism to guess the midpoint.

### CFG to PDA Conversion

**Theorem 6.1**: For every CFG $G$, there exists a PDA $P$ such that $L(P) = L(G)$.

**Construction (top-down)**: Construct a PDA that simulates a leftmost derivation:

1. Push $S$ onto the stack.
2. Repeat: if top of stack is a variable $A$, nondeterministically choose a production $A \to \alpha$ and replace $A$ with $\alpha$ (push $\alpha$ in reverse so the leftmost symbol is on top).
3. If top of stack is a terminal $a$ matching the next input symbol, pop $a$ and advance input.
4. Accept if stack is empty (all input consumed).

Formally: $P = (\{q\}, \Sigma, V \cup \Sigma, \delta, q, \{q\})$ where:
- $\delta(q, \epsilon, A) = \{ (q, \alpha) \mid A \to \alpha \in R \}$
- $\delta(q, a, a) = \{ (q, \epsilon) \}$ for $a \in \Sigma$

### PDA to CFG Conversion

**Theorem 6.2**: For every PDA $P$, there exists a CFG $G$ such that $L(G) = L(P)$.

**Construction**: For each pair of states $p, q$, introduce a variable $[pXq]$ representing "starting in state $p$ with stack containing $X$, ending in state $q$ with empty stack (after popping $X$ and possibly more)." For a PDA with acceptance by empty stack:

1. Create start variable $S \to [q_0 Z_0 p]$ for all states $p$, where $Z_0$ is the initial stack symbol.
2. For each transition $(r, Y_1 \cdots Y_k) \in \delta(q, a, X)$, add productions:
   $[q X p_k] \to a [r Y_1 p_1] [p_1 Y_2 p_2] \cdots [p_{k-1} Y_k p_k]$
   for all sequences of states $p_1, \ldots, p_k$.
3. For $\epsilon$-transitions that pop a stack symbol, add $[q X p] \to a$ if $(p, \epsilon) \in \delta(q, a, X)$.

This construction is the core of the proof that CFGs and PDAs are equivalent.

## Examples

### Example 1: PDA for $0^n 1^n$

Design a PDA that accepts $\{ 0^n 1^n \mid n \geq 0 \}$.

The strategy: push a marker for each 0 read; match each 1 by popping.

$P = (\{q_0, q_1\}, \{0, 1\}, \{Z_0, X\}, \delta, q_0, \{q_1\})$

Transitions:
- $\delta(q_0, 0, Z_0) = \{ (q_0, X Z_0) \}$ — push marker for first 0
- $\delta(q_0, 0, X) = \{ (q_0, X X) \}$ — push marker for each subsequent 0
- $\delta(q_0, 1, X) = \{ (q_1, \epsilon) \}$ — start matching 1s
- $\delta(q_1, 1, X) = \{ (q_1, \epsilon) \}$ — continue matching
- $\delta(q_1, \epsilon, Z_0) = \{ (q_1, \epsilon) \}$ — accept when 0-count matches 1-count

### Example 2: PDA for Palindromes over $\{0, 1\}$

Design a PDA for $L = \{ w w^R \mid w \in \{0, 1\}^* \}$ — even-length palindromes.

Strategy: push symbols until the midpoint is guessed, then pop and match.

$\delta(q_0, 0, Z_0) = \{ (q_0, 0 Z_0) \}$
$\delta(q_0, 1, Z_0) = \{ (q_0, 1 Z_0) \}$
$\delta(q_0, 0, 0) = \{ (q_0, 00) \}$ — keep pushing
$\delta(q_0, \epsilon, 0) = \{ (q_1, 0) \}$ — guess midpoint
$\delta(q_1, 0, 0) = \{ (q_1, \epsilon) \}$ — match and pop
$\delta(q_1, \epsilon, Z_0) = \{ (q_1, \epsilon) \}$ — accept

The nondeterministic choice at the midpoint distinguishes NPDA from DPDA.

### Example 3: CFG to PDA

Convert $S \to 0S1 \mid \epsilon$ to a PDA.

The PDA has one state $q$. Transitions:

- $\delta(q, \epsilon, S) = \{ (q, 0S1), (q, \epsilon) \}$ — simulate productions
- $\delta(q, 0, 0) = \{ (q, \epsilon) \}$
- $\delta(q, 1, 1) = \{ (q, \epsilon) \}$

Reading $0011$:
$(q, 0011, \epsilon) \vdash (q, 0011, S)$ — push start variable
$\vdash (q, 0011, 0S1)$ — apply $S \to 0S1$
$\vdash (q, 011, S1)$ — match 0
$\vdash (q, 011, 0S11)$ — apply $S \to 0S1$
$\vdash (q, 11, S11)$ — match 0
$\vdash (q, 11, 11)$ — apply $S \to \epsilon$
$\vdash (q, 1, 1) \vdash (q, \epsilon, \epsilon)$ — match remaining input
Input consumed, stack empty. Accepted.

## Summary

- PDAs add a stack to finite automata, giving them memory for nested structures.
- The stack is LIFO: only the top can be read, written, or popped.
- Acceptance can be by final state or empty stack (equivalent).
- NPDAs recognize exactly the context-free languages.
- DPDAs recognize a strict subset (deterministic CFLs).
- CFGs and PDAs are equivalent: each can be systematically converted to the other.
- The stack distinguishes CFLs from regular languages.

## Exercises

### Review Questions

1. How does a PDA's stack differ from a Turing machine's tape?
2. Why is nondeterminism needed for $ww^R$ but not for $ww$?
3. Explain the difference between acceptance by final state and empty stack.
4. What makes a PDA deterministic?

### Application Problems

5. Design a PDA for $\{ a^n b^m c^n \mid n, m \geq 0 \}$.
6. Design a PDA for $\{ w \in \{0, 1\}^* \mid \#_0(w) = \#_1(w) \}$.
7. Convert the CFG $S \to aSb \mid bSa \mid \epsilon$ to a PDA.
8. Convert the PDA from Example 1 to a CFG.

### Challenge Problem

9. Prove that the language $L = \{ w \in \{0, 1\}^* \mid w = w^R \}$ (all palindromes, including odd length) is context-free by giving a CFG or PDA. Then prove that no DPDA can accept this language.
