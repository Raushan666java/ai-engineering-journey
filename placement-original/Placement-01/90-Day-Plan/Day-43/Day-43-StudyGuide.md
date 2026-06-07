# Day 43 — Backtracking (Permutations, Subsets, Sudoku Solver)

## Learning Objectives
- Understand backtracking as an algorithmic technique.
- Implement basic backtracking patterns: generate permutations, subsets, combinations.
- Implement a Sudoku solver via recursive backtracking and validation.

## Topics
- Permutations (generate all `n!` permutations)
- Subsets / Power set (generate all `2^n` subsets)
- Backtracking constraints & pruning
- Sudoku validation and sub-box iteration (NxN where N is a perfect square)

## Practice Problems
- LeetCode 46: Permutations
- LeetCode 78: Subsets
- LeetCode 37: Sudoku Solver
- Generate combinations: LeetCode 77

## Notes
- Backtracking is DFS with undo (unmake move) to explore alternatives.
- Pruning (validity checks) is key to reducing runtime.
- For Sudoku, ensure you check row/column/box constraints.

## Resources
- https://leetcode.com/problems/permutations/ (LC 46)
- https://leetcode.com/problems/subsets/ (LC 78)
- https://leetcode.com/problems/sudoku-solver/ (LC 37)
- MIT 6.006 & 6.046 algorithm lectures on search & backtracking
