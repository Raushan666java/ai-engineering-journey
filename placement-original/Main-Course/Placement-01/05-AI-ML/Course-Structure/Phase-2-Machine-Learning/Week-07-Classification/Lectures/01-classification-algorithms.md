# Week 7: Classification Algorithms

## 📚 Learning Objectives
- Master classification concepts
- Implement logistic regression
- Build decision trees & random forests
- Apply SVM and Naive Bayes
- Evaluate classification models

---

## Classification Fundamentals

### What is Classification?
Predicting discrete categorical outcomes:
- Binary: Spam/Not Spam, Disease/No Disease
- Multi-class: Digit recognition (0-9), Product categories
- Multi-label: Tag prediction, emotion detection

### Key Metrics
```python
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.metrics import confusion_matrix, classification_report

# Accuracy: (TP + TN) / Total
accuracy = accuracy_score(y_true, y_pred)

# Precision: TP / (TP + FP)
precision = precision_score(y_true, y_pred)

# Recall (Sensitivity): TP / (TP + FN)
recall = recall_score(y_true, y_pred)

# F1 Score: Harmonic mean of precision and recall
f1 = f1_score(y_true, y_pred)

# Confusion Matrix
cm = confusion_matrix(y_true, y_pred)
print(classification_report(y_true, y_pred))
```

---

## Logistic Regression

### Theory
**Sigmoid Function:**
$$\sigma(z) = \frac{1}{1 + e^{-z}}$$

**Hypothesis:**
$$h_\theta(x) = \sigma(\theta^T x) = \frac{1}{1 + e^{-\theta^T x}}$$

**Cost Function (Log Loss):**
$$J(\theta) = -\frac{1}{m} \sum_{i=1}^{m} [y^{(i)} \log(h_\theta(x^{(i)})) + (1-y^{(i)}) \log(1-h_\theta(x^{(i)}))]$$

### Implementation

```python
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_breast_cancer
import numpy as np
import matplotlib.pyplot as plt

# Load dataset
data = load_breast_cancer()
X, y = data.data, data.target

# Split and scale
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train model
logreg = LogisticRegression(max_iter=1000, random_state=42)
logreg.fit(X_train_scaled, y_train)

# Predictions
y_pred = logreg.predict(X_test_scaled)
y_pred_proba = logreg.predict_proba(X_test_scaled)[:, 1]

# Evaluation
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
from sklearn.metrics import roc_curve, roc_auc_score

print("Accuracy:", accuracy_score(y_test, y_pred))
print("\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))
print("\nClassification Report:")
print(classification_report(y_test, y_pred))

# ROC Curve
fpr, tpr, thresholds = roc_curve(y_test, y_pred_proba)
auc = roc_auc_score(y_test, y_pred_proba)

plt.figure(figsize=(8, 6))
plt.plot(fpr, tpr, label=f'ROC Curve (AUC = {auc:.2f})')
plt.plot([0, 1], [0, 1], 'k--', label='Random Classifier')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('ROC Curve')
plt.legend()
plt.grid(True)
plt.show()
```

---

## Decision Trees

### How Decision Trees Work
1. Select best feature using criterion (Gini/Entropy)
2. Split data based on threshold
3. Repeat recursively for each subset
4. Stop when max_depth or min_samples reached

### Gini Impurity vs Entropy

**Gini:**
$$Gini = 1 - \sum_{i=1}^{C} p_i^2$$

**Entropy:**
$$Entropy = -\sum_{i=1}^{C} p_i \log_2(p_i)$$

### Implementation

```python
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.datasets import load_iris

# Load data
iris = load_iris()
X, y = iris.data, iris.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train decision tree
dt = DecisionTreeClassifier(
    criterion='gini',
    max_depth=3,
    min_samples_split=2,
    random_state=42
)
dt.fit(X_train, y_train)

# Evaluate
y_pred = dt.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))
print("\nFeature Importances:")
for name, importance in zip(iris.feature_names, dt.feature_importances_):
    print(f"{name}: {importance:.4f}")

# Visualize tree
plt.figure(figsize=(20, 10))
plot_tree(dt, feature_names=iris.feature_names, class_names=iris.target_names, filled=True)
plt.show()
```

---

## Random Forest

### Ensemble Learning
- Build multiple decision trees
- Each tree trained on random subset (bootstrap)
- Each split uses random features
- Combine predictions (voting/averaging)

### Implementation

```python
from sklearn.ensemble import RandomForestClassifier

# Train Random Forest
rf = RandomForestClassifier(
    n_estimators=100,
    max_depth=10,
    min_samples_split=2,
    random_state=42
)
rf.fit(X_train, y_train)

# Evaluate
y_pred_rf = rf.predict(X_test)
print("Random Forest Accuracy:", accuracy_score(y_test, y_pred_rf))

# Feature importance
importances = pd.DataFrame({
    'feature': iris.feature_names,
    'importance': rf.feature_importances_
}).sort_values('importance', ascending=False)

plt.figure(figsize=(10, 6))
plt.barh(importances['feature'], importances['importance'])
plt.xlabel('Importance')
plt.title('Feature Importance - Random Forest')
plt.show()
```

