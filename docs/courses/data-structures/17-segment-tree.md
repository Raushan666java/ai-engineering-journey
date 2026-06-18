# Chapter 17: Segment Tree and Fenwick Tree

## Learning Objectives

- Define the segment tree structure for range queries.
- Implement segment tree construction, point updates, and range queries.
- Implement lazy propagation for range updates.
- Describe the Fenwick tree (Binary Indexed Tree) for prefix sums.

## Theory

![Segment Tree & Fenwick Tree Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch17-segment-tree.png)

### Segment Tree

A **segment tree** is a binary tree that stores interval information. Each node represents a segment \([l, r]\) of the array. The root covers \([0, n-1]\). Each leaf covers a single element. Internal nodes store aggregate information (sum, min, max, etc.) computed from their children.

**Structure:**
- Array-based storage using 4Ã— the input size.
- Query: \( O(\log n) \)
- Point update: \( O(\log n) \)

**Range query algorithm:** starting at the root, if the node's segment is fully inside the query range, return its value. If partially overlapping, query both children. If no overlap, return the identity element.

### Lazy Propagation

Lazy propagation defers updates to a segment tree. When a range update is performed, instead of updating all leaves, we mark a node as "pending" and push the update to children only when necessary. This keeps range updates at \( O(\log n) \).

### Fenwick Tree (Binary Indexed Tree)

A **Fenwick tree** (BIT) supports prefix sum queries and point updates in \( O(\log n) \). It uses the binary representation of indices: the value at index \( i \) stores the sum of a range of length \( i \& (-i) \) (the least significant set bit).

**Operations:**
- `add(idx, delta)`: add delta to element at idx and propagate.
- `prefixSum(idx)`: sum of elements from 0 to idx.
- `rangeSum(l, r)`: `prefixSum(r) - prefixSum(l-1)`.

## Examples

### Example 1: Segment Tree for Range Sum

```cpp
#include <iostream>
#include <vector>

class SegmentTree {
private:
    std::vector<int> tree;
    int n;

    void build(const std::vector<int>& arr, int node, int l, int r) {
        if (l == r) {
            tree[node] = arr[l];
            return;
        }
        int mid = l + (r - l) / 2;
        build(arr, node * 2, l, mid);
        build(arr, node * 2 + 1, mid + 1, r);
        tree[node] = tree[node * 2] + tree[node * 2 + 1];
    }

    int query(int node, int l, int r, int ql, int qr) {
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return query(node * 2, l, mid, ql, qr) +
               query(node * 2 + 1, mid + 1, r, ql, qr);
    }

    void update(int node, int l, int r, int idx, int value) {
        if (l == r) {
            tree[node] = value;
            return;
        }
        int mid = l + (r - l) / 2;
        if (idx <= mid)
            update(node * 2, l, mid, idx, value);
        else
            update(node * 2 + 1, mid + 1, r, idx, value);
        tree[node] = tree[node * 2] + tree[node * 2 + 1];
    }

public:
    SegmentTree(const std::vector<int>& arr) {
        n = arr.size();
        tree.resize(4 * n);
        build(arr, 1, 0, n - 1);
    }

    int rangeSum(int l, int r) {
        return query(1, 0, n - 1, l, r);
    }

    void pointUpdate(int idx, int value) {
        update(1, 0, n - 1, idx, value);
    }
};

int main() {
    std::vector<int> arr = {1, 3, 5, 7, 9, 11};
    SegmentTree st(arr);

    std::cout << "Sum [1,4]: " << st.rangeSum(1, 4) << "\n";
    std::cout << "Sum [0,5]: " << st.rangeSum(0, 5) << "\n";
    std::cout << "Sum [2,2]: " << st.rangeSum(2, 2) << "\n";

    st.pointUpdate(2, 10);
    std::cout << "After update arr[2]=10:\n";
    std::cout << "Sum [1,4]: " << st.rangeSum(1, 4) << "\n";
    std::cout << "Sum [0,5]: " << st.rangeSum(0, 5) << "\n";

    return 0;
}
```

**Output:**
```
Sum [1,4]: 24
Sum [0,5]: 36
Sum [2,2]: 5
After update arr[2]=10:
Sum [1,4]: 29
Sum [0,5]: 41
```

### Example 2: Lazy Propagation (Range Update, Range Query)

