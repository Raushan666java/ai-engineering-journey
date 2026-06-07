# 📙 LeetCode Medium Problems - Complete Collection

## 📊 **Problem Distribution by Topic**
- **Arrays**: 35 problems
- **Trees**: 40 problems
- **Dynamic Programming**: 40 problems
- **Graphs**: 30 problems
- **Strings**: 30 problems
- **Linked Lists**: 20 problems
- **Design**: 15 problems
- **Others**: 80 problems

**Total**: 290 Medium Problems

---

## 🏆 **Top 75 Must-Solve Medium Problems**

### **Arrays & Two Pointers (20 problems)** 📊

#### **1. 3Sum** - LC #15 ⭐⭐⭐⭐⭐
```python
def three_sum(nums):
    nums.sort()
    result = []
    
    for i in range(len(nums) - 2):
        # Skip duplicates for first number
        if i > 0 and nums[i] == nums[i-1]:
            continue
        
        left, right = i + 1, len(nums) - 1
        
        while left < right:
            current_sum = nums[i] + nums[left] + nums[right]
            
            if current_sum == 0:
                result.append([nums[i], nums[left], nums[right]])
                
                # Skip duplicates
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                
                left += 1
                right -= 1
            elif current_sum < 0:
                left += 1
            else:
                right -= 1
    
    return result

# Companies: Amazon, Facebook, Microsoft, Apple, Google
# Pattern: Two Pointers + Sorting
# Time: O(n²), Space: O(1)
# Follow-ups: 4Sum, kSum, 3Sum Closest
```

#### **2. Container With Most Water** - LC #11 ⭐⭐⭐⭐⭐
```python
def max_area(height):
    left, right = 0, len(height) - 1
    max_water = 0
    
    while left < right:
        width = right - left
        current_height = min(height[left], height[right])
        current_area = width * current_height
        max_water = max(max_water, current_area)
        
        # Move pointer with smaller height
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_water

# Why greedy works: Moving the pointer with larger height
# can never give us a better solution since width decreases
# Companies: Amazon, Google, Facebook, Microsoft
# Pattern: Two Pointers (Greedy)
# Time: O(n), Space: O(1)
```

#### **3. Product of Array Except Self** - LC #238 ⭐⭐⭐⭐⭐
```python
def product_except_self(nums):
    n = len(nums)
    result = [1] * n
    
    # Forward pass: left products
    for i in range(1, n):
        result[i] = result[i-1] * nums[i-1]
    
    # Backward pass: right products
    right_product = 1
    for i in range(n-1, -1, -1):
        result[i] *= right_product
        right_product *= nums[i]
    
    return result

# Without division, O(1) extra space (excluding output)
# Companies: Amazon, Facebook, Apple, Microsoft, Google
# Pattern: Prefix/Suffix Arrays
# Time: O(n), Space: O(1)
```

#### **4. Sort Colors** - LC #75 ⭐⭐⭐⭐
```python
def sort_colors(nums):
    """Dutch National Flag Algorithm"""
    left = mid = 0
    right = len(nums) - 1
    
    while mid <= right:
        if nums[mid] == 0:
            nums[left], nums[mid] = nums[mid], nums[left]
            left += 1
            mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:  # nums[mid] == 2
            nums[mid], nums[right] = nums[right], nums[mid]
            right -= 1
            # Don't increment mid here since we haven't checked swapped element
    
    return nums

# One-pass, O(1) space solution
# Companies: Microsoft, Amazon, Apple
# Pattern: Three Pointers
# Time: O(n), Space: O(1)
```

#### **5. Next Permutation** - LC #31 ⭐⭐⭐⭐
```python
def next_permutation(nums):
    # Find the first decreasing element from right
    i = len(nums) - 2
    while i >= 0 and nums[i] >= nums[i + 1]:
        i -= 1
    
    if i >= 0:  # Not the last permutation
        # Find the smallest element larger than nums[i]
        j = len(nums) - 1
        while nums[j] <= nums[i]:
            j -= 1
        
        # Swap
        nums[i], nums[j] = nums[j], nums[i]
    
    # Reverse the suffix
    nums[i + 1:] = reversed(nums[i + 1:])

# Companies: Google, Amazon, Microsoft
# Pattern: Array Manipulation
# Time: O(n), Space: O(1)
```

### **Sliding Window (8 problems)** 🪟

