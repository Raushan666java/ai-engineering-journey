# Day 16 Resources: Searching Algorithms

## 🎥 Video Tutorials (World-Class)

### Binary Search Foundation

**Abdul Bari (Best Animations)** ⭐
- [Binary Search Algorithm](https://www.youtube.com/watch?v=C2apEw9pgtw) - 17 min
- [Analysis of Binary Search](https://www.youtube.com/watch?v=P3YID7liBug) - 15 min
- **Why:** Crystal clear animations, best for understanding the concept

**NeetCode (LeetCode Solutions)** ⭐⭐⭐
- [Binary Search (LC 704)](https://www.youtube.com/watch?v=s4DPM8ct1pI) - 8 min
- [Search in Rotated Sorted Array (LC 33)](https://www.youtube.com/watch?v=U8XENwh8Hag) - 12 min
- [Find First and Last Position (LC 34)](https://www.youtube.com/watch?v=4sQL7R5ySUU) - 10 min
- [Median of Two Sorted Arrays (LC 4)](https://www.youtube.com/watch?v=q6IEA26hvXc) - 18 min
- **Why:** Best LeetCode problem walkthroughs, optimal solutions

**Striver (Comprehensive Coverage)**
- [Binary Search Playlist](https://www.youtube.com/playlist?list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF) - 25+ videos
- **Why:** Covers every binary search pattern, 100K+ students

---

## 📚 Articles & Documentation

**LeetCode Official**
- [Binary Search Template](https://leetcode.com/explore/learn/card/binary-search/) - Free course
- [Binary Search Patterns](https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems)

**GeeksforGeeks**
- [Binary Search](https://www.geeksforgeeks.org/binary-search/) - Complete guide
- [Interpolation Search](https://www.geeksforgeeks.org/interpolation-search/)
- [Exponential Search](https://www.geeksforgeeks.org/exponential-search/)

---

## 💻 Practice Platforms

**LeetCode** ⭐⭐⭐
- [Binary Search Tag](https://leetcode.com/tag/binary-search/) - 200+ problems
- **Day 16 Essential:**
  1. [Binary Search (LC 704)](https://leetcode.com/problems/binary-search/)
  2. [First Bad Version (LC 278)](https://leetcode.com/problems/first-bad-version/)
  3. [Search Insert Position (LC 35)](https://leetcode.com/problems/search-insert-position/)
  4. [Find First and Last (LC 34)](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) ⭐
  5. [Rotated Array (LC 33)](https://leetcode.com/problems/search-in-rotated-sorted-array/) ⭐
  6. [Peak Element (LC 162)](https://leetcode.com/problems/find-peak-element/)
  7. [2D Matrix (LC 74)](https://leetcode.com/problems/search-a-2d-matrix/)
  8. [Median Two Arrays (LC 4)](https://leetcode.com/problems/median-of-two-sorted-arrays/) ⭐

**Company-Specific:**
- [Amazon](https://leetcode.com/company/amazon/?questionSlug=binary-search) - 80+ problems
- [Google](https://leetcode.com/company/google/?questionSlug=binary-search) - 60+ problems
- [Microsoft](https://leetcode.com/company/microsoft/?questionSlug=binary-search) - 50+ problems

---

## 📖 Books

**CTCI** - Chapter 10: Sorting and Searching  
**CLRS** - Chapter 2.3: Binary Search  
**Algorithms** (Sedgewick) - [Binary Search Code](https://algs4.cs.princeton.edu/11model/BinarySearch.java.html)

---

## 🛠️ Tools

**VisuAlgo** ⭐ - [Binary Search Visualizer](https://visualgo.net/en/bst)  
**USFCA** - [Search Visualization](https://www.cs.usfca.edu/~galles/visualization/Search.html)

---

## 💡 Binary Search Template

```java
int binarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2; // Prevent overflow
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```

**Master binary search—it's asked in 50%+ of coding interviews!** 🎯
