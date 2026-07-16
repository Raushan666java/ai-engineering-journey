#!/usr/bin/env python3
"""Generate all remaining DSA and Git chapter files."""

import os

BASE = r"C:\xampp\htdocs\ai-engineering-journey\docs\courses\ai-engineering-placement"
DSA = os.path.join(BASE, "03-data-structures-algorithms")
GIT = os.path.join(BASE, "04-git-linux-cli")

def img(subject, chapter):
    slug = f"{subject}/{chapter}"
    return f"""<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/{slug}/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/{slug}/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/{slug}/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/{slug}/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/{slug}/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/{slug}/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->"""

qa = """<details class="tp-qa-card" data-qid="{qid}">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    {q}
  </summary>
  <div class="tp-qa-answer">
    {a}
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>"""

quiz = """**Q{q_num}**: {q}

a) {a}
b) {b}
c) {c}
d) {d}

<details class="tp-qa-card" data-qid="{qid}"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: {ans}</strong></p><p>{explain}</p></div></details>"""

# ===========================
# DSA FILES
# ===========================
print("Generating DSA files...")

# 05-two-pointers.md
content = """# Two Pointers

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand the two-pointer technique and its variants (opposite ends, same direction, fast-slow) |
| LO2 | Solve pair-sum problems on sorted arrays using opposite-end pointers |
| LO3 | Implement in-place array modifications using same-direction pointers |
| LO4 | Apply fast-slow pointers for cycle detection and middle-finding |
| LO5 | Solve sliding window problems using two pointers (expand-contract pattern) |
| LO6 | Combine two-pointer with other techniques (binary search, hash maps) for optimization |

""" + img("03-data-structures-algorithms", "05-two-pointers") + """

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 5.1 | Opposite-End Pointers | Two sum, palindrome check, container with water |
| 5.2 | Same-Direction Pointers | Remove duplicates, partition, merge sorted arrays |
| 5.3 | Fast-Slow Pointers | Cycle detection, middle of linked list, find duplicate |
| 5.4 | Sliding Window Variant | Substring search, window constraints |
| 5.5 | Multiple Pointers | 3Sum, 4Sum, three-pointer techniques |
| 5.6 | Advanced Patterns | Trapping rain water, next permutation, partition labels |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Two Pointers Intro] --> B[Opposite Ends]
    A --> C[Same Direction]
    A --> D[Fast-Slow]
    B --> E[Pair Sum Problems]
    C --> F[In-Place Ops]
    D --> G[Cycle Detection]
    E --> H[Advanced]
    F --> H
    G --> H
```

## 5.1 Opposite-End Pointers

Two pointers start at opposite ends and move toward each other. Used when the array is sorted and the condition involves pairs.

**Two Sum II — Sorted array**:

```python
def two_sum_sorted(numbers, target):
    left, right = 0, len(numbers) - 1
    while left < right:
        curr_sum = numbers[left] + numbers[right]
        if curr_sum == target:
            return [left + 1, right + 1]  # 1-indexed
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
    return [-1, -1]

print(two_sum_sorted([2, 7, 11, 15], 9))  # [1, 2]
```

**Valid palindrome**:

```python
def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True

print(is_palindrome("A man, a plan, a canal: Panama"))  # True
```

**Container with most water**:

```python
def max_area(height):
    left, right = 0, len(height) - 1
    max_water = 0
    while left < right:
        water = (right - left) * min(height[left], height[right])
        max_water = max(max_water, water)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_water

print(max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]))  # 49
```

**Trapping rain water**:

```python
def trap(height):
    left, right = 0, len(height) - 1
    left_max, right_max = 0, 0
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

print(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))  # 6
```

---

## 5.2 Same-Direction Pointers

Both pointers start at the beginning; one is fast (reader), one is slow (writer).

**Remove duplicates from sorted array**:

```python
def remove_duplicates(nums):
    if not nums:
        return 0
    write = 1
    for read in range(1, len(nums)):
        if nums[read] != nums[write - 1]:
            nums[write] = nums[read]
            write += 1
    return write

nums = [1, 1, 2, 2, 3, 4, 4, 5]
k = remove_duplicates(nums)
print(nums[:k])  # [1, 2, 3, 4, 5]
```

**Move zeros to end**:

```python
def move_zeros(nums):
    write = 0
    for read in range(len(nums)):
        if nums[read] != 0:
            nums[write], nums[read] = nums[read], nums[write]
            write += 1
    return nums

print(move_zeros([0, 1, 0, 3, 12]))  # [1, 3, 12, 0, 0]
```

**Merge two sorted arrays**:

```python
def merge(nums1, m, nums2, n):
    """Merge nums2 into nums1 (which has extra space at end)"""
    p1, p2, p = m - 1, n - 1, m + n - 1
    while p2 >= 0:
        if p1 >= 0 and nums1[p1] > nums2[p2]:
            nums1[p] = nums1[p1]
            p1 -= 1
        else:
            nums1[p] = nums2[p2]
            p2 -= 1
        p -= 1
    return nums1

print(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))  # [1, 2, 2, 3, 5, 6]
```

**Partition labels**:

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
```

---

## 5.3 Fast-Slow Pointers

One pointer moves twice as fast as the other. Used for cycle detection and middle-finding.

**Linked list cycle detection**:

```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

# Build a list with cycle
head = ListNode(3)
n2 = ListNode(2)
n3 = ListNode(0)
n4 = ListNode(-4)
head.next = n2
n2.next = n3
n3.next = n4
n4.next = n2  # cycle
print(has_cycle(head))  # True
```

**Find middle of linked list**:

```python
def middle_node(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow.val

# Build list: 1->2->3->4->5
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)
print(middle_node(head))  # 3
```

**Find duplicate number** (Floyd's algorithm):

```python
def find_duplicate(nums):
    slow = fast = nums[0]
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break
    slow = nums[0]
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    return slow

print(find_duplicate([1, 3, 4, 2, 2]))  # 2
```

---

## 5.4 Sliding Window Variant

Two pointers that maintain a window with specific constraints.

**Longest substring without repeating chars**:

```python
def length_of_longest_substring(s):
    seen = {}
    left = max_len = 0
    for right, char in enumerate(s):
        if char in seen and seen[char] >= left:
            left = seen[char] + 1
        seen[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len

print(length_of_longest_substring("abcabcbb"))  # 3
print(length_of_longest_substring("bbbbb"))     # 1
```

**Minimum window substring**:

```python
from collections import Counter

def min_window(s, t):
    need = Counter(t)
    missing = len(t)
    left = 0
    min_len = float('inf')
    min_start = 0
    for right, char in enumerate(s):
        if need[char] > 0:
            missing -= 1
        need[char] -= 1
        while missing == 0:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                min_start = left
            need[s[left]] += 1
            if need[s[left]] > 0:
                missing += 1
            left += 1
    return "" if min_len == float('inf') else s[min_start:min_start + min_len]

print(min_window("ADOBECODEBANC", "ABC"))  # "BANC"
```

---

## 5.5 Multiple Pointers

Three or more pointers for complex problems.

**3Sum**: Find all unique triplets that sum to zero.

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
            if total < 0:
                left += 1
            elif total > 0:
                right -= 1
            else:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1
    return result

print(three_sum([-1, 0, 1, 2, -1, -4]))  # [[-1, -1, 2], [-1, 0, 1]]
```

**4Sum**: Find all unique quadruplets.

```python
def four_sum(nums, target):
    nums.sort()
    n = len(nums)
    result = []
    for i in range(n - 3):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        for j in range(i + 1, n - 2):
            if j > i + 1 and nums[j] == nums[j - 1]:
                continue
            left, right = j + 1, n - 1
            while left < right:
                total = nums[i] + nums[j] + nums[left] + nums[right]
                if total < target:
                    left += 1
                elif total > target:
                    right -= 1
                else:
                    result.append([nums[i], nums[j], nums[left], nums[right]])
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1
    return result

print(four_sum([1, 0, -1, 0, -2, 2], 0))
# [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
```

---

## 5.6 Advanced Patterns

**Next permutation**: Rearrange numbers into the lexicographically next greater permutation.

```python
def next_permutation(nums):
    n = len(nums)
    # Find first decreasing element from right
    i = n - 2
    while i >= 0 and nums[i] >= nums[i + 1]:
        i -= 1
    if i >= 0:
        # Find element just larger than nums[i]
        j = n - 1
        while nums[j] <= nums[i]:
            j -= 1
        nums[i], nums[j] = nums[j], nums[i]
    # Reverse suffix
    left, right = i + 1, n - 1
    while left < right:
        nums[left], nums[right] = nums[right], nums[left]
        left += 1
        right -= 1
    return nums

print(next_permutation([1, 2, 3]))  # [1, 3, 2]
print(next_permutation([3, 2, 1]))  # [1, 2, 3]
```

**Backspace string compare**:

```python
def backspace_compare(s, t):
    def build(s):
        stack = []
        for c in s:
            if c != '#':
                stack.append(c)
            elif stack:
                stack.pop()
        return stack
    return build(s) == build(t)

print(backspace_compare("ab#c", "ad#c"))  # True (both become "ac")
```

```mermaid
flowchart TD
    subgraph "Two-Pointer Decision Tree"
        A[Problem] --> B{Array sorted?}
        B -->|Yes| C[Opposite Ends]
        B -->|No| D{In-place modify?}
        D -->|Yes| E[Same Direction]
        D -->|No| F{Linked List?}
        F -->|Yes| G[Fast-Slow]
        F -->|No| H[Sliding Window]
        C --> I[Pair Sum / Container]
        E --> J[Remove Dups / Partition]
        G --> K[Cycle / Middle]
    end
```

---

## TypeScript Parallel

```typescript
// Two Sum II — opposite ends
function twoSum(numbers: number[], target: number): number[] {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];
        if (sum < target) left++;
        else right--;
    }
    return [-1, -1];
}

// Remove duplicates — same direction
function removeDuplicates(nums: number[]): number {
    let write = 1;
    for (let read = 1; read < nums.length; read++) {
        if (nums[read] !== nums[write - 1]) {
            nums[write] = nums[read];
            write++;
        }
    }
    return write;
}

// Linked list cycle — fast-slow
function hasCycle(head: ListNode | null): boolean {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}
```

---

## Summary

- Opposite-end pointers solve sorted array pair problems in O(n) time, O(1) space by converging from both ends
- Same-direction pointers efficiently implement in-place operations like removing duplicates or moving zeros
- Fast-slow pointers detect cycles in linked lists and find middle elements without extra space
- Floyd's cycle detection (tortoise and hare) uses two pointers moving at different speeds to detect cycles
- The sliding window variant of two pointers maintains a constraint-based window that expands and contracts
- Multi-pointer techniques extend to 3Sum (O(n²)) and 4Sum (O(n³)) with sorting and nested loops
- Two-pointer techniques often complement sorting — sorting first then using two pointers is a common pattern
- The container with most water problem demonstrates how moving the shorter pointer inward is always optimal
- Backspace string comparison uses two pointers from the end to handle backspace characters
- Next permutation elegantly uses a single pass with pointer manipulations to find the next lexicographic arrangement

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Pair sum in sorted array | Opposite-end pointers | Hash map (wastes space) |
| Remove duplicates in-place | Same-direction write pointer | Creating new array |
| Cycle detection | Fast-slow pointers | Hash set (wastes space) |
| Container with most water | Move shorter pointer inward | Checking all pairs |
| 3Sum problem | Sort + two-pointer nested loop | Triple nested loop |
| Merge sorted arrays | Pointers from the end | Extra array |

## Interview Q&A

""" + qa.format(qid="dsa05-q1",
    q="Q1: When would you use opposite-end pointers vs same-direction pointers?",
    a="<p><strong>Opposite-end pointers</strong>: Used when the array is sorted and we need to find pairs with a property (sum, difference, or condition). Both pointers start at opposite ends and move toward each other.</p><p><strong>Same-direction pointers</strong>: Used for in-place modifications where one pointer reads ahead and the other writes. Both start at the same end, one moves faster.</p><p><strong>Fast-slow pointers</strong>: Used for cycle detection in linked lists or finding the middle element. One moves twice as fast as the other.</p><p>Choose based on: array sorted? → opposite ends; in-place modification? → same direction; cycle detection? → fast-slow.</p>") + "\n\n" + qa.format(qid="dsa05-q2",
    q="Q2: Explain the Floyd's cycle detection algorithm (tortoise and hare).",
    a="<p><strong>Floyd's algorithm</strong> uses two pointers: slow (tortoise) moves one step, fast (hare) moves two steps. If there is a cycle, they will eventually meet.</p><p><strong>Phase 1 — Detect cycle</strong>: Move slow by 1 and fast by 2 until they meet or fast reaches None.</p><p><strong>Phase 2 — Find cycle start</strong>: Reset slow to head. Move both slow and fast by 1. They meet at the cycle start.</p><p><strong>Proof</strong>: Let distance from head to cycle start = a, cycle length = L. When slow enters cycle, fast is already ahead by k steps. They meet after L-k steps. Then moving slow from head and fast from meeting point at same speed meets at cycle start.</p><pre><code>def detect_cycle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            slow = head\n            while slow != fast:\n                slow = slow.next\n                fast = fast.next\n            return slow\n    return None</code></pre>") + "\n\n" + qa.format(qid="dsa05-q3",
    q="Q3: How do you solve the 3Sum problem using two pointers?",
    a="<p><strong>Problem</strong>: Find all unique triplets in an array that sum to zero.</p><p><strong>Approach</strong>:</p><ol><li>Sort the array (O(n log n))</li><li>Fix one element at index i</li><li>Use two pointers (left=i+1, right=n-1) to find pairs summing to -nums[i]</li><li>Skip duplicates to ensure unique triplets</li></ol><pre><code>def three_sum(nums):\n    nums.sort()\n    result = []\n    for i in range(len(nums) - 2):\n        if i > 0 and nums[i] == nums[i - 1]: continue\n        left, right = i + 1, len(nums) - 1\n        while left < right:\n            s = nums[i] + nums[left] + nums[right]\n            if s < 0: left += 1\n            elif s > 0: right -= 1\n            else:\n                result.append([nums[i], nums[left], nums[right]])\n                while left < right and nums[left] == nums[left + 1]: left += 1\n                while left < right and nums[right] == nums[right - 1]: right -= 1\n                left += 1; right -= 1\n    return result</code></pre><p><strong>Complexity</strong>: O(n²) time, O(1) extra space (excluding output).</p>") + "\n\n" + qa.format(qid="dsa05-q4",
    q="Q4: Explain the backspace string comparison using two pointers.",
    a="<p><strong>Problem</strong>: Given two strings with '#' representing backspace, determine if they are equal after applying backspaces.</p><p><strong>Two-pointer approach from the end</strong>:</p><pre><code>def backspace_compare(s, t):\n    i, j = len(s) - 1, len(t) - 1\n    while i >= 0 or j >= 0:\n        skip_s = 0\n        while i >= 0:\n            if s[i] == '#': skip_s += 1; i -= 1\n            elif skip_s > 0: skip_s -= 1; i -= 1\n            else: break\n        skip_t = 0\n        while j >= 0:\n            if t[j] == '#': skip_t += 1; j -= 1\n            elif skip_t > 0: skip_t -= 1; j -= 1\n            else: break\n        if i >= 0 and j >= 0 and s[i] != t[j]: return False\n        if (i >= 0) != (j >= 0): return False\n        i -= 1; j -= 1\n    return True</code></pre><p><strong>Complexity</strong>: O(n+m) time, O(1) space. This is more space-efficient than the stack approach which uses O(n+m) space.</p>") + "\n\n" + qa.format(qid="dsa05-q5",
    q="Q5: How does the container with most water two-pointer solution work?",
    a="<p><strong>Problem</strong>: Given array of heights, find two lines that form a container holding maximum water.</p><p><strong>Intuition</strong>: Start with widest container (left=0, right=n-1). Area = width × min(height[left], height[right]). Move the pointer with the shorter height inward because:</p><ul><li>Moving the taller pointer inward reduces width, and height is capped by the shorter line, so area can only decrease</li><li>Moving the shorter pointer inward might find a taller line, potentially increasing area despite reduced width</li></ul><p><strong>Proof sketch</strong>: For any pair (i,j) with height[i] < height[j], the area is bounded by height[i]. Any pair (i,k) for k<j has smaller width and height <= height[i], so no need to check. Thus we safely discard the shorter line.</p><p><strong>Complexity</strong>: O(n) time, O(1) space.</p>") + "\n\n" + qa.format(qid="dsa05-q6",
    q="Q6: Implement an in-place algorithm to remove duplicates from a sorted array.",
    a="<pre><code>def remove_duplicates(nums):\n    if not nums:\n        return 0\n    write = 1  # position to write next unique element\n    for read in range(1, len(nums)):\n        if nums[read] != nums[write - 1]:\n            nums[write] = nums[read]\n            write += 1\n    return write</code></pre><p><strong>Key insight</strong>: The write pointer tracks where the next unique element goes. The read pointer scans ahead. When read finds a new unique element (different from the last written element), we copy it to write position and advance write.</p><p><strong>Complexity</strong>: O(n) time, O(1) space.</p><p><strong>Variation</strong>: For \"remove duplicates allowing at most 2\", compare with write-2 instead of write-1.</p>") + "\n\n" + qa.format(qid="dsa05-q7",
    q="Q7: How do you partition labels using two pointers?",
    a="<p><strong>Problem</strong>: Partition a string into as many parts as possible so each character appears in at most one part.</p><pre><code>def partition_labels(s):\n    # Record last occurrence of each character\n    last = {c: i for i, c in enumerate(s)}\n    result = []\n    start = end = 0\n    for i, c in enumerate(s):\n        end = max(end, last[c])\n        if i == end:  # current partition ends\n            result.append(end - start + 1)\n            start = i + 1\n    return result</code></pre><p><strong>Key insight</strong>: As we scan, we track the farthest last occurrence of any character seen so far (end). When current index reaches end, we have a complete partition.</p><p><strong>Complexity</strong>: O(n) time, O(1) space (26 letters).</p>") + "\n\n" + qa.format(qid="dsa05-q8",
    q="Q8: What is the next permutation algorithm?",
    a="<p><strong>Problem</strong>: Given an array of numbers, rearrange into the lexicographically next greater permutation.</p><p><strong>Algorithm</strong>:</p><ol><li>Find the first decreasing element from the right (pivot)</li><li>If no pivot, reverse the entire array (it's the last permutation)</li><li>Find the element just larger than pivot from the right</li><li>Swap pivot with that element</li><li>Reverse the suffix after pivot position</li></ol><pre><code>def next_permutation(nums):\n    n = len(nums)\n    i = n - 2\n    while i >= 0 and nums[i] >= nums[i + 1]:\n        i -= 1\n    if i >= 0:\n        j = n - 1\n        while nums[j] <= nums[i]:\n            j -= 1\n        nums[i], nums[j] = nums[j], nums[i]\n    left, right = i + 1, n - 1\n    while left < right:\n        nums[left], nums[right] = nums[right], nums[left]\n        left += 1\n        right -= 1\n    return nums</code></pre><p><strong>Complexity</strong>: O(n) time, O(1) space.</p>") + "\n\n" + qa.format(qid="dsa05-q9",
    q="Q9: Explain how to find the duplicate number in an array without modifying it and without extra space.",
    a="<p><strong>Problem</strong>: Given n+1 numbers in range [1,n], find the duplicate. Cannot modify array, O(1) space.</p><p><strong>Solution</strong>: Use Floyd's cycle detection treating the array as a linked list where index i points to nums[i].</p><pre><code>def find_duplicate(nums):\n    slow = fast = nums[0]\n    while True:\n        slow = nums[slow]\n        fast = nums[nums[fast]]\n        if slow == fast:\n            break\n    slow = nums[0]\n    while slow != fast:\n        slow = nums[slow]\n        fast = nums[fast]\n    return slow</code></pre><p><strong>Key insight</strong>: Since values are in [1,n] and there are n+1 elements, by pigeonhole principle at least one value repeats. This creates a cycle in the functional graph i -> nums[i].</p><p><strong>Complexity</strong>: O(n) time, O(1) space.</p>") + "\n\n" + qa.format(qid="dsa05-q10",
    q="Q10: How do you validate a palindrome using two pointers while ignoring non-alphanumeric characters?",
    a="<pre><code>def is_palindrome(s):\n    left, right = 0, len(s) - 1\n    while left < right:\n        # Skip non-alphanumeric from left\n        while left < right and not s[left].isalnum():\n            left += 1\n        # Skip non-alphanumeric from right\n        while left < right and not s[right].isalnum():\n            right -= 1\n        if s[left].lower() != s[right].lower():\n            return False\n        left += 1\n        right -= 1\n    return True</code></pre><p><strong>Key insight</strong>: Rather than preprocessing the string (which creates a copy), we skip non-alphanumeric characters on the fly. This uses O(1) extra space.</p><p><strong>Character validation</strong>: Use <code>.isalnum()</code> to check for alphanumeric characters. Convert to lowercase with <code>.lower()</code> for case-insensitive comparison.</p>") + "\n\n" + qa.format(qid="dsa05-q11",
    q="Q11: Compare two-pointer approaches for sorted vs unsorted arrays.",
    a="<table><tr><th>Aspect</th><th>Sorted Array</th><th>Unsorted Array</th></tr><tr><td>Opposite ends</td><td>Works (two sum, container)</td><td>Doesn't work (no ordering guarantee)</td></tr><tr><td>Same direction</td><td>Works (remove dups)</td><td>Works (move zeros)</td></tr><tr><td>Fast-slow</td><td>Works</td><td>Works (cycle detection in functional graph)</td></tr><tr><td>Preprocessing</td><td>None needed</td><td>May need sorting first</td></tr><tr><td>Example</td><td>Two Sum II</td><td>Two Sum I (hash map)</td></tr></table><p><strong>Key insight</strong>: For unsorted arrays, opposite-end two pointers don't work because the ordering doesn't give us information about where to move. Instead, use hash maps or sort first.</p>") + "\n\n" + qa.format(qid="dsa05-q12",
    q="Q12: Implement the merge of two sorted arrays in-place into the first array.",
    a="<pre><code>def merge(nums1, m, nums2, n):\n    # nums1 has extra space at the end (size m+n)\n    p1, p2, p = m - 1, n - 1, m + n - 1\n    while p2 >= 0:\n        if p1 >= 0 and nums1[p1] > nums2[p2]:\n            nums1[p] = nums1[p1]\n            p1 -= 1\n        else:\n            nums1[p] = nums2[p2]\n            p2 -= 1\n        p -= 1\n    return nums1</code></pre><p><strong>Key insight</strong>: Fill from the end to avoid overwriting elements in nums1 that haven't been processed yet. This avoids needing a temporary array.</p><p><strong>Complexity</strong>: O(m+n) time, O(1) space.</p>") + """

## Chapter Quiz

**Q1**: What is the time complexity of the two-pointer solution for container with most water?

a) O(n)
b) O(n log n)
c) O(n²)
d) O(1)

""" + quiz_card("dsa05-quiz1", "<p><strong>Answer: a) O(n)</strong></p><p>Each element is visited at most once by either left or right pointer, giving O(n) time with O(1) space.</p>") + """

**Q2**: In Floyd's cycle detection, how many steps does the fast pointer move per iteration?

a) 1
b) 2
c) 3
d) Depends on the cycle length

""" + quiz_card("dsa05-quiz2", "<p><strong>Answer: b) 2</strong></p><p>Fast pointer (hare) moves 2 steps while slow pointer (tortoise) moves 1 step per iteration.</p>") + """

**Q3**: What is the time complexity of the 3Sum problem's optimal two-pointer solution?

a) O(n)
b) O(n log n)
c) O(n²)
d) O(n³)

""" + quiz_card("dsa05-quiz3", "<p><strong>Answer: c) O(n²)</strong></p><p>Sorting takes O(n log n), then the nested loop (one fixed + two pointers) takes O(n²), giving O(n²) total.</p>") + """

**Q4**: In the merge sorted arrays problem, why do we fill from the end?

a) To use O(1) extra space
b) To avoid shifting elements
c) To handle the extra space in nums1
d) All of the above

""" + quiz_card("dsa05-quiz4", "<p><strong>Answer: d) All of the above</strong></p><p>Filling from the end uses O(1) space, avoids shifting, and cleanly handles the extra buffer in nums1.</p>") + """

**Q5**: Which two-pointer variant is used to find the middle of a linked list?

a) Opposite ends
b) Same direction
c) Fast-slow
d) Sliding window

""" + quiz_card("dsa05-quiz5", "<p><strong>Answer: c) Fast-slow</strong></p><p>When fast reaches the end, slow is at the middle. For even length, slow is at the first middle element (or second, depending on implementation).</p>") + """

## Exercises

**Easy** — Given a sorted array, remove duplicates in-place such that each element appears at most twice.

**Medium** — Implement the 4Sum problem — find all unique quadruplets that sum to a target value.

**Medium** — Given two strings S and T, return if they equal when both are typed into empty text editors with '#' for backspace.

**Hard** — Find the k-th smallest pair sum in a sorted array (two numbers from two different arrays). Use binary search + two pointers.

**Hard** — Given n non-negative integers representing an elevation map, compute how much water it can trap after raining. Solve with O(1) extra space.

---

> **Next**: [06 — Hash Maps and Sets →](06-hash-maps-and-sets.md)
"""

