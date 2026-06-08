# Dynamic Programming

## Overview

Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler subproblems. It solves each subproblem only once and stores the results for future reference, eliminating redundant calculations.

### Key Characteristics
- **Optimal Substructure**: Problem can be solved by combining solutions to subproblems
- **Overlapping Subproblems**: Same subproblems are solved multiple times
- **Memoization**: Store results of expensive function calls
- **Tabulation**: Build solution bottom-up from base cases

## Difficulty Breakdown

### Easy Problems (1-4)
- Basic 1D DP: Fibonacci, Climbing Stairs
- Simple state transitions
- Single array/string problems

### Medium Problems (5-8)
- 2D DP: Grid paths, Edit distance
- Multiple constraints
- Knapsack variations
- String matching with DP

### Hard Problems (9-12)
- Complex state machines
- Multiple dimensions
- Optimization with constraints
- Advanced DP techniques (digit DP, tree DP)

## Learning Progression

### Phase 1: Foundation (Problems 1-4)
1. **Fibonacci Sequence** - Understand memoization vs tabulation
2. **Climbing Stairs** - Basic state transitions
3. **House Robber** - Decision making with constraints
4. **Maximum Subarray** - Kadane's algorithm

### Phase 2: Intermediate (Problems 5-8)
5. **Coin Change** - Unbounded knapsack
6. **Longest Common Subsequence** - 2D DP basics
7. **Edit Distance** - String transformation
8. **Partition Equal Subset Sum** - Subset sum problems

### Phase 3: Advanced (Problems 9-12)
9. **Word Break** - Complex state transitions
10. **Regular Expression Matching** - Advanced string DP
11. **Burst Balloons** - Matrix chain multiplication
12. **Scramble String** - Tree DP concepts

## Common Patterns

### 1D DP
```java
// Template for 1D DP
int[] dp = new int[n+1];
dp[0] = base_case;

// Fill DP table
for(int i = 1; i <= n; i++) {
    dp[i] = some_operation(dp[i-1], ...);
}
```

### 2D DP
```java
// Template for 2D DP
int[][] dp = new int[m+1][n+1];

// Initialize base cases
for(int i = 0; i <= m; i++) {
    dp[i][0] = base_case1;
}
for(int j = 0; j <= n; j++) {
    dp[0][j] = base_case2;
}

// Fill DP table
for(int i = 1; i <= m; i++) {
    for(int j = 1; j <= n; j++) {
        dp[i][j] = combine(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
}
```

### Memoization Template
```java
Map<Key, Result> memo = new HashMap<>();

Result solve(params) {
    Key key = create_key(params);
    if(memo.containsKey(key)) return memo.get(key);

    // Compute result
    Result res = compute(...);

    memo.put(key, res);
    return res;
}
```

## Time/Space Complexity Analysis

| Problem Type | Time Complexity | Space Complexity | Optimization |
|-------------|----------------|------------------|--------------|
| 1D DP | O(n) | O(n) | O(1) with variables |
| 2D DP | O(m*n) | O(m*n) | O(min(m,n)) with rolling array |
| Knapsack | O(n*W) | O(n*W) | O(W) with 1D array |
| LCS/Edit Distance | O(m*n) | O(m*n) | O(min(m,n)) space |

## Interview Tips

### Problem Recognition
- Keywords: "maximum", "minimum", "longest", "shortest", "count ways"
- Constraints that suggest DP: Large N but small state space
- Problems with optimal substructure

### Optimization Techniques
1. **Space Optimization**: Use rolling arrays for 2D DP
2. **State Compression**: Bit manipulation for subset DP
3. **Iterative vs Recursive**: Choose based on constraints
4. **Early Termination**: Prune invalid states

### Common Mistakes
- Not identifying the correct state variables
- Wrong base cases
- Not considering all transitions
- Space complexity issues with large constraints

## Practice Strategy

1. **Start Simple**: Master 1D DP before 2D
2. **Pattern Recognition**: Learn common DP patterns
3. **State Definition**: Practice defining DP states
4. **Optimization**: Focus on space optimization
5. **Edge Cases**: Test with small inputs and edge cases

## Recommended Problems by Topic

### Array/String DP
- Maximum Subarray (Kadane)
- Longest Increasing Subsequence
- Palindromic Substrings
- Decode Ways

### Grid DP
- Unique Paths
- Minimum Path Sum
- Dungeon Game
- Maximal Rectangle

### Knapsack Variants
- 0/1 Knapsack
- Unbounded Knapsack
- Partition Equal Subset Sum
- Target Sum

### String DP
- Longest Common Subsequence
- Edit Distance
- Regular Expression Matching
- Word Break

## Resources

- **Books**: "Introduction to Algorithms" (CLRS) Chapter 15
- **Online**: LeetCode DP section, GeeksforGeeks DP articles
- **Videos**: MIT OCW Dynamic Programming, freeCodeCamp DP tutorials

## Performance Metrics

Track your progress with these metrics:
- Time to solve easy problems: < 15 minutes
- Time to solve medium problems: < 30 minutes
- Time to solve hard problems: < 60 minutes
- Space optimization success rate: > 80%
- Pattern recognition accuracy: > 90%
