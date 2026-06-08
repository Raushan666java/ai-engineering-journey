package sorting.questions;

/*
 * 3. INSERTION SORT
 *
 * Problem Statement:
 * Implement insertion sort algorithm to sort an array in ascending order.
 * Insertion sort builds the final sorted array one item at a time by
 * taking each element and inserting it into its correct position
 * in the already sorted portion of the array.
 *
 * Conceptual Understanding:
 * - Simple comparison-based sorting algorithm
 * - Maintains a sorted subarray and inserts remaining elements one by one
 * - Similar to sorting playing cards in your hand
 * - Efficient for small arrays and nearly sorted arrays
 * - Stable sort - maintains relative order of equal elements
 * - In-place sorting algorithm
 *
 * Time Complexity: O(n²) worst/average, O(n) best (already sorted)
 * Space Complexity: O(1) - in-place sorting
 * Stable: Yes - maintains relative order of equal elements
 */

class InsertionSort3 {

    // Method 1: Basic Insertion Sort
    public void insertionSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            // Move elements of arr[0..i-1] that are greater than key
            // to one position ahead of their current position
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }
    }

    // Method 2: Insertion Sort with Binary Search
    public void insertionSortBinary(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int key = arr[i];

            // Find the position where key should be inserted
            int pos = binarySearch(arr, 0, i - 1, key);

            // Shift elements to make space for key
            for (int j = i; j > pos; j--) {
                arr[j] = arr[j - 1];
            }

            arr[pos] = key;
        }
    }

    // Binary search helper for finding insertion position
    private int binarySearch(int[] arr, int left, int right, int key) {
        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == key) {
                return mid; // Insert after equal elements to maintain stability
            } else if (arr[mid] < key) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left; // Position where key should be inserted
    }

    // Method 3: Recursive Insertion Sort
    public void insertionSortRecursive(int[] arr, int n) {
        if (n <= 1) {
            return;
        }

        // Sort first n-1 elements
        insertionSortRecursive(arr, n - 1);

        // Insert last element at its correct position in sorted array
        int last = arr[n - 1];
        int j = n - 2;

        // Move elements of arr[0..n-2] that are greater than last
        while (j >= 0 && arr[j] > last) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = last;
    }

    // Method 4: Insertion Sort with pass tracking
    public void insertionSortWithPasses(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;

            System.out.println("Pass " + i + ": " + java.util.Arrays.toString(arr));
        }
    }

    // Method 5: Sort in descending order
    public void insertionSortDescending(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            // Change comparison for descending order
            while (j >= 0 && arr[j] < key) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }
    }

    // Method 6: Insertion sort for custom objects
    public static <T> void insertionSortGeneric(T[] arr, java.util.Comparator<T> comparator) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;

        for (int i = 1; i < n; i++) {
            T key = arr[i];
            int j = i - 1;

            while (j >= 0 && comparator.compare(arr[j], key) > 0) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }
    }

    // Method 7: Shell Sort (generalized insertion sort)
    public void shellSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;

        // Start with a big gap, then reduce the gap
        for (int gap = n / 2; gap > 0; gap /= 2) {
            // Do a gapped insertion sort for this gap size
            for (int i = gap; i < n; i++) {
                int temp = arr[i];
                int j = i;

                while (j >= gap && arr[j - gap] > temp) {
                    arr[j] = arr[j - gap];
                    j -= gap;
                }

                arr[j] = temp;
            }
        }
    }

    // Method 8: Count comparisons and shifts
    public static class SortStats {
        int comparisons = 0;
        int shifts = 0;

        @Override
        public String toString() {
            return "Comparisons: " + comparisons + ", Shifts: " + shifts;
        }
    }

    public SortStats insertionSortWithStats(int[] arr) {
        SortStats stats = new SortStats();
        if (arr == null || arr.length <= 1) {
            return stats;
        }

        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            while (j >= 0) {
                stats.comparisons++;
                if (arr[j] <= key) {
                    break;
                }
                arr[j + 1] = arr[j];
                stats.shifts++;
                j--;
            }

            arr[j + 1] = key;
            if (j + 1 != i) {
                stats.shifts++; // Count the final placement
            }
        }

        return stats;
    }

    // Test cases
    public static void main(String[] args) {
        InsertionSort3 sorter = new InsertionSort3();

        // Test Case 1: Basic sorting
        int[] arr1 = {12, 11, 13, 5, 6};
        System.out.println("Original: " + java.util.Arrays.toString(arr1));
        sorter.insertionSort(arr1.clone());
        System.out.println("Sorted: " + java.util.Arrays.toString(arr1));

        // Test Case 2: Binary search insertion sort
        int[] arr2 = {12, 11, 13, 5, 6};
        System.out.println("\nBinary insertion sort:");
        System.out.println("Original: " + java.util.Arrays.toString(arr2));
        sorter.insertionSortBinary(arr2.clone());
        System.out.println("Sorted: " + java.util.Arrays.toString(arr2));

        // Test Case 3: With pass tracking
        int[] arr3 = {12, 11, 13, 5, 6};
        System.out.println("\nWith pass tracking:");
        sorter.insertionSortWithPasses(arr3.clone());

        // Test Case 4: Descending order
        int[] arr4 = {12, 11, 13, 5, 6};
        sorter.insertionSortDescending(arr4.clone());
        System.out.println("\nDescending: " + java.util.Arrays.toString(arr4));

        // Test Case 5: Shell sort
        int[] arr5 = {12, 34, 54, 2, 3};
        System.out.println("\nShell sort:");
        System.out.println("Original: " + java.util.Arrays.toString(arr5));
        sorter.shellSort(arr5.clone());
        System.out.println("Sorted: " + java.util.Arrays.toString(arr5));

        // Test Case 6: With statistics
        int[] arr6 = {12, 11, 13, 5, 6};
        SortStats stats = sorter.insertionSortWithStats(arr6.clone());
        System.out.println("\nStatistics: " + stats);
        System.out.println("Final array: " + java.util.Arrays.toString(arr6));

        // Test Case 7: Generic sorting with strings
        String[] strings = {"banana", "apple", "cherry", "date"};
        System.out.println("\nOriginal strings: " + java.util.Arrays.toString(strings));
        insertionSortGeneric(strings, String::compareTo);
        System.out.println("Sorted strings: " + java.util.Arrays.toString(strings));

        // Test Case 8: Nearly sorted array (best case for insertion sort)
        int[] nearlySorted = {1, 2, 4, 5, 3};
        System.out.println("\nNearly sorted: " + java.util.Arrays.toString(nearlySorted));
        sorter.insertionSort(nearlySorted.clone());
        System.out.println("Sorted: " + java.util.Arrays.toString(nearlySorted));
    }
}