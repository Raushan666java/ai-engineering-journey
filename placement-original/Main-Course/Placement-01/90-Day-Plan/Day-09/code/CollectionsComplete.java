/*
 * ============================================================================
 * JAVA COLLECTIONS FRAMEWORK - COMPLETE GUIDE
 * Day 9: Collections Framework Deep Dive
 * ============================================================================
 * 
 * TABLE OF CONTENTS:
 * 1. Collection Hierarchy Overview
 * 2. List Interface (ArrayList, LinkedList, Vector)
 * 3. Set Interface (HashSet, LinkedHashSet, TreeSet)
 * 4. Queue Interface (PriorityQueue, Deque, ArrayDeque)
 * 5. Map Interface (HashMap, LinkedHashMap, TreeMap, Hashtable)
 * 6. Collections Utility Class
 * 7. Comparable vs Comparator
 * 8. Iteration Techniques
 * 9. Performance Comparison
 * 10. Real-world Use Cases
 * 
 * Interview Focus:
 * - When to use which collection
 * - Time/space complexity of operations
 * - Thread-safety considerations
 * - Internal implementation details
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;

public class CollectionsComplete {

    // ========================================================================
    // SECTION 1: COLLECTION HIERARCHY OVERVIEW
    // ========================================================================
    
    /**
     * Collection Hierarchy:
     * 
     * Collection (Interface)
     * ├── List (Interface) - Ordered, allows duplicates
     * │   ├── ArrayList - Dynamic array, fast random access
     * │   ├── LinkedList - Doubly-linked list, fast insertion/deletion
     * │   └── Vector - Synchronized ArrayList
     * │       └── Stack - LIFO structure
     * │
     * ├── Set (Interface) - No duplicates
     * │   ├── HashSet - Hash table, no order guarantee
     * │   ├── LinkedHashSet - Hash table + linked list, insertion order
     * │   └── SortedSet (Interface)
     * │       └── TreeSet - Red-black tree, sorted order
     * │
     * └── Queue (Interface) - FIFO structure
     *     ├── PriorityQueue - Heap-based priority queue
     *     └── Deque (Interface) - Double-ended queue
     *         └── ArrayDeque - Resizable array implementation
     * 
     * Map (Interface) - Key-value pairs (not part of Collection)
     * ├── HashMap - Hash table, no order guarantee
     * ├── LinkedHashMap - Hash table + linked list, insertion order
     * ├── Hashtable - Synchronized HashMap (legacy)
     * └── SortedMap (Interface)
     *     └── TreeMap - Red-black tree, sorted by keys
     */

    // ========================================================================
    // SECTION 2: LIST INTERFACE IMPLEMENTATIONS
    // ========================================================================

    public static class ListExamples {
        
        // ArrayList: Best for random access, poor for frequent insertions
        public static void arrayListDemo() {
            System.out.println("=== ArrayList Demo ===");
            
            // Creation and initialization
            List<String> arrayList = new ArrayList<>();
            arrayList.add("Java");
            arrayList.add("Python");
            arrayList.add("JavaScript");
            
            // Adding at specific index: O(n) - requires shifting
            arrayList.add(1, "C++");
            System.out.println("After insertion at index 1: " + arrayList);
            
            // Random access: O(1)
            String element = arrayList.get(2);
            System.out.println("Element at index 2: " + element);
            
            // Remove by index: O(n)
            arrayList.remove(1);
            System.out.println("After removal at index 1: " + arrayList);
            
            // Remove by object: O(n)
            arrayList.remove("Python");
            
            // Contains check: O(n)
            boolean contains = arrayList.contains("Java");
            System.out.println("Contains Java: " + contains);
            
            // Size and capacity
            System.out.println("Size: " + arrayList.size());
            
            // Initialize with capacity for performance
            List<Integer> numbersWithCapacity = new ArrayList<>(100);
            
            // Bulk operations
            arrayList.addAll(Arrays.asList("Go", "Rust", "Swift"));
            System.out.println("After bulk add: " + arrayList);
            
            // Converting to array
            String[] array = arrayList.toArray(new String[0]);
            
            // Sublist view (backed by original list)
            List<String> subList = arrayList.subList(0, 2);
            System.out.println("Sublist: " + subList);
            
            System.out.println();
        }
        
        // LinkedList: Best for frequent insertions/deletions, poor for random access
        public static void linkedListDemo() {
            System.out.println("=== LinkedList Demo ===");
            
            LinkedList<String> linkedList = new LinkedList<>();
            
            // Add operations: O(1) at ends
            linkedList.add("First");
            linkedList.addFirst("New First");  // O(1)
            linkedList.addLast("Last");         // O(1)
            
            System.out.println("LinkedList: " + linkedList);
            
            // Access operations: O(n) - must traverse
            String first = linkedList.getFirst();
            String last = linkedList.getLast();
            System.out.println("First: " + first + ", Last: " + last);
            
            // Remove operations: O(1) at ends
            linkedList.removeFirst();
            linkedList.removeLast();
            System.out.println("After removing first and last: " + linkedList);
            
            // Deque operations (LinkedList implements Deque)
            linkedList.offerFirst("Offer First");  // Returns boolean
            linkedList.offerLast("Offer Last");
            System.out.println("After offer operations: " + linkedList);
            
            String polledFirst = linkedList.pollFirst();  // Returns null if empty
            System.out.println("Polled first: " + polledFirst);
            
            // Peek operations (don't remove)
            String peeked = linkedList.peekFirst();
            System.out.println("Peeked: " + peeked + ", List: " + linkedList);
            
            System.out.println();
        }
        
        // Vector: Synchronized, thread-safe (but slower)
        public static void vectorDemo() {
            System.out.println("=== Vector Demo ===");
            
            Vector<Integer> vector = new Vector<>();
            
            // All methods are synchronized
            vector.add(10);
            vector.add(20);
            vector.add(30);
            
            // Capacity grows by 100% (doubles) by default
            System.out.println("Initial capacity: 10 (default)");
            System.out.println("Size: " + vector.size());
            System.out.println("Capacity: " + vector.capacity());
            
            // Add elements to trigger growth
            for (int i = 0; i < 15; i++) {
                vector.add(i);
            }
            System.out.println("After adding 15 more: Capacity = " + vector.capacity());
            
            // Stack is a subclass of Vector
            Stack<String> stack = new Stack<>();
            stack.push("A");
            stack.push("B");
            stack.push("C");
            
            System.out.println("Top of stack: " + stack.peek());
            System.out.println("Pop: " + stack.pop());
            System.out.println("Stack after pop: " + stack);
            
            System.out.println();
        }
        
        // Performance Comparison
        public static void listPerformanceComparison() {
            System.out.println("=== List Performance Comparison ===");
            
            int size = 100000;
            
            // ArrayList: Fast add at end
            List<Integer> arrayList = new ArrayList<>();
            long start = System.nanoTime();
            for (int i = 0; i < size; i++) {
                arrayList.add(i);
            }
            long arrayListAddTime = System.nanoTime() - start;
            
            // LinkedList: Fast add at end (similar)
            List<Integer> linkedList = new LinkedList<>();
            start = System.nanoTime();
            for (int i = 0; i < size; i++) {
                linkedList.add(i);
            }
            long linkedListAddTime = System.nanoTime() - start;
            
            System.out.println("Add at end:");
            System.out.println("ArrayList: " + arrayListAddTime / 1_000_000 + " ms");
            System.out.println("LinkedList: " + linkedListAddTime / 1_000_000 + " ms");
            
            // Random access: ArrayList wins
            start = System.nanoTime();
            for (int i = 0; i < 1000; i++) {
                arrayList.get(size / 2);
            }
            long arrayListAccessTime = System.nanoTime() - start;
            
            start = System.nanoTime();
            for (int i = 0; i < 1000; i++) {
                linkedList.get(size / 2);
            }
            long linkedListAccessTime = System.nanoTime() - start;
            
            System.out.println("\nRandom access (1000 operations):");
            System.out.println("ArrayList: " + arrayListAccessTime / 1_000_000 + " ms");
            System.out.println("LinkedList: " + linkedListAccessTime / 1_000_000 + " ms");
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 3: SET INTERFACE IMPLEMENTATIONS
    // ========================================================================

    public static class SetExamples {
        
        // HashSet: Fast operations, no order guarantee
        public static void hashSetDemo() {
            System.out.println("=== HashSet Demo ===");
            
            Set<String> hashSet = new HashSet<>();
            
            // Add: O(1) average
            hashSet.add("Apple");
            hashSet.add("Banana");
            hashSet.add("Cherry");
            hashSet.add("Apple");  // Duplicate - won't be added
            
            System.out.println("HashSet (no order): " + hashSet);
            System.out.println("Size: " + hashSet.size());
            
            // Contains: O(1) average
            System.out.println("Contains Banana: " + hashSet.contains("Banana"));
            
            // Remove: O(1) average
            hashSet.remove("Banana");
            System.out.println("After removing Banana: " + hashSet);
            
            // Iteration (order not guaranteed)
            System.out.print("Iteration: ");
            for (String fruit : hashSet) {
                System.out.print(fruit + " ");
            }
            System.out.println("\n");
        }
        
        // LinkedHashSet: Maintains insertion order
        public static void linkedHashSetDemo() {
            System.out.println("=== LinkedHashSet Demo ===");
            
            Set<String> linkedHashSet = new LinkedHashSet<>();
            
            linkedHashSet.add("First");
            linkedHashSet.add("Second");
            linkedHashSet.add("Third");
            linkedHashSet.add("First");  // Duplicate
            
            // Maintains insertion order
            System.out.println("LinkedHashSet (insertion order): " + linkedHashSet);
            
            // Slightly slower than HashSet due to linked list overhead
            // Add, contains, remove: O(1) average (like HashSet)
            
            System.out.println();
        }
        
        // TreeSet: Sorted order, slower operations
        public static void treeSetDemo() {
            System.out.println("=== TreeSet Demo ===");
            
            TreeSet<Integer> treeSet = new TreeSet<>();
            
            // Add in random order
            treeSet.add(50);
            treeSet.add(20);
            treeSet.add(70);
            treeSet.add(10);
            treeSet.add(30);
            
            // Always sorted (natural ordering)
            System.out.println("TreeSet (sorted): " + treeSet);
            
            // Add, contains, remove: O(log n)
            
            // NavigableSet operations
            System.out.println("First: " + treeSet.first());
            System.out.println("Last: " + treeSet.last());
            System.out.println("Lower than 50: " + treeSet.lower(50));
            System.out.println("Higher than 20: " + treeSet.higher(20));
            System.out.println("Floor of 25: " + treeSet.floor(25));
            System.out.println("Ceiling of 25: " + treeSet.ceiling(25));
            
            // Subset operations
            SortedSet<Integer> headSet = treeSet.headSet(50);  // Elements < 50
            System.out.println("Head set (< 50): " + headSet);
            
            SortedSet<Integer> tailSet = treeSet.tailSet(30);  // Elements >= 30
            System.out.println("Tail set (>= 30): " + tailSet);
            
            SortedSet<Integer> subSet = treeSet.subSet(20, 70);  // [20, 70)
            System.out.println("Sub set [20, 70): " + subSet);
            
            // Descending order
            NavigableSet<Integer> descendingSet = treeSet.descendingSet();
            System.out.println("Descending: " + descendingSet);
            
            System.out.println();
        }
        
        // Custom objects in TreeSet with Comparator
        public static void treeSetWithComparator() {
            System.out.println("=== TreeSet with Custom Comparator ===");
            
            // Sort by length, then alphabetically
            TreeSet<String> treeSet = new TreeSet<>((s1, s2) -> {
                int lengthComp = Integer.compare(s1.length(), s2.length());
                return lengthComp != 0 ? lengthComp : s1.compareTo(s2);
            });
            
            treeSet.add("Java");
            treeSet.add("Python");
            treeSet.add("C");
            treeSet.add("JavaScript");
            treeSet.add("Go");
            
            System.out.println("Sorted by length, then alphabetically: " + treeSet);
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 4: QUEUE AND DEQUE IMPLEMENTATIONS
    // ========================================================================

    public static class QueueExamples {
        
        // PriorityQueue: Heap-based, natural ordering or custom comparator
        public static void priorityQueueDemo() {
            System.out.println("=== PriorityQueue Demo ===");
            
            // Min-heap by default (smallest element at head)
            PriorityQueue<Integer> minHeap = new PriorityQueue<>();
            
            minHeap.offer(50);
            minHeap.offer(20);
            minHeap.offer(70);
            minHeap.offer(10);
            minHeap.offer(30);
            
            System.out.println("Min-heap peek: " + minHeap.peek());  // 10
            
            // Polling removes smallest element
            System.out.print("Polling order: ");
            while (!minHeap.isEmpty()) {
                System.out.print(minHeap.poll() + " ");
            }
            System.out.println();
            
            // Max-heap using reverse comparator
            PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
            
            maxHeap.offer(50);
            maxHeap.offer(20);
            maxHeap.offer(70);
            maxHeap.offer(10);
            
            System.out.println("Max-heap peek: " + maxHeap.peek());  // 70
            
            System.out.print("Max-heap polling: ");
            while (!maxHeap.isEmpty()) {
                System.out.print(maxHeap.poll() + " ");
            }
            System.out.println("\n");
        }
        
        // Custom objects in PriorityQueue
        public static void priorityQueueCustomObjects() {
            System.out.println("=== PriorityQueue with Custom Objects ===");
            
            class Task {
                String name;
                int priority;
                
                Task(String name, int priority) {
                    this.name = name;
                    this.priority = priority;
                }
                
                @Override
                public String toString() {
                    return name + "(P" + priority + ")";
                }
            }
            
            // Higher priority number = more urgent
            PriorityQueue<Task> taskQueue = new PriorityQueue<>(
                (t1, t2) -> Integer.compare(t2.priority, t1.priority)
            );
            
            taskQueue.offer(new Task("Email", 2));
            taskQueue.offer(new Task("Meeting", 5));
            taskQueue.offer(new Task("Coffee", 1));
            taskQueue.offer(new Task("Bug Fix", 4));
            
            System.out.print("Task execution order: ");
            while (!taskQueue.isEmpty()) {
                System.out.print(taskQueue.poll() + " ");
            }
            System.out.println("\n");
        }
        
        // ArrayDeque: Double-ended queue, faster than LinkedList
        public static void arrayDequeDemo() {
            System.out.println("=== ArrayDeque Demo ===");
            
            Deque<String> deque = new ArrayDeque<>();
            
            // Add at both ends
            deque.addFirst("Middle");
            deque.addFirst("First");
            deque.addLast("Last");
            
            System.out.println("Deque: " + deque);
            
            // Peek at both ends
            System.out.println("Peek first: " + deque.peekFirst());
            System.out.println("Peek last: " + deque.peekLast());
            
            // Remove from both ends
            System.out.println("Remove first: " + deque.removeFirst());
            System.out.println("Remove last: " + deque.removeLast());
            System.out.println("After removals: " + deque);
            
            // Use as Stack (LIFO)
            Deque<Integer> stack = new ArrayDeque<>();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            
            System.out.print("Stack pop order: ");
            while (!stack.isEmpty()) {
                System.out.print(stack.pop() + " ");
            }
            System.out.println();
            
            // Use as Queue (FIFO)
            Deque<String> queue = new ArrayDeque<>();
            queue.offer("First");
            queue.offer("Second");
            queue.offer("Third");
            
            System.out.print("Queue poll order: ");
            while (!queue.isEmpty()) {
                System.out.print(queue.poll() + " ");
            }
            System.out.println("\n");
        }
    }

    // ========================================================================
    // SECTION 5: MAP INTERFACE IMPLEMENTATIONS
    // ========================================================================

    public static class MapExamples {
        
        // HashMap: Fast operations, no order guarantee
        public static void hashMapDemo() {
            System.out.println("=== HashMap Demo ===");
            
            Map<String, Integer> hashMap = new HashMap<>();
            
            // Put: O(1) average
            hashMap.put("Alice", 25);
            hashMap.put("Bob", 30);
            hashMap.put("Charlie", 28);
            hashMap.put("Alice", 26);  // Updates existing value
            
            System.out.println("HashMap (no order): " + hashMap);
            
            // Get: O(1) average
            Integer age = hashMap.get("Alice");
            System.out.println("Alice's age: " + age);
            
            // GetOrDefault
            Integer unknown = hashMap.getOrDefault("David", 0);
            System.out.println("David's age (default): " + unknown);
            
            // ContainsKey, containsValue: O(1) for key, O(n) for value
            System.out.println("Contains Bob: " + hashMap.containsKey("Bob"));
            System.out.println("Contains age 28: " + hashMap.containsValue(28));
            
            // Remove: O(1) average
            hashMap.remove("Bob");
            System.out.println("After removing Bob: " + hashMap);
            
            // PutIfAbsent
            hashMap.putIfAbsent("David", 35);
            hashMap.putIfAbsent("Alice", 40);  // Won't update (Alice exists)
            System.out.println("After putIfAbsent: " + hashMap);
            
            // Compute methods (Java 8+)
            hashMap.compute("Alice", (k, v) -> v + 1);  // Increment age
            System.out.println("After compute: " + hashMap);
            
            hashMap.computeIfPresent("Charlie", (k, v) -> v + 2);
            hashMap.computeIfAbsent("Eve", k -> 22);
            System.out.println("After computeIf methods: " + hashMap);
            
            // Merge
            hashMap.merge("Alice", 5, Integer::sum);  // Add 5 to Alice's age
            System.out.println("After merge: " + hashMap);
            
            System.out.println();
        }
        
        // Iteration techniques
        public static void mapIteration() {
            System.out.println("=== Map Iteration Techniques ===");
            
            Map<String, Integer> map = new HashMap<>();
            map.put("A", 1);
            map.put("B", 2);
            map.put("C", 3);
            
            // Method 1: Entry set (most efficient)
            System.out.println("Entry set iteration:");
            for (Map.Entry<String, Integer> entry : map.entrySet()) {
                System.out.println(entry.getKey() + " -> " + entry.getValue());
            }
            
            // Method 2: Key set
            System.out.println("\nKey set iteration:");
            for (String key : map.keySet()) {
                System.out.println(key + " -> " + map.get(key));
            }
            
            // Method 3: Values
            System.out.println("\nValues iteration:");
            for (Integer value : map.values()) {
                System.out.println(value);
            }
            
            // Method 4: forEach (Java 8+)
            System.out.println("\nforEach iteration:");
            map.forEach((k, v) -> System.out.println(k + " -> " + v));
            
            // Method 5: Streams
            System.out.println("\nStream iteration:");
            map.entrySet().stream()
                .filter(e -> e.getValue() > 1)
                .forEach(e -> System.out.println(e.getKey() + " -> " + e.getValue()));
            
            System.out.println();
        }
        
        // LinkedHashMap: Maintains insertion order
        public static void linkedHashMapDemo() {
            System.out.println("=== LinkedHashMap Demo ===");
            
            Map<String, String> linkedHashMap = new LinkedHashMap<>();
            
            linkedHashMap.put("First", "Value1");
            linkedHashMap.put("Second", "Value2");
            linkedHashMap.put("Third", "Value3");
            
            System.out.println("LinkedHashMap (insertion order): " + linkedHashMap);
            
            // LRU Cache using LinkedHashMap
            System.out.println("\n--- LRU Cache Implementation ---");
            int capacity = 3;
            Map<Integer, String> lruCache = new LinkedHashMap<Integer, String>(
                capacity, 0.75f, true  // accessOrder = true
            ) {
                @Override
                protected boolean removeEldestEntry(Map.Entry<Integer, String> eldest) {
                    return size() > capacity;
                }
            };
            
            lruCache.put(1, "A");
            lruCache.put(2, "B");
            lruCache.put(3, "C");
            System.out.println("Initial: " + lruCache);
            
            lruCache.get(1);  // Access 1
            System.out.println("After accessing 1: " + lruCache);
            
            lruCache.put(4, "D");  // Should evict 2
            System.out.println("After adding 4: " + lruCache);
            
            System.out.println();
        }
        
        // TreeMap: Sorted by keys
        public static void treeMapDemo() {
            System.out.println("=== TreeMap Demo ===");
            
            TreeMap<String, Integer> treeMap = new TreeMap<>();
            
            treeMap.put("Charlie", 28);
            treeMap.put("Alice", 25);
            treeMap.put("Bob", 30);
            treeMap.put("David", 22);
            
            System.out.println("TreeMap (sorted by keys): " + treeMap);
            
            // NavigableMap operations
            System.out.println("First entry: " + treeMap.firstEntry());
            System.out.println("Last entry: " + treeMap.lastEntry());
            System.out.println("Lower key than 'Charlie': " + treeMap.lowerKey("Charlie"));
            System.out.println("Higher key than 'Alice': " + treeMap.higherKey("Alice"));
            
            // Subset operations
            SortedMap<String, Integer> headMap = treeMap.headMap("Charlie");
            System.out.println("Head map (< Charlie): " + headMap);
            
            SortedMap<String, Integer> tailMap = treeMap.tailMap("Bob");
            System.out.println("Tail map (>= Bob): " + tailMap);
            
            SortedMap<String, Integer> subMap = treeMap.subMap("Alice", "David");
            System.out.println("Sub map [Alice, David): " + subMap);
            
            // Descending order
            NavigableMap<String, Integer> descendingMap = treeMap.descendingMap();
            System.out.println("Descending: " + descendingMap);
            
            System.out.println();
        }
        
        // Hashtable: Synchronized, legacy
        public static void hashtableDemo() {
            System.out.println("=== Hashtable Demo ===");
            
            Hashtable<String, Integer> hashtable = new Hashtable<>();
            
            // All methods synchronized (thread-safe but slower)
            hashtable.put("A", 1);
            hashtable.put("B", 2);
            
            // Cannot have null key or null value
            try {
                hashtable.put(null, 3);
            } catch (NullPointerException e) {
                System.out.println("Cannot add null key: " + e.getClass().getSimpleName());
            }
            
            try {
                hashtable.put("C", null);
            } catch (NullPointerException e) {
                System.out.println("Cannot add null value: " + e.getClass().getSimpleName());
            }
            
            System.out.println("Hashtable: " + hashtable);
            System.out.println("Note: Prefer ConcurrentHashMap over Hashtable\n");
        }
    }

    // ========================================================================
    // SECTION 6: COLLECTIONS UTILITY CLASS
    // ========================================================================

    public static class CollectionsUtilityExamples {
        
        public static void collectionsUtilityDemo() {
            System.out.println("=== Collections Utility Class ===");
            
            List<Integer> list = new ArrayList<>(Arrays.asList(5, 2, 8, 1, 9, 3));
            
            // Sort
            Collections.sort(list);
            System.out.println("Sorted: " + list);
            
            // Reverse
            Collections.reverse(list);
            System.out.println("Reversed: " + list);
            
            // Shuffle
            Collections.shuffle(list);
            System.out.println("Shuffled: " + list);
            
            // Binary search (list must be sorted)
            Collections.sort(list);
            int index = Collections.binarySearch(list, 5);
            System.out.println("Binary search for 5: index " + index);
            
            // Min and max
            System.out.println("Min: " + Collections.min(list));
            System.out.println("Max: " + Collections.max(list));
            
            // Frequency
            list.add(5);
            list.add(5);
            System.out.println("Frequency of 5: " + Collections.frequency(list, 5));
            
            // Fill
            List<String> names = new ArrayList<>(Arrays.asList("A", "B", "C"));
            Collections.fill(names, "X");
            System.out.println("After fill: " + names);
            
            // Copy
            List<Integer> source = Arrays.asList(1, 2, 3);
            List<Integer> dest = new ArrayList<>(Arrays.asList(0, 0, 0));
            Collections.copy(dest, source);
            System.out.println("After copy: " + dest);
            
            // Rotate
            List<Integer> rotate = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
            Collections.rotate(rotate, 2);
            System.out.println("After rotate by 2: " + rotate);
            
            // Swap
            Collections.swap(rotate, 0, 4);
            System.out.println("After swap 0 and 4: " + rotate);
            
            // Unmodifiable collections
            List<Integer> unmodifiable = Collections.unmodifiableList(list);
            try {
                unmodifiable.add(100);
            } catch (UnsupportedOperationException e) {
                System.out.println("Cannot modify unmodifiable list");
            }
            
            // Synchronized collections
            List<Integer> syncList = Collections.synchronizedList(new ArrayList<>());
            Set<String> syncSet = Collections.synchronizedSet(new HashSet<>());
            Map<String, Integer> syncMap = Collections.synchronizedMap(new HashMap<>());
            
            // Empty collections
            List<String> emptyList = Collections.emptyList();
            Set<String> emptySet = Collections.emptySet();
            Map<String, String> emptyMap = Collections.emptyMap();
            
            // Singleton
            Set<String> singleton = Collections.singleton("OnlyElement");
            System.out.println("Singleton set: " + singleton);
            
            // NCopies
            List<String> nCopies = Collections.nCopies(5, "Repeat");
            System.out.println("NCopies: " + nCopies);
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 7: COMPARABLE VS COMPARATOR
    // ========================================================================

    public static class ComparableVsComparatorExamples {
        
        // Student class implementing Comparable
        static class Student implements Comparable<Student> {
            String name;
            int rollNumber;
            double gpa;
            
            Student(String name, int rollNumber, double gpa) {
                this.name = name;
                this.rollNumber = rollNumber;
                this.gpa = gpa;
            }
            
            // Natural ordering by roll number
            @Override
            public int compareTo(Student other) {
                return Integer.compare(this.rollNumber, other.rollNumber);
            }
            
            @Override
            public String toString() {
                return String.format("%s(Roll:%d, GPA:%.2f)", name, rollNumber, gpa);
            }
        }
        
        public static void comparableDemo() {
            System.out.println("=== Comparable Demo ===");
            
            List<Student> students = new ArrayList<>();
            students.add(new Student("Alice", 103, 3.8));
            students.add(new Student("Bob", 101, 3.5));
            students.add(new Student("Charlie", 102, 3.9));
            
            // Sort using natural ordering (Comparable)
            Collections.sort(students);
            System.out.println("Sorted by roll number (natural ordering):");
            students.forEach(System.out::println);
            
            System.out.println();
        }
        
        public static void comparatorDemo() {
            System.out.println("=== Comparator Demo ===");
            
            List<Student> students = new ArrayList<>();
            students.add(new Student("Alice", 103, 3.8));
            students.add(new Student("Bob", 101, 3.5));
            students.add(new Student("Charlie", 102, 3.9));
            
            // Sort by name using Comparator
            Comparator<Student> nameComparator = (s1, s2) -> s1.name.compareTo(s2.name);
            Collections.sort(students, nameComparator);
            System.out.println("Sorted by name:");
            students.forEach(System.out::println);
            
            // Sort by GPA (descending)
            Comparator<Student> gpaComparator = (s1, s2) -> 
                Double.compare(s2.gpa, s1.gpa);
            Collections.sort(students, gpaComparator);
            System.out.println("\nSorted by GPA (descending):");
            students.forEach(System.out::println);
            
            // Chained comparators (Java 8+)
            Comparator<Student> chainedComparator = 
                Comparator.comparing((Student s) -> s.gpa).reversed()
                          .thenComparing(s -> s.name);
            
            students.add(new Student("David", 104, 3.9));  // Same GPA as Charlie
            Collections.sort(students, chainedComparator);
            System.out.println("\nSorted by GPA desc, then name:");
            students.forEach(System.out::println);
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 8: ITERATION TECHNIQUES
    // ========================================================================

    public static class IterationExamples {
        
        public static void iterationTechniques() {
            System.out.println("=== Iteration Techniques ===");
            
            List<String> list = Arrays.asList("Java", "Python", "JavaScript");
            
            // 1. For loop
            System.out.println("For loop:");
            for (int i = 0; i < list.size(); i++) {
                System.out.println(i + ": " + list.get(i));
            }
            
            // 2. Enhanced for loop (for-each)
            System.out.println("\nEnhanced for loop:");
            for (String item : list) {
                System.out.println(item);
            }
            
            // 3. Iterator
            System.out.println("\nIterator:");
            Iterator<String> iterator = list.iterator();
            while (iterator.hasNext()) {
                System.out.println(iterator.next());
            }
            
            // 4. ListIterator (bidirectional, list only)
            System.out.println("\nListIterator (backward):");
            ListIterator<String> listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                System.out.println(listIterator.previous());
            }
            
            // 5. forEach method (Java 8+)
            System.out.println("\nforEach method:");
            list.forEach(item -> System.out.println(item));
            
            // 6. Stream forEach
            System.out.println("\nStream forEach:");
            list.stream().forEach(System.out::println);
            
            // Safe removal during iteration
            List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
            System.out.println("\nRemoving even numbers:");
            Iterator<Integer> numIterator = numbers.iterator();
            while (numIterator.hasNext()) {
                if (numIterator.next() % 2 == 0) {
                    numIterator.remove();  // Safe removal
                }
            }
            System.out.println("After removal: " + numbers);
            
            // Using removeIf (Java 8+)
            numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
            numbers.removeIf(n -> n % 2 == 0);
            System.out.println("Using removeIf: " + numbers);
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 9: PERFORMANCE COMPARISON
    // ========================================================================

    public static class PerformanceComparison {
        
        public static void performanceTable() {
            System.out.println("=== Collection Performance Comparison ===\n");
            
            System.out.println("LIST IMPLEMENTATIONS:");
            System.out.println("┌─────────────┬──────────┬──────────┬──────────┬──────────┐");
            System.out.println("│ Operation   │ ArrayList│LinkedList│  Vector  │   Stack  │");
            System.out.println("├─────────────┼──────────┼──────────┼──────────┼──────────┤");
            System.out.println("│ get(i)      │   O(1)   │   O(n)   │   O(1)   │   O(n)   │");
            System.out.println("│ add(e)      │   O(1)*  │   O(1)   │   O(1)*  │   O(1)   │");
            System.out.println("│ add(i,e)    │   O(n)   │   O(n)   │   O(n)   │   O(n)   │");
            System.out.println("│ remove(i)   │   O(n)   │   O(n)   │   O(n)   │   O(n)   │");
            System.out.println("│ contains(e) │   O(n)   │   O(n)   │   O(n)   │   O(n)   │");
            System.out.println("└─────────────┴──────────┴──────────┴──────────┴──────────┘");
            System.out.println("* Amortized O(1), worst case O(n) when resizing\n");
            
            System.out.println("SET IMPLEMENTATIONS:");
            System.out.println("┌─────────────┬──────────┬──────────────────┬──────────┐");
            System.out.println("│ Operation   │ HashSet  │ LinkedHashSet    │ TreeSet  │");
            System.out.println("├─────────────┼──────────┼──────────────────┼──────────┤");
            System.out.println("│ add(e)      │   O(1)*  │     O(1)*        │ O(log n) │");
            System.out.println("│ remove(e)   │   O(1)*  │     O(1)*        │ O(log n) │");
            System.out.println("│ contains(e) │   O(1)*  │     O(1)*        │ O(log n) │");
            System.out.println("│ Ordering    │   None   │ Insertion order  │  Sorted  │");
            System.out.println("└─────────────┴──────────┴──────────────────┴──────────┘");
            System.out.println("* Average case, worst case O(n) with hash collisions\n");
            
            System.out.println("MAP IMPLEMENTATIONS:");
            System.out.println("┌─────────────┬──────────┬──────────────────┬──────────┬────────────┐");
            System.out.println("│ Operation   │ HashMap  │ LinkedHashMap    │ TreeMap  │ Hashtable  │");
            System.out.println("├─────────────┼──────────┼──────────────────┼──────────┼────────────┤");
            System.out.println("│ get(k)      │   O(1)*  │     O(1)*        │ O(log n) │   O(1)*    │");
            System.out.println("│ put(k,v)    │   O(1)*  │     O(1)*        │ O(log n) │   O(1)*    │");
            System.out.println("│ remove(k)   │   O(1)*  │     O(1)*        │ O(log n) │   O(1)*    │");
            System.out.println("│ Null keys   │   Yes    │      Yes         │    No    │     No     │");
            System.out.println("│ Thread-safe │    No    │       No         │    No    │    Yes     │");
            System.out.println("│ Ordering    │   None   │ Insertion order  │  Sorted  │    None    │");
            System.out.println("└─────────────┴──────────┴──────────────────┴──────────┴────────────┘");
            System.out.println("* Average case, worst case O(n) with hash collisions\n");
            
            System.out.println("QUEUE/DEQUE IMPLEMENTATIONS:");
            System.out.println("┌─────────────┬───────────────┬──────────────┐");
            System.out.println("│ Operation   │ PriorityQueue │  ArrayDeque  │");
            System.out.println("├─────────────┼───────────────┼──────────────┤");
            System.out.println("│ offer(e)    │   O(log n)    │     O(1)*    │");
            System.out.println("│ poll()      │   O(log n)    │     O(1)     │");
            System.out.println("│ peek()      │     O(1)      │     O(1)     │");
            System.out.println("└─────────────┴───────────────┴──────────────┘");
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 10: REAL-WORLD USE CASES
    // ========================================================================

    public static class RealWorldUseCases {
        
        // Use case 1: Word frequency counter
        public static void wordFrequencyCounter() {
            System.out.println("=== Use Case: Word Frequency Counter ===");
            
            String text = "java is great java is powerful java java python";
            String[] words = text.split(" ");
            
            Map<String, Integer> frequency = new HashMap<>();
            for (String word : words) {
                frequency.put(word, frequency.getOrDefault(word, 0) + 1);
            }
            
            System.out.println("Word frequencies: " + frequency);
            
            // Sort by frequency (descending)
            List<Map.Entry<String, Integer>> sorted = new ArrayList<>(frequency.entrySet());
            sorted.sort((e1, e2) -> e2.getValue().compareTo(e1.getValue()));
            
            System.out.println("Most frequent words:");
            sorted.forEach(e -> System.out.println(e.getKey() + ": " + e.getValue()));
            
            System.out.println();
        }
        
        // Use case 2: Remove duplicates while preserving order
        public static void removeDuplicates() {
            System.out.println("=== Use Case: Remove Duplicates ===");
            
            List<String> names = Arrays.asList("Alice", "Bob", "Alice", "Charlie", "Bob");
            
            // Using LinkedHashSet
            Set<String> uniqueNames = new LinkedHashSet<>(names);
            System.out.println("Original: " + names);
            System.out.println("Unique (order preserved): " + uniqueNames);
            
            System.out.println();
        }
        
        // Use case 3: Find top K frequent elements
        public static void topKFrequent() {
            System.out.println("=== Use Case: Top K Frequent Elements ===");
            
            int[] nums = {1, 1, 1, 2, 2, 3, 3, 3, 3, 4};
            int k = 2;
            
            // Count frequencies
            Map<Integer, Integer> freq = new HashMap<>();
            for (int num : nums) {
                freq.put(num, freq.getOrDefault(num, 0) + 1);
            }
            
            // Use PriorityQueue (min-heap) to keep top K
            PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>(
                (e1, e2) -> e1.getValue().compareTo(e2.getValue())
            );
            
            for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
                pq.offer(entry);
                if (pq.size() > k) {
                    pq.poll();
                }
            }
            
            System.out.println("Top " + k + " frequent elements:");
            while (!pq.isEmpty()) {
                Map.Entry<Integer, Integer> entry = pq.poll();
                System.out.println(entry.getKey() + ": " + entry.getValue() + " times");
            }
            
            System.out.println();
        }
        
        // Use case 4: Group anagrams
        public static void groupAnagrams() {
            System.out.println("=== Use Case: Group Anagrams ===");
            
            String[] words = {"eat", "tea", "tan", "ate", "nat", "bat"};
            
            Map<String, List<String>> groups = new HashMap<>();
            
            for (String word : words) {
                char[] chars = word.toCharArray();
                Arrays.sort(chars);
                String key = new String(chars);
                
                groups.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
            }
            
            System.out.println("Anagram groups:");
            groups.values().forEach(System.out::println);
            
            System.out.println();
        }
    }

    // ========================================================================
    // MAIN METHOD - RUN ALL EXAMPLES
    // ========================================================================

    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║    JAVA COLLECTIONS FRAMEWORK - COMPLETE GUIDE            ║");
        System.out.println("║    Day 9: Deep Dive into Collections                       ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        // List examples
        ListExamples.arrayListDemo();
        ListExamples.linkedListDemo();
        ListExamples.vectorDemo();
        ListExamples.listPerformanceComparison();
        
        // Set examples
        SetExamples.hashSetDemo();
        SetExamples.linkedHashSetDemo();
        SetExamples.treeSetDemo();
        SetExamples.treeSetWithComparator();
        
        // Queue examples
        QueueExamples.priorityQueueDemo();
        QueueExamples.priorityQueueCustomObjects();
        QueueExamples.arrayDequeDemo();
        
        // Map examples
        MapExamples.hashMapDemo();
        MapExamples.mapIteration();
        MapExamples.linkedHashMapDemo();
        MapExamples.treeMapDemo();
        MapExamples.hashtableDemo();
        
        // Collections utility
        CollectionsUtilityExamples.collectionsUtilityDemo();
        
        // Comparable vs Comparator
        ComparableVsComparatorExamples.comparableDemo();
        ComparableVsComparatorExamples.comparatorDemo();
        
        // Iteration techniques
        IterationExamples.iterationTechniques();
        
        // Performance comparison
        PerformanceComparison.performanceTable();
        
        // Real-world use cases
        RealWorldUseCases.wordFrequencyCounter();
        RealWorldUseCases.removeDuplicates();
        RealWorldUseCases.topKFrequent();
        RealWorldUseCases.groupAnagrams();
        
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║                     COLLECTION SUMMARY                     ║");
        System.out.println("╠════════════════════════════════════════════════════════════╣");
        System.out.println("║ When to use ArrayList:    Fast random access               ║");
        System.out.println("║ When to use LinkedList:   Frequent insertions/deletions    ║");
        System.out.println("║ When to use HashSet:      Unique elements, fast operations ║");
        System.out.println("║ When to use TreeSet:      Sorted unique elements           ║");
        System.out.println("║ When to use HashMap:      Key-value pairs, fast lookup     ║");
        System.out.println("║ When to use TreeMap:      Sorted key-value pairs           ║");
        System.out.println("║ When to use PriorityQueue: Priority-based processing      ║");
        System.out.println("║ When to use ArrayDeque:   Stack/Queue operations           ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
    }
}
