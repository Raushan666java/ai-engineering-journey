package arrays.questions;

/*
 * 11. SPIRAL MATRIX (LeetCode 54)
 *
 * Problem Statement:
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * Conceptual Understanding:
 * - Traverse matrix in spiral order (clockwise)
 * - Start from top-left, go right, down, left, up
 * - Time: O(m*n), Space: O(1) excluding output
 * - Use four pointers: top, bottom, left, right
 * - Move boundaries inward after each layer
 * - Handle edge cases: single row, single column, 1x1 matrix
 *
 * Time Complexity: O(m*n)
 * Space Complexity: O(1) excluding output array
 */

class SpiralMatrix11 {

    // Method 1: Four pointers approach (most efficient)
    public java.util.List<Integer> spiralOrder(int[][] matrix) {
        java.util.List<Integer> result = new java.util.ArrayList<>();

        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return result;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        int top = 0, bottom = rows - 1;
        int left = 0, right = cols - 1;

        while (top <= bottom && left <= right) {
            // Traverse right
            for (int col = left; col <= right; col++) {
                result.add(matrix[top][col]);
            }
            top++;

            // Traverse down
            for (int row = top; row <= bottom; row++) {
                result.add(matrix[row][right]);
            }
            right--;

            // Traverse left (if necessary)
            if (top <= bottom) {
                for (int col = right; col >= left; col--) {
                    result.add(matrix[bottom][col]);
                }
                bottom--;
            }

            // Traverse up (if necessary)
            if (left <= right) {
                for (int row = bottom; row >= top; row--) {
                    result.add(matrix[row][left]);
                }
                left++;
            }
        }

        return result;
    }

    // Method 2: Layer by layer approach
    public java.util.List<Integer> spiralOrderLayers(int[][] matrix) {
        java.util.List<Integer> result = new java.util.ArrayList<>();

        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return result;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        int layers = Math.min(rows, cols) / 2;

        for (int layer = 0; layer <= layers; layer++) {
            int firstRow = layer;
            int lastRow = rows - 1 - layer;
            int firstCol = layer;
            int lastCol = cols - 1 - layer;

            // Top row
            for (int col = firstCol; col <= lastCol; col++) {
                result.add(matrix[firstRow][col]);
            }

            // Right column
            for (int row = firstRow + 1; row <= lastRow; row++) {
                result.add(matrix[row][lastCol]);
            }

            // Bottom row (if not same as top)
            if (firstRow != lastRow) {
                for (int col = lastCol - 1; col >= firstCol; col--) {
                    result.add(matrix[lastRow][col]);
                }
            }

            // Left column (if not same as right)
            if (firstCol != lastCol) {
                for (int row = lastRow - 1; row > firstRow; row--) {
                    result.add(matrix[row][firstCol]);
                }
            }
        }

        return result;
    }

    // Method 3: Recursive approach (educational)
    public java.util.List<Integer> spiralOrderRecursive(int[][] matrix) {
        java.util.List<Integer> result = new java.util.ArrayList<>();

        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return result;
        }

