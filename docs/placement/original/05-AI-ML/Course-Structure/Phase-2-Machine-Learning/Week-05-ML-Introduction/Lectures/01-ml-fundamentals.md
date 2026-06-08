# Week 5: Machine Learning Introduction

## 📚 Learning Objectives
- Understand ML fundamentals and types
- Implement linear regression from scratch
- Master Scikit-learn basics
- Build complete ML pipeline
- Evaluate model performance

---

## Day 1-2: ML Fundamentals

### What is Machine Learning?

**Definition**: ML is the science of programming computers to learn from data without being explicitly programmed.

**Types of Machine Learning:**

1. **Supervised Learning** (labeled data)
   - Classification (discrete output)
   - Regression (continuous output)

2. **Unsupervised Learning** (unlabeled data)
   - Clustering
   - Dimensionality Reduction

3. **Reinforcement Learning**
   - Agent learns through rewards/penalties

### Key Concepts

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# ML Workflow
"""
1. Data Collection
2. Data Preprocessing
3. Feature Engineering
4. Model Selection
5. Training
6. Evaluation
7. Deployment
"""

# Sample Dataset
from sklearn.datasets import load_boston
data = load_boston()
X, y = data.data, data.target

# Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(f"Training set: {X_train.shape}")
print(f"Test set: {X_test.shape}")
```

### Linear Regression - Mathematics

**Hypothesis Function:**
$$h_\theta(x) = \theta_0 + \theta_1x_1 + \theta_2x_2 + ... + \theta_nx_n$$

**Vectorized Form:**
$$h_\theta(x) = \theta^T \cdot x$$

**Cost Function (MSE):**
$$J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2$$

**Gradient Descent:**
$$\theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\theta)$$

---

## Day 3-4: Linear Regression Implementation

### From Scratch Implementation

```python
class LinearRegressionScratch:
    """Linear Regression from scratch using gradient descent"""
    
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.lr = learning_rate
        self.n_iterations = n_iterations
        self.weights = None
        self.bias = None
        self.cost_history = []
    
    def fit(self, X, y):
        """Train the model"""
        n_samples, n_features = X.shape
        
        # Initialize parameters
        self.weights = np.zeros(n_features)
        self.bias = 0
        
        # Gradient descent
        for i in range(self.n_iterations):
            # Predictions
            y_pred = np.dot(X, self.weights) + self.bias
            
            # Compute gradients
            dw = (1/n_samples) * np.dot(X.T, (y_pred - y))
            db = (1/n_samples) * np.sum(y_pred - y)
            
            # Update parameters
            self.weights -= self.lr * dw
            self.bias -= self.lr * db
            
            # Calculate cost
            cost = (1/(2*n_samples)) * np.sum((y_pred - y)**2)
            self.cost_history.append(cost)
            
            if i % 100 == 0:
                print(f"Iteration {i}, Cost: {cost:.4f}")
    
    def predict(self, X):
        """Make predictions"""
        return np.dot(X, self.weights) + self.bias
    
    def score(self, X, y):
        """Calculate R² score"""
        y_pred = self.predict(X)
        ss_total = np.sum((y - np.mean(y))**2)
        ss_residual = np.sum((y - y_pred)**2)
        return 1 - (ss_residual / ss_total)

# Usage
model = LinearRegressionScratch(learning_rate=0.01, n_iterations=1000)
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)
r2_score = model.score(X_test, y_test)
print(f"R² Score: {r2_score:.4f}")

# Plot cost history
plt.plot(model.cost_history)
plt.xlabel('Iterations')
plt.ylabel('Cost')
plt.title('Cost Function over Iterations')
plt.show()
```

### Using Scikit-learn

```python
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error

# Create and train model
model = LinearRegression()
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

# Evaluation
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"MSE: {mse:.4f}")
print(f"RMSE: {rmse:.4f}")
print(f"MAE: {mae:.4f}")
print(f"R² Score: {r2:.4f}")

# Model coefficients
print(f"Intercept: {model.intercept_}")
print(f"Coefficients: {model.coef_}")
```

### Feature Scaling

```python
from sklearn.preprocessing import StandardScaler, MinMaxScaler

# StandardScaler (Z-score normalization)
scaler_std = StandardScaler()
X_train_scaled = scaler_std.fit_transform(X_train)
X_test_scaled = scaler_std.transform(X_test)

# MinMaxScaler (0-1 normalization)
scaler_mm = MinMaxScaler()
X_train_normalized = scaler_mm.fit_transform(X_train)
X_test_normalized = scaler_mm.transform(X_test)

# Compare models
model_unscaled = LinearRegression().fit(X_train, y_train)
model_scaled = LinearRegression().fit(X_train_scaled, y_train)

print("Unscaled R²:", model_unscaled.score(X_test, y_test))
print("Scaled R²:", model_scaled.score(X_test_scaled, y_test))
```

---

## Day 5-6: Model Evaluation & Validation

### Cross-Validation

```python
from sklearn.model_selection import cross_val_score, KFold

# K-Fold Cross-Validation
kfold = KFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X, y, cv=kfold, scoring='r2')

