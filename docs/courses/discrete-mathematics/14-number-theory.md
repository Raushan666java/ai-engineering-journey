# Chapter 14: Number Theory

> **Previous:** [Chapter 13: Discrete Probability](../13-probability.md) | **Next:** [Chapter 15: Applications](../15-applications.md)

## Learning Objectives

After completing this chapter, you will be able to:

- Apply divisibility properties and the division algorithm
- Compute greatest common divisors using the Euclidean algorithm
- Work with modular arithmetic and congruences
- Solve linear congruences and systems using the Chinese Remainder Theorem
- Compute modular exponentiation efficiently
- Understand the RSA cryptosystem

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Divisibility & GCD | Euclidean algorithm computes gcd efficiently | Simplifying fractions, cryptographic key generation |
| Modular Arithmetic | Congruences preserve arithmetic under modulus | Hash functions, calendars, clock arithmetic |
| Chinese Remainder Theorem | Systems of congruences have unique solutions | RSA acceleration, residue number systems |
| Prime Numbers | Building blocks of integers with unique factorization | Cryptography, hashing, random number generation |
| RSA Cryptosystem | Public-key encryption via modular exponentiation | Secure web communication, digital signatures |

## Theory

![Number Theory Overview](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/discrete-mathematics/14-number-theory.png)

## Chapter Roadmap

```mermaid
flowchart LR
    A[Divisibility] --> B[GCD & Euclidean Algorithm]
    B --> C[Modular Arithmetic]
    C --> D[Linear Congruences]
    D --> E[Chinese Remainder Theorem]
    E --> F[Primes & Factorization]
    F --> G[Fermat & Euler]
    G --> H[RSA Cryptosystem]
```

### 14.1 Divisibility

**Definition.** $a$ **divides** $b$ (written $a \mid b$) if there exists an integer $c$ such that $b = ac$. $a$ is a **divisor** (factor) of $b$.

**Theorem 14.1 (Properties of divisibility).** For integers $a, b, c$:
- If $a \mid b$ and $b \mid c$, then $a \mid c$ (transitivity).
- If $a \mid b$ and $a \mid c$, then $a \mid (b \pm c)$ and $a \mid mb$ for any integer $m$.
- If $a \mid b$ and $b \neq 0$, then $|a| \leq |b|$.

### 14.2 Division Algorithm

**Theorem 14.2 (Division Algorithm).** For integers $a$ and $d > 0$, there exist unique integers $q$ (quotient) and $r$ (remainder) with $a = dq + r$ and $0 \leq r < d$.

We write $q = a \operatorname{div} d$ and $r = a \bmod d$.

### 14.3 Greatest Common Divisor

The **greatest common divisor** $\gcd(a, b)$ is the largest integer dividing both $a$ and $b$. $\gcd(0, n) = n$.

Integers $a$ and $b$ are **coprime** (relatively prime) if $\gcd(a, b) = 1$.

**Theorem 14.3 (Euclidean algorithm).** Repeatedly apply the division algorithm to compute $\gcd(a, b)$ (assume $a \geq b > 0$):
$$a = b q_1 + r_1,\quad 0 \leq r_1 < b$$
$$b = r_1 q_2 + r_2,\quad 0 \leq r_2 < r_1$$
$$r_1 = r_2 q_3 + r_3,\quad \ldots$$
until a zero remainder appears. The last nonzero remainder is $\gcd(a, b)$.

