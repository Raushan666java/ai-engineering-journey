
# Day 23 Progress Tracker

## Date: 2025-11-20

## Goals for Today
- [x] Implement Topological sort (Kahn and DFS), cycle detection
- [x] Implement Kosaraju SCC demo
- [x] Implement Bellman-Ford and Floyd-Warshall
- [x] Run demos and integrate into harness

## Completed Tasks
- Implemented `GraphAdvanced.java` demonstrating: Topological sort (Kahn & DFS), Kosaraju SCC, Bellman-Ford, Floyd-Warshall.
- Added `day23_run_all.ps1` for compiling and running Day 23 demos.
- Added Day 23 to the Day 21 mock test harness to allow cross-day validation.

## Time Spent
- Total: ~3.0 hours (implementation, testing, and harness integration)

## Problems Faced & Solutions
- Problem: Ensuring correct detection of cycles in Kahn's algorithm.
	- Solution: Kahn returns empty list on cycle detection; verify length mismatch vs total nodes.

## Key Learnings
- Kosaraju is efficient and straightforward for SCC using a post-order stack and transpose graph.
- Bellman-Ford is useful for negative edge weights but has O(n*m) complexity.

## Tomorrow's Plan
- Add JUnit tests for Advanced Graph algorithms with small graphs.
- Add topological sort cycle detection edge-case tests.

## Self-Assessment
- Understanding: 9
- Confidence: 8
- Progress: 9

## Notes
- To run Day 23 demos, use `powershell -ExecutionPolicy Bypass -File .\day23_run_all.ps1` in the `code` folder.

# Day 23 Progress Tracker

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
