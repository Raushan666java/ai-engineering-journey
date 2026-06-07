package backtracking.questions;

/*
 * 7. WORD SEARCH (LeetCode 79)
 *
 * Problem Statement:
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells
 * are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 *
 * Conceptual Understanding:
 * - Find word in 2D grid using adjacent cells (up, down, left, right)
 * - Each cell can be used at most once
 * - Use backtracking to explore all possible paths
 * - Mark visited cells to avoid reuse
 * - Base case: when word is found or all paths explored
 *
 * Time Complexity: O(m*n*4^L) where L is word length
 * Space Complexity: O(L) for recursion stack
 */

import java.util.*;

class WordSearch7 {

    // Method 1: Basic backtracking with visited matrix
    public boolean exist(char[][] board, String word) {
        if (board == null || board.length == 0 || word == null || word.length() == 0) {
            return false;
        }

        int m = board.length;
        int n = board[0].length;

        // Try starting from each cell
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == word.charAt(0)) {
                    boolean[][] visited = new boolean[m][n];
                    if (backtrack(board, word, visited, i, j, 0)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    private boolean backtrack(char[][] board, String word, boolean[][] visited,
                             int row, int col, int index) {
        // Base case: word found
        if (index == word.length()) {
            return true;
        }

        // Boundary and validity checks
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length ||
            visited[row][col] || board[row][col] != word.charAt(index)) {
            return false;
        }

        // Mark current cell as visited
        visited[row][col] = true;

        // Explore all 4 directions
        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}}; // up, down, left, right

        for (int[] dir : directions) {
            int newRow = row + dir[0];
            int newCol = col + dir[1];

            if (backtrack(board, word, visited, newRow, newCol, index + 1)) {
                return true;
            }
        }

