# 🤖 Complete AI/ML Course - From Zero to Hero

## 📚 Course Overview

**Duration**: 20 Weeks (800+ Hours)  
**Format**: Self-paced with weekly milestones  
**Level**: Beginner to Advanced  
**Certification**: Industry-recognized completion certificate

---

## 🎯 **PHASE 1: PROGRAMMING FOUNDATIONS**

### **Week 1: Python Programming Basics**

#### **Module 1.1: Python Environment Setup**
**Lessons**:
- Installing Python 3.8+ and package managers
- Setting up VS Code/PyCharm IDE
- Virtual environments with venv/conda
- Jupyter Notebook introduction

**Hands-on Lab**:
```python
# Lab 1.1: Environment Setup
import sys
print(f"Python version: {sys.version}")

# Create virtual environment
# python -m venv ai_ml_env
# source ai_ml_env/bin/activate  # Linux/Mac
# ai_ml_env\Scripts\activate     # Windows
```

#### **Module 1.2: Python Syntax Fundamentals**
**Lessons**:
- Variables and data types
- Operators and expressions
- Input/output operations
- Comments and documentation

**Hands-on Lab**:
```python
# Lab 1.2: Basic Python Operations
name = input("Enter your name: ")
age = int(input("Enter your age: "))
print(f"Hello {name}, you are {age} years old")

# Data type exploration
numbers = [1, 2, 3, 4, 5]
print(f"Sum: {sum(numbers)}, Average: {sum(numbers)/len(numbers)}")
```

#### **Module 1.3: Control Structures**
**Lessons**:
- Conditional statements (if/elif/else)
- Loops (for/while)
- Break and continue
- Nested structures

**Hands-on Lab**:
```python
# Lab 1.3: Number Guessing Game
import random

secret = random.randint(1, 100)
attempts = 0

while True:
    guess = int(input("Guess the number (1-100): "))
    attempts += 1
    
    if guess == secret:
        print(f"Correct! Found in {attempts} attempts")
        break
    elif guess < secret:
        print("Too low!")
    else:
        print("Too high!")
```

#### **Module 1.4: Functions and Modules**
**Lessons**:
- Function definition and calling
- Parameters and return values
- Lambda functions
- Module imports

**Hands-on Lab**:
```python
# Lab 1.4: Calculator Module
def add(x, y): return x + y
def subtract(x, y): return x - y
def multiply(x, y): return x * y
def divide(x, y): return x / y if y != 0 else "Cannot divide by zero"

# Lambda functions
operations = {
    '+': lambda x, y: x + y,
    '-': lambda x, y: x - y,
    '*': lambda x, y: x * y,
    '/': lambda x, y: x / y if y != 0 else "Error"
}
```

#### **Module 1.5: Data Structures**
**Lessons**:
- Lists, tuples, dictionaries, sets
- String manipulation
- Data structure methods
- Comprehensions

**Hands-on Lab**:
```python
# Lab 1.5: Student Grade Manager
students = {}

def add_student(name, grades):
    students[name] = grades

def calculate_average(grades):
    return sum(grades) / len(grades)

def get_top_students(n=3):
    averages = {name: calculate_average(grades) 
                for name, grades in students.items()}
    return sorted(averages.items(), key=lambda x: x[1], reverse=True)[:n]
```

**Week 1 Project**: **Personal Finance Tracker**
- Track income and expenses
- Calculate monthly savings
- Generate basic reports

---

### **Week 2: Advanced Python for Data Science**

#### **Module 2.1: Advanced Data Structures**
**Lessons**:
- List comprehensions
- Dictionary comprehensions
- Generator expressions
- Iterator protocol

**Hands-on Lab**:
```python
# Lab 2.1: Data Processing with Comprehensions
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# List comprehensions
squares = [x**2 for x in data]
even_squares = [x**2 for x in data if x % 2 == 0]

# Generator for memory efficiency
def fibonacci_gen(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Dictionary comprehension
word_lengths = {word: len(word) for word in ['python', 'machine', 'learning']}
```

