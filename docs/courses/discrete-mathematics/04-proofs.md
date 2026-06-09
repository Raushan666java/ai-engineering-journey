# Chapter 4: Proof Techniques

## Learning Objectives

After completing this chapter, you will be able to:

- Construct direct proofs of conditional statements
- Write proofs by contrapositive
- Use proof by contradiction
- Apply mathematical induction and strong induction
- Disprove statements with counterexamples
- Select the appropriate proof technique for a given statement

## Theory

### 4.1 Direct Proof

A **direct proof** of $P \implies Q$ assumes $P$ is true and uses logical reasoning, definitions, and known theorems to derive $Q$.

**Theorem 4.1.** If $n$ is an even integer, then $n^2$ is even.

*Proof.* Let $n$ be an even integer. Then $n = 2k$ for some integer $k$. Then $n^2 = (2k)^2 = 4k^2 = 2(2k^2)$, which is even. $\square$

### 4.2 Proof by Contrapositive

The **contrapositive** of $P \implies Q$ is $\neg Q \implies \neg P$. Since they are logically equivalent, proving the contrapositive proves the original statement.

**Theorem 4.2.** If $n^2$ is odd, then $n$ is odd.

*Proof.* We prove the contrapositive: if $n$ is even, then $n^2$ is even. This is Theorem 4.1 above. $\square$

### 4.3 Proof by Contradiction

A proof by contradiction assumes the negation of the statement to be proved and derives a logical contradiction ($F \equiv \text{false}$). This shows the original statement must be true.

**Theorem 4.3.** $\sqrt{2}$ is irrational.

*Proof.* Assume, for contradiction, that $\sqrt{2}$ is rational. Then $\sqrt{2} = a/b$ where $a, b \in \mathbb{Z}$, $b \neq 0$, and $\gcd(a,b) = 1$ (fraction in lowest terms). Squaring gives $2 = a^2 / b^2$, so $a^2 = 2b^2$. Thus $a^2$ is even, so $a$ is even. Write $a = 2k$. Then $(2k)^2 = 2b^2 \implies 4k^2 = 2b^2 \implies b^2 = 2k^2$, so $b^2$ is even and $b$ is even. But then $a$ and $b$ share the factor 2, contradicting $\gcd(a,b) = 1$. Hence $\sqrt{2}$ is irrational. $\square$

**Theorem 4.4.** There are infinitely many primes.

*Proof.* Assume, to the contrary, that there are finitely many primes $p_1, p_2, \ldots, p_k$. Consider $N = p_1 p_2 \cdots p_k + 1$. Since $N > 1$, $N$ has a prime divisor $p$. But $p$ cannot be any $p_i$ because $N \equiv 1 \pmod{p_i}$ for each $i$. Hence $p$ is a prime not in our list — contradiction. $\square$

### 4.4 Counterexample

To disprove a universally quantified statement $\forall x\; P(x)$, it suffices to find a single element $c$ (a counterexample) for which $P(c)$ is false.

**Example 4.1.** Disprove: "All prime numbers are odd."

*Counterexample.* 2 is prime and not odd. $\square$

### 4.5 Mathematical Induction

**Principle of Mathematical Induction.** Let $P(n)$ be a statement for each integer $n \geq n_0$. If:

1. **Base case:** $P(n_0)$ is true, and
2. **Inductive step:** For all $k \geq n_0$, $P(k) \implies P(k+1)$,

then $P(n)$ is true for all $n \geq n_0$.

**Theorem 4.5.** For all $n \geq 1$, $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$.

*Proof.* **(Base)** $n = 1$: LHS $= 1$, RHS $= 1(2)/2 = 1$. ✓

**(Inductive step)** Assume $\sum_{i=1}^{k} i = \frac{k(k+1)}{2}$. Then:
$$\sum_{i=1}^{k+1} i = \left(\sum_{i=1}^{k} i\right) + (k+1) = \frac{k(k+1)}{2} + (k+1) = \frac{k(k+1) + 2(k+1)}{2} = \frac{(k+1)(k+2)}{2}$$
Thus $P(k) \implies P(k+1)$. By induction, true for all $n \geq 1$. $\square$

### 4.6 Strong Induction

**Principle of Strong Induction.** If:

1. **Base case(s):** $P(n_0), P(n_0+1), \ldots, P(m)$ are true, and
2. **Strong inductive step:** For all $k \geq m$, $P(n_0) \land \cdots \land P(k) \implies P(k+1)$,

then $P(n)$ is true for all $n \geq n_0$.

Strong induction assumes all smaller instances, not just the immediate predecessor.

**Theorem 4.6.** Every integer $n \geq 2$ can be expressed as a product of primes.

