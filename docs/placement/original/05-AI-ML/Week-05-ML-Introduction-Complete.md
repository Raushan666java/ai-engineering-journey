# 📖 Week 5: Machine Learning Introduction - Complete Study Material

## 🎯 Learning Objectives
- Understand machine learning concepts and types
- Learn the complete ML workflow and methodology
- Master scikit-learn library fundamentals
- Build and evaluate first ML models

---

## 📚 **LECTURE NOTES**

### **Day 1: Machine Learning Fundamentals**

#### **1.1 What is Machine Learning?**
```python
"""
Machine Learning Definition:
A subset of AI that enables computers to learn and make decisions 
from data without being explicitly programmed for every scenario.

Key Components:
1. Data - The fuel of machine learning
2. Algorithm - The method to learn patterns
3. Model - The learned representation
4. Prediction - The output for new data
"""

# Simple example: Predicting house prices
import numpy as np
import matplotlib.pyplot as plt

# Sample data: [size_sqft, price]
house_data = np.array([
    [1000, 200000], [1200, 240000], [1500, 300000],
    [1800, 360000], [2000, 400000], [2200, 440000]
])

sizes = house_data[:, 0]
prices = house_data[:, 1]

# Simple linear relationship
plt.scatter(sizes, prices)
plt.xlabel('House Size (sq ft)')
plt.ylabel('Price ($)')
plt.title('House Size vs Price')
plt.show()

# Manual prediction (without ML)
def predict_price_manual(size):
    # Observed pattern: price ≈ size * 200
    return size * 200

print(f"Manual prediction for 1600 sq ft: ${predict_price_manual(1600):,}")
```

#### **1.2 Types of Machine Learning**
```python
"""
1. SUPERVISED LEARNING
   - Uses labeled data (input-output pairs)
   - Goal: Learn mapping from input to output
   
   Types:
   a) Classification - Predict categories/classes
      Examples: Email spam detection, image recognition
   
   b) Regression - Predict continuous values
      Examples: House prices, stock prices, temperature
"""

# Classification example
def classify_email(email_text):
    spam_keywords = ['free', 'win', 'money', 'urgent', 'click']
    spam_count = sum(1 for word in spam_keywords if word in email_text.lower())
    return 'spam' if spam_count >= 2 else 'not spam'

# Regression example
def predict_temperature(humidity, pressure):
    # Simplified relationship
    return 20 + (humidity * 0.1) - (pressure * 0.01)

"""
2. UNSUPERVISED LEARNING
   - Uses unlabeled data
   - Goal: Discover hidden patterns
   
   Types:
   a) Clustering - Group similar data points
      Examples: Customer segmentation, gene sequencing
   
   b) Dimensionality Reduction - Reduce feature space
      Examples: Data visualization, noise reduction
   
   c) Association Rules - Find relationships
      Examples: Market basket analysis, recommendation systems
"""

# Clustering example (conceptual)
def simple_clustering(data, k=2):
    # K-means clustering (simplified)
    # Group customers by spending patterns
    pass

"""
3. REINFORCEMENT LEARNING
   - Learns through interaction with environment
   - Goal: Maximize cumulative reward
   
   Examples: Game playing, robotics, autonomous vehicles
"""
```

#### **1.3 Machine Learning Workflow**
```python
"""
Standard ML Workflow:

1. Problem Definition
   - What are we trying to predict?
   - What type of ML problem is it?
   - What does success look like?

2. Data Collection
   - Gather relevant data
   - Ensure data quality and quantity
   - Consider data sources and formats

3. Data Exploration & Preprocessing
   - Understand data structure
   - Handle missing values
   - Feature engineering
   - Data cleaning

4. Model Selection
   - Choose appropriate algorithms
   - Consider problem type and data size
   - Baseline model establishment

5. Model Training
   - Split data (train/validation/test)
   - Train multiple models
   - Hyperparameter tuning

6. Model Evaluation
   - Use appropriate metrics
   - Cross-validation
   - Compare models

7. Model Deployment
   - Production implementation
   - Monitoring and maintenance
   - Continuous improvement
"""

# Workflow implementation template
class MLWorkflow:
    def __init__(self, problem_type='classification'):
        self.problem_type = problem_type
        self.data = None
        self.model = None
        self.results = {}
    
    def load_data(self, data_source):
        """Step 2: Data Collection"""
        # Implementation for data loading
        pass
    
    def explore_data(self):
        """Step 3: Data Exploration"""
        # Implementation for EDA
        pass
    
    def preprocess_data(self):
        """Step 3: Data Preprocessing"""
        # Implementation for data cleaning
        pass
    
    def select_model(self):
        """Step 4: Model Selection"""
        # Implementation for model selection
        pass
    
    def train_model(self):
        """Step 5: Model Training"""
        # Implementation for training
        pass
    
    def evaluate_model(self):
        """Step 6: Model Evaluation"""
        # Implementation for evaluation
        pass
    
    def deploy_model(self):
        """Step 7: Model Deployment"""
        # Implementation for deployment
        pass
```

