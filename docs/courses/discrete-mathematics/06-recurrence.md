# Chapter 6: Recurrence Relations

## Learning Objectives

![Recurrence Relations Overview](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/discrete-mathematics/06-recurrence.png)

After completing this chapter, you will be able to:

- Model sequences using recurrence relations and initial conditions
- Solve linear recurrences by iteration
- Solve homogeneous linear recurrences with constant coefficients
- Solve nonhomogeneous recurrences
- Use generating functions to solve recurrences
- Analyze algorithm complexity via recurrences

## Theory

### 6.1 Definitions

A **recurrence relation** for a sequence $\{a_n\}$ is an equation relating $a_n$ to one or more preceding terms $a_{n-1}, a_{n-2}, \ldots, a_{n-k}$ for $n \geq k$. A sequence is called a **solution** if its terms satisfy the recurrence for all $n \geq k$. The **initial conditions** specify $a_0, a_1, \ldots, a_{k-1}$.

**Example.** The Fibonacci recurrence $F_n = F_{n-1} + F_{n-2}$ with $F_1 = 1, F_2 = 1$.

### 6.2 Solving by Iteration (Forward Substitution)

Work forward from initial conditions, computing terms until a pattern emerges, then prove by induction.

### 6.3 Solving by Backward Substitution

Express $a_n$ in terms of $a_{n-1}$, then $a_{n-1}$ in terms of $a_{n-2}$, continuing until reaching the base case. This often reveals a closed form.

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

### 6.5 Linear Nonhomogeneous Recurrences

A **linear nonhomogeneous recurrence** has the form:
$$a_n = c_1 a_{n-1} + \cdots + c_k a_{n-k} + f(n)$$

The solution is $a_n = a_n^{(h)} + a_n^{(p)}$, where $a_n^{(h)}$ solves the homogeneous part and $a_n^{(p)}$ is a particular solution.

**Finding $a_n^{(p)}$ when $f(n)$ is a polynomial:** Try a polynomial of the same degree.
**When $f(n)$ is exponential $r^n$:** Try $A \cdot r^n$. If $r$ is a characteristic root, try $A n^m r^n$ where $m$ is the multiplicity.

### 6.6 Generating Functions

The **(ordinary) generating function** of a sequence $\{a_n\}$ is:
$$G(x) = \sum_{n=0}^{\infty} a_n x^n$$

**Theorem 6.3.** The generating function for $a_n = \alpha^n$ is $G(x) = \frac{1}{1 - \alpha x}$.
The generating function for $a_n = n$ is $G(x) = \frac{x}{(1 - x)^2}$.

**Solving with generating functions:**
1. Express the recurrence as an equation in $G(x)$.
2. Solve for $G(x)$.
3. Extract coefficients to get $a_n$.

### 6.7 Recurrences in Algorithm Analysis

| Algorithm | Recurrence | Closed Form |
|-----------|-----------|-------------|
| Linear search | $T(n) = T(n-1) + 1$ | $T(n) = \Theta(n)$ |
| Binary search | $T(n) = T(n/2) + 1$ | $T(n) = \Theta(\log n)$ |
| Merge sort | $T(n) = 2T(n/2) + n$ | $T(n) = \Theta(n \log n)$ |

## Examples

**Example 6.1** (Iteration). Solve $a_n = a_{n-1} + 3$, $a_0 = 2$.

*Solution.* $a_1 = 5$, $a_2 = 8$, $a_3 = 11$ — pattern $a_n = 2 + 3n$. Induction confirms.

**Example 6.2** (Backward substitution). Solve $a_n = 2a_{n-1}$, $a_0 = 3$.

*Solution.* $a_n = 2a_{n-1} = 2(2a_{n-2}) = \cdots = 2^n a_0 = 3 \cdot 2^n$.

**Example 6.3** (Characteristic equation — distinct roots). Solve $a_n = a_{n-1} + 2a_{n-2}$, $a_0 = 2$, $a_1 = 3$.

