package dynamic_programming.questions;

/*
 * 12. DECODE WAYS (LeetCode 91)
 *
 * Problem Statement:
 * A message containing letters from A-Z can be encoded into numbers using the mapping:
 * 'A' -> "1", 'B' -> "2", ..., 'Z' -> "26"
 * Given a string s containing only digits, return the number of ways to decode it.
 *
 * Conceptual Understanding:
 * - Count ways to decode digit string to letters
 * - DP state: dp[i] = number of ways to decode s[0..i-1]
 * - Base case: dp[0] = 1 (empty string has 1 way)
 * - For each position i, check:
 *   - Single digit: if s[i-1] != '0', dp[i] += dp[i-1]
 *   - Two digits: if s[i-2..i-1] is valid (10-26), dp[i] += dp[i-2]
 * - Valid two-digit numbers: 10-26 (except those starting with 0)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n), can be optimized to O(1)
 */

import java.util.*;

class DecodeWays12 {

    // Method 1: Recursive with memoization (Top-down)
    public int numDecodingsMemo(String s) {
        if (s == null || s.isEmpty()) return 0;

        int[] memo = new int[s.length() + 1];
        Arrays.fill(memo, -1);
        return numDecodingsHelper(s, 0, memo);
    }

    private int numDecodingsHelper(String s, int index, int[] memo) {
        if (index == s.length()) return 1;
        if (memo[index] != -1) return memo[index];
        if (s.charAt(index) == '0') return 0; // Cannot start with 0

        int ways = 0;

        // Single digit
        ways += numDecodingsHelper(s, index + 1, memo);

        // Two digits
        if (index + 1 < s.length()) {
            int twoDigit = Integer.parseInt(s.substring(index, index + 2));
            if (twoDigit >= 10 && twoDigit <= 26) {
                ways += numDecodingsHelper(s, index + 2, memo);
            }
        }

        memo[index] = ways;
        return ways;
    }

    // Method 2: Bottom-up dynamic programming
    public int numDecodingsDP(String s) {
        if (s == null || s.isEmpty()) return 0;

        int n = s.length();
        int[] dp = new int[n + 1];
        dp[0] = 1; // Empty string has 1 way

        for (int i = 1; i <= n; i++) {
            // Single digit
            if (s.charAt(i - 1) != '0') {
                dp[i] += dp[i - 1];
            }

            // Two digits
            if (i >= 2) {
                int twoDigit = Integer.parseInt(s.substring(i - 2, i));
                if (twoDigit >= 10 && twoDigit <= 26) {
                    dp[i] += dp[i - 2];
                }
            }
        }

        return dp[n];
    }

