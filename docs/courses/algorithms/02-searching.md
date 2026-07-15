# Chapter 2: Searching

> **Prerequisites:** [Chapter 1: Fundamentals of Algorithm Analysis](./01-analysis.md) — Asymptotic notation and recurrence analysis | **Next:** [Chapter 3: Comparison-Based Sorting](./03-sorting-nlogn.md) — From finding elements to ordering them

## Learning Objectives

By the end of this chapter, students will be able to:

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/algorithms/02-searching/handwritten-notes.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/algorithms/02-searching/handwritten-notes.svg" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/algorithms/02-searching/sticky-notes.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/algorithms/02-searching/sticky-notes.svg" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/algorithms/02-searching/visual-explanation.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/algorithms/02-searching/visual-explanation.svg" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


1. Implement and analyze linear search, binary search, interpolation search, exponential search, and ternary search.
2. Determine the appropriate search algorithm given data distribution and access patterns.
3. Derive the time complexity of each algorithm using recurrence relations.
4. Identify edge cases and choose the right variant for real-world constraints.

---

## Why Searching Matters

**Real-World Analogy:** Imagine looking for a contact in your phone. If your contacts are listed randomly, you scan from top to bottom (linear search). If they're alphabetical, you jump to the middle letter and narrow down (binary search). If you know "Smith" is near the end, you skip directly toward the S section (interpolation search). Each approach has a time and place — and the wrong choice can cost you seconds, or in computing, millions of operations.

---

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Linear Search | Scan sequentially until found | Only option for unsorted data; optimal for small arrays |
| Binary Search | Repeatedly halve the search range | The gold standard for sorted arrays — O(log n) |
| Interpolation Search | Probe position using linear interpolation | O(log log n) on uniform data, O(n) worst-case |
| Exponential Search | Doubling bound + binary search | Best for unbounded/infinite arrays |
| Ternary Search | Two midpoints, three partitions | More comparisons than binary — slower in practice |

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

---

![Searching Diagram](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch02-searching.png)

## 2.1 Linear Search

**Real-World Analogy:** Looking for a specific book on an unsorted shelf — you check each book one by one from left to right until you find it.

### Definition


The simplest searching algorithm: traverse the array sequentially until the target is found or the array ends.

### Algorithm Steps


1. Start at index 0.
2. Compare the element at the current index with the target.
3. If they match, return the current index.
4. If they don't match, move to the next index.
5. If the end of the array is reached, return -1.

### Pseudocode


```
LinearSearch(A, n, key):
    for i = 0 to n-1:
        if A[i] == key:
            return i
    return -1
```

### Step-by-Step Dry Run


Input: `A = [4, 2, 9, 7, 5]`, `key = 7`

| Step | i | A[i] | Comparison | Result |
|-----|---|------|------------|--------|
| 1 | 0 | 4 | 4 == 7? No | Continue |
| 2 | 1 | 2 | 2 == 7? No | Continue |
| 3 | 2 | 9 | 9 == 7? No | Continue |
| 4 | 3 | 7 | 7 == 7? Yes | **Return 3** |

### Complexity Analysis


| Case | Comparisons | When |
|------|------------|------|
| **Best** | O(1) | Target at index 0 |
| **Worst** | O(n) | Target at last index or absent |
| **Average** | O(n) | Target at position n/2 on average |

**Why O(n)?** In the worst case, every element must be examined once. For an array of size n, that's n comparisons.

### Implementations


```cpp
// C++
int linearSearch(const vector<int>& arr, int key) {
    for (int i = 0; i < arr.size(); i++)
        if (arr[i] == key) return i;
    return -1;
}
```

```python
# Python
def linear_search(arr, key):
    for i, val in enumerate(arr):
        if val == key:
            return i
    return -1
```

```java
// Java
public static int linearSearch(int[] arr, int key) {
    for (int i = 0; i < arr.length; i++)
        if (arr[i] == key) return i;
    return -1;
}
```

### Advantages & Disadvantages


