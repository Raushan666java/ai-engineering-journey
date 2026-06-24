# Chapter 4: Differential Equations

> **Previous:** [Chapter 3: Multivariable Calculus](03-calculus-ii.md) | **Next:** [Chapter 5: Complex Analysis](05-complex-analysis.md)

## Learning Objectives

After completing this chapter, you will be able to:

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

An **ordinary differential equation (ODE)** involves derivatives of a function of one variable. A **partial differential equation (PDE)** involves partial derivatives of a function of multiple variables.

**Order:** The highest derivative present. $y' + y = 0$ is first-order; $y'' + 3y' + 2y = 0$ is second-order.

**Linear vs. Nonlinear:** An ODE is linear if it can be written as $a_n(x)y^{(n)} + \cdots + a_1(x)y' + a_0(x)y = g(x)$. If any term involves products/powers of $y$ or its derivatives, it's nonlinear.

**Homogeneous:** If $g(x) = 0$ in the linear form above, the equation is homogeneous; otherwise, nonhomogeneous.

**Initial Value Problem (IVP):** ODE plus initial conditions at one point.
**Boundary Value Problem (BVP):** ODE plus conditions at two or more points.

### 4.2 First-Order ODEs

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

**Population Growth (Malthusian):** $\frac{dP}{dt} = kP \implies P(t) = P_0 e^{kt}$

**Logistic Growth:** $\frac{dP}{dt} = kP\left(1 - \frac{P}{K}\right)$ where $K$ is carrying capacity.

**Newton's Law of Cooling:** $\frac{dT}{dt} = -k(T - T_{\text{env}})$

**Radioactive Decay:** $\frac{dN}{dt} = -\lambda N \implies N(t) = N_0 e^{-\lambda t}$

**Mixing Problems:** Rate of change of amount = rate in - rate out.

**RC Circuit:** $R\frac{dQ}{dt} + \frac{Q}{C} = E(t)$

### 4.4 Higher-Order Linear ODEs

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

**Spring-Mass System (Undamped):** $m\frac{d^2 x}{dt^2} + kx = 0$
$$x(t) = A\cos(\omega_0 t) + B\sin(\omega_0 t), \quad \omega_0 = \sqrt{k/m}$$

**Damped Spring:** $m\frac{d^2 x}{dt^2} + c\frac{dx}{dt} + kx = 0$

Three cases: overdamped ($c^2 > 4mk$), critically damped ($c^2 = 4mk$), underdamped ($c^2 < 4mk$).

**Forced Oscillations:** $m x'' + c x' + kx = F_0 \cos(\omega t)$

**RLC Circuit:** $L\frac{d^2 q}{dt^2} + R\frac{dq}{dt} + \frac{q}{C} = E(t)$

### 4.6 Systems of ODEs

**General Form (First-Order Linear System):**

$$\begin{aligned}
x_1' &= a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n + f_1(t) \\
x_2' &= a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n + f_2(t) \\
&\vdots \\
x_n' &= a_{n1}x_1 + a_{n2}x_2 + \cdots + a_{nn}x_n + f_n(t)
\end{aligned}$$

**Matrix Form:** $\mathbf{x}' = A\mathbf{x} + \mathbf{f}(t)$

**Homogeneous Solution ($\mathbf{x}' = A\mathbf{x}$):**

Assume $\mathbf{x} = \mathbf{v} e^{\lambda t}$, giving $A\mathbf{v} = \lambda\mathbf{v}$ — eigenvalues and eigenvectors!

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

$$u(t-a) = \begin{cases} 0 & t < a \\ 1 & t \geq a \end{cases}$$

**Solving IVPs with Laplace Transforms:**

1. Take Laplace transform of both sides of the DE
2. Use linearity and derivative property to get algebraic equation in $Y(s)$
3. Solve for $Y(s)$
4. Apply inverse Laplace transform to get $y(t)$

**Partial Fractions for Inverse Transform:**

$$\frac{N(s)}{(s-a)(s-b)} = \frac{A}{s-a} + \frac{B}{s-b}$$

**Convolution Theorem:** $\mathcal{L}^{-1}\{F(s)G(s)\} = \int_0^t f(\tau)g(t-\tau)\,d\tau = (f * g)(t)$

### 4.8 Series Solutions

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

**Classification of Second-Order Linear PDEs:**

$$A u_{xx} + B u_{xy} + C u_{yy} + D u_x + E u_y + F u = G$$

- **Elliptic** ($B^2 - 4AC < 0$): Laplace's equation $u_{xx} + u_{yy} = 0$
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

**d'Alembert's Solution:** $u(x,t) = f(x + ct) + g(x - ct)$ — waves traveling left and right.

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

This represents an underdamped oscillator — oscillates with decaying amplitude.

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
