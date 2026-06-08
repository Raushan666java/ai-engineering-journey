# 🎯 Day 15: Sorting Algorithms (Week 3 - Algorithms Begin!)

## 📋 Overview
**Focus:** Sorting Algorithms - Bubble, Selection, Insertion, Merge, Quick Sort  
**Type:** Algorithm Implementation + Analysis  
**Time Required:** 9 hours  
**Topics Covered:** Basic & Advanced Sorting Techniques  
**Practice:** 10 sorting problems + comparator project  

---

## 🎓 Learning Objectives

By the end of Day 15, you will:
- ✅ Understand how 5 core sorting algorithms work
- ✅ Implement each algorithm from scratch in Java
- ✅ Analyze time & space complexity for each
- ✅ Know when to use which sorting algorithm
- ✅ Master the divide-and-conquer pattern (Merge, Quick sort)
- ✅ Build a sorting algorithm comparator project
- ✅ Solve 10 LeetCode sorting problems

---

## 📚 Topics Breakdown

### 1️⃣ Bubble Sort
**Concept:** Repeatedly swap adjacent elements if they're in wrong order

**How It Works:**
- Compare adjacent pairs
- Swap if left > right
- After each pass, largest element "bubbles" to end
- Repeat until no swaps needed

**Time Complexity:**
- Best: O(n) - already sorted (with optimization)
- Average: O(n²)
- Worst: O(n²)

**Space Complexity:** O(1)

**When to Use:**
- Small datasets (n < 10)
- Nearly sorted data
- Teaching/learning purpose
- **Not recommended for production**

**Java Implementation:**
```java
void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        boolean swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break; // Optimization: early exit
    }
}
```

---

### 2️⃣ Selection Sort
**Concept:** Find minimum element and place it at beginning

**How It Works:**
- Find minimum in unsorted portion
- Swap with first unsorted element
- Move boundary between sorted/unsorted
- Repeat for entire array

**Time Complexity:**
- Best: O(n²)
- Average: O(n²)
- Worst: O(n²)

**Space Complexity:** O(1)

**When to Use:**
- Memory is limited (fewer swaps than bubble sort)
- Small datasets
- When write operations are expensive

**Java Implementation:**
```java
void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        // Find minimum in remaining array
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Swap minimum with first unsorted element
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}
```

---

### 3️⃣ Insertion Sort
**Concept:** Build sorted array one element at a time

**How It Works:**
- Start with first element (considered sorted)
- Take next element and insert it in correct position
- Shift larger elements to make space
- Repeat for all elements

**Time Complexity:**
- Best: O(n) - already sorted
- Average: O(n²)
- Worst: O(n²) - reverse sorted

**Space Complexity:** O(1)

**When to Use:**
- Small datasets
- Nearly sorted data (excellent performance)
- Online sorting (data arrives one at a time)
- **Used in hybrid algorithms (TimSort, IntroSort)**

**Java Implementation:**
```java
void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        
        // Shift elements greater than key to right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
```

---

### 4️⃣ Merge Sort (Divide & Conquer) ⭐
**Concept:** Divide array into halves, sort recursively, merge sorted halves

**How It Works:**
1. **Divide:** Split array into two halves
2. **Conquer:** Recursively sort each half
3. **Combine:** Merge two sorted halves

**Time Complexity:**
- Best: O(n log n)
- Average: O(n log n)
- Worst: O(n log n)

**Space Complexity:** O(n) - needs auxiliary array

**When to Use:**
- Large datasets
- Guaranteed O(n log n) performance
- Stable sort needed (maintains relative order)
- Linked lists (better than quick sort)
- External sorting (sorting large files)

**Java Implementation:**
```java
void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        // Sort first and second halves
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        
        // Merge sorted halves
        merge(arr, left, mid, right);
    }
}

void merge(int[] arr, int left, int mid, int right) {
    // Sizes of subarrays
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Temp arrays
    int[] L = new int[n1];
    int[] R = new int[n2];
    
    // Copy data
    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];
    
    // Merge temp arrays back
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    // Copy remaining
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}
```

---

### 5️⃣ Quick Sort (Divide & Conquer) ⭐
**Concept:** Pick pivot, partition array, recursively sort partitions

**How It Works:**
1. **Choose pivot** (last element, random, median-of-three)
2. **Partition:** Place pivot in correct position, smaller on left, larger on right
3. **Recursively sort** left and right partitions

**Time Complexity:**
- Best: O(n log n) - balanced partitions
- Average: O(n log n)
- Worst: O(n²) - already sorted with poor pivot choice

**Space Complexity:** O(log n) - recursion stack

**When to Use:**
- Most general-purpose sorting (fastest in practice)
- In-place sorting needed (better space than merge sort)
- Cache-friendly (better locality than merge sort)
- **Default in many libraries (C++ std::sort, Java Arrays.sort for primitives)**

**Java Implementation:**
```java
void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        // Partition and get pivot index
        int pi = partition(arr, low, high);
        
        // Recursively sort before and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int partition(int[] arr, int low, int high) {
    int pivot = arr[high]; // Choose last element as pivot
    int i = low - 1; // Index of smaller element
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    // Swap arr[i+1] and arr[high] (pivot)
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    
    return i + 1;
}
```

