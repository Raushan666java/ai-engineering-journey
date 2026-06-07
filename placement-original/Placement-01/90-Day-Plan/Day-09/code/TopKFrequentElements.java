/*
 * ============================================================================
 * LeetCode #347: Top K Frequent Elements
 * Difficulty: Medium
 * Topics: HashMap, PriorityQueue, Heap, Bucket Sort
 * ============================================================================
 * 
 * PROBLEM:
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * 
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 * - k is in the range [1, number of unique elements]
 * - It is guaranteed that the answer is unique
 * 
 * Follow up: Your algorithm's time complexity must be better than O(n log n).
 * 
 * OOP COMMENTARY:
 * This problem demonstrates practical usage of:
 * - HashMap for frequency counting (key-value mapping)
 * - PriorityQueue with custom Comparator (min-heap for top K)
 * - ArrayList for bucket sort approach (indexed storage)
 * - Generics in Collections (Map<Integer, Integer>, List<Integer>)
 */

import java.util.*;

public class TopKFrequentElements {

    // ========================================================================
    // APPROACH 1: MIN-HEAP (Priority Queue)
    // Time: O(n log k), Space: O(n)
    // ========================================================================
    
    /**
     * Uses HashMap for frequency counting and PriorityQueue (min-heap) to keep top K elements.
     * 
     * OOP Concepts:
     * - HashMap<Integer, Integer>: Generic map for counting
     * - PriorityQueue<Integer>: Min-heap with custom comparator
     * - Comparator: Functional interface for custom ordering
     * 
     * Algorithm:
     * 1. Count frequencies using HashMap
     * 2. Use min-heap of size k to keep top k frequent elements
     * 3. If heap size > k, remove minimum (least frequent)
     * 4. Result is the heap contents
     * 
     * Why min-heap?
     * - We want to remove LEAST frequent elements
     * - Min-heap gives us O(1) access to minimum
     * - When heap size > k, poll() removes the minimum
     */
    public static int[] topKFrequent_MinHeap(int[] nums, int k) {
        // Step 1: Count frequencies
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        
        // Step 2: Min-heap ordered by frequency
        // Comparator compares based on frequency, not the number itself
        PriorityQueue<Integer> minHeap = new PriorityQueue<>(
            (a, b) -> frequencyMap.get(a) - frequencyMap.get(b)
        );
        
        // Step 3: Add elements to heap, keep size = k
        for (int num : frequencyMap.keySet()) {
            minHeap.offer(num);
            if (minHeap.size() > k) {
                minHeap.poll();  // Remove least frequent
            }
        }
        
        // Step 4: Extract result from heap
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = minHeap.poll();
        }
        
