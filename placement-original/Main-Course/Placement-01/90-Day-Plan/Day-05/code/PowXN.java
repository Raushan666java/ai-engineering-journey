/**
 * LeetCode #50: POW(X, N) - DAY 5
 * Difficulty: Medium
 * 
 * Problem:
 * Implement pow(x, n), which calculates x raised to the power n (x^n).
 * 
 * Example 1:
 * Input: x = 2.00000, n = 10
 * Output: 1024.00000
 * 
 * Example 2:
 * Input: x = 2.10000, n = 3
 * Output: 9.26100
 * 
 * Example 3:
 * Input: x = 2.00000, n = -2
 * Output: 0.25000
 * Explanation: 2^(-2) = 1/(2^2) = 1/4 = 0.25
 * 
 * Constraints:
 * - -100.0 < x < 100.0
 * - -2^31 <= n <= 2^31-1
 * - -10^4 <= x^n <= 10^4
 */

public class PowXN {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════╗");
        System.out.println("║   LeetCode #50: POW(X, N)                ║");
        System.out.println("║   Difficulty: Medium                      ║");
        System.out.println("╚═══════════════════════════════════════════╝\n");
        
        // Test cases
        double[][] testCases = {
            {2.0, 10},
            {2.1, 3},
            {2.0, -2},
            {0.00001, 2147483647},
            {2.0, -2147483648},
            {1.0, 2147483647},
            {-1.0, 2147483647},
            {3.0, 5},
            {5.0, 0},
            {0.5, 4}
        };
        
        System.out.println("Testing all approaches:\n");
        System.out.println("╔════════╦════════════╦══════════════╦═══════════════╦═══════════════╗");
        System.out.println("║   x    ║     n      ║   Naive      ║   Recursive   ║   Iterative   ║");
        System.out.println("╠════════╬════════════╬══════════════╬═══════════════╬═══════════════╣");
        
        for (double[] test : testCases) {
            double x = test[0];
            int n = (int) test[1];
            
            System.out.printf("║ %6.2f ║ %10d ║", x, n);
            
            if (Math.abs(n) <= 20) {
                double r1 = myPow_Naive(x, n);
                System.out.printf(" %12.5f ║", r1);
            } else {
                System.out.printf(" %12s ║", "Skip");
            }
            
            double r2 = myPow_Recursive(x, n);
            double r3 = myPow_Iterative(x, n);
            
            System.out.printf(" %13.5f ║ %13.5f ║%n", r2, r3);
        }
        System.out.println("╚════════╩════════════╩══════════════╩═══════════════╩═══════════════╝");
        
