# Chapter 2: Single Variable Calculus

> **Previous:** [Chapter 1: Linear Algebra](01-linear-algebra.md) | **Next:** [Chapter 3: Multivariable Calculus](03-calculus-ii.md)

## Learning Objectives

After completing this chapter, you will be able to:

- Evaluate limits of functions using algebraic manipulation and L'H?pital's rule
- Compute derivatives using the limit definition and differentiation rules
- Apply differentiation to optimization, related rates, and curve sketching
- Evaluate definite and indefinite integrals using substitution, integration by parts, and partial fractions
- Determine convergence or divergence of improper integrals
- Analyze sequences and series, including power series
- Compute Taylor and Maclaurin series expansions of functions

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Limits | $\lim_{x \to a} f(x) = L$ means $f(x)$ approaches $L$ as $x$ approaches $a$ | Foundation for continuity and derivatives |
| Derivatives | $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$ measures instantaneous rate of change | Gradient descent, optimization, physics |
| Integration | $\int_a^b f(x)\,dx$ accumulates area under the curve | Computing totals from rates |
| FTC | $\frac{d}{dx} \int_a^x f(t)dt = f(x)$ links differentiation and integration | The fundamental insight of calculus |
| Series | $f(x) = \sum_{n=0}^\infty a_n (x-c)^n$ represents functions as polynomials | Approximation, ML activation functions |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Limits & Continuity] --> B[Derivatives]
    B --> C[Applications: Optimization, Related Rates]
    C --> D[Integration]
    D --> E[Applications: Area, Volume]
    E --> F[Improper Integrals]
    F --> G[Sequences & Series]
    G --> H[Power & Taylor Series]
