# Chapter 3: Regular Expressions

## Learning Objectives

By the end of this chapter, you should be able to: define regular expressions and their recursive semantics; apply algebraic laws to simplify regular expressions; convert regular expressions to NFAs using Thompson's construction; convert NFAs to regular expressions using state elimination; prove Kleene's theorem equating regular expressions and finite automata; design regular expressions for practical pattern matching.

## Theory

### Definition of Regular Expressions

Let $\Sigma$ be an alphabet. The set of **regular expressions** over $\Sigma$ is defined inductively:

1. $\emptyset$ is a regular expression denoting the empty language.
2. $\epsilon$ is a regular expression denoting $\{\epsilon\}$.
3. For each $a \in \Sigma$, $a$ is a regular expression denoting $\{a\}$.
4. If $R$ and $S$ are regular expressions, then:
   - $(R + S)$ denotes $L(R) \cup L(S)$ (union)
   - $(RS)$ denotes $L(R)L(S) = \{ xy \mid x \in L(R), y \in L(S) \}$ (concatenation)
   - $(R^*)$ denotes $\bigcup_{i \geq 0} L(R)^i$ (Kleene star)
5. Nothing else is a regular expression.

The Kleene star is the reflexive transitive closure under concatenation: $R^* = \epsilon + R + RR + RRR + \cdots$.

### Algebraic Laws

Regular expressions satisfy algebraic identities that aid simplification:

| Law | Expression |
|-----|-----------|
| Union associativity | $(R + S) + T = R + (S + T)$ |
| Union commutativity | $R + S = S + R$ |
| Union identity | $R + \emptyset = R$ |
| Concatenation associativity | $(RS)T = R(ST)$ |
| Concatenation identity | $R\epsilon = \epsilon R = R$ |
| Concatenation annihilator | $R\emptyset = \emptyset R = \emptyset$ |
| Distributivity (left) | $R(S + T) = RS + RT$ |
| Distributivity (right) | $(R + S)T = RT + ST$ |
| Idempotence of star | $(R^*)^* = R^*$ |
| Star identity | $\epsilon^* = \epsilon$ |
| Cross-product | $R^*R^* = R^*$ |
| Star of sum | $(R + S)^* = (R^*S^*)^*$ |

These laws allow algebraic manipulation similar to arithmetic, but with union instead of addition and concatenation instead of multiplication. Note that concatenation is not commutative ($RS \neq SR$ in general).

### Thompson Construction (RE to NFA)

**Theorem 3.1 (Kleene)**: Every regular expression $R$ can be converted to an NFA $N$ with $\epsilon$-transitions such that $L(N) = L(R)$.

**Proof (Thompson construction)**: The construction is structural induction on the expression:

- **Base case $\emptyset$**: NFA with start state and no accepting states.
- **Base case $\epsilon$**: NFA with start state $q_0$ that is also accepting, and no transitions.
- **Base case $a$**: NFA with $q_0 \xrightarrow{a} q_1$, $F = \{q_1\}$.
- **Union $R + S$**: Create a new start state $q$ with $\epsilon$-transitions to the start states of the NFAs for $R$ and $S$. The accepting states are the unions of the accepting states of both.
- **Concatenation $RS$**: Connect the accepting states of $R$ to the start state of $S$ via $\epsilon$-transitions. The accepting states are those of $S$.
- **Kleene star $R^*$**: Add a new start state $q$ (accepting) with $\epsilon$ to the old start state and $\epsilon$ from the old accepting states back to the old start state.

Each construction adds a constant number of states and transitions, so the final NFA has size $O(|R|)$. $\square$

### State Elimination (NFA to RE)

We can convert any DFA (or NFA) to a regular expression via **state elimination**:

1. Add a new start state $s$ with an $\epsilon$-transition to the old start state.
2. Add a new accepting state $t$ with $\epsilon$-transitions from all old accepting states to $t$.
3. Repeatedly eliminate internal states: for state $q$ with incoming label $A$, outgoing label $B$, and self-loop $C$, and a path through $q$ from $p$ to $r$ with label $D$, replace with a direct transition $p \xrightarrow{A C^* B + D} r$.
4. After eliminating all internal states, the remaining single edge from $s$ to $t$ gives the regular expression.

### DFA to RE via Transitive Closure

An alternative method uses the **transitive closure** formulation. Let $R_{ij}^{(k)}$ be the set of strings that take the DFA from state $i$ to state $j$ using only intermediate states from $\{1, \ldots, k\}$. Then:

