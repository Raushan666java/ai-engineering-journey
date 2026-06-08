import java.util.*;

/**
 * Day 17 Project: Recursion Visualizer
 * 
 * Comprehensive tool for visualizing recursion and backtracking algorithms.
 * Features:
 * - Call stack visualization
 * - N-Queens solver with animation
 * - Sudoku solver with steps
 * - Performance tracking
 * - Interactive demos
 */

public class RecursionVisualizer {
    
    private static int callCount = 0;
    private static List<String> callStack = new ArrayList<>();
    
    // ============================================
    // 1. FIBONACCI WITH CALL TREE VISUALIZATION
    // ============================================
    
    static class FibonacciVisualizer {
        private int callCount = 0;
        
        public void visualize(int n) {
            System.out.println("\n" + "=".repeat(60));
            System.out.println("FIBONACCI CALL TREE VISUALIZATION");
            System.out.println("=".repeat(60));
            callCount = 0;
            int result = fibVisual(n, 0);
            System.out.println("\nResult: fibonacci(" + n + ") = " + result);
            System.out.println("Total function calls: " + callCount);
            System.out.println("Time complexity: O(2^" + n + ") = " + Math.pow(2, n) + " operations");
        }
        
        private int fibVisual(int n, int depth) {
            callCount++;
            String indent = "  ".repeat(depth);
            
            System.out.println(indent + "→ fib(" + n + ")");
            
            if (n <= 1) {
                System.out.println(indent + "← returns " + n + " (base case)");
                return n;
            }
            
            int left = fibVisual(n - 1, depth + 1);
            int right = fibVisual(n - 2, depth + 1);
            int result = left + right;
            
            System.out.println(indent + "← returns " + left + " + " + right + " = " + result);
            return result;
        }
        
        // Optimized version with memoization
        public void visualizeMemo(int n) {
            System.out.println("\n" + "=".repeat(60));
            System.out.println("FIBONACCI WITH MEMOIZATION");
            System.out.println("=".repeat(60));
            
            callCount = 0;
            int[] memo = new int[n + 1];
            Arrays.fill(memo, -1);
            
            int result = fibMemo(n, 0, memo);
            System.out.println("\nResult: fibonacci(" + n + ") = " + result);
            System.out.println("Total function calls: " + callCount);
            System.out.println("Time complexity: O(" + n + ") - MUCH BETTER!");
        }
        
        private int fibMemo(int n, int depth, int[] memo) {
            callCount++;
            String indent = "  ".repeat(depth);
            
            if (n <= 1) {
                System.out.println(indent + "→ fib(" + n + ") → returns " + n);
                return n;
            }
            
            if (memo[n] != -1) {
                System.out.println(indent + "→ fib(" + n + ") → cached: " + memo[n]);
                return memo[n];
            }
            
            System.out.println(indent + "→ fib(" + n + ")");
            int result = fibMemo(n - 1, depth + 1, memo) + fibMemo(n - 2, depth + 1, memo);
            memo[n] = result;
            
            System.out.println(indent + "← caching fib(" + n + ") = " + result);
            return result;
        }
    }
    
    // ============================================
    // 2. N-QUEENS SOLVER WITH VISUALIZATION
    // ============================================
    
    static class NQueensVisualizer {
        private int solutionCount = 0;
        private int attempts = 0;
        
        public void solve(int n) {
            System.out.println("\n" + "=".repeat(60));
            System.out.println("N-QUEENS SOLVER (N = " + n + ")");
            System.out.println("=".repeat(60));
            
            solutionCount = 0;
            attempts = 0;
            
            char[][] board = new char[n][n];
            for (int i = 0; i < n; i++) {
                Arrays.fill(board[i], '.');
            }
            
            backtrack(board, 0);
            
            System.out.println("\n" + "=".repeat(60));
            System.out.println("Total solutions found: " + solutionCount);
            System.out.println("Total attempts: " + attempts);
            System.out.println("=".repeat(60));
        }
        
        private void backtrack(char[][] board, int row) {
            if (row == board.length) {
                solutionCount++;
                System.out.println("\nSolution #" + solutionCount + ":");
                printBoard(board);
                return;
            }
            
            for (int col = 0; col < board.length; col++) {
                attempts++;
                
                if (isSafe(board, row, col)) {
                    System.out.println("Row " + row + ", Col " + col + ": Placing queen ✓");
                    board[row][col] = 'Q';
                    
                    backtrack(board, row + 1);
                    
                    board[row][col] = '.';
                    System.out.println("Row " + row + ", Col " + col + ": Backtracking ↩");
                } else {
                    System.out.println("Row " + row + ", Col " + col + ": Unsafe ✗");
                }
            }
        }
        
        private boolean isSafe(char[][] board, int row, int col) {
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
        
        private void printBoard(char[][] board) {
            for (char[] row : board) {
                System.out.print("  ");
                for (char cell : row) {
                    System.out.print(cell + " ");
                }
                System.out.println();
            }
        }
    }
    
