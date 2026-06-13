# Engineering Mathematics — GATE CS Refresher

**Goal:** Rapid revision of formulas + GATE-style solved problems. Assumes you have foundational knowledge from Discrete Math & ML courses.

**Covers:** Linear Algebra, Calculus, Probability & Statistics, Discrete Math Refresher, Numerical Methods.

---

## 1. Linear Algebra

Formula summary → solved GATE problems → quick practice.

### 1.1 Matrix Operations — Key Formulas

| Concept | Formula / Rule |
|---------|---------------|
| **Matrix Multiplication** | `(A B)[i][j] = sum_k A[i][k] * B[k][j]`; defined iff `cols(A) = rows(B)` |
| **Trace** | `tr(A) = sum_i A[i][i]` |
| **Transpose Properties** | `(A^T)^T = A`, `(AB)^T = B^T A^T`, `(A + B)^T = A^T + B^T` |
| **Symmetric** | `A^T = A`; Skew-symmetric: `A^T = -A` |
| **Orthogonal Matrix** | `A^T A = I`, so `A^{-1} = A^T` and `|det(A)| = 1` |

### 1.2 Determinant — Key Formulas

| Concept | Formula |
|---------|--------|
| **2x2** | `det([[a,b],[c,d]]) = ad - bc` |
| **3x3** | `det = a(ei - fh) - b(di - fg) + c(dh - eg)` |
| **Properties** | `det(AB) = det(A) det(B)`, `det(A^T) = det(A)`, `det(cA) = c^n det(A)` |
| **Singular matrix** | `det(A) = 0` |
| **Triangular matrix** | `det` = product of diagonal entries |

### 1.3 Inverse — Key Formulas

| Concept | Formula |
|---------|--------|
| **Inverse exists iff** | `det(A) != 0` (non-singular) |
| **2x2 Inverse** | `A^{-1} = 1/det(A) * [[d, -b], [-c, a]]` |
| **Property** | `(AB)^{-1} = B^{-1} A^{-1}`, `(A^{-1})^T = (A^T)^{-1}` |
| **Using adjoint** | `A^{-1} = adj(A) / det(A)` |

### 1.4 Rank of a Matrix

| Concept | Rule |
|---------|------|
| **Definition** | Maximum number of linearly independent rows/columns |
| **Rank-Nullity** | `rank(A) + nullity(A) = n` (for `m x n` matrix) |
| **Full rank** | `rank(A) = min(m, n)` |
| **Rank from Echelon** | Number of non-zero rows after Gaussian elimination |
| **rank(AB)** | `rank(AB) <= min(rank(A), rank(B))` |

### 1.5 Systems of Linear Equations

| System `Ax = b` | Condition | Solution |
|-----------------|-----------|----------|
| **Consistent** | `rank(A) = rank([A|b])` | Unique if `rank = n`, infinite if `rank < n` |
| **Inconsistent** | `rank(A) < rank([A|b])` | No solution |
| **Homogeneous** `Ax = 0` | Always consistent | Trivial `x = 0` if `rank = n`; non-trivial if `rank < n` |

### 1.6 Eigenvalues and Eigenvectors

| Concept | Formula |
|---------|--------|
| **Characteristic equation** | `det(A - lambda I) = 0` |
| **Eigenvector** | `(A - lambda I) v = 0` |
| **Trace relation** | `tr(A) = sum lambda_i` |
| **Determinant relation** | `det(A) = prod lambda_i` |
| **Symmetric matrix** | All eigenvalues are REAL; eigenvectors orthogonal |
| **Diagonalization** | `A = PDP^{-1}` where `D` = diag(eigenvalues), `P` = eigenvectors |
| **Cayley-Hamilton** | Every matrix satisfies its own characteristic equation |

### 1.7 LU Decomposition

- `A = LU`, where `L` = lower triangular, `U` = upper triangular
- Used to solve `Ax = b` in `O(n^2)` after `O(n^3)` factorization
- `det(A) = prod(U[i][i])` (product of pivots)

---

### Solved GATE Problems — Linear Algebra

---

**GATE 2020 (CS) — Q1:** For a `3x3` matrix `A`, if `det(A) = 4` and `det(adj(A)) = 16`, find `det(2A)`.

**Solution:**
- `det(adj(A)) = det(A)^{n-1} = 4^{2} = 16` ✓ (verifies consistency)
- `det(2A) = 2^n det(A) = 2^3 * 4 = 8 * 4 = 32`
- **Answer: 32**

