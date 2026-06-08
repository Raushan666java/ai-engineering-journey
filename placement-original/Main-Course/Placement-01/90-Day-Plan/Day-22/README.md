# Day 22: Graphs — BFS, DFS, Shortest Paths, MST, Topological Sort

## Overview
This day covers Graph fundamentals and core algorithms:
- Graph representations (adjacency list, adjacency matrix)
- BFS & DFS: traversal, search and use-cases
- Shortest path: Dijkstra algorithm (non-negative weights)
- Minimum spanning tree: Kruskal and Prim
- Topological sort & cycle detection (directed graphs)

## Goals
- Implement Java demos for: BFS, DFS, Dijkstra, MST (Kruskal), Topological sort
- Provide `GraphVisualizer` with `--quiet`/`--fast` mode to allow CI-friendly test runs
- Add study notes and curated resources

## Files added
- `code/GraphBasics.java` — adjacency list implementation + BFS/DFS
- `code/GraphTraversals.java` — demo traversals
- `code/GraphShortestPaths.java` — Dijkstra demo
- `code/GraphMST.java` — Kruskal demo
- `code/GraphVisualizer.java` — small visualizer demonstrating steps; supports quiet mode

**Next**: Implement demos, add unit tests, and integrate with the main harness.
