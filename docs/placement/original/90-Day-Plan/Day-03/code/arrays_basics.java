/**
 * Day 3: Loops & Arrays - Complete Guide
 * File: arrays_basics.java
 * Purpose: Learn array fundamentals and operations
 *
 * Topics Covered:
 * - Array declaration and initialization
 * - Array access and modification
 * - Multi-dimensional arrays
 * - Array traversal and manipulation
 * - Common array patterns and operations
 */

public class arrays_basics {

    public static void main(String[] args) {
        System.out.println("=== ARRAYS BASICS - DAY 3 ===\n");

        // 1. ARRAY DECLARATION AND INITIALIZATION
        demonstrateArrayDeclaration();

        // 2. ARRAY ACCESS AND MODIFICATION
        demonstrateArrayAccess();

        // 3. ARRAY TRAVERSAL
        demonstrateArrayTraversal();

        // 4. ARRAY OPERATIONS
        demonstrateArrayOperations();

        // 5. MULTI-DIMENSIONAL ARRAYS
        demonstrateMultiDimensionalArrays();

        // 6. ARRAY COPYING AND CLONING
        demonstrateArrayCopying();

        // 7. PRACTICAL EXAMPLES
        demonstratePracticalExamples();
    }

    /**
     * Demonstrates array declaration and initialization
     */
    public static void demonstrateArrayDeclaration() {
        System.out.println("1. ARRAY DECLARATION AND INITIALIZATION");
        System.out.println("----------------------------------------");

        // Method 1: Declaration and then initialization
        int[] numbers1 = new int[5]; // Creates array of size 5, all elements 0
        System.out.println("Method 1 - Size 5, default values:");
        printArray(numbers1);

        // Method 2: Declaration with immediate initialization
        int[] numbers2 = {10, 20, 30, 40, 50};
        System.out.println("Method 2 - Direct initialization:");
        printArray(numbers2);

        // Method 3: Using new keyword with initialization
        int[] numbers3 = new int[]{1, 2, 3, 4, 5};
        System.out.println("Method 3 - new keyword with values:");
        printArray(numbers3);

        // Different data types
        String[] names = {"Alice", "Bob", "Charlie"};
        System.out.println("String array:");
        printArray(names);

        double[] prices = {19.99, 29.99, 39.99};
        System.out.println("Double array:");
        printArray(prices);

        System.out.println();
    }

    /**
     * Demonstrates array access and modification
     */
    public static void demonstrateArrayAccess() {
        System.out.println("2. ARRAY ACCESS AND MODIFICATION");
        System.out.println("---------------------------------");

        int[] numbers = {10, 20, 30, 40, 50};
        System.out.println("Original array:");
        printArray(numbers);

        // Accessing elements (0-based indexing)
        System.out.println("First element (index 0): " + numbers[0]);
        System.out.println("Last element (index " + (numbers.length - 1) + "): " + numbers[numbers.length - 1]);
        System.out.println("Middle element (index 2): " + numbers[2]);

        // Modifying elements
        numbers[0] = 100; // Change first element
        numbers[2] = 300; // Change middle element
        numbers[numbers.length - 1] = 500; // Change last element

        System.out.println("After modification:");
        printArray(numbers);

        // Bounds checking
        System.out.println("Array length: " + numbers.length);
        System.out.println("Valid indices: 0 to " + (numbers.length - 1));

        // Safe access with bounds checking
        int safeIndex = 10;
        if (safeIndex >= 0 && safeIndex < numbers.length) {
            System.out.println("Safe access at index " + safeIndex + ": " + numbers[safeIndex]);
        } else {
            System.out.println("Index " + safeIndex + " is out of bounds!");
        }

        System.out.println();
    }

