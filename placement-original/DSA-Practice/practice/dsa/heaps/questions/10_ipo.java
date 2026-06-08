package heaps.questions;

/*
 * 10. IPO (INITIAL PUBLIC OFFERING) (LeetCode 502)
 *
 * Problem Statement:
 * Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture
 * Capital, LeetCode would like to work on some projects to increase its capital before the IPO.
 * Since it has limited resources, it can only finish at most k distinct projects before the IPO.
 * Help LeetCode design the best way to maximize its total capital after finishing at most k projects.
 *
 * You are given n projects where the ith project has a pure profit profits[i] and a minimum capital
 * requirement capital[i] to start it. Initially, you have w capital. When you finish a project,
 * you will gain the profit and that profit will be added to your total capital.
 *
 * Pick a list of at most k distinct projects to maximize your final capital, and return the final
 * maximized capital.
 *
 * Conceptual Understanding:
 * - Select at most k projects to maximize final capital
 * - Each project has profit and capital requirement
 * - Can only start projects where current capital >= requirement
 * - After completing project, profit adds to capital
 * - Multiple approaches: greedy with heaps, sorting with priority
 * - Heap approach: max-heap for profits, min-heap for available projects
 * - Key insight: always pick highest profit project available with current capital
 * - Use two heaps: one for available projects (by profit), one for waiting projects (by capital)
 *
 * Time Complexity: O(n log n + k log n)
 * Space Complexity: O(n)
 */

import java.util.*;

class IPO10 {

    // Method 1: Using Max Heap and Min Heap
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        if (profits == null || capital == null || profits.length != capital.length) {
            return w;
        }

        int n = profits.length;

