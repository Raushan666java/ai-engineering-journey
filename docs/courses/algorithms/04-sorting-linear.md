# Chapter 4: Linear-Time Sorting

## Learning Objectives

By the end of this chapter, students will be able to:

1. Implement counting sort, radix sort, and bucket sort in C++.
2. Determine when non-comparison sorting is applicable.
3. Analyze the time and space trade-offs of linear-time sorting algorithms.
4. Compare all sorting algorithms across key dimensions: time, space, stability, and data assumptions.

---

## Theory

The \( \Omega(n \log n) \) lower bound for comparison sorting (Theorem 3.1) applies only to algorithms that use comparisons as their sole means of gaining information about element order. By exploiting the structure of keys, we can achieve sorting in \( O(n) \) time.

### 4.1 Counting Sort

Counting sort assumes the input consists of integers in a known range \([0, k-1]\). It counts the frequency of each distinct key, computes prefix sums to determine final positions, and places elements directly.

**Algorithm:**
```
CountingSort(A, n, k):
    Count = array of size k, initialized to 0
    Output = array of size n
    for i = 0 to n-1:
        Count[A[i]]++
    for i = 1 to k-1:
        Count[i] = Count[i] + Count[i-1]
    for i = n-1 down to 0:
        Output[Count[A[i]] - 1] = A[i]
        Count[A[i]]--
    return Output
```

**Complexity:** \( O(n + k) \) time, \( O(n + k) \) space.

**Stability:** Counting sort is stable when the output array is filled from right to left.

### 4.2 Radix Sort

Radix sort processes digits from least significant to most significant (LSD-first). At each digit position, it performs a stable sort (typically counting sort) on the digit values.

**Algorithm:**
```
RadixSort(A, n, d):
    for i = 0 to d-1:
        Apply a stable sort (e.g., counting sort) on digit i
```

If counting sort with digit range \( r = 10 \) (decimal digits) is used at each pass:

- Each pass: \( O(n + r) \).
- Total: \( O(d(n + r)) \).

If the keys are integers in the range \([0, n^c - 1]\), then \( d = \log_{r} (n^c) = c \log_r n \). Choosing \( r = n \) gives \( O(d \cdot n) = O(n) \) total time, but this requires large auxiliary space.

**Theorem 4.1 (Radix sort correctness).** Given \( d \)-digit numbers where each digit is in the range \([0, r-1]\), LSD-first radix sort with a stable digit sort correctly sorts the input.

**Proof by induction.** After processing the \( i \) least significant digits, the array is sorted by those digits. The stable sort on the \((i+1)\)-th digit preserves the relative order of elements with equal \((i+1)\)-th digit, maintaining the correctness of the previously sorted lower digits.

### 4.3 Bucket Sort

Bucket sort assumes input is uniformly distributed over an interval \([0, 1)\). It partitions the interval into \( n \) equal-sized buckets, distributes the elements into buckets, sorts each bucket (typically with insertion sort), and concatenates the buckets.

**Algorithm:**
```
BucketSort(A, n):
    B = array of n empty lists
    for i = 0 to n-1:
        Insert A[i] into B[floor(n * A[i])]
    for i = 0 to n-1:
        Sort list B[i] using insertion sort
    Concatenate B[0] ... B[n-1]
```

**Complexity:** Expected \( O(n) \), worst-case \( O(n^2) \) (when all elements land in one bucket). The expected case assumes uniform distribution and uses the fact that the expected number of elements per bucket is \( O(1) \).

**Lemma 4.1.** Given \( n \) inputs uniformly distributed over \([0, 1)\), bucket sort runs in expected \( O(n) \) time.

**Proof.** Let the random variable \( n_i \) be the number of elements in bucket \( i \). Each \( n_i \) follows a binomial distribution: \( n_i \sim \text{Bin}(n, 1/n) \). The expected value \( E[n_i] = 1 \). Insertion sort on \( n_i \) elements runs in \( O(n_i^2) \) time. The expected total time is:

\[
E\left[\sum_{i=0}^{n-1} O(n_i^2)\right] = O\left(\sum_{i=0}^{n-1} E[n_i^2]\right) = O\left(\sum_{i=0}^{n-1} \text{Var}(n_i) + (E[n_i])^2\right) = O\left(\sum_{i=0}^{n-1} (1 - 1/n) + 1\right) = O(n).
\]

---

## Examples

### Example 4.1: Counting Sort in C++

```cpp
#include <vector>

std::vector<int> countingSort(const std::vector<int>& A, int k) {
    int n = static_cast<int>(A.size());
    std::vector<int> count(k, 0);
    std::vector<int> output(n);
    for (int x : A) count[x]++;
    for (int i = 1; i < k; ++i) count[i] += count[i - 1];
    for (int i = n - 1; i >= 0; --i) {
        output[count[A[i]] - 1] = A[i];
        count[A[i]]--;
    }
    return output;
}
```

### Example 4.2: Radix Sort in C++

```cpp
#include <vector>

void countingSortForRadix(std::vector<int>& A, int exp) {
    int n = static_cast<int>(A.size());
    std::vector<int> output(n);
    std::vector<int> count(10, 0);
    for (int i = 0; i < n; ++i) count[(A[i] / exp) % 10]++;
    for (int i = 1; i < 10; ++i) count[i] += count[i - 1];
    for (int i = n - 1; i >= 0; --i) {
        int digit = (A[i] / exp) % 10;
        output[count[digit] - 1] = A[i];
        count[digit]--;
    }
    for (int i = 0; i < n; ++i) A[i] = output[i];
}

void radixSort(std::vector<int>& A) {
    int maxVal = *std::max_element(A.begin(), A.end());
    for (int exp = 1; maxVal / exp > 0; exp *= 10)
        countingSortForRadix(A, exp);
}
```

### Example 4.3: Sorting Comparison Table

**Input:** 10 million 32-bit integers.

| Algorithm | Time | Space | Notes |
|-----------|------|-------|-------|
| Quick sort | ~1.2 s | \( O(\log n) \) | In-place, randomized |
| Merge sort | ~1.5 s | \( O(n) \) | Stable, predictable |
| Heap sort | ~2.8 s | \( O(1) \) | In-place, worst-case guarantee |
| Counting sort | ~0.2 s | \( O(n + k) \) | Impractical for large \( k \) |
| Radix sort | ~0.4 s | \( O(n) \) | Excellent for fixed-width keys |
| Bucket sort | ~0.3 s | \( O(n) \) | Requires uniform distribution |

---

## Summary

- **Counting sort:** \( O(n + k) \), stable, excellent when the key range \( k \) is \( O(n) \).
- **Radix sort:** \( O(d(n + r)) \), stable at each digit pass, ideal for fixed-width integer keys.
- **Bucket sort:** Expected \( O(n) \), requires a uniform distribution and a good hash function.
- Non-comparison sorts exploit key structure and are not subject to the \( \Omega(n \log n) \) lower bound.
- The choice of sorting algorithm depends on data characteristics, memory constraints, and stability requirements.

---

## Exercises

### Review Questions

1. Why is counting sort stable only when scanning from right to left?
2. What is the effect of choosing base \( 2^8 \) versus base \( 2^{16} \) for radix sort on 32-bit integers?
3. Under what conditions does bucket sort degrade to \( O(n^2) \)?
4. Can radix sort be applied to floating-point numbers? Explain.

### Application Problems

5. Implement counting sort that handles negative integers.
6. Modify radix sort to sort strings of varying lengths.
7. Implement a hybrid sort that uses insertion sort when a bucket contains fewer than 16 elements.
8. Given 1 billion 64-bit integers, design a sorting strategy that uses at most 1 GB of memory.

### Challenge Problem

9. Design a sorting algorithm for integers in the range \([0, n^c - 1]\) that runs in \( O(n) \) expected time using \( O(n) \) space. Prove the bound.
