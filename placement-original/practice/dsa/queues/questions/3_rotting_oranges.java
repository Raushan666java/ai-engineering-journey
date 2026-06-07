package queues.questions;

/*
 * 3. ROTTING ORANGES (LeetCode 994)
 *
 * Problem Statement:
 * You are given an m x n grid where each cell can have one of three values:
 * - 0 representing an empty cell,
 * - 1 representing a fresh orange, or
 * - 2 representing a rotten orange.
 *
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange.
 * If this is impossible, return -1.
 *
 * Conceptual Understanding:
 * - Multi-source BFS problem
 * - Rotten oranges (2) spread to adjacent fresh oranges (1)
 * - Use queue to process rotten oranges level by level
 * - Track minutes (levels) until all oranges are rotten
 * - If fresh oranges remain unreachable, return -1
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */

import java.util.*;

class RottingOranges3 {

    // Method 1: Multi-source BFS
    public int orangesRotting(int[][] grid) {
        if (grid == null || grid.length == 0) {
            return 0;
        }

        int rows = grid.length;
        int cols = grid[0].length;
        Queue<int[]> queue = new LinkedList<>();
        int freshOranges = 0;
        int minutes = 0;

        // Find all rotten oranges and count fresh ones
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 2) {
                    queue.offer(new int[]{i, j});
                } else if (grid[i][j] == 1) {
                    freshOranges++;
                }
            }
        }

        // If no fresh oranges, return 0
        if (freshOranges == 0) {
            return 0;
        }

        // Directions: up, down, left, right
        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        // BFS to rot oranges
        while (!queue.isEmpty()) {
            int size = queue.size();
            boolean rottedThisMinute = false;

            for (int i = 0; i < size; i++) {
                int[] current = queue.poll();
                int row = current[0];
                int col = current[1];

                // Check all 4 directions
                for (int[] dir : directions) {
                    int newRow = row + dir[0];
                    int newCol = col + dir[1];

                    // Valid position with fresh orange
                    if (newRow >= 0 && newRow < rows &&
                        newCol >= 0 && newCol < cols &&
                        grid[newRow][newCol] == 1) {

                        // Rot the orange
                        grid[newRow][newCol] = 2;
                        queue.offer(new int[]{newRow, newCol});
                        freshOranges--;
                        rottedThisMinute = true;
                    }
                }
            }

            // Only increment minutes if we rotted some oranges this minute
            if (rottedThisMinute) {
                minutes++;
            }
        }

        // If fresh oranges remain, impossible
        return freshOranges == 0 ? minutes : -1;
    }

    // Method 2: Alternative BFS implementation
    public int orangesRottingAlternative(int[][] grid) {
        if (grid == null || grid.length == 0) return 0;

        int rows = grid.length, cols = grid[0].length;
        Queue<int[]> queue = new LinkedList<>();
        int freshCount = 0;

        // Initialize queue with rotten oranges
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 1) freshCount++;
                if (grid[i][j] == 2) queue.add(new int[]{i, j});
            }
        }

        if (freshCount == 0) return 0;

        int minutes = -1;
        int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        while (!queue.isEmpty()) {
            int size = queue.size();
            minutes++;

            for (int i = 0; i < size; i++) {
                int[] curr = queue.poll();

                for (int[] dir : dirs) {
                    int x = curr[0] + dir[0];
                    int y = curr[1] + dir[1];

                    if (x >= 0 && x < rows && y >= 0 && y < cols && grid[x][y] == 1) {
                        grid[x][y] = 2;
                        freshCount--;
                        queue.add(new int[]{x, y});
                    }
                }
            }
        }

        return freshCount == 0 ? minutes : -1;
    }

    // Method 3: DFS approach (less efficient)
    public int orangesRottingDFS(int[][] grid) {
        if (grid == null || grid.length == 0) return 0;

        int rows = grid.length, cols = grid[0].length;
        int maxMinutes = 0;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 1) {
                    int minutes = dfs(grid, i, j, rows, cols, 0);
                    if (minutes == -1) return -1;
                    maxMinutes = Math.max(maxMinutes, minutes);
                }
            }
        }

        return maxMinutes;
    }

    private int dfs(int[][] grid, int i, int j, int rows, int cols, int minutes) {
        if (i < 0 || i >= rows || j < 0 || j >= cols) return -1;
        if (grid[i][j] == 0) return -1; // Can't reach through empty cell
        if (grid[i][j] == 2) return minutes; // Found rotten orange

        // Temporarily mark as visited
        grid[i][j] = 0;

        int minMinutes = Integer.MAX_VALUE;
        boolean found = false;

        // Check all directions
        int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        for (int[] dir : dirs) {
            int result = dfs(grid, i + dir[0], j + dir[1], rows, cols, minutes + 1);
            if (result != -1) {
                minMinutes = Math.min(minMinutes, result);
                found = true;
            }
        }

        // Backtrack
        grid[i][j] = 1;

        return found ? minMinutes : -1;
    }

    // Test cases
    public static void main(String[] args) {
        RottingOranges3 solution = new RottingOranges3();

        // Test Case 1: Basic case
        int[][] grid1 = {
            {2, 1, 1},
            {1, 1, 0},
            {0, 1, 1}
        };
        System.out.println("Test 1: " + solution.orangesRotting(grid1)); // Expected: 4

        // Test Case 2: Already all rotten
        int[][] grid2 = {
            {2, 2, 2},
            {2, 2, 2},
            {2, 2, 2}
        };
        System.out.println("Test 2: " + solution.orangesRotting(grid2)); // Expected: 0

        // Test Case 3: Impossible case
        int[][] grid3 = {
            {2, 1, 1},
            {0, 1, 1},
            {1, 0, 1}
        };
        System.out.println("Test 3: " + solution.orangesRotting(grid3)); // Expected: -1

        // Test Case 4: Single fresh orange
        int[][] grid4 = {{1}};
        System.out.println("Test 4: " + solution.orangesRotting(grid4)); // Expected: -1

        // Test Case 5: Single rotten orange
        int[][] grid5 = {{2}};
        System.out.println("Test 5: " + solution.orangesRotting(grid5)); // Expected: 0
    }
}