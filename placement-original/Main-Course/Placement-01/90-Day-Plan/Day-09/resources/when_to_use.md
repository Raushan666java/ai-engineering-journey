# When to Use Which Collection?

## Decision Flow Chart

```
Need key-value pairs?
├── YES → Map
│   ├── Need ordering?
│   │   ├── NO → HashMap ✓
│   │   ├── Insertion/Access order → LinkedHashMap ✓
│   │   └── Sorted keys → TreeMap ✓
│   └── Thread-safe? → ConcurrentHashMap
│
└── NO → Collection
    ├── Need unique elements?
    │   ├── YES → Set
    │   │   ├── No ordering → HashSet ✓
    │   │   ├── Insertion order → LinkedHashSet ✓
    │   │   └── Sorted → TreeSet ✓
    │   │
    │   └── NO → List or Queue
    │       ├── Random access? → ArrayList ✓
    │       ├── Frequent insertions/deletions? → LinkedList ✓
    │       ├── Priority-based? → PriorityQueue ✓
    │       └── Stack/Deque operations? → ArrayDeque ✓
```

---

## List: ArrayList vs LinkedList

### Use ArrayList When:
✓ Random access to elements (get by index)  
✓ Read-heavy operations  
✓ Iterating through all elements  
✓ Appending to end frequently  
✓ Memory efficiency matters  

**Examples**:
- Storing student records for display
- Reading configuration data
- Caching frequently accessed data
- Building result lists

```java
// Good use case
List<Student> students = new ArrayList<>();
for (Student s : students) {
    System.out.println(s.getName());  // Sequential read
}
Student first = students.get(0);      // Fast random access
```

### Use LinkedList When:
✓ Frequent insertions/deletions at beginning/end  
✓ Implementing queue or deque  
✓ No need for random access  
✓ Working with large elements (less memory copying)  

**Examples**:
- Implementing undo/redo functionality
- Job queue processing
- Playlist management (add/remove songs)

```java
// Good use case
LinkedList<Task> queue = new LinkedList<>();
queue.addLast(task);     // O(1)
Task next = queue.removeFirst();  // O(1)
```

### Avoid LinkedList When:
✗ Frequent random access by index  
✗ Memory constrained (more overhead)  
✗ Cache locality matters  

---

## Set: HashSet vs LinkedHashSet vs TreeSet

### Use HashSet When:
✓ Need unique elements  
✓ No ordering required  
✓ Fast lookups (contains)  
✓ Memory efficient  

**Examples**:
- Checking for duplicates
- Membership testing
- Storing unique IDs
- Tag system

```java
// Good use case
Set<String> uniqueEmails = new HashSet<>();
uniqueEmails.add(email);  // Auto deduplicates
if (uniqueEmails.contains(email)) { ... }
```

### Use LinkedHashSet When:
✓ Need unique elements  
✓ Insertion order matters  
✓ Predictable iteration order  

**Examples**:
- Preserving user input order
- Recent searches/history
- Ordered unique results

```java
// Good use case
Set<String> recentSearches = new LinkedHashSet<>();
recentSearches.add(searchTerm);  // Maintains order
```

### Use TreeSet When:
✓ Need sorted unique elements  
✓ Range queries (subset, headSet, tailSet)  
✓ NavigableSet operations (floor, ceiling)  

**Examples**:
- Leaderboard (sorted scores)
- Time-based events
- Price ranges

```java
// Good use case
TreeSet<Integer> scores = new TreeSet<>();
scores.add(85);
scores.add(92);
Set<Integer> topScores = scores.tailSet(90);  // Scores >= 90
```

---

## Map: HashMap vs LinkedHashMap vs TreeMap

### Use HashMap When:
✓ Fast key-value lookups  
✓ No ordering needed  
✓ Most common use case  

**Examples**:
- User ID → User object
- Word frequency counting
- Caching results
- Configuration settings

