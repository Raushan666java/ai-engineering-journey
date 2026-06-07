# Collections Framework Interview Questions

## 50 Most Common Interview Questions with Detailed Answers

---

## Basic Concepts (1-10)

### 1. What is the Java Collections Framework?
**Answer**: The Java Collections Framework is a unified architecture for representing and manipulating collections. It includes:
- **Interfaces**: Collection, List, Set, Map, Queue, Deque
- **Implementations**: ArrayList, HashSet, HashMap, etc.
- **Algorithms**: Utility methods in Collections class (sort, search, etc.)

**Benefits**:
- Reduces programming effort
- Increases performance
- Provides interoperability
- Reduces learning curve

---

### 2. Difference between Collection and Collections?
**Answer**:
- **Collection**: Interface (root of collection hierarchy)
  ```java
  Collection<String> c = new ArrayList<>();
  ```
- **Collections**: Utility class with static methods
  ```java
  Collections.sort(list);
  Collections.reverse(list);
  ```

---

### 3. What are the main interfaces in Collections Framework?
**Answer**:
```
Collection (interface)
├── List (ordered, allows duplicates)
├── Set (no duplicates)
└── Queue (FIFO ordering)

Map (separate, key-value pairs)
```

---

### 4. Difference between ArrayList and LinkedList?
**Answer**:

| Feature | ArrayList | LinkedList |
|---------|-----------|------------|
| Structure | Dynamic array | Doubly-linked list |
| Random access | O(1) | O(n) |
| Insert at start | O(n) | O(1) |
| Insert at end | O(1) | O(1) |
| Memory | Less overhead | More (pointers) |
| Best for | Random access | Insertions/deletions |

**Example**:
```java
// ArrayList - Fast random access
List<String> al = new ArrayList<>();
al.get(100);  // O(1)

// LinkedList - Fast insertions at ends
LinkedList<String> ll = new LinkedList<>();
ll.addFirst("item");  // O(1)
```

---

### 5. Why use ArrayList over arrays?
**Answer**:
- **Dynamic sizing**: Grows automatically
- **Built-in methods**: add(), remove(), contains()
- **Type safety**: Generics prevent ClassCastException
- **Collection framework**: Works with Collections utility methods

```java
// Array - fixed size
String[] arr = new String[10];

// ArrayList - dynamic
ArrayList<String> list = new ArrayList<>();
list.add("item");  // Auto-resize
Collections.sort(list);  // Utility methods
```

---

### 6. What is the difference between HashSet and TreeSet?
**Answer**:

| Feature | HashSet | TreeSet |
|---------|---------|---------|
| Ordering | No order | Sorted |
| Null elements | 1 allowed | Not allowed |
| Performance | O(1) | O(log n) |
| Use case | Fast lookups | Sorted data |

```java
HashSet<Integer> hs = new HashSet<>();
hs.add(50); hs.add(20); hs.add(70);
System.out.println(hs);  // [20, 50, 70] or any order

TreeSet<Integer> ts = new TreeSet<>();
ts.add(50); ts.add(20); ts.add(70);
System.out.println(ts);  // [20, 50, 70] - sorted
```

---

### 7. Difference between HashMap and Hashtable?
**Answer**:

| Feature | HashMap | Hashtable |
|---------|---------|-----------|
| Null keys | 1 allowed | Not allowed |
| Null values | Allowed | Not allowed |
| Synchronized | No | Yes (thread-safe) |
| Performance | Faster | Slower |
| Legacy | Modern (Java 1.2) | Legacy (Java 1.0) |

**Recommendation**: Use HashMap (or ConcurrentHashMap for thread-safety)

---

### 8. What is the load factor in HashMap?
**Answer**: Load factor determines when HashMap should resize.

- **Default**: 0.75
- **Meaning**: Resize when 75% full
- **Formula**: `threshold = capacity × load factor`

