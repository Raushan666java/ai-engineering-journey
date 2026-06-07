/**
 * COMPLETE LOOPS GUIDE - DAY 3
 * Master all loop types in Java
 * 
 * Topics Covered:
 * 1. For Loop - All variations
 * 2. While Loop - Condition-based iteration
 * 3. Do-While Loop - Execute-first loops
 * 4. Loop Control - break, continue
 * 5. Nested Loops - Loops within loops
 * 6. Enhanced For Loop - Simplified iteration
 * 7. Common Loop Patterns
 * 8. Loop Optimization
 */

public class LoopsComplete {
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════╗");
        System.out.println("║   COMPLETE LOOPS GUIDE - DAY 3     ║");
        System.out.println("║   Master All Loop Types            ║");
        System.out.println("╚════════════════════════════════════╝\n");
        
        section1_ForLoopBasics();
        section2_WhileLoop();
        section3_DoWhileLoop();
        section4_LoopControl();
        section5_NestedLoops();
        section6_EnhancedForLoop();
        section7_CommonPatterns();
        section8_LoopOptimization();
    }
    
    // ============================================
    // SECTION 1: FOR LOOP BASICS
    // ============================================
    static void section1_ForLoopBasics() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 1: FOR LOOP BASICS");
        System.out.println("=".repeat(50));
        
        // 1.1: Basic for loop - Print 1 to 10
        System.out.println("\n1.1: Print numbers 1 to 10");
        for (int i = 1; i <= 10; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // 1.2: Reverse iteration - Print 10 to 1
        System.out.println("\n1.2: Print numbers 10 to 1 (reverse)");
        for (int i = 10; i >= 1; i--) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // 1.3: Skip values - Even numbers
        System.out.println("\n1.3: Print even numbers 0 to 20");
        for (int i = 0; i <= 20; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // 1.4: Sum of first 100 numbers
        System.out.println("\n1.4: Sum of first 100 natural numbers");
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            sum += i;
        }
        System.out.println("Sum: " + sum);
        
        // 1.5: Factorial calculation
        System.out.println("\n1.5: Factorial of 10");
        long factorial = 1;
        for (int i = 1; i <= 10; i++) {
            factorial *= i;
        }
        System.out.println("10! = " + factorial);
        
        // 1.6: Multiplication table
        System.out.println("\n1.6: Multiplication table of 7");
        for (int i = 1; i <= 10; i++) {
            System.out.println("7 x " + i + " = " + (7 * i));
        }
        
        // 1.7: Print squares
        System.out.println("\n1.7: Squares of first 10 numbers");
        for (int i = 1; i <= 10; i++) {
            System.out.println(i + "² = " + (i * i));
        }
        
        // 1.8: String iteration
        System.out.println("\n1.8: Iterate through string");
        String text = "Java";
        for (int i = 0; i < text.length(); i++) {
            System.out.println("Character at index " + i + ": " + text.charAt(i));
        }
    }
    
    // ============================================
    // SECTION 2: WHILE LOOP
    // ============================================
    static void section2_WhileLoop() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 2: WHILE LOOP");
        System.out.println("=".repeat(50));
        
        // 2.1: Basic while loop
        System.out.println("\n2.1: Print 1 to 5 using while");
        int i = 1;
        while (i <= 5) {
            System.out.print(i + " ");
            i++;
        }
        System.out.println();
        
        // 2.2: Sum until condition is false
        System.out.println("\n2.2: Sum numbers until total exceeds 100");
        int total = 0;
        int num = 1;
        while (total <= 100) {
            total += num;
            num++;
        }
        System.out.println("Final sum: " + total + ", Numbers added: " + (num - 1));
        
        // 2.3: Count digits in a number
        System.out.println("\n2.3: Count digits in 123456");
        int number = 123456;
        int count = 0;
        while (number > 0) {
            number /= 10;
            count++;
        }
        System.out.println("Number of digits: " + count);
        
        // 2.4: Reverse a number
        System.out.println("\n2.4: Reverse number 12345");
        int original = 12345;
        int reversed = 0;
        while (original > 0) {
            int digit = original % 10;
            reversed = reversed * 10 + digit;
            original /= 10;
        }
        System.out.println("Reversed: " + reversed);
        
        // 2.5: Find GCD using Euclidean algorithm
        System.out.println("\n2.5: Find GCD of 48 and 18");
        int a = 48, b = 18;
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        System.out.println("GCD: " + a);
        
        // 2.6: Fibonacci sequence
        System.out.println("\n2.6: Fibonacci sequence (first 10 terms)");
        int first = 0, second = 1;
        int counter = 1;
        while (counter <= 10) {
            System.out.print(first + " ");
            int next = first + second;
            first = second;
            second = next;
            counter++;
        }
        System.out.println();
    }
    
    // ============================================
    // SECTION 3: DO-WHILE LOOP
    // ============================================
    static void section3_DoWhileLoop() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 3: DO-WHILE LOOP");
        System.out.println("=".repeat(50));
        
        // 3.1: Basic do-while - executes at least once
        System.out.println("\n3.1: Do-while executes at least once");
        int x = 10;
        do {
            System.out.println("Executed even though x >= 10: x = " + x);
            x++;
        } while (x < 10);
        
        // 3.2: Menu-driven structure
        System.out.println("\n3.2: Menu-driven pattern (simulated)");
        int choice = 1;
        do {
            System.out.println("Choice: " + choice);
            choice++;
        } while (choice <= 3);
        
        // 3.3: Sum of digits using do-while
        System.out.println("\n3.3: Sum of digits in 9876");
        int n = 9876;
        int digitSum = 0;
        do {
            digitSum += n % 10;
            n /= 10;
        } while (n > 0);
        System.out.println("Sum of digits: " + digitSum);
        
        // 3.4: Print reverse
        System.out.println("\n3.4: Print 5 to 1 using do-while");
        int val = 5;
        do {
            System.out.print(val + " ");
            val--;
        } while (val > 0);
        System.out.println();
        
        // 3.5: Power calculation
        System.out.println("\n3.5: Calculate 2^8 using do-while");
        int base = 2, exponent = 8;
        long result = 1;
        int exp = exponent;
        do {
            result *= base;
            exp--;
        } while (exp > 0);
        System.out.println("2^8 = " + result);
    }
    
    // ============================================
    // SECTION 4: LOOP CONTROL (break, continue)
    // ============================================
    static void section4_LoopControl() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 4: LOOP CONTROL STATEMENTS");
        System.out.println("=".repeat(50));
        
        // 4.1: Break - exit loop early
        System.out.println("\n4.1: Find first number divisible by both 3 and 7");
        for (int i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 7 == 0) {
                System.out.println("Found: " + i);
                break;  // Exit loop immediately
            }
        }
        
        // 4.2: Continue - skip current iteration
        System.out.println("\n4.2: Print odd numbers 1-20 (skip even)");
        for (int i = 1; i <= 20; i++) {
            if (i % 2 == 0) continue;  // Skip even numbers
            System.out.print(i + " ");
        }
        System.out.println();
        
        // 4.3: Break in while loop
        System.out.println("\n4.3: Search for value 50 in range");
        int search = 1;
        while (search <= 100) {
            if (search == 50) {
                System.out.println("Found at: " + search);
                break;
            }
            search++;
        }
        
        // 4.4: Continue in while loop
        System.out.println("\n4.4: Print numbers divisible by 5 (skip others)");
        int idx = 1;
        while (idx <= 50) {
            if (idx % 5 != 0) {
                idx++;
                continue;
            }
            System.out.print(idx + " ");
            idx++;
        }
        System.out.println();
        
        // 4.5: Labeled break (nested loops)
        System.out.println("\n4.5: Labeled break in nested loops");
        outerLoop:
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= 5; j++) {
                if (i * j > 10) {
                    System.out.println("Breaking at i=" + i + ", j=" + j);
                    break outerLoop;  // Break outer loop
                }
                System.out.print(i * j + " ");
            }
        }
        System.out.println();
    }
    
    // ============================================
    // SECTION 5: NESTED LOOPS
    // ============================================
    static void section5_NestedLoops() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 5: NESTED LOOPS");
        System.out.println("=".repeat(50));
        
        // 5.1: Multiplication table (10x10)
        System.out.println("\n5.1: Multiplication table (5x5)");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= 5; j++) {
                System.out.print((i * j) + "\t");
            }
            System.out.println();
        }
        
        // 5.2: Right triangle pattern
        System.out.println("\n5.2: Right triangle (5 rows)");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        
        // 5.3: Square pattern
        System.out.println("\n5.3: Square pattern (5x5)");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= 5; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        
        // 5.4: Number pyramid
        System.out.println("\n5.4: Number pyramid");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
        
        // 5.5: Hollow rectangle
        System.out.println("\n5.5: Hollow rectangle (5x7)");
        int rows = 5, cols = 7;
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= cols; j++) {
                if (i == 1 || i == rows || j == 1 || j == cols) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
        
        // 5.6: Print prime numbers in range
        System.out.println("\n5.6: Prime numbers from 2 to 50");
        for (int num = 2; num <= 50; num++) {
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
    }
    
    // ============================================
    // SECTION 6: ENHANCED FOR LOOP (for-each)
    // ============================================
    static void section6_EnhancedForLoop() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 6: ENHANCED FOR LOOP");
        System.out.println("=".repeat(50));
        
        // 6.1: Iterate array
        System.out.println("\n6.1: Iterate through array");
        int[] numbers = {10, 20, 30, 40, 50};
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        // 6.2: Sum array elements
        System.out.println("\n6.2: Sum of array elements");
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        System.out.println("Sum: " + sum);
        
        // 6.3: Iterate string array
        System.out.println("\n6.3: Iterate through string array");
        String[] languages = {"Java", "Python", "C++", "JavaScript"};
        for (String lang : languages) {
            System.out.println("Language: " + lang);
        }
        
        // 6.4: Find maximum in array
        System.out.println("\n6.4: Find maximum in array");
        int[] arr = {45, 23, 67, 12, 89, 34};
        int max = arr[0];
        for (int num : arr) {
            if (num > max) {
                max = num;
            }
        }
        System.out.println("Maximum: " + max);
        
        // 6.5: 2D array iteration
        System.out.println("\n6.5: Iterate 2D array");
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        for (int[] row : matrix) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
    }
    
    // ============================================
    // SECTION 7: COMMON LOOP PATTERNS
    // ============================================
    static void section7_CommonPatterns() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 7: COMMON LOOP PATTERNS");
        System.out.println("=".repeat(50));
        
        // 7.1: Count-controlled loop
        System.out.println("\n7.1: Count-controlled (execute exactly 5 times)");
        for (int i = 0; i < 5; i++) {
            System.out.println("Iteration: " + (i + 1));
        }
        
        // 7.2: Sentinel-controlled loop
        System.out.println("\n7.2: Sentinel-controlled (stop at special value)");
        int[] data = {10, 20, 30, -1, 40, 50};  // -1 is sentinel
        for (int val : data) {
            if (val == -1) break;
            System.out.print(val + " ");
        }
        System.out.println();
        
        // 7.3: Nested loop pattern - Matrix traversal
        System.out.println("\n7.3: Matrix row-wise traversal");
        int[][] grid = {{1, 2}, {3, 4}, {5, 6}};
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                System.out.print(grid[i][j] + " ");
            }
            System.out.println();
        }
        
        // 7.4: Accumulator pattern
        System.out.println("\n7.4: Accumulator (sum, product, count)");
        int[] values = {5, 10, 15, 20};
        int total = 0, product = 1, count = 0;
        for (int v : values) {
            total += v;
            product *= v;
            count++;
        }
        System.out.println("Sum: " + total + ", Product: " + product + ", Count: " + count);
        
        // 7.5: Search pattern
        System.out.println("\n7.5: Linear search pattern");
        int[] searchArray = {34, 67, 23, 89, 12};
        int target = 89;
        boolean found = false;
        for (int i = 0; i < searchArray.length; i++) {
            if (searchArray[i] == target) {
                System.out.println("Found " + target + " at index " + i);
                found = true;
                break;
            }
        }
        if (!found) {
            System.out.println(target + " not found");
        }
    }
    
    // ============================================
    // SECTION 8: LOOP OPTIMIZATION
    // ============================================
    static void section8_LoopOptimization() {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("SECTION 8: LOOP OPTIMIZATION TIPS");
        System.out.println("=".repeat(50));
        
        System.out.println("\n✅ Optimization Techniques:");
        System.out.println("1. Avoid function calls in loop condition");
        System.out.println("2. Use pre-increment (++i) when value isn't used");
        System.out.println("3. Minimize work inside loop");
        System.out.println("4. Use break when target is found");
        System.out.println("5. Cache array length in variable");
        System.out.println("6. Use appropriate loop type");
        System.out.println("7. Avoid nested loops when possible");
        
        // Example: Caching array length
        System.out.println("\n8.1: Cache array length (good practice)");
        int[] largeArray = new int[1000];
        int len = largeArray.length;  // Cache length
        for (int i = 0; i < len; i++) {
            // Process array
        }
        System.out.println("Processed " + len + " elements efficiently");
        
        // Example: Early termination
        System.out.println("\n8.2: Early termination with break");
        boolean targetFound = false;
        for (int i = 1; i <= 1000; i++) {
            if (i == 100) {
                targetFound = true;
                break;  // Don't continue unnecessary iterations
            }
        }
        System.out.println("Target found: " + targetFound);
        
        System.out.println("\n🎉 LOOPS COMPLETE! You're now a loop master!");
    }
}
