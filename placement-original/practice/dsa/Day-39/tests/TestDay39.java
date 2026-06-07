package day39.tests;

import day39.fundamentals.TwoDimensionalDP;
import day39.practice.Day39Practice;

/**
 * Day 39: Comprehensive Test Suite for 2D Dynamic Programming
 * 
 * Test Coverage:
 * - Fundamental 2D DP Problems (40 tests)
 * - Advanced Practice Problems (25 tests)
 * - Edge Cases (5 tests)
 * Total: 70+ tests
 */
public class TestDay39 {
    
    private static int totalTests = 0;
    private static int passedTests = 0;
    
    // ==================== HELPER METHODS ====================
    
    private static void test(boolean condition, String testName) {
        totalTests++;
        if (condition) {
            passedTests++;
            System.out.println("✓ " + testName);
        } else {
            System.out.println("✗ " + testName + " FAILED");
        }
    }
    
    private static boolean arrayEquals(int[] a, int[] b) {
        if (a == null || b == null) return a == b;
        if (a.length != b.length) return false;
        for (int i = 0; i < a.length; i++) {
            if (a[i] != b[i]) return false;
        }
        return true;
    }
    
    // ==================== 1. LCS TESTS ====================
    
    private static void testLCS() {
        System.out.println("\n=== Testing Longest Common Subsequence ===");
        
        test(TwoDimensionalDP.longestCommonSubsequence("abcde", "ace") == 3, 
             "LCS Test 1: Basic case");
        test(TwoDimensionalDP.longestCommonSubsequence("abc", "abc") == 3, 
             "LCS Test 2: Identical strings");
        test(TwoDimensionalDP.longestCommonSubsequence("abc", "def") == 0, 
             "LCS Test 3: No common subsequence");
        test(TwoDimensionalDP.longestCommonSubsequence("", "abc") == 0, 
             "LCS Test 4: Empty string");
        test(TwoDimensionalDP.longestCommonSubsequence("AGGTAB", "GXTXAYB") == 4, 
             "LCS Test 5: Complex case");
        
        test(TwoDimensionalDP.longestCommonSubsequenceString("abcde", "ace").equals("ace"), 
             "LCS String Test 1");
        test(TwoDimensionalDP.longestCommonSubsequenceString("AGGTAB", "GXTXAYB").equals("GTAB"), 
             "LCS String Test 2");
        
        test(TwoDimensionalDP.longestCommonSubsequenceOptimized("abcde", "ace") == 3, 
             "LCS Optimized Test 1");
        test(TwoDimensionalDP.longestCommonSubsequenceOptimized("AGGTAB", "GXTXAYB") == 4, 
             "LCS Optimized Test 2");
    }
    
    // ==================== 2. EDIT DISTANCE TESTS ====================
    
    private static void testEditDistance() {
        System.out.println("\n=== Testing Edit Distance ===");
        
        test(TwoDimensionalDP.minDistance("horse", "ros") == 3, 
             "Edit Distance Test 1: horse → ros");
        test(TwoDimensionalDP.minDistance("intention", "execution") == 5, 
             "Edit Distance Test 2: intention → execution");
        test(TwoDimensionalDP.minDistance("", "abc") == 3, 
             "Edit Distance Test 3: Empty to abc");
        test(TwoDimensionalDP.minDistance("abc", "abc") == 0, 
             "Edit Distance Test 4: Identical strings");
        test(TwoDimensionalDP.minDistance("a", "b") == 1, 
             "Edit Distance Test 5: Single char replace");
        
        test(TwoDimensionalDP.minDistanceWithOperations("abc", "adc").size() >= 1, 
             "Edit Operations Test 1: One operation");
        test(TwoDimensionalDP.minDistanceWithOperations("horse", "ros").size() >= 3, 
             "Edit Operations Test 2: Three operations");
        
        test(TwoDimensionalDP.minDistanceOptimized("horse", "ros") == 3, 
             "Edit Distance Optimized Test 1");
        test(TwoDimensionalDP.minDistanceOptimized("intention", "execution") == 5, 
             "Edit Distance Optimized Test 2");
    }
    
    // ==================== 3. LONGEST COMMON SUBSTRING TESTS ====================
    