```java
// Capacity 16, load factor 0.75
// Resize when 12 elements added (16 × 0.75)
HashMap<String, Integer> map = new HashMap<>(16, 0.75f);
```

**Tradeoff**:
- Lower load factor: Less collisions, more memory
- Higher load factor: More collisions, less memory

---

### 9. How does HashMap work internally?
**Answer**: HashMap uses an array of buckets (linked lists/trees).

**Process**:
1. **Hash code**: `key.hashCode()`
2. **Index**: `hash & (n - 1)` where n = capacity
3. **Collision**: Store in bucket (linked list or tree)
4. **Retrieval**: Hash → bucket → iterate/search

```java
// Internal structure (simplified)
Node<K,V>[] table;

class Node<K,V> {
    int hash;
    K key;
    V value;
    Node<K,V> next;  // For collisions
}
```

**Java 8 improvement**: Buckets convert to trees when > 8 elements

---

### 10. What is the difference between fail-fast and fail-safe iterators?
**Answer**:

**Fail-fast**:
- Throws `ConcurrentModificationException` if collection modified during iteration
- Used by: ArrayList, HashMap, HashSet

```java
List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
for (String s : list) {
    list.remove(s);  // ConcurrentModificationException
}
```

**Fail-safe**:
- Works on copy, no exception
- Used by: ConcurrentHashMap, CopyOnWriteArrayList

```java
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
for (String key : map.keySet()) {
    map.remove(key);  // No exception
}
```

---

## Intermediate Concepts (11-30)

### 11. Explain Comparable vs Comparator
**Answer**:

**Comparable**: Natural ordering (inside class)
```java
class Student implements Comparable<Student> {
    int marks;
    public int compareTo(Student other) {
        return this.marks - other.marks;  // Ascending
    }
}
Collections.sort(students);  // Uses compareTo
```

**Comparator**: External ordering (separate class/lambda)
```java
Comparator<Student> byName = (s1, s2) -> s1.name.compareTo(s2.name);
Collections.sort(students, byName);
```

**When to use**:
- Comparable: Single, natural ordering
- Comparator: Multiple orderings or can't modify class

---

### 12. What is a PriorityQueue?
**Answer**: Heap-based queue where elements are ordered by priority (not FIFO).

```java
// Min heap (default)
PriorityQueue<Integer> pq = new PriorityQueue<>();
pq.offer(50);
pq.offer(20);
pq.offer(70);
System.out.println(pq.poll());  // 20 (smallest)

// Max heap
PriorityQueue<Integer> maxPq = new PriorityQueue<>(Collections.reverseOrder());
maxPq.offer(50);
maxPq.offer(20);
System.out.println(maxPq.poll());  // 50 (largest)
```

**Use cases**: Top K elements, task scheduling, Dijkstra's algorithm

---

### 13. How to make a collection thread-safe?
**Answer**:

**Option 1**: Collections.synchronizedXXX()
```java
List<String> syncList = Collections.synchronizedList(new ArrayList<>());

// Must synchronize when iterating
synchronized(syncList) {
    for (String s : syncList) { }
}
```

**Option 2**: Concurrent collections (better)
```java
ConcurrentHashMap<K, V> map = new ConcurrentHashMap<>();
CopyOnWriteArrayList<T> list = new CopyOnWriteArrayList<>();
```

---

### 14. What is LinkedHashMap and when to use it?
**Answer**: HashMap that maintains insertion or access order.

**Insertion order** (default):
```java
Map<String, Integer> map = new LinkedHashMap<>();
map.put("C", 3);
map.put("A", 1);
map.put("B", 2);
System.out.println(map);  // {C=3, A=1, B=2}
```

**Access order** (LRU cache):
```java
LinkedHashMap<K, V> lru = new LinkedHashMap<>(16, 0.75f, true) {
    protected boolean removeEldestEntry(Map.Entry<K, V> e) {
        return size() > MAX_SIZE;
    }
};
```

