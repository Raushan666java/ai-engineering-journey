# Chapter 10: STL Algorithms — Master the C++ Standard Template Library

> **Previous:** [09-stl-containers](./09-stl-containers.md) | **Next:** [11-file-io](./11-file-io.md)

## Learning Objectives

After studying this chapter, students will be able to:

- Distinguish among the five STL algorithm categories (non-modifying, modifying, sorting, numeric, set operations)
- Apply std::find, std::count, std::equal, std::mismatch, and std::search on real data
- Use std::copy, std::transform, std::replace, std::fill, std::generate, std::remove, and std::unique correctly
- Explain the introsort fallback chain and when to choose stable_sort / partial_sort / nth_element
- Perform binary search with lower_bound, upper_bound, and equal_range
- Write lambda expressions and pass them into algorithms
- Analyze complexity with WHY behind every Big-O bound
- Build composed algorithm pipelines for real-world tasks

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| **Algo-Container Separation** | Iterator design decouples algo from container | STL algorithms work with any container |
| **Non-Modifying** | Algorithms that read but never write | Safe for const ranges |
| **Modifying** | copy, transform, replace mutate elements | Use back_inserter for output |
| **Sorting** | introsort default, stable_sort when order matters | Use sort() by default; partial_sort for top-N |
| **Binary Search** | lower_bound/upper_bound return insertion points | Check sorted precondition! |
| **Set Operations** | merge, set_union, set_intersection work on sorted ranges | O(n) on sorted input |
| **Numeric** | accumulate, inner_product in <numeric> | Pair with lambdas for custom reductions |
| **Lambda + Algorithm** | Lambdas are inline callables | Capture [], parameters, body |

## Chapter Roadmap

`mermaid
flowchart LR
    A[Algo-Container Separation] --> B[Non-Modifying]
    A --> C[Modifying]
    A --> D[Sorting]
    A --> E[Binary Search]
    A --> F[Set Operations]
    A --> G[Numeric]
    D --> H[Lambdas with Algorithms]
    E --> H
    F --> H
    G --> H
    H --> I[Algorithm Composition]
`

## 10.1 The Algorithm-Container Separation

STL algorithms operate on **iterator ranges** rather than containers directly. This decoupling means a single algorithm works across ector, list, deque, rray, and built-in arrays.

**Analogy:** A chef (algorithm) does not care whether ingredients come from a farmer's market (vector), a supermarket (deque), or a home garden (list). The chef only needs a **tray** (iterator) to receive each ingredient one at a time.

### How It Works

1. Algorithms ask for a **begin iterator** and an **end iterator** marking the half-open range [begin, end)
2. The algorithm advances the iterator from egin toward end using ++it
3. It reads/writes values through *it
4. The container is never mentioned — only iterators

### Iterator Category Requirements

| Algorithm Example | Minimum Iterator Required | Supported Containers |
|------------------|--------------------------|---------------------|
| std::find | InputIterator | All containers |
| std::sort | RandomAccessIterator | vector, deque, array, string, C-array |
| std::reverse | BidirectionalIterator | vector, deque, list, array, string |
| std::copy | InputIterator / OutputIterator | All (source), All with inserter (dest) |
| std::binary_search | ForwardIterator | vector, deque, array, string, C-array |

`cpp
#include <algorithm>
#include <vector>
#include <list>
#include <iostream>

int main() {
    std::vector<int> vec = {3, 1, 4, 1, 5};
    std::sort(vec.begin(), vec.end());   // OK: vector has random-access iterators

    std::list<int> lst = {9, 2, 6, 5, 3};
    // std::sort(lst.begin(), lst.end());  // COMPILE ERROR: list has bidirectional iterators
    lst.sort();                           // list provides its own sort member

    for (int x : vec) std::cout << x << ' ';  // 1 1 3 4 5
    return 0;
}
`

**Output:**
`
1 1 3 4 5
`

### Categories of STL Algorithms

| Category | Behavior | Examples |
|----------|----------|---------|
| **Non-Modifying** | Read only; never change elements | find, count, equal, mismatch, search, for_each |
| **Modifying** | Change elements in-place or copy to output | copy, transform, replace, fill, generate, remove, unique, reverse, rotate |
| **Sorting** | Reorder elements | sort, stable_sort, partial_sort, nth_element |
| **Binary Search** | Fast search on sorted ranges | binary_search, lower_bound, upper_bound, equal_range |
| **Set Operations** | Assumes sorted input | merge, set_union, set_intersection, set_difference |
| **Numeric** | Arithmetic reductions | accumulate, inner_product, partial_sum, iota |
| **Min/Max** | Find extreme values | min, max, min_element, max_element, minmax_element |
| **Heap** | Binary heap operations | push_heap, pop_heap, make_heap, sort_heap |
| **Partition** | Split by predicate | partition, stable_partition, partition_point |

## 10.2 Non-Modifying Algorithms

Non-modifying algorithms read elements through input iterators and never write. They are safe for const containers.

### 10.2.1 std::find — Linear Search

**Analogy:** You dropped your keys somewhere in the house. You walk from room to room, check each table, and stop the moment you see them — exactly the position where they are.

**Steps:**
1. Start at egin iterator
2. Compare current element with target value using operator==
3. If equal — return iterator pointing to this element
4. Otherwise — advance to next element
5. If end is reached — return end (not found)

**Pseudocode:**
`
function find(first, last, value):
    while first != last:
        if *first == value:
            return first
        ++first
    return last
`

**C++ Code:**
`cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> numbers = {10, 20, 30, 40, 50, 30, 60};
    auto it = std::find(numbers.begin(), numbers.end(), 30);
    if (it != numbers.end())
        std::cout << "Found 30 at position: "
                  << std::distance(numbers.begin(), it) << '\n';
    else
        std::cout << "30 not found\n";

    // Find non-existent value
    it = std::find(numbers.begin(), numbers.end(), 99);
    std::cout << "99 found? " << (it == numbers.end() ? "No" : "Yes") << '\n';
    return 0;
}
`

**Output:**
`
Found 30 at position: 2
99 found? No
`

**Complexity:** O(n) — linear. **WHY:** In the worst case, the target is at the last position or absent, requiring every element to be compared exactly once. Each element receives exactly one operator== call. No early termination can avoid the full scan when the element does not exist.

### 10.2.2 std::count and std::count_if — Count Occurrences

**Analogy:** A supermarket cashier scans every item in your cart and counts how many are dairy products. She does not stop after finding one — she needs the total.

**Steps:**
1. Initialize counter c = 0
2. Visit each element from egin to end
3. For count: if element == value, increment c
4. For count_if: if predicate returns true, increment c
5. Return c

**C++ Code:**
`cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> scores = {85, 92, 78, 92, 88, 92, 70};
    int count_92 = std::count(scores.begin(), scores.end(), 92);
    std::cout << "92 appears " << count_92 << " times\n";

    int count_pass = std::count_if(scores.begin(), scores.end(),
                                    [](int s) { return s >= 80; });
    std::cout << "Passing scores (>=80): " << count_pass << '\n';
    return 0;
}
`

**Output:**
`
92 appears 3 times
Passing scores (>=80): 5
`

**Complexity:** O(n). **WHY:** Every element must be inspected to count occurrences. Unlike ind which short-circuits, count must visit every element even if the answer is obvious early. The lambda predicate adds a small constant overhead per element.

### 10.2.3 std::equal — Range Equality

**Analogy:** Two chefs each prepare the same 5-course menu. You taste course 1 from both, course 2 from both, etc. If any pair differs, the meals are not equal.

**Steps:**
1. Iterate both ranges simultaneously
2. Compare element-wise using operator== (or custom predicate)
3. If any pair differs — return alse
4. If all pairs match — return 	rue
5. If first range is longer and no mismatch — UB unless second range is at least as long

**C++ Code:**
`cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> a = {1, 2, 3, 4, 5};
    std::vector<int> b = {1, 2, 3, 4, 5};
    std::vector<int> c = {1, 2, 0, 4, 5};

    std::cout << std::boolalpha;
    std::cout << "a == b: " << std::equal(a.begin(), a.end(), b.begin()) << '\n';
    std::cout << "a == c: " << std::equal(a.begin(), a.end(), c.begin()) << '\n';

    // With predicate: approximate comparison
    std::vector<double> x = {1.1, 2.2, 3.3};
    std::vector<double> y = {1.2, 2.3, 3.4};
    bool approx = std::equal(x.begin(), x.end(), y.begin(),
        [](double p, double q) { return std::abs(p - q) < 0.2; });
    std::cout << "x approx == y: " << approx << '\n';
    return 0;
}
`

**Output:**
`
a == b: true
a == c: false
x approx == y: true
`

**Complexity:** O(n). **WHY:** The algorithm compares the shorter prefix of both ranges element-by-element. At most min(len1, len2) comparisons occur. Each comparison is O(1).

### 10.2.4 std::mismatch — First Differing Position

**Analogy:** Two students submit the same homework. The TA lines them up side by side and moves down line by line. At the first line that differs, the TA stamps "HERE!" on both papers.

**Steps:**
1. Walk both ranges simultaneously
2. Compare each corresponding pair
3. When a mismatch is found — stop and return pair of iterators to that position
4. If no mismatch — return {first_end, second_at_offset}

**C++ Code:**
`cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <string>

int main() {
    std::vector<int> v1 = {1, 2, 3, 4, 5};
    std::vector<int> v2 = {1, 2, 3, 0, 5};

    auto [it1, it2] = std::mismatch(v1.begin(), v1.end(), v2.begin());
    if (it1 != v1.end())
        std::cout << "First mismatch: v1 has " << *it1
                  << ", v2 has " << *it2 << " at position "
                  << std::distance(v1.begin(), it1) << '\n';

    // String example: DNA sequences
    std::string dna1 = "ATCGGCTA";
    std::string dna2 = "ATCGTCTA";
    auto [d1, d2] = std::mismatch(dna1.begin(), dna1.end(), dna2.begin());
    if (d1 != dna1.end())
        std::cout << "DNA differs at position "
                  << std::distance(dna1.begin(), d1) << ": "
                  << *d1 << " vs " << *d2 << '\n';
    return 0;
}
`