### **Day 2: Scikit-learn Fundamentals**

#### **2.1 Scikit-learn Overview**
```python
"""
Scikit-learn is the most popular ML library for Python

Key Features:
- Consistent API across all algorithms
- Comprehensive documentation
- Built on NumPy, SciPy, and matplotlib
- Includes preprocessing, model selection, and evaluation tools

Main Modules:
- sklearn.datasets: Sample datasets
- sklearn.preprocessing: Data preprocessing
- sklearn.model_selection: Model selection and evaluation
- sklearn.linear_model: Linear models
- sklearn.ensemble: Ensemble methods
- sklearn.metrics: Evaluation metrics
"""

import numpy as np
import pandas as pd
from sklearn.datasets import load_iris, make_classification
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Load sample dataset
iris = load_iris()
print(f"Dataset shape: {iris.data.shape}")
print(f"Feature names: {iris.feature_names}")
print(f"Target names: {iris.target_names}")
print(f"First 5 samples:\n{iris.data[:5]}")
```

#### **2.2 Scikit-learn API Pattern**
```python
"""
Consistent API Pattern in Scikit-learn:

1. Estimator: Any object that learns from data
   - fit(X, y): Learn from training data
   - predict(X): Make predictions on new data
   - score(X, y): Evaluate model performance

2. Transformer: Preprocesses data
   - fit(X): Learn transformation parameters
   - transform(X): Apply transformation
   - fit_transform(X): Fit and transform in one step

3. Predictor: Makes predictions
   - predict(X): Predict target values
   - predict_proba(X): Predict class probabilities (classification)
"""

# Example: Complete ML pipeline
from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix

# 1. Load data
wine = load_wine()
X, y = wine.data, wine.target

# 2. Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# 3. Preprocess data
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 4. Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

# 5. Make predictions
y_pred = model.predict(X_test_scaled)

# 6. Evaluate model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.4f}")
print(f"Confusion Matrix:\n{confusion_matrix(y_test, y_pred)}")
```

#### **2.3 Data Preprocessing with Scikit-learn**
```python
from sklearn.preprocessing import (
    StandardScaler, MinMaxScaler, RobustScaler,
    LabelEncoder, OneHotEncoder, PolynomialFeatures
)
from sklearn.impute import SimpleImputer
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

# Sample dataset with mixed data types
data = pd.DataFrame({
    'age': [25, 30, np.nan, 35, 28],
    'income': [50000, 60000, 55000, 70000, 45000],
    'education': ['Bachelor', 'Master', 'PhD', 'Bachelor', 'High School'],
    'city': ['NYC', 'LA', 'Chicago', 'NYC', 'Boston']
})

# Preprocessing pipeline
numeric_features = ['age', 'income']
categorical_features = ['education', 'city']

# Numeric preprocessing
numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())
])

# Categorical preprocessing
categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

# Combine preprocessing steps
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features),
        ('cat', categorical_transformer, categorical_features)
    ]
)

# Apply preprocessing
X_processed = preprocessor.fit_transform(data)
print(f"Original shape: {data.shape}")
print(f"Processed shape: {X_processed.shape}")
```

### **Day 3: First Machine Learning Models**

