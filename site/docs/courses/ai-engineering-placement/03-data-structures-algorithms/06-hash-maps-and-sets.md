---
id: 06-hash-maps-and-sets
slug: /ai-engineering-placement/03-data-structures-algorithms/06-hash-maps-and-sets
title: "Hash Maps and Sets"
sidebar_label: "Hash Maps and Sets"
sidebar_position: 39
---
<!-- Clear Language: Keep sentences under 50 words -->
# Hash Maps and Sets

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand hash map and set fundamentals including hashing, collision resolution, and load factor |
| LO2 | Solve frequency-counting problems using hash maps for character and element counting |
| LO3 | Apply hash sets for intersection, union, and difference operations across collections |
| LO4 | Use hash maps for constant-time lookup patterns like two-sum and subarray sum |
| LO5 | Implement pattern-matching and grouping problems such as group anagrams and isomorphic strings |
| LO6 | Analyze time-space tradeoffs when choosing between hash-based and alternative approaches |

## Introduction

Hash maps provide O(1) average-case lookup, insertion, and deletion. They are the go-to data structure for frequency counting, caching, and implementing sets. Understanding hash collisions and when to use hash maps vs arrays is essential.

## Prerequisites

- Array basics
- Basic understanding of hashing


## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding hash maps and sets is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how hash maps and sets works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 6.1 | Hash Map Fundamentals | Hashing functions, buckets, collision resolution |
| 6.2 | Frequency Counting | Character/word frequency, majority element |
| 6.3 | Hash Set Operations | Intersection, union, distinct elements |
| 6.4 | Constant-Time Lookup | Two-sum, subarray sum, contiguous arrays |
| 6.5 | Pattern Matching & Grouping | Group anagrams, isomorphic strings, pattern mapping |
| 6.6 | Advanced Applications | LRU cache, design decisions and tradeoffs |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Hash Maps & Sets] --> B[Fundamentals]
    A --> C[Frequency Counting]
    A --> D[Set Operations]
    A --> E[Constant-Time Lookup]
    A --> F[Pattern Matching]
    A --> G[Advanced Applications]
    B --> H[Hash Functions]
    B --> I[Collision Resolution]
    C --> J[Character Frequency]
    C --> K[Word Frequency]
    D --> L[Intersection & Union]
    D --> M[Distinct Elements]
    E --> N[Two Sum]
    E --> O[Subarray Sum]
    F --> P[Group Anagrams]
    F --> Q[Isomorphic Strings]
```text

## 6.1 Hash Map Fundamentals

A hash map (or dictionary) stores key-value pairs and provides O(1) average-time insertions, deletions, and lookups. This performance depends on a good hash function that distributes keys uniformly across buckets.

### Hashing Basics

A hash function converts a key into an integer index within the bucket array. For strings, a common approach is polynomial rolling hash:

```python
def simple_hash(key, table_size):
    if isinstance(key, str):
        total = 0
        for char in key:
            total = (total * 31 + ord(char)) % table_size
        return total
    return hash(key) % table_size

print(simple_hash("hello", 16))  # Example: 9
print(simple_hash("world", 16))  # Example: 2
```text

### Collision Resolution

Two common strategies handle hash collisions:

**Chaining (Separate Chaining):** Each bucket stores a linked list of entries with the same hash.

```python
class HashMapChaining:
    def __init__(self, size=16):
        self.size = size
        self.buckets = [[] for _ in range(size)]

    def _hash(self, key):
        return hash(key) % self.size

    def put(self, key, value):
        idx = self._hash(key)
        for i, (k, v) in enumerate(self.buckets[idx]):
            if k == key:
                self.buckets[idx][i] = (key, value)
                return
        self.buckets[idx].append((key, value))

    def get(self, key):
        idx = self._hash(key)
        for k, v in self.buckets[idx]:
            if k == key:
                return v
        raise KeyError(key)

    def remove(self, key):
        idx = self._hash(key)
        for i, (k, v) in enumerate(self.buckets[idx]):
            if k == key:
                del self.buckets[idx][i]
                return
        raise KeyError(key)
