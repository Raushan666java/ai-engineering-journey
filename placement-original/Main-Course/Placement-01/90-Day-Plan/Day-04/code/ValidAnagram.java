/**
 * LeetCode #242: VALID ANAGRAM - DAY 4
 * Difficulty: Easy
 * 
 * Problem:
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word
 * or phrase, typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * Constraints:
 * - 1 <= s.length, t.length <= 5 * 10^4
 * - s and t consist of lowercase English letters.
 * 
 * Follow up: What if the inputs contain Unicode characters?
 */

import java.util.*;

public class ValidAnagram {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════╗");
        System.out.println("║   LeetCode #242: VALID ANAGRAM            ║");
        System.out.println("║   Difficulty: Easy                        ║");
        System.out.println("╚═══════════════════════════════════════════╝\n");
        
        // Test cases
        String[][] testCases = {
            {"anagram", "nagaram"},     // true
            {"rat", "car"},             // false
            {"listen", "silent"},       // true
            {"hello", "world"},         // false
            {"a", "a"},                 // true
            {"ab", "ba"},               // true
            {"ab", "abc"},              // false (different lengths)
            {"", ""},                   // true (both empty)
            {"aabbcc", "abcabc"},       // true
            {"programming", "grammingpro"} // true
        };
        
        System.out.println("Testing all approaches:\n");
        
        for (String[] test : testCases) {
            System.out.println("s = \"" + test[0] + "\", t = \"" + test[1] + "\"");
            
            boolean result1 = isAnagram_Sorting(test[0], test[1]);
            boolean result2 = isAnagram_HashMap(test[0], test[1]);
            boolean result3 = isAnagram_Array(test[0], test[1]);
            boolean result4 = isAnagram_SingleArray(test[0], test[1]);
            
            System.out.println("  Sorting: " + result1);
            System.out.println("  HashMap: " + result2);
            System.out.println("  Array: " + result3);
            System.out.println("  Single Array: " + result4);
            System.out.println();
        }
        
