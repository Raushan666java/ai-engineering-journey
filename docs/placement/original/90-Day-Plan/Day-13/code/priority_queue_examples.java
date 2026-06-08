import java.util.*;

public class priority_queue_examples {
    
    // Example 1: Kth Largest Element
    static int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        return minHeap.peek();
    }
    
    // Example 2: Merge K Sorted Lists (using arrays for simplicity)
    static class ArrayElement implements Comparable<ArrayElement> {
        int value, arrayIndex, elementIndex;
        
        ArrayElement(int val, int arrIdx, int elemIdx) {
            value = val;
            arrayIndex = arrIdx;
            elementIndex = elemIdx;
        }
        
        public int compareTo(ArrayElement other) {
            return Integer.compare(this.value, other.value);
        }
    }
    
    static List<Integer> mergeKSortedArrays(int[][] arrays) {
        PriorityQueue<ArrayElement> minHeap = new PriorityQueue<>();
        List<Integer> result = new ArrayList<>();
        
        // Add first element of each array
        for (int i = 0; i < arrays.length; i++) {
            if (arrays[i].length > 0) {
                minHeap.offer(new ArrayElement(arrays[i][0], i, 0));
            }
        }
        
        while (!minHeap.isEmpty()) {
            ArrayElement curr = minHeap.poll();
            result.add(curr.value);
            
            // Add next element from same array
            int nextIdx = curr.elementIndex + 1;
            if (nextIdx < arrays[curr.arrayIndex].length) {
                minHeap.offer(new ArrayElement(
                    arrays[curr.arrayIndex][nextIdx],
                    curr.arrayIndex,
                    nextIdx
                ));
            }
        }
        
        return result;
    }
    
    // Example 3: Top K Frequent Elements
    static int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }
        
        PriorityQueue<Map.Entry<Integer, Integer>> maxHeap = 
            new PriorityQueue<>((a, b) -> b.getValue() - a.getValue());
        
        maxHeap.addAll(freq.entrySet());
        
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = maxHeap.poll().getKey();
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Priority Queue Examples ===\n");
        
        // Example 1: Kth Largest
        int[] nums1 = {3, 2, 1, 5, 6, 4};
        System.out.println("Array: " + Arrays.toString(nums1));
        System.out.println("2nd largest: " + findKthLargest(nums1, 2));
        System.out.println();
        
        // Example 2: Merge K Sorted Arrays
        int[][] arrays = {
            {1, 4, 7},
            {2, 5, 8},
            {3, 6, 9}
        };
        System.out.println("Merge K sorted arrays:");
        System.out.println(mergeKSortedArrays(arrays));
        System.out.println();
        
        // Example 3: Top K Frequent
        int[] nums2 = {1, 1, 1, 2, 2, 3};
        System.out.println("Array: " + Arrays.toString(nums2));
        System.out.println("Top 2 frequent: " + Arrays.toString(topKFrequent(nums2, 2)));
    }
}