#### **3.1 Linear Regression**
```python
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# Generate sample data
np.random.seed(42)
X = np.random.randn(100, 1)
y = 2 * X.flatten() + 1 + 0.1 * np.random.randn(100)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train model
lr_model = LinearRegression()
lr_model.fit(X_train, y_train)

# Make predictions
y_pred = lr_model.predict(X_test)

# Evaluate model
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Linear Regression Results:")
print(f"Coefficient: {lr_model.coef_[0]:.4f}")
print(f"Intercept: {lr_model.intercept_:.4f}")
print(f"Mean Squared Error: {mse:.4f}")
print(f"R² Score: {r2:.4f}")

# Visualization
plt.figure(figsize=(10, 4))

plt.subplot(1, 2, 1)
plt.scatter(X_train, y_train, alpha=0.6, label='Training data')
plt.plot(X_train, lr_model.predict(X_train), 'r-', label='Fitted line')
plt.xlabel('X')
plt.ylabel('y')
plt.title('Training Data and Fitted Line')
plt.legend()

plt.subplot(1, 2, 2)
plt.scatter(y_test, y_pred, alpha=0.6)
plt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'r--', lw=2)
plt.xlabel('Actual')
plt.ylabel('Predicted')
plt.title('Actual vs Predicted')
plt.tight_layout()
plt.show()
```

#### **3.2 Logistic Regression**
```python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import seaborn as sns

# Load iris dataset for classification
iris = load_iris()
X, y = iris.data, iris.target

# For binary classification, use only 2 classes
binary_mask = y != 2
X_binary = X[binary_mask]
y_binary = y[binary_mask]

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X_binary, y_binary, test_size=0.2, random_state=42
)

# Create and train model
log_reg = LogisticRegression(random_state=42)
log_reg.fit(X_train, y_train)

# Make predictions
y_pred = log_reg.predict(X_test)
y_pred_proba = log_reg.predict_proba(X_test)

# Evaluate model
accuracy = accuracy_score(y_test, y_pred)
conf_matrix = confusion_matrix(y_test, y_pred)

print(f"Logistic Regression Results:")
print(f"Accuracy: {accuracy:.4f}")
print(f"\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=iris.target_names[:2]))

# Visualize confusion matrix
plt.figure(figsize=(6, 4))
sns.heatmap(conf_matrix, annot=True, fmt='d', cmap='Blues',
            xticklabels=iris.target_names[:2],
            yticklabels=iris.target_names[:2])
plt.title('Confusion Matrix')
plt.ylabel('Actual')
plt.xlabel('Predicted')
plt.show()

# Probability predictions
print(f"\nProbability predictions for first 5 test samples:")
for i in range(5):
    print(f"Sample {i+1}: Class {y_test[i]} -> Probabilities: {y_pred_proba[i]}")
```

#### **3.3 Decision Trees**
```python
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.datasets import make_classification

# Generate sample dataset
X, y = make_classification(n_samples=1000, n_features=4, n_informative=3,
                          n_redundant=1, n_clusters_per_class=1, random_state=42)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train decision tree
dt_model = DecisionTreeClassifier(max_depth=3, random_state=42)
dt_model.fit(X_train, y_train)

# Make predictions
y_pred = dt_model.predict(X_test)

# Evaluate model
accuracy = accuracy_score(y_test, y_pred)
print(f"Decision Tree Accuracy: {accuracy:.4f}")

# Feature importance
feature_importance = dt_model.feature_importances_
print(f"\nFeature Importance:")
for i, importance in enumerate(feature_importance):
    print(f"Feature {i}: {importance:.4f}")

# Visualize decision tree
plt.figure(figsize=(15, 10))
plot_tree(dt_model, filled=True, feature_names=[f'Feature_{i}' for i in range(4)],
          class_names=['Class_0', 'Class_1'], rounded=True)
plt.title('Decision Tree Visualization')
plt.show()
```

### **Day 4: Model Evaluation and Validation**

