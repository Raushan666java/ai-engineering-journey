# Day 46: Segment Tree & Fenwick Tree - Advanced Range Query Optimization

## 📋 Overview
**Focus**: Segment Trees, Fenwick Trees (Binary Indexed Trees), Range Queries, Lazy Propagation  
**Difficulty**: Medium to Hard  
**Time Required**: 9 hours  
**Problems to Solve**: 10 comprehensive range query problems  

## 🎯 Learning Objectives
- Master Segment Tree construction and operations
- Understand Fenwick Tree (Binary Indexed Tree) implementation
- Solve range query problems efficiently (sum, min, max)
- Implement lazy propagation for range updates
- Compare segment tree vs Fenwick tree trade-offs
- Apply range query optimization to real-world problems

## 📚 Today's Topics

### 1. Segment Tree Fundamentals

#### **What is a Segment Tree?**
A tree data structure for storing intervals/segments. Allows querying which segments contain a given point efficiently.

**Key Properties**:
- Complete binary tree structure
- Each node represents an interval
- Leaf nodes: single elements
- Internal nodes: merged information from children
- Height: O(log n)
- Space: O(4n) ≈ O(n)

#### **Core Operations**:
```
Build: O(n) - Construct tree from array
Query: O(log n) - Get range result (sum, min, max)
Update: O(log n) - Update single element
Range Update: O(log n) with lazy propagation
```

#### **Structure**:
```
Array: [2, 4, 5, 7, 8, 9]
Segment Tree (Range Sum):
                54 [0,5]
              /          \
         18 [0,2]        33 [3,5]
        /      \         /       \
     6[0,1]  5[2]    15[3,4]   9[5]
    /    \          /     \
  2[0]  4[1]      7[3]   8[4]
```

### 2. Fenwick Tree (Binary Indexed Tree)

#### **What is a Fenwick Tree?**
Space-efficient data structure for cumulative frequency tables. Simpler than segment tree but less versatile.

**Key Properties**:
- Array-based implementation
- Uses binary representation of indices
- Space: O(n)
- Only supports cumulative operations (sum, XOR)
- Cannot handle min/max without modifications

#### **Core Operations**:
```
Update: O(log n) - Add value to index
Query: O(log n) - Get prefix sum [0, i]
Range Query: query(r) - query(l-1)
```

#### **Binary Index Magic**:
```
BIT[i] stores sum of range of length (i & -i)
i & -i gives rightmost set bit (lowest power of 2)

Example for n=8:
BIT[1] = arr[1]          (length 1)
BIT[2] = arr[1..2]       (length 2)
BIT[3] = arr[3]          (length 1)
BIT[4] = arr[1..4]       (length 4)
BIT[5] = arr[5]          (length 1)
BIT[6] = arr[5..6]       (length 2)
BIT[7] = arr[7]          (length 1)
BIT[8] = arr[1..8]       (length 8)
```

### 3. Lazy Propagation

**Problem**: Range updates in segment tree would be O(n) if we update all affected nodes.

**Solution**: Lazy propagation - postpone updates until necessary.

**Mechanism**:
1. Mark node as "lazy" with pending update
2. When querying/updating child, push lazy value down
3. Clear lazy flag after propagation
4. Result: O(log n) range updates

### 4. Comparison: Segment Tree vs Fenwick Tree

| Feature | Segment Tree | Fenwick Tree |
|---------|--------------|--------------|
| Space | O(4n) | O(n) |
| Construction | O(n) | O(n log n) or O(n) optimized |
| Query | O(log n) | O(log n) |
| Update | O(log n) | O(log n) |
| Range Update | O(log n) with lazy | Not directly supported |
| Operations | Sum, Min, Max, GCD, etc. | Only associative & invertible (sum, XOR) |
| Implementation | More complex | Simpler |
| Memory | More | Less |
| Flexibility | High | Limited |

**When to use Segment Tree**:
- Need min/max/GCD queries
- Need range updates
- Need non-invertible operations

**When to use Fenwick Tree**:
- Only need sum/XOR queries
- Memory constrained
- Simpler implementation preferred

## 💻 Problems Breakdown

### Problem Set

