# 🤖 AI & Machine Learning - Complete Guide

## 📋 16-Week AI/ML Mastery Plan

### Week 1-4: Python Foundation for Data Science

#### 📖 Core Python for AI/ML

##### Essential Python Concepts
1. **Python Fundamentals**
   - Variables, data types, and operators
   - Control structures and functions
   - Object-oriented programming
   - Error handling and debugging

2. **Data Structures for ML**
   - Lists, tuples, dictionaries, sets
   - List comprehensions
   - Generators and iterators
   - File I/O operations

##### 💡 Python Code Examples

```python
# Essential Python for Data Science

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime
import json

# Data structures and comprehensions
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# List comprehensions for data processing
squares = [x**2 for x in data]
even_squares = [x**2 for x in data if x % 2 == 0]
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]

print(f"Original data: {data}")
print(f"Squares: {squares}")
print(f"Even squares: {even_squares}")
print(f"Matrix: {matrix}")

# Functions for data processing
def clean_data(data_list):
    """Remove None values and convert to numeric"""
    return [float(x) for x in data_list if x is not None]

def calculate_statistics(numbers):
    """Calculate basic statistics for a list of numbers"""
    if not numbers:
        return None
    
    return {
        'mean': sum(numbers) / len(numbers),
        'median': sorted(numbers)[len(numbers) // 2],
        'min': min(numbers),
        'max': max(numbers),
        'count': len(numbers)
    }

# Working with files and data
def load_csv_data(filename):
    """Load and parse CSV data"""
    try:
        with open(filename, 'r') as file:
            lines = file.readlines()
            header = lines[0].strip().split(',')
            data = []
            
            for line in lines[1:]:
                row = line.strip().split(',')
                data.append(dict(zip(header, row)))
            
            return data
    except FileNotFoundError:
        print(f"File {filename} not found")
        return []

# Class for data analysis
class DataAnalyzer:
    def __init__(self, data):
        self.data = data
        self.processed_data = None
    
    def preprocess(self):
        """Basic data preprocessing"""
        self.processed_data = clean_data(self.data)
        return self
    
    def analyze(self):
        """Perform basic analysis"""
        if self.processed_data is None:
            self.preprocess()
        
        stats = calculate_statistics(self.processed_data)
        
        return {
            'statistics': stats,
            'outliers': self.find_outliers(),
            'distribution': self.get_distribution()
        }
    
    def find_outliers(self, threshold=2):
        """Find outliers using standard deviation method"""
        if not self.processed_data:
            return []
        
        mean = sum(self.processed_data) / len(self.processed_data)
        std_dev = (sum((x - mean)**2 for x in self.processed_data) / len(self.processed_data))**0.5
        
        return [x for x in self.processed_data if abs(x - mean) > threshold * std_dev]
    
    def get_distribution(self):
        """Get data distribution info"""
        if not self.processed_data:
            return {}
        
        sorted_data = sorted(self.processed_data)
        n = len(sorted_data)
        
        return {
            'q1': sorted_data[n // 4],
            'q2': sorted_data[n // 2],
            'q3': sorted_data[3 * n // 4],
            'iqr': sorted_data[3 * n // 4] - sorted_data[n // 4]
        }

# Example usage
sample_data = [1, 2, 3, 4, 5, 100, 6, 7, 8, 9, 10]  # 100 is an outlier
analyzer = DataAnalyzer(sample_data)
results = analyzer.analyze()

print("\nData Analysis Results:")
print(f"Statistics: {results['statistics']}")
print(f"Outliers: {results['outliers']}")
print(f"Distribution: {results['distribution']}")
```

#### 📖 NumPy - Numerical Computing

##### Core Concepts
1. **Array Operations**
   - Creating and manipulating arrays
   - Array indexing and slicing
   - Broadcasting and vectorization
   - Mathematical operations

2. **Linear Algebra**
   - Matrix operations
   - Eigenvalues and eigenvectors
   - Solving linear systems
   - Statistical functions

##### 💡 NumPy Examples