with open(os.path.join(DSA, "05-two-pointers.md"), "w", encoding="utf-8") as f:
    f.write(content)
print("  Done: 05-two-pointers.md")

# ===========================
# 06-hash-maps-and-sets.md
# ===========================
content = """# Hash Maps and Sets

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand hash table fundamentals, collision resolution, and load factor |
| LO2 | Implement hash map and hash set operations in Python using dict and set |
| LO3 | Solve frequency counting problems (anagrams, duplicates, majority elements) |
| LO4 | Apply hash maps for two-sum, subarray sums, and caching/memoization |
| LO5 | Use hash sets for deduplication, intersection, and union operations |
| LO6 | Analyze when hash maps are appropriate and understand their limitations |

""" + img("03-data-structures-algorithms", "06-hash-maps-and-sets") + """

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 6.1 | Hash Table Fundamentals | Hashing, collisions, chaining, open addressing |
| 6.2 | Python dict and set | Operations, time complexity, memory |
| 6.3 | Frequency Counting | Counter, anagram detection, duplicates |
| 6.4 | Hash Map for Caching | Two-sum, subarray sums, memoization |
| 6.5 | Hash Set Applications | Intersection, union, deduplication |
| 6.6 | Advanced Patterns | Group anagrams, longest consecutive sequence |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Hash Table Fundamentals] --> B[Python Dict/Set]
    B --> C[Frequency Counting]
    B --> D[Caching]
    B --> E[Set Operations]
    C --> F[Anagrams]
    D --> G[Subarray Sum]
    E --> H[Consecutive Sequence]
    F --> I[Practice]
    G --> I
    H --> I
```

## 6.1 Hash Table Fundamentals

A hash table stores key-value pairs using a hash function to compute an index into an array of buckets.

**Hash function**: Maps keys to integer indices. A good hash function distributes keys uniformly.

**Collision resolution**:
- **Chaining**: Each bucket stores a linked list of entries
- **Open addressing**: Find another bucket using probing (linear, quadratic, double hashing)

**Load factor**: `α = n / m` where n = entries, m = buckets. Higher load factor increases collisions. Python resizes when load factor exceeds ~2/3.

```python
# Simple hash table implementation
class SimpleHashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]

    def _hash(self, key):
        return hash(key) % self.size

    def put(self, key, value):
        idx = self._hash(key)
        for i, (k, v) in enumerate(self.table[idx]):
            if k == key:
                self.table[idx][i] = (key, value)
                return
        self.table[idx].append((key, value))

    def get(self, key):
        idx = self._hash(key)
        for k, v in self.table[idx]:
            if k == key:
                return v
        raise KeyError(key)

    def delete(self, key):
        idx = self._hash(key)
        for i, (k, v) in enumerate(self.table[idx]):
            if k == key:
                del self.table[idx][i]
                return
        raise KeyError(key)

ht = SimpleHashTable()
ht.put("apple", 5)
ht.put("banana", 3)
print(ht.get("apple"))  # 5
print(ht.get("banana"))  # 3
```

**Python's dict** uses a highly optimized hash table with:
- Randomized hash seed (per process) for security
- Compact array of entries (not linked lists)
- Probing for collision resolution

---

## 6.2 Python dict and set

**Dictionary operations**:

```python
# Creation
d1 = {"a": 1, "b": 2}
d2 = dict(a=1, b=2)
d3 = dict(zip(["a", "b"], [1, 2]))
d4 = {k: v for k, v in [("a", 1), ("b", 2)]}
d5 = {}  # empty

# Access
d = {"a": 1, "b": 2, "c": 3}
print(d["a"])        # 1
print(d.get("d", 0)) # 0 — default if missing
print(d.setdefault("e", 5))  # 5 — sets if missing

# Iteration
for key in d:
    print(key, d[key])
for key, value in d.items():
    print(key, value)
for value in d.values():
    print(value)
```

**Set operations**:

```python
# Creation
s1 = {1, 2, 3, 4, 5}
s2 = set([3, 4, 5, 6, 7])
s3 = {x for x in range(10) if x % 2 == 0}

# Operations
print(s1 | s2)   # Union: {1,2,3,4,5,6,7}
print(s1 & s2)   # Intersection: {3,4,5}
print(s1 - s2)   # Difference: {1,2}
print(s1 ^ s2)   # Symmetric diff: {1,2,6,7}

# Subset/superset
print({1, 2}.issubset(s1))  # True
print(s1.issuperset({1, 2}))  # True
```

**Time complexity**: O(1) average for get, set, delete, in. O(n) worst-case (hash collisions).

**Hashable keys**: Keys must be immutable (int, str, tuple, frozenset). Lists and dicts are not hashable.

```python
# Valid keys
d = {
    42: "int",
    3.14: "float",
    "hello": "str",
    (1, 2): "tuple",
    frozenset({1, 2}): "frozenset"
}

# Invalid keys
# d[[1, 2]] = "list"  # TypeError: unhashable type: 'list'
# d[{"a": 1}] = "dict"  # TypeError
```

---

## 6.3 Frequency Counting

**Character frequency**:

```python
def char_frequency(s):
    freq = {}
    for c in s:
        freq[c] = freq.get(c, 0) + 1
    return freq

print(char_frequency("hello"))
# {'h': 1, 'e': 1, 'l': 2, 'o': 1}

# Using Counter
from collections import Counter
print(Counter("hello"))  # Counter({'l': 2, 'h': 1, 'e': 1, 'o': 1})
```

**Valid anagram**:

```python
from collections import Counter

def is_anagram(s, t):
    return Counter(s) == Counter(t)

def is_anagram_array(s, t):
    if len(s) != len(t):
        return False
    count = [0] * 26
    for c in s:
        count[ord(c) - ord('a')] += 1
    for c in t:
        count[ord(c) - ord('a')] -= 1
    return all(x == 0 for x in count)

print(is_anagram("listen", "silent"))  # True
```

**Find duplicates**:

```python
def find_duplicates(arr):
    seen = set()
    duplicates = []
    for x in arr:
        if x in seen:
            duplicates.append(x)
        else:
            seen.add(x)
    return duplicates

print(find_duplicates([1, 2, 3, 2, 4, 3]))  # [2, 3]
```

**Majority element** (appears > n/2 times):

```python
def majority_element(nums):
    counts = Counter(nums)
    return max(counts, key=counts.get)  # O(n) time, O(n) space

# Boyer-Moore — O(n) time, O(1) space
def majority_element_optimized(nums):
    candidate = None
    count = 0
    for num in nums:
        if count == 0:
            candidate = num
        count += 1 if num == candidate else -1
    return candidate

print(majority_element([2, 2, 1, 1, 1, 2, 2]))  # 2
```

**Top K frequent elements**:

```python
from collections import Counter
import heapq

def top_k_frequent(nums, k):
    count = Counter(nums)
    return heapq.nlargest(k, count.keys(), key=count.get)

print(top_k_frequent([1, 1, 1, 2, 2, 3], 2))  # [1, 2]
```

---

## 6.4 Hash Map for Caching

**Two Sum**:

```python
def two_sum(nums, target):
    seen = {}  # value -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

print(two_sum([2, 7, 11, 15], 9))  # [0, 1]
```

**Subarray sum equals k**:

```python
from collections import defaultdict

def subarray_sum(nums, k):
    prefix_sum = 0
    count_map = defaultdict(int)
    count_map[0] = 1
    total = 0
    for num in nums:
        prefix_sum += num
        total += count_map[prefix_sum - k]
        count_map[prefix_sum] += 1
    return total

print(subarray_sum([1, 1, 1], 2))  # 2
print(subarray_sum([3, 4, 7, 2, -3, 1, 4, 2], 7))  # 4
```

**Longest consecutive sequence**:

```python
def longest_consecutive(nums):
    num_set = set(nums)
    longest = 0
    for num in num_set:
        if num - 1 not in num_set:  # Start of a sequence
            curr = num
            length = 1
            while curr + 1 in num_set:
                curr += 1
                length += 1
            longest = max(longest, length)
    return longest

print(longest_consecutive([100, 4, 200, 1, 3, 2]))  # 4
```

**Memoization — Fibonacci**:

```python
def fib(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]

print(fib(50))  # 12586269025 — O(n) instead of O(2ⁿ)

# Using lru_cache
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_cached(n):
    if n <= 1:
        return n
    return fib_cached(n - 1) + fib_cached(n - 2)
```

---

## 6.5 Hash Set Applications

**Intersection of two arrays**:

```python
def intersection(nums1, nums2):
    set1 = set(nums1)
    result = set()
    for num in nums2:
        if num in set1:
            result.add(num)
    return list(result)

print(intersection([1, 2, 2, 1], [2, 2]))  # [2]
```

**Union of two arrays**:

```python
def union(nums1, nums2):
    return list(set(nums1) | set(nums2))

print(union([1, 2, 3], [2, 3, 4]))  # [1, 2, 3, 4]
```

**Contains duplicate**:

```python
def contains_duplicate(nums):
    return len(nums) != len(set(nums))

print(contains_duplicate([1, 2, 3, 1]))  # True
print(contains_duplicate([1, 2, 3]))     # False
```

**Happy number**:

```python
def is_happy(n):
    seen = set()
    while n != 1 and n not in seen:
        seen.add(n)
        n = sum(int(d) ** 2 for d in str(n))
    return n == 1

print(is_happy(19))  # True (1² + 9² = 82 → 68 → 100 → 1)
print(is_happy(2))   # False (loops forever)
```

**Valid sudoku**:

```python
def is_valid_sudoku(board):
    rows = [set() for _ in range(9)]
    cols = [set() for _ in range(9)]
    boxes = [set() for _ in range(9)]

    for i in range(9):
        for j in range(9):
            val = board[i][j]
            if val == '.':
                continue
            box_idx = (i // 3) * 3 + (j // 3)
            if val in rows[i] or val in cols[j] or val in boxes[box_idx]:
                return False
            rows[i].add(val)
            cols[j].add(val)
            boxes[box_idx].add(val)
    return True

board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]
print(is_valid_sudoku(board))  # True
```

---

## 6.6 Advanced Patterns

**Group anagrams**:

```python
from collections import defaultdict

def group_anagrams(strs):
    groups = defaultdict(list)
    for s in strs:
        count = [0] * 26
        for c in s:
            count[ord(c) - ord('a')] += 1
        key = tuple(count)
        groups[key].append(s)
    return list(groups.values())

print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
# [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```

**LRU Cache**:

```python
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)

cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))    # 1
cache.put(3, 3)        # Evicts key 2
print(cache.get(2))    # -1
```

**Design HashMap** (without built-in dict):

```python
class MyHashMap:
    def __init__(self):
        self.size = 1000
        self.table = [[] for _ in range(self.size)]

    def _hash(self, key):
        return key % self.size

    def put(self, key, value):
        idx = self._hash(key)
        for i, (k, v) in enumerate(self.table[idx]):
            if k == key:
                self.table[idx][i] = (key, value)
                return
        self.table[idx].append((key, value))

    def get(self, key):
        idx = self._hash(key)
        for k, v in self.table[idx]:
            if k == key:
                return v
        return -1

    def remove(self, key):
        idx = self._hash(key)
        for i, (k, v) in enumerate(self.table[idx]):
            if k == key:
                del self.table[idx][i]
                return

hm = MyHashMap()
hm.put(1, 1)
hm.put(2, 2)
print(hm.get(1))  # 1
print(hm.get(3))  # -1
hm.put(2, 1)
print(hm.get(2))  # 1
hm.remove(2)
print(hm.get(2))  # -1
```

```mermaid
flowchart TD
    subgraph "Hash Map Patterns"
        A[Frequency] --> D[Counter, Anagrams]
        B[Cache/Index] --> E[Two Sum, Subarray Sum]
        C[Set Membership] --> F[Dups, Intersection, Sudoku]
        D --> G[Group Anagrams]
        E --> H[LRU Cache]
        F --> I[Longest Consecutive]
    end
```

---

## TypeScript Parallel

```typescript
// TypeScript Map and Set
const map = new Map<string, number>();
map.set("apple", 5);
console.log(map.get("apple"));  // 5

const set = new Set<number>([1, 2, 3, 3]);
console.log(set.size);  // 3

// Two Sum
function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) return [seen.get(complement)!, i];
        seen.set(nums[i], i);
    }
    return [];
}

// Group Anagrams
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for (const s of strs) {
        const key = s.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key)!.push(s);
    }
    return Array.from(map.values());
}
```

---

## Summary

- Hash tables provide O(1) average-case lookup, insertion, and deletion by mapping keys to array indices via a hash function
- Python dicts use randomized hashing and probing; sets are dicts with only keys (values are None)
- Hash maps are ideal for frequency counting, caching, and membership testing problems
- The two-sum and subarray-sum problems demonstrate the power of hash maps for reducing O(n²) to O(n)
- The Counter class from collections simplifies frequency counting tasks
- Hash sets provide efficient deduplication, intersection, union, and subset operations
- The longest consecutive sequence problem uses a set for O(n) detection of consecutive elements
- LRU cache combines a hash map with a doubly linked list for O(1) get and put operations
- Hash table keys must be immutable — strings, numbers, tuples of immutables work; lists and dicts do not
- Limitations include worst-case O(n) performance (hash collisions), no ordering (before Python 3.7), and memory overhead

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Frequency counting | `collections.Counter` | Manual dict with if/else |
| Two-sum | Hash map storing seen values | Nested loop O(n²) |
| Deduplication | `list(set(arr))` | Manual checking with in list O(n²) |
| Subarray sum = k | Hash map of prefix sums | Sliding window (doesn't work for negatives) |
| LRU Cache | OrderedDict or dict + doubly linked list | Simple dict without eviction policy |
| Group anagrams | Tuple of 26 counts as key | Sorting each string when length differs |

## Interview Q&A

"""

