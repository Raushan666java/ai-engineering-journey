package dynamic_programming.questions;

/*
 * 8. WORD BREAK (LeetCode 139)
 *
 * Problem Statement:
 * Given a string s and a dictionary of strings wordDict, return true if s can be
 * segmented into a space-separated sequence of one or more dictionary words.
 *
 * Conceptual Understanding:
 * - Check if string can be broken into dictionary words
 * - DP state: dp[i] = can we break s[0..i-1] using dictionary words
 * - Base case: dp[0] = true (empty string)
 * - Transition: dp[i] = dp[j] && wordDict.contains(s[j..i-1]) for j < i
 * - Optimization: check substrings of decreasing length
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n + m) where m is dictionary size
 */

import java.util.*;

class WordBreak8 {

    // Method 1: Recursive with memoization (Top-down)
    public boolean wordBreakMemo(String s, List<String> wordDict) {
        if (s == null || s.isEmpty()) return true;
        if (wordDict == null || wordDict.isEmpty()) return false;

        Set<String> wordSet = new HashSet<>(wordDict);
        Boolean[] memo = new Boolean[s.length() + 1];
        return wordBreakHelper(s, 0, wordSet, memo);
    }

    private boolean wordBreakHelper(String s, int start, Set<String> wordSet, Boolean[] memo) {
        if (start == s.length()) return true;
        if (memo[start] != null) return memo[start];

        for (int end = start + 1; end <= s.length(); end++) {
            String word = s.substring(start, end);
            if (wordSet.contains(word) && wordBreakHelper(s, end, wordSet, memo)) {
                memo[start] = true;
                return true;
            }
        }

        memo[start] = false;
        return false;
    }

    // Method 2: Bottom-up dynamic programming
    public boolean wordBreakDP(String s, List<String> wordDict) {
        if (s == null || s.isEmpty()) return true;
        if (wordDict == null || wordDict.isEmpty()) return false;

        Set<String> wordSet = new HashSet<>(wordDict);
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;

        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordSet.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[s.length()];
    }

    // Method 3: BFS approach
    public boolean wordBreakBFS(String s, List<String> wordDict) {
        if (s == null || s.isEmpty()) return true;
        if (wordDict == null || wordDict.isEmpty()) return false;

        Set<String> wordSet = new HashSet<>(wordDict);
        Queue<Integer> queue = new LinkedList<>();
        boolean[] visited = new boolean[s.length() + 1];
        queue.offer(0);
        visited[0] = true;

        while (!queue.isEmpty()) {
            int start = queue.poll();

            for (int end = start + 1; end <= s.length(); end++) {
                if (visited[end]) continue;

                String word = s.substring(start, end);
                if (wordSet.contains(word)) {
                    if (end == s.length()) return true;

                    queue.offer(end);
                    visited[end] = true;
                }
            }
        }

        return false;
    }

    // Method 4: Get all possible word breaks
    public List<String> wordBreakAll(String s, List<String> wordDict) {
        List<String> result = new ArrayList<>();
        if (s == null || s.isEmpty()) {
            result.add("");
            return result;
        }

        Set<String> wordSet = new HashSet<>(wordDict);
        wordBreakAllHelper(s, 0, wordSet, new StringBuilder(), result);
        return result;
    }

    private void wordBreakAllHelper(String s, int start, Set<String> wordSet,
                                   StringBuilder current, List<String> result) {
        if (start == s.length()) {
            result.add(current.toString().trim());
            return;
        }

        for (int end = start + 1; end <= s.length(); end++) {
            String word = s.substring(start, end);
            if (wordSet.contains(word)) {
                int lengthBefore = current.length();
                if (current.length() > 0) current.append(" ");
                current.append(word);

                wordBreakAllHelper(s, end, wordSet, current, result);

                current.setLength(lengthBefore);
            }
        }
    }

