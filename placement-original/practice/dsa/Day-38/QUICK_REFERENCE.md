# Day 38 Quick Reference Guide
## Dynamic Programming Cheat Sheet

---

## 🎯 DP Pattern Recognition (Decision Tree)

```
Is it an optimization problem? (min/max/count)
    ↓ YES
Has overlapping subproblems?
    ↓ YES
Can be broken into smaller subproblems?
    ↓ YES
    
    → USE DYNAMIC PROGRAMMING
    
What pattern?
    
    Sequential decisions?
        → LINEAR DP (Fibonacci, Climbing Stairs)
    
    Limited resources?
        → KNAPSACK (Coin Change, Partition)
    
    Subsequence selection?
        → LIS PATTERN (Longest Increasing Subsequence)
    
    Two sequences?
        → STRING DP (LCS, Edit Distance)
    
    Grid traversal?
        → GRID DP (Unique Paths, Min Path Sum)
```

---

## 📋 Top 10 DP Problems (Must Know for Interviews)

| # | Problem | Pattern | Time | Space | Key Insight |
|---|---------|---------|------|-------|-------------|
| 1 | Fibonacci | Linear | O(n) | O(1) | dp[i] = dp[i-1] + dp[i-2] |
| 2 | Climbing Stairs | Linear | O(n) | O(1) | Same as Fibonacci |
| 3 | House Robber | Linear | O(n) | O(1) | max(rob, skip) |
| 4 | Coin Change | Knapsack | O(n×m) | O(n) | Unbounded knapsack |
| 5 | LIS | Subsequence | O(n log n) | O(n) | Binary search |
| 6 | Max Subarray | Linear | O(n) | O(1) | Kadane's algorithm |
| 7 | Unique Paths | Grid | O(m×n) | O(n) | dp[i][j] = dp[i-1][j] + dp[i][j-1] |
| 8 | Word Break | String | O(n²) | O(n) | Segment string |
| 9 | 0/1 Knapsack | Knapsack | O(n×W) | O(W) | Each item once |
| 10 | LCS | String | O(m×n) | O(n) | Match or skip |

---

## 🔑 DP Templates

### Template 1: Linear DP (1D)
```java
// Pattern: Current depends on fixed previous states
int[] dp = new int[n + 1];
dp[0] = baseCase0;
dp[1] = baseCase1;

for (int i = 2; i <= n; i++) {
    dp[i] = function(dp[i-1], dp[i-2], ...);
}
return dp[n];

// Space Optimization: Use variables
int prev2 = baseCase0, prev1 = baseCase1;
for (int i = 2; i <= n; i++) {
    int curr = function(prev1, prev2);
    prev2 = prev1;
    prev1 = curr;
}
return prev1;
```

**Examples**: Fibonacci, Climbing Stairs, House Robber

---

### Template 2: Unbounded Knapsack
```java
// Pattern: Can use items unlimited times
int[] dp = new int[capacity + 1];
dp[0] = baseCase;

for (int c = 1; c <= capacity; c++) {
    for (int item : items) {
        if (c >= item.weight) {
            dp[c] = optimize(
                dp[c], 
                dp[c - item.weight] + item.value
            );
        }
    }
}
return dp[capacity];
```

**Examples**: Coin Change, Rod Cutting, Unbounded Knapsack

---

### Template 3: 0/1 Knapsack
```java
// Pattern: Each item used at most once
int[] dp = new int[capacity + 1];
dp[0] = baseCase;

for (int i = 0; i < items.length; i++) {
    // Iterate capacity BACKWARDS to avoid reusing items
    for (int c = capacity; c >= items[i].weight; c--) {
        dp[c] = optimize(
            dp[c], 
            dp[c - items[i].weight] + items[i].value
        );
    }
}
return dp[capacity];
```

**Examples**: Partition Equal Subset Sum, Target Sum, 0/1 Knapsack

---

### Template 4: LIS (Longest Increasing Subsequence)
```java
// Method 1: O(n²) DP
int[] dp = new int[n];
Arrays.fill(dp, 1); // Each element is LIS of length 1

for (int i = 1; i < n; i++) {
    for (int j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}
return Arrays.stream(dp).max().orElse(0);

// Method 2: O(n log n) with Binary Search
List<Integer> tails = new ArrayList<>();
for (int num : arr) {
    int pos = binarySearch(tails, num);
    if (pos == tails.size()) {
        tails.add(num);
    } else {
        tails.set(pos, num);
    }
}
return tails.size();
```

**Examples**: LIS, Russian Doll Envelopes, Maximum Length of Pair Chain

