# Backtracking Algorithms

## Overview
Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, and removing those solutions that fail to satisfy the constraints of the problem at any point.

## Key Concepts

### 1. Decision Space
The set of all possible choices at each step of the algorithm.

### 2. Constraints
Rules that limit the decision space and define valid solutions.

### 3. Goal State
The condition that defines a complete and valid solution.

### 4. Backtrack
The process of undoing the last choice and trying an alternative when a dead end is reached.

## General Backtracking Template

```java
void backtrack(State currentState, List<State> solution) {
    if (isGoalReached(currentState)) {
        // Found a solution, save or process it
        saveSolution(solution);
        return;
    }
    
    for (Choice choice : getPossibleChoices(currentState)) {
        if (isValid(currentState, choice)) {
            // Make a choice
            applyChoice(currentState, choice, solution);
            
            // Recurse with the new state
            backtrack(currentState, solution);
            
            // Undo the choice (backtrack)
            undoChoice(currentState, choice, solution);
        }
    }
}
```

## Common Backtracking Problems

### 1. N-Queens Problem
Place N queens on an N×N chessboard so that no two queens threaten each other.

```java
public List<List<String>> solveNQueens(int n) {
    List<List<String>> solutions = new ArrayList<>();
    char[][] board = new char[n][n];
    
    // Initialize empty board
    for (int i = 0; i < n; i++) {
        Arrays.fill(board[i], '.');
    }
    
    backtrack(board, 0, solutions);
    return solutions;
}

private void backtrack(char[][] board, int row, List<List<String>> solutions) {
    if (row == board.length) {
        // Found a valid solution
        solutions.add(createSolution(board));
        return;
    }
    
    for (int col = 0; col < board.length; col++) {
        if (isValid(board, row, col)) {
            // Place queen
            board[row][col] = 'Q';
            
            // Try this configuration
            backtrack(board, row + 1, solutions);
            
            // Remove queen (backtrack)
            board[row][col] = '.';
        }
    }
}

private boolean isValid(char[][] board, int row, int col) {
    // Check column
    for (int i = 0; i < row; i++) {
        if (board[i][col] == 'Q') {
            return false;
        }
    }
    
    // Check upper-left diagonal
    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 'Q') {
            return false;
        }
    }
    
    // Check upper-right diagonal
    for (int i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
        if (board[i][j] == 'Q') {
            return false;
        }
    }
    
    return true;
}

private List<String> createSolution(char[][] board) {
    List<String> solution = new ArrayList<>();
    for (char[] row : board) {
        solution.add(new String(row));
    }
    return solution;
}
```

### 2. Sudoku Solver
Fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids contains all of the digits from 1 to 9.

```java
public void solveSudoku(char[][] board) {
    solve(board);
}

private boolean solve(char[][] board) {
    for (int row = 0; row < 9; row++) {
        for (int col = 0; col < 9; col++) {
            // Find an empty cell
            if (board[row][col] == '.') {
                // Try digits 1-9
                for (char num = '1'; num <= '9'; num++) {
                    if (isValid(board, row, col, num)) {
                        // Place digit
                        board[row][col] = num;
                        
                        // Recurse with this configuration
                        if (solve(board)) {
                            return true;
                        }
                        
                        // If not successful, backtrack
                        board[row][col] = '.';
                    }
                }
                // No valid digit found
                return false;
            }
        }
    }
    // All cells filled
    return true;
}

private boolean isValid(char[][] board, int row, int col, char num) {
    // Check row
    for (int i = 0; i < 9; i++) {
        if (board[row][i] == num) {
            return false;
        }
    }
    
    // Check column
    for (int i = 0; i < 9; i++) {
        if (board[i][col] == num) {
            return false;
        }
    }
    
    // Check 3x3 box
    int boxRow = row - row % 3;
    int boxCol = col - col % 3;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (board[boxRow + i][boxCol + j] == num) {
                return false;
            }
        }
    }
    
    return true;
}
```

### 3. Permutations
Generate all possible permutations of a given array of distinct integers.

