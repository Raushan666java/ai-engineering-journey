/**
 * Day 50: Backtracking - Exploring All Possible Solutions
 * 
 * This file contains comprehensive implementations covering:
 * 1. Subsets
 * 2. Subsets II (with duplicates)
 * 3. Permutations
 * 4. Permutations II (with duplicates)
 * 5. Combination Sum
 * 6. Combination Sum II
 * 7. N-Queens
 * 8. N-Queens II (count solutions)
 * 9. Word Search
 * 10. Palindrome Partitioning
 * 11. Letter Combinations of a Phone Number
 * 12. Generate Parentheses
 * 
 * Each problem includes:
 * - Multiple solution approaches
 * - State space tree explanation
 * - Pruning techniques
 * - Complexity analysis
 * - Comprehensive test cases
 * 
 * @author Placement Preparation
 * @version 1.0
 */

package dsa.day50;

import java.util.*;

public class Backtracking {
    
    // ==================== PROBLEM 1: SUBSETS ====================
    
    /**
     * Problem 1: Subsets (Power Set)
     * 
     * Generate all possible subsets of a set of distinct integers.
     * 
     * Example:
     * Input: nums = [1,2,3]
     * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
     * 
     * LeetCode #78
     */
    
    /**
     * Approach 1: Backtracking (Include/Exclude)
     * Time: O(n * 2^n), Space: O(n) recursion depth
     */
    public static List<List<Integer>> subsets1(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrackSubsets(nums, 0, new ArrayList<>(), result);
        return result;
    }
    
    private static void backtrackSubsets(int[] nums, int index, 
                                         List<Integer> current, 
                                         List<List<Integer>> result) {
        // Add current subset to result
        result.add(new ArrayList<>(current));
        
        // Try adding each remaining element
        for (int i = index; i < nums.length; i++) {
            current.add(nums[i]);              // Include
            backtrackSubsets(nums, i + 1, current, result);
            current.remove(current.size() - 1); // Exclude (backtrack)
        }
    }
    
    /**
     * Approach 2: Iterative (Build up)
     * Time: O(n * 2^n), Space: O(1) excluding output
     */
    public static List<List<Integer>> subsets2(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        result.add(new ArrayList<>()); // Empty subset
        
        for (int num : nums) {
            int size = result.size();
            for (int i = 0; i < size; i++) {
                List<Integer> newSubset = new ArrayList<>(result.get(i));
                newSubset.add(num);
                result.add(newSubset);
            }
        }
        
        return result;
    }
    
    /**
     * Approach 3: Bit Manipulation
     * Time: O(n * 2^n), Space: O(1) excluding output
     */
    public static List<List<Integer>> subsets3(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        int n = nums.length;
        int totalSubsets = 1 << n; // 2^n
        
        for (int mask = 0; mask < totalSubsets; mask++) {
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
    
    // ==================== PROBLEM 2: SUBSETS II ====================
    
    /**
     * Problem 2: Subsets II (with duplicates)
     * 
     * Generate all subsets handling duplicate elements.
     * 
     * Example:
     * Input: nums = [1,2,2]
     * Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
     * 
     * LeetCode #90
     * 
     * Time: O(n * 2^n), Space: O(n)
     */
    public static List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums); // Sort to handle duplicates
        List<List<Integer>> result = new ArrayList<>();
        backtrackSubsetsWithDup(nums, 0, new ArrayList<>(), result);
        return result;
    }
    
    private static void backtrackSubsetsWithDup(int[] nums, int index,
                                                List<Integer> current,
                                                List<List<Integer>> result) {
        result.add(new ArrayList<>(current));
        
        for (int i = index; i < nums.length; i++) {
            // Skip duplicates
            if (i > index && nums[i] == nums[i - 1]) continue;
            
            current.add(nums[i]);
            backtrackSubsetsWithDup(nums, i + 1, current, result);
            current.remove(current.size() - 1);
        }
    }
    
    // ==================== PROBLEM 3: PERMUTATIONS ====================
    