**Output:**
`
First mismatch: v1 has 4, v2 has 0 at position 3
DNA differs at position 4: G vs T
`

**Complexity:** O(n). **WHY:** In the worst case, the ranges match fully or the mismatch is at the last position. Every position up to the mismatch must be compared.

### 10.2.5 std::search — Subrange Search

**Analogy:** You are scanning a long document for the phrase "confidential". You check position 0: 'c' matches, 'o' matches ... 'l' at position 10 fails. You slide to position 1: 'o' != 'c'. Position 2: 'n' != 'c'. Continue until you find a full match or reach the end.

**Steps:**
1. For each start position in [first1, last1 - (last2-first2))
2. Attempt to match the entire subrange [first2, last2)
3. If full match — return iterator to the start position
4. If no start position works — return last1

**C++ Code:**
`cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <string>

int main() {
    std::string text = "the quick brown fox jumps over the lazy dog";
    std::string pattern = "brown";

    auto it = std::search(text.begin(), text.end(),
                           pattern.begin(), pattern.end());
    if (it != text.end())
        std::cout << "Found '" << pattern << "' at position "
                  << std::distance(text.begin(), it) << '\n';

    // Using Boyer-Moore searcher (C++17)
    auto searcher = std::boyer_moore_searcher(pattern.begin(), pattern.end());
    it = std::search(text.begin(), text.end(), searcher);
    if (it != text.end())
        std::cout << "Boyer-Moore found at position "
                  << std::distance(text.begin(), it) << '\n';
    return 0;
}
`

**Output:**
`
Found 'brown' at position 10
Boyer-Moore found at position 10
`

**Complexity:**
- Naive: O(n × m) — worst case when mismatches occur late for every start position
- Boyer-Moore: O(n + m) — skips characters using bad-character and good-suffix heuristics
- **WHY:** Naive search re-compares the same characters many times. Boyer-Moore preprocesses the pattern to compute skip tables, allowing large jumps that reduce comparisons drastically. For short patterns on random text, the naive version is often faster due to lower overhead.

### Non-Modifying Algorithm Summary

| Algorithm | Returns | Stop-on-Find? |
|-----------|---------|---------------|
| ind | Iterator to first match | Yes |
| ind_if | Iterator to first predicate match | Yes |
| count / count_if | Integer count | No |
| equal | bool | Yes (on mismatch) |
| mismatch | Pair of iterators | Yes (on mismatch) |
| search | Iterator to subrange start | Yes |
| ll_of / ny_of / 
one_of | bool | Yes (short-circuits) |
| or_each | void (C++17 returns function) | No |
## 10.3 Modifying Algorithms

Modifying algorithms change elements — either in-place (within the source range) or by writing to a separate output iterator.

### 10.3.1 std::copy — Range Copy

**Analogy:** A photocopier scans each page of a document and produces an identical copy on fresh paper. The original remains untouched.

**Steps:**
1. Start at `first`
2. Read `*first`, write to `*result`
3. Advance both iterators
4. Repeat until `first == last`
5. Return the final output iterator

**Pseudocode:**
```
function copy(first, last, result):
    while first != last:
        *result = *first
        ++result
        ++first
    return result
```

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <iterator>