---

### 15. Explain the contract between equals() and hashCode()
**Answer**:

**Rules**:
1. If `a.equals(b)`, then `a.hashCode() == b.hashCode()`
2. If `a.hashCode() == b.hashCode()`, `a.equals(b)` may be false

**Why important**: HashMap/HashSet use both for storage/retrieval

```java
class Person {
    String name;
    int age;
    
    @Override
    public boolean equals(Object o) {
        Person p = (Person) o;
        return name.equals(p.name) && age == p.age;
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}
```

**If violated**: HashMap won't work correctly

---

### 16. What is WeakHashMap?
**Answer**: Map where keys are weakly referenced (garbage collected when no strong references).

```java
WeakHashMap<Key, Value> map = new WeakHashMap<>();
Key key = new Key("test");
map.put(key, value);

key = null;  // No strong reference
System.gc();  // Entry may be removed
```

**Use case**: Caching where you don't want to prevent garbage collection

---

### 17. Difference between Iterator and ListIterator?
**Answer**:

| Feature | Iterator | ListIterator |
|---------|----------|--------------|
| Direction | Forward only | Bidirectional |
| Works on | All collections | List only |
| Methods | hasNext, next, remove | hasPrevious, previous, add, set |

```java
// Iterator
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}

// ListIterator
ListIterator<String> lit = list.listIterator();
while (lit.hasNext()) {
    String s = lit.next();
    lit.set("modified");  // Can modify
}
while (lit.hasPrevious()) {  // Backward
    System.out.println(lit.previous());
}
```

---

### 18. How to remove elements while iterating?
**Answer**: Use Iterator.remove()

```java
// WRONG - ConcurrentModificationException
for (String s : list) {
    if (s.equals("remove")) {
        list.remove(s);  // Exception!
    }
}

// CORRECT - Use iterator
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    if (it.next().equals("remove")) {
        it.remove();  // Safe
    }
}

// JAVA 8 - removeIf
list.removeIf(s -> s.equals("remove"));
```

---

### 19. What is the difference between Queue and Deque?
**Answer**:

**Queue**: FIFO (First In First Out)
```java
Queue<Integer> q = new LinkedList<>();
q.offer(1);  // Add to rear
q.poll();    // Remove from front
```

**Deque**: Double-ended queue (both ends)
```java
Deque<Integer> dq = new ArrayDeque<>();
dq.offerFirst(1);   // Add to front
dq.offerLast(2);    // Add to rear
dq.pollFirst();     // Remove from front
dq.pollLast();      // Remove from rear
```

**Use case**: Queue for FIFO, Deque for stack or both-end operations

---

### 20. Why use ArrayDeque instead of Stack?
**Answer**:

**Stack** (legacy):
- Synchronized (slower)
- Extends Vector (unnecessary overhead)

**ArrayDeque** (modern):
- Not synchronized (faster)
- More memory efficient
- Implements Deque (more flexible)

```java
// OLD - Don't use
Stack<Integer> stack = new Stack<>();

// NEW - Use this
Deque<Integer> stack = new ArrayDeque<>();
stack.push(1);
stack.pop();
```

---

### 21. How to sort a HashMap by values?
**Answer**:

```java
Map<String, Integer> map = new HashMap<>();
map.put("A", 3);
map.put("B", 1);
map.put("C", 2);

// Convert to list and sort
List<Map.Entry<String, Integer>> list = new ArrayList<>(map.entrySet());
list.sort(Map.Entry.comparingByValue());

// Put in LinkedHashMap to preserve order
Map<String, Integer> sorted = new LinkedHashMap<>();
for (Map.Entry<String, Integer> entry : list) {
    sorted.put(entry.getKey(), entry.getValue());
}

System.out.println(sorted);  // {B=1, C=2, A=3}
```

---

### 22. What are the methods to iterate a Map?
**Answer**:

