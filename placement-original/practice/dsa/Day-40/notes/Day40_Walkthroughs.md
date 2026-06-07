# Day 40 — Selected Code Walkthroughs (10)

This file contains detailed, concise walkthroughs for 10 representative graph problems from Day 40. Each walkthrough covers: problem statement, core idea, step-by-step algorithm, complexity, edge cases, and a short code hint (Java).

---

## 1. Dijkstra (Single-Source Shortest Path)

**Problem:** Given a weighted graph with non-negative weights, find shortest distances from source s to every node.

**Core idea:** Greedy relaxation using a min-priority queue to always finalize the next closest vertex.

**Steps:**
1. Initialize dist[s]=0, others INF. Use min-heap of (vertex, dist).
2. Extract min (u, d). If d>dist[u], skip stale entry.
3. Relax all edges (u->v, w): if dist[u]+w < dist[v], update and push (v, dist[v]) in queue.
4. Repeat until queue empty.

**Complexity:** O((V+E) log V) with binary heap.

**Edge cases:** Disconnected nodes (remain INF), multiple pushes per vertex (lazy deletion), zero-weight edges.

**Code hint:** Use int[] dist and PriorityQueue<Node> with Node.compareTo based on distance.

---

## 2. Bellman-Ford (Negative Weights & Cycle Detection)

**Problem:** Single-source shortest path in graphs that may have negative weights; detect negative cycles reachable from source.

**Core idea:** Repeatedly relax all edges V-1 times; another relaxation detects negative cycles.

**Steps:**
1. Initialize dist[src]=0, rest INF.
2. For i from 1..V-1, for every edge (u,v,w): if dist[u]!=INF && dist[u]+w<dist[v], set dist[v]=dist[u]+w.
3. After V-1 relaxations, run one more loop: if any edge can relax, negative cycle exists.

**Complexity:** O(VE).

**Edge cases:** Unreachable nodes (INF), negative cycles report (return a flag or null).

**Code hint:** Store edges in list for efficient iteration.

---

## 3. Floyd-Warshall (All-Pairs Shortest Path)

**Problem:** Compute shortest distances between all pairs of vertices.

**Core idea:** DP using intermediate vertices: dist[i][j] = min(dist[i][j], dist[i][k]+dist[k][j]) for each k.

**Steps:**
1. Initialize dist matrix with edge weights and INF for missing edges; dist[i][i]=0.
2. For k in 0..V-1: for i in 0..V-1: for j in 0..V-1: relax via k.
3. Detect negative cycle if dist[i][i]<0 for any i.

**Complexity:** O(V^3).

**Edge cases:** Large V (use only for V up to ~400), negative cycles.

**Code hint:** Keep an auxiliary next[i][j] for path reconstruction.

---

## 4. Kruskal (MST via Union-Find)

**Problem:** Find minimum spanning tree in an undirected weighted graph.

**Core idea:** Sort edges by weight, add smallest edge if it connects two different components (no cycles). Use union-find to test connectivity.

**Steps:**
1. Sort edges ascending by weight.
2. Initialize UnionFind UF(V).
3. For each edge (u,v,w): if UF.find(u)!=UF.find(v), union and add edge to MST.
4. Stop when MST has V-1 edges.

**Complexity:** O(E log E + E α(V)).

**Edge cases:** Disconnected graph (MST impossible), multiple equal-weight edges.

**Code hint:** Use public UnionFind with path compression + union by rank.

---

## 5. Prim (MST via Priority Queue)

**Problem:** Same as Kruskal; alternative algorithm.

**Core idea:** Grow MST from a starting vertex, repeatedly pick the minimal outgoing edge to an unvisited vertex using a min-heap.

**Steps:**
1. Mark start (e.g., 0) as in MST; push its edges to pq.
2. While pq not empty and MST size < V-1: pop edge (u,v,w), if v not in MST add it and push v's outgoing edges.