#### **4.1 Train-Test Split and Cross-Validation**
```python
from sklearn.model_selection import (
    train_test_split, cross_val_score, StratifiedKFold,
    learning_curve, validation_curve
)

# Load dataset
iris = load_iris()
X, y = iris.data, iris.target

# 1. Simple train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

print(f"Training set size: {X_train.shape[0]}")
print(f"Test set size: {X_test.shape[0]}")
print(f"Class distribution in training: {np.bincount(y_train)}")
print(f"Class distribution in test: {np.bincount(y_test)}")

# 2. Cross-validation
model = LogisticRegression(random_state=42)

# 5-fold cross-validation
cv_scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')
print(f"\n5-Fold CV Scores: {cv_scores}")
print(f"Mean CV Score: {cv_scores.mean():.4f} (+/- {cv_scores.std() * 2:.4f})")

# Stratified K-Fold (maintains class distribution)
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
stratified_scores = cross_val_score(model, X, y, cv=skf, scoring='accuracy')
print(f"Stratified CV Scores: {stratified_scores}")
print(f"Mean Stratified CV Score: {stratified_scores.mean():.4f}")

# 3. Learning curves
train_sizes, train_scores, val_scores = learning_curve(
    model, X, y, cv=5, n_jobs=-1, train_sizes=np.linspace(0.1, 1.0, 10)
)

# Plot learning curves
plt.figure(figsize=(10, 6))
plt.plot(train_sizes, np.mean(train_scores, axis=1), 'o-', label='Training score')
plt.plot(train_sizes, np.mean(val_scores, axis=1), 'o-', label='Validation score')
plt.fill_between(train_sizes, np.mean(train_scores, axis=1) - np.std(train_scores, axis=1),
                 np.mean(train_scores, axis=1) + np.std(train_scores, axis=1), alpha=0.1)
plt.fill_between(train_sizes, np.mean(val_scores, axis=1) - np.std(val_scores, axis=1),
                 np.mean(val_scores, axis=1) + np.std(val_scores, axis=1), alpha=0.1)
plt.xlabel('Training Set Size')
plt.ylabel('Accuracy Score')
plt.title('Learning Curves')
plt.legend()
plt.grid(True)
plt.show()
```

#### **4.2 Evaluation Metrics**
```python
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    roc_auc_score, roc_curve, precision_recall_curve,
    mean_absolute_error, mean_squared_error, r2_score
)

# Classification metrics
def evaluate_classification_model(model, X_test, y_test):
    """Comprehensive evaluation for classification models"""
    y_pred = model.predict(X_test)
    y_pred_proba = model.predict_proba(X_test)[:, 1] if hasattr(model, 'predict_proba') else None
    
    # Basic metrics
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred, average='weighted')
    recall = recall_score(y_test, y_pred, average='weighted')
    f1 = f1_score(y_test, y_pred, average='weighted')
    
    print(f"Classification Metrics:")
    print(f"Accuracy: {accuracy:.4f}")
    print(f"Precision: {precision:.4f}")
    print(f"Recall: {recall:.4f}")
    print(f"F1-Score: {f1:.4f}")
    
    # ROC curve for binary classification
    if len(np.unique(y_test)) == 2 and y_pred_proba is not None:
        auc = roc_auc_score(y_test, y_pred_proba)
        print(f"AUC-ROC: {auc:.4f}")
        
        # Plot ROC curve
        fpr, tpr, _ = roc_curve(y_test, y_pred_proba)
        plt.figure(figsize=(8, 6))
        plt.plot(fpr, tpr, label=f'ROC Curve (AUC = {auc:.4f})')
        plt.plot([0, 1], [0, 1], 'k--', label='Random Classifier')
        plt.xlabel('False Positive Rate')
        plt.ylabel('True Positive Rate')
        plt.title('ROC Curve')
        plt.legend()
        plt.grid(True)
        plt.show()

# Regression metrics
def evaluate_regression_model(model, X_test, y_test):
    """Comprehensive evaluation for regression models"""
    y_pred = model.predict(X_test)
    
    mae = mean_absolute_error(y_test, y_pred)
    mse = mean_squared_error(y_test, y_pred)
    rmse = np.sqrt(mse)
    r2 = r2_score(y_test, y_pred)
    
    print(f"Regression Metrics:")
    print(f"Mean Absolute Error: {mae:.4f}")
    print(f"Mean Squared Error: {mse:.4f}")
    print(f"Root Mean Squared Error: {rmse:.4f}")
    print(f"R² Score: {r2:.4f}")
    
    # Residual plot
    residuals = y_test - y_pred
    plt.figure(figsize=(12, 4))
    
    plt.subplot(1, 2, 1)
    plt.scatter(y_pred, residuals, alpha=0.6)
    plt.axhline(y=0, color='r', linestyle='--')
    plt.xlabel('Predicted Values')
    plt.ylabel('Residuals')
    plt.title('Residual Plot')
    
    plt.subplot(1, 2, 2)
    plt.scatter(y_test, y_pred, alpha=0.6)
    plt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'r--', lw=2)
    plt.xlabel('Actual Values')
    plt.ylabel('Predicted Values')
    plt.title('Actual vs Predicted')
    
    plt.tight_layout()
    plt.show()
```

### **Day 5: Overfitting and Underfitting**

