# Assignment 3: NumPy for Data Science

**Due Date:** End of Week 3  
**Points:** 100  
**Estimated Time:** 4-5 hours

## Problem 1: Array Manipulation (25 points)

Create a program that performs various array operations:

```python
import numpy as np

# Create arrays
arr1 = np.arange(1, 13).reshape(3, 4)
arr2 = np.random.randint(1, 10, (3, 4))

# Required operations:
# 1. Element-wise addition, subtraction, multiplication
# 2. Matrix multiplication (if possible)
# 3. Statistical operations (mean, std, min, max)
# 4. Boolean indexing to filter values > 5
```

## Problem 2: Sales Data Analysis (30 points)

Analyze quarterly sales data for a company:

```python
# Sample data: 4 quarters, 5 products
sales_data = np.array([
    [1200, 1500, 800, 2000, 1100],   # Q1
    [1300, 1600, 900, 2100, 1200],   # Q2
    [1100, 1400, 700, 1900, 1000],   # Q3
    [1400, 1700, 1000, 2200, 1300]   # Q4
])

# Calculate:
# 1. Total sales per quarter
# 2. Average sales per product
# 3. Best performing quarter
# 4. Most consistent product (lowest std deviation)
# 5. Growth rate from Q1 to Q4
```

## Problem 3: Image Processing Simulation (25 points)

Simulate basic image operations using NumPy:

```python
# Create a "grayscale image" (2D array)
image = np.random.randint(0, 256, (100, 100))

# Implement:
# 1. Image brightness adjustment (add/subtract value)
# 2. Contrast enhancement (multiply by factor)
# 3. Image thresholding (binary conversion)
# 4. Edge detection simulation (gradient calculation)
# 5. Image statistics (mean brightness, contrast measure)
```

## Problem 4: Linear Algebra Applications (20 points)

Solve linear algebra problems:

```python
# System of equations: Ax = b
A = np.array([[2, 1, -1], [1, 3, 2], [1, 0, 2]])
b = np.array([8, 13, 10])

# Tasks:
# 1. Solve for x using np.linalg.solve()
# 2. Verify solution by computing A @ x
# 3. Calculate matrix determinant and inverse
# 4. Find eigenvalues and eigenvectors
# 5. Compute matrix rank and condition number
```

## Bonus: Performance Comparison (10 extra points)

Compare NumPy performance vs pure Python:

```python
import time

# Compare array operations
def python_sum(data):
    return sum(data)

def numpy_sum(data):
    return np.sum(data)

# Time both approaches with large arrays
# Report performance difference
```

## Submission Guidelines

Submit as `lastname_firstname_assignment3.py` with:
- Complete implementations
- Clear documentation
- Test cases with sample outputs
- Performance analysis (for bonus)

## Expected Output Format

```
=== Assignment 3: NumPy Analysis ===

Problem 1: Array Manipulation
-----------------------------
Array 1 shape: (3, 4)
Array 2 shape: (3, 4)
Element-wise sum: [[...]]
Statistical summary: Mean=5.2, Std=2.1

Problem 2: Sales Analysis
------------------------
Q1 Total: $7600
Q2 Total: $8100
Best Quarter: Q4
Most Consistent Product: Product 3

Problem 3: Image Processing
--------------------------
Original image stats: Mean=127.5, Std=73.2
After brightness +50: Mean=177.5
Thresholded pixels: 4892/10000

Problem 4: Linear Algebra
------------------------
Solution x: [2.0, 3.0, 1.0]
Verification: Ax = b ✓
Matrix determinant: 15.0
```