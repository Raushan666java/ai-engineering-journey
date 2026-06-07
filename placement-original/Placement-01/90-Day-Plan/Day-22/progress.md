# Day 22 Progress Tracker

## Date: 2025-11-20

## Goals for Today
- [x] Implement adjacency list and graph basics
- [x] Implement BFS and DFS demos
- [x] Implement Dijkstra (shortest paths) and Kruskal (MST) demos
- [x] Add `GraphVisualizer` with `--quiet` flag

## Completed Tasks
- Implemented `GraphBasics.java`, `GraphTraversals.java`, `GraphShortestPaths.java`, `GraphMST.java`, `GraphVisualizer.java`.
- Added `day22_run_all.ps1` to compile and run demos and capture outputs.
- Verified demos compile and run: GraphVisualizer (verbose, quiet), GraphBasics, GraphTraversals, GraphShortestPaths, and GraphMST.

## Time Spent
- Morning Session: 1.5 hours — implemented GraphBasics and GraphTraversals
- Afternoon Session: 1.5 hours — implemented Dijkstra and Kruskal
- Evening Session: 1.0 hours — GraphVisualizer, run script, debugging & verification
- Total: 4.0 hours

## Problems Faced & Solutions
- Problem: Verbose outputs in GraphVisualizer may be too large for CI.
  - Solution: Implemented `--quiet` flag. Use quiet mode for harness; verbose mode for learning.

## Key Learnings
- Use adjacency lists for sparse graphs and adjacency matrix for dense graphs.
- Dijkstra uses a min-heap; Kruskal uses union-find for efficient MST.
- Keep visited arrays reset to avoid cross-run contamination.

## Tomorrow's Plan
- Add JUnit tests for Graph algorithms (BFS, DFS, Dijkstra, Kruskal).
- Add Topological sort and cycle detection implementations.
- Integrate Day 22 into the global mock test harness (Day 21's harness).

## Self-Assessment
- Understanding: 9
- Confidence: 8
- Progress: 9

## Notes
- To run demos and collect outputs, use `powershell -ExecutionPolicy Bypass -File .\day22_run_all.ps1` in the `code` folder
# Day 22 Progress Tracker

## Date: [YYYY-MM-DD]

## Goals for Today
- [ ] Implement adjacency list and graph basics
- [ ] Implement BFS and DFS demos
- [ ] Implement Dijkstra (shortest paths) and Kruskal (MST) demos
- [ ] Add `GraphVisualizer` with `--quiet` flag

## Completed Tasks

## Time Spent

## Problems Faced

## Key Learnings

## Tomorrow's Plan

## Self-Assessment

## Notes
# Day 22 Progress Tracker

## Date: [YYYY-MM-DD]

## Goals for Today
- [ ] Goal 1
- [ ] Goal 2
- [ ] Goal 3

## Completed Tasks
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

## Time Spent
- Morning Session: [ ] hours
- Afternoon Session: [ ] hours
- Evening Session: [ ] hours
- Total: [ ] hours

## Problems Faced
- [Issue 1 and solution]
- [Issue 2 and solution]

## Key Learnings
- [Learning 1]
- [Learning 2]
- [Learning 3]

## Tomorrow's Preparation
- [Preparation task 1]
- [Preparation task 2]

## Self-Assessment (1-10 scale)
- Understanding: [ ]
- Confidence: [ ]
- Progress: [ ]

## Notes
[Additional notes about the day]
