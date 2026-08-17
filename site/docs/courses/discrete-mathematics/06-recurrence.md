---
id: 06-recurrence
slug: /discrete-mathematics/06-recurrence
title: "Chapter 6: Recurrence Relations"
sidebar_label: "Chapter 6: Recurrence Relations"
sidebar_position: 6
---
# Chapter 6: Recurrence Relations

> **Previous:** [Chapter 5: Combinatorics](./05-combinatorics.md) | **Next:** [Chapter 7: Relations](./07-relations.md)

## Learning Objectives

![Recurrence Relations Overview](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/discrete-mathematics/06-recurrence.png)

After completing this chapter, you will be able to:

- Model sequences using recurrence relations and initial conditions
- Solve linear recurrences by iteration
- Solve homogeneous linear recurrences with constant coefficients
- Solve nonhomogeneous recurrences
- Use generating functions to solve recurrences
- Analyze algorithm complexity via recurrences and the Master theorem
- Apply recurrence solving to divide-and-conquer algorithms

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Recurrence Definitions | Sequences defined by earlier terms and initial conditions | Model problems where current state depends on previous states |
| Iteration Methods | Compute terms forward or backward until a pattern emerges | Good for simple recurrences; always prove closed form by induction |
| Linear Homogeneous Recurrences | Solved via characteristic polynomial roots | Solution is a linear combination of $r^n$ terms |
| Nonhomogeneous Recurrences | Add particular solution to homogeneous solution | Guess the form of $f(n)$ and solve for coefficients |
| Generating Functions | Transform recurrence into algebraic equation | Powerful for complex recurrences; use partial fractions |
| Algorithm Analysis | Divide-and-conquer yields recurrences for time complexity | Master theorem bypasses full recurrence solving |
| Master Theorem | Closed-form for $T(n) = aT(n/b) + f(n)$ | Three cases based on $f(n)$ vs $n^{\log_b a}$ |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Recurrence Definitions] --> B[Iteration Methods]
    A --> C[Backward Substitution]
    C --> D[Linear Homogeneous Recurrences]
    D --> E[Characteristic Equation]
    E --> F{Distinct or Repeated Roots?}
    F -->|Distinct| G[a_n = S a_i r_i^n]
    F -->|Repeated| H[a_n = (S a_i n^i) r^n]
    D --> I[Nonhomogeneous Recurrences]
    I --> J[Particular + Homogeneous Solution]
    A --> K[Generating Functions]
    K --> L[Algebraic Equation ? Coefficients]
    D --> M[Algorithm Analysis]
    M --> N[Master Theorem]
```

## Theory

### 6.1 Definitions


A **recurrence relation** for a sequence $\{a_n\}$ is an equation relating $a_n$ to one or more preceding terms $a_{n-1}, a_{n-2}, \ldots, a_{n-k}$ for $n \geq k$. A sequence is called a **solution** if its terms satisfy the recurrence for all $n \geq k$. The **initial conditions** specify $a_0, a_1, \ldots, a_{k-1}$.

**Example.** The Fibonacci recurrence $F_n = F_{n-1} + F_{n-2}$ with $F_1 = 1, F_2 = 1$.

The **order** (or degree) of a recurrence is the difference between the largest and smallest index in the equation.

> **One-Sentence Takeaway:** A recurrence relation defines each term using previous terms; without initial conditions the sequence is not uniquely determined.
>
> **Pro Tip:** Always specify initial conditions clearly ? the recurrence alone is insufficient to determine a unique sequence.

### 6.2 Solving by Iteration (Forward Substitution)


Work forward from initial conditions, computing terms until a pattern emerges, then prove by induction.

**Example:** $a_n = a_{n-1} + 3$, $a_0 = 2$.

$a_1 = 5$, $a_2 = 8$, $a_3 = 11$, $a_4 = 14$. Pattern: $a_n = 2 + 3n$. Prove by induction.

> **One-Sentence Takeaway:** Forward iteration builds terms explicitly until a pattern appears; always verify the guessed closed form by induction.

### 6.3 Solving by Backward Substitution


Express $a_n$ in terms of $a_{n-1}$, then $a_{n-1}$ in terms of $a_{n-2}$, continuing until reaching the base case. This often reveals a closed form.

**Example:** $a_n = 2a_{n-1}$, $a_0 = 3$.

$a_n = 2a_{n-1} = 2(2a_{n-2}) = 2^2 a_{n-2} = \cdots = 2^n a_0 = 3 \cdot 2^n$.

> **One-Sentence Takeaway:** Backward substitution repeatedly expands the current term into previous terms until the base case is reached, exposing a pattern.

### 6.4 Linear Homogeneous Recurrences


A **linear homogeneous recurrence of degree $k$ with constant coefficients** has the form:
$$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \cdots + c_k a_{n-k}$$
where $c_1, \ldots, c_k \in \mathbb{R}$ and $c_k \neq 0$.

The **characteristic equation** is:
$$r^k - c_1 r^{k-1} - c_2 r^{k-2} - \cdots - c_k = 0$$

**Theorem 6.1 (Distinct roots).** If the characteristic equation has distinct roots $r_1, r_2, \ldots, r_k$, then:
$$a_n = \alpha_1 r_1^n + \alpha_2 r_2^n + \cdots + \alpha_k r_k^n$$
where $\alpha_i$ are constants determined by initial conditions.

**Theorem 6.2 (Repeated roots).** If a root $r$ has multiplicity $m$, then the solution includes $(\alpha_1 + \alpha_2 n + \cdots + \alpha_m n^{m-1}) r^n$.

**Theorem 6.3 (Complex roots).** If the characteristic equation has complex conjugate roots $re^{\pm i\theta}$, then the solution includes $\alpha r^n \cos(n\theta) + \beta r^n \sin(n\theta)$.

```typescript
// Solve linear homogeneous recurrence of degree 2
function solveLinearRecurrence(
  c1: number, c2: number,        // coefficients: a_n = c1*a_{n-1} + c2*a_{n-2}
  a0: number, a1: number,        // initial conditions
  n: number                       // term to compute
): number {
  // Characteristic equation: r^2 - c1*r - c2 = 0
  const discriminant = c1 * c1 + 4 * c2;
  if (discriminant > 0) {
    // Distinct real roots
    const r1 = (c1 + Math.sqrt(discriminant)) / 2;
    const r2 = (c1 - Math.sqrt(discriminant)) / 2;
    // Solve for alpha, beta: a0 = a + ?, a1 = a*r1 + ?*r2
    const beta = (a1 - a0 * r1) / (r2 - r1);
    const alpha = a0 - beta;
    return alpha * r1 ** n + beta * r2 ** n;
  } else if (discriminant === 0) {
    // Repeated root
    const r = c1 / 2;
    const beta = (a1 - a0 * r) / r; // n=1 case: a1 = (a + ?*1)*r
    const alpha = a0;
    return (alpha + beta * n) * r ** n;
  } else {
    // Complex roots ? return Fibonacci-style via iteration
    let prev2 = a0, prev1 = a1;
    for (let i = 2; i <= n; i++) {
      const curr = c1 * prev1 + c2 * prev2;
      prev2 = prev1;
      prev1 = curr;
    }
    return prev1;
  }
}

