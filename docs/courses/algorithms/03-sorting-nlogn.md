# Chapter 3: Comparison-Based Sorting

> **Prerequisites:** [Chapter 1: Fundamentals of Algorithm Analysis](./01-analysis.md) — Asymptotic notation and recurrence analysis | **Next:** [Chapter 4: Linear-Time Sorting](./04-sorting-linear.md) — Breaking the \( \Omega(n \log n) \) barrier

## Learning Objectives

By the end of this chapter, students will be able to:

1. Implement merge sort, quick sort, and heap sort in C++, Python, and Java.
2. Analyze the best-case, worst-case, and average-case complexity of each algorithm.
3. Prove the \( \Omega(n \log n) \) lower bound for comparison-based sorting.
4. Select an appropriate sorting algorithm given constraints on memory, stability, and input characteristics.
5. Solve common interview problems involving sorting techniques.

---

## Why Comparison Sorting Matters

Imagine you have a deck of 52 playing cards scattered across a table. You need to organize them into ascending order — first by suit, then by rank. Without any shortcuts (you cannot "magically know" where the Ace of Spades belongs), you must compare cards one pair at a time. Every time you pick up two cards and decide which is larger, you have performed one **comparison**. This fundamental operation — comparing two elements — is the only tool available to **comparison-based sorting algorithms**.

The problem of sorting is universal: databases sort query results, search engines rank pages, spreadsheets order rows, operating systems schedule tasks by priority. Every sorting algorithm that works by comparing elements (as opposed to exploiting properties like digit structure) must obey the **\( \Omega(n \log n) \) lower bound** — a mathematical ceiling on how fast any comparison sort can go.

This chapter covers three of the most important \( O(n \log n) \) comparison sorts — **merge sort**, **quick sort**, and **heap sort** — each with different trade-offs in speed, memory usage, stability, and real-world suitability.

> **Remember:** The \( \Omega(n \log n) \) bound applies ONLY to comparison-based sorting. Non-comparison sorts (counting, radix, bucket) can beat it by exploiting key structure.

---

### Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Lower Bound | Decision trees prove \( \Omega(n \log n) \) comparisons needed | No comparison sort can beat \( n \log n \) worst-case |
| Merge Sort | Divide, sort halves, merge in linear time | Stable, guaranteed \( O(n \log n) \), needs \( O(n) \) extra space |
| Quick Sort | Partition around pivot, recurse | Fastest in practice, \( O(n^2) \) worst-case mitigated by randomization |
| Heap Sort | Build max-heap, extract repeatedly | In-place \( O(n \log n) \), not stable, excellent for embedded systems |

### Chapter Roadmap

```mermaid
flowchart LR
    A[Lower Bound Ωn log n] --> B[Merge Sort]
    A --> C[Quick Sort]
    A --> D[Heap Sort]
    B --> E[Stable, O(n) space]
    C --> F[In-place avg O(n log n)]
    D --> G[In-place O(1) space]
    E --> H[Choose by constraints]
    F --> H
    G --> H
```

## Theory

![Comparison Sort Diagram](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch03-sorting-nlogn.png)

### 3.1 Lower Bound for Comparison Sorting


**Theorem 3.1.** Any comparison-based sorting algorithm requires \( \Omega(n \log n) \) comparisons in the worst case.

**Proof.** A comparison-based sorting algorithm can be modeled as a **decision tree**. There are \( n! \) possible permutations of the input. Each leaf of the decision tree corresponds to a distinct permutation. A binary tree of height \( h \) has at most \( 2^h \) leaves. Therefore:

\[
2^h \ge n! \implies h \ge \lg(n!) \ge \lg((n/2)^{n/2}) = (n/2)\lg(n/2) = \Omega(n \log n).
\]

> **Remember:** The decision tree model proves that any comparison-based sorting algorithm must make at least \( \Omega(n \log n) \) comparisons in the worst case. This is a mathematical guarantee, not a practical observation.

**One-Sentence Takeaway:** The decision tree model proves that any comparison-based sorting algorithm must make at least \( \Omega(n \log n) \) comparisons in the worst case.

---

### 3.2 Merge Sort


#### Real-World Analogy

Imagine you are the captain of a sports team tasked with sorting 100 player cards by height. You divide the stack among your assistant coaches, telling each to sort their pile. Once every pile comes back sorted, you merge them pairwise — comparing the shortest player from each pile and picking the smaller one, just like merging two sorted lanes on a highway.

#### Algorithm Description

Merge sort uses the **divide-and-conquer** paradigm:
1. **Divide** the array into two halves.
2. **Conquer** — recursively sort each half.
3. **Combine** — merge the two sorted halves into one sorted array.

#### Algorithm Steps (Numbered)

1. If the array has 0 or 1 elements, it is already sorted (base case).
2. Find the middle index: `mid = low + (high - low) / 2`.
3. Recursively call `MergeSort` on the left half `[low, mid]`.
4. Recursively call `MergeSort` on the right half `[mid + 1, high]`.
5. Merge the two sorted halves:
   - Create temporary arrays `L` and `R` holding each half.
   - Compare elements from `L` and `R`, placing the smaller into the original array.
   - Copy any remaining elements from `L` or `R`.

