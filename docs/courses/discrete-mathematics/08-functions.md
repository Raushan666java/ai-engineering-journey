# Chapter 8: Functions

## Learning Objectives

![Functions Overview](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/discrete-mathematics/08-functions.png)

After completing this chapter, you will be able to:

- Define functions and identify domains, codomains, and ranges
- Classify functions as injective, surjective, or bijective
- Compose functions and find inverses
- Apply floor, ceiling, and other special functions
- Analyze growth rates using big-O, big-$\Omega$, and big-$\Theta$ notation

## Theory

### 8.1 Definition

A **function** (or **mapping**) $f: A \rightarrow B$ assigns to each $a \in A$ exactly one $b \in B$. We write $f(a) = b$.

- $A$ is the **domain**, $B$ is the **codomain**.
- The **image** (or **range**) of $f$ is $f(A) = \{f(a) \mid a \in A\} \subseteq B$.
- If $f(a) = b$, $b$ is the **image** of $a$, and $a$ is a **preimage** of $b$.

Two functions $f$ and $g$ are **equal** if they have the same domain and $f(a) = g(a)$ for all $a$ in the domain.

### 8.2 Injective, Surjective, Bijective

**Injective (one-to-one):** $f(a_1) = f(a_2) \implies a_1 = a_2$.
Equivalently: distinct inputs map to distinct outputs. $|f(A)| = |A|$.

**Surjective (onto):** For every $b \in B$, there exists $a \in A$ with $f(a) = b$.
Equivalently: $f(A) = B$. The codomain equals the range.

**Bijective (one-to-one correspondence):** Both injective and surjective.

**Theorem 8.1.** A function is bijective if and only if it has an inverse (see below).

**Theorem 8.2.** If $A$ and $B$ are finite sets with $|A| = |B|$, then $f: A \rightarrow B$ is injective iff it is surjective iff it is bijective.

### 8.3 Composition

If $f: A \rightarrow B$ and $g: B \rightarrow C$, then the **composition** $g \circ f: A \rightarrow C$ is:
$$(g \circ f)(a) = g(f(a))$$

Composition is associative: $(h \circ g) \circ f = h \circ (g \circ f)$.

### 8.4 Inverse Functions

If $f: A \rightarrow B$ is bijective, there exists an **inverse** $f^{-1}: B \rightarrow A$ such that:
$$f^{-1}(b) = a \iff f(a) = b$$

Properties:
- $f^{-1} \circ f = \text{id}_A$ (identity on $A$)
- $f \circ f^{-1} = \text{id}_B$ (identity on $B$)
- $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$

### 8.5 Special Functions

**Floor function:** $\lfloor x \rfloor$ = the greatest integer $\leq x$.

**Ceiling function:** $\lceil x \rceil$ = the least integer $\geq x$.

**Factorial:** $n! = n \cdot (n-1) \cdots 2 \cdot 1$, with $0! = 1$.

**Mod function:** $a \bmod m$ = the remainder when $a$ is divided by $m$ (integer $r$ with $0 \leq r < m$ and $a = qm + r$).

### 8.6 Growth of Functions

**Big-O Notation:** $f(x) = O(g(x))$ if there exist constants $C > 0$ and $k$ such that $|f(x)| \leq C|g(x)|$ for all $x > k$.

**Big-Omega:** $f(x) = \Omega(g(x))$ if $|f(x)| \geq C|g(x)|$ for all $x > k$.

**Big-Theta:** $f(x) = \Theta(g(x))$ if $f(x) = O(g(x))$ and $f(x) = \Omega(g(x))$.

**Little-o:** $f(x) = o(g(x))$ if $\lim_{x \to \infty} f(x)/g(x) = 0$.

**Common growth rates (ordered by growth):**
$$1 \prec \log n \prec \sqrt{n} \prec n \prec n \log n \prec n^2 \prec n^3 \prec 2^n \prec n!$$

**Theorem 8.3 (Sum rule).** If $f_1 = O(g_1)$ and $f_2 = O(g_2)$, then $f_1 + f_2 = O(\max(|g_1|, |g_2|))$.

**Theorem 8.4 (Product rule).** If $f_1 = O(g_1)$ and $f_2 = O(g_2)$, then $f_1 f_2 = O(g_1 g_2)$.

### 8.7 Partial Functions

A **partial function** $f: A \rightharpoonup B$ is a function defined on a subset of $A$. If $f$ is defined for all $a \in A$, it is a **total function**.

## Examples