```text

**Open Addressing (Linear Probing):** When a collision occurs, probe the next available bucket.

```python
class HashMapLinearProbing:
    def __init__(self, size=16):
        self.size = size
        self.keys = [None] * size
        self.values = [None] * size

    def _hash(self, key):
        return hash(key) % self.size

    def put(self, key, value):
        idx = self._hash(key)
        while self.keys[idx] is not None:
            if self.keys[idx] == key:
                self.values[idx] = value
                return
            idx = (idx + 1) % self.size
        self.keys[idx] = key
        self.values[idx] = value

    def get(self, key):
        idx = self._hash(key)
        while self.keys[idx] is not None:
            if self.keys[idx] == key:
                return self.values[idx]
            idx = (idx + 1) % self.size
        raise KeyError(key)
```text

### Load Factor and Rehashing

The load factor (entries / buckets) determines performance. Python's dict resizes when the load factor exceeds about 2/3. A low load factor reduces collisions but uses more memory.

| Load Factor | Collision Probability | Memory Usage | Resize Frequency |
|-------------|----------------------|--------------|------------------|
| 0.5         | Low                  | High         | Early            |
| 0.75        | Moderate             | Moderate     | Standard         |
| 1.0         | High                 | Low          | Late             |

## 6.2 Frequency Counting

Frequency counting is the most common hash map application. We iterate once over data, counting occurrences, then answer questions about the counts.

### Character Frequency

```python
def char_frequency(s):
    freq = {}
    for c in s:
        freq[c] = freq.get(c, 0) + 1
    return freq

print(char_frequency("hello world"))

## {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}
```text


## Overview

### Word Frequency

```python
def word_frequency(text):
    words = text.lower().split()
    freq = {}
    for word in words:
        freq[word] = freq.get(word, 0) + 1
    return freq

text = "the quick brown fox jumps over the lazy dog the quick"
print(word_frequency(text))

## {'the': 3, 'quick': 2, 'brown': 1, 'fox': 1, 'jumps': 1, 'over': 1, 'lazy': 1, 'dog': 1}
```text


## Overview

### Majority Element (Boyer-Moore Voting)

Find the element that appears more than n/2 times. While Boyer-Moore uses O(1) space, the hash map approach is straightforward:

```python
def majority_element_hash(nums):
    freq = {}
    threshold = len(nums) // 2
    for num in nums:
        freq[num] = freq.get(num, 0) + 1
        if freq[num] > threshold:
            return num
    return None

nums = [2, 2, 1, 1, 1, 2, 2]
print(majority_element_hash(nums))  # 2
```text

### Frequency Counting Patterns

| Pattern | Use Case | Example |
|---------|----------|---------|
| Count occurrences | Find frequency of each element | Character frequency |
| Early exit | Return when count exceeds threshold | Majority element |
| Cumulative frequency | Running count with condition | Subarray sum equals k |
| Frequency comparison | Compare two collections | Anagram check |
| Top-K frequency | Return most frequent elements | Heap with frequency map |

## 6.3 Hash Set Operations

A hash set stores unique elements. Python's `set` is implemented as a hash table with only keys (no values). Sets support efficient membership tests, insertions, and deletions in O(1) average time.

### Set Basics

```python
def set_operations():
    set_a = {1, 2, 3, 4, 5}
    set_b = {4, 5, 6, 7, 8}

    intersection = set_a & set_b
    union = set_a | set_b
    difference = set_a - set_b
    symmetric_diff = set_a ^ set_b

    return intersection, union, difference, symmetric_diff

inter, uni, diff, sym = set_operations()
print(f"Intersection: {inter}")      # {4, 5}
print(f"Union: {uni}")               # {1, 2, 3, 4, 5, 6, 7, 8}
print(f"Difference: {diff}")         # {1, 2, 3}
print(f"Symmetric diff: {sym}")      # {1, 2, 3, 6, 7, 8}
```text

### Intersection of Two Arrays

```python
def intersection_of_arrays(nums1, nums2):
    set1 = set(nums1)
    result = set()
    for num in nums2:
        if num in set1:
            result.add(num)
    return list(result)

nums1 = [1, 2, 2, 1]
nums2 = [2, 2]
print(intersection_of_arrays(nums1, nums2))  # [2]
```text

### Longest Consecutive Sequence

Given an unsorted array of integers, find the length of the longest consecutive subsequence. Solve in O(n) time.

```python
def longest_consecutive(nums):
    num_set = set(nums)
    longest = 0
    for num in num_set:
        if num - 1 not in num_set:
            current = num
            streak = 1
            while current + 1 in num_set:
                current += 1
                streak += 1
            longest = max(longest, streak)
    return longest