```java
Map<String, Integer> map = new HashMap<>();

// 1. Entry set (recommended)
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    String key = entry.getKey();
    Integer value = entry.getValue();
}

// 2. Key set
for (String key : map.keySet()) {
    Integer value = map.get(key);  // Extra lookup
}

// 3. Values only
for (Integer value : map.values()) {
    // No access to keys
}

// 4. Java 8 forEach
map.forEach((k, v) -> System.out.println(k + "=" + v));

// 5. Stream API
map.entrySet().stream()
   .filter(e -> e.getValue() > 10)
   .forEach(e -> System.out.println(e));
```

---

### 23. Explain Collections.synchronizedMap() vs ConcurrentHashMap
**Answer**:

**Collections.synchronizedMap()**:
- Locks entire map for each operation
- Slower due to coarse-grained locking
- Must manually synchronize during iteration

```java
Map<K, V> map = Collections.synchronizedMap(new HashMap<>());
synchronized(map) {
    for (K key : map.keySet()) { }  // Must synchronize
}
```

**ConcurrentHashMap**:
- Segment-level locking (fine-grained)
- Better concurrency
- Fail-safe iterators (no ConcurrentModificationException)

```java
ConcurrentHashMap<K, V> map = new ConcurrentHashMap<>();
for (K key : map.keySet()) { }  // No manual synchronization needed
```

**Recommendation**: Use ConcurrentHashMap for better performance

---

### 24. What is the difference between poll() and remove() in Queue?
**Answer**:

| Method | Empty Queue Behavior |
|--------|---------------------|
| poll() | Returns null |
| remove() | Throws NoSuchElementException |
| peek() | Returns null |
| element() | Throws NoSuchElementException |

```java
Queue<Integer> q = new LinkedList<>();

// Safe methods (return null if empty)
Integer val = q.poll();    // null if empty
Integer peek = q.peek();   // null if empty

// Exception-throwing methods
try {
    q.remove();   // NoSuchElementException if empty
    q.element();  // NoSuchElementException if empty
} catch (NoSuchElementException e) { }
```

**Recommendation**: Use poll/peek for safer code

---

### 25. How to create an unmodifiable collection?
**Answer**:

```java
List<String> list = Arrays.asList("A", "B", "C");

// Java < 9
List<String> unmod = Collections.unmodifiableList(list);

// Java 9+
List<String> immutable = List.of("A", "B", "C");
Set<String> immutableSet = Set.of("A", "B", "C");
Map<String, Integer> immutableMap = Map.of("A", 1, "B", 2);

// Throws UnsupportedOperationException
unmod.add("D");  // Error
```

**Note**: Changes to original list affect unmodifiableList

---

### 26. What is the time complexity of HashMap operations?
**Answer**:

| Operation | Average | Worst Case |
|-----------|---------|------------|
| get(key) | O(1) | O(n) |
| put(key, value) | O(1) | O(n) |
| remove(key) | O(1) | O(n) |
| containsKey(key) | O(1) | O(n) |

**Worst case**: When all keys hash to same bucket (linked list traversal)

**Java 8 optimization**: Buckets with >8 entries become trees → O(log n)

---

### 27. Difference between peek() and poll() in PriorityQueue?
**Answer**:

```java
PriorityQueue<Integer> pq = new PriorityQueue<>();
pq.offer(20);
pq.offer(10);
pq.offer(30);

System.out.println(pq.peek());  // 10 (view, doesn't remove)
System.out.println(pq.peek());  // 10 (still there)

System.out.println(pq.poll());  // 10 (remove and return)
System.out.println(pq.poll());  // 20 (next smallest)
```

**Use case**:
- peek(): View top element (check priority)
- poll(): Remove and process top element

---

### 28. How to convert ArrayList to Array and vice versa?
**Answer**:

