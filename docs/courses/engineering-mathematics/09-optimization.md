# Chapter 9: Optimization

> **Previous:** [Chapter 8: Integral Transforms](08-integral-transforms.md) | **Next:** [Chapter 10: Vector Calculus & Applications](10-vector-calculus.md)

## Learning Objectives

After completing this chapter, you will be able to:

- Classify optimization problems by convexity, constraints, and smoothness
- Solve unconstrained optimization using gradient descent and Newton's method
- Apply Lagrange multipliers and KKT conditions for constrained optimization
- Formulate and solve linear programming problems
- Understand convex optimization and its special structure
- Apply optimization to machine learning training, resource allocation, and engineering design

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Convexity | Local minimum = global minimum for convex problems | Why convex optimization is "easy" |
| Gradient Descent | $x_{k+1} = x_k - \alpha \nabla f(x_k)$ | The workhorse of ML training |
| KKT Conditions | $\nabla f = \sum \lambda_i \nabla g_i + \sum \mu_j \nabla h_j$ | Necessary conditions for constrained optimum |
| Linear Programming | Minimize $c^T x$ subject to $Ax \leq b$, $x \geq 0$ | Resource allocation, scheduling |
| Duality | Primal $\leftrightarrow$ Dual provides bounds | Sensitivity analysis, distributed optimization |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Convexity & Classification] --> B[Unconstrained Optimization]
    B --> C[Gradient Methods]
    C --> D[Newton & Quasi-Newton]
    D --> E[Constrained Optimization]
    E --> F[KKT Conditions]
    F --> G[Linear Programming]
    G --> H[Duality & Applications]
