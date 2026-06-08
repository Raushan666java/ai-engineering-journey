/**
 * Day 17: Recursion Basics
 * 
 * This file demonstrates fundamental recursion concepts with classic examples.
 * Focus: Base case, recursive case, call stack understanding
 */

public class RecursionBasics {
    
    // ============================================
    // 1. FACTORIAL - Classic Recursion Example
    // ============================================
    
    /**
     * Calculate factorial using recursion
     * Time: O(n), Space: O(n) call stack
     */
    public static int factorial(int n) {
        // Base case
        if (n == 0 || n == 1) {
            return 1;
        }
        
        // Recursive case: n! = n × (n-1)!
        return n * factorial(n - 1);
    }
    
    /**
     * Factorial with call stack visualization
     */
    public static int factorialDebug(int n, int depth) {
        String indent = "  ".repeat(depth);
        System.out.println(indent + "→ factorial(" + n + ")");
        
        if (n == 0 || n == 1) {
            System.out.println(indent + "← returns 1 (base case)");
            return 1;
        }
        
        int result = n * factorialDebug(n - 1, depth + 1);
        System.out.println(indent + "← returns " + n + " × " + (result/n) + " = " + result);
        return result;
    }
    
    // ============================================
    // 2. FIBONACCI - Multiple Recursive Calls
    // ============================================
    
    /**
     * Naive Fibonacci (exponential time)
     * Time: O(2^n), Space: O(n)
     */
    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    /**
     * Fibonacci with memoization (optimized)
     * Time: O(n), Space: O(n)
     */
    public static int fibonacciMemo(int n, int[] memo) {
        if (n <= 1) return n;
        
        if (memo[n] != -1) {
            return memo[n];
        }
        
        memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
        return memo[n];
    }
    
    // ============================================
    // 3. SUM OF ARRAY - Recursion on Arrays
    // ============================================
    
    /**
     * Sum array elements recursively
     * Time: O(n), Space: O(n)
     */
    public static int arraySum(int[] arr, int index) {
        // Base case: reached end
        if (index >= arr.length) {
            return 0;
        }
        
        // Recursive case: current element + sum of rest
        return arr[index] + arraySum(arr, index + 1);
    }
    
    /**
     * Find max in array recursively
     */
    public static int arrayMax(int[] arr, int index) {
        // Base case: last element
        if (index == arr.length - 1) {
            return arr[index];
        }
        
        // Recursive case: max of current and rest
        int maxRest = arrayMax(arr, index + 1);
        return Math.max(arr[index], maxRest);
    }
    
    // ============================================
    // 4. POWER - Optimized Recursion
    // ============================================
    
    /**
     * Calculate x^n using recursion (naive)
     * Time: O(n)
     */
    public static double power(double x, int n) {
        if (n == 0) return 1;
        if (n < 0) return 1 / power(x, -n);
        
        return x * power(x, n - 1);
    }
    
    /**
     * Calculate x^n using fast exponentiation
     * Time: O(log n) - much faster!
     * 
     * Trick: x^8 = (x^4)^2 = ((x^2)^2)^2
     */
    public static double powerFast(double x, int n) {
        if (n == 0) return 1;
        
        long N = n;
        if (N < 0) {
            x = 1 / x;
            N = -N;
        }
        
        return fastPowerHelper(x, N);
    }
    
