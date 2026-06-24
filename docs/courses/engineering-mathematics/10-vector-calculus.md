# Chapter 10: Vector Calculus & Applications

> **Previous:** [Chapter 9: Optimization](09-optimization.md) | **Next:** None (final chapter)

## Learning Objectives

After completing this chapter, you will be able to:

- Compute line integrals and surface integrals of scalar and vector fields
- Apply Green's theorem, Stokes' theorem, and the divergence theorem
- Understand the physical meaning of gradient, divergence, and curl
- Apply vector calculus to electromagnetic fields and fluid dynamics
- Use differential geometry concepts in machine learning and computer graphics
- Understand the connection between vector calculus and neural network architectures

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Line Integrals | $\int_C \mathbf{F} \cdot d\mathbf{r}$ measures work along a path | Work, circulation, potential |
| Surface Integrals | $\iint_S \mathbf{F} \cdot d\mathbf{S}$ measures flux through a surface | Flow rate, electric field flux |
| Green's Theorem | $\oint_C = \iint_D (\text{curl}_z \mathbf{F})\,dA$ | 2D: boundary $\to$ interior |
| Stokes' Theorem | $\oint_C = \iint_S (\nabla \times \mathbf{F})\cdot d\mathbf{S}$ | 3D: line $\to$ surface |
| Divergence Theorem | $\iint_S = \iiint_E (\nabla \cdot \mathbf{F})\,dV$ | 3D: surface $\to$ volume |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Line Integrals] --> B[Conservative Fields]
    B --> C[Surface Integrals]
    C --> D[Green's Theorem]
    D --> E[Stokes' Theorem]
    E --> F[Divergence Theorem]
    F --> G[Applications: EM, Fluids, ML]
```

## Theory

### 10.1 Scalar and Vector Fields

**Scalar Field:** $f: \mathbb{R}^3 \to \mathbb{R}$, assigns a scalar to each point (temperature, pressure, potential).

**Vector Field:** $\mathbf{F}: \mathbb{R}^3 \to \mathbb{R}^3$, assigns a vector to each point (velocity, force, electric field).

**Gradient of Scalar Field:** $\nabla f = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle$

**Divergence of Vector Field:** $\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$

**Curl of Vector Field:** 
$$\nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix}$$

**Laplacian:** $\nabla^2 f = \nabla \cdot (\nabla f) = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} + \frac{\partial^2 f}{\partial z^2}$

### 10.2 Line Integrals

**Scalar Line Integral:** 
$$\int_C f\,ds = \int_a^b f(\mathbf{r}(t)) \|\mathbf{r}'(t)\|\,dt$$

Used to integrate a scalar function along a curve (e.g., mass of a wire).

**Vector Line Integral (Work):**
$$\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)\,dt$$

Measures the work done by force $\mathbf{F}$ moving along path $C$.

**Properties:**
- $\int_{-C} \mathbf{F} \cdot d\mathbf{r} = -\int_C \mathbf{F} \cdot d\mathbf{r}$
- $\int_{C_1 + C_2} = \int_{C_1} + \int_{C_2}$

### 10.3 Conservative Vector Fields

A vector field $\mathbf{F}$ is **conservative** if $\mathbf{F} = \nabla \phi$ for some scalar potential $\phi$.

**Equivalent Conditions:**
1. $\nabla \times \mathbf{F} = 0$ (in simply connected domain)
2. $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$ for any closed curve $C$
3. Path independence: $\int_{C_1} \mathbf{F} \cdot d\mathbf{r} = \int_{C_2} \mathbf{F} \cdot d\mathbf{r}$ for any paths with same endpoints
4. $\mathbf{F} = \nabla \phi$ for some $\phi$

**Finding the Potential:** Integrate $\nabla \phi = \mathbf{F}$ component by component.

### 10.4 Surface Integrals

**Parametrized Surface:** $\mathbf{r}(u,v) = \langle x(u,v), y(u,v), z(u,v) \rangle$

**Surface Area Element:** $dS = \|\mathbf{r}_u \times \mathbf{r}_v\|\,du\,dv$

**Scalar Surface Integral:**
$$\iint_S f\,dS = \iint_D f(\mathbf{r}(u,v)) \|\mathbf{r}_u \times \mathbf{r}_v\|\,du\,dv$$

**Vector Surface Integral (Flux):**
$$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_S \mathbf{F} \cdot \mathbf{n}\,dS = \iint_D \mathbf{F}(\mathbf{r}(u,v)) \cdot (\mathbf{r}_u \times \mathbf{r}_v)\,du\,dv$$

### 10.5 Green's Theorem

For a positively oriented, piecewise smooth simple closed curve $C$ in $\mathbb{R}^2$:

$$\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\,dA$$

where $\mathbf{F} = \langle P, Q \rangle$ and $D$ is the region enclosed by $C$.

**Area Formula:** $A = \frac{1}{2}\oint_C x\,dy - y\,dx$

**Divergence Form (2D):**
$$\oint_C \mathbf{F} \cdot \mathbf{n}\,ds = \iint_D \nabla \cdot \mathbf{F}\,dA$$

### 10.6 Stokes' Theorem

$$\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$$

The line integral around a closed curve $C$ equals the flux of curl through any surface $S$ bounded by $C$.

**Physical Interpretation:** The circulation of $\mathbf{F}$ around $C$ equals the total "rotation" (curl) passing through $S$.

**Curl-Free Fields:** If $\nabla \times \mathbf{F} = 0$, then $\mathbf{F}$ is conservative.

### 10.7 Divergence Theorem (Gauss's Theorem)

$$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E (\nabla \cdot \mathbf{F})\,dV$$

The net outward flux of $\mathbf{F}$ through closed surface $S$ equals the triple integral of divergence inside the volume $E$.

**Physical Interpretation:** Net outflow = total sources inside minus total sinks inside.

**Conservation Laws:** If $\nabla \cdot \mathbf{F} = 0$ (divergence-free), then net flux through any closed surface is zero — incompressible flow.

### 10.8 Orthogonal Coordinate Systems

**Cartesian ($x, y, z$):**

$$\nabla f = \frac{\partial f}{\partial x}\hat{i} + \frac{\partial f}{\partial y}\hat{j} + \frac{\partial f}{\partial z}\hat{k}$$
$$\nabla \cdot \mathbf{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z}$$
$$\nabla^2 f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} + \frac{\partial^2 f}{\partial z^2}$$

**Cylindrical ($r, \theta, z$):**

$$\nabla^2 f = \frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial f}{\partial r}\right) + \frac{1}{r^2}\frac{\partial^2 f}{\partial\theta^2} + \frac{\partial^2 f}{\partial z^2}$$

**Spherical ($\rho, \phi, \theta$):**

$$\nabla^2 f = \frac{1}{\rho^2}\frac{\partial}{\partial\rho}\left(\rho^2\frac{\partial f}{\partial\rho}\right) + \frac{1}{\rho^2\sin\phi}\frac{\partial}{\partial\phi}\left(\sin\phi\frac{\partial f}{\partial\phi}\right) + \frac{1}{\rho^2\sin^2\phi}\frac{\partial^2 f}{\partial\theta^2}$$

### 10.9 Applications in Physics

**Maxwell's Equations (Differential Form):**

$$\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0} \quad \text{(Gauss's law)}$$
$$\nabla \cdot \mathbf{B} = 0 \quad \text{(No magnetic monopoles)}$$
$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \quad \text{(Faraday's law)}$$
$$\nabla \times \mathbf{B} = \mu_0\mathbf{J} + \mu_0\epsilon_0\frac{\partial \mathbf{E}}{\partial t} \quad \text{(Ampère's law)}$$

**Integral Form (via Divergence and Stokes Theorems):**

Gauss's law: $\iint_S \mathbf{E} \cdot d\mathbf{S} = \frac{Q_{\text{enc}}}{\epsilon_0}$

Faraday's law: $\oint_C \mathbf{E} \cdot d\mathbf{r} = -\frac{d}{dt}\iint_S \mathbf{B} \cdot d\mathbf{S}$

**Fluid Dynamics:**
- Continuity equation: $\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho\mathbf{v}) = 0$
- Navier-Stokes: $\rho\frac{D\mathbf{v}}{Dt} = -\nabla p + \mu\nabla^2\mathbf{v} + \rho\mathbf{g}$

### 10.10 Applications in Machine Learning

**Gradient Flows:** The gradient flow $\frac{dw}{dt} = -\nabla L(w)$ models continuous-time optimization.

**Neural Tangent Kernel (NTK):** For infinitely wide neural networks, the evolution of predictions follows:

$$\frac{du(x)}{dt} = \sum_i \Theta(x, x_i) \frac{dL}{du(x_i)}$$

where $\Theta$ is the NTK. This connects gradient flow to kernel regression.

**Manifold Learning:** Given data on a manifold $M \subset \mathbb{R}^D$, the **Laplace-Beltrami operator** (generalization of Laplacian to manifolds) captures the data's intrinsic geometry:

$$\Delta_M f = \frac{1}{\sqrt{|g|}}\partial_i(\sqrt{|g|} g^{ij} \partial_j f)$$

Eigenfunctions of $\Delta_M$ provide a natural coordinate system for data analysis.

**Attention Mechanisms:** In transformers, attention can be viewed as a kernel smoother:

$$\text{Attention}(Q,K,V) = \text{softmax}(QK^T/\sqrt{d})V$$

This is related to the heat kernel (solution of the heat equation on a manifold).

**Score-Based Generative Models:** The score function $\nabla_x \log p(x)$ is a vector field that points toward regions of high probability. Score matching learns this vector field.

**Diffusion Models:** Reverse-time SDE:
$$dx = [f(x,t) - g(t)^2 \nabla_x \log p_t(x)]\,dt + g(t)\,d\bar{w}$$

This reverses a diffusion process using the score function (a vector field learned from data).

## Examples

### Example 1: Line Integral

Evaluate $\int_C \mathbf{F} \cdot d\mathbf{r}$ for $\mathbf{F} = \langle y, x \rangle$ along the curve $\mathbf{r}(t) = \langle \cos t, \sin t \rangle$ from $t = 0$ to $t = \pi/2$.

**Solution:**

$\mathbf{F}(\mathbf{r}(t)) = \langle \sin t, \cos t \rangle$
$\mathbf{r}'(t) = \langle -\sin t, \cos t \rangle$

$$\int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^{\pi/2} \langle \sin t, \cos t \rangle \cdot \langle -\sin t, \cos t \rangle\,dt = \int_0^{\pi/2} (-\sin^2 t + \cos^2 t)\,dt$$

$$= \int_0^{\pi/2} \cos(2t)\,dt = \left[\frac{\sin(2t)}{2}\right]_0^{\pi/2} = 0$$

Note: $\mathbf{F} = \nabla(xy)$, so $\mathbf{F}$ is conservative. The integral depends only on endpoints: $xy|_{(0,1)} - xy|_{(1,0)} = 0 - 0 = 0$. ✓

### Example 2: Green's Theorem for Area

Use Green's theorem to find the area of the ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.

**Solution:**
Area formula: $A = \frac{1}{2}\oint_C x\,dy - y\,dx$

Parametrize ellipse: $x = a\cos t$, $y = b\sin t$, $0 \leq t \leq 2\pi$

$dx = -a\sin t\,dt$, $dy = b\cos t\,dt$

$$A = \frac{1}{2}\int_0^{2\pi} [(a\cos t)(b\cos t) - (b\sin t)(-a\sin t)]\,dt$$
$$= \frac{1}{2}\int_0^{2\pi} (ab\cos^2 t + ab\sin^2 t)\,dt = \frac{ab}{2}\int_0^{2\pi} dt = \pi ab$$

This confirms the known area formula for an ellipse.

### Example 3: Green's Theorem

Use Green's theorem to evaluate $\oint_C (x^2 + y)\,dx + (y^2 + x)\,dy$ where $C$ is the triangle with vertices $(0,0)$, $(1,0)$, $(0,1)$.

**Solution:**

$P = x^2 + y$, $Q = y^2 + x$

$\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 1 - 1 = 0$

By Green's theorem: $\oint_C = \iint_D 0\,dA = 0$

The integral is zero — the field is conservative with potential $\phi = \frac{x^3}{3} + \frac{y^3}{3} + xy$.

### Example 3: Stokes' Theorem

Verify Stokes' theorem for $\mathbf{F} = \langle -y, x, 0 \rangle$ over the surface $S$: $z = 1 - x^2 - y^2$, $z \geq 0$, oriented upward.

**Solution:**

First, compute $\nabla \times \mathbf{F}$:

$$\nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \partial_x & \partial_y & \partial_z \\ -y & x & 0 \end{vmatrix} = \langle 0, 0, 2 \rangle$$

Surface $S$: $z = 1 - x^2 - y^2$, projection $D$ is $x^2 + y^2 \leq 1$.

$$d\mathbf{S} = \langle -z_x, -z_y, 1 \rangle\,dA = \langle 2x, 2y, 1 \rangle\,dA$$

$$\iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} = \iint_D \langle 0, 0, 2 \rangle \cdot \langle 2x, 2y, 1 \rangle\,dA = \iint_D 2\,dA = 2 \cdot \pi(1)^2 = 2\pi$$

Now the boundary: $C$ is $x^2 + y^2 = 1$, $z = 0$. Parametrize: $\mathbf{r}(t) = \langle \cos t, \sin t, 0 \rangle$, $0 \leq t \leq 2\pi$.

$$\oint_C \mathbf{F} \cdot d\mathbf{r} = \int_0^{2\pi} \langle -\sin t, \cos t, 0 \rangle \cdot \langle -\sin t, \cos t, 0 \rangle\,dt = \int_0^{2\pi} (\sin^2 t + \cos^2 t)\,dt = 2\pi$$

Both sides equal $2\pi$. ✓

### Example 4: Divergence Theorem

Compute the flux of $\mathbf{F} = \langle x^3, y^3, z^3 \rangle$ through the unit sphere using the divergence theorem.

**Solution:**

$\nabla \cdot \mathbf{F} = 3x^2 + 3y^2 + 3z^2 = 3(x^2 + y^2 + z^2) = 3r^2$

In spherical coordinates:

$$\iiint_E (\nabla \cdot \mathbf{F})\,dV = \int_0^{2\pi}\int_0^\pi\int_0^1 3\rho^2 \cdot \rho^2\sin\phi\,d\rho\,d\phi\,d\theta$$

$$= 3\int_0^{2\pi} d\theta \int_0^\pi \sin\phi\,d\phi \int_0^1 \rho^4\,d\rho = 3 \cdot 2\pi \cdot 2 \cdot \frac{1}{5} = \frac{12\pi}{5}$$

### Example 5: Vector Calculus in ML — Score Matching

Given data $x \sim p_{\text{data}}(x)$, score matching learns $s_\theta(x) \approx \nabla_x \log p_{\text{data}}(x)$ by minimizing:

$$J(\theta) = E_{p_{\text{data}}}\left[\frac{1}{2}\|s_\theta(x)\|^2 + \nabla_x \cdot s_\theta(x)\right]$$

The divergence term $\nabla_x \cdot s_\theta$ comes from integration by parts of $\|s_\theta - \nabla \log p\|^2$ and ensures the learned vector field matches the true score without knowing $p_{\text{data}}$ explicitly.

## Summary

- Line integrals measure accumulation along curves; Green's theorem links them to area integrals
- Surface integrals measure flux; Stokes' theorem links circulation to curl flux
- The divergence theorem links flux through a closed surface to volume integral of divergence
- Conservative fields have zero curl and path-independent line integrals
- Maxwell's equations unify electricity and magnetism using vector calculus operators
- Neural tangent kernel connects gradient flow to kernel methods
- Score-based generative models learn a vector field (score function) for sampling
- Diffusion models reverse a stochastic process using learned vector fields
- Manifold learning uses the Laplace-Beltrami operator for data geometry

## Exercises

### Review Questions

1. Prove that $\nabla \times (\nabla f) = 0$ for any scalar field $f$
2. State and explain the physical meaning of Stokes' theorem
3. Show that for a conservative field, $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$
4. Explain the divergence theorem in terms of sources and sinks
5. How does Stokes' theorem relate to Green's theorem?

### Application Problems

1. **Work:** Compute the work done by $\mathbf{F} = \langle yz, xz, xy \rangle$ moving a particle from $(0,0,0)$ to $(1,2,3)$ along any path. (Hint: find the potential first.)

2. **Flux:** Compute the flux of $\mathbf{F} = \langle 0, 0, z \rangle$ through the top half of the sphere $x^2 + y^2 + z^2 = 1$, $z \geq 0$.

3. **Green's Theorem:** Evaluate $\oint_C (y^2\,dx + x^2\,dy)$ where $C$ is the unit circle.

4. **Stokes' Theorem:** Use Stokes' theorem to evaluate $\oint_C \langle y, z, x \rangle \cdot d\mathbf{r}$ where $C$ is the triangle with vertices $(1,0,0)$, $(0,1,0)$, $(0,0,1)$.

5. **Divergence Theorem:** Use the divergence theorem to compute the flux of $\mathbf{F} = \langle x, y, z \rangle$ through the surface of the cube $0 \leq x \leq 1$, $0 \leq y \leq 1$, $0 \leq z \leq 1$.

### Additional Exercises

6. **Surface Integral:** Compute $\iint_S (x^2 + y^2)\,dS$ where $S$ is the lateral surface of the cylinder $x^2 + y^2 = 1$, $0 \leq z \leq 1$.

7. **Conservative Field:** Show that $\mathbf{F} = \langle 2xy + z, x^2, x \rangle$ is conservative and find its potential function $\phi$.

8. **Flux Through a Sphere:** Use the divergence theorem to compute the flux of $\mathbf{F} = \langle x^3, y^3, z^3 \rangle$ through the sphere $x^2 + y^2 + z^2 = 4$.

### Challenge Problem

**Connection to Neural ODEs:** The adjoint method for Neural ODE backpropagation requires solving the adjoint ODE:

$$\frac{d\mathbf{a}(t)}{dt} = -\mathbf{a}(t)^T \frac{\partial f_\theta(\mathbf{z}(t), t)}{\partial \mathbf{z}}$$

Show that if $f_\theta = \nabla \phi_\theta$ (a gradient field), then the dynamics $\frac{d\mathbf{z}}{dt} = \nabla \phi_\theta(\mathbf{z})$ is a gradient flow. Prove that in this case, $\phi_\theta$ decreases monotonically along trajectories.

## Practical Takeaways

| Theorem | 2D/3D | Connects | Key Application |
|---------|-------|----------|-----------------|
| Green's | 2D | Line integral ↔ Area integral | Computing area, flux in 2D |
| Stokes' | 3D | Line integral ↔ Surface integral | Circulation, electromagnetism |
| Divergence | 3D | Surface integral ↔ Volume integral | Flux, conservation laws |

### When to Use Each

- **Check if a field is conservative:** Compute curl — if zero and domain is simply connected, it's conservative
- **Simplify complex integrals:** If a line integral looks hard, try applying Stokes' or Green's to convert to a surface/area integral
- **Compute flux efficiently:** If the divergence is simple, use the Divergence Theorem instead of directly integrating over the surface
- **Physics applications:** Maxwell's equations in integral form use all three theorems

## TypeScript Example: 3D Vector Field Operations

```typescript
type Vector3 = [number, number, number];

function gradient(f: (x: number, y: number, z: number) => number,
                  p: Vector3, h: number = 1e-5): Vector3 {
  const [x, y, z] = p;
  return [
    (f(x + h, y, z) - f(x - h, y, z)) / (2 * h),
    (f(x, y + h, z) - f(x, y - h, z)) / (2 * h),
    (f(x, y, z + h) - f(x, y, z - h)) / (2 * h),
  ];
}

function divergence(F: (p: Vector3) => Vector3,
                    p: Vector3, h: number = 1e-5): number {
  const [x, y, z] = p;
  const Fval = F(p);
  // Numerical divergence using central differences
  const dFdx = (F([x + h, y, z])[0] - F([x - h, y, z])[0]) / (2 * h);
  const dFdy = (F([x, y + h, z])[1] - F([x, y - h, z])[1]) / (2 * h);
  const dFdz = (F([x, y, z + h])[2] - F([x, y, z - h])[2]) / (2 * h);
  return dFdx + dFdy + dFdz;
}

// Example: F(x,y,z) = [x², y², z²]
const F_field = (p: Vector3): Vector3 => [p[0]**2, p[1]**2, p[2]**2];
console.log(divergence(F_field, [1, 2, 3])); // ≈ 2+4+6 = 12
```

## Real-World Application: Computational Fluid Dynamics

Vector calculus is the mathematical foundation of computational fluid dynamics (CFD), used to simulate airflow over aircraft, blood flow in arteries, and weather patterns.

**The Navier-Stokes Equations in Vector Form:**

$$\rho\left(\frac{\partial \mathbf{v}}{\partial t} + \mathbf{v} \cdot \nabla \mathbf{v}\right) = -\nabla p + \mu \nabla^2 \mathbf{v} + \rho \mathbf{g}$$

**Key Vector Calculus Operations in CFD:**
- **Gradient $\nabla p$:** Pressure gradient drives fluid flow from high to low pressure
- **Laplacian $\nabla^2 \mathbf{v}$:** Viscous diffusion smooths velocity gradients
- **Divergence $\nabla \cdot \mathbf{v}$:** For incompressible flow, $\nabla \cdot \mathbf{v} = 0$ (continuity)
- **Curl $\nabla \times \mathbf{v}$:** Vorticity measures local rotation of fluid elements

**Vorticity-Streamfunction Formulation:** For 2D incompressible flow, define vorticity $\omega = \nabla \times \mathbf{v}$ (scalar in 2D) and streamfunction $\psi$ such that $\mathbf{v} = \nabla^\perp \psi = \langle -\partial \psi/\partial y, \partial \psi/\partial x \rangle$. The Navier-Stokes equations become:

$$\frac{\partial \omega}{\partial t} + \mathbf{v} \cdot \nabla \omega = \nu \nabla^2 \omega, \quad \nabla^2 \psi = -\omega$$

This eliminates pressure and automatically satisfies incompressibility.

**Finite Element Methods:** PDEs are discretized using basis functions $\phi_i(x,y)$. The weak form uses integration by parts (divergence theorem) to reduce continuity requirements:

$$\int_\Omega (\nabla \cdot \mathbf{F}) \phi_i \, dV = -\int_\Omega \mathbf{F} \cdot \nabla \phi_i \, dV + \int_{\partial\Omega} \mathbf{F} \cdot \mathbf{n} \phi_i \, dS$$

## TypeScript Examples

### Example 6: Numerical Curl Computation

```typescript
type Vector3 = [number, number, number];

function curl(
  F: (p: Vector3) => Vector3,
  p: Vector3,
  h: number = 1e-5
): Vector3 {
  const [x, y, z] = p;
  // dFz/dy - dFy/dz
  const curlX = (F([x, y+h, z])[2] - F([x, y-h, z])[2]) / (2*h)
              - (F([x, y, z+h])[1] - F([x, y, z-h])[1]) / (2*h);
  // dFx/dz - dFz/dx
  const curlY = (F([x, y, z+h])[0] - F([x, y, z-h])[0]) / (2*h)
              - (F([x+h, y, z])[2] - F([x-h, y, z])[2]) / (2*h);
  // dFy/dx - dFx/dy
  const curlZ = (F([x+h, y, z])[1] - F([x-h, y, z])[1]) / (2*h)
              - (F([x, y+h, z])[0] - F([x, y-h, z])[0]) / (2*h);
  return [curlX, curlY, curlZ];
}

// Rotational field: F(x,y,z) = [-y, x, 0]
const rotational = (p: Vector3): Vector3 => [-p[1], p[0], 0];
console.log(`Curl of [-y,x,0] at (0,0,0):`, curl(rotational, [0,0,0]));
// Expected: (0, 0, 2) — purely in z-direction
```

### Example 7: Line Integral Computation

```typescript
type ParametricCurve = (t: number) => Vector3;

function lineIntegral(
  F: (p: Vector3) => Vector3,
  curve: ParametricCurve,
  tStart: number,
  tEnd: number,
  steps: number = 1000
): number {
  const dt = (tEnd - tStart) / steps;
  let integral = 0;
  for (let i = 0; i < steps; i++) {
    const t = tStart + i * dt;
    const p = curve(t);
    // Numerical derivative of curve
    const pNext = curve(t + dt);
    const dr: Vector3 = [
      pNext[0] - p[0],
      pNext[1] - p[1],
      pNext[2] - p[2],
    ];
    const field = F(p);
    // Dot product F · dr
    integral += field[0] * dr[0] + field[1] * dr[1] + field[2] * dr[2];
  }
  return integral;
}

// F(x,y) = [y, x], curve: unit circle from t=0 to t=pi/2
const F1 = (p: Vector3): Vector3 => [p[1], p[0], 0];
const circle = (t: number): Vector3 => [Math.cos(t), Math.sin(t), 0];
const work = lineIntegral(F1, circle, 0, Math.PI / 2);
console.log(`Work along quarter-circle: ${work.toFixed(6)}`); // ≈ 0
```

### Example 8: Conservative Field Check and Potential

```typescript
function isConservative(
  F: (p: Vector3) => Vector3,
  p: Vector3,
  tolerance: number = 1e-7
): boolean {
  const c = curl(F, p);
  return Math.abs(c[0]) < tolerance
      && Math.abs(c[1]) < tolerance
      && Math.abs(c[2]) < tolerance;
}

// F = [2x, 2y, 2z] — gradient of phi = x^2 + y^2 + z^2
const gradientField = (p: Vector3): Vector3 => [2*p[0], 2*p[1], 2*p[2]];
console.log(`Is gradient field conservative? ${isConservative(gradientField, [1,1,1])}`);
// true

// Non-conservative: F = [-y, x, 0]
console.log(`Is rotational field conservative? ${isConservative(rotational, [1,1,1])}`);
// false
```

### Example 6: Conservation Laws and Divergence-Free Fields

Show that $\mathbf{F} = \langle y^2, x^2, 0 \rangle$ is not divergence-free.

**Solution:**
$\nabla \cdot \mathbf{F} = \frac{\partial(y^2)}{\partial x} + \frac{\partial(x^2)}{\partial y} + \frac{\partial(0)}{\partial z} = 0 + 0 + 0 = 0$

This field IS divergence-free! This means the net flux through any closed surface is zero, representing an incompressible flow in 2D.

**Physical interpretation:** A divergence-free vector field represents a source-free flow — whatever flows into a region must flow out. This is the mathematical basis of incompressible fluid dynamics and conservation of mass.

## Notation Reference

| Symbol | Meaning |
|--------|---------|
| $\nabla f$ | gradient |
| $\nabla \cdot \mathbf{F}$ | divergence |
| $\nabla \times \mathbf{F}$ | curl |
| $\nabla^2$ | Laplacian |
| $\Delta_M$ | Laplace-Beltrami operator |
| $dS$ | surface area element |
| $d\mathbf{S}$ | oriented surface element |
| $\oint_C$ | closed line integral |
| $\mathbf{n}$ | outward unit normal |
| $\phi$ | scalar potential |
| $g_{ij}$ | metric tensor |
| $C$ | curve |
| $S$ | surface |
| $E$ | volume region |
| $\epsilon_0$ | permittivity of free space |
| $\mu_0$ | permeability of free space |
