package greedy.questions;

/*
 * 12. INSERT INTERVAL (LeetCode 57)
 *
 * Problem Statement:
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [start_i, end_i]
 * represent the start and the end of the ith interval and intervals is sorted in ascending order by start_i.
 * You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by start_i
 * and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
 *
 * Conceptual Understanding:
 * - Find position to insert new interval
 * - Merge with overlapping intervals
 * - Three phases: before overlap, during overlap (merge), after overlap
 * - Greedy approach: merge all overlapping intervals into one
 *
 * Key Insight: Process intervals in order, merging when overlap occurs
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import java.util.*;

public class InsertInterval12 {

    // Method 1: Three-pass approach - before, merge, after
    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> result = new ArrayList<>();

        int i = 0;
        int n = intervals.length;

        // Phase 1: Add all intervals that end before newInterval starts
        while (i < n && intervals[i][1] < newInterval[0]) {
            result.add(intervals[i]);
            i++;
        }

        // Phase 2: Merge overlapping intervals
        while (i < n && intervals[i][0] <= newInterval[1]) {
            // Update newInterval to include current interval
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }

        // Add the merged interval
        result.add(newInterval);

        // Phase 3: Add remaining intervals
        while (i < n) {
            result.add(intervals[i]);
            i++;
        }

        return result.toArray(new int[result.size()][]);
    }

    // Method 2: Single pass with merge logic
    public int[][] insertSinglePass(int[][] intervals, int[] newInterval) {
        List<int[]> result = new ArrayList<>();
        boolean inserted = false;

        for (int[] interval : intervals) {
            if (interval[1] < newInterval[0]) {
                // Current interval ends before new interval starts
                result.add(interval);
            } else if (interval[0] > newInterval[1]) {
                // Current interval starts after new interval ends
                if (!inserted) {
                    result.add(newInterval);
                    inserted = true;
                }
                result.add(interval);
            } else {
                // Overlap: merge with newInterval
                newInterval[0] = Math.min(newInterval[0], interval[0]);
                newInterval[1] = Math.max(newInterval[1], interval[1]);
            }
        }

        // Add newInterval if not inserted yet
        if (!inserted) {
            result.add(newInterval);
        }

        return result.toArray(new int[result.size()][]);
    }

    // Test cases
    public static void main(String[] args) {
        InsertInterval solution = new InsertInterval();

        // Test Case 1: Insert in middle with merge
        int[][] intervals1 = {{1, 3}, {6, 9}};
        int[] newInterval1 = {2, 5};
        int[][] result1 = solution.insert(intervals1, newInterval1);
        System.out.println("Test 1: " + Arrays.deepToString(result1));
        // Expected: [[1,5],[6,9]]

        // Test Case 2: Insert at beginning
        int[][] intervals2 = {{1, 5}};
        int[] newInterval2 = {0, 3};
        int[][] result2 = solution.insert(intervals2, newInterval2);
        System.out.println("Test 2: " + Arrays.deepToString(result2));
        // Expected: [[0,5]]

        // Test Case 3: Insert at end
        int[][] intervals3 = {{1, 2}, {3, 5}};
        int[] newInterval3 = {6, 8};
        int[][] result3 = solution.insert(intervals3, newInterval3);
        System.out.println("Test 3: " + Arrays.deepToString(result3));
        // Expected: [[1,2],[3,5],[6,8]]
    }
}