| Advantages | Disadvantages |
|-----------|--------------|
| Works on unsorted data | Slow for large arrays — O(n) |
| No preprocessing needed | Every element may need checking |
| Simple to implement | Impractical for n > 10⁶ |
| Optimal for small n | Ignores ordering information |

### Edge Cases


- **Empty array:** Loop doesn't execute, returns -1 immediately.
- **Duplicate elements:** Returns the first occurrence (leftmost).
- **Single element:** One comparison, O(1).

> **Pro Tip:** Never sort an array purely to use binary search for a single query — sorting costs O(n log n) which is worse than linear search's O(n). Sort only if you have multiple queries.

> **Remember:** Linear search is optimal for unsorted arrays — there's no faster algorithm without preprocessing.

---

## 2.2 Binary Search

**Real-World Analogy:** Looking up a word in a dictionary. You open to the middle, check if your word comes before or after, then discard the irrelevant half and repeat.

### Definition


Binary search operates on a **sorted** array by repeatedly dividing the search interval in half. At each step, compare the target with the middle element. If the target matches, return the index. If the target is smaller, search the left half; otherwise, search the right half.

### Algorithm Steps


1. Set low = 0, high = n - 1.
2. While low &lt;= high:
   - Compute mid = low + (high - low) / 2.
   - If A[mid] == key, return mid.
   - If key &lt; A[mid], set high = mid - 1.
   - If key > A[mid], set low = mid + 1.
3. Return -1 (key not found).

### Pseudocode (Recursive)


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

### Step-by-Step Dry Run


Input: `A = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72]`, `key = 23`

| Step | low | high | mid | A[mid] | Comparison | Action |
|------|-----|------|-----|--------|------------|--------|
| 1 | 0 | 9 | 4 | 16 | 23 > 16 | low = 5 |
| 2 | 5 | 9 | 7 | 45 | 23 &lt; 45 | high = 6 |
| 3 | 5 | 6 | 5 | 23 | 23 == 23 | **Return 5** |

3 comparisons to find 23 in an array of 10 elements. Linear search would have taken 6 comparisons.

### Complexity Analysis


**Recurrence:** T(n) = T(n/2) + O(1)

By the master theorem (case 2): T(n) = O(log n)

| Case | Comparisons | When |
|------|------------|------|
| **Best** | O(1) | Target at the middle |
| **Worst** | O(log n) | Target at leaf level or absent |
| **Average** | O(log n) | |

**Why log n?** Each step discards half the remaining elements. From n to n/2 to n/4 to ... to 1 takes log₂(n) steps. For n = 1,000,000, that's at most 20 comparisons vs 1,000,000 for linear search.

### Implementations


```cpp
// C++ — Iterative
int binarySearch(const vector<int>& arr, int key) {
    int low = 0, high = arr.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;  // Avoids overflow
        if (arr[mid] == key) return mid;
        if (arr[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}
```

```python
# Python — Iterative
def binary_search(arr, key):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] == key:
            return mid
        elif arr[mid] < key:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

```python
# Python — Recursive
def binary_search_recursive(arr, low, high, key):
    if low > high:
        return -1
    mid = low + (high - low) // 2
    if arr[mid] == key:
        return mid
    elif arr[mid] < key:
        return binary_search_recursive(arr, mid + 1, high, key)
    else:
        return binary_search_recursive(arr, low, mid - 1, key)
