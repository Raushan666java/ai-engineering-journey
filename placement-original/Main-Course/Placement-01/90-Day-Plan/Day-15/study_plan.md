# Day 15 Study Plan: Sorting Algorithms

## 🎯 Daily Goal
**Master 5 sorting algorithms, understand time/space complexity, solve 10 sorting problems, and build a sorting comparator project**

---

## Morning Session (9:00 AM - 12:00 PM) - Algorithm Implementation

### Hour 1 (9:00-10:00): Bubble, Selection, Insertion Sort
**Topics:**
- Bubble sort with optimization
- Selection sort (minimum finding)
- Insertion sort (adaptive sorting)
- Time complexity: O(n²) vs O(n)

**Activities:**
- [ ] Watch Abdul Bari video on Bubble Sort (10 min)
- [ ] Implement BubbleSort.java with early exit optimization
- [ ] Test with sorted, reverse sorted, random arrays
- [ ] Watch Selection Sort animation (10 min)
- [ ] Implement SelectionSort.java
- [ ] Watch Insertion Sort tutorial (10 min)
- [ ] Implement InsertionSort.java with verbose mode
- [ ] Understand why insertion is best for nearly sorted data

**Time Allocation:** 60 minutes total

### Hour 2 (10:00-11:00): Merge Sort (Divide & Conquer)
**Topics:**
- Divide and conquer pattern
- Recursive tree breakdown
- Merge operation logic
- O(n log n) time, O(n) space

**Activities:**
- [ ] Watch Abdul Bari Merge Sort (15 min)
- [ ] Understand recursion tree (height = log n)
- [ ] Implement MergeSort.java with merge function
- [ ] Trace execution on paper for array [5,2,8,1,9]
- [ ] Implement verbose mode to see divide/conquer
- [ ] Test with large arrays (10k+ elements)
- [ ] Understand why it's O(n log n) guaranteed

**Key Insight:** Always O(n log n), stable, needs extra space

### Hour 3 (11:00-12:00): Quick Sort (Divide & Conquer)
**Topics:**
- Partitioning logic
- Pivot selection strategies
- Best/average/worst case analysis
- In-place sorting

**Activities:**
- [ ] Watch Quick Sort animation (15 min)
- [ ] Understand partition function (two pointers)
- [ ] Implement QuickSort.java
- [ ] Implement randomized pivot selection
- [ ] Test worst case (already sorted array)
- [ ] Compare randomized vs standard quick sort
- [ ] Implement 3-way partition for duplicates

**Key Insight:** Fastest in practice, O(log n) space, unstable

---

## Afternoon Session (1:00 PM - 4:00 PM) - Problem Solving

### Hour 1 (1:00-2:00): Easy Sorting Problems
**Problems to Solve:**

1. [ ] **LC 912: Sort an Array**
   - Implement any sorting algorithm
   - Test with merge sort and quick sort
   - Time: 15 min

2. [ ] **LC 977: Squares of a Sorted Array**
   - Input: Sorted array (may have negatives)
   - Output: Sorted squares
   - Pattern: Two pointers from both ends
   - Time: 15 min

3. [ ] **LC 905: Sort Array By Parity**
   - Even before odd
   - Pattern: Two pointers / partition
   - Time: 10 min

4. [ ] **LC 179: Largest Number**
   - Form largest number from array
   - Pattern: Custom comparator
   - Time: 20 min

**Time Check:** 60 minutes total

### Hour 2 (2:00-3:00): Medium Sorting Problems
**Problems to Solve:**

5. [ ] **LC 75: Sort Colors (Dutch National Flag)**
   - Sort 0s, 1s, 2s in one pass
   - Pattern: 3-way partitioning (like quick sort)
   - Companies: Amazon, Microsoft, Adobe
   - Time: 20 min

6. [ ] **LC 56: Merge Intervals**
   - Sort intervals, then merge overlapping
   - Pattern: Sort + greedy merge
   - Companies: Google, Facebook, Amazon
   - Time: 20 min

7. [ ] **LC 215: Kth Largest Element**
   - Don't fully sort—use QuickSelect
   - Pattern: Partition-based selection
   - Alternative: Min heap
   - Time: 20 min

### Hour 3 (3:00-4:00): Advanced Problems
**Problems to Solve:**

8. [ ] **LC 347: Top K Frequent Elements**
   - Pattern: Bucket sort or heap
   - Companies: Amazon, Google
   - Time: 20 min

9. [ ] **LC 148: Sort List (Linked List)**
   - Sort linked list in O(n log n)
   - Pattern: Merge sort (better than quick for LL)
   - Time: 25 min