```

## Theory

### 2.1 Limits and Continuity

<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-1-limits-and-continuity-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-1-limits-and-continuity-handwritten.svg" alt="Handwritten: 2.1 Limits and Continuity" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-1-limits-and-continuity-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-1-limits-and-continuity-diagram.svg" alt="Diagram: 2.1 Limits and Continuity" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-1-limits-and-continuity-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-1-limits-and-continuity-sticky.svg" alt="Sticky Note: 2.1 Limits and Continuity" width="30%">
</a>


**Informal Definition:** $\lim_{x \to a} f(x) = L$ means that as $x$ gets arbitrarily close to $a$ (from either side), $f(x)$ gets arbitrarily close to $L$.

**Formal ($\epsilon$-$\delta$) Definition:** $\lim_{x \to a} f(x) = L$ if for every $\epsilon > 0$, there exists $\delta > 0$ such that $0 &lt; |x - a| < \delta$ implies $|f(x) - L| < \epsilon$.

**One-Sided Limits:**
- Right-hand: $\lim_{x \to a^+} f(x)$ ? approach from values greater than $a$
- Left-hand: $\lim_{x \to a^-} f(x)$ ? approach from values less than $a$
- The two-sided limit exists iff both one-sided limits exist and are equal.

**Limit Laws:** If $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$, then:

- $\lim_{x \to a} [f(x) \pm g(x)] = L \pm M$
- $\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot M$
- $\lim_{x \to a} [f(x)/g(x)] = L/M$ (provided $M \neq 0$)
- $\lim_{x \to a} [c \cdot f(x)] = c \cdot L$
- $\lim_{x \to a} [f(x)]^n = L^n$

**Special Limits:**

- $\lim_{x \to 0} \frac{\sin x}{x} = 1$
- $\lim_{x \to 0} \frac{e^x - 1}{x} = 1$
- $\lim_{x \to \infty} (1 + \frac{1}{x})^x = e$
- $\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1$

**Continuity:** $f$ is continuous at $x = a$ if:

1. $f(a)$ is defined
2. $\lim_{x \to a} f(x)$ exists
3. $\lim_{x \to a} f(x) = f(a)$

**Intermediate Value Theorem (IVT):** If $f$ is continuous on $[a, b]$ and $y$ is between $f(a)$ and $f(b)$, then there exists $c \in (a, b)$ such that $f(c) = y$.

**L'H?pital's Rule:** If $\lim_{x \to a} f(x)$ and $\lim_{x \to a} g(x)$ are both $0$ or both $\pm\infty$, then:

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

(provided the limit on the right exists or is $\pm\infty$)

### 2.2 Derivatives

<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-2-derivatives-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-2-derivatives-handwritten.svg" alt="Handwritten: 2.2 Derivatives" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-2-derivatives-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-2-derivatives-diagram.svg" alt="Diagram: 2.2 Derivatives" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-2-derivatives-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-2-derivatives-sticky.svg" alt="Sticky Note: 2.2 Derivatives" width="30%">
</a>


**Definition:** The derivative of $f$ at $x$ is:

$$f'(x) = \frac{df}{dx} = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

**Geometric Meaning:** The derivative is the slope of the tangent line to $y = f(x)$ at point $(x, f(x))$. It represents the instantaneous rate of change.

**Differentiation Rules:**

- **Constant:** $\frac{d}{dx}(c) = 0$
- **Power:** $\frac{d}{dx}(x^n) = nx^{n-1}$
- **Constant Multiple:** $\frac{d}{dx}(cf(x)) = cf'(x)$
- **Sum:** $\frac{d}{dx}(f \pm g) = f' \pm g'$
- **Product:** $(fg)' = f'g + fg'$
- **Quotient:** $\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$
- **Chain:** $(f \circ g)'(x) = f'(g(x)) \cdot g'(x)$

**Derivatives of Elementary Functions:**

| Function | Derivative |
|----------|------------|
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $1/x$ |
| $\log_a x$ | $1/(x \ln a)$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\arcsin x$ | $1/\sqrt{1-x^2}$ |
| $\arccos x$ | $-1/\sqrt{1-x^2}$ |
| $\arctan x$ | $1/(1+x^2)$ |

**Higher-Order Derivatives:** The $n$th derivative is $f^{(n)}(x) = \frac{d^n f}{dx^n}$, obtained by differentiating $n$ times. The second derivative $f''(x)$ gives concavity: $f''(x) > 0$ means concave up, $f''(x) &lt; 0$ means concave down.

**Implicit Differentiation:** For equations not solved for $y$ (e.g., $x^2 + y^2 = 1$), differentiate both sides with respect to $x$ and solve for $dy/dx$.

**Logarithmic Differentiation:** Take $\ln$ of both sides before differentiating ? useful for $f(x)^{g(x)}$ forms.

**Mean Value Theorem (MVT):** If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists $c \in (a, b)$ such that:

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

This guarantees a point where the instantaneous rate equals the average rate.

### 2.3 Applications of Derivatives

<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-3-applications-of-derivatives-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-3-applications-of-derivatives-handwritten.svg" alt="Handwritten: 2.3 Applications of Derivatives" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-3-applications-of-derivatives-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-3-applications-of-derivatives-diagram.svg" alt="Diagram: 2.3 Applications of Derivatives" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-3-applications-of-derivatives-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-3-applications-of-derivatives-sticky.svg" alt="Sticky Note: 2.3 Applications of Derivatives" width="30%">
</a>


**Critical Points:** $c$ is a critical point if $f'(c) = 0$ or $f'(c)$ does not exist.

**First Derivative Test:**
- If $f'$ changes from $+$ to $-$ at $c$, then $f(c)$ is a local maximum
- If $f'$ changes from $-$ to $+$ at $c$, then $f(c)$ is a local minimum

**Second Derivative Test:**
- If $f'(c) = 0$ and $f''(c) > 0$, then $f(c)$ is a local minimum
- If $f'(c) = 0$ and $f''(c) &lt; 0$, then $f(c)$ is a local maximum
- If $f''(c) = 0$, test is inconclusive

**Curve Sketching:** Use sign of $f'$ for increasing/decreasing, $f''$ for concavity, limits for asymptotes.

**Optimization:** To find the maximum or minimum of a function on an interval:
1. Find all critical points
2. Evaluate $f$ at all critical points and endpoints
3. Compare values

**Related Rates:** Given a relationship between variables that change with time, differentiate with respect to time to find the rate of change of one variable in terms of others.

### 2.4 Integration

<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-4-integration-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-4-integration-handwritten.svg" alt="Handwritten: 2.4 Integration" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-4-integration-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-4-integration-diagram.svg" alt="Diagram: 2.4 Integration" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-4-integration-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-4-integration-sticky.svg" alt="Sticky Note: 2.4 Integration" width="30%">
</a>


**Antiderivative:** $F$ is an antiderivative of $f$ if $F'(x) = f(x)$. The general antiderivative is $F(x) + C$ where $C$ is the constant of integration.

**Indefinite Integral:** $\int f(x)\,dx = F(x) + C$

**Definite Integral (Riemann Sum):**

$$\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x$$

where $\Delta x = (b-a)/n$ and $x_i^*$ is a sample point in the $i$th subinterval.

**Fundamental Theorem of Calculus (FTC):**

- **Part 1:** $\frac{d}{dx} \int_a^x f(t)\,dt = f(x)$
- **Part 2:** $\int_a^b f(x)\,dx = F(b) - F(a)$ where $F$ is any antiderivative of $f$

**Basic Integration Rules:**

| Integral | Result |
|----------|--------|
| $\int x^n\,dx$ | $\frac{x^{n+1}}{n+1} + C$, $n \neq -1$ |
| $\int \frac{1}{x}\,dx$ | $\ln|x| + C$ |
| $\int e^x\,dx$ | $e^x + C$ |
| $\int a^x\,dx$ | $\frac{a^x}{\ln a} + C$ |
| $\int \cos x\,dx$ | $\sin x + C$ |
| $\int \sin x\,dx$ | $-\cos x + C$ |
| $\int \sec^2 x\,dx$ | $\tan x + C$ |
| $\int \frac{1}{1+x^2}\,dx$ | $\arctan x + C$ |
| $\int \frac{1}{\sqrt{1-x^2}}\,dx$ | $\arcsin x + C$ |

**Linearity of Integration:**

$$\int [c_1 f(x) + c_2 g(x)]\,dx = c_1 \int f(x)\,dx + c_2 \int g(x)\,dx$$

### 2.5 Integration Techniques

<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-5-integration-techniques-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-5-integration-techniques-handwritten.svg" alt="Handwritten: 2.5 Integration Techniques" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-5-integration-techniques-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-5-integration-techniques-diagram.svg" alt="Diagram: 2.5 Integration Techniques" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-5-integration-techniques-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-5-integration-techniques-sticky.svg" alt="Sticky Note: 2.5 Integration Techniques" width="30%">
</a>


**Substitution (u-substitution):** If $u = g(x)$, then $du = g'(x)dx$ and:

$$\int f(g(x))g'(x)\,dx = \int f(u)\,du$$

**Integration by Parts:** From the product rule $(uv)' = u'v + uv'$:

$$\int u\,dv = uv - \int v\,du$$

Choose $u$ to differentiate (preferably polynomial, $\ln$, or $\arcsin$) and $dv$ to integrate (preferably $e^x$, $\sin x$, $\cos x$).

**LIATE Rule:** Precedence for choosing $u$: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential.

**Trigonometric Integrals:**

For $\int \sin^m x \cos^n x\,dx$:
- If $m$ is odd, factor $\sin x$, use $\sin^2 x = 1 - \cos^2 x$, substitute $u = \cos x$
- If $n$ is odd, factor $\cos x$, use $\cos^2 x = 1 - \sin^2 x$, substitute $u = \sin x$
- If both even, use double-angle formulas: $\sin^2 x = (1 - \cos 2x)/2$, $\cos^2 x = (1 + \cos 2x)/2$

**Trigonometric Substitution:**

| Form | Substitution | Identity Used |
|------|-------------|--------------|
| $\sqrt{a^2 - x^2}$ | $x = a\sin\theta$ | $1 - \sin^2\theta = \cos^2\theta$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan\theta$ | $1 + \tan^2\theta = \sec^2\theta$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec\theta$ | $\sec^2\theta - 1 = \tan^2\theta$ |

**Partial Fractions:** For rational functions $\frac{P(x)}{Q(x)}$ where $\deg(P) &lt; \deg(Q)$:
1. Factor $Q(x)$ into linear and irreducible quadratic factors
2. Decompose into sum of simpler fractions
3. Integrate each term (use $\ln$ for linear factors, $\arctan$ for quadratics)

**Integration by Partial Fractions Decomposition:**

| Factor in $Q(x)$ | Term in Decomposition |
|-------------------|----------------------|
| $(ax + b)$ | $\frac{A}{ax+b}$ |
| $(ax + b)^n$ | $\frac{A_1}{ax+b} + \frac{A_2}{(ax+b)^2} + \cdots + \frac{A_n}{(ax+b)^n}$ |
| $(ax^2 + bx + c)$ | $\frac{Ax + B}{ax^2+bx+c}$ |
| $(ax^2 + bx + c)^n$ | $\frac{A_1 x + B_1}{ax^2+bx+c} + \cdots + \frac{A_n x + B_n}{(ax^2+bx+c)^n}$ |

**Reduction Formulas:** Recursive formulas like:

$$\int \sin^n x\,dx = -\frac{1}{n} \sin^{n-1}x \cos x + \frac{n-1}{n} \int \sin^{n-2} x\,dx$$

### 2.6 Applications of Integration

<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-6-applications-of-integration-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-6-applications-of-integration-handwritten.svg" alt="Handwritten: 2.6 Applications of Integration" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-6-applications-of-integration-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-6-applications-of-integration-diagram.svg" alt="Diagram: 2.6 Applications of Integration" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-6-applications-of-integration-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-6-applications-of-integration-sticky.svg" alt="Sticky Note: 2.6 Applications of Integration" width="30%">
</a>


**Area Between Curves:**

$$A = \int_a^b [f(x) - g(x)]\,dx$$

where $f(x) \geq g(x)$ on $[a,b]$.

**Volume of Revolution ? Disk Method:**

$$V = \pi \int_a^b [R(x)]^2 \,dx$$

where $R(x)$ is the radius of the cross-sectional disk at position $x$.

**Volume of Revolution ? Washer Method:**

$$V = \pi \int_a^b ([R_{\text{outer}}(x)]^2 - [R_{\text{inner}}(x)]^2)\,dx$$

**Volume of Revolution ? Shell Method:**

$$V = 2\pi \int_a^b x[f(x) - g(x)]\,dx$$

**Arc Length:**

$$L = \int_a^b \sqrt{1 + [f'(x)]^2}\,dx$$

**Surface Area of Revolution:**

$$S = 2\pi \int_a^b f(x) \sqrt{1 + [f'(x)]^2}\,dx$$

**Average Value of a Function:**

$$f_{\text{avg}} = \frac{1}{b-a} \int_a^b f(x)\,dx$$

### 2.7 Improper Integrals

<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-7-improper-integrals-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-7-improper-integrals-handwritten.svg" alt="Handwritten: 2.7 Improper Integrals" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-7-improper-integrals-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-7-improper-integrals-diagram.svg" alt="Diagram: 2.7 Improper Integrals" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-7-improper-integrals-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-7-improper-integrals-sticky.svg" alt="Sticky Note: 2.7 Improper Integrals" width="30%">
</a>


**Type 1 (Infinite Limits):**

$$\int_a^\infty f(x)\,dx = \lim_{t \to \infty} \int_a^t f(x)\,dx$$

**Type 2 (Discontinuity):** If $f$ has an infinite discontinuity at $x = c \in [a, b]$:

$$\int_a^b f(x)\,dx = \lim_{t \to c^-} \int_a^t f(x)\,dx + \lim_{t \to c^+} \int_t^b f(x)\,dx$$

**Convergence Tests:**
- **Comparison Test:** If $0 \leq f(x) \leq g(x)$ for $x \geq a$ and $\int_a^\infty g(x)\,dx$ converges, then $\int_a^\infty f(x)\,dx$ converges
- **Limit Comparison:** $\lim_{x \to \infty} \frac{f(x)}{g(x)} = c > 0$ implies both integrals converge or both diverge
- **p-Test:** $\int_1^\infty \frac{1}{x^p}\,dx$ converges iff $p > 1$; $\int_0^1 \frac{1}{x^p}\,dx$ converges iff $p &lt; 1$

### 2.8 Sequences and Series

<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-8-sequences-and-series-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-8-sequences-and-series-handwritten.svg" alt="Handwritten: 2.8 Sequences and Series" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-8-sequences-and-series-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-8-sequences-and-series-diagram.svg" alt="Diagram: 2.8 Sequences and Series" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-8-sequences-and-series-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-8-sequences-and-series-sticky.svg" alt="Sticky Note: 2.8 Sequences and Series" width="30%">
</a>


**Sequence:** A function $a_n$ defined on positive integers. $\lim_{n \to \infty} a_n = L$ means terms approach $L$ as $n \to \infty$.

**Series:** $\sum_{n=1}^\infty a_n$ ? sum of sequence terms. The $n$th partial sum is $S_n = \sum_{k=1}^n a_k$.

**Convergence:** $\sum_{n=1}^\infty a_n$ converges if $\lim_{n \to \infty} S_n$ exists and is finite.

**Geometric Series:** $\sum_{n=0}^\infty ar^n = \frac{a}{1-r}$ if $|r| < 1$, diverges if $|r| \geq 1$.

**p-Series:** $\sum_{n=1}^\infty \frac{1}{n^p}$ converges iff $p > 1$.

**Harmonic Series:** $\sum_{n=1}^\infty \frac{1}{n}$ diverges (slowly ? grows like $\ln n$).

**$n$th Term Test for Divergence:** If $\lim_{n \to \infty} a_n \neq 0$, then $\sum a_n$ diverges.

**Convergence Tests for Positive Series:**

- **Integral Test:** If $a_n = f(n)$ where $f$ is positive, continuous, and decreasing, then $\sum a_n$ converges iff $\int_1^\infty f(x)\,dx$ converges
- **Comparison Test:** If $0 \leq a_n \leq b_n$ and $\sum b_n$ converges, then $\sum a_n$ converges
- **Limit Comparison:** $\lim_{n \to \infty} a_n/b_n = c > 0$ implies both converge or both diverge
- **Ratio Test:** $\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| = \rho$. Converges if $\rho &lt; 1$, diverges if $\rho &gt; 1$, inconclusive if $\rho = 1$
- **Root Test:** $\lim_{n \to \infty} \sqrt[n]{|a_n|} = \rho$. Same conclusion as ratio test

**Alternating Series:**

An alternating series $\sum (-1)^n a_n$ converges if:
1. $a_n$ is decreasing ($a_{n+1} \leq a_n$)
2. $\lim_{n \to \infty} a_n = 0$

**Absolute and Conditional Convergence:**
- $\sum a_n$ converges **absolutely** if $\sum |a_n|$ converges
- $\sum a_n$ converges **conditionally** if it converges but not absolutely
- Absolute convergence implies convergence

### 2.9 Power Series

<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-9-power-series-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-9-power-series-handwritten.svg" alt="Handwritten: 2.9 Power Series" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-9-power-series-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-9-power-series-diagram.svg" alt="Diagram: 2.9 Power Series" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-9-power-series-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-9-power-series-sticky.svg" alt="Sticky Note: 2.9 Power Series" width="30%">
</a>


A **power series** centered at $c$ is:

$$\sum_{n=0}^\infty a_n (x - c)^n = a_0 + a_1(x-c) + a_2(x-c)^2 + \cdots$$

**Radius of Convergence:** There exists $R \geq 0$ such that the series converges for $|x-c| < R$ and diverges for $|x-c| > R$. At the endpoints $x = c \pm R$, convergence must be checked separately.

**Interval of Convergence:** The set of $x$ values where the series converges.

**Finding $R$:**
- Ratio: $R = \lim_{n \to \infty} \left|\frac{a_n}{a_{n+1}}\right|$
- Root: $R = 1/\lim_{n \to \infty} \sqrt[n]{|a_n|}$

**Differentiation and Integration of Power Series:** Within the radius of convergence, power series can be differentiated and integrated term-by-term.

### 2.10 Taylor and Maclaurin Series

<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-10-taylor-and-maclaurin-series-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-10-taylor-and-maclaurin-series-handwritten.svg" alt="Handwritten: 2.10 Taylor and Maclaurin Series" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-10-taylor-and-maclaurin-series-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-10-taylor-and-maclaurin-series-diagram.svg" alt="Diagram: 2.10 Taylor and Maclaurin Series" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-10-taylor-and-maclaurin-series-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/02-calculus-i/2-10-taylor-and-maclaurin-series-sticky.svg" alt="Sticky Note: 2.10 Taylor and Maclaurin Series" width="30%">
</a>


**Taylor Series:** The representation of a function $f$ as a power series centered at $c$:

$$f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(c)}{n!} (x - c)^n$$

where $f^{(n)}(c)$ is the $n$th derivative evaluated at $c$.

**Maclaurin Series:** Taylor series centered at $c = 0$.

**Taylor's Theorem with Remainder:** For $n$ terms plus remainder $R_n$:

$$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(c)}{k!} (x - c)^k + R_n(x)$$

where $R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} (x - c)^{n+1}$ for some $\xi$ between $c$ and $x$ (Lagrange form).

**Important Maclaurin Series (all converge for all $x$ unless noted):**

$$\begin{aligned}
e^x &= \sum_{n=0}^\infty \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots \\
\sin x &= \sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots \\
\cos x &= \sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots \\
\frac{1}{1-x} &= \sum_{n=0}^\infty x^n = 1 + x + x^2 + x^3 + \cdots, \quad |x| < 1 \\
\ln(1+x) &= \sum_{n=1}^\infty \frac{(-1)^{n-1} x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots, \quad -1 &lt; x \leq 1 \\
\arctan x &= \sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots, \quad |x| \leq 1
\end{aligned}$$

**Binomial Series:** For any real $p$:

$$(1+x)^p = \sum_{n=0}^\infty \binom{p}{n} x^n = 1 + px + \frac{p(p-1)}{2!} x^2 + \frac{p(p-1)(p-2)}{3!} x^3 + \cdots$$

where $\binom{p}{n} = \frac{p(p-1)\cdots(p-n+1)}{n!}$.

**Using Series in Machine Learning:**

- **Sigmoid approximation:** For large $|x|$, $1/(1+e^{-x})$ can be approximated by piecewise linear functions
- **Log-sum-exp trick:** $\log\sum e^{x_i} = \max x_i + \log\sum e^{x_i - \max x_i}$ uses $\log(1+z)$ expansion
- **Softmax derivatives:** Require careful application of quotient/chain rules
- **Gradient descent:** Heavily uses first derivatives; second-order methods use Hessians

## Examples

### Example 1: Limits and L'H?pital's Rule

Evaluate $\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$.

**Solution:** As $x \to 0$, numerator $\to e^0 - 1 - 0 = 0$ and denominator $\to 0$, so we have a $0/0$ indeterminate form.

Apply L'H?pital's Rule:

$$\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = \lim_{x \to 0} \frac{e^x - 1}{2x}$$

Still $0/0$. Apply L'H?pital again:

$$\lim_{x \to 0} \frac{e^x}{2} = \frac{1}{2}$$

Result: $\frac{1}{2}$

### Example 2: Optimization

A farmer wants to fence a rectangular field adjacent to a river. No fence is needed along the river. If the farmer has 200 meters of fencing, what dimensions maximize the area?

**Solution:**

Let $x$ = width (parallel to river), $y$ = height (perpendicular to river).
Perimeter constraint: $x + 2y = 200 \implies x = 200 - 2y$
Area: $A = xy = y(200 - 2y) = 200y - 2y^2$

Find critical points: $A'(y) = 200 - 4y = 0 \implies y = 50$
$x = 200 - 2(50) = 100$

Second derivative test: $A''(y) = -4 &lt; 0$, confirming maximum.

Maximum area: $A = 100 \cdot 50 = 5000 \text{ m}^2$

### Example 3: Integration by Parts

Evaluate $\int x e^x\,dx$.

**Solution:** Use integration by parts with $u = x$, $dv = e^x\,dx$.

$du = dx$, $v = e^x$

$$\int x e^x\,dx = x e^x - \int e^x\,dx = x e^x - e^x + C = e^x(x - 1) + C$$

### Example 4: Trigonometric Substitution

Evaluate $\int \frac{dx}{\sqrt{4 - x^2}}$.

**Solution:** Let $x = 2\sin\theta$, $dx = 2\cos\theta\,d\theta$.

$$\sqrt{4 - x^2} = \sqrt{4 - 4\sin^2\theta} = 2\cos\theta$$

$$\int \frac{2\cos\theta\,d\theta}{2\cos\theta} = \int d\theta = \theta + C = \arcsin\left(\frac{x}{2}\right) + C$$

### Example 5: Partial Fractions

Evaluate $\int \frac{3x + 5}{x^2 - x - 2}\,dx$.

**Solution:** Factor denominator: $x^2 - x - 2 = (x - 2)(x + 1)$.

Decompose: $\frac{3x+5}{(x-2)(x+1)} = \frac{A}{x-2} + \frac{B}{x+1}$

Multiply both sides: $3x+5 = A(x+1) + B(x-2)$

Substitute $x=2$: $6+5 = A(3) \implies 11 = 3A \implies A = 11/3$
Substitute $x=-1$: $-3+5 = B(-3) \implies 2 = -3B \implies B = -2/3$

$$\int \frac{3x+5}{x^2-x-2}\,dx = \int \left(\frac{11/3}{x-2} + \frac{-2/3}{x+1}\right)dx = \frac{11}{3}\ln|x-2| - \frac{2}{3}\ln|x+1| + C$$

### Example 6: Improper Integrals

Determine if $\int_1^\infty \frac{1}{x^2}\,dx$ converges.

**Solution:**

$$\int_1^\infty \frac{1}{x^2}\,dx = \lim_{t \to \infty} \int_1^t x^{-2}\,dx = \lim_{t \to \infty} \left[-\frac{1}{x}\right]_1^t = \lim_{t \to \infty} \left(-\frac{1}{t} + 1\right) = 1$$

The integral converges to 1.

### Example 7: Ratio Test for Series

Determine convergence of $\sum_{n=1}^\infty \frac{n^2}{2^n}$.

**Solution:** Apply ratio test:

$$\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| = \lim_{n \to \infty} \frac{(n+1)^2/2^{n+1}}{n^2/2^n} = \lim_{n \to \infty} \frac{(n+1)^2}{2n^2} = \lim_{n \to \infty} \frac{1}{2} \cdot \frac{(n+1)^2}{n^2} = \lim_{n \to \infty} \frac{1}{2} \left(1 + \frac{1}{n}\right)^2 = \frac{1}{2}$$

Since $\frac{1}{2} &lt; 1$, the series converges.

### Example 8: Taylor Series Expansion

Find the Maclaurin series for $f(x) = \cos x$ up to the $x^4$ term.

**Solution:** Compute derivatives at 0:

$$f(0) = \cos 0 = 1$$
$$f'(x) = -\sin x \implies f'(0) = 0$$
$$f''(x) = -\cos x \implies f''(0) = -1$$
$$f'''(x) = \sin x \implies f'''(0) = 0$$
$$f^{(4)}(x) = \cos x \implies f^{(4)}(0) = 1$$

$$\cos x = \frac{1}{0!} + \frac{0}{1!}x + \frac{-1}{2!}x^2 + \frac{0}{3!}x^3 + \frac{1}{4!}x^4 + \cdots = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$$

### Example 9: Application ? Gradient Descent in ML

The gradient descent update rule is $x_{t+1} = x_t - \eta \nabla f(x_t)$, where $\eta$ is the learning rate. For $f(x) = x^2$, the minimum is at $x = 0$.

**First-order Taylor approximation at $x_t$:**

$$f(x_t + \Delta x) \approx f(x_t) + f'(x_t)\Delta x$$

We want $\Delta x$ that minimizes $f(x_t + \Delta x)$. Set $\Delta x = -\eta f'(x_t)$:

$$x_{t+1} = x_t - \eta \cdot 2x_t = x_t(1 - 2\eta)$$

For convergence, we need $|1 - 2\eta| < 1 \implies 0 &lt; \eta < 1$.

With $\eta = 0.1$: $x_{t+1} = 0.8 x_t$, decaying geometrically to 0.

### Example 5: Integral Test for Convergence

Determine whether $\sum_{n=1}^\infty \frac{1}{n^2 + 1}$ converges.

**Solution:**
Let $f(x) = \frac{1}{x^2 + 1}$. For $x \geq 1$, $f$ is positive, continuous, and decreasing.

$$\int_1^\infty \frac{dx}{x^2 + 1} = \lim_{b \to \infty} [\arctan x]_1^b = \lim_{b \to \infty} (\arctan b - \arctan 1) = \frac{\pi}{2} - \frac{\pi}{4} = \frac{\pi}{4}$$

Since the integral converges to a finite value, the series converges by the integral test.

### Example 6: Taylor Series Expansion

Find the Taylor series for $f(x) = e^x$ centered at $x = 1$.

**Solution:**
For $f(x) = e^x$, $f^{(n)}(x) = e^x$ for all $n$, so $f^{(n)}(1) = e$.

The Taylor series is:
$$e^x = \sum_{n=0}^\infty \frac{e}{n!} (x-1)^n$$

Radius of convergence: $R = \infty$ (converges for all $x$).

To approximate $e^2$ using $n = 4$: $e^2 \approx e[1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24}] = e \cdot \frac{65}{24} \approx 7.359$. The true value is $e^2 \approx 7.389$, error is about 0.4%.

### Example 7: Trigonometric Substitution

Evaluate $\int \sqrt{4 - x^2}\,dx$ using trigonometric substitution.

**Solution:**
Let $x = 2\sin\theta$, so $dx = 2\cos\theta\,d\theta$, $\sqrt{4 - x^2} = 2\cos\theta$.

$$\int \sqrt{4 - x^2}\,dx = \int 2\cos\theta \cdot 2\cos\theta\,d\theta = 4\int \cos^2\theta\,d\theta$$

$$= 4\int \frac{1 + \cos 2\theta}{2}\,d\theta = 2\theta + \sin 2\theta + C$$

$$= 2\theta + 2\sin\theta\cos\theta + C = 2\arcsin(x/2) + \frac{x\sqrt{4-x^2}}{2} + C$$

## TypeScript Examples

### Numerical Differentiation

```typescript
function centralDifference(
  f: (x: number) => number,
  x: number,
  h: number = 1e-5
): number {
  return (f(x + h) - f(x - h)) / (2 * h);
}

