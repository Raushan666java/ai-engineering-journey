# 📦 Collections Framework - Quick Study Notes

## 🎯 Learning Strategy
- **Visual Memory**: Draw collection hierarchies
- **Performance Focus**: Remember time complexities
- **Use Cases**: Know when to use which collection

## 1. Collection Hierarchy

### Collection Interface Tree
```
Collection (Interface)
├── List (Interface) - Ordered, allows duplicates
│   ├── ArrayList (Class) - Dynamic array
│   ├── LinkedList (Class) - Doubly linked list
│   └── Vector (Class) - Synchronized ArrayList
│       └── Stack (Class) - LIFO operations
├── Set (Interface) - No duplicates
│   ├── HashSet (Class) - Hash table
│   ├── LinkedHashSet (Class) - Hash table + linked list
│   └── TreeSet (Class) - Red-black tree (sorted)
└── Queue (Interface) - FIFO operations
    ├── PriorityQueue (Class) - Heap-based priority queue
    └── Deque (Interface) - Double-ended queue
        └── ArrayDeque (Class) - Resizable array

Map (Interface) - Key-value pairs
├── HashMap (Class) - Hash table
├── LinkedHashMap (Class) - Hash table + linked list
├── TreeMap (Class) - Red-black tree (sorted)
└── Hashtable (Class) - Synchronized HashMap
```

## 2. List Interface

### ArrayList
```java
import java.util.*;

public class ArrayListExample {
    public void arrayListOperations() {
        // Creation
        List<String> list = new ArrayList<>();
        ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3));
        
        // Basic operations
        list.add("Apple");           // Add element
        list.add(1, "Banana");       // Add at index
        list.set(0, "Orange");       // Replace element
        String fruit = list.get(0);  // Get element
        list.remove(0);              // Remove by index
        list.remove("Banana");       // Remove by value
        
        // Useful methods
        int size = list.size();
        boolean isEmpty = list.isEmpty();
        boolean contains = list.contains("Apple");
        int index = list.indexOf("Apple");
        
        // Iteration
        for (String item : list) {
            System.out.println(item);
        }
        
        // Using Iterator
        Iterator<String> it = list.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}
```

### LinkedList
```java
public class LinkedListExample {
    public void linkedListOperations() {
        LinkedList<String> list = new LinkedList<>();
        
        // List operations
        list.add("First");
        list.add("Second");
        
        // Deque operations (both ends)
        list.addFirst("Beginning");
        list.addLast("End");
        String first = list.removeFirst();
        String last = list.removeLast();
        
        // Queue operations (FIFO)
        list.offer("New Item");      // Add to tail
        String head = list.poll();   // Remove from head
        String peek = list.peek();   // Look at head without removing
    }
}
```

### ArrayList vs LinkedList
| Operation | ArrayList | LinkedList |
|-----------|-----------|------------|
| Get/Set by index | O(1) | O(n) |
| Add/Remove at end | O(1) | O(1) |
| Add/Remove at beginning | O(n) | O(1) |
| Add/Remove at middle | O(n) | O(n) |
| Memory overhead | Lower | Higher |

**Memory Trick**: **ArrayList = Array (fast access), LinkedList = Chain (fast insertion/deletion)**

## 3. Set Interface

### HashSet
```java
public class HashSetExample {
    public void hashSetOperations() {
        Set<String> set = new HashSet<>();
        
        // Basic operations
        set.add("Apple");
        set.add("Banana");
        set.add("Apple");        // Duplicate - won't be added
        
        boolean contains = set.contains("Apple");
        set.remove("Banana");
        
        // Set operations
        Set<String> set2 = new HashSet<>(Arrays.asList("Apple", "Cherry"));
        
        // Union
        Set<String> union = new HashSet<>(set);
        union.addAll(set2);
        
        // Intersection
        Set<String> intersection = new HashSet<>(set);
        intersection.retainAll(set2);
        
        // Difference
        Set<String> difference = new HashSet<>(set);
        difference.removeAll(set2);
    }
}
```

