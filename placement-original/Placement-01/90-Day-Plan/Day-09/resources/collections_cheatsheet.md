# Collections Framework Cheat Sheet

## Quick Reference Guide

### Collection Hierarchy
```
Collection
├── List → ArrayList, LinkedList, Vector
├── Set → HashSet, LinkedHashSet, TreeSet
└── Queue → PriorityQueue, Deque (ArrayDeque, LinkedList)

Map (separate)
├── HashMap
├── LinkedHashMap
└── TreeMap
```

---

## List Implementations

### ArrayList
```java
List<String> list = new ArrayList<>();
list.add("item");           // O(1) amortized
list.get(0);                // O(1)
list.remove(0);             // O(n)
list.contains("item");      // O(n)
list.set(0, "new");         // O(1)
```

**Best for**: Random access, read-heavy

### LinkedList
```java
LinkedList<String> list = new LinkedList<>();
list.addFirst("first");     // O(1)
list.addLast("last");       // O(1)
list.removeFirst();         // O(1)
list.get(5);                // O(n)
```

**Best for**: Frequent insertions/deletions at ends

---

## Set Implementations

### HashSet
```java
Set<Integer> set = new HashSet<>();
set.add(10);                // O(1)
set.remove(10);             // O(1)
set.contains(10);           // O(1)
```
- **Unordered**, no duplicates
- **Allows 1 null**

### LinkedHashSet
```java
Set<String> set = new LinkedHashSet<>();
set.add("first");
set.add("second");
// Maintains insertion order
```
- **Insertion order preserved**
- **Allows 1 null**

### TreeSet
```java
TreeSet<Integer> set = new TreeSet<>();
set.add(50);
set.add(20);
set.first();                // 20
set.last();                 // 50
set.lower(50);              // 20
set.subSet(10, 60);         // [20, 50]
```
- **Sorted** (natural or custom)
- **No nulls**
- Operations: **O(log n)**

---

## Map Implementations

### HashMap
```java
Map<String, Integer> map = new HashMap<>();
map.put("key", 10);                           // O(1)
map.get("key");                               // O(1)
map.getOrDefault("key", 0);                   // Safe get
map.putIfAbsent("key", 10);                   // Add if absent
map.merge("key", 1, Integer::sum);            // Increment
map.forEach((k, v) -> System.out.println(k));
```
- **Unordered**
- **1 null key, multiple null values**

### LinkedHashMap
```java
// Insertion order
Map<String, Integer> map = new LinkedHashMap<>();

// LRU Cache (access order)
LinkedHashMap<K, V> cache = new LinkedHashMap<>(16, 0.75f, true) {
    protected boolean removeEldestEntry(Map.Entry<K, V> e) {
        return size() > MAX_SIZE;
    }
};
```

### TreeMap
```java
TreeMap<Integer, String> map = new TreeMap<>();
map.put(3, "Three");
map.firstKey();             // Smallest key
map.lastKey();              // Largest key
map.lowerKey(3);            // < 3
map.higherKey(3);           // > 3
map.subMap(1, 5);           // Keys [1, 5)
```
- **Sorted by keys**
- **No null keys**
- Operations: **O(log n)**

---

## Queue & Deque

### Queue (FIFO)
```java
Queue<Integer> queue = new LinkedList<>();
queue.offer(10);            // Add to rear
queue.poll();               // Remove from front
queue.peek();               // View front

// Safe methods (no exceptions)
offer() → add()             // Returns false vs exception
poll()  → remove()          // Returns null vs exception
peek()  → element()         // Returns null vs exception
```

### PriorityQueue
```java
// Min Heap (default)
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.offer(50);
minHeap.poll();             // Returns smallest

// Max Heap
PriorityQueue<Integer> maxHeap = 
    new PriorityQueue<>(Collections.reverseOrder());

// Custom comparator
PriorityQueue<Task> pq = new PriorityQueue<>((a, b) -> a.priority - b.priority);
```
- **Heap-based**, not FIFO
- Operations: **O(log n)**

### Deque (Double-Ended)
```java
Deque<Integer> deque = new ArrayDeque<>();

// As Stack (LIFO)
deque.push(1);              // Add to front
deque.pop();                // Remove from front

// As Queue (FIFO)
deque.offer(1);             // Add to rear
deque.poll();               // Remove from front

// Both ends
deque.offerFirst(1);        // Add to front
deque.offerLast(2);         // Add to rear
deque.pollFirst();          // Remove from front
deque.pollLast();           // Remove from rear
```
- **Use instead of Stack class**

---

## Collections Utility Methods

### Sorting
```java
Collections.sort(list);                          // Natural order
Collections.sort(list, Collections.reverseOrder());
Collections.sort(list, (a, b) -> a.length() - b.length());
```

### Searching
```java
int idx = Collections.binarySearch(sortedList, key);
// Positive: found at index
// Negative: not found, insertion point = -(idx) - 1
```

### Manipulation
```java
Collections.reverse(list);
Collections.shuffle(list);
Collections.rotate(list, distance);
Collections.swap(list, i, j);
Collections.fill(list, obj);
Collections.replaceAll(list, oldVal, newVal);
```