#### **Module 2.2: Object-Oriented Programming**
**Lessons**:
- Classes and objects
- Inheritance and polymorphism
- Special methods
- Design patterns

**Hands-on Lab**:
```python
# Lab 2.2: Data Analysis Classes
class DataProcessor:
    def __init__(self, data):
        self.data = data
        self.processed_data = None
    
    def clean_data(self):
        self.processed_data = [x for x in self.data if x is not None]
        return self
    
    def transform(self, func):
        if self.processed_data is None:
            self.clean_data()
        self.processed_data = [func(x) for x in self.processed_data]
        return self
    
    def get_stats(self):
        if not self.processed_data:
            return {}
        return {
            'mean': sum(self.processed_data) / len(self.processed_data),
            'min': min(self.processed_data),
            'max': max(self.processed_data)
        }
```

#### **Module 2.3: File Handling and I/O**
**Lessons**:
- Reading/writing files
- CSV and JSON processing
- Context managers
- Error handling

**Hands-on Lab**:
```python
# Lab 2.3: Data File Processor
import json
import csv

class FileProcessor:
    @staticmethod
    def read_csv(filename):
        try:
            with open(filename, 'r') as file:
                return list(csv.DictReader(file))
        except FileNotFoundError:
            return []
    
    @staticmethod
    def write_json(data, filename):
        with open(filename, 'w') as file:
            json.dump(data, file, indent=2)
    
    @staticmethod
    def process_log_file(filename):
        errors = []
        with open(filename, 'r') as file:
            for line_num, line in enumerate(file, 1):
                if 'ERROR' in line:
                    errors.append({'line': line_num, 'message': line.strip()})
        return errors
```

**Week 2 Project**: **Data Processing Pipeline**
- Read data from multiple file formats
- Clean and transform data
- Generate summary reports

---

### **Week 3: NumPy - Numerical Computing Foundation**

#### **Module 3.1: NumPy Fundamentals**
**Lessons**:
- Array creation and properties
- Indexing and slicing
- Array reshaping
- Data types

**Hands-on Lab**:
```python
# Lab 3.1: NumPy Basics
import numpy as np

# Array creation
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.arange(0, 10, 0.5)
arr3 = np.linspace(0, 1, 100)
matrix = np.random.randn(5, 5)

# Array properties
print(f"Shape: {matrix.shape}")
print(f"Size: {matrix.size}")
print(f"Data type: {matrix.dtype}")

# Indexing and slicing
print(f"First row: {matrix[0]}")
print(f"Last column: {matrix[:, -1]}")
print(f"Submatrix: {matrix[1:3, 1:3]}")
```

#### **Module 3.2: Array Operations**
**Lessons**:
- Element-wise operations
- Broadcasting
- Mathematical functions
- Aggregation functions

**Hands-on Lab**:
```python
# Lab 3.2: Array Operations
import numpy as np

# Broadcasting example
matrix = np.random.randn(4, 3)
row_means = np.mean(matrix, axis=1, keepdims=True)
centered_matrix = matrix - row_means

# Mathematical operations
data = np.random.randn(1000)
normalized_data = (data - np.mean(data)) / np.std(data)

# Aggregation functions
print(f"Mean: {np.mean(data):.3f}")
print(f"Std: {np.std(data):.3f}")
print(f"95th percentile: {np.percentile(data, 95):.3f}")
```

#### **Module 3.3: Linear Algebra**
**Lessons**:
- Matrix operations
- Eigenvalues and eigenvectors
- Solving linear systems
- Matrix decomposition