    private static void testLongestCommonSubstring() {
        System.out.println("\n=== Testing Longest Common Substring ===");
        
        test(TwoDimensionalDP.longestCommonSubstring("abcde", "abfce") == 2, 
             "LCS Substring Test 1: ab");
        test(TwoDimensionalDP.longestCommonSubstring("GeeksforGeeks", "GeeksQuiz") == 5, 
             "LCS Substring Test 2: Geeks");
        test(TwoDimensionalDP.longestCommonSubstring("abc", "def") == 0, 
             "LCS Substring Test 3: No common");
        test(TwoDimensionalDP.longestCommonSubstring("abcdef", "zcdemf") >= 2, 
             "LCS Substring Test 4: cd or de (length >= 2)");
        
        test(TwoDimensionalDP.longestCommonSubstringString("abcde", "abfce").equals("ab"), 
             "LCS Substring String Test 1");
        test(TwoDimensionalDP.longestCommonSubstringString("GeeksforGeeks", "GeeksQuiz").equals("Geeks"), 
             "LCS Substring String Test 2");
        
        test(TwoDimensionalDP.longestCommonSubstringOptimized("abcde", "abfce") == 2, 
             "LCS Substring Optimized Test 1");
    }
    
    // ==================== 4. DISTINCT SUBSEQUENCES TESTS ====================
    
    private static void testDistinctSubsequences() {
        System.out.println("\n=== Testing Distinct Subsequences ===");
        
        test(TwoDimensionalDP.numDistinct("rabbbit", "rabbit") == 3, 
             "Distinct Subsequences Test 1");
        test(TwoDimensionalDP.numDistinct("babgbag", "bag") == 5, 
             "Distinct Subsequences Test 2");
        test(TwoDimensionalDP.numDistinct("abc", "def") == 0, 
             "Distinct Subsequences Test 3: No match");
        test(TwoDimensionalDP.numDistinct("", "") == 1, 
             "Distinct Subsequences Test 4: Empty strings");
        
        test(TwoDimensionalDP.numDistinctOptimized("rabbbit", "rabbit") == 3, 
             "Distinct Subsequences Optimized Test 1");
        test(TwoDimensionalDP.numDistinctOptimized("babgbag", "bag") == 5, 
             "Distinct Subsequences Optimized Test 2");
    }
    
    // ==================== 5. WILDCARD MATCHING TESTS ====================
    
    private static void testWildcardMatching() {
        System.out.println("\n=== Testing Wildcard Matching ===");
        
        test(!TwoDimensionalDP.isMatch("aa", "a"), 
             "Wildcard Test 1: No match");
        test(TwoDimensionalDP.isMatch("aa", "*"), 
             "Wildcard Test 2: Star matches all");
        test(!TwoDimensionalDP.isMatch("cb", "?a"), 
             "Wildcard Test 3: ? doesn't match");
        test(TwoDimensionalDP.isMatch("adceb", "*a*b"), 
             "Wildcard Test 4: Complex pattern");
        test(!TwoDimensionalDP.isMatch("acdcb", "a*c?b"), 
             "Wildcard Test 5: Mixed pattern no match");
        test(TwoDimensionalDP.isMatch("", "*"), 
             "Wildcard Test 6: Empty string with star");
        
        test(TwoDimensionalDP.isMatchOptimized("aa", "*"), 
             "Wildcard Optimized Test 1");
        test(TwoDimensionalDP.isMatchOptimized("adceb", "*a*b"), 
             "Wildcard Optimized Test 2");
    }
    
    // ==================== 6. REGEX MATCHING TESTS ====================
    
    private static void testRegexMatching() {
        System.out.println("\n=== Testing Regular Expression Matching ===");
        
        test(!TwoDimensionalDP.isMatchRegex("aa", "a"), 
             "Regex Test 1: Basic no match");
        test(TwoDimensionalDP.isMatchRegex("aa", "a*"), 
             "Regex Test 2: Star matches multiple");
        test(TwoDimensionalDP.isMatchRegex("ab", ".*"), 
             "Regex Test 3: .* matches all");
        test(TwoDimensionalDP.isMatchRegex("aab", "c*a*b"), 
             "Regex Test 4: Complex pattern");
        test(!TwoDimensionalDP.isMatchRegex("mississippi", "mis*is*p*."), 
             "Regex Test 5: Complex no match");
        test(TwoDimensionalDP.isMatchRegex("aaa", "a*a"), 
             "Regex Test 6: Multiple stars");
    }
    
