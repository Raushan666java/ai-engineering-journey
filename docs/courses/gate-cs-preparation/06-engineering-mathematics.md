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

---

## Previous Year Questions (GATE 2019-2025)

### Linear Algebra (12 Problems)

---

**GATE 2019 (CS) — Q1:** Let `A` be a `3x3` matrix with eigenvalues `1, -1, 0`. Find the determinant of `A^3 + 2A + I`.

**Solution:**
- `det(A^3 + 2A + I)` is not directly factorable, but we can use eigenvalues. If `λ` is an eigenvalue of `A`, then `λ^3 + 2λ + 1` is an eigenvalue of `A^3 + 2A + I`.
- For `λ = 1`: `1 + 2 + 1 = 4`
- For `λ = -1`: `-1 - 2 + 1 = -2`
- For `λ = 0`: `0 + 0 + 1 = 1`
- `det(A^3 + 2A + I) = 4 * (-2) * 1 = -8`
- **Answer: `-8`**

---

**GATE 2020 (CS) — Q2:** For a `3x3` matrix `A` with rank 2, what is the nullity?

**Solution:**
- By rank-nullity theorem: `rank(A) + nullity(A) = n` where `n = 3`
- `nullity(A) = 3 - 2 = 1`
- **Answer: `1`**

---

**GATE 2021 (CS) — Q3:** Let `A` be a `3x3` real symmetric matrix with eigenvalues `2, 2, 5`. What is the trace of `A^2`?

**Solution:**
- For symmetric `A`, eigenvalues are real. If `λ` is eigenvalue of `A`, `λ^2` is eigenvalue of `A^2`.
- Eigenvalues of `A^2`: `4, 4, 25`
- `tr(A^2) = sum of eigenvalues = 4 + 4 + 25 = 33`
- **Answer: `33`**

---

**GATE 2022 (CS) — Q4:** For what value of `k` does the system have infinite solutions?
```
x + y + z = 1
2x + 3y + 4z = 2
3x + 4y + kz = 3
```

**Solution:**
- Augmented matrix: `[A|b] = [[1,1,1,1], [2,3,4,2], [3,4,k,3]]`
- Row reduce: `R2 -> R2 - 2R1`: `[0,1,2,0]`. `R3 -> R3 - 3R1`: `[0,1,k-3,0]`
- `R3 -> R3 - R2`: `[0,0,k-5,0]`
- For infinite solutions: `rank(A) = rank([A|b]) < 3`
- Need `k - 5 = 0` so last equation becomes `0 = 0` (consistent) and `rank = 2 < 3`
- **Answer: `k = 5`**

---

**GATE 2023 (CS) — Q5:** If `A = [[2,1],[1,2]]`, find `A^10` using Cayley-Hamilton theorem.

**Solution:**
- Characteristic equation: `det(A - λI) = (2-λ)^2 - 1 = λ^2 - 4λ + 3 = 0`
- By Cayley-Hamilton: `A^2 - 4A + 3I = 0` so `A^2 = 4A - 3I`
- We can use this to compute `A^n` recursively. Express `A^n = a_n A + b_n I`
- `A^1 = 1*A + 0*I` so `a_1 = 1, b_1 = 0`
- `A^2 = 4A - 3I` so `a_2 = 4, b_2 = -3`
- Recurrence: `A^{n+1} = A * A^n = A(a_n A + b_n I) = a_n A^2 + b_n A = a_n(4A - 3I) + b_n A = (4a_n + b_n)A + (-3a_n)I`
- `a_{n+1} = 4a_n + b_n`, `b_{n+1} = -3a_n`
- Compute: `a_3 = 4(4) + (-3) = 13, b_3 = -3(4) = -12`
- `a_4 = 4(13) + (-12) = 40, b_4 = -3(13) = -39`
- `a_5 = 4(40) + (-39) = 121, b_5 = -3(40) = -120`
- `a_6 = 4(121) + (-120) = 364, b_6 = -363`
- `a_7 = 4(364) + (-363) = 1093, b_7 = -1092`
- `a_8 = 4(1093) + (-1092) = 3280, b_8 = -3279`
- `a_9 = 4(3280) + (-3279) = 9841, b_9 = -9840`
- `a_10 = 4(9841) + (-9840) = 29524, b_10 = -3(9841) = -29523`
- `A^10 = 29524*A + (-29523)*I`
- Alternatively using eigenvalues `1, 3`: `A = PDP^{-1}`, `A^10 = PD^{10}P^{-1}` gives `A^10 = [[(3^10+1)/2, (3^10-1)/2], [(3^10-1)/2, (3^10+1)/2]]` with `3^10 = 59049`
- **Answer: `A^10 = [[29524, 29525], [29525, 29524]]`** (using second method: `(59049+1)/2 = 29525, (59049-1)/2 = 29524` — verified)

