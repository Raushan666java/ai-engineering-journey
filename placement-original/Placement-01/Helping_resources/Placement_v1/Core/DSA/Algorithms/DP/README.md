# Dynamic Programming

## Overview
Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler subproblems. It is applicable when the problem has overlapping subproblems and optimal substructure properties.

## Key Concepts

### 1. Overlapping Subproblems
A problem has overlapping subproblems if the same subproblems are solved multiple times.

### 2. Optimal Substructure
A problem has optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems.

### 3. Memoization (Top-Down Approach)
Solve the problem recursively and store the results of subproblems to avoid redundant calculations.

### 4. Tabulation (Bottom-Up Approach)
Solve the problem iteratively, building up solutions to larger subproblems from solutions to smaller ones.

## Approaches

### 1. Memoization (Top-Down)
```java
// Fibonacci example with memoization
public int fibonacci(int n) {
    int[] memo = new int[n + 1];
    Arrays.fill(memo, -1);
    return fibMemo(n, memo);
}

private int fibMemo(int n, int[] memo) {
    if (n <= 1) return n;
    
    if (memo[n] != -1) return memo[n];
    
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}
```

**Advantages**:
- More intuitive (follows the recursive structure of the problem)
- Computes only necessary subproblems

**Disadvantages**:
- Stack overflow for large inputs
- Overhead of recursive calls

### 2. Tabulation (Bottom-Up)
```java
// Fibonacci example with tabulation
public int fibonacci(int n) {
    if (n <= 1) return n;
    
    int[] dp = new int[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}
```

**Advantages**:
- No recursion overhead
- No stack overflow issues
- Often more efficient

**Disadvantages**:
- May compute unnecessary subproblems
- Sometimes less intuitive

### 3. Space Optimization
```java
// Fibonacci example with space optimization
public int fibonacci(int n) {
    if (n <= 1) return n;
    
    int prev2 = 0, prev1 = 1;
    
    for (int i = 2; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;
}
```

**Advantages**:
- Reduced space complexity
- Often more efficient

**Disadvantages**:
- Can be harder to understand and implement
- Not always applicable

## Common DP Patterns

### 1. Linear DP
**Description**: Problems where the state depends on previous states in a linear fashion.

**Example**: Fibonacci, Climbing Stairs

```java
// Climbing Stairs
public int climbStairs(int n) {
    if (n <= 2) return n;
    
    int[] dp = new int[n + 1];
    dp[1] = 1;
    dp[2] = 2;
    
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}
```

### 2. Knapsack Problems
**Description**: Problems involving selecting items with certain weights and values to maximize value while keeping the total weight under a limit.

**Example**: 0/1 Knapsack

```java
// 0/1 Knapsack
public int knapsack(int[] weights, int[] values, int capacity) {
    int n = weights.length;
    int[][] dp = new int[n + 1][capacity + 1];
    
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    return dp[n][capacity];
}
```

### 3. Longest Common Subsequence (LCS)
**Description**: Find the longest subsequence common to two sequences.

```java
public int longestCommonSubsequence(String text1, String text2) {
    int m = text1.length(), n = text2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
}
```

### 4. Matrix Chain Multiplication
**Description**: Find the most efficient way to multiply a chain of matrices.

```java
public int matrixChainMultiplication(int[] dimensions) {
    int n = dimensions.length - 1; // Number of matrices
    int[][] dp = new int[n][n];
    
    // Length of chain
    for (int len = 1; len < n; len++) {
        // Starting position
        for (int i = 0; i < n - len; i++) {
            int j = i + len;
            dp[i][j] = Integer.MAX_VALUE;
            
            // Split position
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + dimensions[i] * dimensions[k + 1] * dimensions[j + 1];
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }
    
    return dp[0][n - 1];
}
```

### 5. Longest Increasing Subsequence (LIS)
**Description**: Find the length of the longest subsequence such that all elements of the subsequence are sorted in increasing order.

