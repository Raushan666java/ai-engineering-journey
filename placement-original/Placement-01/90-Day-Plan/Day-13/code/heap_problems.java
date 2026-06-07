import java.util.*;

public class heap_problems {
    
    // Problem 1: Find Median from Data Stream
    static class MedianFinder {
        PriorityQueue<Integer> maxHeap; // lower half
        PriorityQueue<Integer> minHeap; // upper half
        
        public MedianFinder() {
            maxHeap = new PriorityQueue<>((a, b) -> b - a);
            minHeap = new PriorityQueue<>();
        }
        
        public void addNum(int num) {
            if (maxHeap.isEmpty() || num <= maxHeap.peek()) {
                maxHeap.offer(num);
            } else {
                minHeap.offer(num);
            }
            
            // Balance heaps
            if (maxHeap.size() > minHeap.size() + 1) {
                minHeap.offer(maxHeap.poll());
            } else if (minHeap.size() > maxHeap.size()) {
                maxHeap.offer(minHeap.poll());
            }
        }
        
        public double findMedian() {
            if (maxHeap.size() == minHeap.size()) {
                return (maxHeap.peek() + minHeap.peek()) / 2.0;
            }
            return maxHeap.peek();
        }
    }
    
    // Problem 2: K Closest Points to Origin
    static int[][] kClosest(int[][] points, int k) {
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>(
            (a, b) -> (b[0]*b[0] + b[1]*b[1]) - (a[0]*a[0] + a[1]*a[1])
        );
        
        for (int[] point : points) {
            maxHeap.offer(point);
            if (maxHeap.size() > k) {
                maxHeap.poll();
            }
        }
        
        int[][] result = new int[k][2];
        for (int i = 0; i < k; i++) {
            result[i] = maxHeap.poll();
        }
        return result;
    }
    
    // Problem 3: Reorganize String (No two adjacent same)
    static String reorganizeString(String s) {
        Map<Character, Integer> freq = new HashMap<>();
        for (char c : s.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        PriorityQueue<Map.Entry<Character, Integer>> maxHeap = 
            new PriorityQueue<>((a, b) -> b.getValue() - a.getValue());
        maxHeap.addAll(freq.entrySet());
        
        StringBuilder result = new StringBuilder();
        Map.Entry<Character, Integer> prev = null;
        
        while (!maxHeap.isEmpty()) {
            Map.Entry<Character, Integer> curr = maxHeap.poll();
            result.append(curr.getKey());
            curr.setValue(curr.getValue() - 1);
            
            if (prev != null && prev.getValue() > 0) {
                maxHeap.offer(prev);
            }
            prev = curr;
        }
        
        return result.length() == s.length() ? result.toString() : "";
    }
    
    public static void main(String[] args) {
        System.out.println("=== Heap Problems ===\n");
        
        // Problem 1: Median Finder
        System.out.println("1. Find Median from Data Stream:");
        MedianFinder mf = new MedianFinder();
        mf.addNum(1);
        mf.addNum(2);
        System.out.println("Median after [1,2]: " + mf.findMedian());
        mf.addNum(3);
        System.out.println("Median after [1,2,3]: " + mf.findMedian());
        System.out.println();
        
        // Problem 2: K Closest Points
        System.out.println("2. K Closest Points to Origin:");
        int[][] points = {{1,3},{-2,2},{5,8},{0,1}};
        int[][] closest = kClosest(points, 2);
        System.out.println("2 closest points: " + Arrays.deepToString(closest));
        System.out.println();
        
        // Problem 3: Reorganize String
        System.out.println("3. Reorganize String:");
        String s = "aab";
        System.out.println("Input: " + s);
        System.out.println("Reorganized: " + reorganizeString(s));
    }
}