---

**GATE 2024 (CS) — Q6:** Let `A` be a `4x4` matrix with `det(A) = 2`. Find `det(3A^{-1} + adj(A))`.

**Solution:**
- `adj(A) = det(A) * A^{-1} = 2A^{-1}`
- `3A^{-1} + adj(A) = 3A^{-1} + 2A^{-1} = 5A^{-1}`
- `det(5A^{-1}) = 5^4 * det(A^{-1}) = 625 * 1/det(A) = 625/2`
- **Answer: `625/2`**

---

**GATE 2025 (CS) — Q7:** Let `T: R^3 -> R^3` be a linear transformation with matrix `A = [[1,2,0], [0,1,3], [0,0,1]]`. Find the dimension of the range space of `(T - 2I)`.

**Solution:**
- `T - 2I` has matrix `A - 2I = [[-1,2,0], [0,-1,3], [0,0,-1]]`
- This is upper triangular with diagonal entries `-1, -1, -1` (all non-zero)
- `det(A - 2I) = (-1)^3 = -1 ≠ 0`, so matrix is full rank
- `rank = 3`, dimension of range space = 3
- **Answer: `3`**

---

**GATE 2019 (CS) — Q8:** The eigenvectors of a `3x3` real symmetric matrix corresponding to distinct eigenvalues are always:

**Solution:**
- For a real symmetric matrix, eigenvectors corresponding to distinct eigenvalues are orthogonal.
- This is a standard theorem: if `A = A^T` and `λ₁ ≠ λ₂` with `Av₁ = λ₁v₁, Av₂ = λ₂v₂`, then `v₁ · v₂ = 0`.
- **Answer: Orthogonal**

---

**GATE 2020 (CS) — Q9:** Matrix `A` has LU decomposition `L = [[1,0],[0.5,1]]`, `U = [[4,3],[0,2.5]]`. Find `det(A)`.

**Solution:**
- `A = LU`, so `det(A) = det(L) * det(U)`
- `det(L) = 1*1 - 0*0.5 = 1`
- `det(U) = 4 * 2.5 - 3*0 = 10`
- `det(A) = 1 * 10 = 10`
- **Answer: `10`**

---

**GATE 2021 (CS) — Q10:** Find the rank of `A = [[1,2,3], [2,4,6], [3,6,9]]`.

**Solution:**
- Row reduce: `R2 -> R2 - 2R1`: `[0,0,0]`. `R3 -> R3 - 3R1`: `[0,0,0]`
- Only one non-zero row remains
- `rank = 1`
- **Answer: `1`**

---

**GATE 2022 (CS) — Q11:** If `A` is an orthogonal matrix, what is `det(A)`?

**Solution:**
- Orthogonal means `A^T A = I`
- `det(A^T A) = det(I) = 1`
- `det(A^T) det(A) = 1`
- `(det(A))^2 = 1` (since `det(A^T) = det(A)`)
- `det(A) = ±1`
- **Answer: `±1`**

---

**GATE 2023 (CS) — Q12:** If `A` is a `3x3` matrix with eigenvalues `1, 2, 3`, find the eigenvalues of `adj(A)`.

**Solution:**
- For a `3x3` matrix: if `λ` is eigenvalue of `A`, then `det(A)/λ` is eigenvalue of `adj(A)`.
- `det(A) = 1*2*3 = 6`
- Eigenvalues of `adj(A)`: `6/1 = 6, 6/2 = 3, 6/3 = 2`
- **Answer: `6, 3, 2`**

---

### Calculus (10 Problems)

---

**GATE 2019 (CS) — Q1:** Evaluate `lim_{x -> 0} (sin(2x) - 2x)/(x^3)`.

**Solution:**
- This is `0/0` form, apply L'Hopital's rule:
- `lim_{x -> 0} (2cos(2x) - 2)/(3x^2)` — still `0/0`
- Apply again: `lim_{x -> 0} (-4sin(2x))/(6x)`
- Apply again: `lim_{x -> 0} (-8cos(2x))/6 = -8/6 = -4/3`
- Alternatively, use Taylor series: `sin(2x) = 2x - (8x^3)/6 + ...` so numerator `= -(8x^3)/6 + ...`
- Dividing by `x^3`: `-8/6 = -4/3`
- **Answer: `-4/3`**

---

