# HashMap, HashSet & Cycle Detection - 50 Interview Questions

## HashMap Questions (15 Questions)

### Q1: How does HashMap work internally in Java?
**Answer**: HashMap uses an array of buckets where each bucket can store one or more entries.

**Key Components**:
```java
class HashMap<K,V> {
    Node<K,V>[] table;  // Array of buckets
    int size;           // Number of entries
    float loadFactor;   // Default 0.75
    
    static class Node<K,V> {
        final int hash;
        final K key;
        V value;
        Node<K,V> next;  // For chaining
    }
}
```

**Process**:
1. **Hash Calculation**: `hash = key.hashCode()`
2. **Index Calculation**: `index = (n-1) & hash`
3. **Storage**: Store at `table[index]`
4. **Collision**: Use chaining (linked list/tree)

---

### Q2: What is collision in HashMap and how is it handled?
**Answer**: Collision occurs when two keys hash to the same index.

**Handling Methods**:
1. **Separate Chaining** (Java's approach):
   - Store entries in linked list at each bucket
   - Java 8+: Convert to Red-Black Tree if chain > 8
   
2. **Open Addressing** (not used by Java):
   - Linear probing
   - Quadratic probing
   - Double hashing

**Java 8+ Optimization**:
```
Chain length ≤ 8: Linked List (O(n) search)
Chain length > 8: Red-Black Tree (O(log n) search)
```

---

### Q3: Explain load factor and rehashing.
**Answer**:

**Load Factor**:
```
Load Factor = Number of Entries / Capacity
Default = 0.75
```

**Rehashing Trigger**:
```
When: size > threshold
Threshold = capacity × loadFactor
Example: 16 × 0.75 = 12
```

**Rehashing Process**:
1. Create new array (2× capacity)
2. Recalculate hash for all entries
3. Move entries to new positions
4. Update table reference

**Cost**: O(n) but amortized O(1) per insertion

---

### Q4: Why should hashCode() and equals() be overridden together?
**Answer**:

**Contract**:
- If `a.equals(b)` is true → `a.hashCode() == b.hashCode()` must be true
- If hashCodes differ → objects definitely not equal

**Why Both Needed**:
1. **hashCode()**: Determines bucket location
2. **equals()**: Compares keys within bucket

**Example Problem**:
```java
class Person {
    String name;
    
    // BUG: Only override equals
    @Override
    public boolean equals(Object o) {
        return ((Person)o).name.equals(this.name);
    }
}

Person p1 = new Person("Alice");
Person p2 = new Person("Alice");

map.put(p1, 1);
map.get(p2);  // Returns null! Different hashCodes
```

**Correct Implementation**:
```java
@Override
public int hashCode() {
    return Objects.hash(name);  // Must match equals fields
}

@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Person person = (Person) o;
    return Objects.equals(name, person.name);
}
```

---

### Q5: HashMap vs Hashtable vs ConcurrentHashMap?
**Answer**:

| Feature | HashMap | Hashtable | ConcurrentHashMap |
|---------|---------|-----------|-------------------|
| **Thread-safe** | No | Yes | Yes |
| **Null key** | 1 allowed | Not allowed | Not allowed |
| **Null value** | Allowed | Not allowed | Not allowed |
| **Synchronization** | None | Method-level | Segment-level |
| **Performance** | Fast | Slow | Fast (concurrent) |
| **Introduced** | Java 1.2 | Java 1.0 (legacy) | Java 1.5 |
| **Fail-fast** | Yes | Yes | No (weakly consistent) |

**Use Cases**:
- HashMap: Single-threaded
- Hashtable: Legacy code (avoid)
- ConcurrentHashMap: Multi-threaded

---

### Q6: Time complexity of HashMap operations?
**Answer**:

| Operation | Average | Worst (Pre-Java 8) | Worst (Java 8+) |
|-----------|---------|-------------------|----------------|
| put(k,v) | O(1) | O(n) | O(log n) |
| get(k) | O(1) | O(n) | O(log n) |
| remove(k) | O(1) | O(n) | O(log n) |
| containsKey(k) | O(1) | O(n) | O(log n) |
| containsValue(v) | O(n) | O(n) | O(n) |

**Why O(log n) worst case in Java 8+?**
Long chains converted to Red-Black Trees

---

### Q7: Can HashMap contain null keys and values?
**Answer**: **Yes**

**Null Key**:
- Only ONE null key allowed
- Stored at index 0
- Special handling in hash calculation:
```java
hash = (key == null) ? 0 : key.hashCode();
```

**Null Values**:
- Multiple null values allowed
- No restriction

**Example**:
```java
HashMap<String, Integer> map = new HashMap<>();
map.put(null, 1);      // ✅ OK
map.put(null, 2);      // ✅ Updates value
map.put("a", null);    // ✅ OK
map.put("b", null);    // ✅ OK
```

---

### Q8: Difference between HashMap and TreeMap?
**Answer**:

| Feature | HashMap | TreeMap |
|---------|---------|---------|
| **Implementation** | Hash Table | Red-Black Tree |
| **Ordering** | No order | Sorted (natural/custom) |
| **Null key** | 1 allowed | Not allowed |
| **Time (put/get)** | O(1) avg | O(log n) |
| **Use case** | Fast access | Sorted keys |
| **Memory** | Less | More (tree nodes) |

**When to use TreeMap**:
- Need sorted keys
- Range queries (firstKey, lastKey, subMap)
- Order matters

---

### Q9: Explain HashMap's hash function.
**Answer**:

```java
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```

**Why XOR with right shift?**
- Spreads higher bits to lower bits
- Reduces collisions for similar hashCodes
- Critical because index uses only lower bits

**Index Calculation**:
```java
int index = (n - 1) & hash;  // n = table.length (power of 2)
```

**Example**:
```
hashCode = 1000101010101010
           XOR
           0000000000001000  (>>> 16)
           ================
hash     = 1000101010100010

index = hash & (16-1)
      = hash & 15
      = last 4 bits
```

---

### Q10: Initial capacity and performance optimization?
**Answer**:

**Default Values**:
```java
DEFAULT_INITIAL_CAPACITY = 16
DEFAULT_LOAD_FACTOR = 0.75
MAXIMUM_CAPACITY = 2^30
```

**Optimization**:
```java
// If you know expected size
int expectedSize = 1000;
int capacity = (int)(expectedSize / 0.75) + 1;  // ~1334
HashMap<K, V> map = new HashMap<>(capacity);
```

**Why?**
- Avoids multiple resizes
- Resizing is O(n) operation
- Better initial capacity = fewer resizes

**Capacity is always power of 2**:
```
Requested: 10 → Actual: 16
Requested: 20 → Actual: 32
Requested: 50 → Actual: 64
```

---

### Q11: getOrDefault() vs get() - when to use?
**Answer**:

**get()**:
```java
Integer count = map.get(key);
if (count == null) {
    count = 0;
}
count++;
map.put(key, count);
```

**getOrDefault()** (cleaner):
```java
map.put(key, map.getOrDefault(key, 0) + 1);
```

**Use Cases**:
- Frequency counting
- Default values
- Avoiding null checks

**Other Safe Methods**:
```java
// putIfAbsent
map.putIfAbsent(key, new ArrayList<>());

// computeIfAbsent (best for complex defaults)
map.computeIfAbsent(key, k -> new ArrayList<>()).add(value);

// compute
map.compute(key, (k, v) -> v == null ? 1 : v + 1);
```

---

### Q12: computeIfAbsent() vs putIfAbsent()?
**Answer**:

**putIfAbsent()**:
```java
// Value must be pre-computed
List<String> list = new ArrayList<>();
map.putIfAbsent(key, list);  // Always creates list!
```

**computeIfAbsent()** (lazy):
```java
// Value computed only if absent
map.computeIfAbsent(key, k -> new ArrayList<>());
```

**Performance Difference**:
```java
// BAD: Always creates list
for (String word : words) {
    map.putIfAbsent(word, new ArrayList<>());
    map.get(word).add(word);
}

// GOOD: Creates only when needed
for (String word : words) {
    map.computeIfAbsent(word, k -> new ArrayList<>()).add(word);
}
```

---

### Q13: How to iterate over HashMap efficiently?
**Answer**:

**Best: entrySet()** (one lookup)
```java
for (Map.Entry<K, V> entry : map.entrySet()) {
    K key = entry.getKey();
    V value = entry.getValue();
}
```

**Slower: keySet()** (two lookups)
```java
for (K key : map.keySet()) {
    V value = map.get(key);  // Extra lookup!
}
```

**Values only: values()**
```java
for (V value : map.values()) {
    // Process value
}
```

**Java 8+ forEach**:
```java
map.forEach((key, value) -> {
    // Process
});
```

**Time Complexity**: O(n + capacity)
Must visit all buckets, even empty ones

---

### Q14: Thread-safe alternatives to HashMap?
**Answer**:

**1. Collections.synchronizedMap()**
```java
Map<K, V> syncMap = Collections.synchronizedMap(new HashMap<>());
```
- Wraps HashMap
- Synchronizes every method
- Slow (locks entire map)

**2. ConcurrentHashMap** (preferred)
```java
ConcurrentHashMap<K, V> map = new ConcurrentHashMap<>();
```
- Segment-level locking
- Better concurrency
- Null not allowed

**3. Hashtable** (legacy)
```java
Hashtable<K, V> table = new Hashtable<>();
```
- Avoid in new code
- Method-level synchronization

**Performance Comparison**:
```
Single-thread:  HashMap > ConcurrentHashMap > Hashtable
Multi-thread:   ConcurrentHashMap >> synchronizedMap > Hashtable
```

---

### Q15: Common HashMap pitfalls?
**Answer**:

**1. Mutable Keys**
```java
class BadKey {
    int value;  // Mutable!
    
    @Override
    public int hashCode() {
        return value;  // Changes if value changes
    }
}

BadKey key = new BadKey(5);
map.put(key, "data");
key.value = 10;  // Now can't find "data"!
```

**2. Not Overriding hashCode()/equals()**
```java
class Person {
    String name;
    // Missing hashCode() and equals()
}
// Two Person("Alice") won't be equal in map
```

**3. containsValue() is O(n)**
```java
// BAD: O(n)
if (map.containsValue(target)) { ... }

// GOOD: Use reverse map if frequent
Map<V, K> reverseMap = new HashMap<>();
```

**4. Concurrent Modification**
```java
for (String key : map.keySet()) {
    map.remove(key);  // ConcurrentModificationException!
}

// GOOD: Use iterator
Iterator<String> it = map.keySet().iterator();
while (it.hasNext()) {
    it.next();
    it.remove();  // Safe
}
```

---

## HashSet Questions (10 Questions)

### Q16: How is HashSet implemented internally?
**Answer**: HashSet is backed by HashMap!

```java
public class HashSet<E> {
    private HashMap<E, Object> map;
    private static final Object PRESENT = new Object();
    
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
- Elements are keys in HashMap
- Dummy object (PRESENT) as value
- All HashMap properties apply

---

### Q17: HashSet vs TreeSet vs LinkedHashSet?
**Answer**:

| Feature | HashSet | TreeSet | LinkedHashSet |
|---------|---------|---------|---------------|
| **Implementation** | HashMap | Red-Black Tree | LinkedHashMap |
| **Ordering** | No order | Sorted | Insertion order |
| **Null** | 1 allowed | Not allowed | 1 allowed |
| **Time (add/remove)** | O(1) | O(log n) | O(1) |
| **Memory** | Less | More | More (extra links) |
| **Use case** | Fast lookup | Sorted set | Maintain order |

**Examples**:
```java
// HashSet: No order
HashSet<String> set = new HashSet<>();
set.add("C"); set.add("A"); set.add("B");
// Output: [C, A, B] or any order

// TreeSet: Sorted
TreeSet<String> set = new TreeSet<>();
set.add("C"); set.add("A"); set.add("B");
// Output: [A, B, C]

// LinkedHashSet: Insertion order
LinkedHashSet<String> set = new LinkedHashSet<>();
set.add("C"); set.add("A"); set.add("B");
// Output: [C, A, B]
```

---

### Q18: Time complexity of HashSet operations?
**Answer**:

| Operation | Average | Worst (Java 8+) |
|-----------|---------|----------------|
| add(e) | O(1) | O(log n) |
| remove(e) | O(1) | O(log n) |
| contains(e) | O(1) | O(log n) |
| size() | O(1) | O(1) |
| isEmpty() | O(1) | O(1) |

**Set Operations**:
| Operation | Time |
|-----------|------|
| union (addAll) | O(m) |
| intersection (retainAll) | O(n+m) |
| difference (removeAll) | O(n+m) |
| containsAll | O(m) |

---

### Q19: Remove duplicates from array using HashSet?
**Answer**:

**Method 1: Convert to Set**
```java
int[] nums = {1, 2, 2, 3, 4, 4, 5};

// Convert to HashSet
HashSet<Integer> set = new HashSet<>();
for (int num : nums) {
    set.add(num);
}

// Or using Stream
Set<Integer> set = Arrays.stream(nums)
                         .boxed()
                         .collect(Collectors.toSet());
```

**Method 2: In-place (if order doesn't matter)**
```java
int[] removeDuplicates(int[] nums) {
    HashSet<Integer> seen = new HashSet<>();
    int index = 0;
    
    for (int num : nums) {
        if (seen.add(num)) {
            nums[index++] = num;
        }
    }
    
    return Arrays.copyOf(nums, index);
}
```

**Time**: O(n)  
**Space**: O(n) for set

---

### Q20: Find common elements in two arrays?
**Answer**:

**Approach 1: HashSet Intersection**
```java
int[] findCommon(int[] arr1, int[] arr2) {
    HashSet<Integer> set1 = new HashSet<>();
    for (int num : arr1) {
        set1.add(num);
    }
    
    HashSet<Integer> result = new HashSet<>();
    for (int num : arr2) {
        if (set1.contains(num)) {
            result.add(num);
        }
    }
    
    return result.stream().mapToInt(i -> i).toArray();
}
```

**Approach 2: retainAll()**
```java
Set<Integer> set1 = new HashSet<>(Arrays.asList(arr1));
Set<Integer> set2 = new HashSet<>(Arrays.asList(arr2));
set1.retainAll(set2);  // Intersection
```

**Time**: O(n + m)  
**Space**: O(n)

---

### Q21: Check if string has all unique characters?
**Answer**:

**Using HashSet**:
```java
boolean hasUniqueChars(String s) {
    HashSet<Character> seen = new HashSet<>();
    
    for (char c : s.toCharArray()) {
        if (!seen.add(c)) {  // add() returns false if duplicate
            return false;
        }
    }
    
    return true;
}
```

**Optimized (ASCII)**:
```java
boolean hasUniqueChars(String s) {
    if (s.length() > 128) return false;  // Pigeonhole principle
    
    boolean[] chars = new boolean[128];
    for (char c : s.toCharArray()) {
        if (chars[c]) return false;
        chars[c] = true;
    }
    
    return true;
}
```

**Time**: O(n)  
**Space**: O(min(n, charset))

---

### Q22: First non-repeating character using LinkedHashSet?
**Answer**:

**Why LinkedHashSet?** Maintains insertion order

```java
char firstNonRepeating(String s) {
    LinkedHashMap<Character, Integer> freq = new LinkedHashMap<>();
    
    // Count frequencies
    for (char c : s.toCharArray()) {
        freq.put(c, freq.getOrDefault(c, 0) + 1);
    }
    
    // Find first with count 1
    for (Map.Entry<Character, Integer> entry : freq.entrySet()) {
        if (entry.getValue() == 1) {
            return entry.getKey();
        }
    }
    
    return '\0';  // No unique character
}
```

**Example**:
```
Input: "leetcode"
Frequencies: {l:1, e:3, t:1, c:1, o:1, d:1}
First with count 1: 'l'
```

**Time**: O(n)  
**Space**: O(k) where k = unique chars

---

### Q23: Union of multiple sets?
**Answer**:

**Approach 1: addAll()**
```java
Set<Integer> union(Set<Integer>... sets) {
    Set<Integer> result = new HashSet<>();
    
    for (Set<Integer> set : sets) {
        result.addAll(set);
    }
    
    return result;
}
```

**Approach 2: Stream (Java 8+)**
```java
Set<Integer> union(Set<Integer>... sets) {
    return Arrays.stream(sets)
                 .flatMap(Set::stream)
                 .collect(Collectors.toSet());
}
```

**Time**: O(n₁ + n₂ + ... + nₖ)  
**Space**: O(total unique elements)

---

### Q24: Subset check using HashSet?
**Answer**:

```java
boolean isSubset(Set<Integer> A, Set<Integer> B) {
    // Check if A ⊆ B (A is subset of B)
    return B.containsAll(A);
}
```

**Example**:
```java
Set<Integer> A = new HashSet<>(Arrays.asList(1, 2));
Set<Integer> B = new HashSet<>(Arrays.asList(1, 2, 3, 4));

boolean result = isSubset(A, B);  // true
```

**Time**: O(|A|)  
**Space**: O(1)

**Symmetric Difference** (bonus):
```java
Set<Integer> symmetricDiff(Set<Integer> A, Set<Integer> B) {
    Set<Integer> result = new HashSet<>(A);
    result.addAll(B);  // Union
    
    Set<Integer> intersection = new HashSet<>(A);
    intersection.retainAll(B);
    
    result.removeAll(intersection);  // Union - Intersection
    return result;
}
```

---

### Q25: Count distinct elements efficiently?
**Answer**:

```java
int countDistinct(int[] arr) {
    return new HashSet<>(Arrays.asList(arr)).size();
}

// Or
int countDistinct(int[] arr) {
    HashSet<Integer> set = new HashSet<>();
    for (int num : arr) {
        set.add(num);
    }
    return set.size();
}

// Stream
long countDistinct(int[] arr) {
    return Arrays.stream(arr).distinct().count();
}
```

**Time**: O(n)  
**Space**: O(k) where k = distinct elements

**Application**: Used in "Contains Duplicate" problem

---

## Floyd's Cycle Detection (15 Questions)

### Q26: Explain Floyd's Cycle Detection Algorithm.
**Answer**: Uses two pointers moving at different speeds.

**Algorithm**:
```java
boolean hasCycle(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;       // 1 step
        fast = fast.next.next;  // 2 steps
        
        if (slow == fast) {
            return true;  // Cycle detected
        }
    }
    
    return false;
}
```

**Why It Works**:
- If no cycle: fast reaches end
- If cycle: fast catches slow (like lapping on race track)

**Analogy**: Two runners on circular track
- Slow runner: 1 lap/hour
- Fast runner: 2 laps/hour
- Fast will eventually lap slow

---

### Q27: Prove Floyd's algorithm mathematically.
**Answer**:

**Setup**:
```
Let x = distance from head to cycle start
Let y = distance from cycle start to meeting point  
Let c = cycle length
```

**When They Meet**:
- Slow traveled: x + y
- Fast traveled: x + y + nc (n complete cycles)

**Since fast is 2× slow**:
```
2(x + y) = x + y + nc
2x + 2y = x + y + nc
x + y = nc
x = nc - y
```

**Key Insight**:
Distance from head to cycle start (x) equals distance from meeting point to cycle start (nc - y)

**This is why phase 2 works**: Move both one step at a time from head and meeting point, they meet at cycle start!

---

### Q28: Find cycle start node.
**Answer**: Use two-phase approach.

```java
ListNode detectCycle(ListNode head) {
    // Phase 1: Detect cycle
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            // Phase 2: Find cycle start
            slow = head;
            while (slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;  // Cycle start
        }
    }
    
    return null;  // No cycle
}
```

**Phase 1**: Detect cycle  
**Phase 2**: Find exact start node

**Time**: O(n)  
**Space**: O(1)

---

### Q29: Calculate cycle length.
**Answer**:

```java
int getCycleLength(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    
    // Phase 1: Detect cycle
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            // Phase 2: Count nodes in cycle
            int length = 1;
            ListNode temp = slow.next;
            
            while (temp != slow) {
                length++;
                temp = temp.next;
            }
            
            return length;
        }
    }
    
    return 0;  // No cycle
}
```

**Time**: O(n)  
**Space**: O(1)

---

### Q30: Floyd's vs HashSet for cycle detection?
**Answer**:

| Aspect | Floyd's Algorithm | HashSet Approach |
|--------|-------------------|------------------|
| **Time** | O(n) | O(n) |
| **Space** | O(1) | O(n) |
| **Detect Cycle** | ✅ | ✅ |
| **Find Start** | ✅ | ✅ |
| **Cycle Length** | ✅ | ✅ |
| **Memory** | Minimal (2 pointers) | High (store all nodes) |
| **Suitable for** | Large lists | Small lists |

**HashSet Approach**:
```java
boolean hasCycle(ListNode head) {
    Set<ListNode> visited = new HashSet<>();
    
    while (head != null) {
        if (!visited.add(head)) {
            return true;  // Already visited
        }
        head = head.next;
    }
    
    return false;
}
```

**When to use Floyd's**: Always prefer for space efficiency

---

### Q31: Find duplicate number in array [1..n] using Floyd's.
**Answer**: Treat array as linked list!

**Key Insight**:
- `nums[i]` is the "next" pointer
- Values in [1, n], so valid indices
- Duplicate creates a cycle

```java
int findDuplicate(int[] nums) {
    // Phase 1: Detect cycle
    int slow = nums[0];
    int fast = nums[0];
    
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    
    // Phase 2: Find duplicate (cycle start)
    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
}
```

**Example**:
```
nums = [1, 3, 4, 2, 2]

