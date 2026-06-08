# ⛰️ Heaps & Priority Queue - Complete Question Set (Love Babbar + Striver)
## Total: 28 Questions with Java Solutions & Theory

---

## 📋 Theory & Patterns

### Heap Fundamentals:
1. **Complete Binary Tree** - All levels filled except possibly last
2. **Heap Property** - Parent ≥ children (max-heap) or Parent ≤ children (min-heap)
3. **Array Representation** - Parent at i, children at 2i+1 and 2i+2
4. **Height** - O(log n) for n elements
5. **Applications** - Priority queues, heap sort, graph algorithms

### Heap Operations:
```java
class MaxHeap {
    private int[] heap;
    private int size;
    private int capacity;
    
    public MaxHeap(int capacity) {
        this.capacity = capacity;
        this.heap = new int[capacity];
        this.size = 0;
    }
    
    // Get parent, left child, right child indices
    private int parent(int i) { return (i - 1) / 2; }
    private int leftChild(int i) { return 2 * i + 1; }
    private int rightChild(int i) { return 2 * i + 2; }
    
    // Insert element
    public void insert(int value) {
        if (size >= capacity) throw new RuntimeException("Heap overflow");
        
        heap[size] = value;
        heapifyUp(size);
        size++;
    }
    
    // Extract maximum
    public int extractMax() {
        if (size <= 0) throw new RuntimeException("Heap underflow");
        
        int max = heap[0];
        heap[0] = heap[size - 1];
        size--;
        heapifyDown(0);
        
        return max;
    }
    
    // Heapify up (used in insertion)
    private void heapifyUp(int index) {
        while (index > 0 && heap[parent(index)] < heap[index]) {
            swap(index, parent(index));
            index = parent(index);
        }
    }
    
    // Heapify down (used in extraction)
    private void heapifyDown(int index) {
        int largest = index;
        int left = leftChild(index);
        int right = rightChild(index);
        
        if (left < size && heap[left] > heap[largest]) {
            largest = left;
        }
        
        if (right < size && heap[right] > heap[largest]) {
            largest = right;
        }
        
        if (largest != index) {
            swap(index, largest);
            heapifyDown(largest);
        }
    }
    
    private void swap(int i, int j) {
        int temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }
}
```

### Priority Queue Patterns:
1. **Top K Elements** - Use min-heap of size k
2. **Merge K Sorted** - Use min-heap with custom comparator
3. **Running Median** - Two heaps (max-heap for smaller, min-heap for larger)
4. **Task Scheduling** - Priority queue with custom priority

---

## 💡 Love Babbar Heap Questions (409-433)

### 409. Kth Largest Element
**Problem**: Find Kth largest element in array  
**Difficulty**: Medium  
**Pattern**: Min-Heap of Size K

```java
import java.util.*;

public int findKthLargest(int[] nums, int k) {
    // Min-heap of size k
    PriorityQueue<Integer> minHeap = new PriorityQueue<>();
    
    for (int num : nums) {
        minHeap.offer(num);
        
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }
    
    return minHeap.peek();
}

// Using max-heap approach
public int findKthLargestMaxHeap(int[] nums, int k) {
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
    
    for (int num : nums) {
        maxHeap.offer(num);
    }
    
    for (int i = 0; i < k - 1; i++) {
        maxHeap.poll();
    }
    
    return maxHeap.poll();
}

// QuickSelect approach (average O(n))
public int findKthLargestQuickSelect(int[] nums, int k) {
    return quickSelect(nums, 0, nums.length - 1, k);
}

private int quickSelect(int[] nums, int left, int right, int k) {
    if (left == right) return nums[left];
    
    int pivotIndex = partition(nums, left, right);
    int rank = nums.length - pivotIndex; // Rank from largest
    
    if (rank == k) {
        return nums[pivotIndex];
    } else if (rank > k) {
        return quickSelect(nums, pivotIndex + 1, right, k);
    } else {
        return quickSelect(nums, left, pivotIndex - 1, k);
    }
}

private int partition(int[] nums, int left, int right) {
    int pivot = nums[right];
    int i = left;
    
    for (int j = left; j < right; j++) {
        if (nums[j] <= pivot) {
            swap(nums, i, j);
            i++;
        }
    }
    
    swap(nums, i, right);
    return i;
}

private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

// Find Kth smallest element
public int findKthSmallest(int[] nums, int k) {
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
    
    for (int num : nums) {
        maxHeap.offer(num);
        
        if (maxHeap.size() > k) {
            maxHeap.poll();
        }
    }
    
    return maxHeap.peek();
}
```
**Time**: O(n log k) heap, O(n) average quickselect, **Space**: O(k) heap, O(1) quickselect