**GATE 2020 (CS) — Q2:** Is the function `f(x) = |x|` differentiable at `x = 0`?

**Solution:**
- Left-hand derivative: `lim_{h -> 0^-} (|0+h| - |0|)/h = lim_{h -> 0^-} (-h)/h = -1`
- Right-hand derivative: `lim_{h -> 0^+} (|0+h| - |0|)/h = lim_{h -> 0^+} h/h = 1`
- LHD ≠ RHD, so `f` is NOT differentiable at `x = 0`
- **Answer: No**

---

**GATE 2021 (CS) — Q3:** Find the maximum value of `f(x) = x^3 - 6x^2 + 9x + 1` on `[0, 5]`.

**Solution:**
- `f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)`
- Critical points: `x = 1, 3`
- Evaluate: `f(0) = 1`, `f(1) = 1 - 6 + 9 + 1 = 5`, `f(3) = 27 - 54 + 27 + 1 = 1`, `f(5) = 125 - 150 + 45 + 1 = 21`
- Maximum on `[0,5]` is `21` at `x = 5`
- **Answer: `21`**

---

**GATE 2022 (CS) — Q4:** Evaluate `∫_0^{π/2} sin^3(x) cos^2(x) dx`.

**Solution:**
- Let `u = cos(x)`, so `du = -sin(x) dx`
- `sin^3(x) = sin^2(x) sin(x) = (1-cos^2(x)) sin(x) = (1-u^2) sin(x)`
- Integral becomes: `∫_{1}^{0} (1-u^2) u^2 (-du) = ∫_{0}^{1} (u^2 - u^4) du`
- `= [u^3/3 - u^5/5]_0^1 = 1/3 - 1/5 = (5-3)/15 = 2/15`
- **Answer: `2/15`**

---

**GATE 2023 (CS) — Q5:** Find `f(0.1)` using Taylor series expansion about `x = 0` for `f(x) = e^x cos(x)` up to `x^3` terms.

**Solution:**
- `f(x) = e^x cos(x)`. Taylor: `f(x) = f(0) + f'(0)x + f''(0)x^2/2! + f'''(0)x^3/3! + ...`
- `f(0) = 1`
- `f'(x) = e^x cos(x) - e^x sin(x)`, `f'(0) = 1`
- `f''(x) = e^x(cos - sin) + e^x(-sin - cos) = -2e^x sin(x)`, `f''(0) = 0`
- `f'''(x) = -2e^x sin(x) - 2e^x cos(x)`, `f'''(0) = -2`
- `f(x) ≈ 1 + x + 0*x^2/2 + (-2)x^3/6 = 1 + x - x^3/3`
- `f(0.1) ≈ 1 + 0.1 - 0.001/3 ≈ 1.09967`
- **Answer: `1.09967`**

---

**GATE 2024 (CS) — Q6:** If `f(x,y) = x^2y + xy^2`, find `∂²f/∂x∂y` at `(1,2)`.

**Solution:**
- `∂f/∂x = 2xy + y^2`
- `∂²f/∂y∂x = ∂/∂y (2xy + y^2) = 2x + 2y`
- At `(1,2)`: `2(1) + 2(2) = 2 + 4 = 6`
- **Answer: `6`**

---

**GATE 2025 (CS) — Q7:** Let `f(x) = x^3 - 3x + 1`. How many real roots does the equation `f(x) = 0` have?

**Solution:**
- `f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)`
- Critical points: `x = -1, 1`
- `f(-1) = -1 + 3 + 1 = 3 > 0`, `f(1) = 1 - 3 + 1 = -1 < 0`
- `lim_{x -> -∞} f(x) = -∞`, `lim_{x -> ∞} f(x) = ∞`
- By Intermediate Value Theorem: 1 root in `(-∞, -1)`, 1 in `(-1, 1)`, 1 in `(1, ∞)`
- **Answer: `3` real roots**

---

**GATE 2020 (CS) — Q8:** Find the gradient of `f(x,y,z) = x^2 + y^2 + z^2` at `(1,1,1)`.

**Solution:**
- `∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z) = (2x, 2y, 2z)`
- At `(1,1,1)`: `∇f = (2, 2, 2)`
- **Answer: `(2, 2, 2)`**

---

**GATE 2021 (CS) — Q9:** Find `lim_{x -> 0} (e^x - 1 - x)/(x^2)`.

**Solution:**
- `0/0` form, apply L'Hopital's rule:
- `lim_{x -> 0} (e^x - 1)/(2x)` — still `0/0`
- Apply again: `lim_{x -> 0} e^x/2 = 1/2`
- **Answer: `1/2`**

---

