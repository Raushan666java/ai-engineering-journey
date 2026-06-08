/**
 * LeetCode #125: VALID PALINDROME - DAY 4
 * Difficulty: Easy
 * 
 * Problem:
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase
 * letters and removing all non-alphanumeric characters, it reads the same forward
 * and backward. Alphanumeric characters include letters and numbers.
 * 
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * 
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 * 
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 * 
 * Example 3:
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric characters.
 */

public class ValidPalindrome {
    
    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════╗");
        System.out.println("║   LeetCode #125: VALID PALINDROME       ║");
        System.out.println("║   Difficulty: Easy                       ║");
        System.out.println("╚══════════════════════════════════════════╝\n");
        
        // Test cases
        String[] testCases = {
            "A man, a plan, a canal: Panama",
            "race a car",
            " ",
            "a",
            "ab",
            "Madam",
            "0P",
            "Was it a car or a cat I saw?",
            "12321",
            "12345"
        };
        
        System.out.println("Testing all approaches:\n");
        
        for (String test : testCases) {
            System.out.println("Input: \"" + test + "\"");
            
            boolean result1 = isPalindrome_Approach1_TwoPointers(test);
            boolean result2 = isPalindrome_Approach2_StringBuilder(test);
            boolean result3 = isPalindrome_Approach3_Regex(test);
            
            System.out.println("  Approach 1 (Two Pointers): " + result1);
            System.out.println("  Approach 2 (StringBuilder): " + result2);
            System.out.println("  Approach 3 (Regex): " + result3);
            System.out.println();
        }
        
