package heaps.questions;

/*
 * 12. PRIORITY QUEUE CUSTOM IMPLEMENTATION
 *
 * Problem Statement:
 * Implement a custom priority queue (max-heap) from scratch without using Java's PriorityQueue.
 * The implementation should support the following operations:
 * - insert(key): Insert a key into the priority queue
 * - extractMax(): Remove and return the maximum element
 * - getMax(): Return the maximum element without removing it
 * - increaseKey(index, newKey): Increase the key at given index
 * - decreaseKey(index, newKey): Decrease the key at given index
 * - delete(index): Delete the key at given index
 * - buildHeap(array): Build heap from an array
 * - heapSort(): Sort the array using heap sort
 *
 * Conceptual Understanding:
 * - Binary heap as complete binary tree
 * - Max-heap property: parent >= children
 * - Array representation: root at index 1 (or 0)
 * - Parent: i/2, Left child: 2*i, Right child: 2*i+1
 * - Heapify operations: heapify up and heapify down
 * - Time complexities: insert/extractMax: O(log n), buildHeap: O(n)
 * - Space complexity: O(n)
 *
 * This implementation demonstrates core heap algorithms and data structure concepts.
 */

import java.util.*;

class CustomPriorityQueue12 {

    private int[] heap;
    private int size;
    private int capacity;

    // Constructor
    public CustomPriorityQueue12(int capacity) {
        this.capacity = capacity;
        this.heap = new int[capacity + 1]; // 1-based indexing
        this.size = 0;
    }

    // Method 1: Check if heap is empty
    public boolean isEmpty() {
        return size == 0;
    }

    // Method 2: Check if heap is full
    public boolean isFull() {
        return size == capacity;
    }

    // Method 3: Get current size
    public int getSize() {
        return size;
    }

    // Method 4: Get parent index
    private int getParent(int index) {
        return index / 2;
    }

    // Method 5: Get left child index
    private int getLeftChild(int index) {
        return 2 * index;
    }

    // Method 6: Get right child index
    private int getRightChild(int index) {
        return 2 * index + 1;
    }

    // Method 7: Swap two elements
    private void swap(int i, int j) {
        int temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }

    // Method 8: Heapify up (for insert and increase key)
    private void heapifyUp(int index) {
        while (index > 1 && heap[getParent(index)] < heap[index]) {
            swap(index, getParent(index));
            index = getParent(index);
        }
    }

    // Method 9: Heapify down (for extract max and decrease key)
    private void heapifyDown(int index) {
        int largest = index;
        int left = getLeftChild(index);
        int right = getRightChild(index);

        // Find the largest among root, left child, right child
        if (left <= size && heap[left] > heap[largest]) {
            largest = left;
        }
        if (right <= size && heap[right] > heap[largest]) {
            largest = right;
        }

        // If root is not largest, swap and continue heapifying
        if (largest != index) {
            swap(index, largest);
            heapifyDown(largest);
        }
    }

    // Method 10: Insert a key
    public boolean insert(int key) {
        if (isFull()) {
            return false; // Heap is full
        }

        size++;
        heap[size] = key;
        heapifyUp(size);
        return true;
    }

    // Method 11: Get maximum element
    public int getMax() {
        if (isEmpty()) {
            throw new IllegalStateException("Heap is empty");
        }
        return heap[1];
    }

    // Method 12: Extract maximum element
    public int extractMax() {
        if (isEmpty()) {
            throw new IllegalStateException("Heap is empty");
        }

        int max = heap[1];
        heap[1] = heap[size];
        size--;
        heapifyDown(1);
        return max;
    }

    // Method 13: Increase key at index
    public void increaseKey(int index, int newKey) {
        if (index < 1 || index > size) {
            throw new IllegalArgumentException("Invalid index");
        }
        if (newKey < heap[index]) {
            throw new IllegalArgumentException("New key is smaller than current key");
        }

        heap[index] = newKey;
        heapifyUp(index);
    }

    // Method 14: Decrease key at index
    public void decreaseKey(int index, int newKey) {
        if (index < 1 || index > size) {
            throw new IllegalArgumentException("Invalid index");
        }
        if (newKey > heap[index]) {
            throw new IllegalArgumentException("New key is larger than current key");
        }

        heap[index] = newKey;
        heapifyDown(index);
    }

    // Method 15: Delete key at index
    public void delete(int index) {
        if (index < 1 || index > size) {
            throw new IllegalArgumentException("Invalid index");
        }

        // Replace with last element and heapify
        heap[index] = heap[size];
        size--;

        // Determine whether to heapify up or down
        if (index > 1 && heap[index] > heap[getParent(index)]) {
            heapifyUp(index);
        } else {
            heapifyDown(index);
        }
    }