#### **5.1 Understanding Bias-Variance Tradeoff**
```python
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import Pipeline
import matplotlib.pyplot as plt

# Generate sample data with noise
np.random.seed(42)
n_samples = 100
X = np.linspace(0, 1, n_samples).reshape(-1, 1)
y = 1.5 * X.ravel() + np.sin(1.5 * np.pi * X.ravel()) + np.random.normal(0, 0.1, n_samples)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Test different polynomial degrees
degrees = [1, 2, 5, 10, 15]
plt.figure(figsize=(15, 10))

for i, degree in enumerate(degrees):
    # Create polynomial features
    poly_model = Pipeline([
        ('poly', PolynomialFeatures(degree=degree)),
        ('linear', LinearRegression())
    ])
    
    # Train model
    poly_model.fit(X_train, y_train)
    
    # Make predictions
    y_train_pred = poly_model.predict(X_train)
    y_test_pred = poly_model.predict(X_test)
    
    # Calculate scores
    train_score = r2_score(y_train, y_train_pred)
    test_score = r2_score(y_test, y_test_pred)
    
    # Plot
    plt.subplot(2, 3, i+1)
    
    # Generate smooth curve for plotting
    X_plot = np.linspace(0, 1, 100).reshape(-1, 1)
    y_plot = poly_model.predict(X_plot)
    
    plt.scatter(X_train, y_train, alpha=0.6, label='Training data')
    plt.scatter(X_test, y_test, alpha=0.6, label='Test data')
    plt.plot(X_plot, y_plot, 'r-', label=f'Degree {degree}')
    plt.title(f'Degree {degree}\nTrain R²: {train_score:.3f}, Test R²: {test_score:.3f}')
    plt.xlabel('X')
    plt.ylabel('y')
    plt.legend()
    plt.ylim(-2, 3)

plt.tight_layout()
plt.show()

# Analyze bias-variance tradeoff
train_scores = []
test_scores = []
degrees_range = range(1, 16)

for degree in degrees_range:
    poly_model = Pipeline([
        ('poly', PolynomialFeatures(degree=degree)),
        ('linear', LinearRegression())
    ])
    
    poly_model.fit(X_train, y_train)
    
    train_score = poly_model.score(X_train, y_train)
    test_score = poly_model.score(X_test, y_test)
    
    train_scores.append(train_score)
    test_scores.append(test_score)

# Plot bias-variance tradeoff
plt.figure(figsize=(10, 6))
plt.plot(degrees_range, train_scores, 'o-', label='Training Score')
plt.plot(degrees_range, test_scores, 'o-', label='Test Score')
plt.xlabel('Polynomial Degree')
plt.ylabel('R² Score')
plt.title('Bias-Variance Tradeoff')
plt.legend()
plt.grid(True)
plt.show()

print("Analysis:")
print("- Low degree (1-2): High bias, low variance (underfitting)")
print("- Medium degree (3-5): Good balance")
print("- High degree (10+): Low bias, high variance (overfitting)")
```

#### **5.2 Regularization Techniques**
```python
from sklearn.linear_model import Ridge, Lasso, ElasticNet
from sklearn.preprocessing import StandardScaler

# Generate high-dimensional data
np.random.seed(42)
n_samples, n_features = 100, 20
X = np.random.randn(n_samples, n_features)
true_coef = np.random.randn(n_features)
true_coef[10:] = 0  # Only first 10 features are relevant
y = X @ true_coef + 0.1 * np.random.randn(n_samples)

# Split and scale data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Compare different regularization methods
models = {
    'Linear Regression': LinearRegression(),
    'Ridge (L2)': Ridge(alpha=1.0),
    'Lasso (L1)': Lasso(alpha=0.1),
    'Elastic Net': ElasticNet(alpha=0.1, l1_ratio=0.5)
}

results = {}
plt.figure(figsize=(15, 10))

for i, (name, model) in enumerate(models.items()):
    # Train model
    model.fit(X_train_scaled, y_train)
    
    # Make predictions
    y_train_pred = model.predict(X_train_scaled)
    y_test_pred = model.predict(X_test_scaled)
    
    # Calculate scores
    train_score = r2_score(y_train, y_train_pred)
    test_score = r2_score(y_test, y_test_pred)
    
    results[name] = {
        'train_score': train_score,
        'test_score': test_score,
        'coefficients': model.coef_ if hasattr(model, 'coef_') else None
    }
    
    # Plot coefficients
    plt.subplot(2, 2, i+1)
    if results[name]['coefficients'] is not None:
        plt.bar(range(len(results[name]['coefficients'])), results[name]['coefficients'])
        plt.title(f'{name}\nTrain R²: {train_score:.3f}, Test R²: {test_score:.3f}')
        plt.xlabel('Feature Index')
        plt.ylabel('Coefficient Value')

plt.tight_layout()
plt.show()

# Print results
print("Regularization Comparison:")
for name, result in results.items():
    print(f"{name}:")
    print(f"  Train R²: {result['train_score']:.4f}")
    print(f"  Test R²: {result['test_score']:.4f}")
    if result['coefficients'] is not None:
        non_zero_coef = np.sum(np.abs(result['coefficients']) > 1e-5)
        print(f"  Non-zero coefficients: {non_zero_coef}/{len(result['coefficients'])}")
    print()
```

