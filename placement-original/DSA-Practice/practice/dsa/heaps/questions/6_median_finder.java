package heaps.questions;

/*
 * 6. FIND MEDIAN FROM DATA STREAM (LeetCode 295)
 *
 * Problem Statement:
 * The median is the middle value in an ordered integer list. If the size of the list is even,
 * there is no middle value, so the median is the mean of the two middle values.
 *
 * Design a data structure that supports adding a number from the data stream and finding
 * the median in constant time (O(1)) and logarithmic time for adding (O(log n)).
 *
 * Conceptual Understanding:
 * - Maintain running median as numbers are added
 * - Use two heaps: max-heap for lower half, min-heap for upper half
 * - Max-heap root is largest in lower half, min-heap root is smallest in upper half
 * - Balance heaps to keep them roughly equal size
 * - Median is average of two roots (even) or one root (odd)
 * - Key insight: max-heap <= min-heap, difference in sizes <= 1
 *
 * Time Complexity: O(log n) add, O(1) find median
 * Space Complexity: O(n) for storing all numbers
 */

import java.util.*;

class MedianFinder6 {

    // Two heaps: max-heap for lower half, min-heap for upper half
    private PriorityQueue<Integer> maxHeap; // Lower half (max heap)
    private PriorityQueue<Integer> minHeap; // Upper half (min heap)

    public MedianFinder6() {
        maxHeap = new PriorityQueue<>((a, b) -> b - a); // Max heap
        minHeap = new PriorityQueue<>(); // Min heap (natural ordering)
    }

    // Method 1: Add number to data structure
    public void addNum(int num) {
        // Add to max-heap first
        maxHeap.offer(num);

        // Balance: move largest from lower half to upper half
        minHeap.offer(maxHeap.poll());

        // Ensure max-heap has equal or one more element than min-heap
        if (maxHeap.size() < minHeap.size()) {
            maxHeap.offer(minHeap.poll());
        }
    }

    // Method 2: Find median
    public double findMedian() {
        if (maxHeap.isEmpty()) {
            throw new RuntimeException("No numbers added yet");
        }

        // If odd number of elements, median is max-heap root
        if (maxHeap.size() > minHeap.size()) {
            return maxHeap.peek();
        } else {
            // If even, average of two roots
            return (maxHeap.peek() + minHeap.peek()) / 2.0;
        }
    }

    // Method 3: Alternative implementation with different balancing
    static class MedianFinderAlt {
        private PriorityQueue<Integer> maxHeap;
        private PriorityQueue<Integer> minHeap;

        public MedianFinderAlt() {
            maxHeap = new PriorityQueue<>((a, b) -> b - a);
            minHeap = new PriorityQueue<>();
        }

        public void addNum(int num) {
            // Add to appropriate heap based on current median
            if (maxHeap.isEmpty() || num <= maxHeap.peek()) {
                maxHeap.offer(num);
            } else {
                minHeap.offer(num);
            }

            // Balance the heaps
            balanceHeaps();
        }

        private void balanceHeaps() {
            // Ensure max-heap has equal or one more element
            if (maxHeap.size() > minHeap.size() + 1) {
                minHeap.offer(maxHeap.poll());
            } else if (minHeap.size() > maxHeap.size()) {
                maxHeap.offer(minHeap.poll());
            }
        }

        public double findMedian() {
            if (maxHeap.isEmpty()) {
                throw new RuntimeException("No numbers added yet");
            }

            if (maxHeap.size() > minHeap.size()) {
                return maxHeap.peek();
            } else {
                return (maxHeap.peek() + minHeap.peek()) / 2.0;
            }
        }
    }

    // Method 4: Using TreeSet for ordered storage (educational)
    static class MedianFinderTreeSet {
        private TreeSet<Integer> numbers;
        private int size;

        public MedianFinderTreeSet() {
            numbers = new TreeSet<>();
            size = 0;
        }

        public void addNum(int num) {
            numbers.add(num);
            size++;
        }

        public double findMedian() {
            if (size == 0) {
                throw new RuntimeException("No numbers added yet");
            }

            if (size % 2 == 1) {
                // Odd: return middle element
                Iterator<Integer> it = numbers.iterator();
                for (int i = 0; i < size / 2; i++) {
                    it.next();
                }
                return it.next();
            } else {
                // Even: average of two middle elements
                Iterator<Integer> it = numbers.iterator();
                for (int i = 0; i < size / 2 - 1; i++) {
                    it.next();
                }
                int first = it.next();
                int second = it.next();
                return (first + second) / 2.0;
            }
        }
    }

    // Method 5: Using ArrayList with sorting (inefficient but simple)
    static class MedianFinderArray {
        private List<Integer> numbers;

