# Chapter 4: Differential Equations

> **Previous:** [Chapter 3: Multivariable Calculus](03-calculus-ii.md) | **Next:** [Chapter 5: Complex Analysis](05-complex-analysis.md)

## Learning Objectives

After completing this chapter, you will be able to:

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/hero.svg" alt="Chapter Banner: Chapter 4: Differential Equations" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/handwritten-notes.svg" alt="Handwritten Notes: Chapter 4: Differential Equations" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/sticky-notes.svg" alt="Sticky Notes: Chapter 4: Differential Equations" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/visual-explanation.svg" alt="Visual Explanation: Chapter 4: Differential Equations" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/architecture.svg" alt="Architecture: Chapter 4: Differential Equations" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/workflow.svg" alt="Workflow: Chapter 4: Differential Equations" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/mindmap.svg" alt="Mind Map: Chapter 4: Differential Equations" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/comparison.svg" alt="Comparison: Chapter 4: Differential Equations" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/cheatsheet.svg" alt="Cheat Sheet: Chapter 4: Differential Equations" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/interview-quiz.svg" alt="Quiz Card: Chapter 4: Differential Equations" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/engineering-mathematics/04-differential-equations/social-card.svg" alt="Social Card: Chapter 4: Differential Equations" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


- Classify differential equations by order, linearity, and homogeneity
- Solve first-order ODEs using separation, integrating factors, and exact methods
- Solve higher-order linear ODEs with constant coefficients
- Model physical systems using ODEs (springs, circuits, mixing)
- Solve systems of ODEs using eigenvalue methods
- Apply Laplace transforms to solve IVPs
- Solve basic PDEs using separation of variables
- Apply differential equations to machine learning dynamics and neural ODEs

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| First-Order ODEs | $dy/dx = f(x,y)$ | Population models, decay, circuits |
| Second-Order ODEs | $y'' + py' + qy = 0$ | Springs, RLC circuits, vibrations |
| Systems of ODEs | $\mathbf{x}' = A\mathbf{x}$ | Coupled oscillators, epidemic models |
| Laplace Transform | $Y(s) = \mathcal{L}\{y(t)\}$ | Transforms DEs to algebraic equations |
| PDEs | $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$ | Heat, wave, and Laplace equations |

## Chapter Roadmap

```mermaid
flowchart LR
    A[First-Order ODEs] --> B[Applications]
    B --> C[Higher-Order ODEs]
    C --> D[Systems of ODEs]
    D --> E[Laplace Transforms]
    E --> F[Series Solutions]
    F --> G[Introduction to PDEs]
```

## Theory

### 4.1 Classification of Differential Equations

<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-1-classification-of-differential-equations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-1-classification-of-differential-equations-handwritten.svg" alt="Handwritten: 4.1 Classification of Differential Equations" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-1-classification-of-differential-equations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-1-classification-of-differential-equations-diagram.svg" alt="Diagram: 4.1 Classification of Differential Equations" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-1-classification-of-differential-equations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-1-classification-of-differential-equations-sticky.svg" alt="Sticky Note: 4.1 Classification of Differential Equations" width="30%">
</a>


An **ordinary differential equation (ODE)** involves derivatives of a function of one variable. A **partial differential equation (PDE)** involves partial derivatives of a function of multiple variables.

**Order:** The highest derivative present. $y' + y = 0$ is first-order; $y'' + 3y' + 2y = 0$ is second-order.

**Linear vs. Nonlinear:** An ODE is linear if it can be written as $a_n(x)y^{(n)} + \cdots + a_1(x)y' + a_0(x)y = g(x)$. If any term involves products/powers of $y$ or its derivatives, it's nonlinear.

**Homogeneous:** If $g(x) = 0$ in the linear form above, the equation is homogeneous; otherwise, nonhomogeneous.

**Initial Value Problem (IVP):** ODE plus initial conditions at one point.
**Boundary Value Problem (BVP):** ODE plus conditions at two or more points.

### 4.2 First-Order ODEs

<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-2-first-order-odes-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-2-first-order-odes-handwritten.svg" alt="Handwritten: 4.2 First-Order ODEs" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-2-first-order-odes-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-2-first-order-odes-diagram.svg" alt="Diagram: 4.2 First-Order ODEs" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-2-first-order-odes-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-2-first-order-odes-sticky.svg" alt="Sticky Note: 4.2 First-Order ODEs" width="30%">
</a>


**General Form:** $\frac{dy}{dx} = f(x, y)$

#### 4.2.1 Separable Equations

Form: $\frac{dy}{dx} = g(x)h(y)$

Separate: $\frac{dy}{h(y)} = g(x)\,dx$

Integrate: $\int \frac{dy}{h(y)} = \int g(x)\,dx + C$

#### 4.2.2 Linear First-Order ODEs

Form: $\frac{dy}{dx} + P(x)y = Q(x)$

**Integrating Factor:** $\mu(x) = e^{\int P(x)\,dx}$

Multiply both sides by $\mu$:
$$\mu \frac{dy}{dx} + \mu P y = \mu Q$$
$$\frac{d}{dx}(\mu y) = \mu Q$$

**Solution:** $y = \frac{1}{\mu(x)} \int \mu(x) Q(x)\,dx$

#### 4.2.3 Exact Equations

Form: $M(x,y)\,dx + N(x,y)\,dy = 0$

The equation is **exact** if $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$.

**Solution:** There exists $F(x,y)$ such that $\frac{\partial F}{\partial x} = M$ and $\frac{\partial F}{\partial y} = N$. The solution is $F(x,y) = C$.

To find $F$:
1. $F = \int M\,dx + g(y)$
2. Differentiate wrt $y$ and match with $N$ to find $g'(y)$
3. Integrate to get $g(y)$

#### 4.2.4 Bernoulli Equation

Form: $\frac{dy}{dx} + P(x)y = Q(x)y^n$

Substitute $v = y^{1-n}$ to reduce to a linear equation.

#### 4.2.5 Homogeneous First-Order ODEs

