# 🔺 Heaps & Priority Queues - Complete Guide

## 📚 **Heap Fundamentals**

### **What is a Heap?**
A heap is a **complete binary tree** that satisfies the **heap property**:
- **Max Heap**: Parent ≥ Children (root has maximum value)
- **Min Heap**: Parent ≤ Children (root has minimum value)

### **Key Properties**
- **Complete Binary Tree**: All levels filled except possibly the last, filled left to right
- **Array Representation**: Can be stored efficiently in an array
- **Parent-Child Relationships**: For node at index `i`:
  - Parent: `(i-1)//2`
  - Left Child: `2*i + 1`
  - Right Child: `2*i + 2`

### **Visual Example**
```
Max Heap:           Array: [90, 80, 70, 60, 50, 30, 20]
     90                   Index:  0  1  2  3  4  5  6
   /    \
  80     70
 /  \   /  \
60  50 30  20

Min Heap:           Array: [10, 20, 30, 40, 50, 60, 70]
     10                   Index:  0  1  2  3  4  5  6
   /    \
  20     30
 /  \   /  \
40  50 60  70
```

---

## 🏗️ **Heap Implementation**

### **Basic Heap Class**
```python
class MaxHeap:
    def __init__(self):
        self.heap = []
    
    def parent(self, i):
        return (i - 1) // 2
    
    def left_child(self, i):
        return 2 * i + 1
    
    def right_child(self, i):
        return 2 * i + 2
    
    def size(self):
        return len(self.heap)
    
    def is_empty(self):
        return len(self.heap) == 0
    
    def peek(self):
        """Get maximum element without removing"""
        if self.is_empty():
            return None
        return self.heap[0]
```

### **Heapify Operations**

#### **Heapify Up (for insertion)**
```python
def heapify_up(self, i):
    """
    Move element up until heap property is satisfied
    Used after insertion at the end
    """
    while i > 0:
        parent_idx = self.parent(i)
        
        # If heap property satisfied, stop
        if self.heap[i] <= self.heap[parent_idx]:
            break
        
        # Swap with parent and move up
        self.heap[i], self.heap[parent_idx] = self.heap[parent_idx], self.heap[i]
        i = parent_idx

# Pseudocode for Heapify Up:
"""
HEAPIFY_UP(heap, index):
    WHILE index > 0:
        parent = (index - 1) / 2
        IF heap[index] <= heap[parent]:
            BREAK
        SWAP(heap[index], heap[parent])
        index = parent
"""
```

#### **Heapify Down (for deletion)**
```python
def heapify_down(self, i):
    """
    Move element down until heap property is satisfied
    Used after removing root
    """
    while True:
        largest = i
        left = self.left_child(i)
        right = self.right_child(i)
        
        # Find largest among parent and children
        if (left < self.size() and 
            self.heap[left] > self.heap[largest]):
            largest = left
        
        if (right < self.size() and 
            self.heap[right] > self.heap[largest]):
            largest = right
        
        # If largest is not parent, heap property violated
        if largest != i:
            self.heap[i], self.heap[largest] = self.heap[largest], self.heap[i]
            i = largest
        else:
            break

# Pseudocode for Heapify Down:
"""
HEAPIFY_DOWN(heap, index):
    WHILE TRUE:
        largest = index
        left = 2 * index + 1
        right = 2 * index + 2
        
        IF left < heap_size AND heap[left] > heap[largest]:
            largest = left
        IF right < heap_size AND heap[right] > heap[largest]:
            largest = right
        
        IF largest != index:
            SWAP(heap[index], heap[largest])
            index = largest
        ELSE:
            BREAK
"""
```

### **Core Heap Operations**

