# Chapter 10: Model Selection and Evaluation

---

## Learning Objectives

- Define and differentiate between Bias and Variance (The Bias-Variance Tradeoff)
- Apply Cross-Validation techniques (K-fold, Leave-one-out) for robust evaluation
- Interpret various performance metrics: Accuracy, Precision, Recall, F1-Score, and ROC-AUC
- Implement Hyperparameter Tuning using Grid Search and Random Search

---

## Theory

### The Bias-Variance Tradeoff
The performance of a machine learning model is governed by two sources of error:
1. **Bias**: Error due to overly simplistic assumptions in the learning algorithm. High bias can cause the model to miss relevant relations between features and target (Underfitting).
2. **Variance**: Error due to excessive sensitivity to small fluctuations in the training set. High variance can cause the model to model the random noise in the training data (Overfitting).
The goal of model selection is to find the "sweet spot" that minimizes the total error.

### Cross-Validation
Evaluating a model on the same data it was trained on gives a biased estimate of performance. Cross-validation solves this by partitioning the data into multiple sets.
- **K-fold Cross-Validation**: The data is split into $K$ equal-sized folds. The model is trained $K$ times, each time using $K-1$ folds for training and the remaining fold for testing. The final performance is the average of all $K$ trials.

### Performance Metrics for Classification
- **Accuracy**: $(TP+TN) / (TP+TN+FP+FN)$. Simple but misleading for imbalanced datasets.
- **Precision**: $TP / (TP+FP)$. "Of all predicted positives, how many were actually positive?"
- **Recall (Sensitivity)**: $TP / (TP+FN)$. "Of all actual positives, how many were correctly predicted?"
- **F1-Score**: Harmonic mean of Precision and Recall. $2 \cdot \frac{Precision \cdot Recall}{Precision + Recall}$.
- **ROC-AUC**: The Area Under the Receiver Operating Characteristic Curve. It measures the model's ability to distinguish between classes across all possible thresholds.

### Hyperparameter Tuning
Hyperparameters are parameters set before training (e.g., learning rate, max depth).
- **Grid Search**: Exhaustive search over a specified subset of the hyperparameter space.
- **Random Search**: Randomly samples the hyperparameter space, often reaching a good solution much faster than Grid Search.

![Model Evaluation Workflow](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/machine-learning/ch10-evaluation.png)

---

## Examples

### Example 1: Confusion Matrix Interpretation
A medical test for a disease.
- **Data**: 100 people tested. 10 have the disease.
- **Predictions**: Model identifies 8 correctly (TP), misses 2 (FN), and incorrectly identifies 5 healthy people as having the disease (FP).
- **Recall**: $8/10 = 0.8$. (Good, we caught 80% of cases).
- **Precision**: $8/(8+5) = 0.61$. (Moderate, many false alarms).
- **Summary**: In medicine, high Recall is often prioritized over Precision.

### Example 2: K-fold Cross-Validation with Scikit-learn
```python
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_digits

digits = load_digits()
X, y = digits.data, digits.target

clf = RandomForestClassifier(n_estimators=50)
scores = cross_val_score(clf, X, y, cv=5)

print(f"Mean Accuracy: {scores.mean():.4f}")
print(f"Standard Deviation: {scores.std():.4f}")
```
**Outcome**: Provides a reliable estimate of the model's performance on unseen data by averaging results across five different data splits.

---

## Summary

- The bias-variance tradeoff is a central challenge in machine learning.
- Overfitting occurs when a model is too complex (high variance); underfitting occurs when it is too simple (high bias).
- K-fold cross-validation is the industry standard for estimating model generalization performance.
- Accuracy is often an insufficient metric; Precision, Recall, and F1-score provide a more nuanced view, especially in imbalanced cases.
- Systematic hyperparameter tuning is necessary to maximize the performance of a chosen algorithm.

---

## Exercises

### Review Questions
1. Draw a graph showing the training error and validation error as model complexity increases. Mark the regions of underfitting and overfitting.
2. Why is the harmonic mean used in the F1-score instead of the arithmetic mean?
3. What is the difference between a "validation set" and a "test set"?
4. In what scenario would you prioritize Precision over Recall? Provide a real-world example.

### Application Problems
1. A model has $TP=40, FP=10, FN=20, TN=30$. Calculate Precision, Recall, and F1-score.
2. You are performing 5-fold cross-validation on a dataset of 1,000 samples. How many samples are in the training set and validation set for each fold?
3. If your training error is 2% and your validation error is 15%, is your model suffering from high bias or high variance?

### Challenge Problem
1. Explain the "Receiver Operating Characteristic" (ROC) curve. What do the axes represent, and what does a 45-degree diagonal line represent in terms of model performance?
