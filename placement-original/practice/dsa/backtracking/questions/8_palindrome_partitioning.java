package backtracking.questions;

/*
 * 8. PALINDROME PARTITIONING (LeetCode 131)
 *
 * Problem Statement:
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return all possible palindrome partitioning of s.
 *
 * Conceptual Understanding:
 * - Partition string into substrings where each substring is a palindrome
 * - Find all possible ways to partition the string
 * - Use backtracking to try different partition points
 * - Check if each substring is a palindrome
 * - Base case: when entire string is partitioned
 *
 * Time Complexity: O(2^n * n) for partitioning, O(n) for palindrome checks
 * Space Complexity: O(n) for recursion stack and result storage
 */

import java.util.*;

class PalindromePartitioning8 {

    // Method 1: Basic backtracking approach
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        if (s == null || s.length() == 0) {
            return result;
        }

        backtrack(s, 0, new ArrayList<>(), result);
        return result;
    }

    private void backtrack(String s, int start, List<String> current, List<List<String>> result) {
        // Base case: reached end of string
        if (start == s.length()) {
            result.add(new ArrayList<>(current));
            return;
        }

        // Try all possible partitions from current start position
        for (int end = start + 1; end <= s.length(); end++) {
            String substring = s.substring(start, end);

            // Check if substring is palindrome
            if (isPalindrome(substring)) {
                current.add(substring);
                backtrack(s, end, current, result);
                current.remove(current.size() - 1); // backtrack
            }
        }
    }

    private boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    // Method 2: Optimized with memoization for palindrome checks
    public List<List<String>> partitionMemo(String s) {
        List<List<String>> result = new ArrayList<>();
        if (s == null || s.length() == 0) {
            return result;
        }

        // Precompute palindrome status for all substrings
        boolean[][] isPal = computePalindromeTable(s);

        backtrackMemo(s, 0, new ArrayList<>(), result, isPal);
        return result;
    }

    private boolean[][] computePalindromeTable(String s) {
        int n = s.length();
        boolean[][] isPal = new boolean[n][n];

        // Single characters are palindromes
        for (int i = 0; i < n; i++) {
            isPal[i][i] = true;
        }

        // Check for two-character palindromes
        for (int i = 0; i < n - 1; i++) {
            if (s.charAt(i) == s.charAt(i + 1)) {
                isPal[i][i + 1] = true;
            }
        }

        // Check for longer palindromes
        for (int length = 3; length <= n; length++) {
            for (int i = 0; i <= n - length; i++) {
                int j = i + length - 1;
                if (s.charAt(i) == s.charAt(j) && isPal[i + 1][j - 1]) {
                    isPal[i][j] = true;
                }
            }
        }

        return isPal;
    }

    private void backtrackMemo(String s, int start, List<String> current,
                              List<List<String>> result, boolean[][] isPal) {
        if (start == s.length()) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int end = start; end < s.length(); end++) {
            if (isPal[start][end]) {
                current.add(s.substring(start, end + 1));
                backtrackMemo(s, end + 1, current, result, isPal);
                current.remove(current.size() - 1);
            }
        }
    }

    // Method 3: Find minimum cuts for palindrome partitioning
    public int minCut(String s) {
        if (s == null || s.length() == 0) return 0;

        int n = s.length();
        boolean[][] isPal = computePalindromeTable(s);
        int[] cuts = new int[n];

        for (int i = 0; i < n; i++) {
            cuts[i] = i; // maximum cuts
        }

        for (int i = 0; i < n; i++) {
            if (isPal[0][i]) {
                cuts[i] = 0;
            } else {
                for (int j = 0; j < i; j++) {
                    if (isPal[j + 1][i]) {
                        cuts[i] = Math.min(cuts[i], cuts[j] + 1);
                    }
                }
            }
        }

        return cuts[n - 1];
    }

    // Method 4: Count total number of palindrome partitions
    public int countPartitions(String s) {
        if (s == null || s.length() == 0) return 0;

        boolean[][] isPal = computePalindromeTable(s);
        return countBacktrack(s, 0, isPal);
    }

    private int countBacktrack(String s, int start, boolean[][] isPal) {
        if (start == s.length()) return 1;

        int count = 0;
        for (int end = start; end < s.length(); end++) {
            if (isPal[start][end]) {
                count += countBacktrack(s, end + 1, isPal);
            }
        }
        return count;
    }

    // Method 5: Get all partitions with minimum cuts
    public List<List<String>> getMinCutPartitions(String s) {
        List<List<String>> result = new ArrayList<>();
        if (s == null || s.length() == 0) {
            result.add(new ArrayList<>());
            return result;
        }

        boolean[][] isPal = computePalindromeTable(s);
        int minCuts = minCut(s);

        backtrackMinCuts(s, 0, new ArrayList<>(), result, isPal, minCuts, 0);
        return result;
    }

    private void backtrackMinCuts(String s, int start, List<String> current,
                                 List<List<String>> result, boolean[][] isPal,
                                 int minCuts, int currentCuts) {
        if (start == s.length()) {
            if (currentCuts == minCuts) {
                result.add(new ArrayList<>(current));
            }
            return;
        }

        for (int end = start; end < s.length(); end++) {
            if (isPal[start][end]) {
                current.add(s.substring(start, end + 1));
                backtrackMinCuts(s, end + 1, current, result, isPal, minCuts, currentCuts + 1);
                current.remove(current.size() - 1);
            }
        }
    }

    // Method 6: Palindrome partitioning with constraints
    public List<List<String>> partitionWithConstraints(String s, int maxLength, int minPartitions) {
        List<List<String>> result = new ArrayList<>();
        if (s == null || s.length() == 0) return result;

        boolean[][] isPal = computePalindromeTable(s);
        backtrackConstraints(s, 0, new ArrayList<>(), result, isPal, maxLength, minPartitions, 0);
        return result;
    }

    private void backtrackConstraints(String s, int start, List<String> current,
                                    List<List<String>> result, boolean[][] isPal,
                                    int maxLength, int minPartitions, int partitionCount) {
        if (start == s.length()) {
            if (partitionCount >= minPartitions) {
                result.add(new ArrayList<>(current));
            }
            return;
        }

        for (int end = start; end < s.length() && (end - start + 1) <= maxLength; end++) {
            if (isPal[start][end]) {
                current.add(s.substring(start, end + 1));
                backtrackConstraints(s, end + 1, current, result, isPal, maxLength,
                                   minPartitions, partitionCount + 1);
                current.remove(current.size() - 1);
            }
        }
    }

    // Method 7: Performance analysis
    public static class PartitionStats {
        String input;
        int length;
        int totalPartitions;
        int minCuts;
        long timeMs;
        double avgPartitionSize;

        public PartitionStats(String input, int length, int totalPartitions,
                            int minCuts, long timeMs, double avgPartitionSize) {
            this.input = input;
            this.length = length;
            this.totalPartitions = totalPartitions;
            this.minCuts = minCuts;
            this.timeMs = timeMs;
            this.avgPartitionSize = avgPartitionSize;
        }

        @Override
        public String toString() {
            return String.format("Input: %s (len=%d), Partitions: %d, MinCuts: %d, Time: %dms, AvgSize: %.2f",
                               input, length, totalPartitions, minCuts, timeMs, avgPartitionSize);
        }
    }

    public PartitionStats analyzePartitioning(String s) {
        long startTime = System.nanoTime();
        List<List<String>> partitions = partition(s);
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;

        int totalPartitions = partitions.size();
        int minCuts = minCut(s);

        double avgSize = 0;
        if (!partitions.isEmpty()) {
            int totalElements = 0;
            for (List<String> partition : partitions) {
                totalElements += partition.size();
            }
            avgSize = (double) totalElements / partitions.size();
        }

        return new PartitionStats(s, s.length(), totalPartitions, minCuts, timeMs, avgSize);
    }

    // Method 8: Validate palindrome partitions
    public boolean validatePartitions(String s, List<List<String>> partitions) {
        if (s == null || partitions == null) return false;

        for (List<String> partition : partitions) {
            // Check if concatenation equals original string
            StringBuilder sb = new StringBuilder();
            for (String part : partition) {
                sb.append(part);
            }
            if (!sb.toString().equals(s)) {
                return false;
            }

            // Check if each part is a palindrome
            for (String part : partition) {
                if (!isPalindrome(part)) {
                    return false;
                }
            }
        }
        return true;
    }

    // Method 9: Get partition statistics
    public static class PartitionInfo {
        int totalPartitions;
        int minPartitionSize;
        int maxPartitionSize;
        double avgPartitionSize;
        Map<Integer, Integer> sizeFrequency;

        public PartitionInfo(int totalPartitions, int minPartitionSize, int maxPartitionSize,
                           double avgPartitionSize, Map<Integer, Integer> sizeFrequency) {
            this.totalPartitions = totalPartitions;
            this.minPartitionSize = minPartitionSize;
            this.maxPartitionSize = maxPartitionSize;
            this.avgPartitionSize = avgPartitionSize;
            this.sizeFrequency = sizeFrequency;
        }

        @Override
        public String toString() {
            return String.format("Total: %d, Size range: %d-%d, Avg: %.2f, Distribution: %s",
                               totalPartitions, minPartitionSize, maxPartitionSize,
                               avgPartitionSize, sizeFrequency);
        }
    }

    public PartitionInfo getPartitionInfo(String s) {
        List<List<String>> partitions = partition(s);

        if (partitions.isEmpty()) {
            return new PartitionInfo(0, 0, 0, 0, new HashMap<>());
        }

        int totalPartitions = partitions.size();
        int minSize = Integer.MAX_VALUE;
        int maxSize = Integer.MIN_VALUE;
        int totalSizes = 0;
        Map<Integer, Integer> sizeFrequency = new HashMap<>();

        for (List<String> partition : partitions) {
            int size = partition.size();
            minSize = Math.min(minSize, size);
            maxSize = Math.max(maxSize, size);
            totalSizes += size;
            sizeFrequency.put(size, sizeFrequency.getOrDefault(size, 0) + 1);
        }

        double avgSize = (double) totalSizes / totalPartitions;

        return new PartitionInfo(totalPartitions, minSize, maxSize, avgSize, sizeFrequency);
    }

    // Method 10: Palindrome partitioning II (minimum cuts)
    public int minCutDP(String s) {
        if (s == null || s.length() == 0) return 0;

        int n = s.length();
        boolean[][] isPal = computePalindromeTable(s);
        int[] cuts = new int[n];

        // Initialize cuts array
        for (int i = 0; i < n; i++) {
            cuts[i] = i;
        }

        for (int i = 0; i < n; i++) {
            // Check for odd-length palindromes centered at i
            for (int j = 0; i - j >= 0 && i + j < n && isPal[i - j][i + j]; j++) {
                cuts[i + j] = Math.min(cuts[i + j], (i - j == 0 ? 0 : cuts[i - j - 1] + 1));
            }

            // Check for even-length palindromes centered between i and i+1
            for (int j = 0; i - j >= 0 && i + 1 + j < n && isPal[i - j][i + 1 + j]; j++) {
                cuts[i + 1 + j] = Math.min(cuts[i + 1 + j], (i - j == 0 ? 0 : cuts[i - j - 1] + 1));
            }
        }

        return cuts[n - 1];
    }

    // Method 11: Find all partitions of specific length
    public List<List<String>> getPartitionsOfLength(String s, int targetLength) {
        List<List<String>> result = new ArrayList<>();
        if (s == null || s.length() == 0 || targetLength <= 0) return result;

        boolean[][] isPal = computePalindromeTable(s);
        backtrackLength(s, 0, new ArrayList<>(), result, isPal, targetLength);
        return result;
    }

    private void backtrackLength(String s, int start, List<String> current,
                                List<List<String>> result, boolean[][] isPal, int targetLength) {
        if (start == s.length()) {
            if (current.size() == targetLength) {
                result.add(new ArrayList<>(current));
            }
            return;
        }

        for (int end = start; end < s.length(); end++) {
            if (isPal[start][end]) {
                current.add(s.substring(start, end + 1));
                backtrackLength(s, end + 1, current, result, isPal, targetLength);
                current.remove(current.size() - 1);
            }
        }
    }

    // Method 12: Advanced palindrome partitioning with filters
    public List<List<String>> partitionAdvanced(String s, boolean uniqueOnly,
                                               int maxPartitions, boolean longestFirst) {
        List<List<String>> allPartitions = partition(s);
        List<List<String>> filtered = new ArrayList<>();

        Set<String> seen = uniqueOnly ? new HashSet<>() : null;

        // Sort by partition count if longestFirst is true
        if (longestFirst) {
            allPartitions.sort((a, b) -> Integer.compare(b.size(), a.size()));
        }

        for (List<String> partition : allPartitions) {
            if (partition.size() > maxPartitions) continue;

            if (uniqueOnly) {
                String key = String.join(",", partition);
                if (seen.contains(key)) continue;
                seen.add(key);
            }

            filtered.add(partition);
        }

        return filtered;
    }

    // Test cases
    public static void main(String[] args) {
        PalindromePartitioning8 solution = new PalindromePartitioning8();

        // Test Case 1: Basic partitioning
        System.out.println("=== Basic Palindrome Partitioning ===");
        String s1 = "aab";
        List<List<String>> result1 = solution.partition(s1);
        System.out.println("Input: " + s1);
        System.out.println("Partitions: " + result1);
        System.out.println("Valid: " + solution.validatePartitions(s1, result1));

        // Test Case 2: Memoized approach
        List<List<String>> result2 = solution.partitionMemo(s1);
        System.out.println("Memoized: " + result2);

        // Test Case 3: Minimum cuts
        int minCuts = solution.minCut(s1);
        System.out.println("Minimum cuts: " + minCuts);

        // Test Case 4: Count partitions
        int count = solution.countPartitions(s1);
        System.out.println("Total partitions: " + count);

        // Test Case 5: Minimum cut partitions
        List<List<String>> minCutParts = solution.getMinCutPartitions(s1);
        System.out.println("Min cut partitions: " + minCutParts);

        // Test Case 6: With constraints
        List<List<String>> constrained = solution.partitionWithConstraints(s1, 2, 2);
        System.out.println("Constrained (maxLen=2, minParts=2): " + constrained);

        // Test Case 7: Performance analysis
        PartitionStats stats = solution.analyzePartitioning(s1);
        System.out.println("Analysis: " + stats);

        // Test Case 8: Partition info
        PartitionInfo info = solution.getPartitionInfo(s1);
        System.out.println("Partition info: " + info);

        // Test Case 9: DP minimum cuts
        int dpCuts = solution.minCutDP(s1);
        System.out.println("DP min cuts: " + dpCuts);

        // Test Case 10: Specific length partitions
        List<List<String>> lengthParts = solution.getPartitionsOfLength(s1, 2);
        System.out.println("Length 2 partitions: " + lengthParts);

        // Test Case 11: Advanced filtering
        List<List<String>> advanced = solution.partitionAdvanced(s1, true, 3, true);
        System.out.println("Advanced (unique, maxParts=3, longestFirst): " + advanced);

        // Test Case 12: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty string: " + solution.partition(""));
        System.out.println("Single char: " + solution.partition("a"));
        System.out.println("All same chars: " + solution.partition("aaa"));
        System.out.println("No palindromes: " + solution.partition("abc"));
    }
}