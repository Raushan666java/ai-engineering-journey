package heaps.questions;

/*
 * 11. COURSE SCHEDULE III (LeetCode 630)
 *
 * Problem Statement:
 * There are n different online courses numbered from 1 to n. You are given an array courses where
 * courses[i] = [duration_i, lastDay_i] indicate that the ith course should be taken continuously
 * for duration_i days and must be finished before or on lastDay_i.
 *
 * You will start on the 1st day and you cannot take two or more courses simultaneously.
 * Return the maximum number of courses that you can take.
 *
 * Conceptual Understanding:
 * - Each course has duration and deadline
 * - Courses can't overlap (sequential)
 * - Must finish course by its deadline
 * - Maximize number of courses taken
 * - Key insight: Use max-heap to track course durations, replace longest duration
 *   when deadline constraint violated
 * - Greedy approach: Sort by deadline, use heap for durations
 * - When adding course exceeds deadline, replace with shorter course if possible
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

import java.util.*;

class CourseScheduleIII11 {

    // Method 1: Using Max Heap (Priority Queue)
    public int scheduleCourse(int[][] courses) {
        if (courses == null || courses.length == 0) {
            return 0;
        }

        // Sort courses by deadline (ascending)
        Arrays.sort(courses, Comparator.comparingInt(a -> a[1]));

        // Max heap to store durations of taken courses
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

        int currentTime = 0;

        for (int[] course : courses) {
            int duration = course[0];
            int deadline = course[1];

            // Try to add this course
            currentTime += duration;
            maxHeap.offer(duration);

            // If current time exceeds deadline, remove the longest course
            if (currentTime > deadline) {
                int longestDuration = maxHeap.poll();
                currentTime -= longestDuration;
            }
        }

        return maxHeap.size();
    }

    // Method 2: Using TreeMap for ordered deadlines
    public int scheduleCourseTreeMap(int[][] courses) {
        if (courses == null || courses.length == 0) {
            return 0;
        }

        // Group courses by deadline
        TreeMap<Integer, List<Integer>> deadlineToDurations = new TreeMap<>();
        for (int[] course : courses) {
            deadlineToDurations.computeIfAbsent(course[1], x -> new ArrayList<>()).add(course[0]);
        }

        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
        int currentTime = 0;
        int count = 0;

        for (Map.Entry<Integer, List<Integer>> entry : deadlineToDurations.entrySet()) {
            int deadline = entry.getKey();
            List<Integer> durations = entry.getValue();

            for (int duration : durations) {
                currentTime += duration;
                maxHeap.offer(duration);
                count++;

                // Check deadline constraint
                if (currentTime > deadline) {
                    int longest = maxHeap.poll();
                    currentTime -= longest;
                    count--;
                }
            }
        }

        return count;
    }

    // Method 3: Greedy with sorting by duration when deadlines equal
    public int scheduleCourseGreedy(int[][] courses) {
        if (courses == null || courses.length == 0) {
            return 0;
        }

        // Sort by deadline, then by duration (shorter first for same deadline)
        Arrays.sort(courses, (a, b) -> {
            if (a[1] != b[1]) return a[1] - b[1];
            return a[0] - b[0];
        });

        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
        int currentTime = 0;

        for (int[] course : courses) {
            int duration = course[0];
            int deadline = course[1];

            currentTime += duration;
            maxHeap.offer(duration);

            // If violates deadline, replace with shorter course
            if (currentTime > deadline) {
                int maxDuration = maxHeap.poll();
                currentTime -= maxDuration;
            }
        }

        return maxHeap.size();
    }

    // Method 4: Using custom Course class
    static class Course {
        int duration;
        int deadline;

        Course(int duration, int deadline) {
            this.duration = duration;
            this.deadline = deadline;
        }

        // For sorting by deadline
        public static Comparator<Course> byDeadline() {
            return Comparator.comparingInt(c -> c.deadline);
        }

        // For sorting by duration
        public static Comparator<Course> byDuration() {
            return Comparator.comparingInt(c -> c.duration);
        }
    }

    public int scheduleCourseCustomClass(int[][] courses) {
        if (courses == null || courses.length == 0) {
            return 0;
        }

        List<Course> courseList = new ArrayList<>();
        for (int[] course : courses) {
            courseList.add(new Course(course[0], course[1]));
        }

        // Sort by deadline
        courseList.sort(Course.byDeadline());

        PriorityQueue<Course> maxHeap = new PriorityQueue<>(
            (a, b) -> b.duration - a.duration
        );

        int currentTime = 0;

        for (Course course : courseList) {
            currentTime += course.duration;
            maxHeap.offer(course);

            // Check deadline
            if (currentTime > course.deadline) {
                Course longest = maxHeap.poll();
                currentTime -= longest.duration;
            }
        }

        return maxHeap.size();
    }

    // Method 5: Get course schedule sequence
    public List<int[]> getCourseSchedule(int[][] courses) {
        List<int[]> schedule = new ArrayList<>();
        if (courses == null || courses.length == 0) {
            return schedule;
        }

        // Create courses with indices
        List<int[]> courseList = new ArrayList<>();
        for (int i = 0; i < courses.length; i++) {
            courseList.add(new int[]{courses[i][0], courses[i][1], i});
        }

        // Sort by deadline
        courseList.sort(Comparator.comparingInt(a -> a[1]));

        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> b[0] - a[0]);
        int currentTime = 0;

        for (int[] course : courseList) {
            int duration = course[0];
            int deadline = course[1];
            int index = course[2];

            currentTime += duration;
            maxHeap.offer(new int[]{duration, deadline, index});

            if (currentTime > deadline) {
                int[] longest = maxHeap.poll();
                currentTime -= longest[0];
            }
        }

        // Extract the schedule
        while (!maxHeap.isEmpty()) {
            int[] course = maxHeap.poll();
            schedule.add(new int[]{course[2], course[0], course[1]}); // [index, duration, deadline]
        }

        // Reverse to get chronological order (optional)
        Collections.reverse(schedule);
        return schedule;
    }

    // Method 6: Calculate total time and efficiency
    public static class ScheduleStats {
        int coursesTaken;
        int totalTime;
        double efficiency; // courses per day

        public ScheduleStats(int coursesTaken, int totalTime, double efficiency) {
            this.coursesTaken = coursesTaken;
            this.totalTime = totalTime;
            this.efficiency = efficiency;
        }

        @Override
        public String toString() {
            return String.format("Courses: %d, Total Time: %d, Efficiency: %.2f",
                               coursesTaken, totalTime, efficiency);
        }
    }

    public ScheduleStats getScheduleStats(int[][] courses) {
        int coursesTaken = scheduleCourse(courses);
        int totalTime = 0;

        // Calculate total time for taken courses
        List<int[]> schedule = getCourseSchedule(courses);
        for (int[] course : schedule) {
            totalTime += course[1]; // duration
        }

        double efficiency = coursesTaken > 0 ? (double) coursesTaken / totalTime : 0;
        return new ScheduleStats(coursesTaken, totalTime, efficiency);
    }

    // Method 7: Check if schedule is valid
    public boolean isValidSchedule(int[][] courses, List<int[]> schedule) {
        if (schedule == null) return false;

        int currentTime = 0;
        Set<Integer> takenCourses = new HashSet<>();

        for (int[] courseInfo : schedule) {
            int index = courseInfo[0];
            int duration = courseInfo[1];
            int deadline = courseInfo[2];

            // Check if course already taken
            if (takenCourses.contains(index)) return false;

            // Check deadline
            if (currentTime + duration > deadline) return false;

            currentTime += duration;
            takenCourses.add(index);
        }

        return true;
    }

    // Method 8: Find minimum time to complete k courses
    public int minTimeForKCourses(int[][] courses, int k) {
        if (k <= 0 || courses == null || courses.length < k) {
            return 0;
        }

        // Sort by duration ascending
        Arrays.sort(courses, Comparator.comparingInt(a -> a[0]));

        int totalTime = 0;
        for (int i = 0; i < k; i++) {
            totalTime += courses[i][0];
        }

        return totalTime;
    }

    // Method 9: Greedy by profit (duration/deadline ratio)
    public int scheduleCourseByProfit(int[][] courses) {
        if (courses == null || courses.length == 0) {
            return 0;
        }

        // Sort by profit ratio (duration/deadline) ascending
        Arrays.sort(courses, (a, b) -> {
            double ratioA = (double) a[0] / a[1];
            double ratioB = (double) b[0] / b[1];
            return Double.compare(ratioA, ratioB);
        });

        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
        int currentTime = 0;

        for (int[] course : courses) {
            int duration = course[0];
            int deadline = course[1];

            currentTime += duration;
            maxHeap.offer(duration);

            if (currentTime > deadline) {
                int longest = maxHeap.poll();
                currentTime -= longest;
            }
        }

        return maxHeap.size();
    }

    // Method 10: Dynamic programming approach (educational)
    public int scheduleCourseDP(int[][] courses) {
        if (courses == null || courses.length == 0) {
            return 0;
        }

        int n = courses.length;
        // DP: dp[i] = max courses using first i courses
        // But this is complex due to deadline constraints

        // Simplified: sort by deadline and use greedy
        Arrays.sort(courses, Comparator.comparingInt(a -> a[1]));

        int maxCourses = 0;
        int currentTime = 0;

        for (int[] course : courses) {
            if (currentTime + course[0] <= course[1]) {
                currentTime += course[0];
                maxCourses++;
            }
        }

        return maxCourses;
    }

    // Method 11: Performance analysis
    public static class PerformanceMetrics {
        int coursesScheduled;
        int totalDuration;
        int maxDeadline;
        long computationTimeMs;

        public PerformanceMetrics(int coursesScheduled, int totalDuration,
                                int maxDeadline, long computationTimeMs) {
            this.coursesScheduled = coursesScheduled;
            this.totalDuration = totalDuration;
            this.maxDeadline = maxDeadline;
            this.computationTimeMs = computationTimeMs;
        }

        @Override
        public String toString() {
            return String.format("Courses: %d, Duration: %d, Max Deadline: %d, Time: %d ms",
                               coursesScheduled, totalDuration, maxDeadline, computationTimeMs);
        }
    }

    public PerformanceMetrics analyzePerformance(int[][] courses) {
        long startTime = System.nanoTime();
        int coursesScheduled = scheduleCourse(courses);
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;

        int totalDuration = 0;
        int maxDeadline = 0;

        for (int[] course : courses) {
            totalDuration += course[0];
            maxDeadline = Math.max(maxDeadline, course[1]);
        }

        return new PerformanceMetrics(coursesScheduled, totalDuration, maxDeadline, timeMs);
    }

    // Method 12: Brute force (for small inputs)
    public int scheduleCourseBruteForce(int[][] courses) {
        if (courses == null || courses.length == 0) {
            return 0;
        }

        int maxCourses = 0;

        // Try all subsets (2^n combinations)
        for (int mask = 0; mask < (1 << courses.length); mask++) {
            List<int[]> selected = new ArrayList<>();
            for (int i = 0; i < courses.length; i++) {
                if ((mask & (1 << i)) != 0) {
                    selected.add(courses[i]);
                }
            }

            if (isValidCourseSchedule(selected)) {
                maxCourses = Math.max(maxCourses, selected.size());
            }
        }

        return maxCourses;
    }

    private boolean isValidCourseSchedule(List<int[]> schedule) {
        int currentTime = 0;
        for (int[] course : schedule) {
            int duration = course[0];
            int deadline = course[1];
            if (currentTime + duration > deadline) {
                return false;
            }
            currentTime += duration;
        }
        return true;
    }

    // Test cases
    public static void main(String[] args) {
        CourseScheduleIII11 solution = new CourseScheduleIII11();

        // Test Case 1: Basic example
        int[][] courses1 = {{100, 200}, {200, 1300}, {1000, 1250}, {2000, 3200}};
        System.out.println("Courses: " + Arrays.deepToString(courses1));

        int result1 = solution.scheduleCourse(courses1);
        System.out.println("Max courses (Heap): " + result1);

        // Test Case 2: TreeMap approach
        int result2 = solution.scheduleCourseTreeMap(courses1);
        System.out.println("Max courses (TreeMap): " + result2);

        // Test Case 3: Greedy approach
        int result3 = solution.scheduleCourseGreedy(courses1);
        System.out.println("Max courses (Greedy): " + result3);

        // Test Case 4: Get schedule
        List<int[]> schedule = solution.getCourseSchedule(courses1);
        System.out.println("Schedule: " + schedule);

        // Test Case 5: Schedule stats
        ScheduleStats stats = solution.getScheduleStats(courses1);
        System.out.println("Stats: " + stats);

        // Test Case 6: Performance metrics
        PerformanceMetrics metrics = solution.analyzePerformance(courses1);
        System.out.println("Performance: " + metrics);

        // Test Case 7: Edge cases
        System.out.println("\nEdge cases:");

        // Empty courses
        int resultEmpty = solution.scheduleCourse(new int[0][0]);
        System.out.println("Empty: " + resultEmpty);

        // Single course
        int[][] singleCourse = {{5, 10}};
        int resultSingle = solution.scheduleCourse(singleCourse);
        System.out.println("Single course: " + resultSingle);

        // Impossible schedule
        int[][] impossible = {{10, 5}};
        int resultImpossible = solution.scheduleCourse(impossible);
        System.out.println("Impossible: " + resultImpossible);

        // Test Case 8: All possible
        int[][] allPossible = {{1, 10}, {1, 10}, {1, 10}};
        int resultAll = solution.scheduleCourse(allPossible);
        System.out.println("All possible: " + resultAll);

        // Test Case 9: Complex deadlines
        int[][] complex = {{5, 5}, {4, 6}, {3, 7}, {2, 8}, {1, 9}};
        int resultComplex = solution.scheduleCourse(complex);
        System.out.println("Complex: " + resultComplex);

        // Test Case 10: Same deadlines
        int[][] sameDeadline = {{1, 5}, {2, 5}, {3, 5}, {4, 5}};
        int resultSame = solution.scheduleCourse(sameDeadline);
        System.out.println("Same deadline: " + resultSame);

        // Test Case 11: By profit ratio
        int resultProfit = solution.scheduleCourseByProfit(courses1);
        System.out.println("By profit ratio: " + resultProfit);

        // Test Case 12: Brute force (small input)
        int[][] smallInput = {{1, 2}, {2, 3}, {3, 4}};
        int resultBrute = solution.scheduleCourseBruteForce(smallInput);
        System.out.println("Brute force: " + resultBrute);
    }
}