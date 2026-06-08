# Week 9: Neural Networks

## Learning Objectives
- Master Perceptron
- Understand Backpropagation
- Apply Activation
- Practice Optimization

## 1. Perceptron

### Core Concepts
```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.neural_network import MLPClassifier

# Neural Network Example
X = np.random.randn(100, 4)
y = np.random.randint(0, 2, 100)

model = MLPClassifier(hidden_layer_sizes=(10, 5), max_iter=1000)
model.fit(X, y)
```

### Key Methods
- Single Layer Perceptron
- Multi-Layer Perceptron
- Forward Propagation

## 2. Backpropagation

### Implementation
```python
# Backpropagation Algorithm
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    return x * (1 - x)

# Weight updates using gradient descent
weights -= learning_rate * gradients
```

## 3. Activation

### Real Applications
- Sigmoid Function
- ReLU Function
- Tanh Function

## 4. Optimization

### Best Practices
- Gradient Descent
- Adam Optimizer
- Learning Rate Scheduling

## Summary
Covered: Perceptron, Backpropagation, Activation, Optimization