```

## Theory

### 9.1 Classification of Optimization Problems

**General Form:**
$$\min_{x \in \mathbb{R}^n} f(x) \quad \text{subject to} \quad g_i(x) \leq 0, \; h_j(x) = 0$$

**Categories:**

| Type | Objective | Constraints | Example |
|------|-----------|-------------|---------|
| Linear Program | Linear | Linear | Resource allocation |
| Quadratic Program | Quadratic | Linear | Support vector machines |
| Convex | Convex | Convex set | Most ML problems |
| Nonconvex | Nonconvex | General | Neural network training |
| Discrete | NA | Integer variables | Traveling salesman |

**Convex Set:** $S$ is convex if for any $x, y \in S$ and $\lambda \in [0,1]$, $\lambda x + (1-\lambda)y \in S$.

**Convex Function:** $f$ is convex if for any $x, y$ and $\lambda \in [0,1]$:
$$f(\lambda x + (1-\lambda)y) \leq \lambda f(x) + (1-\lambda)f(y)$$

**First-Order Condition (for differentiable $f$):** $f$ is convex iff:
$$f(y) \geq f(x) + \nabla f(x)^T (y - x)$$

**Second-Order Condition (for twice differentiable $f$):** $f$ is convex iff $\nabla^2 f(x) \succeq 0$ (Hessian is positive semidefinite).

### 9.2 Unconstrained Optimization

**Optimality Conditions:**
- **First-order necessary:** $\nabla f(x^*) = 0$
- **Second-order necessary:** $\nabla^2 f(x^*) \succeq 0$ (for minimum)
- **Second-order sufficient:** $\nabla f(x^*) = 0$ and $\nabla^2 f(x^*) \succ 0$

**Algorithms:**

#### 9.2.1 Gradient Descent

$$x_{k+1} = x_k - \alpha_k \nabla f(x_k)$$

**Convergence:** Linear rate for strongly convex functions, sublinear for general convex.

**Choosing Step Size $\alpha_k$:**
- **Fixed:** Simple but may diverge if too large
- **Exact line search:** $\alpha_k = \arg\min_\alpha f(x_k - \alpha \nabla f(x_k))$
- **Backtracking (Armijo):** Reduce $\alpha$ until $f(x_k - \alpha \nabla f) \leq f(x_k) - c\alpha \|\nabla f\|^2$
- **Diminishing:** $\alpha_k \to 0$ with $\sum \alpha_k = \infty$ (e.g., $\alpha_k = 1/k$)

#### 9.2.2 Conjugate Gradient

$$d_{k+1} = -\nabla f(x_{k+1}) + \beta_k d_k$$
$$x_{k+1} = x_k + \alpha_k d_k$$

where $\beta_k = \frac{\nabla f(x_{k+1})^T \nabla f(x_{k+1})}{\nabla f(x_k)^T \nabla f(x_k)}$ (Fletcher-Reeves).

Converges in $n$ steps for quadratic functions, faster than gradient descent in practice.

#### 9.2.3 Newton's Method

$$x_{k+1} = x_k - [\nabla^2 f(x_k)]^{-1} \nabla f(x_k)$$

**Convergence:** Quadratic near optimum. Requires Hessian computation and inversion ($O(n^3)$).

#### 9.2.4 Quasi-Newton Methods

Approximate Hessian without computing second derivatives.

**BFGS Update:**
$$B_{k+1} = B_k + \frac{y_k y_k^T}{y_k^T s_k} - \frac{B_k s_k s_k^T B_k}{s_k^T B_k s_k}$$

where $s_k = x_{k+1} - x_k$ and $y_k = \nabla f(x_{k+1}) - \nabla f(x_k)$.

**L-BFGS:** Limited-memory version — stores only recent $s_k, y_k$ pairs instead of full matrix.

### 9.3 Constrained Optimization

#### 9.3.1 Equality Constraints

$$\min_{x} f(x) \quad \text{s.t.} \quad h(x) = 0$$

**Lagrange Multiplier Method:** Define Lagrangian $L(x, \lambda) = f(x) + \lambda^T h(x)$.

**Necessary Conditions:** $\nabla L(x^*, \lambda^*) = 0$, which gives:
$$\nabla f(x^*) + \sum_j \lambda_j^* \nabla h_j(x^*) = 0$$
$$h_j(x^*) = 0$$

#### 9.3.2 Inequality Constraints

$$\min_{x} f(x) \quad \text{s.t.} \quad g(x) \leq 0$$

**KKT (Karush-Kuhn-Tucker) Conditions:**

For $x^*$ to be optimal (under constraint qualification):

1. **Stationarity:** $0 \in \partial f(x^*) + \sum \mu_i \partial g_i(x^*)$
2. **Primal Feasibility:** $g_i(x^*) \leq 0$ for all $i$
3. **Dual Feasibility:** $\mu_i \geq 0$ for all $i$
4. **Complementary Slackness:** $\mu_i g_i(x^*) = 0$ for all $i$

**Interpretation:** $\mu_i = 0$ if constraint is inactive ($g_i(x^*) < 0$); $\mu_i > 0$ if constraint is active ($g_i(x^*) = 0$).

#### 9.3.3 Sensitivity Analysis

The Lagrange multipliers $\lambda_i, \mu_i$ represent the rate of change of the optimal objective with respect to constraint relaxation:

$$\frac{\partial f^*}{\partial b_i} = -\lambda_i$$

where $b_i$ is the right-hand side of constraint $i$.

### 9.4 Linear Programming

**Standard Form:**
$$\min_{x \in \mathbb{R}^n} c^T x \quad \text{s.t.} \quad Ax \leq b, \; x \geq 0$$

**Dual Linear Program:**
$$\max_{y \in \mathbb{R}^m} b^T y \quad \text{s.t.} \quad A^T y \geq c, \; y \geq 0$$

**Duality Theorems:**
- **Weak Duality:** $c^T x \geq b^T y$ for any feasible primal $x$ and dual $y$
- **Strong Duality:** If primal has optimal $x^*$, dual has optimal $y^*$ with $c^T x^* = b^T y^*$

**Fundamental Theorem of Linear Programming:** The optimal solution occurs at a vertex (extreme point) of the feasible region.

**Simplex Method:** Moves from vertex to vertex along edges of the feasible polytope, improving the objective at each step.

**Interior Point Methods:** Follow the central path through the interior of the feasible region. Polynomial-time ($O(n^{3.5}L)$). Often faster than simplex for large problems.

### 9.5 Convex Optimization

**Properties:**
- Every local minimum is a global minimum
- The feasible set is convex
- The objective function is convex
- Can be solved efficiently (polynomial time)

**Cone Programming Hierarchy:**

| Problem Type | Description | Example |
|-------------|-------------|---------|
| LP | Linear objective + linear constraints | Resource allocation |
| QP | Quadratic convex objective + linear constraints | SVMs, portfolio |
| SOCP | Linear objective + second-order cone constraints | Robust optimization |
| SDP | Linear objective + positive semidefinite cone | Max-cut relaxation |

**CVX Modeling:** Tools like CVX, CVXPY, and YALMIP allow specifying convex problems in natural mathematical notation.

### 9.6 Stochastic Optimization

**Stochastic Gradient Descent (SGD):** Uses a random subset of data (mini-batch) to estimate the gradient:

$$x_{k+1} = x_k - \alpha_k \cdot \frac{1}{|B|} \sum_{i \in B} \nabla f_i(x_k)$$

**Convergence:** Sublinear for convex, can escape saddle points in nonconvex settings.

**Variants:**
- **Momentum:** $v_{k+1} = \beta v_k + (1-\beta)\nabla f(x_k)$, $x_{k+1} = x_k - \alpha v_{k+1}$
- **Adam:** Adaptive moment estimation with per-parameter learning rates
- **AdaGrad:** Adaptive gradient with decreasing learning rates for frequent parameters
- **RMSProp:** RMS of recent gradients for normalization

### 9.7 Duality and Augmented Lagrangian

**Lagrangian Dual:** $g(\lambda, \mu) = \min_x L(x, \lambda, \mu)$

**Weak Duality:** $g(\lambda, \mu) \leq f(x^*)$ for any feasible $\lambda \geq 0, \mu$

**Strong Duality (Slater's Condition):** If a convex problem has a strictly feasible point, then $\max g = f^*$.

**Augmented Lagrangian:**
$$L_\rho(x, \lambda) = f(x) + \lambda^T h(x) + \frac{\rho}{2}\|h(x)\|^2$$

**ADMM (Alternating Direction Method of Multipliers):** Splits variables for separable problems:
$$x^{k+1} = \arg\min_x L_\rho(x, z^k, \lambda^k)$$
$$z^{k+1} = \arg\min_z L_\rho(x^{k+1}, z, \lambda^k)$$
$$\lambda^{k+1} = \lambda^k + \rho(h(x^{k+1}) + g(z^{k+1}) - b)$$

### 9.8 Applications

**Machine Learning — Empirical Risk Minimization:**
$$\min_w \frac{1}{n} \sum_{i=1}^n L(y_i, f(x_i, w)) + \lambda \|w\|^2$$

The first term is data fit; the second is regularization (convex if $L$ is convex in $w$).

**Support Vector Machine (Primal):**
$$\min_{w,b} \frac{1}{2}\|w\|^2 + C \sum_{i=1}^n \xi_i$$
$$\text{s.t.} \quad y_i(w^T x_i + b) \geq 1 - \xi_i, \; \xi_i \geq 0$$

**Portfolio Optimization (Markowitz):**
$$\min_w w^T \Sigma w \quad \text{s.t.} \quad \mu^T w \geq R, \; \sum w_i = 1$$

**Optimal Transport:** Minimize the cost of moving mass between distributions:
$$\min_P \langle C, P \rangle \quad \text{s.t.} \quad P\mathbf{1} = r, \; P^T\mathbf{1} = c$$

## Examples

### Example 1: Gradient Descent

Minimize $f(x) = x^2 + 2y^2$ starting from $(1,1)$ with $\alpha = 0.1$.

**Solution:**

$\nabla f = \langle 2x, 4y \rangle$

Iterations:
$(x_0, y_0) = (1, 1)$, $f = 3$
$(x_1, y_1) = (1, 1) - 0.1\langle 2, 4 \rangle = (0.8, 0.6)$, $f = 0.64 + 0.72 = 1.36$
$(x_2, y_2) = (0.8, 0.6) - 0.1\langle 1.6, 2.4 \rangle = (0.64, 0.36)$, $f = 0.41 + 0.26 = 0.67$
$(x_3, y_3) = (0.64, 0.36) - 0.1\langle 1.28, 1.44 \rangle = (0.512, 0.216)$, $f = 0.262 + 0.093 = 0.355$

After 10 iterations: $(0.107, 0.007)$, $f \approx 0.012$. Converging to $(0,0)$.

### Example 2: Linear Programming — Simplex

Maximize $z = 3x + 2y$ subject to $x + y \leq 4$, $2x + y \leq 6$, $x, y \geq 0$.

**Solution:**
Vertices of the feasible region:
- $(0,0)$: $z = 0$
- $(3,0)$: $z = 9$
- $(2,2)$: intersection of $x+y=4$ and $2x+y=6$, giving $(2,2)$. $z = 3(2) + 2(2) = 10$
- $(0,4)$: $z = 8$

Optimal: $(2,2)$ with $z = 10$.

**Dual Problem:** Minimize $w = 4u + 6v$ subject to $u + 2v \geq 3$, $u + v \geq 2$, $u, v \geq 0$.
By strong duality, $w^* = z^* = 10$.

### Example 4: KKT Conditions

Minimize $f(x,y) = (x-1)^2 + (y-2)^2$ subject to $x + y \leq 2$, $x \geq 0$, $y \geq 0$.

**Solution:**

Set up Lagrangian: $L = (x-1)^2 + (y-2)^2 + \mu_1(x+y-2) + \mu_2(-x) + \mu_3(-y)$

KKT conditions:
$\partial L/\partial x = 2(x-1) + \mu_1 - \mu_2 = 0$
$\partial L/\partial y = 2(y-2) + \mu_1 - \mu_3 = 0$
$\mu_1(x+y-2) = 0$, $\mu_2 x = 0$, $\mu_3 y = 0$
$\mu_1, \mu_2, \mu_3 \geq 0$
$x + y \leq 2$, $x \geq 0$, $y \geq 0$

Try active constraint $x + y = 2$ with $\mu_1 > 0$, $x > 0$, $y > 0$ ($\mu_2 = \mu_3 = 0$):

$2(x-1) + \mu_1 = 0 \implies 2x - 2 + \mu_1 = 0$
$2(y-2) + \mu_1 = 0 \implies 2y - 4 + \mu_1 = 0$
$x + y = 2$

From first two: $2x - 2 = 2y - 4 \implies x - y = -1 \implies x = y - 1$

With $x + y = 2$: $(y-1) + y = 2 \implies 2y = 3 \implies y = 1.5$, $x = 0.5$

$\mu_1 = 2 - 2x = 2 - 1 = 1 \geq 0$ ✓

KKT satisfied. The optimal point is $(0.5, 1.5)$ with $f = 0.25 + 0.25 = 0.5$.

## Summary

- Convexity guarantees global optimality and efficient solution methods
- Gradient descent is the foundational algorithm for unconstrained optimization
- Newton's method converges quadratically but requires Hessian computation
- KKT conditions are necessary for constrained optimality
- Linear programming optimizes linear objectives over polyhedral feasible regions
- Duality provides bounds, certificates, and distributed algorithms
- SGD and its variants power modern machine learning
- ADMM handles separable problems with linear constraints

## Exercises

### Review Questions

1. Prove that a convex function's local minimum is a global minimum
2. Explain why Newton's method converges faster than gradient descent
3. State the KKT conditions and explain complementary slackness
4. What is the dual of a linear program? Why is it useful?
5. Compare momentum-based SGD with plain SGD

### Application Problems

1. **Linear Programming:** A factory makes two products. Product A requires 2 hours machine time and 1 hour labor; product B requires 1 hour machine and 3 hours labor. Daily machine limit: 8 hours; labor: 12 hours. Profit per unit: A = $40, B = $30. Maximize profit.

2. **SVM Dual:** Derive the dual of the SVM problem above.

3. **Portfolio Optimization:** With assets having returns $\mu = [0.1, 0.15, 0.08]$ and covariance matrix $\Sigma$, find the minimum-variance portfolio.

4. **KKT:** Minimize $f(x) = x_1^2 + x_2^2$ subject to $x_1 + x_2 \geq 4$, $x_1, x_2 \geq 0$.

### Challenge Problem

**Duality Gap in Nonconvex Optimization:** Construct a simple nonconvex optimization problem where strong duality fails ($p^* \neq d^*$). Prove the gap and explain why convexity is required for strong duality.

## Practical Takeaways

| Method | Convergence | Pros | Cons |
|--------|-------------|------|------|
| Gradient Descent | Linear | Simple, memory-efficient | Slow near optimum, tuning needed |
| Newton's Method | Quadratic | Very fast near optimum | $O(n^3)$ Hessian inversion |
| BFGS (Quasi-Newton) | Superlinear | No Hessian needed | Memory $O(n^2)$ |
| L-BFGS | Superlinear | Memory $O(mn)$ | Approximate curvature |
| SGD | Sublinear | Scales to big data | Noisy, needs learning rate schedule |

### Optimization Checklist

1. **Is the problem convex?** If yes, any local minimum is global — use gradient descent or Newton
2. **Is it large-scale ($n > 10^5$)?** Use SGD or L-BFGS (avoid full Hessian)
3. **Are there constraints?** Use KKT conditions or transform to dual
4. **Is it linear?** Use simplex or interior-point methods
5. **Is the objective expensive?** Use Bayesian optimization or surrogate models

## TypeScript Example: Gradient Descent

```typescript
function gradientDescent(
  gradient: (x: number[]) => number[],
  initial: number[],
  learningRate: number = 0.1,
  iterations: number = 100
): number[] {
  let x = [...initial];
  for (let i = 0; i < iterations; i++) {
    const grad = gradient(x);
    x = x.map((xi, idx) => xi - learningRate * grad[idx]);
  }
  return x;
}