---

**GATE 2019 (CS) — Q2:** Consider the system:
```
x + 2y + 3z = a
4x + 5y + 6z = b
7x + 8y + 9z = c
```
For what condition on `a, b, c` is the system consistent?

**Solution:**
- Coefficient matrix rows `R1, R2, R3`. Check: `R3 = 2R2 - R1`? `2*[4,5,6] - [1,2,3] = [7,8,9]` ✓
- So `rank(A) = 2 < 3`. For consistency: `c = 2b - a`
- **Answer: `c = 2b - a`**

---

**GATE 2021 (CS) — Q3:** Let `A` be a `3x3` matrix with eigenvalues `1, -1, 0`. Find `tr(A)` and `det(A)`.

**Solution:**
- `tr(A) = sum lambda_i = 1 + (-1) + 0 = 0`
- `det(A) = product lambda_i = 1 * (-1) * 0 = 0`
- **Answer: tr(A) = 0, det(A) = 0**

---

**GATE 2018 (CS) — Q4:** For matrix `A = [[2, -1, 0], [-1, 2, -1], [0, -1, 2]]`, find the eigenvalues.

**Solution:**
- Characteristic: `det(A - lambda I) = det[[2-lambda, -1, 0], [-1, 2-lambda, -1], [0, -1, 2-lambda]] = 0`
- Expand: `(2-lambda)[(2-lambda)^2 - 1] - (-1)[-1(2-lambda)] = 0`
- `(2-lambda)[(2-lambda)^2 - 2] = 0`
- `(2-lambda)[lambda^2 - 4lambda + 2] = 0`
- Roots: `lambda = 2, 2 +/- sqrt(2)`
- **Answer: `2, 2 + sqrt(2), 2 - sqrt(2)`**

---

**GATE 2022 (CS) — Q5:** If `A` is a `3x3` matrix such that `A^2 + A + I = 0`, find `A^{-1}` in terms of `A`.

**Solution:**
- `A^2 + A + I = 0`
- Multiply by `A^{-1}`: `A + I + A^{-1} = 0`
- So `A^{-1} = -(A + I)`
- **Answer: `A^{-1} = -(A + I)`**

---

### Quick Practice — Linear Algebra

| # | Problem | Answer |
|---|---------|--------|
| 1 | If `A` is orthogonal, find `det(A)` | `+/- 1` |
| 2 | For `A = [[1,2],[3,4]]`, find `rank(A)` | `2` |
| 3 | System: `x + y = 2`, `2x + 2y = 5` is ___? | Inconsistent |
| 4 | Eigenvalues of a nilpotent matrix (`A^k = 0`) are? | All zero |
| 5 | If `A` is `5x5` with `rank(A) = 3`, what is nullity? | `2` |

---

## 2. Calculus

Formula summary → solved GATE problems → quick practice.

### 2.1 Limits — Key Formulas

| Concept | Rule |
|---------|------|
| **Basic** | `lim_{x->a} f(x) = L` iff LHL = RHL = L |
| **L'Hopital** | If `0/0` or `inf/inf`: `lim f(x)/g(x) = lim f'(x)/g'(x)` |
| **Standard** | `lim_{x->0} sin x / x = 1`, `lim_{x->0} (e^x - 1)/x = 1` |
| **Standard** | `lim_{x->0} (1 + x)^{1/x} = e`, `lim_{x->inf} (1 + 1/x)^x = e` |
| **Squeeze theorem** | If `g(x) <= f(x) <= h(x)` and `lim g = lim h = L`, then `lim f = L` |

### 2.2 Continuity & Differentiability

| Concept | Condition |
|---------|-----------|
| **Continuous at `x = a`** | `lim_{x->a-} f(x) = lim_{x->a+} f(x) = f(a)` |
| **Differentiable at `x = a`** | `lim_{h->0} (f(a+h) - f(a))/h` exists (LHD = RHD) |
| **Differentiable => Continuous** | Converse is FALSE (e.g., `|x|` at `x=0`) |

### 2.3 Mean Value Theorems

