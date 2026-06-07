# 🚀 DSA Quick Mastery Guide - Part 5: Dynamic Programming & Greedy

# 📚 TOPIC 5: DYNAMIC PROGRAMMING & GREEDY

## Core Concepts

### Dynamic Programming Fundamentals
```java
// DP Approach:
// 1. Define state (what does dp[i] or dp[i][j] represent)
// 2. Find recurrence relation (how to calculate dp[i] from previous states)
// 3. Initialize base cases
// 4. Determine calculation order (bottom-up or top-down)
// 5. Extract final answer
```

### Key DP Patterns

#### 1. 1D Dynamic Programming
```java
// Fibonacci Sequence
// Top-down (Memoization)
public int fibMemo(int n) {
    int[] memo = new int[n + 1];
    Arrays.fill(memo, -1);
    return fibHelper(n, memo);
}

private int fibHelper(int n, int[] memo) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    
    memo[n] = fibHelper(n - 1, memo) + fibHelper(n - 2, memo);
    return memo[n];
}

// Bottom-up (Tabulation)
public int fibTab(int n) {
    if (n <= 1) return n;
    
    int[] dp = new int[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// Space-optimized
public int fibOptimized(int n) {
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

#### 2. 2D Dynamic Programming
```java
// Longest Common Subsequence
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

### Greedy Algorithms
```java
// Greedy Approach:
// 1. Make locally optimal choice at each step
// 2. Hope that these local choices lead to a global optimum
// 3. Prove that the greedy strategy works
```

## 🎯 Problem Patterns & Solutions

### Pattern 1: Knapsack Problems
```java
// 0/1 Knapsack
public int knapsack(int[] weights, int[] values, int capacity) {
    int n = weights.length;
    int[][] dp = new int[n + 1][capacity + 1];
    
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= capacity; w++) {
            // If current item can fit
            if (weights[i - 1] <= w) {
                // Max of (including current item, excluding current item)
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                // Can't include current item
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    return dp[n][capacity];
}

// Subset Sum
public boolean canPartition(int[] nums) {
    int sum = 0;
    for (int num : nums) {
        sum += num;
    }
    
    // If sum is odd, can't partition into equal subsets
    if (sum % 2 != 0) return false;
    
    int target = sum / 2;
    int n = nums.length;
    boolean[][] dp = new boolean[n + 1][target + 1];
    
    // Empty subset can form sum 0
    for (int i = 0; i <= n; i++) {
        dp[i][0] = true;
    }
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= target; j++) {
            if (nums[i - 1] <= j) {
                // Include or exclude current element
                dp[i][j] = dp[i - 1][j - nums[i - 1]] || dp[i - 1][j];
            } else {
                // Can't include current element
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    
    return dp[n][target];
}
```

### Pattern 2: String DP Problems
```java
// Longest Palindromic Substring
public String longestPalindrome(String s) {
    int n = s.length();
    if (n < 2) return s;
    
    boolean[][] dp = new boolean[n][n];
    int start = 0, maxLen = 1;
    
    // All single characters are palindromes
    for (int i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    
    // Check for palindromes of length 2
    for (int i = 0; i < n - 1; i++) {
        if (s.charAt(i) == s.charAt(i + 1)) {
            dp[i][i + 1] = true;
            start = i;
            maxLen = 2;
        }
    }
    
    // Check for palindromes of length > 2
    for (int len = 3; len <= n; len++) {
        for (int i = 0; i <= n - len; i++) {
            int j = i + len - 1; // Ending index
            
            // Check if substring from i to j is palindrome
            if (s.charAt(i) == s.charAt(j) && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                start = i;
                maxLen = len;
            }
        }
    }
    
    return s.substring(start, start + maxLen);
}

// Edit Distance
public int minDistance(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    // Base cases: empty strings
    for (int i = 0; i <= m; i++) {
        dp[i][0] = i; // Delete all characters
    }
    for (int j = 0; j <= n; j++) {
        dp[0][j] = j; // Insert all characters
    }
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1]; // No operation needed
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

### Pattern 3: Greedy Problems
```java
// Jump Game
public boolean canJump(int[] nums) {
    int maxReach = 0;
    
    for (int i = 0; i < nums.length; i++) {
        // If current position is unreachable
        if (i > maxReach) return false;
        
        // Update max reach
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // If we can reach the end
        if (maxReach >= nums.length - 1) return true;
    }
    
    return true;
}

// Minimum Number of Arrows to Burst Balloons
public int findMinArrowShots(int[][] points) {
    if (points.length == 0) return 0;
    
    // Sort by end points
    Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));
    
    int arrows = 1;
    int end = points[0][1];
    
    for (int i = 1; i < points.length; i++) {
        // If current balloon starts after previous end
        if (points[i][0] > end) {
            arrows++;
            end = points[i][1];
        }
    }
    
    return arrows;
}
```

## 🔄 Quick Revision Questions

### Easy Level
1. Climbing stairs
2. Maximum subarray
3. House robber
4. Best time to buy and sell stock
5. Coin change

### Medium Level
1. Longest increasing subsequence
2. Unique paths
3. Coin change 2 (number of ways)
4. Longest common subsequence
5. Jump game

### Hard Level
1. Edit distance
2. Regular expression matching
3. Burst balloons
4. Maximum profit in job scheduling
5. Longest valid parentheses