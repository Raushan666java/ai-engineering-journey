package greedy.questions;

/*
 * 14. MEETING ROOMS II (LeetCode 253)
 *
 * Problem Statement:
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...]
 * find the minimum number of conference rooms required.
 *
 * Conceptual Understanding:
 * - Sort meetings by start time
 * - Use min-heap (priority queue) to track end times of meetings in rooms
 * - When new meeting starts, check if earliest ending meeting has ended
 * - If yes, reuse that room; if no, need new room
 *
 * Key Insight: Track the earliest end time to maximize room reuse
 *
 * Time Complexity: O(n log n) due to sorting and heap operations
 * Space Complexity: O(n) for the heap
 */

import java.util.*;

public class MeetingRoomsII14 {

    // Method 1: Priority Queue (Min Heap) approach
    public int minMeetingRooms(int[][] intervals) {
        if (intervals == null || intervals.length == 0) {
            return 0;
        }

        // Sort meetings by start time
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        // Min heap to track end times of meetings in rooms
        PriorityQueue<Integer> rooms = new PriorityQueue<>();

        // Add first meeting
        rooms.offer(intervals[0][1]);

        for (int i = 1; i < intervals.length; i++) {
            // If earliest ending meeting has ended, reuse that room
            if (intervals[i][0] >= rooms.peek()) {
                rooms.poll();
            }

            // Add current meeting to a room
            rooms.offer(intervals[i][1]);
        }

        return rooms.size();
    }

    // Method 2: Two-pointer approach (more efficient)
    public int minMeetingRoomsTwoPointers(int[][] intervals) {
        if (intervals == null || intervals.length == 0) {
            return 0;
        }

        int n = intervals.length;

        // Separate start and end times
        int[] starts = new int[n];
        int[] ends = new int[n];

        for (int i = 0; i < n; i++) {
            starts[i] = intervals[i][0];
            ends[i] = intervals[i][1];
        }

        // Sort start and end times
        Arrays.sort(starts);
        Arrays.sort(ends);

        int rooms = 0;
        int endPtr = 0;

        // Iterate through start times
        for (int start : starts) {
            // If current meeting starts after earliest end, free up a room
            if (start >= ends[endPtr]) {
                endPtr++;
            } else {
                // Need a new room
                rooms++;
            }
        }

        return rooms;
    }

    // Method 3: Sweep line algorithm
    public int minMeetingRoomsSweepLine(int[][] intervals) {
        if (intervals == null || intervals.length == 0) {
            return 0;
        }

        List<int[]> events = new ArrayList<>();

        // Create events: +1 for start, -1 for end
        for (int[] interval : intervals) {
            events.add(new int[]{interval[0], 1});  // Start event
            events.add(new int[]{interval[1], -1}); // End event
        }

        // Sort events: by time, then by type (end before start if same time)
        events.sort((a, b) -> {
            if (a[0] != b[0]) return Integer.compare(a[0], b[0]);
            return Integer.compare(a[1], b[1]);
        });

        int rooms = 0;
        int currentRooms = 0;

        for (int[] event : events) {
            currentRooms += event[1]; // +1 for start, -1 for end
            rooms = Math.max(rooms, currentRooms);
        }

        return rooms;
    }

    // Test cases
    public static void main(String[] args) {
        MeetingRoomsII14 solution = new MeetingRoomsII14();

        // Test Case 1: Overlapping meetings
        int[][] intervals1 = {{0, 30}, {5, 10}, {15, 20}};
        System.out.println("Test 1: " + solution.minMeetingRooms(intervals1)); // Expected: 2

        // Test Case 2: No overlapping
        int[][] intervals2 = {{7, 10}, {2, 4}};
        System.out.println("Test 2: " + solution.minMeetingRooms(intervals2)); // Expected: 1

        // Test Case 3: All overlapping
        int[][] intervals3 = {{1, 5}, {2, 6}, {3, 7}};
        System.out.println("Test 3: " + solution.minMeetingRooms(intervals3)); // Expected: 3

        // Test Case 4: Single meeting
        int[][] intervals4 = {{1, 3}};
        System.out.println("Test 4: " + solution.minMeetingRooms(intervals4)); // Expected: 1

        // Test Case 5: Empty array
        int[][] intervals5 = {};
        System.out.println("Test 5: " + solution.minMeetingRooms(intervals5)); // Expected: 0
    }
}