**Hands-on Lab**:
```python
# Lab 3.3: Linear Algebra Operations
import numpy as np

# Matrix operations
A = np.random.randn(3, 3)
B = np.random.randn(3, 3)

# Matrix multiplication
C = np.dot(A, B)  # or A @ B

# Eigenvalues and eigenvectors
eigenvals, eigenvecs = np.linalg.eig(A)

# Solving linear system Ax = b
b = np.random.randn(3)
x = np.linalg.solve(A, b)

# Verify solution
print(f"Verification: {np.allclose(A @ x, b)}")

# SVD decomposition
U, s, Vt = np.linalg.svd(A)
```

**Week 3 Project**: **Image Processing with NumPy**
- Load and manipulate images as arrays
- Apply filters and transformations
- Implement basic computer vision operations

---

### **Week 4: Pandas - Data Manipulation Mastery**

#### **Module 4.1: Pandas Fundamentals**
**Lessons**:
- Series and DataFrame creation
- Data loading from various sources
- Basic data inspection
- Data types optimization

**Hands-on Lab**:
```python
# Lab 4.1: Pandas Basics
import pandas as pd
import numpy as np

# DataFrame creation
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Age': [25, 30, 35, 28],
    'Salary': [50000, 60000, 70000, 55000],
    'Department': ['IT', 'HR', 'IT', 'Finance']
}
df = pd.DataFrame(data)

# Basic inspection
print(df.info())
print(df.describe())
print(df.head())

# Data loading
# df_csv = pd.read_csv('data.csv')
# df_json = pd.read_json('data.json')
```

#### **Module 4.2: Data Selection and Filtering**
**Lessons**:
- Indexing methods
- Boolean indexing
- Query method
- Multi-level indexing

**Hands-on Lab**:
```python
# Lab 4.2: Data Selection
import pandas as pd

# Sample data
df = pd.DataFrame({
    'A': range(10),
    'B': np.random.randn(10),
    'C': np.random.choice(['X', 'Y', 'Z'], 10),
    'D': pd.date_range('2024-01-01', periods=10)
})

# Boolean indexing
high_values = df[df['B'] > 0]
filtered_data = df[(df['A'] > 5) & (df['C'] == 'X')]

# Query method
result = df.query('A > 5 and C == "X"')

# Multi-level indexing
df_multi = df.set_index(['C', 'D'])
```

#### **Module 4.3: Data Cleaning and Preprocessing**
**Lessons**:
- Handling missing data
- Duplicate removal
- Data type conversions
- String operations

**Hands-on Lab**:
```python
# Lab 4.3: Data Cleaning Pipeline
import pandas as pd
import numpy as np

# Create messy data
df = pd.DataFrame({
    'Name': ['John Doe', 'jane smith', 'BOB JOHNSON', None, 'Alice Brown'],
    'Age': [25, np.nan, 30, 35, 28],
    'Email': ['john@email.com', 'JANE@EMAIL.COM', 'bob@email', 'alice@email.com', None],
    'Salary': ['50000', '60k', '70000', '55000', 'unknown']
})

def clean_data(df):
    # Handle missing values
    df['Name'] = df['Name'].fillna('Unknown')
    df['Age'] = df['Age'].fillna(df['Age'].median())
    
    # Standardize text
    df['Name'] = df['Name'].str.title()
    df['Email'] = df['Email'].str.lower()
    
    # Clean salary column
    df['Salary'] = df['Salary'].replace('unknown', np.nan)
    df['Salary'] = df['Salary'].str.replace('k', '000')
    df['Salary'] = pd.to_numeric(df['Salary'], errors='coerce')
    
    return df

cleaned_df = clean_data(df.copy())
```

#### **Module 4.4: Data Transformation**
**Lessons**:
- GroupBy operations
- Pivot tables
- Merging and joining
- Reshaping data