content += qa.format(qid="dsa06-q1",
    q="Q1: Explain how Python's dict is implemented internally.",
    a="<p>Python's dict uses a <strong>hash table</strong> with the following characteristics:</p><ul><li><strong>Hash function</strong>: Uses a randomized per-process seed to prevent DoS attacks. Calls <code>__hash__()</code> on the key.</li><li><strong>Collision resolution</strong>: Uses open addressing with pseudo-random probing (based on the full hash value).</li><li><strong>Compact storage</strong>: Python 3.6+ uses a compact array layout (two arrays: one for indices, one for entries) that preserves insertion order and reduces memory.</li><li><strong>Resizing</strong>: When load factor exceeds ~2/3, the table is resized (typically 2x-4x growth).</li><li><strong>Hash randomization</strong>: Hash seed is randomized per process to make hash values unpredictable.</li></ul><p>Key operations are O(1) average case but O(n) worst case when many collisions occur.</p>") + "\n\n"

content += qa.format(qid="dsa06-q2",
    q="Q2: What is the difference between a hash map and a hash set?",
    a="<p><strong>Hash Map</strong> (Python dict): Stores key-value pairs. Supports get(key), put(key, value), and delete(key).</p><p><strong>Hash Set</strong> (Python set): Stores only keys (no values). Supports add, remove, and membership testing (in).</p><p><strong>Implementation</strong>: In Python, a set is essentially a dict with only keys (values are set to a dummy constant None).</p><p><strong>Use cases</strong>: Use a map when you need to associate data with a key (frequency, index, cached value). Use a set when you only need membership testing or deduplication.</p>") + "\n\n"

