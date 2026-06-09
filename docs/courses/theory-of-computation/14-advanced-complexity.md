# Chapter 14: Advanced Complexity Theory

## Learning Objectives

By the end of this chapter, you should be able to: define probabilistic complexity classes (RP, BPP, ZPP); define interactive proof systems and IP = PSPACE; define the polynomial hierarchy and its complete problems; understand circuit complexity and P/poly; describe approximation complexity classes and the PCP theorem; understand the relationships between these advanced classes.

## Theory

### Randomized Computation

A **probabilistic Turing machine** (PTM) is a nondeterministic TM where each nondeterministic choice is made with probability $1/2$ (by flipping a fair coin). The machine has probabilistic acceptance criteria:

**RP (Randomized Polynomial Time)**: $L \in RP$ if there exists a PTM $M$ running in polynomial time such that:
- If $w \in L$: $Pr[M \text{ accepts } w] \geq 1/2$
- If $w \notin L$: $Pr[M \text{ accepts } w] = 0$

RP has **one-sided error**: false negatives are possible, but false positives are not. By running $k$ independent trials, the error probability can be reduced to $(1/2)^k$.

**coRP**: $L \in coRP$ if $\overline{L} \in RP$. One-sided error on false positives.

**BPP (Bounded-error Probabilistic Polynomial Time)**: $L \in BPP$ if there exists a PTM $M$ such that:
- If $w \in L$: $Pr[M \text{ accepts } w] \geq 2/3$
- If $w \notin L$: $Pr[M \text{ accepts } w] \leq 1/3$

BPP has **two-sided error**. By the Chernoff bound, the error can be made exponentially small ($2^{-k}$) with polynomially many repetitions.

**ZPP (Zero-error Probabilistic Polynomial Time)**: $L \in ZPP$ if there exists a PTM that always gives the correct answer and runs in expected polynomial time. Equivalently, $ZPP = RP \cap coRP$.

**Relationships**: $P \subseteq ZPP \subseteq RP \subseteq BPP \subseteq PSPACE$

It is widely believed that $BPP = P$ (derandomization hypothesis), supported by results like Impagliazzo-Wigderson (if $P \neq NP$, then $BPP = P$).

### Interactive Proofs

An **interactive proof system** consists of a prover $P$ (computationally unbounded) and a verifier $V$ (polynomial-time randomized) who exchange messages. The prover tries to convince the verifier of a statement's truth.

**Definition**: $L \in IP$ if there exists a verifier $V$ such that:
- **Completeness**: If $w \in L$, there exists a prover strategy such that $V$ accepts with probability $\geq 2/3$.
- **Soundness**: If $w \notin L$, for any prover strategy (cheating), $V$ accepts with probability $\leq 1/3$.

**Theorem 14.1 (IP = PSPACE)**: The class of languages with interactive proof systems equals PSPACE.

**Proof sketch**: ($PSPACE \subseteq IP$): The key construction is for TQBF. The prover recursively provides the values of quantified subformulas; the verifier checks consistency using algebraic methods (polynomial encoding via **arithmetization** — replacing Boolean operations with arithmetic over a finite field). The soundness proof uses the Schwartz-Zippel lemma for polynomial identity testing.

($IP \subseteq PSPACE$): A PSPACE machine can simulate all possible prover strategies by evaluating the game tree of interactions, using the fact that the optimal prover strategy can be computed by alternating quantifiers. $\square$

**AM (Arthur-Merlin)**: A variant where the verifier's messages are only random coins (public coins). $AM = IP$ for constant-round protocols. It is known that $AM = BP \cdot NP$ (randomized analog of NP).

### The Polynomial Hierarchy

The **polynomial hierarchy** (PH) is an extension of $P$ and $NP$ using alternating quantifiers:

- $\Sigma_0^p = \Pi_0^p = P$
- $\Sigma_1^p = NP$ (exists a witness)
- $\Pi_1^p = coNP$ (for all witnesses)
- $\Sigma_2^p = NP^{NP}$ (exists a witness, verified by an NP oracle)
- $\Pi_2^p = coNP^{NP}$

In general, $\Sigma_{k+1}^p = NP^{\Sigma_k^p}$ and $\Pi_{k+1}^p = coNP^{\Sigma_k^p}$.

Alternatively, using quantifiers:
- $L \in \Sigma_k^p$ if there exists a polynomial-time predicate $R$ such that:
  $x \in L \iff \exists y_1 \forall y_2 \cdots Q y_k \, R(x, y_1, \ldots, y_k)$
  where the quantifiers alternate starting with $\exists$.

- $L \in \Pi_k^p$ if the outermost quantifier is $\forall$.

**Definition**: $PH = \bigcup_{k \geq 0} \Sigma_k^p$

If $NP = coNP$, then $PH$ collapses to $NP = \Sigma_1^p = \Pi_1^p$. If $P = NP$, then $PH = P$. It is believed that $PH$ does not collapse.