**Hands-on Lab**:
```python
# Lab 4.4: Data Transformation
import pandas as pd

# Sample sales data
sales_data = pd.DataFrame({
    'Date': pd.date_range('2024-01-01', periods=100),
    'Product': np.random.choice(['A', 'B', 'C'], 100),
    'Region': np.random.choice(['North', 'South', 'East', 'West'], 100),
    'Sales': np.random.randint(100, 1000, 100),
    'Quantity': np.random.randint(1, 10, 100)
})

# GroupBy operations
monthly_sales = sales_data.groupby([
    sales_data['Date'].dt.month, 'Product'
]).agg({
    'Sales': ['sum', 'mean'],
    'Quantity': 'sum'
})

# Pivot table
pivot_table = sales_data.pivot_table(
    values='Sales',
    index='Product',
    columns='Region',
    aggfunc='sum',
    fill_value=0
)

# Time series resampling
sales_data.set_index('Date').resample('W').sum()
```

**Week 4 Project**: **Sales Data Analysis Dashboard**
- Load and clean sales data
- Perform comprehensive EDA
- Create visualizations and insights

---

## 🎯 **PHASE 2: MACHINE LEARNING FUNDAMENTALS**

### **Week 5: Introduction to Machine Learning**

#### **Module 5.1: ML Concepts and Types**
**Lessons**:
- What is Machine Learning?
- Supervised vs Unsupervised vs Reinforcement Learning
- Applications and use cases
- ML workflow and methodology

**Hands-on Lab**:
```python
# Lab 5.1: First ML Model
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Load data
iris = load_iris()
X, y = iris.data, iris.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.3f}")
```

#### **Module 5.2: Scikit-learn Fundamentals**
**Lessons**:
- Library overview
- Estimator interface
- Preprocessing utilities
- Model selection tools

**Hands-on Lab**:
```python
# Lab 5.2: Scikit-learn Pipeline
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score

# Create pipeline
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', RandomForestClassifier(n_estimators=100))
])

# Cross-validation
scores = cross_val_score(pipeline, X, y, cv=5)
print(f"CV Scores: {scores}")
print(f"Mean CV Score: {scores.mean():.3f} (+/- {scores.std() * 2:.3f})")
```

**Week 5 Project**: **House Price Prediction**
- Load and explore housing dataset
- Build first regression model
- Evaluate model performance

---

### **Week 6: Regression Algorithms**

#### **Module 6.1: Linear Regression Deep Dive**
**Lessons**:
- Mathematical foundations
- Assumptions and limitations
- Gradient descent implementation
- Feature importance

**Hands-on Lab**:
```python
# Lab 6.1: Linear Regression from Scratch
import numpy as np
import matplotlib.pyplot as plt

class LinearRegression:
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
        
    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0
        
        for i in range(self.n_iterations):
            y_predicted = np.dot(X, self.weights) + self.bias
            
            # Compute cost
            cost = (1 / (2 * n_samples)) * np.sum((y_predicted - y) ** 2)
            
            # Compute gradients
            dw = (1 / n_samples) * np.dot(X.T, (y_predicted - y))
            db = (1 / n_samples) * np.sum(y_predicted - y)
            
            # Update parameters
            self.weights -= self.learning_rate * dw
            self.bias -= self.learning_rate * db
    
    def predict(self, X):
        return np.dot(X, self.weights) + self.bias
```

#### **Module 6.2: Regularized Regression**
**Lessons**:
- Ridge regression (L2)
- Lasso regression (L1)
- Elastic Net
- Regularization parameter tuning

**Hands-on Lab**:
```python
# Lab 6.2: Regularization Comparison
from sklearn.linear_model import Ridge, Lasso, ElasticNet
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import Pipeline
from sklearn.model_selection import validation_curve

# Create polynomial features
poly_pipeline = Pipeline([
    ('poly', PolynomialFeatures(degree=3)),
    ('ridge', Ridge())
])

# Validation curve for regularization parameter
alphas = np.logspace(-4, 2, 20)
train_scores, val_scores = validation_curve(
    Ridge(), X, y, param_name='alpha', param_range=alphas, cv=5
)

# Plot validation curve
plt.figure(figsize=(10, 6))
plt.semilogx(alphas, train_scores.mean(axis=1), label='Training score')
plt.semilogx(alphas, val_scores.mean(axis=1), label='Validation score')
plt.xlabel('Alpha')
plt.ylabel('Score')
plt.legend()
plt.title('Validation Curve for Ridge Regression')
```

