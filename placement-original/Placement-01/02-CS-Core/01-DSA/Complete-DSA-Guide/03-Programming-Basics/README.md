# Basic Programming Constructs

## Table of Contents
- [Introduction](#introduction)
- [1. Variables, Data Types, and Operators](#1-variables-data-types-and-operators)
- [2. Control Flow](#2-control-flow)
- [3. Functions](#3-functions)
- [4. Recursion Basics](#4-recursion-basics)
- [5. Arrays and Strings](#5-arrays-and-strings)
- [6. Memory Management](#6-memory-management)
- [7. Time and Space Complexity Analysis](#7-time-and-space-complexity-analysis)
- [8. Input/Output Operations](#8-inputoutput-operations)
- [9. Common Programming Patterns](#9-common-programming-patterns)
- [10. Practice Problems](#10-practice-problems)
- [11. Resources](#11-resources)

## Introduction

Programming basics are the building blocks for implementing data structures and algorithms. This section covers fundamental programming constructs essential for DSA implementation across languages. While examples are primarily in C++ and Python, the concepts apply to most programming languages.

## 1. Variables, Data Types, and Operators

### 1.1 Common Data Types

#### Primitive Types
| Type | C++ | Python | Java |
|------|-----|--------|------|
| Integer | `int`, `long`, `long long` | `int` | `int`, `long` |
| Floating Point | `float`, `double` | `float` | `float`, `double` |
| Character | `char` | N/A (strings) | `char` |
| Boolean | `bool` | `bool` | `boolean` |

#### Complex Types
| Type | C++ | Python | Java |
|------|-----|--------|------|
| String | `string` | `str` | `String` |
| Array | `type arr[size]` | `list`, `tuple` | `type[]` |
| Dictionary | `unordered_map<K, V>` | `dict` | `HashMap<K, V>` |
| Set | `unordered_set<T>` | `set` | `HashSet<T>` |

### 1.2 Common Operators

#### Arithmetic Operators
- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`*`)
- Division (`/`)
- Modulo (`%`)
- Increment (`++`) (C++, Java)
- Decrement (`--`) (C++, Java)

#### Comparison Operators
- Equal to (`==`)
- Not equal to (`!=`)
- Greater than (`>`)
- Less than (`<`)
- Greater than or equal to (`>=`)
- Less than or equal to (`<=`)

#### Logical Operators
- AND (`&&` in C++/Java, `and` in Python)
- OR (`||` in C++/Java, `or` in Python)
- NOT (`!` in C++/Java, `not` in Python)

#### Bitwise Operators
- AND (`&`)
- OR (`|`)
- XOR (`^`)
- NOT (`~`)
- Left shift (`<<`)
- Right shift (`>>`)

## 2. Control Flow

### 2.1 Conditional Statements

#### If-Else
```cpp
// C++
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else {
    // code if all conditions are false
}
```

```python
# Python
if condition1:
    # code if condition1 is true
elif condition2:
    # code if condition2 is true
else:
    # code if all conditions are false
```

#### Switch-Case (C++, Java)
```cpp
// C++
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // default code
}
```

### 2.2 Loops

#### For Loop
```cpp
// C++
for (int i = 0; i < n; i++) {
    // code
}
```

```python
# Python
for i in range(n):
    # code
```

#### While Loop
```cpp
// C++
while (condition) {
    // code
}
```

```python
# Python
while condition:
    # code
```

#### Do-While Loop (C++, Java)
```cpp
// C++
do {
    // code
} while (condition);
```

### 2.3 Break and Continue

```cpp
// C++
for (int i = 0; i < n; i++) {
    if (condition1) break;    // Exit loop
    if (condition2) continue; // Skip to next iteration
    // code
}
```

```python
# Python
for i in range(n):
    if condition1: break     # Exit loop
    if condition2: continue  # Skip to next iteration
    # code
```

## 3. Functions

### 3.1 Function Declaration and Definition

#### C++
```cpp
// Function declaration
returnType functionName(paramType1 param1, paramType2 param2);

// Function definition
returnType functionName(paramType1 param1, paramType2 param2) {
    // function body
    return value;  // if return type is not void
}
```

#### Python
```python
def function_name(param1, param2):
    # function body
    return value  # optional
```

### 3.2 Pass by Value vs Reference

#### Pass by Value
```cpp
// C++
void increment(int x) {
    x++;  // Only the local copy is modified
}

int main() {
    int a = 5;
    increment(a);
    // a is still 5
    return 0;
}
```

#### Pass by Reference
```cpp
// C++
void increment(int &x) {
    x++;  // Original value is modified
}

int main() {
    int a = 5;
    increment(a);
    // a is now 6
    return 0;
}
```

### 3.3 Function Overloading (C++, Java)

```cpp
// C++
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}
```

## 4. Recursion Basics

### 4.1 Understanding Recursion
- **Base case**: Condition where recursion stops
- **Recursive case**: Condition where function calls itself

### 4.2 Basic Recursion Example

#### Factorial
```cpp
// C++
int factorial(int n) {
    // Base case
    if (n == 0 || n == 1) return 1;
    
    // Recursive case
    return n * factorial(n - 1);
}
```

```python
# Python
def factorial(n):
    # Base case
    if n == 0 or n == 1:
        return 1
    
    # Recursive case
    return n * factorial(n - 1)
```

#### Fibonacci
```cpp
// C++
int fibonacci(int n) {
    // Base cases
    if (n <= 1) return n;
    
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### 4.3 Recursion vs Iteration
- **Recursion**: More intuitive for certain problems, but has overhead
- **Iteration**: Usually more efficient, but can be harder to implement for complex problems

## 5. Arrays and Strings

### 5.1 Array Declaration and Initialization

#### C++
```cpp
// Fixed-size array
int arr[5] = {1, 2, 3, 4, 5};

// Dynamic array (vector)
vector<int> vec = {1, 2, 3, 4, 5};
vector<int> vec2(5, 0);  // Initialize with 5 zeros
```

#### Python
```python
# List (dynamic array)
arr = [1, 2, 3, 4, 5]
arr2 = [0] * 5  # Initialize with 5 zeros
```

### 5.2 String Operations

#### C++
```cpp
// String declaration
string str = "Hello";

// Concatenation
string result = str + " World";

// Substring
string sub = str.substr(0, 2);  // "He"

// Length
int len = str.length();  // 5
```

#### Python
```python
# String declaration
s = "Hello"

# Concatenation
result = s + " World"

# Substring
sub = s[0:2]  # "He"

# Length
length = len(s)  # 5
```

## 6. Memory Management

### 6.1 Stack vs Heap Memory
- **Stack**: Automatic memory allocation and deallocation (local variables)
- **Heap**: Dynamic memory allocation (requires manual deallocation in languages without garbage collection)

### 6.2 Dynamic Memory Allocation

#### C++
```cpp
// Dynamic allocation
int *ptr = new int;
*ptr = 10;

// Array allocation
int *arr = new int[5];

// Deallocation
delete ptr;
delete[] arr;
```

### 6.3 Common Memory Issues
- **Memory Leak**: Failing to free dynamically allocated memory
- **Dangling Pointer**: Pointer that references freed memory
- **Buffer Overflow**: Writing beyond allocated memory bounds

## 7. Time and Space Complexity Analysis

### 7.1 Big O Notation
- O(1): Constant time
- O(log n): Logarithmic time
- O(n): Linear time
- O(n log n): Linearithmic time
- O(n²): Quadratic time
- O(2^n): Exponential time

### 7.2 Space Complexity
- **Auxiliary Space**: Extra space used by algorithm (excluding input)
- **Total Space**: Input space + Auxiliary space

### 7.3 Analyzing Simple Code

```cpp
// O(n) time, O(1) space
int sum(int arr[], int n) {
    int result = 0;
    for (int i = 0; i < n; i++) {
        result += arr[i];
    }
    return result;
}

// O(n²) time, O(1) space
bool hasDuplicate(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) return true;
        }
    }
    return false;
}
```

## 8. Input/Output Operations

### 8.1 Console I/O

#### C++
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    cout << "You entered: " << n << endl;
    return 0;
}
```

#### Python
```python
n = int(input("Enter a number: "))
print(f"You entered: {n}")
```

### 8.2 File I/O

#### C++
```cpp
#include <fstream>
using namespace std;

int main() {
    // Writing to file
    ofstream outFile("output.txt");
    outFile << "Hello World" << endl;
    outFile.close();
    
    // Reading from file
    ifstream inFile("input.txt");
    string line;
    while (getline(inFile, line)) {
        cout << line << endl;
    }
    inFile.close();
    return 0;
}
```

#### Python
```python
# Writing to file
with open("output.txt", "w") as f:
    f.write("Hello World\n")

# Reading from file
with open("input.txt", "r") as f:
    for line in f:
        print(line, end="")
```

## 9. Common Programming Patterns

### 9.1 Brute Force
- Try all possible solutions
- Usually O(n²), O(n³), or worse

```cpp
// C++: Find if array has a pair with sum = target
bool hasPairWithSum(vector<int>& nums, int target) {
    int n = nums.size();
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] == target) return true;
        }
    }
    return false;
}
```

### 9.2 Optimization with Data Structures
- Use appropriate data structures to optimize time complexity

```cpp
// C++: Optimized version using hash map
bool hasPairWithSum(vector<int>& nums, int target) {
    unordered_set<int> seen;
    for (int num : nums) {
        if (seen.find(target - num) != seen.end()) return true;
        seen.insert(num);
    }
    return false;
}
```

### 9.3 Divide and Conquer
- Break problem into smaller subproblems
- Solve subproblems independently
- Combine results

```cpp
// C++: Merge Sort example
void merge(vector<int>& arr, int left, int mid, int right) {
    // Merge two sorted subarrays
    // Implementation details omitted for brevity
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}
```

## 10. Practice Problems

### 10.1 Basic Programming Constructs
1. [HackerRank: Simple Array Sum](https://www.hackerrank.com/challenges/simple-array-sum/problem)
2. [LeetCode 1281: Subtract the Product and Sum of Digits of an Integer](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/)
3. [HackerRank: Staircase](https://www.hackerrank.com/challenges/staircase/problem)

### 10.2 Functions and Recursion
1. [LeetCode 509: Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
2. [LeetCode 344: Reverse String](https://leetcode.com/problems/reverse-string/)
3. [HackerRank: Recursive Digit Sum](https://www.hackerrank.com/challenges/recursive-digit-sum/problem)

### 10.3 Arrays and Strings
1. [LeetCode 1672: Richest Customer Wealth](https://leetcode.com/problems/richest-customer-wealth/)
2. [LeetCode 1470: Shuffle the Array](https://leetcode.com/problems/shuffle-the-array/)
3. [LeetCode 1528: Shuffle String](https://leetcode.com/problems/shuffle-string/)

## 11. Resources

### 11.1 Books
- "Programming Principles and Practice Using C++" by Bjarne Stroustrup
- "Python Crash Course" by Eric Matthes
- "Effective Java" by Joshua Bloch

### 11.2 Online Tutorials
- [GeeksforGeeks: Introduction to Programming](https://www.geeksforgeeks.org/introduction-to-programming-languages/)
- [W3Schools: Programming Tutorials](https://www.w3schools.com/)
- [freeCodeCamp: Programming Fundamentals](https://www.freecodecamp.org/)

### 11.3 Practice Platforms
- [HackerRank](https://www.hackerrank.com/)
- [LeetCode](https://leetcode.com/)
- [CodeChef](https://www.codechef.com/)
- [Codeforces](https://codeforces.com/)

---

## Key Takeaways

1. **Mastering the Basics**: Strong foundation in programming constructs is essential for efficient DSA implementation.
2. **Problem-Solving Approach**: Learn to break down problems and apply appropriate programming patterns.
3. **Language Agnostic**: Core programming concepts apply across languages, so focus on understanding the concepts rather than language-specific syntax.
4. **Practice**: Regular coding practice is essential for mastery.

## Notes on Love Babbar & Striver Sheet Approaches

Both Love Babbar and Striver's sheets assume a good understanding of basic programming constructs. Before tackling their problem sets, ensure you have a solid grasp of the concepts covered in this section.

### Recommended Initial Problems from Love Babbar Sheet
1. [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) (Array basics)
2. [Find Missing and Repeating](https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1) (Array manipulation)
3. [Kadane's Algorithm](https://leetcode.com/problems/maximum-subarray/) (Basic algorithm implementation)

### Recommended Initial Problems from Striver Sheet
1. [Set Matrix Zeros](https://leetcode.com/problems/set-matrix-zeroes/) (2D array manipulation)
2. [Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) (Basic algorithm implementation)
3. [Next Permutation](https://leetcode.com/problems/next-permutation/) (Array manipulation)