```python
import numpy as np
import matplotlib.pyplot as plt

# Creating arrays
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.arange(0, 10, 0.1)  # 0 to 10 with step 0.1
arr3 = np.linspace(0, 1, 100)  # 100 points from 0 to 1
arr4 = np.random.randn(1000)  # 1000 random numbers from normal distribution

# 2D arrays (matrices)
matrix1 = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
matrix2 = np.random.random((3, 3))  # 3x3 random matrix
identity = np.eye(3)  # 3x3 identity matrix
zeros = np.zeros((5, 5))
ones = np.ones((3, 4))

print("Matrix 1:")
print(matrix1)
print(f"Shape: {matrix1.shape}")
print(f"Data type: {matrix1.dtype}")

# Array operations
print("\nArray Operations:")
print(f"Sum of matrix1: {np.sum(matrix1)}")
print(f"Mean of matrix1: {np.mean(matrix1)}")
print(f"Standard deviation: {np.std(matrix1)}")
print(f"Maximum value: {np.max(matrix1)}")
print(f"Minimum value: {np.min(matrix1)}")

# Matrix operations
print("\nMatrix Operations:")
print("Matrix multiplication:")
result = np.dot(matrix1, matrix2)
print(result)

print("Element-wise multiplication:")
element_wise = matrix1 * matrix2
print(element_wise)

# Advanced operations
print("\nAdvanced Operations:")
eigenvalues, eigenvectors = np.linalg.eig(matrix2)
print(f"Eigenvalues: {eigenvalues}")

# Solving linear system Ax = b
A = np.array([[2, 1], [1, 1]])
b = np.array([3, 2])
x = np.linalg.solve(A, b)
print(f"Solution to Ax = b: {x}")

# Statistical operations
data = np.random.normal(100, 15, 1000)  # Normal distribution
print(f"\nStatistics for random data:")
print(f"Mean: {np.mean(data):.2f}")
print(f"Std: {np.std(data):.2f}")
print(f"95th percentile: {np.percentile(data, 95):.2f}")

# Array manipulation
original = np.arange(12)
reshaped = original.reshape(3, 4)
flattened = reshaped.flatten()
transposed = reshaped.T

print(f"\nArray Manipulation:")
print(f"Original: {original}")
print(f"Reshaped (3x4):\n{reshaped}")
print(f"Transposed:\n{transposed}")

# Vectorized operations (much faster than loops)
def euclidean_distance_vectorized(point1, point2):
    """Calculate Euclidean distance using vectorized operations"""
    return np.sqrt(np.sum((point1 - point2)**2))

# Example: Calculate distances from origin
points = np.random.randn(1000, 2)  # 1000 2D points
distances = np.sqrt(np.sum(points**2, axis=1))
print(f"\nMean distance from origin: {np.mean(distances):.3f}")
```

#### 📖 Pandas - Data Manipulation

##### Core Concepts
1. **DataFrames and Series**
   - Creating and loading data
   - Data indexing and selection
   - Data cleaning and preprocessing
   - Grouping and aggregation

2. **Data Analysis**
   - Descriptive statistics
   - Data visualization preparation
   - Handling missing data
   - Data transformation

##### 💡 Pandas Examples

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Creating DataFrames
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'Age': [25, 30, 35, 28, 32],
    'Salary': [50000, 60000, 70000, 55000, 65000],
    'Department': ['IT', 'HR', 'IT', 'Finance', 'IT'],
    'Experience': [2, 5, 8, 3, 6]
}

df = pd.DataFrame(data)
print("Employee DataFrame:")
print(df)
print(f"\nDataFrame shape: {df.shape}")
print(f"Column names: {list(df.columns)}")
print(f"Data types:\n{df.dtypes}")

# Basic operations
print("\nBasic Statistics:")
print(df.describe())

print("\nDepartment value counts:")
print(df['Department'].value_counts())

# Data filtering and selection
print("\nFiltering Examples:")
it_employees = df[df['Department'] == 'IT']
print("IT Department employees:")
print(it_employees)

high_earners = df[df['Salary'] > 60000]
print("\nHigh earners (>60k):")
print(high_earners[['Name', 'Salary']])

# Data manipulation
print("\nData Manipulation:")
# Add new column
df['Salary_per_year_exp'] = df['Salary'] / df['Experience']
print("Added salary per year of experience:")
print(df[['Name', 'Salary', 'Experience', 'Salary_per_year_exp']])

