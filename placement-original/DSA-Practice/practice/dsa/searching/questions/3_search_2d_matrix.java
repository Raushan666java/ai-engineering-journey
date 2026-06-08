package searching.questions;

/*
 * 3. SEARCH A 2D MATRIX (LeetCode 74)
 *
 * Problem Statement:
 * Write an efficient algorithm that searches for a value target in an m x n integer matrix.
 * This matrix has the following properties:
 * - Integers in each row are sorted from left to right.
 * - The first integer of each row is greater than the last integer of the previous row.
 *
 * Conceptual Understanding:
 * - Matrix is sorted both row-wise and column-wise
 * - Can treat as 1D sorted array for binary search
 * - Each row starts with number > last element of previous row
 * - Two approaches: treat as 1D array or search row first, then column
 * - Key: matrix[m][n] can be mapped to 1D index: row = index / n, col = index % n
 *
 * Time Complexity: O(log(m*n))
 * Space Complexity: O(1)
 */

class Search2DMatrix3 {

    // Method 1: Treat as 1D Array - Binary Search
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        int left = 0;
        int right = rows * cols - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int midValue = matrix[mid / cols][mid % cols];

            if (midValue == target) {
                return true;
            } else if (midValue < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }

    // Method 2: Two-step Binary Search (Row then Column)
    public boolean searchMatrixTwoStep(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }

        // Step 1: Find the correct row using binary search
        int targetRow = findRow(matrix, target);
        if (targetRow == -1) {
            return false;
        }

        // Step 2: Search within the row using binary search
        return binarySearchRow(matrix[targetRow], target);
    }

    private int findRow(int[][] matrix, int target) {
        int left = 0;
        int right = matrix.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (matrix[mid][0] <= target && target <= matrix[mid][matrix[mid].length - 1]) {
                return mid; // Found the row
            } else if (matrix[mid][0] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return -1; // Row not found
    }

    private boolean binarySearchRow(int[] row, int target) {
        int left = 0;
        int right = row.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (row[mid] == target) {
                return true;
            } else if (row[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }

    // Method 3: Linear Search (Brute Force)
    public boolean searchMatrixLinear(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == target) {
                    return true;
                }
            }
        }

        return false;
    }

    // Method 4: Search from Top-Right Corner
    public boolean searchMatrixTopRight(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }

        int row = 0;
        int col = matrix[0].length - 1;

        while (row < matrix.length && col >= 0) {
            if (matrix[row][col] == target) {
                return true;
            } else if (matrix[row][col] < target) {
                row++; // Move down
            } else {
                col--; // Move left
            }
        }

        return false;
    }

    // Method 5: Search a 2D Matrix II (LeetCode 240) - Not sorted row-wise
    public boolean searchMatrixII(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }

        int row = 0;
        int col = matrix[0].length - 1;

        while (row < matrix.length && col >= 0) {
            if (matrix[row][col] == target) {
                return true;
            } else if (matrix[row][col] < target) {
                row++; // Move down
            } else {
                col--; // Move left
            }
        }

        return false;
    }

    // Method 6: Find Position (Return indices instead of boolean)
    public int[] searchMatrixPosition(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return new int[]{-1, -1};
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        int left = 0;
        int right = rows * cols - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int row = mid / cols;
            int col = mid % cols;
            int midValue = matrix[row][col];

            if (midValue == target) {
                return new int[]{row, col};
            } else if (midValue < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return new int[]{-1, -1};
    }

    // Method 7: Count Occurrences in 2D Matrix
    public int countOccurrences(int[][] matrix, int target) {
        int count = 0;
        for (int[] row : matrix) {
            for (int num : row) {
                if (num == target) {
                    count++;
                }
            }
        }
        return count;
    }

    // Method 8: Find First and Last Position in 2D Matrix
    public int[][] findFirstAndLast(int[][] matrix, int target) {
        int[] first = {-1, -1};
        int[] last = {-1, -1};

        boolean found = false;
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == target) {
                    if (!found) {
                        first[0] = i;
                        first[1] = j;
                        found = true;
                    }
                    last[0] = i;
                    last[1] = j;
                }
            }
        }

        return new int[][]{first, last};
    }

    // Test cases
    public static void main(String[] args) {
        Search2DMatrix3 solution = new Search2DMatrix3();

        // Test matrix: sorted both ways
        int[][] matrix = {
            {1, 4, 7, 11, 15},
            {2, 5, 8, 12, 19},
            {3, 6, 9, 16, 22},
            {10, 13, 14, 17, 24},
            {18, 21, 23, 26, 30}
        };

        // Test Case 1: Target exists
        System.out.println("Search 5: " + solution.searchMatrix(matrix, 5)); // Expected: true
        System.out.println("Search 20: " + solution.searchMatrix(matrix, 20)); // Expected: false

        // Test Case 2: Two-step search
        System.out.println("Two-step search 5: " + solution.searchMatrixTwoStep(matrix, 5)); // Expected: true

        // Test Case 3: Linear search
        System.out.println("Linear search 5: " + solution.searchMatrixLinear(matrix, 5)); // Expected: true

        // Test Case 4: Top-right search
        System.out.println("Top-right search 5: " + solution.searchMatrixTopRight(matrix, 5)); // Expected: true

        // Test Case 5: Find position
        int[] pos = solution.searchMatrixPosition(matrix, 5);
        System.out.println("Position of 5: [" + pos[0] + ", " + pos[1] + "]"); // Expected: [1, 1]

        // Test Case 6: Count occurrences
        int[][] matrixWithDuplicates = {
            {1, 2, 2},
            {2, 3, 4},
            {2, 5, 6}
        };
        System.out.println("Count 2: " + solution.countOccurrences(matrixWithDuplicates, 2)); // Expected: 4

        // Test Case 7: First and last position
        int[][] positions = solution.findFirstAndLast(matrixWithDuplicates, 2);
        System.out.println("First 2: [" + positions[0][0] + ", " + positions[0][1] + "]");
        System.out.println("Last 2: [" + positions[1][0] + ", " + positions[1][1] + "]");

        // Test Case 8: Matrix II (not row-wise sorted)
        int[][] matrixII = {
            {1, 4, 7, 11, 15},
            {2, 5, 8, 12, 19},
            {3, 6, 9, 16, 22},
            {10, 13, 14, 17, 24},
            {18, 21, 23, 26, 30}
        };
        System.out.println("Matrix II search 5: " + solution.searchMatrixII(matrixII, 5)); // Expected: true
    }
}