### Min/Max/Frequency
```java
Collections.min(collection);
Collections.max(collection);
Collections.frequency(collection, obj);
Collections.disjoint(c1, c2);   // No common elements?
```

### Wrappers
```java
// Unmodifiable (read-only view)
List<String> unmod = Collections.unmodifiableList(list);

// Synchronized (thread-safe)
List<String> sync = Collections.synchronizedList(list);

// Special collections
Set<String> single = Collections.singleton("only");
List<String> empty = Collections.emptyList();
```

---

## Comparator Methods

### Creating Comparators
```java
// Natural order
Comparator.naturalOrder()
Comparator.reverseOrder()

// By field
Comparator.comparing(Student::getName)
Comparator.comparingInt(Student::getAge)
Comparator.comparingDouble(Student::getSalary)

// Chaining
Comparator.comparing(Student::getAge)
          .thenComparing(Student::getName)

// Reverse
Comparator.comparing(Student::getAge).reversed()

// Null handling
Comparator.nullsFirst(Comparator.naturalOrder())
Comparator.nullsLast(Comparator.naturalOrder())
```

---

## Time Complexity Summary

| Operation | ArrayList | LinkedList | HashSet/HashMap | TreeSet/TreeMap | PriorityQueue |
|-----------|-----------|------------|-----------------|-----------------|---------------|
| Add | O(1)* | O(1) | O(1) | O(log n) | O(log n) |
| Get | O(1) | O(n) | - | - | - |
| Remove | O(n) | O(1)** | O(1) | O(log n) | O(log n) |
| Search | O(n) | O(n) | O(1) | O(log n) | - |
| Min/Max | - | - | - | O(1) | O(1) peek |

*Amortized, **At known position

---

## Common Patterns

### Frequency Counter
```java
Map<String, Integer> freq = new HashMap<>();
for (String word : words) {
    freq.put(word, freq.getOrDefault(word, 0) + 1);
    // OR
    freq.merge(word, 1, Integer::sum);
}
```

### Remove Duplicates (Preserve Order)
```java
List<Integer> unique = new ArrayList<>(new LinkedHashSet<>(list));
```

### Top K Elements
```java
PriorityQueue<Integer> minHeap = new PriorityQueue<>(k);
for (int num : nums) {
    minHeap.offer(num);
    if (minHeap.size() > k) {
        minHeap.poll();
    }
}
```

### LRU Cache
```java
LinkedHashMap<K, V> cache = new LinkedHashMap<>(capacity, 0.75f, true) {
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity;
    }
};
```

### Set Operations
```java
Set<Integer> union = new HashSet<>(set1);
union.addAll(set2);

Set<Integer> intersection = new HashSet<>(set1);
intersection.retainAll(set2);

Set<Integer> difference = new HashSet<>(set1);
difference.removeAll(set2);
```

---

## When to Use What?

### List
- **ArrayList**: Default choice, random access
- **LinkedList**: Frequent insertions/deletions at ends

### Set
- **HashSet**: Unique elements, no order
- **LinkedHashSet**: Unique + insertion order
- **TreeSet**: Unique + sorted

### Map
- **HashMap**: Key-value, no order
- **LinkedHashMap**: Key-value + order (LRU cache)
- **TreeMap**: Key-value + sorted keys

### Queue/Deque
- **PriorityQueue**: Heap operations, top K
- **ArrayDeque**: Stack or queue (use instead of Stack)

---

## Interview Quick Tips

1. **Default choices**: ArrayList, HashSet, HashMap
2. **Sorted**: TreeSet, TreeMap
3. **Order preserved**: LinkedHashSet, LinkedHashMap
4. **Stack**: Use `ArrayDeque`, not `Stack` class
5. **Thread-safe**: Use `ConcurrentHashMap`, not `Hashtable`
6. **Nulls**: TreeSet/TreeMap don't allow null keys
7. **Binary search**: Only on sorted lists
8. **Top K**: PriorityQueue with size limit
9. **LRU**: LinkedHashMap with access order
10. **Frequency**: HashMap with getOrDefault/merge

---

## Code Snippets

### Iterate Map
```java
// Entry set (preferred)
for (Map.Entry<K, V> entry : map.entrySet()) {
    K key = entry.getKey();
    V value = entry.getValue();
}

// Lambda
map.forEach((k, v) -> System.out.println(k + "=" + v));

// Keys only
for (K key : map.keySet()) { }

// Values only
for (V value : map.values()) { }
```

### Sort Map by Value
```java
List<Map.Entry<K, V>> list = new ArrayList<>(map.entrySet());
list.sort(Map.Entry.comparingByValue());

Map<K, V> sorted = new LinkedHashMap<>();
for (Map.Entry<K, V> e : list) {
    sorted.put(e.getKey(), e.getValue());
}
```

### Convert Array ↔ List
```java
// Array to List
String[] array = {"A", "B", "C"};
List<String> list = Arrays.asList(array);       // Fixed size
List<String> mutable = new ArrayList<>(Arrays.asList(array));

// List to Array
String[] back = list.toArray(new String[0]);
```

---

**Remember**: 
- HashSet uses HashMap internally
- TreeSet uses TreeMap internally
- LinkedList implements both List and Deque
- Always sort before binary search
- Use offer/poll/peek instead of add/remove/element for Queue
