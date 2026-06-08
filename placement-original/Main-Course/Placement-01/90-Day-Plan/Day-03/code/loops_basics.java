/**
 * Day 3: Loops & Arrays - Complete Guide
 * File: loops_basics.java
 * Purpose: Master all loop types and control statements
 *
 * Topics Covered:
 * - for loops (traditional counting and iteration)
 * - while loops (conditional iteration)
 * - do-while loops (execute at least once)
 * - Enhanced for-each loops (simplified array traversal)
 * - Loop control statements (break, continue, labels)
 */

public class loops_basics {

    public static void main(String[] args) {
        System.out.println("=== LOOPS BASICS - DAY 3 ===\n");

        // 1. FOR LOOPS
        demonstrateForLoops();

        // 2. WHILE LOOPS
        demonstrateWhileLoops();

        // 3. DO-WHILE LOOPS
        demonstrateDoWhileLoops();

        // 4. ENHANCED FOR LOOPS
        demonstrateEnhancedForLoops();

        // 5. LOOP CONTROL STATEMENTS
        demonstrateLoopControl();

        // 6. NESTED LOOPS
        demonstrateNestedLoops();

        // 7. PRACTICAL EXAMPLES
        demonstratePracticalExamples();
    }

    /**
     * Demonstrates traditional for loops
     */
    public static void demonstrateForLoops() {
        System.out.println("1. FOR LOOPS");
        System.out.println("-------------");

        // Basic counting loop
        System.out.println("Basic counting:");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();

        // Reverse counting
        System.out.println("Reverse counting:");
        for (int i = 10; i >= 1; i--) {
            System.out.print(i + " ");
        }
        System.out.println();

        // Step counting
        System.out.println("Step counting (by 2):");
        for (int i = 0; i <= 10; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println();

        // Multiple variables
        System.out.println("Multiple variables:");
        for (int i = 0, j = 10; i <= 10 && j >= 0; i++, j--) {
            System.out.print("(" + i + "," + j + ") ");
        }
        System.out.println("\n");
    }

    /**
     * Demonstrates while loops
     */
    public static void demonstrateWhileLoops() {
        System.out.println("2. WHILE LOOPS");
        System.out.println("--------------");

        // Basic while loop
        System.out.println("Basic while loop:");
        int counter = 1;
        while (counter <= 5) {
            System.out.print(counter + " ");
            counter++;
        }
        System.out.println();

        // While loop with condition
        System.out.println("While loop with user input simulation:");
        int number = 1;
        while (number <= 10) {
            if (number % 2 == 0) {
                System.out.print(number + " ");
            }
            number++;
        }
        System.out.println();

        // While loop for factorial
        System.out.println("Factorial calculation:");
        int n = 5;
        int factorial = 1;
        int temp = n;
        while (temp > 0) {
            factorial *= temp;
            temp--;
        }
        System.out.println(n + "! = " + factorial + "\n");
    }

    /**
     * Demonstrates do-while loops
     */
    public static void demonstrateDoWhileLoops() {
        System.out.println("3. DO-WHILE LOOPS");
        System.out.println("-----------------");

        // Basic do-while (executes at least once)
        System.out.println("Do-while (executes at least once):");
        int num = 10;
        do {
            System.out.print(num + " ");
            num++;
        } while (num <= 5); // Condition is false, but loop runs once
        System.out.println();

        // Menu simulation
        System.out.println("Menu simulation:");
        int choice = 0;
        do {
            System.out.println("1. Print Hello");
            System.out.println("2. Print World");
            System.out.println("3. Exit");
            System.out.print("Enter choice (1-3): ");

            // Simulate user input (in real code, use Scanner)
            choice = (int)(Math.random() * 3) + 1;
            System.out.println("Simulated choice: " + choice);

            switch (choice) {
                case 1:
                    System.out.println("Hello!");
                    break;
                case 2:
                    System.out.println("World!");
                    break;
                case 3:
                    System.out.println("Exiting...");
                    break;
            }
        } while (choice != 3);
        System.out.println();
    }

    /**
     * Demonstrates enhanced for-each loops
     */
    public static void demonstrateEnhancedForLoops() {
        System.out.println("4. ENHANCED FOR LOOPS");
        System.out.println("---------------------");

        // Array traversal
        int[] numbers = {10, 20, 30, 40, 50};
        System.out.println("Array elements:");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();

        // String array
        String[] fruits = {"Apple", "Banana", "Orange", "Grape"};
        System.out.println("Fruits:");
        for (String fruit : fruits) {
            System.out.print(fruit + " ");
        }
        System.out.println();

        // Sum calculation
        int[] scores = {85, 92, 78, 96, 88};
        int total = 0;
        for (int score : scores) {
            total += score;
        }
        System.out.println("Total score: " + total);
        System.out.println("Average: " + (total / (double)scores.length) + "\n");
    }

    /**
     * Demonstrates loop control statements
     */
    public static void demonstrateLoopControl() {
        System.out.println("5. LOOP CONTROL STATEMENTS");
        System.out.println("--------------------------");

        // BREAK statement
        System.out.println("Break example (stop at 5):");
        for (int i = 1; i <= 10; i++) {
            if (i == 6) {
                break; // Exit loop when i equals 6
            }
            System.out.print(i + " ");
        }
        System.out.println();

        // CONTINUE statement
        System.out.println("Continue example (skip even numbers):");
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) {
                continue; // Skip even numbers
            }
            System.out.print(i + " ");
        }
        System.out.println();

        // LABELED BREAK
        System.out.println("Labeled break example:");
        outer: for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    break outer; // Break out of both loops
                }
                System.out.print("(" + i + "," + j + ") ");
            }
            System.out.println();
        }
        System.out.println();
    }

    /**
     * Demonstrates nested loops
     */
    public static void demonstrateNestedLoops() {
        System.out.println("6. NESTED LOOPS");
        System.out.println("---------------");

        // Multiplication table
        System.out.println("Multiplication table (1-5):");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= 5; j++) {
                System.out.printf("%2d ", i * j);
            }
            System.out.println();
        }
        System.out.println();

        // Pattern printing
        System.out.println("Triangle pattern:");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        System.out.println();
    }

    /**
     * Practical examples combining concepts
     */
    public static void demonstratePracticalExamples() {
        System.out.println("7. PRACTICAL EXAMPLES");
        System.out.println("---------------------");

        // Prime number check
        System.out.println("Prime numbers between 1-20:");
        for (int num = 2; num <= 20; num++) {
            boolean isPrime = true;
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                System.out.print(num + " ");
            }
        }
        System.out.println();

        // Fibonacci series
        System.out.println("Fibonacci series (first 10 numbers):");
        int a = 0, b = 1;
        System.out.print(a + " " + b + " ");
        for (int i = 3; i <= 10; i++) {
            int next = a + b;
            System.out.print(next + " ");
            a = b;
            b = next;
        }
        System.out.println();

        // Number pattern
        System.out.println("Number pattern:");
        for (int i = 1; i <= 4; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
        System.out.println();
    }
}