#### Pseudocode

```
MergeSort(A, low, high):
    if low < high:
        mid = low + (high - low) / 2
        MergeSort(A, low, mid)
        MergeSort(A, mid + 1, high)
        Merge(A, low, mid, high)

Merge(A, low, mid, high):
    L = A[low .. mid], R = A[mid+1 .. high]
    i = j = 0, k = low
    while i < len(L) and j < len(R):
        if L[i] <= R[j]: A[k++] = L[i++]
        else: A[k++] = R[j++]
    while i < len(L): A[k++] = L[i++]
    while j < len(R): A[k++] = R[j++]
```

#### Step-by-Step Dry Run with Trace Table

**Input:** `[38, 27, 43, 3, 9, 82, 10]`

**Trace (showing key merge steps):**

| Step | Action | Array State |
|------|--------|-------------|
| 1 | Divide [38, 27, 43, 3, 9, 82, 10] at mid=3 | [38, 27, 43, 3] [9, 82, 10] |
| 2 | Divide [38, 27, 43, 3] at mid=1 | [38, 27] [43, 3] |
| 3 | Divide [38, 27] at mid=0 | [38] [27] |
| 4 | Merge [38] and [27] → compare 38 ≤ 27? No → [27, 38] | [27, 38, 43, 3, 9, 82, 10] |
| 5 | Divide [43, 3] at mid=0 | [43] [3] |
| 6 | Merge [43] and [3] → compare 43 ≤ 3? No → [3, 43] | [27, 38, 3, 43, 9, 82, 10] |
| 7 | Merge [27, 38] and [3, 43]: 27≤3? No → pick 3; 27≤43? Yes → pick 27; 38≤43? Yes → pick 38; pick 43 | [3, 27, 38, 43, 9, 82, 10] |
| 8 | Divide [9, 82, 10] at mid=1 | [9, 82] [10] |
| 9 | Divide [9, 82] at mid=0 | [9] [82] |
| 10 | Merge [9] and [82] → [9, 82] | [3, 27, 38, 43, 9, 82, 10] |
| 11 | Merge [9, 82] and [10]: compare 9≤10? Yes → pick 9; 82≤10? No → pick 10; pick 82 | [3, 27, 38, 43, 9, 10, 82] |
| 12 | Merge [3, 27, 38, 43] and [9, 10, 82]: 3≤9→3, 27≤9→9, 27≤10→10, 27≤82→27, 38≤82→38, 43≤82→43, 82 | **[3, 9, 10, 27, 38, 43, 82]** |

**Comparison count:** This run makes 14 comparisons. In general, \( O(n \log n) \) comparisons are needed.

#### C++ Implementation

```cpp
#include <vector>

void merge(std::vector<int>& A, int low, int mid, int high) {
    std::vector<int> L(A.begin() + low, A.begin() + mid + 1);
    std::vector<int> R(A.begin() + mid + 1, A.begin() + high + 1);
    int i = 0, j = 0, k = low;
    while (i < (int)L.size() && j < (int)R.size()) {
        if (L[i] <= R[j]) A[k++] = L[i++];
        else A[k++] = R[j++];
    }
    while (i < (int)L.size()) A[k++] = L[i++];
    while (j < (int)R.size()) A[k++] = R[j++];
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

#### Python Implementation

```python
def merge_sort(A, low, high):
    if low < high:
        mid = low + (high - low) // 2
        merge_sort(A, low, mid)
        merge_sort(A, mid + 1, high)
        merge(A, low, mid, high)

def merge(A, low, mid, high):
    L = A[low:mid + 1]
    R = A[mid + 1:high + 1]
    i = j = 0
    k = low
    while i < len(L) and j < len(R):
        if L[i] <= R[j]:
            A[k] = L[i]; i += 1
        else:
            A[k] = R[j]; j += 1
        k += 1
    while i < len(L):
        A[k] = L[i]; i += 1; k += 1
    while j < len(R):
        A[k] = R[j]; j += 1; k += 1
```

#### Java Implementation

```java
public class MergeSort {
    public static void mergeSort(int[] A, int low, int high) {
        if (low < high) {
            int mid = low + (high - low) / 2;
            mergeSort(A, low, mid);
            mergeSort(A, mid + 1, high);
            merge(A, low, mid, high);
        }
    }

