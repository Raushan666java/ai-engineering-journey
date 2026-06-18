# Chapter 10: Data Structures & Algorithms â€” GATE CS Preparation

---

## Topic Weightage Table (GATE 2010â€“2025)

![Data Structures and Algorithms Overview](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms.png)

| Topic | Avg Marks | 2025 | 2024 | 2023 | 2022 | 2021 | 2020 | 2019 | 2018 | 2017 | 2016 | 2015 |
|-------|-----------|------|------|------|------|------|------|------|------|------|------|------|
| Complexity Analysis | 3â€“5 | 4 | 3 | 5 | 4 | 3 | 5 | 3 | 4 | 5 | 3 | 4 |
| Arrays & Matrices | 2â€“4 | 3 | 2 | 3 | 2 | 4 | 2 | 3 | 2 | 2 | 3 | 2 |
| Linked Lists | 1â€“3 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 3 | 2 | 1 | 2 |
| Stacks & Queues | 2â€“4 | 3 | 4 | 2 | 3 | 2 | 3 | 4 | 2 | 3 | 4 | 2 |
| Trees (BST, AVL, B/B+) | 5â€“8 | 6 | 7 | 8 | 5 | 7 | 6 | 5 | 8 | 6 | 7 | 5 |
| Heaps & Heap Sort | 2â€“4 | 3 | 2 | 4 | 3 | 2 | 3 | 2 | 4 | 3 | 2 | 3 |
| Graphs | 6â€“10 | 8 | 7 | 9 | 10 | 6 | 8 | 7 | 6 | 9 | 8 | 7 |
| Sorting | 3â€“5 | 4 | 3 | 5 | 4 | 3 | 4 | 5 | 3 | 4 | 5 | 3 |
| Searching & Hashing | 2â€“4 | 3 | 4 | 2 | 3 | 4 | 2 | 3 | 4 | 2 | 3 | 4 |

---

## 1. Complexity Analysis

### 1.1 Asymptotic Notations

| Notation | Definition | Intuition |
|----------|-----------|-----------|
| **O(g(n))** | { f(n) \| âˆƒ c > 0, nâ‚€ > 0 such that 0 â‰¤ f(n) â‰¤ cÂ·g(n) âˆ€ n â‰¥ nâ‚€ } | Upper bound |
| **Î©(g(n))** | { f(n) \| âˆƒ c > 0, nâ‚€ > 0 such that 0 â‰¤ cÂ·g(n) â‰¤ f(n) âˆ€ n â‰¥ nâ‚€ } | Lower bound |
| **Î˜(g(n))** | { f(n) \| âˆƒ câ‚, câ‚‚ > 0, nâ‚€ > 0 such that câ‚Â·g(n) â‰¤ f(n) â‰¤ câ‚‚Â·g(n) âˆ€ n â‰¥ nâ‚€ } | Tight bound |
| **o(g(n))** | { f(n) \| âˆ€ c > 0, âˆƒ nâ‚€ > 0 such that 0 â‰¤ f(n) < cÂ·g(n) âˆ€ n â‰¥ nâ‚€ } | Loose upper |
| **Ï‰(g(n))** | { f(n) \| âˆ€ c > 0, âˆƒ nâ‚€ > 0 such that 0 â‰¤ cÂ·g(n) < f(n) âˆ€ n â‰¥ nâ‚€ } | Loose lower |

**Properties:**
- Transitive: f(n) = O(g(n)) and g(n) = O(h(n)) â‡’ f(n) = O(h(n))
- Reflexive: f(n) = O(f(n))
- Symmetric for Î˜ only: f(n) = Î˜(g(n)) â‡” g(n) = Î˜(f(n))
- Addition: fâ‚(n) + fâ‚‚(n) = O(max(fâ‚(n), fâ‚‚(n)))
- Multiplication: fâ‚(n) Â· fâ‚‚(n) = O(fâ‚(n) Â· fâ‚‚(n))

**Common Functions (ordered by growth rate):**
O(1) < O(log log n) < O(log n) < O((log n)Â²) < O(âˆšn) < O(n) < O(n log n) < O(nÂ²) < O(nÂ³) < O(2â¿) < O(n!) < O(nâ¿)

### 1.2 Recurrence Relations

**Substitution Method:** Guess the form, prove by induction.

**Recurrence Tree Method:** Expand recurrence into a tree, sum costs per level.

**Master Theorem:** For T(n) = aÂ·T(n/b) + f(n), a â‰¥ 1, b > 1:

| Case | Condition | Solution |
|------|-----------|----------|
| 1 | f(n) = O(n^{log_b a âˆ’ Îµ}) for Îµ > 0 | T(n) = Î˜(n^{log_b a}) |
| 2 | f(n) = Î˜(n^{log_b a}Â·log^k n) for k â‰¥ 0 | T(n) = Î˜(n^{log_b a}Â·log^{k+1} n) |
| 3 | f(n) = Î©(n^{log_b a + Îµ}) for Îµ > 0 AND aÂ·f(n/b) â‰¤ cÂ·f(n) for c < 1 | T(n) = Î˜(f(n)) |

**Common Recurrences:**

| Recurrence | Algorithm | Complexity |
|------------|-----------|------------|
| T(n) = T(nâˆ’1) + 1 | n! | Î˜(n) |
| T(n) = T(nâˆ’1) + n | Selection sort | Î˜(nÂ²) |
| T(n) = 2T(nâˆ’1) + 1 | Tower of Hanoi | Î˜(2â¿) |
| T(n) = T(n/2) + 1 | Binary search | Î˜(log n) |
| T(n) = T(n/2) + n | â€” | Î˜(n) |
| T(n) = 2T(n/2) + n | Merge sort | Î˜(n log n) |
| T(n) = 2T(n/2) + 1 | Tree traversal | Î˜(n) |
| T(n) = 2T(n/2) + nÂ² | â€” | Î˜(nÂ²) |
| T(n) = 7T(n/2) + nÂ² | Strassen's MM | Î˜(n^{logâ‚‚7}) â‰ˆ Î˜(n^{2.81}) |

### 1.3 Amortized Analysis

**Aggregate Method:** Compute total cost of n operations, divide by n.

**Accounting Method:** Assign different amortized costs; credit accumulates for expensive ops.

**Potential Method:** Define potential function Î¦(Dáµ¢). Amortized cost = actual cost + Î¦(Dáµ¢) âˆ’ Î¦(D_{iâˆ’1}).

**Example â€” Dynamic Array (table doubling):**
- Actual cost of push: O(1) (most), O(n) (when resizing)
- Amortized cost: O(1) per push
- Aggregate: n pushes cost O(n), so amortized = O(1)

---

## 2. Arrays

### 2.1 Representation in Memory

**Row-major order (C/C++):** Address(A[i][j]) = Base + (i Ã— n + j) Ã— size

**Column-major order (Fortran):** Address(A[i][j]) = Base + (j Ã— m + i) Ã— size

**For n-dimensional array A[dâ‚][dâ‚‚]...[dâ‚™]:**
- Address = Base + Î£_{k=1}^{n} (iâ‚– Ã— Î _{t=k+1}^{n} dâ‚œ) Ã— size

### 2.2 Sparse Matrices

**Definition:** Matrix with mostly zero entries (nnz << m Ã— n).

**Representations:**

| Method | Storage | Description |
|--------|---------|-------------|
| Coordinate (COO) | O(nnz Ã— 3) | (row, col, value) triples |
| CSR (Compressed Sparse Row) | O(nnz Ã— 2 + m + 1) | value[], col_index[], row_ptr[] |
| CSC (Compressed Sparse Column) | O(nnz Ã— 2 + n + 1) | value[], row_index[], col_ptr[] |

**CSR Example:**
```
Matrix:
[1 0 2]
[0 3 0]
[4 0 5]

values    = [1, 2, 3, 4, 5]
col_index = [0, 2, 1, 0, 2]
row_ptr   = [0, 2, 3, 5]
```

### 2.3 GATE-Related Array Formulas

