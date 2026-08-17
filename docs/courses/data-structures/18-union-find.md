# Chapter 18: Union-Find (Disjoint Set Union)

**Prev:** [Chapter 17: Segment Tree and Fenwick Tree](17-segment-tree.md) | **Next:** None

## Learning Objectives

- Define the Disjoint Set Union (DSU) data structure and its two core operations.
- Implement find with path compression and union by rank/size in C++, Python, and Java.
- Analyze why the inverse-Ackermann amortized complexity is effectively constant.
- Apply DSU to detect cycles in undirected graphs.
- Use DSU in Kruskal's algorithm to construct a Minimum Spanning Tree.
- Solve classic interview problems (Number of Islands II, Accounts Merge, Redundant Connection) using DSU.
- Recognize real-world applications — social networks, image segmentation, percolation.

## Why Union-Find Matters

Imagine you walk into a party with 100 people you've never met. You want to know: *are these two people in the same social circle?* Each time someone introduces themselves — "Hi, I'm Alice, and this is my friend Bob" — you mentally merge their groups. After enough introductions, you can answer instantly whether any two people belong to the same extended friend group.

This is exactly what **Union-Find** does. It starts with every element in its own set (every person is their own island). As relationships arrive — (Alice, Bob), (Bob, Charlie) — it **unions** their sets. When you need to check connectivity — "Is Dave in Alice's circle?" — it **finds** the representative of each person's set and compares.

Union-Find is the most efficient data structure for **dynamic connectivity** — handling union and find queries interleaved in real time. With path compression and union by rank, both operations run in amortized **O(α(n))**, the inverse Ackermann function — for any practical input (n ≤ 10⁶⁰⁰), α(n) ≤ 5. That's effectively **constant time per operation**.

From Kruskal's MST (networks, circuit design) to social networks ("People You May Know"), image segmentation, and percolation theory — Union-Find is the hidden engine behind connectivity at scale.

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| DSU operations | Find + Union with optimizations | Near-constant time per operation |
| Path compression | Flatten tree during find | O(log n) amortized alone, O(α(n)) with union by rank |
| Union by rank | Attach smaller tree under larger | Limits tree depth to O(log n) |
| Combined optimizations | Path compression + union by rank | O(α(n)) amortized — effectively constant |
| Kruskal's MST | Sort edges + DSU for cycle detection | O(E log V) total |
| Connected components | Union adjacent elements in any graph | O(n α(n)) for n elements |
| Dynamic connectivity | Interleaved union + find queries | Answer online in near-constant time |

## Chapter Roadmap

```mermaid
flowchart TD
    A[DSU Operations] --> B[find(x)]
    A --> C[union(x,y)]
    B --> D[Path Compression]
    C --> E[Union by Rank]
    D --> F[O(α(n)) — Inverse Ackermann]
    E --> F
    F --> G[Core Applications]
    G --> H[Kruskal's MST]
    G --> I[Cycle Detection]
    G --> J[Connected Components]
    G --> K[Image Segmentation]
    G --> L[Social Networks]
    F --> M[Interview Problems]
    M --> N[Number of Islands II]
    M --> O[Accounts Merge]
    M --> P[Redundant Connection]
```

> **One-Sentence Takeaway:** DSU, with path compression and union by rank, supports find and union in amortized near-constant O(α(n)) — the most efficient dynamic connectivity structure ever devised.

## The Find Operation

### Real-World Analogy


Think of a corporate org chart. Every employee reports to a manager, who reports to a director, who reports to the CEO. **Find** is the question: *Who is the ultimate boss of this person?* You follow the chain of command until you reach the top — the person who reports to nobody (self-loop). That top person is the **representative** of the entire set (the whole org tree).

### What Does Find Do?


Given an element `x`, Find returns the **root** (representative) of the set containing `x`. If `parent[x] == x`, then `x` is a root. Otherwise, we recursively follow parent pointers.

### Algorithm Steps


1. Check if `parent[x] == x`. If yes, `x` is the root — return `x`.
2. Otherwise, recursively call `find(parent[x])`.
3. Return the root found by the recursive call.

### Pseudocode


```
FUNCTION find(x):
    IF parent[x] != x THEN
        parent[x] = find(parent[x])    // path compression
    END IF
    RETURN parent[x]
END FUNCTION
```

### Step-by-Step Dry Run: Find Operation


**Initial State** (after some unions): parent = [0, 0, 1, 2, 4] for n = 5 elements.

| Element | 0 | 1 | 2 | 3 | 4 |
|----------|---|---|---|---|---|
| parent[] | 0 | 0 | 1 | 2 | 4 |

The tree structure:
```
    0 ← 1 ← 2 ← 3     4
```

**Trace: find(3)**

| Step | x | parent[x] | parent[x] == x? | Action | Return |
|------|---|-----------|-----------------|--------|--------|
| 1 | 3 | 2 | No | Recurse find(2) | — |
| 2 | 2 | 1 | No | Recurse find(1) | — |
| 3 | 1 | 0 | No | Recurse find(0) | — |
| 4 | 0 | 0 | **Yes** | Root found | 0 |
| Back | 1 | — | — | parent[1] = 0 | 0 |
| Back | 2 | — | — | parent[2] = 0 | 0 |
| Back | 3 | — | — | parent[3] = 0 | 0 |

**After find(3)**: parent = [0, 0, 0, 0, 4]

Now the tree is flat — 1, 2, 3 all point directly to root 0. That's **path compression** in action.

```
    0 ← 1     (parent[1]=0)
    0 ← 2     (parent[2]=0)
    0 ← 3     (parent[3]=0)
    4         (alone)
```

### Implementations


```cpp
// C++
int find(int x) {
    if (parent[x] != x) {
        parent[x] = find(parent[x]); // path compression
    }
    return parent[x];
}
```

```python
# Python
def find(self, x: int) -> int:
    if self.parent[x] != x:
        self.parent[x] = self.find(self.parent[x])  # path compression
    return self.parent[x]
```

```java
// Java
public int find(int x) {
    if (parent[x] != x) {
        parent[x] = find(parent[x]); // path compression
    }
    return parent[x];
}
```

### Complexity Analysis


| Version | Time Complexity | Why? |
|---------|----------------|------|
| Without path compression | O(n) worst-case | Tree can degenerate into a linked list |
| With path compression only | O(log n) amortized | Each find flattens the path; subsequent finds are faster |
| With both optimizations | **O(α(n))** amortized | Inverse Ackermann function — see combined analysis |

**Why O(α(n))?** The inverse Ackermann function α(n) grows so slowly that for any n ≤ 10⁶⁰⁰, α(n) ≤ 5. It is the inverse of the Ackermann function A(n), which grows faster than any primitive recursive function. The proof (by Tarjan 1975) shows that the number of times path compression can improve any node's parent is bounded by the iterated logarithm, which collapses under the inverse Ackermann bound.

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|--------------|
| Extremely fast — effectively constant per operation | Read-only operation; no built-in support for splits |
| Simple to implement (~10 lines of code) | No fast way to list all elements in a set |
| Excellent for online connectivity queries | Does not support set deletion |
| Works well for large n (millions of elements) | Without optimizations, worst-case is O(n) |

### Edge Cases


| Edge Case | Behavior |
|-----------|----------|
| Single element | find(0) → 0 immediately; parent[0] == 0 |
| Element is root | Returns itself immediately |
| All elements connected | Every find returns the same root |
| Self-loop | find(x) where parent[x] == x; O(1) termination |

## The Union Operation

### Real-World Analogy


Two companies are merging. Each has its own CEO (root). To merge, the board decides which CEO stays at the top and which becomes a subordinate. That's **union**: pick two sets, designate one root as the new overall root, and attach the other root under it.

### What Does Union Do?


Given two elements `x` and `y`, Union merges the sets containing `x` and `y`. It finds the roots of both, and if they are different, makes one root point to the other. This reduces the total number of sets by one.

### Algorithm Steps