    private static void merge(int[] A, int low, int mid, int high) {
        int[] L = java.util.Arrays.copyOfRange(A, low, mid + 1);
        int[] R = java.util.Arrays.copyOfRange(A, mid + 1, high + 1);
        int i = 0, j = 0, k = low;
        while (i < L.length && j < R.length) {
            if (L[i] <= R[j]) A[k++] = L[i++];
            else A[k++] = R[j++];
        }
        while (i < L.length) A[k++] = L[i++];
        while (j < R.length) A[k++] = R[j++];
    }
}
```

#### Complexity Analysis

| Case | Time | Why? |
|------|------|------|
| Best | \( O(n \log n) \) | Even if already sorted, merge sort still divides and merges \( \log n \) levels, performing \( O(n) \) work at each level. |
| Average | \( O(n \log n) \) | The recurrence \( T(n) = 2T(n/2) + O(n) \) solves to \( \Theta(n \log n) \) by the Master Theorem. |
| Worst | \( O(n \log n) \) | Same recurrence regardless of input — no worst-case input exists. |
| Space | \( O(n) \) | Temporary arrays `L` and `R` of total size \( n \) are allocated at each recursive level (or globally reused). |

**Why is merge sort always \( O(n \log n) \)?** The array is always split exactly in half, producing \( \log_2 n \) levels. At each level, every element participates in exactly one comparison during the merge step, giving \( O(n) \) work per level. Hence \( n \times \log n = O(n \log n) \).

#### Edge Cases

| Input Type | Behavior |
|------------|----------|
| **Empty array** | Base case triggers immediately; no operations. |
| **Single element** | Base case; array is already sorted. |
| **Already sorted** | Still divides and merges — no shortcut, still \( O(n \log n) \). |
| **Reverse sorted** | Same as any other input — \( O(n \log n) \), no degradation. |
| **All duplicates** | Comparison `L[i] <= R[j]` picks from left half, preserving stability. |

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Guaranteed \( O(n \log n) \) in all cases | Requires \( O(n) \) auxiliary space |
| **Stable** — preserves relative order of equal elements | Not in-place; memory overhead on large arrays |
| Excellent for **linked lists** (no random access needed) | Recursive overhead (can be mitigated by iterative bottom-up version) |
| Naturally **parallelizable** | Slower constant factor than quick sort for small arrays |
| Ideal for **external sorting** (large data on disk) | Merge step requires copying |

> **Pro Tip:** Merge sort is the go-to when stability matters (e.g., sorting by multiple keys like last name then first name) and memory is available.
>
> **Warning:** Merge sort's \( O(n) \) space can be prohibitive in memory-constrained environments like embedded systems. Use heap sort instead.

**One-Sentence Takeaway:** Merge sort provides guaranteed \( O(n \log n) \) with stability, at the cost of \( O(n) \) auxiliary space.

---

### 3.3 Quick Sort


#### Real-World Analogy

Imagine organizing a group of students by height. You pick one student (the **pivot**) and tell everyone shorter than the pivot to stand on the left, and everyone taller to stand on the right. Now the pivot is in its final position. Recursively repeat the process on the left group and the right group. This is exactly what quick sort does — and it's incredibly fast.

#### Algorithm Description

Quick sort selects a **pivot** element and **partitions** the array so that all elements less than the pivot come before it and all greater elements come after. The pivot is now in its correct sorted position. The algorithm then recursively sorts the two subarrays on either side of the pivot.

#### Algorithm Steps (Numbered)

1. Choose a pivot element (last element, random element, or median-of-three).
2. Partition the array around the pivot:
   - Rearrange elements so smaller elements come before the pivot, larger after.
   - Return the final index of the pivot.
3. Recursively call `QuickSort` on the left subarray `[low, p - 1]`.
4. Recursively call `QuickSort` on the right subarray `[p + 1, high]`.
5. Base case: subarray has 0 or 1 elements (already sorted).

#### Pseudocode (Lomuto Partition)

```
QuickSort(A, low, high):
    if low < high:
        p = Partition(A, low, high)
        QuickSort(A, low, p - 1)
        QuickSort(A, p + 1, high)

Partition(A, low, high):
    pivot = A[high]      // choose last element as pivot
    i = low - 1          // boundary of elements < pivot
    for j = low to high - 1:
        if A[j] <= pivot:
            i = i + 1
            swap(A[i], A[j])
    swap(A[i+1], A[high])
    return i + 1
```

#### Step-by-Step Dry Run with Trace Table

**Input:** `[10, 80, 30, 90, 40, 50, 70]`

**First call — Partition with pivot = 70 (last element):**

| j | A[j] | A[j] ≤ 70? | i | Action | Array After |
|---|------|-----------|----|--------|-------------|
| 0 | 10 | Yes | 0 | swap(10,10) | [10, 80, 30, 90, 40, 50, 70] |
| 1 | 80 | No | 0 | — | [10, 80, 30, 90, 40, 50, 70] |
| 2 | 30 | Yes | 1 | swap(80,30) | [10, 30, 80, 90, 40, 50, 70] |
| 3 | 90 | No | 1 | — | [10, 30, 80, 90, 40, 50, 70] |
| 4 | 40 | Yes | 2 | swap(80,40) | [10, 30, 40, 90, 80, 50, 70] |
| 5 | 50 | Yes | 3 | swap(90,50) | [10, 30, 40, 50, 80, 90, 70] |

Finally: `swap(A[4], A[6])` → swap(80, 70) → **[10, 30, 40, 50, 70, 90, 80]**. Pivot index = 4.

**Recurse left** on `[10, 30, 40, 50]` — pivot=50 → `[10, 30, 40, 50]`, pivot at 3.
**Recurse right** on `[90, 80]` — pivot=80 → `[10, 30, 40, 50, 70, 80, 90]`. Done after 3 recursive calls.

**Worst-case input** (already sorted, first-element pivot): `[1, 2, 3, 4, 5]`. Each partition splits off one element — \( n \) levels, each doing \( O(n) \) work → \( O(n^2) \).

#### C++ Implementation

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

#### Python Implementation

```python
import random

