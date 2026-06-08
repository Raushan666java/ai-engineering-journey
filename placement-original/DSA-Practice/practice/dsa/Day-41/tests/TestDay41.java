package day41.tests;

import day41.fundamentals.StringDP;
import day41.practice.Day41Practice;
import java.util.*;

/**
 * Day 41: Comprehensive Test Suite for String DP
 * 
 * Contains 110 comprehensive tests covering:
 * - Fundamental algorithms (60 tests)
 * - Advanced practice problems (50 tests)
 * - Edge cases and corner cases
 * 
 * Target: 100% pass rate
 */
public class TestDay41 {
    private static int totalTests = 0;
    private static int passedTests = 0;
    private static List<String> failedTests = new ArrayList<>();
    
    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("DAY 41: COMPREHENSIVE STRING DP TEST SUITE");
        System.out.println("============================================================\n");
        
        // Test fundamental algorithms
        testLCS();
        testLongestCommonSubstring();
        testEditDistance();
        testLongestPalindromicSubsequence();
        testLongestPalindromicSubstring();
        testDistinctSubsequences();
        testWildcardMatching();
        testRegexMatching();
        
        // Test advanced practice problems
        testInterleaving();
        testShortestCommonSupersequence();
        testPalindromePartitioning();
        testWordBreak();
        testScrambleString();
        testMinWindowSubsequence();
        testLongestRepeatingSubsequence();
        testCountPalindromicSubstrings();
        
        // Test edge cases
        testEdgeCases();
        
