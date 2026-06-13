# 07 — Company-Wise Previous Year Questions

> Comprehensive compilation of actual coding problems, behavioral questions, and system design problems asked by top companies during campus placements (2023–2025). Each problem includes a complete, compilable Java solution.

---

## Table of Contents

1. [FAANG Companies](#1-faang-companies)
   - [Amazon](#amazon)
   - [Google](#google)
   - [Microsoft](#microsoft)
   - [Meta](#meta)
2. [Product-Based India](#2-product-based-india-companies)
   - [Flipkart](#flipkart)
   - [Uber](#uber)
   - [Swiggy / Zomato](#swiggy--zomato)
   - [Ola / Paytm / Others](#ola--paytm--others)
3. [Service-Based Companies](#3-service-based-companies)
   - [TCS NQT / Digital](#tcs-nqt--digital)
   - [Infosys InfyTQ](#infosys-infytq)
   - [Wipro NLTH / Turbo](#wipro-nlth--turbo)
   - [Accenture](#accenture)

---

# 1. FAANG Companies

---

## Amazon

### Problem 1: Two Sum (Amazon, 2024)
**Difficulty:** Easy

**Problem Statement:** Given an array of integers `nums` and an integer `target`, return indices of the two numbers that add up to `target`. Assume exactly one solution exists and you may not use the same element twice.

```java
import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        throw new IllegalArgumentException("No solution found");
    }

    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = twoSum(nums, target);
        System.out.println("Indices: [" + result[0] + ", " + result[1] + "]");
        // Output: Indices: [0, 1]
    }
}
```
**Time:** O(n) | **Space:** O(n)

---

### Problem 2: Longest Substring Without Repeating Characters (Amazon, 2024)
**Difficulty:** Medium

**Problem Statement:** Given a string `s`, find the length of the longest substring without repeating characters.

```java
import java.util.HashMap;
import java.util.Map;

public class LongestSubstring {
    public static int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int maxLen = 0, left = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (map.containsKey(c) && map.get(c) >= left) {
                left = map.get(c) + 1;
            }
            map.put(c, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        String s = "abcabcbb";
        System.out.println("Longest substring length: " + lengthOfLongestSubstring(s));
        // Output: 3 ("abc")
    }
}
```
**Time:** O(n) | **Space:** O(min(m, n)) where m is character set size

---

### Problem 3: Merge Two Sorted Lists (Amazon, 2024)
**Difficulty:** Easy

**Problem Statement:** Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

```java
class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public class MergeTwoLists {
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        curr.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
        ListNode l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        ListNode result = mergeTwoLists(l1, l2);
        System.out.print("Merged list: ");
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;
        }
        // Output: 1 1 2 3 4 4
    }
}
```
**Time:** O(n + m) | **Space:** O(1)

---

### Problem 4: Kth Largest Element in an Array (Amazon, 2024)
**Difficulty:** Medium

**Problem Statement:** Given an integer array `nums` and an integer `k`, return the k-th largest element in the array. Note that it is the k-th largest element in sorted order, not the k-th distinct element.

```java
import java.util.PriorityQueue;

public class KthLargest {
    public static int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        return minHeap.peek();
    }

    public static void main(String[] args) {
        int[] nums = {3, 2, 1, 5, 6, 4};
        int k = 2;
        System.out.println("Kth largest: " + findKthLargest(nums, k));
        // Output: 5
    }
}
```
**Time:** O(n log k) | **Space:** O(k)

---

### Problem 5: Binary Tree Level Order Traversal (Amazon, 2023)
**Difficulty:** Medium

**Problem Statement:** Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).

```java
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

public class LevelOrderTraversal {
    public static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                level.add(node.val);
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            result.add(level);
        }
        return result;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        System.out.println("Level order: " + levelOrder(root));
        // Output: [[3], [9, 20], [15, 7]]
    }
}
```
**Time:** O(n) | **Space:** O(n)

---

### Problem 6: Number of Islands (Amazon, 2024)
**Difficulty:** Medium

**Problem Statement:** Given an m x n 2D binary grid `grid` where '1' represents land and '0' represents water, count the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically.

```java
public class NumberOfIslands {
    public static int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;
        int count = 0, m = grid.length, n = grid[0].length;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '1') {
                    count++;
                    dfs(grid, i, j, m, n);
                }
            }
        }
        return count;
    }

    private static void dfs(char[][] grid, int i, int j, int m, int n) {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == '0') return;
        grid[i][j] = '0';
        dfs(grid, i + 1, j, m, n);
        dfs(grid, i - 1, j, m, n);
        dfs(grid, i, j + 1, m, n);
        dfs(grid, i, j - 1, m, n);
    }

    public static void main(String[] args) {
        char[][] grid = {
            {'1','1','1','1','0'},
            {'1','1','0','1','0'},
            {'1','1','0','0','0'},
            {'0','0','0','0','0'}
        };
        System.out.println("Number of islands: " + numIslands(grid));
        // Output: 1
    }
}
```
**Time:** O(m * n) | **Space:** O(m * n) worst-case recursion stack

---

### Problem 7: Best Time to Buy and Sell Stock (Amazon, 2024)
**Difficulty:** Easy

**Problem Statement:** You are given an array `prices` where `prices[i]` is the price of a given stock on day i. You want to maximize your profit by choosing a single day to buy and a different day in the future to sell. Return the maximum profit, or 0 if no profit is possible.

```java
public class BestTimeToBuy {
    public static int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    }

    public static void main(String[] args) {
        int[] prices = {7, 1, 5, 3, 6, 4};
        System.out.println("Max profit: " + maxProfit(prices));
        // Output: 5
    }
}
```
**Time:** O(n) | **Space:** O(1)

---

### Problem 8: Coin Change (Amazon, 2023)
**Difficulty:** Medium

**Problem Statement:** You are given an integer array `coins` representing different denominations and an integer `amount` representing a total amount of money. Return the fewest number of coins needed to make up that amount. If that amount cannot be made, return -1.

```java
import java.util.Arrays;

public class CoinChange {
    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (coin <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }

    public static void main(String[] args) {
        int[] coins = {1, 2, 5};
        int amount = 11;
        System.out.println("Min coins: " + coinChange(coins, amount));
        // Output: 3 (5 + 5 + 1)
    }
}
```
**Time:** O(amount * coins) | **Space:** O(amount)

---

### Problem 9: LRU Cache (Amazon, 2024)
**Difficulty:** Medium

**Problem Statement:** Design a data structure that follows the Least Recently Used (LRU) cache constraint. Implement `LRUCache` class with `get(key)` and `put(key, value)` in O(1) average time.

```java
import java.util.HashMap;
import java.util.Map;

class LRUCache {
    class Node {
        int key, value;
        Node prev, next;
        Node(int key, int value) { this.key = key; this.value = value; }
    }

    private final int capacity;
    private final Map<Integer, Node> map;
    private final Node head, tail;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        map = new HashMap<>();
        head = new Node(0, 0);
        tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }

    public int get(int key) {
        Node node = map.get(key);
        if (node == null) return -1;
        remove(node);
        insert(node);
        return node.value;
    }

    public void put(int key, int value) {
        if (map.containsKey(key)) {
            remove(map.get(key));
        }
        if (map.size() == capacity) {
            remove(tail.prev);
        }
        insert(new Node(key, value));
    }

    private void insert(Node node) {
        map.put(node.key, node);
        node.next = head.next;
        node.prev = head;
        head.next.prev = node;
        head.next = node;
    }

    private void remove(Node node) {
        map.remove(node.key);
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
}

public class LRUCacheDemo {
    public static void main(String[] args) {
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println("Get 1: " + cache.get(1));    // Output: 1
        cache.put(3, 3);                                  // evicts key 2
        System.out.println("Get 2: " + cache.get(2));    // Output: -1
        cache.put(4, 4);                                  // evicts key 1
        System.out.println("Get 1: " + cache.get(1));    // Output: -1
        System.out.println("Get 3: " + cache.get(3));    // Output: 3
        System.out.println("Get 4: " + cache.get(4));    // Output: 4
    }
}
```
**Time:** O(1) per operation | **Space:** O(capacity)

---

### Problem 10: Word Ladder (Amazon, 2023)
**Difficulty:** Hard

**Problem Statement:** Given two words `beginWord` and `endWord`, and a dictionary `wordList`, return the length of the shortest transformation sequence from beginWord to endWord such that only one letter can be changed at a time and each transformed word must exist in the wordList.

```java
import java.util.*;

public class WordLadder {
    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> set = new HashSet<>(wordList);
        if (!set.contains(endWord)) return 0;
        Queue<String> queue = new LinkedList<>();
        queue.offer(beginWord);
        int level = 1;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                String word = queue.poll();
                char[] chars = word.toCharArray();
                for (int j = 0; j < chars.length; j++) {
                    char original = chars[j];
                    for (char c = 'a'; c <= 'z'; c++) {
                        chars[j] = c;
                        String newWord = new String(chars);
                        if (newWord.equals(endWord)) return level + 1;
                        if (set.contains(newWord)) {
                            set.remove(newWord);
                            queue.offer(newWord);
                        }
                    }
                    chars[j] = original;
                }
            }
            level++;
        }
        return 0;
    }

    public static void main(String[] args) {
        String beginWord = "hit", endWord = "cog";
        List<String> wordList = Arrays.asList("hot","dot","dog","lot","log","cog");
        System.out.println("Shortest transformation length: " + ladderLength(beginWord, endWord, wordList));
        // Output: 5 (hit -> hot -> dot -> dog -> cog)
    }
}
```
**Time:** O(M^2 * N) where M is word length, N is wordList size | **Space:** O(M * N)

---

### Amazon Leadership Principles — Behavioral Questions

#### Q1: Tell me about a time you took ownership of a problem outside your scope. (Ownership)
**STAR Answer:**
- **Situation:** During my internship, our team's CI/CD pipeline was failing intermittently, blocking all developer deployments.
- **Task:** Although I was a frontend intern, I took ownership of diagnosing the pipeline issue.
- **Action:** I analyzed the Jenkins logs, identified a disk space issue in the build agent, wrote a cleanup script, and automated it as a cron job. I also documented the RCA and shared it with the DevOps team.
- **Result:** Pipeline stability went from 60% to 98%, unblocking 15+ developers. The script was adopted into the team's standard build agent configuration.

#### Q2: Describe a time you had to make a decision with incomplete information. (Bias for Action)
**STAR Answer:**
- **Situation:** As a project lead for a college capstone, we had 3 days to submit a working prototype but our third-party API provider had not responded about rate limits.
- **Task:** I needed to decide whether to proceed with the API or build a mock.
- **Action:** I analyzed the API documentation for typical rate limits, decided to implement a caching layer with a mock fallback, and communicated this decision to the team.
- **Result:** We submitted on time. The API rate limit was indeed restrictive, and our caching layer became a core feature.

#### Q3: Give an example of a goal you set and how you achieved it. (Deliver Results)
**STAR Answer:**
- **Situation:** In a hackathon, our team aimed to build a real-time collaborative editor in 24 hours.
- **Task:** My personal goal was to implement Operational Transformation (OT) for conflict-free editing.
- **Action:** I studied the OT algorithm overnight, implemented a simplified version with WebSockets, and tested it iteratively with the team.
- **Result:** Our editor supported 5 concurrent users with zero document corruption. We won first place.

#### Q4: Tell me about a time you disagreed with a teammate. (Have Backbone; Disagree and Commit)
**STAR Answer:**
- **Situation:** During a group project, a teammate insisted on using a NoSQL database, but I believed a relational database was more appropriate for our structured financial data.
- **Task:** I needed to resolve the disagreement without slowing progress.
- **Action:** I researched both options, prepared a comparison table showing query patterns and data relationships, and presented it to the team. After discussion, we agreed on PostgreSQL, and I fully committed to the decision.
- **Result:** The database performed well for all queries, and the teammate appreciated the evidence-based approach.

#### Q5: Describe a time you invented something or simplified a process. (Invent and Simplify)
**STAR Answer:**
- **Situation:** At a college event, manual attendee check-in was causing 30-minute queues.
- **Task:** I needed to design a faster check-in system.
- **Action:** I built a QR-code-based check-in mobile app using React Native and a Node.js backend. Attendees received QR codes via email, and volunteers scanned them at entry.
- **Result:** Check-in time dropped from 30 minutes to under 2 minutes, and the system was reused for 4 subsequent events.

---

## Google

### Problem 1: Two Sum — Sorted Input (Google, 2024)
**Difficulty:** Medium

**Problem Statement:** Given a 1-indexed array of integers sorted in non-decreasing order, find two numbers that add up to a specific target number. Return the indices as a 1-indexed array.

```java
public class TwoSumSorted {
    public static int[] twoSum(int[] numbers, int target) {
        int left = 0, right = numbers.length - 1;
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) {
                return new int[]{left + 1, right + 1};
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return new int[]{-1, -1};
    }

    public static void main(String[] args) {
        int[] numbers = {2, 7, 11, 15};
        int target = 9;
        int[] result = twoSum(numbers, target);
        System.out.println("Indices: [" + result[0] + ", " + result[1] + "]");
        // Output: [1, 2]
    }
}
```
**Time:** O(n) | **Space:** O(1)

---

### Problem 2: Merge Intervals (Google, 2024)
**Difficulty:** Medium

**Problem Statement:** Given an array of intervals where `intervals[i] = [start, end]`, merge all overlapping intervals and return an array of non-overlapping intervals.

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MergeIntervals {
    public static int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) return intervals;
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        List<int[]> result = new ArrayList<>();
        int[] current = intervals[0];
        result.add(current);
        for (int[] interval : intervals) {
            if (interval[0] <= current[1]) {
                current[1] = Math.max(current[1], interval[1]);
            } else {
                current = interval;
                result.add(current);
            }
        }
        return result.toArray(new int[result.size()][]);
    }

    public static void main(String[] args) {
        int[][] intervals = {{1,3},{2,6},{8,10},{15,18}};
        int[][] merged = merge(intervals);
        System.out.print("Merged: ");
        for (int[] interval : merged) {
            System.out.print(Arrays.toString(interval) + " ");
        }
        // Output: [1, 6] [8, 10] [15, 18]
    }
}
```
**Time:** O(n log n) | **Space:** O(n)

---

### Problem 3: Longest Increasing Path in a Matrix (Google, 2024)
**Difficulty:** Hard

**Problem Statement:** Given an m x n integer matrix, return the length of the longest increasing path. You can move in four directions (up, down, left, right) but not diagonally.

```java
public class LongestIncreasingPath {
    private static final int[][] DIRS = {{0,1},{0,-1},{1,0},{-1,0}};

    public static int longestIncreasingPath(int[][] matrix) {
        if (matrix == null || matrix.length == 0) return 0;
        int m = matrix.length, n = matrix[0].length;
        int[][] cache = new int[m][n];
        int max = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                max = Math.max(max, dfs(matrix, i, j, cache, m, n));
            }
        }
        return max;
    }

    private static int dfs(int[][] matrix, int i, int j, int[][] cache, int m, int n) {
        if (cache[i][j] != 0) return cache[i][j];
        int max = 1;
        for (int[] dir : DIRS) {
            int ni = i + dir[0], nj = j + dir[1];
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && matrix[ni][nj] > matrix[i][j]) {
                max = Math.max(max, 1 + dfs(matrix, ni, nj, cache, m, n));
            }
        }
        cache[i][j] = max;
        return max;
    }

    public static void main(String[] args) {
        int[][] matrix = {{9,9,4},{6,6,8},{2,1,1}};
        System.out.println("Longest increasing path: " + longestIncreasingPath(matrix));
        // Output: 4 (1 -> 2 -> 6 -> 9)
    }
}
```
**Time:** O(m * n) | **Space:** O(m * n)

---

### Problem 4: Serialize and Deserialize Binary Tree (Google, 2023)
**Difficulty:** Hard

**Problem Statement:** Design an algorithm to serialize a binary tree into a string and deserialize the string back into the tree.

```java
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

class Codec {
    private static final String SEP = ",";
    private static final String NULL = "null";

    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        serializeHelper(root, sb);
        return sb.toString();
    }

    private void serializeHelper(TreeNode root, StringBuilder sb) {
        if (root == null) {
            sb.append(NULL).append(SEP);
            return;
        }
        sb.append(root.val).append(SEP);
        serializeHelper(root.left, sb);
        serializeHelper(root.right, sb);
    }

    public TreeNode deserialize(String data) {
        Queue<String> queue = new LinkedList<>(Arrays.asList(data.split(SEP)));
        return deserializeHelper(queue);
    }

    private TreeNode deserializeHelper(Queue<String> queue) {
        String val = queue.poll();
        if (val.equals(NULL)) return null;
        TreeNode node = new TreeNode(Integer.parseInt(val));
        node.left = deserializeHelper(queue);
        node.right = deserializeHelper(queue);
        return node;
    }
}

public class CodecDemo {
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);

        Codec codec = new Codec();
        String serialized = codec.serialize(root);
        System.out.println("Serialized: " + serialized);
        TreeNode deserialized = codec.deserialize(serialized);
        System.out.println("Deserialized root: " + deserialized.val);
        // Serialized: 1,2,null,null,3,4,null,null,5,null,null,
    }
}
```
**Time:** O(n) | **Space:** O(n)

---

### Problem 5: Group Anagrams (Google, 2024)
**Difficulty:** Medium

**Problem Statement:** Given an array of strings `strs`, group the anagrams together. An anagram is a word formed by rearranging the letters of another word.

```java
import java.util.*;

public class GroupAnagrams {
    public static List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        for (String s : strs) {
            char[] chars = s.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(map.values());
    }

    public static void main(String[] args) {
        String[] strs = {"eat","tea","tan","ate","nat","bat"};
        System.out.println("Grouped anagrams: " + groupAnagrams(strs));
        // Output: [[eat, tea, ate], [tan, nat], [bat]]
    }
}
```
**Time:** O(n * k log k) where k is max string length | **Space:** O(n * k)

---

### Problem 6: Maximum Subarray (Kadane's Algorithm) (Google, 2024)
**Difficulty:** Medium

**Problem Statement:** Given an integer array `nums`, find the contiguous subarray (containing at least one number) that has the largest sum and return its sum.

```java
public class MaximumSubarray {
    public static int maxSubArray(int[] nums) {
        int maxSoFar = nums[0], maxEndingHere = nums[0];
        for (int i = 1; i < nums.length; i++) {
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    public static void main(String[] args) {
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Maximum subarray sum: " + maxSubArray(nums));
        // Output: 6 ([4, -1, 2, 1])
    }
}
```
**Time:** O(n) | **Space:** O(1)

---

### Problem 7: Minimum Window Substring (Google, 2023)
**Difficulty:** Hard

**Problem Statement:** Given two strings `s` and `t`, return the minimum window substring of `s` that contains all characters of `t`. If no such window exists, return empty string.

```java
import java.util.HashMap;
import java.util.Map;

public class MinWindowSubstring {
    public static String minWindow(String s, String t) {
        Map<Character, Integer> map = new HashMap<>();
        for (char c : t.toCharArray()) map.put(c, map.getOrDefault(c, 0) + 1);
        int left = 0, minLeft = 0, minLen = Integer.MAX_VALUE, count = t.length();
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (map.containsKey(c)) {
                map.put(c, map.get(c) - 1);
                if (map.get(c) >= 0) count--;
            }
            while (count == 0) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minLeft = left;
                }
                char leftChar = s.charAt(left);
                if (map.containsKey(leftChar)) {
                    map.put(leftChar, map.get(leftChar) + 1);
                    if (map.get(leftChar) > 0) count++;
                }
                left++;
            }
        }
        return minLen == Integer.MAX_VALUE ? "" : s.substring(minLeft, minLeft + minLen);
    }

    public static void main(String[] args) {
        String s = "ADOBECODEBANC", t = "ABC";
        System.out.println("Min window: '" + minWindow(s, t) + "'");
        // Output: "BANC"
    }
}
```
**Time:** O(n) | **Space:** O(m) where m is character set of t

---

### Problem 8: Find Median from Data Stream (Google, 2024)
**Difficulty:** Hard

**Problem Statement:** Implement a `MedianFinder` class that supports adding integers and finding the median of all added numbers.

```java
import java.util.PriorityQueue;

class MedianFinder {
    private final PriorityQueue<Integer> maxHeap; // left half
    private final PriorityQueue<Integer> minHeap; // right half

    public MedianFinder() {
        maxHeap = new PriorityQueue<>((a, b) -> b - a);
        minHeap = new PriorityQueue<>();
    }

    public void addNum(int num) {
        maxHeap.offer(num);
        minHeap.offer(maxHeap.poll());
        if (maxHeap.size() < minHeap.size()) {
            maxHeap.offer(minHeap.poll());
        }
    }

    public double findMedian() {
        if (maxHeap.size() > minHeap.size()) {
            return maxHeap.peek();
        }
        return (maxHeap.peek() + minHeap.peek()) / 2.0;
    }
}

public class MedianFinderDemo {
    public static void main(String[] args) {
        MedianFinder mf = new MedianFinder();
        mf.addNum(1);
        mf.addNum(2);
        System.out.println("Median: " + mf.findMedian()); // 1.5
        mf.addNum(3);
        System.out.println("Median: " + mf.findMedian()); // 2.0
    }
}
```
**Time:** O(log n) per add, O(1) per find | **Space:** O(n)

---

### Googleyness — Behavioral Questions

#### Q1: Tell me about a time you had to lead a team without formal authority.
**Answer:** During a university project, I noticed our team was falling behind on a database migration task. I organized a quick knowledge-sharing session on the migration approach, volunteered to write the core migration script, and set up daily stand-up check-ins. By demonstrating expertise and initiative rather than demanding authority, the team naturally followed. We completed the migration two days ahead of schedule.

#### Q2: Describe a time you failed and what you learned from it.
**Answer:** In my sophomore year, I attempted to build a full-stack application without proper requirements gathering. I spent two weeks building features the user never needed. The failure taught me to validate assumptions early — write user stories, create wireframes, and get user feedback before writing code. I now apply this approach to every project, starting with a simple prototype or MVP.

#### Q3: How do you handle ambiguity when there are no clear requirements?
**Answer:** I break the problem into smaller pieces and research analogous solutions. For example, during an internship, I was asked to "improve API response times" without specific targets. I first instrumented the API to gather latency data, identified the slowest endpoints, benchmarked against industry standards for each operation type, and set concrete targets (p95 < 200ms for reads). I then iterated on optimizations, measuring at each step.

---

### Google SDE-1/2 System Design Questions

#### Q1: Design a URL Shortener (like bit.ly)
**Key considerations:**
- **Hash generation:** Base62 encoding of a unique ID (counter + distributed ZooKeeper/Redis)
- **Redirection:** 301 redirect for permanent URLs, store mapping in distributed DB
- **Scale:** 100M URLs/month, 3K writes/sec, 33K reads/sec
- **DB choice:** Cassandra or Redis for fast key-value lookups
- **Cache:** Redis cache for hot URLs (LRU eviction)

#### Q2: Design Google Search Autocomplete
**Key considerations:**
- **Trie data structure:** Each node stores frequency count
- **Top-k suggestions:** Store top 5 at each trie node for O(1) retrieval
- **Fuzzy matching:** Edit distance (Levenshtein) for typos
- **Ranking:** Frequency + recency + personalization
- **Backend:** MapReduce for offline frequency aggregation from search logs

#### Q3: Design WhatsApp Chat System
**Key considerations:**
- **WebSocket connections:** Long-lived persistent connections via load balancers
- **Message storage:** Time-series DB (Cassandra) partitioned by chat_id
- **Delivery semantics:** At-least-once delivery with ACK mechanism
- **Offline messages:** Stored in DB, pushed on reconnect
- **Group chats:** Fan-out on write for small groups, fan-out on read for large groups

---

## Microsoft

### Problem 1: Reverse Linked List (Microsoft, 2024)
**Difficulty:** Easy

**Problem Statement:** Reverse a singly linked list and return the reversed list.

```java
public class ReverseLinkedList {
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        ListNode reversed = reverseList(head);
        System.out.print("Reversed: ");
        while (reversed != null) {
            System.out.print(reversed.val + " ");
            reversed = reversed.next;
        }
        // Output: 5 4 3 2 1
    }
}
```
**Time:** O(n) | **Space:** O(1)

---

### Problem 2: Valid Parentheses (Microsoft, 2024)
**Difficulty:** Easy

**Problem Statement:** Given a string containing just the characters '(', ')', '{', '}', '[', ']', determine if the input string is valid. Brackets must close in the correct order.

```java
import java.util.Stack;

public class ValidParentheses {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        System.out.println("(){}[] : " + isValid("(){}[]"));   // true
        System.out.println("([)]   : " + isValid("([)]"));     // false
        System.out.println("{[]}   : " + isValid("{[]}"));     // true
    }
}
```
**Time:** O(n) | **Space:** O(n)

---

### Problem 3: Longest Palindromic Substring (Microsoft, 2024)
**Difficulty:** Medium

**Problem Statement:** Given a string `s`, return the longest palindromic substring in `s`.

```java
public class LongestPalindrome {
    private static int start = 0, maxLen = 0;

    public static String longestPalindrome(String s) {
        if (s == null || s.length() < 2) return s;
        start = 0; maxLen = 0;
        for (int i = 0; i < s.length(); i++) {
            expand(s, i, i);     // odd length
            expand(s, i, i + 1); // even length
        }
        return s.substring(start, start + maxLen);
    }

    private static void expand(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        int len = right - left - 1;
        if (len > maxLen) {
            maxLen = len;
            start = left + 1;
        }
    }

    public static void main(String[] args) {
        String s = "babad";
        System.out.println("Longest palindrome: " + longestPalindrome(s));
        // Output: "bab" or "aba"
    }
}
```
**Time:** O(n^2) | **Space:** O(1)

---

### Problem 4: Set Matrix Zeroes (Microsoft, 2023)
**Difficulty:** Medium

**Problem Statement:** Given an m x n integer matrix, if an element is 0, set its entire row and column to 0 in-place.

```java
import java.util.Arrays;

public class SetMatrixZeroes {
    public static void setZeroes(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        boolean firstRow = false, firstCol = false;
        for (int j = 0; j < n; j++) if (matrix[0][j] == 0) firstRow = true;
        for (int i = 0; i < m; i++) if (matrix[i][0] == 0) firstCol = true;
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;
            }
        }
        if (firstRow) for (int j = 0; j < n; j++) matrix[0][j] = 0;
        if (firstCol) for (int i = 0; i < m; i++) matrix[i][0] = 0;
    }

    public static void main(String[] args) {
        int[][] matrix = {{1,1,1},{1,0,1},{1,1,1}};
        setZeroes(matrix);
        System.out.println("Result: " + Arrays.deepToString(matrix));
        // Output: [[1,0,1],[0,0,0],[1,0,1]]
    }
}
```
**Time:** O(m * n) | **Space:** O(1)

---

### Problem 5: Number of Provinces (Microsoft, 2024)
**Difficulty:** Medium

**Problem Statement:** There are n cities. Some are connected directly. A province is a group of directly or indirectly connected cities. Return the total number of provinces.

```java
public class NumberOfProvinces {
    public static int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        boolean[] visited = new boolean[n];
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                count++;
                dfs(isConnected, visited, i, n);
            }
        }
        return count;
    }

    private static void dfs(int[][] isConnected, boolean[] visited, int i, int n) {
        visited[i] = true;
        for (int j = 0; j < n; j++) {
            if (isConnected[i][j] == 1 && !visited[j]) {
                dfs(isConnected, visited, j, n);
            }
        }
    }

    public static void main(String[] args) {
        int[][] isConnected = {{1,1,0},{1,1,0},{0,0,1}};
        System.out.println("Provinces: " + findCircleNum(isConnected));
        // Output: 2
    }
}
```
**Time:** O(n^2) | **Space:** O(n)

---

### Problem 6: Alien Dictionary (Microsoft, 2023)
**Difficulty:** Hard

**Problem Statement:** Given a sorted dictionary of an alien language, find the order of characters in the alien alphabet.

```java
import java.util.*;