---

## 📊 Sorting Algorithms Comparison Table

| Algorithm | Best | Average | Worst | Space | Stable | In-Place | Use Case |
|-----------|------|---------|-------|-------|--------|----------|----------|
| **Bubble** | O(n) | O(n²) | O(n²) | O(1) | ✅ Yes | ✅ Yes | Teaching only |
| **Selection** | O(n²) | O(n²) | O(n²) | O(1) | ❌ No | ✅ Yes | Small arrays |
| **Insertion** | O(n) | O(n²) | O(n²) | O(1) | ✅ Yes | ✅ Yes | Nearly sorted |
| **Merge** | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ Yes | ❌ No | Large arrays |
| **Quick** | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ No | ✅ Yes | General purpose |

**Key Terms:**
- **Stable:** Maintains relative order of equal elements
- **In-Place:** Uses O(1) or O(log n) extra space
- **Adaptive:** Faster on nearly sorted data

---

## 🎯 Top 10 Sorting Problems

### Easy Problems (4)

1. **Sort an Array** (LC 912)
   - Implement any sorting algorithm
   - Test your implementation
   - Compare with Arrays.sort()

2. **Squares of a Sorted Array** (LC 977)
   - Input: Sorted array (may have negatives)
   - Output: Sorted squares
   - Pattern: Two pointers from both ends

3. **Sort Array By Parity** (LC 905)
   - Even numbers before odd numbers
   - Pattern: Two pointers / partition

4. **Largest Number** (LC 179)
   - Arrange numbers to form largest number
   - Pattern: Custom comparator

### Medium Problems (5)

5. **Sort Colors (Dutch National Flag)** (LC 75)
   - Sort array of 0s, 1s, 2s in one pass
   - Pattern: Three-way partitioning
   - Similar to quick sort partition

6. **Merge Intervals** (LC 56)
   - Merge overlapping intervals
   - Pattern: Sort first, then merge

7. **Kth Largest Element** (LC 215)
   - Find kth largest without fully sorting
   - Pattern: QuickSelect (partition-based)
   - Alternative: Heap

8. **Top K Frequent Elements** (LC 347)
   - Find k most frequent elements
   - Pattern: Bucket sort or heap

9. **Sort List** (LC 148)
   - Sort linked list in O(n log n)
   - Pattern: Merge sort (better for linked lists)

### Hard Problems (1)

10. **Count of Smaller Numbers After Self** (LC 315)
    - For each element, count smaller elements to its right
    - Pattern: Modified merge sort with counting
    - Classic divide-and-conquer problem

---

## 💻 Coding Practice Plan

### Implement from Scratch (3 hours)
1. **bubble_sort.java** - Basic with optimization
2. **selection_sort.java** - Minimum finding
3. **insertion_sort.java** - Online sorting
4. **merge_sort.java** - Divide & conquer
5. **quick_sort.java** - Partitioning logic

### Problem Solving (3 hours)
- Solve 10 LeetCode problems listed above
- Focus on patterns (two pointers, partitioning, merge)
- Test with edge cases (empty, single element, duplicates)

### Project: Sorting Comparator (2 hours)
Build a program that:
- Takes array input
- Sorts using all 5 algorithms
- Measures execution time for each
- Compares results visually
- Shows best/worst case scenarios

---

## 🚀 9-Hour Study Schedule

### Morning Session (9:00 AM - 12:00 PM)

**Hour 1 (9:00-10:00): Bubble, Selection, Insertion**
- Watch Abdul Bari videos (15 min each)
- Understand algorithm logic with animations
- Code all 3 from scratch
- Test with sample arrays

**Hour 2 (10:00-11:00): Merge Sort**
- Watch merge sort visualization
- Understand divide-and-conquer
- Implement merge sort + merge function
- Trace recursion on paper
- Test with different inputs

**Hour 3 (11:00-12:00): Quick Sort**
- Watch quick sort animation
- Understand partitioning logic
- Implement quick sort + partition
- Test with best/worst cases
- Compare with merge sort

### Afternoon Session (1:00 PM - 4:00 PM)

**Hour 1 (1:00-2:00): Easy Problems**
- Solve LC 912 (Sort an Array)
- Solve LC 977 (Squares of Sorted Array)
- Solve LC 905 (Sort Array By Parity)
- Solve LC 179 (Largest Number)

**Hour 2 (2:00-3:00): Medium Problems - Part 1**
- Solve LC 75 (Sort Colors - Dutch Flag)
- Solve LC 56 (Merge Intervals)
- Solve LC 215 (Kth Largest - QuickSelect)

**Hour 3 (3:00-4:00): Medium Problems - Part 2**
- Solve LC 347 (Top K Frequent)
- Solve LC 148 (Sort List)
- Review all solutions

### Evening Session (5:00 PM - 8:00 PM)

