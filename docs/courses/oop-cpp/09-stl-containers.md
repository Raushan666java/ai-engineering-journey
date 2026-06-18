# Chapter 9: STL Containers

## Learning Objectives

After studying this chapter, students will be able to:

- Select the appropriate container for a given problem
- Use sequence containers: vector, list, deque
- Use associative containers: map, set, unordered_map
- Use container adaptors: stack, queue, priority_queue
- Understand iterator invalidation rules

## 9.1 Container Taxonomy

![STL Containers Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/oop-cpp/09-stl-containers.png)

The Standard Template Library (STL) defines three broad categories of containers:

| Category | Containers | Characteristics |
|----------|------------|-----------------|
| Sequence | `vector`, `list`, `deque`, `array`, `forward_list` | Linear ordering of elements |
| Associative (ordered) | `set`, `map`, `multiset`, `multimap` | Sorted by key, O(log n) operations |
| Associative (unordered) | `unordered_set`, `unordered_map` | Hash based, average O(1) operations |
| Adaptors | `stack`, `queue`, `priority_queue` | Interface over underlying container |

## 9.2 std::vector

`vector` is a dynamically resizable array. Elements are stored contiguously in memory, providing cache-friendly iteration and O(1) random access.

```cpp
#include <vector>

int main() {
    std::vector<int> vec;

    vec.push_back(10);       // add to end
    vec.push_back(20);
    vec.push_back(30);

    std::cout << vec[1] << '\n';         // 20 (unchecked)
    std::cout << vec.at(1) << '\n';      // 20 (bounds-checked)

    vec.pop_back();                      // remove last
    std::cout << vec.size() << '\n';     // 2

    for (int v : vec) {                  // range-based for
        std::cout << v << ' ';
    }
}
```

Key operations and complexities:
- `operator[]` â€” O(1)
- `push_back` â€” amortized O(1)
- `insert` at arbitrary position â€” O(n)
- `erase` â€” O(n)

When `push_back` exceeds capacity, `vector` allocates a new, larger buffer (typically 1.5x or 2x), moves all elements, and deallocates the old buffer. Use `reserve(n)` to pre-allocate and avoid repeated reallocations.

## 9.3 std::list

`list` is a doubly-linked list. Insertion and deletion at any position are O(1), but random access is O(n) and memory overhead per element is significant.

```cpp
#include <list>

int main() {
    std::list<int> lst = {1, 2, 3};

    lst.push_front(0);          // O(1)
    lst.push_back(4);           // O(1)

    auto it = std::find(lst.begin(), lst.end(), 2);
    lst.insert(it, 99);         // O(1) once iterator found

    for (int v : lst) {
        std::cout << v << ' ';  // 0 1 99 2 3 4
    }

    // No operator[] â€” no random access
}
```

Use `list` when insertion/removal in the middle is frequent and element count is large. Otherwise, prefer `vector`.

## 9.4 std::deque

`deque` (double-ended queue) provides O(1) insertion and deletion at both ends, with O(1) random access.

```cpp
#include <deque>

int main() {
    std::deque<int> dq = {2, 3};

    dq.push_front(1);           // O(1)
    dq.push_back(4);            // O(1)

    std::cout << dq[0] << '\n'; // O(1) random access

    dq.pop_front();             // O(1)
    dq.pop_back();              // O(1)
}
```

Internally, `deque` is a sequence of fixed-size blocks. It combines many of `vector`'s advantages with efficient front operations, at the cost of slightly more complex iteration.

## 9.5 std::map and std::set

`map` stores key-value pairs sorted by key. `set` stores unique sorted keys. Both are implemented as balanced binary trees (typically red-black trees).

```cpp
#include <map>
#include <set>

int main() {
    std::map<std::string, int> ages;
    ages["Alice"] = 30;
    ages["Bob"] = 25;
    ages["Charlie"] = 35;

    for (const auto& [name, age] : ages) {
        std::cout << name << ": " << age << '\n';
    }
    // Output in alphabetical order

    std::set<int> unique = {3, 1, 4, 1, 5, 9, 2, 6};
    // Stores: 1, 2, 3, 4, 5, 6, 9

    if (unique.find(4) != unique.end()) {
        std::cout << "Found 4\n";
    }
}
```