    // ============================================
    // 3. PERMUTATIONS VISUALIZER
    // ============================================
    
    static class PermutationsVisualizer {
        private int callCount = 0;
        
        public void visualize(int[] nums) {
            System.out.println("\n" + "=".repeat(60));
            System.out.println("PERMUTATIONS VISUALIZATION");
            System.out.println("=".repeat(60));
            System.out.println("Input: " + Arrays.toString(nums));
            
            callCount = 0;
            List<List<Integer>> result = new ArrayList<>();
            backtrack(nums, new ArrayList<>(), new boolean[nums.length], result, 0);
            
            System.out.println("\n" + "=".repeat(60));
            System.out.println("Total permutations: " + result.size());
            System.out.println("Expected: " + factorial(nums.length));
            System.out.println("Total calls: " + callCount);
            System.out.println("=".repeat(60));
        }
        
        private void backtrack(int[] nums, List<Integer> current, boolean[] used, 
                             List<List<Integer>> result, int depth) {
            callCount++;
            String indent = "  ".repeat(depth);
            
            System.out.println(indent + "Current: " + current);
            
            if (current.size() == nums.length) {
                result.add(new ArrayList<>(current));
                System.out.println(indent + "✓ Complete permutation: " + current);
                return;
            }
            
            for (int i = 0; i < nums.length; i++) {
                if (used[i]) continue;
                
                System.out.println(indent + "→ Adding " + nums[i]);
                current.add(nums[i]);
                used[i] = true;
                
                backtrack(nums, current, used, result, depth + 1);
                
                current.remove(current.size() - 1);
                used[i] = false;
                System.out.println(indent + "← Removing " + nums[i] + " (backtrack)");
            }
        }
        
        private int factorial(int n) {
            if (n <= 1) return 1;
            return n * factorial(n - 1);
        }
    }
    
    // ============================================
    // 4. CALL STACK TRACKER
    // ============================================
    
    static class CallStackTracker {
        private List<String> stack = new ArrayList<>();
        private int maxDepth = 0;
        
        public void trackFactorial(int n) {
            System.out.println("\n" + "=".repeat(60));
            System.out.println("CALL STACK TRACKING: factorial(" + n + ")");
            System.out.println("=".repeat(60));
            
            stack.clear();
            maxDepth = 0;
            
            int result = factorial(n);
            
            System.out.println("\nResult: " + result);
            System.out.println("Max stack depth: " + maxDepth);
            System.out.println("Space complexity: O(" + maxDepth + ")");
        }
        
        private int factorial(int n) {
            stack.add("factorial(" + n + ")");
            if (stack.size() > maxDepth) {
                maxDepth = stack.size();
            }
            
            System.out.println("PUSH: factorial(" + n + ") | Stack depth: " + stack.size());
            printStack();
            
            int result;
            if (n <= 1) {
                result = 1;
            } else {
                result = n * factorial(n - 1);
            }
            
            stack.remove(stack.size() - 1);
            System.out.println("POP:  factorial(" + n + ") → " + result + " | Stack depth: " + stack.size());
            
            return result;
        }
        
        private void printStack() {
            System.out.print("  Stack: [");
            for (int i = 0; i < stack.size(); i++) {
                if (i > 0) System.out.print(" → ");
                System.out.print(stack.get(i));
            }
            System.out.println("]");
        }
    }
    
    // ============================================
    // 5. SUDOKU SOLVER WITH STEPS
    // ============================================
    
    static class SudokuVisualizer {
        private int steps = 0;
        private int backtracks = 0;
        
        public void solve(char[][] board) {
            System.out.println("\n" + "=".repeat(60));
            System.out.println("SUDOKU SOLVER WITH VISUALIZATION");
            System.out.println("=".repeat(60));
            
            System.out.println("\nOriginal puzzle:");
            printBoard(board);
            
            steps = 0;
            backtracks = 0;
            
            if (backtrack(board, 0, 0)) {
                System.out.println("\n" + "=".repeat(60));
                System.out.println("SOLVED!");
                System.out.println("=".repeat(60));
                printBoard(board);
                System.out.println("\nTotal steps: " + steps);
                System.out.println("Total backtracks: " + backtracks);
            } else {
                System.out.println("\nNo solution exists!");
            }
        }
        
        private boolean backtrack(char[][] board, int row, int col) {
            if (col == 9) {
                return backtrack(board, row + 1, 0);
            }
            
            if (row == 9) {
                return true;
            }
            
            if (board[row][col] != '.') {
                return backtrack(board, row, col + 1);
            }
            
            for (char num = '1'; num <= '9'; num++) {
                if (isValid(board, row, col, num)) {
                    steps++;
                    System.out.println("Step " + steps + ": Placing " + num + " at (" + row + "," + col + ")");
                    
                    board[row][col] = num;
                    
                    if (backtrack(board, row, col + 1)) {
                        return true;
                    }
                    
                    backtracks++;
                    System.out.println("Backtrack " + backtracks + ": Removing " + num + " from (" + row + "," + col + ")");
                    board[row][col] = '.';
                }
            }
            
            return false;
        }
        
