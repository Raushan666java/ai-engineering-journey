# HashMap & HashSet Quick Reference

## HashMap Basics

### Creation
```java
// Empty HashMap
HashMap<String, Integer> map = new HashMap<>();

// With initial capacity
HashMap<String, Integer> map = new HashMap<>(16);

// With capacity and load factor
HashMap<String, Integer> map = new HashMap<>(16, 0.75f);

// From another map
HashMap<String, Integer> map = new HashMap<>(existingMap);
```

### Core Operations
| Method | Description | Time | Example |
|--------|-------------|------|---------|
| `put(K, V)` | Add/update entry | O(1) | `map.put("key", 10)` |
| `get(K)` | Get value | O(1) | `map.get("key")` |
| `remove(K)` | Remove entry | O(1) | `map.remove("key")` |
| `containsKey(K)` | Check key | O(1) | `map.containsKey("key")` |
| `containsValue(V)` | Check value | O(n) | `map.containsValue(10)` |
| `size()` | Get size | O(1) | `map.size()` |
| `isEmpty()` | Check empty | O(1) | `map.isEmpty()` |
| `clear()` | Remove all | O(n) | `map.clear()` |

### Safe Operations
```java
// getOrDefault - avoid null
int value = map.getOrDefault("key", 0);

// putIfAbsent - add only if absent
map.putIfAbsent("key", 10);

// replace - update only if exists
map.replace("key", 20);
map.replace("key", 10, 20);  // Replace if current value is 10

// compute - compute new value
map.compute("key", (k, v) -> v == null ? 1 : v + 1);

// computeIfAbsent - lazy initialization
map.computeIfAbsent("key", k -> new ArrayList<>()).add(item);

// computeIfPresent - update if exists
map.computeIfPresent("key", (k, v) -> v + 1);

// merge - merge values
map.merge("key", 1, Integer::sum);
```

### Iteration
```java
// Method 1: entrySet (fastest)
for (Map.Entry<K, V> entry : map.entrySet()) {
    K key = entry.getKey();
    V value = entry.getValue();
}

// Method 2: keySet
for (K key : map.keySet()) {
    V value = map.get(key);
}

// Method 3: values
for (V value : map.values()) {
    // Process value
}

// Method 4: forEach (Java 8+)
map.forEach((key, value) -> {
    // Process key-value
});

// Method 5: Stream (Java 8+)
map.entrySet().stream()
   .filter(e -> e.getValue() > 10)
   .forEach(e -> System.out.println(e));
```

---

## HashSet Basics

### Creation
```java
// Empty HashSet
HashSet<String> set = new HashSet<>();

// With initial capacity
HashSet<String> set = new HashSet<>(16);

// From collection
HashSet<String> set = new HashSet<>(Arrays.asList("A", "B", "C"));
```

### Core Operations
| Method | Description | Time | Example |
|--------|-------------|------|---------|
| `add(E)` | Add element | O(1) | `set.add("A")` |
| `remove(E)` | Remove element | O(1) | `set.remove("A")` |
| `contains(E)` | Check membership | O(1) | `set.contains("A")` |
| `size()` | Get size | O(1) | `set.size()` |
| `isEmpty()` | Check empty | O(1) | `set.isEmpty()` |
| `clear()` | Remove all | O(n) | `set.clear()` |

### Set Operations
```java
// Union: A ∪ B
Set<Integer> union = new HashSet<>(setA);
union.addAll(setB);

// Intersection: A ∩ B
Set<Integer> intersection = new HashSet<>(setA);
intersection.retainAll(setB);

// Difference: A - B
Set<Integer> difference = new HashSet<>(setA);
difference.removeAll(setB);

// Symmetric Difference: A Δ B
Set<Integer> symDiff = new HashSet<>(setA);
symDiff.addAll(setB);
Set<Integer> temp = new HashSet<>(setA);
temp.retainAll(setB);
symDiff.removeAll(temp);

// Subset check: A ⊆ B
boolean isSubset = setB.containsAll(setA);

// Disjoint check
Set<Integer> temp = new HashSet<>(setA);
temp.retainAll(setB);
boolean disjoint = temp.isEmpty();
```

---

## Floyd's Cycle Detection

### Basic Algorithm
```java
boolean hasCycle(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            return true;
        }
    }
    
    return false;
}
```

### Find Cycle Start
```java
ListNode detectCycle(ListNode head) {
    // Phase 1: Detect
    ListNode slow = head, fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            // Phase 2: Find start
            slow = head;
            while (slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    
    return null;
}
```

