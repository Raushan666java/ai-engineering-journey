```java
/**
 * Java Basics - Comprehensive Implementation
 * Topic: Variables, Data Types, Control Structures, Arrays
 * Difficulty: Beginner to Intermediate
 * Estimated Time: 45 minutes
 */

import java.util.Arrays;
import java.util.Scanner;

public class JavaBasicsComplete {

    // ==========================================
    // 1. DATA TYPES AND VARIABLES
    // ==========================================

    /**
     * Demonstrates all primitive data types and their usage
     */
    public static void demonstrateDataTypes() {
        System.out.println("=== DATA TYPES DEMONSTRATION ===");

        // Integer types
        byte byteVar = 127;           // 8-bit, -128 to 127
        short shortVar = 32767;       // 16-bit, -32,768 to 32,767
        int intVar = 2147483647;      // 32-bit, -2^31 to 2^31-1
        long longVar = 9223372036854775807L; // 64-bit

        // Floating point types
        float floatVar = 3.14159f;    // 32-bit
        double doubleVar = 3.141592653589793; // 64-bit

        // Character and boolean
        char charVar = 'A';           // 16-bit Unicode
        boolean boolVar = true;

        // Display ranges and values
        System.out.println("Byte: " + byteVar + " (Range: " + Byte.MIN_VALUE + " to " + Byte.MAX_VALUE + ")");
        System.out.println("Short: " + shortVar + " (Range: " + Short.MIN_VALUE + " to " + Short.MAX_VALUE + ")");
        System.out.println("Int: " + intVar + " (Range: " + Integer.MIN_VALUE + " to " + Integer.MAX_VALUE + ")");
        System.out.println("Long: " + longVar + " (Range: " + Long.MIN_VALUE + " to " + Long.MAX_VALUE + ")");
        System.out.println("Float: " + floatVar + " (Range: " + Float.MIN_VALUE + " to " + Float.MAX_VALUE + ")");
        System.out.println("Double: " + doubleVar + " (Range: " + Double.MIN_VALUE + " to " + Double.MAX_VALUE + ")");
        System.out.println("Char: " + charVar + " (Unicode: " + (int)charVar + ")");
        System.out.println("Boolean: " + boolVar);
        System.out.println();
    }

    /**
     * Demonstrates type casting and conversion
     */
    public static void demonstrateTypeCasting() {
        System.out.println("=== TYPE CASTING DEMONSTRATION ===");

        // Widening casting (automatic)
        int intVal = 100;
        long longVal = intVal;        // int to long
        double doubleVal = intVal;    // int to double
        System.out.println("Widening: int " + intVal + " -> long " + longVal + " -> double " + doubleVal);

        // Narrowing casting (manual)
        double pi = 3.14159;
        int intPi = (int) pi;         // double to int (loses precision)
        System.out.println("Narrowing: double " + pi + " -> int " + intPi);

        // String conversion
        String strNum = "123";
        int parsedInt = Integer.parseInt(strNum);
        double parsedDouble = Double.parseDouble("3.14");
        System.out.println("String to int: \"" + strNum + "\" -> " + parsedInt);
        System.out.println("String to double: \"3.14\" -> " + parsedDouble);
        System.out.println();
    }

    // ==========================================
    // 2. CONTROL STRUCTURES
    // ==========================================

    /**
     * Demonstrates if-else statements with various conditions
     */
    public static void demonstrateIfElse() {
        System.out.println("=== IF-ELSE DEMONSTRATION ===");

        int score = 85;

        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else if (score >= 60) {
            System.out.println("Grade: D");
        } else {
            System.out.println("Grade: F");
        }

        // Ternary operator
        String result = (score >= 60) ? "Pass" : "Fail";
        System.out.println("Result: " + result);
        System.out.println();
    }

    /**
     * Demonstrates switch statements
     */
    public static void demonstrateSwitch() {
        System.out.println("=== SWITCH DEMONSTRATION ===");

        int day = 3;
        String dayName;

        switch (day) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6:
                dayName = "Saturday";
                break;
            case 7:
                dayName = "Sunday";
                break;
            default:
                dayName = "Invalid day";
                break;
        }

        System.out.println("Day " + day + " is " + dayName);

        // Switch with strings (Java 7+)
        String fruit = "apple";
        switch (fruit) {
            case "apple":
                System.out.println("Apple is red");
                break;
            case "banana":
                System.out.println("Banana is yellow");
                break;
            default:
                System.out.println("Unknown fruit");
        }
        System.out.println();
    }

    /**
     * Demonstrates loops: for, while, do-while
     */
    public static void demonstrateLoops() {
        System.out.println("=== LOOPS DEMONSTRATION ===");

        // For loop
        System.out.println("For loop:");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();

        // Enhanced for loop (for-each)
        System.out.println("Enhanced for loop:");
        int[] numbers = {10, 20, 30, 40, 50};
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();

        // While loop
        System.out.println("While loop:");
        int counter = 1;
        while (counter <= 5) {
            System.out.print(counter + " ");
            counter++;
        }
        System.out.println();

        // Do-while loop
        System.out.println("Do-while loop:");
        counter = 1;
        do {
            System.out.print(counter + " ");
            counter++;
        } while (counter <= 5);
        System.out.println();

        // Break and continue
        System.out.println("Break and continue:");
        for (int i = 1; i <= 10; i++) {
            if (i == 3) continue;  // Skip 3
            if (i == 8) break;     // Stop at 8
            System.out.print(i + " ");
        }
        System.out.println("\n");
    }

    // ==========================================
    // 3. ARRAYS
    // ==========================================

    /**
     * Demonstrates array declaration, initialization, and operations
     */
    public static void demonstrateArrays() {
        System.out.println("=== ARRAYS DEMONSTRATION ===");

        // Array declaration and initialization
        int[] arr1 = new int[5];              // Declaration with size
        int[] arr2 = {1, 2, 3, 4, 5};        // Initialization with values
        int[] arr3 = new int[]{10, 20, 30};  // Anonymous array

        // Multi-dimensional arrays
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // Array operations
        System.out.println("Array length: " + arr2.length);
        System.out.println("Array elements: " + Arrays.toString(arr2));

        // Array copying
        int[] copiedArray = Arrays.copyOf(arr2, arr2.length);
        System.out.println("Copied array: " + Arrays.toString(copiedArray));

        // Array sorting
        int[] unsorted = {5, 2, 8, 1, 9};
        Arrays.sort(unsorted);
        System.out.println("Sorted array: " + Arrays.toString(unsorted));

        // Array searching (binary search requires sorted array)
        int index = Arrays.binarySearch(unsorted, 8);
        System.out.println("Index of 8: " + index);

        // Multi-dimensional array access
        System.out.println("Matrix[1][2]: " + matrix[1][2]);
        System.out.println();
    }

    /**
     * Array manipulation utilities
     */
    public static class ArrayUtils {

        /**
         * Finds maximum element in array
         */
        public static int findMax(int[] arr) {
            if (arr == null || arr.length == 0) {
                throw new IllegalArgumentException("Array cannot be null or empty");
            }
            int max = arr[0];
            for (int i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            return max;
        }

        /**
         * Finds minimum element in array
         */
        public static int findMin(int[] arr) {
            if (arr == null || arr.length == 0) {
                throw new IllegalArgumentException("Array cannot be null or empty");
            }
            int min = arr[0];
            for (int i = 1; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            return min;
        }

        /**
         * Calculates sum of array elements
         */
        public static int calculateSum(int[] arr) {
            int sum = 0;
            for (int num : arr) {
                sum += num;
            }
            return sum;
        }

        /**
         * Calculates average of array elements
         */
        public static double calculateAverage(int[] arr) {
            if (arr.length == 0) return 0.0;
            return (double) calculateSum(arr) / arr.length;
        }

        /**
         * Reverses array in place
         */
        public static void reverseArray(int[] arr) {
            int start = 0;
            int end = arr.length - 1;
            while (start < end) {
                int temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;
                start++;
                end--;
            }
        }

        /**
         * Checks if array is sorted in ascending order
         */
        public static boolean isSorted(int[] arr) {
            for (int i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    return false;
                }
            }
            return true;
        }
    }

    // ==========================================
    // 4. STRING OPERATIONS
    // ==========================================

    /**
     * Demonstrates string operations and methods
     */
    public static void demonstrateStrings() {
        System.out.println("=== STRINGS DEMONSTRATION ===");

        String str1 = "Hello";
        String str2 = "World";
        String str3 = str1 + " " + str2; // Concatenation

        System.out.println("String concatenation: " + str3);
        System.out.println("String length: " + str3.length());
        System.out.println("Uppercase: " + str3.toUpperCase());
        System.out.println("Lowercase: " + str3.toLowerCase());
        System.out.println("Substring (0,5): " + str3.substring(0, 5));
        System.out.println("Character at index 1: " + str3.charAt(1));
        System.out.println("Index of 'o': " + str3.indexOf('o'));
        System.out.println("Last index of 'o': " + str3.lastIndexOf('o'));
        System.out.println("Starts with 'Hello': " + str3.startsWith("Hello"));
        System.out.println("Ends with 'World': " + str3.endsWith("World"));
        System.out.println("Contains 'lo': " + str3.contains("lo"));
        System.out.println("Replace 'l' with 'x': " + str3.replace('l', 'x'));

        // String comparison
        String s1 = "hello";
        String s2 = "HELLO";
        System.out.println("s1.equals(s2): " + s1.equals(s2));
        System.out.println("s1.equalsIgnoreCase(s2): " + s1.equalsIgnoreCase(s2));

        // String splitting
        String csv = "apple,banana,orange";
        String[] fruits = csv.split(",");
        System.out.println("Split result: " + Arrays.toString(fruits));

        // StringBuilder for efficient string manipulation
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            sb.append(i).append(" ");
        }
        System.out.println("StringBuilder result: " + sb.toString().trim());
        System.out.println();
    }

    // ==========================================
    // 5. INPUT/OUTPUT OPERATIONS
    // ==========================================

    /**
     * Demonstrates console input/output
     */
    public static void demonstrateInputOutput() {
        System.out.println("=== INPUT/OUTPUT DEMONSTRATION ===");

        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Enter your name: ");
            String name = scanner.nextLine();

            System.out.print("Enter your age: ");
            int age = scanner.nextInt();

            System.out.print("Enter your height (in cm): ");
            double height = scanner.nextDouble();

            System.out.println("\n=== USER INFORMATION ===");
            System.out.println("Name: " + name);
            System.out.println("Age: " + age);
            System.out.println("Height: " + height + " cm");

            // Formatted output
            System.out.printf("Formatted: Name=%s, Age=%d, Height=%.2f cm%n", name, age, height);

        } catch (Exception e) {
            System.out.println("Error reading input: " + e.getMessage());
        } finally {
            scanner.close();
        }
        System.out.println();
    }

    // ==========================================
    // 6. PRACTICAL EXAMPLES
    // ==========================================

    /**
     * Calculates factorial using different approaches
     */
    public static long factorial(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("Factorial is not defined for negative numbers");
        }
        if (n == 0 || n == 1) return 1;

        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    /**
     * Checks if a number is prime
     */
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;

        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }

    /**
     * Generates Fibonacci sequence
     */
    public static int[] generateFibonacci(int n) {
        if (n <= 0) return new int[0];
        if (n == 1) return new int[]{0};
        if (n == 2) return new int[]{0, 1};

        int[] fib = new int[n];
        fib[0] = 0;
        fib[1] = 1;

        for (int i = 2; i < n; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }
        return fib;
    }

    /**
     * Demonstrates array processing with practical examples
     */
    public static void demonstrateArrayProcessing() {
        System.out.println("=== ARRAY PROCESSING EXAMPLES ===");

        int[] numbers = {12, 45, 23, 67, 89, 34, 56, 78, 90, 11};

        System.out.println("Original array: " + Arrays.toString(numbers));

        // Find max and min
        int max = ArrayUtils.findMax(numbers);
        int min = ArrayUtils.findMin(numbers);
        System.out.println("Maximum: " + max + ", Minimum: " + min);

        // Calculate statistics
        int sum = ArrayUtils.calculateSum(numbers);
        double average = ArrayUtils.calculateAverage(numbers);
        System.out.println("Sum: " + sum + ", Average: " + String.format("%.2f", average));

        // Check if sorted
        boolean sorted = ArrayUtils.isSorted(numbers);
        System.out.println("Is sorted: " + sorted);

        // Sort and check again
        Arrays.sort(numbers);
        System.out.println("Sorted array: " + Arrays.toString(numbers));
        System.out.println("Is sorted now: " + ArrayUtils.isSorted(numbers));

        // Reverse array
        ArrayUtils.reverseArray(numbers);
        System.out.println("Reversed array: " + Arrays.toString(numbers));
        System.out.println();
    }

    // ==========================================
    // MAIN METHOD - RUN ALL DEMONSTRATIONS
    // ==========================================

    public static void main(String[] args) {
        System.out.println("==========================================");
        System.out.println("        JAVA BASICS COMPREHENSIVE GUIDE");
        System.out.println("==========================================\n");

        try {
            // Core concepts
            demonstrateDataTypes();
            demonstrateTypeCasting();
            demonstrateIfElse();
            demonstrateSwitch();
            demonstrateLoops();
            demonstrateArrays();
            demonstrateStrings();

            // Practical examples
            demonstrateArrayProcessing();

            // Factorial examples
            System.out.println("=== FACTORIAL EXAMPLES ===");
            for (int i = 0; i <= 10; i++) {
                System.out.println("Factorial of " + i + " = " + factorial(i));
            }
            System.out.println();

            // Prime number examples
            System.out.println("=== PRIME NUMBER EXAMPLES ===");
            System.out.print("Prime numbers between 1-50: ");
            for (int i = 1; i <= 50; i++) {
                if (isPrime(i)) {
                    System.out.print(i + " ");
                }
            }
            System.out.println("\n");

            // Fibonacci examples
            System.out.println("=== FIBONACCI EXAMPLES ===");
            int[] fib10 = generateFibonacci(10);
            System.out.println("First 10 Fibonacci numbers: " + Arrays.toString(fib10));

            int[] fib20 = generateFibonacci(20);
            System.out.println("First 20 Fibonacci numbers: " + Arrays.toString(fib20));
            System.out.println();

            // Input/Output demonstration (commented out for automated testing)
            // demonstrateInputOutput();

            System.out.println("==========================================");
            System.out.println("        ALL DEMONSTRATIONS COMPLETED");
            System.out.println("==========================================");

        } catch (Exception e) {
            System.err.println("An error occurred: " + e.getMessage());
            e.printStackTrace();
        }
    }
}

/*
 * COMPILATION AND RUNNING INSTRUCTIONS:
 * ====================================
 *
 * 1. Save this file as: JavaBasicsComplete.java
 * 2. Compile: javac JavaBasicsComplete.java
 * 3. Run: java JavaBasicsComplete
 *
 * EXPECTED OUTPUT:
 * ===============
 * The program will demonstrate all Java basics concepts including:
 * - Data types and their ranges
 * - Type casting (widening and narrowing)
 * - Control structures (if-else, switch, loops)
 * - Array operations and utilities
 * - String manipulation
 * - Practical algorithms (factorial, prime checking, Fibonacci)
 * - Array processing examples
 *
 * KEY LEARNING POINTS:
 * ===================
 * 1. Understanding primitive data types and their limitations
 * 2. Proper use of control structures for decision making
 * 3. Array declaration, initialization, and manipulation
 * 4. String operations and efficient string building
 * 5. Input validation and error handling
 * 6. Algorithm implementation with proper edge case handling
 *
 * INTERVIEW TIPS:
 * ==============
 * - Know the ranges of all primitive data types
 * - Understand when to use different loop types
 * - Be familiar with Arrays class utility methods
 * - Know the difference between == and .equals() for strings
 * - Understand time complexity of array operations
 * - Practice implementing common algorithms from scratch
 */