nums = [100, 4, 200, 1, 3, 2]
print(longest_consecutive(nums))  # 4 (sequence: 1, 2, 3, 4)
```text

**Why it works:** We only start counting from the smallest element of each sequence (no predecessor in the set). This ensures each element is visited at most twice, giving O(n) total.

### Set Operations Comparison

| Operation | Python Syntax | Time Complexity | Description |
|-----------|--------------|-----------------|-------------|
| Membership | `x in s` | O(1) avg | Check if element exists |
| Add | `s.add(x)` | O(1) avg | Insert element |
| Remove | `s.remove(x)` | O(1) avg | Delete element |
| Intersection | `s1 & s2` | O(min(n,m)) | Common elements |
| Union | `s1 \| s2` | O(n + m) | All elements |
| Difference | `s1 - s2` | O(n) | Elements in s1 not in s2 |

## 6.4 Constant-Time Lookup

The hash map's O(1) lookup makes it ideal for problems that require checking whether a complement or prefix has been seen before.

### Two Sum (Unsorted)

```python
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return None

nums = [2, 7, 11, 15]
print(two_sum(nums, 9))  # [0, 1]
```text

**Key insight:** As we iterate, we store each number's index. The next number checks if its complement has already been stored. This avoids needing to sort and handles unsorted input in one pass.

### Subarray Sum Equals K

Find the number of contiguous subarrays whose sum equals k.

```python
def subarray_sum(nums, k):
    prefix_sum_map = {0: 1}
    current_sum = 0
    count = 0
    for num in nums:
        current_sum += num
        if current_sum - k in prefix_sum_map:
            count += prefix_sum_map[current_sum - k]
        prefix_sum_map[current_sum] = prefix_sum_map.get(current_sum, 0) + 1
    return count

nums = [1, 1, 1]
print(subarray_sum(nums, 2))  # 2 ([1,1] at index 0-1, and [1,1] at index 1-2)
```text

**How it works:** We track the cumulative prefix sum at each position. If `prefix_sum - k` has been seen before, that means the subarray between those two points sums to k. The hash map stores how many times each prefix sum has occurred.

### Check if Array Contains Duplicate

```python
def contains_duplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False

print(contains_duplicate([1, 2, 3, 1]))  # True
print(contains_duplicate([1, 2, 3, 4]))  # False
```text

### Constant-Time Lookup Patterns

| Problem | Hash Map Store | Key Check | Time |
|---------|---------------|-----------|------|
| Two Sum | num -> index | target - current | O(n) |
| Subarray Sum | prefix_sum -> count | current_sum - k | O(n) |
| Contains Duplicate | set of seen | current in seen | O(n) |
| First Recurring | set of seen | current in seen | O(n) |

## 6.5 Pattern Matching and Grouping

Hash maps excel at grouping elements by a computed key or mapping elements between two sequences.

### Group Anagrams

Given an array of strings, group the anagrams together.

```python
from collections import defaultdict

def group_anagrams(strs):
    groups = defaultdict(list)
    for s in strs:
        key = "".join(sorted(s))
        groups[key].append(s)
    return list(groups.values())

strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(group_anagrams(strs))

## [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
```text

**Optimization:** Instead of sorting (O(k log k)), count characters as a tuple of 26 counts for O(k) key computation.

```python
def group_anagrams_optimized(strs):
    groups = defaultdict(list)
    for s in strs:
        count = [0] * 26
        for c in s:
            count[ord(c) - ord("a")] += 1
        groups[tuple(count)].append(s)
    return list(groups.values())

print(group_anagrams_optimized(["eat", "tea", "tan", "ate", "nat", "bat"]))
```text


## Overview

### Isomorphic Strings

Two strings are isomorphic if the characters in one can be replaced to get the other, preserving order.

```python
def is_isomorphic(s, t):
    if len(s) != len(t):
        return False
    s_to_t = {}
    t_to_s = {}
    for c1, c2 in zip(s, t):
        if c1 in s_to_t:
            if s_to_t[c1] != c2:
                return False
        elif c2 in t_to_s:
            return False
        else:
            s_to_t[c1] = c2
            t_to_s[c2] = c1
    return True

print(is_isomorphic("egg", "add"))   # True
print(is_isomorphic("foo", "bar"))   # False
print(is_isomorphic("paper", "title"))  # True
```text

Two hash maps enforce a bijection: each character in s maps to exactly one character in t, and vice versa.

### Word Pattern

```python
def word_pattern(pattern, s):
    words = s.split()
    if len(pattern) != len(words):
        return False
    char_to_word = {}
    word_to_char = {}
    for c, w in zip(pattern, words):
        if c in char_to_word:
            if char_to_word[c] != w:
                return False
        elif w in word_to_char:
            return False
        else:
            char_to_word[c] = w
            word_to_char[w] = c
    return True

