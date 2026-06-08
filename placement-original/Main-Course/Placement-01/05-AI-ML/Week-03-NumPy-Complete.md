# Week 3: NumPy - Numerical Computing Foundation

## 📚 Learning Objectives
By the end of this week, you will:
- Master NumPy array operations and broadcasting
- Perform linear algebra computations efficiently
- Manipulate multi-dimensional arrays
- Apply NumPy for real-world data processing

---

## Day 1-2: NumPy Fundamentals

### Array Creation and Basic Operations

```python
import numpy as np

# Creating arrays
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([[1, 2, 3], [4, 5, 6]])

# Array from range
range_arr = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]

# Linspace
linear = np.linspace(0, 1, 5)  # [0, 0.25, 0.5, 0.75, 1]

# Zeros and ones
zeros = np.zeros((3, 4))
ones = np.ones((2, 3))
identity = np.eye(4)

# Random arrays
random_arr = np.random.rand(3, 3)  # Uniform [0, 1]
random_int = np.random.randint(0, 100, size=(3, 3))
random_normal = np.random.randn(1000)  # Normal distribution

print(f"Shape: {arr2.shape}")
print(f"Dtype: {arr2.dtype}")
print(f"Size: {arr2.size}")
print(f"Dimensions: {arr2.ndim}")
```

### Array Indexing and Slicing

```python
# 1D indexing
arr = np.array([10, 20, 30, 40, 50])
print(arr[0])      # 10
print(arr[-1])     # 50
print(arr[1:4])    # [20, 30, 40]
print(arr[::2])    # [10, 30, 50]

# 2D indexing
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(matrix[0, 1])     # 2
print(matrix[1, :])     # [4, 5, 6]
print(matrix[:, 1])     # [2, 5, 8]
print(matrix[0:2, 1:3]) # [[2, 3], [5, 6]]

# Boolean indexing
arr = np.array([1, 2, 3, 4, 5])
mask = arr > 3
print(arr[mask])  # [4, 5]
print(arr[arr % 2 == 0])  # [2, 4]

# Fancy indexing
arr = np.array([10, 20, 30, 40, 50])
indices = [0, 2, 4]
print(arr[indices])  # [10, 30, 50]
```

### Basic Operations

```python
# Element-wise operations
a = np.array([1, 2, 3, 4])
b = np.array([10, 20, 30, 40])

print(a + b)      # [11, 22, 33, 44]
print(a * b)      # [10, 40, 90, 160]
print(a ** 2)     # [1, 4, 9, 16]
print(np.sqrt(a)) # [1., 1.41, 1.73, 2.]

# Scalar operations
print(a * 10)     # [10, 20, 30, 40]
print(a + 5)      # [6, 7, 8, 9]

# Universal functions
arr = np.array([-1, -2, 3, 4])
print(np.abs(arr))   # [1, 2, 3, 4]
print(np.exp(arr))   # Exponential
print(np.log(arr[arr > 0]))  # Natural log
print(np.sin(arr))   # Sine
```

### Statistical Operations

```python
data = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# Basic statistics
print(np.mean(data))        # 5.0
print(np.median(data))      # 5.0
print(np.std(data))         # Standard deviation
print(np.var(data))         # Variance

# Axis-specific operations
print(np.mean(data, axis=0))  # Column means: [4, 5, 6]
print(np.mean(data, axis=1))  # Row means: [2, 5, 8]

# Min/Max
print(np.min(data))         # 1
print(np.max(data))         # 9
print(np.argmin(data))      # Index of min
print(np.argmax(data))      # Index of max

# Sum and cumulative sum
print(np.sum(data))         # 45
print(np.cumsum(data))      # Cumulative sum
```

---

## Day 3-4: Advanced Array Operations

### Broadcasting

