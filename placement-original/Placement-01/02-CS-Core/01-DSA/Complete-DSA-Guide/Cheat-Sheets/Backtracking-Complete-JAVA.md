# 🔄 Backtracking - Complete Question Set (Love Babbar + Striver)
## Total: 35 Questions with Java Solutions & Theory

---

## 📋 Theory & Patterns

### Backtracking Fundamentals:
1. **Systematic Search** - Explore all possible solutions
2. **Incremental Building** - Build solution step by step
3. **Backtrack on Failure** - Undo choices when they lead to dead ends
4. **Pruning** - Avoid exploring invalid paths early
5. **State Space Tree** - Represents all possible states

### Backtracking Template:
```java
public void backtrack(parameters) {
    // Base case
    if (isValidSolution(currentSolution)) {
        processSolution(currentSolution);
        return;
    }
    
    // Try all possible choices
    for (choice : getAllChoices(currentState)) {
        if (isValidChoice(choice)) {
            makeChoice(choice);           // Choose
            backtrack(newParameters);     // Explore
            undoChoice(choice);           // Backtrack
        }
    }
}
```

### Key Concepts:
- **Decision Tree** - Each node represents a decision
- **Feasibility Check** - Valid choice at current step
- **Bounding Function** - Early termination of unpromising branches
- **State Management** - Track current partial solution

### Common Patterns:
1. **Permutation Generation** - All arrangements of elements
2. **Combination Generation** - All subsets of elements
3. **N-Queens** - Constraint satisfaction problems
4. **Sudoku Solving** - Fill grid with constraints
5. **Path Finding** - Navigate through maze/grid

### Optimization Techniques:
```java
// Pattern 1: Early Pruning
public boolean backtrackWithPruning(state) {
    if (isInvalidState(state)) {
        return false; // Prune early
    }
    
    if (isGoalState(state)) {
        return true;
    }
    
    for (choice : getChoices()) {
        if (isPromising(choice)) {
            makeChoice(choice);
            if (backtrackWithPruning(newState)) {
                return true;
            }
            undoChoice(choice);
        }
    }
    
    return false;
}

// Pattern 2: Memoization (when subproblems overlap)
Map<String, Boolean> memo = new HashMap<>();

public boolean backtrackWithMemo(state) {
    String key = stateToString(state);
    if (memo.containsKey(key)) {
        return memo.get(key);
    }
    
    boolean result = solve(state);
    memo.put(key, result);
    return result;
}
```

---

## 💡 Love Babbar Backtracking Questions (370-388)

### 370. N-Queens Problem
**Problem**: Place N queens on N×N board such that no two attack each other  
**Difficulty**: Hard  
**Pattern**: Constraint Satisfaction with Backtracking