int main() {
    std::vector<int> src = {1, 2, 3, 4, 5};
    std::vector<int> dst;  // empty!

    // ERROR: dst must have space — use back_inserter
    // std::copy(src.begin(), src.end(), dst.begin());

    // Correct: back_inserter calls push_back for each element
    std::copy(src.begin(), src.end(), std::back_inserter(dst));

    for (int x : dst) std::cout << x << ' ';  // 1 2 3 4 5
    std::cout << '\n';

    // Copy only first 3 elements
    std::vector<int> part;
    std::copy_n(src.begin(), 3, std::back_inserter(part));
    for (int x : part) std::cout << x << ' ';  // 1 2 3
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
1 2 3 4 5
1 2 3
```

**Complexity:** O(n). **WHY:** Exactly n assignments execute — one per element. Each assignment is O(1). No comparisons are performed.

### 10.3.2 std::transform — Apply Function to Range

**Analogy:** A factory assembly line. Each raw part enters the machine, gets processed (drilled, painted, assembled), and exits as a finished product. The machine applies the same operation to every part.

**Steps:**
1. For each element in source range:
2. Apply unary operation (or binary operation for two input ranges)
3. Write the result to output iterator
4. Advance all iterators
5. Return output iterator

**Pseudocode:**
```
function transform(first, last, result, unary_op):
    while first != last:
        *result = unary_op(*first)
        ++result
        ++first
    return result
```

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <iterator>
#include <cmath>

int main() {
    std::vector<double> celsius = {0.0, 10.0, 20.0, 30.0, 100.0};
    std::vector<double> fahrenheit;

    // Unary transform: Celsius -> Fahrenheit
    std::transform(celsius.begin(), celsius.end(),
                   std::back_inserter(fahrenheit),
                   [](double c) { return c * 9.0 / 5.0 + 32.0; });

    std::cout << "C  ->  F\n";
    for (size_t i = 0; i < celsius.size(); ++i)
        std::cout << celsius[i] << "  ->  " << fahrenheit[i] << '\n';

    // Binary transform: element-wise sum of two vectors
    std::vector<int> a = {1, 2, 3};
    std::vector<int> b = {10, 20, 30};
    std::vector<int> sum;

    std::transform(a.begin(), a.end(), b.begin(),
                   std::back_inserter(sum),
                   [](int x, int y) { return x + y; });
    // sum: 11 22 33

    std::cout << "\nElement-wise sum: ";
    for (int x : sum) std::cout << x << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
C  ->  F
0  ->  32
10  ->  50
20  ->  68
30  ->  86
100  ->  212

Element-wise sum: 11 22 33
```

**Complexity:** O(n). **WHY:** The operation is applied exactly n times. Each invocation of the unary/binary function is O(1) for simple arithmetic. The total grows linearly with input size.

### 10.3.3 std::replace and std::replace_if — Substitute Elements

**Analogy:** A recall notice: every copy of "Batch 7A" medicine on the shelf must be replaced with "Batch 8B". A pharmacist walks the aisle, replaces each match, and leaves everything else alone.

**Steps:**
1. Iterate `[first, last)`
2. For `replace`: if `*it == old_value`, assign `new_value`
3. For `replace_if`: if `pred(*it)` is true, assign `new_value`
4. Continue to end

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> data = {1, 5, 2, 5, 3, 5, 4};
    std::cout << "Original: ";
    for (int x : data) std::cout << x << ' ';

    // Replace all 5s with 99
    std::replace(data.begin(), data.end(), 5, 99);
    std::cout << "\nAfter replace 5 -> 99: ";
    for (int x : data) std::cout << x << ' ';

    // Replace all values > 50 with 0
    std::vector<int> scores = {30, 80, 45, 95, 20};
    std::replace_if(scores.begin(), scores.end(),
                    [](int s) { return s > 50; }, 0);
    std::cout << "\nAfter replace_if > 50 -> 0: ";
    for (int x : scores) std::cout << x << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Original: 1 5 2 5 3 5 4
After replace 5 -> 99: 1 99 2 99 3 99 4
After replace_if > 50 -> 0: 30 0 45 0 20
```

**Complexity:** O(n). **WHY:** Every element is visited exactly once. The comparison (or predicate evaluation) and conditional assignment are each O(1). No element is visited more than once.

### 10.3.4 std::fill and std::fill_n — Assign Same Value

**Analogy:** A hotel cleaner puts a "Welcome" card on every pillow in a 50-room hotel. Same card, every room — no exceptions.

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v(10);
    std::fill(v.begin(), v.end(), 42);
    std::cout << "Fill with 42: ";
    for (int x : v) std::cout << x << ' ';

    // Fill first 5 elements with 99
    std::fill_n(v.begin(), 5, 99);
    std::cout << "\nAfter fill_n first 5 with 99: ";
    for (int x : v) std::cout << x << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Fill with 42: 42 42 42 42 42 42 42 42 42 42
After fill_n first 5 with 99: 99 99 99 99 99 42 42 42 42 42
```

**Complexity:** O(n). **WHY:** Exactly n assignments. Each assignment is O(1). No comparisons.

### 10.3.5 std::generate and std::generate_n — Assign from Generator

**Analogy:** A lottery machine spits out a random numbered ball for each participant. The machine (generator) produces a fresh value each time it is called.

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <random>

int main() {
    std::vector<int> v(10);

    // Generate sequential values: 1, 2, 3, ...
    int n = 1;
    std::generate(v.begin(), v.end(), [&n]() { return n++; });
    std::cout << "Sequential: ";
    for (int x : v) std::cout << x << ' ';

    // Generate random values
    std::vector<int> rand_vec(8);
    std::mt19937 gen(std::random_device{}());
    std::uniform_int_distribution<int> dist(1, 100);
    std::generate(rand_vec.begin(), rand_vec.end(),
                  [&]() { return dist(gen); });
    std::cout << "\nRandom: ";
    for (int x : rand_vec) std::cout << x << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output (random seed-dependent):**
```
Sequential: 1 2 3 4 5 6 7 8 9 10
Random: 47 83 12 65 91 34 58 22
```

**Complexity:** O(n). **WHY:** The generator function is called exactly n times. Each call is O(1) for simple generators.

### 10.3.6 std::remove and std::remove_if — The Erase-Remove Idiom

**Critical Insight:** `std::remove` does NOT erase elements. It **partitions** the range so that kept elements are at the front, and returns an iterator to the new logical end. The removed elements remain at the tail in unspecified state.

**Analogy:** A librarian goes through a shelf, pulls out damaged books, and shifts remaining books forward to close the gaps. The empty shelf space at the end is not removed — the librarian just marks where the good books end. A second person (erase) actually removes the empty shelf.

**Steps:**
1. Scan from left to right with two pointers: read and write
2. When read points to a "keep" element, copy it to write position and advance write
3. When read points to a "remove" element, skip it (do not advance write)
4. After full scan: return write iterator (new logical end)
5. Call `container.erase(new_end, container.end())` to actually remove

**Pseudocode:**
```
function remove(first, last, value):
    write = first
    read = first
    while read != last:
        if *read != value:
            *write = *read
            ++write
        ++read
    return write
```

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> data = {1, 2, 3, 2, 4, 2, 5};

    // Step 1: remove (move non-2s to front)
    auto new_end = std::remove(data.begin(), data.end(), 2);
    std::cout << "After remove (logical): ";
    for (int x : data) std::cout << x << ' ';
    std::cout << "| new_end at position " << std::distance(data.begin(), new_end);

    // Step 2: erase (actually delete)
    data.erase(new_end, data.end());
    std::cout << "\nAfter erase: ";
    for (int x : data) std::cout << x << ' ';

    // remove_if: remove all odd numbers
    std::vector<int> nums = {1, 2, 3, 4, 5, 6, 7, 8};
    nums.erase(
        std::remove_if(nums.begin(), nums.end(),
                        [](int x) { return x % 2 != 0; }),
        nums.end());
    std::cout << "\nAfter remove_if odds: ";
    for (int x : nums) std::cout << x << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
After remove (logical): 1 3 4 5 2 2 2 | new_end at position 4
After erase: 1 3 4 5
After remove_if odds: 2 4 6 8
```

**Complexity:** O(n). **WHY:** The algorithm performs exactly n reads and at most n writes (fewer when elements are removed). Each element is examined exactly once, and each kept element is move-assigned exactly once.

### 10.3.7 std::unique — Remove Consecutive Duplicates

**Analogy:** You have a sorted deck of cards: A♠ A♠ A♠ K♠ K♠ Q♠ Q♠ Q♠ Q♠. You go through and keep only the first card of each rank. The result: A♠ K♠ Q♠.

**Important:** `unique` only removes **consecutive** duplicates. Always sort the range first unless duplicates are already adjacent.

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> data = {1, 1, 2, 3, 3, 3, 4, 5, 5};

    auto new_end = std::unique(data.begin(), data.end());
    data.erase(new_end, data.end());
    std::cout << "Unique: ";
    for (int x : data) std::cout << x << ' ';

    // Common pattern: sort + unique + erase
    std::vector<int> unsorted = {5, 3, 1, 3, 4, 1, 2, 5};
    std::sort(unsorted.begin(), unsorted.end());
    unsorted.erase(
        std::unique(unsorted.begin(), unsorted.end()),
        unsorted.end());
    std::cout << "\nSort + unique: ";
    for (int x : unsorted) std::cout << x << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Unique: 1 2 3 4 5
Sort + unique: 1 2 3 4 5
```

**Complexity:** O(n). **WHY:** Each element is compared with its predecessor exactly once. Linear scan with a single pass.

### Additional Modifying Algorithms

**C++ Code (reverse, rotate, random_shuffle):**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};

    std::reverse(v.begin(), v.end());
    std::cout << "Reverse: ";
    for (int x : v) std::cout << x << ' ';  // 5 4 3 2 1

    std::rotate(v.begin(), v.begin() + 2, v.end());
    std::cout << "\nRotate by 2: ";
    for (int x : v) std::cout << x << ' ';  // 3 2 1 5 4

    std::shuffle(v.begin(), v.end(), std::mt19937{std::random_device{}()});
    std::cout << "\nShuffle: ";
    for (int x : v) std::cout << x << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Reverse: 5 4 3 2 1
Rotate by 2: 3 2 1 5 4
Shuffle: 2 5 4 3 1
```

**reverse complexity:** O(n) — n/2 swaps. **rotate complexity:** O(n) — 3 range reversals or gcd-based swaps. **shuffle complexity:** O(n) — Fisher-Yates, n-1 swaps.

## 10.4 Sorting Algorithms

Sorting rearranges elements into a specified order. The STL provides four sorting algorithms with different guarantees.

### 10.4.1 std::sort — Default Sort (Introsort)

**Analogy:** A mailroom clerk needs to sort 10,000 letters by zip code. They use a fast hybrid approach: start with QuickSort for speed, but if the partitions become too unbalanced (danger of O(n^2)), switch to HeapSort. For very small piles, use InsertionSort.

**Algorithm:** Introsort = QuickSort + HeapSort + InsertionSort

1. If subrange size < 16: use InsertionSort (fastest for tiny arrays)
2. Otherwise, median-of-three partition
3. Recurse on both partitions
4. If recursion depth exceeds 2 × log₂(n): switch to HeapSort
5. Final InsertionSort pass at the end (exploits near-sorted state)

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> data = {9, 3, 7, 1, 6, 2, 8, 4, 5, 0};

    std::sort(data.begin(), data.end());
    std::cout << "Ascending: ";
    for (int x : data) std::cout << x << ' ';  // 0 1 2 3 4 5 6 7 8 9

    std::sort(data.begin(), data.end(), std::greater<int>());
    std::cout << "\nDescending: ";
    for (int x : data) std::cout << x << ' ';  // 9 8 7 6 5 4 3 2 1 0

    // Sort by absolute value
    std::vector<int> vals = {-5, 3, -2, 8, -1, 4};
    std::sort(vals.begin(), vals.end(),
              [](int a, int b) { return std::abs(a) < std::abs(b); });
    std::cout << "\nBy absolute: ";
    for (int x : vals) std::cout << x << ' ';  // -1 -2 3 4 -5 8
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Ascending: 0 1 2 3 4 5 6 7 8 9
Descending: 9 8 7 6 5 4 3 2 1 0
By absolute: -1 -2 3 4 -5 8
```

**Complexity:** O(n log n) average, O(n log n) worst-case. **WHY:**
- QuickSort partition is O(n) per level; log₂(n) levels give n log n
- HeapSort fallback guarantees O(n log n) worst-case — prevents QuickSort's O(n²) degenerate behavior
- InsertionSort finishes in O(n) on nearly-sorted data (the final pass)
- Median-of-three reduces probability of worst-case partition by 95%+

### 10.4.2 std::stable_sort — Stable Sort (MergeSort + InsertionSort)

**Preserves relative order of equivalent elements.**

**Analogy:** Sorting students by grade. Two students both have an 'A'. Their original order (Alice before Bob) is preserved in the sorted output.

**Algorithm:** MergeSort with InsertionSort optimization for small runs.

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <string>

struct Student {
    std::string name;
    int grade;
};

int main() {
    std::vector<Student> students = {
        {"Alice", 90}, {"Bob", 85}, {"Charlie", 90},
        {"Diana", 85}, {"Eve", 95}
    };

    // Sort by grade, keep original order for equal grades
    std::stable_sort(students.begin(), students.end(),
        [](const Student& a, const Student& b) {
            return a.grade < b.grade;
        });

    for (const auto& s : students)
        std::cout << s.name << ": " << s.grade << '\n';
    return 0;
}
```

**Output:**
```
Bob: 85
Diana: 85
Alice: 90
Charlie: 90
Eve: 95
```

Notice Bob comes before Diana (both 85), and Alice before Charlie (both 90) — original order preserved.

**Complexity:** O(n log² n) if additional memory is unavailable; O(n log n) if buffer of size n is available. **WHY:** MergeSort inherently preserves stability. The merge step requires comparing elements and placing the left-range element first when equal. The log² n penalty occurs when merge must fall back to in-place merging (no extra buffer).

### 10.4.3 std::partial_sort — Top N in Order

**Places the top N elements in sorted order at the front. The rest are in unspecified order.**

**Analogy:** A competition with 100 contestants. You only care about the top 3 podium finishers (1st, 2nd, 3rd). You do not care about the order of positions 4-100.

**Algorithm:** Heap-based. Build max-heap, repeatedly pop top into position.

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> scores = {78, 92, 55, 88, 95, 67, 84, 91, 73, 89};

    // Get top 3 in sorted order
    std::partial_sort(scores.begin(), scores.begin() + 3, scores.end(),
                      std::greater<int>());

    std::cout << "Top 3 scores: ";
    for (int i = 0; i < 3; ++i)
        std::cout << scores[i] << ' ';  // 95 92 91
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Top 3 scores: 95 92 91
```

**Complexity:** O(n log k) where k = middle - first. **WHY:** Building the initial heap is O(n). Each of the k top elements requires a pop-heap operation taking O(log n). Total: O(n + k log n) = O(n log k) when k << n. This is significantly faster than full sort when k is small.

### 10.4.4 std::nth_element — Single Element in Correct Position

**Places exactly one element (the nth) at its sorted position. All elements before are ≤ it; all after are ≥ it. Neither side is sorted.**

**Analogy:** You want to know the median score in a class of 10,000. You do not need the entire sorted list — you just need the 5,000th score in its correct position.

**Algorithm:** `introselect` — QuickSelect with median-of-three pivoting and recursion-depth fallback.

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {9, 3, 7, 1, 6, 2, 8, 4, 5, 0};

    // Place the element at position 4 (5th smallest) in its sorted position
    std::nth_element(v.begin(), v.begin() + 4, v.end());

    std::cout << "5th smallest element: " << v[4] << '\n';
    std::cout << "Array: ";
    for (int x : v) std::cout << x << ' ';
    // All elements before position 4 are <= v[4]; after are >= v[4]
    std::cout << "\nBefore v[4]: ";
    for (int i = 0; i < 4; ++i) std::cout << v[i] << ' ';
    std::cout << "\nAfter v[4]: ";
    for (size_t i = 5; i < v.size(); ++i) std::cout << v[i] << ' ';
    std::cout << '\n';

    // Find median without full sort
    std::vector<int> data = {7, 2, 9, 4, 1, 8, 5, 3, 6};
    auto mid = data.begin() + data.size() / 2;
    std::nth_element(data.begin(), mid, data.end());
    std::cout << "Median: " << *mid << '\n';
    return 0;
}
```

**Output:**
```
5th smallest element: 4
Array: 0 1 3 2 4 5 7 8 6 9
Before v[4]: 0 1 3 2
After v[4]: 5 7 8 6 9
Median: 5
```

**Complexity:** Average O(n), worst-case O(n log n) with introselect fallback. **WHY:** QuickSelect discards half the elements after each partition, creating a geometric series: n + n/2 + n/4 + ... = 2n = O(n). The introselect fallback prevents worst-case O(n²) by switching to a median-of-medians approach when recursion goes too deep.

### Dry Run — std::sort on {9, 3, 7, 1, 6, 2, 8, 4, 5, 0}

| Step | Action | Range | Pivot | Partitioned State |
|------|--------|-------|-------|-------------------|
| 1 | Initial | [0,9] | — | [9, 3, 7, 1, 6, 2, 8, 4, 5, 0] |
| 2 | Median-of-3 | [0,9] | 6 (mid) | [5, 3, 0, 1, 4, 2, 6, 8, 7, 9] |
| 3 | Recurse left | [0,5] | 2 (mid) | [1, 0, 2, 5, 4, 3, ...] |
| 4 | Recurse left | [0,1] | — | [0, 1, ...] |
| 5 | Recurse right | [2,5] | 4 (mid) | [..., 3, 4, 5, ...] |
| 6 | Recurse right | [6,9] | 8 (mid) | [..., 7, 8, 9] |
| 7 | Recurse left | [6,6] | — | [..., 7, ...] |
| 8 | Final | [0,9] | — | [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] |

**Trace explanation:** At each recursion level, the pivot (median-of-3 from first, middle, last) splits the range. Left partition contains elements ≤ pivot; right contains ≥ pivot. Subranges smaller than 16 elements use InsertionSort directly. The recursion tree depth is log₂(10) ≈ 4 levels, each doing O(n) work — total O(n log n).

### Dry Run — std::nth_element for Median on {7, 2, 9, 4, 1, 8, 5, 3, 6}

Target: position 4 (0-indexed, the 5th element = median)

| Step | Range | Pivot | After Partition | pivot_pos | Action |
|------|-------|-------|----------------|-----------|--------|
| 1 | [0,8] | 5 (mid) | [3,2,4,1, 5, 8,7,9,6] | 4 | Target = 4, found! |
| Done | — | — | [3,2,4,1, 5, 8,7,9,6] | — | v[4] = 5 is median |

After partition, elements before position 4: {3,2,4,1} ≤ 5. Elements after: {8,7,9,6} ≥ 5. Neither side is sorted, but the median is at the correct position.

### Sorting Algorithm Comparison

| Algorithm | Guarantee | Stable? | Memory | Use Case |
|-----------|-----------|---------|--------|----------|
| `sort` | O(n log n) | No | O(log n) | Default — general sorting |
| `stable_sort` | O(n log n) w/ buffer | Yes | O(n) | Equal-order matters |
| `partial_sort` | O(n log k) | No | O(1) | Top-k elements in order |
| `nth_element` | O(n) avg | No | O(1) | Median / percentile |
| `list::sort` | O(n log n) | Yes | O(log n) | Sorting std::list |
## 10.5 Binary Search Algorithms

Binary search algorithms require a **sorted range**. They provide O(log n) lookup by repeatedly halving the search space.

### 10.5.1 std::lower_bound — First Element Not Less Than Value

**Analogy:** You have a sorted stack of exam papers graded 0-100. You want the first paper with grade ≥ 75. You open the middle — 68. Discard left half. Open middle of right half — 82. Discard right half. Continue until you hold exactly the first paper ≥ 75.

**Steps:**
1. Set `lo = first, hi = last, count = distance(first, last)`
2. While `count > 0`:
3. `step = count / 2`, `mid = lo + step`
4. If `*mid < value`: `lo = ++mid`, `count -= step + 1`
5. Else: `count = step`
6. Return `lo`

**Pseudocode:**
```
function lower_bound(first, last, value):
    count = distance(first, last)
    while count > 0:
        step = count / 2
        mid = first + step
        if *mid < value:
            first = ++mid
            count -= step + 1
        else:
            count = step
    return first
