/**
 * SEARCH ALGORITHM LIBRARY
 * Comprehensive library with all major search algorithms
 * Performance tracking and comparison features
 */

import java.util.*;

public class SearchLibrary {
    
    // Performance tracking
    private static int comparisons = 0;
    private static long executionTime = 0;
    
    /**
     * LINEAR SEARCH
     */
    public static class LinearSearch {
        public static int search(int[] arr, int target) {
            comparisons = 0;
            long start = System.nanoTime();
            
            for (int i = 0; i < arr.length; i++) {
                comparisons++;
                if (arr[i] == target) {
                    executionTime = System.nanoTime() - start;
                    return i;
                }
            }
            
            executionTime = System.nanoTime() - start;
            return -1;
        }
    }
    
    /**
     * BINARY SEARCH
     */
    public static class BinarySearch {
        public static int search(int[] arr, int target) {
            comparisons = 0;
            long start = System.nanoTime();
            
            int low = 0, high = arr.length - 1;
            
            while (low <= high) {
                int mid = low + (high - low) / 2;
                comparisons++;
                
                if (arr[mid] == target) {
                    executionTime = System.nanoTime() - start;
                    return mid;
                } else if (arr[mid] < target) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            
            executionTime = System.nanoTime() - start;
            return -1;
        }
        
        public static int findFirst(int[] arr, int target) {
            comparisons = 0;
            int low = 0, high = arr.length - 1;
            int result = -1;
            
            while (low <= high) {
                int mid = low + (high - low) / 2;
                comparisons++;
                
                if (arr[mid] == target) {
                    result = mid;
                    high = mid - 1;
                } else if (arr[mid] < target) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            
            return result;
        }
        
        public static int findLast(int[] arr, int target) {
            comparisons = 0;
            int low = 0, high = arr.length - 1;
            int result = -1;
            
            while (low <= high) {
                int mid = low + (high - low) / 2;
                comparisons++;
                
                if (arr[mid] == target) {
                    result = mid;
                    low = mid + 1;
                } else if (arr[mid] < target) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            
            return result;
        }
    }
    
    /**
     * INTERPOLATION SEARCH
     */
    public static class InterpolationSearch {
        public static int search(int[] arr, int target) {
            comparisons = 0;
            long start = System.nanoTime();
            
            int low = 0, high = arr.length - 1;
            
            while (low <= high && target >= arr[low] && target <= arr[high]) {
                if (low == high) {
                    comparisons++;
                    executionTime = System.nanoTime() - start;
                    return (arr[low] == target) ? low : -1;
                }
                
                int pos = low + (int)(((long)(target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
                
                if (pos < low || pos > high) break;
                
                comparisons++;
                if (arr[pos] == target) {
                    executionTime = System.nanoTime() - start;
                    return pos;
                } else if (arr[pos] < target) {
                    low = pos + 1;
                } else {
                    high = pos - 1;
                }
            }
            
            executionTime = System.nanoTime() - start;
            return -1;
        }
    }
    
    /**
     * EXPONENTIAL SEARCH
     */
    public static class ExponentialSearch {
        public static int search(int[] arr, int target) {
            comparisons = 0;
            long start = System.nanoTime();
            
            int n = arr.length;
            
            comparisons++;
            if (arr[0] == target) {
                executionTime = System.nanoTime() - start;
                return 0;
            }
            
            int bound = 1;
            while (bound < n && arr[bound] <= target) {
                comparisons++;
                bound *= 2;
            }
            
            int result = binarySearch(arr, target, bound / 2, Math.min(bound, n - 1));
            executionTime = System.nanoTime() - start;
            return result;
        }
        
        private static int binarySearch(int[] arr, int target, int low, int high) {
            while (low <= high) {
                int mid = low + (high - low) / 2;
                comparisons++;
                
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
    }
    
    /**
     * PERFORMANCE COMPARISON
     */
    public static void compareAllAlgorithms(int[] arr, int target) {
        System.out.println("\n╔═══════════════════════════════════════════════════════════╗");
        System.out.println("║          SEARCH ALGORITHM PERFORMANCE COMPARISON          ║");
        System.out.println("╚═══════════════════════════════════════════════════════════╝");
        System.out.println("\nArray Size: " + arr.length);
        System.out.println("Target: " + target);
        System.out.println("Array Type: " + (isSorted(arr) ? "Sorted" : "Unsorted"));
        System.out.println("\n" + "─".repeat(63));
        System.out.printf("%-20s %-15s %-15s %-10s%n", "Algorithm", "Time (ns)", "Comparisons", "Result");
        System.out.println("─".repeat(63));
        
        // Linear Search (works on unsorted)
        int result1 = LinearSearch.search(arr, target);
        System.out.printf("%-20s %-15d %-15d %-10s%n", 
            "Linear", executionTime, comparisons, result1 != -1 ? "Found" : "Not Found");
        
        // Only run others if array is sorted
        if (isSorted(arr)) {
            // Binary Search
            int result2 = BinarySearch.search(arr, target);
            System.out.printf("%-20s %-15d %-15d %-10s%n", 
                "Binary", executionTime, comparisons, result2 != -1 ? "Found" : "Not Found");
            
            // Interpolation Search
            int result3 = InterpolationSearch.search(arr, target);
            System.out.printf("%-20s %-15d %-15d %-10s%n", 
                "Interpolation", executionTime, comparisons, result3 != -1 ? "Found" : "Not Found");
            
            // Exponential Search
            int result4 = ExponentialSearch.search(arr, target);
            System.out.printf("%-20s %-15d %-15d %-10s%n", 
                "Exponential", executionTime, comparisons, result4 != -1 ? "Found" : "Not Found");
        } else {
            System.out.println("(Binary, Interpolation, Exponential require sorted array)");
        }
        
        System.out.println("─".repeat(63));
    }
    
    /**
     * VISUALIZATION - Show search steps
     */
    public static void visualizeBinarySearch(int[] arr, int target) {
        System.out.println("\n╔══════════════════════════════════════════════════════════╗");
        System.out.println("║          BINARY SEARCH STEP-BY-STEP VISUALIZATION       ║");
        System.out.println("╚══════════════════════════════════════════════════════════╝\n");
        
        int low = 0, high = arr.length - 1;
        int step = 1;
        
        System.out.println("Searching for: " + target);
        System.out.print("Array: ");
        printArray(arr);
        System.out.println();
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            
            System.out.println("Step " + step++ + ":");
            System.out.println("  Low: " + low + ", Mid: " + mid + ", High: " + high);
            System.out.println("  arr[mid] = " + arr[mid]);
            
            if (arr[mid] == target) {
                System.out.println("  ✓ FOUND at index " + mid);
                return;
            } else if (arr[mid] < target) {
                System.out.println("  arr[mid] < target → Search right half");
                low = mid + 1;
            } else {
                System.out.println("  arr[mid] > target → Search left half");
                high = mid - 1;
            }
            System.out.println();
        }
        
        System.out.println("  ✗ NOT FOUND");
    }
    
    /**
     * RECOMMENDATION ENGINE
     */
    public static void recommendAlgorithm(int arraySize, boolean isSorted, boolean isUniform) {
        System.out.println("\n╔══════════════════════════════════════════════════════════╗");
        System.out.println("║             ALGORITHM RECOMMENDATION SYSTEM              ║");
        System.out.println("╚══════════════════════════════════════════════════════════╝\n");
        
        System.out.println("Array Size: " + arraySize);
        System.out.println("Is Sorted: " + isSorted);
        System.out.println("Is Uniform: " + isUniform);
        System.out.println("\nRecommendation: ");
        
        if (!isSorted) {
            System.out.println("→ LINEAR SEARCH (array not sorted)");
            System.out.println("  Time: O(n)");
            System.out.println("  Reason: Other algorithms require sorted data");
        } else if (arraySize < 10) {
            System.out.println("→ LINEAR SEARCH (small array)");
            System.out.println("  Time: O(n)");
            System.out.println("  Reason: Overhead of binary search not worth it");
        } else if (isUniform && arraySize > 1000) {
            System.out.println("→ INTERPOLATION SEARCH (large uniform data)");
            System.out.println("  Time: O(log log n) average");
            System.out.println("  Reason: Best for uniformly distributed large datasets");
        } else {
            System.out.println("→ BINARY SEARCH (general sorted data)");
            System.out.println("  Time: O(log n)");
            System.out.println("  Reason: Optimal for sorted arrays, no distribution assumption");
        }
    }
    
    // Helper methods
    private static boolean isSorted(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) return false;
        }
        return true;
    }
    
    private static boolean isUniform(int[] arr) {
        if (arr.length < 2) return true;
        int diff = arr[1] - arr[0];
        for (int i = 1; i < arr.length - 1; i++) {
            if (arr[i + 1] - arr[i] != diff) return false;
        }
        return true;
    }
    
    private static void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < Math.min(arr.length, 20); i++) {
            System.out.print(arr[i]);
            if (i < Math.min(arr.length, 20) - 1) System.out.print(", ");
        }
        if (arr.length > 20) System.out.print("...");
        System.out.println("]");
    }
    
    // Demo and testing
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════════════╗");
        System.out.println("║              SEARCH ALGORITHM LIBRARY v1.0                ║");
        System.out.println("║          Comprehensive Search Implementation              ║");
        System.out.println("╚═══════════════════════════════════════════════════════════╝");
        
        // Test 1: Small sorted array
        System.out.println("\n\n=== TEST 1: SMALL SORTED ARRAY ===");
        int[] arr1 = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
        compareAllAlgorithms(arr1, 13);
        visualizeBinarySearch(arr1, 13);
        recommendAlgorithm(arr1.length, true, false);
        
        // Test 2: Large uniform array
        System.out.println("\n\n=== TEST 2: LARGE UNIFORM ARRAY ===");
        int[] arr2 = new int[10000];
        for (int i = 0; i < arr2.length; i++) {
            arr2[i] = i * 10; // Uniform spacing
        }
        compareAllAlgorithms(arr2, 99990);
        recommendAlgorithm(arr2.length, true, true);
        
        // Test 3: Large non-uniform sorted array
        System.out.println("\n\n=== TEST 3: LARGE NON-UNIFORM SORTED ARRAY ===");
        int[] arr3 = new int[10000];
        arr3[0] = 1;
        for (int i = 1; i < arr3.length; i++) {
            arr3[i] = arr3[i-1] + (int)(Math.random() * 5) + 1;
        }
        compareAllAlgorithms(arr3, arr3[5000]);
        recommendAlgorithm(arr3.length, true, false);
        
        // Test 4: Binary search variants demo
        System.out.println("\n\n=== TEST 4: BINARY SEARCH VARIANTS ===");
        int[] arr4 = {1, 2, 2, 2, 3, 4, 5, 5, 5, 5, 6, 7};
        int target = 5;
        System.out.print("Array: ");
        printArray(arr4);
        System.out.println("Target: " + target);
        System.out.println("First occurrence: " + BinarySearch.findFirst(arr4, target));
        System.out.println("Last occurrence: " + BinarySearch.findLast(arr4, target));
        System.out.println("Count: " + (BinarySearch.findLast(arr4, target) - BinarySearch.findFirst(arr4, target) + 1));
        
        // Summary
        System.out.println("\n\n╔═══════════════════════════════════════════════════════════╗");
        System.out.println("║                    LIBRARY SUMMARY                        ║");
        System.out.println("╚═══════════════════════════════════════════════════════════╝");
        System.out.println("\nImplemented Algorithms:");
        System.out.println("  1. Linear Search - O(n)");
        System.out.println("  2. Binary Search - O(log n)");
        System.out.println("  3. Interpolation Search - O(log log n) avg");
        System.out.println("  4. Exponential Search - O(log n)");
        System.out.println("\nFeatures:");
        System.out.println("  ✓ Performance comparison");
        System.out.println("  ✓ Step-by-step visualization");
        System.out.println("  ✓ Algorithm recommendation");
        System.out.println("  ✓ Binary search variants (first, last, count)");
        System.out.println("\nUse Cases:");
        System.out.println("  • Small arrays → Linear");
        System.out.println("  • General sorted → Binary");
        System.out.println("  • Uniform distribution → Interpolation");
        System.out.println("  • Unbounded arrays → Exponential");
    }
}
