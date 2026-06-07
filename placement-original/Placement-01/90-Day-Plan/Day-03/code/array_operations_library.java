/**
 * Day 3: Loops & Arrays - Complete Guide
 * File: array_operations_library.java
 * Purpose: Build a comprehensive array utility library
 *
 * Features:
 * - Search functions (linear, binary)
 * - Sort functions (bubble, selection, insertion)
 * - Utility functions (reverse, rotate, shuffle)
 * - Statistical functions (min, max, average, median, mode)
 * - Array manipulation (merge, split, copy)
 * - Matrix operations (transpose, multiply)
 */

public class array_operations_library {

    public static void main(String[] args) {
        System.out.println("=== ARRAY OPERATIONS LIBRARY - DAY 3 ===\n");

        // Test data
        int[] numbers = {64, 34, 25, 12, 22, 11, 90, 5, 77, 30};
        int[] sortedNumbers = {5, 11, 12, 22, 25, 30, 34, 64, 77, 90};

        System.out.println("Original test array:");
        ArrayUtils.printArray(numbers);
        System.out.println();

        // 1. SEARCHING OPERATIONS
        demonstrateSearching(numbers, sortedNumbers);

        // 2. SORTING OPERATIONS
        demonstrateSorting(numbers.clone());

        // 3. ARRAY MANIPULATION
        demonstrateManipulation(numbers.clone());

        // 4. STATISTICAL OPERATIONS
        demonstrateStatistics(numbers);

        // 5. MATRIX OPERATIONS
        demonstrateMatrixOperations();

        // 6. ADVANCED UTILITIES
        demonstrateAdvancedUtilities();
    }

    /**
     * Demonstrate searching operations
     */
    public static void demonstrateSearching(int[] arr, int[] sortedArr) {
        System.out.println("1. SEARCHING OPERATIONS");
        System.out.println("=======================");

        int target = 25;
        System.out.println("Searching for " + target + " in array:");

        // Linear Search
        int linearIndex = ArraySearch.linearSearch(arr, target);
        System.out.println("Linear Search Result:");
        System.out.println("  Index: " + linearIndex);
        System.out.println("  Found: " + (linearIndex != -1));

        // Binary Search (requires sorted array)
        int binaryIndex = ArraySearch.binarySearch(sortedArr, target);
        System.out.println("Binary Search Result (sorted array):");
        System.out.println("  Index: " + binaryIndex);
        System.out.println("  Found: " + (binaryIndex != -1));

        // Find all occurrences
        int[] occurrences = ArraySearch.findAllOccurrences(arr, 11);
        System.out.println("All occurrences of 11:");
        ArrayUtils.printArray(occurrences);

        // Find first and last occurrence
        int[] firstLast = ArraySearch.findFirstAndLast(arr, 11);
        System.out.println("First and last occurrence of 11: [" + firstLast[0] + ", " + firstLast[1] + "]");

        System.out.println();
    }

    /**
     * Demonstrate sorting operations
     */
    public static void demonstrateSorting(int[] arr) {
        System.out.println("2. SORTING OPERATIONS");
        System.out.println("=====================");

        System.out.println("Original array:");
        ArrayUtils.printArray(arr);

        // Bubble Sort
        int[] bubbleSorted = ArraySort.bubbleSort(arr.clone());
        System.out.println("Bubble Sort:");
        ArrayUtils.printArray(bubbleSorted);
        System.out.println("  Comparisons: " + ArraySort.getBubbleSortComparisons());

        // Selection Sort
        int[] selectionSorted = ArraySort.selectionSort(arr.clone());
        System.out.println("Selection Sort:");
        ArrayUtils.printArray(selectionSorted);
        System.out.println("  Comparisons: " + ArraySort.getSelectionSortComparisons());

        // Insertion Sort
        int[] insertionSorted = ArraySort.insertionSort(arr.clone());
        System.out.println("Insertion Sort:");
        ArrayUtils.printArray(insertionSorted);
        System.out.println("  Comparisons: " + ArraySort.getInsertionSortComparisons());

        System.out.println();
    }

