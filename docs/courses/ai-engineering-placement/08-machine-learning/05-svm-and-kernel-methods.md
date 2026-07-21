# SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand the maximum margin classifier and support vectors |
| LO2 | Derive the SVM optimization objective: primal and dual forms |
| LO3 | Implement the kernel trick: linear, polynomial, RBF, sigmoid |
| LO4 | Apply soft margin SVM with C parameter for non-separable data |
| LO5 | Implement SVM from scratch using quadratic programming |
| LO6 | Tune SVM hyperparameters: C, gamma, kernel choice |

## Introduction

Understanding svm and kernel methods is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering svm and kernel methods.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 5.1 | Maximum Margin Classifier | Hyperplane, margin, support vectors |
| 5.2 | Primal & Dual Formulation | Lagrangian, KKT conditions, convex optimization |
| 5.3 | Kernel Trick | Feature maps, RBF, polynomial kernels, Mercer's theorem |
| 5.4 | Soft Margin SVM | Slack variables, C parameter, hinge loss |
| 5.5 | SMO Algorithm | Sequential minimal optimization, implementation |
| 5.6 | SVM in Practice | Scaling, multiclass strategies, hyperparameter tuning |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Training Data] --> B{Linearly Separable?}
    B -->|Yes| C[Hard Margin SVM]
    B -->|No| D[Soft Margin SVM]
    D --> E[Choose Kernel]
    E --> F[Linear / Poly / RBF / Sigmoid]
    C & F --> G[Dual Optimization]
    G --> H[Support Vectors]
    H --> I[Decision Boundary]
    I --> J[Predict]
    style C fill:#4a90d9,color:#fff
    style D fill:#4a90d9,color:#fff
```text

## 5.1 Maximum Margin Classifier

SVM finds the hyperplane that maximally separates classes. The margin is the distance from the hyperplane to the nearest data points (support vectors).

**Hyperplane equation**: w·x + b = 0

**Margin**: 2 / ||w||

**Objective**: Maximize margin = minimize ||w|| subject to yᵢ(w·xᵢ + b) ≥ 1

```python
import numpy as np
from typing import List, Tuple, Dict, Optional, Callable
from dataclasses import dataclass


@dataclass
class SVMConfig:
    C: float = 1.0
    kernel: str = "linear"
    degree: int = 3
    gamma: float = 1.0
    coef0: float = 0.0
    tol: float = 1e-3
    max_iter: int = 100


class SVMMargin:
    def compute_margin(self, w: np.ndarray) -> float:
        return 2.0 / np.linalg.norm(w)

    def decision_function(self, X: np.ndarray, w: np.ndarray, b: float) -> np.ndarray:
        return X @ w + b

    def hinge_loss(self, X: np.ndarray, y: np.ndarray,
                   w: np.ndarray, b: float) -> float:
        scores = self.decision_function(X, w, b)
        losses = np.maximum(0, 1 - y * scores)
        return np.mean(losses) + 0.5 * np.dot(w, w)


def generate_toy_data(n_samples: int = 100, sep: float = 1.0):
    np.random.seed(42)
    X = np.random.randn(n_samples, 2)
    y = np.sign(X[:, 0] * sep + X[:, 1] + np.random.randn(n_samples) * 0.1)
    return X, y


