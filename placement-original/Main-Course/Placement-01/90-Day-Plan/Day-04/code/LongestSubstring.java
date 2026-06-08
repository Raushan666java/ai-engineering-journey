/**
 * LeetCode #3: LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS - DAY 4
 * Difficulty: Medium
 * 
 * Problem:
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * Constraints:
 * - 0 <= s.length <= 5 * 10^4
 * - s consists of English letters, digits, symbols and spaces.
 */

import java.util.*;

public class LongestSubstring {
    
    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════════════════╗");
        System.out.println("║   LeetCode #3: LONGEST SUBSTRING WITHOUT REPEATING   ║");
        System.out.println("║   Difficulty: Medium                                 ║");
        System.out.println("╚══════════════════════════════════════════════════════╝\n");
        
        // Test cases
        String[] testCases = {
            "abcabcbb",    // Expected: 3 ("abc")
            "bbbbb",       // Expected: 1 ("b")
            "pwwkew",      // Expected: 3 ("wke" or "kew")
            "",            // Expected: 0
            " ",           // Expected: 1
            "dvdf",        // Expected: 3 ("vdf")
            "abcdefg",     // Expected: 7 (entire string)
            "aab",         // Expected: 2 ("ab")
            "tmmzuxt"      // Expected: 5 ("mzuxt")
        };
        
        System.out.println("Testing all approaches:\n");
        
        for (String test : testCases) {
            System.out.println("Input: \"" + test + "\"");
            
            int result1 = lengthOfLongestSubstring_BruteForce(test);
            int result2 = lengthOfLongestSubstring_SlidingWindow(test);
            int result3 = lengthOfLongestSubstring_Optimized(test);
            
            System.out.println("  Brute Force: " + result1);
            System.out.println("  Sliding Window: " + result2);
            System.out.println("  Optimized: " + result3);
            System.out.println();
        }
        
        // Performance comparison
        performanceComparison();
        