### Cycle Length
```java
int getCycleLength(ListNode head) {
    ListNode slow = head, fast = head;
    
    // Detect cycle
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            // Count nodes
            int length = 1;
            ListNode temp = slow.next;
            
            while (temp != slow) {
                length++;
                temp = temp.next;
            }
            
            return length;
        }
    }
    
    return 0;
}
```

---

## Common Patterns

### 1. Frequency Counting
```java
Map<Character, Integer> freq = new HashMap<>();
for (char c : text.toCharArray()) {
    freq.put(c, freq.getOrDefault(c, 0) + 1);
}
```

### 2. Two Sum
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

### 3. Anagram Detection
```java
// Method 1: Sort
String key = Arrays.sort(s.toCharArray());

// Method 2: Frequency
Map<Character, Integer> freq = new HashMap<>();
// Count s, decrement t, check all 0
```

### 4. Sliding Window
```java
Map<Character, Integer> window = new HashMap<>();
int left = 0;

for (int right = 0; right < s.length(); right++) {
    char c = s.charAt(right);
    window.put(c, window.getOrDefault(c, 0) + 1);
    
    while (condition) {
        char leftChar = s.charAt(left);
        window.put(leftChar, window.get(leftChar) - 1);
        if (window.get(leftChar) == 0) {
            window.remove(leftChar);
        }
        left++;
    }
}
```

### 5. Prefix Sum
```java
Map<Integer, Integer> map = new HashMap<>();
map.put(0, 1);
int sum = 0;

for (int num : nums) {
    sum += num;
    count += map.getOrDefault(sum - k, 0);
    map.put(sum, map.getOrDefault(sum, 0) + 1);
}
```

---

## Time Complexity

| Data Structure | Operation | Average | Worst |
|----------------|-----------|---------|-------|
| **HashMap** | put/get/remove | O(1) | O(n) |
| **HashMap** | containsValue | O(n) | O(n) |
| **HashSet** | add/remove/contains | O(1) | O(n) |
| **TreeMap** | put/get/remove | O(log n) | O(log n) |
| **TreeSet** | add/remove/contains | O(log n) | O(log n) |
| **LinkedHashMap** | put/get/remove | O(1) | O(n) |
| **LinkedHashSet** | add/remove/contains | O(1) | O(n) |

---

## Internal Details

### HashMap Structure
```
Node<K,V>[] table = new Node[capacity];

class Node<K,V> {
    int hash;
    K key;
    V value;
    Node<K,V> next;  // Chaining
}
```

### Hash Calculation
```java
int hash = key.hashCode();
int index = (capacity - 1) & hash;
```

### Load Factor
```
Default: 0.75
Threshold = capacity × loadFactor
Rehash when: size > threshold
```

### Collision Handling
- **Chaining**: Linked list at each bucket
- **Java 8+**: Convert to tree if chain > 8 nodes
- **Tree ops**: O(log n) instead of O(n)

---

## HashSet vs TreeSet vs LinkedHashSet

| Feature | HashSet | TreeSet | LinkedHashSet |
|---------|---------|---------|---------------|
| **Order** | No order | Sorted | Insertion order |
| **Null** | 1 allowed | Not allowed | 1 allowed |
| **Time** | O(1) | O(log n) | O(1) |
| **Use** | Fast lookup | Sorted data | Maintain order |

---

## Best Practices

✅ **Override hashCode() and equals() together**
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

✅ **Use immutable keys**
```java
// Good: String, Integer (immutable)
Map<String, Value> map = new HashMap<>();

// Bad: Mutable key
class MutableKey {
    int value;
    // hashCode changes if value changes!
}
```

✅ **Choose appropriate capacity**
```java
// If you know size
int expectedSize = 1000;
int capacity = (int)(expectedSize / 0.75) + 1;
Map<K, V> map = new HashMap<>(capacity);
```

✅ **Use getOrDefault()**
```java
// Instead of null check
int count = map.getOrDefault(key, 0) + 1;
```

✅ **Use computeIfAbsent() for lists**
```java
map.computeIfAbsent(key, k -> new ArrayList<>()).add(value);
```

---

## Quick Decision Guide

**Need fast lookups?** → HashMap/HashSet  
**Need sorted order?** → TreeMap/TreeSet  
**Need insertion order?** → LinkedHashMap/LinkedHashSet  
**Detect cycles?** → Floyd's algorithm  
**Find duplicates?** → HashSet or Floyd's  
**Frequency counting?** → HashMap  
**Two sum problems?** → HashMap

