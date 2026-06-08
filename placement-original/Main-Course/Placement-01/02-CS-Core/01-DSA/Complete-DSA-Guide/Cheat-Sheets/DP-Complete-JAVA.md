# 🧠 Dynamic Programming - Complete Question Set (Love Babbar + Striver)
## Total: 123 Questions with Java Solutions & Theory

---

## 📋 Theory & Patterns

### DP Fundamentals:
1. **Optimal Substructure** - Optimal solution contains optimal solutions to subproblems
2. **Overlapping Subproblems** - Same subproblems solved multiple times
3. **Memoization** - Top-down approach with caching
4. **Tabulation** - Bottom-up approach filling table
5. **Space Optimization** - Reducing space complexity

### DP Patterns:
1. **Linear DP** - 1D problems (Fibonacci, House Robber)
2. **Grid DP** - 2D problems (Unique Paths, Min Path Sum)
3. **Subsequence DP** - LIS, LCS problems
4. **Partition DP** - Subset sum, palindrome partitioning
5. **Tree DP** - Problems on trees
6. **String DP** - Edit distance, regex matching

### Common Techniques:
```java
// Memoization Template
Map<String, Integer> memo = new HashMap<>();

public int solveDP(int[] arr, int index) {
    String key = index + "";
    if (memo.containsKey(key)) return memo.get(key);
    
    // Base case
    if (index >= arr.length) return 0;
    
    // Recursive relation
    int result = Math.max(
        arr[index] + solveDP(arr, index + 2), // Take current
        solveDP(arr, index + 1)               // Skip current
    );
    
    memo.put(key, result);
    return result;
}

// Tabulation Template
public int solveDPTabulation(int[] arr) {
    int n = arr.length;
    int[] dp = new int[n + 2]; // Extra space for base cases
    
    for (int i = n - 1; i >= 0; i--) {
        dp[i] = Math.max(arr[i] + dp[i + 2], dp[i + 1]);
    }
    
    return dp[0];
}
```

---

## 💡 Love Babbar DP Questions (316-388)

### 316. Fibonacci Number
**Problem**: Find nth Fibonacci number  
**Difficulty**: Easy  
**Pattern**: Basic DP

```java
// Memoization
public int fib(int n) {
    Map<Integer, Integer> memo = new HashMap<>();
    return fibHelper(n, memo);
}

private int fibHelper(int n, Map<Integer, Integer> memo) {
    if (n <= 1) return n;
    
    if (memo.containsKey(n)) return memo.get(n);
    
    int result = fibHelper(n - 1, memo) + fibHelper(n - 2, memo);
    memo.put(n, result);
    return result;
}

// Tabulation
public int fibTabulation(int n) {
    if (n <= 1) return n;
    
    int[] dp = new int[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// Space optimized
public int fibOptimized(int n) {
    if (n <= 1) return n;
    
    int prev2 = 0, prev1 = 1;
    
    for (int i = 2; i <= n; i++) {
        int current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}
```
**Time**: O(n), **Space**: O(n) memo/tab, O(1) optimized

---

### 317. Climbing Stairs
**Problem**: Ways to reach nth stair (1 or 2 steps at a time)  
**Difficulty**: Easy  
**Pattern**: Basic DP

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

// Space optimized
public int climbStairsOptimized(int n) {
    if (n <= 2) return n;
    
    int prev2 = 1, prev1 = 2;
    
    for (int i = 3; i <= n; i++) {
        int current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

// Variable steps (can take 1, 2, ..., k steps)
public int climbStairsVariableSteps(int n, int k) {
    int[] dp = new int[n + 1];
    dp[0] = 1;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= k && j <= i; j++) {
            dp[i] += dp[i - j];
        }
    }
    
    return dp[n];
}
```
**Time**: O(n), **Space**: O(1) optimized

---

### 318. Min Cost Climbing Stairs
**Problem**: Minimum cost to reach top  
**Difficulty**: Easy  
**Pattern**: Cost DP

```java
public int minCostClimbingStairs(int[] cost) {
    int n = cost.length;
    
    for (int i = 2; i < n; i++) {
        cost[i] += Math.min(cost[i - 1], cost[i - 2]);
    }
    
    return Math.min(cost[n - 1], cost[n - 2]);
}

