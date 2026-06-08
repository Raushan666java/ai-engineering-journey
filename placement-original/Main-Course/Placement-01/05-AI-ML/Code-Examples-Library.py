#!/usr/bin/env python3
"""
AI/ML Course - Complete Code Examples Library
Comprehensive collection of code examples for all course topics
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, mean_squared_error
import tensorflow as tf
from tensorflow import keras

# =============================================================================
# PHASE 1: PYTHON FUNDAMENTALS
# =============================================================================

class PythonBasics:
    """Python fundamentals examples"""
    
    @staticmethod
    def data_types_demo():
        """Demonstrate Python data types"""
        # Basic types
        name = "AI Student"
        age = 25
        height = 5.8
        is_student = True
        
        print(f"Name: {name} (type: {type(name)})")
        print(f"Age: {age} (type: {type(age)})")
        print(f"Height: {height} (type: {type(height)})")
        print(f"Student: {is_student} (type: {type(is_student)})")
    
    @staticmethod
    def control_structures_demo():
        """Demonstrate control structures"""
        # Conditional statements
        score = 85
        if score >= 90:
            grade = "A"
        elif score >= 80:
            grade = "B"
        else:
            grade = "C"
        
        # Loops
        numbers = [1, 2, 3, 4, 5]
        squares = []
        for num in numbers:
            squares.append(num ** 2)
        
        # List comprehension (Pythonic way)
        squares_comp = [x**2 for x in numbers]
        
        return grade, squares, squares_comp
    
    @staticmethod
    def function_examples():
        """Function definition examples"""
        def calculate_bmi(weight, height):
            """Calculate BMI"""
            return weight / (height ** 2)
        
        def fibonacci(n):
            """Generate Fibonacci sequence"""
            if n <= 1:
                return n
            return fibonacci(n-1) + fibonacci(n-2)
        
        # Lambda function
        square = lambda x: x ** 2
        
        return calculate_bmi, fibonacci, square

class AdvancedPython:
    """Advanced Python concepts"""
    
    def __init__(self):
        self.data = []
    
    def comprehensions_demo(self):
        """List and dict comprehensions"""
        # List comprehension
        evens = [x for x in range(20) if x % 2 == 0]
        
        # Dict comprehension
        squares_dict = {x: x**2 for x in range(10)}
        
        # Generator expression
        squares_gen = (x**2 for x in range(1000))
        
        return evens, squares_dict, squares_gen
    
    def decorator_example(self):
        """Decorator implementation"""
        def timer(func):
            import time
            def wrapper(*args, **kwargs):
                start = time.time()
                result = func(*args, **kwargs)
                end = time.time()
                print(f"{func.__name__} took {end-start:.4f} seconds")
                return result
            return wrapper
        
        @timer
        def slow_function():
            import time
            time.sleep(1)
            return "Done"
        
        return slow_function
    
    def context_manager_example(self):
        """Context manager implementation"""
        class FileManager:
            def __init__(self, filename, mode):
                self.filename = filename
                self.mode = mode
            
            def __enter__(self):
                self.file = open(self.filename, self.mode)
                return self.file
            
            def __exit__(self, exc_type, exc_val, exc_tb):
                self.file.close()
        
        return FileManager

class NumpyExamples:
    """NumPy operations examples"""
    
    @staticmethod
    def array_operations():
        """Basic array operations"""
        # Array creation
        arr1 = np.array([1, 2, 3, 4, 5])
        arr2 = np.arange(0, 10, 2)
        arr3 = np.linspace(0, 1, 5)
        
        # 2D array
        matrix = np.random.randn(3, 3)
        
        # Operations
        result = {
            'sum': np.sum(arr1),
            'mean': np.mean(arr1),
            'std': np.std(arr1),
            'dot_product': np.dot(matrix, matrix)
        }
        
        return arr1, arr2, arr3, matrix, result
    
    @staticmethod
    def linear_algebra():
        """Linear algebra operations"""
        A = np.array([[2, 1], [1, 1]])
        b = np.array([3, 2])
        
        # Solve Ax = b
        x = np.linalg.solve(A, b)
        
        # Eigenvalues and eigenvectors
        eigenvals, eigenvecs = np.linalg.eig(A)
        
        return x, eigenvals, eigenvecs

class PandasExamples:
    """Pandas operations examples"""
    
    @staticmethod
    def dataframe_operations():
        """Basic DataFrame operations"""
        # Create DataFrame
        data = {
            'Name': ['Alice', 'Bob', 'Charlie'],
            'Age': [25, 30, 35],
            'Salary': [50000, 60000, 70000]
        }
        df = pd.DataFrame(data)
        
        # Operations
        summary = df.describe()
        filtered = df[df['Age'] > 25]
        grouped = df.groupby('Age')['Salary'].mean()
        
        return df, summary, filtered, grouped
    
    @staticmethod
    def data_cleaning():
        """Data cleaning examples"""
        # Create messy data
        data = {
            'A': [1, 2, np.nan, 4],
            'B': [5, np.nan, 7, 8],
            'C': ['x', 'y', 'z', 'x']
        }
        df = pd.DataFrame(data)
        
        # Clean data
        df_cleaned = df.copy()
        df_cleaned['A'].fillna(df_cleaned['A'].mean(), inplace=True)
        df_cleaned['B'].fillna(df_cleaned['B'].median(), inplace=True)
        
        return df, df_cleaned

# =============================================================================
# PHASE 2: MACHINE LEARNING
# =============================================================================

class MLBasics:
    """Machine Learning fundamentals"""
    
    @staticmethod
    def first_ml_model():
        """First ML model example"""
        from sklearn.datasets import load_iris
        
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
        
        # Predict and evaluate
        y_pred = model.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)
        
        return model, accuracy
    
    @staticmethod
    def regression_example():
        """Linear regression example"""
        # Generate data
        np.random.seed(42)
        X = np.random.randn(100, 1)
        y = 2 * X.flatten() + 1 + 0.1 * np.random.randn(100)
        
        # Split and train
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42
        )
        
        model = LinearRegression()
        model.fit(X_train, y_train)
        
        # Evaluate
        y_pred = model.predict(X_test)
        mse = mean_squared_error(y_test, y_pred)
        
        return model, mse
    
    @staticmethod
    def classification_example():
        """Classification example"""
        from sklearn.datasets import make_classification
        
        # Generate data
        X, y = make_classification(n_samples=1000, n_features=4, 
                                 n_classes=2, random_state=42)
        
        # Split and scale
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42
        )
        
        scaler = StandardScaler()
        X_train_scaled = scaler.fit_transform(X_train)
        X_test_scaled = scaler.transform(X_test)
        
        # Train model
        model = RandomForestClassifier(n_estimators=100, random_state=42)
        model.fit(X_train_scaled, y_train)
        
        # Evaluate
        y_pred = model.predict(X_test_scaled)
        accuracy = accuracy_score(y_test, y_pred)
        
        return model, accuracy

class MLAdvanced:
    """Advanced ML techniques"""
    
    @staticmethod
    def cross_validation_example():
        """Cross-validation implementation"""
        from sklearn.model_selection import cross_val_score
        from sklearn.datasets import load_wine
        
        wine = load_wine()
        X, y = wine.data, wine.target
        
        model = RandomForestClassifier(n_estimators=100, random_state=42)
        scores = cross_val_score(model, X, y, cv=5)
        
        return scores.mean(), scores.std()
    
    @staticmethod
    def hyperparameter_tuning():
        """Hyperparameter tuning example"""
        from sklearn.model_selection import GridSearchCV
        from sklearn.datasets import load_digits
        
        digits = load_digits()
        X, y = digits.data, digits.target
        
        param_grid = {
            'n_estimators': [50, 100, 200],
            'max_depth': [None, 10, 20]
        }
        
        grid_search = GridSearchCV(
            RandomForestClassifier(random_state=42),
            param_grid, cv=5, scoring='accuracy'
        )
        
        grid_search.fit(X, y)
        
        return grid_search.best_params_, grid_search.best_score_

# =============================================================================
# PHASE 3: DEEP LEARNING
# =============================================================================

class DeepLearningBasics:
    """Deep Learning fundamentals"""
    
    @staticmethod
    def neural_network_from_scratch():
        """Simple neural network implementation"""
        class SimpleNN:
            def __init__(self, input_size, hidden_size, output_size):
                self.W1 = np.random.randn(input_size, hidden_size) * 0.1
                self.b1 = np.zeros((1, hidden_size))
                self.W2 = np.random.randn(hidden_size, output_size) * 0.1
                self.b2 = np.zeros((1, output_size))
            
            def sigmoid(self, x):
                return 1 / (1 + np.exp(-np.clip(x, -500, 500)))
            
            def forward(self, X):
                self.z1 = np.dot(X, self.W1) + self.b1
                self.a1 = self.sigmoid(self.z1)
                self.z2 = np.dot(self.a1, self.W2) + self.b2
                self.a2 = self.sigmoid(self.z2)
                return self.a2
        
        return SimpleNN
    
    @staticmethod
    def tensorflow_example():
        """TensorFlow/Keras example"""
        # Create simple model
        model = keras.Sequential([
            keras.layers.Dense(64, activation='relu', input_shape=(784,)),
            keras.layers.Dropout(0.2),
            keras.layers.Dense(32, activation='relu'),
            keras.layers.Dense(10, activation='softmax')
        ])
        
        model.compile(
            optimizer='adam',
            loss='sparse_categorical_crossentropy',
            metrics=['accuracy']
        )
        
        return model
    
    @staticmethod
    def cnn_example():
        """CNN example"""
        model = keras.Sequential([
            keras.layers.Conv2D(32, (3, 3), activation='relu', 
                               input_shape=(28, 28, 1)),
            keras.layers.MaxPooling2D((2, 2)),
            keras.layers.Conv2D(64, (3, 3), activation='relu'),
            keras.layers.MaxPooling2D((2, 2)),
            keras.layers.Flatten(),
            keras.layers.Dense(64, activation='relu'),
            keras.layers.Dense(10, activation='softmax')
        ])
        
        return model

# =============================================================================
# UTILITY FUNCTIONS
# =============================================================================

class Utilities:
    """Utility functions for course"""
    
    @staticmethod
    def plot_learning_curve(train_scores, val_scores, title="Learning Curve"):
        """Plot learning curve"""
        plt.figure(figsize=(10, 6))
        plt.plot(train_scores, label='Training Score')
        plt.plot(val_scores, label='Validation Score')
        plt.title(title)
        plt.xlabel('Epochs')
        plt.ylabel('Score')
        plt.legend()
        plt.grid(True)
        plt.show()
    
    @staticmethod
    def evaluate_model(model, X_test, y_test, task_type='classification'):
        """Comprehensive model evaluation"""
        y_pred = model.predict(X_test)
        
        if task_type == 'classification':
            from sklearn.metrics import classification_report, confusion_matrix
            accuracy = accuracy_score(y_test, y_pred)
            report = classification_report(y_test, y_pred)
            cm = confusion_matrix(y_test, y_pred)
            
            return {
                'accuracy': accuracy,
                'report': report,
                'confusion_matrix': cm
            }
        else:  # regression
            from sklearn.metrics import r2_score
            mse = mean_squared_error(y_test, y_pred)
            r2 = r2_score(y_test, y_pred)
            
            return {
                'mse': mse,
                'rmse': np.sqrt(mse),
                'r2': r2
            }
    
    @staticmethod
    def create_sample_dataset(n_samples=1000, task='classification'):
        """Create sample dataset for practice"""
        if task == 'classification':
            from sklearn.datasets import make_classification
            X, y = make_classification(
                n_samples=n_samples, n_features=10, n_classes=2,
                n_informative=5, random_state=42
            )
        else:  # regression
            from sklearn.datasets import make_regression
            X, y = make_regression(
                n_samples=n_samples, n_features=10, noise=0.1,
                random_state=42
            )
        
        return X, y

# =============================================================================
# MAIN EXECUTION
# =============================================================================

def main():
    """Main function to demonstrate examples"""
    print("🚀 AI/ML Course Code Examples")
    print("=" * 50)
    
    # Python Basics
    print("\n📖 Python Basics Demo:")
    basics = PythonBasics()
    basics.data_types_demo()
    
    # NumPy Example
    print("\n🔢 NumPy Demo:")
    arr1, arr2, arr3, matrix, result = NumpyExamples.array_operations()
    print(f"Array sum: {result['sum']}")
    print(f"Array mean: {result['mean']}")
    
    # ML Example
    print("\n🧠 Machine Learning Demo:")
    model, accuracy = MLBasics.first_ml_model()
    print(f"Model accuracy: {accuracy:.4f}")
    
    # Deep Learning Example
    print("\n🔥 Deep Learning Demo:")
    dl_model = DeepLearningBasics.tensorflow_example()
    print(f"Model created with {dl_model.count_params()} parameters")
    
    print("\n✅ All examples completed successfully!")

if __name__ == "__main__":
    main()