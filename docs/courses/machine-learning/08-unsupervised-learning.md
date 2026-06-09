# Chapter 8: Unsupervised Learning

---

## Learning Objectives

- Define Unsupervised Learning and identify its common use cases
- Implement and analyze the K-means Clustering algorithm
- Explain Hierarchical Clustering and interpret Dendrograms
- Evaluate clustering performance using internal and external metrics

---

## Theory

### What is Unsupervised Learning?
Unsupervised Learning involves training models on data that does not have explicit labels or targets. The goal is to discover underlying structures, patterns, or groupings within the data. Unlike supervised learning, there is no "correct" answer to compare against; instead, we look for data-driven insights.

### K-means Clustering
K-means is a popular centroid-based clustering algorithm. It partitions $n$ observations into $K$ clusters, where each observation belongs to the cluster with the nearest mean (centroid).

**The Algorithm**:
1. **Initialize**: Choose $K$ initial centroids randomly.
2. **Assign**: Assign each data point to the nearest centroid based on Euclidean distance.
3. **Update**: Calculate the mean of all points assigned to each cluster and move the centroid to this new mean.
4. **Repeat**: Steps 2 and 3 until the centroids no longer move significantly (convergence).

**Choosing K**: The "Elbow Method" is often used, where we plot the Within-Cluster Sum of Squares (WCSS) against different values of $K$ and look for the "elbow" point where adding more clusters provides diminishing returns.

### Hierarchical Clustering
Hierarchical clustering builds a tree of clusters. There are two main approaches:
1. **Agglomerative (Bottom-Up)**: Start with each point as its own cluster and merge the closest pairs until only one cluster remains.
2. **Divisive (Top-Down)**: Start with all points in one cluster and recursively split them.

The results are often visualized using a **Dendrogram**, a tree-like diagram that shows the sequence of merges or splits and the distance at which they occurred.

---

## Examples

### Example 1: K-means for Customer Segmentation
Grouping customers based on "Annual Income" and "Spending Score".
```python
from sklearn.cluster import KMeans
import pandas as pd

# Sample data
data = {'Income': [15, 16, 17, 18, 19, 20, 70, 72, 75, 80],
        'Score': [39, 81, 6, 77, 40, 76, 50, 60, 45, 55]}
df = pd.DataFrame(data)

kmeans = KMeans(n_clusters=2, random_state=42)
df['Cluster'] = kmeans.fit_predict(df)

print(df)
```
**Outcome**: Effectively separates low-income individuals from high-income individuals based on the provided metrics.

### Example 2: Hierarchical Clustering Dendrogram
Visualizing relationships in a small dataset.
```python
from scipy.cluster.hierarchy import dendrogram, linkage
import matplotlib.pyplot as plt

X = [[i] for i in [2, 8, 0, 4, 1, 9, 9, 0]]
Z = linkage(X, 'ward')

fig = plt.figure(figsize=(10, 5))
dn = dendrogram(Z)
plt.show()
```
**Interpretation**: The dendrogram shows that 0 and 1 are merged early, while 0 and 9 are merged much later, indicating they are in different clusters.

---

## Summary

- Unsupervised learning finds patterns in unlabeled data.
- K-means is an iterative algorithm that minimizes the distance between points and their cluster centroids.
- The choice of $K$ in K-means is critical and can be guided by the Elbow Method.
- Hierarchical clustering provides a multi-level view of data relationships through dendrograms.
- Linkage criteria (Single, Complete, Average, Ward) determine how distances between clusters are calculated in hierarchical methods.

---

## Exercises

### Review Questions
1. How does K-means differ from K-Nearest Neighbors (KNN)?
2. What are the limitations of the K-means algorithm? (Hint: Consider cluster shapes and outliers).
3. Explain the difference between "Centroid-based" and "Density-based" clustering.
4. What information does a dendrogram provide that a K-means result does not?

### Application Problems
1. Manually perform one iteration of K-means on the points $\{2, 4, 10, 12, 20, 22\}$ with initial centroids $C_1=3$ and $C_2=11$.
2. Given two clusters $C_1 = \{1, 2\}$ and $C_2 = \{5, 6\}$, calculate the distance between them using "Single Linkage" (min distance) and "Complete Linkage" (max distance).
3. If WCSS for $K=1$ is 500, $K=2$ is 200, $K=3$ is 150, and $K=4$ is 140, what is the most likely "elbow" point?

### Challenge Problem
1. Discuss the impact of feature scaling on K-means. Why is it important to normalize data before clustering if the features have different units (e.g., Age in years vs. Income in dollars)?
