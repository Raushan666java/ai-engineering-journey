# Model Evaluation — Cross-Validation, ROC-AUC, Confusion Matrix, Metrics

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Implement k-fold, stratified, and leave-one-out cross-validation |
| LO2 | Compute and interpret confusion matrix, precision, recall, F1 |
| LO3 | Plot ROC curves and calculate AUC for binary classifiers |
| LO4 | Understand multi-class metrics: macro, micro, weighted averaging |
| LO5 | Use learning curves and validation curves for model diagnosis |
| LO6 | Compare models using statistical significance (McNemar's test) |

## Introduction

08-machine-learning is a fundamental concept in AI engineering. This chapter covers the core principles, practical implementations, and interview preparation for mastering this topic.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures
## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 9.1 | Cross-Validation Strategies | K-fold, stratified, grouped, time series, LOO |
| 9.2 | Confusion Matrix | TP, TN, FP, FN, per-class metrics |
| 9.3 | ROC & AUC | TPR vs FPR, AUC interpretation, multi-class ROC |
| 9.4 | Multi-Class Metrics | Macro, micro, weighted F1, per-class breakdown |
| 9.5 | Learning & Validation Curves | Bias-variance diagnosis, hyperparameter effects |
| 9.6 | Model Comparison | Statistical tests, effect size, practical significance |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Trained Model] --> B[Cross-Validation]
    B --> C[Confusion Matrix]
    C --> D[Metrics: Acc, Prec, Rec, F1]
    C --> E[ROC Curve / AUC]
    D --> F{Good Enough?}
    E --> F
    F -->|No| G[Learning Curves]
    G --> H[Diagnose Bias/Variance]
    H --> I[Adjust Model]
    I --> A
    F -->|Yes| J[Deploy]
```

## 9.1 Cross-Validation Strategies

Cross-validation provides a robust estimate of model performance by training and evaluating on multiple data splits.

```python
import numpy as np
from typing import List, Tuple, Callable, Dict, Any
from sklearn.model_selection import KFold, StratifiedKFold, TimeSeriesSplit
from sklearn.metrics import accuracy_score, f1_score, roc_auc_score
from sklearn.datasets import make_classification
from sklearn.tree import DecisionTreeClassifier


class CrossValidator:
    def __init__(self, n_splits: int = 5, shuffle: bool = True,
                 random_state: int = 42):
        self.n_splits = n_splits
        self.shuffle = shuffle
        self.random_state = random_state

    def kfold(self, X: np.ndarray, y: np.ndarray,
              model_class: Any, **model_kwargs) -> Dict:
        kf = KFold(n_splits=self.n_splits, shuffle=self.shuffle,
                   random_state=self.random_state)
        scores = {"accuracy": [], "f1": []}

        for train_idx, val_idx in kf.split(X):
            X_train, X_val = X[train_idx], X[val_idx]
            y_train, y_val = y[train_idx], y[val_idx]

            model = model_class(**model_kwargs)
            model.fit(X_train, y_train)
            preds = model.predict(X_val)

            scores["accuracy"].append(accuracy_score(y_val, preds))
            scores["f1"].append(f1_score(y_val, preds, average="weighted"))

        return {
            "mean_accuracy": np.mean(scores["accuracy"]),
            "std_accuracy": np.std(scores["accuracy"]),
            "mean_f1": np.mean(scores["f1"]),
            "std_f1": np.std(scores["f1"]),
            "all_scores": scores,
        }

    def stratified_kfold(self, X: np.ndarray, y: np.ndarray,
                          model_class: Any, **model_kwargs) -> Dict:
        skf = StratifiedKFold(n_splits=self.n_splits, shuffle=self.shuffle,
                              random_state=self.random_state)
        scores = {"accuracy": [], "f1": [], "auc": []}

        for train_idx, val_idx in skf.split(X, y):
            X_train, X_val = X[train_idx], X[val_idx]
            y_train, y_val = y[train_idx], y[val_idx]

            model = model_class(**model_kwargs)
            model.fit(X_train, y_train)
            preds = model.predict(X_val)

            scores["accuracy"].append(accuracy_score(y_val, preds))
            scores["f1"].append(f1_score(y_val, preds, average="weighted"))

        return {
            "mean_accuracy": np.mean(scores["accuracy"]),
            "std_accuracy": np.std(scores["accuracy"]),
            "mean_f1": np.mean(scores["f1"]),
            "std_f1": np.std(scores["f1"]),
        }

    def nested_cv(self, X: np.ndarray, y: np.ndarray,
                   outer_model: Any, param_grid: Dict) -> Dict:
        """Nested CV for unbiased hyperparameter evaluation"""
        outer_scores = []
        outer_skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

        for train_idx, test_idx in outer_skf.split(X, y):
            X_outer_train, X_test = X[train_idx], X[test_idx]
            y_outer_train, y_test = y[train_idx], y[test_idx]

            # Inner CV for hyperparameter tuning
            best_score = 0
            best_params = {}
            inner_skf = StratifiedKFold(n_splits=3, shuffle=True, random_state=42)

            for params in self._param_grid_iterator(param_grid):
                inner_scores = []
                for inner_train_idx, inner_val_idx in inner_skf.split(X_outer_train, y_outer_train):
                    X_inner_train = X_outer_train[inner_train_idx]
                    y_inner_train = y_outer_train[inner_train_idx]
                    X_inner_val = X_outer_train[inner_val_idx]
                    y_inner_val = y_outer_train[inner_val_idx]

                    model = outer_model.__class__(**params)
                    model.fit(X_inner_train, y_inner_train)
                    score = f1_score(y_inner_val, model.predict(X_inner_val), average="weighted")
                    inner_scores.append(score)

                mean_score = np.mean(inner_scores)
                if mean_score > best_score:
                    best_score = mean_score
                    best_params = params

            # Evaluate with best params on outer test set
            final_model = outer_model.__class__(**best_params)
            final_model.fit(X_outer_train, y_outer_train)
            test_score = f1_score(y_test, final_model.predict(X_test), average="weighted")
            outer_scores.append(test_score)

        return {
            "mean_test_score": np.mean(outer_scores),
            "std_test_score": np.std(outer_scores),
        }

    def _param_grid_iterator(self, param_grid: Dict) -> List[Dict]:
        import itertools
        keys = param_grid.keys()
        values = param_grid.values()
        return [dict(zip(keys, combo)) for combo in itertools.product(*values)]


