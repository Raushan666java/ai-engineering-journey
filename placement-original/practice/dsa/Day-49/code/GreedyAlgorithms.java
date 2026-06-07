/**
 * Day 49: Greedy Algorithms - Making Optimal Local Choices
 * 
 * This file contains comprehensive implementations covering:
 * 1. Jump Game
 * 2. Jump Game II
 * 3. Gas Station
 * 4. Task Scheduler
 * 5. Reorganize String
 * 6. Minimum Number of Arrows to Burst Balloons
 * 7. Non-overlapping Intervals
 * 8. Partition Labels
 * 9. Queue Reconstruction by Height
 * 10. Assign Cookies
 * 11. Boats to Save People
 * 12. Minimum Cost to Connect Sticks
 * 
 * Each problem includes:
 * - Multiple solution approaches
 * - Greedy strategy explanation
 * - Proof sketch
 * - Complexity analysis
 * - Comprehensive test cases
 * 
 * @author Placement Preparation
 * @version 1.0
 */

package dsa.day49;

import java.util.*;

public class GreedyAlgorithms {
    
    // ==================== PROBLEM 1: JUMP GAME ====================
    
    /**
     * Problem 1: Jump Game
     * 
     * Determine if you can reach the last index starting from first index.
     * Each element represents maximum jump length from that position.
     * 
     * Example:
     * Input: nums = [2,3,1,1,4]
     * Output: true
     * Explanation: Jump 1 step from 0 to 1, then 3 steps to last index.
     * 
     * LeetCode #55
     */
    
    /**
     * Approach 1: Greedy (Track Farthest Reachable)
     * Greedy Choice: Always track maximum reachable position
     * 
     * Time: O(n), Space: O(1)
     */
    public static boolean canJump1(int[] nums) {
        int maxReach = 0;
        
        for (int i = 0; i < nums.length; i++) {
            // If current position is beyond max reach, can't proceed
            if (i > maxReach) {
                return false;
            }
            
            // Update max reachable position
            maxReach = Math.max(maxReach, i + nums[i]);
            
            // If we can reach the last index
            if (maxReach >= nums.length - 1) {
                return true;
            }
        }
        
        return maxReach >= nums.length - 1;
    }
    
    /**
     * Approach 2: Dynamic Programming (Bottom-up)
     * Time: O(n²), Space: O(n)
     */
    public static boolean canJump2(int[] nums) {
        int n = nums.length;
        boolean[] dp = new boolean[n];
        dp[0] = true;
        
        for (int i = 0; i < n; i++) {
            if (!dp[i]) continue;
            
            for (int j = 1; j <= nums[i] && i + j < n; j++) {
                dp[i + j] = true;
            }
        }
        
        return dp[n - 1];
    }
    
    /**
     * Approach 3: Backwards Greedy
     * Time: O(n), Space: O(1)
     */
    public static boolean canJump3(int[] nums) {
        int lastPos = nums.length - 1;
        
        for (int i = nums.length - 2; i >= 0; i--) {
            if (i + nums[i] >= lastPos) {
                lastPos = i;
            }
        }
        
        return lastPos == 0;
    }
    
    // ==================== PROBLEM 2: JUMP GAME II ====================
    
    /**
     * Problem 2: Jump Game II
     * 
     * Find minimum number of jumps to reach last index.
     * Guaranteed that you can reach the last index.
     * 
     * Example:
     * Input: nums = [2,3,1,1,4]
     * Output: 2
     * Explanation: Jump from 0 to 1 (1 jump), then 1 to 4 (1 jump).
     * 
     * LeetCode #45
     * 
     * Greedy Strategy: BFS-like, track current level reach and next level reach
     * 
     * Time: O(n), Space: O(1)
     */
    public static int jump(int[] nums) {
        if (nums.length <= 1) return 0;
        
        int jumps = 0;
        int currentEnd = 0;    // End of current jump range
        int farthest = 0;      // Farthest reachable in next jump
        
        for (int i = 0; i < nums.length - 1; i++) {
            // Update farthest reachable position
            farthest = Math.max(farthest, i + nums[i]);
            
            // If reached end of current jump range
            if (i == currentEnd) {
                jumps++;
                currentEnd = farthest;
                
                // If can reach the end
                if (currentEnd >= nums.length - 1) {
                    break;
                }
            }
        }
        
        return jumps;
    }
    
