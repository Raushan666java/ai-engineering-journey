---
slug: /03-dsa/arrays
title: "Arrays"
sidebar_label: "Arrays"
sidebar_position: 2
---

﻿# Arrays

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand array memory layout and indexing fundamentals |
| LO2 | Implement static and dynamic array operations in Python |
| LO3 | Solve problems using the two-pointer and sliding window techniques |
| LO4 | Master in-place array manipulation and rotation algorithms |
| LO5 | Implement prefix sum and difference array techniques |
| LO6 | Identify and solve common array interview patterns |

## Introduction

Arrays are the most fundamental data structure, providing O(1) random access. Understanding array operations, their memory layout, and common patterns like sliding window is essential for coding interviews and building efficient data pipelines.

## Prerequisites

- Time and space complexity basics
- Basic programming


## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding arrays is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how arrays works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 2.1 | Array Fundamentals | Memory layout, indexing, static vs dynamic |
| 2.2 | Basic Operations | Traversal, insertion, deletion, searching |
| 2.3 | Prefix Sum Technique | Range sum queries, cumulative arrays |
| 2.4 | Two-Pointer Technique | Sorted arrays, pair sums, partitioning |
| 2.5 | In-Place Manipulations | Reversal, rotation, shifting |
| 2.6 | Multi-dimensional Arrays | Matrix operations, transpose, spiral traversal |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Array Fundamentals] --> B[Basic Operations]
    B --> C[Prefix Sum]
    B --> D[Two-Pointer]
    B --> E[In-Place Ops]
    C --> F[Matrix Arrays]
    D --> F
    E --> F
    F --> G[Practice Problems]
```text

## 2.1 Array Fundamentals

An array is a contiguous block of memory storing elements of the same type. Each element is accessed via an offset from the base address: `address = base + index — element_size`.

**Static arrays** have fixed size determined at creation. **Dynamic arrays** (Python lists) automatically resize when capacity is exceeded.

**Python lists** are dynamic arrays that store references to objects, allowing heterogeneous elements. Internally, they use overallocation for amortized O(1) append.

```python
# Static array using array module (typed)
from array import array
static_arr = array('i', [1, 2, 3, 4, 5])  # 'i' = signed int
print(static_arr[0])  # 1

## Dynamic array — Python list
dynamic_arr = [1, 2, 3]  # Initial capacity > 3
dynamic_arr.append(4)     # Amortized O(1)
dynamic_arr.extend([5, 6, 7])  # May trigger resize
print(len(dynamic_arr))   # 7
```text

**Memory layout comparison**:

```python

## Array of 5 integers
arr = [10, 20, 30, 40, 50]

## Memory: [10][20][30][40][50] — contiguous

## Address: base + 0, base + 8, base + 16, ... (on 64-bit)

## Access arr[3]: base + 3*8 = address of 40 — O(1)

## Linked list — nodes scattered in memory

## Access by index: must traverse nodes — O(n)
```text

| Operation | Static Array | Dynamic Array (amortized) | Linked List |
|-----------|-------------|--------------------------|-------------|
| Access by index | O(1) | O(1) | O(n) |
| Search | O(n) | O(n) | O(n) |
| Insert at end | N/A (full) | O(1) | O(1) |
| Insert at middle | N/A (full) | O(n) | O(1) |
| Delete from end | N/A (full) | O(1) | O(1) |
| Delete from middle | N/A (full) | O(n) | O(1) |

---

## 2.2 Basic Operations

**Array traversal**:

```python
def traverse(arr):
    for i in range(len(arr)):
        print(f"Index {i}: {arr[i]}")