```

```java
// Java — Iterative
public static int binarySearch(int[] arr, int key) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key) return mid;
        if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```

> **Pro Tip:** Always use `mid = low + (high - low) / 2` instead of `mid = (low + high) / 2`. The latter can overflow when low + high exceeds Integer.MAX_VALUE — a classic bug in real systems.

### Advantages & Disadvantages


| Advantages | Disadvantages |
|-----------|--------------|
| Blazing fast — O(log n) | Requires sorted input |
| Simple, elegant recursion | Slow for frequent insert/delete |
| Low constant factors | Poor cache locality vs linear (linked lists) |
| Deterministic performance | O(n) sorting preprocessing needed |

### Edge Cases


- **Empty array:** low (0) > high (-1), immediately returns -1.
- **Single element:** One comparison, O(1).
- **Duplicate elements:** Returns any occurrence, not necessarily the first/last.
- **Finding first/last occurrence:** Use lower_bound / upper_bound variants (see Interview Corner).

### Variations


1. **Lower bound (first >= key):** Keep searching left when A[mid] == key.
2. **Upper bound (first > key):** Keep searching right when A[mid] == key.
3. **Binary search on answer:** Used when the search space is a range of values, not array indices — e.g., find square root, aggressive cows problem.
4. **Search in rotated sorted array:** Modified binary search that checks which half is sorted.

### Applications


- Database indexing (B-tree search)
- Debugging — git bisect uses binary search to find the first broken commit
- Dictionary / symbol table lookup
- Numerical methods — root finding (bisection method)

> **Remember:** Binary search is just a divide-and-conquer algorithm where one half is always discarded. If your problem can be modeled as "find the point where a condition flips from false to true," binary search on the answer probably works.

---

## 2.3 Interpolation Search

**Real-World Analogy:** Looking up a name in a phone book. If you're looking for "Smith," you don't open to the middle — you open closer to the end because you know S is in the latter part of the alphabet.

### Definition


Interpolation search improves on binary search when the data is uniformly distributed. Instead of always using the midpoint, it estimates the position using a linear interpolation formula.

### Probe Formula


\[
\text{pos} = \text{low} + \frac{(\text{key} - A[\text{low}]) \cdot (\text{high} - \text{low})}{A[\text{high}] - A[\text{low}]}
\]

This is the equation of a line through (low, A[low]) and (high, A[high]), evaluated at y = key.

### Algorithm Steps


1. While low &lt;= high and key is within range:
   - Compute probe position using interpolation.
   - If A[pos] == key, return pos.
   - If A[pos] &lt; key, search right (low = pos + 1).
   - If A[pos] > key, search left (high = pos - 1).
2. Return -1.

### Step-by-Step Dry Run


Input: `A = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]`, `key = 85`

```
pos = 0 + ((85 - 10) * (9 - 0)) / (100 - 10)
    = 0 + (75 * 9) / 90
    = 0 + 675 / 90
    = 7.5 → 7
```

| Step | low | high | pos | A[pos] | Action |
|------|-----|------|-----|--------|--------|
| 1 | 0 | 9 | 7 | 80 | 85 > 80, low = 8 |
| 2 | 8 | 9 | 8 | 90 | 85 &lt; 90, high = 7 |
| 3 | 8 | 7 | — | — | low > high, **Return -1** |

Key 85 not found — algorithm correctly determined it's between 80 and 90 (would be index 8.5, which rounds to either side showing absence).

### Complexity Analysis


| Case | Complexity | When |
|------|-----------|------|
| **Best** | O(1) | Key at first probe position |
| **Average** | O(log log n) | Uniformly distributed data |
| **Worst** | O(n) | Skewed distribution (exponential, power law) |

**Why O(log log n)?** On uniform data, the probe position converges to the target exponentially fast — each iteration roughly squares the precision of the estimate.

### Implementations


```cpp
// C++
int interpolationSearch(const vector<int>& arr, int key) {
    int low = 0, high = arr.size() - 1;
    while (low <= high && key >= arr[low] && key <= arr[high]) {
        if (low == high) return (arr[low] == key) ? low : -1;
        int pos = low + (key - arr[low]) * (high - low) / (arr[high] - arr[low]);
        if (arr[pos] == key) return pos;
        if (arr[pos] < key) low = pos + 1;
        else high = pos - 1;
    }
    return -1;
}
```

```python
# Python
def interpolation_search(arr, key):
    low, high = 0, len(arr) - 1
    while low <= high and arr[low] <= key <= arr[high]:
        if low == high:
            return low if arr[low] == key else -1
        pos = low + (key - arr[low]) * (high - low) // (arr[high] - arr[low])
        if arr[pos] == key:
            return pos
        if arr[pos] < key:
            low = pos + 1
        else:
            high = pos - 1
    return -1
