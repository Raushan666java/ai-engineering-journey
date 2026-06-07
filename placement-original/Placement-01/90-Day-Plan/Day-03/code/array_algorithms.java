/**
 * Day 3: Loops & Arrays - Complete Guide
 * File: array_algorithms.java
 * Purpose: Implement fundamental array algorithms
 *
 * Topics Covered:
 * - Linear search implementation
 * - Basic sorting algorithms (bubble, selection, insertion)
 * - Array reversal and rotation
 * - Statistical operations (min, max, average, median)
 * - Array manipulation algorithms
 */

public class array_algorithms {

    public static void main(String[] args) {
        System.out.println("=== ARRAY ALGORITHMS - DAY 3 ===\n");

        // Test data
        int[] numbers = {64, 34, 25, 12, 22, 11, 90, 5, 77, 30};
        int[] sortedNumbers = {5, 11, 12, 22, 25, 30, 34, 64, 77, 90};

        System.out.println("Original array:");
        printArray(numbers);
        System.out.println();

        // 1. SEARCHING ALGORITHMS
        demonstrateSearching(numbers);

        // 2. SORTING ALGORITHMS
        demonstrateSorting(numbers.clone());

        // 3. ARRAY MANIPULATION
        demonstrateManipulation(numbers.clone());

        // 4. STATISTICAL OPERATIONS
        demonstrateStatistics(numbers);

        // 5. ADVANCED ALGORITHMS
        demonstrateAdvancedAlgorithms(sortedNumbers.clone());

        // 6. PRACTICAL APPLICATIONS
        demonstratePracticalApplications();
    }

    /**
     * Demonstrates searching algorithms
     */
    public static void demonstrateSearching(int[] arr) {
        System.out.println("1. SEARCHING ALGORITHMS");
        System.out.println("-----------------------");

        int target = 25;
        System.out.println("Searching for " + target + " in array:");

        // Linear Search
        int linearResult = linearSearch(arr, target);
        System.out.println("Linear Search:");
        System.out.println("  Found at index: " + linearResult);
        System.out.println("  Comparisons made: " + (linearResult + 1));

        // Linear Search for all occurrences
        int[] allOccurrences = findAllOccurrences(arr, target);
        System.out.println("All occurrences of " + target + ":");
        printArray(allOccurrences);

        // Binary Search (requires sorted array)
        int[] sortedArr = bubbleSort(arr.clone());
        System.out.println("Binary Search (on sorted array):");
        int binaryResult = binarySearch(sortedArr, target);
        System.out.println("  Found at index: " + binaryResult);
        System.out.println("  Comparisons made: " + (int)(Math.log(sortedArr.length) / Math.log(2)) + " (worst case)");

        System.out.println();
    }

    /**
     * Demonstrates sorting algorithms
     */
    public static void demonstrateSorting(int[] arr) {
        System.out.println("2. SORTING ALGORITHMS");
        System.out.println("---------------------");

        System.out.println("Original array:");
        printArray(arr);

        // Bubble Sort
        int[] bubbleArr = arr.clone();
        System.out.println("\nBubble Sort:");
        bubbleSort(bubbleArr);
        printArray(bubbleArr);

        // Selection Sort
        int[] selectionArr = arr.clone();
        System.out.println("Selection Sort:");
        selectionSort(selectionArr);
        printArray(selectionArr);

        // Insertion Sort
        int[] insertionArr = arr.clone();
        System.out.println("Insertion Sort:");
        insertionSort(insertionArr);
        printArray(insertionArr);

        System.out.println();
    }

    /**
     * Demonstrates array manipulation algorithms
     */
    public static void demonstrateManipulation(int[] arr) {
        System.out.println("3. ARRAY MANIPULATION");
        System.out.println("---------------------");

        System.out.println("Original array:");
        printArray(arr);

        // Array Reversal
        int[] reversed = reverseArray(arr.clone());
        System.out.println("Reversed:");
        printArray(reversed);

        // Array Rotation (left)
        int[] leftRotated = rotateLeft(arr.clone(), 3);
        System.out.println("Left rotated by 3:");
        printArray(leftRotated);

        // Array Rotation (right)
        int[] rightRotated = rotateRight(arr.clone(), 2);
        System.out.println("Right rotated by 2:");
        printArray(rightRotated);

        // Remove duplicates
        int[] noDuplicates = removeDuplicates(arr.clone());
        System.out.println("After removing duplicates:");
        printArray(noDuplicates);

        // Shuffle array
        int[] shuffled = shuffleArray(arr.clone());
        System.out.println("Shuffled:");
        printArray(shuffled);

        System.out.println();
    }

