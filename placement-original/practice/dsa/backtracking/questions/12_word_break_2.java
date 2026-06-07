package backtracking.questions;

/*
 * 12. WORD BREAK II (LeetCode 140)
 *
 * Problem Statement:
 * Given a string s and a dictionary of strings wordDict, add spaces in s to construct
 * a sentence where each word is a valid dictionary word. Return all such possible sentences.
 *
 * Conceptual Understanding:
 * - Break string into words from dictionary
 * - Find all possible ways to segment the string
 * - Use backtracking to try different word breaks
 * - Memoization to avoid redundant calculations
 * - Base case: when entire string is segmented
 *
 * Time Complexity: O(2^n) worst case, O(n^2) with memoization
 * Space Complexity: O(n) for recursion and memoization
 */

import java.util.*;

class WordBreakII12 {

    // Method 1: Basic backtracking approach
    public List<String> wordBreak(String s, List<String> wordDict) {
        List<String> result = new ArrayList<>();
        Set<String> wordSet = new HashSet<>(wordDict);
        backtrack(s, 0, wordSet, new ArrayList<>(), result);
        return result;
    }

    private void backtrack(String s, int start, Set<String> wordSet,
                          List<String> current, List<String> result) {
        // Base case: reached end of string
        if (start == s.length()) {
            result.add(String.join(" ", current));
            return;
        }

        // Try all possible word lengths
        for (int end = start + 1; end <= s.length(); end++) {
            String word = s.substring(start, end);

            if (wordSet.contains(word)) {
                current.add(word);
                backtrack(s, end, wordSet, current, result);
                current.remove(current.size() - 1); // backtrack
            }
        }
    }

    // Method 2: Memoized backtracking
    public List<String> wordBreakMemo(String s, List<String> wordDict) {
        Set<String> wordSet = new HashSet<>(wordDict);
        Map<Integer, List<String>> memo = new HashMap<>();
        return wordBreakHelper(s, 0, wordSet, memo);
    }

    private List<String> wordBreakHelper(String s, int start, Set<String> wordSet,
                                       Map<Integer, List<String>> memo) {
        if (memo.containsKey(start)) {
            return memo.get(start);
        }

        List<String> result = new ArrayList<>();

        if (start == s.length()) {
            result.add("");
            return result;
        }

        for (int end = start + 1; end <= s.length(); end++) {
            String word = s.substring(start, end);

            if (wordSet.contains(word)) {
                List<String> subResults = wordBreakHelper(s, end, wordSet, memo);

                for (String subResult : subResults) {
                    if (subResult.isEmpty()) {
                        result.add(word);
                    } else {
                        result.add(word + " " + subResult);
                    }
                }
            }
        }

        memo.put(start, result);
        return result;
    }

    // Method 3: Count total ways to break words
    public int countWordBreaks(String s, List<String> wordDict) {
        Set<String> wordSet = new HashSet<>(wordDict);
        Map<Integer, Integer> memo = new HashMap<>();
        return countHelper(s, 0, wordSet, memo);
    }

    private int countHelper(String s, int start, Set<String> wordSet, Map<Integer, Integer> memo) {
        if (memo.containsKey(start)) {
            return memo.get(start);
        }

        if (start == s.length()) {
            return 1;
        }

        int count = 0;
        for (int end = start + 1; end <= s.length(); end++) {
            String word = s.substring(start, end);
            if (wordSet.contains(word)) {
                count += countHelper(s, end, wordSet, memo);
            }
        }

        memo.put(start, count);
        return count;
    }

    // Method 4: Get word breaks with minimum words
    public List<String> getMinWordBreaks(String s, List<String> wordDict) {
        Set<String> wordSet = new HashSet<>(wordDict);
        Map<Integer, List<String>> memo = new HashMap<>();
        List<String> allBreaks = wordBreakHelper(s, 0, wordSet, memo);

        if (allBreaks.isEmpty()) return new ArrayList<>();

        // Find minimum word count
        int minWords = Integer.MAX_VALUE;
        for (String breakStr : allBreaks) {
            int wordCount = breakStr.isEmpty() ? 0 : breakStr.split(" ").length;
            minWords = Math.min(minWords, wordCount);
        }

        // Filter breaks with minimum words
        List<String> minBreaks = new ArrayList<>();
        for (String breakStr : allBreaks) {
            int wordCount = breakStr.isEmpty() ? 0 : breakStr.split(" ").length;
            if (wordCount == minWords) {
                minBreaks.add(breakStr);
            }
        }

        return minBreaks;
    }