    private static double fastPowerHelper(double x, long n) {
        if (n == 0) return 1;
        
        double half = fastPowerHelper(x, n / 2);
        
        if (n % 2 == 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }
    
    // ============================================
    // 5. REVERSE STRING - Two Pointer Recursion
    // ============================================
    
    /**
     * Reverse string using recursion
     * Time: O(n), Space: O(n)
     */
    public static void reverseString(char[] s) {
        reverseHelper(s, 0, s.length - 1);
    }
    
    private static void reverseHelper(char[] s, int left, int right) {
        // Base case: pointers meet
        if (left >= right) {
            return;
        }
        
        // Swap
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        // Recurse
        reverseHelper(s, left + 1, right - 1);
    }
    
    // ============================================
    // 6. PALINDROME CHECK - Recursive Validation
    // ============================================
    
    /**
     * Check if string is palindrome recursively
     * Time: O(n), Space: O(n)
     */
    public static boolean isPalindrome(String s, int left, int right) {
        // Base case: checked all or one character
        if (left >= right) {
            return true;
        }
        
        // Check current pair
        if (s.charAt(left) != s.charAt(right)) {
            return false;
        }
        
        // Recurse on remaining substring
        return isPalindrome(s, left + 1, right - 1);
    }
    
    // ============================================
    // 7. CLIMBING STAIRS - Fibonacci Variant
    // ============================================
    
    /**
     * LeetCode 70: Climbing Stairs
     * You can climb 1 or 2 steps. How many ways to reach top?
     * 
     * Time: O(2^n) naive, O(n) with memo
     */
    public static int climbStairs(int n) {
        if (n <= 2) return n;
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
    
    public static int climbStairsMemo(int n, int[] memo) {
        if (n <= 2) return n;
        if (memo[n] != -1) return memo[n];
        
        memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
        return memo[n];
    }
    
    // ============================================
    // 8. BINARY SEARCH - Divide & Conquer
    // ============================================
    
    /**
     * Binary search using recursion
     * Time: O(log n), Space: O(log n)
     */
    public static int binarySearch(int[] arr, int target, int low, int high) {
        // Base case: not found
        if (low > high) {
            return -1;
        }
        
        int mid = low + (high - low) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            return binarySearch(arr, target, mid + 1, high);
        } else {
            return binarySearch(arr, target, low, mid - 1);
        }
    }
    
    // ============================================
    // 9. GCD - Euclidean Algorithm
    // ============================================
    
    /**
     * Greatest Common Divisor using recursion
     * Time: O(log(min(a,b)))
     */
    public static int gcd(int a, int b) {
        if (b == 0) {
            return a;
        }
        return gcd(b, a % b);
    }
    
    // ============================================
    // 10. PRINT PATTERNS - Understanding Recursion
    // ============================================
    
    /**
     * Print numbers from n to 1
     */
    public static void printDescending(int n) {
        if (n == 0) return;
        System.out.print(n + " ");
        printDescending(n - 1);
    }
    
    /**
     * Print numbers from 1 to n
     */
    public static void printAscending(int n) {
        if (n == 0) return;
        printAscending(n - 1);
        System.out.print(n + " ");
    }
    
    /**
     * Print numbers: n to 1 to n
     * Example: n=3 → 3 2 1 2 3
     */
    public static void printNToOneToN(int n) {
        if (n == 0) return;
        System.out.print(n + " ");
        printNToOneToN(n - 1);
        System.out.print(n + " ");
    }
    
    // ============================================
    // MAIN - Test All Functions
    // ============================================
    
    public static void main(String[] args) {
        System.out.println("=".repeat(60));
        System.out.println("DAY 17: RECURSION BASICS - COMPREHENSIVE DEMO");
        System.out.println("=".repeat(60));
        
        // Test 1: Factorial
        System.out.println("\n1. FACTORIAL");
        System.out.println("-".repeat(60));
        System.out.println("factorial(5) = " + factorial(5));
        System.out.println("factorial(0) = " + factorial(0));
        System.out.println("\nCall Stack Visualization for factorial(5):");
        factorialDebug(5, 0);
        
        // Test 2: Fibonacci
        System.out.println("\n2. FIBONACCI");
        System.out.println("-".repeat(60));
        System.out.print("First 10 Fibonacci numbers: ");
        for (int i = 0; i < 10; i++) {
            System.out.print(fibonacci(i) + " ");
        }
        System.out.println();
        
        System.out.println("\nFibonacci with Memoization (faster):");
        int[] memo = new int[20];
        java.util.Arrays.fill(memo, -1);
        System.out.println("fibonacci(15) = " + fibonacciMemo(15, memo));
        
        // Test 3: Array Operations
        System.out.println("\n3. ARRAY OPERATIONS");
        System.out.println("-".repeat(60));
        int[] arr = {5, 2, 8, 1, 9, 3};
        System.out.println("Array: " + java.util.Arrays.toString(arr));
        System.out.println("Sum = " + arraySum(arr, 0));
        System.out.println("Max = " + arrayMax(arr, 0));
        
        // Test 4: Power
        System.out.println("\n4. POWER CALCULATION");
        System.out.println("-".repeat(60));
        System.out.println("2^10 = " + power(2, 10));
        System.out.println("2^10 (fast) = " + powerFast(2, 10));
        System.out.println("2^-3 = " + powerFast(2, -3));
        
        // Test 5: String Reversal
        System.out.println("\n5. STRING REVERSAL");
        System.out.println("-".repeat(60));
        char[] str = "hello".toCharArray();
        System.out.println("Original: " + String.valueOf(str));
        reverseString(str);
        System.out.println("Reversed: " + String.valueOf(str));
        
        // Test 6: Palindrome Check
        System.out.println("\n6. PALINDROME CHECK");
        System.out.println("-".repeat(60));
        String s1 = "racecar";
        String s2 = "hello";
        System.out.println("\"" + s1 + "\" is palindrome? " + 
                          isPalindrome(s1, 0, s1.length() - 1));
        System.out.println("\"" + s2 + "\" is palindrome? " + 
                          isPalindrome(s2, 0, s2.length() - 1));
        
        // Test 7: Climbing Stairs
        System.out.println("\n7. CLIMBING STAIRS (LC 70)");
        System.out.println("-".repeat(60));
        int n = 5;
        System.out.println("Ways to climb " + n + " stairs = " + climbStairs(n));
        int[] climbMemo = new int[n + 1];
        java.util.Arrays.fill(climbMemo, -1);
        System.out.println("Ways (with memo) = " + climbStairsMemo(n, climbMemo));
        
        // Test 8: Binary Search
        System.out.println("\n8. BINARY SEARCH (RECURSIVE)");
        System.out.println("-".repeat(60));
        int[] sorted = {1, 3, 5, 7, 9, 11, 13, 15};
        System.out.println("Array: " + java.util.Arrays.toString(sorted));
        System.out.println("Search 7: index = " + 
                          binarySearch(sorted, 7, 0, sorted.length - 1));
        System.out.println("Search 6: index = " + 
                          binarySearch(sorted, 6, 0, sorted.length - 1));
        
        // Test 9: GCD
        System.out.println("\n9. GREATEST COMMON DIVISOR");
        System.out.println("-".repeat(60));
        System.out.println("gcd(48, 18) = " + gcd(48, 18));
        System.out.println("gcd(100, 75) = " + gcd(100, 75));
        
        // Test 10: Print Patterns
        System.out.println("\n10. PRINT PATTERNS");
        System.out.println("-".repeat(60));
        System.out.print("Descending (5 to 1): ");
        printDescending(5);
        System.out.println();
        
        System.out.print("Ascending (1 to 5): ");
        printAscending(5);
        System.out.println();
        
        System.out.print("N to 1 to N (3): ");
        printNToOneToN(3);
        System.out.println();
        
        System.out.println("\n" + "=".repeat(60));
        System.out.println("All recursion basics demonstrated successfully! ✓");
        System.out.println("=".repeat(60));
    }
}
