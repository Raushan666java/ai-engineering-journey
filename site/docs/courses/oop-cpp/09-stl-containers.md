---
id: 09-stl-containers
slug: /oop-cpp/09-stl-containers
title: "Chapter 9: STL Containers -- In-Depth Mastery"
sidebar_label: "Chapter 9: STL Containers -- In-Depth Mastery"
sidebar_position: 9
---
# Chapter 9: STL Containers -- In-Depth Mastery

> **Previous:** [08-exceptions](./08-exceptions.md) | **Next:** [10-stl-algorithms](./10-stl-algorithms.md)

## Learning Objectives

After studying this chapter, students will be able to:

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/oop-cpp/09-stl-containers/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/oop-cpp/09-stl-containers/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/oop-cpp/09-stl-containers/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/oop-cpp/09-stl-containers/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/oop-cpp/09-stl-containers/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/oop-cpp/09-stl-containers/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


- Classify STL containers into sequence, associative, unordered, and adapter categories
- Explain the internal implementation of each container (dynamic array, RB-tree, hash table, chunked array)
- Select the optimal container for any given problem using complexity analysis
- Write correct code that respects iterator invalidation rules for every container
- Compare containers head-to-head on time complexity, memory overhead, and use cases
- Answer interview questions about STL container internals and trade-offs with confidence

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| **Container Taxonomy** | Sequence, associative, unordered, adapters | Match container to access patterns |
| **std::vector** | Dynamic array, contiguous memory, O(1) index | Default container; reserve() when size known |
| **std::deque** | Chunked blocks, O(1) push/pop both ends | Best for FIFO; not contiguous |
| **std::list** | Doubly-linked nodes, O(1) insert at iterator | Memory-heavy; measure before using |
| **std::forward_list** | Singly-linked, minimal memory | When only forward traversal needed |
| **std::array** | Fixed-size stack array | Zero overhead, compile-time size |
| **std::set/map** | Red-black tree, O(log n) sorted | Order matters; range queries |
| **std::unordered_set/map** | Hash table, average O(1) | Speed matters; order irrelevant |
| **Container Adaptors** | stack, queue, priority_queue | Restricted interface over sequence |
| **Iterator Invalidation** | Varies by container and operation | Critical for correctness |

## Chapter Roadmap

```mermaid
flowchart LR
    A[STL Containers] --> B[Sequence]
    A --> C[Associative Ordered]
    A --> D[Associative Unordered]
    A --> E[Container Adaptors]
    B --> B1[vector]
    B --> B2[deque]
    B --> B3[list]
    B --> B4[forward_list]
    B --> B5[array]
    C --> C1[set / multiset]
    C --> C2[map / multimap]
    D --> D1[unordered_set]
    D --> D2[unordered_map]
    E --> E1[stack]
    E --> E2[queue]
    E --> E3[priority_queue]
    C1 --> F[Red-Black Tree O(log n)]
    D1 --> G[Hash Table O(1) avg]
    B1 --> H[Dynamic Array]
    B2 --> I[Chunked Blocks]
```

## 9.1 Introduction to STL Containers

### What Are STL Containers?


STL containers are generic data structures that store collections of objects. They manage memory automatically, provide uniform access through iterators, and offer guaranteed time complexities defined by the C++ Standard. The STL separates data storage (containers) from algorithms via iterators -- this decoupling is the heart of generic programming in C++.

Every STL container provides:
- **begin() / end()** iterators for traversal
- **size() / empty()** for capacity queries
- **insert() / erase()** for mutation (exact signatures vary)
- **swap()** for constant-time exchange (most containers)

### Container Taxonomy Overview


The C++ standard divides containers into four families:

| Family | Containers | Ordering | Lookup | Internal Structure |
|--------|-----------|----------|--------|-------------------|
| Sequence | vector, deque, list, forward_list, array | Insertion order | By position | Contiguous / linked |
| Ordered Associative | set, multiset, map, multimap | Key order (operator&lt;) | O(log n) | Red-Black tree |
| Unordered Associative | unordered_set, unordered_map, unordered_multiset, unordered_multimap | Unspecified | O(1) avg | Hash table with chaining |
| Container Adaptors | stack, queue, priority_queue | LIFO / FIFO / heap | Top only | Wraps sequence container |

### Why Container Choice Matters


A wrong container choice can degrade performance by 10x-1000x. Common mistakes:
- Using `list` when `vector` suffices (cache misses kill performance)
- Using `map` when `unordered_map` works (extra log n factor)
- Using `vector` for a queue (O(n) pop_front instead of O(1))
- Not reserving `vector` capacity (repeated reallocation)

**Rule of thumb:** Start with `vector` and `unordered_map`. Only switch when you have measured and proven a bottleneck.

### The Iterator Layer


Iterators are the glue between containers and algorithms. Each container exposes iterator types:

| Iterator Category | Containers | Operations |
|------------------|------------|------------|
| Random Access | vector, deque, array, string | `it+n`, `it-n`, `it[n]`, `it1-it2` |
| Bidirectional | list, set, map, multiset, multimap | `++it`, `--it` |
| Forward | forward_list, unordered_set/map | `++it` only |
| Input/Output | (stream iterators) | Single-pass read/write |

---

## 9.2 Sequence Containers -- Deep Dive

Sequence containers store elements in a linear order determined by insertion. Each offers different trade-offs among insertion speed, lookup speed, memory overhead, and iterator capabilities.

---

### 9.2.1 std::vector -- The Dynamic Array


#### Real-World Analogy

An apartment building with numbered units. The building (memory block) holds tenants (elements) in adjacent rooms. When all rooms are full, management builds a new larger building and moves everyone -- this is costly but happens rarely. You can instantly access any apartment by its number (O(1) index). Adding a tenant at the end is usually fast unless a new building is needed. Adding in the middle requires shifting all subsequent tenants down the hall.

#### Internal Implementation

`std::vector` manages three pointers:
- `_start` -- beginning of allocated storage
- `_finish` -- one past the last constructed element
- `_end_of_storage` -- one past the end of allocated memory

```
[_start]                            [_finish]    [_end_of_storage]
   |                                     |             |
   v                                     v             v
+-----+-----+-----+-----+-----+-----+-----+-----+
|  10 |  20 |  30 |  40 |  50 |     |     |     |
+-----+-----+-----+-----+-----+-----+-----+-----+
  size = 5                       capacity = 8
```

When `push_back` is called:
1. If `size < capacity`: construct element at `_finish`, increment `_finish`. O(1).
2. If `size == capacity`: allocate new block (1.5x-2x larger), move all elements, destroy old, adjust pointers. O(n) -- but amortized O(1).

The growth factor is implementation-defined:
- GCC libstdc++: 2x
- LLVM libc++: 2x
- MSVC: 1.5x

#### Time Complexity with WHY

| Operation | Complexity | Why |
|-----------|-----------|-----|
| `operator[]` | O(1) | Pointer arithmetic: `*(start + index)` |
| `at()` | O(1) | Same as [] plus bounds check |
| `front()` / `back()` | O(1) | Dereference start/end-1 |
| `push_back()` | O(1) amortized | Usually O(1); occasional reallocation O(n) averages out |
| `pop_back()` | O(1) | Destroy last element, decrement _finish |
| `insert(pos, val)` | O(n) | Shift all elements after pos by 1 |
| `erase(pos)` | O(n) | Shift all elements after pos by 1 |
| `size()` / `capacity()` | O(1) | Pointer subtraction |
| `reserve(n)` | O(n) | Allocate and move if n > capacity |
| `shrink_to_fit()` | O(n) | Reallocate to exactly fit |

**Why is push_back amortized O(1)?**

Consider a sequence of N push_back operations. Capacity grows geometrically (e.g., 1, 2, 4, 8, 16...). Total copy cost = sum of capacities at each reallocation = 1 + 2 + 4 + ... + N/2 + N = 2N - 1. Spread over N operations: (2N - 1) / N = 2 - 1/N ≈ O(1) per operation.

**Why is insert in the middle O(n)?**

Because vector stores elements contiguously. Inserting at position `i` requires moving elements `[i, size)` one position right via memmove or element-wise assignment. In the worst case (insert at front), this copies all N elements.

#### C++ Code with Output

```cpp
#include <vector>
#include <iostream>
#include <string>

void print_vec(const std::vector<int>& v, const std::string& label) {
    std::cout << label << " [size=" << v.size()
              << ", cap=" << v.capacity() << "]: ";
    for (int x : v) std::cout << x << " ";
    std::cout << "\n";
}

int main() {
    // Default construction
    std::vector<int> v;
    print_vec(v, "empty");

    // push_back -- grows dynamically
    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    print_vec(v, "after 3 pushes");

    // reserve to avoid reallocation
    v.reserve(20);
    std::cout << "after reserve(20): capacity=" << v.capacity() << "\n";

    // insert in the middle
    v.insert(v.begin() + 1, 15);   // inserts 15 before index 1
    print_vec(v, "after insert at pos 1");

    // erase in the middle
    v.erase(v.begin() + 3);        // removes index 3 (was 30)
    print_vec(v, "after erase at pos 3");

    // pop_back
    v.pop_back();                   // removes last element
    print_vec(v, "after pop_back");

    // random access
    std::cout << "v[0]=" << v[0] << ", v[2]=" << v[2] << "\n";

    // bounds-checked access
    try {
        int x = v.at(100);           // throws std::out_of_range
    } catch (const std::out_of_range& e) {
        std::cout << "at(100) threw: " << e.what() << "\n";
    }

    // assign / fill constructor
    std::vector<int> filled(5, 42);
    print_vec(filled, "filled(5, 42)");

    // range constructor
    std::vector<int> copied(filled.begin(), filled.end());
    print_vec(copied, "range-constructed");

    // initializer list
    std::vector<int> init{1, 2, 3, 4, 5};
    print_vec(init, "init list");

    // emplace_back -- constructs in-place, avoids copy
    std::vector<std::pair<int, std::string>> pairs;
    pairs.emplace_back(1, "one");    // constructs pair<int,string> in place
    pairs.emplace_back(2, "two");
    std::cout << "emplace_back: pairs[0]=(" << pairs[0].first
              << ", " << pairs[0].second << ")\n";

    return 0;
}
```

**Expected Output:**
```
empty [size=0, cap=0]:
after 3 pushes [size=3, cap=3]: 10 20 30
after reserve(20): capacity=20
after insert at pos 1 [size=4, cap=20]: 10 15 20 30
after erase at pos 3 [size=3, cap=20]: 10 15 20
after pop_back [size=2, cap=20]: 10 15
v[0]=10, v[2]=20
at(100) threw: vector::_M_range_check: __n (which is 100) >= this->size() (which is 2)
filled(5, 42) [size=5, cap=5]: 42 42 42 42 42
range-constructed [size=5, cap=5]: 42 42 42 42 42
init list [size=5, cap=5]: 1 2 3 4 5
emplace_back: pairs[0]=(1, one)
```

#### Memory Overhead

`std::vector` itself is 3 pointers on the stack (24 bytes on 64-bit). The heap allocation is exactly `capacity * sizeof(T)` bytes -- no per-element overhead. This is the most memory-efficient dynamic container.

```
sizeof(vector<int>) = 24 bytes (stack)
Heap: capacity * sizeof(int) = capacity * 4 bytes (exactly)
Total per element: sizeof(T) with zero overhead
```

#### Iterator Invalidation

| Vector Operation | Iterator/Reference Invalidation |
|-----------------|--------------------------------|
| `push_back()` / `emplace_back()` | All if reallocation occurs; none otherwise |
| `pop_back()` | To the popped element only |
| `insert()` / `emplace()` | All after insertion point; all if reallocation |
| `erase()` | At and after erased position |
| `reserve()` | All if reallocation occurs |
| `resize()` | All if reallocation occurs; else past-old-end |
| `clear()` | All |
| `swap()` | None (iterators refer to new container) |

---

### 9.2.2 std::deque -- Double-Ended Queue


#### Real-World Analogy

A train with multiple carriages. Each carriage is a fixed-size block of seats. The train can add or remove carriages at either end (O(1)). You can walk between carriages to reach any seat, but jumping from seat 0 in carriage 1 to seat 0 in carriage 2 requires crossing the coupling -- slightly more work than a single contiguous hallway.

#### Internal Implementation

`std::deque` is implemented as a sequence of fixed-size blocks (typically 512 bytes of element storage) managed by a central map (pointer array to blocks):

```
Central Map (array of block pointers):
+-------+-------+-------+-------+-------+
|  ptr  |  ptr  |  ptr  |  ptr  |  ptr  |
+-------+-------+-------+-------+-------+
    |       |       |       |       |
    v       v       v       v       v
+------+ +------+ +------+ +------+ +------+
| 0..63 | |64..127| |128..191| |192..255| |256..319|
+------+ +------+ +------+ +------+ +------+
 Block0   Block1   Block2   Block3   Block4
```

Key design features:
- Blocks are fixed-size chunks (typically 64 elements of int, or 512 bytes)
- The central map grows/shrinks as blocks are added/removed at ends
- Indexing: `deque[i] = block[i / block_size][i % block_size]` -- two dereferences
- No reallocation of existing elements when growing at ends

#### Time Complexity with WHY

| Operation | Complexity | Why |
|-----------|-----------|-----|
| `operator[]` | O(1) | Two-pointer dereference: block + offset |
| `push_front()` | O(1) | Allocate new block or use existing space in front block |
| `push_back()` | O(1) | Same as push_front but at tail |
| `pop_front()` | O(1) | Decrement front pointer; free block if empty |
| `pop_back()` | O(1) | Same at end |
| `insert()` middle | O(n) | Shift elements within blocks |
| `erase()` middle | O(n) | Same |
| `front()` / `back()` | O(1) | Direct block pointer access |

