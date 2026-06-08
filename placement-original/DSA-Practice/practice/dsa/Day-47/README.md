# Day 47: Binary Search Advanced - Mastering Search Space Optimization

## 📋 Overview
**Focus**: Advanced binary search patterns, binary search on answer, search space optimization, rotated arrays  
**Difficulty**: Medium to Hard  
**Time Required**: 9 hours  
**Problems to Solve**: 12 comprehensive binary search problems  

## 🎯 Learning Objectives
- Master advanced binary search variations (first/last occurrence, peak finding)
- Understand binary search on answer pattern
- Solve problems on rotated sorted arrays
- Apply binary search to 2D matrices
- Implement precision-based binary search
- Optimize search space in complex problems

## 📚 Today's Topics

### 1. Binary Search Variations

#### **Standard Binary Search**
```java
int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

#### **First Occurrence**
```java
int findFirst(int[] arr, int target) {
    int left = 0, right = arr.length - 1, result = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            result = mid;
            right = mid - 1; // Continue searching left
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}
```

#### **Last Occurrence**
```java
int findLast(int[] arr, int target) {
    int left = 0, right = arr.length - 1, result = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            result = mid;
            left = mid + 1; // Continue searching right
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}
```

### 2. Binary Search on Answer

**Key Insight**: When answer is in a monotonic range, binary search on possible answers.

**Pattern Recognition**:
- Problem asks for "minimum/maximum value such that..."
- Can verify if a value is valid in O(n) or better
- Answer space is monotonic (if x works, all values > x or < x also work)

**Template**:
```java
int binarySearchOnAnswer(int[] arr, condition) {
    int left = minPossible, right = maxPossible;
    int result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (isValid(arr, mid, condition)) {
            result = mid;
            // Depending on problem: minimize or maximize
            right = mid - 1; // For minimization
            // left = mid + 1; // For maximization
        } else {
            left = mid + 1;
        }
    }
    
    return result;
}
```

### 3. Rotated Sorted Arrays

**Example**: `[4,5,6,7,0,1,2]` (rotated at index 4)

**Key Properties**:
- One half is always sorted
- Can determine which half target is in
- O(log n) search possible

**Strategy**:
1. Find mid point
2. Determine which half is sorted
3. Check if target is in sorted half
4. Adjust search space accordingly

### 4. 2D Binary Search

**Row-wise and Column-wise Sorted Matrix**:
```
[1,  4,  7,  11]
[2,  5,  8,  12]
[3,  6,  9,  16]
[10, 13, 14, 17]
```

**Strategies**:
1. **Search Space Reduction**: Start from top-right or bottom-left
2. **Binary Search Each Row**: O(m log n)
3. **Treat as 1D Array**: O(log(m*n)) if fully sorted

### 5. Precision-Based Binary Search

For finding roots, square roots, or continuous functions:

```java
double sqrt(double x, double precision) {
    double left = 0, right = x;
    
    while (right - left > precision) {
        double mid = left + (right - left) / 2;
        if (mid * mid <= x) {
            left = mid;
        } else {
            right = mid;
        }
    }
    
    return left;
}
```

## 💻 Problems Breakdown

### Problem Set

| # | Problem | Difficulty | Pattern | Time | Space |
|---|---------|------------|---------|------|-------|
| 1 | Find First and Last Position | Medium | First/Last Occurrence | O(log n) | O(1) |
| 2 | Search in Rotated Sorted Array | Medium | Rotated Array | O(log n) | O(1) |
| 3 | Find Peak Element | Medium | Peak Finding | O(log n) | O(1) |
| 4 | Median of Two Sorted Arrays | Hard | Partition Search | O(log(min(m,n))) | O(1) |
| 5 | Kth Smallest in Sorted Matrix | Medium | Matrix Binary Search | O(n log(max-min)) | O(1) |
| 6 | Split Array Largest Sum | Hard | Binary Search on Answer | O(n log(sum)) | O(1) |
| 7 | Sqrt(x) | Easy | Integer Binary Search | O(log x) | O(1) |
| 8 | Find Minimum in Rotated Array | Medium | Rotated Array | O(log n) | O(1) |
| 9 | Search 2D Matrix II | Medium | 2D Search | O(m+n) | O(1) |
| 10 | Capacity to Ship Packages | Medium | Binary Search on Answer | O(n log(sum)) | O(1) |
| 11 | Koko Eating Bananas | Medium | Binary Search on Answer | O(n log(max)) | O(1) |
| 12 | Minimum Time to Complete Trips | Medium | Binary Search on Answer | O(n log(max*time)) | O(1) |

## 🔍 Problem Analysis

### Problem 1: Find First and Last Position of Element
**LeetCode #34**

Given sorted array, find starting and ending position of target value.

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

**Approach**: Two binary searches - one for first, one for last occurrence.

### Problem 2: Search in Rotated Sorted Array
**LeetCode #33**

Search target in rotated sorted array (no duplicates).

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Key Insight**: One half is always sorted. Check which half target is in.

### Problem 3: Find Peak Element
**LeetCode #162**

Peak element is greater than its neighbors. Array may contain multiple peaks.

```
Input: nums = [1,2,3,1]
Output: 2 (element at index 2 is peak)
```

**Key Insight**: Move toward higher neighbor. O(log n) solution exists.

### Problem 4: Median of Two Sorted Arrays
**LeetCode #4**

Find median of two sorted arrays in O(log(min(m,n))).

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.0
```

