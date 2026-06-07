package sorting.questions;

/*
 * 1. BUBBLE SORT
 *
 * Problem Statement:
 * Implement bubble sort algorithm to sort an array in ascending order.
 * Bubble sort repeatedly steps through the list, compares adjacent elements
 * and swaps them if they are in the wrong order.
 *
 * Conceptual Understanding:
 * - Simple comparison-based sorting algorithm
 * - Each pass moves the largest element to the end
 * - Multiple passes needed to fully sort the array
 * - Can be optimized by stopping early if no swaps occur
 * - Named "bubble" because smaller elements "bubble" to the top
 *
 * Time Complexity: O(n²) worst/average, O(n) best (already sorted)
 * Space Complexity: O(1) - in-place sorting
 * Stable: Yes - maintains relative order of equal elements
 */

class BubbleSort1 {

    // Method 1: Basic Bubble Sort
    public void bubbleSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    swap(arr, j, j + 1);
                }
            }
        }
    }

    // Method 2: Optimized Bubble Sort (stops if no swaps)
    public void bubbleSortOptimized(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;
        boolean swapped;

        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    swapped = true;
                }
            }

            // If no swaps occurred, array is already sorted
            if (!swapped) {
                break;
            }
        }
    }

    // Method 3: Recursive Bubble Sort
    public void bubbleSortRecursive(int[] arr, int n) {
        if (n == 1) {
            return;
        }

        // One pass of bubble sort
        for (int i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }

        // Recur for all elements except last
        bubbleSortRecursive(arr, n - 1);
    }

    // Method 4: Bubble Sort with pass tracking
    public void bubbleSortWithPasses(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;
        int passCount = 0;
        int swapCount = 0;

        for (int i = 0; i < n - 1; i++) {
            passCount++;
            boolean swapped = false;

            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    swapped = true;
                    swapCount++;
                }
            }

            System.out.println("Pass " + passCount + ": " + java.util.Arrays.toString(arr));

            if (!swapped) {
                System.out.println("Array sorted after " + passCount + " passes with " + swapCount + " swaps");
                break;
            }
        }
    }

    // Method 5: Sort in descending order
    public void bubbleSortDescending(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] < arr[j + 1]) { // Change comparison for descending
                    swap(arr, j, j + 1);
                }
            }
        }
    }

    // Method 6: Bubble sort for custom objects (using Comparator)
    public static <T> void bubbleSortGeneric(T[] arr, java.util.Comparator<T> comparator) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (comparator.compare(arr[j], arr[j + 1]) > 0) {
                    T temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    // Method 7: Count total comparisons and swaps
    public static class SortStats {
        int comparisons = 0;
        int swaps = 0;

        @Override
        public String toString() {
            return "Comparisons: " + comparisons + ", Swaps: " + swaps;
        }
    }

    public SortStats bubbleSortWithStats(int[] arr) {
        SortStats stats = new SortStats();
        if (arr == null || arr.length <= 1) {
            return stats;
        }

        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                stats.comparisons++;
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    stats.swaps++;
                }
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
        BubbleSort1 sorter = new BubbleSort1();

        // Test Case 1: Basic sorting
        int[] arr1 = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Original: " + java.util.Arrays.toString(arr1));
        sorter.bubbleSort(arr1.clone());
        System.out.println("Sorted: " + java.util.Arrays.toString(arr1));

        // Test Case 2: Optimized version
        int[] arr2 = {1, 2, 3, 4, 5}; // Already sorted
        System.out.println("\nAlready sorted array:");
        sorter.bubbleSortOptimized(arr2.clone());
        System.out.println("Sorted: " + java.util.Arrays.toString(arr2));

        // Test Case 3: With pass tracking
        int[] arr3 = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("\nWith pass tracking:");
        sorter.bubbleSortWithPasses(arr3.clone());

        // Test Case 4: Descending order
        int[] arr4 = {64, 34, 25, 12, 22, 11, 90};
        sorter.bubbleSortDescending(arr4.clone());
        System.out.println("\nDescending: " + java.util.Arrays.toString(arr4));

        // Test Case 5: With statistics
        int[] arr5 = {64, 34, 25, 12, 22, 11, 90};
        SortStats stats = sorter.bubbleSortWithStats(arr5.clone());
        System.out.println("\nStatistics: " + stats);
        System.out.println("Final array: " + java.util.Arrays.toString(arr5));

        // Test Case 6: Generic sorting with strings
        String[] strings = {"banana", "apple", "cherry", "date"};
        System.out.println("\nOriginal strings: " + java.util.Arrays.toString(strings));
        bubbleSortGeneric(strings, String::compareTo);
        System.out.println("Sorted strings: " + java.util.Arrays.toString(strings));
    }
}