// Fibonacci: F_n = F_{n-1} + F_{n-2}, F_0 = 0, F_1 = 1
console.log(solveLinearRecurrence(1, 1, 0, 1, 10)); // 55
```

> **One-Sentence Takeaway:** Linear homogeneous recurrences are solved via the characteristic polynomial; distinct roots give independent $r^n$ terms while repeated roots multiply by powers of $n$.
>
> **Pro Tip:** Always write the characteristic equation as $r^k - c_1 r^{k-1} - \dots - c_k = 0$, not $r^k = c_1 r^{k-1} + \dots$ ? the sign convention matters when roots are negative.

### 6.5 Linear Nonhomogeneous Recurrences


A **linear nonhomogeneous recurrence** has the form:
$$a_n = c_1 a_{n-1} + \cdots + c_k a_{n-k} + f(n)$$

The solution is $a_n = a_n^{(h)} + a_n^{(p)}$, where $a_n^{(h)}$ solves the homogeneous part and $a_n^{(p)}$ is a particular solution.

**Finding $a_n^{(p)}$ when $f(n)$ is a polynomial:** Try a polynomial of the same degree.
**When $f(n)$ is exponential $r^n$:** Try $A \cdot r^n$. If $r$ is a characteristic root, try $A n^m r^n$ where $m$ is the multiplicity.

| $f(n)$ Form | Initial Guess for $a_n^{(p)}$ | If Root Conflict |
|------------|------------------------------|------------------|
| Constant $C$ | $A$ | $A \cdot n^m$ |
| Linear $an + b$ | $An + B$ | $(An + B) \cdot n^m$ |
| Quadratic $an^2 + bn + c$ | $An^2 + Bn + C$ | $(An^2 + Bn + C) \cdot n^m$ |
| Exponential $C \cdot r^n$ | $A \cdot r^n$ | $A \cdot n^m \cdot r^n$ |

> **One-Sentence Takeaway:** Nonhomogeneous recurrences are solved by adding a particular solution (guessed from $f(n)$'s form) to the homogeneous solution.
>
> **Warning:** When $f(n)$ already appears as a characteristic root, the standard particular solution guess must be multiplied by $n^m$ to avoid duplication.

### 6.6 Generating Functions


The **(ordinary) generating function** of a sequence $\{a_n\}$ is:
$$G(x) = \sum_{n=0}^{\infty} a_n x^n$$

**Theorem 6.4 (Basic generating functions).**
- $a_n = \alpha^n$: $G(x) = \frac{1}{1 - \alpha x}$
- $a_n = n$: $G(x) = \frac{x}{(1 - x)^2}$
- $a_n = n^2$: $G(x) = \frac{x(1+x)}{(1-x)^3}$
- $a_n = \binom{n+k}{k}$: $G(x) = \frac{1}{(1-x)^{k+1}}$

**Solving with generating functions:**
1. Express the recurrence as an equation in $G(x)$.
2. Solve for $G(x)$.
3. Extract coefficients via partial fractions to get $a_n$.

**Example:** Solve $a_n = 2a_{n-1} + 1$, $a_0 = 0$ using generating functions.

Let $G(x) = \sum_{n \geq 0} a_n x^n$. Then $a_n x^n = 2a_{n-1} x^n + x^n$. Summing $n \geq 1$:
$G(x) - a_0 = 2xG(x) + \frac{x}{1-x}$. Since $a_0 = 0$, we have $G(x) = 2xG(x) + \frac{x}{1-x}$.
$G(x)(1 - 2x) = \frac{x}{1-x} \implies G(x) = \frac{x}{(1-x)(1-2x)}$.

Partial fractions: $\frac{x}{(1-x)(1-2x)} = \frac{-1}{1-x} + \frac{1}{1-2x}$.
Thus $G(x) = -\sum x^n + \sum (2x)^n = \sum (2^n - 1) x^n$, so $a_n = 2^n - 1$.

```typescript
// Extract coefficients from generating function via Taylor expansion
function generatingFunctionCoefficients(
  numerator: number[],
  denominatorRoots: number[],
  limit: number
): number[] {
  // Simple case: G(x) = S a_n x^n ? use recurrence
  const result: number[] = [];
  // If we know the closed form via partial fractions, compute directly
  for (let n = 0; n <= limit; n++) {
    let sum = 0;
    for (const root of denominatorRoots) {
      const coeff = 1 / denominatorRoots.reduce((p, r) => r === root ? p : p * (root - r), 1);
      sum += coeff * (1 / root) ** (n + 1); // Simplified ? actual formula depends on partial fraction decomposition
    }
    result.push(sum);
  }
  return result;
}
```

> **One-Sentence Takeaway:** Generating functions turn recurrence relations into algebraic equations by encoding the entire sequence as a power series.

### 6.7 The Master Theorem


**Theorem 6.5 (Master Theorem).** Let $T(n) = a T(n/b) + f(n)$ where $a \geq 1$, $b > 1$, and $f(n)$ is asymptotically positive. Then:

1. If $f(n) = O(n^{\log_b a - \epsilon})$ for some $\epsilon > 0$, then $T(n) = \Theta(n^{\log_b a})$.
2. If $f(n) = \Theta(n^{\log_b a})$, then $T(n) = \Theta(n^{\log_b a} \log n)$.
3. If $f(n) = \Omega(n^{\log_b a + \epsilon})$ for some $\epsilon > 0$ and $a f(n/b) \leq c f(n)$ for some $c &lt; 1$ and large $n$, then $T(n) = \Theta(f(n))$.

| Algorithm | Recurrence | $a$ | $b$ | $f(n)$ | $\log_b a$ | Case | Complexity |
|-----------|-----------|-----|-----|--------|------------|------|------------|
| Linear search | $T(n) = T(n-1) + 1$ | ? | ? | ? | ? | ? | $\Theta(n)$ |
| Binary search | $T(n) = T(n/2) + 1$ | 1 | 2 | $n^0$ | 0 | 2 | $\Theta(\log n)$ |
| Merge sort | $T(n) = 2T(n/2) + n$ | 2 | 2 | $n^1$ | 1 | 2 | $\Theta(n \log n)$ |
| Strassen's matrix | $T(n) = 7T(n/2) + n^2$ | 7 | 2 | $n^2$ | $\log_2 7 \approx 2.81$ | 1 | $\Theta(n^{2.81})$ |
| Median of medians | $T(n) = T(n/5) + T(7n/10) + n$ | ? | ? | ? | ? | ? | $\Theta(n)$ |

> **One-Sentence Takeaway:** The Master theorem provides immediate closed-form solutions for recurrences of the form $T(n) = aT(n/b) + f(n)$ by comparing $f(n)$ to $n^{\log_b a}$.

### 6.8 Recurrences in Algorithm Analysis


```typescript
// Simulate divide-and-conquer recurrence T(n) = 2T(n/2) + n
function simulateMergeSortCost(n: number): number {
  if (n <= 1) return 1;
  const half = Math.floor(n / 2);
  return simulateMergeSortCost(half) + simulateMergeSortCost(n - half) + n;
}

