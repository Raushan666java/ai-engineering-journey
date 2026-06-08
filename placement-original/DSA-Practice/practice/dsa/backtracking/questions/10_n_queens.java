package backtracking.questions;

/*
 * 10. N-QUEENS (LeetCode 51)
 *
 * Problem Statement:
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * so that no two queens attack each other. Given an integer n, return all
 * distinct solutions to the n-queens puzzle.
 *
 * Conceptual Understanding:
 * - Place N queens on N×N board so no queen attacks another
 * - Queens attack horizontally, vertically, and diagonally
 * - Use backtracking to try placing queens row by row
 * - Track used columns and diagonals to validate placements
 * - Base case: when all queens are placed successfully
 *
 * Time Complexity: O(N!) in worst case, but pruning reduces it significantly
 * Space Complexity: O(N) for tracking arrays and recursion stack
 */

import java.util.*;

class NQueens10 {

    // Method 1: Basic backtracking approach
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        if (n <= 0) return result;

        // Initialize board
        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) {
            Arrays.fill(board[i], '.');
        }

        // Track used columns and diagonals
        boolean[] columns = new boolean[n];
        boolean[] diagonals1 = new boolean[2 * n - 1]; // top-left to bottom-right
        boolean[] diagonals2 = new boolean[2 * n - 1]; // top-right to bottom-left

        backtrack(board, 0, columns, diagonals1, diagonals2, result);
        return result;
    }

    private void backtrack(char[][] board, int row, boolean[] columns,
                          boolean[] diagonals1, boolean[] diagonals2, List<List<String>> result) {
        int n = board.length;

        // Base case: all queens placed
        if (row == n) {
            result.add(constructBoard(board));
            return;
        }

        // Try placing queen in each column of current row
        for (int col = 0; col < n; col++) {
            int diag1 = row - col + n - 1; // diagonal index
            int diag2 = row + col;         // anti-diagonal index

            // Check if position is safe
            if (columns[col] || diagonals1[diag1] || diagonals2[diag2]) {
                continue;
            }

            // Place queen
            board[row][col] = 'Q';
            columns[col] = true;
            diagonals1[diag1] = true;
            diagonals2[diag2] = true;

            // Recurse to next row
            backtrack(board, row + 1, columns, diagonals1, diagonals2, result);

            // Backtrack: remove queen
            board[row][col] = '.';
            columns[col] = false;
            diagonals1[diag1] = false;
            diagonals2[diag2] = false;
        }
    }

    private List<String> constructBoard(char[][] board) {
        List<String> boardStr = new ArrayList<>();
        for (char[] row : board) {
            boardStr.add(new String(row));
        }
        return boardStr;
    }

    // Method 2: Count total solutions
    public int totalNQueens(int n) {
        if (n <= 0) return 0;

        boolean[] columns = new boolean[n];
        boolean[] diagonals1 = new boolean[2 * n - 1];
        boolean[] diagonals2 = new boolean[2 * n - 1];

        return countBacktrack(0, columns, diagonals1, diagonals2, n);
    }

    private int countBacktrack(int row, boolean[] columns, boolean[] diagonals1,
                              boolean[] diagonals2, int n) {
        if (row == n) return 1;

        int count = 0;
        for (int col = 0; col < n; col++) {
            int diag1 = row - col + n - 1;
            int diag2 = row + col;

            if (!columns[col] && !diagonals1[diag1] && !diagonals2[diag2]) {
                columns[col] = true;
                diagonals1[diag1] = true;
                diagonals2[diag2] = true;

                count += countBacktrack(row + 1, columns, diagonals1, diagonals2, n);

                columns[col] = false;
                diagonals1[diag1] = false;
                diagonals2[diag2] = false;
            }
        }
        return count;
    }

    // Method 3: Get first N solutions
    public List<List<String>> solveNQueensFirstK(int n, int k) {
        List<List<String>> result = new ArrayList<>();
        if (n <= 0 || k <= 0) return result;

        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) {
            Arrays.fill(board[i], '.');
        }

        boolean[] columns = new boolean[n];
        boolean[] diagonals1 = new boolean[2 * n - 1];
        boolean[] diagonals2 = new boolean[2 * n - 1];

        backtrackFirstK(board, 0, columns, diagonals1, diagonals2, result, k);
        return result;
    }

    private boolean backtrackFirstK(char[][] board, int row, boolean[] columns,
                                   boolean[] diagonals1, boolean[] diagonals2,
                                   List<List<String>> result, int k) {
        int n = board.length;

        if (row == n) {
            result.add(constructBoard(board));
            return result.size() >= k; // Stop if we have enough solutions
        }

        for (int col = 0; col < n; col++) {
            int diag1 = row - col + n - 1;
            int diag2 = row + col;

            if (!columns[col] && !diagonals1[diag1] && !diagonals2[diag2]) {
                board[row][col] = 'Q';
                columns[col] = true;
                diagonals1[diag1] = true;
                diagonals2[diag2] = true;

                if (backtrackFirstK(board, row + 1, columns, diagonals1, diagonals2, result, k)) {
                    return true;
                }

                board[row][col] = '.';
                columns[col] = false;
                diagonals1[diag1] = false;
                diagonals2[diag2] = false;
            }
        }
        return false;
    }

    // Method 4: Check if placement is valid
    public boolean isValidPlacement(List<Integer> queens) {
        int n = queens.size();
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                // Check same column
                if (queens.get(i).equals(queens.get(j))) return false;

                // Check diagonals
                if (Math.abs(queens.get(i) - queens.get(j)) == Math.abs(i - j)) return false;
            }
        }
        return true;
    }

    // Method 5: Generate board from queen positions
    public List<String> generateBoard(List<Integer> queens) {
        List<String> board = new ArrayList<>();
        int n = queens.size();

        for (int i = 0; i < n; i++) {
            char[] row = new char[n];
            Arrays.fill(row, '.');
            row[queens.get(i)] = 'Q';
            board.add(new String(row));
        }

        return board;
    }

    // Method 6: Performance analysis
    public static class NQueensAnalysis {
        int n;
        int totalSolutions;
        long timeMs;
        double solutionsPerSecond;
        int boardSize;

        public NQueensAnalysis(int n, int totalSolutions, long timeMs,
                              double solutionsPerSecond, int boardSize) {
            this.n = n;
            this.totalSolutions = totalSolutions;
            this.timeMs = timeMs;
            this.solutionsPerSecond = solutionsPerSecond;
            this.boardSize = boardSize;
        }

        @Override
        public String toString() {
            return String.format("N=%d, Solutions=%d, Time=%dms, Rate=%.2f sol/s, Board=%dx%d",
                               n, totalSolutions, timeMs, solutionsPerSecond, boardSize, boardSize);
        }
    }

    public NQueensAnalysis analyzeNQueens(int n) {
        long startTime = System.nanoTime();
        int solutions = totalNQueens(n);
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;

        double rate = timeMs > 0 ? (double) solutions / (timeMs / 1000.0) : 0;

        return new NQueensAnalysis(n, solutions, timeMs, rate, n);
    }

    // Method 7: Get solution statistics
    public static class SolutionStats {
        int totalSolutions;
        int minQueens;
        int maxQueens;
        double avgQueensPerSolution;
        Map<Integer, Integer> queenPositionFrequency;

        public SolutionStats(int totalSolutions, int minQueens, int maxQueens,
                           double avgQueensPerSolution, Map<Integer, Integer> queenPositionFrequency) {
            this.totalSolutions = totalSolutions;
            this.minQueens = minQueens;
            this.maxQueens = maxQueens;
            this.avgQueensPerSolution = avgQueensPerSolution;
            this.queenPositionFrequency = queenPositionFrequency;
        }

        @Override
        public String toString() {
            return String.format("Solutions: %d, Queens: %d-%d (avg: %.1f), Positions: %s",
                               totalSolutions, minQueens, maxQueens, avgQueensPerSolution, queenPositionFrequency);
        }
    }

    public SolutionStats getSolutionStats(int n) {
        List<List<String>> solutions = solveNQueens(n);

        if (solutions.isEmpty()) {
            return new SolutionStats(0, 0, 0, 0, new HashMap<>());
        }

        int totalSolutions = solutions.size();
        int minQueens = Integer.MAX_VALUE;
        int maxQueens = Integer.MIN_VALUE;
        int totalQueens = 0;
        Map<Integer, Integer> positionFreq = new HashMap<>();

        for (List<String> solution : solutions) {
            int queenCount = 0;
            for (int row = 0; row < solution.size(); row++) {
                String boardRow = solution.get(row);
                for (int col = 0; col < boardRow.length(); col++) {
                    if (boardRow.charAt(col) == 'Q') {
                        queenCount++;
                        positionFreq.put(col, positionFreq.getOrDefault(col, 0) + 1);
                    }
                }
            }
            minQueens = Math.min(minQueens, queenCount);
            maxQueens = Math.max(maxQueens, queenCount);
            totalQueens += queenCount;
        }

        double avgQueens = (double) totalQueens / totalSolutions;

        return new SolutionStats(totalSolutions, minQueens, maxQueens, avgQueens, positionFreq);
    }

    // Method 8: N-Queens with obstacles
    public List<List<String>> solveNQueensWithObstacles(int n, boolean[][] obstacles) {
        List<List<String>> result = new ArrayList<>();
        if (n <= 0) return result;

        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) {
            Arrays.fill(board[i], '.');
        }

        // Mark obstacles
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (obstacles[i][j]) {
                    board[i][j] = 'X'; // Obstacle
                }
            }
        }

        boolean[] columns = new boolean[n];
        boolean[] diagonals1 = new boolean[2 * n - 1];
        boolean[] diagonals2 = new boolean[2 * n - 1];

        backtrackObstacles(board, 0, columns, diagonals1, diagonals2, result);
        return result;
    }

    private void backtrackObstacles(char[][] board, int row, boolean[] columns,
                                   boolean[] diagonals1, boolean[] diagonals2,
                                   List<List<String>> result) {
        int n = board.length;

        if (row == n) {
            result.add(constructBoard(board));
            return;
        }

        for (int col = 0; col < n; col++) {
            if (board[row][col] == 'X') continue; // Skip obstacles

            int diag1 = row - col + n - 1;
            int diag2 = row + col;

            if (!columns[col] && !diagonals1[diag1] && !diagonals2[diag2]) {
                board[row][col] = 'Q';
                columns[col] = true;
                diagonals1[diag1] = true;
                diagonals2[diag2] = true;

                backtrackObstacles(board, row + 1, columns, diagonals1, diagonals2, result);

                board[row][col] = '.';
                columns[col] = false;
                diagonals1[diag1] = false;
                diagonals2[diag2] = false;
            }
        }
    }

    // Method 9: Find all attacking pairs
    public int countAttackingPairs(List<String> board) {
        int n = board.size();
        int attacks = 0;

        // Find queen positions
        List<int[]> queens = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (board.get(i).charAt(j) == 'Q') {
                    queens.add(new int[]{i, j});
                }
            }
        }

        // Check all pairs
        for (int i = 0; i < queens.size(); i++) {
            for (int j = i + 1; j < queens.size(); j++) {
                int[] q1 = queens.get(i);
                int[] q2 = queens.get(j);

                // Same row or column
                if (q1[0] == q2[0] || q1[1] == q2[1]) {
                    attacks++;
                }
                // Diagonal
                else if (Math.abs(q1[0] - q2[0]) == Math.abs(q1[1] - q2[1])) {
                    attacks++;
                }
            }
        }

        return attacks;
    }

    // Method 10: N-Queens II (just count)
    public int totalNQueensII(int n) {
        return totalNQueens(n);
    }

    // Method 11: Get solutions with specific patterns
    public List<List<String>> getSolutionsWithPattern(int n, String pattern) {
        List<List<String>> allSolutions = solveNQueens(n);
        List<List<String>> filtered = new ArrayList<>();

        for (List<String> solution : allSolutions) {
            if (matchesPattern(solution, pattern)) {
                filtered.add(solution);
            }
        }

        return filtered;
    }

    private boolean matchesPattern(List<String> solution, String pattern) {
        // Simple pattern matching - check if first row matches pattern
        if (solution.isEmpty()) return false;

        String firstRow = solution.get(0);
        return firstRow.contains(pattern);
    }

    // Method 12: Advanced N-Queens with constraints
    public List<List<String>> solveNQueensAdvanced(int n, boolean allowAdjacent,
                                                  int maxSolutions, boolean symmetricOnly) {
        List<List<String>> result = new ArrayList<>();
        if (n <= 0) return result;

        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) {
            Arrays.fill(board[i], '.');
        }

        boolean[] columns = new boolean[n];
        boolean[] diagonals1 = new boolean[2 * n - 1];
        boolean[] diagonals2 = new boolean[2 * n - 1];

        backtrackAdvanced(board, 0, columns, diagonals1, diagonals2, result,
                         allowAdjacent, maxSolutions, symmetricOnly);
        return result;
    }

    private boolean backtrackAdvanced(char[][] board, int row, boolean[] columns,
                                     boolean[] diagonals1, boolean[] diagonals2,
                                     List<List<String>> result, boolean allowAdjacent,
                                     int maxSolutions, boolean symmetricOnly) {
        int n = board.length;

        if (row == n) {
            List<String> solution = constructBoard(board);

            // Check symmetry if required
            if (symmetricOnly && !isSymmetric(solution)) {
                return false;
            }

            result.add(solution);
            return result.size() >= maxSolutions;
        }

        for (int col = 0; col < n; col++) {
            int diag1 = row - col + n - 1;
            int diag2 = row + col;

            // Check adjacent constraint
            if (!allowAdjacent && hasAdjacentQueen(board, row, col)) {
                continue;
            }

            if (!columns[col] && !diagonals1[diag1] && !diagonals2[diag2]) {
                board[row][col] = 'Q';
                columns[col] = true;
                diagonals1[diag1] = true;
                diagonals2[diag2] = true;

                if (backtrackAdvanced(board, row + 1, columns, diagonals1, diagonals2,
                                    result, allowAdjacent, maxSolutions, symmetricOnly)) {
                    return true;
                }

                board[row][col] = '.';
                columns[col] = false;
                diagonals1[diag1] = false;
                diagonals2[diag2] = false;
            }
        }
        return false;
    }

    private boolean hasAdjacentQueen(char[][] board, int row, int col) {
        int[] dr = {-1, -1, -1, 0, 0, 1, 1, 1};
        int[] dc = {-1, 0, 1, -1, 1, -1, 0, 1};

        for (int d = 0; d < 8; d++) {
            int nr = row + dr[d];
            int nc = col + dc[d];

            if (nr >= 0 && nr < board.length && nc >= 0 && nc < board[0].length &&
                board[nr][nc] == 'Q') {
                return true;
            }
        }
        return false;
    }

    private boolean isSymmetric(List<String> solution) {
        int n = solution.size();
        for (int i = 0; i < n; i++) {
            String row = solution.get(i);
            String reversed = new StringBuilder(row).reverse().toString();
            if (!row.equals(reversed)) {
                return false;
            }
        }
        return true;
    }

    // Test cases
    public static void main(String[] args) {
        NQueens10 solution = new NQueens10();

        // Test Case 1: Basic N-Queens
        System.out.println("=== N-Queens Problem ===");
        int n1 = 4;
        List<List<String>> result1 = solution.solveNQueens(n1);
        System.out.println("N=" + n1 + ", Solutions: " + result1.size());
        if (!result1.isEmpty()) {
            System.out.println("First solution:");
            for (String row : result1.get(0)) {
                System.out.println(row);
            }
        }

        // Test Case 2: Count solutions
        int count = solution.totalNQueens(n1);
        System.out.println("Total solutions for N=" + n1 + ": " + count);

        // Test Case 3: First K solutions
        List<List<String>> firstK = solution.solveNQueensFirstK(8, 3);
        System.out.println("First 3 solutions for N=8: " + firstK.size());

        // Test Case 4: Validate placement
        List<Integer> testPlacement = Arrays.asList(1, 3, 0, 2);
        boolean valid = solution.isValidPlacement(testPlacement);
        System.out.println("Placement " + testPlacement + " is valid: " + valid);

        // Test Case 5: Generate board
        List<String> board = solution.generateBoard(testPlacement);
        System.out.println("Generated board:");
        for (String row : board) {
            System.out.println(row);
        }

        // Test Case 6: Performance analysis
        NQueensAnalysis analysis = solution.analyzeNQueens(8);
        System.out.println("Analysis: " + analysis);

        // Test Case 7: Solution statistics
        SolutionStats stats = solution.getSolutionStats(4);
        System.out.println("Stats: " + stats);

        // Test Case 8: With obstacles
        boolean[][] obstacles = new boolean[4][4];
        obstacles[1][1] = true; // Block center
        List<List<String>> withObstacles = solution.solveNQueensWithObstacles(4, obstacles);
        System.out.println("Solutions with obstacles: " + withObstacles.size());

        // Test Case 9: Count attacking pairs
        int attacks = solution.countAttackingPairs(result1.get(0));
        System.out.println("Attacking pairs in first solution: " + attacks);

        // Test Case 10: N-Queens II
        int count2 = solution.totalNQueensII(5);
        System.out.println("N-Queens II for N=5: " + count2);

        // Test Case 11: Pattern matching
        List<List<String>> patternSolutions = solution.getSolutionsWithPattern(4, "Q");
        System.out.println("Solutions with pattern: " + patternSolutions.size());

        // Test Case 12: Advanced constraints
        List<List<String>> advanced = solution.solveNQueensAdvanced(4, false, 10, false);
        System.out.println("Advanced solutions: " + advanced.size());

        // Test Case 13: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("N=1: " + solution.solveNQueens(1).size() + " solutions");
        System.out.println("N=2: " + solution.solveNQueens(2).size() + " solutions");
        System.out.println("N=3: " + solution.solveNQueens(3).size() + " solutions");
    }
}