        // Demonstrations
        demonstrateExponentiation();
        performanceComparison();
        printInterviewTips();
    }
    
    // ============================================
    // APPROACH 1: NAIVE RECURSION (SLOW)
    // Time: O(n), Space: O(n)
    // ============================================
    /**
     * Naive Recursive Approach - Simple but slow
     * 
     * Algorithm:
     * - x^n = x * x * x * ... (n times)
     * - x^n = x * x^(n-1)
     * - Handle negative powers: x^(-n) = 1 / x^n
     * 
     * Time Complexity: O(n) - n recursive calls
     * Space Complexity: O(n) - Recursion stack
     * 
     * ❌ Too slow for large n (n can be 2^31)
     */
    public static double myPow_Naive(double x, int n) {
        // Base case
        if (n == 0) return 1.0;
        
        // Handle negative power
        if (n < 0) {
            x = 1 / x;
            n = -n;
        }
        
        // Recursive case: x^n = x * x^(n-1)
        return x * myPow_Naive(x, n - 1);
    }
    
    // ============================================
    // APPROACH 2: FAST EXPONENTIATION (RECURSIVE)
    // Time: O(log n), Space: O(log n)
    // ============================================
    /**
     * Fast Exponentiation using Recursion
     * 
     * Algorithm - Binary Exponentiation:
     * - If n is even: x^n = (x^2)^(n/2)
     * - If n is odd:  x^n = x * x^(n-1)
     * 
     * Example: 2^10
     * - 2^10 = (2^2)^5 = 4^5
     * - 4^5 = 4 * 4^4 = 4 * (4^2)^2 = 4 * 16^2
     * - 16^2 = (16^2)^1 = 256^1
     * - 256^1 = 256 * 256^0 = 256 * 1 = 256
     * 
     * Time Complexity: O(log n) - Halve n each time
     * Space Complexity: O(log n) - Recursion depth
     * 
     * ✅ Much faster than naive approach
     */
    public static double myPow_Recursive(double x, int n) {
        // Handle negative power
        long N = n; // Use long to handle Integer.MIN_VALUE
        if (N < 0) {
            x = 1 / x;
            N = -N;
        }
        
        return fastPow(x, N);
    }
    
    private static double fastPow(double x, long n) {
        // Base case
        if (n == 0) return 1.0;
        
        // Recursive case
        double half = fastPow(x, n / 2);
        
        if (n % 2 == 0) {
            // Even: x^n = (x^(n/2))^2
            return half * half;
        } else {
            // Odd: x^n = x * x^(n-1)
            return x * half * half;
        }
    }
    
    // ============================================
    // APPROACH 3: FAST EXPONENTIATION (ITERATIVE) - BEST
    // Time: O(log n), Space: O(1)
    // ============================================
    /**
     * Fast Exponentiation using Iteration
     * 
     * Algorithm - Binary Exponentiation (Iterative):
     * - Represent n in binary
     * - Example: 13 = 1101 (binary) = 8 + 4 + 1
     * - x^13 = x^8 * x^4 * x^1
     * 
     * Process:
     * 1. Start with result = 1, current = x
     * 2. If n's bit is 1, multiply result by current
     * 3. Square current, shift n right
     * 4. Repeat until n becomes 0
     * 
     * Example: x=2, n=13 (1101 in binary)
     * Step 1: n=13 (1101), current=2, result=1
     *   - n & 1 = 1 → result = 1 * 2 = 2
     *   - current = 2 * 2 = 4, n = 6 (110)
     * Step 2: n=6 (110), current=4, result=2
     *   - n & 1 = 0 → skip
     *   - current = 4 * 4 = 16, n = 3 (11)
     * Step 3: n=3 (11), current=16, result=2
     *   - n & 1 = 1 → result = 2 * 16 = 32
     *   - current = 16 * 16 = 256, n = 1 (1)
     * Step 4: n=1 (1), current=256, result=32
     *   - n & 1 = 1 → result = 32 * 256 = 8192
     *   - n = 0, done!
     * 
     * Time Complexity: O(log n)
     * Space Complexity: O(1) - Constant space!
     * 
     * ✅ BEST SOLUTION - Fast and space efficient
     */
    public static double myPow_Iterative(double x, int n) {
        // Handle negative power
        long N = n; // Use long to handle Integer.MIN_VALUE
        if (N < 0) {
            x = 1 / x;
            N = -N;
        }
        
        double result = 1.0;
        double current = x;
        
        while (N > 0) {
            // If current bit is 1, multiply result
            if ((N & 1) == 1) {
                result *= current;
            }
            
            // Square the current value
            current *= current;
            
            // Shift n right by 1 (divide by 2)
            N >>= 1;
        }
        
        return result;
    }
    
    // ============================================
    // DETAILED DEMONSTRATION
    // ============================================
    static void demonstrateExponentiation() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("BINARY EXPONENTIATION DEMONSTRATION");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📊 Calculate 2^13 step by step:");
        System.out.println("13 in binary: 1101 = 8 + 4 + 1");
        System.out.println("So: 2^13 = 2^8 * 2^4 * 2^1");
        
        System.out.println("\n╔══════╦══════════╦═══════════╦══════════╦═══════════╗");
        System.out.println("║ Step ║ n (bin)  ║  current  ║ n & 1    ║  result   ║");
        System.out.println("╠══════╬══════════╬═══════════╬══════════╬═══════════╣");
        
        double x = 2.0;
        long n = 13;
        double result = 1.0;
        double current = x;
        int step = 0;
        
        while (n > 0 || step == 0) {
            String binary = String.format("%4s", Long.toBinaryString(n)).replace(' ', '0');
            int bit = (int)(n & 1);
            
            System.out.printf("║  %2d  ║   %s   ║  %7.1f  ║    %d     ║  %7.1f  ║%n", 
                step, binary, current, bit, result);
            
            if (bit == 1) {
                result *= current;
            }
            
            current *= current;
            n >>= 1;
            step++;
            
            if (n == 0) break;
        }
        System.out.println("╚══════╩══════════╩═══════════╩══════════╩═══════════╝");
        System.out.println("Final result: " + result);
        
        System.out.println("\n💡 Key Insight:");
        System.out.println("- Only " + step + " steps for 2^13 instead of 13!");
        System.out.println("- O(log n) vs O(n)");
        System.out.println("- For 2^1000000, only ~20 steps!");
        
        System.out.println("\n📖 Why Binary Exponentiation works:");
        System.out.println("Example: x^13 where 13 = 1101 (binary)");
        System.out.println("   13 = 8 + 4 + 0 + 1");
        System.out.println("   x^13 = x^8 * x^4 * x^1");
        System.out.println("   We build: x^1, x^2, x^4, x^8 by squaring");
        System.out.println("   We multiply only when bit is 1");
    }
    
    // ============================================
    // PERFORMANCE COMPARISON
    // ============================================
    static void performanceComparison() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PERFORMANCE COMPARISON");
        System.out.println("=".repeat(70));
        
        double x = 2.0;
        int[] powers = {10, 20, 30};
        int iterations = 1000000;
        
        System.out.println("\nTest: x = " + x + " (" + iterations + " iterations each)");
        
        for (int n : powers) {
            System.out.println("\n━━━ n = " + n + " ━━━");
            
            // Naive (only for small n)
            if (n <= 20) {
                long start1 = System.nanoTime();
                for (int i = 0; i < iterations; i++) {
                    myPow_Naive(x, n);
                }
                long time1 = System.nanoTime() - start1;
                System.out.printf("Naive:      %7.2f ms%n", time1/1000000.0);
            }
            
            // Recursive
            long start2 = System.nanoTime();
            for (int i = 0; i < iterations; i++) {
                myPow_Recursive(x, n);
            }
            long time2 = System.nanoTime() - start2;
            System.out.printf("Recursive:  %7.2f ms%n", time2/1000000.0);
            
            // Iterative
            long start3 = System.nanoTime();
            for (int i = 0; i < iterations; i++) {
                myPow_Iterative(x, n);
            }
            long time3 = System.nanoTime() - start3;
            System.out.printf("Iterative:  %7.2f ms ⭐%n", time3/1000000.0);
        }
        
        System.out.println("\n╔════════════════════════╦═══════════╦═══════════════╗");
        System.out.println("║      Approach          ║   Time    ║  Complexity   ║");
        System.out.println("╠════════════════════════╬═══════════╬═══════════════╣");
        System.out.println("║ Naive Recursion        ║   Slow    ║  O(n), O(n)   ║");
        System.out.println("║ Fast Recursion         ║   Fast    ║  O(log n)     ║");
        System.out.println("║ Fast Iterative ⭐      ║  Fastest  ║  O(log n),O(1)║");
        System.out.println("╚════════════════════════╩═══════════╩═══════════════╝");
        
        System.out.println("\n📊 Number of Operations:");
        System.out.println("╔═══════════╦════════════╦══════════════╗");
        System.out.println("║     n     ║   Naive    ║  Fast Pow    ║");
        System.out.println("╠═══════════╬════════════╬══════════════╣");
        System.out.println("║    10     ║     10     ║      4       ║");
        System.out.println("║   100     ║    100     ║      7       ║");
        System.out.println("║  1,000    ║   1,000    ║     10       ║");
        System.out.println("║ 1,000,000 ║ 1,000,000  ║     20       ║");
        System.out.println("╚═══════════╩════════════╩══════════════╝");
        
        System.out.println("\n✅ RECOMMENDED: Fast Iterative");
        System.out.println("   - O(log n) time");
        System.out.println("   - O(1) space");
        System.out.println("   - No recursion overhead");
    }
    
    // ============================================
    // INTERVIEW TIPS
    // ============================================
    static void printInterviewTips() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("INTERVIEW TIPS & TRICKS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n💡 Problem-Solving Approach:");
        
        System.out.println("\n1. Start with naive approach:");
        System.out.println("   - x^n = x * x * x * ... (n times)");
        System.out.println("   - Mention it's O(n) - too slow");
        
        System.out.println("\n2. Optimize with binary exponentiation:");
        System.out.println("   - x^n = (x^2)^(n/2) if n is even");
        System.out.println("   - x^n = x * x^(n-1) if n is odd");
        System.out.println("   - This is O(log n)!");
        
        System.out.println("\n3. Handle negative powers:");
        System.out.println("   - x^(-n) = 1 / x^n");
        System.out.println("   - Convert to positive, then invert x");
        
        System.out.println("\n4. Edge case - Integer.MIN_VALUE:");
        System.out.println("   - -2^31 cannot be negated in int");
        System.out.println("   - Use long to handle this");
        
        System.out.println("\n📝 Key Points to Mention:");
        System.out.println("✅ Binary exponentiation reduces O(n) to O(log n)");
        System.out.println("✅ Iterative better than recursive (O(1) space)");
        System.out.println("✅ Handle negative power by inverting x");
        System.out.println("✅ Use long to handle Integer.MIN_VALUE");
        
        System.out.println("\n🎯 Edge Cases:");
        System.out.println("❌ n = 0: Always return 1.0");
        System.out.println("❌ n = Integer.MIN_VALUE: Use long");
        System.out.println("✅ x = 0: Return 0 (except 0^0)");
        System.out.println("✅ x = 1: Always return 1");
        System.out.println("✅ x = -1: Depends on n (odd/even)");
        
        System.out.println("\n🔥 Common Mistakes:");
        System.out.println("❌ Not handling negative n");
        System.out.println("❌ Integer overflow with -2^31");
        System.out.println("❌ Forgetting base case n = 0");
        System.out.println("❌ Using O(n) naive approach");
        
        System.out.println("\n📖 Binary Representation Example:");
        System.out.println("n = 13 = 1101 (binary)");
        System.out.println("x^13 = x^(8+4+1) = x^8 * x^4 * x^1");
        System.out.println("Build by squaring: x → x^2 → x^4 → x^8");
        System.out.println("Multiply when bit is 1: result = x^1 * x^4 * x^8");
        
        System.out.println("\n⭐ Best Solution Template:");
        System.out.println("```java");
        System.out.println("public double myPow(double x, int n) {");
        System.out.println("    long N = n;");
        System.out.println("    if (N < 0) { x = 1/x; N = -N; }");
        System.out.println("    double result = 1.0, current = x;");
        System.out.println("    while (N > 0) {");
        System.out.println("        if ((N & 1) == 1) result *= current;");
        System.out.println("        current *= current;");
        System.out.println("        N >>= 1;");
        System.out.println("    }");
        System.out.println("    return result;");
        System.out.println("}");
        System.out.println("```");
        
        System.out.println("\n🎯 Follow-up Questions:");
        System.out.println("Q: What about x^(y/z) with fraction powers?");
        System.out.println("A: Use Math.pow() or Newton's method");
        
        System.out.println("\nQ: What if we need modulo (x^n % MOD)?");
        System.out.println("A: Same algorithm, take mod after each multiplication");
        
        System.out.println("\nQ: Can we parallelize this?");
        System.out.println("A: Divide-and-conquer can be parallelized for very large n");
    }
}