function masterTheorem(a: number, b: number, fExponent: number, logBA: number): string {
  if (fExponent < logBA) return `T(n^${logBA})`;
  if (fExponent === logBA) return `T(n^${logBA} log n)`;
  return `T(n^${fExponent})`;
}

console.log(masterTheorem(2, 2, 1, 1)); // T(n log n) ? merge sort
console.log(masterTheorem(1, 2, 0, 0)); // T(log n) ? binary search
```

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|----------------|----------|
| Forward Iteration | Compute terms sequentially from initial conditions | Builds terms explicitly; guess then prove | Simple recurrences like $a_n = a_{n-1} + d$ |
| Backward Substitution | Expand $a_n$ repeatedly until base case | Produces closed form directly | Multiply-through recurrences like $a_n = c a_{n-1}$ |
| Characteristic Equation | Polynomial whose roots define the solution | Only works for **linear homogeneous** recurrences | Constant-coefficient recurrences of any degree |
| Particular Solution | A single solution to the nonhomogeneous recurrence | Must be added to the homogeneous solution | Recurrences with polynomial or exponential $f(n)$ |
| Generating Function | $G(x) = \sum a_n x^n$ encodes the sequence | Transforms recurrence into algebra | Complex recurrences, combinatorial sequences |
| Algorithm Recurrence | $T(n)$ models runtime as a function of input size | Often uses divide-and-conquer patterns | Analyzing sorting, searching, and divide-and-conquer algorithms |
| Master Theorem | Closed-form for $T(n) = aT(n/b) + f(n)$ | Three cases based on comparison of $f(n)$ to $n^{\log_b a}$ | Quick complexity analysis of divide-and-conquer |

## Quick Reference

| Recurrence Type | Form | Solution Method |
|----------------|------|----------------|
| Linear homogeneous (degree 1) | $a_n = c a_{n-1}$ | $a_n = a_0 c^n$ |
| Linear homogeneous (degree 2, distinct roots) | $a_n = c_1 a_{n-1} + c_2 a_{n-2}$ | $a_n = \alpha r_1^n + \beta r_2^n$ |
| Linear homogeneous (degree 2, repeated root) | $a_n = c_1 a_{n-1} + c_2 a_{n-2}$ | $a_n = (\alpha + \beta n) r^n$ |
| Nonhomogeneous (polynomial $f(n)$) | $a_n = c a_{n-1} + f(n)$ | Homogeneous + particular (try polynomial of same degree) |
| Nonhomogeneous (exponential $f(n)$) | $a_n = c a_{n-1} + r^n$ | Homogeneous + $A r^n$ (or $A n^m r^n$ if root) |
| Generating function | Any linear recurrence | $G(x)$ algebraic equation $\rightarrow$ partial fractions $\rightarrow$ coefficients |
| Master Theorem Case 1 | $f(n) = O(n^{\log_b a - \epsilon})$ | $T(n) = \Theta(n^{\log_b a})$ |
| Master Theorem Case 2 | $f(n) = \Theta(n^{\log_b a})$ | $T(n) = \Theta(n^{\log_b a} \log n)$ |
| Master Theorem Case 3 | $f(n) = \Omega(n^{\log_b a + \epsilon})$ | $T(n) = \Theta(f(n))$ |

## Cross-Application Matrix

| Topic | Computer Science | Combinatorics | Engineering | Finance |
|-------|-----------------|---------------|-------------|---------|
| Recurrence Relations | Algorithm complexity analysis | Counting sequences, Catalan numbers | Digital signal processing (IIR filters) | Loan amortization, compound interest |
| Characteristic Equation | Solving divide-and-conquer recurrences | Fibonacci, derangements | Vibration analysis, differential equations | Population growth models |
| Generating Functions | Combinatorial generation, partition problems | Sequence manipulation, closed forms | Probability generating functions | Moment-generating functions in statistics |
| Algorithm Analysis | Merge sort, binary search runtime | ? | Embedded system timing analysis | ? |
| Master Theorem | Quick complexity class determination | ? | Real-time system scheduling | ? |

## Chapter Quiz

1. What is the degree of the recurrence $a_n = 3a_{n-2} + 5a_{n-5}$?
   - A) 2
   - B) 5
   - C) 3
   - D) 7
   <details><summary>Answer&lt;/summary&gt;**B)** 5 ? the degree is the furthest back term referenced ($n-5$).</details>

2. Which recurrence corresponds to merge sort's time complexity?
   - A) $T(n) = T(n-1) + 1$
   - B) $T(n) = T(n/2) + 1$
   - C) $T(n) = 2T(n/2) + n$
   - D) $T(n) = 2T(n-1) + 1$
   <details><summary>Answer&lt;/summary&gt;**C)** $T(n) = 2T(n/2) + n$ ? splitting into two halves with linear merge cost gives $\Theta(n \log n)$.</details>

3. A recurrence has characteristic roots $r=3$ (multiplicity 2). The general solution is:
   - A) $a_n = \alpha 3^n$
   - B) $a_n = (\alpha + \beta n) 3^n$
   - C) $a_n = \alpha 3^n + \beta (-3)^n$
   - D) $a_n = \alpha 3^n + \beta n 3^n$
   <details><summary>Answer&lt;/summary&gt;**B)** $a_n = (\alpha + \beta n) 3^n$ ? repeated roots multiply the $r^n$ term by a polynomial in $n$ of degree one less than multiplicity. (Note: D is also equivalent since $(\alpha + \beta n)3^n$ and $\alpha 3^n + \beta n 3^n$ are the same ? but B is the standard form.)&lt;/details&gt;

4. For the recurrence $T(n) = 4T(n/2) + n$, the Master theorem gives:
   - A) $\Theta(n^2)$
   - B) $\Theta(n^2 \log n)$
   - C) $\Theta(n \log n)$
   - D) $\Theta(n)$
   <details><summary>Answer&lt;/summary&gt;**A)** $\Theta(n^2)$ ? $a=4$, $b=2$, $\log_2 4 = 2$, $f(n) = n = O(n^{2-\epsilon})$, case 1.</details>

5. The generating function for $a_n = 3 \cdot 5^n$ is:
   - A) $G(x) = 3/(1 - 5x)$
   - B) $G(x) = 5/(1 - 3x)$
   - C) $G(x) = 1/(1 - 5x)^3$
   - D) $G(x) = 3/(5 - x)$
   <details><summary>Answer&lt;/summary&gt;**A)** $G(x) = \sum_{n \geq 0} 3 \cdot 5^n x^n = 3 \sum (5x)^n = 3/(1 - 5x)$.</details>

## Examples

**Example 6.1** (Iteration). Solve $a_n = a_{n-1} + 3$, $a_0 = 2$.

*Solution.* $a_1 = 5$, $a_2 = 8$, $a_3 = 11$ ? pattern $a_n = 2 + 3n$. Induction confirms.

**Example 6.2** (Backward substitution). Solve $a_n = 2a_{n-1}$, $a_0 = 3$.

*Solution.* $a_n = 2a_{n-1} = 2(2a_{n-2}) = \cdots = 2^n a_0 = 3 \cdot 2^n$.

**Example 6.3** (Characteristic equation ? distinct roots). Solve $a_n = a_{n-1} + 2a_{n-2}$, $a_0 = 2$, $a_1 = 3$.

*Solution.* Characteristic: $r^2 - r - 2 = 0 \implies r = 2$ or $r = -1$. General: $a_n = \alpha 2^n + \beta (-1)^n$. Using $a_0 = 2 \implies \alpha + \beta = 2$. $a_1 = 3 \implies 2\alpha - \beta = 3$. Solving: $\alpha = 5/3$, $\beta = 1/3$. So $a_n = \frac{5}{3} 2^n + \frac{1}{3} (-1)^n$.

**Example 6.4** (Characteristic ? repeated root). Solve $a_n = 4a_{n-1} - 4a_{n-2}$, $a_0 = 1$, $a_1 = 4$.

*Solution.* $r^2 - 4r + 4 = 0 \implies (r-2)^2 = 0 \implies r = 2$ (multiplicity 2). General: $a_n = (\alpha + \beta n)2^n$. $a_0 = \alpha = 1$. $a_1 = (\alpha + \beta)2 = (1+\beta)2 = 4 \implies \beta = 1$. So $a_n = (1 + n)2^n$.

**Example 6.5** (Nonhomogeneous). Solve $a_n = a_{n-1} + 2n$, $a_0 = 1$.

*Solution.* Homogeneous part: $a_n^{(h)} = \alpha \cdot 1^n = \alpha$. Particular: try $a_n^{(p)} = An + B$:
$An + B = A(n-1) + B + 2n \implies An + B = An - A + B + 2n \implies 0 = -A + 2n \implies A = 2n$ (contradiction ? degree mismatch). Try $a_n^{(p)} = An^2 + Bn$:
$An^2 + Bn = A(n-1)^2 + B(n-1) + 2n = A(n^2 - 2n + 1) + Bn - B + 2n$
Simplify: $An^2 + Bn = An^2 + (-2A + B + 2)n + (A - B)$
Compare coefficients: $A = A$ (ok); $B = -2A + B + 2 \implies 0 = -2A + 2 \implies A = 1$; $0 = A - B \implies B = 1$.
So $a_n^{(p)} = n^2 + n$. Thus $a_n = \alpha + n^2 + n$. $a_0 = \alpha = 1 \implies a_n = n^2 + n + 1$.

**Example 6.6** (Generating function). Solve $a_n = 3a_{n-1}$, $a_0 = 2$ using generating functions.

*Solution.* $G(x) = \sum a_n x^n$, so $G(x) - 2 = 3xG(x)$, thus $G(x)(1 - 3x) = 2$, $G(x) = 2/(1 - 3x) = 2\sum (3x)^n = \sum 2\cdot 3^n x^n$, so $a_n = 2\cdot 3^n$.

**Example 6.7** (Master theorem ? binary search). $T(n) = T(n/2) + 1$.

$a = 1$, $b = 2$, $\log_2 1 = 0$, $f(n) = 1 = \Theta(n^0)$. Case 2: $T(n) = \Theta(\log n)$.

**Example 6.8** (Nonhomogeneous with root conflict). Solve $a_n = 2a_{n-1} + 3^n$, $a_0 = 0$.

*Solution.* Homogeneous: $a_n^{(h)} = \alpha \cdot 2^n$. For the particular, try $A \cdot 3^n$ (3 is not a characteristic root). $A \cdot 3^n = 2A \cdot 3^{n-1} + 3^n \implies A \cdot 3^n = 2A \cdot 3^{n-1} + 3^n$. Divide by $3^{n-1}$: $3A = 2A + 3 \implies A = 3$. So $a_n^{(p)} = 3 \cdot 3^n = 3^{n+1}$. Thus $a_n = \alpha \cdot 2^n + 3^{n+1}$. $a_0 = \alpha + 3 = 0 \implies \alpha = -3$. So $a_n = -3 \cdot 2^n + 3^{n+1} = 3(3^n - 2^n)$.

### 6.7 Solving Recurrences with TypeScript

**General Linear Recurrence Solver** (for homogeneous recurrences with constant coefficients).

```typescript
function solveLinearRecurrence(
  coeffs: number[],
  initial: number[],
  n: number
): number[] {
  const k = coeffs.length;
  const seq = [...initial];

  for (let i = k; i <= n; i++) {
    let next = 0;
    for (let j = 0; j < k; j++) {
      next += coeffs[j] * seq[i - 1 - j];
    }
    seq.push(next);
  }
  return seq;
}