### TreeSet
```java
public class TreeSetExample {
    public void treeSetOperations() {
        TreeSet<Integer> set = new TreeSet<>();
        
        set.add(5);
        set.add(2);
        set.add(8);
        set.add(1);
        
        // Sorted order: [1, 2, 5, 8]
        System.out.println(set);
        
        // Navigation methods
        Integer first = set.first();      // 1
        Integer last = set.last();        // 8
        Integer lower = set.lower(5);     // 2 (largest < 5)
        Integer higher = set.higher(5);   // 8 (smallest > 5)
        Integer floor = set.floor(4);     // 2 (largest <= 4)
        Integer ceiling = set.ceiling(4); // 5 (smallest >= 4)
        
        // Subset operations
        SortedSet<Integer> headSet = set.headSet(5);    // [1, 2]
        SortedSet<Integer> tailSet = set.tailSet(5);    // [5, 8]
        SortedSet<Integer> subSet = set.subSet(2, 8);   // [2, 5]
    }
}
```

### Set Comparison
| Set Type | Ordering | Performance | Use Case |
|----------|----------|-------------|----------|
| HashSet | No order | O(1) avg | Fast lookup, no order needed |
| LinkedHashSet | Insertion order | O(1) avg | Fast lookup + insertion order |
| TreeSet | Sorted order | O(log n) | Sorted data, range queries |

## 4. Map Interface

### HashMap
```java
public class HashMapExample {
    public void hashMapOperations() {
        Map<String, Integer> map = new HashMap<>();
        
        // Basic operations
        map.put("Apple", 10);
        map.put("Banana", 20);
        map.put("Cherry", 15);
        
        Integer value = map.get("Apple");        // 10
        Integer defaultValue = map.getOrDefault("Orange", 0); // 0
        
        // Check operations
        boolean hasKey = map.containsKey("Apple");
        boolean hasValue = map.containsValue(10);
        
        // Update operations
        map.put("Apple", 25);                    // Update existing
        map.putIfAbsent("Orange", 30);          // Add if not present
        map.replace("Banana", 20, 35);          // Replace if current value matches
        
        // Java 8 Compute operations
        map.compute("Apple", (k, v) -> (v == null) ? 1 : v + 1); // Update with function
        map.computeIfAbsent("Grape", k -> 0);   // Add if absent using function
        map.computeIfPresent("Banana", (k, v) -> v * 2); // Update if present
        
        // Java 8 Merge operation
        map.merge("Apple", 1, Integer::sum);    // Add value or apply function if exists
        
        // Remove operations
        map.remove("Cherry");
        map.remove("Apple", 25);                // Remove if value matches
        
        // Iteration methods
        // 1. Key set
        for (String key : map.keySet()) {
            System.out.println(key + " = " + map.get(key));
        }
        
        // 2. Entry set (most efficient)
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " = " + entry.getValue());
        }
        
        // 3. Values
        for (Integer value : map.values()) {
            System.out.println(value);
        }
        
        // 4. Java 8 forEach
        map.forEach((key, val) -> System.out.println(key + " = " + val));
    }
}
```

### HashMap Internal Working
```
1. HashMap uses an array of buckets (default size 16)
2. Key's hashCode() determines bucket index: index = hash & (n-1)
3. Hash collisions are resolved by linked lists in each bucket
4. In Java 8+, linked lists convert to balanced trees when bucket size > 8
5. Load factor (default 0.75) determines when to resize
6. Resize doubles capacity and requires rehashing all entries
```

### TreeMap
```java
public class TreeMapExample {
    public void treeMapOperations() {
        TreeMap<String, Integer> map = new TreeMap<>();
        
        map.put("Charlie", 25);
        map.put("Alice", 30);
        map.put("Bob", 20);
        
        // Sorted by keys: {Alice=30, Bob=20, Charlie=25}
        System.out.println(map);
        
        // Navigation methods
        String firstKey = map.firstKey();           // "Alice"
        String lastKey = map.lastKey();             // "Charlie"
        String lowerKey = map.lowerKey("Bob");      // "Alice"
        String higherKey = map.higherKey("Bob");    // "Charlie"
        
        // Subset operations
        SortedMap<String, Integer> headMap = map.headMap("Charlie");
        SortedMap<String, Integer> tailMap = map.tailMap("Bob");
        SortedMap<String, Integer> subMap = map.subMap("Alice", "Charlie");
    }
}
```

