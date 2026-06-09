# Chapter 8: Dynamic Programming — Knapsack Problems

## Learning Objectives

By the end of this chapter, students will be able to:

1. Solve 0/1 knapsack, unbounded knapsack, and subset sum using DP.
2. Distinguish between 0/1 and unbounded knapsack and adapt the recurrence accordingly.
3. Apply DP to the partition equal subset sum and target sum problems.
4. Optimize space usage from \( O(nW) \) to \( O(W) \).

---

## Theory

### 8.1 0/1 Knapsack

**Problem:** Given \( n \) items, each with weight \( w_i \) and value \( v_i \), and a knapsack capacity \( W \), select a subset of items to maximize total value without exceeding capacity. Each item can be taken at most once (0/1 decision).

**Recurrence:** Let \( dp[i][c] \) be the maximum value achievable using the first \( i \) items with capacity \( c \).

\[
dp[i][c] = \begin{cases}
0 & \text{if } i = 0 \text{ or } c = 0 \\
dp[i-1][c] & \text{if } w_i > c \\
\max(dp[i-1][c], \; v_i + dp[i-1][c - w_i]) & \text{otherwise}
\end{cases}
\]

**Algorithm:**
```
Knapsack01(n, W, w, v):
    dp = 2D array of size (n+1) x (W+1), initialized to 0
    for i = 1 to n:
        for c = 1 to W:
            if w[i] > c:
                dp[i][c] = dp[i-1][c]
            else:
                dp[i][c] = max(dp[i-1][c], v[i] + dp[i-1][c - w[i]])
    return dp[n][W]
```

**Complexity:** \( \Theta(nW) \) time, \( \Theta(nW) \) space (can be reduced to \( \Theta(W) \)).

**Space-optimized (1D array):** Iterate capacity from \( W \) down to \( w_i \) to avoid using an item multiple times.

```
Knapsack01_1D(n, W, w, v):
    dp = array of size W+1, initialized to 0
    for i = 1 to n:
        for c = W down to w[i]:
            dp[c] = max(dp[c], v[i] + dp[c - w[i]])
    return dp[W]
```

### 8.2 Unbounded Knapsack

**Problem:** Same as 0/1 knapsack, but each item can be taken any number of times.

**Recurrence:** \( dp[c] = \max(dp[c], v_i + dp[c - w_i]) \). The key difference from 0/1 knapsack is the capacity loop direction: **forward** instead of backward.

```
UnboundedKnapsack(n, W, w, v):
    dp = array of size W+1, initialized to 0
    for c = 1 to W:
        for i = 1 to n:
            if w[i] <= c:
                dp[c] = max(dp[c], v[i] + dp[c - w[i]])
    return dp[W]
```

**Complexity:** \( \Theta(nW) \).

### 8.3 Subset Sum

**Problem:** Given a set of integers and a target sum \( S \), determine whether there exists a subset that sums to \( S \).

**Recurrence:** Let \( dp[i][s] \) be true if a subset of the first \( i \) elements sums to \( s \).

\[
dp[i][s] = dp[i-1][s] \;\lor\; dp[i-1][s - A[i]]
\]

**1D optimization:**
```
SubsetSum(A, n, S):
    dp = boolean array of size S+1, dp[0] = true
    for i = 1 to n:
        for s = S down to A[i]:
            dp[s] = dp[s] || dp[s - A[i]]
    return dp[S]
```

### 8.4 Equal Partition Subset Sum

**Problem:** Given an integer array, determine if it can be partitioned into two subsets with equal sum.

**Reduction to subset sum:** If the total sum is odd, return false. Otherwise, target \( S = \text{total}/2 \). Check if a subset sums to \( S \).

### 8.5 Coin Change (Minimum Coins)

**Problem:** Given coin denominations and an amount, find the minimum number of coins needed to make the amount (unbounded usage).

\[
dp[c] = \min_{i: w_i \le c} (1 + dp[c - w_i])
\]

```
CoinChange(coins, n, amount):
    dp = array of size amount+1, initialized to inf
    dp[0] = 0
    for c = 1 to amount:
        for i = 1 to n:
            if coins[i] <= c:
                dp[c] = min(dp[c], 1 + dp[c - coins[i]])
    return dp[amount] == inf ? -1 : dp[amount]
```