function richardsonExtrapolation(
  f: (x: number) => number,
  x: number,
  h: number = 0.1
): number {
  const D1 = centralDifference(f, x, h);
  const D2 = centralDifference(f, x, h / 2);
  // Richardson: more accurate = D2 + (D2 - D1) / 3
  return D2 + (D2 - D1) / 3;
}

// Test: f(x) = x?, f'(x) = 3x?
const cube = (x: number) => x * x * x;
const x = 2;
console.log(`f'(2) exact: ${12}`);
console.log(`Central diff: ${centralDifference(cube, x).toFixed(6)}`);
console.log(`Richardson: ${richardsonExtrapolation(cube, x).toFixed(6)}`);
```

### Numerical Integration: Adaptive Simpson's Rule

```typescript
function simpsonRule(
  f: (x: number) => number,
  a: number,
  b: number
): number {
  const c = (a + b) / 2;
  const h = (b - a) / 6;
  return h * (f(a) + 4 * f(c) + f(b));
}

function adaptiveSimpson(
  f: (x: number) => number,
  a: number,
  b: number,
  tol: number = 1e-6,
  maxDepth: number = 20
): number {
  const c = (a + b) / 2;
  const whole = simpsonRule(f, a, b);
  const left = simpsonRule(f, a, c);
  const right = simpsonRule(f, c, b);

  const error = Math.abs(left + right - whole) / 15;
  if (error < tol || maxDepth <= 0) return whole + (whole - left - right) / 15;

  return adaptiveSimpson(f, a, c, tol / 2, maxDepth - 1)
       + adaptiveSimpson(f, c, b, tol / 2, maxDepth - 1);
}