public class AlienDictionary {
    public static String alienOrder(String[] words) {
        Map<Character, Set<Character>> graph = new HashMap<>();
        int[] inDegree = new int[26];
        for (String word : words) {
            for (char c : word.toCharArray()) graph.putIfAbsent(c, new HashSet<>());
        }
        for (int i = 0; i < words.length - 1; i++) {
            String w1 = words[i], w2 = words[i + 1];
            int minLen = Math.min(w1.length(), w2.length());
            boolean found = false;
            for (int j = 0; j < minLen; j++) {
                char c1 = w1.charAt(j), c2 = w2.charAt(j);
                if (c1 != c2) {
                    if (!graph.get(c1).contains(c2)) {
                        graph.get(c1).add(c2);
                        inDegree[c2 - 'a']++;
                    }
                    found = true;
                    break;
                }
            }
            if (!found && w1.length() > w2.length()) return "";
        }
        Queue<Character> queue = new LinkedList<>();
        for (char c : graph.keySet()) {
            if (inDegree[c - 'a'] == 0) queue.offer(c);
        }
        StringBuilder sb = new StringBuilder();
        while (!queue.isEmpty()) {
            char c = queue.poll();
            sb.append(c);
            for (char neighbor : graph.get(c)) {
                if (--inDegree[neighbor - 'a'] == 0) queue.offer(neighbor);
            }
        }
        return sb.length() == graph.size() ? sb.toString() : "";
    }

