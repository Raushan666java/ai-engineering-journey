# 🎯 DAY 15: SORTING ALGORITHMS - COMPLETE WORLD-CLASS RESOURCES

## 📺 VIDEO TUTORIALS (Watch in Order)

### Morning Session (3 hours)

#### 1️⃣ Abdul Bari - Sorting Algorithms (BEST) ⭐⭐⭐⭐⭐
**WHY**: 5M+ students, clearest explanations, used by IIT students

- **Bubble Sort** (15 min): https://youtu.be/Jdtq5uKz-w4
- **Selection Sort** (8 min): https://youtu.be/xWBP4lzkoyM  
- **Insertion Sort** (11 min): https://youtu.be/OGzPmgsI-pQ
- **Merge Sort** (20 min): https://youtu.be/mB5HXBb_HY8 🔥
- **Quick Sort** (28 min): https://youtu.be/PgBzjlCcFvc 🔥

**What to focus on**: 
- Draw recursion trees on paper
- Understand time complexity proofs
- Watch 2x speed if comfortable

#### 2️⃣ CS Dojo - Visual Sorting (10 min): https://youtu.be/pkkFqlG0Hds
**WHY**: Beautiful visualizations, easy to understand

#### 3️⃣ Back To Back SWE - Interview Focus (Optional)
- Merge Sort: https://youtu.be/Hoixgm4-P4M
- Quick Sort: https://youtu.be/uEbdK2CG_B8

---

## 💻 INTERACTIVE LEARNING

### VisuAlgo - MUST USE ⭐⭐⭐⭐⭐
**Link**: https://visualgo.net/en/sorting

**How to use** (30 minutes):
1. Select "Bubble Sort" → Click "Sort" → Watch animation
2. Use "Step Forward/Backward" buttons
3. Repeat for all 5 algorithms
4. Compare side-by-side using multiple windows
5. Change speed to understand better

---

## 📚 LEETCODE PROBLEMS (10 Must-Solve)

### EASY (Warm-up)
1. **#912 - Sort an Array** ⭐
   - Link: https://leetcode.com/problems/sort-an-array/
   - Practice: Implement all 5 sorting algorithms
   - Time: 30 min

2. **#88 - Merge Sorted Array** ⭐⭐⭐ TOP INTERVIEW
   - Link: https://leetcode.com/problems/merge-sorted-array/
   - Similar to merge sort merge step
   - Asked in: Google, Amazon, Microsoft, Meta
   - Time: 20 min

3. **#977 - Squares of a Sorted Array**
   - Link: https://leetcode.com/problems/squares-of-a-sorted-array/
   - Two-pointer technique
   - Time: 15 min

### MEDIUM (Core Practice - MUST DO) 🔥

4. **#75 - Sort Colors (Dutch National Flag)** ⭐⭐⭐ FAANG FAVORITE
   - Link: https://leetcode.com/problems/sort-colors/
   - One-pass solution, O(1) space
   - Asked in: Google (20+ times), Amazon, Microsoft
   - **VERY IMPORTANT** - Know this by heart
   - Time: 25 min

5. **#215 - Kth Largest Element in Array** ⭐⭐⭐ TOP 10
   - Link: https://leetcode.com/problems/kth-largest-element-in-an-array/
   - QuickSelect algorithm
   - Asked in: 50+ companies
   - Time: 30 min

6. **#56 - Merge Intervals** ⭐⭐⭐ MUST MASTER
   - Link: https://leetcode.com/problems/merge-intervals/
   - Sorting + merging pattern
   - Asked in: 100+ companies (Google, Amazon, Meta, Apple)
   - Time: 25 min

7. **#179 - Largest Number** 🔥
   - Link: https://leetcode.com/problems/largest-number/
   - Custom comparator - IMPORTANT CONCEPT
   - Asked in: Amazon, Microsoft
   - Time: 20 min

8. **#347 - Top K Frequent Elements** ⭐⭐ Amazon Loves This
   - Link: https://leetcode.com/problems/top-k-frequent-elements/
   - Bucket sort approach
   - Time: 25 min

9. **#148 - Sort List** (Advanced)
   - Link: https://leetcode.com/problems/sort-list/
   - Merge sort on linked list
   - O(1) space challenge
   - Time: 35 min

10. **#252 - Meeting Rooms** (Premium but Important)
    - Sorting + interval pattern
    - If no premium: Practice on GeeksforGeeks
    - Time: 15 min

---

## 📖 WRITTEN RESOURCES

### GeeksforGeeks Articles (Read After Videos)
1. **Sorting Algorithms**: https://www.geeksforgeeks.org/sorting-algorithms/
2. **Time Complexity Comparison**: https://www.geeksforgeeks.org/time-complexities-of-all-sorting-algorithms/
3. **When to Use Which**: https://www.geeksforgeeks.org/know-sorting-algorithm-set-1-sorting-weapons-used-programming-languages/

### Programiz (Beginner-Friendly)
- https://www.programiz.com/dsa/sorting-algorithm
- Has animations and try-it-yourself code

---

## 🎯 STRIVER'S SDE SHEET - Sorting Problems

**Link**: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/

**From Striver's Sheet (Do These)**:
- Merge Overlapping Intervals
- Find the duplicate in an array
- Inversion Count (Merge Sort application)

**Bonus**: Watch Striver's video solutions on YouTube

---

## 📝 CODE TEMPLATES TO MEMORIZE

### 1. Merge Sort Template (MOST IMPORTANT)
```java
void mergeSort(int[] arr, int left, int right) {
    if (left >= right) return;
    int mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

void merge(int[] arr, int left, int mid, int right) {
    int[] temp = new int[right - left + 1];
    int i = left, j = mid + 1, k = 0;
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }
    
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    
    for (i = 0; i < temp.length; i++) {
        arr[left + i] = temp[i];
    }
}
```