```

### Advantages & Disadvantages


| Advantages | Disadvantages |
|-----------|--------------|
| O(log log n) on uniform data | O(n) worst-case on skewed data |
| Fewer comparisons than binary on large uniform datasets | Complex probe calculation with division |
| Adapts to data distribution | Assumes numeric keys with meaningful ordering |

> **Warning:** Interpolation search degrades to O(n) on exponentially distributed data. Always verify your data distribution before choosing it over binary search. For real-world systems, binary search's predictable O(log n) is often preferred over interpolation's variable performance.

---

## 2.4 Exponential Search

**Real-World Analogy:** Searching for a parking spot in an unfamiliar lot. You don't know how big the lot is, so you walk 10 steps, then 20, then 40, 80... until you either find a spot or realize you've passed the end.

### Definition


Exponential search finds the range containing the target by doubling the search window, then performs binary search within that range.

### Algorithm Steps


1. If A[0] == key, return 0.
2. Start with i = 1. While i &lt; n and A[i] <= key, double i.
3. Perform binary search on the range [i/2, min(i, n-1)].

### Step-by-Step Dry Run


Input: `A = [3, 7, 11, 19, 25, 31, 42, 56, 68, 79]`, `key = 42`

| Phase | i | A[i] | Comparison | Action |
|-------|---|------|------------|--------|
| Doubling | 1 | 7 | 7 &lt;= 42 | i = 2 |
| Doubling | 2 | 11 | 11 &lt;= 42 | i = 4 |
| Doubling | 4 | 25 | 25 &lt;= 42 | i = 8 |
| Doubling | 8 | 68 | 68 > 42 | Stop. Range: [4, 7] |

Binary search on `A[4..7] = [25, 31, 42, 56]`:

| Step | low | high | mid | A[mid] | Action |
|------|-----|------|-----|--------|--------|
| 1 | 4 | 7 | 5 | 31 | 42 > 31, low = 6 |
| 2 | 6 | 7 | 6 | 42 | **Return 6** |

Total comparisons for doubling + binary search: 4 + 2 = 6. Binary search alone would need 4 comparisons.

### Complexity Analysis


| Case | Complexity | When |
|------|-----------|------|
| **Best** | O(1) | Key at index 0 |
| **Worst** | O(log n) | Key at last position |
| **Average** | O(log i) where i is target position |

**Why O(log i)?** The doubling phase takes log₂(i) steps to reach position i, then binary search takes O(log i) on the range [i/2, i]. Combined: 2 log₂(i) = O(log i).

### Implementations


```cpp
// C++
int exponentialSearch(const vector<int>& arr, int key) {
    int n = arr.size();
    if (arr[0] == key) return 0;
    int i = 1;
    while (i < n && arr[i] <= key) i *= 2;
    int low = i / 2;
    int high = min(i, n - 1);
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

```python
# Python
def exponential_search(arr, key):
    if arr[0] == key:
        return 0
    i = 1
    n = len(arr)
    while i < n and arr[i] <= key:
        i *= 2
    return binary_search(arr, key, i // 2, min(i, n - 1))
```

### Advantages & Disadvantages


| Advantages | Disadvantages |
|-----------|--------------|
| Works on unbounded arrays (streaming) | Overkill for small arrays |
| Efficient when target is near the start | Two-phase algorithm adds complexity |
| O(log n) worst-case guarantee | Uses binary search as subroutine |

### Edge Cases


- **Target at index 0:** Caught immediately — O(1).
- **Target absent:** Binary search will determine this in O(log bound).
- **Infinite/unbounded array:** Exponential search is the natural solution — no need to know the size.

### Applications


- **Timsort merge** — Galloping mode uses exponential search to find merge positions efficiently.
- **Cursor-based pagination** — Finding a page by ID in an API response.
- **Streaming data** — Searching in data streams where total size is unknown.

> **Pro Tip:** Exponential search shines in exactly two scenarios: unbounded arrays and when the target is likely near the start. For general sorted arrays, binary search is simpler and equally fast asymptotically.

---

## 2.5 Ternary Search

**Real-World Analogy:** Searching a sorted deck of cards by splitting into three piles instead of two — sounds thorough but requires two comparisons per step instead of one.

### Definition


Ternary search divides the array into three equal parts using two midpoints.

### Algorithm Steps


1. Compute mid1 = low + (high - low) / 3, mid2 = high - (high - low) / 3.
2. Check both midpoints against the key.
3. If key matches either, return it.
4. If key &lt; A[mid1], search left third.
5. If key > A[mid2], search right third.
6. If key is between mid1 and mid2, search middle third.

### Complexity Analysis


**Recurrence:** T(n) = T(n/3) + O(1) → O(log₃ n)

But each step does **2 comparisons** vs binary search's **1 comparison**.

| Algorithm | Comparisons per step | Steps for n = 10⁶ |
|-----------|---------------------|-------------------|
| Binary search | 1 | log₂(10⁶) ≈ 20 |
| Ternary search | 2 | log₃(10⁶) ≈ 12 × 2 = 24 |

Ternary search does **more total comparisons** despite fewer steps.

### Implementations


```cpp
// C++
int ternarySearch(const vector<int>& arr, int low, int high, int key) {
    if (low > high) return -1;
    int mid1 = low + (high - low) / 3;
    int mid2 = high - (high - low) / 3;
    if (arr[mid1] == key) return mid1;
    if (arr[mid2] == key) return mid2;
    if (key < arr[mid1])
        return ternarySearch(arr, low, mid1 - 1, key);
    else if (key > arr[mid2])
        return ternarySearch(arr, mid2 + 1, high, key);
    else
        return ternarySearch(arr, mid1 + 1, mid2 - 1, key);
}
```

### Advantages & Disadvantages


| Advantages | Disadvantages |
|-----------|--------------|
| Useful for unimodal function optimization | More comparisons per step than binary search |
| Fewer recursion depth steps | Never faster than binary in practice |

> **Remember:** Ternary search does 2 comparisons per step. Despite log₃ n &lt; log₂ n, the constant factor (2× comparisons) makes it strictly slower than binary search for searching in arrays. Its real use is finding the maximum of a unimodal function where you can't directly compare with a target value.

---

## Comparative Analysis

### Performance Comparison (n = 1,000,000)


| Algorithm | Worst-case comparisons | Formula |
|-----------|----------------------|---------|
| Linear search | 1,000,000 | n |
| Binary search | 20 | ⌈log₂(n+1)⌉ |
| Interpolation search | 1,000,000 | n (worst case) |
| Exponential search | ~40 | 2 log₂ i |
| Ternary search | 38 | 2 log₃ n |

### When to Choose What


```
Unsorted?              → Linear Search
Sorted, general:       → Binary Search
Sorted, uniform data:  → Interpolation Search  
Unbounded array:       → Exponential Search
Finding max of unimodal f(x): → Ternary Search
```

---

## Interview Corner

### Common Questions


1. **Search in a rotated sorted array** — Modified binary search. Find the pivot by comparing A[mid] with A[low], then determine which half is sorted and search accordingly.

2. **Find first/last occurrence of a target** — Standard binary search variant. For first occurrence, don't stop when A[mid] == key; continue searching left (high = mid - 1). For last, continue right (low = mid + 1).

3. **Peak element in a mountain array** — Binary search on the condition A[mid] &lt; A[mid + 1]. If true, peak is on the right; otherwise, peak is on the left.

4. **Count occurrences in sorted array** — Find first and last occurrence with binary search, then last - first + 1.

### Common Pitfalls


| Pitfall | Solution |
|---------|----------|
| mid overflow | Use low + (high - low) / 2 |
| Infinite loop (low == mid) | Ensure low = mid + 1, high = mid - 1 |
| Binary search on unsorted data | Always sort first (or use linear) |
| Off-by-one errors | Loop condition: low &lt;= high, not low < high |

---

## Applications in Real Systems

| Technology | Search Algorithm Used |
|-----------|---------------------|
| Database B-Tree indexes | Binary search within each node |
| Git bisect | Binary search on commit history |
| Timsort (Python, Java, Android) | Exponential search for galloping mode |
| Google Search Index | Interpolation-inspired partitioning |
| DNS resolution | Binary search on sorted domain tiers |
| Debugger call stack navigation | Binary search on frame list |

---

## Summary

- **Linear search** — Simple, works on anything, O(n). Use for unsorted data or tiny arrays.
- **Binary search** — The workhorse. O(log n) on sorted arrays. Know it, love it, handle its edge cases.
- **Interpolation search** — Faster on uniform data (O(log log n)), but risky on skewed distributions.
- **Exponential search** — Best for unbounded arrays and targets near the start.
- **Ternary search** — Interesting theoretically, but binary search beats it in practice.

### Key Takeaway


Binary search is the most important algorithm in this chapter — master its standard form, its first/last-occurrence variants, and its "binary search on answer" pattern. These appear in nearly every technical interview and real-world system.

---

## Chapter Quiz

**Q1.** Binary search has what recurrence relation?

- A) T(n) = T(n-1) + O(1)
- B) T(n) = 2T(n/2) + O(1)
- C) T(n) = T(n/2) + O(1)
- D) T(n) = T(n/3) + O(1)

