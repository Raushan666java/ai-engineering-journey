/**
 * Exponential Search Algorithm
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * BEST FOR: Unbounded/infinite arrays, element near beginning
 */

public class ExponentialSearch {
    
    /**
     * Exponential search - find range then binary search
     */
    public static int exponentialSearch(int[] arr, int target) {
        int n = arr.length;
        
        // If target is at first position
        if (arr[0] == target) {
            return 0;
        }
        
        // Find range for binary search by repeated doubling
        int bound = 1;
        while (bound < n && arr[bound] <= target) {
            bound *= 2;
        }
        
        // Binary search in found range [bound/2, min(bound, n-1)]
        return binarySearch(arr, target, bound / 2, Math.min(bound, n - 1));
    }
    
    /**
     * Binary search helper method
     */
    private static int binarySearch(int[] arr, int target, int low, int high) {
        while (low <= high) {
            int mid = low + (high - low) / 2;
            
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }
    
    /**
     * Exponential search for unbounded array
     * (When you don't know array size)
     */
    public static int exponentialSearchUnbounded(int[] arr, int target) {
        int bound = 1;
        
        // Find upper bound (handle out of bounds gracefully)
        try {
            while (arr[bound] < target) {
                bound *= 2;
            }
        } catch (ArrayIndexOutOfBoundsException e) {
            bound = arr.length - 1;
        }
        
        // Binary search in range
        return binarySearch(arr, target, bound / 2, Math.min(bound, arr.length - 1));
    }
    
    /**
     * Find first occurrence using exponential search
     */
    public static int findFirstOccurrence(int[] arr, int target) {
        int n = arr.length;
        
        if (arr[0] == target) {
            // Check if it's the first occurrence
            return 0;
        }
        
        // Find range
        int bound = 1;
        while (bound < n && arr[bound] < target) {
            bound *= 2;
        }
        
        // Binary search for first occurrence in range
        return binarySearchFirst(arr, target, bound / 2, Math.min(bound, n - 1));
    }
    
    /**
     * Binary search for first occurrence
     */
    private static int binarySearchFirst(int[] arr, int target, int low, int high) {
        int result = -1;
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            
            if (arr[mid] == target) {
                result = mid;
                high = mid - 1; // Continue searching left
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        
        return result;
    }
    
    /**
     * Compare exponential vs binary search
     */
    public static void comparePerformance(int[] arr, int target) {
        System.out.println("\n--- Performance Comparison ---");
        
        // Exponential search
        long start = System.nanoTime();
        int expResult = exponentialSearch(arr, target);
        long expTime = System.nanoTime() - start;
        
        // Binary search
        start = System.nanoTime();
        int binResult = binarySearch(arr, target, 0, arr.length - 1);
        long binTime = System.nanoTime() - start;
        
        System.out.println("Exponential search: " + expTime + " ns");
        System.out.println("Binary search: " + binTime + " ns");
        
        if (expTime < binTime) {
            System.out.println("Exponential is faster (element near beginning)");
        } else {
            System.out.println("Binary is faster (element far from beginning)");
        }
    }
    
    // Test cases
    public static void main(String[] args) {
        System.out.println("=== EXPONENTIAL SEARCH DEMONSTRATION ===\n");
        
        // Test 1: Element near beginning (BEST CASE for exponential)
        int[] arr1 = new int[1000];
        for (int i = 0; i < arr1.length; i++) {
            arr1[i] = i * 2;
        }
        int target1 = 20; // Near beginning
        
        System.out.println("Test 1: Element Near Beginning");
        System.out.println("Array: [0, 2, 4, 6, ..., 1998] (1000 elements)");
        System.out.println("Target: " + target1);
        int result1 = exponentialSearch(arr1, target1);
        System.out.println("Result: Found at index " + result1);
        System.out.println("Advantage: Exponential search quickly finds small range");
        comparePerformance(arr1, target1);
        System.out.println();
        
        // Test 2: Element in middle
        int target2 = 1000; // Middle
        System.out.println("Test 2: Element in Middle");
        System.out.println("Array: [0, 2, 4, 6, ..., 1998] (1000 elements)");
        System.out.println("Target: " + target2);
        int result2 = exponentialSearch(arr1, target2);
        System.out.println("Result: Found at index " + result2);
        comparePerformance(arr1, target2);
        System.out.println();
        
        // Test 3: Element at first position
        int target3 = 0;
        System.out.println("Test 3: Element at First Position");
        System.out.println("Target: " + target3);
        int result3 = exponentialSearch(arr1, target3);
        System.out.println("Result: Found at index " + result3);
        System.out.println("Optimized: Checked first element immediately");
        System.out.println();
        
        // Test 4: Element not found
        int target4 = 999; // Odd number (doesn't exist)
        System.out.println("Test 4: Element Not Found");
        System.out.println("Target: " + target4);
        int result4 = exponentialSearch(arr1, target4);
        System.out.println("Result: " + (result4 != -1 ? "Found" : "Not found"));
        System.out.println();
        
        // Test 5: Small array
        int[] arr5 = {1, 3, 5, 7, 9, 11, 13};
        int target5 = 7;
        System.out.println("Test 5: Small Array");
        System.out.print("Array: ");
        printArray(arr5);
        System.out.println("Target: " + target5);
        int result5 = exponentialSearch(arr5, target5);
        System.out.println("Result: Found at index " + result5);
        System.out.println();
        
        // Test 6: Unbounded array simulation
        int[] arr6 = new int[10000];
        for (int i = 0; i < arr6.length; i++) {
            arr6[i] = i;
        }
        int target6 = 100;
        System.out.println("Test 6: Unbounded Array (Don't Know Size)");
        System.out.println("Array: [0, 1, 2, 3, ..., 9999] (size unknown)");
        System.out.println("Target: " + target6);
        int result6 = exponentialSearchUnbounded(arr6, target6);
        System.out.println("Result: Found at index " + result6);
        System.out.println("Use case: Streaming data, infinite lists");
        System.out.println();
        
        // Test 7: Find first occurrence with duplicates
        int[] arr7 = {1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9};
        int target7 = 5;
        System.out.println("Test 7: Find First Occurrence (Duplicates)");
        System.out.print("Array: ");
        printArray(arr7);
        System.out.println("Target: " + target7);
        int result7 = findFirstOccurrence(arr7, target7);
        System.out.println("First occurrence at index: " + result7);
        System.out.println();
        
        // Test 8: Performance on large array
        System.out.println("Test 8: Large Array Performance");
        int[] largeArr = new int[100000];
        for (int i = 0; i < largeArr.length; i++) {
            largeArr[i] = i;
        }
        
        // Element near beginning
        System.out.println("\nSearch for element 100 (near beginning):");
        long start = System.nanoTime();
        exponentialSearch(largeArr, 100);
        long expTime = System.nanoTime() - start;
        
        start = System.nanoTime();
        binarySearch(largeArr, 100, 0, largeArr.length - 1);
        long binTime = System.nanoTime() - start;
        
        System.out.println("Exponential: " + expTime + " ns");
        System.out.println("Binary: " + binTime + " ns");
        System.out.println("Speedup: " + (double)binTime / expTime + "x");
        
        // Element far from beginning
        System.out.println("\nSearch for element 99000 (far from beginning):");
        start = System.nanoTime();
        exponentialSearch(largeArr, 99000);
        expTime = System.nanoTime() - start;
        
        start = System.nanoTime();
        binarySearch(largeArr, 99000, 0, largeArr.length - 1);
        binTime = System.nanoTime() - start;
        
        System.out.println("Exponential: " + expTime + " ns");
        System.out.println("Binary: " + binTime + " ns");
        System.out.println();
        
        // Summary
        System.out.println("=== WHEN TO USE EXPONENTIAL SEARCH ===");
        System.out.println("✓ Unbounded/infinite arrays");
        System.out.println("✓ Element likely near beginning");
        System.out.println("✓ Array size unknown");
        System.out.println("✓ Distributed systems, streaming data");
        System.out.println("\n✗ Element far from beginning - use binary search");
        System.out.println("✗ Small arrays - use linear search");
    }
    
    // Helper method
    private static void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }
}