## 5. Queue and Deque

### PriorityQueue
```java
public class PriorityQueueExample {
    public void priorityQueueOperations() {
        // Min heap (natural ordering)
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        // Max heap (reverse ordering)
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        
        minHeap.offer(5);
        minHeap.offer(2);
        minHeap.offer(8);
        minHeap.offer(1);
        
        while (!minHeap.isEmpty()) {
            System.out.println(minHeap.poll()); // 1, 2, 5, 8
        }
        
        // Custom comparator
        PriorityQueue<String> pq = new PriorityQueue<>((a, b) -> a.length() - b.length());
        pq.offer("Apple");
        pq.offer("Banana");
        pq.offer("Cherry");
        
        while (!pq.isEmpty()) {
            System.out.println(pq.poll()); // Apple, Cherry, Banana (by length)
        }
    }
}
```

### ArrayDeque
```java
public class ArrayDequeExample {
    public void arrayDequeOperations() {
        Deque<String> deque = new ArrayDeque<>();
        
        // Add elements
        deque.addFirst("First");
        deque.addLast("Last");
        deque.offerFirst("Beginning");
        deque.offerLast("End");
        
        // Remove elements
        String first = deque.removeFirst();
        String last = deque.removeLast();
        String polledFirst = deque.pollFirst();
        String polledLast = deque.pollLast();
        
        // Peek elements
        String peekFirst = deque.peekFirst();
        String peekLast = deque.peekLast();
        
        // Use as Stack (LIFO)
        deque.push("Item1");
        deque.push("Item2");
        String popped = deque.pop();
        
        // Use as Queue (FIFO)
        deque.offer("Item3");
        String polled = deque.poll();
    }
}
```

## 6. Collections Utility Class

### Common Operations
```java
public class CollectionsUtilityExample {
    public void collectionsOperations() {
        List<Integer> list = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5, 9));
        
        // Sorting
        Collections.sort(list);                    // Natural order
        Collections.sort(list, Collections.reverseOrder()); // Reverse order
        Collections.sort(list, (a, b) -> a - b);   // Custom comparator
        
        // Searching (list must be sorted)
        int index = Collections.binarySearch(list, 4);
        
        // Min/Max
        Integer min = Collections.min(list);
        Integer max = Collections.max(list);
        
        // Reverse
        Collections.reverse(list);
        
        // Shuffle
        Collections.shuffle(list);
        
        // Fill
        Collections.fill(list, 0);
        
        // Copy
        List<Integer> copy = new ArrayList<>(Collections.nCopies(list.size(), 0));
        Collections.copy(copy, list);
        
        // Frequency
        int frequency = Collections.frequency(list, 1);
        
        // Synchronized collections
        List<Integer> syncList = Collections.synchronizedList(new ArrayList<>());
        Set<Integer> syncSet = Collections.synchronizedSet(new HashSet<>());
        Map<String, Integer> syncMap = Collections.synchronizedMap(new HashMap<>());
        
        // Unmodifiable collections
        List<Integer> unmodifiableList = Collections.unmodifiableList(list);
        Set<Integer> unmodifiableSet = Collections.unmodifiableSet(new HashSet<>(list));
    }
}
```

## 7. Java 8+ Collection Features

### Stream API with Collections
```java
public class StreamWithCollections {
    public void demonstrateStreams() {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Dave");
        
        // Filter
        List<String> longNames = names.stream()
                .filter(name -> name.length() > 4)
                .collect(Collectors.toList()); // [Alice, Charlie]
        
        // Map
        List<Integer> nameLengths = names.stream()
                .map(String::length)
                .collect(Collectors.toList()); // [5, 3, 7, 4]
        
        // Sorting
        List<String> sortedNames = names.stream()
                .sorted()
                .collect(Collectors.toList()); // [Alice, Bob, Charlie, Dave]
        
        // Custom sorting
        List<String> customSorted = names.stream()
                .sorted(Comparator.comparing(String::length))
                .collect(Collectors.toList()); // [Bob, Dave, Alice, Charlie]
        
        // Collectors
        Map<Integer, List<String>> groupedByLength = names.stream()
                .collect(Collectors.groupingBy(String::length));
        
        // Joining
        String joined = names.stream()
                .collect(Collectors.joining(", ")); // "Alice, Bob, Charlie, Dave"
    }
}

### Collection Factory Methods (Java 9+)
```java
// Immutable collections with factory methods
List<String> list = List.of("one", "two", "three");
Set<Integer> set = Set.of(1, 2, 3);
Map<String, Integer> map = Map.of(
    "one", 1,
    "two", 2,
    "three", 3
);

