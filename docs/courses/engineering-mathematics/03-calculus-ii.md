# Chapter 3: Multivariable Calculus

> **Previous:** [Chapter 2: Single Variable Calculus](02-calculus-i.md) | **Next:** [Chapter 4: Differential Equations](04-differential-equations.md)

## Learning Objectives

After completing this chapter, you will be able to:

- Compute partial derivatives and interpret them geometrically
- Find gradients, directional derivatives, and use them for optimization in multiple dimensions
- Evaluate multiple integrals in Cartesian, polar, cylindrical, and spherical coordinates
- Apply change of variables (Jacobian) for coordinate transformations
- Understand and compute divergence and curl of vector fields
- Apply multivariable calculus to machine learning optimization and physics

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Partial Derivatives | Derivative with respect to one variable, holding others constant | Computing gradients in ML |
| Gradient | $\nabla f$ points in the direction of steepest ascent | Gradient descent for optimization |
| Multiple Integrals | $\iint f(x,y)\,dx\,dy$ accumulates over 2D regions | Computing areas, volumes, averages |
| Change of Variables | $dx\,dy = |J|\,du\,dv$ transforms coordinates | Simplifies integration domain |
| Vector Fields | Functions that assign vectors to each point in space | Representing forces, flow, gradients |
| Divergence & Curl | $\nabla \cdot F$ measures source/sink; $\nabla \times F$ measures rotation | Fundamental theorems of vector calculus |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Partial Derivatives] --> B[Gradient & Directional Derivatives]
    B --> C[Optimization in R^n]
    C --> D[Multiple Integrals]
    D --> E[Change of Variables]
    E --> F[Vector Fields]
    F --> G[Line & Surface Integrals]
    G --> H[Fundamental Theorems]
