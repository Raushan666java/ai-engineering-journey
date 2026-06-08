package heaps.questions;

/*
 * 8. REORGANIZE STRING (LeetCode 767)
 *
 * Problem Statement:
 * Given a string s, rearrange the characters of s so that any two identical characters
 * are not adjacent to each other. Return any possible rearrangement of s or return ""
 * if not possible.
 *
 * Conceptual Understanding:
 * - Rearrange string so no two identical characters are adjacent
 * - Multiple approaches: greedy with heap, counting with sorting
 * - Heap approach: use max-heap to always pick most frequent character
 * - Greedy: place characters with gaps to avoid adjacency
 * - Key insight: most frequent character count <= (n+1)/2
 * - Use priority queue to always pick character with highest remaining count
 *
 * Time Complexity: O(n log k) heap, O(n) greedy with counting
 * Space Complexity: O(k) heap, O(1) for 26 letters
 */

import java.util.*;

class ReorganizeString8 {

    // Method 1: Using Max Heap (Priority Queue)
    public String reorganizeString(String s) {
        if (s == null || s.length() <= 1) {
            return s;
        }

        // Count frequencies
        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

        // Check if reorganization is possible
        int maxCount = 0;
        for (int freq : count) {
            maxCount = Math.max(maxCount, freq);
        }
        if (maxCount > (s.length() + 1) / 2) {
            return "";
        }

        // Max heap with character and frequency
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> b[1] - a[1]);

        for (int i = 0; i < 26; i++) {
            if (count[i] > 0) {
                maxHeap.offer(new int[]{i, count[i]});
            }
        }

        StringBuilder result = new StringBuilder();

        while (!maxHeap.isEmpty()) {
            // Get most frequent character
            int[] first = maxHeap.poll();
            char ch1 = (char) (first[0] + 'a');

            // If same as last character, get second most frequent
            if (result.length() > 0 && ch1 == result.charAt(result.length() - 1)) {
                if (maxHeap.isEmpty()) {
                    return ""; // Impossible
                }

                int[] second = maxHeap.poll();
                char ch2 = (char) (second[0] + 'a');
                result.append(ch2);
                second[1]--;

                // Put back if still has count
                if (second[1] > 0) {
                    maxHeap.offer(second);
                }

                // Put back first character
                maxHeap.offer(first);
            } else {
                result.append(ch1);
                first[1]--;

                // Put back if still has count
                if (first[1] > 0) {
                    maxHeap.offer(first);
                }
            }
        }