# Grouping and aggregation
dept_stats = df.groupby('Department').agg({
    'Salary': ['mean', 'min', 'max'],
    'Age': 'mean',
    'Experience': 'mean'
})
print("\nDepartment-wise statistics:")
print(dept_stats)

# Working with larger datasets
np.random.seed(42)
large_data = pd.DataFrame({
    'employee_id': range(1, 1001),
    'salary': np.random.normal(60000, 15000, 1000),
    'age': np.random.randint(22, 65, 1000),
    'performance_score': np.random.uniform(1, 5, 1000),
    'department': np.random.choice(['IT', 'HR', 'Finance', 'Marketing'], 1000)
})

print(f"\nLarge dataset shape: {large_data.shape}")
print("Department distribution:")
print(large_data['department'].value_counts())

# Data cleaning examples
print("\nData Cleaning Examples:")

# Create dataset with missing values
messy_data = pd.DataFrame({
    'A': [1, 2, np.nan, 4, 5],
    'B': [np.nan, 2, 3, 4, np.nan],
    'C': [1, 2, 3, np.nan, 5],
    'D': ['x', 'y', None, 'z', 'w']
})

print("Original messy data:")
print(messy_data)

print(f"\nMissing values per column:")
print(messy_data.isnull().sum())

# Fill missing values
messy_data_filled = messy_data.copy()
messy_data_filled['A'] = messy_data_filled['A'].fillna(messy_data_filled['A'].mean())
messy_data_filled['B'] = messy_data_filled['B'].fillna(messy_data_filled['B'].median())
messy_data_filled['C'] = messy_data_filled['C'].fillna(method='forward')
messy_data_filled['D'] = messy_data_filled['D'].fillna('Unknown')

print("\nAfter filling missing values:")
print(messy_data_filled)

# Data transformation examples
print("\nData Transformation:")

# Pivot table
pivot_example = large_data.pivot_table(
    values='salary',
    index='department',
    columns=pd.cut(large_data['age'], bins=[20, 30, 40, 50, 70], labels=['20-30', '30-40', '40-50', '50+']),
    aggfunc='mean'
)
print("Salary by department and age group:")
print(pivot_example)

# Time series example
dates = pd.date_range('2024-01-01', periods=100, freq='D')
time_series = pd.DataFrame({
    'date': dates,
    'value': np.random.randn(100).cumsum(),
    'category': np.random.choice(['A', 'B', 'C'], 100)
})

print("\nTime series data:")
print(time_series.head())