// Integrate e^(-x?) from 0 to 2
const integrand = (x: number) => Math.exp(-x * x);
const resultAI = adaptiveSimpson(integrand, 0, 2);
console.log(`?0? e^(-x?) dx ? ${resultAI.toFixed(8)}`);
// Expected: ? 0.88208139 (error function)
```

### Series Summation with Machine Epsilon Precision

```typescript
function sumSeries(
  term: (n: number) => number,
  tolerance: number = 1e-15
): { sum: number; terms: number } {
  let sum = 0, n = 0;
  while (true) {
    const t = term(n);
    sum += t;
    if (Math.abs(t) < tolerance * Math.abs(sum)) break;
    n++;
    if (n > 1e6) break;  // safety limit
  }
  return { sum, terms: n + 1 };
}

// Sum of 1/n! = e
const factorialTerm = (n: number) => {
  if (n === 0) return 1;
  let fact = 1;
  for (let i = 2; i <= n; i++) fact *= i;
  return 1 / fact;
};

const { sum, terms } = sumSeries(factorialTerm);
console.log(`e ? ${sum.toFixed(12)} (${terms} terms)`);
```

## Real-World Application: Gradient Descent for Machine Learning

Gradient descent is the backbone of neural network training, where the goal is to minimize a loss function $L(\theta)$ over parameters $\theta$.

**Batch Gradient Descent:**
$$\theta_{t+1} = \theta_t - \eta \nabla L(\theta_t)$$

**Stochastic Gradient Descent (SGD):** Uses one random sample per update:
$$\theta_{t+1} = \theta_t - \eta \nabla L_i(\theta_t)$$

SGD is noisier but scales to massive datasets because each step costs $O(1)$ instead of $O(N)$.

**Learning Rate Scheduling:** The learning rate $\eta$ controls step size. Common schedules:
- **Step decay:** $\eta_t = \eta_0 \cdot 0.1^{\lfloor t / k \rfloor}$ (reduce by 10x every $k$ epochs)
- **Exponential decay:** $\eta_t = \eta_0 e^{-\beta t}$
- **Cosine annealing:** $\eta_t = \eta_{min} + \frac{1}{2}(\eta_{max} - \eta_{min})(1 + \cos(\frac{t}{T}\pi))$

**Convergence Analysis:** For convex $L$ with $L$-Lipschitz gradient, gradient descent with $\eta \leq 2/L$ satisfies:
$$L(\theta_t) - L(\theta^*) \leq \frac{\|\theta_0 - \theta^*\|^2}{2\eta t}$$

This $O(1/t)$ convergence rate is the same asymptotic behavior as a series that converges like $\sum 1/n^2$ ? fast enough for practical use but slower than Newton's method ($O(e^{-ct})$).

### TypeScript Implementation: Numerical Differentiation & Root Finding

```typescript
// Central difference for first derivative
function centralDiff(f: (x: number) => number, x: number, h: number = 1e-8): number {
  return (f(x + h) - f(x - h)) / (2 * h);
}