#### **6. Longest Substring Without Repeating Characters** - LC #3 ⭐⭐⭐⭐⭐
```python
def length_of_longest_substring(s):
    char_set = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Alternative: Using char index map
def length_of_longest_substring_v2(s):
    char_map = {}
    left = 0
    max_length = 0
    
    for right, char in enumerate(s):
        if char in char_map and char_map[char] >= left:
            left = char_map[char] + 1
        
        char_map[char] = right
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Companies: Amazon, Google, Microsoft, Apple, Facebook
# Pattern: Sliding Window
# Time: O(n), Space: O(min(m,n)) where m is charset size
```

#### **7. Minimum Window Substring** - LC #76 ⭐⭐⭐⭐⭐
```python
def min_window(s, t):
    if not s or not t:
        return ""
    
    # Count characters in t
    dict_t = {}
    for char in t:
        dict_t[char] = dict_t.get(char, 0) + 1
    
    required = len(dict_t)
    left = right = 0
    formed = 0  # Number of unique chars in current window with desired frequency
    
    window_counts = {}
    
    # Result: (window length, left, right)
    ans = float("inf"), None, None
    
    while right < len(s):
        # Add one character from right to window
        character = s[right]
        window_counts[character] = window_counts.get(character, 0) + 1
        
        # Check if frequency matches desired count in t
        if character in dict_t and window_counts[character] == dict_t[character]:
            formed += 1
        
        # Try to contract window until it ceases to be 'desirable'
        while left <= right and formed == required:
            character = s[left]
            
            # Save the smallest window
            if right - left + 1 < ans[0]:
                ans = (right - left + 1, left, right)
            
            # Remove from left of window
            window_counts[character] -= 1
            if character in dict_t and window_counts[character] < dict_t[character]:
                formed -= 1
            
            left += 1
        
        right += 1
    
    return "" if ans[0] == float("inf") else s[ans[1]:ans[2] + 1]

# Companies: Facebook, Amazon, Google, Microsoft
# Pattern: Sliding Window
# Time: O(|s| + |t|), Space: O(|s| + |t|)
```

### **Dynamic Programming (15 problems)** ⚡

#### **8. Longest Palindromic Substring** - LC #5 ⭐⭐⭐⭐
```python
def longest_palindrome(s):
    if not s:
        return ""
    
    start = 0
    max_len = 1
    
    def expand_around_center(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1
    
    for i in range(len(s)):
        # Odd length palindromes
        len1 = expand_around_center(i, i)
        # Even length palindromes
        len2 = expand_around_center(i, i + 1)
        
        current_max = max(len1, len2)
        if current_max > max_len:
            max_len = current_max
            start = i - (current_max - 1) // 2
    
    return s[start:start + max_len]

# DP Solution (less optimal but good to know)
def longest_palindrome_dp(s):
    n = len(s)
    if n == 0:
        return ""
    
    dp = [[False] * n for _ in range(n)]
    start = 0
    max_len = 1
    
    # Every single character is palindrome
    for i in range(n):
        dp[i][i] = True
    
    # Check for length 2
    for i in range(n - 1):
        if s[i] == s[i + 1]:
            dp[i][i + 1] = True
            start = i
            max_len = 2
    
    # Check for lengths 3 and more
    for length in range(3, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            
            if s[i] == s[j] and dp[i + 1][j - 1]:
                dp[i][j] = True
                start = i
                max_len = length
    
    return s[start:start + max_len]

# Companies: Amazon, Microsoft, Google, Facebook
# Pattern: Expand Around Center / DP
# Time: O(n²), Space: O(1) / O(n²)
```

#### **9. Coin Change** - LC #322 ⭐⭐⭐⭐⭐
```python
def coin_change(coins, amount):
    # dp[i] = minimum coins needed for amount i
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for coin in coins:
        for x in range(coin, amount + 1):
            dp[x] = min(dp[x], dp[x - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1

# Space optimized version
def coin_change_optimized(coins, amount):
    prev = [float('inf')] * (amount + 1)
    prev[0] = 0
    
    for coin in coins:
        curr = [float('inf')] * (amount + 1)
        curr[0] = 0
        
        for x in range(1, amount + 1):
            curr[x] = prev[x]  # Don't use current coin
            if x >= coin:
                curr[x] = min(curr[x], curr[x - coin] + 1)
        
        prev = curr
    
    return prev[amount] if prev[amount] != float('inf') else -1

# Companies: Amazon, Google, Facebook, Microsoft
# Pattern: DP (Unbounded Knapsack)
# Time: O(amount * coins), Space: O(amount)
```

