# Recursion - Complete Guide

## Overview
Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller, similar subproblems. It's fundamental to understanding algorithms and data structures.

## Difficulty Breakdown

### Easy Level (6 problems)
1. **Factorial (Custom)** - Calculate n!
2. **Fibonacci Number (509)** - Nth Fibonacci number
3. **Power of Two (231)** - Check if power of 2
4. **Reverse String (344)** - Reverse string recursively
5. **Palindrome Check (Custom)** - Check palindrome
6. **Sum of Digits (Custom)** - Sum digits recursively

### Medium Level (4 problems)
7. **Climbing Stairs (70)** - Ways to climb stairs
8. **Generate Parentheses (22)** - Generate valid parentheses
9. **Permutations (46)** - Generate all permutations
10. **Subsets (78)** - Generate all subsets

### Hard Level (4 problems)
11. **N-Queens (51)** - Solve N-Queens problem
12. **Sudoku Solver (37)** - Solve Sudoku puzzle
13. **Word Search II (212)** - Find words in grid
14. **Regular Expression Matching (10)** - Regex matching

## Key Concepts

### Recursion Components
- **Base Case**: Condition to stop recursion
- **Recursive Case**: Call to self with smaller input
- **Progress**: Each call must progress toward base case

### Recursion Types
- **Direct Recursion**: Function calls itself
- **Indirect Recursion**: Function calls another that calls back
- **Tail Recursion**: Recursive call is last operation
- **Tree Recursion**: Multiple recursive calls

### Time Complexity
- **Exponential**: O(2^n) for naive Fibonacci
- **Linear**: O(n) for factorial
- **Polynomial**: O(n^k) for tree traversals

## Common Patterns
1. **Divide and Conquer**: Break into subproblems
2. **Backtracking**: Try possibilities, backtrack on failure
3. **Memoization**: Cache results to avoid recomputation
4. **Dynamic Programming**: Bottom-up recursion with memoization

## Interview Tips
- Always identify base cases first
- Draw recursion tree for complex problems
- Consider memoization for overlapping subproblems
- Watch for stack overflow with deep recursion
- Practice converting iterative to recursive solutions