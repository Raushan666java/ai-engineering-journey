package heaps.questions;

/*
 * 1. HEAP IMPLEMENTATION
 *
 * Problem Statement:
 * Implement a heap data structure (both min-heap and max-heap) using arrays.
 * The heap should support standard operations: insert, extract min/max, peek, and size.
 *
 * Conceptual Understanding:
 * - Heap is a complete binary tree stored in array
 * - Min-heap: parent <= children, root is smallest
 * - Max-heap: parent >= children, root is largest
 * - Array indexing: root=0, left=2*i+1, right=2*i+2, parent=(i-1)/2
 * - Operations: insert (heapify up), extract (heapify down)
 * - Time: O(log n) for insert/extract, O(1) for peek
 * - Space: O(n) for storage
 *
 * Time Complexity: O(log n) for insert/extract, O(1) for peek
 * Space Complexity: O(n)
 */

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// Generic Heap Implementation
abstract class Heap<T extends Comparable<T>> {
    protected List<T> heap;

    public Heap() {
        heap = new ArrayList<>();
    }

    public Heap(List<T> list) {
        heap = new ArrayList<>(list);
        buildHeap();
    }

    // Abstract method for heap property comparison
    protected abstract boolean compare(T parent, T child);

    // Get parent index
    private int parent(int i) {
        return (i - 1) / 2;
    }

    // Get left child index
    private int leftChild(int i) {
        return 2 * i + 1;
    }

    // Get right child index
    private int rightChild(int i) {
        return 2 * i + 2;
    }

    // Swap elements
    private void swap(int i, int j) {
        T temp = heap.get(i);
        heap.set(i, heap.get(j));
        heap.set(j, temp);
    }

    // Heapify up (for insert)
    private void heapifyUp(int i) {
        while (i > 0) {
            int parent = parent(i);
            if (compare(heap.get(parent), heap.get(i))) {
                break; // Heap property satisfied
            }
            swap(i, parent);
            i = parent;
        }
    }

    // Heapify down (for extract)
    private void heapifyDown(int i) {
        int size = heap.size();
        while (true) {
            int left = leftChild(i);
            int right = rightChild(i);
            int smallest = i;

            // Find the smallest/largest among parent and children
            if (left < size && compare(heap.get(left), heap.get(smallest))) {
                smallest = left;
            }
            if (right < size && compare(heap.get(right), heap.get(smallest))) {
                smallest = right;
            }

            if (smallest == i) {
                break; // Heap property satisfied
            }

            swap(i, smallest);
            i = smallest;
        }
    }

    // Build heap from array (O(n) time)
    private void buildHeap() {
        for (int i = heap.size() / 2 - 1; i >= 0; i--) {
            heapifyDown(i);
        }
    }

    // Insert element
    public void insert(T val) {
        heap.add(val);
        heapifyUp(heap.size() - 1);
    }

    // Extract root element
    public T extract() {
        if (heap.isEmpty()) {
            throw new RuntimeException("Heap is empty");
        }

        T root = heap.get(0);
        T last = heap.remove(heap.size() - 1);

        if (!heap.isEmpty()) {
            heap.set(0, last);
            heapifyDown(0);
        }

        return root;
    }

    // Peek root element
    public T peek() {
        if (heap.isEmpty()) {
            throw new RuntimeException("Heap is empty");
        }
        return heap.get(0);
    }

    // Get size
    public int size() {
        return heap.size();
    }

    // Check if empty
    public boolean isEmpty() {
        return heap.isEmpty();
    }

    // Convert to array
    public Object[] toArray() {
        return heap.toArray();
    }

    @Override
    public String toString() {
        return heap.toString();
    }
}

// Min Heap Implementation
class MinHeap<T extends Comparable<T>> extends Heap<T> {
    public MinHeap() {
        super();
    }

    public MinHeap(List<T> list) {
        super(list);
    }