Form: $\frac{dy}{dx} = F\left(\frac{y}{x}\right)$

Substitute $v = y/x$, giving $y = vx$, $dy/dx = v + x\,dv/dx$.

### 4.3 Applications of First-Order ODEs

<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-3-applications-of-first-order-odes-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-3-applications-of-first-order-odes-handwritten.svg" alt="Handwritten: 4.3 Applications of First-Order ODEs" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-3-applications-of-first-order-odes-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-3-applications-of-first-order-odes-diagram.svg" alt="Diagram: 4.3 Applications of First-Order ODEs" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-3-applications-of-first-order-odes-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-3-applications-of-first-order-odes-sticky.svg" alt="Sticky Note: 4.3 Applications of First-Order ODEs" width="30%">
</a>


**Population Growth (Malthusian):** $\frac{dP}{dt} = kP \implies P(t) = P_0 e^{kt}$

**Logistic Growth:** $\frac{dP}{dt} = kP\left(1 - \frac{P}{K}\right)$ where $K$ is carrying capacity.

**Newton's Law of Cooling:** $\frac{dT}{dt} = -k(T - T_{\text{env}})$

**Radioactive Decay:** $\frac{dN}{dt} = -\lambda N \implies N(t) = N_0 e^{-\lambda t}$

**Mixing Problems:** Rate of change of amount = rate in - rate out.

**RC Circuit:** $R\frac{dQ}{dt} + \frac{Q}{C} = E(t)$

### 4.4 Higher-Order Linear ODEs

<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-4-higher-order-linear-odes-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-4-higher-order-linear-odes-handwritten.svg" alt="Handwritten: 4.4 Higher-Order Linear ODEs" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-4-higher-order-linear-odes-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-4-higher-order-linear-odes-diagram.svg" alt="Diagram: 4.4 Higher-Order Linear ODEs" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-4-higher-order-linear-odes-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-4-higher-order-linear-odes-sticky.svg" alt="Sticky Note: 4.4 Higher-Order Linear ODEs" width="30%">
</a>


#### 4.4.1 Homogeneous with Constant Coefficients

Form: $a_n y^{(n)} + a_{n-1} y^{(n-1)} + \cdots + a_1 y' + a_0 y = 0$

Assume $y = e^{rt}$, leading to characteristic equation:

$$a_n r^n + a_{n-1} r^{n-1} + \cdots + a_1 r + a_0 = 0$$

**Case 1: Distinct Real Roots $r_1, r_2, \ldots, r_n$**
$$y = c_1 e^{r_1 x} + c_2 e^{r_2 x} + \cdots + c_n e^{r_n x}$$

**Case 2: Repeated Real Roots (multiplicity $m$)**
$$y = (c_1 + c_2 x + \cdots + c_m x^{m-1}) e^{rx}$$

**Case 3: Complex Roots $r = \alpha \pm \beta i$**
$$y = e^{\alpha x}(c_1 \cos\beta x + c_2 \sin\beta x)$$

**Case 4: Repeated Complex Roots** apply both repeated and complex formulas.

#### 4.4.2 Euler-Cauchy Equation

Form: $ax^2 y'' + bxy' + cy = 0$

Assume $y = x^r$, giving $ar(r-1) + br + c = 0$.

#### 4.4.3 Nonhomogeneous Equations

Form: $a_n y^{(n)} + \cdots + a_0 y = g(x)$

**General Solution:** $y = y_h + y_p$, where $y_h$ is the homogeneous solution and $y_p$ is a particular solution.

**Method of Undetermined Coefficients:**

For $g(x)$ of specific forms (polynomials, exponentials, sines, cosines), guess $y_p$ with unknown coefficients:

| $g(x)$ | Guess $y_p$ |
|--------|-------------|
| $P_m(x)$ | $A_0 + A_1 x + \cdots + A_m x^m$ |
| $A e^{kx}$ | $C e^{kx}$ |
| $A \sin kx$ or $A \cos kx$ | $C \cos kx + D \sin kx$ |
| $e^{kx} P_m(x)$ | $e^{kx} (A_0 + \cdots + A_m x^m)$ |

**Modification Rule:** If the guess matches a homogeneous solution term, multiply by $x$ (or $x^2$, etc.).

**Method of Variation of Parameters:** Works for any $g(x)$. For $y'' + p(x)y' + q(x)y = g(x)$:

$$y_p = -y_1 \int \frac{y_2 g}{W}\,dx + y_2 \int \frac{y_1 g}{W}\,dx$$

where $y_1, y_2$ are linearly independent homogeneous solutions and $W = y_1 y_2' - y_2 y_1'$ is the Wronskian.

### 4.5 Applications of Second-Order ODEs

<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-5-applications-of-second-order-odes-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-5-applications-of-second-order-odes-handwritten.svg" alt="Handwritten: 4.5 Applications of Second-Order ODEs" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-5-applications-of-second-order-odes-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-5-applications-of-second-order-odes-diagram.svg" alt="Diagram: 4.5 Applications of Second-Order ODEs" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-5-applications-of-second-order-odes-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-5-applications-of-second-order-odes-sticky.svg" alt="Sticky Note: 4.5 Applications of Second-Order ODEs" width="30%">
</a>


**Spring-Mass System (Undamped):** $m\frac{d^2 x}{dt^2} + kx = 0$
$$x(t) = A\cos(\omega_0 t) + B\sin(\omega_0 t), \quad \omega_0 = \sqrt{k/m}$$

**Damped Spring:** $m\frac{d^2 x}{dt^2} + c\frac{dx}{dt} + kx = 0$

Three cases: overdamped ($c^2 > 4mk$), critically damped ($c^2 = 4mk$), underdamped ($c^2 &lt; 4mk$).

**Forced Oscillations:** $m x'' + c x' + kx = F_0 \cos(\omega t)$

**RLC Circuit:** $L\frac{d^2 q}{dt^2} + R\frac{dq}{dt} + \frac{q}{C} = E(t)$

### 4.6 Systems of ODEs

