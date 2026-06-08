public class BubbleSort {
    
    // Optimized Bubble Sort with early exit
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        System.out.println("Starting Bubble Sort...");
        
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            
            // Last i elements are already sorted
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            
            // If no swaps occurred, array is sorted
            if (!swapped) {
                System.out.println("Array sorted in " + (i + 1) + " passes (early exit)");
                break;
            }
        }
    }
    
    // Bubble sort without optimization (for comparison)
    public static void bubbleSortBasic(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    
    // Print array utility
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
    
    // Main method with test cases
    public static void main(String[] args) {
        System.out.println("=== BUBBLE SORT DEMONSTRATION ===\n");
        
        // Test Case 1: Random array
        int[] arr1 = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Test 1 - Random Array:");
        System.out.print("Before: ");
        printArray(arr1);
        bubbleSort(arr1);
        System.out.print("After:  ");
        printArray(arr1);
        System.out.println();
        
        // Test Case 2: Already sorted (best case)
        int[] arr2 = {1, 2, 3, 4, 5};
        System.out.println("Test 2 - Already Sorted (Best Case):");
        System.out.print("Before: ");
        printArray(arr2);
        bubbleSort(arr2);
        System.out.print("After:  ");
        printArray(arr2);
        System.out.println();
        
        // Test Case 3: Reverse sorted (worst case)
        int[] arr3 = {5, 4, 3, 2, 1};
        System.out.println("Test 3 - Reverse Sorted (Worst Case):");
        System.out.print("Before: ");
        printArray(arr3);
        bubbleSort(arr3);
        System.out.print("After:  ");
        printArray(arr3);
        System.out.println();
        
        // Test Case 4: Array with duplicates
        int[] arr4 = {3, 1, 4, 1, 5, 9, 2, 6, 5};
        System.out.println("Test 4 - Array with Duplicates:");
        System.out.print("Before: ");
        printArray(arr4);
        bubbleSort(arr4);
        System.out.print("After:  ");
        printArray(arr4);
        System.out.println();
        
        // Test Case 5: Single element
        int[] arr5 = {42};
        System.out.println("Test 5 - Single Element:");
        System.out.print("Before: ");
        printArray(arr5);
        bubbleSort(arr5);
        System.out.print("After:  ");
        printArray(arr5);
        System.out.println();
        
        // Performance comparison
        System.out.println("\n=== PERFORMANCE ANALYSIS ===");
        int[] large = new int[1000];
        for (int i = 0; i < 1000; i++) {
            large[i] = (int)(Math.random() * 10000);
        }
        
        int[] copy1 = large.clone();
        int[] copy2 = large.clone();
        
        long start1 = System.nanoTime();
        bubbleSort(copy1);
        long end1 = System.nanoTime();
        
        long start2 = System.nanoTime();
        bubbleSortBasic(copy2);
        long end2 = System.nanoTime();
        
        System.out.println("Array size: 1000 elements");
        System.out.println("Optimized Bubble Sort: " + (end1 - start1) / 1000000.0 + " ms");
        System.out.println("Basic Bubble Sort: " + (end2 - start2) / 1000000.0 + " ms");
        
        System.out.println("\n=== KEY INSIGHTS ===");
        System.out.println("Time Complexity:");
        System.out.println("  Best:    O(n)   - Already sorted with optimization");
        System.out.println("  Average: O(n²)  - Random data");
        System.out.println("  Worst:   O(n²)  - Reverse sorted");
        System.out.println("Space Complexity: O(1) - In-place sorting");
        System.out.println("Stability: YES - Maintains relative order of equal elements");
        System.out.println("\nUse Cases:");
        System.out.println("  ✓ Small datasets (n < 10)");
        System.out.println("  ✓ Nearly sorted data");
        System.out.println("  ✓ Educational purposes");
        System.out.println("  ✗ NOT for production (use Quick/Merge sort instead)");
    }
}