        // Show detailed execution
        demonstrateApproaches();
    }
    
    // ============================================
    // APPROACH 1: BRUTE FORCE
    // Time: O(n³), Space: O(min(n,m))
    // ============================================
    /**
     * Brute Force Approach
     * 
     * Algorithm:
     * 1. Check every possible substring
     * 2. For each substring, check if all characters are unique
     * 3. Track maximum length found
     * 
     * Time Complexity: O(n³)
     *   - O(n²) for generating all substrings
     *   - O(n) for checking uniqueness
     * Space Complexity: O(min(n,m)) where m is charset size
     */
    public static int lengthOfLongestSubstring_BruteForce(String s) {
        if (s == null || s.isEmpty()) {
            return 0;
        }
        
        int maxLength = 0;
        int n = s.length();
        
        // Check every substring
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j <= n; j++) {
                if (allUnique(s, i, j)) {
                    maxLength = Math.max(maxLength, j - i);
                }
            }
        }
        
        return maxLength;
    }
    
    /**
     * Helper: Check if all characters in substring are unique
     */
    private static boolean allUnique(String s, int start, int end) {
        Set<Character> set = new HashSet<>();
        for (int i = start; i < end; i++) {
            char c = s.charAt(i);
            if (set.contains(c)) {
                return false;
            }
            set.add(c);
        }
        return true;
    }
    
    // ============================================
    // APPROACH 2: SLIDING WINDOW WITH HASHSET
    // Time: O(2n) = O(n), Space: O(min(n,m))
    // ============================================
    /**
     * Sliding Window Approach
     * 
     * Algorithm:
     * 1. Use two pointers: left and right
     * 2. Expand right pointer to include new characters
     * 3. If duplicate found, move left pointer
     * 4. Track maximum window size
     * 
     * Time Complexity: O(2n) = O(n)
     *   - In worst case, each character visited twice (by left and right)
     * Space Complexity: O(min(n,m))
     *   - HashSet stores at most min(n,m) characters
     */
    public static int lengthOfLongestSubstring_SlidingWindow(String s) {
        if (s == null || s.isEmpty()) {
            return 0;
        }
        
        Set<Character> set = new HashSet<>();
        int maxLength = 0;
        int left = 0;
        
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            
            // If duplicate found, remove characters from left
            while (set.contains(c)) {
                set.remove(s.charAt(left));
                left++;
            }
            
            // Add current character
            set.add(c);
            
            // Update max length
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
    
    // ============================================
    // APPROACH 3: OPTIMIZED SLIDING WINDOW (BEST)
    // Time: O(n), Space: O(min(n,m))
    // ============================================
    /**
     * Optimized Sliding Window with HashMap
     * 
     * Algorithm:
     * 1. Use HashMap to store character and its index
     * 2. When duplicate found, jump left pointer directly
     * 3. No need to move left pointer one by one
     * 
     * Time Complexity: O(n) - each character visited once
     * Space Complexity: O(min(n,m))
     * 
     * This is the BEST approach for interviews!
     */
    public static int lengthOfLongestSubstring_Optimized(String s) {
        if (s == null || s.isEmpty()) {
            return 0;
        }
        
        Map<Character, Integer> map = new HashMap<>();
        int maxLength = 0;
        int left = 0;
        
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            
            // If character already exists in current window
            if (map.containsKey(c)) {
                // Jump left pointer to position after the duplicate
                left = Math.max(left, map.get(c) + 1);
            }
            
            // Update character's latest position
            map.put(c, right);
            
            // Update max length
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
    
    // ============================================
    // APPROACH 4: OPTIMIZED WITH ARRAY (ASCII)
    // Time: O(n), Space: O(1)
    // ============================================
    /**
     * Optimized approach using array for ASCII characters
     * 
     * Faster than HashMap but works only for ASCII (128 characters)
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(1) - fixed size array (128)
     */
    public static int lengthOfLongestSubstring_Array(String s) {
        if (s == null || s.isEmpty()) {
            return 0;
        }
        
        int[] index = new int[128];  // ASCII characters
        Arrays.fill(index, -1);
        
        int maxLength = 0;
        int left = 0;
        
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            
            // Update left pointer if character was seen
            if (index[c] >= left) {
                left = index[c] + 1;
            }
            
            // Update character's position
            index[c] = right;
            
            // Update max length
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
    
    // ============================================
    // DETAILED DEMONSTRATION
    // ============================================
    static void demonstrateApproaches() {
        System.out.println("=".repeat(70));
        System.out.println("DETAILED EXECUTION DEMONSTRATION");
        System.out.println("=".repeat(70));
        
        String example = "abcabcbb";
        System.out.println("\nExample: \"" + example + "\"");
        System.out.println("\nStep-by-step execution of Optimized Sliding Window:\n");
        
        Map<Character, Integer> map = new HashMap<>();
        int maxLength = 0;
        int left = 0;
        
        System.out.println("╔═══════╦═════╦══════╦══════════╦═════════════╦══════════╗");
        System.out.println("║ Step  ║ Char║ Right║   Left   ║   Window    ║   Max    ║");
        System.out.println("╠═══════╬═════╬══════╬══════════╬═════════════╬══════════╣");
        
        for (int right = 0; right < example.length(); right++) {
            char c = example.charAt(right);
            
            if (map.containsKey(c)) {
                left = Math.max(left, map.get(c) + 1);
            }
            
            map.put(c, right);
            maxLength = Math.max(maxLength, right - left + 1);
            
            String window = example.substring(left, right + 1);
            System.out.printf("║  %2d   ║  %c  ║  %2d  ║    %2d    ║   %-9s ║    %d     ║%n",
                            right + 1, c, right, left, window, maxLength);
        }
        
        System.out.println("╚═══════╩═════╩══════╩══════════╩═════════════╩══════════╝");
        System.out.println("\nFinal Answer: " + maxLength);
    }
    
    // ============================================
    // PERFORMANCE COMPARISON
    // ============================================
    static void performanceComparison() {
        System.out.println("=".repeat(70));
        System.out.println("PERFORMANCE COMPARISON");
        System.out.println("=".repeat(70));
        
        // Create a test string
        StringBuilder testBuilder = new StringBuilder();
        for (int i = 0; i < 1000; i++) {
            testBuilder.append((char)('a' + (i % 26)));
        }
        String testString = testBuilder.toString();
        
        int iterations = 1000;
        
        // Skip brute force for large input (too slow)
        System.out.println("\nTest: " + iterations + " iterations");
        System.out.println("String length: " + testString.length() + " characters");
        System.out.println("(Brute force skipped - too slow for large input)\n");
        
        // Approach 2: Sliding Window
        long start2 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            lengthOfLongestSubstring_SlidingWindow(testString);
        }
        long time2 = System.nanoTime() - start2;
        
        // Approach 3: Optimized
        long start3 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            lengthOfLongestSubstring_Optimized(testString);
        }
        long time3 = System.nanoTime() - start3;
        
        // Approach 4: Array
        long start4 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            lengthOfLongestSubstring_Array(testString);
        }
        long time4 = System.nanoTime() - start4;
        
        System.out.println("╔═══════════════════════════╦═══════════╦═══════════════╗");
        System.out.println("║       Approach            ║ Time (ms) ║   Complexity  ║");
        System.out.println("╠═══════════════════════════╬═══════════╬═══════════════╣");
        System.out.println("║ Brute Force               ║  SKIPPED  ║    O(n³)      ║");
        System.out.printf("║ Sliding Window (HashSet)  ║ %7.2f   ║    O(2n)      ║%n", time2/1000000.0);
        System.out.printf("║ Optimized (HashMap) ⭐    ║ %7.2f   ║    O(n)       ║%n", time3/1000000.0);
        System.out.printf("║ Array (ASCII only)        ║ %7.2f   ║    O(n)       ║%n", time4/1000000.0);
        System.out.println("╚═══════════════════════════╩═══════════╩═══════════════╝");
        
        System.out.println("\n📊 Analysis:");
        System.out.println("1. Brute Force: O(n³) - Too slow for large inputs");
        System.out.println("2. Sliding Window: O(2n) - Good, but can be optimized");
        System.out.println("3. Optimized HashMap: O(n) - Best for interview! ⭐");
        System.out.println("4. Array approach: Fastest but limited to ASCII");
        
        System.out.println("\n✅ RECOMMENDED: Optimized HashMap approach");
        System.out.println("   - Time: O(n), Space: O(min(n,m))");
        System.out.println("   - Works with all characters (not just ASCII)");
        System.out.println("   - Clean and easy to explain");
    }
    
    // ============================================
    // EDGE CASES TESTING
    // ============================================
    static void testEdgeCases() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("EDGE CASES TESTING");
        System.out.println("=".repeat(70));
        
        String[] edgeCases = {
            "",              // Empty
            " ",             // Single space
            "a",             // Single character
            "aa",            // All same
            "abcdef",        // All unique
            "abba",          // Pattern
            "dvdf",          // Tricky case
            "   ",           // Multiple spaces
            "abcabcbb",      // Example 1
            "pwwkew"         // Example 3
        };
        
        System.out.println("\nTesting edge cases:");
        for (String test : edgeCases) {
            int result = lengthOfLongestSubstring_Optimized(test);
            System.out.printf("Input: %-15s → Length: %d%n", "\"" + test + "\"", result);
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
        System.out.println("1. Clarify requirements:");
        System.out.println("   - What characters? (All printable characters)");
        System.out.println("   - Case sensitive? (Yes)");
        System.out.println("   - Empty string? (Return 0)");
        
        System.out.println("\n2. Start with brute force:");
        System.out.println("   - Check all substrings: O(n³)");
        System.out.println("   - Explain why it's slow");
        
        System.out.println("\n3. Optimize to sliding window:");
        System.out.println("   - Use HashSet: O(2n)");
        System.out.println("   - Explain the window concept");
        
        System.out.println("\n4. Further optimize:");
        System.out.println("   - Use HashMap to jump directly: O(n)");
        System.out.println("   - This is the best solution!");
        
        System.out.println("\n5. Code the optimal solution:");
        System.out.println("   - HashMap to store index");
        System.out.println("   - Track left and right pointers");
        System.out.println("   - Update max length");
        
        System.out.println("\n6. Test with examples:");
        System.out.println("   - Empty string");
        System.out.println("   - Single character");
        System.out.println("   - All same characters");
        System.out.println("   - All unique characters");
        
        System.out.println("\n📝 Key Points to Mention:");
        System.out.println("✅ Sliding window technique");
        System.out.println("✅ HashMap for O(1) lookups");
        System.out.println("✅ Time: O(n), Space: O(min(n,m))");
        System.out.println("✅ Single pass through string");
        
        System.out.println("\n🎯 Common Mistakes to Avoid:");
        System.out.println("❌ Not handling empty string");
        System.out.println("❌ Off-by-one errors in window size");
        System.out.println("❌ Not updating left pointer correctly");
        System.out.println("❌ Forgetting to update max length");
    }
}