### Circuit Complexity

A **Boolean circuit** is a directed acyclic graph where:
- Input nodes (no incoming edges) represent variables $x_1, \ldots, x_n$.
- Gate nodes (AND, OR, NOT) compute Boolean functions.
- Output nodes produce the result.

The **size** of a circuit is the number of gates; the **depth** is the longest path from input to output.

**Definition**: $P/poly$ is the class of languages decidable by polynomial-size Boolean circuits. Equivalently, $P/poly$ is the class of languages that can be decided in polynomial time with polynomial advice (a string that depends only on the input length).

**Theorem 14.2 (Karp-Lipton)**: If $NP \subseteq P/poly$, then $PH$ collapses to $\Sigma_2^p$.

**NC (Nick's Class)**: Problems solvable by circuits with polynomial size and polylogarithmic depth. $NC$ represents efficiently parallelizable problems. $$NC = \bigcup_{k \geq 0} NC^k$$ where $NC^k$ circuits have depth $O(\log^k n)$.

**Relationship**: $NC \subseteq P \subseteq NP$. It is an open question whether $NC = P$ (i.e., whether all polynomial-time problems are efficiently parallelizable).

### Approximation and the PCP Theorem

**Definition**: $APX$ is the class of optimization problems for which there exists a polynomial-time approximation algorithm with a constant factor guarantee.

**Example**: The optimization version of VERTEX-COVER is in APX: a simple greedy algorithm achieves a 2-approximation.

**Theorem 14.3 (PCP Theorem)**: $NP = PCP(O(\log n), O(1))$. That is, every NP problem can be verified by a proof that is accessed at only a constant number of randomly chosen bits, using $O(\log n)$ random bits.

The PCP theorem implies that many NP optimization problems do not have polynomial-time approximation schemes unless $P = NP$. For example, MAX-3SAT (maximizing satisfied clauses in a 3-CNF formula) cannot be approximated within $7/8 + \epsilon$ for any $\epsilon > 0$ unless $P = NP$.

The PCP theorem's proof is highly involved, building on the **proof composition** paradigm and algebraic encoding of computations.

## Examples

### Example 1: Primality Testing — coRP

Miller-Rabin primality testing is in coRP (and in fact in P since 2002 via AKS). To test if $n$ is prime:

- If $n$ is prime, the test always says "prime."
- If $n$ is composite, the test detects compositeness with probability $\geq 1/2$ (the Miller-Rabin witness).

Repeating $k$ times reduces the error for composite $n$ to $2^{-k}$.

### Example 2: Graph Isomorphism — AM

Graph Isomorphism ($GI$) is not known to be in $P$ or NP-complete. It is in $NP$ and also in $coAM$, meaning there is an interactive proof for non-isomorphism:

- Prover claims $G_1 \not\cong G_2$.
- Verifier randomly permutes one of the two graphs and asks the prover which one it came from.
- If $G_1 \not\cong G_2$, the prover can answer correctly with probability 1.
- If $G_1 \cong G_2$, the prover can only guess with probability $1/2$.

This gives an $AM$ protocol for $coNP$-like statements, showing $GI \in NP \cap coAM$.

### Example 3: PH Collapse

Suppose $NP = coNP$. Then $\Sigma_2^p = NP^{NP} = NP^{coNP} = NP^{NP} = NP$. So $\Sigma_2^p = NP = coNP = \Pi_2^p$, and by induction $PH = NP$.

## Summary

- RP, BPP, ZPP capture randomized polynomial time with different error behaviors.
- IP = PSPACE, showing interaction plus randomness is surprisingly powerful.
- The polynomial hierarchy extends NP through alternating quantifiers.
- P/poly captures non-uniform polynomial computation (circuits with advice).
- The PCP theorem characterizes NP as verifiable with constant query complexity.
- Many open questions about the relationships between these classes remain unresolved.

## Exercises

### Review Questions

1. Explain the difference between RP and BPP in terms of error types.
2. Why does IP = PSPACE imply that IP protocols exist for problems not known to be in NP?
3. What would it mean for the polynomial hierarchy to collapse?
4. Explain why BPP is contained in PSPACE.

### Application Problems

5. Show that BPP is closed under complement.
6. Prove that $NP \subseteq P/poly$ would have surprising consequences using Karp-Lipton.
7. Show that the problem of deciding whether a Boolean formula has exactly one satisfying assignment (UNIQUE-SAT) is in $NP$ but not known to be NP-complete.
8. Prove that $AM \subseteq \Pi_2^p$.

### Challenge Problem

9. Study the **approximation algorithm for MAX-CUT** (the Goemans-Williamson algorithm using semidefinite programming). Show that MAX-CUT is in APX with a $0.878$-approximation factor, and that this is optimal under the Unique Games Conjecture.