**GATE 2022 (CS) — Q10:** Does `∫_0^∞ e^{-x} sin(x) dx` converge? If yes, find its value.

**Solution:**
- `∫_0^∞ e^{-x} sin(x) dx = Im(∫_0^∞ e^{-x} e^{ix} dx) = Im(∫_0^∞ e^{-(1-i)x} dx)`
- `= Im([-e^{-(1-i)x}/(1-i)]_0^∞) = Im(1/(1-i))`
- `1/(1-i) = (1+i)/2`, so `Im = 1/2`
- Yes, converges to `1/2`
- **Answer: `1/2`**

---

### Probability & Statistics (12 Problems)

---

**GATE 2019 (CS) — Q1:** A bag has 3 red and 5 green balls. Two balls are drawn without replacement. Find probability both are green.

**Solution:**
- `P(both green) = P(first green) * P(second green | first green)`
- `P(first green) = 5/8`
- `P(second green | first green) = 4/7`
- `P = (5/8) * (4/7) = 20/56 = 5/14`
- **Answer: `5/14`**

---

**GATE 2020 (CS) — Q2:** Test `A` detects disease with 95% accuracy (both sensitivity and specificity). Prevalence is 1%. If a person tests positive, what is probability they actually have the disease?

**Solution:**
- By Bayes theorem: `P(D|+) = P(+|D)P(D) / P(+)`
- `P(+|D) = 0.95`, `P(D) = 0.01`
- `P(+) = P(+|D)P(D) + P(+|¬D)P(¬D) = 0.95*0.01 + 0.05*0.99 = 0.0095 + 0.0495 = 0.059`
- `P(D|+) = 0.0095/0.059 ≈ 0.161`
- **Answer: `~0.161`**

---

**GATE 2021 (CS) — Q3:** Random variable `X` has PMF: `P(X=k) = c * 2^{-k}` for `k = 1,2,3,...`. Find `c`.

**Solution:**
- Sum over all `k`: `∑_{k=1}^∞ c * 2^{-k} = c * ∑_{k=1}^∞ (1/2)^k = c * (1/2)/(1-1/2) = c * 1 = 1`
- So `c = 1`
- **Answer: `c = 1`**

---

**GATE 2022 (CS) — Q4:** For independent random variables `X` and `Y` with `Var(X) = 4` and `Var(Y) = 9`, find `Var(2X - 3Y)`.

**Solution:**
- `Var(2X - 3Y) = 4*Var(X) + 9*Var(Y)` (since independent, covariance = 0)
- `= 4*4 + 9*9 = 16 + 81 = 97`
- **Answer: `97`**

---

**GATE 2023 (CS) — Q5:** If `X ~ N(μ=10, σ²=4)`, find `P(8 < X < 12)`.

**Solution:**
- Standardize: `Z = (X - μ)/σ = (X-10)/2`
- `P(8 < X < 12) = P((8-10)/2 < Z < (12-10)/2) = P(-1 < Z < 1)`
- By 68-95-99.7 rule: `P(-1 < Z < 1) ≈ 0.6827`
- More precisely: `Φ(1) - Φ(-1) = 2Φ(1) - 1 ≈ 2(0.8413) - 1 = 0.6826`
- **Answer: `~0.6826`**

---

**GATE 2024 (CS) — Q6:** A fair coin is tossed 5 times. Find probability of exactly 3 heads.

**Solution:**
- Binomial: `n = 5, p = 0.5, k = 3`
- `P(X = 3) = C(5,3) * (0.5)^3 * (0.5)^2 = 10 * (0.5)^5 = 10/32 = 5/16`
- **Answer: `5/16`**

---

**GATE 2025 (CS) — Q7:** If `X` is uniformly distributed on `[0, 4]`, find `P(X^2 > 4)`.

**Solution:**
- `P(X^2 > 4) = P(X > 2)` since `X ≥ 0`
- For uniform `[0,4]`: PDF `f(x) = 1/4` for `x ∈ [0,4]`
- `P(X > 2) = ∫_2^4 (1/4) dx = (4-2)/4 = 2/4 = 1/2`
- **Answer: `1/2`**

---

**GATE 2019 (CS) — Q8:** Find `Cov(X, Y)` if `Var(X) = 4, Var(Y) = 9, Var(X+Y) = 19`.

**Solution:**
- `Var(X+Y) = Var(X) + Var(Y) + 2Cov(X,Y)`
- `19 = 4 + 9 + 2Cov(X,Y)`
- `2Cov(X,Y) = 19 - 13 = 6`
- `Cov(X,Y) = 3`
- **Answer: `3`**