<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-6-systems-of-odes-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-6-systems-of-odes-handwritten.svg" alt="Handwritten: 4.6 Systems of ODEs" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-6-systems-of-odes-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-6-systems-of-odes-diagram.svg" alt="Diagram: 4.6 Systems of ODEs" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-6-systems-of-odes-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-6-systems-of-odes-sticky.svg" alt="Sticky Note: 4.6 Systems of ODEs" width="30%">
</a>


**General Form (First-Order Linear System):**

$$\begin{aligned}
x_1' &= a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n + f_1(t) \\
x_2' &= a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n + f_2(t) \\
&\vdots \\
x_n' &= a_{n1}x_1 + a_{n2}x_2 + \cdots + a_{nn}x_n + f_n(t)
\end{aligned}$$

**Matrix Form:** $\mathbf{x}' = A\mathbf{x} + \mathbf{f}(t)$

**Homogeneous Solution ($\mathbf{x}' = A\mathbf{x}$):**

Assume $\mathbf{x} = \mathbf{v} e^{\lambda t}$, giving $A\mathbf{v} = \lambda\mathbf{v}$ ? eigenvalues and eigenvectors!

- **Real distinct eigenvalues:** $\mathbf{x} = c_1 \mathbf{v}_1 e^{\lambda_1 t} + \cdots + c_n \mathbf{v}_n e^{\lambda_n t}$
- **Complex eigenvalues** $\lambda = \alpha \pm \beta i$ with $\mathbf{v} = \mathbf{a} \pm \mathbf{b} i$: solution involves $e^{\alpha t}(\cos\beta t, \sin\beta t)$
- **Repeated eigenvalues** require generalized eigenvectors

**Phase Plane Analysis:** For 2D systems, classify equilibrium points:
- Node (real eigenvalues, same sign)
- Saddle (real eigenvalues, opposite signs)
- Spiral (complex eigenvalues, nonzero real part)
- Center (purely imaginary eigenvalues)

**Fundamental Matrix:** $\Phi(t) = [\mathbf{x}_1(t), \mathbf{x}_2(t), \ldots, \mathbf{x}_n(t)]$ where each $\mathbf{x}_i$ is a solution. Then $\Phi'(t) = A\Phi(t)$.

### 4.7 Laplace Transforms

<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-7-laplace-transforms-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-7-laplace-transforms-handwritten.svg" alt="Handwritten: 4.7 Laplace Transforms" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-7-laplace-transforms-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-7-laplace-transforms-diagram.svg" alt="Diagram: 4.7 Laplace Transforms" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-7-laplace-transforms-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-7-laplace-transforms-sticky.svg" alt="Sticky Note: 4.7 Laplace Transforms" width="30%">
</a>


**Definition:** $\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st} f(t)\,dt$

**Key Transforms:**

| $f(t)$ | $F(s) = \mathcal{L}\{f\}$ |
|--------|--------------------------|
| $1$ | $\frac{1}{s}$, $s > 0$ |
| $t^n$ | $\frac{n!}{s^{n+1}}$, $s > 0$ |
| $e^{at}$ | $\frac{1}{s-a}$, $s > a$ |
| $\sin at$ | $\frac{a}{s^2 + a^2}$ |
| $\cos at$ | $\frac{s}{s^2 + a^2}$ |
| $\sinh at$ | $\frac{a}{s^2 - a^2}$ |
| $\cosh at$ | $\frac{s}{s^2 - a^2}$ |
| $e^{at}f(t)$ | $F(s-a)$ (First shift) |
| $t^n f(t)$ | $(-1)^n F^{(n)}(s)$ |
| $f'(t)$ | $sF(s) - f(0)$ |
| $f''(t)$ | $s^2 F(s) - sf(0) - f'(0)$ |
| $\int_0^t f(\tau)\,d\tau$ | $\frac{F(s)}{s}$ |
| $f(t-a)u(t-a)$ | $e^{-as}F(s)$ (Second shift) |
| $(f * g)(t)$ | $F(s)G(s)$ (Convolution) |

where $u(t-a)$ is the unit step function:

$$u(t-a) = \begin{cases} 0 & t &lt; a \\ 1 & t \geq a \end{cases}$$

**Solving IVPs with Laplace Transforms:**

1. Take Laplace transform of both sides of the DE
2. Use linearity and derivative property to get algebraic equation in $Y(s)$
3. Solve for $Y(s)$
4. Apply inverse Laplace transform to get $y(t)$

**Partial Fractions for Inverse Transform:**

$$\frac{N(s)}{(s-a)(s-b)} = \frac{A}{s-a} + \frac{B}{s-b}$$

**Convolution Theorem:** $\mathcal{L}^{-1}\{F(s)G(s)\} = \int_0^t f(\tau)g(t-\tau)\,d\tau = (f * g)(t)$

### 4.8 Series Solutions

<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-8-series-solutions-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-8-series-solutions-handwritten.svg" alt="Handwritten: 4.8 Series Solutions" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-8-series-solutions-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-8-series-solutions-diagram.svg" alt="Diagram: 4.8 Series Solutions" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-8-series-solutions-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-8-series-solutions-sticky.svg" alt="Sticky Note: 4.8 Series Solutions" width="30%">
</a>


For ODEs with variable coefficients, assume a power series solution:

$$y(x) = \sum_{n=0}^\infty a_n (x - x_0)^n$$

**Ordinary Point:** $x_0$ where $P(x) \neq 0$ (coefficient of $y''$). Series converges in some interval.

**Regular Singular Point:** $x_0$ where $P(x_0) = 0$ but $(x-x_0)\frac{Q}{P}$ and $(x-x_0)^2\frac{R}{P}$ are analytic.

**Method of Frobenius:** For regular singular points, assume:

$$y(x) = \sum_{n=0}^\infty a_n (x - x_0)^{n+r}$$

where $r$ satisfies the **indicial equation** (from the lowest power of $x$).

**Legendre's Equation:** $(1-x^2)y'' - 2xy' + n(n+1)y = 0$

Solutions are **Legendre polynomials** $P_n(x)$, orthogonal on $[-1,1]$.

