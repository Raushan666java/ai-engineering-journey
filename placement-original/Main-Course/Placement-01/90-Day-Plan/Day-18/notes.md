# Day 18 Quick Reference: Dynamic Programming (DP)

## 🔁 DP Fundamentals

- DP is useful when you can break a problem into overlapping subproblems and combine their solutions.
- Two approaches:
  - **Top-Down (Memoization)**: Recursion with caching results
  - **Bottom-Up (Tabulation)**: Iteratively build up a DP table

## 🛠️ Steps to solve DP problems
1. Identify the state (parameters that change)
2. Determine the base case(s)
3. Write recurrence (transition)
4. Choose top-down or bottom-up
5. Optimize space if possible

## ✅ Common DP patterns & templates

### Pattern: Fibonacci (Top-down & Bottom-up)
```java
// Top-down (memo)
long[] memo = new long[n + 1]; Arrays.fill(memo, -1);
long fibMemo(int n) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    memo[n] = fibMemo(n-1) + fibMemo(n-2);
    return memo[n];
}

// Bottom-up (tab)
long fibTab(int n) {
    if (n <= 1) return n;
    long[] dp = new long[n + 1]; dp[0] = 0; dp[1] = 1;
    for (int i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];
    return dp[n];
}
```

### Pattern: 0/1 Knapsack (Tabulation)
```java
int[][] dp = new int[n + 1][W + 1];
for (int i = 1; i <= n; i++) {
    for (int w = 0; w <= W; w++) {
        dp[i][w] = dp[i - 1][w];
        if (wt[i-1] <= w) dp[i][w] = Math.max(dp[i][w], val[i - 1] + dp[i-1][w - wt[i-1]]);
    }
}
return dp[n][W];
```

### Pattern: LCS (2D DP)
```java
int[][] dp = new int[n+1][m+1];
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
        if (a.charAt(i-1) == b.charAt(j-1)) dp[i][j] = 1 + dp[i-1][j-1];
        else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
    }
}
return dp[n][m];
```

## ⚠️ Common Mistakes & Tips
- Forgetting to initialize memo / dp table
- Off-by-one errors in indices
- Using the wrong traversal order in bottom-up
- Not handling base cases (i==0 or j==0)
- Forgetting to check for negative capacity in knapsack

## 🔧 Optimization Patterns
- **Space Optimization**: Reduce 2D->1D (rolling array) where dp[i] depends only on dp[i-1]
- **Monotonic queues / Kadane-like**: For DP with range-based transitions
- **Binary search + DP**: For LIS O(n log n)

---

## 📌 Cheatsheet: Time & Space
- Fibonacci naive: O(2^n)
- Fibonacci memo/tab: O(n) time, O(n) space
- Knapsack: O(n*W) time, O(n*W) space
- LCS: O(n*m), O(n*m)
- Coin change: O(amount * coins) (tabulation) 

---

**When stuck:** write recurrence first, then memoize; convert to bottom-up for speed/space.