1. Find the root of `x`: `rootX = find(x)`.
2. Find the root of `y`: `rootY = find(y)`.
3. If `rootX == rootY`, they are already in the same set — return.
4. Otherwise, attach `rootY` under `rootX` (or vice versa, depending on rank/size).

### Pseudocode (without rank optimization — basic version)


```
FUNCTION union(x, y):
    rootX = find(x)
    rootY = find(y)
    IF rootX == rootY THEN RETURN
    parent[rootY] = rootX        // attach Y's root under X's root
    numSets = numSets - 1
END FUNCTION
```

### Step-by-Step Dry Run: Union Operation


**Initial State**: parent = [0, 1, 2, 3, 4], n = 5, numSets = 5.

| Element | 0 | 1 | 2 | 3 | 4 |
|----------|---|---|---|---|---|
| parent[] | 0 | 1 | 2 | 3 | 4 |

**Trace: union(2, 4)**

| Step | Action | parent[] after | numSets |
|------|--------|----------------|---------|
| 1 | find(2) = 2, find(4) = 4 | [0, 1, 2, 3, 4] | 5 |
| 2 | rootX(2) ≠ rootY(4) → attach | parent[4] = 2 | — |
| 3 | Decrement set count | [0, 1, 2, 3, 2] | 4 |

**Next: union(1, 3)**

| Step | Action | parent[] after | numSets |
|------|--------|----------------|---------|
| 1 | find(1) = 1, find(3) = 3 | [0, 1, 2, 3, 2] | 4 |
| 2 | rootX(1) ≠ rootY(3) → attach | parent[3] = 1 | — |
| 3 | Decrement set count | [0, 1, 2, 1, 2] | 3 |

**Next: union(3, 4)**

| Step | Action | parent[] after | numSets |
|------|--------|----------------|---------|
| 1 | find(3) = find(1) = 1, find(4) = find(2) = 2 | [0, 1, 2, 1, 2] | 3 |
| 2 | rootX(1) ≠ rootY(2) → attach | parent[2] = 1 | — |
| 3 | Decrement set count | [0, 1, 1, 1, 2] | 2 |

**Final structure**:
```
0        1 ← 2 ← 4
         ↑
         3
```
Sets: {0}, {1, 2, 3, 4}, numSets = 2

### Implementations


```cpp
// C++
void unionSets(int x, int y) {
    int rootX = find(x);
    int rootY = find(y);
    if (rootX == rootY) return;

    parent[rootY] = rootX; // basic: attach Y under X
    --numSets;
}
```

```python
# Python
def union(self, x: int, y: int) -> None:
    root_x = self.find(x)
    root_y = self.find(y)
    if root_x == root_y:
        return

    self.parent[root_y] = root_x  # basic: attach Y under X
    self.num_sets -= 1
```

```java
// Java
public void union(int x, int y) {
    int rootX = find(x);
    int rootY = find(y);
    if (rootX == rootY) return;

    parent[rootY] = rootX; // basic: attach Y under X
    numSets--;
}
```

### Complexity Analysis


| Version | Time Complexity | Why? |
|---------|----------------|------|
| Basic (unoptimized) union | O(n) | Each find can traverse O(n) nodes |
| With path compression | O(log n) amortized | Flattening reduces future traversal |
| With union by rank | **O(α(n))** amortized | Both optimizations combined |

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|--------------|
| Merges sets in near-constant time | Cannot undo a union (without rollback) |
| Automatically maintains connectivity | Order of unions affects tree shape (unoptimized) |
| Minimal code overhead | No ability to split a set |

### Edge Cases


| Edge Case | Behavior |
|-----------|----------|
| Union already-connected elements | find(u) == find(v) → returns immediately, no change |
| Self-union (x == y) | rootX == rootY — no-op |
| Union with a root element | Works identically — find returns the root immediately |
| Union across large, already-compressed trees | Both finds are O(α(n)), union is O(1) |

## Path Compression

### Real-World Analogy


In a large bureaucracy, every time someone asks, *"Who's the CEO?"*, the person they ask writes down the answer so nobody has to ask again. If a junior employee asks who the CEO is, they climb the chain, find the CEO, and *everyone on the path* now directly knows the CEO. Next time, any of them answer in one step.

### What Does Path Compression Do?


During `find(x)`, after locating the root, every node visited on the path from `x` to the root has its parent pointer updated to point directly to the root. This **flattens** the tree for future operations.

### Algorithm Steps (as part of Find)


1. Recursively follow parent pointers until reaching the root.
2. On the way back from recursion, set `parent[current] = root` for every node on the path.
3. Future finds on any node in this subtree now take O(1) or near-O(1).

### Pseudocode


```
FUNCTION find(x):
    IF parent[x] != x THEN
        parent[x] = find(parent[x])    // ← path compression: set parent to root
    END IF
    RETURN parent[x]
END FUNCTION
```

### Step-by-Step Dry Run: Path Compression Effect


**Before**: parent = [0, 0, 1, 2, 3, 5] — a deep chain for elements 1-4.

| Element | 0 | 1 | 2 | 3 | 4 | 5 |
|----------|---|---|---|---|---|---|
| parent[] | 0 | 0 | 1 | 2 | 3 | 5 |

```
    0 ← 1 ← 2 ← 3 ← 4     5 (root of itself)
```

**Call find(4)**:

| Recursion Depth | x | parent[x] | Action | parent[x] after |
|-----------------|---|-----------|--------|-----------------|
| 1 | 4 | 3 | Recurse find(3) | — |
| 2 | 3 | 2 | Recurse find(2) | — |
| 3 | 2 | 1 | Recurse find(1) | — |
| 4 | 1 | 0 | Recurse find(0) | — |
| 5 | 0 | 0 | **Root**, return 0 | — |
| Back 4 | 1 | — | parent[1] = 0 | 0 |
| Back 3 | 2 | — | parent[2] = 0 | 0 |
| Back 2 | 3 | — | parent[3] = 0 | 0 |
| Back 1 | 4 | — | parent[4] = 0 | 0 |

**After find(4)**: parent = [0, 0, 0, 0, 0, 5]

```
      0
    ↗ ↑ ↗ ↗
   1  2 3 4       5
```

Now find(1), find(2), find(3), find(4) all return 0 in O(1) each. The tree was flattened from depth 4 to depth 1.

### Implementations


Path compression is implemented entirely inside `find`. See the Find Operation section above for C++, Python, Java.

### Complexity Analysis


| Aspect | Value | Why? |
|--------|-------|------|
| Without compression | O(n) per find | Linked-list tree |
| With compression only | O(log n) amortized | Each find flattens; Fisher's bound shows log* n amortized |
| With rank + compression | O(α(n)) amortized | Optimal — Tarjan proved the inverse Ackermann bound |
| Extra memory | None | No additional arrays needed — uses parent array in-place |

The key insight: path compression alone is already very good (O(log n) amortized). Adding union by rank only improves it from O(log n) to O(α(n)) — a theoretical improvement that matters more for proofs than for practice.

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|--------------|
| Zero memory overhead | Only applies during find, not during union |
| Dramatically speeds up future queries | No benefit if find is never called on the same path twice |
| Guarantees amortized efficiency | Recursive implementation can stack-overflow on extremely deep trees (use iterative as fallback) |

### Edge Cases


| Edge Case | Behavior |
|-----------|----------|
| Already-flat tree (root has children) | find returns root in O(1); no compression needed |
| Single element | No path to compress |
| Very deep tree (n = 10⁶) | Recursion depth = n; use iterative find to avoid stack overflow |
| Root called directly | parent[root] == root, returns immediately, no compression |

## Union by Rank / Union by Size

### Real-World Analogy


When two companies merge, the smarter strategy is: the *smaller* company's CEO reports to the *larger* company's CEO. Why? Because fewer people need to update their business cards. If the 10,000-person company absorbs the 10-person startup, only 10 people change their reporting — not 10,000. **Union by rank** does exactly this: the shorter tree is always attached under the taller tree, keeping the overall tree height minimal.

### What Do Union by Rank / Size Do?


