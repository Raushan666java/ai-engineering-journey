/**
 * Day 3: Loops & Arrays - Complete Guide
 * File: practice_problems.java
 * Purpose: Apply loops and arrays to solve problems
 *
 * Contains: 15 progressive problems from basic to advanced
 * Topics: Loop patterns, array operations, algorithms, problem solving
 */

public class practice_problems {

    public static void main(String[] args) {
        System.out.println("=== PRACTICE PROBLEMS - DAY 3 ===\n");

        // BASIC PROBLEMS (1-5)
        System.out.println("BASIC PROBLEMS (1-5)");
        System.out.println("====================");

        problem1();
        problem2();
        problem3();
        problem4();
        problem5();

        // INTERMEDIATE PROBLEMS (6-10)
        System.out.println("\nINTERMEDIATE PROBLEMS (6-10)");
        System.out.println("============================");

        problem6();
        problem7();
        problem8();
        problem9();
        problem10();

        // ADVANCED PROBLEMS (11-15)
        System.out.println("\nADVANCED PROBLEMS (11-15)");
        System.out.println("==========================");

        problem11();
        problem12();
        problem13();
        problem14();
        problem15();
    }

    // ===== BASIC PROBLEMS =====

    /**
     * Problem 1: Print numbers from 1 to 100 using different loops
     */
    public static void problem1() {
        System.out.println("Problem 1: Print numbers 1-100 using for, while, and do-while loops");

        System.out.println("Using for loop:");
        for (int i = 1; i <= 100; i++) {
            System.out.print(i + " ");
        }
        System.out.println();

        System.out.println("Using while loop:");
        int i = 1;
        while (i <= 100) {
            System.out.print(i + " ");
            i++;
        }
        System.out.println();

        System.out.println("Using do-while loop:");
        i = 1;
        do {
            System.out.print(i + " ");
            i++;
        } while (i <= 100);
        System.out.println("\n");
    }

    /**
     * Problem 2: Find sum of first n natural numbers
     */
    public static void problem2() {
        System.out.println("Problem 2: Find sum of first 50 natural numbers");

        int n = 50;
        int sum = 0;

        // Using formula: n(n+1)/2
        int formulaSum = n * (n + 1) / 2;
        System.out.println("Using formula: " + formulaSum);

        // Using loop
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        System.out.println("Using loop: " + sum);
        System.out.println("Results match: " + (formulaSum == sum) + "\n");
    }

