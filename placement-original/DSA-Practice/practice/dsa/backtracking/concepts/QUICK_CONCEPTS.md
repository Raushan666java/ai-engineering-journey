# Backtracking: Quick Concepts Guide

## Table of Contents
1. [Introduction to Backtracking](#introduction-to-backtracking)
2. [Backtracking Template](#backtracking-template)
3. [Combination Problems](#combination-problems)
4. [Permutation Problems](#permutation-problems)
5. [Subset Problems](#subset-problems)
6. [Constraint Satisfaction Problems](#constraint-satisfaction-problems)
7. [String Backtracking](#string-backtracking)
8. [2D Grid Backtracking](#2d-grid-backtracking)
9. [Optimization Techniques](#optimization-techniques)
10. [Time and Space Complexity](#time-and-space-complexity)

## Introduction to Backtracking

Backtracking is a systematic way to iterate through all possible configurations of a search space. It builds candidates for solutions incrementally and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot possibly be extended to a valid solution.

### Key Characteristics:
- **Incremental Construction**: Build solution step by step
- **Pruning**: Stop exploring branches that won't lead to solutions
- **Recursive**: Natural fit for recursive implementation
- **Exploration**: Try all possibilities systematically

### When to Use Backtracking:
- Need to find all possible solutions
- Problem can be broken down into subproblems
- Need to explore combinations/permutations
- Constraint satisfaction problems

## Backtracking Template

### Basic Template Structure:
```java
public class BacktrackingTemplate {
    private List<List<Integer>> result = new ArrayList<>();

    public List<List<Integer>> backtrackMethod(int[] nums) {
        List<Integer> current = new ArrayList<>();
        backtrack(current, nums, 0);
        return result;
    }

    private void backtrack(List<Integer> current, int[] nums, int start) {
        // 1. Base case - add current solution to result
        result.add(new ArrayList<>(current));

        // 2. Explore all possibilities
        for (int i = start; i < nums.length; i++) {
            // 3. Make choice
            current.add(nums[i]);

            // 4. Recurse with updated state
            backtrack(current, nums, i + 1);

            // 5. Backtrack - undo choice
            current.remove(current.size() - 1);
        }
    }
}
```

### Template Components:
1. **Result Collection**: Store valid solutions
2. **Current State**: Track current partial solution
3. **Choice Making**: Select next element/decision
4. **Recursive Call**: Explore deeper with choice
5. **Backtracking**: Undo choice for next alternative

## Combination Problems

### Problem: Generate all combinations of size k
```java
class Combinations {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), 1, n, k);
        return result;
    }

    private void backtrack(List<List<Integer>> result, List<Integer> current,
                          int start, int n, int k) {
        if (current.size() == k) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = start; i <= n; i++) {
            current.add(i);
            backtrack(result, current, i + 1, n, k);
            current.remove(current.size() - 1);
        }
    }
}
```

### Key Insights:
- Use `start` parameter to avoid duplicates
- Base case: when current size equals k
- Each number used at most once

## Permutation Problems

### Problem: Generate all permutations
```java
class Permutations {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), new boolean[nums.length], nums);
        return result;
    }

    private void backtrack(List<List<Integer>> result, List<Integer> current,
                          boolean[] used, int[] nums) {
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            current.add(nums[i]);
            backtrack(result, current, used, nums);
            current.remove(current.size() - 1);
            used[i] = false;
        }
    }
}
```

### Key Insights:
- Use boolean array to track used elements
- Each element used exactly once
- No start parameter needed

## Subset Problems

### Problem: Generate all subsets
```java
class Subsets {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), nums, 0);
        return result;
    }

    private void backtrack(List<List<Integer>> result, List<Integer> current,
                          int[] nums, int start) {
        result.add(new ArrayList<>(current));

        for (int i = start; i < nums.length; i++) {
            current.add(nums[i]);
            backtrack(result, current, nums, i + 1);
            current.remove(current.size() - 1);
        }
    }
}
```

### Handling Duplicates:
```java
class SubsetsII {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), nums, 0);
        return result;
    }

    private void backtrack(List<List<Integer>> result, List<Integer> current,
                          int[] nums, int start) {
        result.add(new ArrayList<>(current));

        for (int i = start; i < nums.length; i++) {
            // Skip duplicates
            if (i > start && nums[i] == nums[i - 1]) continue;

            current.add(nums[i]);
            backtrack(result, current, nums, i + 1);
            current.remove(current.size() - 1);
        }
    }
}
```

## Constraint Satisfaction Problems

### N-Queens Problem:
```java
class NQueens {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        char[][] board = new char[n][n];
        for (char[] row : board) Arrays.fill(row, '.');

        backtrack(result, board, 0, n);
        return result;
    }

    private void backtrack(List<List<String>> result, char[][] board, int row, int n) {
        if (row == n) {
            result.add(constructBoard(board));
            return;
        }

        for (int col = 0; col < n; col++) {
            if (isValid(board, row, col, n)) {
                board[row][col] = 'Q';
                backtrack(result, board, row + 1, n);
                board[row][col] = '.';
            }
        }
    }

    private boolean isValid(char[][] board, int row, int col, int n) {
        // Check column
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 'Q') return false;
        }

        // Check diagonal
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') return false;
        }

        for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] == 'Q') return false;
        }

        return true;
    }
}
```

## String Backtracking

### Generate Parentheses:
```java
class GenerateParentheses {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        backtrack(result, new StringBuilder(), 0, 0, n);
        return result;
    }

    private void backtrack(List<String> result, StringBuilder current,
                          int open, int close, int n) {
        if (current.length() == 2 * n) {
            result.add(current.toString());
            return;
        }

        if (open < n) {
            current.append('(');
            backtrack(result, current, open + 1, close, n);
            current.deleteCharAt(current.length() - 1);
        }

        if (close < open) {
            current.append(')');
            backtrack(result, current, open, close + 1, n);
            current.deleteCharAt(current.length() - 1);
        }
    }
}
```

### Palindrome Partitioning:
```java
class PalindromePartitioning {
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), s, 0);
        return result;
    }

    private void backtrack(List<List<String>> result, List<String> current,
                          String s, int start) {
        if (start == s.length()) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int end = start + 1; end <= s.length(); end++) {
            String substring = s.substring(start, end);
            if (isPalindrome(substring)) {
                current.add(substring);
                backtrack(result, current, s, end);
                current.remove(current.size() - 1);
            }
        }
    }

    private boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left++) != s.charAt(right--)) return false;
        }
        return true;
    }
}
```

## 2D Grid Backtracking

### Word Search:
```java
class WordSearch {
    public boolean exist(char[][] board, String word) {
        int m = board.length, n = board[0].length;
        boolean[][] visited = new boolean[m][n];

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == word.charAt(0) &&
                    backtrack(board, word, visited, i, j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }

    private boolean backtrack(char[][] board, String word, boolean[][] visited,
                             int i, int j, int index) {
        if (index == word.length()) return true;

        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length ||
            visited[i][j] || board[i][j] != word.charAt(index)) {
            return false;
        }

        visited[i][j] = true;

        // Try all 4 directions
        boolean found = backtrack(board, word, visited, i + 1, j, index + 1) ||
                       backtrack(board, word, visited, i - 1, j, index + 1) ||
                       backtrack(board, word, visited, i, j + 1, index + 1) ||
                       backtrack(board, word, visited, i, j - 1, index + 1);

        visited[i][j] = false;
        return found;
    }
}
```

## Optimization Techniques

### 1. Pruning with Bounds:
```java
private void backtrackWithPruning(List<Integer> current, int[] candidates,
                                 int target, int start) {
    if (target < 0) return; // Prune: exceeded target
    if (target == 0) {
        result.add(new ArrayList<>(current));
        return;
    }

    for (int i = start; i < candidates.length; i++) {
        if (candidates[i] > target) break; // Prune: too big

        current.add(candidates[i]);
        backtrackWithPruning(current, candidates, target - candidates[i], i);
        current.remove(current.size() - 1);
    }
}
```

### 2. Early Termination:
```java
private void backtrackWithLimit(List<Integer> current, int[] nums, int start, int limit) {
    if (result.size() >= limit) return; // Early termination

    if (current.size() == targetSize) {
        result.add(new ArrayList<>(current));
        return;
    }

    for (int i = start; i < nums.length; i++) {
        current.add(nums[i]);
        backtrackWithLimit(current, nums, i + 1, limit);
        current.remove(current.size() - 1);
    }
}
```

### 3. State Compression:
```java
private void backtrackWithState(int state, int n) {
    if (state == (1 << n) - 1) { // All bits set
        result.add(new ArrayList<>(current));
        return;
    }

    for (int i = 0; i < n; i++) {
        if ((state & (1 << i)) == 0) { // Bit not set
            current.add(i);
            backtrackWithState(state | (1 << i), n);
            current.remove(current.size() - 1);
        }
    }
}
```

## Time and Space Complexity

### Time Complexity:
- **Combinations**: O(2^n) - each element included/excluded
- **Permutations**: O(n!) - all arrangements
- **Subsets**: O(2^n) - power set
- **Constraint Satisfaction**: Variable - depends on pruning

### Space Complexity:
- **Recursion Stack**: O(n) - maximum depth
- **Result Storage**: O(2^n * n) - storing all solutions
- **State Tracking**: O(n) - current path, used arrays

### Optimization Strategies:
1. **Pruning**: Reduce search space with constraints
2. **Memoization**: Cache results for repeated subproblems
3. **Iterative**: Convert to iterative when possible
4. **Bit Manipulation**: Use bitmasks for state representation

## Common Patterns Summary

| Problem Type | Key Characteristics | Template Pattern |
|-------------|-------------------|------------------|
| Combinations | Choose k from n, order doesn't matter | Start index, no duplicates |
| Permutations | All arrangements, order matters | Used array, all elements |
| Subsets | Power set, all possible subsets | Include/exclude each element |
| Constraint | Additional validation required | Validation function |
| String | Build strings with constraints | StringBuilder, character choices |
| Grid | 2D movement with boundaries | Direction arrays, visited matrix |

## Practice Problems by Difficulty

### Easy:
1. Subsets
2. Permutations
3. Combination Sum
4. Generate Parentheses

### Medium:
1. Subsets II
2. Combination Sum II
3. Word Search
4. Palindrome Partitioning
5. Restore IP Addresses

### Hard:
1. N-Queens
2. Sudoku Solver
3. Word Break II
4. Expression Add Operators
5. Remove Invalid Parentheses

Remember: Backtracking problems require understanding the problem constraints, choosing the right state representation, and implementing proper pruning to avoid exponential time complexity.