#### **Insert Operation**
```python
def insert(self, value):
    """
    Insert element into heap
    Time: O(log n), Space: O(1)
    """
    # Add to end of heap
    self.heap.append(value)
    
    # Restore heap property by moving up
    self.heapify_up(self.size() - 1)

# Step-by-step example:
"""
Insert 85 into [90, 80, 70, 60, 50, 30, 20]:

1. Add to end: [90, 80, 70, 60, 50, 30, 20, 85]
2. Heapify up from index 7:
   - Compare 85 with parent 60 (index 3): 85 > 60, swap
   - Array: [90, 80, 70, 85, 50, 30, 20, 60]
   - Compare 85 with parent 80 (index 1): 85 > 80, swap
   - Array: [90, 85, 70, 80, 50, 30, 20, 60]
   - Compare 85 with parent 90 (index 0): 85 < 90, stop
"""
```

#### **Extract Maximum**
```python
def extract_max(self):
    """
    Remove and return maximum element (root)
    Time: O(log n), Space: O(1)
    """
    if self.is_empty():
        return None
    
    if self.size() == 1:
        return self.heap.pop()
    
    # Store max value
    max_val = self.heap[0]
    
    # Move last element to root
    self.heap[0] = self.heap.pop()
    
    # Restore heap property by moving down
    self.heapify_down(0)
    
    return max_val

# Step-by-step example:
"""
Extract max from [90, 85, 70, 80, 50, 30, 20, 60]:

1. Store max: max_val = 90
2. Move last to root: [60, 85, 70, 80, 50, 30, 20]
3. Heapify down from index 0:
   - Compare 60 with children 85, 70: 85 is largest, swap
   - Array: [85, 60, 70, 80, 50, 30, 20]
   - Compare 60 with children 80, 50: 80 is largest, swap
   - Array: [85, 80, 70, 60, 50, 30, 20]
   - 60 has no children, stop
4. Return 90
"""
```

#### **Build Heap from Array**
```python
def build_heap(self, arr):
    """
    Build heap from arbitrary array
    Time: O(n), Space: O(1)
    """
    self.heap = arr[:]
    
    # Start from last non-leaf node and heapify down
    start = (self.size() - 2) // 2
    for i in range(start, -1, -1):
        self.heapify_down(i)

# Why start from last non-leaf?
"""
Last non-leaf node index = (n-2)//2
- All nodes after this are leaves
- Leaves already satisfy heap property
- We only need to heapify internal nodes
"""
```

### **Min Heap Implementation**
```python
class MinHeap:
    def __init__(self):
        self.heap = []
    
    def parent(self, i):
        return (i - 1) // 2
    
    def left_child(self, i):
        return 2 * i + 1
    
    def right_child(self, i):
        return 2 * i + 2
    
    def heapify_up(self, i):
        while i > 0:
            parent_idx = self.parent(i)
            if self.heap[i] >= self.heap[parent_idx]:
                break
            self.heap[i], self.heap[parent_idx] = self.heap[parent_idx], self.heap[i]
            i = parent_idx
    
    def heapify_down(self, i):
        while True:
            smallest = i
            left = self.left_child(i)
            right = self.right_child(i)
            
            if (left < len(self.heap) and 
                self.heap[left] < self.heap[smallest]):
                smallest = left
            
            if (right < len(self.heap) and 
                self.heap[right] < self.heap[smallest]):
                smallest = right
            
            if smallest != i:
                self.heap[i], self.heap[smallest] = self.heap[smallest], self.heap[i]
                i = smallest
            else:
                break
    
    def insert(self, value):
        self.heap.append(value)
        self.heapify_up(len(self.heap) - 1)
    
    def extract_min(self):
        if not self.heap:
            return None
        
        if len(self.heap) == 1:
            return self.heap.pop()
        
        min_val = self.heap[0]
        self.heap[0] = self.heap.pop()
        self.heapify_down(0)
        return min_val
```

---

## 🎯 **Priority Queue with Python heapq**

