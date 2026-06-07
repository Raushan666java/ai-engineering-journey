public class SelectionSort {
    
    // Selection Sort implementation
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        System.out.println("Starting Selection Sort...");
        
        for (int i = 0; i < n - 1; i++) {
            // Find minimum element in unsorted portion
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            
            // Swap minimum with first unsorted element
            if (minIdx != i) {
                int temp = arr[minIdx];
                arr[minIdx] = arr[i];
                arr[i] = temp;
            }
            
            // Show progress (optional)
            // System.out.println("After pass " + (i+1) + ": " + Arrays.toString(arr));
        }
    }
    
    // Selection sort with detailed steps
    public static void selectionSortVerbose(int[] arr) {
        int n = arr.length;
        int swaps = 0;
        int comparisons = 0;
        
        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            
            for (int j = i + 1; j < n; j++) {
                comparisons++;
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            
            if (minIdx != i) {
                int temp = arr[minIdx];
                arr[minIdx] = arr[i];
                arr[i] = temp;
                swaps++;
            }
        }
        
        System.out.println("Total comparisons: " + comparisons);
        System.out.println("Total swaps: " + swaps);
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
        System.out.println("=== SELECTION SORT DEMONSTRATION ===\n");
        
        // Test Case 1: Random array
        int[] arr1 = {64, 25, 12, 22, 11};
        System.out.println("Test 1 - Random Array:");
        System.out.print("Before: ");
        printArray(arr1);
        selectionSort(arr1);
        System.out.print("After:  ");
        printArray(arr1);
        System.out.println();
        
        // Test Case 2: Already sorted
        int[] arr2 = {1, 2, 3, 4, 5};
        System.out.println("Test 2 - Already Sorted:");
        System.out.print("Before: ");
        printArray(arr2);
        selectionSort(arr2);
        System.out.print("After:  ");
        printArray(arr2);
        System.out.println();
        
        // Test Case 3: Reverse sorted
        int[] arr3 = {5, 4, 3, 2, 1};
        System.out.println("Test 3 - Reverse Sorted:");
        System.out.print("Before: ");
        printArray(arr3);
        selectionSort(arr3);
        System.out.print("After:  ");
        printArray(arr3);
        System.out.println();
        
        // Test Case 4: Array with duplicates
        int[] arr4 = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3};
        System.out.println("Test 4 - Array with Duplicates:");
        System.out.print("Before: ");
        printArray(arr4);
        selectionSort(arr4);
        System.out.print("After:  ");
        printArray(arr4);
        System.out.println();
        
        // Test Case 5: Negative numbers
        int[] arr5 = {-5, 3, -1, 0, 7, -3};
        System.out.println("Test 5 - Negative Numbers:");
        System.out.print("Before: ");
        printArray(arr5);
        selectionSort(arr5);
        System.out.print("After:  ");
        printArray(arr5);
        System.out.println();
        
        // Detailed analysis
        System.out.println("\n=== DETAILED ANALYSIS ===");
        int[] arr6 = {29, 10, 14, 37, 13};
        System.out.print("Array: ");
        printArray(arr6);
        selectionSortVerbose(arr6);
        System.out.print("Sorted: ");
        printArray(arr6);
        
        System.out.println("\n=== KEY INSIGHTS ===");
        System.out.println("Time Complexity:");
        System.out.println("  Best:    O(n²)  - Always scans entire unsorted portion");
        System.out.println("  Average: O(n²)  - Same as worst case");
        System.out.println("  Worst:   O(n²)  - Reverse sorted");
        System.out.println("Space Complexity: O(1) - In-place sorting");
        System.out.println("Stability: NO - May change relative order of equal elements");
        System.out.println("\nComparisons vs Swaps:");
        System.out.println("  Comparisons: Always (n-1) * n / 2 = O(n²)");
        System.out.println("  Swaps: At most n-1 (much better than Bubble Sort)");
        System.out.println("\nUse Cases:");
        System.out.println("  ✓ Small datasets");
        System.out.println("  ✓ When memory write is expensive (fewer swaps)");
        System.out.println("  ✓ When auxiliary memory is limited");
        System.out.println("  ✗ NOT stable (use Insertion sort for stability)");
        
        System.out.println("\n=== WHY SELECTION SORT? ===");
        System.out.println("Advantages over Bubble Sort:");
        System.out.println("  • Fewer swaps: O(n) vs O(n²)");
        System.out.println("  • Good when write operations are expensive");
        System.out.println("  • Simple to implement");
        System.out.println("\nDisadvantages:");
        System.out.println("  • Not stable (changes order of equal elements)");
        System.out.println("  • Always O(n²) (no optimization for sorted data)");
        System.out.println("  • Not adaptive (doesn't benefit from partial sorting)");
    }
}