**Week 6 Project**: **Advanced Regression Analysis**
- Compare multiple regression algorithms
- Implement regularization techniques
- Feature selection and engineering

---

### **Week 7: Classification Algorithms**

#### **Module 7.1: Logistic Regression and Tree-Based Methods**
**Lessons**:
- Logistic regression mathematics
- Decision trees and random forests
- Information gain and entropy
- Ensemble methods

**Hands-on Lab**:
```python
# Lab 7.1: Classification Comparison
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix
import seaborn as sns

# Models to compare
models = {
    'Logistic Regression': LogisticRegression(),
    'Decision Tree': DecisionTreeClassifier(),
    'Random Forest': RandomForestClassifier(n_estimators=100)
}

# Train and evaluate models
results = {}
for name, model in models.items():
    model.fit(X_train, y_train)
    predictions = model.predict(X_test)
    results[name] = {
        'accuracy': accuracy_score(y_test, predictions),
        'predictions': predictions
    }

# Confusion matrix visualization
fig, axes = plt.subplots(1, 3, figsize=(15, 4))
for i, (name, result) in enumerate(results.items()):
    cm = confusion_matrix(y_test, result['predictions'])
    sns.heatmap(cm, annot=True, fmt='d', ax=axes[i])
    axes[i].set_title(f'{name}\nAccuracy: {result["accuracy"]:.3f}')
```

#### **Module 7.2: Support Vector Machines and Advanced Methods**
**Lessons**:
- SVM theory and kernel trick
- Naive Bayes classifiers
- k-Nearest Neighbors
- Model evaluation metrics

**Hands-on Lab**:
```python
# Lab 7.2: SVM with Different Kernels
from sklearn.svm import SVC
from sklearn.model_selection import GridSearchCV

# SVM with different kernels
kernels = ['linear', 'rbf', 'poly']
svm_results = {}

for kernel in kernels:
    svm = SVC(kernel=kernel)
    svm.fit(X_train, y_train)
    score = svm.score(X_test, y_test)
    svm_results[kernel] = score

print("SVM Results by Kernel:")
for kernel, score in svm_results.items():
    print(f"{kernel}: {score:.3f}")

# Hyperparameter tuning
param_grid = {
    'C': [0.1, 1, 10, 100],
    'gamma': ['scale', 'auto', 0.001, 0.01, 0.1, 1],
    'kernel': ['rbf', 'poly']
}

grid_search = GridSearchCV(SVC(), param_grid, cv=5, scoring='accuracy')
grid_search.fit(X_train, y_train)
print(f"Best parameters: {grid_search.best_params_}")
print(f"Best score: {grid_search.best_score_:.3f}")
```

**Week 7 Project**: **Multi-class Classification System**
- Build classification pipeline
- Compare multiple algorithms
- Implement hyperparameter tuning

---

### **Week 8: Unsupervised Learning**

#### **Module 8.1: Clustering Algorithms**
**Lessons**:
- K-means clustering
- Hierarchical clustering
- DBSCAN
- Cluster evaluation metrics