    // Method 5: Word break with constraints
    public List<String> wordBreakConstrained(String s, List<String> wordDict,
                                           int maxWords, int minWordLength) {
        List<String> result = new ArrayList<>();
        Set<String> wordSet = new HashSet<>(wordDict);
        backtrackConstrained(s, 0, wordSet, new ArrayList<>(), result, maxWords, minWordLength, 0);
        return result;
    }

    private void backtrackConstrained(String s, int start, Set<String> wordSet,
                                    List<String> current, List<String> result,
                                    int maxWords, int minWordLength, int wordCount) {
        if (start == s.length()) {
            if (wordCount <= maxWords) {
                result.add(String.join(" ", current));
            }
            return;
        }

        if (wordCount >= maxWords) return;

        for (int end = start + minWordLength; end <= s.length(); end++) {
            String word = s.substring(start, end);

            if (wordSet.contains(word)) {
                current.add(word);
                backtrackConstrained(s, end, wordSet, current, result, maxWords,
                                   minWordLength, wordCount + 1);
                current.remove(current.size() - 1);
            }
        }
    }

    // Method 6: Performance analysis
    public static class WordBreakAnalysis {
        String input;
        int length;
        int dictSize;
        int totalBreaks;
        long timeMs;
        double avgWordsPerBreak;
        int minWords;
        int maxWords;

        public WordBreakAnalysis(String input, int length, int dictSize, int totalBreaks,
                               long timeMs, double avgWordsPerBreak, int minWords, int maxWords) {
            this.input = input;
            this.length = length;
            this.dictSize = dictSize;
            this.totalBreaks = totalBreaks;
            this.timeMs = timeMs;
            this.avgWordsPerBreak = avgWordsPerBreak;
            this.minWords = minWords;
            this.maxWords = maxWords;
        }

        @Override
        public String toString() {
            return String.format("Input: %s (len=%d), Dict: %d, Breaks: %d, Time: %dms, Words: %d-%d (avg: %.1f)",
                               input, length, dictSize, totalBreaks, timeMs, minWords, maxWords, avgWordsPerBreak);
        }
    }

    public WordBreakAnalysis analyzeWordBreak(String s, List<String> wordDict) {
        long startTime = System.nanoTime();
        List<String> breaks = wordBreak(s, wordDict);
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;

        int totalBreaks = breaks.size();
        int minWords = Integer.MAX_VALUE;
        int maxWords = Integer.MIN_VALUE;
        int totalWords = 0;

        for (String breakStr : breaks) {
            String[] words = breakStr.split(" ");
            int wordCount = words.length;
            minWords = Math.min(minWords, wordCount);
            maxWords = Math.max(maxWords, wordCount);
            totalWords += wordCount;
        }

        double avgWords = totalBreaks > 0 ? (double) totalWords / totalBreaks : 0;

        return new WordBreakAnalysis(s, s.length(), wordDict.size(), totalBreaks,
                                   timeMs, avgWords, minWords, maxWords);
    }

    // Method 7: Validate word breaks
    public boolean validateWordBreaks(String s, List<String> wordDict, List<String> breaks) {
        Set<String> wordSet = new HashSet<>(wordDict);

        for (String breakStr : breaks) {
            String[] words = breakStr.split(" ");
            StringBuilder reconstructed = new StringBuilder();

            for (String word : words) {
                if (!wordSet.contains(word)) {
                    return false; // Invalid word
                }
                reconstructed.append(word);
            }

            if (!reconstructed.toString().equals(s)) {
                return false; // Doesn't reconstruct original string
            }
        }

        return true;
    }

