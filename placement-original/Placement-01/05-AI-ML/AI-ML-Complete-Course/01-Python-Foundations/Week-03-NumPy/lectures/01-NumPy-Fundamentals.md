# Week 3: NumPy for Numerical Computing

## Learning Objectives
- Master NumPy arrays and operations
- Understand broadcasting and vectorization
- Apply linear algebra operations
- Practice mathematical computations

## 1. NumPy Arrays

### Creating Arrays
```python
import numpy as np

# From lists
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([[1, 2], [3, 4]])

# Built-in functions
zeros = np.zeros((3, 4))
ones = np.ones((2, 3))
arange = np.arange(0, 10, 2)
linspace = np.linspace(0, 1, 5)
```

### Array Properties
```python
arr = np.array([[1, 2, 3], [4, 5, 6]])
print(f"Shape: {arr.shape}")      # (2, 3)
print(f"Size: {arr.size}")        # 6
print(f"Dtype: {arr.dtype}")      # int64
print(f"Dimensions: {arr.ndim}")  # 2
```

## 2. Array Operations

### Mathematical Operations
```python
a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

# Element-wise operations
addition = a + b        # [6, 8, 10, 12]
multiplication = a * b  # [5, 12, 21, 32]
power = a ** 2         # [1, 4, 9, 16]

# Universal functions
sqrt = np.sqrt(a)
exp = np.exp(a)
sin = np.sin(a)
```

### Statistical Operations
```python
data = np.array([1, 2, 3, 4, 5, 6])

mean = np.mean(data)      # 3.5
median = np.median(data)  # 3.5
std = np.std(data)        # 1.707
sum_val = np.sum(data)    # 21
```

## 3. Array Indexing and Slicing

### Basic Indexing
```python
arr = np.array([0, 1, 2, 3, 4, 5])
print(arr[0])    # 0
print(arr[-1])   # 5
print(arr[1:4])  # [1, 2, 3]
```

### Boolean Indexing
```python
arr = np.array([1, 2, 3, 4, 5])
mask = arr > 3
filtered = arr[mask]  # [4, 5]

# Direct filtering
even = arr[arr % 2 == 0]  # [2, 4]
```

## 4. Broadcasting

### Broadcasting Rules
```python
# Scalar with array
arr = np.array([1, 2, 3, 4])
result = arr * 2  # [2, 4, 6, 8]

# Arrays with different shapes
a = np.array([[1], [2], [3]])  # (3, 1)
b = np.array([10, 20, 30])     # (3,)
result = a + b  # Broadcasting to (3, 3)
```

## 5. Linear Algebra

### Matrix Operations
```python
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Matrix multiplication
C = np.dot(A, B)  # or A @ B

# Transpose
A_T = A.T

# Determinant and inverse
det = np.linalg.det(A)
inv = np.linalg.inv(A)
```

## Practice Examples

### Data Analysis Example
```python
# Generate sample data
np.random.seed(42)
sales_data = np.random.normal(1000, 200, (12, 4))  # 12 months, 4 products

# Calculate statistics
monthly_totals = np.sum(sales_data, axis=1)
product_averages = np.mean(sales_data, axis=0)
best_month = np.argmax(monthly_totals)

print(f"Best month: {best_month + 1}")
print(f"Product averages: {product_averages}")
```