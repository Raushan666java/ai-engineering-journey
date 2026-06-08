/*
 * 11. MERGE INTERVALS (LeetCode 56)
 *
 * Problem Statement:
 * Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 *
 * Conceptual Understanding:
 * - Sort intervals by start time
 * - Merge overlapping intervals greedily
 * - Two intervals [a,b] and [c,d] overlap if b >= c
 * - When merging, take min start and max end
 *
 * Key Insight: Sorting by start time allows us to process intervals in order
 *
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(n) for result, O(1) auxiliary
 */

import java.util.*;

public class MergeIntervals {

    // Method 1: Standard merge approach
    public int[][] merge(int[][] intervals) {
        if (intervals == null || intervals.length <= 1) {
            return intervals;
        }

        // Sort intervals by start time
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        List<int[]> result = new ArrayList<>();

        // Start with first interval
        int[] current = intervals[0];
        result.add(current);

        for (int i = 1; i < intervals.length; i++) {
            int currentEnd = current[1];
            int nextStart = intervals[i][0];
            int nextEnd = intervals[i][1];

            // If intervals overlap or touch
            if (currentEnd >= nextStart) {
                // Merge: extend current interval
                current[1] = Math.max(currentEnd, nextEnd);
            } else {
                // No overlap: add new interval
                current = intervals[i];
                result.add(current);
            }
        }

        return result.toArray(new int[result.size()][]);
    }

    // Method 2: Alternative implementation with cleaner logic
    public int[][] mergeAlternative(int[][] intervals) {
        if (intervals == null || intervals.length <= 1) {
            return intervals;
        }

        // Sort by start time
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));

        List<int[]> merged = new ArrayList<>();

        for (int[] interval : intervals) {
            // If merged list is empty or no overlap
            if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < interval[0]) {
                merged.add(interval);
            } else {
                // Merge with last interval
                merged.get(merged.size() - 1)[1] =
                    Math.max(merged.get(merged.size() - 1)[1], interval[1]);
            }
        }

        return merged.toArray(new int[merged.size()][]);
    }

    // Method 3: Using stack (less efficient but educational)
    public int[][] mergeWithStack(int[][] intervals) {
        if (intervals == null || intervals.length <= 1) {
            return intervals;
        }

        // Sort by start time
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

        Stack<int[]> stack = new Stack<>();

        for (int[] interval : intervals) {
            if (stack.isEmpty() || stack.peek()[1] < interval[0]) {
                stack.push(interval);
            } else {
                // Merge
                stack.peek()[1] = Math.max(stack.peek()[1], interval[1]);
            }
        }

        // Convert stack to array
        int[][] result = new int[stack.size()][2];
        for (int i = result.length - 1; i >= 0; i--) {
            result[i] = stack.pop();
        }

        return result;
    }

    // Method 4: In-place merge (modifies input)
    public int[][] mergeInPlace(int[][] intervals) {
        if (intervals == null || intervals.length <= 1) {
            return intervals;
        }

        // Sort by start time
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

        int writeIndex = 0;

        for (int i = 1; i < intervals.length; i++) {
            // If current interval overlaps with last merged
            if (intervals[writeIndex][1] >= intervals[i][0]) {
                // Merge
                intervals[writeIndex][1] = Math.max(intervals[writeIndex][1], intervals[i][1]);
            } else {
                // Move to next position
                writeIndex++;
                intervals[writeIndex] = intervals[i];
            }
        }

        // Return only the merged intervals
        return Arrays.copyOf(intervals, writeIndex + 1);
    }

    // Test cases
    public static void main(String[] args) {
        MergeIntervals solution = new MergeIntervals();

        // Test Case 1: Overlapping intervals
        int[][] intervals1 = {{1, 3}, {2, 6}, {8, 10}, {15, 18}};
        int[][] result1 = solution.merge(intervals1);
        System.out.println("Test 1: " + Arrays.deepToString(result1));
        // Expected: [[1,6],[8,10],[15,18]]

        // Test Case 2: All overlapping
        int[][] intervals2 = {{1, 4}, {2, 3}};
        int[][] result2 = solution.merge(intervals2);
        System.out.println("Test 2: " + Arrays.deepToString(result2));
        // Expected: [[1,4]]

        // Test Case 3: No overlapping
        int[][] intervals3 = {{1, 2}, {3, 4}, {5, 6}};
        int[][] result3 = solution.merge(intervals3);
        System.out.println("Test 3: " + Arrays.deepToString(result3));
        // Expected: [[1,2],[3,4],[5,6]]

        // Test Case 4: Single interval
        int[][] intervals4 = {{1, 5}};
        int[][] result4 = solution.merge(intervals4);
        System.out.println("Test 4: " + Arrays.deepToString(result4));
        // Expected: [[1,5]]

        // Test Case 5: Empty array
        int[][] intervals5 = {};
        int[][] result5 = solution.merge(intervals5);
        System.out.println("Test 5: " + Arrays.deepToString(result5));
        // Expected: []
    }
}