// Fibonacci: a_n = a_{n-1} + a_{n-2}, a_0 = 0, a_1 = 1
console.log(solveLinearRecurrence([1, 1], [0, 1], 10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// a_n = 2a_{n-1} + 3a_{n-2}, a_0 = 1, a_1 = 2
console.log(solveLinearRecurrence([2, 3], [1, 2], 8));
// [1, 2, 7, 20, 61, 182, 547, 1640, 4921]
```

**Divide-and-Conquer Recurrence Simulator.**

```typescript
function simulateDivideConquer(
  a: number,
  b: number,
  f: (n: number) => number,
  base: (n: number) => number,
  n: number
): number {
  if (n <= 1) return base(n);
  return a * simulateDivideConquer(a, b, f, base, Math.floor(n / b)) + f(n);
}

// Merge sort: T(n) = 2T(n/2) + n, T(1) = 0
const mergeSortCost = (n: number) => simulateDivideConquer(2, 2, n => n, n => 0, n);
console.log(mergeSortCost(8));  // 24 operations

// Binary search: T(n) = T(n/2) + 1, T(1) = 0
const binarySearchCost = (n: number) => simulateDivideConquer(1, 2, n => 1, n => 0, n);
console.log(binarySearchCost(16)); // 4 comparisons
```

### 6.8 Master Theorem ? Extended Cases

**Theorem 6.3 (Master Theorem).** For recurrences of the form $T(n) = aT(n/b) + f(n)$:

Let $\alpha = \log_b a$. Compare $f(n)$ to $n^\alpha$:
- **Case 1:** $f(n) = O(n^{\alpha - \epsilon})$ ? $T(n) = \Theta(n^\alpha)$
- **Case 2:** $f(n) = \Theta(n^\alpha \log^k n)$ ? $T(n) = \Theta(n^\alpha \log^{k+1} n)$
- **Case 3:** $f(n) = \Omega(n^{\alpha + \epsilon})$ and $af(n/b) \leq c f(n)$ for some $c &lt; 1$ ? $T(n) = \Theta(f(n))$

```typescript
function masterTheorem(
  a: number,
  b: number,
  fExponent: number,
  fLogPower: number
): string {
  const alpha = Math.log(a) / Math.log(b);
  const diff = fExponent - alpha;

  if (Math.abs(diff) < 1e-10) {
    if (fLogPower === -1) return `T(n^${alpha} log log n)`;
    return `T(n^${alpha} log^${fLogPower + 1} n)`;
  }
  if (diff < 0) return `T(n^${alpha.toFixed(2)})`;
  if (diff > 0) return `T(n^${fExponent})`;
  return "Check regularity condition";
}

console.log(masterTheorem(2, 2, 1, 0));   // Merge sort: T(n log n)
console.log(masterTheorem(1, 2, 0, 0));   // Binary search: T(log n)
console.log(masterTheorem(4, 2, 2, 0));   // Case 2: T(n? log n)
console.log(masterTheorem(2, 2, 2, 0));   // Case 3: T(n?)
console.log(masterTheorem(3, 4, 1, 0));   // Case 1: T(n^0.79)
```

### 6.9 Generating Functions ? Extended Examples

A **generating function** encodes a sequence as coefficients of a power series: $G(x) = \sum_{n=0}^\infty a_n x^n$.

```typescript
function generatingFunction(
  coeffFn: (n: number) => number,
  terms: number
): number[] {
  return Array.from({ length: terms }, (_, i) => coeffFn(i));
}

function seqToGeneratingFunction(seq: number[]): string {
  return seq.map((a, i) => a === 0 ? "" : `${a}x^${i}`).filter(s => s).join(" + ");
}

const fib = solveLinearRecurrence([1, 1], [0, 1], 8);
console.log(seqToGeneratingFunction(fib));
// "0 + 1x^1 + 1x^2 + 2x^3 + 3x^4 + 5x^5 + 8x^6 + 13x^7 + 21x^8"
```

**Example 6.9** (Generating function for Fibonacci numbers). The generating function $F(x) = \sum F_n x^n$ satisfies $F(x) = x + xF(x) + x^2F(x)$, giving:

$$F(x) = \frac{x}{1 - x - x^2}$$

### 6.10 Nonhomogeneous Recurrences ? Root Conflict Handling

When the nonhomogeneous term matches a characteristic root, multiply the particular solution by $n^m$ where $m$ is the root multiplicity.

**Example 6.10** (Root conflict). Solve $a_n = 5a_{n-1} - 6a_{n-2} + 2^n$, $a_0 = 0$, $a_1 = 1$.

*Solution.* Characteristic: $r^2 - 5r + 6 = 0 \to r = 2, 3$. Homogeneous: $a_n^{(h)} = \alpha \cdot 2^n + \beta \cdot 3^n$.

Since $2$ is a characteristic root, the particular solution attempts $A \cdot n \cdot 2^n$:

$$A n 2^n = 5A (n-1)2^{n-1} - 6A (n-2)2^{n-2} + 2^n$$

Divide through by $2^{n-2}$: $4An = 10A(n-1) - 6A(n-2) + 4$
$4An = 10An - 10A - 6An + 12A + 4 = 4An + 2A + 4$
Thus $0 = 2A + 4 \implies A = -2$.

Particular: $a_n^{(p)} = -2n \cdot 2^n$. General: $a_n = \alpha \cdot 2^n + \beta \cdot 3^n - 2n \cdot 2^n$.

Using $a_0 = \alpha + \beta = 0$, $a_1 = 2\alpha + 3\beta - 4 = 1$, we get $\alpha = 1$, $\beta = -1$.
Thus $a_n = 2^n - 3^n - 2n \cdot 2^n$.

**Example 6.11** (Master theorem ? Strassen's matrix multiplication). $T(n) = 7T(n/2) + O(n^2)$.

$a = 7$, $b = 2$, $\alpha = \log_2 7 \approx 2.807$, $f(n) = n^2 = O(n^{2.807 - 0.807})$. Case 1: $T(n) = \Theta(n^{\log_2 7}) \approx \Theta(n^{2.807})$.

### 6.11 Recurrence Applications in Algorithms

```typescript
// Tower of Hanoi: T(n) = 2T(n-1) + 1, T(1) = 1
function hanoi(n: number, from: string, to: string, aux: string): string[] {
  if (n === 0) return [];
  const moves: string[] = [];
  moves.push(...hanoi(n - 1, from, aux, to));
  moves.push(`Move disk ${n} from ${from} to ${to}`);
  moves.push(...hanoi(n - 1, aux, to, from));
  return moves;
}

console.log(hanoi(3, "A", "C", "B"));
// Move disk 1 from A to C, disk 2 from A to B, ...
console.log(`Total moves for 3 disks: ${Math.pow(2, 3) - 1}`); // 7

// Quicksort worst case: T(n) = T(n-1) + n
function quicksortCost(n: number): number {
  if (n <= 1) return 0;
  return n + quicksortCost(n - 1);
}
console.log(quicksortCost(10)); // 55 comparisons (n(n+1)/2 - n = n?/2 - n/2)
```

```mermaid
flowchart TD
    subgraph "Recurrence Solving Strategy"
        A[Tn = ...] --> B{Linear?}
        B -->|Yes| C{Constant<br/>Coefficients?}
        B -->|No| D[Iteration or<br/>Substitution]
        C -->|Yes| E{Homogeneous?}
        C -->|No| F[Generating<br/>Functions]
        E -->|Yes| G[Characteristic<br/>Equation]
        E -->|No| H[Homogeneous +<br/>Particular]
        G --> I[r^k - c1r^{k-1} - ... = 0]
        I --> J[Roots ? General Form]
        H --> K[Root Conflict?]
        K -->|Yes| L[Multiply by n^m]
        K -->|No| M[Standard Form]
        D --> N[Guess then<br/>Induction Proof]
    end
```

**Example 6.12** (Divide-and-conquer ? maximum subarray). The divide-and-conquer approach for Kadane's problem can be analyzed as $T(n) = 2T(n/2) + O(n) = O(n \log n)$.

**Proof 6.5** (Correctness of Master theorem case 2). Let $T(n) = aT(n/b) + cn^\alpha \log^k n$ where $\alpha = \log_b a$. Expanding the recurrence:

$$T(n) = n^\alpha \sum_{j=0}^{\log_b n} c \log^k\left(\frac{n}{b^j}\right)$$

The sum approximates $\int_0^{\log_b n} c(\log_b n - x)^k \,dx = \frac{c}{k+1} (\log_b n)^{k+1}$, giving $T(n) = \Theta(n^\alpha \log^{k+1} n)$. $\square$

**Example 6.13** (Solving $a_n = a_{n-1} + a_{n-2}$ ? Fibonacci closed form).

```typescript
function fibonacciClosedForm(n: number): number {
  const phi = (1 + Math.sqrt(5)) / 2;
  const psi = (1 - Math.sqrt(5)) / 2;
  return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5));
}