**Hands-on Lab**:
```python
# Lab 8.1: Clustering Analysis
from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering
from sklearn.metrics import silhouette_score
from sklearn.datasets import make_blobs

# Generate sample data
X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.6, random_state=42)

# K-means clustering
kmeans = KMeans(n_clusters=4, random_state=42)
kmeans_labels = kmeans.fit_predict(X)

# DBSCAN clustering
dbscan = DBSCAN(eps=0.5, min_samples=5)
dbscan_labels = dbscan.fit_predict(X)

# Hierarchical clustering
hierarchical = AgglomerativeClustering(n_clusters=4)
hierarchical_labels = hierarchical.fit_predict(X)

# Evaluate clustering
algorithms = {
    'K-Means': kmeans_labels,
    'DBSCAN': dbscan_labels,
    'Hierarchical': hierarchical_labels
}

for name, labels in algorithms.items():
    if len(set(labels)) > 1:  # More than one cluster
        silhouette = silhouette_score(X, labels)
        print(f"{name} Silhouette Score: {silhouette:.3f}")
```

#### **Module 8.2: Dimensionality Reduction**
**Lessons**:
- Principal Component Analysis (PCA)
- t-SNE and UMAP
- Linear Discriminant Analysis
- Feature selection methods

**Hands-on Lab**:
```python
# Lab 8.2: Dimensionality Reduction
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE
from sklearn.datasets import load_digits

# Load high-dimensional data
digits = load_digits()
X, y = digits.data, digits.target

# PCA
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)
print(f"PCA explained variance ratio: {pca.explained_variance_ratio_}")

# t-SNE
tsne = TSNE(n_components=2, random_state=42)
X_tsne = tsne.fit_transform(X[:1000])  # Subset for speed

# Visualization
fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# PCA plot
scatter = axes[0].scatter(X_pca[:, 0], X_pca[:, 1], c=y, cmap='tab10')
axes[0].set_title('PCA')
axes[0].set_xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.2%} variance)')
axes[0].set_ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.2%} variance)')

# t-SNE plot
axes[1].scatter(X_tsne[:, 0], X_tsne[:, 1], c=y[:1000], cmap='tab10')
axes[1].set_title('t-SNE')
plt.colorbar(scatter)
```

**Week 8 Project**: **Customer Segmentation Analysis**
- Apply clustering to customer data
- Use dimensionality reduction for visualization
- Interpret and validate clusters

---

## 🎯 **PHASE 3: DEEP LEARNING FOUNDATIONS**

### **Week 13: Neural Networks Fundamentals**

#### **Module 13.1: Neural Network Architecture**
**Lessons**:
- Perceptron to multi-layer networks
- Activation functions
- Forward propagation
- Universal approximation theorem

**Hands-on Lab**:
```python
# Lab 13.1: Neural Network from Scratch
import numpy as np

class NeuralNetwork:
    def __init__(self, layers):
        self.layers = layers
        self.weights = []
        self.biases = []
        
        # Initialize weights and biases
        for i in range(len(layers) - 1):
            w = np.random.randn(layers[i], layers[i+1]) * 0.1
            b = np.zeros((1, layers[i+1]))
            self.weights.append(w)
            self.biases.append(b)
    
    def sigmoid(self, x):
        return 1 / (1 + np.exp(-np.clip(x, -500, 500)))
    
    def sigmoid_derivative(self, x):
        return x * (1 - x)
    
    def forward(self, X):
        self.activations = [X]
        
        for i in range(len(self.weights)):
            z = np.dot(self.activations[-1], self.weights[i]) + self.biases[i]
            a = self.sigmoid(z)
            self.activations.append(a)
        
        return self.activations[-1]
    
    def backward(self, X, y, learning_rate=0.1):
        m = X.shape[0]
        
        # Calculate output layer error
        output_error = self.activations[-1] - y
        deltas = [output_error * self.sigmoid_derivative(self.activations[-1])]
        
        # Backpropagate errors
        for i in range(len(self.weights) - 2, -1, -1):
            error = deltas[-1].dot(self.weights[i + 1].T)
            delta = error * self.sigmoid_derivative(self.activations[i + 1])
            deltas.append(delta)
        
        deltas.reverse()
        
        # Update weights and biases
        for i in range(len(self.weights)):
            self.weights[i] -= learning_rate * self.activations[i].T.dot(deltas[i]) / m
            self.biases[i] -= learning_rate * np.sum(deltas[i], axis=0, keepdims=True) / m
    
    def train(self, X, y, epochs=1000):
        for epoch in range(epochs):
            self.forward(X)
            self.backward(X, y)
            
            if epoch % 100 == 0:
                loss = np.mean((self.activations[-1] - y) ** 2)
                print(f"Epoch {epoch}, Loss: {loss:.4f}")

# Example usage
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([[0], [1], [1], [0]])  # XOR problem

nn = NeuralNetwork([2, 4, 1])
nn.train(X, y, epochs=5000)
```

