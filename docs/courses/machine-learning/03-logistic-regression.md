# Chapter 3: Logistic Regression

---

## Learning Objectives

- Understand the need for Logistic Regression in classification tasks
- Define and apply the Sigmoid (Logistic) Function
- Derive the Cross-Entropy Loss function
- Interpret model outputs as probabilities and apply decision thresholds

---

## Theory

### Classification vs. Regression
Linear regression is designed for continuous outputs. However, many real-world problems require predicting discrete classes (e.g., "Yes" or "No"). Using linear regression for classification can lead to outputs outside the $[0, 1]$ range and is highly sensitive to outliers. Logistic Regression solves this by mapping any real-valued number into a probability.

### The Sigmoid Function
The core of Logistic Regression is the sigmoid function, denoted by $\sigma(z)$:
$$\sigma(z) = \frac{1}{1 + e^{-z}}$$
Where $z = \mathbf{w}^T\mathbf{x}$. The output of $\sigma(z)$ is always between 0 and 1. We interpret the output as the probability that the given input belongs to the positive class:
$$P(y=1 | x; w) = h_w(x) = \sigma(\mathbf{w}^T\mathbf{x})$$

### Decision Boundary
A model makes a prediction by comparing the probability $h_w(x)$ to a threshold (usually 0.5):
- If $h_w(x) \geq 0.5$, predict $y=1$ (Positive).
- If $h_w(x) < 0.5$, predict $y=0$ (Negative).
The set of points where $\mathbf{w}^T\mathbf{x} = 0$ is called the decision boundary.

![Logistic Regression Flow](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/machine-learning/ch03-logistic-regression.png)

### Logistic Loss (Cross-Entropy)
We cannot use MSE for logistic regression because the resulting cost function would be non-convex, making Gradient Descent difficult. Instead, we use the Log Loss or Binary Cross-Entropy Loss:
$$J(w) = -\frac{1}{n} \sum_{i=1}^{n} [y^{(i)} \log(h_w(x^{(i)})) + (1 - y^{(i)}) \log(1 - h_w(x^{(i)}))]$$
This function penalizes incorrect predictions heavily. When $y=1$, the cost increases as $h_w(x)$ approaches 0. When $y=0$, the cost increases as $h_w(x)$ approaches 1.

---

## Examples

### Example 1: Predicting Exam Pass/Fail
Predicting if a student passes ($y=1$) or fails ($y=0$) based on hours studied.
- **Model**: $z = w_0 + w_1(Hours)$
- **Hypothesis**: $h_w(x) = \frac{1}{1 + e^{-z}}$
- **Scenario**: If $w_0 = -5$ and $w_1 = 1$, for 6 hours of study, $z = -5 + 6 = 1$.
- **Calculation**: $h_w(6) = \sigma(1) \approx 0.73$.
- **Result**: 73% probability of passing; predict "Pass".

### Example 2: Scikit-learn Implementation
```python
from sklearn.linear_model import LogisticRegression
import numpy as np

# Hours studied vs Result (0: Fail, 1: Pass)
X = np.array([[1], [2], [3], [4], [5], [6]]).reshape(-1, 1)
y = np.array([0, 0, 0, 1, 1, 1])

clf = LogisticRegression().fit(X, y)
print(f"Probability at 3.5 hours: {clf.predict_proba([[3.5]])[0][1]}")
```
**Output**: Provides the probability of class 1 for a student who studied 3.5 hours.

---

## Summary

- Logistic Regression is a fundamental algorithm for binary classification problems.
- The Sigmoid function maps linear outputs into a valid probability range $[0, 1]$.
- The decision boundary separates the feature space into regions belonging to different classes.
- Binary Cross-Entropy is the standard loss function for classification, ensuring a convex optimization surface.
- The model can be extended to multi-class classification using the Softmax function (Multinomial Logistic Regression).

---

## Exercises

### Review Questions
1. Why is the sigmoid function useful for classification tasks?
2. What is the difference between the model's output $h_w(x)$ and the final prediction?
3. If $h_w(x) = 0.5$ for a specific input, what can you say about that point in relation to the decision boundary?
4. How does the cross-entropy loss function behave when the predicted probability is 0.99 for a sample where $y=1$?

### Application Problems
1. Calculate the sigmoid value for $z = -2.2$.
2. Given $w_0 = -3$ and $w_1 = 1.5$, find the value of $x$ that defines the decision boundary.
3. Compute the loss for a single training example where $y=1$ and $h_w(x) = 0.8$.

### Challenge Problem
1. Show that the derivative of the sigmoid function $\sigma(z)$ can be expressed as $\sigma(z)(1 - \sigma(z))$. How does this property simplify the gradient calculation in backpropagation?