| # | Problem | Difficulty | Pattern | Time | Space |
|---|---------|------------|---------|------|-------|
| 1 | Range Sum Query - Mutable | Medium | Segment Tree/BIT | O(log n) | O(n) |
| 2 | Range Minimum Query | Medium | Segment Tree | O(log n) | O(n) |
| 3 | Count Smaller After Self | Hard | BIT/Merge Sort | O(n log n) | O(n) |
| 4 | Range Sum Query 2D | Hard | 2D BIT | O(log²n) | O(n²) |
| 5 | My Calendar I | Medium | Segment Tree | O(log n) | O(n) |
| 6 | Count of Range Sum | Hard | BIT/Merge Sort | O(n log n) | O(n) |
| 7 | Falling Squares | Hard | Coordinate Compression | O(n² log n) | O(n) |
| 8 | The Skyline Problem | Hard | Segment Tree/Heap | O(n log n) | O(n) |
| 9 | Longest Increasing Subsequence II | Hard | Segment Tree DP | O(n log m) | O(m) |
| 10 | Book My Show | Hard | Segment Tree | O(log n) | O(n) |

## 🔍 Problem Analysis

### Problem 1: Range Sum Query - Mutable
**LeetCode #307**

Implement NumArray class:
- `NumArray(int[] nums)`: Initialize with array
- `void update(int index, int val)`: Update nums[index] = val
- `int sumRange(int left, int right)`: Return sum of [left, right]

**Approaches**:
1. **Segment Tree**: Build tree, query O(log n), update O(log n)
2. **Fenwick Tree**: Simpler, same complexity
3. **Square Root Decomposition**: O(√n) alternative

### Problem 2: Range Minimum Query
**Custom Implementation**

Similar to sum query but return minimum in range.

**Key Insight**: Cannot use Fenwick tree (min not invertible). Must use segment tree.

### Problem 3: Count of Smaller Numbers After Self
**LeetCode #315**

For each nums[i], count how many nums[j] where j > i and nums[j] < nums[i].

**Approaches**:
1. **BIT**: Coordinate compression + count smaller elements
2. **Merge Sort**: Count inversions during merge
3. **Segment Tree**: Query count of elements < nums[i]

### Problem 4: Range Sum Query 2D - Mutable
**LeetCode #308**

2D matrix with updates and range sum queries.

**Approach**: 2D Fenwick Tree
- Update: O(log m * log n)
- Query: O(log m * log n)

### Problem 5: My Calendar I
**LeetCode #729**

Implement calendar that can book events if no double booking.

**Approach**: Segment tree for interval tracking.

### Problem 6: Count of Range Sum
**LeetCode #327**

Count number of range sums in [lower, upper].

**Approaches**:
1. **BIT + Coordinate Compression**: O(n log n)
2. **Merge Sort**: Count while merging O(n log n)

### Problem 7: Falling Squares
**LeetCode #699**

Squares fall on x-axis. Return max height after each square.

**Approach**: Coordinate compression + segment tree with lazy propagation.

### Problem 8: The Skyline Problem
**LeetCode #218**

Given buildings [left, right, height], find skyline silhouette.

**Approaches**:
1. **Segment Tree**: Range max query
2. **Priority Queue**: Event-based processing
3. **Divide and Conquer**: Merge skylines

### Problem 9: Longest Increasing Subsequence II
**LeetCode #2407**

LIS with constraint: nums[j] - nums[i] ≤ k.

**Approach**: Segment tree DP
- dp[val] = LIS ending at value val
- Query max in range [val-k, val-1]
- Update dp[val]

### Problem 10: Book My Show
**LeetCode #2286**

Allocate seats in rows with capacity constraints.

**Approach**: Segment tree tracking available seats per row.

## 📊 Time Complexity Summary

### Segment Tree Operations
| Operation | Time | Space | Use Case |
|-----------|------|-------|----------|
| Build | O(n) | O(4n) | One-time construction |
| Point Query | O(1) | - | Get single element |
| Range Query | O(log n) | - | Sum/Min/Max in range |
| Point Update | O(log n) | - | Update single element |
| Range Update | O(log n) | - | With lazy propagation |

### Fenwick Tree Operations
| Operation | Time | Space | Use Case |
|-----------|------|-------|----------|
| Build | O(n log n) | O(n) | Simpler than segment tree |
| Prefix Query | O(log n) | - | Sum [0, i] |
| Range Query | O(log n) | - | query(r) - query(l-1) |
| Point Update | O(log n) | - | Add delta to index |

## 🎯 Implementation Patterns