```java
// ArrayList to Array
ArrayList<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
String[] array = list.toArray(new String[0]);

// Array to ArrayList (fixed size)
String[] arr = {"A", "B", "C"};
List<String> fixedList = Arrays.asList(arr);
fixedList.add("D");  // UnsupportedOperationException

// Array to ArrayList (mutable)
List<String> mutableList = new ArrayList<>(Arrays.asList(arr));
mutableList.add("D");  // Works
```

---

### 29. What is NavigableSet and NavigableMap?
**Answer**: Interfaces with navigation methods for sorted collections.

**NavigableSet** (TreeSet):
```java
TreeSet<Integer> set = new TreeSet<>(Arrays.asList(10, 20, 30, 40, 50));

set.lower(30);     // 20 (< 30)
set.floor(30);     // 30 (<= 30)
set.higher(30);    // 40 (> 30)
set.ceiling(30);   // 30 (>= 30)

set.headSet(30);   // [10, 20]
set.tailSet(30);   // [30, 40, 50]
set.subSet(20, 40);// [20, 30]
```

**NavigableMap** (TreeMap):
```java
TreeMap<Integer, String> map = new TreeMap<>();
map.lowerKey(30);
map.higherKey(30);
map.subMap(20, 40);
```

---

### 30. How to reverse a List?
**Answer**:

```java
List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));

// Method 1: Collections.reverse()
Collections.reverse(list);
System.out.println(list);  // [5, 4, 3, 2, 1]

// Method 2: Stream (creates new list)
List<Integer> reversed = IntStream.rangeClosed(1, list.size())
    .map(i -> list.get(list.size() - i))
    .boxed()
    .collect(Collectors.toList());
```

---

## Advanced Concepts (31-50)

### 31. Implement LRU Cache using LinkedHashMap
**Answer**:

```java
class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private final int capacity;
    
    public LRUCache(int capacity) {
        super(capacity, 0.75f, true);  // Access order
        this.capacity = capacity;
    }
    
    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity;
    }
}

// Usage
LRUCache<Integer, String> cache = new LRUCache<>(3);
cache.put(1, "One");
cache.put(2, "Two");
cache.put(3, "Three");
cache.get(1);  // Access 1 (moves to end)
cache.put(4, "Four");  // 2 evicted (least recently used)
```

---

### 32. Find top K frequent elements
**Answer**:

```java
public List<Integer> topKFrequent(int[] nums, int k) {
    // Count frequencies
    Map<Integer, Integer> freq = new HashMap<>();
    for (int num : nums) {
        freq.put(num, freq.getOrDefault(num, 0) + 1);
    }
    
    // Min heap of size k
    PriorityQueue<Map.Entry<Integer, Integer>> pq = 
        new PriorityQueue<>((a, b) -> a.getValue() - b.getValue());
    
    for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
        pq.offer(entry);
        if (pq.size() > k) {
            pq.poll();
        }
    }
    
    List<Integer> result = new ArrayList<>();
    while (!pq.isEmpty()) {
        result.add(pq.poll().getKey());
    }
    Collections.reverse(result);
    return result;
}
```

---

### 33. Group anagrams using HashMap
**Answer**:

```java
public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    
    for (String str : strs) {
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        String key = new String(chars);
        
        map.putIfAbsent(key, new ArrayList<>());
        map.get(key).add(str);
    }
    
    return new ArrayList<>(map.values());
}

// Example: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Result: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
```

---

### 34. Remove duplicates preserving order
**Answer**:

```java
// Method 1: LinkedHashSet
List<Integer> list = Arrays.asList(1, 2, 3, 2, 4, 1, 5);
List<Integer> unique = new ArrayList<>(new LinkedHashSet<>(list));
System.out.println(unique);  // [1, 2, 3, 4, 5]

// Method 2: Stream distinct()
List<Integer> uniqueStream = list.stream()
    .distinct()
    .collect(Collectors.toList());
```

---

