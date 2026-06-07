# Day 40 — Graph Algorithms: Interview Q&A

This document contains 80+ interview-style questions on advanced graph algorithms, with concise, focused answers you can use for study or interviews. Each entry includes the key idea, time/space complexity, typical variants, and quick notes or code hints.

---

1) Q: What is a graph? Describe representations.
A: A graph G = (V, E) is a set of vertices V and edges E. Representations: adjacency list (space O(V + E), good for sparse graphs), adjacency matrix (O(V^2), good for dense graphs), edge list (useful for Kruskal / Bellman-Ford). Choose representation based on algorithm and graph density.

2) Q: What is BFS and when to use it?
A: Breadth-First Search explores levels outward from a source. Time O(V + E), space O(V). Use for shortest path in unweighted graphs, checking connectivity, computing distances (in hops), level-order traversal.

3) Q: What is DFS and when to use it?
A: Depth-First Search explores deep then backtracks. Time O(V + E), space O(V) (stack). Useful for topological sort, SCC (Kosaraju/Tarjan), cycle detection, path finding, bridge/articulation point detection.

4) Q: Dijkstra's Algorithm — key idea and complexity.
A: Use a priority queue to greedily extract nearest vertex and relax edges. Time O((V + E) log V) with binary heap; O(E + V log V) with optimized heaps. Cannot handle negative weights.

5) Q: How to reconstruct shortest path with Dijkstra?
A: Maintain parent array when relaxing edges: parent[v] = u. After finish, backtrack from dest to src and reverse path. Handle unreachable nodes with sentinel.

6) Q: Bellman-Ford — when to use and complexity.
A: Handles negative edge weights and detects negative cycles. Relax all E edges V-1 times. Time O(VE), space O(V). Returns null or flag when negative cycle detected.

7) Q: Floyd-Warshall — what does it compute?
A: All-pairs shortest path via DP with intermediate vertices. Time O(V^3), space O(V^2). Can reconstruct paths by storing next[i][j]. Detects negative cycles when dist[i][i] < 0.

8) Q: What is a Minimum Spanning Tree (MST)?
A: A subset of edges connecting all vertices with minimum total weight and no cycles. Two classical algorithms: Kruskal (sort edges + union-find) and Prim (grow MST using min-heap).

9) Q: Kruskal's Algorithm complexity and union-find role.
A: Sort edges O(E log E) then union operations O(E α(V)) amortized. Union-Find supports fast union/find with path compression and union by rank.

10) Q: Prim's Algorithm complexity and variants.
A: Using binary heap: O((V + E) log V). Using adjacency matrix and simple arrays: O(V^2) — sometimes faster for dense graphs.

11) Q: What is topological sort?
A: Ordering of vertices in a DAG such that for every edge u->v, u appears before v. Methods: DFS postorder reverse or Kahn's algorithm (BFS using in-degree). Time O(V + E).

12) Q: How to detect a cycle in a directed graph?
A: Use DFS with recursion stack (visited states: unvisited/visiting/visited) or Kahn's algorithm (if not all nodes consumed -> cycle).

13) Q: Strongly Connected Components (SCC) — Kosaraju vs Tarjan.
A: Kosaraju: two-pass DFS (first build finish order, then DFS on transpose) O(V + E). Tarjan: single DFS using low-link values and stack to identify SCCs, also O(V + E).

14) Q: Bridges and articulation points — detection approach.
A: Use DFS and low-link values. An edge (u,v) is a bridge if ids[u] < low[v]. Articulation point conditions depend on root degree or child's low-links.

15) Q: Eulerian path vs circuit — necessary conditions.
A: For directed: Eulerian circuit if in-degree == out-degree for all vertices and graph is strongly connected (ignoring zero-degree vertices) when considered as undirected. Eulerian path if at most one vertex has out-degree = in-degree +1 and at most one has in-degree = out-degree +1.

16) Q: What is Union-Find and complexity of operations?
A: Disjoint set union with path compression and union by rank. Find amortized nearly O(α(N)), union similar. Good for Kruskal, dynamic connectivity.

17) Q: How to find connected components in undirected graph?
A: BFS/DFS on unvisited nodes, or union-find union edges and count unique parents.

18) Q: How to detect a negative cycle reachable from source?
A: Run Bellman-Ford; after V-1 relaxations, if any edge u->v can still relax dist[v] then there's a negative cycle.

