package practice.dsa.hashing;

/**
 * HASHING PRACTICE SOLUTIONS
 * Complete collection of hashing problems with solutions
 * Difficulty: Easy → Medium → Hard
 */

import java.util.*;

public class HASHING_PRACTICE_SOLUTIONS {

    // ==========================================
    // EASY LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 1: Two Sum (Hash Map)
     * Time: O(n), Space: O(n)
     */
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{-1, -1};
    }

    /**
     * Problem 2: Contains Duplicate
     * Time: O(n), Space: O(n)
     */
    public static boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();

        for (int num : nums) {
            if (set.contains(num)) {
                return true;
            }
            set.add(num);
        }
        return false;
    }

    /**
     * Problem 3: Single Number
     * Time: O(n), Space: O(n)
     */
    public static int singleNumber(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();

        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        for (int num : nums) {
            if (map.get(num) == 1) {
                return num;
            }
        }
        return -1;
    }

    /**
     * Problem 4: Intersection of Two Arrays
     * Time: O(n + m), Space: O(min(n, m))
     */
    public static int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> resultSet = new HashSet<>();

        for (int num : nums1) {
            set1.add(num);
        }

        for (int num : nums2) {
            if (set1.contains(num)) {
                resultSet.add(num);
            }
        }

        int[] result = new int[resultSet.size()];
        int i = 0;
        for (int num : resultSet) {
            result[i++] = num;
        }
        return result;
    }

    /**
     * Problem 5: Happy Number
     * Time: O(log n), Space: O(1)
     */
    public static boolean isHappy(int n) {
        Set<Integer> seen = new HashSet<>();

        while (n != 1 && !seen.contains(n)) {
            seen.add(n);
            n = getSumOfSquares(n);
        }

        return n == 1;
    }

    private static int getSumOfSquares(int n) {
        int sum = 0;
        while (n > 0) {
            int digit = n % 10;
            sum += digit * digit;
            n /= 10;
        }
        return sum;
    }

    /**
     * Problem 6: Isomorphic Strings
     * Time: O(n), Space: O(1)
     */
    public static boolean isIsomorphic(String s, String t) {
        if (s.length() != t.length()) return false;

        Map<Character, Character> mapST = new HashMap<>();
        Map<Character, Character> mapTS = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char c1 = s.charAt(i);
            char c2 = t.charAt(i);

            if (mapST.containsKey(c1)) {
                if (mapST.get(c1) != c2) return false;
            } else {
                mapST.put(c1, c2);
            }

            if (mapTS.containsKey(c2)) {
                if (mapTS.get(c2) != c1) return false;
            } else {
                mapTS.put(c2, c1);
            }
        }
        return true;
    }

    // ==========================================
    // MEDIUM LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 7: Group Anagrams
     * Time: O(n*k log k), Space: O(n*k)
     */
    public static List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();

        for (String str : strs) {
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(str);
        }

        return new ArrayList<>(map.values());
    }

    /**
     * Problem 8: Top K Frequent Elements
     * Time: O(n log k), Space: O(n)
     */
    public static int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // Min-heap to keep track of top k elements
        PriorityQueue<Map.Entry<Integer, Integer>> minHeap =
            new PriorityQueue<>((a, b) -> a.getValue() - b.getValue());

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            minHeap.offer(entry);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }

        int[] result = new int[k];
        for (int i = k - 1; i >= 0; i--) {
            result[i] = minHeap.poll().getKey();
        }
        return result;
    }

    /**
     * Problem 9: 4Sum II
     * Time: O(n²), Space: O(n²)
     */
    public static int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
        Map<Integer, Integer> map = new HashMap<>();

        // Store sum of nums1 and nums2
        for (int a : nums1) {
            for (int b : nums2) {
                map.put(a + b, map.getOrDefault(a + b, 0) + 1);
            }
        }

        int count = 0;
        // Find sum of nums3 and nums4 that equals -(sum of nums1 and nums2)
        for (int c : nums3) {
            for (int d : nums4) {
                count += map.getOrDefault(-(c + d), 0);
            }
        }

        return count;
    }

    /**
     * Problem 10: Longest Consecutive Sequence
     * Time: O(n), Space: O(n)
     */
    public static int longestConsecutive(int[] nums) {
        Set<Integer> numSet = new HashSet<>();
        for (int num : nums) {
            numSet.add(num);
        }

        int longestStreak = 0;

        for (int num : numSet) {
            if (!numSet.contains(num - 1)) {
                int currentNum = num;
                int currentStreak = 1;

                while (numSet.contains(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }

        return longestStreak;
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

        Map<Character, Integer> dictT = new HashMap<>();
        for (char c : t.toCharArray()) {
            dictT.put(c, dictT.getOrDefault(c, 0) + 1);
        }

        int required = dictT.size();
        int formed = 0;
        Map<Character, Integer> windowCounts = new HashMap<>();
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
     * Problem 12: Substring with Concatenation of All Words
     * Time: O(n * m), Space: O(m)
     */
    public static List<Integer> findSubstring(String s, String[] words) {
        List<Integer> result = new ArrayList<>();
        if (s == null || s.length() == 0 || words == null || words.length == 0) {
            return result;
        }

        int wordLength = words[0].length();
        int totalWords = words.length;
        int substringLength = wordLength * totalWords;

        Map<String, Integer> wordCount = new HashMap<>();
        for (String word : words) {
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }

        for (int i = 0; i <= s.length() - substringLength; i++) {
            Map<String, Integer> seen = new HashMap<>();
            int j = 0;

            while (j < totalWords) {
                int wordStart = i + j * wordLength;
                String word = s.substring(wordStart, wordStart + wordLength);

                if (!wordCount.containsKey(word)) break;

                seen.put(word, seen.getOrDefault(word, 0) + 1);

                if (seen.get(word) > wordCount.get(word)) break;

                j++;
            }

            if (j == totalWords) {
                result.add(i);
            }
        }

        return result;
    }

    /**
     * Problem 13: LRU Cache
     * Time: O(1), Space: O(capacity)
     */
    static class LRUCache {
        private Map<Integer, Node> cache;
        private int capacity;
        private Node head, tail;

        static class Node {
            int key, value;
            Node prev, next;
            Node(int key, int value) {
                this.key = key;
                this.value = value;
            }
        }

        public LRUCache(int capacity) {
            this.capacity = capacity;
            cache = new HashMap<>();
            head = new Node(0, 0);
            tail = new Node(0, 0);
            head.next = tail;
            tail.prev = head;
        }

        public int get(int key) {
            if (!cache.containsKey(key)) return -1;
            Node node = cache.get(key);
            remove(node);
            addToFront(node);
            return node.value;
        }

        public void put(int key, int value) {
            if (cache.containsKey(key)) {
                Node node = cache.get(key);
                node.value = value;
                remove(node);
                addToFront(node);
            } else {
                if (cache.size() == capacity) {
                    Node lru = tail.prev;
                    remove(lru);
                    cache.remove(lru.key);
                }
                Node node = new Node(key, value);
                cache.put(key, node);
                addToFront(node);
            }
        }

        private void remove(Node node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }

        private void addToFront(Node node) {
            node.next = head.next;
            node.prev = head;
            head.next.prev = node;
            head.next = node;
        }
    }

    /**
     * Problem 14: Design Underground System
     * Time: O(1) average, Space: O(n)
     */
    static class UndergroundSystem {
        private Map<Integer, CheckInData> checkIns;
        private Map<String, TravelData> travelTimes;

        static class CheckInData {
            String stationName;
            int time;
            CheckInData(String stationName, int time) {
                this.stationName = stationName;
                this.time = time;
            }
        }

        static class TravelData {
            int totalTime;
            int count;
            TravelData(int totalTime, int count) {
                this.totalTime = totalTime;
                this.count = count;
            }
        }

        public UndergroundSystem() {
            checkIns = new HashMap<>();
            travelTimes = new HashMap<>();
        }

        public void checkIn(int id, String stationName, int t) {
            checkIns.put(id, new CheckInData(stationName, t));
        }

        public void checkOut(int id, String stationName, int t) {
            CheckInData checkIn = checkIns.get(id);
            checkIns.remove(id);

            String route = checkIn.stationName + "," + stationName;
            int travelTime = t - checkIn.time;

            TravelData data = travelTimes.getOrDefault(route, new TravelData(0, 0));
            data.totalTime += travelTime;
            data.count++;
            travelTimes.put(route, data);
        }

        public double getAverageTime(String startStation, String endStation) {
            String route = startStation + "," + endStation;
            TravelData data = travelTimes.get(route);
            return (double) data.totalTime / data.count;
        }
    }

    // ==========================================
    // UTILITY METHODS
    // ==========================================

    public static void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }

    // ==========================================
    // TEST METHODS
    // ==========================================

    public static void main(String[] args) {
        System.out.println("=== HASHING PRACTICE SOLUTIONS ===\n");

        // Test Two Sum
        System.out.println("1. Two Sum");
        int[] nums1 = {2, 7, 11, 15};
        int target1 = 9;
        System.out.println("Array: " + Arrays.toString(nums1) + ", Target: " + target1);
        System.out.println("Indices: " + Arrays.toString(twoSum(nums1, target1)));
        System.out.println();

        // Test Contains Duplicate
        System.out.println("2. Contains Duplicate");
        int[] nums2 = {1, 2, 3, 1};
        System.out.println("Array: " + Arrays.toString(nums2));
        System.out.println("Has duplicates: " + containsDuplicate(nums2));
        System.out.println();

        // Test Single Number
        System.out.println("3. Single Number");
        int[] nums3 = {2, 2, 1};
        System.out.println("Array: " + Arrays.toString(nums3));
        System.out.println("Single number: " + singleNumber(nums3));
        System.out.println();

        // Test Group Anagrams
        System.out.println("4. Group Anagrams");
        String[] strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
        System.out.println("Input: " + Arrays.toString(strs));
        List<List<String>> groups = groupAnagrams(strs);
        System.out.println("Grouped: " + groups);
        System.out.println();

        // Test Top K Frequent Elements
        System.out.println("5. Top K Frequent Elements");
        int[] nums5 = {1, 1, 1, 2, 2, 3};
        int k = 2;
        System.out.println("Array: " + Arrays.toString(nums5) + ", K: " + k);
        System.out.println("Top K: " + Arrays.toString(topKFrequent(nums5, k)));
        System.out.println();

        // Test Longest Consecutive Sequence
        System.out.println("6. Longest Consecutive Sequence");
        int[] nums6 = {100, 4, 200, 1, 3, 2};
        System.out.println("Array: " + Arrays.toString(nums6));
        System.out.println("Longest consecutive: " + longestConsecutive(nums6));
        System.out.println();

        // Test LRU Cache
        System.out.println("7. LRU Cache");
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println("Get 1: " + cache.get(1));    // returns 1
        cache.put(3, 3);    // evicts key 2
        System.out.println("Get 2: " + cache.get(2));    // returns -1 (not found)
        cache.put(4, 4);    // evicts key 1
        System.out.println("Get 1: " + cache.get(1));    // returns -1 (not found)
        System.out.println("Get 3: " + cache.get(3));    // returns 3
        System.out.println("Get 4: " + cache.get(4));    // returns 4
        System.out.println();

        // Test Underground System
        System.out.println("8. Underground System");
        UndergroundSystem undergroundSystem = new UndergroundSystem();
        undergroundSystem.checkIn(45, "Leyton", 3);
        undergroundSystem.checkIn(32, "Paradise", 8);
        undergroundSystem.checkIn(27, "Leyton", 10);
        undergroundSystem.checkOut(45, "Waterloo", 15);
        undergroundSystem.checkOut(27, "Waterloo", 20);
        undergroundSystem.checkOut(32, "Cambridge", 22);
        System.out.println("Leyton->Waterloo: " + undergroundSystem.getAverageTime("Leyton", "Waterloo"));
        System.out.println("Paradise->Cambridge: " + undergroundSystem.getAverageTime("Paradise", "Cambridge"));
    }
}