def quick_sort(A, low, high):
    if low < high:
        p = partition(A, low, high)
        quick_sort(A, low, p - 1)
        quick_sort(A, p + 1, high)

def partition(A, low, high):
    r = random.randint(low, high)
    A[r], A[high] = A[high], A[r]
    pivot = A[high]
    i = low - 1
    for j in range(low, high):
        if A[j] <= pivot:
            i += 1
            A[i], A[j] = A[j], A[i]
    A[i + 1], A[high] = A[high], A[i + 1]
    return i + 1
```

#### Java Implementation

```java
import java.util.Random;

public class QuickSort {
    private static final Random rand = new Random();

    public static void quickSort(int[] A, int low, int high) {
        if (low < high) {
            int p = randomPartition(A, low, high);
            quickSort(A, low, p - 1);
            quickSort(A, p + 1, high);
        }
    }

    private static int randomPartition(int[] A, int low, int high) {
        int r = low + rand.nextInt(high - low + 1);
        int temp = A[r]; A[r] = A[high]; A[high] = temp;
        return partition(A, low, high);
    }

    private static int partition(int[] A, int low, int high) {
        int pivot = A[high];
        int i = low - 1;
        for (int j = low; j < high; ++j) {
            if (A[j] <= pivot) {
                ++i;
                int t = A[i]; A[i] = A[j]; A[j] = t;
            }
        }
        int t = A[i + 1]; A[i + 1] = A[high]; A[high] = t;
        return i + 1;
    }
}
```

#### Complexity Analysis

| Case | Time | Why? |
|------|------|------|
| Best | \( O(n \log n) \) | Pivot always divides the array into two equal halves — \( T(n) = 2T(n/2) + O(n) \). |
| Average | \( O(n \log n) \) | Random pivot makes any split ratio produce \( O(n \log n) \) expected time. |
| Worst | \( O(n^2) \) | Pivot is always smallest or largest element — \( T(n) = T(0) + T(n-1) + O(n) = O(n^2) \). |
| Space | \( O(\log n) \) | Recursion stack depth (average case). Worst case \( O(n) \) without tail-call optimization. |

**Why quick sort is \( O(n \log n) \) on average:** Even a lopsided 1:9 split produces \( T(n) = T(n/10) + T(9n/10) + O(n) \), which still solves to \( \Theta(n \log n) \). Only the pathological 0:\( n-1 \) split causes \( O(n^2) \). Randomization makes the 0:\( n-1 \) split astronomically unlikely.

#### Edge Cases

| Input Type | Behavior |
|------------|----------|
| **Empty array** | Base case; returns immediately. |
| **Single element** | Base case; already sorted. |
| **Already sorted** | **Worst case** if pivot is first/last element — \( O(n^2) \). Random pivot mitigates this. |
| **Reverse sorted** | Same as already sorted — triggers \( O(n^2) \) without randomization. |
| **All duplicates** | Lomuto partition produces worst-case split (all elements equal triggers \( O(n^2) \)). Use Hoare partition for better behavior. |

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Fastest in practice — small constant factors | \( O(n^2) \) worst case without randomization |
| In-place sorting (only stack space for recursion) | **Not stable** — equal elements may change order |
| Cache-friendly — sequential memory access | Vulnerable to DoS attacks with malicious input |
| Efficient tail recursion optimization | Degrades on small arrays (switch to insertion sort) |

> **Pro Tip:** Always randomize pivot selection in production quick sort. Using the first/last element makes sorted or reverse-sorted inputs hit the \( O(n^2) \) worst case trivially.
>
> **Warning:** Quick sort is NOT stable — equal elements may change relative order. Use merge sort if stability is required.

**One-Sentence Takeaway:** Quick sort's \( O(n \log n) \) average case and in-place partition make it the fastest general-purpose sort in practice, though randomized pivot selection is essential to avoid \( O(n^2) \).

---

### 3.4 Heap Sort


#### Real-World Analogy

Imagine you are in charge of a fruit stall and need to display fruits in ascending order of weight. You arrange all fruits into a **max-heap** — a pyramid where the heaviest fruit sits at the top. You then repeatedly take the heaviest fruit (the top), put it at the end of your display row, and rearrange the pyramid so the next heaviest rises to the top. This process — heapify, extract, heapify, extract — is exactly how heap sort works.

#### Algorithm Description

Heap sort uses a **binary heap** data structure. It operates in two phases:

1. **Build a max-heap** from the input array — the largest element is at the root.
2. **Repeatedly extract** the maximum element:
   - Swap the root with the last element of the unsorted portion.
   - Reduce the heap size.
   - Sift down the new root to restore the heap property.

#### Algorithm Steps (Numbered)

1. Build a max-heap from the array using `BuildMaxHeap`.
2. For `i = n-1` down to 1:
   - Swap `A[0]` (root = maximum) with `A[i]`.
   - The element at `A[i]` is now in its final sorted position.
   - Reduce heap size to `i`.
   - Call `SiftDown` on the new root to restore the heap property.
3. After the loop, the array is sorted in ascending order.

#### Pseudocode

```
HeapSort(A, n):
    BuildMaxHeap(A, n)
    for i = n - 1 down to 1:
        swap(A[0], A[i])
        SiftDown(A, 0, i - 1)