**Union by rank**: Each node stores a *rank* (an upper bound on its height). When merging, the root with lower rank is attached under the root with higher rank. If ranks are equal, one becomes the new root and its rank increments by 1.

**Union by size**: Same idea, but using *size* (number of elements) instead of rank. The smaller set is attached under the larger set.

Both achieve O(log n) tree height without path compression, and O(α(n)) with path compression.

### Algorithm Steps (Union by Rank)


1. Find roots: `rootX = find(x)`, `rootY = find(y)`.
2. If `rootX == rootY`, return.
3. If `rank[rootX] < rank[rootY]`: attach `rootX` under `rootY` (parent[rootX] = rootY).
4. Else if `rank[rootX] > rank[rootY]`: attach `rootY` under `rootX`.
5. Else (equal ranks): attach `rootY` under `rootX`, increment `rank[rootX]` by 1.
6. Decrement set count.

### Pseudocode


```
FUNCTION union(x, y):
    rootX = find(x)
    rootY = find(y)
    IF rootX == rootY THEN RETURN

    IF rank[rootX] < rank[rootY] THEN
        parent[rootX] = rootY
    ELSE IF rank[rootX] > rank[rootY] THEN
        parent[rootY] = rootX
    ELSE
        parent[rootY] = rootX
        rank[rootX] = rank[rootX] + 1
    END IF
    numSets = numSets - 1
END FUNCTION
```

### Step-by-Step Dry Run: Union by Rank


**Initial State**: parent = [0, 1, 2, 3, 4, 5], rank = [0, 0, 0, 0, 0, 0], n = 6.

| Element | 0 | 1 | 2 | 3 | 4 | 5 |
|----------|---|---|---|---|---|---|
| parent[] | 0 | 1 | 2 | 3 | 4 | 5 |
| rank[] | 0 | 0 | 0 | 0 | 0 | 0 |

**Operation sequence:**

**union(0, 1)**: roots 0 and 1, both rank 0 → equal → attach 1→0, rank[0] = 1.

| Element | 0 | 1 | 2 | 3 | 4 | 5 |
|----------|---|---|---|---|---|---|
| parent[] | 0 | 0 | 2 | 3 | 4 | 5 |
| rank[] | 1 | 0 | 0 | 0 | 0 | 0 |

**union(2, 3)**: roots 2 and 3, both rank 0 → attach 3→2, rank[2] = 1.

| Element | 0 | 1 | 2 | 3 | 4 | 5 |
|----------|---|---|---|---|---|---|
| parent[] | 0 | 0 | 2 | 2 | 4 | 5 |
| rank[] | 1 | 0 | 1 | 0 | 0 | 0 |

**union(4, 5)**: roots 4 and 5, both rank 0 → attach 5→4, rank[4] = 1.

| Element | 0 | 1 | 2 | 3 | 4 | 5 |
|----------|---|---|---|---|---|---|
| parent[] | 0 | 0 | 2 | 2 | 4 | 4 |
| rank[] | 1 | 0 | 1 | 0 | 1 | 0 |

**union(0, 4)**: rootX = find(0) = 0 (rank 1), rootY = find(4) = 4 (rank 1). Equal ranks → attach 4→0, rank[0] = 2.

| Element | 0 | 1 | 2 | 3 | 4 | 5 |
|----------|---|---|---|---|---|---|
| parent[] | 0 | 0 | 2 | 2 | 0 | 4 |
| rank[] | 2 | 0 | 1 | 0 | 1 | 0 |

Note: 5 still points to 4 (not directly to 0), but find(5) will compress it later.

**union(2, 0)**: rootX = find(2) = 2 (rank 1), rootY = find(0) = 0 (rank 2). rank[2] &lt; rank[0] → attach 2→0.

| Element | 0 | 1 | 2 | 3 | 4 | 5 |
|----------|---|---|---|---|---|---|
| parent[] | 0 | 0 | 0 | 2 | 0 | 4 |
| rank[] | 2 | 0 | 1 | 0 | 1 | 0 |

**Final tree**:
```
        0
      ↗ ↑ ↗
     1  2 4
        ↑ ↑
        3 5
```
Height = 2, numSets = 1. Without union by rank, this could have been a chain of depth 5.

### Implementations


```cpp
// C++
void unionByRank(int x, int y) {
    int rootX = find(x);
    int rootY = find(y);
    if (rootX == rootY) return;

    if (rank[rootX] < rank[rootY]) {
        parent[rootX] = rootY;
    } else if (rank[rootX] > rank[rootY]) {
        parent[rootY] = rootX;
    } else {
        parent[rootY] = rootX;
        rank[rootX]++;
    }
    --numSets;
}
```

```python
# Python
def union(self, x: int, y: int) -> None:
    root_x = self.find(x)
    root_y = self.find(y)
    if root_x == root_y:
        return

    if self.rank[root_x] < self.rank[root_y]:
        self.parent[root_x] = root_y
    elif self.rank[root_x] > self.rank[root_y]:
        self.parent[root_y] = root_x
    else:
        self.parent[root_y] = root_x
        self.rank[root_x] += 1
    self.num_sets -= 1
```

```java
// Java
public void union(int x, int y) {
    int rootX = find(x);
    int rootY = find(y);
    if (rootX == rootY) return;

    if (rank[rootX] < rank[rootY]) {
        parent[rootX] = rootY;
    } else if (rank[rootX] > rank[rootY]) {
        parent[rootY] = rootX;
    } else {
        parent[rootY] = rootX;
        rank[rootX]++;
    }
    numSets--;
}
```

### Complexity Analysis


| Why O(α(n)) for Combined Optimizations |
|----------------------------------------|
| **Union by rank alone** guarantees tree height ≤ log₂(n). Each find traverses at most O(log n) nodes. |
| **Path compression alone** makes subsequent finds cheaper. Tarjan (1975) proved amortized O(α(n)). |
| **Together**, union keeps height low and find flattens aggressively. The inverse Ackermann bound emerges because the number of times a node's parent can change is bounded by the iterated logarithm, which collapses to ≤ 5 for all practical n. |

**Intuition**: α(n) grows slower than log(log(...(n)...)) for any fixed number of logs. For n = 10⁶⁰⁰, α(n) ≈ 5. Each operation is effectively O(1).

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|--------------|
| Guarantees O(log n) height even without path compression | Requires O(n) extra space for rank/size array |
| Combined with path compression: O(α(n)) — theoretical best | Union by size is slightly more intuitive but equivalent |
| No complex logic — simple if-else | Does not help with set enumeration |

### Edge Cases


| Edge Case | Behavior |
|-----------|----------|
| Both roots have rank 0 | Attach arbitrarily (e.g., second under first), new rank becomes 1 |
| Equal ranks at any level | One becomes child, parent's rank increments |
| Root rank never decreases | Rank is monotonic — only increases, never decreases |
| Large rank difference | Lower-rank root attached under higher-rank root; no rank change |

## Complete DSU Implementation (All Optimizations)

### C++


```cpp
class DSU {
private:
    std::vector<int> parent;
    std::vector<int> rank;
    int numSets;

public:
    DSU(int n) : numSets(n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; ++i) parent[i] = i;
    }

    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // path compression
        }
        return parent[x];
    }

    void unionSets(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;

        if (rank[rx] < rank[ry]) {
            parent[rx] = ry;
        } else if (rank[rx] > rank[ry]) {
            parent[ry] = rx;
        } else {
            parent[ry] = rx;
            rank[rx]++;
        }
        --numSets;
    }

    bool connected(int x, int y) { return find(x) == find(y); }
    int countSets() const { return numSets; }
};
```

### Python


```python
class DSU:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.num_sets = n

    def find(self, x: int) -> int:
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # path compression
        return self.parent[x]

    def union(self, x: int, y: int) -> None:
        rx, ry = self.find(x), self.find(y)
        if rx == ry:
            return

        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
        else:
            self.parent[ry] = rx
            self.rank[rx] += 1
        self.num_sets -= 1

    def connected(self, x: int, y: int) -> bool:
        return self.find(x) == self.find(y)
```

