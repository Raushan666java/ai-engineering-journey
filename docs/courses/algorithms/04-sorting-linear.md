# Chapter 4: Linear-Time Sorting

> **Prerequisites:** [Chapter 3: Comparison-Based Sorting](./03-sorting-nlogn.md) — The Ω(n log n) lower bound for comparison sorts | **Next:** [Chapter 5: Divide and Conquer](./05-divide-conquer.md) — Beyond sorting: applying divide-and-conquer broadly

## Learning Objectives

By the end of this chapter, students will be able to:

1. Implement counting sort, radix sort, and bucket sort in C++, Python, and Java.
2. Determine when non-comparison sorting is applicable based on key properties.
3. Analyze the time and space trade-offs of linear-time sorting algorithms.
4. Compare all sorting algorithms across key dimensions: time, space, stability, and data assumptions.
5. Identify real-world systems that rely on linear-time sorting for performance.

---

## Why Linear-Time Sorting Matters

Imagine you are a teacher with 1,000 exam papers, each graded 0–100. You need to sort them by score so you can enter grades. You *could* compare every pair of papers (comparison sort, O(n log n) ≈ 10,000 comparisons). Or you could make 101 piles on a table, drop each paper into its score's pile, and simply stack the piles in order. That is exactly what counting sort does — and it runs in O(n + k) time, completely bypassing the Ω(n log n) comparison barrier.

This is the central insight of this chapter: **when keys have structure (small ranges, fixed widths, uniform distributions), you do not need comparisons.** You can sort in linear time by exploiting that structure directly. The practical impact is enormous — from GPU-accelerated radix sort in database engines to counting-sort-based suffix array construction in bioinformatics.

---

### Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Counting Sort | Count frequencies, compute prefix sums, place elements | O(n + k) time — blistering fast when key range k is small |
| Radix Sort | Sort digit by digit using stable sort | O(d(n + r)) — ideal for fixed-width integers and strings |
| Bucket Sort | Distribute into buckets, sort individually | Expected O(n) — excellent on uniformly distributed data |
| Comparison Bypass | Key structure replaces comparisons | Non-comparison sorts beat Ω(n log n) by exploiting key properties |

### Chapter Roadmap

```mermaid
flowchart LR
    A[Non-Comparison Sorting] --> B[Counting Sort]
    A --> C[Radix Sort]
    A --> D[Bucket Sort]
    B --> E[O(n+k), stable]
    C --> F[O(d(n+r)), stable]
    D --> G[Expected O(n)]
    E --> H[Choose by key properties]
    F --> H
    G --> H
```

## Theory

![Linear-Time Sort Diagram](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch04-sorting-linear.png)

The \( \Omega(n \log n) \) lower bound for comparison sorting (Theorem 3.1) applies only to algorithms that use comparisons as their sole means of gaining information about element order. By exploiting the structure of keys — their range, digit composition, or distribution — we can achieve sorting in \( O(n) \) time.

### 4.1 Counting Sort


**Real-World Analogy:** You are sorting 500 student answer sheets by roll number (1–100). Instead of comparing roll numbers pairwise, you prepare 100 slots, place each sheet into the slot matching its roll number, then collect the slots in order. No comparisons needed — just distribution and collection.

**Core Idea:** Counting sort assumes the input consists of integers in a known range \([0, k-1]\). It counts the frequency of each distinct key, computes prefix sums to determine final positions, and places elements directly into their correct output positions.

**Why It Beats Ω(n log n):** Counting sort never compares two elements. It uses the element values as indices into a count array. The Ω(n log n) bound applies only to algorithms that rely on pairwise comparisons to determine order. By using direct array indexing, counting sort escapes this bound entirely.

#### Algorithm Steps

```
Step 1: Create count array C[0..k-1], initialized to 0.
Step 2: Count frequencies — for each element x in A, increment C[x].
Step 3: Compute prefix sums — for i = 1 to k-1, set C[i] = C[i] + C[i-1].
Step 4: Build output — for i = n-1 down to 0:
            Place A[i] at index C[A[i]] - 1 in output.
            Decrement C[A[i]].
Step 5: Return output array.
```

#### Pseudocode

```
COUNTING-SORT(A, n, k)
    let Count[0..k-1] be a new array initialized to 0
    let Output[0..n-1] be a new array
    // Step 2: Count frequencies
    for i = 0 to n-1 do
        Count[A[i]] = Count[A[i]] + 1
    // Step 3: Compute prefix sums (cumulative counts)
    for i = 1 to k-1 do
        Count[i] = Count[i] + Count[i-1]
    // Step 4: Build output array (right-to-left for stability)
    for i = n-1 down to 0 do
        Output[Count[A[i]] - 1] = A[i]
        Count[A[i]] = Count[A[i]] - 1
    return Output
```