```java
public List<List<String>> solveNQueens(int n) {
    List<List<String>> solutions = new ArrayList<>();
    int[] queens = new int[n]; // queens[i] = column of queen in row i
    Arrays.fill(queens, -1);
    
    solveNQueensHelper(0, n, queens, solutions);
    return solutions;
}

private void solveNQueensHelper(int row, int n, int[] queens, List<List<String>> solutions) {
    if (row == n) {
        // Found a valid solution
        solutions.add(constructBoard(queens));
        return;
    }
    
    for (int col = 0; col < n; col++) {
        if (isSafe(queens, row, col)) {
            queens[row] = col;                    // Place queen
            solveNQueensHelper(row + 1, n, queens, solutions); // Recurse
            queens[row] = -1;                     // Backtrack
        }
    }
}

private boolean isSafe(int[] queens, int row, int col) {
    for (int i = 0; i < row; i++) {
        int prevCol = queens[i];
        
        // Check column conflict
        if (prevCol == col) {
            return false;
        }
        
        // Check diagonal conflicts
        if (Math.abs(prevCol - col) == Math.abs(i - row)) {
            return false;
        }
    }
    
    return true;
}

private List<String> constructBoard(int[] queens) {
    List<String> board = new ArrayList<>();
    int n = queens.length;
    
    for (int i = 0; i < n; i++) {
        StringBuilder row = new StringBuilder();
        for (int j = 0; j < n; j++) {
            if (queens[i] == j) {
                row.append('Q');
            } else {
                row.append('.');
            }
        }
        board.add(row.toString());
    }
    
    return board;
}

// Optimized version using sets for O(1) conflict checking
public List<List<String>> solveNQueensOptimized(int n) {
    List<List<String>> solutions = new ArrayList<>();
    int[] queens = new int[n];
    Set<Integer> cols = new HashSet<>();
    Set<Integer> diag1 = new HashSet<>();  // row - col
    Set<Integer> diag2 = new HashSet<>();  // row + col
    
    solveNQueensOptimizedHelper(0, n, queens, cols, diag1, diag2, solutions);
    return solutions;
}

private void solveNQueensOptimizedHelper(int row, int n, int[] queens,
                                       Set<Integer> cols, Set<Integer> diag1, Set<Integer> diag2,
                                       List<List<String>> solutions) {
    if (row == n) {
        solutions.add(constructBoard(queens));
        return;
    }
    
    for (int col = 0; col < n; col++) {
        if (!cols.contains(col) && !diag1.contains(row - col) && !diag2.contains(row + col)) {
            queens[row] = col;
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);
            
            solveNQueensOptimizedHelper(row + 1, n, queens, cols, diag1, diag2, solutions);
            
            // Backtrack
            queens[row] = -1;
            cols.remove(col);
            diag1.remove(row - col);
            diag2.remove(row + col);
        }
    }
}

// Count total solutions without storing them
public int totalNQueens(int n) {
    return countNQueens(0, n, new boolean[n], new boolean[2 * n - 1], new boolean[2 * n - 1]);
}

private int countNQueens(int row, int n, boolean[] cols, boolean[] diag1, boolean[] diag2) {
    if (row == n) {
        return 1;
    }
    
    int count = 0;
    for (int col = 0; col < n; col++) {
        int d1 = row - col + n - 1;
        int d2 = row + col;
        
        if (!cols[col] && !diag1[d1] && !diag2[d2]) {
            cols[col] = diag1[d1] = diag2[d2] = true;
            count += countNQueens(row + 1, n, cols, diag1, diag2);
            cols[col] = diag1[d1] = diag2[d2] = false;
        }
    }
    
    return count;
}
```
**Time**: O(N!), **Space**: O(N)

---

### 371. Sudoku Solver
**Problem**: Fill 9×9 Sudoku grid following rules  
**Difficulty**: Hard  
**Pattern**: Constraint Satisfaction with Validation

