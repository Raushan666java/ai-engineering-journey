# Day 43 — Notes

- Permutations: Use boolean `used[]` or swap-in-place technique. Time complexity O(n!).
- Subsets: Use recursion with `start` index to avoid duplicates. Time complexity O(2^n).
- Sudoku solver: For NxN where N is square, validate using `sqrt(N) x sqrt(N)` boxes.
- Use bitmasks for faster constraints when N is small (e.g., 9x9 using bits 1..9).
