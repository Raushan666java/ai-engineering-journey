# Chapter 5: Ensemble Methods

---

## Learning Objectives

- Define Ensemble Learning and the "Wisdom of the Crowd" principle
- Compare and contrast Bagging (Bootstrap Aggregating) and Boosting
- Understand the architecture and benefits of Random Forests
- Explain the mechanics of Gradient Boosting and AdaBoost

---

## Theory

### What is Ensemble Learning?
Ensemble methods combine multiple machine learning models (base learners) to produce a single, stronger model. The goal is to reduce either the bias (as in Boosting) or the variance (as in Bagging) of the overall prediction. Ensembles are among the most powerful techniques in machine learning and frequently win competitions on platforms like Kaggle.

### Bagging: Bootstrap Aggregating
Bagging involves training multiple versions of a model on different subsets of the training data. Each subset is created using **Bootstrapping**â€”sampling with replacement.
1. **Parallel Training**: Multiple models are trained independently in parallel.
2. **Aggregation**: Predictions are combined via voting (for classification) or averaging (for regression).
Bagging primarily reduces **variance** by smoothing out the eccentricities of individual models.

![Bagging vs Boosting](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/machine-learning/ch05-ensemble.png)

### Random Forest
Random Forest is a specialized version of Bagging that uses Decision Trees as base learners. It adds an extra layer of randomness: at each split, only a random subset of features is considered. This ensures that the trees are decorrelated, making the ensemble even more robust.

### Boosting: Sequential Learning
Boosting trains models sequentially. Each new model attempts to correct the errors of the previous ones.
1. **Sequential Training**: Models are trained one after another.
2. **Weighted Samples**: In AdaBoost, samples that were misclassified by previous models are given higher weights.
3. **Residual Learning**: In Gradient Boosting, each model is trained on the residual errors (the difference between the actual and predicted values) of the previous models.
Boosting primarily reduces **bias**, converting weak learners into strong learners.

---

## Examples

### Example 1: Random Forest Classifier
Using Random Forest to classify breast cancer tumors.
```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split

data = load_breast_cancer()
X_train, X_test, y_train, y_test = train_test_split(data.data, data.target)

rf = RandomForestClassifier(n_estimators=100, max_features='sqrt')
rf.fit(X_train, y_train)

print(f"Accuracy: {rf.score(X_test, y_test):.4f}")
```
**Expected Output**: An accuracy significantly higher than that of a single decision tree.

### Example 2: Gradient Boosting for Regression
Predicting California housing prices using Gradient Boosting.
```python
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.datasets import fetch_california_housing

X, y = fetch_california_housing(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y)

gbr = GradientBoostingRegressor(n_estimators=100, learning_rate=0.1)
gbr.fit(X_train, y_train)

print(f"R-squared: {gbr.score(X_test, y_test):.4f}")
```
**Outcome**: Demonstrates how sequential corrections lead to a highly accurate regression model.

---

## Summary

- Ensemble methods improve performance by combining multiple weak learners into a single strong learner.
- Bagging (e.g., Random Forest) reduces variance by averaging predictions from models trained on bootstrapped data.
- Random Forests increase model diversity by randomly selecting features at each tree split.
- Boosting (e.g., XGBoost, Gradient Boosting) reduces bias by focusing on correcting the mistakes of predecessor models.
- While powerful, ensembles can be more computationally expensive and harder to interpret than single models.

---

## Exercises

### Review Questions
1. Explain why "Sampling with Replacement" is critical for the Bagging process.
2. What is the main advantage of Random Forest over a single Decision Tree?
3. How does Boosting handle samples that are difficult to classify?
4. What is the role of the "Learning Rate" in Gradient Boosting?

### Application Problems
1. If you have 100 independent classifiers, each with 70% accuracy, what is the theoretical probability that a majority vote of these classifiers is correct? (Hint: Use the Binomial Distribution).
2. A Random Forest has 50 trees. How many trees must agree for a sample to be classified as the positive class if the threshold is 0.5?
3. In a boosting scenario, if the first model predicts a value of 10 for a target of 15, what value should the second model attempt to predict?

### Challenge Problem
1. Compare Bagging and Boosting in terms of their sensitivity to noise and outliers. Which technique is more likely to overfit if the dataset is extremely noisy? Explain your reasoning.