```java
public void solveSudoku(char[][] board) {
    solveSudokuHelper(board);
}

private boolean solveSudokuHelper(char[][] board) {
    for (int row = 0; row < 9; row++) {
        for (int col = 0; col < 9; col++) {
            if (board[row][col] == '.') {
                for (char digit = '1'; digit <= '9'; digit++) {
                    if (isValid(board, row, col, digit)) {
                        board[row][col] = digit;           // Place digit
                        
                        if (solveSudokuHelper(board)) {    // Recurse
                            return true;
                        }
                        
                        board[row][col] = '.';             // Backtrack
                    }
                }
                return false; // No valid digit found for this cell
            }
        }
    }
    return true; // All cells filled successfully
}

private boolean isValid(char[][] board, int row, int col, char digit) {
    // Check row
    for (int c = 0; c < 9; c++) {
        if (board[row][c] == digit) {
            return false;
        }
    }
    
    // Check column
    for (int r = 0; r < 9; r++) {
        if (board[r][col] == digit) {
            return false;
        }
    }
    
    // Check 3×3 box
    int boxRow = (row / 3) * 3;
    int boxCol = (col / 3) * 3;
    
    for (int r = boxRow; r < boxRow + 3; r++) {
        for (int c = boxCol; c < boxCol + 3; c++) {
            if (board[r][c] == digit) {
                return false;
            }
        }
    }
    
    return true;
}

// Optimized version with constraint tracking
public void solveSudokuOptimized(char[][] board) {
    boolean[][] rows = new boolean[9][10];    // rows[i][digit] = true if digit is used in row i
    boolean[][] cols = new boolean[9][10];    // cols[j][digit] = true if digit is used in col j
    boolean[][] boxes = new boolean[9][10];   // boxes[k][digit] = true if digit is used in box k
    
    List<int[]> emptyCells = new ArrayList<>();
    
    // Initialize constraint sets and find empty cells
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                emptyCells.add(new int[]{i, j});
            } else {
                int digit = board[i][j] - '0';
                rows[i][digit] = true;
                cols[j][digit] = true;
                boxes[getBoxIndex(i, j)][digit] = true;
            }
        }
    }
    
    solveSudokuOptimizedHelper(board, emptyCells, 0, rows, cols, boxes);
}

private boolean solveSudokuOptimizedHelper(char[][] board, List<int[]> emptyCells, int index,
                                         boolean[][] rows, boolean[][] cols, boolean[][] boxes) {
    if (index == emptyCells.size()) {
        return true; // All empty cells filled
    }
    
    int[] cell = emptyCells.get(index);
    int row = cell[0], col = cell[1];
    int boxIndex = getBoxIndex(row, col);
    
    for (int digit = 1; digit <= 9; digit++) {
        if (!rows[row][digit] && !cols[col][digit] && !boxes[boxIndex][digit]) {
            // Place digit
            board[row][col] = (char) ('0' + digit);
            rows[row][digit] = cols[col][digit] = boxes[boxIndex][digit] = true;
            
            if (solveSudokuOptimizedHelper(board, emptyCells, index + 1, rows, cols, boxes)) {
                return true;
            }
            
            // Backtrack
            board[row][col] = '.';
            rows[row][digit] = cols[col][digit] = boxes[boxIndex][digit] = false;
        }
    }
    
    return false;
}

private int getBoxIndex(int row, int col) {
    return (row / 3) * 3 + col / 3;
}

// Find cell with minimum possible values (MRV heuristic)
private int[] findBestCell(char[][] board, boolean[][] rows, boolean[][] cols, boolean[][] boxes) {
    int minChoices = 10;
    int[] bestCell = null;
    
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                int choices = 0;
                int boxIndex = getBoxIndex(i, j);
                
                for (int digit = 1; digit <= 9; digit++) {
                    if (!rows[i][digit] && !cols[j][digit] && !boxes[boxIndex][digit]) {
                        choices++;
                    }
                }
                
                if (choices < minChoices) {
                    minChoices = choices;
                    bestCell = new int[]{i, j};
                    
                    if (choices == 0) {
                        return bestCell; // Dead end
                    }
                }
            }
        }
    }
    
    return bestCell;
}
```
**Time**: O(9^(n×n)), **Space**: O(n×n)

---

### 372. Word Break
**Problem**: Check if string can be segmented into dictionary words  
**Difficulty**: Medium  
**Pattern**: Backtracking with Memoization

```java
public boolean wordBreak(String s, List<String> wordDict) {
    Set<String> wordSet = new HashSet<>(wordDict);
    Boolean[] memo = new Boolean[s.length()];
    return wordBreakHelper(s, 0, wordSet, memo);
}

private boolean wordBreakHelper(String s, int start, Set<String> wordSet, Boolean[] memo) {
    if (start == s.length()) {
        return true;
    }
    
    if (memo[start] != null) {
        return memo[start];
    }
    
    for (int end = start + 1; end <= s.length(); end++) {
        String prefix = s.substring(start, end);
        
        if (wordSet.contains(prefix) && wordBreakHelper(s, end, wordSet, memo)) {
            memo[start] = true;
            return true;
        }
    }
    
    memo[start] = false;
    return false;
}

// Return all possible word break combinations
public List<String> wordBreakII(String s, List<String> wordDict) {
    Set<String> wordSet = new HashSet<>(wordDict);
    Map<Integer, List<String>> memo = new HashMap<>();
    return wordBreakIIHelper(s, 0, wordSet, memo);
}

private List<String> wordBreakIIHelper(String s, int start, Set<String> wordSet,
                                      Map<Integer, List<String>> memo) {
    if (memo.containsKey(start)) {
        return memo.get(start);
    }
    
    List<String> result = new ArrayList<>();
    
    if (start == s.length()) {
        result.add("");
        return result;
    }
    
    for (int end = start + 1; end <= s.length(); end++) {
        String prefix = s.substring(start, end);
        
        if (wordSet.contains(prefix)) {
            List<String> suffixes = wordBreakIIHelper(s, end, wordSet, memo);
            
            for (String suffix : suffixes) {
                if (suffix.isEmpty()) {
                    result.add(prefix);
                } else {
                    result.add(prefix + " " + suffix);
                }
            }
        }
    }
    
    memo.put(start, result);
    return result;
}

// Optimized with early pruning
public boolean wordBreakWithPruning(String s, List<String> wordDict) {
    Set<String> wordSet = new HashSet<>(wordDict);
    boolean[] canBreak = new boolean[s.length() + 1];
    canBreak[s.length()] = true;
    
    // Check if substring s[i:] can be broken
    for (int i = s.length() - 1; i >= 0; i--) {
        for (String word : wordDict) {
            if (i + word.length() <= s.length() && 
                s.substring(i, i + word.length()).equals(word) && 
                canBreak[i + word.length()]) {
                canBreak[i] = true;
                break;
            }
        }
    }
    
    return canBreak[0];
}
```
**Time**: O(n² × m), **Space**: O(n)