### Java


```java
class DSU {
    private int[] parent;
    private int[] rank;
    private int numSets;

    public DSU(int n) {
        numSets = n;
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
    }

    public int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // path compression
        }
        return parent[x];
    }

    public void union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;

        if (rank[rx] < rank[ry]) {
            parent[rx] = ry;
        } else if (rank[rx] > rank[ry]) {
            parent[ry] = rx;
        } else {
            parent[ry] = rx;
            rank[rx]++;
        }
        numSets--;
    }

    public boolean connected(int x, int y) {
        return find(x) == find(y);
    }

    public int countSets() { return numSets; }
}
```

## Cycle Detection in Undirected Graph

### Real-World Analogy


In a growing friend group, you introduce two friends to each other. If they turn out to be *already* in the same circle through other connections, that introduction creates **redundancy** — a "cycle" in the social graph. In a computer network, adding a cable between two computers that already have a path between them creates a loop that disrupts routing.

### What Does Cycle Detection with DSU Do?


Process each edge (u, v) in the graph. For each edge:
1. Find the roots of u and v.
2. If they are the same root, u and v are already connected — adding this edge would create a **cycle**.
3. Otherwise, union the two sets.

This works because DSU tracks connected components dynamically. If two endpoints of an edge already belong to the same component, the edge closes a cycle.

### Algorithm Steps


1. Initialize a DSU with n elements (one per vertex).
2. For each edge (u, v) in the graph:
   a. Find root of u and root of v.
   b. If root(u) == root(v): return **cycle detected**.
   c. Otherwise: union(u, v).
3. If all edges processed without finding a pre-connected pair: **no cycle**.

### Pseudocode


```
FUNCTION hasCycle(n, edges):
    DSU dsu = new DSU(n)
    FOR each (u, v) IN edges:
        IF dsu.find(u) == dsu.find(v) THEN
            RETURN true    // cycle found
        END IF
        dsu.union(u, v)
    END FOR
    RETURN false           // no cycle
END FUNCTION
```

### Step-by-Step Dry Run: Cycle Detection


**Graph**: vertices = 5, edges = [(0,1), (1,2), (2,3), (3,1)]

Initial parent: [0, 1, 2, 3, 4], rank: [0, 0, 0, 0, 0], numSets = 5.

**Process edge (0, 1):**

| Step | Action | parent[] | Cycle? |
|------|--------|----------|--------|
| find(0) = 0, find(1) = 1 | Different roots → union | [0, 0, 2, 3, 4] | No |

**Process edge (1, 2):**

| Step | Action | parent[] | Cycle? |
|------|--------|----------|--------|
| find(1) = 0, find(2) = 2 | Different roots → union | [0, 0, 0, 3, 4] | No |

**Process edge (2, 3):**

| Step | Action | parent[] | Cycle? |
|------|--------|----------|--------|
| find(2) = 0, find(3) = 3 | Different roots → union | [0, 0, 0, 0, 4] | No |

**Process edge (3, 1):**

| Step | Action | parent[] | Cycle? |
|------|--------|----------|--------|
| find(3) = 0, find(1) = 0 | **Same root!** | [0, 0, 0, 0, 4] | **Yes** |

The cycle is detected because when processing (3,1), both 3 and 1 already have root 0 — they were connected via 3→0 and 1→0 through the path 1-0-2-3 (or 1-2-3). Adding edge (3,1) closes the triangle.

### Implementations


```cpp
// C++
bool hasCycle(int n, const std::vector<std::pair<int, int>>& edges) {
    DSU dsu(n);
    for (const auto& [u, v] : edges) {
        if (dsu.find(u) == dsu.find(v)) return true;
        dsu.unionSets(u, v);
    }
    return false;
}
```

```python
# Python
def has_cycle(n: int, edges: list[tuple[int, int]]) -> bool:
    dsu = DSU(n)
    for u, v in edges:
        if dsu.find(u) == dsu.find(v):
            return True
        dsu.union(u, v)
    return False
```

```java
// Java
public boolean hasCycle(int n, int[][] edges) {
    DSU dsu = new DSU(n);
    for (int[] e : edges) {
        if (dsu.find(e[0]) == dsu.find(e[1])) return true;
        dsu.union(e[0], e[1]);
    }
    return false;
}
```

### Complexity Analysis


| Operation | Complexity | Why? |
|-----------|------------|------|
| DSU initialization | O(n) | Create parent and rank arrays |
| Each edge processed | O(α(n)) | Two finds + one union, each O(α(n)) |
| **Total** | **O(E α(n))** | Linear in edges, effectively O(E) for practical inputs |
| Without DSU (DFS) | O(V + E) | DFS per component; comparable but requires recursion/stack |

**Why DSU is better for dynamic graphs**: If edges arrive one at a time (online), DSU handles each edge in O(α(n)) without revisiting previous edges. DFS would need to re-traverse the entire graph for each new edge.

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|--------------|
| Simple — no recursion, no visited arrays | Only works for undirected graphs |
| Handles online edge additions efficiently | Directed cycle detection requires DFS (topological order) |
| O(E α(n)) time — effectively linear | Cannot detect *which* edges form the cycle (just *whether* one exists) |

### Edge Cases


| Edge Case | Behavior |
|-----------|----------|
| Empty graph (no edges) | No cycle — returns false |
| Single vertex with self-loop | u == v in an edge → find(u) == find(v) → **cycle detected** |
| Disconnected cycle | Works per component — each component checked independently |
| Already-fully-connected component | Every new edge immediately detected as cycle-creating |

## Kruskal's Algorithm (Minimum Spanning Tree)

### Real-World Analogy


A city wants to lay fiber-optic cable connecting all neighborhoods. Running cable is expensive — you pay per meter. You want to connect every neighborhood (vertices) using the *least total cable length* (minimum total weight) without redundant loops (no cycles). You start with the cheapest cable segments and add them one by one, skipping any segment whose endpoints are already connected. This is Kruskal's algorithm.

### What Does Kruskal's Algorithm Do?


Builds a Minimum Spanning Tree (MST) by sorting all edges by weight, then processing them from smallest to largest. For each edge (u, v, w), if u and v are in different components (DSU find), add the edge to the MST and union their sets. The result connects all vertices with minimum total weight.

### Algorithm Steps


1. Sort all edges by weight (ascending).
2. Initialize an empty MST list and a DSU with V elements.
3. For each edge (u, v, w) in sorted order:
   a. Find the roots of u and v.
   b. If they are different: add edge to MST, union(u, v).
   c. If MST has V-1 edges, stop early.
4. Return MST.

### Pseudocode


```
FUNCTION kruskal(V, edges):
    Sort edges by weight (ascending)
    DSU dsu = new DSU(V)
    MST = []
    totalWeight = 0

    FOR each (u, v, w) IN edges:
        IF dsu.find(u) != dsu.find(v):
            dsu.union(u, v)
            MST.add((u, v, w))
            totalWeight = totalWeight + w
            IF |MST| == V - 1:
                BREAK   // MST complete
        END IF
    END FOR

    RETURN MST, totalWeight
END FUNCTION
```

### Step-by-Step Dry Run: Kruskal's Algorithm


**Graph** (V = 5):
```
    (0)---4---(1)---5---(3)
     \       /           |
      2     1            6
       \   /             |
        (2)-------8------(4)
```

Edges sorted by weight: [(1,2,1), (0,2,2), (3,4,2), (0,1,4), (1,3,5), (3,4,6), (2,4,8)]

Initial parent: [0, 1, 2, 3, 4], MST = [], totalWeight = 0.