// Without modifying input
public int minCostClimbingStairsClean(int[] cost) {
    int n = cost.length;
    int[] dp = new int[n + 1];
    
    for (int i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    
    return dp[n];
}

// Space optimized
public int minCostClimbingStairsOptimized(int[] cost) {
    int prev2 = 0, prev1 = 0;
    
    for (int i = 2; i <= cost.length; i++) {
        int current = Math.min(prev1 + cost[i - 1], prev2 + cost[i - 2]);
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}
```
**Time**: O(n), **Space**: O(1) optimized

---

### 319. House Robber
**Problem**: Rob houses without robbing adjacent ones  
**Difficulty**: Medium  
**Pattern**: Include/Exclude DP

```java
public int rob(int[] nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    
    int[] dp = new int[nums.length];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for (int i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }
    
    return dp[nums.length - 1];
}

// Space optimized
public int robOptimized(int[] nums) {
    int prevRob = 0, prevNotRob = 0;
    
    for (int num : nums) {
        int currentRob = prevNotRob + num;
        int currentNotRob = Math.max(prevRob, prevNotRob);
        
        prevRob = currentRob;
        prevNotRob = currentNotRob;
    }
    
    return Math.max(prevRob, prevNotRob);
}

// House Robber II (circular array)
public int robCircular(int[] nums) {
    if (nums.length == 1) return nums[0];
    
    // Case 1: Rob first house, can't rob last
    int max1 = robLinear(nums, 0, nums.length - 2);
    
    // Case 2: Don't rob first house, can rob last
    int max2 = robLinear(nums, 1, nums.length - 1);
    
    return Math.max(max1, max2);
}

private int robLinear(int[] nums, int start, int end) {
    int prevRob = 0, prevNotRob = 0;
    
    for (int i = start; i <= end; i++) {
        int currentRob = prevNotRob + nums[i];
        int currentNotRob = Math.max(prevRob, prevNotRob);
        
        prevRob = currentRob;
        prevNotRob = currentNotRob;
    }
    
    return Math.max(prevRob, prevNotRob);
}
```
**Time**: O(n), **Space**: O(1) optimized

---

### 320. Coin Change
**Problem**: Minimum coins to make amount  
**Difficulty**: Medium  
**Pattern**: Unbounded Knapsack

```java
public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1); // Initialize with impossible value
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}

// 2D DP approach
public int coinChange2D(int[] coins, int amount) {
    int n = coins.length;
    int[][] dp = new int[n + 1][amount + 1];
    
    // Initialize first row (no coins)
    for (int j = 1; j <= amount; j++) {
        dp[0][j] = Integer.MAX_VALUE;
    }
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= amount; j++) {
            dp[i][j] = dp[i - 1][j]; // Don't take current coin
            
            if (coins[i - 1] <= j && dp[i][j - coins[i - 1]] != Integer.MAX_VALUE) {
                dp[i][j] = Math.min(dp[i][j], dp[i][j - coins[i - 1]] + 1);
            }
        }
    }
    
    return dp[n][amount] == Integer.MAX_VALUE ? -1 : dp[n][amount];
}