    public static void main(String[] args) {
        String[] words = {"wrt","wrf","er","ett","rftt"};
        System.out.println("Alien order: '" + alienOrder(words) + "'");
        // Output: "wertf"
    }
}
```
**Time:** O(C) where C is total characters | **Space:** O(1) since alphabet fixed at 26

---

### Microsoft ASK (Ability, Skills, Knowledge) — Behavioral

#### Q1: Tell me about a time you had to quickly learn a new technology to complete a project.
**Answer:** For a college project, I needed to implement real-time WebSocket communication for a chat app, but I only knew REST APIs. I spent 48 hours learning WebSocket protocol fundamentals, reading Spring WebSocket documentation, and building a prototype. I successfully integrated the feature and later taught the concept to my teammates. This experience taught me that structured learning — starting with fundamentals, then building a minimal working example — is more effective than diving into advanced tutorials.

#### Q2: Describe a situation where you had to convince others to adopt your approach.
**Answer:** During a hackathon, I proposed using Kotlin instead of Java for Android development to leverage null safety features. Teammates were hesitant since nobody had used Kotlin before. I built a small feature in both languages, showing that Kotlin reduced boilerplate by 40% and prevented NPEs at compile time. The team agreed, and we delivered a crash-free app that won "Best Technical Implementation."

#### Q3: Tell me about your biggest technical achievement.
**Answer:** I built a custom load-testing framework for our university's placement portal, which had crashed during previous placement drives. The framework simulated 500 concurrent users, identified SQL connection pool exhaustion as the bottleneck, and suggested connection pool sizing. After implementing the fix, the portal handled 1000+ concurrent users during the next placement drive without any downtime. I open-sourced the framework and it has 50+ GitHub stars.

---

### Microsoft Design Questions (SDE-1/2)

#### Q1: Design a Distributed Job Scheduler
- **Core entities:** Job, Task, Worker, Schedule
- **Storage:** Use a queue (RabbitMQ/Kafka) for task distribution, DB for job metadata
- **Scheduling:** Cron-based using a priority queue in memory; persistence via DB
- **Fault tolerance:** Heartbeat mechanism; failed tasks are re-queued with retry count
- **Scale-out:** Workers are stateless and horizontally scalable

#### Q2: Design an Online Code Evaluation Platform
- **Architecture:** API Gateway → Submission Service → Sandbox (Docker containers per language)
- **Isolation:** Each code submission runs in a resource-constrained Docker container with 256MB RAM limit and 5s timeout
- **Queue:** Kafka for submission queue, with consumer workers pulling from the queue
- **Results:** Stored in database, pushed to client via WebSocket
- **Security:** No network access for sandbox, restricted system calls via seccomp

---

## Meta

### Problem 1: Valid Palindrome (Meta, 2024)
**Difficulty:** Easy

**Problem Statement:** Given a string `s`, determine if it is a palindrome considering only alphanumeric characters and ignoring cases.

```java
public class ValidPalindrome {
    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) return false;
            left++;
            right--;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // true
        System.out.println(isPalindrome("race a car"));                     // false
    }
}
```
**Time:** O(n) | **Space:** O(1)

---

### Problem 2: Binary Search Tree Iterator (Meta, 2024)
**Difficulty:** Medium

**Problem Statement:** Implement an iterator over a BST that returns nodes in ascending order. `next()` returns the next smallest element, and `hasNext()` returns whether a next element exists.

```java
import java.util.Stack;

