# 🎭 Dynamic Programming - Complete Guide

## 📚 **Dynamic Programming Fundamentals**

### **What is Dynamic Programming?**
Dynamic Programming (DP) is an algorithmic technique that solves complex problems by **breaking them down into simpler subproblems** and **storing the results** to avoid redundant calculations.

### **Key Principles**
1. **Optimal Substructure**: Optimal solution contains optimal solutions to subproblems
2. **Overlapping Subproblems**: Same subproblems are solved multiple times
3. **Memoization**: Store results to avoid recomputation

### **DP vs Divide & Conquer vs Greedy**
| Aspect | DP | Divide & Conquer | Greedy |
|--------|----|-----------------|---------| 
| Subproblems | Overlapping | Independent | No subproblems |
| Storage | Memoize results | No storage | No storage |
| Approach | Bottom-up/Top-down | Recursive | Local optimum |
| Complexity | Often O(n²) | Often O(n log n) | Often O(n log n) |

### **Two Approaches to DP**
1. **Top-Down (Memoization)**: Recursive with caching
2. **Bottom-Up (Tabulation)**: Iterative, fill table from base cases

---

## 🏗️ **Basic DP Patterns**

### **1. Fibonacci Sequence - The Classic Example**

#### **Naive Recursive (Exponential)**
```python
def fibonacci_naive(n):
    """
    Naive recursive approach
    Time: O(2^n), Space: O(n)
    """
    if n <= 1:
        return n
    return fibonacci_naive(n-1) + fibonacci_naive(n-2)

# Problem: Recalculates same values many times
# fib(5) calls fib(4) and fib(3)
# fib(4) calls fib(3) and fib(2)
# fib(3) is calculated twice!
```

#### **Top-Down DP (Memoization)**
```python
def fibonacci_memo(n, memo={}):
    """
    Top-down DP with memoization
    Time: O(n), Space: O(n)
    """
    if n in memo:
        return memo[n]
    
    if n <= 1:
        return n
    
    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]

# Alternative with decorator
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci_lru(n):
    if n <= 1:
        return n
    return fibonacci_lru(n-1) + fibonacci_lru(n-2)
```

#### **Bottom-Up DP (Tabulation)**
```python
def fibonacci_dp(n):
    """
    Bottom-up DP with tabulation
    Time: O(n), Space: O(n)
    """
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]

def fibonacci_optimized(n):
    """
    Space-optimized version
    Time: O(n), Space: O(1)
    """
    if n <= 1:
        return n
    
    prev2, prev1 = 0, 1
    
    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2, prev1 = prev1, current
    
    return prev1
```

---

## 💰 **Knapsack Problems**

### **1. 0/1 Knapsack Problem**
```python
def knapsack_01(weights, values, capacity):
    """
    0/1 Knapsack: Each item can be taken at most once
    Time: O(n * capacity), Space: O(n * capacity)
    """
    n = len(weights)
    
    # dp[i][w] = maximum value with first i items and weight limit w
    dp = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            # Don't take current item
            dp[i][w] = dp[i-1][w]
            
            # Take current item if possible
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w], 
                              dp[i-1][w - weights[i-1]] + values[i-1])
    
    return dp[n][capacity]

def knapsack_01_optimized(weights, values, capacity):
    """
    Space-optimized 0/1 knapsack
    Time: O(n * capacity), Space: O(capacity)
    """
    dp = [0] * (capacity + 1)
    
    for i in range(len(weights)):
        # Traverse backwards to avoid using updated values
        for w in range(capacity, weights[i] - 1, -1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    
    return dp[capacity]

def knapsack_01_with_items(weights, values, capacity):
    """
    Return both maximum value and items selected
    """
    n = len(weights)
    dp = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)]
    
    # Fill DP table
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            dp[i][w] = dp[i-1][w]
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w], 
                              dp[i-1][w - weights[i-1]] + values[i-1])
    
    # Backtrack to find items
    w = capacity
    selected_items = []
    
    for i in range(n, 0, -1):
        if dp[i][w] != dp[i-1][w]:
            selected_items.append(i-1)  # Item index
            w -= weights[i-1]
    
    return dp[n][capacity], selected_items[::-1]

# Example usage
weights = [2, 1, 3]
values = [12, 10, 20]
capacity = 5

max_value = knapsack_01(weights, values, capacity)
max_value_opt = knapsack_01_optimized(weights, values, capacity)
max_val, items = knapsack_01_with_items(weights, values, capacity)

print(f"Maximum value: {max_value}")  # 32
print(f"Items selected: {items}")     # [1, 2] (indices)
```

