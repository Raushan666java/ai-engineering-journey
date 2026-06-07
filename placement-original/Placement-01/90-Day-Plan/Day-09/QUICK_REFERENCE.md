# Day 9 Quick Reference Guide
## Collections, Generics & Type Erasure Cheat Sheet

---

## 📋 Collections Framework

### List Implementations
```java
// ArrayList - Fast random access O(1)
List<String> arrayList = new ArrayList<>();
arrayList.add("element");           // O(1) amortized
arrayList.get(0);                   // O(1)
arrayList.add(0, "first");          // O(n)

// LinkedList - Fast insertion at ends O(1)
LinkedList<String> linkedList = new LinkedList<>();
linkedList.addFirst("first");       // O(1)
linkedList.addLast("last");         // O(1)
linkedList.get(0);                  // O(n)

// Vector - Synchronized ArrayList
Vector<Integer> vector = new Vector<>();
```

### Set Implementations
```java
// HashSet - No order, O(1) operations
Set<String> hashSet = new HashSet<>();
hashSet.add("element");             // O(1)
hashSet.contains("element");        // O(1)

// LinkedHashSet - Insertion order preserved
Set<String> linkedHashSet = new LinkedHashSet<>();

// TreeSet - Sorted, O(log n) operations
TreeSet<Integer> treeSet = new TreeSet<>();
treeSet.first();                    // Minimum
treeSet.last();                     // Maximum
treeSet.higher(5);                  // Next higher
treeSet.lower(5);                   // Next lower
```

### Map Implementations
```java
// HashMap - No order, O(1) operations
Map<String, Integer> hashMap = new HashMap<>();
hashMap.put("key", 42);                           // O(1)
hashMap.get("key");                               // O(1)
hashMap.getOrDefault("key", 0);                   // Safe access
hashMap.putIfAbsent("key", 42);                   // Conditional put
hashMap.computeIfAbsent("key", k -> 42);          // Functional
hashMap.merge("key", 1, Integer::sum);            // Merge values

// LinkedHashMap - Insertion order
Map<String, Integer> linkedHashMap = new LinkedHashMap<>();

// TreeMap - Sorted by keys, O(log n)
TreeMap<String, Integer> treeMap = new TreeMap<>();
treeMap.firstKey();                 // Minimum key
treeMap.lastKey();                  // Maximum key
```

### Queue and Deque
```java
// PriorityQueue - Min-heap by default
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
minHeap.offer(5);                   // Add element
minHeap.peek();                     // View top (don't remove)
minHeap.poll();                     // Remove top

// ArrayDeque - Double-ended queue
Deque<String> deque = new ArrayDeque<>();
deque.addFirst("first");            // Add to front
deque.addLast("last");              // Add to back
deque.push("stack");                // Stack push
deque.pop();                        // Stack pop
deque.offer("queue");               // Queue offer
deque.poll();                       // Queue poll
```

---

## 🎯 Collections Utility Methods

```java
List<Integer> list = Arrays.asList(5, 2, 8, 1, 9);

Collections.sort(list);                    // Sort ascending
Collections.reverse(list);                 // Reverse order
Collections.shuffle(list);                 // Random shuffle
Collections.rotate(list, 2);               // Rotate right by 2
Collections.swap(list, 0, 4);              // Swap indices
Collections.min(list);                     // Minimum element
Collections.max(list);                     // Maximum element
Collections.frequency(list, 5);            // Count occurrences
Collections.binarySearch(list, 5);         // Binary search (sorted list)

// Unmodifiable collections
List<Integer> unmodifiable = Collections.unmodifiableList(list);

// Synchronized collections
List<Integer> syncList = Collections.synchronizedList(new ArrayList<>());
```

---

## 🧬 Generics Syntax

### Generic Class
```java
// Single type parameter
class Box<T> {
    private T value;
    public T getValue() { return value; }
    public void setValue(T value) { this.value = value; }
}

// Multiple type parameters
class Pair<K, V> {
    private K key;
    private V value;
}

// Usage
Box<String> stringBox = new Box<>();
Pair<String, Integer> pair = new Pair<>();
```

### Generic Method
```java
// Generic method syntax: <T> before return type
public static <T> void printArray(T[] array) {
    for (T element : array) {
        System.out.println(element);
    }
}

// Multiple type parameters
public static <K, V> Map<K, V> createMap(K[] keys, V[] values) {
    // implementation
}

// Usage
printArray(new String[]{"A", "B", "C"});
printArray(new Integer[]{1, 2, 3});
```

### Bounded Type Parameters
```java
// Upper bound - T must be Number or subclass
class NumberBox<T extends Number> {
    public double doubleValue(T value) {
        return value.doubleValue();  // Can call Number methods
    }
}

// Multiple bounds - class first, then interfaces
class Box<T extends Number & Comparable<T>> {
    // T must be Number AND Comparable
}

// Bounded method
public static <T extends Comparable<T>> T findMax(T[] array) {
    T max = array[0];
    for (T element : array) {
        if (element.compareTo(max) > 0) {
            max = element;
        }
    }
    return max;
}
```