---

### 410. Merge K Sorted Lists
**Problem**: Merge k sorted linked lists  
**Difficulty**: Hard  
**Pattern**: Priority Queue with Custom Comparator

```java
class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public ListNode mergeKLists(ListNode[] lists) {
    if (lists == null || lists.length == 0) return null;
    
    PriorityQueue<ListNode> minHeap = new PriorityQueue<>((a, b) -> a.val - b.val);
    
    // Add first node of each list to heap
    for (ListNode list : lists) {
        if (list != null) {
            minHeap.offer(list);
        }
    }
    
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    
    while (!minHeap.isEmpty()) {
        ListNode smallest = minHeap.poll();
        current.next = smallest;
        current = current.next;
        
        if (smallest.next != null) {
            minHeap.offer(smallest.next);
        }
    }
    
    return dummy.next;
}

// Divide and conquer approach
public ListNode mergeKListsDivideConquer(ListNode[] lists) {
    if (lists == null || lists.length == 0) return null;
    
    return mergeKListsHelper(lists, 0, lists.length - 1);
}

private ListNode mergeKListsHelper(ListNode[] lists, int start, int end) {
    if (start == end) return lists[start];
    
    int mid = start + (end - start) / 2;
    ListNode left = mergeKListsHelper(lists, start, mid);
    ListNode right = mergeKListsHelper(lists, mid + 1, end);
    
    return mergeTwoLists(left, right);
}

private ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = (l1 != null) ? l1 : l2;
    return dummy.next;
}

// Merge k sorted arrays
public int[] mergeKSortedArrays(int[][] arrays) {
    PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
    int totalSize = 0;
    
    // Add first element of each array to heap: [value, arrayIndex, elementIndex]
    for (int i = 0; i < arrays.length; i++) {
        if (arrays[i].length > 0) {
            minHeap.offer(new int[]{arrays[i][0], i, 0});
            totalSize += arrays[i].length;
        }
    }
    
    int[] result = new int[totalSize];
    int index = 0;
    
    while (!minHeap.isEmpty()) {
        int[] current = minHeap.poll();
        int value = current[0];
        int arrayIndex = current[1];
        int elementIndex = current[2];
        
        result[index++] = value;
        
        // Add next element from same array
        if (elementIndex + 1 < arrays[arrayIndex].length) {
            minHeap.offer(new int[]{
                arrays[arrayIndex][elementIndex + 1], 
                arrayIndex, 
                elementIndex + 1
            });
        }
    }
    
    return result;
}
```
**Time**: O(n log k), **Space**: O(k)

---

### 411. Running Median
**Problem**: Find median of running stream of numbers  
**Difficulty**: Hard  
**Pattern**: Two Heaps (Max-Heap + Min-Heap)

