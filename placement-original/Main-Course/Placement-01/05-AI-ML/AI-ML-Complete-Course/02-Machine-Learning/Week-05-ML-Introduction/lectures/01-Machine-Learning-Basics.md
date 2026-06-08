# Week 5: Machine Learning Basics

## Learning Objectives
- Master ML Types
- Understand Scikit-learn
- Apply Preprocessing
- Practice Evaluation

## 1. ML Types

### Core Concepts
```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split

# Supervised Learning Example
X = np.random.randn(100, 4)
y = np.random.randint(0, 2, 100)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
```

### Key Methods
- Supervised Learning: Classification, Regression
- Unsupervised Learning: Clustering, Dimensionality Reduction
- Reinforcement Learning: Agent-Environment Interaction

## 2. Scikit-learn

### Implementation
```python
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression

# Model creation and training
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_train)

model = LogisticRegression()
model.fit(X_scaled, y_train)
```

## 3. Preprocessing

### Real Applications
- Data cleaning and transformation
- Feature scaling and normalization
- Handling missing values and outliers

## 4. Evaluation

### Best Practices
- Cross-validation techniques
- Performance metrics selection
- Model comparison and selection

## Summary
Covered: ML Types, Scikit-learn, Preprocessing, Evaluation