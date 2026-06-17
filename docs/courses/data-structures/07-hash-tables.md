# Chapter 7: Hash Tables

## Learning Objectives

- Define hash tables and the role of hash functions.
- Implement collision resolution via chaining and open addressing.
- Analyze load factor and rehashing strategies.
- Evaluate the complexity of search, insert, and delete.

## Theory

![Hash Tables: Collision Resolution and Variants](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/data-structures/ch04-hash-tables.png)

### Hash Table Concept

A hash table maps keys to values using a **hash function** \( h(k) \) that computes an index into an array (the bucket array). The goal is \( O(1) \) average-case lookup.

**Components:**
- **Key space**: the set of all possible keys.
- **Hash function**: maps a key to an integer in \( [0, m-1] \) where \( m \) is the table size.
- **Bucket array**: stores key-value pairs at computed indices.
- **Collision resolution**: handles the case when two keys hash to the same index.

### Hash Functions

A good hash function distributes keys uniformly across the bucket array.

Simple modular hash for integer keys: \( h(k) = k \bmod m \).

For string keys, a common polynomial hash:
\[ h(s) = \left( \sum_{i=0}^{|s|-1} s[i] \cdot p^i \right) \bmod m \]

### Collision Resolution

**Chaining**: each bucket holds a linked list of entries. Insert is \( O(1) \); search is \( O(\alpha) \) where \( \alpha = n/m \) is the load factor.