```java
class MedianFinder {
    private PriorityQueue<Integer> maxHeap; // For smaller half
    private PriorityQueue<Integer> minHeap; // For larger half
    
    public MedianFinder() {
        maxHeap = new PriorityQueue<>((a, b) -> b - a); // Max-heap
        minHeap = new PriorityQueue<>(); // Min-heap
    }
    
    public void addNum(int num) {
        // Add to appropriate heap
        if (maxHeap.isEmpty() || num <= maxHeap.peek()) {
            maxHeap.offer(num);
        } else {
            minHeap.offer(num);
        }
        
        // Balance heaps
        balanceHeaps();
    }
    
    public double findMedian() {
        if (maxHeap.size() == minHeap.size()) {
            return (maxHeap.peek() + minHeap.peek()) / 2.0;
        } else {
            return maxHeap.peek();
        }
    }
    
    private void balanceHeaps() {
        // Max-heap should have at most 1 more element than min-heap
        if (maxHeap.size() > minHeap.size() + 1) {
            minHeap.offer(maxHeap.poll());
        } else if (minHeap.size() > maxHeap.size()) {
            maxHeap.offer(minHeap.poll());
        }
    }
}

// Median in sliding window
public double[] medianSlidingWindow(int[] nums, int k) {
    double[] result = new double[nums.length - k + 1];
    TreeMap<Integer, Integer> left = new TreeMap<>(Collections.reverseOrder());
    TreeMap<Integer, Integer> right = new TreeMap<>();
    
    for (int i = 0; i < nums.length; i++) {
        // Add current element
        addToWindow(nums[i], left, right);
        
        // Remove element going out of window
        if (i >= k) {
            removeFromWindow(nums[i - k], left, right);
        }
        
        // Calculate median if window is full
        if (i >= k - 1) {
            result[i - k + 1] = getMedian(left, right, k);
        }
    }
    
    return result;
}

private void addToWindow(int num, TreeMap<Integer, Integer> left, TreeMap<Integer, Integer> right) {
    if (left.isEmpty() || num <= left.firstKey()) {
        left.put(num, left.getOrDefault(num, 0) + 1);
    } else {
        right.put(num, right.getOrDefault(num, 0) + 1);
    }
    
    balanceWindows(left, right);
}

private void removeFromWindow(int num, TreeMap<Integer, Integer> left, TreeMap<Integer, Integer> right) {
    if (left.containsKey(num)) {
        if (left.get(num) == 1) {
            left.remove(num);
        } else {
            left.put(num, left.get(num) - 1);
        }
    } else {
        if (right.get(num) == 1) {
            right.remove(num);
        } else {
            right.put(num, right.get(num) - 1);
        }
    }
    
    balanceWindows(left, right);
}

private void balanceWindows(TreeMap<Integer, Integer> left, TreeMap<Integer, Integer> right) {
    int leftSize = left.values().stream().mapToInt(Integer::intValue).sum();
    int rightSize = right.values().stream().mapToInt(Integer::intValue).sum();
    
    if (leftSize > rightSize + 1) {
        int key = left.firstKey();
        right.put(key, right.getOrDefault(key, 0) + 1);
        if (left.get(key) == 1) {
            left.remove(key);
        } else {
            left.put(key, left.get(key) - 1);
        }
    } else if (rightSize > leftSize) {
        int key = right.firstKey();
        left.put(key, left.getOrDefault(key, 0) + 1);
        if (right.get(key) == 1) {
            right.remove(key);
        } else {
            right.put(key, right.get(key) - 1);
        }
    }
}

private double getMedian(TreeMap<Integer, Integer> left, TreeMap<Integer, Integer> right, int k) {
    if (k % 2 == 1) {
        return left.firstKey();
    } else {
        return ((long) left.firstKey() + right.firstKey()) / 2.0;
    }
}
```
**Time**: O(log n) per operation, **Space**: O(n)

---

### 412. Top K Frequent Elements
**Problem**: Find k most frequent elements  
**Difficulty**: Medium  
**Pattern**: Frequency Map + Min-Heap

```java
public int[] topKFrequent(int[] nums, int k) {
    // Count frequencies
    Map<Integer, Integer> frequencyMap = new HashMap<>();
    for (int num : nums) {
        frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
    }
    
    // Use min-heap to keep top k frequent elements
    PriorityQueue<Integer> minHeap = new PriorityQueue<>(
        (a, b) -> frequencyMap.get(a) - frequencyMap.get(b)
    );
    
    for (int num : frequencyMap.keySet()) {
        minHeap.offer(num);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }
    
    int[] result = new int[k];
    for (int i = k - 1; i >= 0; i--) {
        result[i] = minHeap.poll();
    }
    
    return result;
}

// Using bucket sort approach
public int[] topKFrequentBuckets(int[] nums, int k) {
    Map<Integer, Integer> frequencyMap = new HashMap<>();
    for (int num : nums) {
        frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
    }
    
    // Create buckets for each frequency
    List<Integer>[] buckets = new List[nums.length + 1];
    for (int i = 0; i <= nums.length; i++) {
        buckets[i] = new ArrayList<>();
    }
    
    // Put numbers in buckets based on frequency
    for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
        buckets[entry.getValue()].add(entry.getKey());
    }
    
    // Collect top k frequent elements
    List<Integer> result = new ArrayList<>();
    for (int i = buckets.length - 1; i >= 0 && result.size() < k; i--) {
        for (int num : buckets[i]) {
            result.add(num);
            if (result.size() == k) break;
        }
    }
    
    return result.stream().mapToInt(i -> i).toArray();
}

// Top k frequent words (lexicographically sorted)
public List<String> topKFrequentWords(String[] words, int k) {
    Map<String, Integer> frequencyMap = new HashMap<>();
    for (String word : words) {
        frequencyMap.put(word, frequencyMap.getOrDefault(word, 0) + 1);
    }
    
    PriorityQueue<String> minHeap = new PriorityQueue<>((a, b) -> {
        int freqA = frequencyMap.get(a);
        int freqB = frequencyMap.get(b);
        
        if (freqA != freqB) {
            return freqA - freqB; // Less frequent first
        } else {
            return b.compareTo(a); // Lexicographically larger first
        }
    });
    
    for (String word : frequencyMap.keySet()) {
        minHeap.offer(word);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }
    
    List<String> result = new ArrayList<>();
    while (!minHeap.isEmpty()) {
        result.add(0, minHeap.poll()); // Add at beginning for correct order
    }
    
    return result;
}
```
**Time**: O(n log k), **Space**: O(n)