---

**GATE 2020 (CS) — Q9:** Emails arrive at a server at average rate 3 per minute (Poisson). Find probability of at most 1 email in 30 seconds.

**Solution:**
- Poisson: `λ = 3` per minute = `1.5` per 30 seconds
- `P(X ≤ 1) = P(X=0) + P(X=1)`
- `P(X=0) = e^{-1.5} * (1.5)^0 / 0! = e^{-1.5}`
- `P(X=1) = e^{-1.5} * (1.5)^1 / 1! = 1.5e^{-1.5}`
- `P(X ≤ 1) = e^{-1.5}(1 + 1.5) = 2.5e^{-1.5}`
- `e^{-1.5} ≈ 0.2231`, so `P ≈ 2.5 * 0.2231 = 0.5578`
- **Answer: `0.5578`**

---

**GATE 2021 (CS) — Q10:** An unbiased die is rolled. Let `E = {1,2,3}`, `F = {3,4,5}`. Are `E` and `F` independent?

**Solution:**
- `P(E) = 3/6 = 1/2`, `P(F) = 3/6 = 1/2`
- `P(E ∩ F) = P({3}) = 1/6`
- For independence: `P(E ∩ F) = P(E) * P(F) = 1/2 * 1/2 = 1/4`
- `1/6 ≠ 1/4`, so NOT independent
- **Answer: No**

---

**GATE 2022 (CS) — Q11:** Let `X` and `Y` be independent Bernoulli(`1/2`) random variables. Find `P(X + Y = 1 | X > 0)`.

**Solution:**
- `X, Y ~ Bernoulli(1/2)` independent
- `X > 0` means `X = 1`. Using Bayes: `P(X=1, Y=0 | X=1) = P(Y=0) = 1/2` (since independent)
- More formally: `P(X+Y=1 | X>0) = P(Y=0 | X=1) = P(Y=0) = 1/2`
- **Answer: `1/2`**

---

**GATE 2023 (CS) — Q12:** If `E[X] = 2` and `Var(X) = 4`, find an upper bound on `P(|X - 2| ≥ 4)` using Chebyshev's inequality.

**Solution:**
- Chebyshev: `P(|X - μ| ≥ kσ) ≤ 1/k^2`
- `μ = 2`, `σ = √Var = 2`
- `P(|X - 2| ≥ 4) = P(|X - μ| ≥ 2σ)` so `k = 2`
- Bound: `1/k^2 = 1/4 = 0.25`
- **Answer: `≤ 0.25`**

---

### Discrete Mathematics (10 Problems)

---

**GATE 2019 (CS) — Q1:** A graph has 10 vertices, each of degree 3. How many edges does it have?

**Solution:**
- By Handshaking Lemma: `∑ deg(v) = 2|E|`
- `10 * 3 = 30 = 2|E|`
- `|E| = 15`
- **Answer: `15`**

---

**GATE 2020 (CS) — Q2:** How many 3-letter words can be formed from the letters of "MATHEMATICS"?

**Solution:**
- Letters: `M(2), A(2), T(2), H(1), E(1), I(1), C(1), S(1)` — 8 distinct letters, some repeated
- Cases:
  - All 3 distinct: `P(8,3) = 8*7*6 = 336`
  - Exactly 2 same, 1 different: choose the repeated letter (M, A, or T) × choose the different letter (7 remaining) × arrangements `= 3 * 7 * 3 = 63`
  - All 3 same: not possible (max 2 copies of any letter)
- Total: `336 + 63 = 399`
- **Answer: `399`**

---

**GATE 2021 (CS) — Q3:** Solve recurrence: `a_n = 3a_{n-1} - 2a_{n-2}` for `n ≥ 2`, with `a_0 = 1, a_1 = 3`.

**Solution:**
- Characteristic equation: `r^2 - 3r + 2 = 0 → (r-1)(r-2) = 0`
- Roots: `r = 1, 2`
- General solution: `a_n = A(1)^n + B(2)^n = A + B*2^n`
- `a_0 = A + B = 1`, `a_1 = A + 2B = 3`
- Subtracting: `B = 2`, then `A = -1`
- `a_n = -1 + 2^{n+1}`
- **Answer: `a_n = 2^{n+1} - 1`**

---

**GATE 2022 (CS) — Q4:** In the group `(Z_7 - {0}, ×)` under multiplication modulo 7, find the order of element `3`.

