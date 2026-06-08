import java.util.*;

public class min_heap {
    private List<Integer> heap;
    
    public min_heap() {
        heap = new ArrayList<>();
    }
    
    private int parent(int i) { return (i - 1) / 2; }
    private int leftChild(int i) { return 2 * i + 1; }
    private int rightChild(int i) { return 2 * i + 2; }
    
    private void swap(int i, int j) {
        int temp = heap.get(i);
        heap.set(i, heap.get(j));
        heap.set(j, temp);
    }
    
    public void insert(int val) {
        heap.add(val);
        int i = heap.size() - 1;
        
        // Heapify up
        while (i > 0 && heap.get(parent(i)) > heap.get(i)) {
            swap(i, parent(i));
            i = parent(i);
        }
    }
    
    public int extractMin() {
        if (heap.isEmpty()) throw new NoSuchElementException("Heap is empty");
        if (heap.size() == 1) return heap.remove(0);
        
        int min = heap.get(0);
        heap.set(0, heap.remove(heap.size() - 1));
        heapifyDown(0);
        return min;
    }
    
    private void heapifyDown(int i) {
        int minIndex = i;
        int left = leftChild(i);
        int right = rightChild(i);
        
        if (left < heap.size() && heap.get(left) < heap.get(minIndex))
            minIndex = left;
        if (right < heap.size() && heap.get(right) < heap.get(minIndex))
            minIndex = right;
        
        if (i != minIndex) {
            swap(i, minIndex);
            heapifyDown(minIndex);
        }
    }
    
    public int peek() {
        if (heap.isEmpty()) throw new NoSuchElementException("Heap is empty");
        return heap.get(0);
    }
    
    public int size() { return heap.size(); }
    public boolean isEmpty() { return heap.isEmpty(); }
    
    public void printHeap() {
        System.out.println(heap);
    }
    
    public static void main(String[] args) {
        min_heap minHeap = new min_heap();
        
        // Insert elements
        int[] vals = {3, 2, 15, 5, 4, 45};
        System.out.println("Inserting: " + Arrays.toString(vals));
        for (int val : vals) {
            minHeap.insert(val);
        }
        
        System.out.print("Heap: ");
        minHeap.printHeap();
        
        System.out.println("Min element (peek): " + minHeap.peek());
        System.out.println("Extract min: " + minHeap.extractMin());
        System.out.print("Heap after extraction: ");
        minHeap.printHeap();
    }
}