print(f"Cross-validation scores: {scores}")
print(f"Mean R²: {scores.mean():.4f} (+/- {scores.std():.4f})")

# Stratified K-Fold (for classification)
from sklearn.model_selection import StratifiedKFold
```

### Regularization

```python
from sklearn.linear_model import Ridge, Lasso, ElasticNet

# Ridge Regression (L2 regularization)
ridge = Ridge(alpha=1.0)
ridge.fit(X_train_scaled, y_train)
ridge_score = ridge.score(X_test_scaled, y_test)

# Lasso Regression (L1 regularization)
lasso = Lasso(alpha=0.1)
lasso.fit(X_train_scaled, y_train)
lasso_score = lasso.score(X_test_scaled, y_test)

# ElasticNet (L1 + L2)
elastic = ElasticNet(alpha=0.1, l1_ratio=0.5)
elastic.fit(X_train_scaled, y_train)
elastic_score = elastic.score(X_test_scaled, y_test)

print(f"Linear Regression R²: {r2:.4f}")
print(f"Ridge R²: {ridge_score:.4f}")
print(f"Lasso R²: {lasso_score:.4f}")
print(f"ElasticNet R²: {elastic_score:.4f}")
```

### Visualization

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Predictions vs Actual
plt.figure(figsize=(10, 6))
plt.scatter(y_test, y_pred, alpha=0.5)
plt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'r--', lw=2)
plt.xlabel('Actual Values')
plt.ylabel('Predicted Values')
plt.title('Predictions vs Actual Values')
plt.show()

# Residual plot
residuals = y_test - y_pred
plt.figure(figsize=(10, 6))
plt.scatter(y_pred, residuals, alpha=0.5)
plt.axhline(y=0, color='r', linestyle='--')
plt.xlabel('Predicted Values')
plt.ylabel('Residuals')
plt.title('Residual Plot')
plt.show()

# Distribution of residuals
plt.figure(figsize=(10, 6))
plt.hist(residuals, bins=30, edgecolor='black')
plt.xlabel('Residuals')
plt.ylabel('Frequency')
plt.title('Distribution of Residuals')
plt.show()
```

---

## Day 7: Complete ML Pipeline Project

### Project: House Price Prediction