# Resampling time series data
time_series.set_index('date', inplace=True)
weekly_data = time_series.groupby('category').resample('W').mean()
print("\nWeekly averages by category:")
print(weekly_data.head())
```

### Week 5-8: Machine Learning Fundamentals

#### 📖 Core ML Concepts

##### Machine Learning Types
1. **Supervised Learning**
   - Regression (predicting continuous values)
   - Classification (predicting categories)
   - Model evaluation metrics
   - Cross-validation

2. **Unsupervised Learning**
   - Clustering algorithms
   - Dimensionality reduction
   - Association rules
   - Anomaly detection

3. **Model Selection and Evaluation**
   - Train/validation/test splits
   - Overfitting and underfitting
   - Hyperparameter tuning
   - Model comparison

##### 💡 Scikit-learn Examples

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
from sklearn.svm import SVC
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.datasets import load_iris, load_boston, make_classification

# 1. LINEAR REGRESSION EXAMPLE
print("=== LINEAR REGRESSION EXAMPLE ===")

# Generate sample data
np.random.seed(42)
X = np.random.randn(100, 1)
y = 2 * X.flatten() + 1 + 0.1 * np.random.randn(100)

# Split the data
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
print(f"Mean Squared Error: {mse:.4f}")
print(f"R² Score: {r2:.4f}")
print(f"Coefficient: {lr_model.coef_[0]:.4f}")
print(f"Intercept: {lr_model.intercept_:.4f}")

# 2. CLASSIFICATION EXAMPLE WITH IRIS DATASET
print("\n=== CLASSIFICATION EXAMPLE ===")

# Load iris dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train multiple models
models = {
    'Logistic Regression': LogisticRegression(random_state=42),
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'SVM': SVC(random_state=42)
}

model_results = {}

for name, model in models.items():
    # Train model
    if name == 'SVM':
        model.fit(X_train_scaled, y_train)
        y_pred = model.predict(X_test_scaled)
    else:
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
    
    # Evaluate
    accuracy = accuracy_score(y_test, y_pred)
    model_results[name] = accuracy
    
    print(f"\n{name} Results:")
    print(f"Accuracy: {accuracy:.4f}")
    print("Classification Report:")
    print(classification_report(y_test, y_pred, target_names=iris.target_names))

# 3. CLUSTERING EXAMPLE
print("\n=== CLUSTERING EXAMPLE ===")

# Generate sample data for clustering
from sklearn.datasets import make_blobs

X_cluster, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.6, random_state=42)

# Apply K-means clustering
kmeans = KMeans(n_clusters=4, random_state=42)
cluster_labels = kmeans.fit_predict(X_cluster)

# Calculate inertia (within-cluster sum of squares)
inertia = kmeans.inertia_
print(f"K-means Inertia: {inertia:.2f}")

# Find optimal number of clusters using elbow method
inertias = []
k_range = range(1, 11)

for k in k_range:
    kmeans_temp = KMeans(n_clusters=k, random_state=42)
    kmeans_temp.fit(X_cluster)
    inertias.append(kmeans_temp.inertia_)

print("Elbow method results:")
for k, inertia in zip(k_range, inertias):
    print(f"K={k}: Inertia={inertia:.2f}")

# 4. DIMENSIONALITY REDUCTION WITH PCA
print("\n=== DIMENSIONALITY REDUCTION EXAMPLE ===")

# Apply PCA to iris dataset
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)

print(f"Original features: {X.shape[1]}")
print(f"After PCA: {X_pca.shape[1]}")
print(f"Explained variance ratio: {pca.explained_variance_ratio_}")
print(f"Total explained variance: {sum(pca.explained_variance_ratio_):.4f}")

# 5. CROSS-VALIDATION EXAMPLE
print("\n=== CROSS-VALIDATION EXAMPLE ===")

# Use Random Forest for cross-validation
rf = RandomForestClassifier(n_estimators=100, random_state=42)

# Perform 5-fold cross-validation
cv_scores = cross_val_score(rf, X, y, cv=5, scoring='accuracy')

print(f"Cross-validation scores: {cv_scores}")
print(f"Mean CV accuracy: {cv_scores.mean():.4f} (+/- {cv_scores.std() * 2:.4f})")

# 6. HYPERPARAMETER TUNING WITH GRID SEARCH
print("\n=== HYPERPARAMETER TUNING EXAMPLE ===")

# Define parameter grid for Random Forest
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [None, 10, 20],
    'min_samples_split': [2, 5, 10]
}

# Perform grid search
grid_search = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid,
    cv=5,
    scoring='accuracy',
    n_jobs=-1
)

grid_search.fit(X_train, y_train)

print(f"Best parameters: {grid_search.best_params_}")
print(f"Best cross-validation score: {grid_search.best_score_:.4f}")

# Test best model
best_model = grid_search.best_estimator_
y_pred_best = best_model.predict(X_test)
best_accuracy = accuracy_score(y_test, y_pred_best)
print(f"Test accuracy with best model: {best_accuracy:.4f}")

# 7. MODEL EVALUATION EXAMPLE
print("\n=== COMPREHENSIVE MODEL EVALUATION ===")

class ModelEvaluator:
    def __init__(self, model, X_train, X_test, y_train, y_test):
        self.model = model
        self.X_train = X_train
        self.X_test = X_test
        self.y_train = y_train
        self.y_test = y_test
        self.y_pred = None
        
    def train_and_predict(self):
        self.model.fit(self.X_train, self.y_train)
        self.y_pred = self.model.predict(self.X_test)
        return self
        
    def evaluate_classification(self):
        if self.y_pred is None:
            self.train_and_predict()
            
        accuracy = accuracy_score(self.y_test, self.y_pred)
        conf_matrix = confusion_matrix(self.y_test, self.y_pred)
        class_report = classification_report(self.y_test, self.y_pred)
        
        return {
            'accuracy': accuracy,
            'confusion_matrix': conf_matrix,
            'classification_report': class_report
        }
    
    def evaluate_regression(self):
        if self.y_pred is None:
            self.train_and_predict()
            
        mse = mean_squared_error(self.y_test, self.y_pred)
        rmse = np.sqrt(mse)
        r2 = r2_score(self.y_test, self.y_pred)
        
        return {
            'mse': mse,
            'rmse': rmse,
            'r2_score': r2
        }

# Example usage with iris dataset
evaluator = ModelEvaluator(
    RandomForestClassifier(n_estimators=100, random_state=42),
    X_train, X_test, y_train, y_test
)

results = evaluator.evaluate_classification()
print(f"Model Evaluation Results:")
print(f"Accuracy: {results['accuracy']:.4f}")
print(f"Confusion Matrix:\n{results['confusion_matrix']}")
```

