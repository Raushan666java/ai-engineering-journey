# Chapter 9: Dimensionality Reduction

---

## Learning Objectives

- Define the "Curse of Dimensionality" and its impact on machine learning
- Explain the geometric and algebraic intuition behind Principal Component Analysis (PCA)
- Calculate and interpret the "Explained Variance Ratio"
- Identify scenarios for using dimensionality reduction in preprocessing

---

## Theory

### The Curse of Dimensionality
As the number of features (dimensions) increases, the volume of the feature space increases exponentially. This causes the data points to become sparse, making it difficult for algorithms to find patterns and increasing the risk of overfitting. Dimensionality reduction aims to reduce the number of features while retaining as much information as possible.

### Principal Component Analysis (PCA)
PCA is a linear transformation technique used for feature extraction and dimensionality reduction. It identifies the directions (principal components) along which the variation in the data is maximal.

**Algebraic Intuition**:
1. **Center the Data**: Subtract the mean from each feature.
2. **Compute Covariance Matrix**: Calculate how much each feature varies with every other feature.
3. **Eigen-decomposition**: Find the eigenvectors and eigenvalues of the covariance matrix.
   - **Eigenvectors** represent the directions of the new feature space.
   - **Eigenvalues** represent the magnitude of variance in those directions.
4. **Project Data**: Choose the top $k$ eigenvectors with the largest eigenvalues and project the original data onto them.

### Explained Variance Ratio
The explained variance ratio tells us how much information (variance) each principal component carries. By summing the ratios of the top components, we can determine how many dimensions are needed to retain, for example, 95% of the original variance.

### Other Techniques (t-SNE and UMAP)
While PCA is linear, other techniques like t-Distributed Stochastic Neighbor Embedding (t-SNE) and Uniform Manifold Approximation and Projection (UMAP) are non-linear. They are primarily used for visualizing high-dimensional data in 2D or 3D by preserving local relationships between points.

---

## Examples

### Example 1: PCA on Iris Dataset
Reducing 4 dimensions to 2 for visualization.
```python
from sklearn.decomposition import PCA
from sklearn.datasets import load_iris
import pandas as pd

iris = load_iris()
X = iris.data

pca = PCA(n_components=2)
X_pca = pca.fit_predict(X)

print(f"Original shape: {X.shape}")
print(f"Reduced shape: {X_pca.shape}")
print(f"Explained Variance: {pca.explained_variance_ratio_}")
```
**Outcome**: Reduces the feature space to two components while keeping over 95% of the variance, allowing for a clear 2D plot of the flower species.

### Example 2: Reconstructing an Image
Using PCA to compress an image of a handwritten digit.
- **Process**: Perform PCA on the pixels of the image, keep only the top 10% of components.
- **Result**: The reconstructed image is slightly blurry but clearly recognizable, demonstrating that most information is contained in a small number of components.

---

## Summary

- Dimensionality reduction mitigates the curse of dimensionality and improves model efficiency.
- PCA is a linear technique that finds the directions of maximum variance in the data.
- Principal components are orthogonal to each other.
- The explained variance ratio helps in choosing the optimal number of components.
- Reducing dimensions can help in data visualization and removing noise from the signal.

---

## Exercises

### Review Questions
1. Why is it important to center and scale the data before performing PCA?
2. What is the relationship between the first and second principal components?
3. In what way does PCA act as a "lossy" compression technique?
4. When would you prefer t-SNE over PCA for visualization?

### Application Problems
1. A dataset has eigenvalues $\{10, 5, 2, 1\}$. Calculate the percentage of variance explained by the first two principal components.
2. If you have 100 features and you keep 10 principal components, how much compression (as a ratio) have you achieved?
3. Draw a 2D plot with points elongated along the line $y=x$. Where would the first principal component point?

### Challenge Problem
1. Mathematically, PCA can be solved using Singular Value Decomposition (SVD). Explain the relationship between the singular values of the data matrix $\mathbf{X}$ and the eigenvalues of the covariance matrix $\mathbf{X}^T\mathbf{X}$.