class BSTIterator {
    private final Stack<TreeNode> stack;

    public BSTIterator(TreeNode root) {
        stack = new Stack<>();
        pushLeft(root);
    }

    private void pushLeft(TreeNode node) {
        while (node != null) {
            stack.push(node);
            node = node.left;
        }
    }

    public int next() {
        TreeNode node = stack.pop();
        pushLeft(node.right);
        return node.val;
    }

    public boolean hasNext() {
        return !stack.isEmpty();
    }
}

public class BSTIteratorDemo {
    public static void main(String[] args) {
        TreeNode root = new TreeNode(7);
        root.left = new TreeNode(3);
        root.right = new TreeNode(15);
        root.right.left = new TreeNode(9);
        root.right.right = new TreeNode(20);

        BSTIterator it = new BSTIterator(root);
        System.out.print("In-order: ");
        while (it.hasNext()) {
            System.out.print(it.next() + " ");
        }
        // Output: 3 7 9 15 20
    }
}
```
**Time:** O(1) average for next(), O(1) for hasNext() | **Space:** O(h) where h is tree height

---

### Problem 3: Product of Array Except Self (Meta, 2024)
**Difficulty:** Medium

**Problem Statement:** Given an integer array `nums`, return an array `output` such that `output[i]` is the product of all elements except `nums[i]`. Must run in O(n) without division.

```java
import java.util.Arrays;

public class ProductExceptSelf {
    public static int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        result[0] = 1;
        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }
        int suffix = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4};
        System.out.println("Result: " + Arrays.toString(productExceptSelf(nums)));
        // Output: [24, 12, 8, 6]
    }
}
```
**Time:** O(n) | **Space:** O(1) excluding output

---

### Problem 4: Binary Tree Right Side View (Meta, 2023)
**Difficulty:** Medium

**Problem Statement:** Given the root of a binary tree, imagine yourself standing on the right side of it. Return the values of the nodes you can see ordered from top to bottom.

```java
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class RightSideView {
    public static List<Integer> rightSideView(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null) return result;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                if (i == size - 1) result.add(node.val);
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.right = new TreeNode(5);
        root.right.right = new TreeNode(4);
        System.out.println("Right side view: " + rightSideView(root));
        // Output: [1, 3, 4]
    }
}
```
**Time:** O(n) | **Space:** O(n)

---

### Problem 5: Accounts Merge (Meta, 2024)
**Difficulty:** Medium

**Problem Statement:** Given a list of accounts where each element is [name, email1, email2, ...], merge accounts that share at least one common email. Return merged accounts with unique sorted emails.

```java
import java.util.*;

public class AccountsMerge {
    public static List<List<String>> accountsMerge(List<List<String>> accounts) {
        Map<String, String> parent = new HashMap<>();
        Map<String, String> owner = new HashMap<>();
        Map<String, TreeSet<String>> unions = new HashMap<>();

        for (List<String> account : accounts) {
            String name = account.get(0);
            for (int i = 1; i < account.size(); i++) {
                parent.putIfAbsent(account.get(i), account.get(i));
                owner.put(account.get(i), name);
            }
        }

        for (List<String> account : accounts) {
            String firstEmail = account.get(1);
            for (int i = 2; i < account.size(); i++) {
                union(parent, firstEmail, account.get(i));
            }
        }

        for (String email : parent.keySet()) {
            String root = find(parent, email);
            unions.computeIfAbsent(root, k -> new TreeSet<>()).add(email);
        }

        List<List<String>> result = new ArrayList<>();
        for (String root : unions.keySet()) {
            List<String> merged = new ArrayList<>(unions.get(root));
            merged.add(0, owner.get(root));
            result.add(merged);
        }
        return result;
    }

    private static String find(Map<String, String> parent, String s) {
        if (!parent.get(s).equals(s)) parent.put(s, find(parent, parent.get(s)));
        return parent.get(s);
    }

    private static void union(Map<String, String> parent, String a, String b) {
        String ra = find(parent, a), rb = find(parent, b);
        if (!ra.equals(rb)) parent.put(rb, ra);
    }

    public static void main(String[] args) {
        List<List<String>> accounts = Arrays.asList(
            Arrays.asList("John","john1@mail.com","john2@mail.com"),
            Arrays.asList("John","john1@mail.com","john3@mail.com"),
            Arrays.asList("Mary","mary@mail.com")
        );
        System.out.println(accountsMerge(accounts));
        // [[John, john1@mail.com, john2@mail.com, john3@mail.com], [Mary, mary@mail.com]]
    }
}
```
**Time:** O(N * alpha(N)) | **Space:** O(N)

---

### Problem 6: Random Pick with Weight (Meta, 2023)
**Difficulty:** Medium

**Problem Statement:** Given an array of positive integers `w` where `w[i]` describes the weight of index i, implement a function that randomly picks an index proportional to its weight.

```java
import java.util.Random;

class RandomPickWeight {
    private final int[] prefixSums;
    private final int total;
    private final Random rand;

    public RandomPickWeight(int[] w) {
        prefixSums = new int[w.length];
        int sum = 0;
        for (int i = 0; i < w.length; i++) {
            sum += w[i];
            prefixSums[i] = sum;
        }
        total = sum;
        rand = new Random();
    }