```java
public List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(nums, new ArrayList<>(), result, new boolean[nums.length]);
    return result;
}

private void backtrack(int[] nums, List<Integer> current, List<List<Integer>> result, boolean[] used) {
    if (current.size() == nums.length) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        
        // Use current number
        used[i] = true;
        current.add(nums[i]);
        
        // Recurse
        backtrack(nums, current, result, used);
        
        // Backtrack
        current.remove(current.size() - 1);
        used[i] = false;
    }
}
```

### 4. Combination Sum
Find all unique combinations in an array where the candidate numbers sum to a target.

```java
public List<List<Integer>> combinationSum(int[] candidates, int target) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(candidates, target, 0, new ArrayList<>(), result);
    return result;
}

private void backtrack(int[] candidates, int remain, int start, List<Integer> current, List<List<Integer>> result) {
    if (remain < 0) {
        return;
    }
    if (remain == 0) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int i = start; i < candidates.length; i++) {
        // Add candidate
        current.add(candidates[i]);
        
        // Recurse with remaining sum
        backtrack(candidates, remain - candidates[i], i, current, result);
        
        // Backtrack
        current.remove(current.size() - 1);
    }
}
```

### 5. Word Search
Determine if a word exists in a 2D board of characters.

```java
public boolean exist(char[][] board, String word) {
    int rows = board.length;
    int cols = board[0].length;
    
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (board[i][j] == word.charAt(0) && dfs(board, i, j, word, 0)) {
                return true;
            }
        }
    }
    
    return false;
}

private boolean dfs(char[][] board, int row, int col, String word, int index) {
    // Found the entire word
    if (index == word.length()) {
        return true;
    }
    
    // Out of bounds or character doesn't match
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || 
        board[row][col] != word.charAt(index)) {
        return false;
    }
    
    // Mark as visited
    char temp = board[row][col];
    board[row][col] = '#';
    
    // Try all four directions
    boolean found = dfs(board, row + 1, col, word, index + 1) ||
                    dfs(board, row - 1, col, word, index + 1) ||
                    dfs(board, row, col + 1, word, index + 1) ||
                    dfs(board, row, col - 1, word, index + 1);
    
    // Restore the cell
    board[row][col] = temp;
    
    return found;
}
```

## Optimization Techniques

### 1. Pruning
Eliminate branches of the search tree that cannot lead to a valid solution.

```java
// Example: Early termination in Sudoku solver
if (isInvalid(currentState)) {
    return false; // Don't explore this branch further
}
```

### 2. Ordering Heuristics
Try the most promising choices first to find solutions faster.

```java
// Example: Sort candidates to try smaller values first
Arrays.sort(candidates);
```

### 3. Constraint Propagation
Use constraints to reduce the search space.

```java
// Example: In Sudoku, track possible values for each cell
// and update them as you make choices
```

### 4. Memoization
Cache results of subproblems to avoid redundant computation.

```java
// Example: Store results of already computed states
Map<State, Result> memo = new HashMap<>();
if (memo.containsKey(currentState)) {
    return memo.get(currentState);
}
```

## When to Use Backtracking

Backtracking is suitable for problems where:
- You need to find all possible solutions
- The problem can be broken down into a sequence of decisions
- You can determine if a partial solution is invalid before completing it
- The search space is too large for brute force

## Common Mistakes and Pitfalls

1. **Forgetting to backtrack**: Not undoing changes after exploring a path
2. **Inefficient state representation**: Using data structures that make backtracking expensive
3. **Missing base cases**: Not properly defining when to stop recursion
4. **Insufficient pruning**: Exploring unnecessary branches
5. **Stack overflow**: Deep recursion without proper termination conditions

## Practice Problems

1. [N-Queens](https://leetcode.com/problems/n-queens/)
2. [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)
3. [Permutations](https://leetcode.com/problems/permutations/)
4. [Combination Sum](https://leetcode.com/problems/combination-sum/)
5. [Word Search](https://leetcode.com/problems/word-search/)
6. [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
7. [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
8. [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)
9. [Subsets](https://leetcode.com/problems/subsets/)
10. [Rat in a Maze](https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1)