        private boolean isValid(char[][] board, int row, int col, char num) {
            for (int i = 0; i < 9; i++) {
                if (board[row][i] == num) return false;
                if (board[i][col] == num) return false;
            }
            
            int boxRow = (row / 3) * 3;
            int boxCol = (col / 3) * 3;
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    if (board[boxRow + i][boxCol + j] == num) return false;
                }
            }
            
            return true;
        }
        
        private void printBoard(char[][] board) {
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
    
    // ============================================
    // 6. PERFORMANCE COMPARATOR
    // ============================================
    
    static class PerformanceComparator {
        public void compare(int n) {
            System.out.println("\n" + "=".repeat(60));
            System.out.println("PERFORMANCE COMPARISON: Fibonacci(" + n + ")");
            System.out.println("=".repeat(60));
            
            // Naive recursion
            long start = System.nanoTime();
            int result1 = fibNaive(n);
            long time1 = System.nanoTime() - start;
            
            // With memoization
            start = System.nanoTime();
            int[] memo = new int[n + 1];
            Arrays.fill(memo, -1);
            int result2 = fibMemo(n, memo);
            long time2 = System.nanoTime() - start;
            
            // Iterative
            start = System.nanoTime();
            int result3 = fibIterative(n);
            long time3 = System.nanoTime() - start;
            
            System.out.printf("\n%-20s %-15s %-15s\n", "Method", "Time (ns)", "Result");
            System.out.println("-".repeat(60));
            System.out.printf("%-20s %-15d %-15d\n", "Naive Recursion", time1, result1);
            System.out.printf("%-20s %-15d %-15d\n", "Memoization", time2, result2);
            System.out.printf("%-20s %-15d %-15d\n", "Iterative", time3, result3);
            
            System.out.println("\nSpeedup:");
            System.out.println("  Memoization is " + (time1 / time2) + "x faster than naive");
            System.out.println("  Iterative is " + (time1 / time3) + "x faster than naive");
        }
        
        private int fibNaive(int n) {
            if (n <= 1) return n;
            return fibNaive(n - 1) + fibNaive(n - 2);
        }
        
        private int fibMemo(int n, int[] memo) {
            if (n <= 1) return n;
            if (memo[n] != -1) return memo[n];
            memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
            return memo[n];
        }
        
        private int fibIterative(int n) {
            if (n <= 1) return n;
            int a = 0, b = 1;
            for (int i = 2; i <= n; i++) {
                int temp = a + b;
                a = b;
                b = temp;
            }
            return b;
        }
    }
    
    // ============================================
    // MAIN - INTERACTIVE DEMO
    // ============================================
    
    public static void main(String[] args) {
        System.out.println("*".repeat(60));
        System.out.println("*" + " ".repeat(58) + "*");
        System.out.println("*  DAY 17: RECURSION VISUALIZER - COMPREHENSIVE DEMO  *");
        System.out.println("*" + " ".repeat(58) + "*");
        System.out.println("*".repeat(60));
        
        // Demo 1: Fibonacci Visualization
        FibonacciVisualizer fibViz = new FibonacciVisualizer();
        fibViz.visualize(5);
        fibViz.visualizeMemo(10);
        
        // Demo 2: Call Stack Tracking
        CallStackTracker tracker = new CallStackTracker();
        tracker.trackFactorial(5);
        
        // Demo 3: Permutations
        PermutationsVisualizer permViz = new PermutationsVisualizer();
        permViz.visualize(new int[]{1, 2, 3});
        
        // Demo 4: N-Queens (small board for visualization)
        NQueensVisualizer queensViz = new NQueensVisualizer();
        queensViz.solve(4);
        
        // Demo 5: Performance Comparison
        PerformanceComparator perf = new PerformanceComparator();
        perf.compare(30);
        
        // Demo 6: Sudoku (simplified puzzle)
        SudokuVisualizer sudokuViz = new SudokuVisualizer();
        char[][] easySudoku = {
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
        sudokuViz.solve(easySudoku);
        
        System.out.println("\n" + "*".repeat(60));
        System.out.println("*" + " ".repeat(58) + "*");
        System.out.println("*        ALL VISUALIZATIONS COMPLETE! ✓               *");
        System.out.println("*" + " ".repeat(58) + "*");
        System.out.println("*".repeat(60));
        
        // Summary
        System.out.println("\n" + "=".repeat(60));
        System.out.println("KEY TAKEAWAYS");
        System.out.println("=".repeat(60));
        System.out.println("1. Recursion creates a call stack (space complexity!)");
        System.out.println("2. Memoization dramatically improves performance");
        System.out.println("3. Backtracking explores all possibilities");
        System.out.println("4. Always undo choices when backtracking");
        System.out.println("5. Visualizing helps understand the flow");
        System.out.println("=".repeat(60));
    }
}