    public int pickIndex() {
        int target = rand.nextInt(total) + 1;
        int left = 0, right = prefixSums.length - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (prefixSums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}

public class RandomPickDemo {
    public static void main(String[] args) {
        int[] w = {1, 3, 2};
        RandomPickWeight rpw = new RandomPickWeight(w);
        int[] counts = new int[3];
        for (int i = 0; i < 10000; i++) {
            counts[rpw.pickIndex()]++;
        }
        System.out.println("Counts (should be ~1667, 5000, 3333): " +
            counts[0] + ", " + counts[1] + ", " + counts[2]);
    }
}
```
**Time:** O(n) init, O(log n) pick | **Space:** O(n)

---

### Meta Behavioral Questions

#### Q1: Tell me about a time you moved fast and broke things. How did you handle it?
**Answer:** During a college hackathon, I deployed an API endpoint without adding input validation, resulting in a production crash. I immediately rolled back, implemented proper validation using a JSR-380 annotated DTO, and wrote unit tests covering edge cases. I learned that "move fast" requires automated guardrails — tests, validation, and CI checks — not sacrificing quality.

#### Q2: Describe a conflict you had within your team and how you resolved it.
**Answer:** Two team members disagreed on using microservices vs. a monolith for our project. I suggested a compromise: start with a modular monolith with clear package boundaries, with the option to extract services later if needed. We agreed on the approach, and the modular design actually made future extraction trivial. The project was delivered on time.

#### Q3: What is the most impactful project you have built?
**Answer:** I built a real-time anomaly detection system for our college's network traffic using Apache Kafka for stream processing and a Random Forest model for classification. It detected port scans and DDoS attempts across 200+ hosts and alerted the sysadmin via Slack within 2 seconds. The system ran for 6 months and detected 15+ real scans, earning me the "Best Project" award in my department.

---

# 2. Product-Based India Companies

---

## Flipkart

### Problem 1: Grid Unique Paths (Flipkart, 2024)
**Difficulty:** Medium

**Problem Statement:** A robot is located at the top-left corner of an m x n grid. It can only move down or right. How many possible unique paths are there to reach the bottom-right corner?

```java
import java.util.Arrays;

public class UniquePaths {
    public static int uniquePaths(int m, int n) {
        int[] dp = new int[n];
        Arrays.fill(dp, 1);
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[j] += dp[j - 1];
            }
        }
        return dp[n - 1];
    }

    public static void main(String[] args) {
        System.out.println("3x7 grid paths: " + uniquePaths(3, 7)); // 28
        System.out.println("3x2 grid paths: " + uniquePaths(3, 2)); // 3
    }
}
```
**Time:** O(m * n) | **Space:** O(n)

---

### Problem 2: Minimum Jumps to Reach End (Flipkart, 2024)
**Difficulty:** Medium

**Problem Statement:** Given an array of non-negative integers where each element represents the maximum jump length from that position, determine if you can reach the last index.

```java
public class JumpGame {
    public static boolean canJump(int[] nums) {
        int farthest = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > farthest) return false;
            farthest = Math.max(farthest, i + nums[i]);
        }
        return true;
    }

    public static void main(String[] args) {
        int[] nums1 = {2, 3, 1, 1, 4};
        int[] nums2 = {3, 2, 1, 0, 4};
        System.out.println("Can jump [2,3,1,1,4]: " + canJump(nums1)); // true
        System.out.println("Can jump [3,2,1,0,4]: " + canJump(nums2)); // false
    }
}
```
**Time:** O(n) | **Space:** O(1)

---

### Problem 3: Maximum Frequency Stack (Flipkart, 2023)
**Difficulty:** Hard

**Problem Statement:** Design a stack-like data structure that supports push, pop, and retrieving the most frequent element. If there is a tie, the element closest to the top is returned.

```java
import java.util.*;

class FreqStack {
    private final Map<Integer, Integer> freq;
    private final Map<Integer, Stack<Integer>> group;
    private int maxFreq;

    public FreqStack() {
        freq = new HashMap<>();
        group = new HashMap<>();
        maxFreq = 0;
    }

    public void push(int val) {
        int f = freq.getOrDefault(val, 0) + 1;
        freq.put(val, f);
        maxFreq = Math.max(maxFreq, f);
        group.computeIfAbsent(f, k -> new Stack<>()).push(val);
    }

    public int pop() {
        int val = group.get(maxFreq).pop();
        freq.put(val, freq.get(val) - 1);
        if (group.get(maxFreq).isEmpty()) maxFreq--;
        return val;
    }
}

public class FreqStackDemo {
    public static void main(String[] args) {
        FreqStack fs = new FreqStack();
        fs.push(5); fs.push(7); fs.push(5); fs.push(7); fs.push(4); fs.push(5);
        System.out.println(fs.pop()); // 5
        System.out.println(fs.pop()); // 7
        System.out.println(fs.pop()); // 5
        System.out.println(fs.pop()); // 4
    }
}
```
**Time:** O(1) per operation | **Space:** O(n)

---

### Problem 4: Rat in a Maze (Flipkart Machine Coding Round, 2024)
**Difficulty:** Medium

**Problem Statement:** Consider a rat placed at (0,0) in an n x n square matrix. It must reach (n-1, n-1). Find all possible paths the rat can take, moving only Down (D) or Right (R). Cells with 0 are blocked.

```java
import java.util.ArrayList;
import java.util.List;

public class RatInMaze {
    public static List<String> findPath(int[][] maze) {
        List<String> result = new ArrayList<>();
        int n = maze.length;
        if (maze[0][0] == 0 || maze[n-1][n-1] == 0) return result;
        backtrack(maze, 0, 0, "", result, n);
        return result;
    }

    private static void backtrack(int[][] maze, int i, int j, String path, List<String> result, int n) {
        if (i == n-1 && j == n-1) {
            result.add(path);
            return;
        }
        // Move Down
        if (i + 1 < n && maze[i+1][j] == 1) {
            maze[i][j] = 0;
            backtrack(maze, i+1, j, path + "D", result, n);
            maze[i][j] = 1;
        }
        // Move Right
        if (j + 1 < n && maze[i][j+1] == 1) {
            maze[i][j] = 0;
            backtrack(maze, i, j+1, path + "R", result, n);
            maze[i][j] = 1;
        }
    }

    public static void main(String[] args) {
        int[][] maze = {{1,0,0,0},{1,1,0,1},{1,1,0,0},{0,1,1,1}};
        System.out.println("Paths: " + findPath(maze));
        // Output: ["DDRDRR", "DRDDRR"]
    }
}
```
**Time:** O(2^(n)) | **Space:** O(n) for recursion

---

## Uber

### Problem 1: Group Shifted Strings (Uber, 2024)
**Difficulty:** Medium

**Problem Statement:** Given a list of strings, group strings that belong to the same shifting sequence. Two strings belong to the same shifting sequence if you can shift each character by the same amount to get the other string.

```java
import java.util.*;

public class GroupShiftedStrings {
    public static List<List<String>> groupStrings(String[] strings) {
        Map<String, List<String>> map = new HashMap<>();
        for (String s : strings) {
            StringBuilder sb = new StringBuilder();
            for (int i = 1; i < s.length(); i++) {
                int diff = (s.charAt(i) - s.charAt(i-1) + 26) % 26;
                sb.append(diff).append(",");
            }
            String key = sb.toString();
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(map.values());
    }

    public static void main(String[] args) {
        String[] strings = {"abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"};
        System.out.println(groupStrings(strings));
        // [["abc","bcd","xyz"], ["acef"], ["az","ba"], ["a","z"]]
    }
}
```
**Time:** O(N * K) where K is average string length | **Space:** O(N * K)

---

### Problem 2: Time-Based Key-Value Store (Uber, 2024)
**Difficulty:** Medium

**Problem Statement:** Design a time-based key-value store that supports `set(key, value, timestamp)` and `get(key, timestamp)` which returns the value with the greatest timestamp <= given timestamp.

```java
import java.util.*;

class TimeMap {
    private final Map<String, TreeMap<Integer, String>> map;

    public TimeMap() {
        map = new HashMap<>();
    }

    public void set(String key, String value, int timestamp) {
        map.computeIfAbsent(key, k -> new TreeMap<>()).put(timestamp, value);
    }

    public String get(String key, int timestamp) {
        if (!map.containsKey(key)) return "";
        Map.Entry<Integer, String> entry = map.get(key).floorEntry(timestamp);
        return entry == null ? "" : entry.getValue();
    }
}

public class TimeMapDemo {
    public static void main(String[] args) {
        TimeMap tm = new TimeMap();
        tm.set("foo", "bar", 1);
        System.out.println("Get foo@1: " + tm.get("foo", 1)); // "bar"
        System.out.println("Get foo@3: " + tm.get("foo", 3)); // "bar"
        tm.set("foo", "bar2", 4);
        System.out.println("Get foo@4: " + tm.get("foo", 4)); // "bar2"
        System.out.println("Get foo@5: " + tm.get("foo", 5)); // "bar2"
    }
}
```
**Time:** O(log n) per operation | **Space:** O(n)

---

### Problem 3: Design In-Memory File System (Uber System Design, 2024)
**Difficulty:** Hard

**Problem Statement:** Design an in-memory file system that supports `ls`, `mkdir`, `addContentToFile`, and `readContentFromFile` operations.

```java
import java.util.*;

class FileSystem {
    class File {
        boolean isFile;
        String content;
        Map<String, File> children;

        File() {
            isFile = false;
            content = "";
            children = new TreeMap<>();
        }
    }

    private final File root;

    public FileSystem() {
        root = new File();
    }

    public List<String> ls(String path) {
        File node = traverse(path);
        if (node.isFile) {
            String[] parts = path.split("/");
            return Collections.singletonList(parts[parts.length - 1]);
        }
        return new ArrayList<>(node.children.keySet());
    }

    public void mkdir(String path) {
        String[] parts = path.split("/");
        File curr = root;
        for (String part : parts) {
            if (part.isEmpty()) continue;
            curr.children.putIfAbsent(part, new File());
            curr = curr.children.get(part);
        }
    }

    public void addContentToFile(String filePath, String content) {
        File node = traverse(filePath);
        node.isFile = true;
        node.content += content;
    }

    public String readContentFromFile(String filePath) {
        File node = traverse(filePath);
        return node.content;
    }