for (let i = 0; i <= 10; i++) {
  console.log(`F_${i} = ${fibonacciClosedForm(i)}`);
}
```

## Additional Exercises

16. Solve $a_n = 4a_{n-1} - 4a_{n-2}$, $a_0 = 1$, $a_1 = 4$ (double root case).

17. Use the Master theorem to analyze $T(n) = 8T(n/2) + n^3$. Which case applies?

18. Solve the recurrence $a_n = 2a_{n-1} - a_{n-2} + 2^n$, $a_0 = 0$, $a_1 = 2$.

19. Show that the solution to $T(n) = 2T(\lfloor n/2 \rfloor) + n$ (merge sort) is $\Theta(n \log n)$ by induction.

20. Write a TypeScript function that uses generating functions to compute the first 10 terms of any linear recurrence with constant coefficients.

## TypeScript Implementations

```typescript
// --- Fibonacci via Dynamic Programming ---
function fibonacciDP(n: number): number {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
}
console.log('Fibonacci(10):', fibonacciDP(10)); // 55

// Space-optimized version
function fibonacciOpt(n: number): number {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) { const t = a + b; a = b; b = t; }
  return b;
}
console.log('Fibonacci(50):', fibonacciOpt(50)); // 12586269025

// --- Tower of Hanoi Solver ---
function hanoiSteps(n: number, from: string, to: string, aux: string): string[] {
  if (n === 0) return [];
  const steps: string[] = [];
  steps.push(...hanoiSteps(n - 1, from, aux, to));
  steps.push(`Move disk ${n} from ${from} to ${to}`);
  steps.push(...hanoiSteps(n - 1, aux, to, from));
  return steps;
}
console.log('Hanoi(3):', hanoiSteps(3, 'A', 'C', 'B'));