```

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> data = {10, 20, 30, 30, 30, 40, 50};

    // First position where 30 could be inserted without breaking sort
    auto it = std::lower_bound(data.begin(), data.end(), 30);
    std::cout << "lower_bound(30) at position: "
              << std::distance(data.begin(), it)
              << " (value: " << *it << ")\n";

    // First position >= 35
    it = std::lower_bound(data.begin(), data.end(), 35);
    std::cout << "lower_bound(35) at position: "
              << std::distance(data.begin(), it)
              << " (value: " << *it << ")\n";

    // First position >= 100 (beyond end)
    it = std::lower_bound(data.begin(), data.end(), 100);
    if (it == data.end())
        std::cout << "lower_bound(100) = end (all elements < 100)\n";

    return 0;
}
```

**Output:**
```
lower_bound(30) at position: 2 (value: 30)
lower_bound(35) at position: 5 (value: 40)
lower_bound(100) = end (all elements < 100)
```

### 10.5.2 std::upper_bound — First Element Greater Than Value

**Analogy:** Same exam papers. You want the first paper with grade > 75. Binary search again, but this time the comparison is `mid <= value`.

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> data = {10, 20, 30, 30, 30, 40, 50};

    // First position > 30
    auto it = std::upper_bound(data.begin(), data.end(), 30);
    std::cout << "upper_bound(30) at position: "
              << std::distance(data.begin(), it)
              << " (value: " << *it << ")\n";

    // Range of all 30s = [lower_bound, upper_bound)
    auto lo = std::lower_bound(data.begin(), data.end(), 30);
    auto hi = std::upper_bound(data.begin(), data.end(), 30);
    std::cout << "Occurrences of 30: "
              << std::distance(lo, hi) << '\n';

    return 0;
}
```

**Output:**
```
upper_bound(30) at position: 5 (value: 40)
Occurrences of 30: 3
```

### 10.5.3 std::binary_search — Existence Check

**Simply returns whether the value exists in sorted range.** Implemented as `*lower_bound(...) == value`.

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> data = {1, 3, 5, 7, 9, 11, 13};

    bool found = std::binary_search(data.begin(), data.end(), 7);
    std::cout << "7 exists: " << std::boolalpha << found << '\n';

    found = std::binary_search(data.begin(), data.end(), 8);
    std::cout << "8 exists: " << found << '\n';

    // Always sort before binary_search!
    std::vector<int> unsorted = {9, 1, 7, 3, 5};
    std::sort(unsorted.begin(), unsorted.end());  // MUST sort first
    found = std::binary_search(unsorted.begin(), unsorted.end(), 7);
    std::cout << "7 in unsorted (after sort): " << found << '\n';
    return 0;
}
```

**Output:**
```
7 exists: true
8 exists: false
7 in unsorted (after sort): true
```

### 10.5.4 std::equal_range — Complete Range of Equal Values

**Returns a pair of iterators: `{lower_bound, upper_bound}` in one call.**

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> data = {10, 20, 20, 20, 30, 40, 40, 50};

    auto [lo, hi] = std::equal_range(data.begin(), data.end(), 20);
    std::cout << "Range of 20: [" << std::distance(data.begin(), lo)
              << ", " << std::distance(data.begin(), hi) << ")\n";
    std::cout << "Count of 20: " << std::distance(lo, hi) << '\n';

    for (auto it = lo; it != hi; ++it)
        std::cout << *it << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Range of 20: [1, 4)
Count of 20: 3
20 20 20
```

### Dry Run — lower_bound(30) on {10, 20, 30, 30, 30, 40, 50}

| Iteration | first | count | step | mid | *mid | *mid < 30? | Action |
|-----------|-------|-------|------|-----|------|------------|--------|
| 1 | pos 0 | 7 | 3 | pos 3 | 30 | No | count = 3 |
| 2 | pos 0 | 3 | 1 | pos 1 | 20 | Yes | first = pos 2, count = 1 |
| 3 | pos 2 | 1 | 0 | pos 2 | 30 | No | count = 0 |
| End | pos 2 | 0 | — | — | — | — | Return pos 2 |

**Result:** Iterator to position 2 (first 30). Only 3 comparisons needed for n=7.

### Binary Search Complexity Analysis

| Algorithm | Complexity | Comparisons | WHY |
|-----------|-----------|-------------|-----|
| `lower_bound` | O(log n) | ⌈log₂(n+1)⌉ | Each iteration halves the range; at most log₂(n) iterations |
| `upper_bound` | O(log n) | ⌈log₂(n+1)⌉ | Identical loop structure |
| `binary_search` | O(log n) | ⌈log₂(n+1)⌉ | Delegates to lower_bound + one equality check |
| `equal_range` | O(log n) | 2 × log₂(n) | Finds lower and upper bounds — ~2× work of single bound |
| Linear search | O(n) | n | Compare with every element |

**WHY O(log n) is powerful:** For n = 1,000,000, binary search needs at most 20 comparisons. Linear search needs up to 1,000,000 comparisons — 50,000× more.

## 10.6 Set Operations (on Sorted Ranges)

Set operations require **sorted input** and produce **sorted output**. They operate on arbitrary ranges, not just std::set.

### 10.6.1 std::merge — Merge Two Sorted Ranges

**Analogy:** Two sorted piles of numbered cards. You compare the top card of each pile, take the smaller one, and place it on the output pile. Repeat until both piles are empty.

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <iterator>

int main() {
    std::vector<int> a = {1, 3, 5, 7, 9};
    std::vector<int> b = {2, 4, 6, 8, 10};
    std::vector<int> merged;

    std::merge(a.begin(), a.end(), b.begin(), b.end(),
               std::back_inserter(merged));

    std::cout << "Merged: ";
    for (int x : merged) std::cout << x << ' ';  // 1 2 3 4 5 6 7 8 9 10
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Merged: 1 2 3 4 5 6 7 8 9 10
```

**Complexity:** O(n + m). **WHY:** Each element from both ranges is visited exactly once. n + m total comparisons.

### 10.6.2 std::set_union — Union of Two Sorted Ranges

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <iterator>