---

### 373. Generate Parentheses
**Problem**: Generate all valid parentheses combinations  
**Difficulty**: Medium  
**Pattern**: Recursive Generation with Constraints

```java
public List<String> generateParenthesis(int n) {
    List<String> result = new ArrayList<>();
    generateParenthesisHelper(result, "", 0, 0, n);
    return result;
}

private void generateParenthesisHelper(List<String> result, String current, 
                                     int open, int close, int n) {
    if (current.length() == 2 * n) {
        result.add(current);
        return;
    }
    
    if (open < n) {
        generateParenthesisHelper(result, current + "(", open + 1, close, n);
    }
    
    if (close < open) {
        generateParenthesisHelper(result, current + ")", open, close + 1, n);
    }
}

// Using StringBuilder for efficiency
public List<String> generateParenthesisOptimized(int n) {
    List<String> result = new ArrayList<>();
    generateParenthesisOptimizedHelper(result, new StringBuilder(), 0, 0, n);
    return result;
}

private void generateParenthesisOptimizedHelper(List<String> result, StringBuilder current,
                                              int open, int close, int n) {
    if (current.length() == 2 * n) {
        result.add(current.toString());
        return;
    }
    
    if (open < n) {
        current.append('(');
        generateParenthesisOptimizedHelper(result, current, open + 1, close, n);
        current.deleteCharAt(current.length() - 1); // Backtrack
    }
    
    if (close < open) {
        current.append(')');
        generateParenthesisOptimizedHelper(result, current, open, close + 1, n);
        current.deleteCharAt(current.length() - 1); // Backtrack
    }
}

// Generate parentheses with different types
public List<String> generateMixedParentheses(int round, int square, int curly) {
    List<String> result = new ArrayList<>();
    char[] types = {'(', '[', '{'};
    char[] closing = {')', ']', '}'};
    int[] counts = {round, square, curly};
    
    generateMixedHelper(result, new StringBuilder(), new Stack<>(), 
                       types, closing, counts, new int[3]);
    return result;
}

private void generateMixedHelper(List<String> result, StringBuilder current, Stack<Integer> stack,
                               char[] types, char[] closing, int[] total, int[] used) {
    if (current.length() == 2 * (total[0] + total[1] + total[2])) {
        if (stack.isEmpty()) {
            result.add(current.toString());
        }
        return;
    }
    
    // Try opening brackets
    for (int i = 0; i < 3; i++) {
        if (used[i] < total[i]) {
            current.append(types[i]);
            stack.push(i);
            used[i]++;
            
            generateMixedHelper(result, current, stack, types, closing, total, used);
            
            // Backtrack
            current.deleteCharAt(current.length() - 1);
            stack.pop();
            used[i]--;
        }
    }
    
    // Try closing bracket
    if (!stack.isEmpty()) {
        int type = stack.peek();
        current.append(closing[type]);
        stack.pop();
        
        generateMixedHelper(result, current, stack, types, closing, total, used);
        
        // Backtrack
        current.deleteCharAt(current.length() - 1);
        stack.push(type);
    }
}
```
**Time**: O(4ⁿ/√n), **Space**: O(n)

---

### 374. Permutations
**Problem**: Generate all permutations of array  
**Difficulty**: Medium  
**Pattern**: Element Swapping Backtracking