| Theorem | Statement |
|---------|-----------|
| **Rolle's** | If `f(a) = f(b)` and `f` is cont on `[a,b]`, diff on `(a,b)`, then `exists c in (a,b): f'(c) = 0` |
| **Lagrange's MVT** | `exists c in (a,b): f'(c) = (f(b) - f(a))/(b - a)` |
| **Cauchy's MVT** | `exists c: (f(b)-f(a))/(g(b)-g(a)) = f'(c)/g'(c)` where `g'(x) != 0` |

### 2.4 Maxima and Minima

| Concept | Condition |
|---------|-----------|
| **Critical point** | `f'(x) = 0` or undefined |
| **Local max** | `f'(x) = 0` and `f''(x) < 0` |
| **Local min** | `f'(x) = 0` and `f''(x) > 0` |
| **Point of inflection** | `f''(x) = 0` and `f'''(x) != 0` |
| **Global extrema** | Check critical points + interval endpoints |

### 2.5 Integration — Key Formulas

| Formula | Result |
|---------|--------|
| `int x^n dx` | `x^{n+1}/(n+1) + C`, `n != -1` |
| `int 1/x dx` | `ln|x| + C` |
| `int e^{ax} dx` | `e^{ax}/a + C` |
| `int sin(ax) dx` | `-cos(ax)/a + C` |
| `int cos(ax) dx` | `sin(ax)/a + C` |
| **Integration by parts** | `int u dv = uv - int v du` |
| **Area under curve** | `int_a^b f(x) dx` |

---

### Solved GATE Problems — Calculus

---

**GATE 2020 (CS) — Q1:** Find `lim_{x->0} (sin x - x)/x^3`.

**Solution:**
- Form `0/0`, apply L'Hopital:
- `lim (cos x - 1)/(3x^2)` — still `0/0`
- L'Hopital again: `lim (-sin x)/(6x) = -1/6 * lim sin x/x = -1/6`
- **Answer: `-1/6`**

---

**GATE 2019 (CS) — Q2:** If `f(x) = x^3 - 6x^2 + 9x + 1`, find the local minimum value.

**Solution:**
- `f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)`
- Critical points: `x = 1, 3`
- `f''(x) = 6x - 12`
- At `x = 1`: `f''(1) = -6 < 0` → local max, `f(1) = 1 - 6 + 9 + 1 = 5`
- At `x = 3`: `f''(3) = 6 > 0` → local min, `f(3) = 27 - 54 + 27 + 1 = 1`
- **Answer: 1**

---

**GATE 2021 (CS) — Q3:** Evaluate `int_0^{pi/2} sin^2 x dx`.

**Solution:**
- Use identity: `sin^2 x = (1 - cos 2x)/2`
- `int_0^{pi/2} (1 - cos 2x)/2 dx = 1/2 [x - (sin 2x)/2]_0^{pi/2}`
- `= 1/2 [(pi/2 - 0) - (0 - 0)] = pi/4`
- **Answer: `pi/4`**

---

**GATE 2018 (CS) — Q4:** Check if Rolle's theorem applies for `f(x) = x(x-1)^2` on `[0,1]`.

**Solution:**
- `f(0) = 0`, `f(1) = 0`. `f` is polynomial → continuous and differentiable everywhere
- Rolle's theorem applies: `exists c in (0,1): f'(c) = 0`
- `f'(x) = (x-1)^2 + 2x(x-1) = (x-1)(x-1 + 2x) = (x-1)(3x-1)`
- `f'(c) = 0` at `c = 1` or `c = 1/3`
- Since `c = 1/3 in (0,1)`, Rolle's theorem is verified.
- **Answer: Yes, `c = 1/3`**

---

**GATE 2022 (CS) — Q5:** Find the area bounded by `y = x^2` and `y = x`.

**Solution:**
- Intersection: `x^2 = x` → `x(x-1) = 0` → `x = 0, 1`
- Area `= int_0^1 (x - x^2) dx = [x^2/2 - x^3/3]_0^1 = 1/2 - 1/3 = 1/6`
- **Answer: `1/6` square units**

---

### Quick Practice — Calculus

| # | Problem | Answer |
|---|---------|--------|
| 1 | `lim_{x->0} (e^x - 1 - x)/x^2` | `1/2` |
| 2 | `f(x) = |x - 1|` at `x = 1` is differentiable? | No |
| 3 | `int_0^1 x e^x dx` | `1` |
| 4 | Point of inflection for `f(x) = x^3 - 6x^2 + 12x - 8`? | `x = 2` |
| 5 | `lim_{x->inf} (1 + 2/x)^x` | `e^2` |