**2D array A[m][n] stored row-major:**
- A[i][j] = Base + (i Ã— n + j) Ã— element_size

**2D array A[m][n] stored column-major:**
- A[i][j] = Base + (j Ã— m + i) Ã— element_size

**Triangular matrix (lower) in 1D array:**
- Index of A[i][j] (i â‰¥ j) = i(i+1)/2 + j
- Total size = n(n+1)/2

---

## 3. Linked Lists

### 3.1 Types

| Type | Node Structure | Memory | Traversal |
|------|---------------|--------|-----------|
| Singly | data + next | O(n) | Forward only |
| Doubly | prev + data + next | O(2n) | Both directions |
| Circular (Singly) | data + next (last â†’ head) | O(n) | Continuous |
| Circular (Doubly) | prev + data + next (circular) | O(2n) | Both, continuous |
| XOR List | data + (prev âŠ• next) | O(n) (compressed) | Both (XOR trick) |

### 3.2 Operations Complexity

| Operation | Singly | Doubly | Circular |
|-----------|--------|--------|----------|
| Insert at head | O(1) | O(1) | O(1) |
| Insert at tail | O(n) | O(1) (with tail ptr) | O(1) |
| Delete at head | O(1) | O(1) | O(1) |
| Delete at tail | O(n) | O(1) | O(n) |
| Search | O(n) | O(n) | O(n) |

### 3.3 Floyd's Cycle Detection (Tortoise & Hare)

```
function hasCycle(head):
    slow = fast = head
    while fast â‰  null and fast.next â‰  null:
        slow = slow.next
        fast = fast.next.next
        if slow == fast: return True
    return False
```

**To find start of cycle:**
1. Detect meeting point p
2. Move slow to head, keep fast at p
3. Both move 1 step at a time â†’ meet at cycle start

**Proof:** Let cycle length = L, head-to-cycle-start = k. When slow enters cycle, fast is k ahead. They meet at distance (L âˆ’ k mod L) from cycle start. Resetting one pointer to head and moving both at speed 1 gives meeting at cycle start after exactly k steps.

---

## 4. Stacks & Queues

### 4.1 Stack Operations

| Operation | Array | Linked List |
|-----------|-------|-------------|
| push(x) | O(1) (amortized) | O(1) |
| pop() | O(1) | O(1) |
| peek() | O(1) | O(1) |
| isEmpty() | O(1) | O(1) |

### 4.2 Queue Operations

| Operation | Array (Circular) | Linked List |
|-----------|------------------|-------------|
| enqueue(x) | O(1) | O(1) |
| dequeue() | O(1) | O(1) |
| front() | O(1) | O(1) |

**Circular Queue:** rear = (rear + 1) mod SIZE; front = (front + 1) mod SIZE

**Two-stack queue:** enqueue = push to s1; dequeue = if s2 empty, pop all s1â†’s2, then pop s2.

### 4.3 Applications

**Parenthesis Matching:**
```
function isValid(s):
    stack = []
    for c in s:
        if c in '([{': stack.push(c)
        else: if stack.isEmpty() or !match(stack.pop(), c): return False
    return stack.isEmpty()
```

**Infix to Postfix (Shunting Yard):**
- Operands â†’ output directly
- Operators: pop while stack top has â‰¥ precedence (left-assoc) or > (right-assoc), then push
- '(' â†’ push; ')' â†’ pop until '('

**Postfix Evaluation:**
```
for each token:
    if token is operand: push(token)
    else: b = pop(), a = pop(), push(a op b)
return pop()
```

### 4.4 Expression Conversion Summary

| Expression | Order | Example |
|------------|-------|---------|
| Infix | operand operator operand | A + B Ã— C |
| Prefix | operator operand operand | + A Ã— B C |
| Postfix | operand operand operator | A B C Ã— + |

**Evaluation direction:** Postfix uses a single stack. Prefix can be evaluated right-to-left.

---

## 5. Trees

### 5.1 Binary Tree Terminologies

| Property | Formula |
|----------|---------|
| Max nodes at level i | 2â± |
| Max nodes in tree of height h | 2Ê°âºÂ¹ âˆ’ 1 |
| Min height for n nodes | âŒˆlogâ‚‚(n+1)âŒ‰ âˆ’ 1 |
| For n nodes, leaf count L | L = I + 1 (I = internal nodes with degree 2) |
| Full binary tree | Every node has 0 or 2 children |
| Complete binary tree | All levels full except possibly last, left-packed |
| Perfect binary tree | All levels completely full |

### 5.2 Binary Tree Traversals

| Traversal | Order | Use Case |
|-----------|-------|----------|
| Preorder | Root â†’ Left â†’ Right | Copy tree, serialize |
| Inorder | Left â†’ Root â†’ Right | BST sort |
| Postorder | Left â†’ Right â†’ Root | Delete tree, expression eval |
| Level-order | BFS by level | Min height, shortest path |

**From traversals:** Inorder + (preorder/postorder) â†’ unique tree. Only inorder alone â†’ no.

**Morris Traversal (Threaded, O(1) space):**
```
function morrisInorder(root):
    curr = root
    while curr â‰  null:
        if curr.left == null:
            visit(curr); curr = curr.right
        else:
            pred = curr.left
            while pred.right â‰  null and pred.right â‰  curr:
                pred = pred.right
            if pred.right == null:
                pred.right = curr; curr = curr.left
            else:
                pred.right = null; visit(curr); curr = curr.right
```

### 5.3 Binary Search Tree

**Operations and complexity (average / worst):**

| Operation | Average | Worst (skewed) |
|-----------|---------|----------------|
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Delete | O(log n) | O(n) |

**BST Deletion cases:**
1. Leaf: remove directly
2. One child: replace with child
3. Two children: replace with inorder successor (or predecessor), then delete it

**Inorder predecessor:** max of left subtree
**Inorder successor:** min of right subtree

### 5.4 Important Tree Problems

**Diameter of a Binary Tree:** Longest path between any two nodes (may not pass through root).

```
function diameter(root):
    max_diameter = 0
    function height(node):
        if node == null: return 0
        L = height(node.left)
        R = height(node.right)
        max_diameter = max(max_diameter, L + R)
        return 1 + max(L, R)
    height(root)
    return max_diameter
```

**Lowest Common Ancestor (LCA):**
```
function lca(root, p, q):
    if root == null or root == p or root == q: return root
    L = lca(root.left, p, q)
    R = lca(root.right, p, q)
    if L and R: return root
    return L if L != null else R
```

**Maximum Path Sum:** Similar to diameter, but sum instead of count.

### 5.5 Threaded Binary Tree

**One-way threading:** Right null pointers point to inorder successor.
**Two-way threading:** Left null pointers point to inorder predecessor.

**Advantage:** Traversal without stack or recursion (O(1) space).

### 5.6 Expression Trees

- Leaf nodes = operands
- Internal nodes = operators
- Inorder traversal = infix expression (with parentheses for precedence)
- Preorder = prefix expression
- Postorder = postfix expression

### 5.7 AVL Trees

**Balance Factor:** bf(node) = height(left) âˆ’ height(right) âˆˆ {âˆ’1, 0, 1}

**Rotations:**

| Case | Pattern | Rotation |
|------|---------|----------|
| LL | Left-Left | Right rotate on unbalanced node |
| RR | Right-Right | Left rotate on unbalanced node |
| LR | Left-Right | Left rotate on left child, then right rotate on node |
| RL | Right-Left | Right rotate on right child, then left rotate on node |

**Complexity:** Search O(log n), Insert O(log n), Delete O(log n)

**Minimum nodes in AVL tree of height h:** N(h) = N(hâˆ’1) + N(hâˆ’2) + 1, N(0) = 1, N(1) = 2

### 5.8 B-Trees and B+ Trees

**B-Tree of order m:**
- Root: 1 to 2m keys
- Internal nodes: m to 2m keys (except root)
- All leaves at same depth
- Each internal node with k keys has k+1 children
- Search/Insert/Delete: O(log_m n)

