package heaps.questions;

/*
 * 2. HEAP SORT
 *
 * Problem Statement:
 * Implement heap sort algorithm to sort an array in ascending order.
 * Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure.
 *
 * Conceptual Understanding:
 * - Build a max-heap from the input array
 * - Repeatedly extract the maximum element and place it at the end
 * - Heapify the reduced heap after each extraction
 * - In-place sorting algorithm with O(n log n) time complexity
 * - Not stable - may change relative order of equal elements
 * - Space efficient - O(1) auxiliary space
 *
 * Time Complexity: O(n log n) for all cases
 * Space Complexity: O(1) auxiliary space (in-place)
 * Stable: No
 */

class HeapSort2 {

    // Method 1: Heap Sort - Ascending Order
    public void heapSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;

        // Build max heap
        buildMaxHeap(arr, n);

        // Extract elements one by one
        for (int i = n - 1; i > 0; i--) {
            // Move current root to end
            swap(arr, 0, i);

            // Heapify the reduced heap
            heapify(arr, 0, i);
        }
    }

    // Method 2: Heap Sort - Descending Order
    public void heapSortDescending(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;

        // Build min heap
        buildMinHeap(arr, n);

        // Extract elements one by one
        for (int i = n - 1; i > 0; i--) {
            // Move current root to end
            swap(arr, 0, i);

            // Heapify the reduced heap (min heapify)
            minHeapify(arr, 0, i);
        }
    }

    // Method 3: Build Max Heap
    private void buildMaxHeap(int[] arr, int n) {
        // Start from last non-leaf node and heapify all nodes
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, i, n);
        }
    }

    // Method 4: Build Min Heap
    private void buildMinHeap(int[] arr, int n) {
        for (int i = n / 2 - 1; i >= 0; i--) {
            minHeapify(arr, i, n);
        }
    }

    // Method 5: Max Heapify (for ascending sort)
    private void heapify(int[] arr, int i, int n) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        // Find largest among root, left child, right child
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        // If largest is not root, swap and continue heapifying
        if (largest != i) {
            swap(arr, i, largest);
            heapify(arr, largest, n);
        }
    }

    // Method 6: Min Heapify (for descending sort)
    private void minHeapify(int[] arr, int i, int n) {
        int smallest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        if (left < n && arr[left] < arr[smallest]) {
            smallest = left;
        }

        if (right < n && arr[right] < arr[smallest]) {
            smallest = right;
        }

        if (smallest != i) {
            swap(arr, i, smallest);
            minHeapify(arr, smallest, n);
        }
    }

    // Method 7: Iterative Heap Sort
    public void heapSortIterative(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;

        // Build max heap iteratively
        for (int i = n / 2 - 1; i >= 0; i--) {
            iterativeHeapify(arr, i, n);
        }

        // Extract elements
        for (int i = n - 1; i > 0; i--) {
            swap(arr, 0, i);
            iterativeHeapify(arr, 0, i);
        }
    }

    // Method 8: Iterative Heapify
    private void iterativeHeapify(int[] arr, int i, int n) {
        while (true) {
            int largest = i;
            int left = 2 * i + 1;
            int right = 2 * i + 2;

            if (left < n && arr[left] > arr[largest]) {
                largest = left;
            }

            if (right < n && arr[right] > arr[largest]) {
                largest = right;
            }

            if (largest == i) {
                break;
            }

            swap(arr, i, largest);
            i = largest;
        }
    }

    // Method 9: Heap Sort with custom comparator
    public static <T> void heapSortGeneric(T[] arr, java.util.Comparator<T> comparator) {
        if (arr == null || arr.length <= 1) {
            return;
        }

        int n = arr.length;

        // Build heap
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapifyGeneric(arr, i, n, comparator);
        }

        // Extract elements
        for (int i = n - 1; i > 0; i--) {
            swapGeneric(arr, 0, i);
            heapifyGeneric(arr, 0, i, comparator);
        }
    }

    private static <T> void heapifyGeneric(T[] arr, int i, int n, java.util.Comparator<T> comparator) {
        while (true) {
            int largest = i;
            int left = 2 * i + 1;
            int right = 2 * i + 2;

            if (left < n && comparator.compare(arr[left], arr[largest]) > 0) {
                largest = left;
            }

            if (right < n && comparator.compare(arr[right], arr[largest]) > 0) {
                largest = right;
            }

            if (largest == i) {
                break;
            }

            swapGeneric(arr, i, largest);
            i = largest;
        }
    }

    private static <T> void swapGeneric(T[] arr, int i, int j) {
        T temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // Method 10: Partial Heap Sort (Top K elements)
    public void partialHeapSort(int[] arr, int k) {
        if (arr == null || arr.length <= 1 || k <= 0) {
            return;
        }

        int n = Math.min(k, arr.length);

        // Build heap with first k elements
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, i, n);
        }

        // For remaining elements, if larger than root, replace and heapify
        for (int i = k; i < arr.length; i++) {
            if (arr[i] > arr[0]) {
                arr[0] = arr[i];
                heapify(arr, 0, k);
            }
        }

        // Sort the heap portion
        for (int i = k - 1; i > 0; i--) {
            swap(arr, 0, i);
            heapify(arr, 0, i);
        }
    }

    // Method 11: Count comparisons and swaps
    public static class SortStats {
        int comparisons = 0;
        int swaps = 0;

        @Override
        public String toString() {
            return "Comparisons: " + comparisons + ", Swaps: " + swaps;
        }
    }

    public SortStats heapSortWithStats(int[] arr) {
        SortStats stats = new SortStats();
        if (arr == null || arr.length <= 1) {
            return stats;
        }

        int n = arr.length;

        // Build heap with stats
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapifyWithStats(arr, i, n, stats);
        }

        // Extract elements with stats
        for (int i = n - 1; i > 0; i--) {
            swap(arr, 0, i);
            stats.swaps++;
            heapifyWithStats(arr, 0, i, stats);
        }

        return stats;
    }

    private void heapifyWithStats(int[] arr, int i, int n, SortStats stats) {
        while (true) {
            int largest = i;
            int left = 2 * i + 1;
            int right = 2 * i + 2;

            if (left < n) {
                stats.comparisons++;
                if (arr[left] > arr[largest]) {
                    largest = left;
                }
            }

            if (right < n) {
                stats.comparisons++;
                if (arr[right] > arr[largest]) {
                    largest = right;
                }
            }

            if (largest == i) {
                break;
            }

            swap(arr, i, largest);
            stats.swaps++;
            i = largest;
        }
    }

    // Helper method to swap elements
    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // Test cases
    public static void main(String[] args) {
        HeapSort2 sorter = new HeapSort2();

        // Test Case 1: Basic heap sort
        int[] arr1 = {12, 11, 13, 5, 6, 7, 15, 3, 9, 1};
        System.out.println("Original: " + java.util.Arrays.toString(arr1));
        sorter.heapSort(arr1.clone());
        System.out.println("Heap sorted: " + java.util.Arrays.toString(arr1));

        // Test Case 2: Descending sort
        int[] arr2 = {12, 11, 13, 5, 6, 7};
        sorter.heapSortDescending(arr2.clone());
        System.out.println("Descending: " + java.util.Arrays.toString(arr2));

        // Test Case 3: Iterative heap sort
        int[] arr3 = {4, 10, 3, 5, 1, 2};
        sorter.heapSortIterative(arr3.clone());
        System.out.println("Iterative sort: " + java.util.Arrays.toString(arr3));

        // Test Case 4: Generic heap sort
        String[] strings = {"banana", "apple", "cherry", "date", "elderberry"};
        System.out.println("Original strings: " + java.util.Arrays.toString(strings));
        heapSortGeneric(strings, String::compareTo);
        System.out.println("Sorted strings: " + java.util.Arrays.toString(strings));

        // Test Case 5: Partial heap sort (top 3)
        int[] arr4 = {12, 11, 13, 5, 6, 7, 15, 3, 9, 1};
        sorter.partialHeapSort(arr4.clone(), 3);
        System.out.println("Top 3 sorted: " + java.util.Arrays.toString(java.util.Arrays.copyOf(arr4, 3)));

        // Test Case 6: With statistics
        int[] arr5 = {12, 11, 13, 5, 6, 7};
        SortStats stats = sorter.heapSortWithStats(arr5.clone());
        System.out.println("Statistics: " + stats);
        System.out.println("Final array: " + java.util.Arrays.toString(arr5));

        // Test Case 7: Edge cases
        int[] empty = {};
        sorter.heapSort(empty);
        System.out.println("Empty array: " + java.util.Arrays.toString(empty));

        int[] single = {42};
        sorter.heapSort(single);
        System.out.println("Single element: " + java.util.Arrays.toString(single));

        int[] duplicates = {3, 3, 3, 3};
        sorter.heapSort(duplicates);
        System.out.println("Duplicates: " + java.util.Arrays.toString(duplicates));

        int[] sorted = {1, 2, 3, 4, 5};
        sorter.heapSort(sorted);
        System.out.println("Already sorted: " + java.util.Arrays.toString(sorted));

        int[] reverse = {5, 4, 3, 2, 1};
        sorter.heapSort(reverse);
        System.out.println("Reverse sorted: " + java.util.Arrays.toString(reverse));
    }
}