        // Create list of projects: [capital, profit]
        List<int[]> projects = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            projects.add(new int[]{capital[i], profits[i]});
        }

        // Sort projects by capital requirement (ascending)
        projects.sort(Comparator.comparingInt(a -> a[0]));

        // Max heap for profits of available projects
        PriorityQueue<Integer> maxProfitHeap = new PriorityQueue<>((a, b) -> b - a);

        int index = 0;
        int currentCapital = w;

        for (int i = 0; i < k; i++) {
            // Add all projects that can be started with current capital
            while (index < n && projects.get(index)[0] <= currentCapital) {
                maxProfitHeap.offer(projects.get(index)[1]);
                index++;
            }

            // If no projects available, break
            if (maxProfitHeap.isEmpty()) {
                break;
            }

            // Pick the project with maximum profit
            int maxProfit = maxProfitHeap.poll();
            currentCapital += maxProfit;
        }

        return currentCapital;
    }

    // Method 2: Using TreeMap for ordered capital requirements
    public int findMaximizedCapitalTreeMap(int k, int w, int[] profits, int[] capital) {
        if (profits == null || capital == null || profits.length != capital.length) {
            return w;
        }

        int n = profits.length;

        // TreeMap: capital -> list of profits
        TreeMap<Integer, List<Integer>> capitalToProfits = new TreeMap<>();
        for (int i = 0; i < n; i++) {
            capitalToProfits.computeIfAbsent(capital[i], x -> new ArrayList<>()).add(profits[i]);
        }

        int currentCapital = w;
        PriorityQueue<Integer> maxProfitHeap = new PriorityQueue<>((a, b) -> b - a);

        for (int i = 0; i < k; i++) {
            // Add all projects that can be started
            while (!capitalToProfits.isEmpty() &&
                   capitalToProfits.firstKey() <= currentCapital) {
                List<Integer> availableProfits = capitalToProfits.pollFirstEntry().getValue();
                maxProfitHeap.addAll(availableProfits);
            }

            // Pick best available project
            if (maxProfitHeap.isEmpty()) {
                break;
            }

            int maxProfit = maxProfitHeap.poll();
            currentCapital += maxProfit;
        }

        return currentCapital;
    }

    // Method 3: Greedy approach with sorting
    public int findMaximizedCapitalGreedy(int k, int w, int[] profits, int[] capital) {
        if (profits == null || capital == null || profits.length != capital.length) {
            return w;
        }

        int n = profits.length;

        // Create projects array
        int[][] projects = new int[n][2];
        for (int i = 0; i < n; i++) {
            projects[i] = new int[]{capital[i], profits[i]};
        }

        // Sort by capital requirement
        Arrays.sort(projects, Comparator.comparingInt(a -> a[0]));

        int currentCapital = w;
        int completed = 0;

        while (completed < k) {
            int bestProfit = 0;
            int bestIndex = -1;

            // Find the best available project
            for (int i = 0; i < n; i++) {
                if (projects[i][0] <= currentCapital && projects[i][1] > bestProfit) {
                    bestProfit = projects[i][1];
                    bestIndex = i;
                }
            }

            // If no project available, break
            if (bestIndex == -1) {
                break;
            }

            // Complete the project
            currentCapital += bestProfit;
            projects[bestIndex][0] = Integer.MAX_VALUE; // Mark as completed
            completed++;
        }

        return currentCapital;
    }

    // Method 4: Optimized with early termination
    public int findMaximizedCapitalOptimized(int k, int w, int[] profits, int[] capital) {
        if (profits == null || capital == null || profits.length != capital.length) {
            return w;
        }

        int n = profits.length;
        k = Math.min(k, n); // Can't do more than available projects

        List<int[]> projects = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            projects.add(new int[]{capital[i], profits[i]});
        }

        // Sort by capital
        projects.sort(Comparator.comparingInt(a -> a[0]));

        PriorityQueue<Integer> maxProfitHeap = new PriorityQueue<>((a, b) -> b - a);

        int index = 0;
        int currentCapital = w;
        int completed = 0;

        while (completed < k) {
            // Add available projects
            while (index < n && projects.get(index)[0] <= currentCapital) {
                maxProfitHeap.offer(projects.get(index)[1]);
                index++;
            }

            // If no projects available, break
            if (maxProfitHeap.isEmpty()) {
                break;
            }

            // Pick best project
            int maxProfit = maxProfitHeap.poll();
            currentCapital += maxProfit;
            completed++;

            // Early termination: if remaining projects can't give better profit
            if (index < n && maxProfitHeap.size() > 0) {
                int nextCapitalReq = projects.get(index)[0];
                int currentBest = maxProfitHeap.peek();
                if (nextCapitalReq > currentCapital + currentBest) {
                    // Can't afford next project even with best current profit
                    break;
                }
            }
        }

        return currentCapital;
    }

    // Method 5: Using custom Project class
    static class Project {
        int capital;
        int profit;

        Project(int capital, int profit) {
            this.capital = capital;
            this.profit = profit;
        }
    }

    public int findMaximizedCapitalCustomClass(int k, int w, int[] profits, int[] capital) {
        if (profits == null || capital == null || profits.length != capital.length) {
            return w;
        }

        List<Project> projects = new ArrayList<>();
        for (int i = 0; i < profits.length; i++) {
            projects.add(new Project(capital[i], profits[i]));
        }

        // Sort by capital requirement
        projects.sort(Comparator.comparingInt(p -> p.capital));

        PriorityQueue<Project> availableProjects = new PriorityQueue<>(
            (a, b) -> b.profit - a.profit
        );

        int currentCapital = w;
        int index = 0;
        int n = projects.size();

        for (int i = 0; i < k; i++) {
            // Add all affordable projects
            while (index < n && projects.get(index).capital <= currentCapital) {
                availableProjects.offer(projects.get(index));
                index++;
            }

            // Pick the most profitable
            if (availableProjects.isEmpty()) {
                break;
            }

            Project best = availableProjects.poll();
            currentCapital += best.profit;
        }

        return currentCapital;
    }

    // Method 6: Dynamic programming approach (educational)
    public int findMaximizedCapitalDP(int k, int w, int[] profits, int[] capital) {
        if (profits == null || capital == null || profits.length != capital.length) {
            return w;
        }

        int n = profits.length;
        k = Math.min(k, n);

        // DP: dp[i][j] = max capital after i projects with j capital
        // But this is too memory intensive for large inputs
        // Use a simplified version

        List<int[]> projects = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            projects.add(new int[]{capital[i], profits[i]});
        }

        projects.sort(Comparator.comparingInt(a -> a[0]));

        // Keep track of best capital after each step
        int currentCapital = w;
        boolean[] used = new boolean[n];

        for (int step = 0; step < k; step++) {
            int bestProfit = 0;
            int bestIndex = -1;

            // Find best available project
            for (int i = 0; i < n; i++) {
                if (!used[i] && projects.get(i)[0] <= currentCapital &&
                    projects.get(i)[1] > bestProfit) {
                    bestProfit = projects.get(i)[1];
                    bestIndex = i;
                }
            }

            if (bestIndex == -1) {
                break;
            }

            currentCapital += bestProfit;
            used[bestIndex] = true;
        }

        return currentCapital;
    }

    // Method 7: Get project selection sequence
    public List<Integer> getProjectSequence(int k, int w, int[] profits, int[] capital) {
        List<Integer> sequence = new ArrayList<>();
        if (profits == null || capital == null || profits.length != capital.length) {
            return sequence;
        }

        int n = profits.length;
        List<int[]> projects = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            projects.add(new int[]{capital[i], profits[i], i}); // Include original index
        }

        projects.sort(Comparator.comparingInt(a -> a[0]));

        PriorityQueue<int[]> maxProfitHeap = new PriorityQueue<>((a, b) -> b[1] - a[1]);

        int index = 0;
        int currentCapital = w;

        for (int i = 0; i < k; i++) {
            // Add available projects
            while (index < n && projects.get(index)[0] <= currentCapital) {
                maxProfitHeap.offer(projects.get(index));
                index++;
            }

            if (maxProfitHeap.isEmpty()) {
                break;
            }

            // Pick best project
            int[] best = maxProfitHeap.poll();
            sequence.add(best[2]); // Add original index
            currentCapital += best[1];
        }

        return sequence;
    }

    // Method 8: Calculate total possible profit
    public int getTotalPossibleProfit(int k, int w, int[] profits, int[] capital) {
        // Sort by profit descending, but check capital constraints
        List<int[]> projects = new ArrayList<>();
        for (int i = 0; i < profits.length; i++) {
            projects.add(new int[]{profits[i], capital[i]});
        }

        projects.sort((a, b) -> b[0] - a[0]); // Sort by profit descending

        int currentCapital = w;
        int totalProfit = 0;
        int count = 0;

        for (int[] project : projects) {
            if (count >= k) break;
            if (project[1] <= currentCapital) {
                totalProfit += project[0];
                currentCapital += project[0];
                count++;
            }
        }

        return totalProfit;
    }

    // Method 9: Performance analysis
    public static class PerformanceStats {
        int finalCapital;
        int projectsCompleted;
        double averageProfit;
        long timeMs;

        public PerformanceStats(int finalCapital, int projectsCompleted,
                              double averageProfit, long timeMs) {
            this.finalCapital = finalCapital;
            this.projectsCompleted = projectsCompleted;
            this.averageProfit = averageProfit;
            this.timeMs = timeMs;
        }

        @Override
        public String toString() {
            return String.format("Capital: %d, Projects: %d, Avg Profit: %.2f, Time: %d ms",
                               finalCapital, projectsCompleted, averageProfit, timeMs);
        }
    }

    public PerformanceStats analyzePerformance(int k, int w, int[] profits, int[] capital) {
        long startTime = System.nanoTime();
        int finalCapital = findMaximizedCapital(k, w, profits, capital);
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;

        int projectsCompleted = Math.min(k, profits.length);
        int totalProfit = finalCapital - w;
        double averageProfit = projectsCompleted > 0 ? (double) totalProfit / projectsCompleted : 0;

        return new PerformanceStats(finalCapital, projectsCompleted, averageProfit, timeMs);
    }

    // Method 10: Validate solution
    public boolean validateSolution(int k, int w, int[] profits, int[] capital, int result) {
        if (result < w) return false;

        int maxPossible = w;
        // Simple validation: result should not exceed w + sum of all profits
        for (int profit : profits) {
            maxPossible += profit;
        }

        return result <= maxPossible;
    }

    // Method 11: Get capital requirements summary
    public static class CapitalSummary {
        int minCapital;
        int maxCapital;
        int avgCapital;
        int projectsAvailable;

        public CapitalSummary(int minCapital, int maxCapital, int avgCapital, int projectsAvailable) {
            this.minCapital = minCapital;
            this.maxCapital = maxCapital;
            this.avgCapital = avgCapital;
            this.projectsAvailable = projectsAvailable;
        }

        @Override
        public String toString() {
            return String.format("Min: %d, Max: %d, Avg: %d, Available: %d",
                               minCapital, maxCapital, avgCapital, projectsAvailable);
        }
    }

    public CapitalSummary getCapitalSummary(int w, int[] profits, int[] capital) {
        if (capital.length == 0) {
            return new CapitalSummary(0, 0, 0, 0);
        }

        int minCapital = Arrays.stream(capital).min().getAsInt();
        int maxCapital = Arrays.stream(capital).max().getAsInt();
        int sumCapital = Arrays.stream(capital).sum();
        int avgCapital = sumCapital / capital.length;

        int available = 0;
        for (int cap : capital) {
            if (cap <= w) available++;
        }

        return new CapitalSummary(minCapital, maxCapital, avgCapital, available);
    }

    // Method 12: Brute force (for small inputs)
    public int findMaximizedCapitalBruteForce(int k, int w, int[] profits, int[] capital) {
        if (profits == null || capital == null || profits.length != capital.length) {
            return w;
        }

        int n = profits.length;
        k = Math.min(k, n);

        // Generate all possible combinations of k projects
        int maxCapital = w;
        int[] indices = new int[k];

        // Simple backtracking to try combinations
        maxCapital = backtrackIPO(0, 0, k, w, profits, capital, indices, maxCapital);

        return maxCapital;
    }

    private int backtrackIPO(int start, int count, int k, int currentCapital,
                           int[] profits, int[] capital, int[] indices, int maxCapital) {
        if (count == k) {
            maxCapital = Math.max(maxCapital, currentCapital);
            return maxCapital;
        }

        for (int i = start; i < profits.length; i++) {
            if (capital[i] <= currentCapital) {
                indices[count] = i;
                int newCapital = currentCapital + profits[i];
                maxCapital = backtrackIPO(i + 1, count + 1, k, newCapital,
                                        profits, capital, indices, maxCapital);
            }
        }

        return maxCapital;
    }

    // Test cases
    public static void main(String[] args) {
        IPO10 solution = new IPO10();
        int k = 2, w = 0;
        int[] profits = {1, 2, 3};
        int[] capital = {0, 1, 1};

        // Test Case 1: Basic heap approach
        System.out.println("k = " + k + ", w = " + w);
        System.out.println("Profits: " + Arrays.toString(profits));
        System.out.println("Capital: " + Arrays.toString(capital));

        int result1 = solution.findMaximizedCapital(k, w, profits, capital);
        System.out.println("Maximized capital (Heap): " + result1);
        System.out.println("Valid: " + solution.validateSolution(k, w, profits, capital, result1));

        // Test Case 2: TreeMap approach
        int result2 = solution.findMaximizedCapitalTreeMap(k, w, profits, capital);
        System.out.println("Maximized capital (TreeMap): " + result2);

        // Test Case 3: Greedy approach
        int result3 = solution.findMaximizedCapitalGreedy(k, w, profits, capital);
        System.out.println("Maximized capital (Greedy): " + result3);

        // Test Case 4: Optimized approach
        int result4 = solution.findMaximizedCapitalOptimized(k, w, profits, capital);
        System.out.println("Maximized capital (Optimized): " + result4);

        // Test Case 5: Project sequence
        List<Integer> sequence = solution.getProjectSequence(k, w, profits, capital);
        System.out.println("Project sequence: " + sequence);

        // Test Case 6: Performance stats
        PerformanceStats stats = solution.analyzePerformance(k, w, profits, capital);
        System.out.println("Performance: " + stats);

        // Test Case 7: Capital summary
        CapitalSummary summary = solution.getCapitalSummary(w, profits, capital);
        System.out.println("Capital summary: " + summary);

        // Test Case 8: Edge cases
        System.out.println("\nEdge cases:");

        // No projects
        int resultEmpty = solution.findMaximizedCapital(1, 10, new int[0], new int[0]);
        System.out.println("No projects: " + resultEmpty);

        // k = 0
        int resultZeroK = solution.findMaximizedCapital(0, 10, profits, capital);
        System.out.println("k = 0: " + resultZeroK);

        // Insufficient capital
        int[] highCapital = {100, 200, 300};
        int resultHighCap = solution.findMaximizedCapital(2, 50, profits, highCapital);
        System.out.println("High capital requirements: " + resultHighCap);

        // Test Case 9: Large profits
        int[] largeProfits = {1000, 2000, 3000};
        int[] lowCapital = {0, 0, 0};
        int resultLarge = solution.findMaximizedCapital(2, 0, largeProfits, lowCapital);
        System.out.println("Large profits: " + resultLarge);

        // Test Case 10: All projects available
        int[] allAvailable = {0, 0, 0};
        int resultAll = solution.findMaximizedCapital(3, 0, profits, allAvailable);
        System.out.println("All available: " + resultAll);

        // Test Case 11: Complex example
        int[] complexProfits = {1, 2, 3, 4, 5};
        int[] complexCapital = {0, 1, 2, 3, 4};
        int resultComplex = solution.findMaximizedCapital(3, 0, complexProfits, complexCapital);
        System.out.println("Complex example: " + resultComplex);

        // Test Case 12: Brute force (small input)
        int resultBrute = solution.findMaximizedCapitalBruteForce(2, 0, new int[]{1, 2, 3}, new int[]{0, 1, 1});
        System.out.println("Brute force: " + resultBrute);
    }
}