print(word_pattern("abba", "dog cat cat dog"))  # True
print(word_pattern("abba", "dog cat cat fish"))  # False
```text

### Pattern Matching Comparison

| Problem | Key Strategy | Data Structure | Time |
|---------|-------------|----------------|------|
| Group Anagrams | Sorted string or char count as key | DefaultDict[tuple, list] | O(n * k) |
| Isomorphic Strings | Bi-directional char mapping | Two dicts | O(n) |
| Word Pattern | Bi-directional char-to-word mapping | Two dicts | O(n) |
| Find and Replace Pattern | Normalize to pattern string | Dict mapping | O(n * k) |

## 6.6 Advanced Applications and Tradeoffs

### Design a Least Recently Used (LRU) Cache

Combines a hash map for O(1) lookup with a doubly linked list for O(1) eviction.

```python
class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def _add_to_head(self, node):
        node.next = self.head.next
        node.prev = self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key):
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add_to_head(node)
            return node.value
        return -1

    def put(self, key, value):
        if key in self.cache:
            self._remove(self.cache[key])
        node = Node(key, value)
        self._add_to_head(node)
        self.cache[key] = node
        if len(self.cache) > self.capacity:
            lru = self.tail.prev
            self._remove(lru)
            del self.cache[lru.key]

class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))    # 1
cache.put(3, 3)        # evicts key 2
print(cache.get(2))    # -1
```text

### Hash Map vs. Alternative Data Structures

| Requirement | Hash Map | BST (e.g., TreeMap) | Sorted Array |
|-------------|----------|---------------------|--------------|
| Insert | O(1) avg | O(log n) | O(n) |
| Lookup | O(1) avg | O(log n) | O(log n) via binary search |
| Delete | O(1) avg | O(log n) | O(n) |
| Range query | O(n) | O(k + log n) | O(k + log n) |
| Ordered iteration | O(n log n) via sort | O(n) in-order | O(n) |
| Memory | High (buckets + entries) | Moderate (pointers) | Low (contiguous) |

### Common Pitfalls

1. **Hashable keys:** Only immutable types (strings, numbers, tuples) can be dictionary keys in Python. Lists and dicts are unhashable.
2. **Custom objects:** Must implement `__hash__` and `__eq__` for custom objects to work as keys.
3. **Hash collision attacks:** Malicious input causing many collisions can degrade performance to O(n). Python uses salted hashing to mitigate this.
4. **Default value handling:** Use `dict.get(key, default)` or `defaultdict` to avoid KeyError.
5. **Modification during iteration:** Never modify a dict's size while iterating. Create a list of keys first.
6. **Memory overhead:** Each hash map entry carries overhead. For very large datasets, consider alternatives.

```python
from collections import defaultdict

## Default dict for clean frequency counting
freq = defaultdict(int)
freq["a"] += 1  # No KeyError, defaults to 0 then increments

## Counter class for convenience
from collections import Counter
c = Counter("hello world")
print(c.most_common(3))  # [('l', 3), ('o', 2), ('h', 1)]
```text

## TypeScript Parallel

TypeScript has `Map<K, V>` and `Set<T>` built-in, providing the same hash-based semantics with type safety.

### Frequency Counting

```typescript
function charFrequency(s: string): Map<string, number> {
    const freq = new Map<string, number>();
    for (const c of s) {
        freq.set(c, (freq.get(c) || 0) + 1);
    }
    return freq;
}

const freq = charFrequency("hello world");
console.log(freq); // Map(8) { 'h' => 1, 'e' => 1, 'l' => 3, 'o' => 2, ' ' => 1, 'w' => 1, 'r' => 1, 'd' => 1 }
```text

### Two Sum with Type Safety

```typescript
function twoSum(nums: number[], target: number): number[] | null {
    const seen = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement)!, i];
        }
        seen.set(nums[i], i);
    }
    return null;
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
```text

### Group Anagrams

```typescript
function groupAnagrams(strs: string[]): string[][] {
    const groups = new Map<string, string[]>();
    for (const s of strs) {
        const key = s.split("").sort().join("");
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key)!.push(s);
    }
    return Array.from(groups.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
```text

### Longest Consecutive Sequence

```typescript
function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    let longest = 0;
    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let current = num;
            let streak = 1;
            while (numSet.has(current + 1)) {
                current++;
                streak++;
            }
            longest = Math.max(longest, streak);
        }
    }
    return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