**Why are push_front and push_back both O(1)?**

Because deque maintains spare capacity at both ends. The central map is a circular buffer of block pointers. Adding at the front either: (a) uses a free slot in the existing front block, or (b) allocates a new block and adds its pointer to the central map. Both are O(1). No existing elements are ever moved.

**Why is deque random access slightly slower than vector?**

Because indexing requires an extra division and modulo: `block_offset = index / block_size; slot = index % block_size; return map[block_offset][slot]`. Vector is `*(start + index)`. The two operations are both O(1), but deque's has a higher constant factor.

#### C++ Code with Output

```cpp
#include <deque>
#include <iostream>

void print_deque(const std::deque<int>& d, const std::string& label) {
    std::cout << label << " [size=" << d.size() << "]: ";
    for (int x : d) std::cout << x << " ";
    std::cout << "\n";
}

int main() {
    std::deque<int> d;

    // push_back
    d.push_back(20);
    d.push_back(30);
    print_deque(d, "after push_back 20,30");

    // push_front
    d.push_front(10);
    d.push_front(5);
    print_deque(d, "after push_front 10,5");

    // random access
    std::cout << "d[0]=" << d[0] << " d[2]=" << d[2] << "\n";

    // pop_front and pop_back
    d.pop_front();        // removes 5
    d.pop_back();         // removes 30
    print_deque(d, "after pop_front + pop_back");

    // insert in the middle (expensive)
    auto it = d.begin() + 1;
    d.insert(it, 99);
    print_deque(d, "after insert at position 1");

    // range-for iteration
    std::cout << "iteration: ";
    for (auto it = d.begin(); it != d.end(); ++it)
        std::cout << *it << " ";
    std::cout << "\n";

    // large deque to demonstrate block allocation
    std::deque<int> large;
    for (int i = 0; i < 1000; ++i)
        large.push_back(i);
    std::cout << "large deque size: " << large.size()
              << ", front=" << large.front()
              << ", back=" << large.back() << "\n";

    return 0;
}
```

**Expected Output:**
```
after push_back 20,30 [size=2]: 20 30
after push_front 10,5 [size=4]: 5 10 20 30
d[0]=5 d[2]=20
after pop_front + pop_back [size=2]: 10 20
after insert at position 1 [size=3]: 10 99 20
iteration: 10 99 20
large deque size: 1000, front=0, back=999
```

#### Memory Overhead

Deque allocates memory in fixed-size blocks. It has some internal overhead:
- Central map: one pointer per block (~8 bytes per 64 elements = 0.125 bytes/element)
- Block padding: if elements don't fill a block exactly, some space is wasted
- Per-element storage: exactly sizeof(T)

Compared to vector:
- Slightly more overhead due to block indirection
- Never needs to copy elements on growth (unlike vector reallocation)
- Memory is not contiguous -- blocks may be scattered in heap

#### Iterator Invalidation

| Deque Operation | Iterator/Reference Invalidation |
|----------------|--------------------------------|
| `push_front()` / `pop_front()` | All iterators invalidated (central map may shift); references to other elements stay valid |
| `push_back()` / `pop_back()` | All iterators invalidated; references to other elements stay valid |
| `insert()` middle | All iterators and references invalidated |
| `erase()` middle | All iterators and references invalidated |
| `erase()` front/back | Only erased element invalidated |
| `clear()` | All |
| `resize()` | All if resize changes size; references valid if not |

**Key difference from vector:** deque push_front/push_back invalidates ALL iterators (because the central map pointer array may be reallocated), but not references to existing elements (because elements themselves never move). Vector invalidates both on reallocation.
---

### 9.2.3 std::list -- Doubly-Linked List


#### Real-World Analogy

A treasure hunt where each clue tells you where to find the next AND previous clue. You follow the chain forward or backward. To find the 100th clue, you must walk from the first clue all the way to the 100th -- no shortcut. Adding a new clue between two existing ones is easy: just rewrite two clue cards and the neighbor references.

#### Internal Implementation

`std::list` is a doubly-linked circular list with a sentinel (dummy) node:

```
 Sentinel Node (end marker)
+-----------+
| prev | next| ---+
+-----------+    |
  ^              |
  |              v
+-----------+  +-----------+  +-----------+
| prev | next|  | prev | next|  | prev | next|
| val: 10   |  | val: 20   |  | val: 30   |
+-----------+  +-----------+  +-----------+
```

Each node contains:
- A pointer to the previous node (8 bytes on 64-bit)
- A pointer to the next node (8 bytes)
- The element itself (sizeof(T))

The sentinel node's next points to the first element, and prev points to the last element, forming a circular structure. `end()` returns an iterator to the sentinel.

#### Time Complexity with WHY

| Operation | Complexity | Why |
|-----------|-----------|-----|
| `front()` / `back()` | O(1) | Sentinel->next, Sentinel->prev |
| `push_front()` / `push_back()` | O(1) | Rewrite 4 pointers (2 neighbors + node) |
| `pop_front()` / `pop_back()` | O(1) | Rewrite 2 pointers, deallocate node |
| `insert(iterator, val)` | O(1) | Given iterator, rewrite 4 pointers |
| `erase(iterator)` | O(1) | Given iterator, unlink node, deallocate |
| `find(val)` | O(n) | Must traverse from head |
| `splice()` | O(1) | Just reassign pointers between lists |
| `sort()` | O(n log n) | Merge sort (list cannot use std::sort) |
| `remove(val)` | O(n) | Must traverse entire list |
| `size()` | O(n) in C++11, O(1) in C++23 | C++11 mandated O(1) |

**Why is insert at iterator O(1)?**

```
Before:
  [A] <--> [B] <--> [C]
            ^it

Insert X at it:
  Step 1: X.next = B
  Step 2: X.prev = A
  Step 3: A.next = X
  Step 4: B.prev = X

After:
  [A] <--> [X] <--> [B] <--> [C]

Only 4 pointer assignments, regardless of list size.
```

**Why does list lack O(1) random access?**

Because nodes are scattered in memory. There is no arithmetic relationship between the address of node 0 and node 100. You must follow 100 "next" pointers to reach node 100.

#### C++ Code with Output

```cpp
#include <list>
#include <iostream>
#include <algorithm>

void print_list(const std::list<int>& lst, const std::string& label) {
    std::cout << label << " [size=" << lst.size() << "]: ";
    for (int x : lst) std::cout << x << " ";
    std::cout << "\n";
}

int main() {
    std::list<int> lst;

    // push_front and push_back
    lst.push_front(20);
    lst.push_back(40);
    lst.push_front(10);
    lst.push_back(50);
    print_list(lst, "initial");

    // O(1) insert at iterator position
    auto it = std::find(lst.begin(), lst.end(), 20);
    if (it != lst.end())
        lst.insert(it, 15);    // insert 15 before 20
    print_list(lst, "after insert 15 before 20");

    // splice -- move all elements from another list (O(1))
    std::list<int> other{100, 200, 300};
    auto splice_pos = lst.begin();
    std::advance(splice_pos, 2);  // O(n) advance, but splice itself is O(1)
    lst.splice(splice_pos, other); // move all of other into lst
    std::cout << "after splice (other empty=" << other.empty() << "): ";
    for (int x : lst) std::cout << x << " ";
    std::cout << "\n";

    // erase at position (O(1))
    auto to_erase = lst.begin();
    std::advance(to_erase, 3);
    lst.erase(to_erase);
    print_list(lst, "after erase pos 3");

    // pop_front and pop_back (O(1))
    lst.pop_front();
    lst.pop_back();
    print_list(lst, "after pop_front + pop_back");

    // merge two sorted lists
    std::list<int> sorted_a{1, 3, 5, 7};
    std::list<int> sorted_b{2, 4, 6, 8};
    sorted_a.merge(sorted_b);   // both must be sorted
    std::cout << "merged: ";
    for (int x : sorted_a) std::cout << x << " ";
    std::cout << "\n";

    // unique -- removes consecutive duplicates
    std::list<int> dup{1, 1, 2, 2, 2, 3, 4, 4, 5};
    dup.unique();
    std::cout << "after unique: ";
    for (int x : dup) std::cout << x << " ";
    std::cout << "\n";

    return 0;
}
```

**Expected Output:**
```
initial [size=4]: 10 20 40 50
after insert 15 before 20 [size=5]: 10 15 20 40 50
after splice (other empty=true): 10 15 100 200 300 20 40 50
after erase pos 3 [size=7]: 10 15 100 300 20 40 50
after pop_front + pop_back [size=5]: 15 100 300 20 40
merged: 1 2 3 4 5 6 7 8
after unique: 1 2 3 4 5
```

#### Memory Overhead

list has the highest per-element overhead of any standard container:

```
Node (64-bit):
  next pointer:  8 bytes
  prev pointer:  8 bytes
  element value: sizeof(T) bytes
  alignment padding: variable
  ---
  Total per node: sizeof(T) + 16 + padding
```

For `list<int>`: 4 + 16 = 20 bytes per element (400% overhead).
For `list<LargeStruct>` (say 1000 bytes): 1000 + 16 = 1016 (1.6% overhead).

The memory allocator's overhead (block headers, alignment) adds more on top.

#### Iterator Invalidation

List iterators are the most stable in the STL:

| List Operation | Iterator/Reference Invalidation |
|---------------|--------------------------------|
| `push_front()` / `push_back()` | None |
| `pop_front()` / `pop_back()` | Only the popped element |
| `insert()` | None (node is linked in) |
| `erase()` | Only the erased element |
| `splice()` | None (iterators transfer) |
| `merge()` | None (nodes are relinked) |
| `sort()` | None (relinks, not moves) |
| `remove()` / `remove_if()` | Only removed elements |
| `unique()` | Only removed elements |
| `clear()` | All |
| `resize()` | Only erased elements (if shrinking) |
| `swap()` | None |

**Only the iterators pointing to the erased element are invalidated.** All others remain valid. This is the strongest invalidation guarantee in the STL.

---

### 9.2.4 std::forward_list -- Singly-Linked List


#### Real-World Analogy

A one-way treasure hunt where each clue only tells you where the NEXT clue is. You can only go forward. To insert a clue between two others, you need the clue BEFORE the insertion point (you must walk from the start to find it). Forward traversal is fast, but you can never go backward.

#### Internal Implementation

Identical to list but with only a `next` pointer per node:

```
+-----------+     +-----------+     +-----------+
| val: 10   |     | val: 20   |     | val: 30   |
| next:  ---+---> | next:  ---+---> | next: null|
+-----------+     +-----------+     +-----------+
```

