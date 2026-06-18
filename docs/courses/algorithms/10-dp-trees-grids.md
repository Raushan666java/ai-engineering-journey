# Chapter 10: Dynamic Programming on Trees and Grids

> **Prerequisites:** [Chapter 9: Dynamic Programming — Sequences](./09-dp-sequences.md) — DP recurrences for chain structures | **Next:** [Chapter 11: Shortest Paths & MST](./11-shortest-paths-mst.md) — Graph algorithms with DP foundations

## Learning Objectives

By the end of this chapter, students will be able to:

1. Solve DP problems on trees: tree diameter, maximum path sum, tree DP with states.
2. Solve DP problems on grids: unique paths, minimum path sum, DP with obstacles.
3. Apply DP with bitmasking for state-space problems (traveling salesman, Hamiltonian paths).

---

### Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Tree DP | Post-order DFS combines child results | Parent depends on its subtrees — visit children first |
| Tree Diameter | Farthest node from farthest node | Two-pass DFS or DP tracking top-2 heights |
| Grid DP | dp[i][j] = f(dp[i-1][j], dp[i][j-1]) | Path problems: right+down simplifies to 2D recurrence |
| DP with Obstacles | Skip blocked cells | Same recurrence but dp[i][j] = 0 when blocked |
| DP with Bitmask | dp[mask][v] = min cost ending at v | State = visited set + current node — classic TSP |

### Chapter Roadmap

```mermaid
flowchart LR
    A[Tree & Grid DP] --> B[Tree DP]
    A --> C[Grid DP]
    A --> D[Bitmask DP]
    B --> E[Tree Diameter]
    B --> F[Max Path Sum]
    C --> G[Unique Paths]
    C --> H[Min Path Sum]
    C --> I[Obstacles]
    D --> J[TSP]
    D --> K[Hamiltonian]
```

## Theory

![DP Trees and Grids Diagram](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/algorithms/ch10-dp-trees-grids.png)

### 10.1 DP on Trees

Trees are naturally recursive: each node can be processed after its children are processed (post-order traversal). Tree DP typically defines a state \( dp[u] \) representing the optimal value for the subtree rooted at \( u \).

#### 10.1.1 Tree Diameter

**Problem:** Find the longest path between any two nodes in an undirected tree.

**Approach:** For each node, compute the longest and second-longest path from that node to any leaf in its subtree. The diameter is the maximum over nodes of (longest + second-longest).

```
TreeDiameter(n, adj):
    visited = boolean array of size n
    diameter = 0
    function dfs(u):
        visited[u] = true
        max1 = 0, max2 = 0
        for v in adj[u]:
            if not visited[v]:
                height = dfs(v)
                if height > max1:
                    max2 = max1
                    max1 = height
                else if height > max2:
                    max2 = height
        diameter = max(diameter, max1 + max2)
        return max1 + 1
    dfs(0)
    return diameter
```

**Complexity:** \( O(n) \).

#### 10.1.2 Maximum Path Sum (Binary Tree)

**Problem:** Given a binary tree with integer values (possibly negative), find the maximum sum along any path.

**State:** For each node, compute the maximum sum of a path that starts at the node and goes downward (to either left or right, but not both).

```
MaxPathSum(node):
    if node is null: return 0
    leftGain = max(0, MaxPathSum(node.left))
    rightGain = max(0, MaxPathSum(node.right))
    currentSum = node.val + leftGain + rightGain
    globalMax = max(globalMax, currentSum)
    return node.val + max(leftGain, rightGain)
```

#### 10.1.3 Tree DP with States (House Robber III)

**Problem:** Given a binary tree, select a set of nodes such that no two adjacent nodes are selected, maximizing the sum of values.

**State:** For each node, compute two values:
- \( dp[u][0] \): maximum sum for the subtree when \( u \) is NOT selected.
- \( dp[u][1] \): maximum sum for the subtree when \( u \) IS selected.

\[
\begin{aligned}
dp[u][0] &= \sum_{v \in \text{children}(u)} \max(dp[v][0], dp[v][1]) \\
dp[u][1] &= \text{val}(u) + \sum_{v \in \text{children}(u)} dp[v][0]
\end{aligned}
\]

> **Pro Tip:** Tree DP always uses post-order DFS — compute children's DP values before the parent's. For the diameter, track the top 2 heights at each node. For state-based problems like House Robber, use dp[u][selected] / dp[u][not_selected] pairs.
>
> **Remember:** In tree DP, the global answer may merge values from different subtrees (as in diameter = max1 + max2). Track a global variable alongside the per-node return value.

**One-Sentence Takeaway:** Tree DP combines post-order DFS recursion with per-node states, solving problems like tree diameter and maximum path sum in O(n) time.

### 10.2 DP on Grids