```python
# Broadcasting rules demonstration
a = np.array([[1, 2, 3], [4, 5, 6]])  # (2, 3)
b = np.array([10, 20, 30])            # (3,)

result = a + b  # b broadcasts to (2, 3)
print(result)
# [[11, 22, 33],
#  [14, 25, 36]]

# Example: Normalize columns
data = np.random.rand(100, 3)
mean = data.mean(axis=0)      # (3,)
std = data.std(axis=0)        # (3,)
normalized = (data - mean) / std

# Example: Pairwise distances
points = np.array([[0, 0], [3, 4], [6, 8]])
distances = np.sqrt(((points[:, np.newaxis] - points) ** 2).sum(axis=2))
print(distances)
```

### Reshaping and Transposing

```python
# Reshape
arr = np.arange(12)
reshaped = arr.reshape(3, 4)
print(reshaped)

# Flatten
flattened = reshaped.flatten()
print(flattened)

# Ravel (view, not copy)
raveled = reshaped.ravel()

# Transpose
print(reshaped.T)
print(np.transpose(reshaped))

# Swap axes
arr_3d = np.random.rand(2, 3, 4)
swapped = np.swapaxes(arr_3d, 0, 2)
```

### Stacking and Splitting

```python
# Concatenation
a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])

# Vertical stack (vstack)
vertical = np.vstack([a, b])
print(vertical)
# [[1, 2],
#  [3, 4],
#  [5, 6],
#  [7, 8]]

# Horizontal stack (hstack)
horizontal = np.hstack([a, b])
print(horizontal)
# [[1, 2, 5, 6],
#  [3, 4, 7, 8]]

# Depth stack
depth = np.dstack([a, b])

# Splitting
arr = np.arange(16).reshape(4, 4)
split_arr = np.split(arr, 2, axis=0)  # Split into 2 parts
print(split_arr)
```

### Advanced Indexing

```python
# Multi-dimensional boolean indexing
data = np.random.randn(7, 4)
print(data[data > 0])  # All positive values

# Setting values with boolean arrays
data[data < 0] = 0
print(data)

# Fancy indexing with arrays
arr = np.arange(32).reshape(8, 4)
print(arr[[1, 5, 7]])  # Rows 1, 5, 7
print(arr[[1, 5, 7], [0, 3, 1]])  # Specific elements

# np.where
arr = np.array([1, 2, 3, 4, 5])
result = np.where(arr > 3, 'high', 'low')
print(result)  # ['low', 'low', 'low', 'high', 'high']

# Conditional selection
positive = np.where(arr > 0, arr, 0)
```

---

## Day 5-6: Linear Algebra with NumPy

### Matrix Operations

```python
# Matrix creation
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Matrix multiplication
C = np.dot(A, B)  # or A @ B (Python 3.5+)
print(C)

# Element-wise multiplication
elem_mult = A * B

# Matrix power
print(np.linalg.matrix_power(A, 3))

# Trace (sum of diagonal)
print(np.trace(A))

# Determinant
det_A = np.linalg.det(A)
print(f"Determinant: {det_A}")

# Inverse
inv_A = np.linalg.inv(A)
print(f"Inverse:\n{inv_A}")

# Verify: A @ inv(A) = I
print(A @ inv_A)
```

### Eigenvalues and Eigenvectors

```python
# Symmetric matrix
A = np.array([[4, 2], [2, 3]])

# Compute eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)

print(f"Eigenvalues: {eigenvalues}")
print(f"Eigenvectors:\n{eigenvectors}")

# Verify: A @ v = λ * v
for i in range(len(eigenvalues)):
    lambda_i = eigenvalues[i]
    v_i = eigenvectors[:, i]
    
    print(f"\nEigenvalue {i+1}: {lambda_i}")
    print(f"A @ v = {A @ v_i}")
    print(f"λ * v = {lambda_i * v_i}")
```

### Solving Linear Systems

```python
# Solve Ax = b
A = np.array([[3, 1], [1, 2]])
b = np.array([9, 8])

# Solution
x = np.linalg.solve(A, b)
print(f"Solution: {x}")

# Verify
print(f"A @ x = {A @ x}")
print(f"b = {b}")

# Least squares solution (overdetermined system)
A_over = np.array([[1, 1], [1, 2], [1, 3]])
b_over = np.array([5, 7, 9])

x_ls, residuals, rank, s = np.linalg.lstsq(A_over, b_over, rcond=None)
print(f"Least squares solution: {x_ls}")
```