### 8.6 Target Sum

**Problem:** Given an array of integers and a target sum, assign \( + \) or \( - \) signs to each element to achieve the target. Count the number of assignments.

**Reduction to subset sum:** Let \( P \) be the set of elements with \( + \) sign and \( N \) those with \( - \). Then \( \text{sum}(P) - \text{sum}(N) = S \). Since \( \text{sum}(P) + \text{sum}(N) = \text{total} \), we have \( 2 \cdot \text{sum}(P) = \text{total} + S \), so \( \text{sum}(P) = (\text{total} + S) / 2 \). Count subsets with this sum.

---

## Examples

### Example 8.1: 0/1 Knapsack in C++

```cpp
#include <vector>
#include <algorithm>

int knapsack01(const std::vector<int>& w, const std::vector<int>& v, int W) {
    int n = static_cast<int>(w.size());
    std::vector<int> dp(W + 1, 0);
    for (int i = 0; i < n; ++i) {
        for (int c = W; c >= w[i]; --c) {
            dp[c] = std::max(dp[c], v[i] + dp[c - w[i]]);
        }
    }
    return dp[W];
}
```

**Walkthrough:** Items: (w,v) = (2,3), (3,4), (4,5), (5,6). Capacity W = 5.

- i=0: dp[2] = 3, dp[3] = 3, dp[4] = 3, dp[5] = 3.
- i=1: dp[3] = max(3, 4+0) = 4, dp[4] = max(3, 4+3) = 7, dp[5] = max(3, 4+3) = 7.
- i=2: dp[4] = max(7, 5+0) = 7, dp[5] = max(7, 5+3) = 8.
- i=3: dp[5] = max(8, 6+0) = 8.

Result: 8. Items selected: (3,4) and (2,3).

### Example 8.2: Subset Sum

```cpp
bool subsetSum(const std::vector<int>& A, int S) {
    std::vector<bool> dp(S + 1, false);
    dp[0] = true;
    for (int x : A) {
        for (int s = S; s >= x; --s) {
            if (dp[s - x]) dp[s] = true;
        }
    }
    return dp[S];
}
```

### Example 8.3: Partition Equal Subset Sum

```cpp
bool canPartition(const std::vector<int>& nums) {
    int total = 0;
    for (int x : nums) total += x;
    if (total % 2 != 0) return false;
    return subsetSum(nums, total / 2);
}
```

---

## Summary

| Problem | Recurrence Type | Time | Space |
|---------|----------------|------|-------|
| 0/1 knapsack | \( \max(\text{skip}, \text{take}) \), backward loop | \( O(nW) \) | \( O(W) \) |
| Unbounded knapsack | \( \max(\text{skip}, \text{take}) \), forward loop | \( O(nW) \) | \( O(W) \) |
| Subset sum | \( \lor(\text{skip}, \text{take}) \), backward loop | \( O(nS) \) | \( O(S) \) |
| Coin change (min) | \( \min(1 + dp[c - w_i]) \), forward loop | \( O(nA) \) | \( O(A) \) |
| Target sum | Reduce to subset sum | \( O(nS) \) | \( O(S) \) |

---

## Exercises

### Review Questions

1. Why does the 0/1 knapsack DP iterate capacity backward while unbounded knapsack iterates forward?
2. Can the space-optimized 1D approach reconstruct which items are selected? How?
3. Reduce target sum to subset sum. Show the derivation.

### Application Problems

4. Implement 0/1 knapsack with reconstruction of the selected items.
5. Solve the unbounded knapsack: denominations [2, 3, 5] with values [3, 4, 6] and capacity 10.
6. Given coins [1, 3, 4] and amount 6, use coin change DP to find the minimum number of coins.
7. Determine if the array [1, 5, 11, 5] can be partitioned equally. Show the DP table.

### Challenge Problem

8. Generalize 0/1 knapsack to **multiple knapsacks**: given \( k \) knapsacks with capacities \( W_1, \ldots, W_k \), maximize total value. Design a DP algorithm and analyze its complexity.
