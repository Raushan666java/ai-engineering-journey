/**
 * LeetCode #231: POWER OF TWO - DAY 5
 * Difficulty: Easy
 * 
 * Problem:
 * Given an integer n, return true if it is a power of two.
 * Otherwise, return false.
 * An integer n is a power of two, if there exists an integer x
 * such that n == 2^x.
 * 
 * Example 1:
 * Input: n = 1
 * Output: true
 * Explanation: 2^0 = 1
 * 
 * Example 2:
 * Input: n = 16
 * Output: true
 * Explanation: 2^4 = 16
 * 
 * Example 3:
 * Input: n = 3
 * Output: false
 * 
 * Constraints:
 * - -2^31 <= n <= 2^31 - 1
 */

public class PowerOfTwo {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════╗");
        System.out.println("║   LeetCode #231: POWER OF TWO            ║");
        System.out.println("║   Difficulty: Easy                        ║");
        System.out.println("╚═══════════════════════════════════════════╝\n");
        
        // Test cases
        int[] testCases = {1, 2, 3, 4, 5, 8, 16, 17, 32, 64, 128, 256, 0, -16, 1024};
        
        System.out.println("Testing all approaches:\n");
        System.out.println("╔═══════╦═══════════╦════════════╦═══════════╦══════════╗");
        System.out.println("║   n   ║ Recursion ║ Iteration  ║  Bit Ops  ║  Math    ║");
        System.out.println("╠═══════╬═══════════╬════════════╬═══════════╬══════════╣");
        
        for (int n : testCases) {
            boolean r1 = isPowerOfTwo_Recursive(n);
            boolean r2 = isPowerOfTwo_Iterative(n);
            boolean r3 = isPowerOfTwo_BitManipulation(n);
            boolean r4 = isPowerOfTwo_Math(n);
            
            System.out.printf("║ %5d ║ %-9s ║ %-10s ║ %-9s ║ %-8s ║%n", 
                n, r1, r2, r3, r4);
        }
        System.out.println("╚═══════╩═══════════╩════════════╩═══════════╩══════════╝");
        