**Approach**: Binary search on partition point in smaller array.

### Problem 5: Kth Smallest Element in Sorted Matrix
**LeetCode #378**

n×n matrix where each row and column is sorted.

```
Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
```

**Approach**: Binary search on value range, count elements ≤ mid.

### Problem 6: Split Array Largest Sum
**LeetCode #410**

Split array into k non-empty subarrays. Minimize the largest sum among subarrays.

```
Input: nums = [7,2,5,10,8], k = 2
Output: 18 (split into [7,2,5] and [10,8])
```

**Pattern**: Binary search on answer (sum range).

### Problem 7: Sqrt(x)
**LeetCode #69**

Compute and return floor of square root.

```
Input: x = 8
Output: 2 (sqrt(8) = 2.828...)
```

**Approach**: Binary search on range [0, x].

### Problem 8: Find Minimum in Rotated Sorted Array
**LeetCode #153**

Find minimum element in rotated sorted array.

```
Input: nums = [3,4,5,1,2]
Output: 1
```

**Key Insight**: Compare mid with right to determine which half is rotated.

### Problem 9: Search a 2D Matrix II
**LeetCode #240**

Matrix sorted row-wise and column-wise. Search for target.

```
Input: matrix = [[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], target = 5
Output: true
```

**Approach**: Start from top-right, move left or down based on comparison.

### Problem 10: Capacity to Ship Packages Within D Days
**LeetCode #1011**

Find minimum ship capacity to ship all packages within D days.

```
Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15
```

**Pattern**: Binary search on capacity (answer).

### Problem 11: Koko Eating Bananas
**LeetCode #875**

Find minimum eating speed k such that Koko can finish all bananas within h hours.

```
Input: piles = [3,6,7,11], h = 8
Output: 4
```

**Pattern**: Binary search on eating speed.

### Problem 12: Minimum Time to Complete Trips
**LeetCode #2187**

Find minimum time to complete totalTrips given different bus times.

```
Input: time = [1,2,3], totalTrips = 5
Output: 3
```

**Pattern**: Binary search on time.

## 📊 Time Complexity Summary

| Pattern | Time Complexity | Space | Example Problems |
|---------|----------------|-------|------------------|
| Standard Binary Search | O(log n) | O(1) | Search element |
| First/Last Occurrence | O(log n) | O(1) | Find boundaries |
| Rotated Array Search | O(log n) | O(1) | Rotated sorted array |
| 2D Matrix Search | O(m+n) or O(log mn) | O(1) | Sorted matrix |
| Binary Search on Answer | O(n log k) | O(1) | Optimization problems |
| Median of Two Arrays | O(log(min(m,n))) | O(1) | Median finding |
| Peak Finding | O(log n) | O(1) | Peak element |

## 🎯 Implementation Patterns

### Pattern 1: First/Last Occurrence Template
```java
int findBoundary(int[] arr, int target, boolean findFirst) {
    int left = 0, right = arr.length - 1, result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            result = mid;
            if (findFirst) {
                right = mid - 1; // Search left half
            } else {
                left = mid + 1; // Search right half
            }
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}
```