**Bessel's Equation:** $x^2 y'' + xy' + (x^2 - \nu^2)y = 0$

Solutions are Bessel functions $J_\nu(x)$ and $Y_\nu(x)$.

### 4.9 Introduction to PDEs

<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-9-introduction-to-pdes-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-9-introduction-to-pdes-handwritten.svg" alt="Handwritten: 4.9 Introduction to PDEs" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-9-introduction-to-pdes-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-9-introduction-to-pdes-diagram.svg" alt="Diagram: 4.9 Introduction to PDEs" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-9-introduction-to-pdes-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-9-introduction-to-pdes-sticky.svg" alt="Sticky Note: 4.9 Introduction to PDEs" width="30%">
</a>


**Classification of Second-Order Linear PDEs:**

$$A u_{xx} + B u_{xy} + C u_{yy} + D u_x + E u_y + F u = G$$

- **Elliptic** ($B^2 - 4AC &lt; 0$): Laplace's equation $u_{xx} + u_{yy} = 0$
- **Parabolic** ($B^2 - 4AC = 0$): Heat equation $u_t = \alpha u_{xx}$
- **Hyperbolic** ($B^2 - 4AC > 0$): Wave equation $u_{tt} = c^2 u_{xx}$

#### 4.9.1 Heat Equation (Parabolic)

$$\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$$

where $u(x,t)$ is temperature and $\alpha$ is thermal diffusivity.

**Separation of Variables:** Assume $u(x,t) = X(x)T(t)$:

$$X T' = \alpha X'' T \implies \frac{T'}{\alpha T} = \frac{X''}{X} = -\lambda$$

This gives two ODEs:
$$X'' + \lambda X = 0, \quad T' + \alpha \lambda T = 0$$

**Solution (with boundary conditions $u(0,t) = u(L,t) = 0$):**

$$u(x,t) = \sum_{n=1}^\infty b_n \sin\left(\frac{n\pi x}{L}\right) e^{-\alpha\left(\frac{n\pi}{L}\right)^2 t}$$

**Steady State:** As $t \to \infty$, $u(x,t) \to 0$ (all modes decay, higher modes decay faster).

#### 4.9.2 Wave Equation (Hyperbolic)

$$\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$$

where $u(x,t)$ is displacement and $c$ is wave speed.

**d'Alembert's Solution:** $u(x,t) = f(x + ct) + g(x - ct)$ ? waves traveling left and right.

**Separation of Variables:**

$$u(x,t) = \sum_{n=1}^\infty \sin\left(\frac{n\pi x}{L}\right) \left[A_n \cos\left(\frac{n\pi c t}{L}\right) + B_n \sin\left(\frac{n\pi c t}{L}\right)\right]$$

#### 4.9.3 Laplace's Equation (Elliptic)

$$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$$

Describes steady-state temperature, electrostatic potential, and incompressible fluid flow.

**Properties:**
- **Mean Value Property:** Value at a point equals average over any circle centered at that point
- **Maximum Principle:** Maximum occurs on boundary, never interior
- **Harmonic functions** are smooth (infinitely differentiable)

### 4.10 Differential Equations in Machine Learning

<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-10-differential-equations-in-machine-learning-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-10-differential-equations-in-machine-learning-handwritten.svg" alt="Handwritten: 4.10 Differential Equations in Machine Learning" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-10-differential-equations-in-machine-learning-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-10-differential-equations-in-machine-learning-diagram.svg" alt="Diagram: 4.10 Differential Equations in Machine Learning" width="30%">
</a>
<a href="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-10-differential-equations-in-machine-learning-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/engineering-mathematics/04-differential-equations/4-10-differential-equations-in-machine-learning-sticky.svg" alt="Sticky Note: 4.10 Differential Equations in Machine Learning" width="30%">
</a>


**Neural ODEs (Chen et al., 2018):** The hidden state evolution in a residual network can be modeled as an ODE:

$$\frac{dh}{dt} = f_\theta(h(t), t)$$

The forward pass solves an IVP, and backpropagation uses the **adjoint method** (another ODE solved backward in time).

**Gradient Flow:** The gradient descent update can be viewed as a discretization of:

$$\frac{dw}{dt} = -\nabla L(w(t))$$

**Continuous Normalizing Flows:** Normalizing flows use ODE-based transformations for density estimation.

**Lotka-Volterra Equations in ML:** Predator-prey dynamics model adversarial training dynamics.

**Hamiltonian Neural Networks:** Learn Hamiltonian dynamics from data (conservation of energy).

**SDEs in ML:** Stochastic differential equations model optimization noise and diffusion models.

## Examples

### Example 1: Separable ODE

Solve $\frac{dy}{dx} = xy$ with $y(0) = 2$.

**Solution:**

Separate: $\frac{dy}{y} = x\,dx$

Integrate: $\int \frac{dy}{y} = \int x\,dx \implies \ln|y| = \frac{x^2}{2} + C$

Solve for $y$: $y = \pm e^{C} e^{x^2/2} = A e^{x^2/2}$

Apply $y(0) = 2$: $2 = A e^0 = A \implies A = 2$

**Solution:** $y = 2 e^{x^2/2}$

### Example 2: Linear First-Order ODE

Solve $\frac{dy}{dx} + 2y = e^{-x}$.

**Solution:**

$P(x) = 2$, $Q(x) = e^{-x}$

Integrating factor: $\mu = e^{\int 2\,dx} = e^{2x}$

Multiply: $e^{2x} y' + 2e^{2x} y = e^{x}$

Recognize left side as derivative: $\frac{d}{dx}(e^{2x} y) = e^{x}$

Integrate: $e^{2x} y = e^{x} + C$

**Solution:** $y = e^{-x} + Ce^{-2x}$

### Example 3: Second-Order ODE (Spring-Mass)

Solve $y'' + 4y' + 5y = 0$ with $y(0) = 1$, $y'(0) = 0$.

**Solution:**

Characteristic equation: $r^2 + 4r + 5 = 0$