```java
public int lengthOfLIS(int[] nums) {
    int n = nums.length;
    int[] dp = new int[n];
    Arrays.fill(dp, 1);
    
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    int maxLength = 0;
    for (int length : dp) {
        maxLength = Math.max(maxLength, length);
    }
    
    return maxLength;
}
```

### 6. Edit Distance
**Description**: Find the minimum number of operations required to convert one string to another.

```java
public int minDistance(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    // Base cases
    for (int i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (int j = 0; j <= n; j++) {
        dp[0][j] = j;
    }
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],     // Delete
                    Math.min(
                        dp[i][j - 1], // Insert
                        dp[i - 1][j - 1] // Replace
                    )
                );
            }
        }
    }
    
    return dp[m][n];
}
```

### 7. Coin Change
**Description**: Find the minimum number of coins needed to make a given amount.

```java
public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    
    for (int coin : coins) {
        for (int i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}
```

### 8. Subset Sum
**Description**: Determine if there is a subset of the given set with a sum equal to a given sum.

```java
public boolean canPartition(int[] nums) {
    int sum = 0;
    for (int num : nums) {
        sum += num;
    }
    
    if (sum % 2 != 0) return false;
    
    int target = sum / 2;
    boolean[] dp = new boolean[target + 1];
    dp[0] = true;
    
    for (int num : nums) {
        for (int i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    
    return dp[target];
}
```

## State Transition Optimization

### 1. State Compression
**Description**: Reduce the dimensionality of the DP state to optimize space complexity.

**Example**: Using 1D array instead of 2D array for knapsack problems.

```java
// 0/1 Knapsack with state compression
public int knapsack(int[] weights, int[] values, int capacity) {
    int n = weights.length;
    int[] dp = new int[capacity + 1];
    
    for (int i = 0; i < n; i++) {
        for (int w = capacity; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
        }
    }
    
    return dp[capacity];
}
```

### 2. State Transition Optimization
**Description**: Optimize the state transition by reducing the number of states or transitions.

**Example**: Using binary search to find the longest increasing subsequence in O(n log n) time.

```java
public int lengthOfLIS(int[] nums) {
    int n = nums.length;
    int[] tails = new int[n];
    int size = 0;
    
    for (int num : nums) {
        int left = 0, right = size;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        tails[left] = num;
        if (left == size) size++;
    }
    
    return size;
}
```

## Problem-Solving Approach

### 1. Identify if DP is applicable
- Check for overlapping subproblems
- Check for optimal substructure

### 2. Define the state
- What information do we need to solve the subproblem?
- What are the dimensions of the DP table?

### 3. Define the recurrence relation
- How do we transition from one state to another?
- What is the base case?

### 4. Implement the solution
- Choose between memoization and tabulation
- Consider space optimization if applicable

### 5. Analyze the time and space complexity
- Time complexity: Number of states × Time per state
- Space complexity: Size of the DP table or memoization array

## Common Mistakes and Optimizations

1. **Not identifying the correct state**: Make sure your state captures all necessary information.
2. **Incorrect recurrence relation**: Double-check the transition logic.
3. **Missing base cases**: Ensure all base cases are handled correctly.
4. **Not considering space optimization**: Often, you can reduce the space complexity by using a 1D array instead of a 2D array.
5. **Unnecessary computations**: Avoid computing the same state multiple times.

## Practice Problems

### Easy
1. [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
2. [House Robber](https://leetcode.com/problems/house-robber/)
3. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
4. [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)
5. [Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)

### Medium
6. [Unique Paths](https://leetcode.com/problems/unique-paths/)
7. [Coin Change](https://leetcode.com/problems/coin-change/)
8. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
9. [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
10. [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)

### Hard
11. [Edit Distance](https://leetcode.com/problems/edit-distance/)
12. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
13. [Burst Balloons](https://leetcode.com/problems/burst-balloons/)
14. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)
15. [Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)