    private File traverse(String path) {
        String[] parts = path.split("/");
        File curr = root;
        for (String part : parts) {
            if (part.isEmpty()) continue;
            curr = curr.children.get(part);
        }
        return curr;
    }
}

public class FileSystemDemo {
    public static void main(String[] args) {
        FileSystem fs = new FileSystem();
        fs.mkdir("/a/b/c");
        fs.addContentToFile("/a/b/c/d", "hello");
        System.out.println("Content: " + fs.readContentFromFile("/a/b/c/d")); // "hello"
        System.out.println("ls /a/b/c: " + fs.ls("/a/b/c")); // [d]
        System.out.println("ls /: " + fs.ls("/"));           // [a]
    }
}
```
**Time:** O(path components) per operation | **Space:** O(files + directories)

---

### Problem 4: Bus Routes (Uber, 2023)
**Difficulty:** Hard

**Problem Statement:** Given an array routes where routes[i] is a list of bus stops for bus i, return the minimum number of buses you must take to travel from source to target. If impossible, return -1.

```java
import java.util.*;

public class BusRoutes {
    public static int numBusesToDestination(int[][] routes, int source, int target) {
        if (source == target) return 0;
        Map<Integer, List<Integer>> stopToBuses = new HashMap<>();
        for (int i = 0; i < routes.length; i++) {
            for (int stop : routes[i]) {
                stopToBuses.computeIfAbsent(stop, k -> new ArrayList<>()).add(i);
            }
        }
        Queue<Integer> queue = new LinkedList<>();
        Set<Integer> visitedStops = new HashSet<>();
        Set<Integer> visitedBuses = new HashSet<>();
        queue.offer(source);
        visitedStops.add(source);
        int buses = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            buses++;
            for (int i = 0; i < size; i++) {
                int stop = queue.poll();
                for (int bus : stopToBuses.getOrDefault(stop, Collections.emptyList())) {
                    if (visitedBuses.contains(bus)) continue;
                    visitedBuses.add(bus);
                    for (int nextStop : routes[bus]) {
                        if (nextStop == target) return buses;
                        if (!visitedStops.contains(nextStop)) {
                            visitedStops.add(nextStop);
                            queue.offer(nextStop);
                        }
                    }
                }
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[][] routes = {{1,2,7},{3,6,7}};
        System.out.println("Buses needed from 1 to 6: " + numBusesToDestination(routes, 1, 6));
        // Output: 2 (bus 0 to stop 7, then bus 1 to stop 6)
    }
}
```
**Time:** O(N + R) where N = total stops, R = routes | **Space:** O(N + R)

---

## Swiggy / Zomato

### Problem 1: Design a Food Delivery Recommendation System (Swiggy System Design, 2024)
**Difficulty:** Medium

**Problem Statement:** Given a list of restaurants with their ratings, cuisines, and delivery times, find the top-k restaurants near a user sorted by score = 0.7 * rating + 0.3 * (1 / deliveryTime).

```java
import java.util.*;

class Restaurant {
    int id;
    String name;
    double rating;
    double deliveryTime;
    String cuisine;

    Restaurant(int id, String name, double rating, double deliveryTime, String cuisine) {
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.deliveryTime = deliveryTime;
        this.cuisine = cuisine;
    }
}

public class RestaurantRecommender {
    public static List<String> topKRestaurants(List<Restaurant> restaurants, String cuisine, double maxDeliveryTime, int k) {
        PriorityQueue<Restaurant> pq = new PriorityQueue<>(
            (a, b) -> Double.compare(score(a), score(b))
        );
        for (Restaurant r : restaurants) {
            if (!r.cuisine.equalsIgnoreCase(cuisine)) continue;
            if (r.deliveryTime > maxDeliveryTime) continue;
            pq.offer(r);
            if (pq.size() > k) pq.poll();
        }
        List<String> result = new ArrayList<>();
        while (!pq.isEmpty()) result.add(pq.poll().name);
        Collections.reverse(result);
        return result;
    }

    private static double score(Restaurant r) {
        return 0.7 * r.rating + 0.3 * (1.0 / Math.max(r.deliveryTime, 0.1));
    }

    public static void main(String[] args) {
        List<Restaurant> restaurants = Arrays.asList(
            new Restaurant(1, "Biryani Blues", 4.5, 30, "Indian"),
            new Restaurant(2, "Pasta Palace", 4.2, 45, "Italian"),
            new Restaurant(3, "Curry House", 4.7, 25, "Indian"),
            new Restaurant(4, "Taco Bell", 3.9, 20, "Mexican")
        );
        System.out.println("Top Indian restaurants: " +
            topKRestaurants(restaurants, "Indian", 35, 2));
        // Output: [Curry House, Biryani Blues]
    }
}
```
**Time:** O(N log k) | **Space:** O(k)

---

### Problem 2: Analyze Delivery Time Outliers (Zomato Data Problem, 2024)
**Difficulty:** Medium

**Problem Statement:** Given an array of delivery times in minutes, find all outliers — values that are more than 1.5 * IQR above Q3 or below Q1.

```java
import java.util.*;

public class DeliveryOutliers {
    public static List<Double> findOutliers(List<Double> times) {
        Collections.sort(times);
        int n = times.size();
        double q1 = times.get(n / 4);
        double q3 = times.get(3 * n / 4);
        double iqr = q3 - q1;
        double lower = q1 - 1.5 * iqr;
        double upper = q3 + 1.5 * iqr;
        List<Double> outliers = new ArrayList<>();
        for (double t : times) {
            if (t < lower || t > upper) outliers.add(t);
        }
        return outliers;
    }

    public static void main(String[] args) {
        List<Double> times = Arrays.asList(15.0, 18.0, 22.0, 25.0, 28.0, 30.0, 35.0, 42.0, 60.0, 120.0);
        System.out.println("Outliers: " + findOutliers(times));
        // Output: [120.0]
    }
}
```
**Time:** O(n log n) | **Space:** O(n)

---

### Problem 3: Sliding Window Maximum (Swiggy, 2024)
**Difficulty:** Hard

**Problem Statement:** Given an array and a sliding window of size k moving from left to right, return the maximum element in each window.

```java
import java.util.*;

public class SlidingWindowMax {
    public static int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0) return new int[0];
        int n = nums.length;
        int[] result = new int[n - k + 1];
        Deque<Integer> deque = new ArrayDeque<>();
        int ri = 0;
        for (int i = 0; i < n; i++) {
            while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
                deque.pollFirst();
            }
            while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
                deque.pollLast();
            }
            deque.offerLast(i);
            if (i >= k - 1) {
                result[ri++] = nums[deque.peekFirst()];
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {1,3,-1,-3,5,3,6,7};
        int k = 3;
        System.out.println("Max sliding window: " + Arrays.toString(maxSlidingWindow(nums, k)));
        // Output: [3, 3, 5, 5, 6, 7]
    }
}
```
**Time:** O(n) | **Space:** O(k)

---

### Problem 4: Design a Coupon Distribution System (Swiggy Machine Coding, 2024)
**Difficulty:** Medium

**Problem Statement:** Design a coupon system where users can apply coupons. A coupon has a type (FLAT, PERCENTAGE), a minimum order value, and a maximum discount cap. Return the best discount for a given order value.

```java
import java.util.*;

enum CouponType { FLAT, PERCENTAGE }

class Coupon {
    String code;
    CouponType type;
    double value;  // flat amount or percentage
    double minOrder;
    double maxDiscount; // only for PERCENTAGE type

    Coupon(String code, CouponType type, double value, double minOrder, double maxDiscount) {
        this.code = code;
        this.type = type;
        this.value = value;
        this.minOrder = minOrder;
        this.maxDiscount = maxDiscount;
    }

    public double calculateDiscount(double orderValue) {
        if (orderValue < minOrder) return 0;
        if (type == CouponType.FLAT) return Math.min(value, orderValue);
        double discount = orderValue * value / 100.0;
        return Math.min(discount, maxDiscount);
    }
}

public class CouponSystem {
    public static String bestCoupon(List<Coupon> coupons, double orderValue) {
        String bestCode = null;
        double bestDiscount = 0;
        for (Coupon c : coupons) {
            double discount = c.calculateDiscount(orderValue);
            if (discount > bestDiscount) {
                bestDiscount = discount;
                bestCode = c.code;
            }
        }
        return bestCode + " -> " + bestDiscount;
    }

    public static void main(String[] args) {
        List<Coupon> coupons = Arrays.asList(
            new Coupon("FLAT50", CouponType.FLAT, 50, 200, 50),
            new Coupon("PCT20", CouponType.PERCENTAGE, 20, 100, 150),
            new Coupon("FLAT100", CouponType.FLAT, 100, 500, 100)
        );
        System.out.println("Order 300: " + bestCoupon(coupons, 300)); // PCT20 -> 60
        System.out.println("Order 600: " + bestCoupon(coupons, 600)); // FLAT100 -> 100
    }
}
```
**Time:** O(N) per order | **Space:** O(1)

---

## Ola / Paytm / Others

### Problem 1: Design a Ride-Sharing Matching Algorithm (Ola, 2024)
**Difficulty:** Medium

**Problem Statement:** Given driver locations and a rider's pickup point, find the nearest available driver using Manhattan distance.

```java
import java.util.*;

class Driver {
    int id;
    int x, y;
    boolean available;

    Driver(int id, int x, int y, boolean available) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.available = available;
    }
}

public class RideMatcher {
    public static Driver findNearestDriver(List<Driver> drivers, int px, int py) {
        Driver nearest = null;
        int minDist = Integer.MAX_VALUE;
        for (Driver d : drivers) {
            if (!d.available) continue;
            int dist = Math.abs(d.x - px) + Math.abs(d.y - py);
            if (dist < minDist) {
                minDist = dist;
                nearest = d;
            }
        }
        return nearest;
    }

    public static void main(String[] args) {
        List<Driver> drivers = Arrays.asList(
            new Driver(1, 2, 3, true),
            new Driver(2, 10, 10, true),
            new Driver(3, 1, 1, false)
        );
        Driver nearest = findNearestDriver(drivers, 0, 0);
        System.out.println("Nearest driver id: " + (nearest != null ? nearest.id : "none"));
        // Output: 1 (Manhattan distance 5)
    }
}
```
**Time:** O(N) | **Space:** O(1)

---

### Problem 2: Find All Duplicates in an Array (Paytm, 2024)
**Difficulty:** Medium

**Problem Statement:** Given an integer array where 1 <= a[i] <= n (n is array size), some elements appear twice and others once. Find all elements that appear twice without extra space.

```java
import java.util.ArrayList;
import java.util.List;