Grid DP involves traversing a 2D array (grid) from one corner to another, making moves (right, down, diagonal). The DP state typically represents the value at position \( (i, j) \).

#### 10.2.1 Unique Paths

**Problem:** Count the number of ways to travel from the top-left corner to the bottom-right corner of an \( m \times n \) grid, moving only right or down.

\[
dp[i][j] = dp[i-1][j] + dp[i][j-1]
\]

with \( dp[0][*] = dp[*][0] = 1 \).

**Optimization:** Can be solved combinatorially: \( \binom{m+n-2}{m-1} \).

#### 10.2.2 Minimum Path Sum

**Problem:** Given an \( m \times n \) grid of non-negative integers, find the minimum sum along a path from top-left to bottom-right (moving only right or down).

\[
dp[i][j] = \text{grid}[i][j] + \min(dp[i-1][j], dp[i][j-1])
\]

#### 10.2.3 DP with Obstacles

If certain cells are blocked, add a condition:

\[
dp[i][j] = \begin{cases}
0 & \text{if } \text{grid}[i][j] \text{ is an obstacle} \\
dp[i-1][j] + dp[i][j-1] & \text{otherwise}
\end{cases}
\]

> **Pro Tip:** Grid DP can often be space-optimized to 1D — since dp[i][j] only depends on dp[i-1][j] and dp[i][j-1], you only need the previous row and current row, or even a single array with careful iteration.
>
> **Warning:** Don't forget to handle the base row (i=0) and column (j=0) separately — they only have one way to be reached (all rights or all downs).

**One-Sentence Takeaway:** Grid DP uses the recurrence dp[i][j] = f(dp[i-1][j], dp[i][j-1]) for path counting and optimization problems on 2D grids.

### 10.3 DP with Bitmasking

DP with bitmasking is used for problems where we need to track subsets of elements. The state is a bitmask representing a set, and the transition adds or removes elements from the set.

#### 10.3.1 Traveling Salesman Problem (TSP)

**Problem:** Given \( n \) cities and distances \( d[i][j] \), find the shortest tour that visits every city exactly once and returns to the start.

**State:** \( dp[mask][v] \) = minimum cost to visit the set of cities represented by \( mask \) and end at city \( v \).

\[
dp[mask][v] = \min_{u \in mask, u \neq v} (dp[mask \setminus \{v\}][u] + d[u][v])
\]

Base case: \( dp[1 << 0][0] = 0 \).

**Complexity:** \( O(n^2 \cdot 2^n) \), which is exponential but much better than \( O(n!) \).

#### 10.3.2 Hamiltonian Path

A Hamiltonian path visits every vertex exactly once. The DP formulation is identical to TSP without the return-to-start requirement.

> **Pro Tip:** DP with bitmasking has O(n²·2ⁿ) complexity — feasible for n ≤ 20. For larger n, use branch-and-bound or approximation algorithms. The recurrence iterates over all masks (2ⁿ) and for each tries n cities.
>
> **Remember:** Always initialize dp[1 << start][start] = 0. The mask represents which cities have been visited, not the tour order. Extract the visited bit by checking (mask >> v) & 1.

**One-Sentence Takeaway:** Bitmask DP solves TSP in O(n²·2ⁿ) by tracking the visited set as a bitmask and the current endpoint city as the second state dimension.

---

### Example 10.1: Tree Diameter in C++

```cpp
#include <vector>
#include <functional>
#include <algorithm>

int treeDiameter(const std::vector<std::vector<int>>& adj) {
    int n = static_cast<int>(adj.size());
    std::vector<bool> visited(n, false);
    int diameter = 0;
    std::function<int(int)> dfs = [&](int u) -> int {
        visited[u] = true;
        int max1 = 0, max2 = 0;
        for (int v : adj[u]) {
            if (!visited[v]) {
                int height = dfs(v);
                if (height > max1) {
                    max2 = max1;
                    max1 = height;
                } else if (height > max2) {
                    max2 = height;
                }
            }
        }
        diameter = std::max(diameter, max1 + max2);
        return max1 + 1;
    };
    dfs(0);
    return diameter;
}
```

### Example 10.2: Unique Paths with Obstacles

```cpp
#include <vector>

int uniquePathsWithObstacles(const std::vector<std::vector<int>>& grid) {
    int m = static_cast<int>(grid.size());
    int n = static_cast<int>(grid[0].size());
    std::vector<long> dp(n, 0);
    dp[0] = (grid[0][0] == 0) ? 1 : 0;
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (grid[i][j] == 1) {
                dp[j] = 0;
            } else if (j > 0) {
                dp[j] += dp[j - 1];
            }
        }
    }
    return static_cast<int>(dp[n - 1]);
}
```

### Example 10.3: TSP with Bitmasking

