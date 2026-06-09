# Chapter 1: Deterministic Finite Automata

## Learning Objectives

By the end of this chapter, you should be able to: define a DFA formally using the 5-tuple; construct transition diagrams and tables from formal descriptions; design DFAs for regular languages over small alphabets; compute the language of a given DFA; apply the product construction to build DFAs for intersection and union; prove language properties using DFA invariants.

## Theory

### Formal Definition

A **deterministic finite automaton** (DFA) is a 5-tuple

$$M = (Q, \Sigma, \delta, q_0, F)$$

where:

- $Q$ is a finite set of **states**
- $\Sigma$ is a finite **alphabet**
- $\delta : Q \times \Sigma \to Q$ is the **transition function**
- $q_0 \in Q$ is the **start state**
- $F \subseteq Q$ is the set of **accepting (final) states**

The DFA is called *deterministic* because for each state and each input symbol, there is exactly one next state. The transition function maps every pair $(q, a)$ to a single state $q' = \delta(q, a)$.

### Extended Transition Function

We extend $\delta$ to strings: $\hat{\delta} : Q \times \Sigma^* \to Q$ is defined recursively:

$$\hat{\delta}(q, \epsilon) = q$$
$$\hat{\delta}(q, wa) = \delta(\hat{\delta}(q, w), a) \quad \text{for } w \in \Sigma^*, a \in \Sigma$$

Intuitively, $\hat{\delta}(q, w)$ is the state reached after reading the entire string $w$ starting from state $q$.

### Language of a DFA

A DFA $M = (Q, \Sigma, \delta, q_0, F)$ **accepts** a string $w \in \Sigma^*$ if $\hat{\delta}(q_0, w) \in F$. The **language** of $M$ is:

$$L(M) = \{ w \in \Sigma^* \mid \hat{\delta}(q_0, w) \in F \}$$

A language $L \subseteq \Sigma^*$ is called **regular** if there exists a DFA $M$ such that $L(M) = L$.

### Transition Diagrams

A DFA is visualized as a directed graph: states are vertices, transitions are labeled edges, the start state is marked with an incoming arrow $\to$, and accepting states are drawn with double circles.

### Dead States

A **dead state** (or trap state) is a non-accepting state that transitions only to itself for all inputs. Once the machine enters a dead state, it can never reach an accepting state. Dead states are sometimes omitted from diagrams but are implicitly present in the formal definition.

### Complementation

If $M = (Q, \Sigma, \delta, q_0, F)$ is a DFA, then the complement DFA $\overline{M}$ is $(Q, \Sigma, \delta, q_0, Q \setminus F)$. That is, we swap accepting and non-accepting states. This works **only** because $\delta$ is a total function: every string leads to exactly one state, so a string is in $L(M)$ iff it is not in $L(\overline{M})$.

### Product Construction

Given two DFAs $M_1 = (Q_1, \Sigma, \delta_1, q_1, F_1)$ and $M_2 = (Q_2, \Sigma, \delta_2, q_2, F_2)$, we can construct a DFA that recognizes $L(M_1) \cap L(M_2)$:

$$M_\cap = (Q_1 \times Q_2, \Sigma, \delta_\cap, (q_1, q_2), F_1 \times F_2)$$

where $\delta_\cap((p, q), a) = (\delta_1(p, a), \delta_2(q, a))$. The product DFA simulates both DFAs in parallel. For union, set the final states to $(F_1 \times Q_2) \cup (Q_1 \times F_2)$.

## Examples

### Example 1: DFA for Binary Strings Ending in 01

Design a DFA over $\Sigma = \{0, 1\}$ that accepts strings ending with the substring "01".

Let $Q = \{q_0, q_1, q_2\}$ where:
- $q_0$: no progress toward "01" (last symbol was not 0 and no partial match)
- $q_1$: last symbol was 0 (partial match)
- $q_2$: "01" has been seen (accepting)

Transitions: $\delta(q_0, 0) = q_1$, $\delta(q_0, 1) = q_0$, $\delta(q_1, 0) = q_1$, $\delta(q_1, 1) = q_2$, $\delta(q_2, 0) = q_1$, $\delta(q_2, 1) = q_0$.