### **2. Unbounded Knapsack**
```python
def knapsack_unbounded(weights, values, capacity):
    """
    Unbounded knapsack: Each item can be taken multiple times
    Time: O(n * capacity), Space: O(capacity)
    """
    dp = [0] * (capacity + 1)
    
    for w in range(1, capacity + 1):
        for i in range(len(weights)):
            if weights[i] <= w:
                dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    
    return dp[capacity]

# Alternative approach
def knapsack_unbounded_v2(weights, values, capacity):
    """Alternative implementation"""
    dp = [0] * (capacity + 1)
    
    for i in range(len(weights)):
        for w in range(weights[i], capacity + 1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    
    return dp[capacity]
```

---

## 📐 **Linear DP Problems**

### **1. Longest Increasing Subsequence (LIS)**
```python
def lis_dp(nums):
    """
    Longest Increasing Subsequence using DP
    Time: O(n²), Space: O(n)
    """
    if not nums:
        return 0
    
    n = len(nums)
    dp = [1] * n  # dp[i] = length of LIS ending at index i
    
    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    return max(dp)

def lis_binary_search(nums):
    """
    LIS using binary search (optimal)
    Time: O(n log n), Space: O(n)
    """
    import bisect
    
    tails = []  # tails[i] = smallest tail element for LIS of length i+1
    
    for num in nums:
        pos = bisect.bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    
    return len(tails)

def lis_with_sequence(nums):
    """
    Return both length and actual LIS sequence
    """
    if not nums:
        return 0, []
    
    n = len(nums)
    dp = [1] * n
    parent = [-1] * n
    
    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i] and dp[j] + 1 > dp[i]:
                dp[i] = dp[j] + 1
                parent[i] = j
    
    # Find the index with maximum LIS length
    max_length = max(dp)
    max_index = dp.index(max_length)
    
    # Reconstruct the sequence
    lis = []
    current = max_index
    while current != -1:
        lis.append(nums[current])
        current = parent[current]
    
    return max_length, lis[::-1]

# Example
nums = [10, 9, 2, 5, 3, 7, 101, 18]
length = lis_dp(nums)
length_opt = lis_binary_search(nums)
length_seq, sequence = lis_with_sequence(nums)

print(f"LIS length: {length}")        # 4
print(f"LIS sequence: {sequence}")    # [2, 3, 7, 18]
```

### **2. Longest Common Subsequence (LCS)**
```python
def lcs_length(text1, text2):
    """
    Length of Longest Common Subsequence
    Time: O(m * n), Space: O(m * n)
    """
    m, n = len(text1), len(text2)
    
    # dp[i][j] = LCS length of text1[:i] and text2[:j]
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    return dp[m][n]

def lcs_string(text1, text2):
    """
    Return the actual LCS string
    """
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Fill DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    # Backtrack to find LCS
    lcs = []
    i, j = m, n
    
    while i > 0 and j > 0:
        if text1[i-1] == text2[j-1]:
            lcs.append(text1[i-1])
            i -= 1
            j -= 1
        elif dp[i-1][j] > dp[i][j-1]:
            i -= 1
        else:
            j -= 1
    
    return ''.join(reversed(lcs))

def lcs_optimized(text1, text2):
    """
    Space-optimized LCS (only length)
    Time: O(m * n), Space: O(min(m, n))
    """
    # Ensure text2 is shorter
    if len(text1) < len(text2):
        text1, text2 = text2, text1
    
    m, n = len(text1), len(text2)
    prev = [0] * (n + 1)
    curr = [0] * (n + 1)
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                curr[j] = prev[j-1] + 1
            else:
                curr[j] = max(prev[j], curr[j-1])
        prev, curr = curr, prev
    
    return prev[n]

# Example
text1 = "abcde"
text2 = "ace"
lcs_len = lcs_length(text1, text2)
lcs_str = lcs_string(text1, text2)
print(f"LCS length: {lcs_len}")  # 3
print(f"LCS string: {lcs_str}")  # "ace"
```