        // Demonstrations
        demonstrateBitPattern();
        performanceComparison();
        printInterviewTips();
    }
    
    // ============================================
    // APPROACH 1: RECURSION
    // Time: O(log n), Space: O(log n)
    // ============================================
    /**
     * Recursive Approach
     * 
     * Algorithm:
     * - Base case 1: n == 1 → true (2^0 = 1)
     * - Base case 2: n <= 0 or n is odd → false
     * - Recursive: Check if n/2 is power of two
     * 
     * Time Complexity: O(log n) - Divide by 2 each time
     * Space Complexity: O(log n) - Recursion stack
     * 
     * ✅ Good for understanding, not best for interviews
     */
    public static boolean isPowerOfTwo_Recursive(int n) {
        // Base cases
        if (n == 1) return true;           // 2^0 = 1
        if (n <= 0 || n % 2 != 0) return false;  // Negative, zero, or odd
        
        // Recursive case: check n/2
        return isPowerOfTwo_Recursive(n / 2);
    }
    
    // ============================================
    // APPROACH 2: ITERATION
    // Time: O(log n), Space: O(1)
    // ============================================
    /**
     * Iterative Approach
     * 
     * Algorithm:
     * - Keep dividing by 2 while n is even
     * - If result is 1, it was power of two
     * 
     * Time Complexity: O(log n)
     * Space Complexity: O(1)
     * 
     * ✅ Better space complexity than recursion
     */
    public static boolean isPowerOfTwo_Iterative(int n) {
        if (n <= 0) return false;
        
        while (n % 2 == 0) {
            n /= 2;
        }
        
        return n == 1;
    }
    
    // ============================================
    // APPROACH 3: BIT MANIPULATION (BEST)
    // Time: O(1), Space: O(1)
    // ============================================
    /**
     * Bit Manipulation Approach - ONE LINE!
     * 
     * Algorithm:
     * - Power of 2 in binary has exactly one '1' bit
     * - Examples:
     *   1  = 0001 (2^0)
     *   2  = 0010 (2^1)
     *   4  = 0100 (2^2)
     *   8  = 1000 (2^3)
     * - If n is power of 2: n & (n-1) == 0
     * - Why? (n-1) flips all bits after the single '1'
     * 
     * Examples:
     *   n = 8:  1000
     *   n-1 = 7: 0111
     *   8 & 7 = 0000 → true
     * 
     *   n = 6:  0110
     *   n-1 = 5: 0101
     *   6 & 5 = 0100 → false
     * 
     * Time Complexity: O(1) - Single operation!
     * Space Complexity: O(1)
     * 
     * ✅ BEST SOLUTION - Most elegant!
     */
    public static boolean isPowerOfTwo_BitManipulation(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }
    
    // ============================================
    // APPROACH 4: MATHEMATICAL
    // Time: O(log n), Space: O(1)
    // ============================================
    /**
     * Mathematical Approach using logarithm
     * 
     * Algorithm:
     * - If n is power of 2: log2(n) is an integer
     * - Use change of base: log2(n) = log(n) / log(2)
     * 
     * Time Complexity: O(log n) - Logarithm calculation
     * Space Complexity: O(1)
     * 
     * ⚠️ Be careful with floating point precision
     */
    public static boolean isPowerOfTwo_Math(int n) {
        if (n <= 0) return false;
        
        double log2 = Math.log(n) / Math.log(2);
        return log2 == (int) log2;
    }
    
    // ============================================
    // APPROACH 5: COUNT SET BITS
    // Time: O(1), Space: O(1)
    // ============================================
    /**
     * Count Set Bits Approach
     * 
     * Algorithm:
     * - Power of 2 has exactly one '1' bit
     * - Use Integer.bitCount() to count
     * 
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     * 
     * ✅ Another elegant solution
     */
    public static boolean isPowerOfTwo_BitCount(int n) {
        return n > 0 && Integer.bitCount(n) == 1;
    }
    
    // ============================================
    // BIT PATTERN DEMONSTRATION
    // ============================================
    static void demonstrateBitPattern() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("BIT PATTERN ANALYSIS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📊 Powers of 2 in Binary:");
        System.out.println("╔═══════╦══════════════╦═══════════════╦════════════╗");
        System.out.println("║   n   ║  Binary      ║   n-1 Binary  ║  n & (n-1) ║");
        System.out.println("╠═══════╬══════════════╬═══════════════╬════════════╣");
        
        int[] powers = {1, 2, 4, 8, 16, 32, 64, 128};
        for (int n : powers) {
            String binary = String.format("%8s", Integer.toBinaryString(n)).replace(' ', '0');
            String binaryMinus1 = String.format("%8s", Integer.toBinaryString(n - 1)).replace(' ', '0');
            int and = n & (n - 1);
            System.out.printf("║ %5d ║ %s ║  %s  ║   %4d     ║%n", 
                n, binary, binaryMinus1, and);
        }
        System.out.println("╚═══════╩══════════════╩═══════════════╩════════════╝");
        
        System.out.println("\n📊 Non-Powers of 2 in Binary:");
        System.out.println("╔═══════╦══════════════╦═══════════════╦════════════╗");
        System.out.println("║   n   ║  Binary      ║   n-1 Binary  ║  n & (n-1) ║");
        System.out.println("╠═══════╬══════════════╬═══════════════╬════════════╣");
        
        int[] nonPowers = {3, 5, 6, 7, 9, 10, 12, 15};
        for (int n : nonPowers) {
            String binary = String.format("%8s", Integer.toBinaryString(n)).replace(' ', '0');
            String binaryMinus1 = String.format("%8s", Integer.toBinaryString(n - 1)).replace(' ', '0');
            int and = n & (n - 1);
            System.out.printf("║ %5d ║ %s ║  %s  ║   %4d     ║%n", 
                n, binary, binaryMinus1, and);
        }
        System.out.println("╚═══════╩══════════════╩═══════════════╩════════════╝");
        
        System.out.println("\n💡 Key Observation:");
        System.out.println("✅ Power of 2: n & (n-1) = 0 (all have only ONE '1' bit)");
        System.out.println("❌ Not power of 2: n & (n-1) ≠ 0 (have MULTIPLE '1' bits)");
        
        System.out.println("\n📖 Why does n & (n-1) work?");
        System.out.println("Example: n = 8 (1000 in binary)");
        System.out.println("   n   = 1000");
        System.out.println("   n-1 = 0111  (flips all bits after the rightmost '1')");
        System.out.println("   &   = 0000  (no common '1' bits)");
        
        System.out.println("\nExample: n = 6 (0110 in binary)");
        System.out.println("   n   = 0110");
        System.out.println("   n-1 = 0101");
        System.out.println("   &   = 0100  (has common '1' bit)");
    }
    
    // ============================================
    // PERFORMANCE COMPARISON
    // ============================================
    static void performanceComparison() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PERFORMANCE COMPARISON");
        System.out.println("=".repeat(70));
        
        int iterations = 10000000;
        int testValue = 1048576; // 2^20
        
        System.out.println("\nTest: n = " + testValue + " (" + iterations + " iterations)");
        
        // Recursive
        long start1 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            isPowerOfTwo_Recursive(testValue);
        }
        long time1 = System.nanoTime() - start1;
        
        // Iterative
        long start2 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            isPowerOfTwo_Iterative(testValue);
        }
        long time2 = System.nanoTime() - start2;
        
        // Bit Manipulation
        long start3 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            isPowerOfTwo_BitManipulation(testValue);
        }
        long time3 = System.nanoTime() - start3;
        
        // Math
        long start4 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            isPowerOfTwo_Math(testValue);
        }
        long time4 = System.nanoTime() - start4;
        
        // Bit Count
        long start5 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            isPowerOfTwo_BitCount(testValue);
        }
        long time5 = System.nanoTime() - start5;
        
        System.out.println("\n╔════════════════════════╦═══════════╦═══════════════╗");
        System.out.println("║      Approach          ║   Time    ║  Complexity   ║");
        System.out.println("╠════════════════════════╬═══════════╬═══════════════╣");
        System.out.printf("║ Recursion              ║ %7.2f ms║  O(log n)     ║%n", time1/1000000.0);
        System.out.printf("║ Iteration              ║ %7.2f ms║  O(log n)     ║%n", time2/1000000.0);
        System.out.printf("║ Bit Manipulation ⭐    ║ %7.2f ms║  O(1)         ║%n", time3/1000000.0);
        System.out.printf("║ Math (logarithm)       ║ %7.2f ms║  O(log n)     ║%n", time4/1000000.0);
        System.out.printf("║ Bit Count              ║ %7.2f ms║  O(1)         ║%n", time5/1000000.0);
        System.out.println("╚════════════════════════╩═══════════╩═══════════════╝");
        
        System.out.println("\n📊 Speed Ranking:");
        System.out.println("1. Bit Manipulation: FASTEST (single AND operation)");
        System.out.println("2. Bit Count: Very fast (built-in CPU instruction)");
        System.out.println("3. Iteration: Fast (simple loop)");
        System.out.println("4. Recursion: Slower (function call overhead)");
        System.out.println("5. Math: Slowest (floating point logarithm)");
        
        System.out.println("\n✅ RECOMMENDED: Bit Manipulation (n & (n-1)) == 0");
        System.out.println("   - O(1) time and space");
        System.out.println("   - Fastest execution");
        System.out.println("   - Most elegant code");
    }
    
    // ============================================
    // INTERVIEW TIPS
    // ============================================
    static void printInterviewTips() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("INTERVIEW TIPS & TRICKS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n💡 Problem-Solving Approach:");
        
        System.out.println("\n1. Understand powers of 2:");
        System.out.println("   - 1, 2, 4, 8, 16, 32, 64, 128, 256...");
        System.out.println("   - In binary: only ONE '1' bit");
        System.out.println("   - Examples: 8 = 1000, 16 = 10000");
        
        System.out.println("\n2. Start with simple approach:");
        System.out.println("   - Divide by 2 repeatedly");
        System.out.println("   - Check if result is 1");
        
        System.out.println("\n3. Optimize with bit manipulation:");
        System.out.println("   - n & (n-1) removes rightmost '1' bit");
        System.out.println("   - If power of 2, result is 0");
        
        System.out.println("\n4. One-liner solution:");
        System.out.println("   return n > 0 && (n & (n - 1)) == 0;");
        
        System.out.println("\n📝 Key Points to Mention:");
        System.out.println("✅ Powers of 2 have exactly one '1' bit in binary");
        System.out.println("✅ n & (n-1) removes the rightmost '1' bit");
        System.out.println("✅ Check n > 0 to handle negative and zero");
        System.out.println("✅ O(1) time and space complexity");
        
        System.out.println("\n🎯 Edge Cases:");
        System.out.println("❌ n = 0: False (not a power)");
        System.out.println("❌ n < 0: False (negative numbers)");
        System.out.println("✅ n = 1: True (2^0 = 1)");
        System.out.println("✅ n = 2^30: True (within integer range)");
        
        System.out.println("\n🔥 Follow-up Questions:");
        System.out.println("Q: What if n is power of 3 or 4?");
        System.out.println("A: Power of 3 - divide by 3 (no bit trick)");
        System.out.println("   Power of 4 - n must be power of 2 AND n-1 divisible by 3");
        
        System.out.println("\nQ: Find the next power of 2?");
        System.out.println("A: Set all bits after the highest bit, then add 1");
        
        System.out.println("\nQ: Count number of 1 bits?");
        System.out.println("A: Use Brian Kernighan's algorithm: n & (n-1) in loop");
        
        System.out.println("\n⭐ Best Solution:");
        System.out.println("return n > 0 && (n & (n - 1)) == 0;");
        System.out.println("- Single line");
        System.out.println("- O(1) time and space");
        System.out.println("- Shows bit manipulation knowledge");
    }
}