---

### 413. Heap Sort
**Problem**: Sort array using heap  
**Difficulty**: Medium  
**Pattern**: Build Max-Heap + Extract Elements

```java
public void heapSort(int[] arr) {
    int n = arr.length;
    
    // Build max-heap (heapify)
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    // Extract elements from heap one by one
    for (int i = n - 1; i > 0; i--) {
        // Move current root to end
        swap(arr, 0, i);
        
        // Call heapify on reduced heap
        heapify(arr, i, 0);
    }
}

private void heapify(int[] arr, int n, int i) {
    int largest = i; // Initialize largest as root
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    // If largest is not root
    if (largest != i) {
        swap(arr, i, largest);
        
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

private void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Min-heap sort (descending order)
public void minHeapSort(int[] arr) {
    int n = arr.length;
    
    // Build min-heap
    for (int i = n / 2 - 1; i >= 0; i--) {
        minHeapify(arr, n, i);
    }
    
    // Extract elements from heap
    for (int i = n - 1; i > 0; i--) {
        swap(arr, 0, i);
        minHeapify(arr, i, 0);
    }
}

private void minHeapify(int[] arr, int n, int i) {
    int smallest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    
    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }
    
    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    }
    
    if (smallest != i) {
        swap(arr, i, smallest);
        minHeapify(arr, n, smallest);
    }
}

// Check if array represents a valid heap
public boolean isMaxHeap(int[] arr) {
    int n = arr.length;
    
    for (int i = 0; i <= (n - 2) / 2; i++) {
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        
        if (left < n && arr[i] < arr[left]) {
            return false;
        }
        
        if (right < n && arr[i] < arr[right]) {
            return false;
        }
    }
    
    return true;
}
```
**Time**: O(n log n), **Space**: O(1)

---

### 414. Minimum Cost to Connect Ropes
**Problem**: Connect ropes with minimum cost  
**Difficulty**: Medium  
**Pattern**: Greedy + Min-Heap

```java
public int connectRopes(int[] ropes) {
    if (ropes.length <= 1) return 0;
    
    PriorityQueue<Integer> minHeap = new PriorityQueue<>();
    
    // Add all rope lengths to min-heap
    for (int rope : ropes) {
        minHeap.offer(rope);
    }
    
    int totalCost = 0;
    
    // Keep connecting two smallest ropes
    while (minHeap.size() > 1) {
        int first = minHeap.poll();
        int second = minHeap.poll();
        
        int cost = first + second;
        totalCost += cost;
        
        // Add the new combined rope back
        minHeap.offer(cost);
    }
    
    return totalCost;
}

// Return the sequence of connections
public List<int[]> connectRopesWithSequence(int[] ropes) {
    if (ropes.length <= 1) return new ArrayList<>();
    
    PriorityQueue<Integer> minHeap = new PriorityQueue<>();
    List<int[]> sequence = new ArrayList<>();
    
    for (int rope : ropes) {
        minHeap.offer(rope);
    }
    
    while (minHeap.size() > 1) {
        int first = minHeap.poll();
        int second = minHeap.poll();
        int combined = first + second;
        
        sequence.add(new int[]{first, second, combined});
        minHeap.offer(combined);
    }
    
    return sequence;
}

// Minimum cost to make array non-decreasing
public int minCostToMakeNonDecreasing(int[] arr) {
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
    int cost = 0;
    
    for (int i = 0; i < arr.length; i++) {
        if (!maxHeap.isEmpty() && maxHeap.peek() > arr[i]) {
            cost += maxHeap.poll() - arr[i];
            maxHeap.offer(arr[i]);
        }
        maxHeap.offer(arr[i]);
    }
    
    return cost;
}

// Connect sticks with minimum cost (alternative formulation)
public int connectSticks(int[] sticks) {
    PriorityQueue<Long> minHeap = new PriorityQueue<>();
    
    for (int stick : sticks) {
        minHeap.offer((long) stick);
    }
    
    long totalCost = 0;
    
    while (minHeap.size() > 1) {
        long first = minHeap.poll();
        long second = minHeap.poll();
        long cost = first + second;
        
        totalCost += cost;
        minHeap.offer(cost);
    }
    
    return (int) totalCost;
}
```
**Time**: O(n log n), **Space**: O(n)