---

## 💻 **PRACTICE QUESTIONS**

### **Basic Level (1-15)**

1. **ML Concepts**
```python
# Classify these problems as regression or classification:
# a) Predicting house prices
# b) Email spam detection
# c) Stock price forecasting
# d) Image recognition
# e) Customer churn prediction
```

2. **Data Splitting**
```python
# Split the iris dataset into 70% training and 30% testing
# Ensure stratified sampling to maintain class distribution
from sklearn.datasets import load_iris

iris = load_iris()
X, y = iris.data, iris.target

# Your code here
```

3. **Basic Model Training**
```python
# Train a logistic regression model on the wine dataset
# Calculate and print the accuracy score
from sklearn.datasets import load_wine

# Your code here
```

4. **Cross-Validation**
```python
# Perform 5-fold cross-validation on a decision tree classifier
# using the digits dataset
from sklearn.datasets import load_digits

# Your code here
```

5. **Preprocessing Pipeline**
```python
# Create a preprocessing pipeline that:
# 1. Handles missing values with median imputation
# 2. Scales features using StandardScaler
# 3. Applies the pipeline to sample data

import pandas as pd
import numpy as np

# Sample data with missing values
data = pd.DataFrame({
    'feature1': [1, 2, np.nan, 4, 5],
    'feature2': [10, np.nan, 30, 40, 50],
    'feature3': [100, 200, 300, np.nan, 500]
})

# Your code here
```

### **Intermediate Level (16-25)**

16. **Model Comparison**
```python
# Compare performance of 3 different algorithms on the same dataset
# Use appropriate evaluation metrics and cross-validation
```

17. **Feature Importance Analysis**
```python
# Train a random forest model and analyze feature importance
# Visualize the results with a bar plot
```

18. **Learning Curves**
```python
# Generate and plot learning curves for a model
# Identify if the model is overfitting or underfitting
```

19. **Hyperparameter Tuning**
```python
# Use GridSearchCV to find optimal hyperparameters
# for a support vector machine classifier
```

20. **Custom Evaluation Function**
```python
# Create a function that evaluates both classification and regression models
# Include multiple metrics and visualizations
```

---

## 📝 **ASSIGNMENTS**

### **Assignment 1: ML Workflow Implementation (Due: Day 3)**

**Problem: Customer Churn Prediction**
```python
"""
Build a complete ML pipeline for customer churn prediction:

Dataset: Create synthetic customer data with features like:
- Demographics (age, gender, location)
- Account info (tenure, contract type, payment method)
- Usage patterns (monthly charges, total charges, services used)
- Target: Churn (Yes/No)

Requirements:
1. Data generation and exploration
2. Preprocessing pipeline
3. Model training and comparison
4. Evaluation with multiple metrics
5. Insights and recommendations
"""

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score

class ChurnPredictionPipeline:
    def __init__(self):
        self.models = {}
        self.results = {}
        self.preprocessor = None
    
    def generate_data(self, n_samples=1000):
        """Generate synthetic customer data"""
        # Your implementation here
        pass
    
    def explore_data(self, data):
        """Perform exploratory data analysis"""
        # Your implementation here
        pass
    
    def preprocess_data(self, data):
        """Clean and preprocess the data"""
        # Your implementation here
        pass
    
    def train_models(self, X_train, y_train):
        """Train multiple models"""
        # Your implementation here
        pass
    
    def evaluate_models(self, X_test, y_test):
        """Evaluate all trained models"""
        # Your implementation here
        pass
    
    def generate_insights(self):
        """Generate business insights from the analysis"""
        # Your implementation here
        pass

# Usage
pipeline = ChurnPredictionPipeline()
# Implement and run the complete pipeline
```