<details>
<summary>Answer&lt;/summary&gt;
**C)** T(n) = T(n/2) + O(1) — each step halves the search space with constant work.
</details>

**Q2.** Which search algorithm is best for an unbounded (infinite) sorted array?

- A) Linear search
- B) Binary search
- C) Exponential search
- D) Interpolation search

<details>
<summary>Answer&lt;/summary&gt;
**C)** Exponential search — it doesn't need to know the array length and probes outward in exponentially growing steps.
</details>

**Q3.** When does interpolation search degrade to O(n)?

- A) When the array is small
- B) When data is exponentially distributed
- C) When the array is sorted
- D) When using integer keys

<details>
<summary>Answer&lt;/summary&gt;
**B)** Interpolation search assumes uniform distribution. On skewed data like exponential distributions, it can make O(n) probes.
</details>

**Q4.** Why is ternary search slower than binary search despite taking fewer steps?

- A) Ternary search uses more memory
- B) Ternary search does 2 comparisons per step vs binary's 1
- C) Ternary search requires floating-point division
- D) Ternary search can't handle duplicates

<details>
<summary>Answer&lt;/summary&gt;
**B)** Ternary search does 2 comparisons per step while binary search does 1. The total comparisons are 2·log₃(n) > log₂(n) for all practical n.
</details>