$r = \frac{-4 \pm \sqrt{16 - 20}}{2} = \frac{-4 \pm 2i}{2} = -2 \pm i$

General solution: $y = e^{-2x}(c_1 \cos x + c_2 \sin x)$

Apply $y(0) = 1$: $c_1 = 1$

$y'(x) = -2e^{-2x}(\cos x + c_2\sin x) + e^{-2x}(-\sin x + c_2\cos x)$
$y'(0) = -2(1) + c_2 = 0 \implies c_2 = 2$

**Solution:** $y = e^{-2x}(\cos x + 2\sin x)$

This represents an underdamped oscillator ? oscillates with decaying amplitude.

### Example 4: Systems of ODEs

Solve $\mathbf{x}' = A\mathbf{x}$ where $A = \begin{pmatrix} 1 & 2 \\ 3 & 2 \end{pmatrix}$.

**Solution:**

Eigenvalues: $\det(A - \lambda I) = \begin{vmatrix} 1-\lambda & 2 \\ 3 & 2-\lambda \end{vmatrix} = (1-\lambda)(2-\lambda) - 6 = \lambda^2 - 3\lambda - 4 = (\lambda - 4)(\lambda + 1)$

$\lambda_1 = 4$, $\lambda_2 = -1$

Eigenvector for $\lambda_1 = 4$:
$$(A-4I)\mathbf{v} = \begin{pmatrix} -3 & 2 \\ 3 & -2 \end{pmatrix} \mathbf{v} = 0 \implies -3v_1 + 2v_2 = 0 \implies \mathbf{v}_1 = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$$

Eigenvector for $\lambda_2 = -1$:
$$(A+I)\mathbf{v} = \begin{pmatrix} 2 & 2 \\ 3 & 3 \end{pmatrix} \mathbf{v} = 0 \implies \mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$$

**General Solution:** $\mathbf{x}(t) = c_1 \begin{pmatrix} 2 \\ 3 \end{pmatrix} e^{4t} + c_2 \begin{pmatrix} 1 \\ -1 \end{pmatrix} e^{-t}$

### Example 5: Laplace Transform IVP

Solve $y'' + y = \sin t$, $y(0) = 1$, $y'(0) = 0$ using Laplace transforms.

**Solution:**

Take Laplace transform:
$$(s^2 Y - s\cdot 1 - 0) + Y = \frac{1}{s^2 + 1}$$
$$(s^2 + 1)Y - s = \frac{1}{s^2 + 1}$$
$$Y = \frac{s}{s^2 + 1} + \frac{1}{(s^2 + 1)^2}$$

Inverse transform:
$$\mathcal{L}^{-1}\left\{\frac{s}{s^2 + 1}\right\} = \cos t$$

For the second term, use convolution:
$$\mathcal{L}^{-1}\left\{\frac{1}{(s^2 + 1)^2}\right\} = \frac{\sin t - t\cos t}{2}$$

**Solution:** $y(t) = \cos t + \frac{\sin t - t\cos t}{2}$

### Example 6: Phase Plane Analysis

Analyze the system $\mathbf{x}' = \begin{pmatrix} 1 & 2 \\ -2 & 1 \end{pmatrix} \mathbf{x}$.

**Solution:**
Eigenvalues: $\det(A - \lambda I) = (1-\lambda)^2 + 4 = 0 \implies \lambda = 1 \pm 2i$.

Since eigenvalues are complex with positive real part, the equilibrium at $(0,0)$ is an **unstable spiral**. Trajectories spiral outward as $t \to \infty$.

For $\lambda = 1 + 2i$:
$$(A - (1+2i)I)\mathbf{v} = \begin{pmatrix} -2i & 2 \\ -2 & -2i \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = 0 \implies \mathbf{v} = \begin{pmatrix} 1 \\ i \end{pmatrix}$$

General solution:
$$\mathbf{x}(t) = e^t \begin{pmatrix} \cos 2t & -\sin 2t \\ \sin 2t & \cos 2t \end{pmatrix} \begin{pmatrix} c_1 \\ c_2 \end{pmatrix}$$

The $e^t$ factor causes exponential growth, while the rotation matrix causes oscillation at frequency 2.

### Example 7: Solving a PDE with Separation of Variables

Solve the wave equation $u_{tt} = c^2 u_{xx}$ for $0 &lt; x < L$, $t &gt; 0$, with $u(0,t) = u(L,t) = 0$, $u(x,0) = f(x)$, $u_t(x,0) = 0$.

**Solution:**
Assume $u(x,t) = X(x)T(t)$. Substitute: $X T'' = c^2 X'' T$.

Divide by $c^2 X T$: $\frac{T''}{c^2 T} = \frac{X''}{X} = -\lambda$ (separation constant).

Solve for $X$: $X'' + \lambda X = 0$, $X(0) = X(L) = 0$.

$\lambda_n = \left(\frac{n\pi}{L}\right)^2$, $X_n(x) = \sin\left(\frac{n\pi x}{L}\right)$, $n = 1, 2, 3, \ldots$

Solve for $T$: $T'' + c^2\lambda_n T = 0$, $T(0) = A_n$, $T'(0) = 0$.

$T_n(t) = A_n \cos\left(\frac{n\pi c t}{L}\right)$

The complete solution is a superposition of normal modes:
$$u(x,t) = \sum_{n=1}^\infty A_n \sin\left(\frac{n\pi x}{L}\right) \cos\left(\frac{n\pi c t}{L}\right)$$

where $A_n = \frac{2}{L} \int_0^L f(x) \sin\left(\frac{n\pi x}{L}\right) dx$.

## TypeScript Examples

### Euler's Method for First-Order ODEs