---

## 🚀 Striver Heap Questions

### S1. Task Scheduler
**Problem**: Schedule tasks with cooling period  
**Difficulty**: Medium  
**Pattern**: Frequency + Priority Queue + Cooling

```java
public int leastInterval(char[] tasks, int n) {
    // Count task frequencies
    int[] frequencies = new int[26];
    for (char task : tasks) {
        frequencies[task - 'A']++;
    }
    
    // Use max-heap to always process most frequent task
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
    for (int freq : frequencies) {
        if (freq > 0) {
            maxHeap.offer(freq);
        }
    }
    
    int time = 0;
    
    while (!maxHeap.isEmpty()) {
        List<Integer> temp = new ArrayList<>();
        
        // Process tasks for one cycle (n + 1 time units)
        for (int i = 0; i <= n; i++) {
            if (!maxHeap.isEmpty()) {
                int freq = maxHeap.poll();
                if (freq > 1) {
                    temp.add(freq - 1);
                }
            }
            
            time++;
            
            // If all tasks are done, break
            if (maxHeap.isEmpty() && temp.isEmpty()) {
                break;
            }
        }
        
        // Add remaining frequencies back to heap
        for (int freq : temp) {
            maxHeap.offer(freq);
        }
    }
    
    return time;
}

// Optimized mathematical approach
public int leastIntervalOptimized(char[] tasks, int n) {
    int[] frequencies = new int[26];
    int maxFreq = 0;
    int maxCount = 0;
    
    for (char task : tasks) {
        frequencies[task - 'A']++;
        if (frequencies[task - 'A'] > maxFreq) {
            maxFreq = frequencies[task - 'A'];
            maxCount = 1;
        } else if (frequencies[task - 'A'] == maxFreq) {
            maxCount++;
        }
    }
    
    // Calculate minimum time needed
    int partCount = maxFreq - 1;
    int partLength = n - (maxCount - 1);
    int emptySlots = partCount * partLength;
    int availableTasks = tasks.length - maxFreq * maxCount;
    int idles = Math.max(0, emptySlots - availableTasks);
    
    return tasks.length + idles;
}

// Task scheduler with weights
public int leastIntervalWithWeights(char[] tasks, int[] weights, int n) {
    Map<Character, Integer> taskWeights = new HashMap<>();
    Map<Character, Integer> frequencies = new HashMap<>();
    
    for (int i = 0; i < tasks.length; i++) {
        char task = tasks[i];
        taskWeights.put(task, weights[i]);
        frequencies.put(task, frequencies.getOrDefault(task, 0) + 1);
    }
    
    // Priority queue with custom comparator (weight * frequency)
    PriorityQueue<Character> maxHeap = new PriorityQueue<>((a, b) -> {
        int weightA = taskWeights.get(a) * frequencies.get(a);
        int weightB = taskWeights.get(b) * frequencies.get(b);
        return weightB - weightA;
    });
    
    maxHeap.addAll(frequencies.keySet());
    
    int time = 0;
    Queue<Character> cooldown = new LinkedList<>();
    
    while (!maxHeap.isEmpty() || !cooldown.isEmpty()) {
        time++;
        
        if (!maxHeap.isEmpty()) {
            char task = maxHeap.poll();
            frequencies.put(task, frequencies.get(task) - 1);
            
            if (frequencies.get(task) > 0) {
                cooldown.offer(task);
            }
        }
        
        if (cooldown.size() > n) {
            char readyTask = cooldown.poll();
            maxHeap.offer(readyTask);
        }
    }
    
    return time;
}
```
**Time**: O(n), **Space**: O(1)

---

