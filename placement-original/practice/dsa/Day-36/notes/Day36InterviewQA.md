# Day 36: Union-Find (Disjoint Set Union) - Interview Q&A

## 📚 Core Concepts (Questions 1-15)

### 1. What is Union-Find and what problems does it solve?
**Answer**: Union-Find (Disjoint Set Union - DSU) is a data structure that tracks elements partitioned into disjoint (non-overlapping) sets. It provides near-constant-time operations to:
- **Union**: Merge two sets
- **Find**: Determine which set an element belongs to
- **Connected**: Check if two elements are in the same set

**Use Cases**:
- Detecting cycles in undirected graphs
- Finding connected components
- Kruskal's MST algorithm
- Dynamic connectivity problems
- Network connectivity

---

### 2. What is the time complexity of Union-Find operations?
**Answer**:
- **Without optimizations**: O(N) per operation (worst case - linear chain)
- **With path compression only**: O(log N) amortized
- **With union by rank/size only**: O(log N) per operation
- **With both optimizations**: O(α(N)) where α is inverse Ackermann function
  - α(N) < 5 for all practical values of N
  - Effectively constant time!

**Space Complexity**: O(N) for parent array (+ rank/size array if used)

---

### 3. Explain path compression optimization.

**Answer**: Path compression flattens the tree structure during `find` operations by making nodes point directly to the root.

```java
public int find(int x) {
    if (parent[x] != x) {
        parent[x] = find(parent[x]); // Recursive path compression
    }
    return parent[x];
}
```

**Effect**:
- First find: traverses full path
- Subsequent finds: O(1) for compressed nodes
- Dramatically improves amortized time complexity

**Before path compression**:
```
5 → 4 → 3 → 2 → 1 → 0 (root)
```

**After find(5) with path compression**:
```
5 → 0
4 → 0
3 → 0
2 → 0
1 → 0
```

---

### 4. What is union by rank? How does it differ from union by size?

**Answer**:

**Union by Rank** (height-based):
```java
if (rank[rootX] < rank[rootY]) {
    parent[rootX] = rootY;
} else if (rank[rootX] > rank[rootY]) {
    parent[rootY] = rootX;
} else {
    parent[rootY] = rootX;
    rank[rootX]++; // Only increase when equal
}
```

**Union by Size** (element count-based):
```java
if (size[rootX] < size[rootY]) {
    parent[rootX] = rootY;
    size[rootY] += size[rootX];
} else {
    parent[rootY] = rootX;
    size[rootX] += size[rootY];
}
```

**Key Differences**:
- **Rank**: Approximates tree height, only increases when merging equal ranks
- **Size**: Tracks exact element count, always updated
- **Use rank when**: You only need connectivity
- **Use size when**: You need component sizes (more versatile)

Both achieve O(log N) height bound without path compression.

---

### 5. How do you detect cycles in an undirected graph using Union-Find?

**Answer**:
```java
public boolean hasCycle(int n, int[][] edges) {
    UnionFind uf = new UnionFind(n);
    
    for (int[] edge : edges) {
        int u = edge[0], v = edge[1];
        
        // If already connected, adding edge creates cycle
        if (uf.find(u) == uf.find(v)) {
            return true;
        }
        
        uf.union(u, v);
    }
    
    return false;
}
```

**Why it works**:
- In a tree with N nodes, there are exactly N-1 edges
- Adding edge between connected nodes creates cycle
- Union-Find tracks connectivity efficiently

**Time**: O(E × α(V))

---

### 6. Can Union-Find detect cycles in directed graphs?

**Answer**: **No, not directly**. Union-Find is designed for undirected graphs.

**Why not**:
- Union-Find doesn't track edge direction
- In directed graphs: A→B and B→A are different
- Example: Edges (0→1), (1→2), (2→0) form cycle, but Union-Find would just union them

