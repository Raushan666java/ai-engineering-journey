package backtracking.questions;

/*
 * 11. SUDOKU SOLVER (LeetCode 37)
 *
 * Problem Statement:
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * A sudoku solution must satisfy all of the following rules:
 * - Each of the digits 1-9 must occur exactly once in each row
 * - Each of the digits 1-9 must occur exactly once in each column
 * - Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes
 *
 * Conceptual Understanding:
 * - Fill 9x9 grid with digits 1-9 following Sudoku rules
 * - Use backtracking to try numbers 1-9 in empty cells
 * - Validate row, column, and 3x3 box constraints
 * - Base case: when all cells are filled correctly
 *
 * Time Complexity: O(9^(81-k)) where k is pre-filled cells
 * Space Complexity: O(1) excluding input board
 */

import java.util.*;

class SudokuSolver11 {

    // Method 1: Basic backtracking approach
    public boolean solveSudoku(char[][] board) {
        return solve(board);
    }

    private boolean solve(char[][] board) {
        // Find empty cell
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == '.') {
                    // Try numbers 1-9
                    for (char num = '1'; num <= '9'; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;

                            if (solve(board)) {
                                return true;
                            }

                            // Backtrack
                            board[row][col] = '.';
                        }
                    }
                    return false; // No valid number found
                }
            }
        }
        return true; // All cells filled
    }

    private boolean isValid(char[][] board, int row, int col, char num) {
        // Check row
        for (int j = 0; j < 9; j++) {
            if (board[row][j] == num) return false;
        }

        // Check column
        for (int i = 0; i < 9; i++) {
            if (board[i][col] == num) return false;
        }

        // Check 3x3 box
        int boxRow = (row / 3) * 3;
        int boxCol = (col / 3) * 3;

        for (int i = boxRow; i < boxRow + 3; i++) {
            for (int j = boxCol; j < boxCol + 3; j++) {
                if (board[i][j] == num) return false;
            }
        }

        return true;
    }

    // Method 2: Count total solutions
    public int countSolutions(char[][] board) {
        return countSolutionsHelper(board);
    }

    private int countSolutionsHelper(char[][] board) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == '.') {
                    int count = 0;
                    for (char num = '1'; num <= '9'; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            count += countSolutionsHelper(board);
                            board[row][col] = '.';
                        }
                    }
                    return count;
                }
            }
        }
        return 1; // Valid solution found
    }

    // Method 3: Get all possible solutions
    public List<char[][]> getAllSolutions(char[][] board) {
        List<char[][]> solutions = new ArrayList<>();
        findAllSolutions(board, solutions);
        return solutions;
    }

    private void findAllSolutions(char[][] board, List<char[][]> solutions) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == '.') {
                    for (char num = '1'; num <= '9'; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;

                            findAllSolutions(board, solutions);

                            board[row][col] = '.';
                        }
                    }
                    return;
                }
            }
        }
        // Found a solution, add copy to results
        char[][] solution = new char[9][9];
        for (int i = 0; i < 9; i++) {
            solution[i] = board[i].clone();
        }
        solutions.add(solution);
    }

    // Method 4: Check if Sudoku is valid (before solving)
    public boolean isValidSudoku(char[][] board) {
        // Check rows
        for (int i = 0; i < 9; i++) {
            if (!isValidUnit(board, i, 0, i, 8)) return false;
        }

        // Check columns
        for (int j = 0; j < 9; j++) {
            if (!isValidUnit(board, 0, j, 8, j)) return false;
        }

        // Check 3x3 boxes
        for (int box = 0; box < 9; box++) {
            int row = (box / 3) * 3;
            int col = (box % 3) * 3;
            if (!isValidBox(board, row, col)) return false;
        }

        return true;
    }

    private boolean isValidUnit(char[][] board, int startRow, int startCol, int endRow, int endCol) {
        Set<Character> seen = new HashSet<>();
        for (int i = startRow; i <= endRow; i++) {
            for (int j = startCol; j <= endCol; j++) {
                char c = board[i][j];
                if (c != '.' && !seen.add(c)) return false;
            }
        }
        return true;
    }

    private boolean isValidBox(char[][] board, int startRow, int startCol) {
        Set<Character> seen = new HashSet<>();
        for (int i = startRow; i < startRow + 3; i++) {
            for (int j = startCol; j < startCol + 3; j++) {
                char c = board[i][j];
                if (c != '.' && !seen.add(c)) return false;
            }
        }
        return true;
    }

    // Method 5: Solve with difficulty analysis
    public static class SudokuResult {
        boolean solved;
        long timeMs;
        int difficulty; // 1-5 scale
        int emptyCells;
        int backtracks;

        public SudokuResult(boolean solved, long timeMs, int difficulty,
                           int emptyCells, int backtracks) {
            this.solved = solved;
            this.timeMs = timeMs;
            this.difficulty = difficulty;
            this.emptyCells = emptyCells;
            this.backtracks = backtracks;
        }

        @Override
        public String toString() {
            return String.format("Solved: %b, Time: %dms, Difficulty: %d/5, Empty: %d, Backtracks: %d",
                               solved, timeMs, difficulty, emptyCells, backtracks);
        }
    }

    public SudokuResult solveWithAnalysis(char[][] board) {
        long startTime = System.nanoTime();

        int emptyCells = countEmptyCells(board);
        int difficulty = estimateDifficulty(board);

        boolean solved = solveSudoku(board);

        long timeMs = (System.nanoTime() - startTime) / 1_000_000;

        // Simplified backtrack count
        int backtracks = emptyCells * 2;

        return new SudokuResult(solved, timeMs, difficulty, emptyCells, backtracks);
    }

    private int countEmptyCells(char[][] board) {
        int count = 0;
        for (char[] row : board) {
            for (char cell : row) {
                if (cell == '.') count++;
            }
        }
        return count;
    }

    private int estimateDifficulty(char[][] board) {
        int emptyCells = countEmptyCells(board);
        if (emptyCells <= 20) return 1;
        if (emptyCells <= 35) return 2;
        if (emptyCells <= 50) return 3;
        if (emptyCells <= 65) return 4;
        return 5;
    }

    // Method 6: Generate Sudoku puzzle
    public char[][] generatePuzzle(int difficulty) {
        char[][] board = new char[9][9];

        // Start with empty board
        for (int i = 0; i < 9; i++) {
            Arrays.fill(board[i], '.');
        }

        // Fill diagonal 3x3 boxes first (they don't affect each other)
        fillDiagonalBoxes(board);

        // Fill remaining cells
        solve(board);

        // Remove cells based on difficulty
        int cellsToRemove = getCellsToRemove(difficulty);
        removeCells(board, cellsToRemove);

        return board;
    }

    private void fillDiagonalBoxes(char[][] board) {
        for (int box = 0; box < 9; box += 4) { // 0, 4, 8
            fillBox(board, (box / 3) * 3, (box % 3) * 3);
        }
    }

    private void fillBox(char[][] board, int row, int col) {
        List<Character> nums = new ArrayList<>();
        for (char c = '1'; c <= '9'; c++) nums.add(c);
        Collections.shuffle(nums);

        int idx = 0;
        for (int i = row; i < row + 3; i++) {
            for (int j = col; j < col + 3; j++) {
                board[i][j] = nums.get(idx++);
            }
        }
    }

    private int getCellsToRemove(int difficulty) {
        switch (difficulty) {
            case 1: return 20;  // Easy
            case 2: return 35;  // Medium
            case 3: return 50;  // Hard
            case 4: return 65;  // Expert
            case 5: return 75;  // Master
            default: return 40;
        }
    }

    private void removeCells(char[][] board, int cellsToRemove) {
        Random rand = new Random();
        int removed = 0;

        while (removed < cellsToRemove) {
            int row = rand.nextInt(9);
            int col = rand.nextInt(9);

            if (board[row][col] != '.') {
                board[row][col] = '.';
                removed++;
            }
        }
    }

    // Method 7: Get board statistics
    public static class BoardStats {
        int emptyCells;
        int filledCells;
        double fillPercentage;
        Map<Character, Integer> digitFrequency;
        boolean isValid;

        public BoardStats(int emptyCells, int filledCells, double fillPercentage,
                         Map<Character, Integer> digitFrequency, boolean isValid) {
            this.emptyCells = emptyCells;
            this.filledCells = filledCells;
            this.fillPercentage = fillPercentage;
            this.digitFrequency = digitFrequency;
            this.isValid = isValid;
        }

        @Override
        public String toString() {
            return String.format("Empty: %d, Filled: %d (%.1f%%), Valid: %b, Digits: %s",
                               emptyCells, filledCells, fillPercentage, isValid, digitFrequency);
        }
    }

    public BoardStats getBoardStats(char[][] board) {
        int emptyCells = 0;
        int filledCells = 0;
        Map<Character, Integer> digitFreq = new HashMap<>();

        for (char[] row : board) {
            for (char cell : row) {
                if (cell == '.') {
                    emptyCells++;
                } else {
                    filledCells++;
                    digitFreq.put(cell, digitFreq.getOrDefault(cell, 0) + 1);
                }
            }
        }

        double fillPercentage = (double) filledCells / (filledCells + emptyCells) * 100;
        boolean isValid = isValidSudoku(board);

        return new BoardStats(emptyCells, filledCells, fillPercentage, digitFreq, isValid);
    }

    // Method 8: Solve with different strategies
    public boolean solveWithOptimization(char[][] board) {
        // Use more efficient approach with candidate lists
        int[][] candidates = new int[9][9];

        // Initialize candidates for empty cells
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    candidates[i][j] = getCandidates(board, i, j);
                }
            }
        }

        return solveOptimized(board, candidates, 0, 0);
    }

    private int getCandidates(char[][] board, int row, int col) {
        boolean[] used = new boolean[10]; // 1-9

        // Check row
        for (int j = 0; j < 9; j++) {
            if (board[row][j] != '.') {
                used[board[row][j] - '0'] = true;
            }
        }

        // Check column
        for (int i = 0; i < 9; i++) {
            if (board[i][col] != '.') {
                used[board[i][col] - '0'] = true;
            }
        }

        // Check box
        int boxRow = (row / 3) * 3;
        int boxCol = (col / 3) * 3;
        for (int i = boxRow; i < boxRow + 3; i++) {
            for (int j = boxCol; j < boxCol + 3; j++) {
                if (board[i][j] != '.') {
                    used[board[i][j] - '0'] = true;
                }
            }
        }

        // Convert to bitmask
        int mask = 0;
        for (int i = 1; i <= 9; i++) {
            if (!used[i]) {
                mask |= (1 << i);
            }
        }

        return mask;
    }

    private boolean solveOptimized(char[][] board, int[][] candidates, int row, int col) {
        if (row == 9) return true;

        int nextRow = (col == 8) ? row + 1 : row;
        int nextCol = (col == 8) ? 0 : col + 1;

        if (board[row][col] != '.') {
            return solveOptimized(board, candidates, nextRow, nextCol);
        }

        int mask = candidates[row][col];
        for (int num = 1; num <= 9; num++) {
            if ((mask & (1 << num)) != 0) {
                board[row][col] = (char) ('0' + num);

                if (solveOptimized(board, candidates, nextRow, nextCol)) {
                    return true;
                }

                board[row][col] = '.';
            }
        }

        return false;
    }

    // Method 9: Check if puzzle has unique solution
    public boolean hasUniqueSolution(char[][] board) {
        int solutions = countSolutions(board);
        return solutions == 1;
    }

    // Method 10: Get difficulty rating
    public int getDifficultyRating(char[][] board) {
        if (!isValidSudoku(board)) return -1; // Invalid

        int emptyCells = countEmptyCells(board);

        // Simple difficulty estimation
        if (emptyCells <= 25) return 1; // Very Easy
        if (emptyCells <= 35) return 2; // Easy
        if (emptyCells <= 45) return 3; // Medium
        if (emptyCells <= 55) return 4; // Hard
        if (emptyCells <= 65) return 5; // Expert
        return 6; // Master
    }

    // Method 11: Solve with step-by-step tracking
    public List<String> solveWithSteps(char[][] board) {
        List<String> steps = new ArrayList<>();
        solveWithStepsHelper(board, steps);
        return steps;
    }

    private boolean solveWithStepsHelper(char[][] board, List<String> steps) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == '.') {
                    for (char num = '1'; num <= '9'; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            steps.add(String.format("Placed %c at (%d,%d)", num, row, col));

                            if (solveWithStepsHelper(board, steps)) {
                                return true;
                            }

                            steps.add(String.format("Backtracked from (%d,%d)", row, col));
                            board[row][col] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        steps.add("Puzzle solved!");
        return true;
    }

    // Method 12: Advanced Sudoku solver with heuristics
    public boolean solveWithHeuristics(char[][] board) {
        // Use minimum remaining values (MRV) heuristic
        return solveMRV(board);
    }

    private boolean solveMRV(char[][] board) {
        // Find cell with minimum candidates
        int[] cell = findMRVCell(board);
        if (cell == null) return true; // Solved

        int row = cell[0];
        int col = cell[1];

        for (char num = '1'; num <= '9'; num++) {
            if (isValid(board, row, col, num)) {
                board[row][col] = num;

                if (solveMRV(board)) {
                    return true;
                }

                board[row][col] = '.';
            }
        }

        return false;
    }

    private int[] findMRVCell(char[][] board) {
        int minCandidates = 10;
        int[] bestCell = null;

        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    int candidates = countCandidates(board, i, j);
                    if (candidates < minCandidates) {
                        minCandidates = candidates;
                        bestCell = new int[]{i, j};
                    }
                }
            }
        }

        return bestCell;
    }

    private int countCandidates(char[][] board, int row, int col) {
        int count = 0;
        for (char num = '1'; num <= '9'; num++) {
            if (isValid(board, row, col, num)) {
                count++;
            }
        }
        return count;
    }

    // Test cases
    public static void main(String[] args) {
        SudokuSolver11 solver = new SudokuSolver11();

        // Test Case 1: Basic Sudoku solving
        System.out.println("=== Sudoku Solver ===");
        char[][] board1 = {
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

        System.out.println("Original board:");
        printBoard(board1);

        boolean solved = solver.solveSudoku(board1);
        System.out.println("Solved: " + solved);
        if (solved) {
            System.out.println("Solution:");
            printBoard(board1);
        }

        // Test Case 2: Count solutions
        char[][] board2 = {
            {'.','.','.','.','.','.','.','.','.'},
            {'.','.','.','.','.','.','.','.','.'},
            {'.','.','.','.','.','.','.','.','.'},
            {'.','.','.','.','.','.','.','.','.'},
            {'.','.','.','.','.','.','.','.','.'},
            {'.','.','.','.','.','.','.','.','.'},
            {'.','.','.','.','.','.','.','.','.'},
            {'.','.','.','.','.','.','.','.','.'},
            {'.','.','.','.','.','.','.','.','.'}
        };
        int solutions = solver.countSolutions(board2);
        System.out.println("Empty board solutions: " + solutions);

        // Test Case 3: Validate Sudoku
        boolean valid = solver.isValidSudoku(board1);
        System.out.println("Board is valid: " + valid);

        // Test Case 4: Analysis
        SudokuResult analysis = solver.solveWithAnalysis(board1);
        System.out.println("Analysis: " + analysis);

        // Test Case 5: Generate puzzle
        char[][] generated = solver.generatePuzzle(2);
        System.out.println("Generated puzzle (difficulty 2):");
        printBoard(generated);

        // Test Case 6: Board statistics
        BoardStats stats = solver.getBoardStats(board1);
        System.out.println("Board stats: " + stats);

        // Test Case 7: Optimized solving
        char[][] boardCopy = copyBoard(board1);
        boolean optimized = solver.solveWithOptimization(boardCopy);
        System.out.println("Optimized solve: " + optimized);

        // Test Case 8: Unique solution check
        boolean unique = solver.hasUniqueSolution(board1);
        System.out.println("Has unique solution: " + unique);

        // Test Case 9: Difficulty rating
        int difficulty = solver.getDifficultyRating(board1);
        System.out.println("Difficulty rating: " + difficulty);

        // Test Case 10: Step-by-step solving
        List<String> steps = solver.solveWithSteps(copyBoard(board1));
        System.out.println("Steps taken: " + steps.size());

        // Test Case 11: Heuristic solving
        boolean heuristic = solver.solveWithHeuristics(copyBoard(board1));
        System.out.println("Heuristic solve: " + heuristic);

        // Test Case 12: Edge cases
        System.out.println("\nEdge cases:");
        char[][] solvedBoard = {
            {'1','2','3','4','5','6','7','8','9'},
            {'4','5','6','7','8','9','1','2','3'},
            {'7','8','9','1','2','3','4','5','6'},
            {'2','3','4','5','6','7','8','9','1'},
            {'5','6','7','8','9','1','2','3','4'},
            {'8','9','1','2','3','4','5','6','7'},
            {'3','4','5','6','7','8','9','1','2'},
            {'6','7','8','9','1','2','3','4','5'},
            {'9','1','2','3','4','5','6','7','8'}
        };
        System.out.println("Already solved board: " + solver.solveSudoku(solvedBoard));
    }

    private static void printBoard(char[][] board) {
        for (int i = 0; i < 9; i++) {
            if (i % 3 == 0 && i > 0) {
                System.out.println("- - - + - - - + - - -");
            }
            for (int j = 0; j < 9; j++) {
                if (j % 3 == 0 && j > 0) {
                    System.out.print(" | ");
                }
                System.out.print(board[i][j] == '.' ? "." : board[i][j]);
                if (j < 8) System.out.print(" ");
            }
            System.out.println();
        }
        System.out.println();
    }

    private static char[][] copyBoard(char[][] board) {
        char[][] copy = new char[9][9];
        for (int i = 0; i < 9; i++) {
            copy[i] = board[i].clone();
        }
        return copy;
    }
}