# Test cross-validation
X_cv, y_cv = make_classification(n_samples=500, n_features=10, random_state=42)
cv = CrossValidator(n_splits=5)
results = cv.stratified_kfold(X_cv, y_cv, DecisionTreeClassifier, max_depth=5)
print(f"Stratified CV: acc={results['mean_accuracy']:.3f} +/- {results['std_accuracy']:.3f}")
```

**Cross-validation strategies**:
- K-fold: Simple random split into K folds
- Stratified: Preserves class proportions (essential for imbalanced data)
- Grouped: Ensures all samples from same group stay in same fold
- Time series: Respects temporal order (expanding window)
- Leave-one-out: K = n (expensive, low bias, high variance)

---

## 9.2 Confusion Matrix

```python
class ConfusionMatrix:
    def __init__(self, y_true: np.ndarray, y_pred: np.ndarray):
        self.y_true = y_true
        self.y_pred = y_pred
        self.labels = np.unique(np.concatenate([y_true, y_pred]))
        self.matrix = self._build()

    def _build(self) -> np.ndarray:
        n = len(self.labels)
        label_to_idx = {l: i for i, l in enumerate(self.labels)}
        matrix = np.zeros((n, n), dtype=int)
        for t, p in zip(self.y_true, self.y_pred):
            matrix[label_to_idx[t], label_to_idx[p]] += 1
        return matrix

    def binary_metrics(self, positive_label=1) -> Dict:
        pos_idx = np.where(self.labels == positive_label)[0][0]
        neg_idx = np.where(self.labels != positive_label)[0][0]
        tp = self.matrix[pos_idx, pos_idx]
        tn = self.matrix[neg_idx, neg_idx]
        fp = self.matrix[neg_idx, pos_idx]
        fn = self.matrix[pos_idx, neg_idx]

        accuracy = (tp + tn) / (tp + tn + fp + fn)
        precision = tp / (tp + fp) if (tp + fp) > 0 else 0.0
        recall = tp / (tp + fn) if (tp + fn) > 0 else 0.0
        f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0.0
        specificity = tn / (tn + fp) if (tn + fp) > 0 else 0.0

        return {
            "accuracy": round(accuracy, 4),
            "precision": round(precision, 4),
            "recall": round(recall, 4),
            "f1_score": round(f1, 4),
            "specificity": round(specificity, 4),
            "tp": int(tp), "tn": int(tn), "fp": int(fp), "fn": int(fn),
        }

    def per_class_metrics(self) -> Dict:
        n = len(self.labels)
        metrics = {}
        for i, label in enumerate(self.labels):
            tp = self.matrix[i, i]
            fp = np.sum(self.matrix[:, i]) - tp
            fn = np.sum(self.matrix[i, :]) - tp
            tn = np.sum(self.matrix) - tp - fp - fn

            precision = tp / (tp + fp) if (tp + fp) > 0 else 0.0
            recall = tp / (tp + fn) if (tp + fn) > 0 else 0.0
            f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0.0

            metrics[str(label)] = {
                "precision": round(precision, 4),
                "recall": round(recall, 4),
                "f1": round(f1, 4),
                "support": int(tp + fn),
            }

        # Macro and weighted averages
        macro_f1 = np.mean([m["f1"] for m in metrics.values()])
        total_support = sum(m["support"] for m in metrics.values())
        weighted_f1 = sum(m["f1"] * m["support"] for m in metrics.values()) / total_support

        return {"per_class": metrics, "macro_f1": round(macro_f1, 4), "weighted_f1": round(weighted_f1, 4)}

    def __repr__(self) -> str:
        header = " " * 10 + "".join(f"{l:^8}" for l in self.labels)
        rows = []
        for i, label in enumerate(self.labels):
            row = f"{str(label):<10}" + "".join(f"{self.matrix[i, j]:^8}" for j in range(len(self.labels)))
            rows.append(row)
        return "Confusion Matrix:\n" + header + "\n" + "\n".join(rows)


