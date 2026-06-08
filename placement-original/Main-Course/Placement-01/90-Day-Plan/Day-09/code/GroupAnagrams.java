/*
 * ============================================================================
 * LeetCode #49: Group Anagrams
 * Difficulty: Medium
 * Topics: HashMap, String, Sorting, Array
 * ============================================================================
 * 
 * PROBLEM:
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 * 
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 * 
 * Constraints:
 * - 1 <= strs.length <= 10^4
 * - 0 <= strs[i].length <= 100
 * - strs[i] consists of lowercase English letters
 * 
 * OOP COMMENTARY:
 * This problem demonstrates:
 * - HashMap<String, List<String>> for grouping (nested generics)
 * - ArrayList operations and initialization
 * - String manipulation and character arrays
 * - Generics: type-safe collections
 * - computeIfAbsent() for concise map operations
 * - Values collection from map
 */

import java.util.*;

public class GroupAnagrams {

    // ========================================================================
    // APPROACH 1: SORTED STRING AS KEY
    // Time: O(n * k log k), Space: O(n * k)
    // where n = number of strings, k = max length of string
    // ========================================================================
    
    /**
     * Uses sorted string as key in HashMap to group anagrams.
     * 
     * OOP Concepts:
     * - HashMap<String, List<String>>: Nested generic types
     * - ArrayList: Dynamic array for grouping
     * - String methods: toCharArray(), Arrays.sort()
     * - computeIfAbsent(): Functional approach for map initialization
     * 
     * Algorithm:
     * 1. For each string, sort its characters
     * 2. Use sorted string as key in HashMap
     * 3. Add original string to the list for that key
     * 4. Return all values from the map
     * 
     * Why sorted string?
     * - Anagrams have same characters, just different order
     * - Sorting normalizes the order
     * - "eat", "tea", "ate" all become "aet"
     * - Perfect key for grouping!
     * 
     * Example:
     * "eat" -> sort -> "aet" -> key
     * "tea" -> sort -> "aet" -> same key!
     * "tan" -> sort -> "ant" -> different key
     */
    public static List<List<String>> groupAnagrams_Sorted(String[] strs) {
        // Map: sorted string -> list of anagrams
        Map<String, List<String>> groups = new HashMap<>();
        
        for (String str : strs) {
            // Sort characters to create key
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            
            // Add to group (create list if first occurrence)
            groups.computeIfAbsent(key, k -> new ArrayList<>()).add(str);
        }
        
        // Return all groups
        return new ArrayList<>(groups.values());
    }

    // ========================================================================
    // APPROACH 2: CHARACTER COUNT AS KEY
    // Time: O(n * k), Space: O(n * k)
    // ========================================================================
    
    /**
     * Uses character count array as key (encoded as string).
     * This is OPTIMAL - O(n * k) without sorting!
     * 
     * OOP Concepts:
     * - int[] for character counting
     * - StringBuilder for efficient string building
     * - HashMap with custom key generation
     * 
     * Algorithm:
     * 1. For each string, count character frequencies
     * 2. Encode count as string (e.g., "a2b1c1" for "abc")
     * 3. Use encoded string as key
     * 4. Group strings with same key
     * 
     * Why character count?
     * - Anagrams have same character frequencies
     * - No sorting needed - just counting
     * - "eat": e=1, a=1, t=1
     * - "tea": e=1, a=1, t=1
     * - Same count = anagrams!
     * 
     * Key encoding:
     * - Use format: "#count1#count2#...#count26"
     * - Or: "a1b2c0d0..." (character + count)
     * - Ensures unique key for each pattern
     */
    public static List<List<String>> groupAnagrams_CharCount(String[] strs) {
        Map<String, List<String>> groups = new HashMap<>();
        
        for (String str : strs) {
            // Count character frequencies
            int[] count = new int[26];  // a-z
            for (char c : str.toCharArray()) {
                count[c - 'a']++;
            }
            
            // Create unique key from count
            StringBuilder keyBuilder = new StringBuilder();
            for (int i = 0; i < 26; i++) {
                if (count[i] > 0) {
                    keyBuilder.append((char) ('a' + i))
                             .append(count[i]);
                }
            }
            String key = keyBuilder.toString();
            
            // Group by key
            groups.computeIfAbsent(key, k -> new ArrayList<>()).add(str);
        }
        
        return new ArrayList<>(groups.values());
    }

