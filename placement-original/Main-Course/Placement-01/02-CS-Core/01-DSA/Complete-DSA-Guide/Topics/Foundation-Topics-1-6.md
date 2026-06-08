# 🧩 Complete DSA Topics Structure (Following GeeksforGeeks)

## 📚 **23 Core Topics - Detailed Study Guide**

### **Phase 1: Foundation Building** 🏗️

---

## **1. Logic Building** 🧠

### **Core Concepts**
- Problem-solving methodology
- Breaking down complex problems
- Pattern recognition
- Logical thinking development

### **Practice Areas**
```python
# Basic Logic Problems
def print_pattern(n):
    """Print number pyramid"""
    for i in range(1, n + 1):
        print(' ' * (n - i) + ' '.join(str(j) for j in range(1, i + 1)))

# Star patterns, number patterns, logic puzzles
```

### **Key Skills**
- ✅ Pattern recognition in problem statements
- ✅ Step-by-step problem breakdown
- ✅ Converting real-world problems to code
- ✅ Debugging logical errors

---

## **2. Complexity Analysis** ⏰

### **Big O Notation Mastery**
```python
# O(1) - Constant Time
def get_first_element(arr):
    return arr[0] if arr else None

# O(log n) - Logarithmic Time
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# O(n) - Linear Time
def linear_search(arr, target):
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1

# O(n log n) - Linearithmic Time
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

# O(n²) - Quadratic Time
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
```

### **Space Complexity Analysis**
- **O(1)**: Constant space - few variables
- **O(n)**: Linear space - additional array/recursion
- **O(n²)**: Quadratic space - 2D arrays/matrices

---

## **3. Arrays** 📊

### **Array Fundamentals**
```python
# Static Array Operations
class StaticArray:
    def __init__(self, capacity):
        self.data = [None] * capacity
        self.size = 0
        self.capacity = capacity
    
    def get(self, index):
        if 0 <= index < self.size:
            return self.data[index]
        raise IndexError("Index out of bounds")
    
    def set(self, index, value):
        if 0 <= index < self.size:
            self.data[index] = value
        else:
            raise IndexError("Index out of bounds")
    
    def insert(self, index, value):
        if self.size >= self.capacity:
            raise OverflowError("Array is full")
        
        for i in range(self.size, index, -1):
            self.data[i] = self.data[i - 1]
        
        self.data[index] = value
        self.size += 1

# Dynamic Array (Python List)
dynamic_arr = []
dynamic_arr.append(1)    # O(1) amortized
dynamic_arr.insert(0, 0) # O(n)
dynamic_arr.pop()        # O(1)
dynamic_arr.pop(0)       # O(n)
```

### **Essential Array Patterns**
```python
# 1. Prefix Sum
def build_prefix_sum(arr):
    prefix = [0] * (len(arr) + 1)
    for i in range(len(arr)):
        prefix[i + 1] = prefix[i] + arr[i]
    return prefix

# 2. Two Pointers
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return [-1, -1]

# 3. Sliding Window
def max_sum_subarray_k(arr, k):
    if len(arr) < k:
        return -1
    
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i-k] + arr[i]
        max_sum = max(max_sum, window_sum)
    
    return max_sum
```

### **Practice Problems**
- **Easy**: Two Sum, Best Time to Buy Stock, Contains Duplicate
- **Medium**: 3Sum, Product of Array Except Self, Container With Water
- **Hard**: Median of Two Sorted Arrays, Trapping Rain Water

---

## **4. Searching Algorithms** 🔍

### **Linear Search Variants**
```python
def linear_search_all_occurrences(arr, target):
    """Find all indices where target occurs"""
    indices = []
    for i, val in enumerate(arr):
        if val == target:
            indices.append(i)
    return indices

def linear_search_with_condition(arr, condition):
    """Find first element satisfying condition"""
    for i, val in enumerate(arr):
        if condition(val):
            return i
    return -1
```

### **Binary Search Mastery**
```python
def binary_search_leftmost(arr, target):
    """Find leftmost occurrence of target"""
    left, right = 0, len(arr) - 1
    result = -1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            result = mid
            right = mid - 1  # Look for earlier occurrence
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return result

def binary_search_rightmost(arr, target):
    """Find rightmost occurrence of target"""
    left, right = 0, len(arr) - 1
    result = -1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            result = mid
            left = mid + 1  # Look for later occurrence
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return result

def binary_search_insert_position(arr, target):
    """Find position where target should be inserted"""
    left, right = 0, len(arr)
    
    while left < right:
        mid = (left + right) // 2
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid
    
    return left

# Search in Rotated Array
def search_rotated_array(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        
        # Check which half is sorted
        if arr[left] <= arr[mid]:  # Left half is sorted
            if arr[left] <= target < arr[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:  # Right half is sorted
            if arr[mid] < target <= arr[right]:
                left = mid + 1
            else:
                right = mid - 1
    
    return -1
```

