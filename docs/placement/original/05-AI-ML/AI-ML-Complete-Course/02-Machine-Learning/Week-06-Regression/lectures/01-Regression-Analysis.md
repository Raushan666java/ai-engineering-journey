# Week 6: Regression Analysis

## Learning Objectives
- Master Linear Regression
- Understand Polynomial
- Apply Regularization
- Practice Metrics

## 1. Linear Regression

### Core Concepts
```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Linear Regression Example
X = np.random.randn(100, 3)
y = X[:, 0] + 2*X[:, 1] - X[:, 2] + np.random.randn(100)*0.1
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = LinearRegression()
model.fit(X_train, y_train)
```

### Key Methods
- Ordinary Least Squares
- Gradient Descent
- Normal Equation

## 2. Polynomial

### Implementation
```python
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import Pipeline

# Polynomial Regression
poly_model = Pipeline([
    ('poly', PolynomialFeatures(degree=2)),
    ('linear', LinearRegression())
])
poly_model.fit(X_train, y_train)
```

## 3. Regularization

### Real Applications
- Ridge Regression (L2)
- Lasso Regression (L1)
- Elastic Net

## 4. Metrics

### Best Practices
- Mean Squared Error
- R-squared Score
- Mean Absolute Error

## Summary
Covered: Linear Regression, Polynomial, Regularization, Metrics