Array as linked list:
Index: 0 -> 1 -> 3 -> 2 -> 4 -> 2 (cycle!)
                    ↑__________|

Duplicate: 2 (cycle start)
```

**Time**: O(n)  
**Space**: O(1)

**Why better than HashSet?** O(1) space vs O(n)

---

### Q32: Happy Number using cycle detection.
**Answer**:

**Problem**: Replace number with sum of squares of digits. Happy if reaches 1.

**Key Insight**: Either reaches 1 or enters a cycle

```java
boolean isHappy(int n) {
    int slow = n;
    int fast = n;
    
    do {
        slow = sumOfSquares(slow);
        fast = sumOfSquares(sumOfSquares(fast));
    } while (slow != fast);
    
    return slow == 1;
}

int sumOfSquares(int n) {
    int sum = 0;
    while (n > 0) {
        int digit = n % 10;
        sum += digit * digit;
        n /= 10;
    }
    return sum;
}
```

**Example**:
```
n = 19
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1  ✅ Happy!

n = 2
2² = 4
4² = 16
1² + 6² = 37
3² + 7² = 58
5² + 8² = 89
8² + 9² = 145
1² + 4² + 5² = 42
4² + 2² = 20
2² + 0² = 4  ❌ Cycle!
```

---

### Q33: Intersection of two linked lists.
**Answer**: Use two-pointer variation.

```java
ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    ListNode a = headA;
    ListNode b = headB;
    
    while (a != b) {
        a = (a == null) ? headB : a.next;
        b = (b == null) ? headA : b.next;
    }
    
    return a;  // Intersection or null
}
```

**Why It Works**:
```
List A: a1 -> a2 -> c1 -> c2 -> c3
List B: b1 -> b2 -> b3 -> c1 -> c2 -> c3