// --- Linear Recurrence Solver ---
function linearRecurrence(
  coeffs: number[],    // c_1, c_2, ..., c_k
  initials: number[],  // a_0, a_1, ..., a_{k-1}
  n: number
): number {
  const k = coeffs.length;
  if (n < k) return initials[n];
  const seq = [...initials];
  for (let i = k; i <= n; i++) {
    let term = 0;
    for (let j = 0; j < k; j++) term += coeffs[j] * seq[i - 1 - j];
    seq.push(term);
  }
  return seq[n];
}
// a_n = 3a_{n-1} - 2a_{n-2}, a_0=1, a_1=2
console.log('Recurrence a_5:', linearRecurrence([3, -2], [1, 2], 5)); // ?

// --- Master Theorem Analyzer ---
function masterTheorem(a: number, b: number, fExponent: number): string {
  const logBA = Math.log(a) / Math.log(b);
  if (Math.abs(fExponent - logBA) < 1e-10) return `T(n^${logBA} log n)`;
  if (fExponent < logBA) return `T(n^${logBA.toFixed(2)})`;
  return `T(n^${fExponent})`; // assumes regularity condition holds
}
// T(n) = 2T(n/2) + n
console.log('T(n)=2T(n/2)+n:', masterTheorem(2, 2, 1)); // T(n log n)
// T(n) = 8T(n/2) + n^3
console.log('T(n)=8T(n/2)+n?:', masterTheorem(8, 2, 3)); // T(n^3)