// Coin Change II - Number of ways
public int change(int amount, int[] coins) {
    int[] dp = new int[amount + 1];
    dp[0] = 1;
    
    for (int coin : coins) {
        for (int i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    
    return dp[amount];
}
```
**Time**: O(n × amount), **Space**: O(amount)

---

### 321. Longest Increasing Subsequence (LIS)
**Problem**: Length of longest increasing subsequence  
**Difficulty**: Medium  
**Pattern**: Subsequence DP

```java
// O(n²) DP solution
public int lengthOfLIS(int[] nums) {
    int n = nums.length;
    int[] dp = new int[n];
    Arrays.fill(dp, 1);
    
    int maxLength = 1;
    
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }
    
    return maxLength;
}

// O(n log n) Binary Search solution
public int lengthOfLISOptimal(int[] nums) {
    List<Integer> tails = new ArrayList<>();
    
    for (int num : nums) {
        int left = 0, right = tails.size();
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (tails.get(mid) < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        if (left == tails.size()) {
            tails.add(num);
        } else {
            tails.set(left, num);
        }
    }
    
    return tails.size();
}

// Print LIS
public List<Integer> printLIS(int[] nums) {
    int n = nums.length;
    int[] dp = new int[n];
    int[] parent = new int[n];
    Arrays.fill(dp, 1);
    Arrays.fill(parent, -1);
    
    int maxLength = 1;
    int maxIndex = 0;
    
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[i] > nums[j] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                parent[i] = j;
            }
        }
        
        if (dp[i] > maxLength) {
            maxLength = dp[i];
            maxIndex = i;
        }
    }
    
    // Reconstruct LIS
    List<Integer> lis = new ArrayList<>();
    int current = maxIndex;
    
    while (current != -1) {
        lis.add(0, nums[current]);
        current = parent[current];
    }
    
    return lis;
}
```
**Time**: O(n²) DP, O(n log n) binary search, **Space**: O(n)

---

### 322. Longest Common Subsequence (LCS)
**Problem**: Length of longest common subsequence  
**Difficulty**: Medium  
**Pattern**: String DP

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

// Space optimized
public int longestCommonSubsequenceOptimized(String text1, String text2) {
    int m = text1.length(), n = text2.length();
    int[] prev = new int[n + 1];
    int[] curr = new int[n + 1];
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                curr[j] = prev[j - 1] + 1;
            } else {
                curr[j] = Math.max(prev[j], curr[j - 1]);
            }
        }
        
        int[] temp = prev;
        prev = curr;
        curr = temp;
    }
    
    return prev[n];
}

// Print LCS
public String printLCS(String text1, String text2) {
    int m = text1.length(), n = text2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    // Fill DP table
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // Reconstruct LCS
    StringBuilder lcs = new StringBuilder();
    int i = m, j = n;
    
    while (i > 0 && j > 0) {
        if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
            lcs.append(text1.charAt(i - 1));
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }
    
    return lcs.reverse().toString();
}
```
**Time**: O(m × n), **Space**: O(n) optimized

---

### 323. Edit Distance (Levenshtein Distance)
**Problem**: Minimum operations to convert string1 to string2  
**Difficulty**: Hard  
**Pattern**: String DP

```java
public int minDistance(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    // Initialize base cases
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
                dp[i][j] = 1 + Math.min({
                    dp[i - 1][j],     // Delete
                    dp[i][j - 1],     // Insert
                    dp[i - 1][j - 1]  // Replace
                });
            }
        }
    }
    
    return dp[m][n];
}

// Space optimized
public int minDistanceOptimized(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[] prev = new int[n + 1];
    int[] curr = new int[n + 1];
    
    // Initialize first row
    for (int j = 0; j <= n; j++) {
        prev[j] = j;
    }
    
    for (int i = 1; i <= m; i++) {
        curr[0] = i;
        
        for (int j = 1; j <= n; j++) {
            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                curr[j] = prev[j - 1];
            } else {
                curr[j] = 1 + Math.min(Math.min(prev[j], curr[j - 1]), prev[j - 1]);
            }
        }
        
        int[] temp = prev;
        prev = curr;
        curr = temp;
    }
    
    return prev[n];
}

// Print operations
public List<String> printOperations(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    // Fill DP table (same as above)
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]);
            }
        }
    }
    
    // Reconstruct operations
    List<String> operations = new ArrayList<>();
    int i = m, j = n;
    
    while (i > 0 || j > 0) {
        if (i > 0 && j > 0 && word1.charAt(i - 1) == word2.charAt(j - 1)) {
            i--;
            j--;
        } else if (i > 0 && j > 0 && dp[i][j] == dp[i - 1][j - 1] + 1) {
            operations.add("Replace " + word1.charAt(i - 1) + " with " + word2.charAt(j - 1));
            i--;
            j--;
        } else if (i > 0 && dp[i][j] == dp[i - 1][j] + 1) {
            operations.add("Delete " + word1.charAt(i - 1));
            i--;
        } else {
            operations.add("Insert " + word2.charAt(j - 1));
            j--;
        }
    }
    
    Collections.reverse(operations);
    return operations;
}
```
**Time**: O(m × n), **Space**: O(n) optimized