```cpp
#include <iostream>
#include <vector>

class LazySegmentTree {
private:
    std::vector<int> tree;
    std::vector<int> lazy;
    int n;

    void build(const std::vector<int>& arr, int node, int l, int r) {
        if (l == r) {
            tree[node] = arr[l];
            return;
        }
        int mid = l + (r - l) / 2;
        build(arr, node * 2, l, mid);
        build(arr, node * 2 + 1, mid + 1, r);
        tree[node] = tree[node * 2] + tree[node * 2 + 1];
    }

    void apply(int node, int l, int r, int val) {
        tree[node] += (r - l + 1) * val;
        lazy[node] += val;
    }

    void push(int node, int l, int r) {
        if (lazy[node] != 0) {
            int mid = l + (r - l) / 2;
            apply(node * 2, l, mid, lazy[node]);
            apply(node * 2 + 1, mid + 1, r, lazy[node]);
            lazy[node] = 0;
        }
    }

    void rangeAdd(int node, int l, int r, int ql, int qr, int val) {
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            apply(node, l, r, val);
            return;
        }
        push(node, l, r);
        int mid = l + (r - l) / 2;
        rangeAdd(node * 2, l, mid, ql, qr, val);
        rangeAdd(node * 2 + 1, mid + 1, r, ql, qr, val);
        tree[node] = tree[node * 2] + tree[node * 2 + 1];
    }

    int rangeSum(int node, int l, int r, int ql, int qr) {
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[node];
        push(node, l, r);
        int mid = l + (r - l) / 2;
        return rangeSum(node * 2, l, mid, ql, qr) +
               rangeSum(node * 2 + 1, mid + 1, r, ql, qr);
    }

public:
    LazySegmentTree(const std::vector<int>& arr) {
        n = arr.size();
        tree.resize(4 * n, 0);
        lazy.resize(4 * n, 0);
        build(arr, 1, 0, n - 1);
    }

    void addRange(int l, int r, int val) {
        rangeAdd(1, 0, n - 1, l, r, val);
    }

    int sumRange(int l, int r) {
        return rangeSum(1, 0, n - 1, l, r);
    }
};

int main() {
    std::vector<int> arr = {1, 2, 3, 4, 5};
    LazySegmentTree lst(arr);

    std::cout << "Initial sum [0,4]: " << lst.sumRange(0, 4) << "\n";

    lst.addRange(1, 3, 10);
    std::cout << "After add 10 to [1,3]:\n";
    std::cout << "  Sum [0,4]: " << lst.sumRange(0, 4) << "\n";
    std::cout << "  Sum [0,0]: " << lst.sumRange(0, 0) << "\n";
    std::cout << "  Sum [1,3]: " << lst.sumRange(1, 3) << "\n";

    lst.addRange(0, 4, -5);
    std::cout << "After add -5 to all:\n";
    std::cout << "  Sum [0,4]: " << lst.sumRange(0, 4) << "\n";

    return 0;
}
```

**Output:**
```
Initial sum [0,4]: 15
After add 10 to [1,3]:
  Sum [0,4]: 45
  Sum [0,0]: 1
  Sum [1,3]: 39
After add -5 to all:
  Sum [0,4]: 20
```

### Example 3: Fenwick Tree (Binary Indexed Tree)

```cpp
#include <iostream>
#include <vector>

class FenwickTree {
private:
    std::vector<int> bit;
    int n;

public:
    FenwickTree(int size) : n(size) {
        bit.resize(n + 1, 0); // 1-indexed
    }

    FenwickTree(const std::vector<int>& arr) : n(arr.size()) {
        bit.resize(n + 1, 0);
        for (int i = 0; i < n; ++i) {
            add(i, arr[i]);
        }
    }

    // Add delta at index i (0-indexed)
    void add(int idx, int delta) {
        ++idx; // convert to 1-indexed
        while (idx <= n) {
            bit[idx] += delta;
            idx += idx & -idx;
        }
    }

    // Prefix sum from 0 to idx (inclusive)
    int prefixSum(int idx) const {
        ++idx; // convert to 1-indexed
        int sum = 0;
        while (idx > 0) {
            sum += bit[idx];
            idx -= idx & -idx;
        }
        return sum;
    }

    // Range sum from l to r (inclusive)
    int rangeSum(int l, int r) {
        return prefixSum(r) - (l > 0 ? prefixSum(l - 1) : 0);
    }

    void pointUpdate(int idx, int newValue) {
        int old = rangeSum(idx, idx);
        add(idx, newValue - old);
    }
};

int main() {
    std::vector<int> arr = {1, 3, 5, 7, 9, 11};
    FenwickTree ft(arr);

    std::cout << "Prefix sum [0,2]: " << ft.prefixSum(2) << "\n";
    std::cout << "Prefix sum [0,5]: " << ft.prefixSum(5) << "\n";
    std::cout << "Range sum [1,4]: " << ft.rangeSum(1, 4) << "\n";

    ft.add(2, 10);
    std::cout << "After add 10 at index 2:\n";
    std::cout << "  Prefix sum [0,2]: " << ft.prefixSum(2) << "\n";
    std::cout << "  Range sum [1,4]: " << ft.rangeSum(1, 4) << "\n";

    return 0;
}
```

**Output:**
```
Prefix sum [0,2]: 9
Prefix sum [0,5]: 36
Range sum [1,4]: 24
After add 10 at index 2:
  Prefix sum [0,2]: 19
  Range sum [1,4]: 34
```

## ðŸ’¡ Pro Tips