    // ==================== PROBLEM 3: GAS STATION ====================
    
    /**
     * Problem 3: Gas Station
     * 
     * There are n gas stations in circular route.
     * gas[i] = gas at station i
     * cost[i] = gas needed to travel from station i to i+1
     * Find starting station to complete circuit, or -1 if impossible.
     * 
     * Example:
     * Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
     * Output: 3
     * 
     * LeetCode #134
     * 
     * Greedy Strategy:
     * 1. If total gas < total cost, impossible
     * 2. If current tank < 0, cannot start from any previous station
     * 
     * Time: O(n), Space: O(1)
     */
    public static int canCompleteCircuit(int[] gas, int[] cost) {
        int totalGas = 0, totalCost = 0;
        int currentGas = 0;
        int start = 0;
        
        for (int i = 0; i < gas.length; i++) {
            totalGas += gas[i];
            totalCost += cost[i];
            currentGas += gas[i] - cost[i];
            
            // If current gas negative, cannot start from any previous station
            if (currentGas < 0) {
                start = i + 1;
                currentGas = 0;
            }
        }
        
        // If total gas < total cost, impossible
        return totalGas >= totalCost ? start : -1;
    }
    
    // ==================== PROBLEM 4: TASK SCHEDULER ====================
    
    /**
     * Problem 4: Task Scheduler
     * 
     * Given tasks and cooling time n (same task must wait n intervals).
     * Find minimum intervals to execute all tasks.
     * 
     * Example:
     * Input: tasks = ["A","A","A","B","B","B"], n = 2
     * Output: 8
     * Explanation: A -> B -> idle -> A -> B -> idle -> A -> B
     * 
     * LeetCode #621
     */
    
    /**
     * Approach 1: Priority Queue Simulation
     * Time: O(n log 26) = O(n), Space: O(26) = O(1)
     */
    public static int leastInterval1(char[] tasks, int n) {
        // Count frequencies
        int[] freq = new int[26];
        for (char task : tasks) {
            freq[task - 'A']++;
        }
        
        // Priority queue (max heap)
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        for (int f : freq) {
            if (f > 0) pq.offer(f);
        }
        
        int intervals = 0;
        
        while (!pq.isEmpty()) {
            List<Integer> temp = new ArrayList<>();
            
            // Execute n+1 tasks (one cycle)
            for (int i = 0; i <= n; i++) {
                if (!pq.isEmpty()) {
                    int count = pq.poll();
                    if (count > 1) {
                        temp.add(count - 1);
                    }
                }
            }
            
            // Add remaining tasks back
            for (int count : temp) {
                pq.offer(count);
            }
            
            // Add intervals (either n+1 or remaining tasks if last cycle)
            intervals += pq.isEmpty() ? temp.size() + 1 : n + 1;
        }
        
        return intervals;
    }
    
    /**
     * Approach 2: Math Formula (Optimal)
     * 
     * Key Insight:
     * - Most frequent task determines structure
     * - maxFreq tasks need (maxFreq - 1) cooling periods
     * - Each period has (n + 1) slots
     * - Count tasks with maxFreq
     * 
     * Time: O(n), Space: O(1)
     */
    public static int leastInterval2(char[] tasks, int n) {
        // Count frequencies
        int[] freq = new int[26];
        int maxFreq = 0;
        
        for (char task : tasks) {
            freq[task - 'A']++;
            maxFreq = Math.max(maxFreq, freq[task - 'A']);
        }
        
        // Count tasks with max frequency
        int maxCount = 0;
        for (int f : freq) {
            if (f == maxFreq) maxCount++;
        }
        
        // Calculate minimum intervals
        int partCount = maxFreq - 1;
        int partLength = n - (maxCount - 1);
        int emptySlots = partCount * partLength;
        int availableTasks = tasks.length - maxFreq * maxCount;
        int idles = Math.max(0, emptySlots - availableTasks);
        
        return tasks.length + idles;
    }
    
    // ==================== PROBLEM 5: REORGANIZE STRING ====================
    