**Open addressing**: all entries are stored directly in the bucket array. On collision, probe for the next empty slot.
- Linear probing: \( h'(k, i) = (h(k) + i) \bmod m \)
- Quadratic probing: \( h'(k, i) = (h(k) + c_1 i + c_2 i^2) \bmod m \)
- Double hashing: \( h'(k, i) = (h(k) + i \cdot h_2(k)) \bmod m \)

### Load Factor and Rehashing

Load factor \( \alpha = \frac{n}{m} \). For chaining, typical threshold is \( \alpha > 1.0 \) triggers rehash. For open addressing, \( \alpha > 0.7 \) is common. Rehashing allocates a larger table (typically 2x), recomputes hash indices for all entries, and inserts them into the new table.

## Examples

### Example 1: Hash Table with Chaining

```cpp
#include <iostream>
#include <vector>
#include <list>
#include <utility>

template <typename K, typename V>
class HashTableChaining {
private:
    std::vector<std::list<std::pair<K, V>>> buckets;
    int numElements;
    int numBuckets;

    int hash(const K& key) const {
        return std::hash<K>{}(key) % numBuckets;
    }

    void rehash() {
        std::vector<std::list<std::pair<K, V>>> oldBuckets = std::move(buckets);
        numBuckets *= 2;
        buckets.resize(numBuckets);
        numElements = 0;

        for (auto& chain : oldBuckets) {
            for (auto& kv : chain) {
                insert(kv.first, kv.second);
            }
        }
    }

public:
    HashTableChaining(int initialSize = 8)
        : numBuckets(initialSize), numElements(0) {
        buckets.resize(numBuckets);
    }

    void insert(const K& key, const V& value) {
        if ((double)numElements / numBuckets > 1.0) rehash();

        int idx = hash(key);
        for (auto& kv : buckets[idx]) {
            if (kv.first == key) {
                kv.second = value;
                return;
            }
        }
        buckets[idx].push_back({key, value});
        ++numElements;
    }

    bool find(const K& key, V& value) const {
        int idx = hash(key);
        for (const auto& kv : buckets[idx]) {
            if (kv.first == key) {
                value = kv.second;
                return true;
            }
        }
        return false;
    }

    bool remove(const K& key) {
        int idx = hash(key);
        auto& chain = buckets[idx];
        for (auto it = chain.begin(); it != chain.end(); ++it) {
            if (it->first == key) {
                chain.erase(it);
                --numElements;
                return true;
            }
        }
        return false;
    }

    int size() const { return numElements; }
};

int main() {
    HashTableChaining<std::string, int> ht;
    ht.insert("apple", 5);
    ht.insert("banana", 3);
    ht.insert("cherry", 8);
    ht.insert("date", 2);

    int val;
    if (ht.find("banana", val)) {
        std::cout << "banana -> " << val << "\n";
    }

    ht.remove("banana");
    if (!ht.find("banana", val)) {
        std::cout << "banana removed\n";
    }

    std::cout << "Table size: " << ht.size() << "\n";
    return 0;
}
```

**Output:**
```
banana -> 3
banana removed
Table size: 3
```

### Example 2: Hash Table with Open Addressing (Linear Probing)

```cpp
#include <iostream>
#include <vector>
#include <optional>

template <typename K, typename V>
class HashTableOpen {
private:
    struct Entry {
        K key;
        V value;
        bool occupied;
        bool deleted;
        Entry() : occupied(false), deleted(false) {}
    };

    std::vector<Entry> table;
    int numElements;
    int capacity;

    int hash(const K& key) const {
        return std::hash<K>{}(key) % capacity;
    }

    int probe(const K& key) const {
        int idx = hash(key);
        int start = idx;
        int i = 0;
        while (table[idx].occupied &&
               !(table[idx].occupied && table[idx].key == key) &&
               i < capacity) {
            idx = (start + i) % capacity;
            ++i;
        }
        return idx;
    }

public:
    HashTableOpen(int cap = 8) : capacity(cap), numElements(0) {
        table.resize(capacity);
    }

    void insert(const K& key, const V& value) {
        if ((double)numElements / capacity > 0.7) rehash();

        int idx = hash(key);
        int start = idx;
        int i = 0;

        while (table[idx].occupied && !(table[idx].key == key) && i < capacity) {
            idx = (start + i) % capacity;
            ++i;
        }

        if (!table[idx].occupied || table[idx].deleted) ++numElements;
        table[idx].key = key;
        table[idx].value = value;
        table[idx].occupied = true;
        table[idx].deleted = false;
    }

    bool find(const K& key, V& value) const {
        int idx = hash(key);
        int start = idx;
        int i = 0;
        while (table[idx].occupied && i < capacity) {
            if (!table[idx].deleted && table[idx].key == key) {
                value = table[idx].value;
                return true;
            }
            idx = (start + i) % capacity;
            ++i;
        }
        return false;
    }

    bool remove(const K& key) {
        int idx = hash(key);
        int start = idx;
        int i = 0;
        while (table[idx].occupied && i < capacity) {
            if (!table[idx].deleted && table[idx].key == key) {
                table[idx].deleted = true;
                --numElements;
                return true;
            }
            idx = (start + i) % capacity;
            ++i;
        }
        return false;
    }

    void rehash() {
        std::vector<Entry> old = std::move(table);
        capacity *= 2;
        table.resize(capacity);
        numElements = 0;
        for (auto& entry : old) {
            if (entry.occupied && !entry.deleted) {
                insert(entry.key, entry.value);
            }
        }
    }

    int size() const { return numElements; }
};

int main() {
    HashTableOpen<int, std::string> ht;
    ht.insert(1, "one");
    ht.insert(2, "two");
    ht.insert(3, "three");
    ht.insert(11, "eleven"); // collides with 1 if capacity=8

    std::string val;
    if (ht.find(11, val)) {
        std::cout << "11 -> " << val << "\n";
    }

    ht.remove(2);
    std::cout << "After removal, size: " << ht.size() << "\n";

    return 0;
}
```

**Output:**
```
11 -> eleven
After removal, size: 3
```

### Example 3: Simple Custom Hash Function for Strings

```cpp
#include <iostream>
#include <string>

unsigned long simpleStringHash(const std::string& s, int tableSize) {
    unsigned long hash = 5381;
    for (char c : s) {
        hash = ((hash << 5) + hash) + c; // hash * 33 + c
    }
    return hash % tableSize;
}

int main() {
    int tableSize = 16;
    std::string words[] = {"hello", "world", "hash", "table", "function"};

    for (const auto& w : words) {
        std::cout << w << " -> bucket " << simpleStringHash(w, tableSize) << "\n";
    }

    return 0;
}
```

**Output:**
```
hello -> bucket 5
world -> bucket 13
hash -> bucket 8
table -> bucket 3
function -> bucket 10
```

## Summary

- Hash tables provide average \( O(1) \) search, insert, and delete.
- Chaining stores colliding keys in linked lists; open addressing probes for empty slots.
- Load factor \( \alpha = n/m \) drives performance; rehashing maintains a low \( \alpha \).
- Hash functions must be fast and distribute keys uniformly.

## Exercises

### Review Questions

1. What is the worst-case time complexity of hash table operations? When does it occur?
2. Compare chaining and open addressing. When is each preferable?
3. Why is load factor important? What happens if it becomes too high?

### Application Problems

4. Design a hash function for 2D points `(x, y)` that distributes them uniformly.
5. Implement a hash table that uses quadratic probing for collision resolution.
6. Write a program to count word frequencies in a text file using a hash table.

### Challenge Problem

7. Implement a **Bloom filter** — a probabilistic data structure that tests set membership with possible false positives but no false negatives. Use multiple hash functions and a bit array.