// For larger maps
Map<String, Integer> largeMap = Map.ofEntries(
    Map.entry("one", 1),
    Map.entry("two", 2),
    Map.entry("three", 3),
    Map.entry("four", 4)
);
```

## 🧠 Quick Learning Techniques

### 1. Memory Aids
- **List**: "Ordered List of Items" (allows duplicates, indexed)
- **Set**: "Unique Set of Items" (no duplicates)
- **Map**: "Key-Value Mapping" (dictionary-like)
- **Queue**: "First In, First Out" (FIFO)
- **Stack**: "Last In, First Out" (LIFO)

### 2. Performance Cheat Sheet
| Collection | Add | Remove | Get | Contains | Notes |
|------------|-----|--------|-----|----------|-------|
| ArrayList | O(1)* | O(n) | O(1) | O(n) | *O(n) if resize needed |
| LinkedList | O(1) | O(1)** | O(n) | O(n) | **if you have reference |
| HashSet | O(1) | O(1) | N/A | O(1) | Average case |
| TreeSet | O(log n) | O(log n) | N/A | O(log n) | Sorted |
| HashMap | O(1) | O(1) | O(1) | O(1) | Average case |
| TreeMap | O(log n) | O(log n) | O(log n) | O(log n) | Sorted |

### 3. Decision Tree
```
Need indexed access? → ArrayList
Need frequent insertion/deletion at beginning? → LinkedList
Need unique elements? → HashSet/TreeSet
Need sorted unique elements? → TreeSet
Need key-value pairs? → HashMap/TreeMap
Need sorted key-value pairs? → TreeMap
Need FIFO operations? → Queue/ArrayDeque
Need priority-based processing? → PriorityQueue
```

## 📝 Practice Problems (30 minutes daily)

### Easy Level
1. Remove duplicates from ArrayList using HashSet
2. Find intersection of two Lists
3. Sort a List of custom objects
4. Count frequency of elements in a List
5. Implement LRU cache using LinkedHashMap

### Medium Level
1. Group anagrams using HashMap
2. Find top K frequent elements using PriorityQueue
3. Implement a simple cache with expiration
4. Merge K sorted lists using PriorityQueue
5. Design a data structure for range sum queries

### Code Templates
```java
// List processing template
List<DataType> list = new ArrayList<>();
for (DataType item : inputData) {
    if (condition) {
        list.add(item);
    }
}

// Map counting template
Map<DataType, Integer> countMap = new HashMap<>();
for (DataType item : data) {
    countMap.put(item, countMap.getOrDefault(item, 0) + 1);
}

// Set operations template
Set<DataType> set1 = new HashSet<>(collection1);
Set<DataType> set2 = new HashSet<>(collection2);
set1.retainAll(set2); // Intersection
set1.addAll(set2);    // Union
set1.removeAll(set2); // Difference

// Priority queue template
PriorityQueue<DataType> pq = new PriorityQueue<>((a, b) -> {
    // Custom comparison logic
    return a.compareTo(b);
});
```

## 🎯 Daily Review Checklist
- [ ] Know when to use each collection type
- [ ] Remember time complexities for common operations
- [ ] Can implement basic algorithms using collections
- [ ] Understand iteration methods and their differences
- [ ] Know Collections utility methods
- [ ] Can solve collection-based interview problems

## ⚡ Speed Learning Tips
1. **Draw Hierarchies**: Visualize collection relationships
2. **Performance Cards**: Create flashcards for time complexities
3. **Use Case Scenarios**: Practice choosing right collection for problems
4. **Code Templates**: Memorize common patterns
5. **API Practice**: Use IDE auto-completion to learn methods

## 🔗 Next Topic Preview
**Generics & Type Safety**: Generic classes, wildcards, type erasure