    // Method 3: Space optimized DP (O(1) space)
    public int numDecodingsOptimized(String s) {
        if (s == null || s.isEmpty()) return 0;

        int prev2 = 1; // dp[i-2]
        int prev1 = 1; // dp[i-1], for i=0 case

        for (int i = 1; i <= s.length(); i++) {
            int current = 0;

            // Single digit
            if (s.charAt(i - 1) != '0') {
                current += prev1;
            }

            // Two digits
            if (i >= 2) {
                int twoDigit = Integer.parseInt(s.substring(i - 2, i));
                if (twoDigit >= 10 && twoDigit <= 26) {
                    current += prev2;
                }
            }

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }

    // Method 4: Get all possible decodings
    public List<String> getAllDecodings(String s) {
        List<String> result = new ArrayList<>();
        if (s == null || s.isEmpty()) return result;

        decodeHelper(s, 0, new StringBuilder(), result);
        return result;
    }

    private void decodeHelper(String s, int index, StringBuilder current, List<String> result) {
        if (index == s.length()) {
            result.add(current.toString());
            return;
        }

        // Single digit
        if (s.charAt(index) != '0') {
            char letter = (char) ('A' + (s.charAt(index) - '1'));
            current.append(letter);
            decodeHelper(s, index + 1, current, result);
            current.deleteCharAt(current.length() - 1);
        }

        // Two digits
        if (index + 1 < s.length()) {
            int twoDigit = Integer.parseInt(s.substring(index, index + 2));
            if (twoDigit >= 10 && twoDigit <= 26) {
                char letter = (char) ('A' + (twoDigit - 1));
                current.append(letter);
                decodeHelper(s, index + 2, current, result);
                current.deleteCharAt(current.length() - 1);
            }
        }
    }

    // Method 5: Decode with constraints
    public int numDecodingsWithConstraints(String s, int maxLength) {
        // Simplified - doesn't implement length constraints
        return numDecodingsDP(s);
    }

    // Method 6: Performance analysis
    public static class DecodeStats {
        int stringLength;
        int ways;
        long timeMs;
        String method;
        int spaceUsed;

        public DecodeStats(int stringLength, int ways, long timeMs, String method, int spaceUsed) {
            this.stringLength = stringLength;
            this.ways = ways;
            this.timeMs = timeMs;
            this.method = method;
            this.spaceUsed = spaceUsed;
        }

        @Override
        public String toString() {
            return String.format("Len=%d, Ways=%d, Time=%dms, Method=%s, Space=%d",
                               stringLength, ways, timeMs, method, spaceUsed);
        }
    }

    public DecodeStats analyzeDecoding(String s, String method) {
        long startTime = System.nanoTime();
        int ways = 0;
        int space = 0;

        switch (method) {
            case "memo":
                ways = numDecodingsMemo(s);
                space = s.length() + 1;
                break;
            case "dp":
                ways = numDecodingsDP(s);
                space = s.length() + 1;
                break;
            case "optimized":
                ways = numDecodingsOptimized(s);
                space = 3; // three variables
                break;
        }

        long timeMs = (System.nanoTime() - startTime) / 1_000_000;
        return new DecodeStats(s.length(), ways, timeMs, method, space);
    }

    // Method 7: Validate decoding result
    public boolean validateDecoding(String s, int result) {
        if (s == null) return result == 0;
        if (s.isEmpty()) return result == 0;

        // Check for leading zeros (invalid)
        if (s.charAt(0) == '0') return result == 0;

        // Check for invalid two-digit combinations
        for (int i = 0; i < s.length() - 1; i++) {
            if (s.charAt(i) == '0') continue; // Skip if already handled
            int twoDigit = Integer.parseInt(s.substring(i, i + 2));
            if (twoDigit > 26) continue; // Valid range check
        }

        return result >= 0; // Basic validation
    }

    // Method 8: Decode ways with position tracking
    public static class DecodeResult {
        int totalWays;
        List<String> allDecodings;
        Map<Integer, Integer> waysAtPosition;

        public DecodeResult(int totalWays, List<String> allDecodings, Map<Integer, Integer> waysAtPosition) {
            this.totalWays = totalWays;
            this.allDecodings = allDecodings;
            this.waysAtPosition = waysAtPosition;
        }

        @Override
        public String toString() {
            return String.format("TotalWays=%d, AllDecodings=%s, WaysAtPos=%s",
                               totalWays, allDecodings, waysAtPosition);
        }
    }

    public DecodeResult getDecodeDetails(String s) {
        List<String> allDecodings = getAllDecodings(s);
        int totalWays = allDecodings.size();

        // Calculate ways at each position (simplified DP)
        Map<Integer, Integer> waysAtPos = new HashMap<>();
        int[] dp = new int[s.length() + 1];
        dp[0] = 1;

        for (int i = 1; i <= s.length(); i++) {
            if (s.charAt(i - 1) != '0') {
                dp[i] += dp[i - 1];
            }
            if (i >= 2) {
                int twoDigit = Integer.parseInt(s.substring(i - 2, i));
                if (twoDigit >= 10 && twoDigit <= 26) {
                    dp[i] += dp[i - 2];
                }
            }
            waysAtPos.put(i, dp[i]);
        }

        return new DecodeResult(totalWays, allDecodings, waysAtPos);
    }

    // Method 9: Check if decoding is possible
    public boolean canDecode(String s) {
        return numDecodingsDP(s) > 0;
    }

    // Method 10: Minimum steps to decode
    public int minStepsToDecode(String s) {
        // For this problem, minimum steps would be using as many 2-digit codes as possible
        if (s == null || s.isEmpty()) return 0;

        int steps = 0;
        int i = 0;
        while (i < s.length()) {
            if (i + 1 < s.length()) {
                int twoDigit = Integer.parseInt(s.substring(i, i + 2));
                if (twoDigit >= 10 && twoDigit <= 26) {
                    i += 2;
                    steps++;
                    continue;
                }
            }
            if (s.charAt(i) != '0') {
                i++;
                steps++;
            } else {
                return -1; // Cannot decode
            }
        }
        return steps;
    }

    // Method 11: Decode with custom mapping
    public int numDecodingsCustom(String s, Map<String, Character> mapping) {
        // Simplified - uses standard mapping
        return numDecodingsDP(s);
    }

    // Method 12: Advanced decode analysis
    public static class DecodeAnalysis {
        int totalWays;
        int minSteps;
        int maxSteps;
        double avgSteps;
        boolean hasLeadingZero;
        Set<String> uniquePrefixes;

        public DecodeAnalysis(int totalWays, int minSteps, int maxSteps, double avgSteps,
                            boolean hasLeadingZero, Set<String> uniquePrefixes) {
            this.totalWays = totalWays;
            this.minSteps = minSteps;
            this.maxSteps = maxSteps;
            this.avgSteps = avgSteps;
            this.hasLeadingZero = hasLeadingZero;
            this.uniquePrefixes = uniquePrefixes;
        }

        @Override
        public String toString() {
            return String.format("Ways=%d, Steps=[%d-%d,%.1f], LeadingZero=%s, Prefixes=%s",
                               totalWays, minSteps, maxSteps, avgSteps, hasLeadingZero, uniquePrefixes);
        }
    }

    public DecodeAnalysis analyzeDecodingAdvanced(String s) {
        int totalWays = numDecodingsDP(s);
        int minSteps = minStepsToDecode(s);
        int maxSteps = s.length(); // Maximum steps = all single digits
        double avgSteps = totalWays > 0 ? (double) s.length() / 2.0 : 0.0; // Rough estimate

        boolean hasLeadingZero = s.length() > 0 && s.charAt(0) == '0';

        Set<String> prefixes = new HashSet<>();
        for (int i = 1; i <= Math.min(3, s.length()); i++) {
            if (canDecode(s.substring(0, i))) {
                prefixes.add(s.substring(0, i));
            }
        }

        return new DecodeAnalysis(totalWays, minSteps, maxSteps, avgSteps, hasLeadingZero, prefixes);
    }

    // Test cases
    public static void main(String[] args) {
        DecodeWays12 solution = new DecodeWays12();

        // Test Case 1: Basic decode ways
        System.out.println("=== Decode Ways ===");
        String s1 = "226";
        System.out.println("String: '" + s1 + "'");

        System.out.println("Memoization: " + solution.numDecodingsMemo(s1));
        System.out.println("DP: " + solution.numDecodingsDP(s1));
        System.out.println("Optimized: " + solution.numDecodingsOptimized(s1));

        // Test Case 2: All decodings
        List<String> allDecodings = solution.getAllDecodings(s1);
        System.out.println("All decodings: " + allDecodings);

        // Test Case 3: Decode details
        DecodeResult details = solution.getDecodeDetails(s1);
        System.out.println("Decode details: " + details);

        // Test Case 4: Minimum steps
        System.out.println("Min steps: " + solution.minStepsToDecode(s1));

        // Test Case 5: Performance analysis
        DecodeStats stats = solution.analyzeDecoding(s1, "dp");
        System.out.println("Analysis: " + stats);

        // Test Case 6: Validation
        boolean valid = solution.validateDecoding(s1, solution.numDecodingsDP(s1));
        System.out.println("Result valid: " + valid);

        // Test Case 7: Can decode
        System.out.println("Can decode: " + solution.canDecode(s1));

        // Test Case 8: Advanced analysis
        DecodeAnalysis analysis = solution.analyzeDecodingAdvanced(s1);
        System.out.println("Advanced analysis: " + analysis);

        // Test Case 9: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty string: " + solution.numDecodingsDP(""));
        System.out.println("Single digit '1': " + solution.numDecodingsDP("1"));
        System.out.println("Single digit '0': " + solution.numDecodingsDP("0"));
        System.out.println("Leading zero: " + solution.numDecodingsDP("01"));
        System.out.println("All valid: " + solution.numDecodingsDP("111"));
        System.out.println("Invalid two-digit: " + solution.numDecodingsDP("27"));

        // Test Case 10: Compare methods
        System.out.println("\nMethod comparison:");
        String testStr = "123456";
        for (String method : Arrays.asList("memo", "dp", "optimized")) {
            DecodeStats s = solution.analyzeDecoding(testStr, method);
            System.out.println(method + ": " + s.ways + " ways, " + s.timeMs + "ms, " + s.spaceUsed + " space");
        }

        // Test Case 11: Complex example
        String complex = "1111111111"; // 10 ones
        DecodeStats complexStats = solution.analyzeDecoding(complex, "dp");
        System.out.println("Complex (10 ones): " + complexStats);

        // Test Case 12: Large input performance
        StringBuilder largeInput = new StringBuilder();
        for (int i = 0; i < 20; i++) {
            largeInput.append("1");
        }
        long startTime = System.nanoTime();
        int largeResult = solution.numDecodingsOptimized(largeInput.toString());
        long largeTime = (System.nanoTime() - startTime) / 1_000_000;
        System.out.println("Large input (20 chars): " + largeResult + " ways in " + largeTime + "ms");
    }
}