    /**
     * Problem 3: Print multiplication table
     */
    public static void problem3() {
        System.out.println("Problem 3: Print multiplication table for 7");

        int number = 7;
        System.out.println("Multiplication table for " + number + ":");

        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " × " + i + " = " + (number * i));
        }
        System.out.println();
    }

    /**
     * Problem 4: Count even and odd numbers in array
     */
    public static void problem4() {
        System.out.println("Problem 4: Count even and odd numbers in array");

        int[] numbers = {12, 45, 23, 67, 89, 34, 56, 78, 90, 11};
        int evenCount = 0, oddCount = 0;

        System.out.println("Array: ");
        printArray(numbers);

        for (int num : numbers) {
            if (num % 2 == 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }

        System.out.println("Even numbers: " + evenCount);
        System.out.println("Odd numbers: " + oddCount + "\n");
    }

    /**
     * Problem 5: Find maximum and minimum in array
     */
    public static void problem5() {
        System.out.println("Problem 5: Find maximum and minimum in array");

        int[] numbers = {45, 23, 67, 12, 89, 34, 56, 78, 90, 11};
        int max = numbers[0];
        int min = numbers[0];

        System.out.println("Array: ");
        printArray(numbers);

        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }

        System.out.println("Maximum: " + max);
        System.out.println("Minimum: " + min);
        System.out.println("Range: " + (max - min) + "\n");
    }

    // ===== INTERMEDIATE PROBLEMS =====

    /**
     * Problem 6: Reverse an array
     */
    public static void problem6() {
        System.out.println("Problem 6: Reverse an array");

        int[] original = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int[] reversed = new int[original.length];

        System.out.println("Original array: ");
        printArray(original);

        // Reverse using loop
        for (int i = 0; i < original.length; i++) {
            reversed[i] = original[original.length - 1 - i];
        }

        System.out.println("Reversed array: ");
        printArray(reversed);
        System.out.println();
    }

    /**
     * Problem 7: Check if array is sorted
     */
    public static void problem7() {
        System.out.println("Problem 7: Check if array is sorted");

        int[] sortedArray = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int[] unsortedArray = {1, 3, 2, 5, 4, 7, 6, 9, 8, 10};

        System.out.println("Array 1: ");
        printArray(sortedArray);
        System.out.println("Is sorted: " + isSorted(sortedArray));

        System.out.println("Array 2: ");
        printArray(unsortedArray);
        System.out.println("Is sorted: " + isSorted(unsortedArray) + "\n");
    }

    /**
     * Problem 8: Find second largest element
     */
    public static void problem8() {
        System.out.println("Problem 8: Find second largest element");

        int[] numbers = {45, 23, 67, 12, 89, 34, 56, 78, 90, 11};
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        System.out.println("Array: ");
        printArray(numbers);

        for (int num : numbers) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num != largest) {
                secondLargest = num;
            }
        }

        System.out.println("Largest: " + largest);
        System.out.println("Second largest: " + secondLargest + "\n");
    }

    /**
     * Problem 9: Count frequency of each element
     */
    public static void problem9() {
        System.out.println("Problem 9: Count frequency of each element");

        int[] numbers = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5};
        int[] frequency = new int[6]; // Assuming numbers 1-5

        System.out.println("Array: ");
        printArray(numbers);

        for (int num : numbers) {
            frequency[num]++;
        }

        System.out.println("Frequency count:");
        for (int i = 1; i < frequency.length; i++) {
            if (frequency[i] > 0) {
                System.out.println("  " + i + ": " + frequency[i] + " times");
            }
        }
        System.out.println();
    }

    /**
     * Problem 10: Remove duplicates from array
     */
    public static void problem10() {
        System.out.println("Problem 10: Remove duplicates from array");

        int[] original = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5};
        System.out.println("Original array: ");
        printArray(original);

        // Count unique elements
        int uniqueCount = 0;
        for (int i = 0; i < original.length; i++) {
            boolean isUnique = true;
            for (int j = 0; j < i; j++) {
                if (original[i] == original[j]) {
                    isUnique = false;
                    break;
                }
            }
            if (isUnique) {
                uniqueCount++;
            }
        }

        // Create array with unique elements
        int[] unique = new int[uniqueCount];
        int index = 0;
        for (int i = 0; i < original.length; i++) {
            boolean isUnique = true;
            for (int j = 0; j < i; j++) {
                if (original[i] == original[j]) {
                    isUnique = false;
                    break;
                }
            }
            if (isUnique) {
                unique[index++] = original[i];
            }
        }

        System.out.println("Array without duplicates: ");
        printArray(unique);
        System.out.println();
    }

    // ===== ADVANCED PROBLEMS =====

    /**
     * Problem 11: Find pairs that sum to target
     */
    public static void problem11() {
        System.out.println("Problem 11: Find pairs that sum to target (target = 10)");

        int[] numbers = {2, 4, 3, 5, 7, 8, 9, 1, 6};
        int target = 10;

        System.out.println("Array: ");
        printArray(numbers);
        System.out.println("Target sum: " + target);

        System.out.println("Pairs that sum to " + target + ":");
        for (int i = 0; i < numbers.length; i++) {
            for (int j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] == target) {
                    System.out.println("  (" + numbers[i] + ", " + numbers[j] + ")");
                }
            }
        }
        System.out.println();
    }

    /**
     * Problem 12: Rotate array by k positions
     */
    public static void problem12() {
        System.out.println("Problem 12: Rotate array left by 3 positions");

        int[] original = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int k = 3;

        System.out.println("Original array: ");
        printArray(original);
        System.out.println("Rotate left by " + k + " positions:");

        // Create rotated array
        int[] rotated = new int[original.length];
        for (int i = 0; i < original.length; i++) {
            rotated[i] = original[(i + k) % original.length];
        }

        printArray(rotated);
        System.out.println();
    }

    /**
     * Problem 13: Find missing number in array (1 to n)
     */
    public static void problem13() {
        System.out.println("Problem 13: Find missing number in array (1 to 10)");

        int[] numbers = {1, 2, 4, 5, 6, 7, 8, 9, 10}; // Missing 3
        int n = 10;

        System.out.println("Array (1 to " + n + " with one missing): ");
        printArray(numbers);

        // Calculate expected sum
        int expectedSum = n * (n + 1) / 2;

        // Calculate actual sum
        int actualSum = 0;
        for (int num : numbers) {
            actualSum += num;
        }

        int missingNumber = expectedSum - actualSum;
        System.out.println("Missing number: " + missingNumber + "\n");
    }

    /**
     * Problem 14: Matrix operations (2D arrays)
     */
    public static void problem14() {
        System.out.println("Problem 14: Matrix operations - find transpose");

        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        System.out.println("Original matrix:");
        printMatrix(matrix);

        // Create transpose
        int[][] transpose = new int[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                transpose[j][i] = matrix[i][j];
            }
        }

        System.out.println("Transpose matrix:");
        printMatrix(transpose);

        // Check if symmetric
        boolean isSymmetric = true;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (matrix[i][j] != transpose[i][j]) {
                    isSymmetric = false;
                    break;
                }
            }
            if (!isSymmetric) break;
        }
        System.out.println("Is symmetric: " + isSymmetric + "\n");
    }

    /**
     * Problem 15: Complex pattern printing
     */
    public static void problem15() {
        System.out.println("Problem 15: Print diamond pattern");

        int n = 5;

        // Upper half
        for (int i = 1; i <= n; i++) {
            // Print spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // Lower half
        for (int i = n - 1; i >= 1; i--) {
            // Print spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        System.out.println();
    }

    // ===== HELPER METHODS =====

    /**
     * Check if array is sorted in ascending order
     */
    public static boolean isSorted(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }

    /**
     * Print 1D array
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
     * Print 2D matrix
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
}