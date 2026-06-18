# Chapter 2: Searching

> **Prerequisites:** [Chapter 1: Fundamentals of Algorithm Analysis](./01-analysis.md) â€” Asymptotic notation and recurrence analysis | **Next:** [Chapter 3: Comparison-Based Sorting](./03-sorting-nlogn.md) â€” From finding elements to ordering them

## Learning Objectives

By the end of this chapter, students will be able to:

1. Implement and analyze linear search, binary search, interpolation search, exponential search, and ternary search.
2. Determine the appropriate search algorithm given data distribution and access patterns.
3. Derive the time complexity of each algorithm using recurrence relations.

---

### Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Linear Search | Scan sequentially until found | Only option for unsorted data; optimal for small arrays |
| Binary Search | Repeatedly halve the search range | The gold standard for sorted arrays â€” O(log n) |
| Interpolation Search | Probe position using linear interpolation | O(log log n) on uniform data, O(n) worst-case |
| Exponential Search | Doubling bound + binary search | Best for unbounded/infinite arrays |
| Ternary Search | Two midpoints, three partitions | More comparisons than binary â€” slower in practice |

### Chapter Roadmap

```mermaid
flowchart LR
    A[Linear Search O(n)] --> B[Sorted Array?]
    B -->|Yes| C[Binary Search O(log n)]
    B -->|Yes| D[Interpolation Search O(log log n)]
    B -->|Yes| E[Exponential Search O(log n)]
    B -->|Yes| F[Ternary Search O(log3 n)]
    C --> G[Choose by Data Distribution]
    D --> G
    E --> G
    F --> G
```

## Theory

![Searching Algorithms Diagram](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch02-searching.png)

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

> **Pro Tip:** Linear search is optimal for unsorted arrays. Never sort just to use binary search unless you have multiple queries â€” sorting costs O(n log n) which dominates a single search.

**One-Sentence Takeaway:** Linear search is the simplest and only option for unsorted data, operating in O(n) time.

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

> **Pro Tip:** Watch for integer overflow when computing mid as (low + high) / 2. Use low + (high - low) / 2 instead â€” it's safe for all values.
>
> **Remember:** Binary search requires a sorted array. If you insert/delete frequently, consider balanced BSTs instead.

**One-Sentence Takeaway:** Binary search partitions a sorted array in half each step, achieving O(log n) search with a simple, robust recurrence T(n) = T(n/2) + O(1).

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

> **Warning:** Interpolation search can be O(n) on skewed data (e.g., exponential distributions). Always verify your data distribution before choosing it over binary search.

**One-Sentence Takeaway:** Interpolation search improves on binary search by using value-based probing instead of fixed midpoints, achieving O(log log n) on uniform data.

### 2.4 Exponential Search

Exponential search finds the range containing the target by doubling the search window, then performs binary search within that range.

**Algorithm:**

1. Start with \( i = 1 \). While \( i < n \) and \( A[i] \le \text{key} \), double \( i \).
2. Perform binary search on the range \( [i/2, \min(i, n-1)] \).

**Complexity:** \( O(\log i) \) where \( i \) is the position of the key. In the worst case, \( O(\log n) \). Particularly useful when the target is near the beginning of the array or when the array size is unbounded (infinite array).

> **Pro Tip:** Exponential search shines in two scenarios: unbounded (infinite) arrays where you can't know the length, and when the target is likely near the start. The doubling phase finds the range in O(log i) where i is the target's position.

**One-Sentence Takeaway:** Exponential search combines a doubling probe with binary search, ideal for infinite arrays or searches where the target is near the beginning.

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

> **Remember:** Ternary search does twice the comparisons per step as binary search (two midpoints vs one). Despite logâ‚ƒ n < logâ‚‚ n, the constant factor makes it slower â€” always prefer binary search.

**One-Sentence Takeaway:** Ternary search splits into three parts with two midpoints but performs worse than binary search due to extra comparisons per iteration.

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

### Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| Linear Search | Sequential scan | No sorting required | Unsorted arrays, small n |
| Binary Search | Halving with midpoint | Requires sorted input | General sorted search |
| Interpolation Search | Value-probed midpoint | Assumes uniform distribution | Database indexing, dictionary |
| Exponential Search | Doubling + binary search | Works on unbounded arrays | Streaming, unknown-length data |
| Ternary Search | Two-midpoint trisection | More comparisons per step | Unimodal function optimization |

### Quick Reference

| Category | Key Points |
|----------|------------|
| **Sorted Required** | Binary, interpolation, exponential, ternary |
| **Unsorted OK** | Linear |
| **O(log n) Families** | Binary (logâ‚‚ n), ternary (logâ‚ƒ n), exponential (log i) |
| **Best Average** | Interpolation â€” O(log log n) on uniform data |
| **Best Worst-Case** | Binary â€” guaranteed O(log n) |
| **Common Pitfall** | Using binary search on unsorted data; using interpolation on skewed data |

### Cross-Application Matrix

| Technique | DSA Interviews | Competitive Programming | System Design | Academia/Research |
|-----------|---------------|----------------------|---------------|-------------------|
| Linear Search | Trivial â€” rarely asked | Niche use in small constraints | N/A | Lower bound proofs |
| Binary Search | Extremely common â€” rotated array, sorted matrix | Standard tool â€” parametric search | Log search indexing (LSM trees) | Divide-and-conquer foundations |
| Interpolation Search | Occasionally asked | Rare â€” needs specific constraints | Database B-tree optimizations | Data-dependent algorithm analysis |
| Exponential Search | Sometimes asked for unbounded arrays | Galloping search in Timsort merge | Pagination/cursor-based APIs | Search on unknown-length inputs |
| Ternary Search | Uncommon | Unimodal function optimization | N/A | Numerical optimization theory |

---

## Summary

- Binary search achieves \( O(\log n) \) on sorted arrays using divide-and-conquer.
- Interpolation search reaches \( O(\log \log n) \) on uniformly distributed data but degrades to \( O(n) \) in pathological cases.
- Exponential search is optimal for unbounded arrays and performs well when the target is near the beginning.
- Ternary search has worse constant factors than binary search despite the same asymptotic class.
- Linear search is the only option for unsorted data and is optimal when the array is small.

---

### Chapter Quiz

**Q1.** Binary search has what recurrence relation?

- A) T(n) = T(n-1) + O(1)
- B) T(n) = 2T(n/2) + O(1)
- C) T(n) = T(n/2) + O(1)
- D) T(n) = T(n/3) + O(1)

<details>
<summary>Answer</summary>
C) T(n) = T(n/2) + O(1) â€” each step halves the search space with constant work.
</details>

**Q2.** Which search algorithm is best for an unbounded (infinite) sorted array?

- A) Linear search
- B) Binary search
- C) Exponential search
- D) Interpolation search

<details>
<summary>Answer</summary>
C) Exponential search â€” it doesn't need to know the array length and probes outward in exponentially growing steps.
</details>

**Q3.** When does interpolation search degrade to O(n)?

- A) When the array is small
- B) When data is exponentially distributed
- C) When the array is sorted
- D) When using integer keys

<details>
<summary>Answer</summary>
B) Interpolation search assumes uniform distribution. On skewed data like exponential distributions, it can make O(n) probes.
</details>

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