    /**
     * Demonstrates array traversal
     */
    public static void demonstrateArrayTraversal() {
        System.out.println("3. ARRAY TRAVERSAL");
        System.out.println("------------------");

        int[] numbers = {5, 10, 15, 20, 25, 30};

        // Traditional for loop
        System.out.println("Traditional for loop:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();

        // Enhanced for-each loop
        System.out.println("Enhanced for-each loop:");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Reverse traversal
        System.out.println("Reverse traversal:");
        for (int i = numbers.length - 1; i >= 0; i--) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();

        // Every other element
        System.out.println("Every other element (even indices):");
        for (int i = 0; i < numbers.length; i += 2) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();

        System.out.println();
    }

    /**
     * Demonstrates basic array operations
     */
    public static void demonstrateArrayOperations() {
        System.out.println("4. ARRAY OPERATIONS");
        System.out.println("-------------------");

        int[] numbers = {12, 45, 23, 67, 89, 34};

        // Finding maximum
        int max = numbers[0];
        for (int num : numbers) {
            if (num > max) {
                max = num;
            }
        }
        System.out.println("Maximum value: " + max);

        // Finding minimum
        int min = numbers[0];
        for (int num : numbers) {
            if (num < min) {
                min = num;
            }
        }
        System.out.println("Minimum value: " + min);

        // Calculating sum
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        System.out.println("Sum of all elements: " + sum);

        // Calculating average
        double average = (double) sum / numbers.length;
        System.out.println("Average: " + String.format("%.2f", average));

        // Counting elements meeting criteria
        int evenCount = 0;
        int oddCount = 0;
        for (int num : numbers) {
            if (num % 2 == 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
        System.out.println("Even numbers: " + evenCount);
        System.out.println("Odd numbers: " + oddCount);

        System.out.println();
    }

    /**
     * Demonstrates multi-dimensional arrays
     */
    public static void demonstrateMultiDimensionalArrays() {
        System.out.println("5. MULTI-DIMENSIONAL ARRAYS");
        System.out.println("----------------------------");

        // 2D Array declaration and initialization
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        System.out.println("2D Array (3x3 matrix):");
        print2DArray(matrix);

        // Accessing 2D array elements
        System.out.println("Element at [0][0]: " + matrix[0][0]);
        System.out.println("Element at [1][2]: " + matrix[1][2]);
        System.out.println("Element at [2][1]: " + matrix[2][1]);

        // Modifying 2D array
        matrix[1][1] = 99;
        System.out.println("After modifying [1][1] to 99:");
        print2DArray(matrix);

        // Jagged arrays (different row lengths)
        int[][] jaggedArray = {
            {1, 2},
            {3, 4, 5},
            {6, 7, 8, 9}
        };

        System.out.println("Jagged array:");
        print2DArray(jaggedArray);

        // 3D Array example
        int[][][] cube = new int[2][3][4]; // 2 layers, 3 rows, 4 columns
        System.out.println("3D Array dimensions: " + cube.length + "x" + cube[0].length + "x" + cube[0][0].length);

        System.out.println();
    }

    /**
     * Demonstrates array copying and cloning
     */
    public static void demonstrateArrayCopying() {
        System.out.println("6. ARRAY COPYING AND CLONING");
        System.out.println("-----------------------------");

        int[] original = {10, 20, 30, 40, 50};
        System.out.println("Original array:");
        printArray(original);

        // Method 1: Manual copying
        int[] copy1 = new int[original.length];
        for (int i = 0; i < original.length; i++) {
            copy1[i] = original[i];
        }
        System.out.println("Manual copy:");
        printArray(copy1);

        // Method 2: Using clone()
        int[] copy2 = original.clone();
        System.out.println("Using clone():");
        printArray(copy2);

        // Method 3: Using System.arraycopy()
        int[] copy3 = new int[original.length];
        System.arraycopy(original, 0, copy3, 0, original.length);
        System.out.println("Using System.arraycopy():");
        printArray(copy3);

        // Method 4: Using Arrays.copyOf()
        int[] copy4 = java.util.Arrays.copyOf(original, original.length);
        System.out.println("Using Arrays.copyOf():");
        printArray(copy4);

        // Partial copying
        int[] partialCopy = new int[3];
        System.arraycopy(original, 1, partialCopy, 0, 3); // Copy elements 1,2,3
        System.out.println("Partial copy (elements 1-3):");
        printArray(partialCopy);

        System.out.println();
    }

    /**
     * Practical examples combining array concepts
     */
    public static void demonstratePracticalExamples() {
        System.out.println("7. PRACTICAL EXAMPLES");
        System.out.println("---------------------");

        // Student grades analysis
        int[] grades = {85, 92, 78, 96, 88, 76, 94, 89, 91, 83};

        System.out.println("Student Grades Analysis:");
        System.out.println("Grades: ");
        printArray(grades);

        // Calculate statistics
        int total = 0, highest = grades[0], lowest = grades[0];
        int passCount = 0, distinctionCount = 0;

        for (int grade : grades) {
            total += grade;
            if (grade > highest) highest = grade;
            if (grade < lowest) lowest = grade;
            if (grade >= 40) passCount++;
            if (grade >= 90) distinctionCount++;
        }

        System.out.println("Total: " + total);
        System.out.println("Average: " + String.format("%.2f", (double)total/grades.length));
        System.out.println("Highest: " + highest);
        System.out.println("Lowest: " + lowest);
        System.out.println("Pass rate: " + passCount + "/" + grades.length + " (" +
                          String.format("%.1f", (double)passCount/grades.length*100) + "%)");
        System.out.println("Distinctions: " + distinctionCount);

        // Grade distribution
        int[] distribution = new int[5]; // A, B, C, D, F
        for (int grade : grades) {
            if (grade >= 90) distribution[0]++;      // A
            else if (grade >= 80) distribution[1]++; // B
            else if (grade >= 70) distribution[2]++; // C
            else if (grade >= 60) distribution[3]++; // D
            else distribution[4]++;                  // F
        }

        System.out.println("Grade Distribution:");
        System.out.println("A (90-100): " + distribution[0]);
        System.out.println("B (80-89): " + distribution[1]);
        System.out.println("C (70-79): " + distribution[2]);
        System.out.println("D (60-69): " + distribution[3]);
        System.out.println("F (0-59): " + distribution[4]);

        System.out.println();
    }

    // Helper methods for printing arrays

    /**
     * Prints 1D integer array
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
     * Prints 1D String array
     */
    public static void printArray(String[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print("\"" + arr[i] + "\"");
            if (i < arr.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
    }

    /**
     * Prints 1D double array
     */
    public static void printArray(double[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(String.format("%.2f", arr[i]));
            if (i < arr.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
    }

    /**
     * Prints 2D integer array
     */
    public static void print2DArray(int[][] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print("[");
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j]);
                if (j < arr[i].length - 1) {
                    System.out.print(", ");
                }
            }
            System.out.println("]");
        }
    }
}