### **3. Edit Distance (Levenshtein Distance)**
```python
def edit_distance(word1, word2):
    """
    Minimum edit distance between two strings
    Operations: insert, delete, replace
    Time: O(m * n), Space: O(m * n)
    """
    m, n = len(word1), len(word2)
    
    # dp[i][j] = min operations to convert word1[:i] to word2[:j]
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Base cases
    for i in range(m + 1):
        dp[i][0] = i  # Delete all characters
    for j in range(n + 1):
        dp[0][j] = j  # Insert all characters
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]  # No operation needed
            else:
                dp[i][j] = 1 + min(
                    dp[i-1][j],      # Delete
                    dp[i][j-1],      # Insert
                    dp[i-1][j-1]     # Replace
                )
    
    return dp[m][n]

def edit_distance_optimized(word1, word2):
    """
    Space-optimized version
    Time: O(m * n), Space: O(min(m, n))
    """
    if len(word1) < len(word2):
        word1, word2 = word2, word1
    
    m, n = len(word1), len(word2)
    prev = list(range(n + 1))
    curr = [0] * (n + 1)
    
    for i in range(1, m + 1):
        curr[0] = i
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                curr[j] = prev[j-1]
            else:
                curr[j] = 1 + min(prev[j], curr[j-1], prev[j-1])
        prev, curr = curr, prev
    
    return prev[n]

# Example
word1 = "horse"
word2 = "ros"
distance = edit_distance(word1, word2)
print(f"Edit distance: {distance}")  # 3 (horse -> ros)
```

---

## 🏠 **House Robber Series**

### **1. House Robber I**
```python
def rob_linear(nums):
    """
    Rob houses in a line (cannot rob adjacent houses)
    Time: O(n), Space: O(1)
    """
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    
    prev2 = nums[0]
    prev1 = max(nums[0], nums[1])
    
    for i in range(2, len(nums)):
        current = max(prev1, prev2 + nums[i])
        prev2, prev1 = prev1, current
    
    return prev1

def rob_linear_dp(nums):
    """
    DP table version for clarity
    """
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    
    n = len(nums)
    dp = [0] * n
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])
    
    for i in range(2, n):
        dp[i] = max(dp[i-1], dp[i-2] + nums[i])
    
    return dp[n-1]
```

### **2. House Robber II (Circular)**
```python
def rob_circular(nums):
    """
    Houses arranged in circle (first and last are adjacent)
    Time: O(n), Space: O(1)
    """
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    if len(nums) == 2:
        return max(nums)
    
    def rob_range(start, end):
        prev2 = prev1 = 0
        for i in range(start, end):
            current = max(prev1, prev2 + nums[i])
            prev2, prev1 = prev1, current
        return prev1
    
    # Case 1: Rob first house (cannot rob last)
    case1 = rob_range(0, len(nums) - 1)
    
    # Case 2: Don't rob first house (can rob last)
    case2 = rob_range(1, len(nums))
    
    return max(case1, case2)
```

---

## 📊 **2D DP Problems**

### **1. Unique Paths**
```python
def unique_paths(m, n):
    """
    Number of unique paths in m x n grid
    Time: O(m * n), Space: O(m * n)
    """
    dp = [[1] * n for _ in range(m)]
    
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
    
    return dp[m-1][n-1]

def unique_paths_optimized(m, n):
    """
    Space-optimized version
    Time: O(m * n), Space: O(n)
    """
    dp = [1] * n
    
    for i in range(1, m):
        for j in range(1, n):
            dp[j] += dp[j-1]
    
    return dp[n-1]

def unique_paths_with_obstacles(obstacleGrid):
    """
    Unique paths with obstacles
    """
    if not obstacleGrid or obstacleGrid[0][0] == 1:
        return 0
    
    m, n = len(obstacleGrid), len(obstacleGrid[0])
    dp = [[0] * n for _ in range(m)]
    dp[0][0] = 1
    
    # Fill first row
    for j in range(1, n):
        dp[0][j] = dp[0][j-1] if obstacleGrid[0][j] == 0 else 0
    
    # Fill first column
    for i in range(1, m):
        dp[i][0] = dp[i-1][0] if obstacleGrid[i][0] == 0 else 0
    
    # Fill rest of the grid
    for i in range(1, m):
        for j in range(1, n):
            if obstacleGrid[i][j] == 0:
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
    
    return dp[m-1][n-1]
```

### **2. Minimum Path Sum**
```python
def min_path_sum(grid):
    """
    Find minimum path sum from top-left to bottom-right
    Time: O(m * n), Space: O(1) - modify input
    """
    if not grid:
        return 0
    
    m, n = len(grid), len(grid[0])
    
    # Fill first row
    for j in range(1, n):
        grid[0][j] += grid[0][j-1]
    
    # Fill first column
    for i in range(1, m):
        grid[i][0] += grid[i-1][0]
    
    # Fill rest of the grid
    for i in range(1, m):
        for j in range(1, n):
            grid[i][j] += min(grid[i-1][j], grid[i][j-1])
    
    return grid[m-1][n-1]

def min_path_sum_no_modify(grid):
    """
    Without modifying input grid
    """
    m, n = len(grid), len(grid[0])
    dp = [[0] * n for _ in range(m)]
    
    dp[0][0] = grid[0][0]
    
    # Fill first row
    for j in range(1, n):
        dp[0][j] = dp[0][j-1] + grid[0][j]
    
    # Fill first column
    for i in range(1, m):
        dp[i][0] = dp[i-1][0] + grid[i][0]
    
    # Fill rest
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    
    return dp[m-1][n-1]
```