```cpp
#include <vector>
#include <algorithm>
#include <climits>

int tsp(const std::vector<std::vector<int>>& dist) {
    int n = static_cast<int>(dist.size());
    int fullMask = (1 << n) - 1;
    std::vector<std::vector<int>> dp(1 << n, std::vector<int>(n, INT_MAX));
    dp[1][0] = 0;

    for (int mask = 1; mask < (1 << n); ++mask) {
        for (int u = 0; u < n; ++u) {
            if (!(mask & (1 << u))) continue;
            if (dp[mask][u] == INT_MAX) continue;
            for (int v = 0; v < n; ++v) {
                if (mask & (1 << v)) continue;
                int newMask = mask | (1 << v);
                dp[newMask][v] = std::min(dp[newMask][v],
                                          dp[mask][u] + dist[u][v]);
            }
        }
    }
    int ans = INT_MAX;
    for (int v = 1; v < n; ++v) {
        if (dp[fullMask][v] != INT_MAX)
            ans = std::min(ans, dp[fullMask][v] + dist[v][0]);
    }
    return ans;
}
```

---

### Concept Comparison Table

| Domain | State Representation | Traversal | Transition | Time |
|--------|---------------------|-----------|------------|------|
| Tree DP | Subtree root | Post-order DFS | Combine children → parent | O(n) |
| Grid DP | Position (i,j) | Row-major iteration | Right/down from neighbors | O(mn) |
| Bitmask DP | (mask, last vertex) | Mask enumeration | Add vertex to mask | O(n²·2ⁿ) |

### Quick Reference

| Category | Key Points |
|----------|------------|
| **Tree DP** | Post-order traversal, combine child results at parent |
| **Tree Diameter** | Track top-2 heights at each node, answer = max1 + max2 |
| **Grid DP** | dp[i][j] depends only on top/left neighbors |
| **Grid Optimization** | Can reduce to 1D array for space |
| **Bitmask DP** | State = visited set (mask) + current endpoint |
| **Bitmask Limits** | n ≤ 20 for feasible O(n²·2ⁿ) runtime |

### Cross-Application Matrix

| Technique | DSA Interviews | Competitive Programming | Real-World |
|-----------|---------------|----------------------|------------|
| Tree DP | Common — diameter, path sum | Tree DP contests | Network routing |
| Grid DP | Very common — path counting | Grid traversal problems | Robotics path planning |
| Bitmask DP | Occasionally — TSP variants | Subset DP problems | Logistics optimization |

---

## Summary

| Problem | DP Type | State | Time |
|---------|---------|-------|------|
| Tree diameter | Post-order | Longest downward path | \( O(n) \) |
| Max path sum | Post-order | Single-branch max sum | \( O(n) \) |
| House robber tree | State per node | Selected/not selected | \( O(n) \) |
| Unique paths | Grid | Count of ways | \( O(mn) \) |
| Min path sum | Grid | Min cost to (i,j) | \( O(mn) \) |
| TSP | Bitmask | (mask, last vertex) | \( O(n^2 2^n) \) |

---

## Exercises

### Chapter Quiz

**Q1.** What traversal does tree DP always use?

- A) Pre-order
- B) In-order
- C) Post-order
- D) Level-order

<details>
<summary>Answer</summary>
C) Post-order — children must be processed before their parent since dp[parent] depends on dp[children].
</details>

**Q2.** What is the time complexity of the DP solution for TSP?

- A) O(n²)
- B) O(n³)
- C) O(n²·2ⁿ)
- D) O(2ⁿ)

<details>
<summary>Answer</summary>
C) O(n²·2ⁿ) — there are n·2ⁿ states (mask × endpoint) and O(n) transitions per state.
</details>

**Q3.** In the unique paths DP, how many ways reach cell (i,j)?

- A) dp[i-1][j] + dp[i][j-1]
- B) dp[i-1][j] · dp[i][j-1]
- C) dp[i-1][j-1] + 1
- D) max(dp[i-1][j], dp[i][j-1]) + 1

<details>
<summary>Answer</summary>
A) dp[i][j] = dp[i-1][j] + dp[i][j-1] — you can arrive from above or from the left.
</details>

### Review Questions

1. Why does tree DP typically use post-order traversal?
2. Explain how bitmasking represents subsets. How many states does TSP require?
3. Can DP on grids be extended to allow diagonal moves? Modify the recurrence.

### Application Problems

4. Implement the House Robber III problem on a binary tree.
5. Solve the minimum path sum problem on a 5x5 grid with obstacles at positions (1,2) and (3,4).
6. Implement TSP for 10 cities with random distances. Compare the DP result with brute force.
7. Given a grid with 0/1 values, find the largest square submatrix of all 1s using DP.

### Challenge Problem

8. Design a DP algorithm for the **maximum sum BST in a binary tree**: given a binary tree, find the subtree that is a BST with the maximum sum. Analyze the complexity.
