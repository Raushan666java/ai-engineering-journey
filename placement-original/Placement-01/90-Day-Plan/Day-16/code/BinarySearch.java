/**
 * Binary Search Algorithm
 * Time Complexity: O(log n)
 * Space Complexity: O(1) iterative, O(log n) recursive
 * REQUIREMENT: Array must be sorted
 */

public class BinarySearch {
    
    /**
     * Iterative binary search (Preferred for interviews)
     */
    public static int binarySearchIterative(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;
        
        while (low <= high) {
            // Avoid overflow: mid = low + (high - low) / 2
            int mid = low + (high - low) / 2;
            
            if (arr[mid] == target) {
                return mid; // Found
            } else if (arr[mid] < target) {
                low = mid + 1; // Search right half
            } else {
                high = mid - 1; // Search left half
            }
        }
        
        return -1; // Not found
    }
    
    /**
     * Recursive binary search
     */
    public static int binarySearchRecursive(int[] arr, int target, int low, int high) {
        if (low > high) {
            return -1; // Base case: not found
        }
        
        int mid = low + (high - low) / 2;
        
        if (arr[mid] == target) {
            return mid; // Found
        } else if (arr[mid] < target) {
            return binarySearchRecursive(arr, target, mid + 1, high); // Search right
        } else {
            return binarySearchRecursive(arr, target, low, mid - 1); // Search left
        }
    }
    
    /**
     * Binary search - Find first occurrence
     */
    public static int findFirst(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
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
     * Binary search - Find last occurrence
     */
    public static int findLast(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        int result = -1;
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            
            if (arr[mid] == target) {
                result = mid;
                low = mid + 1; // Continue searching right
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        
        return result;
    }
    
    /**
     * Count occurrences using binary search
     */
    public static int countOccurrences(int[] arr, int target) {
        int first = findFirst(arr, target);
        if (first == -1) return 0; // Not found
        
        int last = findLast(arr, target);
        return last - first + 1;
    }
    
    /**
     * Search insert position (LC 35)
     * Returns index where target should be inserted
     */
    public static int searchInsert(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        
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
        
        return low; // Insert position
    }
    
    /**
     * Find peak element (LC 162)
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
        
        return low; // low == high at peak
    }
    
    /**
     * Square root using binary search
     */
    public static int sqrt(int x) {
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
        
        return (int) high; // Floor value
    }
    
    // Test cases
    public static void main(String[] args) {
        System.out.println("=== BINARY SEARCH DEMONSTRATION ===\n");
        
        // Test 1: Basic binary search
        int[] arr1 = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
        int target1 = 11;
        System.out.println("Test 1: Basic Binary Search (Iterative)");
        System.out.print("Sorted Array: ");
        printArray(arr1);
        System.out.println("Target: " + target1);
        int result1 = binarySearchIterative(arr1, target1);
        System.out.println("Result: " + (result1 != -1 ? "Found at index " + result1 : "Not found"));
        System.out.println("Comparisons: ~" + (int)(Math.log(arr1.length) / Math.log(2) + 1));
        System.out.println();
        
        // Test 2: Recursive binary search
        int target2 = 15;
        System.out.println("Test 2: Binary Search (Recursive)");
        System.out.print("Sorted Array: ");
        printArray(arr1);
        System.out.println("Target: " + target2);
        int result2 = binarySearchRecursive(arr1, target2, 0, arr1.length - 1);
        System.out.println("Result: " + (result2 != -1 ? "Found at index " + result2 : "Not found"));
        System.out.println();
        
        // Test 3: Element not found
        int target3 = 10;
        System.out.println("Test 3: Element Not Found");
        System.out.print("Sorted Array: ");
        printArray(arr1);
        System.out.println("Target: " + target3);
        int result3 = binarySearchIterative(arr1, target3);
        System.out.println("Result: " + (result3 != -1 ? "Found at index " + result3 : "Not found"));
        System.out.println();
        
        // Test 4: Find first and last occurrence
        int[] arr4 = {1, 2, 2, 2, 3, 4, 5, 5, 5, 5, 6};
        int target4 = 5;
        System.out.println("Test 4: Find First and Last Occurrence");
        System.out.print("Sorted Array: ");
        printArray(arr4);
        System.out.println("Target: " + target4);
        int first = findFirst(arr4, target4);
        int last = findLast(arr4, target4);
        System.out.println("First occurrence: index " + first);
        System.out.println("Last occurrence: index " + last);
        System.out.println("Count: " + countOccurrences(arr4, target4));
        System.out.println();
        
        // Test 5: Search insert position
        int[] arr5 = {1, 3, 5, 6};
        int target5 = 2;
        System.out.println("Test 5: Search Insert Position (LC 35)");
        System.out.print("Sorted Array: ");
        printArray(arr5);
        System.out.println("Target: " + target5);
        int insertPos = searchInsert(arr5, target5);
        System.out.println("Insert at index: " + insertPos);
        System.out.println();
        
        // Test 6: Find peak element
        int[] arr6 = {1, 2, 3, 1};
        System.out.println("Test 6: Find Peak Element (LC 162)");
        System.out.print("Array: ");
        printArray(arr6);
        int peak = findPeakElement(arr6);
        System.out.println("Peak element: " + arr6[peak] + " at index " + peak);
        System.out.println();
        
        // Test 7: Square root using binary search
        int num = 36;
        System.out.println("Test 7: Square Root using Binary Search");
        System.out.println("Number: " + num);
        System.out.println("Square root: " + sqrt(num));
        System.out.println();
        
        // Test 8: Edge cases
        System.out.println("Test 8: Edge Cases");
        int[] singleElement = {5};
        System.out.println("Single element array [5], search 5: " + binarySearchIterative(singleElement, 5));
        
        int[] twoElements = {3, 7};
        System.out.println("Two elements [3, 7], search 3: " + binarySearchIterative(twoElements, 3));
        System.out.println("Two elements [3, 7], search 7: " + binarySearchIterative(twoElements, 7));
        System.out.println();
        
        // Performance comparison
        System.out.println("=== PERFORMANCE COMPARISON ===");
        int[] largeArr = new int[100000];
        for (int i = 0; i < largeArr.length; i++) {
            largeArr[i] = i * 2;
        }
        
        int searchTarget = 199998;
        
        // Binary search
        long startTime = System.nanoTime();
        binarySearchIterative(largeArr, searchTarget);
        long endTime = System.nanoTime();
        long binaryTime = endTime - startTime;
        
        System.out.println("Array size: 100,000 elements");
        System.out.println("Search target: " + searchTarget);
        System.out.println("Binary search time: " + binaryTime + " ns");
        System.out.println("Comparisons: ~" + (int)(Math.log(largeArr.length) / Math.log(2) + 1));
        System.out.println("Time complexity: O(log n)");
        System.out.println();
        
        System.out.println("Binary search is " + (100000 / ((int)(Math.log(largeArr.length) / Math.log(2) + 1))) + "x faster than linear search!");
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