| Step | Edge (u,v,w) | find(u) | find(v) | Same? | Action | parent[] | MST | Total Weight |
|------|-------------|---------|---------|-------|--------|----------|-----|-------------|
| 1 | (1,2,1) | 1 | 2 | No | Union | [0, 1, 1, 3, 4] | [(1,2,1)] | 1 |
| 2 | (0,2,2) | 0 | 1 | No | Union | [0, 1, 1, 3, 4] → compress find(0)=0, find(2)=1 ≠ | parent[0]=1? No — use union by rank. Let's do basic: parent[1]=0 | [0, 0, 1, 3, 4] | [(1,2,1), (0,2,2)] | 3 |
| 3 | (3,4,2) | 3 | 4 | No | Union | parent[4]=3 | [0, 0, 1, 3, 3] | ... + (3,4,2) | 5 |
| 4 | (0,1,4) | find(0)=0, find(1)=find(0)=0 | 0 | **Yes** | Skip | No change | No change | 5 |
| 5 | (1,3,5) | find(1)=0, find(3)=3 | Different | Union | parent[3]=0 | [0, 0, 1, 0, 3] | ... + (1,3,5) | 10 |
| 6 | (2,4,8) | find(2)=find(1)=0, find(4)=find(3)=0 | Same | Skip | — | — | 10 |

MST = {(1,2,1), (0,2,2), (3,4,2), (1,3,5)}, totalWeight = 10.

Note: With proper union by rank, the exact parent values may differ but the MST edges and weight remain the same. Edge (0,1,4) is skipped because 0 and 1 are already connected (0-2-1). Edge (2,4,8) is skipped because all vertices are already connected after adding (1,3,5).

### Implementations


```cpp
// C++
struct Edge { int u, v, weight; };
std::vector<Edge> kruskal(int V, std::vector<Edge>& edges) {
    std::sort(edges.begin(), edges.end(),
        [](const Edge& a, const Edge& b) { return a.weight < b.weight; });

    DSU dsu(V);
    std::vector<Edge> mst;
    for (const Edge& e : edges) {
        if (dsu.find(e.u) != dsu.find(e.v)) {
            dsu.unionSets(e.u, e.v);
            mst.push_back(e);
            if (mst.size() == V - 1) break;
        }
    }
    return mst;
}
```

```python
# Python
def kruskal(V: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    edges.sort(key=lambda e: e[2])  # sort by weight
    dsu = DSU(V)
    mst = []
    for u, v, w in edges:
        if dsu.find(u) != dsu.find(v):
            dsu.union(u, v)
            mst.append((u, v, w))
            if len(mst) == V - 1:
                break
    return mst
```

```java
// Java
public List<int[]> kruskal(int V, int[][] edges) {
    Arrays.sort(edges, (a, b) -> Integer.compare(a[2], b[2]));
    DSU dsu = new DSU(V);
    List<int[]> mst = new ArrayList<>();
    for (int[] e : edges) {
        if (dsu.find(e[0]) != dsu.find(e[1])) {
            dsu.union(e[0], e[1]);
            mst.add(e);
            if (mst.size() == V - 1) break;
        }
    }
    return mst;
}
```

### Complexity Analysis


| Operation | Complexity | Why? |
|-----------|------------|------|
| Sorting edges | O(E log E) = O(E log V) | E ≤ V² for simple graphs, so log E ≈ 2 log V |
| DSU operations per edge | O(α(V)) | Two finds + one union per edge processed |
| Total DSU cost | O(E α(V)) | All edges processed at most once |
| **Total** | **O(E log V)** | Sorting dominates — DSU is effectively free |
| Prim's algorithm | O(E log V) | Same, but with heap; better for dense graphs |