    /**
     * Demonstrates statistical operations
     */
    public static void demonstrateStatistics(int[] arr) {
        System.out.println("4. STATISTICAL OPERATIONS");
        System.out.println("-------------------------");

        System.out.println("Array for statistics:");
        printArray(arr);

        System.out.println("Basic Statistics:");
        System.out.println("  Minimum: " + findMinimum(arr));
        System.out.println("  Maximum: " + findMaximum(arr));
        System.out.println("  Sum: " + calculateSum(arr));
        System.out.println("  Average: " + String.format("%.2f", calculateAverage(arr)));
        System.out.println("  Median: " + calculateMedian(arr.clone()));
        System.out.println("  Mode: " + findMode(arr));
        System.out.println("  Range: " + calculateRange(arr));

        // Frequency distribution
        System.out.println("Frequency Distribution:");
        int[] frequency = calculateFrequency(arr);
        for (int i = 0; i < frequency.length; i++) {
            if (frequency[i] > 0) {
                System.out.println("  " + i + ": " + frequency[i] + " times");
            }
        }

        System.out.println();
    }

    /**
     * Demonstrates advanced algorithms
     */
    public static void demonstrateAdvancedAlgorithms(int[] sortedArr) {
        System.out.println("5. ADVANCED ALGORITHMS");
        System.out.println("----------------------");

        System.out.println("Sorted array:");
        printArray(sortedArr);

        // Two Sum Problem (find two numbers that add up to target)
        int target = 35;
        System.out.println("Two Sum (target = " + target + "):");
        int[] result = twoSum(sortedArr, target);
        if (result.length == 2) {
            System.out.println("  Found: " + sortedArr[result[0]] + " + " + sortedArr[result[1]] + " = " + target);
            System.out.println("  Indices: " + result[0] + ", " + result[1]);
        } else {
            System.out.println("  No solution found");
        }

        // Find missing number in array
        int[] incomplete = {1, 2, 4, 5, 6}; // Missing 3
        int missing = findMissingNumber(incomplete, 6);
        System.out.println("Missing number in [1,2,4,5,6]: " + missing);

        // Find duplicates
        int[] withDuplicates = {1, 2, 2, 3, 4, 4, 5};
        System.out.println("Duplicates in array:");
        printArray(withDuplicates);
        int[] duplicates = findDuplicates(withDuplicates);
        System.out.print("  Duplicates: ");
        for (int dup : duplicates) {
            if (dup != -1) {
                System.out.print(dup + " ");
            }
        }
        System.out.println();

        System.out.println();
    }

    /**
     * Practical applications combining multiple algorithms
     */
    public static void demonstratePracticalApplications() {
        System.out.println("6. PRACTICAL APPLICATIONS");
        System.out.println("-------------------------");

        // Student grade analysis
        int[] grades = {85, 92, 78, 96, 88, 76, 94, 89, 91, 83, 85, 92};

        System.out.println("Student Grade Analysis:");
        System.out.println("Grades: ");
        printArray(grades);

        // Sort grades
        int[] sortedGrades = bubbleSort(grades.clone());
        System.out.println("Sorted grades:");
        printArray(sortedGrades);

        // Calculate statistics
        System.out.println("Statistics:");
        System.out.println("  Highest grade: " + findMaximum(grades));
        System.out.println("  Lowest grade: " + findMinimum(grades));
        System.out.println("  Average grade: " + String.format("%.2f", calculateAverage(grades)));
        System.out.println("  Median grade: " + calculateMedian(grades.clone()));

        // Grade distribution
        int[] distribution = new int[5]; // A, B, C, D, F
        for (int grade : grades) {
            if (grade >= 90) distribution[0]++;
            else if (grade >= 80) distribution[1]++;
            else if (grade >= 70) distribution[2]++;
            else if (grade >= 60) distribution[3]++;
            else distribution[4]++;
        }

        System.out.println("Grade Distribution:");
        String[] gradeLetters = {"A", "B", "C", "D", "F"};
        for (int i = 0; i < distribution.length; i++) {
            System.out.println("  " + gradeLetters[i] + ": " + distribution[i] + " students");
        }

        // Find top performers
        System.out.println("Top 3 performers:");
        for (int i = sortedGrades.length - 1; i >= sortedGrades.length - 3; i--) {
            System.out.println("  " + sortedGrades[i]);
        }

        System.out.println();
    }