int main() {
    std::vector<int> a = {1, 2, 3, 4, 5};
    std::vector<int> b = {3, 4, 5, 6, 7};
    std::vector<int> result;

    std::set_union(a.begin(), a.end(), b.begin(), b.end(),
                   std::back_inserter(result));
    // Result: 1 2 3 4 5 6 7
    std::cout << "Union: ";
    for (int x : result) std::cout << x << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Union: 1 2 3 4 5 6 7
```

### 10.6.3 std::set_intersection — Common Elements

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <iterator>

int main() {
    std::vector<int> a = {1, 2, 3, 4, 5};
    std::vector<int> b = {3, 4, 5, 6, 7};
    std::vector<int> result;

    std::set_intersection(a.begin(), a.end(), b.begin(), b.end(),
                          std::back_inserter(result));
    // Result: 3 4 5
    std::cout << "Intersection: ";
    for (int x : result) std::cout << x << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Intersection: 3 4 5
```

### 10.6.4 std::set_difference — Elements in First but Not Second

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <iterator>

int main() {
    std::vector<int> a = {1, 2, 3, 4, 5};
    std::vector<int> b = {3, 4, 5, 6, 7};
    std::vector<int> result;

    std::set_difference(a.begin(), a.end(), b.begin(), b.end(),
                        std::back_inserter(result));
    // Result: 1 2
    std::cout << "Difference: ";
    for (int x : result) std::cout << x << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Difference: 1 2
```

### 10.6.5 std::set_symmetric_difference — Elements in Either but Not Both

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <iterator>

int main() {
    std::vector<int> a = {1, 2, 3, 4, 5};
    std::vector<int> b = {3, 4, 5, 6, 7};
    std::vector<int> result;

    std::set_symmetric_difference(a.begin(), a.end(), b.begin(), b.end(),
                                   std::back_inserter(result));
    // Result: 1 2 6 7
    std::cout << "Symmetric difference: ";
    for (int x : result) std::cout << x << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Symmetric difference: 1 2 6 7
```

### Set Operations Complexity

| Operation | Complexity | WHY |
|-----------|-----------|-----|
| `merge` | O(n + m) | Single pass through both ranges |
| `set_union` | O(n + m) | Single pass; elements in both appear once |
| `set_intersection` | O(n + m) | Only elements that match |
| `set_difference` | O(n + m) | Walk first; skip if in second |
| `set_symmetric_difference` | O(n + m) | Single pass, XOR logic |

## 10.7 Min / Max Algorithms

### 10.7.1 min, max, minmax — Single Pair Functions

```cpp
#include <algorithm>
#include <iostream>

int main() {
    int a = 10, b = 20;

    std::cout << "min(10, 20): " << std::min(a, b) << '\n';  // 10
    std::cout << "max(10, 20): " << std::max(a, b) << '\n';  // 20

    auto [lo, hi] = std::minmax(a, b);
    std::cout << "minmax: (" << lo << ", " << hi << ")\n";    // (10, 20)

    // With custom comparator
    std::cout << "min by abs: "
              << std::min(-5, 3, [](int x, int y) {
                     return std::abs(x) < std::abs(y);
                 }) << '\n';  // 3
    return 0;
}
```

**Output:**
```
min(10, 20): 10
max(10, 20): 20
minmax: (10, 20)
min by abs: 3
```

### 10.7.2 min_element, max_element, minmax_element — Range Functions

**C++ Code:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <string>

int main() {
    std::vector<int> scores = {78, 92, 55, 88, 95, 67};

    auto min_it = std::min_element(scores.begin(), scores.end());
    auto max_it = std::max_element(scores.begin(), scores.end());
    std::cout << "Min: " << *min_it << " at position "
              << std::distance(scores.begin(), min_it) << '\n';
    std::cout << "Max: " << *max_it << " at position "
              << std::distance(scores.begin(), max_it) << '\n';

    // minmax_element = single pass for both
    auto [lo, hi] = std::minmax_element(scores.begin(), scores.end());
    std::cout << "Minmax: " << *lo << ", " << *hi << '\n';

    // Custom comparison: longest string
    std::vector<std::string> words = {"cat", "elephant", "dog", "hippopotamus"};
    auto longest = std::max_element(words.begin(), words.end(),
        [](const std::string& a, const std::string& b) {
            return a.length() < b.length();
        });
    std::cout << "Longest word: " << *longest << '\n';
    return 0;
}
```

**Output:**
```
Min: 55 at position 2
Max: 95 at position 4
Minmax: 55, 95
Longest word: hippopotamus
```

**Complexity:** min_element: O(n). max_element: O(n). minmax_element: O(3n/2) — uses 3 comparisons per 2 elements, 25% faster than separate min + max calls.

## 10.8 Numeric Algorithms

Defined in `<numeric>`. These algorithms perform arithmetic reductions and transformations.

### 10.8.1 std::accumulate — Reduce (Fold Left)

**Analogy:** You have a bucket (initial value 0). You pick up each number from the conveyor belt and add it to the bucket. At the end, the bucket contains the sum.

**Steps:**
1. Initialize `result = init`
2. For each element `x` in `[first, last)`:
3. `result = result + x` (or `op(result, x)`)
4. Return `result`

**C++ Code:**
```cpp
#include <numeric>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> data = {1, 2, 3, 4, 5};

    // Sum
    int sum = std::accumulate(data.begin(), data.end(), 0);
    std::cout << "Sum: " << sum << '\n';  // 15

    // Product (custom operation)
    int product = std::accumulate(data.begin(), data.end(), 1,
                                   std::multiplies<int>());
    std::cout << "Product: " << product << '\n';  // 120

    // String concatenation
    std::vector<std::string> words = {"Hello", " ", "World", "!"};
    std::string sentence = std::accumulate(words.begin(), words.end(),
                                            std::string{});
    std::cout << "Concatenated: " << sentence << '\n';
    return 0;
}
```

**Output:**
```
Sum: 15
Product: 120
Concatenated: Hello World!
```

**Complexity:** O(n). **WHY:** Exactly n operations, each O(1). The initial value type determines the result type (important for preventing overflow!).

### 10.8.2 std::inner_product — Dot Product

**Analogy:** Two vectors of prices and quantities. The total order value is price[0]×qty[0] + price[1]×qty[1] + ...

**C++ Code:**
```cpp
#include <numeric>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> prices = {10, 20, 30};
    std::vector<int> quantities = {3, 2, 1};

    int total = std::inner_product(prices.begin(), prices.end(),
                                    quantities.begin(), 0);
    std::cout << "Total order: " << total << '\n';
    // 10*3 + 20*2 + 30*1 = 30 + 40 + 30 = 100

    // Custom: count matching elements
    std::vector<int> a = {1, 2, 3, 4, 5};
    std::vector<int> b = {1, 0, 3, 0, 5};
    int matches = std::inner_product(a.begin(), a.end(), b.begin(), 0,
        std::plus<int>(),                       // combine: add
        [](int x, int y) { return x == y ? 1 : 0; }  // pair: compare
    );
    std::cout << "Matches: " << matches << '\n';  // 3
    return 0;
}
```

**Output:**
```
Total order: 100
Matches: 3
```

**Complexity:** O(n). **WHY:** n pair operations + n combine operations.

### 10.8.3 std::partial_sum — Running Totals

**C++ Code:**
```cpp
#include <numeric>
#include <vector>
#include <iostream>
#include <iterator>

