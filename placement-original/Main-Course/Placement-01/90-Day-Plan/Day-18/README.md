# Day 18: Dynamic Programming (DP) - Complete Guide

## Overview
**Day 18 Focus:** Dynamic Programming - Memoization vs Tabulation, Knapsack, LCS, Coin Change, DP patterns
**Practice:** 12 DP problems
**Project:** DP Visualizer & Library

---

## Table of contents
- What is DP?
- Memoization vs Tabulation
- DP Patterns
- Classic Problems
- LeetCode Problems
- Interview Tips
- Study Plan & Project

---

## What is Dynamic Programming?
Dynamic Programming (DP) is an optimization technique that stores (memoizes) results of subproblems to avoid redundant computation. It is used when the problem has overlapping subproblems and optimal substructure.

### Key components
1. **Overlapping Subproblems**: Subproblems repeat multiple times
2. **Optimal Substructure**: An optimal solution can be constructed from optimal solutions of subproblems

---

## Memoization vs Tabulation
- **Memoization (Top-Down)**: recursion + cache
- **Tabulation (Bottom-Up)**: fill DP table iteratively

---

## DP Patterns
1. Fibonacci and simple recursion -> Memoization
2. 0/1 Knapsack -> knapsack pattern
3. Longest Common Subsequence / Substring -> 2D DP table
4. Coin Change -> Unbounded knapsack variant
5. Subset sum -> 1D/2D DP
6. DP on trees -> Tree DP

---

## Classic Problems
- Fibonacci with memo & tabulation
- Climbing stairs (DP)
- 0/1 Knapsack
- Coin Change (min coins, combinations)
- Longest Increasing Subsequence (LIS)
- Longest Common Subsequence (LCS)
- Edit Distance (Levenshtein)
- Partition equal subset sum

---

## LeetCode Problems (12)
**Easy (4)**:
1. Climbing Stairs (LC 70)
2. House Robber (LC 198)
3. Min Cost Climbing Stairs (LC 746)
4. Fibonacci Number (LC 509)

**Medium (6)**:
5. Longest Increasing Subsequence (LC 300)
6. Longest Common Subsequence (LC 1143)
7. Partition Equal Subset Sum (LC 410)
8. Coin Change 2 (LC 518)
9. 0/1 Knapsack (classic)
10. Minimum Cost to Cut a Stick (LC 1540)

**Hard (2)**:
11. Edit Distance (LC 72)
12. Interleaving String (LC 97)

---

## Interview Tips
- Always check for overlapping subproblems
- Try memoization first if recursion is natural
- For space optimization: reduce 2D DP to 1D if possible
- Explain state transition and DP table
- Verify base conditions and bounds

---

## Project: DP Library & Visualizer
- `DPLibrary.java` - Implement core DP solutions with both top-down and bottom-up variants
- `DPVisualizer.java` - Visualize DP table builds and transitions
- Performance compare memo vs tabulation
- Edge case testing and benchmarking

---

## Study Plan (9 hours)
- Morning: DP fundamentals, Fibonacci memo & tabulation
- Afternoon: Implementation of 0/1 knapsack, LCS, LIS, Coin Change
- Evening: DP Visualizer, optimization, interview patterns

---

**Next:** I'll implement code examples and the visualizers in `Day-18/code/` and add study resources and progress tracker.