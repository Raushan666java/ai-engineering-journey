package heaps.questions;

/*
 * 9. SMALLEST RANGE COVERING ELEMENTS (LeetCode 632)
 *
 * Problem Statement:
 * You have k lists of sorted integers in non-decreasing order. Find the smallest range that
 * includes at least one number from each of the k lists. We define the range [a, b] as
 * smallest if b - a is minimized.
 *
 * Conceptual Understanding:
 * - Find minimum range that covers at least one element from each list
 * - Multiple approaches: sliding window, priority queue, binary search
 * - Heap approach: maintain k pointers, use min-heap to track current elements
 * - Sliding window: merge all lists, use window to find minimum range
 * - Key insight: range is defined by max - min in current window
 * - Use heap to efficiently find next minimum element
 *
 * Time Complexity: O(n log k) heap, O(n log n) sliding window
 * Space Complexity: O(k) heap, O(n) for merged list
 */

import java.util.*;

class SmallestRangeCoveringElements9 {

    // Method 1: Using Min Heap (Priority Queue)
    public int[] smallestRange(List<List<Integer>> nums) {
        if (nums == null || nums.size() == 0) {
            return new int[]{0, 0};
        }

        int k = nums.size();
        int max = Integer.MIN_VALUE;

        // Min heap to store {value, list_index, element_index}
        PriorityQueue<int[]> minHeap = new PriorityQueue<>(
            (a, b) -> a[0] - b[0]
        );

        // Initialize heap with first element from each list
        for (int i = 0; i < k; i++) {
            if (!nums.get(i).isEmpty()) {
                int val = nums.get(i).get(0);
                minHeap.offer(new int[]{val, i, 0});
                max = Math.max(max, val);
            }
        }

        int[] result = {0, Integer.MAX_VALUE};

        while (!minHeap.isEmpty()) {
            // Get current minimum
            int[] curr = minHeap.poll();
            int min = curr[0];
            int listIdx = curr[1];
            int elemIdx = curr[2];

            // Update result if current range is smaller
            if (max - min < result[1] - result[0]) {
                result[0] = min;
                result[1] = max;
            }

            // Add next element from the same list
            if (elemIdx + 1 < nums.get(listIdx).size()) {
                int nextVal = nums.get(listIdx).get(elemIdx + 1);
                minHeap.offer(new int[]{nextVal, listIdx, elemIdx + 1});
                max = Math.max(max, nextVal);
            } else {
                // If any list is exhausted, we can't continue
                break;
            }
        }

        return result;
    }

    // Method 2: Sliding Window after merging
    public int[] smallestRangeSlidingWindow(List<List<Integer>> nums) {
        if (nums == null || nums.size() == 0) {
            return new int[]{0, 0};
        }

        int k = nums.size();

        // Create list of elements with their list indices
        List<int[]> elements = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            for (int num : nums.get(i)) {
                elements.add(new int[]{num, i});
            }
        }

        // Sort by value
        elements.sort(Comparator.comparingInt(a -> a[0]));

        int n = elements.size();
        int[] result = {0, Integer.MAX_VALUE};
        int left = 0;
        Map<Integer, Integer> count = new HashMap<>();
        int uniqueLists = 0;

        for (int right = 0; right < n; right++) {
            // Add current element
            int listIdx = elements.get(right)[1];
            count.put(listIdx, count.getOrDefault(listIdx, 0) + 1);
            if (count.get(listIdx) == 1) {
                uniqueLists++;
            }

            // Shrink window when all lists are covered
            while (uniqueLists == k && left <= right) {
                // Update result
                int currentRange = elements.get(right)[0] - elements.get(left)[0];
                if (currentRange < result[1] - result[0]) {
                    result[0] = elements.get(left)[0];
                    result[1] = elements.get(right)[0];
                }

                // Remove left element
                int leftListIdx = elements.get(left)[1];
                count.put(leftListIdx, count.get(leftListIdx) - 1);
                if (count.get(leftListIdx) == 0) {
                    uniqueLists--;
                }
                left++;
            }
        }