```typescript
type ODE = (t: number, y: number) => number;

function eulerMethod(
  f: ODE,
  t0: number,
  y0: number,
  h: number,
  n: number
): { t: number[]; y: number[] } {
  const t: number[] = [t0];
  const y: number[] = [y0];
  for (let i = 0; i < n; i++) {
    y.push(y[i] + h * f(t[i], y[i]));
    t.push(t[i] + h);
  }
  return { t, y };
}

// y' = -2xy, y(0) = 1 ? exact: y = exp(-x?)
const f = (x: number, y: number) => -2 * x * y;
const { t: tv, y: yv } = eulerMethod(f, 0, 1, 0.1, 10);
for (let i = 0; i <= 10; i += 2) {
  const exact = Math.exp(-tv[i] * tv[i]);
  console.log(
    `x=${tv[i].toFixed(1)}: Euler=${yv[i].toFixed(6)}, exact=${exact.toFixed(6)}`
  );
}
```

### System of ODEs: Lotka-Volterra (Predator-Prey)

```typescript
type ODESystem = (t: number, y: number[]) => number[];

function rk4System(
  f: ODESystem,
  t0: number,
  y0: number[],
  h: number,
  n: number
): { t: number[]; y: number[][] } {
  const t: number[] = [t0];
  const y: number[][] = [y0];
  const m = y0.length;
  for (let step = 0; step < n; step++) {
    const ti = t[step], yi = y[step];
    const k1 = f(ti, yi);
    const k2 = f(ti + h / 2, yi.map((v, i) => v + (h / 2) * k1[i]));
    const k3 = f(ti + h / 2, yi.map((v, i) => v + (h / 2) * k2[i]));
    const k4 = f(ti + h, yi.map((v, i) => v + h * k3[i]));
    const next: number[] = [];
    for (let i = 0; i < m; i++)
      next.push(yi[i] + (h / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));
    t.push(ti + h);
    y.push(next);
  }
  return { t, y };
}

// Lotka-Volterra: dx/dt = ax - ?xy, dy/dt = dxy - ?y
const a = 1.5, ? = 1.0, d = 1.0, ? = 3.0;
const lotkaVolterra: ODESystem = (_, y) => [
  a * y[0] - ? * y[0] * y[1],  // prey
  d * y[0] * y[1] - ? * y[1],  // predator
];

const { t: lt, y: ly } = rk4System(lotkaVolterra, 0, [10, 5], 0.01, 500);
// Print every 100 steps
for (let i = 0; i <= 500; i += 100) {
  console.log(
    `t=${lt[i].toFixed(1)}: prey=${ly[i][0].toFixed(1)}, predator=${ly[i][1].toFixed(1)}`
  );
}
```

## Real-World Application: Epidemic Modeling (SIR Model)

The SIR model describes the spread of infectious diseases through a population:

$$\frac{dS}{dt} = -\beta S I, \quad \frac{dI}{dt} = \beta S I - \gamma I, \quad \frac{dR}{dt} = \gamma I$$

where $S$ = susceptible, $I$ = infected, $R$ = recovered, $\beta$ = transmission rate, $\gamma$ = recovery rate.

**Key Epidemiological Parameters:**
- **Basic reproduction number:** $R_0 = \beta S_0 / \gamma$ ? average number of secondary infections
- **Herd immunity threshold:** $1 - 1/R_0$ ? fraction of population that must be immune
- **Peak infection:** Occurs when $S = \gamma/\beta$ (where $dI/dt = 0$)

```typescript
const sir: ODESystem = (_, y) => {
  const S = y[0], I = y[1], R = y[2];
  const beta = 0.3, gamma = 0.1;  // R0 = 3.0
  return [-beta * S * I, beta * S * I - gamma * I, gamma * I];
};

const { t: st, y: sy } = rk4System(sir, 0, [0.99, 0.01, 0], 0.1, 200);
console.log(`Day 50: S=${sy[50][0].toFixed(3)}, I=${sy[50][1].toFixed(3)}, R=${sy[50][2].toFixed(3)}`);
console.log(`Day 100: S=${sy[100][0].toFixed(3)}, I=${sy[100][1].toFixed(3)}, R=${sy[100][2].toFixed(3)}`);
// At R0=3, ~90% of population gets infected before epidemic ends
```

### TypeScript Implementation: Runge-Kutta 4 System Solver

```typescript
type ODESystem = (t: number, y: number[]) => number[];

function rk4Step(f: ODESystem, t: number, y: number[], h: number): number[] {
  const n = y.length;
  const k1 = f(t, y);
  const y2 = y.map((yi, i) => yi + 0.5 * h * k1[i]); const k2 = f(t + 0.5 * h, y2);
  const y3 = y.map((yi, i) => yi + 0.5 * h * k2[i]); const k3 = f(t + 0.5 * h, y3);
  const y4 = y.map((yi, i) => yi + h * k3[i]);       const k4 = f(t + h, y4);
  return y.map((yi, i) => yi + (h / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));
}

function solveODE(f: ODESystem, t0: number, y0: number[], h: number, steps: number) {
  const t = [t0], y = [y0];
  for (let i = 0; i < steps; i++) { y.push(rk4Step(f, t[i], y[i], h)); t.push(t[i] + h); }
  return { t, y };
}

// Predator-Prey (Lotka-Volterra): dR/dt = aR - ?RF, dF/dt = dRF - ?F
const lotkaVolterra = (a: number, ?: number, d: number, ?: number) =>
  (_t: number, y: number[]): number[] => [a * y[0] - ? * y[0] * y[1], d * y[0] * y[1] - ? * y[1]];

const { t: lvT, y: pop } = solveODE(lotkaVolterra(0.1, 0.02, 0.01, 0.1), 0, [40, 9], 0.5, 200);
console.log("Predator-Prey (Lotka-Volterra):");
console.log(`  t=0:   R=${pop[0][0].toFixed(1)} F=${pop[0][1].toFixed(1)}`);
console.log(`  t=25:  R=${pop[50][0].toFixed(1)} F=${pop[50][1].toFixed(1)}`);
console.log(`  t=50:  R=${pop[100][0].toFixed(1)} F=${pop[100][1].toFixed(1)}`);
console.log(`  t=100: R=${pop[200][0].toFixed(1)} F=${pop[200][1].toFixed(1)}`);
// Equilibrium: R* = ?/d = 10, F* = a/? = 5
console.log(`  Equilibrium: R*=10, F*=5 (pure imaginary eigenvalues ? persistent oscillations)`);

// Simple harmonic oscillator: y'' + ??y = 0 ? system: y0' = y1, y1' = -??y0
const harmonic = (?: number) => (_t: number, y: number[]): number[] => [y[1], -? * ? * y[0]];
const { t: hT, y: hY } = solveODE(harmonic(2), 0, [1, 0], 0.01, 630);  // ?=2 ? period = p ? 3.14
const period = hT[630];  // Full cycle ? p
console.log(`Harmonic oscillator: period ? ${period.toFixed(4)} (expected: ${Math.PI.toFixed(4)})`);
console.log(`  Amplitude after one period: ${hY[630][0].toFixed(4)} (expected: 1.0)`);

// Damped spring: y'' + 2?? y' + ??y = 0 ? system
// ? = 0.1 (underdamped), ? = 2
const damped = (?: number, ?: number) => (_t: number, y: number[]): number[] => [y[1], -2 * ? * ? * y[1] - ? * ? * y[0]];
const { y: dY } = solveODE(damped(0.1, 2), 0, [1, 0], 0.01, 500);
console.log(`Damped spring at t=5: y=${dY[500][0].toFixed(4)} (amplitude decaying over time)`);

### TypeScript: Euler's Method for First-Order ODEs

```typescript
function eulerMethod(f: (t: number, y: number) => number, t0: number, y0: number, h: number, steps: number) {
  const t = [t0], y = [y0];
  for (let i = 0; i &lt; steps; i++) {
    y.push(y[i] + h * f(t[i], y[i]));
    t.push(t[i] + h);
  }
  return { t, y };
}

