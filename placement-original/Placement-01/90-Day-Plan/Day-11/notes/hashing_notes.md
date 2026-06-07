# Hashing and Hash Tables - Complete Notes

## Table of Contents
1. [Introduction to Hashing](#introduction)
2. [Hash Functions](#hash-functions)
3. [Collision Handling](#collision-handling)
4. [HashMap Internals](#hashmap-internals)
5. [HashSet Internals](#hashset-internals)
6. [Load Factor and Rehashing](#load-factor)
7. [Common Patterns](#patterns)
8. [Interview Questions](#interview)

---

## Introduction to Hashing {#introduction}

### What is Hashing?

**Hashing** is a technique to map data of arbitrary size to fixed-size values using a **hash function**. The resulting value is called a **hash code** or **hash value**.

### Why Use Hashing?

- **Fast Lookups**: O(1) average time for search, insert, delete
- **Unique Identification**: Map keys to unique locations
- **Data Integrity**: Detect data corruption
- **Efficient Storage**: Direct access without sequential search

### Applications

1. **Databases**: Index records for quick retrieval
2. **Caches**: Store frequently accessed data (LRU cache)
3. **Sets**: Maintain unique elements
4. **Symbol Tables**: Compiler/interpreter symbol lookup
5. **Password Storage**: Hash passwords for security
6. **Cryptography**: Digital signatures, checksums

---

## Hash Functions {#hash-functions}

### Properties of Good Hash Function

1. **Deterministic**: Same input always produces same output
2. **Uniform Distribution**: Distributes keys evenly across buckets
3. **Fast Computation**: O(1) time to compute hash
4. **Minimize Collisions**: Different keys rarely produce same hash

### Common Hash Functions

#### 1. Division Method
```
hash(key) = key % tableSize
```
- Simple and fast
- TableSize should be prime to reduce collisions

#### 2. Multiplication Method
```
hash(key) = floor(tableSize * (key * A mod 1))
```
- A is constant (0 < A < 1)
- Knuth suggests A ≈ 0.6180339887 (golden ratio)

#### 3. Java's hashCode()
```java
// String hashing
int hash = 0;
for (int i = 0; i < length; i++) {
    hash = 31 * hash + charAt(i);
}
```
- Uses prime multiplier (31)
- Good distribution for strings

### Example Hash Calculations

```java
// Integer key
int key = 12345;
int tableSize = 1000;
int index = key % tableSize;  // 345

// String key
String key = "Alice";
int hashCode = key.hashCode();  // Implementation-specific
int index = Math.abs(hashCode) % tableSize;
```

---

## Collision Handling {#collision-handling}

**Collision**: When two different keys hash to the same index.

### 1. Separate Chaining

Store colliding elements in a linked list at each bucket.

**Structure**:
```
Bucket 0:  [Entry1] -> [Entry2] -> null
Bucket 1:  [Entry3] -> null
Bucket 2:  null
Bucket 3:  [Entry4] -> [Entry5] -> [Entry6] -> null
```

**Advantages**:
- Simple implementation
- Never fills up
- Performance degrades gradually

**Disadvantages**:
- Extra memory for pointers
- Cache performance issues

**Operations**:
- **Insert**: O(1) - Add to front of list
- **Search**: O(k) - k is chain length
- **Delete**: O(k) - Search then remove

### 2. Open Addressing

Store all elements in the hash table itself. When collision occurs, probe for next empty slot.

#### a) Linear Probing
```
hash(key, i) = (hash(key) + i) % tableSize
```
- Check slots sequentially: h(k), h(k)+1, h(k)+2, ...
- **Problem**: Primary clustering (long sequences of filled slots)

#### b) Quadratic Probing
```
hash(key, i) = (hash(key) + c1*i + c2*i²) % tableSize
```
- Jump quadratically: h(k), h(k)+1, h(k)+4, h(k)+9, ...
- **Problem**: Secondary clustering

#### c) Double Hashing
```
hash(key, i) = (hash1(key) + i * hash2(key)) % tableSize
```
- Use second hash function for step size
- Best distribution among probing methods

**Advantages**:
- No extra memory
- Better cache performance

**Disadvantages**:
- Can fill up (requires rehashing)
- Complex deletion

### Java's HashMap: Chaining with Trees

```
If chain length > 8 (TREEIFY_THRESHOLD):
    Convert linked list to Red-Black Tree
    
Operations in tree: O(log n)
Operations in list: O(n)
```

---

## HashMap Internals {#hashmap-internals}

### Internal Structure

```java
class HashMap<K, V> {
    Node<K,V>[] table;  // Array of buckets
    int size;           // Number of entries
    int threshold;      // Rehash threshold
    float loadFactor;   // Load factor (default 0.75)
    
    static class Node<K,V> {
        final int hash;
        final K key;
        V value;
        Node<K,V> next;  // Chaining
    }
}
```

### Default Values

```java
DEFAULT_INITIAL_CAPACITY = 16
DEFAULT_LOAD_FACTOR = 0.75f
MAXIMUM_CAPACITY = 1 << 30  // 2^30
TREEIFY_THRESHOLD = 8
UNTREEIFY_THRESHOLD = 6
```

### How put() Works

```java
public V put(K key, V value) {
    // 1. Calculate hash
    int hash = hash(key);
    
    // 2. Calculate bucket index
    int index = (n - 1) & hash;  // n = table.length
    
    // 3. Check if bucket is empty
    if (table[index] == null) {
        table[index] = new Node(hash, key, value, null);
    } else {
        // 4. Traverse chain/tree
        Node<K,V> e;
        if (key exists in chain) {
            // Update existing value
            oldValue = e.value;
            e.value = value;
            return oldValue;
        } else {
            // Add new node
            add new node to chain
        }
    }
    
    // 5. Check if rehashing needed
    if (++size > threshold) {
        resize();
    }
}
```

### How get() Works

```java
public V get(Object key) {
    // 1. Calculate hash
    int hash = hash(key);
    
    // 2. Calculate bucket index
    int index = (n - 1) & hash;
    
    // 3. Get bucket
    Node<K,V> first = table[index];
    
    if (first == null) {
        return null;
    }
    
    // 4. Search in chain/tree
    if (first.hash == hash && equals(first.key, key)) {
        return first.value;
    }
    
    if (first.next != null) {
        // Search in linked list or tree
        return search(first, key);
    }
    
    return null;
}
```

### Hash Calculation

```java
static final int hash(Object key) {
    int h;
    // XOR higher bits with lower bits
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```
- Spreads higher bits to lower bits
- Reduces collisions for similar hashCodes

---

## HashSet Internals {#hashset-internals}

### Implementation

```java
class HashSet<E> {
    private HashMap<E, Object> map;
    
    private static final Object PRESENT = new Object();
    
    public HashSet() {
        map = new HashMap<>();
    }
    
    public boolean add(E e) {
        return map.put(e, PRESENT) == null;
    }
    
    public boolean contains(Object o) {
        return map.containsKey(o);
    }
    
    public boolean remove(Object o) {
        return map.remove(o) == PRESENT;
    }
}
```

**Key Points**:
- HashSet is backed by HashMap
- Elements stored as keys
- Dummy object (PRESENT) as value
- All HashMap properties apply

---

## Load Factor and Rehashing {#load-factor}

### Load Factor

```
Load Factor = Number of Entries / Bucket Count
```

**Default**: 0.75
- Balance between time and space
- Lower = faster, more memory
- Higher = slower, less memory

### Threshold

```
Threshold = Capacity × Load Factor
```

Example:
```
Capacity = 16
Load Factor = 0.75
Threshold = 16 × 0.75 = 12
```
Rehash when size exceeds 12.

### Rehashing Process

```java
void resize() {
    // 1. Double the capacity
    oldCapacity = 16;
    newCapacity = 32;
    
    // 2. Create new table
    Node<K,V>[] newTable = new Node[newCapacity];
    
    // 3. Rehash all entries
    for (Node<K,V> e : oldTable) {
        while (e != null) {
            int newIndex = hash(e.key) % newCapacity;
            // Move e to newTable[newIndex]
            e = e.next;
        }
    }
    
    // 4. Update table reference
    table = newTable;
}
```

**Cost**: O(n) for rehashing all n entries

**Amortized Analysis**: Since rehashing is infrequent, average cost per insertion is still O(1).

---

## Common Patterns {#patterns}

### 1. Frequency Counting

```java
Map<Character, Integer> freq = new HashMap<>();
for (char c : text.toCharArray()) {
    freq.put(c, freq.getOrDefault(c, 0) + 1);
}
```

**Applications**:
- Character/word frequency
- Find duplicates
- Most frequent element

### 2. Two Sum Pattern

```java
Map<Integer, Integer> map = new HashMap<>();
for (int i = 0; i < nums.length; i++) {
    int complement = target - nums[i];
    if (map.containsKey(complement)) {
        return new int[]{map.get(complement), i};
    }
    map.put(nums[i], i);
}
```

**Applications**:
- Two Sum
- Three Sum (with two pointers)
- Four Sum

### 3. Anagram Detection

```java
String sortedS = sort(s);
String sortedT = sort(t);
return sortedS.equals(sortedT);

// Or use frequency map
Map<Character, Integer> freq = new HashMap<>();
// Count s frequencies
// Subtract t frequencies
// Check if all counts are 0
```

**Applications**:
- Valid Anagram
- Group Anagrams
- Find Anagrams in String

### 4. Sliding Window with Hash

```java
Map<Character, Integer> window = new HashMap<>();
int left = 0;

for (int right = 0; right < s.length(); right++) {
    // Expand window
    char c = s.charAt(right);
    window.put(c, window.getOrDefault(c, 0) + 1);
    
    // Shrink window
    while (window.size() > k) {
        char leftChar = s.charAt(left);
        window.put(leftChar, window.get(leftChar) - 1);
        if (window.get(leftChar) == 0) {
            window.remove(leftChar);
        }
        left++;
    }
}
```

**Applications**:
- Longest Substring K Distinct
- Minimum Window Substring
- Find Anagrams

### 5. Prefix Sum with Hash

```java
Map<Integer, Integer> map = new HashMap<>();
map.put(0, 1);  // Base case
int sum = 0;

for (int num : nums) {
    sum += num;
    count += map.getOrDefault(sum - k, 0);
    map.put(sum, map.getOrDefault(sum, 0) + 1);
}
```

**Applications**:
- Subarray Sum Equals K
- Continuous Subarray Sum
- Subarray with 0 Sum

---

## Interview Questions {#interview}

### Conceptual Questions

1. **What is hashing?**
   - Technique to map keys to indices using hash function
   - Enables O(1) average-case operations

2. **Explain collision handling methods.**
   - Chaining: Store colliding elements in linked list
   - Open addressing: Probe for next empty slot

3. **What is load factor?**
   - Ratio of entries to capacity
   - Controls when rehashing occurs
   - Default 0.75 in Java

4. **HashMap vs Hashtable?**
   - HashMap: Not synchronized, allows null, faster
   - Hashtable: Synchronized, no nulls, thread-safe

5. **Why is HashMap O(1)?**
   - Direct index calculation from hash
   - Minimal collisions with good hash function
   - Constant-time array access

### Coding Questions

1. Two Sum
2. Group Anagrams
3. Longest Substring Without Repeating
4. Subarray Sum Equals K
5. LRU Cache
6. Design HashMap
7. First Non-Repeating Character
8. Top K Frequent Elements
9. Valid Anagram
10. Longest Consecutive Sequence

### Best Practices

1. **Override hashCode() and equals() together**
   ```java
   @Override
   public int hashCode() {
       return Objects.hash(field1, field2);
   }
   
   @Override
   public boolean equals(Object o) {
       // Compare all fields
   }
   ```

2. **Use immutable objects as keys**
   - Prevents hash code changes
   - Ensures key consistency

3. **Choose appropriate initial capacity**
   ```java
   // If you know size in advance
   int expectedSize = 1000;
   int capacity = (int)(expectedSize / 0.75) + 1;
   Map<K, V> map = new HashMap<>(capacity);
   ```

4. **Use getOrDefault() to avoid null checks**
   ```java
   map.put(key, map.getOrDefault(key, 0) + 1);
   ```

5. **Use computeIfAbsent() for lazy initialization**
   ```java
   map.computeIfAbsent(key, k -> new ArrayList<>()).add(value);
   ```

---

## Time Complexity Summary

| Operation | Average | Worst Case |
|-----------|---------|------------|
| put(k, v) | O(1) | O(n) |
| get(k) | O(1) | O(n) |
| remove(k) | O(1) | O(n) |
| containsKey(k) | O(1) | O(n) |
| containsValue(v) | O(n) | O(n) |
| size() | O(1) | O(1) |

**Note**: With Java 8+ tree buckets, worst case improves to O(log n) for tree operations.

---

## Space Complexity

- **Storage**: O(n) for n entries
- **Overhead**: O(capacity) for bucket array
- **Total**: O(n + capacity)

---

## Key Takeaways

✅ Hashing provides O(1) average-case operations  
✅ Good hash function is crucial for performance  
✅ Collision handling: Chaining or Open Addressing  
✅ Load factor controls space-time trade-off  
✅ HashMap = array + linked lists + trees (Java 8+)  
✅ HashSet is backed by HashMap  
✅ Always override hashCode() and equals() together  
✅ Use immutable keys to prevent issues