        return result;
    }

    // Method 3: Binary Search approach
    public int[] smallestRangeBinarySearch(List<List<Integer>> nums) {
        if (nums == null || nums.size() == 0) {
            return new int[]{0, 0};
        }

        // Find global min and max
        int globalMin = Integer.MAX_VALUE;
        int globalMax = Integer.MIN_VALUE;

        for (List<Integer> list : nums) {
            if (!list.isEmpty()) {
                globalMin = Math.min(globalMin, list.get(0));
                globalMax = Math.max(globalMax, list.get(list.size() - 1));
            }
        }

        int[] result = {globalMin, globalMax};

        // Binary search on range size
        int left = 0;
        int right = globalMax - globalMin;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (canCoverWithRange(nums, mid)) {
                result[1] = result[0] + mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return result;
    }

    private boolean canCoverWithRange(List<List<Integer>> nums, int rangeSize) {
        int k = nums.size();
        int[] next = new int[k]; // Next index to check for each list

        for (int start = 0; start < nums.get(0).size(); start++) {
            int currentMin = nums.get(0).get(start);
            int currentMax = currentMin + rangeSize;

            int covered = 1;
            Arrays.fill(next, 0);
            next[0] = start + 1;

            // Check if we can cover all lists within currentMax
            for (int i = 1; i < k; i++) {
                // Find first element in list i that is >= currentMin
                while (next[i] < nums.get(i).size() &&
                       nums.get(i).get(next[i]) < currentMin) {
                    next[i]++;
                }

                // Check if there's an element <= currentMax
                if (next[i] < nums.get(i).size() &&
                    nums.get(i).get(next[i]) <= currentMax) {
                    covered++;
                    next[i]++;
                }
            }

            if (covered == k) {
                return true;
            }
        }

        return false;
    }

    // Method 4: Two pointers with merged array
    public int[] smallestRangeTwoPointers(List<List<Integer>> nums) {
        if (nums == null || nums.size() == 0) {
            return new int[]{0, 0};
        }

        int k = nums.size();

        // Merge all lists with list indices
        List<int[]> merged = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            for (int num : nums.get(i)) {
                merged.add(new int[]{num, i});
            }
        }

        merged.sort(Comparator.comparingInt(a -> a[0]));

        int n = merged.size();
        int[] result = {0, Integer.MAX_VALUE};
        Map<Integer, Integer> count = new HashMap<>();
        int unique = 0;
        int left = 0;

        for (int right = 0; right < n; right++) {
            // Add right element
            int listIdx = merged.get(right)[1];
            count.put(listIdx, count.getOrDefault(listIdx, 0) + 1);
            if (count.get(listIdx) == 1) {
                unique++;
            }

            // Shrink from left when all lists covered
            while (unique == k && left <= right) {
                int currentRange = merged.get(right)[0] - merged.get(left)[0];
                if (currentRange < result[1] - result[0]) {
                    result[0] = merged.get(left)[0];
                    result[1] = merged.get(right)[0];
                }

                // Remove left element
                int leftListIdx = merged.get(left)[1];
                count.put(leftListIdx, count.get(leftListIdx) - 1);
                if (count.get(leftListIdx) == 0) {
                    unique--;
                }
                left++;
            }
        }

        return result;
    }

    // Method 5: Using TreeMap for ordered elements
    public int[] smallestRangeTreeMap(List<List<Integer>> nums) {
        if (nums == null || nums.size() == 0) {
            return new int[]{0, 0};
        }

        int k = nums.size();

        // TreeMap to keep track of current elements from each list
        TreeMap<Integer, Integer> window = new TreeMap<>();
        int[] pointers = new int[k]; // Current index for each list
        int[] result = {0, Integer.MAX_VALUE};

        // Initialize with first element from each list
        for (int i = 0; i < k; i++) {
            if (!nums.get(i).isEmpty()) {
                int val = nums.get(i).get(0);
                window.put(val, window.getOrDefault(val, 0) + 1);
                pointers[i] = 1;
            }
        }

        while (true) {
            // Check if all lists are represented
            if (window.size() >= k) { // At least one from each list
                int min = window.firstKey();
                int max = window.lastKey();
                if (max - min < result[1] - result[0]) {
                    result[0] = min;
                    result[1] = max;
                }
            }

            // Find the list with smallest current element and advance it
            int minList = -1;
            int minVal = Integer.MAX_VALUE;

            for (int i = 0; i < k; i++) {
                if (pointers[i] < nums.get(i).size()) {
                    int val = nums.get(i).get(pointers[i]);
                    if (val < minVal) {
                        minVal = val;
                        minList = i;
                    }
                }
            }

            if (minList == -1) {
                break; // No more elements to add
            }

            // Remove old element from window
            int oldVal = nums.get(minList).get(pointers[minList] - 1);
            window.put(oldVal, window.get(oldVal) - 1);
            if (window.get(oldVal) == 0) {
                window.remove(oldVal);
            }

            // Add new element to window
            int newVal = nums.get(minList).get(pointers[minList]);
            window.put(newVal, window.getOrDefault(newVal, 0) + 1);
            pointers[minList]++;
        }

        return result;
    }

    // Method 6: Optimized heap with early termination
    public int[] smallestRangeOptimized(List<List<Integer>> nums) {
        if (nums == null || nums.size() == 0) {
            return new int[]{0, 0};
        }

        int k = nums.size();

        // Find initial candidates
        PriorityQueue<int[]> minHeap = new PriorityQueue<>(
            (a, b) -> a[0] - b[0]
        );

        int currentMax = Integer.MIN_VALUE;
        int[] result = {0, Integer.MAX_VALUE};

        // Initialize with first elements
        for (int i = 0; i < k; i++) {
            if (!nums.get(i).isEmpty()) {
                int val = nums.get(i).get(0);
                minHeap.offer(new int[]{val, i, 0});
                currentMax = Math.max(currentMax, val);
            }
        }

        // Track the best range found so far
        int bestRange = Integer.MAX_VALUE;

        while (!minHeap.isEmpty()) {
            int[] curr = minHeap.poll();
            int min = curr[0];
            int listIdx = curr[1];
            int elemIdx = curr[2];

            // Update result if better range found
            if (currentMax - min < bestRange) {
                bestRange = currentMax - min;
                result[0] = min;
                result[1] = currentMax;
            }

            // Add next element from same list
            if (elemIdx + 1 < nums.get(listIdx).size()) {
                int nextVal = nums.get(listIdx).get(elemIdx + 1);
                minHeap.offer(new int[]{nextVal, listIdx, elemIdx + 1});
                currentMax = Math.max(currentMax, nextVal);

                // Early termination: if current range is already worse than best, continue
                if (currentMax - minHeap.peek()[0] >= bestRange) {
                    // The new range will be at least as large, can stop
                    break;
                }
            } else {
                // List exhausted
                break;
            }
        }

        return result;
    }

    // Method 7: Count-based approach
    public int[] smallestRangeCount(List<List<Integer>> nums) {
        if (nums == null || nums.size() == 0) {
            return new int[]{0, 0};
        }

        int k = nums.size();

        // Collect all elements with their list indices
        List<int[]> all = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            for (int num : nums.get(i)) {
                all.add(new int[]{num, i});
            }
        }

        all.sort(Comparator.comparingInt(a -> a[0]));

        int n = all.size();
        int[] freq = new int[k]; // Frequency of each list in current window
        int unique = 0; // Number of lists with at least one element
        int left = 0;
        int[] result = {0, Integer.MAX_VALUE};

        for (int right = 0; right < n; right++) {
            // Add right element
            int listIdx = all.get(right)[1];
            freq[listIdx]++;
            if (freq[listIdx] == 1) {
                unique++;
            }

            // Shrink window
            while (unique == k && left <= right) {
                int currentMin = all.get(left)[0];
                int currentMax = all.get(right)[0];
                int currentRange = currentMax - currentMin;

                if (currentRange < result[1] - result[0]) {
                    result[0] = currentMin;
                    result[1] = currentMax;
                }

                // Remove left element
                int leftListIdx = all.get(left)[1];
                freq[leftListIdx]--;
                if (freq[leftListIdx] == 0) {
                    unique--;
                }
                left++;
            }
        }

        return result;
    }

    // Method 8: Validate result
    public boolean validateRange(List<List<Integer>> nums, int[] range) {
        if (nums == null || nums.size() == 0 || range == null || range.length != 2) {
            return false;
        }

        int k = nums.size();
        boolean[] covered = new boolean[k];

        for (int i = 0; i < k; i++) {
            for (int num : nums.get(i)) {
                if (num >= range[0] && num <= range[1]) {
                    covered[i] = true;
                    break;
                }
            }
        }

        // Check if all lists are covered
        for (boolean isCovered : covered) {
            if (!isCovered) {
                return false;
            }
        }

        return true;
    }

    // Method 9: Get all possible ranges (educational)
    public List<int[]> getAllPossibleRanges(List<List<Integer>> nums) {
        List<int[]> ranges = new ArrayList<>();
        if (nums == null || nums.size() == 0) {
            return ranges;
        }

        int k = nums.size();

        // Brute force: try all possible combinations
        for (int i = 0; i < nums.get(0).size(); i++) {
            for (int j = 0; j < nums.get(1).size(); j++) {
                int min = Math.min(nums.get(0).get(i), nums.get(1).get(j));
                int max = Math.max(nums.get(0).get(i), nums.get(1).get(j));

                if (k == 2) {
                    ranges.add(new int[]{min, max});
                } else {
                    // For k > 2, need to check other lists
                    boolean valid = true;
                    for (int list = 2; list < k; list++) {
                        boolean found = false;
                        for (int num : nums.get(list)) {
                            if (num >= min && num <= max) {
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            valid = false;
                            break;
                        }
                    }
                    if (valid) {
                        ranges.add(new int[]{min, max});
                    }
                }
            }
        }

        return ranges;
    }

    // Method 10: Performance comparison
    public static class PerformanceResult {
        String method;
        long timeMs;
        int[] result;

        public PerformanceResult(String method, long timeMs, int[] result) {
            this.method = method;
            this.timeMs = timeMs;
            this.result = result;
        }

        @Override
        public String toString() {
            return String.format("%s: %d ms, Range: [%d, %d]",
                               method, timeMs, result[0], result[1]);
        }
    }

    public List<PerformanceResult> comparePerformance(List<List<Integer>> nums) {
        List<PerformanceResult> results = new ArrayList<>();

        // Heap method
        long start = System.nanoTime();
        int[] heapResult = smallestRange(nums);
        long heapTime = (System.nanoTime() - start) / 1_000_000;
        results.add(new PerformanceResult("Min Heap", heapTime, heapResult));

        // Sliding window
        start = System.nanoTime();
        int[] slidingResult = smallestRangeSlidingWindow(nums);
        long slidingTime = (System.nanoTime() - start) / 1_000_000;
        results.add(new PerformanceResult("Sliding Window", slidingTime, slidingResult));

        // Two pointers
        start = System.nanoTime();
        int[] twoPointersResult = smallestRangeTwoPointers(nums);
        long twoPointersTime = (System.nanoTime() - start) / 1_000_000;
        results.add(new PerformanceResult("Two Pointers", twoPointersTime, twoPointersResult));

        return results;
    }

    // Method 11: Get range statistics
    public static class RangeStats {
        int minRange;
        int maxRange;
        double avgRange;
        int totalRanges;

        public RangeStats(int minRange, int maxRange, double avgRange, int totalRanges) {
            this.minRange = minRange;
            this.maxRange = maxRange;
            this.avgRange = avgRange;
            this.totalRanges = totalRanges;
        }

        @Override
        public String toString() {
            return String.format("Min: %d, Max: %d, Avg: %.2f, Total: %d",
                               minRange, maxRange, avgRange, totalRanges);
        }
    }

    public RangeStats getRangeStats(List<List<Integer>> nums) {
        List<int[]> allRanges = getAllPossibleRanges(nums);
        if (allRanges.isEmpty()) {
            return new RangeStats(0, 0, 0, 0);
        }

        int minRange = Integer.MAX_VALUE;
        int maxRange = Integer.MIN_VALUE;
        int totalRange = 0;

        for (int[] range : allRanges) {
            int currentRange = range[1] - range[0];
            minRange = Math.min(minRange, currentRange);
            maxRange = Math.max(maxRange, currentRange);
            totalRange += currentRange;
        }

        double avgRange = (double) totalRange / allRanges.size();
        return new RangeStats(minRange, maxRange, avgRange, allRanges.size());
    }

    // Method 12: Check if range is minimal
    public boolean isMinimalRange(List<List<Integer>> nums, int[] range) {
        if (!validateRange(nums, range)) {
            return false;
        }

        int currentRange = range[1] - range[0];

        // Check if any smaller range exists
        for (int i = range[0]; i <= range[1]; i++) {
            for (int j = i; j <= range[1]; j++) {
                int testRange = j - i;
                if (testRange < currentRange && validateRange(nums, new int[]{i, j})) {
                    return false;
                }
            }
        }

        return true;
    }

    // Test cases
    public static void main(String[] args) {
        SmallestRangeCoveringElements9 solution = new SmallestRangeCoveringElements9();

        // Test Case 1: Basic heap approach
        List<List<Integer>> nums1 = Arrays.asList(
            Arrays.asList(4, 10, 15, 24, 26),
            Arrays.asList(0, 9, 12, 20),
            Arrays.asList(5, 18, 22, 30)
        );

        System.out.println("Input lists:");
        for (int i = 0; i < nums1.size(); i++) {
            System.out.println("List " + (i + 1) + ": " + nums1.get(i));
        }

        int[] result1 = solution.smallestRange(nums1);
        System.out.println("Smallest range (Heap): [" + result1[0] + ", " + result1[1] + "]");
        System.out.println("Valid: " + solution.validateRange(nums1, result1));

        // Test Case 2: Sliding window approach
        int[] result2 = solution.smallestRangeSlidingWindow(nums1);
        System.out.println("Smallest range (Sliding): [" + result2[0] + ", " + result2[1] + "]");
        System.out.println("Valid: " + solution.validateRange(nums1, result2));

        // Test Case 3: Two pointers approach
        int[] result3 = solution.smallestRangeTwoPointers(nums1);
        System.out.println("Smallest range (Two Ptr): [" + result3[0] + ", " + result3[1] + "]");
        System.out.println("Valid: " + solution.validateRange(nums1, result3));

        // Test Case 4: Optimized approach
        int[] result4 = solution.smallestRangeOptimized(nums1);
        System.out.println("Smallest range (Optimized): [" + result4[0] + ", " + result4[1] + "]");
        System.out.println("Valid: " + solution.validateRange(nums1, result4));

        // Test Case 5: Performance comparison
        System.out.println("\nPerformance comparison:");
        List<PerformanceResult> perfResults = solution.comparePerformance(nums1);
        for (PerformanceResult result : perfResults) {
            System.out.println(result);
        }

        // Test Case 6: Edge cases
        System.out.println("\nEdge cases:");

        // Single list
        List<List<Integer>> singleList = Arrays.asList(
            Arrays.asList(1, 2, 3, 4, 5)
        );
        int[] singleResult = solution.smallestRange(singleList);
        System.out.println("Single list: [" + singleResult[0] + ", " + singleResult[1] + "]");

        // Two lists
        List<List<Integer>> twoLists = Arrays.asList(
            Arrays.asList(1, 3, 5),
            Arrays.asList(2, 4, 6)
        );
        int[] twoResult = solution.smallestRange(twoLists);
        System.out.println("Two lists: [" + twoResult[0] + ", " + twoResult[1] + "]");

        // Lists with duplicates
        List<List<Integer>> duplicates = Arrays.asList(
            Arrays.asList(1, 1, 2),
            Arrays.asList(1, 2, 2),
            Arrays.asList(2, 2, 3)
        );
        int[] dupResult = solution.smallestRange(duplicates);
        System.out.println("With duplicates: [" + dupResult[0] + ", " + dupResult[1] + "]");

        // Test Case 7: Range statistics
        RangeStats stats = solution.getRangeStats(twoLists);
        System.out.println("Range statistics: " + stats);

        // Test Case 8: Check if minimal
        System.out.println("Is minimal: " + solution.isMinimalRange(nums1, result1));

        // Test Case 9: All possible ranges (small input)
        List<int[]> allRanges = solution.getAllPossibleRanges(twoLists);
        System.out.println("All possible ranges:");
        for (int[] range : allRanges) {
            System.out.println("  [" + range[0] + ", " + range[1] + "]");
        }

        // Test Case 10: Empty lists
        List<List<Integer>> empty = Arrays.asList(
            new ArrayList<>(),
            Arrays.asList(1, 2, 3)
        );
        try {
            int[] emptyResult = solution.smallestRange(empty);
            System.out.println("Empty list result: [" + emptyResult[0] + ", " + emptyResult[1] + "]");
        } catch (Exception e) {
            System.out.println("Empty list exception: " + e.getMessage());
        }

        // Test Case 11: Large numbers
        List<List<Integer>> large = Arrays.asList(
            Arrays.asList(1000000, 2000000),
            Arrays.asList(1500000, 2500000),
            Arrays.asList(1200000, 1800000)
        );
        int[] largeResult = solution.smallestRange(large);
        System.out.println("Large numbers: [" + largeResult[0] + ", " + largeResult[1] + "]");

        // Test Case 12: Binary search approach
        int[] binaryResult = solution.smallestRangeBinarySearch(nums1);
        System.out.println("Binary search: [" + binaryResult[0] + ", " + binaryResult[1] + "]");
        System.out.println("Valid: " + solution.validateRange(nums1, binaryResult));
    }
}