**Theorem 14.4 (Bezout's identity).** There exist integers $s, t$ such that $\gcd(a, b) = sa + tb$. The extended Euclidean algorithm computes $s$ and $t$.

### 14.4 Least Common Multiple

$\operatorname{lcm}(a, b)$ is the smallest positive integer divisible by both $a$ and $b$.

**Theorem 14.5.** $\gcd(a, b) \cdot \operatorname{lcm}(a, b) = |ab|$.

### 14.5 Modular Arithmetic

**Definition.** $a \equiv b \pmod{m}$ (read "$a$ is congruent to $b$ modulo $m$") iff $m \mid (a - b)$.

**Theorem 14.6 (Properties of congruences).** For $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$:
- $a + c \equiv b + d \pmod{m}$
- $a - c \equiv b - d \pmod{m}$
- $ac \equiv bd \pmod{m}$
- If $\gcd(c, m) = 1$, then $ac \equiv bc \pmod{m} \implies a \equiv b \pmod{m}$.

**Modular exponentiation** (repeated squaring): compute $a^b \bmod m$ in $O(\log b)$ steps.

### 14.6 Linear Congruences

Solve $ax \equiv b \pmod{m}$.

**Theorem 14.7.** Let $d = \gcd(a, m)$. The congruence $ax \equiv b \pmod{m}$ has a solution iff $d \mid b$. If solutions exist, there are exactly $d$ distinct solutions modulo $m$.

The **multiplicative inverse** of $a$ modulo $m$ is $a^{-1} \pmod{m}$ such that $a \cdot a^{-1} \equiv 1 \pmod{m}$. It exists iff $\gcd(a, m) = 1$.

### 14.7 Chinese Remainder Theorem

**Theorem 14.8 (CRT).** Let $m_1, m_2, \ldots, m_n$ be pairwise coprime. The system:
$$x \equiv a_1 \pmod{m_1}, \quad x \equiv a_2 \pmod{m_2}, \quad \ldots, \quad x \equiv a_n \pmod{m_n}$$
has a unique solution modulo $M = m_1 m_2 \cdots m_n$.

Construction: let $M_k = M / m_k$. Let $y_k = M_k^{-1} \pmod{m_k}$. Then $x = \sum a_k M_k y_k \pmod{M}$.

### 14.8 Primes

A **prime** is an integer $p > 1$ whose only positive divisors are $1$ and $p$. A **composite** integer has other divisors.

**Theorem 14.9.** There are infinitely many primes (Euclid, proof by contradiction in Chapter 4).

**Theorem 14.10 (Fundamental Theorem of Arithmetic).** Every integer $n > 1$ has a unique prime factorization $n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}$ (order irrelevant).

**Theorem 14.11 (Prime Number Theorem, informal).** The number of primes $\leq n$ is approximately $n / \ln n$.

### 14.9 Fermat's Little Theorem

**Theorem 14.12 (Fermat).** If $p$ is prime and $p \nmid a$, then $a^{p-1} \equiv 1 \pmod{p}$.

**Corollary.** If $p$ is prime, $a^p \equiv a \pmod{p}$ for all integers $a$.

### 14.10 Euler's Theorem

**Euler's totient function:** $\phi(n) = |\{k \mid 1 \leq k \leq n,\; \gcd(k,n) = 1\}|$.
- If $p$ is prime: $\phi(p) = p-1$.
- If $\gcd(m,n) = 1$: $\phi(mn) = \phi(m) \phi(n)$.
- If $p$ is prime: $\phi(p^k) = p^k - p^{k-1}$.

**Theorem 14.13 (Euler).** If $\gcd(a, n) = 1$, then $a^{\phi(n)} \equiv 1 \pmod{n}$.

### 14.11 RSA Cryptosystem

**Key generation:**
1. Choose large primes $p, q$.
2. Compute $n = pq$, $\phi(n) = (p-1)(q-1)$.
3. Choose $e$ with $1 < e < \phi(n)$ and $\gcd(e, \phi(n)) = 1$.
4. Compute $d = e^{-1} \pmod{\phi(n)}$.
Public key: $(e, n)$. Private key: $(d, n)$.

**Encryption:** $c = m^e \bmod n$.
**Decryption:** $m = c^d \bmod n$.

**Theorem 14.14 (Correctness of RSA).** For any $m$ with $0 \leq m < n$, $(m^e)^d \equiv m \pmod{n}$.

## Examples

**Example 14.1** (Euclidean algorithm). Compute $\gcd(252, 198)$.

