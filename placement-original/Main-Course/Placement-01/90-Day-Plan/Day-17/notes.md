# Day 17 Quick Reference: Recursion & Backtracking

## 🔄 Recursion Fundamentals

### Three Pillars of Recursion
1. **Base Case** - Stopping condition
2. **Recursive Case** - Function calls itself
3. **Progress** - Move toward base case

### Simple Recursion Template
```java
int recursion(int n) {
    // Base case
    if (n == 0) return 0;
    
    // Recursive case
    return n + recursion(n - 1);
}
```

---

## 🎯 Essential Patterns

### Pattern 1: Simple Recursion (Factorial)
```java
int factorial(int n) {
    if (n <= 1) return 1;  // Base
    return n * factorial(n - 1);  // Recursive
}
```
**Use:** Counting, mathematical functions

### Pattern 2: Multiple Calls (Fibonacci)
```java
int fib(int n) {
    if (n <= 1) return n;  // Base
    return fib(n-1) + fib(n-2);  // Two calls
}
```
**Use:** Tree-like problems, combinations

### Pattern 3: Two Pointers (Reverse String)
```java
void reverse(char[] s, int left, int right) {
    if (left >= right) return;  // Base
    swap(s[left], s[right]);
    reverse(s, left+1, right-1);  // Move inward
}
```
**Use:** Array/string manipulation

### Pattern 4: Divide & Conquer (Binary Search)
```java
int binarySearch(int[] arr, int target, int low, int high) {
    if (low > high) return -1;  // Base
    
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) return mid;
    
    // Recurse on one half
    if (arr[mid] < target)
        return binarySearch(arr, target, mid+1, high);
    else
        return binarySearch(arr, target, low, mid-1);
}
```
**Use:** Sorted data, logarithmic solutions

---

## 🎯 Backtracking Template

### Universal Backtracking Pattern
```java
void backtrack(state, choices, result) {
    // Base case: solution complete
    if (isComplete(state)) {
        result.add(copy(state));
        return;
    }
    
    // Try each choice
    for (choice : availableChoices) {
        // 1. Make choice
        state.add(choice);
        
        // 2. Recurse
        backtrack(state, newChoices, result);
        
        // 3. Undo choice (BACKTRACK)
        state.remove(choice);
    }
}
```

---

## 🏆 Classic Problems Quick Reference

### Permutations (LC 46)
```java
void backtrack(int[] nums, List<Integer> current, 
              boolean[] used, List<List<Integer>> result) {
    if (current.size() == nums.length) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        
        current.add(nums[i]);
        used[i] = true;
        backtrack(nums, current, used, result);
        current.remove(current.size() - 1);
        used[i] = false;
    }
}
```
**Key:** Use boolean array to track used elements

### Subsets (LC 78)
```java
void backtrack(int[] nums, int start, List<Integer> current,
              List<List<Integer>> result) {
    result.add(new ArrayList<>(current));  // Add every state!
    
    for (int i = start; i < nums.length; i++) {
        current.add(nums[i]);
        backtrack(nums, i + 1, current, result);
        current.remove(current.size() - 1);
    }
}
```
**Key:** Add current state before loop, use start index

### Generate Parentheses (LC 22)
```java
void backtrack(StringBuilder current, int open, int close, int max,
              List<String> result) {
    if (current.length() == max * 2) {
        result.add(current.toString());
        return;
    }
    
    if (open < max) {
        current.append('(');
        backtrack(current, open+1, close, max, result);
        current.deleteCharAt(current.length()-1);
    }
    
    if (close < open) {
        current.append(')');
        backtrack(current, open, close+1, max, result);
        current.deleteCharAt(current.length()-1);
    }
}
```
**Key:** Constraint-based choices (open < max, close < open)

### N-Queens (LC 51)
```java
void backtrack(char[][] board, int row, List<List<String>> result) {
    if (row == board.length) {
        result.add(construct(board));
        return;
    }
    
    for (int col = 0; col < board.length; col++) {
        if (isSafe(board, row, col)) {
            board[row][col] = 'Q';
            backtrack(board, row + 1, result);
            board[row][col] = '.';
        }
    }
}

boolean isSafe(char[][] board, int row, int col) {
    // Check column
    for (int i = 0; i < row; i++)
        if (board[i][col] == 'Q') return false;
    
    // Check diagonal (top-left)
    for (int i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--)
        if (board[i][j] == 'Q') return false;
    
    // Check diagonal (top-right)
    for (int i = row-1, j = col+1; i >= 0 && j < board.length; i--, j++)
        if (board[i][j] == 'Q') return false;
    
    return true;
}
```
**Key:** Check row, column, both diagonals

