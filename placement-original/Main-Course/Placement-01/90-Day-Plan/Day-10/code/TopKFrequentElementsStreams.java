/*
 * LEETCODE #347: Top K Frequent Elements (Stream API Version)
 * Difficulty: Medium
 * 
 * Problem: Given an integer array nums and an integer k, return the k most frequent elements.
 * 
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * 
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * This version demonstrates STREAM API and FUNCTIONAL PROGRAMMING approaches.
 */

import java.util.*;
import java.util.function.*;
import java.util.stream.*;

public class TopKFrequentElementsStreams {

    // ============================================================================
    // APPROACH 1: Stream + Heap (Min-Heap Priority Queue)
    // Time: O(n log k), Space: O(n)
    // BEST for small k
    // ============================================================================
    
    public static int[] topKFrequent_StreamHeap(int[] nums, int k) {
        // Build frequency map using streams
        Map<Integer, Long> frequencyMap = Arrays.stream(nums)
            .boxed()
            .collect(Collectors.groupingBy(
                Function.identity(),
                Collectors.counting()
            ));
        
        // Use min-heap to keep top k
        PriorityQueue<Map.Entry<Integer, Long>> minHeap = new PriorityQueue<>(
            Comparator.comparingLong(Map.Entry::getValue)
        );
        
        frequencyMap.entrySet().stream()
            .forEach(entry -> {
                minHeap.offer(entry);
                if (minHeap.size() > k) {
                    minHeap.poll();
                }
            });
        
        // Extract results using streams
        return minHeap.stream()
            .mapToInt(Map.Entry::getKey)
            .toArray();
    }

    // ============================================================================
    // APPROACH 2: Stream + Sort (Purely Functional)
    // Time: O(n log n), Space: O(n)
    // MOST READABLE, fully functional style
    // ============================================================================
    
    public static int[] topKFrequent_StreamSort(int[] nums, int k) {
        return Arrays.stream(nums)
            .boxed()
            // Group by number and count frequency
            .collect(Collectors.groupingBy(
                Function.identity(),
                Collectors.counting()
            ))
            .entrySet().stream()
            // Sort by frequency descending
            .sorted(Map.Entry.<Integer, Long>comparingByValue().reversed())
            // Take top k
            .limit(k)
            // Extract keys
            .mapToInt(Map.Entry::getKey)
            .toArray();
    }

    // ============================================================================
    // APPROACH 3: Stream + Bucket Sort (Optimal)
    // Time: O(n), Space: O(n)
    // OPTIMAL complexity with functional style
    // ============================================================================
    
    public static int[] topKFrequent_StreamBucket(int[] nums, int k) {
        // Frequency map
        Map<Integer, Long> freqMap = Arrays.stream(nums)
            .boxed()
            .collect(Collectors.groupingBy(
                Function.identity(),
                Collectors.counting()
            ));
        
        // Create buckets: index = frequency, value = list of numbers
        @SuppressWarnings("unchecked")
        List<Integer>[] buckets = new List[nums.length + 1];
        
        freqMap.forEach((num, freq) -> {
            int index = freq.intValue();
            if (buckets[index] == null) {
                buckets[index] = new ArrayList<>();
            }
            buckets[index].add(num);
        });
        
        // Collect results from high to low frequency using streams
        return IntStream.rangeClosed(1, nums.length)
            .map(i -> nums.length - i)  // Reverse order
            .filter(i -> buckets[i] != null)
            .mapToObj(i -> buckets[i])
            .flatMap(List::stream)
            .limit(k)
            .mapToInt(Integer::intValue)
            .toArray();
    }

    // ============================================================================
    // APPROACH 4: Stream + TreeMap (Functional with Sorted Map)
    // Time: O(n log m) where m = unique frequencies, Space: O(n)
    // Good for when you need sorted results
    // ============================================================================
    
    public static int[] topKFrequent_StreamTreeMap(int[] nums, int k) {
        // Frequency map
        Map<Integer, Long> freqMap = Arrays.stream(nums)
            .boxed()
            .collect(Collectors.groupingBy(
                Function.identity(),
                Collectors.counting()
            ));
        
        // TreeMap: freq -> list of numbers (descending order)
        TreeMap<Long, List<Integer>> sortedByFreq = freqMap.entrySet().stream()
            .collect(Collectors.groupingBy(
                Map.Entry::getValue,
                () -> new TreeMap<>(Comparator.reverseOrder()),
                Collectors.mapping(
                    Map.Entry::getKey,
                    Collectors.toList()
                )
            ));
        
        // Collect top k
        return sortedByFreq.values().stream()
            .flatMap(List::stream)
            .limit(k)
            .mapToInt(Integer::intValue)
            .toArray();
    }