BuildMaxHeap(A, n):
    for i = (n - 2) / 2 down to 0:
        SiftDown(A, i, n - 1)

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

#### Step-by-Step Dry Run with Trace Table

**Input:** `[4, 10, 3, 5, 1]`

**Phase 1: Build Max-Heap (start from i = (5-2)/2 = 1)**

| i | Subtree Root | Children | Action | Array After |
|---|--------------|----------|--------|-------------|
| 1 | A[1]=10 | A[3]=5, A[4]=1 | 10≥5, 10≥1 — no swap | [4, 10, 3, 5, 1] |
| 0 | A[0]=4 | A[1]=10, A[2]=3 | 10>4 → swap(4,10) | [10, 4, 3, 5, 1] |
| — | siftDown A[1]=4 | A[3]=5, A[4]=1 | 5>4 → swap(4,5) | [10, 5, 3, 4, 1] |

**Heap built:** `[10, 5, 3, 4, 1]` ✅

**Phase 2: Extract Repeatedly**

| i | Action | Array After | SiftDown |
|---|--------|-------------|----------|
| 4 | swap(10,1) | [1, 5, 3, 4, **10**] | 1↔5→[5,1,3,4,10]; 1↔4→[5,4,3,1,10] |
| 3 | swap(5,1) | [1, 4, 3, **5**, 10] | 1↔4→[4,1,3,5,10]; 1 stays |
| 2 | swap(4,3) | [3, 1, **4**, 5, 10] | 3↔1→[3,1,4,5,10]; 1 stays |
| 1 | swap(3,1) | [1, **3**, 4, 5, 10] | 1 stays (single element) |

**Final sorted array:** `[1, 3, 4, 5, 10]` ✅

#### C++ Implementation

```cpp
#include <vector>
#include <algorithm>

void siftDown(std::vector<int>& A, int i, int last) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    if (left <= last && A[left] > A[largest])
        largest = left;
    if (right <= last && A[right] > A[largest])
        largest = right;
    if (largest != i) {
        std::swap(A[i], A[largest]);
        siftDown(A, largest, last);
    }
}

void buildMaxHeap(std::vector<int>& A, int n) {
    for (int i = (n - 2) / 2; i >= 0; --i)
        siftDown(A, i, n - 1);
}

void heapSort(std::vector<int>& A, int n) {
    buildMaxHeap(A, n);
    for (int i = n - 1; i > 0; --i) {
        std::swap(A[0], A[i]);
        siftDown(A, 0, i - 1);
    }
}
```

#### Python Implementation

```python
def sift_down(A, i, last):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    if left <= last and A[left] > A[largest]:
        largest = left
    if right <= last and A[right] > A[largest]:
        largest = right
    if largest != i:
        A[i], A[largest] = A[largest], A[i]
        sift_down(A, largest, last)

def build_max_heap(A, n):
    for i in range((n - 2) // 2, -1, -1):
        sift_down(A, i, n - 1)

def heap_sort(A, n):
    build_max_heap(A, n)
    for i in range(n - 1, 0, -1):
        A[0], A[i] = A[i], A[0]
        sift_down(A, 0, i - 1)
```

#### Java Implementation

```java
public class HeapSort {
    public static void heapSort(int[] A, int n) {
        buildMaxHeap(A, n);
        for (int i = n - 1; i > 0; --i) {
            int t = A[0]; A[0] = A[i]; A[i] = t;
            siftDown(A, 0, i - 1);
        }
    }

    private static void buildMaxHeap(int[] A, int n) {
        for (int i = (n - 2) / 2; i >= 0; --i)
            siftDown(A, i, n - 1);
    }

    private static void siftDown(int[] A, int i, int last) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        if (left <= last && A[left] > A[largest])
            largest = left;
        if (right <= last && A[right] > A[largest])
            largest = right;
        if (largest != i) {
            int t = A[i]; A[i] = A[largest]; A[largest] = t;
            siftDown(A, largest, last);
        }
    }
}
```

#### Complexity Analysis

| Case | Time | Why? |
|------|------|------|
| Best | \( O(n \log n) \) | Heap property must be restored after every extraction regardless of input. |
| Average | \( O(n \log n) \) | Each sift-down takes \( O(\log n) \), executed \( n \) times. |
| Worst | \( O(n \log n) \) | Same as average — heap sort has no worst-case input. |
| Space | \( O(1) \) | Entirely in-place; only a few variables for indices. |

**Why is heapify \( O(n) \) and not \( O(n \log n) \)?** The heapify loop runs \( n/2 \) times, but the sift-down depth is not uniform. Lower nodes start closer to leaves. The total work sum is \( \sum_{h=0}^{\log n} \frac{n}{2^{h+1}} \cdot O(h) = O(n) \). Only the extraction phase is \( O(n \log n) \).