        // Performance comparison
        performanceComparison();
    }
    
    // ============================================
    // APPROACH 1: TWO POINTERS (OPTIMAL)
    // Time: O(n), Space: O(1)
    // ============================================
    /**
     * Most efficient approach - Two Pointers
     * 
     * Algorithm:
     * 1. Use two pointers: left at start, right at end
     * 2. Skip non-alphanumeric characters
     * 3. Compare characters (case-insensitive)
     * 4. Move pointers inward
     * 
     * Time Complexity: O(n) - single pass through string
     * Space Complexity: O(1) - only two pointers
     */
    public static boolean isPalindrome_Approach1_TwoPointers(String s) {
        if (s == null || s.isEmpty()) {
            return true;
        }
        
        int left = 0;
        int right = s.length() - 1;
        
        while (left < right) {
            // Skip non-alphanumeric from left
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
                left++;
            }
            
            // Skip non-alphanumeric from right
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
                right--;
            }
            
            // Compare characters (case-insensitive)
            if (Character.toLowerCase(s.charAt(left)) != 
                Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            
            left++;
            right--;
        }
        
        return true;
    }
    
    // ============================================
    // APPROACH 2: STRINGBUILDER (CLEAN CODE)
    // Time: O(n), Space: O(n)
    // ============================================
    /**
     * Clean and readable approach using StringBuilder
     * 
     * Algorithm:
     * 1. Build clean string with only alphanumeric characters
     * 2. Convert to lowercase
     * 3. Reverse and compare
     * 
     * Time Complexity: O(n) - iterate string twice
     * Space Complexity: O(n) - create new string
     */
    public static boolean isPalindrome_Approach2_StringBuilder(String s) {
        if (s == null || s.isEmpty()) {
            return true;
        }
        
        // Build clean string
        StringBuilder cleaned = new StringBuilder();
        for (char c : s.toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                cleaned.append(Character.toLowerCase(c));
            }
        }
        
        // Check if palindrome
        String forward = cleaned.toString();
        String backward = cleaned.reverse().toString();
        
        return forward.equals(backward);
    }
    
    // ============================================
    // APPROACH 3: REGEX (MOST CONCISE)
    // Time: O(n), Space: O(n)
    // ============================================
    /**
     * Most concise approach using regex
     * 
     * Algorithm:
     * 1. Remove all non-alphanumeric using regex
     * 2. Convert to lowercase
     * 3. Reverse and compare
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    public static boolean isPalindrome_Approach3_Regex(String s) {
        if (s == null || s.isEmpty()) {
            return true;
        }
        
        // Remove non-alphanumeric and convert to lowercase
        String cleaned = s.replaceAll("[^A-Za-z0-9]", "").toLowerCase();
        
        // Reverse and compare
        String reversed = new StringBuilder(cleaned).reverse().toString();
        
        return cleaned.equals(reversed);
    }
    
    // ============================================
    // HELPER METHODS & VARIATIONS
    // ============================================
    
    /**
     * Manual check if character is alphanumeric
     */
    private static boolean isAlphanumeric(char c) {
        return (c >= 'A' && c <= 'Z') || 
               (c >= 'a' && c <= 'z') || 
               (c >= '0' && c <= '9');
    }
    
    /**
     * Manual character comparison (case-insensitive)
     */
    private static boolean isSameChar(char a, char b) {
        // Convert to lowercase
        if (a >= 'A' && a <= 'Z') {
            a = (char)(a + 32);
        }
        if (b >= 'A' && b <= 'Z') {
            b = (char)(b + 32);
        }
        return a == b;
    }
    
    /**
     * Approach with manual character handling
     */
    public static boolean isPalindrome_ManualCheck(String s) {
        int left = 0;
        int right = s.length() - 1;
        
        while (left < right) {
            while (left < right && !isAlphanumeric(s.charAt(left))) {
                left++;
            }
            while (left < right && !isAlphanumeric(s.charAt(right))) {
                right--;
            }
            
            if (!isSameChar(s.charAt(left), s.charAt(right))) {
                return false;
            }
            
            left++;
            right--;
        }
        
        return true;
    }
    
    // ============================================
    // PERFORMANCE COMPARISON
    // ============================================
    static void performanceComparison() {
        System.out.println("=".repeat(60));
        System.out.println("PERFORMANCE COMPARISON");
        System.out.println("=".repeat(60));
        
        String testString = "A man, a plan, a canal: Panama! " +
                          "Was it a car or a cat I saw? " +
                          "Madam, I'm Adam. " +
                          "Never odd or even.";
        
        int iterations = 100000;
        
        // Approach 1: Two Pointers
        long start1 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            isPalindrome_Approach1_TwoPointers(testString);
        }
        long time1 = System.nanoTime() - start1;
        
        // Approach 2: StringBuilder
        long start2 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            isPalindrome_Approach2_StringBuilder(testString);
        }
        long time2 = System.nanoTime() - start2;
        
        // Approach 3: Regex
        long start3 = System.nanoTime();
        for (int i = 0; i < iterations; i++) {
            isPalindrome_Approach3_Regex(testString);
        }
        long time3 = System.nanoTime() - start3;
        
        System.out.println("\nTest: 100,000 iterations");
        System.out.println("String: \"" + testString.substring(0, 50) + "...\"");
        System.out.println("\n╔════════════════════════╦═══════════╦═════════════╗");
        System.out.println("║       Approach         ║ Time (ms) ║   Memory    ║");
        System.out.println("╠════════════════════════╬═══════════╬═════════════╣");
        System.out.printf("║ Two Pointers (Best)    ║ %7.2f   ║    O(1)     ║%n", time1/1000000.0);
        System.out.printf("║ StringBuilder          ║ %7.2f   ║    O(n)     ║%n", time2/1000000.0);
        System.out.printf("║ Regex                  ║ %7.2f   ║    O(n)     ║%n", time3/1000000.0);
        System.out.println("╚════════════════════════╩═══════════╩═════════════╝");
        
        System.out.println("\n📊 Analysis:");
        System.out.println("1. Two Pointers is fastest (" + String.format("%.1f", (double)time3/time1) + "x faster than Regex)");
        System.out.println("2. Two Pointers uses O(1) space (most efficient)");
        System.out.println("3. StringBuilder is readable but uses O(n) space");
        System.out.println("4. Regex is concise but slowest");
        
        System.out.println("\n✅ RECOMMENDED: Two Pointers approach");
        System.out.println("   - Best time complexity: O(n)");
        System.out.println("   - Best space complexity: O(1)");
        System.out.println("   - Most efficient for interviews");
    }
    
    // ============================================
    // EDGE CASES & TESTING
    // ============================================
    static void testEdgeCases() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("EDGE CASES TESTING");
        System.out.println("=".repeat(60));
        
        String[] edgeCases = {
            "",                    // Empty string
            " ",                   // Only whitespace
            "a",                   // Single character
            "ab",                  // Two different characters
            "aa",                  // Two same characters
            ".,",                  // Only special characters
            "123",                 // Only numbers
            "A1B2C2B1A",          // Alphanumeric palindrome
            "A1B2C3B1A",          // Alphanumeric non-palindrome
            null                   // Null (handle carefully)
        };
        
        System.out.println("\nTesting edge cases:");
        for (String test : edgeCases) {
            if (test == null) {
                System.out.println("Input: null");
                try {
                    boolean result = isPalindrome_Approach1_TwoPointers(test);
                    System.out.println("  Result: " + result);
                } catch (Exception e) {
                    System.out.println("  Exception: " + e.getClass().getSimpleName());
                }
            } else {
                System.out.println("Input: \"" + test + "\"");
                System.out.println("  Result: " + isPalindrome_Approach1_TwoPointers(test));
            }
        }
    }
    
    // ============================================
    // INTERVIEW TIPS
    // ============================================
    static void printInterviewTips() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("INTERVIEW TIPS & TRICKS");
        System.out.println("=".repeat(60));
        
        System.out.println("\n💡 Key Points to Mention:");
        System.out.println("1. Clarify problem:");
        System.out.println("   - Case sensitivity? (Yes, ignore case)");
        System.out.println("   - What to do with spaces/special chars? (Ignore them)");
        System.out.println("   - Empty string palindrome? (Yes)");
        
        System.out.println("\n2. Discuss approaches:");
        System.out.println("   - Brute force: Create cleaned string, reverse, compare");
        System.out.println("   - Optimal: Two pointers (O(1) space)");
        
        System.out.println("\n3. Complexity analysis:");
        System.out.println("   - Time: O(n) for all approaches");
        System.out.println("   - Space: O(1) for two pointers, O(n) for others");
        
        System.out.println("\n4. Edge cases to test:");
        System.out.println("   - Empty string");
        System.out.println("   - Single character");
        System.out.println("   - All special characters");
        System.out.println("   - Mixed alphanumeric");
        
        System.out.println("\n5. Follow-up questions:");
        System.out.println("   - What if we can't ignore case?");
        System.out.println("   - What if we need to check only letters (ignore numbers)?");
        System.out.println("   - Can we do it recursively?");
        
        System.out.println("\n✅ Best answer: Two Pointers approach");
        System.out.println("   - Most efficient (O(1) space)");
        System.out.println("   - Clear logic");
        System.out.println("   - Easy to explain");
    }
}
