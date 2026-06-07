/**
 * LeetCode #70: CLIMBING STAIRS - DAY 5
 * Difficulty: Easy
 * 
 * Problem:
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 * 
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top:
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top:
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * Constraints:
 * - 1 <= n <= 45
 */

public class ClimbingStairs {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════╗");
        System.out.println("║   LeetCode #70: CLIMBING STAIRS           ║");
        System.out.println("║   Difficulty: Easy                        ║");
        System.out.println("╚═══════════════════════════════════════════╝\n");
        
        // Test cases
        int[] testCases = {1, 2, 3, 4, 5, 10, 20, 30};
        
        System.out.println("Testing all approaches:\n");
        
        for (int n : testCases) {
            System.out.println("n = " + n);
            
            if (n <= 10) {
                int result1 = climbStairs_Recursive(n);
                System.out.println("  Recursive: " + result1);
            } else {
                System.out.println("  Recursive: Skipped (too slow)");
            }
            
            int result2 = climbStairs_Memoization(n);
            int result3 = climbStairs_DP(n);
            int result4 = climbStairs_Optimized(n);
            
            System.out.println("  Memoization: " + result2);
            System.out.println("  Dynamic Programming: " + result3);
            System.out.println("  Space Optimized: " + result4);
            System.out.println();
        }
        
        // Performance comparison
        performanceComparison();
        