*Proof.* **(Base)** $n = 2$ is prime. ✓

**(Strong inductive step)** Assume every integer $2, 3, \ldots, k$ is a product of primes. Consider $k+1$. If $k+1$ is prime, we are done. If $k+1$ is composite, then $k+1 = ab$ where $2 \leq a, b \leq k$. By the inductive hypothesis, $a$ and $b$ are products of primes, so their product $k+1$ is also a product of primes. $\square$

### 4.7 Proof by Cases

Sometimes a statement can be proved by dividing the domain into exhaustive cases and proving each case separately.

**Theorem 4.7.** For any integer $n$, $n^2 \bmod 3$ is either $0$ or $1$ (never $2$).

*Proof.* Every integer can be written as $n = 3k$, $n = 3k+1$, or $n = 3k+2$ (three cases by division algorithm).

- Case 1: $n = 3k \implies n^2 = 9k^2 \equiv 0 \pmod{3}$.
- Case 2: $n = 3k+1 \implies n^2 = 9k^2 + 6k + 1 \equiv 1 \pmod{3}$.
- Case 3: $n = 3k+2 \implies n^2 = 9k^2 + 12k + 4 \equiv 1 \pmod{3}$.

In all cases, $n^2$ is $0$ or $1$ mod $3$. $\square$

### 4.8 Existence Proofs

An **existence proof** demonstrates that $\exists x\; P(x)$ is true. **Constructive** proofs exhibit an explicit $c$ with $P(c)$. **Non-constructive** proofs show existence without producing an example (e.g., by contradiction or pigeonhole principle).

## Examples

**Example 4.2** (Direct proof). Prove that the sum of two odd integers is even.

*Proof.* Let $a = 2k+1$ and $b = 2m+1$ be odd. Then $a+b = 2(k+m+1)$, which is even. $\square$

**Example 4.3** (Contrapositive). Prove: If $5n+2$ is odd, then $n$ is odd.

*Proof.* Contrapositive: If $n$ is even, then $5n+2$ is even. Let $n = 2k$. Then $5(2k)+2 = 10k+2 = 2(5k+1)$, which is even. $\square$

**Example 4.4** (Induction). Prove $2^n \geq n+1$ for all $n \geq 1$.

*Proof.* Base $n=1$: $2^1 = 2 \geq 2$. ✓. Assume $2^k \geq k+1$. Then $2^{k+1} = 2 \cdot 2^k \geq 2(k+1) = 2k+2 \geq k+2$ for $k \geq 1$. So $P(k) \implies P(k+1)$. $\square$

**Example 4.5** (Strong induction). The Fibonacci sequence $F_1 = 1$, $F_2 = 1$, $F_n = F_{n-1} + F_{n-2}$ for $n \geq 3$. Prove $F_n < 2^n$ for all $n \geq 1$.

*Proof.* Base: $F_1 = 1 < 2^1$, $F_2 = 1 < 2^2$. ✓. Assume $F_i < 2^i$ for all $i \leq k$. Then $F_{k+1} = F_k + F_{k-1} < 2^k + 2^{k-1} < 2^k + 2^k = 2^{k+1}$. $\square$

## Summary

- Direct proof: assume hypothesis, derive conclusion.
- Contrapositive: prove $\neg Q \implies \neg P$ instead of $P \implies Q$.
- Contradiction: assume false, derive contradiction.
- Induction: base case + $P(k) \implies P(k+1)$.
- Strong induction: base cases + $P(\text{all smaller}) \implies P(k+1)$.
- Counterexample disproves universal claims.
- Existence proofs can be constructive or non-constructive.

## Exercises

### Review Questions

1. When is a direct proof preferable to a proof by contradiction?
2. State the contrapositive of "If $x$ and $y$ are rational, then $x+y$ is rational."
3. What is the difference between induction and strong induction?
4. How many base cases are needed to prove $F_n > 2^{n/2}$ for Fibonacci?
5. Can a false statement be proved by contradiction? Explain.

### Application Problems

6. Prove by direct proof: The sum of two rational numbers is rational.

7. Prove by contrapositive: If $n^2$ is odd, then $n$ is odd.

8. Prove by contradiction: There is no largest integer.

9. Prove by induction: $1 + 2 + 2^2 + \cdots + 2^n = 2^{n+1} - 1$.

10. Prove by strong induction: Every integer $n \geq 12$ can be written as $4a + 5b$ for nonnegative integers $a, b$.

### Challenge Problem

11. Prove the **Principle of Well-Ordering** (every nonempty set of positive integers has a least element) using induction. Then prove that the well-ordering principle implies the principle of mathematical induction.