### **Advanced Search Techniques**
```python
# Ternary Search (for unimodal functions)
def ternary_search_max(arr):
    """Find maximum in unimodal array"""
    left, right = 0, len(arr) - 1
    
    while right - left > 2:
        mid1 = left + (right - left) // 3
        mid2 = right - (right - left) // 3
        
        if arr[mid1] < arr[mid2]:
            left = mid1
        else:
            right = mid2
    
    # Find max among remaining elements
    max_idx = left
    for i in range(left + 1, right + 1):
        if arr[i] > arr[max_idx]:
            max_idx = i
    
    return max_idx

# Exponential Search
def exponential_search(arr, target):
    """Useful for unbounded/infinite arrays"""
    if arr[0] == target:
        return 0
    
    # Find range for binary search
    i = 1
    while i < len(arr) and arr[i] <= target:
        i *= 2
    
    # Binary search in found range
    return binary_search_range(arr, target, i // 2, min(i, len(arr) - 1))
```

---

## **5. Sorting Algorithms** 📈

### **Comparison-Based Sorts**
```python
# Bubble Sort - O(n²)
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:  # Optimization: early termination
            break

# Selection Sort - O(n²)
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

# Insertion Sort - O(n²), good for small arrays
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

# Merge Sort - O(n log n)
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Quick Sort - O(n log n) average, O(n²) worst
def quick_sort(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

# Heap Sort - O(n log n)
def heap_sort(arr):
    def heapify(arr, n, i):
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2
        
        if left < n and arr[left] > arr[largest]:
            largest = left
        
        if right < n and arr[right] > arr[largest]:
            largest = right
        
        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]
            heapify(arr, n, largest)
    
    n = len(arr)
    
    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    
    # Extract elements from heap
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
```

### **Non-Comparison Sorts**
```python
# Counting Sort - O(n + k)
def counting_sort(arr, max_val):
    count = [0] * (max_val + 1)
    
    # Count occurrences
    for num in arr:
        count[num] += 1
    
    # Reconstruct array
    index = 0
    for i in range(len(count)):
        while count[i] > 0:
            arr[index] = i
            index += 1
            count[i] -= 1

# Radix Sort - O(d * (n + k))
def radix_sort(arr):
    def counting_sort_for_radix(arr, exp):
        n = len(arr)
        output = [0] * n
        count = [0] * 10
        
        for i in range(n):
            index = arr[i] // exp
            count[index % 10] += 1
        
        for i in range(1, 10):
            count[i] += count[i - 1]
        
        i = n - 1
        while i >= 0:
            index = arr[i] // exp
            output[count[index % 10] - 1] = arr[i]
            count[index % 10] -= 1
            i -= 1
        
        for i in range(n):
            arr[i] = output[i]
    
    max_num = max(arr)
    exp = 1
    while max_num // exp > 0:
        counting_sort_for_radix(arr, exp)
        exp *= 10

# Bucket Sort - O(n + k)
def bucket_sort(arr, num_buckets=10):
    if len(arr) == 0:
        return arr
    
    min_val, max_val = min(arr), max(arr)
    bucket_range = (max_val - min_val) / num_buckets
    
    buckets = [[] for _ in range(num_buckets)]
    
    # Distribute elements into buckets
    for num in arr:
        bucket_index = int((num - min_val) / bucket_range)
        if bucket_index == num_buckets:
            bucket_index -= 1
        buckets[bucket_index].append(num)
    
    # Sort individual buckets and concatenate
    arr.clear()
    for bucket in buckets:
        bucket.sort()  # Can use any sorting algorithm
        arr.extend(bucket)
```

---

## **6. Hashing** #️⃣