19) Q: When to use adjacency matrix vs adjacency list?
A: Use adjacency matrix for dense graphs (E ~ V^2) or for algorithms needing O(1) edge checks (e.g., Floyd-Warshall), adjacency list for sparse graphs (E ~ V) to save memory.

20) Q: How to implement multi-source BFS?
A: Initialize queue with all sources and distances 0; perform standard BFS to propagate min distances.

21) Q: What is A* search and when to use it?
A: Heuristic-guided shortest path. Use when you have admissible heuristic h(n) <= true shortest distance. A* reduces search space for spatial path planning.

22) Q: How to implement bidirectional BFS/Dijkstra?
A: Run BFS/Dijkstra simultaneously from source and target; stop when frontiers meet. Effective in undirected graphs to reduce search.

23) Q: What are common heuristics for A* on grids?
A: Manhattan distance (L1) for 4-way grids, Euclidean for real coordinates, diagonal distance for 8-way movement.

24) Q: Describe Johnson's algorithm for all-pairs shortest paths.
A: Reweight edges using Bellman-Ford to remove negative weights, then run Dijkstra from each vertex. Time O(VE + V * (E log V)) — faster than Floyd-Warshall on sparse graphs.

25) Q: What is max flow / min cut? Name algorithms.
A: Max flow computes maximum st-flow given capacities. Algorithms: Edmonds-Karp (BFS augmenting paths O(V E^2)), Dinic (level graph + blocking flow O(E sqrt(V)) for unit graphs), Push-Relabel (good practical performance), ISAP, HL decomposition.

26) Q: How to model bipartite matching as max flow?
A: Create source connected to left nodes, edges between left-right with capacity 1, right nodes to sink with capacity 1. Max flow equals max matching.

27) Q: Edmonds-Karp complexity and improvement over Ford-Fulkerson.
A: Edmonds–Karp uses BFS to find shortest augmenting paths; complexity O(V E^2). It's a bounded version of Ford-Fulkerson with polynomial time.

28) Q: Dinic's algorithm — main idea and complexity.
A: Build level graph via BFS and find blocking flow via DFS. Time O(E sqrt(V)) for unit graphs, O(E V^(1/2)) in many cases; performs well in practice.

29) Q: Minimum cut — Karger's algorithm idea.
A: Randomly contract edges until two vertices remain; repeated runs yield min cut with high probability. Monte-Carlo approach; each run O(E).

30) Q: What is the Gomory-Hu tree?
A: Represents all-pairs min-cuts in undirected graphs with n-1 max-flow computations; yields a tree where min cut between any two vertices equals min edge on their path.

31) Q: How to detect bridges using DFS low-link values? (Short recipe)
A: DFS assigns discovery time id[u], compute low[u] = min(id[u], low[v] for children v, id[w] for back edges). Edge u-v is bridge if id[u] < low[v].

32) Q: Explain Tarjan's SCC algorithm briefly.
A: Single DFS tracking ids and low links, maintain stack of active nodes. When ids[u] == low[u], pop stack until u to get SCC. O(V + E).

33) Q: Name problems solvable by MST.
A: Minimum network design, clustering, Min cost to connect points, approximate Steiner tree, building roads/pipelines.

34) Q: How to implement Kruskal efficiently for large E?
A: Sort edges with efficient sort (O(E log E)) and union-find with path compression; memory-wise handle edges in streams if needed.

35) Q: What is the difference between articulation points and bridges?
A: Articulation point (vertex removal increases components), bridge (edge removal increases components). Both can be found with DFS low-link.

36) Q: How to topologically sort while detecting cycles?
A: Use Kahn's algorithm; if number of nodes produced < V, there's a cycle. Alternatively, DFS with three-state visited array and cycle detection by back edge.

37) Q: How to compute transitive closure?
A: Floyd-Warshall can compute reachability; or repeated BFS/DFS from each vertex O(V(V + E)). For boolean matrix, use Warshall's algorithm.

38) Q: Shortest path in DAG — method and complexity.
A: Topologically sort DAG then relax edges in topological order; O(V + E), works with negative weights since no cycles.

39) Q: What is the difference between shortest path tree and shortest path distances only?
A: Shortest path tree stores parent pointers yielding actual paths; distances only store minimal costs. Path reconstruction requires parent tracking during relaxations.

40) Q: How to detect if a directed graph is a DAG?
A: Use topological sort (Kahn) or DFS cycle detection — DAG if no cycles.