---

## 🎯 **Advanced DP Patterns**

### **1. Palindrome Problems**

#### **Longest Palindromic Subsequence**
```python
def longest_palindromic_subsequence(s):
    """
    Length of longest palindromic subsequence
    Time: O(n²), Space: O(n²)
    """
    n = len(s)
    dp = [[0] * n for _ in range(n)]
    
    # Every single character is a palindrome of length 1
    for i in range(n):
        dp[i][i] = 1
    
    # Check for palindromes of length 2 and more
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            
            if s[i] == s[j]:
                if length == 2:
                    dp[i][j] = 2
                else:
                    dp[i][j] = dp[i+1][j-1] + 2
            else:
                dp[i][j] = max(dp[i+1][j], dp[i][j-1])
    
    return dp[0][n-1]
```

#### **Longest Palindromic Substring**
```python
def longest_palindromic_substring(s):
    """
    Find longest palindromic substring
    Time: O(n²), Space: O(n²)
    """
    n = len(s)
    if n == 0:
        return ""
    
    dp = [[False] * n for _ in range(n)]
    start = 0
    max_len = 1
    
    # Every character is palindrome
    for i in range(n):
        dp[i][i] = True
    
    # Check for 2-character palindromes
    for i in range(n - 1):
        if s[i] == s[i + 1]:
            dp[i][i + 1] = True
            start = i
            max_len = 2
    
    # Check for palindromes of length 3 and more
    for length in range(3, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            
            if s[i] == s[j] and dp[i + 1][j - 1]:
                dp[i][j] = True
                start = i
                max_len = length
    
    return s[start:start + max_len]

def longest_palindromic_substring_expand(s):
    """
    Expand around centers approach
    Time: O(n²), Space: O(1)
    """
    if not s:
        return ""
    
    start = 0
    max_len = 1
    
    def expand_around_center(left, right):
        while (left >= 0 and right < len(s) and s[left] == s[right]):
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
```

### **2. Partition Problems**

#### **Palindrome Partitioning**
```python
def min_palindrome_partitions(s):
    """
    Minimum cuts needed to partition string into palindromes
    Time: O(n²), Space: O(n²)
    """
    n = len(s)
    if n <= 1:
        return 0
    
    # Check if substring is palindrome
    is_palindrome = [[False] * n for _ in range(n)]
    
    # Fill palindrome table
    for i in range(n):
        is_palindrome[i][i] = True
    
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            if s[i] == s[j]:
                if length == 2:
                    is_palindrome[i][j] = True
                else:
                    is_palindrome[i][j] = is_palindrome[i + 1][j - 1]
    
    # DP for minimum cuts
    cuts = [0] * n
    
    for i in range(n):
        if is_palindrome[0][i]:
            cuts[i] = 0
        else:
            cuts[i] = float('inf')
            for j in range(i):
                if is_palindrome[j + 1][i]:
                    cuts[i] = min(cuts[i], cuts[j] + 1)
    
    return cuts[n - 1]
```

### **3. Stock Problems**

#### **Best Time to Buy and Sell Stock (Multiple Variations)**
```python
def max_profit_one_transaction(prices):
    """
    At most one transaction
    Time: O(n), Space: O(1)
    """
    if not prices:
        return 0
    
    min_price = prices[0]
    max_profit = 0
    
    for price in prices[1:]:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    
    return max_profit

def max_profit_unlimited_transactions(prices):
    """
    Unlimited transactions
    Time: O(n), Space: O(1)
    """
    profit = 0
    for i in range(1, len(prices)):
        if prices[i] > prices[i-1]:
            profit += prices[i] - prices[i-1]
    return profit

def max_profit_two_transactions(prices):
    """
    At most two transactions
    Time: O(n), Space: O(1)
    """
    if not prices:
        return 0
    
    # First transaction
    buy1 = -prices[0]
    sell1 = 0
    
    # Second transaction
    buy2 = -prices[0]
    sell2 = 0
    
    for price in prices[1:]:
        sell2 = max(sell2, buy2 + price)
        buy2 = max(buy2, sell1 - price)
        sell1 = max(sell1, buy1 + price)
        buy1 = max(buy1, -price)
    
    return sell2

def max_profit_k_transactions(k, prices):
    """
    At most k transactions
    Time: O(nk), Space: O(k)
    """
    if not prices or k == 0:
        return 0
    
    n = len(prices)
    
    # If k >= n//2, equivalent to unlimited transactions
    if k >= n // 2:
        return max_profit_unlimited_transactions(prices)
    
    # buy[i] = max profit after at most i+1 transactions, holding stock
    # sell[i] = max profit after at most i+1 transactions, not holding stock
    buy = [-prices[0]] * k
    sell = [0] * k
    
    for price in prices[1:]:
        for i in range(k-1, -1, -1):
            sell[i] = max(sell[i], buy[i] + price)
            buy[i] = max(buy[i], (sell[i-1] if i > 0 else 0) - price)
    
    return sell[k-1]
```