#### Dry Run with Trace Table

**Input:** `A = [4, 2, 2, 8, 3, 3, 1]`, Range `k = 9` (values 0–8), `n = 7`

**Step 2 — Frequency Count:**

| Element | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|----------|---|---|---|---|---|---|---|---|---|
| Count    | 0 | 1 | 2 | 2 | 1 | 0 | 0 | 0 | 1 |

**Step 3 — Prefix Sums (Cumulative Count):**

| Index    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|----------|---|---|---|---|---|---|---|---|---|
| Prefix   | 0 | 1 | 3 | 5 | 6 | 6 | 6 | 6 | 7 |

Each prefix value C[i] = number of elements ≤ i.

**Step 4 — Placement (right-to-left traversal):**

| i | A[i] | C[A[i]] Before | Output Index | Output State | C After |
|---|------|-----------------|--------------|--------------|---------|
| 6 | 1    | 1               | 0            | [1, _, _, _, _, _, _] | 0 |
| 5 | 3    | 5               | 4            | [1, _, _, _, 3, _, _] | 4 |
| 4 | 3    | 4               | 3            | [1, _, _, 3, 3, _, _] | 3 |
| 3 | 8    | 7               | 6            | [1, _, _, 3, 3, _, 8] | 6 |
| 2 | 2    | 3               | 2            | [1, _, 2, 3, 3, _, 8] | 2 |
| 1 | 2    | 2               | 1            | [1, 2, 2, 3, 3, _, 8] | 1 |
| 0 | 4    | 6               | 5            | [1, 2, 2, 3, 3, 4, 8] | 5 |

**Final Output:** `[1, 2, 2, 3, 3, 4, 8]` ✓

#### Implementations

**C++:**
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

**Python:**
```python
def counting_sort(arr, k):
    n = len(arr)
    count = [0] * k
    output = [0] * n
    for x in arr:
        count[x] += 1
    for i in range(1, k):
        count[i] += count[i - 1]
    for i in range(n - 1, -1, -1):
        output[count[arr[i]] - 1] = arr[i]
        count[arr[i]] -= 1
    return output
```

**Java:**
```java
public static int[] countingSort(int[] arr, int k) {
    int n = arr.length;
    int[] count = new int[k];
    int[] output = new int[n];
    for (int x : arr) count[x]++;
    for (int i = 1; i < k; i++) count[i] += count[i - 1];
    for (int i = n - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    return output;
}
```

#### Complexity Analysis

| Metric | Value | Why? |
|--------|-------|------|
| **Time (Best)** | O(n + k) | One pass to count, one for prefix sums, one to place — all linear. |
| **Time (Worst)** | O(n + k) | Same as best — runtime depends only on n and k, not on data order. |
| **Time (Average)** | O(n + k) | Always runs the same three loops. No data-dependent branching. |
| **Space** | O(n + k) | Count array of size k plus output array of size n. |
| **Stable** | Yes | Right-to-left traversal preserves relative order of equal elements. |

**Why O(n + k) beats O(n log n):** When k = O(n), counting sort runs in O(n) — strictly faster than any comparison sort's Ω(n log n) lower bound. The catch is that k must be small enough that the count array fits in memory.

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Linear O(n + k) time when k = O(n) | Impractical when k is huge (e.g., sorting 10⁶ integers in range [0, 10¹²]) |
| Stable sorting algorithm | Requires O(k) extra space |
| Simple to implement and understand | Only works with integer (or integer-castable) keys |
| No data-dependent branching — constant speed | Cannot sort by fractional keys directly |
| Parallelizable — frequency counting is embarrassingly parallel | Not in-place |

#### Edge Cases

| Edge Case | Behavior | Mitigation |
|-----------|----------|------------|
| **Negative numbers** | Array indices cannot be negative | Offset: shift all values by -min(A) so range starts at 0 |
| **Floating-point keys** | Cannot index arrays with floats | Multiply + round to integer, or use bucket sort |
| **k >> n (wide range)** | Count array huge, memory wasted | Switch to radix sort or hash-map based counting |
| **Duplicate-heavy data** | Handled naturally — counts track multiplicity | Stable sort preserves original order of duplicates |
| **Empty array** | Loops run zero times | Output is empty — trivial base case |
| **Single element** | Correctly placed in 1 step | Always works |