    /**
     * Demonstrate array manipulation
     */
    public static void demonstrateManipulation(int[] arr) {
        System.out.println("3. ARRAY MANIPULATION");
        System.out.println("=====================");

        System.out.println("Original array:");
        ArrayUtils.printArray(arr);

        // Reverse
        int[] reversed = ArrayManipulate.reverse(arr.clone());
        System.out.println("Reversed:");
        ArrayUtils.printArray(reversed);

        // Rotate left
        int[] leftRotated = ArrayManipulate.rotateLeft(arr.clone(), 3);
        System.out.println("Rotated left by 3:");
        ArrayUtils.printArray(leftRotated);

        // Rotate right
        int[] rightRotated = ArrayManipulate.rotateRight(arr.clone(), 2);
        System.out.println("Rotated right by 2:");
        ArrayUtils.printArray(rightRotated);

        // Remove duplicates
        int[] noDuplicates = ArrayManipulate.removeDuplicates(arr.clone());
        System.out.println("Without duplicates:");
        ArrayUtils.printArray(noDuplicates);

        // Shuffle
        int[] shuffled = ArrayManipulate.shuffle(arr.clone());
        System.out.println("Shuffled:");
        ArrayUtils.printArray(shuffled);

        System.out.println();
    }

    /**
     * Demonstrate statistical operations
     */
    public static void demonstrateStatistics(int[] arr) {
        System.out.println("4. STATISTICAL OPERATIONS");
        System.out.println("=========================");

        System.out.println("Array for statistics:");
        ArrayUtils.printArray(arr);

        System.out.println("Basic Statistics:");
        System.out.println("  Count: " + ArrayStats.count(arr));
        System.out.println("  Sum: " + ArrayStats.sum(arr));
        System.out.println("  Minimum: " + ArrayStats.min(arr));
        System.out.println("  Maximum: " + ArrayStats.max(arr));
        System.out.println("  Range: " + ArrayStats.range(arr));
        System.out.println("  Mean: " + String.format("%.2f", ArrayStats.mean(arr)));
        System.out.println("  Median: " + ArrayStats.median(arr.clone()));
        System.out.println("  Mode: " + ArrayStats.mode(arr));
        System.out.println("  Variance: " + String.format("%.2f", ArrayStats.variance(arr)));
        System.out.println("  Standard Deviation: " + String.format("%.2f", ArrayStats.standardDeviation(arr)));

        System.out.println();
    }

    /**
     * Demonstrate matrix operations
     */
    public static void demonstrateMatrixOperations() {
        System.out.println("5. MATRIX OPERATIONS");
        System.out.println("====================");

        int[][] matrixA = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        int[][] matrixB = {
            {9, 8, 7},
            {6, 5, 4},
            {3, 2, 1}
        };

        System.out.println("Matrix A:");
        MatrixUtils.printMatrix(matrixA);

        System.out.println("Matrix B:");
        MatrixUtils.printMatrix(matrixB);

        // Transpose
        int[][] transposeA = MatrixUtils.transpose(matrixA);
        System.out.println("Transpose of Matrix A:");
        MatrixUtils.printMatrix(transposeA);

        // Matrix addition
        int[][] sum = MatrixUtils.add(matrixA, matrixB);
        System.out.println("Matrix A + Matrix B:");
        MatrixUtils.printMatrix(sum);

        // Scalar multiplication
        int[][] scaled = MatrixUtils.scalarMultiply(matrixA, 2);
        System.out.println("Matrix A × 2:");
        MatrixUtils.printMatrix(scaled);

        // Check if square matrix
        System.out.println("Matrix A is square: " + MatrixUtils.isSquare(matrixA));

        // Matrix trace (sum of diagonal elements)
        System.out.println("Trace of Matrix A: " + MatrixUtils.trace(matrixA));

        System.out.println();
    }

    /**
     * Demonstrate advanced utilities
     */
    public static void demonstrateAdvancedUtilities() {
        System.out.println("6. ADVANCED UTILITIES");
        System.out.println("=====================");

        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {6, 7, 8, 9, 10};

        System.out.println("Array 1:");
        ArrayUtils.printArray(arr1);
        System.out.println("Array 2:");
        ArrayUtils.printArray(arr2);

        // Merge arrays
        int[] merged = ArrayUtils.merge(arr1, arr2);
        System.out.println("Merged array:");
        ArrayUtils.printArray(merged);

        // Split array
        int[][] split = ArrayUtils.split(arr1, 3);
        System.out.println("Split array at index 3:");
        System.out.println("  First part:");
        ArrayUtils.printArray(split[0]);
        System.out.println("  Second part:");
        ArrayUtils.printArray(split[1]);

        // Array comparison
        int[] arr3 = {1, 2, 3, 4, 5};
        int[] arr4 = {1, 2, 3, 4, 6};
        System.out.println("Array 1 equals Array 3: " + ArrayUtils.equals(arr1, arr3));
        System.out.println("Array 1 equals Array 4: " + ArrayUtils.equals(arr1, arr4));

        // Find intersection
        int[] intersect = ArrayUtils.intersection(new int[]{1, 2, 3, 4, 5}, new int[]{3, 4, 5, 6, 7});
        System.out.println("Intersection of [1,2,3,4,5] and [3,4,5,6,7]:");
        ArrayUtils.printArray(intersect);

        // Find union
        int[] union = ArrayUtils.union(new int[]{1, 2, 3, 4, 5}, new int[]{3, 4, 5, 6, 7});
        System.out.println("Union of [1,2,3,4,5] and [3,4,5,6,7]:");
        ArrayUtils.printArray(union);

        System.out.println();
    }
}