### **Hash Table Implementation**
```python
class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]  # Chaining for collision resolution
    
    def _hash(self, key):
        if isinstance(key, str):
            return sum(ord(char) for char in key) % self.size
        return hash(key) % self.size
    
    def insert(self, key, value):
        index = self._hash(key)
        bucket = self.table[index]
        
        # Update if key exists
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)
                return
        
        bucket.append((key, value))
    
    def get(self, key):
        index = self._hash(key)
        bucket = self.table[index]
        
        for k, v in bucket:
            if k == key:
                return v
        
        raise KeyError(key)
    
    def delete(self, key):
        index = self._hash(key)
        bucket = self.table[index]
        
        for i, (k, v) in enumerate(bucket):
            if k == key:
                del bucket[i]
                return
        
        raise KeyError(key)

# Open Addressing (Linear Probing)
class HashTableOpenAddressing:
    def __init__(self, size=10):
        self.size = size
        self.keys = [None] * size
        self.values = [None] * size
    
    def _hash(self, key):
        return hash(key) % self.size
    
    def insert(self, key, value):
        index = self._hash(key)
        
        while self.keys[index] is not None:
            if self.keys[index] == key:
                self.values[index] = value
                return
            index = (index + 1) % self.size
        
        self.keys[index] = key
        self.values[index] = value
    
    def get(self, key):
        index = self._hash(key)
        
        while self.keys[index] is not None:
            if self.keys[index] == key:
                return self.values[index]
            index = (index + 1) % self.size
        
        raise KeyError(key)
```

### **Hashing Applications**
```python
# 1. Two Sum using HashMap
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# 2. Group Anagrams
from collections import defaultdict

def group_anagrams(strs):
    anagram_groups = defaultdict(list)
    
    for s in strs:
        # Create key from sorted characters
        key = ''.join(sorted(s))
        anagram_groups[key].append(s)
    
    return list(anagram_groups.values())

# 3. First Non-Repeating Character
def first_non_repeating_char(s):
    char_count = {}
    
    # Count frequencies
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    
    # Find first non-repeating
    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i
    
    return -1

# 4. Longest Substring Without Repeating Characters
def longest_substring_without_repeating(s):
    char_set = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length

# 5. Design LRU Cache
class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.order = []
    
    def get(self, key):
        if key in self.cache:
            self.order.remove(key)
            self.order.append(key)
            return self.cache[key]
        return -1
    
    def put(self, key, value):
        if key in self.cache:
            self.order.remove(key)
        elif len(self.cache) >= self.capacity:
            oldest = self.order.pop(0)
            del self.cache[oldest]
        
        self.cache[key] = value
        self.order.append(key)
```

---

## 🎯 **Study Schedule & Practice Plan**

### **Week-wise Breakdown**

#### **Week 1: Logic Building & Complexity Analysis**
- **Days 1-3**: Logic building problems, pattern recognition
- **Days 4-5**: Big O notation, complexity analysis
- **Days 6-7**: Practice time/space complexity calculations

#### **Week 2: Arrays Fundamentals**
- **Days 1-2**: Array operations, basic problems
- **Days 3-4**: Two pointers technique
- **Days 5-6**: Sliding window problems
- **Day 7**: Mixed array problems, assessment

#### **Week 3: Searching Algorithms**
- **Days 1-2**: Linear search variants
- **Days 3-5**: Binary search and variants
- **Days 6-7**: Advanced search techniques

#### **Week 4: Sorting Algorithms**
- **Days 1-2**: Basic sorts (bubble, selection, insertion)
- **Days 3-4**: Advanced sorts (merge, quick, heap)
- **Days 5-6**: Non-comparison sorts
- **Day 7**: Sorting applications and problems

#### **Week 5: Hashing**
- **Days 1-2**: Hash table implementation
- **Days 3-4**: Collision resolution techniques
- **Days 5-6**: Hashing applications
- **Day 7**: Complex hashing problems

### **Daily Practice Structure**
```
Morning (1 hour):
- Theory study and concept review
- Implementation of core algorithms

Afternoon (1.5 hours):
- Problem solving (2-3 problems)
- Pattern recognition practice

Evening (30 minutes):
- Review mistakes and optimizations
- Plan next day's topics
```

### **Assessment Checkpoints**
- **End of Week 2**: Array mastery test (10 problems)
- **End of Week 4**: Sorting algorithm implementation
- **End of Week 5**: Complete foundation assessment

---

**🎯 Success Metrics**: 
- Solve 80%+ problems independently
- Implement algorithms from memory
- Explain time/space complexity clearly
- Code clean, bug-free solutions

**📚 Resources**: 
- GeeksforGeeks tutorials
- LeetCode practice problems
- Algorithm visualization tools
- Peer coding sessions