> **Remember:** The heapify phase runs in \( O(n) \), not \( O(n \log n) \) — a common misconception. Only the extraction phase is \( O(n \log n) \).

#### Edge Cases

| Input Type | Behavior |
|------------|----------|
| **Empty array** | No operations; returns immediately. |
| **Single element** | Already a heap; no operations needed. |
| **Already sorted (ascending)** | Builds heap in \( O(n) \), then extractions proceed — still \( O(n \log n) \). |
| **Reverse sorted** | Best-case for heap building (already a valid heap), but extraction still takes \( O(n \log n) \). |
| **All duplicates** | Sift-down comparisons find no larger child; minimal swaps. |

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Guaranteed \( O(n \log n) \) in all cases | **Not stable** — equal elements can be reordered |
| **In-place** — uses \( O(1) \) extra space | Constant factor is higher than quick sort (≈2-3× slower) |
| No worst-case input (unlike quick sort) | Poor cache locality — jumps across array indices |
| Excellent for **real-time systems** | Cannot exploit partially sorted data |
| Simple to implement iteratively | Not suitable for linked lists (requires random access) |

> **Pro Tip:** Heap sort is ideal when memory is tight (embedded systems, kernel code) since it uses \( O(1) \) extra space. Its \( O(n \log n) \) worst-case guarantee makes it suitable for real-time systems.

**One-Sentence Takeaway:** Heap sort offers guaranteed \( O(n \log n) \) in-place sorting with \( O(1) \) extra space, making it the safe choice for memory-constrained environments.

---

## Comparison Table

| Property | Merge Sort | Quick Sort | Heap Sort |
|----------|-----------|-----------|-----------|
| **Stable** | Yes ✅ | No ❌ | No ❌ |
| **In-Place** | No (needs \( O(n) \)) | Yes (\( O(\log n) \) stack) | Yes (\( O(1) \)) |
| **Best Case** | \( O(n \log n) \) | \( O(n \log n) \) | \( O(n \log n) \) |
| **Average Case** | \( O(n \log n) \) | \( O(n \log n) \) | \( O(n \log n) \) |
| **Worst Case** | \( O(n \log n) \) | \( O(n^2) \) | \( O(n \log n) \) |
| **Space** | \( O(n) \) | \( O(\log n) \) (avg) | \( O(1) \) |
| **Cache Performance** | Good (sequential) | Excellent (sequential) | Poor (random access) |
| **Linked List Friendly** | Excellent | Poor | Impractical |
| **Parallelizable** | Yes | Partially | No |
| **Real-World Speed** | Moderate | Fastest | Slowest among three |
| **Adaptivity** | No | No | No |

---

## Interview Corner

### 1. Quick Sort Partition Schemes

**Lomuto Partition** (simpler, fewer swaps):
- Pivot = `A[high]`.
- Single scan: `i` tracks boundary of elements ≤ pivot.
- **Weakness:** Degrades on all-duplicates (all equal elements produce worst-case split).
- Used in most textbooks for clarity.

**Hoare Partition** (more efficient, more swaps):
- Pivot = `A[low]`.
- Two pointers scan from both ends toward the middle.
- **Strength:** Performs 3× fewer swaps on average. Handles duplicates well.
- **Weakness:** Pivot not in final position after partition — need to recurse on both halves.

```cpp
int hoarePartition(std::vector<int>& A, int low, int high) {
    int pivot = A[low];
    int i = low - 1, j = high + 1;
    while (true) {
        do { i++; } while (A[i] < pivot);
        do { j--; } while (A[j] > pivot);
        if (i >= j) return j;
        std::swap(A[i], A[j]);
    }
}
```

### 2. Kth Largest Element (Quickselect)

Find the \( k \)-th largest element in an unsorted array in \( O(n) \) average time.

**Algorithm:** Use the partition logic from quick sort, but only recurse on the half containing the \( k \)-th element.

```cpp
int quickSelect(std::vector<int>& A, int low, int high, int k) {
    if (low == high) return A[low];
    int p = randomPartition(A, low, high);
    int count = p - low + 1;   // number of elements in left partition + pivot
    if (count == k) return A[p];
    if (count > k) return quickSelect(A, low, p - 1, k);
    return quickSelect(A, p + 1, high, k - count);
}
```

### 3. Merge Sort for Linked Lists

Merge sort is the sorting algorithm of choice for linked lists because it requires no random access.

```cpp
struct ListNode { int val; ListNode* next; };

ListNode* merge(ListNode* l1, ListNode* l2) {
    ListNode dummy, *tail = &dummy;
    while (l1 && l2) {
        if (l1->val <= l2->val) { tail->next = l1; l1 = l1->next; }
        else { tail->next = l2; l2 = l2->next; }
        tail = tail->next;
    }
    tail->next = l1 ? l1 : l2;
    return dummy.next;
}

ListNode* mergeSortList(ListNode* head) {
    if (!head || !head->next) return head;
    ListNode *slow = head, *fast = head->next;
    while (fast && fast->next) {
        slow = slow->next; fast = fast->next->next;
    }
    ListNode* mid = slow->next;
    slow->next = nullptr;
    return merge(mergeSortList(head), mergeSortList(mid));
}
```

