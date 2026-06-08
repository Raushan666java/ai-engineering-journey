# 📋 DSA Master Cheat Sheet Collection

## 📊 **Big O Complexity Cheat Sheet**

### **Time Complexity Rankings** ⚡
```
O(1)      < O(log n) < O(n)      < O(n log n) < O(n²)     < O(2ⁿ)     < O(n!)
Constant  < Logarithmic < Linear < Linearithmic < Quadratic < Exponential < Factorial

Best      ←                                                                  → Worst
```

### **Common Algorithm Complexities**
| Algorithm | Best | Average | Worst | Space |
|-----------|------|---------|--------|-------|
| **Searching** |  |  |  |  |
| Linear Search | O(1) | O(n) | O(n) | O(1) |
| Binary Search | O(1) | O(log n) | O(log n) | O(1) |
| Hash Table | O(1) | O(1) | O(n) | O(n) |
| **Sorting** |  |  |  |  |
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) |
| **Tree Operations** |  |  |  |  |
| BST Search | O(log n) | O(log n) | O(n) | O(1) |
| BST Insert/Delete | O(log n) | O(log n) | O(n) | O(1) |
| AVL Tree Ops | O(log n) | O(log n) | O(log n) | O(1) |
| **Graph Algorithms** |  |  |  |  |
| DFS/BFS | O(V + E) | O(V + E) | O(V + E) | O(V) |
| Dijkstra | O((V + E) log V) | O((V + E) log V) | O((V + E) log V) | O(V) |

---

## 🎯 **Essential Algorithm Patterns**

### **1. Two Pointers** 👥
```python
# Pattern: Opposite Direction
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        curr_sum = arr[left] + arr[right]
        if curr_sum == target:
            return [left, right]
        elif curr_sum < target:
            left += 1
        else:
            right -= 1

# Pattern: Same Direction (Fast & Slow)
def remove_duplicates(arr):
    slow = 0
    for fast in range(1, len(arr)):
        if arr[fast] != arr[slow]:
            slow += 1
            arr[slow] = arr[fast]
    return slow + 1

# Use Cases: Palindrome, 3Sum, Container with water, Cycle detection
```

### **2. Sliding Window** 🪟
```python
# Pattern: Fixed Size Window
def max_sum_subarray(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i-k] + arr[i]
        max_sum = max(max_sum, window_sum)
    
    return max_sum

# Pattern: Variable Size Window
def longest_substring_k_distinct(s, k):
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

# Use Cases: Max/min subarray, substring problems, distinct elements
```

### **3. Fast & Slow Pointers** 🐢🐰
```python
# Cycle Detection (Floyd's Algorithm)
def has_cycle(head):
    slow = fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    
    return False

# Find Middle Element
def find_middle(head):
    slow = fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    
    return slow

# Use Cases: Cycle detection, middle element, nth from end
```

### **4. Merge Intervals** 📊
```python
def merge_intervals(intervals):
    if not intervals:
        return []
    
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    
    for current in intervals[1:]:
        last = merged[-1]
        if current[0] <= last[1]:  # Overlap
            merged[-1] = [last[0], max(last[1], current[1])]
        else:
            merged.append(current)
    
    return merged

# Use Cases: Meeting rooms, interval scheduling, range problems
```

### **5. Cyclic Sort** 🔄
```python
def cyclic_sort(nums):
    i = 0
    while i < len(nums):
        correct_pos = nums[i] - 1
        if nums[i] != nums[correct_pos]:
            nums[i], nums[correct_pos] = nums[correct_pos], nums[i]
        else:
            i += 1
    return nums

# Find Missing Number
def find_missing_number(nums):
    i = 0
    while i < len(nums):
        if nums[i] < len(nums) and nums[i] != nums[nums[i]]:
            nums[nums[i]], nums[i] = nums[i], nums[nums[i]]
        else:
            i += 1
    
    for i in range(len(nums)):
        if nums[i] != i:
            return i
    return len(nums)

# Use Cases: Missing numbers, duplicate detection, cyclic arrays
```

---

## 🌳 **Tree Algorithms Cheat Sheet**

### **Tree Traversals**
```python
# Recursive Traversals
def inorder(root):
    result = []
    def dfs(node):
        if node:
            dfs(node.left)
            result.append(node.val)
            dfs(node.right)
    dfs(root)
    return result

def preorder(root):
    result = []
    def dfs(node):
        if node:
            result.append(node.val)
            dfs(node.left)
            dfs(node.right)
    dfs(root)
    return result

def postorder(root):
    result = []
    def dfs(node):
        if node:
            dfs(node.left)
            dfs(node.right)
            result.append(node.val)
    dfs(root)
    return result

# Iterative Traversals
def inorder_iterative(root):
    result, stack = [], []
    current = root
    
    while stack or current:
        while current:
            stack.append(current)
            current = current.left
        
        current = stack.pop()
        result.append(current.val)
        current = current.right
    
    return result

def preorder_iterative(root):
    if not root:
        return []
    
    result, stack = [], [root]
    
    while stack:
        node = stack.pop()
        result.append(node.val)
        
        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)
    
    return result

# Level Order Traversal (BFS)
from collections import deque

def level_order(root):
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result
```