---

## 3. Probability & Statistics

Formula summary → solved GATE problems → quick practice.

### 3.1 Basic Probability

| Concept | Formula |
|---------|---------|
| **Probability** | `P(A) = n(A)/n(S)` (equally likely outcomes) |
| **Conditional** | `P(A|B) = P(A ∩ B)/P(B)` |
| **Bayes' theorem** | `P(A_i|B) = P(B|A_i)P(A_i) / sum_j P(B|A_j)P(A_j)` |
| **Total probability** | `P(B) = sum_i P(B|A_i)P(A_i)` |
| **Independent** | `P(A ∩ B) = P(A)P(B)` |
| **Mutually exclusive** | `P(A ∩ B) = 0`, `P(A ∪ B) = P(A) + P(B)` |
| **Inclusion-Exclusion** | `P(A ∪ B) = P(A) + P(B) - P(A ∩ B)` |

### 3.2 Random Variables

| Concept | Formula |
|---------|---------|
| **PMF (discrete)** | `p(x) = P(X = x)` |
| **PDF (continuous)** | `f(x) >= 0`, `int_{-inf}^{inf} f(x) dx = 1` |
| **CDF** | `F(x) = P(X <= x)` |
| **Expectation** | `E[X] = sum x * p(x)` (discrete) or `int x f(x) dx` (continuous) |
| **Variance** | `Var(X) = E[X^2] - (E[X])^2` |
| **Moments** | `r-th moment = E[X^r]` |

### 3.3 Standard Distributions

| Distribution | PMF/PDF | Mean | Variance |
|-------------|---------|------|----------|
| **Binomial** `B(n, p)` | `C(n,k) p^k (1-p)^{n-k}` | `np` | `np(1-p)` |
| **Poisson** `Poisson(lambda)` | `e^{-lambda} lambda^k / k!` | `lambda` | `lambda` |
| **Normal** `N(mu, sigma^2)` | `1/(sigma sqrt(2pi)) e^{-(x-mu)^2/(2sigma^2)}` | `mu` | `sigma^2` |
| **Uniform** `U(a,b)` | `1/(b-a)` for `a <= x <= b` | `(a+b)/2` | `(b-a)^2/12` |
| **Exponential** `Exp(lambda)` | `lambda e^{-lambda x}`, `x >= 0` | `1/lambda` | `1/lambda^2` |

### 3.4 Correlation and Regression

| Concept | Formula |
|---------|---------|
| **Covariance** | `Cov(X, Y) = E[(X - mu_X)(Y - mu_Y)]` |
| **Correlation coefficient** | `rho_{XY} = Cov(X,Y) / (sigma_X sigma_Y)`, `-1 <= rho <= 1` |
| **Regression line** | `Y = a + bX`, where `b = Cov(X,Y)/Var(X)` |
| **Properties** | `rho = +1` → perfect positive, `-1` → perfect negative, `0` → no linear |

### 3.5 Key Inequalities

| Inequality | Statement |
|------------|-----------|
| **Markov** | `P(X >= a) <= E[X]/a` for `a > 0` |
| **Chebyshev** | `P(|X - mu| >= k sigma) <= 1/k^2` |
| **Chernoff bound** | `P(X >= (1+delta)mu) <= (e^{delta}/(1+delta)^{1+delta})^{mu}` |

---

### Solved GATE Problems — Probability & Statistics

---

**GATE 2021 (CS) — Q1:** A bag has 4 red, 3 blue, 5 green balls. Two balls drawn without replacement. Probability both are red?

**Solution:**
- `P(first red) = 4/12 = 1/3`
- `P(second red | first red) = 3/11`
- `P(both red) = (4/12) * (3/11) = 12/132 = 1/11`
- **Answer: `1/11`**

---

**GATE 2020 (CS) — Q2:** Let `X ~ Binomial(n=5, p=0.4)`. Find `P(X >= 1)`.

**Solution:**
- `P(X >= 1) = 1 - P(X = 0)`
- `P(X = 0) = C(5,0) * (0.4)^0 * (0.6)^5 = 1 * 1 * 0.6^5`
- `0.6^5 = 0.07776`
- `P(X >= 1) = 1 - 0.07776 = 0.92224`
- **Answer: `0.92224`**

---

**GATE 2019 (CS) — Q3:** For `X ~ Poisson(4)`, find `P(X = 2)`.