> **Pro Tip:** Counting sort is your fastest option when keys are integers with a limited range (e.g., ages 0–150, grades 0–100, ASCII 0–255). For k ≤ n, it beats any comparison sort.
>
> **Remember:** The right-to-left pass is what makes counting sort stable — reversing the direction breaks stability.
>
> **Warning:** Do NOT use counting sort when k is large relative to n. Sorting 10 integers in range [0, 10⁶] wastes O(10⁶) space for 10 elements.

**One-Sentence Takeaway:** Counting sort achieves O(n + k) by using frequencies and prefix sums instead of comparisons, perfect for small-range integer keys.

---

### 4.2 Radix Sort


**Real-World Analogy:** A librarian sorts books by call number. Instead of comparing full call numbers, they look at only the first digit and sort into 10 piles (0–9). Within each pile, they look at the second digit and sort further. This is MSD radix sort. A mail sorter works the other way: sort packages by the last digit of the ZIP code first, then the second-to-last, and so on — LSD radix sort. Both avoid ever comparing two full numbers.

**Core Idea:** Radix sort processes digits from least significant to most significant (LSD-first). At each digit position, it performs a stable sort (typically counting sort) on the digit values. After processing all d digits, the array is fully sorted.

**Why It Beats Ω(n log n):** Radix sort reduces the sorting problem to d passes of a stable sort with a small range (the digit range r). Each pass is O(n + r), and since d is a constant for fixed-width keys (e.g., d = 10 for decimal 32-bit ints when r = 10, or d = 4 when r = 256), the total is O(n) — bypassing the Ω(n log n) comparison barrier.

#### Algorithm Steps

```
Step 1: Find the maximum element to determine the number of digits d.
Step 2: For each digit position exp = 1, 10, 100, ... (up to the most significant digit):
Step 3:   Apply a stable sort (counting sort) on the digit at position exp.
Step 4: After all d passes, the array is sorted.
```

#### Pseudocode

```
RADIX-SORT(A, n)
    maxVal = maximum element of A
    for exp = 1; maxVal / exp > 0; exp = exp * 10
        COUNTING-SORT-BY-DIGIT(A, n, exp)

COUNTING-SORT-BY-DIGIT(A, n, exp)
    let Count[0..9] be a new array initialized to 0
    let Output[0..n-1] be a new array
    // Count digit frequencies
    for i = 0 to n-1 do
        digit = (A[i] / exp) % 10
        Count[digit] = Count[digit] + 1
    // Prefix sums
    for i = 1 to 9 do
        Count[i] = Count[i] + Count[i-1]
    // Place elements by digit (right-to-left for stability)
    for i = n-1 down to 0 do
        digit = (A[i] / exp) % 10
        Output[Count[digit] - 1] = A[i]
        Count[digit] = Count[digit] - 1
    // Copy back to original array
    for i = 0 to n-1 do
        A[i] = Output[i]
```

#### Dry Run with Trace Table

**Input:** `A = [329, 457, 657, 839, 436, 720, 355]`, Base = 10

**Pass 1 — Sort by units digit (exp = 1):**

| Original | Digit (÷1 % 10) |
|----------|------------------|
| 329      | 9                |
| 457      | 7                |
| 657      | 7                |
| 839      | 9                |
| 436      | 6                |
| 720      | 0                |
| 355      | 5                |

Counting sort by digit → `[720, 355, 436, 457, 657, 329, 839]`

**Pass 2 — Sort by tens digit (exp = 10):**

| After Pass 1 | Digit (÷10 % 10) |
|--------------|------------------|
| 720          | 2                |
| 355          | 5                |
| 436          | 3                |
| 457          | 5                |
| 657          | 5                |
| 329          | 2                |
| 839          | 3                |

Counting sort by digit → `[720, 329, 436, 839, 355, 457, 657]`

**Pass 3 — Sort by hundreds digit (exp = 100):**

| After Pass 2 | Digit (÷100 % 10) |
|--------------|-------------------|
| 720          | 7                 |
| 329          | 3                 |
| 436          | 4                 |
| 839          | 8                 |
| 355          | 3                 |
| 457          | 4                 |
| 657          | 6                 |

Counting sort by digit → `[329, 355, 436, 457, 657, 720, 839]` ✓

**Theorem 4.1 (Radix sort correctness).** Given \( d \)-digit numbers where each digit is in the range \([0, r-1]\), LSD-first radix sort with a stable digit sort correctly sorts the input.

**Proof by induction.** After processing the \( i \) least significant digits, the array is sorted by those digits. The stable sort on the \((i+1)\)-th digit preserves the relative order of elements with equal \((i+1)\)-th digit, maintaining the correctness of the previously sorted lower digits.

#### Implementations

