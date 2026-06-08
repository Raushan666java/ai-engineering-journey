package day38.tests;

import day38.fundamentals.DPFundamentals;
import day38.practice.Day38Practice;

import java.util.*;

/**
 * Comprehensive Test Suite for Day 38 - Dynamic Programming
 * Tests all fundamental concepts and practice problems
 */
public class TestDay38 {
    
    private static int testsRun = 0;
    private static int testsPassed = 0;
    
    // ==================== TEST UTILITIES ====================
    
    private static void assertEquals(Object expected, Object actual, String testName) {
        testsRun++;
        if (expected == null && actual == null || expected != null && expected.equals(actual)) {
            testsPassed++;
            System.out.println("✓ " + testName);
        } else {
            System.out.println("✗ " + testName);
            System.out.println("  Expected: " + expected);
            System.out.println("  Actual: " + actual);
        }
    }
    
    private static void assertTrue(boolean condition, String testName) {
        testsRun++;
        if (condition) {
            testsPassed++;
            System.out.println("✓ " + testName);
        } else {
            System.out.println("✗ " + testName);
        }
    }
    
    private static void assertArrayEquals(int[] expected, int[] actual, String testName) {
        assertEquals(Arrays.toString(expected), Arrays.toString(actual), testName);
    }
    
    // ==================== FIBONACCI TESTS ====================
    
    public static void testFibonacci() {
        System.out.println("\n--- Testing Fibonacci ---");
        
        assertEquals(0L, DPFundamentals.fibonacciNaive(0), "Test Fibonacci(0) naive");
        assertEquals(1L, DPFundamentals.fibonacciNaive(1), "Test Fibonacci(1) naive");
        assertEquals(55L, DPFundamentals.fibonacciNaive(10), "Test Fibonacci(10) naive");
        
        assertEquals(55L, DPFundamentals.fibonacciMemo(10), "Test Fibonacci(10) memoization");
        assertEquals(55L, DPFundamentals.fibonacciTab(10), "Test Fibonacci(10) tabulation");
        assertEquals(55L, DPFundamentals.fibonacciOptimized(10), "Test Fibonacci(10) optimized");
        
        // Large number test
        assertEquals(6765L, DPFundamentals.fibonacciOptimized(20), "Test Fibonacci(20)");
    }
    
    // ==================== CLIMBING STAIRS TESTS ====================
    
    public static void testClimbingStairs() {
        System.out.println("\n--- Testing Climbing Stairs ---");
        
        assertEquals(1, DPFundamentals.climbStairs(1), "Test 1 stair");
        assertEquals(2, DPFundamentals.climbStairs(2), "Test 2 stairs");
        assertEquals(3, DPFundamentals.climbStairs(3), "Test 3 stairs");
        assertEquals(5, DPFundamentals.climbStairs(4), "Test 4 stairs");
        assertEquals(8, DPFundamentals.climbStairs(5), "Test 5 stairs");
        
        // Space optimized
        assertEquals(8, DPFundamentals.climbStairsOptimized(5), "Test 5 stairs optimized");
        assertEquals(89, DPFundamentals.climbStairsOptimized(10), "Test 10 stairs optimized");
    }
    
    // ==================== HOUSE ROBBER TESTS ====================
    
    public static void testHouseRobber() {
        System.out.println("\n--- Testing House Robber ---");
        
        int[] houses1 = {1, 2, 3, 1};
        assertEquals(4, DPFundamentals.rob(houses1), "Test case 1");
        
        int[] houses2 = {2, 7, 9, 3, 1};
        assertEquals(12, DPFundamentals.rob(houses2), "Test case 2");
        
        int[] houses3 = {2, 1, 1, 2};
        assertEquals(4, DPFundamentals.rob(houses3), "Test case 3");
        
        // Space optimized
        assertEquals(12, DPFundamentals.robOptimized(houses2), "Test case 2 optimized");
        
        // Edge cases
        int[] houses4 = {5};
        assertEquals(5, DPFundamentals.rob(houses4), "Test single house");
        
        int[] houses5 = {5, 3};
        assertEquals(5, DPFundamentals.rob(houses5), "Test two houses");
    }
    