    // Method 16: Build heap from array
    public void buildHeap(int[] array) {
        if (array == null || array.length == 0) {
            return;
        }

        // Reset heap
        size = 0;
        capacity = array.length;

        // Copy array to heap (1-based)
        heap = new int[capacity + 1];
        for (int i = 0; i < array.length; i++) {
            heap[i + 1] = array[i];
            size++;
        }

        // Heapify from bottom up
        for (int i = size / 2; i >= 1; i--) {
            heapifyDown(i);
        }
    }

    // Method 17: Heap sort
    public int[] heapSort() {
        int[] sorted = new int[size];
        int originalSize = size;

        // Extract max repeatedly
        for (int i = 0; i < originalSize; i++) {
            sorted[i] = extractMax();
        }

        // Restore heap
        size = originalSize;
        for (int i = 0; i < originalSize; i++) {
            heap[i + 1] = sorted[originalSize - 1 - i];
        }

        return sorted;
    }

    // Method 18: Get heap array (for debugging)
    public int[] getHeapArray() {
        int[] result = new int[size];
        for (int i = 0; i < size; i++) {
            result[i] = heap[i + 1];
        }
        return result;
    }

    // Method 19: Print heap (level order)
    public void printHeap() {
        System.out.print("Heap: ");
        for (int i = 1; i <= size; i++) {
            System.out.print(heap[i] + " ");
        }
        System.out.println();
    }

    // Method 20: Validate heap property
    public boolean validateHeap() {
        for (int i = 1; i <= size / 2; i++) {
            int left = getLeftChild(i);
            int right = getRightChild(i);

            if (left <= size && heap[i] < heap[left]) {
                return false;
            }
            if (right <= size && heap[i] < heap[right]) {
                return false;
            }
        }
        return true;
    }

    // Method 21: Get k largest elements
    public int[] getKLargest(int k) {
        if (k <= 0 || k > size) {
            return new int[0];
        }

        int[] result = new int[k];
        CustomPriorityQueue12 tempHeap = new CustomPriorityQueue12(size);

        // Copy current heap
        for (int i = 1; i <= size; i++) {
            tempHeap.insert(heap[i]);
        }

        // Extract k largest
        for (int i = 0; i < k; i++) {
            result[i] = tempHeap.extractMax();
        }

        return result;
    }

    // Method 22: Merge with another heap
    public void merge(CustomPriorityQueue12 other) {
        if (other == null || other.isEmpty()) {
            return;
        }

        // Create new heap with combined capacity
        int newCapacity = this.capacity + other.capacity;
        int[] newHeap = new int[newCapacity + 1];

        // Copy current heap
        for (int i = 1; i <= this.size; i++) {
            newHeap[i] = this.heap[i];
        }

        // Copy other heap
        for (int i = 1; i <= other.size; i++) {
            newHeap[this.size + i] = other.heap[i];
        }

        // Rebuild heap
        this.capacity = newCapacity;
        this.heap = newHeap;
        this.size = this.size + other.size;

        // Heapify
        for (int i = this.size / 2; i >= 1; i--) {
            heapifyDown(i);
        }
    }

    // Method 23: Find element at index
    public int getElement(int index) {
        if (index < 1 || index > size) {
            throw new IllegalArgumentException("Invalid index");
        }
        return heap[index];
    }

    // Method 24: Contains element
    public boolean contains(int key) {
        for (int i = 1; i <= size; i++) {
            if (heap[i] == key) {
                return true;
            }
        }
        return false;
    }

    // Method 25: Get heap height
    public int getHeight() {
        if (isEmpty()) {
            return 0;
        }
        return (int) (Math.log(size) / Math.log(2)) + 1;
    }

    // Method 26: Get all elements at level
    public List<Integer> getLevel(int level) {
        List<Integer> result = new ArrayList<>();
        if (level < 1 || level > getHeight()) {
            return result;
        }

        int start = (int) Math.pow(2, level - 1);
        int end = Math.min((int) Math.pow(2, level) - 1, size);

        for (int i = start; i <= end; i++) {
            result.add(heap[i]);
        }

        return result;
    }

    // Method 27: Check if complete binary tree
    public boolean isCompleteBinaryTree() {
        // Check if all levels are full except possibly the last
        int height = getHeight();
        int expectedSize = (int) Math.pow(2, height) - 1;

        if (size == expectedSize) {
            return true; // Perfect binary tree
        }

        // Check last level
        int lastLevelStart = (int) Math.pow(2, height - 1);
        for (int i = lastLevelStart; i <= size; i++) {
            if (heap[i] == 0) { // Assuming 0 is not a valid key
                return false;
            }
        }

        return true;
    }

    // Method 28: Performance analysis
    public static class HeapStats {
        int size;
        int height;
        boolean isValid;
        long buildTimeMs;
        long operationsCount;

        public HeapStats(int size, int height, boolean isValid,
                        long buildTimeMs, long operationsCount) {
            this.size = size;
            this.height = height;
            this.isValid = isValid;
            this.buildTimeMs = buildTimeMs;
            this.operationsCount = operationsCount;
        }