**Why sorting dominates**: For any realistic graph, sorting O(E log V) >> DSU O(E α(V)). If E = 10⁶, log V ≈ 20, but α(V) ≈ 4. Sorting is 5× more expensive than the DSU part.

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|--------------|
| Simple and intuitive | Requires sorting all edges first |
| O(E log V) is optimal for sparse graphs | Cannot handle negative-weight edges differently (works with them too) |
| Easy to parallelize (sort + dsu) | Less efficient for dense graphs (Prim's is better) |
| DSU simplifies cycle detection | Not suitable for directed graphs (directed MST = Chu–Liu/Edmonds) |

### Edge Cases


| Edge Case | Behavior |
|-----------|----------|
| Disconnected graph | Returns MST of the connected component containing the first vertex; not all vertices connected |
| Single vertex | No edges needed; MST is empty |
| All same-weight edges | Any spanning tree is an MST; Kruskal picks based on sort order |
| Already-a-tree | Every edge is added; exactly V-1 edges form the MST |

## Union-Find Applications Comparison Table

| Application | DSU Role | Why DSU? | Alternative Without DSU |
|-------------|----------|----------|------------------------|
| Kruskal's MST | Union endpoints of sorted edges; skip if already connected | Detects cycles in O(α(V)) per edge | DFS per edge → O(E²) |
| Connected components labeling (image) | Union adjacent pixels with same color | Processes entire image in O(pixels) | BFS/DFS flood fill — O(pixels) but uses recursion stack |
| Social network friend circles | Union pairs of friends | Dynamic — handles new friendships in real time | BFS after each new connection → O(n²) |
| Cycle detection in undirected graph | For each edge, if find(u) == find(v), cycle exists | Online — works as edges arrive | DFS from scratch each time → O(V(V+E)) |
| Percolation (physics) | Union open sites with neighbors | Answers "does system percolate?" in O(α(n)) | Union-Find is the standard approach |
| Number of Islands II (dynamic) | Union newly added land with adjacent land | Handles incremental island addition | Flood fill after each add → O(k * grid) |
| Longest Consecutive Sequence | Union consecutive numbers | O(n) with hash map to track values | Sorting → O(n log n) |
| Accounts Merge | Union emails belonging to same person | Groups accounts without building full graph | DFS on email graph — comparable but more code |
| Redundant Connection | Union edge endpoints; if already connected, edge is redundant | Finds the exact redundant edge in O(E α(V)) | DFS each edge → O(E²) |
| Maze generation (randomized Kruskal) | Union cells connected by removed wall | Generates uniform spanning tree | Randomized DFS — less uniform |

## Interview Corner

> **One-Sentence Takeaway:** Union-Find is the secret weapon for connectivity problems in coding interviews — when you hear "connected components" or "union" in a problem, reach for DSU.

### 1. Number of Islands II (Dynamic Island Counting)


**Problem**: You have a 2D grid of water (all 0s). You are given positions to add land (1s) one by one. After each addition, return the current number of islands (connected groups of 1s).

**Why DSU?**: Each new land cell unions with its 4-directionally adjacent land neighbors. Track island count incrementally: start a new island (+1), then for each adjacent already-land neighbor, if they are in different sets, union them and decrement count.

```python
def numIslands2(m: int, n: int, positions: list[tuple[int, int]]) -> list[int]:
    dsu = DSU(m * n)
    grid = [[0] * n for _ in range(m)]
    dirs = [(0,1), (0,-1), (1,0), (-1,0)]
    res, count = [], 0

    for r, c in positions:
        if grid[r][c] == 1:  # duplicate
            res.append(count)
            continue
        grid[r][c] = 1
        idx = r * n + c
        count += 1  # start as new island
        for dr, dc in dirs:
            nr, nc = r + dr, c + dc
            if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                nidx = nr * n + nc
                if dsu.find(idx) != dsu.find(nidx):
                    dsu.union(idx, nidx)
                    count -= 1  # merged two islands
        res.append(count)
    return res
```

**Time**: O(k α(mn)), Space: O(mn).

### 2. Longest Consecutive Sequence


**Problem**: Given an unsorted array of integers, find the length of the longest consecutive elements sequence (e.g., [100, 4, 200, 1, 3, 2] → 4 for [1, 2, 3, 4]).

**Why DSU?**: Map each value to its index. For each value, if value-1 exists, union their indices. The size of the largest set is the answer.

```python
def longestConsecutive(nums: list[int]) -> int:
    if not nums: return 0
    dsu = DSU(len(nums))
    val_to_idx = {}

    for i, num in enumerate(nums):
        if num in val_to_idx: continue
        val_to_idx[num] = i
        if num - 1 in val_to_idx:
            dsu.union(i, val_to_idx[num - 1])
        if num + 1 in val_to_idx:
            dsu.union(i, val_to_idx[num + 1])

    # Count set sizes
    sizes = [0] * len(nums)
    for i in range(len(nums)):
        root = dsu.find(i)
        sizes[root] += 1
    return max(sizes)
```

**Time**: O(n α(n)), Space: O(n).

### 3. Accounts Merge


**Problem**: Given a list of accounts where each account is [name, email1, email2, ...], merge accounts belonging to the same person. Two accounts belong to the same person if they share at least one email.

**Why DSU?**: Treat each email as a node. For each account, union the first email with every other email in that account. Then group emails by their root.

```python
def accountsMerge(accounts: list[list[str]]) -> list[list[str]]:
    email_to_id = {}
    email_to_name = {}
    dsu = DSU(10001)  # max unique emails estimate

    # Assign IDs to emails and union within each account
    idx = 0
    for account in accounts:
        name = account[0]
        for email in account[1:]:
            if email not in email_to_id:
                email_to_id[email] = idx
                email_to_name[email] = name
                idx += 1
            # Union first email with all others in this account
            dsu.union(email_to_id[account[1]], email_to_id[email])

    # Group emails by root
    root_to_emails = {}
    for email in email_to_id:
        root = dsu.find(email_to_id[email])
        root_to_emails.setdefault(root, []).append(email)

    # Format output
    return [[email_to_name[emails[0]]] + sorted(emails)
            for emails in root_to_emails.values()]
```

**Time**: O(N α(K)) where N = total emails, K = unique emails, Space: O(N).

### 4. Redundant Connection


**Problem**: Given an undirected graph of n nodes labeled 1..n, and a list of edges where one edge is extra (creating a cycle), find the edge that, if removed, makes the graph a tree. If multiple, return the last one in the input.

**Why DSU?**: Process edges in order. For each edge (u, v), if find(u) == find(v), this edge creates a cycle — it's the redundant connection.

```python
def findRedundantConnection(edges: list[list[int]]) -> list[int]:
    n = len(edges)
    dsu = DSU(n + 1)  # 1-indexed
    for u, v in edges:
        if dsu.find(u) == dsu.find(v):
            return [u, v]
        dsu.union(u, v)
    return []
```

**Time**: O(n α(n)), Space: O(n).

### 5. Detect Cycle in an Undirected Graph


See the Cycle Detection section above for a complete treatment. The interview pattern is always the same: DSU processes edges in O(E α(V)), returning true the moment a cycle is found.

## Applications in Real Systems

### 1. Kruskal's Minimum Spanning Tree — Network Design


Telecommunications companies, power grids, and water utilities use MST algorithms to design least-cost networks. Kruskal's algorithm with DSU is the standard approach:

- **Fiber-optic backbone routing**: Laying cable to connect all cities with minimum cost.
- **Circuit design**: Connecting components on a PCB with minimum trace length.
- **Transportation planning**: Designing road networks, railway tracks, airline routes.
- **Pipeline routing**: Oil, gas, and water pipeline networks.

DSU makes the cycle-detection step nearly free — O(α(V)) per edge — allowing Kruskal to handle graphs with millions of vertices.

### 2. Image Segmentation — Connected Component Labeling


In computer vision, **connected component labeling** assigns a unique label to each connected region of pixels sharing the same color/intensity. DSU is the foundation:

- **Pass 1**: Scan the image left-to-right, top-to-bottom. For each pixel, union with its left and top neighbors if they have the same value.
- **Pass 2**: Assign the root of each pixel's set as its final label.

Used in:
- **Medical imaging**: Tumor detection, organ segmentation in MRI/CT scans.
- **OCR (Optical Character Recognition)**: Isolating characters in a scanned document.
- **Object detection**: Separating foreground objects from background.
- **Autonomous vehicles**: Lane detection, obstacle segmentation.

### 3. Social Networks — Friend Circles and Recommendations


Every major social platform (Facebook, LinkedIn, Instagram) models users as nodes and relationships as edges. DSU powers:

- **Friend circle detection**: How many distinct friend groups exist?
- **People You May Know**: Path-based recommendations (friends-of-friends).
- **Mutual friend counting**: Intersection size of two users' connected components.
- **Community detection**: Partitioning the network into clusters.
- **Graph partitioning**: Balancing load across servers by partitioning the social graph.

Facebook's 2021 friend graph had ~3 billion nodes — DSU operations on this scale run in milliseconds per query with path compression.

### 4. Percolation Theory — Physics and Materials Science


**Percolation** asks: does a path exist from the top of a system to the bottom? DSU is the standard computational tool:

- **Materials science**: Does a material conduct electricity? Model as a grid of random conductive sites. Union adjacent conductive sites. If any top-row site and any bottom-row site share a root, the system percolates.
- **Oil extraction**: Does oil flow from porous rock to a well? Model pores as open/closed.
- **Forest fire spread**: Model trees as sites; fire spreads through adjacent burning trees.
- **Epidemiology**: Does a disease spread from an initial infected person to the broader population?

The **percolation threshold** (critical probability where a system transitions from non-percolating to percolating) was famously studied using DSU-based Monte Carlo simulation.

### 5. Dynamic Connectivity — Database and Distributed Systems


- **TCP connection tracking**: Maintaining sets of active connections in a load balancer.
- **Distributed consensus**: Tracking which nodes in a cluster are reachable (connected).
- **Filesystem inotify**: Tracking which files/directories are affected by a change (union of dependency sets).
- **Version control merge tracking**: Git uses DSU-like structures to track which branches have been merged.

## 💡 Pro Tips

> **One-Sentence Takeaway:** Union by rank limits tree depth; path compression alone already gives O(log n) amortized — together they reach the theoretical best.

- **Implement union by rank OR by size**: Both give similar theoretical guarantees. Union by size is slightly more intuitive — attach the smaller tree under the larger tree.
- **Path compression alone is almost enough**: Even without union by rank, path compression gives amortized O(log n). Adding union by rank yields the inverse Ackermann bound O(α(n)).
- **DSU for offline queries**: When you have a sequence of edge additions and connectivity queries, DSU can answer all queries in near-linear time. For deletions, use DSU with rollback.
- **Kruskal's algorithm + DSU is the canonical MST algorithm**: Sort edges by weight (O(E log V)), process edges in order, union endpoints if they belong to different components. DSU detects cycles in O(α(V)) per edge.
- **Iterative find for safety**: In languages with limited recursion depth (Python, Java default stack), consider an iterative find implementation to avoid stack overflow on very deep trees (n > 10⁵). The recursive version is cleaner and preferred for interviews.
- **DSU does not support splits**: If you need to split a set (undo a union), use DSU with rollback (stack-based parent changes + path compression without rank).
- **Count sets efficiently**: Number of sets = number of elements where `parent[i] == i` (roots). Equivalent to the `numSets` variable maintained in union.

```python
# Iterative find (avoids recursion)
def find(self, x: int) -> int:
    while self.parent[x] != x:
        self.parent[x] = self.parent[self.parent[x]]  # path halving
        x = self.parent[x]
    return x
```

## One-Sentence Takeaways

- DSU (Union-Find) maintains disjoint sets with find and union operations in near-constant time.
- Path compression flattens the tree during find for near-constant amortized time.
- Union by rank attaches smaller trees under larger trees to limit depth to O(log n).
- Combined optimizations yield O(α(n)) per operation, where α is the inverse Ackermann function — ≤ 5 for any practical input.
- Kruskal's algorithm uses DSU to find MSTs in O(E log V) by processing edges in sorted order.
- DSU detects cycles in undirected graphs in O(E α(V)) — simpler than DFS for online edge additions.
- DSU powers real-world systems: network design, image segmentation, social graphs, percolation.

## Concept Comparison Table

| Optimization | Without | Path Compression Only | Union by Rank Only | Both |
|-------------|---------|---------------------|-------------------|------|
| find() complexity | O(n) | O(log n) amortized | O(log n) | O(α(n)) amortized |
| union() complexity | O(n) | O(log n) amortized | O(log n) | O(α(n)) amortized |
| Implementation | Simplest | Simple (2 lines in find) | Simple (add rank array) | Simple (both) |
| Memory overhead | None | None | O(n) for rank array | O(n) for rank array |
| Worst-case tree depth | n | O(log n) | O(log n) | O(α(n)) |
| Practical α(n) for n ≤ 10⁶⁰⁰ | — | — | — | ≤ 5 |
| Proof difficulty | Trivial | Tarjan & van Leeuwen 1975 | Simple | Complex amortized analysis |

## Quick Reference: DSU Operations

| Operation | Pseudocode | Complexity |
|-----------|-------------|------------|
| makeSet(x) | parent[x] = x; rank[x] = 0 | O(1) |
| find(x) | if parent[x] != x: parent[x] = find(parent[x]); return parent[x] | O(α(n)) |
| union(x, y) | rx = find(x); ry = find(y); if rx == ry: return; if rank[rx] &lt; rank[ry]: parent[rx] = ry; else if rank[rx] &gt; rank[ry]: parent[ry] = rx; else: parent[ry] = rx; rank[rx]++ | O(α(n)) |
| connected(x, y) | return find(x) == find(y) | O(α(n)) |
| countSets() | return numSets (maintained in union) | O(1) |

## Cross-Application Matrix

| Problem | How DSU Is Used | Complexity |
|---------|-----------------|------------|
| Kruskal's MST | Union endpoints of each edge; process sorted edges | O(E log V + E α(V)) |
| Connected components | Union adjacent nodes; count roots | O(n α(n)) |
| Number of islands (static) | DSU on grid cells (4-dir connectivity) | O(mn α(mn)) |
| Number of Islands II (dynamic) | Union newly added land with 4-dir adjacent land | O(k α(mn)) |
| Cycle detection (undirected) | For each edge: if find(u) == find(v), cycle exists | O(E α(V)) |
| Friend circles (social network) | Union connected users; count sets | O(m α(n)) for m relationships |
| Longest consecutive sequence | Union value-1 and value+1 via hash map | O(n α(n)) |
| Accounts merge | Union emails in same account; group by root | O(N α(K)) |
| Redundant connection | Union edge endpoints; find(u) == find(v) → redundant | O(E α(V)) |
| Maze generation | Randomized Kruskal: union cells connected by removed wall | O(n² α(n²)) |
| Image segmentation | Union adjacent same-color pixels | O(pixels α(pixels)) |
| Percolation | Union open sites; check top-bottom connectivity | O(n² α(n²)) |

## Common Mistakes & GFG Deepening

### Common Mistakes (GFG-Style)


| Mistake | Why It's Wrong | Correct Approach |
|---------|----------------|------------------|
| Forgetting path compression in find | Without compression, find chains stay O(n) after many unions | Always set `parent[x] = find(parent[x])` during find |
| Union without rank/size heuristic | Always attaching the larger set under the smaller leads to tall trees | Use union by size or rank: attach smaller tree under larger |
| Using only path compression without union by rank | Still better than naive, but union-by-rank gives optimal amortized O(α(n)) | Use both path compression AND union by rank for inverse-Ackermann complexity |
| Off-by-one in 0-indexed vs 1-indexed parent array | Parent array initialized with 0 or n+1 gives wrong sentinel values | Initialize `parent[i] = i` for all valid indices; use -1 sentinel only if tracking size separately |
| Not handling the case where both elements are already in the same set | Union-ing same set decrements component count incorrectly | Check `rootX === rootY` before merging; if equal, return without decrementing |
| Using DSU for undirected graphs only without adapting for directed | DSU works naturally for undirected connectivity; directed requires SCC algorithms (Tarjan/Kosaraju) | Use DSU for undirected graphs; use SCC algorithms for directed connectivity |
| Not resetting DSU between test cases | Parent array retains state from previous test case | Reinitialize DSU for each test case with `new DSU(n)` |
| Confusing parent array index with node label | If node labels are [1..n] but array is 0-indexed, accessing parent[i] uses wrong index | Always use internal 0-indexing or map external labels to 0..n-1 |

### TypeScript Disjoint Set Union Implementation

```typescript
class DSU {
    private parent: number[];
    private rank: number[];
    private components: number;

    constructor(n: number) {
        this.parent = new Array(n).fill(0).map((_, i) => i);
        this.rank = new Array(n).fill(0);
        this.components = n;
    }

    find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // path compression
        }
        return this.parent[x];
    }

    findIterative(x: number): number {
        // Iterative find with path compression
        let root = x;
        while (this.parent[root] !== root) root = this.parent[root];
        // Path compression: make all nodes point to root
        while (x !== root) {
            const next = this.parent[x];
            this.parent[x] = root;
            x = next;
        }
        return root;
    }

    union(x: number, y: number): boolean {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) return false;

        // Union by rank
        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        this.components--;
        return true;
    }

    connected(x: number, y: number): boolean {
        return this.find(x) === this.find(y);
    }

    countComponents(): number {
        return this.components;
    }

    // Track size instead of rank
    getComponentSize(x: number): number {
        const root = this.find(x);
        // Assumes size stored in negative values; alternative implementation
        return this.rank[root] + 1; // approximate based on rank
    }
}

// DSU with size tracking
class DSUWithSize {
    private parent: number[];
    private size: number[];

    constructor(n: number) {
        this.parent = new Array(n).fill(0).map((_, i) => i);
        this.size = new Array(n).fill(1);
    }

    find(x: number): number {
        while (this.parent[x] !== x) {
            this.parent[x] = this.parent[this.parent[x]]; // path halving
            x = this.parent[x];
        }
        return x;
    }

    union(x: number, y: number): boolean {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX === rootY) return false;

        // Union by size: attach smaller to larger
        if (this.size[rootX] < this.size[rootY]) {
            [rootX, rootY] = [rootY, rootX]; // ensure rootX is larger
        }
        this.parent[rootY] = rootX;
        this.size[rootX] += this.size[rootY];
        return true;
    }

    getSize(x: number): number {
        return this.size[this.find(x)];
    }
}

// DSU with rollback (for offline dynamic connectivity)
class DSUWithRollback {
    private parent: number[];
    private size: number[];
    private history: { u: number; v: number; sizeU: number }[] = [];

    constructor(n: number) {
        this.parent = new Array(n).fill(0).map((_, i) => i);
        this.size = new Array(n).fill(1);
    }

    find(x: number): number {
        while (this.parent[x] !== x) x = this.parent[x];
        return x;
    }

    union(x: number, y: number): boolean {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX === rootY) return false;
        if (this.size[rootX] < this.size[rootY]) [rootX, rootY] = [rootY, rootX];
        this.history.push({ u: rootX, v: rootY, sizeU: this.size[rootX] });
        this.parent[rootY] = rootX;
        this.size[rootX] += this.size[rootY];
        return true;
    }

    snapshot(): number { return this.history.length; }

    rollback(snap: number): void {
        while (this.history.length > snap) {
            const { u, v, sizeU } = this.history.pop()!;
            this.parent[v] = v;
            this.size[u] = sizeU;
        }
    }
}
```

### Additional MCQs (GFG Pattern)


8. **The inverse Ackermann function α(n) for practical values of n (≤ 10⁶) is:**
   - a) ≤ 5 ✓
   - b) ≤ 10
   - c) ≤ log₂n
   - d) ≤ n