#### **10. House Robber** - LC #198 ⭐⭐⭐⭐
```python
def rob(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    
    # dp[i] = max money that can be robbed up to house i
    prev2 = nums[0]
    prev1 = max(nums[0], nums[1])
    
    for i in range(2, len(nums)):
        current = max(prev1, prev2 + nums[i])
        prev2, prev1 = prev1, current
    
    return prev1

# Alternative: Include/exclude pattern
def rob_v2(nums):
    include = exclude = 0
    
    for num in nums:
        new_exclude = max(include, exclude)
        include = exclude + num
        exclude = new_exclude
    
    return max(include, exclude)

# Companies: Amazon, Microsoft, Apple, LinkedIn
# Pattern: DP (Linear)
# Time: O(n), Space: O(1)
```

### **Trees (20 problems)** 🌳

#### **11. Binary Tree Level Order Traversal** - LC #102 ⭐⭐⭐⭐
```python
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

# Recursive DFS approach
def level_order_dfs(root):
    def dfs(node, level, result):
        if not node:
            return
        
        if level >= len(result):
            result.append([])
        
        result[level].append(node.val)
        dfs(node.left, level + 1, result)
        dfs(node.right, level + 1, result)
    
    result = []
    dfs(root, 0, result)
    return result

# Companies: Amazon, Microsoft, Facebook, Apple
# Pattern: BFS / DFS
# Time: O(n), Space: O(n)
```

#### **12. Validate Binary Search Tree** - LC #98 ⭐⭐⭐⭐
```python
def is_valid_bst(root):
    def validate(node, min_val, max_val):
        if not node:
            return True
        
        if node.val <= min_val or node.val >= max_val:
            return False
        
        return (validate(node.left, min_val, node.val) and
                validate(node.right, node.val, max_val))
    
    return validate(root, float('-inf'), float('inf'))

# Inorder traversal approach
def is_valid_bst_inorder(root):
    def inorder(node):
        if not node:
            return True
        
        if not inorder(node.left):
            return False
        
        if self.prev is not None and self.prev >= node.val:
            return False
        self.prev = node.val
        
        return inorder(node.right)
    
    self.prev = None
    return inorder(root)

# Companies: Amazon, Microsoft, Facebook, Google
# Pattern: Tree Validation
# Time: O(n), Space: O(h)
```

#### **13. Lowest Common Ancestor of Binary Tree** - LC #236 ⭐⭐⭐⭐⭐
```python
def lowest_common_ancestor(root, p, q):
    if not root or root == p or root == q:
        return root
    
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    
    if left and right:
        return root
    
    return left or right

# Iterative approach with parent pointers
def lowest_common_ancestor_iterative(root, p, q):
    # Build parent mapping
    parent = {root: None}
    stack = [root]
    
    while p not in parent or q not in parent:
        node = stack.pop()
        
        if node.left:
            parent[node.left] = node
            stack.append(node.left)
        if node.right:
            parent[node.right] = node
            stack.append(node.right)
    
    # Find ancestors of p
    ancestors = set()
    while p:
        ancestors.add(p)
        p = parent[p]
    
    # Find first common ancestor
    while q not in ancestors:
        q = parent[q]
    
    return q

# Companies: Amazon, Microsoft, Facebook, Google, Apple
# Pattern: Tree Traversal
# Time: O(n), Space: O(h)
```

### **Graphs (12 problems)** 🕸️