public class FindDuplicates {
    public static List<Integer> findDuplicates(int[] nums) {
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            int index = Math.abs(nums[i]) - 1;
            if (nums[index] < 0) {
                result.add(Math.abs(nums[i]));
            } else {
                nums[index] = -nums[index];
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {4, 3, 2, 7, 8, 2, 3, 1};
        System.out.println("Duplicates: " + findDuplicates(nums));
        // Output: [2, 3]
    }
}
```
**Time:** O(n) | **Space:** O(1) excluding output

---

### Problem 3: First Non-Repeating Character in a Stream (Ola, 2023)
**Difficulty:** Medium

**Problem Statement:** Given a stream of characters, find the first non-repeating character at each insertion.

```java
import java.util.*;

public class FirstNonRepeating {
    public static String firstNonRepeating(String stream) {
        int[] count = new int[26];
        Queue<Character> queue = new LinkedList<>();
        StringBuilder result = new StringBuilder();
        for (char c : stream.toCharArray()) {
            count[c - 'a']++;
            queue.offer(c);
            while (!queue.isEmpty() && count[queue.peek() - 'a'] > 1) {
                queue.poll();
            }
            result.append(queue.isEmpty() ? '#' : queue.peek());
        }
        return result.toString();
    }

    public static void main(String[] args) {
        String stream = "aabc";
        System.out.println("First non-repeating: " + firstNonRepeating(stream));
        // Output: a#bb
    }
}
```
**Time:** O(n) | **Space:** O(n)

---

### Problem 4: Design Splitwise (Paytm Low-Level Design, 2024)
**Difficulty:** Hard

**Problem Statement:** Design a simple expense sharing application like Splitwise. Support adding users, adding expenses, and showing balances.

```java
import java.util.*;

class User {
    String id;
    String name;

    User(String id, String name) {
        this.id = id;
        this.name = name;
    }
}

class ExpenseManager {
    private final Map<String, User> users;
    private final Map<String, Map<String, Double>> balanceSheet;

    public ExpenseManager() {
        users = new HashMap<>();
        balanceSheet = new HashMap<>();
    }

    public void addUser(String id, String name) {
        users.put(id, new User(id, name));
        balanceSheet.put(id, new HashMap<>());
    }

    public void addExpense(String paidBy, double amount, List<String> participants, SplitType type, List<Double> values) {
        List<Double> shares = calculateShares(amount, participants.size(), type, values);
        for (int i = 0; i < participants.size(); i++) {
            String payee = participants.get(i);
            double share = shares.get(i);
            if (payee.equals(paidBy)) continue;
            balanceSheet.get(paidBy).merge(payee, share, Double::sum);
            balanceSheet.get(payee).merge(paidBy, -share, Double::sum);
        }
    }

    private List<Double> calculateShares(double amount, int count, SplitType type, List<Double> values) {
        List<Double> shares = new ArrayList<>();
        if (type == SplitType.EQUAL) {
            double share = Math.round((amount / count) * 100.0) / 100.0;
            for (int i = 0; i < count; i++) {
                shares.add(i == count - 1 ? amount - share * (count - 1) : share);
            }
        } else if (type == SplitType.EXACT) {
            shares = values;
        }
        return shares;
    }

    public void showBalances() {
        boolean hasBalance = false;
        for (String u1 : balanceSheet.keySet()) {
            for (Map.Entry<String, Double> entry : balanceSheet.get(u1).entrySet()) {
                if (entry.getValue() > 0) {
                    System.out.println(u1 + " owes " + entry.getKey() + ": " + entry.getValue());
                    hasBalance = true;
                }
            }
        }
        if (!hasBalance) System.out.println("No balances");
    }
}

enum SplitType { EQUAL, EXACT }

public class SplitwiseDemo {
    public static void main(String[] args) {
        ExpenseManager em = new ExpenseManager();
        em.addUser("u1", "Alice");
        em.addUser("u2", "Bob");
        em.addUser("u3", "Charlie");

        em.addExpense("u1", 300, Arrays.asList("u1", "u2", "u3"), SplitType.EQUAL, null);
        em.showBalances();
        // u2 owes u1: 100.0
        // u3 owes u1: 100.0
    }
}
```
**Time:** O(N) per operation | **Space:** O(U^2) where U = users

---

# 3. Service-Based Companies

---

## TCS NQT / Digital

### Aptitude & Reasoning

#### Q1: Profit and Loss
**Question:** A shopkeeper sells an item at a 20% profit. If the cost price increases by 10% and the selling price remains the same, what is the new profit percentage?

**Answer:** Let CP = 100. SP = 120 (20% profit). New CP = 110. New profit = (120 - 110) / 110 * 100 = 9.09%.

#### Q2: Time and Work
**Question:** A can complete a task in 12 days, B in 18 days. They work together for 4 days, then A leaves. How many more days will B need to finish the remaining work?

**Answer:** A's 1 day work = 1/12, B's = 1/18. Together in 4 days: 4*(1/12 + 1/18) = 4*(5/36) = 20/36 = 5/9. Remaining = 4/9. B's time = (4/9) / (1/18) = 8 days.

#### Q3: Probability
**Question:** A bag contains 3 red, 4 green, and 5 blue marbles. Two marbles are drawn at random. What is the probability that both are green?

**Answer:** Total marbles = 12. Ways to choose 2 = C(12,2) = 66. Ways to choose 2 green = C(4,2) = 6. Probability = 6/66 = 1/11.

#### Q4: Permutation and Combination
**Question:** How many 4-digit numbers can be formed using digits 0, 1, 2, 3, 4 without repetition?

**Answer:** First digit cannot be 0: 4 choices. Remaining 3 digits from 4 remaining: P(4,3) = 24. Total = 4 * 24 = 96.

#### Q5: Data Interpretation
**Question:** In a company, the ratio of male to female employees is 3:2. If 20% of males and 40% of females are managers, what percentage of total employees are managers?

**Answer:** Let total = 100. Males = 60, Females = 40. Male managers = 20% of 60 = 12. Female managers = 40% of 40 = 16. Total managers = 28. Percentage = 28%.

---

### TCS Coding Problems

#### Problem 1: Find the Missing Number (TCS NQT, 2024)
**Difficulty:** Easy

**Problem Statement:** Given an array of size n-1 containing numbers from 1 to n with one missing number, find the missing number.

```java
public class MissingNumber {
    public static int findMissing(int[] arr, int n) {
        int expected = n * (n + 1) / 2;
        int actual = 0;
        for (int num : arr) actual += num;
        return expected - actual;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 5};
        System.out.println("Missing number: " + findMissing(arr, 5));
        // Output: 4
    }
}
```
**Time:** O(n) | **Space:** O(1)

---

#### Problem 2: Palindrome String Check (TCS NQT, 2024)
**Difficulty:** Easy

**Problem Statement:** Given a string, check if it is a palindrome. Ignore case, spaces, and non-alphanumeric characters.

```java
public class PalindromeCheck {
    public static boolean isPalindrome(String s) {
        s = s.toLowerCase().replaceAll("[^a-z0-9]", "");
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) return false;
            left++;
            right--;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // true
        System.out.println(isPalindrome("race a car"));                     // false
        System.out.println(isPalindrome("madam"));                        // true
    }
}
```
**Time:** O(n) | **Space:** O(n)

---

#### Problem 3: Find Second Largest Element (TCS Digital, 2024)
**Difficulty:** Easy

**Problem Statement:** Given an array, find the second largest distinct element. If no second largest exists, return -1.

```java
public class SecondLargest {
    public static int findSecondLargest(int[] arr) {
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }
        return second == Integer.MIN_VALUE ? -1 : second;
    }

    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};
        System.out.println("Second largest: " + findSecondLargest(arr));
        // Output: 34
    }
}
```
**Time:** O(n) | **Space:** O(1)

---

## Infosys InfyTQ

### Aptitude & Reasoning

#### Q1: Number Series
**Question:** Find the next number in the series: 2, 6, 12, 20, 30, ?

**Answer:** Pattern: 1*2, 2*3, 3*4, 4*5, 5*6, 6*7 = 42.

#### Q2: Logical Reasoning
**Question:** If all roses are flowers and some flowers fade quickly, which statement is definitely true?
a) All roses fade quickly
b) Some roses fade quickly
c) No roses fade quickly
d) Cannot be determined

**Answer:** d) Cannot be determined.

#### Q3: Coding-Decoding
**Question:** In a certain code, "HELLO" is coded as "IFMMP". What is "WORLD" coded as?

**Answer:** Each letter is shifted by +1. W→X, O→P, R→S, L→M, D→E. Code: "XPSME".

#### Q4: Clock and Calendar
**Question:** How many times do the hour and minute hands overlap in a 12-hour period?

**Answer:** 11 times (they overlap once per hour except between 12 and 1).

#### Q5: Blood Relations
**Question:** A is the father of B. C is the sister of B. D is the mother of C. How is A related to D?

**Answer:** A is the husband of D (or D is the wife of A).

---

### Infosys Coding Problems

#### Problem 1: Reverse a Number (Infosys InfyTQ, 2024)
**Difficulty:** Easy

**Problem Statement:** Given an integer, reverse its digits. If the reversed number exceeds 32-bit integer range, return 0.

```java
public class ReverseNumber {
    public static int reverse(int x) {
        long result = 0;
        while (x != 0) {
            result = result * 10 + x % 10;
            x /= 10;
        }
        if (result > Integer.MAX_VALUE || result < Integer.MIN_VALUE) return 0;
        return (int) result;
    }

