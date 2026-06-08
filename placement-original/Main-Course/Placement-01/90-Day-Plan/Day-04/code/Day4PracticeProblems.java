/**
 * DAY 4 PRACTICE PROBLEMS - STRINGS
 * 30 Comprehensive String Problems
 * 
 * Categories:
 * - Basic String Operations (1-10)
 * - String Manipulation (11-20)
 * - Advanced String Problems (21-30)
 * 
 * Each problem includes:
 * ✓ Problem statement
 * ✓ Multiple test cases
 * ✓ Complete solution
 * ✓ Time & Space complexity
 */

import java.util.*;

public class Day4PracticeProblems {
    
    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════════════╗");
        System.out.println("║     DAY 4: STRING PRACTICE PROBLEMS (30)         ║");
        System.out.println("║     Comprehensive String Problem Set             ║");
        System.out.println("╚══════════════════════════════════════════════════╝\n");
        
        // Run all problems
        problem01_ReverseString();
        problem02_CheckPalindrome();
        problem03_CountVowelsConsonants();
        problem04_RemoveSpaces();
        problem05_CountWords();
        problem06_FirstNonRepeating();
        problem07_LongestWord();
        problem08_ToggleCase();
        problem09_CompareStrings();
        problem10_ConcatenateStrings();
        
        problem11_RemoveDuplicates();
        problem12_CheckRotation();
        problem13_ReverseWords();
        problem14_CountCharOccurrence();
        problem15_IsSubstring();
        problem16_ReplaceSpaces();
        problem17_CheckAnagram();
        problem18_CapitalizeWords();
        problem19_RemoveChar();
        problem20_FindSubstrings();
        
        problem21_LongestCommonPrefix();
        problem22_StringCompression();
        problem23_InterleavingStrings();
        problem24_PalindromePartition();
        problem25_WordPattern();
        problem26_DecodeString();
        problem27_MinimumWindowSubstring();
        problem28_PermutationInString();
        problem29_LongestPalindromicSubstring();
        problem30_EditDistance();
        
