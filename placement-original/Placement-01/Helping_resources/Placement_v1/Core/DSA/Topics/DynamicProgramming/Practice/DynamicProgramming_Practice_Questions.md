# Dynamic Programming Practice Questions

## Easy Problems

### 1. Climbing Stairs
**Problem**: You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

**Example**:
```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

**Approach**: Use DP to build up the solution.

```java
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

**Time Complexity**: O(n)  
**Space Complexity**: O(n)

### 2. House Robber
**Problem**: You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an array of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

**Example**:
```
Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.
```

**Approach**: Use DP to track the maximum amount that can be robbed up to each house.

```java
public int rob(int[] nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    
    int[] dp = new int[nums.length];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for (int i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    
    return dp[nums.length - 1];
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(n)

### 3. Maximum Subarray
**Problem**: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

**Example**:
```
Input: [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

**Approach**: Use Kadane's algorithm (a form of DP).

```java
public int maxSubArray(int[] nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    
    for (int i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(1)

### 4. Min Cost Climbing Stairs
**Problem**: On a staircase, the i-th step has some cost cost[i] assigned (0 indexed). Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

**Example**:
```
Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
```

**Approach**: Use DP to track the minimum cost to reach each step.

```java
public int minCostClimbingStairs(int[] cost) {
    int n = cost.length;
    int[] dp = new int[n + 1];
    
    // Base cases
    dp[0] = 0;
    dp[1] = 0;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    
    return dp[n];
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(n)

### 5. Range Sum Query - Immutable
**Problem**: Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

**Example**:
```
Input: nums = [-2, 0, 3, -5, 2, -1]
sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```

**Approach**: Use prefix sum (a form of DP).

```java
class NumArray {
    private int[] prefixSum;
    
    public NumArray(int[] nums) {
        prefixSum = new int[nums.length + 1];
        for (int i = 0; i < nums.length; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }
    }
    
    public int sumRange(int left, int right) {
        return prefixSum[right + 1] - prefixSum[left];
    }
}
```

**Time Complexity**: O(1) per query, O(n) for initialization  
**Space Complexity**: O(n)

## Medium Problems

### 6. Unique Paths
**Problem**: A robot is located at the top-left corner of a m x n grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid. How many possible unique paths are there?

**Example**:
```
Input: m = 3, n = 7
Output: 28
```

**Approach**: Use 2D DP to count paths.

```java
public int uniquePaths(int m, int n) {
    int[][] dp = new int[m][n];
    
    // Initialize first row and column
    for (int i = 0; i < m; i++) dp[i][0] = 1;
    for (int j = 0; j < n; j++) dp[0][j] = 1;
    
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    
    return dp[m - 1][n - 1];
}
```

**Time Complexity**: O(m*n)  
**Space Complexity**: O(m*n)

### 7. Coin Change
**Problem**: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

**Example**:
```
Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
```

**Approach**: Use DP to find the minimum number of coins needed for each amount.

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

**Time Complexity**: O(amount * number of coins)  
**Space Complexity**: O(amount)

### 8. Longest Increasing Subsequence
**Problem**: Given an integer array nums, return the length of the longest strictly increasing subsequence.

**Example**:
```
Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
```

**Approach**: Use DP to track the length of the longest increasing subsequence ending at each position.

```java
public int lengthOfLIS(int[] nums) {
    if (nums.length == 0) return 0;
    
    int[] dp = new int[nums.length];
    Arrays.fill(dp, 1);
    
    for (int i = 1; i < nums.length; i++) {
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

**Time Complexity**: O(n²)  
**Space Complexity**: O(n)

### 9. Longest Common Subsequence
**Problem**: Given two strings text1 and text2, return the length of their longest common subsequence.

**Example**:
```
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
```

**Approach**: Use 2D DP to find the length of the LCS.

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

**Time Complexity**: O(m*n)  
**Space Complexity**: O(m*n)

### 10. Partition Equal Subset Sum
**Problem**: Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

**Example**:
```
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
```

**Approach**: Use DP to solve the subset sum problem.

```java
public boolean canPartition(int[] nums) {
    int sum = 0;
    for (int num : nums) {
        sum += num;
    }
    
    // If sum is odd, we cannot partition into equal subsets
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

**Time Complexity**: O(n*target)  
**Space Complexity**: O(target)

## Hard Problems

### 11. Edit Distance
**Problem**: Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.

**Example**:
```
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
```

**Approach**: Use 2D DP to find the minimum edit distance.

```java
public int minDistance(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    // Base cases
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    
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

**Time Complexity**: O(m*n)  
**Space Complexity**: O(m*n)

### 12. Regular Expression Matching
**Problem**: Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where '.' matches any single character and '*' matches zero or more of the preceding element.

**Example**:
```
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

**Approach**: Use 2D DP to track whether substrings match.

```java
public boolean isMatch(String s, String p) {
    int m = s.length(), n = p.length();
    boolean[][] dp = new boolean[m + 1][n + 1];
    dp[0][0] = true;
    
    // Handle patterns like a* or a*b* or a*b*c*
    for (int j = 1; j <= n; j++) {
        if (p.charAt(j - 1) == '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            char sc = s.charAt(i - 1);
            char pc = p.charAt(j - 1);
            
            if (pc == '.' || pc == sc) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (pc == '*') {
                dp[i][j] = dp[i][j - 2]; // Zero occurrence
                
                char prevChar = p.charAt(j - 2);
                if (prevChar == '.' || prevChar == sc) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j]; // One or more occurrences
                }
            }
        }
    }
    
    return dp[m][n];
}
```

**Time Complexity**: O(m*n)  
**Space Complexity**: O(m*n)

### 13. Burst Balloons
**Problem**: Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. You are asked to burst all the balloons. If you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.

**Example**:
```
Input: [3,1,5,8]
Output: 167
Explanation: 
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
```

**Approach**: Use DP with interval-based approach.

```java
public int maxCoins(int[] nums) {
    int n = nums.length;
    int[] newNums = new int[n + 2];
    
    // Add 1 at the beginning and end
    newNums[0] = 1;
    newNums[n + 1] = 1;
    for (int i = 0; i < n; i++) {
        newNums[i + 1] = nums[i];
    }
    
    // dp[i][j] represents the maximum coins we can get by bursting all balloons between i and j (exclusive)
    int[][] dp = new int[n + 2][n + 2];
    
    // Length of subarray
    for (int len = 1; len <= n; len++) {
        // Start index
        for (int i = 1; i <= n - len + 1; i++) {
            int j = i + len - 1;
            
            // Try each balloon as the last one to burst
            for (int k = i; k <= j; k++) {
                dp[i][j] = Math.max(dp[i][j], 
                                    dp[i][k - 1] + newNums[i - 1] * newNums[k] * newNums[j + 1] + dp[k + 1][j]);
            }
        }
    }
    
    return dp[1][n];
}
```

**Time Complexity**: O(n³)  
**Space Complexity**: O(n²)

### 14. Maximum Profit in Job Scheduling
**Problem**: We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i]. You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

**Example**:
```
Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job. 
Time range [1-3]+[3-6] , we get profit of 50 + 70 = 120.
```

**Approach**: Sort jobs by end time and use DP with binary search.

```java
public int jobScheduling(int[] startTime, int[] endTime, int[] profit) {
    int n = startTime.length;
    int[][] jobs = new int[n][3];
    
    for (int i = 0; i < n; i++) {
        jobs[i] = new int[]{startTime[i], endTime[i], profit[i]};
    }
    
    // Sort jobs by end time
    Arrays.sort(jobs, (a, b) -> a[1] - b[1]);
    
    int[] dp = new int[n];
    dp[0] = jobs[0][2]; // Profit of first job
    
    for (int i = 1; i < n; i++) {
        // Profit including current job
        int profit = jobs[i][2];
        
        // Find the latest job that doesn't conflict with current job
        int l = 0, r = i - 1;
        while (l <= r) {
            int mid = (l + r) / 2;
            if (jobs[mid][1] <= jobs[i][0]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        
        // If there's a non-conflicting job, add its profit
        if (r >= 0) {
            profit += dp[r];
        }
        
        // Maximum profit is either including current job or excluding it
        dp[i] = Math.max(profit, dp[i - 1]);
    }
    
    return dp[n - 1];
}
```

**Time Complexity**: O(n log n)  
**Space Complexity**: O(n)

### 15. Longest Valid Parentheses
**Problem**: Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

**Example**:
```
Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
```

**Approach**: Use DP to track the length of valid parentheses ending at each position.

```java
public int longestValidParentheses(String s) {
    int n = s.length();
    int[] dp = new int[n];
    int maxLength = 0;
    
    for (int i = 1; i < n; i++) {
        if (s.charAt(i) == ')') {
            if (s.charAt(i - 1) == '(') {
                // Case: ...()
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s.charAt(i - dp[i - 1] - 1) == '(') {
                // Case: ...((...))
                dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0);
            }
            maxLength = Math.max(maxLength, dp[i]);
        }
    }
    
    return maxLength;
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(n)

## Company-Specific Questions

### Google
- Longest Increasing Subsequence (Medium)
- Coin Change (Medium)
- Edit Distance (Hard)
- Burst Balloons (Hard)

### Amazon
- House Robber (Easy)
- Maximum Subarray (Easy)
- Longest Common Subsequence (Medium)
- Regular Expression Matching (Hard)

### Facebook
- Climbing Stairs (Easy)
- Unique Paths (Medium)
- Longest Valid Parentheses (Hard)
- Maximum Profit in Job Scheduling (Hard)

### Microsoft
- Min Cost Climbing Stairs (Easy)
- Partition Equal Subset Sum (Medium)
- Longest Increasing Subsequence (Medium)
- Edit Distance (Hard)

## Interview Tips for Dynamic Programming

1. **Identify the problem type**: Recognize if a problem can be solved using DP by checking for overlapping subproblems and optimal substructure.

2. **Define the state clearly**: Understand what information needs to be stored in the DP table.

3. **Establish the recurrence relation**: Figure out how to compute the current state from previous states.

4. **Handle base cases**: Identify the simplest subproblems that can be solved directly.

5. **Choose the right approach**: Decide between top-down (memoization) or bottom-up (tabulation) based on the problem.

6. **Optimize space if needed**: See if you can reduce the space complexity by using only the necessary previous states.

7. **Draw examples**: Work through small examples to verify your approach.

8. **Test edge cases**: Make sure your solution handles edge cases correctly.

9. **Explain your thought process**: Clearly communicate your approach during interviews.

10. **Practice common patterns**: Familiarize yourself with common DP patterns like:
    - 1D DP (Fibonacci, climbing stairs)
    - 2D DP (grid problems, string problems)
    - Knapsack problems
    - Interval DP
    - Bitmask DP