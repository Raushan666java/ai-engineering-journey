# Chapter 1: Complexity Analysis

## Learning Objectives

- Define asymptotic notation: Big-O, Omega, Theta.
- Analyze worst-case, average-case, and best-case complexity.
- Compute time and space complexity of iterative and recursive algorithms.
- Compare algorithms using growth-rate families.

## Theory

![Complexity Analysis: Big O, Recurrence Relations and Analysis Types](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch01-complexity.png)

### Why Complexity Matters

Two programs that solve the same problem can differ in running time by orders of magnitude. Complexity analysis gives us a language to describe this difference without reference to a specific machine.

### Asymptotic Notation

Let \( T(n) \) be the exact running time of an algorithm on input size \( n \). We care about the *rate of growth* as \( n \to \infty \).

**Big-O (O)** â€” Upper bound. \( f(n) = O(g(n)) \) means there exist constants \( c > 0 \) and \( n_0 > 0 \) such that \( 0 \le f(n) \le c \cdot g(n) \) for all \( n \ge n_0 \).

**Big-Omega (\(\Omega\))** â€” Lower bound. \( f(n) = \Omega(g(n)) \) if \( g(n) = O(f(n)) \).

**Big-Theta (\(\Theta\))** â€” Tight bound. \( f(n) = \Theta(g(n)) \) iff \( f(n) = O(g(n)) \) and \( f(n) = \Omega(g(n)) \).

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

// O(1) â€” constant time: direct index access
int getFirst(const std::vector<int>& arr) {
    return arr[0];
}

// O(n) â€” linear time: sum all elements
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

// O(n^2) â€” bubble sort
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

// O(log n) â€” binary search
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

### Example 4: Recursive Complexity â€” Fibonacci

```cpp
#include <iostream>

// O(2^n) â€” naive recursion
int fibNaive(int n) {
    if (n <= 1) return n;
    return fibNaive(n - 1) + fibNaive(n - 2);
}

// O(n) â€” dynamic programming
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

## ðŸ’¡ Pro Tips

- **Master the Master Theorem**: For divide-and-conquer recurrences of the form \(T(n) = aT(n/b) + f(n)\), compare \(f(n)\) with \(n^{\log_b a}\). The dominant term determines complexity â€” no need to expand recurrences manually.
- **Logarithms are base-2 in CS**: Unless specified, \(\log n\) in algorithm analysis means \(\log_2 n\). Doubling the input adds 1 to the depth of binary search.
- **Amortized analysis matters**: A single operation may be expensive, but a sequence's average cost can be low. Dynamic array `push_back` is \(O(n)\) worst-case but \(O(1)\) amortized.
- **Space-time trade-off**: Extra memory (memoization, precomputation) can dramatically reduce time. Always ask: can I cache results to avoid recomputation?

## One-Sentence Takeaways

- Big-O is an upper bound; Omega is a lower bound; Theta is a tight bound.
- Worst-case analysis gives the strongest guarantee and is the default in algorithm design.
- Recurrence relations model recursive algorithm complexity; the Master Theorem solves many common forms.
- Amortized analysis averages costs over a sequence, revealing true performance.
- Space complexity includes both auxiliary data structures and call stack depth.
- \(O(n)\) which is linear in input size is the most common achievable efficiency goal.

## Concept Comparison Table

| Notation | Meaning | Formal Definition | Use Case |
|----------|---------|-------------------|----------|
| \(O(g(n))\) | Upper bound | \(f(n) \leq c \cdot g(n)\) for \(n \geq n_0\) | Worst-case guarantee |
| \(\Omega(g(n))\) | Lower bound | \(f(n) \geq c \cdot g(n)\) for \(n \geq n_0\) | Best-case analysis |
| \(\Theta(g(n))\) | Tight bound | Both \(O\) and \(\Omega\) | Exact growth rate |
| \(o(g(n))\) | Strict upper bound | \(f(n) < c \cdot g(n)\) for all \(c\) | Non-tight upper bound |
| \(\omega(g(n))\) | Strict lower bound | \(f(n) > c \cdot g(n)\) for all \(c\) | Non-tight lower bound |

## Quick Reference: Common Growth Rates

| Rate | Name | Example | Feasible Input Size |
|------|------|---------|---------------------|
| \(O(1)\) | Constant | Array access | Any |
| \(O(\log n)\) | Logarithmic | Binary search | \(10^{18}\) |
| \(O(n)\) | Linear | Scan array | \(10^8\) |
| \(O(n \log n)\) | Linearithmic | Merge sort | \(10^7\) |
| \(O(n^2)\) | Quadratic | Bubble sort | \(10^4\) |
| \(O(n^3)\) | Cubic | Floyd-Warshall | \(500\) |
| \(O(2^n)\) | Exponential | Subset generation | \(20\) |
| \(O(n!)\) | Factorial | Permutations | \(10\) |

## Cross-Application Matrix

| Scenario | Desired Complexity | Why |
|----------|-------------------|-----|
| Real-time systems | \(O(1)\) or \(O(\log n)\) | Predictable, bounded response |
| Large data processing | \(O(n)\) or \(O(n \log n)\) | Scales with input |
| Embedded devices | Low space complexity | Memory is limited |
| Competitive programming | \(O(n)\) or \(O(n \log n)\) | Time limits typically 1â€“2 sec |
| Database indexes | \(O(\log n)\) per operation | Millions of rows, fast lookups |

## Chapter Quiz

1. **What does Big-O describe?**
   - a) Exact running time
   - b) Upper bound on growth rate âœ“
   - c) Average case
   - d) Lower bound

2. **Which notation provides the tightest bound?**
   - a) \(O\)
   - b) \(\Omega\)
   - c) \(\Theta\) âœ“
   - d) \(o\)

3. **What is the complexity of binary search?**
   - a) \(O(n)\)
   - b) \(O(\log n)\) âœ“
   - c) \(O(n \log n)\)
   - d) \(O(n^2)\)

4. **What is the amortized cost of push_back in a dynamic array?**
   - a) \(O(1)\) âœ“
   - b) \(O(\log n)\)
   - c) \(O(n)\)
   - d) \(O(n^2)\)

5. **Which growth rate is faster than \(O(n^2)\)?**
   - a) \(O(n^3)\)
   - b) \(O(n!)\)
   - c) Both âœ“
   - d) Neither

**Answers:** 1-b, 2-c, 3-b, 4-a, 5-c

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
