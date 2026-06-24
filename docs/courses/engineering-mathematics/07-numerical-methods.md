# Chapter 7: Numerical Methods

> **Previous:** [Chapter 6: Probability & Statistics](06-probability-statistics.md) | **Next:** [Chapter 8: Integral Transforms](08-integral-transforms.md)

## Learning Objectives

After completing this chapter, you will be able to:

- Solve nonlinear equations using bisection, Newton-Raphson, and secant methods
- Interpolate data using Lagrange, Newton, and spline methods
- Perform numerical differentiation and integration
- Solve ordinary differential equations numerically
- Apply Monte Carlo methods for simulation and integration
- Understand error analysis, stability, and convergence of numerical algorithms

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Root Finding | Iteratively converge to $x$ where $f(x) = 0$ | Solving equations without closed-form solutions |
| Interpolation | Fit curve through discrete data points | Reconstructing functions from samples |
| Numerical Integration | Approximate $\int_a^b f(x)\,dx$ by weighted sums | Computing integrals without antiderivatives |
| ODE Solvers | Discretize derivatives to step forward in time | Simulating dynamic systems on computers |
| Monte Carlo | Random sampling estimates expectations | Handling high-dimensional integrals |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Error Analysis] --> B[Root Finding]
    B --> C[Interpolation]
    C --> D[Numerical Differentiation]
    D --> E[Numerical Integration]
    E --> F[ODE Solvers]
    F --> G[Monte Carlo Methods]