### Week 9-12: Deep Learning with TensorFlow/Keras

#### 📖 Neural Networks Fundamentals

##### Core Concepts
1. **Neural Network Architecture**
   - Perceptrons and multi-layer networks
   - Activation functions
   - Forward and backward propagation
   - Loss functions and optimization

2. **Deep Learning Models**
   - Convolutional Neural Networks (CNNs)
   - Recurrent Neural Networks (RNNs)
   - Long Short-Term Memory (LSTM)
   - Transfer learning

##### 💡 TensorFlow/Keras Examples

```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Set random seeds for reproducibility
tf.random.set_seed(42)
np.random.seed(42)

print(f"TensorFlow version: {tf.__version__}")

# 1. BASIC NEURAL NETWORK FOR CLASSIFICATION
print("=== BASIC NEURAL NETWORK EXAMPLE ===")

# Load and prepare data
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()

# Normalize pixel values
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0

# Reshape data for fully connected network
x_train_flat = x_train.reshape(-1, 28*28)
x_test_flat = x_test.reshape(-1, 28*28)

print(f"Training data shape: {x_train_flat.shape}")
print(f"Training labels shape: {y_train.shape}")
print(f"Number of classes: {len(np.unique(y_train))}")

# Create basic neural network
basic_model = keras.Sequential([
    layers.Dense(128, activation='relu', input_shape=(784,)),
    layers.Dropout(0.2),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.2),
    layers.Dense(10, activation='softmax')
])

# Compile model
basic_model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

print("\nModel Architecture:")
basic_model.summary()

# Train model
print("\nTraining model...")
history = basic_model.fit(
    x_train_flat, y_train,
    batch_size=32,
    epochs=5,
    validation_split=0.1,
    verbose=1
)

# Evaluate model
test_loss, test_accuracy = basic_model.evaluate(x_test_flat, y_test, verbose=0)
print(f"\nTest accuracy: {test_accuracy:.4f}")

# 2. CONVOLUTIONAL NEURAL NETWORK
print("\n=== CONVOLUTIONAL NEURAL NETWORK EXAMPLE ===")

# Prepare data for CNN (keep 2D structure)
x_train_cnn = x_train.reshape(-1, 28, 28, 1)
x_test_cnn = x_test.reshape(-1, 28, 28, 1)

# Create CNN model
cnn_model = keras.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')
])

# Compile CNN
cnn_model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

print("\nCNN Model Architecture:")
cnn_model.summary()

# Train CNN
print("\nTraining CNN...")
cnn_history = cnn_model.fit(
    x_train_cnn, y_train,
    batch_size=32,
    epochs=5,
    validation_split=0.1,
    verbose=1
)

# Evaluate CNN
cnn_test_loss, cnn_test_accuracy = cnn_model.evaluate(x_test_cnn, y_test, verbose=0)
print(f"\nCNN Test accuracy: {cnn_test_accuracy:.4f}")

# 3. REGRESSION WITH NEURAL NETWORKS
print("\n=== REGRESSION EXAMPLE ===")

# Generate regression data
np.random.seed(42)
X_reg = np.random.randn(1000, 10)
y_reg = np.sum(X_reg[:, :5], axis=1) + 0.1 * np.random.randn(1000)

# Split data
X_train_reg, X_test_reg, y_train_reg, y_test_reg = train_test_split(
    X_reg, y_reg, test_size=0.2, random_state=42
)

# Scale features
scaler = StandardScaler()
X_train_reg_scaled = scaler.fit_transform(X_train_reg)
X_test_reg_scaled = scaler.transform(X_test_reg)

# Create regression model
regression_model = keras.Sequential([
    layers.Dense(64, activation='relu', input_shape=(10,)),
    layers.Dropout(0.3),
    layers.Dense(32, activation='relu'),
    layers.Dropout(0.3),
    layers.Dense(16, activation='relu'),
    layers.Dense(1)  # No activation for regression output
])

# Compile for regression
regression_model.compile(
    optimizer='adam',
    loss='mse',
    metrics=['mae']
)

# Train regression model
reg_history = regression_model.fit(
    X_train_reg_scaled, y_train_reg,
    batch_size=32,
    epochs=50,
    validation_split=0.1,
    verbose=0
)

# Evaluate regression model
reg_predictions = regression_model.predict(X_test_reg_scaled)
reg_mse = np.mean((y_test_reg - reg_predictions.flatten())**2)
reg_r2 = 1 - reg_mse / np.var(y_test_reg)

print(f"Regression MSE: {reg_mse:.4f}")
print(f"Regression R²: {reg_r2:.4f}")

# 4. CUSTOM TRAINING LOOP
print("\n=== CUSTOM TRAINING LOOP EXAMPLE ===")

class CustomTrainer:
    def __init__(self, model, loss_fn, optimizer):
        self.model = model
        self.loss_fn = loss_fn
        self.optimizer = optimizer
        self.train_losses = []
        self.val_losses = []
        
    @tf.function
    def train_step(self, x, y):
        with tf.GradientTape() as tape:
            predictions = self.model(x, training=True)
            loss = self.loss_fn(y, predictions)
        
        gradients = tape.gradient(loss, self.model.trainable_variables)
        self.optimizer.apply_gradients(zip(gradients, self.model.trainable_variables))
        return loss
    
    def train(self, train_dataset, val_dataset, epochs):
        for epoch in range(epochs):
            # Training
            epoch_loss_avg = tf.keras.metrics.Mean()
            for x_batch, y_batch in train_dataset:
                loss = self.train_step(x_batch, y_batch)
                epoch_loss_avg.update_state(loss)
            
            # Validation
            val_loss_avg = tf.keras.metrics.Mean()
            for x_val, y_val in val_dataset:
                val_predictions = self.model(x_val, training=False)
                val_loss = self.loss_fn(y_val, val_predictions)
                val_loss_avg.update_state(val_loss)
            
            self.train_losses.append(epoch_loss_avg.result().numpy())
            self.val_losses.append(val_loss_avg.result().numpy())
            
            if epoch % 10 == 0:
                print(f"Epoch {epoch}: Train Loss = {epoch_loss_avg.result():.4f}, "
                      f"Val Loss = {val_loss_avg.result():.4f}")

# Create simple model for custom training
custom_model = keras.Sequential([
    layers.Dense(64, activation='relu', input_shape=(784,)),
    layers.Dense(32, activation='relu'),
    layers.Dense(10, activation='softmax')
])

# Prepare datasets
train_dataset = tf.data.Dataset.from_tensor_slices((x_train_flat, y_train))
train_dataset = train_dataset.batch(32).shuffle(1000)

val_dataset = tf.data.Dataset.from_tensor_slices((x_test_flat, y_test))
val_dataset = val_dataset.batch(32)

# Create custom trainer
trainer = CustomTrainer(
    model=custom_model,
    loss_fn=keras.losses.SparseCategoricalCrossentropy(),
    optimizer=keras.optimizers.Adam()
)

# Train with custom loop
print("Training with custom loop...")
trainer.train(train_dataset, val_dataset, epochs=20)

# 5. TRANSFER LEARNING EXAMPLE
print("\n=== TRANSFER LEARNING EXAMPLE ===")

# Load pre-trained model (example with smaller dataset)
base_model = keras.applications.VGG16(
    weights='imagenet',
    include_top=False,
    input_shape=(224, 224, 3)
)

# Freeze base model
base_model.trainable = False

# Create transfer learning model
transfer_model = keras.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')  # 10 classes for our problem
])

transfer_model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

print("Transfer Learning Model:")
print(f"Total parameters: {transfer_model.count_params()}")
print(f"Trainable parameters: {sum([tf.size(var) for var in transfer_model.trainable_variables])}")

# 6. MODEL SAVING AND LOADING
print("\n=== MODEL SAVING AND LOADING EXAMPLE ===")

# Save the basic model
basic_model.save('mnist_basic_model.h5')
print("Model saved as 'mnist_basic_model.h5'")

# Save only weights
basic_model.save_weights('mnist_weights')
print("Weights saved as 'mnist_weights'")

# Load model
loaded_model = keras.models.load_model('mnist_basic_model.h5')
print("Model loaded successfully")

# Verify loaded model works
loaded_predictions = loaded_model.predict(x_test_flat[:5])
original_predictions = basic_model.predict(x_test_flat[:5])

print(f"Predictions match: {np.allclose(loaded_predictions, original_predictions)}")

# 7. CALLBACKS AND MONITORING
print("\n=== CALLBACKS EXAMPLE ===")

# Define callbacks
early_stopping = keras.callbacks.EarlyStopping(
    monitor='val_loss',
    patience=5,
    restore_best_weights=True
)

reduce_lr = keras.callbacks.ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.2,
    patience=3,
    min_lr=0.0001
)

model_checkpoint = keras.callbacks.ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    save_weights_only=False
)

# Create model with callbacks
callback_model = keras.Sequential([
    layers.Dense(128, activation='relu', input_shape=(784,)),
    layers.Dropout(0.2),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.2),
    layers.Dense(10, activation='softmax')
])

callback_model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train with callbacks
print("Training with callbacks...")
callback_history = callback_model.fit(
    x_train_flat, y_train,
    batch_size=32,
    epochs=50,  # High number, but early stopping will intervene
    validation_split=0.1,
    callbacks=[early_stopping, reduce_lr, model_checkpoint],
    verbose=1
)

print(f"Training stopped at epoch: {len(callback_history.history['loss'])}")
```

