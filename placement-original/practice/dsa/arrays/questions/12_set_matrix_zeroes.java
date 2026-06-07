package arrays.questions;

/*
 * 12. SET MATRIX ZEROES (LeetCode 73)
 *
 * Problem Statement:
 * Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's.
 * You must do it in place.
 *
 * Conceptual Understanding:
 * - If any cell is 0, make entire row and column 0
 * - In-place modification
 * - Time: O(m*n), Space: O(1) using first row/col as markers
 * - Alternative: O(m*n) space using sets for rows/columns
 * - Use matrix[0][j] and matrix[i][0] as markers
 * - Handle first row and column separately
 *
 * Time Complexity: O(m*n)
 * Space Complexity: O(1)
 */

class SetMatrixZeroes12 {

    // Method 1: Using first row and column as markers (most efficient)
    public void setZeroes(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        boolean firstRowZero = false;
        boolean firstColZero = false;

        // Check if first row has zero
        for (int j = 0; j < cols; j++) {
            if (matrix[0][j] == 0) {
                firstRowZero = true;
                break;
            }
        }

        // Check if first column has zero
        for (int i = 0; i < rows; i++) {
            if (matrix[i][0] == 0) {
                firstColZero = true;
                break;
            }
        }

        // Use first row and column as markers
        for (int i = 1; i < rows; i++) {
            for (int j = 1; j < cols; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0; // Mark row
                    matrix[0][j] = 0; // Mark column
                }
            }
        }

        // Set zeros based on markers (skip first row and column for now)
        for (int i = 1; i < rows; i++) {
            for (int j = 1; j < cols; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }

        // Handle first row
        if (firstRowZero) {
            for (int j = 0; j < cols; j++) {
                matrix[0][j] = 0;
            }
        }

        // Handle first column
        if (firstColZero) {
            for (int i = 0; i < rows; i++) {
                matrix[i][0] = 0;
            }
        }
    }