### S2. IPO (Maximum Capital)
**Problem**: Maximize capital by selecting projects  
**Difficulty**: Hard  
**Pattern**: Two Heaps for Available Projects

```java
public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
    int n = profits.length;
    
    // Min-heap for projects sorted by capital requirement
    PriorityQueue<int[]> minCapitalHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
    
    for (int i = 0; i < n; i++) {
        minCapitalHeap.offer(new int[]{capital[i], profits[i]});
    }
    
    // Max-heap for available projects sorted by profit
    PriorityQueue<Integer> maxProfitHeap = new PriorityQueue<>((a, b) -> b - a);
    
    for (int i = 0; i < k; i++) {
        // Move all affordable projects to profit heap
        while (!minCapitalHeap.isEmpty() && minCapitalHeap.peek()[0] <= w) {
            maxProfitHeap.offer(minCapitalHeap.poll()[1]);
        }
        
        // If no affordable projects, break
        if (maxProfitHeap.isEmpty()) {
            break;
        }
        
        // Pick the most profitable project
        w += maxProfitHeap.poll();
    }
    
    return w;
}

// IPO with project dependencies
public int findMaximizedCapitalWithDependencies(int k, int w, int[] profits, 
                                               int[] capital, int[][] dependencies) {
    int n = profits.length;
    Set<Integer>[] dependents = new Set[n];
    int[] indegree = new int[n];
    
    // Build dependency graph
    for (int i = 0; i < n; i++) {
        dependents[i] = new HashSet<>();
    }
    
    for (int[] dep : dependencies) {
        dependents[dep[0]].add(dep[1]);
        indegree[dep[1]]++;
    }
    
    // Available projects (no dependencies)
    PriorityQueue<int[]> minCapitalHeap = new PriorityQueue<>((a, b) -> a[1] - b[1]);
    
    for (int i = 0; i < n; i++) {
        if (indegree[i] == 0) {
            minCapitalHeap.offer(new int[]{i, capital[i], profits[i]});
        }
    }
    
    PriorityQueue<int[]> maxProfitHeap = new PriorityQueue<>((a, b) -> b[2] - a[2]);
    boolean[] completed = new boolean[n];
    
    for (int i = 0; i < k; i++) {
        // Move affordable projects to profit heap
        while (!minCapitalHeap.isEmpty() && minCapitalHeap.peek()[1] <= w) {
            maxProfitHeap.offer(minCapitalHeap.poll());
        }
        
        if (maxProfitHeap.isEmpty()) break;
        
        // Complete most profitable project
        int[] project = maxProfitHeap.poll();
        int projectIndex = project[0];
        w += project[2];
        completed[projectIndex] = true;
        
        // Unlock dependent projects
        for (int dependent : dependents[projectIndex]) {
            indegree[dependent]--;
            if (indegree[dependent] == 0) {
                minCapitalHeap.offer(new int[]{dependent, capital[dependent], profits[dependent]});
            }
        }
    }
    
    return w;
}

// Fractional IPO (can invest partially in projects)
public double findMaximizedCapitalFractional(int k, int w, int[] profits, int[] capital) {
    int n = profits.length;
    double[][] projects = new double[n][3]; // [index, capital, profit]
    
    for (int i = 0; i < n; i++) {
        projects[i][0] = i;
        projects[i][1] = capital[i];
        projects[i][2] = profits[i];
    }
    
    // Sort by profit/capital ratio
    Arrays.sort(projects, (a, b) -> Double.compare(b[2] / b[1], a[2] / a[1]));
    
    double currentCapital = w;
    
    for (int i = 0; i < k && i < n; i++) {
        if (projects[i][1] <= currentCapital) {
            // Can fully invest
            currentCapital += projects[i][2];
        } else {
            // Partial investment
            double fraction = currentCapital / projects[i][1];
            currentCapital += fraction * projects[i][2];
            break;
        }
    }
    
    return currentCapital;
}
```
**Time**: O(n log n), **Space**: O(n)

---

### S3. Ugly Numbers II
**Problem**: Find nth ugly number (factors only 2, 3, 5)  
**Difficulty**: Medium  
**Pattern**: Three Pointers + Min-Heap

