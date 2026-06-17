# Chapter 9: Machine Learning: Learning from Examples

---

## Learning Objectives

- Define the core goals of Machine Learning and the different types of learning (Supervised, Unsupervised, Reinforcement).
- Explain the concept of "induction" and the importance of inductive bias.
- Analyze the Decision Tree learning algorithm and the use of Information Gain.
- Discuss the "Bias-Variance Tradeoff" and its impact on model generalization.
- Understand the methodology for evaluating models using training, validation, and test sets.

---

## Theory

![Machine Learning](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/artificial-intelligence/ch09-machine-learning.png)

### What is Machine Learning?
Machine Learning (ML) is the study of algorithms that improve their performance $P$ at some task $T$ with experience $E$.
- **Supervised Learning**: The agent learns a function from input-output pairs (labels provided).
- **Unsupervised Learning**: The agent learns patterns in the data without explicit labels (e.g., clustering).
- **Reinforcement Learning**: The agent learns by interacting with an environment and receiving rewards or penalties.

### Inductive Learning
The goal of inductive learning is to find a hypothesis $h$ that approximates the true function $f$ using only a finite set of examples. Because many hypotheses can fit the data, the agent must have an **inductive bias**—a preference for one type of hypothesis over another (e.g., Occam's Razor prefers simpler hypotheses).

### Decision Trees
A Decision Tree is a flowchart-like structure where each internal node represents a "test" on an attribute, each branch represents the outcome of the test, and each leaf node represents a class label.
- **Entropy**: A measure of impurity or randomness in a set of examples.
- **Information Gain**: The reduction in entropy achieved by partitioning the data based on a specific attribute. The algorithm chooses the attribute that maximizes this gain.

### Generalization and Overfitting
- **Underfitting**: The model is too simple to capture the underlying structure (High Bias).
- **Overfitting**: The model is too complex and captures the noise in the training data rather than the true pattern (High Variance).
- **Generalization**: The ability of a model to perform well on unseen data.

---

## Examples

### Example 1: Decision Tree for "Should I play Tennis?"
The dataset contains attributes like `Outlook`, `Humidity`, and `Wind`, with a label `Play`.
- **Step-by-step**:
  1. Calculate the entropy of the entire dataset.
  2. For each attribute, calculate the Information Gain.
  3. If `Outlook` has the highest gain, make it the root node.
  4. Repeat the process for each branch until all examples in a node belong to the same class.
- **Code snippet (Python with Scikit-Learn)**:
```python
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# X = [Outlook, Humidity, Wind] (Encoded)
X = np.array([[0, 0, 0], [0, 1, 1], [1, 0, 0], [1, 1, 0]])
y = np.array([0, 1, 1, 1]) # Play?

clf = DecisionTreeClassifier(criterion='entropy')
clf.fit(X, y)
print(f"Prediction for [0, 1, 0]: {clf.predict([[0, 1, 0]])}")
```
- **What it demonstrates**: How a classifier is trained on historical data to make predictions on new data.

### Example 2: Linear Regression for Housing Prices
Predict the price of a house based on its square footage.
- **Hypothesis**: $Price = w_1 \times Area + w_0$.
- **Learning**: Use **Gradient Descent** to minimize the Mean Squared Error (MSE) between the predicted price and the actual price in the training set.
- **What it demonstrates**: A simple form of supervised learning for continuous values (regression).

---

## Summary

- Machine Learning shifts the focus from manual rule-writing to automated pattern discovery.
- Supervised learning is the most common paradigm for classification and regression.
- Decision trees are intuitive models that use information theory to split data effectively.
- Overfitting is a primary challenge; it occurs when a model is "memorizing" rather than "learning."
- Effective ML requires careful data preprocessing and rigorous evaluation.
- The choice of hypothesis space and inductive bias determines the success of a learning agent.

---

## Exercises

### Review Questions
1. Differentiate between Classification and Regression.
2. What is "Ockham's Razor" and how does it relate to machine learning?
3. Define "Entropy" in the context of information theory.
4. Why should you never evaluate a model's performance using the training set?

### Application Problems
1. Calculate the entropy of a set with 4 "Yes" and 6 "No" examples.
2. Given a dataset, why might you choose a simple linear model over a complex high-degree polynomial, even if the polynomial has zero training error?
3. List three examples of real-world applications for Unsupervised Learning.

### Challenge Problem
1. **The Curse of Dimensionality**: Explain how adding more features can actually degrade the performance of a machine learning model. How does the amount of data required to maintain density change as the number of dimensions increases?