    // Method 2: Using sets to track rows and columns
    public void setZeroesSets(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        java.util.Set<Integer> zeroRows = new java.util.HashSet<>();
        java.util.Set<Integer> zeroCols = new java.util.HashSet<>();

        // Find all rows and columns that need to be zeroed
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (matrix[i][j] == 0) {
                    zeroRows.add(i);
                    zeroCols.add(j);
                }
            }
        }

        // Set zeros
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (zeroRows.contains(i) || zeroCols.contains(j)) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    // Method 3: Two-pass approach with arrays
    public void setZeroesArrays(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        boolean[] rowZero = new boolean[rows];
        boolean[] colZero = new boolean[cols];

        // Mark rows and columns that need to be zeroed
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (matrix[i][j] == 0) {
                    rowZero[i] = true;
                    colZero[j] = true;
                }
            }
        }

        // Set zeros
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (rowZero[i] || colZero[j]) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    // Method 4: One-pass with special handling
    public void setZeroesOnePass(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        boolean col0 = false;

        // First pass: mark using first row and column
        for (int i = 0; i < rows; i++) {
            if (matrix[i][0] == 0) col0 = true;
            for (int j = 1; j < cols; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }

        // Second pass: set zeros (in reverse order to avoid overwriting markers)
        for (int i = rows - 1; i >= 0; i--) {
            for (int j = cols - 1; j >= 1; j--) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
            if (col0) matrix[i][0] = 0;
        }
    }

    // Method 5: Recursive approach (educational)
    public void setZeroesRecursive(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;

        // Find all zero positions
        java.util.List<int[]> zeroPositions = new java.util.ArrayList<>();
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (matrix[i][j] == 0) {
                    zeroPositions.add(new int[]{i, j});
                }
            }
        }

        // Set zeros for each zero position
        for (int[] pos : zeroPositions) {
            setRowZero(matrix, pos[0]);
            setColZero(matrix, pos[1]);
        }
    }

    private void setRowZero(int[][] matrix, int row) {
        for (int j = 0; j < matrix[0].length; j++) {
            matrix[row][j] = 0;
        }
    }

    private void setColZero(int[][] matrix, int col) {
        for (int i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0;
        }
    }

    // Method 6: Using bit manipulation (for small matrices)
    public void setZeroesBitManipulation(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;

        // Use bitmasks (assuming small dimensions)
        if (rows > 32 || cols > 32) {
            setZeroes(matrix); // Fallback to standard method
            return;
        }

        int rowMask = 0;
        int colMask = 0;

        // Find zeros
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (matrix[i][j] == 0) {
                    rowMask |= (1 << i);
                    colMask |= (1 << j);
                }
            }
        }

        // Set zeros
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if ((rowMask & (1 << i)) != 0 || (colMask & (1 << j)) != 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    // Method 7: Count zeros and positions
    public void setZeroesWithCount(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        int zeroCount = 0;
        java.util.List<int[]> zeroPositions = new java.util.ArrayList<>();

        // Count zeros and store positions
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (matrix[i][j] == 0) {
                    zeroCount++;
                    zeroPositions.add(new int[]{i, j});
                }
            }
        }

        // If more than half cells are zero, might be more efficient to track non-zeros
        if (zeroCount > (rows * cols) / 2) {
            // Use different approach for sparse matrices
            setZeroesSparse(matrix, zeroPositions);
        } else {
            // Use standard approach
            setZeroes(matrix);
        }
    }

    private void setZeroesSparse(int[][] matrix, java.util.List<int[]> zeroPositions) {
        boolean[][] shouldBeZero = new boolean[matrix.length][matrix[0].length];

        for (int[] pos : zeroPositions) {
            // Mark entire row and column
            for (int j = 0; j < matrix[0].length; j++) {
                shouldBeZero[pos[0]][j] = true;
            }
            for (int i = 0; i < matrix.length; i++) {
                shouldBeZero[i][pos[1]] = true;
            }
        }

        // Apply changes
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                if (shouldBeZero[i][j]) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    // Method 8: Functional approach (educational)
    public void setZeroesFunctional(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;

        // Find all zero positions
        java.util.List<int[]> zeros = new java.util.ArrayList<>();
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (matrix[i][j] == 0) {
                    zeros.add(new int[]{i, j});
                }
            }
        }

        // Set rows and columns to zero
        zeros.forEach(pos -> {
            java.util.Arrays.fill(matrix[pos[0]], 0); // Set row
            for (int i = 0; i < rows; i++) {
                matrix[i][pos[1]] = 0; // Set column
            }
        });
    }

    // Method 9: Check if matrix needs modification
    public boolean needsZeroSetting(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }

        for (int[] row : matrix) {
            for (int cell : row) {
                if (cell == 0) {
                    return true;
                }
            }
        }
        return false;
    }

    // Method 10: Count affected cells
    public int countAffectedCells(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return 0;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        java.util.Set<Integer> affectedRows = new java.util.HashSet<>();
        java.util.Set<Integer> affectedCols = new java.util.HashSet<>();

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (matrix[i][j] == 0) {
                    affectedRows.add(i);
                    affectedCols.add(j);
                }
            }
        }

        return affectedRows.size() * cols + affectedCols.size() * (rows - affectedRows.size());
    }

    // Method 11: Preserve original matrix
    public int[][] setZeroesPreserveOriginal(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return matrix;
        }

        int[][] result = new int[matrix.length][];
        for (int i = 0; i < matrix.length; i++) {
            result[i] = matrix[i].clone();
        }

        setZeroes(result);
        return result;
    }

    // Method 12: Validate matrix after setting zeros
    public boolean validateZeroMatrix(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return true;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;

        // Find all zero positions
        java.util.List<int[]> zeroPos = new java.util.ArrayList<>();
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (matrix[i][j] == 0) {
                    zeroPos.add(new int[]{i, j});
                }
            }
        }

        // Check that all rows and columns containing zeros are all zeros
        for (int[] pos : zeroPos) {
            int row = pos[0];
            int col = pos[1];

            // Check row
            for (int j = 0; j < cols; j++) {
                if (matrix[row][j] != 0) {
                    return false;
                }
            }

            // Check column
            for (int i = 0; i < rows; i++) {
                if (matrix[i][col] != 0) {
                    return false;
                }
            }
        }

        return true;
    }

    // Test cases
    public static void main(String[] args) {
        SetMatrixZeroes12 solution = new SetMatrixZeroes12();

        // Test Case 1: Basic case
        int[][] matrix1 = {
            {1, 1, 1},
            {1, 0, 1},
            {1, 1, 1}
        };
        solution.setZeroes(matrix1);
        System.out.println("Matrix after setting zeros:");
        printMatrix(matrix1);
        // Expected:
        // [1, 0, 1]
        // [0, 0, 0]
        // [1, 0, 1]

        // Test Case 2: Multiple zeros
        int[][] matrix2 = {
            {0, 1, 2, 0},
            {3, 4, 5, 2},
            {1, 3, 1, 5}
        };
        solution.setZeroes(matrix2);
        System.out.println("Multiple zeros:");
        printMatrix(matrix2);
        // Expected all zeros

        // Test Case 3: No zeros
        int[][] matrix3 = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        int[][] original3 = copyMatrix(matrix3);
        solution.setZeroes(matrix3);
        System.out.println("No zeros (should remain same): " + matricesEqual(original3, matrix3));

        // Test Case 4: Single element zero
        int[][] matrix4 = {{0}};
        solution.setZeroes(matrix4);
        System.out.println("Single zero: " + matrix4[0][0]);

        // Test Case 5: Performance comparison
        int[][] largeMatrix = new int[100][100];
        for (int i = 0; i < 100; i++) {
            for (int j = 0; j < 100; j++) {
                largeMatrix[i][j] = (i + j) % 10; // Some zeros
            }
        }

        long startTime, endTime;

        // Optimal method
        int[][] test1 = copyMatrix(largeMatrix);
        startTime = System.nanoTime();
        solution.setZeroes(test1);
        endTime = System.nanoTime();
        System.out.println("\nOptimal method: " + (endTime - startTime) / 1000000 + " ms");

        // Sets method
        int[][] test2 = copyMatrix(largeMatrix);
        startTime = System.nanoTime();
        solution.setZeroesSets(test2);
        endTime = System.nanoTime();
        System.out.println("Sets method: " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 6: Edge cases
        System.out.println("\nEdge cases:");

        // Empty matrix
        int[][] empty = {};
        solution.setZeroes(empty);
        System.out.println("Empty matrix handled: true");

        // Single row
        int[][] singleRow = {{1, 0, 3, 4}};
        solution.setZeroes(singleRow);
        System.out.print("Single row: ");
        printMatrix(singleRow);

        // Single column
        int[][] singleCol = {{1}, {0}, {3}};
        solution.setZeroes(singleCol);
        System.out.print("Single column: ");
        printMatrix(singleCol);

        // Test Case 7: Validation
        int[][] testMatrix = {
            {1, 2, 3},
            {4, 0, 6},
            {7, 8, 9}
        };
        solution.setZeroes(testMatrix);
        System.out.println("Matrix is valid after setting zeros: " + solution.validateZeroMatrix(testMatrix));

        // Test Case 8: Count affected cells
        int[][] countMatrix = {
            {1, 2, 3},
            {4, 0, 6},
            {7, 8, 9}
        };
        int affected = solution.countAffectedCells(countMatrix);
        System.out.println("Affected cells: " + affected);

        // Test Case 9: Preserve original
        int[][] preserveMatrix = {
            {1, 2, 3},
            {4, 0, 6},
            {7, 8, 9}
        };
        int[][] modified = solution.setZeroesPreserveOriginal(preserveMatrix);
        System.out.println("Original preserved: " + (preserveMatrix[0][0] == 1));
        System.out.println("Modified correctly: " + (modified[0][1] == 0));

        // Test Case 10: Functional approach
        int[][] funcMatrix = {
            {1, 2, 3},
            {4, 0, 6},
            {7, 8, 9}
        };
        solution.setZeroesFunctional(funcMatrix);
        System.out.print("Functional approach: ");
        printMatrix(funcMatrix);
    }

    // Helper methods
    private static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            System.out.print("[");
            for (int i = 0; i < row.length; i++) {
                System.out.print(row[i]);
                if (i < row.length - 1) System.out.print(", ");
            }
            System.out.println("]");
        }
        System.out.println();
    }

    private static int[][] copyMatrix(int[][] matrix) {
        int[][] copy = new int[matrix.length][];
        for (int i = 0; i < matrix.length; i++) {
            copy[i] = matrix[i].clone();
        }
        return copy;
    }

    private static boolean matricesEqual(int[][] a, int[][] b) {
        if (a.length != b.length) return false;
        for (int i = 0; i < a.length; i++) {
            if (!java.util.Arrays.equals(a[i], b[i])) return false;
        }
        return true;
    }
}