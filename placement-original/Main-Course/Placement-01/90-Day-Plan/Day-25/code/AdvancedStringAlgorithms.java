/**
 * DAY 25 - ADVANCED STRING ALGORITHMS - COMPLETE GUIDE
 * 
 * Topics Covered:
 * 1. KMP (Knuth-Morris-Pratt) Pattern Matching
 * 2. Z-Algorithm
 * 3. Rabin-Karp Algorithm
 * 4. Manacher's Algorithm (Longest Palindromic Substring)
 * 5. Aho-Corasick Algorithm (Multiple Pattern Matching)
 * 6. Suffix Automaton
 * 7. String Hashing (Polynomial Rolling Hash)
 * 8. Longest Common Substring
 * 9. Edit Distance (Levenshtein Distance)
 * 10. String Pattern Matching Variants
 * 
 * Production-ready implementations for competitive programming
 */

import java.util.*;

public class AdvancedStringAlgorithms {

    // ============================================================================
    // 1. KMP (KNUTH-MORRIS-PRATT) PATTERN MATCHING
    // ============================================================================

    /**
     * KMP Pattern Matching Algorithm
     * Time: O(n + m) where n = text length, m = pattern length
     */
    static class KMP {
        
        public static int[] computeLPS(String pattern) {
            int m = pattern.length();
            int[] lps = new int[m];
            int len = 0;
            int i = 1;

            while (i < m) {
                if (pattern.charAt(i) == pattern.charAt(len)) {
                    len++;
                    lps[i] = len;
                    i++;
                } else {
                    if (len != 0) {
                        len = lps[len - 1];
                    } else {
                        lps[i] = 0;
                        i++;
                    }
                }
            }

            return lps;
        }

        public static List<Integer> search(String text, String pattern) {
            List<Integer> occurrences = new ArrayList<>();
            int n = text.length();
            int m = pattern.length();

            if (m == 0 || m > n) return occurrences;

            int[] lps = computeLPS(pattern);
            int i = 0; // index for text
            int j = 0; // index for pattern

            while (i < n) {
                if (text.charAt(i) == pattern.charAt(j)) {
                    i++;
                    j++;
                }

                if (j == m) {
                    occurrences.add(i - j);
                    j = lps[j - 1];
                } else if (i < n && text.charAt(i) != pattern.charAt(j)) {
                    if (j != 0) {
                        j = lps[j - 1];
                    } else {
                        i++;
                    }
                }
            }

            return occurrences;
        }

        // Find all distinct borders of a string
        public static List<Integer> findAllBorders(String s) {
            int[] lps = computeLPS(s);
            List<Integer> borders = new ArrayList<>();
            int len = lps[s.length() - 1];

            while (len > 0) {
                borders.add(len);
                len = lps[len - 1];
            }

            Collections.reverse(borders);
            return borders;
        }
    }

    // ============================================================================
    // 2. Z-ALGORITHM
    // ============================================================================

    /**
     * Z-Algorithm for Pattern Matching
     * Time: O(n + m)
     */
    static class ZAlgorithm {
        
        public static int[] computeZ(String s) {
            int n = s.length();
            int[] z = new int[n];
            int l = 0, r = 0;

            for (int i = 1; i < n; i++) {
                if (i > r) {
                    l = r = i;
                    while (r < n && s.charAt(r - l) == s.charAt(r)) {
                        r++;
                    }
                    z[i] = r - l;
                    r--;
                } else {
                    int k = i - l;
                    if (z[k] < r - i + 1) {
                        z[i] = z[k];
                    } else {
                        l = i;
                        while (r < n && s.charAt(r - l) == s.charAt(r)) {
                            r++;
                        }
                        z[i] = r - l;
                        r--;
                    }
                }
            }

            return z;
        }

        public static List<Integer> search(String text, String pattern) {
            String combined = pattern + "$" + text;
            int[] z = computeZ(combined);
            List<Integer> occurrences = new ArrayList<>();

            for (int i = pattern.length() + 1; i < combined.length(); i++) {
                if (z[i] == pattern.length()) {
                    occurrences.add(i - pattern.length() - 1);
                }
            }

            return occurrences;
        }

