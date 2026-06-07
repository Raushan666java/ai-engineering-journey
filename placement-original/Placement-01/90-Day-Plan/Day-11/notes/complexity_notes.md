# Time and Space Complexity Analysis

## Table of Contents
1. [HashMap Operations](#hashmap-operations)
2. [HashSet Operations](#hashset-operations)
3. [Cycle Detection](#cycle-detection)
4. [Common Problem Patterns](#patterns)
5. [Comparison Tables](#comparisons)

---

## HashMap Operations {#hashmap-operations}

### Basic Operations

| Operation | Average Case | Worst Case | Space |
|-----------|-------------|------------|-------|
| `put(k, v)` | O(1) | O(n) | O(1) |
| `get(k)` | O(1) | O(n) | O(1) |
| `remove(k)` | O(1) | O(n) | O(1) |
| `containsKey(k)` | O(1) | O(n) | O(1) |
| `containsValue(v)` | O(n) | O(n) | O(1) |
| `size()` | O(1) | O(1) | O(1) |
| `isEmpty()` | O(1) | O(1) | O(1) |
| `clear()` | O(n) | O(n) | O(1) |

### Detailed Analysis

#### put(k, v)
```java
public V put(K key, V value) {
    // O(1): Calculate hash
    int hash = hash(key);
    
    // O(1): Find bucket
    int index = (n - 1) & hash;
    
    // O(k): Traverse chain (k = chain length)
    // Average k = n/m (n entries, m buckets)
    // With good hash: k ≈ 1
    
    // O(1): Insert/update
    
    // O(n): Rehash if needed (amortized O(1))
}
```

**Average**: O(1) - Good hash function distributes evenly  
**Worst**: O(n) - All keys hash to same bucket (long chain)  
**Java 8+**: O(log n) worst case with tree buckets

#### get(k)
```java
public V get(Object key) {
    // O(1): Calculate hash
    int hash = hash(key);
    
    // O(1): Find bucket
    int index = (n - 1) & hash;
    
    // O(k): Search in chain
    // Average: O(1)
    // Worst: O(n) for long chain
}
```

### Iteration Operations

| Operation | Time Complexity | Notes |
|-----------|----------------|-------|
| `keySet()` | O(n) | Create set of keys |
| `values()` | O(n) | Create collection of values |
| `entrySet()` | O(n) | Create set of entries |
| Iterate keys | O(n + m) | n entries + m buckets |
| Iterate values | O(n + m) | n entries + m buckets |
| Iterate entries | O(n + m) | n entries + m buckets |

**Note**: Iteration must visit all buckets, even empty ones.

### Advanced Operations

| Operation | Time | Explanation |
|-----------|------|-------------|
| `putAll(map)` | O(n) | Insert n entries |
| `compute(k, f)` | O(1) avg | Same as put |
| `computeIfAbsent(k, f)` | O(1) avg | Same as put |
| `computeIfPresent(k, f)` | O(1) avg | Same as put |
| `merge(k, v, f)` | O(1) avg | Same as put |
| `replace(k, v)` | O(1) avg | Same as get + put |

### Rehashing

```java
void resize() {
    // Time: O(n) - rehash all entries
    // Space: O(m) - new bucket array (m = new capacity)
    
    // Happens when: size > threshold
    // Threshold = capacity × loadFactor
    // Default: 16 × 0.75 = 12
}
```

**Amortized Analysis**:
- Most puts: O(1)
- Occasional resize: O(n)
- Total over n puts: O(n)
- Average per put: O(n)/n = O(1)

---

## HashSet Operations {#hashset-operations}

### Basic Operations

| Operation | Average Case | Worst Case | Space |
|-----------|-------------|------------|-------|
| `add(e)` | O(1) | O(n) | O(1) |
| `remove(e)` | O(1) | O(n) | O(1) |
| `contains(e)` | O(1) | O(n) | O(1) |
| `size()` | O(1) | O(1) | O(1) |
| `isEmpty()` | O(1) | O(1) | O(1) |
| `clear()` | O(n) | O(n) | O(1) |

**Note**: HashSet backed by HashMap, same complexity.

### Set Operations

| Operation | Time Complexity | Notes |
|-----------|----------------|-------|
| `addAll(collection)` | O(m) | m = collection size |
| `retainAll(collection)` | O(n + m) | n = set size, m = collection size |
| `removeAll(collection)` | O(n + m) | Check each element |
| `containsAll(collection)` | O(m) | Check m elements |

### Set Operation Examples

```java
// Union: A ∪ B
Set<Integer> union = new HashSet<>(setA);  // O(n)
union.addAll(setB);                        // O(m)
// Total: O(n + m)

// Intersection: A ∩ B
Set<Integer> intersection = new HashSet<>(setA);  // O(n)
intersection.retainAll(setB);                     // O(n + m)
// Total: O(n + m)

// Difference: A - B
Set<Integer> difference = new HashSet<>(setA);  // O(n)
difference.removeAll(setB);                     // O(n + m)
// Total: O(n + m)
```

---

## Cycle Detection {#cycle-detection}

### Floyd's Algorithm

| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| Detect cycle | O(n) | O(1) | Slow + fast pointers |
| Find cycle start | O(n) | O(1) | Two-phase approach |
| Calculate cycle length | O(c) | O(1) | c = cycle length |
| Overall | O(n) | O(1) | Best space efficiency |

### Detailed Analysis

#### Phase 1: Detect Cycle
```java
while (fast != null && fast.next != null) {
    slow = slow.next;       // 1 step
    fast = fast.next.next;  // 2 steps
    
    if (slow == fast) {
        // Found cycle
    }
}
```

**Time**:
- If no cycle: O(n) - fast reaches end
- If cycle: O(n) - meet within 2n steps
  - Slow enters cycle: ≤ n steps
  - Fast catches slow: ≤ c steps (c = cycle length)
  - Total: ≤ n + c ≤ 2n = O(n)

**Space**: O(1) - only two pointers

#### Phase 2: Find Start
```java
slow = head;
while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
}
return slow;  // Cycle start
```

**Time**: O(x) where x = distance from head to cycle start
- x ≤ n, so O(n)

**Space**: O(1)

### HashSet Approach (Alternative)

```java
Set<ListNode> visited = new HashSet<>();
while (curr != null) {
    if (visited.contains(curr)) {
        return true;  // Cycle
    }
    visited.add(curr);
    curr = curr.next;
}
```

**Time**: O(n) - visit each node once  
**Space**: O(n) - store all visited nodes

### Comparison

| Aspect | Floyd's | HashSet |
|--------|---------|---------|
| Time | O(n) | O(n) |
| Space | O(1) | O(n) |
| Detect cycle | ✅ | ✅ |
| Find start | ✅ | ✅ |
| Memory usage | Minimal | High |
| Best for | Large lists | Small lists |

---

## Common Problem Patterns {#patterns}

### 1. Frequency Counting

```java
Map<Character, Integer> freq = new HashMap<>();
for (char c : text.toCharArray()) {  // O(n)
    freq.put(c, freq.getOrDefault(c, 0) + 1);  // O(1)
}
```

**Time**: O(n)  
**Space**: O(k) where k = unique characters

### 2. Two Sum

```java
Map<Integer, Integer> map = new HashMap<>();
for (int i = 0; i < nums.length; i++) {  // O(n)
    if (map.containsKey(target - nums[i])) {  // O(1)
        return new int[]{map.get(target - nums[i]), i};
    }
    map.put(nums[i], i);  // O(1)
}
```

**Time**: O(n)  
**Space**: O(n)

### 3. Group Anagrams

```java
Map<String, List<String>> map = new HashMap<>();
for (String str : strs) {  // O(n)
    char[] chars = str.toCharArray();
    Arrays.sort(chars);  // O(k log k)
    String key = new String(chars);
    
    map.computeIfAbsent(key, k -> new ArrayList<>())  // O(1)
       .add(str);
}
```

**Time**: O(n × k log k) where n = strings, k = avg length  
**Space**: O(n × k)

### 4. Longest Substring No Repeat

```java
Map<Character, Integer> map = new HashMap<>();
int start = 0, maxLen = 0;

for (int end = 0; end < s.length(); end++) {  // O(n)
    char c = s.charAt(end);
    
    if (map.containsKey(c)) {  // O(1)
        start = Math.max(start, map.get(c) + 1);
    }
    
    map.put(c, end);  // O(1)
    maxLen = Math.max(maxLen, end - start + 1);
}
```

**Time**: O(n)  
**Space**: O(min(n, k)) where k = charset size

### 5. Subarray Sum Equals K

```java
Map<Integer, Integer> map = new HashMap<>();
map.put(0, 1);
int sum = 0, count = 0;

for (int num : nums) {  // O(n)
    sum += num;
    count += map.getOrDefault(sum - k, 0);  // O(1)
    map.put(sum, map.getOrDefault(sum, 0) + 1);  // O(1)
}
```

**Time**: O(n)  
**Space**: O(n)

---

## Comparison Tables {#comparisons}

### HashMap vs TreeMap vs LinkedHashMap

| Operation | HashMap | TreeMap | LinkedHashMap |
|-----------|---------|---------|---------------|
| **put** | O(1) | O(log n) | O(1) |
| **get** | O(1) | O(log n) | O(1) |
| **remove** | O(1) | O(log n) | O(1) |
| **containsKey** | O(1) | O(log n) | O(1) |
| **Ordering** | None | Sorted | Insertion |
| **Null keys** | 1 allowed | Not allowed | 1 allowed |
| **Use case** | Fast access | Sorted data | Ordered access |

### HashSet vs TreeSet vs LinkedHashSet

| Operation | HashSet | TreeSet | LinkedHashSet |
|-----------|---------|---------|---------------|
| **add** | O(1) | O(log n) | O(1) |
| **remove** | O(1) | O(log n) | O(1) |
| **contains** | O(1) | O(log n) | O(1) |
| **Ordering** | None | Sorted | Insertion |
| **Null** | Allowed | Not allowed | Allowed |
| **Use case** | Fast lookup | Sorted set | Ordered set |

### Cycle Detection Methods

| Method | Time | Space | Pros | Cons |
|--------|------|-------|------|------|
| **Floyd's** | O(n) | O(1) | Minimal memory | Complex logic |
| **HashSet** | O(n) | O(n) | Simple | High memory |
| **Marking** | O(n) | O(1) | Simple | Modifies list |
| **Reversing** | O(n) | O(1) | No extra space | Destroys list |

---

## Space Complexity Details

### HashMap Storage

```
Total Space = Bucket Array + Entries + Overhead

Bucket Array: O(capacity)
Entries: O(n) × (key + value + metadata)
Metadata per entry: ~32 bytes (hash, next pointer, etc.)

Example:
Capacity = 16
n = 10 entries
Key/Value = 8 bytes each

Bucket Array: 16 × 8 = 128 bytes
Entries: 10 × (8 + 8 + 32) = 480 bytes
Total: 608 bytes
```

### Load Factor Impact

| Load Factor | Space Usage | Access Time | Rehash Frequency |
|-------------|-------------|-------------|------------------|
| 0.5 | High | Fast | Rare |
| 0.75 (default) | Moderate | Fast | Moderate |
| 0.9 | Low | Slower | Frequent |
| 1.0 | Minimal | Slowest | Very frequent |

---

## Best and Worst Cases

### HashMap Best Case

```java
// Perfect hash function, no collisions
// All operations O(1)

Map<Integer, String> map = new HashMap<>();
map.put(1, "A");   // O(1)
map.put(2, "B");   // O(1)
map.get(1);        // O(1)
```

### HashMap Worst Case

```java
// All keys hash to same bucket
// Degrades to linked list

// Before Java 8: O(n) operations
// Java 8+: O(log n) with tree conversion

class BadHash {
    @Override
    public int hashCode() {
        return 1;  // Always returns same hash!
    }
}
```

### Floyd's Best Case

```java
// No cycle, fast pointer reaches end quickly
// Time: O(n/2) = O(n)

1 -> 2 -> 3 -> null
```

### Floyd's Worst Case

```java
// Cycle at end, max distance to travel
// Time: Still O(n), but close to 2n steps

1 -> 2 -> ... -> n-1 -> n
                  ↑_____|
```

---

## Key Takeaways

✅ **HashMap/HashSet**: O(1) average, O(n) worst case  
✅ **Good hash function** crucial for O(1) performance  
✅ **Java 8+ optimization**: Tree buckets improve worst case to O(log n)  
✅ **Floyd's algorithm**: O(n) time, O(1) space - optimal for cycle detection  
✅ **Load factor** trades space for time  
✅ **Rehashing**: O(n) but amortized O(1)  
✅ **Iteration**: O(n + capacity) must visit all buckets  
✅ **containsValue**: O(n) always - must check all values