// Second derivative via central difference
function secondCentralDiff(f: (x: number) => number, x: number, h: number = 1e-6): number {
  return (f(x + h) - 2 * f(x) + f(x - h)) / (h * h);
}

// Composite Riemann sum integrator
function riemannSum(f: (x: number) => number, a: number, b: number, n: number = 1000): number {
  const dx = (b - a) / n;
  let sum = 0;
  for (let i = 0; i < n; i++) sum += f(a + (i + 0.5) * dx);
  return sum * dx;
}

// Tests
const cube = (x: number) => x * x * x;
const sinFn = (x: number) => Math.sin(x);
console.log(`f(x)=x?, f'(2) central: ${centralDiff(cube, 2).toFixed(6)} (expected: 12.0)`);
console.log(`f(x)=sin(x), f''(1): ${secondCentralDiff(sinFn, 1).toFixed(6)} (expected: ${(-Math.sin(1)).toFixed(6)})`);
console.log(`?0? x? dx = ${riemannSum(x => x * x, 0, 1, 10000).toFixed(6)} (expected: 0.333333)`);
console.log(`?0^p sin(x) dx = ${riemannSum(sinFn, 0, Math.PI, 10000).toFixed(6)} (expected: 2.0)`);

// Newton's method root finder
function newtonMethod(
  f: (x: number) => number, df: (x: number) => number,
  x0: number, tol: number = 1e-14, maxIter: number = 100
): { root: number; iterations: number; error: number } {
  let x = x0;
  for (let iter = 0; iter < maxIter; iter++) {
    const fx = f(x);
    if (Math.abs(fx) < tol) return { root: x, iterations: iter, error: Math.abs(fx) };
    x = x - fx / df(x);
  }
  return { root: x, iterations: maxIter, error: Math.abs(f(x)) };
}