content += qa.format(qid="dsa06-q3",
    q="Q3: How do you handle collisions in a hash table?",
    a="<p><strong>Chaining</strong>: Each bucket stores a linked list of entries. During lookup, traverse the list. Insertion/deletion are O(1) on the list. Memory overhead per entry is higher.</p><p><strong>Open addressing</strong>: Store all entries in the array itself. When a collision occurs, probe for the next empty slot. Variants:</p><ul><li><strong>Linear probing</strong>: Try next slot (i+1, i+2, ...). Simple but causes clustering.</li><li><strong>Quadratic probing</strong>: Try i+1², i+2², ... Reduces clustering but may not cover all slots.</li><li><strong>Double hashing</strong>: Use a second hash function for step size. Best but slower.</li></ul><p>Python uses open addressing with pseudo-random probing based on the full hash value (not just the truncated index).</p>") + "\n\n"

content += qa.format(qid="dsa06-q4",
    q="Q4: Explain the two-sum problem solution using a hash map.",
    a="<pre><code>def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []</code></pre><p><strong>Key insight</strong>: As we iterate, we store each number's index. When we encounter a number, we check if its complement (target - num) has been seen before. If yes, we found the pair.</p><p><strong>Why this works</strong>: For each element, we only need to check past elements. The hash map gives O(1) lookup for the complement.</p><p><strong>Complexity</strong>: O(n) time, O(n) space. Cannot be improved since we need to store at most n elements.</p>") + "\n\n"