        public MedianFinderArray() {
            numbers = new ArrayList<>();
        }

        public void addNum(int num) {
            numbers.add(num);
        }

        public double findMedian() {
            if (numbers.isEmpty()) {
                throw new RuntimeException("No numbers added yet");
            }

            Collections.sort(numbers);

            int n = numbers.size();
            if (n % 2 == 1) {
                return numbers.get(n / 2);
            } else {
                return (numbers.get(n / 2 - 1) + numbers.get(n / 2)) / 2.0;
            }
        }
    }

    // Method 6: Handle duplicates properly
    static class MedianFinderWithDuplicates {
        private PriorityQueue<Integer> maxHeap;
        private PriorityQueue<Integer> minHeap;

        public MedianFinderWithDuplicates() {
            maxHeap = new PriorityQueue<>((a, b) -> b - a);
            minHeap = new PriorityQueue<>();
        }

        public void addNum(int num) {
            maxHeap.offer(num);
            minHeap.offer(maxHeap.poll());

            // Balance
            if (maxHeap.size() < minHeap.size()) {
                maxHeap.offer(minHeap.poll());
            }
        }

        public double findMedian() {
            if (maxHeap.isEmpty()) {
                throw new RuntimeException("No numbers added yet");
            }

            if (maxHeap.size() > minHeap.size()) {
                return maxHeap.peek();
            } else {
                return (maxHeap.peek() + minHeap.peek()) / 2.0;
            }
        }
    }

    // Method 7: Get all statistics
    public static class Statistics {
        double median;
        double mean;
        int min;
        int max;
        int size;

        public Statistics(double median, double mean, int min, int max, int size) {
            this.median = median;
            this.mean = mean;
            this.min = min;
            this.max = max;
            this.size = size;
        }

        @Override
        public String toString() {
            return String.format("Size: %d, Median: %.2f, Mean: %.2f, Min: %d, Max: %d",
                               size, median, mean, min, max);
        }
    }

    public Statistics getStatistics() {
        if (maxHeap.isEmpty()) {
            throw new RuntimeException("No numbers added yet");
        }

        double median = findMedian();
        int totalSize = maxHeap.size() + minHeap.size();

        // Calculate mean (need to sum all elements)
        long sum = 0;
        for (int num : maxHeap) sum += num;
        for (int num : minHeap) sum += num;
        double mean = (double) sum / totalSize;

        // Find min and max
        int min = maxHeap.peek(); // Smallest in max-heap
        int max = minHeap.isEmpty() ? maxHeap.peek() : minHeap.peek(); // Largest in min-heap

        return new Statistics(median, mean, min, max, totalSize);
    }

    // Method 8: Remove number (advanced)
    public boolean removeNum(int num) {
        // This is complex to implement efficiently with heaps
        // For educational purposes, we'll use a simple approach
        boolean removed = maxHeap.remove(num) || minHeap.remove(num);
        if (removed) {
            // Rebalance if necessary
            if (maxHeap.size() < minHeap.size()) {
                maxHeap.offer(minHeap.poll());
            }
        }
        return removed;
    }

    // Method 9: Check if number exists
    public boolean contains(int num) {
        return maxHeap.contains(num) || minHeap.contains(num);
    }

    // Method 10: Get heap sizes
    public int[] getHeapSizes() {
        return new int[]{maxHeap.size(), minHeap.size()};
    }

    // Method 11: Validate heap property
    public boolean validateHeaps() {
        // Check that all elements in max-heap <= all elements in min-heap
        if (!maxHeap.isEmpty() && !minHeap.isEmpty()) {
            if (maxHeap.peek() > minHeap.peek()) {
                return false;
            }
        }

        // Check heap sizes differ by at most 1
        int diff = Math.abs(maxHeap.size() - minHeap.size());
        return diff <= 1;
    }

    // Method 12: Performance comparison
    public static class PerformanceResult {
        String method;
        long addTime;
        long findTime;
        double median;

        public PerformanceResult(String method, long addTime, long findTime, double median) {
            this.method = method;
            this.addTime = addTime;
            this.findTime = findTime;
            this.median = median;
        }

        @Override
        public String toString() {
            return String.format("%s - Add: %d ns, Find: %d ns, Median: %.2f",
                               method, addTime, findTime, median);
        }
    }