// Find v2: solve x? - 2 = 0
const { root: sqrt2, iterations: nIters } = newtonMethod(x => x * x - 2, x => 2 * x, 1.5);
console.log(`v2 ? ${sqrt2.toFixed(10)} (error: ${(sqrt2 - Math.SQRT2).toExponential(2)}, ${nIters} iters)`);

// Find p: solve sin(x) = 0 near x = 3
const { root: piEst } = newtonMethod(sinFn, Math.cos, 3);
console.log(`p ? ${piEst.toFixed(10)} (error: ${(piEst - Math.PI).toExponential(2)})`);

// Secant method (no derivative needed)
function secantMethod(f: (x: number) => number, x0: number, x1: number, tol: number = 1e-14, maxIter: number = 100): { root: number; iterations: number } {
  let [a, b] = [x0, x1];
  for (let iter = 0; iter < maxIter; iter++) {
    const fa = f(a), fb = f(b);
    if (Math.abs(fb) < tol) return { root: b, iterations: iter + 1 };
    const next = b - fb * (b - a) / (fb - fa);
    a = b; b = next;
  }
  return { root: b, iterations: maxIter };
}
const { root: rootPi } = secantMethod(sinFn, 3, 3.2);
console.log(`Secant p ? ${rootPi.toFixed(10)} (error: ${(rootPi - Math.PI).toExponential(2)})`);
```

```
// --- L'H?pital's Rule Checker ---
function lHopital(f: (x: number) => number, g: (x: number) => number, a: number): { indeterminate: boolean; limit?: number } {
  const f_a = f(a), g_a = g(a);
  const is0_0 = Math.abs(f_a) < 1e-10 && Math.abs(g_a) < 1e-10;
  const isInf = Math.abs(f_a) === Infinity && Math.abs(g_a) === Infinity;
  if (!is0_0 && !isInf) return { indeterminate: false };
  const h = 1e-6;
  const fp = (f(a + h) - f(a - h)) / (2 * h);
  const gp = (g(a + h) - g(a - h)) / (2 * h);
  if (Math.abs(gp) < 1e-10) return { indeterminate: true };
  return { indeterminate: true, limit: fp / gp };
}
const lhs = lHopital(x => Math.sin(x), x => x, 0);
console.log('L\'H?pital sin(x)/x at 0:', lhs.limit?.toFixed(6), '(expected: 1)');