---

### 324. 0/1 Knapsack
**Problem**: Maximum value with weight constraint  
**Difficulty**: Medium  
**Pattern**: Classic DP

```java
public int knapsack(int[] weights, int[] values, int capacity) {
    int n = weights.length;
    int[][] dp = new int[n + 1][capacity + 1];
    
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]], // Take item
                    dp[i - 1][w]                                    // Don't take item
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    return dp[n][capacity];
}

// Space optimized
public int knapsackOptimized(int[] weights, int[] values, int capacity) {
    int[] dp = new int[capacity + 1];
    
    for (int i = 0; i < weights.length; i++) {
        for (int w = capacity; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
        }
    }
    
    return dp[capacity];
}

// Print selected items
public List<Integer> knapsackItems(int[] weights, int[] values, int capacity) {
    int n = weights.length;
    int[][] dp = new int[n + 1][capacity + 1];
    
    // Fill DP table
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
    
    // Reconstruct solution
    List<Integer> selected = new ArrayList<>();
    int w = capacity;
    
    for (int i = n; i > 0 && w > 0; i--) {
        if (dp[i][w] != dp[i - 1][w]) {
            selected.add(i - 1); // Item index
            w -= weights[i - 1];
        }
    }
    
    Collections.reverse(selected);
    return selected;
}
```
**Time**: O(n × capacity), **Space**: O(capacity) optimized

---

### 325. Subset Sum
**Problem**: Check if subset with given sum exists  
**Difficulty**: Medium  
**Pattern**: Boolean DP

```java
public boolean canPartition(int[] nums, int target) {
    boolean[] dp = new boolean[target + 1];
    dp[0] = true;
    
    for (int num : nums) {
        for (int sum = target; sum >= num; sum--) {
            dp[sum] = dp[sum] || dp[sum - num];
        }
    }
    
    return dp[target];
}

// 2D approach
public boolean canPartition2D(int[] nums, int target) {
    int n = nums.length;
    boolean[][] dp = new boolean[n + 1][target + 1];
    
    // Base case: sum 0 is always possible
    for (int i = 0; i <= n; i++) {
        dp[i][0] = true;
    }
    
    for (int i = 1; i <= n; i++) {
        for (int sum = 1; sum <= target; sum++) {
            dp[i][sum] = dp[i - 1][sum]; // Don't include current element
            
            if (nums[i - 1] <= sum) {
                dp[i][sum] = dp[i][sum] || dp[i - 1][sum - nums[i - 1]];
            }
        }
    }
    
    return dp[n][target];
}

// Count number of subsets with given sum
public int countSubsets(int[] nums, int target) {
    int[] dp = new int[target + 1];
    dp[0] = 1;
    
    for (int num : nums) {
        for (int sum = target; sum >= num; sum--) {
            dp[sum] += dp[sum - num];
        }
    }
    
    return dp[target];
}

// Print all subsets with given sum
public List<List<Integer>> findSubsets(int[] nums, int target) {
    List<List<Integer>> result = new ArrayList<>();
    findSubsetsHelper(nums, target, 0, new ArrayList<>(), result);
    return result;
}

private void findSubsetsHelper(int[] nums, int target, int index, 
                              List<Integer> current, List<List<Integer>> result) {
    if (target == 0) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    if (index >= nums.length || target < 0) return;
    
    // Include current element
    current.add(nums[index]);
    findSubsetsHelper(nums, target - nums[index], index + 1, current, result);
    current.remove(current.size() - 1);
    
    // Exclude current element
    findSubsetsHelper(nums, target, index + 1, current, result);
}
```
**Time**: O(n × target), **Space**: O(target)

---

## 🚀 Striver DP Questions

### S1. Matrix Chain Multiplication
**Problem**: Minimum scalar multiplications for matrix chain  
**Difficulty**: Hard  
**Pattern**: Interval DP

