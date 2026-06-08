import java.util.*;

/**
 * Day 19: Greedy Algorithms - Examples & Tests
 */
public class GreedyBasics {

    // 1. Activity selection / Interval Scheduling - maximize number of non-overlapping intervals
    public static int maxActivities(int[] start, int[] end) {
        int n = start.length;
        int[][] activities = new int[n][2];
        for (int i = 0; i < n; i++) activities[i] = new int[] {start[i], end[i]};
        Arrays.sort(activities, Comparator.comparingInt(a -> a[1]));
        int count = 0, lastEnd = -1;
        for (int[] act : activities) {
            if (act[0] >= lastEnd) {
                count++;
                lastEnd = act[1];
            }
        }
        return count;
    }

    // 2. Fractional Knapsack - greedy by value/weight ratio
    public static double fractionalKnapsack(int[] wt, int[] val, int W) {
        int n = wt.length;
        Integer[] idx = new Integer[n];
        for (int i = 0; i < n; i++) idx[i] = i;
        Arrays.sort(idx, (a, b) -> Double.compare((double)val[b]/wt[b], (double)val[a]/wt[a]));
        double res = 0.0;
        for (int id : idx) {
            if (W == 0) break;
            if (wt[id] <= W) {
                res += val[id];
                W -= wt[id];
            } else {
                res += (double)val[id] * W / wt[id];
                W = 0;
            }
        }
        return res;
    }

    // 3. Minimum number of arrows to burst balloons (LeetCode 452) - greedily find overlaps
    public static int findMinArrows(int[][] points) {
        if (points.length == 0) return 0;
        Arrays.sort(points, Comparator.comparingInt(a -> a[1]));
        int arrows = 1;
        int currentEnd = points[0][1];
        for (int i = 1; i < points.length; i++) {
            if (points[i][0] > currentEnd) {
                arrows++;
                currentEnd = points[i][1];
            }
        }
        return arrows;
    }

    // 4. Assign Cookies (LC 455) - greedily assign smallest cookie that satisfies a child
    public static int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int i = 0, j = 0;
        while (i < g.length && j < s.length) {
            if (s[j] >= g[i]) { i++; j++; }
            else j++;
        }
        return i;
    }

    // 5. Merge Intervals - sort by start
    public static int[][] mergeIntervals(int[][] intervals) {
        if (intervals.length == 0) return new int[0][0];
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));
        List<int[]> merged = new ArrayList<>();
        int[] cur = intervals[0];
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] <= cur[1]) cur[1] = Math.max(cur[1], intervals[i][1]);
            else { merged.add(cur); cur = intervals[i]; }
        }
        merged.add(cur);
        return merged.toArray(new int[merged.size()][]);
    }

    // 6. Job Sequencing with deadlines - schedule to maximize profit
    public static int jobSequencing(int[] deadline, int[] profit) {
        int n = deadline.length;
        Integer[] idx = new Integer[n];
        for (int i = 0; i < n; i++) idx[i] = i;
        Arrays.sort(idx, (a, b) -> profit[b] - profit[a]);
        int maxDeadline = 0; for (int d : deadline) maxDeadline = Math.max(maxDeadline, d);
        int[] slot = new int[maxDeadline + 1]; Arrays.fill(slot, -1);
        int totalProfit = 0;
        for (int id : idx) {
            for (int j = deadline[id]; j > 0; j--) {
                if (slot[j] == -1) { slot[j] = id; totalProfit += profit[id]; break; }
            }
        }
        return totalProfit;
    }

    // 7. Job scheduling: greedy by earliest deadline first - maximize jobs done
    public static int maxJobsEarliestDeadline(int[][] jobs) {
        // jobs: [deadline, duration] naive example, select jobs that can be done within deadlines
        Arrays.sort(jobs, Comparator.comparingInt(a -> a[0]));
        long time = 0; PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> b - a); // max-heap
        for (int[] job : jobs) {
            int deadline = job[0], duration = job[1];
            if (time + duration <= deadline) { time += duration; pq.offer(duration); }
            else if (!pq.isEmpty() && pq.peek() > duration) { time += duration - pq.poll(); pq.offer(duration); }
        }
        return pq.size();
    }

    public static void main(String[] args) {
        System.out.println("=".repeat(60));
        System.out.println("DAY 19: GREEDY ALGORITHMS - TESTS");
        System.out.println("=".repeat(60));

        // Activity selection
        int[] start = {1, 3, 0, 5, 8, 5}; int[] end = {2, 4, 6, 7, 9, 9};
        System.out.println("Max activities: " + maxActivities(start, end) + " (expected 4)");

        // Fractional Knapsack
        int[] wt = {10, 20, 30}; int[] val = {60, 100, 120}; int W = 50;
        System.out.println("Fractional Knapsack result: " + fractionalKnapsack(wt, val, W) + " (expected 240)");

        // Arrows / Intervals
        int[][] points = {{10,16},{2,8},{1,6},{7,12}}; // sample from LC 452
        System.out.println("Min arrows: " + findMinArrows(points) + " (expected 2)");

        // Assign cookies
        int[] g = {1,2,3}; int[] s = {1,1}; System.out.println("Content children: " + findContentChildren(g,s) + " (expected 1)");

        // Merge intervals
        int[][] intervals = {{1,3},{2,6},{8,10},{15,18}};
        int[][] merged = mergeIntervals(intervals);
        System.out.println("Merged intervals: " + Arrays.deepToString(merged) + " (expected [[1,6],[8,10],[15,18]])");

        // Job sequencing
        int[] d = {2,1,2,1}; int[] p = {100,19,27,25}; System.out.println("Job Sequence Profit: " + jobSequencing(d,p) + " (expected 127)");

        // Job scheduling earliest deadline
        int[][] jobs = {{3,2},{4,1},{4,3},{2,1}}; System.out.println("Max jobs by EDF: " + maxJobsEarliestDeadline(jobs) + " (approx 3)");

        System.out.println("All greedy tests completed! ✓");
    }
}