#### **Module 13.2: Backpropagation and Optimization**
**Lessons**:
- Gradient descent variants
- Learning rate scheduling
- Momentum and adaptive methods
- Regularization techniques

**Hands-on Lab**:
```python
# Lab 13.2: Optimization Algorithms
class Optimizer:
    def __init__(self, learning_rate=0.01):
        self.learning_rate = learning_rate
    
    def update(self, weights, gradients):
        raise NotImplementedError

class SGD(Optimizer):
    def update(self, weights, gradients):
        return weights - self.learning_rate * gradients

class Momentum(Optimizer):
    def __init__(self, learning_rate=0.01, momentum=0.9):
        super().__init__(learning_rate)
        self.momentum = momentum
        self.velocity = None
    
    def update(self, weights, gradients):
        if self.velocity is None:
            self.velocity = np.zeros_like(weights)
        
        self.velocity = self.momentum * self.velocity - self.learning_rate * gradients
        return weights + self.velocity

class Adam(Optimizer):
    def __init__(self, learning_rate=0.001, beta1=0.9, beta2=0.999, epsilon=1e-8):
        super().__init__(learning_rate)
        self.beta1 = beta1
        self.beta2 = beta2
        self.epsilon = epsilon
        self.m = None
        self.v = None
        self.t = 0
    
    def update(self, weights, gradients):
        if self.m is None:
            self.m = np.zeros_like(weights)
            self.v = np.zeros_like(weights)
        
        self.t += 1
        self.m = self.beta1 * self.m + (1 - self.beta1) * gradients
        self.v = self.beta2 * self.v + (1 - self.beta2) * (gradients ** 2)
        
        m_hat = self.m / (1 - self.beta1 ** self.t)
        v_hat = self.v / (1 - self.beta2 ** self.t)
        
        return weights - self.learning_rate * m_hat / (np.sqrt(v_hat) + self.epsilon)
```

**Week 13 Project**: **Neural Network Implementation**
- Build complete neural network from scratch
- Compare different optimization algorithms
- Solve classification and regression problems

---

### **Week 14: Deep Learning with TensorFlow/Keras**

#### **Module 14.1: TensorFlow/Keras Fundamentals**
**Lessons**:
- Framework overview
- Tensor operations
- Sequential and Functional APIs
- Model compilation and training

**Hands-on Lab**:
```python
# Lab 14.1: First Deep Learning Model
import tensorflow as tf
from tensorflow import keras
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split

# Load and prepare data
digits = load_digits()
X, y = digits.data, digits.target
X = X / 16.0  # Normalize

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Build model
model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(64,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(10, activation='softmax')
])

# Compile model
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train model
history = model.fit(
    X_train, y_train,
    batch_size=32,
    epochs=50,
    validation_split=0.1,
    verbose=1
)

# Evaluate model
test_loss, test_accuracy = model.evaluate(X_test, y_test, verbose=0)
print(f"Test accuracy: {test_accuracy:.4f}")
```

#### **Module 14.2: Advanced Keras Features**
**Lessons**:
- Custom layers and models
- Callbacks and monitoring
- Model checkpointing
- TensorBoard visualization