```

## Theory

### 7.1 Error Analysis

**Absolute Error:** $|x_{\text{true}} - x_{\text{approx}}|$

**Relative Error:** $\frac{|x_{\text{true}} - x_{\text{approx}}|}{|x_{\text{true}}|}$

**Truncation Error:** Error from approximating a mathematical procedure (e.g., Taylor series truncation).

**Roundoff Error:** Error from finite precision floating-point arithmetic.

**Machine Epsilon ($\epsilon$):** The smallest number such that $1 + \epsilon > 1$ in machine arithmetic. For IEEE double precision, $\epsilon \approx 2.22 \times 10^{-16}$.

**Condition Number:** $\kappa = \left|\frac{x f'(x)}{f(x)}\right|$ — measures sensitivity of a function to input errors.

**Stability:** An algorithm is stable if small input errors produce small output errors.

**Convergence Rate:** An algorithm converges with order $p$ if:
$$\lim_{n \to \infty} \frac{|e_{n+1}|}{|e_n|^p} = C$$
- Linear: $p = 1$ (bisection)
- Quadratic: $p = 2$ (Newton-Raphson)

### 7.2 Root Finding

#### 7.2.1 Bisection Method

Find root of $f(x) = 0$ on $[a, b]$ where $f(a)f(b) < 0$.

1. Compute $c = (a+b)/2$
2. If $f(c) = 0$, done
3. If $f(a)f(c) < 0$, set $b = c$; else set $a = c$
4. Repeat until $|b-a| < \text{tolerance}$

**Convergence:** Linear, guaranteed. Error halves each iteration.

#### 7.2.2 Newton-Raphson Method

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

**Convergence:** Quadratic near simple roots, but may diverge if starting point is poor.

**Derivation:** First-order Taylor expansion $f(x_{n+1}) \approx f(x_n) + f'(x_n)(x_{n+1} - x_n) = 0$.

#### 7.2.3 Secant Method

$$x_{n+1} = x_n - f(x_n)\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$$

Avoids computing $f'(x)$. Convergence rate is superlinear ($p \approx 1.618$, the golden ratio).

#### 7.2.4 Fixed-Point Iteration

Rewrite $f(x) = 0$ as $x = g(x)$. Iterate $x_{n+1} = g(x_n)$.

**Convergence:** $|g'(x^*)| < 1$ at the fixed point guarantees local convergence.

### 7.3 Interpolation

#### 7.3.1 Lagrange Interpolation

Given points $(x_0, y_0), \ldots, (x_n, y_n)$, the Lagrange polynomial is:

$$P_n(x) = \sum_{k=0}^n y_k L_k(x)$$

where $L_k(x) = \prod_{j \neq k} \frac{x - x_j}{x_k - x_j}$.

**Error Bound:** If $f$ is $n+1$ times differentiable:

$$|f(x) - P_n(x)| \leq \frac{M_{n+1}}{(n+1)!} \prod_{k=0}^n |x - x_k|$$

where $M_{n+1} = \max |f^{(n+1)}(\xi)|$.

#### 7.3.2 Newton's Divided Differences

Recursive formula for building the interpolation polynomial:

$$f[x_k] = y_k$$
$$f[x_k, x_{k+1}] = \frac{f[x_{k+1}] - f[x_k]}{x_{k+1} - x_k}$$
$$f[x_k, x_{k+1}, \ldots, x_{k+m}] = \frac{f[x_{k+1}, \ldots, x_{k+m}] - f[x_k, \ldots, x_{k+m-1}]}{x_{k+m} - x_k}$$

The interpolating polynomial:

$$P_n(x) = f[x_0] + \sum_{k=1}^n f[x_0, \ldots, x_k] \prod_{j=0}^{k-1} (x - x_j)$$

#### 7.3.3 Spline Interpolation

**Cubic Spline:** Piecewise cubic polynomial that is twice continuously differentiable at the knots.

Natural spline: $S''(x_0) = S''(x_n) = 0$.

Clamped spline: $S'(x_0) = f'(x_0)$, $S'(x_n) = f'(x_n)$.

Splines avoid the **Runge phenomenon** (oscillation at endpoints) that plagues high-degree polynomial interpolation.

### 7.4 Numerical Differentiation

**Forward Difference:** $f'(x) \approx \frac{f(x+h) - f(x)}{h}$, error $O(h)$

**Central Difference:** $f'(x) \approx \frac{f(x+h) - f(x-h)}{2h}$, error $O(h^2)$

**Second Derivative:** $f''(x) \approx \frac{f(x+h) - 2f(x) + f(x-h)}{h^2}$, error $O(h^2)$

**Richardson Extrapolation:** Combine two approximations with step sizes $h$ and $h/2$ to get higher order accuracy:

$$D = \frac{4D(h/2) - D(h)}{3}$$

### 7.5 Numerical Integration (Quadrature)

#### 7.5.1 Newton-Cotes Formulas

**Rectangle Rule:** $\int_a^b f(x)\,dx \approx h \sum_{i=0}^{n-1} f(x_i)$, error $O(h)$

**Midpoint Rule:** $\int_a^b f(x)\,dx \approx h \sum_{i=0}^{n-1} f(x_i + h/2)$, error $O(h^2)$

**Trapezoidal Rule:** $\int_a^b f(x)\,dx \approx \frac{h}{2} \left[f(a) + 2\sum_{i=1}^{n-1} f(x_i) + f(b)\right]$, error $O(h^2)$

**Simpson's 1/3 Rule:** $\int_a^b f(x)\,dx \approx \frac{h}{3} \left[f(a) + 4\sum_{\text{odd}} f(x_i) + 2\sum_{\text{even}} f(x_i) + f(b)\right]$, error $O(h^4)$

**Simpson's 3/8 Rule:** $\int_a^b f(x)\,dx \approx \frac{3h}{8} [f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)]$, error $O(h^4)$

#### 7.5.2 Romberg Integration

Combines trapezoidal rule with Richardson extrapolation to achieve high accuracy efficiently:

$$R_{k,1} = T_{2^{k-1}} \quad \text{(trapezoidal with } 2^{k-1}+1 \text{ points)}$$
$$R_{k,j} = \frac{4^{j-1}R_{k,j-1} - R_{k-1,j-1}}{4^{j-1} - 1}$$

#### 7.5.3 Gaussian Quadrature

$$\int_{-1}^1 f(x)\,dx \approx \sum_{i=1}^n w_i f(x_i)$$

where $x_i$ are roots of Legendre polynomials $P_n(x)$ and $w_i$ are chosen for exact integration of polynomials up to degree $2n-1$.

For general interval $[a,b]$, transform: $x = \frac{b-a}{2}t + \frac{a+b}{2}$.

### 7.6 Numerical Solution of ODEs

#### 7.6.1 Euler's Method

$$y_{n+1} = y_n + h f(t_n, y_n)$$

**Error:** Local truncation error $O(h^2)$, global error $O(h)$.

#### 7.6.2 Runge-Kutta Methods

**RK2 (Midpoint Method):**
$$k_1 = f(t_n, y_n)$$
$$k_2 = f(t_n + h/2, y_n + h k_1/2)$$
$$y_{n+1} = y_n + h k_2$$

**RK4 (Classical 4th Order):**
$$k_1 = f(t_n, y_n)$$
$$k_2 = f(t_n + h/2, y_n + h k_1/2)$$
$$k_3 = f(t_n + h/2, y_n + h k_2/2)$$
$$k_4 = f(t_n + h, y_n + h k_3)$$
$$y_{n+1} = y_n + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$

**Error:** Global error $O(h^4)$.

#### 7.6.3 Multistep Methods (Adams-Bashforth)

**Adams-Bashforth 2-Step:**
$$y_{n+1} = y_n + h\left(\frac{3}{2}f(t_n, y_n) - \frac{1}{2}f(t_{n-1}, y_{n-1})\right)$$

**Adams-Moulton 2-Step (Implicit):**
$$y_{n+1} = y_n + h\left(\frac{1}{2}f(t_{n+1}, y_{n+1}) + \frac{1}{2}f(t_n, y_n)\right)$$

#### 7.6.4 Stiff ODEs and Stability

**Stiff equations** require implicit methods (like backward Euler) for stability:

$$y_{n+1} = y_n + h f(t_{n+1}, y_{n+1})$$

### 7.7 Boundary Value Problems

**Shooting Method:** Convert BVP to IVP by guessing initial conditions, then use root finding to match boundary conditions.

**Finite Difference Method:** Discretize the domain and replace derivatives with finite differences, resulting in a system of equations.

### 7.8 Monte Carlo Methods

**Monte Carlo Integration:**

$$\int_D f(x)\,dx \approx \frac{V(D)}{N} \sum_{i=1}^N f(x_i)$$

where $x_i$ are uniformly sampled from domain $D$, and $V(D)$ is the volume.

**Error:** $O(1/\sqrt{N})$ — independent of dimension! (Unlike quadrature, which scales exponentially.)

**Importance Sampling:** Sample from a distribution $g(x)$ that concentrates where $|f(x)|$ is large:

$$\int f(x)\,dx = \int \frac{f(x)}{g(x)} g(x)\,dx \approx \frac{1}{N} \sum \frac{f(x_i)}{g(x_i)}$$

**Markov Chain Monte Carlo (MCMC):** Generate samples from an arbitrary distribution by constructing a Markov chain whose stationary distribution equals the target.

**Metropolis-Hastings Algorithm:**
1. Start at $x_t$
2. Propose $x' \sim q(x'|x_t)$
3. Accept with probability $\alpha = \min\left(1, \frac{p(x')q(x_t|x')}{p(x_t)q(x'|x_t)}\right)$
4. If accepted, $x_{t+1} = x'$; else $x_{t+1} = x_t$

**Gibbs Sampling:** Special case of Metropolis-Hastings where each variable is sampled from its full conditional distribution.

### 7.9 Numerical Linear Algebra

**LU Decomposition:** $A = LU$, where $L$ is lower triangular and $U$ is upper triangular. Solves $Ax = b$ in $O(n^2)$ after $O(n^3)$ decomposition.

**Cholesky Decomposition:** For symmetric positive definite $A$: $A = LL^T$.

**QR Decomposition:** $A = QR$, where $Q$ is orthogonal and $R$ is upper triangular.

**Iterative Methods:**
- **Jacobi:** $x^{(k+1)}_i = \frac{1}{a_{ii}}(b_i - \sum_{j \neq i} a_{ij} x^{(k)}_j)$
- **Gauss-Seidel:** Uses updated values immediately
- **Conjugate Gradient:** For SPD matrices, converges in $n$ iterations theoretically

## Examples

### Example 1: Newton-Raphson

Find $\sqrt{5}$ using Newton's method.

**Solution:** Let $f(x) = x^2 - 5$, then $f'(x) = 2x$.

$$x_{n+1} = x_n - \frac{x_n^2 - 5}{2x_n}$$

Starting from $x_0 = 2$:

$x_1 = 2 - \frac{4-5}{4} = 2 + \frac{1}{4} = 2.25$
$x_2 = 2.25 - \frac{5.0625-5}{4.5} = 2.25 - \frac{0.0625}{4.5} \approx 2.2361$
$x_3 = 2.2361 - \frac{5.0000-5}{4.4722} \approx 2.23607$

After 3 iterations, we have 5 decimal places. Check: $2.23607^2 \approx 5.0000$.

### Example 2: Simpson's Rule

Approximate $\int_0^1 e^{-x^2}\,dx$ using Simpson's 1/3 rule with $n = 4$.

**Solution:** $h = (1-0)/4 = 0.25$

$x_0 = 0$, $f_0 = e^0 = 1.0000$
$x_1 = 0.25$, $f_1 = e^{-0.0625} = 0.9394$
$x_2 = 0.5$, $f_2 = e^{-0.25} = 0.7788$
$x_3 = 0.75$, $f_3 = e^{-0.5625} = 0.5697$
$x_4 = 1$, $f_4 = e^{-1} = 0.3679$

$$\int_0^1 e^{-x^2}\,dx \approx \frac{0.25}{3}[1 + 4(0.9394 + 0.5697) + 2(0.7788) + 0.3679]$$

$$= \frac{0.25}{3}[1 + 4(1.5091) + 1.5576 + 0.3679] = \frac{0.25}{3}[1 + 6.0364 + 1.5576 + 0.3679]$$

$$= \frac{0.25}{3} \times 8.9619 \approx 0.7468$$

The true value is approximately 0.7468. Excellent agreement!

### Example 3: RK4 for ODE

Solve $y' = y - t^2 + 1$ from $t = 0$ to $t = 1$ with $y(0) = 0.5$, $h = 0.5$.

**Solution:**

First step ($t_0 = 0$, $y_0 = 0.5$):

$k_1 = f(0, 0.5) = 0.5 - 0 + 1 = 1.5$
$k_2 = f(0.25, 0.5 + 0.5(1.5)/2) = f(0.25, 0.875) = 0.875 - 0.0625 + 1 = 1.8125$
$k_3 = f(0.25, 0.5 + 0.5(1.8125)/2) = f(0.25, 0.9531) = 0.9531 - 0.0625 + 1 = 1.8906$
$k_4 = f(0.5, 0.5 + 0.5(1.8906)) = f(0.5, 1.4453) = 1.4453 - 0.25 + 1 = 2.1953$

$$y_1 = 0.5 + \frac{0.5}{6}(1.5 + 2 \times 1.8125 + 2 \times 1.8906 + 2.1953)$$

$$= 0.5 + \frac{0.5}{6}(1.5 + 3.625 + 3.7812 + 2.1953) = 0.5 + \frac{0.5}{6}(11.1015) \approx 1.4251$$

The exact solution at $t = 0.5$ is $y(0.5) = 1.4256$. Error is only 0.0005.

### Example 4: Monte Carlo Integration

Estimate $\pi$ using Monte Carlo.

**Solution:** Sample $N$ points uniformly from $[-1,1]^2$. Count points inside the unit circle.

$\pi \approx 4 \times \frac{\text{points inside}}{\text{total points}}$

With $N = 1000$, we might get 787 points inside, giving $\pi \approx 4 \times 787/1000 = 3.148$. Error $\approx 0.006$.

With $N = 10^6$, error drops to $\approx 0.001$ (but variance scales as $1/\sqrt{N}$).

### Example 5: Cubic Spline Interpolation

Construct the natural cubic spline through $(0,0)$, $(1,1)$, $(2,0)$.

**Solution:** For each interval $[x_i, x_{i+1}]$, $S_i(x) = a_i + b_i(x-x_i) + c_i(x-x_i)^2 + d_i(x-x_i)^3$.

Interval 1 $[0,1]$: $S_0(0) = 0 \implies a_0 = 0$, $S_0(1) = 1 \implies a_0 + b_0 + c_0 + d_0 = 1$
Interval 2 $[1,2]$: $S_1(1) = 1 \implies a_1 = 1$, $S_1(2) = 0 \implies a_1 + b_1 + c_1 + d_1 = 0$

Continuity of $S'$ at $x=1$: $b_0 + 2c_0 + 3d_0 = b_1$
Continuity of $S''$ at $x=1$: $2c_0 + 6d_0 = 2c_1$
Natural: $S''_0(0) = 0 \implies c_0 = 0$, $S''_1(2) = 0 \implies 2c_1 + 6d_1 = 0$

Solving: $a_0 = 0$, $b_0 = 1.5$, $c_0 = 0$, $d_0 = -0.5$
$a_1 = 1$, $b_1 = 0$, $c_1 = -1.5$, $d_1 = 0.5$

$$S(x) = \begin{cases} 1.5x - 0.5x^3 & 0 \leq x \leq 1 \\ 1 - 1.5(x-1)^2 + 0.5(x-1)^3 & 1 \leq x \leq 2 \end{cases}$$

### Additional Exercises

5. **Lagrange Interpolation:** Find the polynomial $P(x)$ interpolating $(0,1), (1,3), (2,7)$ using Lagrange basis polynomials. Evaluate at $x = 1.5$.

6. **Gaussian Quadrature:** Use 3-point Gaussian quadrature to approximate $\int_{-1}^1 e^x\,dx$. Compare with the exact value $e - e^{-1}$.

7. **Finite Difference:** Use the central difference formula to approximate $f'(0.5)$ for $f(x) = \sin(x^2)$ with $h = 0.1, 0.01, 0.001$. Show that the error scales as $O(h^2)$.

## TypeScript Implementation: Runge-Kutta 4 (RK4) ODE Solver

```typescript
type ODEFunction = (t: number, y: number) => number;