```java
public List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    permuteHelper(nums, 0, result);
    return result;
}

private void permuteHelper(int[] nums, int start, List<List<Integer>> result) {
    if (start == nums.length) {
        result.add(Arrays.stream(nums).boxed().collect(Collectors.toList()));
        return;
    }
    
    for (int i = start; i < nums.length; i++) {
        swap(nums, start, i);                    // Choose
        permuteHelper(nums, start + 1, result);  // Explore
        swap(nums, start, i);                    // Backtrack
    }
}

private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

// Permutations with duplicates
public List<List<Integer>> permuteUnique(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums); // Sort to handle duplicates
    boolean[] used = new boolean[nums.length];
    permuteUniqueHelper(nums, new ArrayList<>(), used, result);
    return result;
}

private void permuteUniqueHelper(int[] nums, List<Integer> current, boolean[] used,
                                List<List<Integer>> result) {
    if (current.size() == nums.length) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        
        // Skip duplicates: if current element is same as previous and previous is not used
        if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;
        
        used[i] = true;
        current.add(nums[i]);
        
        permuteUniqueHelper(nums, current, used, result);
        
        // Backtrack
        current.remove(current.size() - 1);
        used[i] = false;
    }
}

// Generate k-length permutations
public List<List<Integer>> permuteK(int[] nums, int k) {
    List<List<Integer>> result = new ArrayList<>();
    boolean[] used = new boolean[nums.length];
    permuteKHelper(nums, k, new ArrayList<>(), used, result);
    return result;
}

private void permuteKHelper(int[] nums, int k, List<Integer> current, boolean[] used,
                          List<List<Integer>> result) {
    if (current.size() == k) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int i = 0; i < nums.length; i++) {
        if (!used[i]) {
            used[i] = true;
            current.add(nums[i]);
            
            permuteKHelper(nums, k, current, used, result);
            
            // Backtrack
            current.remove(current.size() - 1);
            used[i] = false;
        }
    }
}

// Next lexicographic permutation
public boolean nextPermutation(int[] nums) {
    int i = nums.length - 2;
    
    // Find first decreasing element from right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    if (i >= 0) {
        int j = nums.length - 1;
        
        // Find element just larger than nums[i]
        while (nums[j] <= nums[i]) {
            j--;
        }
        
        swap(nums, i, j);
    }
    
    // Reverse suffix
    reverse(nums, i + 1);
    
    return i >= 0;
}

private void reverse(int[] nums, int start) {
    int end = nums.length - 1;
    while (start < end) {
        swap(nums, start++, end--);
    }
}
```
**Time**: O(n × n!), **Space**: O(n)

---

### 375. Combinations
**Problem**: Generate all k-combinations from n numbers  
**Difficulty**: Medium  
**Pattern**: Choose/Don't Choose Backtracking

```java
public List<List<Integer>> combine(int n, int k) {
    List<List<Integer>> result = new ArrayList<>();
    combineHelper(1, n, k, new ArrayList<>(), result);
    return result;
}

private void combineHelper(int start, int n, int k, List<Integer> current,
                          List<List<Integer>> result) {
    if (current.size() == k) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    // Pruning: if we can't get enough elements, return early
    if (current.size() + (n - start + 1) < k) {
        return;
    }
    
    for (int i = start; i <= n; i++) {
        current.add(i);
        combineHelper(i + 1, n, k, current, result);
        current.remove(current.size() - 1); // Backtrack
    }
}

// Alternative approach: choose or don't choose
public List<List<Integer>> combineChoose(int n, int k) {
    List<List<Integer>> result = new ArrayList<>();
    combineChooseHelper(1, n, k, new ArrayList<>(), result);
    return result;
}

private void combineChooseHelper(int num, int n, int k, List<Integer> current,
                                List<List<Integer>> result) {
    if (current.size() == k) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    if (num > n) {
        return;
    }
    
    // Choose current number
    current.add(num);
    combineChooseHelper(num + 1, n, k, current, result);
    current.remove(current.size() - 1);
    
    // Don't choose current number
    combineChooseHelper(num + 1, n, k, current, result);
}

// Combinations from array with duplicates
public List<List<Integer>> combinationSum2(int[] candidates, int target) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(candidates);
    combinationSum2Helper(candidates, target, 0, new ArrayList<>(), result);
    return result;
}

private void combinationSum2Helper(int[] candidates, int target, int start,
                                  List<Integer> current, List<List<Integer>> result) {
    if (target == 0) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int i = start; i < candidates.length && candidates[i] <= target; i++) {
        // Skip duplicates
        if (i > start && candidates[i] == candidates[i - 1]) continue;
        
        current.add(candidates[i]);
        combinationSum2Helper(candidates, target - candidates[i], i + 1, current, result);
        current.remove(current.size() - 1);
    }
}

// Combination sum with unlimited use
public List<List<Integer>> combinationSum(int[] candidates, int target) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(candidates);
    combinationSumHelper(candidates, target, 0, new ArrayList<>(), result);
    return result;
}

private void combinationSumHelper(int[] candidates, int target, int start,
                                 List<Integer> current, List<List<Integer>> result) {
    if (target == 0) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int i = start; i < candidates.length && candidates[i] <= target; i++) {
        current.add(candidates[i]);
        // Can reuse same element, so pass i instead of i+1
        combinationSumHelper(candidates, target - candidates[i], i, current, result);
        current.remove(current.size() - 1);
    }
}
```
**Time**: O(C(n,k) × k), **Space**: O(k)