    // Method 8: Get word break statistics
    public static class WordBreakStats {
        int totalBreaks;
        int uniqueWordsUsed;
        double avgWordLength;
        Map<String, Integer> wordFrequency;
        Set<Integer> wordCounts;

        public WordBreakStats(int totalBreaks, int uniqueWordsUsed, double avgWordLength,
                            Map<String, Integer> wordFrequency, Set<Integer> wordCounts) {
            this.totalBreaks = totalBreaks;
            this.uniqueWordsUsed = uniqueWordsUsed;
            this.avgWordLength = avgWordLength;
            this.wordFrequency = wordFrequency;
            this.wordCounts = wordCounts;
        }

        @Override
        public String toString() {
            return String.format("Breaks: %d, Unique words: %d, Avg length: %.1f, Word counts: %s",
                               totalBreaks, uniqueWordsUsed, avgWordLength, wordCounts);
        }
    }

    public WordBreakStats getWordBreakStats(String s, List<String> wordDict) {
        List<String> breaks = wordBreak(s, wordDict);

        if (breaks.isEmpty()) {
            return new WordBreakStats(0, 0, 0, new HashMap<>(), new HashSet<>());
        }

        int totalBreaks = breaks.size();
        Set<String> uniqueWords = new HashSet<>();
        Map<String, Integer> wordFreq = new HashMap<>();
        Set<Integer> wordCounts = new HashSet<>();
        int totalWordLength = 0;
        int totalWords = 0;

        for (String breakStr : breaks) {
            String[] words = breakStr.split(" ");
            wordCounts.add(words.length);

            for (String word : words) {
                uniqueWords.add(word);
                wordFreq.put(word, wordFreq.getOrDefault(word, 0) + 1);
                totalWordLength += word.length();
                totalWords++;
            }
        }

        double avgWordLength = (double) totalWordLength / totalWords;

        return new WordBreakStats(totalBreaks, uniqueWords.size(), avgWordLength,
                                wordFreq, wordCounts);
    }

    // Method 9: Word break with case sensitivity options
    public List<String> wordBreakCaseSensitive(String s, List<String> wordDict, boolean caseSensitive) {
        List<String> result = new ArrayList<>();
        Set<String> wordSet = new HashSet<>();

        // Prepare word set based on case sensitivity
        for (String word : wordDict) {
            if (caseSensitive) {
                wordSet.add(word);
            } else {
                wordSet.add(word.toLowerCase());
            }
        }

        backtrackCaseSensitive(s, 0, wordSet, new ArrayList<>(), result, caseSensitive);
        return result;
    }

    private void backtrackCaseSensitive(String s, int start, Set<String> wordSet,
                                      List<String> current, List<String> result, boolean caseSensitive) {
        if (start == s.length()) {
            result.add(String.join(" ", current));
            return;
        }

        for (int end = start + 1; end <= s.length(); end++) {
            String word = s.substring(start, end);
            String checkWord = caseSensitive ? word : word.toLowerCase();

            if (wordSet.contains(checkWord)) {
                current.add(word); // Keep original case
                backtrackCaseSensitive(s, end, wordSet, current, result, caseSensitive);
                current.remove(current.size() - 1);
            }
        }
    }

    // Method 10: Find all possible word breaks (including overlapping)
    public List<String> getAllPossibleBreaks(String s, List<String> wordDict) {
        // This is essentially the same as wordBreak but allows overlapping words
        return wordBreak(s, wordDict);
    }

    // Method 11: Word break with custom separators
    public List<String> wordBreakWithSeparator(String s, List<String> wordDict, String separator) {
        List<String> result = new ArrayList<>();
        Set<String> wordSet = new HashSet<>(wordDict);
        backtrackWithSeparator(s, 0, wordSet, new ArrayList<>(), result, separator);
        return result;
    }

    private void backtrackWithSeparator(String s, int start, Set<String> wordSet,
                                      List<String> current, List<String> result, String separator) {
        if (start == s.length()) {
            result.add(String.join(separator, current));
            return;
        }

        for (int end = start + 1; end <= s.length(); end++) {
            String word = s.substring(start, end);

            if (wordSet.contains(word)) {
                current.add(word);
                backtrackWithSeparator(s, end, wordSet, current, result, separator);
                current.remove(current.size() - 1);
            }
        }
    }