**B+ Tree:**
- Internal nodes: only keys (routers), no data pointers
- Leaves: all keys + data pointers, linked sequentially
- Better cache performance, efficient range queries (leaf linked list)

### 5.9 Red-Black Trees

**Properties:**
1. Every node is red or black
2. Root is black
3. Leaves (null) are black
4. Red node cannot have red child (no two consecutive reds)
5. All paths from root to leaf have same #black nodes (black-height)

**Operations:** Search O(log n), Insert O(log n), Delete O(log n)

**Insertion fix-up:** Depending on uncle's color and relative position, perform rotations and color flips.

**Black-height:** bh(x) = number of black nodes on path from x to leaf (excluding x). Tree height â‰¤ 2 Ã— black-height.

**2-3-4 tree correspondence:** Every Red-Black tree corresponds to a 2-3-4 tree.

### 5.10 Tries

**Trie (Prefix Tree):**
- n-ary tree for string storage/retrieval
- Insert: O(|s|) where |s| = string length
- Search: O(|s|)
- Prefix search: O(|prefix|) + O(number of completions)
- Space: O(Î£ total chars)

**Compressed Trie (Radix Tree / Patricia Trie):** Compress chains of single-child nodes.

---

## 6. Heaps

### 6.1 Binary Heap

| Property | Min-Heap | Max-Heap |
|----------|----------|----------|
| Root | Minimum element | Maximum element |
| Parent of i | âŒŠ(iâˆ’1)/2âŒ‹ | Same |
| Left child of i | 2i + 1 | Same |
| Right child of i | 2i + 2 | Same |
| A[parent] â‰¤ A[child] | Yes | No |
| A[parent] â‰¥ A[child] | No | Yes |

### 6.2 Operations

| Operation | Complexity | Description |
|-----------|------------|-------------|
| buildHeap() | O(n) | Bottom-up heapify |
| insert(x) | O(log n) | Bubble-up |
| extractMin() | O(log n) | Swap root with last, bubble-down |
| getMin() | O(1) | Return root |
| decreaseKey(i, val) | O(log n) | Bubble-up from i |
| delete(i) | O(log n) | decreaseKey to -âˆž, extractMin |

**Build heap proof:** Sum of heights of nodes = n âˆ’ (number of leaves at levels except last) = O(n)

### 6.3 Heap Sort

```
function heapSort(arr):
    buildMaxHeap(arr)
    for i = n-1 down to 1:
        swap(arr[0], arr[i])
        heapSize--
        maxHeapify(arr, 0)
```

**Complexity:** O(n log n)
**Space:** O(1) in-place
**Stability:** NOT stable
**Not adaptive** â€” always O(n log n)

### 6.4 Priority Queue

| Implementation | insert | extractMin | decreaseKey | Union |
|----------------|--------|------------|-------------|-------|
| Binary Heap | O(log n) | O(log n) | O(log n) | O(n) |
| Binomial Heap | O(log n) | O(log n) | O(log n) | O(log n) |
| Fibonacci Heap | O(1) | O(log n) amortized | O(1) amortized | O(1) |

---

## 7. Graphs

### 7.1 Representations

| Representation | Space | Edge Check | Neighbors | Add Edge |
|----------------|-------|------------|-----------|----------|
| Adjacency Matrix | O(VÂ²) | O(1) | O(V) | O(1) |
| Adjacency List | O(V + E) | O(deg(v)) | O(deg(v)) | O(1) |
| Edge List | O(E) | O(E) | O(E) | O(1) |

**When to use what:**
- Dense graph (E â‰ˆ VÂ²) â†’ Adjacency Matrix
- Sparse graph (E << VÂ²) â†’ Adjacency List

### 7.2 BFS (Breadth-First Search)

```
function bfs(start):
    visited = {start}; queue = [start]
    while queue not empty:
        v = queue.dequeue()
        for u in adjacency[v]:
            if u not in visited:
                visited.add(u)
                queue.enqueue(u)
                parent[u] = v
```

**Properties:**
- Finds shortest path in unweighted graph
- Complexity: O(V + E)
- BFS tree has shortest path from source to all reachable nodes
- Uses queue

### 7.3 DFS (Depth-First Search)

```
function dfs(start):
    visited.add(start)
    for u in adjacency[start]:
        if u not in visited:
            parent[u] = start
            dfs(u)
```

**Properties:**
- Complexity: O(V + E)
- Uses stack (recursion or explicit)
- Produces DFS forest with tree, back, forward, and cross edges

**Edge classification:**
| Edge | Condition |
|------|-----------|
| Tree | v is first discovered from u |
| Back | v is ancestor of u (cycle detection) |
| Forward | v is descendant of u (already visited) |
| Cross | None of the above |

**Applications:**
- Cycle detection (back edge exists) â€” O(V + E)
- Topological sort (reverse of finish times)
- Strongly connected components

### 7.4 Topological Sort

**Definition:** Linear ordering of DAG vertices such that for every edge uâ†’v, u appears before v.

**Kahn's algorithm (BFS-based):**
```
function topologicalSort(graph):
    inDegree = computeInDegrees(graph)
    queue = [v for v in vertices if inDegree[v] == 0]
    result = []
    while queue not empty:
        v = queue.dequeue(); result.append(v)
        for u in adjacency[v]:
            inDegree[u]--
            if inDegree[u] == 0: queue.enqueue(u)
    return result if len(result) == V else "Cycle detected"
```

**DFS-based:** Perform DFS, append to list on finish (exit time), reverse at end.

**Complexity:** O(V + E)

### 7.5 Minimum Spanning Tree

**Definition:** Subset of edges connecting all vertices with minimum total weight.

| Algorithm | Strategy | Complexity | Data Structure |
|-----------|----------|------------|----------------|
| Prim's | Grow single tree | O((V+E) log V) | Binary heap (priority queue) |
| Kruskal's | Add smallest safe edges | O(E log V) | Union-Find (DSU) |

**Prim's Algorithm:**
```
function prim(graph, start):
    priorityQueue = [(0, start)]  // (weight, vertex)
    visited = set()
    total = 0
    while priorityQueue not empty:
        w, v = pq.extractMin()
        if v in visited: continue
        visited.add(v); total += w
        for (u, w2) in adjacency[v]:
            if u not in visited: pq.insert((w2, u))
    return total
```

**Kruskal's Algorithm:**
```
function kruskal(edges, V):
    sort(edges by weight)
    dsu = UnionFind(V)
    mst = []
    for (u, v, w) in edges:
        if dsu.find(u) != dsu.find(v):
            dsu.union(u, v)
            mst.append((u, v, w))
    return mst
```

### 7.6 Shortest Path Algorithms

| Algorithm | Type | Complexity | Limitation |
|-----------|------|------------|------------|
| Dijkstra | Single-source | O((V+E) log V) | No negative edges |
| Bellman-Ford | Single-source | O(VE) | Handles negative, detects cycles |
| Floyd-Warshall | All-pairs | O(VÂ³) | Handles negative, no neg cycles |
| DAG Shortest Path | Single-source (DAG) | O(V+E) | Works only on DAGs |

**Dijkstra's Algorithm:**
```
function dijkstra(graph, start):
    dist = [âˆž] * V; dist[start] = 0
    pq = [(0, start)]
    while pq not empty:
        d, v = pq.extractMin()
        if d > dist[v]: continue
        for (u, w) in adjacency[v]:
            if dist[v] + w < dist[u]:
                dist[u] = dist[v] + w
                pq.insert((dist[u], u))
    return dist
```

**Bellman-Ford Algorithm:**
```
function bellmanFord(edges, V, start):
    dist = [âˆž] * V; dist[start] = 0
    for i in range(V-1):
        for (u, v, w) in edges:
            if dist[u] != âˆž and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    // Vth iteration for negative cycle detection
    for (u, v, w) in edges:
        if dist[u] != âˆž and dist[u] + w < dist[v]:
            return "Negative cycle"
    return dist
```

### 7.7 Strongly Connected Components