function rk4(
  f: ODEFunction,
  t0: number,
  y0: number,
  h: number,
  steps: number
): { t: number[]; y: number[] } {
  const t: number[] = [t0];
  const y: number[] = [y0];
  for (let i = 0; i < steps; i++) {
    const ti = t[i], yi = y[i];
    const k1 = f(ti, yi);
    const k2 = f(ti + h / 2, yi + (h / 2) * k1);
    const k3 = f(ti + h / 2, yi + (h / 2) * k2);
    const k4 = f(ti + h, yi + h * k3);
    t.push(ti + h);
    y.push(yi + (h / 6) * (k1 + 2 * k2 + 2 * k3 + k4));
  }
  return { t, y };
}

// Solve y' = -2ty², y(0) = 1 — exact solution: y = 1/(1+t²)
const f1: ODEFunction = (t, y) => -2 * t * y * y;
const { t: tv, y: yv } = rk4(f1, 0, 1, 0.1, 20);
for (let i = 0; i <= 20; i += 5) {
  const exact = 1 / (1 + tv[i] * tv[i]);
  console.log(
    `t=${tv[i].toFixed(1)}: RK4=${yv[i].toFixed(6)}, exact=${exact.toFixed(6)}`
  );
}
```

## Real-World Application: Solving the Heat Equation

The heat equation $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$ is a parabolic PDE modeling heat diffusion. Numerical solution uses finite differences to discretize both time and space.

**Finite Difference Discretization:**
- Space: $\frac{\partial^2 u}{\partial x^2} \approx \frac{u_{i+1} - 2u_i + u_{i-1}}{\Delta x^2}$ (second-order central)
- Time (Forward Euler): $\frac{\partial u}{\partial t} \approx \frac{u^{n+1} - u^n}{\Delta t}$
- Combined (explicit scheme): $u_i^{n+1} = u_i^n + \frac{\alpha \Delta t}{\Delta x^2}(u_{i+1}^n - 2u_i^n + u_{i-1}^n)$

**Stability Constraint (CFL condition):** $\frac{\alpha \Delta t}{\Delta x^2} \leq \frac{1}{2}$ — the time step must be small enough to avoid numerical instability.

```typescript
function solveHeatEquation1D(
  alpha: number,
  length: number,
  nx: number,
  totalTime: number,
  initialTemp: (x: number) => number
): { x: number[]; u: number[][] } {
  const dx = length / (nx - 1);
  const dt = 0.4 * dx * dx / alpha;  // CFL: dt <= dx^2/(2*alpha)
  const nt = Math.ceil(totalTime / dt);
  const x = Array.from({ length: nx }, (_, i) => i * dx);
  const u: number[][] = [x.map(initialTemp)];
  const r = alpha * dt / (dx * dx);

  for (let n = 0; n < nt; n++) {
    const current = u[u.length - 1];
    const next: number[] = [0];  // Dirichlet BC at left
    for (let i = 1; i < nx - 1; i++)
      next.push(current[i] + r * (current[i + 1] - 2 * current[i] + current[i - 1]));
    next.push(0);  // Dirichlet BC at right
    u.push(next);
  }
  return { x, u };
}