y_true = np.array([0, 1, 0, 1, 2, 0, 1, 2, 2, 0])
y_pred = np.array([0, 1, 0, 0, 2, 1, 1, 2, 0, 0])
cm = ConfusionMatrix(y_true, y_pred)
print(cm)
print("Binary metrics:", cm.binary_metrics(positive_label=1))
```

**When to use each metric**:
- Accuracy: balanced classes
- Precision: minimize false positives (spam detection)
- Recall: minimize false negatives (disease screening)
- F1: balanced precision-recall trade-off
- Specificity: correctly identify negatives

---

## 9.3 ROC & AUC

```python
class ROC:
    def __init__(self, y_true: np.ndarray, y_scores: np.ndarray):
        self.y_true = y_true
        self.y_scores = y_scores
        self.fpr: np.ndarray = None
        self.tpr: np.ndarray = None
        self.thresholds: np.ndarray = None
        self.auc: float = None
        self._compute()

    def _compute(self) -> None:
        # Sort by score descending
        pairs = list(zip(self.y_scores, self.y_true))
        pairs.sort(key=lambda x: x[0], reverse=True)

        total_pos = sum(self.y_true)
        total_neg = len(self.y_true) - total_pos

        fpr_list = [0.0]
        tpr_list = [0.0]
        thresh_list = [1.0]

        tp = 0
        fp = 0
        prev_score = pairs[0][0] if pairs else 0

        for score, true_label in pairs:
            if score != prev_score:
                fpr_list.append(fp / total_neg if total_neg > 0 else 0)
                tpr_list.append(tp / total_pos if total_pos > 0 else 0)
                thresh_list.append(score)
                prev_score = score

            if true_label == 1:
                tp += 1
            else:
                fp += 1

        fpr_list.append(1.0)
        tpr_list.append(1.0)
        thresh_list.append(0.0)

        self.fpr = np.array(fpr_list)
        self.tpr = np.array(tpr_list)
        self.thresholds = np.array(thresh_list)

        # Compute AUC via trapezoidal rule
        self.auc = np.trapz(self.tpr, self.fpr)

    def find_optimal_threshold(self) -> Dict:
        youden = self.tpr - self.fpr  # Youden's J statistic
        best_idx = np.argmax(youden)
        return {
            "threshold": self.thresholds[best_idx],
            "tpr": self.tpr[best_idx],
            "fpr": self.fpr[best_idx],
            "youden_j": youden[best_idx],
        }

    def metrics_at_threshold(self, threshold: float) -> Dict:
        preds = (self.y_scores >= threshold).astype(int)
        cm = ConfusionMatrix(self.y_true, preds)
        return cm.binary_metrics()

    def plot_summary(self) -> str:
        return (f"AUC: {self.auc:.4f}\n"
                f"Optimal threshold: {self.find_optimal_threshold()['threshold']:.4f}\n"
                f"TPR at optimal: {self.find_optimal_threshold()['tpr']:.4f}\n"
                f"FPR at optimal: {self.find_optimal_threshold()['fpr']:.4f}")