        // Find longest common prefix between two strings
        public static int longestCommonPrefix(String s1, String s2) {
            String combined = s1 + "$" + s2;
            int[] z = computeZ(combined);
            int maxLCP = 0;

            for (int i = s1.length() + 1; i < combined.length(); i++) {
                maxLCP = Math.max(maxLCP, z[i]);
            }

            return maxLCP;
        }
    }

    // ============================================================================
    // 3. RABIN-KARP ALGORITHM
    // ============================================================================

    /**
     * Rabin-Karp Pattern Matching with Rolling Hash
     * Time: O(n + m) average, O(n*m) worst case
     */
    static class RabinKarp {
        private static final long MOD = 1_000_000_007;
        private static final long BASE = 31;

        public static List<Integer> search(String text, String pattern) {
            List<Integer> occurrences = new ArrayList<>();
            int n = text.length();
            int m = pattern.length();

            if (m > n) return occurrences;

            long patternHash = hash(pattern);
            long textHash = hash(text.substring(0, m));
            long pow = 1;

            for (int i = 0; i < m - 1; i++) {
                pow = (pow * BASE) % MOD;
            }

            for (int i = 0; i <= n - m; i++) {
                if (patternHash == textHash) {
                    if (text.substring(i, i + m).equals(pattern)) {
                        occurrences.add(i);
                    }
                }

                if (i < n - m) {
                    textHash = (textHash - (text.charAt(i) * pow) % MOD + MOD) % MOD;
                    textHash = (textHash * BASE + text.charAt(i + m)) % MOD;
                }
            }

            return occurrences;
        }

        private static long hash(String s) {
            long h = 0;
            for (char c : s.toCharArray()) {
                h = (h * BASE + c) % MOD;
            }
            return h;
        }

        // Multiple pattern matching
        public static Map<String, List<Integer>> multiSearch(String text, List<String> patterns) {
            Map<String, List<Integer>> result = new HashMap<>();

            for (String pattern : patterns) {
                result.put(pattern, search(text, pattern));
            }

            return result;
        }
    }

    // ============================================================================
    // 4. MANACHER'S ALGORITHM (LONGEST PALINDROMIC SUBSTRING)
    // ============================================================================

    /**
     * Manacher's Algorithm for Longest Palindromic Substring
     * Time: O(n)
     */
    static class Manacher {
        
        public static String longestPalindrome(String s) {
            if (s == null || s.length() == 0) return "";

            // Preprocess string
            String processed = preprocess(s);
            int n = processed.length();
            int[] p = new int[n];
            int center = 0, right = 0;

            for (int i = 0; i < n; i++) {
                int mirror = 2 * center - i;

                if (i < right) {
                    p[i] = Math.min(right - i, p[mirror]);
                }

                // Expand around center
                int a = i + (1 + p[i]);
                int b = i - (1 + p[i]);
                while (a < n && b >= 0 && processed.charAt(a) == processed.charAt(b)) {
                    p[i]++;
                    a++;
                    b--;
                }

                // Update center and right
                if (i + p[i] > right) {
                    center = i;
                    right = i + p[i];
                }
            }

            // Find longest palindrome
            int maxLen = 0;
            int centerIndex = 0;
            for (int i = 0; i < n; i++) {
                if (p[i] > maxLen) {
                    maxLen = p[i];
                    centerIndex = i;
                }
            }

            int start = (centerIndex - maxLen) / 2;
            return s.substring(start, start + maxLen);
        }

        private static String preprocess(String s) {
            StringBuilder sb = new StringBuilder("^");
            for (char c : s.toCharArray()) {
                sb.append("#").append(c);
            }
            sb.append("#$");
            return sb.toString();
        }

        // Count all palindromic substrings
        public static int countPalindromicSubstrings(String s) {
            String processed = preprocess(s);
            int n = processed.length();
            int[] p = new int[n];
            int center = 0, right = 0;
            int count = 0;

            for (int i = 0; i < n; i++) {
                int mirror = 2 * center - i;

                if (i < right) {
                    p[i] = Math.min(right - i, p[mirror]);
                }

                int a = i + (1 + p[i]);
                int b = i - (1 + p[i]);
                while (a < n && b >= 0 && processed.charAt(a) == processed.charAt(b)) {
                    p[i]++;
                    a++;
                    b--;
                }

                if (i + p[i] > right) {
                    center = i;
                    right = i + p[i];
                }

                count += (p[i] + 1) / 2;
            }

            return count;
        }
    }