    @Override
    protected boolean compare(T parent, T child) {
        return parent.compareTo(child) <= 0; // parent <= child for min-heap
    }
}

// Max Heap Implementation
class MaxHeap<T extends Comparable<T>> extends Heap<T> {
    public MaxHeap() {
        super();
    }

    public MaxHeap(List<T> list) {
        super(list);
    }

    @Override
    protected boolean compare(T parent, T child) {
        return parent.compareTo(child) >= 0; // parent >= child for max-heap
    }
}

// Integer-specific implementations for better performance
class MinHeapInt {
    private int[] heap;
    private int size;
    private int capacity;

    public MinHeapInt(int capacity) {
        this.capacity = capacity;
        this.heap = new int[capacity];
        this.size = 0;
    }

    public MinHeapInt() {
        this(10);
    }

    // Get parent index
    private int parent(int i) {
        return (i - 1) / 2;
    }

    // Get left child index
    private int leftChild(int i) {
        return 2 * i + 1;
    }

    // Get right child index
    private int rightChild(int i) {
        return 2 * i + 2;
    }

    // Swap elements
    private void swap(int i, int j) {
        int temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }

    // Resize heap if needed
    private void ensureCapacity() {
        if (size == capacity) {
            capacity *= 2;
            heap = Arrays.copyOf(heap, capacity);
        }
    }

    // Heapify up
    private void heapifyUp(int i) {
        while (i > 0) {
            int parent = parent(i);
            if (heap[parent] <= heap[i]) {
                break;
            }
            swap(i, parent);
            i = parent;
        }
    }

    // Heapify down
    private void heapifyDown(int i) {
        while (true) {
            int left = leftChild(i);
            int right = rightChild(i);
            int smallest = i;

            if (left < size && heap[left] < heap[smallest]) {
                smallest = left;
            }
            if (right < size && heap[right] < heap[smallest]) {
                smallest = right;
            }

            if (smallest == i) {
                break;
            }

            swap(i, smallest);
            i = smallest;
        }
    }

    // Insert element
    public void insert(int val) {
        ensureCapacity();
        heap[size] = val;
        heapifyUp(size);
        size++;
    }

    // Extract minimum
    public int extractMin() {
        if (size == 0) {
            throw new RuntimeException("Heap is empty");
        }

        int min = heap[0];
        heap[0] = heap[size - 1];
        size--;
        heapifyDown(0);

        return min;
    }

    // Peek minimum
    public int peekMin() {
        if (size == 0) {
            throw new RuntimeException("Heap is empty");
        }
        return heap[0];
    }

    // Get size
    public int size() {
        return size;
    }

    // Check if empty
    public boolean isEmpty() {
        return size == 0;
    }

    // Convert to array
    public int[] toArray() {
        return Arrays.copyOf(heap, size);
    }

    @Override
    public String toString() {
        return Arrays.toString(Arrays.copyOf(heap, size));
    }
}

// Max Heap for integers
class MaxHeapInt {
    private int[] heap;
    private int size;
    private int capacity;

    public MaxHeapInt(int capacity) {
        this.capacity = capacity;
        this.heap = new int[capacity];
        this.size = 0;
    }

    public MaxHeapInt() {
        this(10);
    }

    private int parent(int i) {
        return (i - 1) / 2;
    }

    private int leftChild(int i) {
        return 2 * i + 1;
    }

    private int rightChild(int i) {
        return 2 * i + 2;
    }

    private void swap(int i, int j) {
        int temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }

    private void ensureCapacity() {
        if (size == capacity) {
            capacity *= 2;
            heap = Arrays.copyOf(heap, capacity);
        }
    }

    private void heapifyUp(int i) {
        while (i > 0) {
            int parent = parent(i);
            if (heap[parent] >= heap[i]) {
                break;
            }
            swap(i, parent);
            i = parent;
        }
    }