X_toy, y_toy = generate_toy_data()
print(f"Data shape: {X_toy.shape}, classes: {np.unique(y_toy)}")
```text

**Support vectors** are the data points that lie on the margin boundary. Only support vectors influence the decision boundary — other points can be moved without changing the boundary.

---

## 5.2 Primal & Dual Formulation

The primal problem: minimize ½||w||² subject to yᵢ(w·xᵢ + b) ≥ 1.

Using Lagrange multipliers αᵢ ≥ 0, the dual problem becomes:
maximize Σαᵢ - ½ΣΣαᵢαⱼyᵢyⱼ(xᵢ·xⱼ) subject to Σαᵢyᵢ = 0, αᵢ ≥ 0.

```python
class SVMPrimalDual:
    def __init__(self, config: SVMConfig = SVMConfig()):
        self.config = config
        self.alpha: Optional[np.ndarray] = None
        self.w: Optional[np.ndarray] = None
        self.b: float = 0.0
        self.support_vectors: np.ndarray = None
        self.support_labels: np.ndarray = None

    def _primal_objective(self, w: np.ndarray, b: float,
                          X: np.ndarray, y: np.ndarray) -> float:
        regularization = 0.5 * np.dot(w, w)
        hinge = np.sum(np.maximum(0, 1 - y * (X @ w + b)))
        return regularization + self.config.C * hinge

    def _dual_objective(self, alpha: np.ndarray,
                        K: np.ndarray, y: np.ndarray) -> float:
        return np.sum(alpha) - 0.5 * np.sum(
            (alpha[:, None] * y[:, None]) * (alpha[None, :] * y[None, :]) * K
        )

    def fit_simple(self, X: np.ndarray, y: np.ndarray) -> Dict:
        """Simple gradient-based SVM for linear case"""
        n, p = X.shape
        w = np.zeros(p)
        b = 0.0
        lr = 0.01

        for _ in range(self.config.max_iter):
            scores = X @ w + b
            margins = y * scores
            # Sub-gradient of hinge loss
            misclassified = margins < 1
            grad_w = w - self.config.C * (X[misclassified] * y[misclassified, None]).sum(axis=0)
            grad_b = -self.config.C * y[misclassified].sum()

            w -= lr * grad_w / n
            b -= lr * grad_b / n

        self.w = w
        self.b = b
        return {"w": w, "b": b, "objective": self._primal_objective(w, b, X, y)}


svm_linear = SVMPrimalDual()
result = svm_linear.fit_simple(X_toy, y_toy)
print(f"Primal objective: {result['objective']:.4f}")
```text

**KKT conditions**: αᵢ = 0 for correctly classified points far from boundary; 0 < αᵢ < C for support vectors on margin; αᵢ = C for points inside margin (slack).

---

## 5.3 Kernel Trick

The kernel trick computes dot products in a high-dimensional feature space without explicitly transforming the data:

K(xᵢ, xⱼ) = φ(xᵢ)·φ(xⱼ)

```python
class KernelFunctions:
    @staticmethod
    def linear() -> Callable:
        return lambda x, y: np.dot(x, y)

    @staticmethod
    def polynomial(degree: int = 3, coef0: float = 1.0) -> Callable:
        return lambda x, y: (np.dot(x, y) + coef0) ** degree

    @staticmethod
    def rbf(gamma: float = 1.0) -> Callable:
        return lambda x, y: np.exp(-gamma * np.linalg.norm(x - y) ** 2)

    @staticmethod
    def sigmoid(gamma: float = 1.0, coef0: float = 0.0) -> Callable:
        return lambda x, y: np.tanh(gamma * np.dot(x, y) + coef0)

    def compute_kernel_matrix(self, X: np.ndarray,
                              kernel: str = "rbf", **params) -> np.ndarray:
        if kernel == "linear":
            K = X @ X.T
        elif kernel == "rbf":
            gamma = params.get("gamma", 1.0)
            sq_dists = np.sum(X ** 2, axis=1)[:, None] + np.sum(X ** 2, axis=1)[None, :] - 2 * X @ X.T
            K = np.exp(-gamma * np.clip(sq_dists, 0, None))
        elif kernel == "poly":
            degree = params.get("degree", 3)
            coef0 = params.get("coef0", 1.0)
            K = (X @ X.T + coef0) ** degree
        else:
            raise ValueError(f"Unknown kernel: {kernel}")
        return K

    def visualize_kernel_mapping(self, X: np.ndarray) -> Dict:
        """Show kernel matrix statistics for different kernels"""
        results = {}
        for kernel in ["linear", "rbf", "poly"]:
            K = self.compute_kernel_matrix(X, kernel=kernel, gamma=0.5, degree=3)
            results[kernel] = {
                "min": float(np.min(K)),
                "max": float(np.max(K)),
                "mean": float(np.mean(K)),
                "rank": int(np.linalg.matrix_rank(K, tol=1e-5)),
            }
        return results


kf = KernelFunctions()
results = kf.visualize_kernel_mapping(X_toy)
for kernel, stats in results.items():
    print(f"{kernel}: {stats}")
