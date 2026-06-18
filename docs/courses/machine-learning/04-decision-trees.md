# Chapter 4: Decision Trees

---

## Learning Objectives

- Explain the structure of a Decision Tree (nodes, branches, leaves)
- Calculate and compare splitting criteria: Entropy, Information Gain, and Gini Impurity
- Describe the recursive splitting process (ID3 and CART algorithms)
- Identify and mitigate overfitting using pruning and hyperparameters

---

## Theory

### What is a Decision Tree?
A Decision Tree is a flowchart-like structure used for both classification and regression. Each internal node represents a "test" on an attribute (e.g., "Is Age > 30?"), each branch represents the outcome of the test, and each leaf node represents a class label or a continuous value. Decision trees are highly interpretable because they mimic human decision-making.

![Decision Tree Structure](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/machine-learning/ch04-decision-tree.png)

### Splitting Criteria: Entropy and Information Gain
To build an effective tree, we need a way to choose the best feature to split on at each node. We want splits that result in "pure" subsets (where all examples belong to the same class).

**Entropy** measures the impurity or disorder in a dataset $S$:
$$H(S) = -\sum_{i=1}^{c} p_i \log_2 p_i$$
Where $p_i$ is the proportion of examples belonging to class $i$.

**Information Gain** is the reduction in entropy after splitting on attribute $A$:
$$IG(S, A) = H(S) - \sum_{v \in Values(A)} \frac{|S_v|}{|S|} H(S_v)$$
We choose the attribute $A$ that maximizes Information Gain.

### Splitting Criteria: Gini Impurity
Gini Impurity is an alternative used by the CART algorithm. it measures the probability of a randomly chosen element being incorrectly labeled if it was randomly labeled according to the distribution of labels in the subset:
$$Gini(S) = 1 - \sum_{i=1}^{c} p_i^2$$
Gini is computationally faster than entropy because it doesn't involve logarithmic calculations.

### Recursive Splitting and Stopping
The tree is built recursively by choosing the best split and repeating the process for child nodes. The process stops when:
1. All nodes are pure (all examples belong to one class).
2. A maximum depth is reached.
3. The number of samples in a node is below a threshold.

---

## Examples

### Example 1: To Play or Not to Play Golf
Deciding whether to play golf based on "Outlook" (Sunny, Overcast, Rainy).
- **Initial Entropy**: If 9 days played and 5 didn't, $H(S) = -(9/14)\log_2(9/14) - (5/14)\log_2(5/14) = 0.940$.
- **Overcast Split**: All 4 "Overcast" days resulted in "Play". Entropy of this subset is 0.
- **Sunny/Rainy Splits**: Higher entropy, requiring further splits on variables like "Humidity" or "Wind".
- **Result**: A tree that accurately predicts the outcome for new days.

### Example 2: Scikit-learn Classifier
```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris

iris = load_iris()
X, y = iris.data, iris.target

clf = DecisionTreeClassifier(max_depth=3)
clf.fit(X, y)

# Predict the class of a new flower
prediction = clf.predict([[5.1, 3.5, 1.4, 0.2]])
print(f"Predicted class: {iris.target_names[prediction]}")
```
**Output**: Shows how the tree classifies a sample based on sepal/petal measurements.

---

## Summary

- Decision Trees partition the feature space into rectangular regions via a series of binary or multi-way splits.
- Entropy and Gini Impurity are the most common metrics for evaluating split quality.
- Information Gain selects features that most reduce uncertainty.
- Overfitting is a significant risk; a tree that is too deep will memorize the training data.
- Hyperparameters like `max_depth` and `min_samples_split` are crucial for controlling tree complexity.

---

## Exercises

### Review Questions
1. Define a "leaf node" and explain its role in a Decision Tree.
2. What is the maximum possible value for Gini Impurity in a two-class classification problem?
3. Why might a Decision Tree perform poorly on a dataset with very small training samples?
4. Explain the difference between "Pre-pruning" and "Post-pruning".

### Application Problems
1. Calculate the entropy of a collection with 10 positive and 10 negative examples.
2. A dataset has 4 "True" and 1 "False" labels. Calculate the Gini Impurity.
3. If a split results in two child nodes with zero entropy, what can you conclude about the Information Gain of that split?

### Challenge Problem
1. Decision Trees are often criticized for being "unstable" (a small change in the data can result in a completely different tree). Explain why this happens and how ensemble methods might solve this.