**Solution:**
- PMF: `P(X = k) = e^{-lambda} lambda^k / k!`
- `P(X = 2) = e^{-4} * 4^2 / 2! = e^{-4} * 16 / 2 = 8e^{-4}`
- **Answer: `8e^{-4}`**

---

**GATE 2022 (CS) — Q4:** Random variable `X` has PDF `f(x) = 3x^2` for `0 <= x <= 1`. Find `E[X]`.

**Solution:**
- `E[X] = int_0^1 x * 3x^2 dx = 3 int_0^1 x^3 dx = 3 * [x^4/4]_0^1 = 3/4`
- **Answer: `0.75`**

---

**GATE 2021 (CS) — Q5:** Probability that a student passes is `0.7`. Find probability that in a class of 6 students, exactly 4 pass.

**Solution:**
- `X ~ Binomial(n=6, p=0.7)`
- `P(X = 4) = C(6,4) * (0.7)^4 * (0.3)^2`
- `C(6,4) = 15`
- `(0.7)^4 = 0.2401`, `(0.3)^2 = 0.09`
- `P = 15 * 0.2401 * 0.09 = 0.324135`
- **Answer: `0.3241`**

---

### Quick Practice — Probability & Statistics

| # | Problem | Answer |
|---|---------|--------|
| 1 | Two dice rolled. Sum = 7 probability? | `1/6` |
| 2 | Var(X) = 4. Var(2X + 3) = ? | `16` |
| 3 | Test: false positive 5%, disease prevalence 2%, test positive → disease probability? (use Bayes) | `~0.288` |
| 4 | `X ~ N(0,1)`. `P(X > 1.96)` approx? | `0.025` |
| 5 | Cov(X,Y) = 0 implies? | Uncorrelated (not necessarily independent) |

---

## 4. Discrete Mathematics Refresher

Formula summary → solved GATE problems → quick practice.

### 4.1 Set Theory

| Concept | Formula |
|---------|---------|
| **Union** | `|A ∪ B| = |A| + |B| - |A ∩ B|` |
| **Principle of IE (3 sets)** | `|A ∪ B ∪ C| = sum|A_i| - sum|A_i ∩ A_j| + |A ∩ B ∩ C|` |
| **De Morgan's** | `(A ∪ B)' = A' ∩ B'`, `(A ∩ B)' = A' ∪ B'` |
| **Power set** | `|P(A)| = 2^{|A|}` |
| **Cartesian product** | `|A x B| = |A| * |B|` |

### 4.2 Relations

| Concept | Definition |
|---------|-----------|
| **Reflexive** | `a R a` for all `a` |
| **Symmetric** | `a R b => b R a` |
| **Transitive** | `a R b` and `b R c => a R c` |
| **Equivalence relation** | Reflexive + Symmetric + Transitive |
| **Partial order** | Reflexive + Antisymmetric + Transitive |
| **Number of relations** | On `n` element set: `2^{n^2}` total |
| **Equivalence relations** | Bell numbers `B_n`: `B_0=1, B_1=1, B_2=2, B_3=5, B_4=15` |

### 4.3 Functions

| Concept | Condition |
|---------|-----------|
| **Injective (one-one)** | `f(a) = f(b) => a = b` |
| **Surjective (onto)** | For every `y in codomain`, exists `x: f(x) = y` |
| **Bijective** | Injective + Surjective |
| **Inverse exists iff** | Function is bijective |
| **Pigeonhole principle** | If `n` items in `m` boxes, `n > m`, at least one box has `>= ceil(n/m)` |

### 4.4 Graph Theory

| Concept | Formula |
|---------|---------|
| **Handshaking lemma** | `sum deg(v) = 2|E|` |
| **Complete graph** `K_n` | `|E| = n(n-1)/2` |
| **Bipartite** | No odd cycles |
| **Complete bipartite** `K_{m,n}` | `|E| = mn` |
| **Eulerian circuit** | All vertices even degree (connected graph) |
| **Hamiltonian cycle** | Dirac: `deg(v) >= n/2` for all `v` |
| **Planar graph** | No `K_5` or `K_{3,3}` minor |
| **Euler's formula** | `V - E + F = 2` (connected planar) |
| **Chromatic number** | Minimum colors for proper vertex coloring |
| **Chromatic polynomial** | `P(G, k)` = number of proper colorings with `k` colors |
| **Matching** | Set of edges with no shared vertices |
| **Hall's marriage theorem** | Bipartite `G=(X,Y,E)` has matching covering `X` iff for every `S ⊆ X`: `|N(S)| >= |S|` |