np.random.seed(42)
y_true_bin = np.random.randint(0, 2, 200)
y_scores = y_true_bin * 0.8 + np.random.rand(200) * 0.3

roc = ROC(y_true_bin, y_scores)
print(roc.plot_summary())
```

**AUC interpretation**: AUC = 0.5 (random), 0.7-0.8 (good), 0.8-0.9 (excellent), >0.9 (outstanding). AUC is threshold-independent and works well for imbalanced data.

---

## 9.4 Multi-Class Metrics

```python
class MultiClassMetrics:
    @staticmethod
    def macro_average(per_class: Dict[str, Dict]) -> Dict:
        n = len(per_class)
        return {
            "precision": np.mean([m["precision"] for m in per_class.values()]),
            "recall": np.mean([m["recall"] for m in per_class.values()]),
            "f1": np.mean([m["f1"] for m in per_class.values()]),
        }

    @staticmethod
    def weighted_average(per_class: Dict[str, Dict]) -> Dict:
        total_support = sum(m["support"] for m in per_class.values())
        return {
            "precision": sum(m["precision"] * m["support"] for m in per_class.values()) / total_support,
            "recall": sum(m["recall"] * m["support"] for m in per_class.values()) / total_support,
            "f1": sum(m["f1"] * m["support"] for m in per_class.values()) / total_support,
        }

    @staticmethod
    def micro_average(y_true: np.ndarray, y_pred: np.ndarray) -> Dict:
        cm = ConfusionMatrix(y_true, y_pred)
        tp = np.trace(cm.matrix)
        total = np.sum(cm.matrix)
        accuracy = tp / total
        # Micro F1 = accuracy for multi-class
        return {"precision": accuracy, "recall": accuracy, "f1": accuracy}


# Test with 3-class data
y_true_3 = np.array([0, 1, 2, 0, 1, 2, 0, 1, 2])
y_pred_3 = np.array([0, 1, 1, 0, 2, 2, 0, 1, 0])
cm3 = ConfusionMatrix(y_true_3, y_pred_3)
per_class = cm3.per_class_metrics()

print("Per-class:", per_class["per_class"])
print("Macro F1:", per_class["macro_f1"])
print("Weighted F1:", per_class["weighted_f1"])
```

**When to use which average**:
- Macro: All classes equally important (rare classes matter)
- Weighted: Accounts for class frequency (common classes matter more)
- Micro: Equivalent to accuracy for multi-class, good for multi-label

---

## 9.5 Learning & Validation Curves

```python
class LearningCurve:
    def compute(self, X: np.ndarray, y: np.ndarray,
                model_class: Any, train_sizes: np.ndarray = None,
                cv: int = 5, **model_kwargs) -> Dict:
        if train_sizes is None:
            train_sizes = np.linspace(0.1, 1.0, 10)

        from sklearn.model_selection import learning_curve
        train_sizes_abs, train_scores, val_scores = learning_curve(
            model_class(**model_kwargs), X, y,
            train_sizes=train_sizes, cv=cv,
            scoring="f1_weighted", random_state=42
        )

        return {
            "train_sizes": train_sizes_abs,
            "train_mean": np.mean(train_scores, axis=1),
            "train_std": np.std(train_scores, axis=1),
            "val_mean": np.mean(val_scores, axis=1),
            "val_std": np.std(val_scores, axis=1),
        }

    def diagnose(self, curve: Dict) -> str:
        gap = curve["train_mean"][-1] - curve["val_mean"][-1]
        val_trend = curve["val_mean"][-1] - curve["val_mean"][0]

        if gap > 0.15:
            return "High variance (overfitting). Add data, reduce complexity, or increase regularization."
        elif curve["train_mean"][-1] < 0.7:
            return "High bias (underfitting). Increase model complexity or add features."
        elif val_trend < 0.05 and curve["val_mean"][-1] > 0.8:
            return "Good fit. Model is likely optimal."
        else:
            return "Mixed diagnosis. Consider cross-validation for more insight."