```java
// Good use cases
Map<String, User> users = new HashMap<>();
users.put(userId, user);

// Frequency counter
Map<String, Integer> freq = new HashMap<>();
freq.merge(word, 1, Integer::sum);
```

### Use LinkedHashMap When:
✓ Need insertion/access order  
✓ LRU cache implementation  
✓ Predictable iteration order  

**Examples**:
- LRU cache
- Configuration with defined order
- Recent items tracking

```java
// LRU Cache
LinkedHashMap<K, V> cache = new LinkedHashMap<>(16, 0.75f, true) {
    protected boolean removeEldestEntry(Map.Entry<K, V> e) {
        return size() > MAX_SIZE;
    }
};
```

### Use TreeMap When:
✓ Need sorted keys  
✓ Range queries on keys  
✓ First/last key operations  

**Examples**:
- Time-series data (timestamp → value)
- Sorted dictionary
- Range-based queries

```java
// Good use case
TreeMap<LocalDate, Double> stockPrices = new TreeMap<>();
stockPrices.put(date, price);
// Get prices for date range
Map<LocalDate, Double> range = stockPrices.subMap(start, end);
```

---

## Queue & Deque

### Use Queue (LinkedList) When:
✓ FIFO processing  
✓ Task queue  
✓ BFS traversal  

**Examples**:
- Print job queue
- Message queue
- Level-order tree traversal

```java
// Good use case
Queue<Task> taskQueue = new LinkedList<>();
taskQueue.offer(task);
Task next = taskQueue.poll();
```

### Use PriorityQueue When:
✓ Priority-based processing  
✓ Heap operations  
✓ Top K problems  

**Examples**:
- Task scheduling (priority-based)
- Dijkstra's shortest path
- Top K frequent elements
- Merge K sorted lists

```java
// Top K elements
PriorityQueue<Integer> minHeap = new PriorityQueue<>(k);
for (int num : nums) {
    minHeap.offer(num);
    if (minHeap.size() > k) minHeap.poll();
}
```

### Use ArrayDeque When:
✓ Stack operations (LIFO)  
✓ Queue operations (FIFO)  
✓ Double-ended operations  
✓ Sliding window problems  

**Examples**:
- Undo/redo stack
- Browser history (back/forward)
- Parentheses validation
- Sliding window maximum

```java
// Stack (use instead of Stack class)
Deque<Integer> stack = new ArrayDeque<>();
stack.push(item);
int top = stack.pop();

// Sliding window
Deque<Integer> deque = new ArrayDeque<>();
```

---

## Special Use Cases

### Frequency Counting
```java
Map<String, Integer> freq = new HashMap<>();
for (String word : words) {
    freq.merge(word, 1, Integer::sum);
}
```
**Why**: HashMap for O(1) lookups, merge for clean code

### Remove Duplicates (Preserve Order)
```java
List<T> unique = new ArrayList<>(new LinkedHashSet<>(list));
```
**Why**: LinkedHashSet maintains insertion order while removing duplicates

### Top K Elements
```java
PriorityQueue<Integer> minHeap = new PriorityQueue<>(k);
```
**Why**: Heap efficiently tracks k largest/smallest elements

### LRU Cache
```java
LinkedHashMap<K, V> cache = new LinkedHashMap<>(cap, 0.75f, true) {
    protected boolean removeEldestEntry(Map.Entry<K, V> e) {
        return size() > capacity;
    }
};
```
**Why**: Access order + automatic eviction

### Sliding Window Maximum
```java
Deque<Integer> deque = new ArrayDeque<>();
```
**Why**: O(1) operations at both ends

### Group Anagrams
```java
Map<String, List<String>> groups = new HashMap<>();
```
**Why**: Sorted chars as key, list of anagrams as value

### Union/Intersection of Sets
```java
Set<T> union = new HashSet<>(set1);
union.addAll(set2);

Set<T> intersection = new HashSet<>(set1);
intersection.retainAll(set2);
```
**Why**: Set operations for mathematical operations