// ===== SEARCH UTILITIES =====

class ArraySearch {

    /**
     * Linear search - O(n) time complexity
     */
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Binary search - O(log n) time complexity (requires sorted array)
     */
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    /**
     * Find all occurrences of target
     */
    public static int[] findAllOccurrences(int[] arr, int target) {
        int count = 0;
        for (int num : arr) {
            if (num == target) count++;
        }

        if (count == 0) return new int[0];

        int[] occurrences = new int[count];
        int index = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                occurrences[index++] = i;
            }
        }
        return occurrences;
    }

    /**
     * Find first and last occurrence of target
     */
    public static int[] findFirstAndLast(int[] arr, int target) {
        int first = -1, last = -1;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                if (first == -1) {
                    first = i;
                }
                last = i;
            }
        }

        return new int[]{first, last};
    }
}

// ===== SORTING UTILITIES =====

class ArraySort {

    private static int bubbleComparisons = 0;
    private static int selectionComparisons = 0;
    private static int insertionComparisons = 0;

    /**
     * Bubble sort - O(n²) time complexity
     */
    public static int[] bubbleSort(int[] arr) {
        bubbleComparisons = 0;
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                bubbleComparisons++;
                if (arr[j] > arr[j + 1]) {
                    // Swap
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    /**
     * Selection sort - O(n²) time complexity
     */
    public static int[] selectionSort(int[] arr) {
        selectionComparisons = 0;
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                selectionComparisons++;
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            // Swap
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }

    /**
     * Insertion sort - O(n²) time complexity
     */
    public static int[] insertionSort(int[] arr) {
        insertionComparisons = 0;
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key) {
                insertionComparisons++;
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        return arr;
    }

    // Getters for comparison counts
    public static int getBubbleSortComparisons() { return bubbleComparisons; }
    public static int getSelectionSortComparisons() { return selectionComparisons; }
    public static int getInsertionSortComparisons() { return insertionComparisons; }
}

// ===== ARRAY MANIPULATION UTILITIES =====

class ArrayManipulate {

    /**
     * Reverse array
     */
    public static int[] reverse(int[] arr) {
        int start = 0;
        int end = arr.length - 1;

        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        return arr;
    }

    /**
     * Rotate array left by k positions
     */
    public static int[] rotateLeft(int[] arr, int k) {
        int n = arr.length;
        k = k % n;

        int[] rotated = new int[n];
        for (int i = 0; i < n; i++) {
            rotated[i] = arr[(i + k) % n];
        }
        return rotated;
    }

    /**
     * Rotate array right by k positions
     */
    public static int[] rotateRight(int[] arr, int k) {
        int n = arr.length;
        k = k % n;

        int[] rotated = new int[n];
        for (int i = 0; i < n; i++) {
            rotated[(i + k) % n] = arr[i];
        }
        return rotated;
    }

    /**
     * Remove duplicates from array
     */
    public static int[] removeDuplicates(int[] arr) {
        // First sort the array
        ArraySort.bubbleSort(arr);

        // Count unique elements
        int uniqueCount = 1;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i - 1]) {
                uniqueCount++;
            }
        }