```text

**Mercer's theorem**: A kernel function is valid if its kernel matrix is positive semi-definite for any set of inputs.

| Kernel | Formula | Hyperparameters | Use Case |
|--------|---------|-----------------|----------|
| Linear | x·y | None | Linearly separable data |
| Polynomial | (x·y + c)^d | d, c | Mild non-linearity |
| RBF | exp(-γ||x-y||²) | γ | Most common, general purpose |
| Sigmoid | tanh(γx·y + c) | γ, c | Neural network-like |

---

## 5.4 Soft Margin SVM

Real-world data is rarely perfectly separable. Soft margin SVM introduces slack variables ξᵢ to allow misclassifications:

minimize ½||w||² + CΣξᵢ
subject to yᵢ(w·xᵢ + b) ≥ 1 - ξᵢ, ξᵢ ≥ 0

```python
class SoftMarginSVM:
    def __init__(self, config: SVMConfig = SVMConfig()):
        self.config = config
        self.alpha: np.ndarray = None
        self.b: float = 0.0
        self.support_vectors: np.ndarray = None
        self.support_labels: np.ndarray = None
        self.support_alphas: np.ndarray = None

    def _compute_kernel(self, X1: np.ndarray, X2: np.ndarray) -> np.ndarray:
        if self.config.kernel == "linear":
            return X1 @ X2.T
        elif self.config.kernel == "rbf":
            sq_dists = np.sum(X1 ** 2, axis=1)[:, None] + np.sum(X2 ** 2, axis=1)[None, :] - 2 * X1 @ X2.T
            return np.exp(-self.config.gamma * np.clip(sq_dists, 0, None))
        elif self.config.kernel == "poly":
            return (X1 @ X2.T + self.config.coef0) ** self.config.degree
        else:
            raise ValueError(f"Unknown kernel: {self.config.kernel}")

    def fit(self, X: np.ndarray, y: np.ndarray) -> Dict:
        n = X.shape[0]
        K = self._compute_kernel(X, X)

        # Simple SMO-like implementation
        alpha = np.zeros(n)
        b = 0.0

        for _ in range(self.config.max_iter):
            num_changed = 0
            for i in range(n):
                Ei = np.sum(alpha * y * K[:, i]) + b - y[i]
                if ((y[i] * Ei < -self.config.tol and alpha[i] < self.config.C)
                        or (y[i] * Ei > self.config.tol and alpha[i] > 0)):
                    # Pick random j
                    j = np.random.choice([x for x in range(n) if x != i])
                    Ej = np.sum(alpha * y * K[:, j]) + b - y[j]

                    alpha_i_old, alpha_j_old = alpha[i], alpha[j]

                    # Compute bounds
                    if y[i] != y[j]:
                        L = max(0, alpha[j] - alpha[i])
                        H = min(self.config.C, self.config.C + alpha[j] - alpha[i])
                    else:
                        L = max(0, alpha[i] + alpha[j] - self.config.C)
                        H = min(self.config.C, alpha[i] + alpha[j])

                    if L == H:
                        continue

                    eta = 2 * K[i, j] - K[i, i] - K[j, j]
                    if eta >= 0:
                        continue

                    alpha[j] -= y[j] * (Ei - Ej) / eta
                    alpha[j] = np.clip(alpha[j], L, H)

                    if abs(alpha[j] - alpha_j_old) < 1e-5:
                        continue

                    alpha[i] += y[i] * y[j] * (alpha_j_old - alpha[j])

                    # Update bias
                    b1 = b - Ei - y[i] * (alpha[i] - alpha_i_old) * K[i, i] - y[j] * (alpha[j] - alpha_j_old) * K[i, j]
                    b2 = b - Ej - y[i] * (alpha[i] - alpha_i_old) * K[i, j] - y[j] * (alpha[j] - alpha_j_old) * K[j, j]

                    if 0 < alpha[i] < self.config.C:
                        b = b1
                    elif 0 < alpha[j] < self.config.C:
                        b = b2
                    else:
                        b = (b1 + b2) / 2

                    num_changed += 1

            if num_changed == 0:
                break

        self.alpha = alpha
        self.b = b
        sv_mask = alpha > 1e-5
        self.support_vectors = X[sv_mask]
        self.support_labels = y[sv_mask]
        self.support_alphas = alpha[sv_mask]

        return {"n_support_vectors": np.sum(sv_mask), "iterations": _, "b": b}

    def decision_function(self, X: np.ndarray) -> np.ndarray:
        K = self._compute_kernel(X, self.support_vectors)
        return (self.support_alphas * self.support_labels) @ K.T + self.b

    def predict(self, X: np.ndarray) -> np.ndarray:
        return np.sign(self.decision_function(X))