### Singular Value Decomposition (SVD)

```python
# Create matrix
A = np.array([[1, 2], [3, 4], [5, 6]])

# SVD: A = U @ S @ V^T
U, s, VT = np.linalg.svd(A)

print(f"U shape: {U.shape}")
print(f"s (singular values): {s}")
print(f"VT shape: {VT.shape}")

# Reconstruct matrix
S = np.zeros(A.shape)
S[:len(s), :len(s)] = np.diag(s)
reconstructed = U @ S @ VT

print(f"Original:\n{A}")
print(f"Reconstructed:\n{reconstructed}")

# Low-rank approximation (image compression concept)
k = 1  # Keep only first singular value
S_k = S.copy()
S_k[k:, :] = 0
approximation = U @ S_k @ VT
```

### Norms and Distances

```python
# Vector norms
v = np.array([3, 4])

# L1 norm (Manhattan)
l1 = np.linalg.norm(v, ord=1)
print(f"L1 norm: {l1}")  # 7

# L2 norm (Euclidean)
l2 = np.linalg.norm(v, ord=2)
print(f"L2 norm: {l2}")  # 5

# Infinity norm
linf = np.linalg.norm(v, ord=np.inf)
print(f"L∞ norm: {linf}")  # 4

# Matrix norms
A = np.array([[1, 2], [3, 4]])
frobenius = np.linalg.norm(A, 'fro')
print(f"Frobenius norm: {frobenius}")
```

---

## Day 7: Comprehensive Projects

### Project 1: Matrix Calculator

```python
class MatrixCalculator:
    """Advanced matrix calculator with various operations"""
    
    def __init__(self, matrix):
        self.matrix = np.array(matrix)
    
    def add(self, other):
        """Add two matrices"""
        return self.matrix + other
    
    def multiply(self, other):
        """Matrix multiplication"""
        return np.dot(self.matrix, other)
    
    def inverse(self):
        """Compute inverse if exists"""
        try:
            return np.linalg.inv(self.matrix)
        except np.linalg.LinAlgError:
            return "Matrix is singular"
    
    def eigenvalues(self):
        """Compute eigenvalues"""
        return np.linalg.eigvals(self.matrix)
    
    def determinant(self):
        """Compute determinant"""
        return np.linalg.det(self.matrix)
    
    def rank(self):
        """Compute matrix rank"""
        return np.linalg.matrix_rank(self.matrix)
    
    def transpose(self):
        """Transpose matrix"""
        return self.matrix.T
    
    def stats(self):
        """Statistical properties"""
        return {
            'mean': np.mean(self.matrix),
            'std': np.std(self.matrix),
            'max': np.max(self.matrix),
            'min': np.min(self.matrix)
        }

# Usage
calc = MatrixCalculator([[1, 2], [3, 4]])
print(f"Determinant: {calc.determinant()}")
print(f"Eigenvalues: {calc.eigenvalues()}")
print(f"Inverse:\n{calc.inverse()}")
```

### Project 2: Image Processing with NumPy