- **4Ã— size allocation is standard**: A segment tree of size \(n\) needs roughly \(4n\) nodes. The exact formula is \(2 \cdot 2^{\lceil \log_2 n \rceil} - 1\), but allocating \(4n\) is simpler and safe.
- **Lazy propagation is essential for range updates**: Without it, a range update would touch \(O(n)\) nodes. With lazy propagation, both range update and range query are \(O(\log n)\).
- **Fenwick tree for prefix sums**: Use BIT (Binary Indexed Tree) when you only need prefix sums and point updates. BIT uses \(n\) space (vs \(4n\) for segment tree) and is simpler to implement.
- **Coordinate compression for sparse data**: When the array size is huge (\(10^9\)) but only a few positions are used, compress coordinates and build a segment tree dynamically, allocating nodes on demand.

## One-Sentence Takeaways

- Segment trees enable \(O(\log n)\) range queries and point updates.
- Lazy propagation extends the tree to \(O(\log n)\) range updates.
- A Fenwick tree (BIT) handles prefix sums with \(n\) space and simpler code.
- BIT cannot handle range minimum/maximum queries directly.
- Coordinate compression makes segment trees work on sparse, large-index data.
- The standard segment tree array size is \(4n\).

## Concept Comparison Table

| Feature | Segment Tree | Fenwick Tree (BIT) | Sparse Table | Square Root Decomposition |
|---------|-------------|-------------------|--------------|--------------------------|
| Build time | \(O(n)\) | \(O(n)\) | \(O(n \log n)\) | \(O(n)\) |
| Point update | \(O(\log n)\) | \(O(\log n)\) | \(O(n \log n)\) | \(O(1)\) |
| Range query | \(O(\log n)\) | \(O(\log n)\) (prefix) | \(O(1)\) | \(O(\sqrt{n})\) |
| Range update (lazy) | \(O(\log n)\) | Not supported | Not supported | \(O(\sqrt{n})\) |
| Space | \(4n\) | \(n\) | \(n \log n\) | \(n + \sqrt{n}\) |
| Works with min/max | Yes | No | Yes | Yes |

## Quick Reference: Segment Tree Patterns

| Pattern | Array Storage | Query Function | Update Function |
|---------|--------------|----------------|----------------|
| Range sum | Sum of children | Query range sum | Add to leaf and propagate |
| Range minimum | Min of children | Query range min | Update leaf and recompute |
| Range maximum | Max of children | Query range max | Update leaf and recompute |
| Lazy sum | Sum + pending add | Propagate before recursion | Mark pending, propagate on query |
| GCD | GCD of children | Query range GCD | Update leaf and recompute |

## Cross-Application Matrix

| Problem | Structure | Why |
|---------|-----------|-----|
| Range sum queries | BIT or segment tree | BIT is simpler for prefix sums |
| Range minimum query | Segment tree or sparse table | Sparse table if no updates |
| Range sum with updates | Segment tree with lazy | Updates require lazy propagation |
| Count inversions | BIT | Standard offline algorithm |
| Dynamic RMQ with updates | Segment tree | Only structure supporting both |
| Range GCD queries | Segment tree | GCD is associative, combinable |

## Chapter Quiz

1. **What is the standard array size for a segment tree of n elements?**
   - a) \(n\)
   - b) \(2n\)
   - c) \(4n\) âœ“
   - d) \(n^2\)

2. **What does lazy propagation enable?**
   - a) Faster point updates
   - b) Range updates in \(O(\log n)\) âœ“
   - c) Range minimum queries
   - d) Smaller memory

3. **A Fenwick tree (BIT) supports:**
   - a) Range minimum
   - b) Prefix sums âœ“
   - c) Range maximum
   - d) Range GCD

4. **What is the space complexity of BIT?**
   - a) \(4n\)
   - b) \(n\) âœ“
   - c) \(n \log n\)
   - d) \(\sqrt{n}\)

5. **Coordinate compression is useful when:**
   - a) n is small
   - b) The index range is huge but sparse âœ“
   - c) Data is unsorted
   - d) No updates are needed

**Answers:** 1-c, 2-b, 3-b, 4-b, 5-b

## Summary

- Segment trees support range queries and point updates in \( O(\log n) \).
- Lazy propagation extends segment trees to range updates in \( O(\log n) \).
- Fenwick trees (BIT) support prefix sums and point updates more compactly than segment trees.
- BIT uses \( n \) space, while segment trees use \( 4n \).
- BIT cannot handle range queries with non-invertible aggregators (like min) without extensions.

## Exercises

### Review Questions

1. Why does a segment tree require approximately 4Ã— the input size?
2. What is the advantage of lazy propagation? What problem does it solve?
3. How does the Fenwick tree use binary representation to compute prefix sums?

### Application Problems

4. Implement a segment tree for range minimum query (RMQ) with point updates.
5. Write a program that uses a BIT to count inversions in an array.
6. Implement a segment tree that supports both range sum and range minimum simultaneously.

### Challenge Problem

7. Implement a **segment tree with coordinate compression** for range queries on sparse data. Given up to \( 10^5 \) possible indices but only \( 10^3 \) distinct values, compress coordinates and build a dynamic segment tree that allocates nodes on demand.