**C++:**
```cpp
#include <vector>
#include <algorithm>

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
    if (A.empty()) return;
    int maxVal = *std::max_element(A.begin(), A.end());
    for (int exp = 1; maxVal / exp > 0; exp *= 10)
        countingSortForRadix(A, exp);
}
```

**Python:**
```python
def counting_sort_for_radix(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10
    for i in range(n):
        digit = (arr[i] // exp) % 10
        count[digit] += 1
    for i in range(1, 10):
        count[i] += count[i - 1]
    for i in range(n - 1, -1, -1):
        digit = (arr[i] // exp) % 10
        output[count[digit] - 1] = arr[i]
        count[digit] -= 1
    for i in range(n):
        arr[i] = output[i]

def radix_sort(arr):
    if not arr:
        return
    max_val = max(arr)
    exp = 1
    while max_val // exp > 0:
        counting_sort_for_radix(arr, exp)
        exp *= 10
```

**Java:**
```java
public static void countingSortForRadix(int[] arr, int exp) {
    int n = arr.length;
    int[] output = new int[n];
    int[] count = new int[10];
    for (int i = 0; i < n; i++) count[(arr[i] / exp) % 10]++;
    for (int i = 1; i < 10; i++) count[i] += count[i - 1];
    for (int i = n - 1; i >= 0; i--) {
        int digit = (arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }
    System.arraycopy(output, 0, arr, 0, n);
}

public static void radixSort(int[] arr) {
    if (arr.length == 0) return;
    int maxVal = Arrays.stream(arr).max().getAsInt();
    for (int exp = 1; maxVal / exp > 0; exp *= 10)
        countingSortForRadix(arr, exp);
}
```

#### Complexity Analysis

| Metric | Value | Why? |
|--------|-------|------|
| **Time (Best)** | O(d(n + r)) | d passes, each running a stable sort over n elements with digit range r. |
| **Time (Worst)** | O(d(n + r)) | Same as best — no data-dependent branches. |
| **Time (Average)** | O(d(n + r)) | Always d passes, regardless of input order. |
| **Space** | O(n + r) | Output array of size n plus count array of size r per pass. |
| **Stable** | Yes | Each digit-wise counting sort is stable; composition of stable sorts remains stable. |

**Why d is effectively constant:** For 32-bit integers with base 256, d = 4 passes. For strings of fixed length L, d = L. In both cases, d is a small constant, making total time O(n).

**Choosing the base r:** Larger r means fewer passes (smaller d) but a larger count array (O(r) space). Optimal r balances d and r — typically base 256 (byte-by-byte) is the practical sweet spot for integer sorting.

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Linear O(d(n+r)) time for fixed-width keys | Requires O(n + r) extra space per pass |
| Stable sorting algorithm | Only works with keys that decompose into digits/fields |
| Handles very large ranges efficiently (unlike counting sort) | Slower than quick sort on small arrays due to overhead |
| Excellent for string sorting (fixed-length) | LSD sort needs all keys to have the same length (or padding) |
| Highly parallelizable — each digit pass is independent | Not in-place |

#### Edge Cases

| Edge Case | Behavior | Mitigation |
|-----------|----------|------------|
| **Negative numbers** | Digit extraction fails on negative values | Separate negatives, sort magnitudes, reverse and append |
| **Floating-point keys** | Digit extraction undefined | Reinterpret bytes (e.g., IEEE 754 bit pattern) and sort |
| **Variable-length strings** | Shorter strings lack digits | Pad with sentinel value (e.g., smallest char) or group by length first |
| **Large base (r close to n)** | Counting sort overhead high | Switch to comparison sort within each digit group |
| **All same values** | All digits equal, but passes still run | O(dn) time even though input is already sorted |
| **Single digit values** | Only one pass needed | Radix collapses to counting sort |

> **Pro Tip:** Choose radix base wisely — base 256 (byte-by-byte) on 32-bit integers needs only 4 passes, each with r = 256 counters. This usually beats base 10's 10 passes.
>
> **Warning:** Radix sort only works with LSD-first for general inputs. MSD-first requires recursion and can degrade.
>
> **Remember:** Radix sort is the fastest integer sorting algorithm in practice for large arrays — GPU implementations sort 10⁸ integers in under a second.

**One-Sentence Takeaway:** Radix sort achieves O(n) for fixed-width keys by processing digits one at a time with a stable auxiliary sort, bypassing the Ω(n log n) comparison bound.

---

### 4.3 Bucket Sort


**Real-World Analogy:** You need to sort 1,000 exam scores (between 0 and 100) that are uniformly distributed. You create 10 buckets labeled 0–9, 10–19, ..., 90–100. You drop each score into its bucket. Then you sort each bucket individually (with a simple sort like insertion sort) and concatenate the buckets. Since scores are uniformly distributed, each bucket has roughly 100 items, and sorting 100 items 10 times is much faster than sorting 1,000 items at once.

