# Chapter 2: Nondeterministic Finite Automata

## Learning Objectives

By the end of this chapter, you should be able to: define an NFA formally; explain nondeterminism as the ability to be in multiple states simultaneously; design NFAs that exploit nondeterminism for succinct representations; convert NFAs to equivalent DFAs via the subset construction; handle epsilon transitions; prove that NFA and DFA recognize exactly the same class of languages.

## Theory

### Formal Definition of NFA

A **nondeterministic finite automaton** (NFA) is a 5-tuple

$$N = (Q, \Sigma, \delta, q_0, F)$$

where:

- $Q$ is a finite set of states
- $\Sigma$ is a finite alphabet
- $\delta : Q \times (\Sigma \cup \{\epsilon\}) \to \mathcal{P}(Q)$ is the transition function (where $\mathcal{P}(Q)$ is the power set of $Q$)
- $q_0 \in Q$ is the start state
- $F \subseteq Q$ is the set of accepting states

The critical difference from a DFA is that $\delta(q, a)$ returns a **set** of possible next states (possibly empty). The NFA may also follow transitions labeled $\epsilon$ without consuming any input.

### Extended Transition and Language

For an NFA, we first define the **epsilon-closure** of a state $q$: the set of states reachable from $q$ by following zero or more $\epsilon$-transitions. Formally:

$$ECLOSE(q) = \{ p \in Q \mid q \xrightarrow{\epsilon^*} p \}$$

where $q \xrightarrow{\epsilon^*} p$ means there is a path from $q$ to $p$ consisting entirely of $\epsilon$-transitions.

The extended transition function for NFAs is defined iteratively: after reading string $w$, the NFA is in a set of states. We extend $\delta$ to $\hat{\delta} : Q \times \Sigma^* \to \mathcal{P}(Q)$:

- $\hat{\delta}(q, \epsilon) = ECLOSE(q)$
- $\hat{\delta}(q, a) = \bigcup_{p \in ECLOSE(q)} ECLOSE(\delta(p, a))$ for single symbol $a$
- For strings: $\hat{\delta}(q, wa) = \bigcup_{p \in \hat{\delta}(q, w)} \hat{\delta}(p, a)$

An NFA **accepts** $w$ if $\hat{\delta}(q_0, w) \cap F \neq \emptyset$ — at least one computational path ends in an accepting state.

### Why Nondeterminism?

Nondeterminism is a conceptual tool, not a physical one. NFAs are generally easier to design than DFAs for many languages because the designer can "guess" the right choice and then verify. For example, an NFA for strings containing the substring "010" can simply "guess" where the substring starts and then check, without tracking all possible partial matches explicitly.

### Epsilon Transitions

An $\epsilon$-transition allows the automaton to change state without reading input. This is useful for:
- Connecting automata without requiring input between them
- Modeling optional components
- Simplifying constructions (e.g., union of two automata)

### NFA to DFA: The Subset Construction

**Theorem 2.1**: For every NFA $N$, there exists a DFA $D$ such that $L(D) = L(N)$.

**Proof (construction)**: Let $N = (Q_N, \Sigma, \delta_N, q_0, F_N)$. Define $D = (Q_D, \Sigma, \delta_D, q_D, F_D)$ where:

- $Q_D = \mathcal{P}(Q_N)$ — each DFA state is a set of NFA states
- $q_D = ECLOSE(q_0)$
- For $S \subseteq Q_N$ and $a \in \Sigma$: $\delta_D(S, a) = \bigcup_{q \in S} \bigcup_{r \in \delta_N(q, a)} ECLOSE(r)$
- $F_D = \{ S \subseteq Q_N \mid S \cap F_N \neq \emptyset \}$

The DFA state $\delta_D(S, a)$ represents exactly the set of NFA states reachable from any state in $S$ by reading $a$ (including epsilon closures afterward). Induction on string length shows $\hat{\delta}_D(q_D, w) = \hat{\delta}_N(q_0, w)$, so acceptance coincides. $\square$

The subset construction can produce up to $2^{|Q_N|}$ DFA states. In practice, many subsets are unreachable from the start state, so we only construct reachable states.

### Equivalence of NFA and DFA

**Corollary**: The class of languages recognized by NFAs is exactly the class of regular languages (recognized by DFAs). NFAs add no expressive power — only conciseness.