    // Method 12: Advanced word break with filtering
    public List<String> wordBreakAdvanced(String s, List<String> wordDict,
                                        boolean uniqueOnly, int maxResults, boolean longestWordsFirst) {
        List<String> allBreaks = wordBreak(s, wordDict);
        List<String> filtered = new ArrayList<>();

        Set<String> seen = uniqueOnly ? new HashSet<>() : null;

        // Sort by word count if longestWordsFirst
        if (longestWordsFirst) {
            allBreaks.sort((a, b) -> {
                String[] wordsA = a.split(" ");
                String[] wordsB = b.split(" ");
                return Integer.compare(wordsB.length, wordsA.length);
            });
        }

        for (String breakStr : allBreaks) {
            if (filtered.size() >= maxResults) break;

            if (uniqueOnly) {
                if (seen.contains(breakStr)) continue;
                seen.add(breakStr);
            }

            filtered.add(breakStr);
        }

        return filtered;
    }

    // Test cases
    public static void main(String[] args) {
        WordBreakII12 solution = new WordBreakII12();

        // Test Case 1: Basic word break
        System.out.println("=== Word Break II ===");
        String s1 = "catsanddog";
        List<String> wordDict1 = Arrays.asList("cat", "cats", "and", "sand", "dog");
        List<String> result1 = solution.wordBreak(s1, wordDict1);
        System.out.println("Input: " + s1);
        System.out.println("Word dict: " + wordDict1);
        System.out.println("Breaks: " + result1);
        System.out.println("Valid: " + solution.validateWordBreaks(s1, wordDict1, result1));

        // Test Case 2: Memoized approach
        List<String> result2 = solution.wordBreakMemo(s1, wordDict1);
        System.out.println("Memoized: " + result2);

        // Test Case 3: Count breaks
        int count = solution.countWordBreaks(s1, wordDict1);
        System.out.println("Total breaks: " + count);

        // Test Case 4: Minimum word breaks
        List<String> minBreaks = solution.getMinWordBreaks(s1, wordDict1);
        System.out.println("Min word breaks: " + minBreaks);

        // Test Case 5: Constrained breaks
        List<String> constrained = solution.wordBreakConstrained(s1, wordDict1, 3, 2);
        System.out.println("Constrained (maxWords=3, minLen=2): " + constrained);

        // Test Case 6: Performance analysis
        WordBreakAnalysis analysis = solution.analyzeWordBreak(s1, wordDict1);
        System.out.println("Analysis: " + analysis);

        // Test Case 7: Word break statistics
        WordBreakStats stats = solution.getWordBreakStats(s1, wordDict1);
        System.out.println("Stats: " + stats);

        // Test Case 8: Case sensitive
        List<String> caseSensitive = solution.wordBreakCaseSensitive("CatSandDog",
            Arrays.asList("cat", "sand", "dog"), false);
        System.out.println("Case insensitive: " + caseSensitive);

        // Test Case 9: Custom separator
        List<String> customSep = solution.wordBreakWithSeparator(s1, wordDict1, "-");
        System.out.println("Custom separator: " + customSep);

        // Test Case 10: Advanced filtering
        List<String> advanced = solution.wordBreakAdvanced(s1, wordDict1, true, 5, true);
        System.out.println("Advanced (unique, max=5, longestFirst): " + advanced);

        // Test Case 11: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty string: " + solution.wordBreak("", wordDict1));
        System.out.println("No words: " + solution.wordBreak("xyz", wordDict1));
        System.out.println("Single word: " + solution.wordBreak("cat", wordDict1));
        System.out.println("All words: " + solution.wordBreak("cat", Arrays.asList("cat")));

        // Test Case 12: Complex example
        String s2 = "pineapplepenapple";
        List<String> wordDict2 = Arrays.asList("apple", "pen", "applepen", "pine", "pineapple");
        List<String> result3 = solution.wordBreak(s2, wordDict2);
        System.out.println("Complex: " + s2 + " -> " + result3.size() + " breaks");
    }
}