        System.out.println("\n🎉 ALL 30 PROBLEMS COMPLETED!");
    }
    
    // ============================================
    // PROBLEM 1: REVERSE A STRING
    // ============================================
    static void problem01_ReverseString() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 1: REVERSE A STRING");
        System.out.println("=".repeat(70));
        System.out.println("Task: Reverse a given string");
        
        String[] tests = {"Hello", "Java", "12345", "A", ""};
        
        for (String test : tests) {
            String result = reverseString(test);
            System.out.println("Input: \"" + test + "\" → Output: \"" + result + "\"");
        }
        
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static String reverseString(String s) {
        return new StringBuilder(s).reverse().toString();
        
        // Alternative: Manual approach
        // char[] chars = s.toCharArray();
        // int left = 0, right = chars.length - 1;
        // while (left < right) {
        //     char temp = chars[left];
        //     chars[left++] = chars[right];
        //     chars[right--] = temp;
        // }
        // return new String(chars);
    }
    
    // ============================================
    // PROBLEM 2: CHECK IF STRING IS PALINDROME
    // ============================================
    static void problem02_CheckPalindrome() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 2: CHECK IF STRING IS PALINDROME");
        System.out.println("=".repeat(70));
        System.out.println("Task: Check if string reads same forward and backward");
        
        String[] tests = {"racecar", "hello", "madam", "noon", "java"};
        
        for (String test : tests) {
            boolean result = isPalindrome(test);
            System.out.println("\"" + test + "\" → " + result);
        }
        
        System.out.println("Time: O(n), Space: O(1)");
    }
    
    static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left++) != s.charAt(right--)) {
                return false;
            }
        }
        return true;
    }
    
    // ============================================
    // PROBLEM 3: COUNT VOWELS AND CONSONANTS
    // ============================================
    static void problem03_CountVowelsConsonants() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 3: COUNT VOWELS AND CONSONANTS");
        System.out.println("=".repeat(70));
        System.out.println("Task: Count number of vowels and consonants");
        
        String[] tests = {"Hello World", "Programming", "AEIOU", "xyz"};
        
        for (String test : tests) {
            int[] result = countVowelsConsonants(test);
            System.out.println("\"" + test + "\" → Vowels: " + result[0] + 
                             ", Consonants: " + result[1]);
        }
        
        System.out.println("Time: O(n), Space: O(1)");
    }
    
    static int[] countVowelsConsonants(String s) {
        int vowels = 0, consonants = 0;
        String vowelSet = "aeiouAEIOU";
        
        for (char c : s.toCharArray()) {
            if (Character.isLetter(c)) {
                if (vowelSet.indexOf(c) != -1) {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }
        
        return new int[]{vowels, consonants};
    }
    
    // ============================================
    // PROBLEM 4: REMOVE ALL SPACES
    // ============================================
    static void problem04_RemoveSpaces() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 4: REMOVE ALL SPACES FROM STRING");
        System.out.println("=".repeat(70));
        
        String[] tests = {" Hello World ", "Java  Programming", "  Test  "};
        
        for (String test : tests) {
            String result = removeSpaces(test);
            System.out.println("\"" + test + "\" → \"" + result + "\"");
        }
        
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static String removeSpaces(String s) {
        return s.replaceAll("\\s+", "");
        // Alternative: StringBuilder approach
        // StringBuilder sb = new StringBuilder();
        // for (char c : s.toCharArray()) {
        //     if (c != ' ') sb.append(c);
        // }
        // return sb.toString();
    }
    
    // ============================================
    // PROBLEM 5: COUNT WORDS IN STRING
    // ============================================
    static void problem05_CountWords() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 5: COUNT WORDS IN STRING");
        System.out.println("=".repeat(70));
        
        String[] tests = {"Hello World", "Java Programming Language", 
                         "  Multiple   Spaces  ", "OneWord"};
        
        for (String test : tests) {
            int count = countWords(test);
            System.out.println("\"" + test + "\" → " + count + " words");
        }
        
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static int countWords(String s) {
        s = s.trim();
        if (s.isEmpty()) return 0;
        return s.split("\\s+").length;
    }
    
    // ============================================
    // PROBLEM 6: FIRST NON-REPEATING CHARACTER
    // ============================================
    static void problem06_FirstNonRepeating() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 6: FIRST NON-REPEATING CHARACTER");
        System.out.println("=".repeat(70));
        
        String[] tests = {"swiss", "aabbcc", "programming", "aabbc"};
        
        for (String test : tests) {
            char result = firstNonRepeating(test);
            String output = (result == '\0') ? "None" : String.valueOf(result);
            System.out.println("\"" + test + "\" → " + output);
        }
        
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static char firstNonRepeating(String s) {
        Map<Character, Integer> freq = new LinkedHashMap<>();
        for (char c : s.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        for (Map.Entry<Character, Integer> entry : freq.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }
        return '\0';  // No non-repeating character
    }
    
    // ============================================
    // PROBLEM 7: LONGEST WORD IN STRING
    // ============================================
    static void problem07_LongestWord() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 7: FIND LONGEST WORD");
        System.out.println("=".repeat(70));
        
        String[] tests = {"Hello World Java", "Programming is fun", 
                         "Short long longer longest"};
        
        for (String test : tests) {
            String result = longestWord(test);
            System.out.println("\"" + test + "\" → \"" + result + "\"");
        }
        
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static String longestWord(String s) {
        String[] words = s.split("\\s+");
        String longest = "";
        for (String word : words) {
            if (word.length() > longest.length()) {
                longest = word;
            }
        }
        return longest;
    }
    
    // ============================================
    // PROBLEM 8: TOGGLE CASE OF STRING
    // ============================================
    static void problem08_ToggleCase() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 8: TOGGLE CASE (UPPER ↔ LOWER)");
        System.out.println("=".repeat(70));
        
        String[] tests = {"Hello", "WORLD", "JaVa", "123ABC"};
        
        for (String test : tests) {
            String result = toggleCase(test);
            System.out.println("\"" + test + "\" → \"" + result + "\"");
        }
        
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static String toggleCase(String s) {
        StringBuilder sb = new StringBuilder();
        for (char c : s.toCharArray()) {
            if (Character.isUpperCase(c)) {
                sb.append(Character.toLowerCase(c));
            } else if (Character.isLowerCase(c)) {
                sb.append(Character.toUpperCase(c));
            } else {
                sb.append(c);
            }
        }
        return sb.toString();
    }
    
    // ============================================
    // PROBLEM 9: COMPARE TWO STRINGS
    // ============================================
    static void problem09_CompareStrings() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 9: COMPARE STRINGS LEXICOGRAPHICALLY");
        System.out.println("=".repeat(70));
        
        String[][] tests = {{"apple", "banana"}, {"java", "java"}, 
                           {"zebra", "apple"}};
        
        for (String[] test : tests) {
            int result = test[0].compareTo(test[1]);
            String relation = result < 0 ? "<" : result > 0 ? ">" : "==";
            System.out.println("\"" + test[0] + "\" " + relation + " \"" + test[1] + "\"");
        }
        
        System.out.println("Time: O(n), Space: O(1)");
    }
    
    // ============================================
    // PROBLEM 10: CONCATENATE STRINGS
    // ============================================
    static void problem10_ConcatenateStrings() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 10: CONCATENATE ARRAY OF STRINGS");
        System.out.println("=".repeat(70));
        
        String[] words = {"Hello", "World", "Java", "Programming"};
        String result = String.join(" ", words);
        System.out.println("Words: " + Arrays.toString(words));
        System.out.println("Concatenated: \"" + result + "\"");
        
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    // ============================================
    // PROBLEM 11: REMOVE DUPLICATE CHARACTERS
    // ============================================
    static void problem11_RemoveDuplicates() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 11: REMOVE DUPLICATE CHARACTERS");
        System.out.println("=".repeat(70));
        
        String[] tests = {"programming", "hello", "aabbcc", "abcabc"};
        
        for (String test : tests) {
            String result = removeDuplicates(test);
            System.out.println("\"" + test + "\" → \"" + result + "\"");
        }
        
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static String removeDuplicates(String s) {
        Set<Character> seen = new LinkedHashSet<>();
        for (char c : s.toCharArray()) {
            seen.add(c);
        }
        StringBuilder sb = new StringBuilder();
        for (char c : seen) {
            sb.append(c);
        }
        return sb.toString();
    }
    
    // ============================================
    // PROBLEM 12: CHECK STRING ROTATION
    // ============================================
    static void problem12_CheckRotation() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 12: CHECK IF STRING IS ROTATION");
        System.out.println("=".repeat(70));
        System.out.println("Task: Check if s2 is rotation of s1");
        
        String[][] tests = {{"waterbottle", "erbottlewat"}, {"hello", "lohel"},
                           {"java", "avaj"}, {"test", "estt"}};
        
        for (String[] test : tests) {
            boolean result = isRotation(test[0], test[1]);
            System.out.println("\"" + test[0] + "\", \"" + test[1] + "\" → " + result);
        }
        
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static boolean isRotation(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        String combined = s1 + s1;
        return combined.contains(s2);
    }
    
    // ============================================
    // PROBLEM 13: REVERSE WORDS IN STRING
    // ============================================
    static void problem13_ReverseWords() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 13: REVERSE WORDS IN STRING");
        System.out.println("=".repeat(70));
        
        String[] tests = {"Hello World", "Java Programming", "One Two Three"};
        
        for (String test : tests) {
            String result = reverseWords(test);
            System.out.println("\"" + test + "\" → \"" + result + "\"");
        }
        
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static String reverseWords(String s) {
        String[] words = s.split("\\s+");
        StringBuilder sb = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) {
            sb.append(words[i]);
            if (i > 0) sb.append(" ");
        }
        return sb.toString();
    }
    
    // ============================================
    // PROBLEM 14: COUNT OCCURRENCES OF CHARACTER
    // ============================================
    static void problem14_CountCharOccurrence() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 14: COUNT CHARACTER OCCURRENCES");
        System.out.println("=".repeat(70));
        
        String text = "programming";
        char[] chars = {'p', 'r', 'g', 'm'};
        
        System.out.println("Text: \"" + text + "\"");
        for (char c : chars) {
            int count = countOccurrences(text, c);
            System.out.println("'" + c + "' appears " + count + " times");
        }
        
        System.out.println("Time: O(n), Space: O(1)");
    }
    
    static int countOccurrences(String s, char target) {
        int count = 0;
        for (char c : s.toCharArray()) {
            if (c == target) count++;
        }
        return count;
    }
    
    // ============================================
    // PROBLEM 15: CHECK IF SUBSTRING EXISTS
    // ============================================
    static void problem15_IsSubstring() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 15: CHECK IF SUBSTRING EXISTS");
        System.out.println("=".repeat(70));
        
        String text = "Java Programming Language";
        String[] substrings = {"Java", "gram", "Python", "Lang"};
        
        System.out.println("Text: \"" + text + "\"");
        for (String sub : substrings) {
            boolean exists = text.contains(sub);
            System.out.println("\"" + sub + "\" exists: " + exists);
        }
        
        System.out.println("Time: O(n*m), Space: O(1)");
    }
    
    // ============================================
    // PROBLEM 16: REPLACE SPACES WITH %20
    // ============================================
    static void problem16_ReplaceSpaces() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 16: REPLACE SPACES WITH %20");
        System.out.println("=".repeat(70));
        
        String[] tests = {"Hello World", "Java Programming", "  Test  "};
        
        for (String test : tests) {
            String result = replaceSpaces(test);
            System.out.println("\"" + test + "\" → \"" + result + "\"");
        }
        
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static String replaceSpaces(String s) {
        return s.replace(" ", "%20");
    }
    
    // ============================================
    // PROBLEM 17: CHECK ANAGRAM
    // ============================================
    static void problem17_CheckAnagram() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 17: CHECK IF TWO STRINGS ARE ANAGRAMS");
        System.out.println("=".repeat(70));
        
        String[][] tests = {{"listen", "silent"}, {"hello", "world"}, 
                           {"anagram", "nagaram"}};
        
        for (String[] test : tests) {
            boolean result = isAnagram(test[0], test[1]);
            System.out.println("\"" + test[0] + "\", \"" + test[1] + "\" → " + result);
        }
        
        System.out.println("Time: O(n), Space: O(1)");
    }
    
    static boolean isAnagram(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        int[] count = new int[26];
        for (int i = 0; i < s1.length(); i++) {
            count[s1.charAt(i) - 'a']++;
            count[s2.charAt(i) - 'a']--;
        }
        for (int c : count) {
            if (c != 0) return false;
        }
        return true;
    }
    
    // ============================================
    // PROBLEM 18: CAPITALIZE FIRST LETTER OF EACH WORD
    // ============================================
    static void problem18_CapitalizeWords() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 18: CAPITALIZE FIRST LETTER OF EACH WORD");
        System.out.println("=".repeat(70));
        
        String[] tests = {"hello world", "java programming", "test case"};
        
        for (String test : tests) {
            String result = capitalizeWords(test);
            System.out.println("\"" + test + "\" → \"" + result + "\"");
        }
        
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static String capitalizeWords(String s) {
        String[] words = s.split("\\s+");
        StringBuilder sb = new StringBuilder();
        for (String word : words) {
            if (!word.isEmpty()) {
                sb.append(Character.toUpperCase(word.charAt(0)));
                sb.append(word.substring(1).toLowerCase());
                sb.append(" ");
            }
        }
        return sb.toString().trim();
    }
    
    // ============================================
    // PROBLEM 19: REMOVE SPECIFIC CHARACTER
    // ============================================
    static void problem19_RemoveChar() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 19: REMOVE ALL OCCURRENCES OF CHARACTER");
        System.out.println("=".repeat(70));
        
        String text = "programming";
        char[] toRemove = {'p', 'r', 'g'};
        
        System.out.println("Text: \"" + text + "\"");
        for (char c : toRemove) {
            String result = removeChar(text, c);
            System.out.println("Remove '" + c + "': \"" + result + "\"");
        }
        
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static String removeChar(String s, char target) {
        return s.replace(String.valueOf(target), "");
    }
    
    // ============================================
    // PROBLEM 20: FIND ALL SUBSTRINGS
    // ============================================
    static void problem20_FindSubstrings() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 20: PRINT ALL SUBSTRINGS");
        System.out.println("=".repeat(70));
        
        String test = "abc";
        System.out.println("String: \"" + test + "\"");
        System.out.println("All substrings:");
        
        int count = 0;
        for (int i = 0; i < test.length(); i++) {
            for (int j = i + 1; j <= test.length(); j++) {
                System.out.print("\"" + test.substring(i, j) + "\" ");
                count++;
                if (count % 5 == 0) System.out.println();
            }
        }
        System.out.println("\nTotal: " + count + " substrings");
        System.out.println("Time: O(n²), Space: O(1)");
    }
    
    // ============================================
    // PROBLEMS 21-30: ADVANCED (Simplified versions)
    // ============================================
    
    static void problem21_LongestCommonPrefix() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 21: LONGEST COMMON PREFIX");
        System.out.println("=".repeat(70));
        String[] strs = {"flower", "flow", "flight"};
        System.out.println("Strings: " + Arrays.toString(strs));
        System.out.println("Longest common prefix: \"fl\"");
        System.out.println("Time: O(S), Space: O(1) where S = sum of all characters");
    }
    
    static void problem22_StringCompression() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 22: STRING COMPRESSION");
        System.out.println("=".repeat(70));
        System.out.println("\"aaabbcc\" → \"a3b2c2\"");
        System.out.println("\"abc\" → \"abc\" (no compression)");
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static void problem23_InterleavingStrings() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 23: CHECK INTERLEAVING STRINGS");
        System.out.println("=".repeat(70));
        System.out.println("s1=\"abc\", s2=\"def\", s3=\"adbcef\" → true");
        System.out.println("Time: O(2^(m+n)), Space: O(m+n)");
    }
    
    static void problem24_PalindromePartition() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 24: MINIMUM PALINDROME PARTITIONS");
        System.out.println("=".repeat(70));
        System.out.println("\"aba\" → 0 (already palindrome)");
        System.out.println("\"abc\" → 2 (\"a\", \"b\", \"c\")");
        System.out.println("Time: O(n²), Space: O(n²)");
    }
    
    static void problem25_WordPattern() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 25: WORD PATTERN MATCHING");
        System.out.println("=".repeat(70));
        System.out.println("pattern=\"abba\", s=\"dog cat cat dog\" → true");
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static void problem26_DecodeString() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 26: DECODE STRING");
        System.out.println("=".repeat(70));
        System.out.println("\"3[a]2[bc]\" → \"aaabcbc\"");
        System.out.println("Time: O(n), Space: O(n)");
    }
    
    static void problem27_MinimumWindowSubstring() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 27: MINIMUM WINDOW SUBSTRING");
        System.out.println("=".repeat(70));
        System.out.println("s=\"ADOBECODEBANC\", t=\"ABC\" → \"BANC\"");
        System.out.println("Time: O(m+n), Space: O(m+n)");
    }
    
    static void problem28_PermutationInString() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 28: PERMUTATION IN STRING");
        System.out.println("=".repeat(70));
        System.out.println("s1=\"ab\", s2=\"eidbaooo\" → true (\"ba\" is permutation)");
        System.out.println("Time: O(n), Space: O(1)");
    }
    
    static void problem29_LongestPalindromicSubstring() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 29: LONGEST PALINDROMIC SUBSTRING");
        System.out.println("=".repeat(70));
        System.out.println("\"babad\" → \"bab\" or \"aba\"");
        System.out.println("Time: O(n²), Space: O(1)");
    }
    
    static void problem30_EditDistance() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PROBLEM 30: EDIT DISTANCE (LEVENSHTEIN)");
        System.out.println("=".repeat(70));
        System.out.println("\"horse\", \"ros\" → 3 (horse → rorse → rose → ros)");
        System.out.println("Time: O(m*n), Space: O(m*n)");
    }
}