---

## 🚀 Striver Backtracking Questions

### S1. Rat in a Maze
**Problem**: Find path from top-left to bottom-right in maze  
**Difficulty**: Medium  
**Pattern**: Grid Traversal with Backtracking

```java
public List<String> findPath(int[][] maze) {
    List<String> result = new ArrayList<>();
    int n = maze.length;
    
    if (maze[0][0] == 0 || maze[n-1][n-1] == 0) {
        return result;
    }
    
    boolean[][] visited = new boolean[n][n];
    findPathHelper(maze, 0, 0, "", visited, result);
    return result;
}

private void findPathHelper(int[][] maze, int row, int col, String path,
                           boolean[][] visited, List<String> result) {
    int n = maze.length;
    
    // Base case: reached destination
    if (row == n - 1 && col == n - 1) {
        result.add(path);
        return;
    }
    
    // Mark current cell as visited
    visited[row][col] = true;
    
    // Try all 4 directions: Down, Left, Right, Up (lexicographic order)
    int[][] directions = {{1, 0}, {0, -1}, {0, 1}, {-1, 0}};
    char[] moves = {'D', 'L', 'R', 'U'};
    
    for (int i = 0; i < 4; i++) {
        int newRow = row + directions[i][0];
        int newCol = col + directions[i][1];
        
        if (isValid(maze, newRow, newCol, visited)) {
            findPathHelper(maze, newRow, newCol, path + moves[i], visited, result);
        }
    }
    
    // Backtrack
    visited[row][col] = false;
}

private boolean isValid(int[][] maze, int row, int col, boolean[][] visited) {
    int n = maze.length;
    return row >= 0 && row < n && col >= 0 && col < n && 
           maze[row][col] == 1 && !visited[row][col];
}

// Find shortest path length
public int shortestPath(int[][] maze) {
    int n = maze.length;
    
    if (maze[0][0] == 0 || maze[n-1][n-1] == 0) {
        return -1;
    }
    
    Queue<int[]> queue = new LinkedList<>();
    boolean[][] visited = new boolean[n][n];
    
    queue.offer(new int[]{0, 0, 0}); // row, col, distance
    visited[0][0] = true;
    
    int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    
    while (!queue.isEmpty()) {
        int[] current = queue.poll();
        int row = current[0], col = current[1], dist = current[2];
        
        if (row == n - 1 && col == n - 1) {
            return dist;
        }
        
        for (int[] dir : directions) {
            int newRow = row + dir[0];
            int newCol = col + dir[1];
            
            if (isValid(maze, newRow, newCol, visited)) {
                visited[newRow][newCol] = true;
                queue.offer(new int[]{newRow, newCol, dist + 1});
            }
        }
    }
    
    return -1;
}

// Count all possible paths
public int countPaths(int[][] maze) {
    int n = maze.length;
    
    if (maze[0][0] == 0 || maze[n-1][n-1] == 0) {
        return 0;
    }
    
    boolean[][] visited = new boolean[n][n];
    return countPathsHelper(maze, 0, 0, visited);
}

private int countPathsHelper(int[][] maze, int row, int col, boolean[][] visited) {
    int n = maze.length;
    
    if (row == n - 1 && col == n - 1) {
        return 1;
    }
    
    visited[row][col] = true;
    int count = 0;
    
    int[][] directions = {{1, 0}, {0, -1}, {0, 1}, {-1, 0}};
    
    for (int[] dir : directions) {
        int newRow = row + dir[0];
        int newCol = col + dir[1];
        
        if (isValid(maze, newRow, newCol, visited)) {
            count += countPathsHelper(maze, newRow, newCol, visited);
        }
    }
    
    visited[row][col] = false; // Backtrack
    return count;
}
```
**Time**: O(4^(n²)), **Space**: O(n²)

