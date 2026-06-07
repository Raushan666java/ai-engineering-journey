# Problem Solving & Systematic Debugging 🧩

## Master the Art of Solving Complex Development Problems

---

## Table of Contents

1. [Problem-Solving Mindset](#problem-solving-mindset)
2. [Systematic Approach](#systematic-approach)
3. [DSA Problem-Solving Framework](#dsa-problem-solving-framework)
4. [Common DSA Patterns](#common-dsa-patterns)
5. [How to Learn DSA](#how-to-learn-dsa)
6. [Common Problem Patterns](#common-problem-patterns)
7. [Laravel Common Issues](#laravel-common-issues)
8. [React Common Issues](#react-common-issues)
9. [Performance Problems](#performance-problems)
10. [Security Issues](#security-issues)
11. [Production Debugging](#production-debugging)

---

## Problem-Solving Mindset

### The Expert Developer Mindset

```
1. Stay Calm → Panic leads to mistakes
2. Read Carefully → Error messages contain solutions
3. Reproduce → Can you make it happen again?
4. Isolate → Narrow down the problem area
5. Research → Someone has probably solved this
6. Document → Help others (and future you)
```

### Questions to Ask

```
❓ What changed recently?
❓ Can I reproduce the error?
❓ What's the error message telling me?
❓ What did I assume that might be wrong?
❓ Is this an environment issue?
❓ Are my dependencies up to date?
❓ What does the documentation say?
```

---

## Systematic Approach

### The 5-Step Debugging Process

#### Step 1: Understand the Problem

```
- What is the expected behavior?
- What is the actual behavior?
- When did it start happening?
- Can you reproduce it consistently?
- Does it happen in all environments?
```

#### Step 2: Gather Information

```php
// Add logging
Log::info('Debug Point 1', [
    'user_id' => $userId,
    'data' => $data,
    'request' => $request->all(),
]);

// Use dd() strategically
dd($variable, $anotherVariable);

// Check database state
DB::enableQueryLog();
// ... queries ...
dd(DB::getQueryLog());

// Inspect request
dd(request()->all());
dd(request()->headers->all());
```

```typescript
// JavaScript debugging
console.log("State before:", state);
console.trace("Call stack");
debugger; // Pause execution
```

#### Step 3: Form Hypothesis

```
Based on the information:
- "The query is slow" → Maybe missing index?
- "Component re-renders too much" → Unnecessary dependencies?
- "Authentication fails" → Session/token issue?
- "Database error" → Schema mismatch?
```

#### Step 4: Test Hypothesis

```php
// Test: Is the query slow?
DB::listen(function($query) {
    if ($query->time > 1000) {
        Log::warning('Slow query', ['sql' => $query->sql]);
    }
});

// Test: Is data reaching the controller?
Log::info('Request data', request()->all());

// Test: Is the event firing?
Event::listen(OrderCreated::class, function($event) {
    Log::info('OrderCreated event fired');
});
```

```typescript
// Test: Is component re-rendering?
useEffect(() => {
  console.count("Component rendered");
});

// Test: Is prop changing?
useEffect(() => {
  console.log("Prop changed:", prop);
}, [prop]);
```

#### Step 5: Fix and Verify

```
1. Implement the fix
2. Test the specific scenario
3. Test related scenarios
4. Add tests to prevent regression
5. Document the solution
```

---

## DSA Problem-Solving Framework

### The 6-Step Approach to Any Coding Problem

#### Step 1: Understand the Problem (5 mins)

```
✅ Read the problem 2-3 times
✅ Identify inputs and outputs
✅ Understand constraints (time/space limits)
✅ Clarify ambiguities
✅ Work through examples manually
```

**Key Questions:**

```
❓ What are the input/output formats?
❓ What are the constraints? (array size, value ranges)
❓ Are there edge cases? (empty input, negative numbers, duplicates)
❓ What's the expected time/space complexity?
❓ Can I modify the input?
❓ What should I return for invalid input?
```

**Example: Two Sum Problem**

```
Problem: Find two numbers that add up to target
Input: nums = [2,7,11,15], target = 9
Output: [0,1] (indices of 2 and 7)

Questions to ask:
- Can I use the same element twice? NO
- Is the array sorted? NO
- Are there multiple solutions? Return any one
- Are all numbers positive? Can be negative
- Can array be empty? NO, at least 2 elements
```

#### Step 2: Break Down the Problem (5 mins)

```
🎯 What are the sub-problems?
🎯 What data structures might help?
🎯 What algorithms could solve this?
🎯 Have I seen similar problems?
```

**Mental Checklist:**

```
Is it about:
- Searching/Finding? → Binary Search, Hash Map
- Counting/Frequency? → Hash Map, Array
- Order/Sequence? → Stack, Queue, Sorting
- Paths/Connections? → Graph, DFS, BFS
- Optimization? → DP, Greedy, Binary Search
- Subarrays/Substrings? → Sliding Window, Two Pointers
- Tree operations? → DFS, BFS, Recursion
```

#### Step 3: Think of Solutions (10 mins)

```
Start with BRUTE FORCE:
- Don't worry about optimization yet
- Think of the simplest solution
- What's the time/space complexity?

Then OPTIMIZE:
- Can I eliminate unnecessary work?
- Can I use better data structures?
- Can I sort to make it easier?
- Can I use extra space to save time?
```

**Two Sum - Thought Process:**

```
❌ Brute Force: Check all pairs
   → O(n²) time, O(1) space
   for i in range(n):
       for j in range(i+1, n):
           if nums[i] + nums[j] == target:
               return [i, j]

✅ Optimized: Use HashMap
   → O(n) time, O(n) space
   seen = {}
   for i, num in enumerate(nums):
       complement = target - num
       if complement in seen:
           return [seen[complement], i]
       seen[num] = i
```

#### Step 4: Code the Solution (15-20 mins)

```
✅ Start with main logic
✅ Handle edge cases
✅ Write clean, readable code
✅ Use meaningful variable names
✅ Add comments for complex logic
```

**Coding Template:**

```python
def solve_problem(input_data):
    # 1. Handle edge cases
    if not input_data:
        return default_value

    # 2. Initialize data structures
    result = []
    hash_map = {}

    # 3. Main logic
    for item in input_data:
        # Process each item
        pass

    # 4. Return result
    return result
```

#### Step 5: Test Your Solution (5-10 mins)

```
Test with:
✅ Normal cases (provided examples)
✅ Edge cases (empty, single element)
✅ Large inputs (performance test)
✅ Negative/invalid inputs
✅ Boundary values (min/max)
```

**Testing Checklist:**

```python
# Test Case 1: Normal case
assert two_sum([2,7,11,15], 9) == [0,1]

# Test Case 2: Numbers at end
assert two_sum([3,2,4], 6) == [1,2]

# Test Case 3: Negative numbers
assert two_sum([-1,-2,-3,-4,-5], -8) == [2,4]

# Test Case 4: Large array
assert two_sum([i for i in range(10000)] + [5,5], 10)

# Test Case 5: First two elements
assert two_sum([3,3], 6) == [0,1]
```

#### Step 6: Analyze and Optimize (5 mins)

```
Time Complexity: O(?)
Space Complexity: O(?)

Can I do better?
- Different algorithm?
- Different data structure?
- Mathematical optimization?
- Trade space for time or vice versa?
```

---

## Common DSA Patterns

### Pattern 1: Two Pointers 👉👈

**When to Use:**

- Array/string problems with pairs/triplets
- Sorted arrays
- Palindrome problems
- Removing duplicates

**Template:**

```python
def two_pointers(arr):
    left, right = 0, len(arr) - 1

    while left < right:
        # Process current pair
        if condition:
            # Found answer
            return result
        elif need_larger_sum:
            left += 1  # Move left pointer right
        else:
            right -= 1  # Move right pointer left

    return result
```

**Example Problems:**

```python
# 1. Two Sum II (Sorted Array)
def twoSum(numbers, target):
    left, right = 0, len(numbers) - 1

    while left < right:
        current_sum = numbers[left] + numbers[right]
        if current_sum == target:
            return [left + 1, right + 1]
        elif current_sum < target:
            left += 1
        else:
            right -= 1

# 2. Valid Palindrome
def isPalindrome(s):
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

# 3. Container With Most Water
def maxArea(height):
    left, right = 0, len(height) - 1
    max_area = 0

    while left < right:
        width = right - left
        current_area = min(height[left], height[right]) * width
        max_area = max(max_area, current_area)

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_area
```

### Pattern 2: Sliding Window 🪟

**When to Use:**

- Subarray/substring problems
- Fixed or variable window size
- Maximum/minimum in subarrays
- Longest/shortest substring with condition

**Template:**

```python
def sliding_window(arr, k):
    window_start = 0
    window_sum = 0
    max_sum = float('-inf')

    for window_end in range(len(arr)):
        # Expand window
        window_sum += arr[window_end]

        # Shrink window if needed
        if window_end >= k - 1:
            max_sum = max(max_sum, window_sum)
            window_sum -= arr[window_start]
            window_start += 1

    return max_sum
```

**Example Problems:**

```python
# 1. Maximum Sum Subarray of Size K
def max_sum_subarray(arr, k):
    max_sum = 0
    window_sum = 0
    window_start = 0

    for window_end in range(len(arr)):
        window_sum += arr[window_end]

        if window_end >= k - 1:
            max_sum = max(max_sum, window_sum)
            window_sum -= arr[window_start]
            window_start += 1

    return max_sum

# 2. Longest Substring Without Repeating Characters
def lengthOfLongestSubstring(s):
    char_map = {}
    window_start = 0
    max_length = 0

    for window_end in range(len(s)):
        right_char = s[window_end]

        if right_char in char_map:
            window_start = max(window_start, char_map[right_char] + 1)

        char_map[right_char] = window_end
        max_length = max(max_length, window_end - window_start + 1)

    return max_length

# 3. Minimum Window Substring
def minWindow(s, t):
    from collections import Counter

    if not s or not t:
        return ""

    dict_t = Counter(t)
    required = len(dict_t)
    formed = 0

    window_counts = {}
    ans = float('inf'), None, None
    l = 0

    for r in range(len(s)):
        char = s[r]
        window_counts[char] = window_counts.get(char, 0) + 1

        if char in dict_t and window_counts[char] == dict_t[char]:
            formed += 1

        while l <= r and formed == required:
            char = s[l]

            if r - l + 1 < ans[0]:
                ans = (r - l + 1, l, r)

            window_counts[char] -= 1
            if char in dict_t and window_counts[char] < dict_t[char]:
                formed -= 1

            l += 1

    return "" if ans[0] == float('inf') else s[ans[1]:ans[2] + 1]
```

### Pattern 3: Fast & Slow Pointers 🐢🐇

**When to Use:**

- Cycle detection (linked lists)
- Finding middle element
- Palindrome linked list
- Happy number problem

**Template:**

```python
def has_cycle(head):
    slow = fast = head

    while fast and fast.next:
        slow = slow.next          # Move 1 step
        fast = fast.next.next     # Move 2 steps

        if slow == fast:
            return True  # Cycle detected

    return False
```

**Example Problems:**

```python
# 1. Linked List Cycle
def hasCycle(head):
    slow = fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

# 2. Find Middle of Linked List
def middleNode(head):
    slow = fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    return slow

# 3. Happy Number
def isHappy(n):
    def get_next(num):
        total = 0
        while num > 0:
            digit = num % 10
            total += digit ** 2
            num //= 10
        return total

    slow = fast = n

    while True:
        slow = get_next(slow)
        fast = get_next(get_next(fast))

        if fast == 1:
            return True
        if slow == fast:
            return False
```

### Pattern 4: Binary Search 🔍

**When to Use:**

- Sorted arrays
- Finding elements
- Finding boundaries
- Optimization problems

**Template:**

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2  # Avoid overflow

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # Not found
```

**Example Problems:**

```python
# 1. Search Insert Position
def searchInsert(nums, target):
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return left

# 2. Find Peak Element
def findPeakElement(nums):
    left, right = 0, len(nums) - 1

    while left < right:
        mid = left + (right - left) // 2

        if nums[mid] > nums[mid + 1]:
            right = mid
        else:
            left = mid + 1

    return left

# 3. Square Root (Binary Search on Answer)
def mySqrt(x):
    if x < 2:
        return x

    left, right = 2, x // 2

    while left <= right:
        mid = left + (right - left) // 2
        num = mid * mid

        if num == x:
            return mid
        elif num < x:
            left = mid + 1
        else:
            right = mid - 1

    return right
```

### Pattern 5: DFS (Depth-First Search) 🌳

**When to Use:**

- Tree/graph traversal
- Path finding
- Backtracking problems
- Connected components

**Template:**

```python
# Recursive DFS
def dfs_recursive(node, visited):
    if not node or node in visited:
        return

    visited.add(node)
    # Process node

    for neighbor in node.neighbors:
        dfs_recursive(neighbor, visited)

# Iterative DFS
def dfs_iterative(start):
    stack = [start]
    visited = set()

    while stack:
        node = stack.pop()

        if node in visited:
            continue

        visited.add(node)
        # Process node

        for neighbor in node.neighbors:
            if neighbor not in visited:
                stack.append(neighbor)
```

**Example Problems:**

```python
# 1. Number of Islands
def numIslands(grid):
    if not grid:
        return 0

    def dfs(i, j):
        if (i < 0 or i >= len(grid) or
            j < 0 or j >= len(grid[0]) or
            grid[i][j] == '0'):
            return

        grid[i][j] = '0'  # Mark as visited

        # Visit all 4 directions
        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)

    count = 0
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == '1':
                dfs(i, j)
                count += 1

    return count

# 2. Path Sum
def hasPathSum(root, targetSum):
    if not root:
        return False

    if not root.left and not root.right:
        return targetSum == root.val

    return (hasPathSum(root.left, targetSum - root.val) or
            hasPathSum(root.right, targetSum - root.val))

# 3. All Paths From Source to Target
def allPathsSourceTarget(graph):
    def dfs(node, path):
        if node == len(graph) - 1:
            result.append(path[:])
            return

        for neighbor in graph[node]:
            path.append(neighbor)
            dfs(neighbor, path)
            path.pop()

    result = []
    dfs(0, [0])
    return result
```

### Pattern 6: BFS (Breadth-First Search) 📊

**When to Use:**

- Shortest path (unweighted)
- Level-order traversal
- Minimum steps problems
- All nodes at distance K

**Template:**

```python
from collections import deque

def bfs(start):
    queue = deque([start])
    visited = set([start])

    while queue:
        node = queue.popleft()
        # Process node

        for neighbor in node.neighbors:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
```

**Example Problems:**

```python
# 1. Binary Tree Level Order Traversal
def levelOrder(root):
    if not root:
        return []

    result = []
    queue = deque([root])

    while queue:
        level_size = len(queue)
        current_level = []

        for _ in range(level_size):
            node = queue.popleft()
            current_level.append(node.val)

            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        result.append(current_level)

    return result

# 2. Rotting Oranges
def orangesRotting(grid):
    from collections import deque

    rows, cols = len(grid), len(grid[0])
    queue = deque()
    fresh = 0

    # Find all rotten oranges and count fresh ones
    for i in range(rows):
        for j in range(cols):
            if grid[i][j] == 2:
                queue.append((i, j, 0))
            elif grid[i][j] == 1:
                fresh += 1

    directions = [(0,1), (1,0), (0,-1), (-1,0)]
    minutes = 0

    while queue:
        i, j, minutes = queue.popleft()

        for di, dj in directions:
            ni, nj = i + di, j + dj

            if (0 <= ni < rows and 0 <= nj < cols and
                grid[ni][nj] == 1):
                grid[ni][nj] = 2
                fresh -= 1
                queue.append((ni, nj, minutes + 1))

    return minutes if fresh == 0 else -1

# 3. Word Ladder
def ladderLength(beginWord, endWord, wordList):
    from collections import deque

    wordSet = set(wordList)
    if endWord not in wordSet:
        return 0

    queue = deque([(beginWord, 1)])

    while queue:
        word, length = queue.popleft()

        if word == endWord:
            return length

        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                next_word = word[:i] + c + word[i+1:]

                if next_word in wordSet:
                    wordSet.remove(next_word)
                    queue.append((next_word, length + 1))

    return 0
```

### Pattern 7: Dynamic Programming 💎

**When to Use:**

- Optimization problems (min/max)
- Counting problems
- Overlapping subproblems
- Optimal substructure

**Template:**

```python
# Top-Down (Memoization)
def dp_top_down(n, memo={}):
    if n in memo:
        return memo[n]

    if base_case:
        return base_value

    memo[n] = recursive_call(n)
    return memo[n]

# Bottom-Up (Tabulation)
def dp_bottom_up(n):
    dp = [0] * (n + 1)
    dp[0] = base_value

    for i in range(1, n + 1):
        dp[i] = calculate_from_previous(dp)

    return dp[n]
```

**Example Problems:**

```python
# 1. Fibonacci
def fib(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n

    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]

# 2. Climbing Stairs
def climbStairs(n):
    if n <= 2:
        return n

    dp = [0] * (n + 1)
    dp[1], dp[2] = 1, 2

    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]

    return dp[n]

# 3. Coin Change
def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0

    for i in range(1, amount + 1):
        for coin in coins:
            if i >= coin:
                dp[i] = min(dp[i], dp[i - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1

# 4. Longest Increasing Subsequence
def lengthOfLIS(nums):
    if not nums:
        return 0

    dp = [1] * len(nums)

    for i in range(1, len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)
```

---

## How to Learn DSA

### Phase 1: Foundation (Week 1-4)

**Week 1-2: Basic Data Structures**

```
Day 1-2: Arrays & Strings
- Basic operations, Two Pointers
- Practice: 10 easy problems

Day 3-4: Linked Lists
- Singly, Doubly, Circular
- Practice: 8 easy problems

Day 5-6: Stacks & Queues
- Implementation, Applications
- Practice: 8 easy problems

Day 7: Review & Practice
- Solve 5 mixed problems
```

**Week 3-4: More Data Structures**

```
Day 1-2: Hash Tables
- Hash Map, Hash Set
- Practice: 10 problems

Day 3-4: Trees
- Binary Tree, BST, Traversals
- Practice: 10 problems

Day 5-6: Heaps & Priority Queue
- Min/Max Heap
- Practice: 8 problems

Day 7: Review & Practice
```

### Phase 2: Algorithms (Week 5-8)

**Week 5-6: Searching & Sorting**

```
Day 1-2: Binary Search
- Template, Variations
- Practice: 10 problems

Day 3-4: Sorting Algorithms
- Quick Sort, Merge Sort
- Practice: 8 problems

Day 5-6: Two Pointers & Sliding Window
- Patterns, Applications
- Practice: 10 problems

Day 7: Review
```

**Week 7-8: Graph & Advanced**

```
Day 1-2: DFS & BFS
- Traversals, Applications
- Practice: 10 problems

Day 3-4: Dynamic Programming
- Patterns, Common Problems
- Practice: 8 problems

Day 5-6: Backtracking
- Template, Variations
- Practice: 8 problems

Day 7: Review
```

### Phase 3: Mastery (Week 9-12)

**Week 9-10: Medium Problems**

```
- Solve 3-4 medium problems daily
- Focus on pattern recognition
- Time yourself (45 mins per problem)
- Review solutions
```

**Week 11-12: Interview Prep**

```
- Mock interviews
- Hard problems (1-2 daily)
- Company-specific problems
- System design basics
```

### Learning Resources

**Platforms (in order of recommendation):**

```
1. LeetCode - Best for interview prep
   - Start with Easy → Medium → Hard
   - Follow Explore cards
   - Join weekly contests

2. NeetCode.io - Curated problem list
   - 150 essential problems
   - Video solutions
   - Pattern-based approach

3. Codeforces - Competitive programming
   - Good for speed and accuracy
   - Regular contests

4. GeeksforGeeks - Theory + Practice
   - Good explanations
   - Many examples
```

**Books:**

```
1. "Cracking the Coding Interview" - Gayle Laakmann McDowell
2. "Elements of Programming Interviews" - Aziz, Lee, Prakash
3. "Introduction to Algorithms" - CLRS (reference)
```

**YouTube Channels:**

```
1. NeetCode
2. Abdul Bari (algorithms)
3. Back To Back SWE
4. Tech With Tim
```

### Daily Practice Routine

**Weekday (2-3 hours):**

```
08:00-08:30 → Review previous day's problems
08:30-09:30 → Solve 1-2 new problems
09:30-10:00 → Read solutions & learn new patterns
10:00-10:30 → Implement optimal solution
```

**Weekend (4-5 hours):**

```
Morning → Theory (data structure/algorithm)
Afternoon → Solve 3-4 problems
Evening → Contest or Mock Interview
Night → Review and document learnings
```

### Problem-Solving Tracker

**Track Your Progress:**

```markdown
# Problem Tracker

## Week 1: Arrays & Strings

| #   | Problem                | Difficulty | Status | Time | Notes         |
| --- | ---------------------- | ---------- | ------ | ---- | ------------- |
| 1   | Two Sum                | Easy       | ✅     | 15m  | Hash map O(n) |
| 2   | Valid Palindrome       | Easy       | ✅     | 20m  | Two pointers  |
| 3   | Best Time to Buy Stock | Easy       | ✅     | 25m  | Min so far    |
| 4   | Container With Water   | Medium     | ❌     | 45m  | Need review   |

## Patterns Mastered

- ✅ Two Pointers
- ✅ Hash Map
- 🔄 Sliding Window (in progress)
- ❌ Binary Search (not started)

## Weekly Goals

- [ ] Solve 15 problems
- [ ] Master Two Pointers pattern
- [ ] Complete LeetCode Explore: Arrays
- [ ] Watch 3 NeetCode videos
```

### Tips for Effective Learning

**1. Understand, Don't Memorize**

```
❌ Bad: Memorizing code
✅ Good: Understanding the approach

Ask yourself:
- Why does this work?
- What's the intuition?
- When can I apply this pattern?
- What are the tradeoffs?
```

**2. Start Simple, Then Optimize**

```
Step 1: Brute force solution (even if slow)
Step 2: Identify bottlenecks
Step 3: Optimize with better DS/algorithm
Step 4: Analyze time/space complexity
```

**3. Learn Patterns, Not Problems**

```
Instead of: "I solved 300 random problems"
Aim for: "I mastered 15 core patterns"

Patterns are reusable!
One pattern = 20-30 problems solved
```

**4. Practice Deliberately**

```
✅ Time yourself
✅ Practice without IDE first (pen & paper)
✅ Explain your solution out loud
✅ Review even solved problems
✅ Participate in contests
```

**5. Build Intuition**

```
Before coding:
- Draw examples
- Find patterns manually
- Think of edge cases
- Estimate complexity

This saves time!
```

---

## Common Problem Patterns

### Pattern 1: "It works on my machine"

```
Causes:
- Environment differences
- Missing dependencies
- Different PHP/Node versions
- Database state differences
- Environment variables

Solution:
✅ Use Docker for consistent environments
✅ Document all dependencies
✅ Version control .env.example
✅ Use Laravel Sail
✅ Check PHP/Node versions match
```

```bash
# Check versions
php --version
node --version
composer show
npm list

# Docker ensures consistency
docker-compose up
```

### Pattern 2: "It worked yesterday"

```
Causes:
- Recent code changes
- Dependency updates
- Database migrations
- Configuration changes
- Cache issues

Solution:
✅ Check git history
✅ Review recent PRs
✅ Check composer.lock/package-lock.json
✅ Clear caches
✅ Review recent migrations
```

```bash
# Git history
git log --since="1 day ago" --oneline
git diff HEAD~1

# Check dependency changes
git diff composer.lock
git diff package-lock.json

# Clear caches
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
npm run build
```

### Pattern 3: "Random failures"

```
Causes:
- Race conditions
- Async timing issues
- Flaky tests
- External API inconsistency
- Memory leaks

Solution:
✅ Add proper error handling
✅ Implement retry logic
✅ Use transactions
✅ Add logging
✅ Fix test dependencies
```

```php
// Retry logic
use Illuminate\Support\Facades\Http;

$response = retry(3, function () {
    return Http::get('https://api.example.com/data');
}, 100); // 100ms delay between retries

// Transaction for consistency
DB::transaction(function () {
    // Multiple operations that must all succeed
});
```

---

## Laravel Common Issues

### Issue 1: 419 CSRF Token Mismatch

```php
// Problem: Form submission fails with 419

// Causes:
1. Missing CSRF token in form
2. Session expired
3. Cookie domain mismatch
4. Middleware misconfiguration

// Solutions:

// ✅ Add CSRF token to forms
<form method="POST">
    @csrf
    <!-- form fields -->
</form>

// ✅ Add to AJAX requests
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

// ✅ Configure session in .env
SESSION_DRIVER=file
SESSION_LIFETIME=120
SESSION_DOMAIN=.yourdomain.com

// ✅ Exclude routes from CSRF (if needed)
// app/Http/Middleware/VerifyCsrfToken.php
protected $except = [
    'api/*',
    'webhook/*',
];
```

### Issue 2: N+1 Query Problem

```php
// Problem: Page loads slowly due to many queries

// ❌ Bad: N+1 queries
$posts = Post::all(); // 1 query
foreach ($posts as $post) {
    echo $post->author->name; // N queries (one per post)
}

// ✅ Good: Eager loading
$posts = Post::with('author')->get(); // 2 queries total
foreach ($posts as $post) {
    echo $post->author->name; // No additional queries
}

// ✅ Nested relationships
$posts = Post::with(['author', 'comments.user'])->get();

// ✅ Conditional eager loading
$posts = Post::with([
    'author',
    'comments' => function ($query) {
        $query->where('approved', true);
    }
])->get();

// Debug: Use Laravel Debugbar to see queries
composer require barryvdh/laravel-debugbar --dev
```

### Issue 3: Queue Jobs Not Processing

```php
// Problem: Jobs stay in queue and don't process

// Causes & Solutions:

// 1. Queue worker not running
// ✅ Check if worker is running
php artisan queue:work

// ✅ Use Supervisor for production
// /etc/supervisor/conf.d/laravel-worker.conf
[program:laravel-worker]
command=php /path/to/artisan queue:work --tries=3
autostart=true
autorestart=true
user=www-data
redirect_stderr=true
stdout_logfile=/path/to/worker.log

// 2. Failed jobs not retrying
// ✅ Check failed jobs
php artisan queue:failed

// ✅ Retry failed job
php artisan queue:retry {id}

// ✅ Configure retries in job
class ProcessOrder implements ShouldQueue
{
    public $tries = 3;
    public $timeout = 120;
    public $backoff = [30, 60, 120]; // Exponential backoff
}

// 3. Wrong queue connection
// ✅ Check .env
QUEUE_CONNECTION=database

// ✅ Ensure tables exist
php artisan queue:table
php artisan migrate
```

### Issue 4: Memory Limit Exceeded

```php
// Problem: Script runs out of memory

// Causes & Solutions:

// ❌ Bad: Loading all records
$users = User::all(); // Loads everything into memory
foreach ($users as $user) {
    // Process
}

// ✅ Good: Use chunking
User::chunk(100, function ($users) {
    foreach ($users as $user) {
        // Process in batches
    }
});

// ✅ Better: Use lazy loading
User::lazy()->each(function ($user) {
    // Process one at a time
});

// ✅ Use cursor for large datasets
foreach (User::cursor() as $user) {
    // Memory efficient
}

// ✅ Increase memory limit temporarily
ini_set('memory_limit', '512M');

// ✅ Configure in php.ini for production
memory_limit = 256M
```

### Issue 5: Route Not Found

```php
// Problem: 404 error on existing route

// Causes & Solutions:

// 1. Route cache outdated
php artisan route:clear
php artisan route:cache

// 2. Route defined in wrong file
// Check web.php vs api.php

// 3. Middleware blocking access
// Check route middleware

// 4. Route parameters mismatch
// ❌ Bad
Route::get('/users/{user_id}', ...);
// In controller: public function show($userId) // Parameter name mismatch!

// ✅ Good
Route::get('/users/{userId}', ...);
// In controller: public function show($userId) // Matches!

// 5. List all routes to verify
php artisan route:list --name=users
```

---

## React Common Issues

### Issue 1: Infinite Re-render Loop

```typescript
// Problem: Component keeps re-rendering infinitely

// ❌ Cause 1: setState in render
function BadComponent() {
    const [count, setCount] = useState(0);

    // This runs on every render!
    setCount(count + 1);

    return <div>{count}</div>;
}

// ✅ Solution: Use useEffect
function GoodComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count + 1);
    }, []); // Empty deps = run once

    return <div>{count}</div>;
}

// ❌ Cause 2: Missing dependencies
function BadComponent({ userId }: Props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser(userId).then(setUser);
    }, []); // Missing userId dependency!

    return <div>{user?.name}</div>;
}

// ✅ Solution: Include all dependencies
function GoodComponent({ userId }: Props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let cancelled = false;

        fetchUser(userId).then(data => {
            if (!cancelled) setUser(data);
        });

        return () => { cancelled = true; };
    }, [userId]); // Correct dependencies

    return <div>{user?.name}</div>;
}

// ❌ Cause 3: Object/array dependencies
function BadComponent() {
    const [data, setData] = useState(null);
    const options = { page: 1 }; // New object every render!

    useEffect(() => {
        fetchData(options).then(setData);
    }, [options]); // options changes every render!

    return <div>{data}</div>;
}

// ✅ Solution: useMemo for object dependencies
function GoodComponent() {
    const [data, setData] = useState(null);
    const options = useMemo(() => ({ page: 1 }), []); // Stable reference

    useEffect(() => {
        fetchData(options).then(setData);
    }, [options]);

    return <div>{data}</div>;
}
```

### Issue 2: Stale Closure

```typescript
// Problem: Function uses old state value

// ❌ Bad: Stale closure
function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1); // Always uses initial count (0)
        }, 1000);

        return () => clearInterval(interval);
    }, []); // Empty deps

    return <div>{count}</div>;
}

