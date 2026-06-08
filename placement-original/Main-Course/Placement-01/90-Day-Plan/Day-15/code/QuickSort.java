public class QuickSort {
    
    // Main quick sort function
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            // Partition the array and get pivot index
            int pi = partition(arr, low, high);
            
            // Recursively sort elements before and after partition
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    // Standard partition (uses last element as pivot)
    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high]; // Choose last element as pivot
        int i = low - 1; // Index of smaller element
        
        for (int j = low; j < high; j++) {
            // If current element is smaller than pivot
            if (arr[j] < pivot) {
                i++;
                // Swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        // Swap arr[i+1] and arr[high] (place pivot in correct position)
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        
        return i + 1;
    }
    
    // Randomized Quick Sort (to avoid worst case)
    public static void randomizedQuickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = randomizedPartition(arr, low, high);
            randomizedQuickSort(arr, low, pi - 1);
            randomizedQuickSort(arr, pi + 1, high);
        }
    }
    
    // Randomized partition
    private static int randomizedPartition(int[] arr, int low, int high) {
        // Choose random pivot and swap with last element
        int randomIndex = low + (int)(Math.random() * (high - low + 1));
        int temp = arr[randomIndex];
        arr[randomIndex] = arr[high];
        arr[high] = temp;
        
        return partition(arr, low, high);
    }
    
    // Quick sort with verbose output
    public static void quickSortVerbose(int[] arr, int low, int high, int depth) {
        if (low < high) {
            String indent = "  ".repeat(depth);
            System.out.println(indent + "Sorting: [" + low + ".." + high + "]");
            printSubarray(arr, low, high);
            
            int pi = partition(arr, low, high);
            System.out.println(indent + "Pivot " + arr[pi] + " at index " + pi);
            printSubarray(arr, low, high);
            
            quickSortVerbose(arr, low, pi - 1, depth + 1);
            quickSortVerbose(arr, pi + 1, high, depth + 1);
        }
    }
    
    // Three-way partition (for arrays with many duplicates)
    public static void quickSort3Way(int[] arr, int low, int high) {
        if (low < high) {
            int[] p = partition3Way(arr, low, high);
            quickSort3Way(arr, low, p[0] - 1);
            quickSort3Way(arr, p[1] + 1, high);
        }
    }
    
    // Dutch National Flag partition
    private static int[] partition3Way(int[] arr, int low, int high) {
        int pivot = arr[high];
        int lt = low;      // Elements < pivot
        int i = low;       // Current element
        int gt = high;     // Elements > pivot
        
        while (i <= gt) {
            if (arr[i] < pivot) {
                swap(arr, lt, i);
                lt++;
                i++;
            } else if (arr[i] > pivot) {
                swap(arr, i, gt);
                gt--;
            } else {
                i++;
            }
        }
        
        return new int[]{lt, gt};
    }
    
    // Swap utility
    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    // Print subarray
    public static void printSubarray(int[] arr, int low, int high) {
        System.out.print("  [");
        for (int i = low; i <= high; i++) {
            System.out.print(arr[i]);
            if (i < high) System.out.print(", ");
        }
        System.out.println("]");
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
        System.out.println("=== QUICK SORT DEMONSTRATION ===\n");
        
        // Test Case 1: Random array
        int[] arr1 = {10, 7, 8, 9, 1, 5};
        System.out.println("Test 1 - Random Array:");
        System.out.print("Before: ");
        printArray(arr1);
        quickSort(arr1, 0, arr1.length - 1);
        System.out.print("After:  ");
        printArray(arr1);
        System.out.println();
        
        // Test Case 2: Already sorted (worst case for standard quick sort)
        int[] arr2 = {1, 2, 3, 4, 5};
        System.out.println("Test 2 - Already Sorted (Worst Case):");
        System.out.print("Before: ");
        printArray(arr2);
        quickSort(arr2, 0, arr2.length - 1);
        System.out.print("After:  ");
        printArray(arr2);
        System.out.println();
        
        // Test Case 3: Reverse sorted
        int[] arr3 = {5, 4, 3, 2, 1};
        System.out.println("Test 3 - Reverse Sorted:");
        System.out.print("Before: ");
        printArray(arr3);
        quickSort(arr3, 0, arr3.length - 1);
        System.out.print("After:  ");
        printArray(arr3);
        System.out.println();
        
        // Test Case 4: Verbose execution
        int[] arr4 = {3, 6, 8, 10, 1, 2, 1};
        System.out.println("Test 4 - Verbose Execution (Partition Process):");
        System.out.print("Before: ");
        printArray(arr4);
        System.out.println("\nPartitioning Process:");
        quickSortVerbose(arr4, 0, arr4.length - 1, 0);
        System.out.print("\nAfter:  ");
        printArray(arr4);
        System.out.println();
        
        // Test Case 5: Randomized Quick Sort
        int[] arr5 = {1, 2, 3, 4, 5, 6, 7, 8}; // Worst case for standard
        System.out.println("Test 5 - Randomized Quick Sort (Avoids Worst Case):");
        System.out.print("Before: ");
        printArray(arr5);
        
        long start1 = System.nanoTime();
        quickSort(arr5.clone(), 0, arr5.length - 1);
        long end1 = System.nanoTime();
        
        long start2 = System.nanoTime();
        randomizedQuickSort(arr5.clone(), 0, arr5.length - 1);
        long end2 = System.nanoTime();
        
        System.out.println("Standard Quick Sort: " + (end1 - start1) / 1000.0 + " μs");
        System.out.println("Randomized Quick Sort: " + (end2 - start2) / 1000.0 + " μs");
        System.out.println();
        
        // Test Case 6: Three-way partition (for duplicates)
        int[] arr6 = {4, 2, 4, 1, 4, 3, 4, 4, 2, 1};
        System.out.println("Test 6 - Three-Way Partition (Many Duplicates):");
        System.out.print("Before: ");
        printArray(arr6);
        quickSort3Way(arr6, 0, arr6.length - 1);
        System.out.print("After:  ");
        printArray(arr6);
        System.out.println();
        
        // Test Case 7: Large array performance
        System.out.println("Test 7 - Large Array Performance:");
        int[] large = new int[100000];
        for (int i = 0; i < 100000; i++) {
            large[i] = (int)(Math.random() * 100000);
        }
        
        long start = System.nanoTime();
        randomizedQuickSort(large, 0, large.length - 1);
        long end = System.nanoTime();
        
        System.out.println("Array size: 100,000 elements");
        System.out.println("Time taken: " + (end - start) / 1000000.0 + " ms");
        System.out.println("Verified sorted: " + isSorted(large));
        
        System.out.println("\n=== KEY INSIGHTS ===");
        System.out.println("Time Complexity:");
        System.out.println("  Best:    O(n log n) - Balanced partitions");
        System.out.println("  Average: O(n log n) - Random pivot selection");
        System.out.println("  Worst:   O(n²)      - Already sorted (poor pivot)");
        System.out.println("Space Complexity: O(log n) - Recursion stack");
        System.out.println("Stability: NO - May change relative order of equal elements");
        
        System.out.println("\n=== HOW QUICK SORT WORKS ===");
        System.out.println("Divide and Conquer Strategy:");
        System.out.println("  1. CHOOSE pivot (last, random, median-of-three)");
        System.out.println("  2. PARTITION: Place pivot in correct position");
        System.out.println("     • Smaller elements on left");
        System.out.println("     • Larger elements on right");
        System.out.println("  3. RECURSIVELY sort left and right partitions");
        System.out.println("\nPartition Magic:");
        System.out.println("  • Uses two pointers (i and j)");
        System.out.println("  • i tracks position for next small element");
        System.out.println("  • j scans the array");
        System.out.println("  • Swaps small elements to left side");
        
        System.out.println("\n=== PIVOT SELECTION STRATEGIES ===");
        System.out.println("1. Last Element: Simple but O(n²) for sorted data");
        System.out.println("2. Random Element: Avoids worst case, O(n log n) expected");
        System.out.println("3. Median-of-Three: Best in practice, used in most libraries");
        System.out.println("4. Middle Element: Simple alternative");
        
        System.out.println("\n=== USE CASES ===");
        System.out.println("When to use Quick Sort:");
        System.out.println("  ✓ General-purpose sorting (fastest in practice)");
        System.out.println("  ✓ In-place sorting needed (O(log n) space)");
        System.out.println("  ✓ Average case performance critical");
        System.out.println("  ✓ Cache-friendly operations important");
        System.out.println("  ✓ Large datasets (arrays)");
        System.out.println("\nWhen NOT to use:");
        System.out.println("  ✗ Worst-case O(n log n) guarantee needed (use merge sort)");
        System.out.println("  ✗ Stability required (use merge sort)");
        System.out.println("  ✗ Sorting linked lists (merge sort better)");
        System.out.println("  ✗ Small arrays (insertion sort faster)");
        
        System.out.println("\n=== REAL-WORLD USAGE ===");
        System.out.println("C++ std::sort(): IntroSort");
        System.out.println("  • Quick sort for partitioning");
        System.out.println("  • Switches to heap sort if recursion depth > 2*log(n)");
        System.out.println("  • Insertion sort for small subarrays");
        System.out.println("\nJava Arrays.sort() (primitives):");
        System.out.println("  • Dual-Pivot Quick Sort");
        System.out.println("  • Two pivots instead of one");
        System.out.println("  • ~10% faster than single pivot");
        System.out.println("\n.NET Array.Sort():");
        System.out.println("  • IntroSort (Quick + Heap + Insertion)");
        
        System.out.println("\n=== OPTIMIZATIONS ===");
        System.out.println("1. Randomized Pivot: Avoids O(n²) worst case");
        System.out.println("2. Three-Way Partition: Efficient for many duplicates");
        System.out.println("3. Insertion Sort Cutoff: Switch to insertion for small subarrays");
        System.out.println("4. Median-of-Three: Better pivot selection");
        System.out.println("5. Tail Recursion: Optimize space to O(log n)");
        
        System.out.println("\n=== WHY QUICK SORT IS POPULAR ===");
        System.out.println("✓ Fastest in practice (better cache locality than merge sort)");
        System.out.println("✓ In-place (doesn't need extra arrays like merge sort)");
        System.out.println("✓ Average O(n log n) with simple randomization");
        System.out.println("✓ Easy to implement");
        System.out.println("✓ Works well with virtual memory (sequential access)");
        System.out.println("✓ Used as default in most programming languages");
    }
    
    // Utility to check if array is sorted
    private static boolean isSorted(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) return false;
        }
        return true;
    }
}
