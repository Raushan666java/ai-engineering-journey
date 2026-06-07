package backtracking.questions;

/*
 * 6. COMBINATION SUM II (LeetCode 40)
 *
 * Problem Statement:
 * Given a collection of candidate numbers (candidates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sum to target.
 * Each number in candidates may only be used once in the combination.
 * Note: The solution set must not contain duplicate combinations.
 *
 * Conceptual Understanding:
 * - Find unique combinations that sum to target
 * - Each candidate can be used at most once
 * - Handle duplicates in candidates array
 * - Sort array to group duplicates
 * - Skip duplicate elements in same recursion level
 * - Use backtracking with start index to avoid reuse
 *
 * Time Complexity: O(2^n) in worst case, but pruning reduces it
 * Space Complexity: O(n) for recursion stack
 */

import java.util.*;

class CombinationSumII6 {

    // Method 1: Basic backtracking with duplicate handling
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        if (candidates == null || candidates.length == 0) {
            return result;
        }

        Arrays.sort(candidates); // Sort to handle duplicates
        backtrack(result, new ArrayList<>(), candidates, target, 0);
        return result;
    }

    private void backtrack(List<List<Integer>> result, List<Integer> current,
                          int[] candidates, int target, int start) {
        // Base case: target reached
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
            // Skip duplicates: if current same as previous and previous not used in this path
            if (i > start && candidates[i] == candidates[i - 1]) continue;

            // Optimization: if current candidate > remaining target, break
            if (candidates[i] > target) break;

            // Choose current candidate
            current.add(candidates[i]);

            // Recurse with next index (can't reuse same element)
            backtrack(result, current, candidates, target - candidates[i], i + 1);

            // Backtrack
            current.remove(current.size() - 1);
        }
    }

    // Method 2: Iterative approach using queue
    public List<List<Integer>> combinationSum2Iterative(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        if (candidates == null || candidates.length == 0) {
            return result;
        }

        Arrays.sort(candidates);

        // Use queue: [current combination, current sum, start index]
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
                if (state.sum + candidates[i] > target) break;

                List<Integer> newCombo = new ArrayList<>(state.combination);
                newCombo.add(candidates[i]);
                queue.offer(new CombinationState(newCombo, state.sum + candidates[i], i + 1));
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

    // Method 3: Using frequency map
    public List<List<Integer>> combinationSum2Frequency(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        if (candidates == null || candidates.length == 0) {
            return result;
        }

        // Count frequency of each number
        Map<Integer, Integer> frequency = new TreeMap<>();
        for (int num : candidates) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
        }

        // Convert to list for backtracking
        List<Integer> uniqueCandidates = new ArrayList<>(frequency.keySet());
        backtrackFrequency(result, new ArrayList<>(), uniqueCandidates, frequency, target, 0);
        return result;
    }

    private void backtrackFrequency(List<List<Integer>> result, List<Integer> current,
                                  List<Integer> candidates, Map<Integer, Integer> frequency,
                                  int target, int start) {
        if (target == 0) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = start; i < candidates.size(); i++) {
            int num = candidates.get(i);
            int count = frequency.get(num);

            if (count == 0) continue;
            if (num > target) break;

            // Try using 1 to count instances of this number
            for (int j = 1; j <= count; j++) {
                if (num * j > target) break;

                // Add j instances of num
                for (int k = 0; k < j; k++) {
                    current.add(num);
                }

                // Update frequency temporarily
                frequency.put(num, count - j);

                // Recurse
                backtrackFrequency(result, current, candidates, frequency, target - num * j, i + 1);

                // Backtrack
                for (int k = 0; k < j; k++) {
                    current.remove(current.size() - 1);
                }
                frequency.put(num, count);
            }
        }
    }

    // Method 4: Find combinations with exact size
    public List<List<Integer>> combinationSum2WithSize(int[] candidates, int target, int size) {
        List<List<Integer>> result = new ArrayList<>();
        if (candidates == null || candidates.length == 0 || size <= 0) {
            return result;
        }

        Arrays.sort(candidates);
        backtrackSize(result, new ArrayList<>(), candidates, target, 0, size);
        return result;
    }

    private void backtrackSize(List<List<Integer>> result, List<Integer> current,
                              int[] candidates, int target, int start, int size) {
        if (current.size() == size && target == 0) {
            result.add(new ArrayList<>(current));
            return;
        }

        if (current.size() >= size || target < 0) return;

        for (int i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) continue;
            if (candidates[i] > target) break;

            current.add(candidates[i]);
            backtrackSize(result, current, candidates, target - candidates[i], i + 1, size);
            current.remove(current.size() - 1);
        }
    }

    // Method 5: Count combinations without generating
    public int countCombinations(int[] candidates, int target) {
        if (candidates == null || candidates.length == 0) return 0;

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

            count += countBacktrack(candidates, target - candidates[i], i + 1);
        }
        return count;
    }

    // Method 6: Get all possible sums
    public Set<Integer> getAllPossibleSums(int[] candidates) {
        Set<Integer> sums = new HashSet<>();
        backtrackSums(sums, candidates, 0, 0);
        return sums;
    }

    private void backtrackSums(Set<Integer> sums, int[] candidates, int start, int currentSum) {
        sums.add(currentSum);

        for (int i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) continue;
            backtrackSums(sums, candidates, i + 1, currentSum + candidates[i]);
        }
    }

    // Method 7: Find minimum number of elements for target
    public List<List<Integer>> combinationSum2MinElements(int[] candidates, int target) {
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
            backtrackMinElements(result, current, candidates, target - candidates[i], i + 1, minSize);
            current.remove(current.size() - 1);
        }
    }

    // Method 8: Performance analysis
    public static class PerformanceStats {
        int[] candidates;
        int target;
        int combinationsFound;
        long timeMs;
        int candidatesSkipped;

        public PerformanceStats(int[] candidates, int target, int combinationsFound,
                              long timeMs, int candidatesSkipped) {
            this.candidates = candidates.clone();
            this.target = target;
            this.combinationsFound = combinationsFound;
            this.timeMs = timeMs;
            this.candidatesSkipped = candidatesSkipped;
        }

        @Override
        public String toString() {
            return String.format("Candidates: %s, Target: %d, Combinations: %d, Time: %dms, Skipped: %d",
                               Arrays.toString(candidates), target, combinationsFound, timeMs, candidatesSkipped);
        }
    }

    public PerformanceStats analyzePerformance(int[] candidates, int target) {
        long startTime = System.nanoTime();
        List<List<Integer>> result = combinationSum2(candidates.clone(), target);
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;

        // Count duplicates that were skipped
        Arrays.sort(candidates);
        int skipped = 0;
        for (int i = 1; i < candidates.length; i++) {
            if (candidates[i] == candidates[i - 1]) skipped++;
        }

        return new PerformanceStats(candidates, target, result.size(), timeMs, skipped);
    }

    // Method 9: Validate combinations
    public boolean validateCombinations(List<List<Integer>> combinations, int[] candidates, int target) {
        if (combinations == null || candidates == null) return false;

        Set<String> uniqueCombos = new HashSet<>();
        Set<Integer> candidateSet = new HashSet<>();
        for (int num : candidates) candidateSet.add(num);

        for (List<Integer> combo : combinations) {
            // Check sum
            int sum = 0;
            Map<Integer, Integer> used = new HashMap<>();
            for (int num : combo) {
                sum += num;
                used.put(num, used.getOrDefault(num, 0) + 1);

                // Check if number exists in candidates with sufficient count
                if (!candidateSet.contains(num) ||
                    used.get(num) > countOccurrences(candidates, num)) {
                    return false;
                }
            }
            if (sum != target) return false;

            // Check for duplicates
            List<Integer> sorted = new ArrayList<>(combo);
            Collections.sort(sorted);
            String comboStr = sorted.toString();
            if (uniqueCombos.contains(comboStr)) return false;
            uniqueCombos.add(comboStr);
        }

        return true;
    }

    private int countOccurrences(int[] array, int target) {
        int count = 0;
        for (int num : array) {
            if (num == target) count++;
        }
        return count;
    }

    // Method 10: Get combination statistics
    public static class CombinationStats {
        int totalCombinations;
        int minLength;
        int maxLength;
        double avgLength;
        Map<Integer, Integer> numberFrequency;

        public CombinationStats(int totalCombinations, int minLength, int maxLength,
                              double avgLength, Map<Integer, Integer> numberFrequency) {
            this.totalCombinations = totalCombinations;
            this.minLength = minLength;
            this.maxLength = maxLength;
            this.avgLength = avgLength;
            this.numberFrequency = numberFrequency;
        }

        @Override
        public String toString() {
            return String.format("Total: %d, Length: [%d-%d], Avg: %.1f, Frequencies: %s",
                               totalCombinations, minLength, maxLength, avgLength, numberFrequency);
        }
    }

    public CombinationStats getCombinationStats(int[] candidates, int target) {
        List<List<Integer>> combinations = combinationSum2(candidates.clone(), target);

        if (combinations.isEmpty()) {
            return new CombinationStats(0, 0, 0, 0, new HashMap<>());
        }

        int minLength = Integer.MAX_VALUE;
        int maxLength = 0;
        int totalLength = 0;
        Map<Integer, Integer> numberFrequency = new HashMap<>();

        for (List<Integer> combo : combinations) {
            minLength = Math.min(minLength, combo.size());
            maxLength = Math.max(maxLength, combo.size());
            totalLength += combo.size();

            for (int num : combo) {
                numberFrequency.put(num, numberFrequency.getOrDefault(num, 0) + 1);
            }
        }

        double avgLength = (double) totalLength / combinations.size();

        return new CombinationStats(combinations.size(), minLength, maxLength, avgLength, numberFrequency);
    }

    // Method 11: Combination sum with range constraints
    public List<List<Integer>> combinationSum2WithRange(int[] candidates, int target,
                                                       int minElements, int maxElements) {
        List<List<Integer>> result = new ArrayList<>();
        if (candidates == null || candidates.length == 0) {
            return result;
        }

        Arrays.sort(candidates);
        backtrackRange(result, new ArrayList<>(), candidates, target, 0, minElements, maxElements);
        return result;
    }

    private void backtrackRange(List<List<Integer>> result, List<Integer> current,
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
            backtrackRange(result, current, candidates, target - candidates[i],
                         i + 1, minElements, maxElements);
            current.remove(current.size() - 1);
        }
    }

    // Method 12: Find all combinations that sum to target with different constraints
    public List<List<Integer>> combinationSum2Advanced(int[] candidates, int target,
                                                      boolean allowReuse, boolean sortResult) {
        List<List<Integer>> result = new ArrayList<>();
        if (candidates == null || candidates.length == 0) {
            return result;
        }

        Arrays.sort(candidates);
        backtrackAdvanced(result, new ArrayList<>(), candidates, target, 0, allowReuse);
        return result;
    }

    private void backtrackAdvanced(List<List<Integer>> result, List<Integer> current,
                                 int[] candidates, int target, int start, boolean allowReuse) {
        if (target == 0) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) continue;
            if (candidates[i] > target) break;

            current.add(candidates[i]);
            // If allowReuse, use i, otherwise i+1
            backtrackAdvanced(result, current, candidates, target - candidates[i],
                            allowReuse ? i : i + 1, allowReuse);
            current.remove(current.size() - 1);
        }
    }

    // Test cases
    public static void main(String[] args) {
        CombinationSumII6 solution = new CombinationSumII6();

        // Test Case 1: Basic combination sum II
        System.out.println("=== Basic Combination Sum II ===");
        int[] candidates1 = {10, 1, 2, 7, 6, 1, 5};
        int target1 = 8;
        List<List<Integer>> result1 = solution.combinationSum2(candidates1, target1);
        System.out.println("Candidates: " + Arrays.toString(candidates1) + ", Target: " + target1);
        System.out.println("Combinations: " + result1);
        System.out.println("Valid: " + solution.validateCombinations(result1, candidates1, target1));

        // Test Case 2: Iterative approach
        List<List<Integer>> result2 = solution.combinationSum2Iterative(candidates1, target1);
        System.out.println("Iterative approach: " + result2.size() + " combinations");

        // Test Case 3: Frequency-based approach
        List<List<Integer>> result3 = solution.combinationSum2Frequency(candidates1, target1);
        System.out.println("Frequency approach: " + result3.size() + " combinations");

        // Test Case 4: With exact size
        List<List<Integer>> result4 = solution.combinationSum2WithSize(candidates1, target1, 3);
        System.out.println("Size 3 combinations: " + result4);

        // Test Case 5: Count combinations
        int count = solution.countCombinations(candidates1, target1);
        System.out.println("Total combinations count: " + count);

        // Test Case 6: All possible sums
        Set<Integer> sums = solution.getAllPossibleSums(candidates1);
        System.out.println("All possible sums: " + sums);

        // Test Case 7: Minimum elements
        List<List<Integer>> minElements = solution.combinationSum2MinElements(candidates1, target1);
        System.out.println("Minimum elements combinations: " + minElements);

        // Test Case 8: Performance analysis
        PerformanceStats stats = solution.analyzePerformance(candidates1, target1);
        System.out.println("Performance: " + stats);

        // Test Case 9: Statistics
        CombinationStats comboStats = solution.getCombinationStats(candidates1, target1);
        System.out.println("Statistics: " + comboStats);

        // Test Case 10: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty candidates: " + solution.combinationSum2(new int[0], 5));
        System.out.println("Target 0: " + solution.combinationSum2(candidates1, 0));
        System.out.println("No solution: " + solution.combinationSum2(new int[]{5}, 3));

        // Test Case 11: With range constraints
        List<List<Integer>> rangeResult = solution.combinationSum2WithRange(candidates1, 8, 2, 4);
        System.out.println("2-4 elements: " + rangeResult);

        // Test Case 12: Advanced constraints
        List<List<Integer>> advanced = solution.combinationSum2Advanced(candidates1, 8, false, true);
        System.out.println("Advanced (no reuse): " + advanced.size() + " combinations");
    }
}