        // Backtrack: unmark current cell
        visited[row][col] = false;
        return false;
    }

    // Method 2: In-place modification (modify board instead of visited matrix)
    public boolean existInPlace(char[][] board, String word) {
        if (board == null || board.length == 0 || word == null || word.length() == 0) {
            return false;
        }

        int m = board.length;
        int n = board[0].length;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == word.charAt(0)) {
                    if (backtrackInPlace(board, word, i, j, 0)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    private boolean backtrackInPlace(char[][] board, String word, int row, int col, int index) {
        if (index == word.length()) {
            return true;
        }

        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length ||
            board[row][col] != word.charAt(index)) {
            return false;
        }

        // Temporarily mark as visited
        char temp = board[row][col];
        board[row][col] = '#';

        // Explore directions
        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        for (int[] dir : directions) {
            int newRow = row + dir[0];
            int newCol = col + dir[1];

            if (backtrackInPlace(board, word, newRow, newCol, index + 1)) {
                return true;
            }
        }

        // Backtrack: restore original character
        board[row][col] = temp;
        return false;
    }

    // Method 3: DFS with early termination
    public boolean existDFS(char[][] board, String word) {
        if (board == null || board.length == 0 || word == null || word.length() == 0) {
            return false;
        }

        int m = board.length;
        int n = board[0].length;

        // Count frequency of each character
        int[] boardCount = new int[256];
        int[] wordCount = new int[256];

        for (char[] row : board) {
            for (char c : row) {
                boardCount[c]++;
            }
        }

        for (char c : word.toCharArray()) {
            wordCount[c]++;
            if (wordCount[c] > boardCount[c]) {
                return false; // Early termination
            }
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == word.charAt(0)) {
                    boolean[][] visited = new boolean[m][n];
                    if (dfs(board, word, visited, i, j, 0)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    private boolean dfs(char[][] board, String word, boolean[][] visited,
                       int row, int col, int index) {
        if (index == word.length()) return true;

        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length ||
            visited[row][col] || board[row][col] != word.charAt(index)) {
            return false;
        }

        visited[row][col] = true;

        // Try all 4 directions
        int[] dr = {-1, 1, 0, 0};
        int[] dc = {0, 0, -1, 1};

        for (int d = 0; d < 4; d++) {
            if (dfs(board, word, visited, row + dr[d], col + dc[d], index + 1)) {
                return true;
            }
        }

        visited[row][col] = false;
        return false;
    }

    // Method 4: Find all occurrences of word
    public List<int[]> findAllOccurrences(char[][] board, String word) {
        List<int[]> occurrences = new ArrayList<>();
        if (board == null || board.length == 0 || word == null || word.length() == 0) {
            return occurrences;
        }

        int m = board.length;
        int n = board[0].length;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == word.charAt(0)) {
                    boolean[][] visited = new boolean[m][n];
                    if (backtrackFindAll(board, word, visited, i, j, 0, occurrences)) {
                        // Found one, but continue to find all
                    }
                }
            }
        }

        return occurrences;
    }

    private boolean backtrackFindAll(char[][] board, String word, boolean[][] visited,
                                    int row, int col, int index, List<int[]> occurrences) {
        if (index == word.length()) {
            occurrences.add(new int[]{row, col}); // Add ending position
            return true;
        }

        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length ||
            visited[row][col] || board[row][col] != word.charAt(index)) {
            return false;
        }

        visited[row][col] = true;
        boolean found = false;

        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        for (int[] dir : directions) {
            int newRow = row + dir[0];
            int newCol = col + dir[1];

            if (backtrackFindAll(board, word, visited, newRow, newCol, index + 1, occurrences)) {
                found = true;
            }
        }

        visited[row][col] = false;
        return found;
    }

    // Method 5: Word search with wildcards
    public boolean existWithWildcard(char[][] board, String word) {
        if (board == null || board.length == 0 || word == null || word.length() == 0) {
            return false;
        }

        int m = board.length;
        int n = board[0].length;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matches(board[i][j], word.charAt(0))) {
                    boolean[][] visited = new boolean[m][n];
                    if (backtrackWildcard(board, word, visited, i, j, 0)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    private boolean matches(char boardChar, char wordChar) {
        return wordChar == '.' || boardChar == wordChar;
    }

    private boolean backtrackWildcard(char[][] board, String word, boolean[][] visited,
                                     int row, int col, int index) {
        if (index == word.length()) return true;

        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length ||
            visited[row][col] || !matches(board[row][col], word.charAt(index))) {
            return false;
        }

        visited[row][col] = true;

        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        for (int[] dir : directions) {
            int newRow = row + dir[0];
            int newCol = col + dir[1];

            if (backtrackWildcard(board, word, visited, newRow, newCol, index + 1)) {
                return true;
            }
        }

        visited[row][col] = false;
        return false;
    }

    // Method 6: Count total paths for word
    public int countPaths(char[][] board, String word) {
        if (board == null || board.length == 0 || word == null || word.length() == 0) {
            return 0;
        }

        int count = 0;
        int m = board.length;
        int n = board[0].length;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == word.charAt(0)) {
                    boolean[][] visited = new boolean[m][n];
                    count += countBacktrack(board, word, visited, i, j, 0);
                }
            }
        }

        return count;
    }

    private int countBacktrack(char[][] board, String word, boolean[][] visited,
                              int row, int col, int index) {
        if (index == word.length()) return 1;

        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length ||
            visited[row][col] || board[row][col] != word.charAt(index)) {
            return 0;
        }

        visited[row][col] = true;
        int count = 0;

        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        for (int[] dir : directions) {
            int newRow = row + dir[0];
            int newCol = col + dir[1];
            count += countBacktrack(board, word, visited, newRow, newCol, index + 1);
        }

        visited[row][col] = false;
        return count;
    }

    // Method 7: Performance analysis
    public static class SearchStats {
        String word;
        boolean found;
        long timeMs;
        int cellsVisited;
        int backtracks;

        public SearchStats(String word, boolean found, long timeMs, int cellsVisited, int backtracks) {
            this.word = word;
            this.found = found;
            this.timeMs = timeMs;
            this.cellsVisited = cellsVisited;
            this.backtracks = backtracks;
        }

        @Override
        public String toString() {
            return String.format("Word: %s, Found: %b, Time: %dms, Cells: %d, Backtracks: %d",
                               word, found, timeMs, cellsVisited, backtracks);
        }
    }

    public SearchStats analyzeSearch(char[][] board, String word) {
        long startTime = System.nanoTime();
        boolean found = exist(board, word);
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;

        // Simplified analysis
        int cellsVisited = board.length * board[0].length;
        int backtracks = word.length() * 4; // Rough estimate

        return new SearchStats(word, found, timeMs, cellsVisited, backtracks);
    }

    // Method 8: Validate word search result
    public boolean validateWordSearch(char[][] board, String word, boolean result) {
        if (board == null || word == null) return false;

        // Check if word can exist based on character frequencies
        int[] boardCount = new int[256];
        int[] wordCount = new int[256];

        for (char[] row : board) {
            for (char c : row) {
                boardCount[c]++;
            }
        }

        for (char c : word.toCharArray()) {
            wordCount[c]++;
        }

        for (int i = 0; i < 256; i++) {
            if (wordCount[i] > boardCount[i]) {
                return result == false; // Should be false if insufficient characters
            }
        }

        // Additional validation would require actual path checking
        return true; // Basic validation passed
    }

    // Method 9: Get board statistics
    public static class BoardStats {
        int rows;
        int cols;
        int totalCells;
        Map<Character, Integer> charFrequency;
        double avgCharsPerRow;

        public BoardStats(int rows, int cols, int totalCells,
                         Map<Character, Integer> charFrequency, double avgCharsPerRow) {
            this.rows = rows;
            this.cols = cols;
            this.totalCells = totalCells;
            this.charFrequency = charFrequency;
            this.avgCharsPerRow = avgCharsPerRow;
        }

        @Override
        public String toString() {
            return String.format("Size: %dx%d (%d cells), Avg/Row: %.1f, Frequencies: %s",
                               rows, cols, totalCells, avgCharsPerRow, charFrequency);
        }
    }

    public BoardStats getBoardStats(char[][] board) {
        if (board == null || board.length == 0) {
            return new BoardStats(0, 0, 0, new HashMap<>(), 0);
        }

        int rows = board.length;
        int cols = board[0].length;
        int totalCells = rows * cols;

        Map<Character, Integer> charFrequency = new HashMap<>();
        for (char[] row : board) {
            for (char c : row) {
                charFrequency.put(c, charFrequency.getOrDefault(c, 0) + 1);
            }
        }

        double avgCharsPerRow = (double) totalCells / rows;

        return new BoardStats(rows, cols, totalCells, charFrequency, avgCharsPerRow);
    }

    // Method 10: Word search with diagonal moves
    public boolean existWithDiagonals(char[][] board, String word) {
        if (board == null || board.length == 0 || word == null || word.length() == 0) {
            return false;
        }

        int m = board.length;
        int n = board[0].length;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == word.charAt(0)) {
                    boolean[][] visited = new boolean[m][n];
                    if (backtrackDiagonals(board, word, visited, i, j, 0)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    private boolean backtrackDiagonals(char[][] board, String word, boolean[][] visited,
                                      int row, int col, int index) {
        if (index == word.length()) return true;

        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length ||
            visited[row][col] || board[row][col] != word.charAt(index)) {
            return false;
        }

        visited[row][col] = true;

        // 8 directions: up, down, left, right, and 4 diagonals
        int[][] directions = {
            {-1, 0}, {1, 0}, {0, -1}, {0, 1},    // orthogonal
            {-1, -1}, {-1, 1}, {1, -1}, {1, 1}   // diagonal
        };

        for (int[] dir : directions) {
            int newRow = row + dir[0];
            int newCol = col + dir[1];

            if (backtrackDiagonals(board, word, visited, newRow, newCol, index + 1)) {
                return true;
            }
        }

        visited[row][col] = false;
        return false;
    }

    // Method 11: Find words in multiple directions
    public List<String> findWords(char[][] board, String[] words) {
        List<String> found = new ArrayList<>();
        if (board == null || board.length == 0 || words == null) {
            return found;
        }

        for (String word : words) {
            if (exist(board, word)) {
                found.add(word);
            }
        }

        return found;
    }

    // Method 12: Advanced word search with constraints
    public boolean existAdvanced(char[][] board, String word, boolean allowDiagonals,
                                int maxLength, boolean caseSensitive) {
        if (board == null || board.length == 0 || word == null || word.length() == 0) {
            return false;
        }

        if (word.length() > maxLength) return false;

        int m = board.length;
        int n = board[0].length;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                char boardChar = caseSensitive ? board[i][j] : Character.toLowerCase(board[i][j]);
                char wordChar = caseSensitive ? word.charAt(0) : Character.toLowerCase(word.charAt(0));

                if (boardChar == wordChar) {
                    boolean[][] visited = new boolean[m][n];
                    if (backtrackAdvanced(board, word, visited, i, j, 0, allowDiagonals, caseSensitive)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    private boolean backtrackAdvanced(char[][] board, String word, boolean[][] visited,
                                     int row, int col, int index, boolean allowDiagonals,
                                     boolean caseSensitive) {
        if (index == word.length()) return true;

        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || visited[row][col]) {
            return false;
        }

        char boardChar = caseSensitive ? board[row][col] : Character.toLowerCase(board[row][col]);
        char wordChar = caseSensitive ? word.charAt(index) : Character.toLowerCase(word.charAt(index));

        if (boardChar != wordChar) return false;

        visited[row][col] = true;

        // Choose directions based on allowDiagonals
        int[][] directions = allowDiagonals ?
            new int[][]{{-1, 0}, {1, 0}, {0, -1}, {0, 1}, {-1, -1}, {-1, 1}, {1, -1}, {1, 1}} :
            new int[][]{{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        for (int[] dir : directions) {
            int newRow = row + dir[0];
            int newCol = col + dir[1];

            if (backtrackAdvanced(board, word, visited, newRow, newCol, index + 1,
                                allowDiagonals, caseSensitive)) {
                return true;
            }
        }

        visited[row][col] = false;
        return false;
    }

    // Test cases
    public static void main(String[] args) {
        WordSearch7 solution = new WordSearch7();

        // Test Case 1: Basic word search
        System.out.println("=== Basic Word Search ===");
        char[][] board1 = {
            {'A', 'B', 'C', 'E'},
            {'S', 'F', 'C', 'S'},
            {'A', 'D', 'E', 'E'}
        };
        String word1 = "ABCCED";
        boolean result1 = solution.exist(board1, word1);
        System.out.println("Board:");
        for (char[] row : board1) {
            System.out.println(Arrays.toString(row));
        }
        System.out.println("Word: " + word1 + ", Found: " + result1);
        System.out.println("Valid: " + solution.validateWordSearch(board1, word1, result1));

        // Test Case 2: In-place modification
        boolean result2 = solution.existInPlace(board1, word1);
        System.out.println("In-place approach: " + result2);

        // Test Case 3: DFS approach
        boolean result3 = solution.existDFS(board1, word1);
        System.out.println("DFS approach: " + result3);

        // Test Case 4: Find all occurrences
        List<int[]> occurrences = solution.findAllOccurrences(board1, "SEE");
        System.out.println("Occurrences of 'SEE': " + occurrences.size());

        // Test Case 5: With wildcards
        boolean wildcard = solution.existWithWildcard(board1, "AB.CED");
        System.out.println("With wildcard: " + wildcard);

        // Test Case 6: Count paths
        int pathCount = solution.countPaths(board1, "ABCCED");
        System.out.println("Total paths: " + pathCount);

        // Test Case 7: Performance analysis
        SearchStats stats = solution.analyzeSearch(board1, word1);
        System.out.println("Performance: " + stats);

        // Test Case 8: Board statistics
        BoardStats boardStats = solution.getBoardStats(board1);
        System.out.println("Board stats: " + boardStats);

        // Test Case 9: With diagonals
        boolean diagonal = solution.existWithDiagonals(board1, "ABCCED");
        System.out.println("With diagonals: " + diagonal);

        // Test Case 10: Find multiple words
        String[] words = {"ABCCED", "SEE", "ABCB"};
        List<String> found = solution.findWords(board1, words);
        System.out.println("Found words: " + found);

        // Test Case 11: Edge cases
        System.out.println("\nEdge cases:");
        char[][] emptyBoard = {};
        System.out.println("Empty board: " + solution.exist(emptyBoard, "A"));

        char[][] singleCell = {{'A'}};
        System.out.println("Single cell 'A': " + solution.exist(singleCell, "A"));
        System.out.println("Single cell 'B': " + solution.exist(singleCell, "B"));

        // Test Case 12: Advanced search
        boolean advanced = solution.existAdvanced(board1, "ABCCED", false, 10, true);
        System.out.println("Advanced search: " + advanced);
    }
}