### **Using Built-in heapq Module**
```python
import heapq

# Create empty heap (min-heap by default)
heap = []

# Insert elements
heapq.heappush(heap, 3)
heapq.heappush(heap, 1)
heapq.heappush(heap, 4)
heapq.heappush(heap, 1)
heapq.heappush(heap, 5)
print(heap)  # [1, 1, 4, 3, 5]

# Extract minimum
min_val = heapq.heappop(heap)
print(min_val)  # 1
print(heap)     # [1, 3, 4, 5]

# Peek at minimum without removing
print(heap[0])  # 1

# Convert list to heap in-place
arr = [3, 1, 4, 1, 5, 9, 2, 6]
heapq.heapify(arr)
print(arr)  # [1, 1, 2, 3, 5, 9, 4, 6]

# Get n largest/smallest elements
numbers = [1, 3, 4, 1, 5, 9, 2, 6]
largest_3 = heapq.nlargest(3, numbers)   # [9, 6, 5]
smallest_3 = heapq.nsmallest(3, numbers) # [1, 1, 2]
```

### **Max Heap using heapq**
```python
# Since heapq is min-heap, negate values for max-heap
class MaxHeapPQ:
    def __init__(self):
        self.heap = []
    
    def push(self, val):
        heapq.heappush(self.heap, -val)
    
    def pop(self):
        if self.heap:
            return -heapq.heappop(self.heap)
        return None
    
    def peek(self):
        if self.heap:
            return -self.heap[0]
        return None
    
    def size(self):
        return len(self.heap)

# Usage
max_pq = MaxHeapPQ()
max_pq.push(3)
max_pq.push(1)
max_pq.push(4)
print(max_pq.pop())  # 4
print(max_pq.pop())  # 3
```

### **Priority Queue with Custom Objects**
```python
class Task:
    def __init__(self, priority, name):
        self.priority = priority
        self.name = name
    
    def __lt__(self, other):
        return self.priority < other.priority
    
    def __repr__(self):
        return f"Task({self.priority}, '{self.name}')"

# Using with heapq
pq = []
heapq.heappush(pq, Task(3, "Low priority"))
heapq.heappush(pq, Task(1, "High priority"))
heapq.heappush(pq, Task(2, "Medium priority"))

while pq:
    task = heapq.heappop(pq)
    print(f"Processing: {task}")

# Output:
# Processing: Task(1, 'High priority')
# Processing: Task(2, 'Medium priority')
# Processing: Task(3, 'Low priority')
```

---

## 🚀 **Heap Algorithms & Applications**

### **1. Heap Sort Algorithm**
```python
def heap_sort(arr):
    """
    Sort array using heap sort
    Time: O(n log n), Space: O(1)
    """
    n = len(arr)
    
    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify_down(arr, n, i)
    
    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        # Move current root to end
        arr[0], arr[i] = arr[i], arr[0]
        
        # Heapify reduced heap
        heapify_down(arr, i, 0)
    
    return arr

def heapify_down(arr, heap_size, i):
    """Heapify down for heap sort"""
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    
    if left < heap_size and arr[left] > arr[largest]:
        largest = left
    
    if right < heap_size and arr[right] > arr[largest]:
        largest = right
    
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify_down(arr, heap_size, largest)

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = heap_sort(arr)
print(sorted_arr)  # [11, 12, 22, 25, 34, 64, 90]
```

### **2. Top K Elements**
```python
def find_k_largest(nums, k):
    """
    Find k largest elements using min-heap
    Time: O(n log k), Space: O(k)
    """
    import heapq
    
    # Use min-heap of size k
    heap = []
    
    for num in nums:
        if len(heap) < k:
            heapq.heappush(heap, num)
        elif num > heap[0]:
            heapq.heapreplace(heap, num)
    
    return sorted(heap, reverse=True)

def find_k_smallest(nums, k):
    """
    Find k smallest elements using max-heap
    Time: O(n log k), Space: O(k)
    """
    import heapq
    
    # Use max-heap (negate values)
    heap = []
    
    for num in nums:
        if len(heap) < k:
            heapq.heappush(heap, -num)
        elif num < -heap[0]:
            heapq.heapreplace(heap, -num)
    
    return sorted([-x for x in heap])

# Example
nums = [3, 2, 1, 5, 6, 4]
print(find_k_largest(nums, 2))   # [6, 5]
print(find_k_smallest(nums, 2))  # [1, 2]
```