// ✅ Good: Use functional update
function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(c => c + 1); // Uses current count
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <div>{count}</div>;
}

// ✅ Alternative: Include dependency
function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [count]); // Include count

    return <div>{count}</div>;
}
```

### Issue 3: Memory Leaks

```typescript
// Problem: Component updates after unmount

// ❌ Bad: No cleanup
function UserProfile({ userId }: Props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser(userId).then(data => {
            setUser(data); // Error if component unmounted!
        });
    }, [userId]);

    return <div>{user?.name}</div>;
}

// ✅ Good: Cleanup function
function UserProfile({ userId }: Props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let cancelled = false;

        fetchUser(userId).then(data => {
            if (!cancelled) {
                setUser(data);
            }
        });

        return () => {
            cancelled = true; // Cleanup
        };
    }, [userId]);

    return <div>{user?.name}</div>;
}

// ✅ Good: AbortController for fetch
function UserProfile({ userId }: Props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        fetch(`/api/users/${userId}`, {
            signal: controller.signal
        })
            .then(res => res.json())
            .then(setUser)
            .catch(err => {
                if (err.name !== 'AbortError') {
                    console.error(err);
                }
            });

        return () => controller.abort();
    }, [userId]);

    return <div>{user?.name}</div>;
}
```

### Issue 4: Props Not Updating

```typescript
// Problem: Component doesn't reflect prop changes