// --- Taylor Series with Remainder ---
function taylorSeries(f: (x: number) => number, a: number, order: number, x: number): { value: number; remainder: number } {
  let sum = 0, term = 1;
  for (let n = 0; n <= order; n++) {
    sum += term * f(a) / (n === 0 ? 1 : n);
    const h = 1e-6;
    const deriv = n === 0 ? f(a) : (() => { const vals = []; for (let i = 0; i <= n; i++) vals.push(f(a + i * h)); return vals.reduce((s, v) => s + v * (i % 2 === 0 ? 1 : -1) * (() => { /* binomial */ let c = 1; for (let j = 0; j < i; j++) c = c * (n - j) / (j + 1); return c; })()) / (Math.pow(h, n)); })();
    term *= (x - a);
    term /= (n + 1);
  }
  // Simple numeric remainder estimate
  const h = 1e-5;
  const nextDeriv = (f(x + h) - f(x - h)) / (2 * h);
  const remainder = Math.abs(nextDeriv) / (order + 1) * Math.pow(Math.abs(x - a), order + 1);
  return { value: sum, remainder };
}
console.log('\nTaylor e^x at x=0.5 (order 5):', taylorSeries(Math.exp, 0, 5, 0.5).value.toFixed(6), '(expected: 1.648721)');

// --- Newton's Method ---
function newtonsMethod(f: (x: number) => number, fp: (x: number) => number, guess: number, tol: number = 1e-8, maxIter: number = 100): { root: number; iterations: number } {
  let x = guess;
  for (let i = 0; i < maxIter; i++) {
    const fx = f(x);
    if (Math.abs(fx) < tol) return { root: x, iterations: i };
    x = x - fx / fp(x);
  }
  return { root: x, iterations: maxIter };
}
const sqrt2 = newtonsMethod(x => x * x - 2, x => 2 * x, 1.5);
console.log('\nNewton v2:', sqrt2.root.toFixed(10), '(error:', (sqrt2.root - Math.SQRT2).toExponential(2), ')');