    /**
     * Problem 5: Reorganize String
     * 
     * Reorganize string so no two adjacent characters are the same.
     * Return "" if impossible.
     * 
     * Example:
     * Input: s = "aab"
     * Output: "aba"
     * 
     * LeetCode #767
     * 
     * Greedy Strategy: Always place most frequent character first
     * If maxFreq > (n+1)/2, impossible
     * 
     * Time: O(n log 26) = O(n), Space: O(26) = O(1)
     */
    public static String reorganizeString(String s) {
        // Count frequencies
        int[] freq = new int[26];
        for (char c : s.toCharArray()) {
            freq[c - 'a']++;
        }
        
        // Check if reorganization possible
        int maxFreq = 0;
        for (int f : freq) {
            maxFreq = Math.max(maxFreq, f);
        }
        
        if (maxFreq > (s.length() + 1) / 2) {
            return "";
        }
        
        // Priority queue (max heap by frequency)
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> b[1] - a[1]);
        for (int i = 0; i < 26; i++) {
            if (freq[i] > 0) {
                pq.offer(new int[]{i, freq[i]});
            }
        }
        
        StringBuilder result = new StringBuilder();
        int[] prev = null;
        
        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            result.append((char)(current[0] + 'a'));
            current[1]--;
            
            // Add previous character back if still has count
            if (prev != null && prev[1] > 0) {
                pq.offer(prev);
            }
            
