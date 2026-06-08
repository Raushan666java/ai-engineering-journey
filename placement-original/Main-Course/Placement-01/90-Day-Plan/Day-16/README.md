# 🔍 Day 16: Searching Algorithms

## 📋 Overview
**Focus:** Searching Algorithms & Optimization  
**Type:** Algorithms + Implementation  
**Time Required:** 9 hours  
**Topics Covered:** Linear Search, Binary Search, Interpolation Search, Exponential Search  
**Practice:** 8 searching problems  
**Project:** Search Algorithm Library  

---

## 🎯 Learning Objectives

By the end of Day 16, you will:
- ✅ Understand all major searching algorithms
- ✅ Master binary search and its variants
- ✅ Implement interpolation and exponential search
- ✅ Analyze time/space complexity of searches
- ✅ Solve search-based coding problems
- ✅ Build a comprehensive search library
- ✅ Know when to use which search algorithm

---

## 📚 Core Concepts

### 1. Linear Search

**Concept:**
- Simplest search algorithm
- Sequential checking of each element
- Works on unsorted arrays
- No preprocessing required

**Algorithm:**
```
for i from 0 to n-1:
    if arr[i] == target:
        return i
return -1
```

**Characteristics:**
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
- **Best Case:** O(1) - element at first position
- **Worst Case:** O(n) - element at last or not present
- **Use When:** Small dataset or unsorted array

---

### 2. Binary Search ⭐

**Concept:**
- Divide and conquer approach
- **Requires sorted array**
- Eliminates half of search space each iteration
- Most important search algorithm for interviews

**Algorithm:**
```
low = 0, high = n - 1
while low <= high:
    mid = low + (high - low) / 2
    if arr[mid] == target:
        return mid
    else if arr[mid] < target:
        low = mid + 1
    else:
        high = mid - 1
return -1
```

**Characteristics:**
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1) iterative, O(log n) recursive
- **Best Case:** O(1)
- **Worst Case:** O(log n)
- **Use When:** Sorted array, large dataset

**Key Points:**
- Use `mid = low + (high - low) / 2` to avoid integer overflow
- Three cases: found, go left, go right
- Loop condition: `low <= high`

---

### 3. Interpolation Search

**Concept:**
- Improvement over binary search
- Uses value estimation for position
- Works best on uniformly distributed sorted arrays
- Calculates probable position based on value

**Algorithm:**
```
pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
```

**Characteristics:**
- **Time Complexity:** O(log log n) average, O(n) worst
- **Space Complexity:** O(1)
- **Best Case:** O(1)
- **Worst Case:** O(n) - non-uniform distribution
- **Use When:** Uniformly distributed sorted data, large datasets

**When to Use:**
- Sorted array with uniform distribution
- Phone directory (alphabetical)
- Numeric data with even spacing

---

### 4. Exponential Search

**Concept:**
- Find range where element exists, then binary search
- Useful for unbounded/infinite arrays
- Combines linear and binary search

**Algorithm:**
```
1. Find range: Start with bound = 1
   While arr[bound] < target: bound *= 2
2. Binary search in range [bound/2, min(bound, n-1)]
```

**Characteristics:**
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)
- **Use When:** Unbounded arrays, element near beginning

**Advantages:**
- Better than binary search when element is near start
- Works on unbounded arrays
- Useful in distributed systems

---

## 🔧 Binary Search Variants (Interview Important)

### 1. First Occurrence
Find the first index where target appears
```java
while (low <= high) {
    mid = low + (high - low) / 2;
    if (arr[mid] == target) {
        if (mid == 0 || arr[mid-1] != target)
            return mid;
        high = mid - 1; // Look left
    } else if (arr[mid] < target) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}
```

### 2. Last Occurrence
Find the last index where target appears
```java
while (low <= high) {
    mid = low + (high - low) / 2;
    if (arr[mid] == target) {
        if (mid == n-1 || arr[mid+1] != target)
            return mid;
        low = mid + 1; // Look right
    } else if (arr[mid] < target) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}
```

### 3. Count Occurrences
```java
count = lastOccurrence(arr, target) - firstOccurrence(arr, target) + 1;
```

### 4. Search in Rotated Sorted Array
```java
// Find which half is sorted, then decide
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
```

---

## 📊 Algorithm Comparison

| Algorithm | Time (Avg) | Time (Worst) | Space | Sorted? | Use Case |
|-----------|------------|--------------|-------|---------|----------|
| **Linear** | O(n) | O(n) | O(1) | No | Small/unsorted arrays |
| **Binary** | O(log n) | O(log n) | O(1) | Yes | Large sorted arrays |
| **Interpolation** | O(log log n) | O(n) | O(1) | Yes | Uniform distribution |
| **Exponential** | O(log n) | O(log n) | O(1) | Yes | Unbounded/infinite arrays |

---

## 💻 8 Essential Search Problems

### Easy (3 Problems)

1. **Binary Search (LC 704)**
   - Classic binary search implementation
   - Time: O(log n), Space: O(1)
   - Pattern: Standard binary search

2. **First Bad Version (LC 278)**
   - Binary search on range
   - Time: O(log n)
   - Pattern: Find first occurrence

3. **Search Insert Position (LC 35)**
   - Binary search variant
   - Return index where target should be inserted
   - Time: O(log n)

### Medium (4 Problems)

4. **Find First and Last Position (LC 34)** ⭐
   - Binary search for first and last occurrence
   - Time: O(log n)
   - Pattern: Modified binary search

5. **Search in Rotated Sorted Array (LC 33)** ⭐
   - Binary search on rotated array
   - Time: O(log n)
   - Pattern: Modified binary search

6. **Find Peak Element (LC 162)**
   - Binary search for local maximum
   - Time: O(log n)
   - Pattern: Modified binary search