```python
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

class HousePricePipeline:
    """Complete ML pipeline for house price prediction"""
    
    def __init__(self):
        self.scaler = StandardScaler()
        self.model = None
        self.feature_names = None
    
    def load_data(self, filepath=None):
        """Load and explore data"""
        if filepath:
            self.df = pd.read_csv(filepath)
        else:
            # Use built-in dataset
            from sklearn.datasets import load_boston
            data = load_boston()
            self.df = pd.DataFrame(data.data, columns=data.feature_names)
            self.df['PRICE'] = data.target
        
        print("Dataset shape:", self.df.shape)
        print("\nFirst few rows:")
        print(self.df.head())
        print("\nDataset info:")
        print(self.df.info())
        print("\nStatistical summary:")
        print(self.df.describe())
        
        return self
    
    def explore_data(self):
        """Exploratory Data Analysis"""
        # Check missing values
        print("\nMissing values:")
        print(self.df.isnull().sum())
        
        # Correlation matrix
        plt.figure(figsize=(12, 10))
        correlation = self.df.corr()
        sns.heatmap(correlation, annot=True, cmap='coolwarm', center=0)
        plt.title('Feature Correlation Matrix')
        plt.tight_layout()
        plt.savefig('correlation_matrix.png')
        plt.close()
        
        # Distribution of target variable
        plt.figure(figsize=(10, 6))
        plt.hist(self.df['PRICE'], bins=30, edgecolor='black')
        plt.xlabel('Price')
        plt.ylabel('Frequency')
        plt.title('Distribution of House Prices')
        plt.savefig('price_distribution.png')
        plt.close()
        
        return self
    
    def preprocess(self):
        """Data preprocessing"""
        # Separate features and target
        X = self.df.drop('PRICE', axis=1)
        y = self.df['PRICE']
        
        self.feature_names = X.columns.tolist()
        
        # Split data
        self.X_train, self.X_test, self.y_train, self.y_test = train_test_split(
            X, y, test_size=0.2, random_state=42
        )
        
        # Scale features
        self.X_train_scaled = self.scaler.fit_transform(self.X_train)
        self.X_test_scaled = self.scaler.transform(self.X_test)
        
        print(f"\nTraining set size: {self.X_train.shape}")
        print(f"Test set size: {self.X_test.shape}")
        
        return self
    
    def train_models(self):
        """Train and compare multiple models"""
        models = {
            'Linear Regression': LinearRegression(),
            'Ridge (α=1.0)': Ridge(alpha=1.0),
            'Ridge (α=10.0)': Ridge(alpha=10.0),
            'Lasso (α=0.1)': Lasso(alpha=0.1),
            'Lasso (α=1.0)': Lasso(alpha=1.0)
        }
        
        results = {}
        
        for name, model in models.items():
            # Train
            model.fit(self.X_train_scaled, self.y_train)
            
            # Predict
            y_pred = model.predict(self.X_test_scaled)
            
            # Evaluate
            mse = mean_squared_error(self.y_test, y_pred)
            rmse = np.sqrt(mse)
            r2 = r2_score(self.y_test, y_pred)
            
            # Cross-validation
            cv_scores = cross_val_score(model, self.X_train_scaled, self.y_train, 
                                       cv=5, scoring='r2')
            
            results[name] = {
                'model': model,
                'RMSE': rmse,
                'R²': r2,
                'CV Mean': cv_scores.mean(),
                'CV Std': cv_scores.std()
            }
        
        # Display results
        print("\n" + "="*80)
        print("MODEL COMPARISON")
        print("="*80)
        for name, metrics in results.items():
            print(f"\n{name}:")
            print(f"  RMSE: {metrics['RMSE']:.4f}")
            print(f"  R² Score: {metrics['R²']:.4f}")
            print(f"  CV R² (mean ± std): {metrics['CV Mean']:.4f} ± {metrics['CV Std']:.4f}")
        
        # Select best model
        best_model_name = max(results, key=lambda x: results[x]['R²'])
        self.model = results[best_model_name]['model']
        print(f"\n✓ Best Model: {best_model_name}")
        
        return self
    
    def visualize_results(self):
        """Visualize model performance"""
        y_pred = self.model.predict(self.X_test_scaled)
        
        fig, axes = plt.subplots(2, 2, figsize=(15, 12))
        
        # 1. Predictions vs Actual
        axes[0, 0].scatter(self.y_test, y_pred, alpha=0.5)
        axes[0, 0].plot([self.y_test.min(), self.y_test.max()], 
                        [self.y_test.min(), self.y_test.max()], 'r--', lw=2)
        axes[0, 0].set_xlabel('Actual Price')
        axes[0, 0].set_ylabel('Predicted Price')
        axes[0, 0].set_title('Predictions vs Actual')
        axes[0, 0].grid(True, alpha=0.3)
        
        # 2. Residuals
        residuals = self.y_test - y_pred
        axes[0, 1].scatter(y_pred, residuals, alpha=0.5)
        axes[0, 1].axhline(y=0, color='r', linestyle='--')
        axes[0, 1].set_xlabel('Predicted Price')
        axes[0, 1].set_ylabel('Residuals')
        axes[0, 1].set_title('Residual Plot')
        axes[0, 1].grid(True, alpha=0.3)
        
        # 3. Residual distribution
        axes[1, 0].hist(residuals, bins=30, edgecolor='black')
        axes[1, 0].set_xlabel('Residuals')
        axes[1, 0].set_ylabel('Frequency')
        axes[1, 0].set_title('Distribution of Residuals')
        axes[1, 0].grid(True, alpha=0.3)
        
        # 4. Feature importance (coefficients)
        if hasattr(self.model, 'coef_'):
            importance = pd.DataFrame({
                'feature': self.feature_names,
                'coefficient': self.model.coef_
            }).sort_values('coefficient', key=abs, ascending=False)
            
            axes[1, 1].barh(importance['feature'], importance['coefficient'])
            axes[1, 1].set_xlabel('Coefficient Value')
            axes[1, 1].set_title('Feature Importance')
            axes[1, 1].grid(True, alpha=0.3)
        
        plt.tight_layout()
        plt.savefig('model_evaluation.png', dpi=300, bbox_inches='tight')
        plt.close()
        
        print("\n✓ Visualizations saved to 'model_evaluation.png'")
        
        return self
    
    def predict_new(self, features):
        """Make predictions on new data"""
        features_scaled = self.scaler.transform([features])
        prediction = self.model.predict(features_scaled)[0]
        return prediction

# Run complete pipeline
pipeline = HousePricePipeline()
pipeline.load_data() \\
       .explore_data() \\
       .preprocess() \\
       .train_models() \\
       .visualize_results()

# Make a prediction
sample_features = pipeline.X_test.iloc[0].values
predicted_price = pipeline.predict_new(sample_features)
actual_price = pipeline.y_test.iloc[0]

print(f"\n{'='*80}")
print("SAMPLE PREDICTION")
print(f"{'='*80}")
print(f"Predicted Price: ${predicted_price:.2f}k")
print(f"Actual Price: ${actual_price:.2f}k")
print(f"Error: ${abs(predicted_price - actual_price):.2f}k")
```

---

## 📝 Week 5 Assessment

**Quiz:**
1. What is the difference between supervised and unsupervised learning?
2. Explain the cost function in linear regression
3. What is gradient descent?
4. Why is feature scaling important?
5. Difference between Ridge and Lasso regression?

**Coding Challenge:**
Build a salary prediction model using real dataset with complete pipeline including EDA, preprocessing, model selection, and evaluation.

---

## 📚 Resources

- Scikit-learn Documentation
- "Hands-On Machine Learning" - Aurélien Géron
- Andrew Ng's ML Course (Coursera)
- Kaggle Learn: Intro to Machine Learning

**Next Week**: Advanced Regression Techniques! 📈
