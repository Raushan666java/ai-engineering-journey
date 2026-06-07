# Day 17: Recursion & Backtracking - Complete Guide

## 📚 Table of Contents
- [Overview](#overview)
- [What is Recursion?](#what-is-recursion)
- [Recursive Thinking](#recursive-thinking)
- [Backtracking Algorithm](#backtracking-algorithm)
- [Classic Problems](#classic-problems)
- [LeetCode Problems](#leetcode-problems)
- [Interview Tips](#interview-tips)
- [Common Mistakes](#common-mistakes)

---

## 🎯 Overview

**Day 17 Focus:** Recursion & Backtracking  
**Topics:** Recursion basics, recursive thinking, backtracking, N-Queens, Sudoku  
**Practice:** 12 LeetCode problems  
**Project:** Backtracking Solver with visualization  
**Time:** 9 hours

### Learning Objectives
- Master recursive thinking and problem decomposition
- Understand call stack and execution flow
- Implement backtracking algorithm
- Solve N-Queens and Sudoku problems
- Optimize recursive solutions with memoization

---

## 🔄 What is Recursion?

### Definition
**Recursion** is a programming technique where a function calls itself to solve smaller instances of the same problem.

### Key Components
1. **Base Case:** Stopping condition (prevents infinite recursion)
2. **Recursive Case:** Function calls itself with modified parameters
3. **Progress Towards Base:** Each call must move closer to base case

### Simple Example: Factorial
```java
int factorial(int n) {
    // Base case
    if (n == 0 || n == 1) return 1;
    
    // Recursive case
    return n * factorial(n - 1);
}

// factorial(5) = 5 * factorial(4)
//              = 5 * 4 * factorial(3)
//              = 5 * 4 * 3 * factorial(2)
//              = 5 * 4 * 3 * 2 * factorial(1)
//              = 5 * 4 * 3 * 2 * 1 = 120
```

### Call Stack Visualization
```
factorial(5)
├─ factorial(4)
│  ├─ factorial(3)
│  │  ├─ factorial(2)
│  │  │  ├─ factorial(1) → returns 1
│  │  │  └─ returns 2 * 1 = 2
│  │  └─ returns 3 * 2 = 6
│  └─ returns 4 * 6 = 24
└─ returns 5 * 24 = 120
```

---

## 🧠 Recursive Thinking

### How to Think Recursively

#### Step 1: Identify the Base Case
**Question:** What's the simplest input where the answer is obvious?

Examples:
- Factorial: `factorial(0) = 1` or `factorial(1) = 1`
- Fibonacci: `fib(0) = 0`, `fib(1) = 1`
- Binary search: `low > high` (element not found)

#### Step 2: Assume Recursion Works
**Trust the recursion!** Assume the function works correctly for smaller inputs.

Example: To compute `factorial(5)`, assume `factorial(4)` returns the correct answer.

#### Step 3: Make Progress
**Each recursive call must move toward the base case.**

Examples:
- `factorial(n)` calls `factorial(n-1)` (decreasing)
- Binary search reduces search space by half
- Tree traversal moves to children (smaller subtrees)

#### Step 4: Combine Results
**How do you use the recursive result to solve the current problem?**

Examples:
- `factorial(n) = n * factorial(n-1)`
- `fib(n) = fib(n-1) + fib(n-2)`
- Tree height: `1 + max(leftHeight, rightHeight)`

### Recursion vs Iteration

| Aspect | Recursion | Iteration |
|--------|-----------|-----------|
| **Readability** | More intuitive for tree/divide-conquer | Better for simple loops |
| **Memory** | O(n) call stack | O(1) typically |
| **Performance** | Slower (function call overhead) | Faster |
| **Use Cases** | Trees, graphs, backtracking, divide-conquer | Arrays, simple counting |

**When to Use Recursion:**
- Tree/graph traversal
- Divide and conquer (merge sort, quick sort)
- Backtracking problems
- Mathematical recurrence relations

**When to Use Iteration:**
- Simple array traversal
- Counting loops
- When stack overflow is a concern

---

## 🎯 Backtracking Algorithm

### What is Backtracking?

**Backtracking** is an algorithmic technique that considers searching every possible combination to solve a computational problem. It incrementally builds candidates and abandons a candidate ("backtracks") as soon as it determines the candidate cannot lead to a valid solution.

### Backtracking Template

```java
void backtrack(parameters) {
    // Base case: solution found or invalid state
    if (isValidSolution(state)) {
        addToResult(state);
        return;
    }
    
    if (isInvalidState(state)) {
        return; // Prune this branch
    }
    
    // Explore all choices
    for (choice : availableChoices) {
        // Make choice
        makeChoice(choice);
        
        // Recurse
        backtrack(updatedParameters);
        
        // Undo choice (backtrack)
        undoChoice(choice);
    }
}
```

### Key Concepts

1. **State Space Tree:** All possible states form a tree
2. **Pruning:** Abandon branches that cannot lead to solution
3. **Backtracking:** Undo choices to explore other paths
4. **DFS:** Backtracking is essentially depth-first search

### Example: Generate Permutations

```java
public List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(nums, new ArrayList<>(), new boolean[nums.length], result);
    return result;
}

void backtrack(int[] nums, List<Integer> current, boolean[] used, List<List<Integer>> result) {
    // Base case: permutation complete
    if (current.size() == nums.length) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    // Try each number
    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue; // Skip used numbers
        
        // Make choice
        current.add(nums[i]);
        used[i] = true;
        
        // Recurse
        backtrack(nums, current, used, result);
        
        // Undo choice
        current.remove(current.size() - 1);
        used[i] = false;
    }
}
```

**Execution for [1,2,3]:**
```
[]
├─ [1]
│  ├─ [1,2]
│  │  └─ [1,2,3] ✓
│  └─ [1,3]
│     └─ [1,3,2] ✓
├─ [2]
│  ├─ [2,1]
│  │  └─ [2,1,3] ✓
│  └─ [2,3]
│     └─ [2,3,1] ✓
└─ [3]
   ├─ [3,1]
   │  └─ [3,1,2] ✓
   └─ [3,2]
      └─ [3,2,1] ✓
```

---

## 🏆 Classic Problems

### 1. N-Queens Problem

**Problem:** Place N queens on an N×N chessboard so no two queens attack each other.

**Constraints:**
- No two queens in same row
- No two queens in same column
- No two queens in same diagonal

**Solution:**
```java
public List<List<String>> solveNQueens(int n) {
    List<List<String>> result = new ArrayList<>();
    char[][] board = new char[n][n];
    
    // Initialize board
    for (int i = 0; i < n; i++) {
        Arrays.fill(board[i], '.');
    }
    
    backtrack(board, 0, result);
    return result;
}

void backtrack(char[][] board, int row, List<List<String>> result) {
    // Base case: all queens placed
    if (row == board.length) {
        result.add(construct(board));
        return;
    }
    
    // Try placing queen in each column
    for (int col = 0; col < board.length; col++) {
        if (isSafe(board, row, col)) {
            // Make choice
            board[row][col] = 'Q';
            
            // Recurse
            backtrack(board, row + 1, result);
            
            // Undo choice
            board[row][col] = '.';
        }
    }
}

boolean isSafe(char[][] board, int row, int col) {
    // Check column
    for (int i = 0; i < row; i++) {
        if (board[i][col] == 'Q') return false;
    }
    
    // Check diagonal (top-left)
    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 'Q') return false;
    }
    
    // Check diagonal (top-right)
    for (int i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
        if (board[i][j] == 'Q') return false;
    }
    
    return true;
}
```

**Time Complexity:** O(N!) - trying all permutations  
**Space Complexity:** O(N²) - board storage

### 2. Sudoku Solver

**Problem:** Fill a 9×9 grid so each row, column, and 3×3 box contains digits 1-9.

**Solution:**
```java
public void solveSudoku(char[][] board) {
    backtrack(board, 0, 0);
}

boolean backtrack(char[][] board, int row, int col) {
    // Move to next row
    if (col == 9) {
        return backtrack(board, row + 1, 0);
    }
    
    // Base case: all cells filled
    if (row == 9) {
        return true; // Solution found
    }
    
    // Skip filled cells
    if (board[row][col] != '.') {
        return backtrack(board, row, col + 1);
    }
    
    // Try each digit 1-9
    for (char num = '1'; num <= '9'; num++) {
        if (isValid(board, row, col, num)) {
            // Make choice
            board[row][col] = num;
            
            // Recurse
            if (backtrack(board, row, col + 1)) {
                return true; // Solution found
            }
            
            // Undo choice
            board[row][col] = '.';
        }
    }
    
    return false; // No solution
}

boolean isValid(char[][] board, int row, int col, char num) {
    // Check row
    for (int i = 0; i < 9; i++) {
        if (board[row][i] == num) return false;
    }
    
    // Check column
    for (int i = 0; i < 9; i++) {
        if (board[i][col] == num) return false;
    }
    
    // Check 3x3 box
    int boxRow = (row / 3) * 3;
    int boxCol = (col / 3) * 3;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (board[boxRow + i][boxCol + j] == num) return false;
        }
    }
    
    return true;
}
```

**Time Complexity:** O(9^m) where m = empty cells  
**Space Complexity:** O(1) - in-place modification

---

## 📝 LeetCode Problems (12 Total)

### Easy Problems (4)

1. **Fibonacci Number (LC 509)** - Easy
   ```java
   int fib(int n) {
       if (n <= 1) return n;
       return fib(n - 1) + fib(n - 2);
   }
   ```
   - Time: O(2^n) naive, O(n) with memoization
   - Pattern: Simple recursion

2. **Power of Two (LC 231)** - Easy
   ```java
   boolean isPowerOfTwo(int n) {
       if (n == 1) return true;
       if (n <= 0 || n % 2 != 0) return false;
       return isPowerOfTwo(n / 2);
   }
   ```
   - Time: O(log n)
   - Pattern: Divide by 2 each time

3. **Reverse String (LC 344)** - Easy
   ```java
   void reverseString(char[] s) {
       reverse(s, 0, s.length - 1);
   }
   void reverse(char[] s, int left, int right) {
       if (left >= right) return;
       char temp = s[left];
       s[left] = s[right];
       s[right] = temp;
       reverse(s, left + 1, right - 1);
   }
   ```
   - Time: O(n)
   - Pattern: Two pointers recursion

4. **Climbing Stairs (LC 70)** - Easy
   ```java
   int climbStairs(int n) {
       if (n <= 2) return n;
       return climbStairs(n - 1) + climbStairs(n - 2);
   }
   ```
   - Time: O(2^n) naive, O(n) with DP
   - Pattern: Fibonacci-like

### Medium Problems (6)

5. **Permutations (LC 46)** ⭐ - Medium
   ```java
   List<List<Integer>> permute(int[] nums) {
       List<List<Integer>> result = new ArrayList<>();
       backtrack(nums, new ArrayList<>(), new boolean[nums.length], result);
       return result;
   }
   ```
   - Time: O(n! × n)
   - Pattern: Backtracking with state

6. **Subsets (LC 78)** ⭐ - Medium
   ```java
   List<List<Integer>> subsets(int[] nums) {
       List<List<Integer>> result = new ArrayList<>();
       backtrack(nums, 0, new ArrayList<>(), result);
       return result;
   }
   void backtrack(int[] nums, int start, List<Integer> current, List<List<Integer>> result) {
       result.add(new ArrayList<>(current));
       for (int i = start; i < nums.length; i++) {
           current.add(nums[i]);
           backtrack(nums, i + 1, current, result);
           current.remove(current.size() - 1);
       }
   }
   ```
   - Time: O(2^n × n)
   - Pattern: Backtracking with index

7. **Letter Combinations of a Phone Number (LC 17)** - Medium
   ```java
   List<String> letterCombinations(String digits) {
       if (digits.isEmpty()) return new ArrayList<>();
       String[] map = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
       List<String> result = new ArrayList<>();
       backtrack(digits, 0, new StringBuilder(), map, result);
       return result;
   }
   ```
   - Time: O(4^n) worst case
   - Pattern: Multiple choices per position

8. **Generate Parentheses (LC 22)** ⭐ - Medium
   ```java
   List<String> generateParenthesis(int n) {
       List<String> result = new ArrayList<>();
       backtrack(result, new StringBuilder(), 0, 0, n);
       return result;
   }
   void backtrack(List<String> result, StringBuilder current, int open, int close, int max) {
       if (current.length() == max * 2) {
           result.add(current.toString());
           return;
       }
       if (open < max) {
           current.append('(');
           backtrack(result, current, open + 1, close, max);
           current.deleteCharAt(current.length() - 1);
       }
       if (close < open) {
           current.append(')');
           backtrack(result, current, open, close + 1, max);
           current.deleteCharAt(current.length() - 1);
       }
   }
   ```
   - Time: O(4^n / √n) - Catalan number
   - Pattern: Constraint-based backtracking

9. **Combination Sum (LC 39)** - Medium
   ```java
   List<List<Integer>> combinationSum(int[] candidates, int target) {
       List<List<Integer>> result = new ArrayList<>();
       backtrack(candidates, target, 0, new ArrayList<>(), result);
       return result;
   }
   void backtrack(int[] candidates, int remain, int start, List<Integer> current, List<List<Integer>> result) {
       if (remain == 0) {
           result.add(new ArrayList<>(current));
           return;
       }
       if (remain < 0) return;
       
       for (int i = start; i < candidates.length; i++) {
           current.add(candidates[i]);
           backtrack(candidates, remain - candidates[i], i, current, result);
           current.remove(current.size() - 1);
       }
   }
   ```
   - Time: O(2^n)
   - Pattern: Backtracking with repetition allowed

10. **Word Search (LC 79)** - Medium
    ```java
    boolean exist(char[][] board, String word) {
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (backtrack(board, word, i, j, 0)) return true;
            }
        }
        return false;
    }
    boolean backtrack(char[][] board, String word, int i, int j, int index) {
        if (index == word.length()) return true;
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;
        if (board[i][j] != word.charAt(index)) return false;
        
        char temp = board[i][j];
        board[i][j] = '#'; // Mark visited
        
        boolean found = backtrack(board, word, i+1, j, index+1) ||
                       backtrack(board, word, i-1, j, index+1) ||
                       backtrack(board, word, i, j+1, index+1) ||
                       backtrack(board, word, i, j-1, index+1);
        
        board[i][j] = temp; // Restore
        return found;
    }
    ```
    - Time: O(m × n × 4^L) where L = word length
    - Pattern: 2D backtracking with visited tracking

### Hard Problems (2)

11. **N-Queens (LC 51)** ⭐⭐ - Hard
    - See detailed solution above
    - Time: O(N!)
    - Pattern: Constraint-based backtracking

12. **Sudoku Solver (LC 37)** ⭐⭐ - Hard
    - See detailed solution above
    - Time: O(9^m) where m = empty cells
    - Pattern: 2D constraint validation

---

## 💡 Interview Tips

### 1. Always Identify Base Case First
**Interviewer loves this!** Start by asking: "What's the simplest input?"

### 2. Draw the Recursion Tree
Visualize the call stack on paper/whiteboard:
```
              fib(5)
           /         \
       fib(4)        fib(3)
      /     \        /     \
  fib(3)  fib(2)  fib(2)  fib(1)
```
This helps identify overlapping subproblems (DP opportunity).

### 3. Explain Time Complexity
- **Branching Factor:** How many recursive calls per level?
- **Depth:** How deep is the recursion?
- **Time = O(branches^depth)**

Examples:
- Fibonacci: O(2^n) - 2 branches, n depth
- N-Queens: O(N!) - N choices first row, N-1 second row...
- Binary Search: O(log n) - 1 branch, log n depth

### 4. Watch for Stack Overflow
Mention: "For large inputs, we might hit stack overflow. We could use iteration or increase stack size."

### 5. Optimize with Memoization
**Pattern:** If you see overlapping subproblems, suggest memoization.

```java
// Naive fibonacci: O(2^n)
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

// With memoization: O(n)
Map<Integer, Integer> memo = new HashMap<>();
int fib(int n) {
    if (n <= 1) return n;
    if (memo.containsKey(n)) return memo.get(n);
    int result = fib(n-1) + fib(n-2);
    memo.put(n, result);
    return result;
}
```

### 6. Backtracking Checklist
- [ ] Make choice
- [ ] Recurse with updated state
- [ ] **UNDO choice (backtrack)**
- [ ] Add base case check
- [ ] Prune invalid branches early

---

## ⚠️ Common Mistakes

### Mistake 1: Missing Base Case
❌ Infinite recursion → Stack overflow
```java
int factorial(int n) {
    return n * factorial(n - 1); // WRONG! No base case
}
```
✅ Always have base case
```java
int factorial(int n) {
    if (n <= 1) return 1; // Base case
    return n * factorial(n - 1);
}
```

### Mistake 2: Not Making Progress
❌ Infinite recursion
```java
void solve(int n) {
    solve(n); // WRONG! Same input
}
```
✅ Modify input toward base case
```java
void solve(int n) {
    if (n == 0) return;
    solve(n - 1); // Progress toward 0
}
```

### Mistake 3: Forgetting to Backtrack
❌ Wrong results in backtracking
```java
void backtrack(List<Integer> current) {
    current.add(5);
    backtrack(current);
    // WRONG! Forgot to remove 5
}
```
✅ Always undo choices
```java
void backtrack(List<Integer> current) {
    current.add(5);
    backtrack(current);
    current.remove(current.size() - 1); // Backtrack
}
```

### Mistake 4: Modifying Original Data
❌ In-place modification without restore
```java
boolean search(char[][] board, int i, int j) {
    board[i][j] = '#'; // Mark visited
    return dfs(board, i+1, j);
    // WRONG! Forgot to restore
}
```
✅ Restore original state
```java
boolean search(char[][] board, int i, int j) {
    char temp = board[i][j];
    board[i][j] = '#';
    boolean found = dfs(board, i+1, j);
    board[i][j] = temp; // Restore
    return found;
}
```

### Mistake 5: Not Handling Edge Cases
Test with:
- Empty input: `[]`, `""`
- Single element: `[1]`, `"a"`
- Negative numbers: `-1`, `-100`
- Large inputs: Stack overflow concern

---

## 🎓 Summary

### Key Takeaways
1. **Recursion = Base Case + Recursive Case + Progress**
2. **Backtracking = Try + Recurse + Undo**
3. **Draw recursion tree to understand flow**
4. **Time complexity = branches^depth**
5. **Use memoization for overlapping subproblems**

### Problem Pattern Recognition
- "Generate all combinations" → Backtracking
- "Find all permutations" → Backtracking with state
- "Tree traversal" → Recursion
- "Divide problem in half" → Divide & conquer recursion
- "Can reuse elements" → Start index = current index
- "Cannot reuse elements" → Start index = current index + 1

### 12 Problems Solved
✅ 4 Easy: Fibonacci, Power of Two, Reverse String, Climbing Stairs  
✅ 6 Medium: Permutations, Subsets, Letter Combinations, Generate Parentheses, Combination Sum, Word Search  
✅ 2 Hard: N-Queens, Sudoku Solver

**Practice makes perfect! Recursion becomes intuitive with practice.** 🚀