// RC circuit: dV/dt = (V_in - V) / (RC) with step input V_in = 1, RC = 1
// Analytic: V(t) = 1 - e^{-t}
const rcCircuit = (_t: number, V: number) => (1 - V);  // RC = 1, V_in = 1
const { y: vOut } = eulerMethod(rcCircuit, 0, 0, 0.05, 100);
console.log("RC Circuit (Euler, h=0.05):");
console.log(`  t=0.5: V=${vOut[10].toFixed(4)} (exact: ${(1 - Math.exp(-0.5)).toFixed(4)})`);
console.log(`  t=1.0: V=${vOut[20].toFixed(4)} (exact: ${(1 - Math.exp(-1)).toFixed(4)})`);
console.log(`  t=5.0: V=${vOut[100].toFixed(4)} (exact: ${(1 - Math.exp(-5)).toFixed(4)})`);

// Logistic growth: dP/dt = rP(1 - P/K), r=0.5, K=100
// Analytic solution: P(t) = K / (1 + (K/P0 - 1)e^{-rt})
const logistic = (_t: number, P: number) => 0.5 * P * (1 - P / 100);
const { y: popLog } = eulerMethod(logistic, 0, 10, 0.1, 100);
console.log("Logistic Growth (Euler):");
console.log(`  t=0: P=${popLog[0].toFixed(1)}`);
console.log(`  t=5: P=${popLog[50].toFixed(1)} (analytic: ${(100 / (1 + (100 / 10 - 1) * Math.exp(-0.5 * 5))).toFixed(1)})`);
console.log(`  t=10: P=${popLog[100].toFixed(1)} (approaching K=100)`);
```

```
// --- Runge-Kutta 4th Order (general system) ---
function rk4(
  f: (t: number, y: number[]) => number[],
  t0: number,
  y0: number[],
  h: number,
  steps: number
): { t: number[]; y: number[][] } {
  const t = [t0];
  const y = [y0];
  for (let i = 0; i &lt; steps; i++) {
    const ti = t[i], yi = y[i];
    const k1 = f(ti, yi).map(v => v);
    const k2 = f(ti + h / 2, yi.map((v, j) => v + (h / 2) * k1[j]));
    const k3 = f(ti + h / 2, yi.map((v, j) => v + (h / 2) * k2[j]));
    const k4 = f(ti + h, yi.map((v, j) => v + h * k3[j]));
    const next = yi.map((v, j) => v + (h / 6) * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j]));
    t.push(ti + h);
    y.push(next);
  }
  return { t, y };
}
// Simple harmonic oscillator: y'' = -y ? y' = v, v' = -y
const sho = (t: number, y: number[]) => [y[1], -y[0]];
const shoSol = rk4(sho, 0, [1, 0], 0.1, 100);
console.log('SHO y(0)=1, y\'(0)=0: y(2p) =', shoSol.y[shoSol.t.findIndex(t => t >= 2 * Math.PI)][0].toFixed(4));

// --- Predator-Prey (Lotka-Volterra) ---
const lotkaVolterra = (a: number, ?: number, d: number, ?: number) =>
  (t: number, y: number[]) => [a * y[0] - ? * y[0] * y[1], d * y[0] * y[1] - ? * y[1]];
const lv = rk4(lotkaVolterra(0.1, 0.02, 0.01, 0.1), 0, [40, 9], 0.5, 200);
const lastLv = lv.y[lv.y.length - 1];
console.log('\nLotka-Volterra (t=100): prey=', lastLv[0].toFixed(1), 'predator=', lastLv[1].toFixed(1));

// --- Characteristic Equation Solver ---
function solveCharacteristic(coeffs: number[]): { roots: number[]; type: string } {
  // For quadratic: a*r? + b*r + c = 0
  const [a, b, c] = coeffs;
  const disc = b * b - 4 * a * c;
  if (disc > 0) {
    const r1 = (-b + Math.sqrt(disc)) / (2 * a);
    const r2 = (-b - Math.sqrt(disc)) / (2 * a);
    return { roots: [r1, r2], type: 'real and distinct' };
  } else if (Math.abs(disc) &lt; 1e-10) {
    return { roots: [-b / (2 * a)], type: 'repeated real' };
  } else {
    return { roots: [-b / (2 * a)], type: 'complex' };
  }
}
const charEq = solveCharacteristic([1, -5, 6]); // r? - 5r + 6 = 0 ? r=2, r=3
console.log('\nCharacteristic r?-5r+6:', charEq.type, 'roots:', charEq.roots.join(', '));