### Pattern 2: Binary Search on Answer
```java
boolean isValidCapacity(int[] weights, int days, int capacity) {
    int daysNeeded = 1, currentWeight = 0;
    
    for (int weight : weights) {
        if (weight > capacity) return false;
        
        if (currentWeight + weight > capacity) {
            daysNeeded++;
            currentWeight = weight;
        } else {
            currentWeight += weight;
        }
    }
    
    return daysNeeded <= days;
}

int findMinCapacity(int[] weights, int days) {
    int left = Arrays.stream(weights).max().getAsInt();
    int right = Arrays.stream(weights).sum();
    int result = right;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (isValidCapacity(weights, days, mid)) {
            result = mid;
            right = mid - 1; // Try smaller capacity
        } else {
            left = mid + 1;
        }
    }
    
    return result;
}
```

### Pattern 3: Rotated Array Search
```java
int searchRotated(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] == target) return mid;
        
        // Determine which half is sorted
        if (nums[left] <= nums[mid]) {
            // Left half is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
}
```

### Pattern 4: 2D Matrix Search (Staircase)
```java
boolean searchMatrix(int[][] matrix, int target) {
    int m = matrix.length, n = matrix[0].length;
    int row = 0, col = n - 1; // Start from top-right
    
    while (row < m && col >= 0) {
        if (matrix[row][col] == target) {
            return true;
        } else if (matrix[row][col] > target) {
            col--; // Move left
        } else {
            row++; // Move down
        }
    }
    
    return false;
}
```

## 💡 Pro Tips

### Binary Search Tips
1. **Prevent Overflow**: Use `mid = left + (right - left) / 2` instead of `(left + right) / 2`
2. **Loop Condition**: Use `left <= right` for exact match, `left < right` for boundaries
3. **Update Rules**: Be consistent with `left = mid + 1` and `right = mid - 1`
4. **Initialization**: Choose appropriate left/right bounds based on problem
5. **Integer Division**: Be careful with rounding in precision problems

### Common Pitfalls
1. **Infinite Loop**: Incorrect update logic (e.g., `right = mid` when should be `mid - 1`)
2. **Off-by-One**: Missing edge elements due to wrong loop condition
3. **Overflow**: Large numbers in `(left + right) / 2`
4. **Wrong Comparison**: In rotated arrays, comparing with wrong half
5. **Precision Issues**: In floating-point binary search

### Pattern Recognition
**Use Binary Search When**:
- ✅ Array is sorted (or partially sorted)
- ✅ Search space is monotonic
- ✅ Can eliminate half the search space each iteration
- ✅ O(log n) solution is required
- ✅ Answer lies in a continuous range

**Don't Use Binary Search When**:
- ❌ Array is completely unsorted
- ❌ Need to examine all elements
- ❌ Search space is not monotonic
- ❌ Cannot efficiently check if value is valid

## 🎓 Real-World Applications

### 1. Database Indexing
- **B-Tree Indexes**: Binary search on sorted keys
- **Query Optimization**: Range queries using binary search
- **Join Operations**: Merge joins with binary search

### 2. Version Control
- **Git Bisect**: Binary search to find bug introduction
- **Blame Analysis**: Find commit that changed line
- **Regression Testing**: Identify breaking change

### 3. Resource Allocation
- **Load Balancing**: Binary search on capacity
- **Bandwidth Allocation**: Optimize resource distribution
- **Scheduling**: Find optimal time slots

### 4. Scientific Computing
- **Root Finding**: Newton-Raphson with binary search
- **Optimization**: Golden section search
- **Numerical Analysis**: Bisection method

### 5. Machine Learning
- **Hyperparameter Tuning**: Binary search on parameter space
- **Threshold Selection**: ROC curve optimization
- **Feature Selection**: Binary search on feature importance

## 📈 Advanced Techniques

### Ternary Search
For unimodal functions (single peak):
```java
double ternarySearch(Function f, double left, double right) {
    while (right - left > epsilon) {
        double m1 = left + (right - left) / 3;
        double m2 = right - (right - left) / 3;
        
        if (f(m1) < f(m2)) {
            left = m1;
        } else {
            right = m2;
        }
    }
    return (left + right) / 2;
}
```

