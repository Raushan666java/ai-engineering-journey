/*
 * 10. MINIMUM NUMBER OF ARROWS TO BURST BALLOONS (LeetCode 452)
 *
 * Problem Statement:
 * There are some spherical balloons taped onto a flat wall that represents the XY-plane.
 * The balloons are represented as a 2D integer array points where points[i] = [x_start, x_end]
 * denotes a balloon whose horizontal diameter stretches between x_start and x_end.
 * You do not know the exact y-positions of the balloons.
 *
 * Arrows can be shot up directly vertically (in the positive y-direction) from different points
 * along the x-axis. A balloon with x_start and x_end bursts by an arrow shot at position x
 * if x_start <= x <= x_end. An arrow once shot keeps traveling up infinitely.
 *
 * You want to find the minimum number of arrows that must be shot to burst all balloons.
 *
 * Conceptual Understanding:
 * - Greedy algorithm: sort balloons by end position
 * - Shoot arrow at the end position of current balloon
 * - All balloons that overlap with this position will be burst
 * - Move to next non-overlapping balloon
 *
 * Key Insight: Sort by end position to minimize arrows needed
 *
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(1) excluding input
 */

import java.util.Arrays;

public class MinimumArrowsBurstBalloons {

    // Method 1: Greedy Approach - Sort by end position
    public int findMinArrowShots(int[][] points) {
        if (points == null || points.length == 0) {
            return 0;
        }

        // Sort balloons by their end position
        Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));

        int arrows = 1;           // At least one arrow needed
        int currentEnd = points[0][1];  // Position of first arrow

        for (int i = 1; i < points.length; i++) {
            // If current balloon starts after current arrow position
            if (points[i][0] > currentEnd) {
                arrows++;                    // Need new arrow
                currentEnd = points[i][1];   // Update arrow position
            }
            // Current balloon overlaps, so it will be burst by current arrow
        }

        return arrows;
    }

    // Method 2: Alternative implementation with same logic
    public int findMinArrowShotsAlternative(int[][] points) {
        if (points == null || points.length == 0) {
            return 0;
        }

        // Sort by end position
        Arrays.sort(points, (a, b) -> a[1] - b[1]);

        int arrows = 1;
        int arrowPos = points[0][1];

        for (int i = 1; i < points.length; i++) {
            // If current balloon doesn't overlap with current arrow
            if (points[i][0] > arrowPos) {
                arrows++;
                arrowPos = points[i][1];
            }
        }

        return arrows;
    }

    // Method 3: Sort by start position (less optimal)
    public int findMinArrowShotsStartSort(int[][] points) {
        if (points == null || points.length == 0) {
            return 0;
        }

        // Sort by start position
        Arrays.sort(points, (a, b) -> Integer.compare(a[0], b[0]));

        int arrows = 1;
        int currentEnd = points[0][1];

        for (int i = 1; i < points.length; i++) {
            // If no overlap with current arrow range
            if (points[i][0] > currentEnd) {
                arrows++;
                currentEnd = points[i][1];
            } else {
                // Update current end to minimum of current ranges
                currentEnd = Math.min(currentEnd, points[i][1]);
            }
        }

        return arrows;
    }

    // Method 4: Interval scheduling approach
    public int findMinArrowShotsInterval(int[][] points) {
        if (points == null || points.length == 0) {
            return 0;
        }

        // Sort by end position
        Arrays.sort(points, (a, b) -> a[1] - b[1]);

        int arrows = 0;
        int i = 0;

        while (i < points.length) {
            arrows++;
            int end = points[i][1];

            // Skip all balloons that are covered by this arrow
            while (i < points.length && points[i][0] <= end) {
                i++;
            }
        }

        return arrows;
    }

    // Test cases
    public static void main(String[] args) {
        MinimumArrowsBurstBalloons solution = new MinimumArrowsBurstBalloons();

        // Test Case 1: Overlapping balloons
        int[][] points1 = {{10, 16}, {2, 8}, {1, 6}, {7, 12}};
        System.out.println("Test 1: " + solution.findMinArrowShots(points1)); // Expected: 2

        // Test Case 2: Non-overlapping balloons
        int[][] points2 = {{1, 2}, {3, 4}, {5, 6}, {7, 8}};
        System.out.println("Test 2: " + solution.findMinArrowShots(points2)); // Expected: 4

        // Test Case 3: Single balloon
        int[][] points3 = {{1, 5}};
        System.out.println("Test 3: " + solution.findMinArrowShots(points3)); // Expected: 1

        // Test Case 4: All overlapping
        int[][] points4 = {{1, 10}, {2, 8}, {3, 7}, {4, 6}};
        System.out.println("Test 4: " + solution.findMinArrowShots(points4)); // Expected: 1

        // Test Case 5: Empty array
        int[][] points5 = {};
        System.out.println("Test 5: " + solution.findMinArrowShots(points5)); // Expected: 0

        // Test Case 6: Complex overlapping
        int[][] points6 = {{9, 12}, {1, 10}, {4, 11}, {8, 12}, {3, 9}, {6, 9}, {6, 7}};
        System.out.println("Test 6: " + solution.findMinArrowShots(points6)); // Expected: 2
    }
}