```java
public int matrixChainOrder(int[] p) {
    int n = p.length - 1; // Number of matrices
    int[][] dp = new int[n][n];
    
    // l is chain length
    for (int l = 2; l <= n; l++) {
        for (int i = 0; i < n - l + 1; i++) {
            int j = i + l - 1;
            dp[i][j] = Integer.MAX_VALUE;
            
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }
    
    return dp[0][n - 1];
}

// Memoization approach
public int matrixChainOrderMemo(int[] p) {
    int n = p.length - 1;
    int[][] memo = new int[n][n];
    
    for (int[] row : memo) {
        Arrays.fill(row, -1);
    }
    
    return matrixChainHelper(p, 0, n - 1, memo);
}

private int matrixChainHelper(int[] p, int i, int j, int[][] memo) {
    if (i == j) return 0;
    
    if (memo[i][j] != -1) return memo[i][j];
    
    memo[i][j] = Integer.MAX_VALUE;
    
    for (int k = i; k < j; k++) {
        int cost = matrixChainHelper(p, i, k, memo) + 
                   matrixChainHelper(p, k + 1, j, memo) + 
                   p[i] * p[k + 1] * p[j + 1];
        memo[i][j] = Math.min(memo[i][j], cost);
    }
    
    return memo[i][j];
}

// Print optimal parenthesization
public String printOptimalParentheses(int[] p) {
    int n = p.length - 1;
    int[][] dp = new int[n][n];
    int[][] split = new int[n][n];
    
    for (int l = 2; l <= n; l++) {
        for (int i = 0; i < n - l + 1; i++) {
            int j = i + l - 1;
            dp[i][j] = Integer.MAX_VALUE;
            
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                    split[i][j] = k;
                }
            }
        }
    }
    
    return buildParentheses(split, 0, n - 1);
}

private String buildParentheses(int[][] split, int i, int j) {
    if (i == j) {
        return "M" + i;
    }
    
    return "(" + buildParentheses(split, i, split[i][j]) + 
           " x " + buildParentheses(split, split[i][j] + 1, j) + ")";
}
```
**Time**: O(n³), **Space**: O(n²)

---

### S2. Palindrome Partitioning
**Problem**: Minimum cuts to partition string into palindromes  
**Difficulty**: Hard  
**Pattern**: String DP + Precomputation

```java
public int minCut(String s) {
    int n = s.length();
    
    // Precompute palindrome information
    boolean[][] isPalindrome = new boolean[n][n];
    precomputePalindrome(s, isPalindrome);
    
    // DP for minimum cuts
    int[] dp = new int[n];
    
    for (int i = 0; i < n; i++) {
        if (isPalindrome[0][i]) {
            dp[i] = 0; // Entire substring is palindrome
        } else {
            dp[i] = i; // Worst case: i cuts
            
            for (int j = 1; j <= i; j++) {
                if (isPalindrome[j][i]) {
                    dp[i] = Math.min(dp[i], dp[j - 1] + 1);
                }
            }
        }
    }
    
    return dp[n - 1];
}

private void precomputePalindrome(String s, boolean[][] isPalindrome) {
    int n = s.length();
    
    // Every single character is palindrome
    for (int i = 0; i < n; i++) {
        isPalindrome[i][i] = true;
    }
    
    // Check for length 2
    for (int i = 0; i < n - 1; i++) {
        if (s.charAt(i) == s.charAt(i + 1)) {
            isPalindrome[i][i + 1] = true;
        }
    }
    
    // Check for length 3 and above
    for (int len = 3; len <= n; len++) {
        for (int i = 0; i < n - len + 1; i++) {
            int j = i + len - 1;
            
            if (s.charAt(i) == s.charAt(j) && isPalindrome[i + 1][j - 1]) {
                isPalindrome[i][j] = true;
            }
        }
    }
}

// Return all possible palindrome partitions
public List<List<String>> partition(String s) {
    List<List<String>> result = new ArrayList<>();
    partitionHelper(s, 0, new ArrayList<>(), result);
    return result;
}

private void partitionHelper(String s, int start, List<String> current, 
                           List<List<String>> result) {
    if (start == s.length()) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int end = start; end < s.length(); end++) {
        if (isPalindromeCheck(s, start, end)) {
            current.add(s.substring(start, end + 1));
            partitionHelper(s, end + 1, current, result);
            current.remove(current.size() - 1);
        }
    }
}

private boolean isPalindromeCheck(String s, int left, int right) {
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
```
**Time**: O(n³), **Space**: O(n²)