    // ==================== 7. INTERLEAVING STRING TESTS ====================
    
    private static void testInterleavingString() {
        System.out.println("\n=== Testing Interleaving String ===");
        
        test(TwoDimensionalDP.isInterleave("aabcc", "dbbca", "aadbbcbcac"), 
             "Interleaving Test 1: Valid interleaving");
        test(!TwoDimensionalDP.isInterleave("aabcc", "dbbca", "aadbbbaccc"), 
             "Interleaving Test 2: Invalid interleaving");
        test(TwoDimensionalDP.isInterleave("", "", ""), 
             "Interleaving Test 3: All empty");
        test(TwoDimensionalDP.isInterleave("a", "b", "ab"), 
             "Interleaving Test 4: Simple case");
        
        test(TwoDimensionalDP.isInterleaveOptimized("aabcc", "dbbca", "aadbbcbcac"), 
             "Interleaving Optimized Test 1");
        test(!TwoDimensionalDP.isInterleaveOptimized("aabcc", "dbbca", "aadbbbaccc"), 
             "Interleaving Optimized Test 2");
    }
    
    // ==================== 8. MINIMUM PATH SUM TESTS ====================
    
    private static void testMinimumPathSum() {
        System.out.println("\n=== Testing Minimum Path Sum ===");
        
        int[][] grid1 = {{1,3,1},{1,5,1},{4,2,1}};
        test(TwoDimensionalDP.minPathSum(grid1) == 7, 
             "Min Path Sum Test 1: 3x3 grid");
        
        int[][] grid2 = {{1,2,3},{4,5,6}};
        test(TwoDimensionalDP.minPathSum(grid2) == 12, 
             "Min Path Sum Test 2: 2x3 grid");
        
        int[][] grid3 = {{1}};
        test(TwoDimensionalDP.minPathSum(grid3) == 1, 
             "Min Path Sum Test 3: Single cell");
        
        test(TwoDimensionalDP.minPathSumWithPath(grid1).size() == 5, 
             "Min Path Sum With Path Test: 5 steps");
        
        test(TwoDimensionalDP.minPathSumOptimized(grid1) == 7, 
             "Min Path Sum Optimized Test 1");
        test(TwoDimensionalDP.minPathSumOptimized(grid2) == 12, 
             "Min Path Sum Optimized Test 2");
    }
    
    // ==================== 9. MAXIMAL SQUARE TESTS ====================
    
    private static void testMaximalSquare() {
        System.out.println("\n=== Testing Maximal Square ===");
        
        char[][] matrix1 = {
            {'1','0','1','0','0'},
            {'1','0','1','1','1'},
            {'1','1','1','1','1'},
            {'1','0','0','1','0'}
        };
        test(Day39Practice.maximalSquare(matrix1) == 4, 
             "Maximal Square Test 1: 2x2 square");
        
        char[][] matrix2 = {
            {'0','1'},
            {'1','0'}
        };
        test(Day39Practice.maximalSquare(matrix2) == 1, 
             "Maximal Square Test 2: 1x1 square");
        
        char[][] matrix3 = {{'0'}};
        test(Day39Practice.maximalSquare(matrix3) == 0, 
             "Maximal Square Test 3: All zeros");
        
        test(Day39Practice.maximalSquareOptimized(matrix1) == 4, 
             "Maximal Square Optimized Test");
    }
    
    // ==================== 10. MAXIMAL RECTANGLE TESTS ====================
    