9. **What is the worst-case time for m operations on a DSU with union by rank and path compression?**
   - a) O(m)
   - b) O(m α(n)) ✓
   - c) O(m log n)
   - d) O(m n)

10. **Path compression alone (without union by rank) gives amortized complexity of:**
    - a) O(α(n))
    - b) O(log n) ✓
    - c) O(n)
    - d) O(1)

11. **DSU with union by rank without path compression has height:**
    - a) O(n)
    - b) O(log n) ✓
    - c) O(α(n))
    - d) O(1)

12. **In Kruskal's algorithm, DSU is used to:**
    - a) Sort the edges by weight
    - b) Detect cycles in O(α(n)) time ✓
    - c) Find shortest paths
    - d) Build the adjacency list

13. **Number of Islands II (LC 305): Initially all cells are water. When land appears, DSU can track islands in:**
    - a) O(1) per operation
    - b) O(α(n)) per operation ✓
    - c) O(log n) per operation
    - d) O(n²) per operation

**Answers:** 8-a, 9-b, 10-b, 11-b, 12-b, 13-b

### Additional Exercises (GFG Pattern)


11. **Number of provinces (LC 547)**: Given an adjacency matrix of friend connections, find the total number of friend circles (provinces).

12. **Accounts merge (LC 721)**: Given a list of accounts where each account has a name and emails, merge accounts belonging to the same person. Use DSU on email indices.