        return result.toString();
    }

    // Method 2: Greedy approach with counting and sorting
    public String reorganizeStringGreedy(String s) {
        if (s == null || s.length() <= 1) {
            return s;
        }

        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

        // Check possibility
        int maxCount = 0;
        for (int freq : count) {
            maxCount = Math.max(maxCount, freq);
        }
        if (maxCount > (s.length() + 1) / 2) {
            return "";
        }

        // Sort characters by frequency (descending)
        List<int[]> charFreq = new ArrayList<>();
        for (int i = 0; i < 26; i++) {
            if (count[i] > 0) {
                charFreq.add(new int[]{i, count[i]});
            }
        }
        charFreq.sort((a, b) -> b[1] - a[1]);

        // Place characters in even positions first
        char[] result = new char[s.length()];
        int index = 0;

        for (int[] freq : charFreq) {
            char ch = (char) (freq[0] + 'a');
            int times = freq[1];

            for (int i = 0; i < times; i++) {
                if (index >= s.length()) {
                    index = 1; // Switch to odd positions
                }
                result[index] = ch;
                index += 2;
            }
        }

        return new String(result);
    }

    // Method 3: Using StringBuilder with alternating placement
    public String reorganizeStringAlternating(String s) {
        if (s == null || s.length() <= 1) {
            return s;
        }

        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

        // Check possibility
        int maxCount = 0;
        for (int freq : count) {
            maxCount = Math.max(maxCount, freq);
        }
        if (maxCount > (s.length() + 1) / 2) {
            return "";
        }

        // Find most frequent character
        int maxIndex = 0;
        for (int i = 1; i < 26; i++) {
            if (count[i] > count[maxIndex]) {
                maxIndex = i;
            }
        }

        StringBuilder result = new StringBuilder();
        char maxChar = (char) (maxIndex + 'a');

        // Place most frequent character first
        while (count[maxIndex] > 0) {
            result.append(maxChar);
            count[maxIndex]--;

            // Add other characters between
            for (int i = 0; i < 26 && count[maxIndex] > 0; i++) {
                if (i != maxIndex && count[i] > 0) {
                    result.append((char) (i + 'a'));
                    count[i]--;
                    break;
                }
            }
        }

        // Add remaining characters
        for (int i = 0; i < 26; i++) {
            while (count[i] > 0) {
                result.append((char) (i + 'a'));
                count[i]--;
            }
        }

        return result.toString();
    }

    // Method 4: Using two pointers approach
    public String reorganizeStringTwoPointers(String s) {
        if (s == null || s.length() <= 1) {
            return s;
        }

        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

        // Check possibility
        int maxCount = 0;
        for (int freq : count) {
            maxCount = Math.max(maxCount, freq);
        }
        if (maxCount > (s.length() + 1) / 2) {
            return "";
        }

        char[] result = new char[s.length()];
        int evenIndex = 0;
        int oddIndex = 1;
        int halfLength = s.length() / 2;

        for (int i = 0; i < 26; i++) {
            char ch = (char) (i + 'a');
            int freq = count[i];

            while (freq > 0 && freq <= halfLength && oddIndex < s.length()) {
                result[oddIndex] = ch;
                oddIndex += 2;
                freq--;
            }

            while (freq > 0) {
                result[evenIndex] = ch;
                evenIndex += 2;
                freq--;
            }
        }

        return new String(result);
    }

    // Method 5: Recursive backtracking (educational)
    public String reorganizeStringBacktracking(String s) {
        if (s == null || s.length() <= 1) {
            return s;
        }

        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

        // Check possibility
        int maxCount = 0;
        for (int freq : count) {
            maxCount = Math.max(maxCount, freq);
        }
        if (maxCount > (s.length() + 1) / 2) {
            return "";
        }

        char[] result = new char[s.length()];
        return backtrack(result, count, 0) ? new String(result) : "";
    }

    private boolean backtrack(char[] result, int[] count, int index) {
        if (index == result.length) {
            return true;
        }

        for (int i = 0; i < 26; i++) {
            if (count[i] > 0) {
                // Check if same as previous character
                if (index > 0 && result[index - 1] - 'a' == i) {
                    continue;
                }

                result[index] = (char) (i + 'a');
                count[i]--;

                if (backtrack(result, count, index + 1)) {
                    return true;
                }

                count[i]++;
            }
        }

        return false;
    }

    // Method 6: Using frequency map and list
    public String reorganizeStringFrequencyMap(String s) {
        if (s == null || s.length() <= 1) {
            return s;
        }

        Map<Character, Integer> freqMap = new HashMap<>();
        for (char c : s.toCharArray()) {
            freqMap.put(c, freqMap.getOrDefault(c, 0) + 1);
        }

        // Check possibility
        int maxCount = 0;
        for (int freq : freqMap.values()) {
            maxCount = Math.max(maxCount, freq);
        }
        if (maxCount > (s.length() + 1) / 2) {
            return "";
        }

        // Sort characters by frequency
        List<Character> chars = new ArrayList<>(freqMap.keySet());
        chars.sort((a, b) -> freqMap.get(b) - freqMap.get(a));

        StringBuilder result = new StringBuilder();

        // Place characters in round-robin fashion
        while (result.length() < s.length()) {
            boolean placed = false;
            for (int i = 0; i < chars.size(); i++) {
                char ch = chars.get(i);
                if (freqMap.get(ch) > 0 &&
                    (result.length() == 0 || ch != result.charAt(result.length() - 1))) {
                    result.append(ch);
                    freqMap.put(ch, freqMap.get(ch) - 1);
                    placed = true;
                    break;
                }
            }

            if (!placed) {
                return ""; // Impossible to place
            }
        }

        return result.toString();
    }

    // Method 7: Optimized heap with better space usage
    public String reorganizeStringOptimized(String s) {
        if (s == null || s.length() <= 1) {
            return s;
        }

        int[] count = new int[26];
        int maxCount = 0;
        int maxIndex = 0;

        for (char c : s.toCharArray()) {
            count[c - 'a']++;
            if (count[c - 'a'] > maxCount) {
                maxCount = count[c - 'a'];
                maxIndex = c - 'a';
            }
        }

        // Check possibility
        if (maxCount > (s.length() + 1) / 2) {
            return "";
        }

        char[] result = new char[s.length()];
        int index = 0;

        // Place most frequent character at even positions
        char maxChar = (char) (maxIndex + 'a');
        while (count[maxIndex] > 0) {
            result[index] = maxChar;
            index += 2;
            count[maxIndex]--;
        }

        // Place remaining characters
        for (int i = 0; i < 26; i++) {
            while (count[i] > 0) {
                if (index >= s.length()) {
                    index = 1; // Switch to odd positions
                }
                result[index] = (char) (i + 'a');
                index += 2;
                count[i]--;
            }
        }

        return new String(result);
    }

    // Method 8: Count and validate only
    public boolean canReorganize(String s) {
        if (s == null || s.length() <= 1) {
            return true;
        }

        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

        int maxCount = 0;
        for (int freq : count) {
            maxCount = Math.max(maxCount, freq);
        }

        return maxCount <= (s.length() + 1) / 2;
    }

    // Method 9: Get reorganization statistics
    public static class ReorganizeStats {
        boolean possible;
        int maxFrequency;
        int totalLength;
        double ratio;

        public ReorganizeStats(boolean possible, int maxFrequency, int totalLength) {
            this.possible = possible;
            this.maxFrequency = maxFrequency;
            this.totalLength = totalLength;
            this.ratio = (double) maxFrequency / totalLength;
        }

        @Override
        public String toString() {
            return String.format("Possible: %s, Max Freq: %d, Length: %d, Ratio: %.2f",
                               possible, maxFrequency, totalLength, ratio);
        }
    }

    public ReorganizeStats getReorganizeStats(String s) {
        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

        int maxCount = 0;
        for (int freq : count) {
            maxCount = Math.max(maxCount, freq);
        }

        boolean possible = maxCount <= (s.length() + 1) / 2;
        return new ReorganizeStats(possible, maxCount, s.length());
    }

    // Method 10: Multiple possible reorganizations
    public List<String> getAllReorganizations(String s) {
        List<String> results = new ArrayList<>();
        if (!canReorganize(s)) {
            return results;
        }

        // Use backtracking to find all possible reorganizations
        char[] chars = s.toCharArray();
        Arrays.sort(chars); // Sort to handle duplicates
        boolean[] used = new boolean[s.length()];
        StringBuilder current = new StringBuilder();

        generateReorganizations(chars, used, current, results);
        return results;
    }

    private void generateReorganizations(char[] chars, boolean[] used,
                                       StringBuilder current, List<String> results) {
        if (current.length() == chars.length) {
            results.add(current.toString());
            return;
        }

        for (int i = 0; i < chars.length; i++) {
            if (used[i]) continue;

            // Skip duplicates
            if (i > 0 && chars[i] == chars[i - 1] && !used[i - 1]) continue;

            // Check adjacency
            if (current.length() > 0 && chars[i] == current.charAt(current.length() - 1)) {
                continue;
            }

            used[i] = true;
            current.append(chars[i]);

            generateReorganizations(chars, used, current, results);

            current.deleteCharAt(current.length() - 1);
            used[i] = false;
        }
    }

    // Method 11: Performance comparison
    public static class PerformanceResult {
        String method;
        long timeMs;
        String result;

        public PerformanceResult(String method, long timeMs, String result) {
            this.method = method;
            this.timeMs = timeMs;
            this.result = result;
        }

        @Override
        public String toString() {
            return String.format("%s: %d ms, Result: %s", method, timeMs,
                               result.length() > 20 ? result.substring(0, 20) + "..." : result);
        }
    }

    public List<PerformanceResult> comparePerformance(String s) {
        List<PerformanceResult> results = new ArrayList<>();

        // Heap method
        long start = System.nanoTime();
        String heapResult = reorganizeString(s);
        long heapTime = (System.nanoTime() - start) / 1_000_000;
        results.add(new PerformanceResult("Max Heap", heapTime, heapResult));

        // Greedy method
        start = System.nanoTime();
        String greedyResult = reorganizeStringGreedy(s);
        long greedyTime = (System.nanoTime() - start) / 1_000_000;
        results.add(new PerformanceResult("Greedy", greedyTime, greedyResult));

        // Optimized method
        start = System.nanoTime();
        String optimizedResult = reorganizeStringOptimized(s);
        long optimizedTime = (System.nanoTime() - start) / 1_000_000;
        results.add(new PerformanceResult("Optimized", optimizedTime, optimizedResult));

        return results;
    }

    // Method 12: Validate reorganization
    public boolean validateReorganization(String original, String reorganized) {
        if (original == null || reorganized == null) {
            return false;
        }

        if (original.length() != reorganized.length()) {
            return false;
        }

        // Check character frequencies
        int[] count1 = new int[26];
        int[] count2 = new int[26];

        for (char c : original.toCharArray()) {
            count1[c - 'a']++;
        }

        for (char c : reorganized.toCharArray()) {
            count2[c - 'a']++;
        }

        if (!Arrays.equals(count1, count2)) {
            return false;
        }

        // Check no two identical characters are adjacent
        for (int i = 1; i < reorganized.length(); i++) {
            if (reorganized.charAt(i) == reorganized.charAt(i - 1)) {
                return false;
            }
        }

        return true;
    }

    // Test cases
    public static void main(String[] args) {
        ReorganizeString8 solution = new ReorganizeString8();
        String s = "aab";

        // Test Case 1: Heap approach
        System.out.println("Original string: " + s);
        String result1 = solution.reorganizeString(s);
        System.out.println("Reorganized (Heap): " + result1);
        System.out.println("Valid: " + solution.validateReorganization(s, result1));

        // Test Case 2: Greedy approach
        String result2 = solution.reorganizeStringGreedy(s);
        System.out.println("Reorganized (Greedy): " + result2);
        System.out.println("Valid: " + solution.validateReorganization(s, result2));

        // Test Case 3: Alternating approach
        String result3 = solution.reorganizeStringAlternating(s);
        System.out.println("Reorganized (Alternating): " + result3);
        System.out.println("Valid: " + solution.validateReorganization(s, result3));

        // Test Case 4: Optimized approach
        String result4 = solution.reorganizeStringOptimized(s);
        System.out.println("Reorganized (Optimized): " + result4);
        System.out.println("Valid: " + solution.validateReorganization(s, result4));

        // Test Case 5: Statistics
        ReorganizeStats stats = solution.getReorganizeStats(s);
        System.out.println("Statistics: " + stats);

        // Test Case 6: Performance comparison
        System.out.println("\nPerformance comparison:");
        String longString = "aabbccdd" + "aabbccdd".repeat(10);
        List<PerformanceResult> perfResults = solution.comparePerformance(longString);
        for (PerformanceResult result : perfResults) {
            System.out.println(result);
        }

        // Test Case 7: Edge cases
        System.out.println("\nEdge cases:");

        // Empty string
        System.out.println("Empty: " + solution.reorganizeString(""));

        // Single character
        System.out.println("Single: " + solution.reorganizeString("a"));

        // All same characters (impossible)
        System.out.println("All same (aaa): " + solution.reorganizeString("aaa"));

        // Two same characters
        System.out.println("Two same (aa): " + solution.reorganizeString("aa"));

        // Already valid
        System.out.println("Already valid (aba): " + solution.reorganizeString("aba"));

        // Test Case 8: Complex string
        String complex = "aaabbbccc";
        String complexResult = solution.reorganizeString(complex);
        System.out.println("Complex (aaabbbccc): " + complexResult);
        System.out.println("Valid: " + solution.validateReorganization(complex, complexResult));

        // Test Case 9: Impossible case
        String impossible = "aaab";
        String impossibleResult = solution.reorganizeString(impossible);
        System.out.println("Impossible (aaab): " + impossibleResult);

        // Test Case 10: All unique
        String unique = "abcdefg";
        String uniqueResult = solution.reorganizeString(unique);
        System.out.println("All unique: " + uniqueResult);
        System.out.println("Valid: " + solution.validateReorganization(unique, uniqueResult));

        // Test Case 11: Backtracking (small input only)
        String small = "aab";
        List<String> allResults = solution.getAllReorganizations(small);
        System.out.println("All possible reorganizations of 'aab': " + allResults);

        // Test Case 12: Frequency map approach
        String freqResult = solution.reorganizeStringFrequencyMap("aabbcc");
        System.out.println("Frequency map (aabbcc): " + freqResult);
        System.out.println("Valid: " + solution.validateReorganization("aabbcc", freqResult));
    }
}