### 4.5 Counting Principles

| Concept | Formula |
|---------|---------|
| **Permutations** | `P(n,r) = n!/(n-r)!` |
| **Combinations** | `C(n,r) = n!/(r!(n-r)!)` |
| **Permutations with repetition** | `n^r` |
| **Combinations with repetition** | `C(n+r-1, r)` |
| **Circular permutations** | `(n-1)!` |
| **Stars and bars** | Number of non-negative solutions to `x_1 + ... + x_n = r` = `C(n+r-1, r)` |

### 4.6 Generating Functions

| Concept | Formula |
|---------|---------|
| **Definition** | `G(x) = sum_{n >= 0} a_n x^n` |
| **Binomial** | `(1 + x)^n = sum_{k=0}^n C(n,k) x^k` |
| **Geometric** | `1/(1 - x) = sum_{n >= 0} x^n`, `|x| < 1` |
| **Exponential** | `e^x = sum_{n >= 0} x^n/n!` |

### 4.7 Recurrence Relations

| Type | Form | Solution Approach |
|------|------|-----------------|
| **Linear homogeneous** | `a_n = c_1 a_{n-1} + c_2 a_{n-2}` | Characteristic equation `r^2 - c_1 r - c_2 = 0` |
| **Distinct roots** | `r_1 != r_2` | `a_n = A r_1^n + B r_2^n` |
| **Repeated roots** | `r_1 = r_2 = r` | `a_n = (A + Bn) r^n` |
| **Non-homogeneous** | `a_n = c a_{n-1} + f(n)` | Particular solution based on `f(n)` form |

---

### Solved GATE Problems — Discrete Math

---

**GATE 2020 (CS) — Q1:** How many equivalence relations on a set with 4 elements?

**Solution:**
- Number of equivalence relations = Bell number `B_4`
- `B_0 = 1`, `B_1 = 1`, `B_2 = 2`, `B_3 = 5`, `B_4 = 15`
- Partitions of 4-element set: `1+1+1+1: 1`, `2+1+1: C(4,2) = 6`, `3+1: C(4,3) = 4`, `2+2: C(4,2)/2 = 3`, `4: 1`
- Total: `1 + 6 + 4 + 3 + 1 = 15`
- **Answer: 15**

---

**GATE 2019 (CS) — Q2:** For a planar graph with 6 vertices and 12 edges, find the number of faces.

**Solution:**
- Euler's formula: `V - E + F = 2`
- `6 - 12 + F = 2` → `F = 8`
- **Answer: 8**

---

**GATE 2021 (CS) — Q3:** Solve recurrence: `T(n) = 2T(n-1) + 1`, `T(0) = 0`.

**Solution:**
- Homogeneous: `T_h(n) = A * 2^n`
- Particular: try constant `c`: `c = 2c + 1` → `c = -1`
- `T(n) = A * 2^n - 1`
- `T(0) = A - 1 = 0` → `A = 1`
- `T(n) = 2^n - 1`
- **Answer: `T(n) = 2^n - 1`**

---

**GATE 2018 (CS) — Q4:** How many ways to distribute 10 identical balls into 4 distinct boxes?

**Solution:**
- Stars and bars: `C(n+r-1, r) = C(4+10-1, 10) = C(13, 10) = C(13, 3)`
- `C(13, 3) = (13 * 12 * 11)/(3 * 2 * 1) = 1716/6 = 286`
- **Answer: 286**

---

**GATE 2022 (CS) — Q5:** What is the chromatic number of `K_{3,3}`?

**Solution:**
- `K_{3,3}` is bipartite
- Bipartite graphs are 2-colorable (color all vertices on left with color 1, right with color 2)
- `K_{3,3}` has no odd cycles
- Chromatic number = 2
- **Answer: 2**

---

### Quick Practice — Discrete Math

| # | Problem | Answer |
|---|---------|--------|
| 1 | Number of reflexive relations on 3-element set? | `2^{6} = 64` |
| 2 | `K_5` is planar? | No (has `K_5` minor) |
| 3 | Solve `a_n = 3a_{n-1} - 2a_{n-2}`, `a_0=1, a_1=2` | `a_n = 2^n` |
| 4 | Number of bijections from `A -> A`, `|A| = 5`? | `5! = 120` |
| 5 | Max matching size in `K_{3,4}`? | `3` |