### Pattern 1: Basic Segment Tree (Range Sum)
```java
class SegmentTree {
    int[] tree;
    int n;
    
    SegmentTree(int[] arr) {
        n = arr.length;
        tree = new int[4 * n];
        build(arr, 0, 0, n - 1);
    }
    
    void build(int[] arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
            return;
        }
        int mid = (start + end) / 2;
        build(arr, 2*node+1, start, mid);
        build(arr, 2*node+2, mid+1, end);
        tree[node] = tree[2*node+1] + tree[2*node+2];
    }
    
    int query(int node, int start, int end, int l, int r) {
        if (r < start || end < l) return 0;
        if (l <= start && end <= r) return tree[node];
        int mid = (start + end) / 2;
        return query(2*node+1, start, mid, l, r) +
               query(2*node+2, mid+1, end, l, r);
    }
    
    void update(int node, int start, int end, int idx, int val) {
        if (start == end) {
            tree[node] = val;
            return;
        }
        int mid = (start + end) / 2;
        if (idx <= mid) update(2*node+1, start, mid, idx, val);
        else update(2*node+2, mid+1, end, idx, val);
        tree[node] = tree[2*node+1] + tree[2*node+2];
    }
}
```

### Pattern 2: Fenwick Tree (BIT)
```java
class FenwickTree {
    int[] tree;
    int n;
    
    FenwickTree(int size) {
        n = size;
        tree = new int[n + 1];
    }
    
    void update(int i, int delta) {
        i++; // 1-indexed
        while (i <= n) {
            tree[i] += delta;
            i += i & (-i); // Add last set bit
        }
    }
    
    int query(int i) {
        i++; // 1-indexed
        int sum = 0;
        while (i > 0) {
            sum += tree[i];
            i -= i & (-i); // Remove last set bit
        }
        return sum;
    }
    
    int rangeQuery(int l, int r) {
        return query(r) - (l > 0 ? query(l - 1) : 0);
    }
}
```

### Pattern 3: Segment Tree with Lazy Propagation
```java
class LazySegmentTree {
    long[] tree, lazy;
    int n;
    
    void push(int node, int start, int end) {
        if (lazy[node] != 0) {
            tree[node] += (end - start + 1) * lazy[node];
            if (start != end) {
                lazy[2*node+1] += lazy[node];
                lazy[2*node+2] += lazy[node];
            }
            lazy[node] = 0;
        }
    }
    
    void rangeUpdate(int node, int start, int end, int l, int r, int val) {
        push(node, start, end);
        if (r < start || end < l) return;
        if (l <= start && end <= r) {
            lazy[node] += val;
            push(node, start, end);
            return;
        }
        int mid = (start + end) / 2;
        rangeUpdate(2*node+1, start, mid, l, r, val);
        rangeUpdate(2*node+2, mid+1, end, l, r, val);
        push(2*node+1, start, mid);
        push(2*node+2, mid+1, end);
        tree[node] = tree[2*node+1] + tree[2*node+2];
    }
}
```

### Pattern 4: 2D Fenwick Tree
```java
class FenwickTree2D {
    int[][] tree;
    int m, n;
    
    FenwickTree2D(int rows, int cols) {
        m = rows;
        n = cols;
        tree = new int[m + 1][n + 1];
    }
    
    void update(int row, int col, int delta) {
        for (int i = row + 1; i <= m; i += i & (-i)) {
            for (int j = col + 1; j <= n; j += j & (-j)) {
                tree[i][j] += delta;
            }
        }
    }
    
    int query(int row, int col) {
        int sum = 0;
        for (int i = row + 1; i > 0; i -= i & (-i)) {
            for (int j = col + 1; j > 0; j -= j & (-j)) {
                sum += tree[i][j];
            }
        }
        return sum;
    }
    
    int rangeQuery(int r1, int c1, int r2, int c2) {
        return query(r2, c2) 
             - query(r1 - 1, c2) 
             - query(r2, c1 - 1) 
             + query(r1 - 1, c1 - 1);
    }
}
```

## 💡 Pro Tips

### Segment Tree Tips
1. **Array Size**: Use 4*n to be safe (exact: 2^(ceil(log2(n))+1) - 1)
2. **Index Calculation**: Left child = 2*node+1, Right child = 2*node+2
3. **Leaf Nodes**: When start == end
4. **Merge Function**: Customize based on operation (sum, min, max, gcd)
5. **Query Optimization**: Early return if range completely inside/outside

### Fenwick Tree Tips
1. **1-Indexed**: BIT is typically 1-indexed (simpler bit manipulation)
2. **Last Set Bit**: i & (-i) gives lowest set bit
3. **Update Path**: Follow parent chain by adding last set bit
4. **Query Path**: Follow prefix chain by removing last set bit
5. **Range Query**: Use prefix sum difference

### Common Pitfalls
1. **Off-by-one errors**: Carefully handle 0 vs 1 indexing
2. **Integer overflow**: Use long for large sums
3. **Incomplete range**: Ensure query handles edge cases
4. **Lazy propagation bugs**: Always push before accessing children
5. **Coordinate compression**: Necessary for sparse ranges

