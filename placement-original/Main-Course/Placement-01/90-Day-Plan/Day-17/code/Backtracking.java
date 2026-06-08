import java.util.*;

/**
 * Day 17: Backtracking Algorithms
 * 
 * Core backtracking problems with complete implementations.
 * Pattern: Make choice → Recurse → Undo choice
 */

public class Backtracking {
    
    // ============================================
    // 1. PERMUTATIONS (LC 46) - Medium ⭐
    // ============================================
    
    /**
     * Generate all permutations of an array
     * Time: O(n! × n), Space: O(n)
     */
    public static List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrackPermute(nums, new ArrayList<>(), new boolean[nums.length], result);
        return result;
    }
    
    private static void backtrackPermute(int[] nums, List<Integer> current, 
                                        boolean[] used, List<List<Integer>> result) {
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
            backtrackPermute(nums, current, used, result);
            
            // Undo choice (backtrack)
            current.remove(current.size() - 1);
            used[i] = false;
        }
    }
    
    // ============================================
    // 2. SUBSETS (LC 78) - Medium ⭐
    // ============================================
    
    /**
     * Generate all subsets (power set)
     * Time: O(2^n × n), Space: O(n)
     */
    public static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrackSubsets(nums, 0, new ArrayList<>(), result);
        return result;
    }
    
    private static void backtrackSubsets(int[] nums, int start, 
                                        List<Integer> current, List<List<Integer>> result) {
        // Add current subset (even empty)
        result.add(new ArrayList<>(current));
        
        // Try adding each number from start
        for (int i = start; i < nums.length; i++) {
            // Make choice
            current.add(nums[i]);
            
            // Recurse with next index
            backtrackSubsets(nums, i + 1, current, result);
            
            // Undo choice
            current.remove(current.size() - 1);
        }
    }
    
    // ============================================
    // 3. LETTER COMBINATIONS (LC 17) - Medium
    // ============================================
    
    /**
     * Letter combinations of a phone number
     * Time: O(4^n), Space: O(n)
     */
    public static List<String> letterCombinations(String digits) {
        if (digits.isEmpty()) return new ArrayList<>();
        
        String[] map = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        List<String> result = new ArrayList<>();
        backtrackLetters(digits, 0, new StringBuilder(), map, result);
        return result;
    }
    
    private static void backtrackLetters(String digits, int index, StringBuilder current,
                                        String[] map, List<String> result) {
        // Base case: processed all digits
        if (index == digits.length()) {
            result.add(current.toString());
            return;
        }
        
        // Get letters for current digit
        String letters = map[digits.charAt(index) - '0'];
        
        // Try each letter
        for (char c : letters.toCharArray()) {
            // Make choice
            current.append(c);
            
            // Recurse
            backtrackLetters(digits, index + 1, current, map, result);
            
            // Undo choice
            current.deleteCharAt(current.length() - 1);
        }
    }
    
    // ============================================
    // 4. GENERATE PARENTHESES (LC 22) - Medium ⭐
    // ============================================
    
    /**
     * Generate all valid parentheses combinations
     * Time: O(4^n / √n), Space: O(n)
     */
    public static List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        backtrackParenthesis(result, new StringBuilder(), 0, 0, n);
        return result;
    }
    
    private static void backtrackParenthesis(List<String> result, StringBuilder current,
                                            int open, int close, int max) {
        // Base case: complete string
        if (current.length() == max * 2) {
            result.add(current.toString());
            return;
        }
        
        // Add opening parenthesis if possible
        if (open < max) {
            current.append('(');
            backtrackParenthesis(result, current, open + 1, close, max);
            current.deleteCharAt(current.length() - 1);
        }
        
        // Add closing parenthesis if valid
        if (close < open) {
            current.append(')');
            backtrackParenthesis(result, current, open, close + 1, max);
            current.deleteCharAt(current.length() - 1);
        }
    }
    
    // ============================================
    // 5. COMBINATION SUM (LC 39) - Medium
    // ============================================
    
    /**
     * Find all combinations that sum to target (reuse allowed)
     * Time: O(2^n), Space: O(n)
     */
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(candidates); // Optimization
        backtrackCombSum(candidates, target, 0, new ArrayList<>(), result);
        return result;
    }
    
    private static void backtrackCombSum(int[] candidates, int remain, int start,
                                        List<Integer> current, List<List<Integer>> result) {
        // Base case: found valid combination
        if (remain == 0) {
            result.add(new ArrayList<>(current));
            return;
        }
        
        // Base case: exceeded target
        if (remain < 0) {
            return;
        }
        
        // Try each candidate from start
        for (int i = start; i < candidates.length; i++) {
            // Pruning: skip if candidate too large
            if (candidates[i] > remain) break;
            
            // Make choice
            current.add(candidates[i]);
            
            // Recurse (can reuse same element, so start = i)
            backtrackCombSum(candidates, remain - candidates[i], i, current, result);
            
            // Undo choice
            current.remove(current.size() - 1);
        }
    }
    
    // ============================================
    // 6. WORD SEARCH (LC 79) - Medium
    // ============================================
    
    /**
     * Search for word in 2D board
     * Time: O(m × n × 4^L), Space: O(L)
     */
    public static boolean exist(char[][] board, String word) {
        int m = board.length;
        int n = board[0].length;
        
        // Try starting from each cell
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (backtrackWordSearch(board, word, i, j, 0)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    private static boolean backtrackWordSearch(char[][] board, String word, 
                                              int i, int j, int index) {
        // Base case: found complete word
        if (index == word.length()) {
            return true;
        }
        
        // Check boundaries
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
            return false;
        }
        
        // Check character match
        if (board[i][j] != word.charAt(index)) {
            return false;
        }
        
        // Mark as visited
        char temp = board[i][j];
        board[i][j] = '#';
        
        // Try all 4 directions
        boolean found = backtrackWordSearch(board, word, i + 1, j, index + 1) ||
                       backtrackWordSearch(board, word, i - 1, j, index + 1) ||
                       backtrackWordSearch(board, word, i, j + 1, index + 1) ||
                       backtrackWordSearch(board, word, i, j - 1, index + 1);
        
        // Restore (backtrack)
        board[i][j] = temp;
        
        return found;
    }
    
    // ============================================
    // 7. N-QUEENS (LC 51) - Hard ⭐⭐
    // ============================================
    
    /**
     * Solve N-Queens problem
     * Time: O(N!), Space: O(N²)
     */
    public static List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        char[][] board = new char[n][n];
        
        // Initialize board
        for (int i = 0; i < n; i++) {
            Arrays.fill(board[i], '.');
        }
        
        backtrackNQueens(board, 0, result);
        return result;
    }
    
    private static void backtrackNQueens(char[][] board, int row, 
                                        List<List<String>> result) {
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
                backtrackNQueens(board, row + 1, result);
                
                // Undo choice
                board[row][col] = '.';
            }
        }
    }
    
    private static boolean isSafe(char[][] board, int row, int col) {
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
    
    private static List<String> construct(char[][] board) {
        List<String> result = new ArrayList<>();
        for (char[] row : board) {
            result.add(String.valueOf(row));
        }
        return result;
    }
    
    // ============================================
    // 8. SUDOKU SOLVER (LC 37) - Hard ⭐⭐
    // ============================================
    
    /**
     * Solve Sudoku puzzle
     * Time: O(9^m), Space: O(1)
     */
    public static void solveSudoku(char[][] board) {
        backtrackSudoku(board, 0, 0);
    }
    
    private static boolean backtrackSudoku(char[][] board, int row, int col) {
        // Move to next row
        if (col == 9) {
            return backtrackSudoku(board, row + 1, 0);
        }
        
        // Base case: all cells filled
        if (row == 9) {
            return true;
        }
        
        // Skip filled cells
        if (board[row][col] != '.') {
            return backtrackSudoku(board, row, col + 1);
        }
        
        // Try each digit 1-9
        for (char num = '1'; num <= '9'; num++) {
            if (isValidSudoku(board, row, col, num)) {
                // Make choice
                board[row][col] = num;
                
                // Recurse
                if (backtrackSudoku(board, row, col + 1)) {
                    return true;
                }
                
                // Undo choice
                board[row][col] = '.';
            }
        }
        
        return false;
    }
    
    private static boolean isValidSudoku(char[][] board, int row, int col, char num) {
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
    
    // ============================================
    // MAIN - Test All Backtracking Algorithms
    // ============================================
    
    public static void main(String[] args) {
        System.out.println("=".repeat(60));
        System.out.println("DAY 17: BACKTRACKING ALGORITHMS - COMPREHENSIVE DEMO");
        System.out.println("=".repeat(60));
        
        // Test 1: Permutations
        System.out.println("\n1. PERMUTATIONS (LC 46)");
        System.out.println("-".repeat(60));
        int[] nums1 = {1, 2, 3};
        List<List<Integer>> perms = permute(nums1);
        System.out.println("Input: " + Arrays.toString(nums1));
        System.out.println("Permutations: " + perms);
        System.out.println("Total: " + perms.size() + " (expected: 3! = 6)");
        
        // Test 2: Subsets
        System.out.println("\n2. SUBSETS (LC 78)");
        System.out.println("-".repeat(60));
        int[] nums2 = {1, 2, 3};
        List<List<Integer>> subs = subsets(nums2);
        System.out.println("Input: " + Arrays.toString(nums2));
        System.out.println("Subsets: " + subs);
        System.out.println("Total: " + subs.size() + " (expected: 2^3 = 8)");
        
        // Test 3: Letter Combinations
        System.out.println("\n3. LETTER COMBINATIONS (LC 17)");
        System.out.println("-".repeat(60));
        String digits = "23";
        List<String> letters = letterCombinations(digits);
        System.out.println("Input: \"" + digits + "\"");
        System.out.println("Combinations: " + letters);
        System.out.println("Total: " + letters.size());
        
        // Test 4: Generate Parentheses
        System.out.println("\n4. GENERATE PARENTHESES (LC 22)");
        System.out.println("-".repeat(60));
        int n = 3;
        List<String> parens = generateParenthesis(n);
        System.out.println("Input: n = " + n);
        System.out.println("Valid combinations: " + parens);
        System.out.println("Total: " + parens.size() + " (Catalan number)");
        
        // Test 5: Combination Sum
        System.out.println("\n5. COMBINATION SUM (LC 39)");
        System.out.println("-".repeat(60));
        int[] candidates = {2, 3, 6, 7};
        int target = 7;
        List<List<Integer>> combSums = combinationSum(candidates, target);
        System.out.println("Input: " + Arrays.toString(candidates) + ", target = " + target);
        System.out.println("Combinations: " + combSums);
        
        // Test 6: Word Search
        System.out.println("\n6. WORD SEARCH (LC 79)");
        System.out.println("-".repeat(60));
        char[][] board = {
            {'A', 'B', 'C', 'E'},
            {'S', 'F', 'C', 'S'},
            {'A', 'D', 'E', 'E'}
        };
        String word1 = "ABCCED";
        String word2 = "SEE";
        String word3 = "ABCB";
        System.out.println("Board:");
        for (char[] row : board) {
            System.out.println("  " + Arrays.toString(row));
        }
        System.out.println("Search \"" + word1 + "\": " + exist(board, word1));
        System.out.println("Search \"" + word2 + "\": " + exist(board, word2));
        System.out.println("Search \"" + word3 + "\": " + exist(board, word3));
        
        // Test 7: N-Queens
        System.out.println("\n7. N-QUEENS (LC 51) - Hard");
        System.out.println("-".repeat(60));
        int queensN = 4;
        List<List<String>> queens = solveNQueens(queensN);
        System.out.println("N = " + queensN);
        System.out.println("Solutions: " + queens.size());
        System.out.println("First solution:");
        for (String row : queens.get(0)) {
            System.out.println("  " + row);
        }
        
        // Test 8: Sudoku Solver
        System.out.println("\n8. SUDOKU SOLVER (LC 37) - Hard");
        System.out.println("-".repeat(60));
        char[][] sudoku = {
            {'5','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'.','.','.','4','1','9','.','.','5'},
            {'.','.','.','.','8','.','.','7','9'}
        };
        System.out.println("Original puzzle:");
        printSudoku(sudoku);
        solveSudoku(sudoku);
        System.out.println("\nSolved:");
        printSudoku(sudoku);
        
        System.out.println("\n" + "=".repeat(60));
        System.out.println("All backtracking algorithms demonstrated successfully! ✓");
        System.out.println("=".repeat(60));
    }
    
    private static void printSudoku(char[][] board) {
        for (int i = 0; i < 9; i++) {
            if (i % 3 == 0 && i != 0) {
                System.out.println("  ------+-------+------");
            }
            for (int j = 0; j < 9; j++) {
                if (j % 3 == 0 && j != 0) {
                    System.out.print(" |");
                }
                System.out.print(" " + board[i][j]);
            }
            System.out.println();
        }
    }
}