**Kosaraju's Algorithm:**
1. Perform DFS on original graph, record finish times
2. Compute transpose (reverse all edges)
3. Perform DFS on transposed graph in decreasing finish time order
4. Each DFS tree = one SCC

**Tarjan's Algorithm:**
- Single DFS using low-link values and a stack
- Complexity: O(V + E)

**Applications:** Condensation graphs, 2-SAT, dependency analysis.

### 7.8 Union-Find (Disjoint Set Union)

```
class UnionFind:
    parent = [i for i in range(n)]
    rank = [0] * n

    function find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])  // path compression
        return parent[x]

    function union(x, y):
        px, py = find(x), find(y)
        if px == py: return False
        if rank[px] < rank[py]: parent[px] = py  // union by rank
        elif rank[px] > rank[py]: parent[py] = px
        else: parent[py] = px; rank[px]++
        return True
```

**Complexity:** O(Î±(n)) per operation where Î± is inverse Ackermann function (essentially O(1)).

---

## 8. Sorting

### 8.1 Comparison Sorts â€” Complexity Summary

| Algorithm | Best | Average | Worst | Space | Stable | In-place | Adaptive |
|-----------|------|---------|-------|-------|--------|----------|----------|
| Bubble | O(n) | O(nÂ²) | O(nÂ²) | O(1) | Yes | Yes | Yes |
| Insertion | O(n) | O(nÂ²) | O(nÂ²) | O(1) | Yes | Yes | Yes |
| Selection | O(nÂ²) | O(nÂ²) | O(nÂ²) | O(1) | No | Yes | No |
| Merge | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes | No | No |
| Quick | O(n log n) | O(n log n) | O(nÂ²) | O(log n) | No | Yes | No |
| Heap | O(n log n) | O(n log n) | O(n log n) | O(1) | No | Yes | No |
| Shell | O(n log n) | O(n^{4/3}) | O(n^{3/2}) | O(1) | No | Yes | Yes |
| Timsort | O(n) | O(n log n) | O(n log n) | O(n) | Yes | Yes | Yes |

**Comparison-based sort lower bound:** Î©(n log n) â€” proven by decision tree with n! leaves.

### 8.2 Quick Sort Details

```
function quickSort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quickSort(arr, low, pi-1)
        quickSort(arr, pi+1, high)

function partition(arr, low, high):  // Lomuto
    pivot = arr[high]
    i = low - 1
    for j = low to high-1:
        if arr[j] <= pivot: i++; swap(arr[i], arr[j])
    swap(arr[i+1], arr[high])
    return i+1
```

**Hoare Partition:**
```
function partition(arr, low, high):
    pivot = arr[low]; i = low-1; j = high+1
    while True:
        do i++ while arr[i] < pivot
        do j-- while arr[j] > pivot
        if i >= j: return j
        swap(arr[i], arr[j])
```

**Worst case:** Already sorted or reverse sorted (Lomuto with last/first pivot). Avoided by:
- Random pivot
- Median-of-three pivot selection

### 8.3 Merge Sort Details

```
function mergeSort(arr, left, right):
    if left < right:
        mid = left + (right-left)/2
        mergeSort(arr, left, mid)
        mergeSort(arr, mid+1, right)
        merge(arr, left, mid, right)
```

**In-place merge:** O(n log n) with O(1) space possible but more complex.

### 8.4 Non-Comparison Sorts

| Algorithm | Type | Complexity | Space | Stable | Constraint |
|-----------|------|------------|-------|--------|------------|
| Counting Sort | Integer | O(n + k) | O(k) | Yes | Integer range k |
| Radix Sort | Integer | O(dÂ·(n + b)) | O(n + b) | Yes | d digits, base b |
| Bucket Sort | Float | O(n + k) avg | O(n) | Yes | Uniform distribution |

**Counting Sort:**
1. Count occurrences of each value (array of size k)
2. Compute prefix sums (positions)
3. Build output in reverse to maintain stability

**Radix Sort:**
- LSD first: sort by least significant digit up to most significant
- Each pass uses a stable sort (usually Counting Sort)
- Complexity: O(dÂ·(n + b)) where d = #digits, b = base

### 8.5 Stability and In-Place Properties

| Sorting | Stable? | In-Place? | GATE Trap |
|---------|---------|-----------|-----------|
| Bubble | Yes | Yes | â€” |
| Insertion | Yes | Yes | â€” |
| Selection | No | Yes | Often asked: not stable |
| Merge | Yes | No (needs O(n) aux) | In-place variant is O(n logÂ² n) |
| Quick | No | Yes (recursive stack) | Lomuto not stable; Hoare also not stable |
| Heap | No | Yes | â€” |
| Counting | Yes | No (needs O(k)) | â€” |
| Radix | Yes | No | Stable inner sort is critical |

---

## 9. Searching

### 9.1 Linear Search

- Complexity: O(n)
- Space: O(1)
- Works on unsorted data

### 9.2 Binary Search

```
function binarySearch(arr, target):
    left = 0; right = len(arr)-1
    while left <= right:
        mid = left + (right-left)//2
        if arr[mid] == target: return mid
        if arr[mid] < target: left = mid+1
        else: right = mid-1
    return -1
```

- Complexity: O(log n)
- Space: O(1) iterative, O(log n) recursive
- Requires sorted array

### 9.3 Interpolation Search

```
function interpolationSearch(arr, target):
    left = 0; right = len(arr)-1
    while left <= right and target >= arr[left] and target <= arr[right]:
        pos = left + ((target-arr[left]) * (right-left)) // (arr[right]-arr[left])
        if arr[pos] == target: return pos
        if arr[pos] < target: left = pos+1
        else: right = pos-1
    return -1
```

- Best: O(log log n) for uniformly distributed data
- Worst: O(n)
- Requires sorted array with uniform distribution

### 9.4 Ternary Search

- Divide array into 3 parts, compare target with two midpoints
- Complexity: O(logâ‚ƒ n) â€” same as binary search asymptotically (worse constant)
- Used for unimodal functions (finding maximum/minimum of a bitonic sequence)

---

## 10. Hashing

### 10.1 Hash Functions

Good hash function properties: deterministic, uniform distribution, fast computation.

**Common hash functions:**
- Division method: h(k) = k mod m (avoid m = 2áµ– â€” use prime)
- Multiplication method: h(k) = âŒŠmÂ·(kÂ·A mod 1)âŒ‹ where A â‰ˆ (âˆš5âˆ’1)/2
- Universal hashing: h(k) = ((aÂ·k + b) mod p) mod m

### 10.2 Collision Resolution

**Chaining:**
- Each slot holds linked list of keys
- Load factor Î± = n/m
- Expected search: O(1 + Î±)
- Worst case: O(n) (all keys hash to same slot)

**Open Addressing:**
- All keys stored in table slots directly
- Load factor Î± < 1
- Probe sequence determines search path

| Probing | Sequence | Primary Clustering | Secondary Clustering |
|---------|----------|-------------------|---------------------|
| Linear | h(k,i) = (hâ€²(k) + i) mod m | Yes | N/A |
| Quadratic | h(k,i) = (hâ€²(k) + câ‚i + câ‚‚iÂ²) mod m | No | Yes |
| Double | h(k,i) = (hâ‚(k) + iÂ·hâ‚‚(k)) mod m | No | No |

**Linear probing average search time:** Â½(1 + 1/(1âˆ’Î±)) for successful, Â½(1 + 1/(1âˆ’Î±)Â²) for unsuccessful.

### 10.3 Rehashing

When load factor exceeds threshold (typically 0.75):
1. Allocate new table (usually 2Ã— size)
2. Recompute hash for every key
3. Insert into new table
- Complexity: O(n) per rehash, amortized O(1) per insertion

### 10.4 Perfect Hashing

- No collisions (static key set)
- Two-level scheme: first hash maps to slot, second-level per-slot hash is perfect
- Expected O(n) space

---

## 11. GATE Previous Year Questions (PYQs)

### Arrays