        @Override
        public String toString() {
            return String.format("Size: %d, Height: %d, Valid: %b, Build Time: %d ms, Ops: %d",
                               size, height, isValid, buildTimeMs, operationsCount);
        }
    }

    private long operationsCount = 0;

    public HeapStats getStats() {
        return new HeapStats(size, getHeight(), validateHeap(), 0, operationsCount);
    }

    // Method 29: Reset operations counter
    public void resetCounter() {
        operationsCount = 0;
    }

    // Method 30: Custom iterator
    public Iterator<Integer> iterator() {
        return new HeapIterator();
    }

    private class HeapIterator implements Iterator<Integer> {
        private int current = 1;

        @Override
        public boolean hasNext() {
            return current <= size;
        }

        @Override
        public Integer next() {
            if (!hasNext()) {
                throw new NoSuchElementException();
            }
            return heap[current++];
        }
    }

    // Test cases
    public static void main(String[] args) {
        CustomPriorityQueue12 heap = new CustomPriorityQueue12(20);

        // Test Case 1: Basic operations
        System.out.println("=== Basic Operations ===");
        heap.insert(10);
        heap.insert(20);
        heap.insert(15);
        heap.insert(30);
        heap.insert(5);

        System.out.println("Heap after inserts: " + Arrays.toString(heap.getHeapArray()));
        System.out.println("Max element: " + heap.getMax());
        System.out.println("Extract max: " + heap.extractMax());
        System.out.println("Heap after extract: " + Arrays.toString(heap.getHeapArray()));

        // Test Case 2: Increase/decrease key
        System.out.println("\n=== Key Operations ===");
        heap.insert(25);
        heap.insert(35);
        System.out.println("Before increase: " + Arrays.toString(heap.getHeapArray()));
        heap.increaseKey(2, 40); // Increase element at index 2
        System.out.println("After increase: " + Arrays.toString(heap.getHeapArray()));

        // Test Case 3: Delete operation
        System.out.println("\n=== Delete Operation ===");
        System.out.println("Before delete: " + Arrays.toString(heap.getHeapArray()));
        heap.delete(3); // Delete element at index 3
        System.out.println("After delete: " + Arrays.toString(heap.getHeapArray()));

        // Test Case 4: Build heap from array
        System.out.println("\n=== Build Heap ===");
        int[] array = {3, 9, 2, 1, 4, 5};
        heap.buildHeap(array);
        System.out.println("Built heap: " + Arrays.toString(heap.getHeapArray()));
        System.out.println("Valid heap: " + heap.validateHeap());

        // Test Case 5: Heap sort
        System.out.println("\n=== Heap Sort ===");
        int[] sorted = heap.heapSort();
        System.out.println("Sorted array: " + Arrays.toString(sorted));

        // Test Case 6: Get k largest
        System.out.println("\n=== K Largest ===");
        heap.buildHeap(new int[]{10, 5, 20, 15, 30, 25});
        int[] kLargest = heap.getKLargest(3);
        System.out.println("3 largest: " + Arrays.toString(kLargest));

        // Test Case 7: Heap properties
        System.out.println("\n=== Heap Properties ===");
        System.out.println("Size: " + heap.getSize());
        System.out.println("Height: " + heap.getHeight());
        System.out.println("Is complete: " + heap.isCompleteBinaryTree());
        System.out.println("Level 1: " + heap.getLevel(1));
        System.out.println("Level 2: " + heap.getLevel(2));

        // Test Case 8: Iterator
        System.out.println("\n=== Iterator ===");
        System.out.print("Iterating: ");
        Iterator<Integer> iterator = heap.iterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
        System.out.println();

        // Test Case 9: Merge heaps
        System.out.println("\n=== Merge Heaps ===");
        CustomPriorityQueue12 heap2 = new CustomPriorityQueue12(10);
        heap2.insert(100);
        heap2.insert(50);
        heap.merge(heap2);
        System.out.println("After merge: " + Arrays.toString(heap.getHeapArray()));

        // Test Case 10: Performance stats
        System.out.println("\n=== Performance Stats ===");
        HeapStats stats = heap.getStats();
        System.out.println("Stats: " + stats);

        // Test Case 11: Edge cases
        System.out.println("\n=== Edge Cases ===");
        CustomPriorityQueue12 emptyHeap = new CustomPriorityQueue12(5);
        System.out.println("Empty heap size: " + emptyHeap.getSize());

        CustomPriorityQueue12 singleElement = new CustomPriorityQueue12(5);
        singleElement.insert(42);
        System.out.println("Single element: " + singleElement.getMax());

        // Test Case 12: Large heap
        System.out.println("\n=== Large Heap Test ===");
        CustomPriorityQueue12 largeHeap = new CustomPriorityQueue12(1000);
        for (int i = 1; i <= 100; i++) {
            largeHeap.insert(i);
        }
        System.out.println("Large heap max: " + largeHeap.getMax());
        System.out.println("Large heap valid: " + largeHeap.validateHeap());
    }
}