// Minimize f(x,y) = x^2 + 2y^2
// Gradient: [2x, 4y]
const result = gradientDescent(
  (x) => [2 * x[0], 4 * x[1]],
  [1, 1],
  0.1,
  100
);
console.log(`Minimum at (${result[0].toFixed(4)}, ${result[1].toFixed(4)})`);
// Output: Minimum at (0.0000, 0.0000)
```

### Example 5: ADMM for Lasso Regression

The Lasso problem $\min_x \frac{1}{2}\|Ax - b\|^2 + \lambda\|x\|_1$ can be solved with ADMM:

$$x^{k+1} = (A^T A + \rho I)^{-1}(A^T b + \rho(z^k - u^k))$$
$$z^{k+1} = S_{\lambda/\rho}(x^{k+1} + u^k)$$
$$u^{k+1} = u^k + x^{k+1} - z^{k+1}$$

where $S_\kappa(\cdot)$ is the soft-thresholding operator. ADMM decomposes the non-smooth $\ell_1$ penalty from the smooth least-squares term.

## Notation Reference

| Symbol | Meaning |
|--------|---------|
| $\nabla f$ | gradient |
| $\nabla^2 f$ | Hessian |
| $L(x, \lambda)$ | Lagrangian |
| $g(\lambda, \mu)$ | dual function |
| $p^*$ | primal optimal value |
| $d^*$ | dual optimal value |
| $\mu_i$ | inequality multiplier |
| $\lambda_j$ | equality multiplier |
| $\alpha_k$ | step size at iteration $k$ |
| $B_k$ | Hessian approximation |
| $c^T x$ | linear objective |
| $A$ | constraint matrix |
