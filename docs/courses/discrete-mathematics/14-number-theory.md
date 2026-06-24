# Chapter 14: Number Theory

> **Previous:** [Chapter 13: Probability](./13-probability.md) | **Next:** [Chapter 15: Applications](./15-applications.md)

## Learning Objectives

After completing this chapter, you will be able to:

- Understand divisibility and the division algorithm
- Compute greatest common divisors using the Euclidean algorithm
- Apply the extended Euclidean algorithm to find Bézout coefficients
- Understand modular arithmetic and congruence relations
- Solve linear congruences using inverses modulo $n$
- Apply the Chinese Remainder Theorem to solve systems of congruences
- Understand Fermat's Little Theorem and Euler's theorem
- Differentiate between prime and composite numbers
- Compute Euler's totient function
- Understand the fundamentals of RSA encryption

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Divisibility | $a \mid b$ means $b = a \cdot k$ for some integer $k$ | Foundation for all of number theory |
| Division Algorithm | $a = q \cdot m + r$ with $0 \leq r < m$ | Uniqueness of quotient and remainder |
| GCD & LCM | $\gcd(a,b) \cdot \text{lcm}(a,b) = a \cdot b$ | Euclidean algorithm finds $\gcd$ efficiently |
| Euclidean Algorithm | $\gcd(a,b) = \gcd(b, a \bmod b)$ | Repeated remainder computation; $O(\log \min(a,b))$ |
| Modular Arithmetic | $a \equiv b \pmod{m}$ if $m \mid (a-b)$ | Arithmetic modulo $m$ is consistent with integers |
| Modular Inverses | $a \cdot a^{-1} \equiv 1 \pmod{m}$ | Exists iff $\gcd(a,m) = 1$ |
| Chinese Remainder Theorem | System of congruences with coprime moduli has a unique solution mod $M$ | Enables parallel computation on large integers |
| Fermat's Little Theorem | $a^p \equiv a \pmod{p}$ for prime $p$ | Foundation of primality testing and RSA |
| Euler's Theorem | $a^{\phi(m)} \equiv 1 \pmod{m}$ for $\gcd(a,m)=1$ | Generalization of FLT to composite moduli |
| RSA | Encryption: $c = m^e \bmod n$, Decryption: $m = c^d \bmod n$ | Security depends on hardness of factoring $n$ |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Divisibility] --> B[Division Algorithm]
    B --> C[GCD & LCM]
    C --> D[Euclidean Algorithm]
    D --> E[Extended Euclidean]
    A --> F[Modular Arithmetic]
    F --> G[Congruences]
    F --> H[Inverses]
    F --> I[CRT]
    A --> J[Prime Numbers]
    J --> K[Fermat's Little Theorem]
    J --> L[Euler's Theorem]
    J --> M[Primality Testing]
    A --> N[Cryptography]
    N --> O[RSA]
    N --> P[Diffie-Hellman]
```

## Theory

### 14.1 Divisibility

For integers $a$ and $b$ with $a \neq 0$, $a$ **divides** $b$ (written $a \mid b$) if there is an integer $k$ such that $b = a \cdot k$.

**Theorem 14.1 (Properties of divisibility).**
1. If $a \mid b$ and $b \mid c$, then $a \mid c$ (transitivity).
2. If $a \mid b$ and $a \mid c$, then $a \mid (b + c)$ and $a \mid (b - c)$.
3. If $a \mid b$, then $a \mid b \cdot c$ for any integer $c$.
4. If $a \mid b$ and $b \neq 0$, then $|a| \leq |b|$.
5. $1$ divides every integer; every integer divides $0$.

> **One-Sentence Takeaway:** Divisibility $a \mid b$ means $b$ is a multiple of $a$; it is transitive and closed under linear combinations.

### 14.2 Division Algorithm

**Theorem 14.2 (Division algorithm).** For integers $a$ and $m > 0$, there exist unique integers $q$ (quotient) and $r$ (remainder) such that:
$$a = q \cdot m + r,\quad 0 \leq r < m$$

We write $r = a \bmod m$ and $q = \lfloor a/m \rfloor$.

> **One-Sentence Takeaway:** Every integer $a$ can be uniquely expressed as $a = qm + r$ with $0 \leq r < m$; the remainder is the basis of modular arithmetic.

### 14.3 GCD and LCM

The **greatest common divisor** $\gcd(a,b)$ is the largest integer dividing both $a$ and $b$.

The **least common multiple** $\text{lcm}(a,b)$ is the smallest positive integer divisible by both $a$ and $b$.

**Theorem 14.3 (GCD-LCM product).** $\gcd(a,b) \cdot \text{lcm}(a,b) = |a \cdot b|$.

**Theorem 14.4 (GCD as linear combination).** $\gcd(a,b)$ is the smallest positive integer of the form $ax + by$ for integers $x, y$.

Two integers are **relatively prime** (coprime) if $\gcd(a,b) = 1$.

> **One-Sentence Takeaway:** Every common divisor divides the GCD; the GCD is the smallest positive linear combination of $a$ and $b$.

### 14.4 Euclidean Algorithm

**Theorem 14.5 (Euclidean algorithm).** For $a \geq b > 0$:
$$\gcd(a,b) = \gcd(b, a \bmod b)$$
Repeat until the remainder is 0; the last non-zero remainder is $\gcd(a,b)$.

```typescript
function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(252, 198)); // 18
```

**Extended Euclidean algorithm:** Finds integers $x$ and $y$ such that $ax + by = \gcd(a,b)$.

```typescript
function extendedGcd(a: number, b: number): { gcd: number; x: number; y: number } {
  if (b === 0) return { gcd: a, x: 1, y: 0 };
  const { gcd, x: x1, y: y1 } = extendedGcd(b, a % b);
  return { gcd, x: y1, y: x1 - Math.floor(a / b) * y1 };
}

// gcd(252, 198) = 18 = 4*252 + (-5)*198
console.log(extendedGcd(252, 198)); // { gcd: 18, x: 4, y: -5 }
```

> **One-Sentence Takeaway:** The Euclidean algorithm computes GCD by repeated remainder operations in $O(\log n)$ time; the extended algorithm also finds the Bézout coefficients.

### 14.5 Modular Arithmetic

**Congruence:** $a \equiv b \pmod{m}$ means $m \mid (a - b)$.

**Theorem 14.6 (Properties of congruences).** If $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$, then:
- $a + c \equiv b + d \pmod{m}$.
- $a - c \equiv b - d \pmod{m}$.
- $a \cdot c \equiv b \cdot d \pmod{m}$.
- $a^k \equiv b^k \pmod{m}$ for any $k \geq 0$.

**Theorem 14.7 (Cancellation).** If $ac \equiv bc \pmod{m}$ and $\gcd(c,m) = 1$, then $a \equiv b \pmod{m}$.

> **One-Sentence Takeaway:** Congruence modulo $m$ is an equivalence relation compatible with addition, subtraction, and multiplication; cancellation requires the multiplier to be coprime to $m$.

### 14.6 Modular Inverses

The **modular inverse** of $a$ modulo $m$ is an integer $a^{-1}$ such that $a \cdot a^{-1} \equiv 1 \pmod{m}$.

**Theorem 14.8 (Inverse existence).** $a^{-1} \pmod{m}$ exists if and only if $\gcd(a,m) = 1$.

The inverse can be found using the extended Euclidean algorithm: if $ax + my = 1$, then $x$ is the inverse of $a$ modulo $m$.

```typescript
function modInverse(a: number, m: number): number | null {
  const { gcd, x } = extendedGcd(a, m);
  if (gcd !== 1) return null; // no inverse
  return ((x % m) + m) % m; // ensure non-negative
}

console.log(modInverse(3, 7));  // 5 (since 3*5 = 15 ≡ 1 mod 7)
console.log(modInverse(2, 4));  // null (gcd(2,4) ≠ 1)
```

> **One-Sentence Takeaway:** A modular inverse exists exactly when $a$ and $m$ are coprime; use the extended Euclidean algorithm to find it.

### 14.7 Linear Congruences

A **linear congruence** is of the form $ax \equiv b \pmod{m}$.

**Theorem 14.9 (Solving linear congruences).** $ax \equiv b \pmod{m}$ has a solution if and only if $\gcd(a,m) \mid b$. If solutions exist, there are exactly $\gcd(a,m)$ distinct solutions modulo $m$.

**Solution method:** Divide through by $\gcd(a,m)$ (if $\gcd > 1$). Compute the inverse of $a/\gcd$ modulo $m/\gcd$. Multiply.

> **One-Sentence Takeaway:** Solve $ax \equiv b \pmod{m}$ by dividing through by $\gcd(a,m)$ and multiplying by the modular inverse of the reduced coefficient.

### 14.8 Chinese Remainder Theorem

**Theorem 14.10 (Chinese Remainder Theorem).** Let $m_1, m_2, \dots, m_n$ be pairwise coprime positive integers. The system:
$$x \equiv a_1 \pmod{m_1},\; x \equiv a_2 \pmod{m_2},\; \dots,\; x \equiv a_n \pmod{m_n}$$
has a unique solution modulo $M = m_1 m_2 \cdots m_n$.

**Solution construction:**
1. Compute $M = \prod m_i$.
2. For each $i$, compute $M_i = M / m_i$.
3. Find $y_i$, the inverse of $M_i$ modulo $m_i$.
4. $x = \sum a_i \cdot M_i \cdot y_i \pmod{M}$.

```typescript
function chineseRemainder(remainders: number[], moduli: number[]): number {
  let M = 1;
  for (const m of moduli) M *= m;

  let result = 0;
  for (let i = 0; i < moduli.length; i++) {
    const Mi = M / moduli[i];
    const yi = modInverse(Mi, moduli[i])!;
    result += remainders[i] * Mi * yi;
  }
  return ((result % M) + M) % M;
}

// x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 2 (mod 7)
console.log(chineseRemainder([2, 3, 2], [3, 5, 7])); // 23
```

> **One-Sentence Takeaway:** The CRT combines $n$ congruences with pairwise coprime moduli into a unique solution modulo the product — essential for RSA decryption and large integer arithmetic.

### 14.9 Prime Numbers

A **prime number** is an integer $p \geq 2$ whose only positive divisors are $1$ and $p$. A **composite** number has other divisors.

**Theorem 14.11 (Fundamental Theorem of Arithmetic).** Every integer $n \geq 2$ can be expressed uniquely as a product of primes up to order:
$$n = p_1^{e_1} \cdot p_2^{e_2} \cdots p_k^{e_k}$$

**Theorem 14.12 (Euclid's theorem on primes).** There are infinitely many prime numbers.

**Theorem 14.13 (Prime number theorem).** The number of primes $\leq n$ is $\pi(n) \sim n / \ln n$.

**Sieve of Eratosthenes:** Efficient algorithm for finding all primes up to $n$ in $O(n \log \log n)$ time.

```typescript
function sieveOfEratosthenes(n: number): number[] {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return Array.from({ length: n + 1 }, (_, i) => i).filter(i => isPrime[i]);
}

console.log(sieveOfEratosthenes(30)); // [2,3,5,7,11,13,17,19,23,29]
```

> **One-Sentence Takeaway:** Primes are the building blocks of integers (unique factorization); there are infinitely many, and the sieve of Eratosthenes finds them efficiently.

### 14.10 Fermat's Little Theorem and Euler's Theorem

**Theorem 14.14 (Fermat's Little Theorem).** If $p$ is prime and $p \nmid a$, then:
$$a^{p-1} \equiv 1 \pmod{p}$$
Equivalently, $a^p \equiv a \pmod{p}$ for any integer $a$.

**Euler's totient function:** $\phi(n)$ = number of positive integers $\leq n$ that are coprime to $n$.
- $\phi(p) = p - 1$ for prime $p$.
- $\phi(p^k) = p^{k} - p^{k-1} = p^{k-1}(p-1)$.
- If $\gcd(m,n) = 1$, then $\phi(mn) = \phi(m) \cdot \phi(n)$ (multiplicative).

**Theorem 14.15 (Euler's theorem).** If $\gcd(a,m) = 1$, then:
$$a^{\phi(m)} \equiv 1 \pmod{m}$$

When $m = p$ (prime), Euler's theorem reduces to Fermat's Little Theorem.

```typescript
function totient(n: number): number {
  let result = n;
  let m = n;
  for (let p = 2; p * p <= m; p++) {
    if (m % p === 0) {
      while (m % p === 0) m /= p;
      result -= result / p;
    }
  }
  if (m > 1) result -= result / m;
  return result;
}

console.log(totient(12)); // 4 (1, 5, 7, 11)
console.log(totient(100)); // 40
```

> **One-Sentence Takeaway:** Fermat's Little Theorem gives $a^{p-1} \equiv 1 \pmod{p}$ for primes; Euler's theorem extends this to composite moduli via $\phi(m)$.

### 14.11 Public-Key Cryptography: RSA

**RSA key generation:**
1. Choose two large distinct primes $p$ and $q$.
2. Compute $n = p \cdot q$ and $\phi(n) = (p-1)(q-1)$.
3. Choose $e$ with $1 < e < \phi(n)$ and $\gcd(e, \phi(n)) = 1$.
4. Compute $d \equiv e^{-1} \pmod{\phi(n)}$.
5. Public key: $(e, n)$. Private key: $(d, n)$.

**Encryption:** $c \equiv m^e \pmod{n}$.
**Decryption:** $m \equiv c^d \pmod{n}$.

**Theorem 14.16 (RSA correctness).** $c^d \equiv (m^e)^d \equiv m^{ed} \equiv m \pmod{n}$ by Euler's theorem (since $ed \equiv 1 \pmod{\phi(n)}$ when $m$ is coprime to $n$, also holds in general).

```typescript
function rsaEncrypt(m: number, e: number, n: number): number {
  return modPow(m, e, n);
}

function rsaDecrypt(c: number, d: number, n: number): number {
  return modPow(c, d, n);
}

function modPow(base: number, exp: number, mod: number): number {
  let result = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp % 2 === 1) result = (result * base) % mod;
    exp = Math.floor(exp / 2);
    base = (base * base) % mod;
  }
  return result;
}