// ❌ Bad: Copying props to state without updates
function BadComponent({ initialValue }: Props) {
    const [value, setValue] = useState(initialValue);
    // If initialValue changes, state doesn't update!

    return <input value={value} onChange={e => setValue(e.target.value)} />;
}

// ✅ Good: Controlled component
function GoodComponent({ value, onChange }: Props) {
    return <input value={value} onChange={e => onChange(e.target.value)} />;
}

// ✅ Alternative: Sync with useEffect
function Component({ initialValue }: Props) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return <input value={value} onChange={e => setValue(e.target.value)} />;
}

// ✅ Best: Use key to reset component
<Component key={userId} initialValue={user.name} />
// When userId changes, component remounts with new initial value
```

---

## Performance Problems

### Slow Database Queries

```php
// Identify slow queries
DB::listen(function($query) {
    if ($query->time > 1000) {
        Log::warning('Slow Query', [
            'sql' => $query->sql,
            'time' => $query->time,
            'bindings' => $query->bindings,
        ]);
    }
});

// Solutions:

// 1. Add indexes
Schema::table('users', function (Blueprint $table) {
    $table->index('email');
    $table->index(['status', 'created_at']);
});

// 2. Use select() to limit columns
User::select('id', 'name', 'email')->get();

// 3. Paginate large datasets
User::paginate(20);

// 4. Use database caching
Cache::remember('users.active', 3600, function () {
    return User::where('active', true)->get();
});

// 5. Optimize joins
// ❌ Bad
$users = DB::table('users')
    ->join('posts', 'users.id', '=', 'posts.user_id')
    ->get(); // Cartesian product!

// ✅ Good
$users = User::with('posts')->get(); // Separate queries
```

### Slow Frontend Rendering

```typescript
// 1. Use React DevTools Profiler
// Identify components that re-render often

// 2. Memoize expensive calculations
const expensiveValue = useMemo(() => {
  return calculateExpensiveValue(data);
}, [data]);

// 3. Virtual scrolling for long lists
import { FixedSizeList } from "react-window";

// 4. Code splitting
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

// 5. Debounce user input
const debouncedSearch = useDebounce(searchTerm, 300);
```

---

**Next**: [Career Growth →](./10_CAREER_GROWTH.md)