**Core Idea:** Bucket sort assumes input is uniformly distributed over an interval \([0, 1)\). It partitions the interval into \( n \) equal-sized buckets, distributes the elements into buckets, sorts each bucket (typically with insertion sort), and concatenates the buckets.

**Why It Beats Ω(n log n):** The expected number of elements per bucket is O(1) when the input is uniformly distributed. Sorting O(1) elements per bucket costs O(1) per bucket using insertion sort, giving O(n) total. The Ω(n log n) bound assumes pairwise comparisons across all n elements — bucket sort avoids this by restricting comparisons to within small groups.

#### Algorithm Steps

```
Step 1: Create n empty buckets (lists).
Step 2: For each element A[i], insert it into bucket floor(n * A[i]).
Step 3: Sort each non-empty bucket using insertion sort.
Step 4: Concatenate all buckets in order.
```

#### Pseudocode

```
BUCKET-SORT(A, n)
    let B[0..n-1] be an array of empty lists
    // Distribute elements into buckets
    for i = 0 to n-1 do
        let index = floor(n * A[i])
        insert A[i] into B[index]
    // Sort each bucket
    for i = 0 to n-1 do
        sort list B[i] using insertion sort
    // Concatenate all buckets
    let Output be an empty list
    for i = 0 to n-1 do
        Output = Output + B[i]
    return Output
```

#### Dry Run with Trace Table

**Input:** `A = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68]`, `n = 10`

**Distribution into buckets (bucket index = floor(10 × A[i])):**

| Element | Bucket Index |
|---------|-------------|
| 0.78    | 7           |
| 0.17    | 1           |
| 0.39    | 3           |
| 0.26    | 2           |
| 0.72    | 7           |
| 0.94    | 9           |
| 0.21    | 2           |
| 0.12    | 1           |
| 0.23    | 2           |
| 0.68    | 6           |

**Bucket Contents (before sorting):**

| Bucket 0 | Bucket 1 | Bucket 2 | Bucket 3 | Bucket 4 | Bucket 5 | Bucket 6 | Bucket 7 | Bucket 8 | Bucket 9 |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| —        | 0.17, 0.12 | 0.26, 0.21, 0.23 | 0.39 | — | — | 0.68 | 0.78, 0.72 | — | 0.94 |

**After Insertion Sort (within each bucket):**

| Bucket 0 | Bucket 1 | Bucket 2 | Bucket 3 | Bucket 4 | Bucket 5 | Bucket 6 | Bucket 7 | Bucket 8 | Bucket 9 |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| —        | 0.12, 0.17 | 0.21, 0.23, 0.26 | 0.39 | — | — | 0.68 | 0.72, 0.78 | — | 0.94 |

**Final Concatenated Output:**
`[0.12, 0.17, 0.21, 0.23, 0.26, 0.39, 0.68, 0.72, 0.78, 0.94]` ✓

#### Implementations

**C++:**
```cpp
#include <vector>
#include <algorithm>
#include <list>

void bucketSort(std::vector<double>& A) {
    int n = static_cast<int>(A.size());
    std::vector<std::list<double>> buckets(n);
    for (double x : A) {
        int idx = static_cast<int>(n * x);
        buckets[idx].push_back(x);
    }
    for (auto& bucket : buckets)
        bucket.sort();
    A.clear();
    for (auto& bucket : buckets)
        for (double x : bucket)
            A.push_back(x);
}
```

**Python:**
```python
def bucket_sort(arr):
    n = len(arr)
    buckets = [[] for _ in range(n)]
    for x in arr:
        idx = int(n * x)
        buckets[idx].append(x)
    for i in range(n):
        buckets[i].sort()
    result = []
    for bucket in buckets:
        result.extend(bucket)
    return result
```

**Java:**
```java
import java.util.*;

public static void bucketSort(double[] arr) {
    int n = arr.length;
    @SuppressWarnings("unchecked")
    List<Double>[] buckets = new ArrayList[n];
    for (int i = 0; i < n; i++) buckets[i] = new ArrayList<>();
    for (double x : arr) {
        int idx = (int)(n * x);
        buckets[idx].add(x);
    }
    for (List<Double> bucket : buckets)
        Collections.sort(bucket);
    int idx = 0;
    for (List<Double> bucket : buckets)
        for (double x : bucket)
            arr[idx++] = x;
}
```

#### Complexity Analysis