---

### Template 5: String DP (2D)
```java
// Pattern: Match two sequences
int m = s1.length(), n = s2.length();
int[][] dp = new int[m + 1][n + 1];

// Initialize base cases
for (int i = 0; i <= m; i++) dp[i][0] = baseCase;
for (int j = 0; j <= n; j++) dp[0][j] = baseCase;

// Fill table
for (int i = 1; i <= m; i++) {
    for (int j = 1; j <= n; j++) {
        if (s1.charAt(i-1) == s2.charAt(j-1)) {
            dp[i][j] = dp[i-1][j-1] + matchValue;
        } else {
            dp[i][j] = optimize(
                dp[i-1][j],      // Skip s1[i-1]
                dp[i][j-1],      // Skip s2[j-1]
                dp[i-1][j-1]     // Skip both (if applicable)
            );
        }
    }
}
return dp[m][n];

// Space Optimization: Use rolling arrays
int[] prev = new int[n + 1];
int[] curr = new int[n + 1];
// ... (iterate and swap prev/curr)
```

**Examples**: LCS, Edit Distance, Longest Common Substring

---

### Template 6: Grid DP
```java
// Pattern: 2D grid traversal
int m = grid.length, n = grid[0].length;
int[][] dp = new int[m][n];

// Initialize first row and column
for (int i = 0; i < m; i++) dp[i][0] = baseCase;
for (int j = 0; j < n; j++) dp[0][j] = baseCase;

// Fill table
for (int i = 1; i < m; i++) {
    for (int j = 1; j < n; j++) {
        dp[i][j] = grid[i][j] + optimize(
            dp[i-1][j],  // From top
            dp[i][j-1]   // From left
        );
    }
}
return dp[m-1][n-1];

// Space Optimization: Use single row
int[] dp = new int[n];
// ... (reuse single row)
```

**Examples**: Unique Paths, Minimum Path Sum, Dungeon Game

---

## ⚡ Space Optimization Tricks

### Trick 1: Two Variables (Fibonacci-like)
```java
// Before: O(n) space
int[] dp = new int[n];
for (int i = 2; i < n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
}

// After: O(1) space
int prev2 = baseCase, prev1 = baseCase;
for (int i = 2; i < n; i++) {
    int curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
}
```

### Trick 2: Rolling Array (2D → 1D)
```java
// Before: O(m × n) space
int[][] dp = new int[m][n];

// After: O(n) space
int[] prev = new int[n];
int[] curr = new int[n];
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        curr[j] = compute(prev, curr);
    }
    int[] temp = prev;
    prev = curr;
    curr = temp;
}
```

### Trick 3: In-Place Modification (Grid)
```java
// Before: O(m × n) extra space
int[][] dp = new int[m][n];

// After: O(1) space (modify input)
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        grid[i][j] += min(grid[i-1][j], grid[i][j-1]);
    }
}
```

---

## 🐛 Common Mistakes & How to Avoid

| Mistake | Wrong | Correct | How to Avoid |
|---------|-------|---------|--------------|
| **Off-by-one** | `dp[i-1]` when `i=0` | Check `i > 0` or use `i+1` indexing | Always verify base cases |
| **Wrong order** | Fill `dp[i]` before `dp[i-1]` | Fill in dependency order | Draw dependency graph |
| **Initialization** | `dp[0] = 0` (wrong base) | `dp[0] = correctBase` | Test base cases manually |
| **Space optimization** | Lose needed info | Keep what's needed | Check dependencies |
| **State definition** | Vague meaning | Precise definition | Write comment: "dp[i] means..." |

---

## 📊 Complexity Cheat Sheet

| Pattern | Time | Space (Original) | Space (Optimized) |
|---------|------|------------------|-------------------|
| Linear DP | O(n) | O(n) | O(1) |
| Unbounded Knapsack | O(n × W) | O(W) | O(W) |
| 0/1 Knapsack | O(n × W) | O(W) | O(W) |
| LIS (DP) | O(n²) | O(n) | O(n) |
| LIS (Binary Search) | O(n log n) | O(n) | O(n) |
| String DP | O(m × n) | O(m × n) | O(min(m,n)) |
| Grid DP | O(m × n) | O(m × n) | O(min(m,n)) |

---

## 🎯 Interview Problem Solving Workflow

### Step 1: Identify DP (30 seconds)
```
✓ Optimization? (min/max/count)
✓ Overlapping subproblems?
✓ Optimal substructure?
```

### Step 2: Define State (1-2 minutes)
```
What changes between subproblems?
Example: "dp[i] = max money from houses [0..i]"
```

