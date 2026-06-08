/**
 * Interpolation Search Algorithm
 * Time Complexity: O(log log n) average, O(n) worst case
 * Space Complexity: O(1)
 * BEST FOR: Uniformly distributed sorted arrays
 */

public class InterpolationSearch {
    
    /**
     * Interpolation search - estimates position based on value
     */
    public static int interpolationSearch(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;
        
        while (low <= high && target >= arr[low] && target <= arr[high]) {
            // Handle single element
            if (low == high) {
                if (arr[low] == target) return low;
                return -1;
            }
            
            // Estimate position using interpolation formula
            // pos = low + [(target - arr[low]) * (high - low)] / (arr[high] - arr[low])
            int pos = low + (int)(((long)(target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
            
            // Check bounds
            if (pos < low || pos > high) {
                return -1;
            }
            
            if (arr[pos] == target) {
                return pos; // Found
            } else if (arr[pos] < target) {
                low = pos + 1; // Search right
            } else {
                high = pos - 1; // Search left
            }
        }
        
        return -1; // Not found
    }
    
    /**
     * Recursive interpolation search
     */
    public static int interpolationSearchRecursive(int[] arr, int target, int low, int high) {
        if (low <= high && target >= arr[low] && target <= arr[high]) {
            
            // Single element
            if (low == high) {
                return (arr[low] == target) ? low : -1;
            }
            
            // Calculate position
            int pos = low + (int)(((long)(target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
            
            // Check bounds
            if (pos < low || pos > high) {
                return -1;
            }
            
            if (arr[pos] == target) {
                return pos;
            } else if (arr[pos] < target) {
                return interpolationSearchRecursive(arr, target, pos + 1, high);
            } else {
                return interpolationSearchRecursive(arr, target, low, pos - 1);
            }
        }
        
        return -1;
    }
    
    /**
     * Compare interpolation vs binary search performance
     */
    public static void compareWithBinary(int[] arr, int target) {
        // Interpolation search
        int probes = 0;
        int low = 0, high = arr.length - 1;
        
        while (low <= high && target >= arr[low] && target <= arr[high]) {
            probes++;
            if (low == high) break;
            
            int pos = low + (int)(((long)(target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
            
            if (pos < low || pos > high) break;
            
            if (arr[pos] == target) {
                System.out.println("Interpolation search probes: " + probes);
                return;
            } else if (arr[pos] < target) {
                low = pos + 1;
            } else {
                high = pos - 1;
            }
        }
        
        System.out.println("Interpolation search probes: " + probes);
    }
    
    // Test cases
    public static void main(String[] args) {
        System.out.println("=== INTERPOLATION SEARCH DEMONSTRATION ===\n");
        
        // Test 1: Uniformly distributed array (BEST CASE)
        int[] arr1 = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
        int target1 = 70;
        System.out.println("Test 1: Uniformly Distributed Array (Best Case)");
        System.out.print("Array: ");
        printArray(arr1);
        System.out.println("Target: " + target1);
        int result1 = interpolationSearch(arr1, target1);
        System.out.println("Result: " + (result1 != -1 ? "Found at index " + result1 : "Not found"));
        System.out.println("Expected: Very few probes due to uniform distribution");
        System.out.println();
        
        // Test 2: Non-uniformly distributed array (WORST CASE)
        int[] arr2 = {1, 2, 3, 100, 200, 300, 400, 500};
        int target2 = 300;
        System.out.println("Test 2: Non-Uniform Distribution (Worse Performance)");
        System.out.print("Array: ");
        printArray(arr2);
        System.out.println("Target: " + target2);
        int result2 = interpolationSearch(arr2, target2);
        System.out.println("Result: " + (result2 != -1 ? "Found at index " + result2 : "Not found"));
        System.out.println("Note: Non-uniform spacing reduces interpolation efficiency");
        System.out.println();
        
        // Test 3: Recursive search
        int[] arr3 = {5, 10, 15, 20, 25, 30, 35, 40, 45, 50};
        int target3 = 25;
        System.out.println("Test 3: Recursive Interpolation Search");
        System.out.print("Array: ");
        printArray(arr3);
        System.out.println("Target: " + target3);
        int result3 = interpolationSearchRecursive(arr3, target3, 0, arr3.length - 1);
        System.out.println("Result: " + (result3 != -1 ? "Found at index " + result3 : "Not found"));
        System.out.println();
        
        // Test 4: Element not found
        int[] arr4 = {10, 20, 30, 40, 50};
        int target4 = 35;
        System.out.println("Test 4: Element Not Found");
        System.out.print("Array: ");
        printArray(arr4);
        System.out.println("Target: " + target4);
        int result4 = interpolationSearch(arr4, target4);
        System.out.println("Result: " + (result4 != -1 ? "Found at index " + result4 : "Not found"));
        System.out.println();
        
        // Test 5: Edge cases
        System.out.println("Test 5: Edge Cases");
        int[] singleElement = {42};
        System.out.println("Single element [42], search 42: " + 
            interpolationSearch(singleElement, 42));
        
        int[] twoElements = {10, 90};
        System.out.println("Two elements [10, 90], search 10: " + 
            interpolationSearch(twoElements, 10));
        System.out.println("Two elements [10, 90], search 90: " + 
            interpolationSearch(twoElements, 90));
        System.out.println();
        
        // Test 6: Large uniformly distributed array
        System.out.println("Test 6: Large Uniform Array Performance");
        int[] largeUniform = new int[10000];
        for (int i = 0; i < largeUniform.length; i++) {
            largeUniform[i] = i * 10; // Uniform: 0, 10, 20, 30...
        }
        
        int targetLarge = 99990;
        long startTime = System.nanoTime();
        int resultLarge = interpolationSearch(largeUniform, targetLarge);
        long endTime = System.nanoTime();
        
        System.out.println("Array size: 10,000 (uniform spacing of 10)");
        System.out.println("Target: " + targetLarge);
        System.out.println("Result: Found at index " + resultLarge);
        System.out.println("Time: " + (endTime - startTime) + " ns");
        System.out.println("Average complexity: O(log log n)");
        compareWithBinary(largeUniform, targetLarge);
        System.out.println();
        
        // Test 7: Comparison with Binary Search
        System.out.println("=== INTERPOLATION vs BINARY SEARCH ===");
        System.out.println("\nWhen Interpolation is BETTER:");
        System.out.println("- Uniformly distributed data (phone directory, dictionary)");
        System.out.println("- Large datasets with even spacing");
        System.out.println("- Time: O(log log n) average");
        
        System.out.println("\nWhen Binary Search is BETTER:");
        System.out.println("- Non-uniform distribution");
        System.out.println("- Small datasets");
        System.out.println("- Time: O(log n) guaranteed");
        
        System.out.println("\nExample Use Cases:");
        System.out.println("✓ Phone book (alphabetical names) - Interpolation");
        System.out.println("✓ Sequential IDs (1, 2, 3...) - Interpolation");
        System.out.println("✓ Random sorted data - Binary Search");
        System.out.println("✓ Exponentially growing data - Binary Search");
    }
    
    // Helper method
    private static void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < Math.min(arr.length, 15); i++) {
            System.out.print(arr[i]);
            if (i < Math.min(arr.length, 15) - 1) System.out.print(", ");
        }
        if (arr.length > 15) System.out.print("...");
        System.out.println("]");
    }
}