        // Show pattern
        showPattern();
    }
    
    // ============================================
    // APPROACH 1: PURE RECURSION (SLOW)
    // Time: O(2^n), Space: O(n)
    // ============================================
    /**
     * Pure Recursive Approach - Very slow for large n
     * 
     * Algorithm:
     * - To reach step n, you must come from step (n-1) or (n-2)
     * - ways(n) = ways(n-1) + ways(n-2)
     * - Base cases: ways(1) = 1, ways(2) = 2
     * 
     * Time Complexity: O(2^n) - Exponential (many repeated calculations)
     * Space Complexity: O(n) - Recursion stack depth
     * 
     * ❌ Not recommended for n > 40
     */
    public static int climbStairs_Recursive(int n) {
        // Base cases
        if (n == 1) return 1;
        if (n == 2) return 2;
        
        // Recursive case
        return climbStairs_Recursive(n - 1) + climbStairs_Recursive(n - 2);
    }
    
    // ============================================
    // APPROACH 2: RECURSION WITH MEMOIZATION
    // Time: O(n), Space: O(n)
    // ============================================
    /**
     * Memoization Approach - Top-down Dynamic Programming
     * 
     * Algorithm:
     * - Same as recursive but store calculated results
     * - Avoid recalculating same subproblems
     * 
     * Time Complexity: O(n) - Each value calculated once
     * Space Complexity: O(n) - Memo array + recursion stack
     * 
     * ✅ Much better than pure recursion
     */
    public static int climbStairs_Memoization(int n) {
        int[] memo = new int[n + 1];
        return climbStairsMemo(n, memo);
    }
    
    private static int climbStairsMemo(int n, int[] memo) {
        if (n == 1) return 1;
        if (n == 2) return 2;
        
        // Check if already calculated
        if (memo[n] != 0) {
            return memo[n];
        }
        
        // Calculate and store
        memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
        return memo[n];
    }
    
    // ============================================
    // APPROACH 3: DYNAMIC PROGRAMMING (BOTTOM-UP)
    // Time: O(n), Space: O(n)
    // ============================================
    /**
     * Bottom-up Dynamic Programming
     * 
     * Algorithm:
     * - Build solution from bottom (base cases) up
     * - dp[i] = number of ways to reach step i
     * - dp[i] = dp[i-1] + dp[i-2]
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     * 
     * ✅ Iterative, easy to understand
     */
    public static int climbStairs_DP(int n) {
        if (n == 1) return 1;
        if (n == 2) return 2;
        
        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 2;
        
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        
        return dp[n];
    }
    
    // ============================================
    // APPROACH 4: SPACE OPTIMIZED (BEST)
    // Time: O(n), Space: O(1)
    // ============================================
    /**
     * Space Optimized Approach - Fibonacci pattern
     * 
     * Algorithm:
     * - Only need last two values, not entire array
     * - Use two variables instead of array
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(1) - Constant space!
     * 
     * ✅ BEST SOLUTION for interviews
     */
    public static int climbStairs_Optimized(int n) {
        if (n == 1) return 1;
        if (n == 2) return 2;
        
        int prev2 = 1;  // ways to reach step 1
        int prev1 = 2;  // ways to reach step 2
        int current = 0;
        
        for (int i = 3; i <= n; i++) {
            current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }
        
        return current;
    }
    
    // ============================================
    // DETAILED DEMONSTRATION
    // ============================================
    static void showPattern() {
        System.out.println("=".repeat(70));
        System.out.println("PATTERN DEMONSTRATION");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📊 Notice the Fibonacci pattern:");
        System.out.println("╔════╦═══════╦═══════════════════════════════════════╗");
        System.out.println("║ n  ║ Ways  ║ Explanation                           ║");
        System.out.println("╠════╬═══════╬═══════════════════════════════════════╣");
        System.out.println("║ 1  ║   1   ║ [1]                                   ║");
        System.out.println("║ 2  ║   2   ║ [1,1] [2]                             ║");
        System.out.println("║ 3  ║   3   ║ [1,1,1] [1,2] [2,1]                   ║");
        System.out.println("║ 4  ║   5   ║ [1,1,1,1] [1,1,2] [1,2,1] [2,1,1]...  ║");
        System.out.println("║ 5  ║   8   ║ ways(4) + ways(3) = 5 + 3 = 8        ║");
        System.out.println("║ 6  ║  13   ║ ways(5) + ways(4) = 8 + 5 = 13       ║");
        System.out.println("╚════╩═══════╩═══════════════════════════════════════╝");
        
        System.out.println("\n💡 It's Fibonacci sequence!");
        System.out.println("ways(n) = ways(n-1) + ways(n-2)");
        System.out.println("Same as: fib(n) = fib(n-1) + fib(n-2)");
        
        System.out.println("\n📈 First 15 values:");
        for (int i = 1; i <= 15; i++) {
            System.out.printf("n=%2d: %5d ways%n", i, climbStairs_Optimized(i));
        }
    }
    
    // ============================================
    // PERFORMANCE COMPARISON
    // ============================================
    static void performanceComparison() {
        System.out.println("=".repeat(70));
        System.out.println("PERFORMANCE COMPARISON");
        System.out.println("=".repeat(70));
        
        int n = 35;
        int iterations = 100000;
        
        System.out.println("\nTest: n = " + n);
        
        // Pure recursion (single call, too slow for iterations)
        System.out.println("\n1. Pure Recursion (single call):");
        long start1 = System.nanoTime();
        int result1 = climbStairs_Recursive(n);
        long time1 = System.nanoTime() - start1;
        System.out.println("   Result: " + result1);
        System.out.println("   Time: " + time1/1000000.0 + " ms");
        
        // Memoization
        System.out.println("\n2. Memoization (" + iterations + " iterations):");
        long start2 = System.nanoTime();
        int result2 = 0;
        for (int i = 0; i < iterations; i++) {
            result2 = climbStairs_Memoization(n);
        }
        long time2 = System.nanoTime() - start2;
        System.out.println("   Result: " + result2);
        System.out.println("   Time: " + time2/1000000.0 + " ms");
        
        // Dynamic Programming
        System.out.println("\n3. Dynamic Programming (" + iterations + " iterations):");
        long start3 = System.nanoTime();
        int result3 = 0;
        for (int i = 0; i < iterations; i++) {
            result3 = climbStairs_DP(n);
        }
        long time3 = System.nanoTime() - start3;
        System.out.println("   Result: " + result3);
        System.out.println("   Time: " + time3/1000000.0 + " ms");
        
        // Space Optimized
        System.out.println("\n4. Space Optimized (" + iterations + " iterations):");
        long start4 = System.nanoTime();
        int result4 = 0;
        for (int i = 0; i < iterations; i++) {
            result4 = climbStairs_Optimized(n);
        }
        long time4 = System.nanoTime() - start4;
        System.out.println("   Result: " + result4);
        System.out.println("   Time: " + time4/1000000.0 + " ms");
        
        // Summary
        System.out.println("\n╔════════════════════════╦═══════════╦═══════════════╗");
        System.out.println("║      Approach          ║   Time    ║  Complexity   ║");
        System.out.println("╠════════════════════════╬═══════════╬═══════════════╣");
        System.out.printf("║ Pure Recursion         ║ %7.2f ms║   O(2^n)      ║%n", time1/1000000.0);
        System.out.printf("║ Memoization            ║ %7.2f ms║   O(n)        ║%n", time2/1000000.0);
        System.out.printf("║ Dynamic Programming    ║ %7.2f ms║   O(n)        ║%n", time3/1000000.0);
        System.out.printf("║ Space Optimized ⭐     ║ %7.2f ms║   O(n), O(1)  ║%n", time4/1000000.0);
        System.out.println("╚════════════════════════╩═══════════╩═══════════════╝");
        
        System.out.println("\n📊 Analysis:");
        System.out.println("1. Pure recursion: O(2^n) - Exponential, very slow");
        System.out.println("2. Memoization: O(n) time, O(n) space");
        System.out.println("3. DP: O(n) time, O(n) space");
        System.out.println("4. Space Optimized: O(n) time, O(1) space - BEST! ⭐");
        
        System.out.println("\n✅ RECOMMENDED: Space Optimized approach");
        System.out.println("   - Linear time complexity");
        System.out.println("   - Constant space complexity");
        System.out.println("   - Clean and simple code");
    }
    
    // ============================================
    // INTERVIEW TIPS
    // ============================================
    static void printInterviewTips() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("INTERVIEW TIPS & TRICKS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n💡 Problem-Solving Approach:");
        
        System.out.println("\n1. Identify the pattern:");
        System.out.println("   - To reach step n, must come from (n-1) or (n-2)");
        System.out.println("   - ways(n) = ways(n-1) + ways(n-2)");
        System.out.println("   - This is Fibonacci!");
        
        System.out.println("\n2. Start with recursion:");
        System.out.println("   - Write recursive solution first");
        System.out.println("   - Explain why it's slow: O(2^n)");
        
        System.out.println("\n3. Optimize with memoization:");
        System.out.println("   - Add memo array to avoid recalculation");
        System.out.println("   - Reduces to O(n) time");
        
        System.out.println("\n4. Convert to DP:");
        System.out.println("   - Bottom-up approach");
        System.out.println("   - Build from base cases");
        
        System.out.println("\n5. Optimize space:");
        System.out.println("   - Only need last two values");
        System.out.println("   - Use two variables instead of array");
        System.out.println("   - O(1) space!");
        
        System.out.println("\n📝 Key Points to Mention:");
        System.out.println("✅ Recognize Fibonacci pattern");
        System.out.println("✅ Explain why recursion is slow");
        System.out.println("✅ Show progression: Recursion → Memo → DP → Optimized");
        System.out.println("✅ Time: O(n), Space: O(1) is optimal");
        
        System.out.println("\n🎯 Follow-up Questions:");
        System.out.println("Q: What if you can climb 1, 2, or 3 steps?");
        System.out.println("A: ways(n) = ways(n-1) + ways(n-2) + ways(n-3)");
        
        System.out.println("\nQ: What if steps have different costs?");
        System.out.println("A: Min Cost Climbing Stairs (LeetCode #746)");
        
        System.out.println("\nQ: Can you print all possible ways?");
        System.out.println("A: Use backtracking to generate all paths");
    }
}