// --- Divide-and-Conquer Recurrence Simulator ---
function mergeSortComparisons(arr: number[]): number {
  if (arr.length <= 1) return 0;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid), right = arr.slice(mid);
  let comps = mergeSortComparisons(left) + mergeSortComparisons(right);
  let i = 0, j = 0, k = 0;
  while (i < left.length && j < right.length) {
    comps++;
    if (left[i] <= right[j]) arr[k++] = left[i++];
    else arr[k++] = right[j++];
  }
  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];
  return comps;
}
console.log('Merge sort comparisons:', mergeSortComparisons([5, 2, 4, 7, 1, 3, 6, 8])); // ~n log n
```

```
// --- Matrix Exponentiation for Recurrences ---
function matMul(A: number[][], B: number[][]): number[][] {
  const n = A.length, m = B[0].length, p = A[0].length;
  const C = Array.from({length: n}, () => new Array(m).fill(0));
  for (let i = 0; i < n; i++)
    for (let k = 0; k < p; k++)
      if (A[i][k] !== 0)
        for (let j = 0; j < m; j++)
          C[i][j] += A[i][k] * B[k][j];
  return C;
}
function matPow(M: number[][], exp: number): number[][] {
  const n = M.length;
  let result = Array.from({length: n}, (_, i) => Array.from({length: n}, (_, j) => i === j ? 1 : 0));
  let base = M.map(r => [...r]);
  let e = exp;
  while (e > 0) { if (e & 1) result = matMul(result, base); base = matMul(base, base); e >>= 1; }
  return result;
}
// Fibonacci via matrix exponentiation: [[1,1],[1,0]]^n
function fibMatrix(n: number): number {
  if (n === 0) return 0;
  const M = [[1, 1], [1, 0]];
  const Mn = matPow(M, n - 1);
  return Mn[0][0];
}
console.log('Fib(50) via matrix exp:', fibMatrix(50));
console.log('Fib(100) via matrix exp:', fibMatrix(100));

// --- Linear Recurrence Solver ---
function linearRecurrence(coeffs: number[], initial: number[], n: number): number {
  const k = coeffs.length;
  const seq = [...initial];
  for (let i = seq.length; i <= n; i++) {
    let next = 0;
    for (let j = 0; j < k; j++) next += coeffs[j] * seq[i - 1 - j];
    seq.push(next);
  }
  return seq[n];
}
// a_n = 2*a_{n-1} + 3*a_{n-2}, a_0=1, a_1=2
console.log('\nLinear recurrence a_n=2a_{n-1}+3a_{n-2}: a_5 =', linearRecurrence([2, 3], [1, 2], 5));

// --- Divide-and-Conquer Master Theorem Verifier ---
function masterTheorem(a: number, b: number, f_n_degree: number): string {
  const logba = Math.log(a) / Math.log(b);
  const epsilon = 0.0001;
  if (f_n_degree < logba - epsilon) return `T(n^${logba.toFixed(2)}) (case 1)`;
  if (Math.abs(f_n_degree - logba) < epsilon) return `T(n^${logba.toFixed(2)} log n) (case 2)`;
  if (f_n_degree > logba + epsilon) return `T(n^${f_n_degree.toFixed(2)}) (case 3)`;
  return 'complexity ambiguous';
}
console.log('\nMaster theorem T(n)=2T(n/2)+O(n):', masterTheorem(2, 2, 1));  // case 2: T(n log n)
console.log('Master theorem T(n)=4T(n/2)+O(n):', masterTheorem(4, 2, 1));  // case 1: T(n?)
console.log('Master theorem T(n)=2T(n/2)+O(n?):', masterTheorem(2, 2, 2)); // case 3: T(n?)

