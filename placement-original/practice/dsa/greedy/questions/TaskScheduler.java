/*
 * 9. TASK SCHEDULER (LeetCode 621)
 *
 * Problem Statement:
 * Given a characters array tasks, representing the tasks a CPU needs to do, where each letter
 * represents a different task. Tasks could be done in any order. Each task is done in one unit of time.
 * For each unit of time, the CPU could complete either one task or just be idle.
 *
 * However, there is a non-negative integer n that represents the cooldown period between two same tasks
 * (the same letter in the array), that is that there must be at least n units of time between any two same tasks.
 *
 * Return the least number of units of time that the CPU will take to finish all the tasks.
 *
 * Conceptual Understanding:
 * - Schedule tasks with cooldown constraint
 * - Use greedy approach: schedule most frequent tasks first with maximum spacing
 * - Calculate idle time needed between same tasks
 * - Key insight: The minimum time is determined by the most frequent task
 *
 * Time Complexity: O(n) where n is number of tasks
 * Space Complexity: O(1) since only 26 possible tasks
 */

import java.util.*;

public class TaskScheduler {

    // Method 1: Greedy Approach - Calculate idle slots
    public int leastInterval(char[] tasks, int n) {
        if (tasks == null || tasks.length == 0) {
            return 0;
        }

        // Count frequency of each task
        int[] frequency = new int[26];
        for (char task : tasks) {
            frequency[task - 'A']++;
        }

        // Find maximum frequency and count of tasks with that frequency
        int maxFreq = 0;
        int maxCount = 0;

        for (int freq : frequency) {
            if (freq > maxFreq) {
                maxFreq = freq;
                maxCount = 1;
            } else if (freq == maxFreq) {
                maxCount++;
            }
        }

        // Calculate minimum time needed
        // Formula: (maxFreq - 1) * (n + 1) + maxCount
        int minTime = (maxFreq - 1) * (n + 1) + maxCount;

        // Return maximum of calculated time and total tasks
        return Math.max(minTime, tasks.length);
    }

    // Method 2: Priority Queue Approach (More intuitive)
    public int leastIntervalPQ(char[] tasks, int n) {
        if (tasks == null || tasks.length == 0) {
            return 0;
        }

        // Count frequencies
        int[] frequency = new int[26];
        for (char task : tasks) {
            frequency[task - 'A']++;
        }

        // Max heap for frequencies
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        for (int freq : frequency) {
            if (freq > 0) {
                pq.offer(freq);
            }
        }

        int time = 0;

        while (!pq.isEmpty()) {
            int cycle = n + 1;
            List<Integer> temp = new ArrayList<>();

            // Execute tasks in current cycle
            for (int i = 0; i < cycle; i++) {
                if (!pq.isEmpty()) {
                    int freq = pq.poll();
                    freq--;
                    if (freq > 0) {
                        temp.add(freq);
                    }
                }
                time++;

                // If all tasks are done, we can break early
                if (pq.isEmpty() && temp.isEmpty()) {
                    break;
                }
            }

            // Add remaining tasks back to queue
            for (int freq : temp) {
                pq.offer(freq);
            }
        }

        return time;
    }

    // Method 3: Mathematical approach with detailed calculation
    public int leastIntervalMath(char[] tasks, int n) {
        if (tasks == null || tasks.length == 0) {
            return 0;
        }

        int[] count = new int[26];
        for (char task : tasks) {
            count[task - 'A']++;
        }

        Arrays.sort(count);

        int maxFreq = count[25];  // Most frequent task
        int idleSlots = (maxFreq - 1) * n;

        // Fill idle slots with other tasks
        for (int i = 24; i >= 0 && idleSlots > 0; i--) {
            idleSlots -= Math.min(maxFreq - 1, count[i]);
        }

        // If idle slots become negative, no idle time needed
        idleSlots = Math.max(0, idleSlots);

        return tasks.length + idleSlots;
    }

    // Test cases
    public static void main(String[] args) {
        TaskScheduler solution = new TaskScheduler();

        // Test Case 1: Basic case
        char[] tasks1 = {'A', 'A', 'A', 'B', 'B', 'B'};
        System.out.println("Test 1: " + solution.leastInterval(tasks1, 2)); // Expected: 8

        // Test Case 2: No cooldown
        char[] tasks2 = {'A', 'B', 'C'};
        System.out.println("Test 2: " + solution.leastInterval(tasks2, 0)); // Expected: 3

        // Test Case 3: Single task
        char[] tasks3 = {'A'};
        System.out.println("Test 3: " + solution.leastInterval(tasks3, 2)); // Expected: 1

        // Test Case 4: All same tasks
        char[] tasks4 = {'A', 'A', 'A'};
        System.out.println("Test 4: " + solution.leastInterval(tasks4, 2)); // Expected: 7

        // Test Case 5: Complex case
        char[] tasks5 = {'A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'};
        System.out.println("Test 5: " + solution.leastInterval(tasks5, 2)); // Expected: 16
    }
}