package heaps.questions;

/*
 * 4. TOP K FREQUENT ELEMENTS (LeetCode 347)
 *
 * Problem Statement:
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 * Conceptual Understanding:
 * - Find k elements that appear most frequently in the array
 * - Multiple approaches: hash map + sorting, hash map + heap, bucket sort
 * - Heap approach: use min-heap to keep track of top k frequencies
 * - Bucket sort: use frequency as index for O(n) solution
 * - Key insight: frequency counting + priority queue for top k
 * - Handle ties by returning any order
 *
 * Time Complexity: O(n log k) heap, O(n) bucket sort
 * Space Complexity: O(n) for frequency map, O(k) heap
 */

import java.util.*;
import java.util.stream.Collectors;

class TopKFrequentElements4 {

    // Method 1: Using HashMap and Min Heap (Priority Queue)
    public int[] topKFrequent(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) {
            return new int[0];
        }

        // Count frequencies
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // Min heap to keep track of top k frequent elements
        // Elements with lower frequency will be removed first
        PriorityQueue<Map.Entry<Integer, Integer>> minHeap =
            new PriorityQueue<>((a, b) -> a.getValue() - b.getValue());

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            minHeap.offer(entry);
            if (minHeap.size() > k) {
                minHeap.poll(); // Remove least frequent
            }
        }

        // Extract elements from heap
        int[] result = new int[k];
        for (int i = k - 1; i >= 0; i--) {
            result[i] = minHeap.poll().getKey();
        }

        return result;
    }

    // Method 2: Using HashMap and Max Heap
    public int[] topKFrequentMaxHeap(int[] nums, int k) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // Max heap based on frequency
        PriorityQueue<Map.Entry<Integer, Integer>> maxHeap =
            new PriorityQueue<>((a, b) -> b.getValue() - a.getValue());

        maxHeap.addAll(frequencyMap.entrySet());

        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = maxHeap.poll().getKey();
        }

        return result;
    }

    // Method 3: Bucket Sort Approach (O(n) time)
    public int[] topKFrequentBucketSort(int[] nums, int k) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // Create buckets: index represents frequency
        List<Integer>[] buckets = new List[nums.length + 1];
        for (int i = 0; i <= nums.length; i++) {
            buckets[i] = new ArrayList<>();
        }

        // Place numbers in buckets based on frequency
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            int frequency = entry.getValue();
            buckets[frequency].add(entry.getKey());
        }

        // Collect top k from highest frequency buckets
        List<Integer> result = new ArrayList<>();
        for (int i = buckets.length - 1; i >= 0 && result.size() < k; i--) {
            if (!buckets[i].isEmpty()) {
                result.addAll(buckets[i]);
            }
        }

        // Convert to array (may have more than k elements if frequencies are same)
        return result.subList(0, Math.min(k, result.size()))
                    .stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 4: Using TreeMap (sorted by frequency)
    public int[] topKFrequentTreeMap(int[] nums, int k) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // TreeMap with frequency as key (descending order)
        TreeMap<Integer, List<Integer>> freqToNums = new TreeMap<>(Collections.reverseOrder());

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            int freq = entry.getValue();
            freqToNums.computeIfAbsent(freq, x -> new ArrayList<>()).add(entry.getKey());
        }

        List<Integer> result = new ArrayList<>();
        for (List<Integer> numsList : freqToNums.values()) {
            if (result.size() >= k) break;
            result.addAll(numsList);
        }

        return result.subList(0, k).stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 5: Quick Select approach (modified for frequencies)
    public int[] topKFrequentQuickSelect(int[] nums, int k) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // Convert to list of entries for quick select
        List<Map.Entry<Integer, Integer>> entries = new ArrayList<>(frequencyMap.entrySet());

        // Find k-th largest frequency using quick select
        quickSelect(entries, 0, entries.size() - 1, k);

        // Take first k elements (they have the highest frequencies)
        return entries.subList(0, k).stream()
                    .map(Map.Entry::getKey)
                    .mapToInt(Integer::intValue)
                    .toArray();
    }

    private void quickSelect(List<Map.Entry<Integer, Integer>> entries, int left, int right, int k) {
        if (left >= right) return;

        int pivotIndex = partition(entries, left, right);

        if (pivotIndex == k - 1) {
            return;
        } else if (pivotIndex > k - 1) {
            quickSelect(entries, left, pivotIndex - 1, k);
        } else {
            quickSelect(entries, pivotIndex + 1, right, k);
        }
    }

    private int partition(List<Map.Entry<Integer, Integer>> entries, int left, int right) {
        // Choose random pivot
        Random rand = new Random();
        int pivotIndex = left + rand.nextInt(right - left + 1);
        int pivotFreq = entries.get(pivotIndex).getValue();

        // Move pivot to end
        Collections.swap(entries, pivotIndex, right);

        int storeIndex = left;
        for (int i = left; i < right; i++) {
            if (entries.get(i).getValue() >= pivotFreq) { // Descending order
                Collections.swap(entries, i, storeIndex);
                storeIndex++;
            }
        }

        Collections.swap(entries, storeIndex, right);
        return storeIndex;
    }

    // Method 6: Using Java 8 Streams
    public int[] topKFrequentStreams(int[] nums, int k) {
        return Arrays.stream(nums)
                .boxed()
                .collect(Collectors.groupingBy(e -> e, Collectors.counting()))
                .entrySet()
                .stream()
                .sorted(Map.Entry.<Integer, Long>comparingByValue().reversed())
                .limit(k)
                .mapToInt(Map.Entry::getKey)
                .toArray();
    }

    // Method 7: Custom Frequency Comparator
    public int[] topKFrequentCustomComparator(int[] nums, int k) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // Custom comparator for max heap
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>(
            (a, b) -> Integer.compare(b[1], a[1]) // Compare frequencies descending
        );

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            maxHeap.offer(new int[]{entry.getKey(), entry.getValue()});
        }

        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = maxHeap.poll()[0];
        }

        return result;
    }

    // Method 8: Handle large k values
    public int[] topKFrequentLargeK(int[] nums, int k) {
        if (k >= nums.length) {
            // Return all unique elements
            Set<Integer> unique = new HashSet<>();
            for (int num : nums) {
                unique.add(num);
            }
            return unique.stream().mapToInt(Integer::intValue).toArray();
        }

        return topKFrequent(nums, k);
    }

    // Method 9: Return with frequencies
    public List<int[]> topKFrequentWithFreq(int[] nums, int k) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        PriorityQueue<Map.Entry<Integer, Integer>> minHeap =
            new PriorityQueue<>((a, b) -> a.getValue() - b.getValue());

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            minHeap.offer(entry);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }

        List<int[]> result = new ArrayList<>();
        while (!minHeap.isEmpty()) {
            Map.Entry<Integer, Integer> entry = minHeap.poll();
            result.add(new int[]{entry.getKey(), entry.getValue()});
        }

        // Reverse to get highest frequency first
        Collections.reverse(result);
        return result;
    }

    // Method 10: Most frequent element (k=1)
    public int mostFrequent(int[] nums) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        int maxFreq = 0;
        int result = nums[0];

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            if (entry.getValue() > maxFreq) {
                maxFreq = entry.getValue();
                result = entry.getKey();
            }
        }

        return result;
    }

    // Method 11: Top K with custom object
    static class Element {
        int value;
        int frequency;

        Element(int value, int frequency) {
            this.value = value;
            this.frequency = frequency;
        }
    }

    public int[] topKFrequentCustomObject(int[] nums, int k) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        PriorityQueue<Element> minHeap = new PriorityQueue<>(
            (a, b) -> Integer.compare(a.frequency, b.frequency)
        );

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            minHeap.offer(new Element(entry.getKey(), entry.getValue()));
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }

        int[] result = new int[k];
        for (int i = k - 1; i >= 0; i--) {
            result[i] = minHeap.poll().value;
        }

        return result;
    }

    // Method 12: Performance comparison
    public static class PerformanceResult {
        String method;
        long timeMs;
        int[] result;

        PerformanceResult(String method, long timeMs, int[] result) {
            this.method = method;
            this.timeMs = timeMs;
            this.result = result;
        }

        @Override
        public String toString() {
            return method + ": " + timeMs + "ms, Result: " + Arrays.toString(result);
        }
    }

    public List<PerformanceResult> comparePerformance(int[] nums, int k) {
        List<PerformanceResult> results = new ArrayList<>();

        // Heap method
        long start = System.nanoTime();
        int[] heapResult = topKFrequent(nums.clone(), k);
        long heapTime = (System.nanoTime() - start) / 1_000_000;
        results.add(new PerformanceResult("Min Heap", heapTime, heapResult));

        // Max heap method
        start = System.nanoTime();
        int[] maxHeapResult = topKFrequentMaxHeap(nums.clone(), k);
        long maxHeapTime = (System.nanoTime() - start) / 1_000_000;
        results.add(new PerformanceResult("Max Heap", maxHeapTime, maxHeapResult));

        // Bucket sort
        start = System.nanoTime();
        int[] bucketResult = topKFrequentBucketSort(nums.clone(), k);
        long bucketTime = (System.nanoTime() - start) / 1_000_000;
        results.add(new PerformanceResult("Bucket Sort", bucketTime, bucketResult));

        return results;
    }

    // Test cases
    public static void main(String[] args) {
        TopKFrequentElements4 solution = new TopKFrequentElements4();
        int[] nums = {1, 1, 1, 2, 2, 3, 5, 5, 5, 5};
        int k = 2;

        // Test Case 1: Basic heap approach
        System.out.println("Array: " + Arrays.toString(nums));
        System.out.println("Top " + k + " frequent (heap): " + Arrays.toString(solution.topKFrequent(nums, k)));

        // Test Case 2: Max heap approach
        System.out.println("Top " + k + " frequent (max heap): " + Arrays.toString(solution.topKFrequentMaxHeap(nums, k)));

        // Test Case 3: Bucket sort approach
        System.out.println("Top " + k + " frequent (bucket): " + Arrays.toString(solution.topKFrequentBucketSort(nums, k)));

        // Test Case 4: TreeMap approach
        System.out.println("Top " + k + " frequent (treemap): " + Arrays.toString(solution.topKFrequentTreeMap(nums, k)));

        // Test Case 5: Quick select approach
        System.out.println("Top " + k + " frequent (quick select): " + Arrays.toString(solution.topKFrequentQuickSelect(nums, k)));

        // Test Case 6: Streams approach
        System.out.println("Top " + k + " frequent (streams): " + Arrays.toString(solution.topKFrequentStreams(nums, k)));

        // Test Case 7: With frequencies
        List<int[]> withFreq = solution.topKFrequentWithFreq(nums, k);
        System.out.print("Top " + k + " with frequencies: ");
        for (int[] pair : withFreq) {
            System.out.print("[" + pair[0] + ":" + pair[1] + "] ");
        }
        System.out.println();

        // Test Case 8: Most frequent
        System.out.println("Most frequent: " + solution.mostFrequent(nums));

        // Test Case 9: Custom object approach
        System.out.println("Top " + k + " (custom object): " + Arrays.toString(solution.topKFrequentCustomObject(nums, k)));

        // Test Case 10: Performance comparison
        System.out.println("\nPerformance comparison:");
        List<PerformanceResult> perfResults = solution.comparePerformance(nums, k);
        for (PerformanceResult result : perfResults) {
            System.out.println(result);
        }

        // Test Case 11: Edge cases
        int[] single = {5};
        System.out.println("Single element: " + Arrays.toString(solution.topKFrequent(single, 1)));

        int[] allSame = {3, 3, 3, 3};
        System.out.println("All same: " + Arrays.toString(solution.topKFrequent(allSame, 1)));

        int[] unique = {1, 2, 3, 4, 5};
        System.out.println("All unique, top 3: " + Arrays.toString(solution.topKFrequent(unique, 3)));

        // Test Case 12: Large k
        System.out.println("Large k (k=10, array size=6): " + Arrays.toString(solution.topKFrequentLargeK(unique, 10)));
    }
}