        return result;
    }

    // ========================================================================
    // APPROACH 2: MAX-HEAP (All elements, then extract K)
    // Time: O(n log n), Space: O(n)
    // ========================================================================
    
    /**
     * Uses max-heap to sort all elements by frequency, then extract top k.
     * 
     * OOP Concepts:
     * - Collections.reverseOrder(): Comparator for reverse ordering
     * - Map.Entry<Integer, Integer>: Key-value pair objects
     * 
     * Algorithm:
     * 1. Count frequencies
     * 2. Put all entries in max-heap ordered by frequency
     * 3. Poll k times to get top k frequent elements
     * 
     * Comparison with Approach 1:
     * - More space (stores all elements in heap)
     * - Slower for large inputs (O(n log n) vs O(n log k))
     * - Simpler logic (no size checking)
     */
    public static int[] topKFrequent_MaxHeap(int[] nums, int k) {
        // Step 1: Count frequencies
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        
        // Step 2: Max-heap ordered by frequency (descending)
        PriorityQueue<Map.Entry<Integer, Integer>> maxHeap = new PriorityQueue<>(
            (a, b) -> b.getValue() - a.getValue()  // Compare by frequency
        );
        
        // Add all entries to heap
        maxHeap.addAll(frequencyMap.entrySet());
        
        // Step 3: Extract top k
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = maxHeap.poll().getKey();
        }
        
        return result;
    }

    // ========================================================================
    // APPROACH 3: BUCKET SORT
    // Time: O(n), Space: O(n)
    // ========================================================================
    
    /**
     * Uses bucket sort where bucket index = frequency.
     * This is the optimal O(n) solution!
     * 
     * OOP Concepts:
     * - ArrayList<List<Integer>>: List of lists (buckets)
     * - Generics: Type-safe collections
     * - ArrayList initialization and manipulation
     * 
     * Algorithm:
     * 1. Count frequencies
     * 2. Create buckets where bucket[i] contains numbers with frequency i
     * 3. Traverse buckets from high to low frequency
     * 4. Collect top k frequent elements
     * 
     * Why O(n)?
     * - Frequency counting: O(n)
     * - Bucket creation: O(n)
     * - Collecting results: O(n) worst case
     * - No sorting needed!
     * 
     * Key insight:
     * - Max frequency is at most n (all elements same)
     * - So we need buckets 0 to n
     * - Buckets are naturally sorted by frequency (index)
     */
    public static int[] topKFrequent_BucketSort(int[] nums, int k) {
        // Step 1: Count frequencies
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        
        // Step 2: Create buckets
        // bucket[i] contains list of numbers with frequency i
        List<List<Integer>> buckets = new ArrayList<>(nums.length + 1);
        for (int i = 0; i <= nums.length; i++) {
            buckets.add(new ArrayList<>());
        }
        
        // Fill buckets
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            int num = entry.getKey();
            int freq = entry.getValue();
            buckets.get(freq).add(num);
        }
        
        // Step 3: Collect top k from buckets (high frequency to low)
        List<Integer> result = new ArrayList<>();
        for (int i = buckets.size() - 1; i >= 0 && result.size() < k; i--) {
            if (!buckets.get(i).isEmpty()) {
                result.addAll(buckets.get(i));
            }
        }
        
        // Convert to array
        return result.stream().limit(k).mapToInt(Integer::intValue).toArray();
    }

    // ========================================================================
    // APPROACH 4: TREEMAP (Frequency to Numbers)
    // Time: O(n log m), Space: O(n) where m = unique frequencies
    // ========================================================================
    
    /**
     * Uses TreeMap to automatically sort by frequency.
     * 
     * OOP Concepts:
     * - TreeMap<Integer, List<Integer>>: Sorted map by frequency
     * - NavigableMap operations: descendingMap()
     * - Collections.reverseOrder(): Descending comparator
     * 
     * Algorithm:
     * 1. Count frequencies
     * 2. Create TreeMap: frequency -> list of numbers
     * 3. Traverse from high to low frequency
     * 4. Collect top k elements
     */
    public static int[] topKFrequent_TreeMap(int[] nums, int k) {
        // Step 1: Count frequencies
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        
        // Step 2: TreeMap with descending order (high frequency first)
        TreeMap<Integer, List<Integer>> freqToNums = new TreeMap<>(Collections.reverseOrder());
        
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            int num = entry.getKey();
            int freq = entry.getValue();
            
            freqToNums.computeIfAbsent(freq, f -> new ArrayList<>()).add(num);
        }
        
        // Step 3: Collect top k
        List<Integer> result = new ArrayList<>();
        for (List<Integer> nums_list : freqToNums.values()) {
            result.addAll(nums_list);
            if (result.size() >= k) {
                break;
            }
        }
        
        return result.stream().limit(k).mapToInt(Integer::intValue).toArray();
    }

    // ========================================================================
    // APPROACH 5: QUICKSELECT (Average O(n), Worst O(n^2))
    // Time: O(n) average, O(n^2) worst, Space: O(n)
    // ========================================================================
    
    /**
     * Uses quickselect algorithm to find kth most frequent without full sorting.
     * 
     * OOP Concepts:
     * - ArrayList for dynamic array operations
     * - Random for pivot selection
     * - Partitioning algorithm
     * 
     * Algorithm:
     * 1. Count frequencies
     * 2. Create list of unique numbers
     * 3. Use quickselect to partition around kth position
     * 4. Elements from k to end are top k frequent
     * 
     * Why quickselect?
     * - Average O(n) to find kth element
     * - Don't need full sort, just partitioning
     * - In-place partitioning (space-efficient)
     */
    public static int[] topKFrequent_QuickSelect(int[] nums, int k) {
        // Step 1: Count frequencies
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        
        // Step 2: Create list of unique numbers
        List<Integer> unique = new ArrayList<>(frequencyMap.keySet());
        
        // Step 3: Quickselect to find kth position
        int n = unique.size();
        quickSelect(unique, 0, n - 1, n - k, frequencyMap);
        
        // Step 4: Top k elements are from index (n-k) to end
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = unique.get(n - k + i);
        }
        
        return result;
    }
    
    private static void quickSelect(List<Integer> nums, int left, int right, int kSmallest,
                                    Map<Integer, Integer> frequencyMap) {
        if (left == right) return;
        
        // Random pivot for average O(n)
        Random random = new Random();
        int pivotIndex = left + random.nextInt(right - left + 1);
        
        // Partition and get final pivot position
        pivotIndex = partition(nums, left, right, pivotIndex, frequencyMap);
        
        if (kSmallest == pivotIndex) {
            return;  // Found kth element
        } else if (kSmallest < pivotIndex) {
            quickSelect(nums, left, pivotIndex - 1, kSmallest, frequencyMap);
        } else {
            quickSelect(nums, pivotIndex + 1, right, kSmallest, frequencyMap);
        }
    }
    
    private static int partition(List<Integer> nums, int left, int right, int pivotIndex,
                                Map<Integer, Integer> frequencyMap) {
        int pivotFreq = frequencyMap.get(nums.get(pivotIndex));
        
        // Move pivot to end
        Collections.swap(nums, pivotIndex, right);
        
        // Partition: elements less frequent than pivot go to left
        int storeIndex = left;
        for (int i = left; i < right; i++) {
            if (frequencyMap.get(nums.get(i)) < pivotFreq) {
                Collections.swap(nums, storeIndex, i);
                storeIndex++;
            }
        }
        
        // Move pivot to final position
        Collections.swap(nums, storeIndex, right);
        
        return storeIndex;
    }

    // ========================================================================
    // TEST CASES
    // ========================================================================

    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║     LeetCode #347: Top K Frequent Elements                 ║");
        System.out.println("║     Testing All Approaches                                 ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        // Test case 1
        int[] nums1 = {1, 1, 1, 2, 2, 3};
        int k1 = 2;
        System.out.println("Test Case 1:");
        System.out.println("Input: nums = " + Arrays.toString(nums1) + ", k = " + k1);
        System.out.println("Expected: [1, 2] (in any order)");
        System.out.println("Min-Heap:    " + Arrays.toString(topKFrequent_MinHeap(nums1, k1)));
        System.out.println("Max-Heap:    " + Arrays.toString(topKFrequent_MaxHeap(nums1, k1)));
        System.out.println("Bucket Sort: " + Arrays.toString(topKFrequent_BucketSort(nums1, k1)));
        System.out.println("TreeMap:     " + Arrays.toString(topKFrequent_TreeMap(nums1, k1)));
        System.out.println("QuickSelect: " + Arrays.toString(topKFrequent_QuickSelect(nums1, k1)));
        System.out.println();
        
        // Test case 2
        int[] nums2 = {1};
        int k2 = 1;
        System.out.println("Test Case 2:");
        System.out.println("Input: nums = " + Arrays.toString(nums2) + ", k = " + k2);
        System.out.println("Expected: [1]");
        System.out.println("Min-Heap:    " + Arrays.toString(topKFrequent_MinHeap(nums2, k2)));
        System.out.println("Max-Heap:    " + Arrays.toString(topKFrequent_MaxHeap(nums2, k2)));
        System.out.println("Bucket Sort: " + Arrays.toString(topKFrequent_BucketSort(nums2, k2)));
        System.out.println("TreeMap:     " + Arrays.toString(topKFrequent_TreeMap(nums2, k2)));
        System.out.println("QuickSelect: " + Arrays.toString(topKFrequent_QuickSelect(nums2, k2)));
        System.out.println();
        
        // Test case 3
        int[] nums3 = {4, 1, -1, 2, -1, 2, 3};
        int k3 = 2;
        System.out.println("Test Case 3:");
        System.out.println("Input: nums = " + Arrays.toString(nums3) + ", k = " + k3);
        System.out.println("Expected: [-1, 2] (in any order)");
        System.out.println("Min-Heap:    " + Arrays.toString(topKFrequent_MinHeap(nums3, k3)));
        System.out.println("Max-Heap:    " + Arrays.toString(topKFrequent_MaxHeap(nums3, k3)));
        System.out.println("Bucket Sort: " + Arrays.toString(topKFrequent_BucketSort(nums3, k3)));
        System.out.println("TreeMap:     " + Arrays.toString(topKFrequent_TreeMap(nums3, k3)));
        System.out.println("QuickSelect: " + Arrays.toString(topKFrequent_QuickSelect(nums3, k3)));
        System.out.println();
        
        // Complexity comparison
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║               COMPLEXITY COMPARISON                        ║");
        System.out.println("╠════════════════════════════════════════════════════════════╣");
        System.out.println("║ Approach         │ Time Complexity │ Space Complexity     ║");
        System.out.println("╠══════════════════╪═════════════════╪══════════════════════╣");
        System.out.println("║ Min-Heap         │ O(n log k)      │ O(n + k)             ║");
        System.out.println("║ Max-Heap         │ O(n log n)      │ O(n)                 ║");
        System.out.println("║ Bucket Sort      │ O(n)            │ O(n)      OPTIMAL!   ║");
        System.out.println("║ TreeMap          │ O(n log m)      │ O(n)                 ║");
        System.out.println("║ QuickSelect      │ O(n) avg        │ O(n)                 ║");
        System.out.println("╚══════════════════╧═════════════════╧══════════════════════╝");
        System.out.println();
        
        System.out.println("OOP CONCEPTS DEMONSTRATED:");
        System.out.println("  ✓ HashMap for frequency counting");
        System.out.println("  ✓ PriorityQueue with custom Comparator");
        System.out.println("  ✓ TreeMap for sorted key-value pairs");
        System.out.println("  ✓ ArrayList for bucket implementation");
        System.out.println("  ✓ Generics: Map<Integer, Integer>, List<Integer>");
        System.out.println("  ✓ Collections utility methods");
        System.out.println("  ✓ Stream API for array conversion");
    }
}