int main() {
    std::vector<int> data = {1, 2, 3, 4, 5};
    std::vector<int> running;

    std::partial_sum(data.begin(), data.end(),
                     std::back_inserter(running));
    std::cout << "Partial sums: ";
    for (int x : running) std::cout << x << ' ';  // 1 3 6 10 15

    // Running product
    std::vector<int> products;
    std::partial_sum(data.begin(), data.end(),
                     std::back_inserter(products),
                     std::multiplies<int>());
    std::cout << "\nPartial products: ";
    for (int x : products) std::cout << x << ' ';  // 1 2 6 24 120
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Partial sums: 1 3 6 10 15
Partial products: 1 2 6 24 120
```

**Complexity:** O(n). **WHY:** n - 1 binary operations.

### 10.8.4 std::adjacent_difference — Differences Between Neighbors

**C++ Code:**
```cpp
#include <numeric>
#include <vector>
#include <iostream>
#include <iterator>

int main() {
    std::vector<int> data = {1, 3, 6, 10, 15};
    std::vector<int> diffs;

    std::adjacent_difference(data.begin(), data.end(),
                              std::back_inserter(diffs));
    std::cout << "Adjacent differences: ";
    for (int x : diffs) std::cout << x << ' ';  // 1 2 3 4 5
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Adjacent differences: 1 2 3 4 5
```

### 10.8.5 std::iota — Fill with Sequential Values (C++11)

**C++ Code:**
```cpp
#include <numeric>
#include <vector>
#include <iostream>
#include <array>

int main() {
    std::vector<int> v(10);
    std::iota(v.begin(), v.end(), 0);  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    std::cout << "iota: ";
    for (int x : v) std::cout << x << ' ';

    std::array<int, 5> arr;
    std::iota(arr.begin(), arr.end(), 100);  // 100, 101, 102, 103, 104
    std::cout << "\niota 100: ";
    for (int x : arr) std::cout << x << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
iota: 0 1 2 3 4 5 6 7 8 9
iota 100: 100 101 102 103 104
```

**Complexity:** O(n). **WHY:** n increments, each O(1).

### Numeric Algorithm Summary

| Algorithm | Operation | Default Result |
|-----------|-----------|----------------|
| `accumulate` | Fold left | Sum |
| `inner_product` | Fold over pairwise op + combine | Dot product |
| `partial_sum` | Prefix scan | Running totals |
| `adjacent_difference` | Each minus predecessor | Discrete derivative |
| `iota` | Assign incrementing values | Sequence |
## 10.9 Lambdas with Algorithms

Lambda expressions (C++11) are inline callable objects that capture variables from scope. They are the natural way to customize STL algorithm behavior.

### 10.9.1 Lambda Syntax

```cpp
[capture](parameters) -> return_type { body };
```

| Part | Description | Example |
|------|-------------|---------|
| `[capture]` | What from enclosing scope is accessible | `[x, &y]`, `[=]`, `[&]`, `[this]` |
| `(parameters)` | Input parameters | `(int a, int b)` |
| `-> return_type` | Return type (optional — deduced) | `-> bool` |
| `{ body }` | Function body | `{ return a < b; }` |

### 10.9.2 Capture Modes

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> data = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int threshold = 5;
    int multiplier = 3;

    // Capture by value: [threshold]
    auto count_big = std::count_if(data.begin(), data.end(),
        [threshold](int x) { return x > threshold; });
    std::cout << "Elements > " << threshold << ": " << count_big << '\n';

    // Capture by reference: [&multiplier]
    std::vector<int> scaled;
    std::transform(data.begin(), data.end(),
                   std::back_inserter(scaled),
        [&multiplier](int x) { return x * multiplier; });
    std::cout << "Scaled by " << multiplier << ": ";
    for (int x : scaled) std::cout << x << ' ';
    std::cout << '\n';

    // Capture all by reference: [&]
    int evens = 0;
    std::for_each(data.begin(), data.end(),
        [&](int x) { if (x % 2 == 0) ++evens; });
    std::cout << "Evens: " << evens << '\n';
    return 0;
}
```

**Output:**
```
Elements > 5: 5
Scaled by 3: 3 6 9 12 15 18 21 24 27 30
Evens: 5
```

### 10.9.3 Common Lambda + Algorithm Patterns

**Pattern 1 — Sorting with Custom Key:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <string>

struct Employee {
    std::string name;
    int id;
    double salary;
};

int main() {
    std::vector<Employee> emps = {
        {"Alice", 103, 75000},
        {"Bob", 101, 65000},
        {"Charlie", 102, 85000}
    };

    // Sort by ID (ascending)
    std::sort(emps.begin(), emps.end(),
        [](const Employee& a, const Employee& b) {
            return a.id < b.id;
        });
    std::cout << "By ID:\n";
    for (auto& e : emps)
        std::cout << "  " << e.id << ": " << e.name << " ($" << e.salary << ")\n";

    // Sort by salary (descending)
    std::sort(emps.begin(), emps.end(),
        [](const Employee& a, const Employee& b) {
            return a.salary > b.salary;
        });
    std::cout << "By salary (desc):\n";
    for (auto& e : emps)
        std::cout << "  " << e.name << ": $" << e.salary << '\n';
    return 0;
}
```

**Output:**
```
By ID:
  101: Bob ($65000)
  102: Charlie ($85000)
  103: Alice ($75000)
By salary (desc):
  Charlie: $85000
  Alice: $75000
  Bob: $65000
```

**Pattern 2 — Filter with remove_if + erase:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <string>

int main() {
    std::vector<std::string> words =
        {"apple", "banana", "cat", "dog", "elephant", "fox"};

    // Remove words shorter than 4 letters
    words.erase(
        std::remove_if(words.begin(), words.end(),
            [](const std::string& w) { return w.length() < 4; }),
        words.end());

    std::cout << "Words >= 4 letters: ";
    for (const auto& w : words) std::cout << w << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Words >= 4 letters: apple banana elephant
```

**Pattern 3 — Transform with State (mutable lambda):**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <iterator>

int main() {
    std::vector<int> data = {1, 2, 3, 4, 5};
    std::vector<int> running_sum;

    std::transform(data.begin(), data.end(),
                   std::back_inserter(running_sum),
        [sum = 0](int x) mutable {  // C++14 init capture
            sum += x;
            return sum;
        });

    std::cout << "Running sum via transform: ";
    for (int x : running_sum) std::cout << x << ' ';  // 1 3 6 10 15
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Running sum via transform: 1 3 6 10 15
```

**Pattern 4 — Find with Complex Condition:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <string>

struct Product {
    std::string name;
    double price;
    int stock;
};

int main() {
    std::vector<Product> inventory = {
        {"Laptop", 999.99, 5},
        {"Mouse", 25.50, 100},
        {"Monitor", 299.99, 0},
        {"Keyboard", 75.00, 30}
    };

    // Find first out-of-stock product
    auto it = std::find_if(inventory.begin(), inventory.end(),
        [](const Product& p) { return p.stock == 0; });
    if (it != inventory.end())
        std::cout << "Out of stock: " << it->name << '\n';

    // Find first product matching multiple criteria
    it = std::find_if(inventory.begin(), inventory.end(),
        [](const Product& p) {
            return p.price > 50 && p.price < 500 && p.stock > 10;
        });
    if (it != inventory.end())
        std::cout << "Mid-range in stock: " << it->name
                  << " ($" << it->price << ")\n";
    return 0;
}
```

**Output:**
```
Out of stock: Monitor
Mid-range in stock: Keyboard ($75)
```

**Pattern 5 — Chaining Algorithms:**
```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <numeric>
#include <iterator>

int main() {
    std::vector<int> raw = {5, 2, 8, 1, 9, 3, 7, 4, 6, 0};
    std::vector<int> processed;

    // Chain: filter evens -> square -> sort -> accumulate sum
    std::copy_if(raw.begin(), raw.end(),
                 std::back_inserter(processed),
                 [](int x) { return x % 2 == 0; });
    // processed: 2, 8, 4, 6, 0

    std::transform(processed.begin(), processed.end(),
                   processed.begin(),
                   [](int x) { return x * x; });
    // processed: 4, 64, 16, 36, 0

    std::sort(processed.begin(), processed.end());
    // processed: 0, 4, 16, 36, 64

    int sum = std::accumulate(processed.begin(), processed.end(), 0);
    std::cout << "Sum of squares of evens (sorted): " << sum << '\n';
    return 0;
}
```

**Output:**
```
Sum of squares of evens (sorted): 120
```
## 10.10 Algorithm Categories — Comprehensive Comparison

| Category | Header | Typical Complexity | Requires Sorted? | Mutates? | Examples |
|----------|--------|-------------------|-----------------|----------|---------|
| Non-Modifying | <algorithm> | O(n) | No | No | find, count, equal, search |
| Modifying | <algorithm> | O(n) | No | Yes | copy, transform, replace, remove |
| Sorting | <algorithm> | O(n log n) | No (outputs sorted) | Yes | sort, stable_sort, partial_sort |
| Binary Search | <algorithm> | O(log n) | **Yes** | No | lower_bound, upper_bound |
| Set Operations | <algorithm> | O(n + m) | **Yes** | No | merge, set_union, set_intersection |
| Min/Max | <algorithm> | O(n) | No | No | min, max, min_element |
| Numeric | <numeric> | O(n) | No | No | accumulate, inner_product, partial_sum |
| Heap | <algorithm> | O(log n) per op | No (heap property) | Yes | push_heap, pop_heap, make_heap |
| Partition | <algorithm> | O(n) | No | Yes | partition, stable_partition |

### Category Selection Guide

```
Need to process data?
├─ Read-only query? → Non-Modifying (find, count, equal)
├─ Change in place? → Modifying (replace, remove, fill)
├─ Change to new range? → Modifying with output iterator (copy, transform)
├─ Reorder?
│  ├─ Full sort? → sort (default) or stable_sort (equal-order preservation)
│  ├─ Top-k only? → partial_sort
│  └─ Just one position? → nth_element
├─ Fast lookup?
│  ├─ Sorted data? → binary_search, lower_bound
│  └─ Unsorted? → find
├─ Combine two ranges?
│  ├─ Both sorted? → set_union, set_intersection, merge
│  └─ Unsorted? → manual loop
└─ Arithmetic? → Numeric (accumulate, inner_product, iota)
```

## 10.11 sort vs stable_sort vs partial_sort vs nth_element

| Aspect | sort | stable_sort | partial_sort | nth_element |
|--------|------|-------------|--------------|-------------|
| **What it does** | Sorts entire range | Sorts entire range (stable) | Places top-k in sorted order | Puts nth element at correct position |
| **Algorithm** | Introsort | MergeSort + InsertionSort | HeapSelect | QuickSelect + Introselect |
| **Complexity** | O(n log n) | O(n log n) w/ buffer | O(n log k) | O(n) average |
| **Stable?** | No | **Yes** | No | No |
| **Extra memory** | O(log n) | O(n) or O(n log^2 n) | O(1) | O(1) |
| **When to use** | Default sorting | Equal-order preservation | Top-k leaderboard | Median/percentile |
| **Partial result** | Full sort | Full sort | First k sorted | Only position n correct |

### Which to Choose?

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {7, 2, 9, 4, 1, 8, 5, 3, 6};

    // Need full sort? Use sort
    std::vector<int> v1 = v;
    std::sort(v1.begin(), v1.end());
    // v1: 1 2 3 4 5 6 7 8 9

    // Need top 3 only? Use partial_sort — much less work
    std::vector<int> v2 = v;
    std::partial_sort(v2.begin(), v2.begin() + 3, v2.end(),
                      std::greater<int>());
    // v2: 9 8 7 ... (only first 3 sorted — rest in any order)

    // Need median only? Use nth_element — fastest possible
    std::vector<int> v3 = v;
    auto mid = v3.begin() + v3.size() / 2;
    std::nth_element(v3.begin(), mid, v3.end());
    std::cout << "Median: " << *mid << '\n';
    // Median at correct position; rest unsorted

    return 0;
}
```

### Performance Insight (n = 10,000,000)

| Algorithm | Relative Time | WHY |
|-----------|-------------|-----|
| sort | 1.0x (baseline) | Full sort, deterministic introsort |
| stable_sort | 1.6x | Extra copying for stability guarantee |
| partial_sort (k=10) | 0.3x | Heap-based, stops after top-k |
| partial_sort (k=100) | 0.4x | Slightly more heap pops |
| nth_element | 0.15x | Just partitions — no sorting at all |

## 10.12 Iterator Categories and Algorithm Requirements

Every STL algorithm documents its minimum iterator category requirement. Using an iterator that does not meet this requirement causes a **compile error**.

### The Five Iterator Categories

```
InputIterator  <-  ForwardIterator  <-  BidirectionalIterator  <-  RandomAccessIterator
                                     ^
                                 OutputIterator  (separate hierarchy)
```

| Category | Supports | Read/Write | Example | Algorithm Example |
|----------|----------|------------|---------|-------------------|
| **Input** | `++it`, `*it` (read), `==`, `!=` | Read only | `istream_iterator` | `find`, `count`, `accumulate` |
| **Output** | `++it`, `*it = val` | Write only | `ostream_iterator`, `back_inserter` | `copy` (dest), `transform` (dest) |
| **Forward** | All Input + multi-pass guarantee | Read/Write | `forward_list` iterator, `unordered_map` | `replace`, `fill`, `remove` |
| **Bidirectional** | All Forward + `--it` | Read/Write | `list`, `set`, `map` iterators | `reverse`, `stable_partition` |
| **RandomAccess** | All Bidirectional + `it+n`, `it-n`, `it[n]`, `it1-it2`, `<`, `>` | Read/Write | `vector`, `deque`, `array`, `string` | `sort`, `nth_element`, `binary_search` |

### Algorithm to Iterator Category Mapping

```cpp
#include <algorithm>
#include <vector>
#include <list>
#include <forward_list>

int main() {
    std::vector<int> vec = {3, 1, 4, 1, 5};
    std::list<int> lst = {3, 1, 4, 1, 5};
    std::forward_list<int> flst = {3, 1, 4, 1, 5};

    // RandomAccess required
    std::sort(vec.begin(), vec.end());                // OK
    // std::sort(lst.begin(), lst.end());             // COMPILE ERROR

    // Bidirectional required
    std::reverse(lst.begin(), lst.end());             // OK
    // std::reverse(flst.begin(), flst.end());        // COMPILE ERROR

    // Forward required
    std::replace(flst.begin(), flst.end(), 1, 99);    // OK

    // Input only
    auto it = std::find(flst.begin(), flst.end(), 4); // OK
    int c = std::count(vec.begin(), vec.end(), 1);    // OK
}
```

## 10.13 Raw Loop vs STL Algorithm — A Systematic Comparison

Many C++ developers write raw `for` loops where algorithms would be clearer, safer, and faster.

### Example 1: Count Positive Elements

```cpp
// Raw loop
std::vector<int> data = {-3, 5, -1, 7, 0, 2};
int count = 0;
for (size_t i = 0; i < data.size(); ++i) {
    if (data[i] > 0)
        ++count;
}

// STL algorithm
int count_algo = std::count_if(data.begin(), data.end(),
                                [](int x) { return x > 0; });
```

| Aspect | Raw Loop | STL Algorithm |
|--------|----------|---------------|
| Lines of code | 5 | 2 |
| Intent | Hidden in loop body | Self-documenting (count_if) |
| Off-by-one risk | Yes (i < size vs i <= size) | No (begin/end) |
| Container coupling | Tied to vector (uses .size() and []) | Works with any container |
| Optimization | May vectorize | Compiler recognizes pattern + vectorizes |

### Example 2: Find First Match

```cpp
// Raw loop
std::vector<int> products = { ... };
int* found = nullptr;
for (size_t i = 0; i < products.size(); ++i) {
    if (products[i] == 0) {
        found = &products[i];
        break;
    }
}

// STL algorithm
auto it = std::find(products.begin(), products.end(), 0);
```

| Aspect | Raw Loop | STL Algorithm |
|--------|----------|---------------|
| Early exit | Manual break | Built-in short-circuit |
| Null-safety | Manual nullptr check | it != container.end() |
| Indexing errors | Possible | Iterator abstraction |

### Example 3: Transform All Elements

```cpp
// Raw loop
std::vector<double> celsius = {0, 10, 20, 30};
std::vector<double> fahr(celsius.size());
for (size_t i = 0; i < celsius.size(); ++i)
    fahr[i] = celsius[i] * 9.0 / 5.0 + 32.0;

// STL algorithm
std::vector<double> fahr_algo;
std::transform(celsius.begin(), celsius.end(),
               std::back_inserter(fahr_algo),
               [](double c) { return c * 9.0 / 5.0 + 32.0; });
```

### When Raw Loops Are Acceptable

1. **Complex control flow** — multiple break/continue conditions easier to read inline
2. **Performance-critical hot path** — though algorithms usually compile to identical assembly
3. **Non-standard iteration** — traversing multiple containers with complex offsets
4. **Side-effect-heavy operations** — logging, I/O, where the loop body is the point

### The Sean Parent Rule

> If you see a for loop over a range, ask: could an algorithm express this more clearly?
## 10.14 Interview Corner

### Q1: Why does std::sort fail to compile for std::list?

**Answer:** std::sort requires **RandomAccessIterators**, but std::list provides only **BidirectionalIterators**. RandomAccessIterators support `it + n` and `it - n` for pivot calculation during QuickSort partitioning. List iterators cannot jump — they can only step forward/backward one position at a time. std::list provides its own `list::sort()` member using MergeSort, which works with bidirectional iterators and is also stable.

### Q2: When would you use nth_element instead of sort + index?

**Answer:** When you need only the k-th smallest element (or median) without sorting the entire range. For n = 10,000,000:
- std::sort: O(n log n) ≈ 10M x 24 = 240M operations
- std::nth_element: O(n) average ≈ 10M x 3 = 30M operations — 8x faster

Use cases: computing the **median**, finding **percentiles** (25th, 75th, 90th), splitting data at a **threshold** for divide-and-conquer algorithms, QuickSelect-based pivot selection.

### Q3: What is the erase-remove idiom and why is it necessary?

**Answer:** std::remove does NOT erase elements. It reorganizes the range so kept elements are at the front and returns an iterator to the new logical end. Removed elements remain at the tail in unspecified state.

```cpp
auto new_end = std::remove(v.begin(), v.end(), value);
v.erase(new_end, v.end());
```

**WHY two steps:** (1) remove works with iterators only — it has no knowledge of the container's erase method. (2) The STL separates algorithms (operations) from containers (storage). (3) remove returns a "watermark" — erase acts on it. (4) This separation allows remove to work with arrays, std::string, std::vector, std::deque, etc.

### Q4: Compare lower_bound vs binary_search for finding values.

| Aspect | binary_search | lower_bound |
|--------|---------------|-------------|
| Returns | bool | Iterator |
| Purpose | Does value exist? | Where can I insert? |
| Additional info | None | Position of element |
| Implementation | *lower_bound(...) == value | Binary search |

```cpp
std::vector<int> v = {10, 20, 30, 30, 30, 40};

bool exists = std::binary_search(v.begin(), v.end(), 30);  // true

auto lo = std::lower_bound(v.begin(), v.end(), 30);
auto hi = std::upper_bound(v.begin(), v.end(), 30);
int count = std::distance(lo, hi);  // 3

auto pos = std::lower_bound(v.begin(), v.end(), 35);
v.insert(pos, 35);  // v stays sorted: 10 20 30 30 30 35 40
```

### Q5: Why is std::accumulate initial value important for type deduction?

**Answer:** The initial value parameter determines the return type:

```cpp
std::vector<int> v = {1000000, 2000000, 3000000};

// WRONG: int overflow — result type is int
int bad = std::accumulate(v.begin(), v.end(), 0);  // may overflow

// CORRECT: use long long
long long good = std::accumulate(v.begin(), v.end(), 0LL);

// Floating point
std::vector<double> vals = {1.5, 2.5, 3.0};
double sum = std::accumulate(vals.begin(), vals.end(), 0.0);
// 0 (int) would give 6 (truncated) — 0.0 gives 7.0
```

**Key rule:** Always match the initial value type to the desired result type. A `0` initial value forces `int` accumulation even if the container holds larger types.

### Q6: How does std::sort avoid O(n^2) worst-case behavior?

**Answer:** std::sort uses **Introsort**, a hybrid algorithm:
1. **QuickSort** with median-of-3 partitioning for good pivot selection
2. If recursion depth exceeds 2 x log2(n), switch to **HeapSort** for the current partition
3. Small subranges (< 16 elements) use **InsertionSort** (fastest for tiny arrays)
4. Final InsertionSort pass exploits near-sorted state from partitioning

This guarantees O(n log n) worst-case while maintaining QuickSort's speed and cache-friendly behavior. Pure QuickSort degrades to O(n^2) on already-sorted data with naive pivot selection.

### Q7: When is std::for_each preferred over a range-based for loop?

**Answer:** for_each is useful when: (1) composing with other algorithms in a pipeline, (2) using an existing function object, (3) extracting accumulated state (C++17 returns the functor):

```cpp
struct Counter {
    int count = 0;
    void operator()(int x) { if (x % 2 == 0) ++count; }
};
std::vector<int> v = {1, 2, 3, 4, 5, 6};
Counter c = std::for_each(v.begin(), v.end(), Counter{});
std::cout << c.count << '\n';  // 3
```

### Q8: Explain why std::partial_sort(first, middle, last) is O(n log k).

**Answer:** The algorithm:
1. Builds a max-heap of the first k elements: O(k)
2. For each of the remaining n-k elements, compares with heap top (max) and replaces if smaller: each is O(log k) for heap pop+push
3. Finally sorts the heap of size k: O(k log k)

Total: O(k + (n-k) log k + k log k) = O(n log k). When k is small (e.g., top 10 of 1M), this is dramatically faster than full sort O(n log n).

## 10.15 Applications in Real Systems

### std::sort in Databases

Database engines use sorting for ORDER BY, GROUP BY aggregation, B-tree index creation, merge join (both inputs sorted by key), and deduplication.

```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <string>

struct QueryResult {
    int id;
    double relevance;
};

std::vector<QueryResult> search_and_rank(
    const std::vector<QueryResult>& results, int top_k) {

    if (results.size() <= (size_t)top_k) {
        std::vector<QueryResult> sorted = results;
        std::sort(sorted.begin(), sorted.end(),
            [](const QueryResult& a, const QueryResult& b) {
                return a.relevance > b.relevance;
            });
        return sorted;
    }

    std::vector<QueryResult> out = results;
    std::partial_sort(out.begin(), out.begin() + top_k, out.end(),
        [](const QueryResult& a, const QueryResult& b) {
            return a.relevance > b.relevance;
        });
    out.resize(top_k);
    return out;
}

int main() {
    std::vector<QueryResult> results = {
        {101, 0.95}, {102, 0.80}, {103, 0.99},
        {104, 0.45}, {105, 0.72}, {106, 0.88}
    };
    auto top3 = search_and_rank(results, 3);
    std::cout << "Top 3 results:\n";
    for (const auto& r : top3)
        std::cout << "  ID " << r.id << " (relevance: " << r.relevance << ")\n";
    return 0;
}
```

**Output:**
```
Top 3 results:
  ID 103 (relevance: 0.99)
  ID 101 (relevance: 0.95)
  ID 106 (relevance: 0.88)
```

### std::transform in ETL Pipelines

Extract-Transform-Load pipelines use transform for data cleaning and normalization:

```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <string>
#include <cctype>
#include <iterator>

struct RawRecord {
    std::string name;
    std::string email;
    double raw_score;
};

struct CleanRecord {
    std::string name;
    std::string email;
    double normalized_score;
};

int main() {
    std::vector<RawRecord> raw_data = {
        {"  Alice  ", "ALICE@EXAMPLE.COM", 85.0},
        {"  Bob  ", "bob@EXAMPLE.COM", 92.0},
        {"  Charlie  ", "CHARLIE@EXAMPLE.COM", 78.0}
    };
    std::vector<CleanRecord> clean;

    std::transform(raw_data.begin(), raw_data.end(),
                   std::back_inserter(clean),
        [](const RawRecord& r) -> CleanRecord {
            std::string name = r.name;
            name.erase(0, name.find_first_not_of(" "));
            name.erase(name.find_last_not_of(" ") + 1);

            std::string email = r.email;
            std::transform(email.begin(), email.end(), email.begin(),
                [](unsigned char c) { return std::tolower(c); });

            double normalized = std::clamp(r.raw_score, 0.0, 100.0);
            return {name, email, normalized};
        });

    for (const auto& c : clean)
        std::cout << c.name << " | " << c.email << " | " << c.normalized_score << '\n';
    return 0;
}
```

**Output:**
```
Alice | alice@example.com | 85
Bob | bob@example.com | 92
Charlie | charlie@example.com | 78
```

### std::accumulate in Financial Calculations

```cpp
#include <numeric>
#include <vector>
#include <iostream>

int main() {
    std::vector<double> annual_rates = {0.05, 0.06, 0.04, 0.07, 0.05};
    double principal = 10000.0;

    double final_value = std::accumulate(
        annual_rates.begin(), annual_rates.end(), principal,
        [](double current, double rate) {
            return current * (1.0 + rate);
        });

    std::cout << "Initial: $" << principal << '\n';
    std::cout << "After " << annual_rates.size() << " years: $"
              << final_value << '\n';

    // Moving average
    std::vector<double> prices = {100, 102, 101, 105, 110, 108, 107};
    std::vector<double> moving_avg;
    int window = 3;

    for (size_t i = 0; i + window <= prices.size(); ++i) {
        double sum = std::accumulate(
            prices.begin() + i, prices.begin() + i + window, 0.0);
        moving_avg.push_back(sum / window);
    }

    std::cout << "\nPrices: ";
    for (double p : prices) std::cout << p << ' ';
    std::cout << "\nMA(" << window << "): ";
    for (double m : moving_avg) std::cout << m << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Initial: $10000
After 5 years: $12874.1

Prices: 100 102 101 105 110 108 107
MA(3): 101 102.667 105.333 107.667 108.333
```

### std::set_intersection in Recommendation Systems

```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <iterator>

int main() {
    std::vector<int> user_a = {1, 5, 7, 9, 12, 15};
    std::vector<int> user_b = {2, 5, 8, 9, 12, 20};
    std::vector<int> all_items = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    std::vector<int> common;
    std::set_intersection(user_a.begin(), user_a.end(),
                           user_b.begin(), user_b.end(),
                           std::back_inserter(common));
    std::cout << "Common likes: ";
    for (int x : common) std::cout << x << ' ';

    std::vector<int> recommend;
    std::set_difference(all_items.begin(), all_items.end(),
                         user_a.begin(), user_a.end(),
                         std::back_inserter(recommend));
    std::cout << "\nRecommend to A: ";
    for (int x : recommend) std::cout << x << ' ';
    std::cout << '\n';
    return 0;
}
```

**Output:**
```
Common likes: 5 9 12
Recommend to A: 2 3 4 6 8 10
```
## Quick Reference Card

| Algorithm | Header | Complexity | Returns |
|-----------|--------|-----------|---------|
| find | algorithm | O(n) | Iterator to match |
| find_if | algorithm | O(n) | Iterator to predicate match |
| count/count_if | algorithm | O(n) | Integer count |
| equal | algorithm | O(n) | bool |
| mismatch | algorithm | O(n) | Pair of iterators |
| search | algorithm | O(n x m) / O(n+m) w/ BM | Iterator to subrange |
| copy | algorithm | O(n) | Output iterator (end) |
| copy_if | algorithm | O(n) | Output iterator (end) |
| transform | algorithm | O(n) | Output iterator (end) |
| replace/replace_if | algorithm | O(n) | void |
| fill/fill_n | algorithm | O(n) | void (fill) / OutputIterator (fill_n) |
| generate/generate_n | algorithm | O(n) | void |
| remove/remove_if | algorithm | O(n) | New logical end |
| unique | algorithm | O(n) | New logical end |
| reverse | algorithm | O(n) | void |
| rotate | algorithm | O(n) | Iterator to new first |
| sort | algorithm | O(n log n) | void |
| stable_sort | algorithm | O(n log n) | void |
| partial_sort | algorithm | O(n log k) | void |
| nth_element | algorithm | O(n) average | void |
| lower_bound | algorithm | O(log n) | Iterator first >= value |
| upper_bound | algorithm | O(log n) | Iterator first > value |
| binary_search | algorithm | O(log n) | bool |
| equal_range | algorithm | O(log n) | Pair {lower, upper} |
| merge | algorithm | O(n+m) | Output iterator |
| set_union | algorithm | O(n+m) | Output iterator |
| set_intersection | algorithm | O(n+m) | Output iterator |
| set_difference | algorithm | O(n+m) | Output iterator |
| min/max | algorithm | O(1) | Reference |
| min_element/max_element | algorithm | O(n) | Iterator |
| minmax_element | algorithm | O(3n/2) | Pair of iterators |
| accumulate | numeric | O(n) | Reduced value |
| inner_product | numeric | O(n) | Dot product |
| partial_sum | numeric | O(n) | Output iterator |
| adjacent_difference | numeric | O(n) | Output iterator |
| iota | numeric | O(n) | void |
| all_of/any_of/none_of | algorithm | O(n) | bool |
| for_each | algorithm | O(n) | Function (C++17) |

## Chapter Summary

1. **Algo-Container Separation**: STL algorithms work on iterator ranges, not containers. A single algorithm works with any container whose iterators meet the minimum category requirement.

2. **Non-Modifying Algorithms**: find, count, equal, mismatch, and search read ranges without mutation. They are safe for const data and often short-circuit on first match.

3. **Modifying Algorithms**: copy, transform, replace, fill, generate, remove, and unique change elements. The erase-remove idiom is the standard pattern for logical deletion followed by physical erasure.

4. **Sorting**: sort (introsort) is the default. stable_sort preserves equal-element order. partial_sort gives top-k in sorted order. nth_element places one element at its sorted position with O(n) average complexity.

5. **Binary Search**: lower_bound, upper_bound, and equal_range provide O(log n) lookup on sorted ranges. Always ensure the range is sorted before calling.

6. **Set Operations**: set_union, set_intersection, set_difference work on sorted ranges (not just std::set) in O(n+m) time.

7. **Numeric Algorithms**: accumulate (fold), inner_product (dot product), partial_sum (running totals), adjacent_difference (discrete derivative), and iota (sequential fill) from <numeric>.

8. **Lambdas**: Inline callables that customize algorithm behavior through capture, parameters, and body. Five capture modes: by value, by reference, init capture (C++14), default all-by-value (=), default all-by-reference (&).

9. **Algorithm > Raw Loop**: STL algorithms express intent directly, eliminate off-by-one errors, work across container types, and enable algorithm composition.

## Exercises

### Review Questions

1. Why does std::sort not compile with std::list iterators? What iterator category does it require?
2. What is the difference between std::remove and std::vector::erase? Why must both be used together?
3. When would std::nth_element be preferred over std::partial_sort? Give a concrete example.
4. Explain the complexity difference between std::find (O(n)) and std::binary_search (O(log n)). When would you choose each?
5. What does std::lower_bound return when the value is greater than all elements?
6. How does the initial value parameter of std::accumulate affect the return type?
7. What happens if you call std::binary_search on an unsorted range?

### Application Problems

1. Given std::vector<int> v = {4, 2, 7, 1, 8, 3, 5, 6}, use STL algorithms to:
   a) Count even numbers using count_if
   b) Remove all elements < 4 using remove_if + erase
   c) Sort the remaining elements descending using sort with lambda
   d) Compute sum of squares of the result using transform + accumulate

2. Implement a deduplication function using sort + unique:
   ```cpp
   template<typename T>
   std::vector<T> unique_sorted(std::vector<T> v);
   ```

3. Write a function to merge two sorted vectors using std::merge:
   ```cpp
   std::vector<int> merge_sorted(const std::vector<int>& a,
                                  const std::vector<int>& b);
   ```

4. Use std::set_intersection to find common elements between two sorted vectors without loops.

5. Write a program that reads integers from stdin into a vector, computes the sum and product using std::accumulate with lambdas, and prints both results.

### Challenge Problem

6. **Gradebook Analyzer:** Write a program that:
   - Stores student records (name, vector of scores) in a vector
   - Computes each student's average using std::accumulate
   - Sorts students by average using std::sort with lambda
   - Assigns letter grades (A: >=90, B: >=80, C: >=70, D: >=60, F: <60) using std::transform
   - Computes class statistics (min, max, median, average) using std::minmax_element, std::nth_element, std::accumulate
   - Prints a ranked report
   - Achieves all of the above without any raw for loops — use only STL algorithms

### Cross-Application Matrix

| Domain | How Concepts Apply |
|--------|-------------------|
| **Data Science** | sort + unique for dedup, accumulate for statistics, nth_element for median |
| **Game Dev** | remove_if for entity culling, sort by draw order, transform for coordinate conversion |
| **Finance** | stable_sort for transactions, accumulate for compound interest, inner_product for portfolio valuation |
| **Text Processing** | search for substring, transform for case conversion, count_if for character analysis |
| **Networking** | copy for buffer management, count_if for packet pattern analysis, accumulate for checksums |
| **ETL** | transform for data cleaning, merge for sorted feeds, set_difference for change detection |

---

> **Proceed to:** [11-file-io](./11-file-io.md) — Master file input and output in C++