Operations: O(log n) for `find`, `insert`, `erase`.

## 9.6 std::unordered_map and std::unordered_set

Hash-based containers (C++11) with average O(1) operations:

```cpp
#include <unordered_map>

int main() {
    std::unordered_map<std::string, int> freq;
    freq["apple"] = 3;
    freq["banana"] = 2;
    freq["cherry"] = 5;

    for (const auto& [key, value] : freq) {
        std::cout << key << ": " << value << '\n';
    }
    // Order is unspecified

    if (auto it = freq.find("banana"); it != freq.end()) {
        std::cout << "Found: " << it->second << '\n';
    }
}
```

Choose `unordered_map` over `map` when ordering is irrelevant and average O(1) lookup matters. Choose `map` when ordered traversal or range queries are needed.

## 9.7 Container Adaptors

Adaptors provide restricted interfaces over underlying containers:

```cpp
#include <stack>
#include <queue>

int main() {
    // Stack (LIFO) â€” default: deque
    std::stack<int> stk;
    stk.push(1);
    stk.push(2);
    stk.top();        // 2
    stk.pop();        // removes 2

    // Queue (FIFO) â€” default: deque
    std::queue<int> q;
    q.push(1);
    q.push(2);
    q.front();        // 1
    q.back();         // 2
    q.pop();          // removes 1

    // Priority queue â€” default: vector, max-heap
    std::priority_queue<int> pq;
    pq.push(10);
    pq.push(30);
    pq.push(20);
    pq.top();         // 30 (largest element)
    pq.pop();         // removes 30
}
```

## 9.8 Iterator Invalidation

Containers invalidate iterators when their internal structure changes. Dereferencing an invalidated iterator is undefined behaviour:

| Operation | Vector | List | Deque | Unordered map |
|-----------|--------|------|-------|---------------|
| `insert` | All after insertion | None | All | If rehash |
| `erase` | Erased and after | Erased only | Erased only | Erased only |
| `push_back` | All if reallocation | None | All if front full | If rehash |
| `resize` | All | None | All | â€” |

```cpp
std::vector<int> vec = {1, 2, 3, 4, 5};
for (auto it = vec.begin(); it != vec.end(); ++it) {
    if (*it % 2 == 0) {
        vec.erase(it);    // BUG: it is now invalidated
    }
}
```

Correct approach:

```cpp
for (auto it = vec.begin(); it != vec.end(); ) {
    if (*it % 2 == 0) {
        it = vec.erase(it);   // erase returns next iterator
    } else {
        ++it;
    }
}
```

## 9.9 Summary

Container selection is governed by algorithmic requirements: `vector` for contiguous storage and random access, `list` for frequent middle insertion, `deque` for efficient front/back operations, ordered associative containers for sorted access, unordered for fast hashed access, and adaptors for restricted interfaces. Iterator invalidation rules must be respected to avoid undefined behaviour.

## Exercises

### Review Questions

1. Under what circumstances does `vector::push_back` invalidate all iterators?
2. Why is `vector` generally preferred over `list` even when some middle insertion is needed?
3. How does `map` differ from `unordered_map` in terms of iteration order, complexity, and memory?
4. What is the underlying container for `stack` by default? How can it be changed?
5. Explain the difference between `priority_queue::top()` and `stack::top()`.

### Application Problems

1. Write a program that reads words from `std::cin`, counts their frequencies using an `unordered_map`, and prints the top 10 most frequent words (use a `priority_queue` or sort).
2. Implement a simple undo system using a `stack` of commands. Each command is a struct `{ string action, string data }`. Support `do_command` (push) and `undo` (pop and display).

### Challenge Problem

3. Implement a bidirectional map (bimap) using two `unordered_map`s internally: one mapping keys to values, the other mapping values to keys. Support insert, lookup by key, lookup by value, and erase by key. Ensure consistency between both maps on all operations.