content += qa.format(qid="dsa06-q5",
    q="Q5: How does the LRU Cache work? Implement it.",
    a="<p><strong>LRU Cache</strong> (Least Recently Used) evicts the least recently accessed item when capacity is reached. It requires O(1) get and put operations.</p><p><strong>Implementation</strong>: Python's OrderedDict maintains insertion order and provides <code>move_to_end()</code> for O(1) reordering.</p><pre><code>from collections import OrderedDict\n\nclass LRUCache:\n    def __init__(self, capacity):\n        self.cache = OrderedDict()\n        self.capacity = capacity\n\n    def get(self, key):\n        if key not in self.cache:\n            return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n\n    def put(self, key, value):\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.capacity:\n            self.cache.popitem(last=False)</code></pre><p><strong>Alternative</strong>: Dictionary + doubly linked list (for manual LRU ordering).</p>") + "\n\n"

content += qa.format(qid="dsa06-q6",
    q="Q6: Explain the subarray sum equals k problem. Why does the hash map approach work?",
    a="<p><strong>Problem</strong>: Count the number of subarrays whose sum equals k.</p><p><strong>Key insight</strong>: If prefix sum at index i is S[i] and at index j is S[j] (with j < i), then subarray (j+1..i) has sum S[i] - S[j]. If S[i] - S[j] = k, then S[j] = S[i] - k.</p><p>So we track how many times each prefix sum has occurred. For each prefix sum, the number of ways to get sum k ending at i is the count of prefix sums equal to sum - k.</p><pre><code>def subarray_sum(nums, k):\n    count_map = {0: 1}\n    prefix_sum = 0\n    total = 0\n    for num in nums:\n        prefix_sum += num\n        total += count_map.get(prefix_sum - k, 0)\n        count_map[prefix_sum] = count_map.get(prefix_sum, 0) + 1\n    return total</code></pre>") + "\n\n"