    // ========================================================================
    // APPROACH 3: PRIME NUMBER ENCODING
    // Time: O(n * k), Space: O(n * k)
    // ========================================================================
    
    /**
     * Uses prime number product as key.
     * Each character mapped to a unique prime number.
     * 
     * OOP Concepts:
     * - Static array for prime mapping
     * - Long for large products (avoid overflow)
     * - HashMap<Long, List<String>>: Generic with primitive wrapper
     * 
     * Algorithm:
     * 1. Map each character to a prime number (a=2, b=3, c=5, ...)
     * 2. For each string, compute product of character primes
     * 3. Use product as key (unique due to fundamental theorem of arithmetic)
     * 4. Group strings with same product
     * 
     * Why primes?
     * - Product of primes is unique for each combination
     * - "abc" = 2*3*5 = 30
     * - "bca" = 3*5*2 = 30 (same product)
     * - No other combination gives 30
     * - Fundamental theorem of arithmetic!
     * 
     * Limitation:
     * - Can overflow for long strings
     * - Need to use Long (not int)
     * - Less practical than approach 2
     */
    public static List<List<String>> groupAnagrams_Prime(String[] strs) {
        // Prime numbers for a-z
        long[] primes = {
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101
        };
        
        Map<Long, List<String>> groups = new HashMap<>();
        
        for (String str : strs) {
            // Calculate product of primes
            long product = 1;
            for (char c : str.toCharArray()) {
                product *= primes[c - 'a'];
            }
            
            // Group by product
            groups.computeIfAbsent(product, k -> new ArrayList<>()).add(str);
        }
        
        return new ArrayList<>(groups.values());
    }

    // ========================================================================
    // APPROACH 4: CHARACTER COUNT ARRAY AS KEY (DIRECT)
    // Time: O(n * k), Space: O(n * k)
    // ========================================================================
    
    /**
     * Uses delimiter-separated character count as key.
     * More compact encoding than approach 2.
     * 
     * OOP Concepts:
     * - Arrays.toString() for array representation
     * - Simple and clean key generation
     * 
     * Algorithm:
     * 1. Count characters in array
     * 2. Use Arrays.toString(count) as key
     * 3. Group by key
     * 
     * Example:
     * "eat" -> [1,0,0,0,1,0,...,1,0,...,0] -> "[1,0,0,0,1,...]"
     * "tea" -> [1,0,0,0,1,0,...,1,0,...,0] -> same key
     */
    public static List<List<String>> groupAnagrams_ArrayKey(String[] strs) {
        Map<String, List<String>> groups = new HashMap<>();
        
        for (String str : strs) {
            // Count characters
            int[] count = new int[26];
            for (char c : str.toCharArray()) {
                count[c - 'a']++;
            }
            
            // Use array string representation as key
            String key = Arrays.toString(count);
            
            groups.computeIfAbsent(key, k -> new ArrayList<>()).add(str);
        }
        
        return new ArrayList<>(groups.values());
    }

    // ========================================================================
    // APPROACH 5: MANUAL MAP OPERATIONS (Without computeIfAbsent)
    // Time: O(n * k log k), Space: O(n * k)
    // ========================================================================
    
    /**
     * Traditional approach without Java 8 features.
     * Shows manual HashMap operations.
     * 
     * OOP Concepts:
     * - containsKey() for key checking
     * - get() and put() for manual map operations
     * - Explicit ArrayList creation
     * 
     * Good for understanding HashMap internals and interview whiteboards!
     */
    public static List<List<String>> groupAnagrams_Manual(String[] strs) {
        Map<String, List<String>> groups = new HashMap<>();
        
        for (String str : strs) {
            // Sort to create key
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            
            // Manual map operations
            if (!groups.containsKey(key)) {
                groups.put(key, new ArrayList<>());
            }
            groups.get(key).add(str);
        }
        
        return new ArrayList<>(groups.values());
    }

    // ========================================================================
    // HELPER METHOD: Print Results
    // ========================================================================
    
    private static void printResult(List<List<String>> result) {
        System.out.print("[");
        for (int i = 0; i < result.size(); i++) {
            System.out.print(result.get(i));
            if (i < result.size() - 1) System.out.print(", ");
        }
        System.out.println("]");
    }