### 2. Quick Sort Template
```java
void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}
```

---

## 🏆 INTERVIEW QUESTIONS (Prepare Answers)

### Conceptual (MUST KNOW)
1. **Explain merge sort in 2 minutes** (Practice out loud)
2. **Why is quick sort O(n²) worst case?** (Unbalanced partitions)
3. **When would you use insertion sort over merge sort?** (Nearly sorted, small arrays)
4. **What is a stable sorting algorithm? Give examples** (Merge, Bubble, Insertion are stable)
5. **Difference between in-place and not in-place sorting?** (Extra space usage)
6. **How does Java's Arrays.sort() work internally?** (Dual-pivot quicksort for primitives, TimSort for objects)
7. **External sorting for files larger than RAM?** (Merge sort - divide into chunks)

### Complexity Table (MEMORIZE THIS)
```
Algorithm      Best        Average     Worst       Space    Stable
─────────────────────────────────────────────────────────────────
Bubble Sort    O(n)        O(n²)       O(n²)       O(1)     Yes
Selection      O(n²)       O(n²)       O(n²)       O(1)     No
Insertion      O(n)        O(n²)       O(n²)       O(1)     Yes
Merge Sort     O(nlogn)    O(nlogn)    O(nlogn)    O(n)     Yes
Quick Sort     O(nlogn)    O(nlogn)    O(n²)       O(logn)  No
Heap Sort      O(nlogn)    O(nlogn)    O(nlogn)    O(1)     No
```

---

## ⏰ TODAY'S SCHEDULE (9 Hours)

### Morning (9:00 AM - 12:00 PM) - Theory
- **9:00-10:00**: Watch Abdul Bari (Bubble, Selection, Insertion)
- **10:00-11:00**: Watch Abdul Bari (Merge Sort) + VisuAlgo practice
- **11:00-12:00**: Watch Abdul Bari (Quick Sort) + VisuAlgo practice

### Afternoon (2:00 PM - 5:00 PM) - Coding
- **2:00-3:00**: Implement all 5 algorithms from scratch
- **3:00-4:00**: Solve LeetCode #912, #88, #977
- **4:00-5:00**: Solve LeetCode #75 (MUST DO), #215

### Evening (7:00 PM - 10:00 PM) - Practice
- **7:00-8:00**: Solve LeetCode #56, #179, #347
- **8:00-9:00**: Build sorting comparator project (compare all algorithms)
- **9:00-10:00**: Review complexity, prepare notes, plan Day 16

---

## ✅ SUCCESS CHECKLIST

After today, you MUST be able to:
- [ ] Implement merge sort without looking at code
- [ ] Implement quick sort without looking at code
- [ ] Explain time complexity of each algorithm
- [ ] Solve "Sort Colors" in one pass
- [ ] Solve "Merge Intervals" perfectly
- [ ] Know when to use which sorting algorithm
- [ ] Write custom comparators in Java
- [ ] Handle edge cases (empty array, single element, duplicates)

---

## 💡 PRO TIPS FROM FAANG ENGINEERS

### Tip 1: In Interviews, Default to Merge Sort
**Why?** 
- Guaranteed O(n log n)
- Easy to explain
- Well-known algorithm
- Shows you know fundamentals

### Tip 2: Practice Explaining While Coding
Set a 5-minute timer. Explain merge sort out loud as if interviewer is watching.

### Tip 3: Master "Sort Colors" (Dutch National Flag)
This problem appears in 20+ company interviews. Know it perfectly.

### Tip 4: Understand Java's Built-in Sorting
```java
Arrays.sort(primitives);     // Dual-pivot quicksort (not stable)
Arrays.sort(objects);        // TimSort (stable, merge+insertion hybrid)
Collections.sort(list);      // TimSort (stable)
```

### Tip 5: QuickSelect for Kth Element
Better than sorting entire array: O(n) average vs O(n log n)

---

## 📊 EXPECTED OUTCOMES

**After Day 15:**
- ✅ Sorting expert (can explain any algorithm)
- ✅ 10 LeetCode problems solved
- ✅ Ready for 30% of coding interviews
- ✅ Foundation for advanced algorithms
- ✅ Confidence in recursion and divide-conquer

**Companies That LOVE Sorting:**
Google, Amazon, Microsoft, Apple, Meta, Netflix, Adobe, Uber

---

## 🚀 MOTIVATION

**Remember**: Sorting is the foundation of computer science. Master it today, use it forever!

**Quote**: *"If you can sort data, you can solve 50% of programming problems"* - Donald Knuth

---

## 📞 HELP & SUPPORT

**Stuck on a problem?**
1. Read LeetCode discussion section
2. Watch NeetCode solution: https://neetcode.io/
3. Check Striver's solution: https://takeuforward.org/

**Need more practice?**
- HackerRank Sorting: https://www.hackerrank.com/domains/algorithms?filters%5Bsubdomains%5D%5B%5D=arrays-and-sorting
- Codeforces Sorting Problems
- InterviewBit Sorting

---

## ✨ FINAL WORDS

Day 15 is CRITICAL. Sorting is asked in:
- 🔥 40% of all coding interviews
- 🔥 Every FAANG company
- 🔥 All service-based companies (TCS, Wipro, Infosys, Accenture)

**Spend 9 hours today. It will pay off 100x in your career!**

---

**Status**: ⏳ START NOW!  
**Next Day**: Day 16 - Binary Search & Searching Algorithms 🔍

**Type "next" when you complete Day 15 and want Day 16 resources** ✅