### 35. Sliding window maximum using Deque
**Answer**:

```java
public int[] maxSlidingWindow(int[] nums, int k) {
    Deque<Integer> deque = new ArrayDeque<>();  // Stores indices
    int[] result = new int[nums.length - k + 1];
    
    for (int i = 0; i < nums.length; i++) {
        // Remove out-of-window indices
        while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
            deque.pollFirst();
        }
        
        // Remove smaller elements
        while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
            deque.pollLast();
        }
        
        deque.offerLast(i);
        
        if (i >= k - 1) {
            result[i - k + 1] = nums[deque.peekFirst()];
        }
    }
    
    return result;
}
```

---

### 36-50: Quick Fire Questions

**36. Can we store null in TreeSet?**
No. TreeSet doesn't allow null elements (throws NullPointerException).

**37. Difference between size() and capacity() in ArrayList?**
- size(): Number of elements
- capacity(): Internal array size (not a method, use reflection)

**38. What happens when HashMap is full?**
Resizes (doubles capacity) and rehashes all entries.

**39. Can HashMap have duplicate keys?**
No. Putting duplicate key updates the value.

**40. How to synchronize ArrayList?**
`List<T> syncList = Collections.synchronizedList(new ArrayList<>());`

**41. What is IdentityHashMap?**
Uses `==` instead of `equals()` for key comparison.

**42. Can we modify a list while iterating with for-each?**
No. Throws ConcurrentModificationException.

**43. What is EnumSet?**
Highly efficient set implementation for enum types.

**44. Difference between Hashtable and ConcurrentHashMap?**
ConcurrentHashMap has better concurrency (segment locking).

**45. What is CopyOnWriteArrayList?**
Thread-safe list where writes create a copy (good for read-heavy scenarios).

**46. How to convert Set to List?**
`List<T> list = new ArrayList<>(set);`

**47. What is the default capacity of ArrayList?**
10 (when using no-arg constructor).

**48. Can PriorityQueue have duplicates?**
Yes, duplicates are allowed.

**49. What is ArrayDeque backed by?**
Resizable array (circular buffer).

**50. How to create thread-safe HashMap?**
`ConcurrentHashMap<K, V> map = new ConcurrentHashMap<>();`

---

## Coding Interview Patterns

### Pattern 1: Frequency Counter
```java
Map<String, Integer> freq = new HashMap<>();
freq.merge(word, 1, Integer::sum);
```

### Pattern 2: Two Sum (HashMap)
```java
Map<Integer, Integer> map = new HashMap<>();
for (int i = 0; i < nums.length; i++) {
    if (map.containsKey(target - nums[i])) {
        return new int[] {map.get(target - nums[i]), i};
    }
    map.put(nums[i], i);
}
```

### Pattern 3: First Non-Repeating Character
```java
LinkedHashMap<Character, Integer> map = new LinkedHashMap<>();
for (char c : str.toCharArray()) {
    map.put(c, map.getOrDefault(c, 0) + 1);
}
for (Map.Entry<Character, Integer> e : map.entrySet()) {
    if (e.getValue() == 1) return e.getKey();
}
```

### Pattern 4: Valid Parentheses (Stack)
```java
Deque<Character> stack = new ArrayDeque<>();
for (char c : s.toCharArray()) {
    if (c == '(' || c == '[' || c == '{') {
        stack.push(c);
    } else {
        if (stack.isEmpty()) return false;
        char top = stack.pop();
        if ((c == ')' && top != '(') || 
            (c == ']' && top != '[') || 
            (c == '}' && top != '{')) {
            return false;
        }
    }
}
return stack.isEmpty();
```

---

**Interview Tips**:
1. Start with HashMap/HashSet for most problems
2. Use TreeMap/TreeSet when sorting is required
3. PriorityQueue for top K problems
4. LinkedHashMap for LRU cache
5. Deque for stack/sliding window
6. Know time complexities cold