## Test with toy data
svm = SoftMarginSVM(SVMConfig(C=1.0, kernel="rbf", gamma=0.5))
result = svm.fit(X_toy, y_toy)
preds = svm.predict(X_toy)
print(f"Support vectors: {result['n_support_vectors']}, "
      f"Accuracy: {np.mean(preds == y_toy):.3f}")
```text

**C parameter**: Small C = large margin, allows more misclassifications (high bias, low variance). Large C = narrow margin, fewer misclassifications (low bias, high variance).

---

## 5.5 SMO Algorithm

Sequential Minimal Optimization (SMO) breaks the large QP problem into a series of smallest possible sub-problems (2 alphas at a time).

```python
class SMO:
    def __init__(self, config: SVMConfig = SVMConfig()):
        self.config = config
        self.alpha: np.ndarray = None
        self.b: float = 0.0

    def fit(self, X: np.ndarray, y: np.ndarray) -> Dict:
        n = X.shape[0]
        K = self._kernel_matrix(X)
        alpha = np.zeros(n)
        b = 0.0
        passes_without_change = 0

        while passes_without_change < self.config.max_iter:
            num_changed = 0
            for i in range(n):
                Ei = np.sum(alpha * y * K[:, i]) + b - y[i]
                if self._violates_kkt(alpha[i], y[i], Ei):
                    j = self._select_second(i, n)
                    Ej = np.sum(alpha * y * K[:, j]) + b - y[j]

                    alpha_i_old, alpha_j_old = alpha[i], alpha[j]
                    L, H = self._compute_bounds(alpha[i], alpha[j], y[i], y[j])

                    if L == H:
                        continue

                    eta = 2 * K[i, j] - K[i, i] - K[j, j]
                    if eta >= 0:
                        continue

                    alpha[j] -= y[j] * (Ei - Ej) / eta
                    alpha[j] = np.clip(alpha[j], L, H)

                    if abs(alpha[j] - alpha_j_old) < 1e-5:
                        continue

                    alpha[i] += y[i] * y[j] * (alpha_j_old - alpha[j])
                    b = self._update_bias(b, Ei, Ej, alpha[i], alpha_j_old,
                                          alpha_j_old, K[i, i], K[i, j], K[j, j], y[i], y[j])
                    num_changed += 1

            passes_without_change = passes_without_change + 1 if num_changed == 0 else 0

        self.alpha = alpha
        return {"n_support_vectors": np.sum(alpha > 1e-5), "b": b}

    def _kernel_matrix(self, X: np.ndarray) -> np.ndarray:
        if self.config.kernel == "linear":
            return X @ X.T
        sq_dists = np.sum(X ** 2, axis=1)[:, None] + np.sum(X ** 2, axis=1)[None, :] - 2 * X @ X.T
        return np.exp(-self.config.gamma * np.clip(sq_dists, 0, None))

    def _violates_kkt(self, alpha_i: float, yi: float, Ei: float) -> bool:
        return ((yi * Ei < -self.config.tol and alpha_i < self.config.C)
                or (yi * Ei > self.config.tol and alpha_i > 0))

    def _select_second(self, i: int, n: int) -> int:
        j = np.random.randint(n)
        while j == i:
            j = np.random.randint(n)
        return j

    def _compute_bounds(self, alpha_i: float, alpha_j: float,
                        yi: float, yj: float) -> Tuple[float, float]:
        C = self.config.C
        if yi != yj:
            return max(0, alpha_j - alpha_i), min(C, C + alpha_j - alpha_i)
        return max(0, alpha_i + alpha_j - C), min(C, alpha_i + alpha_j)

    def _update_bias(self, b: float, Ei: float, Ej: float,
                     alpha_i: float, alpha_j: float,
                     alpha_j_old: float, Kii: float, Kij: float,
                     Kjj: float, yi: float, yj: float) -> float:
        b1 = b - Ei - yi * (alpha_i - alpha_i) * Kii - yj * (alpha_j - alpha_j_old) * Kij
        b2 = b - Ej - yi * (alpha_i - alpha_i) * Kij - yj * (alpha_j - alpha_j_old) * Kjj
        if 0 < alpha_i < self.config.C:
            return b1
        if 0 < alpha_j < self.config.C:
            return b2
        return (b1 + b2) / 2