**For directed graphs, use**:
- DFS with color marking (white/gray/black)
- Topological sort (Kahn's algorithm)
- Tarjan's SCC algorithm

**Exception**: LeetCode 685 (Redundant Connection II) uses Union-Find with additional logic to handle directed edges by first detecting nodes with two parents.

---

### 7. How does Union-Find differ from BFS/DFS for finding connected components?

**Answer**:

| Aspect | Union-Find | BFS/DFS |
|--------|-----------|---------|
| **Time** | O(E × α(V)) ≈ O(E) | O(V + E) |
| **Space** | O(V) | O(V) for visited array + queue/stack |
| **Dynamic** | ✅ Supports incremental edge additions | ❌ Must rebuild on changes |
| **Queries** | O(α(V)) per query | O(V + E) per query |
| **Use when** | Many connectivity queries, dynamic graph | One-time traversal, need path info |

**Union-Find advantages**:
- Faster for multiple connectivity queries
- Efficient for dynamic graphs (edge additions)
- No need to store graph structure

**BFS/DFS advantages**:
- Can find actual paths
- Works for disconnected graph traversal
- Simpler to understand

---

### 8. Explain Kruskal's algorithm using Union-Find.

**Answer**: Kruskal's finds MST by greedily adding lightest edges that don't create cycles.

```java
public List<Edge> kruskalMST(int n, List<Edge> edges) {
    List<Edge> mst = new ArrayList<>();
    Collections.sort(edges); // Sort by weight
    
    UnionFind uf = new UnionFind(n);
    
    for (Edge edge : edges) {
        // Add edge if it connects different components
        if (uf.find(edge.u) != uf.find(edge.v)) {
            uf.union(edge.u, edge.v);
            mst.add(edge);
            
            if (mst.size() == n - 1) break; // MST complete
        }
    }
    
    return mst;
}
```

**Steps**:
1. Sort all edges by weight: O(E log E)
2. For each edge in sorted order:
   - If connects different components → add to MST
   - Else → skip (would create cycle)
3. Stop when MST has N-1 edges

**Time**: O(E log E) for sorting + O(E × α(V)) for union-find = **O(E log E)**

**Why Union-Find is perfect here**:
- Efficiently checks if edge creates cycle: O(α(V))
- Maintains connected components dynamically

---

### 9. What is the inverse Ackermann function α(n)?

**Answer**: The inverse Ackermann function α(n) grows **extremely slowly**.

**Values**:
- α(1) = 1
- α(3) = 2
- α(2^65536) = 4
- α(2^(2^65536)) = 5

For any practical input size (even the number of atoms in the universe), α(n) ≤ 5.

**Why it appears in Union-Find**:
- Path compression + union by rank together achieve O(α(n)) amortized time
- Proven by Tarjan (1975)
- Essentially constant time for all practical purposes

**Ackermann function A(m,n)** grows faster than any primitive recursive function, so its inverse grows incredibly slowly.

---

### 10. How do you count connected components using Union-Find?

**Answer**:
```java
public int countComponents(int n, int[][] edges) {
    UnionFind uf = new UnionFind(n);
    
    for (int[] edge : edges) {
        uf.union(edge[0], edge[1]);
    }
    
    // Count unique roots
    Set<Integer> roots = new HashSet<>();
    for (int i = 0; i < n; i++) {
        roots.add(uf.find(i));
    }
    
    return roots.size();
}
```

**Better approach** - track in UnionFind:
```java
class UnionFind {
    private int components;
    
    public UnionFind(int n) {
        components = n; // Initially n separate components
        // ... initialize parent
    }
    
    public boolean union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        
        if (rootX == rootY) return false;
        
        parent[rootX] = rootY;
        components--; // Merged two components
        return true;
    }
    
    public int getComponents() {
        return components;
    }
}
```

**Time**: O(E × α(V))

---

### 11. Solve: Most Stones Removed with Same Row or Column (LeetCode 947)

**Problem**: Remove maximum stones where removed stone shares row/column with another.

**Answer**:
```java
public int removeStones(int[][] stones) {
    int n = stones.length;
    UnionFind uf = new UnionFind(n);
    
    Map<Integer, Integer> rowMap = new HashMap<>();
    Map<Integer, Integer> colMap = new HashMap<>();
    
    for (int i = 0; i < n; i++) {
        int row = stones[i][0];
        int col = stones[i][1];
        
        // Union with other stones in same row
        if (rowMap.containsKey(row)) {
            uf.union(i, rowMap.get(row));
        } else {
            rowMap.put(row, i);
        }
        
        // Union with other stones in same column
        if (colMap.containsKey(col)) {
            uf.union(i, colMap.get(col));
        } else {
            colMap.put(col, i);
        }
    }
    
    // Can remove all except one stone per component
    return n - uf.getComponents();
}
```

**Insight**:
- Stones in same row/column form connected component
- From component of size K, can remove K-1 stones
- Total removable: N - (number of components)

**Time**: O(N × α(N)), **Space**: O(N)

---

### 12. How do you handle weighted/ranked Union-Find for variable relationships?

**Answer**: Use weighted Union-Find to track ratios/differences between elements.

**Example - Evaluate Division (LeetCode 399)**:
```java
Map<String, String> parent = new HashMap<>();
Map<String, Double> ratio = new HashMap<>(); // ratio[x] = parent[x] / x

String find(String x) {
    if (!parent.get(x).equals(x)) {
        String originalParent = parent.get(x);
        String root = find(originalParent);
        parent.put(x, root);
        ratio.put(x, ratio.get(x) * ratio.get(originalParent));
    }
    return parent.get(x);
}

void union(String a, String b, double value) {
    // a / b = value
    String rootA = find(a);
    String rootB = find(b);
    
    if (!rootA.equals(rootB)) {
        parent.put(rootB, rootA);
        ratio.put(rootB, value * ratio.get(a) / ratio.get(b));
    }
}

double query(String c, String d) {
    if (find(c).equals(find(d))) {
        return ratio.get(c) / ratio.get(d);
    }
    return -1.0;
}
```

**Applications**:
- Currency conversion rates
- Unit conversions
- Relative rankings
- Equation systems

---

### 13. What is the space-time tradeoff in Union-Find optimizations?

**Answer**:

| Implementation | Time (per op) | Space | Notes |
|----------------|---------------|-------|-------|
| Basic (no optimization) | O(N) worst | O(N) | Linear chain possible |
| Path compression only | O(log N) amortized | O(N) | Compresses on read |
| Union by rank only | O(log N) | O(2N) | Maintains rank array |
| Union by size only | O(log N) | O(2N) | Maintains size array |
| Both optimizations | O(α(N)) | O(2N) | Best time, slight space cost |

**Recommendation**: Always use path compression + union by size (more useful than rank)

**Memory-constrained scenario**:
- Use path compression only (single array)
- Still gets O(log N) amortized
- Acceptable for most applications

---

### 14. How do you solve "Number of Islands II" with dynamic land additions?

**Answer**:
```java
public List<Integer> numIslands2(int m, int n, int[][] positions) {
    List<Integer> result = new ArrayList<>();
    UnionFind uf = new UnionFind(m * n);
    boolean[] isLand = new boolean[m * n];
    int[] dx = {0, 0, 1, -1};
    int[] dy = {1, -1, 0, 0};
    
    for (int[] pos : positions) {
        int x = pos[0], y = pos[1];
        int idx = x * n + y;
        
        if (isLand[idx]) {
            result.add(uf.getComponents());
            continue; // Already land
        }
        
        isLand[idx] = true;
        uf.components++; // Add new island
        
        // Check and merge with 4 neighbors
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i], ny = y + dy[i];
            
            if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                int nidx = nx * n + ny;
                if (isLand[nidx]) {
                    uf.union(idx, nidx);
                }
            }
        }
        
        result.add(uf.getComponents());
    }
    
    return result;
}
```

**Key points**:
- Track which cells are land with boolean array
- Each new land initially increases island count
- Union with adjacent land decreases count
- Time: O(K × α(M×N)) where K = number of operations

---

### 15. What are common pitfalls when implementing Union-Find?

**Answer**:

**1. Not using path compression**:
```java
// ❌ Bad: No path compression
public int find(int x) {
    while (parent[x] != x) {
        x = parent[x];
    }
    return x;
}

// ✅ Good: With path compression
public int find(int x) {
    if (parent[x] != x) {
        parent[x] = find(parent[x]);
    }
    return parent[x];
}
```

**2. Wrong union direction with size tracking**:
```java
// ❌ Bad: Wrong size update
if (size[rootX] < size[rootY]) {
    parent[rootY] = rootX;
    size[rootX] += size[rootY]; // Wrong! rootX becomes child
}

// ✅ Good: Correct
if (size[rootX] < size[rootY]) {
    parent[rootX] = rootY; // Attach smaller to larger
    size[rootY] += size[rootX];
}
```

**3. Not handling already-connected case**:
```java
// ❌ Bad: Decrements even if already connected
public void union(int x, int y) {
    parent[find(x)] = find(y);
    components--;
}

// ✅ Good: Check first
public boolean union(int x, int y) {
    int rootX = find(x), rootY = find(y);
    if (rootX == rootY) return false;
    parent[rootX] = rootY;
    components--;
    return true;
}
```

**4. Forgetting to initialize parent array**:
```java
// ✅ Always initialize: parent[i] = i
for (int i = 0; i < n; i++) {
    parent[i] = i;
}
```

---

## 🎯 LeetCode Problems (Questions 16-30)

### 16. LeetCode 684: Redundant Connection

**Problem**: Find edge that when removed makes tree.

**Answer**:
```java
public int[] findRedundantConnection(int[][] edges) {
    int n = edges.length;
    UnionFind uf = new UnionFind(n + 1);
    
    for (int[] edge : edges) {
        if (!uf.union(edge[0], edge[1])) {
            return edge; // This edge creates cycle
        }
    }
    
    return new int[0];
}
```

**Insight**: First edge that connects already-connected nodes is redundant.

**Time**: O(E × α(V)), **Space**: O(V)

---

### 17. LeetCode 721: Accounts Merge

**Problem**: Merge accounts with common emails.

**Answer**:
```java
public List<List<String>> accountsMerge(List<List<String>> accounts) {
    int n = accounts.size();
    UnionFind uf = new UnionFind(n);
    Map<String, Integer> emailToAccount = new HashMap<>();
    
    // Union accounts with common emails
    for (int i = 0; i < n; i++) {
        for (int j = 1; j < accounts.get(i).size(); j++) {
            String email = accounts.get(i).get(j);
            
            if (emailToAccount.containsKey(email)) {
                uf.union(i, emailToAccount.get(email));
            } else {
                emailToAccount.put(email, i);
            }
        }
    }
    
    // Group emails by root account
    Map<Integer, Set<String>> groups = new HashMap<>();
    for (int i = 0; i < n; i++) {
        int root = uf.find(i);
        groups.putIfAbsent(root, new TreeSet<>()); // TreeSet for sorting
        for (int j = 1; j < accounts.get(i).size(); j++) {
            groups.get(root).add(accounts.get(i).get(j));
        }
    }
    
    // Build result
    List<List<String>> result = new ArrayList<>();
    for (Map.Entry<Integer, Set<String>> entry : groups.entrySet()) {
        List<String> merged = new ArrayList<>();
        merged.add(accounts.get(entry.getKey()).get(0)); // Name
        merged.addAll(entry.getValue());
        result.add(merged);
    }
    
    return result;
}
```

**Time**: O(N × K × α(N) + N × K log K) where K = avg emails per account

---

### 18. LeetCode 990: Satisfiability of Equality Equations

**Problem**: Check if equations like `["a==b","b!=c","c==a"]` are satisfiable.

**Answer**:
```java
public boolean equationsPossible(String[] equations) {
    UnionFind uf = new UnionFind(26); // 26 letters
    
    // Process all equality equations first
    for (String eq : equations) {
        if (eq.charAt(1) == '=') {
            int x = eq.charAt(0) - 'a';
            int y = eq.charAt(3) - 'a';
            uf.union(x, y);
        }
    }
    
    // Check inequality equations
    for (String eq : equations) {
        if (eq.charAt(1) == '!') {
            int x = eq.charAt(0) - 'a';
            int y = eq.charAt(3) - 'a';
            
            if (uf.isConnected(x, y)) {
                return false; // Contradiction!
            }
        }
    }
    
    return true;
}
```

**Time**: O(N × α(26)) = O(N), **Space**: O(26) = O(1)

---

### 19. LeetCode 1202: Smallest String With Swaps

**Problem**: Swap characters at connected indices to get lexicographically smallest string.

**Answer**:
```java
public String smallestStringWithSwaps(String s, List<List<Integer>> pairs) {
    int n = s.length();
    UnionFind uf = new UnionFind(n);
    
    // Union connected indices
    for (List<Integer> pair : pairs) {
        uf.union(pair.get(0), pair.get(1));
    }
    
    // Group characters by component
    Map<Integer, List<Integer>> groups = new HashMap<>();
    for (int i = 0; i < n; i++) {
        int root = uf.find(i);
        groups.putIfAbsent(root, new ArrayList<>());
        groups.get(root).add(i);
    }
    
    char[] result = s.toCharArray();
    
    // Sort characters in each component
    for (List<Integer> indices : groups.values()) {
        List<Character> chars = new ArrayList<>();
        for (int i : indices) {
            chars.add(s.charAt(i));
        }
        Collections.sort(chars);
        Collections.sort(indices);
        
        for (int i = 0; i < indices.size(); i++) {
            result[indices.get(i)] = chars.get(i);
        }
    }
    
    return new String(result);
}
```

**Insight**: Characters in same component can be rearranged freely → sort them!

**Time**: O(N × α(N) + N log N), **Space**: O(N)

---

### 20. LeetCode 1584: Min Cost to Connect All Points

**Problem**: Connect all points with minimum Manhattan distance.

**Answer**:
```java
public int minCostConnectPoints(int[][] points) {
    int n = points.length;
    List<Edge> edges = new ArrayList<>();
    
    // Generate all possible edges
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int dist = Math.abs(points[i][0] - points[j][0]) + 
                      Math.abs(points[i][1] - points[j][1]);
            edges.add(new Edge(i, j, dist));
        }
    }
    
    // Kruskal's algorithm
    Collections.sort(edges);
    UnionFind uf = new UnionFind(n);
    
    int totalCost = 0;
    int edgesUsed = 0;
    
    for (Edge edge : edges) {
        if (uf.union(edge.u, edge.v)) {
            totalCost += edge.weight;
            edgesUsed++;
            if (edgesUsed == n - 1) break;
        }
    }
    
    return totalCost;
}
```

**Time**: O(N² log N), **Space**: O(N²)

---

## ⚡ Advanced Topics (Questions 21-35)

### 21. How do you implement Union-Find for grid problems?

**Answer**: Map 2D coordinates to 1D index.

```java
int m = grid.length;
int n = grid[0].length;
UnionFind uf = new UnionFind(m * n);

int get1D(int i, int j) {
    return i * n + j;
}

// Example: Union adjacent cells
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        if (grid[i][j] == '1') {
            // Check right neighbor
            if (j + 1 < n && grid[i][j + 1] == '1') {
                uf.union(i * n + j, i * n + j + 1);
            }
            // Check down neighbor
            if (i + 1 < m && grid[i + 1][j] == '1') {
                uf.union(i * n + j, (i + 1) * n + j);
            }
        }
    }
}
```

**Common patterns**:
- Number of Islands
- Surrounded Regions
- Number of Islands II

---

### 22. LeetCode 130: Surrounded Regions

**Problem**: Capture 'O' regions surrounded by 'X'.

**Answer**:
```java
public void solve(char[][] board) {
    int m = board.length, n = board[0].length;
    UnionFind uf = new UnionFind(m * n + 1);
    int dummy = m * n; // Dummy node for border
    
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (board[i][j] == 'O') {
                int idx = i * n + j;
                
                // Union border 'O' with dummy
                if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                    uf.union(idx, dummy);
                } else {
                    // Union with adjacent 'O'
                    if (board[i - 1][j] == 'O') uf.union(idx, (i - 1) * n + j);
                    if (board[i][j - 1] == 'O') uf.union(idx, i * n + j - 1);
                }
            }
        }
    }
    
    // Flip cells not connected to border
    for (int i = 1; i < m - 1; i++) {
        for (int j = 1; j < n - 1; j++) {
            if (board[i][j] == 'O' && !uf.isConnected(i * n + j, dummy)) {
                board[i][j] = 'X';
            }
        }
    }
}
```

**Trick**: Use dummy node for all border 'O' cells!

---

### 23. LeetCode 1319: Number of Operations to Make Network Connected

**Problem**: Minimum cables to move to connect all computers.

**Answer**:
```java
public int makeConnected(int n, int[][] connections) {
    if (connections.length < n - 1) {
        return -1; // Need at least n-1 cables
    }
    
    UnionFind uf = new UnionFind(n);
    
    for (int[] conn : connections) {
        uf.union(conn[0], conn[1]);
    }
    
    // Need (components - 1) operations to connect all
    return uf.getComponents() - 1;
}
```

**Insight**:
- Minimum cables for N nodes: N-1
- Extra cables can be moved
- Need K-1 operations to connect K components

**Time**: O(E × α(V)), **Space**: O(V)

---

### 24. LeetCode 952: Largest Component Size by Common Factor

**Problem**: Find largest component where nodes share common factor.

**Answer**:
```java
public int largestComponentSize(int[] nums) {
    int n = nums.length;
    UnionFind uf = new UnionFind(n);
    Map<Integer, Integer> factorToIndex = new HashMap<>();
    
    for (int i = 0; i < n; i++) {
        int num = nums[i];
        
        // Find all prime factors
        for (int factor = 2; factor * factor <= num; factor++) {
            if (num % factor == 0) {
                if (factorToIndex.containsKey(factor)) {
                    uf.union(i, factorToIndex.get(factor));
                } else {
                    factorToIndex.put(factor, i);
                }
                
                while (num % factor == 0) {
                    num /= factor;
                }
            }
        }
        
        // Remaining num is prime factor
        if (num > 1) {
            if (factorToIndex.containsKey(num)) {
                uf.union(i, factorToIndex.get(num));
            } else {
                factorToIndex.put(num, i);
            }
        }
    }
    
    // Find largest component
    int maxSize = 1;
    for (int i = 0; i < n; i++) {
        maxSize = Math.max(maxSize, uf.getComponentSize(i));
    }
    
    return maxSize;
}
```

**Key insight**: Union numbers sharing any prime factor.

**Time**: O(N × √M × α(N)) where M = max(nums)

---

### 25. LeetCode 1579: Remove Max Number of Edges to Keep Graph Fully Traversable

**Problem**: Maximum removable edges while keeping graph traversable by both Alice and Bob.

**Answer**:
```java
public int maxNumEdgesToRemove(int n, int[][] edges) {
    UnionFind ufAlice = new UnionFind(n + 1);
    UnionFind ufBob = new UnionFind(n + 1);
    int edgesUsed = 0;
    
    // Process type 3 edges (both can use) first
    for (int[] edge : edges) {
        if (edge[0] == 3) {
            boolean usedAlice = ufAlice.union(edge[1], edge[2]);
            boolean usedBob = ufBob.union(edge[1], edge[2]);
            if (usedAlice || usedBob) {
                edgesUsed++;
            }
        }
    }
    
    // Process type 1 (Alice) and type 2 (Bob)
    for (int[] edge : edges) {
        if (edge[0] == 1) {
            if (ufAlice.union(edge[1], edge[2])) {
                edgesUsed++;
            }
        } else if (edge[0] == 2) {
            if (ufBob.union(edge[1], edge[2])) {
                edgesUsed++;
            }
        }
    }
    
    // Check if both graphs fully connected
    if (ufAlice.getComponents() != 2 || ufBob.getComponents() != 2) {
        return -1;
    }
    
    return edges.length - edgesUsed;
}
```

**Strategy**: Prioritize shared edges (type 3) to maximize removals.

---

### 26. How do you handle Union-Find with rollback/undo operations?

**Answer**: Use persistent Union-Find or maintain operation history.

```java
class PersistentUnionFind {
    private int[] parent;
    private int[] size;
    private Stack<Operation> history;
    
    static class Operation {
        int x, y;
        int sizeX, sizeY;
        
        Operation(int x, int y, int sizeX, int sizeY) {
            this.x = x;
            this.y = y;
            this.sizeX = sizeX;
            this.sizeY = sizeY;
        }
    }
    
    public void union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        
        if (rootX == rootY) return;
        
        // Save state before union
        history.push(new Operation(rootX, rootY, size[rootX], size[rootY]));
        
        if (size[rootX] < size[rootY]) {
            parent[rootX] = rootY;
            size[rootY] += size[rootX];
        } else {
            parent[rootY] = rootX;
            size[rootX] += size[rootY];
        }
    }
    
    public void undo() {
        if (history.isEmpty()) return;
        
        Operation op = history.pop();
        parent[op.x] = op.x;
        parent[op.y] = op.y;
        size[op.x] = op.sizeX;
        size[op.y] = op.sizeY;
    }
}
```

**Note**: Cannot use path compression with rollback (modifies too many nodes).

---

### 27. What is offline processing with Union-Find?

**Answer**: Process queries in reverse or sorted order for efficiency.

**Example - LeetCode 1697**: Checking Existence of Edge Length Limited Paths
```java
public boolean[] distanceLimitedPathsExist(int n, int[][] edgeList, int[][] queries) {
    // Sort edges by weight
    Arrays.sort(edgeList, (a, b) -> Integer.compare(a[2], b[2]));
    
    // Sort queries by limit, keep original index
    int[][] queriesWithIndex = new int[queries.length][4];
    for (int i = 0; i < queries.length; i++) {
        queriesWithIndex[i] = new int[]{queries[i][0], queries[i][1], queries[i][2], i};
    }
    Arrays.sort(queriesWithIndex, (a, b) -> Integer.compare(a[2], b[2]));
    
    boolean[] result = new boolean[queries.length];
    UnionFind uf = new UnionFind(n);
    int edgeIdx = 0;
    
    for (int[] q : queriesWithIndex) {
        int u = q[0], v = q[1], limit = q[2], idx = q[3];
        
        // Add all edges with weight < limit
        while (edgeIdx < edgeList.length && edgeList[edgeIdx][2] < limit) {
            uf.union(edgeList[edgeIdx][0], edgeList[edgeIdx][1]);
            edgeIdx++;
        }
        
        result[idx] = uf.isConnected(u, v);
    }
    
    return result;
}
```

**Benefit**: Process related queries together, avoid redundant work.

---

### 28. LeetCode 778: Swim in Rising Water

**Problem**: Minimum time to swim from top-left to bottom-right as water rises.

**Answer**:
```java
public int swimInWater(int[][] grid) {
    int n = grid.length;
    List<int[]> cells = new ArrayList<>();
    
    // Store all cells with their heights
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cells.add(new int[]{grid[i][j], i, j});
        }
    }
    
    // Sort by height
    Collections.sort(cells, (a, b) -> Integer.compare(a[0], b[0]));
    
    UnionFind uf = new UnionFind(n * n);
    int[] dx = {0, 0, 1, -1};
    int[] dy = {1, -1, 0, 0};
    
    for (int[] cell : cells) {
        int time = cell[0], x = cell[1], y = cell[2];
        int idx = x * n + y;
        
        // Union with adjacent cells with height <= current time
        for (int k = 0; k < 4; k++) {
            int nx = x + dx[k], ny = y + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] <= time) {
                uf.union(idx, nx * n + ny);
            }
        }
        
        // Check if start and end are connected
        if (uf.isConnected(0, n * n - 1)) {
            return time;
        }
    }
    
    return -1;
}
```

**Time**: O(N² log N), **Space**: O(N²)

---

### 29. How do you handle Union-Find on strings?

**Answer**: Map strings to integer indices.

```java
Map<String, Integer> stringToIndex = new HashMap<>();
int idx = 0;

for (String s : strings) {
    if (!stringToIndex.containsKey(s)) {
        stringToIndex.put(s, idx++);
    }
}

UnionFind uf = new UnionFind(idx);

// Union by string keys
void unionStrings(String a, String b) {
    uf.union(stringToIndex.get(a), stringToIndex.get(b));
}

// Check connectivity
boolean connected(String a, String b) {
    return uf.isConnected(stringToIndex.get(a), stringToIndex.get(b));
}
```

---

### 30. What are the limitations of Union-Find?

**Answer**:

**Cannot do**:
- ❌ Remove edges (edges are permanent)
- ❌ Find actual paths between nodes
- ❌ Handle directed graphs natively
- ❌ Efficient deletion from sets
- ❌ Find shortest paths

**Workarounds**:
1. **Edge deletion**: Process in reverse (offline)
2. **Paths**: Use BFS/DFS instead
3. **Directed graphs**: Special handling (like LeetCode 685)

**Best for**:
- ✅ Dynamic connectivity queries
- ✅ Incremental edge additions
- ✅ Connected components
- ✅ Cycle detection
- ✅ MST algorithms

---

## 🚀 System Design & Real-World (Questions 31-40)

### 31. How would you use Union-Find in a social network?

**Answer**: Model friend connections as union operations.

```java
class SocialNetwork {
    private UnionFind uf;
    private Map<String, Integer> userToId;
    
    public SocialNetwork(List<String> users) {
        uf = new UnionFind(users.size());
        userToId = new HashMap<>();
        
        for (int i = 0; i < users.size(); i++) {
            userToId.put(users.get(i), i);
        }
    }
    
    public void addFriendship(String user1, String user2) {
        uf.union(userToId.get(user1), userToId.get(user2));
    }
    
    public boolean areFriendsDirectOrIndirect(String user1, String user2) {
        return uf.isConnected(userToId.get(user1), userToId.get(user2));
    }
    
    public int countFriendCircles() {
        return uf.getComponents();
    }
    
    public int getFriendCircleSize(String user) {
        return uf.getComponentSize(userToId.get(user));
    }
}
```

**Use cases**:
- Friend recommendations (users in same component)
- Community detection
- Network partitioning
- Influence analysis

---

### 32. How do you handle Union-Find in distributed systems?

**Answer**: Challenging due to need for global view.

**Approaches**:

**1. Centralized Union-Find**:
- Single authoritative server
- All union/find requests go through it
- Simple but single point of failure

**2. Sharded by ID range**:
```java
// Each shard handles subset of IDs
class ShardedUnionFind {
    private Map<Integer, UnionFind> shards;
    
    private int getShardId(int node) {
        return node / SHARD_SIZE;
    }
    
    public void union(int x, int y) {
        if (getShardId(x) == getShardId(y)) {
            // Same shard - local operation
            shards.get(getShardId(x)).union(x % SHARD_SIZE, y % SHARD_SIZE);
        } else {
            // Cross-shard - coordinate via consensus
            distributedUnion(x, y);
        }
    }
}
```

**3. Eventual consistency**:
- Replicate state across nodes
- Use CRDTs (Conflict-free Replicated Data Types)
- Accept temporary inconsistencies

**Challenges**:
- Cross-shard unions are expensive
- Maintaining consistency
- Path compression complicates replication

---

### 33. Real-world application: Image segmentation with Union-Find

**Answer**: Group similar pixels into regions.

```java
class ImageSegmentation {
    public int[][] segment(int[][] image, int threshold) {
        int m = image.length, n = image[0].length;
        UnionFind uf = new UnionFind(m * n);
        
        // Union adjacent pixels with similar intensity
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int curr = image[i][j];
                
                // Check right neighbor
                if (j + 1 < n && Math.abs(curr - image[i][j + 1]) <= threshold) {
                    uf.union(i * n + j, i * n + j + 1);
                }
                
                // Check down neighbor
                if (i + 1 < m && Math.abs(curr - image[i + 1][j]) <= threshold) {
                    uf.union(i * n + j, (i + 1) * n + j);
                }
            }
        }
        
        // Assign segment IDs
        Map<Integer, Integer> rootToSegment = new HashMap<>();
        int[][] segments = new int[m][n];
        int segmentId = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int root = uf.find(i * n + j);
                if (!rootToSegment.containsKey(root)) {
                    rootToSegment.put(root, segmentId++);
                }
                segments[i][j] = rootToSegment.get(root);
            }
        }
        
        return segments;
    }
}
```

**Applications**:
- Medical image analysis
- Object detection
- Background removal
- Face recognition preprocessing

---

### 34. How do you optimize Union-Find for cache locality?

**Answer**:

**1. Array packing**:
```java
// Store parent and rank in single array
class CompactUnionFind {
    private int[] data; // High bits: parent, low bits: rank
    
    private int getParent(int x) {
        return data[x] >>> 8;
    }
    
    private int getRank(int x) {
        return data[x] & 0xFF;
    }
    
    private void setParent(int x, int parent) {
        data[x] = (parent << 8) | getRank(x);
    }
}
```

**2. Batch operations**:
```java
// Process unions in batches for better cache usage
public void batchUnion(int[][] edges) {
    Arrays.sort(edges, (a, b) -> Integer.compare(a[0], b[0]));
    
    for (int[] edge : edges) {
        union(edge[0], edge[1]);
    }
}
```

**3. Memory layout**:
- Keep related nodes together in memory
- Use spatial locality for grid problems
- Prefetch parent array entries

---

### 35. Comparison: Union-Find vs Tarjan's SCC algorithm

**Answer**:

| Feature | Union-Find | Tarjan's SCC |
|---------|-----------|--------------|
| **Graph type** | Undirected | Directed |
| **Finds** | Connected components | Strongly connected components |
| **Time** | O(E × α(V)) | O(V + E) |
| **Dynamic** | ✅ Incremental | ❌ Static |
| **Path compression** | ✅ Yes | ❌ No |
| **Use when** | Incremental connectivity | One-time SCC detection |

**Example where both apply**:
- **Union-Find**: Social network (bidirectional friendships)
- **Tarjan**: Twitter followers (directed relationships)

---

## 📊 Complexity & Optimization (Questions 36-40)

### 36. Prove that Union-Find with both optimizations is O(α(n)).

**Answer**: (High-level sketch)

**Key concepts**:
1. **Rank bound**: Without path compression, union by rank ensures tree height ≤ log N
2. **Path compression**: Flattens paths, amortizes cost across operations
3. **Combined effect**: Iterated logarithm growth

**Formal proof** (Tarjan, 1975):
- Define potential function Φ based on tree structure
- Show each operation changes Φ by at most O(α(n))
- Amortized analysis: Total cost / # operations

**Intuition**:
- Union by rank keeps trees balanced: O(log N)
- Path compression makes subsequent finds cheaper
- Over many operations, average cost approaches α(N)

**Result**: m operations on n elements: O(m × α(n)) total time

---

### 37. Space optimization: How to reduce memory usage?

**Answer**:

**1. Use path halving instead of full compression**:
```java
public int find(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]]; // Only one level
        x = parent[x];
    }
    return x;
}
```
- Still O(log N) amortized
- No recursion → saves stack space

**2. Store rank in parent array (bit packing)**:
```java
// Use sign bit for rank
private int[] parent; // Negative means root, abs value is rank

public int find(int x) {
    if (parent[x] < 0) return x;
    return parent[x] = find(parent[x]);
}
```

**3. Lazy initialization**:
```java
// Don't allocate until needed
Map<Integer, Integer> parent = new HashMap<>();

public int find(int x) {
    parent.putIfAbsent(x, x);
    if (parent.get(x).equals(x)) return x;
    int root = find(parent.get(x));
    parent.put(x, root);
    return root;
}
```

---

### 38. How do you test Union-Find implementation?

**Answer**:

```java
@Test
public void testUnionFind() {
    // Test 1: Basic connectivity
    UnionFind uf = new UnionFind(10);
    uf.union(0, 1);
    uf.union(2, 3);
    assertTrue(uf.isConnected(0, 1));
    assertFalse(uf.isConnected(0, 2));
    
    // Test 2: Transitive connectivity
    uf.union(1, 2);
    assertTrue(uf.isConnected(0, 3));
    
    // Test 3: Component count
    assertEquals(7, uf.getComponents());
    
    // Test 4: Idempotency
    int before = uf.getComponents();
    uf.union(0, 1); // Already connected
    assertEquals(before, uf.getComponents());
    
    // Test 5: Path compression
    // After find, path should be compressed
    uf.find(0);
    assertEquals(uf.find(1), parent[0]); // Direct parent
    
    // Test 6: Large scale
    UnionFind uf2 = new UnionFind(100000);
    for (int i = 0; i < 99999; i++) {
        uf2.union(i, i + 1);
    }
    assertEquals(1, uf2.getComponents());
    assertTrue(uf2.isConnected(0, 99999));
}
```

**Test cases**:
- ✅ Basic union/find
- ✅ Transitive connections
- ✅ Component counting
- ✅ Idempotency
- ✅ Path compression verification
- ✅ Large scale performance
- ✅ Edge cases (self-loops, duplicates)

---

### 39. Implement Union-Find with generic types.

**Answer**:

```java
public class GenericUnionFind<T> {
    private Map<T, T> parent;
    private Map<T, Integer> size;
    
    public GenericUnionFind() {
        parent = new HashMap<>();
        size = new HashMap<>();
    }
    
    public void makeSet(T item) {
        if (!parent.containsKey(item)) {
            parent.put(item, item);
            size.put(item, 1);
        }
    }
    
    public T find(T item) {
        makeSet(item);
        
        if (!parent.get(item).equals(item)) {
            parent.put(item, find(parent.get(item)));
        }
        return parent.get(item);
    }
    
    public boolean union(T a, T b) {
        makeSet(a);
        makeSet(b);
        
        T rootA = find(a);
        T rootB = find(b);
        
        if (rootA.equals(rootB)) return false;
        
        if (size.get(rootA) < size.get(rootB)) {
            parent.put(rootA, rootB);
            size.put(rootB, size.get(rootB) + size.get(rootA));
        } else {
            parent.put(rootB, rootA);
            size.put(rootA, size.get(rootA) + size.get(rootB));
        }
        
        return true;
    }
    
    public boolean isConnected(T a, T b) {
        return find(a).equals(find(b));
    }
}

// Usage
GenericUnionFind<String> uf = new GenericUnionFind<>();
uf.union("Alice", "Bob");
uf.union("Bob", "Charlie");
System.out.println(uf.isConnected("Alice", "Charlie")); // true
```

---

### 40. What interview tips do you have for Union-Find problems?

**Answer**:

**1. Recognize patterns**:
- Keywords: "connected", "components", "groups", "merge", "cycle"
- Graph connectivity → likely Union-Find or BFS/DFS
- Dynamic graph → Union-Find preferred

**2. Template approach**:
```java
// Standard template
class Solution {
    public int solve(...) {
        UnionFind uf = new UnionFind(n);
        
        // Process connections
        for (...) {
            uf.union(a, b);
        }
        
        // Query result
        return uf.getComponents(); // or isConnected, etc.
    }
}
```

**3. Common variations**:
- Track component sizes? → Use union by size
- Need to count components? → Decrement on union
- Grid problem? → Map 2D to 1D: `i * cols + j`
- Need dummy node? → Use extra index

**4. Optimization checklist**:
- ✅ Path compression in find()
- ✅ Union by size or rank
- ✅ Check if already connected before union
- ✅ Early termination when possible

**5. Edge cases**:
- Single node graph
- Fully connected graph
- Disconnected graph
- Self-loops (union(x, x))

**6. Time/Space complexity**:
- Time: O(E × α(V)) for E edges, V vertices
- Space: O(V) for parent and size arrays

**7. When NOT to use Union-Find**:
- Need actual paths → Use BFS/DFS
- Directed graphs → Use SCC algorithms
- Need to remove edges → Use other structures

---

## ✅ Quick Reference Card

### Implementation Checklist
```java
class UnionFind {
    private int[] parent, size;
    private int components;
    
    public UnionFind(int n) {
        parent = new int[n];
        size = new int[n];
        components = n;
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            size[i] = 1;
        }
    }
    
    public int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }
    
    public boolean union(int x, int y) {
        int rootX = find(x), rootY = find(y);
        if (rootX == rootY) return false;
        
        // Union by size
        if (size[rootX] < size[rootY]) {
            parent[rootX] = rootY;
            size[rootY] += size[rootX];
        } else {
            parent[rootY] = rootX;
            size[rootX] += size[rootY];
        }
        components--;
        return true;
    }
}
```

### Time Complexities
- **Find**: O(α(n)) amortized
- **Union**: O(α(n)) amortized
- **IsConnected**: O(α(n)) amortized
- **Overall**: O(m × α(n)) for m operations

### Common Applications
1. Cycle detection
2. Connected components
3. Minimum spanning tree (Kruskal)
4. Dynamic connectivity
5. Image segmentation
6. Social network analysis
7. Percolation theory

---

**Total: 40 comprehensive Q&A covering all aspects of Union-Find!**