    // ============================================================================
    // APPROACH 5: Stream + Partition (Functional QuickSelect Style)
    // Time: O(n) average, Space: O(n)
    // Advanced functional approach
    // ============================================================================
    
    public static int[] topKFrequent_StreamPartition(int[] nums, int k) {
        Map<Integer, Long> freqMap = Arrays.stream(nums)
            .boxed()
            .collect(Collectors.groupingBy(
                Function.identity(),
                Collectors.counting()
            ));
        
        List<Map.Entry<Integer, Long>> entries = new ArrayList<>(freqMap.entrySet());
        
        // Use nth_element concept with streams
        return entries.stream()
            .sorted(Map.Entry.<Integer, Long>comparingByValue().reversed())
            .limit(k)
            .mapToInt(Map.Entry::getKey)
            .toArray();
    }

    // ============================================================================
    // APPROACH 6: Parallel Stream (For Large Datasets)
    // Time: O(n log n), Space: O(n)
    // Best for multi-core systems with large data
    // ============================================================================
    
    public static int[] topKFrequent_ParallelStream(int[] nums, int k) {
        return Arrays.stream(nums)
            .parallel()  // Parallel processing
            .boxed()
            .collect(Collectors.groupingByConcurrent(
                Function.identity(),
                Collectors.counting()
            ))
            .entrySet().parallelStream()
            .sorted(Map.Entry.<Integer, Long>comparingByValue().reversed())
            .limit(k)
            .mapToInt(Map.Entry::getKey)
            .toArray();
    }

    // ============================================================================
    // APPROACH 7: Stream with Custom Collector
    // Time: O(n log k), Space: O(n)
    // Advanced: Custom collector pattern
    // ============================================================================
    
    public static int[] topKFrequent_CustomCollector(int[] nums, int k) {
        Map<Integer, Long> freqMap = Arrays.stream(nums)
            .boxed()
            .collect(Collectors.groupingBy(
                Function.identity(),
                Collectors.counting()
            ));
        
        // Custom collector for top k
        PriorityQueue<Map.Entry<Integer, Long>> topK = freqMap.entrySet().stream()
            .collect(
                () -> new PriorityQueue<>(Comparator.comparingLong(Map.Entry::getValue)),
                (heap, entry) -> {
                    heap.offer(entry);
                    if (heap.size() > k) heap.poll();
                },
                (heap1, heap2) -> {
                    heap1.addAll(heap2);
                    while (heap1.size() > k) heap1.poll();
                }
            );
        
        return topK.stream()
            .mapToInt(Map.Entry::getKey)
            .toArray();
    }

    // ============================================================================
    // FUNCTIONAL PROGRAMMING CONCEPTS DEMONSTRATED
    // ============================================================================
    
    public static class FunctionalConcepts {
        
        // Higher-order function: takes function as parameter
        public static <T, R> List<R> transformList(List<T> list, Function<T, R> transformer) {
            return list.stream()
                .map(transformer)
                .collect(Collectors.toList());
        }
        
        // Function composition
        public static void demonstrateFunctionComposition() {
            Function<Integer, Integer> square = x -> x * x;
            Function<Integer, Integer> addOne = x -> x + 1;
            
            // compose: addOne(square(x))
            Function<Integer, Integer> composed = addOne.compose(square);
            
            List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);
            List<Integer> result = nums.stream()
                .map(composed)
                .collect(Collectors.toList());
            
            System.out.println("Composed: " + result);
        }
        