smo = SMO(SVMConfig(C=1.0, kernel="rbf", gamma=0.5))
smo_result = smo.fit(X_toy, y_toy)
print(f"SMO support vectors: {smo_result['n_support_vectors']}")
```text

---

## 5.6 SVM in Practice

**Feature scaling**: SVM is highly sensitive to feature scales. Always standardize features before training.

**Multiclass strategies**: One-vs-One (OvO) trains K(K-1)/2 classifiers; One-vs-Rest (OvR) trains K classifiers.

```python
class MulticlassSVM:
    def __init__(self, config: SVMConfig = SVMConfig()):
        self.config = config
        self.models: Dict[int, SoftMarginSVM] = {}

    def fit_ovo(self, X: np.ndarray, y: np.ndarray) -> None:
        classes = np.unique(y)
        for i, c1 in enumerate(classes):
            for c2 in classes[i + 1:]:
                mask = (y == c1) | (y == c2)
                X_pair = X[mask]
                y_pair = np.where(y[mask] == c1, 1, -1)
                model = SoftMarginSVM(self.config)
                model.fit(X_pair, y_pair)
                self.models[(c1, c2)] = model

    def predict_ovo(self, X: np.ndarray) -> np.ndarray:
        votes = np.zeros((X.shape[0], len(set(k[0] for k in self.models))))
        for (c1, c2), model in self.models.items():
            preds = model.predict(X)
            for i, p in enumerate(preds):
                votes[i, c1 if p == 1 else c2] += 1
        return np.argmax(votes, axis=1)


## Hyperparameter tuning guide
def tune_svm(X_train: np.ndarray, y_train: np.ndarray,
             X_val: np.ndarray, y_val: np.ndarray) -> Dict:
    best_score = 0
    best_params = {}

    for C in [0.1, 1.0, 10.0]:
        for gamma in [0.01, 0.1, 1.0]:
            for kernel in ["linear", "rbf"]:
                config = SVMConfig(C=C, kernel=kernel, gamma=gamma)
                model = SoftMarginSVM(config)
                model.fit(X_train, y_train)
                score = np.mean(model.predict(X_val) == y_val)
                if score > best_score:
                    best_score = score
                    best_params = {"C": C, "gamma": gamma, "kernel": kernel}

    return {"best_params": best_params, "best_score": best_score}


## Standardization is essential for SVM
def standardize(X_train: np.ndarray, X_test: np.ndarray) -> Tuple[np.ndarray, np.ndarray]:
    mean = np.mean(X_train, axis=0)
    std = np.std(X_train, axis=0)
    return (X_train - mean) / std, (X_test - mean) / std


## Generate and scale data
X_scaled, _ = standardize(X_toy, X_toy)
svm_tuned = SoftMarginSVM(SVMConfig(C=10.0, kernel="rbf", gamma=0.5))
svm_tuned.fit(X_scaled, y_toy)
print(f"Tuned SVM accuracy: {np.mean(svm_tuned.predict(X_scaled) == y_toy):.3f}")
```text

**SVM vs other algorithms**:

| Aspect | SVM | Random Forest | Neural Network |
|--------|-----|---------------|----------------|
| Interpretability | Moderate (support vectors) | Moderate (feature importance) | Low (black box) |
| Scalability | O(n²) to O(n³) | O(n log n) per tree | O(n) per epoch |
| Feature scaling | Required | Not required | Required |
| Non-linearity | Kernel trick | Built-in | Activation functions |
| High-dim data | Excellent | Good | Good |

---

## TypeScript Parallel

```typescript
interface SVMConfig {
  C: number;
  kernel: "linear" | "rbf" | "poly";
  gamma: number;
  degree: number;
}

