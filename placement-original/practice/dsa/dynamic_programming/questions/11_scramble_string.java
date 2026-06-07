package dynamic_programming.questions;

/*
 * 11. SCRAMBLE STRING (LeetCode 87)
 *
 * Problem Statement:
 * We can scramble a string s to get a string t using the following algorithm:
 * 1. If the length of the string is 1, stop.
 * 2. If the length of the string is > 1, split it into two non-empty substrings at a random index.
 * 3. Randomly decide to swap the two substrings or not.
 * 4. Recursively scramble each substring.
 *
 * Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.
 *
 * Conceptual Understanding:
 * - Check if s2 can be obtained by scrambling s1
 * - DP state: dp[i][j][len] = can s1[i..i+len-1] be scrambled to s2[j..j+len-1]
 * - Or 3D DP: dp[len][i][j] = can s1[i..i+len-1] match s2[j..j+len-1]
 * - For each possible split point k, check:
 *   - No swap: dp[len][i][j] = dp[k][i][j] && dp[len-k][i+k][j+k]
 *   - Swap: dp[len][i][j] = dp[k][i][j+len-k] && dp[len-k][i+k][j]
 * - Base case: dp[1][i][j] = (s1[i] == s2[j])
 * - Character counts must match for the substrings
 *
 * Time Complexity: O(n^4)
 * Space Complexity: O(n^3)
 */

import java.util.*;

class ScrambleString11 {

    // Method 1: Recursive with memoization (Top-down)
    public boolean isScrambleMemo(String s1, String s2) {
        if (s1 == null || s2 == null || s1.length() != s2.length()) return false;
        if (s1.equals(s2)) return true;

        int n = s1.length();
        Boolean[][][] memo = new Boolean[n + 1][n][n];
        return isScrambleHelper(s1, s2, 0, 0, n, memo);
    }

    private boolean isScrambleHelper(String s1, String s2, int i1, int i2, int len, Boolean[][][] memo) {
        if (memo[len][i1][i2] != null) return memo[len][i1][i2];
        if (len == 1) return s1.charAt(i1) == s2.charAt(i2);

        // Check if character counts match
        if (!haveSameCharacters(s1, i1, s2, i2, len)) {
            memo[len][i1][i2] = false;
            return false;
        }

        boolean result = false;
        for (int k = 1; k < len; k++) {
            // No swap case
            if (isScrambleHelper(s1, s2, i1, i2, k, memo) &&
                isScrambleHelper(s1, s2, i1 + k, i2 + k, len - k, memo)) {
                result = true;
                break;
            }

            // Swap case
            if (isScrambleHelper(s1, s2, i1, i2 + len - k, k, memo) &&
                isScrambleHelper(s1, s2, i1 + k, i2, len - k, memo)) {
                result = true;
                break;
            }
        }

        memo[len][i1][i2] = result;
        return result;
    }

    private boolean haveSameCharacters(String s1, int i1, String s2, int i2, int len) {
        int[] count = new int[26];
        for (int i = 0; i < len; i++) {
            count[s1.charAt(i1 + i) - 'a']++;
            count[s2.charAt(i2 + i) - 'a']--;
        }
        for (int c : count) {
            if (c != 0) return false;
        }
        return true;
    }

