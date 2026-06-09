# Chapter 11: Reducibility and the Arithmetical Hierarchy

## Learning Objectives

By the end of this chapter, you should be able to: distinguish mapping reductions from Turing reductions; define complete problems for RE; understand the structure of the arithmetical hierarchy; describe oracle machines and their use in relativized computation; state Post's problem and its resolution; compute Turing degrees.

## Theory

### Mapping Reductions

A **mapping reduction** (many-one reduction) from $A$ to $B$ is a computable function $f : \Sigma^* \to \Sigma^*$ such that:

$$w \in A \iff f(w) \in B$$

We write $A \leq_m B$. If $A \leq_m B$ and $B$ is decidable, then $A$ is decidable. If $A$ is undecidable and $A \leq_m B$, then $B$ is undecidable.

Mapping reductions preserve both decidability and recognizability:
- If $A \leq_m B$ and $B$ is RE, then $A$ is RE.
- If $A \leq_m B$ and $B$ is co-RE, then $A$ is co-RE.

The halting problem maps to $A_{\text{TM}}$: $\text{HALT}_{\text{TM}} \leq_m A_{\text{TM}}$ via the function that converts $\langle M, w \rangle$ to $\langle M', w \rangle$ where $M'$ simulates $M$ and accepts if $M$ halts (regardless of outcome).

### Turing Reductions

A **Turing reduction** from $A$ to $B$, written $A \leq_T B$, means there is an algorithm that decides $A$ using an oracle for $B$ (i.e., a subroutine that answers membership queries in $B$).

Turing reductions are more general than mapping reductions. While every mapping reduction is a Turing reduction, the converse does not hold: a problem and its complement are Turing-equivalent ($A \leq_T \overline{A}$ and $\overline{A} \leq_T A$) but may not be many-one equivalent.

**Theorem 11.1**: If $A \leq_m B$, then $A \leq_T B$. The converse is not true.

**Proof**: The mapping reduction $f$ can be used as a subroutine: given $w$, compute $f(w)$ and query the oracle for $B$. To see the converse fails, note that $A_{\text{TM}} \leq_T \overline{A_{\text{TM}}}$ (just flip the answer), but $A_{\text{TM}} \not\leq_m \overline{A_{\text{TM}}}$ because $A_{\text{TM}}$ is RE while $\overline{A_{\text{TM}}}$ is not. $\square$

### Complete Problems for RE

A language $L$ is **RE-complete** if:
1. $L \in$ RE.
2. For every $A \in$ RE, $A \leq_m L$.

$A_{\text{TM}}$ is RE-complete. To see this, for any RE language $A$, there is a TM $M$ with $L(M) = A$. The reduction maps $w$ to $\langle M, w \rangle$: $w \in A \iff \langle M, w \rangle \in A_{\text{TM}}$.

Other RE-complete problems:
- $\text{HALT}_{\text{TM}}$
- $E_{\text{TM}}$ (complement is RE-complete)
- PCP (Post Correspondence Problem)
- The validity problem for first-order logic

### Post's Problem and Its Resolution

**Post's problem** (1944): Is there a recursively enumerable set that is neither recursive nor RE-complete? That is, is there an intermediate Turing degree between $\mathbf{0}$ (decidable) and $\mathbf{0}'$ (complete RE)?

This problem was open for over a decade. It was solved independently by Friedberg and Muchnik in 1956-57 using **priority arguments**:

**Theorem 11.2 (Friedberg-Muchnik)**: There exists an RE set $A$ such that $A$ is neither recursive nor Turing-equivalent to $A_{\text{TM}}$.

**Proof sketch**: Construct $A$ in stages by satisfying an infinite list of requirements:
- $R_{2e}$: $A \neq L(M_e)$ for any TM $M_e$ (ensuring $A$ is not recursive).
- $R_{2e+1}$: $A_{\text{TM}} \not\leq_T A$ via oracle TM $\Phi_e$ (ensuring $A$ is not complete).

Priority: odd-numbered requirements have higher priority than even-numbered ones. When requirements conflict, higher-priority ones are satisfied first. This priority method became a fundamental technique in recursion theory. $\square$

### Oracle Machines

An **oracle Turing machine** (OTM) is a TM with an additional oracle tape and three special states $q_?, q_{\text{yes}}, q_{\text{no}}$. When the OTM enters $q_?$, it asks the oracle whether the string on the oracle tape is in the oracle set $B$, and transitions to $q_{\text{yes}}$ or $q_{\text{no}}$ accordingly.

We write $M^B$ to denote an OTM with oracle $B$. The class of languages decidable by $M^B$ is denoted $P^B$, $NP^B$, etc., giving relativized complexity classes.

### The Arithmetical Hierarchy

The **arithmetical hierarchy** classifies sets of natural numbers by the complexity of their defining formulas:

- $\Sigma_1$: sets definable by $\exists y \, P(x, y)$ where $P$ is recursive. Example: $A_{\text{TM}}$ is $\Sigma_1$.
- $\Pi_1$: sets definable by $\forall y \, P(x, y)$. Example: $\overline{A_{\text{TM}}}$ is $\Pi_1$.
- $\Sigma_{n+1}$: $\exists y_1 \forall y_2 \cdots Q y_{n+1} \, P(x, y_1, \ldots, y_{n+1})$ with $n+1$ alternating quantifiers starting with $\exists$.
- $\Pi_{n+1}$: $\forall y_1 \exists y_2 \cdots Q y_{n+1} \, P(x, y_1, \ldots, y_{n+1})$ starting with $\forall$.

Properties:
- $\Delta_n = \Sigma_n \cap \Pi_n$
- $\Delta_1 = $ recursive sets
- $\Sigma_1 = $ RE sets
- $\Pi_1 = $ co-RE sets
- The hierarchy is proper: $\Sigma_n \subsetneq \Sigma_{n+1}$ and $\Pi_n \subsetneq \Pi_{n+1}$

**Theorem 11.3**: For every $n$, there is a $\Sigma_n$-complete set and a $\Pi_n$-complete set.

The $n$th jump of the halting problem, $\emptyset^{(n)}$, is $\Sigma_n$-complete. For example, $\emptyset' = A_{\text{TM}}$ is $\Sigma_1$-complete, $\emptyset''$ (the halting problem relative to $\emptyset'$) is $\Sigma_2$-complete, and so on.

## Examples

### Example 1: Mapping Reduction

Reduce $A_{\text{TM}}$ to $\text{HALT}_{\text{TM}}$.

Given $\langle M, w \rangle$, construct $M'$ that on input $x$:
1. Simulate $M$ on $x$.
2. If $M$ accepts $x$, accept.
3. If $M$ rejects $x$, enter an infinite loop.

Then $M$ accepts $w$ iff $M'$ halts on $w$ (since $M'$ only loops if $M$ rejects). So $\langle M, w \rangle \in A_{\text{TM}} \iff \langle M', w \rangle \in \text{HALT}_{\text{TM}}$.

### Example 2: Post's Problem Intuition

The Friedberg-Muchnik construction works by diagonalization with finite injury. At stage $s$, partially enumerate $A$. When a requirement $R_{2e+1}$ is injured (an element enters $A$ that threatens the correctness of $\Phi_e$), the construction adjusts. The priority ordering ensures that only finitely many requirements are injured infinitely often, and all requirements are eventually satisfied.

### Example 3: Arithmetical Hierarchy — Infinitely Many Accepting Strings

Define $INF_{\text{TM}} = \{ \langle M \rangle \mid L(M) \text{ is infinite} \}$.

A TM accepts infinitely many strings iff:
For every $n$, there exists a string $w$ with $|w| > n$ such that $M$ accepts $w$ within some number of steps.

This requires quantifier alternation: $\forall n \, \exists w, t \, (\text{either } |w| > n \text{ and } M \text{ accepts } w \text{ in } t \text{ steps})$.

So $INF_{\text{TM}}$ is $\Pi_2$-complete (universal over $n$, existential over $w$ and $t$). It is not RE or co-RE.

## Summary

- Mapping reductions $A \leq_m B$ preserve decidability and recognizability.
- Turing reductions $A \leq_T B$ are more liberal and generate equivalence classes called Turing degrees.
- $A_{\text{TM}}$ is RE-complete via mapping reductions.
- Post's problem asked whether intermediate RE degrees exist; Friedberg-Muchnik solved it using priority arguments.
- Oracle machines relativize computation by allowing external queries.
- The arithmetical hierarchy classifies undecidable sets by quantifier complexity.
- Each level $\Sigma_n$ and $\Pi_n$ has complete problems via jump operators.

## Exercises

### Review Questions

1. What is the difference between $A \leq_m B$ and $A \leq_T B$?
2. Why is $A_{\text{TM}}$ RE-complete but not $\Pi_1$-complete?
3. What did Friedberg and Muchnik prove, and why was it surprising?
4. Describe the arithmetical hierarchy. Where does the emptyness problem for TMs ($E_{\text{TM}}$) sit in it?

### Application Problems

5. Show that $E_{\text{TM}} = \{ \langle M \rangle \mid L(M) = \emptyset \}$ is $\Pi_1$-complete.
6. Show that $EQ_{\text{TM}} = \{ \langle M_1, M_2 \rangle \mid L(M_1) = L(M_2) \}$ is $\Pi_2$-complete.
7. Prove that $INF_{\text{TM}}$ is not RE and not co-RE.
8. Construct a mapping reduction from $\overline{A_{\text{TM}}}$ to $E_{\text{TM}}$.

### Challenge Problem

9. Prove that if $A \leq_m B$ and $B$ is RE, then $A$ is RE. Use this to show that if $A \leq_m B$ and $A$ is not RE, then $B$ is not RE. Then find a language that is $\Sigma_2$-complete and prove it.