        // Performance comparison
        performanceComparison();
    }
    
    // ============================================
    // APPROACH 1: SORTING
    // Time: O(n log n), Space: O(n)
    // ============================================
    /**
     * Sorting Approach - Simplest to understand
     * 
     * Algorithm:
     * 1. Sort both strings
     * 2. Compare if sorted strings are equal
     * 
     * Time Complexity: O(n log n) - due to sorting
     * Space Complexity: O(n) - for sorted character arrays
     */
    public static boolean isAnagram_Sorting(String s, String t) {
        // Different lengths can't be anagrams
        if (s.length() != t.length()) {
            return false;
        }
        
        // Convert to character arrays and sort
        char[] sChars = s.toCharArray();
        char[] tChars = t.toCharArray();
        
        Arrays.sort(sChars);
        Arrays.sort(tChars);
        
        // Compare sorted arrays
        return Arrays.equals(sChars, tChars);
    }
    
    // ============================================
    // APPROACH 2: HASHMAP
    // Time: O(n), Space: O(n)
    // ============================================
    /**
     * HashMap Approach - Works with Unicode
     * 
     * Algorithm:
     * 1. Count frequency of each character in both strings
     * 2. Compare frequency maps
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(n) - for HashMap
     * 
     * Best for Unicode characters!
     */
    public static boolean isAnagram_HashMap(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        
        // Count character frequencies
        Map<Character, Integer> map = new HashMap<>();
        
        // Add characters from s
        for (char c : s.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        
        // Subtract characters from t
        for (char c : t.toCharArray()) {
            if (!map.containsKey(c)) {
                return false;  // Character in t not in s
            }
            map.put(c, map.get(c) - 1);
            if (map.get(c) < 0) {
                return false;  // Too many occurrences in t
            }
        }
        
        // Check if all counts are zero
        for (int count : map.values()) {
            if (count != 0) {
                return false;
            }
        }
        
        return true;
    }
    
    // ============================================
    // APPROACH 3: ARRAY (LOWERCASE ONLY)
    // Time: O(n), Space: O(1)
    // ============================================
    /**
     * Array Approach - Most efficient for lowercase letters
     * 
     * Algorithm:
     * 1. Use array of size 26 for lowercase letters
     * 2. Increment for s, decrement for t
     * 3. Check if all counts are zero
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(1) - fixed size array (26)
     * 
     * BEST for lowercase English letters! ⭐
     */
    public static boolean isAnagram_Array(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        
        int[] count = new int[26];  // For 'a' to 'z'
        
        // Count characters
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;  // Increment for s
            count[t.charAt(i) - 'a']--;  // Decrement for t
        }
        
        // Check if all counts are zero
        for (int c : count) {
            if (c != 0) {
                return false;
            }
        }
        
        return true;
    }
    
    // ============================================
    // APPROACH 4: SINGLE ARRAY OPTIMIZATION
    // Time: O(n), Space: O(1)
    // ============================================
    /**
     * Optimized single-pass array approach
     * 
     * Same as Approach 3 but cleaner code
     */
    public static boolean isAnagram_SingleArray(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        
        int[] count = new int[26];
        
        // Single loop to count both strings
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }
        
        // All counts should be zero
        for (int c : count) {
            if (c != 0) return false;
        }
        
        return true;
    }
    
    // ============================================
    // FOLLOW-UP: UNICODE SUPPORT
    // ============================================
    /**
     * Approach for Unicode characters
     * Uses HashMap to support all characters
     */
    public static boolean isAnagram_Unicode(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        
        Map<Character, Integer> count = new HashMap<>();
        
        // Count s
        for (char c : s.toCharArray()) {
            count.put(c, count.getOrDefault(c, 0) + 1);
        }
        
        // Subtract t
        for (char c : t.toCharArray()) {
            count.put(c, count.getOrDefault(c, 0) - 1);
        }
        
        // Check all zero
        for (int val : count.values()) {
            if (val != 0) return false;
        }
        
        return true;
    }
    
    // ============================================
    // DEMONSTRATION WITH STEPS
    // ============================================
    static void demonstrateArrayApproach() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DETAILED DEMONSTRATION - ARRAY APPROACH");
        System.out.println("=".repeat(70));
        
        String s = "anagram";
        String t = "nagaram";
        
        System.out.println("\nExample: s = \"" + s + "\", t = \"" + t + "\"");
        System.out.println("\nStep-by-step execution:\n");
        
        int[] count = new int[26];
        
        System.out.println("Processing string s:");
        for (char c : s.toCharArray()) {
            int index = c - 'a';
            count[index]++;
            System.out.printf("  '%c' → count[%d]++ = %d%n", c, index, count[index]);
        }
        
        System.out.println("\nProcessing string t:");
        for (char c : t.toCharArray()) {
            int index = c - 'a';
            count[index]--;
            System.out.printf("  '%c' → count[%d]-- = %d%n", c, index, count[index]);
        }
        
        System.out.println("\nFinal character counts:");
        System.out.println("┌─────┬─────┬─────┬─────┬─────┬─────┬─────┐");
        System.out.print("│ Char│");
        for (int i = 0; i < 7; i++) {
            System.out.printf("  %c  │", 'a' + i);
        }
        System.out.println("\n├─────┼─────┼─────┼─────┼─────┼─────┼─────┤");
        System.out.print("│Count│");
        for (int i = 0; i < 7; i++) {
            System.out.printf("  %d  │", count[i]);
        }
        System.out.println("\n└─────┴─────┴─────┴─────┴─────┴─────┴─────┘");
        
        boolean isAnagram = true;
        for (int c : count) {
            if (c != 0) {
                isAnagram = false;
                break;
            }
        }
        
        System.out.println("\nAll counts are zero: " + isAnagram);
        System.out.println("Result: " + isAnagram);
    }
    
    // ============================================
    // PERFORMANCE COMPARISON
    // ============================================
    static void performanceComparison() {
        System.out.println("=".repeat(70));
        System.out.println("PERFORMANCE COMPARISON");
        System.out.println("=".repeat(70));
        
        String s = "abcdefghijklmnopqrstuvwxyz".repeat(100);  // 2600 chars
        String t = "zyxwvutsrqponmlkjihgfedcba".repeat(100);  // Same chars, different order
        
        int iterations = 10000;
        
        System.out.println("\nTest: " + iterations + " iterations");
        System.out.println("String length: " + s.length() + " characters each");
        
        // Approach 1: Sorting
        long start1 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            isAnagram_Sorting(s, t);
        }
        long time1 = System.nanoTime() - start1;
        
        // Approach 2: HashMap
        long start2 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            isAnagram_HashMap(s, t);
        }
        long time2 = System.nanoTime() - start2;
        
        // Approach 3: Array
        long start3 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            isAnagram_Array(s, t);
        }
        long time3 = System.nanoTime() - start3;
        
        // Approach 4: Single Array
        long start4 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            isAnagram_SingleArray(s, t);
        }
        long time4 = System.nanoTime() - start4;
        
        System.out.println("\n╔════════════════════════╦═══════════╦═══════════════╦═══════════╗");
        System.out.println("║      Approach          ║ Time (ms) ║  Complexity   ║   Space   ║");
        System.out.println("╠════════════════════════╬═══════════╬═══════════════╬═══════════╣");
        System.out.printf("║ Sorting                ║ %7.2f   ║  O(n log n)   ║    O(n)   ║%n", time1/1000000.0);
        System.out.printf("║ HashMap                ║ %7.2f   ║    O(n)       ║    O(n)   ║%n", time2/1000000.0);
        System.out.printf("║ Array (26) ⭐          ║ %7.2f   ║    O(n)       ║    O(1)   ║%n", time3/1000000.0);
        System.out.printf("║ Single Array           ║ %7.2f   ║    O(n)       ║    O(1)   ║%n", time4/1000000.0);
        System.out.println("╚════════════════════════╩═══════════╩═══════════════╩═══════════╝");
        
        System.out.println("\n📊 Analysis:");
        System.out.println("1. Sorting: O(n log n) - Slowest but simplest");
        System.out.println("2. HashMap: O(n) - Good for Unicode, more space");
        System.out.println("3. Array: O(n) with O(1) space - BEST for lowercase! ⭐");
        System.out.println("4. Array is " + String.format("%.1f", (double)time1/time3) + "x faster than sorting");
        
        System.out.println("\n✅ RECOMMENDED:");
        System.out.println("   - Lowercase letters: Array approach (O(1) space)");
        System.out.println("   - Unicode/mixed: HashMap approach");
    }
    
    // ============================================
    // EDGE CASES TESTING
    // ============================================
    static void testEdgeCases() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("EDGE CASES TESTING");
        System.out.println("=".repeat(70));
        
        String[][] edgeCases = {
            {"", ""},           // Both empty
            {"a", "a"},         // Single char same
            {"a", "b"},         // Single char different
            {"ab", "ba"},       // Two chars
            {"abc", "ab"},      // Different lengths
            {"aaa", "aaa"},     // All same characters
            {"aab", "aba"},     // Same chars, different freq
            {"listen", "silent"},  // Classic anagram
            {"Anagram", "nagaram"} // Case sensitive (should be false)
        };
        
        System.out.println("\nTesting edge cases:");
        for (String[] test : edgeCases) {
            boolean result = isAnagram_Array(test[0], test[1]);
            System.out.printf("%-20s %-20s → %s%n", 
                            "\"" + test[0] + "\"", 
                            "\"" + test[1] + "\"", 
                            result);
        }
    }
    
    // ============================================
    // INTERVIEW TIPS
    // ============================================
    static void printInterviewTips() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("INTERVIEW TIPS & TRICKS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n💡 Problem-Solving Approach:");
        
        System.out.println("\n1. Clarify requirements:");
        System.out.println("   ❓ Case sensitive? (Usually yes)");
        System.out.println("   ❓ Only lowercase? (Ask - affects solution)");
        System.out.println("   ❓ Unicode characters? (Use HashMap)");
        System.out.println("   ❓ Empty strings? (Yes, both empty = anagram)");
        
        System.out.println("\n2. Start simple:");
        System.out.println("   1st thought: Sort both strings → O(n log n)");
        System.out.println("   Explain: Simple but not optimal");
        
        System.out.println("\n3. Optimize:");
        System.out.println("   Better: Use frequency counting → O(n)");
        System.out.println("   - HashMap for Unicode");
        System.out.println("   - Array for lowercase letters");
        
        System.out.println("\n4. Code the optimal solution:");
        System.out.println("   For lowercase: Array of size 26");
        System.out.println("   For Unicode: HashMap");
        
        System.out.println("\n5. Test cases:");
        System.out.println("   ✓ Different lengths → false");
        System.out.println("   ✓ Same string → true");
        System.out.println("   ✓ Empty strings → true");
        System.out.println("   ✓ Classic anagram → true");
        System.out.println("   ✓ Similar but not anagram → false");
        
        System.out.println("\n📝 Key Points to Mention:");
        System.out.println("✅ Two approaches: Sorting vs Counting");
        System.out.println("✅ Counting is O(n) vs Sorting O(n log n)");
        System.out.println("✅ Array for lowercase: O(1) space!");
        System.out.println("✅ HashMap for Unicode: O(n) space");
        
        System.out.println("\n🎯 Common Variations:");
        System.out.println("1. Group anagrams from list of strings");
        System.out.println("2. Find all anagrams in a string");
        System.out.println("3. Check if two strings are k-anagrams");
        
        System.out.println("\n✅ BEST ANSWER:");
        System.out.println("   Lowercase: Array approach (O(1) space)");
        System.out.println("   Unicode: HashMap approach");
        System.out.println("   Always explain trade-offs!");
    }
}