```text

### TypeScript vs Python Hash Maps

| Feature | Python dict | TypeScript Map |
|---------|-------------|----------------|
| Literal syntax | `{key: value}` | `new Map()` |
| Type Safety | Dynamic | Generic `<K, V>` |
| Key types | Immutable only | Any type |
| Insert | `d[k] = v` | `map.set(k, v)` |
| Get | `d.get(k)` | `map.get(k)` |
| Check exists | `k in d` | `map.has(k)` |
| Delete | `del d[k]` | `map.delete(k)` |
| Size | `len(d)` | `map.size` |
| Iteration | `d.items()` | `map.entries()` |

## Summary

- Hash maps provide O(1) average-time insertions, lookups, and deletions by using a hash function to distribute keys across buckets.
- Collision resolution strategies include chaining (linked list per bucket) and open addressing (linear probing, quadratic probing, double hashing).
- Load factor controls the space-time tradeoff: lower load factors reduce collisions but use more memory.
- Frequency counting is the most common hash map application, used for character counts, word frequencies, and majority element detection.
- Hash sets enable O(1) membership testing and efficient set operations (intersection, union, difference) across collections.
- The two-sum and subarray-sum problems demonstrate the power of storing "seen before" values for constant-time complement checking.
- Group anagrams and isomorphic strings use hash maps for pattern-based grouping and bi-directional mapping.
- The LRU cache combines a hash map with a doubly linked list to achieve O(1) get and put operations.
- Hash maps consume more memory than array-based or tree-based alternatives but offer faster average-case performance.
- Python's dict, Counter, and defaultdict, along with TypeScript's Map and Set, provide robust hash-based data structures.

## Practical Takeaways

| Takeaway | Application | Example Problem |
|----------|-------------|-----------------|
| Use hash maps when O(1) lookup matters | Any problem needing fast existence check | Two Sum |
| Store prefix sums for subarray problems | Contiguous subarray queries | Subarray Sum Equals K |
| Use set for deduplication | Remove duplicates or check membership | Contains Duplicate |
| Group by transformed key | Categorize elements by property | Group Anagrams |
| Use bi-directional mapping for pattern matching | One-to-one character mapping | Isomorphic Strings |
| Combine hash map with other structures for complex ADTs | Caches, indexes | LRU Cache |
| Use Counter for frequency problems | Quick frequency counts and top-k | Most Common Word |
| Remember amortized resize cost | Predict worst-case performance | Hash map insertions |

## Interview Q&A

<details class="tp-qa-card">
  <summary><strong>Q1: How does Python's dict achieve O(1) average lookup?</summary>
Python uses a hash table with open addressing. When you insert a key, Python computes `hash(key) % table_size` to find the bucket index. If that bucket is occupied by a different key,.
it probes the next slot (simple linear probing in CPython's implementation). The table is resized when the load factor exceeds 2/3,.
ensuring O(1) amortized performance. The hash function is randomized per process start (PYTHONHASHSEED) to prevent collision-based denial-of-service attacks.
</details>

<details class="tp-qa-card">
  <summary><strong>Q2: What types can be used as dictionary keys in Python?</strong></summary>
Only hashable types: immutable objects whose hash value never changes. This includes `int`, `float`, `str`, `bytes`, `tuple` (if all elements are hashable),.
`frozenset`, and custom classes that implement `__hash__`. Lists, dictionaries, sets, and other mutable types are unhashable. When using a custom class as a key,.
you must implement both `__hash__` and `__eq__` consistently (equal objects must have the same hash).
</details>

<details class="tp-qa-card">
  <summary><strong>Q3: How do you handle collisions in a hash map?</summary>
Two main strategies: (1) Separate chaining — each bucket stores a linked list of entries. Insertions append to the list. Lookups traverse the list. (2) Open addressing — on collision,.
probe subsequent buckets linearly, quadratically, or via double hashing. Python uses open addressing with pseudo-random probing. Chaining is simpler and tolerant of high load factors. Open addressing is more cache-friendly and.
uses memory more efficiently at low load factors.
</details>

<details class="tp-qa-card">
  <summary><strong>Q4: What is the time complexity of the subarray sum equals k solution?</summary>
O(n) time and O(n) space. The single pass computes prefix sums and stores their frequencies in a hash map. For each position,.
we check if (current_sum - k) exists in the map. The count increments by the frequency of that prefix sum. The space is O(n) because in the worst case,.
every prefix sum could be distinct. This is optimal because subarray problems inherently require scanning each element.
</details>

<details class="tp-qa-card">
  <summary><strong>Q5: When would you use a set instead of a list for membership testing?</summary>
Always prefer a set when you only need to check membership and the collection is large. Set membership is O(1) average while list membership is O(n). For.
small collections (less than ~20 elements), the overhead of hashing may make lists competitive. Use a set when: checking if duplicates exist,.
computing intersections/unions, or performing many membership tests. Use a list when: order matters, you need indexing by position, or you have very few elements and.
no duplicate checking.
</details>

<details class="tp-qa-card">
  <summary><strong>Q6: How does the LRU cache design achieve O(1) operations?</summary>
It combines two data structures: (1) A hash map from key to linked list node for O(1) lookups. (2) A doubly linked list for.
O(1) insertions and deletions at both ends. On get, we find the node via the hash map, remove it from its current position,.
and move it to the head. On put, we do the same plus potentially evict the tail node. The hash map provides constant key-to-node mapping,.
while the linked list maintains the recency order without shifting elements. This dual-structure approach is a classic interview design problem.
</details>

<details class="tp-qa-card">
  <summary><strong>Q7: Explain the group anagrams problem and its optimal solution.</summary>
Group anagrams categorizes strings by their sorted character order. Two approaches: (1) Sort each string (O(k log k) per string) and.
use the sorted version as the hash key. (2) Count characters into a 26-element tuple (O(k) per string) for the key. The second approach is optimal when strings can be very long. Both achieve O(n * k) or.
better. The hash map groups strings with identical keys into lists. Counting sort is faster when the alphabet is fixed (26 lowercase letters),.
making the total complexity O(n * k + n * 26).
</details>

<details class="tp-qa-card">
  <summary><strong>Q8: What is the difference between defaultdict and regular dict?</summary>
`defaultdict` from collections provides a default value for missing keys. When you access a key that doesn't exist, `defaultdict` calls the factory function (e.g.,.
`int`, `list`, `set`) to create and return a default value. This eliminates boilerplate `if key not in dict` checks. `defaultdict(int)` initializes missing keys to 0,.
perfect for counting. `defaultdict(list)` initializes to an empty list, ideal for grouping. Regular dict raises a KeyError on missing key access. `defaultdict` is slightly slower for.
existing keys due to the factory function overhead.
</details>

<details class="tp-qa-card">
  <summary><strong>Q9: How do you find the longest consecutive sequence in O(n)?</summary>
Insert all elements into a hash set. Then iterate through the set, and for each element, check if its predecessor (element-1) is NOT in the set. If not,.
this element starts a sequence. Count consecutive elements by incrementing and checking the set until the sequence breaks. Update the global maximum. This works because we only start counting from sequence starts,.
ensuring each element is visited at most twice (once as a potential start, once as part of counting). The hash set provides O(1) membership checks.
</details>

<details class="tp-qa-card">
  <summary><strong>Q10: What is the tradeoff between hash maps and balanced BSTs?</summary>
Hash maps offer O(1) average vs O(log n) for BSTs on basic operations. But BSTs offer: (1) Ordered iteration without sorting. (2) Range queries (find all keys between X and.
Y) in O(k + log n). (3) Consistent O(log n) worst-case (with tree balancing) vs O(n) worst-case for hash maps under collision. (4) More memory efficient for.
sparse data. Choose a hash map when you need simple key-value lookups and order doesn't matter. Choose a BST (TreeMap) when you need sorted data,.
range queries, or predictable performance.
</details>

<details class="tp-qa-card">
  <summary><strong>Q11: How does Python's Counter work internally?</summary>
`Counter` is a subclass of `dict` designed for counting hashable objects. It inherits all dict properties (O(1) avg lookup, hash-based keys) and.
adds counting-specific methods: `most_common(n)` returns the n most frequent elements using `heapq.nlargest` on the items; `elements()` returns an iterator over elements repeating each as many times as its count;.
`subtract()` decrements counts; arithmetic operators (`+`, `-`, `&`, `|`) merge counters. The underlying storage is a regular dict mapping elements to integer counts. `Counter.most_common()` sorts by count internally,.
so it's O(n log n) for the full result, O(n log m) for the top m.
</details>

<details class="tp-qa-card">
  <summary><strong>Q12: What happens during hash map resize (rehash)?</summary>
When the load factor threshold is exceeded, the hash map allocates a new, larger bucket array (typically 2x or 4x the size). Every existing entry must be rehashed — its hash is recomputed modulo the new size,.
and it is inserted into the new bucket. Rehashing is O(n) and happens infrequently (amortized O(1) per insertion). Python's dict growth factor.
is approximately 2x (actually follows a specific sequence: 5, 11, 22, 45, 90, 181, 362, 724, 1448, 2896...). The resize ensures amortized constant-time performance despite individual resizes being expensive.
</details>

## Chapter Quiz

<details class="tp-qa-card">
  <summary><strong>Q1:</strong> What is the average time complexity of a hash map lookup?</summary>
  a) O(1)   b) O(log n)   c) O(n)   d) O(n log n)
  <br><br>
  <strong>Answer: a) O(1)</strong>
  <br>
  With a good hash function and reasonable load factor, hash map operations average O(1). The worst case is O(n) if all keys collide.
</details>

<details class="tp-qa-card">
  <summary><strong>Q2:</strong> In the subarray sum equals k problem, why is 0 entered into the prefix sum map initially?</summary>
  a) To avoid null pointer errors   b) To handle subarrays starting from index 0   c) It is unnecessary   d) To count empty subarrays
  <br><br>
  <strong>Answer: b) To handle subarrays starting from index 0</strong>
  <br>
  The prefix sum 0 with count 1 represents the empty prefix. This allows counting subarrays where the sum equals k from the very first element.
</details>

<details class="tp-qa-card">
  <summary><strong>Q3:</strong> Which of the following cannot be used as a Python dictionary key?</summary>
  a) int   b) str   c) list   d) tuple
  <br><br>
  <strong>Answer: c) list</strong>
  <br>
  Lists are mutable and unhashable. Tuples are hashable (if all elements are hashable). Only immutable, hashable types can be keys.
</details>

<details class="tp-qa-card">
  <summary><strong>Q4:</strong> What is the time complexity of the longest consecutive sequence solution using a hash set?</summary>
  a) O(n^2)   b) O(n log n)   c) O(n)   d) O(n^2 log n)
  <br><br>
  <strong>Answer: c) O(n)</strong>
  <br>
  Building the set is O(n). The loop visits each element at most twice (once as potential start, once during streak counting). Total O(n).
</details>

<details class="tp-qa-card">
  <summary><strong>Q5:</strong> In the two-sum hash map solution, what is stored as the key and value in the map?</summary>
  a) Index -> Number   b) Number -> Index   c) Number -> Count   d) Index -> Count
  <br><br>
  <strong>Answer: b) Number -> Index</strong>
  <br>
  We map each number to its index. For each new number, we check if its complement (target - current) exists as a key, giving us the index of the complement.
</details>

## Exercises


## Common Mistakes

1. Not handling hash collisions
2. Using mutable objects as keys
3. Forgetting that hash maps have O(n) worst case
4. Not considering memory overhead
5. When to use map vs set vs array### Exercise 1 (Easy): Jewels and Stones

You are given strings `jewels` representing types of stones that are jewels, and `stones` representing the stones you have. Return how many of the stones you have are also jewels.

```python
def num_jewels_in_stones(jewels, stones):
    jewel_set = set(jewels)
    count = 0
    for stone in stones:
        if stone in jewel_set:
            count += 1
    return count

