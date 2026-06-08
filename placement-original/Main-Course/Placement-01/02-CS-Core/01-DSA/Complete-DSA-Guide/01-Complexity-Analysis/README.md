# ⏱️ **Time & Space Complexity Analysis**

## 📚 **Table of Contents**
1. [Introduction to Complexity Analysis](#introduction)
2. [Big O, Omega, and Theta Notations](#notations)
3. [Time Complexity Analysis](#time-complexity)
4. [Space Complexity Analysis](#space-complexity)
5. [Common Time Complexities](#common-complexities)
6. [Complexity Analysis Examples](#examples)
7. [Practice Problems](#practice-problems)
8. [Cheat Sheet](#cheat-sheet)

---

## 🎯 **Introduction to Complexity Analysis** {#introduction}

### **What is Complexity Analysis?**
Complexity analysis is the study of how the runtime and space requirements of an algorithm grow with the size of the input. It helps us:
- Compare different algorithms
- Predict performance for large inputs
- Choose the most efficient solution
- Optimize existing algorithms

### **Why is it Important?**
```
✅ Performance Prediction: Know how your algorithm scales
✅ Algorithm Comparison: Choose the best approach
✅ Resource Planning: Estimate memory and time requirements
✅ Interview Success: Essential for technical interviews
```

---

## 📊 **Big O, Omega, and Theta Notations** {#notations}

### **Big O Notation (Upper Bound)**
Describes the worst-case scenario of an algorithm.

```python
# Example: Linear Search
def linear_search(arr, target):
    for i in range(len(arr)):  # O(n) iterations in worst case
        if arr[i] == target:
            return i
    return -1

# Time Complexity: O(n) - worst case when element is not found
```

### **Omega Notation (Lower Bound)**
Describes the best-case scenario of an algorithm.

```python
# Same linear search
# Best case: element found at first position
# Time Complexity: Ω(1)
```

### **Theta Notation (Tight Bound)**
Describes the average-case scenario when upper and lower bounds are the same.

```python
# Example: Accessing array element
def get_element(arr, index):
    return arr[index]

# Time Complexity: Θ(1) - always constant time
```

---

## ⏰ **Time Complexity Analysis** {#time-complexity}

### **How to Calculate Time Complexity**

#### **1. Simple Statements**
```python
# Each statement takes O(1) time
x = 5           # O(1)
y = x + 10      # O(1)
print(y)        # O(1)
# Total: O(1)
```

#### **2. Loops**
```python
# Single Loop
for i in range(n):      # O(n)
    print(i)            # O(1)
# Total: O(n)

# Nested Loops
for i in range(n):      # O(n)
    for j in range(m):  # O(m)
        print(i, j)     # O(1)
# Total: O(n × m)

# Triple Nested Loops
for i in range(n):      # O(n)
    for j in range(n):  # O(n)
        for k in range(n):  # O(n)
            print(i, j, k)  # O(1)
# Total: O(n³)
```

#### **3. Recursive Functions**
```python
# Binary Search (Divide and Conquer)
def binary_search(arr, target, left, right):
    if left > right:
        return -1
    
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] > target:
        return binary_search(arr, target, left, mid - 1)
    else:
        return binary_search(arr, target, mid + 1, right)

# Recurrence: T(n) = T(n/2) + O(1)
# Time Complexity: O(log n)
```

#### **4. Multiple Recursive Calls**
```python
# Fibonacci (Naive Implementation)
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Recurrence: T(n) = T(n-1) + T(n-2) + O(1)
# Time Complexity: O(2^n)
```

### **Advanced Time Complexity Examples**

#### **Master Theorem**
For recurrences of the form: `T(n) = aT(n/b) + f(n)`

```
Case 1: If f(n) = O(n^(log_b(a) - ε)), then T(n) = Θ(n^log_b(a))
Case 2: If f(n) = Θ(n^log_b(a)), then T(n) = Θ(n^log_b(a) × log n)
Case 3: If f(n) = Ω(n^(log_b(a) + ε)), then T(n) = Θ(f(n))
```

**Examples:**
```python
# Merge Sort: T(n) = 2T(n/2) + O(n)
# a=2, b=2, f(n)=n, log_b(a)=1
# Case 2: T(n) = O(n log n)

# Binary Search: T(n) = T(n/2) + O(1)
# a=1, b=2, f(n)=1, log_b(a)=0
# Case 2: T(n) = O(log n)

# Karatsuba Multiplication: T(n) = 3T(n/2) + O(n)
# a=3, b=2, f(n)=n, log_b(a)≈1.58
# Case 1: T(n) = O(n^1.58)
```

---

## 💾 **Space Complexity Analysis** {#space-complexity}

### **Types of Space Complexity**

#### **1. Auxiliary Space**
Extra space used by the algorithm (excluding input space).

```python
# Example 1: Constant Auxiliary Space
def find_max(arr):
    max_val = arr[0]        # O(1) space
    for i in range(1, len(arr)):
        if arr[i] > max_val:
            max_val = arr[i]
    return max_val
# Auxiliary Space: O(1)

# Example 2: Linear Auxiliary Space
def reverse_array(arr):
    reversed_arr = []       # O(n) space
    for i in range(len(arr)-1, -1, -1):
        reversed_arr.append(arr[i])
    return reversed_arr
# Auxiliary Space: O(n)
```

#### **2. Total Space Complexity**
Input space + Auxiliary space

```python
# Recursive Factorial
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n-1)

# Call stack depth: O(n)
# Each call uses O(1) space
# Total Space: O(n)
```

---

## 📈 **Common Time Complexities** {#common-complexities}

### **Complexity Ranking (Best to Worst)**
```
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2^n) < O(n!)
```

### **Detailed Breakdown**

#### **1. Constant Time - O(1)**
```python
# Array access
def get_first_element(arr):
    return arr[0]

# Hash table operations (average case)
def hash_lookup(hash_table, key):
    return hash_table[key]

# Arithmetic operations
def add_numbers(a, b):
    return a + b
```

#### **2. Logarithmic Time - O(log n)**
```python
# Binary Search
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Binary Search Tree operations (balanced)
# Finding height of balanced binary tree
```

#### **3. Linear Time - O(n)**
```python
# Linear Search
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Array traversal
def sum_array(arr):
    total = 0
    for num in arr:
        total += num
    return total

# Finding maximum/minimum
def find_max(arr):
    max_val = arr[0]
    for num in arr:
        if num > max_val:
            max_val = num
    return max_val
```

#### **4. Linearithmic Time - O(n log n)**
```python
# Merge Sort
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

# Quick Sort (average case)
# Heap Sort
# Building heap from array
```

#### **5. Quadratic Time - O(n²)**
```python
# Bubble Sort
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

# Selection Sort
def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

# Nested loops with same range
```

#### **6. Cubic Time - O(n³)**
```python
# Three nested loops
def three_sum_brute_force(arr):
    n = len(arr)
    triplets = []
    for i in range(n):
        for j in range(i+1, n):
            for k in range(j+1, n):
                if arr[i] + arr[j] + arr[k] == 0:
                    triplets.append([arr[i], arr[j], arr[k]])
    return triplets

# Matrix multiplication (naive approach)
```

#### **7. Exponential Time - O(2^n)**
```python
# Fibonacci (naive recursive)
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Subset generation
def generate_subsets(arr):
    if not arr:
        return [[]]
    
    first = arr[0]
    rest_subsets = generate_subsets(arr[1:])
    new_subsets = []
    
    for subset in rest_subsets:
        new_subsets.append(subset)
        new_subsets.append([first] + subset)
    
    return new_subsets
```

#### **8. Factorial Time - O(n!)**
```python
# Permutation generation
def generate_permutations(arr):
    if len(arr) <= 1:
        return [arr]
    
    permutations = []
    for i in range(len(arr)):
        first = arr[i]
        rest = arr[:i] + arr[i+1:]
        for perm in generate_permutations(rest):
            permutations.append([first] + perm)
    
    return permutations

# Traveling Salesman Problem (brute force)
```

---

## 🔍 **Complexity Analysis Examples** {#examples}

### **Example 1: Nested Loops with Different Patterns**

```python
# Pattern 1: Both loops go to n
def pattern1(n):
    count = 0
    for i in range(n):          # O(n)
        for j in range(n):      # O(n)
            count += 1          # O(1)
    return count
# Time Complexity: O(n²)

# Pattern 2: Inner loop depends on outer loop
def pattern2(n):
    count = 0
    for i in range(n):          # O(n)
        for j in range(i):      # O(i) where i goes from 0 to n-1
            count += 1          # O(1)
    return count
# Total iterations: 0 + 1 + 2 + ... + (n-1) = n(n-1)/2
# Time Complexity: O(n²)

# Pattern 3: Inner loop decreases
def pattern3(n):
    count = 0
    for i in range(n):          # O(n)
        for j in range(i, n):   # O(n-i)
            count += 1          # O(1)
    return count
# Total iterations: n + (n-1) + (n-2) + ... + 1 = n(n+1)/2
# Time Complexity: O(n²)

# Pattern 4: Logarithmic inner loop
def pattern4(n):
    count = 0
    for i in range(n):          # O(n)
        j = 1
        while j < n:            # O(log n)
            count += 1
            j *= 2
    return count
# Time Complexity: O(n log n)
```

### **Example 2: Recursive Algorithm Analysis**

```python
# Example 1: Linear Recursion
def sum_array_recursive(arr, index=0):
    if index >= len(arr):
        return 0
    return arr[index] + sum_array_recursive(arr, index + 1)
# T(n) = T(n-1) + O(1) = O(n)
# Space: O(n) due to call stack

# Example 2: Binary Recursion
def fibonacci_recursive(n):
    if n <= 1:
        return n
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
# T(n) = T(n-1) + T(n-2) + O(1) = O(2^n)
# Space: O(n) due to maximum call stack depth

# Example 3: Divide and Conquer
def merge_sort_analysis(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort_analysis(arr[:mid])    # T(n/2)
    right = merge_sort_analysis(arr[mid:])   # T(n/2)
    return merge(left, right)                # O(n)
# T(n) = 2T(n/2) + O(n) = O(n log n)
# Space: O(n) for merge operation + O(log n) for call stack = O(n)
```

### **Example 3: Space Complexity Analysis**

```python
# Example 1: Iterative vs Recursive Space
def factorial_iterative(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result
# Space Complexity: O(1)

def factorial_recursive(n):
    if n <= 1:
        return 1
    return n * factorial_recursive(n - 1)
# Space Complexity: O(n) - call stack

# Example 2: Data Structure Space Analysis
def create_frequency_map(arr):
    freq_map = {}               # O(k) where k is unique elements
    for element in arr:         # O(n) iterations
        if element in freq_map:
            freq_map[element] += 1
        else:
            freq_map[element] = 1
    return freq_map
# Time: O(n), Space: O(k) where k ≤ n

# Example 3: Matrix Operations
def transpose_matrix(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    transposed = [[0] * rows for _ in range(cols)]  # O(rows × cols)
    
    for i in range(rows):
        for j in range(cols):
            transposed[j][i] = matrix[i][j]
    
    return transposed
# Time: O(rows × cols), Space: O(rows × cols)
```

---

## 🧩 **Practice Problems** {#practice-problems}

### **Problem 1: Analyze Time Complexity**
```python
def mystery_function1(n):
    count = 0
    i = n
    while i > 0:
        for j in range(i):
            count += 1
        i //= 2
    return count

# Question: What is the time complexity?
# Answer: O(n) - geometric series sum
```

### **Problem 2: Recursive Complexity**
```python
def mystery_function2(n):
    if n <= 1:
        return 1
    return mystery_function2(n//2) + mystery_function2(n//2)

# Question: What is the time complexity?
# Answer: O(n) - T(n) = 2T(n/2) + O(1)
```

### **Problem 3: Space Complexity**
```python
def mystery_function3(arr):
    n = len(arr)
    result = []
    for i in range(n):
        temp = []
        for j in range(i):
            temp.append(arr[j])
        result.append(temp)
    return result

# Question: What is the space complexity?
# Answer: O(n²) - total elements stored
```

### **Problem 4: Complex Analysis**
```python
def complex_function(n):
    # Phase 1
    for i in range(n):
        for j in range(n):
            print(i, j)
    
    # Phase 2
    i = 1
    while i < n:
        for j in range(i):
            print(i, j)
        i *= 2
    
    # Phase 3
    for i in range(n):
        j = n
        while j > 0:
            print(i, j)
            j //= 2

# Question: Analyze each phase and overall complexity
# Phase 1: O(n²)
# Phase 2: O(n) - geometric series
# Phase 3: O(n log n)
# Overall: O(n²)
```

---

## 📋 **Complexity Analysis Cheat Sheet** {#cheat-sheet}

### **Quick Reference Table**

| Complexity | Name | Example | Growth Rate |
|------------|------|---------|-------------|
| O(1) | Constant | Array access, Hash lookup | Best |
| O(log n) | Logarithmic | Binary search, Balanced BST | Excellent |
| O(n) | Linear | Linear search, Array traversal | Good |
| O(n log n) | Linearithmic | Merge sort, Heap sort | Fair |
| O(n²) | Quadratic | Bubble sort, Nested loops | Poor |
| O(n³) | Cubic | Matrix multiplication | Bad |
| O(2^n) | Exponential | Fibonacci (naive), Subsets | Very Bad |
| O(n!) | Factorial | Permutations, TSP brute force | Worst |

### **Common Algorithms Complexity**

#### **Sorting Algorithms**
| Algorithm | Best Case | Average Case | Worst Case | Space |
|-----------|-----------|--------------|------------|-------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) |

#### **Search Algorithms**
| Algorithm | Best Case | Average Case | Worst Case | Space |
|-----------|-----------|--------------|------------|-------|
| Linear Search | O(1) | O(n) | O(n) | O(1) |
| Binary Search | O(1) | O(log n) | O(log n) | O(1) |
| DFS | O(1) | O(V + E) | O(V + E) | O(V) |
| BFS | O(1) | O(V + E) | O(V + E) | O(V) |

#### **Data Structure Operations**
| Data Structure | Access | Search | Insertion | Deletion | Space |
|----------------|--------|--------|-----------|----------|-------|
| Array | O(1) | O(n) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(n) | O(1) | O(1) | O(n) |
| Stack | O(n) | O(n) | O(1) | O(1) | O(n) |
| Queue | O(n) | O(n) | O(1) | O(1) | O(n) |
| Hash Table | N/A | O(1) | O(1) | O(1) | O(n) |
| Binary Search Tree | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |
| Heap | N/A | O(n) | O(log n) | O(log n) | O(n) |

### **Analysis Tips**

#### **1. Drop Constants and Lower Terms**
```
O(3n + 2) = O(n)
O(n² + n + 1) = O(n²)
O(2^n + n³) = O(2^n)
```

#### **2. Different Input Sizes**
```python
def function(a, b):
    for i in range(len(a)):     # O(n) where n = len(a)
        for j in range(len(b)): # O(m) where m = len(b)
            print(i, j)
# Time Complexity: O(n × m)
```

#### **3. Amortized Analysis**
```
Dynamic Array (ArrayList):
- Individual insertion: O(n) worst case
- Amortized insertion: O(1) average case
```

#### **4. Best vs Average vs Worst Case**
```
Quick Sort:
- Best: O(n log n) - perfect pivot selection
- Average: O(n log n) - random pivot
- Worst: O(n²) - always worst pivot
```

---

## 🎯 **Key Takeaways**

✅ **Understand the Big O notation** - Focus on worst-case analysis  
✅ **Practice identifying patterns** - Loops, recursion, divide-and-conquer  
✅ **Consider both time and space** - Some algorithms trade time for space  
✅ **Use appropriate analysis techniques** - Master theorem for divide-and-conquer  
✅ **Think about real-world constraints** - Constants matter for small inputs  

### **Next Steps**
1. Practice analyzing complexity of given code snippets
2. Learn to optimize algorithms based on complexity analysis
3. Understand trade-offs between different approaches
4. Study advanced topics like amortized analysis
5. Apply complexity analysis to real-world problems

---

*Master complexity analysis to write efficient algorithms and ace technical interviews!*