    // ==================== COIN CHANGE TESTS ====================
    
    public static void testCoinChange() {
        System.out.println("\n--- Testing Coin Change ---");
        
        int[] coins1 = {1, 2, 5};
        assertEquals(3, DPFundamentals.coinChange(coins1, 11), "Test case 1");
        
        int[] coins2 = {2};
        assertEquals(-1, DPFundamentals.coinChange(coins2, 3), "Test impossible case");
        
        int[] coins3 = {1};
        assertEquals(0, DPFundamentals.coinChange(coins3, 0), "Test amount 0");
        
        int[] coins4 = {1, 2, 5};
        List<Integer> path = DPFundamentals.coinChangeWithPath(coins4, 11);
        assertTrue(path.size() == 3, "Test coin path length");
        
        int sum = 0;
        for (int coin : path) sum += coin;
        assertEquals(11, sum, "Test coin path sum");
    }
    
    // ==================== LIS TESTS ====================
    
    public static void testLongestIncreasingSubsequence() {
        System.out.println("\n--- Testing Longest Increasing Subsequence ---");
        
        int[] nums1 = {10, 9, 2, 5, 3, 7, 101, 18};
        assertEquals(4, DPFundamentals.lengthOfLIS(nums1), "Test case 1");
        assertEquals(4, DPFundamentals.lengthOfLISOptimized(nums1), "Test case 1 optimized");
        
        int[] nums2 = {0, 1, 0, 3, 2, 3};
        assertEquals(4, DPFundamentals.lengthOfLIS(nums2), "Test case 2");
        
        int[] nums3 = {7, 7, 7, 7, 7, 7, 7};
        assertEquals(1, DPFundamentals.lengthOfLIS(nums3), "Test all same");
        
        int[] nums4 = {1, 3, 6, 7, 9, 4, 10, 5, 6};
        assertEquals(6, DPFundamentals.lengthOfLISOptimized(nums4), "Test case 4");
    }
    
    // ==================== MAXIMUM SUBARRAY TESTS ====================
    
    public static void testMaximumSubarray() {
        System.out.println("\n--- Testing Maximum Subarray ---");
        
        int[] nums1 = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        assertEquals(6, DPFundamentals.maxSubArray(nums1), "Test case 1");
        
        int[] nums2 = {1};
        assertEquals(1, DPFundamentals.maxSubArray(nums2), "Test single element");
        
        int[] nums3 = {5, 4, -1, 7, 8};
        assertEquals(23, DPFundamentals.maxSubArray(nums3), "Test all positive");
        
        // Test with indices
        int[] result = DPFundamentals.maxSubArrayWithIndices(nums1);
        assertEquals(6, result[0], "Test max sum with indices");
        assertEquals(3, result[1], "Test start index");
        assertEquals(6, result[2], "Test end index");
    }
    
    // ==================== UNIQUE PATHS TESTS ====================
    
    public static void testUniquePaths() {
        System.out.println("\n--- Testing Unique Paths ---");
        
        assertEquals(3, DPFundamentals.uniquePaths(2, 3), "Test 2x3 grid");
        assertEquals(28, DPFundamentals.uniquePaths(3, 7), "Test 3x7 grid");
        assertEquals(1, DPFundamentals.uniquePaths(1, 1), "Test 1x1 grid");
        
        // Space optimized
        assertEquals(28, DPFundamentals.uniquePathsOptimized(3, 7), "Test 3x7 optimized");
        assertEquals(6, DPFundamentals.uniquePathsOptimized(3, 3), "Test 3x3 optimized");
    }
    
    // ==================== DECODE WAYS TESTS ====================
    
    public static void testDecodeWays() {
        System.out.println("\n--- Testing Decode Ways ---");
        
        assertEquals(2, DPFundamentals.numDecodings("12"), "Test '12'");
        assertEquals(3, DPFundamentals.numDecodings("226"), "Test '226'");
        assertEquals(0, DPFundamentals.numDecodings("06"), "Test '06' (invalid)");
        
        // Space optimized
        assertEquals(3, DPFundamentals.numDecodingsOptimized("226"), "Test '226' optimized");
        assertEquals(1, DPFundamentals.numDecodingsOptimized("10"), "Test '10'");
    }
    