class Kernel {
  static linear(a: number[], b: number[]): number {
    return a.reduce((s, ai, i) => s + ai * b[i], 0);
  }
  static rbf(a: number[], b: number[], gamma: number): number {
    const dist = Math.sqrt(a.reduce((s, ai, i) => s + (ai - b[i]) ** 2, 0));
    return Math.exp(-gamma * dist * dist);
  }
  static poly(a: number[], b: number[], degree: number): number {
    return Math.pow(Kernel.linear(a, b) + 1, degree);
  }
}

class SVM {
  private alpha: number[] = [];
  private b = 0;
  private sv: number[][] = [];
  private svLabels: number[] = [];
  private svAlpha: number[] = [];

  fit(X: number[][], y: number[], config: SVMConfig): void {
    const n = X.length;
    const K = this.kernelMatrix(X, config);
    let alpha = new Array(n).fill(0);
    let b = 0;
    // Simplified SMO training (omitted for brevity)
    this.alpha = alpha;
    this.b = b;
    this.sv = X.filter((_, i) => alpha[i] > 1e-5);
    this.svLabels = y.filter((_, i) => alpha[i] > 1e-5);
    this.svAlpha = alpha.filter((a) => a > 1e-5);
  }

  private kernelMatrix(X: number[][], config: SVMConfig): number[][] {
    return X.map((row) =>
      X.map((row2) => {
        if (config.kernel === "linear") return Kernel.linear(row, row2);
        if (config.kernel === "rbf") return Kernel.rbf(row, row2, config.gamma);
        return Kernel.poly(row, row2, config.degree);
      })
    );
  }

  predict(X: number[][]): number[] {
    return X.map((x) => {
      let score = this.b;
      for (let i = 0; i < this.sv.length; i++) {
        const k = Kernel.rbf(x, this.sv[i], 1.0);
        score += this.svAlpha[i] * this.svLabels[i] * k;
      }
      return Math.sign(score);
    });
  }
}