## Examples

### Example 1: NFA for Strings Ending with "010"

Design an NFA over $\Sigma = \{0, 1\}$ that accepts strings ending with "010".

We can use nondeterminism to guess the start of the pattern: define $q_0$ (stay in $q_0$ reading anything), $\delta(q_0, 0) = \{q_0, q_1\}$ (guess the pattern starts here), $q_1 \xrightarrow{1} q_2$, $q_2 \xrightarrow{0} q_3$ (accept). Formally:

$\delta(q_0, 0) = \{q_0, q_1\}$, $\delta(q_0, 1) = \{q_0\}$
$\delta(q_1, 1) = \{q_2\}$
$\delta(q_2, 0) = \{q_3\}$
All other transitions go to $\emptyset$.

$F = \{q_3\}$. This NFA has 4 states vs. 4 states for a DFA (similar here, but many patterns are exponentially more compact).

### Example 2: NFA with Epsilon Transitions

Design an NFA over $\{a, b\}$ accepting strings that contain either "aa" or "bb".

Use an $\epsilon$-transition to branch into two parallel sub-automata: one looking for "aa", one for "bb".

$q_0 \xrightarrow{\epsilon} q_1$ and $q_0 \xrightarrow{\epsilon} q_2$. From $q_1$: $\delta(q_1, a) = q_3$, $\delta(q_3, a) = q_4$ (accept). From $q_2$: $\delta(q_2, b) = q_5$, $\delta(q_5, b) = q_6$ (accept). $\epsilon$-transitions let us fork without consuming input.

### Example 3: Subset Construction

Convert the NFA from Example 1 to a DFA.

Start state subset: $ECLOSE(q_0) = \{q_0\}$.
On 0: $\delta_D(\{q_0\}, 0) = ECLOSE(\delta(q_0, 0)) = ECLOSE(\{q_0, q_1\}) = \{q_0, q_1\}$.
On 1: $\delta_D(\{q_0\}, 1) = ECLOSE(\delta(q_0, 1)) = ECLOSE(\{q_0\}) = \{q_0\}$.

From $\{q_0, q_1\}$:
- On 0: $\delta(q_0, 0) \cup \delta(q_1, 0) = \{q_0, q_1\} \cup \emptyset = \{q_0, q_1\}$. ECLOSE gives $\{q_0, q_1\}$.
- On 1: $\delta(q_0, 1) \cup \delta(q_1, 1) = \{q_0\} \cup \{q_2\} = \{q_0, q_2\}$.

Continue until all reachable subsets are found. The accepting subsets are those containing $q_3$. The result is a DFA with at most 4 reachable states.

## Summary

- NFAs generalize DFAs by allowing $\delta(q, a)$ to return a set of states.
- Epsilon transitions allow state changes without consuming input.
- An NFA accepts a string if **some** computational path leads to an accepting state.
- The subset construction converts any NFA to an equivalent DFA, proving that NFAs and DFAs recognize the same class (regular languages).
- NFAs can be exponentially more concise than DFAs for some languages.
- Nondeterminism is a design convenience, not a physical capability — real computers are deterministic.

## Exercises

### Review Questions

1. Explain why $\delta(q, a) = \emptyset$ is permitted in an NFA but not in a DFA.
2. What is the epsilon-closure of a state with no outgoing epsilon transitions?
3. Why does the subset construction potentially produce $2^{|Q_N|}$ DFA states?
4. Can an NFA have more accepting states than its equivalent minimal DFA? Explain.

### Application Problems

5. Design an NFA over $\{0, 1\}$ that accepts strings where the third-to-last symbol is 1. (This language requires an exponential DFA — $2^n$ states — but only $n+1$ NFA states.)
6. Convert the NFA from problem 5 to a DFA using the subset construction. How many reachable states do you get?
7. Design an NFA with $\epsilon$-transitions for the language $\{ w \in \{a, b, c\}^* \mid w \text{ contains } "abc" \text{ or } "cba" \}$.
8. Convert the NFA from Example 2 to a DFA.

### Challenge Problem

9. Prove that there exists a language $L_n$ over $\{0, 1\}$ such that any DFA for $L_n$ needs at least $2^n$ states, but there is an NFA for $L_n$ with $O(n)$ states. (Hint: consider the language of strings where the $n$th-to-last symbol is 1.)
