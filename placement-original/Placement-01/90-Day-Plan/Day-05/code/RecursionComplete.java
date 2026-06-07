/**
 * RECURSION COMPLETE GUIDE - DAY 5
 * Master Recursive Problem Solving
 * 
 * Topics Covered:
 * 1. What is Recursion?
 * 2. Base Case & Recursive Case
 * 3. Call Stack Visualization
 * 4. Types of Recursion
 * 5. Classic Recursive Problems
 * 6. Recursion vs Iteration
 * 7. Tail Recursion
 * 8. Recursion Optimization
 * 9. Common Pitfalls
 * 10. When to Use Recursion
 */

public class RecursionComplete {
    
    // Counter for visualization
    private static int callCount = 0;
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════╗");
        System.out.println("║   RECURSION COMPLETE GUIDE - DAY 5        ║");
        System.out.println("║   Master Recursive Problem Solving        ║");
        System.out.println("╚═══════════════════════════════════════════╝\n");
        
        section1_WhatIsRecursion();
        section2_BaseCaseRecursiveCase();
        section3_CallStackVisualization();
        section4_TypesOfRecursion();
        section5_ClassicProblems();
        section6_RecursionVsIteration();
        section7_TailRecursion();
        section8_Optimization();
        section9_CommonPitfalls();
        section10_WhenToUse();
    }
    
    // ============================================
    // SECTION 1: WHAT IS RECURSION?
    // ============================================
    static void section1_WhatIsRecursion() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 1: WHAT IS RECURSION?");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 Definition:");
        System.out.println("Recursion is when a function calls itself to solve a problem");
        System.out.println("by breaking it down into smaller, similar subproblems.\n");
        
        System.out.println("🔄 Recursion Components:");
        System.out.println("1. Base Case - Stop condition (prevents infinite recursion)");
        System.out.println("2. Recursive Case - Function calls itself with smaller input");
        System.out.println("3. Progress - Each call moves toward base case");
        
        System.out.println("\n💡 Simple Example - Countdown");
        countdown(5);
        
        System.out.println("\n💡 Another Example - Print 1 to N");
        printNumbers(1, 5);
    }
    
    static void countdown(int n) {
        if (n == 0) {  // Base case
            System.out.println("Blastoff! 🚀");
            return;
        }
        System.out.println(n);
        countdown(n - 1);  // Recursive case
    }
    
    static void printNumbers(int start, int end) {
        if (start > end) {  // Base case
            return;
        }
        System.out.print(start + " ");
        printNumbers(start + 1, end);  // Recursive case
    }
    
    // ============================================
    // SECTION 2: BASE CASE & RECURSIVE CASE
    // ============================================
    static void section2_BaseCaseRecursiveCase() {
        System.out.println("\n\n" + "=".repeat(70));
        System.out.println("SECTION 2: BASE CASE & RECURSIVE CASE");
        System.out.println("=".repeat(70));
        
        System.out.println("\n🎯 Base Case:");
        System.out.println("- Stop condition that terminates recursion");
        System.out.println("- Usually simplest case that can be solved directly");
        System.out.println("- MUST be reached to avoid infinite recursion");
        
        System.out.println("\n🔄 Recursive Case:");
        System.out.println("- Calls function with modified (smaller) input");
        System.out.println("- Must make progress toward base case");
        System.out.println("- Combines result of recursive call with current step");
        
        System.out.println("\n💡 Example: Factorial");
        System.out.println("factorial(5) = 5 × 4 × 3 × 2 × 1 = " + factorial(5));
        
        System.out.println("\n📊 How it works:");
        System.out.println("factorial(5) = 5 × factorial(4)");
        System.out.println("factorial(4) = 4 × factorial(3)");
        System.out.println("factorial(3) = 3 × factorial(2)");
        System.out.println("factorial(2) = 2 × factorial(1)");
        System.out.println("factorial(1) = 1  ← Base case!");
        
        System.out.println("\n💡 Example: Sum of N numbers");
        System.out.println("sum(5) = 5 + 4 + 3 + 2 + 1 = " + sumN(5));
    }
    
    static int factorial(int n) {
        // Base case
        if (n == 0 || n == 1) {
            return 1;
        }
        // Recursive case
        return n * factorial(n - 1);
    }
    
    static int sumN(int n) {
        // Base case
        if (n == 0) {
            return 0;
        }
        // Recursive case
        return n + sumN(n - 1);
    }
    
    // ============================================
    // SECTION 3: CALL STACK VISUALIZATION
    // ============================================
    static void section3_CallStackVisualization() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 3: CALL STACK VISUALIZATION");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 Call Stack:");
        System.out.println("Each recursive call is pushed onto the call stack");
        System.out.println("When base case is reached, calls are popped off\n");
        
        System.out.println("Example: factorial(4) call stack:");
        System.out.println("┌─────────────────┐");
        System.out.println("│  factorial(1)   │ ← Top (base case reached)");
        System.out.println("├─────────────────┤");
        System.out.println("│  factorial(2)   │");
        System.out.println("├─────────────────┤");
        System.out.println("│  factorial(3)   │");
        System.out.println("├─────────────────┤");
        System.out.println("│  factorial(4)   │ ← Initial call");
        System.out.println("└─────────────────┘");
        
        System.out.println("\nReturn sequence:");
        System.out.println("factorial(1) returns 1");
        System.out.println("factorial(2) returns 2 × 1 = 2");
        System.out.println("factorial(3) returns 3 × 2 = 6");
        System.out.println("factorial(4) returns 4 × 6 = 24");
        
        System.out.println("\n💡 Tracing factorial(4):");
        callCount = 0;
        int result = factorialWithTrace(4);
        System.out.println("\nFinal result: " + result);
        System.out.println("Total calls: " + callCount);
    }
    
    static int factorialWithTrace(int n) {
        callCount++;
        String indent = "  ".repeat(callCount - 1);
        System.out.println(indent + "→ factorial(" + n + ") called");
        
        if (n == 0 || n == 1) {
            System.out.println(indent + "← returns 1 (base case)");
            return 1;
        }
        
        int result = n * factorialWithTrace(n - 1);
        System.out.println(indent + "← returns " + result);
        return result;
    }
    
    // ============================================
    // SECTION 4: TYPES OF RECURSION
    // ============================================
    static void section4_TypesOfRecursion() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 4: TYPES OF RECURSION");
        System.out.println("=".repeat(70));
        
        // 4.1: Direct Recursion
        System.out.println("\n4.1: DIRECT RECURSION");
        System.out.println("Function calls itself directly");
        System.out.println("Example: factorial(5) = " + factorial(5));
        
        // 4.2: Indirect Recursion
        System.out.println("\n4.2: INDIRECT RECURSION");
        System.out.println("Function A calls Function B, which calls Function A");
        System.out.println("Example: isEven/isOdd");
        System.out.println("isEven(4) = " + isEven(4));
        System.out.println("isOdd(5) = " + isOdd(5));
        
        // 4.3: Linear Recursion
        System.out.println("\n4.3: LINEAR RECURSION");
        System.out.println("Makes one recursive call per execution");
        System.out.println("Example: sum(5) = " + sumN(5));
        
        // 4.4: Binary Recursion
        System.out.println("\n4.4: BINARY RECURSION");
        System.out.println("Makes two recursive calls");
        System.out.println("Example: Fibonacci(6) = " + fibonacci(6));
        
        // 4.5: Multiple Recursion
        System.out.println("\n4.5: MULTIPLE RECURSION");
        System.out.println("Makes more than two recursive calls");
        System.out.println("Example: Tower of Hanoi");
    }
    
    // Indirect recursion example
    static boolean isEven(int n) {
        if (n == 0) return true;
        return isOdd(n - 1);
    }
    
    static boolean isOdd(int n) {
        if (n == 0) return false;
        return isEven(n - 1);
    }
    
    // Binary recursion example
    static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);  // Two recursive calls
    }
    
    // ============================================
    // SECTION 5: CLASSIC RECURSIVE PROBLEMS
    // ============================================
    static void section5_ClassicProblems() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 5: CLASSIC RECURSIVE PROBLEMS");
        System.out.println("=".repeat(70));
        
        // 5.1: Factorial
        System.out.println("\n5.1: FACTORIAL");
        System.out.println("5! = " + factorial(5));
        
        // 5.2: Fibonacci
        System.out.println("\n5.2: FIBONACCI SEQUENCE");
        System.out.print("First 10 Fibonacci numbers: ");
        for (int i = 0; i < 10; i++) {
            System.out.print(fibonacci(i) + " ");
        }
        
        // 5.3: Power
        System.out.println("\n\n5.3: POWER (2^10)");
        System.out.println("2^10 = " + power(2, 10));
        
        // 5.4: Sum of digits
        System.out.println("\n5.4: SUM OF DIGITS");
        System.out.println("Sum of digits in 12345: " + sumDigits(12345));
        
        // 5.5: Reverse string
        System.out.println("\n5.5: REVERSE STRING");
        System.out.println("Reverse of 'Hello': " + reverseString("Hello"));
        
        // 5.6: Palindrome check
        System.out.println("\n5.6: PALINDROME CHECK");
        System.out.println("'racecar' is palindrome: " + isPalindrome("racecar"));
        System.out.println("'hello' is palindrome: " + isPalindrome("hello"));
        
        // 5.7: GCD
        System.out.println("\n5.7: GREATEST COMMON DIVISOR");
        System.out.println("GCD(48, 18) = " + gcd(48, 18));
        
        // 5.8: Array sum
        System.out.println("\n5.8: ARRAY SUM");
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Sum of [1,2,3,4,5]: " + arraySum(arr, arr.length));
    }
    
    static int power(int base, int exp) {
        if (exp == 0) return 1;
        return base * power(base, exp - 1);
    }
    
    static int sumDigits(int n) {
        if (n == 0) return 0;
        return (n % 10) + sumDigits(n / 10);
    }
    
    static String reverseString(String s) {
        if (s.isEmpty()) return s;
        return reverseString(s.substring(1)) + s.charAt(0);
    }
    
    static boolean isPalindrome(String s) {
        if (s.length() <= 1) return true;
        if (s.charAt(0) != s.charAt(s.length() - 1)) return false;
        return isPalindrome(s.substring(1, s.length() - 1));
    }
    
    static int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }
    
    static int arraySum(int[] arr, int n) {
        if (n <= 0) return 0;
        return arraySum(arr, n - 1) + arr[n - 1];
    }
    
    // ============================================
    // SECTION 6: RECURSION VS ITERATION
    // ============================================
    static void section6_RecursionVsIteration() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 6: RECURSION VS ITERATION");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📊 COMPARISON:");
        System.out.println("┌──────────────────┬─────────────────┬─────────────────┐");
        System.out.println("│    Aspect        │   Recursion     │   Iteration     │");
        System.out.println("├──────────────────┼─────────────────┼─────────────────┤");
        System.out.println("│ Code Clarity     │   More elegant  │   More verbose  │");
        System.out.println("│ Memory Usage     │   Higher (stack)│   Lower         │");
        System.out.println("│ Performance      │   Slower        │   Faster        │");
        System.out.println("│ Stack Overflow   │   Possible      │   Not possible  │");
        System.out.println("│ Best For         │   Tree/Graph    │   Simple loops  │");
        System.out.println("└──────────────────┴─────────────────┴─────────────────┘");
        
        // Example: Factorial both ways
        System.out.println("\n💡 Example: Factorial");
        int n = 10;
        
        long start1 = System.nanoTime();
        int result1 = factorialRecursive(n);
        long time1 = System.nanoTime() - start1;
        
        long start2 = System.nanoTime();
        int result2 = factorialIterative(n);
        long time2 = System.nanoTime() - start2;
        
        System.out.println("Recursive: " + result1 + " (Time: " + time1 + " ns)");
        System.out.println("Iterative: " + result2 + " (Time: " + time2 + " ns)");
    }
    
    static int factorialRecursive(int n) {
        if (n <= 1) return 1;
        return n * factorialRecursive(n - 1);
    }
    
    static int factorialIterative(int n) {
        int result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    // ============================================
    // SECTION 7: TAIL RECURSION
    // ============================================
    static void section7_TailRecursion() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 7: TAIL RECURSION");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 Definition:");
        System.out.println("Tail recursion: recursive call is the LAST operation");
        System.out.println("Can be optimized by compiler to iteration (tail call optimization)");
        
        System.out.println("\n💡 Non-tail recursive factorial:");
        System.out.println("factorial(5) = 5 * factorial(4)  ← Multiplication after call");
        System.out.println("Result: " + factorial(5));
        
        System.out.println("\n💡 Tail recursive factorial:");
        System.out.println("Uses accumulator to make recursive call last operation");
        System.out.println("Result: " + factorialTail(5, 1));
        
        System.out.println("\n💡 Tail recursive sum:");
        System.out.println("Sum 1 to 100: " + sumTail(100, 0));
    }
    
    static int factorialTail(int n, int accumulator) {
        if (n == 0 || n == 1) {
            return accumulator;
        }
        return factorialTail(n - 1, n * accumulator);  // Tail call
    }
    
    static int sumTail(int n, int accumulator) {
        if (n == 0) {
            return accumulator;
        }
        return sumTail(n - 1, accumulator + n);  // Tail call
    }
    
    // ============================================
    // SECTION 8: OPTIMIZATION
    // ============================================
    static void section8_Optimization() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 8: RECURSION OPTIMIZATION");
        System.out.println("=".repeat(70));
        
        System.out.println("\n8.1: Memoization (Dynamic Programming)");
        System.out.println("Store results of expensive calls to avoid recalculation");
        
        // Fibonacci without memoization (slow)
        System.out.println("\n💡 Fibonacci(40) without memoization:");
        long start1 = System.nanoTime();
        int result1 = fibonacci(40);
        long time1 = System.nanoTime() - start1;
        System.out.println("Result: " + result1);
        System.out.println("Time: " + time1/1000000.0 + " ms");
        
        // Fibonacci with memoization (fast)
        System.out.println("\n💡 Fibonacci(40) with memoization:");
        long start2 = System.nanoTime();
        int result2 = fibonacciMemo(40, new int[41]);
        long time2 = System.nanoTime() - start2;
        System.out.println("Result: " + result2);
        System.out.println("Time: " + time2/1000000.0 + " ms");
        System.out.println("Speedup: " + (time1/time2) + "x faster!");
    }
    
    static int fibonacciMemo(int n, int[] memo) {
        if (n <= 1) return n;
        if (memo[n] != 0) return memo[n];  // Already calculated
        memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
        return memo[n];
    }
    
    // ============================================
    // SECTION 9: COMMON PITFALLS
    // ============================================
    static void section9_CommonPitfalls() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 9: COMMON PITFALLS & MISTAKES");
        System.out.println("=".repeat(70));
        
        System.out.println("\n❌ PITFALL 1: Missing Base Case");
        System.out.println("Result: Stack overflow (infinite recursion)");
        System.out.println("Example: factorial without base case");
        
        System.out.println("\n❌ PITFALL 2: Wrong Base Case");
        System.out.println("Result: Incorrect results or stack overflow");
        System.out.println("Example: factorial(0) returning 0 instead of 1");
        
        System.out.println("\n❌ PITFALL 3: Not Making Progress");
        System.out.println("Result: Infinite recursion");
        System.out.println("Example: factorial(n) calls factorial(n) instead of (n-1)");
        
        System.out.println("\n❌ PITFALL 4: Stack Overflow");
        System.out.println("Result: Too many recursive calls");
        System.out.println("Solution: Use iteration or tail recursion");
        
        System.out.println("\n❌ PITFALL 5: Inefficient Recursion");
        System.out.println("Result: Exponential time complexity");
        System.out.println("Example: Naive Fibonacci");
        System.out.println("Solution: Use memoization or iteration");
        
        System.out.println("\n✅ BEST PRACTICES:");
        System.out.println("1. Always have a base case");
        System.out.println("2. Ensure progress toward base case");
        System.out.println("3. Test with small inputs first");
        System.out.println("4. Consider iteration for simple cases");
        System.out.println("5. Use memoization for overlapping subproblems");
        System.out.println("6. Be aware of stack depth limits");
    }
    
    // ============================================
    // SECTION 10: WHEN TO USE RECURSION
    // ============================================
    static void section10_WhenToUse() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 10: WHEN TO USE RECURSION");
        System.out.println("=".repeat(70));
        
        System.out.println("\n✅ USE RECURSION WHEN:");
        System.out.println("1. Problem has recursive structure (trees, graphs)");
        System.out.println("2. Problem can be divided into similar subproblems");
        System.out.println("3. Code clarity is important");
        System.out.println("4. Working with recursive data structures");
        System.out.println("   Examples: Tree traversal, graph traversal");
        System.out.println("5. Divide and conquer algorithms");
        System.out.println("   Examples: Merge sort, quick sort, binary search");
        System.out.println("6. Backtracking problems");
        System.out.println("   Examples: N-Queens, Sudoku solver");
        
        System.out.println("\n❌ AVOID RECURSION WHEN:");
        System.out.println("1. Simple iteration is sufficient");
        System.out.println("2. Performance is critical");
        System.out.println("3. Stack depth might be exceeded");
        System.out.println("4. Problem has overlapping subproblems (use DP)");
        
        System.out.println("\n📚 PERFECT FOR RECURSION:");
        System.out.println("- Tree/Graph traversal");
        System.out.println("- Factorial, Fibonacci");
        System.out.println("- Tower of Hanoi");
        System.out.println("- Permutations & Combinations");
        System.out.println("- Maze solving");
        System.out.println("- Divide and conquer algorithms");
        
        System.out.println("\n🎉 RECURSION GUIDE COMPLETE!");
        System.out.println("\nKey Takeaways:");
        System.out.println("✅ Recursion = Function calling itself");
        System.out.println("✅ Must have base case to stop");
        System.out.println("✅ Each call should make progress");
        System.out.println("✅ Trade-off: Elegance vs Performance");
        System.out.println("✅ Use memoization for optimization");
    }
}