## Two-direction traversal
def traverse_bidirectional(arr):
    for i in range(len(arr) // 2):
        print(arr[i], arr[-(i + 1)])
```text

**Linear search**:

```python
def linear_search(arr, target):
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1
```text

**Insertion at position**:

```python
def insert_at(arr, index, value):
    # Shift elements right from index
    arr.append(None)  # Extend array by 1
    for i in range(len(arr) - 1, index, -1):
        arr[i] = arr[i - 1]
    arr[index] = value
    return arr

## Better: use list.insert
arr = [1, 2, 4, 5]
arr.insert(2, 3)  # [1, 2, 3, 4, 5]
```text

**Deletion at position**:

```python
def delete_at(arr, index):
    # Shift elements left
    for i in range(index, len(arr) - 1):
        arr[i] = arr[i + 1]
    arr.pop()  # Remove last element
    return arr

## Better: use list.pop
arr = [1, 2, 3, 4, 5]
arr.pop(2)  # [1, 2, 4, 5]
```text

**Reverse an array**:

```python
def reverse_array(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    return arr

## Pythonic way
arr = [1, 2, 3, 4, 5]
reversed_arr = arr[::-1]  # Creates new array
arr.reverse()             # In-place
```text

---

## 2.3 Prefix Sum Technique

Prefix sum precomputes cumulative sums for efficient range queries.

**One-dimensional prefix sum**:

```python
def prefix_sum(arr):
    prefix = [0] * (len(arr) + 1)
    for i in range(len(arr)):
        prefix[i + 1] = prefix[i] + arr[i]
    return prefix

## Range sum query: sum(L, R) = prefix[R+1] - prefix[L]
arr = [3, 1, 4, 1, 5, 9, 2, 6]
pref = prefix_sum(arr)

def range_sum(pref, L, R):
    return pref[R + 1] - pref[L]

print(range_sum(pref, 2, 5))  # 4 + 1 + 5 + 9 = 19
print(range_sum(pref, 0, 3))  # 3 + 1 + 4 + 1 = 9
```text

**Subarray sum equals k**: Count subarrays whose sum equals k.

```python
from collections import defaultdict

def subarray_sum_equals_k(arr, k):
    prefix_map = defaultdict(int)
    prefix_map[0] = 1
    count = 0
    curr_sum = 0

    for num in arr:
        curr_sum += num
        count += prefix_map[curr_sum - k]
        prefix_map[curr_sum] += 1

    return count

## Example: [1, 1, 1], k=2 → 2
print(subarray_sum_equals_k([1, 1, 1], 2))  # 2
```text

**Two-dimensional prefix sum**: Efficient rectangle sum queries.

```python
def prefix_sum_2d(matrix):
    if not matrix or not matrix[0]:
        return []
    m, n = len(matrix), len(matrix[0])
    pref = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(m):
        for j in range(n):
            pref[i + 1][j + 1] = (matrix[i][j] +
                                  pref[i][j + 1] +
                                  pref[i + 1][j] -
                                  pref[i][j])
    return pref

def rectangle_sum(pref, r1, c1, r2, c2):
    return (pref[r2 + 1][c2 + 1] -
            pref[r1][c2 + 1] -
            pref[r2 + 1][c1] +
            pref[r1][c1])

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
pref = prefix_sum_2d(matrix)
print(rectangle_sum(pref, 1, 1, 2, 2))  # 5+6+8+9 = 28
```text

---

## 2.4 Two-Pointer Technique

Two pointers traverse an array from different positions, often opposite ends or different speeds.

**Two-sum in sorted array**:

```python
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        curr = arr[left] + arr[right]
        if curr == target:
            return [left, right]
        elif curr < target:
            left += 1
        else:
            right -= 1
    return [-1, -1]

print(two_sum_sorted([2, 7, 11, 15], 9))  # [0, 1]
```text

**Remove duplicates from sorted array**:

```python
def remove_duplicates(arr):
    if not arr:
        return 0
    write_pos = 1
    for read_pos in range(1, len(arr)):
        if arr[read_pos] != arr[write_pos - 1]:
            arr[write_pos] = arr[read_pos]
            write_pos += 1
    return write_pos  # New length

arr = [1, 1, 2, 2, 3, 4, 4, 5]
new_len = remove_duplicates(arr)
print(arr[:new_len])  # [1, 2, 3, 4, 5]
```text

**Container with most water**:

```python
def max_area(heights):
    left, right = 0, len(heights) - 1
    max_water = 0
    while left < right:
        width = right - left
        height = min(heights[left], heights[right])
        max_water = max(max_water, width * height)
        if heights[left] < heights[right]:
            left += 1
        else:
            right -= 1
    return max_water

print(max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]))  # 49
```text

**Trapping rain water**:

```python
def trap_rain_water(heights):
    if not heights:
        return 0
    left, right = 0, len(heights) - 1
    left_max, right_max = 0, 0
    water = 0

    while left < right:
        if heights[left] < heights[right]:
            if heights[left] >= left_max:
                left_max = heights[left]
            else:
                water += left_max - heights[left]
            left += 1
        else:
            if heights[right] >= right_max:
                right_max = heights[right]
            else:
                water += right_max - heights[right]
            right -= 1
    return water