### 4. Heap Sort for K-Way Merge

Merge \( k \) sorted arrays of total size \( n \) in \( O(n \log k) \) time. This is a core technique in external sorting and big data pipelines.

```cpp
#include <queue>
#include <vector>

struct HeapNode {
    int value, arrayIndex, elementIndex;
    bool operator>(const HeapNode& o) const { return value > o.value; }
};

std::vector<int> kWayMerge(std::vector<std::vector<int>>& arrays) {
    std::priority_queue<HeapNode, std::vector<HeapNode>, std::greater<>> minHeap;
    std::vector<int> result;
    for (int i = 0; i < (int)arrays.size(); ++i) {
        if (!arrays[i].empty())
            minHeap.push({arrays[i][0], i, 0});
    }
    while (!minHeap.empty()) {
        auto node = minHeap.top(); minHeap.pop();
        result.push_back(node.value);
        if (node.elementIndex + 1 < (int)arrays[node.arrayIndex].size())
            minHeap.push({arrays[node.arrayIndex][node.elementIndex + 1],
                          node.arrayIndex, node.elementIndex + 1});
    }
    return result;
}
```

### 5. Counting Inversions with Merge Sort

Count the number of pairs `(i, j)` where `i < j` and `A[i] > A[j]` in \( O(n \log n) \) time. The count of inversions measures how far an array is from being sorted.

```cpp
long long mergeAndCount(std::vector<int>& A, int low, int mid, int high) {
    std::vector<int> L(A.begin() + low, A.begin() + mid + 1);
    std::vector<int> R(A.begin() + mid + 1, A.begin() + high + 1);
    int i = 0, j = 0, k = low;
    long long inversions = 0;
    while (i < (int)L.size() && j < (int)R.size()) {
        if (L[i] <= R[j]) A[k++] = L[i++];
        else { A[k++] = R[j++]; inversions += L.size() - i; }
    }
    while (i < (int)L.size()) A[k++] = L[i++];
    while (j < (int)R.size()) A[k++] = R[j++];
    return inversions;
}
```

---

## Applications in Real Systems

| System | Sorting Algorithm Used | Why? |
|--------|----------------------|------|
| **Python** (`list.sort()`) | **Timsort** (hybrid merge + insertion sort) | Adaptive: \( O(n) \) on nearly-sorted data, stable. |
| **Java** (`Arrays.sort()`) | **Dual-Pivot QuickSort** (objects & primitives) | Faster than single-pivot: ~20% fewer comparisons. |
| **C++** (`std::sort()`) | **Introsort** (quick sort → heap sort → insertion sort) | Detects pathological cases and switches to heap sort. |
| **Rust** (`slice::sort()`) | **Adaptive merge sort (TimSort derivative)** | Stable, adaptive, \( O(n) \) on pre-sorted data. |
| **Go** (`sort.Slice()`) | **Pattern-defeating QuickSort (pdqsort)** | Branching-optimized; handles sorted/reverse sorted in \( O(n) \). |
| **JavaScript** (`Array.sort()`) | **Timsort** (V8) / **Introsort** (SpiderMonkey) | Stable since ES2019; adaptive with fallback strategies. |
| **Linux Kernel** | **Heap sort** (lib/sort.c) | \( O(1) \) extra space; breakable loops for real-time preemption. |
| **Hadoop MapReduce** | **Merge sort** (shuffle phase) | Stable, handles massive data on disk via external sorting. |
| **PostgreSQL** | **Quick sort / Heap sort / Merge sort** | Adaptive: chooses based on cost estimates and memory budget. |
| **.NET** (`Array.Sort()`) | **Introsort** (up to .NET 4.5), **Timsort** (.NET Core 2.1+) | Improved stability and adaptivity in modern versions. |

> **Pro Tip:** If you are implementing a sort in production, do not write your own — use the language's built-in sort. It is likely an adaptive hybrid that has been battle-tested on billions of inputs.

---

### Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| Merge Sort | Divide, sort, merge | Stable, \( O(n) \) space | External sorting, stable multi-key sort |
| Quick Sort | Partition + recurse | In-place, not stable | General-purpose, fastest in practice |
| Heap Sort | Heapify + extract | \( O(1) \) space, not stable | Embedded, real-time, memory-constrained |
| \( \Omega(n \log n) \) Bound | Decision tree limit | Comparison-only | Proves optimality, non-comparison exceptions |
| Decision Tree | Model of all comparison paths | Height = worst-case comparisons | Lower bound proofs |

### Quick Reference

| Category | Key Points |
|----------|------------|
| **Stable** | Merge sort only (quick sort and heap sort are not) |
| **In-Place** | Quick sort (\( O(\log n) \) stack), heap sort (\( O(1) \)) |
| **Guaranteed \( O(n \log n) \)** | Merge sort, heap sort |
| **Fastest in Practice** | Quick sort (with randomized pivot) |
| **Space Efficient** | Heap sort (\( O(1) \)), quick sort (\( O(\log n) \)) |
| **Common Pitfall** | Forgetting that quick sort reaches \( O(n^2) \) without randomization |
| **Interview Favorite** | Quickselect, merge sort for linked lists, k-way merge |