    private void heapifyDown(int i) {
        while (true) {
            int left = leftChild(i);
            int right = rightChild(i);
            int largest = i;

            if (left < size && heap[left] > heap[largest]) {
                largest = left;
            }
            if (right < size && heap[right] > heap[largest]) {
                largest = right;
            }

            if (largest == i) {
                break;
            }

            swap(i, largest);
            i = largest;
        }
    }

    public void insert(int val) {
        ensureCapacity();
        heap[size] = val;
        heapifyUp(size);
        size++;
    }

    public int extractMax() {
        if (size == 0) {
            throw new RuntimeException("Heap is empty");
        }

        int max = heap[0];
        heap[0] = heap[size - 1];
        size--;
        heapifyDown(0);

        return max;
    }

    public int peekMax() {
        if (size == 0) {
            throw new RuntimeException("Heap is empty");
        }
        return heap[0];
    }

    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public int[] toArray() {
        return Arrays.copyOf(heap, size);
    }

    @Override
    public String toString() {
        return Arrays.toString(Arrays.copyOf(heap, size));
    }
}

// Test class
public class HeapImplementation1 {
    public static void main(String[] args) {
        System.out.println("=== Generic Min Heap ===");
        MinHeap<Integer> minHeap = new MinHeap<>();

        minHeap.insert(10);
        minHeap.insert(5);
        minHeap.insert(15);
        minHeap.insert(3);
        minHeap.insert(8);

        System.out.println("Heap: " + minHeap);
        System.out.println("Extract min: " + minHeap.extract());
        System.out.println("Extract min: " + minHeap.extract());
        System.out.println("Peek min: " + minHeap.peek());

        System.out.println("\n=== Generic Max Heap ===");
        MaxHeap<Integer> maxHeap = new MaxHeap<>();

        maxHeap.insert(10);
        maxHeap.insert(5);
        maxHeap.insert(15);
        maxHeap.insert(3);
        maxHeap.insert(8);

        System.out.println("Heap: " + maxHeap);
        System.out.println("Extract max: " + maxHeap.extract());
        System.out.println("Extract max: " + maxHeap.extract());
        System.out.println("Peek max: " + maxHeap.peek());

        System.out.println("\n=== Integer Min Heap ===");
        MinHeapInt minHeapInt = new MinHeapInt();

        int[] values = {20, 15, 8, 10, 5, 7, 6, 2, 9, 1};
        for (int val : values) {
            minHeapInt.insert(val);
        }

        System.out.println("Min heap: " + minHeapInt);
        System.out.println("Extract min operations:");
        while (!minHeapInt.isEmpty()) {
            System.out.print(minHeapInt.extractMin() + " ");
        }

        System.out.println("\n\n=== Integer Max Heap ===");
        MaxHeapInt maxHeapInt = new MaxHeapInt();

        for (int val : values) {
            maxHeapInt.insert(val);
        }

        System.out.println("Max heap: " + maxHeapInt);
        System.out.println("Extract max operations:");
        while (!maxHeapInt.isEmpty()) {
            System.out.print(maxHeapInt.extractMax() + " ");
        }

        System.out.println("\n\n=== Build Heap from Array ===");
        Integer[] arr = {4, 10, 3, 5, 1, 2};
        MinHeap<Integer> heapFromArray = new MinHeap<>(Arrays.asList(arr));
        System.out.println("Heap from array: " + heapFromArray);

        System.out.println("\n=== Edge Cases ===");
        MinHeapInt emptyHeap = new MinHeapInt();
        System.out.println("Empty heap size: " + emptyHeap.size());
        System.out.println("Empty heap isEmpty: " + emptyHeap.isEmpty());

        // Test single element
        MinHeapInt singleElement = new MinHeapInt();
        singleElement.insert(42);
        System.out.println("Single element heap: " + singleElement);
        System.out.println("Extract single: " + singleElement.extractMin());
        System.out.println("Now empty: " + singleElement.isEmpty());
    }
}