const svm = new SVM();
```text

## Summary

- SVM finds the hyperplane with maximum margin between classes; only support vectors determine the boundary
- The dual formulation expresses SVM in terms of dot products, enabling the kernel trick
- Kernel functions (RBF, polynomial, linear) map data to high-dimensional feature spaces without explicit transformation
- Soft margin SVM uses slack variables and the C parameter to handle non-separable data
- C controls the trade-off: small C = larger margin (higher bias), large C = fewer errors (higher variance)
- SVM requires feature scaling — always standardize before training
- SMO efficiently solves the SVM quadratic programming problem by optimizing two alphas at a time
- Multiclass SVM uses OvO or OvR strategies; OvO is more common (doesn't need well-calibrated probabilities)
- RBF kernel is the default choice; tune gamma and C via cross-validation
- SVM excels in high-dimensional spaces and when classes are clearly separated

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Feature scales differ | Standardize features | Using raw unscaled data |
| Non-linear boundary | RBF kernel with tuned gamma | Linear kernel |
| Large dataset (n > 100K) | Linear SVM or switch to random forest | RBF kernel (O(n²) memory) |
| High-dimensional features | Linear SVM | RBF kernel (overfitting) |
| Imbalanced data | Class weights or balanced C | Default C=1 for all classes |

## Interview Q&A

<details class="tp-qa-card" data-qid="ml08-q1"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: What is the kernel trick and why is it important for SVM?</summary><div class="tp-qa-answer"><p>The kernel trick computes dot products in a high-dimensional feature space without explicitly transforming the data. K(xᵢ, xⱼ) = φ(xᵢ)·φ(xⱼ). This is important because SVM's optimization only depends on dot products. The kernel trick lets SVM learn non-linear decision boundaries with no additional computational cost — the complexity depends on the number of support vectors, not the feature space dimension.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q2"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: Explain the C parameter in soft margin SVM.</summary><div class="tp-qa-answer"><p>C controls the trade-off between maximizing the margin and minimizing training errors. Large C: penalizes misclassifications heavily, narrow margin, low bias, may overfit. Small C: allows more misclassifications, wide margin, high bias, more regularization. C is inversely related to the regularization strength — analogous to 1/λ in ridge regression. In practice, tune C via cross-validation over logarithmic scale (0.01, 0.1, 1, 10, 100).</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q3"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: What are support vectors and why are they important?</summary><div class="tp-qa-answer"><p>Support vectors are the training points that lie on the margin boundary or inside the margin. They are the only points that determine the decision boundary — removing any non-support vector doesn't change the model. This makes SVM memory-efficient (only support vectors need to be stored for prediction). The number of support vectors typically grows with dataset complexity and with the C parameter.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q4"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: How does the RBF kernel gamma parameter affect SVM?</summary><div class="tp-qa-answer"><p>Gamma (γ) controls the influence radius of each support vector. Small gamma (e.g., 0.01): wide influence, smoother decision boundary, higher bias (may underfit). Large gamma (e.g., 10): narrow influence, complex boundary, higher variance (may overfit). Gamma determines the RBF width: K(x, y) = exp(-γ||x-y||²). Rule of thumb: gamma = 1 / (n_features * X.var()) or tune via cross-validation over [0.001, 0.01, 0.1, 1, 10].</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q5"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: What is the difference between hard margin and soft margin SVM?</summary><div class="tp-qa-answer"><p>Hard margin SVM assumes perfectly separable data and requires yᵢ(w·xᵢ + b) ≥ 1 for all points. It has no tolerance for misclassifications. Soft margin SVM introduces slack variables ξᵢ and the C parameter, allowing yᵢ(w·xᵢ + b) ≥ 1 - ξᵢ. This handles non-separable data and outliers. Hard margin is rarely used in practice because real data is never perfectly separable. Soft margin with C=infinity is equivalent to hard margin.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q6"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: Why does SVM need feature scaling?</summary><div class="tp-qa-answer"><p>SVM is sensitive to feature scales because the margin is computed using Euclidean distance. If one feature has large values and another has small values, the large-scale feature will dominate the margin calculation. For RBF kernel, the exponential distance ||x-y||² is affected by scale. For linear kernel, regularization affects large-scale features more. Always standardize (z-score) or normalize (min-max) features before SVM training.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q7"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: How does SVM handle multiclass classification?</summary><div class="tp-qa-answer"><p>SVM is inherently binary. Two common strategies: <strong>One-vs-One (OvO)</strong>: Train K(K-1)/2 binary classifiers (one for each pair), vote for prediction. <strong>One-vs-Rest (OvR)</strong>: Train K binary classifiers (one vs all others), pick the class with highest confidence. OvO is more common for SVM because: 1) SVM training is super-linear, so smaller datasets train faster. 2) OvO usually produces better accuracy. 3) LibSVM (popular SVM library) uses OvO by default.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q8"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: What is the hinge loss function?</summary><div class="tp-qa-answer"><p>Hinge loss: max(0, 1 - y·f(x)) where f(x) = w·x + b. It penalizes points that are misclassified or within the margin. If y·f(x) ≥ 1 (correctly classified with enough margin), loss = 0. If 0 < y·f(x) < 1 (correct but inside margin), loss decreases linearly. If y·f(x) < 0 (misclassified), loss increases linearly. The total SVM objective = ½||w||² + C·Σhinge(yᵢ·f(xᵢ)).</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q9"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: What are the KKT conditions for SVM?</summary><div class="tp-qa-answer"><p>KKT (Karush-Kuhn-Tucker) conditions for SVM: <strong>1) Primal feasibility</strong>: yᵢ(w·xᵢ + b) ≥ 1 - ξᵢ, ξᵢ ≥ 0. <strong>2) Dual feasibility</strong>: αᵢ ≥ 0, βᵢ ≥ 0 (where βᵢ are Lagrange multipliers for ξᵢ ≥ 0). <strong>3) Complementary slackness</strong>: αᵢ(yᵢ(w·xᵢ + b) - 1 + ξᵢ) = 0 and βᵢξᵢ = 0. <strong>4) Stationarity</strong>: w = Σαᵢyᵢxᵢ, 0 = Σαᵢyᵢ. These conditions define which points become support vectors.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q10"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: When would you choose SVM over neural networks?</summary><div class="tp-qa-answer"><p>Choose SVM when: <strong>1)</strong> Dataset is small to medium (n < 10,000). <strong>2)</strong> Features are high-dimensional (text, genomics). <strong>3)</strong> Interpretability matters (support vectors reveal key examples). <strong>4)</strong> Need strong theoretical guarantees (convex optimization, global optimum). <strong>5)</strong> Training resources are limited (SVM can converge faster than deep learning). Choose neural networks for large datasets, images, audio, text, and when you need state-of-the-art accuracy.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

## Chapter Quiz

**Q1**: What is the decision boundary of a linear SVM?

a) A curve determined by support vectors
b) A hyperplane maximizing the margin
c) A probabilistic threshold
d) A tree-based partition

<details class="tp-qa-card" data-qid="ml08-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) A hyperplane maximizing the margin</strong></p><p>SVM finds the hyperplane that maximizes the distance to the nearest points of each class.</p></div></details>

**Q2**: What does the C parameter in SVM control?

a) Kernel width
b) Margin vs error trade-off
c) Learning rate
d) Number of support vectors

<details class="tp-qa-card" data-qid="ml08-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Margin vs error trade-off</strong></p><p>Large C = narrow margin (fewer errors), small C = wide margin (more errors tolerated).</p></div></details>

**Q3**: Which kernel function is defined as K(x,y) = exp(-γ||x-y||²)?

a) Linear
b) Polynomial
c) RBF
d) Sigmoid

<details class="tp-qa-card" data-qid="ml08-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) RBF</strong></p><p>The Radial Basis Function kernel uses the Gaussian exponential of the squared distance.</p></div></details>

**Q4**: How many binary classifiers does OvO train for K classes?

a) K
b) K-1
c) K(K-1)/2
d) 2^K

<details class="tp-qa-card" data-qid="ml08-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) K(K-1)/2</strong></p><p>OvO trains one classifier for every pair of classes: K choose 2 = K(K-1)/2.</p></div></details>

**Q5**: What does a large gamma value in RBF kernel cause?

a) Simpler decision boundary
b) More complex, potentially overfit boundary
c) No effect
d) Linear decision boundary

<details class="tp-qa-card" data-qid="ml08-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) More complex, potentially overfit boundary</strong></p><p>Large gamma means each support vector has narrow influence, creating a complex boundary that may overfit.</p></div></details>

## Exercises

**Easy** — Implement a linear SVM using gradient descent on the hinge loss. Train on a simple 2D dataset and visualize the decision boundary.

**Easy** — Compute the RBF kernel matrix for 10 random points with gamma=0.5. Verify the matrix is positive semi-definite.

**Medium** — Implement OvO multiclass SVM for 3 classes. Train on the Iris dataset and report accuracy.

**Hard** — Build a grid search for SVM hyperparameters (C, gamma, kernel) with 5-fold cross-validation. Report the best parameters and test accuracy.

**Hard** — Implement SMO from scratch. Compare convergence speed with full QP optimization on datasets of increasing size (n=100, 500, 1000).

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- Key concept 1: Core principle of 08-machine-learning
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 08-machine-learning. When would you choose one approach over another?
2. Design a system that efficiently handles 08-machine-learning at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 08-machine-learning. What was your approach and what was the result?
2. How would you explain 08-machine-learning to a non-technical stakeholder?

#### Microsoft Style
1. How does 08-machine-learning integrate with enterprise systems and cloud architectures?
2. What are the security implications of 08-machine-learning?

#### NVIDIA Style
1. How would you optimize 08-machine-learning for GPU-accelerated computing?
2. What parallel processing patterns apply to 08-machine-learning?

#### AI Startup Style
1. How would you implement 08-machine-learning in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 08-machine-learning?

### Resume Tips
- **Technical Skills**: List 08-machine-learning under relevant technical skills
- **Project Description**: "Implemented 08-machine-learning to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 08-machine-learning in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 08-machine-learning
- [ ] Practice 3-5 problems related to 08-machine-learning
- [ ] Prepare 2 real-world examples of using 08-machine-learning
- [ ] Know the time/space complexity of common 08-machine-learning operations
- [ ] Have questions ready about how the company uses 08-machine-learning> **Next**: [Ensemble Methods](06-ensemble-methods.md)