// Rod with initial temp: 100°C at center, 0°C at ends
const initial = (x: number) => x < 0.5 ? 2 * 100 * x : 2 * 100 * (1 - x);
const { x, u } = solveHeatEquation1D(0.01, 1, 20, 1, initial);
console.log(`Temperature at center after 1s: ${u[u.length - 1][10].toFixed(2)}°C`);
```

## Summary

- Root-finding methods (bisection, Newton-Raphson, secant) solve nonlinear equations
- Interpolation reconstructs functions from discrete samples; splines avoid Runge oscillation
- Numerical integration (Simpson, Gaussian quadrature) works when antiderivatives are unavailable
- ODE solvers (Euler, RK4, multistep) discretize continuous dynamics
- Stiff equations demand implicit methods
- Monte Carlo methods handle high-dimensional integration with $O(1/\sqrt{N})$ convergence
- Numerical linear algebra provides efficient algorithms for matrix computations

## Exercises

### Review Questions

1. Why does Newton's method converge quadratically while bisection converges linearly?
2. Explain the Runge phenomenon and why splines address it
3. Compare the accuracy and cost of trapezoidal vs Simpson's rule
4. When would you choose Monte Carlo over deterministic quadrature?
5. What makes an ODE "stiff" and what methods handle stiffness?

### Application Problems

1. **Root Finding:** Find the intersection of $e^{-x} = \sin x$ on $[0, \pi/2]$ using Newton's method.

2. **Integration:** Compute $\int_0^2 \frac{dx}{\sqrt{1+x^3}}$ using Simpson's rule with $n = 8$.

3. **ODE:** Solve $y' = -2ty^2$, $y(0) = 1$ from $t = 0$ to $t = 2$ using RK4 with $h = 0.1$. Compare with the exact solution $y = 1/(1+t^2)$.

4. **Monte Carlo:** Write pseudocode to estimate $\int_0^1 \int_0^1 e^{-(x^2+y^2)}\,dx\,dy$ using Monte Carlo.

### Challenge Problem

**Gradient Descent as Numerical Method:** Show that gradient descent $x_{n+1} = x_n - \alpha f'(x_n)$ is Euler's method applied to the ODE $dx/dt = -f'(x)$. For $f(x) = x^2$, derive the condition on $\alpha$ for convergence, and show the convergence rate is linear (not quadratic like Newton).

## TypeScript Implementation: Newton-Raphson Root Finder

```typescript
type ScalarFunction = (x: number) => number;

