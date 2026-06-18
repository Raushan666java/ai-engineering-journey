# Chapter 5: Combinatorics

## Learning Objectives

After completing this chapter, you will be able to:

- Apply the sum and product rules of counting
- Compute permutations and combinations
- Use the binomial theorem to expand $(x+y)^n$
- Apply the pigeonhole principle with generalizations
- Count arrangements with repetitions and constraints

## Theory

![Combinatorics Overview](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/discrete-mathematics/05-combinatorics.png)

### 5.1 Fundamental Counting Principles

**Sum Rule (Rule of Disjunction).** If task A can be done in $m$ ways and task B in $n$ ways, and the two tasks cannot be done simultaneously, then there are $m + n$ ways to do either A or B.

**Product Rule (Rule of Sequence).** If a task consists of two independent steps, step 1 in $m$ ways and step 2 in $n$ ways, then the whole task can be done in $m \cdot n$ ways.

**Principle of Inclusion-Exclusion (for two sets).** $|A \cup B| = |A| + |B| - |A \cap B|$.

### 5.2 Permutations

A **permutation** of $n$ distinct elements is an ordered arrangement of them. The number of permutations of $n$ elements taken $r$ at a time (ordered, without repetition) is:
$$P(n, r) = \frac{n!}{(n-r)!} = n(n-1)(n-2)\cdots(n-r+1)$$

When repetition is allowed, the number is $n^r$.

### 5.3 Combinations

A **combination** of $n$ elements taken $r$ at a time is an unordered selection (subset). The number is:
$$\binom{n}{r} = C(n, r) = \frac{n!}{r!(n-r)!}$$

**Theorem 5.1 (Properties of binomial coefficients).**
- $\binom{n}{r} = \binom{n}{n-r}$ (symmetry)
- $\binom{n}{0} = \binom{n}{n} = 1$
- $\binom{n}{1} = n$
- **Pascal's identity:** $\binom{n}{r} + \binom{n}{r-1} = \binom{n+1}{r}$ for $1 \leq r \leq n$

### 5.4 The Binomial Theorem

**Theorem 5.2 (Binomial Theorem).** For any integers $n \geq 0$ and real numbers $x, y$:
$$(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k$$

*Corollary.* $\sum_{k=0}^{n} \binom{n}{k} = 2^n$ (set $x = y = 1$).

*Corollary.* $\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$ (set $x = 1$, $y = -1$).

### 5.5 Pigeonhole Principle

**Theorem 5.3 (Pigeonhole Principle).** If $n$ items are placed into $m$ boxes and $n > m$, then at least one box contains at least two items.

**Generalized Pigeonhole Principle.** If $N$ items are placed into $k$ boxes, then at least one box contains at least $\lceil N/k \rceil$ items.

**Theorem 5.4 (ErdÅ‘sâ€“Szekeres).** Any sequence of $n^2 + 1$ distinct real numbers contains an increasing or decreasing subsequence of length $n + 1$.

### 5.6 Permutations with Repetition

The number of distinct permutations of $n$ objects where there are $n_1$ of type 1, $n_2$ of type 2, ..., $n_k$ of type $k$ (with $n_1 + \cdots + n_k = n$) is:
$$\frac{n!}{n_1!\, n_2! \,\cdots\, n_k!}$$

### 5.7 Combinations with Repetition

The number of ways to choose $r$ items from $n$ types with unlimited repetition (stars and bars) is:
$$\binom{n + r - 1}{r}$$

### 5.8 Inclusion-Exclusion Principle (General)

For $n$ finite sets $A_1, A_2, \ldots, A_n$:
$$\left|\bigcup_{i=1}^{n} A_i\right| = \sum_{i} |A_i| - \sum_{i<j} |A_i \cap A_j| + \sum_{i<j<k} |A_i \cap A_j \cap A_k| - \cdots + (-1)^{n+1} |A_1 \cap \cdots \cap A_n|$$

## Examples

**Example 5.1** (Product rule). How many 6-character passwords using lowercase letters and digits?

*Solution.* $36^6$ (36 choices per position, 6 positions).

**Example 5.2** (Sum rule + inclusion-exclusion). How many numbers from 1 to 100 are divisible by 2 or 3?

*Solution.* $|A| = 50$ (multiples of 2), $|B| = 33$ (multiples of 3), $|A \cap B| = 16$ (multiples of 6). By inclusion-exclusion: $50 + 33 - 16 = 67$.

**Example 5.3** (Combinations). How many 5-card poker hands from a 52-card deck?

*Solution.* $\binom{52}{5} = 2,598,960$.

**Example 5.4** (Permutations with repetition). How many distinct rearrangements of "MISSISSIPPI"?

*Solution.* 11 letters: M(1), I(4), S(4), P(2). Count = $\frac{11!}{1!\,4!\,4!\,2!} = 34,650$.

**Example 5.5** (Stars and bars). How many ways to distribute 10 identical candies to 3 children?

*Solution.* $\binom{10 + 3 - 1}{3 - 1} = \binom{12}{2} = 66$.

**Example 5.6** (Pigeonhole). In any group of 13 people, at least 2 share the same birth month.

*Proof.* 13 people, 12 months. By pigeonhole principle, $\lceil 13/12 \rceil = 2$. $\square$

**Example 5.7** (Binomial theorem). Expand $(2x - 3)^4$.

*Solution.* $(2x-3)^4 = \sum_{k=0}^{4} \binom{4}{k} (2x)^{4-k} (-3)^k = 16x^4 - 96x^3 + 216x^2 - 216x + 81$.

## Summary

- Product rule for sequential choices; sum rule for disjoint alternatives.
- Permutations are ordered ($P(n,r)$); combinations are unordered ($\binom{n}{r}$).
- Binomial theorem gives expansion of $(x+y)^n$.
- Pigeonhole principle guarantees collisions when there are more items than boxes.
- Stars and bars counts combinations with repetition.
- Inclusion-exclusion prevents double-counting.

## Exercises

### Review Questions

1. Compute $P(8,3)$ and $\binom{8}{3}$.
2. State Pascal's identity in words.
3. If 7 pigeons occupy 5 holes, what does the pigeonhole principle guarantee?
4. How many ways to arrange the letters in "ALGEBRA"?
5. Expand $(1 + x)^5$ using the binomial theorem.

### Application Problems

6. A committee of 5 is chosen from 10 men and 8 women. How many committees have exactly 3 men?

7. How many bitstrings of length 10 contain exactly 4 ones?

8. Prove by combinatorial argument: $\binom{n}{r} = \binom{n}{n-r}$.

9. Prove the generalized pigeonhole principle: if $N$ items are placed in $k$ boxes, some box has at least $\lceil N/k \rceil$ items.

10. How many solutions in nonnegative integers does $x_1 + x_2 + x_3 = 6$ have?

### Challenge Problem

11. Prove the **hockey-stick identity**: $\sum_{i=r}^{n} \binom{i}{r} = \binom{n+1}{r+1}$ using either a combinatorial argument or induction. Then use it to evaluate $\sum_{i=3}^{10} \binom{i}{3}$.