// --- Generating Function Term Calculator ---
function genFuncCoeff(seq: number[], n: number): number[] {
  const result = new Array(n + 1).fill(0);
  result[0] = 1;
  for (const s of seq) {
    for (let i = s; i <= n; i++) result[i] += result[i - s];
  }
  return result;
}
// Generating function for coins {1, 2, 5}: number of ways to make change
console.log('\nCoin change ways (coins 1,2,5) up to n=10:', genFuncCoeff([1, 2, 5], 10).join(', '));
```


// recurrence
// sets-graphs-probability implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit&lt;Task, "status"&gt;): Promise&lt;void&gt; {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise&lt;void&gt; {
    const running: Promise&lt;void&gt;[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise&lt;void&gt; {
    t.status = "running"
    await new Promise(r => setTimeout(r, 10))
    t.status = "done"
  }
  getResults(): Task[] { return this.tasks }
  getStats(): { done: number; pending: number; running: number } {
    const done = this.tasks.filter(t => t.status === "done").length
    const pending = this.tasks.filter(t => t.status === "pending").length
    const running = this.tasks.filter(t => t.status === "running").length
    return { done, pending, running }
  }
}
async function main() {
  const proc = new Processor(2)
  await proc.add({ id: '1', name: 'recurrence', data: { topic: 'sets-graphs-probability' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }

// recurrence - additional TS implementations

interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }
class Cache {
  private store: Map&lt;string, CacheEntry&gt; = new Map()
  constructor(private defaultTTL: number = 60000) {}
  set(key: string, value: unknown, ttl?: number): void {
    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })
  }
  get(key: string): unknown | undefined {
    const entry = this.store.get(key)
    if (!entry) return undefined
    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }
    return entry.value
  }
  delete(key: string): boolean { return this.store.delete(key) }
  clear(): void { this.store.clear() }
  size(): number { return this.store.size }
  keys(): string[] { return Array.from(this.store.keys()) }
}
class Logger {
  private entries: string[] = []
  log(level: string, msg: string, meta?: Record&lt;string, unknown&gt;): void {
    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })
    this.entries.push(entry)
    console.log(entry)
  }
  info(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("info", msg, meta) }
  warn(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("warn", msg, meta) }
  error(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("error", msg, meta) }
  getLogs(): string[] { return [...this.entries] }
  clear(): void { this.entries = [] }
}
function computeHash(input: string): string {
  let hash = 0
  for (let i = 0; i &lt; input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }
  return Math.abs(hash).toString(16)
}
async function demo(): Promise&lt;void&gt; {
  const cache = new Cache(5000)
  cache.set('key1', 'discrete-math demo')
  const log = new Logger()
  log.info('Cache demo started', { course: 'discrete-mathematics', chapter: 'recurrence' })
  const v = cache.get("key1")
  console.log('Cached:', v)
  console.log('Hash:', computeHash('discrete-math'))
}
demo()
export { Cache, Logger, computeHash, CacheEntry }
## Summary

- Recurrence relations define sequences from initial terms and a dependency rule.
- Linear homogeneous recurrences are solved via characteristic polynomials.
- Nonhomogeneous recurrences add a particular solution to the homogeneous solution.
- Generating functions transform recurrences into algebraic equations.
- The Master theorem provides immediate complexity classes for divide-and-conquer recurrences.
- Recurrences model algorithm time complexity in computer science.

## Practical Takeaways

1. **Iterate for simple recurrences** ? forward or backward, then prove by induction.
2. **Characteristic equation for homogeneous** ? solve $r^k - c_1 r^{k-1} - \cdots - c_k = 0$.
3. **Particular solutions need the right form** ? if $f(n)$ matches a characteristic root, multiply by $n^m$.
4. **Generate for complex sequences** ? generating functions handle recurrences that resist other methods.
5. **Master theorem for algorithms** ? $T(n) = aT(n/b) + f(n)$ covers most divide-and-conquer algorithms.
6. **Always verify solutions** ? plug the closed form back into the recurrence to check correctness.

## Exercises

### Review Questions

1. What is the degree of $a_n = 3a_{n-2} + 5a_{n-5}$?
2. Write the characteristic equation for $a_n = 3a_{n-1} - 2a_{n-3}$.
3. When does a recurrence require a particular solution?
4. What is the general form of solution when $r=3$ is a double root?
5. Give the generating function for $a_n = 5^n$.

### Application Problems

6. Solve $a_n = 5a_{n-1} - 6a_{n-2}$, $a_0 = 1$, $a_1 = 3$.

7. Solve $a_n = a_{n-1} + n$, $a_0 = 0$ by iteration, then verify.

8. Solve $a_n = 6a_{n-1} - 9a_{n-2}$, $a_0 = 2$, $a_1 = 6$.

9. Solve $a_n = 3a_{n-1} + 2^n$, $a_0 = 1$ (nonhomogeneous).

10. Use generating functions to solve $a_n = 3a_{n-1}$, $a_0 = 2$.

11. Apply the Master theorem to $T(n) = 4T(n/2) + n^2$.

12. Solve $a_n = 2a_{n-1} + 3$, $a_0 = 1$ by both iteration and characteristic methods.

### Challenge Problem

13. The **Tower of Hanoi** has recurrence $T_n = 2T_{n-1} + 1$, $T_1 = 1$. Solve this recurrence using the characteristic root method (with the nonhomogeneous term as $1$) and verify that $T_n = 2^n - 1$. Then prove by induction that $T_n \geq 2^n - 1$ for all $n \geq 1$.

14. Solve $a_n = 5a_{n-1} - 8a_{n-2} + 4a_{n-3}$, $a_0 = 1$, $a_1 = 2$, $a_2 = 4$ (hint: the characteristic equation has a triple root).

15. Use the Master theorem to analyze $T(n) = 3T(n/4) + n \log n$. Which case applies, and what is the complexity?