### Cross-Application Matrix

| Technique | DSA Interviews | Competitive Programming | System Design | Academia/Research |
|-----------|---------------|----------------------|---------------|-------------------|
| Merge Sort | Frequently — merge K sorted lists, inversion count | Used in divide-and-conquer problems | External sort, distributed sort (MapReduce) | Optimal comparison sort proof |
| Quick Sort | Partition logic, quickselect, nth element | Most common sort for CP | In-memory database sorting | Randomized analysis |
| Heap Sort | K largest/smallest, priority queue use | Heap problems, median maintenance | Real-time system guarantees | Priority queue theory |
| Lower Bound | Occasionally — prove optimality | Choosing non-comparison sort | Choosing database sort algorithm | Computational complexity |

---

## Summary

| Algorithm | Best | Average | Worst | Space | Stable |
|-----------|------|---------|-------|-------|--------|
| Merge sort | \( n \log n \) | \( n \log n \) | \( n \log n \) | \( n \) | Yes |
| Quick sort | \( n \log n \) | \( n \log n \) | \( n^2 \) | \( \log n \) | No |
| Heap sort | \( n \log n \) | \( n \log n \) | \( n \log n \) | \( 1 \) | No |

- **Merge sort** is the algorithm of choice when stability is required and memory is available.
- **Quick sort** is typically the fastest in practice despite the quadratic worst case; randomization mitigates worst-case inputs.
- **Heap sort** is optimal for in-place sorting with guaranteed \( O(n \log n) \) time.
- The \( \Omega(n \log n) \) lower bound applies to all comparison-based sorts.
- Modern language runtimes use **hybrid sorts** (Timsort, Introsort, pdqsort) that combine multiple strategies adaptively.

---

### Chapter Quiz

**Q1.** Which sorting algorithm is guaranteed \( O(n \log n) \) time and uses \( O(1) \) extra space?

- A) Merge sort
- B) Quick sort
- C) Heap sort
- D) All of the above

<details>
<summary>Answer&lt;/summary&gt;
C) Heap sort. Merge sort uses \( O(n) \) space, quick sort uses \( O(\log n) \) stack space and can degrade to \( O(n^2) \).
</details>

**Q2.** What is the lower bound for comparison-based sorting?

- A) \( O(n) \)
- B) \( \Omega(n \log n) \)
- C) \( O(n^2) \)
- D) \( \Theta(n) \)

<details>
<summary>Answer&lt;/summary&gt;
B) \( \Omega(n \log n) \) — proven by the decision tree model: there are \( n! \) permutations and a binary tree of height \( h \) has at most \( 2^h \) leaves.
</details>

**Q3.** Which pivot selection strategy avoids the \( O(n^2) \) worst case for quick sort on sorted input?

- A) First element
- B) Last element
- C) Random element
- D) Both A and B

<details>
<summary>Answer&lt;/summary&gt;
C) Random element. First and last element pivots cause \( O(n^2) \) on already-sorted or reverse-sorted arrays.
</details>

**Q4.** Which of the following is NOT a stable sorting algorithm?

- A) Merge sort
- B) Quick sort
- C) Timsort
- D) Bubble sort

<details>
<summary>Answer&lt;/summary&gt;
B) Quick sort. During partitioning, equal elements can be swapped across each other, breaking stability.
</details>

**Q5.** If you need to sort a linked list, which algorithm is most suitable?

- A) Quick sort
- B) Heap sort
- C) Merge sort
- D) Shell sort

<details>
<summary>Answer&lt;/summary&gt;
C) Merge sort. It requires only sequential access and works naturally with linked list structure. Quick sort and heap sort rely on random access.
</details>

---

## Exercises

### Review Questions

1. Explain why quick sort's worst case is \( O(n^2) \). Give an input that triggers this.
2. How does heap sort achieve \( O(1) \) auxiliary space?
3. Why is merge sort stable but heap sort is not?
4. Prove the \( \Omega(n \log n) \) lower bound using Stirling's approximation.
5. Why is heapify \( O(n) \) and not \( O(n \log n) \)? Derive the sum.

### Application Problems

6. Implement merge sort using an iterative (bottom-up) approach instead of recursion.
7. Compare Lomuto partition and Hoare partition experimentally. Which performs fewer swaps on random data?
8. Modify quick sort to use median-of-three pivot selection. Does it eliminate the worst case?
9. Given an almost-sorted array (each element at most \( k \) positions from its final position), design an \( O(n \log k) \) sorting algorithm.
10. Implement a stable version of quick sort using extra memory.

### Challenge Problem

11. Implement an **adaptive** sorting algorithm that detects whether the input is nearly sorted and switches between insertion sort (for small subarrays) and merge sort (for large subarrays). Prove that the hybrid runs in \( O(n \log n) \) worst-case and \( O(n) \) best-case.
12. Design an algorithm to find the **median of a stream** of integers using two heaps (a max-heap and a min-heap). What is the time complexity per insertion?