### **Tree Pattern Templates**
```python
# Path Sum Pattern
def has_path_sum(root, target_sum):
    if not root:
        return False
    
    if not root.left and not root.right:
        return target_sum == root.val
    
    return (has_path_sum(root.left, target_sum - root.val) or
            has_path_sum(root.right, target_sum - root.val))

# Tree Diameter Pattern
def diameter_of_tree(root):
    def depth(node):
        nonlocal diameter
        if not node:
            return 0
        
        left_depth = depth(node.left)
        right_depth = depth(node.right)
        
        diameter = max(diameter, left_depth + right_depth)
        return max(left_depth, right_depth) + 1
    
    diameter = 0
    depth(root)
    return diameter

# Lowest Common Ancestor
def lca(root, p, q):
    if not root or root == p or root == q:
        return root
    
    left = lca(root.left, p, q)
    right = lca(root.right, p, q)
    
    if left and right:
        return root
    return left or right
```

---

## 📊 **Graph Algorithms Cheat Sheet**

### **Graph Representations**
```python
# Adjacency List
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

# Adjacency Matrix
n = 4
graph = [[0] * n for _ in range(n)]
# graph[i][j] = 1 if edge exists from i to j

# Edge List
edges = [(0, 1), (0, 2), (1, 3), (2, 3)]
```

### **Graph Traversals**
```python
# DFS Recursive
def dfs_recursive(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start)
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)

# DFS Iterative
def dfs_iterative(graph, start):
    visited = set()
    stack = [start]
    
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            print(node)
            
            for neighbor in graph[node]:
                if neighbor not in visited:
                    stack.append(neighbor)

# BFS
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        node = queue.popleft()
        print(node)
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
```

### **Common Graph Algorithms**
```python
# Topological Sort (DFS)
def topological_sort(graph):
    visited = set()
    stack = []
    
    def dfs(node):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor)
        stack.append(node)
    
    for node in graph:
        if node not in visited:
            dfs(node)
    
    return stack[::-1]

# Detect Cycle in Directed Graph
def has_cycle_directed(graph):
    WHITE, GRAY, BLACK = 0, 1, 2
    color = {node: WHITE for node in graph}
    
    def dfs(node):
        if color[node] == GRAY:
            return True
        if color[node] == BLACK:
            return False
        
        color[node] = GRAY
        for neighbor in graph[node]:
            if dfs(neighbor):
                return True
        
        color[node] = BLACK
        return False
    
    for node in graph:
        if color[node] == WHITE:
            if dfs(node):
                return True
    return False

# Dijkstra's Shortest Path
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    
    while pq:
        current_dist, current = heapq.heappop(pq)
        
        if current_dist > distances[current]:
            continue
        
        for neighbor, weight in graph[current]:
            distance = current_dist + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances
```

---

## 🔍 **Dynamic Programming Patterns**

### **1. Fibonacci Pattern**
```python
# Basic DP Template
def fib(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]

# Climbing Stairs
def climb_stairs(n):
    if n <= 2:
        return n
    
    prev2, prev1 = 1, 2
    for i in range(3, n + 1):
        current = prev1 + prev2
        prev2, prev1 = prev1, current
    
    return prev1
```

### **2. 0/1 Knapsack Pattern**
```python
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(
                    dp[i-1][w],  # Don't take item
                    dp[i-1][w - weights[i-1]] + values[i-1]  # Take item
                )
            else:
                dp[i][w] = dp[i-1][w]
    
    return dp[n][capacity]

# Space Optimized
def knapsack_optimized(weights, values, capacity):
    dp = [0] * (capacity + 1)
    
    for i in range(len(weights)):
        for w in range(capacity, weights[i] - 1, -1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    
    return dp[capacity]
```

### **3. Longest Common Subsequence Pattern**
```python
def lcs(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    return dp[m][n]

# Edit Distance
def edit_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Initialize base cases
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = min(
                    dp[i-1][j] + 1,    # Delete
                    dp[i][j-1] + 1,    # Insert
                    dp[i-1][j-1] + 1   # Replace
                )
    
    return dp[m][n]
```

---

## 🏢 **Company-Specific Quick Reference**

### **Google** 🔍
**Top Patterns**: Two Pointers, Trees, DP, System Scaling
**Focus**: Code quality, follow-ups, optimization

### **Amazon** 📦
**Top Patterns**: Arrays, Hash Tables, Basic Trees, BFS/DFS
**Focus**: Customer obsession, working backwards

### **Microsoft** 🖥️
**Top Patterns**: Strings, Linked Lists, Binary Search, Recursion
**Focus**: Problem-solving approach, communication

### **Apple** 🍎
**Top Patterns**: Arrays, Hash Tables, Tree traversals
**Focus**: Attention to detail, edge cases

### **Meta** 👥
**Top Patterns**: BFS/DFS, Dynamic Programming, Graph algorithms
**Focus**: Moving fast, scalability thinking

---

## ⏰ **Interview Time Management**

### **45-Minute Interview Breakdown**
```
5 mins  - Problem understanding & clarification
10 mins - Solution approach & discussion
20 mins - Coding implementation
5 mins  - Testing & optimization
5 mins  - Follow-up questions & discussion
```

### **Problem-Solving Steps**
1. **Listen & Understand** - Ask clarifying questions
2. **Example Walkthrough** - Trace through examples
3. **Brute Force** - Start with simple approach
4. **Optimize** - Improve time/space complexity
5. **Code** - Implement clean solution
6. **Test** - Walk through test cases
7. **Analyze** - Discuss time/space complexity

---

**🎯 Quick Tip**: Keep this cheat sheet handy during practice and interviews. Master the patterns, not just individual problems!