content += qa.format(qid="dsa06-q7",
    q="Q7: How do you find the longest consecutive sequence in an array in O(n) time?",
    a="<pre><code>def longest_consecutive(nums):\n    num_set = set(nums)\n    longest = 0\n    for num in num_set:\n        if num - 1 not in num_set:  # start of a sequence\n            curr = num\n            length = 1\n            while curr + 1 in num_set:\n                curr += 1\n                length += 1\n            longest = max(longest, length)\n    return longest</code></pre><p><strong>Key insight</strong>: Only check sequences from their starting element (where num-1 is not in the set). This ensures each element is visited at most once during sequence expansion, giving O(n) total time despite the nested loop.</p><p><strong>Complexity</strong>: O(n) time, O(n) space for the set.</p>") + "\n\n"

content += qa.format(qid="dsa06-q8",
    q="Q8: What is the valid sudoku check and how do sets help?",
    a="<p><strong>Problem</strong>: Verify that a partially filled 9x9 sudoku board has no duplicate digits in any row, column, or 3x3 box.</p><p><strong>Set approach</strong>: Maintain 3 sets per row/col/box. For each cell, if the digit already exists in the corresponding set, the board is invalid.</p><pre><code>def is_valid_sudoku(board):\n    rows = [set() for _ in range(9)]\n    cols = [set() for _ in range(9)]\n    boxes = [set() for _ in range(9)]\n    for i in range(9):\n        for j in range(9):\n            val = board[i][j]\n            if val == '.': continue\n            box_idx = (i // 3) * 3 + (j // 3)\n            if val in rows[i] or val in cols[j] or val in boxes[box_idx]:\n                return False\n            rows[i].add(val)\n            cols[j].add(val)\n            boxes[box_idx].add(val)\n    return True</code></pre>") + "\n\n"