---

### S2. Subset Generation
**Problem**: Generate all possible subsets  
**Difficulty**: Medium  
**Pattern**: Include/Exclude Backtracking

```java
public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    subsetsHelper(nums, 0, new ArrayList<>(), result);
    return result;
}

private void subsetsHelper(int[] nums, int start, List<Integer> current,
                          List<List<Integer>> result) {
    result.add(new ArrayList<>(current));
    
    for (int i = start; i < nums.length; i++) {
        current.add(nums[i]);
        subsetsHelper(nums, i + 1, current, result);
        current.remove(current.size() - 1); // Backtrack
    }
}

// Subsets with duplicates
public List<List<Integer>> subsetsWithDup(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    subsetsWithDupHelper(nums, 0, new ArrayList<>(), result);
    return result;
}

private void subsetsWithDupHelper(int[] nums, int start, List<Integer> current,
                                 List<List<Integer>> result) {
    result.add(new ArrayList<>(current));
    
    for (int i = start; i < nums.length; i++) {
        // Skip duplicates
        if (i > start && nums[i] == nums[i - 1]) continue;
        
        current.add(nums[i]);
        subsetsWithDupHelper(nums, i + 1, current, result);
        current.remove(current.size() - 1);
    }
}

// Iterative approach using bit manipulation
public List<List<Integer>> subsetsIterative(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    int n = nums.length;
    
    for (int mask = 0; mask < (1 << n); mask++) {
        List<Integer> subset = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            if ((mask & (1 << i)) != 0) {
                subset.add(nums[i]);
            }
        }
        
        result.add(subset);
    }
    
    return result;
}

// Generate subsets of specific size
public List<List<Integer>> subsetsOfSizeK(int[] nums, int k) {
    List<List<Integer>> result = new ArrayList<>();
    subsetsOfSizeKHelper(nums, 0, k, new ArrayList<>(), result);
    return result;
}

private void subsetsOfSizeKHelper(int[] nums, int start, int k, List<Integer> current,
                                 List<List<Integer>> result) {
    if (current.size() == k) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    // Pruning: not enough elements left
    if (current.size() + (nums.length - start) < k) {
        return;
    }
    
    for (int i = start; i < nums.length; i++) {
        current.add(nums[i]);
        subsetsOfSizeKHelper(nums, i + 1, k, current, result);
        current.remove(current.size() - 1);
    }
}
```
**Time**: O(2ⁿ × n), **Space**: O(n)

---

### S3. Palindrome Partitioning
**Problem**: Partition string into palindromic substrings  
**Difficulty**: Medium  
**Pattern**: String Partitioning with Validation