| Metric | Value | Why? |
|--------|-------|------|
| **Time (Best)** | O(n + k) | k buckets, uniform distribution, O(1) per bucket. |
| **Time (Worst)** | O(n²) | All elements land in one bucket — insertion sort on n elements. |
| **Time (Average)** | Θ(n) | Uniform distribution gives expected O(1) elements per bucket. |
| **Space** | O(n) | n buckets storing n elements total. |
| **Stable** | Depends on internal sort | If insertion sort is used for buckets, bucket sort is stable. |

**Proof of expected O(n) bound.** Let the random variable \( n_i \) be the number of elements in bucket \( i \). Each \( n_i \) follows a binomial distribution: \( n_i \sim \text{Bin}(n, 1/n) \). The expected value \( E[n_i] = 1 \). Insertion sort on \( n_i \) elements runs in \( O(n_i^2) \) time. The expected total time is:

\[
E\left[\sum_{i=0}^{n-1} O(n_i^2)\right] = O\left(\sum_{i=0}^{n-1} E[n_i^2]\right) = O\left(\sum_{i=0}^{n-1} (\text{Var}(n_i) + (E[n_i])^2)\right) = O\left(\sum_{i=0}^{n-1} \left(1 - \frac{1}{n}\right) + 1\right) = O(n).
\]

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Expected O(n) time — fastest for uniformly distributed data | Worst-case O(n²) — catastrophic on non-uniform data |
| Simple to understand and implement | Not suitable for non-uniform distributions without tuning |
| Works naturally with floating-point keys | Requires prior knowledge of the distribution |
| Easy to parallelize — each bucket sorts independently | Extra overhead for bucket creation and concatenation |
| Can use different internal sort per bucket | Not in-place |

#### Edge Cases

| Edge Case | Behavior | Mitigation |
|-----------|----------|------------|
| **All elements in one bucket** | Degrades to O(n²) | Use a balanced hash function or fallback to comparison sort |
| **Non-uniform distribution** | Some buckets crowded, some empty | Use adaptive bucket sizing or different algorithm |
| **Values outside [0, 1)** | Bucket indexing fails | Normalize: subtract min, divide by range |
| **Negative values** | floor(n × x) can be negative | Shift range to [0, 1) via normalization |
| **Very small n** | Overhead of bucket creation dominates | Use insertion sort directly for n &lt; threshold |
| **All equal values** | All go to same bucket → O(n²) | Fallback to counting sort if duplicates are heavy |

> **Pro Tip:** Bucket sort needs a good hash function that distributes elements uniformly. If your data is not uniform, use a different algorithm — bucket sort degrades to O(n²).
>
> **Remember:** Bucket sort is efficient only when the number of buckets is proportional to n and the distribution is uniform.
>
> **Warning:** Never assume uniform distribution without checking — test your data first or add a fallback to a comparison sort.

**One-Sentence Takeaway:** Bucket sort achieves expected O(n) by distributing elements into sorted buckets, relying on uniform distribution for its probabilistic guarantee.

---

## Linear-Time Sort Comparison Table

| Feature | Counting Sort | Radix Sort | Bucket Sort |
|---------|--------------|------------|-------------|
| **Type** | Non-comparison, distribution | Non-comparison, digit-wise | Non-comparison, distribution |
| **Time (Average)** | O(n + k) | O(d(n + r)) | Θ(n) expected |
| **Time (Worst)** | O(n + k) | O(d(n + r)) | O(n²) |
| **Space** | O(n + k) | O(n + r) per pass | O(n) |
| **Key Type** | Integer (small range) | Integer/string (fixed-width) | Float (uniform distribution) |
| **Stable** | Yes | Yes | Depends on internal sort |
| **In-Place** | No | No | No |
| **Best For** | Small integer ranges, k = O(n) | Fixed-width keys, large n | Uniformly distributed floats |
| **Worst For** | Large range k >> n | Variable-length keys | Non-uniform data |
| **Parallelizable** | Yes (frequency count) | Yes (per digit pass) | Yes (per bucket) |
| **Data Assumption** | Integer keys in [0, k-1] | Keys decompose into d digits | Uniform distribution over [0, 1) |

---

## Interview Corner

### When to Use Counting Sort vs Radix Sort

- **Counting Sort** wins when the key range k is small relative to n (e.g., sorting 10⁶ people by age 0–150). If k ≤ 10n and k ≈ n, counting sort is simplest and fastest.
- **Radix Sort** wins when the key range is huge but the keys have a digit structure (e.g., sorting 10⁶ 64-bit integers). Counting sort would need O(10¹⁹) space, but radix sort with base 2¹⁶ needs only 4 passes of O(n + 65536) each.
- **Rule of thumb:** If k ≤ 10n, use counting sort. If k is unbounded but keys are fixed-width integers, use radix sort.

