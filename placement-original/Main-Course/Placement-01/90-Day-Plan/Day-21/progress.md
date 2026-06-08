# Day 21 Progress Tracker

## Date: [YYYY-MM-DD]

## Goals for Today
- [x] Review core topics from Week 3 (Sorting, Searching, Recursion, DP, Greedy)
- [x] Build and run the Day21 mock test harness across Days 15–19 demos
- [x] Collate results and generate a mock test summary (JSON and Markdown)

## Completed Tasks
- [x] Created/updated `Day21MockTest.java` reflection harness to discover and execute demo `main()` methods
- [x] Wrote `day21_run_all.ps1` PowerShell script to compile & run compiled classes and capture outputs
- [x] Executed the full mock test and validated all demos compiled & ran
- [x] Created `MockTestReport.md` summary and `mocktest_report.json` with timings and statuses

## Time Spent
- Morning Session: 1.5 hours — review & assembling harness
- Afternoon Session: 1.0 hour — writing and debugging the PowerShell runner
- Evening Session: 0.5 hours — running tests, collecting logs & writing the report
- Total: 3.0 hours

## Problems Faced & Solutions
- Problem: Verbose visualizers (e.g., RecursionVisualizer, Sudoku solver) extended run times and made parsing hard.
	- Solution: Use smaller test inputs in the harness for these demos; plan for a `--quiet` mode in future releases.
- Problem: Differences in runtime environment and missing helper functions (string padding) caused minor compile warnings earlier.
	- Solution: Replaced with robust, version-compatible implementations and caught these in the compilation step.

## Key Learnings
- The harness is an effective integration test to ensure that all demo classes compile and run as expected.
- Non-deterministic or verbose logs should be separated from pass/fail assertions by adding unit tests.
- A small set of fast assertions (unit tests) drastically reduces CI runtimes compared to full visualizer runs.

## Tomorrow's Preparation
- Add unit tests (JUnit) for the core algorithms (Search, DP, Greedy) with edge cases and stress cases.
- Start Day 22 content (Graphs): BFS, DFS, Dijkstra, Minimum Spanning Tree

## Self-Assessment (1-10 scale)
- Understanding: 9
- Confidence: 8
- Progress: 9

## Notes
- The mock test run took a short amount of time overall (~8-12 seconds for all demos as recorded), though the recursion visualizer logs are verbose and slow; adopt smaller input sizes for automated test harness.
- Follow-up: Add CI-friendly non-verbose options and JUnit-based tests for faster, deterministic runs.