---

## Support Vector Machines (SVM)

### Theory
Find hyperplane that maximizes margin between classes

**Linear SVM:**
- Find optimal separating hyperplane
- Maximize margin between support vectors

**Kernel Trick:**
- Transform to higher dimensions
- Common kernels: linear, polynomial, RBF, sigmoid

### Implementation

```python
from sklearn.svm import SVC

# Linear SVM
svm_linear = SVC(kernel='linear', C=1.0, random_state=42)
svm_linear.fit(X_train_scaled, y_train)
print("Linear SVM Accuracy:", svm_linear.score(X_test_scaled, y_test))

# RBF Kernel SVM
svm_rbf = SVC(kernel='rbf', C=1.0, gamma='scale', random_state=42)
svm_rbf.fit(X_train_scaled, y_train)
print("RBF SVM Accuracy:", svm_rbf.score(X_test_scaled, y_test))

# Polynomial Kernel
svm_poly = SVC(kernel='poly', degree=3, C=1.0, random_state=42)
svm_poly.fit(X_train_scaled, y_train)
print("Polynomial SVM Accuracy:", svm_poly.score(X_test_scaled, y_test))
```

---

## Naive Bayes

### Bayes' Theorem
$$P(y|X) = \frac{P(X|y) \cdot P(y)}{P(X)}$$

### Types
1. **Gaussian NB:** Continuous features (normal distribution)
2. **Multinomial NB:** Discrete counts (text classification)
3. **Bernoulli NB:** Binary features

### Implementation

```python
from sklearn.naive_bayes import GaussianNB, MultinomialNB

# Gaussian Naive Bayes
gnb = GaussianNB()
gnb.fit(X_train, y_train)
print("Gaussian NB Accuracy:", gnb.score(X_test, y_test))

# Text classification example with Multinomial NB
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.datasets import fetch_20newsgroups

# Load text data
categories = ['alt.atheism', 'soc.religion.christian', 'comp.graphics', 'sci.med']
newsgroups_train = fetch_20newsgroups(subset='train', categories=categories)
newsgroups_test = fetch_20newsgroups(subset='test', categories=categories)

# Vectorize text
vectorizer = CountVectorizer()
X_train_counts = vectorizer.fit_transform(newsgroups_train.data)
X_test_counts = vectorizer.transform(newsgroups_test.data)

# Train Multinomial NB
mnb = MultinomialNB()
mnb.fit(X_train_counts, newsgroups_train.target)
print("Multinomial NB Accuracy:", mnb.score(X_test_counts, newsgroups_test.target))
```

---

## Model Comparison Project

```python
from sklearn.model_selection import cross_val_score
import pandas as pd

class ClassifierComparison:
    """Compare multiple classification algorithms"""
    
    def __init__(self, X, y):
        self.X = X
        self.y = y
        self.results = {}
    
    def compare_models(self):
        """Train and compare different classifiers"""
        
        # Define models
        models = {
            'Logistic Regression': LogisticRegression(max_iter=1000),
            'Decision Tree': DecisionTreeClassifier(max_depth=5),
            'Random Forest': RandomForestClassifier(n_estimators=100),
            'SVM (Linear)': SVC(kernel='linear'),
            'SVM (RBF)': SVC(kernel='rbf'),
            'Naive Bayes': GaussianNB()
        }
        
        # Train and evaluate
        for name, model in models.items():
            # Cross-validation
            scores = cross_val_score(model, self.X, self.y, cv=5, scoring='accuracy')
            
            self.results[name] = {
                'mean_accuracy': scores.mean(),
                'std_accuracy': scores.std(),
                'min_accuracy': scores.min(),
                'max_accuracy': scores.max()
            }
        
        # Create results DataFrame
        results_df = pd.DataFrame(self.results).T
        results_df = results_df.sort_values('mean_accuracy', ascending=False)
        
        print("="*70)
        print("CLASSIFIER COMPARISON RESULTS")
        print("="*70)
        print(results_df)
        
        # Visualize
        plt.figure(figsize=(12, 6))
        plt.barh(results_df.index, results_df['mean_accuracy'], xerr=results_df['std_accuracy'])
        plt.xlabel('Accuracy')
        plt.title('Classifier Comparison (5-Fold CV)')
        plt.xlim(0, 1)
        plt.grid(axis='x', alpha=0.3)
        plt.tight_layout()
        plt.show()
        
        return results_df

# Usage
data = load_breast_cancer()
X, y = data.data, data.target

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

comparison = ClassifierComparison(X_scaled, y)
results = comparison.compare_models()
```

---

## Practice Assignment

Build a complete spam classifier:
1. Load SMS spam dataset
2. Text preprocessing (tokenization, vectorization)
3. Train multiple classifiers
4. Compare performance
5. Deploy best model

**Deliverables:**
- Jupyter notebook with complete code
- Model comparison report
- Saved best model (pickle)

---

## Resources
- Scikit-learn Classification Guide
- "Pattern Recognition and Machine Learning" - Bishop
- Andrew Ng's Classification lectures

**Next Week:** Unsupervised Learning! 🔍