### Sorting with Limited Range

When the interviewer says "sort in O(n) time," they are testing whether you recognize that non-comparison sorts exist. The follow-up is always: *What assumption about the data makes this possible?* The answer must include the key property (small range, digit structure, uniform distribution) that circumvents the Ω(n log n) bound.

### Stable vs Unstable Linear Sorts

| Sort | Stable? | Mechanism |
|------|---------|-----------|
| Counting Sort | Yes | Right-to-left placement preserves original order of equal keys |
| Radix Sort | Yes | Depends on stable digit-wise sort; composition of stable sorts is stable |
| Bucket Sort | Yes (with insertion sort) | Insertion sort within buckets is stable; bucket order is maintained |

**Why stability matters in radix sort:** If the per-digit sort were not stable, LSD radix sort would fail entirely. Stability ensures that earlier (less significant) digit sorts are preserved when later digits are processed.

### Common Interview Questions

1. *"Can you sort integers in O(n) time?"* — Yes, with counting sort (if range is small) or radix sort (if fixed-width).
2. *"What is the space trade-off of increasing the radix base?"* — Fewer passes (smaller d) but larger count array (larger r). Optimize for r × d.
3. *"Why can't you use counting sort for floating-point numbers?"* — Floating-point indices are not valid array indices. You could reinterpret the IEEE 754 bit pattern as an integer and use radix sort.
4. *"Is bucket sort always O(n)?"* — No, only in expectation under uniform distribution. Worst-case is O(n²).

---

## Applications in Real Systems

### Radix Sort in GPU Sorting

Modern GPU sorting libraries (e.g., CUB, Thrust, C++17 parallel algorithms) implement radix sort as their primary sorting primitive. NVIDIA's CUB library sorts 10⁸ 32-bit integers in ~0.3 seconds on an A100 GPU. The key insight: radix sort is embarrassingly parallel — each digit pass can compute histograms in parallel, and the scatter operation (placing elements by digit) maps perfectly to GPU thread blocks. Comparison-based sorts (quick sort, merge sort) do not parallelize nearly as well on GPU architectures.

### Counting Sort in Suffix Arrays

The suffix array — a sorted array of all suffixes of a string — is a fundamental data structure in stringology and bioinformatics. The SA-IS algorithm (Nong-Zhang-Chan 2009) and induced sorting use counting sort as a subroutine to sort suffixes by their first character (the LMS characters). Since the alphabet size is typically small (4 for DNA, 26 for proteins, 256 for bytes), counting sort at each induction step runs in O(n + Σ) time, contributing to the overall O(n) suffix array construction.

### Bucket Sort in Histograms and Image Processing

Digital image processing uses bucket sort (often called *histogram equalization*) to redistribute pixel intensities. Each pixel's intensity value (0–255) maps to a bucket, and cumulative distribution functions derived from bucket counts are used to stretch the intensity range for contrast enhancement. Database query engines also use bucket sort-like partitioning for approximate query processing — dividing data into equi-width histograms to estimate selectivity without full sorting.

### More Real-World Applications

| Algorithm | System | Use |
|-----------|--------|-----|
| Counting Sort | Network packet queues (priority 0–7) | O(n) per-packet sorting by QoS priority |
| Counting Sort | ETL pipelines sorting by category ID | Small integer keys, high throughput needed |
| Radix Sort | Database index construction (sorted runs) | Fixed-width composite keys |
| Radix Sort | Genomics — sorting k-mers by nucleotide order | Alphabet size 4, very long strings |
| Bucket Sort | Approximate sorting in data streams | Bounded error, memory-efficient |
| Bucket Sort | Load balancing — partition tasks into priority buckets | O(n) distribution, O(1) per-bucket processing |

---

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
#include <algorithm>

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
    if (A.empty()) return;
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

### Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| Counting Sort | Frequency → prefix sum → placement | O(n + k) time, O(n + k) space | Small integer ranges |
| Radix Sort | Digit-by-digit stable sorting | Multiple passes, each a stable sort | Fixed-width integers, strings |
| Bucket Sort | Distribute → sort buckets → concatenate | Expected O(n), worst O(n²) | Uniformly distributed floats |
| LSD vs MSD | Least vs Most Significant Digit first | LSD processes with stable sort | Radix sort choice matters |
| Comparison Bypass | Use key structure, not comparisons | Beats Ω(n log n) bound | Large-scale data with structured keys |

### Quick Reference