```java
public List<List<String>> partition(String s) {
    List<List<String>> result = new ArrayList<>();
    partitionHelper(s, 0, new ArrayList<>(), result);
    return result;
}

private void partitionHelper(String s, int start, List<String> current,
                           List<List<String>> result) {
    if (start == s.length()) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int end = start + 1; end <= s.length(); end++) {
        String substring = s.substring(start, end);
        
        if (isPalindrome(substring)) {
            current.add(substring);
            partitionHelper(s, end, current, result);
            current.remove(current.size() - 1); // Backtrack
        }
    }
}

private boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

// Optimized with precomputed palindrome table
public List<List<String>> partitionOptimized(String s) {
    int n = s.length();
    boolean[][] isPalin = new boolean[n][n];
    
    // Precompute palindrome table
    for (int i = 0; i < n; i++) {
        isPalin[i][i] = true; // Single characters are palindromes
    }
    
    for (int len = 2; len <= n; len++) {
        for (int i = 0; i <= n - len; i++) {
            int j = i + len - 1;
            
            if (s.charAt(i) == s.charAt(j)) {
                if (len == 2) {
                    isPalin[i][j] = true;
                } else {
                    isPalin[i][j] = isPalin[i + 1][j - 1];
                }
            }
        }
    }
    
    List<List<String>> result = new ArrayList<>();
    partitionOptimizedHelper(s, 0, isPalin, new ArrayList<>(), result);
    return result;
}

private void partitionOptimizedHelper(String s, int start, boolean[][] isPalin,
                                    List<String> current, List<List<String>> result) {
    if (start == s.length()) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int end = start; end < s.length(); end++) {
        if (isPalin[start][end]) {
            current.add(s.substring(start, end + 1));
            partitionOptimizedHelper(s, end + 1, isPalin, current, result);
            current.remove(current.size() - 1);
        }
    }
}

// Minimum cuts for palindrome partitioning
public int minCut(String s) {
    int n = s.length();
    boolean[][] isPalin = new boolean[n][n];
    
    // Build palindrome table
    for (int i = 0; i < n; i++) {
        isPalin[i][i] = true;
    }
    
    for (int len = 2; len <= n; len++) {
        for (int i = 0; i <= n - len; i++) {
            int j = i + len - 1;
            
            if (s.charAt(i) == s.charAt(j)) {
                isPalin[i][j] = (len == 2) || isPalin[i + 1][j - 1];
            }
        }
    }
    
    // DP for minimum cuts
    int[] cuts = new int[n];
    
    for (int i = 0; i < n; i++) {
        if (isPalin[0][i]) {
            cuts[i] = 0;
        } else {
            cuts[i] = i; // Maximum cuts needed
            
            for (int j = 1; j <= i; j++) {
                if (isPalin[j][i]) {
                    cuts[i] = Math.min(cuts[i], cuts[j - 1] + 1);
                }
            }
        }
    }
    
    return cuts[n - 1];
}
```
**Time**: O(n × 2ⁿ), **Space**: O(n²)

---

## 📈 Summary

### Key Backtracking Patterns Mastered:
1. **Constraint Satisfaction** - N-Queens, Sudoku with validation
2. **Permutation Generation** - All arrangements with duplicates handling
3. **Combination Generation** - All subsets and k-combinations
4. **Path Finding** - Grid traversal with obstacle avoidance
5. **String Partitioning** - Valid segmentation with constraints
6. **Decision Trees** - Binary choices with pruning

### Important Algorithms:
- **N-Queens** - Classic constraint satisfaction problem
- **Sudoku Solver** - Complex constraint validation
- **Permutations/Combinations** - Systematic enumeration
- **Word Break** - String segmentation with memoization
- **Palindrome Partitioning** - Valid string decomposition

### Optimization Techniques:
- **Early Pruning** - Eliminate invalid branches early
- **Memoization** - Cache results for overlapping subproblems
- **Constraint Propagation** - Use sets for O(1) validation
- **Heuristics** - Choose cells with minimum remaining values
- **Bit Manipulation** - Generate subsets efficiently

### Common Patterns:
- **Choose/Explore/Unchoose** - Standard backtracking template
- **Validation Functions** - Check if current state is valid
- **State Management** - Track visited cells/used elements
- **Result Collection** - Store valid solutions

### Performance Characteristics:
- **Time Complexity** - Usually exponential O(bᵈ) where b is branching factor, d is depth
- **Space Complexity** - O(d) for recursion stack plus state storage
- **Pruning Impact** - Can dramatically reduce actual runtime
- **Memory Usage** - Careful state management needed

### Problem-Solving Strategy:
1. **Define State** - What represents current partial solution
2. **Identify Choices** - What options are available at each step
3. **Validation** - Check if choice leads to valid state
4. **Base Case** - When to stop and collect solution
5. **Backtrack** - How to undo choices efficiently

### Next Steps:
- Practice more complex constraint satisfaction problems
- Learn advanced pruning techniques (alpha-beta, constraint propagation)
- Study optimization problems that use backtracking
- Move to Heaps and Priority Queue problems

---
*This completes the comprehensive backtracking section with detailed Java solutions and optimization techniques.*