7. **Search a 2D Matrix (LC 74)**
   - Binary search in 2D sorted matrix
   - Time: O(log(m*n))
   - Pattern: Flatten or double binary search

### Hard (1 Problem)

8. **Median of Two Sorted Arrays (LC 4)** ⭐
   - Binary search for median
   - Time: O(log(min(m,n)))
   - Pattern: Advanced binary search

---

## 🏗️ Project: Search Algorithm Library

### Project Structure
```
SearchLibrary/
├── SearchAlgorithms.java      # All search implementations
├── SearchComparator.java       # Performance comparison
├── SearchTester.java          # Test cases
└── README.md                  # Documentation
```

### Features to Implement
1. All 4 search algorithms
2. Binary search variants (first, last, count)
3. Performance benchmarking
4. Visualization of search steps
5. Comparison chart generation

---

## ⏰ 9-Hour Study Plan

### Morning Session (9:00 AM - 12:00 PM)

**Hour 1 (9:00-10:00): Linear & Binary Search**
- Theory and implementation
- Recursive vs iterative binary search
- Practice 2 problems (LC 704, 278)

**Hour 2 (10:00-11:00): Binary Search Variants**
- First/last occurrence
- Count occurrences
- Practice 2 problems (LC 35, 34)

**Hour 3 (11:00-12:00): Rotated Array Search**
- Search in rotated sorted array
- Find minimum in rotated array
- Practice 1 problem (LC 33)

### Afternoon Session (1:00 PM - 4:00 PM)

**Hour 1 (1:00-2:00): Advanced Binary Search**
- Find peak element
- Search in 2D matrix
- Practice 2 problems (LC 162, 74)

**Hour 2 (2:00-3:00): Interpolation & Exponential**
- Interpolation search implementation
- Exponential search implementation
- Compare with binary search

**Hour 3 (3:00-4:00): Hard Problem**
- Median of two sorted arrays
- Detailed solution walkthrough
- Practice (LC 4)

### Evening Session (5:00 PM - 8:00 PM)

**Hour 1 (5:00-6:00): Code All Algorithms**
- Implement all 4 search algorithms
- Add comments and test cases
- Verify correctness

**Hour 2 (6:00-7:00): Build Search Library**
- Create SearchAlgorithms.java
- Implement binary search variants
- Add performance tracking

**Hour 3 (7:00-8:00): Testing & Comparison**
- Create SearchComparator.java
- Run performance benchmarks
- Generate comparison report
- Update progress tracker

---

## 🎓 Quick Start Commands

```powershell
# Navigate to Day 16
cd C:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-16\code

# Compile all files
javac *.java

# Test individual algorithms
java LinearSearch
java BinarySearch
java InterpolationSearch
java ExponentialSearch

# Test binary search variants
java BinarySearchVariants

# Run search library
java SearchAlgorithms

# Run performance comparison
java SearchComparator

# Run all tests
java SearchTester
```

---

## 📝 Binary Search Debugging Tips

### Common Mistakes

1. **Infinite Loop**
   - ❌ `mid = (low + high) / 2` may overflow
   - ✅ `mid = low + (high - low) / 2`

2. **Loop Condition**
   - ❌ `while (low < high)` - misses single element
   - ✅ `while (low <= high)`

3. **Update Logic**
   - ❌ `low = mid` or `high = mid` - infinite loop
   - ✅ `low = mid + 1` or `high = mid - 1`

4. **Array Bounds**
   - Always check `mid == 0` or `mid == n-1` for variants
   - Prevent `arr[mid-1]` or `arr[mid+1]` out of bounds

### Binary Search Template
```java
public int binarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;
    
    while (low <= high) {
        int mid = low + (high - low) / 2;
        
        if (arr[mid] == target) {
            return mid; // Found
        } else if (arr[mid] < target) {
            low = mid + 1; // Search right
        } else {
            high = mid - 1; // Search left
        }
    }
    
    return -1; // Not found
}
```

---

## ✅ Success Checklist

### Knowledge
- [ ] Can explain all 4 search algorithms
- [ ] Know time/space complexity of each
- [ ] Understand when to use which algorithm
- [ ] Can implement binary search without bugs

### Implementation
- [ ] Coded linear search
- [ ] Coded binary search (iterative + recursive)
- [ ] Coded interpolation search
- [ ] Coded exponential search
- [ ] Implemented binary search variants

### Problem Solving
- [ ] Solved 8 search problems
- [ ] Solved rotated array search
- [ ] Solved 2D matrix search
- [ ] Attempted median of two sorted arrays

### Project
- [ ] Built search algorithm library
- [ ] Created performance comparator
- [ ] Tested all implementations
- [ ] Generated comparison report

---

## 💡 Interview Tips

**When Asked About Search:**
1. **Ask if array is sorted** - determines algorithm choice
2. **Clarify duplicates** - affects binary search variant
3. **Discuss trade-offs** - time vs space, preprocessing
4. **Handle edge cases** - empty array, single element, all duplicates

**Binary Search Red Flags:**
- "Sorted array" → Think binary search
- "O(log n)" required → Binary search
- "Find first/last" → Binary search variant
- "Rotated" → Modified binary search

**Practice Strategy:**
- Master standard binary search first
- Then learn variants (first, last, count)
- Practice rotated array problems
- Finally attempt 2D and hard problems

---

## 🚀 Next Steps (Day 17 Preview)

**Tomorrow's Topic:** Recursion & Backtracking
- Recursive thinking
- Base case and recursive case
- Backtracking problems (N-Queens, Sudoku)
- Prepare: Review recursion basics, understand call stack

---

**Master binary search today—it's asked in 50%+ of coding interviews!** 🎯

**Binary search is not just an algorithm, it's a way of thinking. Eliminate half, repeat!** 🔍