| Category | Key Points |
|----------|------------|
| **Key Range Small** | Counting sort — O(n + k), stable |
| **Fixed-Width Integers** | Radix sort with base 256 — best practical linear sort |
| **Uniform Distribution** | Bucket sort — O(n) expected |
| **Stable** | Counting sort, radix sort (per digit) |
| **In-Place** | None of these — all require extra space |
| **Common Pitfall** | Using counting sort with huge k; using bucket sort on non-uniform data |

### Cross-Application Matrix

| Technique | DSA Interviews | Competitive Programming | System Design | Academia/Research |
|-----------|---------------|----------------------|---------------|-------------------|
| Counting Sort | Occasionally — sort by age/grade | Rare — only when k constraint exists | N/A | Key-indexed counting theory |
| Radix Sort | Sometimes — sort strings, sort by multiple keys | Used in suffix array construction | Database sort optimization | Linear-time sorting theory |
| Bucket Sort | Occasionally asked conceptually | Rare — needs uniform guarantee | Approximate sorting, histogramming | Average-case analysis |
| Non-Comparison Insight | Frequently — "sort in O(n)" questions | Choosing correct algorithm | Large-scale data pipeline design | Lower bound understanding |

---

## Summary

- **Counting sort:** \( O(n + k) \), stable, excellent when the key range \( k \) is \( O(n) \).
- **Radix sort:** \( O(d(n + r)) \), stable at each digit pass, ideal for fixed-width integer keys.
- **Bucket sort:** Expected \( O(n) \), requires a uniform distribution and a good hash function.
- Non-comparison sorts exploit key structure and are not subject to the \( \Omega(n \log n) \) lower bound.
- The choice of sorting algorithm depends on data characteristics, memory constraints, and stability requirements.
- Real-world systems (GPU sorting, suffix arrays, image processing) rely on linear-time sorting for performance-critical paths.

---

### Chapter Quiz

**Q1.** Which non-comparison sort has O(n + k) time complexity?

- A) Radix sort
- B) Bucket sort
- C) Counting sort
- D) Quick sort

<details>
<summary>Answer&lt;/summary&gt;
C) Counting sort — O(n + k) where k is the key range.
</details>

**Q2.** What is the worst-case time complexity of bucket sort?

- A) O(n)
- B) O(n log n)
- C) O(n²)
- D) O(log n)

<details>
<summary>Answer&lt;/summary&gt;
C) O(n²) — when all elements land in a single bucket.
</details>

**Q3.** How many passes does radix sort need for 32-bit integers using base 256?

- A) 1
- B) 4
- C) 8
- D) 32

<details>
<summary>Answer&lt;/summary&gt;
B) 4 — each pass processes 8 bits (256 values), and 32/8 = 4.
</details>

**Q4.** Why does counting sort beat the Ω(n log n) lower bound?

- A) It uses a faster comparison network
- B) It uses array indexing instead of comparisons
- C) It only works on small inputs
- D) It uses randomization

<details>
<summary>Answer&lt;/summary&gt;
B) Counting sort uses element values as array indices rather than pairwise comparisons, bypassing the comparison-based lower bound entirely.
</details>

**Q5.** Which sorting algorithm is used as a subroutine in SA-IS suffix array construction?

- A) Quick sort
- B) Radix sort
- C) Counting sort
- D) Bucket sort

<details>
<summary>Answer&lt;/summary&gt;
C) Counting sort — the SA-IS algorithm uses counting sort to sort LMS characters by their first character, exploiting the small alphabet size.
</details>

---

## Exercises

### Review Questions

1. Why is counting sort stable only when scanning from right to left?
2. What is the effect of choosing base \( 2^8 \) versus base \( 2^{16} \) for radix sort on 32-bit integers?
3. Under what conditions does bucket sort degrade to \( O(n^2) \)?
4. Can radix sort be applied to floating-point numbers? Explain.
5. Why does stability matter for the correctness of LSD radix sort?
6. Explain why counting sort, radix sort, and bucket sort are not subject to the Ω(n log n) lower bound on comparison sorting.

### Application Problems

7. Implement counting sort that handles negative integers.
8. Modify radix sort to sort strings of varying lengths.
9. Implement a hybrid sort that uses insertion sort when a bucket contains fewer than 16 elements.
10. Given 1 billion 64-bit integers, design a sorting strategy that uses at most 1 GB of memory.

### Challenge Problem

11. Design a sorting algorithm for integers in the range \([0, n^c - 1]\) that runs in \( O(n) \) expected time using \( O(n) \) space. Prove the bound.
12. Implement radix sort that sorts by IEEE 754 bit representation, correctly handling positive and negative floats. Prove correctness for all finite floating-point values.