## 🎯 Complete AI/ML Project Portfolio

### Project 1: House Price Prediction
**Technologies**: Python, pandas, scikit-learn, matplotlib
- Data preprocessing and feature engineering
- Multiple regression algorithms comparison
- Model evaluation and interpretation
- Deployment with Flask API

### Project 2: Image Classification System
**Technologies**: TensorFlow/Keras, OpenCV, CNN
- Custom dataset creation and preprocessing
- CNN architecture design and training
- Transfer learning implementation
- Web interface for image upload and prediction

### Project 3: Natural Language Processing
**Technologies**: NLTK, spaCy, transformers
- Text preprocessing and feature extraction
- Sentiment analysis and classification
- Topic modeling with LDA
- Chatbot development

### Project 4: Recommendation System
**Technologies**: pandas, scikit-learn, collaborative filtering
- User-item interaction analysis
- Content-based and collaborative filtering
- Matrix factorization techniques
- A/B testing framework

## 📊 AI/ML Progress Tracking

### Weekly Assessment Template
```markdown
# AI/ML Week [X] Progress

## Technical Skills ✅
- [ ] Python programming
- [ ] NumPy and pandas
- [ ] Scikit-learn algorithms
- [ ] TensorFlow/Keras
- [ ] Data visualization

## Concepts Mastered ✅
- [ ] Supervised learning
- [ ] Unsupervised learning  
- [ ] Neural networks
- [ ] Deep learning
- [ ] Model evaluation

## Projects Completed
- [ ] Regression project
- [ ] Classification project
- [ ] Deep learning project
- [ ] End-to-end ML pipeline

## Practice Hours
- Theory: ___/15 hours
- Coding: ___/20 hours
- Projects: ___/15 hours
```

## 📚 Learning Resources

### Books
- "Hands-On Machine Learning" by Aurélien Géron
- "Python Machine Learning" by Sebastian Raschka
- "Deep Learning" by Ian Goodfellow
- "Pattern Recognition and Machine Learning" by Christopher Bishop

### Online Courses
- Andrew Ng's Machine Learning Course
- Fast.ai Practical Deep Learning
- CS229 Stanford Machine Learning
- DeepLearning.ai Specialization

### Practice Platforms
- Kaggle competitions and datasets
- Google Colab for free GPU access
- Papers With Code for latest research
- Towards Data Science on Medium

---

**Remember**: AI/ML is rapidly evolving. Focus on fundamentals while staying updated with latest developments and best practices!