$$R_{ij}^{(0)} = \{ a \in \Sigma \mid \delta(q_i, a) = q_j \} \cup (\{ \epsilon \} \text{ if } i = j)$$
$$R_{ij}^{(k)} = R_{ij}^{(k-1)} + R_{ik}^{(k-1)} (R_{kk}^{(k-1)})^* R_{kj}^{(k-1)}$$

The language of the DFA is $\bigcup_{q_j \in F} R_{1j}^{(n)}$ where $n = |Q|$ and $q_1$ is the start state.

## Examples

### Example 1: Design a Regular Expression

Find a regular expression for binary strings containing an even number of 0s.

Let $E$ denote strings with even zeros, $O$ denote strings with odd zeros. We can write equations:

$E = \epsilon + 1^* + E$ actually we need a systematic approach.

Observation: Any string with an even number of 0s consists of blocks of 1s separated by pairs of 0s. So: $(1^* 0 1^* 0 1^*)^*$ — but this misses the case of zero pairs. The complete expression is $(1^* + 1^* 0 1^* 0 1^*)^*$ which simplifies to $(1^* 0 1^* 0 1^*)^*$.

Alternatively: $(00 + 1)^*$ also works, since any string of 0s and 1s with even zeros can be formed.

### Example 2: Thompson Construction

Build an NFA for $(0 + 1)^* 01$.

First construct $0$ and $1$ as base NFAs. Take their union for $0 + 1$. Apply Kleene star to get $(0 + 1)^*$. Concatenate with $0$, then with $1$.

The resulting NFA has $\epsilon$-transitions structuring the operations. After applying the subset construction, we get the DFA from Chapter 1, Example 1.

### Example 3: State Elimination

Take the DFA for binary strings ending in 01 (Example 1, Chapter 1). Convert to a regular expression.

States: $q_0$ (start), $q_1$, $q_2$ (accept). Add $s$ and $t$.

Transitions (as generalized NFA):
$s \xrightarrow{\epsilon} q_0$
$q_2 \xrightarrow{\epsilon} t$

Edges between states with labels:
$q_0 \xrightarrow{0} q_1$, $q_0 \xrightarrow{1} q_0$
$q_1 \xrightarrow{0} q_1$, $q_1 \xrightarrow{1} q_2$
$q_2 \xrightarrow{0} q_1$, $q_2 \xrightarrow{1} q_0$

Eliminate $q_1$:
- $q_0 \xrightarrow{0} q_1$ and $q_1 \xrightarrow{1} q_2$ with $q_1$ self-loop $0$ gives $q_0 \xrightarrow{0(0)^*1} q_2$.
- $q_0 \xrightarrow{0} q_1$ and $q_1 \xrightarrow{0} q_1$ gives $q_0 \xrightarrow{0(0)^*0} q_1$ (self loop on $q_0$).

Eliminate $q_2$ and $q_0$ eventually yields $(0 + 1)^*01$, which is the expected expression.

## Summary

- Regular expressions provide an algebraic notation for regular languages.
- Thompson construction systematically converts any RE to an NFA in $O(|R|)$ size.
- State elimination converts any NFA/DFA to a regular expression.
- Kleene's theorem establishes the equivalence of regular expressions, DFAs, and NFAs.
- Algebraic laws allow simplification and manipulation of REs.
- Regular expressions are the foundation of pattern matching in programming languages and tools like `grep`, `sed`, and lexical analyzers.

## Exercises

### Review Questions

1. Show that $\emptyset^* = \epsilon$.
2. Prove $R + RS^* = RS^*$ using algebraic laws.
3. What language does $(a^* b^*)^*$ denote?
4. Explain why Thompson construction introduces epsilon transitions.

### Application Problems

5. Find a regular expression for binary strings that do not contain two consecutive 0s.
6. Convert $(a + b)^* a (a + b)^*$ to an NFA using Thompson construction.
7. Derive a regular expression for the DFA that accepts strings over $\{0, 1\}$ with exactly two 1s.
8. Use state elimination to convert the DFA from Exercise 5 of Chapter 1 to a regular expression.

### Challenge Problem

9. Prove that the language of balanced parentheses (Dyck language) is **not** regular. Then show that the language of prefixes of balanced parentheses **is** regular by designing a DFA. Explain the difference.