**Complexity:** O((V+E) log V).

**Edge cases:** Need adjacency list; for dense graphs, O(V^2) array-based Prim can be better.

**Code hint:** Maintain boolean[] inMST to ignore edges to already-included vertices.

---

## 6. Tarjan (SCC via Low-Link)

**Problem:** Find all strongly connected components in a directed graph.

**Core idea:** Single DFS pass; use ids (discovery times) and low-link values; nodes on current stack form an SCC when id==low.

**Steps:**
1. Run DFS; assign ids[u]=low[u]=time++; push u onto stack.
2. For each neighbor v: if unvisited, DFS(v) then low[u]=min(low[u], low[v]); else if onStack[v], low[u]=min(low[u], id[v]).
3. If id[u]==low[u], pop stack until u — that's an SCC.

**Complexity:** O(V+E).

**Edge cases:** Single node SCCs, large recursion depth (convert to iterative if needed).

**Code hint:** Keep onStack boolean[] to check active nodes.

---

## 7. Topological Sort (Kahn & DFS)

**Problem:** Return ordering of DAG vertices so that u->v implies u appears before v.

**Core idea:** Kahn: use in-degree queue; DFS: postorder reverse.

**Kahn Steps:**
1. Compute in-degree[]; enqueue vertices with 0 in-degree.
2. While queue not empty: pop u, append to order; for v in adj[u]: in-degree[v]--, if 0 enqueue v.
3. If order size != V -> cycle exists.

**Complexity:** O(V+E).

**Edge cases:** Graph with cycle -> return empty.

**Code hint:** Use int[] inDegree and LinkedList or ArrayDeque for queue.

---

## 8. Dinic (Max Flow — Overview)

**Problem:** Compute maximum flow in a capacitated directed graph.

**Core idea:** Repeatedly build level graph with BFS, then find blocking flows with DFS (send flow until saturation). Each phase increases shortest augmenting path length.

**Steps:**
1. Build level graph via BFS from source on edges with residual capacity > 0.
2. DFS to push flow to sink respecting levels and respecting residual capacities; repeat until no more blocking flow.
3. Rebuild level graph and repeat.

**Complexity:** Typical O(E sqrt(V)) or better depending on structure.

**Edge cases:** Multiple sources/sinks (transform to single), large capacities (use long), parallel edges.

**Code hint:** Use adjacency lists with Edge objects that store residual edges (rev index).

---

## 9. Union-Find Applications (Dynamic Connectivity)

**Problem:** Support union operations and connectivity queries efficiently.

**Core idea:** Maintain parent[] and rank[]; find with path compression yields amortized inverse-Ackermann complexity.

**Typical uses:** Kruskal MST, incremental connectivity, counting components, cycle detection in undirected graphs.

**Code hint:** Implement public int find(int x) with path compression and public boolean union(int x,int y).

---

## 10. Reconstruct Itinerary (Eulerian Path — Hierholzer)

**Problem:** Given tickets (directed edges), build itinerary using all tickets exactly once (Eulerian path) choosing lexicographically smallest itinerary when multiple choices exist.

**Core idea:** Use Hierholzer's algorithm: recursively traverse edges until dead-end, then backtrack to stitch cycles. For lexicographic order, use priority queues per adjacency list.

**Steps:**
1. Build adjacency map of priority queues.
2. Run DFS (or iterative stack): while node has outgoing edges, push next, else append node to result (post-order), then reverse result.

**Complexity:** O(E log E) due to PQ operations, or O(E + V) with sorted lists depending on implementation.

**Edge cases:** Multiple identical tickets, disconnected graph (invalid), ensure usage of all tickets.

**Code hint:** Use Map<String, PriorityQueue<String>> and post-order insertion at front or reversing at end.

---

**Next:** If you'd like, I can expand any of these walkthroughs with line-by-line code excerpts and small illustrative examples (recommended for 5 highest-priority topics).