    // ==================== PRACTICE PROBLEM TESTS ====================
    
    public static void testMinCostClimbingStairs() {
        System.out.println("\n--- Testing Min Cost Climbing Stairs ---");
        
        int[] cost1 = {10, 15, 20};
        assertEquals(15, Day38Practice.minCostClimbingStairs(cost1), "Test case 1");
        
        int[] cost2 = {1, 100, 1, 1, 1, 100, 1, 1, 100, 1};
        assertEquals(6, Day38Practice.minCostClimbingStairs(cost2), "Test case 2");
        
        // Space optimized
        assertEquals(6, Day38Practice.minCostClimbingStairsOptimized(cost2), "Test case 2 optimized");
    }
    
    public static void testDeleteAndEarn() {
        System.out.println("\n--- Testing Delete and Earn ---");
        
        int[] nums1 = {3, 4, 2};
        assertEquals(6, Day38Practice.deleteAndEarn(nums1), "Test case 1");
        
        int[] nums2 = {2, 2, 3, 3, 3, 4};
        assertEquals(9, Day38Practice.deleteAndEarn(nums2), "Test case 2");
        
        int[] nums3 = {1, 1, 1, 2, 4, 5, 5, 5, 6};
        assertEquals(18, Day38Practice.deleteAndEarn(nums3), "Test case 3");
    }
    
    public static void testWordBreak() {
        System.out.println("\n--- Testing Word Break ---");
        
        List<String> dict1 = Arrays.asList("leet", "code");
        assertTrue(Day38Practice.wordBreak("leetcode", dict1), "Test case 1");
        
        List<String> dict2 = Arrays.asList("apple", "pen");
        assertTrue(Day38Practice.wordBreak("applepenapple", dict2), "Test case 2");
        
        List<String> dict3 = Arrays.asList("cats", "dog", "sand", "and", "cat");
        assertTrue(!Day38Practice.wordBreak("catsandog", dict3), "Test case 3 (false)");
        
        // Test with path
        List<String> path = Day38Practice.wordBreakWithPath("leetcode", dict1);
        assertEquals("[leet, code]", path.toString(), "Test path reconstruction");
    }
    
    public static void testPerfectSquares() {
        System.out.println("\n--- Testing Perfect Squares ---");
        
        assertEquals(3, Day38Practice.numSquares(12), "Test n=12");
        assertEquals(2, Day38Practice.numSquares(13), "Test n=13");
        assertEquals(1, Day38Practice.numSquares(1), "Test n=1");
        
        // BFS approach
        assertEquals(3, Day38Practice.numSquaresBFS(12), "Test n=12 BFS");
        assertEquals(2, Day38Practice.numSquaresBFS(13), "Test n=13 BFS");
    }
    
    public static void testPartitionEqualSubsetSum() {
        System.out.println("\n--- Testing Partition Equal Subset Sum ---");
        
        int[] nums1 = {1, 5, 11, 5};
        assertTrue(Day38Practice.canPartition(nums1), "Test case 1");
        
        int[] nums2 = {1, 2, 3, 5};
        assertTrue(!Day38Practice.canPartition(nums2), "Test case 2 (false)");
        
        int[] nums3 = {1, 2, 5};
        assertTrue(!Day38Practice.canPartition(nums3), "Test case 3 (odd sum)");
        
        // Test with path
        List<List<Integer>> partitions = Day38Practice.canPartitionWithPath(nums1);
        assertTrue(partitions.size() == 2, "Test partition count");
    }
    
    public static void testTargetSum() {
        System.out.println("\n--- Testing Target Sum ---");
        
        int[] nums1 = {1, 1, 1, 1, 1};
        assertEquals(5, Day38Practice.findTargetSumWays(nums1, 3), "Test case 1");
        
        int[] nums2 = {1};
        assertEquals(1, Day38Practice.findTargetSumWays(nums2, 1), "Test case 2");
        
        // Memoization approach
        assertEquals(5, Day38Practice.findTargetSumWaysMemo(nums1, 3), "Test case 1 memo");
    }
    
