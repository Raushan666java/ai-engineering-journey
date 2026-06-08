# DAY 14: COLLECTIONS & GENERICS - QUICK REFERENCE

## 📋 Lists Quick Reference

### ArrayList - Fast Access
```java
List<String> list = new ArrayList<>();
list.add("item1");              // O(1) amortized
list.add(0, "first");           // O(n)
list.get(0);                    // O(1)
list.remove(0);                 // O(n)
list.contains("item1");         // O(n)
list.size();                    // O(1)

// Iteration
for (String item : list) { }
list.forEach(System.out::println);
list.iterator();
```

### LinkedList - Frequent Head/Tail Operations
```java
List<String> list = new LinkedList<>();
list.add("item");               // O(1) at tail
list.addFirst("first");         // O(1)
list.addLast("last");           // O(1)
list.getFirst();                // O(1)
list.getLast();                 // O(1)
list.removeFirst();             // O(1)
list.removeLast();              // O(1)

// Use as Queue
Queue<String> queue = new LinkedList<>();
queue.offer("item");
queue.poll();
queue.peek();
```

### Collections Utility
```java
Collections.sort(list);         // Sort
Collections.reverse(list);      // Reverse
Collections.shuffle(list);      // Random order
Collections.shuffle(list, new Random(seed)); // Reproducible

int index = Collections.binarySearch(list, "item"); // Must be sorted
Collections.max(list);
Collections.min(list);
Collections.frequency(list, "item");

// Thread-safe wrappers
Collections.synchronizedList(list);
Collections.unmodifiableList(list);
```

---

## 📦 Sets Quick Reference

### HashSet - Fast Lookups, No Order
```java
Set<String> set = new HashSet<>();
set.add("item1");               // O(1)
set.contains("item1");          // O(1)
set.remove("item1");            // O(1)
set.size();                      // O(1)

// Set operations
set.addAll(other);              // Union
set.retainAll(other);           // Intersection
set.removeAll(other);           // Difference
```

### TreeSet - Sorted Unique Values
```java
Set<String> set = new TreeSet<>();  // Natural order
Set<String> set = new TreeSet<>(new ReverseComparator()); // Custom

set.add("zebra");               // O(log n)
set.first();                    // Smallest
set.last();                     // Largest
set.headSet("m");               // All < "m"
set.tailSet("m");               // All >= "m"
set.subSet("a", "z");           // Range
set.floor("value");             // Largest <= value
set.ceiling("value");           // Smallest >= value
```

### LinkedHashSet - Insertion Order
```java
Set<String> set = new LinkedHashSet<>();
set.add("first");
set.add("second");
set.add("third");

// Iterates in insertion order
for (String item : set) { }
```

### EnumSet - For Enums Only
```java
enum Color { RED, GREEN, BLUE }

Set<Color> colors = EnumSet.of(Color.RED, Color.GREEN);
Set<Color> all = EnumSet.allOf(Color.class);
Set<Color> none = EnumSet.noneOf(Color.class);
Set<Color> range = EnumSet.range(Color.RED, Color.GREEN);

colors.add(Color.BLUE);
colors.contains(Color.RED);
```

---

## 🗂️ Maps Quick Reference

### HashMap - Fast Key-Value Lookup
```java
Map<String, Integer> map = new HashMap<>();
map.put("key", 1);              // O(1)
map.get("key");                 // O(1)
map.remove("key");              // O(1)
map.containsKey("key");         // O(1)
map.containsValue(1);           // O(n)

// Useful methods
map.getOrDefault("key", 0);
map.putIfAbsent("key", 1);
map.replace("key", 2);
map.size();

// Iteration
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    entry.getKey();
    entry.getValue();
}

map.values();                   // Get all values
map.keySet();                   // Get all keys
```

### TreeMap - Sorted Keys
```java
Map<String, Integer> map = new TreeMap<>();  // Natural order
Map<String, Integer> map = new TreeMap<>(Collections.reverseOrder());

map.put("key", 1);              // O(log n)
map.firstKey();
map.lastKey();
map.headMap("m");               // All keys < "m"
map.tailMap("m");               // All keys >= "m"
map.subMap("a", "z");           // Range of keys
```