```java
public int nthUglyNumber(int n) {
    int[] ugly = new int[n];
    ugly[0] = 1;
    
    int i2 = 0, i3 = 0, i5 = 0;
    
    for (int i = 1; i < n; i++) {
        int next2 = ugly[i2] * 2;
        int next3 = ugly[i3] * 3;
        int next5 = ugly[i5] * 5;
        
        int nextUgly = Math.min(next2, Math.min(next3, next5));
        ugly[i] = nextUgly;
        
        if (nextUgly == next2) i2++;
        if (nextUgly == next3) i3++;
        if (nextUgly == next5) i5++;
    }
    
    return ugly[n - 1];
}

// Using min-heap approach
public int nthUglyNumberHeap(int n) {
    PriorityQueue<Long> minHeap = new PriorityQueue<>();
    Set<Long> seen = new HashSet<>();
    
    minHeap.offer(1L);
    seen.add(1L);
    
    int[] factors = {2, 3, 5};
    
    for (int i = 0; i < n; i++) {
        long ugly = minHeap.poll();
        
        if (i == n - 1) {
            return (int) ugly;
        }
        
        for (int factor : factors) {
            long next = ugly * factor;
            if (!seen.contains(next)) {
                seen.add(next);
                minHeap.offer(next);
            }
        }
    }
    
    return -1;
}

// Super ugly numbers (multiple prime factors)
public int nthSuperUglyNumber(int n, int[] primes) {
    int[] ugly = new int[n];
    ugly[0] = 1;
    
    int[] indices = new int[primes.length];
    int[] candidates = new int[primes.length];
    
    for (int i = 0; i < primes.length; i++) {
        candidates[i] = primes[i];
    }
    
    for (int i = 1; i < n; i++) {
        int nextUgly = Arrays.stream(candidates).min().orElse(Integer.MAX_VALUE);
        ugly[i] = nextUgly;
        
        for (int j = 0; j < primes.length; j++) {
            if (candidates[j] == nextUgly) {
                indices[j]++;
                candidates[j] = ugly[indices[j]] * primes[j];
            }
        }
    }
    
    return ugly[n - 1];
}

// Check if number is ugly
public boolean isUgly(int n) {
    if (n <= 0) return false;
    
    int[] factors = {2, 3, 5};
    
    for (int factor : factors) {
        while (n % factor == 0) {
            n /= factor;
        }
    }
    
    return n == 1;
}
```
**Time**: O(n), **Space**: O(n)

---

## 📈 Summary

### Key Heap Patterns Mastered:
1. **Top K Problems** - Use min-heap of size k for space efficiency
2. **Running Median** - Two heaps (max for smaller, min for larger half)
3. **Merge Operations** - Priority queue for k-way merge
4. **Task Scheduling** - Frequency-based priority with cooling periods
5. **Optimization Problems** - Greedy selection with heap-based priorities

### Important Algorithms:
- **Heap Sort** - O(n log n) in-place sorting algorithm
- **K-way Merge** - Efficiently merge multiple sorted sequences
- **Running Median** - Dynamic median maintenance
- **Task Scheduler** - CPU scheduling with constraints
- **IPO Problem** - Capital optimization with project selection

### Heap Implementation Details:
- **Array Representation** - Parent at i, children at 2i+1, 2i+2
- **Heapify Operations** - Up for insertion, down for extraction
- **Build Heap** - Bottom-up heapification in O(n)
- **Priority Queue** - Java's built-in heap implementation

### Common Optimizations:
- **Lazy Propagation** - Delay operations until necessary
- **Custom Comparators** - Complex priority definitions
- **Multi-Heap Techniques** - Using multiple heaps for different purposes
- **Space-Time Tradeoffs** - Min-heap of size k vs full sorting

### Performance Characteristics:
- **Insertion/Deletion** - O(log n) time complexity
- **Peek/Top** - O(1) access to min/max element
- **Build Heap** - O(n) from unsorted array
- **Space Usage** - O(n) for heap storage

### Problem-Solving Strategy:
1. **Identify Pattern** - Top K, merge, or streaming problems
2. **Choose Heap Type** - Min-heap or max-heap based on requirements
3. **Design Comparator** - Custom ordering for complex objects
4. **Consider Alternatives** - QuickSelect for one-time queries
5. **Optimize Space** - Use bounded heaps when possible

### Next Steps:
- Practice more advanced heap applications
- Learn about specialized heaps (Fibonacci, binomial)
- Study heap-based graph algorithms
- Move to final specialized topics (Bit Manipulation, Tries, Searching & Sorting)

---
*This completes the comprehensive heaps and priority queue section with detailed Java solutions and optimization techniques.*