    public static void testCountingBits() {
        System.out.println("\n--- Testing Counting Bits ---");
        
        int[] expected1 = {0, 1, 1, 2, 1, 2};
        assertArrayEquals(expected1, Day38Practice.countBits(5), "Test n=5");
        
        int[] expected2 = {0, 1, 1};
        assertArrayEquals(expected2, Day38Practice.countBits(2), "Test n=2");
        
        // Alternative approach
        assertArrayEquals(expected1, Day38Practice.countBitsAlternative(5), "Test n=5 alternative");
    }
    
    public static void testIntegerBreak() {
        System.out.println("\n--- Testing Integer Break ---");
        
        assertEquals(1, Day38Practice.integerBreak(2), "Test n=2");
        assertEquals(36, Day38Practice.integerBreak(10), "Test n=10");
        assertEquals(81, Day38Practice.integerBreak(12), "Test n=12");  // 3*3*3*3 = 81
        
        // Optimized approach
        assertEquals(36, Day38Practice.integerBreakOptimized(10), "Test n=10 optimized");
        assertEquals(81, Day38Practice.integerBreakOptimized(12), "Test n=12 optimized");  // 3*3*3*3 = 81
    }
    
    // ==================== INTEGRATION TESTS ====================
    
    public static void testDPPatterns() {
        System.out.println("\n--- Testing DP Patterns ---");
        
        // Pattern 1: Linear DP (Fibonacci-like)
        assertTrue(DPFundamentals.climbStairs(5) == DPFundamentals.fibonacciOptimized(6), 
                  "Test Fibonacci pattern in climbing stairs");
        
        // Pattern 2: State Machine (House Robber)
        int[] houses = {2, 1, 1, 2};
        assertTrue(DPFundamentals.rob(houses) == DPFundamentals.robOptimized(houses),
                  "Test DP vs optimized equivalence");
        
        // Pattern 3: Unbounded Knapsack (Coin Change)
        int[] coins = {1, 2, 5};
        int minCoins = DPFundamentals.coinChange(coins, 11);
        assertTrue(minCoins > 0 && minCoins <= 11, "Test valid coin change result");
    }
    
    // ==================== MAIN TEST RUNNER ====================
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════╗");
        System.out.println("║     DAY 38 COMPREHENSIVE TEST SUITE                   ║");
        System.out.println("║     Dynamic Programming Fundamentals                   ║");
        System.out.println("╚════════════════════════════════════════════════════════╝");
        
        // Fundamental DP Tests
        testFibonacci();
        testClimbingStairs();
        testHouseRobber();
        testCoinChange();
        testLongestIncreasingSubsequence();
        testMaximumSubarray();
        testUniquePaths();
        testDecodeWays();
        
        // Practice Problem Tests
        testMinCostClimbingStairs();
        testDeleteAndEarn();
        testWordBreak();
        testPerfectSquares();
        testPartitionEqualSubsetSum();
        testTargetSum();
        testCountingBits();
        testIntegerBreak();
        
        // Integration Tests
        testDPPatterns();
        
        // Summary
        System.out.println("\n╔════════════════════════════════════════════════════════╗");
        System.out.println("║                    TEST SUMMARY                        ║");
        System.out.println("╠════════════════════════════════════════════════════════╣");
        System.out.printf("║  Tests Run:    %-40d║%n", testsRun);
        System.out.printf("║  Tests Passed: %-40d║%n", testsPassed);
        System.out.printf("║  Tests Failed: %-40d║%n", testsRun - testsPassed);
        System.out.printf("║  Success Rate: %.2f%%%-35s║%n", 
                         (testsPassed * 100.0 / testsRun), "");
        System.out.println("╚════════════════════════════════════════════════════════╝");
        
        if (testsPassed == testsRun) {
            System.out.println("\n🎉 ALL TESTS PASSED! DP fundamentals mastered!");
        } else {
            System.out.println("\n⚠ Some tests failed. Please review the output above.");
        }
    }
}
