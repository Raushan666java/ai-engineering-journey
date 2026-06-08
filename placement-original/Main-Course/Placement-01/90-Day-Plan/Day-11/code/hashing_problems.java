/**
 * Day 11: Hashing Problems
 * 
 * Topics Covered:
 * - Two Sum and variants
 * - Frequency counting problems
 * - Anagram detection
 * - Longest substring problems
 * - Subarray sum problems
 * - Common hashing patterns
 */

import java.util.*;

public class hashing_problems {
    public static void main(String[] args) {
        System.out.println("=== Hashing Problems ===\n");
        
        // ============ TWO SUM PROBLEMS ============
        
        // 1. Two Sum
        System.out.println("1. Two Sum:");
        
        int[] nums1 = {2, 7, 11, 15};
        int target1 = 9;
        int[] result1 = twoSum(nums1, target1);
        
        System.out.println("Array: " + Arrays.toString(nums1));
        System.out.println("Target: " + target1);
        System.out.println("Indices: " + Arrays.toString(result1));
        System.out.println();
        
        // 2. Two Sum - All Pairs
        System.out.println("2. Two Sum - All Pairs:");
        
        int[] nums2 = {1, 5, 7, -1, 5};
        int target2 = 6;
        List<int[]> allPairs = twoSumAllPairs(nums2, target2);
        
        System.out.println("Array: " + Arrays.toString(nums2));
        System.out.println("Target: " + target2);
        System.out.println("All pairs:");
        for (int[] pair : allPairs) {
            System.out.println("  " + Arrays.toString(pair));
        }
        System.out.println();
        
        // 3. Three Sum
        System.out.println("3. Three Sum (equals 0):");
        
        int[] nums3 = {-1, 0, 1, 2, -1, -4};
        List<List<Integer>> triplets = threeSum(nums3);
        
        System.out.println("Array: " + Arrays.toString(nums3));
        System.out.println("Triplets that sum to 0:");
        for (List<Integer> triplet : triplets) {
            System.out.println("  " + triplet);
        }
        System.out.println();
        
        // ============ FREQUENCY COUNTING ============
        
        // 4. First Non-Repeating Character
        System.out.println("4. First Non-Repeating Character:");
        
        String str1 = "leetcode";
        char firstNonRepeat = firstNonRepeatingChar(str1);
        
        System.out.println("String: " + str1);
        System.out.println("First non-repeating: " + firstNonRepeat);
        System.out.println();
        
        // 5. Character Frequency
        System.out.println("5. Character Frequency:");
        
        String str2 = "programming";
        Map<Character, Integer> charFreq = getCharFrequency(str2);
        
        System.out.println("String: " + str2);
        System.out.println("Frequencies:");
        charFreq.forEach((ch, freq) -> 
            System.out.println("  '" + ch + "': " + freq));
        System.out.println();
        
        // 6. Most Frequent Element
        System.out.println("6. Most Frequent Element:");
        
        int[] nums4 = {1, 3, 2, 3, 4, 3, 2};
        int mostFrequent = findMostFrequent(nums4);
        
        System.out.println("Array: " + Arrays.toString(nums4));
        System.out.println("Most frequent: " + mostFrequent);
        System.out.println();
        
        // 7. Elements with frequency > n/k
        System.out.println("7. Elements appearing > n/3 times:");
        
        int[] nums5 = {3, 2, 3};
        List<Integer> majority = majorityElement(nums5);
        
        System.out.println("Array: " + Arrays.toString(nums5));
        System.out.println("Elements appearing > n/3: " + majority);
        System.out.println();
        
        // ============ ANAGRAM PROBLEMS ============
        
        // 8. Valid Anagram
        System.out.println("8. Valid Anagram:");
        
        String s1 = "anagram";
        String t1 = "nagaram";
        boolean isAnagram = isAnagram(s1, t1);
        
        System.out.println("String 1: " + s1);
        System.out.println("String 2: " + t1);
        System.out.println("Is anagram: " + isAnagram);
        System.out.println();
        
        // 9. Group Anagrams
        System.out.println("9. Group Anagrams:");
        
        String[] strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
        List<List<String>> groupedAnagrams = groupAnagrams(strs);
        
        System.out.println("Strings: " + Arrays.toString(strs));
        System.out.println("Grouped anagrams:");
        for (List<String> group : groupedAnagrams) {
            System.out.println("  " + group);
        }
        System.out.println();
        
        // 10. Find Anagrams in String
        System.out.println("10. Find All Anagrams:");
        
        String s = "cbaebabacd";
        String p = "abc";
        List<Integer> anagramIndices = findAnagrams(s, p);
        
        System.out.println("String: " + s);
        System.out.println("Pattern: " + p);
        System.out.println("Anagram start indices: " + anagramIndices);
        System.out.println();
        
        // ============ SUBSTRING PROBLEMS ============
        
        // 11. Longest Substring Without Repeating Characters
        System.out.println("11. Longest Substring (No Repeats):");
        
        String str3 = "abcabcbb";
        int longestLen = lengthOfLongestSubstring(str3);
        String longestSub = longestSubstringNoRepeat(str3);
        
        System.out.println("String: " + str3);
        System.out.println("Longest substring: " + longestSub);
        System.out.println("Length: " + longestLen);
        System.out.println();
        
        // 12. Longest Substring with At Most K Distinct
        System.out.println("12. Longest Substring (At Most K Distinct):");
        
        String str4 = "eceba";
        int k = 2;
        int longestK = lengthOfLongestSubstringKDistinct(str4, k);
        
        System.out.println("String: " + str4);
        System.out.println("K: " + k);
        System.out.println("Longest length: " + longestK);
        System.out.println();
        
        // 13. Minimum Window Substring
        System.out.println("13. Minimum Window Substring:");
        
        String s2 = "ADOBECODEBANC";
        String t2 = "ABC";
        String minWindow = minWindow(s2, t2);
        
        System.out.println("String: " + s2);
        System.out.println("Pattern: " + t2);
        System.out.println("Minimum window: " + minWindow);
        System.out.println();
        
        // ============ SUBARRAY SUM PROBLEMS ============
        
        // 14. Subarray Sum Equals K
        System.out.println("14. Subarray Sum Equals K:");
        
        int[] nums6 = {1, 1, 1};
        int k1 = 2;
        int count = subarraySum(nums6, k1);
        
        System.out.println("Array: " + Arrays.toString(nums6));
        System.out.println("K: " + k1);
        System.out.println("Count of subarrays: " + count);
        System.out.println();
        
        // 15. Longest Subarray with Sum K
        System.out.println("15. Longest Subarray with Sum K:");
        
        int[] nums7 = {10, 5, 2, 7, 1, 9};
        int k2 = 15;
        int maxLen = longestSubarraySum(nums7, k2);
        
        System.out.println("Array: " + Arrays.toString(nums7));
        System.out.println("K: " + k2);
        System.out.println("Longest length: " + maxLen);
        System.out.println();
        
        // 16. Subarray with 0 Sum
        System.out.println("16. Subarray with 0 Sum:");
        
        int[] nums8 = {4, 2, -3, 1, 6};
        boolean hasZeroSum = hasZeroSumSubarray(nums8);
        
        System.out.println("Array: " + Arrays.toString(nums8));
        System.out.println("Has zero sum subarray: " + hasZeroSum);
        System.out.println();
        
        // ============ ADVANCED PROBLEMS ============
        
        // 17. Isomorphic Strings
        System.out.println("17. Isomorphic Strings:");
        
        String s3 = "egg";
        String t3 = "add";
        boolean isIso = isIsomorphic(s3, t3);
        
        System.out.println("String 1: " + s3);
        System.out.println("String 2: " + t3);
        System.out.println("Is isomorphic: " + isIso);
        System.out.println();
        
        // 18. Word Pattern
        System.out.println("18. Word Pattern:");
        
        String pattern = "abba";
        String str5 = "dog cat cat dog";
        boolean matches = wordPattern(pattern, str5);
        
        System.out.println("Pattern: " + pattern);
        System.out.println("String: " + str5);
        System.out.println("Matches pattern: " + matches);
        System.out.println();
        
        // 19. Contains Duplicate Within K Distance
        System.out.println("19. Contains Nearby Duplicate:");
        
        int[] nums9 = {1, 2, 3, 1};
        int k3 = 3;
        boolean nearbyDup = containsNearbyDuplicate(nums9, k3);
        
        System.out.println("Array: " + Arrays.toString(nums9));
        System.out.println("K: " + k3);
        System.out.println("Has nearby duplicate: " + nearbyDup);
        System.out.println();
        
        // 20. Longest Consecutive Sequence
        System.out.println("20. Longest Consecutive Sequence:");
        
        int[] nums10 = {100, 4, 200, 1, 3, 2};
        int longest = longestConsecutive(nums10);
        
        System.out.println("Array: " + Arrays.toString(nums10));
        System.out.println("Longest consecutive length: " + longest);
        
        System.out.println("\n=== Hashing Problems Complete ===");
    }
    