function newtonRaphson(
  f: ScalarFunction,
  fPrime: ScalarFunction,
  x0: number,
  tolerance: number = 1e-7,
  maxIterations: number = 100
): { root: number; iterations: number; converged: boolean } {
  let x = x0;
  for (let i = 0; i < maxIterations; i++) {
    const fx = f(x);
    if (Math.abs(fx) < tolerance) {
      return { root: x, iterations: i, converged: true };
    }
    const fpx = fPrime(x);
    if (fpx === 0) {
      return { root: x, iterations: i, converged: false };
    }
    x = x - fx / fpx;
  }
  return { root: x, iterations: maxIterations, converged: false };
}

// Find sqrt(5): solve x^2 - 5 = 0
const result = newtonRaphson(
  (x) => x * x - 5,
  (x) => 2 * x,
  2.0
);
console.log(`sqrt(5) ≈ ${result.root}, iterations: ${result.iterations}`);
// Output: sqrt(5) ≈ 2.23606797749979, iterations: 4
```

## Practical Takeaways

| Method | When to Use | Watch Out |
|--------|-------------|-----------|
| Bisection | Root on interval with sign change | Slow linear convergence |
| Newton-Raphson | Smooth function, good initial guess | May diverge; needs derivative |
| Secant | Derivative unavailable | Superlinear but no guaranteed convergence |
| RK4 | Moderate accuracy ODE solving | Fixed step size may miss stiffness |
| Monte Carlo | High-dimensional integration | Slow convergence $O(1/\sqrt{N})$ |
| Gaussian Quadrature | Smooth functions, moderate dimension | Node/weight precomputation needed |

### When to Use Each Method

- **Root Finding:** Start with bisection to bracket, switch to Newton for speed
- **Interpolation:** Use splines for smooth data; avoid high-degree Lagrange for many points
- **Integration:** Gaussian quadrature for smooth functions; Simpson for equally spaced data; Monte Carlo for high dimensions
- **ODEs:** RK4 as default; implicit methods (backward Euler, BDF) for stiff equations
- **Linear Systems:** Direct methods (LU) for dense $n < 10^4$; iterative (CG, GMRES) for sparse large systems

## Notation Reference

| Symbol | Meaning |
|--------|---------|
| $\epsilon$ | machine epsilon |
| $\kappa$ | condition number |
| $P_n(x)$ | Lagrange interpolating polynomial |
| $L_k(x)$ | Lagrange basis polynomial |
| $f[x_0, \ldots, x_k]$ | divided difference |
| $h$ | step size |
| $O(h^p)$ | order of accuracy |
| $w_i$ | quadrature weights |
| $k_1, k_2, k_3, k_4$ | RK4 stage derivatives |
| $\alpha$ | Metropolis acceptance ratio |
| $N$ | number of Monte Carlo samples |