print(num_jewels_in_stones("aA", "aAAbbbb"))  # 3
print(num_jewels_in_stones("z", "ZZ"))        # 0
```text

### Exercise 2 (Medium): Top K Frequent Elements

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. Solve in better than O(n log n).

```python
from collections import Counter
import heapq

def top_k_frequent(nums, k):
    count = Counter(nums)
    return heapq.nlargest(k, count.keys(), key=count.get)

nums = [1, 1, 1, 2, 2, 3]
print(top_k_frequent(nums, 2))  # [1, 2]

## Bucket sort approach for O(n)
def top_k_frequent_bucket(nums, k):
    count = Counter(nums)
    bucket = [[] for _ in range(len(nums) + 1)]
    for num, freq in count.items():
        bucket[freq].append(num)
    result = []
    for freq in range(len(bucket) - 1, 0, -1):
        for num in bucket[freq]:
            result.append(num)
            if len(result) == k:
                return result
    return result

print(top_k_frequent_bucket([1, 1, 1, 2, 2, 3], 2))  # [1, 2]
```text


## Overview

### Exercise 3 (Medium): Valid Sudoku

Determine if a 9x9 Sudoku board is valid. Each row, column, and 3x3 sub-box must contain the digits 1-9 without repetition.

```python
from collections import defaultdict