10. [ ] **LC 315: Count of Smaller Numbers After Self** (HARD)
    - Modified merge sort with counting
    - Classic divide-and-conquer
    - Time: 15 min (attempt, may not finish)

---

## Evening Session (5:00 PM - 8:00 PM) - Project & Review

### Hour 1 (5:00-6:00): Build Sorting Comparator Project
**Project: SortingComparator.java**

**Features to Implement:**
- [ ] All 5 sorting algorithms in one class
- [ ] Time measurement for each algorithm
- [ ] Test with different array sizes (10, 100, 1000, 10000)
- [ ] Test scenarios:
  - Random data
  - Already sorted (best case)
  - Reverse sorted (worst case)
  - Nearly sorted (90% sorted)
- [ ] Display results in table format
- [ ] Compare with Java's Arrays.sort()

**Expected Output:**
- Performance table showing ms for each algorithm
- Verify O(n²) vs O(n log n) empirically
- See which algorithm wins in each scenario

### Hour 2 (6:00-7:00): Analysis & Testing
**Activities:**
- [ ] Run comparator with size 10, 50, 100, 500, 1000
- [ ] Observe time growth (linear vs quadratic vs log-linear)
- [ ] Document findings in notes.md
- [ ] Verify theoretical complexity matches practical results
- [ ] Test edge cases:
  - Empty array
  - Single element
  - All duplicates
  - Negative numbers
- [ ] Compare stability (bubble, insertion, merge = stable)

**Key Questions to Answer:**
- Why is insertion sort fastest for nearly sorted data?
- Why does quick sort fail on sorted arrays?
- Why is merge sort always O(n log n)?
- When would you use each algorithm in production?

### Hour 3 (7:00-8:00): Review & Documentation
**Activities:**
- [ ] Review all 5 code files
- [ ] Add comments explaining logic
- [ ] Create complexity comparison table in notes.md
- [ ] Write quick reference for each algorithm
- [ ] Update progress.md with:
  - Problems solved (10 total)
  - Code files created (6 files)
  - Time spent per section
  - Self-assessment scores
- [ ] Prepare for Day 16 (Searching Algorithms)

**Reflection:**
- What was hardest to understand? (Recursion? Partition?)
- Which algorithm do you prefer? Why?
- Ready to explain all 5 in an interview?

---

## 📊 Progress Tracking

### Code Files to Create
- [ ] BubbleSort.java (with optimization)
- [ ] SelectionSort.java (with verbose mode)
- [ ] InsertionSort.java (standard + binary insertion)
- [ ] MergeSort.java (with divide/conquer trace)
- [ ] QuickSort.java (standard + randomized + 3-way)
- [ ] SortingComparator.java (performance analyzer)

**Total: 6 Java files**

### Problems Solved
- [ ] 4 Easy problems
- [ ] 5 Medium problems
- [ ] 1 Hard problem
- **Total: 10 LeetCode problems**

### Time Distribution
- Implementation: 3 hours
- Problem solving: 3 hours
- Project + Review: 3 hours
- **Total: 9 hours**

---

## ✅ End-of-Day Checklist

**Implementation:**
- [ ] All 5 sorting algorithms coded and tested
- [ ] Each algorithm has multiple test cases
- [ ] Comparator project working correctly
- [ ] All code compiles without errors

**Understanding:**
- [ ] Can explain how each algorithm works
- [ ] Know time/space complexity by heart
- [ ] Understand when to use which algorithm
- [ ] Can trace merge/quick sort recursion

**Problem Solving:**
- [ ] Solved 10 sorting problems
- [ ] Understood optimal approaches
- [ ] Know common patterns (partition, merge, two pointers)

**Documentation:**
- [ ] notes.md has quick reference
- [ ] progress.md updated with metrics
- [ ] Code has helpful comments

---

## 💡 Study Tips

**For Recursion (Merge/Quick Sort):**
- Draw recursion tree on paper
- Trace small input (4-5 elements)
- Understand base case vs recursive case
- Use verbose mode to see execution

**For Complexity Analysis:**
- Count operations in loops
- Recursion depth × work per level
- Best/average/worst case differences
- Empirically verify with comparator

**For Interviews:**
- Start with brute force (bubble/selection)
- Optimize to O(n log n) (merge/quick)
- Mention trade-offs (space vs time, stable vs unstable)
- Know when to use which algorithm

---

**Master sorting today—it's fundamental to 30%+ of interview problems!** 🚀