---

### S3. Egg Dropping Problem
**Problem**: Minimum trials to find critical floor  
**Difficulty**: Hard  
**Pattern**: Game Theory DP

```java
public int superEggDrop(int eggs, int floors) {
    int[][] dp = new int[eggs + 1][floors + 1];
    
    // Base cases
    for (int i = 1; i <= eggs; i++) {
        dp[i][0] = 0; // 0 floors
        dp[i][1] = 1; // 1 floor
    }
    
    for (int j = 1; j <= floors; j++) {
        dp[1][j] = j; // 1 egg
    }
    
    for (int i = 2; i <= eggs; i++) {
        for (int j = 2; j <= floors; j++) {
            dp[i][j] = Integer.MAX_VALUE;
            
            for (int k = 1; k <= j; k++) {
                // If egg breaks: dp[i-1][k-1]
                // If egg doesn't break: dp[i][j-k]
                // Take worst case (max) + 1 trial
                int result = 1 + Math.max(dp[i - 1][k - 1], dp[i][j - k]);
                dp[i][j] = Math.min(dp[i][j], result);
            }
        }
    }
    
    return dp[eggs][floors];
}

// Optimized with binary search
public int superEggDropOptimal(int eggs, int floors) {
    int[][] dp = new int[eggs + 1][floors + 1];
    
    for (int i = 1; i <= eggs; i++) {
        dp[i][0] = 0;
        dp[i][1] = 1;
    }
    
    for (int j = 1; j <= floors; j++) {
        dp[1][j] = j;
    }
    
    for (int i = 2; i <= eggs; i++) {
        for (int j = 2; j <= floors; j++) {
            dp[i][j] = Integer.MAX_VALUE;
            
            int low = 1, high = j;
            
            while (low <= high) {
                int mid = low + (high - low) / 2;
                
                int eggBreaks = dp[i - 1][mid - 1];
                int eggSurvives = dp[i][j - mid];
                
                if (eggBreaks > eggSurvives) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
                
                dp[i][j] = Math.min(dp[i][j], 1 + Math.max(eggBreaks, eggSurvives));
            }
        }
    }
    
    return dp[eggs][floors];
}
```
**Time**: O(eggs × floors × floors), O(eggs × floors × log floors) optimized, **Space**: O(eggs × floors)

---

## 📈 Summary

### Key DP Patterns Mastered:
1. **Linear DP** - Fibonacci, climbing stairs, house robber
2. **Grid DP** - Unique paths, minimum path sum
3. **Subsequence DP** - LIS, LCS, edit distance
4. **Knapsack Variants** - 0/1, unbounded, subset sum
5. **String DP** - Edit distance, palindrome problems
6. **Interval DP** - Matrix chain multiplication, palindrome partitioning

### Important Algorithms:
- **Memoization vs Tabulation** - Top-down vs bottom-up approaches
- **Space Optimization** - Reducing space complexity from 2D to 1D
- **Path Reconstruction** - Printing optimal solutions
- **Binary Search in DP** - For optimization problems

### Common Patterns:
- **State Definition** - What does dp[i] represent?
- **Recurrence Relation** - How to compute dp[i] from previous states
- **Base Cases** - Initialize small problems
- **Answer Extraction** - Where is the final answer?

### Performance Considerations:
- **Time Complexity** - Usually O(n²) or O(n³) for complex problems
- **Space Optimization** - Often can reduce from O(n²) to O(n)
- **Memoization Overhead** - HashMap vs array for caching
- **Bottom-up vs Top-down** - Tabulation often faster due to better cache locality

### Next Steps:
- Practice more advanced DP problems
- Learn about digit DP and bitmask DP
- Study DP on trees and graphs
- Move to Graph algorithms section

---
*This completes the major Dynamic Programming problems with detailed Java solutions and comprehensive theory explanations.*