### Exponential Search
When array is unbounded or very large:
```java
int exponentialSearch(int[] arr, int target) {
    if (arr[0] == target) return 0;
    
    int i = 1;
    while (i < arr.length && arr[i] <= target) {
        i *= 2;
    }
    
    return binarySearch(arr, i/2, Math.min(i, arr.length-1), target);
}
```

### Interpolation Search
For uniformly distributed data:
```java
int interpolationSearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    
    while (left <= right && target >= arr[left] && target <= arr[right]) {
        if (left == right) {
            return arr[left] == target ? left : -1;
        }
        
        // Interpolate position
        int pos = left + ((target - arr[left]) * (right - left)) / 
                         (arr[right] - arr[left]);
        
        if (arr[pos] == target) return pos;
        if (arr[pos] < target) left = pos + 1;
        else right = pos - 1;
    }
    
    return -1;
}
```

## 📚 Resources

### Essential Reading
- [Binary Search Tutorial - TopCoder](https://www.topcoder.com/community/competitive-programming/tutorials/binary-search/)
- [Binary Search - CP-Algorithms](https://cp-algorithms.com/num_methods/binary_search.html)
- [LeetCode Binary Search Study Plan](https://leetcode.com/study-plan/binary-search/)

### Video Tutorials
- [take U forward: Binary Search Playlist](https://www.youtube.com/playlist?list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF)
- [Abdul Bari: Binary Search](https://www.youtube.com/watch?v=j5uXyPJ0Pew)
- [Tushar Roy: Binary Search on Answer](https://www.youtube.com/watch?v=Xq4ylXNf-1Q)

### Practice Platforms
- LeetCode: Binary Search Tag (100+ problems)
- Codeforces: Binary Search Problems
- HackerRank: Binary Search Section
- InterviewBit: Binary Search Practice

## ✅ Day 47 Checklist

### Concepts Mastery
- [ ] Understand standard binary search thoroughly
- [ ] Master first/last occurrence pattern
- [ ] Learn binary search on answer technique
- [ ] Handle rotated sorted arrays
- [ ] Implement 2D matrix search
- [ ] Apply precision-based binary search

### Problems Completion
- [ ] Find First and Last Position
- [ ] Search in Rotated Sorted Array
- [ ] Find Peak Element
- [ ] Median of Two Sorted Arrays
- [ ] Kth Smallest Element in Sorted Matrix
- [ ] Split Array Largest Sum
- [ ] Sqrt(x)
- [ ] Find Minimum in Rotated Sorted Array
- [ ] Search a 2D Matrix II
- [ ] Capacity to Ship Packages
- [ ] Koko Eating Bananas
- [ ] Minimum Time to Complete Trips

### Implementation Skills
- [ ] Code binary search without bugs
- [ ] Handle edge cases correctly
- [ ] Avoid infinite loops
- [ ] Choose appropriate bounds
- [ ] Optimize search space

### Interview Preparation
- [ ] Explain binary search clearly
- [ ] Identify when to use binary search
- [ ] Analyze time/space complexity
- [ ] Practice behavioral questions (STAR method)

## 🎯 Learning Outcomes

By the end of Day 47, you will:
1. ✅ Master all binary search variations
2. ✅ Apply binary search on answer pattern
3. ✅ Solve rotated array problems
4. ✅ Handle 2D search problems
5. ✅ Implement precision-based search
6. ✅ Recognize binary search opportunities
7. ✅ Code bug-free binary search
8. ✅ Be confident in binary search interviews

## 🚀 Next Steps

### Day 48 Preview: Bit Manipulation
- Bitwise operators (AND, OR, XOR, NOT, shifts)
- Common bit manipulation tricks
- XOR properties and applications
- Bit masking and subset generation
- Optimization using bits

### Week 7 Progress
- Day 45: Trie Data Structure ✅
- Day 46: Segment Tree & Fenwick Tree ✅
- Day 47: Binary Search Advanced (Current)
- Day 48: Bit Manipulation
- Day 49: Greedy Algorithms
- Day 50: Advanced Graphs I
- Day 51: Week 7 Review & Assessment

---

**Remember**: Binary search is one of the most important algorithms in computer science. Master it thoroughly - it appears in countless interview problems and real-world applications. The key is recognizing when and how to apply it!

**Good luck with Day 47! Master the search! 🔍**