---

## Performance Considerations

### When Memory Matters
- **ArrayList** over LinkedList (less overhead)
- **HashSet** over LinkedHashSet
- **HashMap** over LinkedHashMap

### When Speed Matters
- **ArrayList** for random access
- **HashSet/HashMap** for lookups
- **ArrayDeque** over LinkedList

### When Order Matters
- **LinkedHashSet/LinkedHashMap** for insertion order
- **TreeSet/TreeMap** for sorted order

### When Thread-Safety Matters
- **ConcurrentHashMap** over synchronized HashMap
- **CopyOnWriteArrayList** for rare writes
- Avoid Vector and Hashtable (legacy)

---

## Anti-Patterns (What NOT to Do)

### ❌ DON'T Use LinkedList for Random Access
```java
// BAD - O(n) for each get()
LinkedList<String> list = new LinkedList<>();
for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i));  // SLOW!
}

// GOOD - Use ArrayList
ArrayList<String> list = new ArrayList<>();
```

### ❌ DON'T Use ArrayList for Frequent Insertions at Start
```java
// BAD - O(n) for each insertion
ArrayList<String> list = new ArrayList<>();
list.add(0, item);  // Shifts all elements

// GOOD - Use LinkedList or ArrayDeque
LinkedList<String> list = new LinkedList<>();
list.addFirst(item);  // O(1)
```

### ❌ DON'T Use Vector or Hashtable
```java
// BAD - Legacy, synchronized overhead
Vector<String> v = new Vector<>();
Hashtable<K, V> ht = new Hashtable<>();

// GOOD - Use modern alternatives
ArrayList<String> list = new ArrayList<>();
HashMap<K, V> map = new HashMap<>();
```

### ❌ DON'T Use Stack Class
```java
// BAD - Legacy class
Stack<Integer> stack = new Stack<>();

// GOOD - Use ArrayDeque
Deque<Integer> stack = new ArrayDeque<>();
stack.push(item);
```

### ❌ DON'T Iterate HashMap with keySet() if You Need Values
```java
// BAD - Two lookups per iteration
for (String key : map.keySet()) {
    String value = map.get(key);  // Extra lookup!
}

// GOOD - Single lookup
for (Map.Entry<String, String> entry : map.entrySet()) {
    String key = entry.getKey();
    String value = entry.getValue();
}
```

---

## Quick Decision Guide

| Requirement | Choose |
|-------------|--------|
| Fast random access | ArrayList |
| Frequent add/remove at ends | LinkedList, ArrayDeque |
| Unique elements, no order | HashSet |
| Unique elements, sorted | TreeSet |
| Unique elements, insertion order | LinkedHashSet |
| Key-value, fast lookup | HashMap |
| Key-value, sorted keys | TreeMap |
| Key-value, LRU cache | LinkedHashMap |
| FIFO queue | LinkedList, ArrayDeque |
| Priority queue | PriorityQueue |
| LIFO stack | ArrayDeque |
| Top K elements | PriorityQueue |
| Sliding window | ArrayDeque |

---

## Interview Scenarios

### Scenario: "Store unique user IDs"
**Answer**: HashSet (O(1) add/contains, no duplicates)

### Scenario: "Store scores and find top 3"
**Answer**: PriorityQueue (heap for top K)

### Scenario: "Cache with size limit, evict least recently used"
**Answer**: LinkedHashMap with access order

### Scenario: "Store employees sorted by salary"
**Answer**: TreeSet with custom comparator OR List + sort

### Scenario: "Count word frequencies in text"
**Answer**: HashMap (word → count)

### Scenario: "Browser back/forward buttons"
**Answer**: Two ArrayDeques (back stack, forward stack)

### Scenario: "Find anagrams in word list"
**Answer**: HashMap (sorted chars → list of words)

### Scenario: "Remove duplicates preserving order"
**Answer**: LinkedHashSet then convert to ArrayList