---

## 📈 **Flowchart: DP Problem Solving Process**

```
         [START]
            ↓
    [Identify if problem has optimal substructure]
            ↓
       <Has overlapping subproblems?>
         ↙              ↘
       YES              NO
        ↓                ↓
   [DP applicable]   [Use Divide & Conquer
        ↓             or other approach]
   [Define state]        ↓
        ↓              [END]
   [Find recurrence relation]
        ↓
   [Identify base cases]
        ↓
   <Choose approach>
     ↙        ↘
Top-Down    Bottom-Up
(Memoization) (Tabulation)
     ↓           ↓
[Implement    [Fill DP table
 recursion     iteratively]
 with cache]      ↓
     ↓         [Return final result]
[Return          ↓
 result]       [END]
     ↓
   [END]
```

---

## 🧪 **Practice Problems by Difficulty**

### **Easy Level**
1. **Climbing Stairs** (LC #70)
2. **Min Cost Climbing Stairs** (LC #746)
3. **House Robber** (LC #198)
4. **Maximum Subarray** (LC #53)
5. **Range Sum Query - Immutable** (LC #303)

### **Medium Level**
1. **Coin Change** (LC #322)
2. **Longest Increasing Subsequence** (LC #300)
3. **Longest Common Subsequence** (LC #1143)
4. **Word Break** (LC #139)
5. **Unique Paths** (LC #62)
6. **Edit Distance** (LC #72)
7. **House Robber II** (LC #213)
8. **Decode Ways** (LC #91)
9. **Minimum Path Sum** (LC #64)
10. **Best Time to Buy and Sell Stock with Cooldown** (LC #309)

### **Hard Level**
1. **Best Time to Buy and Sell Stock III** (LC #123)
2. **Best Time to Buy and Sell Stock IV** (LC #188)
3. **Longest Valid Parentheses** (LC #32)
4. **Palindrome Partitioning II** (LC #132)
5. **Regular Expression Matching** (LC #10)
6. **Wildcard Matching** (LC #44)
7. **Burst Balloons** (LC #312)
8. **Maximum Rectangle** (LC #85)

---

## 📊 **DP Patterns Summary**

| Pattern | Example Problems | Key Insight |
|---------|------------------|-------------|
| **Linear DP** | Fibonacci, Climbing Stairs | f(n) depends on f(n-1), f(n-2), etc. |
| **Grid DP** | Unique Paths, Minimum Path Sum | 2D state space |
| **Interval DP** | Longest Palindromic Substring | Consider all intervals |
| **Knapsack DP** | 0/1 Knapsack, Coin Change | Include/exclude decisions |
| **Tree DP** | House Robber III | DP on tree structures |
| **String DP** | Edit Distance, LCS | Character-by-character comparison |
| **State Machine DP** | Stock problems | Multiple states per position |

---

## 📊 **Time & Space Complexity Patterns**

| Problem Type | Time Complexity | Space Complexity | Optimization |
|--------------|----------------|------------------|--------------|
| **1D DP** | O(n) | O(n) → O(1) | Use variables instead of array |
| **2D DP** | O(n²) | O(n²) → O(n) | Use 1D array, rolling array |
| **Knapsack** | O(n × W) | O(n × W) → O(W) | 1D DP array |
| **LCS/Edit Distance** | O(m × n) | O(m × n) → O(min(m,n)) | Use shorter string for space |
| **String Matching** | O(n × m) | O(n × m) → O(m) | Rolling array technique |

---

**🎯 Key Takeaways**:
- Identify optimal substructure and overlapping subproblems
- Choose between top-down (memoization) and bottom-up (tabulation)
- Always consider space optimization techniques
- Practice identifying DP patterns in problems
- Start with brute force, then optimize with DP
- Master the classic problems as building blocks