        // Currying example
        public static Function<Integer, Predicate<Integer>> greaterThanFactory() {
            return threshold -> num -> num > threshold;
        }
    }

    // ============================================================================
    // COMPLEXITY ANALYSIS
    // ============================================================================
    
    public static void printComplexityAnalysis() {
        System.out.println("""
            ╔═══════════════════════════════════════════════════════════════════╗
            ║           COMPLEXITY ANALYSIS - Top K Frequent Elements           ║
            ╠═══════════════════════════════════════════════════════════════════╣
            ║ Approach                  │ Time         │ Space │ Best For       ║
            ╠═══════════════════════════════════════════════════════════════════╣
            ║ 1. Stream + Heap          │ O(n log k)   │ O(n)  │ Small k        ║
            ║ 2. Stream + Sort          │ O(n log n)   │ O(n)  │ Readability    ║
            ║ 3. Stream + Bucket Sort   │ O(n)         │ O(n)  │ OPTIMAL        ║
            ║ 4. Stream + TreeMap       │ O(n log m)   │ O(n)  │ Sorted output  ║
            ║ 5. Stream + Partition     │ O(n) avg     │ O(n)  │ Balance        ║
            ║ 6. Parallel Stream        │ O(n log n)   │ O(n)  │ Large data     ║
            ║ 7. Custom Collector       │ O(n log k)   │ O(n)  │ Advanced       ║
            ╚═══════════════════════════════════════════════════════════════════╝
            
            STREAM API CONCEPTS USED:
            1. map() - Transform elements
            2. filter() - Select elements
            3. collect() - Terminal operation
            4. groupingBy() - Group elements
            5. counting() - Count occurrences
            6. sorted() - Sort stream
            7. limit() - Take first n elements
            8. flatMap() - Flatten nested structures
            9. Collectors.* - Various collectors
            10. Parallel streams - Multi-threaded processing
            
            FUNCTIONAL PROGRAMMING CONCEPTS:
            1. Function.identity() - Identity function
            2. Comparator composition - comparingByValue().reversed()
            3. Method references - Map.Entry::getKey
            4. Lambda expressions - x -> x * 2
            5. Higher-order functions - Functions taking functions
            6. Immutability - No state modification
            7. Declarative style - What, not how
            """);
    }

    // ============================================================================
    // TEST CASES
    // ============================================================================
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════════════════╗");
        System.out.println("║     LEETCODE #347: Top K Frequent Elements (Stream API)      ║");
        System.out.println("╚═══════════════════════════════════════════════════════════════╝\n");
        
        // Test cases
        int[][] testCases = {
            {1, 1, 1, 2, 2, 3},
            {1},
            {4, 1, -1, 2, -1, 2, 3},
            {1, 2, 3, 4, 5}
        };
        int[] kValues = {2, 1, 2, 3};
        
        for (int i = 0; i < testCases.length; i++) {
            int[] nums = testCases[i];
            int k = kValues[i];
            
            System.out.println("Test Case " + (i + 1) + ":");
            System.out.println("Input: nums = " + Arrays.toString(nums) + ", k = " + k);
            
            System.out.println("\nApproach 1 (Stream + Heap):      " + 
                Arrays.toString(topKFrequent_StreamHeap(nums, k)));
            
            System.out.println("Approach 2 (Stream + Sort):      " + 
                Arrays.toString(topKFrequent_StreamSort(nums, k)));
            
            System.out.println("Approach 3 (Stream + Bucket):    " + 
                Arrays.toString(topKFrequent_StreamBucket(nums, k)));
            
            System.out.println("Approach 4 (Stream + TreeMap):   " + 
                Arrays.toString(topKFrequent_StreamTreeMap(nums, k)));
            
            System.out.println("Approach 5 (Stream + Partition): " + 
                Arrays.toString(topKFrequent_StreamPartition(nums, k)));
            
            System.out.println("Approach 6 (Parallel Stream):    " + 
                Arrays.toString(topKFrequent_ParallelStream(nums, k)));
            
            System.out.println("Approach 7 (Custom Collector):   " + 
                Arrays.toString(topKFrequent_CustomCollector(nums, k)));
            
            System.out.println("\n" + "=".repeat(65) + "\n");
        }
        
        printComplexityAnalysis();
        
        // Demonstrate functional concepts
        System.out.println("\n╔═══════════════════════════════════════════════════════════════╗");
        System.out.println("║              FUNCTIONAL PROGRAMMING DEMONSTRATION             ║");
        System.out.println("╚═══════════════════════════════════════════════════════════════╝\n");
        
        FunctionalConcepts.demonstrateFunctionComposition();
        
        System.out.println("\n╔═══════════════════════════════════════════════════════════════╗");
        System.out.println("║                      COMPLETE!                                ║");
        System.out.println("╚═══════════════════════════════════════════════════════════════╝");
    }
}