**Q5.** What is the advantage of `mid = low + (high - low) / 2` over `mid = (low + high) / 2`?

- A) It's faster
- B) It avoids integer overflow
- C) It produces more accurate midpoints
- D) It works on unsorted arrays

<details>
<summary>Answer&lt;/summary&gt;
**B)** The expression `low + (high - low) / 2` avoids integer overflow when low + high exceeds the maximum integer value.
</details>

---

## Exercises

### Review Questions

1. Why does binary search require a sorted array?
2. What is the advantage of exponential search over binary search?
3. Under what distribution does interpolation search achieve O(log log n) performance?
4. Compare the midpoint computations for binary search and interpolation search.

### Application Problems

5. Implement binary search with recursion in C++. Compare its performance with the iterative version.
6. An array of 100 elements is uniformly distributed. Estimate the average number of comparisons for binary search and interpolation search.
7. Implement a function that performs ternary search and empirically compare it to binary search on arrays of size 10³, 10⁵, 10⁷.

### Challenge Problems

8. **Find in rotated sorted array:** Design a search algorithm for a sorted, rotated array (e.g., [13, 14, 15, 1, 2, 3]). The algorithm should run in O(log n) time.
9. **Median of two sorted arrays:** Given two sorted arrays of size m and n, find the median in O(log(min(m, n))) time.
10. **Search in a nearly sorted array:** An array where each element is at most k positions away from its sorted position — search for a target efficiently.