*Solution.* Characteristic: $r^2 - r - 2 = 0 \implies r = 2$ or $r = -1$. General: $a_n = \alpha 2^n + \beta (-1)^n$. Using $a_0 = 2 \implies \alpha + \beta = 2$. $a_1 = 3 \implies 2\alpha - \beta = 3$. Solving: $\alpha = 5/3$, $\beta = 1/3$. So $a_n = \frac{5}{3} 2^n + \frac{1}{3} (-1)^n$.

**Example 6.4** (Characteristic — repeated root). Solve $a_n = 4a_{n-1} - 4a_{n-2}$, $a_0 = 1$, $a_1 = 4$.

*Solution.* $r^2 - 4r + 4 = 0 \implies (r-2)^2 = 0 \implies r = 2$ (multiplicity 2). General: $a_n = (\alpha + \beta n)2^n$. $a_0 = \alpha = 1$. $a_1 = (\alpha + \beta)2 = (1+\beta)2 = 4 \implies \beta = 1$. So $a_n = (1 + n)2^n$.

**Example 6.5** (Nonhomogeneous). Solve $a_n = a_{n-1} + 2n$, $a_0 = 1$.

*Solution.* Homogeneous part: $a_n^{(h)} = \alpha \cdot 1^n = \alpha$. Particular: try $a_n^{(p)} = An + B$:
$An + B = A(n-1) + B + 2n \implies An + B = An - A + B + 2n \implies 0 = -A + 2n \implies A = 2n$ (contradiction — degree mismatch). Try $a_n^{(p)} = An^2 + Bn$:
$An^2 + Bn = A(n-1)^2 + B(n-1) + 2n = A(n^2 - 2n + 1) + Bn - B + 2n$
Simplify: $An^2 + Bn = An^2 + (-2A + B + 2)n + (A - B)$
Compare coefficients: $A = A$ (ok); $B = -2A + B + 2 \implies 0 = -2A + 2 \implies A = 1$; $0 = A - B \implies B = 1$.
So $a_n^{(p)} = n^2 + n$. Thus $a_n = \alpha + n^2 + n$. $a_0 = \alpha = 1 \implies a_n = n^2 + n + 1$.

**Example 6.6** (Generating function). Solve $a_n = 2a_{n-1} + 1$, $a_0 = 0$.

*Solution.* Let $G(x) = \sum_{n \geq 0} a_n x^n$. Then $a_n x^n = 2a_{n-1} x^n + x^n$. Summing $n \geq 1$:
$G(x) - a_0 = 2xG(x) + \frac{x}{1-x}$. Since $a_0 = 0$, we have $G(x) = 2xG(x) + \frac{x}{1-x}$.
$G(x)(1 - 2x) = \frac{x}{1-x} \implies G(x) = \frac{x}{(1-x)(1-2x)}$.
Partial fractions: $\frac{x}{(1-x)(1-2x)} = \frac{A}{1-x} + \frac{B}{1-2x} = \frac{-1}{1-x} + \frac{1}{1-2x}$.
Thus $G(x) = -\sum x^n + \sum (2x)^n = \sum (2^n - 1) x^n$, so $a_n = 2^n - 1$.

## Summary

- Recurrence relations define sequences from initial terms and a dependency rule.
- Linear homogeneous recurrences are solved via characteristic polynomials.
- Nonhomogeneous recurrences add a particular solution to the homogeneous solution.
- Generating functions transform recurrences into algebraic equations.
- Recurrences model algorithm time complexity.

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

### Challenge Problem

11. The **Tower of Hanoi** has recurrence $T_n = 2T_{n-1} + 1$, $T_1 = 1$. Solve this recurrence using the characteristic root method (with the nonhomogeneous term as $1$) and verify that $T_n = 2^n - 1$. Then prove by induction that $T_n \geq 2^n - 1$ for all $n \geq 1$.