    // ========================================================================
    // TEST CASES
    // ========================================================================

    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║          LeetCode #49: Group Anagrams                      ║");
        System.out.println("║          Testing All Approaches                            ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        // Test case 1
        String[] strs1 = {"eat", "tea", "tan", "ate", "nat", "bat"};
        System.out.println("Test Case 1:");
        System.out.println("Input: " + Arrays.toString(strs1));
        System.out.println("Expected: [[bat], [nat, tan], [ate, eat, tea]] (any order)");
        
        System.out.print("Sorted Key:    ");
        printResult(groupAnagrams_Sorted(strs1));
        
        System.out.print("CharCount Key: ");
        printResult(groupAnagrams_CharCount(strs1));
        
        System.out.print("Prime Key:     ");
        printResult(groupAnagrams_Prime(strs1));
        
        System.out.print("Array Key:     ");
        printResult(groupAnagrams_ArrayKey(strs1));
        
        System.out.print("Manual Ops:    ");
        printResult(groupAnagrams_Manual(strs1));
        System.out.println();
        
        // Test case 2
        String[] strs2 = {""};
        System.out.println("Test Case 2:");
        System.out.println("Input: " + Arrays.toString(strs2));
        System.out.println("Expected: [[]]");
        System.out.print("Result: ");
        printResult(groupAnagrams_Sorted(strs2));
        System.out.println();
        
        // Test case 3
        String[] strs3 = {"a"};
        System.out.println("Test Case 3:");
        System.out.println("Input: " + Arrays.toString(strs3));
        System.out.println("Expected: [[a]]");
        System.out.print("Result: ");
        printResult(groupAnagrams_Sorted(strs3));
        System.out.println();
        
        // Test case 4: Multiple same characters
        String[] strs4 = {"aaa", "aa", "a", "aaa"};
        System.out.println("Test Case 4:");
        System.out.println("Input: " + Arrays.toString(strs4));
        System.out.println("Expected: [[aaa, aaa], [aa], [a]]");
        System.out.print("Result: ");
        printResult(groupAnagrams_Sorted(strs4));
        System.out.println();
        
        // Complexity comparison
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║               COMPLEXITY COMPARISON                        ║");
        System.out.println("╠════════════════════════════════════════════════════════════╣");
        System.out.println("║ Approach         │ Time Complexity │ Space Complexity     ║");
        System.out.println("╠══════════════════╪═════════════════╪══════════════════════╣");
        System.out.println("║ Sorted Key       │ O(n * k log k)  │ O(n * k)             ║");
        System.out.println("║ CharCount Key    │ O(n * k)        │ O(n * k)  OPTIMAL!   ║");
        System.out.println("║ Prime Key        │ O(n * k)        │ O(n * k)             ║");
        System.out.println("║ Array Key        │ O(n * k)        │ O(n * k)             ║");
        System.out.println("║ Manual Ops       │ O(n * k log k)  │ O(n * k)             ║");
        System.out.println("╚══════════════════╧═════════════════╧══════════════════════╝");
        System.out.println("n = number of strings, k = max length of string");
        System.out.println();
        
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║                  OOP CONCEPTS DEMONSTRATED                 ║");
        System.out.println("╠════════════════════════════════════════════════════════════╣");
        System.out.println("║ ✓ HashMap<String, List<String>> - Nested generics         ║");
        System.out.println("║ ✓ ArrayList operations and initialization                 ║");
        System.out.println("║ ✓ computeIfAbsent() - Functional map operations           ║");
        System.out.println("║ ✓ String manipulation: toCharArray(), new String()        ║");
        System.out.println("║ ✓ Arrays.sort() and Arrays.toString()                     ║");
        System.out.println("║ ✓ StringBuilder for efficient string building             ║");
        System.out.println("║ ✓ Generic collections type safety                         ║");
        System.out.println("║ ✓ Map operations: containsKey(), get(), put(), values()   ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
        System.out.println();
        
        System.out.println("KEY INSIGHTS:");
        System.out.println("  1. Sorted string creates perfect anagram key");
        System.out.println("  2. Character count is faster (no sorting)");
        System.out.println("  3. Prime products work but can overflow");
        System.out.println("  4. computeIfAbsent() simplifies map initialization");
        System.out.println("  5. HashMap groups efficiently in O(1) average");
    }
}
