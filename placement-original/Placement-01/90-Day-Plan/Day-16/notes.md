# Day 16 Quick Reference: Searching Algorithms

## 🔍 Search Algorithms Summary

### 1. Linear Search - O(n)
```java
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
}
return -1;
```
**Use:** Unsorted arrays, small datasets

### 2. Binary Search - O(log n) ⭐
```java
int low = 0, high = arr.length - 1;
while (low <= high) {
    int mid = low + (high - low) / 2; // Avoid overflow!
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
}
return -1;
```
**Use:** Sorted arrays (most common)

### 3. Interpolation Search - O(log log n) avg
```java
int pos = low + ((target - arr[low]) * (high - low)) 
               / (arr[high] - arr[low]);
```
**Use:** Uniformly distributed sorted data

### 4. Exponential Search - O(log n)
```java
int bound = 1;
while (bound < n && arr[bound] <= target) {
    bound *= 2;
}
// Then binary search in [bound/2, min(bound, n-1)]
```
**Use:** Unbounded arrays, element near beginning

---

## 🎯 Binary Search Variants

### Find First Occurrence
```java
int findFirst(int[] arr, int target) {
    int low = 0, high = arr.length - 1, result = -1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            result = mid;
            high = mid - 1; // Continue left
        } else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return result;
}
```

### Find Last Occurrence
```java
int findLast(int[] arr, int target) {
    int low = 0, high = arr.length - 1, result = -1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            result = mid;
            low = mid + 1; // Continue right
        } else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return result;
}
```

### Count Occurrences
```java
count = findLast(arr, target) - findFirst(arr, target) + 1;
```

---

## 🔥 Interview Patterns

### Pattern 1: Rotated Sorted Array
```java
int searchRotated(int[] arr, int target) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        
        // Determine which half is sorted
        if (arr[low] <= arr[mid]) {
            // Left half sorted
            if (target >= arr[low] && target < arr[mid])
                high = mid - 1;
            else
                low = mid + 1;
        } else {
            // Right half sorted
            if (target > arr[mid] && target <= arr[high])
                low = mid + 1;
            else
                high = mid - 1;
        }
    }
    return -1;
}
```

### Pattern 2: 2D Matrix Search
```java
boolean searchMatrix(int[][] matrix, int target) {
    int m = matrix.length, n = matrix[0].length;
    int low = 0, high = m * n - 1;
    
    while (low <= high) {
        int mid = low + (high - low) / 2;
        int midValue = matrix[mid / n][mid % n]; // 1D to 2D
        
        if (midValue == target) return true;
        else if (midValue < target) low = mid + 1;
        else high = mid - 1;
    }
    return false;
}
```

### Pattern 3: Find Peak Element
```java
int findPeakElement(int[] arr) {
    int low = 0, high = arr.length - 1;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] > arr[mid + 1])
            high = mid; // Peak on left (including mid)
        else
            low = mid + 1; // Peak on right
    }
    return low;
}
```

---

## ⚠️ Common Mistakes to AVOID

### Mistake 1: Integer Overflow
❌ `int mid = (low + high) / 2;`  
✅ `int mid = low + (high - low) / 2;`

### Mistake 2: Wrong Loop Condition
❌ `while (low < high)` - misses single element  
✅ `while (low <= high)`

### Mistake 3: Infinite Loop
❌ `low = mid;` or `high = mid;`  
✅ `low = mid + 1;` or `high = mid - 1;`

### Mistake 4: Array Bounds
❌ `arr[mid - 1]` without checking `mid > 0`  
✅ Always check bounds before accessing

---

## 📊 Performance Comparison

| Algorithm | Time (Avg) | Best For |
|-----------|------------|----------|
| Linear | O(n) | Small/unsorted arrays |
| Binary | O(log n) | Sorted arrays |
| Interpolation | O(log log n) | Uniform distribution |
| Exponential | O(log n) | Unbounded/near start |

**Real Performance (from SearchLibrary):**
- Array size: 10,000 elements
- Target: Last element (99,990)
- Linear: 378,400 ns, 10,000 comparisons
- Binary: 2,900 ns, 14 comparisons ⭐
- Interpolation: 2,000 ns, 1 comparison (uniform data) ⭐⭐

**Binary search is 5,882x faster than linear search!**

---

## 🎓 8 Essential Problems Solved

1. ✅ **Binary Search (LC 704)** - Standard template
2. ✅ **First Bad Version (LC 278)** - Find first occurrence
3. ✅ **Search Insert Position (LC 35)** - Return insert index
4. ✅ **Find First and Last Position (LC 34)** - Two binary searches
5. ✅ **Search in Rotated Array (LC 33)** - Modified binary search
6. ✅ **Find Peak Element (LC 162)** - Compare with neighbors
7. ✅ **Search 2D Matrix (LC 74)** - Flatten to 1D
8. ✅ **Median of Two Arrays (LC 4)** - Hard problem

---

## 💡 Key Insights

**When to Use Binary Search:**
- "Sorted array" mentioned → Binary search
- "O(log n)" required → Binary search
- "Find first/last" → Binary search variant
- "Rotated sorted" → Modified binary search

**Binary Search Checklist:**
- [ ] Array is sorted (or has sorted property)
- [ ] Using `low + (high - low) / 2` for mid
- [ ] Loop condition is `low <= high`
- [ ] Updating with `low = mid + 1` or `high = mid - 1`
- [ ] Handling edge cases (empty, single element)

---

## 🏗️ Project: Search Library Features

**SearchLibrary.java includes:**
- All 4 search algorithms with performance tracking
- `compareAllAlgorithms()` - Side-by-side comparison
- `visualizeBinarySearch()` - Step-by-step execution
- `recommendAlgorithm()` - Smart selection based on data
- Binary search variants (first, last, count)

**Performance Output:**
```
Algorithm            Time (ns)    Comparisons    Result
─────────────────────────────────────────────────────
Linear               378,400      10,000         Found
Binary               2,900        14             Found
Interpolation        2,000        1              Found
Exponential          5,000        26             Found
```

---

## 🔄 Day 16 Summary

**Concepts Mastered:**
- Linear search (baseline O(n))
- Binary search (optimal O(log n))
- Interpolation search (O(log log n) for uniform data)
- Exponential search (for unbounded arrays)
- Binary search variants (first, last, rotated, 2D)

**Code Files Created:**
1. LinearSearch.java
2. BinarySearch.java
3. InterpolationSearch.java
4. ExponentialSearch.java
5. BinarySearchVariants.java
6. SearchLibrary.java (comprehensive library)

**Problems Solved:** 8 LeetCode problems (3 Easy, 4 Medium, 1 Hard)

---

**Binary search is the most important algorithm for coding interviews. Practice until you can write it perfectly every time!** 🎯