class ValidationCurve:
    def compute(self, X: np.ndarray, y: np.ndarray,
                model_class: Any, param_name: str,
                param_range: List[Any], cv: int = 5,
                **model_kwargs) -> Dict:
        from sklearn.model_selection import validation_curve
        train_scores, val_scores = validation_curve(
            model_class(**model_kwargs), X, y,
            param_name=param_name, param_range=param_range,
            cv=cv, scoring="f1_weighted", random_state=42
        )

        return {
            "param_values": param_range,
            "train_mean": np.mean(train_scores, axis=1),
            "train_std": np.std(train_scores, axis=1),
            "val_mean": np.mean(val_scores, axis=1),
            "val_std": np.std(val_scores, axis=1),
        }


lc = LearningCurve()
curve = lc.compute(X_cv, y_cv, DecisionTreeClassifier, max_depth=5)
print("Learning curve diagnosis:", lc.diagnose(curve))
```

**Reading learning curves**:
- High bias: both curves converge to low score (underfitting)
- High variance: large gap between curves (overfitting)
- Good fit: curves converge to high score with small gap

---

## 9.6 Model Comparison

```python
class ModelComparison:
    @staticmethod
    def mcnemar_test(y_true: np.ndarray, pred_a: np.ndarray,
                     pred_b: np.ndarray) -> Dict:
        """McNemar's test for paired model comparison"""
        n_01 = np.sum((pred_a != y_true) & (pred_b == y_true))
        n_10 = np.sum((pred_a == y_true) & (pred_b != y_true))

        chi_sq = (abs(n_01 - n_10) - 1) ** 2 / (n_01 + n_10) if (n_01 + n_10) > 0 else 0
        from scipy.stats import chi2
        p_value = 1 - chi2.cdf(chi_sq, 1)

        return {
            "chi_squared": chi_sq,
            "p_value": p_value,
            "significant": p_value < 0.05,
            "model_a_better": n_10 < n_01,
        }

    @staticmethod
    def compare_metrics(models: Dict[str, np.ndarray],
                         y_true: np.ndarray) -> Dict:
        results = {}
        for name, preds in models.items():
            cm = ConfusionMatrix(y_true, preds)
            metrics = cm.binary_metrics(positive_label=1) if len(np.unique(y_true)) == 2 else cm.per_class_metrics()
            results[name] = {
                "accuracy": accuracy_score(y_true, preds),
                "f1": f1_score(y_true, preds, average="weighted"),
            }
        return results


# Compare two models
pred_a = y_true_bin.copy()
pred_b = y_true_bin.copy()
pred_b[:20] = 1 - pred_b[:20]  # Make model b worse

comparison = ModelComparison()
result = comparison.mcnemar_test(y_true_bin, pred_a, pred_b)
print(f"McNemar test: p={result['p_value']:.4f}, significant={result['significant']}")
```

---

## TypeScript Parallel

```typescript
interface CVResult {
  meanAccuracy: number;
  stdAccuracy: number;
  meanF1: number;
  stdF1: number;
}

