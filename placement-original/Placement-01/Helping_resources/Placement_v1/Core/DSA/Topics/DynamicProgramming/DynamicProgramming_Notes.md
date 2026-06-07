# Dynamic Programming: Comprehensive Notes

## 1. Introduction to Dynamic Programming

Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler subproblems. It is applicable when the problem has overlapping subproblems and optimal substructure properties.

### Key Characteristics
- **Overlapping Subproblems**: Same subproblems are solved multiple times
- **Optimal Substructure**: Optimal solution can be constructed from optimal solutions of its subproblems
- **State and Transition**: Define states and transitions between them

### When to Use DP
- Optimization problems (maximize/minimize)
- Counting problems (number of ways)
- Problems asking for yes/no possibility

## 2. Approaches to Dynamic Programming

### Top-Down Approach (Memoization)
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
- More intuitive (follows recursive structure)
- Computes only necessary subproblems
- Easier to implement for complex problems

**Disadvantages**:
- Stack overflow for large inputs
- Overhead of recursive calls

### Bottom-Up Approach (Tabulation)
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

### Space Optimization
```java
// Fibonacci with space optimization
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

## 3. Common DP Patterns

### 1D DP Problems
Problems where state depends on previous states in a linear fashion.

#### Example: Climbing Stairs
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

#### Example: House Robber
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

### 2D DP Problems
Problems where state depends on a 2D grid of previous states.

#### Example: Unique Paths
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

#### Example: Longest Common Subsequence
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

### Knapsack Problems
Problems involving selecting items with certain weights and values to maximize value while keeping the total weight under a limit.

#### Example: 0/1 Knapsack
```java
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

### String DP Problems
Problems involving string operations and manipulations.

#### Example: Edit Distance
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

### Interval DP Problems
Problems involving intervals or subarrays.

#### Example: Matrix Chain Multiplication
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

## 4. Advanced DP Techniques

### State Compression
Reducing the dimensionality of the DP state to optimize space complexity.

#### Example: Knapsack with State Compression
```java
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

### Bitmask DP
Using bitmasks to represent subsets in DP problems.

#### Example: Traveling Salesman Problem
```java
public int tsp(int[][] graph) {
    int n = graph.length;
    int[][] dp = new int[1 << n][n];
    
    // Initialize with infinity
    for (int[] row : dp) {
        Arrays.fill(row, Integer.MAX_VALUE / 2);
    }
    
    // Base case: start at node 0
    dp[1][0] = 0;
    
    // For each subset of nodes
    for (int mask = 1; mask < (1 << n); mask++) {
        // For each last node in the path
        for (int u = 0; u < n; u++) {
            if ((mask & (1 << u)) == 0) continue;
            
            // For each possible next node
            for (int v = 0; v < n; v++) {
                if ((mask & (1 << v)) != 0) continue;
                
                dp[mask | (1 << v)][v] = Math.min(
                    dp[mask | (1 << v)][v],
                    dp[mask][u] + graph[u][v]
                );
            }
        }
    }
    
    // Find minimum cost to visit all nodes and return to node 0
    int finalMask = (1 << n) - 1;
    int minCost = Integer.MAX_VALUE;
    for (int u = 1; u < n; u++) {
        minCost = Math.min(minCost, dp[finalMask][u] + graph[u][0]);
    }
    
    return minCost;
}
```

### DP on Trees
Applying DP techniques to tree structures.

#### Example: Diameter of Binary Tree
```java
public int diameterOfBinaryTree(TreeNode root) {
    int[] diameter = new int[1];
    height(root, diameter);
    return diameter[0];
}

private int height(TreeNode node, int[] diameter) {
    if (node == null) return 0;
    
    int leftHeight = height(node.left, diameter);
    int rightHeight = height(node.right, diameter);
    
    // Update diameter if path through current node is longer
    diameter[0] = Math.max(diameter[0], leftHeight + rightHeight);
    
    // Return height of current subtree
    return 1 + Math.max(leftHeight, rightHeight);
}
```

## 5. Common DP Problems and Solutions

### Fibonacci Sequence
```java
// Bottom-up DP with space optimization
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

### Longest Increasing Subsequence
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

### Coin Change
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

### Longest Common Subsequence
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

### Edit Distance
```java
public int minDistance(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[][] dp = new int[m + 1][n + 1];
    
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

## 6. Time and Space Complexity Analysis

### Time Complexity
- **1D DP**: O(n) or O(n²) depending on the problem
- **2D DP**: O(n²) or O(n*m) depending on the problem
- **Knapsack**: O(n*W) where n is the number of items and W is the capacity
- **String DP**: O(n*m) where n and m are the lengths of the strings

### Space Complexity
- **Basic DP**: O(n) or O(n²) depending on the problem
- **Space-Optimized DP**: Often can be reduced to O(n) or even O(1)

## 7. DP Problem-Solving Framework

### Step 1: Define the State
Identify what information is needed to represent a subproblem.

### Step 2: Define the Recurrence Relation
Establish how to compute the current state from previous states.

### Step 3: Define the Base Cases
Identify the simplest subproblems that can be solved directly.

### Step 4: Decide the Approach
Choose between top-down (memoization) or bottom-up (tabulation).

### Step 5: Optimize Space (if needed)
Reduce the space complexity if possible.

## 8. Common Mistakes and Pitfalls

1. **Incorrect State Definition**: Not capturing all necessary information
2. **Wrong Recurrence Relation**: Incorrectly relating states
3. **Missing Base Cases**: Forgetting to handle edge cases
4. **Array Index Issues**: Off-by-one errors in array indexing
5. **Unnecessary Computation**: Computing the same state multiple times
6. **Memory Limit Exceeded**: Not optimizing space complexity

## 9. Advanced Topics in DP

### Digit DP
Solving problems involving digit constraints.

### DP with Probability
Solving problems involving probability calculations.

### DP with Game Theory
Solving problems involving optimal game strategies.

### DP with Convex Hull Optimization
Optimizing DP solutions using convex hull techniques.

## 10. Resources for Further Learning

1. **Books**:
   - "Introduction to Algorithms" by CLRS
   - "Dynamic Programming for Coding Interviews" by Meenakshi & Kamal Rawat

2. **Online Platforms**:
   - LeetCode: DP section
   - GeeksforGeeks: DP problems
   - Codeforces: DP tag

3. **YouTube Channels**:
   - Tushar Roy - Coding Made Simple
   - Back To Back SWE
   - Aditya Verma (DP Playlist)
   - Errichto (DP for Beginners)

4. **Visualization Tools**:
   - VisuAlgo: https://visualgo.net/en/dp