# Day 17 Study Plan: Recursion & Backtracking

## Daily Goals
- Master recursive thinking and problem decomposition
- Understand call stack and execution flow
- Implement backtracking algorithm
- Solve N-Queens and Sudoku problems
- Complete 12 LeetCode recursion problems

---

## Morning Session (9 AM - 12 PM) - Recursion Fundamentals

### 9:00 - 10:00 AM: Recursion Basics
**Theory:**
- What is recursion? (function calling itself)
- Base case vs recursive case
- Call stack visualization
- Recursion vs iteration trade-offs

**Video:** Abdul Bari - Recursion Introduction (18 min)

**Practice Problems:**
1. **Factorial** - Classic recursion
2. **Fibonacci** - Multiple recursive calls
3. **Power(x, n)** - Fast exponentiation
4. **Array Sum** - Recursion on arrays

**Code:** `RecursionBasics.java` (factorial, fibonacci, power, array operations)

### 10:00 - 11:00 AM: Easy LeetCode Problems
**Problems:**
1. ✅ **Fibonacci Number (LC 509)** - Easy
   - Understand naive O(2^n) solution
   - Optimize with memoization to O(n)
   
2. ✅ **Power of Two (LC 231)** - Easy
   - Divide by 2 recursively
   - Base cases: n==1 (true), n<=0 or odd (false)
   
3. ✅ **Reverse String (LC 344)** - Easy
   - Two-pointer recursion
   - Swap and recurse

4. ✅ **Climbing Stairs (LC 70)** - Easy
   - Similar to Fibonacci
   - Ways(n) = Ways(n-1) + Ways(n-2)

**Time:** ~15 min each = 1 hour

### 11:00 AM - 12:00 PM: Backtracking Introduction
**Theory:**
- What is backtracking?
- Backtracking template: Make choice → Recurse → Undo
- State space tree
- Pruning invalid branches

**Watch:** NeetCode - Backtracking Explained (20 min)

**Simple Example:**
- Generate all permutations of [1,2,3]
- Visualize decision tree
- Understand backtracking step

---

## Afternoon Session (1 PM - 4 PM) - Medium Problems

### 1:00 - 2:00 PM: Permutations & Subsets
**Problems:**
5. ✅ **Permutations (LC 46)** ⭐ - Medium
   - Generate all permutations
   - Use boolean array to track used elements
   - Time: O(n! × n)
   
6. ✅ **Subsets (LC 78)** ⭐ - Medium
   - Generate power set
   - Include/exclude pattern
   - Time: O(2^n × n)

**Code:** `Backtracking.java` (permutations, subsets)

### 2:00 - 3:00 PM: Combination Problems
**Problems:**
7. ✅ **Letter Combinations (LC 17)** - Medium
   - Phone number to letters
   - Multiple choices per digit
   - Time: O(4^n)
   
8. ✅ **Generate Parentheses (LC 22)** ⭐ - Medium
   - Constraint: open < max, close < open
   - Catalan number solutions
   - Beautiful backtracking example

9. ✅ **Combination Sum (LC 39)** - Medium
   - Can reuse elements (start index = i)
   - Pruning: if candidate > remain, break

**Time:** ~20 min each = 1 hour

### 3:00 - 4:00 PM: 2D Backtracking
**Problem:**
10. ✅ **Word Search (LC 79)** - Medium
    - Search word in 2D board
    - Mark visited with '#'
    - Restore after recursion
    - Try 4 directions (up, down, left, right)
    - Time: O(m × n × 4^L)

**Key Pattern:** Always restore state when backtracking!

---

## Evening Session (5 PM - 8 PM) - Hard Problems & Project

### 5:00 - 6:30 PM: Classic Hard Problems
**Problems:**
11. ✅ **N-Queens (LC 51)** ⭐⭐ - Hard
    - Place N queens on N×N board
    - No two queens attack each other
    - Check row, column, diagonals
    - Time: O(N!)
    - **Interview favorite!**
    
12. ✅ **Sudoku Solver (LC 37)** ⭐⭐ - Hard
    - Fill 9×9 grid
    - Validate row, column, 3×3 box
    - Time: O(9^m) where m = empty cells
    - **Very common in interviews!**

**Time:** 45 min each = 1.5 hours

### 6:30 - 7:30 PM: Build Recursion Visualizer
**Project:** `RecursionVisualizer.java`

**Features to implement:**
1. Fibonacci call tree visualization
2. Call stack tracker (factorial demo)
3. N-Queens solver with step-by-step output
4. Permutations visualizer
5. Performance comparator (naive vs memo vs iterative)
6. Sudoku solver with step counting

**Goal:** See recursion in action!

### 7:30 - 8:00 PM: Review & Documentation
- Test all code files
- Run RecursionVisualizer demos
- Update notes.md with patterns
- Fill progress tracker
- Document common mistakes

---

## End of Day Checklist

### Code Files Completed
- [ ] RecursionBasics.java (factorial, fibonacci, power, etc.)
- [ ] Backtracking.java (all 8 patterns)
- [ ] RecursionVisualizer.java (comprehensive tool)

### Problems Solved (12 Total)
- [ ] **Easy (4):** LC 509, 231, 344, 70
- [ ] **Medium (6):** LC 46, 78, 17, 22, 39, 79
- [ ] **Hard (2):** LC 51, 37

### Concepts Mastered
- [ ] Base case identification
- [ ] Recursive case formulation
- [ ] Call stack understanding
- [ ] Backtracking template (make → recurse → undo)
- [ ] State restoration
- [ ] Memoization optimization

### Key Patterns Learned
- [ ] Simple recursion (factorial, fibonacci)
- [ ] Two-pointer recursion (reverse string)
- [ ] Permutations (use boolean array)
- [ ] Subsets (include/exclude)
- [ ] Constraint-based (generate parentheses)
- [ ] 2D backtracking (word search)
- [ ] N-Queens (check diagonals)
- [ ] Sudoku (validate 3×3 box)

---

## Common Mistakes to Avoid

1. **Missing base case** → Infinite recursion → Stack overflow
2. **Not making progress** → Same input to recursive call
3. **Forgetting to backtrack** → Wrong state in next iteration
4. **Modifying global state** → Not restoring after recursion
5. **Not handling edge cases** → Empty input, single element

---

## Interview Tips

1. **Always start with base case!** Interviewer loves this.
2. **Draw the recursion tree** to visualize flow
3. **Explain time complexity:** O(branches^depth)
4. **Mention space complexity:** O(depth) for call stack
5. **Optimize with memoization** if overlapping subproblems
6. **Test edge cases:** empty, single element, max size

---

## Tomorrow's Preparation (Day 18: Dynamic Programming)

**Preview:**
- DP basics (memoization + tabulation)
- Fibonacci, Knapsack, LCS
- Overlapping subproblems
- Optimal substructure

**Reading:**
- Review memoization from today's recursion
- Understand bottom-up vs top-down

---

**Total Time:** 9 hours  
**Problems:** 12 (4 Easy, 6 Medium, 2 Hard)  
**Code Files:** 3  
**Focus:** Recursive thinking, backtracking mastery, N-Queens/Sudoku

**Recursion is the foundation for trees, graphs, and DP. Master it today!** 🚀