    // ============================================================================
    // 5. AHO-CORASICK ALGORITHM (MULTIPLE PATTERN MATCHING)
    // ============================================================================

    /**
     * Aho-Corasick Algorithm for Multiple Pattern Matching
     * Time: O(n + m + z) where z = number of matches
     */
    static class AhoCorasick {
        static class Node {
            Map<Character, Node> children = new HashMap<>();
            Node failure;
            List<String> output = new ArrayList<>();
        }

        private Node root;

        public AhoCorasick(List<String> patterns) {
            root = new Node();
            buildTrie(patterns);
            buildFailureLinks();
        }

        private void buildTrie(List<String> patterns) {
            for (String pattern : patterns) {
                Node current = root;
                for (char c : pattern.toCharArray()) {
                    current = current.children.computeIfAbsent(c, k -> new Node());
                }
                current.output.add(pattern);
            }
        }

        private void buildFailureLinks() {
            Queue<Node> queue = new LinkedList<>();
            root.failure = root;

            for (Node child : root.children.values()) {
                child.failure = root;
                queue.offer(child);
            }

            while (!queue.isEmpty()) {
                Node current = queue.poll();

                for (Map.Entry<Character, Node> entry : current.children.entrySet()) {
                    char c = entry.getKey();
                    Node child = entry.getValue();

                    Node failure = current.failure;
                    while (failure != root && !failure.children.containsKey(c)) {
                        failure = failure.failure;
                    }

                    child.failure = failure.children.getOrDefault(c, root);
                    child.output.addAll(child.failure.output);
                    queue.offer(child);
                }
            }
        }

        public Map<String, List<Integer>> search(String text) {
            Map<String, List<Integer>> result = new HashMap<>();
            Node current = root;

            for (int i = 0; i < text.length(); i++) {
                char c = text.charAt(i);

                while (current != root && !current.children.containsKey(c)) {
                    current = current.failure;
                }

                current = current.children.getOrDefault(c, root);

                for (String pattern : current.output) {
                    result.computeIfAbsent(pattern, k -> new ArrayList<>())
                          .add(i - pattern.length() + 1);
                }
            }

            return result;
        }
    }

    // ============================================================================
    // 6. POLYNOMIAL ROLLING HASH
    // ============================================================================

    /**
     * Polynomial Rolling Hash for String Comparison
     */
    static class PolynomialHash {
        private static final long MOD = 1_000_000_007;
        private static final long BASE = 31;

        private long[] hash;
        private long[] pow;

        public PolynomialHash(String s) {
            int n = s.length();
            hash = new long[n + 1];
            pow = new long[n + 1];
            pow[0] = 1;

            for (int i = 0; i < n; i++) {
                hash[i + 1] = (hash[i] * BASE + s.charAt(i)) % MOD;
                pow[i + 1] = (pow[i] * BASE) % MOD;
            }
        }

        // Get hash of substring [l, r)
        public long getHash(int l, int r) {
            long result = (hash[r] - hash[l] * pow[r - l]) % MOD;
            return (result + MOD) % MOD;
        }

        // Check if two substrings are equal
        public boolean areEqual(int l1, int r1, int l2, int r2) {
            return getHash(l1, r1) == getHash(l2, r2);
        }
    }

    // ============================================================================
    // 7. LONGEST COMMON SUBSTRING
    // ============================================================================

    /**
     * Longest Common Substring using Dynamic Programming
     * Time: O(n * m)
     */
    static class LongestCommonSubstring {
        