content += qa.format(qid="dsa06-q9",
    q="Q9: How do you group anagrams efficiently?",
    a="<p><strong>Problem</strong>: Given an array of strings, group the anagrams together.</p><p><strong>Two approaches</strong>:</p><p><strong>1. Sorted string as key</strong>: Sort each string (O(k log k) per string). Use sorted result as hash key.</p><pre><code>def group_anagrams(strs):\n    groups = {}\n    for s in strs:\n        key = ''.join(sorted(s))\n        groups.setdefault(key, []).append(s)\n    return list(groups.values())</code></pre><p><strong>2. Character count as key</strong>: Count 26 characters as tuple. O(k) per string, better for long strings.</p><pre><code>def group_anagrams_count(strs):\n    groups = {}\n    for s in strs:\n        count = [0] * 26\n        for c in s:\n            count[ord(c) - ord('a')] += 1\n        key = tuple(count)\n        groups.setdefault(key, []).append(s)\n    return list(groups.values())</code></pre><p><strong>Complexity</strong>: O(NK) for count approach, O(NK log K) for sort approach. Count approach is better when strings are long.</p>") + "\n\n"

content += qa.format(qid="dsa06-q10",
    q="Q10: What types can be used as dictionary keys in Python?",
    a="<p>Dictionary keys must be <strong>hashable</strong> — they must implement <code>__hash__()</code> and <code>__eq__()</code>. Immutable types are typically hashable:</p><p><strong>Hashable (can be keys)</strong>:</p><ul><li><code>int</code>, <code>float</code>, <code>complex</code></li><li><code>str</code>, <code>bytes</code></li><li><code>tuple</code> — only if all elements are hashable</li><li><code>frozenset</code></li><li><code>NoneType</code></li><li>Custom classes (hashable by default based on id)</li></ul><p><strong>Not hashable</strong>:</p><ul><li><code>list</code>, <code>set</code>, <code>dict</code></li><li><code>tuple</code> containing unhashable elements</li></ul><p>Custom objects can be made hashable by implementing <code>__hash__</code> and <code>__eq__</code>. Equal objects must have equal hashes.</p>") + "\n\n"

