package greedy.questions;

/*
 * 13. NON-OVERLAPPING INTERVALS (LeetCode 435)
 *
 * Problem Statement:
 * Given an array of intervals intervals where intervals[i] = [start_i, end_i],
 * return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
 *
 * Conceptual Understanding:
 * - Greedy algorithm: sort by end time, remove minimum intervals
 * - Always prefer to keep intervals that end earliest
 * - When overlap occurs, remove the one that ends latest
 * - This maximizes space for remaining intervals
 *
 * Key Insight: Sort by end time to minimize conflicts
 *
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(1) excluding input
 */

import java.util.Arrays;

public class NonOverlappingIntervals13 {

    // Method 1: Greedy - Sort by end time
    public int eraseOverlapIntervals(int[][] intervals) {
        if (intervals == null || intervals.length <= 1) {
            return 0;
        }

        // Sort intervals by end time
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));

        int removals = 0;
        int prevEnd = intervals[0][1];

        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < prevEnd) {
                // Overlap: remove current interval (ends later)
                removals++;
            } else {
                // No overlap: update prevEnd
                prevEnd = intervals[i][1];
            }
        }

        return removals;
    }

    // Method 2: Alternative implementation with same logic
    public int eraseOverlapIntervalsAlternative(int[][] intervals) {
        if (intervals == null || intervals.length <= 1) {
            return 0;
        }

        // Sort by end time ascending
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[1]));

        int count = 0;
        int end = Integer.MIN_VALUE;

        for (int[] interval : intervals) {
            if (interval[0] >= end) {
                // No overlap, keep this interval
                end = interval[1];
            } else {
                // Overlap, remove this interval
                count++;
            }
        }

        return count;
    }

    // Test cases
    public static void main(String[] args) {
        NonOverlappingIntervals13 solution = new NonOverlappingIntervals13();

        // Test Case 1: Overlapping intervals
        int[][] intervals1 = {{1, 2}, {2, 3}, {3, 4}, {1, 3}};
        System.out.println("Test 1: " + solution.eraseOverlapIntervals(intervals1)); // Expected: 1

        // Test Case 2: No overlapping
        int[][] intervals2 = {{1, 2}, {2, 3}};
        System.out.println("Test 2: " + solution.eraseOverlapIntervals(intervals2)); // Expected: 0

        // Test Case 3: All overlapping
        int[][] intervals3 = {{1, 100}, {11, 22}, {1, 11}, {2, 12}};
        System.out.println("Test 3: " + solution.eraseOverlapIntervals(intervals3)); // Expected: 2
    }
}