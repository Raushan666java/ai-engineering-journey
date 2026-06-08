public class InsertionSort {
    
    // Standard Insertion Sort
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        System.out.println("Starting Insertion Sort...");
        
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            
            // Move elements greater than key one position ahead
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }
    
    // Insertion sort with step-by-step visualization
    public static void insertionSortVerbose(int[] arr) {
        int n = arr.length;
        int shifts = 0;
        int comparisons = 0;
        
        System.out.println("Step-by-step execution:");
        printArray(arr);
        
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            
            System.out.println("\nInserting " + key + " (index " + i + "):");
            
            while (j >= 0 && arr[j] > key) {
                comparisons++;
                arr[j + 1] = arr[j];
                shifts++;
                j--;
            }
            if (j >= 0) comparisons++;
            
            arr[j + 1] = key;
            printArray(arr);
        }
        
        System.out.println("\nTotal comparisons: " + comparisons);
        System.out.println("Total shifts: " + shifts);
    }
    
    // Binary Insertion Sort (optimization for comparisons)
    public static void binaryInsertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            
            // Find position to insert using binary search
            int pos = binarySearch(arr, key, 0, i - 1);
            
            // Shift elements to make space
            for (int j = i - 1; j >= pos; j--) {
                arr[j + 1] = arr[j];
            }
            
            arr[pos] = key;
        }
    }
    
    // Binary search to find insertion position
    private static int binarySearch(int[] arr, int key, int low, int high) {
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (key < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return low;
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
        System.out.println("=== INSERTION SORT DEMONSTRATION ===\n");
        
        // Test Case 1: Random array
        int[] arr1 = {12, 11, 13, 5, 6};
        System.out.println("Test 1 - Random Array:");
        System.out.print("Before: ");
        printArray(arr1);
        insertionSort(arr1);
        System.out.print("After:  ");
        printArray(arr1);
        System.out.println();
        
        // Test Case 2: Already sorted (best case)
        int[] arr2 = {1, 2, 3, 4, 5};
        System.out.println("Test 2 - Already Sorted (Best Case - O(n)):");
        System.out.print("Before: ");
        printArray(arr2);
        insertionSort(arr2);
        System.out.print("After:  ");
        printArray(arr2);
        System.out.println();
        
        // Test Case 3: Reverse sorted (worst case)
        int[] arr3 = {5, 4, 3, 2, 1};
        System.out.println("Test 3 - Reverse Sorted (Worst Case - O(n²)):");
        System.out.print("Before: ");
        printArray(arr3);
        insertionSort(arr3);
        System.out.print("After:  ");
        printArray(arr3);
        System.out.println();
        
        // Test Case 4: Nearly sorted (excellent performance)
        int[] arr4 = {1, 2, 3, 5, 4, 6, 7};
        System.out.println("Test 4 - Nearly Sorted (Excellent Performance):");
        System.out.print("Before: ");
        printArray(arr4);
        insertionSort(arr4);
        System.out.print("After:  ");
        printArray(arr4);
        System.out.println();
        
        // Test Case 5: Verbose execution
        int[] arr5 = {4, 3, 2, 10, 12, 1, 5, 6};
        System.out.println("\nTest 5 - Verbose Execution:");
        insertionSortVerbose(arr5);
        
        // Test Case 6: Binary Insertion Sort
        int[] arr6 = {37, 23, 0, 17, 12, 72, 31};
        System.out.println("\n\nTest 6 - Binary Insertion Sort:");
        System.out.print("Before: ");
        printArray(arr6);
        binaryInsertionSort(arr6);
        System.out.print("After:  ");
        printArray(arr6);
        
        // Performance comparison
        System.out.println("\n\n=== PERFORMANCE ANALYSIS ===");
        int[] large = new int[1000];
        for (int i = 0; i < 1000; i++) {
            large[i] = 1000 - i; // Worst case (reverse sorted)
        }
        
        int[] copy1 = large.clone();
        int[] copy2 = large.clone();
        
        long start1 = System.nanoTime();
        insertionSort(copy1);
        long end1 = System.nanoTime();
        
        long start2 = System.nanoTime();
        binaryInsertionSort(copy2);
        long end2 = System.nanoTime();
        
        System.out.println("Array size: 1000 elements (reverse sorted)");
        System.out.println("Standard Insertion Sort: " + (end1 - start1) / 1000000.0 + " ms");
        System.out.println("Binary Insertion Sort: " + (end2 - start2) / 1000000.0 + " ms");
        System.out.println("Note: Binary insertion reduces comparisons but NOT shifts");
        
        System.out.println("\n=== KEY INSIGHTS ===");
        System.out.println("Time Complexity:");
        System.out.println("  Best:    O(n)   - Already sorted (adaptive!)");
        System.out.println("  Average: O(n²)  - Random data");
        System.out.println("  Worst:   O(n²)  - Reverse sorted");
        System.out.println("Space Complexity: O(1) - In-place sorting");
        System.out.println("Stability: YES - Maintains relative order of equal elements");
        System.out.println("\nAdaptive Nature:");
        System.out.println("  • Excellent for nearly sorted data");
        System.out.println("  • Number of inversions = number of shifts");
        System.out.println("  • If k inversions, runs in O(n + k)");
        System.out.println("\nUse Cases:");
        System.out.println("  ✓ Small datasets (n < 10-20)");
        System.out.println("  ✓ Nearly sorted data (best choice!)");
        System.out.println("  ✓ Online sorting (data arrives one at a time)");
        System.out.println("  ✓ Used in hybrid algorithms (TimSort, IntroSort)");
        System.out.println("  ✓ When stability is required");
        
        System.out.println("\n=== REAL-WORLD USAGE ===");
        System.out.println("Java's Arrays.sort() uses:");
        System.out.println("  • Insertion sort for small subarrays (< 47 elements)");
        System.out.println("  • Quick sort for larger primitives");
        System.out.println("  • Merge sort for objects (stability needed)");
        System.out.println("\nPython's Timsort uses:");
        System.out.println("  • Insertion sort for small runs (< 64 elements)");
        System.out.println("  • Merge sort for combining runs");
        
        System.out.println("\n=== WHY INSERTION SORT IS SPECIAL ===");
        System.out.println("✓ Simple and easy to implement");
        System.out.println("✓ Efficient for small data (< 20 elements)");
        System.out.println("✓ Adaptive: O(n) for nearly sorted data");
        System.out.println("✓ Stable: Preserves order of equal elements");
        System.out.println("✓ Online: Can sort data as it arrives");
        System.out.println("✓ In-place: O(1) extra space");
        System.out.println("✓ Industry standard for small subarrays in hybrid sorts");
    }
}