**A1** [GATE 2015, 1 mark, Arrays] An array A[10][20] is stored in row-major order. Base address = 100, element size = 2 bytes. Address of A[5][10] is:

- (A) 300 (B) 310 (C) 320 (D) 330

**Answer:** B. A[5][10] = 100 + (5Ã—20 + 10)Ã—2 = 100 + 110Ã—2 = 100 + 220 = 320.

**A2** [GATE 2017, 2 marks, Arrays] A lower triangular matrix L[n][n] is stored in 1D array of size n(n+1)/2. Index of L[i][j] (i â‰¥ j) in 1D array (0-indexed) is:

- (A) i(iâˆ’1)/2 + j (B) i(i+1)/2 + j (C) i(iâˆ’1)/2 + jâˆ’1 (D) i(i+1)/2 + jâˆ’1

**Answer:** C. For 1-indexed: i(iâˆ’1)/2 + j. For 0-indexed: i(i+1)/2 + j.

### Linked Lists

**A3** [GATE 2016, 2 marks, Linked Lists] What is the worst-case time for inserting an element at the tail of a singly linked list with a head pointer?

- (A) O(1) (B) O(log n) (C) O(n) (D) O(nÂ²)

**Answer:** C. Without tail pointer, we traverse to end â€” O(n).

**A4** [GATE 2018, 2 marks, Linked Lists] Floyd's cycle detection algorithm uses two pointers moving at speeds 1 and 2. If the list has a cycle, they will always meet. What is the minimum number of steps before meeting?

- (A) O(n) (B) O(nÂ²) (C) O(âˆšn) (D) O(n log n)

**Answer:** A. In worst case O(n), and guaranteed to detect cycle in O(n) time.

**A5** [GATE 2020, 2 marks, Linked Lists] Let P be a singly linked list. Let Q be the pointer to an intermediate node (not last). Deleting Q from P can be done in:

- (A) O(1) time (B) O(n) time (C) O(log n) time (D) O(nÂ²) time

**Answer:** A. Copy next node's data to Q, then delete next node.

### Stacks & Queues

**A6** [GATE 2016, 2 marks, Stacks] A stack is implemented with an array of size N. What is the worst-case time for N push operations?

- (A) O(N) (B) O(N log N) (C) O(NÂ²) (D) O(2á´º)

**Answer:** A. Each push is O(1), total O(N). If dynamic array with doubling: O(N) amortized.

**A7** [GATE 2019, 2 marks, Stacks] The postfix expression for (A + B) Ã— (C âˆ’ D) is:

- (A) AB+CDâˆ’Ã— (B) AB+CDÃ—âˆ’ (C) +ABÃ—âˆ’CD (D) Ã—+ABâˆ’CD

**Answer:** A. Infix: (A+B)Ã—(Câˆ’D); Postfix: AB+CDâˆ’Ã—.

**A8** [GATE 2021, 2 marks, Queues] A circular queue has size 5. front = 2, rear = 4 (0-indexed). How many elements are in the queue?

- (A) 2 (B) 3 (C) 4 (D) 5

**Answer:** B. Number of elements = (rear âˆ’ front + size) mod size = (4 âˆ’ 2 + 5) mod 5 = 2. Wait: actually 3: positions 2, 3, 4 â†’ rear âˆ’ front + 1 = 3.

**A9** [GATE 2017, 2 marks, Stacks] Evaluate postfix: 2 3 4 Ã— + 5 âˆ’. Result:

- (A) 5 (B) 9 (C) 11 (D) 15

**Answer:** B. Stack: push 2, push 3, push 4 â†’ pop 4, pop 3 â†’ 3Ã—4=12 push â†’ pop 12, pop 2 â†’ 2+12=14 push â†’ push 5 â†’ pop 5, pop 14 â†’ 14âˆ’5=9.

### Trees

**A10** [GATE 2015, 1 mark, Trees] Number of structurally different binary trees with 3 nodes:

- (A) 2 (B) 3 (C) 5 (D) 6

**Answer:** C. Catalan number Câ‚ƒ = (2n)!/((n+1)!n!) = 5.

**A11** [GATE 2014, 2 marks, BST] Preorder traversal of BST: 50, 30, 20, 40, 70, 60, 80. Postorder traversal is:

- (A) 20, 40, 30, 60, 80, 70, 50 (B) 20, 40, 30, 60, 80, 70, 50
- (C) 20, 40, 30, 60, 80, 70, 50 (D) 80, 60, 40, 20, 30, 50, 70

**Answer:** A. BST: root=50. Left subtree has 30 as root with 20 left, 40 right. Right subtree has 70 as root with 60 left, 80 right. Postorder: LRN â†’ 20, 40, 30, 60, 80, 70, 50.

**A12** [GATE 2017, 2 marks, AVL] Insert 43, 55, 67, 83, 94, 71 into empty AVL tree. How many rotations needed for 94?

- (A) 0 (B) 1 (C) 2 (D) 3

**Answer:** B. After 43, 55, 67 (RR rotation), 83, 94: inserting 94 causes imbalance requiring one left rotation.

**A13** [GATE 2018, 2 marks, B-Tree] A B-Tree of order 4 (max 3 keys). Minimum number of nodes for height 3 (root at height 0):

- (A) 7 (B) 8 (C) 15 (D) 16

**Answer:** A. Each node (except root) min keys = âŒˆm/2âŒ‰âˆ’1 = 1. Root min = 1. Level 0: 1 node. Level 1: 2 nodes. Level 2: 4 nodes. Total = 7.

**A14** [GATE 2020, 2 marks, BST] Inorder predecessor of a node in BST is:

- (A) max of left subtree (B) min of left subtree (C) max of right subtree (D) min of right subtree

**Answer:** A. Inorder predecessor = maximum element in left subtree.

**A15** [GATE 2019, 2 marks, Red-Black Tree] Which of the following is NOT a valid Red-Black tree property?

- (A) Root is black (B) Red node cannot have red child (C) All leaves are black (D) Every internal node has exactly 2 children

**Answer:** D. Red-Black trees don't require every internal node to have exactly 2 children.

**A16** [GATE 2022, 2 marks, Trees] The height of a binary tree with n nodes in the worst case is:

- (A) O(log n) (B) O(n) (C) O(n log n) (D) O(nÂ²)

**Answer:** B. Skewed tree: height = nâˆ’1 = O(n).

**A17** [GATE 2016, 2 marks, Trees] The number of leaf nodes in a complete binary tree with n nodes is:

- (A) âŒŠn/2âŒ‹ (B) âŒˆn/2âŒ‰ (C) nâˆ’1 (D) logâ‚‚(n+1)

**Answer:** B. Leaves = âŒˆn/2âŒ‰ for complete binary tree.

### Heaps

**A18** [GATE 2015, 2 marks, Heaps] In a min-heap with n elements, the 7th smallest element can be found in:

- (A) O(1) (B) O(log n) (C) O(n) (D) O(n log n)

**Answer:** A. The 7th smallest is at one of the first 7 positions (depth â‰¤ 2). Extract min 7 times â†’ O(7 log n) but the question asks about finding â€” the element is guaranteed within first 7 positions.

**A19** [GATE 2017, 2 marks, Heaps] Array [12, 10, 15, 8, 9, 14, 13, 6, 7]. Is this a max-heap?

- (A) Yes (B) No, violates at index 1 (C) No, violates at index 2 (D) No, violates at index 3

**Answer:** B. Index 1 (value 10): children at 3 (15) > 10. Violation.

**A20** [GATE 2020, 2 marks, Heap Sort] Which of the following is true about Heap Sort?

- (A) Stable and in-place (B) Not stable but in-place (C) Stable but not in-place (D) Neither stable nor in-place

**Answer:** B. Heap sort is in-place but not stable.

### Graphs

**A21** [GATE 2015, 2 marks, BFS/DFS] BFS of an undirected graph with V vertices and E edges has complexity:

- (A) O(VÂ²) (B) O(E log V) (C) O(V + E) (D) O(VE)

