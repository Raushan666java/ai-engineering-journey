/**
 * ARRAY OPERATIONS COMPLETE GUIDE - DAY 3
 * Master 1D and 2D arrays in Java
 * 
 * Topics Covered:
 * 1. Array Basics - Declaration, initialization
 * 2. Array Traversal - Different methods
 * 3. Array Operations - Search, sort, reverse
 * 4. Array Manipulation - Insert, delete, update
 * 5. 2D Arrays - Matrix operations
 * 6. Common Array Algorithms
 * 7. Array Utility Methods
 * 8. Advanced Array Techniques
 */

import java.util.Arrays;

public class ArrayOperations {
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════╗");
        System.out.println("║   ARRAY OPERATIONS GUIDE - DAY 3   ║");
        System.out.println("║   Complete Array Mastery           ║");
        System.out.println("╚════════════════════════════════════╝\n");
        
        section1_ArrayBasics();
        section2_ArrayTraversal();
        section3_SearchingArrays();
        section4_SortingArrays();
        section5_ArrayManipulation();
        section6_TwoDimensionalArrays();
        section7_CommonAlgorithms();
        section8_ArrayUtils();
    }
    
    // ============================================
    // SECTION 1: ARRAY BASICS
    // ============================================
    static void section1_ArrayBasics() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 1: ARRAY BASICS");
        System.out.println("=".repeat(50));
        
        // 1.1: Array declaration and initialization
        System.out.println("\n1.1: Array Declaration Methods");
        
        // Method 1: Declare and allocate
        int[] arr1 = new int[5];  // Default values: 0
        System.out.println("arr1 (default): " + Arrays.toString(arr1));
        
        // Method 2: Declare with values
        int[] arr2 = {10, 20, 30, 40, 50};
        System.out.println("arr2 (initialized): " + Arrays.toString(arr2));
        
        // Method 3: Declare and then allocate
        int[] arr3;
        arr3 = new int[]{1, 2, 3, 4, 5};
        System.out.println("arr3 (allocated later): " + Arrays.toString(arr3));
        
        // 1.2: Different data types
        System.out.println("\n1.2: Arrays of Different Types");
        double[] decimals = {1.5, 2.7, 3.9};
        String[] names = {"Alice", "Bob", "Charlie"};
        boolean[] flags = {true, false, true};
        char[] letters = {'A', 'B', 'C'};
        
        System.out.println("Doubles: " + Arrays.toString(decimals));
        System.out.println("Strings: " + Arrays.toString(names));
        System.out.println("Booleans: " + Arrays.toString(flags));
        System.out.println("Chars: " + Arrays.toString(letters));
        
        // 1.3: Array length
        System.out.println("\n1.3: Array Length Property");
        System.out.println("arr2 length: " + arr2.length);
        System.out.println("names length: " + names.length);
        
        // 1.4: Accessing elements
        System.out.println("\n1.4: Accessing Array Elements");
        System.out.println("First element: " + arr2[0]);
        System.out.println("Last element: " + arr2[arr2.length - 1]);
        System.out.println("Middle element: " + arr2[arr2.length / 2]);
        
        // 1.5: Modifying elements
        System.out.println("\n1.5: Modifying Elements");
        arr2[2] = 99;
        System.out.println("After modification: " + Arrays.toString(arr2));
    }
    
    // ============================================
    // SECTION 2: ARRAY TRAVERSAL
    // ============================================
    static void section2_ArrayTraversal() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 2: ARRAY TRAVERSAL");
        System.out.println("=".repeat(50));
        
        int[] numbers = {10, 20, 30, 40, 50};
        
        // 2.1: Forward iteration using for loop
        System.out.println("\n2.1: Forward Iteration (for loop)");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();
        
        // 2.2: Backward iteration
        System.out.println("\n2.2: Backward Iteration");
        for (int i = numbers.length - 1; i >= 0; i--) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();
        
        // 2.3: Enhanced for loop (for-each)
        System.out.println("\n2.3: Enhanced For Loop");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        // 2.4: While loop traversal
        System.out.println("\n2.4: While Loop Traversal");
        int i = 0;
        while (i < numbers.length) {
            System.out.print(numbers[i] + " ");
            i++;
        }
        System.out.println();
        
        // 2.5: Sum and average calculation
        System.out.println("\n2.5: Sum and Average");
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        double average = sum / (double) numbers.length;
        System.out.println("Sum: " + sum + ", Average: " + average);
    }
    
    // ============================================
    // SECTION 3: SEARCHING ARRAYS
    // ============================================
    static void section3_SearchingArrays() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 3: SEARCHING ARRAYS");
        System.out.println("=".repeat(50));
        
        int[] arr = {34, 67, 23, 89, 12, 56, 45};
        
        // 3.1: Linear Search
        System.out.println("\n3.1: Linear Search");
        int target = 89;
        int index = linearSearch(arr, target);
        System.out.println("Search for " + target + ": " + 
                         (index != -1 ? "Found at index " + index : "Not found"));
        
        // 3.2: Find minimum element
        System.out.println("\n3.2: Find Minimum Element");
        int min = findMin(arr);
        System.out.println("Minimum: " + min);
        
        // 3.3: Find maximum element
        System.out.println("\n3.3: Find Maximum Element");
        int max = findMax(arr);
        System.out.println("Maximum: " + max);
        
        // 3.4: Binary Search (array must be sorted)
        System.out.println("\n3.4: Binary Search");
        int[] sortedArr = {10, 20, 30, 40, 50, 60, 70};
        int result = binarySearch(sortedArr, 40);
        System.out.println("Binary search for 40: " + 
                         (result != -1 ? "Found at index " + result : "Not found"));
        
        // 3.5: Check if array contains element
        System.out.println("\n3.5: Contains Check");
        boolean contains = contains(arr, 56);
        System.out.println("Array contains 56: " + contains);
    }
    
    // Linear search implementation
    static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1;
    }
    
    // Find minimum
    static int findMin(int[] arr) {
        int min = arr[0];
        for (int num : arr) {
            if (num < min) min = num;
        }
        return min;
    }
    
    // Find maximum
    static int findMax(int[] arr) {
        int max = arr[0];
        for (int num : arr) {
            if (num > max) max = num;
        }
        return max;
    }
    
    // Binary search implementation
    static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
    
    // Contains check
    static boolean contains(int[] arr, int value) {
        for (int num : arr) {
            if (num == value) return true;
        }
        return false;
    }
    
    // ============================================
    // SECTION 4: SORTING ARRAYS
    // ============================================
    static void section4_SortingArrays() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 4: SORTING ARRAYS");
        System.out.println("=".repeat(50));
        
        // 4.1: Bubble Sort
        System.out.println("\n4.1: Bubble Sort");
        int[] arr1 = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Original: " + Arrays.toString(arr1));
        bubbleSort(arr1);
        System.out.println("Sorted: " + Arrays.toString(arr1));
        
        // 4.2: Selection Sort
        System.out.println("\n4.2: Selection Sort");
        int[] arr2 = {64, 25, 12, 22, 11};
        System.out.println("Original: " + Arrays.toString(arr2));
        selectionSort(arr2);
        System.out.println("Sorted: " + Arrays.toString(arr2));
        
        // 4.3: Using Arrays.sort()
        System.out.println("\n4.3: Using Arrays.sort()");
        int[] arr3 = {5, 2, 8, 1, 9};
        System.out.println("Original: " + Arrays.toString(arr3));
        Arrays.sort(arr3);
        System.out.println("Sorted: " + Arrays.toString(arr3));
        
        // 4.4: Sort in descending order
        System.out.println("\n4.4: Descending Order");
        int[] arr4 = {5, 2, 8, 1, 9};
        Arrays.sort(arr4);
        reverseArray(arr4);
        System.out.println("Descending: " + Arrays.toString(arr4));
    }
    
    // Bubble sort implementation
    static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    
    // Selection sort implementation
    static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            // Swap
            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
    }
    
    // ============================================
    // SECTION 5: ARRAY MANIPULATION
    // ============================================
    static void section5_ArrayManipulation() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 5: ARRAY MANIPULATION");
        System.out.println("=".repeat(50));
        
        // 5.1: Reverse array in-place
        System.out.println("\n5.1: Reverse Array In-Place");
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Original: " + Arrays.toString(arr));
        reverseArray(arr);
        System.out.println("Reversed: " + Arrays.toString(arr));
        
        // 5.2: Rotate array left
        System.out.println("\n5.2: Rotate Array Left by 2");
        int[] arr2 = {1, 2, 3, 4, 5};
        System.out.println("Original: " + Arrays.toString(arr2));
        rotateLeft(arr2, 2);
        System.out.println("Rotated: " + Arrays.toString(arr2));
        
        // 5.3: Rotate array right
        System.out.println("\n5.3: Rotate Array Right by 2");
        int[] arr3 = {1, 2, 3, 4, 5};
        System.out.println("Original: " + Arrays.toString(arr3));
        rotateRight(arr3, 2);
        System.out.println("Rotated: " + Arrays.toString(arr3));
        
        // 5.4: Copy array
        System.out.println("\n5.4: Copy Array");
        int[] original = {10, 20, 30};
        int[] copy = Arrays.copyOf(original, original.length);
        System.out.println("Original: " + Arrays.toString(original));
        System.out.println("Copy: " + Arrays.toString(copy));
        
        // 5.5: Remove duplicates from sorted array
        System.out.println("\n5.5: Remove Duplicates (Sorted Array)");
        int[] withDups = {1, 1, 2, 2, 3, 4, 4, 5};
        int newLength = removeDuplicates(withDups);
        System.out.print("After removing duplicates: ");
        for (int i = 0; i < newLength; i++) {
            System.out.print(withDups[i] + " ");
        }
        System.out.println();
        
        // 5.6: Move zeros to end
        System.out.println("\n5.6: Move Zeros to End");
        int[] withZeros = {0, 1, 0, 3, 12};
        System.out.println("Original: " + Arrays.toString(withZeros));
        moveZeros(withZeros);
        System.out.println("After moving zeros: " + Arrays.toString(withZeros));
    }
    
    // Reverse array in-place
    static void reverseArray(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    
    // Rotate array left by k positions
    static void rotateLeft(int[] arr, int k) {
        k = k % arr.length;
        reverse(arr, 0, k - 1);
        reverse(arr, k, arr.length - 1);
        reverse(arr, 0, arr.length - 1);
    }
    
    // Rotate array right by k positions
    static void rotateRight(int[] arr, int k) {
        k = k % arr.length;
        reverse(arr, 0, arr.length - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, arr.length - 1);
    }
    
    // Helper: reverse portion of array
    static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    
    // Remove duplicates from sorted array
    static int removeDuplicates(int[] arr) {
        if (arr.length == 0) return 0;
        int j = 0;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[j]) {
                j++;
                arr[j] = arr[i];
            }
        }
        return j + 1;
    }
    
    // Move zeros to end
    static void moveZeros(int[] arr) {
        int j = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                arr[j++] = arr[i];
            }
        }
        while (j < arr.length) {
            arr[j++] = 0;
        }
    }
    
    // ============================================
    // SECTION 6: 2D ARRAYS (MATRICES)
    // ============================================
    static void section6_TwoDimensionalArrays() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 6: 2D ARRAYS");
        System.out.println("=".repeat(50));
        
        // 6.1: Basic 2D array
        System.out.println("\n6.1: Create and Display 2D Array");
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        printMatrix(matrix);
        
        // 6.2: Matrix addition
        System.out.println("\n6.2: Matrix Addition");
        int[][] A = {{1, 2}, {3, 4}};
        int[][] B = {{5, 6}, {7, 8}};
        int[][] sum = addMatrices(A, B);
        printMatrix(sum);
        
        // 6.3: Matrix transpose
        System.out.println("\n6.3: Matrix Transpose");
        int[][] original = {{1, 2, 3}, {4, 5, 6}};
        System.out.println("Original:");
        printMatrix(original);
        int[][] transposed = transpose(original);
        System.out.println("Transposed:");
        printMatrix(transposed);
        
        // 6.4: Row sums
        System.out.println("\n6.4: Row Sums");
        for (int i = 0; i < matrix.length; i++) {
            int rowSum = 0;
            for (int j = 0; j < matrix[i].length; j++) {
                rowSum += matrix[i][j];
            }
            System.out.println("Row " + i + " sum: " + rowSum);
        }
        
        // 6.5: Column sums
        System.out.println("\n6.5: Column Sums");
        for (int j = 0; j < matrix[0].length; j++) {
            int colSum = 0;
            for (int i = 0; i < matrix.length; i++) {
                colSum += matrix[i][j];
            }
            System.out.println("Column " + j + " sum: " + colSum);
        }
    }
    
    // Print matrix
    static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
    
    // Add two matrices
    static int[][] addMatrices(int[][] A, int[][] B) {
        int rows = A.length, cols = A[0].length;
        int[][] result = new int[rows][cols];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[i][j] = A[i][j] + B[i][j];
            }
        }
        return result;
    }
    
    // Transpose matrix
    static int[][] transpose(int[][] matrix) {
        int rows = matrix.length, cols = matrix[0].length;
        int[][] result = new int[cols][rows];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[j][i] = matrix[i][j];
            }
        }
        return result;
    }
    
    // ============================================
    // SECTION 7: COMMON ALGORITHMS
    // ============================================
    static void section7_CommonAlgorithms() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 7: COMMON ALGORITHMS");
        System.out.println("=".repeat(50));
        
        // 7.1: Second largest element
        System.out.println("\n7.1: Find Second Largest");
        int[] arr = {12, 35, 1, 10, 34, 1};
        int secondLargest = findSecondLargest(arr);
        System.out.println("Second largest: " + secondLargest);
        
        // 7.2: Check if sorted
        System.out.println("\n7.2: Check if Sorted");
        int[] sorted = {1, 2, 3, 4, 5};
        int[] unsorted = {1, 3, 2, 4};
        System.out.println("Is sorted: " + isSorted(sorted));
        System.out.println("Is sorted: " + isSorted(unsorted));
        
        // 7.3: Find missing number (1 to n)
        System.out.println("\n7.3: Find Missing Number");
        int[] incomplete = {1, 2, 4, 5, 6};  // Missing 3
        int missing = findMissingNumber(incomplete);
        System.out.println("Missing number: " + missing);
        
        // 7.4: Pair sum (Two Sum variant)
        System.out.println("\n7.4: Find Pair with Sum");
        int[] nums = {2, 7, 11, 15};
        int targetSum = 9;
        int[] pair = findPairWithSum(nums, targetSum);
        if (pair != null) {
            System.out.println("Pair: [" + pair[0] + ", " + pair[1] + "]");
        }
    }
    
    // Find second largest
    static int findSecondLargest(int[] arr) {
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }
        return second;
    }
    
    // Check if sorted
    static boolean isSorted(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) return false;
        }
        return true;
    }
    
    // Find missing number
    static int findMissingNumber(int[] arr) {
        int n = arr.length + 1;
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        for (int num : arr) {
            actualSum += num;
        }
        return expectedSum - actualSum;
    }
    
    // Find pair with given sum
    static int[] findPairWithSum(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == target) {
                    return new int[]{arr[i], arr[j]};
                }
            }
        }
        return null;
    }
    
    // ============================================
    // SECTION 8: ARRAY UTILITY METHODS
    // ============================================
    static void section8_ArrayUtils() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 8: ARRAY UTILITY METHODS");
        System.out.println("=".repeat(50));
        
        int[] arr = {5, 2, 8, 1, 9};
        
        // 8.1: Arrays.toString()
        System.out.println("\n8.1: Arrays.toString()");
        System.out.println(Arrays.toString(arr));
        
        // 8.2: Arrays.sort()
        System.out.println("\n8.2: Arrays.sort()");
        Arrays.sort(arr);
        System.out.println("Sorted: " + Arrays.toString(arr));
        
        // 8.3: Arrays.binarySearch()
        System.out.println("\n8.3: Arrays.binarySearch()");
        int index = Arrays.binarySearch(arr, 8);
        System.out.println("Index of 8: " + index);
        
        // 8.4: Arrays.equals()
        System.out.println("\n8.4: Arrays.equals()");
        int[] arr1 = {1, 2, 3};
        int[] arr2 = {1, 2, 3};
        System.out.println("Arrays equal: " + Arrays.equals(arr1, arr2));
        
        // 8.5: Arrays.fill()
        System.out.println("\n8.5: Arrays.fill()");
        int[] fillArr = new int[5];
        Arrays.fill(fillArr, 7);
        System.out.println("Filled: " + Arrays.toString(fillArr));
        
        // 8.6: Arrays.copyOf()
        System.out.println("\n8.6: Arrays.copyOf()");
        int[] copy = Arrays.copyOf(arr, arr.length);
        System.out.println("Copy: " + Arrays.toString(copy));
        
        System.out.println("\n🎉 ARRAY OPERATIONS COMPLETE!");
    }
}