---

## 5. Numerical Methods

Formula summary → solved GATE problems → quick practice.

### 5.1 Root Finding Methods

| Method | Formula | Notes |
|--------|---------|-------|
| **Bisection** | `c = (a+b)/2`; repeat on `[a,c]` or `[c,b]` | Linear convergence, guaranteed |
| **Newton-Raphson** | `x_{n+1} = x_n - f(x_n)/f'(x_n)` | Quadratic convergence, may diverge |
| **Secant method** | `x_{n+1} = x_n - f(x_n)(x_n - x_{n-1})/(f(x_n) - f(x_{n-1}))` | Order `phi ~ 1.618` |

**Convergence order:**
- Bisection: order 1 (linear)
- Newton-Raphson: order 2 (quadratic)
- Secant: order ~1.618

### 5.2 Interpolation

| Method | Formula |
|--------|---------|
| **Lagrange** | `P(x) = sum_{i=0}^n y_i * L_i(x)`, where `L_i(x) = prod_{j!=i} (x - x_j)/(x_i - x_j)` |
| **Newton forward** | `P(x) = y_0 + u*Δy_0 + u(u-1)/2! * Δ^2y_0 + ...` where `u = (x - x_0)/h` |
| **Newton backward** | `P(x) = y_n + u*∇y_n + u(u+1)/2! * ∇^2y_n + ...` where `u = (x - x_n)/h` |

### 5.3 Numerical Integration

| Method | Formula | Error |
|--------|---------|-------|
| **Trapezoidal** | `int_a^b f(x)dx ≈ h/2 * [f(x_0) + 2*sum_{i=1}^{n-1} f(x_i) + f(x_n)]` | `O(h^2)` |
| **Simpson's 1/3** | `int_a^b f(x)dx ≈ h/3 * [f(x_0) + 4*sum_odd + 2*sum_even + f(x_n)]` | `O(h^4)` (requires even intervals) |
| **Simpson's 3/8** | `int_a^b f(x)dx ≈ 3h/8 * [f(x_0) + 3*sum_{non-multiples} + 2*sum_{multiples of 3} + f(x_n)]` | `O(h^4)` |

### 5.4 Error Analysis

| Term | Definition |
|------|-----------|
| **Absolute error** | `|true - approx|` |
| **Relative error** | `|true - approx| / |true|` |
| **Truncation error** | Error from approximating infinite process (e.g., Taylor series truncation) |
| **Round-off error** | Error from finite precision arithmetic |

---

### Solved GATE Problems — Numerical Methods

---

**GATE 2020 (CS) — Q1:** One iteration of Newton-Raphson to find root of `f(x) = x^3 - 2x - 5` starting at `x_0 = 2`.

**Solution:**
- `f'(x) = 3x^2 - 2`
- `x_1 = x_0 - f(x_0)/f'(x_0) = 2 - (8 - 4 - 5)/(12 - 2) = 2 - (-1/10) = 2.1`
- **Answer: `x_1 = 2.1`**

---

**GATE 2019 (CS) — Q2:** Using trapezoidal rule with `h = 0.5`, approximate `int_0^1 (1 + x^2) dx`.

**Solution:**
- Points: `x_0 = 0, x_1 = 0.5, x_2 = 1.0`
- `f(0) = 1`, `f(0.5) = 1.25`, `f(1) = 2`
- `h/2 * [f(0) + 2f(0.5) + f(1)] = 0.5/2 * [1 + 2(1.25) + 2]`
- `= 0.25 * [1 + 2.5 + 2] = 0.25 * 5.5 = 1.375`
- True value: `[x + x^3/3]_0^1 = 1 + 1/3 = 4/3 ≈ 1.3333`
- **Answer: `1.375`**

---

**GATE 2021 (CS) — Q3:** Function `f(x)` passes through `(0,1), (1,2), (2,9)`. Find `f(1.5)` using Lagrange interpolation.

