# Day 16 Study Plan: Searching Algorithms

## 🎯 Daily Goal
**Master all major searching algorithms, solve 8 search problems, and build a comprehensive search library**

---

## Morning Session (9:00 AM - 12:00 PM) - Foundation

### Hour 1 (9:00-10:00): Linear & Binary Search
**Topics:**
- Linear search (O(n))
- Binary search iterative (O(log n))
- Binary search recursive
- When to use which

**Activities:**
- [ ] Watch Abdul Bari binary search video (20 min)
- [ ] Implement linear search (10 min)
- [ ] Implement binary search (20 min)
- [ ] Solve LC 704 - Binary Search (10 min)

**Practice:**
1. [ ] Binary Search (LC 704) - 10 min
2. [ ] First Bad Version (LC 278) - 10 min

### Hour 2 (10:00-11:00): Binary Search Variants
**Topics:**
- Find first occurrence
- Find last occurrence
- Count occurrences
- Search insert position

**Activities:**
- [ ] Code first/last occurrence (20 min)
- [ ] Understand LC 34 pattern (10 min)
- [ ] Solve search insert position (10 min)
- [ ] Practice on sorted arrays with duplicates (20 min)

**Practice:**
3. [ ] Search Insert Position (LC 35) - 15 min
4. [ ] Find First and Last Position (LC 34) ⭐ - 20 min

### Hour 3 (11:00-12:00): Rotated Array Search
**Topics:**
- Search in rotated sorted array
- Find minimum in rotated array
- Modified binary search

**Activities:**
- [ ] Understand rotation concept (10 min)
- [ ] Watch NeetCode LC 33 solution (15 min)
- [ ] Code rotated array search (20 min)
- [ ] Test with multiple rotations (15 min)

**Practice:**
5. [ ] Search in Rotated Sorted Array (LC 33) ⭐ - 25 min

---

## Afternoon Session (1:00 PM - 4:00 PM) - Advanced Techniques

### Hour 1 (1:00-2:00): Advanced Binary Search
**Topics:**
- Find peak element
- Search in 2D matrix
- Sqrt using binary search

**Activities:**
- [ ] Understand peak element logic (10 min)
- [ ] Code peak element finder (15 min)
- [ ] Learn 2D matrix search (15 min)
- [ ] Implement sqrt with binary search (20 min)

**Practice:**
6. [ ] Find Peak Element (LC 162) - 20 min
7. [ ] Search a 2D Matrix (LC 74) - 20 min

### Hour 2 (2:00-3:00): Interpolation & Exponential Search
**Topics:**
- Interpolation search (O(log log n))
- Exponential search
- Use cases for each

**Activities:**
- [ ] Study interpolation formula (15 min)
- [ ] Implement interpolation search (20 min)
- [ ] Implement exponential search (15 min)
- [ ] Compare performance (10 min)

**Key Formula:**
```
pos = low + [(target - arr[low]) * (high - low)] / (arr[high] - arr[low])
```

### Hour 3 (3:00-4:00): Hard Problem
**Topics:**
- Median of two sorted arrays
- Advanced binary search

**Activities:**
- [ ] Understand median problem (15 min)
- [ ] Watch detailed explanation (20 min)
- [ ] Attempt implementation (20 min)
- [ ] Review optimal solution (5 min)

**Practice:**
8. [ ] Median of Two Sorted Arrays (LC 4) ⭐ - 40 min (Hard)

---

## Evening Session (5:00 PM - 8:00 PM) - Build & Practice

### Hour 1 (5:00-6:00): Code All Algorithms
**Implementation Tasks:**
- [ ] Create LinearSearch.java with test cases
- [ ] Create BinarySearch.java (iterative + recursive)
- [ ] Create InterpolationSearch.java
- [ ] Create ExponentialSearch.java
- [ ] Create BinarySearchVariants.java
- [ ] Compile and test all (javac *.java)

### Hour 2 (6:00-7:00): Build Search Library
**Project: SearchLibrary.java**
- [ ] Create SearchLibrary class structure
- [ ] Implement all 4 search algorithms
- [ ] Add performance tracking (comparisons, time)
- [ ] Create comparison method
- [ ] Add visualization (step-by-step binary search)
- [ ] Implement recommendation engine
- [ ] Test with different array sizes

**Features to Include:**
```java
- compareAllAlgorithms(arr, target)
- visualizeBinarySearch(arr, target)
- recommendAlgorithm(size, sorted, uniform)
- BinarySearch.findFirst(arr, target)
- BinarySearch.findLast(arr, target)
```

### Hour 3 (7:00-8:00): Testing & Documentation
**Final Tasks:**
- [ ] Run SearchLibrary demo
- [ ] Test edge cases (empty, single element, duplicates)
- [ ] Performance test (10K, 100K elements)
- [ ] Document results in notes.md
- [ ] Update progress.md with all 8 problems
- [ ] Review common binary search mistakes
- [ ] Prepare for Day 17 (Recursion)

---

## 📊 Progress Tracking

### Problems Solved
- Easy: _____ / 3
- Medium: _____ / 4
- Hard: _____ / 1
- **Total: _____ / 8**

### Code Files Created
- [ ] LinearSearch.java
- [ ] BinarySearch.java
- [ ] InterpolationSearch.java
- [ ] ExponentialSearch.java
- [ ] BinarySearchVariants.java
- [ ] SearchLibrary.java (Project)

### Time Spent
- Morning: _____ hrs
- Afternoon: _____ hrs
- Evening: _____ hrs
- **Total: _____ / 9 hrs**

---

## ✅ End-of-Day Checklist

**Knowledge:**
- [ ] Can implement binary search without bugs
- [ ] Know when to use each search algorithm
- [ ] Understand rotated array search
- [ ] Can find first/last occurrence

**Implementation:**
- [ ] All 4 search algorithms coded
- [ ] Binary search variants working
- [ ] Search library complete
- [ ] All code tested and compiled

**Problem Solving:**
- [ ] Solved 8 LeetCode problems
- [ ] Solved rotated array problem
- [ ] Attempted median problem
- [ ] Understood 2D matrix search

**Project:**
- [ ] Search library functional
- [ ] Performance comparison working
- [ ] Visualization implemented
- [ ] Edge cases handled

---

## 💡 Key Takeaways

**Binary Search Template:**
```java
int low = 0, high = arr.length - 1;
while (low <= high) {
    int mid = low + (high - low) / 2; // Avoid overflow
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
}
return -1;
```

**Common Mistakes:**
- Using `(low + high) / 2` instead of `low + (high - low) / 2`
- Loop condition `low < high` instead of `low <= high`
- Update: `low = mid` or `high = mid` (causes infinite loop)

**When to Use:**
- **Linear:** Unsorted or small arrays
- **Binary:** Sorted arrays (general case)
- **Interpolation:** Uniformly distributed sorted data
- **Exponential:** Unbounded arrays or element near start

---

**Binary search is asked in 50%+ of coding interviews. Master it today!** 🎯