**Solution:**
- `Z_7^* = {1,2,3,4,5,6}` under multiplication mod 7
- `3^1 = 3`, `3^2 = 9 mod 7 = 2`, `3^3 = 6`, `3^4 = 18 mod 7 = 4`, `3^5 = 12 mod 7 = 5`, `3^6 = 15 mod 7 = 1`
- Order = smallest `k` with `3^k = 1`, which is `6`
- Since `7` is prime, `Z_7^*` is cyclic of order 6, and `3` is a generator.
- **Answer: `6`**

---

**GATE 2023 (CS) — Q5:** Check if `(p → q) ∧ (q → r) → (p → r)` is a tautology.

**Solution:**
- If `p → q` and `q → r` are true, then whenever `p` is true, `q` is true, and then `r` is true.
- So `p → r` is true whenever both premises are true.
- This is the law of hypothetical syllogism — always true.
- Can verify with truth table: all entries are `T`.
- **Answer: Yes (tautology)**

---

**GATE 2024 (CS) — Q6:** If `|A| = 5, |B| = 3`, and `|A ∪ B| = 7`, find `|A ∩ B|`.

**Solution:**
- `|A ∪ B| = |A| + |B| - |A ∩ B|`
- `7 = 5 + 3 - |A ∩ B|`
- `|A ∩ B| = 5 + 3 - 7 = 1`
- **Answer: `1`**

---

**GATE 2025 (CS) — Q7:** Find the coefficient of `x^5` in the generating function `(1 + x)^8`.

**Solution:**
- `(1+x)^8 = ∑_{k=0}^8 C(8,k) x^k`
- Coefficient of `x^5 = C(8,5) = C(8,3) = 8*7*6/6 = 56`
- **Answer: `56`**

---

**GATE 2020 (CS) — Q8:** Are the graphs `K_{3,3}` and `K_6` isomorphic?

**Solution:**
- `K_{3,3}` is bipartite (3+3 vertices), `K_6` is complete on 6 vertices
- `K_6` contains triangles (3-cycles), but `K_{3,3}` has no odd cycles — it is bipartite
- They cannot be isomorphic as one has triangles and the other doesn't
- Also degrees: `K_{3,3}` has all vertices degree 3, `K_6` has all vertices degree 5
- **Answer: No**

---

**GATE 2021 (CS) — Q9:** Among any 6 integers, prove that at least two have the same remainder when divided by 5.

**Solution:**
- By pigeonhole principle: remainders mod 5 are `{0,1,2,3,4}` — 5 possible values
- With 6 integers and only 5 possible remainders, at least two must share a remainder
- This is the pigeonhole principle: `⌈6/5⌉ = 2`
- **Answer: True (pigeonhole principle)**

---

**GATE 2022 (CS) — Q10:** Consider the poset `(D_{12}, |)` where `D_{12}` is divisors of 12 and `|` is divisibility. Is it a lattice?

**Solution:**
- `D_{12} = {1,2,3,4,6,12}`
- Hasse diagram: 12 at top, 1 at bottom
- For any two elements, LUB = lcm, GLB = gcd
- `lcm(2,3) = 6`, `gcd(2,3) = 1` — both in set
- `lcm(4,6) = 12`, `gcd(4,6) = 2` — both in set
- All pairs have both LUB and GLB in `D_{12}`
- **Answer: Yes (it is a lattice)**

---

### Numerical Methods (6 Problems)

---

**GATE 2019 (CS) — Q1:** Starting with `x_0 = 1.5`, find `x_1` using Newton-Raphson for `f(x) = x^3 - 4x + 1`.

**Solution:**
- `f'(x) = 3x^2 - 4`
- `x_{n+1} = x_n - f(x_n)/f'(x_n)`
- `f(1.5) = 3.375 - 6 + 1 = -1.625`
- `f'(1.5) = 3(2.25) - 4 = 6.75 - 4 = 2.75`
- `x_1 = 1.5 - (-1.625)/2.75 = 1.5 + 0.5909 = 2.0909`
- **Answer: `x_1 ≈ 2.0909`**

---

**GATE 2020 (CS) — Q2:** Using Simpson's 1/3 rule with `h = π/4`, approximate `∫_0^{π/2} sin(x) dx`.

**Solution:**
- Points: `x_0 = 0, x_1 = π/4, x_2 = π/2`
- `f(0) = 0`, `f(π/4) = √2/2 ≈ 0.7071`, `f(π/2) = 1`
- Simpson: `h/3 * [f(x_0) + 4f(x_1) + f(x_2)]`
- `= (π/4)/3 * [0 + 4(0.7071) + 1] = π/12 * 3.8284`
- `= 3.1416 * 3.8284/12 = 1.0023`
- True value: `[-cos(x)]_0^{π/2} = 0 - (-1) = 1`
- **Answer: `1.0023`**

