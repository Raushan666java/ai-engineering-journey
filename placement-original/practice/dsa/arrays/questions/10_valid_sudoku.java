package arrays.questions;

/*
 * 10. VALID SUDOKU (LeetCode 36)
 *
 * Problem Statement:
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated
 * according to the following rules:
 * 1. Each row must contain the digits 1-9 without repetition.
 * 2. Each column must contain the digits 1-9 without repetition.
 * 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * Note: A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 *
 * Conceptual Understanding:
 * - Validate 9x9 Sudoku board for uniqueness rules
 * - Check rows, columns, and 3x3 subgrids
 * - Only validate filled cells (not empty ones)
 * - Time: O(1) since board is fixed 9x9
 * - Space: O(1) using boolean arrays
 * - Use three 9x9 boolean arrays for tracking
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

class ValidSudoku10 {

    // Method 1: Using boolean arrays (most efficient)
    public boolean isValidSudoku(char[][] board) {
        // Track seen numbers in rows, columns, and boxes
        boolean[][] rows = new boolean[9][9];
        boolean[][] cols = new boolean[9][9];
        boolean[][] boxes = new boolean[9][9];

        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char c = board[i][j];
                if (c == '.') continue;

                int num = c - '1'; // Convert to 0-8
                int boxIndex = (i / 3) * 3 + (j / 3);

                // Check if number already exists
                if (rows[i][num] || cols[j][num] || boxes[boxIndex][num]) {
                    return false;
                }

                // Mark as seen
                rows[i][num] = true;
                cols[j][num] = true;
                boxes[boxIndex][num] = true;
            }
        }

        return true;
    }

    // Method 2: Using HashSet for each row/column/box
    public boolean isValidSudokuHashSet(char[][] board) {
        java.util.Set<String> seen = new java.util.HashSet<>();

        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char c = board[i][j];
                if (c == '.') continue;

                // Create unique keys for row, column, and box
                String rowKey = "row" + i + c;
                String colKey = "col" + j + c;
                String boxKey = "box" + (i / 3) * 3 + (j / 3) + c;

                if (!seen.add(rowKey) || !seen.add(colKey) || !seen.add(boxKey)) {
                    return false;
                }
            }
        }

        return true;
    }

    // Method 3: Separate validation for rows, columns, and boxes
    public boolean isValidSudokuSeparate(char[][] board) {
        return isValidRows(board) && isValidColumns(board) && isValidBoxes(board);
    }

    private boolean isValidRows(char[][] board) {
        for (int i = 0; i < 9; i++) {
            boolean[] seen = new boolean[9];
            for (int j = 0; j < 9; j++) {
                char c = board[i][j];
                if (c == '.') continue;

                int num = c - '1';
                if (seen[num]) return false;
                seen[num] = true;
            }
        }
        return true;
    }

    private boolean isValidColumns(char[][] board) {
        for (int j = 0; j < 9; j++) {
            boolean[] seen = new boolean[9];
            for (int i = 0; i < 9; i++) {
                char c = board[i][j];
                if (c == '.') continue;

                int num = c - '1';
                if (seen[num]) return false;
                seen[num] = true;
            }
        }
        return true;
    }

    private boolean isValidBoxes(char[][] board) {
        for (int box = 0; box < 9; box++) {
            boolean[] seen = new boolean[9];
            int rowStart = (box / 3) * 3;
            int colStart = (box % 3) * 3;

            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    char c = board[rowStart + i][colStart + j];
                    if (c == '.') continue;

                    int num = c - '1';
                    if (seen[num]) return false;
                    seen[num] = true;
                }
            }
        }
        return true;
    }

    // Method 4: Using bit manipulation
    public boolean isValidSudokuBit(char[][] board) {
        int[] rows = new int[9];
        int[] cols = new int[9];
        int[] boxes = new int[9];

        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char c = board[i][j];
                if (c == '.') continue;

                int num = c - '1';
                int mask = 1 << num;
                int boxIndex = (i / 3) * 3 + (j / 3);

                if ((rows[i] & mask) != 0 || (cols[j] & mask) != 0 || (boxes[boxIndex] & mask) != 0) {
                    return false;
                }

                rows[i] |= mask;
                cols[j] |= mask;
                boxes[boxIndex] |= mask;
            }
        }

        return true;
    }

    // Method 5: Recursive validation (educational)
    public boolean isValidSudokuRecursive(char[][] board) {
        return validateCell(board, 0, 0);
    }

    private boolean validateCell(char[][] board, int row, int col) {
        if (row == 9) return true;
        if (col == 9) return validateCell(board, row + 1, 0);

        char c = board[row][col];
        if (c == '.') return validateCell(board, row, col + 1);

        // Check if valid placement
        if (isValidPlacement(board, row, col, c)) {
            return validateCell(board, row, col + 1);
        }

        return false;
    }

    private boolean isValidPlacement(char[][] board, int row, int col, char c) {
        // Check row
        for (int j = 0; j < 9; j++) {
            if (j != col && board[row][j] == c) return false;
        }

        // Check column
        for (int i = 0; i < 9; i++) {
            if (i != row && board[i][col] == c) return false;
        }

        // Check 3x3 box
        int boxRow = (row / 3) * 3;
        int boxCol = (col / 3) * 3;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                int r = boxRow + i;
                int c = boxCol + j;
                if ((r != row || c != col) && board[r][c] == c) return false;
            }
        }

        return true;
    }

    // Method 6: Using streams (educational)
    public boolean isValidSudokuStreams(char[][] board) {
        // Check rows
        for (int i = 0; i < 9; i++) {
            final int row = i;
            boolean rowValid = java.util.Arrays.stream(board[row])
                    .filter(c -> c != '.')
                    .allMatch(new java.util.function.Predicate<Character>() {
                        java.util.Set<Character> seen = new java.util.HashSet<>();
                        public boolean test(Character c) {
                            return seen.add(c);
                        }
                    });
            if (!rowValid) return false;
        }

        // Check columns
        for (int j = 0; j < 9; j++) {
            final int col = j;
            boolean colValid = java.util.stream.IntStream.range(0, 9)
                    .mapToObj(i -> board[i][col])
                    .filter(c -> c != '.')
                    .allMatch(new java.util.function.Predicate<Character>() {
                        java.util.Set<Character> seen = new java.util.HashSet<>();
                        public boolean test(Character c) {
                            return seen.add(c);
                        }
                    });
            if (!colValid) return false;
        }

        // Check boxes
        for (int box = 0; box < 9; box++) {
            final int b = box;
            boolean boxValid = java.util.stream.IntStream.range(0, 9)
                    .mapToObj(i -> {
                        int row = (b / 3) * 3 + i / 3;
                        int col = (b % 3) * 3 + i % 3;
                        return board[row][col];
                    })
                    .filter(c -> c != '.')
                    .allMatch(new java.util.function.Predicate<Character>() {
                        java.util.Set<Character> seen = new java.util.HashSet<>();
                        public boolean test(Character c) {
                            return seen.add(c);
                        }
                    });
            if (!boxValid) return false;
        }

        return true;
    }

    // Method 7: Count-based validation
    public boolean isValidSudokuCount(char[][] board) {
        int[][] rowCount = new int[9][9];
        int[][] colCount = new int[9][9];
        int[][] boxCount = new int[9][9];

        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char c = board[i][j];
                if (c == '.') continue;

                int num = c - '1';
                int boxIndex = (i / 3) * 3 + (j / 3);

                rowCount[i][num]++;
                colCount[j][num]++;
                boxCount[boxIndex][num]++;

                if (rowCount[i][num] > 1 || colCount[j][num] > 1 || boxCount[boxIndex][num] > 1) {
                    return false;
                }
            }
        }

        return true;
    }

    // Method 8: Validate partial board (only filled cells)
    public boolean isValidPartialSudoku(char[][] board) {
        // Same as isValidSudoku - only validates filled cells
        return isValidSudoku(board);
    }

    // Method 9: Check if board is solvable (advanced)
    public boolean isSolvableSudoku(char[][] board) {
        // First check if valid
        if (!isValidSudoku(board)) return false;

        // Try to solve using backtracking
        return solveSudoku(board);
    }

    private boolean solveSudoku(char[][] board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    for (char c = '1'; c <= '9'; c++) {
                        if (isValidPlacement(board, i, j, c)) {
                            board[i][j] = c;
                            if (solveSudoku(board)) {
                                return true;
                            }
                            board[i][j] = '.'; // Backtrack
                        }
                    }
                    return false; // No valid number found
                }
            }
        }
        return true; // All cells filled
    }

    // Method 10: Find all possible values for empty cells
    public java.util.Map<String, java.util.Set<Character>> getPossibleValues(char[][] board) {
        java.util.Map<String, java.util.Set<Character>> possibilities = new java.util.HashMap<>();

        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    java.util.Set<Character> possible = new java.util.HashSet<>();
                    for (char c = '1'; c <= '9'; c++) {
                        if (isValidPlacement(board, i, j, c)) {
                            possible.add(c);
                        }
                    }
                    possibilities.put(i + "," + j, possible);
                }
            }
        }

        return possibilities;
    }

    // Method 11: Count filled cells
    public int countFilledCells(char[][] board) {
        int count = 0;
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] != '.') {
                    count++;
                }
            }
        }
        return count;
    }

    // Method 12: Check if board is complete
    public boolean isCompleteSudoku(char[][] board) {
        return countFilledCells(board) == 81 && isValidSudoku(board);
    }

    // Method 13: Generate valid Sudoku board (advanced)
    public char[][] generateValidSudoku() {
        char[][] board = new char[9][9];
        // Initialize with dots
        for (int i = 0; i < 9; i++) {
            java.util.Arrays.fill(board[i], '.');
        }

        // Fill diagonal 3x3 boxes first (they don't affect each other)
        fillDiagonalBoxes(board);

        // Fill remaining cells
        fillRemaining(board, 0, 3);

        return board;
    }

    private void fillDiagonalBoxes(char[][] board) {
        for (int box = 0; box < 9; box += 4) { // 0, 4, 8
            fillBox(board, box / 3 * 3, box % 3 * 3);
        }
    }

    private void fillBox(char[][] board, int row, int col) {
        java.util.List<Character> nums = java.util.Arrays.asList('1', '2', '3', '4', '5', '6', '7', '8', '9');
        java.util.Collections.shuffle(nums);

        int index = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                board[row + i][col + j] = nums.get(index++);
            }
        }
    }

    private boolean fillRemaining(char[][] board, int i, int j) {
        if (j >= 9 && i < 8) {
            i++;
            j = 0;
        }
        if (i >= 9 && j >= 9) {
            return true;
        }
        if (i < 3) {
            if (j < 3) j = 3;
        } else if (i < 6) {
            if (j == (i / 3) * 3) j += 3;
        } else {
            if (j == 6) {
                i++;
                j = 0;
                if (i >= 9) return true;
            }
        }

        for (char num = '1'; num <= '9'; num++) {
            if (isValidPlacement(board, i, j, num)) {
                board[i][j] = num;
                if (fillRemaining(board, i, j + 1)) {
                    return true;
                }
                board[i][j] = '.';
            }
        }
        return false;
    }

    // Test cases
    public static void main(String[] args) {
        ValidSudoku10 solution = new ValidSudoku10();

        // Test Case 1: Valid Sudoku
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
        System.out.println("Valid Sudoku: " + solution.isValidSudoku(board1)); // Expected: true

        // Test Case 2: Invalid Sudoku (duplicate in row)
        char[][] board2 = {
            {'8','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'.','.','.','4','1','9','.','.','5'},
            {'.','.','.','.','8','.','.','7','9'}
        };
        System.out.println("Invalid Sudoku (row): " + solution.isValidSudoku(board2)); // Expected: false

        // Test Case 3: Invalid Sudoku (duplicate in column)
        char[][] board3 = {
            {'5','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'5','.','.','4','1','9','.','.','5'}, // Duplicate 5 in column 0
            {'.','.','.','.','8','.','.','7','9'}
        };
        System.out.println("Invalid Sudoku (column): " + solution.isValidSudoku(board3)); // Expected: false

        // Test Case 4: Invalid Sudoku (duplicate in box)
        char[][] board4 = {
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
        // Make duplicate in box
        board4[0][2] = '6'; // This creates duplicate 6 in top-right box
        System.out.println("Invalid Sudoku (box): " + solution.isValidSudoku(board4)); // Expected: false

        // Test Case 5: Performance comparison
        char[][] testBoard = new char[9][9];
        for (int i = 0; i < 9; i++) {
            java.util.Arrays.fill(testBoard[i], '.');
        }
        // Fill some cells
        testBoard[0][0] = '5'; testBoard[0][1] = '3'; testBoard[0][4] = '7';

        long startTime, endTime;

        // Boolean arrays method
        startTime = System.nanoTime();
        for (int i = 0; i < 10000; i++) {
            solution.isValidSudoku(testBoard);
        }
        endTime = System.nanoTime();
        System.out.println("\nBoolean arrays (10000 runs): " + (endTime - startTime) / 1000000 + " ms");

        // HashSet method
        startTime = System.nanoTime();
        for (int i = 0; i < 10000; i++) {
            solution.isValidSudokuHashSet(testBoard);
        }
        endTime = System.nanoTime();
        System.out.println("HashSet method (10000 runs): " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 6: Count filled cells
        int filled = solution.countFilledCells(board1);
        System.out.println("Filled cells: " + filled);

        // Test Case 7: Check if complete
        System.out.println("Is complete: " + solution.isCompleteSudoku(board1));

        // Test Case 8: Generate valid Sudoku
        char[][] generated = solution.generateValidSudoku();
        System.out.println("Generated valid Sudoku: " + solution.isValidSudoku(generated));

        // Test Case 9: Edge cases
        System.out.println("\nEdge cases:");

        // Empty board
        char[][] empty = new char[9][9];
        for (int i = 0; i < 9; i++) {
            java.util.Arrays.fill(empty[i], '.');
        }
        System.out.println("Empty board: " + solution.isValidSudoku(empty));

        // Full valid board
        char[][] full = {
            {'5','3','4','6','7','8','9','1','2'},
            {'6','7','2','1','9','5','3','4','8'},
            {'1','9','8','3','4','2','5','6','7'},
            {'8','5','9','7','6','1','4','2','3'},
            {'4','2','6','8','5','3','7','9','1'},
            {'7','1','3','9','2','4','8','5','6'},
            {'9','6','1','5','3','7','2','8','4'},
            {'2','8','7','4','1','9','6','3','5'},
            {'3','4','5','2','8','6','1','7','9'}
        };
        System.out.println("Full valid board: " + solution.isValidSudoku(full));

        // Test Case 10: Possible values for empty cells
        java.util.Map<String, java.util.Set<Character>> possibilities = solution.getPossibleValues(board1);
        System.out.println("Possible values for some cells:");
        for (java.util.Map.Entry<String, java.util.Set<Character>> entry : possibilities.entrySet()) {
            if (entry.getValue().size() <= 3) { // Show only constrained cells
                System.out.println("Cell " + entry.getKey() + ": " + entry.getValue());
            }
        }
    }
}