#### **14. Number of Islands** - LC #200 ⭐⭐⭐⭐
```python
def num_islands(grid):
    if not grid or not grid[0]:
        return 0
    
    rows, cols = len(grid), len(grid[0])
    islands = 0
    
    def dfs(r, c):
        if (r < 0 or r >= rows or c < 0 or c >= cols or 
            grid[r][c] != '1'):
            return
        
        grid[r][c] = '0'  # Mark as visited
        
        # Explore all 4 directions
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        for dr, dc in directions:
            dfs(r + dr, c + dc)
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                islands += 1
                dfs(r, c)
    
    return islands

# BFS approach
from collections import deque

def num_islands_bfs(grid):
    if not grid or not grid[0]:
        return 0
    
    rows, cols = len(grid), len(grid[0])
    islands = 0
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                islands += 1
                queue = deque([(r, c)])
                grid[r][c] = '0'
                
                while queue:
                    curr_r, curr_c = queue.popleft()
                    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
                    
                    for dr, dc in directions:
                        nr, nc = curr_r + dr, curr_c + dc
                        if (0 <= nr < rows and 0 <= nc < cols and 
                            grid[nr][nc] == '1'):
                            queue.append((nr, nc))
                            grid[nr][nc] = '0'
    
    return islands

# Companies: Amazon, Facebook, Google, Microsoft
# Pattern: DFS/BFS on Grid
# Time: O(m*n), Space: O(min(m,n)) for BFS
```

#### **15. Course Schedule** - LC #207 ⭐⭐⭐⭐
```python
def can_finish(num_courses, prerequisites):
    # Build adjacency list
    graph = [[] for _ in range(num_courses)]
    for course, prereq in prerequisites:
        graph[prereq].append(course)
    
    # DFS with three states: 0=unvisited, 1=visiting, 2=visited
    state = [0] * num_courses
    
    def has_cycle(course):
        if state[course] == 1:  # Currently visiting - cycle detected
            return True
        if state[course] == 2:  # Already visited
            return False
        
        state[course] = 1  # Mark as visiting
        
        for neighbor in graph[course]:
            if has_cycle(neighbor):
                return True
        
        state[course] = 2  # Mark as visited
        return False
    
    for course in range(num_courses):
        if has_cycle(course):
            return False
    
    return True

# Topological Sort using Kahn's Algorithm
from collections import deque

def can_finish_topological(num_courses, prerequisites):
    graph = [[] for _ in range(num_courses)]
    indegree = [0] * num_courses
    
    # Build graph and calculate indegrees
    for course, prereq in prerequisites:
        graph[prereq].append(course)
        indegree[course] += 1
    
    # Add all courses with no prerequisites to queue
    queue = deque([i for i in range(num_courses) if indegree[i] == 0])
    completed = 0
    
    while queue:
        course = queue.popleft()
        completed += 1
        
        for neighbor in graph[course]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)
    
    return completed == num_courses

# Companies: Amazon, Google, Facebook, Microsoft
# Pattern: Cycle Detection / Topological Sort
# Time: O(V + E), Space: O(V + E)
```

---

## 📋 **Complete Medium Problems List by Company**

