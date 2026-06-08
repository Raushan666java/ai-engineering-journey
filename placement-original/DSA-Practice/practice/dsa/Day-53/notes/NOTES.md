# Day 53 — Notes: Advanced Graph Algorithms

Highlights:
- Choose representation (adjacency list) to optimize both memory and traversal time in sparse graphs.
- Dijkstra is optimal for non-negative weights; Bellman-Ford handles negative edges and detects cycles.
- Tarjan's SCC is compact and O(V+E); bridges/articulation points help in reliability analyses.
- Edmonds-Karp is simple and deterministic for max flow tests; for production consider Dinic's.

Tips:
- Always guard against integer overflow in weights; prefer long where appropriate.
- Use deterministic iteration order in tests (sorted node lists) when reproducibility matters.

Practice problems:
- Apply Johnson's on graphs with negative weights but no negative cycles to get efficient APSP.
- Implement Dinic's and compare performance with Edmonds-Karp on denser graphs.