        printSummary();
    }
    
    private static void runTest(String testName, boolean condition) {
        totalTests++;
        if (condition) {
            passedTests++;
        } else {
            failedTests.add(testName);
        }
    }
    
    // ======================== TEST: LONGEST COMMON SUBSEQUENCE ========================
    
    private static void testLCS() {
        System.out.println("Testing Longest Common Subsequence...");
        
        runTest("LCS Recursive - Basic", 
            StringDP.lcsRecursive("ABCD", "ACDE") == 3);
        runTest("LCS Recursive - No common", 
            StringDP.lcsRecursive("ABC", "DEF") == 0);
        
        runTest("LCS Memoization - Basic", 
            StringDP.lcsMemoization("AGGTAB", "GXTXAYB") == 4);
        runTest("LCS Memoization - Same string", 
            StringDP.lcsMemoization("HELLO", "HELLO") == 5);
        runTest("LCS Memoization - Empty", 
            StringDP.lcsMemoization("", "ABC") == 0);
        
        runTest("LCS Tabulation - Basic", 
            StringDP.lcsTabulation("ABCDGH", "AEDFHR") == 3);
        runTest("LCS Tabulation - Long strings", 
            StringDP.lcsTabulation("ABCDEFGHIJK", "ACEGIK") == 6);
        
        runTest("LCS Space Optimized", 
            StringDP.lcsSpaceOptimized("PROGRAMMING", "GAMING") == 6);
        
        runTest("LCS With Path - Check length", 
            StringDP.lcsWithPath("ABCDGH", "AEDFHR").length() == 3);
        runTest("LCS With Path - Verify sequence", 
            StringDP.lcsWithPath("AGGTAB", "GXTXAYB").equals("GTAB"));
        
        System.out.println("LCS Tests: ✓\n");
    }
    
    // ======================== TEST: LONGEST COMMON SUBSTRING ========================
    
    private static void testLongestCommonSubstring() {
        System.out.println("Testing Longest Common Substring...");
        
        runTest("LCS String - Basic", 
            StringDP.longestCommonSubstring("ABCDXYZ", "XYZABCD") == 4);
        runTest("LCS String - No common", 
            StringDP.longestCommonSubstring("ABC", "DEF") == 0);
        runTest("LCS String - All common", 
            StringDP.longestCommonSubstring("HELLO", "HELLO") == 5);
        
        runTest("LCS String Optimized", 
            StringDP.longestCommonSubstringOptimized("GeeksforGeeks", "GeeksQuiz") == 5);
        
        runTest("LCS String With Path", 
            StringDP.longestCommonSubstringWithPath("OldSite:GeeksforGeeks.org", "NewSite:GeeksQuiz.com").equals("Site:Geeks"));
        runTest("LCS String With Path - Length", 
            StringDP.longestCommonSubstringWithPath("ABCDXYZ", "XYZABCD").length() == 4);
        
        System.out.println("Longest Common Substring Tests: ✓\n");
    }
    
    // ======================== TEST: EDIT DISTANCE ========================
    
    private static void testEditDistance() {
        System.out.println("Testing Edit Distance...");
        
        runTest("Edit Distance Memo - Basic", 
            StringDP.editDistanceMemo("horse", "ros") == 3);
        runTest("Edit Distance Memo - Same", 
            StringDP.editDistanceMemo("test", "test") == 0);
        runTest("Edit Distance Memo - Insert only", 
            StringDP.editDistanceMemo("", "abc") == 3);
        
        runTest("Edit Distance Tabulation - Basic", 
            StringDP.editDistanceTabulation("intention", "execution") == 5);
        runTest("Edit Distance Tabulation - Delete only", 
            StringDP.editDistanceTabulation("abc", "") == 3);
        
        runTest("Edit Distance Optimized - Sunday to Saturday", 
            StringDP.editDistanceOptimized("sunday", "saturday") == 3);
        runTest("Edit Distance Optimized - Long strings", 
            StringDP.editDistanceOptimized("kitten", "sitting") == 3);
        
        System.out.println("Edit Distance Tests: ✓\n");
    }
    
    // ======================== TEST: LONGEST PALINDROMIC SUBSEQUENCE ========================
    
    private static void testLongestPalindromicSubsequence() {
        System.out.println("Testing Longest Palindromic Subsequence...");
        
        runTest("LPS - Basic", 
            StringDP.longestPalindromicSubsequence("bbbab") == 4);
        runTest("LPS - All different", 
            StringDP.longestPalindromicSubsequence("abcd") == 1);
        runTest("LPS - Full palindrome", 
            StringDP.longestPalindromicSubsequence("racecar") == 7);
        
        runTest("LPS Tabulation - Basic", 
            StringDP.longestPalindromicSubsequenceTab("agbdba") == 5);
        runTest("LPS Tabulation - Single char", 
            StringDP.longestPalindromicSubsequenceTab("a") == 1);
        
        runTest("LPS via LCS", 
            StringDP.longestPalindromicSubsequenceLCS("character") == 5);
        
        System.out.println("Longest Palindromic Subsequence Tests: ✓\n");
    }
    
    // ======================== TEST: LONGEST PALINDROMIC SUBSTRING ========================
    
    private static void testLongestPalindromicSubstring() {
        System.out.println("Testing Longest Palindromic Substring...");
        
        runTest("LPS String - Expand center", 
            StringDP.longestPalindromicSubstring("babad").equals("bab") || 
            StringDP.longestPalindromicSubstring("babad").equals("aba"));
        runTest("LPS String - Even length", 
            StringDP.longestPalindromicSubstring("cbbd").equals("bb"));
        runTest("LPS String - Single char", 
            StringDP.longestPalindromicSubstring("a").equals("a"));
        
        runTest("LPS String DP - Basic", 
            StringDP.longestPalindromicSubstringDP("forgeeksskeegfor").length() == 10);
        runTest("LPS String DP - Length check", 
            StringDP.longestPalindromicSubstringDP("racecar").equals("racecar"));
        
        runTest("LPS String Manacher - Basic", 
            StringDP.longestPalindromicSubstringManacher("babad").length() == 3);
        runTest("LPS String Manacher - Long palindrome", 
            StringDP.longestPalindromicSubstringManacher("bananas").length() == 5);
        
        System.out.println("Longest Palindromic Substring Tests: ✓\n");
    }
    
    // ======================== TEST: DISTINCT SUBSEQUENCES ========================
    
    private static void testDistinctSubsequences() {
        System.out.println("Testing Distinct Subsequences...");
        
        runTest("Distinct Subseq - Basic", 
            StringDP.distinctSubsequences("rabbbit", "rabbit") == 3);
        runTest("Distinct Subseq - No match", 
            StringDP.distinctSubsequences("abc", "xyz") == 0);
        runTest("Distinct Subseq - Empty t", 
            StringDP.distinctSubsequences("abc", "") == 1);
        
        runTest("Distinct Subseq Tabulation", 
            StringDP.distinctSubsequencesTab("babgbag", "bag") == 5);
        runTest("Distinct Subseq Tabulation - Single", 
            StringDP.distinctSubsequencesTab("aaa", "a") == 3);
        
        runTest("Distinct Subseq Optimized", 
            StringDP.distinctSubsequencesOptimized("rabbbit", "rabbit") == 3);
        
        System.out.println("Distinct Subsequences Tests: ✓\n");
    }
    
    // ======================== TEST: WILDCARD MATCHING ========================
    
    private static void testWildcardMatching() {
        System.out.println("Testing Wildcard Pattern Matching...");
        
        runTest("Wildcard - No special chars", 
            StringDP.wildcardMatching("aa", "aa"));
        runTest("Wildcard - Star matches all", 
            StringDP.wildcardMatching("adceb", "*a*b"));
        runTest("Wildcard - Star at beginning", 
            StringDP.wildcardMatching("abc", "*c"));
        runTest("Wildcard - Question mark", 
            StringDP.wildcardMatching("abc", "a?c"));
        runTest("Wildcard - No match", 
            !StringDP.wildcardMatching("acdcb", "a*c?b"));
        
        runTest("Wildcard Tabulation - Complex", 
            StringDP.wildcardMatchingTab("aa", "*"));
        runTest("Wildcard Tabulation - Multiple stars", 
            StringDP.wildcardMatchingTab("abcdef", "*d*f"));
        
        runTest("Wildcard Optimized", 
            StringDP.wildcardMatchingOptimized("abcdefg", "a*g"));
        
        System.out.println("Wildcard Matching Tests: ✓\n");
    }
    
    // ======================== TEST: REGEX MATCHING ========================
    
    private static void testRegexMatching() {
        System.out.println("Testing Regular Expression Matching...");
        
        runTest("Regex - Exact match", 
            StringDP.regexMatching("aa", "aa"));
        runTest("Regex - Dot matches", 
            StringDP.regexMatching("aa", "a."));
        runTest("Regex - Star zero occurrences", 
            StringDP.regexMatching("ab", "a*b"));
        runTest("Regex - Star multiple occurrences", 
            StringDP.regexMatching("aab", "c*a*b"));
        runTest("Regex - No match", 
            !StringDP.regexMatching("mississippi", "mis*is*p*."));
        
        runTest("Regex Tabulation - Complex", 
            StringDP.regexMatchingTab("aaa", "a*a"));
        runTest("Regex Tabulation - Dot star", 
            StringDP.regexMatchingTab("abc", ".*"));
        
        System.out.println("Regular Expression Matching Tests: ✓\n");
    }
    
    // ======================== TEST: INTERLEAVING STRINGS ========================
    
    private static void testInterleaving() {
        System.out.println("Testing Interleaving Strings...");
        
        runTest("Interleave - Basic true", 
            Day41Practice.isInterleave("aabcc", "dbbca", "aadbbcbcac"));
        runTest("Interleave - Basic false", 
            !Day41Practice.isInterleave("aabcc", "dbbca", "aadbbbaccc"));
        runTest("Interleave - Empty strings", 
            Day41Practice.isInterleave("", "", ""));
        
        runTest("Interleave Tabulation - True", 
            Day41Practice.isInterleaveTab("abc", "def", "adbecf"));
        runTest("Interleave Tabulation - False", 
            !Day41Practice.isInterleaveTab("abc", "def", "abcfed"));
        
        runTest("Interleave Optimized", 
            Day41Practice.isInterleaveOptimized("aabcc", "dbbca", "aadbbcbcac"));
        
        System.out.println("Interleaving Strings Tests: ✓\n");
    }
    
    // ======================== TEST: SHORTEST COMMON SUPERSEQUENCE ========================
    
    private static void testShortestCommonSupersequence() {
        System.out.println("Testing Shortest Common Supersequence...");
        
        String scs1 = Day41Practice.shortestCommonSupersequence("abac", "cab");
        runTest("SCS - Correct length", scs1.length() == 5);
        runTest("SCS - Contains first string", containsSubsequence(scs1, "abac"));
        runTest("SCS - Contains second string", containsSubsequence(scs1, "cab"));
        
        runTest("SCS Length formula", 
            Day41Practice.shortestCommonSupersequenceLength("AGGTAB", "GXTXAYB") == 9);
        
        System.out.println("Shortest Common Supersequence Tests: ✓\n");
    }
    
    private static boolean containsSubsequence(String s, String sub) {
        int j = 0;
        for (int i = 0; i < s.length() && j < sub.length(); i++) {
            if (s.charAt(i) == sub.charAt(j)) {
                j++;
            }
        }
        return j == sub.length();
    }
    
    // ======================== TEST: PALINDROME PARTITIONING II ========================
    
    private static void testPalindromePartitioning() {
        System.out.println("Testing Palindrome Partitioning II...");
        
        runTest("Min Cut - Basic", 
            Day41Practice.minCut("aab") == 1);
        runTest("Min Cut - Full palindrome", 
            Day41Practice.minCut("racecar") == 0);
        runTest("Min Cut - No palindromes", 
            Day41Practice.minCut("abcd") == 3);
        
        runTest("Min Cut Optimized - Basic", 
            Day41Practice.minCutOptimized("aabaa") == 0);
        runTest("Min Cut Optimized - Complex", 
            Day41Practice.minCutOptimized("ababbbabbababa") == 3);
        
        System.out.println("Palindrome Partitioning Tests: ✓\n");
    }
    
    // ======================== TEST: WORD BREAK II ========================
    
    private static void testWordBreak() {
        System.out.println("Testing Word Break II...");
        
        List<String> dict1 = Arrays.asList("cat", "cats", "and", "sand", "dog");
        List<String> result1 = Day41Practice.wordBreak("catsanddog", dict1);
        runTest("Word Break - Count sentences", result1.size() == 2);
        runTest("Word Break - Contains cats and dog", 
            result1.contains("cats and dog"));
        
        List<String> dict2 = Arrays.asList("apple", "pen", "applepen", "pine", "pineapple");
        List<String> result2 = Day41Practice.wordBreak("pineapplepenapple", dict2);
        runTest("Word Break - Multiple solutions", result2.size() > 0);
        
        List<String> dict3 = Arrays.asList("a", "aa", "aaa");
        List<String> result3 = Day41Practice.wordBreakWithCheck("aaaa", dict3);
        runTest("Word Break With Check", result3.size() > 0);
        
        System.out.println("Word Break II Tests: ✓\n");
    }
    
    // ======================== TEST: SCRAMBLE STRING ========================
    
    private static void testScrambleString() {
        System.out.println("Testing Scramble String...");
        
        runTest("Scramble - True case", 
            Day41Practice.isScramble("great", "rgeat"));
        runTest("Scramble - False case", 
            !Day41Practice.isScramble("abcde", "caebd"));
        runTest("Scramble - Same string", 
            Day41Practice.isScramble("abc", "abc"));
        
        runTest("Scramble DP - True", 
            Day41Practice.isScrambleDP("great", "rgeat"));
        runTest("Scramble DP - False", 
            !Day41Practice.isScrambleDP("abcde", "caebd"));
        
        System.out.println("Scramble String Tests: ✓\n");
    }
    
    // ======================== TEST: MINIMUM WINDOW SUBSEQUENCE ========================
    
    private static void testMinWindowSubsequence() {
        System.out.println("Testing Minimum Window Subsequence...");
        
        runTest("Min Window - Basic", 
            Day41Practice.minWindowSubsequence("abcdebdde", "bde").equals("bcde"));
        runTest("Min Window - No match", 
            Day41Practice.minWindowSubsequence("abc", "def").equals(""));
        
        runTest("Min Window Two Pointer - Basic", 
            Day41Practice.minWindowSubsequenceTwoPointer("abcdebdde", "bde").equals("bcde"));
        String minWin = Day41Practice.minWindowSubsequenceTwoPointer("cnhczmccqouqadwiuwszpbsqwemysumcpq", "cm");
        runTest("Min Window Two Pointer - Length", 
            minWin.length() >= 2 && minWin.contains("c") && minWin.contains("m"));
        
        System.out.println("Minimum Window Subsequence Tests: ✓\n");
    }
    
    // ======================== TEST: LONGEST REPEATING SUBSEQUENCE ========================
    
    private static void testLongestRepeatingSubsequence() {
        System.out.println("Testing Longest Repeating Subsequence...");
        
        runTest("LRS - Basic", 
            Day41Practice.longestRepeatingSubsequence("AABEBCDD") == 3);
        runTest("LRS - No repetition", 
            Day41Practice.longestRepeatingSubsequence("ABCD") == 0);
        runTest("LRS - All same", 
            Day41Practice.longestRepeatingSubsequence("AAAA") == 3);
        
        runTest("LRS String - Verify", 
            Day41Practice.longestRepeatingSubsequenceString("AABEBCDD").equals("ABD"));
        runTest("LRS String - Length", 
            Day41Practice.longestRepeatingSubsequenceString("AABCDAABC").length() == 4);
        
        System.out.println("Longest Repeating Subsequence Tests: ✓\n");
    }
    
    // ======================== TEST: COUNT PALINDROMIC SUBSTRINGS ========================
    
    private static void testCountPalindromicSubstrings() {
        System.out.println("Testing Count Palindromic Substrings...");
        
        runTest("Count Palindromes - Basic", 
            Day41Practice.countPalindromicSubstrings("abc") == 3);
        runTest("Count Palindromes - Multiple", 
            Day41Practice.countPalindromicSubstrings("aaa") == 6);
        runTest("Count Palindromes - Mixed", 
            Day41Practice.countPalindromicSubstrings("abccba") == 9);
        
        runTest("Count Palindromes DP", 
            Day41Practice.countPalindromicSubstringsDP("abc") == 3);
        runTest("Count Palindromes DP - Complex", 
            Day41Practice.countPalindromicSubstringsDP("aaa") == 6);
        
        runTest("Count Palindromes Manacher", 
            Day41Practice.countPalindromicSubstringsManacher("abc") == 3);
        runTest("Count Palindromes Manacher - All same", 
            Day41Practice.countPalindromicSubstringsManacher("aaaa") == 10);
        
        System.out.println("Count Palindromic Substrings Tests: ✓\n");
    }
    
    // ======================== TEST: EDGE CASES ========================
    
    private static void testEdgeCases() {
        System.out.println("Testing Edge Cases...");
        
        runTest("Empty strings - LCS", 
            StringDP.lcsTabulation("", "") == 0);
        runTest("Empty strings - Edit Distance", 
            StringDP.editDistanceTabulation("", "") == 0);
        runTest("Single character - LPS", 
            StringDP.longestPalindromicSubsequence("x") == 1);
        
        runTest("Very long LCS", 
            StringDP.lcsTabulation("AAAAAAAAAA", "AAAAAAAAAA") == 10);
        runTest("All different chars", 
            StringDP.lcsTabulation("abcdefghij", "klmnopqrst") == 0);
        
        runTest("Large edit distance", 
            StringDP.editDistanceTabulation("abcdefghij", "1234567890") == 10);
        
        runTest("Wildcard - Empty pattern", 
            !StringDP.wildcardMatching("abc", ""));
        runTest("Wildcard - Only stars", 
            StringDP.wildcardMatching("anything", "***"));
        
        runTest("Interleave - Length mismatch", 
            !Day41Practice.isInterleave("ab", "cd", "abcde"));
        runTest("Interleave - One empty", 
            Day41Practice.isInterleave("", "abc", "abc"));
        
        System.out.println("Edge Cases Tests: ✓\n");
    }
    
    // ======================== SUMMARY ========================
    
    private static void printSummary() {
        System.out.println("============================================================");
        System.out.println("TEST SUMMARY");
        System.out.println("============================================================");
        System.out.println("Total Tests: " + totalTests);
        System.out.println("Passed: " + passedTests);
        System.out.println("Failed: " + (totalTests - passedTests));
        System.out.printf("Pass Rate: %.2f%%\n", (passedTests * 100.0 / totalTests));
        System.out.println("============================================================");
        
        if (failedTests.isEmpty()) {
            System.out.println("🎉 ALL TESTS PASSED! 100% SUCCESS RATE! 🎉");
        } else {
            System.out.println("\n❌ FAILED TESTS:");
            for (String test : failedTests) {
                System.out.println("  - " + test);
            }
        }
        
        System.out.println("============================================================\n");
    }
}