class CrossValidatorTS {
  kfold<T extends new (...args: any[]) => any>(
    X: number[][], y: number[],
    ModelClass: T, k = 5, modelArgs: any = {}
  ): CVResult {
    const indices = Array.from({ length: X.length }, (_, i) => i);
    const foldSize = Math.floor(X.length / k);
    const accuracies: number[] = [];
    const f1s: number[] = [];

    for (let fold = 0; fold < k; fold++) {
      const testStart = fold * foldSize;
      const testEnd = fold === k - 1 ? X.length : (fold + 1) * foldSize;
      const testIndices = indices.slice(testStart, testEnd);
      const trainIndices = indices.filter((i) => !testIndices.includes(i));

      const XTrain = trainIndices.map((i) => X[i]);
      const yTrain = trainIndices.map((i) => y[i]);
      const XTest = testIndices.map((i) => X[i]);
      const yTest = testIndices.map((i) => y[i]);

      const model = new ModelClass(modelArgs);
      model.fit(XTrain, yTrain);
      const preds = model.predict(XTest);
      const correct = preds.filter((p: number, i: number) => p === yTest[i]).length;
      accuracies.push(correct / yTest.length);
    }

    return {
      meanAccuracy: accuracies.reduce((a, b) => a + b, 0) / accuracies.length,
      stdAccuracy: Math.sqrt(accuracies.reduce((s, a) => s + (a - accuracies.reduce((x, y) => x + y, 0) / accuracies.length) ** 2, 0) / accuracies.length),
      meanF1: 0,
      stdF1: 0,
    };
  }
}
```

## Summary

- K-fold cross-validation provides robust performance estimates; stratified CV preserves class proportions
- Confusion matrix shows TP, TN, FP, FN; all classification metrics derive from these four values
- Accuracy is misleading for imbalanced data; use F1, precision-recall curves, or ROC-AUC
- ROC curve plots TPR vs FPR across thresholds; AUC measures overall discriminative ability
- Multi-class metrics: macro (equal class weight), weighted (proportional to support), micro (global accuracy)
- Learning curves diagnose bias (both curves low) vs variance (large gap between curves)
- Validation curves show how hyperparameters affect training and validation performance
- McNemar's test determines if two models have statistically significant differences
- Always use multiple metrics — no single metric captures all aspects of model performance
- Nested cross-validation provides unbiased performance estimates when tuning hyperparameters

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Imbalanced data | Stratified CV + F1/ROC-AUC | Regular CV + accuracy |
| Hyperparameter tuning | Nested CV or train-val-test split | Tuning on test data |
| Small dataset | Leave-one-out CV | Single train/test split |
| Time series | TimeSeriesSplit (expanding window) | Random K-fold (leaks future) |
| Model comparison | McNemar's test + multiple metrics | Comparing accuracy alone |

## Interview Q&A

<details class="tp-qa-card" data-qid="ml08-q1"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: What is the difference between K-fold and stratified K-fold?</summary><div class="tp-qa-answer"><p>K-fold randomly splits data into K equal folds. Stratified K-fold splits while preserving class proportions in each fold. Stratified is essential for imbalanced datasets (e.g., 90% class A, 10% class B) because random splits might create folds with no class B samples, making validation impossible. For regression, stratified can be done by binning the target variable into quantiles.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q2"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: How do you read a confusion matrix?</summary><div class="tp-qa-answer"><p>Rows = actual class, columns = predicted class. Diagonal = correct predictions. Off-diagonal = errors. For binary classification: <strong>TP</strong>: actual positive, predicted positive (top-left). <strong>TN</strong>: actual negative, predicted negative (bottom-right). <strong>FP</strong>: actual negative, predicted positive (Type I error). <strong>FN</strong>: actual positive, predicted negative (Type II error). All metrics derive from these: precision = TP/(TP+FP), recall = TP/(TP+FN).</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q3"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: What is AUC and how do you interpret it?</summary><div class="tp-qa-answer"><p>AUC (Area Under the ROC Curve) measures the model's ability to distinguish between positive and negative classes across all classification thresholds. Interpretation: AUC = probability that a randomly chosen positive example ranks higher than a randomly chosen negative example. AUC = 0.5 (random), 0.7-0.8 (acceptable), 0.8-0.9 (excellent), >0.9 (outstanding). AUC is threshold-independent and robust to class imbalance.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q4"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: When is accuracy a misleading metric?</summary><div class="tp-qa-answer"><p>Accuracy is misleading when: <strong>1) Imbalanced data</strong>: 95% accuracy can be worse than a constant "predict majority" baseline if minority class is important. <strong>2) Unequal error costs</strong>: False negatives may be 100x worse than false positives (disease screening). <strong>3) Probabilistic predictions needed</strong>: Accuracy ignores prediction confidence. Use F1, precision-recall, ROC-AUC, or cost-sensitive metrics instead.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q5"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: What do learning curves tell you about your model?</summary><div class="tp-qa-answer"><p>Learning curves plot training and validation scores vs training set size. <strong>High bias</strong> (underfitting): Both curves converge to a low score; adding data won't help. <strong>High variance</strong> (overfitting): Large gap between curves; adding data or regularization helps. <strong>Good fit</strong>: Both curves converge to a high score with small gap. Learning curves guide whether to collect more data, increase complexity, or add regularization.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q6"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: What is the difference between macro and weighted F1?</summary><div class="tp-qa-answer"><p>Macro F1 calculates F1 for each class independently and averages them, giving equal weight to all classes regardless of frequency. Weighted F1 calculates F1 for each class and averages weighted by the number of true samples per class. Macro F1 is preferred when all classes are equally important (even rare ones). Weighted F1 is preferred when you care more about performance on common classes.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q7"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: What is nested cross-validation and why use it?</summary><div class="tp-qa-answer"><p>Nested CV has two loops: outer loop for performance estimation, inner loop for hyperparameter tuning. This prevents data leakage from hyperparameter tuning into the performance estimate. Without nested CV, the test data indirectly influences model selection (through hyperparameters chosen based on test set performance). Nested CV gives an unbiased estimate of the model's true generalization performance.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q8"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: How do you handle multi-class classification metrics?</summary><div class="tp-qa-answer"><p>For multi-class: <strong>1) Per-class</strong>: Compute precision/recall/F1 for each class (one-vs-rest). <strong>2) Macro average</strong>: Average all per-class F1 scores equally. <strong>3) Weighted average</strong>: Average weighted by class support. <strong>4) Micro average</strong>: Global accuracy = TP / total (same as accuracy for single-label). Use confusion matrix to see which classes are confused. Macro F1 penalizes poor performance on rare classes.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q9"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: What is the optimal threshold for binary classification?</summary><div class="tp-qa-answer"><p>The default threshold of 0.5 is not always optimal. To find the optimal threshold: <strong>1) Youden's J</strong>: maximize TPR - FPR (treats errors equally). <strong>2) Cost-based</strong>: minimize (FP*cost_FP + FN*cost_FN) / total. <strong>3) Business constraint</strong>: minimum recall required (e.g., recall > 0.95 for disease screening). Plot precision-recall or TPR-FPR vs threshold to visualize the trade-off.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="ml08-q10"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: How do you compare two models statistically?</summary><div class="tp-qa-answer"><p><strong>McNemar's test</strong>: For paired classification results, counts discordant pairs (model A correct + model B wrong vs vice versa) and tests if the difference is significant. <strong>Paired t-test</strong>: Compare K-fold CV scores across folds (but folds are not independent). <strong>Wilcoxon signed-rank</strong>: Non-parametric alternative for comparing CV scores. Always report: mean score, standard deviation, effect size, and p-value. Statistical significance ≠ practical significance.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

## Chapter Quiz

**Q1**: What does AUC measure?

a) Model accuracy
b) Probability that positive ranks higher than negative
c) Training speed
d) Number of features

<details class="tp-qa-card" data-qid="ml08-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Probability that positive ranks higher than negative</strong></p><p>AUC is the probability that a random positive sample scores higher than a random negative sample.</p></div></details>

**Q2**: Which CV strategy preserves class proportions?

a) K-fold
b) Stratified K-fold
c) Leave-one-out
d) Shuffle split

<details class="tp-qa-card" data-qid="ml08-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Stratified K-fold</strong></p><p>Stratified K-fold ensures each fold has the same class distribution as the full dataset.</p></div></details>

**Q3**: What does a large gap between training and validation scores indicate?

a) Underfitting
b) Overfitting
c) Good fit
d) Data leakage

<details class="tp-qa-card" data-qid="ml08-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Overfitting</strong></p><p>A large gap between training and validation scores is a classic sign of overfitting (high variance).</p></div></details>

**Q4**: Which metric treats all classes equally regardless of frequency?

a) Accuracy
b) Weighted F1
c) Macro F1
d) Micro F1

<details class="tp-qa-card" data-qid="ml08-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Macro F1</strong></p><p>Macro F1 averages per-class F1 scores equally, ignoring class frequency.</p></div></details>

**Q5**: When is leave-one-out cross-validation most appropriate?

a) Large datasets
b) Very small datasets
c) Time series data
d) Image data

<details class="tp-qa-card" data-qid="ml08-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Very small datasets</strong></p><p>LOO uses n-1 samples for training, maximizing data usage for small datasets.</p></div></details>

## Exercises

**Easy** — Compute a confusion matrix for a 3-class problem. Calculate precision, recall, and F1 for each class.

**Easy** — Implement K-fold cross-validation from scratch and compare with sklearn's implementation.

**Medium** — Plot the ROC curve for a binary classifier and find the optimal threshold using Youden's J statistic.

**Hard** — Build a learning curve visualizer. Train models with increasing training set sizes and plot training/validation scores with confidence intervals.

**Hard** — Implement nested cross-validation for hyperparameter tuning. Compare the performance estimate with and without nested CV.

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
- [ ] Have questions ready about how the company uses 08-machine-learning> **Next**: [Hyperparameter Tuning](10-hyperparameter-tuning.md)