    /**
     * Problem 3: Permutations
     * 
     * Generate all permutations of distinct integers.
     * 
     * Example:
     * Input: nums = [1,2,3]
     * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
     * 
     * LeetCode #46
     */
    
    /**
     * Approach 1: Backtracking with Used Array
     * Time: O(n * n!), Space: O(n)
     */
    public static List<List<Integer>> permute1(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrackPermute(nums, new boolean[nums.length], 
                        new ArrayList<>(), result);
        return result;
    }
    
    private static void backtrackPermute(int[] nums, boolean[] used,
                                         List<Integer> current,
                                         List<List<Integer>> result) {
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            
            used[i] = true;
            current.add(nums[i]);
            backtrackPermute(nums, used, current, result);
            current.remove(current.size() - 1);
            used[i] = false;
        }
    }
    
    /**
     * Approach 2: Backtracking with Swapping
     * Time: O(n * n!), Space: O(n)
     */
    public static List<List<Integer>> permute2(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrackPermuteSwap(nums, 0, result);
        return result;
    }
    
    private static void backtrackPermuteSwap(int[] nums, int start,
                                             List<List<Integer>> result) {
        if (start == nums.length) {
            List<Integer> permutation = new ArrayList<>();
            for (int num : nums) {
                permutation.add(num);
            }
            result.add(permutation);
            return;
        }
        
        for (int i = start; i < nums.length; i++) {
            swap(nums, start, i);
            backtrackPermuteSwap(nums, start + 1, result);
            swap(nums, start, i); // Backtrack
        }
    }
    
    private static void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    // ==================== PROBLEM 4: PERMUTATIONS II ====================
    
    /**
     * Problem 4: Permutations II (with duplicates)
     * 
     * Generate all unique permutations handling duplicates.
     * 
     * Example:
     * Input: nums = [1,1,2]
     * Output: [[1,1,2],[1,2,1],[2,1,1]]
     * 
     * LeetCode #47
     * 
     * Time: O(n * n!), Space: O(n)
     */
    public static List<List<Integer>> permuteUnique(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        backtrackPermuteUnique(nums, new boolean[nums.length],
                              new ArrayList<>(), result);
        return result;
    }
    
    private static void backtrackPermuteUnique(int[] nums, boolean[] used,
                                               List<Integer> current,
                                               List<List<Integer>> result) {
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            
            // Skip duplicates: if current same as previous and previous not used
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;
            
            used[i] = true;
            current.add(nums[i]);
            backtrackPermuteUnique(nums, used, current, result);
            current.remove(current.size() - 1);
            used[i] = false;
        }
    }
    
    // ==================== PROBLEM 5: COMBINATION SUM ====================
    
    /**
     * Problem 5: Combination Sum
     * 
     * Find all combinations that sum to target (reuse allowed).
     * 
     * Example:
     * Input: candidates = [2,3,6,7], target = 7
     * Output: [[2,2,3],[7]]
     * 
     * LeetCode #39
     * 
     * Time: O(n^(T/M)) where T=target, M=min candidate
     * Space: O(T/M)
     */
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(candidates);
        backtrackCombinationSum(candidates, target, 0, 
                               new ArrayList<>(), result);
        return result;
    }
    
    private static void backtrackCombinationSum(int[] candidates, int target,
                                                int start, List<Integer> current,
                                                List<List<Integer>> result) {
        if (target == 0) {
            result.add(new ArrayList<>(current));
            return;
        }
        
        if (target < 0) return;
        
        for (int i = start; i < candidates.length; i++) {
            // Prune: if current candidate > target, rest also > target (sorted)
            if (candidates[i] > target) break;
            
            current.add(candidates[i]);
            // Can reuse same element, so pass i (not i+1)
            backtrackCombinationSum(candidates, target - candidates[i], 
                                   i, current, result);
            current.remove(current.size() - 1);
        }
    }
    
    // ==================== PROBLEM 6: COMBINATION SUM II ====================
    
    /**
     * Problem 6: Combination Sum II
     * 
     * Find all combinations that sum to target (no reuse, handle duplicates).
     * 
     * Example:
     * Input: candidates = [10,1,2,7,6,1,5], target = 8
     * Output: [[1,1,6],[1,2,5],[1,7],[2,6]]
     * 
     * LeetCode #40
     * 
     * Time: O(2^n), Space: O(n)
     */
    public static List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        List<List<Integer>> result = new ArrayList<>();
        backtrackCombinationSum2(candidates, target, 0,
                                new ArrayList<>(), result);
        return result;
    }
    
    private static void backtrackCombinationSum2(int[] candidates, int target,
                                                 int start, List<Integer> current,
                                                 List<List<Integer>> result) {
        if (target == 0) {
            result.add(new ArrayList<>(current));
            return;
        }
        
        if (target < 0) return;
        
        for (int i = start; i < candidates.length; i++) {
            // Skip duplicates at same level
            if (i > start && candidates[i] == candidates[i - 1]) continue;
            
            if (candidates[i] > target) break;
            
            current.add(candidates[i]);
            // Cannot reuse, so pass i+1
            backtrackCombinationSum2(candidates, target - candidates[i],
                                    i + 1, current, result);
            current.remove(current.size() - 1);
        }
    }
    
    // ==================== PROBLEM 7: N-QUEENS ====================
    
    /**
     * Problem 7: N-Queens
     * 
     * Place N queens on N×N board so no two queens attack each other.
     * 
     * Example:
     * Input: n = 4
     * Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
     * 
     * LeetCode #51
     * 
     * Time: O(N!), Space: O(N²)
     */
    public static List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        char[][] board = new char[n][n];
        
        // Initialize board
        for (int i = 0; i < n; i++) {
            Arrays.fill(board[i], '.');
        }
        
        boolean[] cols = new boolean[n];
        boolean[] diag1 = new boolean[2 * n - 1]; // row - col + n - 1
        boolean[] diag2 = new boolean[2 * n - 1]; // row + col
        
        backtrackNQueens(0, n, board, cols, diag1, diag2, result);
        return result;
    }
    
    private static void backtrackNQueens(int row, int n, char[][] board,
                                         boolean[] cols, boolean[] diag1,
                                         boolean[] diag2,
                                         List<List<String>> result) {
        if (row == n) {
            result.add(construct(board));
            return;
        }
        
        for (int col = 0; col < n; col++) {
            int d1 = row - col + n - 1;
            int d2 = row + col;
            
            if (cols[col] || diag1[d1] || diag2[d2]) continue;
            
            // Place queen
            board[row][col] = 'Q';
            cols[col] = diag1[d1] = diag2[d2] = true;
            
            backtrackNQueens(row + 1, n, board, cols, diag1, diag2, result);
            
            // Remove queen (backtrack)
            board[row][col] = '.';
            cols[col] = diag1[d1] = diag2[d2] = false;
        }
    }
    
    private static List<String> construct(char[][] board) {
        List<String> result = new ArrayList<>();
        for (char[] row : board) {
            result.add(new String(row));
        }
        return result;
    }
    
    // ==================== PROBLEM 8: N-QUEENS II ====================
    
    /**
     * Problem 8: N-Queens II (Count Solutions)
     * 
     * Count distinct solutions to N-Queens problem.
     * 
     * Example:
     * Input: n = 4
     * Output: 2
     * 
     * LeetCode #52
     * 
     * Time: O(N!), Space: O(N)
     */
    public static int totalNQueens(int n) {
        return backtrackCountNQueens(0, n, 0, 0, 0);
    }
    
    private static int backtrackCountNQueens(int row, int n,
                                             int colMask, int diag1Mask,
                                             int diag2Mask) {
        if (row == n) return 1;
        
        int count = 0;
        int availablePositions = ((1 << n) - 1) & ~(colMask | diag1Mask | diag2Mask);
        
        while (availablePositions != 0) {
            int position = availablePositions & -availablePositions; // Rightmost bit
            availablePositions -= position;
            
            count += backtrackCountNQueens(row + 1, n,
                                          colMask | position,
                                          (diag1Mask | position) << 1,
                                          (diag2Mask | position) >> 1);
        }
        
        return count;
    }
    
    // ==================== PROBLEM 9: WORD SEARCH ====================
    
    /**
     * Problem 9: Word Search
     * 
     * Find if word exists in 2D board (can move up, down, left, right).
     * 
     * Example:
     * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
     *        word = "ABCCED"
     * Output: true
     * 
     * LeetCode #79
     * 
     * Time: O(m * n * 4^L) where L = word length
     * Space: O(L) recursion depth
     */
    public static boolean exist(char[][] board, String word) {
        int m = board.length, n = board[0].length;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == word.charAt(0)) {
                    if (backtrackWordSearch(board, word, i, j, 0)) {
                        return true;
                    }
                }
            }
        }
        
        return false;
    }
    
    private static boolean backtrackWordSearch(char[][] board, String word,
                                               int row, int col, int index) {
        if (index == word.length()) return true;
        
        if (row < 0 || row >= board.length || 
            col < 0 || col >= board[0].length ||
            board[row][col] != word.charAt(index)) {
            return false;
        }
        
        // Mark as visited
        char temp = board[row][col];
        board[row][col] = '#';
        
        // Explore 4 directions
        boolean found = backtrackWordSearch(board, word, row + 1, col, index + 1) ||
                       backtrackWordSearch(board, word, row - 1, col, index + 1) ||
                       backtrackWordSearch(board, word, row, col + 1, index + 1) ||
                       backtrackWordSearch(board, word, row, col - 1, index + 1);
        
        // Backtrack
        board[row][col] = temp;
        
        return found;
    }
    
    // ==================== PROBLEM 10: PALINDROME PARTITIONING ====================
    
    /**
     * Problem 10: Palindrome Partitioning
     * 
     * Partition string so every substring is a palindrome.
     * 
     * Example:
     * Input: s = "aab"
     * Output: [["a","a","b"],["aa","b"]]
     * 
     * LeetCode #131
     * 
     * Time: O(n * 2^n), Space: O(n)
     */
    public static List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        backtrackPartition(s, 0, new ArrayList<>(), result);
        return result;
    }
    
    private static void backtrackPartition(String s, int start,
                                           List<String> current,
                                           List<List<String>> result) {
        if (start == s.length()) {
            result.add(new ArrayList<>(current));
            return;
        }
        
        for (int end = start; end < s.length(); end++) {
            if (isPalindrome(s, start, end)) {
                current.add(s.substring(start, end + 1));
                backtrackPartition(s, end + 1, current, result);
                current.remove(current.size() - 1);
            }
        }
    }
    
    private static boolean isPalindrome(String s, int left, int right) {
        while (left < right) {
            if (s.charAt(left++) != s.charAt(right--)) {
                return false;
            }
        }
        return true;
    }
    
    // ==================== PROBLEM 11: LETTER COMBINATIONS ====================
    
    /**
     * Problem 11: Letter Combinations of a Phone Number
     * 
     * Generate all letter combinations from phone number digits.
     * 
     * Example:
     * Input: digits = "23"
     * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
     * 
     * LeetCode #17
     * 
     * Time: O(4^n * n) where n = digits length
     * Space: O(n)
     */
    private static final String[] PHONE_MAP = {
        "",     // 0
        "",     // 1
        "abc",  // 2
        "def",  // 3
        "ghi",  // 4
        "jkl",  // 5
        "mno",  // 6
        "pqrs", // 7
        "tuv",  // 8
        "wxyz"  // 9
    };
    
    public static List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();
        if (digits == null || digits.length() == 0) return result;
        
        backtrackLetterCombinations(digits, 0, new StringBuilder(), result);
        return result;
    }
    
    private static void backtrackLetterCombinations(String digits, int index,
                                                    StringBuilder current,
                                                    List<String> result) {
        if (index == digits.length()) {
            result.add(current.toString());
            return;
        }
        
        String letters = PHONE_MAP[digits.charAt(index) - '0'];
        
        for (char letter : letters.toCharArray()) {
            current.append(letter);
            backtrackLetterCombinations(digits, index + 1, current, result);
            current.deleteCharAt(current.length() - 1);
        }
    }
    
    // ==================== PROBLEM 12: GENERATE PARENTHESES ====================
    
    /**
     * Problem 12: Generate Parentheses
     * 
     * Generate all valid combinations of n pairs of parentheses.
     * 
     * Example:
     * Input: n = 3
     * Output: ["((()))","(()())","(())()","()(())","()()()"]
     * 
     * LeetCode #22
     * 
     * Time: O(4^n / √n) - Catalan number
     * Space: O(n)
     */
    public static List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        backtrackGenerateParenthesis(n, 0, 0, new StringBuilder(), result);
        return result;
    }
    
    private static void backtrackGenerateParenthesis(int n, int open, int close,
                                                     StringBuilder current,
                                                     List<String> result) {
        if (current.length() == 2 * n) {
            result.add(current.toString());
            return;
        }
        
        // Add open parenthesis if we can
        if (open < n) {
            current.append('(');
            backtrackGenerateParenthesis(n, open + 1, close, current, result);
            current.deleteCharAt(current.length() - 1);
        }
        
        // Add close parenthesis if valid
        if (close < open) {
            current.append(')');
            backtrackGenerateParenthesis(n, open, close + 1, current, result);
            current.deleteCharAt(current.length() - 1);
        }
    }
    
    // ==================== ADDITIONAL: SUDOKU SOLVER ====================
    
    /**
     * Bonus: Sudoku Solver
     * 
     * LeetCode #37
     * Time: O(9^m) where m = empty cells, Space: O(1)
     */
    public static void solveSudoku(char[][] board) {
        backtrackSudoku(board);
    }
    
    private static boolean backtrackSudoku(char[][] board) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == '.') {
                    for (char num = '1'; num <= '9'; num++) {
                        if (isValidSudoku(board, row, col, num)) {
                            board[row][col] = num;
                            
                            if (backtrackSudoku(board)) {
                                return true;
                            }
                            
                            board[row][col] = '.'; // Backtrack
                        }
                    }
                    return false; // No valid number found
                }
            }
        }
        return true; // Board filled
    }
    
    private static boolean isValidSudoku(char[][] board, int row, int col, char num) {
        // Check row and column
        for (int i = 0; i < 9; i++) {
            if (board[row][i] == num || board[i][col] == num) {
                return false;
            }
        }
        
        // Check 3x3 box
        int boxRow = (row / 3) * 3;
        int boxCol = (col / 3) * 3;
        
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[boxRow + i][boxCol + j] == num) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    // ==================== TEST CASES ====================
    
    public static void main(String[] args) {
        System.out.println("=== DAY 50: BACKTRACKING - 12 PROBLEMS ===\n");
        
        // Problem 1: Subsets
        System.out.println("Problem 1: Subsets");
        int[] nums1 = {1, 2, 3};
        System.out.println("Input: [1,2,3]");
        System.out.println("Approach 1 (Backtracking): " + subsets1(nums1));
        System.out.println("Approach 2 (Iterative): " + subsets2(nums1));
        System.out.println("Approach 3 (Bit Manipulation): " + subsets3(nums1));
        System.out.println("Expected: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n");
        
        // Problem 2: Subsets II
        System.out.println("Problem 2: Subsets II (with duplicates)");
        int[] nums2 = {1, 2, 2};
        System.out.println("Input: [1,2,2]");
        System.out.println("Output: " + subsetsWithDup(nums2));
        System.out.println("Expected: [[],[1],[1,2],[1,2,2],[2],[2,2]]\n");
        
        // Problem 3: Permutations
        System.out.println("Problem 3: Permutations");
        int[] nums3 = {1, 2, 3};
        System.out.println("Input: [1,2,3]");
        System.out.println("Approach 1 (Used Array): " + permute1(nums3));
        System.out.println("Approach 2 (Swapping): " + permute2(nums3));
        System.out.println("Expected: 6 permutations\n");
        
        // Problem 4: Permutations II
        System.out.println("Problem 4: Permutations II (with duplicates)");
        int[] nums4 = {1, 1, 2};
        System.out.println("Input: [1,1,2]");
        System.out.println("Output: " + permuteUnique(nums4));
        System.out.println("Expected: [[1,1,2],[1,2,1],[2,1,1]]\n");
        
        // Problem 5: Combination Sum
        System.out.println("Problem 5: Combination Sum");
        int[] candidates5 = {2, 3, 6, 7};
        System.out.println("Input: candidates=[2,3,6,7], target=7");
        System.out.println("Output: " + combinationSum(candidates5, 7));
        System.out.println("Expected: [[2,2,3],[7]]\n");
        
        // Problem 6: Combination Sum II
        System.out.println("Problem 6: Combination Sum II");
        int[] candidates6 = {10, 1, 2, 7, 6, 1, 5};
        System.out.println("Input: candidates=[10,1,2,7,6,1,5], target=8");
        System.out.println("Output: " + combinationSum2(candidates6, 8));
        System.out.println("Expected: [[1,1,6],[1,2,5],[1,7],[2,6]]\n");
        
        // Problem 7: N-Queens
        System.out.println("Problem 7: N-Queens");
        System.out.println("Input: n=4");
        List<List<String>> nQueens = solveNQueens(4);
        System.out.println("Output: " + nQueens.size() + " solutions");
        for (List<String> solution : nQueens) {
            for (String row : solution) {
                System.out.println(row);
            }
            System.out.println();
        }
        System.out.println("Expected: 2 solutions\n");
        
        // Problem 8: N-Queens II
        System.out.println("Problem 8: N-Queens II (Count)");
        System.out.println("Input: n=4");
        System.out.println("Output: " + totalNQueens(4));
        System.out.println("Expected: 2\n");
        
        // Problem 9: Word Search
        System.out.println("Problem 9: Word Search");
        char[][] board = {
            {'A', 'B', 'C', 'E'},
            {'S', 'F', 'C', 'S'},
            {'A', 'D', 'E', 'E'}
        };
        System.out.println("Input: board + word=\"ABCCED\"");
        System.out.println("Output: " + exist(board, "ABCCED"));
        System.out.println("Expected: true\n");
        
        // Problem 10: Palindrome Partitioning
        System.out.println("Problem 10: Palindrome Partitioning");
        System.out.println("Input: s=\"aab\"");
        System.out.println("Output: " + partition("aab"));
        System.out.println("Expected: [[a,a,b],[aa,b]]\n");
        
        // Problem 11: Letter Combinations
        System.out.println("Problem 11: Letter Combinations of Phone Number");
        System.out.println("Input: digits=\"23\"");
        System.out.println("Output: " + letterCombinations("23"));
        System.out.println("Expected: [ad,ae,af,bd,be,bf,cd,ce,cf]\n");
        
        // Problem 12: Generate Parentheses
        System.out.println("Problem 12: Generate Parentheses");
        System.out.println("Input: n=3");
        System.out.println("Output: " + generateParenthesis(3));
        System.out.println("Expected: [((())), (()()), (())(), ()(()), ()()()]\n");
        
        // Bonus: Sudoku Solver
        System.out.println("Bonus: Sudoku Solver");
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
        System.out.println("Solving Sudoku...");
        solveSudoku(sudoku);
        System.out.println("Sudoku solved!");
        
        System.out.println("\n=== ALL BACKTRACKING PROBLEMS COMPLETED ===");
        System.out.println("Master state space exploration with efficient pruning!");
        System.out.println("Next: Week 7 Assessment (Day 51)");
    }
}