    public static List<PerformanceResult> comparePerformance(int[] numbers) {
        List<PerformanceResult> results = new ArrayList<>();

        // Heap-based median finder
        MedianFinder6 heapFinder = new MedianFinder6();
        long startTime = System.nanoTime();
        for (int num : numbers) {
            heapFinder.addNum(num);
        }
        long addTime = System.nanoTime() - startTime;

        startTime = System.nanoTime();
        double median = heapFinder.findMedian();
        long findTime = System.nanoTime() - startTime;

        results.add(new PerformanceResult("Two Heaps", addTime, findTime, median));

        // Array-based (sort each time)
        MedianFinderArray arrayFinder = new MedianFinderArray();
        startTime = System.nanoTime();
        for (int num : numbers) {
            arrayFinder.addNum(num);
        }
        addTime = System.nanoTime() - startTime;

        startTime = System.nanoTime();
        median = arrayFinder.findMedian();
        findTime = System.nanoTime() - startTime;

        results.add(new PerformanceResult("Array Sort", addTime, findTime, median));

        return results;
    }

    // Test cases
    public static void main(String[] args) {
        MedianFinder6 finder = new MedianFinder6();

        // Test Case 1: Basic functionality
        System.out.println("Adding numbers: 1, 2, 3, 4, 5");
        finder.addNum(1);
        System.out.println("After 1: Median = " + finder.findMedian());

        finder.addNum(2);
        System.out.println("After 2: Median = " + finder.findMedian());

        finder.addNum(3);
        System.out.println("After 3: Median = " + finder.findMedian());

        finder.addNum(4);
        System.out.println("After 4: Median = " + finder.findMedian());

        finder.addNum(5);
        System.out.println("After 5: Median = " + finder.findMedian());

        // Test Case 2: Alternative implementation
        System.out.println("\n=== Alternative Implementation ===");
        MedianFinderAlt altFinder = new MedianFinderAlt();
        int[] testNumbers = {5, 2, 8, 1, 9, 3};

        for (int num : testNumbers) {
            altFinder.addNum(num);
            System.out.println("Added " + num + ": Median = " + altFinder.findMedian());
        }

        // Test Case 3: TreeSet implementation
        System.out.println("\n=== TreeSet Implementation ===");
        MedianFinderTreeSet treeFinder = new MedianFinderTreeSet();
        for (int num : testNumbers) {
            treeFinder.addNum(num);
            System.out.println("Added " + num + ": Median = " + treeFinder.findMedian());
        }

        // Test Case 4: Statistics
        System.out.println("\n=== Statistics ===");
        Statistics stats = finder.getStatistics();
        System.out.println(stats);

        // Test Case 5: Heap sizes
        int[] sizes = finder.getHeapSizes();
        System.out.println("Heap sizes - Max heap: " + sizes[0] + ", Min heap: " + sizes[1]);

        // Test Case 6: Validation
        System.out.println("Heaps are valid: " + finder.validateHeaps());

        // Test Case 7: Performance comparison
        System.out.println("\n=== Performance Comparison ===");
        int[] largeArray = new int[1000];
        Random rand = new Random();
        for (int i = 0; i < largeArray.length; i++) {
            largeArray[i] = rand.nextInt(10000);
        }

        List<PerformanceResult> perfResults = comparePerformance(largeArray);
        for (PerformanceResult result : perfResults) {
            System.out.println(result);
        }

        // Test Case 8: Edge cases
        System.out.println("\n=== Edge Cases ===");

        // Empty finder
        MedianFinder6 emptyFinder = new MedianFinder6();
        try {
            emptyFinder.findMedian();
        } catch (RuntimeException e) {
            System.out.println("Empty finder: " + e.getMessage());
        }

        // Single element
        MedianFinder6 singleFinder = new MedianFinder6();
        singleFinder.addNum(42);
        System.out.println("Single element: " + singleFinder.findMedian());

        // Two elements
        singleFinder.addNum(24);
        System.out.println("Two elements: " + singleFinder.findMedian());

        // Test Case 9: Duplicates
        System.out.println("\n=== Duplicates ===");
        MedianFinder6 dupFinder = new MedianFinder6();
        int[] duplicates = {3, 3, 3, 3, 3};
        for (int num : duplicates) {
            dupFinder.addNum(num);
            System.out.println("Added " + num + ": Median = " + dupFinder.findMedian());
        }

        // Test Case 10: Large numbers
        System.out.println("\n=== Large Numbers ===");
        MedianFinder6 largeFinder = new MedianFinder6();
        largeFinder.addNum(Integer.MAX_VALUE);
        largeFinder.addNum(Integer.MIN_VALUE);
        System.out.println("Large range: Median = " + largeFinder.findMedian());

        // Test Case 11: Remove functionality
        System.out.println("\n=== Remove Functionality ===");
        MedianFinder6 removeFinder = new MedianFinder6();
        removeFinder.addNum(1);
        removeFinder.addNum(2);
        removeFinder.addNum(3);
        System.out.println("Before remove: " + removeFinder.findMedian());
        removeFinder.removeNum(2);
        System.out.println("After removing 2: " + removeFinder.findMedian());
    }
}