def is_valid_sudoku(board):
    rows = defaultdict(set)
    cols = defaultdict(set)
    boxes = defaultdict(set)

    for r in range(9):
        for c in range(9):
            val = board[r][c]
            if val == ".":
                continue
            box_key = (r // 3, c // 3)
            if val in rows[r] or val in cols[c] or val in boxes[box_key]:
                return False
            rows[r].add(val)
            cols[c].add(val)
            boxes[box_key].add(val)
    return True

board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]
print(is_valid_sudoku(board))  # True
```text

### Exercise 4 (Hard): Longest Substring Without Repeating Characters

Given a string `s`, find the length of the longest substring without repeating characters. Use a hash map and sliding window.

```python
def length_of_longest_substring(s):
    char_index = {}
    left = max_len = 0
    for right, c in enumerate(s):
        if c in char_index and char_index[c] >= left:
            left = char_index[c] + 1
        char_index[c] = right
        max_len = max(max_len, right - left + 1)
    return max_len

print(length_of_longest_substring("abcabcbb"))  # 3 ("abc")
print(length_of_longest_substring("bbbbb"))     # 1 ("b")
print(length_of_longest_substring("pwwkew"))    # 3 ("wke")
```text

### Exercise 5 (Hard): Minimum Window Substring

Given two strings `s` and `t`, return the minimum window in `s` that contains all characters of `t`.

```python
from collections import Counter