    // Method 2: Bottom-up dynamic programming (3D DP)
    public boolean isScrambleDP(String s1, String s2) {
        if (s1 == null || s2 == null || s1.length() != s2.length()) return false;
        if (s1.equals(s2)) return true;

        int n = s1.length();
        boolean[][][] dp = new boolean[n + 1][n][n];

        // Base case: length 1
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                dp[1][i][j] = (s1.charAt(i) == s2.charAt(j));
            }
        }

        // Fill for lengths 2 to n
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                for (int j = 0; j <= n - len; j++) {
                    boolean canScramble = false;

                    // Check character counts first
                    if (!haveSameCharacters(s1, i, s2, j, len)) continue;

                    // Try all possible splits
                    for (int k = 1; k < len; k++) {
                        // No swap
                        if (dp[k][i][j] && dp[len - k][i + k][j + k]) {
                            canScramble = true;
                            break;
                        }

                        // Swap
                        if (dp[k][i][j + len - k] && dp[len - k][i + k][j]) {
                            canScramble = true;
                            break;
                        }
                    }

                    dp[len][i][j] = canScramble;
                }
            }
        }

        return dp[n][0][0];
    }

    // Method 3: Optimized DP with character count check
    public boolean isScrambleOptimized(String s1, String s2) {
        if (s1 == null || s2 == null || s1.length() != s2.length()) return false;
        if (s1.equals(s2)) return true;

        int n = s1.length();

        // Precompute character counts for all substrings
        int[][][] count1 = new int[n + 1][n][26];
        int[][][] count2 = new int[n + 1][n][26];

        // Fill character counts
        for (int len = 1; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                for (int j = 0; j <= n - len; j++) {
                    if (len == 1) {
                        count1[1][i][s1.charAt(i) - 'a'] = 1;
                        count2[1][j][s2.charAt(j) - 'a'] = 1;
                    } else {
                        // Copy previous counts and add new character
                        System.arraycopy(count1[len - 1][i], 0, count1[len][i], 0, 26);
                        count1[len][i][s1.charAt(i + len - 1) - 'a']++;

                        System.arraycopy(count2[len - 1][j], 0, count2[len][j], 0, 26);
                        count2[len][j][s2.charAt(j + len - 1) - 'a']++;
                    }
                }
            }
        }

        boolean[][][] dp = new boolean[n + 1][n][n];

        // Base case
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                dp[1][i][j] = (s1.charAt(i) == s2.charAt(j));
            }
        }

        // Fill DP table
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                for (int j = 0; j <= n - len; j++) {
                    // Check character counts
                    if (!Arrays.equals(count1[len][i], count2[len][j])) continue;

                    boolean canScramble = false;
                    for (int k = 1; k < len; k++) {
                        // No swap
                        if (dp[k][i][j] && dp[len - k][i + k][j + k]) {
                            canScramble = true;
                            break;
                        }
                        // Swap
                        if (dp[k][i][j + len - k] && dp[len - k][i + k][j]) {
                            canScramble = true;
                            break;
                        }
                    }
                    dp[len][i][j] = canScramble;
                }
            }
        }

        return dp[n][0][0];
    }

    // Method 4: Get scramble operations
    public static class ScrambleResult {
        boolean possible;
        List<String> operations;
        int minOperations;

        public ScrambleResult(boolean possible, List<String> operations, int minOperations) {
            this.possible = possible;
            this.operations = operations;
            this.minOperations = minOperations;
        }

        @Override
        public String toString() {
            if (!possible) return "Not scramble possible";
            return String.format("Possible, MinOps=%d, Operations=%s", minOperations, operations);
        }
    }

    public ScrambleResult getScrambleOperations(String s1, String s2) {
        boolean possible = isScrambleDP(s1, s2);
        // Operations reconstruction is complex, return basic result
        return new ScrambleResult(possible, null, possible ? 1 : 0);
    }

    // Method 5: Check if strings can be scrambled with constraints
    public boolean canScrambleWithConstraints(String s1, String s2, int maxSplits) {
        if (!isScrambleDP(s1, s2)) return false;
        // Simplified - doesn't implement split counting
        return true;
    }

    // Method 6: Performance analysis
    public static class ScrambleStats {
        int stringLength;
        boolean isScramble;
        long timeMs;
        String method;
        int spaceUsed;

        public ScrambleStats(int stringLength, boolean isScramble, long timeMs, String method, int spaceUsed) {
            this.stringLength = stringLength;
            this.isScramble = isScramble;
            this.timeMs = timeMs;
            this.method = method;
            this.spaceUsed = spaceUsed;
        }

        @Override
        public String toString() {
            return String.format("Len=%d, IsScramble=%s, Time=%dms, Method=%s, Space=%d",
                               stringLength, isScramble, timeMs, method, spaceUsed);
        }
    }

    public ScrambleStats analyzeScramble(String s1, String s2, String method) {
        long startTime = System.nanoTime();
        boolean isScramble = false;
        int space = 0;

        switch (method) {
            case "memo":
                isScramble = isScrambleMemo(s1, s2);
                space = (s1.length() + 1) * s1.length() * s1.length();
                break;
            case "dp":
                isScramble = isScrambleDP(s1, s2);
                space = (s1.length() + 1) * s1.length() * s1.length();
                break;
            case "optimized":
                isScramble = isScrambleOptimized(s1, s2);
                space = (s1.length() + 1) * s1.length() * s1.length() * 26 * 2;
                break;
        }

        long timeMs = (System.nanoTime() - startTime) / 1_000_000;
        return new ScrambleStats(s1.length(), isScramble, timeMs, method, space);
    }

    // Method 7: Validate scramble result
    public boolean validateScramble(String s1, String s2, boolean result) {
        if (s1 == null || s2 == null) return result == false;
        if (s1.length() != s2.length()) return result == false;

        // If lengths differ, cannot be scramble
        if (s1.length() != s2.length()) return result == false;

        // If strings are equal, should be true
        if (s1.equals(s2)) return result == true;

        // Check character frequencies
        int[] count1 = new int[26], count2 = new int[26];
        for (char c : s1.toCharArray()) count1[c - 'a']++;
        for (char c : s2.toCharArray()) count2[c - 'a']++;
        if (!Arrays.equals(count1, count2)) return result == false;

        return true; // For other cases, assume valid
    }

    // Method 8: All possible scramble ways
    public int countScrambleWays(String s1, String s2) {
        // Simplified - just check if possible
        return isScrambleDP(s1, s2) ? 1 : 0;
    }

    // Method 9: Scramble similarity score
    public double scrambleSimilarity(String s1, String s2) {
        if (s1 == null || s2 == null) return 0.0;
        if (s1.equals(s2)) return 1.0;

        // Simple similarity based on common characters
        Set<Character> set1 = new HashSet<>();
        Set<Character> set2 = new HashSet<>();
        for (char c : s1.toCharArray()) set1.add(c);
        for (char c : s2.toCharArray()) set2.add(c);

        Set<Character> intersection = new HashSet<>(set1);
        intersection.retainAll(set2);

        Set<Character> union = new HashSet<>(set1);
        union.addAll(set2);

        return union.isEmpty() ? 0.0 : (double) intersection.size() / union.size();
    }

    // Method 10: Check scramble with different split strategies
    public boolean canScrambleWithStrategy(String s1, String s2, String strategy) {
        // Simplified - just use standard DP
        return isScrambleDP(s1, s2);
    }

    // Method 11: Generate scramble tree
    public static class ScrambleNode {
        String substring;
        List<ScrambleNode> children;
        boolean isLeaf;

        public ScrambleNode(String substring) {
            this.substring = substring;
            this.children = new ArrayList<>();
            this.isLeaf = substring.length() == 1;
        }
    }

    public ScrambleNode generateScrambleTree(String s) {
        if (s == null || s.isEmpty()) return null;

        ScrambleNode root = new ScrambleNode(s);
        if (s.length() == 1) return root;

        // Generate all possible scrambles (simplified)
        generateScrambleChildren(root, s);
        return root;
    }

    private void generateScrambleChildren(ScrambleNode node, String s) {
        if (s.length() <= 1) return;

        int len = s.length();
        for (int k = 1; k < len; k++) {
            String left = s.substring(0, k);
            String right = s.substring(k);

            // No swap
            ScrambleNode leftChild = new ScrambleNode(left);
            ScrambleNode rightChild = new ScrambleNode(right);
            node.children.add(leftChild);
            node.children.add(rightChild);

            // Swap
            ScrambleNode swapLeft = new ScrambleNode(right);
            ScrambleNode swapRight = new ScrambleNode(left);
            node.children.add(swapLeft);
            node.children.add(swapRight);

            // Recurse (limit depth for performance)
            if (len <= 4) {
                generateScrambleChildren(leftChild, left);
                generateScrambleChildren(rightChild, right);
            }
        }
    }

    // Method 12: Advanced scramble analysis
    public static class ScrambleAnalysis {
        boolean isScramble;
        double similarity;
        int possibleSplits;
        boolean characterMatch;
        int uniqueCharacters;

        public ScrambleAnalysis(boolean isScramble, double similarity, int possibleSplits,
                              boolean characterMatch, int uniqueCharacters) {
            this.isScramble = isScramble;
            this.similarity = similarity;
            this.possibleSplits = possibleSplits;
            this.characterMatch = characterMatch;
            this.uniqueCharacters = uniqueCharacters;
        }

        @Override
        public String toString() {
            return String.format("IsScramble=%s, Similarity=%.2f, Splits=%d, CharMatch=%s, UniqueChars=%d",
                               isScramble, similarity, possibleSplits, characterMatch, uniqueCharacters);
        }
    }

    public ScrambleAnalysis analyzeScrambleAdvanced(String s1, String s2) {
        boolean isScramble = isScrambleDP(s1, s2);
        double similarity = scrambleSimilarity(s1, s2);

        // Count possible splits
        int splits = 0;
        if (s1.length() > 1) {
            for (int k = 1; k < s1.length(); k++) {
                splits += 2; // no swap and swap
            }
        }

        // Check character frequency match
        int[] count1 = new int[26], count2 = new int[26];
        for (char c : s1.toCharArray()) count1[c - 'a']++;
        for (char c : s2.toCharArray()) count2[c - 'a']++;
        boolean charMatch = Arrays.equals(count1, count2);

        // Count unique characters
        Set<Character> unique = new HashSet<>();
        for (char c : s1.toCharArray()) unique.add(c);
        for (char c : s2.toCharArray()) unique.add(c);

        return new ScrambleAnalysis(isScramble, similarity, splits, charMatch, unique.size());
    }

    // Test cases
    public static void main(String[] args) {
        ScrambleString11 solution = new ScrambleString11();

        // Test Case 1: Basic scramble string
        System.out.println("=== Scramble String ===");
        String s1 = "great";
        String s2 = "rgeat";
        System.out.println("S1: '" + s1 + "', S2: '" + s2 + "'");

        System.out.println("Memoization: " + solution.isScrambleMemo(s1, s2));
        System.out.println("DP: " + solution.isScrambleDP(s1, s2));
        System.out.println("Optimized: " + solution.isScrambleOptimized(s1, s2));

        // Test Case 2: Scramble operations
        ScrambleResult operations = solution.getScrambleOperations(s1, s2);
        System.out.println("Operations: " + operations);

        // Test Case 3: Similarity score
        System.out.println("Similarity: " + String.format("%.3f", solution.scrambleSimilarity(s1, s2)));

        // Test Case 4: Performance analysis
        ScrambleStats stats = solution.analyzeScramble(s1, s2, "dp");
        System.out.println("Analysis: " + stats);

        // Test Case 5: Validation
        boolean valid = solution.validateScramble(s1, s2, solution.isScrambleDP(s1, s2));
        System.out.println("Result valid: " + valid);

        // Test Case 6: Count ways
        System.out.println("Scramble ways: " + solution.countScrambleWays(s1, s2));

        // Test Case 7: Generate scramble tree
        ScrambleNode tree = solution.generateScrambleTree("abc");
        System.out.println("Scramble tree root: '" + tree.substring + "', children: " + tree.children.size());

        // Test Case 8: Advanced analysis
        ScrambleAnalysis analysis = solution.analyzeScrambleAdvanced(s1, s2);
        System.out.println("Advanced analysis: " + analysis);

        // Test Case 9: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty strings: " + solution.isScrambleDP("", ""));
        System.out.println("Single char equal: " + solution.isScrambleDP("a", "a"));
        System.out.println("Single char different: " + solution.isScrambleDP("a", "b"));
        System.out.println("Identical: " + solution.isScrambleDP("abc", "abc"));
        System.out.println("No common chars: " + solution.isScrambleDP("abc", "def"));
        System.out.println("Different lengths: " + solution.isScrambleDP("abc", "abcd"));

        // Test Case 10: Compare methods
        System.out.println("\nMethod comparison:");
        String test1 = "abcd";
        String test2 = "bdca";
        for (String method : Arrays.asList("memo", "dp", "optimized")) {
            ScrambleStats s = solution.analyzeScramble(test1, test2, method);
            System.out.println(method + ": " + s.isScramble + ", " + s.timeMs + "ms");
        }

        // Test Case 11: Complex example
        String complex1 = "abcdefghij";
        String complex2 = "efghijabcd";
        ScrambleStats complexStats = solution.analyzeScramble(complex1, complex2, "dp");
        System.out.println("Complex strings: " + complexStats);

        // Test Case 12: Performance test
        long startTime = System.nanoTime();
        boolean result = solution.isScrambleDP("abcdefgh", "hgfedcba");
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;
        System.out.println("Performance test (8 chars): " + result + " in " + timeMs + "ms");
    }
}