        public static String find(String s1, String s2) {
            int n = s1.length();
            int m = s2.length();
            int[][] dp = new int[n + 1][m + 1];
            int maxLen = 0;
            int endIndex = 0;

            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= m; j++) {
                    if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                        dp[i][j] = dp[i - 1][j - 1] + 1;
                        if (dp[i][j] > maxLen) {
                            maxLen = dp[i][j];
                            endIndex = i;
                        }
                    }
                }
            }

            return s1.substring(endIndex - maxLen, endIndex);
        }

        // Find all common substrings of length >= k
        public static List<String> findAll(String s1, String s2, int k) {
            Set<String> result = new HashSet<>();
            int n = s1.length();
            int m = s2.length();
            int[][] dp = new int[n + 1][m + 1];

            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= m; j++) {
                    if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                        dp[i][j] = dp[i - 1][j - 1] + 1;
                        if (dp[i][j] >= k) {
                            result.add(s1.substring(i - dp[i][j], i));
                        }
                    }
                }
            }

            return new ArrayList<>(result);
        }
    }

    // ============================================================================
    // 8. EDIT DISTANCE (LEVENSHTEIN DISTANCE)
    // ============================================================================

    /**
     * Edit Distance with all operations
     * Time: O(n * m)
     */
    static class EditDistance {
        
        public static int minDistance(String s1, String s2) {
            int n = s1.length();
            int m = s2.length();
            int[][] dp = new int[n + 1][m + 1];

            for (int i = 0; i <= n; i++) dp[i][0] = i;
            for (int j = 0; j <= m; j++) dp[0][j] = j;

            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= m; j++) {
                    if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                        dp[i][j] = dp[i - 1][j - 1];
                    } else {
                        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1],
                                     Math.min(dp[i - 1][j], dp[i][j - 1]));
                    }
                }
            }

            return dp[n][m];
        }

        // Get the actual edit operations
        public static List<String> getOperations(String s1, String s2) {
            int n = s1.length();
            int m = s2.length();
            int[][] dp = new int[n + 1][m + 1];

            for (int i = 0; i <= n; i++) dp[i][0] = i;
            for (int j = 0; j <= m; j++) dp[0][j] = j;

            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= m; j++) {
                    if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                        dp[i][j] = dp[i - 1][j - 1];
                    } else {
                        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1],
                                     Math.min(dp[i - 1][j], dp[i][j - 1]));
                    }
                }
            }

            List<String> operations = new ArrayList<>();
            int i = n, j = m;

            while (i > 0 || j > 0) {
                if (i == 0) {
                    operations.add("Insert '" + s2.charAt(j - 1) + "'");
                    j--;
                } else if (j == 0) {
                    operations.add("Delete '" + s1.charAt(i - 1) + "'");
                    i--;
                } else if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    i--;
                    j--;
                } else {
                    int replace = dp[i - 1][j - 1];
                    int delete = dp[i - 1][j];
                    int insert = dp[i][j - 1];

                    if (replace <= delete && replace <= insert) {
                        operations.add("Replace '" + s1.charAt(i - 1) + "' with '" + s2.charAt(j - 1) + "'");
                        i--;
                        j--;
                    } else if (delete <= insert) {
                        operations.add("Delete '" + s1.charAt(i - 1) + "'");
                        i--;
                    } else {
                        operations.add("Insert '" + s2.charAt(j - 1) + "'");
                        j--;
                    }
                }
            }

            Collections.reverse(operations);
            return operations;
        }
    }

    // ============================================================================
    // 9. ADVANCED STRING MATCHING PROBLEMS
    // ============================================================================

    static class AdvancedProblems {
        
        // Wildcard pattern matching with * and ?
        public static boolean wildcardMatch(String text, String pattern) {
            int n = text.length();
            int m = pattern.length();
            boolean[][] dp = new boolean[n + 1][m + 1];
            dp[0][0] = true;

            for (int j = 1; j <= m; j++) {
                if (pattern.charAt(j - 1) == '*') {
                    dp[0][j] = dp[0][j - 1];
                }
            }

            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= m; j++) {
                    if (pattern.charAt(j - 1) == '*') {
                        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
                    } else if (pattern.charAt(j - 1) == '?' || 
                               text.charAt(i - 1) == pattern.charAt(j - 1)) {
                        dp[i][j] = dp[i - 1][j - 1];
                    }
                }
            }

            return dp[n][m];
        }

        // Regular expression matching with . and *
        public static boolean regexMatch(String text, String pattern) {
            int n = text.length();
            int m = pattern.length();
            boolean[][] dp = new boolean[n + 1][m + 1];
            dp[0][0] = true;

            for (int j = 2; j <= m; j++) {
                if (pattern.charAt(j - 1) == '*') {
                    dp[0][j] = dp[0][j - 2];
                }
            }

            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= m; j++) {
                    char pChar = pattern.charAt(j - 1);
                    char tChar = text.charAt(i - 1);

                    if (pChar == '*') {
                        dp[i][j] = dp[i][j - 2];
                        if (pattern.charAt(j - 2) == '.' || pattern.charAt(j - 2) == tChar) {
                            dp[i][j] = dp[i][j] || dp[i - 1][j];
                        }
                    } else if (pChar == '.' || pChar == tChar) {
                        dp[i][j] = dp[i - 1][j - 1];
                    }
                }
            }

            return dp[n][m];
        }

        // Find shortest palindrome by adding characters at beginning
        public static String shortestPalindrome(String s) {
            String rev = new StringBuilder(s).reverse().toString();
            String combined = s + "#" + rev;
            int[] lps = KMP.computeLPS(combined);
            
            int palindromeLen = lps[combined.length() - 1];
            String toAdd = rev.substring(0, s.length() - palindromeLen);
            
            return toAdd + s;
        }
    }

    // ============================================================================
    // DEMONSTRATION AND TESTING
    // ============================================================================

    public static void main(String[] args) {
        System.out.println("=== DAY 25: ADVANCED STRING ALGORITHMS ===\n");

        testKMP();
        testZAlgorithm();
        testRabinKarp();
        testManacher();
        testAhoCorasick();
        testEditDistance();
        testAdvancedProblems();
    }

    private static void testKMP() {
        System.out.println("--- KMP Pattern Matching Demo ---");
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";
        
        List<Integer> matches = KMP.search(text, pattern);
        System.out.println("Text: " + text);
        System.out.println("Pattern: " + pattern);
        System.out.println("Matches at indices: " + matches);
        System.out.println("Borders: " + KMP.findAllBorders(pattern));
    }

    private static void testZAlgorithm() {
        System.out.println("\n--- Z-Algorithm Demo ---");
        String text = "aabcaabxaaz";
        String pattern = "aab";
        
        List<Integer> matches = ZAlgorithm.search(text, pattern);
        System.out.println("Matches: " + matches);
        System.out.println("LCP of 'abcde' and 'abxyz': " + 
                          ZAlgorithm.longestCommonPrefix("abcde", "abxyz"));
    }

    private static void testRabinKarp() {
        System.out.println("\n--- Rabin-Karp Demo ---");
        String text = "THIS IS A TEST TEXT";
        List<String> patterns = Arrays.asList("TEST", "TEXT", "IS");
        
        Map<String, List<Integer>> result = RabinKarp.multiSearch(text, patterns);
        for (Map.Entry<String, List<Integer>> entry : result.entrySet()) {
            System.out.println(entry.getKey() + " found at: " + entry.getValue());
        }
    }

    private static void testManacher() {
        System.out.println("\n--- Manacher's Algorithm Demo ---");
        String s = "babad";
        System.out.println("String: " + s);
        System.out.println("Longest palindrome: " + Manacher.longestPalindrome(s));
        System.out.println("Palindromic substrings count: " + 
                          Manacher.countPalindromicSubstrings(s));
    }

    private static void testAhoCorasick() {
        System.out.println("\n--- Aho-Corasick Demo ---");
        List<String> patterns = Arrays.asList("he", "she", "his", "hers");
        AhoCorasick ac = new AhoCorasick(patterns);
        
        String text = "ahishers";
        Map<String, List<Integer>> matches = ac.search(text);
        
        System.out.println("Text: " + text);
        for (Map.Entry<String, List<Integer>> entry : matches.entrySet()) {
            System.out.println("'" + entry.getKey() + "' found at: " + entry.getValue());
        }
    }

    private static void testEditDistance() {
        System.out.println("\n--- Edit Distance Demo ---");
        String s1 = "sunday";
        String s2 = "saturday";
        
        System.out.println("String 1: " + s1);
        System.out.println("String 2: " + s2);
        System.out.println("Edit distance: " + EditDistance.minDistance(s1, s2));
        System.out.println("Operations: " + EditDistance.getOperations(s1, s2));
    }

    private static void testAdvancedProblems() {
        System.out.println("\n--- Advanced Problems Demo ---");
        System.out.println("Wildcard 'a*b?c' matches 'aabbc': " + 
                          AdvancedProblems.wildcardMatch("aabbc", "a*b?c"));
        System.out.println("Regex 'a.*b.c' matches 'aabbbc': " + 
                          AdvancedProblems.regexMatch("aabbbc", "a.*b.c"));
        System.out.println("Shortest palindrome from 'aacecaaa': " + 
                          AdvancedProblems.shortestPalindrome("aacecaaa"));
    }
}
