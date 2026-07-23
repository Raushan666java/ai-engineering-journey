<!-- Clear Language: Keep sentences under 50 words -->
﻿# Two Pointers

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand the two-pointer technique and its three main variants: opposite-direction, same-direction, and fast-slow |
| LO2 | Solve pair-sum and triplet problems on sorted arrays using opposite-end pointers |
| LO3 | Implement in-place array modifications (remove duplicates, partition) using same-direction pointers |
| LO4 | Apply fast-slow pointers for cycle detection in linked lists and finding the middle node |
| LO5 | Recognize problems where the two-pointer pattern yields O(n) time and O(1) space solutions |
| LO6 | Combine two-pointer with binary search, hash maps, and sorting for complex optimization problems |

## Introduction

The two-pointer technique is a powerful pattern for solving array and linked list problems efficiently. By using two indices that move intelligently, you can solve many problems in O(n) time that would otherwise require O(n²).

## Prerequisites

- Array basics
- Time complexity analysis


## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding two pointers is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how two pointers works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 5.1 | Opposite-Direction Pointers | Two pointers starting at ends, moving inward |
| 5.2 | Same-Direction Pointers | Both pointers moving forward at different speeds |
| 5.3 | Fast-Slow Pointers | One pointer moves twice as fast as the other |
| 5.4 | N-Sum Problems | Extending two pointers to three-sum, four-sum |
| 5.5 | Partitioning & In-Place | Dutch national flag, quicksort partition |
| 5.6 | Advanced Combinations | Two pointers with hash maps, binary search |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Two Pointers] --> B[Opposite Direction]
    A --> C[Same Direction]
    A --> D[Fast-Slow]
    B --> E[Pair Sum Sorted]
    B --> F[Container Water]
    C --> G[Remove Duplicates]
    C --> H[Move Zeroes]
    D --> I[Cycle Detection]
    D --> J[Middle of List]
    B --> K[N-Sum Problems]
    C --> L[Partitioning]
    D --> M[Advanced Patterns]
```text

## 5.1 Opposite-Direction Pointers

The opposite-direction (or converging) two-pointer technique places one pointer at the start and the other at the end of an array. The pointers move toward each other until they meet. This pattern works best on sorted arrays or when the problem involves finding a pair of elements that satisfy a condition.

### Pair Sum in a Sorted Array

Given a sorted array and a target sum, find whether any pair of elements adds up to the target. The brute-force O(n^2) approach checks every pair. With two opposite-direction pointers, we achieve O(n) time and O(1) space.

```python
def pair_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current = arr[left] + arr[right]
        if current == target:
            return (arr[left], arr[right])
        elif current < target:
            left += 1
        else:
            right -= 1
    return None

arr = [1, 2, 3, 4, 5, 6, 7]
print(pair_sum_sorted(arr, 10))  # (3, 7)
```text

**Why this works:** Since the array is sorted, moving the left pointer forward increases the sum, and moving the right pointer backward decreases the sum. This guarantees we find the pair (or determine none exists) in a single pass.

### Container With Most Water

You are given an array of heights. Each index represents a vertical line. Find two lines that together with the x-axis form a container that holds the most water.

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

heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]
print(max_area(heights))  # 49
```text

The intuition: starting with the widest container, we move the pointer pointing to the shorter line inward. Since the width decreases, the only way to get more water is to find a taller line. This eliminates n-1 options per step, giving O(n) total.

### Comparison: Brute-Force vs. Two-Pointer

| Approach | Time Complexity | Space Complexity | Lines of Code |
|----------|----------------|------------------|---------------|
| Brute-force nested loops | O(n^2) | O(1) | 5 |
| Hash map | O(n) | O(n) | 8 |
| Two-pointer (sorted) | O(n) | O(1) | 10 |

## 5.2 Same-Direction Pointers

Same-direction pointers both start at the beginning of the array and move forward, usually at different speeds or with one pointer lagging behind the other. This pattern is ideal for in-place modifications where we need to track a "write" position separately from a "read" position.

### Remove Duplicates from Sorted Array

```python
def remove_duplicates(arr):
    if not arr:
        return 0
    write = 1
    for read in range(1, len(arr)):
        if arr[read] != arr[write - 1]:
            arr[write] = arr[read]
            write += 1
    return write

arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
k = remove_duplicates(arr)
print(arr[:k])  # [0, 1, 2, 3, 4]
```text

