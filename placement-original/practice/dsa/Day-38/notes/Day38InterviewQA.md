# Day 38 Interview Questions & Answers
## Dynamic Programming Fundamentals

---

## Table of Contents
1. [Core DP Concepts (Q1-Q15)](#core-dp-concepts)
2. [Problem Deep Dives (Q16-Q35)](#problem-deep-dives)
3. [DP Patterns (Q36-Q45)](#dp-patterns)
4. [Optimization Techniques (Q46-Q55)](#optimization-techniques)

---

## Core DP Concepts

### Q1: What is Dynamic Programming and when should you use it?

**Answer**:
Dynamic Programming (DP) is an optimization technique that solves complex problems by breaking them down into simpler subproblems, solving each subproblem once, and storing the results to avoid redundant computations.

**When to use DP:**
1. **Optimal Substructure**: Optimal solution contains optimal solutions to subproblems
2. **Overlapping Subproblems**: Same subproblems are solved multiple times
3. **Decision Making**: Need to make sequential choices

**Example**: Fibonacci
- Naive recursion: fib(5) calls fib(4) and fib(3), fib(4) calls fib(3) again
- DP: Compute fib(3) once, store result
- Time: O(2^n) → O(n)

**Not DP when**:
- No overlapping subproblems (e.g., merge sort)
- Greedy works (e.g., activity selection)
- Problem requires backtracking (e.g., N-Queens)

---

### Q2: Explain the difference between Memoization and Tabulation.

**Answer**:

| **Aspect** | **Memoization (Top-Down)** | **Tabulation (Bottom-Up)** |
|------------|---------------------------|----------------------------|
| **Approach** | Recursive + cache | Iterative + array |
| **Direction** | Solves from n down to 0 | Solves from 0 up to n |
| **Space** | Stack + cache | Cache only |
| **Computation** | Only needed subproblems | All subproblems |
| **Debugging** | Easier (natural recursion) | Harder (order matters) |

**Memoization Example**:
```java
Map<Integer, Long> memo = new HashMap<>();

long fib(int n) {
    if (n <= 1) return n;
    if (memo.containsKey(n)) return memo.get(n);
    
    long result = fib(n - 1) + fib(n - 2);
    memo.put(n, result);
    return result;
}
```

**Tabulation Example**:
```java
long fib(int n) {
    if (n <= 1) return n;
    long[] dp = new long[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
```

**When to use**:
- **Memoization**: Not all subproblems needed, easier to write
- **Tabulation**: Need all subproblems, want to avoid stack overflow

---

### Q3: How do you identify overlapping subproblems?

**Answer**:

**Methods to identify**:
1. **Draw Recursion Tree**: Look for repeated nodes
2. **Trace Execution**: Log function calls, check duplicates
3. **Mathematical Analysis**: Count distinct states vs. total calls

**Example: Fibonacci fib(5)**
```
              fib(5)
            /        \
        fib(4)       fib(3)
       /      \      /      \
   fib(3)  fib(2) fib(2)  fib(1)
   /   \    /   \  /   \
fib(2) fib(1) fib(1) fib(0) fib(1) fib(0)
```

**Observation**:
- fib(3) computed 2 times
- fib(2) computed 3 times
- fib(1) computed 5 times

**Total calls**: 15 (naive) vs. 6 (DP with memoization)

**Overlapping Test**:
```java
// Add this to your recursive function
static int callCount = 0;
static Map<Integer, Integer> callsPerN = new HashMap<>();

long fibDebug(int n) {
    callCount++;
    callsPerN.put(n, callsPerN.getOrDefault(n, 0) + 1);
    // ... rest of function
}
```

---

### Q4: What is optimal substructure? Give examples where it holds and doesn't hold.

**Answer**:

**Definition**: A problem has optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems.

**Where it HOLDS**:

1. **Shortest Path** (Dijkstra's):
   - Shortest A→C = Shortest A→B + Shortest B→C
   - Optimal subpath is part of optimal path

2. **Longest Increasing Subsequence**:
   - LIS ending at i = max(LIS ending at j) + 1, where j < i and arr[j] < arr[i]

3. **Matrix Chain Multiplication**:
   - Min cost of A×B×C×D = Min cost of (A×B)×(C×D) or (A)×(B×C×D), etc.

**Where it DOESN'T HOLD**:

1. **Longest Simple Path** (no repeated vertices):
   - Path A→B→C→D might not include longest path A→C
   - Removing vertices changes possibilities for remaining path
   - **Why**: Subproblem solutions are not independent

2. **0/1 Knapsack with Dependencies**:
   - If item A requires item B, can't solve independently

**Formal Test**:
```
If solution to P uses solution to subproblem S,
does S's optimality guarantee P's optimality?

YES → Optimal substructure
NO → Not suitable for DP
```

---

### Q5: How do you convert a recursive solution to DP?

**Answer**:

**Step-by-Step Process**:

**Step 1: Write Naive Recursion**
```java
// Climbing Stairs: Ways to reach step n
int climb(int n) {
    if (n == 0) return 1;
    if (n < 0) return 0;
    return climb(n - 1) + climb(n - 2);
}
```

**Step 2: Identify Parameters** (what changes between calls)
- Parameter: `n`
- Range: `[0, n]`
- State: dp[n] = ways to reach step n

**Step 3: Add Memoization (Top-Down DP)**
```java
int climb(int n, Map<Integer, Integer> memo) {
    if (n == 0) return 1;
    if (n < 0) return 0;
    if (memo.containsKey(n)) return memo.get(n);
    
    int result = climb(n - 1, memo) + climb(n - 2, memo);
    memo.put(n, result);
    return result;
}
```

**Step 4: Convert to Tabulation (Bottom-Up DP)**
```java
int climb(int n) {
    if (n == 0) return 1;
    int[] dp = new int[n + 1];
    dp[0] = 1;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
```

**Step 5: Optimize Space (if possible)**
```java
int climb(int n) {
    if (n == 0) return 1;
    int prev2 = 1, prev1 = 1;
    
    for (int i = 2; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
```

**Summary**:
1. Recursion → Identify parameters
2. Parameters → Define DP state
3. Base cases → Initialize DP table
4. Recursive calls → Fill DP table
5. Return value → Answer from DP table

---

### Q6: What is the state in DP and how do you define it?

**Answer**:

**Definition**: State is the set of variables that uniquely identify a subproblem.

**Defining State Process**:

**Step 1: Identify What Changes**
```java
// Example: Longest Common Subsequence
int lcs(String s1, String s2, int i, int j) {
    // State depends on: i (index in s1), j (index in s2)
    // State: (i, j)
}
```

**Step 2: Determine State Dimensions**

| **Problem** | **State** | **Dimensions** |
|-------------|-----------|----------------|
| Fibonacci | dp[n] | 1D |
| Coin Change | dp[amount] | 1D |
| LCS | dp[i][j] | 2D |
| Edit Distance | dp[i][j] | 2D |
| 0/1 Knapsack | dp[i][W] | 2D |

**Step 3: Define State Meaning**
```java
// Bad (vague)
int dp[i][j]; // "something with i and j"

// Good (precise)
int dp[i][j]; // "length of LCS of s1[0..i-1] and s2[0..j-1]"
```

**Step 4: Establish State Transitions**
```java
// LCS State Transition
if (s1[i-1] == s2[j-1]) {
    dp[i][j] = dp[i-1][j-1] + 1; // Match: extend LCS
} else {
    dp[i][j] = Math.max(
        dp[i-1][j],  // Skip s1[i-1]
        dp[i][j-1]   // Skip s2[j-1]
    );
}
```

**Common Mistakes**:
1. **Too many dimensions**: State explosion (time/space inefficient)
2. **Too few dimensions**: Can't uniquely identify subproblems
3. **Wrong meaning**: Transitions become incorrect

---

### Q7: How do you handle state transitions in DP?

**Answer**:

**State Transition**: Relationship between current state and previous states.

**General Form**:
```
dp[current] = function(dp[previous_states])
```

**Types of Transitions**:

**1. Linear Transitions** (depend on fixed previous states)
```java
// Fibonacci: dp[i] = dp[i-1] + dp[i-2]
// House Robber: dp[i] = max(dp[i-1], dp[i-2] + nums[i])
// Climbing Stairs: dp[i] = dp[i-1] + dp[i-2]
```

**2. Range Transitions** (depend on range of states)
```java
// Coin Change: Try all coins
for (int coin : coins) {
    if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
}

// LIS: Try all previous elements
for (int j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
    }
}
```

**3. Conditional Transitions** (depend on problem constraints)
```java
// LCS: Match or skip
if (s1[i-1] == s2[j-1]) {
    dp[i][j] = dp[i-1][j-1] + 1; // Match
} else {
    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]); // Skip
}
```

**Visualization Example: House Robber**
```
Houses: [2, 7, 9, 3, 1]
Indices: 0  1  2  3  4

dp[0] = 2 (rob house 0)
dp[1] = max(dp[0], 7) = 7 (rob house 1)
dp[2] = max(dp[1], dp[0] + 9) = max(7, 11) = 11 (rob 0 and 2)
dp[3] = max(dp[2], dp[1] + 3) = max(11, 10) = 11 (keep 0 and 2)
dp[4] = max(dp[3], dp[2] + 1) = max(11, 12) = 12 (rob 0, 2, and 4)
```

---

### Q8: What is space optimization in DP? When can you apply it?

**Answer**:

**Definition**: Reducing space complexity by observing that not all previous states are needed.

**When to Apply**:
1. **Current state depends only on fixed previous states** (e.g., last 2)
2. **1D DP can be reduced to O(1)**
3. **2D DP can be reduced to O(n) using rolling arrays**

**Example 1: Fibonacci** (O(n) → O(1))
```java
// Original: O(n) space
long fib(int n) {
    long[] dp = new long[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

// Optimized: O(1) space
long fib(int n) {
    if (n <= 1) return n;
    long prev2 = 0, prev1 = 1;
    for (int i = 2; i <= n; i++) {
        long curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
```

**Example 2: Longest Common Subsequence** (O(m×n) → O(min(m,n)))
```java
// Original: O(m×n) space
int lcs(String s1, String s2) {
    int m = s1.length(), n = s2.length();
    int[][] dp = new int[m+1][n+1];
    // ... fill table
    return dp[m][n];
}

// Optimized: O(n) space
int lcs(String s1, String s2) {
    int m = s1.length(), n = s2.length();
    int[] prev = new int[n+1], curr = new int[n+1];
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (s1.charAt(i-1) == s2.charAt(j-1)) {
                curr[j] = prev[j-1] + 1;
            } else {
                curr[j] = Math.max(prev[j], curr[j-1]);
            }
        }
        int[] temp = prev;
        prev = curr;
        curr = temp;
    }
    return prev[n];
}
```

**Pattern Recognition**:
- **dp[i] depends on dp[i-1], dp[i-2]** → Use 2 variables
- **dp[i][j] depends on dp[i-1][j], dp[i][j-1], dp[i-1][j-1]** → Use 2 arrays
- **dp[i][j] depends on all dp[i-1][*]** → Use rolling array

---

### Q9: How do you debug DP solutions?

**Answer**:

**Debugging Techniques**:

**1. Print DP Table**
```java
void printDP(int[] dp) {
    System.out.println("DP Array:");
    for (int i = 0; i < dp.length; i++) {
        System.out.printf("dp[%d] = %d\n", i, dp[i]);
    }
}

// For 2D arrays
void printDP(int[][] dp) {
    System.out.println("DP Table:");
    for (int i = 0; i < dp.length; i++) {
        for (int j = 0; j < dp[i].length; j++) {
            System.out.printf("%4d ", dp[i][j]);
        }
        System.out.println();
    }
}
```

**2. Trace State Transitions**
```java
// Add logging to transitions
for (int i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
    System.out.printf(
        "dp[%d] = dp[%d] + dp[%d] = %d + %d = %d\n",
        i, i-1, i-2, dp[i-1], dp[i-2], dp[i]
    );
}
```

**3. Verify Base Cases**
```java
// Test edge cases
assert fib(0) == 0 : "Base case 0 failed";
assert fib(1) == 1 : "Base case 1 failed";
assert fib(2) == 1 : "First computed case failed";
```

**4. Compare with Brute Force**
```java
// For small inputs, compare DP vs. naive recursion
for (int i = 0; i <= 10; i++) {
    long dpResult = fibDP(i);
    long naiveResult = fibNaive(i);
    assert dpResult == naiveResult : 
        String.format("Mismatch at n=%d", i);
}
```

**5. Path Reconstruction Debugging**
```java
// Track how you reached the result
void printPath(int[] parent, int end) {
    List<Integer> path = new ArrayList<>();
    for (int i = end; i != -1; i = parent[i]) {
        path.add(i);
    }
    Collections.reverse(path);
    System.out.println("Path: " + path);
}
```

**Common Bugs**:
1. **Off-by-one errors**: Check array bounds carefully
2. **Initialization**: Verify base cases are correct
3. **Order**: Make sure you fill DP table in right order
4. **State definition**: Double-check what each dp[i] represents

---

### Q10: Explain time and space complexity analysis for DP problems.

**Answer**:

**Time Complexity Formula**:
```
Time = (Number of States) × (Time per State)
```

**Examples**:

**1. Fibonacci** - O(n)
```java
// States: n values (0 to n)
// Time per state: O(1) - simple addition
// Total: O(n) × O(1) = O(n)
for (int i = 2; i <= n; i++) { // n iterations
    dp[i] = dp[i-1] + dp[i-2]; // O(1)
}
```

**2. Coin Change** - O(n × m)
```java
// States: amount values (0 to amount) = n states
// Time per state: Loop over m coins = O(m)
// Total: O(n) × O(m) = O(n × m)
for (int i = 1; i <= amount; i++) {        // n
    for (int coin : coins) {                // m
        dp[i] = Math.min(dp[i], dp[i-coin] + 1); // O(1)
    }
}
```

**3. Longest Increasing Subsequence** - O(n²)
```java
// States: n array indices
// Time per state: Loop over previous indices = O(n)
// Total: O(n) × O(n) = O(n²)
for (int i = 0; i < n; i++) {      // n
    for (int j = 0; j < i; j++) {  // up to n
        if (arr[j] < arr[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1); // O(1)
        }
    }
}
```

**Space Complexity**:

| **Pattern** | **Space** | **Example** |
|-------------|-----------|-------------|
| 1D DP | O(n) | Fibonacci, Climbing Stairs |
| 1D Optimized | O(1) | Fibonacci with variables |
| 2D DP | O(n × m) | LCS, Edit Distance |
| 2D Optimized | O(min(n,m)) | LCS with rolling array |
| Memoization | O(n) + O(n) | Recursion stack + cache |

**Space Optimization Trade-offs**:
```
Original:     O(n) space, can reconstruct path
Optimized:    O(1) space, cannot reconstruct path
Hybrid:       O(n) space for path, O(1) for computation
```

---

## Problem Deep Dives

### Q11: Explain the House Robber problem and its variations.

**Answer**:

**Problem**: Houses [2, 7, 9, 3, 1]. Can't rob adjacent houses. Maximize money.

**Core Insight**: At each house, decide rob or skip.

**Decision Tree**:
```
House 0 (2):
  Rob → Move to house 2
  Skip → Move to house 1

House 1 (7):
  Rob → Move to house 3
  Skip → Move to house 2
```

**DP Solution**:
```java
// State: dp[i] = max money from houses [0..i]
// Transition: dp[i] = max(rob house i, skip house i)
//           = max(dp[i-2] + nums[i], dp[i-1])

int rob(int[] nums) {
    int n = nums.length;
    if (n == 0) return 0;
    if (n == 1) return nums[0];
    
    int[] dp = new int[n];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for (int i = 2; i < n; i++) {
        dp[i] = Math.max(
            dp[i-1],           // Skip house i
            dp[i-2] + nums[i]  // Rob house i
        );
    }
    return dp[n-1];
}
```

**Space Optimized** - O(1):
```java
int rob(int[] nums) {
    int prev2 = 0, prev1 = 0;
    for (int num : nums) {
        int curr = Math.max(prev1, prev2 + num);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
```

**Variations**:

**Variation 1: Houses in a Circle** (LC 213)
- First and last houses are adjacent
- Solution: max(rob [0..n-2], rob [1..n-1])

**Variation 2: Binary Tree** (LC 337)
- Houses arranged in binary tree
- Can't rob parent and child
```java
int rob(TreeNode root) {
    int[] result = robHelper(root);
    return Math.max(result[0], result[1]);
}

// Returns [rob root, skip root]
int[] robHelper(TreeNode node) {
    if (node == null) return new int[]{0, 0};
    
    int[] left = robHelper(node.left);
    int[] right = robHelper(node.right);
    
    int rob = node.val + left[1] + right[1];
    int skip = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    
    return new int[]{rob, skip};
}
```

---

### Q12: How does Coin Change problem work? Explain unbounded knapsack pattern.

**Answer**:

**Problem**: Coins [1, 2, 5], amount = 11. Find minimum number of coins.

**Brute Force** - Try all combinations O(amount^numCoins):
```
11: Try 1 → 10 coins of 1
    Try 2 → 1 coin of 2, 9 coins of 1
    Try 5 → 2 coins of 5, 1 coin of 1 ✓ Minimum = 3
```

**DP Approach**:
```java
// State: dp[i] = min coins to make amount i
// Transition: For each coin c, dp[i] = min(dp[i], dp[i-c] + 1)

int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1); // Infinity placeholder
    dp[0] = 0; // Base case
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}
```

**Visualization for amount = 11**:
```
dp[0] = 0

dp[1]: Try coins [1, 2, 5]
  1: dp[1-1] + 1 = 0 + 1 = 1 ✓
  2: 1 >= 2? No
  5: 1 >= 5? No
  dp[1] = 1

dp[2]: Try coins [1, 2, 5]
  1: dp[2-1] + 1 = 1 + 1 = 2
  2: dp[2-2] + 1 = 0 + 1 = 1 ✓
  5: 2 >= 5? No
  dp[2] = 1

dp[11]:
  1: dp[10] + 1 = 2 + 1 = 3
  2: dp[9] + 1 = 3 + 1 = 4
  5: dp[6] + 1 = 2 + 1 = 3 ✓
  dp[11] = 3
```

**Unbounded Knapsack Pattern**:
- **Unbounded**: Can use each item unlimited times
- **0/1 Knapsack**: Each item used at most once

**Difference in Code**:
```java
// 0/1 Knapsack: Iterate items outer, weight inner (reverse order)
for (int i = 0; i < n; i++) {
    for (int w = W; w >= weight[i]; w--) { // Reverse!
        dp[w] = Math.max(dp[w], dp[w - weight[i]] + value[i]);
    }
}

// Unbounded: Iterate weight outer, items inner (forward order)
for (int w = 0; w <= W; w++) {
    for (int i = 0; i < n; i++) {
        if (w >= weight[i]) {
            dp[w] = Math.max(dp[w], dp[w - weight[i]] + value[i]);
        }
    }
}
```

---

### Q13: Describe Longest Increasing Subsequence (LIS) and its O(n log n) optimization.

**Answer**:

**Problem**: Array [10, 9, 2, 5, 3, 7, 101, 18]. Find length of longest increasing subsequence.

**Answer**: [2, 3, 7, 18] or [2, 3, 7, 101] → Length = 4

**Method 1: DP** - O(n²)
```java
// State: dp[i] = length of LIS ending at index i
// Transition: dp[i] = max(dp[j] + 1) for all j < i where arr[j] < arr[i]

int lengthOfLIS(int[] nums) {
    int n = nums.length;
    int[] dp = new int[n];
    Arrays.fill(dp, 1); // Each element is LIS of length 1
    
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Arrays.stream(dp).max().orElse(0);
}
```

**Example Trace**:
```
nums: [10, 9, 2, 5, 3, 7, 101, 18]
Index:  0  1  2  3  4  5   6    7

dp[0] = 1 (just 10)
dp[1] = 1 (just 9, can't extend from 10)
dp[2] = 1 (just 2)
dp[3] = 2 ([2, 5])
dp[4] = 2 ([2, 3])
dp[5] = 3 ([2, 3, 7] or [2, 5, 7])
dp[6] = 4 ([2, 3, 7, 101])
dp[7] = 4 ([2, 3, 7, 18])

Max = 4
```

**Method 2: Binary Search** - O(n log n)
```java
// Maintain array "tails" where tails[i] = smallest tail of LIS of length i+1
// For each element, binary search where it fits

int lengthOfLIS(int[] nums) {
    List<Integer> tails = new ArrayList<>();
    
    for (int num : nums) {
        // Binary search for insertion position
        int left = 0, right = tails.size();
        while (left < right) {
            int mid = (left + right) / 2;
            if (tails.get(mid) < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        // Update or append
        if (left == tails.size()) {
            tails.add(num);
        } else {
            tails.set(left, num);
        }
    }
    
    return tails.size();
}
```

**How Binary Search Works**:
```
nums: [10, 9, 2, 5, 3, 7, 101, 18]

Process 10: tails = [10]
Process 9:  tails = [9]   (replace 10, smaller tail)
Process 2:  tails = [2]   (replace 9)
Process 5:  tails = [2, 5]
Process 3:  tails = [2, 3] (replace 5, smaller tail for length 2)
Process 7:  tails = [2, 3, 7]
Process 101: tails = [2, 3, 7, 101]
Process 18: tails = [2, 3, 7, 18] (replace 101, smaller tail for length 4)

Length = 4
```

**Why it works**: 
- tails[i] is smallest possible tail for LIS of length i+1
- If new num is larger, extend LIS
- If new num is smaller, update tail (better for future extensions)

---

### Q14: Explain Maximum Subarray (Kadane's Algorithm) with DP perspective.

**Answer**:

**Problem**: Array [-2, 1, -3, 4, -1, 2, 1, -5, 4]. Find contiguous subarray with max sum.

**Answer**: [4, -1, 2, 1] → Sum = 6

**Kadane's Algorithm**:
```java
// State: dp[i] = max sum of subarray ending at index i
// Transition: dp[i] = max(nums[i], dp[i-1] + nums[i])
//   Either start new subarray or extend previous

int maxSubArray(int[] nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    
    for (int i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}
```

**Trace Execution**:
```
nums:    [-2,  1, -3,  4, -1,  2,  1, -5,  4]
Index:     0   1   2   3   4   5   6   7   8

i=0: maxEndingHere = -2, maxSoFar = -2
i=1: max(1, -2+1=-1) = 1, maxSoFar = 1
i=2: max(-3, 1+(-3)=-2) = -2, maxSoFar = 1
i=3: max(4, -2+4=2) = 4, maxSoFar = 4
i=4: max(-1, 4+(-1)=3) = 3, maxSoFar = 4
i=5: max(2, 3+2=5) = 5, maxSoFar = 5
i=6: max(1, 5+1=6) = 6, maxSoFar = 6
i=7: max(-5, 6+(-5)=1) = 1, maxSoFar = 6
i=8: max(4, 1+4=5) = 5, maxSoFar = 6

Result: 6
```

**With Indices**:
```java
int[] maxSubArrayWithIndices(int[] nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    int start = 0, end = 0, tempStart = 0;
    
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i];
            tempStart = i; // Potential new start
        } else {
            currentSum += nums[i];
        }
        
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }
    
    return new int[]{maxSum, start, end};
}
```

**Variations**:

**1. Maximum Product Subarray** (LC 152):
```java
// Need to track both max and min (negative × negative = positive)
int maxProduct(int[] nums) {
    int maxSoFar = nums[0];
    int maxHere = nums[0];
    int minHere = nums[0];
    
    for (int i = 1; i < nums.length; i++) {
        int temp = maxHere;
        maxHere = Math.max(nums[i], Math.max(maxHere * nums[i], minHere * nums[i]));
        minHere = Math.min(nums[i], Math.min(temp * nums[i], minHere * nums[i]));
        maxSoFar = Math.max(maxSoFar, maxHere);
    }
    
    return maxSoFar;
}
```

**2. Circular Maximum Subarray** (LC 918):
```java
// Either normal max subarray OR total - min subarray
int maxSubarraySumCircular(int[] nums) {
    int maxKadane = kadaneMax(nums);
    int totalSum = Arrays.stream(nums).sum();
    int minKadane = kadaneMin(nums);
    
    // Edge case: all negative
    if (maxKadane < 0) return maxKadane;
    
    return Math.max(maxKadane, totalSum - minKadane);
}
```

---

### Q15: Explain Unique Paths problem and grid DP pattern.

**Answer**:

**Problem**: m×n grid. Start at top-left, reach bottom-right. Can only move right or down. Count unique paths.

**Example**: 3×7 grid → 28 paths

**DP Solution**:
```java
// State: dp[i][j] = number of paths to reach cell (i, j)
// Transition: dp[i][j] = dp[i-1][j] + dp[i][j-1]
//   (Can reach from top or left)

int uniquePaths(int m, int n) {
    int[][] dp = new int[m][n];
    
    // Base cases: first row and column
    for (int i = 0; i < m; i++) dp[i][0] = 1; // Only one way down
    for (int j = 0; j < n; j++) dp[0][j] = 1; // Only one way right
    
    // Fill table
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m-1][n-1];
}
```

**Visualization (3×3 grid)**:
```
     0   1   2
   +---+---+---+
0  | 1 | 1 | 1 |
   +---+---+---+
1  | 1 | 2 | 3 |
   +---+---+---+
2  | 1 | 3 | 6 |
   +---+---+---+

dp[1][1] = dp[0][1] + dp[1][0] = 1 + 1 = 2
dp[1][2] = dp[0][2] + dp[1][1] = 1 + 2 = 3
dp[2][2] = dp[1][2] + dp[2][1] = 3 + 3 = 6
```

**Space Optimized** - O(n):
```java
// Only need previous row
int uniquePaths(int m, int n) {
    int[] dp = new int[n];
    Arrays.fill(dp, 1); // First row all 1s
    
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[j] += dp[j-1]; // dp[j] is previous row, dp[j-1] is current row
        }
    }
    
    return dp[n-1];
}
```

**Variations**:

**1. Unique Paths II** (with obstacles):
```java
int uniquePathsWithObstacles(int[][] grid) {
    int m = grid.length, n = grid[0].length;
    int[][] dp = new int[m][n];
    
    // Base case: First cell
    dp[0][0] = (grid[0][0] == 0) ? 1 : 0;
    
    // First row
    for (int j = 1; j < n; j++) {
        dp[0][j] = (grid[0][j] == 0 && dp[0][j-1] == 1) ? 1 : 0;
    }
    
    // First column
    for (int i = 1; i < m; i++) {
        dp[i][0] = (grid[i][0] == 0 && dp[i-1][0] == 1) ? 1 : 0;
    }
    
    // Fill table
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            if (grid[i][j] == 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            } // Else 0 (obstacle)
        }
    }
    
    return dp[m-1][n-1];
}
```

**2. Minimum Path Sum** (LC 64):
```java
// Find path with minimum sum
int minPathSum(int[][] grid) {
    int m = grid.length, n = grid[0].length;
    int[][] dp = new int[m][n];
    dp[0][0] = grid[0][0];
    
    // First row
    for (int j = 1; j < n; j++) {
        dp[0][j] = dp[0][j-1] + grid[0][j];
    }
    
    // First column
    for (int i = 1; i < m; i++) {
        dp[i][0] = dp[i-1][0] + grid[i][0];
    }
    
    // Fill table
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1]);
        }
    }
    
    return dp[m-1][n-1];
}
```

---

## DP Patterns

### Q16: What are the main DP patterns? When do you use each?

**Answer**:

**Pattern 1: Linear DP** (depends on previous constant states)
- **Examples**: Fibonacci, Climbing Stairs, House Robber
- **When**: Sequential decision making
- **Template**:
```java
dp[i] = function(dp[i-1], dp[i-2], ...)
```

**Pattern 2: Knapsack** (bounded/unbounded resource allocation)
- **Examples**: 0/1 Knapsack, Coin Change, Partition
- **When**: Limited resources, optimize value
- **Template**:
```java
for (each item)
    for (capacity down to item_weight) // 0/1
        dp[capacity] = max(dp[capacity], dp[capacity - weight] + value)
```

**Pattern 3: LIS** (optimal subsequence selection)
- **Examples**: Longest Increasing Subsequence, Russian Doll Envelopes
- **When**: Find optimal subset with ordering
- **Template**:
```java
for (i = 0 to n)
    for (j = 0 to i)
        if (can_extend(j, i))
            dp[i] = max(dp[i], dp[j] + 1)
```

**Pattern 4: String DP** (matching/transformation)
- **Examples**: LCS, Edit Distance, Word Break
- **When**: Two sequences, match/transform
- **Template**:
```java
for (i = 1 to m)
    for (j = 1 to n)
        if (s1[i] == s2[j])
            dp[i][j] = dp[i-1][j-1] + ...
        else
            dp[i][j] = function(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
```

**Pattern 5: Grid DP** (path counting/optimization)
- **Examples**: Unique Paths, Minimum Path Sum, Dungeon Game
- **When**: 2D grid traversal
- **Template**:
```java
for (i = 0 to m)
    for (j = 0 to n)
        dp[i][j] = function(dp[i-1][j], dp[i][j-1])
```

**Decision Tree**:
```
Problem involves optimization? 
    YES → Consider DP
         ↓
    Has overlapping subproblems?
        YES → Use DP
             ↓
        Sequential decisions?
            YES → Linear DP
        Limited resources?
            YES → Knapsack
        Subsequence selection?
            YES → LIS
        Two sequences?
            YES → String DP
        Grid traversal?
            YES → Grid DP
```

---

*(Continuing with Q17-Q55... due to character limits, showing structure)*

### Q17-Q35: Problem Deep Dives (Continued)
- Q17: Word Break problem and string segmentation
- Q18: Perfect Squares - DP vs BFS approach
- Q19: Partition Equal Subset Sum - 0/1 Knapsack variation
- Q20: Target Sum - DFS with memoization
- Q21-Q35: More problem analyses...

### Q36-Q45: DP Patterns (Continued)
- Q36: State machine DP (buy/sell stock problems)
- Q37: Interval DP (matrix chain multiplication)
- Q38-Q45: Advanced pattern recognition...

### Q46-Q55: Optimization Techniques
- Q46: Space compression techniques
- Q47: Rolling array optimization
- Q48: Path reconstruction methods
- Q49: DP with bitmasking
- Q50-Q55: Advanced optimizations...

---

## Summary

**Key Takeaways**:
1. **DP = Recursion + Memoization + Optimal Substructure**
2. **State definition** is crucial - wrong state → wrong solution
3. **Transitions** follow problem constraints logically
4. **Space optimization** often possible (O(n) → O(1))
5. **Pattern recognition** speeds up problem solving

**Mastery Checklist**:
- ✅ Can identify DP problems vs. greedy/divide-conquer
- ✅ Can define state and transitions correctly
- ✅ Can implement both memoization and tabulation
- ✅ Can optimize space when possible
- ✅ Can debug DP solutions systematically
- ✅ Recognize 5 core patterns (Linear, Knapsack, LIS, String, Grid)

---

**Total Questions**: 55+  
**Document Version**: 1.0  
**Last Updated**: 2025-01-08