**Hour 1 (5:00-6:00): Hard Problem**
- Solve LC 315 (Count Smaller Numbers After Self)
- Understand modified merge sort approach
- Implement and test

**Hour 2 (6:00-7:00): Sorting Comparator Project**
- Create SortingComparator.java
- Implement all 5 algorithms
- Add timing logic
- Create test cases

**Hour 3 (7:00-8:00): Testing & Analysis**
- Test with different array sizes (10, 100, 1000, 10000)
- Compare execution times
- Visualize results (table/graph)
- Document findings in notes.md
- Update progress.md

---

## 🧠 Key Concepts to Master

### Divide and Conquer Pattern
```java
// Template for D&C algorithms
void divideAndConquer(Problem problem) {
    if (problem.isBaseCase()) {
        return problem.directSolution();
    }
    
    // Divide into subproblems
    Problem[] subproblems = problem.divide();
    
    // Conquer (solve recursively)
    for (Problem sub : subproblems) {
        divideAndConquer(sub);
    }
    
    // Combine solutions
    return problem.combine(subproblems);
}
```

### Partitioning Pattern (Quick Sort)
```java
// Template for partition-based algorithms
int partition(int[] arr, int low, int high, Condition condition) {
    int pivot = choosePivot(arr, low, high);
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (condition.test(arr[j], pivot)) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}
```

### Stability in Sorting
**Stable sorts:** Bubble, Insertion, Merge
**Unstable sorts:** Selection, Quick, Heap

**Why it matters:**
```java
// Example: Sorting employees by salary, then by name
// Stable sort preserves name order when salaries are equal
Employee[] employees = {
    new Employee("Alice", 50000),
    new Employee("Bob", 50000)
};
// After stable sort by salary: Alice still before Bob
```

---

## ✅ Success Checklist

### Implementation
- [ ] Implemented bubble sort with optimization
- [ ] Implemented selection sort
- [ ] Implemented insertion sort
- [ ] Implemented merge sort (with merge function)
- [ ] Implemented quick sort (with partition)
- [ ] All algorithms tested and working

### Understanding
- [ ] Can explain how each algorithm works
- [ ] Know time/space complexity of each
- [ ] Understand when to use which algorithm
- [ ] Can trace recursion for merge/quick sort
- [ ] Know difference between stable/unstable sorting

### Problem Solving
- [ ] Solved 4 easy problems
- [ ] Solved 5 medium problems
- [ ] Solved 1 hard problem
- [ ] Built sorting comparator project
- [ ] Tested algorithms with various inputs

---

## 🎓 Interview Preparation

### Common Interview Questions

**Q1: Explain merge sort vs quick sort. When to use each?**
- **Merge:** Guaranteed O(n log n), stable, needs O(n) space. Use for large arrays, linked lists, external sorting.
- **Quick:** Average O(n log n), in-place, cache-friendly. Use for general purpose, when space is limited.

**Q2: How to sort a linked list?**
- Use merge sort (better than quick sort for linked lists)
- No extra space for array manipulation
- O(1) space with proper implementation

**Q3: How to find kth largest element efficiently?**
- QuickSelect: Average O(n), Worst O(n²)
- Heap: O(n log k)
- Modify quick sort partition logic

**Q4: What is Dutch National Flag problem?**
- Sort array of 3 values (0, 1, 2) in one pass
- Use three pointers (low, mid, high)
- Similar to 3-way partitioning in quick sort

---

## 📈 Progress Metrics

Track in progress.md:
- Time to implement each algorithm
- Problems solved (10 total)
- Bugs encountered and fixed
- Comparator project completion
- Performance analysis results

---

## 🚀 Quick Start Commands

```powershell
# Navigate to Day 15
cd C:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-15\code

# Create sorting files
# (Use IDE or create manually)

# Compile all sorting algorithms
javac *.java

# Run bubble sort
java BubbleSort

# Run comparator project
java SortingComparator
```

---

## 💡 Pro Tips

**Implementation:**
- Always handle edge cases (empty, single element)
- Test with sorted, reverse sorted, duplicates
- Add comments explaining logic
- Use meaningful variable names

**Optimization:**
- Bubble sort: Early exit if no swaps
- Quick sort: Use randomized pivot to avoid O(n²)
- Insertion sort: Use binary search for position (binary insertion sort)

**Debugging:**
- Print array after each iteration
- Use visualizers (VisuAlgo)
- Trace small inputs (4-5 elements) on paper

**Interview:**
- Start with brute force
- Explain time/space complexity
- Discuss trade-offs
- Code cleanly with edge cases

---

## 🎯 Learning Outcomes

After Day 15, you'll:
- ✅ Master 5 fundamental sorting algorithms
- ✅ Understand divide-and-conquer pattern deeply
- ✅ Solve sorting problems efficiently
- ✅ Know which algorithm to use when
- ✅ Be ready for sorting-related interview questions
- ✅ Have strong foundation for advanced algorithms

---

**Sorting is fundamental to computer science. Master it well—it appears in 30%+ of interviews!** 🏆

**Tomorrow:** Searching Algorithms (Binary Search, Interpolation, Exponential) 🔍