## 🎓 Real-World Applications

### 1. Database Indexing
- **B+ Trees**: Similar to segment trees
- **Range Queries**: Fast sum/count aggregations
- **Update Performance**: O(log n) inserts/updates

### 2. Computational Geometry
- **Skyline Queries**: Building silhouettes
- **Rectangle Union**: Area calculations
- **Interval Scheduling**: Overlap detection

### 3. Statistics & Analytics
- **Histogram Queries**: Range frequency counts
- **Moving Averages**: Sliding window sums
- **Percentile Calculations**: Order statistics

### 4. Game Development
- **Collision Detection**: Spatial queries
- **Visibility Queries**: Range-based rendering
- **Leaderboards**: Rank queries with updates

### 5. Financial Systems
- **Order Book**: Price level queries
- **Time-Series Analysis**: Range aggregations
- **Risk Calculations**: Portfolio analytics

## 📈 Performance Optimization

### Space Optimization
1. **Implicit Tree**: Use array instead of node objects
2. **Coordinate Compression**: Handle sparse values
3. **Dynamic Segment Tree**: Create nodes on demand
4. **Persistent Segment Tree**: Share nodes across versions

### Time Optimization
1. **Iterative Implementation**: Avoid recursion overhead
2. **Batch Updates**: Group operations when possible
3. **Cache Locality**: Sequential array access
4. **SIMD Operations**: Vectorized computations

## 📚 Resources

### Essential Reading
- [CP-Algorithms: Segment Tree](https://cp-algorithms.com/data_structures/segment_tree.html)
- [TopCoder: Binary Indexed Trees](https://www.topcoder.com/community/competitive-programming/tutorials/binary-indexed-trees/)
- [Codeforces: Segment Tree Tutorial](https://codeforces.com/blog/entry/18051)

### Video Tutorials
- [William Fiset: Segment Tree Playlist](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu)
- [Tushar Roy: Fenwick Tree](https://www.youtube.com/watch?v=CWDQJGaN1gY)
- [Errichto: Segment Trees](https://www.youtube.com/watch?v=Oq2E2yGadnU)

### Practice Platforms
- LeetCode: Segment Tree Tag (20+ problems)
- Codeforces: Data Structures Section
- AtCoder: Range Query Problems
- SPOJ: Classical Segment Tree Problems

## ✅ Day 46 Checklist

### Concepts Mastery
- [ ] Understand segment tree structure and properties
- [ ] Master Fenwick tree implementation
- [ ] Learn lazy propagation technique
- [ ] Know when to use segment tree vs Fenwick tree
- [ ] Understand coordinate compression

### Problems Completion
- [ ] Range Sum Query - Mutable
- [ ] Range Minimum Query
- [ ] Count of Smaller Numbers After Self
- [ ] Range Sum Query 2D - Mutable
- [ ] My Calendar I
- [ ] Count of Range Sum
- [ ] Falling Squares
- [ ] The Skyline Problem
- [ ] Longest Increasing Subsequence II
- [ ] Book My Show

### Implementation Skills
- [ ] Code segment tree from scratch
- [ ] Code Fenwick tree from scratch
- [ ] Implement lazy propagation
- [ ] Handle 2D range queries
- [ ] Debug range query edge cases

### Interview Preparation
- [ ] Explain segment tree clearly
- [ ] Analyze time/space complexity
- [ ] Choose appropriate data structure
- [ ] Optimize for specific use cases

## 🎯 Learning Outcomes

By the end of Day 46, you will:
1. ✅ Master segment tree and Fenwick tree
2. ✅ Solve range query problems efficiently
3. ✅ Implement lazy propagation correctly
4. ✅ Handle 2D range queries
5. ✅ Apply coordinate compression
6. ✅ Optimize for time and space
7. ✅ Understand real-world applications
8. ✅ Be confident in range query interviews

## 🚀 Next Steps

### Day 47 Preview: Binary Search Advanced
- Binary search variations (first/last occurrence)
- Binary search on answer
- 2D matrix search
- Optimization problems
- Median of two sorted arrays

### Week 7 Progress
- Day 45: Trie Data Structure ✅
- Day 46: Segment Tree & Fenwick Tree (Current)
- Day 47: Binary Search Advanced
- Day 48: Bit Manipulation
- Day 49: Mock Interview Day
- Day 50: Advanced Graphs I
- Day 51: Week 7 Review

---

**Remember**: Segment trees and Fenwick trees are powerful tools for range queries. Master the implementation patterns, understand when to use each, and practice until you can code them confidently without hints!

**Good luck with Day 46! Master range queries! 📊**
