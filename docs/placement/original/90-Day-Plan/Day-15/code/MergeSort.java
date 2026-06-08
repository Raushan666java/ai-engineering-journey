public class MergeSort {
    
    // Main merge sort function
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            // Find middle point
            int mid = left + (right - left) / 2;
            
            // Sort first and second halves recursively
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            
            // Merge the sorted halves
            merge(arr, left, mid, right);
        }
    }
    
    // Merge two sorted subarrays
    public static void merge(int[] arr, int left, int mid, int right) {
        // Find sizes of two subarrays
        int n1 = mid - left + 1;
        int n2 = right - mid;
        
        // Create temp arrays
        int[] L = new int[n1];
        int[] R = new int[n2];
        
        // Copy data to temp arrays
        for (int i = 0; i < n1; i++) {
            L[i] = arr[left + i];
        }
        for (int j = 0; j < n2; j++) {
            R[j] = arr[mid + 1 + j];
        }
        
        // Merge temp arrays back into arr[left..right]
        int i = 0, j = 0;
        int k = left;
        
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        
        // Copy remaining elements of L[] if any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        
        // Copy remaining elements of R[] if any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
    
    // Merge sort with verbose output
    public static void mergeSortVerbose(int[] arr, int left, int right, int depth) {
        if (left < right) {
            String indent = "  ".repeat(depth);
            int mid = left + (right - left) / 2;
            
            System.out.println(indent + "Dividing: [" + left + ".." + right + "]");
            printSubarray(arr, left, right);
            
            mergeSortVerbose(arr, left, mid, depth + 1);
            mergeSortVerbose(arr, mid + 1, right, depth + 1);
            
            System.out.println(indent + "Merging: [" + left + ".." + mid + "] and [" + (mid+1) + ".." + right + "]");
            merge(arr, left, mid, right);
            System.out.print(indent + "Result: ");
            printSubarray(arr, left, right);
        }
    }
    
    // Print subarray
    public static void printSubarray(int[] arr, int left, int right) {
        System.out.print("[");
        for (int i = left; i <= right; i++) {
            System.out.print(arr[i]);
            if (i < right) System.out.print(", ");
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
    
    // Count inversions while sorting (bonus)
    public static int mergeSortCountInversions(int[] arr, int left, int right) {
        int count = 0;
        if (left < right) {
            int mid = left + (right - left) / 2;
            count += mergeSortCountInversions(arr, left, mid);
            count += mergeSortCountInversions(arr, mid + 1, right);
            count += mergeAndCount(arr, left, mid, right);
        }
        return count;
    }
    
    // Merge and count inversions
    private static int mergeAndCount(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        
        int[] L = new int[n1];
        int[] R = new int[n2];
        
        for (int i = 0; i < n1; i++) L[i] = arr[left + i];
        for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];
        
        int i = 0, j = 0, k = left, inversions = 0;
        
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
                inversions += (n1 - i); // All remaining elements in L are inversions
            }
        }
        
        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
        
        return inversions;
    }
    
    // Main method with test cases
    public static void main(String[] args) {
        System.out.println("=== MERGE SORT DEMONSTRATION ===\n");
        
        // Test Case 1: Random array
        int[] arr1 = {38, 27, 43, 3, 9, 82, 10};
        System.out.println("Test 1 - Random Array:");
        System.out.print("Before: ");
        printArray(arr1);
        mergeSort(arr1, 0, arr1.length - 1);
        System.out.print("After:  ");
        printArray(arr1);
        System.out.println();
        
        // Test Case 2: Already sorted
        int[] arr2 = {1, 2, 3, 4, 5};
        System.out.println("Test 2 - Already Sorted:");
        System.out.print("Before: ");
        printArray(arr2);
        mergeSort(arr2, 0, arr2.length - 1);
        System.out.print("After:  ");
        printArray(arr2);
        System.out.println();
        
        // Test Case 3: Reverse sorted
        int[] arr3 = {5, 4, 3, 2, 1};
        System.out.println("Test 3 - Reverse Sorted:");
        System.out.print("Before: ");
        printArray(arr3);
        mergeSort(arr3, 0, arr3.length - 1);
        System.out.print("After:  ");
        printArray(arr3);
        System.out.println();
        
        // Test Case 4: Verbose execution (small array)
        int[] arr4 = {12, 11, 13, 5, 6, 7};
        System.out.println("Test 4 - Verbose Execution (Trace Recursion):");
        System.out.print("Before: ");
        printArray(arr4);
        System.out.println("\nDivide and Conquer Process:");
        mergeSortVerbose(arr4, 0, arr4.length - 1, 0);
        System.out.print("\nAfter:  ");
        printArray(arr4);
        System.out.println();
        
        // Test Case 5: Count inversions
        int[] arr5 = {8, 4, 2, 1};
        System.out.println("Test 5 - Count Inversions:");
        System.out.print("Array: ");
        printArray(arr5);
        int inversions = mergeSortCountInversions(arr5, 0, arr5.length - 1);
        System.out.println("Number of inversions: " + inversions);
        System.out.print("Sorted: ");
        printArray(arr5);
        System.out.println();
        
        // Test Case 6: Large array performance
        System.out.println("Test 6 - Large Array Performance:");
        int[] large = new int[100000];
        for (int i = 0; i < 100000; i++) {
            large[i] = (int)(Math.random() * 100000);
        }
        
        long start = System.nanoTime();
        mergeSort(large, 0, large.length - 1);
        long end = System.nanoTime();
        
        System.out.println("Array size: 100,000 elements");
        System.out.println("Time taken: " + (end - start) / 1000000.0 + " ms");
        System.out.println("Verified sorted: " + isSorted(large));
        
        System.out.println("\n=== KEY INSIGHTS ===");
        System.out.println("Time Complexity:");
        System.out.println("  Best:    O(n log n) - Always divides and merges");
        System.out.println("  Average: O(n log n) - Guaranteed performance");
        System.out.println("  Worst:   O(n log n) - Even for reverse sorted");
        System.out.println("Space Complexity: O(n) - Requires auxiliary arrays");
        System.out.println("Stability: YES - Maintains relative order of equal elements");
        
        System.out.println("\n=== HOW MERGE SORT WORKS ===");
        System.out.println("Divide and Conquer Strategy:");
        System.out.println("  1. DIVIDE: Split array into two halves");
        System.out.println("  2. CONQUER: Recursively sort each half");
        System.out.println("  3. COMBINE: Merge two sorted halves");
        System.out.println("\nRecursion Tree (for n=8):");
        System.out.println("  Height: log₂(n) = 3 levels");
        System.out.println("  Work per level: O(n)");
        System.out.println("  Total: O(n) × log(n) = O(n log n)");
        
        System.out.println("\n=== USE CASES ===");
        System.out.println("When to use Merge Sort:");
        System.out.println("  ✓ Need guaranteed O(n log n) performance");
        System.out.println("  ✓ Stability required (preserves order of equal elements)");
        System.out.println("  ✓ Sorting linked lists (better than quick sort)");
        System.out.println("  ✓ External sorting (large files that don't fit in memory)");
        System.out.println("  ✓ When worst-case O(n log n) is critical");
        System.out.println("\nWhen NOT to use:");
        System.out.println("  ✗ Space is limited (needs O(n) extra space)");
        System.out.println("  ✗ For small arrays (insertion sort faster)");
        System.out.println("  ✗ When in-place sorting required (use quick sort)");
        
        System.out.println("\n=== MERGE SORT VS QUICK SORT ===");
        System.out.println("Merge Sort:");
        System.out.println("  • Always O(n log n) - predictable");
        System.out.println("  • Stable - preserves order");
        System.out.println("  • Needs O(n) space");
        System.out.println("  • Better for linked lists");
        System.out.println("\nQuick Sort:");
        System.out.println("  • Average O(n log n), Worst O(n²)");
        System.out.println("  • Unstable - may reorder equal elements");
        System.out.println("  • In-place - O(log n) space");
        System.out.println("  • Better cache performance");
        System.out.println("  • Faster in practice for arrays");
        
        System.out.println("\n=== ADVANCED APPLICATIONS ===");
        System.out.println("1. Count Inversions: Modified merge sort");
        System.out.println("2. External Sorting: K-way merge for large files");
        System.out.println("3. Parallel Sorting: Each half can be sorted in parallel");
        System.out.println("4. TimSort (Python): Uses merge sort for combining runs");
    }
    
    // Utility to check if array is sorted
    private static boolean isSorted(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) return false;
        }
        return true;
    }
}
