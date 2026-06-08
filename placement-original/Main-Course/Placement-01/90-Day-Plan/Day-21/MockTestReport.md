# Day 21 Mock Test Report

This report summarizes the mock test run across Days 15-19 demos.

## Summary
- Total demos run: 10
- Passed: 10
- Total Time (ms): 8362.?

## Individual Results
- SortingComparator (Day 15): OK — 565 ms
- SearchLibrary (Day 16): OK — 353 ms
- RecursionBasics (Day 17): OK — 175 ms
- Backtracking (Day 17): OK — 244 ms
- RecursionVisualizer (Day 17): OK — 5052 ms
- DPBasics (Day 18): OK — 175 ms
- DynamicProgramming (Day 18): OK — 162 ms
- DPVisualizer (Day 18): OK — 270 ms
- GreedyBasics (Day 19): OK — 197 ms
- GreedyVisualizer (Day 19): OK — 303 ms

## Notes
- All tests passed, indicating previous days' key demos compile and run.
- Recursion visualizer and Sudoku solver are longer-running due to detailed step outputs.
- Next steps: expand test coverage with unit tests for more edge cases and stress tests.

## Generated Files
- `compile_log.txt` — compilation logs
- `<Class>_output.txt` — per-demo outputs
- `mocktest_report.json` — machine-readable report

**Recommendation:** Convert long visualizers to optional verbose modes for test harness speed; add unit tests to automatically validate outputs without requiring visual outputs.