### Step 3: Find Transition (2-3 minutes)
```
How to compute dp[i] from previous states?
Example: dp[i] = max(dp[i-1], dp[i-2] + nums[i])
```

### Step 4: Determine Base Cases (1 minute)
```
What are the simplest subproblems?
Example: dp[0] = nums[0], dp[1] = max(nums[0], nums[1])
```

### Step 5: Implement (5-10 minutes)
```java
// Start with memoization (easier)
Map<State, Result> memo = new HashMap<>();
Result solve(params...) {
    if (baseCase) return baseCaseValue;
    if (memo.containsKey(state)) return memo.get(state);
    Result result = transition(...);
    memo.put(state, result);
    return result;
}

// Then convert to tabulation (more efficient)
Result[] dp = new Result[n];
dp[0] = baseCase;
for (int i = 1; i < n; i++) {
    dp[i] = transition(dp[i-1], ...);
}
return dp[n-1];

// Finally, optimize space (if possible)
Result prev = baseCase;
for (int i = 1; i < n; i++) {
    Result curr = transition(prev);
    prev = curr;
}
return prev;
```

### Step 6: Test & Debug (2-3 minutes)
```
Test edge cases: n=0, n=1, n=2
Print dp array for small inputs
Verify against brute force
```

---

## 💡 Key Insights

### When NOT to use DP:
- ❌ No overlapping subproblems → Use Divide & Conquer
- ❌ Greedy works → Use Greedy (simpler)
- ❌ Need actual backtracking → Use Backtracking
- ❌ Graph shortest path (no negative cycles) → Use Dijkstra

### Memoization vs. Tabulation:
| Aspect | Memoization | Tabulation |
|--------|-------------|------------|
| **Easier to write?** | ✅ Yes (natural recursion) | No |
| **Faster?** | No (recursion overhead) | ✅ Yes |
| **Space efficient?** | No (stack + cache) | ✅ Yes (cache only) |
| **All subproblems?** | No (only needed) | Yes (all computed) |
| **Use when...** | First implementation, not all subproblems needed | Final optimized solution |

### Pattern Recognition Speed Tips:
1. **See "ways to..."** → Likely counting DP (Fibonacci-like)
2. **See "minimum/maximum..."** → Likely optimization DP
3. **See two sequences** → Likely String DP (2D)
4. **See grid/matrix** → Likely Grid DP
5. **See "subset/partition"** → Likely Knapsack

---

## 🔍 Debugging Checklist

```
□ Base cases correct? (Test n=0, n=1, n=2 manually)
□ Transition logic sound? (Draw state diagram)
□ Loop order correct? (Dependencies satisfied?)
□ Array bounds checked? (No index out of bounds?)
□ State definition clear? (Can explain what dp[i] means?)
□ Initialization complete? (All base cases initialized?)
□ Return value correct? (dp[n] or max(dp)?)
```

---

## 📚 Additional Practice Resources

### Sorted by Difficulty:
**Easy (Build Confidence)**:
- LC 70: Climbing Stairs
- LC 746: Min Cost Climbing Stairs
- LC 338: Counting Bits
- LC 118: Pascal's Triangle

**Medium (Core Practice)**:
- LC 198: House Robber
- LC 322: Coin Change
- LC 300: Longest Increasing Subsequence
- LC 139: Word Break
- LC 416: Partition Equal Subset Sum

**Hard (Interview Prep)**:
- LC 72: Edit Distance
- LC 1143: Longest Common Subsequence
- LC 312: Burst Balloons
- LC 32: Longest Valid Parentheses

### Practice Platforms:
- **LeetCode**: DP Tag (400+ problems)
- **CSES**: Dynamic Programming section
- **AtCoder**: Educational DP Contest
- **Codeforces**: DP problems (1300-1900 rating)

---

## 🎓 Quick Review Questions

1. **What's the difference between DP and Greedy?**
   - DP: Explores all possibilities, optimal solution
   - Greedy: Makes locally optimal choices, may not be globally optimal

2. **When can you space-optimize DP?**
   - When current state only depends on fixed number of previous states

3. **What's the time complexity of typical DP?**
   - Time = (Number of States) × (Time per State)

4. **How to identify overlapping subproblems?**
   - Draw recursion tree, look for repeated nodes

5. **What's optimal substructure?**
   - Optimal solution contains optimal solutions to subproblems

---

**Quick Reference Version**: 1.0  
**Last Updated**: 2025-01-08  
**For**: Day 38 DP Fundamentals  

💡 **Tip**: Print this and keep it handy during practice sessions!