*Solution.*
$252 = 198 \cdot 1 + 54$
$198 = 54 \cdot 3 + 36$
$54 = 36 \cdot 1 + 18$
$36 = 18 \cdot 2 + 0$
$\gcd(252, 198) = 18$.

**Example 14.2** (Extended Euclidean). Find $s, t$ with $18 = 252s + 198t$.

*Solution.* Back-substitute: $18 = 54 - 36 = 54 - (198 - 3\cdot 54) = 4\cdot 54 - 198 = 4\cdot(252 - 198) - 198 = 4\cdot 252 - 5\cdot 198$. So $s = 4$, $t = -5$.

**Example 14.3** (Modular exponentiation). Compute $3^{29} \bmod 11$ using repeated squaring.

*Solution.* $3^2 = 9$, $3^4 = 9^2 = 81 \equiv 4$, $3^8 = 4^2 = 16 \equiv 5$, $3^{16} = 5^2 = 25 \equiv 3$. Since $29 = 16 + 8 + 4 + 1$, $3^{29} \equiv 3 \cdot 4 \cdot 5 \cdot 3 = 180 \equiv 4 \pmod{11}$.

**Example 14.4** (Chinese Remainder Theorem). Solve $x \equiv 2 \pmod{3}$, $x \equiv 3 \pmod{5}$, $x \equiv 2 \pmod{7}$.

*Solution.* $M = 105$. $M_1 = 35$, $y_1 = 35^{-1} \equiv 2^{-1} \equiv 2 \pmod{3}$. $M_2 = 21$, $y_2 = 21^{-1} \equiv 1 \pmod{5}$. $M_3 = 15$, $y_3 = 15^{-1} \equiv 1 \pmod{7}$.
$x = 2\cdot 35\cdot 2 + 3\cdot 21\cdot 1 + 2\cdot 15\cdot 1 = 140 + 63 + 30 = 233 \equiv 23 \pmod{105}$.

**Example 14.5** (RSA). Let $p = 7$, $q = 13$. Compute RSA parameters.

*Solution.* $n = 91$, $\phi(n) = 6\cdot 12 = 72$. Choose $e = 5$ (coprime to 72). Compute $d = 5^{-1} \equiv 29 \pmod{72}$ (since $5\cdot 29 = 145 \equiv 1$). Encrypt $m = 10$: $c = 10^5 \bmod 91 = 100000 \bmod 91 = 82$. Decrypt: $82^{29} \bmod 91 = 10$.

## Summary

- Division algorithm gives unique quotient and remainder.
- Euclidean algorithm computes $\gcd$ efficiently.
- Modular arithmetic preserves congruence under $+,-,\times$.
- Chinese Remainder Theorem solves systems of congruences.
- RSA encryption uses modular exponentiation and Euler's theorem.
- Prime numbers are the building blocks of number theory and cryptography.

## Exercises

### Review Questions

1. Compute $\gcd(84, 132)$ using the Euclidean algorithm.
2. State Fermat's Little Theorem.
3. What is $\phi(100)$?
4. Why must $\gcd(e, \phi(n)) = 1$ in RSA?
5. Find the multiplicative inverse of 7 modulo 11.

### Application Problems

6. Solve $14x \equiv 3 \pmod{23}$.

7. Solve the CRT system: $x \equiv 1 \pmod{4}$, $x \equiv 0 \pmod{5}$, $x \equiv 0 \pmod{3}$.

8. Compute $7^{123} \bmod 13$ using repeated squaring.

9. Show that if $p$ is prime and $a^2 \equiv 1 \pmod{p}$, then $a \equiv \pm 1 \pmod{p}$.

10. In RSA with $p = 11$, $q = 23$, and $e = 3$:
    (a) Compute $n$, $\phi(n)$, and $d$.
    (b) Encrypt $m = 42$.
    (c) Decrypt the ciphertext to verify.

### Challenge Problem

11. Prove that $\sqrt{p}$ is irrational for any prime $p$. (Generalize the proof that $\sqrt{2}$ is irrational from Chapter 4.)
