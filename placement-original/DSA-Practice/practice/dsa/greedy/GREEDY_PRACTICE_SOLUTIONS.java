package practice.dsa.greedy;

/**
 * GREEDY ALGORITHMS PRACTICE SOLUTIONS
 * Complete collection of greedy algorithm problems with solutions
 * Difficulty: Easy → Medium → Hard
 */

import java.util.*;

public class GREEDY_PRACTICE_SOLUTIONS {

    // ==========================================
    // EASY LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 1: Assign Cookies
     * Time: O(n log n), Space: O(1)
     */
    public static int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);

        int i = 0, j = 0;
        while (i < g.length && j < s.length) {
            if (s[j] >= g[i]) {
                i++;
            }
            j++;
        }
        return i;
    }

    /**
     * Problem 2: Lemonade Change
     * Time: O(n), Space: O(1)
     */
    public static boolean lemonadeChange(int[] bills) {
        int five = 0, ten = 0;

        for (int bill : bills) {
            if (bill == 5) {
                five++;
            } else if (bill == 10) {
                if (five == 0) return false;
                five--;
                ten++;
            } else { // bill == 20
                if (ten > 0 && five > 0) {
                    ten--;
                    five--;
                } else if (five >= 3) {
                    five -= 3;
                } else {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Problem 3: Gas Station
     * Time: O(n), Space: O(1)
     */
    public static int canCompleteCircuit(int[] gas, int[] cost) {
        int totalGas = 0, totalCost = 0, start = 0, tank = 0;

        for (int i = 0; i < gas.length; i++) {
            totalGas += gas[i];
            totalCost += cost[i];
            tank += gas[i] - cost[i];

            if (tank < 0) {
                start = i + 1;
                tank = 0;
            }
        }

        return totalGas >= totalCost ? start : -1;
    }

    /**
     * Problem 4: Is Subsequence
     * Time: O(n), Space: O(1)
     */
    public static boolean isSubsequence(String s, String t) {
        int i = 0, j = 0;

        while (i < s.length() && j < t.length()) {
            if (s.charAt(i) == t.charAt(j)) {
                i++;
            }
            j++;
        }

        return i == s.length();
    }

    /**
     * Problem 5: Maximum Subarray (Kadane's Algorithm)
     * Time: O(n), Space: O(1)
     */
    public static int maxSubArray(int[] nums) {
        int maxSoFar = nums[0], maxEndingHere = nums[0];

        for (int i = 1; i < nums.length; i++) {
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    /**
     * Problem 6: Best Time to Buy and Sell Stock
     * Time: O(n), Space: O(1)
     */
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

    // ==========================================
    // MEDIUM LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 7: Jump Game
     * Time: O(n), Space: O(1)
     */
    public static boolean canJump(int[] nums) {
        int farthest = 0;

        for (int i = 0; i < nums.length; i++) {
            if (i > farthest) return false;

            farthest = Math.max(farthest, i + nums[i]);
            if (farthest >= nums.length - 1) return true;
        }
        return true;
    }

    /**
     * Problem 8: Jump Game II
     * Time: O(n), Space: O(1)
     */
    public static int jump(int[] nums) {
        int jumps = 0, currentEnd = 0, farthest = 0;

        for (int i = 0; i < nums.length - 1; i++) {
            farthest = Math.max(farthest, i + nums[i]);

            if (i == currentEnd) {
                jumps++;
                currentEnd = farthest;
            }
        }
        return jumps;
    }

    /**
     * Problem 9: Task Scheduler
     * Time: O(n), Space: O(1)
     */
    public static int leastInterval(char[] tasks, int n) {
        int[] freq = new int[26];
        for (char task : tasks) {
            freq[task - 'A']++;
        }

        Arrays.sort(freq);
        int maxFreq = freq[25];
        int idleTime = (maxFreq - 1) * n;

        for (int i = 24; i >= 0; i--) {
            idleTime -= Math.min(maxFreq - 1, freq[i]);
        }

        return idleTime > 0 ? idleTime + tasks.length : tasks.length;
    }

    /**
     * Problem 10: Minimum Number of Arrows to Burst Balloons
     * Time: O(n log n), Space: O(1)
     */
    public static int findMinArrowShots(int[][] points) {
        if (points.length == 0) return 0;

        Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));

        int arrows = 1;
        int end = points[0][1];

        for (int i = 1; i < points.length; i++) {
            if (points[i][0] > end) {
                arrows++;
                end = points[i][1];
            }
        }
        return arrows;
    }

    // ==========================================
    // HARD LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 11: Merge Intervals
     * Time: O(n log n), Space: O(n)
     */
    public static int[][] merge(int[][] intervals) {
        if (intervals.length == 0) return new int[0][0];

        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        List<int[]> merged = new ArrayList<>();
        int[] current = intervals[0];

        for (int i = 1; i < intervals.length; i++) {
            if (current[1] >= intervals[i][0]) {
                current[1] = Math.max(current[1], intervals[i][1]);
            } else {
                merged.add(current);
                current = intervals[i];
            }
        }
        merged.add(current);

        return merged.toArray(new int[merged.size()][]);
    }

    /**
     * Problem 12: Insert Interval
     * Time: O(n), Space: O(n)
     */
    public static int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> result = new ArrayList<>();
        int i = 0;
        int n = intervals.length;

        // Add all intervals that end before newInterval starts
        while (i < n && intervals[i][1] < newInterval[0]) {
            result.add(intervals[i]);
            i++;
        }

        // Merge overlapping intervals
        while (i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }
        result.add(newInterval);

        // Add remaining intervals
        while (i < n) {
            result.add(intervals[i]);
            i++;
        }

        return result.toArray(new int[result.size()][]);
    }

    /**
     * Problem 13: Non-overlapping Intervals
     * Time: O(n log n), Space: O(1)
     */
    public static int eraseOverlapIntervals(int[][] intervals) {
        if (intervals.length == 0) return 0;

        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));

        int count = 0;
        int end = intervals[0][1];

        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < end) {
                count++;
            } else {
                end = intervals[i][1];
            }
        }
        return count;
    }

    /**
     * Problem 14: Meeting Rooms II
     * Time: O(n log n), Space: O(n)
     */
    public static int minMeetingRooms(int[][] intervals) {
        if (intervals.length == 0) return 0;

        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        minHeap.offer(intervals[0][1]);

        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] >= minHeap.peek()) {
                minHeap.poll();
            }
            minHeap.offer(intervals[i][1]);
        }

        return minHeap.size();
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

    public static void print2DArray(int[][] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(Arrays.toString(arr[i]));
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }

    // ==========================================
    // TEST METHODS
    // ==========================================

    public static void main(String[] args) {
        System.out.println("=== GREEDY ALGORITHMS PRACTICE SOLUTIONS ===\n");

        // Test Assign Cookies
        System.out.println("1. Assign Cookies");
        int[] g1 = {1, 2, 3}, s1 = {1, 1};
        System.out.println("Children: " + Arrays.toString(g1) + ", Cookies: " + Arrays.toString(s1));
        System.out.println("Content Children: " + findContentChildren(g1, s1));
        System.out.println();

        // Test Lemonade Change
        System.out.println("2. Lemonade Change");
        int[] bills = {5, 5, 5, 10, 20};
        System.out.println("Bills: " + Arrays.toString(bills));
        System.out.println("Can give change: " + lemonadeChange(bills));
        System.out.println();

        // Test Gas Station
        System.out.println("3. Gas Station");
        int[] gas = {1, 2, 3, 4, 5}, cost = {3, 4, 5, 1, 2};
        System.out.println("Gas: " + Arrays.toString(gas) + ", Cost: " + Arrays.toString(cost));
        System.out.println("Starting station: " + canCompleteCircuit(gas, cost));
        System.out.println();

        // Test Maximum Subarray
        System.out.println("4. Maximum Subarray");
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Array: " + Arrays.toString(nums));
        System.out.println("Max Subarray Sum: " + maxSubArray(nums));
        System.out.println();

        // Test Jump Game
        System.out.println("5. Jump Game");
        int[] jumps = {2, 3, 1, 1, 4};
        System.out.println("Array: " + Arrays.toString(jumps));
        System.out.println("Can reach end: " + canJump(jumps));
        System.out.println();

        // Test Task Scheduler
        System.out.println("6. Task Scheduler");
        char[] tasks = {'A', 'A', 'A', 'B', 'B', 'B'};
        int n = 2;
        System.out.println("Tasks: " + Arrays.toString(tasks) + ", n: " + n);
        System.out.println("Least intervals: " + leastInterval(tasks, n));
        System.out.println();

        // Test Merge Intervals
        System.out.println("7. Merge Intervals");
        int[][] intervals = {{1, 3}, {2, 6}, {8, 10}, {15, 18}};
        System.out.println("Intervals: " + Arrays.deepToString(intervals));
        int[][] merged = merge(intervals);
        System.out.println("Merged: " + Arrays.deepToString(merged));
        System.out.println();

        // Test Meeting Rooms II
        System.out.println("8. Meeting Rooms II");
        int[][] meetings = {{0, 30}, {5, 10}, {15, 20}};
        System.out.println("Meetings: " + Arrays.deepToString(meetings));
        System.out.println("Min rooms needed: " + minMeetingRooms(meetings));
    }
}