    // Method 5: Word break with minimum cuts
    public int wordBreakMinCuts(String s, List<String> wordDict) {
        if (s == null || s.isEmpty()) return 0;

        Set<String> wordSet = new HashSet<>(wordDict);
        int[] dp = new int[s.length() + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;

        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] != Integer.MAX_VALUE && wordSet.contains(s.substring(j, i))) {
                    dp[i] = Math.min(dp[i], dp[j] + 1);
                }
            }
        }

        return dp[s.length()] == Integer.MAX_VALUE ? -1 : dp[s.length()] - 1;
    }

    // Method 6: Performance analysis
    public static class WordBreakStats {
        int stringLength;
        int dictSize;
        boolean possible;
        long timeMs;
        String method;
        int spaceUsed;

        public WordBreakStats(int stringLength, int dictSize, boolean possible, long timeMs,
                            String method, int spaceUsed) {
            this.stringLength = stringLength;
            this.dictSize = dictSize;
            this.possible = possible;
            this.timeMs = timeMs;
            this.method = method;
            this.spaceUsed = spaceUsed;
        }

        @Override
        public String toString() {
            return String.format("Len=%d, Dict=%d, Possible=%s, Time=%dms, Method=%s, Space=%d",
                               stringLength, dictSize, possible, timeMs, method, spaceUsed);
        }
    }

    public WordBreakStats analyzeWordBreak(String s, List<String> wordDict, String method) {
        long startTime = System.nanoTime();
        boolean possible = false;
        int space = 0;

        switch (method) {
            case "memo":
                possible = wordBreakMemo(s, wordDict);
                space = s.length() + 1;
                break;
            case "dp":
                possible = wordBreakDP(s, wordDict);
                space = s.length() + 1;
                break;
            case "bfs":
                possible = wordBreakBFS(s, wordDict);
                space = s.length() + 1;
                break;
        }

        long timeMs = (System.nanoTime() - startTime) / 1_000_000;
        return new WordBreakStats(s.length(), wordDict.size(), possible, timeMs, method, space);
    }

    // Method 7: Validate word break result
    public boolean validateWordBreak(String s, List<String> wordDict, List<String> breaks) {
        if (breaks.isEmpty()) return !wordBreakDP(s, wordDict);

        Set<String> wordSet = new HashSet<>(wordDict);

        for (String breakStr : breaks) {
            String[] words = breakStr.split(" ");
            StringBuilder reconstructed = new StringBuilder();

            for (String word : words) {
                if (!wordSet.contains(word)) return false;
                reconstructed.append(word);
            }

            if (!reconstructed.toString().equals(s)) return false;
        }

        return true;
    }

    // Method 8: Word break with position tracking
    public static class WordBreakResult {
        boolean possible;
        List<List<String>> allBreaks;
        List<Integer> wordPositions;

        public WordBreakResult(boolean possible, List<List<String>> allBreaks, List<Integer> wordPositions) {
            this.possible = possible;
            this.allBreaks = allBreaks;
            this.wordPositions = wordPositions;
        }

        @Override
        public String toString() {
            if (!possible) return "Not possible";
            return String.format("Possible, %d ways, Positions=%s", allBreaks.size(), wordPositions);
        }
    }

    public WordBreakResult wordBreakWithPositions(String s, List<String> wordDict) {
        List<List<String>> allBreaks = new ArrayList<>();
        List<Integer> positions = new ArrayList<>();

        if (s == null || s.isEmpty()) {
            allBreaks.add(new ArrayList<>());
            return new WordBreakResult(true, allBreaks, positions);
        }

        Set<String> wordSet = new HashSet<>(wordDict);
        wordBreakPositionsHelper(s, 0, wordSet, new ArrayList<>(), allBreaks, positions);

        return new WordBreakResult(!allBreaks.isEmpty(), allBreaks, positions);
    }

    private void wordBreakPositionsHelper(String s, int start, Set<String> wordSet,
                                        List<String> current, List<List<String>> allBreaks,
                                        List<Integer> positions) {
        if (start == s.length()) {
            allBreaks.add(new ArrayList<>(current));
            positions.add(current.size());
            return;
        }

        for (int end = start + 1; end <= s.length(); end++) {
            String word = s.substring(start, end);
            if (wordSet.contains(word)) {
                current.add(word);
                wordBreakPositionsHelper(s, end, wordSet, current, allBreaks, positions);
                current.remove(current.size() - 1);
            }
        }
    }

    // Method 9: Word break with constraints
    public boolean wordBreakWithConstraints(String s, List<String> wordDict, int maxWords, int minWordLength) {
        if (!wordBreakDP(s, wordDict)) return false;

        WordBreakResult result = wordBreakWithPositions(s, wordDict);
        if (!result.possible) return false;

        for (List<String> breakWords : result.allBreaks) {
            if (breakWords.size() <= maxWords) {
                boolean validLength = true;
                for (String word : breakWords) {
                    if (word.length() < minWordLength) {
                        validLength = false;
                        break;
                    }
                }
                if (validLength) return true;
            }
        }

        return false;
    }

    // Method 10: Longest word in dictionary that can break the string
    public String longestBreakingWord(String s, List<String> wordDict) {
        if (s == null || s.isEmpty()) return "";

        Set<String> wordSet = new HashSet<>(wordDict);
        String longest = "";

        for (String word : wordDict) {
            if (s.contains(word) && word.length() > longest.length()) {
                // Check if removing this word leaves breakable substrings
                String remaining = s.replaceFirst(word, "");
                if (remaining.isEmpty() || wordBreakDP(remaining, wordDict)) {
                    longest = word;
                }
            }
        }

        return longest;
    }

    // Method 11: Word break with backtracking (alternative all breaks)
    public List<String> wordBreakBacktrack(String s, List<String> wordDict) {
        List<String> result = new ArrayList<>();
        Set<String> wordSet = new HashSet<>(wordDict);
        backtrackWordBreak(s, wordSet, 0, new StringBuilder(), result);
        return result;
    }

    private void backtrackWordBreak(String s, Set<String> wordSet, int start,
                                   StringBuilder current, List<String> result) {
        if (start == s.length()) {
            result.add(current.toString().trim());
            return;
        }

        for (int end = start + 1; end <= s.length(); end++) {
            String word = s.substring(start, end);
            if (wordSet.contains(word)) {
                int lenBefore = current.length();
                if (current.length() > 0) current.append(" ");
                current.append(word);

                backtrackWordBreak(s, wordSet, end, current, result);

                current.setLength(lenBefore);
            }
        }
    }

    // Method 12: Advanced word break analysis
    public static class WordBreakAnalysis {
        boolean possible;
        int totalWays;
        int minWords;
        int maxWords;
        double avgWordLength;
        Set<String> uniqueWordsUsed;

        public WordBreakAnalysis(boolean possible, int totalWays, int minWords, int maxWords,
                               double avgWordLength, Set<String> uniqueWordsUsed) {
            this.possible = possible;
            this.totalWays = totalWays;
            this.minWords = minWords;
            this.maxWords = maxWords;
            this.avgWordLength = avgWordLength;
            this.uniqueWordsUsed = uniqueWordsUsed;
        }

        @Override
        public String toString() {
            return String.format("Possible=%s, Ways=%d, Words=[%d-%d], AvgLen=%.1f, UniqueWords=%s",
                               possible, totalWays, minWords, maxWords, avgWordLength, uniqueWordsUsed);
        }
    }

    public WordBreakAnalysis analyzeWordBreakAdvanced(String s, List<String> wordDict) {
        WordBreakResult result = wordBreakWithPositions(s, wordDict);

        if (!result.possible) {
            return new WordBreakAnalysis(false, 0, 0, 0, 0.0, new HashSet<>());
        }

        int totalWays = result.allBreaks.size();
        int minWords = Integer.MAX_VALUE;
        int maxWords = Integer.MIN_VALUE;
        int totalLength = 0;
        Set<String> uniqueWords = new HashSet<>();

        for (List<String> breakWords : result.allBreaks) {
            int wordCount = breakWords.size();
            minWords = Math.min(minWords, wordCount);
            maxWords = Math.max(maxWords, wordCount);

            for (String word : breakWords) {
                totalLength += word.length();
                uniqueWords.add(word);
            }
        }

        double avgWordLength = totalWays > 0 ? (double) totalLength / (totalWays * minWords) : 0.0;

        return new WordBreakAnalysis(true, totalWays, minWords, maxWords, avgWordLength, uniqueWords);
    }

    // Test cases
    public static void main(String[] args) {
        WordBreak8 solution = new WordBreak8();

        // Test Case 1: Basic word break
        System.out.println("=== Word Break ===");
        String s1 = "leetcode";
        List<String> dict1 = Arrays.asList("leet", "code");
        System.out.println("String: '" + s1 + "', Dict: " + dict1);

        System.out.println("Memoization: " + solution.wordBreakMemo(s1, dict1));
        System.out.println("DP: " + solution.wordBreakDP(s1, dict1));
        System.out.println("BFS: " + solution.wordBreakBFS(s1, dict1));

        // Test Case 2: All possible breaks
        List<String> allBreaks = solution.wordBreakAll(s1, dict1);
        System.out.println("All breaks: " + allBreaks);

        // Test Case 3: Minimum cuts
        System.out.println("Min cuts: " + solution.wordBreakMinCuts(s1, dict1));

        // Test Case 4: Performance analysis
        WordBreakStats stats = solution.analyzeWordBreak(s1, dict1, "dp");
        System.out.println("Analysis: " + stats);

        // Test Case 5: Validation
        boolean valid = solution.validateWordBreak(s1, dict1, allBreaks);
        System.out.println("Result valid: " + valid);

        // Test Case 6: With positions
        WordBreakResult posResult = solution.wordBreakWithPositions(s1, dict1);
        System.out.println("With positions: " + posResult);

        // Test Case 7: With constraints
        System.out.println("Max 2 words, min length 4: " +
                          solution.wordBreakWithConstraints(s1, dict1, 2, 4));

        // Test Case 8: Longest breaking word
        System.out.println("Longest breaking word: '" + solution.longestBreakingWord(s1, dict1) + "'");

        // Test Case 9: Backtrack approach
        List<String> backtrackResult = solution.wordBreakBacktrack(s1, dict1);
        System.out.println("Backtrack: " + backtrackResult);

        // Test Case 10: Advanced analysis
        WordBreakAnalysis analysis = solution.analyzeWordBreakAdvanced(s1, dict1);
        System.out.println("Advanced analysis: " + analysis);

        // Test Case 11: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty string: " + solution.wordBreakDP("", dict1));
        System.out.println("No dictionary: " + solution.wordBreakDP(s1, new ArrayList<>()));
        System.out.println("Single char: " + solution.wordBreakDP("a", Arrays.asList("a")));
        System.out.println("Impossible: " + solution.wordBreakDP("abc", Arrays.asList("d", "e")));

        // Test Case 12: Compare methods
        System.out.println("\nMethod comparison:");
        String testStr = "catsanddog";
        List<String> testDict = Arrays.asList("cat", "cats", "and", "sand", "dog");
        for (String method : Arrays.asList("memo", "dp", "bfs")) {
            WordBreakStats s = solution.analyzeWordBreak(testStr, testDict, method);
            System.out.println(method + ": " + s.possible + " possible, " + s.timeMs + "ms");
        }
    }
}