Check: "00101" is accepted. The DFA follows: $q_0 \xrightarrow{0} q_1 \xrightarrow{0} q_1 \xrightarrow{1} q_2 \xrightarrow{0} q_1 \xrightarrow{1} q_2$. Since $q_2 \in F$, the string is accepted.

### Example 2: DFA for Strings with Even Number of 1s

Design a DFA over $\Sigma = \{0, 1\}$ where the number of 1s is even.

Let $Q = \{q_{\text{even}}, q_{\text{odd}}\}$. State $q_{\text{even}}$ means an even number of 1s have been seen; $q_{\text{odd}}$ means an odd number. Both states are accepting? No — only $q_{\text{even}}$ accepts.

Transitions: $\delta(q_{\text{even}}, 0) = q_{\text{even}}$, $\delta(q_{\text{even}}, 1) = q_{\text{odd}}$, $\delta(q_{\text{odd}}, 0) = q_{\text{odd}}$, $\delta(q_{\text{odd}}, 1) = q_{\text{even}}$.

This DFA has exactly two states. It illustrates that a DFA must maintain enough memory (as states) to distinguish equivalence classes of strings.

### Example 3: Product Construction

Let $M_1$ accept strings with an even number of 1s (above). Let $M_2$ accept strings ending in 01 (Example 1). Construct $M_\cap$ accepting strings that satisfy both conditions.

The product has $2 \times 3 = 6$ states: $\{q_{\text{even}}, q_{\text{odd}}\} \times \{q_0, q_1, q_2\}$. The start state is $(q_{\text{even}}, q_0)$. Accepting states are $(q_{\text{even}}, q_2)$.

Transition example: $\delta_\cap((q_{\text{even}}, q_0), 1) = (\delta_1(q_{\text{even}}, 1), \delta_2(q_0, 1)) = (q_{\text{odd}}, q_0)$. After "1", parity is odd and no partial match.

### Example 4: DFA with Dead State

Design a DFA over $\Sigma = \{0, 1\}$ accepting strings containing exactly one 1.

States: $q_0$ = no 1s seen yet; $q_1$ = exactly one 1 seen; $q_{\text{dead}}$ = more than one 1 seen.

Transitions: $\delta(q_0, 0) = q_0$, $\delta(q_0, 1) = q_1$, $\delta(q_1, 0) = q_1$, $\delta(q_1, 1) = q_{\text{dead}}$, $\delta(q_{\text{dead}}, 0) = q_{\text{dead}}$, $\delta(q_{\text{dead}}, 1) = q_{\text{dead}}$.

$F = \{q_1\}$. The dead state $q_{\text{dead}}$ ensures the DFA is total — every state has a defined transition for every symbol.

## Summary

- A DFA is a 5-tuple $(Q, \Sigma, \delta, q_0, F)$ with a deterministic transition function.
- The language of a DFA is the set of strings that lead from the start state to an accepting state.
- Regular languages are those recognized by some DFA.
- Complement works by flipping accepting/non-accepting states (requires total $\delta$).
- The product construction builds a DFA for the intersection (or union) of two DFA-recognizable languages.
- Dead states complete the transition function and make complement well-defined.

## Exercises

### Review Questions

1. Why must the transition function $\delta$ be defined for every $(q, a) \in Q \times \Sigma$?
2. What is the language accepted by a DFA with $F = \emptyset$? With $F = Q$?
3. Explain why complement works for DFAs but would fail for nondeterministic automata without modification.
4. How many states does the product DFA for three input DFAs have?

### Application Problems

5. Design a DFA over $\Sigma = \{a, b\}$ that accepts strings where every occurrence of "aa" is immediately followed by "b".
6. Design a DFA over $\Sigma = \{0, 1\}$ that accepts strings whose binary value is divisible by 3. (Hint: track the remainder modulo 3.)
7. Use the product construction to build a DFA accepting strings over $\{0, 1\}$ that both have an even number of 0s and have an even number of 1s.
8. Construct the complement of the DFA from Example 1. What language does it accept?

### Challenge Problem

9. Prove that for any DFA with $n$ states, if the DFA accepts some string of length at least $n$, then it accepts infinitely many strings. (Hint: use the pigeonhole principle on the sequence of states visited while reading the string.)