41) Q: How to find the number of connected components efficiently?
A: Use DFS/BFS to count components, or union-find after processing all edges then count distinct parents.

42) Q: How to compute number of paths between two nodes in DAG?
A: Use DP on topological order: dp[u] = sum(dp[parent]) with dp[src] = 1; total is dp[dst]. Watch for overflow.

43) Q: What is the transposition (transpose) of directed graph and its use?
A: Reverse direction of all edges. Used in Kosaraju's algorithm to identify SCCs by DFS on transpose in order of finish times.

44) Q: Describe Hierholzer's algorithm for Eulerian path.
A: Start at a vertex, take unused edges until return to vertex, splice cycles recursively to obtain Eulerian path. Works if graph meets Eulerian conditions.

45) Q: How to check if undirected graph has Eulerian circuit?
A: All vertices with non-zero degree belong to single connected component, and all vertices have even degree.

46) Q: What is the significance of in-degree array in Kahn's algorithm?
A: In-degree tracks prerequisites; vertices with in-degree 0 can be queued. Reducing in-degree identifies next eligible vertices.

47) Q: Multi-graph edges — issues for MST algorithms?
A: Multiple edges between same nodes require careful handling — Kruskal handles them fine if edges are included/sorted; ensure no duplicates cause cycles issues.

48) Q: How to find k-shortest paths?
A: Modified Dijkstra using priority queue storing (node, path index) and counting visits; Yen's algorithm builds k-shortest simple paths by perturbation of shortest path.

49) Q: What is the complexity of checking bipartiteness?
A: BFS/DFS coloring: O(V + E). Graph is bipartite if and only if no odd-length cycles.

50) Q: How to find shortest path in weighted grid with obstacles?
A: Use Dijkstra or A* (with admissible heuristic) treating grid cells as nodes and valid moves as edges.

51) Q: What is minimum mean cycle and how to detect it?
A: Minimum average weight cycle can be found using Karp's algorithm or via binary search checking for negative cycles after subtracting mid value.

52) Q: Describe difference between strongly connected and weakly connected (directed graphs).
A: Strongly connected: path between every pair respecting edge directions. Weakly connected: underlying undirected graph is connected.

53) Q: How to implement dynamic connectivity (online)?
A: Use union-find for incremental connectivity (only adds). For deletions, use dynamic trees or offline queries (divide-and-conquer) or fully dynamic data structures like link-cut trees.

54) Q: How to find articulation points (cut vertices)?
A: DFS with discovery times and low values; for root, if it has >1 child it's articulation; for others, if some child v has low[v] >= disc[u], u is articulation.

55) Q: What is PageRank and how is it computed on graphs?
A: Iterative algorithm where rank(v) = (1 - d)/N + d * sum(rank(u)/outdeg(u)). Use power iteration until convergence; sparse matrix multiply efficient implementation.

56) Q: How to perform graph traversal iteratively to avoid recursion stack?
A: Use explicit stack for DFS and queue for BFS. For DFS, push neighbors and simulate recursion; careful with ordering if consistent result required.

57) Q: Handling large graphs that don't fit memory — approaches?
A: External memory algorithms, streaming algorithms, graph partitioning, out-of-core frameworks (GraphChi), distributed processing (Pregel/Giraph/Spark GraphX).

58) Q: How to compute betweenness centrality? Complexity?
A: Brandes' algorithm computes betweenness centrality in O(VE) for unweighted graphs using BFS; for weighted graphs, O(VE + V^2 log V) using Dijkstra per source.

59) Q: What is the concept of edge contraction and where used?
A: Merge two vertices into one, combining incident edges; used in Karger's randomized min-cut and some graph simplifications.

60) Q: How to find all bridges in O(V + E)?
A: DFS with discovery times and low values — accumulate edges where low[v] > disc[u] (u-v is a bridge).

61) Q: How to find all articulation points in O(V + E)?
A: Similar low-link approach: mark u as articulation if root with multiple children or for some child v low[v] >= disc[u].

62) Q: How to detect if an undirected graph is a tree?
A: A connected undirected graph with V-1 edges is a tree; verify connectivity and edge count.

63) Q: What is the complexity of computing transitive closure with Floyd-Warshall?
A: O(V^3) time and O(V^2) space; for reachability use boolean operations.

64) Q: How do you find shortest path in weighted graph with negative edges but no negative cycles?
A: Use Bellman-Ford (single source) or Johnson's algorithm for all pairs (reweight + Dijkstra).

