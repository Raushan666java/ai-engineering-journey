package backtracking.questions;

/*
 * 3. COMBINATION SUM (LeetCode 39)
 *
 * Problem Statement:
 * Given an array of distinct integers candidates and a target integer target, return a list of all
 * unique combinations of candidates where the chosen numbers sum to target. You may return the
 * combinations in any order.
 *
 * The same number may be chosen from candidates an unlimited number of times. Two combinations
 * are unique if the frequency of at least one of the chosen numbers is different.
 *
 * Conceptual Understanding:
 * - Find all combinations that sum to target
 * - Can use same number multiple times
 * - No duplicates in input, but combinations can have duplicates
 * - Use backtracking to explore all possibilities
 * - Sort candidates to handle duplicates and optimize
 * - Prune when sum exceeds target
 *
 * Time Complexity: O(2^target) in worst case, but pruning reduces it
 * Space Complexity: O(target) for recursion stack
 */

import java.util.*;

class CombinationSum3 {

    // Method 1: Basic backtracking
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(candidates); // Sort for optimization
        backtrack(result, new ArrayList<>(), candidates, target, 0);
        return result;
    }

    private void backtrack(List<List<Integer>> result, List<Integer> current,
                          int[] candidates, int target, int start) {
        // Base case: found combination that sums to target
        if (target == 0) {
            result.add(new ArrayList<>(current));
            return;
        }

        // Base case: target negative or no more candidates
        if (target < 0) {
            return;
        }

        // Try each candidate starting from start index
        for (int i = start; i < candidates.length; i++) {
            // Optimization: skip duplicates (if candidates had duplicates)
            if (i > start && candidates[i] == candidates[i - 1]) continue;

            current.add(candidates[i]);
            // Note: i stays the same to allow reuse of same number
            backtrack(result, current, candidates, target - candidates[i], i);
            current.remove(current.size() - 1);
        }
    }

    // Method 2: Without sorting (handles unsorted input)
    public List<List<Integer>> combinationSumUnsorted(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        backtrackUnsorted(result, new ArrayList<>(), candidates, target, 0);
        return result;
    }

    private void backtrackUnsorted(List<List<Integer>> result, List<Integer> current,
                                 int[] candidates, int target, int start) {
        if (target == 0) {
            result.add(new ArrayList<>(current));
            return;
        }

        if (target < 0 || start >= candidates.length) {
            return;
        }

        for (int i = start; i < candidates.length; i++) {
            current.add(candidates[i]);
            backtrackUnsorted(result, current, candidates, target - candidates[i], i);
            current.remove(current.size() - 1);
        }
    }

    // Method 3: Iterative approach using queue
    public List<List<Integer>> combinationSumIterative(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(candidates);

        // Use queue for BFS: [current combination, current sum, start index]
        Queue<CombinationState> queue = new LinkedList<>();
        queue.offer(new CombinationState(new ArrayList<>(), 0, 0));

        while (!queue.isEmpty()) {
            CombinationState state = queue.poll();

            if (state.sum == target) {
                result.add(new ArrayList<>(state.combination));
                continue;
            }

            if (state.sum > target) continue;

            for (int i = state.start; i < candidates.length; i++) {
                if (i > state.start && candidates[i] == candidates[i - 1]) continue;

                List<Integer> newCombo = new ArrayList<>(state.combination);
                newCombo.add(candidates[i]);
                queue.offer(new CombinationState(newCombo, state.sum + candidates[i], i));
            }
        }

        return result;
    }

    static class CombinationState {
        List<Integer> combination;
        int sum;
        int start;

        CombinationState(List<Integer> combination, int sum, int start) {
            this.combination = combination;
            this.sum = sum;
            this.start = start;
        }
    }

    // Method 4: With early termination optimization
    public List<List<Integer>> combinationSumOptimized(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(candidates);
        backtrackOptimized(result, new ArrayList<>(), candidates, target, 0);
        return result;
    }

    private void backtrackOptimized(List<List<Integer>> result, List<Integer> current,
                                  int[] candidates, int target, int start) {
        if (target == 0) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) continue;

            // Early termination: if current candidate > remaining target
            if (candidates[i] > target) break;

            current.add(candidates[i]);
            backtrackOptimized(result, current, candidates, target - candidates[i], i);
            current.remove(current.size() - 1);
        }
    }

    // Method 5: Find combinations with exact count
    public List<List<Integer>> combinationSumWithCount(int[] candidates, int target, int count) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(candidates);
        backtrackWithCount(result, new ArrayList<>(), candidates, target, 0, count);
        return result;
    }

    private void backtrackWithCount(List<List<Integer>> result, List<Integer> current,
                                  int[] candidates, int target, int start, int count) {
        if (current.size() == count && target == 0) {
            result.add(new ArrayList<>(current));
            return;
        }

        if (current.size() >= count || target < 0) return;

        for (int i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) continue;
            if (candidates[i] > target) break;

            current.add(candidates[i]);
            backtrackWithCount(result, current, candidates, target - candidates[i], i, count);
            current.remove(current.size() - 1);
        }
    }

    // Method 6: Get all possible sums
    public Set<Integer> getAllPossibleSums(int[] candidates, int maxTarget) {
        Set<Integer> possibleSums = new HashSet<>();
        backtrackSums(possibleSums, candidates, maxTarget, 0, 0);
        return possibleSums;
    }

    private void backtrackSums(Set<Integer> sums, int[] candidates, int maxTarget,
                             int currentSum, int start) {
        if (currentSum > maxTarget) return;

        sums.add(currentSum);

        for (int i = start; i < candidates.length; i++) {
            backtrackSums(sums, candidates, maxTarget, currentSum + candidates[i], i);
        }
    }

    // Method 7: Count combinations without generating
    public int countCombinations(int[] candidates, int target) {
        Arrays.sort(candidates);
        return countBacktrack(candidates, target, 0);
    }

    private int countBacktrack(int[] candidates, int target, int start) {
        if (target == 0) return 1;
        if (target < 0) return 0;

        int count = 0;
        for (int i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) continue;
            if (candidates[i] > target) break;

            count += countBacktrack(candidates, target - candidates[i], i);
        }
        return count;
    }

    // Method 8: Find minimum number of elements
    public List<List<Integer>> combinationSumMinElements(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(candidates);
        backtrackMinElements(result, new ArrayList<>(), candidates, target, 0, Integer.MAX_VALUE);
        return result;
    }

    private void backtrackMinElements(List<List<Integer>> result, List<Integer> current,
                                    int[] candidates, int target, int start, int minSize) {
        if (target == 0) {
            if (current.size() < minSize) {
                result.clear();
                result.add(new ArrayList<>(current));
                minSize = current.size();
            } else if (current.size() == minSize) {
                result.add(new ArrayList<>(current));
            }
            return;
        }

        for (int i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) continue;
            if (candidates[i] > target) break;

            current.add(candidates[i]);
            backtrackMinElements(result, current, candidates, target - candidates[i], i, minSize);
            current.remove(current.size() - 1);
        }
    }

    // Method 9: Performance analysis
    public static class PerformanceStats {
        int[] candidates;
        int target;
        int combinationsFound;
        long timeMs;
        int maxDepth;

        public PerformanceStats(int[] candidates, int target, int combinationsFound,
                              long timeMs, int maxDepth) {
            this.candidates = candidates.clone();
            this.target = target;
            this.combinationsFound = combinationsFound;
            this.timeMs = timeMs;
            this.maxDepth = maxDepth;
        }

        @Override
        public String toString() {
            return String.format("Candidates: %s, Target: %d, Combinations: %d, Time: %dms, Max Depth: %d",
                               Arrays.toString(candidates), target, combinationsFound, timeMs, maxDepth);
        }
    }

    public PerformanceStats analyzePerformance(int[] candidates, int target) {
        long startTime = System.nanoTime();
        List<List<Integer>> result = combinationSum(candidates.clone(), target);
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;

        int maxDepth = 0;
        for (List<Integer> combo : result) {
            maxDepth = Math.max(maxDepth, combo.size());
        }

        return new PerformanceStats(candidates, target, result.size(), timeMs, maxDepth);
    }

    // Method 10: Validate combinations
    public boolean validateCombinations(List<List<Integer>> combinations, int[] candidates, int target) {
        Set<String> uniqueCombos = new HashSet<>();
        Set<Integer> candidateSet = new HashSet<>();
        for (int num : candidates) candidateSet.add(num);

        for (List<Integer> combo : combinations) {
            // Check sum
            int sum = 0;
            for (int num : combo) {
                sum += num;
                if (!candidateSet.contains(num)) return false;
            }
            if (sum != target) return false;

            // Check for duplicates (sort and create string)
            List<Integer> sorted = new ArrayList<>(combo);
            Collections.sort(sorted);
            String comboStr = sorted.toString();
            if (uniqueCombos.contains(comboStr)) return false;
            uniqueCombos.add(comboStr);
        }

        return true;
    }

    // Method 11: Get combination statistics
    public static class CombinationStats {
        int totalCombinations;
        int minLength;
        int maxLength;
        double avgLength;
        int uniqueNumbers;

        public CombinationStats(int totalCombinations, int minLength, int maxLength,
                              double avgLength, int uniqueNumbers) {
            this.totalCombinations = totalCombinations;
            this.minLength = minLength;
            this.maxLength = maxLength;
            this.avgLength = avgLength;
            this.uniqueNumbers = uniqueNumbers;
        }

        @Override
        public String toString() {
            return String.format("Total: %d, Length: [%d-%d], Avg: %.1f, Unique Numbers: %d",
                               totalCombinations, minLength, maxLength, avgLength, uniqueNumbers);
        }
    }

    public CombinationStats getCombinationStats(int[] candidates, int target) {
        List<List<Integer>> combinations = combinationSum(candidates.clone(), target);

        if (combinations.isEmpty()) {
            return new CombinationStats(0, 0, 0, 0, 0);
        }

        int minLength = Integer.MAX_VALUE;
        int maxLength = 0;
        int totalLength = 0;
        Set<Integer> uniqueNumbers = new HashSet<>();

        for (List<Integer> combo : combinations) {
            minLength = Math.min(minLength, combo.size());
            maxLength = Math.max(maxLength, combo.size());
            totalLength += combo.size();
            uniqueNumbers.addAll(combo);
        }

        double avgLength = (double) totalLength / combinations.size();

        return new CombinationStats(combinations.size(), minLength, maxLength, avgLength, uniqueNumbers.size());
    }

    // Method 12: Combination sum with constraints
    public List<List<Integer>> combinationSumWithConstraints(int[] candidates, int target,
                                                           int minElements, int maxElements) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(candidates);
        backtrackWithConstraints(result, new ArrayList<>(), candidates, target, 0, minElements, maxElements);
        return result;
    }

    private void backtrackWithConstraints(List<List<Integer>> result, List<Integer> current,
                                        int[] candidates, int target, int start,
                                        int minElements, int maxElements) {
        if (current.size() > maxElements) return;

        if (target == 0 && current.size() >= minElements) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) continue;
            if (candidates[i] > target) break;

            current.add(candidates[i]);
            backtrackWithConstraints(result, current, candidates, target - candidates[i],
                                   i, minElements, maxElements);
            current.remove(current.size() - 1);
        }
    }

    // Test cases
    public static void main(String[] args) {
        CombinationSum3 solution = new CombinationSum3();

        // Test Case 1: Basic combination sum
        System.out.println("=== Basic Combination Sum ===");
        int[] candidates1 = {2, 3, 6, 7};
        int target1 = 7;
        List<List<Integer>> result1 = solution.combinationSum(candidates1, target1);
        System.out.println("Candidates: " + Arrays.toString(candidates1) + ", Target: " + target1);
        System.out.println("Combinations: " + result1);
        System.out.println("Valid: " + solution.validateCombinations(result1, candidates1, target1));

        // Test Case 2: Multiple combinations
        int[] candidates2 = {2, 3, 5};
        int target2 = 8;
        List<List<Integer>> result2 = solution.combinationSum(candidates2, target2);
        System.out.println("Candidates: " + Arrays.toString(candidates2) + ", Target: " + target2);
        System.out.println("Combinations: " + result2.size() + " found");

        // Test Case 3: Iterative approach
        List<List<Integer>> result3 = solution.combinationSumIterative(candidates2, target2);
        System.out.println("Iterative approach: " + result3.size() + " combinations");

        // Test Case 4: Optimized approach
        List<List<Integer>> result4 = solution.combinationSumOptimized(candidates2, target2);
        System.out.println("Optimized approach: " + result4.size() + " combinations");

        // Test Case 5: With exact count
        List<List<Integer>> result5 = solution.combinationSumWithCount(candidates2, target2, 2);
        System.out.println("Exactly 2 elements: " + result5);

        // Test Case 6: All possible sums
        Set<Integer> sums = solution.getAllPossibleSums(candidates2, 10);
        System.out.println("Possible sums up to 10: " + sums);

        // Test Case 7: Count combinations
        int count = solution.countCombinations(candidates2, target2);
        System.out.println("Total combinations count: " + count);

        // Test Case 8: Performance analysis
        PerformanceStats stats = solution.analyzePerformance(candidates2, target2);
        System.out.println("Performance: " + stats);

        // Test Case 9: Statistics
        CombinationStats comboStats = solution.getCombinationStats(candidates2, target2);
        System.out.println("Statistics: " + comboStats);

        // Test Case 10: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty candidates: " + solution.combinationSum(new int[0], 5));
        System.out.println("Target 0: " + solution.combinationSum(candidates2, 0));
        System.out.println("No solution: " + solution.combinationSum(new int[]{5}, 3));

        // Test Case 11: With constraints
        List<List<Integer>> constrained = solution.combinationSumWithConstraints(candidates2, 8, 2, 4);
        System.out.println("2-4 elements: " + constrained);

        // Test Case 12: Large numbers
        int[] largeCandidates = {1, 2, 5, 10, 20, 50, 100};
        List<List<Integer>> largeResult = solution.combinationSum(largeCandidates, 50);
        System.out.println("Large target combinations: " + largeResult.size());
    }
}