# Chapter 1: Complexity Analysis

## Learning Objectives

- Define asymptotic notation: Big-O, Omega, Theta.
- Analyze worst-case, average-case, and best-case complexity.
- Compute time and space complexity of iterative and recursive algorithms.
- Compare algorithms using growth-rate families.

## Theory

### Why Complexity Matters

Two programs that solve the same problem can differ in running time by orders of magnitude. Complexity analysis gives us a language to describe this difference without reference to a specific machine.

### Asymptotic Notation

Let \( T(n) \) be the exact running time of an algorithm on input size \( n \). We care about the *rate of growth* as \( n \to \infty \).

**Big-O (O)** — Upper bound. \( f(n) = O(g(n)) \) means there exist constants \( c > 0 \) and \( n_0 > 0 \) such that \( 0 \le f(n) \le c \cdot g(n) \) for all \( n \ge n_0 \).

**Big-Omega (\(\Omega\))** — Lower bound. \( f(n) = \Omega(g(n)) \) if \( g(n) = O(f(n)) \).

**Big-Theta (\(\Theta\))** — Tight bound. \( f(n) = \Theta(g(n)) \) iff \( f(n) = O(g(n)) \) and \( f(n) = \Omega(g(n)) \).

### Common Growth Rates (fastest to slowest)

| Notation | Name | Example |
|----------|------|---------|
| \( O(1) \) | Constant | Array access |
| \( O(\log n) \) | Logarithmic | Binary search |
| \( O(n) \) | Linear | Unsorted search |
| \( O(n \log n) \) | Linearithmic | Merge sort |
| \( O(n^2) \) | Quadratic | Nested loops |
| \( O(2^n) \) | Exponential | Subset enumeration |
| \( O(n!) \) | Factorial | Permutations |

### Best, Average, Worst Case

- **Worst case**: maximum running time over all inputs of size \( n \).
- **Best case**: minimum running time.
- **Average case**: expected running time under a given input distribution.

### Space Complexity

Measures the amount of memory an algorithm uses beyond the input itself. Recurrence depth in recursive algorithms often dominates space.

## Examples

### Example 1: Constant vs Linear

```cpp
#include <iostream>
#include <vector>

// O(1) — constant time: direct index access
int getFirst(const std::vector<int>& arr) {
    return arr[0];
}

// O(n) — linear time: sum all elements
int sumAll(const std::vector<int>& arr) {
    int total = 0;
    for (int x : arr) {
        total += x;
    }
    return total;
}

int main() {
    std::vector<int> data = {3, 7, 1, 9, 4};
    std::cout << "First: " << getFirst(data) << "\n";
    std::cout << "Sum: " << sumAll(data) << "\n";
    return 0;
}
```

**Output:**
```
First: 3
Sum: 24
```

### Example 2: Quadratic Complexity

```cpp
#include <iostream>
#include <vector>

// O(n^2) — bubble sort
void bubbleSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; ++i) {
        for (int j = 0; j < n - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main() {
    std::vector<int> data = {5, 2, 9, 1, 5, 6};
    bubbleSort(data);
    for (int x : data) std::cout << x << " ";
    std::cout << "\n";
    return 0;
}
```

**Output:**
```
1 2 5 5 6 9
```

### Example 3: Logarithmic Complexity

```cpp
#include <iostream>
#include <vector>

// O(log n) — binary search
int binarySearch(const std::vector<int>& arr, int target) {
    int lo = 0, hi = arr.size() - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}

int main() {
    std::vector<int> arr = {1, 3, 5, 7, 9, 11, 13};
    int idx = binarySearch(arr, 7);
    std::cout << "Index of 7: " << idx << "\n";
    idx = binarySearch(arr, 4);
    std::cout << "Index of 4: " << idx << "\n";
    return 0;
}
```

**Output:**
```
Index of 7: 3
Index of 4: -1
```

### Example 4: Recursive Complexity — Fibonacci

```cpp
#include <iostream>

// O(2^n) — naive recursion
int fibNaive(int n) {
    if (n <= 1) return n;
    return fibNaive(n - 1) + fibNaive(n - 2);
}

// O(n) — dynamic programming
int fibLinear(int n) {
    if (n <= 1) return n;
    int a = 0, b = 1;
    for (int i = 2; i <= n; ++i) {
        int c = a + b;
        a = b;
        b = c;
    }
    return b;
}

int main() {
    std::cout << "fibNaive(10) = " << fibNaive(10) << "\n";
    std::cout << "fibLinear(10) = " << fibLinear(10) << "\n";
    return 0;
}
```

**Output:**
```
fibNaive(10) = 55
fibLinear(10) = 55
```

## Summary

- Asymptotic notation abstracts away machine details and focuses on growth rate.
- Big-O provides an upper bound; Omega provides a lower bound; Theta provides a tight bound.
- Worst-case analysis is the most common guarantee used in algorithm design.
- Space complexity must account for both auxiliary data structures and recursion depth.

## Exercises

### Review Questions

1. What is the difference between Big-O and Big-Theta?
2. Why is worst-case analysis usually preferred over average-case?
3. What is the growth rate of binary search? Explain why.

### Application Problems

4. Determine the time complexity of the following function:

```cpp
void func(int n) {
    for (int i = 1; i < n; i *= 2) {
        for (int j = 0; j < n; ++j) {
            std::cout << i << ", " << j << "\n";
        }
    }
}
```

5. Write a function that finds the maximum element in an unsorted array. State its complexity.
6. Determine the time and space complexity of computing the nth Fibonacci number using memoization.

### Challenge Problem

7. Design an algorithm to find the k-th largest element in an unsorted array in \( O(n) \) average time. Implement it and analyze its worst-case complexity.
