# Day 40 — Advanced Graph Algorithms

Overview
- Focus: Advanced Graph Algorithms (shortest paths, MST, SCC, topological sort, max flow, union-find) and 8 practice problems.
- Goal: Implement robust, well-documented algorithms with multiple approaches, thorough tests, and interview prep material.

Repository Layout
- code/GraphAlgorithms.java — fundamental algorithms with multiple variants
- code/Day40Practice.java — advanced problems solved with canonical approaches
- tests/TestDay40.java — comprehensive test suite (103 tests, currently 100% pass rate)
- notes/Day40InterviewQA.md — 80+ interview Q&A for graph topics
- system-design/DISTRIBUTED_GRAPH_PROCESSING_SYSTEM.md — system design for large-scale graph processing

Getting started
1. Compile
   - Open PowerShell in the day folder and run:
     javac -d bin code\*.java tests\*.java
2. Run the test suite
   - java -cp bin day40.tests.TestDay40
   - Expected: 103 tests, 100% pass rate
3. Run demos
   - java -cp bin day40.fundamentals.GraphAlgorithms
   - java -cp bin day40.practice.Day40Practice

Style & Conventions
- Algorithms are implemented with readability and correctness prioritized over micro-optimizations.
- Important methods include path reconstruction, negative-cycle detection, and both standard and optimized versions.

Documentation
- The `notes/` folder contains interview questions and deeper explanations for each algorithm.
- **Walkthroughs:** `notes/Day40_Walkthroughs.md` — 10 detailed code walkthroughs (Dijkstra, Bellman-Ford, Floyd-Warshall, Kruskal, Prim, Tarjan SCC, Topological Sort, Dinic, Union-Find, Hierholzer).
- **Diagrams:** `assets/` contains SVGs illustrating algorithm flows (Dijkstra frontier, Tarjan low-link, Kruskal/Prim comparison, Topological order).
- `system-design/` contains a full design document for distributed graph processing.

Next steps
- Expand interview Q&A with more code snippets and example walkthroughs.
- Add visualization helpers to illustrate BFS/DFS, Dijkstra frontier, and SCC components.

Maintainers
- Created and maintained as part of the 90-day Placement plan series.