def min_window(s, t):
    if not s or not t:
        return ""
    target = Counter(t)
    required = len(target)
    left = formed = 0
    window = {}
    ans = (float("inf"), None, None)

    for right, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        if c in target and window[c] == target[c]:
            formed += 1

        while left <= right and formed == required:
            c = s[left]
            if right - left + 1 < ans[0]:
                ans = (right - left + 1, left, right)
            window[c] -= 1
            if c in target and window[c] < target[c]:
                formed -= 1
            left += 1

    return "" if ans[0] == float("inf") else s[ans[1]:ans[2] + 1]

s = "ADOBECODEBANC"
t = "ABC"
print(min_window(s, t))  # "BANC"
```text

---

[← Previous: Two Pointers](05-two-pointers.md) | [Next: Linked Lists →](07-linked-

## Revision Notes

- Hash map: O(1) avg lookup/insert/delete
- Hash set: O(1) membership testing
- Collision resolution: chaining vs open addressing
- Use for frequency counting and two-sum patterns
- Ordered map for sorted key requirements

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of data structures algorithms. When would you choose one approach over another?
2. Design a system that efficiently handles data structures algorithms at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to data structures algorithms. What was your approach and what was the result?
2. How would you explain data structures algorithms to a non-technical stakeholder?

#### Microsoft Style
1. How does data structures algorithms integrate with enterprise systems and cloud architectures?
2. What are the security implications of data structures algorithms?

#### NVIDIA Style
1. How would you optimize data structures algorithms for GPU-accelerated computing?
2. What parallel processing patterns apply to data structures algorithms?

#### AI Startup Style
1. How would you implement data structures algorithms in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using data structures algorithms?

### Resume Tips
- **Technical Skills**: List data structures algorithms under relevant technical skills
- **Project Description**: "Implemented data structures algorithms to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include data structures algorithms in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of data structures algorithms
- [ ] Practice 3-5 problems related to data structures algorithms
- [ ] Prepare 2 real-world examples of using data structures algorithms
- [ ] Know the time/space complexity of common data structures algorithms operations
- [ ] Have questions ready about how the company uses data structures algorithmslists.md)


## Difficulty Level

**Level**: Intermediate
**Estimated Study Time**: 30-45 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to Data Structures & Algorithms fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master hash maps and sets?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of hash maps and sets helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding hash maps and sets at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of hash maps and sets like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply hash maps and sets concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of hash maps and sets?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply hash maps and sets in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of Data Structures & Algorithms?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## Optimized Implementation

For production systems, consider:
- **Caching**: Cache frequent computations and API responses
- **Batching**: Process multiple items together for efficiency
- **Async/Await**: Use non-blocking I/O for concurrent operations
- **Connection Pooling**: Reuse database and API connections
- **Lazy Loading**: Load resources only when needed

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering Data Structures & Algorithms, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