    public static void main(String[] args) {
        System.out.println("Reverse 1234: " + reverse(1234));   // 4321
        System.out.println("Reverse -123: " + reverse(-123));   // -321
        System.out.println("Reverse 120: " + reverse(120));     // 21
    }
}
```
**Time:** O(log n) | **Space:** O(1)

---

#### Problem 2: Fibonacci Series (Infosys InfyTQ, 2024)
**Difficulty:** Easy

**Problem Statement:** Print the first n terms of the Fibonacci series.

```java
import java.util.Arrays;

public class FibonacciSeries {
    public static int[] fibonacci(int n) {
        if (n <= 0) return new int[0];
        if (n == 1) return new int[]{0};
        int[] fib = new int[n];
        fib[0] = 0;
        fib[1] = 1;
        for (int i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println("Fibonacci: " + Arrays.toString(fibonacci(n)));
        // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    }
}
```
**Time:** O(n) | **Space:** O(n)

---

#### Problem 3: Anagram Check (Infosys InfyTQ, 2023)
**Difficulty:** Easy

**Problem Statement:** Given two strings, check if they are anagrams of each other.

```java
import java.util.Arrays;

public class AnagramCheck {
    public static boolean areAnagrams(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        char[] c1 = s1.toLowerCase().toCharArray();
        char[] c2 = s2.toLowerCase().toCharArray();
        Arrays.sort(c1);
        Arrays.sort(c2);
        return Arrays.equals(c1, c2);
    }

    public static void main(String[] args) {
        System.out.println("listen/silent: " + areAnagrams("listen", "silent")); // true
        System.out.println("hello/world: " + areAnagrams("hello", "world"));     // false
    }
}
```
**Time:** O(n log n) | **Space:** O(n)

---

## Wipro NLTH / Turbo

### Aptitude & Reasoning

#### Q1: Average Speed
**Question:** A car travels 60 km at 30 km/h and then 60 km at 60 km/h. What is the average speed for the entire journey?

**Answer:** Time for first 60 km = 60/30 = 2h. Time for second 60 km = 60/60 = 1h. Total distance = 120 km. Total time = 3h. Average = 120/3 = 40 km/h.

#### Q2: Simple Interest
**Question:** At what rate of simple interest will a sum of money double in 10 years?

**Answer:** SI = P * R * T / 100. For doubling, SI = P. So P = P * R * 10 / 100 → R = 10%.

#### Q3: Ratio and Proportion
**Question:** If a:b = 2:3 and b:c = 4:5, find a:b:c.

**Answer:** a:b = 2:3 = 8:12. b:c = 4:5 = 12:15. So a:b:c = 8:12:15.

#### Q4: Age Problem
**Question:** Five years ago, father's age was four times his son's age. Five years later, father's age will be three times his son's age. Find their present ages.

**Answer:** Let son = x, father = y. 5 years ago: y - 5 = 4(x - 5). 5 years later: y + 5 = 3(x + 5). Solving: y = 4x - 15 and y = 3x + 10. 4x - 15 = 3x + 10 → x = 25, y = 85. Son = 25, Father = 85.

#### Q5: Area and Perimeter
**Question:** The length of a rectangle is twice its width. If the perimeter is 60m, find the area.

**Answer:** Let width = w, length = 2w. Perimeter = 2(2w + w) = 6w = 60 → w = 10. Length = 20. Area = 20 * 10 = 200 sq m.

---

### Wipro Coding Problems

#### Problem 1: Factorial Using Recursion (Wipro NLTH, 2024)
**Difficulty:** Easy

**Problem Statement:** Compute the factorial of a given number n using recursion.

```java
public class Factorial {
    public static int factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.println("5! = " + factorial(5));   // 120
        System.out.println("0! = " + factorial(0));   // 1
        System.out.println("7! = " + factorial(7));   // 5040
    }
}
```
**Time:** O(n) | **Space:** O(n) recursion stack

---

#### Problem 2: GCD of Two Numbers (Wipro NLTH, 2024)
**Difficulty:** Easy

**Problem Statement:** Find the Greatest Common Divisor (GCD) of two numbers using Euclid's algorithm.

```java
public class GCD {
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public static void main(String[] args) {
        System.out.println("GCD(56, 98): " + gcd(56, 98));   // 14
        System.out.println("GCD(12, 18): " + gcd(12, 18));   // 6
        System.out.println("GCD(17, 5): " + gcd(17, 5));     // 1
    }
}
```
**Time:** O(log min(a, b)) | **Space:** O(1)

---

#### Problem 3: Count Vowels and Consonants (Wipro Turbo, 2024)
**Difficulty:** Easy

**Problem Statement:** Given a string, count the number of vowels and consonants in it. Ignore case and non-alphabetic characters.

```java
public class VowelConsonantCount {
    public static void count(String s) {
        String vowels = "aeiouAEIOU";
        int vCount = 0, cCount = 0;
        for (char c : s.toCharArray()) {
            if (!Character.isLetter(c)) continue;
            if (vowels.indexOf(c) != -1) vCount++;
            else cCount++;
        }
        System.out.println("Vowels: " + vCount + ", Consonants: " + cCount);
    }

    public static void main(String[] args) {
        count("Hello World");
        // Vowels: 3, Consonants: 7
    }
}
```
**Time:** O(n) | **Space:** O(1)

---

## Accenture

### Aptitude & Reasoning

#### Q1: Percentage
**Question:** In an examination, a student scored 42% and failed by 18 marks. Another student scored 56% and passed by 12 marks. Find the maximum marks.

**Answer:** Let max marks = M. Pass mark = 0.42M + 18 = 0.56M - 12. 0.14M = 30. M = 214.28 ≈ 214.

#### Q2: Work Efficiency
**Question:** A is 50% more efficient than B. Together they can complete a work in 20 days. How many days would B take alone?

**Answer:** A's efficiency = 1.5B. Together = 2.5B units/day. Total work = 20 * 2.5B = 50B units. B alone = 50B / B = 50 days.

#### Q3: Profit Sharing
**Question:** A invests 20000 for 8 months, B invests 30000 for 6 months. If profit is 34000, find B's share.

**Answer:** A's investment-month = 20000 * 8 = 160000. B's = 30000 * 6 = 180000. Ratio = 160000:180000 = 8:9. B's share = 9/17 * 34000 = 18000.

#### Q4: Pipe and Cistern
**Question:** Pipe A fills a tank in 6 hours, Pipe B in 8 hours. A drain pipe C empties the tank in 12 hours. If all three are opened together, how long to fill the tank?

**Answer:** In 1 hour: A fills 1/6, B fills 1/8, C empties 1/12. Net = 1/6 + 1/8 - 1/12 = (4+3-2)/24 = 5/24. Time = 24/5 = 4.8 hours.

#### Q5: Series Completion
**Question:** Complete the series: 2, 6, 18, 54, ?

**Answer:** Each term is multiplied by 3. Next = 54 * 3 = 162.

---

### Accenture Coding Problems

#### Problem 1: Bubble Sort (Accenture, 2024)
**Difficulty:** Easy

**Problem Statement:** Implement bubble sort to sort an integer array in ascending order.

```java
import java.util.Arrays;

public class BubbleSort {
    public static void sort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        sort(arr);
        System.out.println("Sorted: " + Arrays.toString(arr));
        // Output: [11, 12, 22, 25, 34, 64, 90]
    }
}
```
**Time:** O(n^2) | **Space:** O(1)

---

#### Problem 2: Armstrong Number (Accenture, 2024)
**Difficulty:** Easy

**Problem Statement:** Given a number, check if it is an Armstrong number. An Armstrong number is one where the sum of its digits raised to the power of the number of digits equals the number.

```java
public class ArmstrongNumber {
    public static boolean isArmstrong(int n) {
        int original = n, sum = 0, digits = String.valueOf(n).length();
        while (n > 0) {
            int d = n % 10;
            sum += Math.pow(d, digits);
            n /= 10;
        }
        return sum == original;
    }

    public static void main(String[] args) {
        System.out.println("153: " + isArmstrong(153));   // true
        System.out.println("9474: " + isArmstrong(9474)); // true
        System.out.println("123: " + isArmstrong(123));   // false
    }
}
```
**Time:** O(log n) | **Space:** O(1)

---

#### Problem 3: Remove Duplicates from Array (Accenture, 2023)
**Difficulty:** Easy

**Problem Statement:** Remove duplicates from a sorted array in-place and return the new length.

```java
import java.util.Arrays;

public class RemoveDuplicates {
    public static int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        int k = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[k++] = nums[i];
            }
        }
        return k;
    }

    public static void main(String[] args) {
        int[] nums = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
        int k = removeDuplicates(nums);
        System.out.println("Length: " + k);
        System.out.println("Array: " + Arrays.toString(Arrays.copyOfRange(nums, 0, k)));
        // Length: 5, Array: [0, 1, 2, 3, 4]
    }
}
```
**Time:** O(n) | **Space:** O(1)

---

## Quick Reference — Common Patterns by Company

| Company | Common Patterns | Focus Area |
|---------|----------------|------------|
| Amazon | Two Sum, Trees, DP, LRU Cache | Data Structures + OOD |
| Google | Intervals, Strings, Graphs, Design | Algorithms + Scalability |
| Microsoft | Linked Lists, Backtracking, Union-Find | Fundamentals + Problem Solving |
| Meta | Strings, Binary Trees, Arrays | Speed + Accuracy |
| Flipkart | DP, Grid Problems, Stacks | Dynamic Programming |
| Uber | Design, Graphs, Time-Series | System Design |
| Swiggy/Zomato | Data Analysis, Sliding Window | Data-Driven Problem Solving |
| Ola/Paytm | Arrays, Strings, LLD | Core CS + Design |
| TCS | Basic Math, Palindromes, Sorting | Aptitude + Fundamentals |
| Infosys | Numbers, Strings, Series | Logical Thinking |
| Wipro | Recursion, GCD, Loops | Basic Programming |
| Accenture | Sorting, Arrays, Math | Fundamentals |

---

*This compilation is based on actual campus placement experiences reported between 2023–2025. Problems and solution approaches may vary across interview rounds and locations.*