### **3. Median Finder**
```python
class MedianFinder:
    """
    Find median from data stream using two heaps
    Max heap for smaller half, min heap for larger half
    """
    def __init__(self):
        self.small = []  # max heap (negate values)
        self.large = []  # min heap
    
    def addNum(self, num):
        """Add number to data structure"""
        # Add to appropriate heap
        if not self.small or num <= -self.small[0]:
            heapq.heappush(self.small, -num)
        else:
            heapq.heappush(self.large, num)
        
        # Rebalance heaps
        if len(self.small) > len(self.large) + 1:
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        elif len(self.large) > len(self.small) + 1:
            val = heapq.heappop(self.large)
            heapq.heappush(self.small, -val)
    
    def findMedian(self):
        """Return median of all numbers"""
        if len(self.small) == len(self.large):
            return (-self.small[0] + self.large[0]) / 2.0
        elif len(self.small) > len(self.large):
            return -self.small[0]
        else:
            return self.large[0]

# Usage
mf = MedianFinder()
mf.addNum(1)
mf.addNum(2)
print(mf.findMedian())  # 1.5
mf.addNum(3)
print(mf.findMedian())  # 2.0
```

### **4. Merge K Sorted Lists**
```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
    
    def __lt__(self, other):
        return self.val < other.val

def merge_k_lists(lists):
    """
    Merge k sorted linked lists using heap
    Time: O(n log k), Space: O(k)
    """
    import heapq
    
    heap = []
    
    # Add first node of each list to heap
    for i, head in enumerate(lists):
        if head:
            heapq.heappush(heap, (head.val, i, head))
    
    dummy = ListNode(0)
    current = dummy
    
    while heap:
        val, list_idx, node = heapq.heappop(heap)
        current.next = node
        current = current.next
        
        # Add next node from same list
        if node.next:
            heapq.heappush(heap, (node.next.val, list_idx, node.next))
    
    return dummy.next
```

### **5. Task Scheduler**
```python
def least_interval(tasks, n):
    """
    Task scheduler with cooling time using heap
    Time: O(n), Space: O(1)
    """
    from collections import Counter
    import heapq
    
    # Count task frequencies
    task_counts = Counter(tasks)
    
    # Max heap of frequencies (negate for max heap)
    max_heap = [-count for count in task_counts.values()]
    heapq.heapify(max_heap)
    
    time = 0
    
    while max_heap:
        temp = []
        
        # Process tasks for one cooling cycle
        for _ in range(n + 1):
            if max_heap:
                temp.append(heapq.heappop(max_heap))
        
        # Put back tasks with remaining count
        for count in temp:
            if count < -1:  # More tasks remaining
                heapq.heappush(max_heap, count + 1)
        
        # Add time for this cycle
        time += (n + 1) if max_heap else len(temp)
    
    return time
```

---

## 🎨 **Advanced Heap Variations**

### **1. Binary Indexed Tree (Fenwick Tree)**
```python
class BIT:
    def __init__(self, n):
        self.size = n
        self.tree = [0] * (n + 1)
    
    def update(self, i, delta):
        """Add delta to element at index i"""
        while i <= self.size:
            self.tree[i] += delta
            i += i & (-i)  # Add last set bit
    
    def query(self, i):
        """Get prefix sum up to index i"""
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & (-i)  # Remove last set bit
        return s
    
    def range_query(self, left, right):
        """Get sum in range [left, right]"""
        return self.query(right) - self.query(left - 1)
```