The `write` pointer tracks where the next unique element should go. The `read` pointer scans the array. When `arr[read]` differs from the last written element, we copy it to the write position. This keeps the first k elements as the unique set.

### Move Zeroes

Move all zeros in an array to the end while maintaining the relative order of non-zero elements.

```python
def move_zeroes(nums):
    write = 0
    for read in range(len(nums)):
        if nums[read] != 0:
            nums[write], nums[read] = nums[read], nums[write]
            write += 1
    return nums

nums = [0, 1, 0, 3, 12]
print(move_zeroes(nums))  # [1, 3, 12, 0, 0]
```text

### Same-Direction Variants

| Variant | Pointer Roles | Common Use Case |
|---------|--------------|-----------------|
| Write-Read | Write lags behind read | Remove duplicates, move zeroes |
| Slow-Fast | Both advance, slow conditionally | Find kth from end, remove element |
| Window | Right expands, left contracts | Sliding window problems |

## 5.3 Fast-Slow Pointers

Fast-slow pointers (also called Floyd's algorithm or the tortoise and hare) use two pointers where one moves twice as fast as the other. This pattern is especially useful for linked list problems and cycle detection.

### Cycle Detection in a Linked List

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

# Create a linked list with a cycle
a = ListNode(3)
b = ListNode(2)
c = ListNode(0)
d = ListNode(-4)
a.next = b; b.next = c; c.next = d; d.next = b  # cycle back to b

print(has_cycle(a))  # True
```text

**How it works:** If there is no cycle, the fast pointer reaches the end (null). If there is a cycle, the fast pointer eventually laps the slow pointer and they meet. The proof relies on modular arithmetic: after k steps, the distance between them modulo the cycle length shrinks by 1 each step.


## Overview

### Find the Middle of a Linked List

```python
def middle_node(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow.val

## 1 -> 2 -> 3 -> 4 -> 5
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
print(middle_node(head))  # 3
```text

When fast reaches the end, slow is at the middle. This works in one pass without knowing the list length.


## Overview

### Find the Start of the Cycle

```python
def detect_cycle_start(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            slow = head
            while slow != fast:
                slow = slow.next
                fast = fast.next
            return slow.val
    return None

a = ListNode(3); b = ListNode(2); c = ListNode(0); d = ListNode(-4)
a.next = b; b.next = c; c.next = d; d.next = b
print(detect_cycle_start(a))  # 2
```text

After the first meeting, reset one pointer to the head. Both now move at the same speed. They meet at the cycle start. This is a classic interview question that tests deep understanding.

### Fast-Slow Pointers Summary

| Problem | Fast Condition | Slow Condition | Meeting Point |
|---------|---------------|----------------|---------------|
| Has cycle | 2 steps | 1 step | Anywhere in cycle |
| Middle node | 2 steps | 1 step | Middle when fast ends |
| Cycle start | 2 steps, then 1 | 1 step | Reset then cycle entry |
| Happy number | Next squared | Next squared | 1 or cycle |

## 5.4 N-Sum Problems

The two-pointer technique solves two-sum on sorted arrays elegantly. By extension, it solves three-sum, four-sum, and more complex N-sum problems by nesting the two-pointer pattern inside loops.

### Three Sum

Find all unique triplets in an array that sum to zero.

```python
def three_sum(nums):
    nums.sort()
    result = []
    n = len(nums)
    for i in range(n - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left, right = i + 1, n - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1
    return result

nums = [-1, 0, 1, 2, -1, -4]
print(three_sum(nums))  # [[-1, -1, 2], [-1, 0, 1]]
```text

**Key details:** The outer loop fixes one element. The inner two-pointer scans the rest. Sorting is O(n log n). The duplicates are skipped after each match. Total complexity: O(n^2).

### Four Sum

```python
def four_sum(nums, target):
    nums.sort()
    result = []
    n = len(nums)
    for i in range(n - 3):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        for j in range(i + 1, n - 2):
            if j > i + 1 and nums[j] == nums[j - 1]:
                continue
            left, right = j + 1, n - 1
            while left < right:
                total = nums[i] + nums[j] + nums[left] + nums[right]
                if total == target:
                    result.append([nums[i], nums[j], nums[left], nums[right]])
                    left += 1
                    right -= 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1
                elif total < target:
                    left += 1
                else:
                    right -= 1
    return result

nums = [1, 0, -1, 0, -2, 2]
print(four_sum(nums, 0))
```text

### N-Sum Complexity Table

| Problem | Outer Loops | Two-Pointer | Total Time | Space |
|---------|-------------|-------------|------------|-------|
| Two Sum (sorted) | 0 | O(n) | O(n) | O(1) |
| Three Sum | 1 | O(n) | O(n^2) | O(1) + sorting |
| Four Sum | 2 | O(n) | O(n^3) | O(1) + sorting |
| K Sum | k-2 | O(n) | O(n^(k-1)) | O(k) |

## 5.5 Partitioning and In-Place Operations

The same-direction pointer technique is powerful for partitioning arrays without extra memory. The key insight is maintaining multiple regions of the array using boundary pointers.

### Dutch National Flag Problem

Sort an array containing only 0s, 1s, and 2s in-place.

```python
def sort_colors(nums):
    low, mid, high = 0, 0, len(nums) - 1
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1
    return nums

nums = [2, 0, 2, 1, 1, 0]
print(sort_colors(nums))  # [0, 0, 1, 1, 2, 2]
```text

Three pointers (`low`, `mid`, `high`) maintain three regions:
- `[0, low-1]`: all 0s
- `[low, mid-1]`: all 1s
- `[high+1, end]`: all 2s
- `[mid, high]`: yet to be processed

### Partition Array by Pivot

```python
def partition_by_pivot(arr, pivot):
    write = 0
    for read in range(len(arr)):
        if arr[read] < pivot:
            arr[write], arr[read] = arr[read], arr[write]
            write += 1
    for read in range(write, len(arr)):
        if arr[read] == pivot:
            arr[write], arr[read] = arr[read], arr[write]
            write += 1
    return arr

arr = [9, 4, 7, 2, 5, 6, 3]
print(partition_by_pivot(arr, 5))
```text

### In-Place Modification Patterns

| Pattern | Pointers | Example | Complexity |
|---------|----------|---------|------------|
| Write lag | write, read | Remove element, dedup | O(n) |
| Three-region | low, mid, high | Dutch flag, quicksort partition | O(n) |
| Swap-to-end | write, read | Move zeroes, remove val | O(n) |

## 5.6 Advanced Combinations

Two pointers combine naturally with other techniques to solve more complex problems.

### Two Pointers with Hash Map

Find two numbers in an unsorted array that sum to a target. While the classic two-pointer needs a sorted array, combining it with a hash map works on unsorted data O(n).

```python
def two_sum_unsorted(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return None

nums = [2, 7, 11, 15]
print(two_sum_unsorted(nums, 9))  # [0, 1]
```text

### Two Pointers with Binary Search

For problems where conditional movement is ambiguous, binary search can determine how far to move a pointer.

```python
def find_closest_elements(arr, k, x):
    left, right = 0, len(arr) - k
    while left < right:
        mid = (left + right) // 2
        if x - arr[mid] > arr[mid + k] - x:
            left = mid + 1
        else:
            right = mid
    return arr[left:left + k]

arr = [1, 2, 3, 4, 5]
print(find_closest_elements(arr, 4, 3))  # [1, 2, 3, 4]
```text

### Trapping Rain Water

An advanced two-pointer problem combining opposite-direction iteration with running maximums.

```python
def trap_rain_water(height):
    left, right = 0, len(height) - 1
    left_max = right_max = 0
    water = 0
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                water += right_max - height[right]
            right -= 1
    return water

height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
print(trap_rain_water(height))  # 6
```text

At each step, we process the smaller of the two outer heights. We maintain the maximum seen from each side. Any height lower than its side's max contributes that difference to trapped water.

### Two-Pointer Problem Selection Guide

| Problem Type | Pointer Variant | Precondition | Time |
|-------------|----------------|--------------|------|
| Pair sum equals target | Opposite-direction | Sorted | O(n) |
| Remove duplicates | Same-direction (write) | Sorted | O(n) |
| Three sum | Nested opposite-direction | Any + sort | O(n^2) |
| Cycle detection | Fast-slow | Linked list | O(n) |
| Trapping rain water | Opposite + running max | Any | O(n) |
| Container most water | Opposite-direction | Any | O(n) |
| Move zeroes | Same-direction (write) | Any | O(n) |
| Middle of list | Fast-slow | Linked list | O(n) |

## TypeScript Parallel

The two-pointer technique is equally powerful in TypeScript. The same patterns apply with static typing for safety.

### Opposite-Direction: Pair Sum

```typescript
function pairSumSorted(arr: number[], target: number): [number, number] | null {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) return [arr[left], arr[right]];
        else if (sum < target) left++;
        else right--;
    }
    return null;
}

console.log(pairSumSorted([1, 2, 3, 4, 5, 6, 7], 10)); // [3, 7]
```text

### Same-Direction: Remove Duplicates

```typescript
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let write = 1;
    for (let read = 1; read < nums.length; read++) {
        if (nums[read] !== nums[write - 1]) {
            nums[write] = nums[read];
            write++;
        }
    }
    return write;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k = removeDuplicates(nums);
console.log(nums.slice(0, k)); // [0, 1, 2, 3, 4]
```text

### Fast-Slow: Cycle Detection

```typescript
class ListNode {
    constructor(public val: number = 0, public next: ListNode | null = null) {}
}

function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}

// Create a linked list with a cycle
const a = new ListNode(3);
const b = new ListNode(2);
const c = new ListNode(0);
const d = new ListNode(-4);
a.next = b; b.next = c; c.next = d; d.next = b;

console.log(hasCycle(a)); // true
```text

### Three Sum

```typescript
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];
    const n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = n - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
```text

### TypeScript Type Safety Benefits

| Aspect | Python | TypeScript |
|--------|--------|------------|
| Parameter types | Duck typing | Explicit `: number[]` |
| Return type | Dynamic | `[number, number] \| null` |
| Null safety | Manual checks | Compile-time checks |
| Mutation | Always allowed | `const` / `readonly` |
| Sorting | In-place `.sort()` | `.sort()` needs comparator |

## Summary

- Two-pointer techniques reduce time complexity from O(n^2) to O(n) for many array and linked list problems.
- Opposite-direction pointers start at the ends and converge inward, ideal for sorted arrays and pair-sum problems.
- Same-direction pointers start together with one lagging, perfect for in-place array modifications.
- Fast-slow pointers detect cycles and find middle nodes in linked lists in one pass.
- The N-sum pattern fixes k-2 elements in nested loops and uses two pointers for the inner search.
- Three-pointer partitioning (Dutch flag) sorts arrays with three distinct values in O(n) time.
- Combining two pointers with hash maps or binary search extends their applicability to unsorted data.
- Two-pointer solutions typically use O(1) extra space, making them memory-efficient.
- Trapping rain water and container with most water are classic opposite-direction problems.
- The technique transfers seamlessly to TypeScript with additional type safety guarantees.

## Practical Takeaways

| Takeaway | Application | Example Problem |
|----------|-------------|-----------------|
| Start with opposite ends for sorted pair search | Any sorted array + target | Two Sum II |
| Use write-read for in-place filter | Removing or rearranging elements | Remove Duplicates |
| Fast-slow for one-pass linked list traversal | Cycle detection, middle finding | Linked List Cycle |
| Sort first then two-pointer for N-sum | Triplets and quadruplets | Three Sum |
| Three pointers for three-value partition | Sorting with limited distinct values | Sort Colors |
| Combine with hash map for unsorted pairs | Unsorted arrays | Two Sum |
| Combine with binary search for complex bounds | Array with unknown split point | Find Closest Elements |
| Running max on both sides for water trapping | Elevation or histogram problems | Trapping Rain Water |

## Interview Q&A

<details class="tp-qa-card">
  <summary><strong>Q1: When should I use two pointers over a hash map?</strong></summary>
  Use two pointers when the array is sorted or can be sorted, and when O(1) space is required. Use a hash map when the array is unsorted and O(n) space is acceptable. Two pointers are more memory-efficient but require ordering. Hash maps work on any input but use extra memory. If the problem asks for indices (not values), a hash map is preferred on unsorted data since sorting changes indices.
</details>

<details class="tp-qa-card">
  <summary><strong>Q2: How do I avoid duplicates in three-sum?</strong></summary>
  Sort the array first. In the outer loop, skip `nums[i]` if it equals `nums[i-1]`. In the inner two-pointer loop, after finding a match, skip `nums[left]` if it equals `nums[left-1]` and skip `nums[right]` if it equals `nums[right+1]`. This ensures each unique triplet appears exactly once. The sorting step makes duplicate detection straightforward through adjacency.
</details>

<details class="tp-qa-card">
  <summary><strong>Q3: Why does Floyd's cycle detection algorithm work?</strong></summary>
  Imagine two runners on a circular track. The fast runner moves at 2x speed. If there is no cycle, the fast runner reaches the finish line (null). If there is a cycle, the fast runner eventually laps the slow runner. Formally, after k steps past cycle entry, the distance between them modulo the cycle length decreases by 1 each step, guaranteeing they meet within cycle steps. The math: if cycle length is L, after m steps, positions differ by m mod L. When m is a multiple of L, they coincide.
</details>

<details class="tp-qa-card">
  <summary><strong>Q4: How do I find the cycle start in a linked list?</strong></summary>
  After the first meeting point in Floyd's algorithm, reset one pointer to the head. Move both at the same speed (one step each). They will meet at the cycle start. Proof: Let distance from head to cycle start be a, cycle start to meeting point be b, cycle length be c. Slow traveled a+b. Fast traveled a+b+kc for some integer k = 2(a+b). So a+b = kc, meaning a = kc - b. Starting from head (distance 0) and from meeting point, they meet at distance a from head � the cycle start.
</details>

<details class="tp-qa-card">
  <summary><strong>Q5: What is the space complexity advantage of two pointers?</strong></summary>
  Two pointers use O(1) extra space � just a few integer variables tracking array indices or node references. This is significantly better than hash-map-based approaches that may use O(n) space. For large datasets (millions of elements), the constant memory footprint makes two-pointer solutions more scalable and cache-friendly. Some interviewers explicitly ask for O(1) space, making two pointers the only viable approach.
</details>

<details class="tp-qa-card">
  <summary><strong>Q6: How do I handle the container with most water problem?</strong></summary>
  Use opposite-direction pointers. Start left = 0, right = n-1. At each step, compute area = min(height[left], height[right]) * (right - left). Track the maximum. Move the pointer pointing to the shorter line inward. Reason: the width always decreases, so the only way to increase area is to find a taller line. Moving the taller pointer inward reduces both width and height (or keeps height same), so it can never improve the area. Moving the shorter pointer might find a taller line, potentially increasing area despite narrower width.
</details>

<details class="tp-qa-card">
  <summary><strong>Q7: Can I use two pointers on an unsorted array?</strong></summary>
  Yes, but only for certain patterns. Same-direction (write-read) works on any array since it only reads forward. Fast-slow works on linked lists regardless of ordering. Opposite-direction typically requires sorted data because the comparison logic depends on knowing whether the sum is too large or too small. For unsorted arrays, sort first (O(n log n)) then apply two-pointer, or use a hash map instead. Trapping rain water uses opposite-direction on unsorted data, but compares heights, not values against a target.
</details>

<details class="tp-qa-card">
  <summary><strong>Q8: How is the three-pointer (Dutch flag) technique different?</strong></summary>
  Standard two pointers create two regions (processed left, processed right). Three pointers create three regions: low (0s), mid (1s), high (2s). The mid pointer scans unknown territory. When it sees a 0, it swaps with the low region boundary and advances both low and mid. When it sees a 2, it swaps with the high region boundary and decrements high. When it sees a 1, it just advances. This classifies each element in O(n) with a single pass and O(1) space.
</details>

<details class="tp-qa-card">
  <summary><strong>Q9: What is the sliding window relationship to two pointers?</strong></summary>
  Sliding window uses two same-direction pointers (left and right) to define a subarray window. As the right pointer expands the window and the left pointer contracts it, both advance monotonically. The key difference: in two-pointer problems, each pointer moves in response to a condition comparing values at both positions. In sliding window, pointers respond to a constraint on the window's contents (e.g., sum, character set). Sliding window is a specialization of the same-direction pattern for contiguous subarray problems.
</details>

<details class="tp-qa-card">
  <summary><strong>Q10: How do I choose the right two-pointer variant?</strong></summary>
  Answer these questions: (1) Is the data sorted? If yes, consider opposite-direction. (2) Is it an in-place modification? Use same-direction with a write pointer. (3) Is it a linked list? Use fast-slow. (4) Is it a subarray with a constraint? Use sliding window (same-direction). (5) Do you need all pairs / triplets? Sort-first then nested opposite-direction. (6) Do you need O(1) space? Two pointers is often the only option. The decision tree maps cleanly to the problem's constraints and data structure.
</details>

<details class="tp-qa-card">
  <summary><strong>Q11: What edge cases commonly break two-pointer solutions?</strong></summary>
  (1) Empty arrays or single-element arrays � check early. (2) Arrays with all identical elements � duplicate skipping logic fails if not careful. (3) Target sum requiring the same element twice � ensure left != right. (4) Integer overflow for large sums or areas � use 64-bit intermediates. (5) Off-by-one in pointer movement conditions � test with exactly one matching pair. (6) Three-sum where all triplets are valid � skipping duplicates is critical for performance. (7) Linked lists with odd/even length parity � the fast pointer may be null at different points.
</details>

<details class="tp-qa-card">
  <summary><strong>Q12: How do I solve trapping rain water optimally?</strong></summary>
  Use the dual-running-maximum approach with opposite-direction pointers. Maintain leftMax and rightMax as you move inward. At each step, process the smaller of height[left] and height[right]. If the current height is less than its side's max, it traps that difference in water. Otherwise, update the max. This works because the water trapped at any position is determined by the lower of the two maximums on either side. The two-pointer approach achieves O(n) time and O(1) space, which is optimal since you must at least scan the entire array.
</details>

## Chapter Quiz

<details class="tp-qa-card">
  <summary><strong>Q1:</strong> What is the time complexity of two-sum on a sorted array using two pointers?</summary>
  a) O(log n)   b) O(n)   c) O(n log n)   d) O(n^2)
  <br><br>
  <strong>Answer: b) O(n)</strong>
  <br>
  Each pointer moves at most n steps total, and they never move backward. The loop runs at most n iterations.
</details>

<details class="tp-qa-card">
  <summary><strong>Q2:</strong> In Floyd's cycle detection, when does the slow pointer meet the fast pointer for the first time?</summary>
  a) At the cycle start   b) Somewhere inside the cycle   c) At the head   d) At the tail
  <br><br>
  <strong>Answer: b) Somewhere inside the cycle</strong>
  <br>
  The pointers meet inside the cycle, not necessarily at the cycle start. A second phase (resetting one pointer to head) finds the exact cycle entry point.
</details>

<details class="tp-qa-card">
  <summary><strong>Q5:</strong> Which two-pointer variant is best for removing duplicates from a sorted array?</summary>
  a) Opposite-direction   b) Same-direction (write-read)   c) Fast-slow   d) Three-pointer
  <br><br>
  <strong>Answer: b) Same-direction (write-read)</strong>
  <br>
  A write pointer lags behind a read pointer. When the read pointer finds a new unique value, it writes it at the write position and advances both.
</details>

<details class="tp-qa-card">
  <summary><strong>Q6:</strong> What is the time complexity of three-sum using the two-pointer approach?</summary>
  a) O(n)   b) O(n log n)   c) O(n^2)   d) O(n^3)
  <br><br>
  <strong>Answer: c) O(n^2)</strong>
  <br>
  Sorting takes O(n log n). The outer loop runs O(n) times, and the inner two-pointer runs O(n) per iteration, giving O(n^2) total.
</details>

<details class="tp-qa-card">
  <summary><strong>Q7:</strong> In the container with most water problem, why do we move the pointer at the shorter line?</summary>
  a) To keep the code simple   b) The taller line might form a bigger container elsewhere   c) To reduce width   d) Because the shorter line limits the height
  <br><br>
  <strong>Answer: d) Because the shorter line limits the height</strong>
  <br>
  The container height is determined by the shorter line. Moving it inward might find a taller line, potentially increasing area despite narrower width. Moving the taller line inward can never increase area.
</details>

## Exercises


## Common Mistakes

1. Not sorting the array first when required
2. Moving only one pointer when both should move
3. Not handling the case where pointers cross
4. Forgetting to check for duplicates
5. Not considering the two-pointer vs sliding window distinction### Exercise 1 (Easy): Two Sum Less Than K

Given an array `nums` of integers and an integer `k`, find the maximum sum of any two elements that is less than `k`. Return -1 if no such pair exists.

```python
def two_sum_less_than_k(nums, k):
    nums.sort()
    left, right = 0, len(nums) - 1
    max_sum = -1
    while left < right:
        total = nums[left] + nums[right]
        if total < k:
            max_sum = max(max_sum, total)
            left += 1
        else:
            right -= 1
    return max_sum

print(two_sum_less_than_k([34, 23, 1, 24, 75, 33, 54, 8], 60))  # 58
```text

### Exercise 2 (Medium): Squares of a Sorted Array

Given an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. Solve in O(n) time using two pointers.

```python
def sorted_squares(nums):
    n = len(nums)
    result = [0] * n
    left, right = 0, n - 1
    for i in range(n - 1, -1, -1):
        if abs(nums[left]) > abs(nums[right]):
            result[i] = nums[left] ** 2
            left += 1
        else:
            result[i] = nums[right] ** 2
            right -= 1
    return result

print(sorted_squares([-7, -3, 2, 3, 11]))  # [4, 9, 9, 49, 121]
```text

### Exercise 3 (Medium): Partition Labels

You are given a string `s`. Partition the string into as many parts as possible so that each letter appears in at most one part. Return a list of lengths of each part.

```python
def partition_labels(s):
    last = {c: i for i, c in enumerate(s)}
    result = []
    start = end = 0
    for i, c in enumerate(s):
        end = max(end, last[c])
        if i == end:
            result.append(end - start + 1)
            start = i + 1
    return result

print(partition_labels("ababcbacadefegdehijhklij"))  # [9, 7, 8]
```text

### Exercise 4 (Hard): Longest Substring with At Most K Distinct Characters

Given a string `s` and an integer `k`, find the length of the longest substring that contains at most `k` distinct characters. Use the sliding window (same-direction two-pointer) approach.

```python
def longest_substring_k_distinct(s, k):
    if k == 0 or not s:
        return 0
    char_count = {}
    left = max_len = 0
    for right in range(len(s)):
        char_count[s[right]] = char_count.get(s[right], 0) + 1
        while len(char_count) > k:
            char_count[s[left]] -= 1
            if char_count[s[left]] == 0:
                del char_count[s[left]]
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len

print(longest_substring_k_distinct("eceba", 2))  # 3 (substring "ece")
```text

### Exercise 5 (Hard): Minimum Window Substring

Given two strings `s` and `t`, return the minimum window substring of `s` that contains all characters of `t`. Use two pointers with a sliding window and frequency counting.

```python
def min_window(s, t):
    if not s or not t:
        return ""
    target = {}
    for c in t:
        target[c] = target.get(c, 0) + 1
    required = len(target)
    left = formed = 0
    window_counts = {}
    ans = float("inf"), None, None
    for right in range(len(s)):
        c = s[right]
        window_counts[c] = window_counts.get(c, 0) + 1
        if c in target and window_counts[c] == target[c]:
            formed += 1
        while left <= right and formed == required:
            c = s[left]
            if right - left + 1 < ans[0]:
                ans = (right - left + 1, left, right)
            window_counts[c] -= 1
            if c in target and window_counts[c] < target[c]:
                formed -= 1
            left += 1
    return "" if ans[0] == float("inf") else s[ans[1]:ans[2] + 1]

s = "ADOBECODEBANC"
t = "ABC"
print(min_window(s, t))  # "BANC"
```text

---

[? Previous: Sliding Window](04-sliding-window.md) | [Next: Hash Maps & Sets ?](06-hash-maps-and

## Revision Notes

- Two pointers: opposite ends or same direction
- Opposite ends for sorted array problems
- Same direction for partitioning problems
- Fast/slow for cycle detection and middle finding
- Often combined with sorting for O(n log n) solutions

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
- [ ] Have questions ready about how the company uses data structures algorithms-sets.md)


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

**Q: How long does it take to master two pointers?
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

Understanding the evolution of two pointers helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

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

For AI engineering, understanding two pointers at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of two pointers like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply two pointers concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of two pointers?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply two pointers in real systems?
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
