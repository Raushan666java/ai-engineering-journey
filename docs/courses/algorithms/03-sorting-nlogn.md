# Chapter 3: Comparison-Based Sorting

## Learning Objectives

By the end of this chapter, students will be able to:

1. Implement merge sort, quick sort, and heap sort in C++.
2. Analyze the best-case, worst-case, and average-case complexity of each algorithm.
3. Prove the \( \Omega(n \log n) \) lower bound for comparison-based sorting.
4. Select an appropriate sorting algorithm given constraints on memory, stability, and input characteristics.

---

## Theory

### 3.1 Lower Bound for Comparison Sorting

**Theorem 3.1.** Any comparison-based sorting algorithm requires \( \Omega(n \log n) \) comparisons in the worst case.

**Proof.** A comparison-based sorting algorithm can be modeled as a decision tree. There are \( n! \) possible permutations of the input. Each leaf of the decision tree corresponds to a distinct permutation. A binary tree of height \( h \) has at most \( 2^h \) leaves. Therefore:

\[
2^h \ge n! \implies h \ge \lg(n!) \ge \lg((n/2)^{n/2}) = (n/2)\lg(n/2) = \Omega(n \log n).
\]

### 3.2 Merge Sort

Merge sort uses the divide-and-conquer paradigm: divide the array into two halves, recursively sort each half, then merge the sorted halves.

**Algorithm:**
```
MergeSort(A, low, high):
    if low < high:
        mid = low + (high - low) / 2
        MergeSort(A, low, mid)
        MergeSort(A, mid + 1, high)
        Merge(A, low, mid, high)
```

The merge procedure produces a sorted output by scanning two sorted subarrays in linear time:

```
Merge(A, low, mid, high):
    L = A[low .. mid], R = A[mid+1 .. high]
    i = j = 0, k = low
    while i < len(L) and j < len(R):
        if L[i] <= R[j]: A[k++] = L[i++]
        else: A[k++] = R[j++]
    while i < len(L): A[k++] = L[i++]
    while j < len(R): A[k++] = R[j++]
```

**Recurrence:** \( T(n) = 2T(n/2) + O(n) \), so \( T(n) = \Theta(n \log n) \).

**Properties:** Stable, \( O(n) \) auxiliary space, guaranteed \( O(n \log n) \) in all cases.

### 3.3 Quick Sort

Quick sort selects a pivot element and partitions the array so that all elements less than the pivot come before it and all greater elements come after. It then recursively sorts the two partitions.

**Algorithm:**
```
QuickSort(A, low, high):
    if low < high:
        p = Partition(A, low, high)
        QuickSort(A, low, p - 1)
        QuickSort(A, p + 1, high)
```

Lomuto partition scheme:
```
Partition(A, low, high):
    pivot = A[high]
    i = low - 1
    for j = low to high - 1:
        if A[j] <= pivot:
            i = i + 1
            swap(A[i], A[j])
    swap(A[i+1], A[high])
    return i + 1
```

Hoare partition scheme (more efficient):
```
PartitionHoare(A, low, high):
    pivot = A[low]
    i = low - 1, j = high + 1
    while true:
        do i++ while A[i] < pivot
        do j-- while A[j] > pivot
        if i >= j: return j
        swap(A[i], A[j])
```

**Complexity:** Worst-case \( O(n^2) \) (when the pivot is always the smallest or largest element), average-case \( O(n \log n) \), best-case \( O(n \log n) \).

**Pivot selection strategies:**

1. **First/last element:** Simple but susceptible to worst case on sorted input.
2. **Random pivot:** Expected \( O(n \log n) \) on any input.
3. **Median-of-three:** Choose median of first, middle, and last elements.

### 3.4 Heap Sort

Heap sort uses a binary heap data structure. It consists of two phases:

1. **Build heap:** Transform the array into a max-heap in \( O(n) \) time.
2. **Extract repeatedly:** Swap the root (maximum element) with the last element, reduce heap size, and sift down the new root.

```
HeapSort(A, n):
    BuildMaxHeap(A, n)
    for i = n - 1 down to 1:
        swap(A[0], A[i])
        SiftDown(A, 0, i - 1)
```

Building a max-heap from an arbitrary array:
```
BuildMaxHeap(A, n):
    for i = (n - 2) / 2 down to 0:
        SiftDown(A, i, n - 1)
```

**Sift-down operation:**
```
SiftDown(A, i, last):
    largest = i
    left = 2*i + 1
    right = 2*i + 2
    if left <= last and A[left] > A[largest]:
        largest = left
    if right <= last and A[right] > A[largest]:
        largest = right
    if largest != i:
        swap(A[i], A[largest])
        SiftDown(A, largest, last)
```