    private static void testMaximalRectangle() {
        System.out.println("\n=== Testing Maximal Rectangle ===");
        
        char[][] matrix1 = {
            {'1','0','1','0','0'},
            {'1','0','1','1','1'},
            {'1','1','1','1','1'},
            {'1','0','0','1','0'}
        };
        test(Day39Practice.maximalRectangle(matrix1) == 6, 
             "Maximal Rectangle Test 1: 2x3 rectangle");
        
        char[][] matrix2 = {{'0'}};
        test(Day39Practice.maximalRectangle(matrix2) == 0, 
             "Maximal Rectangle Test 2: Single zero");
        
        char[][] matrix3 = {{'1'}};
        test(Day39Practice.maximalRectangle(matrix3) == 1, 
             "Maximal Rectangle Test 3: Single one");
        
        test(Day39Practice.maximalRectangleDP(matrix1) == 6, 
             "Maximal Rectangle DP Test");
    }
    
    // ==================== 11. BURST BALLOONS TESTS ====================
    
    private static void testBurstBalloons() {
        System.out.println("\n=== Testing Burst Balloons ===");
        
        int[] balloons1 = {3, 1, 5, 8};
        test(Day39Practice.maxCoins(balloons1) == 167, 
             "Burst Balloons Test 1: [3,1,5,8]");
        
        int[] balloons2 = {1, 5};
        test(Day39Practice.maxCoins(balloons2) == 10, 
             "Burst Balloons Test 2: [1,5]");
        
        int[] balloons3 = {1};
        test(Day39Practice.maxCoins(balloons3) == 1, 
             "Burst Balloons Test 3: Single balloon");
        
        test(Day39Practice.maxCoinsMemo(balloons1) == 167, 
             "Burst Balloons Memo Test");
    }
    
    // ==================== 12. MATRIX CHAIN MULTIPLICATION TESTS ====================
    
    private static void testMatrixChain() {
        System.out.println("\n=== Testing Matrix Chain Multiplication ===");
        
        int[] dims1 = {10, 20, 30, 40, 30};
        test(Day39Practice.matrixChainMultiplication(dims1) == 30000, 
             "Matrix Chain Test 1: 4 matrices");
        
        int[] dims2 = {40, 20, 30, 10, 30};
        test(Day39Practice.matrixChainMultiplication(dims2) == 26000, 
             "Matrix Chain Test 2: Different order");
        
        int[] dims3 = {10, 20, 30};
        test(Day39Practice.matrixChainMultiplication(dims3) == 6000, 
             "Matrix Chain Test 3: 2 matrices");
        
        test(Day39Practice.matrixChainOrder(dims1).length() > 0, 
             "Matrix Chain Order Test");
    }
    
    // ==================== 13. PALINDROME PARTITIONING II TESTS ====================
    
    private static void testPalindromePartitioning() {
        System.out.println("\n=== Testing Palindrome Partitioning II ===");
        
        test(Day39Practice.minCut("aab") == 1, 
             "Palindrome Partition Test 1: aab");
        test(Day39Practice.minCut("a") == 0, 
             "Palindrome Partition Test 2: Single char");
        test(Day39Practice.minCut("ab") == 1, 
             "Palindrome Partition Test 3: Two chars");
        test(Day39Practice.minCut("aba") == 0, 
             "Palindrome Partition Test 4: Already palindrome");
        
        test(Day39Practice.minCutOptimized("aab") == 1, 
             "Palindrome Partition Optimized Test");
    }
    
    // ==================== 14. SCRAMBLE STRING TESTS ====================
    
    private static void testScrambleString() {
        System.out.println("\n=== Testing Scramble String ===");
        
        test(Day39Practice.isScramble("great", "rgeat"), 
             "Scramble String Test 1: great → rgeat");
        test(!Day39Practice.isScramble("abcde", "caebd"), 
             "Scramble String Test 2: No scramble");
        test(Day39Practice.isScramble("a", "a"), 
             "Scramble String Test 3: Single char");
        
        test(Day39Practice.isScrambleMemo("great", "rgeat"), 
             "Scramble String Memo Test 1");
        test(!Day39Practice.isScrambleMemo("abcde", "caebd"), 
             "Scramble String Memo Test 2");
    }
    
    // ==================== 15. DUNGEON GAME TESTS ====================
    