Because it lacks `prev` pointers:
- No `push_back()` or `pop_back()` (can't reach the tail from the head in O(1))
- No `size()` -- computing size is O(n)
- `insert_after()` and `erase_after()` instead of insert/erase
- Requires an `before_begin()` iterator for front operations

#### Time Complexity

| Operation | Complexity | Notes |
|-----------|-----------|-------|
| `push_front()` | O(1) | Singly-linked head insert |
| `pop_front()` | O(1) | Singly-linked head remove |
| `insert_after()` | O(1) | Given iterator before insertion point |
| `erase_after()` | O(1) | Given iterator before erased element |
| `find()` | O(n) | Must walk from head |
| `splice_after()` | O(1) | Pointer reassignment |

#### C++ Code with Output

```cpp
#include <forward_list>
#include <iostream>

void print_flist(const std::forward_list<int>& fl, const std::string& label) {
    std::cout << label << ": ";
    for (int x : fl) std::cout << x << " ";
    std::cout << "\n";
}

int main() {
    std::forward_list<int> fl;

    // push_front (no push_back!)
    fl.push_front(30);
    fl.push_front(20);
    fl.push_front(10);
    print_flist(fl, "initial");

    // insert_after
    auto it = fl.begin();
    fl.insert_after(it, 15);    // insert 15 after first element
    print_flist(fl, "after insert_after begin");

    // erase_after
    auto prev = fl.begin();
    fl.erase_after(prev);       // erase second element
    print_flist(fl, "after erase_after begin");

    // before_begin allows insert at front after construction
    auto bb = fl.before_begin();
    fl.insert_after(bb, 5);     // insert at very beginning
    print_flist(fl, "after insert_after before_begin");

    // no size() -- compute manually
    int count = 0;
    for (auto it = fl.begin(); it != fl.end(); ++it) ++count;
    std::cout << "computed size: " << count << "\n";

    // sort and unique
    std::forward_list<int> data{5, 3, 1, 4, 2, 3, 5, 1};
    data.sort();
    data.unique();
    print_flist(data, "sorted + unique");

    return 0;
}
```

**Expected Output:**
```
initial: 10 20 30
after insert_after begin: 10 15 20 30
after erase_after begin: 10 20 30
after insert_after before_begin: 5 10 20 30
computed size: 4
sorted + unique: 1 2 3 4 5
```

#### Memory Overhead

```
Node (64-bit):
  next pointer:  8 bytes
  element value: sizeof(T) bytes
  ---
  Total per node: sizeof(T) + 8 + padding
```

Forward_list halves the pointer overhead of list: one pointer instead of two. For `forward_list<int>`: 4 + 8 = 12 bytes (300% overhead vs vector's 4 bytes).

#### Iterator Invalidation

Same guarantees as list: only erased elements are invalidated. However, because forward_list is singly-linked, `insert_after` and `erase_after` require an iterator to the element BEFORE the target.

---

### 9.2.5 std::array -- Fixed-Size Array


#### Real-World Analogy

A parking lot with a fixed number of spaces, assigned when the lot is built. You know exactly how many cars it can hold. No expansion is possible. Access is instant by space number.

#### Internal Implementation

`std::array<T, N>` is a thin wrapper around a C-style array `T[N]`. It contains no pointers, no heap allocation -- the data is stored directly inside the array object:

```
Memory layout (on stack or as struct member):
+-----+-----+-----+-----+
|  0  |  1  |  2  |  ...|  N-1
+-----+-----+-----+-----+
sizeof(array<T,N>) = N * sizeof(T) (zero overhead)
```

The size must be a compile-time constant (template parameter).

#### Time Complexity

| Operation | Complexity |
|-----------|-----------|
| `operator[]` | O(1) -- direct pointer arithmetic |
| `front()` / `back()` | O(1) |
| `fill(val)` | O(n) |
| `swap()` | O(n) -- actually swaps elements (unlike vector's pointer swap) |
| `size()` | O(1) -- compile-time constant |

#### C++ Code with Output

```cpp
#include <array>
#include <iostream>
#include <algorithm>

int main() {
    // Construction with initializer
    std::array<int, 5> arr{10, 20, 30, 40, 50};

    // operator[]
    std::cout << "arr[2] = " << arr[2] << "\n";

    // at() with bounds checking
    try {
        arr.at(10) = 100;
    } catch (const std::out_of_range& e) {
        std::cout << "at(10) exception: " << e.what() << "\n";
    }

    // iteration
    std::cout << "elements: ";
    for (int x : arr) std::cout << x << " ";
    std::cout << "\n";

    // fill
    arr.fill(99);
    std::cout << "after fill(99): ";
    for (int x : arr) std::cout << x << " ";
    std::cout << "\n";

    // size is compile-time constant
    std::cout << "size: " << arr.size()
              << " (compile-time constant)\n";

    // Get underlying C array (pointer)
    int* raw = arr.data();
    raw[0] = 42;
    std::cout << "after modifying via data(): arr[0]=" << arr[0] << "\n";

    // array supports algorithms
    std::array<int, 6> values{3, 1, 4, 1, 5, 9};
    std::sort(values.begin(), values.end());
    std::cout << "sorted: ";
    for (int x : values) std::cout << x << " ";
    std::cout << "\n";

    return 0;
}
```

**Expected Output:**
```
arr[2] = 30
at(10) exception: array::at: __n (which is 10) >= _Nm (which is 5)
elements: 10 20 30 40 50
after fill(99): 99 99 99 99 99
size: 5 (compile-time constant)
after modifying via data(): arr[0]=42
sorted: 1 1 3 4 5 9
```

#### Memory Overhead

Zero. `sizeof(array<T,N>) == N * sizeof(T)`. No heap allocation, no pointer indirection, no metadata. The array object IS the data.

#### Iterator Invalidation

Since array has fixed size and no insert/erase operations, its iterators are always valid (unless the array object itself is destroyed).

---

## 9.3 Associative Containers (Ordered)

Ordered associative containers store elements sorted by key using a comparison function (default: `operator<`). They are implemented as balanced binary search trees (typically Red-Black trees), guaranteeing O(log n) insert, erase, and find.

### 9.3.1 std::set -- Unique Sorted Keys


#### Real-World Analogy

A library filing system where books are arranged alphabetically on shelves. Every title appears at most once. To find a book, you use the alphabetically organized catalog, making about log2(N) comparisons for N books. When you add a book, it must be shelved in the correct position to maintain alphabetical order.

#### Internal Implementation: Red-Black Tree

A Red-Black tree is a self-balancing binary search tree with these properties:

1. Every node is either red or black
2. The root is always black
3. Red nodes cannot have red children (no two reds in a row)
4. Every path from root to leaf has the same number of black nodes

```
        (black) 30
        /          \
   (red) 20      (red) 40
    /    \         /    \
(black)10 (black)25 (black)35 (black)50
```

These properties guarantee O(log n) height (max depth ≤ 2 * log2(n+1)).

**Tree node structure (libstdc++):**
```
_Rb_tree_node:
  _color:       1 byte (enum: _S_red, _S_black)
  _parent:      8 bytes
  _left:        8 bytes
  _right:       8 bytes
  padding:      ~7 bytes alignment
  _M_storage:   sizeof(T) bytes
```

#### Time Complexity with WHY

| Operation | Complexity | Why |
|-----------|-----------|-----|
| `insert(val)` | O(log n) | Traverse tree height h = ~log2(n), then recolor/rotate O(1) |
| `erase(val)` | O(log n) | Find node O(log n), then splice children O(1), recolor O(log n) |
| `find(val)` | O(log n) | Compare at each level, go left/right, max log2(n) steps |
| `lower_bound()` | O(log n) | Tree descent with floor tracking |
| `upper_bound()` | O(log n) | Same as lower bound |
| `equal_range()` | O(log n) | lower_bound + upper_bound = 2*log(n) |
| `begin()` | O(1) | Leftmost node (cached) |
| `size()` | O(1) | Cached count |
| `clear()` | O(n) | Must destroy and deallocate each node |

**Why is set sorted?**

Because insertion respects `operator<`. When you insert 3, 1, 4:
```
insert 3:   3(black)
insert 1:   3(black)
           1(red)        // red child of 3
            -- recolor: both children red? no -> rotate
            1(black)
              3(red)     // fix: root must be black
            1(black)
              3(red)
insert 4:   1(black)
              3(red)
                4(red)   // two reds in a row -> rotate
            1(black)
              4(black)
            3(red)
```

In-order traversal always visits nodes in sorted order: `1, 3, 4`.

#### C++ Code with Output

```cpp
#include <set>
#include <iostream>

int main() {
    // Default construction (empty set)
    std::set<int> s;

    // insert (returns pair<iterator, bool>)
    auto [it1, inserted1] = s.insert(30);
    std::cout << "insert 30: " << (inserted1 ? "inserted" : "already exists") << "\n";

    auto [it2, inserted2] = s.insert(10);
    std::cout << "insert 10: " << (inserted2 ? "inserted" : "already exists") << "\n";

    auto [it3, inserted3] = s.insert(20);
    std::cout << "insert 20: " << (inserted3 ? "inserted" : "already exists") << "\n";

    auto [it4, inserted4] = s.insert(20);  // duplicate!
    std::cout << "insert 20 again: " << (inserted4 ? "inserted" : "already exists") << "\n";

    // iteration is always sorted
    std::cout << "set contents (sorted): ";
    for (int x : s) std::cout << x << " ";
    std::cout << "\n";

    // find
    auto f = s.find(20);
    if (f != s.end())
        std::cout << "found: " << *f << "\n";

    // count (0 or 1 for set, can be >1 for multiset)
    std::cout << "count of 20: " << s.count(20) << "\n";
    std::cout << "count of 99: " << s.count(99) << "\n";

    // lower_bound / upper_bound
    std::set<int> data{1, 3, 5, 7, 9, 11, 13};
    auto lb = data.lower_bound(6);   // first >= 6
    auto ub = data.upper_bound(10);  // first > 10
    std::cout << "lower_bound(6) = " << *lb << "\n";
    std::cout << "upper_bound(10) = " << *ub << "\n";

    // range query: all elements in [4, 10)
    auto lo = data.lower_bound(4);
    auto hi = data.upper_bound(10);
    std::cout << "elements in [4, 10): ";
    for (auto it = lo; it != hi; ++it)
        std::cout << *it << " ";
    std::cout << "\n";

    // erase
    data.erase(7);                     // by value (returns count of erased)
    std::cout << "after erase(7): ";
    for (int x : data) std::cout << x << " ";
    std::cout << "\n";

    // initializer list constructor
    std::set<int> init{9, 5, 1, 7, 3, 5, 1};  // duplicates ignored
    std::cout << "init list set: ";
    for (int x : init) std::cout << x << " ";
    std::cout << "\n";

    // custom comparator (descending order)
    std::set<int, std::greater<int>> desc{3, 1, 4, 1, 5, 9};
    std::cout << "descending set: ";
    for (int x : desc) std::cout << x << " ";
    std::cout << "\n";

    return 0;
}
```

**Expected Output:**
```
insert 30: inserted
insert 10: inserted
insert 20: inserted
insert 20 again: already exists
set contents (sorted): 10 20 30
found: 20
count of 20: 1
count of 99: 0
lower_bound(6) = 7
upper_bound(10) = 11
elements in [4, 10): 5 7 9
after erase(7): 1 3 5 9 11 13
init list set: 1 3 5 7 9
descending set: 9 5 4 3 1
```

#### Memory Overhead

```
Per-node overhead (set<int> on 64-bit):
  _Rb_tree_color:  1 byte (enum)
  _Rb_tree_parent: 8 bytes (pointer)
  _Rb_tree_left:   8 bytes (pointer)
  _Rb_tree_right:  8 bytes (pointer)
  padding:         7 bytes (alignment)
  value:           4 bytes (int)
  ---
  Total per node:  ~36 bytes
  For 1,000,000 ints:  36 MB (vs 4 MB for vector)
```

set has the highest memory overhead of any commonly used container. Each element carries ~32 bytes of tree pointers and coloring.

#### Iterator Invalidation

| Set Operation | Iterator/Reference Invalidation |
|--------------|--------------------------------|
| `insert()` | None (tree structure unchanged for existing iterators) |
| `erase(iter)` | Only the erased element |
| `erase(val)` | Only the erased element(s) |
| `clear()` | All |
| `find()`, `lower_bound()`, etc. | Never invalidate iterators |
| `swap()` | None |
---

### 9.3.2 std::multiset -- Sorted Set Allowing Duplicates


`std::multiset` is identical to `std::set` but allows duplicate keys. `insert()` always succeeds, `count()` can return > 1, and `equal_range()` returns the range of all matching elements.

#### Internal Implementation

Same Red-Black tree as `std::set`. libstdc++ stores duplicates in the tree (right child goes into the right subtree on equality). The tree stores `n` nodes for `n` elements even if values repeat.

#### C++ Code with Output

```cpp
#include <set>
#include <iostream>

int main() {
    std::multiset<int> ms;

    // Insert duplicates
    ms.insert(10);
    ms.insert(20);
    ms.insert(10);        // allowed!
    ms.insert(30);
    ms.insert(10);        // allowed!
    ms.insert(20);

    std::cout << "multiset contents: ";
    for (int x : ms) std::cout << x << " ";
    std::cout << "\n";

    // count shows duplicates
    std::cout << "count(10) = " << ms.count(10) << "\n";
    std::cout << "count(20) = " << ms.count(20) << "\n";
    std::cout << "count(30) = " << ms.count(30) << "\n";

    // equal_range
    auto [lo, hi] = ms.equal_range(10);
    std::cout << "equal_range(10): ";
    for (auto it = lo; it != hi; ++it)
        std::cout << *it << " ";
    std::cout << "\n";

    // erase(value) erases ALL occurrences
    ms.erase(10);
    std::cout << "after erase(10): ";
    for (int x : ms) std::cout << x << " ";
    std::cout << "\n";

    // erase(iterator) erases only one occurrence
    ms.insert(10);
    ms.insert(10);
    auto it = ms.find(20);
    ms.erase(it);                      // erases only one 20
    std::cout << "after single erase: ";
    for (int x : ms) std::cout << x << " ";
    std::cout << "\n";

    return 0;
}
```

**Expected Output:**
```
multiset contents: 10 10 10 20 20 30
count(10) = 3
count(20) = 2
count(30) = 1
equal_range(10): 10 10 10
after erase(10): 20 20 30
after single erase: 10 10 20 30
```

#### Iterator Invalidation

Same as set: `insert()` does not invalidate existing iterators; `erase()` invalidates only erased elements.

---

### 9.3.3 std::map -- Sorted Key-Value Dictionary


#### Real-World Analogy

A physical dictionary (word → definition). Words are organized alphabetically. You can look up any word in O(log n) time using the book's index (binary search through dictionary pages). Adding a new word requires inserting it in the correct alphabetical position. Iterating through the dictionary gives words in alphabetical order.

#### Internal Implementation

`std::map<K, V>` uses a Red-Black tree where each node stores a `std::pair<const K, V>`. The tree is ordered by key using `operator<` (or a custom comparator).

```
Node:
  +-----------------------------+
  |  RB-tree metadata          |
  |  (color, parent, left,     |
  |   right)                   |
  |  pair<const Key, Value>    |
  +-----------------------------+
```

`operator[]` has special behavior:
- If key exists: returns reference to existing value
- If key does NOT exist: value-inserts a new pair (key, Value{}) and returns reference
- This means `map[non_existent_key]` always modifies the map!

#### Time Complexity with WHY

| Operation | Complexity | Why |
|-----------|-----------|-----|
| `operator[]` | O(log n) | Find-or-create: tree descent to find key, insert if missing |
| `at(key)` | O(log n) | Tree descent to find key; throws if missing |
| `insert({k,v})` | O(log n) | Tree descent + balance |
| `find(key)` | O(log n) | Compare at each level, descend left/right |
| `erase(key)` | O(log n) | Find + splice + balance |
| `begin()` | O(1) | Leftmost node cached |
| `size()` | O(1) | Cached count |

#### C++ Code with Output

```cpp
#include <map>
#include <iostream>
#include <string>

int main() {
    // Default map
    std::map<std::string, int> ages;

    // Insert via operator[]
    ages["Alice"] = 30;
    ages["Bob"] = 25;
    ages["Charlie"] = 35;

    // Insert via insert()
    auto [it, ok] = ages.insert({"David", 28});
    std::cout << "David inserted: " << (ok ? "yes" : "no") << "\n";

    // operator[] on existing key (no insertion)
    ages["Alice"] = 31;    // updates Alice to 31

    // Iteration is sorted by key (alphabetical)
    std::cout << "\nAll entries (sorted by key):\n";
    for (const auto& [name, age] : ages)
        std::cout << "  " << name << ": " << age << "\n";

    // find
    auto f = ages.find("Bob");
    if (f != ages.end())
        std::cout << "\nFound Bob: age=" << f->second << "\n";

    // at() -- safe lookup with exception
    try {
        int age = ages.at("Unknown");
    } catch (const std::out_of_range& e) {
        std::cout << "at(Unknown) threw: " << e.what() << "\n";
    }

    // operator[] inserts default if missing
    int eveAge = ages["Eve"];   // inserts Eve with value 0
    std::cout << "Eve's age (after default insert): " << eveAge << "\n";

    // Check if operator[] modified the map
    std::cout << "Eve exists: " << (ages.find("Eve") != ages.end() ? "yes" : "no") << "\n";

    // lower_bound / upper_bound for range queries
    std::map<int, std::string> scores;
    scores[75] = "C";
    scores[85] = "B";
    scores[95] = "A";
    scores[60] = "D";
    scores[50] = "F";

    auto lo = scores.lower_bound(70);   // first grade >= 70
    auto hi = scores.upper_bound(90);   // first grade > 90
    std::cout << "\nScores in [70, 90]:\n";
    for (auto it = lo; it != hi; ++it)
        std::cout << "  " << it->first << " -> " << it->second << "\n";

    // erase by key
    scores.erase(60);
    std::cout << "\nAfter erasing 60:\n";
    for (const auto& [score, grade] : scores)
        std::cout << "  " << score << " -> " << grade << "\n";

    // Custom comparator: descending order
    std::map<std::string, int, std::greater<std::string>> desc;
    desc["zebra"] = 1;
    desc["apple"] = 2;
    desc["mango"] = 3;
    std::cout << "\nDescending map:\n";
    for (const auto& [k, v] : desc)
        std::cout << "  " << k << ": " << v << "\n";

    return 0;
}
```

**Expected Output:**
```
David inserted: yes

All entries (sorted by key):
  Alice: 31
  Bob: 25
  Charlie: 35
  David: 28

Found Bob: age=25
at(Unknown) threw: map::at:  key not found
Eve's age (after default insert): 0
Eve exists: yes

Scores in [70, 90]:
  75 -> C
  85 -> B

After erasing 60:
  50 -> F
  75 -> C
  85 -> B
  95 -> A

Descending map:
  zebra: 1
  mango: 3
  apple: 2
```

#### The operator[] Pitfall

```cpp
std::map<std::string, std::vector<int>> m;
if (m["nonexistent"].empty()) {   // BUG: inserts empty vector
    // do something
}
std::cout << m.size();    // 1 -- the map now has an entry!
```

This is a common source of logic bugs. Use `find()` or `at()` when you want to check existence without modifying the map.

#### Memory Overhead

Per-node overhead is identical to set, plus the value:

```
Per-node (map<int, double> on 64-bit):
  RB-tree metadata:   25 bytes (color + 3 pointers + padding)
  pair<int,double>:   12 bytes (4 + 8)
  ---
  Total per node:     ~40 bytes
```

#### Iterator Invalidation

Same as set: `insert()` does not invalidate existing iterators; `erase()` invalidates only erased element. References to elements are stable (not invalidated by insert or erase of other elements).

---

### 9.3.4 std::multimap -- Sorted Map Allowing Duplicate Keys


`std::multimap` allows multiple entries with the same key. It lacks `operator[]` (ambiguous -- which value would be returned?). Use `equal_range()` to get all values for a key.

#### C++ Code with Output

```cpp
#include <map>
#include <iostream>
#include <string>

int main() {
    std::multimap<std::string, int> inventory;

    // insert multiple items with same key
    inventory.insert({"apple", 10});
    inventory.insert({"banana", 5});
    inventory.insert({"apple", 3});    // another apple entry
    inventory.insert({"apple", 7});    // and another
    inventory.insert({"cherry", 1});

    std::cout << "All inventory:\n";
    for (const auto& [item, qty] : inventory)
        std::cout << "  " << item << ": " << qty << "\n";

    // Count
    std::cout << "\napple entries: " << inventory.count("apple") << "\n";
    std::cout << "banana entries: " << inventory.count("banana") << "\n";

    // equal_range
    auto [lo, hi] = inventory.equal_range("apple");
    std::cout << "\nAll apple quantities: ";
    int total = 0;
    for (auto it = lo; it != hi; ++it) {
        std::cout << it->second << " ";
        total += it->second;
    }
    std::cout << "(total: " << total << ")\n";

    // erase by key erases ALL matching entries
    inventory.erase("apple");
    std::cout << "\nAfter erasing all apples:\n";
    for (const auto& [item, qty] : inventory)
        std::cout << "  " << item << ": " << qty << "\n";

    return 0;
}
```

**Expected Output:**
```
All inventory:
  apple: 10
  apple: 3
  apple: 7
  banana: 5
  cherry: 1

apple entries: 3
banana entries: 1

All apple quantities: 10 3 7 (total: 20)

After erasing all apples:
  banana: 5
  cherry: 1
```

---

## 9.4 Unordered Containers

Unordered containers use hash tables for average O(1) lookup. They were introduced in C++11 and are the go-to choice when element ordering is irrelevant.

### 9.4.1 std::unordered_set -- Hash-Based Unique Set


#### Real-World Analogy

A locker room where each person has a numbered locker. The number is computed by a hash function (e.g., `hash(name) % num_lockers`). Most lockers have 0 or 1 items. Sometimes two people hash to the same locker -- they share it using a chain (each person holds onto the next). When lockers get too crowded, we build a bigger room with more lockers (rehash) and reassign everyone.

#### Internal Implementation: Hash Table with Chaining

```
Bucket array:
+------+
| idx0 | --> null
+------+
| idx1 | --> [hash("cat")=1, val=5] --> [hash("bat")=1, val=3] --> null
+------+
| idx2 | --> [hash("dog")=2, val=8] --> null
+------+
| idx3 | --> null
+------+
| idx4 | --> [hash("eel")=4, val=2] --> null
+------+
```

Key components:
- **Bucket array**: contiguous array of bucket pointers (or singly-linked list heads)
- **Hash function**: maps a key to a size_t value: `size_t h = hash<K>{}(key)`
- **Bucket index**: `h % bucket_count()` determines which bucket the element goes into
- **Load factor**: `size() / bucket_count()`. When it exceeds `max_load_factor()` (default 1.0), **rehash** occurs
- **Chaining**: elements in the same bucket form a singly-linked list

#### Time Complexity with WHY

| Operation | Average | Worst Case | Why |
|-----------|---------|-----------|-----|
| `insert(val)` | O(1) | O(n) | Default: hash and place; worst: all collide |
| `find(val)` | O(1) | O(n) | Hash to bucket, walk short chain; worst: one bucket |
| `erase(val)` | O(1) avg | O(n) | Same as find + unlink |
| `rehash(n)` | O(n) | O(n) | Rebuild bucket array, redistribute all elements |
| `operator[]` (unordered_map) | O(1) avg | O(n) | Find or insert default |
| `begin()` | O(1) | O(1) | Find first non-empty bucket |
| `size()` | O(1) | O(1) | Cached count |

**Why average O(1)?**

The hash function distributes keys uniformly across buckets. With `size / bucket_count ≈ 1.0` (default max load factor), the expected chain length is 0-2 elements. Finding an element means: compute hash (constant time), index into bucket array (constant time), walk a chain of expected length ≤ 2 (constant time).

**Why worst-case O(n)?**

A poor hash function (e.g., `hash(x) = 0` for all x) puts all elements in bucket 0, making every operation degenerate to a linked list traversal.

#### C++ Code with Output

```cpp
#include <unordered_set>
#include <iostream>
#include <string>

int main() {
    std::unordered_set<int> us;

    // insert
    us.insert(30);
    us.insert(10);
    us.insert(20);
    us.insert(40);

    // size and bucket_count
    std::cout << "size: " << us.size()
              << ", bucket_count: " << us.bucket_count()
              << ", load_factor: " << us.load_factor() << "\n";

    // iteration (order is unspecified!)
    std::cout << "elements: ";
    for (int x : us) std::cout << x << " ";
    std::cout << "\n";

    // which elements are in which buckets
    for (int x : us)
        std::cout << "  " << x << " -> bucket " << us.bucket(x) << "\n";

    // find
    auto it = us.find(20);
    if (it != us.end())
        std::cout << "Found " << *it << "\n";

    // insert duplicate
    auto [it2, inserted] = us.insert(20);
    std::cout << "Re-insert 20: " << (inserted ? "inserted" : "already present") << "\n";

    // reserve to avoid rehash
    us.reserve(100);
    std::cout << "after reserve(100): bucket_count=" << us.bucket_count() << "\n";

    // erase
    us.erase(10);
    std::cout << "after erase(10): size=" << us.size() << "\n";

    // Custom hash for user-defined types
    struct Person {
        std::string name;
        int age;
        bool operator==(const Person& o) const {
            return name == o.name && age == o.age;
        }
    };

    struct PersonHash {
        std::size_t operator()(const Person& p) const {
            return std::hash<std::string>{}(p.name) ^
                   (std::hash<int>{}(p.age) << 1);
        }
    };

    std::unordered_set<Person, PersonHash> people;
    people.insert({"Alice", 30});
    people.insert({"Bob", 25});
    std::cout << "custom hash set size: " << people.size() << "\n";

    return 0;
}
```

**Expected Output (order may vary):**
```
size: 4, bucket_count: 8, load_factor: 0.5
elements: 40 20 10 30
  40 -> bucket 0
  20 -> bucket 4
  10 -> bucket 2
  30 -> bucket 6
Found 20
Re-insert 20: already present
after reserve(100): bucket_count=113
after erase(10): size=3
custom hash set size: 2
```

#### Memory Overhead

```
unordered_set<int> overhead (64-bit):
  Bucket array: bucket_count * 8 bytes (one pointer per bucket)
  Node:
    next pointer:      8 bytes
    hash value:        8 bytes (cached, used during rehash)
    element:           4 bytes
    ---
    Total per node:   20 bytes + bucket array amortized (~8 bytes/element at load=1)
```

Unordered containers have moderate overhead: bucket array + per-node pointers. Less than RB-tree (no color, parent, left/right), more than vector.

#### Iterator Invalidation

| unordered_set Operation | Iterator/Reference Invalidation |
|------------------------|--------------------------------|
| `insert()` | All iterators if rehash occurs (load_factor > max_load_factor); none otherwise |
| `emplace()` | Same as insert |
| `erase()` | Only erased element |
| `clear()` | All |
| `rehash()` | All |
| `reserve()` | All (same as rehash) |
| `swap()` | None |

**Critical rule:** If you insert an element that triggers a rehash, ALL iterators are invalidated because the bucket array is reallocated and all nodes are redistributed.

---

### 9.4.2 std::unordered_map -- Hash Table Key-Value Dictionary


Identical to `unordered_set` but stores `pair<const K, V>`. Provides `operator[]` and `at()` for key-based access.

#### C++ Code with Output

```cpp
#include <unordered_map>
#include <iostream>
#include <string>

int main() {
    std::unordered_map<std::string, int> freq;

    // operator[]
    freq["apple"] = 3;
    freq["banana"] = 2;
    freq["cherry"] = 5;

    // at() -- safe access
    std::cout << "freq[apple] = " << freq["apple"] << "\n";
    std::cout << "freq[banana] = " << freq.at("banana") << "\n";

    // operator[] difference from map: creates default if missing
    int n = freq["durian"];      // inserts durian with value 0
    std::cout << "freq[durian] = " << n
              << " (size now: " << freq.size() << ")\n";

    // find
    auto it = freq.find("banana");
    if (it != freq.end())
        std::cout << "Found: " << it->first << "=" << it->second << "\n";

    // Iteration -- order is unspecified
    std::cout << "\nAll entries (unspecified order):\n";
    for (const auto& [fruit, count] : freq)
        std::cout << "  " << fruit << ": " << count << "\n";

    // Check bucket distribution
    std::cout << "\nBucket stats:\n";
    std::cout << "  bucket_count: " << freq.bucket_count() << "\n";
    std::cout << "  load_factor: " << freq.load_factor() << "\n";
    for (const auto& [fruit, count] : freq)
        std::cout << "  " << fruit << " -> bucket " << freq.bucket(fruit) << "\n";

    // Insert with hint
    freq.insert({"elderberry", 1});

    // Erase by key
    freq.erase("cherry");

    // Erase by iterator
    auto del = freq.find("durian");
    if (del != freq.end())
        freq.erase(del);

    std::cout << "\nAfter modifications:\n";
    for (const auto& [fruit, count] : freq)
        std::cout << "  " << fruit << ": " << count << "\n";

    return 0;
}
```

**Expected Output (order may vary):**
```
freq[apple] = 3
freq[banana] = 2
freq[durian] = 0 (size now: 4)

All entries (unspecified order):
  durian: 0
  cherry: 5
  banana: 2
  apple: 3

Bucket stats:
  bucket_count: 8
  load_factor: 0.5
  durian -> bucket 1
  cherry -> bucket 3
  banana -> bucket 2
  apple -> bucket 5

After modifications:
  elderberry: 1
  banana: 2
  apple: 3
```

#### Custom Hash and Key Equality

For user-defined types as keys, you must provide:
1. A hash function (can be `std::hash` specialization or a functor)
2. An equality comparator (`operator==` or a functor)

```cpp
struct Point {
    int x, y;
    bool operator==(const Point& o) const {
        return x == o.x && y == o.y;
    }
};

// Option 1: specialize std::hash
namespace std {
    template<> struct hash<Point> {
        size_t operator()(const Point& p) const {
            return hash<int>{}(p.x) ^ (hash<int>{}(p.y) << 1);
        }
    };
}

std::unordered_map<Point, std::string> point_map;

// Option 2: pass as template arguments (alternative)
struct PointHash {
    size_t operator()(const Point& p) const {
        return std::hash<int>{}(p.x) ^ (std::hash<int>{}(p.y) << 1);
    }
};

std::unordered_map<Point, std::string, PointHash> point_map2;
```

#### Hash Quality and Performance

A good hash function spreads keys uniformly to minimize collisions. Common issues:
- `std::hash<int>` is identity (returns the int itself) -- fine for random ints, but sequential keys cluster
- `std::hash<std::string>` in MSVC uses FNV-1a (fast, good distribution)
- `std::hash<std::string>` in libstdc++ uses MurmurHash2 (excellent)

**Load factor tuning:**
- Lower (0.5): fewer collisions, more memory, faster lookups
- Higher (1.0): more collisions, less memory, slower lookups
- Default is 1.0; use `max_load_factor(0.75)` for more speed

#### Iterator Invalidation

Same as unordered_set: insert may invalidate all iterators if rehash occurs; erase invalidates only the erased element; rehash and reserve invalidate all.
---

## 9.5 Container Adapters

Container adapters provide restricted interfaces over an underlying sequence container. They do NOT implement their own data structures -- they wrap vector, deque, or list and expose a minimal API.

### 9.5.1 std::stack -- LIFO (Last-In, First-Out)


#### Real-World Analogy

A stack of cafeteria trays. You can only add a tray on top, and you can only remove the top tray. The last tray placed is the first one removed.

#### Internal Implementation

Default underlying container: `std::deque`. Can be changed to `std::vector` or `std::list`.

Deque is the default because it provides O(1) `push_back` and `pop_back` (vector also provides these, but vector's reallocation pattern can cause occasional pauses; deque never reallocates existing elements). List also works but has higher per-element overhead.

```
stack<int> (wrapping deque<int>):
  deque<int> c;    // 'c' is the protected underlying container

  push(x): c.push_back(x)
  pop():   c.pop_back()
  top():   c.back()
```

#### Time Complexity

| Operation | Complexity | Notes |
|-----------|-----------|-------|
| `push()` | O(1) | deque::push_back |
| `pop()` | O(1) | deque::pop_back |
| `top()` | O(1) | deque::back |
| `empty()` | O(1) | deque::empty |
| `size()` | O(1) | deque::size |

#### C++ Code with Output

```cpp
#include <stack>
#include <iostream>
#include <vector>

int main() {
    // Default: stack wraps deque
    std::stack<int> s;

    s.push(10);
    s.push(20);
    s.push(30);

    std::cout << "top: " << s.top() << "\n";     // 30
    std::cout << "size: " << s.size() << "\n";    // 3

    s.pop();   // removes 30
    std::cout << "after pop, top: " << s.top() << "\n";  // 20

    // Pop all elements (standard pattern)
    while (!s.empty()) {
        std::cout << "popping: " << s.top() << "\n";
        s.pop();
    }

    // Stack with vector as underlying container
    std::stack<int, std::vector<int>> vec_stack;
    vec_stack.push(100);
    vec_stack.push(200);
    std::cout << "vec_stack top: " << vec_stack.top() << "\n";

    // Real-world use: parenthesis matching
    std::string expr = "({[]})";
    std::stack<char> parens;
    bool balanced = true;
    for (char ch : expr) {
        if (ch == '(' || ch == '{' || ch == '[') {
            parens.push(ch);
        } else {
            if (parens.empty()) { balanced = false; break; }
            char top = parens.top();
            if ((ch == ')' && top == '(') ||
                (ch == '}' && top == '{') ||
                (ch == ']' && top == '[')) {
                parens.pop();
            } else {
                balanced = false;
                break;
            }
        }
    }
    balanced = balanced && parens.empty();
    std::cout << "expression \"" << expr << "\" balanced: "
              << (balanced ? "yes" : "no") << "\n";

    return 0;
}
```

**Expected Output:**
```
top: 30
size: 3
after pop, top: 20
popping: 20
popping: 10
vec_stack top: 200
expression "({[]})" balanced: yes
```

---

### 9.5.2 std::queue -- FIFO (First-In, First-Out)


#### Real-World Analogy

A line at a supermarket checkout. The first person in line is the first person served. New arrivals join at the back.

#### Internal Implementation

Default underlying container: `std::deque`. Requires a container with `push_back`, `pop_front`, `front`, `back`.

```
queue<int> (wrapping deque<int>):
  deque<int> c;

  push(x): c.push_back(x)
  pop():   c.pop_front()
  front(): c.front()
  back():  c.back()
```

#### Time Complexity

| Operation | Complexity | Notes |
|-----------|-----------|-------|
| `push()` | O(1) | deque::push_back |
| `pop()` | O(1) | deque::pop_front |
| `front()` | O(1) | deque::front |
| `back()` | O(1) | deque::back |
| `empty()` | O(1) | |
| `size()` | O(1) | |

#### C++ Code with Output

```cpp
#include <queue>
#include <iostream>
#include <list>

int main() {
    // Default queue
    std::queue<int> q;

    q.push(10);
    q.push(20);
    q.push(30);

    std::cout << "front: " << q.front() << "\n";   // 10
    std::cout << "back: " << q.back() << "\n";     // 30
    std::cout << "size: " << q.size() << "\n";     // 3

    q.pop();    // removes 10
    std::cout << "after pop, front: " << q.front() << "\n";  // 20

    // Drain queue
    while (!q.empty()) {
        std::cout << "dequeuing: " << q.front() << "\n";
        q.pop();
    }

    // Queue with list as underlying container
    std::queue<int, std::list<int>> list_queue;
    list_queue.push(100);
    list_queue.push(200);
    std::cout << "list_queue front: " << list_queue.front() << "\n";

    // Real-world: BFS traversal
    auto bfs = [](int start, int target) -> int {
        std::queue<int> q;
        bool visited[100] = {false};
        int distance[100] = {0};

        q.push(start);
        visited[start] = true;

        // Simulated graph: each node i connects to i+1, i-1, i*2
        while (!q.empty()) {
            int node = q.front();
            q.pop();

            if (node == target)
                return distance[node];

            int neighbors[] = {node - 1, node + 1, node * 2};
            for (int next : neighbors) {
                if (next >= 0 && next < 100 && !visited[next]) {
                    visited[next] = true;
                    distance[next] = distance[node] + 1;
                    q.push(next);
                }
            }
        }
        return -1;
    };

    std::cout << "BFS shortest steps 0->12: " << bfs(0, 12) << "\n";

    return 0;
}
```

**Expected Output:**
```
front: 10
back: 30
size: 3
after pop, front: 20
dequeuing: 20
dequeuing: 30
list_queue front: 100
BFS shortest steps 0->12: 4
```

---

### 9.5.3 std::priority_queue -- Max-Heap


#### Real-World Analogy

An emergency room triage system. Patients with the most critical conditions are treated first, regardless of arrival order. The triage nurse assigns a priority, and the highest-priority patient is always next.

#### Internal Implementation

Default underlying container: `std::vector`. Uses `std::make_heap`, `push_heap`, `pop_heap` internally.

```
priority_queue<int> (max-heap):

  Binary heap stored in vector<int>:
  Index:   0   1   2   3   4   5
  Value:  100  50  70  20  30  10

          100
        /     \
       50      70
      /  \    /  \
     20  30  10

  push(x):
    c.push_back(x)
    push_heap(c.begin(), c.end())   // sift-up: O(log n)

  pop():
    pop_heap(c.begin(), c.end())    // swap top with last, sift-down
    c.pop_back()
```

A binary heap is a complete binary tree stored in an array where:
- Parent of `i`: `(i-1) / 2`
- Left child of `i`: `2*i + 1`
- Right child of `i`: `2*i + 2`
- Invariant: parent >= children (max-heap)

#### Time Complexity

| Operation | Complexity | Why |
|-----------|-----------|-----|
| `push()` | O(log n) | Insert at end, sift-up along tree height |
| `pop()` | O(log n) | Swap root with last, sift-down along height |
| `top()` | O(1) | Root is at index 0 |
| `empty()` | O(1) | |
| `size()` | O(1) | |

**Why O(log n) for push/pop?**

The heap is a complete binary tree with height ⌊log2(n)⌋. `push_heap` (sift-up) moves the new element up the tree, comparing with its parent at each level -- at most log2(n) comparisons. `pop_heap` (sift-down) moves the root down the tree, comparing with larger child -- also O(log n).

#### C++ Code with Output

```cpp
#include <queue>
#include <iostream>
#include <vector>
#include <functional>

int main() {
    // Default: max-heap (largest element on top)
    std::priority_queue<int> pq;

    pq.push(30);
    pq.push(10);
    pq.push(50);
    pq.push(20);
    pq.push(40);

    std::cout << "top: " << pq.top() << "\n";    // 50 (largest)
    std::cout << "size: " << pq.size() << "\n";

    pq.pop();    // removes 50
    std::cout << "after pop, top: " << pq.top() << "\n";  // 40

    // Drain in priority order
    std::cout << "drain (descending): ";
    while (!pq.empty()) {
        std::cout << pq.top() << " ";
        pq.pop();
    }
    std::cout << "\n";

    // Min-heap using greater comparator
    std::priority_queue<int, std::vector<int>, std::greater<int>> min_pq;
    min_pq.push(30);
    min_pq.push(10);
    min_pq.push(50);
    min_pq.push(20);

    std::cout << "min-heap top: " << min_pq.top() << "\n";  // 10

    std::cout << "drain (ascending): ";
    while (!min_pq.empty()) {
        std::cout << min_pq.top() << " ";
        min_pq.pop();
    }
    std::cout << "\n";

    // Custom comparator for custom types
    struct Task {
        std::string name;
        int priority;
        bool operator<(const Task& o) const {
            return priority < o.priority;  // max-heap by priority
        }
    };

    std::priority_queue<Task> task_queue;
    task_queue.push({"Write code", 3});
    task_queue.push({"Fix bug", 5});
    task_queue.push({"Docs", 1});
    task_queue.push({"Deploy", 4});

    std::cout << "\nTask queue (priority order):\n";
    while (!task_queue.empty()) {
        auto t = task_queue.top();
        std::cout << "  " << t.name << " (prio=" << t.priority << ")\n";
        task_queue.pop();
    }

    // Real-world: compute median in streaming data
    auto running_median = [](const std::vector<int>& data) {
        std::priority_queue<int> lowers;   // max-heap
        std::priority_queue<int, std::vector<int>, std::greater<int>> highers;  // min-heap

        for (int x : data) {
            if (lowers.empty() || x <= lowers.top())
                lowers.push(x);
            else
                highers.push(x);

            // Rebalance
            if (lowers.size() > highers.size() + 1) {
                highers.push(lowers.top());
                lowers.pop();
            } else if (highers.size() > lowers.size()) {
                lowers.push(highers.top());
                highers.pop();
            }
        }

        if (lowers.size() == highers.size())
            return (lowers.top() + highers.top()) / 2.0;
        else
            return (double)lowers.top();
    };

    std::vector<int> stream{5, 3, 8, 1, 9, 2, 7};
    double median = running_median(stream);
    std::cout << "\nMedian of {5,3,8,1,9,2,7}: " << median << "\n";

    return 0;
}
```

**Expected Output:**
```
top: 50
size: 5
after pop, top: 40
drain (descending): 40 30 20 10
min-heap top: 10
drain (ascending): 10 20 30 50

Task queue (priority order):
  Fix bug (prio=5)
  Deploy (prio=4)
  Write code (prio=3)
  Docs (prio=1)

Median of {5,3,8,1,9,2,7}: 5
```

#### Changing Priority Container

```cpp
// Min-heap on strings (reverse lexicographic)
std::priority_queue<std::string,
                    std::vector<std::string>,
                    std::greater<std::string>> min_str_pq;

// Custom comparator via lambda (C++20)
auto cmp = [](int a, int b) { return a > b; };  // min-heap
std::priority_queue<int, std::vector<int>, decltype(cmp)> custom_pq(cmp);
```

---

## 9.6 Container Selection Guide

### Decision Flow


```
Need a container?
|
+-- Fixed size known at compile time?
|   --> std::array (zero overhead)
|
+-- Need FIFO / double-ended operations?
|   --> std::deque (queue-like workload)
|
+-- Need LIFO behavior only?
|   --> std::stack adaptor
|
+-- Need FIFO with only front/back access?
|   --> std::queue adaptor
|
+-- Need priority ordering?
|   --> std::priority_queue adaptor
|
+-- Need sorted iteration / range queries?
|   +-- Unique keys?
|   |   +-- Key-value pairs?  --> std::map
|   |   +-- Just keys?        --> std::set
|   +-- Duplicate keys allowed?
|       +-- Key-value pairs?  --> std::multimap
|       +-- Just keys?        --> std::multiset
|
+-- Need fast O(1) average lookup (no ordering)?
|   +-- Unique keys?
|   |   +-- Key-value pairs?  --> std::unordered_map
|   |   +-- Just keys?        --> std::unordered_set
|   +-- Duplicates allowed?
|       +-- Key-value pairs?  --> std::unordered_multimap
|       +-- Just keys?        --> std::unordered_multiset
|
+-- Default (linear sequence)?
    +-- Frequent insert/erase at known positions?
    |   +-- Forward-only traversal?  --> std::forward_list
    |   +-- Bidirectional needed?    --> std::list (measure first!)
    +-- Mostly push_back / random access?
        --> std::vector (the universal default)
```

### When to Use Each Container


| Container | Primary Use Case | Secondary Use | Avoid When |
|-----------|-----------------|---------------|------------|
| **vector** | Universal sequence; cache-friendly iteration | Stack (with vector adapter) | Frequent middle insert/erase |
| **deque** | FIFO queue; balanced front/back ops | Undo buffer with both ends | Contiguous memory needed (use vector) |
| **list** | Frequent middle insert/erase with iterators | Splice-heavy workloads | Random access; cache performance matters |
| **forward_list** | Minimal memory linked list | Hash table chain management | Backward traversal needed |
| **array** | Fixed-size stack data | Compile-time constant sequences | Runtime-variable size |
| **set** | Unique sorted unique values | Mathematical set operations (union, intersection) | Hash-only lookups (use unordered_set) |
| **multiset** | Sorted multiset | Histogram buckets by key | Unordered multiset (use unordered_multiset) |
| **map** | Sorted key-value dictionary | Configuration tables | Ordering irrelevant (use unordered_map) |
| **multimap** | Sorted KV with duplicates | Index where one key maps to many values | Same-key aggregation (consider map&lt;K, vector<V&gt;>) |
| **unordered_set** | Fast membership testing | Cache for deduplication | Ordered iteration needed |
| **unordered_map** | Hash-based dictionary | Frequency counters, caches | Range queries needed; order matters |
| **stack** | LIFO access | Undo, parsing (parentheses, expressions) | Non-LIFO access |
| **queue** | FIFO access | BFS, task queues, buffers | Priority ordering (use priority_queue) |
| **priority_queue** | Priority-sorted access | Dijkstra, scheduling, median | FIFO ordering (use queue) |

### Performance Decision Matrix


| Scenario | Best Choice | Why |
|----------|-----------|-----|
| 100K elements, sequential iteration | vector | Contiguous cache prefetch |
| 100K pushes, no iteration | vector with reserve | Minimal allocations |
| Queue | deque | O(1) push_front + pop_back |
| 10 elements, frequent middle insert | list | O(1) insertion with iterator |
| 10K elements, frequent middle insert | vector + batch erase/insert | list is cache-oblivious |
| Find by exact key, 10K entries | unordered_map | O(1) vs O(log n) for map |
| Find by exact key, 100 entries | map | O(log n) ~7 steps; RB-tree overhead small |
| Range query by key | map | lower_bound/upper_bound in O(log n) |
| Sorted iteration | map / set | In-order tree traversal |
| Stack | vector (via stack adapter) | Faster than deque default |
| Memory-bound environment | vector, array | Zero per-element overhead |
| Thread-safe reads | any | Readers need no synchronization |
---

## 9.7 Iterator Invalidation Rules -- Complete Reference

Iterator invalidation is one of the most common sources of bugs in C++ STL code. An invalidated iterator points to memory that may have been deallocated or reassigned -- dereferencing it is **undefined behavior**.

### Master Invalidation Table


| Container | `insert` | `emplace` | `erase` | `push_back` | `pop_back` | `push_front` | `pop_front` | `reserve`/`rehash` | `clear` | `swap` |
|-----------|----------|-----------|---------|-------------|------------|--------------|-------------|-------------------|---------|--------|
| **vector** | All if realloc; after pos otherwise | Same as insert | Erased and after | All if realloc | Erased only | N/A | N/A | All if realloc | All | None |
| **deque** | All (any insert) | All | All (any erase) | All iter; not refs | All iter; not refs | All iter; not refs | All iter; not refs | N/A | All | None |
| **list** | None | None | Erased only | None | Erased only | None | Erased only | N/A | All | None |
| **forward_list** | None | None | Erased only | N/A | N/A | None | Erased only | N/A | All | None |
| **array** | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | None |
| **set/map** | None | None | Erased only | N/A | N/A | N/A | N/A | N/A | All | None |
| **multiset/multimap** | None | None | Erased only | N/A | N/A | N/A | N/A | N/A | All | None |
| **unordered_set/map** | All if rehash | All if rehash | Erased only | N/A | N/A | N/A | N/A | All | All | None |

**Legend:**
- "All" = all iterators/references to the container are invalidated
- "Erased only" = only iterators/references to the specific erased element
- "All if realloc/rehash" = all invalidated only when memory reallocation occurs
- "None" = all iterators remain valid
- "N/A" = operation does not exist for this container

### Reference Invalidation vs Iterator Invalidation


Important: some operations invalidate iterators but NOT references (or vice versa):

- **deque push_back/push_front/pop_back/pop_front**: invalidates ALL iterators (central map may reallocate), but references to remaining elements remain valid (elements themselves never move)
- **vector push_back on reallocation**: invalidates BOTH iterators and references (all elements move to new memory)
- **set/map/unordered_set/unordered_map insert/erase of other elements**: neither iterators nor references to elements not directly affected are invalidated

### Common Pitfalls and Correct Patterns


#### Pitfall 1: Erasing in a Loop

```cpp
// BUG: it is invalidated by erase
std::vector<int> vec{1, 2, 3, 4, 5};
for (auto it = vec.begin(); it != vec.end(); ++it) {
    if (*it % 2 == 0)
        vec.erase(it);    // undefined behavior!
}

// CORRECT: use erase-remove idiom
vec.erase(std::remove_if(vec.begin(), vec.end(),
    [](int x) { return x % 2 == 0; }), vec.end());

// CORRECT: use erase's return value
for (auto it = vec.begin(); it != vec.end(); ) {
    if (*it % 2 == 0)
        it = vec.erase(it);   // erase returns next iterator
    else
        ++it;
}
```

#### Pitfall 2: Using Iterator After Container Mutation

```cpp
std::vector<int> v{1, 2, 3, 4, 5};
auto it = v.begin() + 2;   // points to 3
v.push_back(6);             // may reallocate -- it is invalidated!
// std::cout << *it;        // undefined behavior!

// CORRECT (for vector with no realloc):
v.reserve(10);             // ensure capacity
auto it = v.begin() + 2;
v.push_back(6);            // no reallocation -- it remains valid
std::cout << *it;          // OK: 3
```

#### Pitfall 3: Inserting While Iterating

```cpp
// BUG: insert invalidates all iterators in deque
std::deque<int> d{1, 2, 3};
auto it = d.begin();
d.insert(it + 1, 99);   // all iterators invalidated (deque)
// std::cout << *it;     // undefined behavior!

// SAFE: list (insert does not invalidate)
std::list<int> lst{1, 2, 3};
auto lit = lst.begin();
std::advance(lit, 1);
lst.insert(lit, 99);    // no iterators invalidated
std::cout << *lit;       // OK: points to 2
```

#### Pitfall 4: Assuming Deque push_back Leaves Iterators Valid

```cpp
std::deque<int> d{1, 2, 3};
auto it = d.begin();       // valid iterator
d.push_back(4);            // ALL deque iterators invalidated!
// *it;                    // undefined behavior!

// References DO remain valid (unless erase/insert middle)
std::deque<int> d2{1, 2, 3};
int& ref = d2[0];          // reference to first element
d2.push_back(4);           // ref to 1 remains valid!
std::cout << ref;          // OK: 1
```

#### Pitfall 5: Invalidation in unordered_map During Insert

```cpp
std::unordered_map<int, std::string> um;
um.reserve(10);
auto it = um.begin();   // valid, but points to nothing if um is empty

// After some inserts (no rehash)
um[1] = "one";
um[2] = "two";
auto it1 = um.find(1);   // valid

// Insert that triggers rehash:
um[100] = "hundred";     // may trigger rehash -- all iterators invalidated
// auto x = it1->second; // undefined behavior if rehash occurred
```

### Safe Erase Idiom Reference


```cpp
// vector / deque: erase-remove idiom
v.erase(std::remove(v.begin(), v.end(), value), v.end());

// list: member remove
lst.remove(value);              // removes all matching values

// associative: erase by key
m.erase(key);                    // returns count of erased

// unordered: erase by iterator (returns next)
auto it = us.begin();
while (it != us.end()) {
    if (condition(*it))
        it = us.erase(it);       // unordered erase returns next
    else
        ++it;
}

// set/map: erase by iterator (returns next in C++17)
auto it = s.begin();
while (it != s.end()) {
    if (condition(*it))
        it = s.erase(it);        // C++17: associative erase returns next
    else
        ++it;
}
```

---

## 9.8 Deep Comparisons

### 9.8.1 Sequence vs Associative vs Unordered Containers


| Property | Sequence | Ordered Associative | Unordered Associative |
|----------|----------|-------------------|----------------------|
| **Ordering** | Insertion order | Key order (sorted) | Unspecified |
| **Organization** | Linear arrangement | Binary search tree | Hash table (buckets) |
| **Lookup by value** | O(n) scan | O(log n) | O(1) average |
| **Lookup by position** | O(1) for vector/deque, O(n) list | Not supported | Not supported |
| **Insert** | O(1) amortized (vector end), O(1) list pos | O(log n) | O(1) average |
| **Range query** | Not efficient | O(log n + k) | Not efficient (must scan) |
| **Sorted iteration** | Sort first (O(n log n)) | In-order (O(n)) | Must copy and sort |
| **Memory** | Contiguous or linked | Tree nodes (high overhead) | Buckets + nodes (moderate) |
| **Iterator category** | Random/Forward/Bidirectional | Bidirectional | Forward |
| **When to choose** | General linear data | Sorted access needed | Fast hash lookup needed |

### 9.8.2 std::vector vs std::deque vs std::list


#### Head-to-Head Comparison Matrix

| Criterion | vector | deque | list |
|-----------|--------|-------|------|
| **Memory layout** | Single contiguous block | Chunked blocks (non-contiguous) | Scattered nodes |
| **Random access** | O(1), direct pointer arithmetic | O(1), two dereferences | O(n), must walk pointers |
| **push_back** | O(1) amortized | O(1) | O(1) |
| **push_front** | O(n) (shift all) | O(1) | O(1) |
| **pop_back** | O(1) | O(1) | O(1) |
| **pop_front** | O(n) | O(1) | O(1) |
| **insert(position)** | O(n) shift | O(n) shift within blocks | O(1) (given iterator) |
| **erase(position)** | O(n) shift | O(n) shift within blocks | O(1) (given iterator) |
| **Memory overhead** | Zero per-element | ~0.125 bytes/element | ~16 bytes/node (64-bit) |
| **Iterator category** | Random access | Random access | Bidirectional |
| **Iterator invalidation (insert)** | All if realloc | All | None |
| **Iterator invalidation (erase)** | After erased pos | All (any erase) | Erased only |
| **Cache locality** | Excellent | Good (block-local) | Poor |
| **sort()** | O(n log n) via std::sort | O(n log n) via std::sort | O(n log n) member sort |
| **Supports C API** | Yes (data()) | No | No |
| **sizeof(container)** | 24 bytes (3 ptrs) | ~64 bytes (multiple ptrs) | 24 bytes (3 ptrs) |
| **Typical use** | Default sequence | Double-ended queue | Frequent splice/cut |

#### Detailed Analysis

**Why is vector usually faster than list, even for "list operations"?**

Contrary to intuition, vector often outperforms list for operations like insert/erase in the middle when:
1. The container size is small (< 1000 elements) -- memmove is incredibly fast on modern CPUs
2. The elements are small (int, double, pointers) -- copying is cheap
3. The insertion/erasure count is small relative to the total elements

```cpp
// This is often faster with vector than list:
std::vector<int> vec(100, 0);
vec.insert(vec.begin() + 50, 42);   // moves 50 elements via memmove

std::list<int> lst(100, 0);
auto it = lst.begin();
std::advance(it, 50);               // O(n) just to find position!
lst.insert(it, 42);                  // O(1) insert, but preceded by O(n) advance
```

The list's O(n) `std::advance` to find the insertion position often dominates, and even the O(n) shift in vector is extremely fast due to vectorized memory moves.

**When does list actually win?**

- Very large objects (copying is expensive compared to pointer swaps)
- Iterators must remain valid through modifications
- Frequent splicing operations between lists
- You already have iterators to the insertion/erasure points

**Deque as a compromise:**

Deque occupies a middle ground:
- O(1) random access (with higher constant than vector)
- O(1) push/pop at BOTH ends (unlike vector)
- Does not invalidate references on push/pop (unlike vector's reallocation)
- Memory is not contiguous (cannot pass to C APIs expecting arrays)

### 9.8.3 std::map vs std::unordered_map


| Criterion | std::map | std::unordered_map |
|-----------|----------|-------------------|
| **Internal structure** | Red-Black tree | Hash table with chaining |
| **Lookup complexity** | O(log n) | O(1) average, O(n) worst |
| **Insert complexity** | O(log n) | O(1) average, O(n) worst |
| **Iteration order** | Sorted by key (ascending) | Unspecified (essentially random) |
| **Memory per element** | ~32-40 bytes overhead | ~16-20 bytes + bucket array |
| **Lower bound / range query** | O(log n) | Not supported (must scan all) |
| **Stability of iterators** | Insert does not invalidate | Insert may invalidate (rehash) |
| **begin() complexity** | O(1) (leftmost cached) | O(bucket_count) (find first non-empty) |
| **operator[]** | Creates default if missing | Same behavior |
| **Custom key requirements** | operator&lt; (or comparator) | Hash function + operator== |
| **Memory allocation** | Per-node allocation | Bucket array + per-node |
| **Cache performance** | Poor (tree nodes scattered) | Moderate (bucket array is contiguous; chains are scattered) |

#### When to Use Each

**Prefer map when:**
- You need to iterate in sorted order
- You need range queries (lower_bound, upper_bound)
- The number of elements is small (< 100) -- O(log n) and O(1) are similar
- Your hash function is slow or poorly distributed
- Iterator stability matters (insert never invalidates)

**Prefer unordered_map when:**
- You only need exact-key lookup (no range queries, no ordered iteration)
- You have many elements (100K+) -- the log n factor becomes significant
- Keys are expensive to compare (e.g., long strings) -- O(1) hash &lt; O(log n) string compare
- You have a good hash function

#### Empirical Performance

For 1 million insert/find operations on a modern CPU:
```
map:              ~180 ms (20 log2(1M) ≈ 20 comparisons per op)
unordered_map:    ~80 ms (good hash, load factor 0.75)
unordered_map:   ~300 ms (bad hash, all collide)
```

The difference grows with container size. For 10 million elements:
```
map:              ~2,400 ms
unordered_map:    ~900 ms
```

For 100 elements:
```
Both:  < 1 ms  (difference is noise)
```

---

## 9.9 Memory Overhead Comparison

Understanding memory overhead is crucial for memory-constrained systems and large containers.

### Per-Element Overhead (for int on 64-bit Linux)


| Container | Element bytes | Overhead bytes | Total per element | Ratio to vector |
|-----------|--------------|----------------|-------------------|-----------------|
| vector | 4 | 0 | 4 | 1.0x |
| array | 4 | 0 | 4 | 1.0x |
| deque | 4 | ~0.125 (amortized blocks) | 4.125 | 1.03x |
| forward_list | 4 | 8 (next ptr) | 12 | 3.0x |
| list | 4 | 16 (prev + next) | 20 | 5.0x |
| unordered_set | 4 | 16 (next + hash) + bucket | ~24 | 6.0x |
| set | 4 | 32 (parent + left + right + color + pad) | 36 | 9.0x |
| unordered_map | 4+4 (pair) | 16 (next + hash) + bucket | ~28 | 3.5x (8 bytes value) |
| map | 4+4 (pair) | 32 (tree metadata) | 40 | 5.0x (8 bytes value) |

### 1 Million ints -- Total Memory Estimate


| Container | Total Memory | Relative Size |
|-----------|-------------|---------------|
| vector | 4 MB | 1.0x |
| array (1M stack) | 4 MB | 1.0x (but stack overflow!) |
| deque | ~4.13 MB | 1.03x |
| forward_list | 12 MB | 3.0x |
| list | 20 MB | 5.0x |
| unordered_set | ~24 MB | 6.0x |
| set | 36 MB | 9.0x |
| unordered_map | ~28 MB | 7.0x (for 1M pairs) |
| map | ~40 MB | 10.0x (for 1M pairs) |

### Container Size (sizeof the container object itself)


| Container | sizeof (64-bit) | Explanation |
|-----------|----------------|-------------|
| vector&lt;T> | 24 bytes | 3 pointers |
| array&lt;T,N&gt; | N * sizeof(T) | The data itself |
| deque&lt;T> | ~64-80 bytes | Central map pointers, block size, metadata |
| list&lt;T> | 24 bytes | Sentinel node (2 pointers + size) |
| forward_list&lt;T> | 8 bytes | One pointer to head |
| set/map | 48 bytes | Tree root + node count + comparator |
| unordered_set/map | ~56-64 bytes | Buckets ptr + size + load factor + hash + eq |

**Key insight:** The sizeof the container object is trivially small for all containers. The actual memory is on the heap (or in the data segment for static globals).

---

## 9.10 Applications in Real Systems

### std::vector: The Universal Sequence


vector is the most widely used container in C++ codebases. It appears in virtually every domain:

- **Game Engines (Unreal, Unity):** Entity component arrays, vertex buffers, animation keyframes. Cache-friendly sequential iteration is critical for 60 FPS rendering.
- **Web Servers (NGINX, Envoy):** HTTP header storage, connection pools, request buffers. `data()` provides direct C-array access for system calls like `sendfile()`.
- **Databases (SQLite, RocksDB):** Page caches, B-tree node vectors, WAL buffers. Vector's contiguous storage mirrors on-disk page layouts.
- **Compilers (LLVM, GCC):** AST node storage, symbol table vectors, optimization pass queues. `SmallVector` (LLVM) extends vector with inline storage for zero-allocation small cases.
- **Finance (QuantLib, KDB+):** Time series data, order book snapshots, risk calculation arrays. Vectorization (SIMD) over contiguous arrays is essential for low-latency trading.
- **GUI Frameworks (Qt, wxWidgets):** Widget children lists, layout calculations, event dispatch queues.
- **Machine Learning (TensorFlow C++ API, ONNX Runtime):** Tensor shape vectors, batch data containers, gradient storage.

**Real pattern:** Many systems replace std::vector with a custom small-buffer-optimized vector (like LLVM's SmallVector or Boost's static_vector) for hot paths.

### std::unordered_map: The Fast Dictionary


- **Web Browsers (Chromium):** HTTP header key-value store, cookie cache, DOM attribute storage. O(1) lookup is critical for page load performance.
- **Databases (LevelDB, RocksDB):** Block cache indexes, in-memory table hash indices. Bloom filters often precede unordered_map lookups for negative caching.
- **Interpreters (V8, CPython):** Object property dictionaries (though V8 uses its own inline cache + hash table hybrid). Namespace lookups must be sub-microsecond.
- **Game Engines:** Resource caches (textures, meshes, shaders keyed by name/path). Asset loading systems use unordered_map for O(1) material lookups.
- **Compilers:** Symbol tables for reserved words, operator precedence tables, pragma/keyword lookup. Fast lexing depends on hash-based keyword recognition.
- **Network stacks (DPDK, eBPF):** Flow tables, connection tracking maps. eBPF's BPF_MAP_TYPE_HASH is used in production for packet classification.

### std::map: When Order Matters


- **Configuration systems:** Application settings parsed from JSON/YAML/XML are typically stored in a sorted structure for deterministic behavior and diff-able serialization.
- **Text editors (VS Code, Emacs):** Line-number-to-position mappings, sorted by line number for range operations.
- **Command-line argument parsers:** Option-to-value mappings where help text is printed in alphabetical order.
- **Time-series databases:** In-memory timestamp-indexed data stored in map for range queries (memory-limited cases -- B-trees are more common on disk).
- **Scheduling systems:** Job queues ordered by next-run-time. Red-black tree provides both insertion and sorted traversal.

### std::deque: The Double-Ended Workhorse


- **Thread pools (Intel TBB, Folly):** Work-stealing deques. Each thread pushes/pops from its own deque's end and steals from other deques' fronts.
- **Network stacks (Linux kernel sk_buff, DPDK):** Packet buffer queues. Deque-like behavior for enqueue/dequeue at opposite ends.
- **Audio processing (JUCE, PortAudio):** Sample ring buffers. Deque-like behavior for real-time audio input/output.
- **Undo systems:** Text editor undo/redo buffers. Operations at both ends (new undo at back, redo from front).

### std::priority_queue: Priority-Based Processing


- **Dijkstra's algorithm (OSPF, IS-IS routers):** Open Shortest Path First routing uses a priority queue for the frontier set. Each router iteration extracts the minimum-distance node.
- **Task schedulers (Linux CFS, Boost.ASIO):** Runnable task queues ordered by priority or deadline. The highest-priority task runs next.
- **Event-driven simulations (ns-3, OMNeT++):** Future event sets ordered by timestamp. Priority queue extracts the next event by simulation time.
- **Huffman coding (compressors: gzip, zstd):** Build frequency-ordered Huffman trees using a min-heap priority queue.
- **Median tracking in streaming data:** Two priority queues (max-heap for lower half, min-heap for upper half) track running median in O(log n).
- **K-way merge (external sorting):** Merging K sorted files uses a min-heap to always emit the next smallest element.
---

## 9.11 Interview Corner

The following Q&As cover the most frequently asked STL container questions in C++ interviews at companies like Google, Microsoft, Amazon, and Bloomberg.

### Q1: "Why is std::vector usually preferred over std::list?"


**Answer:**

Four reasons, ordered by importance:

1. **Cache locality:** Vector stores elements contiguously in memory. Modern CPUs prefetch sequential memory into L1/L2 cache. A vector iteration hits L1 cache ~90% of the time. List nodes are heap-scattered, causing a cache miss per element -- 50-100x slower for iteration.

2. **Lower memory overhead:** Vector has zero per-element overhead (just `capacity * sizeof(T)`). List adds 16-24 bytes per element for prev/next pointers. For 1 million ints: vector = 4 MB, list = 20+ MB.

3. **O(1) random access:** Vector provides constant-time indexing. List requires O(n) traversal to reach position.

4. **Faster bulk operations:** Even for "list-friendly" operations like middle insertion, vector's memmove can outperform list's pointer walk + insert for small-to-medium sizes (< 1000 elements). The constant factor of memmove is extremely low.

```cpp
// People think list is faster here. Often wrong:
std::list<int> lst(10000, 42);
auto it = lst.begin();
std::advance(it, 5000);        // O(5000) pointer walk
lst.insert(it, 99);             // O(1) insertion

std::vector<int> vec(10000, 42);
vec.insert(vec.begin() + 5000, 99);  // O(n) shift via memmove

// On modern hardware, vector is often 2-10x faster
// because: (a) advance on list is 5000 cache misses,
// and (b) vector's shift is a single memmove call
// that runs at ~30 GB/s on DDR5.
```

**When to actually use list:**
- Very large objects (copy cost >> pointer manipulation)
- You already have iterators to insertion/erasure points
- Frequent splice operations between lists
- Iterators must survive insertions (strong guarantee)

### Q2: "When would you choose std::map over std::unordered_map?"


**Answer:**

Choose `std::map` when:

1. **Ordered iteration matters:** You need to traverse elements in key order (e.g., printing a sorted report).

2. **Range queries:** You need `lower_bound`, `upper_bound`, or `equal_range` -- e.g., "find all users whose names start with 'A' through 'M'".

```cpp
std::map<std::string, User> users;
auto start = users.lower_bound("Alice");
auto end = users.upper_bound("Mike");
for (auto it = start; it != end; ++it)
    process(it->second);
```

3. **Small N:** For &lt; 100 elements, O(log n) and O(1) are practically identical, and map's cache behavior is more predictable.

4. **Stable iterators:** Map insert never invalidates existing iterators. unordered_map insert can trigger a rehash that invalidates all iterators.

5. **Memory predictable:** No rehash spikes. Map allocates one node at a time. unordered_map can have sudden O(n) rehash pauses.

6. **Weak hash function:** If keys hash poorly (causing collisions), unordered_map degenerates to O(n). Map is always O(log n).

Choose `std::unordered_map` when:
- You only need exact-key lookup
- Large N (100K+) where O(log n) matters
- Good hash function available
- Order is irrelevant

### Q3: "Explain iterator invalidation. Give examples for vector and list."


**Answer:**

Iterator invalidation occurs when a container modification makes existing iterators point to invalid memory. Using an invalidated iterator is undefined behavior -- the program may crash, produce wrong results, or appear to work (making it particularly dangerous).

```cpp
// VECTOR: push_back with reallocation invalidates ALL iterators
std::vector<int> v{1, 2, 3};
int* ptr = &v[0];          // pointer to vector's internal array
auto it = v.begin();       // iterator to first element
v.push_back(4);            // if reallocation occurs:
// ptr is now dangling, it is now invalidated
// *ptr = 10;              // UNDEFINED BEHAVIOR
// *it = 10;               // UNDEFINED BEHAVIOR

// LIST: insert never invalidates existing iterators
std::list<int> lst{1, 2, 3};
auto lit = lst.begin();    // points to 1
lst.push_back(4);          // no invalidation
lst.insert(lst.end(), 5);  // no invalidation
*lit = 99;                 // OK: list's iterators survive modifications
std::cout << lst.front();  // 99

// VECTOR: erase invalidates from erased element onward
std::vector<int> v2{10, 20, 30, 40, 50};
auto it1 = v2.begin();     // points to 10
auto it2 = v2.begin() + 2; // points to 30
v2.erase(v2.begin() + 1);  // erases 20
// it1 is still valid (points to 10, same address)
// it2 is INVALIDATED (30 shifted left to index 1, but iterator still points to old location)
```

**The single most important rule:** After every container modification, assume ALL iterators are potentially invalid, unless you know the specific invalidation rules for that container and operation.

### Q4: "Implement a thread-safe frequency counter using STL containers. Which container would you use and why?"

**Answer:**

```cpp
#include <unordered_map>
#include <mutex>
#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

class ThreadSafeFrequencyCounter {
    std::unordered_map<std::string, size_t> freq_;
    mutable std::mutex mtx_;

public:
    void add(const std::string& word) {
        std::lock_guard<std::mutex> lock(mtx_);
        ++freq_[word];           // operator[] inserts with 0 if missing, then increments
    }

    size_t count(const std::string& word) const {
        std::lock_guard<std::mutex> lock(mtx_);
        auto it = freq_.find(word);
        return it != freq_.end() ? it->second : 0;
    }

    std::vector<std::pair<std::string, size_t>> top_k(size_t k) const {
        std::lock_guard<std::mutex> lock(mtx_);
        // Copy to vector for sorting (map iteration is too slow for sort)
        std::vector<std::pair<std::string, size_t>> entries(freq_.begin(), freq_.end());
        // Partial sort: top k by frequency (descending), then by key ascending (tiebreaker)
        auto cmp = [](const auto& a, const auto& b) {
            if (a.second != b.second) return a.second > b.second;
            return a.first < b.first;
        };
        if (k >= entries.size()) {
            std::sort(entries.begin(), entries.end(), cmp);
            return entries;
        }
        std::partial_sort(entries.begin(), entries.begin() + k, entries.end(), cmp);
        entries.resize(k);
        return entries;
    }

    size_t unique_words() const {
        std::lock_guard<std::mutex> lock(mtx_);
        return freq_.size();
    }

    size_t total_words() const {
        std::lock_guard<std::mutex> lock(mtx_);
        size_t total = 0;
        for (const auto& [_, count] : freq_)
            total += count;
        return total;
    }
};
```

**Why unordered_map?** O(1) average insert/lookup beats map's O(log n) for frequency counting where ordering is irrelevant. The dominant operations (increment on each word, look up existing count) are all exact-key operations.

**Why not map?** No need for sorted iteration during live updates. We sort only on demand via `top_k()`.

### Q5: "What happens when a vector's capacity is exceeded during push_back? Walk through the steps."


**Answer:**

```cpp
std::vector<int> v;
v.reserve(4);               // capacity = 4
for (int i = 0; i < 4; ++i)
    v.push_back(i * 10);    // size = 4, capacity = 4

// The 5th push_back triggers reallocation:
v.push_back(50);
```

**Step-by-step:**

1. **Check capacity:** `size == capacity` (4 == 4), so growth is needed.

2. **Allocate new block:** Allocate new memory of size `capacity * growth_factor` elements. GCC uses 2x → new capacity = 8 → `8 * sizeof(int) = 32 bytes` allocated via `operator new`.

3. **Move (or copy) elements:** Move each existing element from old block to new block.
   - For `int` (trivially copyable): single `memcpy` or `memmove` call copies all 4 ints.
   - For non-trivial types: each element is move-constructed. If `noexcept` move constructor is available, elements are moved; otherwise copied (exception safety guarantee).

4. **Destroy old elements:** Call destructor on each element in the old block (for ints: no-op; for complex types: frees resources).

5. **Deallocate old block:** `operator delete` on the old memory.

6. **Update pointers:** `_start` → new block start, `_finish` → new block start + old_size + 1, `_end_of_storage` → new block start + new_capacity.

7. **Construct new element:** Construct argument in-place at `_finish - 1`.

**Exception safety:** If element construction throws during step 3, old elements remain intact in old storage (vector is unchanged). If moving and a move constructor throws (noexcept guarantees prevent this for standard types), vector falls back to copy to maintain the strong exception guarantee.

**Growth factor** is implementation-defined and represents a space-time tradeoff:
- 2x: amortized O(1), but wastes up to 50% memory
- 1.5x: wastes up to 33% memory, better memory reuse across reallocations (GCC/MSVC choose 1.5-2x range)
- Golden ratio (~1.618): theoretical sweet spot for memory fragmentation

### Q6: "What is the erase-remove idiom and why is it necessary?"


**Answer:**

The erase-remove idiom is the correct way to remove elements from a sequence container (vector, deque, string) that satisfy a condition.

```cpp
// PROBLEM: Wrong -- has O(n^2) complexity and undefined behavior
std::vector<int> v{1, 2, 3, 4, 5, 6};
for (auto it = v.begin(); it != v.end(); ++it) {
    if (*it % 2 == 0) {
        v.erase(it);   // BUG: it invalidated, and subsequent ++it is UB
    }
}

// SOLUTION: erase-remove idiom
// Step 1: std::remove (or remove_if) "removes" elements by shifting
//         survivors left. Returns iterator to new logical end.
// Step 2: vector::erase removes the tail.

v.erase(std::remove_if(v.begin(), v.end(),
    [](int x) { return x % 2 == 0; }),
    v.end());

// What std::remove actually does (pseudocode):
// template<class ForwardIt, class T>
// ForwardIt remove(ForwardIt first, ForwardIt last, const T& value) {
//     first = std::find(first, last, value);
//     if (first != last)
//         for (ForwardIt i = first; ++i != last; )
//             if (!(*i == value))
//                 *first++ = std::move(*i);
//     return first;
// }
```

**Why it's necessary:**
- Naive loop-erase is O(n^2) -- each erase shifts subsequent elements
- erase-remove is O(n) -- one pass to shift, one pass to destroy
- It is the only correct way to erase multiple elements from a sequence without UB
- For list, use `list::remove_if` (member function) instead, which is also O(n) but handles node unlinking directly

### Q7: "Compare the performance of deque vs vector for a producer-consumer scenario."


**Answer:**

For a single producer, single consumer queue:

```cpp
// REQUIREMENTS:
// - Producer adds elements to back
// - Consumer removes elements from front
// - No concurrent access (or mutex-guarded)

// OPTION 1: deque
std::deque<int> dq;
// producer: dq.push_back(val);
// consumer: val = dq.front(); dq.pop_front();

// OPTION 2: vector (reverse -- push_back, pop_back as stack)
std::vector<int> vec;
// producer: vec.push_back(val);
// consumer: need to access front... vec.pop_front() O(n)

// OPTION 3: vector + manual ring buffer
struct RingBuffer {
    std::vector<int> data;
    size_t head = 0, tail = 0;
    // add at tail, read at head -- no shifting
};
```

**Winner: deque**, because:
- `push_back` is O(1) amortized (same as vector)
- `pop_front` is O(1) (vs O(n) for vector)
- No reallocation of existing elements (vs vector reallocation on growth)
- Reference stability: elements never move

**Vector can win if the producer-consumer pattern is LIFO (stack):**
- Both operations are O(1) amortized
- Better cache behavior (contiguous)
- Much lower memory overhead

**When to use a dedicated ring buffer instead of deque:**
- Fixed-capacity bounded queue
- No dynamic allocation allowed (embedded systems)
- Need contiguous memory for batch operations
- deque's block structure adds ~8% overhead

---

## 9.12 Summary

STL containers form the backbone of C++ data structure programming. The key takeaways:

1. **std::vector is the default container.** It offers contiguous memory, O(1) random access, and amortized O(1) push_back. Reserve capacity when you know the size in advance.

2. **Choose by access pattern, not by name.** Do not default to "linked list" for frequent insertions -- measure first. Cache miss penalties dominate modern CPU performance.

3. **Ordered vs unordered tradeoff is log(n) vs average O(1).** Use ordered (map/set) when you need range queries or sorted iteration. Use unordered for pure lookup workloads with a good hash function.

4. **Container adapters restrict, not implement.** Stack, queue, and priority_queue are thin wrappers over sequence containers. They simplify interfaces but inherit the underlying container's behavior and performance.

5. **Iterator invalidation is a correctness landmine.** Every container type and operation has specific invalidation rules. After modifying a container, assume all iterators are invalid unless you have verified otherwise. The erase-remove idiom is the correct way to remove elements from a sequence.

6. **Memory overhead varies dramatically.** vector adds zero overhead; set adds ~32-40 bytes per element. For large containers, this can mean the difference between fitting in cache and thrashing.

7. **Unordered containers are not magical.** They require good hash functions, operator==, and careful load factor management. Rehashing is O(n) and can cause latency spikes.

### Concept Comparison Table

| Container | Internal Structure | Access | Insert | Erase | Memory | Iterator Invalidation |
|-----------|-------------------|--------|--------|-------|--------|----------------------|
| vector | Dynamic array | O(1) index | O(n) mid, O(1) amort back | O(n) | Contiguous, zero overhead | Realloc: all; erase: after |
| deque | Chunked blocks | O(1) index | O(n) mid, O(1) ends | O(n) mid, O(1) ends | ~0.125 byte/elem | All iter, not refs |
| list | Doubly-linked | O(n) search | O(1) with iter | O(1) with iter | 16 bytes/node overhead | Only erased element |
| forward_list | Singly-linked | O(n) search | O(1) with iter | O(1) with iter | 8 bytes/node overhead | Only erased element |
| array | Fixed C array | O(1) index | N/A | N/A | Zero, on stack | None (no mutators) |
| set/map | Red-Black tree | O(log n) | O(log n) | O(log n) | ~32-40 bytes/node | Only erased element |
| multiset/multimap | Red-Black tree | O(log n) | O(log n) | O(log n) | ~32-40 bytes/node | Only erased element |
| unordered_set/map | Hash table + chains | O(1) avg | O(1) avg | O(1) avg | ~16-28 bytes/node | Rehash: all; erase: only |
| stack | deque (default) | top O(1) | push O(1) | pop O(1) | Depends on underlying | Same as underlying |
| queue | deque (default) | front/back O(1) | push O(1) | pop O(1) | Depends on underlying | Same as underlying |
| priority_queue | vector (default) | top O(1) | push O(log n) | pop O(log n) | Depends on underlying | Same as underlying |

---

## Chapter Exercises

### Review Questions

1. What are the three major categories of STL containers? Give two examples of each.

2. Describe the internal implementation of deque. Why does it provide O(1) push_front when vector does not?

3. Explain the difference between reference invalidation and iterator invalidation in deque. When are references valid but iterators are not?

4. Why is the growth factor of vector typically 1.5x-2x? What happens with a growth factor of 1.1x? What about 10x?

5. List the conditions under which list outperforms vector. Be specific about element size, count, and operation patterns.

6. What is the load factor of an unordered container? How does changing max_load_factor affect performance and memory usage?

7. How does std::set maintain sorted order? What rotation types does a Red-Black tree use?

8. Why does std::map::operator[] have different semantics than std::unordered_map::at()? What's the performance implication?

9. What is the asymptotic complexity of erasing all elements that satisfy a predicate from a vector? From a set? From an unordered_set?

10. Describe a scenario where std::forward_list would be preferred over std::list.

### Application Problems

1. **Word Frequency Analyzer:** Write a program that reads a text file, counts word frequencies using an unordered_map, and prints the top 20 words sorted by frequency descending (use vector of pairs + partial_sort).

2. **LRU Cache:** Implement an LRU cache using unordered_map (for O(1) lookup) and list (for O(1) move-to-front). Support get(key) and put(key, value) operations.

3. **Undo/Redo System:** Implement an undo/redo system using two stacks (vector-based). Each operation should support execute, undo (move to redo stack), and redo (move back to undo stack).

4. **Matrix Class:** Implement a simple sparse matrix class using std::map&lt;std::pair<int,int&gt;, double>. Support operator(), addition, and multiplication. Compare performance against a dense vector&lt;vector<double&gt;>.

5. **BFS Shortest Path:** Implement BFS on a grid using std::queue. Each cell is a pair&lt;int,int&gt;. Track visited cells using unordered_set with a custom hash for pairs.

6. **Custom Allocator Experiment:** Write a program that creates vector&lt;int&gt;, list&lt;int&gt;, and deque&lt;int&gt; each with 10 million elements. Measure memory usage (via task manager / getrusage) and iteration time. Compare against expected theoretical values.

7. **Job Scheduler:** Implement a simple job scheduler using priority_queue. Each job has a priority and a function to execute. Extract jobs in priority order and execute them.

### Challenge Problems

1. **Bidirectional Map (Bimap):** Implement a bidirectional map using two unordered_maps internally: one mapping keys to values, the other mapping values to keys. Support insert, lookup_by_key, lookup_by_value, erase_by_key, erase_by_value. Ensure consistency between both maps on all operations. Handle the case where multiple keys map to the same value.

2. **Skip List Implementation:** Implement a skip list (probabilistic balanced data structure) using forward_list as the base layer. Compare performance against std::set for insert, find, and erase.

3. **Hash Table From Scratch:** Implement a simple hash table with chaining using vector&lt;forward_list<pair<K,V&gt;>>. Support insert, find, erase, rehash, and load factor tracking. Compare correctness and performance against std::unordered_map.

4. **Container Benchmark Suite:** Write a benchmarking program that measures:
   - Insert time (front, middle, back) across vector, deque, list
   - Iteration time (sequential, random access) across all sequence containers
   - Find time (unordered_map vs map) at various N (100, 10K, 1M)
   - Memory usage at each size
   Generate formatted tables comparing all containers.

5. **Lock-Free Ring Buffer:** Implement a single-producer, single-consumer lock-free ring buffer using std::array or std::vector with atomic head/tail indices. Compare throughput against std::deque with mutex.

---

## References

- cppreference.com: Standard library containers -- https://en.cppreference.com/w/cpp/container
- ISO C++ Standard (C++17/20): [container.requirements] section
- "Effective STL" by Scott Meyers -- Items 1 through 18 cover container selection and best practices
- "The C++ Standard Library (2nd Edition)" by Nicolai M. Josuttis -- Comprehensive container reference

---

> **Previous:** [08-exceptions](./08-exceptions.md) | **Next:** [10-stl-algorithms](./10-stl-algorithms.md)
