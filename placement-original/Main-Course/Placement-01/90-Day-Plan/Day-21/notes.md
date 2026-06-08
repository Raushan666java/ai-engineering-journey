# Day 21 Notes: Week 3 Review & Mock Test

## Objectives for Today
- Conduct a Q&A review of topics from Days 15–19
- Run an automated mock test harness to compile and execute all demo programs
- Validate outputs and gather metrics (execution time, verbose output length)

## Summary of Work Done
- Compiled and ran all demo programs for Days 15–19 using the new PowerShell harness (`day21_run_all.ps1`) and Java reflection harness (`Day21MockTest.java`).
- Generated machine-readable (`mocktest_report.json`) and human-readable (`MockTestReport.md`) summaries.
- Verified outputs for each algorithm (Sorting, Searching, Recursion, DP, Greedy) and captured timings.

## Key Findings
- Total demos run: 10; all passed.
- Recursion visualizer (and Sudoku solver) is the longest-running demo because of verbose backtracking logs. Consider adding a non-verbose test mode.
- DP and Greedy demos were fast and produced expected outputs: fib(30) = 832040; knapsack result = 9; LCS = 4; Fractional knapsack = 240.0; Job sequencing profit = 127.

## Issues Identified & Fixes
- Long-running verbose visualizers make automated runs slow: implemented smaller inputs for CI and added a notional plan for adding a `--quiet` flag.
- Minor off-by-one and string helper issues were previously fixed in earlier days (e.g., padding functions not available on Java 8 or 11 replaced with custom logic).

## Best Practices / Reminders
- For binary search, always use `mid = low + (high - low)/2` to avoid overflow.
- For backtracking, always undo state changes after recursive calls.
- For DP arrays, ensure correct indexing (e.g., `n+1` rows when using 1-based loops) to avoid off-by-one.

## Action Items
1. Add `--quiet` or `--fast` flags to visualizer demos to reduce verbosity for CI runs and harness tests.
2. Add unit tests for all algorithms to create deterministic, quick pass/fail verification for CI.
3. Expand mock test coverage to include edge cases and stress tests (large n, random inputs) for regression detection.
4. Continue to Day 22 (Graphs) with a similar set of artifacts: study plan, resources, notes, visualizers, demos, and tests.

## Notes & Inspirations
- Use NeetCode / Striver for curated problems lists per topic and GeeksforGeeks for deeper reference explanations.
- Keep visualizers educational but add non-verbose and unit-test friendly modes for automation.

## Personal Reflections
- The mock test harness is helpful for quick validation and ensuring compilation compatibility across days.
- Verbosity and long-running outputs should be optional to allow fast CI-style runs.

## References (Selected)
- NeetCode: https://neetcode.io/
- Striver: https://takeuforward.org/strivers-a2z-courses/
- GeeksforGeeks: https://www.geeksforgeeks.org/