const p = 61, q = 53;
const n = p * q; // 3233
const phi = (p - 1) * (q - 1); // 3120
const e = 17; // gcd(17, 3120) = 1
const d = modInverse(e, phi)!; // 2753

const message = 65; // "A" in ASCII
const ciphertext = rsaEncrypt(message, e, n);  // 2790
const plaintext = rsaDecrypt(ciphertext, d, n); // 65
```

> **One-Sentence Takeaway:** RSA's security relies on the practical difficulty of factoring $n$; the public exponent $e$ encrypts, the private exponent $d$ decrypts via $m^{ed} \equiv m \pmod{n}$.

## Cross-Application Matrix

| Concept | Cryptography | Computer Science | Engineering | Mathematics |
|---------|-------------|-----------------|-------------|-------------|
| GCD & LCM | Key generation | Fraction simplification | Gear ratios | Diophantine equations |
| Modular Arithmetic | All modern crypto | Hash functions, checksums | Signal processing | Congruence theory |
| Chinese Remainder Theorem | RSA acceleration, secret sharing | Large integer arithmetic | Residue number systems | Combinatorial number theory |
| Fermat's Little Theorem | Primality testing (Fermat test) | — | — | Foundation for Euler's theorem |
| Euler's Theorem | RSA correctness proof | — | — | Generalization of FLT |
| Sieve of Eratosthenes | Large prime generation | Algorithm optimization | — | Analytic number theory |
| Modular Inverse | RSA key generation, ECC | — | — | Solving congruences |

## Chapter Quiz

1. What is $\gcd(315, 84)$?
   - A) 7
   - B) 12
   - C) 21
   - D) 42
   <details><summary>Answer</summary>**C)** $315 = 2 \cdot 84 + 147$, $84 = 0 \cdot 147 + 84$, $147 = 1 \cdot 84 + 63$, $84 = 1 \cdot 63 + 21$, $63 = 3 \cdot 21 + 0$. $\gcd = 21$.</details>

2. When does $a$ have a multiplicative inverse modulo $m$?
   - A) Always
   - B) When $a$ and $m$ are coprime
   - C) When $a > m$
   - D) When $m$ is prime
   <details><summary>Answer</summary>**B)** $a^{-1} \pmod{m}$ exists iff $\gcd(a,m) = 1$.</details>

3. The Chinese Remainder Theorem requires that:
   - A) All moduli are equal
   - B) All moduli are pairwise coprime
   - C) All remainders are equal
   - D) Moduli are powers of 2
   <details><summary>Answer</summary>**B)** The CRT requires pairwise coprime moduli for a unique solution modulo the product.</details>

4. Fermat's Little Theorem states:
   - A) $a^n \equiv a \pmod{n}$
   - B) $a^{p-1} \equiv 1 \pmod{p}$ when $p$ is prime and $p \nmid a$
   - C) $a^p \equiv 1 \pmod{p}$ for all $a$
   - D) $(a+b)^p \equiv a^p + b^p \pmod{p}$
   <details><summary>Answer</summary>**B)** $a^{p-1} \equiv 1 \pmod{p}$ when $p$ is prime and $p \nmid a$.</details>

5. The totient $\phi(p^k)$ for prime $p$ equals:
   - A) $p^k$
   - B) $p^k - 1$
   - C) $p^{k-1}(p-1)$
   - D) $p-1$
   <details><summary>Answer</summary>**C)** $\phi(p^k) = p^k - p^{k-1} = p^{k-1}(p-1)$.</details>

## Examples

**Example 14.1** (Euclidean algorithm). Find $\gcd(2024, 748)$:
- $2024 = 2 \cdot 748 + 528$
- $748 = 1 \cdot 528 + 220$
- $528 = 2 \cdot 220 + 88$
- $220 = 2 \cdot 88 + 44$
- $88 = 2 \cdot 44 + 0$
$\gcd(2024, 748) = 44$.

**Example 14.2** (Extended Euclidean). Find $x, y$ such that $252x + 198y = 18$:
- $252 = 1 \cdot 198 + 54$
- $198 = 3 \cdot 54 + 36$
- $54 = 1 \cdot 36 + 18$
- $36 = 2 \cdot 18 + 0$

Back-substitute:
- $18 = 54 - 1 \cdot 36 = 54 - (198 - 3 \cdot 54) = 4 \cdot 54 - 198 = 4(252 - 198) - 198 = 4 \cdot 252 - 5 \cdot 198$

So $x = 4$, $y = -5$. Check: $4(252) - 5(198) = 1008 - 990 = 18$. ✓

**Example 14.3** (Modular inverse). Find $3^{-1} \pmod{7}$:
- $7 = 2 \cdot 3 + 1$, so $1 = 7 - 2 \cdot 3$.
- Thus $(-2) \cdot 3 \equiv 1 \pmod{7}$, so $3^{-1} \equiv -2 \equiv 5 \pmod{7}$.
- Check: $3 \cdot 5 = 15 \equiv 1 \pmod{7}$. ✓

**Example 14.4** (Linear congruence). Solve $6x \equiv 3 \pmod{15}$:
- $\gcd(6,15) = 3 \mid 3$, so there are 3 solutions.
- Divide through: $2x \equiv 1 \pmod{5}$.
- Inverse of 2 mod 5 is 3 (since $2 \cdot 3 = 6 \equiv 1 \pmod{5}$).
- $x \equiv 3 \pmod{5}$.
- Solutions mod 15: $x = 3, 8, 13$.

**Example 14.5** (Chinese Remainder Theorem). Solve $x \equiv 2 \pmod{3}$, $x \equiv 3 \pmod{5}$, $x \equiv 2 \pmod{7}$:
- $M = 3 \cdot 5 \cdot 7 = 105$.
- $M_1 = 105/3 = 35$, $y_1 = 35^{-1} \pmod{3} = 2$ ($35 \cdot 2 = 70 \equiv 1$).
- $M_2 = 105/5 = 21$, $y_2 = 21^{-1} \pmod{5} = 1$ ($21 \equiv 1 \pmod{5}$).
- $M_3 = 105/7 = 15$, $y_3 = 15^{-1} \pmod{7} = 1$ ($15 \equiv 1 \pmod{7}$).
- $x = 2 \cdot 35 \cdot 2 + 3 \cdot 21 \cdot 1 + 2 \cdot 15 \cdot 1 = 140 + 63 + 30 = 233 \equiv 23 \pmod{105}$.

Check: $23 \equiv 2 \pmod{3}$, $23 \equiv 3 \pmod{5}$, $23 \equiv 2 \pmod{7}$. ✓

**Example 14.6** (Modular exponentiation). Compute $3^{1000} \bmod 7$:
By FLT: $3^{6} \equiv 1 \pmod{7}$. $1000 = 6 \cdot 166 + 4$.
$3^{1000} = (3^6)^{166} \cdot 3^4 \equiv 1^{166} \cdot 81 \equiv 81 \bmod 7 = 4$.

```typescript
console.log(modPow(3, 1000, 7)); // 4
```

**Example 14.7** (Sieve of Eratosthenes). Find primes $\leq 30$:
Start: $\{2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30\}$.
Remove multiples of 2: $\{2,3,5,7,9,11,13,15,17,19,21,23,25,27,29\}$.
Remove multiples of 3: $\{2,3,5,7,11,13,17,19,23,25,29\}$.
$5^2 = 25 > 30$, so stop. Primes: $\{2,3,5,7,11,13,17,19,23,29\}$.

**Example 14.8** (Totient of 100). $100 = 2^2 \cdot 5^2$.
$\phi(100) = \phi(2^2) \cdot \phi(5^2) = (4-2) \cdot (25-5) = 2 \cdot 20 = 40$.

**Example 14.9** (RSA toy example). $p = 7$, $q = 11$:
- $n = 77$, $\phi(n) = 60$.
- $e = 13$ ($\gcd(13,60) = 1$).
- $d = 13^{-1} \bmod 60 = 37$ (since $13 \cdot 37 = 481 = 8 \cdot 60 + 1$).
- Encrypt $m = 5$: $c = 5^{13} \bmod 77 = 26$.
- Decrypt $c = 26$: $m = 26^{37} \bmod 77 = 5$.

**Example 14.10** (GCD-LCM product). $\gcd(12, 18) = 6$, $\text{lcm}(12, 18) = 36$. $6 \cdot 36 = 216 = 12 \cdot 18$. ✓

## Summary

- Divisibility $a \mid b$ is the foundational concept; the division algorithm gives unique quotient and remainder.
- The Euclidean algorithm efficiently computes $\gcd$; the extended version finds Bézout coefficients.
- Modular arithmetic preserves congruence under $+$, $-$, $\times$.
- Modular inverses exist iff $\gcd(a,m) = 1$.
- The Chinese Remainder Theorem solves systems of congruences with pairwise coprime moduli.
- Primes are the building blocks of integers; there are infinitely many.
- Fermat's Little Theorem ($a^{p-1} \equiv 1 \pmod{p}$) and Euler's theorem generalize to composite moduli.
- RSA encryption uses modular exponentiation; security depends on the difficulty of factorization.

## Practical Takeaways

1. **Euclidean algorithm is $O(\log n)$** — extremely fast even for huge numbers.
2. **Inverses are essential for division in modular arithmetic** — always check $\gcd(a,m) = 1$ first.
3. **FLT is a primality test** — if $a^{n-1} \not\equiv 1 \pmod{n}$, then $n$ is composite (but there are Carmichael numbers that deceive this test).
4. **RSA uses large primes** — typical $p, q$ are 2048-bit numbers (~600 decimal digits).
5. **CRT speeds up RSA** — decryption can be done modulo $p$ and $q$ separately and combined, giving 4x speedup.

## Exercises

### Review Questions

1. State the division algorithm for integers.
2. What condition ensures that $a$ has an inverse modulo $m$?
3. State the Chinese Remainder Theorem.
4. What does $\phi(12)$ equal?
5. State Fermat's Little Theorem.

### Application Problems

6. Compute $\gcd(462, 336)$ using the Euclidean algorithm.

7. Find the modular inverse of 11 modulo 26.

8. Solve $5x \equiv 3 \pmod{12}$.

9. Solve the system: $x \equiv 1 \pmod{4}$, $x \equiv 2 \pmod{5}$, $x \equiv 3 \pmod{9}$.

10. Compute $\phi(2024)$.

11. Using FLT, compute $7^{2023} \bmod 11$.

12. Generate RSA parameters with $p = 11$, $q = 13$, $e = 7$. Encrypt and decrypt $m = 8$.

### Challenge Problem

13. Prove: If $p$ and $q$ are distinct primes and $a$ is any integer, then $a^{pq} \equiv a \pmod{pq}$.

14. Prove that there are infinitely many primes (Euclid's proof).

15. A **Carmichael number** is a composite $n$ such that $a^{n-1} \equiv 1 \pmod{n}$ for all $a$ coprime to $n$. Find the smallest Carmichael number and verify the property for several values of $a$.