// --- Riemann Sum with Multiple Rules ---
function riemannSum(f: (x: number) => number, a: number, b: number, n: number, rule: 'left' | 'right' | 'midpoint' | 'trapezoid'): number {
  const dx = (b - a) / n;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const x = rule === 'left' ? a + i * dx : rule === 'right' ? a + (i + 1) * dx : a + (i + 0.5) * dx;
    sum += rule === 'trapezoid' ? (f(a + i * dx) + f(a + (i + 1) * dx)) : f(x);
  }
  return rule === 'trapezoid' ? sum * dx / 2 : sum * dx;
}
console.log('\n?0? x? dx (midpoint, n=100):', riemannSum(x => x * x, 0, 1, 100, 'midpoint').toFixed(6), '(expected: 0.333333)');

// --- Curve Sketching Data ---
function criticalPoints(f: (x: number) => number, a: number, b: number, step: number): { x: number; f: number; fprime: number; fdouble: number }[] {
  const points: { x: number; f: number; fprime: number; fdouble: number }[] = [];
  const h = 1e-6;
  for (let x = a; x <= b; x += step) {
    const fp = (f(x + h) - f(x - h)) / (2 * h);
    const fpp = (f(x + h) - 2 * f(x) + f(x - h)) / (h * h);
    points.push({ x: +x.toFixed(2), f: +f(x).toFixed(4), fprime: +fp.toFixed(4), fdouble: +fpp.toFixed(4) });
  }
  return points;
}
const crit = criticalPoints(x => x * x * x - 3 * x, -2, 2, 0.5);
console.log('\nCurve sketch f(x)=x?-3x:');
crit.slice(0, 5).forEach(p => console.log(`  x=${p.x}: f=${p.f}, f'=${p.fprime}, f''=${p.fdouble}`));
```


// calculus i
// linear-algebra-calculus implementation

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
  await proc.add({ id: '1', name: 'calculus i', data: { topic: 'linear-algebra-calculus' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }

// calculus i - additional TS implementations

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
  cache.set('key1', 'engineering-math demo')
  const log = new Logger()
  log.info('Cache demo started', { course: 'engineering-mathematics', chapter: 'calculus i' })
  const v = cache.get("key1")
  console.log('Cached:', v)
  console.log('Hash:', computeHash('engineering-math'))
}
demo()
export { Cache, Logger, computeHash, CacheEntry }
## Summary

- Limits describe function behavior near points; continuity ensures no gaps
- Derivatives measure instantaneous rates of change; critical points locate extrema
- Integration accumulates area; the FTC links differentiation and integration
- Integration techniques: substitution, parts, trig substitution, partial fractions
- Improper integrals with infinite limits or discontinuities require limit evaluation
- Series convergence tests (ratio, root, comparison) determine whether sums converge
- Power series represent functions as infinite polynomials within a radius of convergence
- Taylor/Maclaurin series expand functions around a point using derivative information
- Gradient descent for optimization is direct application of first derivatives

## Exercises

### Review Questions

1. State the $\epsilon$-$\delta$ definition of limit
2. Derive the product rule from the limit definition of derivative
3. Explain why $\sum_{n=0}^\infty ar^n$ converges only when $|r| < 1$
4. What condition justifies term-by-term differentiation of a power series?
5. How does the error in an $n$th-degree Taylor approximation behave as $x$ moves away from the center?

### Application Problems

1. **Optimization:** A closed cylindrical can is to hold 1 liter. Find the dimensions that minimize surface area.

2. **Newton's Method:** Implement $x_{n+1} = x_n - f(x_n)/f'(x_n)$ to find $\sqrt{2}$ starting from $x_0 = 1$. How many iterations for 6 decimal places?

3. **Arc Length:** Compute the length of the curve $y = x^{3/2}$ from $x = 0$ to $x = 4$.

4. **Volume of Revolution:** Find the volume generated by rotating the region bounded by $y = x^2$ and $y = 2x$ about the $x$-axis.

5. **Series for Computing $\pi$:** Use the series $\arctan x = x - x^3/3 + x^5/5 - \cdots$ with $x = 1$ to approximate $\pi/4$. How many terms for accuracy to 4 decimal places?

### Additional Exercises

6. **Integration by Parts:** Compute $\int e^x \sin x\,dx$ using integration by parts (twice).

7. **Improper Integral:** Determine whether $\int_0^1 \frac{dx}{\sqrt{x}}$ converges. If so, find its value.

8. **Ratio Test:** Use the ratio test to determine the convergence of $\sum_{n=1}^\infty \frac{n^2}{2^n}$.

### Challenge Problem

**Harmonic Series Divergence:** Prove that $\sum_{n=1}^\infty \frac{1}{n}$ diverges by:
a) Grouping terms: $1 + \frac{1}{2} + (\frac{1}{3} + \frac{1}{4}) + (\frac{1}{5} + \frac{1}{6} + \frac{1}{7} + \frac{1}{8}) + \cdots$
b) Show each group sums to at least $\frac{1}{2}$
c) Conclude the series diverges

## Notation Reference

| Symbol | Meaning |
|--------|---------|
| $\lim_{x \to a} f(x)$ | limit of $f$ as $x$ approaches $a$ |
| $f'(x)$ | derivative of $f$ |
| $f^{(n)}(x)$ | $n$th derivative of $f$ |
| $\int f(x)\,dx$ | indefinite integral |
| $\int_a^b f(x)\,dx$ | definite integral from $a$ to $b$ |
| $\infty$ | infinity |
| $\sum_{n=1}^\infty a_n$ | infinite series |
| $S_n$ | $n$th partial sum |
| $R_n(x)$ | remainder after $n$ terms of Taylor series |
| $\binom{n}{k}$ | binomial coefficient |