**Example 8.1** (Injective but not surjective). $f: \mathbb{Z} \rightarrow \mathbb{Z}$ with $f(n) = 2n$ is injective ($2n = 2m \implies n = m$) but not surjective (odd numbers have no preimage).

**Example 8.2** (Surjective but not injective). $f: \mathbb{Z} \rightarrow \{0,1\}$ with $f(n) = n \bmod 2$ is surjective (both 0 and 1 hit) but not injective ($f(2) = 0 = f(4)$).

**Example 8.3** (Bijection). $f: \mathbb{Z} \rightarrow \mathbb{Z}$ with $f(n) = n + 1$ is bijective. Inverse: $f^{-1}(n) = n - 1$.

**Example 8.4** (Composition). Let $f(n) = n^2$ and $g(n) = n + 1$, both $\mathbb{Z} \rightarrow \mathbb{Z}$. Then $(g \circ f)(n) = n^2 + 1$ and $(f \circ g)(n) = (n+1)^2 = n^2 + 2n + 1$. Composition is not commutative.

**Example 8.5** (Floor and ceiling). $\lfloor 3.7 \rfloor = 3$, $\lceil 3.7 \rceil = 4$, $\lfloor -2.3 \rfloor = -3$, $\lceil -2.3 \rceil = -2$.

**Example 8.6** (Big-O). Show $f(n) = 3n^2 + 2n + 5$ is $O(n^2)$.

*Proof.* For $n \geq 1$, $3n^2 + 2n + 5 \leq 3n^2 + 2n^2 + 5n^2 = 10n^2$. So with $C = 10$, $k = 1$, $f(n) \leq C n^2$, hence $f(n) = O(n^2)$. $\square$

**Example 8.7** (Big-Theta). Show $5n^3 + 10n$ is $\Theta(n^3)$.

*Proof.* For $n \geq 1$: $5n^3 + 10n \leq 5n^3 + 10n^3 = 15n^3$, so $f(n) = O(n^3)$. Also $5n^3 + 10n \geq 5n^3$, so $f(n) = \Omega(n^3)$. Thus $f(n) = \Theta(n^3)$. $\square$

**Example 8.8** (Inverse of bijection). Prove $f: \mathbb{R} \rightarrow \mathbb{R}$, $f(x) = 2x - 3$, is bijective and find its inverse.

*Proof.* Injective: $2x - 3 = 2y - 3 \implies x = y$. Surjective: for any $y \in \mathbb{R}$, let $x = (y+3)/2$, then $f(x) = y$. Bijective. Inverse: $f^{-1}(y) = (y+3)/2$. $\square$

## Summary

- Functions map each input to exactly one output.
- Injective: one-to-one. Surjective: onto. Bijective: both.
- Bijective functions have inverses; composition is associative but not commutative.
- Floor/ceiling round to integers; growth rates are classified by big-O/$\Omega$/$\Theta$.
- Common hierarchy: constant $\prec$ logarithmic $\prec$ linear $\prec$ polynomial $\prec$ exponential.

## Exercises

### Review Questions

1. Can a function from $\{1,2,3\}$ to $\{1,2\}$ be injective? Explain.
2. What is the growth rate of $f(n) = n \log n + \sqrt{n}$?
3. If $f$ is bijective, what is $f^{-1} \circ f$?
4. Compute $\lfloor \pi \rfloor$, $\lceil \pi \rceil$, $\lfloor -\pi \rfloor$, $\lceil -\pi \rceil$.
5. Is $O(g) \subset \Omega(g)$ ever true? When?

### Application Problems

6. Determine whether $f: \mathbb{Z} \rightarrow \mathbb{Z}$, $f(n) = n^2 + 1$, is injective, surjective, or bijective.

7. Prove: If $f$ and $g$ are injective, then $g \circ f$ is injective.

8. Prove: $f(n) = \log(n!)$ is $\Theta(n \log n)$.

9. Show $n^2 + 100n$ is $\Theta(n^2)$.

10. Let $f: A \rightarrow B$ and $g: B \rightarrow C$. Prove: if $g \circ f$ is injective, then $f$ is injective.

### Challenge Problem

11. Let $f: A \rightarrow B$ and $g: B \rightarrow C$. Prove: $g \circ f$ is bijective if and only if $f$ is injective, $g$ is surjective, and the image of $f$ equals the domain of injectivity restriction of $g$. More directly: prove that if $g \circ f$ is bijective, then $f$ is injective and $g$ is surjective, but the converse (both injective and surjective individually) is not necessary â€” find a counterexample where $g \circ f$ is bijective but $f$ is not surjective.
