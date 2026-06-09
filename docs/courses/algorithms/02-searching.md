# Chapter 2: Searching

## Learning Objectives

By the end of this chapter, students will be able to:

1. Implement and analyze linear search, binary search, interpolation search, exponential search, and ternary search.
2. Determine the appropriate search algorithm given data distribution and access patterns.
3. Derive the time complexity of each algorithm using recurrence relations.

---

## Theory

### 2.1 Linear Search

The simplest searching algorithm: traverse the array sequentially until the target is found or the array ends.

**Pseudocode:**
```
LinearSearch(A, n, key):
    for i = 0 to n-1:
        if A[i] == key:
            return i
    return -1
```

**Complexity:** Worst-case \( O(n) \), best-case \( O(1) \), average-case \( O(n) \).

### 2.2 Binary Search

Binary search operates on a **sorted** array by repeatedly dividing the search interval in half. At each step, compare the target with the middle element. If the target matches, return the index. If the target is smaller, search the left half; otherwise, search the right half.

**Pseudocode (recursive):**
```
BinarySearch(A, low, high, key):
    if low > high:
        return -1
    mid = low + (high - low) / 2
    if A[mid] == key:
        return mid
    else if key < A[mid]:
        return BinarySearch(A, low, mid - 1, key)
    else:
        return BinarySearch(A, mid + 1, high, key)
```

**Recurrence:** \( T(n) = T(n/2) + O(1) \). By the master theorem, \( T(n) = O(\log n) \).

**Key implementation detail:** Use \( \text{mid} = \text{low} + (\text{high} - \text{low}) / 2 \) to avoid integer overflow.

### 2.3 Interpolation Search

Interpolation search improves on binary search when the data is uniformly distributed. Instead of always using the midpoint, it estimates the position using a linear interpolation formula:

\[
\text{pos} = \text{low} + \frac{(\text{key} - A[\text{low}]) \cdot (\text{high} - \text{low})}{A[\text{high}] - A[\text{low}]}
\]

**Pseudocode:**
```
InterpolationSearch(A, n, key):
    low = 0, high = n - 1
    while low <= high and key >= A[low] and key <= A[high]:
        if low == high:
            if A[low] == key: return low
            else: return -1
        pos = low + (key - A[low]) * (high - low) / (A[high] - A[low])
        if A[pos] == key:
            return pos
        if A[pos] < key:
            low = pos + 1
        else:
            high = pos - 1
    return -1
```

**Complexity:** Best-case \( O(1) \), average-case \( O(\log \log n) \) for uniformly distributed data, worst-case \( O(n) \) for skewed distributions.

### 2.4 Exponential Search

Exponential search finds the range containing the target by doubling the search window, then performs binary search within that range.

**Algorithm:**

1. Start with \( i = 1 \). While \( i < n \) and \( A[i] \le \text{key} \), double \( i \).
2. Perform binary search on the range \( [i/2, \min(i, n-1)] \).

**Complexity:** \( O(\log i) \) where \( i \) is the position of the key. In the worst case, \( O(\log n) \). Particularly useful when the target is near the beginning of the array or when the array size is unbounded (infinite array).

### 2.5 Ternary Search

Ternary search divides the array into three equal parts using two midpoints.

**Algorithm:**
```
TernarySearch(A, low, high, key):
    if low > high:
        return -1
    mid1 = low + (high - low) / 3
    mid2 = high - (high - low) / 3
    if A[mid1] == key: return mid1
    if A[mid2] == key: return mid2
    if key < A[mid1]:
        return TernarySearch(A, low, mid1 - 1, key)
    else if key > A[mid2]:
        return TernarySearch(A, mid2 + 1, high, key)
    else:
        return TernarySearch(A, mid1 + 1, mid2 - 1, key)
```

**Recurrence:** \( T(n) = T(n/3) + O(1) \), so \( T(n) = O(\log_3 n) \). While the base of the logarithm differs from binary search, the constant-factor overhead makes ternary search slower in practice.

---

## Examples

### Example 2.1: Binary Search Implementation in C++

```cpp
#include <vector>
#include <iostream>

int binarySearch(const std::vector<int>& arr, int key) {
    int low = 0, high = static_cast<int>(arr.size()) - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key) return mid;
        if (arr[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}
```

**Walkthrough:** Search for key = 7 in arr = [1, 3, 5, 7, 9, 11, 13].

- \( \text{low} = 0, \text{high} = 6, \text{mid} = 3, A[3] = 7 \). Found at index 3. 1 comparison.

### Example 2.2: Exponential Search in C++

```cpp
#include <vector>
#include <algorithm>

int exponentialSearch(const std::vector<int>& arr, int key) {
    int n = static_cast<int>(arr.size());
    if (arr[0] == key) return 0;
    int i = 1;
    while (i < n && arr[i] <= key) i *= 2;
    int low = i / 2;
    int high = std::min(i, n - 1);
    // Binary search on [low, high]
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key) return mid;
        if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```

### Example 2.3: Comparative Search Analysis

**Problem:** Given a sorted array of 1,000,000 elements, compare the worst-case number of comparisons for each algorithm.

**Solution:**

| Algorithm | Worst-case comparisons | Formula |
|-----------|----------------------|---------|
| Linear search | 1,000,000 | \( n \) |
| Binary search | 20 | \( \lceil \log_2(n+1) \rceil \) |
| Interpolation search | 1,000,000 | \( n \) (worst case) |
| Exponential search | ~40 | \( 2\log_2 i \) |
| Ternary search | 38 | \( 2\log_3 n \) |

---

## Summary

- Binary search achieves \( O(\log n) \) on sorted arrays using divide-and-conquer.
- Interpolation search reaches \( O(\log \log n) \) on uniformly distributed data but degrades to \( O(n) \) in pathological cases.
- Exponential search is optimal for unbounded arrays and performs well when the target is near the beginning.
- Ternary search has worse constant factors than binary search despite the same asymptotic class.
- Linear search is the only option for unsorted data and is optimal when the array is small.

---

## Exercises

### Review Questions

1. Why does binary search require a sorted array?
2. What is the advantage of exponential search over binary search?
3. Under what distribution does interpolation search achieve \( O(\log \log n) \) performance?
4. Compare the midpoint computations for binary search and interpolation search.

### Application Problems

5. Implement binary search with recursion in C++. Compare its performance with the iterative version.
6. An array of 100 elements is uniformly distributed. Estimate the average number of comparisons for binary search and interpolation search.
7. Implement a function that performs ternary search and empirically compare it to binary search on arrays of size \( 10^3, 10^5, 10^7 \).

### Challenge Problem

8. Design a search algorithm for a sorted, **rotated** array (e.g., [13, 14, 15, 1, 2, 3]). The algorithm should run in \( O(\log n) \) time. Prove correctness.
