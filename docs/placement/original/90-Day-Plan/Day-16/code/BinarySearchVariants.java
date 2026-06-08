/**
 * Binary Search Variants - Advanced Interview Problems
 * All variants solve specific search challenges using binary search
 */

public class BinarySearchVariants {
    
    /**
     * Search in Rotated Sorted Array (LC 33) ⭐⭐⭐
     * Array rotated at unknown pivot
     */
    public static int searchRotated(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            
            if (arr[mid] == target) {
                return mid;
            }
            
            // Determine which half is sorted
            if (arr[low] <= arr[mid]) {
                // Left half is sorted
                if (target >= arr[low] && target < arr[mid]) {
                    high = mid - 1; // Target in left half
                } else {
                    low = mid + 1; // Target in right half
                }
            } else {
                // Right half is sorted
                if (target > arr[mid] && target <= arr[high]) {
                    low = mid + 1; // Target in right half
                } else {
                    high = mid - 1; // Target in left half
                }
            }
        }
        
        return -1;
    }
    
    /**
     * Find Minimum in Rotated Sorted Array (LC 153)
     */
    public static int findMin(int[] arr) {
        int low = 0, high = arr.length - 1;
        
        while (low < high) {
            int mid = low + (high - low) / 2;
            
            if (arr[mid] > arr[high]) {
                // Minimum is in right half
                low = mid + 1;
            } else {
                // Minimum is in left half (including mid)
                high = mid;
            }
        }
        
        return arr[low]; // low == high at minimum
    }
    
    /**
     * Search in 2D Matrix (LC 74)
     * Treat 2D matrix as 1D sorted array
     */
    public static boolean searchMatrix(int[][] matrix, int target) {
        if (matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }
        
        int m = matrix.length;
        int n = matrix[0].length;
        int low = 0, high = m * n - 1;
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            int midValue = matrix[mid / n][mid % n]; // Convert 1D to 2D
            
            if (midValue == target) {
                return true;
            } else if (midValue < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        
        return false;
    }
    
    /**
     * Find First Bad Version (LC 278)
     * Binary search for first occurrence
     */
    public static int firstBadVersion(int n, int badVersion) {
        int low = 1, high = n;
        
        while (low < high) {
            int mid = low + (high - low) / 2;
            
            if (isBadVersion(mid, badVersion)) {
                high = mid; // First bad is at or before mid
            } else {
                low = mid + 1; // First bad is after mid
            }
        }
        
        return low;
    }
    
    // Helper for firstBadVersion
    private static boolean isBadVersion(int version, int badVersion) {
        return version >= badVersion;
    }
    
    /**
     * Search for a Range (LC 34) ⭐⭐⭐
     * Find first and last position of target
     */
    public static int[] searchRange(int[] arr, int target) {
        int[] result = {-1, -1};
        
        // Find first occurrence
        result[0] = findBound(arr, target, true);
        
        // If not found, return [-1, -1]
        if (result[0] == -1) {
            return result;
        }
        
        // Find last occurrence
        result[1] = findBound(arr, target, false);
        
        return result;
    }
    
    private static int findBound(int[] arr, int target, boolean isFirst) {
        int low = 0, high = arr.length - 1;
        int result = -1;
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            
            if (arr[mid] == target) {
                result = mid;
                if (isFirst) {
                    high = mid - 1; // Continue left
                } else {
                    low = mid + 1; // Continue right
                }
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        
        return result;
    }
    
    /**
     * Find Peak Element (LC 162)
     * Peak: arr[i] > arr[i-1] && arr[i] > arr[i+1]
     */
    public static int findPeakElement(int[] arr) {
        int low = 0, high = arr.length - 1;
        
        while (low < high) {
            int mid = low + (high - low) / 2;
            
            if (arr[mid] > arr[mid + 1]) {
                high = mid; // Peak is on left (including mid)
            } else {
                low = mid + 1; // Peak is on right
            }
        }
        
        return low;
    }
    
    /**
     * Sqrt(x) using Binary Search (LC 69)
     */
    public static int mySqrt(int x) {
        if (x < 2) return x;
        
        long low = 1, high = x / 2;
        
        while (low <= high) {
            long mid = low + (high - low) / 2;
            long square = mid * mid;
            
            if (square == x) {
                return (int) mid;
            } else if (square < x) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        
        return (int) high; // Floor of sqrt
    }
    
    /**
     * Find K Closest Elements (LC 658)
     * Binary search + two pointers
     */
    public static int[] findClosestElements(int[] arr, int k, int x) {
        int low = 0, high = arr.length - k;
        
        while (low < high) {
            int mid = low + (high - low) / 2;
            
            // Compare distances
            if (x - arr[mid] > arr[mid + k] - x) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = arr[low + i];
        }
        
        return result;
    }
    
    // Test cases
    public static void main(String[] args) {
        System.out.println("=== BINARY SEARCH VARIANTS ===\n");
        
        // Test 1: Search in Rotated Sorted Array
        int[] rotated = {4, 5, 6, 7, 0, 1, 2};
        int target1 = 0;
        System.out.println("Test 1: Search in Rotated Sorted Array (LC 33)");
        System.out.print("Array: ");
        printArray(rotated);
        System.out.println("Target: " + target1);
        System.out.println("Found at index: " + searchRotated(rotated, target1));
        System.out.println();
        
        // Test 2: Find Minimum in Rotated Array
        System.out.println("Test 2: Find Minimum in Rotated Array (LC 153)");
        System.out.print("Array: ");
        printArray(rotated);
        System.out.println("Minimum: " + findMin(rotated));
        System.out.println();
        
        // Test 3: Search 2D Matrix
        int[][] matrix = {
            {1, 3, 5, 7},
            {10, 11, 16, 20},
            {23, 30, 34, 60}
        };
        int target3 = 3;
        System.out.println("Test 3: Search in 2D Matrix (LC 74)");
        System.out.println("Matrix:");
        print2DArray(matrix);
        System.out.println("Target: " + target3);
        System.out.println("Found: " + searchMatrix(matrix, target3));
        System.out.println();
        
        // Test 4: First Bad Version
        int n = 10;
        int badVersion = 4;
        System.out.println("Test 4: First Bad Version (LC 278)");
        System.out.println("Versions: 1 to " + n);
        System.out.println("First bad version: " + firstBadVersion(n, badVersion));
        System.out.println();
        
        // Test 5: Search Range (First and Last Position)
        int[] arr5 = {5, 7, 7, 8, 8, 10};
        int target5 = 8;
        System.out.println("Test 5: Find First and Last Position (LC 34)");
        System.out.print("Array: ");
        printArray(arr5);
        System.out.println("Target: " + target5);
        int[] range = searchRange(arr5, target5);
        System.out.println("Range: [" + range[0] + ", " + range[1] + "]");
        System.out.println();
        
        // Test 6: Find Peak Element
        int[] arr6 = {1, 2, 3, 1};
        System.out.println("Test 6: Find Peak Element (LC 162)");
        System.out.print("Array: ");
        printArray(arr6);
        int peakIdx = findPeakElement(arr6);
        System.out.println("Peak: " + arr6[peakIdx] + " at index " + peakIdx);
        System.out.println();
        
        // Test 7: Square Root
        int num = 16;
        System.out.println("Test 7: Sqrt(x) using Binary Search (LC 69)");
        System.out.println("Number: " + num);
        System.out.println("Square root: " + mySqrt(num));
        System.out.println();
        
        // Test 8: K Closest Elements
        int[] arr8 = {1, 2, 3, 4, 5};
        int k = 4, x = 3;
        System.out.println("Test 8: Find K Closest Elements (LC 658)");
        System.out.print("Array: ");
        printArray(arr8);
        System.out.println("k=" + k + ", x=" + x);
        System.out.print("Result: ");
        printArray(findClosestElements(arr8, k, x));
        System.out.println();
        
        // Summary
        System.out.println("=== KEY PATTERNS ===");
        System.out.println("1. Rotated Array: Determine which half is sorted");
        System.out.println("2. Find Min/Max: Compare mid with boundary");
        System.out.println("3. 2D Matrix: Convert to 1D index (row = mid/n, col = mid%n)");
        System.out.println("4. First/Last: Continue searching after found");
        System.out.println("5. Peak Element: Compare mid with neighbors");
    }
    
    // Helper methods
    private static void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }
    
    private static void print2DArray(int[][] matrix) {
        for (int[] row : matrix) {
            System.out.print("  ");
            printArray(row);
        }
    }
}