65) Q: Explain roadmap for solving "minimum number of edges to add to make graph strongly connected".
A: Condense graph to SCCs; build DAG of SCCs; count number of sources and sinks in DAG. Answer = max(number_of_sources, number_of_sinks) (except single SCC -> 0).

66) Q: Describe approach for critical connections (bridges) problem.
A: Use Tarjan's algorithm for bridges with low-link values during DFS; collect edges where low[child] > disc[parent].

67) Q: How to approach Reconstruct Itinerary (lexicographically smallest Eulerian path)?
A: Use Hierholzer’s algorithm with priority queue per neighbor to ensure lexicographic order; treat airports as nodes and tickets as directed edges.

68) Q: How to compute network delay time?
A: Use Dijkstra from source; answer is max distance among nodes if all reachable, else -1. For small K or negative weights use Bellman-Ford.

69) Q: Cheapest flights with K stops — approach?
A: Use BFS layered by number of stops with cost tracking (Bellman-Ford-like for K iterations), or modified Dijkstra storing (stops) dimension.

70) Q: How to model problems like "Min Cost to Connect All Points"?
A: Use MST algorithms: Prim with O(N^2) or optimized E=O(N^2) Kruskal; or treat as complete graph with Manhattan distances.

71) Q: How to count number of connected components after incremental edge additions (online)?
A: Use union-find to merge and decrement component count when unions succeed.

72) Q: What are typical pitfalls with floating point weights in graph algorithms?
A: Precision issues when comparing sums; use epsilon checks; beware of cycles accumulating errors (use doubles carefully).

73) Q: How to detect if there exists a path with exactly k edges between two vertices?
A: Use matrix exponentiation of adjacency matrix (A^k)[u][v] gives number of length-k paths. Time O(V^3 log k) naive.

74) Q: How to find the diameter of a tree?
A: Run BFS from arbitrary node to find farthest node u, then BFS from u to find farthest v; distance(u,v) is diameter.

75) Q: How to compute k-core decomposition?
A: Repeatedly remove vertices with degree < k; queue-based removal; O(V + E).

76) Q: What is approximate matching and greedy approaches?
A: Greedy matching sorts edges and picks edges if endpoints free; for general graphs, 2-approx algorithms exist; blossom algorithm for maximum matching in general graphs.

77) Q: How to approach concurrency and race conditions in parallel graph processing?
A: Use fine-grained locks, partitioning to reduce cross-partition writes, or adopt message-passing vertex-centric model to avoid shared-state races.

78) Q: Describe how to create an efficient adjacency list serialization?
A: Use contiguous arrays, offsets per vertex, and store edges sequentially; compress edge lists, use varints for ids to reduce size.

79) Q: How to compute the number of triangles in a graph efficiently?
A: For sparse graphs, intersect neighbor lists using hashing or merge-based intersection; complexity depends on degree distribution. Use node ordering by degree to optimize.

80) Q: How to design unit tests for graph algorithms?
A: Include small deterministic graphs (trees, cycles, disconnected), edge cases (empty graphs, single vertex), random tests, and stress tests with known outcomes. Validate correctness and performance.

81) Q: How to debug graph algorithms that produce wrong outputs?
A: Add invariants/logs: verify distances monotonicity, parent pointers validity, check relaxation logic, and assert no integer overflow. Use small traceable examples.

82) Q: What are best practices for representing graphs in competitive programming?
A: Use adjacency lists (ArrayList<int[]> or vector<pair<int,int>>), avoid heavy object overhead, and pre-allocate sizes to reduce GC overhead.

83) Q: Give tips for optimizing Dijkstra in practice.
A: Use binary heap or pairing heap, avoid storing obsolete entries by lazy deletion or check visited flags, and use adjacency arrays for cache friendliness.

84) Q: How to measure time/space complexity in real-world graphs?
A: Report complexity in terms of V and E; measure with actual dataset sizes and profile hotspots; consider memory overhead of objects vs primitive arrays.

85) Q: How to explain algorithm trade-offs during interviews?
A: Clearly state assumptions, compare time/space, discuss edge cases and practical constraints, and give alternate solutions for different scenarios.

---

Notes:
- For deeper study, implement code templates for each core algorithm and practice reconstructing paths and proofs of correctness.
- Keep complexity and edge-case explanations succinct during interviews; show one well-optimized approach and mention alternates.