Pointer A path: a1 -> a2 -> c1 -> c2 -> c3 -> b1 -> b2 -> b3 -> c1
Pointer B path: b1 -> b2 -> b3 -> c1 -> c2 -> c3 -> a1 -> a2 -> c1

They meet at c1 (intersection)!
```

**Both travel**: lenA + lenB - intersection_length

**Time**: O(m + n)  
**Space**: O(1)

---

### Q34: Remove cycle from linked list.
**Answer**:

```java
void removeCycle(ListNode head) {
    // Find cycle start
    ListNode cycleStart = detectCycle(head);
    
    if (cycleStart == null) {
        return;  // No cycle
    }
    
    // Find node before cycle start
    ListNode temp = cycleStart;
    while (temp.next != cycleStart) {
        temp = temp.next;
    }
    
    // Break cycle
    temp.next = null;
}
```

**Time**: O(n)  
**Space**: O(1)

---

### Q35: Palindrome linked list using slow/fast pointers.
**Answer**:

```java
boolean isPalindrome(ListNode head) {
    if (head == null || head.next == null) {
        return true;
    }
    
    // Find middle
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse second half
    ListNode prev = null;
    while (slow != null) {
        ListNode next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    
    // Compare
    ListNode left = head;
    ListNode right = prev;
    
    while (right != null) {
        if (left.val != right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    
    return true;
}
```

**Time**: O(n)  
**Space**: O(1)

---

### Q36-Q40: Quick Fire Questions

**Q36: Can fast pointer start ahead of slow?**
**A**: Yes, but typically start together for simplicity. Still works.

**Q37: What if fast moves 3 steps instead of 2?**
**A**: Still works but might miss meeting point, requiring multiple laps. 2 is optimal.

**Q38: Why not use 3 pointers?**
**A**: 2 pointers sufficient. Adding more doesn't improve complexity.

**Q39: Time complexity of Floyd's?**
**A**: O(n). At most 2n steps before meeting. O(n) to find cycle start.

**Q40: Space advantage over HashSet?**
**A**: O(1) vs O(n). Huge benefit for large lists or memory-constrained systems.

---

## Coding Problems (10 Questions)

### Q41: Two Sum
```java
int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        
        if (map.containsKey(complement)) {
            return new int[]{map.get(complement), i};
        }
        
        map.put(nums[i], i);
    }
    
    return new int[]{-1, -1};
}
```
**Time**: O(n), **Space**: O(n)

---

### Q42: Group Anagrams
```java
List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    
    for (String str : strs) {
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        String key = new String(chars);
        
        map.computeIfAbsent(key, k -> new ArrayList<>()).add(str);
    }
    
    return new ArrayList<>(map.values());
}
```
**Time**: O(n × k log k), **Space**: O(nk)

---

### Q43: Longest Substring Without Repeating
```java
int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> map = new HashMap<>();
    int maxLen = 0, start = 0;
    
    for (int end = 0; end < s.length(); end++) {
        char c = s.charAt(end);
        
        if (map.containsKey(c)) {
            start = Math.max(start, map.get(c) + 1);
        }
        
        map.put(c, end);
        maxLen = Math.max(maxLen, end - start + 1);
    }
    
    return maxLen;
}
```
**Time**: O(n), **Space**: O(min(n, charset))

---

### Q44: Subarray Sum Equals K
```java
int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    map.put(0, 1);
    
    int sum = 0, count = 0;
    
    for (int num : nums) {
        sum += num;
        count += map.getOrDefault(sum - k, 0);
        map.put(sum, map.getOrDefault(sum, 0) + 1);
    }
    
    return count;
}
```
**Time**: O(n), **Space**: O(n)

---

### Q45: LRU Cache
```java
class LRUCache {
    class Node {
        int key, value;
        Node prev, next;
    }
    