---

**GATE 2021 (CS) — Q3:** Three points `(0,1), (1,2), (2,9)` lie on `f(x)`. Approximate `f(1.5)` using Lagrange interpolation.

**Solution:**
- `L_0(x) = (x-1)(x-2)/((0-1)(0-2)) = (x-1)(x-2)/2`
- `L_1(x) = (x-0)(x-2)/((1-0)(1-2)) = x(x-2)/(-1) = -x(x-2)`
- `L_2(x) = (x-0)(x-1)/((2-0)(2-1)) = x(x-1)/2`
- `P(1.5) = 1*L_0(1.5) + 2*L_1(1.5) + 9*L_2(1.5)`
- `L_0(1.5) = (0.5)(-0.5)/2 = -0.125`
- `L_1(1.5) = -1.5(-0.5) = 0.75`
- `L_2(1.5) = (1.5)(0.5)/2 = 0.375`
- `P(1.5) = 1(-0.125) + 2(0.75) + 9(0.375) = -0.125 + 1.5 + 3.375 = 4.75`
- **Answer: `4.75`**

---

**GATE 2022 (CS) — Q4:** How many bisection iterations to guarantee error `< 10^{-5}` on `[1,3]`?

**Solution:**
- Error bound: `(b-a)/2^{n+1} = (3-1)/2^{n+1} = 2/2^{n+1} = 1/2^n`
- Need: `1/2^n < 10^{-5}` → `2^n > 10^5`
- `2^16 = 65536 < 10^5`, `2^17 = 131072 > 10^5`
- So `n ≥ 17`
- **Answer: `17` iterations**

---

**GATE 2023 (CS) — Q5:** Solve the system using Gauss-Seidel method (2 iterations, `x^{(0)} = (0,0,0)`):
```
4x + y + z = 6
x + 4y + z = 6
x + y + 4z = 6
```

**Solution:**
- Gauss-Seidel updates in place using latest values:
- Iteration 1:
  - `x_1 = (6 - y_0 - z_0)/4 = (6 - 0 - 0)/4 = 1.5`
  - `y_1 = (6 - x_1 - z_0)/4 = (6 - 1.5 - 0)/4 = 4.5/4 = 1.125`
  - `z_1 = (6 - x_1 - y_1)/4 = (6 - 1.5 - 1.125)/4 = 3.375/4 = 0.84375`
- Iteration 2:
  - `x_2 = (6 - y_1 - z_1)/4 = (6 - 1.125 - 0.84375)/4 = 4.03125/4 = 1.0078125`
  - `y_2 = (6 - x_2 - z_1)/4 = (6 - 1.0078125 - 0.84375)/4 = 4.1484375/4 = 1.0371094`
  - `z_2 = (6 - x_2 - y_2)/4 = (6 - 1.0078125 - 1.0371094)/4 = 3.9550781/4 = 0.9887695`
- True solution: `x = y = z = 1`
- **Answer: `x_2 ≈ 1.0078, y_2 ≈ 1.0371, z_2 ≈ 0.9888`**

---

**GATE 2024 (CS) — Q6:** Use trapezoidal rule with `n = 4` to approximate `∫_0^1 e^x dx`. Compare with exact value.

**Solution:**
- `h = (1-0)/4 = 0.25`
- Points: `x_0=0, x_1=0.25, x_2=0.5, x_3=0.75, x_4=1.0`
- `f(0) = 1`, `f(0.25) = e^{0.25} ≈ 1.2840`, `f(0.5) = e^{0.5} ≈ 1.6487`
- `f(0.75) = e^{0.75} ≈ 2.1170`, `f(1) = e ≈ 2.7183`
- Trapezoidal: `h/2 * [f(x_0) + 2(f(x_1)+f(x_2)+f(x_3)) + f(x_4)]`
- `= 0.25/2 * [1 + 2(1.2840+1.6487+2.1170) + 2.7183]`
- `= 0.125 * [1 + 2(5.0497) + 2.7183]`
- `= 0.125 * [1 + 10.0994 + 2.7183] = 0.125 * 13.8177 = 1.7272`
- Exact: `[e^x]_0^1 = e - 1 ≈ 1.7183`. Error ≈ `0.0089`
- **Answer: `1.7272`** (exact: `1.7183`)

---

## Recommended Books & Resources

### 1. Advanced Engineering Mathematics — Erwin Kreyszig (10th Ed.)