    // ============ PROBLEM SOLUTIONS ============
    
    // 1. Two Sum
    static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            
            map.put(nums[i], i);
        }
        
        return new int[]{-1, -1};
    }
    
    // 2. Two Sum - All Pairs
    static List<int[]> twoSumAllPairs(int[] nums, int target) {
        List<int[]> result = new ArrayList<>();
        HashMap<Integer, List<Integer>> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            if (map.containsKey(complement)) {
                for (int j : map.get(complement)) {
                    result.add(new int[]{j, i});
                }
            }
            
            map.putIfAbsent(nums[i], new ArrayList<>());
            map.get(nums[i]).add(i);
        }
        
        return result;
    }
    
    // 3. Three Sum
    static List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);
        
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i-1]) continue;
            
            int left = i + 1, right = nums.length - 1;
            
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                
                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    
                    while (left < right && nums[left] == nums[left+1]) left++;
                    while (left < right && nums[right] == nums[right-1]) right--;
                    
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        
        return result;
    }
    
    // 4. First Non-Repeating Character
    static char firstNonRepeatingChar(String s) {
        LinkedHashMap<Character, Integer> freq = new LinkedHashMap<>();
        
        for (char c : s.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        for (Map.Entry<Character, Integer> entry : freq.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }
        
        return '\0';
    }
    
    // 5. Character Frequency
    static Map<Character, Integer> getCharFrequency(String s) {
        Map<Character, Integer> freq = new HashMap<>();
        
        for (char c : s.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        return freq;
    }
    
    // 6. Most Frequent Element
    static int findMostFrequent(int[] nums) {
        Map<Integer, Integer> freq = new HashMap<>();
        int maxFreq = 0;
        int mostFrequent = nums[0];
        
        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
            
            if (freq.get(num) > maxFreq) {
                maxFreq = freq.get(num);
                mostFrequent = num;
            }
        }
        
        return mostFrequent;
    }
    
    // 7. Majority Element (> n/3)
    static List<Integer> majorityElement(int[] nums) {
        List<Integer> result = new ArrayList<>();
        Map<Integer, Integer> freq = new HashMap<>();
        int threshold = nums.length / 3;
        
        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }
        
        for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
            if (entry.getValue() > threshold) {
                result.add(entry.getKey());
            }
        }
        
        return result;
    }
    
    // 8. Valid Anagram
    static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        
        Map<Character, Integer> freq = new HashMap<>();
        
        for (char c : s.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        for (char c : t.toCharArray()) {
            if (!freq.containsKey(c)) return false;
            freq.put(c, freq.get(c) - 1);
            if (freq.get(c) < 0) return false;
        }
        
        return true;
    }
    
    // 9. Group Anagrams
    static List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        
        for (String str : strs) {
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            
            map.putIfAbsent(key, new ArrayList<>());
            map.get(key).add(str);
        }
        
        return new ArrayList<>(map.values());
    }
    
    // 10. Find Anagrams
    static List<Integer> findAnagrams(String s, String p) {
        List<Integer> result = new ArrayList<>();
        if (s.length() < p.length()) return result;
        
        Map<Character, Integer> pFreq = new HashMap<>();
        Map<Character, Integer> windowFreq = new HashMap<>();
        
        for (char c : p.toCharArray()) {
            pFreq.put(c, pFreq.getOrDefault(c, 0) + 1);
        }
        
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            windowFreq.put(c, windowFreq.getOrDefault(c, 0) + 1);
            
            if (i >= p.length()) {
                char left = s.charAt(i - p.length());
                windowFreq.put(left, windowFreq.get(left) - 1);
                if (windowFreq.get(left) == 0) {
                    windowFreq.remove(left);
                }
            }
            
            if (windowFreq.equals(pFreq)) {
                result.add(i - p.length() + 1);
            }
        }
        
        return result;
    }
    
    // 11. Longest Substring Without Repeating
    static int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int maxLen = 0;
        int start = 0;
        
        for (int end = 0; end < s.length(); end++) {
            char c = s.charAt(end);
            
            if (map.containsKey(c)) {
                start = Math.max(start, map.get(c) + 1);
            }
            
            map.put(c, end);
            maxLen = Math.max(maxLen, end - start + 1);
        }
        
        return maxLen;
    }
    
    static String longestSubstringNoRepeat(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int maxLen = 0;
        int start = 0;
        int maxStart = 0;
        
        for (int end = 0; end < s.length(); end++) {
            char c = s.charAt(end);
            
            if (map.containsKey(c)) {
                start = Math.max(start, map.get(c) + 1);
            }
            
            map.put(c, end);
            
            if (end - start + 1 > maxLen) {
                maxLen = end - start + 1;
                maxStart = start;
            }
        }
        
        return s.substring(maxStart, maxStart + maxLen);
    }
    
    // 12. Longest Substring K Distinct
    static int lengthOfLongestSubstringKDistinct(String s, int k) {
        Map<Character, Integer> map = new HashMap<>();
        int maxLen = 0;
        int start = 0;
        
        for (int end = 0; end < s.length(); end++) {
            char c = s.charAt(end);
            map.put(c, map.getOrDefault(c, 0) + 1);
            
            while (map.size() > k) {
                char left = s.charAt(start);
                map.put(left, map.get(left) - 1);
                if (map.get(left) == 0) {
                    map.remove(left);
                }
                start++;
            }
            
            maxLen = Math.max(maxLen, end - start + 1);
        }
        
        return maxLen;
    }
    
    // 13. Minimum Window Substring
    static String minWindow(String s, String t) {
        if (s.length() < t.length()) return "";
        
        Map<Character, Integer> tFreq = new HashMap<>();
        for (char c : t.toCharArray()) {
            tFreq.put(c, tFreq.getOrDefault(c, 0) + 1);
        }
        
        Map<Character, Integer> windowFreq = new HashMap<>();
        int required = tFreq.size();
        int formed = 0;
        int minLen = Integer.MAX_VALUE;
        int minStart = 0;
        int left = 0;
        
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            windowFreq.put(c, windowFreq.getOrDefault(c, 0) + 1);
            
            if (tFreq.containsKey(c) && 
                windowFreq.get(c).intValue() == tFreq.get(c).intValue()) {
                formed++;
            }
            
            while (left <= right && formed == required) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minStart = left;
                }
                
                char leftChar = s.charAt(left);
                windowFreq.put(leftChar, windowFreq.get(leftChar) - 1);
                
                if (tFreq.containsKey(leftChar) && 
                    windowFreq.get(leftChar).intValue() < tFreq.get(leftChar).intValue()) {
                    formed--;
                }
                
                left++;
            }
        }
        
        return minLen == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLen);
    }
    
    // 14. Subarray Sum
    static int subarraySum(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int sum = 0;
        int count = 0;
        
        for (int num : nums) {
            sum += num;
            
            if (map.containsKey(sum - k)) {
                count += map.get(sum - k);
            }
            
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        
        return count;
    }
    
    // 15. Longest Subarray Sum
    static int longestSubarraySum(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        int sum = 0;
        int maxLen = 0;
        
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            
            if (sum == k) {
                maxLen = i + 1;
            }
            
            if (map.containsKey(sum - k)) {
                maxLen = Math.max(maxLen, i - map.get(sum - k));
            }
            
            map.putIfAbsent(sum, i);
        }
        
        return maxLen;
    }
    
    // 16. Zero Sum Subarray
    static boolean hasZeroSumSubarray(int[] nums) {
        Set<Integer> set = new HashSet<>();
        int sum = 0;
        
        for (int num : nums) {
            sum += num;
            
            if (sum == 0 || set.contains(sum)) {
                return true;
            }
            
            set.add(sum);
        }
        
        return false;
    }
    
    // 17. Isomorphic Strings
    static boolean isIsomorphic(String s, String t) {
        Map<Character, Character> sToT = new HashMap<>();
        Map<Character, Character> tToS = new HashMap<>();
        
        for (int i = 0; i < s.length(); i++) {
            char c1 = s.charAt(i);
            char c2 = t.charAt(i);
            
            if (sToT.containsKey(c1)) {
                if (sToT.get(c1) != c2) return false;
            } else {
                sToT.put(c1, c2);
            }
            
            if (tToS.containsKey(c2)) {
                if (tToS.get(c2) != c1) return false;
            } else {
                tToS.put(c2, c1);
            }
        }
        
        return true;
    }
    
    // 18. Word Pattern
    static boolean wordPattern(String pattern, String s) {
        String[] words = s.split(" ");
        if (pattern.length() != words.length) return false;
        
        Map<Character, String> charToWord = new HashMap<>();
        Map<String, Character> wordToChar = new HashMap<>();
        
        for (int i = 0; i < pattern.length(); i++) {
            char c = pattern.charAt(i);
            String word = words[i];
            
            if (charToWord.containsKey(c)) {
                if (!charToWord.get(c).equals(word)) return false;
            } else {
                charToWord.put(c, word);
            }
            
            if (wordToChar.containsKey(word)) {
                if (wordToChar.get(word) != c) return false;
            } else {
                wordToChar.put(word, c);
            }
        }
        
        return true;
    }
    
    // 19. Contains Nearby Duplicate
    static boolean containsNearbyDuplicate(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(nums[i])) {
                if (i - map.get(nums[i]) <= k) {
                    return true;
                }
            }
            map.put(nums[i], i);
        }
        
        return false;
    }
    
    // 20. Longest Consecutive Sequence
    static int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }
        
        int longest = 0;
        
        for (int num : set) {
            if (!set.contains(num - 1)) {
                int current = num;
                int streak = 1;
                
                while (set.contains(current + 1)) {
                    current++;
                    streak++;
                }
                
                longest = Math.max(longest, streak);
            }
        }
        
        return longest;
    }
}

/**
 * Common Hashing Patterns:
 * 
 * 1. FREQUENCY COUNTING:
 *    - Use HashMap to count occurrences
 *    - Pattern: map.put(key, map.getOrDefault(key, 0) + 1)
 * 
 * 2. TWO SUM PATTERN:
 *    - Store complement in HashMap
 *    - Check if current completes a pair
 * 
 * 3. SLIDING WINDOW + HASH:
 *    - Maintain window using HashMap
 *    - Track character/element frequencies
 * 
 * 4. PREFIX SUM + HASH:
 *    - Store prefix sums in HashMap
 *    - Check for sum - k existence
 * 
 * 5. ANAGRAM DETECTION:
 *    - Sort string as key
 *    - Or use character frequency as key
 * 
 * Time Complexity: O(n) for most operations
 * Space Complexity: O(n) for hash storage
 */