```python
import matplotlib.pyplot as plt

# Simulate image (grayscale)
image = np.random.randint(0, 256, size=(100, 100), dtype=np.uint8)

# Image transformations
def flip_horizontal(img):
    """Flip image horizontally"""
    return np.fliplr(img)

def flip_vertical(img):
    """Flip image vertically"""
    return np.flipud(img)

def rotate_90(img):
    """Rotate image 90 degrees"""
    return np.rot90(img)

def adjust_brightness(img, factor):
    """Adjust image brightness"""
    adjusted = img.astype(float) * factor
    return np.clip(adjusted, 0, 255).astype(np.uint8)

def add_noise(img, noise_level=0.1):
    """Add random noise to image"""
    noise = np.random.randn(*img.shape) * noise_level * 255
    noisy = img.astype(float) + noise
    return np.clip(noisy, 0, 255).astype(np.uint8)

def crop_center(img, crop_size):
    """Crop center of image"""
    h, w = img.shape
    start_h = (h - crop_size) // 2
    start_w = (w - crop_size) // 2
    return img[start_h:start_h+crop_size, start_w:start_w+crop_size]

# Apply transformations
transformed = {
    'Original': image,
    'Flipped H': flip_horizontal(image),
    'Flipped V': flip_vertical(image),
    'Rotated 90°': rotate_90(image),
    'Brightened': adjust_brightness(image, 1.5),
    'Noisy': add_noise(image)
}

# Visualize
fig, axes = plt.subplots(2, 3, figsize=(12, 8))
for ax, (title, img) in zip(axes.flat, transformed.items()):
    ax.imshow(img, cmap='gray')
    ax.set_title(title)
    ax.axis('off')
plt.tight_layout()
plt.savefig('image_transformations.png')
```

### Project 3: Statistical Data Analyzer

```python
class DataAnalyzer:
    """Statistical analysis toolkit using NumPy"""
    
    def __init__(self, data):
        self.data = np.array(data)
    
    def summary_stats(self):
        """Comprehensive statistical summary"""
        return {
            'count': self.data.size,
            'mean': np.mean(self.data),
            'median': np.median(self.data),
            'std': np.std(self.data),
            'var': np.var(self.data),
            'min': np.min(self.data),
            'max': np.max(self.data),
            '25th_percentile': np.percentile(self.data, 25),
            '75th_percentile': np.percentile(self.data, 75)
        }
    
    def normalize(self, method='zscore'):
        """Normalize data"""
        if method == 'zscore':
            return (self.data - np.mean(self.data)) / np.std(self.data)
        elif method == 'minmax':
            return (self.data - np.min(self.data)) / (np.max(self.data) - np.min(self.data))
    
    def detect_outliers(self, threshold=3):
        """Detect outliers using z-score"""
        z_scores = np.abs((self.data - np.mean(self.data)) / np.std(self.data))
        return self.data[z_scores > threshold]
    
    def correlation_matrix(self):
        """Compute correlation matrix (for 2D data)"""
        if self.data.ndim == 2:
            return np.corrcoef(self.data.T)
        return None

# Usage
data = np.random.randn(1000)
analyzer = DataAnalyzer(data)
print(analyzer.summary_stats())
print(f"Outliers: {analyzer.detect_outliers()}")
```

---

## 📝 Practice Exercises

1. **Array Manipulation**: Create a 5x5 matrix with random integers, find all prime numbers, replace them with -1
2. **Statistics**: Generate 10,000 random normal numbers, compute percentiles, plot histogram
3. **Linear Algebra**: Solve a system of 3 equations with 3 unknowns
4. **Broadcasting**: Normalize a dataset (100 samples, 10 features) column-wise
5. **Image Processing**: Create a checkerboard pattern (8x8) using NumPy

---

## 🎯 Week 3 Assessment

**Quiz Questions:**
1. What is broadcasting in NumPy?
2. Explain the difference between `.flatten()` and `.ravel()`
3. How do you compute eigenvalues of a matrix?
4. What is SVD used for?
5. Explain axis parameter in NumPy functions

**Coding Challenge:**
Build a complete matrix calculator CLI that supports:
- Basic operations (+, -, *, /)
- Advanced operations (inverse, determinant, eigenvalues)
- Statistical analysis
- User-friendly interface

**Expected Output:**
- Working calculator script
- Test cases demonstrating all features
- Documentation in README

---

## 📚 Additional Resources

- NumPy Official Documentation: https://numpy.org/doc/
- NumPy Tutorial by Nicolas Rougier
- "From Python to NumPy" - free online book
- Practice: HackerRank NumPy challenges

**Next Week**: Pandas for Data Manipulation! 🐼
