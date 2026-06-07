package backtracking.questions;

/*
 * 4. PERMUTATIONS (LeetCode 46)
 *
 * Problem Statement:
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 * Conceptual Understanding:
 * - Generate all possible arrangements of the array
 * - Each permutation is a rearrangement of all elements
 * - Use backtracking with a used array to track selected elements
 * - Base case: when current permutation size equals array length
 * - No start index needed since we can use any unused element
 *
 * Time Complexity: O(n!) - n factorial
 * Space Complexity: O(n!) for result storage, O(n) for recursion stack
 */

import java.util.*;

class Permutations4 {

    // Method 1: Basic backtracking with used array
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }

        boolean[] used = new boolean[nums.length];
        backtrack(result, new ArrayList<>(), nums, used);
        return result;
    }

    private void backtrack(List<List<Integer>> result, List<Integer> current,
                          int[] nums, boolean[] used) {
        // Base case: found a complete permutation
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }

        // Try each unused number
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            // Choose
            used[i] = true;
            current.add(nums[i]);

            // Explore
            backtrack(result, current, nums, used);

            // Unchoose (backtrack)
            current.remove(current.size() - 1);
            used[i] = false;
        }
    }

    // Method 2: Using swapping (in-place modification)
    public List<List<Integer>> permuteSwap(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }

        backtrackSwap(result, nums, 0);
        return result;
    }

    private void backtrackSwap(List<List<Integer>> result, int[] nums, int start) {
        // Base case: reached end of array
        if (start == nums.length) {
            List<Integer> permutation = new ArrayList<>();
            for (int num : nums) {
                permutation.add(num);
            }
            result.add(permutation);
            return;
        }

        // Try swapping current position with each remaining position
        for (int i = start; i < nums.length; i++) {
            // Swap
            swap(nums, start, i);

            // Recurse
            backtrackSwap(result, nums, start + 1);

            // Backtrack (swap back)
            swap(nums, start, i);
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    // Method 3: Iterative approach using next permutation
    public List<List<Integer>> permuteIterative(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }

        Arrays.sort(nums); // Start with sorted array
        result.add(arrayToList(nums));

        while (nextPermutation(nums)) {
            result.add(arrayToList(nums));
        }

        return result;
    }

    private boolean nextPermutation(int[] nums) {
        int i = nums.length - 2;
        // Find first decreasing element from right
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }

        if (i < 0) return false; // Last permutation

        int j = nums.length - 1;
        // Find smallest element larger than nums[i] from right
        while (j > i && nums[j] <= nums[i]) {
            j--;
        }

        // Swap
        swap(nums, i, j);

        // Reverse suffix
        reverse(nums, i + 1, nums.length - 1);
        return true;
    }

    private void reverse(int[] nums, int start, int end) {
        while (start < end) {
            swap(nums, start, end);
            start++;
            end--;
        }
    }

    private List<Integer> arrayToList(int[] nums) {
        List<Integer> list = new ArrayList<>();
        for (int num : nums) {
            list.add(num);
        }
        return list;
    }

    // Method 4: Using Heap's algorithm
    public List<List<Integer>> permuteHeaps(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }

        generateHeaps(result, nums, nums.length);
        return result;
    }

    private void generateHeaps(List<List<Integer>> result, int[] nums, int n) {
        if (n == 1) {
            result.add(arrayToList(nums));
            return;
        }

        for (int i = 0; i < n; i++) {
            generateHeaps(result, nums, n - 1);

            if (n % 2 == 1) {
                swap(nums, 0, n - 1);
            } else {
                swap(nums, i, n - 1);
            }
        }
    }

    // Method 5: Recursive approach with different base case
    public List<List<Integer>> permuteRecursive(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }

        return generatePermutations(nums, 0);
    }

    private List<List<Integer>> generatePermutations(int[] nums, int start) {
        List<List<Integer>> result = new ArrayList<>();

        if (start == nums.length - 1) {
            List<Integer> permutation = new ArrayList<>();
            for (int num : nums) {
                permutation.add(num);
            }
            result.add(permutation);
            return result;
        }

        for (int i = start; i < nums.length; i++) {
            swap(nums, start, i);
            result.addAll(generatePermutations(nums, start + 1));
            swap(nums, start, i); // backtrack
        }

        return result;
    }

    // Method 6: With duplicates handling
    public List<List<Integer>> permuteUnique(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }

        Arrays.sort(nums); // Sort to handle duplicates
        boolean[] used = new boolean[nums.length];
        backtrackUnique(result, new ArrayList<>(), nums, used);
        return result;
    }

    private void backtrackUnique(List<List<Integer>> result, List<Integer> current,
                                int[] nums, boolean[] used) {
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (used[i] || (i > 0 && nums[i] == nums[i - 1] && !used[i - 1])) continue;

            used[i] = true;
            current.add(nums[i]);
            backtrackUnique(result, current, nums, used);
            current.remove(current.size() - 1);
            used[i] = false;
        }
    }

    // Method 7: Generate permutations of specific length
    public List<List<Integer>> permuteLength(int[] nums, int length) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || length <= 0 || length > nums.length) {
            return result;
        }

        boolean[] used = new boolean[nums.length];
        backtrackLength(result, new ArrayList<>(), nums, used, length);
        return result;
    }

    private void backtrackLength(List<List<Integer>> result, List<Integer> current,
                                int[] nums, boolean[] used, int length) {
        if (current.size() == length) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            current.add(nums[i]);
            backtrackLength(result, current, nums, used, length);
            current.remove(current.size() - 1);
            used[i] = false;
        }
    }

    // Method 8: Count permutations without generating
    public int countPermutations(int n) {
        if (n <= 0) return 0;
        int result = 1;
        for (int i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    public int countPermutationsWithDuplicates(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        Map<Integer, Integer> frequency = new HashMap<>();
        for (int num : nums) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
        }

        int total = countPermutations(nums.length);
        for (int count : frequency.values()) {
            total /= countPermutations(count);
        }

        return total;
    }

    // Method 9: Performance analysis
    public static class PerformanceStats {
        int n;
        int permutations;
        long timeMs;
        boolean hasDuplicates;

        public PerformanceStats(int n, int permutations, long timeMs, boolean hasDuplicates) {
            this.n = n;
            this.permutations = permutations;
            this.timeMs = timeMs;
            this.hasDuplicates = hasDuplicates;
        }

        @Override
        public String toString() {
            return String.format("n=%d, permutations=%d, time=%dms, duplicates=%b",
                               n, permutations, timeMs, hasDuplicates);
        }
    }

    public PerformanceStats analyzePerformance(int[] nums) {
        long startTime = System.nanoTime();
        List<List<Integer>> result = permute(nums.clone());
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;

        Set<Integer> unique = new HashSet<>();
        for (int num : nums) unique.add(num);
        boolean hasDuplicates = unique.size() < nums.length;

        return new PerformanceStats(nums.length, result.size(), timeMs, hasDuplicates);
    }

    // Method 10: Validate permutations
    public boolean validatePermutations(List<List<Integer>> permutations, int[] original) {
        if (permutations == null || original == null) return false;

        Set<String> uniquePerms = new HashSet<>();
        Set<Integer> originalSet = new HashSet<>();
        for (int num : original) originalSet.add(num);

        for (List<Integer> perm : permutations) {
            // Check length
            if (perm.size() != original.length) return false;

            // Check contains all elements
            Set<Integer> permSet = new HashSet<>(perm);
            if (!permSet.equals(originalSet)) return false;

            // Check uniqueness
            String permStr = perm.toString();
            if (uniquePerms.contains(permStr)) return false;
            uniquePerms.add(permStr);
        }

        return true;
    }

    // Method 11: Get permutation statistics
    public static class PermutationStats {
        int totalPermutations;
        int uniqueElements;
        double avgPermutationLength;
        Map<Integer, Integer> frequencyMap;

        public PermutationStats(int totalPermutations, int uniqueElements,
                              double avgPermutationLength, Map<Integer, Integer> frequencyMap) {
            this.totalPermutations = totalPermutations;
            this.uniqueElements = uniqueElements;
            this.avgPermutationLength = avgPermutationLength;
            this.frequencyMap = frequencyMap;
        }

        @Override
        public String toString() {
            return String.format("Total: %d, Unique Elements: %d, Avg Length: %.1f, Frequencies: %s",
                               totalPermutations, uniqueElements, avgPermutationLength, frequencyMap);
        }
    }

    public PermutationStats getPermutationStats(int[] nums) {
        List<List<Integer>> permutations = permute(nums.clone());

        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (List<Integer> perm : permutations) {
            for (int num : perm) {
                frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
            }
        }

        Set<Integer> uniqueElements = new HashSet<>();
        for (int num : nums) uniqueElements.add(num);

        return new PermutationStats(permutations.size(), uniqueElements.size(),
                                  nums.length, frequencyMap);
    }

    // Method 12: Generate permutations with constraints
    public List<List<Integer>> permuteWithConstraints(int[] nums, int maxValue) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }

        boolean[] used = new boolean[nums.length];
        backtrackWithConstraints(result, new ArrayList<>(), nums, used, maxValue);
        return result;
    }

    private void backtrackWithConstraints(List<List<Integer>> result, List<Integer> current,
                                        int[] nums, boolean[] used, int maxValue) {
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (used[i] || nums[i] > maxValue) continue;

            used[i] = true;
            current.add(nums[i]);
            backtrackWithConstraints(result, current, nums, used, maxValue);
            current.remove(current.size() - 1);
            used[i] = false;
        }
    }

    // Test cases
    public static void main(String[] args) {
        Permutations4 solution = new Permutations4();

        // Test Case 1: Basic permutations
        System.out.println("=== Basic Permutations ===");
        int[] nums1 = {1, 2, 3};
        List<List<Integer>> result1 = solution.permute(nums1);
        System.out.println("Input: " + Arrays.toString(nums1));
        System.out.println("Permutations: " + result1);
        System.out.println("Count: " + result1.size());
        System.out.println("Valid: " + solution.validatePermutations(result1, nums1));

        // Test Case 2: Swap-based approach
        int[] nums2 = {1, 2, 3};
        List<List<Integer>> result2 = solution.permuteSwap(nums2.clone());
        System.out.println("Swap approach: " + result2.size() + " permutations");

        // Test Case 3: Iterative approach
        int[] nums3 = {1, 2, 3};
        List<List<Integer>> result3 = solution.permuteIterative(nums3.clone());
        System.out.println("Iterative approach: " + result3.size() + " permutations");

        // Test Case 4: Heap's algorithm
        int[] nums4 = {1, 2, 3};
        List<List<Integer>> result4 = solution.permuteHeaps(nums4.clone());
        System.out.println("Heap's algorithm: " + result4.size() + " permutations");

        // Test Case 5: Recursive approach
        int[] nums5 = {1, 2, 3};
        List<List<Integer>> result5 = solution.permuteRecursive(nums5.clone());
        System.out.println("Recursive approach: " + result5.size() + " permutations");

        // Test Case 6: With duplicates
        int[] nums6 = {1, 1, 2};
        List<List<Integer>> result6 = solution.permuteUnique(nums6);
        System.out.println("With duplicates: " + result6.size() + " unique permutations");

        // Test Case 7: Specific length
        int[] nums7 = {1, 2, 3, 4};
        List<List<Integer>> result7 = solution.permuteLength(nums7, 2);
        System.out.println("Length 2 permutations: " + result7.size());

        // Test Case 8: Count permutations
        System.out.println("Permutation counts:");
        for (int i = 1; i <= 5; i++) {
            System.out.println("P(" + i + ") = " + solution.countPermutations(i));
        }

        // Test Case 9: Performance analysis
        PerformanceStats stats = solution.analyzePerformance(new int[]{1, 2, 3, 4});
        System.out.println("Performance: " + stats);

        // Test Case 10: Statistics
        PermutationStats permStats = solution.getPermutationStats(new int[]{1, 2, 3});
        System.out.println("Statistics: " + permStats);

        // Test Case 11: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty array: " + solution.permute(new int[0]));
        System.out.println("Single element: " + solution.permute(new int[]{5}));
        System.out.println("Two elements: " + solution.permute(new int[]{1, 2}));

        // Test Case 12: With constraints
        int[] nums12 = {1, 2, 3, 4, 5};
        List<List<Integer>> constrained = solution.permuteWithConstraints(nums12, 3);
        System.out.println("Max value 3: " + constrained.size() + " permutations");
    }
}