    // ===== SEARCHING ALGORITHMS =====

    /**
     * Linear search - O(n) time complexity
     */
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1; // Not found
    }

    /**
     * Find all occurrences of target
     */
    public static int[] findAllOccurrences(int[] arr, int target) {
        int count = 0;
        for (int num : arr) {
            if (num == target) count++;
        }

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
        return -1; // Not found
    }

    // ===== SORTING ALGORITHMS =====

    /**
     * Bubble sort - O(n²) time complexity
     */
    public static int[] bubbleSort(int[] arr) {
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
        return arr;
    }

    /**
     * Selection sort - O(n²) time complexity
     */
    public static int[] selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
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
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        return arr;
    }

    // ===== ARRAY MANIPULATION =====

    /**
     * Reverse array
     */
    public static int[] reverseArray(int[] arr) {
        int start = 0;
        int end = arr.length - 1;

        while (start < end) {
            // Swap
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
        k = k % n; // Handle k > n

        // Reverse entire array
        reverseArray(arr);

        // Reverse first n-k elements
        reverseSubarray(arr, 0, n - k - 1);

        // Reverse last k elements
        reverseSubarray(arr, n - k, n - 1);

        return arr;
    }

    /**
     * Rotate array right by k positions
     */
    public static int[] rotateRight(int[] arr, int k) {
        int n = arr.length;
        k = k % n;

        // Reverse entire array
        reverseArray(arr);

        // Reverse first k elements
        reverseSubarray(arr, 0, k - 1);

        // Reverse remaining elements
        reverseSubarray(arr, k, n - 1);

        return arr;
    }

    /**
     * Reverse subarray from start to end
     */
    private static void reverseSubarray(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    /**
     * Remove duplicates from array
     */
    public static int[] removeDuplicates(int[] arr) {
        // First sort the array
        bubbleSort(arr);

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
    public static int[] shuffleArray(int[] arr) {
        for (int i = arr.length - 1; i > 0; i--) {
            int j = (int) (Math.random() * (i + 1));
            // Swap
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    // ===== STATISTICAL OPERATIONS =====

    public static int findMinimum(int[] arr) {
        int min = arr[0];
        for (int num : arr) {
            if (num < min) min = num;
        }
        return min;
    }

    public static int findMaximum(int[] arr) {
        int max = arr[0];
        for (int num : arr) {
            if (num > max) max = num;
        }
        return max;
    }

    public static int calculateSum(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return sum;
    }

    public static double calculateAverage(int[] arr) {
        return (double) calculateSum(arr) / arr.length;
    }

    public static double calculateMedian(int[] arr) {
        bubbleSort(arr);
        int n = arr.length;
        if (n % 2 == 0) {
            return (arr[n/2 - 1] + arr[n/2]) / 2.0;
        } else {
            return arr[n/2];
        }
    }

    public static int findMode(int[] arr) {
        int[] frequency = calculateFrequency(arr);
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

    public static int calculateRange(int[] arr) {
        return findMaximum(arr) - findMinimum(arr);
    }

    public static int[] calculateFrequency(int[] arr) {
        int max = findMaximum(arr);
        int[] frequency = new int[max + 1];

        for (int num : arr) {
            frequency[num]++;
        }
        return frequency;
    }

    // ===== ADVANCED ALGORITHMS =====

    /**
     * Two Sum problem - find two numbers that add up to target
     */
    public static int[] twoSum(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{}; // No solution
    }

    /**
     * Find missing number in array (1 to n)
     */
    public static int findMissingNumber(int[] arr, int n) {
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        for (int num : arr) {
            actualSum += num;
        }
        return expectedSum - actualSum;
    }

    /**
     * Find duplicates in array
     */
    public static int[] findDuplicates(int[] arr) {
        int[] duplicates = new int[arr.length];
        int dupIndex = 0;

        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    // Check if already added
                    boolean alreadyAdded = false;
                    for (int k = 0; k < dupIndex; k++) {
                        if (duplicates[k] == arr[i]) {
                            alreadyAdded = true;
                            break;
                        }
                    }
                    if (!alreadyAdded) {
                        duplicates[dupIndex++] = arr[i];
                    }
                }
            }
        }

        // Fill remaining with -1
        for (int i = dupIndex; i < duplicates.length; i++) {
            duplicates[i] = -1;
        }

        return duplicates;
    }

    // ===== HELPER METHODS =====

    /**
     * Print array utility
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
}