### LinkedHashMap - Insertion or Access Order
```java
// Insertion order (default)
Map<String, Integer> map = new LinkedHashMap<>();

// Access order (LRU cache pattern)
Map<String, Integer> lru = new LinkedHashMap<>(16, 0.75f, true) {
    protected boolean removeEldestEntry(Map.Entry eldest) {
        return size() > MAX_ENTRIES;
    }
};
```

### ConcurrentHashMap - Thread-Safe
```java
Map<String, Integer> map = new ConcurrentHashMap<>();
map.put("key", 1);
map.putIfAbsent("key", 2);      // Atomic
map.replace("key", 1, 2);       // Atomic
map.get("key");                 // No synchronization needed
```

---

## 🔷 Generics Quick Reference

### Generic Class
```java
public class Container<T> {
    private T value;
    
    public void set(T value) { this.value = value; }
    public T get() { return value; }
}

Container<String> container = new Container<>();
container.set("hello");
String value = container.get();  // No casting needed
```

### Generic Method
```java
public static <T> void print(T value) {
    System.out.println(value);
}

print("String");  // T inferred as String
print(42);        // T inferred as Integer
```

### Bounded Type Parameters
```java
// Upper bound
public static <T extends Number> double sum(List<T> list) {
    // T can be Number, Integer, Double, etc.
}

// Multiple bounds
public static <T extends Comparable<T> & Cloneable> void sort(List<T> list) {
    // T must implement both Comparable and Cloneable
}

// Lower bound
public static void addNumbers(List<? super Integer> list) {
    list.add(1);  // Can add Integer to List<Number>, List<Object>, etc.
}
```

### Wildcards
```java
// Unbounded
public static void printList(List<?> list) {
    // Can accept List<String>, List<Integer>, etc.
}

// Upper bound (covariance)
public static void readNumbers(List<? extends Number> list) {
    Number n = list.get(0);  // Safe to read
    // Cannot add (unknown subtype)
}

// Lower bound (contravariance)
public static void writeNumbers(List<? super Integer> list) {
    list.add(1);  // Safe to write Integer
    // Cannot safely read (don't know exact type)
}
```

### Generic Comparator
```java
List<String> list = new ArrayList<>();
list.sort((s1, s2) -> s1.compareTo(s2));

// Or with lambda
list.sort(String::compareTo);

// Generic comparator
class GenericComparator<T extends Comparable<T>> implements Comparator<T> {
    public int compare(T a, T b) {
        return a.compareTo(b);
    }
}
```

---

## 📊 Performance Tips

| Operation | Best Collection | Why |
|-----------|-----------------|-----|
| Random access | ArrayList | O(1) |
| Sequential access | LinkedList | Cache-friendly |
| Frequent insertions | LinkedList | O(1) at head/tail |
| Contains check | HashSet/HashMap | O(1) average |
| Sorted data | TreeSet/TreeMap | Automatic sorting |
| Unique values | Set any type | Prevents duplicates |
| Thread-safe reads | CopyOnWriteArrayList | No sync needed |
| Concurrent access | ConcurrentHashMap | Segment locking |

---

## ⚠️ Common Mistakes

1. **Using raw types** → Always use generics: `List<String>` not `List`
2. **Forgetting generics** → Leads to casting and type errors
3. **Accessing removed element** → Check size or use iterator
4. **Modifying during iteration** → Use iterator.remove() or Stream
5. **Wrong collection type** → ArrayList for random access, LinkedList for frequent inserts
6. **Inefficient comparison** → Use HashSet not ArrayList for contains()
7. **Not implementing equals/hashCode** → Collection operations fail
8. **Unbounded wildcards** → Use bounded wildcards (PECS principle)

---

## 🎯 When to Use What?

| Need | Use |
|------|-----|
| List of items | ArrayList (usually) |
| Queue | LinkedList or PriorityQueue |
| Unique items | HashSet |
| Sorted unique items | TreeSet |
| Key-value pairs | HashMap |
| Sorted key-value pairs | TreeMap |
| LRU Cache | LinkedHashMap (access-order) |
| Thread-safe reads | CopyOnWriteArrayList |
| Concurrent map | ConcurrentHashMap |
| Flexible typing | Generics with wildcards |

---

**💡 Pro Tips:**
- Always specify type parameter (avoid raw types)
- Use diamonds: `new ArrayList<>()` for type inference
- Prefer generics over Object casting
- Use PECS for wildcards (Producer Extends, Consumer Super)