### **Assignment 2: Model Evaluation Deep Dive (Due: Day 5)**

**Problem: Comprehensive Model Analysis**
```python
"""
Perform in-depth analysis of model performance:

Tasks:
1. Implement custom evaluation metrics
2. Create bias-variance analysis
3. Build learning curve analysis
4. Implement cross-validation strategies
5. Compare multiple algorithms systematically
"""

class ModelAnalyzer:
    def __init__(self, X, y, problem_type='classification'):
        self.X = X
        self.y = y
        self.problem_type = problem_type
        self.results = {}
    
    def bias_variance_analysis(self, model, n_trials=100):
        """Analyze bias-variance tradeoff"""
        # Your implementation here
        pass
    
    def learning_curve_analysis(self, models):
        """Generate learning curves for multiple models"""
        # Your implementation here
        pass
    
    def cross_validation_comparison(self, models, cv_strategies):
        """Compare different CV strategies"""
        # Your implementation here
        pass
    
    def statistical_significance_test(self, model1_scores, model2_scores):
        """Test if difference in model performance is significant"""
        # Your implementation here
        pass
    
    def generate_report(self):
        """Generate comprehensive analysis report"""
        # Your implementation here
        pass
```

### **Assignment 3: End-to-End ML Project (Due: End of Week)**

**Problem: House Price Prediction System**
```python
"""
Build a complete house price prediction system:

Features:
1. Data collection and cleaning
2. Feature engineering
3. Model selection and training
4. Hyperparameter optimization
5. Model interpretation
6. Deployment preparation

Deliverables:
- Jupyter notebook with complete analysis
- Python module with reusable functions
- Model performance report
- Business recommendations
"""

class HousePricePrediction:
    def __init__(self):
        self.data = None
        self.model = None
        self.feature_names = None
        self.performance_metrics = {}
    
    def load_and_clean_data(self, data_path):
        """Load and clean the dataset"""
        # Your implementation here
        pass
    
    def feature_engineering(self):
        """Create new features and transform existing ones"""
        # Your implementation here
        pass
    
    def model_selection(self):
        """Compare multiple algorithms and select the best"""
        # Your implementation here
        pass
    
    def hyperparameter_optimization(self):
        """Optimize model hyperparameters"""
        # Your implementation here
        pass
    
    def model_interpretation(self):
        """Analyze feature importance and model behavior"""
        # Your implementation here
        pass
    
    def prepare_for_deployment(self):
        """Prepare model for production deployment"""
        # Your implementation here
        pass
```

---

## 🏆 **ASSESSMENTS**

### **Quiz 1: ML Fundamentals (Day 2)**

**Multiple Choice Questions (40 points)**

1. Which type of machine learning uses labeled data?
   - a) Supervised learning
   - b) Unsupervised learning
   - c) Reinforcement learning
   - d) Semi-supervised learning

2. What is the main purpose of cross-validation?
   - a) To increase model accuracy
   - b) To estimate model performance on unseen data
   - c) To reduce training time
   - d) To handle missing values

3. Which metric is most appropriate for imbalanced classification problems?
   - a) Accuracy
   - b) F1-score
   - c) Mean squared error
   - d) R-squared

4. What does overfitting mean?
   - a) Model performs well on both training and test data
   - b) Model performs poorly on both training and test data
   - c) Model performs well on training but poorly on test data
   - d) Model performs poorly on training but well on test data

**Short Answer Questions (30 points)**

5. Explain the difference between classification and regression problems.

6. What is the bias-variance tradeoff in machine learning?

7. Why is it important to split data into training and testing sets?

**Programming Questions (30 points)**

8. Implement a function to calculate accuracy, precision, and recall manually.

9. Write code to perform stratified sampling on a dataset.

### **Quiz 2: Scikit-learn and Model Evaluation (Day 4)**

**Practical Coding Test (100 points)**

1. **Data Preprocessing (25 points)**
```python
# Given a dataset with mixed data types and missing values,
# create a complete preprocessing pipeline
```

2. **Model Training and Evaluation (35 points)**
```python
# Train three different models on the same dataset
# Compare their performance using appropriate metrics
# Implement proper cross-validation
```

3. **Bias-Variance Analysis (25 points)**
```python
# Demonstrate overfitting and underfitting using polynomial regression
# Show how regularization helps control model complexity
```