### **Google (Top 25 Medium)**
1. Container With Most Water (LC #11) ⭐⭐⭐⭐⭐
2. Longest Substring Without Repeating Characters (LC #3) ⭐⭐⭐⭐⭐
3. 3Sum (LC #15) ⭐⭐⭐⭐⭐
4. Group Anagrams (LC #49) ⭐⭐⭐⭐
5. Spiral Matrix (LC #54) ⭐⭐⭐⭐
6. Jump Game (LC #55) ⭐⭐⭐
7. Merge Intervals (LC #56) ⭐⭐⭐⭐
8. Unique Paths (LC #62) ⭐⭐⭐
9. Set Matrix Zeroes (LC #73) ⭐⭐⭐
10. Sort Colors (LC #75) ⭐⭐⭐⭐
11. Subsets (LC #78) ⭐⭐⭐⭐
12. Word Search (LC #79) ⭐⭐⭐⭐
13. Remove Duplicates from Sorted Array II (LC #80) ⭐⭐⭐
14. Search in Rotated Sorted Array (LC #33) ⭐⭐⭐⭐
15. Search a 2D Matrix (LC #74) ⭐⭐⭐
16. Binary Tree Level Order Traversal (LC #102) ⭐⭐⭐⭐
17. Binary Tree Zigzag Level Order Traversal (LC #103) ⭐⭐⭐
18. Maximum Depth of Binary Tree (LC #104) ⭐⭐
19. Construct Binary Tree from Preorder and Inorder (LC #105) ⭐⭐⭐⭐
20. Convert Sorted List to Binary Search Tree (LC #109) ⭐⭐⭐
21. Path Sum II (LC #113) ⭐⭐⭐
22. Flatten Binary Tree to Linked List (LC #114) ⭐⭐⭐
23. Populating Next Right Pointers in Each Node (LC #116) ⭐⭐⭐
24. Best Time to Buy and Sell Stock II (LC #122) ⭐⭐⭐
25. Binary Tree Maximum Path Sum (LC #124) ⭐⭐⭐⭐⭐

### **Amazon (Top 25 Medium)**
1. 3Sum (LC #15) ⭐⭐⭐⭐⭐
2. Product of Array Except Self (LC #238) ⭐⭐⭐⭐⭐
3. Top K Frequent Elements (LC #347) ⭐⭐⭐⭐
4. Merge Intervals (LC #56) ⭐⭐⭐⭐
5. Rotate Image (LC #48) ⭐⭐⭐
6. Group Anagrams (LC #49) ⭐⭐⭐⭐
7. Spiral Matrix (LC #54) ⭐⭐⭐⭐
8. Jump Game (LC #55) ⭐⭐⭐
9. Insert Interval (LC #57) ⭐⭐⭐⭐
10. Length of Longest Substring (LC #3) ⭐⭐⭐⭐⭐
11. Add Two Numbers (LC #2) ⭐⭐⭐⭐
12. Copy List with Random Pointer (LC #138) ⭐⭐⭐⭐
13. LRU Cache (LC #146) ⭐⭐⭐⭐⭐
14. Sort List (LC #148) ⭐⭐⭐⭐
15. Evaluate Reverse Polish Notation (LC #150) ⭐⭐⭐
16. Find Peak Element (LC #162) ⭐⭐⭐
17. Compare Version Numbers (LC #165) ⭐⭐⭐
18. Rotate Array (LC #189) ⭐⭐⭐
19. House Robber (LC #198) ⭐⭐⭐⭐
20. Number of Islands (LC #200) ⭐⭐⭐⭐
21. Course Schedule (LC #207) ⭐⭐⭐⭐
22. Implement Trie (LC #208) ⭐⭐⭐⭐
23. House Robber II (LC #213) ⭐⭐⭐⭐
24. Combination Sum (LC #39) ⭐⭐⭐⭐
25. Search in Rotated Sorted Array (LC #33) ⭐⭐⭐⭐

---

## 🎯 **Medium Problems Mastery Strategy**

### **Phase 1: Pattern Recognition (Weeks 1-4)**
- **Arrays & Two Pointers**: 15 problems/week
- **Sliding Window**: 10 problems/week
- **Hash Tables**: 10 problems/week
- **Binary Search**: 8 problems/week

### **Phase 2: Data Structures (Weeks 5-8)**
- **Trees**: 20 problems/week
- **Graphs**: 15 problems/week
- **Linked Lists**: 10 problems/week
- **Stacks/Queues**: 8 problems/week

### **Phase 3: Advanced Patterns (Weeks 9-12)**
- **Dynamic Programming**: 25 problems/week
- **Backtracking**: 15 problems/week
- **Design Problems**: 10 problems/week
- **Mixed Practice**: 20 problems/week

### **Phase 4: Company Focus (Weeks 13-16)**
- **Company-specific problems**: 30 problems/week
- **Mock interviews**: 2-3 sessions/week
- **Speed practice**: Timed sessions
- **Optimization focus**: Multiple solutions per problem

---

## 📊 **Difficulty Progression Guide**

### **Beginner Medium** (50 problems)
Start with these if coming from Easy:
- Array manipulation problems
- Simple tree traversals
- Basic dynamic programming
- Two pointers problems

### **Intermediate Medium** (150 problems)
Build up to these:
- Complex tree algorithms
- Graph problems (DFS/BFS)
- Advanced DP patterns
- Design problems

### **Advanced Medium** (90 problems)
Master these for interviews:
- Optimized solutions
- Multiple approaches per problem
- Complex graph algorithms
- System design-related problems

---

## ⏰ **Time Targets for Interviews**

### **Target Times**
- **Easy-Medium**: 15-20 minutes
- **Medium**: 20-30 minutes  
- **Hard-Medium**: 30-40 minutes

### **Speed Building Strategy**
1. **Week 1-4**: No time pressure, focus on correctness
2. **Week 5-8**: Start timing, allow 1.5x target time
3. **Week 9-12**: Target time practice
4. **Week 13-16**: Beat target time, optimize solutions

---

**🎯 Success Formula**: Pattern mastery + Speed + Clean code + Multiple approaches = Medium Problem Success!

**📈 Progress Tracking**: Solve 3-5 medium problems daily, maintain 80%+ success rate
