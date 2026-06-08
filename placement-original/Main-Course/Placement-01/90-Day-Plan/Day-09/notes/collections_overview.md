# Collections Framework - Study Notes

## Table of Contents
1. [Collection Hierarchy Overview](#collection-hierarchy-overview)
2. [List Implementations](#list-implementations)
3. [Set Implementations](#set-implementations)
4. [Map Implementations](#map-implementations)
5. [Queue and Deque](#queue-and-deque)
6. [Key Differences](#key-differences)

---

## Collection Hierarchy Overview

### Collection Interface
```
Collection (interface)
├── List (interface)
│   ├── ArrayList
│   ├── LinkedList
│   └── Vector
├── Set (interface)
│   ├── HashSet
│   ├── LinkedHashSet
│   └── SortedSet (interface)
│       └── TreeSet
└── Queue (interface)
    ├── PriorityQueue
    └── Deque (interface)
        ├── ArrayDeque
        └── LinkedList
```

### Map Hierarchy (Separate)
```
Map (interface)
├── HashMap
├── LinkedHashMap
└── SortedMap (interface)
    └── TreeMap
```

---

## List Implementations

### ArrayList
**Internal Structure**: Dynamic array (resizable)

**Characteristics**:
- Random access: O(1)
- Dynamic sizing (grows 1.5x when full)
- Not synchronized (not thread-safe)
- Allows null elements
- Maintains insertion order

**When to Use**:
- Frequent random access
- Read-heavy operations
- Rarely inserting/deleting at arbitrary positions

**Time Complexities**:
```
get(index)         : O(1)
add(element)       : O(1) amortized, O(n) worst case (resize)
add(index, element): O(n) - shift elements
remove(index)      : O(n) - shift elements
contains(element)  : O(n) - linear search
```

**Example**:
```java
ArrayList<String> list = new ArrayList<>();
list.add("Apple");           // O(1)
String item = list.get(0);   // O(1)
list.remove(0);              // O(n)
```

---

### LinkedList
**Internal Structure**: Doubly-linked list

**Characteristics**:
- Sequential access: O(n)
- Implements both List and Deque
- Not synchronized
- Allows null elements
- Better for frequent insertions/deletions

**When to Use**:
- Frequent insertions/deletions at ends
- Stack or queue operations
- Sequential access patterns

**Time Complexities**:
```
get(index)         : O(n) - traverse to index
add(element)       : O(1) - add to end
add(index, element): O(n) - find position, O(1) insert
addFirst/addLast   : O(1)
removeFirst/Last   : O(1)
```

**Example**:
```java
LinkedList<String> list = new LinkedList<>();
list.addFirst("First");   // O(1)
list.addLast("Last");     // O(1)
list.get(5);              // O(n)
```

---

### ArrayList vs LinkedList

| Feature | ArrayList | LinkedList |
|---------|-----------|------------|
| Structure | Dynamic array | Doubly-linked list |
| Random Access | Fast O(1) | Slow O(n) |
| Insert at start | Slow O(n) | Fast O(1) |
| Insert at end | Fast O(1) | Fast O(1) |
| Memory | Less overhead | More (node pointers) |
| Best for | Random access | Insertions/deletions |

---

## Set Implementations

### HashSet
**Internal Structure**: HashMap (elements as keys)

**Characteristics**:
- No duplicates
- Unordered (no guaranteed iteration order)
- Allows one null element
- Not synchronized

**When to Use**:
- Unique elements
- No ordering needed
- Fast lookups

**Time Complexities**:
```
add(element)      : O(1) average, O(n) worst
remove(element)   : O(1) average
contains(element) : O(1) average
```

**Example**:
```java
HashSet<Integer> set = new HashSet<>();
set.add(10);
set.add(10);  // Ignored (duplicate)
System.out.println(set.size());  // 1
```

---

### LinkedHashSet
**Internal Structure**: HashMap + Doubly-linked list

**Characteristics**:
- No duplicates
- Insertion order preserved
- Slightly slower than HashSet
- Allows one null element

**When to Use**:
- Unique elements
- Insertion order matters
- Predictable iteration order

**Time Complexities**:
Same as HashSet but with small overhead for maintaining order

**Example**:
```java
LinkedHashSet<String> set = new LinkedHashSet<>();
set.add("First");
set.add("Second");
// Iteration order: First, Second
```

---

### TreeSet
**Internal Structure**: Red-Black tree (self-balancing BST)

**Characteristics**:
- No duplicates
- Elements sorted (natural order or custom comparator)
- Does NOT allow null elements
- Implements NavigableSet

**When to Use**:
- Unique sorted elements
- Range queries (subset, headSet, tailSet)
- NavigableSet operations (floor, ceiling, lower, higher)

**Time Complexities**:
```
add(element)      : O(log n)
remove(element)   : O(log n)
contains(element) : O(log n)
first(), last()   : O(1)
```

**Example**:
```java
TreeSet<Integer> set = new TreeSet<>();
set.add(50);
set.add(20);
set.add(70);
System.out.println(set);  // [20, 50, 70] (sorted)
System.out.println(set.first());   // 20
System.out.println(set.lower(50)); // 20
```

---

### Set Comparison

| Feature | HashSet | LinkedHashSet | TreeSet |
|---------|---------|---------------|---------|
| Ordering | No | Insertion order | Sorted |
| Null | 1 null allowed | 1 null allowed | No nulls |
| Performance | O(1) | O(1) | O(log n) |
| Memory | Low | Medium | Higher |
| Use case | Fast lookups | Ordered iteration | Sorted data |

---

## Map Implementations

### HashMap
**Internal Structure**: Array of buckets (hash table)

**Characteristics**:
- Key-value pairs
- Unordered
- One null key, multiple null values
- Not synchronized

**When to Use**:
- Fast key-based lookups
- No ordering needed
- Most common map implementation

**Time Complexities**:
```
get(key)    : O(1) average
put(key, v) : O(1) average
remove(key) : O(1) average
```

**Important Methods**:
```java
// Basic operations
put(key, value)
get(key)
remove(key)
containsKey(key)
containsValue(value)

// Advanced methods
getOrDefault(key, defaultValue)
putIfAbsent(key, value)
compute(key, (k, v) -> newValue)
merge(key, value, (oldV, newV) -> merged)
```

**Example**:
```java
HashMap<String, Integer> map = new HashMap<>();
map.put("Alice", 25);
map.put("Bob", 30);

// Frequency counter pattern
Map<String, Integer> freq = new HashMap<>();
freq.put(word, freq.getOrDefault(word, 0) + 1);

// Or using merge
freq.merge(word, 1, Integer::sum);
```

---

### LinkedHashMap
**Internal Structure**: HashMap + Doubly-linked list

**Characteristics**:
- Insertion order OR access order
- One null key, multiple null values
- Slightly slower than HashMap

**When to Use**:
- Ordered iteration
- LRU cache implementation
- Predictable iteration order

**LRU Cache Example**:
```java
LinkedHashMap<K, V> cache = new LinkedHashMap<K, V>(capacity, 0.75f, true) {
    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity;
    }
};
```

---

### TreeMap
**Internal Structure**: Red-Black tree

**Characteristics**:
- Keys sorted (natural order or custom)
- No null keys, allows null values
- Implements NavigableMap

**When to Use**:
- Sorted keys
- Range queries
- NavigableMap operations

**Time Complexities**:
```
get(key)    : O(log n)
put(key, v) : O(log n)
remove(key) : O(log n)
```

**NavigableMap Methods**:
```java
firstKey(), lastKey()
lowerKey(key), higherKey(key)
floorKey(key), ceilingKey(key)
subMap(fromKey, toKey)
headMap(toKey), tailMap(fromKey)
```

**Example**:
```java
TreeMap<Integer, String> map = new TreeMap<>();
map.put(3, "Three");
map.put(1, "One");
map.put(2, "Two");
System.out.println(map);  // {1=One, 2=Two, 3=Three}
System.out.println(map.lowerKey(3));  // 2
```

---

### Map Comparison

| Feature | HashMap | LinkedHashMap | TreeMap |
|---------|---------|---------------|---------|
| Ordering | No | Insertion/Access | Sorted by keys |
| Null keys | 1 allowed | 1 allowed | Not allowed |
| Null values | Allowed | Allowed | Allowed |
| Performance | O(1) | O(1) | O(log n) |
| Use case | Fast lookups | LRU cache | Sorted keys |

---

## Queue and Deque

### Queue (FIFO - First In First Out)

**Key Methods**:
```java
// Throws exception on failure
add(element)     // IllegalStateException if no space
remove()         // NoSuchElementException if empty
element()        // NoSuchElementException if empty

// Returns special value on failure
offer(element)   // Returns false if no space
poll()           // Returns null if empty
peek()           // Returns null if empty
```

**Preferred**: Use offer/poll/peek (safer)

---

### PriorityQueue
**Internal Structure**: Binary heap

**Characteristics**:
- Elements ordered by natural order or comparator
- Min heap by default
- No null elements
- Not thread-safe

**When to Use**:
- Top K problems
- Task scheduling
- Dijkstra's algorithm

**Time Complexities**:
```
offer(element) : O(log n)
poll()         : O(log n)
peek()         : O(1)
```

**Example**:
```java
// Min heap (default)
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.offer(50);
minHeap.offer(20);
System.out.println(minHeap.poll());  // 20

// Max heap
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
maxHeap.offer(50);
maxHeap.offer(20);
System.out.println(maxHeap.poll());  // 50
```

---

### Deque (Double-Ended Queue)

**Implementations**: ArrayDeque (preferred), LinkedList

**Operations**:
```java
// First (head) operations
addFirst(e), offerFirst(e)
removeFirst(), pollFirst()
getFirst(), peekFirst()

// Last (tail) operations
addLast(e), offerLast(e)
removeLast(), pollLast()
getLast(), peekLast()

// Stack operations (LIFO)
push(e)    // Same as addFirst
pop()      // Same as removeFirst
peek()     // Same as peekFirst
```

**When to Use**:
- Stack operations (use instead of legacy Stack class)
- Queue operations
- Sliding window problems
- Double-ended operations

**Example**:
```java
// As Stack (LIFO)
Deque<Integer> stack = new ArrayDeque<>();
stack.push(1);
stack.push(2);
System.out.println(stack.pop());  // 2

// As Queue (FIFO)
Deque<Integer> queue = new ArrayDeque<>();
queue.offer(1);
queue.offer(2);
System.out.println(queue.poll());  // 1
```

---

## Key Differences

### Collection vs Collections
- **Collection**: Interface (root of collection hierarchy)
- **Collections**: Utility class (static methods like sort, reverse, etc.)

### Comparable vs Comparator
- **Comparable**: Natural ordering (compareTo in class)
  ```java
  class Student implements Comparable<Student> {
      public int compareTo(Student other) {
          return this.marks - other.marks;
      }
  }
  ```
- **Comparator**: External ordering (separate logic)
  ```java
  Comparator<Student> byName = (s1, s2) -> s1.name.compareTo(s2.name);
  Collections.sort(students, byName);
  ```

### Iterator vs ListIterator
- **Iterator**: Forward only, works on all collections
- **ListIterator**: Bidirectional, only for Lists

### ArrayList vs Vector
- **ArrayList**: Not synchronized, faster
- **Vector**: Synchronized (thread-safe), slower, legacy

### HashMap vs Hashtable
- **HashMap**: Not synchronized, allows 1 null key, modern
- **Hashtable**: Synchronized, no nulls, legacy

---

## Memory Diagram

```
ArrayList:
[0][1][2][3][4][ ][ ][ ]
 10 20 30 40 50
Size: 5, Capacity: 8

LinkedList:
[10] <-> [20] <-> [30] <-> [40] <-> [50]
 ^                              ^
head                           tail

HashMap:
Bucket 0: [key1=val1] -> [key5=val5]
Bucket 1: null
Bucket 2: [key3=val3]
Bucket 3: [key2=val2] -> [key4=val4]
```

---

## Performance Summary

| Operation | ArrayList | LinkedList | HashSet | TreeSet | HashMap | TreeMap |
|-----------|-----------|------------|---------|---------|---------|---------|
| Access | O(1) | O(n) | - | - | O(1) | O(log n) |
| Add | O(1)* | O(1) | O(1) | O(log n) | O(1) | O(log n) |
| Remove | O(n) | O(1)** | O(1) | O(log n) | O(1) | O(log n) |
| Search | O(n) | O(n) | O(1) | O(log n) | O(1) | O(log n) |

*Amortized, worst case O(n) for resize
**At known position

---

## Interview Tips

1. **Default Choice**:
   - List: ArrayList
   - Set: HashSet
   - Map: HashMap

2. **When Ordering Matters**:
   - Insertion order: LinkedHashSet, LinkedHashMap
   - Sorted: TreeSet, TreeMap

3. **Common Patterns**:
   - Frequency counting: `HashMap + getOrDefault/merge`
   - Remove duplicates: `new HashSet<>(list)`
   - Top K problems: `PriorityQueue`
   - LRU cache: `LinkedHashMap`
   - Sliding window: `Deque`

4. **Remember**:
   - TreeSet/TreeMap: No nulls
   - HashMap: 1 null key
   - Always sort before binary search
   - Use Deque instead of Stack class