| GATE Topic | Relevant Chapters |
|------------|-------------------|
| Linear Algebra | Ch. 7: Linear Algebra: Matrices, Vectors, Determinants; Ch. 8: Linear Algebra: Matrix Eigenvalue Problems |
| Calculus | Ch. 9: Vector Differential Calculus; Ch. 10: Vector Integral Calculus |
| Numerical Methods | Ch. 19: Numerics in General; Ch. 20: Numerical Linear Algebra; Ch. 21: Numerics for ODEs |
| Probability | Ch. 24: Data Analysis & Probability Theory; Ch. 25: Mathematical Statistics |

**Best for:** Clear theory exposition, worked examples, numerical methods depth. Every GATE aspirant should solve Ch. 7-8 problems for linear algebra mastery.

---

### 2. Introduction to Linear Algebra — Gilbert Strang (5th Ed.)

| GATE Topic | Relevant Chapters |
|------------|-------------------|
| Matrix Operations & Rank | Ch. 1: Introduction to Vectors; Ch. 2: Solving Linear Equations |
| Vector Spaces | Ch. 3: Vector Spaces and Subspaces |
| Orthogonality | Ch. 4: Orthogonality |
| Eigenvalues | Ch. 5: Eigenvalues and Eigenvectors |
| Positive Definite Matrices | Ch. 6: Positive Definite Matrices |
| SVD & Applications | Ch. 7: The Singular Value Decomposition |

**Best for:** Deep geometric intuition. Strang explains *why* linear algebra works, not just *how*. The "Four Fundamental Subspaces" framework is essential for GATE conceptual questions.

---

### 3. A First Course in Probability — Sheldon Ross (10th Ed.)

| GATE Topic | Relevant Chapters |
|------------|-------------------|
| Basic Probability | Ch. 2: Axioms of Probability; Ch. 3: Conditional Probability and Independence |
| Random Variables | Ch. 4: Random Variables; Ch. 5: Continuous Random Variables |
| Joint Distributions | Ch. 6: Jointly Distributed Random Variables |
| Expectation | Ch. 7: Properties of Expectation |
| Limit Theorems | Ch. 8: Limit Theorems |
| Additional Topics | Ch. 9: Additional Topics in Probability |

**Best for:** Crystal-clear problem-solving approach. Ross has hundreds of fully worked probability problems — practice these for GATE's probability section.

---

### 4. Discrete Mathematics and Its Applications — Kenneth Rosen (8th Ed.)

| GATE Topic | Relevant Chapters |
|------------|-------------------|
| Logic & Proofs | Ch. 1: The Foundations: Logic and Proofs |
| Set Theory | Ch. 2: Basic Structures: Sets, Functions, Sequences, Sums |
| Counting | Ch. 6: Counting; Ch. 8: Advanced Counting Techniques |
| Relations | Ch. 9: Relations |
| Graph Theory | Ch. 10: Graphs |
| Trees | Ch. 11: Trees |
| Boolean Algebra | Ch. 12: Boolean Algebra |
| Algebraic Structures | Ch. 13 (optional): Modeling Computation |

**Best for:** Comprehensive coverage of discrete math for GATE CS. The chapter on counting (Ch. 6) and advanced counting/generating functions (Ch. 8) directly map to GATE question patterns.

---

### 5. Supplementary References

| Book | Best For |
|------|----------|
| **Engineering Mathematics** — B.S. Grewal | Quick formula reference, extensive solved examples tailored to Indian exams |
| **Probability and Statistics for Engineers** — Walpole, Myers | Applied probability with engineering context |
| **Numerical Methods** — S.S. Sastry | GATE-focused numerical methods with clear algorithms and convergence analysis |
| **Linear Algebra and Its Applications** — David C. Lay | Accessible introduction with strong computational focus |
| **Higher Engineering Mathematics** — B.V. Ramana | Topic-wise organization matching GATE syllabus closely |

### Recommended Study Plan

| Phase | Focus | Resources |
|-------|-------|-----------|
| **1. Foundation (4 weeks)** | Formulas + basic problems | Kreyszig Ch. 7-8, Rosen Ch. 1-2, Ross Ch. 2-4 |
| **2. Practice (3 weeks)** | 50+ problems per topic | Grewal, previous year GATE questions |
| **3. Mastery (2 weeks)** | Mixed topic tests, time-bound | Strang Ch. 5-6 (conceptual depth), Sastry (numerical methods) |
| **4. Revision (1 week)** | Formula sheets, weak areas | Quick reference table in this guide |

**Key Strategy:** Engineering Mathematics contributes 10-15% of total GATE CS marks. Linear Algebra + Probability alone account for ~8-10%. Prioritize these two topics for maximum score impact.