**Answer:** C. BFS using adjacency list is O(V + E).

**A22** [GATE 2016, 2 marks, Topological Sort] Which of the following is true for a DAG with topological sort?

- (A) At least one vertex has indegree 0 (B) Every DAG has unique topological sort
- (C) All edges go from lower to higher order (D) Both A and C

**Answer:** D. Every DAG has at least one source (indegree 0). Topological order ensures all edges go forward.

**A23** [GATE 2017, 2 marks, Dijkstra] Dijkstra's algorithm fails when:

- (A) Graph has negative weight edges (B) Graph has cycles
- (C) Graph is unweighted (D) Graph is directed

**Answer:** A. Dijkstra fails with negative weight edges (may not maintain optimal substructure).

**A24** [GATE 2018, 2 marks, Kruskal] Kruskal's algorithm finds MST in:

- (A) O(VÂ²) (B) O(E log V) (C) O(V log E) (D) O(VE)

**Answer:** B. Sorting edges O(E log E) = O(E log V) plus DSU operations O(EÂ·Î±(V)).

**A25** [GATE 2019, 2 marks, Floyd-Warshall] Floyd-Warshall all-pairs shortest path complexity:

- (A) O(VÂ²) (B) O(VÂ³) (C) O(VE) (D) O(E log V)

**Answer:** B. Three nested loops â†’ O(VÂ³).

**A26** [GATE 2021, 2 marks, Bellman-Ford] Bellman-Ford for V vertices, E edges. Number of relaxations:

- (A) VÃ—E (B) (Vâˆ’1)Ã—E (C) VÂ² (D) VEÂ²

**Answer:** B. Vâˆ’1 iterations, each relaxing all E edges: (Vâˆ’1)Â·E.

**A27** [GATE 2022, 1 mark, SCC] Number of strongly connected components in a DAG with V vertices:

- (A) 1 (B) V (C) â‰¤ V (D) depends on edges

**Answer:** B. Every vertex in a DAG is its own SCC (no cycles). So = V.

**A28** [GATE 2014, 2 marks, Prim] Prim's algorithm with adjacency matrix has complexity:

- (A) O(VÂ²) (B) O(E log V) (C) O(V log V) (D) O(VE)

**Answer:** A. With adjacency matrix, each extract-min scans V vertices â†’ O(VÂ²).

### Sorting

**A29** [GATE 2015, 1 mark, Sorting] Which sorting algorithm has best-case O(n)?

- (A) Merge sort (B) Heap sort (C) Quick sort (D) Insertion sort

**Answer:** D. Insertion sort is adaptive â€” O(n) when input is already sorted.

**A30** [GATE 2016, 2 marks, Sorting] Which of the following is O(n log n) in worst case?

- (A) Quick sort (B) Insertion sort (C) Merge sort (D) Selection sort

**Answer:** C. Quick sort worst is O(nÂ²). Merge sort is always O(n log n).

**A31** [GATE 2017, 2 marks, Sorting] Number of swaps in selection sort for array descending [5,4,3,2,1] sorted ascending:

- (A) 2 (B) 3 (C) 4 (D) 5

**Answer:** C. nâˆ’1 = 4 swaps (each selects min and swaps to correct position).

**A32** [GATE 2018, 2 marks, Counting Sort] Counting sort complexity is O(n + k). The value k represents:

- (A) Number of distinct keys (B) Range of input values
- (C) Number of elements (D) Number of passes

**Answer:** B. k is the range of input values (max âˆ’ min + 1).

**A33** [GATE 2019, 2 marks, Sorting Stability] Which of these is NOT stable?

- (A) Bubble sort (B) Insertion sort (C) Merge sort (D) Quick sort

**Answer:** D. Quick sort is not stable. Bubble, Insertion, Merge are stable.

**A34** [GATE 2020, 2 marks, Radix Sort] Radix sort uses which sort internally for each digit pass?

- (A) Quick sort (B) Heap sort (C) Counting sort (D) Insertion sort

**Answer:** C. Counting sort is the typical stable sort used for each digit pass in Radix sort.

**A35** [GATE 2021, 2 marks, Quick Sort] Worst-case time for Quick sort is O(nÂ²). Which pivot choice causes this for sorted input?

- (A) First element (B) Random element (C) Median-of-three (D) Last element

**Answer:** A or D (for L-R ordered). Both first and last pivot cause O(nÂ²) on sorted arrays for Lomuto partition.

### Searching & Hashing

**A36** [GATE 2015, 2 marks, Binary Search] Binary search on a sorted array of n elements. Worst case comparisons:

- (A) n (B) log n (C) n/2 (D) nÂ²

**Answer:** B. Î˜(log n) comparisons.

**A37** [GATE 2016, 2 marks, Hashing] Hash table size = 10, h(k) = k mod 10. Insert keys 12, 22, 32, 42, 52 using linear probing. How many collisions?

- (A) 2 (B) 3 (C) 4 (D) 5

**Answer:** C. 12 â†’ slot 2. 22 â†’ slot 2 (collision) â†’ slot 3. 32 â†’ slot 2 (collision) â†’ slot 3 (collision) â†’ slot 4. 42 â†’ ... â†’ slot 5. 52 â†’ ... â†’ slot 6. Total collisions = 4.

**A38** [GATE 2018, 2 marks, Hashing] Load factor Î± = 0.75. Expected probes in successful search with linear probing:

- (A) Â½(1 + 1/(1âˆ’Î±)) (B) Â½(1 + 1/(1âˆ’Î±)Â²) (C) âˆ’ln(1âˆ’Î±)/Î± (D) 1/(1âˆ’Î±)

**Answer:** A. For linear probing, successful search â‰ˆ Â½(1 + 1/(1âˆ’Î±)). With Î± = 0.75: â‰ˆ 2.5 probes.

**A39** [GATE 2020, 2 marks, Hashing] Double hashing: h(k) = k mod 11, hâ‚‚(k) = 1 + (k mod 7). Probe sequence for key 38:

- (A) 5, 9, 2, ... (B) 5, 8, 0, ... (C) 5, 10, 4, ... (D) 5, 1, 8, ...

**Answer:** C. h(38) = 38 mod 11 = 5. hâ‚‚(38) = 1 + (38 mod 7) = 1 + 3 = 4. Probe: 5, 9, 2, ...

### Complexity Analysis

**A40** [GATE 2015, 2 marks, Recurrence] T(n) = 2T(n/2) + n. T(1) = 1. T(n) = ?

- (A) Î˜(n) (B) Î˜(n log n) (C) Î˜(nÂ²) (D) Î˜(log n)

**Answer:** B. Master theorem case 2: a=2, b=2, log_b a = 1, f(n)=n = nÂ¹Â·logâ° n â†’ T(n) = Î˜(n log n).

**A41** [GATE 2016, 1 mark, Recurrence] T(n) = T(nâˆ’1) + n. T(1) = 1. T(n) = ?

- (A) Î˜(n) (B) Î˜(nÂ²) (C) Î˜(n log n) (D) Î˜(2â¿)

**Answer:** B. Summation: 1 + 2 + 3 + ... + n = n(n+1)/2 = Î˜(nÂ²).

**A42** [GATE 2017, 2 marks, Complexity] f(n) = nÂ², g(n) = n^{logâ‚‚7}. Which is true?

- (A) f = O(g) (B) f = Î©(g) (C) f = Î˜(g) (D) None

**Answer:** A. n^{logâ‚‚7} â‰ˆ n^{2.81}. nÂ² = O(n^{2.81}).

**A43** [GATE 2018, 2 marks, Complexity] Which notation expresses tightest upper bound?

- (A) O (B) Î© (C) Î˜ (D) o

**Answer:** A. O gives upper bound. Î˜ gives tight bound but O is the standard for worst-case complexity.

**A44** [GATE 2020, 2 marks, Recurrence] T(n) = 3T(n/4) + n log n. Solve:

- (A) Î˜(n^{logâ‚„3}) (B) Î˜(n log n) (C) Î˜(nÂ² log n) (D) Î˜(n^{logâ‚ƒ4})

