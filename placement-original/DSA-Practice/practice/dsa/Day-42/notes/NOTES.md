# Day 42 Notes: Advanced Dynamic Programming Techniques

## Summary
This document complements `AdvancedDP.java` and the Day 42 README by focusing on implementation details, testing strategy, optimizations, and interview-focused takeaways.

## Implementation Highlights
- Burst Balloons: interval DP, bottom-up from length=1 to n, optimize with memoization for sparse inputs.
- Palindrome Partitioning II: precompute palindrome table using DP for O(1) palindrome checks in main DP.
- Regular Expression Matching: careful handling of '*' and '.' in 2D DP table; consider iterative DP to improve stack usage.
- Scramble String: use memoization with key (i,j,len) to avoid repeated partitions.
- Word Break II: combine DP for reachability and DFS/backtracking to build sequences.
- Arithmetic Slices II: use maps to store differences per index; watch for overflow with long types.

## Test Strategy
- Unit tests for each problem with edge cases, boundary values, and random tests for stress testing.
- Use parameterized tests where appropriate (JUnit 5 @ParameterizedTest).
- Performance tests: provide large size inputs and measure runtime for worst-case scenarios.

## Common Pitfalls
- Off-by-one errors in interval DP indices.
- Using recursion without memoization leads to exponential time for many problems.
- Forgetting to sort/uniq when converting to compressed coordinates for optimization.

## Interview Notes
- Explain why interval DP iterates over lengths and partition points.
- For Regex Matching, discuss the meaning of dp[i][j] and how '*' affects the recurrence.
- For Bitmask DP, explain state representation and transition clearly (e.g., dp[mask] meaning).

## Files
- `code/AdvancedDP.java` — main implementations
- `tests/TestDay42.java` — unit tests
- `system-design/RECOMMENDATION_ENGINE_SYSTEM_DESIGN.md` — high-level application of DP techniques

---
*Author: Placement Preparation*