### **2. Segment Tree**
```python
class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.build(arr, 0, 0, self.n - 1)
    
    def build(self, arr, v, tl, tr):
        if tl == tr:
            self.tree[v] = arr[tl]
        else:
            tm = (tl + tr) // 2
            self.build(arr, 2*v+1, tl, tm)
            self.build(arr, 2*v+2, tm+1, tr)
            self.tree[v] = self.tree[2*v+1] + self.tree[2*v+2]
    
    def query(self, v, tl, tr, l, r):
        if l > r:
            return 0
        if l == tl and r == tr:
            return self.tree[v]
        tm = (tl + tr) // 2
        return (self.query(2*v+1, tl, tm, l, min(r, tm)) +
                self.query(2*v+2, tm+1, tr, max(l, tm+1), r))
    
    def update(self, v, tl, tr, pos, new_val):
        if tl == tr:
            self.tree[v] = new_val
        else:
            tm = (tl + tr) // 2
            if pos <= tm:
                self.update(2*v+1, tl, tm, pos, new_val)
            else:
                self.update(2*v+2, tm+1, tr, pos, new_val)
            self.tree[v] = self.tree[2*v+1] + self.tree[2*v+2]
```

---

## 📈 **Flowchart: Heap Insert Operation**

```
         [START]
            ↓
    [Input: value to insert]
            ↓
    [Add value to end of heap]
            ↓
    [Set index = last position]
            ↓
     <index > 0 AND 
      heap[index] > heap[parent]?>
         ↙        ↘
       YES         NO
        ↓          ↓
   [Swap with    [END]
    parent]       ↓
        ↓      [Insertion
   [index =     Complete]
    parent]
        ↓
        ↑ ← ← (Loop back)
```

## 📈 **Flowchart: Heap Extract Max**

```
         [START]
            ↓
      <Heap empty?>
         ↙      ↘
       YES      NO
        ↓        ↓
    [Return   [Store max = heap[0]]
     NULL]      ↓
        ↓     [Move last element to root]
      [END]     ↓
              [Remove last element]
                ↓
            [index = 0]
                ↓
          <Has children AND
           heap property violated?>
               ↙        ↘
             YES        NO
              ↓          ↓
        [Find largest   [Return
         child]          max]
              ↓          ↓
        [Swap with     [END]
         largest]
              ↓
        [index = largest_index]
              ↓
              ↑ ← ← (Loop back)
```

---

## 🧪 **Practice Problems**

### **Easy Level**
1. **Kth Largest Element in Stream** (LC #703)
2. **Last Stone Weight** (LC #1046)
3. **Minimum Cost to Connect Sticks** (LC #1167)
4. **Relative Ranks** (LC #506)

### **Medium Level**
1. **Top K Frequent Elements** (LC #347)
2. **Find Median from Data Stream** (LC #295)
3. **Task Scheduler** (LC #621)
4. **Kth Largest Element in Array** (LC #215)
5. **Merge k Sorted Lists** (LC #23)

### **Hard Level**
1. **Sliding Window Maximum** (LC #239)
2. **The Skyline Problem** (LC #218)
3. **IPO** (LC #502)
4. **Smallest Range Covering Elements from K Lists** (LC #632)

---

## 📊 **Time & Space Complexity**

| Operation | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| **Heap Operations** |  |  |
| Insert | O(log n) | O(1) |
| Extract Min/Max | O(log n) | O(1) |
| Peek | O(1) | O(1) |
| Build Heap | O(n) | O(1) |
| **Heap Sort** | O(n log n) | O(1) |
| **Priority Queue** |  |  |
| Enqueue | O(log n) | O(1) |
| Dequeue | O(log n) | O(1) |
| Top K Elements | O(n log k) | O(k) |

---

## 🧠 **Heap vs Other Data Structures**

| Feature | Heap | BST | Array | Linked List |
|---------|------|-----|-------|-------------|
| Find Min/Max | O(1) | O(log n) | O(n) | O(n) |
| Insert | O(log n) | O(log n) | O(n) | O(1) |
| Delete Min/Max | O(log n) | O(log n) | O(n) | O(n) |
| Search | O(n) | O(log n) | O(n) | O(n) |
| Space | O(n) | O(n) | O(n) | O(n) |

---

**🎯 Key Takeaways**:
- Heaps provide efficient access to min/max elements
- Perfect for priority queues and scheduling algorithms
- Heap sort is in-place but not stable
- Use min-heap for smallest elements, max-heap for largest
- Two-heap pattern useful for median finding
- Consider heaps for "top K" problems