**Hands-on Lab**:
```python
# Lab 14.2: Advanced Keras Features
import tensorflow as tf
from tensorflow import keras

# Custom layer
class CustomDense(keras.layers.Layer):
    def __init__(self, units, activation=None):
        super().__init__()
        self.units = units
        self.activation = keras.activations.get(activation)
    
    def build(self, input_shape):
        self.w = self.add_weight(
            shape=(input_shape[-1], self.units),
            initializer='random_normal',
            trainable=True
        )
        self.b = self.add_weight(
            shape=(self.units,),
            initializer='zeros',
            trainable=True
        )
    
    def call(self, inputs):
        output = tf.matmul(inputs, self.w) + self.b
        return self.activation(output)

# Functional API model
inputs = keras.Input(shape=(784,))
x = keras.layers.Dense(128, activation='relu')(inputs)
x = keras.layers.Dropout(0.2)(x)
x = CustomDense(64, activation='relu')(x)
x = keras.layers.Dropout(0.2)(x)
outputs = keras.layers.Dense(10, activation='softmax')(x)

model = keras.Model(inputs=inputs, outputs=outputs)

# Callbacks
callbacks = [
    keras.callbacks.EarlyStopping(patience=5, restore_best_weights=True),
    keras.callbacks.ReduceLROnPlateau(factor=0.2, patience=3),
    keras.callbacks.ModelCheckpoint('best_model.h5', save_best_only=True)
]

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
```

**Week 14 Project**: **Deep Learning Classification System**
- Build advanced neural network architectures
- Implement custom layers and training loops
- Use callbacks for training optimization

---

## 📊 **ASSESSMENT SYSTEM**

### **Continuous Assessment (60%)**
- **Weekly Quizzes**: 20% (2-3 quizzes per week)
- **Lab Assignments**: 25% (Hands-on coding exercises)
- **Mini Projects**: 15% (Weekly practical projects)

### **Major Projects (25%)**
- **Mid-term Project** (Week 10): 10%
- **Capstone Project** (Week 20): 15%

### **Final Evaluation (15%)**
- **Comprehensive Exam**: 10%
- **Portfolio Presentation**: 5%

### **Grading Rubric**
```
A+ (95-100%): Exceptional mastery, innovative solutions
A  (90-94%):  Excellent understanding, high-quality work
B+ (85-89%):  Good grasp, minor improvements needed
B  (80-84%):  Satisfactory understanding, meets requirements
C+ (75-79%):  Basic understanding, significant gaps
C  (70-74%):  Minimal understanding, major improvements needed
F  (<70%):    Insufficient understanding, course repetition recommended
```

---

## 🛠️ **COURSE RESOURCES**

### **Required Software**
- Python 3.8+ with Anaconda distribution
- Jupyter Notebook/Lab
- VS Code or PyCharm
- Git for version control

### **Cloud Platforms**
- Google Colab (Free tier)
- Kaggle Notebooks
- AWS SageMaker (Optional)
- Azure ML Studio (Optional)

### **Datasets Repository**
- Course-specific datasets hosted on GitHub
- Kaggle competition datasets
- UCI ML Repository
- Real-world industry datasets

### **Support System**
- **Discussion Forums**: 24/7 peer and instructor support
- **Office Hours**: Weekly live Q&A sessions
- **Study Groups**: Peer learning communities
- **Mentorship Program**: Industry expert guidance

---

## 🎯 **CAREER PREPARATION**

### **Industry Connections**
- Guest lectures from industry experts
- Company case studies and projects
- Internship placement assistance
- Job referral network

### **Portfolio Development**
- GitHub repository setup and maintenance
- Technical blog writing
- LinkedIn profile optimization
- Personal website creation

### **Interview Preparation**
- Technical interview practice sessions
- System design workshops
- Behavioral interview training
- Salary negotiation guidance

---

**This complete AI/ML course provides a comprehensive learning experience from beginner to advanced level, with hands-on projects, industry-relevant skills, and career preparation support.**