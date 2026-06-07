package sorting.questions;

/*
 * 2. SELECTION SORT
 *
 * Problem Statement:
 * Implement selection sort algorithm to sort an array in ascending order.
 * Selection sort divides the array into sorted and unsorted portions,
 * repeatedly finding the minimum element from the unsorted portion
 * and placing it at the beginning of the sorted portion.
 *
 * Conceptual Understanding:
 * - Simple comparison-based sorting algorithm
 * - Divides array into sorted (left) and unsorted (right) portions
 * - Each pass finds minimum in unsorted portion and swaps with first unsorted
 * - Number of swaps is minimized compared to bubble sort
 * - Not stable - may change relative order of equal elements
 * - In-place sorting algorithm
 *
 * Time Complexity: O(n²) for all cases (best, average, worst)
 * Space Complexity: O(1) - in-place sorting
 * Stable: No - does not maintain relative order of equal elements
 */

class SelectionSort2 {

    // Method 1: Basic Selection Sort
    public void selectionSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            // Find the minimum element in unsorted array
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            // Swap the found minimum element with the first element
            if (minIndex != i) {
                swap(arr, i, minIndex);
            }
        }
    }

    // Method 2: Selection Sort with maximum selection (bidirectional)
    public void selectionSortBidirectional(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;
        int left = 0;
        int right = n - 1;

        while (left < right) {
            // Find minimum and maximum in current range
            int minIndex = left;
            int maxIndex = right;

            for (int i = left; i <= right; i++) {
                if (arr[i] < arr[minIndex]) {
                    minIndex = i;
                }
                if (arr[i] > arr[maxIndex]) {
                    maxIndex = i;
                }
            }

            // Swap minimum to left
            if (minIndex != left) {
                swap(arr, left, minIndex);
                // If max was at left, update its position
                if (maxIndex == left) {
                    maxIndex = minIndex;
                }
            }

            // Swap maximum to right
            if (maxIndex != right) {
                swap(arr, right, maxIndex);
            }

            left++;
            right--;
        }
    }

    // Method 3: Recursive Selection Sort
    public void selectionSortRecursive(int[] arr, int start, int n) {
        if (start >= n - 1) {
            return;
        }

        // Find minimum element in unsorted array
        int minIndex = start;
        for (int i = start + 1; i < n; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }

        // Swap with first element of unsorted array
        if (minIndex != start) {
            swap(arr, start, minIndex);
        }

        // Recur for next element
        selectionSortRecursive(arr, start + 1, n);
    }

    // Method 4: Selection Sort with pass tracking
    public void selectionSortWithPasses(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            if (minIndex != i) {
                swap(arr, i, minIndex);
            }

            System.out.println("Pass " + (i + 1) + ": " + java.util.Arrays.toString(arr));
        }
    }

    // Method 5: Sort in descending order
    public void selectionSortDescending(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            // Find the maximum element in unsorted array
            int maxIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] > arr[maxIndex]) {
                    maxIndex = j;
                }
            }

            // Swap the found maximum element with the first element
            if (maxIndex != i) {
                swap(arr, i, maxIndex);
            }
        }
    }

    // Method 6: Selection sort for custom objects
    public static <T> void selectionSortGeneric(T[] arr, java.util.Comparator<T> comparator) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (comparator.compare(arr[j], arr[minIndex]) < 0) {
                    minIndex = j;
                }
            }

            if (minIndex != i) {
                T temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }

    // Method 7: Find k-th smallest element using selection sort logic
    public int findKthSmallest(int[] arr, int k) {
        if (arr == null || k < 1 || k > arr.length) {
            throw new IllegalArgumentException("Invalid k value");
        }

        int n = arr.length;

        for (int i = 0; i < k; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            if (minIndex != i) {
                swap(arr, i, minIndex);
            }
        }

        return arr[k - 1];
    }

    // Method 8: Count comparisons and swaps
    public static class SortStats {
        int comparisons = 0;
        int swaps = 0;

        @Override
        public String toString() {
            return "Comparisons: " + comparisons + ", Swaps: " + swaps;
        }
    }

    public SortStats selectionSortWithStats(int[] arr) {
        SortStats stats = new SortStats();
        if (arr == null || arr.length <= 1) {
            return stats;
        }

        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                stats.comparisons++;
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            if (minIndex != i) {
                swap(arr, i, minIndex);
                stats.swaps++;
            }
        }

        return stats;
    }

    // Helper method to swap elements
    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // Test cases
    public static void main(String[] args) {
        SelectionSort2 sorter = new SelectionSort2();

        // Test Case 1: Basic sorting
        int[] arr1 = {64, 25, 12, 22, 11};
        System.out.println("Original: " + java.util.Arrays.toString(arr1));
        sorter.selectionSort(arr1.clone());
        System.out.println("Sorted: " + java.util.Arrays.toString(arr1));

        // Test Case 2: Bidirectional selection sort
        int[] arr2 = {64, 25, 12, 22, 11, 90, 45};
        System.out.println("\nBidirectional sort:");
        System.out.println("Original: " + java.util.Arrays.toString(arr2));
        sorter.selectionSortBidirectional(arr2.clone());
        System.out.println("Sorted: " + java.util.Arrays.toString(arr2));

        // Test Case 3: With pass tracking
        int[] arr3 = {64, 25, 12, 22, 11};
        System.out.println("\nWith pass tracking:");
        sorter.selectionSortWithPasses(arr3.clone());

        // Test Case 4: Descending order
        int[] arr4 = {64, 25, 12, 22, 11};
        sorter.selectionSortDescending(arr4.clone());
        System.out.println("\nDescending: " + java.util.Arrays.toString(arr4));

        // Test Case 5: Find k-th smallest
        int[] arr5 = {7, 10, 4, 3, 20, 15};
        int k = 3;
        int kthSmallest = sorter.findKthSmallest(arr5.clone(), k);
        System.out.println("\n" + k + "th smallest in " + java.util.Arrays.toString(arr5) + " is: " + kthSmallest);

        // Test Case 6: With statistics
        int[] arr6 = {64, 25, 12, 22, 11};
        SortStats stats = sorter.selectionSortWithStats(arr6.clone());
        System.out.println("\nStatistics: " + stats);
        System.out.println("Final array: " + java.util.Arrays.toString(arr6));

        // Test Case 7: Generic sorting with strings
        String[] strings = {"banana", "apple", "cherry", "date"};
        System.out.println("\nOriginal strings: " + java.util.Arrays.toString(strings));
        selectionSortGeneric(strings, String::compareTo);
        System.out.println("Sorted strings: " + java.util.Arrays.toString(strings));
    }
}