        spiralHelper(matrix, 0, matrix.length - 1, 0, matrix[0].length - 1, result);
        return result;
    }

    private void spiralHelper(int[][] matrix, int startRow, int endRow, int startCol, int endCol, java.util.List<Integer> result) {
        if (startRow > endRow || startCol > endCol) {
            return;
        }

        // Top row
        for (int col = startCol; col <= endCol; col++) {
            result.add(matrix[startRow][col]);
        }

        // Right column
        for (int row = startRow + 1; row <= endRow; row++) {
            result.add(matrix[row][endCol]);
        }

        // Bottom row (if not same as top)
        if (startRow != endRow) {
            for (int col = endCol - 1; col >= startCol; col--) {
                result.add(matrix[endRow][col]);
            }
        }

        // Left column (if not same as right)
        if (startCol != endCol) {
            for (int row = endRow - 1; row > startRow; row--) {
                result.add(matrix[row][startCol]);
            }
        }

        // Recurse on inner matrix
        spiralHelper(matrix, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result);
    }

    // Method 4: Direction-based approach
    public java.util.List<Integer> spiralOrderDirections(int[][] matrix) {
        java.util.List<Integer> result = new java.util.ArrayList<>();

        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return result;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        int total = rows * cols;

        // Directions: right, down, left, up
        int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        int directionIndex = 0;

        int row = 0, col = 0;
        boolean[][] visited = new boolean[rows][cols];

        for (int i = 0; i < total; i++) {
            result.add(matrix[row][col]);
            visited[row][col] = true;

            // Try next position
            int nextRow = row + directions[directionIndex][0];
            int nextCol = col + directions[directionIndex][1];

            // If next position is out of bounds or visited, change direction
            if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols || visited[nextRow][nextCol]) {
                directionIndex = (directionIndex + 1) % 4;
                nextRow = row + directions[directionIndex][0];
                nextCol = col + directions[directionIndex][1];
            }

            row = nextRow;
            col = nextCol;
        }

        return result;
    }

    // Method 5: Using queue (educational)
    public java.util.List<Integer> spiralOrderQueue(int[][] matrix) {
        java.util.List<Integer> result = new java.util.ArrayList<>();

        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return result;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        java.util.Queue<int[]> queue = new java.util.LinkedList<>();

        // Add all elements in order
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                queue.add(new int[]{i, j});
            }
        }

        boolean[][] visited = new boolean[rows][cols];
        int[] dRow = {0, 1, 0, -1};
        int[] dCol = {1, 0, -1, 0};
        int direction = 0;

        while (!queue.isEmpty()) {
            int size = queue.size();

            for (int i = 0; i < size; i++) {
                int[] current = queue.poll();
                int r = current[0], c = current[1];

                if (visited[r][c]) continue;

                result.add(matrix[r][c]);
                visited[r][c] = true;

                // Try to add next cell in current direction
                int nr = r + dRow[direction];
                int nc = c + dCol[direction];

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
                    queue.add(new int[]{nr, nc});
                }
            }

            // Change direction
            direction = (direction + 1) % 4;
        }

        return result;
    }

    // Method 6: Spiral matrix generation (reverse problem)
    public int[][] generateSpiralMatrix(int n) {
        int[][] matrix = new int[n][n];
        int num = 1;
        int top = 0, bottom = n - 1;
        int left = 0, right = n - 1;

        while (num <= n * n) {
            // Fill top row
            for (int col = left; col <= right && num <= n * n; col++) {
                matrix[top][col] = num++;
            }
            top++;

            // Fill right column
            for (int row = top; row <= bottom && num <= n * n; row++) {
                matrix[row][right] = num++;
            }
            right--;

            // Fill bottom row
            for (int col = right; col >= left && num <= n * n; col--) {
                matrix[bottom][col] = num++;
            }
            bottom--;

            // Fill left column
            for (int row = bottom; row >= top && num <= n * n; row--) {
                matrix[row][left] = num++;
            }
            left++;
        }

        return matrix;
    }

    // Method 7: Anti-clockwise spiral
    public java.util.List<Integer> spiralOrderAntiClockwise(int[][] matrix) {
        java.util.List<Integer> result = new java.util.ArrayList<>();

        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return result;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        int top = 0, bottom = rows - 1;
        int left = 0, right = cols - 1;

        while (top <= bottom && left <= right) {
            // Traverse down
            for (int row = top; row <= bottom; row++) {
                result.add(matrix[row][left]);
            }
            left++;

            // Traverse right
            for (int col = left; col <= right; col++) {
                result.add(matrix[bottom][col]);
            }
            bottom--;

            // Traverse up (if necessary)
            if (top <= bottom) {
                for (int row = bottom; row >= top; row--) {
                    result.add(matrix[row][right]);
                }
                right--;
            }

            // Traverse left (if necessary)
            if (left <= right) {
                for (int col = right; col >= left; col--) {
                    result.add(matrix[top][col]);
                }
                top++;
            }
        }

        return result;
    }

    // Method 8: Spiral order for any starting position
    public java.util.List<Integer> spiralOrderFromPosition(int[][] matrix, int startRow, int startCol) {
        java.util.List<Integer> result = new java.util.ArrayList<>();

        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return result;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;

        if (startRow < 0 || startRow >= rows || startCol < 0 || startCol >= cols) {
            return result;
        }

        boolean[][] visited = new boolean[rows][cols];
        int[] dRow = {0, 1, 0, -1};
        int[] dCol = {1, 0, -1, 0};
        int direction = 0;

        int currentRow = startRow;
        int currentCol = startCol;

        while (true) {
            if (visited[currentRow][currentCol]) break;

            result.add(matrix[currentRow][currentCol]);
            visited[currentRow][currentCol] = true;

            // Try next position
            boolean moved = false;
            for (int d = 0; d < 4; d++) {
                int nextDirection = (direction + d) % 4;
                int nextRow = currentRow + dRow[nextDirection];
                int nextCol = currentCol + dCol[nextDirection];

                if (nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols && !visited[nextRow][nextCol]) {
                    currentRow = nextRow;
                    currentCol = nextCol;
                    direction = nextDirection;
                    moved = true;
                    break;
                }
            }

            if (!moved) break;
        }

        return result;
    }

    // Method 9: Diagonal spiral (variation)
    public java.util.List<Integer> diagonalSpiral(int[][] matrix) {
        java.util.List<Integer> result = new java.util.ArrayList<>();

        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return result;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        int total = rows * cols;

        // Directions for diagonal movement
        int[][] directions = {{1, 1}, {1, -1}, {-1, -1}, {-1, 1}}; // down-right, down-left, up-left, up-right
        int directionIndex = 0;

        int row = 0, col = 0;
        boolean[][] visited = new boolean[rows][cols];

        for (int i = 0; i < total; i++) {
            result.add(matrix[row][col]);
            visited[row][col] = true;

            // Try next diagonal position
            int nextRow = row + directions[directionIndex][0];
            int nextCol = col + directions[directionIndex][1];

            // If out of bounds or visited, change direction
            if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols || visited[nextRow][nextCol]) {
                directionIndex = (directionIndex + 1) % 4;
                nextRow = row + directions[directionIndex][0];
                nextCol = col + directions[directionIndex][1];
            }

            row = nextRow;
            col = nextCol;
        }

        return result;
    }

    // Method 10: Spiral layers count
    public int countSpiralLayers(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return 0;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;

        return Math.min(rows, cols) / 2 + 1;
    }

    // Method 11: Check if matrix is spiral sorted
    public boolean isSpiralSorted(int[][] matrix) {
        java.util.List<Integer> spiral = spiralOrder(matrix);
        java.util.List<Integer> sorted = new java.util.ArrayList<>(spiral);
        java.util.Collections.sort(sorted);
        return spiral.equals(sorted);
    }

    // Method 12: Find position in spiral order
    public int[] findPositionInSpiral(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return new int[]{-1, -1};
        }

        int rows = matrix.length;
        int cols = matrix[0].length;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (matrix[i][j] == target) {
                    return new int[]{i, j};
                }
            }
        }

        return new int[]{-1, -1};
    }

    // Test cases
    public static void main(String[] args) {
        SpiralMatrix11 solution = new SpiralMatrix11();

        // Test Case 1: 3x3 matrix
        int[][] matrix1 = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        java.util.List<Integer> result1 = solution.spiralOrder(matrix1);
        System.out.print("3x3 spiral: ");
        for (int num : result1) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 3, 6, 9, 8, 7, 4, 5]

        // Test Case 2: 4x4 matrix
        int[][] matrix2 = {
            {1,  2,  3,  4},
            {5,  6,  7,  8},
            {9,  10, 11, 12},
            {13, 14, 15, 16}
        };
        java.util.List<Integer> result2 = solution.spiralOrder(matrix2);
        System.out.print("4x4 spiral: ");
        for (int num : result2) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

        // Test Case 3: Single row
        int[][] matrix3 = {{1, 2, 3, 4}};
        java.util.List<Integer> result3 = solution.spiralOrder(matrix3);
        System.out.print("Single row: ");
        for (int num : result3) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 3, 4]

        // Test Case 4: Single column
        int[][] matrix4 = {{1}, {2}, {3}, {4}};
        java.util.List<Integer> result4 = solution.spiralOrder(matrix4);
        System.out.print("Single column: ");
        for (int num : result4) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 3, 4]

        // Test Case 5: 1x1 matrix
        int[][] matrix5 = {{5}};
        java.util.List<Integer> result5 = solution.spiralOrder(matrix5);
        System.out.println("1x1 matrix: " + result5.get(0)); // Expected: 5

        // Test Case 6: Performance comparison
        int[][] largeMatrix = new int[50][50];
        int counter = 1;
        for (int i = 0; i < 50; i++) {
            for (int j = 0; j < 50; j++) {
                largeMatrix[i][j] = counter++;
            }
        }

        long startTime, endTime;

        // Four pointers method
        startTime = System.nanoTime();
        solution.spiralOrder(largeMatrix);
        endTime = System.nanoTime();
        System.out.println("\nFour pointers: " + (endTime - startTime) / 1000000 + " ms");

        // Layer by layer method
        startTime = System.nanoTime();
        solution.spiralOrderLayers(largeMatrix);
        endTime = System.nanoTime();
        System.out.println("Layer by layer: " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 7: Anti-clockwise spiral
        java.util.List<Integer> antiClockwise = solution.spiralOrderAntiClockwise(matrix1);
        System.out.print("Anti-clockwise: ");
        for (int num : antiClockwise) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 4, 7, 8, 9, 6, 3, 2, 5]

        // Test Case 8: Generate spiral matrix
        int[][] generated = solution.generateSpiralMatrix(3);
        System.out.println("Generated 3x3 spiral matrix:");
        for (int[] row : generated) {
            for (int num : row) {
                System.out.print(num + "\t");
            }
            System.out.println();
        }

        // Test Case 9: Spiral from position
        java.util.List<Integer> fromCenter = solution.spiralOrderFromPosition(matrix1, 1, 1);
        System.out.print("Spiral from center: ");
        for (int num : fromCenter) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Test Case 10: Edge cases
        System.out.println("\nEdge cases:");

        // Empty matrix
        int[][] empty = {};
        java.util.List<Integer> emptyResult = solution.spiralOrder(empty);
        System.out.println("Empty matrix: " + emptyResult.size());

        // Null matrix
        java.util.List<Integer> nullResult = solution.spiralOrder(null);
        System.out.println("Null matrix: " + nullResult.size());

        // Rectangular matrix
        int[][] rectangle = {
            {1, 2, 3, 4, 5},
            {6, 7, 8, 9, 10}
        };
        java.util.List<Integer> rectResult = solution.spiralOrder(rectangle);
        System.out.print("Rectangular: ");
        for (int num : rectResult) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Test Case 11: Count layers
        int layers = solution.countSpiralLayers(matrix2);
        System.out.println("Spiral layers in 4x4: " + layers);

        // Test Case 12: Check if spiral sorted
        int[][] sortedMatrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        System.out.println("Is spiral sorted: " + solution.isSpiralSorted(sortedMatrix));

        // Test Case 13: Find position
        int[] position = solution.findPositionInSpiral(matrix1, 5);
        System.out.println("Position of 5: [" + position[0] + ", " + position[1] + "]");
    }
}