print(trap_rain_water([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))  # 6
```text

```mermaid
flowchart TD
    subgraph "Two-Pointer Variants"
        A[Opposite Ends] -->|"Two Sum, Reverse"| D[Sorted Array]
        B[Same Direction] -->|"Remove Duplicates"| E[Fast & Slow]
        C[Fast & Slow] -->|"Cycle Detection"| F[Linked List]
    end
```text

---

## 2.5 In-Place Manipulations

**Array rotation by k positions**:

```python
def rotate_right(arr, k):
    n = len(arr)
    k %= n
    # Reverse entire array
    reverse(arr, 0, n - 1)
    # Reverse first k
    reverse(arr, 0, k - 1)
    # Reverse rest
    reverse(arr, k, n - 1)
    return arr

def reverse(arr, left, right):
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1

print(rotate_right([1, 2, 3, 4, 5], 2))  # [4, 5, 1, 2, 3]
```text

**Move zeros to end**:

```python
def move_zeros(arr):
    write_pos = 0
    for read_pos in range(len(arr)):
        if arr[read_pos] != 0:
            arr[write_pos], arr[read_pos] = arr[read_pos], arr[write_pos]
            write_pos += 1
    return arr

print(move_zeros([0, 1, 0, 3, 12]))  # [1, 3, 12, 0, 0]
```text

**Dutch national flag problem** (sort 0, 1, 2):

```python
def sort_colors(arr):
    low, mid, high = 0, 0, len(arr) - 1
    while mid <= high:
        if arr[mid] == 0:
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1
            mid += 1
        elif arr[mid] == 1:
            mid += 1
        else:  # arr[mid] == 2
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1
    return arr

print(sort_colors([2, 0, 2, 1, 1, 0]))  # [0, 0, 1, 1, 2, 2]
```text

**Find the first missing positive integer**:

```python
def first_missing_positive(arr):
    n = len(arr)
    # Place each number in its correct position
    for i in range(n):
        while 1 <= arr[i] <= n and arr[arr[i] - 1] != arr[i]:
            correct_pos = arr[i] - 1
            arr[i], arr[correct_pos] = arr[correct_pos], arr[i]

    # Find first missing
    for i in range(n):
        if arr[i] != i + 1:
            return i + 1
    return n + 1

print(first_missing_positive([3, 4, -1, 1]))  # 2
print(first_missing_positive([7, 8, 9, 11, 12]))  # 1
```text

---

## 2.6 Multi-dimensional Arrays

**Matrix transpose**: Convert rows to columns.

```python
def transpose(matrix):
    m, n = len(matrix), len(matrix[0])
    result = [[0] * m for _ in range(n)]
    for i in range(m):
        for j in range(n):
            result[j][i] = matrix[i][j]
    return result

matrix = [[1, 2, 3], [4, 5, 6]]
print(transpose(matrix))  # [[1, 4], [2, 5], [3, 6]]
```text

**Spiral matrix traversal**:

```python
def spiral_order(matrix):
    if not matrix:
        return []
    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1

    while top <= bottom and left <= right:
        # Traverse right
        for j in range(left, right + 1):
            result.append(matrix[top][j])
        top += 1
        # Traverse down
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1
        # Traverse left
        if top <= bottom:
            for j in range(right, left - 1, -1):
                result.append(matrix[bottom][j])
            bottom -= 1
        # Traverse up
        if left <= right:
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1
    return result

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(spiral_order(matrix))  # [1, 2, 3, 6, 9, 8, 7, 4, 5]
```text

**Rotate image** (90 degrees clockwise):

```python
def rotate_image(matrix):
    n = len(matrix)
    # Transpose
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    # Reverse each row
    for i in range(n):
        matrix[i].reverse()
    return matrix

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(rotate_image(matrix))  # [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
```text

**Set matrix zeros**: If an element is 0, set its entire row and column to 0.

```python
def set_zeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    first_row_zero = any(matrix[0][j] == 0 for j in range(n))
    first_col_zero = any(matrix[i][0] == 0 for i in range(m))

    # Mark zeros using first row/col as markers
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0

    # Set rows to zero based on markers
    for i in range(1, m):
        if matrix[i][0] == 0:
            for j in range(n):
                matrix[i][j] = 0

    # Set cols to zero based on markers
    for j in range(1, n):
        if matrix[0][j] == 0:
            for i in range(m):
                matrix[i][j] = 0

    if first_row_zero:
        for j in range(n):
            matrix[0][j] = 0
    if first_col_zero:
        for i in range(m):
            matrix[i][0] = 0

    return matrix

matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
print(set_zeroes(matrix))  # [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
```text

```mermaid
flowchart TD
    subgraph "Matrix Traversal Patterns"
        A[Row-wise] --> D[Standard]
        B[Spiral] --> E[Clockwise]
        C[Diagonal] --> F[Anti-Diagonal]
        D --> G[Operations]
        E --> G
        F --> G
    end
```text

---

## TypeScript Parallel

TypeScript arrays provide similar functionality with type safety:

```typescript
// TypeScript arrays — type-safe dynamic arrays
let arr: number[] = [1, 2, 3];
arr.push(4);  // O(1) amortized

// Two-pointer reverse
function reverse<T>(arr: T[]): void {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

// Prefix sum
function prefixSum(arr: number[]): number[] {
    const pref: number[] = new Array(arr.length + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        pref[i + 1] = pref[i] + arr[i];
    }
    return pref;
}
```text

---

## Summary

- Arrays are contiguous memory blocks providing O(1) random access by index, the fundamental building block for most data structures
- Python lists are dynamic arrays with amortized O(1) append, achieved via geometric resizing (typically 1.125x or 2x)
- Prefix sum enables O(1) range sum queries after O(n) preprocessing, critical for subarray problems
- The two-pointer technique solves pair problems (two sum, container with most water) in O(n) time with O(1) space
- The sliding window is a special two-pointer technique for contiguous subarray problems
- In-place array manipulation uses O(1) extra space by rearranging elements directly (reversal, rotation, partitioning)
- The Dutch national flag algorithm sorts three distinct values in O(n) with a single pass
- Matrix traversal patterns include row-wise, spiral, diagonal, and transpose — each with distinct index manipulation
- Using first row/col as markers enables O(1) space for certain matrix transformation problems
- Understanding array complexity trade-offs (access vs insertion vs deletion) is essential for choosing the right data structure

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Range sum queries | Use prefix sum (O(1) query) | Summing each range in O(n) |
| Sorted array search | Use binary search (O(log n)) | Linear search |
| Remove duplicates | Use two-pointer write technique | Using set and converting back |
| Rotate array | Use triple reversal | Shifting one by one |
| Matrix edit | Use first row/col as markers | O(m+n) extra space |
| Sorting 0,1,2 | Dutch national flag algorithm | Counting sort with extra array |

## Interview Q&A

<details class="tp-qa-card" data-qid="dsa02-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: Implement an in-place array reversal and analyze its complexity.
  </summary>
  <div class="tp-qa-answer">
    <pre><code>def reverse(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1</code></pre>
    <p><strong>Time complexity</strong>: O(n) — each element is swapped once.</p>
    <p><strong>Space complexity</strong>: O(1) — only two pointers, no extra memory.</p>
    <p><strong>Key insight</strong>: The triple reversal technique extends this for array rotation: reverse all, reverse first k, reverse rest.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa02-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: Explain the prefix sum technique. How is it used for 2D range sum queries?
  </summary>
  <div class="tp-qa-answer">
    <p>Prefix sum precomputes cumulative sums so any subarray sum can be computed in O(1) time. For 1D: <code>sum(L,R) = prefix[R+1] - prefix[L]</code>.</p>
    <p>For 2D, the formula uses inclusion-exclusion:</p>
    <pre><code>pref[i+1][j+1] = matrix[i][j]
                + pref[i][j+1]
                + pref[i+1][j]
                - pref[i][j]

rect_sum(r1,c1,r2,c2) = pref[r2+1][c2+1]
                      - pref[r1][c2+1]
                      - pref[r2+1][c1]
                      + pref[r1][c1]</code></pre>
    <p><strong>Applications</strong>: Subarray sum equals k (using hash map), matrix rectangle sums, image processing (box blur).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa02-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: Implement the Dutch national flag algorithm for sorting 0s, 1s, and 2s.
  </summary>
  <div class="tp-qa-answer">
    <pre><code>def sort_colors(arr):
    low = mid = 0
    high = len(arr) - 1

    while mid <= high:
        if arr[mid] == 0:
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1
            mid += 1
        elif arr[mid] == 1:
            mid += 1
        else:  # arr[mid] == 2
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1</code></pre>
    <p><strong>Key insight</strong>: Three pointers maintain three regions: [0..low-1] = 0s, [low..mid-1] = 1s, [high+1..end] = 2s.</p>
    <p><strong>Time</strong>: O(n) single pass. <strong>Space</strong>: O(1).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa02-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: Explain the "container with most water" problem and its solution.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Problem</strong>: Given n vertical lines on a coordinate plane representing walls, find two lines that together with the x-axis form a container holding the most water.</p>
    <p><strong>Solution</strong>: Two pointers from both ends. Calculate area = width — min(height_left, height_right). Move the pointer with smaller height inward.</p>
    <pre><code>def max_area(heights):
    left, right = 0, len(heights) - 1
    max_water = 0
    while left < right:
        water = (right - left) * min(heights[left], heights[right])
        max_water = max(max_water, water)
        if heights[left] < heights[right]:
            left += 1
        else:
            right -= 1
    return max_water</code></pre>
    <p><strong>Why it works</strong>: Moving the taller pointer inward can never increase area (width decreases, height capped by shorter line). So we always move the shorter pointer.</p>
    <p><strong>Complexity</strong>: O(n) time, O(1) space.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa02-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you rotate an array by k positions without using extra space?
  </summary>
  <div class="tp-qa-answer">
    <p>Use the <strong>triple reversal</strong> technique:</p>
    <pre><code>def rotate(arr, k):
    n = len(arr)
    k %= n
    reverse(arr, 0, n - 1)    # Reverse all
    reverse(arr, 0, k - 1)    # Reverse first k
    reverse(arr, k, n - 1)    # Reverse the rest

def reverse(arr, left, right):
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1</code></pre>
    <p><strong>Example</strong>: [1,2,3,4,5], k=2 → reverse all: [5,4,3,2,1] → reverse first 2: [4,5,3,2,1] → reverse last 3: [4,5,1,2,3]</p>
    <p><strong>Complexity</strong>: O(n) time, O(1) extra space.</p>
    <p><strong>Alternative</strong>: Use cyclic replacements (juggle algorithm) which is more complex but same complexity.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa02-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: Explain the "trapping rain water" problem and its two-pointer solution.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Problem</strong>: Given an array of non-negative integers representing elevation heights, compute how much water can be trapped after rain.</p>
    <p><strong>Two-pointer solution</strong>:</p>
    <pre><code>def trap(heights):
    left, right = 0, len(heights) - 1
    left_max = right_max = 0
    water = 0

    while left < right:
        if heights[left] < heights[right]:
            if heights[left] >= left_max:
                left_max = heights[left]
            else:
                water += left_max - heights[left]
            left += 1
        else:
            if heights[right] >= right_max:
                right_max = heights[right]
            else:
                water += right_max - heights[right]
            right -= 1
    return water</code></pre>
    <p><strong>Key insight</strong>: Water trapped at position i = min(max_left, max_right) - height[i]. The two-pointer approach tracks left_max and right_max as we converge from both ends.</p>
    <p><strong>Complexity</strong>: O(n) time, O(1) space.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa02-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you find the first missing positive integer in an array?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Problem</strong>: Given unsorted integers (including negatives), find the smallest missing positive integer in O(n) time and O(1) space.</p>
    <p><strong>Solution using cyclic sort</strong>:</p>
    <pre><code>def first_missing_positive(arr):
    n = len(arr)
    # Place each number at its correct index
    for i in range(n):
        while 1 <= arr[i] <= n and arr[arr[i] - 1] != arr[i]:
            correct = arr[i] - 1
            arr[i], arr[correct] = arr[correct], arr[i]

    # Find first index where value is wrong
    for i in range(n):
        if arr[i] != i + 1:
            return i + 1
    return n + 1</code></pre>
    <p><strong>Key insight</strong>: Numbers 1 to n should be placed at indices 0 to n-1. After placing them correctly, the first mismatch tells us the answer.</p>
    <p><strong>Complexity</strong>: O(n) time (each element is swapped at most n times), O(1) space.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa02-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: Implement the spiral matrix traversal algorithm.
  </summary>
  <div class="tp-qa-answer">
    <pre><code>def spiral_order(matrix):
    if not matrix:
        return []
    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1

    while top <= bottom and left <= right:
        # Left to right on top row
        for j in range(left, right + 1):
            result.append(matrix[top][j])
        top += 1

        # Top to bottom on right column
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1

        # Right to left on bottom row
        if top <= bottom:
            for j in range(right, left - 1, -1):
                result.append(matrix[bottom][j])
            bottom -= 1

        # Bottom to top on left column
        if left <= right:
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1
    return result</code></pre>
    <p><strong>Key insight</strong>: Contract the boundaries after each direction traversal. Check bounds before the left and up traversals to avoid duplicating elements in single-row/column cases.</p>
    <p><strong>Complexity</strong>: O(m—n) time, O(1) space excluding output.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa02-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: Explain how to set matrix rows and columns to zero in O(1) space.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Problem</strong>: If any element is 0, set its entire row and column to 0. Must do this in-place.</p>
    <p><strong>Approach</strong>: Use the first row and first column as markers instead of extra arrays.</p>
    <pre><code>def set_zeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    # Check if first row/col need zeroing
    first_row_zero = any(matrix[0][j] == 0 for j in range(n))
    first_col_zero = any(matrix[i][0] == 0 for i in range(m))

    # Use first row/col as markers
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0

    # Zero out based on markers
    for i in range(1, m):
        if matrix[i][0] == 0:
            for j in range(n):
                matrix[i][j] = 0
    for j in range(1, n):
        if matrix[0][j] == 0:
            for i in range(m):
                matrix[i][j] = 0

    # Handle first row/col
    if first_row_zero:
        for j in range(n):
            matrix[0][j] = 0
    if first_col_zero:
        for i in range(m):
            matrix[i][0] = 0</code></pre>
    <p><strong>Complexity</strong>: O(m—n) time, O(1) space.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa02-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you find subarray sum equals k? Explain the hash map approach.
  </summary>
  <div class="tp-qa-answer">
    <pre><code>from collections import defaultdict

def subarray_sum(arr, k):
    prefix_counts = defaultdict(int)
    prefix_counts[0] = 1
    curr_sum = count = 0

    for num in arr:
        curr_sum += num
        # If curr_sum - k was seen before,
        # subarray from that point to current has sum k
        count += prefix_counts[curr_sum - k]
        prefix_counts[curr_sum] += 1

    return count</code></pre>
    <p><strong>Intuition</strong>: If prefix sums at indices i and j differ by k, then subarray (i+1..j) sums to k. The hash map stores how many times each prefix sum has occurred.</p>
    <p><strong>Complexity</strong>: O(n) time, O(n) space.</p>
    <p><strong>Variations</strong>: Subarray sum divisible by k (use modulo), subarray with k ones (use running count).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa02-q11">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q11: What is the difference between Python lists and arrays from the `array` module?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Python lists</strong>:</p>
    <ul>
      <li>Dynamic arrays storing references to Python objects</li>
      <li>Can hold heterogeneous types</li>
      <li>Overallocate for amortized O(1) append</li>
      <li>More memory overhead per element (8 bytes for pointer + object overhead)</li>
    </ul>
    <p><strong>array.array</strong>:</p>
    <ul>
      <li>Stores C-style primitive values directly (not objects)</li>
      <li>Homogeneous type only</li>
      <li>More memory efficient (1-8 bytes per element depending on type)</li>
      <li>Supports buffer protocol for zero-copy operations</li>
    </ul>
    <pre><code>from array import array

## 'i' = signed int, 'd' = double, 'f' = float
int_arr = array('i', [1, 2, 3, 4, 5])
float_arr = array('d', [1.0, 2.0, 3.0])

## List is more flexible for most use cases
list_arr = [1, "hello", 3.14, None]</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa02-q12">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q12: How do you efficiently merge two sorted arrays into a single sorted array?
  </summary>
  <div class="tp-qa-answer">
    <pre><code>def merge_sorted(arr1, arr2):
    result = []
    i = j = 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            result.append(arr1[i])
            i += 1
        else:
            result.append(arr2[j])
            j += 1
    # Append remaining elements
    result.extend(arr1[i:])
    result.extend(arr2[j:])
    return result</code></pre>
    <p><strong>Key insight</strong>: Compare from the front, always take the smaller element. After one array is exhausted, append the rest of the other array.</p>
    <p><strong>Complexity</strong>: O(m+n) time, O(m+n) space (or O(1) if merging into first array from the end).</p>
    <p><strong>In-place variant</strong>: Merge into the first array which has extra space at the end. Start filling from the last position by comparing the last elements of both arrays.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What is the time complexity of accessing arr[42] in a Python list?

a) O(1)
b) O(n)
c) O(log n)
d) O(42)

<details class="tp-qa-card" data-qid="dsa02-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) O(1)</strong></p><p>Array access by index is O(1) — direct memory address computation.</p></div></details>

**Q2**: What does the two-pointer approach for "two sum in sorted array" return?

a) The two values that sum to target
b) The indices of the two values
c) Whether such a pair exists
d) The count of pairs

<details class="tp-qa-card" data-qid="dsa02-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) The indices of the two values</strong></p><p>The classic solution returns the indices (1-indexed or 0-indexed depending on the problem variant).</p></div></details>

**Q3**: What is the space complexity of the prefix sum technique?

a) O(1)
b) O(n)
c) O(log n)
d) O(n²)

<details class="tp-qa-card" data-qid="dsa02-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) O(n)</strong></p><p>Prefix sum requires an extra array of size n+1 (or n for 1-based).</p></div></details>

**Q4**: In the spiral matrix traversal, how are the boundaries adjusted?

a) All four boundaries shrink after each direction
b) Only top and left shrink
c) Only bottom and right shrink
d) Top shrinks after right traversal, right shrinks after down, etc.

<details class="tp-qa-card" data-qid="dsa02-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d) Top shrinks after right traversal, right shrinks after down, etc.</strong></p><p>Each boundary is adjusted immediately after its direction traversal, keeping the boundary box intact for subsequent directions.</p></div></details>

**Q5**: What is the minimum time complexity to rotate an array by k positions?

a) O(1)
b) O(k)
c) O(n)
d) O(n²)

<details class="tp-qa-card" data-qid="dsa02-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) O(n)</strong></p><p>All elements must move at least once, so O(n) is optimal. The triple reversal achieves this with O(1) extra space.</p></div></details>

## Exercises

**Easy** — Write a function that removes all occurrences of a specific value from an array in-place and returns the new length.

**Medium** — Implement the "next permutation" algorithm that rearranges numbers into the lexicographically next greater permutation.

**Medium** — Given an array of n integers where every element appears twice except one, find the single element in O(n) time and O(1) space using XOR.

**Hard** — Implement the "skyline problem" — given building coordinates (left, right, height), return the skyline formed by their outlines.

**Hard** — Given an array of integers, find the longest subarray with sum equal to 0 (not just contiguous). Use prefix sum and hash map.

---


## Common Mistakes

1. Not considering edge cases (empty array, single element)
2. Off-by-one errors in index calculations
3. Forgetting that array insertion/deletion is O(n)
4. Not using two-pointer technique when applicable
5. Ignoring cache locality benefits of arrays

## Revision Notes

- Arrays: O(1) access, O(n) insert/delete
- Cache-friendly due to contiguous memory
- Two-pointer technique for sorted arrays
- Sliding window for subarray problems
- Prefix sums for range queries

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of data structures algorithms. When would you choose one approach over another?
2. Design a system that efficiently handles data structures algorithms at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to data structures algorithms. What was your approach and what was the result?
2. How would you explain data structures algorithms to a non-technical stakeholder?

#### Microsoft Style
1. How does data structures algorithms integrate with enterprise systems and cloud architectures?
2. What are the security implications of data structures algorithms?

#### NVIDIA Style
1. How would you optimize data structures algorithms for GPU-accelerated computing?
2. What parallel processing patterns apply to data structures algorithms?

#### AI Startup Style
1. How would you implement data structures algorithms in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using data structures algorithms?

### Resume Tips
- **Technical Skills**: List data structures algorithms under relevant technical skills
- **Project Description**: "Implemented data structures algorithms to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include data structures algorithms in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of data structures algorithms
- [ ] Practice 3-5 problems related to data structures algorithms
- [ ] Prepare 2 real-world examples of using data structures algorithms
- [ ] Know the time/space complexity of common data structures algorithms operations
- [ ] Have questions ready about how the company uses data structures algorithms> **Next**: [03 — Strings →](03-strings.md)


## Difficulty Level

**Level**: Intermediate
**Estimated Study Time**: 30-45 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to Data Structures & Algorithms fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master arrays?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of arrays helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding arrays at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of arrays like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply arrays concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of arrays?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply arrays in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of Data Structures & Algorithms?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## Optimized Implementation

For production systems, consider:
- **Caching**: Cache frequent computations and API responses
- **Batching**: Process multiple items together for efficiency
- **Async/Await**: Use non-blocking I/O for concurrent operations
- **Connection Pooling**: Reuse database and API connections
- **Lazy Loading**: Load resources only when needed

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering Data Structures & Algorithms, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