content += qa.format(qid="dsa06-q11",
    q="Q11: Explain the Counter class from collections. How is it different from a regular dict?",
    a="<p><code>collections.Counter</code> is a subclass of dict designed for counting hashable objects. Key differences:</p><ul><li><strong>Missing keys</strong>: Counter returns 0 for missing keys (<code>c['missing']</code> returns 0), while dict raises KeyError</li><li><strong>most_common()</strong>: Returns n most common elements and their counts</li><li><strong>elements()</strong>: Returns an iterator over elements repeating each as many times as its count</li><li><strong>Arithmetic</strong>: Supports +, -, &, | operations between Counters</li><li><strong>update() and subtract()</strong>: Add or subtract counts from another Counter or iterable</li></ul><pre><code>from collections import Counter\n\nc1 = Counter('hello')\nc2 = Counter('world')\nprint(c1 + c2)  # Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, 'w': 1, 'r': 1, 'd': 1})\nprint(c1.most_common(2))  # [('l', 2), ('h', 1)]</code></pre>") + "\n\n"

content += qa.format(qid="dsa06-q12",
    q="Q12: How do you check if two strings are isomorphic using hash maps?",
    a="<p><strong>Problem</strong>: Two strings s and t are isomorphic if characters in s can be replaced to get t. No two characters may map to the same character.</p><pre><code>def is_isomorphic(s, t):\n    if len(s) != len(t):\n        return False\n    s_to_t = {}\n    t_to_s = {}\n    for c1, c2 in zip(s, t):\n        if c1 in s_to_t and s_to_t[c1] != c2:\n            return False\n        if c2 in t_to_s and t_to_s[c2] != c1:\n            return False\n        s_to_t[c1] = c2\n        t_to_s[c2] = c1\n    return True</code></pre><p><strong>Key insight</strong>: Two hash maps ensure a bijection (one-to-one mapping). s_to_t ensures consistent forward mapping (always same c1 -> c2). t_to_s ensures the reverse mapping is also consistent (no two c1s map to same c2).</p><p><strong>Complexity</strong>: O(n) time, O(k) space where k is alphabet size.</p>") + """

## Chapter Quiz

**Q1**: What is the amortized time complexity of hash table operations?

a) O(1)
b) O(log n)
c) O(n)
d) O(n²)

""" + quiz_card("dsa06-quiz1", "<p><strong>Answer: a) O(1)</strong></p><p>Hash table operations are O(1) average/amortized, but can be O(n) in worst case due to collisions.</p>") + """

**Q2**: What Python data structure is used to implement a Counter?

a) list
b) set
c) dict
d) tuple

""" + quiz_card("dsa06-quiz2", "<p><strong>Answer: c) dict</strong></p><p>Counter is a subclass of dict that counts hashable objects, inheriting all dict properties.</p>") + """

**Q3**: In the subarray sum equals k problem, what is stored in the hash map?

a) Array indices
b) Prefix sum values
c) Count of each prefix sum occurrence
d) Array values

""" + quiz_card("dsa06-quiz3", "<p><strong>Answer: c) Count of each prefix sum occurrence</strong></p><p>The map stores how many times each prefix sum has occurred, enabling O(1) lookup for subarray sum calculation.</p>") + """

**Q4**: Which of these CANNOT be used as a dictionary key?

a) Tuple (1, 2, 3)
b) Frozenset({1, 2, 3})
c) List [1, 2, 3]
d) Integer 42

""" + quiz_card("dsa06-quiz4", "<p><strong>Answer: c) List [1, 2, 3]</strong></p><p>Lists are mutable and not hashable, so they cannot be used as dictionary keys.</p>") + """

**Q5**: What is the space complexity of the longest consecutive sequence solution?

a) O(1)
b) O(log n)
c) O(n)
d) O(n²)

""" + quiz_card("dsa06-quiz5", "<p><strong>Answer: c) O(n)</strong></p><p>The set stores all n elements, giving O(n) space complexity.</p>") + """

## Exercises

**Easy** — Given two strings, determine if one is a permutation of the other (anagram).

**Medium** — Implement a function that finds the first non-repeating character in a string using a hash map.

**Medium** — Given an array of integers, find the longest subarray with sum divisible by k.

**Hard** — Implement a data structure that supports insert, delete, and getRandom in O(1) average time. Duplicates are not allowed.

**Hard** — Design a time-based key-value store that supports get(key, timestamp) to retrieve the value stored at a specific timestamp.

---

> **Next**: [07 — Linked Lists →](07-linked-lists.md)
"""

with open(os.path.join(DSA, "06-hash-maps-and-sets.md"), "w", encoding="utf-8") as f:
    f.write(content)
print("  Done: 06-hash-maps-and-sets.md")

print("All files generated successfully!")