        // Create new array with unique elements
        int[] result = new int[uniqueCount];
        result[0] = arr[0];
        int index = 1;

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i - 1]) {
                result[index++] = arr[i];
            }
        }

        return result;
    }

    /**
     * Shuffle array using Fisher-Yates algorithm
     */
    public static int[] shuffle(int[] arr) {
        for (int i = arr.length - 1; i > 0; i--) {
            int j = (int) (Math.random() * (i + 1));
            // Swap
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
}

// ===== STATISTICAL UTILITIES =====

class ArrayStats {

    public static int count(int[] arr) {
        return arr.length;
    }

    public static int sum(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return sum;
    }

    public static int min(int[] arr) {
        int min = arr[0];
        for (int num : arr) {
            if (num < min) min = num;
        }
        return min;
    }

    public static int max(int[] arr) {
        int max = arr[0];
        for (int num : arr) {
            if (num > max) max = num;
        }
        return max;
    }

    public static int range(int[] arr) {
        return max(arr) - min(arr);
    }

    public static double mean(int[] arr) {
        return (double) sum(arr) / arr.length;
    }

    public static double median(int[] arr) {
        ArraySort.bubbleSort(arr);
        int n = arr.length;
        if (n % 2 == 0) {
            return (arr[n/2 - 1] + arr[n/2]) / 2.0;
        } else {
            return arr[n/2];
        }
    }

    public static int mode(int[] arr) {
        int[] frequency = new int[max(arr) + 1];

        for (int num : arr) {
            frequency[num]++;
        }

        int maxFreq = 0;
        int mode = arr[0];

        for (int i = 0; i < frequency.length; i++) {
            if (frequency[i] > maxFreq) {
                maxFreq = frequency[i];
                mode = i;
            }
        }
        return mode;
    }

    public static double variance(int[] arr) {
        double mean = mean(arr);
        double sumSquaredDiffs = 0;

        for (int num : arr) {
            double diff = num - mean;
            sumSquaredDiffs += diff * diff;
        }

        return sumSquaredDiffs / arr.length;
    }

    public static double standardDeviation(int[] arr) {
        return Math.sqrt(variance(arr));
    }
}

// ===== MATRIX UTILITIES =====

class MatrixUtils {

    /**
     * Print matrix
     */
    public static void printMatrix(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            System.out.print("[");
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j]);
                if (j < matrix[i].length - 1) {
                    System.out.print(", ");
                }
            }
            System.out.println("]");
        }
    }

    /**
     * Transpose matrix
     */
    public static int[][] transpose(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        int[][] transpose = new int[cols][rows];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                transpose[j][i] = matrix[i][j];
            }
        }
        return transpose;
    }

    /**
     * Add two matrices
     */
    public static int[][] add(int[][] matrixA, int[][] matrixB) {
        int rows = matrixA.length;
        int cols = matrixA[0].length;
        int[][] result = new int[rows][cols];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[i][j] = matrixA[i][j] + matrixB[i][j];
            }
        }
        return result;
    }

    /**
     * Scalar multiplication
     */
    public static int[][] scalarMultiply(int[][] matrix, int scalar) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        int[][] result = new int[rows][cols];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[i][j] = matrix[i][j] * scalar;
            }
        }
        return result;
    }

    /**
     * Check if matrix is square
     */
    public static boolean isSquare(int[][] matrix) {
        return matrix.length == matrix[0].length;
    }

    /**
     * Calculate trace (sum of diagonal elements)
     */
    public static int trace(int[][] matrix) {
        if (!isSquare(matrix)) {
            throw new IllegalArgumentException("Matrix must be square");
        }

        int trace = 0;
        for (int i = 0; i < matrix.length; i++) {
            trace += matrix[i][i];
        }
        return trace;
    }
}

// ===== GENERAL ARRAY UTILITIES =====

class ArrayUtils {

    /**
     * Print array
     */
    public static void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
    }

    /**
     * Merge two arrays
     */
    public static int[] merge(int[] arr1, int[] arr2) {
        int[] merged = new int[arr1.length + arr2.length];
        System.arraycopy(arr1, 0, merged, 0, arr1.length);
        System.arraycopy(arr2, 0, merged, arr1.length, arr2.length);
        return merged;
    }

    /**
     * Split array at given index
     */
    public static int[][] split(int[] arr, int index) {
        int[][] result = new int[2][];
        result[0] = new int[index];
        result[1] = new int[arr.length - index];

        System.arraycopy(arr, 0, result[0], 0, index);
        System.arraycopy(arr, index, result[1], 0, arr.length - index);

        return result;
    }

    /**
     * Check if two arrays are equal
     */
    public static boolean equals(int[] arr1, int[] arr2) {
        if (arr1.length != arr2.length) {
            return false;
        }

        for (int i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false;
            }
        }
        return true;
    }

    /**
     * Find intersection of two arrays
     */
    public static int[] intersection(int[] arr1, int[] arr2) {
        int[] temp = new int[Math.min(arr1.length, arr2.length)];
        int count = 0;

        for (int num1 : arr1) {
            for (int num2 : arr2) {
                if (num1 == num2) {
                    // Check if already added
                    boolean alreadyAdded = false;
                    for (int i = 0; i < count; i++) {
                        if (temp[i] == num1) {
                            alreadyAdded = true;
                            break;
                        }
                    }
                    if (!alreadyAdded) {
                        temp[count++] = num1;
                    }
                    break;
                }
            }
        }

        int[] result = new int[count];
        System.arraycopy(temp, 0, result, 0, count);
        return result;
    }

    /**
     * Find union of two arrays
     */
    public static int[] union(int[] arr1, int[] arr2) {
        int[] merged = merge(arr1, arr2);
        return ArrayManipulate.removeDuplicates(merged);
    }
}