### Wildcards

```java
// Unbounded wildcard - read-only
public void printList(List<?> list) {
    for (Object obj : list) {
        System.out.println(obj);
    }
}

// Upper bounded wildcard (Producer Extends)
// Can READ as Number, cannot add (except null)
public double sum(List<? extends Number> numbers) {
    double sum = 0.0;
    for (Number num : numbers) {
        sum += num.doubleValue();
    }
    return sum;
}

// Lower bounded wildcard (Consumer Super)
// Can ADD Integer, can only read as Object
public void addNumbers(List<? super Integer> list) {
    for (int i = 1; i <= 5; i++) {
        list.add(i);  // OK - adding Integer
    }
}

// PECS - Producer Extends, Consumer Super
public static <T> void copy(
    List<? extends T> source,    // Producer - read from
    List<? super T> dest         // Consumer - write to
) {
    for (T item : source) {
        dest.add(item);
    }
}
```

---

## 🔄 Type Erasure Quick Facts

### What Gets Erased
```java
// Before erasure
class Box<T> { T value; }
class Box<T extends Number> { T value; }

// After erasure
class Box { Object value; }      // Unbounded → Object
class Box { Number value; }      // Bounded → First bound
```

### Restrictions
```java
// ❌ Cannot instantiate type parameter
// T instance = new T();              // ERROR

// ❌ Cannot create generic array
// List<String>[] array = new List<String>[10];  // ERROR

// ✅ Workaround: Use wildcard
List<?>[] array = new List<?>[10];     // OK

// ❌ Cannot use instanceof with generics
// if (obj instanceof List<String>)    // ERROR
if (obj instanceof List)               // OK

// ❌ Cannot have static generic fields
class MyClass<T> {
    // private static T value;         // ERROR
}

// ❌ Cannot overload with different generic types
// void method(List<String> list) { }
// void method(List<Integer> list) { }  // ERROR - same erasure
```

---

## 💡 Common Patterns

### Frequency Counter
```java
Map<String, Integer> freq = new HashMap<>();
for (String word : words) {
    freq.put(word, freq.getOrDefault(word, 0) + 1);
}
```

### Remove Duplicates (Order Preserved)
```java
List<Integer> unique = new ArrayList<>(new LinkedHashSet<>(list));
```

### Top K Frequent Elements
```java
// Min-heap approach
PriorityQueue<Integer> minHeap = new PriorityQueue<>(
    (a, b) -> freq.get(a) - freq.get(b)
);

for (int num : freq.keySet()) {
    minHeap.offer(num);
    if (minHeap.size() > k) {
        minHeap.poll();
    }
}
```

### Group Anagrams
```java
Map<String, List<String>> groups = new HashMap<>();
for (String word : words) {
    char[] chars = word.toCharArray();
    Arrays.sort(chars);
    String key = new String(chars);
    groups.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
}
```

### LRU Cache
```java
class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private final int capacity;
    
    public LRUCache(int capacity) {
        super(capacity, 0.75f, true);  // accessOrder = true
        this.capacity = capacity;
    }
    
    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity;
    }
}
```

---

## 📊 Performance Cheat Sheet

| Operation | ArrayList | LinkedList | HashSet | TreeSet | HashMap | TreeMap |
|-----------|-----------|------------|---------|---------|---------|---------|
| Add       | O(1)*     | O(1)       | O(1)*   | O(log n)| O(1)*   | O(log n)|
| Get       | O(1)      | O(n)       | O(1)*   | O(log n)| O(1)*   | O(log n)|
| Remove    | O(n)      | O(1)       | O(1)*   | O(log n)| O(1)*   | O(log n)|
| Contains  | O(n)      | O(n)       | O(1)*   | O(log n)| O(1)*   | O(log n)|

*Amortized or average case

---

## 🎯 When to Use What

**ArrayList**: Random access, infrequent insertions  
**LinkedList**: Frequent insertions at ends, queue/deque  
**HashSet**: Unique elements, fast operations, no order  
**LinkedHashSet**: Unique + insertion order  
**TreeSet**: Unique + sorted order  
**HashMap**: Key-value pairs, fast lookup  
**LinkedHashMap**: HashMap + insertion order, LRU cache  
**TreeMap**: Sorted key-value pairs  
**PriorityQueue**: Priority-based processing, heap  
**ArrayDeque**: Stack, queue, or deque operations  

---

## 🔑 Interview Quick Tips

1. **Collections**: Know time complexities by heart
2. **Generics**: Understand PECS (Producer Extends, Consumer Super)
3. **Type Erasure**: Cannot create generic arrays, use List instead
4. **HashMap**: O(1) average, but can degrade to O(n) with collisions
5. **TreeMap/TreeSet**: Always O(log n), use when sorted order needed
6. **PriorityQueue**: Heap operations, not sorted array
7. **Deque**: Preferred over Stack class
8. **Wildcards**: Use for API flexibility
9. **Raw Types**: Avoid in new code
10. **computeIfAbsent**: Cleaner than if-null-then-put

---

*Keep this reference handy during coding interviews and practice!*