```

## Theory

### 3.1 Functions of Several Variables

A function $f: \mathbb{R}^n \to \mathbb{R}$ assigns a real number to each point $(x_1, x_2, \ldots, x_n)$. For $n = 2$, we write $z = f(x, y)$.

**Domain:** The set of input values where $f$ is defined. For $f(x,y) = \ln(x + y)$, the domain is $x + y > 0$.

**Level Curves (Contours):** Curves in $\mathbb{R}^2$ where $f(x,y) = c$ (constant). These are the 2D analogue of topographic map elevations.

**Level Surfaces:** For $f(x,y,z)$, surfaces where $f(x,y,z) = c$.

**Limits:** $\lim_{(x,y) \to (a,b)} f(x,y) = L$ means $f(x,y)$ approaches $L$ as $(x,y)$ approaches $(a,b)$ along any path.

**Continuity:** $f$ is continuous at $(a,b)$ if $\lim_{(x,y) \to (a,b)} f(x,y) = f(a,b)$.

### 3.2 Partial Derivatives

**Definition:** The partial derivative of $f$ with respect to $x$ at $(a,b)$ is:

$$\frac{\partial f}{\partial x}(a,b) = \lim_{h \to 0} \frac{f(a+h, b) - f(a,b)}{h}$$

Similarly for $\frac{\partial f}{\partial y}$ — differentiate with respect to $y$, treating $x$ as constant.

**Geometric Interpretation:** $\frac{\partial f}{\partial x}(a,b)$ is the slope of the tangent line to the curve obtained by intersecting $z = f(x,y)$ with the plane $y = b$.

**Higher-Order Partial Derivatives:**

$$\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right), \quad \frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right)$$

**Clairaut's Theorem (Equality of Mixed Partials):** If $f_{xy}$ and $f_{yx}$ are continuous at a point, then:

$$\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}$$

### 3.3 Gradient and Directional Derivatives

**Gradient:** The vector of all partial derivatives:

$$\nabla f = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle$$

**Properties of the Gradient:**
- $\nabla f$ points in the direction of steepest increase of $f$
- $\|\nabla f\|$ is the rate of increase in that direction
- $\nabla f$ is perpendicular to level curves/surfaces ($\nabla f \cdot T = 0$ along a level curve)
- $-\nabla f$ points in the direction of steepest decrease (used in gradient descent)

**Directional Derivative:** The rate of change of $f$ in the direction of a unit vector $\mathbf{u}$:

$$D_{\mathbf{u}} f(\mathbf{x}) = \nabla f(\mathbf{x}) \cdot \mathbf{u}$$

This is maximized when $\mathbf{u}$ is parallel to $\nabla f$, giving $D_{\mathbf{u}} f = \|\nabla f\|$.

### 3.4 Chain Rule for Multivariable Functions

Case 1: If $z = f(x,y)$ with $x = g(t), y = h(t)$, then:

$$\frac{dz}{dt} = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt}$$

Case 2: If $z = f(x,y)$ with $x = g(s,t), y = h(s,t)$, then:

$$\frac{\partial z}{\partial s} = \frac{\partial f}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial f}{\partial y} \frac{\partial y}{\partial s}$$
$$\frac{\partial z}{\partial t} = \frac{\partial f}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial f}{\partial y} \frac{\partial y}{\partial t}$$

### 3.5 Tangent Planes and Linear Approximation

For $z = f(x,y)$, the tangent plane at $(a,b)$ is:

$$z - f(a,b) = f_x(a,b)(x - a) + f_y(a,b)(y - b)$$

**Linear Approximation:** $f(x,y) \approx f(a,b) + f_x(a,b)(x - a) + f_y(a,b)(y - b)$

**Total Differential:** $dz = f_x\,dx + f_y\,dy$ approximates the change in $f$ for small changes $dx$ and $dy$.

### 3.6 Multivariable Optimization

**Critical Points:** $(a,b)$ is a critical point if $\nabla f(a,b) = 0$ (or does not exist).

**Second Derivative Test (for $f: \mathbb{R}^2 \to \mathbb{R}$):**

Define the discriminant $D = f_{xx} f_{yy} - (f_{xy})^2$:
- If $D > 0$ and $f_{xx} > 0$: local minimum
- If $D > 0$ and $f_{xx} < 0$: local maximum
- If $D < 0$: saddle point
- If $D = 0$: test is inconclusive

**Hessian Matrix:** $H = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{yx} & f_{yy} \end{pmatrix}$

- Positive definite $H$ at critical point = local minimum
- Negative definite $H$ = local maximum
- Indefinite $H$ = saddle point

**Lagrange Multipliers (Constrained Optimization):**

To optimize $f(x,y)$ subject to $g(x,y) = 0$, solve:

$$\nabla f = \lambda \nabla g \quad \text{and} \quad g(x,y) = 0$$

where $\lambda$ is the Lagrange multiplier. This gives a system of 3 equations in 3 unknowns.

**Meaning of $\lambda$:** $\frac{df}{dg} = \lambda$ — the Lagrange multiplier represents the rate of change of the optimal value as the constraint changes.

### 3.7 Double Integrals

**Definition:** $\iint_R f(x,y)\,dA = \lim_{\Delta x, \Delta y \to 0} \sum_{i} \sum_{j} f(x_i^*, y_j^*) \Delta x \Delta y$

**Iterated Integrals (Fubini's Theorem):** If $f$ is continuous on $R = [a,b] \times [c,d]$:

$$\iint_R f(x,y)\,dA = \int_a^b \int_c^d f(x,y)\,dy\,dx = \int_c^d \int_a^b f(x,y)\,dx\,dy$$

**Over General Regions:**
- Type I: $R = \{(x,y): a \leq x \leq b, g_1(x) \leq y \leq g_2(x)\}$
- Type II: $R = \{(x,y): c \leq y \leq d, h_1(y) \leq x \leq h_2(y)\}$

### 3.8 Triple Integrals

**Definition:** $\iiint_E f(x,y,z)\,dV$ extends double integrals to 3D.

**Volume:** $V = \iiint_E 1\,dV$

**Applications:**
- Mass: $m = \iiint_E \rho(x,y,z)\,dV$ where $\rho$ is density
- Center of mass: $\bar{x} = \frac{1}{m} \iiint_E x\rho\,dV$, etc.
- Moment of inertia: $I = \iiint_E r^2 \rho\,dV$

### 3.9 Change of Variables (Coordinate Transformations)

**Polar Coordinates ($\mathbb{R}^2$):**

$$x = r\cos\theta, \quad y = r\sin\theta$$

$$dA = dx\,dy = r\,dr\,d\theta$$

**Cylindrical Coordinates ($\mathbb{R}^3$):**

$$x = r\cos\theta, \quad y = r\sin\theta, \quad z = z$$

$$dV = r\,dr\,d\theta\,dz$$

**Spherical Coordinates ($\mathbb{R}^3$):**

$$x = \rho\sin\phi\cos\theta, \quad y = \rho\sin\phi\sin\theta, \quad z = \rho\cos\phi$$

$$dV = \rho^2 \sin\phi\,d\rho\,d\phi\,d\theta$$

where $\rho \geq 0$, $0 \leq \phi \leq \pi$, $0 \leq \theta \leq 2\pi$.

**Jacobian:** For transformation $(u,v) \to (x,y)$:

$$J = \begin{vmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{vmatrix}$$

$$dx\,dy = |J|\,du\,dv$$

The Jacobian determinant gives the factor by which area/volume scales under the transformation.

### 3.10 Vector Fields

A **vector field** assigns a vector to each point in space. In $\mathbb{R}^3$:

$$\mathbf{F}(x,y,z) = P(x,y,z)\,\mathbf{i} + Q(x,y,z)\,\mathbf{j} + R(x,y,z)\,\mathbf{k}$$

**Gradient Field:** $\mathbf{F} = \nabla f$ (conservative field). Then $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$ around any closed curve.

**Divergence:** A scalar measuring outflow per unit volume:

$$\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$$

- $\nabla \cdot \mathbf{F} > 0$: source (fluid expanding)
- $\nabla \cdot \mathbf{F} < 0$: sink (fluid contracting)
- $\nabla \cdot \mathbf{F} = 0$: incompressible

**Curl:** A vector measuring rotation at a point:

$$\nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix}$$

- $\nabla \times \mathbf{F} = 0$ for conservative fields ($\mathbf{F} = \nabla f$)

**Important Identities:**
- $\nabla \times (\nabla f) = 0$ (curl of gradient is zero)
- $\nabla \cdot (\nabla \times \mathbf{F}) = 0$ (divergence of curl is zero)
- $\nabla \cdot (f\mathbf{F}) = \nabla f \cdot \mathbf{F} + f(\nabla \cdot \mathbf{F})$
- $\nabla \times (f\mathbf{F}) = \nabla f \times \mathbf{F} + f(\nabla \times \mathbf{F})$

### 3.11 Line Integrals

**Definition:** $\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)\,dt$

where $\mathbf{r}(t)$ parametrizes curve $C$ from $t = a$ to $t = b$.

**Scalar Line Integral:** $\int_C f\,ds = \int_a^b f(\mathbf{r}(t)) \|\mathbf{r}'(t)\|\,dt$ — integrates scalar function along curve.

**Fundamental Theorem for Line Integrals:** If $\mathbf{F} = \nabla f$:

$$\int_C \mathbf{F} \cdot d\mathbf{r} = f(\mathbf{r}(b)) - f(\mathbf{r}(a))$$

The integral depends only on endpoints, not the path.

**Conservative Fields:**
- $\mathbf{F} = \nabla f$ for some potential $f$
- $\nabla \times \mathbf{F} = 0$ (in simply connected domain)
- $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$ for any closed curve $C$
- Path independence: $\int_{C_1} \mathbf{F} \cdot d\mathbf{r} = \int_{C_2} \mathbf{F} \cdot d\mathbf{r}$ for curves with same endpoints

### 3.12 Surface Integrals

**Parametrized Surface:** $\mathbf{r}(u,v) = x(u,v)\mathbf{i} + y(u,v)\mathbf{j} + z(u,v)\mathbf{k}$

**Surface Area Element:** $dS = \|\mathbf{r}_u \times \mathbf{r}_v\|\,du\,dv$

**Scalar Surface Integral:** $\iint_S f\,dS = \iint_D f(\mathbf{r}(u,v)) \|\mathbf{r}_u \times \mathbf{r}_v\|\,du\,dv$

**Vector Surface Integral (Flux):**

$$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_S \mathbf{F} \cdot \mathbf{n}\,dS$$

where $\mathbf{n}$ is the unit normal vector.

### 3.13 Fundamental Theorems of Vector Calculus

**Green's Theorem (2D):** Relates line integral around a closed curve to double integral over enclosed region:

$$\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\,dA$$

**Divergence Theorem (3D) / Gauss's Theorem:** Relates flux through closed surface to triple integral of divergence:

$$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E (\nabla \cdot \mathbf{F})\,dV$$

**Stokes' Theorem (3D):** Relates line integral around closed curve to surface integral of curl:

$$\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$$

**Unified View — Generalized Stokes' Theorem:**

$$\int_{\partial M} \omega = \int_M d\omega$$

The integral of a form $\omega$ over the boundary of a manifold $M$ equals the integral of the exterior derivative $d\omega$ over $M$ itself.

## Examples

### Example 1: Partial Derivatives

For $f(x,y) = x^2 \cos y + y e^x$, find $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$.

**Solution:**

$$\frac{\partial f}{\partial x} = 2x \cos y + y e^x$$
$$\frac{\partial f}{\partial y} = -x^2 \sin y + e^x$$

### Example 2: Gradient and Directional Derivative

For $f(x,y) = x^2 + 2y^2$, find the gradient at $(1,1)$ and the directional derivative in direction $\mathbf{v} = \langle 3, 4 \rangle$.

**Solution:**

$\nabla f = \langle 2x, 4y \rangle$
$\nabla f(1,1) = \langle 2, 4 \rangle$

Unit vector in direction of $\mathbf{v}$: $\mathbf{u} = \frac{\langle 3, 4 \rangle}{5} = \langle 0.6, 0.8 \rangle$

Directional derivative: $D_{\mathbf{u}} f(1,1) = \langle 2, 4 \rangle \cdot \langle 0.6, 0.8 \rangle = 1.2 + 3.2 = 4.4$

### Example 3: Double Integral

Evaluate $\iint_R (x + 2y)\,dA$ where $R$ is bounded by $y = x^2$ and $y = 2x$.

**Solution:**

Find intersection points: $x^2 = 2x \implies x^2 - 2x = 0 \implies x(x-2) = 0 \implies x = 0, 2$

Region: Type I with $0 \leq x \leq 2$, $x^2 \leq y \leq 2x$

$$\iint_R (x + 2y)\,dA = \int_0^2 \int_{x^2}^{2x} (x + 2y)\,dy\,dx$$

Inner integral:
$$\int_{x^2}^{2x} (x + 2y)\,dy = \left[xy + y^2\right]_{y=x^2}^{y=2x} = (2x^2 + 4x^2) - (x^3 + x^4) = 6x^2 - x^3 - x^4$$

Outer integral:
$$\int_0^2 (6x^2 - x^3 - x^4)\,dx = \left[2x^3 - \frac{x^4}{4} - \frac{x^5}{5}\right]_0^2 = (16 - 4 - 6.4) = 5.6$$

### Example 4: Change of Variables (Polar)

Evaluate $\iint_R e^{-(x^2 + y^2)}\,dA$ where $R$ is the disk $x^2 + y^2 \leq 4$.

**Solution:** Convert to polar: $x = r\cos\theta$, $y = r\sin\theta$, $dA = r\,dr\,d\theta$.

Region: $0 \leq r \leq 2$, $0 \leq \theta \leq 2\pi$.

$$\iint_R e^{-(x^2 + y^2)}\,dA = \int_0^{2\pi} \int_0^2 e^{-r^2} r\,dr\,d\theta$$

Inner: $\int e^{-r^2} r\,dr = -\frac{1}{2}e^{-r^2}$.

Inner definite: $\left[-\frac{1}{2}e^{-r^2}\right]_0^2 = -\frac{1}{2}(e^{-4} - 1) = \frac{1}{2}(1 - e^{-4})$

Outer: $\int_0^{2\pi} \frac{1}{2}(1 - e^{-4})\,d\theta = \pi(1 - e^{-4})$

### Example 5: Lagrange Multipliers

Find the point on the plane $x + 2y + z = 4$ closest to the origin.

**Solution:** Minimize $f(x,y,z) = x^2 + y^2 + z^2$ (distance squared) subject to $g(x,y,z) = x + 2y + z - 4 = 0$.

Set $\nabla f = \lambda \nabla g$:

$$\langle 2x, 2y, 2z \rangle = \lambda \langle 1, 2, 1 \rangle$$

So $2x = \lambda$, $2y = 2\lambda$, $2z = \lambda$, giving $x = z = \frac{\lambda}{2}$, $y = \lambda$.

Substitute into constraint: $\frac{\lambda}{2} + 2\lambda + \frac{\lambda}{2} = 4 \implies 3\lambda = 4 \implies \lambda = \frac{4}{3}$

Point: $(\frac{2}{3}, \frac{4}{3}, \frac{2}{3})$

Minimum distance: $\sqrt{(\frac{2}{3})^2 + (\frac{4}{3})^2 + (\frac{2}{3})^2} = \sqrt{\frac{24}{9}} = \frac{2\sqrt{6}}{3}$

### Example 6: Divergence Theorem

Verify the divergence theorem for $\mathbf{F} = \langle x, y, z \rangle$ over the unit sphere.

**Solution:** $\nabla \cdot \mathbf{F} = 1 + 1 + 1 = 3$

Volume of unit sphere: $V = \frac{4\pi}{3}$

$$\iiint_E (\nabla \cdot \mathbf{F})\,dV = 3 \cdot \frac{4\pi}{3} = 4\pi$$

Now compute the flux directly. On the sphere, $\mathbf{n} = \langle x, y, z \rangle$ (outward normal, unit length).

$$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_S \langle x,y,z \rangle \cdot \langle x,y,z \rangle\,dS = \iint_S (x^2 + y^2 + z^2)\,dS = \iint_S 1\,dS = 4\pi$$

Both equal $4\pi$. Verified ✓

### Example 7: Application — Gradient Descent in 2D

For $f(x,y) = x^2 + 2y^2$, starting at $(1,1)$, compute one step of gradient descent with $\eta = 0.1$.

**Solution:**

$\nabla f = \langle 2x, 4y \rangle$
$\nabla f(1,1) = \langle 2, 4 \rangle$

Update:
$$(x_{new}, y_{new}) = (1,1) - 0.1 \cdot \langle 2, 4 \rangle = (0.8, 0.6)$$

$f(1,1) = 1 + 2 = 3$, $f(0.8, 0.6) = 0.64 + 0.72 = 1.36$. The function value decreased.

## Summary

- Partial derivatives compute rates of change with respect to one variable at a time
- The gradient points uphill; $-\nabla f$ guides gradient descent optimization
- Double/triple integrals extend accumulation to 2D/3D regions
- Coordinate transformations (polar, cylindrical, spherical) simplify many integrals
- The Jacobian determinant gives the area/volume scaling factor of a transformation
- Lagrange multipliers handle optimization with equality constraints
- Vector fields, divergence, and curl describe flow and rotation in space
- Green's, Stokes', and Divergence theorems connect integrals of different dimensions
- Stokes' theorem unifies all: boundary integral = integral of derivative over interior

## Exercises

### Review Questions

1. Explain the geometric meaning of the gradient vector
2. Why does the second derivative test use $f_{xx} f_{yy} - (f_{xy})^2$?
3. When would you use spherical coordinates instead of cylindrical?
4. What does a zero divergence tell you about a vector field?
5. Explain why conservative fields satisfy $\nabla \times \mathbf{F} = 0$

### Application Problems

1. **Least Squares:** Show that for data $(x_i, y_i)$, minimizing $\sum (y_i - mx - b)^2$ gives a system of two linear equations in $m$ and $b$.

2. **Volume of Sphere:** Use triple integration in spherical coordinates to derive $V = \frac{4}{3}\pi R^3$.

3. **ML Loss Surface:** For $L(w_1,w_2) = (w_1^2 - 1)^2 + (w_2^2 - 2)^2$, find all critical points and classify them.

4. **Flux through Surface:** Compute the flux of $\mathbf{F} = \langle 0, 0, z \rangle$ through the surface of the box $0 \leq x \leq 1$, $0 \leq y \leq 1$, $0 \leq z \leq 1$ using the divergence theorem.

### Challenge Problem

**Gaussian Integral:** Evaluate $I = \int_{-\infty}^\infty e^{-x^2}\,dx = \sqrt{\pi}$ by squaring $I^2$ and converting to polar coordinates. This is the normalization constant for the normal distribution.

## Notation Reference

| Symbol | Meaning |
|--------|---------|
| $\partial f / \partial x$ | partial derivative of $f$ wrt $x$ |
| $\nabla f$ | gradient of $f$ |
| $\nabla \cdot \mathbf{F}$ | divergence of $\mathbf{F}$ |
| $\nabla \times \mathbf{F}$ | curl of $\mathbf{F}$ |
| $D_{\mathbf{u}} f$ | directional derivative in direction $\mathbf{u}$ |
| $\iint_R f\,dA$ | double integral over region $R$ |
| $\iiint_E f\,dV$ | triple integral over region $E$ |
| $d\mathbf{S}$ | oriented surface element |
| $\oint_C$ | line integral around closed curve |
| $\partial M$ | boundary of manifold $M$ |