**Solution:**
- `L_0(x) = (x-1)(x-2)/((0-1)(0-2)) = (x-1)(x-2)/2`
- `L_1(x) = (x-0)(x-2)/((1-0)(1-2)) = x(x-2)/(-1) = -x(x-2)`
- `L_2(x) = (x-0)(x-1)/((2-0)(2-1)) = x(x-1)/2`
- `P(1.5) = 1 * L_0(1.5) + 2 * L_1(1.5) + 9 * L_2(1.5)`
- `L_0(1.5) = (0.5)(-0.5)/2 = -0.125`
- `L_1(1.5) = -1.5(-0.5) = 0.75`
- `L_2(1.5) = (1.5)(0.5)/2 = 0.375`
- `P(1.5) = -0.125 + 2(0.75) + 9(0.375) = -0.125 + 1.5 + 3.375 = 4.75`
- **Answer: `4.75`**

---

**GATE 2022 (CS) — Q4:** How many iterations of bisection method to guarantee error `< 10^{-4}` on interval `[1,2]`?

**Solution:**
- Error bound after `n` iterations: `(b-a)/2^{n+1}`
- Need: `(2-1)/2^{n+1} < 10^{-4}`
- `1/2^{n+1} < 10^{-4}` → `2^{n+1} > 10^4`
- `2^{14} = 16384 > 10000`, `2^{13} = 8192 < 10000`
- So `n + 1 >= 14` → `n >= 13`
- **Answer: 13 iterations**

---

**GATE 2020 (CS) — Q5:** Evaluate `int_1^2 1/x dx` using Simpson's 1/3 rule with `h = 0.5`.

**Solution:**
- Points: `x_0 = 1.0, x_1 = 1.5, x_2 = 2.0`
- `f(1.0) = 1`, `f(1.5) = 2/3 ≈ 0.6667`, `f(2.0) = 0.5`
- Simpson: `h/3 * [f(x_0) + 4f(x_1) + f(x_2)]`
- `= 0.5/3 * [1 + 4(0.6667) + 0.5] = 0.5/3 * [1 + 2.6667 + 0.5]`
- `= 0.5/3 * 4.1667 = 0.69445`
- True value `ln(2) ≈ 0.69314`. Error `≈ 0.0013`
- **Answer: `0.69445`**

---

### Quick Practice — Numerical Methods

| # | Problem | Answer |
|---|---------|--------|
| 1 | Newton-Raphson to find `sqrt(5)` starting at `x_0 = 2`. One iteration? | `x_1 = 2.25` |
| 2 | Trapezoidal rule with `n = 4` for `int_0^2 x^2 dx` ≈ ? | `2.75` |
| 3 | Bisection on `[0,1]`, `f(x) = x^3 - 0.5`. First approximation? | `c = 0.5` |
| 4 | Order of convergence of secant method? | `~1.618` |
| 5 | Simpson's 1/3 rule requires `n` to be? | Even number of intervals |

---

## Answer Key — Quick Practice

### Linear Algebra
1. `+/- 1`
2. `2`
3. Inconsistent
4. All zero
5. `2`

### Calculus
1. `1/2`
2. No
3. `1`
4. `x = 2`
5. `e^2`

### Probability & Statistics
1. `1/6`
2. `16`
3. `~0.288`
4. `0.025`
5. Uncorrelated (not necessarily independent)

### Discrete Math
1. `64`
2. No
3. `a_n = 2^n`
4. `120`
5. `3`

### Numerical Methods
1. `2.25`
2. `2.75`
3. `0.5`
4. `~1.618`
5. Even

---

## Quick Reference — Must-Know GATE Formulas (One-Liner)

| Topic | Formula |
|-------|---------|
| **Rank-Nullity** | `rank(A) + nullity(A) = n` |
| **Cayley-Hamilton** | Every square matrix satisfies its char equation |
| **L'Hopital** | `lim f/g = lim f'/g'` for `0/0` or `inf/inf` |
| **Bayes** | `P(A|B) = P(B|A)P(A)/P(B)` |
| **Handshaking** | `sum deg(v) = 2|E|` |
| **Euler planar** | `V - E + F = 2` |
| **Newton-Raphson** | `x_{n+1} = x_n - f(x_n)/f'(x_n)` |
| **Simpson 1/3** | `h/3` weighted sum, even intervals |
| **Stars and bars** | `C(n+r-1, r)` |
| **Normal 68-95-99.7** | 1, 2, 3 std devs from mean |

---

*"Engineering Mathematics is not about memorization — it's about pattern recognition. Every GATE problem tests a formula + a twist. Master the formulas, recognize the pattern, and the twist becomes trivial."*
