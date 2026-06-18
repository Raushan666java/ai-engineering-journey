# Chapter 6: Support Vector Machines

---

## Learning Objectives

- Explain the concept of the Maximum Margin Hyperplane
- Identify "Support Vectors" and their role in defining the model
- Differentiate between Hard-margin and Soft-margin SVMs
- Apply the "Kernel Trick" to handle non-linearly separable data

---

## Theory

### The Maximum Margin Hyperplane
A Support Vector Machine (SVM) is a discriminative classifier that finds an optimal hyperplane to separate classes in a feature space. While many hyperplanes can separate classes, SVM seeks the one with the maximum **margin**. The margin is the distance between the hyperplane and the closest data points from either class.

The hyperplane is defined by the equation:
$$\mathbf{w}^T\mathbf{x} + b = 0$$
We want to maximize the margin, which is equivalent to minimizing $\|\mathbf{w}\|$ subject to:
$$y^{(i)}(\mathbf{w}^T\mathbf{x}^{(i)} + b) \geq 1$$
For all training examples $i$.

### Support Vectors
Support Vectors are the data points that lie exactly on the boundary of the margin. These are the "critical" points; if they were removed, the position of the separating hyperplane would change. Points that lie further away from the margin do not affect the model's parameters.

### Hard vs. Soft Margin
- **Hard Margin**: Assumes the data is perfectly linearly separable. It does not allow any points to be inside the margin or misclassified.
- **Soft Margin**: Introduced to handle noisy or non-linearly separable data. It allows some violations (points inside the margin or misclassified) while minimizing a penalty term controlled by the hyperparameter $C$. A high $C$ penalizes misclassifications heavily (narrower margin), while a low $C$ allows more errors (wider margin).

### The Kernel Trick
When data is not linearly separable in the original space, we can map it into a higher-dimensional space where a linear separation is possible. However, computing this mapping explicitly is expensive. The **Kernel Trick** allows us to compute the dot product of two vectors in the high-dimensional space without ever actually transforming the data.

Common kernels include:
- **Linear**: $K(x_i, x_j) = x_i \cdot x_j$
- **Polynomial**: $K(x_i, x_j) = (x_i \cdot x_j + r)^d$
- **Radial Basis Function (RBF)**: $K(x_i, x_j) = \exp(-\gamma \|x_i - x_j\|^2)$

![SVM and Kernel Trick](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/machine-learning/ch06-svm.png)

---

## Examples

### Example 1: Linear SVM
Classifying two groups of points that are clearly separated.
```python
from sklearn.svm import SVC
import numpy as np

# Training data
X = np.array([[1, 2], [5, 8], [1.5, 1.8], [8, 8], [1, 0.6], [9, 11]])
y = np.array([0, 1, 0, 1, 0, 1])

clf = SVC(kernel='linear', C=1.0)
clf.fit(X, y)

print(f"Support Vectors: \n{clf.support_vectors_}")
```
**Outcome**: Identifies the support vectors and defines the linear decision boundary.

### Example 2: Non-linear separation with RBF Kernel
Classifying data that is arranged in concentric circles.
- **Problem**: A straight line cannot separate the inner circle from the outer circle.
- **Solution**: Use `kernel='rbf'`.
- **Result**: The SVM creates a circular decision boundary in the 2D space by implicitly mapping the data into a higher dimension.

---

## Summary

- SVMs are powerful classifiers that aim to maximize the margin between classes.
- Support Vectors are the subset of training points that define the model's decision boundary.
- The $C$ parameter balances the tradeoff between a wide margin and low training error (regularization).
- The Kernel Trick allows SVMs to perform non-linear classification efficiently by mapping inputs into high-dimensional feature spaces.
- RBF is the most popular kernel due to its flexibility in handling complex boundaries.

---

## Exercises

### Review Questions
1. Why is a "larger margin" generally better for generalization on unseen data?
2. What happens to the SVM decision boundary as the parameter $C$ increases toward infinity?
3. In your own words, explain how the Kernel Trick avoids the "curse of dimensionality."
4. What is the difference between a primal and a dual optimization problem in the context of SVMs?

### Application Problems
1. You have a dataset where the points are $(1, 1), (2, 2)$ in Class A and $(5, 5), (6, 6)$ in Class B. Roughly sketch the maximum margin hyperplane and identify the support vectors.
2. If you use a Polynomial kernel with $d=2$ on 2D data, how many dimensions will the data effectively have in the feature space?
3. A Soft-margin SVM has several points that fall on the "wrong side" of the margin but are correctly classified. Are these points considered support vectors?

### Challenge Problem
1. Compare SVM and Logistic Regression. In what situations would you prefer one over the other? Consider factors like dataset size, number of features, and the presence of outliers.