**Answer:** B. a=3, b=4, log_b a = logâ‚„3 â‰ˆ 0.792. f(n) = n log n = Î©(n^{0.792+Îµ}). Check regularity: aÂ·f(n/b) = 3Â·(n/4)Â·log(n/4) = 0.75Â·nÂ·log(n/4) â‰¤ cÂ·nÂ·log n for c < 1. So Case 3: Î˜(n log n).

**A45** [GATE 2021, 2 marks, Complexity] Let f(n) = O(g(n)). Then log f(n) = O(log g(n)) if:

- (A) f(n) â‰¥ 1 and g(n) â‰¥ 2 (B) f(n) â‰¥ 0 and g(n) â‰¥ 1
- (C) f(n) â‰¤ 0 and g(n) â‰¤ 1 (D) Always

**Answer:** A. Need f(n) â‰¥ 1 and g(n) â‰¥ 2 for log to be defined and monotonic.

### Mixed

**A46** [GATE 2022, 2 marks, Trees] A strictly binary tree (every node has 0 or 2 children) with n leaves has how many internal nodes?

- (A) nâˆ’1 (B) n (C) n+1 (D) 2n

**Answer:** A. For a full binary tree: I = L âˆ’ 1 = n âˆ’ 1.

**A47** [GATE 2023, 2 marks, Graphs] In an undirected graph G with n vertices, if every vertex has degree at least Î´, the graph is connected if:

- (A) Î´ â‰¥ n/2 (B) Î´ â‰¥ (nâˆ’1)/2 (C) Î´ â‰¥ nâˆ’1 (D) Î´ â‰¥ 2

**Answer:** B. Dirac's theorem: if Î´ â‰¥ n/2, graph is Hamiltonian (stronger). For connectivity: Î´ â‰¥ (nâˆ’1)/2.

**A48** [GATE 2023, 1 mark, Sorting] Which of the following sorts is NOT in-place?

- (A) Insertion sort (B) Selection sort (C) Merge sort (D) Quick sort

**Answer:** C. Merge sort requires O(n) auxiliary space. All others are in-place.

**A49** [GATE 2024, 2 marks, Hashing] A hash table of size 10 uses double hashing: hâ‚(k) = k mod 10, hâ‚‚(k) = 7 âˆ’ (k mod 7). Insert keys 89, 18, 49, 58, 79. After all insertions, what is the load factor?

- (A) 0.3 (B) 0.5 (C) 0.7 (D) 0.9

**Answer:** B. 5 elements / 10 slots = 0.5.

**A50** [GATE 2024, 2 marks, Complexity] T(n) = 2T(âˆšn) + log n. Solve:

- (A) Î˜(log n) (B) Î˜(logÂ² n) (C) Î˜(âˆšn) (D) Î˜(log nÂ·log log n)

**Answer:** B. Let n = 2áµ. T(2áµ) = 2T(2^{m/2}) + m. S(m) = T(2áµ). S(m) = 2S(m/2) + m â†’ Î˜(m log m) = Î˜(log nÂ·log log n). Wait: Master theorem: a=2, b=2, S(m) = 2S(m/2) + m â†’ Case 2: Î˜(m log m) = Î˜(log nÂ·log log n).

**A51** [GATE 2025, 2 marks, Graph] Which graph algorithm uses a stack as its primary data structure?

- (A) BFS (B) DFS (C) Dijkstra (D) Prim

**Answer:** B. DFS uses stack (recursion or explicit). BFS uses queue.

**A52** [GATE 2025, 2 marks, Sorting] The number of comparisons in merge sort for merging two sorted lists of size m and n is:

- (A) m + n âˆ’ 1 (B) m + n (C) max(m, n) (D) min(m, n)

**Answer:** A. In worst case, m + n âˆ’ 1 comparisons until one list exhausts.

**A53** [GATE 2025, 1 mark, Trees] Which traversal gives non-decreasing order in BST?

- (A) Preorder (B) Inorder (C) Postorder (D) Level-order

**Answer:** B. Inorder traversal of BST yields elements in sorted (non-decreasing) order.

**A54** [GATE 2025, 2 marks, Heaps] Building a max-heap from an array of n elements takes:

- (A) O(n) (B) O(n log n) (C) O(log n) (D) O(nÂ²)

**Answer:** A. buildHeap() runs in O(n) time (tight bound).

---

## 12. GATE Traps: Detailed Analysis

### Trap 1: Complexity of Recursive Functions

**Common errors:**
- Applying Master theorem incorrectly (wrong a, b values)
- Forgetting that T(n) = T(nâˆ’1) + ... is NOT Master theorem solvable
- Misidentifying f(n) for divide-and-conquer recurrences

**Examples:**
| Recurrence | Trap | Correct |
|------------|------|---------|
| T(n) = 2T(n/2) + n | Think O(n) | O(n log n) â€” Master case 2 |
| T(n) = T(n/2) + n | Think O(log n) | O(n) â€” Master case 3 |
| T(n) = 2T(âˆšn) + log n | Try n directly | Let n=2áµ, get Î˜(log nÂ·log log n) |
| T(n) = 3T(n/3) + n/2 | Think O(n) | O(n log n) â€” Master case 2 |
| T(n) = T(nâˆ’1) + 1/n | Think O(n) | O(log n) â€” Harmonic series |

### Trap 2: BST Deletion

- **Two-child deletion:** Replace with inorder successor (or predecessor). Do NOT replace with just any child.
- **Inorder successor:** Minimum of right subtree (leftmost node).
- **Effect on structure:** After deletion, BST property must be maintained.
- **Complexity:** O(h) where h = height.

### Trap 3: Graph Algorithm Correctness

| Algorithm | Fails When | Why |
|-----------|-----------|-----|
| Dijkstra | Negative edges | Greedy: once a node is finalized, distance won't change |
| BFS for shortest path | Weighted graph | BFS assumes all edges weight 1 |
| Kruskal's/Prim's | Directed graph | MST definitions apply to undirected graphs |
| Bellman-Ford | Negative cycles | No shortest path exists (can detect, not compute) |
| Floyd-Warshall | Negative cycles | Distance becomes âˆ’âˆž |

### Trap 4: Hash Table Probing Sequences

- **Linear probing:** Primary clustering â†’ long runs of occupied slots
- **Quadratic probing:** Secondary clustering â†’ keys with same initial hash follow same probe sequence
- **Double hashing:** Best â€” two independent hash functions
- **GATE trick:** Calculate probe sequence for a given key; determine if insertion succeeds

**Common question pattern:** "Key x cannot be inserted due to infinite loop" â€” check if probe sequence covers all slots (depends on m being prime for quadratic probing).

### Trap 5: Sorting Stability and In-Place

| Statement | Truth | Reason |
|-----------|-------|--------|
| Quick sort is stable | FALSE | Partition swaps break relative order |
| Selection sort is stable | FALSE | Swapping non-adjacent elements breaks order |
| Merge sort is stable | TRUE | Merge preserves left-array-first tiebreak |
| Counting sort is stable | TRUE | Reverse traversal preserves order |
| Heap sort is in-place | TRUE | Sorts within array, only O(1) extra space |
| Merge sort is in-place | FALSE | Requires O(n) auxiliary array |

### Trap 6: MST Edge Weights

- **Unique MST:** If all edge weights are distinct â†’ MST is unique
- **Non-unique MST:** If edges have equal weights â†’ multiple MSTs possible
- **Lightest edge:** Not necessarily in every MST (if it creates a cycle with lighter alternatives)
- **Heaviest edge in a cycle:** Never in any MST (cycle property)

### Trap 7: Asymptotic Growth Subtleties

- n^{log n} vs 2^{âˆšn}: Take log of both: (log n)Â² vs âˆšnÂ·log 2. Since (log n)Â² = o(âˆšn), we get n^{log n} = o(2^{âˆšn})
- (log n)^{log n} vs n/log n: Take log: log log n Â· log n vs log n âˆ’ log log n. First = Î˜(log nÂ·log log n), second = Î˜(log n). So (log n)^{log n} = Ï‰(n/log n)
- log(n!) = Î˜(n log n) via Stirling's approximation
- n^{1/n} â†’ 1 as n â†’ âˆž