    private Map<Integer, Node> map;
    private int capacity;
    private Node head, tail;
    
    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new HashMap<>();
        
        head = new Node();
        tail = new Node();
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        
        Node node = map.get(key);
        remove(node);
        add(node);
        
        return node.value;
    }
    
    public void put(int key, int value) {
        if (map.containsKey(key)) {
            remove(map.get(key));
        }
        
        Node node = new Node();
        node.key = key;
        node.value = value;
        
        add(node);
        map.put(key, node);
        
        if (map.size() > capacity) {
            Node lru = tail.prev;
            remove(lru);
            map.remove(lru.key);
        }
    }
    
    private void add(Node node) {
        Node next = head.next;
        head.next = node;
        node.prev = head;
        node.next = next;
        next.prev = node;
    }
    
    private void remove(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
}
```
**Time**: O(1) for get and put

---

### Q46-Q50: More Problems

**Q46: Valid Anagram**
```java
boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) return false;
    
    int[] count = new int[26];
    for (int i = 0; i < s.length(); i++) {
        count[s.charAt(i) - 'a']++;
        count[t.charAt(i) - 'a']--;
    }
    
    for (int c : count) {
        if (c != 0) return false;
    }
    
    return true;
}
```

**Q47: Contains Duplicate**
```java
boolean containsDuplicate(int[] nums) {
    return new HashSet<>(Arrays.asList(nums)).size() != nums.length;
}
```

**Q48: Isomorphic Strings**
```java
boolean isIsomorphic(String s, String t) {
    Map<Character, Character> sToT = new HashMap<>();
    Map<Character, Character> tToS = new HashMap<>();
    
    for (int i = 0; i < s.length(); i++) {
        char c1 = s.charAt(i);
        char c2 = t.charAt(i);
        
        if (sToT.containsKey(c1) && sToT.get(c1) != c2) return false;
        if (tToS.containsKey(c2) && tToS.get(c2) != c1) return false;
        
        sToT.put(c1, c2);
        tToS.put(c2, c1);
    }
    
    return true;
}
```

**Q49: Longest Consecutive Sequence**
```java
int longestConsecutive(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num : nums) set.add(num);
    
    int longest = 0;
    
    for (int num : set) {
        if (!set.contains(num - 1)) {
            int current = num;
            int streak = 1;
            
            while (set.contains(current + 1)) {
                current++;
                streak++;
            }
            
            longest = Math.max(longest, streak);
        }
    }
    
    return longest;
}
```

**Q50: Top K Frequent Elements**
```java
int[] topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> freq = new HashMap<>();
    for (int num : nums) {
        freq.put(num, freq.getOrDefault(num, 0) + 1);
    }
    
    PriorityQueue<Map.Entry<Integer, Integer>> pq = 
        new PriorityQueue<>((a, b) -> b.getValue() - a.getValue());
    pq.addAll(freq.entrySet());
    
    int[] result = new int[k];
    for (int i = 0; i < k; i++) {
        result[i] = pq.poll().getKey();
    }
    
    return result;
}
```

---

## Summary

**Key Takeaways**:
1. HashMap internals: buckets, chaining, trees
2. Override hashCode() and equals() together
3. Load factor controls resize (default 0.75)
4. Floyd's algorithm: O(n) time, O(1) space
5. Two-phase approach finds cycle start
6. Apply Floyd's to arrays for space efficiency

**Must Know**:
- ✅ HashMap vs HashSet implementation
- ✅ Collision handling and time complexity
- ✅ Floyd's cycle detection proof
- ✅ Two Sum, Group Anagrams, Longest Substring
- ✅ Subarray Sum, LRU Cache

**Practice**: Solve 50+ problems using these concepts!
