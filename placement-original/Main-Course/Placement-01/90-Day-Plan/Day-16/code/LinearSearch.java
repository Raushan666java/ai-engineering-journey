/**
 * Linear Search Algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Use Case: Unsorted arrays, small datasets
 */

public class LinearSearch {
    
    /**
     * Basic linear search - finds first occurrence
     */
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i; // Found at index i
            }
        }
        return -1; // Not found
    }
    
    /**
     * Linear search that finds all occurrences
     */
    public static void linearSearchAll(int[] arr, int target) {
        boolean found = false;
        System.out.print("Element " + target + " found at indices: ");
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                System.out.print(i + " ");
                found = true;
            }
        }
        
        if (!found) {
            System.out.print("Not found");
        }
        System.out.println();
    }
    
    /**
     * Linear search in 2D array
     */
    public static int[] linearSearch2D(int[][] matrix, int target) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == target) {
                    return new int[]{i, j}; // Return row, col
                }
            }
        }
        return new int[]{-1, -1}; // Not found
    }
    
    /**
     * Linear search in String array
     */
    public static int linearSearchString(String[] arr, String target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i].equals(target)) {
                return i;
            }
        }
        return -1;
    }
    
    /**
     * Find maximum element using linear search
     */
    public static int findMax(int[] arr) {
        if (arr.length == 0) return Integer.MIN_VALUE;
        
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    
    /**
     * Find minimum element using linear search
     */
    public static int findMin(int[] arr) {
        if (arr.length == 0) return Integer.MAX_VALUE;
        
        int min = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
    
    /**
     * Count occurrences of target
     */
    public static int countOccurrences(int[] arr, int target) {
        int count = 0;
        for (int num : arr) {
            if (num == target) {
                count++;
            }
        }
        return count;
    }
    
    // Test cases
    public static void main(String[] args) {
        System.out.println("=== LINEAR SEARCH DEMONSTRATION ===\n");
        
        // Test 1: Basic linear search
        int[] arr1 = {5, 2, 9, 1, 7, 6, 3};
        int target1 = 7;
        int result1 = linearSearch(arr1, target1);
        System.out.println("Test 1: Basic Linear Search");
        System.out.print("Array: ");
        printArray(arr1);
        System.out.println("Target: " + target1);
        System.out.println("Result: " + (result1 != -1 ? "Found at index " + result1 : "Not found"));
        System.out.println();
        
        // Test 2: Search all occurrences
        int[] arr2 = {3, 5, 3, 2, 3, 8, 3};
        int target2 = 3;
        System.out.println("Test 2: Find All Occurrences");
        System.out.print("Array: ");
        printArray(arr2);
        System.out.println("Target: " + target2);
        linearSearchAll(arr2, target2);
        System.out.println();
        
        // Test 3: Element not found
        int[] arr3 = {10, 20, 30, 40, 50};
        int target3 = 25;
        int result3 = linearSearch(arr3, target3);
        System.out.println("Test 3: Element Not Found");
        System.out.print("Array: ");
        printArray(arr3);
        System.out.println("Target: " + target3);
        System.out.println("Result: " + (result3 != -1 ? "Found at index " + result3 : "Not found"));
        System.out.println();
        
        // Test 4: 2D array search
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        int target4 = 5;
        int[] result4 = linearSearch2D(matrix, target4);
        System.out.println("Test 4: 2D Array Search");
        System.out.println("Matrix:");
        print2DArray(matrix);
        System.out.println("Target: " + target4);
        if (result4[0] != -1) {
            System.out.println("Result: Found at [" + result4[0] + ", " + result4[1] + "]");
        } else {
            System.out.println("Result: Not found");
        }
        System.out.println();
        
        // Test 5: String array search
        String[] names = {"Alice", "Bob", "Charlie", "David", "Eve"};
        String targetName = "Charlie";
        int result5 = linearSearchString(names, targetName);
        System.out.println("Test 5: String Array Search");
        System.out.print("Array: ");
        printStringArray(names);
        System.out.println("Target: " + targetName);
        System.out.println("Result: " + (result5 != -1 ? "Found at index " + result5 : "Not found"));
        System.out.println();
        
        // Test 6: Find max and min
        int[] arr6 = {45, 12, 78, 23, 91, 34, 67};
        System.out.println("Test 6: Find Max and Min");
        System.out.print("Array: ");
        printArray(arr6);
        System.out.println("Maximum: " + findMax(arr6));
        System.out.println("Minimum: " + findMin(arr6));
        System.out.println();
        
        // Test 7: Count occurrences
        int[] arr7 = {1, 2, 3, 2, 4, 2, 5, 2};
        int target7 = 2;
        System.out.println("Test 7: Count Occurrences");
        System.out.print("Array: ");
        printArray(arr7);
        System.out.println("Target: " + target7);
        System.out.println("Count: " + countOccurrences(arr7, target7));
        System.out.println();
        
        // Performance comparison
        System.out.println("=== PERFORMANCE ANALYSIS ===");
        int[] largeArr = new int[10000];
        for (int i = 0; i < largeArr.length; i++) {
            largeArr[i] = i;
        }
        
        long startTime = System.nanoTime();
        linearSearch(largeArr, 9999); // Worst case - last element
        long endTime = System.nanoTime();
        long duration = (endTime - startTime);
        
        System.out.println("Array size: 10,000 elements");
        System.out.println("Search for last element");
        System.out.println("Time taken: " + duration + " nanoseconds");
        System.out.println("Time complexity: O(n)");
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
    
    private static void printStringArray(String[] arr) {
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