---

## 13. Complexity Cheat Sheet

### 13.1 Common Algorithm Complexities

| Algorithm | Time | Space |
|-----------|------|-------|
| Binary Search | O(log n) | O(1) |
| Quick Select (avg) | O(n) | O(1) |
| Median of Medians | O(n) | O(log n) |
| Tower of Hanoi | O(2â¿) | O(n) |
| Fibonacci (naive) | O(Ï†â¿) | O(n) |
| Fibonacci (DP) | O(n) | O(1) |
| Matrix Multiplication (naive) | O(nÂ³) | O(nÂ²) |
| Strassen's MM | O(n^{2.81}) | O(nÂ²) |
| Dijkstra (binary heap) | O((V+E) log V) | O(V) |
| Bellman-Ford | O(VE) | O(V) |
| Floyd-Warshall | O(VÂ³) | O(VÂ²) |
| Prim's (adj matrix) | O(VÂ²) | O(V) |
| Kruskal's | O(E log V) | O(V) |
| Topological Sort | O(V+E) | O(V) |
| Kosaraju's SCC | O(V+E) | O(V) |
| Tarjan's SCC | O(V+E) | O(V) |
| Knuth-Morris-Pratt | O(n+m) | O(m) |
| Rabin-Karp | O(n+m) avg | O(1) |
| BFS/DFS | O(V+E) | O(V) |

### 13.2 Data Structure Complexities

| Data Structure | Access | Search | Insert | Delete | Space |
|----------------|--------|--------|--------|--------|-------|
| Array | O(1) | O(n) | O(n) | O(n) | O(n) |
| Stack | O(n) | O(n) | O(1) | O(1) | O(n) |
| Queue | O(n) | O(n) | O(1) | O(1) | O(n) |
| Singly Linked List | O(n) | O(n) | O(1)* | O(1)* | O(n) |
| Doubly Linked List | O(n) | O(n) | O(1) | O(1) | O(n) |
| Binary Search Tree (avg) | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |
| Binary Search Tree (worst) | O(n) | O(n) | O(n) | O(n) | O(n) |
| AVL / Red-Black Tree | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |
| B-Tree | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |
| B+ Tree | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |
| Hash Table (avg) | N/A | O(1) | O(1) | O(1) | O(n) |
| Hash Table (worst) | N/A | O(n) | O(n) | O(n) | O(n) |
| Min-Heap | O(1) (min) | O(n) | O(log n) | O(log n) | O(n) |
| Trie | O(|s|) | O(|s|) | O(|s|) | O(|s|) | O(Î£|sáµ¢|) |

*At head (given pointer). Tail insert in singly linked = O(n).

---

## 14. Recurrence Relation Quick Reference

### 14.1 Master Theorem â€” Detailed Cases

Given T(n) = aÂ·T(n/b) + f(n), compare f(n) with n^{log_b a}:

**Case 1 (Leaf-heavy):** f(n) = O(n^{log_b a âˆ’ Îµ})
- T(n) = Î˜(n^{log_b a})
- Example: T(n) = 2T(n/2) + 1 â†’ Î˜(n)

**Case 2 (Equal):** f(n) = Î˜(n^{log_b a}Â·log^k n)
- T(n) = Î˜(n^{log_b a}Â·log^{k+1} n)
- Example: T(n) = 2T(n/2) + n â†’ Î˜(n log n)
- Example: T(n) = 2T(n/2) + n log n â†’ Î˜(n logÂ² n)

**Case 3 (Root-heavy):** f(n) = Î©(n^{log_b a + Îµ}) + regularity
- T(n) = Î˜(f(n))
- Example: T(n) = T(n/2) + n â†’ Î˜(n)

### 14.2 Extended Master Theorem

For T(n) = Î£_{i=1}^{k} a_iÂ·T(n/b_i) + f(n):
- Find p such that Î£ a_i / b_i^p = 1
- T(n) = Î˜(n^pÂ·(1 + âˆ«â‚â¿ f(u)/u^{p+1} du))

### 14.3 Akra-Bazzi Method

For T(n) = Î£ a_iÂ·T(b_iÂ·n + h_i(n)) + g(n):
1. Find p: Î£ a_iÂ·b_i^p = 1
2. T(n) = Î˜(n^pÂ·(1 + âˆ«â‚â¿ g(u)/u^{p+1} du))

### 14.4 Special Recurrences

| Recurrence | Method | Result |
|------------|--------|--------|
| T(n) = T(nâˆ’1) + n | Unrolling | Î˜(nÂ²) |
| T(n) = T(nâˆ’1) + 1 | Unrolling | Î˜(n) |
| T(n) = T(nâˆ’1) + log n | Unrolling | Î˜(n log n) |
| T(n) = T(nâˆ’2) + 1 | Unrolling | Î˜(n) |
| T(n) = 2T(nâˆ’1) + 1 | Unrolling | Î˜(2â¿) |
| T(n) = T(âˆšn) + 1 | Change var | Î˜(log log n) |
| T(n) = 2T(âˆšn) + log n | Change var | Î˜(log nÂ·log log n) |
| T(n) = T(n/2) + T(n/2) + 1 | Master | Î˜(n) |
| T(n) = 3T(n/2) + nÂ² | Master case 3 | Î˜(nÂ²) |
| T(n) = 4T(n/2) + nÂ² | Master case 2 | Î˜(nÂ² log n) |

### 14.5 Generating Functions for Recurrences

Fibonacci: F(n) = F(nâˆ’1) + F(nâˆ’2)
- Characteristic: xÂ² âˆ’ x âˆ’ 1 = 0
- Roots: Ï† = (1 + âˆš5)/2, Ïˆ = (1 âˆ’ âˆš5)/2
- Closed form: F(n) = (Ï†â¿ âˆ’ Ïˆâ¿)/âˆš5 â†’ exponential growth O(Ï†â¿)

---

## 15. GATE Exam Strategy for DSA

**Priority order by weight:**
1. **Graphs** (6â€“10 marks) â€” BFS/DFS, MST algorithms, shortest paths, topological sort
2. **Trees** (5â€“8 marks) â€” BST operations, AVL rotations, B/B+ tree properties, traversals
3. **Sorting** (3â€“5 marks) â€” Complexity, stability, in-place, non-comparison sorts
4. **Complexity Analysis** (3â€“5 marks) â€” Master theorem, recurrence solving, asymptotic notations
5. **Hashing** (2â€“4 marks) â€” Probing sequences, load factor, rehashing
6. **Stacks & Queues** (2â€“4 marks) â€” Expression evaluation, postfix/prefix/infix conversion
7. **Heaps** (2â€“4 marks) â€” Heapify, heap sort, priority queue
8. **Arrays** (2â€“4 marks) â€” Address calculation, sparse matrices
9. **Linked Lists** (1â€“3 marks) â€” Operations, cycle detection
10. **Searching** (1â€“2 marks) â€” Binary search, interpolation search

**Key formulas to memorize:**
- Catalan number: Câ‚™ = (2n)!/((n+1)!n!)
- Sum of first n: n(n+1)/2
- Sum of squares: n(n+1)(2n+1)/6
- Sum of cubes: [n(n+1)/2]Â²
- log a^b = bÂ·log a
- log_a b = log_c b / log_c a
- a^{log_b c} = c^{log_b a}

**Time management:**
- 1-mark questions: ~2 minutes
- 2-mark questions: ~4 minutes
- Skip after 5 minutes of no progress
- Numerical answer type (NAT): double-check calculation

---

*End of Chapter 10 â€” Data Structures & Algorithms for GATE CS. Target: 1200â€“2000 lines covering all GATE-relevant DSA topics with 50+ PYQs (2010â€“2025), complexity cheat sheet, recurrence reference, and trap analysis.*