// --- Phase Portrait Direction Field ---
function directionField(
  f: (t: number, y: number) => number,
  tRange: [number, number],
  yRange: [number, number],
  gridSize: number
): { t: number; y: number; slope: number }[] {
  const dt = (tRange[1] - tRange[0]) / gridSize;
  const dy = (yRange[1] - yRange[0]) / gridSize;
  const fields: { t: number; y: number; slope: number }[] = [];
  for (let i = 0; i &lt;= gridSize; i++)
    for (let j = 0; j &lt;= gridSize; j++) {
      const t = tRange[0] + i * dt, y = yRange[0] + j * dy;
      fields.push({ t: +t.toFixed(2), y: +y.toFixed(2), slope: +f(t, y).toFixed(2) });
    }
  return fields;
}
const df = directionField((t, y) => y - t * t, [-2, 2], [-2, 2], 5);
console.log('\nDirection field y\'=y-t? (sample):', df.slice(0, 5).map(p => `(t=${p.t},y=${p.y},s=${p.slope})`).join(', '));
```


// differential equations
// linear-algebra-calculus implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit<Task, "status">): Promise<void> {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise<void> {
    const running: Promise<void>[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise<void> {
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
  await proc.add({ id: '1', name: 'differential equations', data: { topic: 'linear-algebra-calculus' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }

// differential equations - additional TS implementations

interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }
class Cache {
  private store: Map<string, CacheEntry> = new Map()
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
  log(level: string, msg: string, meta?: Record<string, unknown>): void {
    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })
    this.entries.push(entry)
    console.log(entry)
  }
  info(msg: string, meta?: Record<string, unknown>): void { this.log("info", msg, meta) }
  warn(msg: string, meta?: Record<string, unknown>): void { this.log("warn", msg, meta) }
  error(msg: string, meta?: Record<string, unknown>): void { this.log("error", msg, meta) }
  getLogs(): string[] { return [...this.entries] }
  clear(): void { this.entries = [] }
}
function computeHash(input: string): string {
  let hash = 0
  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }
  return Math.abs(hash).toString(16)
}
async function demo(): Promise<void> {
  const cache = new Cache(5000)
  cache.set('key1', 'engineering-math demo')
  const log = new Logger()
  log.info('Cache demo started', { course: 'engineering-mathematics', chapter: 'differential equations' })
  const v = cache.get("key1")
  console.log('Cached:', v)
  console.log('Hash:', computeHash('engineering-math'))
}
demo()
export { Cache, Logger, computeHash, CacheEntry }
## Summary

- First-order ODEs are classified into separable, linear, exact, Bernoulli, and homogeneous types
- Second-order linear ODEs with constant coefficients solve via characteristic equation
- The method of undetermined coefficients finds particular solutions for specific forcing functions
- Systems of ODEs connect directly to linear algebra: eigenvalues and eigenvectors determine dynamics
- Laplace transforms convert differential equations to algebraic equations
- The equilibrium type (node, saddle, spiral, center) is determined by eigenvalues
- PDEs (heat, wave, Laplace) model physical fields; solve via separation of variables
- Neural ODEs and gradient flow connect DE theory to modern machine learning

## Exercises

### Review Questions

1. Explain why the integrating factor method works for linear first-order ODEs
2. How does the characteristic equation arise for constant-coefficient ODEs?
3. What is the relationship between eigenvalues of $A$ and stability of $\mathbf{x}' = A\mathbf{x}$?
4. Why is the Laplace transform well-suited for IVPs with discontinuous forcing?
5. Explain how separation of variables reduces a PDE to ODEs

### Application Problems

1. **Logistic Growth:** Solve $\frac{dP}{dt} = 0.1P(1 - P/1000)$ with $P(0) = 100$.

2. **RLC Circuit:** For $L = 1H$, $R = 2\Omega$, $C = 0.25F$, $E(t) = 10\sin t$, find $q(t)$ with $q(0) = 0$, $i(0) = 0$.

3. **Predator-Prey:** Write the Lotka-Volterra equations and find their equilibrium points.

4. **Heat Equation:** Solve $u_t = u_{xx}$ for $0 < x < 1$, $t > 0$, with $u(0,t) = u(1,t) = 0$, $u(x,0) = \sin(2\pi x)$.

### Additional Exercises

5. **Bernoulli Equation:** Solve $y' + \frac{y}{x} = x^2 y^2$ by reducing to a linear ODE using the substitution $v = y^{1-n}$.

6. **Phase Portrait:** For $\mathbf{x}' = \begin{pmatrix} 0 & 1 \\ -4 & 0 \end{pmatrix} \mathbf{x}$, find the eigenvalues and classify the equilibrium.

7. **Method of Undetermined Coefficients:** Solve $y'' - 4y' + 3y = e^{2x}$ with $y(0) = 0$, $y'(0) = 0$.

### Challenge Problem

**Neural ODE:** Given $dh/dt = f_\theta(h, t) = -\alpha h$ with $h(0) = h_0$, solve analytically. Then show that backpropagation through this ODE (solving the adjoint ODE backward) gives the same gradient as direct differentiation of the closed-form solution.

## Notation Reference

| Symbol | Meaning |
|--------|---------|
| $y'$ | $dy/dx$ |
| $y''$ | $d^2 y/dx^2$ |
| $y^{(n)}$ | $d^n y/dx^n$ |
| $\mathcal{L}\{f\}$ | Laplace transform of $f$ |
| $\mathcal{L}^{-1}\{F\}$ | inverse Laplace transform |
| $\mu(x)$ | integrating factor |
| $W(y_1, y_2)$ | Wronskian |
| $\Phi(t)$ | fundamental matrix |
| $u(t-a)$ | unit step function |
| $(f * g)(t)$ | convolution |
| $\partial u/\partial t$ | partial derivative of $u$ wrt $t$ |
| $\alpha$ | thermal diffusivity |
| $\lambda$ | separation constant |