    private static void testDungeonGame() {
        System.out.println("\n=== Testing Dungeon Game ===");
        
        int[][] dungeon1 = {{-2,-3,3},{-5,-10,1},{10,30,-5}};
        test(Day39Practice.calculateMinimumHP(dungeon1) == 7, 
             "Dungeon Game Test 1: Standard dungeon");
        
        int[][] dungeon2 = {{0}};
        test(Day39Practice.calculateMinimumHP(dungeon2) == 1, 
             "Dungeon Game Test 2: Single cell");
        
        int[][] dungeon3 = {{1,-3,3},{0,-2,0},{-3,-3,-3}};
        test(Day39Practice.calculateMinimumHP(dungeon3) == 3, 
             "Dungeon Game Test 3: Mixed values");
        
        test(Day39Practice.calculateMinimumHPOptimized(dungeon1) == 7, 
             "Dungeon Game Optimized Test");
    }
    
    // ==================== 16. CHERRY PICKUP TESTS ====================
    
    private static void testCherryPickup() {
        System.out.println("\n=== Testing Cherry Pickup ===");
        
        int[][] grid1 = {{0,1,-1},{1,0,-1},{1,1,1}};
        test(Day39Practice.cherryPickup(grid1) == 5, 
             "Cherry Pickup Test 1: Standard grid");
        
        int[][] grid2 = {{1}};
        test(Day39Practice.cherryPickup(grid2) == 1, 
             "Cherry Pickup Test 2: Single cherry");
        
        int[][] grid3 = {{1,1,-1},{1,-1,1},{-1,1,1}};
        test(Day39Practice.cherryPickup(grid3) == 0, 
             "Cherry Pickup Test 3: Blocked path");
        
        test(Day39Practice.cherryPickupMemo(grid1) == 5, 
             "Cherry Pickup Memo Test");
    }
    
    // ==================== EDGE CASES ====================
    
    private static void testEdgeCases() {
        System.out.println("\n=== Testing Edge Cases ===");
        
        test(TwoDimensionalDP.longestCommonSubsequence("", "") == 0, 
             "Edge Case 1: Both empty strings");
        test(TwoDimensionalDP.minDistance("abc", "") == 3, 
             "Edge Case 2: Delete all chars");
        test(TwoDimensionalDP.isMatch("", ""), 
             "Edge Case 3: Empty pattern matching");
        
        char[][] emptyMatrix = {};
        test(Day39Practice.maximalSquare(emptyMatrix) == 0, 
             "Edge Case 4: Empty matrix");
        
        int[] singleBalloon = {5};
        test(Day39Practice.maxCoins(singleBalloon) == 5, 
             "Edge Case 5: Single balloon");
    }
    
    // ==================== MAIN ====================
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════════════╗");
        System.out.println("║       DAY 39: 2D DYNAMIC PROGRAMMING TEST SUITE           ║");
        System.out.println("╚═══════════════════════════════════════════════════════════╝\n");
        
        // Run all test suites
        testLCS();
        testEditDistance();
        testLongestCommonSubstring();
        testDistinctSubsequences();
        testWildcardMatching();
        testRegexMatching();
        testInterleavingString();
        testMinimumPathSum();
        testMaximalSquare();
        testMaximalRectangle();
        testBurstBalloons();
        testMatrixChain();
        testPalindromePartitioning();
        testScrambleString();
        testDungeonGame();
        testCherryPickup();
        testEdgeCases();
        
        // Print final results
        System.out.println("\n╔═══════════════════════════════════════════════════════════╗");
        System.out.println("║                    TEST RESULTS                           ║");
        System.out.println("╠═══════════════════════════════════════════════════════════╣");
        System.out.printf("║  Total Tests:  %-43d║%n", totalTests);
        System.out.printf("║  Passed:       %-43d║%n", passedTests);
        System.out.printf("║  Failed:       %-43d║%n", (totalTests - passedTests));
        System.out.printf("║  Success Rate: %.2f%%%-38s║%n", 
                         (100.0 * passedTests / totalTests), "");
        System.out.println("╚═══════════════════════════════════════════════════════════╝");
        
        if (passedTests == totalTests) {
            System.out.println("\n🎉 ALL TESTS PASSED! EXCELLENT WORK! 🎉");
        } else {
            System.out.println("\n⚠️  Some tests failed. Review the output above.");
        }
    }
}