---

## ⚠️ Common Mistakes

### Mistake 1: Missing Base Case
❌ **Wrong:**
```java
int factorial(int n) {
    return n * factorial(n - 1);  // Infinite!
}
```
✅ **Correct:**
```java
int factorial(int n) {
    if (n <= 1) return 1;  // Base case
    return n * factorial(n - 1);
}
```

### Mistake 2: Not Making Progress
❌ **Wrong:**
```java
void solve(int n) {
    solve(n);  // Same input!
}
```
✅ **Correct:**
```java
void solve(int n) {
    if (n == 0) return;
    solve(n - 1);  // Decreasing
}
```

### Mistake 3: Forgetting to Backtrack
❌ **Wrong:**
```java
void backtrack(List<Integer> current) {
    current.add(5);
    backtrack(current);
    // FORGOT to remove 5!
}
```
✅ **Correct:**
```java
void backtrack(List<Integer> current) {
    current.add(5);
    backtrack(current);
    current.remove(current.size() - 1);  // Backtrack
}
```

### Mistake 4: Not Restoring State
❌ **Wrong:**
```java
boolean dfs(char[][] board, int i, int j) {
    board[i][j] = '#';  // Mark visited
    return dfs(board, i+1, j);
    // FORGOT to restore!
}
```
✅ **Correct:**
```java
boolean dfs(char[][] board, int i, int j) {
    char temp = board[i][j];
    board[i][j] = '#';
    boolean result = dfs(board, i+1, j);
    board[i][j] = temp;  // Restore
    return result;
}
```

---

## 💡 Optimization: Memoization

### Naive Fibonacci (O(2^n))
```java
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
```

### With Memoization (O(n))
```java
Map<Integer, Integer> memo = new HashMap<>();

int fib(int n) {
    if (n <= 1) return n;
    if (memo.containsKey(n)) return memo.get(n);
    
    int result = fib(n-1) + fib(n-2);
    memo.put(n, result);
    return result;
}
```

**Speedup:** fib(40) goes from 1 second to 1 microsecond!

---

## 📊 Time Complexity Quick Reference

| Pattern | Time Complexity | Example |
|---------|----------------|---------|
| Linear recursion | O(n) | Factorial |
| Binary recursion | O(2^n) | Fibonacci |
| With memoization | O(n) | Fibonacci memo |
| Binary search | O(log n) | Divide & conquer |
| Permutations | O(n!) | All permutations |
| Subsets | O(2^n) | Power set |
| N-Queens | O(N!) | N queens |

---

## 🎯 12 Problems Summary

### Easy (4)
1. **Fibonacci (LC 509)** - O(2^n) → O(n) with memo
2. **Power of Two (LC 231)** - O(log n)
3. **Reverse String (LC 344)** - O(n)
4. **Climbing Stairs (LC 70)** - Fibonacci variant

### Medium (6)
5. **Permutations (LC 46)** - O(n!)
6. **Subsets (LC 78)** - O(2^n)
7. **Letter Combinations (LC 17)** - O(4^n)
8. **Generate Parentheses (LC 22)** - O(4^n / √n)
9. **Combination Sum (LC 39)** - O(2^n)
10. **Word Search (LC 79)** - O(m × n × 4^L)

### Hard (2)
11. **N-Queens (LC 51)** - O(N!)
12. **Sudoku Solver (LC 37)** - O(9^m)

---

## 🔥 Interview Checklist

Before coding:
- [ ] Identify base case(s)
- [ ] Define recursive case
- [ ] Ensure progress toward base
- [ ] Consider space complexity (call stack)
- [ ] Check for overlapping subproblems (memoization?)

During backtracking:
- [ ] Make choice
- [ ] Recurse
- [ ] Undo choice (CRITICAL!)
- [ ] Handle edge cases
- [ ] Prune invalid branches

---

## 🎓 Key Insights

1. **Recursion = Trust!** Assume recursion works for smaller input
2. **Always draw the tree** - Visualize before coding
3. **Space matters** - O(depth) call stack
4. **Memoization is magic** - Exponential → Linear
5. **Backtracking = DFS** - Explore all paths, undo when stuck

---

**Master these patterns and you'll ace any recursion interview!** 🚀
