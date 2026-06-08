# Hashing - Quick Concepts Guide

## Core Concepts

### What is Hashing?
Hashing is a technique that converts input data of any size into a fixed-size string of characters, typically for efficient data retrieval and storage.

### Hash Function Properties
- **Deterministic**: Same input always produces same hash
- **Uniform Distribution**: Evenly distributes hash values
- **Avalanche Effect**: Small input change causes large hash change
- **Fast Computation**: Quick to compute hash values

### Hash Table Operations
```java
// Basic Hash Table Interface
interface HashTable<K, V> {
    void put(K key, V value);      // O(1) average
    V get(K key);                  // O(1) average
    boolean containsKey(K key);    // O(1) average
    void remove(K key);            // O(1) average
}
```

## Common Hashing Patterns

### 1. Frequency Counting
```java
// Count frequency of elements
Map<Integer, Integer> freq = new HashMap<>();
for (int num : nums) {
    freq.put(num, freq.getOrDefault(num, 0) + 1);
}
```

### 2. Two Sum Pattern
```java
// Find two numbers that sum to target
Map<Integer, Integer> map = new HashMap<>();
for (int i = 0; i < nums.length; i++) {
    int complement = target - nums[i];
    if (map.containsKey(complement)) {
        return new int[]{map.get(complement), i};
    }
    map.put(nums[i], i);
}
```

### 3. Group Anagrams
```java
// Group strings by sorted characters
Map<String, List<String>> groups = new HashMap<>();
for (String str : strs) {
    char[] chars = str.toCharArray();
    Arrays.sort(chars);
    String key = new String(chars);
    groups.computeIfAbsent(key, k -> new ArrayList<>()).add(str);
}
```

### 4. Cycle Detection
```java
// Detect cycle using hash set
Set<Integer> seen = new HashSet<>();
while (n != 1 && !seen.contains(n)) {
    seen.add(n);
    n = sumOfSquares(n);
}
return n == 1;
```

## Collision Resolution

### Separate Chaining
- Each bucket contains linked list of entries
- Load factor = elements / buckets
- Rehash when load factor exceeds threshold

### Open Addressing
- **Linear Probing**: Check next slot if collision
- **Quadratic Probing**: Check slot + i² positions
- **Double Hashing**: Use second hash function

## Hash Function Examples

### Division Method
```java
int hash = key % tableSize;
```

### Multiplication Method
```java
double A = 0.6180339887; // Golden ratio
int hash = (int)(tableSize * ((key * A) % 1));
```

### String Hashing
```java
int hash = 0;
for (char c : str.toCharArray()) {
    hash = (hash * 31 + c) % MOD;
}
```

## Time Complexity Analysis

| Operation | Average Case | Worst Case |
|-----------|-------------|------------|
| Insert    | O(1)       | O(n)      |
| Delete    | O(1)       | O(n)      |
| Search    | O(1)       | O(n)      |

## Space Complexity
- **Hash Table**: O(n) for elements + O(table size)
- **Load Factor**: α = n / m (n = elements, m = buckets)
- **Optimal Load Factor**: 0.75 for separate chaining

## Common Applications

### 1. Database Indexing
- Fast lookups by primary key
- B-tree vs Hash indexes

### 2. Caching
- LRU Cache implementation
- Memoization in dynamic programming

### 3. Duplicate Detection
- Bloom filters for approximate membership
- Checksum verification

### 4. Security
- Password hashing (bcrypt, scrypt)
- Digital signatures
- Blockchain proof-of-work

## Interview Problem Patterns

### Array Problems
- Two Sum, Three Sum variants
- Contains Duplicate, Find Duplicates
- Majority Element, Single Number

### String Problems
- Group Anagrams, Isomorphic Strings
- Valid Anagram, First Unique Character
- Minimum Window Substring

### Design Problems
- LRU Cache, LFU Cache
- Hash Map implementation
- Bloom Filter design

## Edge Cases to Consider
- Empty inputs
- Single element arrays
- All elements same
- Maximum/minimum values
- Hash collisions (rare but possible)

## Optimization Tips
- Pre-allocate hash map capacity when known
- Use appropriate load factor
- Consider memory vs time trade-offs
- Handle hash collisions gracefully
- Use immutable keys for thread safety

## Common Mistakes
- Forgetting to handle null keys/values
- Not considering hash function quality
- Ignoring load factor impact
- Using mutable objects as keys
- Not handling concurrent access