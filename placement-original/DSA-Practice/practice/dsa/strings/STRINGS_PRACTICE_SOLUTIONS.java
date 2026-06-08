package practice.dsa.strings;

/**
 * STRINGS PRACTICE SOLUTIONS
 * Complete collection of string problems with solutions
 * Difficulty: Easy → Medium → Hard
 */
public class STRINGS_PRACTICE_SOLUTIONS {

    // ==========================================
    // EASY LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 1: Reverse String
     * Time: O(n), Space: O(1)
     */
    public static void reverseString(char[] s) {
        int left = 0, right = s.length - 1;
        while (left < right) {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
    }

    /**
     * Problem 2: Valid Palindrome
     * Time: O(n), Space: O(1)
     */
    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
                left++;
            }
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
                right--;
            }
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    /**
     * Problem 3: Valid Anagram
     * Time: O(n), Space: O(1) - assuming ASCII
     */
    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;

        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }
        for (char c : t.toCharArray()) {
            count[c - 'a']--;
        }
        for (int i : count) {
            if (i != 0) return false;
        }
        return true;
    }

    /**
     * Problem 4: First Unique Character
     * Time: O(n), Space: O(1) - assuming ASCII
     */
    public static int firstUniqChar(String s) {
        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }
        for (int i = 0; i < s.length(); i++) {
            if (count[s.charAt(i) - 'a'] == 1) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Problem 5: Reverse Words in String
     * Time: O(n), Space: O(n)
     */
    public static String reverseWords(String s) {
        String[] words = s.trim().split("\\s+");
        StringBuilder result = new StringBuilder();

        for (int i = words.length - 1; i >= 0; i--) {
            result.append(words[i]);
            if (i > 0) result.append(" ");
        }
        return result.toString();
    }

    /**
     * Problem 6: Longest Common Prefix
     * Time: O(m*n), Space: O(1)
     */
    public static String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";

        String prefix = strs[0];
        for (int i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) != 0) {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix.isEmpty()) return "";
            }
        }
        return prefix;
    }

    // ==========================================
    // MEDIUM LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 7: Longest Substring Without Repeating Characters
     * Time: O(n), Space: O(min(m,n))
     */
    public static int lengthOfLongestSubstring(String s) {
        java.util.Set<Character> set = new java.util.HashSet<>();
        int left = 0, maxLength = 0;

        for (int right = 0; right < s.length(); right++) {
            while (set.contains(s.charAt(right))) {
                set.remove(s.charAt(left));
                left++;
            }
            set.add(s.charAt(right));
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }

    /**
     * Problem 8: Group Anagrams
     * Time: O(n*k log k), Space: O(n*k)
     */
    public static java.util.List<java.util.List<String>> groupAnagrams(String[] strs) {
        java.util.Map<String, java.util.List<String>> map = new java.util.HashMap<>();

        for (String str : strs) {
            char[] chars = str.toCharArray();
            java.util.Arrays.sort(chars);
            String key = new String(chars);
            map.computeIfAbsent(key, k -> new java.util.ArrayList<>()).add(str);
        }

        return new java.util.ArrayList<>(map.values());
    }

    /**
     * Problem 9: String to Integer (atoi)
     * Time: O(n), Space: O(1)
     */
    public static int myAtoi(String s) {
        if (s == null || s.length() == 0) return 0;

        int i = 0, sign = 1, result = 0;
        int n = s.length();

        // Skip whitespaces
        while (i < n && s.charAt(i) == ' ') i++;

        // Check sign
        if (i < n && (s.charAt(i) == '+' || s.charAt(i) == '-')) {
            sign = (s.charAt(i) == '-') ? -1 : 1;
            i++;
        }

        // Convert digits
        while (i < n && Character.isDigit(s.charAt(i))) {
            int digit = s.charAt(i) - '0';

            // Check overflow
            if (result > Integer.MAX_VALUE / 10 ||
                (result == Integer.MAX_VALUE / 10 && digit > Integer.MAX_VALUE % 10)) {
                return (sign == 1) ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }

            result = result * 10 + digit;
            i++;
        }

        return result * sign;
    }

    /**
     * Problem 10: Zigzag Conversion
     * Time: O(n), Space: O(n)
     */
    public static String convert(String s, int numRows) {
        if (numRows == 1) return s;

        java.util.List<StringBuilder> rows = new java.util.ArrayList<>();
        for (int i = 0; i < Math.min(numRows, s.length()); i++) {
            rows.add(new StringBuilder());
        }

        int currentRow = 0;
        boolean goingDown = false;

        for (char c : s.toCharArray()) {
            rows.get(currentRow).append(c);
            if (currentRow == 0 || currentRow == numRows - 1) {
                goingDown = !goingDown;
            }
            currentRow += goingDown ? 1 : -1;
        }

        StringBuilder result = new StringBuilder();
        for (StringBuilder row : rows) {
            result.append(row);
        }
        return result.toString();
    }

    // ==========================================
    // HARD LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 11: Minimum Window Substring
     * Time: O(n + m), Space: O(m)
     */
    public static String minWindow(String s, String t) {
        if (s.length() == 0 || t.length() == 0) return "";

        java.util.Map<Character, Integer> dictT = new java.util.HashMap<>();
        for (char c : t.toCharArray()) {
            dictT.put(c, dictT.getOrDefault(c, 0) + 1);
        }

        int required = dictT.size();
        int formed = 0;
        java.util.Map<Character, Integer> windowCounts = new java.util.HashMap<>();
        int left = 0, right = 0;
        int minLen = Integer.MAX_VALUE;
        int minLeft = 0;

        while (right < s.length()) {
            char c = s.charAt(right);
            windowCounts.put(c, windowCounts.getOrDefault(c, 0) + 1);

            if (dictT.containsKey(c) && windowCounts.get(c).intValue() == dictT.get(c).intValue()) {
                formed++;
            }

            while (left <= right && formed == required) {
                c = s.charAt(left);

                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minLeft = left;
                }

                windowCounts.put(c, windowCounts.get(c) - 1);
                if (dictT.containsKey(c) && windowCounts.get(c).intValue() < dictT.get(c).intValue()) {
                    formed--;
                }
                left++;
            }
            right++;
        }

        return minLen == Integer.MAX_VALUE ? "" : s.substring(minLeft, minLeft + minLen);
    }

    /**
     * Problem 12: Edit Distance
     * Time: O(m*n), Space: O(m*n)
     */
    public static int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];

        // Initialize base cases
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j - 1], // replace
                              Math.min(dp[i - 1][j],      // delete
                                       dp[i][j - 1])) + 1; // insert
                }
            }
        }
        return dp[m][n];
    }

    /**
     * Problem 13: Regular Expression Matching
     * Time: O(m*n), Space: O(m*n)
     */
    public static boolean isMatch(String s, String p) {
        int m = s.length(), n = p.length();
        boolean[][] dp = new boolean[m + 1][n + 1];
        dp[0][0] = true;

        // Handle patterns like a*, a*b*, etc.
        for (int j = 1; j <= n; j++) {
            if (p.charAt(j - 1) == '*') {
                dp[0][j] = dp[0][j - 2];
            }
        }

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j - 1) == '.' || p.charAt(j - 1) == s.charAt(i - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else if (p.charAt(j - 1) == '*') {
                    dp[i][j] = dp[i][j - 2]; // Zero occurrence
                    if (p.charAt(j - 2) == '.' || p.charAt(j - 2) == s.charAt(i - 1)) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j]; // One or more occurrence
                    }
                }
            }
        }
        return dp[m][n];
    }

    /**
     * Problem 14: Word Break
     * Time: O(n²), Space: O(n)
     */
    public static boolean wordBreak(String s, java.util.List<String> wordDict) {
        java.util.Set<String> wordSet = new java.util.HashSet<>(wordDict);
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

    // ==========================================
    // UTILITY METHODS
    // ==========================================

    public static void printStringArray(String[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print("\"" + arr[i] + "\"");
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }

    // ==========================================
    // TEST METHODS
    // ==========================================

    public static void main(String[] args) {
        System.out.println("=== STRINGS PRACTICE SOLUTIONS ===\n");

        // Test Reverse String
        System.out.println("1. Reverse String");
        char[] s1 = {'h', 'e', 'l', 'l', 'o'};
        System.out.print("Original: ");
        System.out.println(s1);
        reverseString(s1);
        System.out.print("Reversed: ");
        System.out.println(s1);
        System.out.println();

        // Test Valid Palindrome
        System.out.println("2. Valid Palindrome");
        String s2 = "A man, a plan, a canal: Panama";
        System.out.println("Input: \"" + s2 + "\"");
        System.out.println("Is Palindrome: " + isPalindrome(s2));
        System.out.println();

        // Test Valid Anagram
        System.out.println("3. Valid Anagram");
        String s3a = "anagram", s3b = "nagaram";
        System.out.println("Input: \"" + s3a + "\", \"" + s3b + "\"");
        System.out.println("Is Anagram: " + isAnagram(s3a, s3b));
        System.out.println();

        // Test Longest Substring Without Repeating Characters
        System.out.println("4. Longest Substring Without Repeating Characters");
        String s4 = "abcabcbb";
        System.out.println("Input: \"" + s4 + "\"");
        System.out.println("Length: " + lengthOfLongestSubstring(s4));
        System.out.println();

        // Test Group Anagrams
        System.out.println("5. Group Anagrams");
        String[] strs5 = {"eat", "tea", "tan", "ate", "nat", "bat"};
        System.out.print("Input: ");
        printStringArray(strs5);
        java.util.List<java.util.List<String>> result5 = groupAnagrams(strs5);
        System.out.println("Grouped: " + result5);
        System.out.println();

        // Test Minimum Window Substring
        System.out.println("6. Minimum Window Substring");
        String s6 = "ADOBECODEBANC", t6 = "ABC";
        System.out.println("Input: \"" + s6 + "\", \"" + t6 + "\"");
        System.out.println("Min Window: \"" + minWindow(s6, t6) + "\"");
        System.out.println();

        // Test Edit Distance
        System.out.println("7. Edit Distance");
        String word1 = "horse", word2 = "ros";
        System.out.println("Input: \"" + word1 + "\", \"" + word2 + "\"");
        System.out.println("Edit Distance: " + minDistance(word1, word2));
        System.out.println();

        // Test Word Break
        System.out.println("8. Word Break");
        String s8 = "leetcode";
        java.util.List<String> wordDict8 = java.util.Arrays.asList("leet", "code");
        System.out.println("Input: \"" + s8 + "\", " + wordDict8);
        System.out.println("Can Break: " + wordBreak(s8, wordDict8));
    }
}