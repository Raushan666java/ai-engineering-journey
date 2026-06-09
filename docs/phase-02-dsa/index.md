# Phase 2 — DSA

**Target:** 60 problems — Easy + Medium only

---

## Strategy

!!! warning "Big Tech Target Nahi — Par Basics Chahiye"
    Path D ke liye Heavy DSA grind nahi karna.
    Par problem-solving skill lagti hai.
    60 problems = enough.

```
Focus karo:
✅ Arrays, Strings
✅ HashMap, Sets
✅ Trees (DFS/BFS)
✅ Stack, Queue
✅ Binary Search
✅ Two Pointer, Sliding Window

Skip karo:
❌ Dynamic Programming (hard)
❌ Graphs advanced
❌ Segment Trees
❌ LeetCode Hard
```

---

## Problem List

### Arrays & Strings (Week 1) — 15 Problems

| # | Problem | Difficulty | Pattern | Status |
|---|---------|------------|---------|--------|
| 1 | Two Sum | Easy | HashMap | ⏳ |
| 2 | Best Time to Buy/Sell Stock | Easy | Sliding Window | ⏳ |
| 3 | Contains Duplicate | Easy | HashSet | ⏳ |
| 4 | Maximum Subarray | Medium | Kadane's | ⏳ |
| 5 | Move Zeroes | Easy | Two Pointer | ⏳ |
| 6 | Valid Anagram | Easy | HashMap | ⏳ |
| 7 | Valid Palindrome | Easy | Two Pointer | ⏳ |
| 8 | 3Sum | Medium | Two Pointer | ⏳ |
| 9 | Product of Array Except Self | Medium | Prefix Sum | ⏳ |
| 10 | Maximum Product Subarray | Medium | DP basic | ⏳ |
| 11 | Longest Substring Without Repeat | Medium | Sliding Window | ⏳ |
| 13 | Rotate Array | Medium | Two Pointer | ⏳ |
| 14 | Find Pivot Index | Easy | Prefix Sum | ⏳ |
| 15 | Merge Intervals | Medium | Sorting | ⏳ |

### HashMap & Linked Lists (Week 2) — 15 Problems

| # | Problem | Difficulty | Pattern | Status |
|---|---------|------------|---------|--------|
| 16 | Group Anagrams | Medium | HashMap | ⏳ |
| 17 | Top K Frequent Elements | Medium | Heap/HashMap | ⏳ |
| 18 | Valid Sudoku | Medium | HashSet | ⏳ |
| 19 | Reverse Linked List | Easy | Pointer | ⏳ |
| 20 | Merge Two Sorted Lists | Easy | Two Pointer | ⏳ |
| 21 | Linked List Cycle | Easy | Fast/Slow | ⏳ |
| 22 | Remove Nth Node From End | Medium | Two Pointer | ⏳ |
| 23 | Reorder List | Medium | Fast/Slow | ⏳ |
| 24 | LRU Cache | Medium | HashMap+DLL | ⏳ |
| 25 | Copy List with Random Pointer | Medium | HashMap | ⏳ |
| 26 | Find Duplicate Number | Medium | Fast/Slow | ⏳ |
| 27 | Ransom Note | Easy | HashMap | ⏳ |
| 28 | Word Pattern | Easy | HashMap | ⏳ |
| 29 | Isomorphic Strings | Easy | HashMap | ⏳ |
| 30 | Happy Number | Easy | Fast/Slow | ⏳ |

### Trees & Stack (Week 3) — 15 Problems

| # | Problem | Difficulty | Pattern | Status |
|---|---------|------------|---------|--------|
| 31 | Valid Parentheses | Easy | Stack | ⏳ |
| 32 | Min Stack | Medium | Stack | ⏳ |
| 33 | Daily Temperatures | Medium | Monotonic Stack | ⏳ |
| 34 | Invert Binary Tree | Easy | DFS | ⏳ |
| 35 | Maximum Depth of Binary Tree | Easy | DFS | ⏳ |
| 36 | Same Tree | Easy | DFS | ⏳ |
| 37 | Level Order Traversal | Medium | BFS | ⏳ |
| 38 | Validate BST | Medium | DFS | ⏳ |
| 39 | Kth Smallest in BST | Medium | Inorder | ⏳ |
| 40 | Lowest Common Ancestor | Medium | DFS | ⏳ |
| 41 | Binary Tree Right Side View | Medium | BFS | ⏳ |
| 42 | Count Good Nodes | Medium | DFS | ⏳ |
| 43 | Diameter of Binary Tree | Easy | DFS | ⏳ |
| 44 | Balanced Binary Tree | Easy | DFS | ⏳ |
| 45 | Path Sum | Easy | DFS | ⏳ |

### Binary Search + Revision (Week 4) — 15 Problems

| # | Problem | Difficulty | Pattern | Status |
|---|---------|------------|---------|--------|
| 46 | Binary Search | Easy | Binary Search | ⏳ |
| 47 | Search in Rotated Array | Medium | Binary Search | ⏳ |
| 48 | Find Minimum in Rotated Array | Medium | Binary Search | ⏳ |
| 49 | Time Based Key-Value Store | Medium | Binary Search | ⏳ |
| 50 | Koko Eating Bananas | Medium | Binary Search | ⏳ |
| 51-60 | Revision + weak areas | Mixed | Mixed | ⏳ |

---

## Pattern Templates

### Two Pointer

```python
def two_pointer_template(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        if condition_met(arr[left], arr[right]):
            left += 1; right -= 1
        elif need_larger:
            left += 1
        else:
            right -= 1
```

### Sliding Window

```python
def sliding_window_template(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum
```

### DFS Tree

```python
def dfs(node):
    if not node:
        return base_case
    left = dfs(node.left)
    right = dfs(node.right)
    return process(left, right, node.val)
```

### BFS Tree

```python
from collections import deque

def bfs(root):
    if not root:
        return []
    queue = deque([root])
    result = []
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    return result
```

---

## Resources

- **Neetcode.io** → Best roadmap + video explanations
- **LeetCode** → Problems solve karo
- **Visualgo.net** → Visual algorithms

!!! tip "Daily Routine"
    1. Problem padho (5 min)
    2. Brute force sochho (10 min)
    3. Optimal sochho (10 min)
    4. Code karo (20 min)
    5. Test karo (10 min)
    6. Solution dekho + compare karo (5 min)