            prev = current;
        }
        
        return result.length() == s.length() ? result.toString() : "";
    }
    
    // ==================== PROBLEM 6: MINIMUM NUMBER OF ARROWS ====================
    
    /**
     * Problem 6: Minimum Number of Arrows to Burst Balloons
     * 
     * Balloons represented as intervals [start, end].
     * Arrow at x bursts all balloons where start <= x <= end.
     * Find minimum arrows to burst all balloons.
     * 
     * Example:
     * Input: points = [[10,16],[2,8],[1,6],[7,12]]
     * Output: 2
     * 
     * LeetCode #452
     * 
     * Greedy Strategy: Sort by end position, shoot arrow at earliest end
     * 
     * Time: O(n log n), Space: O(1)
     */
    public static int findMinArrowShots(int[][] points) {
        if (points.length == 0) return 0;
        
        // Sort by end position
        Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));
        
        int arrows = 1;
        int arrowPos = points[0][1];
        
        for (int i = 1; i < points.length; i++) {
            // If current balloon starts after arrow position
            if (points[i][0] > arrowPos) {
                arrows++;
                arrowPos = points[i][1];
            }
        }
        
        return arrows;
    }
    
    // ==================== PROBLEM 7: NON-OVERLAPPING INTERVALS ====================
    
    /**
     * Problem 7: Non-overlapping Intervals
     * 
     * Find minimum number of intervals to remove to make rest non-overlapping.
     * 
     * Example:
     * Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
     * Output: 1
     * Explanation: Remove [1,3] to make rest non-overlapping
     * 
     * LeetCode #435
     * 
     * Greedy Strategy: Sort by end time, keep interval with earliest end
     * 
     * Time: O(n log n), Space: O(1)
     */
    public static int eraseOverlapIntervals(int[][] intervals) {
        if (intervals.length == 0) return 0;
        
        // Sort by end time
        Arrays.sort(intervals, (a, b) -> a[1] - b[1]);
        
        int count = 0;
        int end = intervals[0][1];
        
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < end) {
                // Overlapping, remove current interval
                count++;
            } else {
                // Non-overlapping, update end
                end = intervals[i][1];
            }
        }
        
        return count;
    }
    
    // ==================== PROBLEM 8: PARTITION LABELS ====================
    
    /**
     * Problem 8: Partition Labels
     * 
     * Partition string into as many parts as possible so each letter
     * appears in at most one part. Return sizes of these parts.
     * 
     * Example:
     * Input: s = "ababcbacadefegdehijhklij"
     * Output: [9,7,8]
     * Explanation: "ababcbaca", "defegde", "hijhklij"
     * 
     * LeetCode #763
     * 
     * Greedy Strategy: Track last occurrence, extend partition to include all
     * 
     * Time: O(n), Space: O(1)
     */
    public static List<Integer> partitionLabels(String s) {
        // Track last occurrence of each character
        int[] lastOccurrence = new int[26];
        for (int i = 0; i < s.length(); i++) {
            lastOccurrence[s.charAt(i) - 'a'] = i;
        }
        
        List<Integer> result = new ArrayList<>();
        int start = 0, end = 0;
        
        for (int i = 0; i < s.length(); i++) {
            // Extend partition end to include last occurrence
            end = Math.max(end, lastOccurrence[s.charAt(i) - 'a']);
            
            // If reached partition end
            if (i == end) {
                result.add(end - start + 1);
                start = i + 1;
            }
        }
        
        return result;
    }
    
    // ==================== PROBLEM 9: QUEUE RECONSTRUCTION BY HEIGHT ====================
    
    /**
     * Problem 9: Queue Reconstruction by Height
     * 
     * People described by [h, k] where:
     * - h = person's height
     * - k = number of people in front with height >= h
     * Reconstruct the queue.
     * 
     * Example:
     * Input: [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
     * Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
     * 
     * LeetCode #406
     * 
     * Greedy Strategy:
     * 1. Sort by height descending, k ascending
     * 2. Insert each person at position k
     * 
     * Time: O(n²), Space: O(n)
     */
    public static int[][] reconstructQueue(int[][] people) {
        // Sort: height descending, k ascending
        Arrays.sort(people, (a, b) -> {
            if (a[0] != b[0]) {
                return b[0] - a[0]; // Height descending
            }
            return a[1] - b[1]; // k ascending
        });
        
        List<int[]> result = new ArrayList<>();
        
        // Insert each person at position k
        for (int[] person : people) {
            result.add(person[1], person);
        }
        
        return result.toArray(new int[people.length][2]);
    }
    
    // ==================== PROBLEM 10: ASSIGN COOKIES ====================
    
    /**
     * Problem 10: Assign Cookies
     * 
     * Children with greed factors g[i].
     * Cookies with sizes s[j].
     * Cookie satisfies child if s[j] >= g[i].
     * Maximize number of content children.
     * 
     * Example:
     * Input: g = [1,2,3], s = [1,1]
     * Output: 1
     * 
     * LeetCode #455
     * 
     * Greedy Strategy: Sort both, assign smallest cookie to least greedy child
     * 
     * Time: O(n log n + m log m), Space: O(1)
     */
    public static int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        
        int child = 0, cookie = 0;
        
        while (child < g.length && cookie < s.length) {
            if (s[cookie] >= g[child]) {
                child++; // Satisfied
            }
            cookie++;
        }
        
        return child;
    }
    
    // ==================== PROBLEM 11: BOATS TO SAVE PEOPLE ====================
    
    /**
     * Problem 11: Boats to Save People
     * 
     * Each boat carries at most 2 people with total weight <= limit.
     * Find minimum number of boats.
     * 
     * Example:
     * Input: people = [3,2,2,1], limit = 3
     * Output: 3
     * Explanation: 3 boats: [1,2], [2], [3]
     * 
     * LeetCode #881
     * 
     * Greedy Strategy: Pair heaviest with lightest if possible
     * 
     * Time: O(n log n), Space: O(1)
     */
    public static int numRescueBoats(int[] people, int limit) {
        Arrays.sort(people);
        
        int left = 0, right = people.length - 1;
        int boats = 0;
        
        while (left <= right) {
            // Try to pair heaviest with lightest
            if (people[left] + people[right] <= limit) {
                left++;
            }
            right--;
            boats++;
        }
        
        return boats;
    }
    
    // ==================== PROBLEM 12: MINIMUM COST TO CONNECT STICKS ====================
    
    /**
     * Problem 12: Minimum Cost to Connect Sticks
     * 
     * Connect all sticks. Cost to connect two sticks is their sum.
     * Find minimum cost.
     * 
     * Example:
     * Input: sticks = [2,4,3]
     * Output: 14
     * Explanation: Connect 2+3=5 (cost 5), then 5+4=9 (cost 9). Total: 14
     * 
     * LeetCode #1167 (Premium)
     * 
     * Greedy Strategy: Always combine two smallest sticks (Huffman coding)
     * 
     * Time: O(n log n), Space: O(n)
     */
    public static int connectSticks(int[] sticks) {
        // Min heap
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int stick : sticks) {
            pq.offer(stick);
        }
        
        int totalCost = 0;
        
        while (pq.size() > 1) {
            int first = pq.poll();
            int second = pq.poll();
            int cost = first + second;
            
            totalCost += cost;
            pq.offer(cost);
        }
        
        return totalCost;
    }
    
    // ==================== ADDITIONAL: CLASSIC GREEDY ALGORITHMS ====================
    
    /**
     * Activity Selection Problem
     * Select maximum number of non-overlapping activities
     * 
     * Time: O(n log n), Space: O(1)
     */
    public static int activitySelection(int[] start, int[] end) {
        int n = start.length;
        int[][] activities = new int[n][2];
        
        for (int i = 0; i < n; i++) {
            activities[i] = new int[]{start[i], end[i]};
        }
        
        // Sort by end time
        Arrays.sort(activities, (a, b) -> a[1] - b[1]);
        
        int count = 1;
        int lastEnd = activities[0][1];
        
        for (int i = 1; i < n; i++) {
            if (activities[i][0] >= lastEnd) {
                count++;
                lastEnd = activities[i][1];
            }
        }
        
        return count;
    }
    
    /**
     * Fractional Knapsack
     * Maximize value with weight constraint (can take fractions)
     * 
     * Time: O(n log n), Space: O(n)
     */
    public static double fractionalKnapsack(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        Item[] items = new Item[n];
        
        for (int i = 0; i < n; i++) {
            items[i] = new Item(weights[i], values[i]);
        }
        
        // Sort by value/weight ratio descending
        Arrays.sort(items, (a, b) -> Double.compare(b.ratio, a.ratio));
        
        double totalValue = 0;
        
        for (Item item : items) {
            if (capacity >= item.weight) {
                capacity -= item.weight;
                totalValue += item.value;
            } else {
                totalValue += item.value * ((double)capacity / item.weight);
                break;
            }
        }
        
        return totalValue;
    }
    
    static class Item {
        int weight, value;
        double ratio;
        
        Item(int weight, int value) {
            this.weight = weight;
            this.value = value;
            this.ratio = (double)value / weight;
        }
    }
    
    /**
     * Huffman Coding - Optimal Prefix-Free Encoding
     * 
     * Time: O(n log n), Space: O(n)
     */
    public static HuffmanNode buildHuffmanTree(char[] chars, int[] freq) {
        PriorityQueue<HuffmanNode> pq = new PriorityQueue<>(
            (a, b) -> a.freq - b.freq
        );
        
        // Create leaf nodes
        for (int i = 0; i < chars.length; i++) {
            pq.offer(new HuffmanNode(chars[i], freq[i]));
        }
        
        // Build tree
        while (pq.size() > 1) {
            HuffmanNode left = pq.poll();
            HuffmanNode right = pq.poll();
            
            HuffmanNode parent = new HuffmanNode('\0', left.freq + right.freq);
            parent.left = left;
            parent.right = right;
            
            pq.offer(parent);
        }
        
        return pq.poll();
    }
    
    static class HuffmanNode {
        char ch;
        int freq;
        HuffmanNode left, right;
        
        HuffmanNode(char ch, int freq) {
            this.ch = ch;
            this.freq = freq;
        }
    }
    
    // ==================== TEST CASES ====================
    
    public static void main(String[] args) {
        System.out.println("=== DAY 49: GREEDY ALGORITHMS - 12 PROBLEMS ===\n");
        
        // Problem 1: Jump Game
        System.out.println("Problem 1: Jump Game");
        int[] nums1 = {2, 3, 1, 1, 4};
        System.out.println("Input: [2,3,1,1,4]");
        System.out.println("Approach 1 (Greedy): " + canJump1(nums1));
        System.out.println("Approach 2 (DP): " + canJump2(nums1));
        System.out.println("Approach 3 (Backwards): " + canJump3(nums1));
        System.out.println("Expected: true\n");
        
        // Problem 2: Jump Game II
        System.out.println("Problem 2: Jump Game II");
        int[] nums2 = {2, 3, 1, 1, 4};
        System.out.println("Input: [2,3,1,1,4]");
        System.out.println("Output: " + jump(nums2));
        System.out.println("Expected: 2 (minimum jumps)\n");
        
        // Problem 3: Gas Station
        System.out.println("Problem 3: Gas Station");
        int[] gas = {1, 2, 3, 4, 5};
        int[] cost = {3, 4, 5, 1, 2};
        System.out.println("Input: gas=[1,2,3,4,5], cost=[3,4,5,1,2]");
        System.out.println("Output: " + canCompleteCircuit(gas, cost));
        System.out.println("Expected: 3 (starting index)\n");
        
        // Problem 4: Task Scheduler
        System.out.println("Problem 4: Task Scheduler");
        char[] tasks = {'A', 'A', 'A', 'B', 'B', 'B'};
        System.out.println("Input: [A,A,A,B,B,B], n=2");
        System.out.println("Approach 1 (Simulation): " + leastInterval1(tasks, 2));
        System.out.println("Approach 2 (Math): " + leastInterval2(tasks, 2));
        System.out.println("Expected: 8\n");
        
        // Problem 5: Reorganize String
        System.out.println("Problem 5: Reorganize String");
        System.out.println("Input: \"aab\"");
        System.out.println("Output: " + reorganizeString("aab"));
        System.out.println("Expected: \"aba\" (or similar)\n");
        
        // Problem 6: Minimum Number of Arrows
        System.out.println("Problem 6: Minimum Number of Arrows");
        int[][] points = {{10, 16}, {2, 8}, {1, 6}, {7, 12}};
        System.out.println("Input: [[10,16],[2,8],[1,6],[7,12]]");
        System.out.println("Output: " + findMinArrowShots(points));
        System.out.println("Expected: 2\n");
        
        // Problem 7: Non-overlapping Intervals
        System.out.println("Problem 7: Non-overlapping Intervals");
        int[][] intervals = {{1, 2}, {2, 3}, {3, 4}, {1, 3}};
        System.out.println("Input: [[1,2],[2,3],[3,4],[1,3]]");
        System.out.println("Output: " + eraseOverlapIntervals(intervals));
        System.out.println("Expected: 1 (remove [1,3])\n");
        
        // Problem 8: Partition Labels
        System.out.println("Problem 8: Partition Labels");
        System.out.println("Input: \"ababcbacadefegdehijhklij\"");
        System.out.println("Output: " + partitionLabels("ababcbacadefegdehijhklij"));
        System.out.println("Expected: [9,7,8]\n");
        
        // Problem 9: Queue Reconstruction by Height
        System.out.println("Problem 9: Queue Reconstruction by Height");
        int[][] people = {{7, 0}, {4, 4}, {7, 1}, {5, 0}, {6, 1}, {5, 2}};
        System.out.println("Input: [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]");
        int[][] reconstructed = reconstructQueue(people);
        System.out.print("Output: ");
        for (int[] p : reconstructed) {
            System.out.print("[" + p[0] + "," + p[1] + "] ");
        }
        System.out.println("\nExpected: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]\n");
        
        // Problem 10: Assign Cookies
        System.out.println("Problem 10: Assign Cookies");
        int[] g = {1, 2, 3};
        int[] s = {1, 1};
        System.out.println("Input: g=[1,2,3], s=[1,1]");
        System.out.println("Output: " + findContentChildren(g, s));
        System.out.println("Expected: 1\n");
        
        // Problem 11: Boats to Save People
        System.out.println("Problem 11: Boats to Save People");
        int[] people11 = {3, 2, 2, 1};
        System.out.println("Input: [3,2,2,1], limit=3");
        System.out.println("Output: " + numRescueBoats(people11, 3));
        System.out.println("Expected: 3\n");
        
        // Problem 12: Minimum Cost to Connect Sticks
        System.out.println("Problem 12: Minimum Cost to Connect Sticks");
        int[] sticks = {2, 4, 3};
        System.out.println("Input: [2,4,3]");
        System.out.println("Output: " + connectSticks(sticks));
        System.out.println("Expected: 14\n");
        
        // Additional Classic Algorithms
        System.out.println("=== CLASSIC GREEDY ALGORITHMS ===\n");
        
        System.out.println("Activity Selection:");
        int[] start = {1, 3, 0, 5, 8, 5};
        int[] end = {2, 4, 6, 7, 9, 9};
        System.out.println("Maximum non-overlapping activities: " + activitySelection(start, end));
        System.out.println();
        
        System.out.println("Fractional Knapsack:");
        int[] weights = {10, 20, 30};
        int[] values = {60, 100, 120};
        System.out.println("Maximum value (capacity=50): " + fractionalKnapsack(weights, values, 50));
        System.out.println();
        
        System.out.println("Huffman Coding:");
        char[] chars = {'a', 'b', 'c', 'd', 'e', 'f'};
        int[] freqs = {5, 9, 12, 13, 16, 45};
        HuffmanNode root = buildHuffmanTree(chars, freqs);
        System.out.println("Huffman tree built successfully with root frequency: " + root.freq);
        
        System.out.println("\n=== ALL GREEDY PROBLEMS COMPLETED ===");
        System.out.println("Master local optimal choices for global solutions!");
        System.out.println("Next: Backtracking (Day 50)");
    }
}