**Complexity:** \( O(n \log n) \) worst-case. In-place (requires only \( O(1) \) auxiliary space). Not stable.

---

## Examples

### Example 3.1: Merge Sort in C++

```cpp
#include <vector>

void merge(std::vector<int>& A, int low, int mid, int high) {
    std::vector<int> L(A.begin() + low, A.begin() + mid + 1);
    std::vector<int> R(A.begin() + mid + 1, A.begin() + high + 1);
    int i = 0, j = 0, k = low;
    while (i < static_cast<int>(L.size()) && j < static_cast<int>(R.size())) {
        if (L[i] <= R[j]) A[k++] = L[i++];
        else A[k++] = R[j++];
    }
    while (i < static_cast<int>(L.size())) A[k++] = L[i++];
    while (j < static_cast<int>(R.size())) A[k++] = R[j++];
}

void mergeSort(std::vector<int>& A, int low, int high) {
    if (low < high) {
        int mid = low + (high - low) / 2;
        mergeSort(A, low, mid);
        mergeSort(A, mid + 1, high);
        merge(A, low, mid, high);
    }
}
```

### Example 3.2: Quick Sort with Random Pivot

```cpp
#include <vector>
#include <cstdlib>

int partition(std::vector<int>& A, int low, int high) {
    int pivot = A[high];
    int i = low - 1;
    for (int j = low; j < high; ++j) {
        if (A[j] <= pivot) {
            ++i;
            std::swap(A[i], A[j]);
        }
    }
    std::swap(A[i + 1], A[high]);
    return i + 1;
}

int randomPartition(std::vector<int>& A, int low, int high) {
    int r = low + std::rand() % (high - low + 1);
    std::swap(A[r], A[high]);
    return partition(A, low, high);
}

void quickSort(std::vector<int>& A, int low, int high) {
    if (low < high) {
        int p = randomPartition(A, low, high);
        quickSort(A, low, p - 1);
        quickSort(A, p + 1, high);
    }
}
```

### Example 3.3: Heap Sort Trace

**Input:** [4, 10, 3, 5, 1]

Build max-heap: [10, 5, 3, 4, 1]

- Swap 10 with 1: [1, 5, 3, 4, 10]. SiftDown on [1, 5, 3, 4]: [5, 4, 3, 1, 10].
- Swap 5 with 1: [1, 4, 3, 5, 10]. SiftDown on [1, 4, 3]: [4, 1, 3, 5, 10].
- Swap 4 with 3: [3, 1, 4, 5, 10]. SiftDown on [3, 1]: [3, 1, 4, 5, 10].
- Swap 3 with 1: [1, 3, 4, 5, 10].

Final sorted array: [1, 3, 4, 5, 10].

---

## Summary

| Algorithm | Best | Average | Worst | Space | Stable |
|-----------|------|---------|-------|-------|--------|
| Merge sort | \( n\log n \) | \( n\log n \) | \( n\log n \) | \( n \) | Yes |
| Quick sort | \( n\log n \) | \( n\log n \) | \( n^2 \) | \( \log n \) | No |
| Heap sort | \( n\log n \) | \( n\log n \) | \( n\log n \) | \( 1 \) | No |

- Merge sort is the algorithm of choice when stability is required and memory is available.
- Quick sort is typically the fastest in practice despite the quadratic worst case; randomization mitigates worst-case inputs.
- Heap sort is optimal for in-place sorting with guaranteed \( O(n\log n) \) time.
- The \( \Omega(n\log n) \) lower bound applies to all comparison-based sorts.

---

## Exercises

### Review Questions

1. Explain why quick sort's worst case is \( O(n^2) \). Give an input that triggers this.
2. How does heap sort achieve \( O(1) \) auxiliary space?
3. Why is merge sort stable but heap sort is not?
4. Prove the \( \Omega(n\log n) \) lower bound using Stirling's approximation.

### Application Problems

5. Implement merge sort using an iterative (bottom-up) approach instead of recursion.
6. Compare Lomuto partition and Hoare partition experimentally. Which performs fewer swaps on random data?
7. Modify quick sort to use median-of-three pivot selection. Does it eliminate the worst case?
8. Given an almost-sorted array (each element at most \( k \) positions from its final position), design an \( O(n\log k) \) sorting algorithm.

### Challenge Problem

9. Implement an **adaptive** sorting algorithm that detects whether the input is nearly sorted and switches between insertion sort (for small subarrays) and merge sort (for large subarrays). Prove that the hybrid runs in \( O(n\log n) \) worst-case and \( O(n) \) best-case.