4. **Custom Evaluation Function (15 points)**
```python
# Create a comprehensive evaluation function that works for both
# classification and regression problems
```

### **Mid-Week Assessment: Practical ML Project (Day 3)**

**Time Limit: 4 hours**

**Problem: Medical Diagnosis Prediction**
```python
"""
Build a machine learning system to predict medical conditions:

Dataset: Synthetic medical data with:
- Patient demographics
- Symptoms and vital signs
- Medical history
- Lab results
- Target: Diagnosis (multiple classes)

Requirements:
1. Complete data preprocessing pipeline
2. Handle class imbalance appropriately
3. Train and compare multiple models
4. Implement proper evaluation for medical context
5. Provide model interpretability
6. Consider ethical implications

Evaluation Criteria:
- Data preprocessing quality (25%)
- Model selection and training (30%)
- Evaluation methodology (25%)
- Code quality and documentation (20%)
"""
```

### **End-of-Week Project Assessment**

**Final Project: ML Competition Simulation (100 points)**

**Problem: Predictive Modeling Competition**

**Scenario**: You're participating in a machine learning competition to predict customer lifetime value.

**Requirements:**

1. **Data Analysis (20 points)**
   - Comprehensive EDA
   - Data quality assessment
   - Feature distribution analysis
   - Target variable analysis

2. **Feature Engineering (25 points)**
   - Create meaningful features
   - Handle categorical variables
   - Feature selection techniques
   - Feature scaling and normalization

3. **Model Development (30 points)**
   - Multiple algorithm comparison
   - Hyperparameter optimization
   - Ensemble methods
   - Cross-validation strategy

4. **Model Evaluation (15 points)**
   - Appropriate metrics selection
   - Statistical significance testing
   - Learning curve analysis
   - Error analysis

5. **Documentation and Presentation (10 points)**
   - Clear code documentation
   - Results interpretation
   - Business recommendations
   - Reproducible analysis

**Evaluation Rubric:**
- **Excellent (90-100%)**: Innovative approach, exceptional results, publication-quality work
- **Good (80-89%)**: Solid methodology, good results, minor improvements needed
- **Satisfactory (70-79%)**: Basic requirements met, acceptable performance
- **Needs Improvement (<70%)**: Missing components, poor methodology, significant issues

---

## 📚 **ADDITIONAL RESOURCES**

### **Essential Reading**
- "Introduction to Statistical Learning" - James, Witten, Hastie, Tibshirani
- "Hands-On Machine Learning" - Aurélien Géron
- "Pattern Recognition and Machine Learning" - Christopher Bishop
- Scikit-learn User Guide and API Documentation

### **Online Courses**
- Andrew Ng's Machine Learning Course (Coursera)
- Machine Learning Crash Course (Google)
- Fast.ai Practical Machine Learning
- edX MIT Introduction to Machine Learning

### **Practice Platforms**
- Kaggle Learn and Competitions
- Google Colab Notebooks
- Jupyter Notebook Tutorials
- GitHub ML Projects

### **Tools and Libraries**
- Scikit-learn Documentation
- Pandas User Guide
- NumPy Reference
- Matplotlib Tutorials

---

## ✅ **WEEK 5 COMPLETION CHECKLIST**

### **Knowledge Checkpoints**
- [ ] Understand different types of machine learning
- [ ] Can explain the complete ML workflow
- [ ] Comfortable with scikit-learn API
- [ ] Can implement train-test splits and cross-validation
- [ ] Understand overfitting and underfitting
- [ ] Can evaluate models with appropriate metrics
- [ ] Completed all practice questions (75%+ accuracy)
- [ ] Submitted all assignments on time
- [ ] Passed all quizzes (80%+ score)
- [ ] Completed final project successfully

### **Practical Skills Acquired**
- [ ] Data preprocessing with scikit-learn
- [ ] Model training and evaluation
- [ ] Cross-validation implementation
- [ ] Hyperparameter tuning basics
- [ ] Model comparison and selection
- [ ] Performance visualization
- [ ] ML pipeline development

### **Tools Mastered**
- [ ] Scikit-learn library
- [ ] Model evaluation metrics
- [ ] Cross-validation techniques
- [ ] Data preprocessing methods
- [ ] Visualization for ML

**Next Week Preview**: Deep dive into regression algorithms, advanced techniques, and mathematical foundations of linear models.