13. **Redundant connection (LC 684)**: Given a graph (tree + 1 extra edge), find the edge whose removal makes it a tree. Use DSU; the first edge that connects already-connected nodes is the answer.

14. **Redundant connection II (LC 685)**: Find the redundant edge in a rooted directed graph. Same concept but with directed edges — handle cases of two parents and cycles.

15. **Minimum cost to connect cities (Kruskal's MST)**: Given n cities and roads with costs, find the minimum cost to connect all cities. Use DSU + sort edges by weight.

16. **Longest consecutive sequence (LC 128)**: Given an unsorted array, find the length of the longest consecutive elements sequence. Solve in O(n) using a hash map of DSU-like intervals.

17. **Number of connected components in an undirected graph (LC 323)**: Given n nodes and edges list, count connected components using DSU.

18. **Regions cut by slashes (LC 959)**: n×n grid with slashes '/' and '\\'. Find the number of regions created. Use DSU on subdivided cells.

19. **Evaluating division (LC 399)**: Given equations like a/b = 2.0, evaluate queries like a/c. Use DSU with weight tracking (weighted union-find) to maintain ratios.

20. **Swim in rising water (LC 778)**: An n×n grid with elevation values. Rain falls, water rises. Find the minimum time when there's a path from (0,0) to (n-1,n-1). Use DSU with increasing time.

### DSU Variants Comparison


| Variant | find | union | Space | Additional Features | Use Case |
|---------|------|-------|-------|-------------------|----------|
| Naive | O(n) | O(n) | O(n) | None | Educational only |
| Union by rank | O(log n) | O(log n) | O(n) | Rank array | Teaching basics |
| Path compression | O(log n) amortized | O(log n) amortized | O(n) | None | When rank not needed |
| Union by rank + path compression | O(α(n)) amortized | O(α(n)) | O(n) | Both arrays | Production standard |
| Union by size | O(α(n)) amortized | O(α(n)) | O(n) | Component sizes | Size queries needed |
| Weighted DSU | O(α(n)) amortized | O(α(n)) | O(n) | Ratio/difference array | Equations with ratios |
| DSU with rollback | O(log n) (no path compression) | O(log n) | O(n) | History stack | Offline dynamic connectivity |
| Persistent DSU | O(log n) | O(log n) | O(n log n) | Versioned arrays | Time-travel queries |
| 2D DSU | O(α(n)) amortized | O(α(n)) | O(n²) | Grid neighbor mapping | Grid/pixel connectivity |

### Classic Graph Algorithms with DSU


```typescript
// Kruskal's MST
type Edge = { u: number; v: number; weight: number };

function kruskalMST(vertices: number, edges: Edge[]): Edge[] {
    const dsu = new DSU(vertices);
    edges.sort((a, b) => a.weight - b.weight);
    const mst: Edge[] = [];
    for (const e of edges) {
        if (dsu.union(e.u, e.v)) {
            mst.push(e);
            if (mst.length === vertices - 1) break;
        }
    }
    return mst;
}

// Connected components after each edge addition (online)
function connectedComponentsTimeline(
    n: number, 
    edges: [number, number][]
): number[] {
    const dsu = new DSU(n);
    const result: number[] = [];
    for (const [u, v] of edges) {
        dsu.union(u, v);
        result.push(dsu.countComponents());
    }
    return result;
}
```
   - c) O(log n)
   - d) O(n)

2. **What does path compression do?**
   - a) Merges trees
   - b) Flattens the tree during find ✓
   - c) Sorts edges
   - d) Computes rank

3. **Which algorithm uses DSU to find MSTs?**
   - a) Dijkstra's
   - b) Kruskal's ✓
   - c) Prim's
   - d) Floyd's

4. **What is the inverse Ackermann function α(n) for practical n ≤ 10⁶⁰⁰?**
   - a) ~4 ✓
   - b) ~log n
   - c) ~1
   - d) ~n

5. **Union by rank ensures:**
   - a) Smaller tree under larger ✓
   - b) Trees are sorted
   - c) Path is always length 1
   - d) All elements are connected

6. **What happens when find(u) == find(v) during Kruskal's algorithm?**
   - a) Edge is added to MST
   - b) Edge is skipped (would create a cycle) ✓
   - c) DSU is reinitialized
   - d) u and v are swapped

7. **Which is NOT a valid application of DSU?**
   - a) Cycle detection in undirected graph
   - b) Finding shortest path between two nodes ✓ (use Dijkstra's)
   - c) Connected component labeling in images
   - d) Dynamic island counting

8. **How does union by rank (or size) improve DSU?**
   - a) It eliminates the need for path compression
   - b) It ensures the tree height stays O(log n) without compression ✓
   - c) It sorts elements in the set
   - d) It reduces memory usage

**Answers:** 1-b, 2-b, 3-b, 4-a, 5-a, 6-b, 7-b, 8-b

## Exercises

### Review Questions

1. How does path compression flatten the DSU tree? Draw an example showing the state before and after find(7) in a chain of 8 elements.
2. Why is union by rank not strictly necessary when path compression is used? What theoretical bound does it add?
3. What is the significance of the inverse Ackermann function? Why is it considered "effectively constant"?
4. Explain why Kruskal's algorithm is O(E log V) and not O(E log E). What's the relationship between E and V?
5. Can DSU be used for directed graph cycle detection? Why or why not?

### Application Problems

6. Implement union by size instead of union by rank. Compare the resulting tree heights after a sequence of unions.
7. Use DSU to solve the **number of islands** problem in a binary grid (static version — all land given at once).
8. Implement **DSU with rollback** — support undoing the last union operation (useful for offline dynamic connectivity). Use a stack to record changes.

### Interview-Style Problems


9. **Number of Islands II**: Given an m × n grid of water, and a list of positions to add land one-by-one, return the number of islands after each addition. (See Interview Corner above.)
10. **Accounts Merge**: Given a list of accounts, merge accounts belonging to the same person by email. (See Interview Corner above.)
11. **Redundant Connection II** (hard): This time the graph is a directed graph. Find the extra edge that makes it not a tree. Hint: consider three cases — a node with two parents, a cycle, or both.

### Challenge Problem

12. **Offline Dynamic Connectivity**: Given a sequence of edge insertions and deletions, use DSU with rollback and a divide-and-conquer segment tree structure to answer connectivity queries at any point in time. The overall complexity is O(q log q log n) where q is the number of operations.

## Summary

- DSU maintains disjoint sets with find and union operations, both running in near-constant amortized O(α(n)) time with path compression and union by rank.
- **Find** returns the representative root of an element's set. **Path compression** flattens the tree during find.
- **Union** merges two sets. **Union by rank** keeps trees shallow by attaching smaller-rank roots under larger-rank roots.
- The inverse Ackermann function α(n) grows so slowly that it is ≤ 5 for any practical input size.
- **Kruskal's algorithm** sorts edges by weight and uses DSU to build a minimum spanning tree in O(E log V).
- **Cycle detection** in undirected graphs is trivially O(E α(V)) with DSU — simply check if the endpoints of each edge are already in the same set.
- DSU shines in **dynamic connectivity** problems where unions and finds are interleaved online.
- Real-world applications span network design (MST), image segmentation, social networks, percolation physics, and database connectivity tracking.
- Interview problems leveraging DSU include Number of Islands II, Longest Consecutive Sequence, Accounts Merge, Redundant Connection, and dynamic graph connectivity.
