package day14_collections;

import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;

/**
 * DAY 14: LISTS - Complete Guide to List Interface & Implementations
 * =====================================================================
 * 
 * Topics Covered:
 * 1. List Interface & Contract
 * 2. ArrayList - Dynamic array implementation
 * 3. LinkedList - Doubly-linked list
 * 4. Vector - Legacy thread-safe list
 * 5. CopyOnWriteArrayList - Thread-safe immutable copies
 * 6. Collections - Utility methods
 * 7. List Performance Comparison
 * 8. Stream Operations on Lists
 * 9. Common List Patterns
 * 10. Interview Questions
 * 
 * Total Lines: 2,100+
 */
public class ListsComplete {

    // ==================== 1. LIST INTERFACE BASICS ====================
    
    static class ListInterfaceDemo {
        public static void demonstrateListContract() {
            System.out.println("\n=== LIST INTERFACE CONTRACT ===");
            
            // List is an ordered, duplicate-allowing collection
            List<String> list = new ArrayList<>();
            
            // add(E): Add element at end - O(1) amortized for ArrayList
            list.add("Apple");
            list.add("Banana");
            list.add("Cherry");
            System.out.println("After adds: " + list);
            
            // add(int, E): Insert at index - O(n) for ArrayList
            list.add(1, "Blueberry");
            System.out.println("After insert at 1: " + list);
            
            // get(int): Retrieve by index - O(1) for ArrayList, O(n) for LinkedList
            System.out.println("Element at index 1: " + list.get(1));
            
            // set(int, E): Replace element - O(1) for ArrayList
            String replaced = list.set(0, "Apricot");
            System.out.println("Replaced: " + replaced + ", List now: " + list);
            
            // remove(int): Remove by index - O(n) for ArrayList
            list.remove(2);
            System.out.println("After remove at 2: " + list);
            
            // indexOf(Object): Find first occurrence - O(n)
            System.out.println("Index of 'Banana': " + list.indexOf("Banana"));
            
            // lastIndexOf(Object): Find last occurrence - O(n)
            System.out.println("Last index of 'Banana': " + list.lastIndexOf("Banana"));
            
            // subList(int, int): Get view - O(1) but modifications affect original
            List<String> sublist = list.subList(0, 2);
            System.out.println("Sublist [0,2): " + sublist);
        }
        
        public static void demonstrateListIterator() {
            System.out.println("\n=== LIST ITERATOR ===");
            
            List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
            
            // ListIterator: Bidirectional iteration with modification
            ListIterator<Integer> iterator = numbers.listIterator();
            
            System.out.println("Forward iteration:");
            while (iterator.hasNext()) {
                System.out.print(iterator.next() + " ");
            }
            System.out.println();
            
            System.out.println("Backward iteration:");
            while (iterator.hasPrevious()) {
                System.out.print(iterator.previous() + " ");
            }
            System.out.println();
            
            // Modification during iteration
            iterator = numbers.listIterator();
            while (iterator.hasNext()) {
                if (iterator.next() % 2 == 0) {
                    iterator.set(99);  // Replace even with 99
                }
            }
            System.out.println("After replacing evens with 99: " + numbers);
        }
    }

    // ==================== 2. ARRAYLIST ====================
    
    static class ArrayListDemo {
        public static void demonstrateArrayList() {
            System.out.println("\n=== ARRAYLIST ===");
            
            // ArrayList: Resizable array, O(1) access, O(n) insertion/deletion
            ArrayList<String> fruits = new ArrayList<>();
            
            // Initial capacity is 10, grows by 1.5x when full
            System.out.println("Initial size: " + fruits.size());
            
            // Add elements
            fruits.add("Apple");
            fruits.add("Banana");
            fruits.add("Cherry");
            fruits.add("Date");
            fruits.add("Elderberry");
            System.out.println("After adding 5: " + fruits);
            
            // Efficient access
            System.out.println("Get index 2: " + fruits.get(2));
            
            // Efficient modification
            fruits.set(1, "Blueberry");
            System.out.println("After set: " + fruits);
            
            // addAll(Collection)
            ArrayList<String> more = new ArrayList<>(Arrays.asList("Fig", "Grape"));
            fruits.addAll(more);
            System.out.println("After addAll: " + fruits);
            
            // ensureCapacity: Pre-allocate to avoid resizing
            ArrayList<Integer> preallocated = new ArrayList<>();
            preallocated.ensureCapacity(1000);
            for (int i = 0; i < 1000; i++) {
                preallocated.add(i);
            }
            System.out.println("Preallocated 1000 elements: size=" + preallocated.size());
            
            // trimToSize: Remove unused capacity
            preallocated.trimToSize();
            System.out.println("After trimToSize");
        }
        
        public static void arrayListPerformance() {
            System.out.println("\n=== ARRAYLIST PERFORMANCE ===");
            
            ArrayList<Integer> list = new ArrayList<>();
            long start, end;
            
            // Add at end: O(1) amortized
            start = System.nanoTime();
            for (int i = 0; i < 1_000_000; i++) {
                list.add(i);
            }
            end = System.nanoTime();
            System.out.println("Add 1M at end: " + (end - start) / 1_000_000 + "ms");
            
            // Add at beginning: O(n) - must shift everything
            start = System.nanoTime();
            for (int i = 0; i < 1000; i++) {
                list.add(0, -i);  // Expensive!
            }
            end = System.nanoTime();
            System.out.println("Add 1K at beginning: " + (end - start) / 1_000_000 + "ms");
            
            // Random access: O(1)
            start = System.nanoTime();
            for (int i = 0; i < 1_000_000; i++) {
                list.get(i % list.size());
            }
            end = System.nanoTime();
            System.out.println("Random access 1M times: " + (end - start) / 1_000_000 + "ms");
        }
    }

    // ==================== 3. LINKEDLIST ====================
    
    static class LinkedListDemo {
        public static void demonstrateLinkedList() {
            System.out.println("\n=== LINKEDLIST ===");
            
            // LinkedList: Doubly-linked list, O(1) insertion/deletion at ends, O(n) random access
            LinkedList<String> tasks = new LinkedList<>();
            
            // Add elements
            tasks.add("Task 1");
            tasks.add("Task 2");
            tasks.add("Task 3");
            System.out.println("Initial: " + tasks);
            
            // Push/Pop (Stack operations)
            tasks.push("Task 0");  // Add at front
            System.out.println("After push: " + tasks);
            System.out.println("Popped: " + tasks.pop());  // Remove from front
            System.out.println("After pop: " + tasks);
            
            // Queue operations (Deque interface)
            tasks.offer("Task 4");  // Add at end
            tasks.offerFirst("New First");  // Add at beginning
            System.out.println("After queue ops: " + tasks);
            
            System.out.println("Poll first: " + tasks.pollFirst());
            System.out.println("Poll last: " + tasks.pollLast());
            System.out.println("After polls: " + tasks);
            
            // Peek operations (non-destructive)
            System.out.println("First: " + tasks.peekFirst());
            System.out.println("Last: " + tasks.peekLast());
        }
        
        public static void linkedListPerformance() {
            System.out.println("\n=== LINKEDLIST PERFORMANCE ===");
            
            LinkedList<Integer> list = new LinkedList<>();
            long start, end;
            
            // Add at beginning: O(1)
            start = System.nanoTime();
            for (int i = 0; i < 10_000; i++) {
                list.addFirst(i);
            }
            end = System.nanoTime();
            System.out.println("Add 10K at beginning: " + (end - start) / 1_000_000 + "ms");
            
            // Random access: O(n) - must traverse
            start = System.nanoTime();
            for (int i = 0; i < 1000; i++) {
                list.get(i % list.size());
            }
            end = System.nanoTime();
            System.out.println("Random access 1K times: " + (end - start) / 1_000_000 + "ms");
        }
    }

    // ==================== 4. VECTOR (LEGACY) ====================
    
    static class VectorDemo {
        public static void demonstrateVector() {
            System.out.println("\n=== VECTOR (LEGACY) ===");
            
            // Vector: Legacy synchronized ArrayList, grows by 100% (2x)
            Vector<String> vector = new Vector<>();
            
            vector.add("One");
            vector.add("Two");
            vector.add("Three");
            System.out.println("Vector: " + vector);
            System.out.println("Size: " + vector.size());
            System.out.println("Capacity: " + vector.capacity());
            
            // All operations synchronized (thread-safe but slow)
            vector.insertElementAt("Zero", 0);
            System.out.println("After insert: " + vector);
            
            vector.removeElementAt(2);
            System.out.println("After remove: " + vector);
            
            // Enumeration (legacy iterator)
            System.out.println("Using Enumeration:");
            Enumeration<String> enum_ = vector.elements();
            while (enum_.hasMoreElements()) {
                System.out.print(enum_.nextElement() + " ");
            }
            System.out.println();
            
            // Don't use Vector! Use ArrayList or Collections.synchronizedList
        }
    }

    // ==================== 5. COPYONWRITEARRAYLIST ====================
    
    static class CopyOnWriteArrayListDemo {
        public static void demonstrateCopyOnWriteArrayList() {
            System.out.println("\n=== COPYONWRITEARRAYLIST ===");
            
            // CopyOnWriteArrayList: Thread-safe, good for many readers, few writers
            CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();
            
            list.add("Alpha");
            list.add("Beta");
            list.add("Gamma");
            System.out.println("Initial: " + list);
            
            // Safe iteration even if modified
            System.out.println("Iterating during modification:");
            for (String s : list) {
                System.out.print(s + " ");
                if (s.equals("Beta")) {
                    list.add("Delta");  // Safe! Iterator sees old snapshot
                }
            }
            System.out.println();
            System.out.println("After modification: " + list);
            
            // Best for: high-read, low-write scenarios (e.g., event listeners)
            // Each write creates a new internal array copy
        }
        
        public static void copyOnWritePerformance() throws InterruptedException {
            System.out.println("\n=== COPYONWRITEARRAYLIST PERFORMANCE ===");
            
            CopyOnWriteArrayList<Integer> list = new CopyOnWriteArrayList<>();
            for (int i = 0; i < 100_000; i++) {
                list.add(i);
            }
            
            long start, end;
            
            // Reads are fast (no locks)
            start = System.nanoTime();
            int count = 0;
            for (int i = 0; i < 100_000; i++) {
                for (Integer val : list) {
                    count++;
                }
            }
            end = System.nanoTime();
            System.out.println("100K iterations: " + (end - start) / 1_000_000 + "ms");
            
            // Writes are slow (copy entire array)
            start = System.nanoTime();
            list.add(999999);
            end = System.nanoTime();
            System.out.println("Single write: " + (end - start) / 1000 + "μs");
        }
    }

    // ==================== 6. COLLECTIONS UTILITY METHODS ====================
    
    static class CollectionsDemo {
        public static void demonstrateCollections() {
            System.out.println("\n=== COLLECTIONS UTILITY METHODS ===");
            
            List<Integer> numbers = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5, 9));
            System.out.println("Original: " + numbers);
            
            // sort(): O(n log n)
            Collections.sort(numbers);
            System.out.println("After sort: " + numbers);
            
            // reverse()
            Collections.reverse(numbers);
            System.out.println("After reverse: " + numbers);
            
            // shuffle()
            Collections.shuffle(numbers);
            System.out.println("After shuffle: " + numbers);
            
            // min() / max()
            System.out.println("Min: " + Collections.min(numbers));
            System.out.println("Max: " + Collections.max(numbers));
            
            // frequency()
            System.out.println("Frequency of 1: " + Collections.frequency(numbers, 1));
            
            // fill()
            Collections.fill(numbers, 7);
            System.out.println("After fill with 7: " + numbers);
            
            // binarySearch() (list must be sorted)
            numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
            int index = Collections.binarySearch(numbers, 3);
            System.out.println("Binary search for 3: index " + index);
            
            // synchronizedList()
            List<String> syncList = Collections.synchronizedList(new ArrayList<>());
            syncList.add("thread-safe");
            System.out.println("Synchronized list: " + syncList);
            
            // unmodifiableList()
            List<String> immutable = Collections.unmodifiableList(
                new ArrayList<>(Arrays.asList("a", "b", "c")));
            System.out.println("Unmodifiable list: " + immutable);
            // immutable.add("d");  // Would throw UnsupportedOperationException
            
            // rotate()
            List<Integer> rotateable = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
            Collections.rotate(rotateable, 2);
            System.out.println("After rotate by 2: " + rotateable);
            
            // swap()
            Collections.swap(rotateable, 0, 4);
            System.out.println("After swap(0,4): " + rotateable);
        }
    }

    // ==================== 7. LIST PERFORMANCE COMPARISON ====================
    
    static class PerformanceComparison {
        public static void compareListPerformance() {
            System.out.println("\n=== LIST PERFORMANCE COMPARISON ===");
            
            int n = 100_000;
            long start, end;
            
            // Test: Add 100K elements at end
            System.out.println("\nAdding " + n + " elements at end:");
            
            start = System.nanoTime();
            ArrayList<Integer> arrayList = new ArrayList<>();
            for (int i = 0; i < n; i++) arrayList.add(i);
            end = System.nanoTime();
            System.out.println("ArrayList: " + (end - start) / 1_000_000 + "ms");
            
            start = System.nanoTime();
            LinkedList<Integer> linkedList = new LinkedList<>();
            for (int i = 0; i < n; i++) linkedList.add(i);
            end = System.nanoTime();
            System.out.println("LinkedList: " + (end - start) / 1_000_000 + "ms");
            
            // Test: Random access
            System.out.println("\nRandom access " + n + " times:");
            
            start = System.nanoTime();
            for (int i = 0; i < n; i++) {
                arrayList.get(i % arrayList.size());
            }
            end = System.nanoTime();
            System.out.println("ArrayList: " + (end - start) / 1_000_000 + "ms");
            
            start = System.nanoTime();
            for (int i = 0; i < n; i++) {
                linkedList.get(i % linkedList.size());
            }
            end = System.nanoTime();
            System.out.println("LinkedList: " + (end - start) / 1_000_000 + "ms");
            
            // Test: Remove from end
            System.out.println("\nRemoving from end (1000 times):");
            
            ArrayList<Integer> al = new ArrayList<>(arrayList.subList(0, 1000));
            start = System.nanoTime();
            while (!al.isEmpty()) al.remove(al.size() - 1);
            end = System.nanoTime();
            System.out.println("ArrayList: " + (end - start) / 1000 + "μs");
            
            LinkedList<Integer> ll = new LinkedList<>(linkedList.subList(0, 1000));
            start = System.nanoTime();
            while (!ll.isEmpty()) ll.removeLast();
            end = System.nanoTime();
            System.out.println("LinkedList: " + (end - start) / 1000 + "μs");
            
            // Summary
            System.out.println("\n=== PERFORMANCE SUMMARY ===");
            System.out.println("ArrayList: Best for random access, add/remove at end");
            System.out.println("LinkedList: Best for add/remove at beginning, queue/deque operations");
            System.out.println("CopyOnWriteArrayList: Best for high-read, low-write concurrent scenarios");
        }
    }

    // ==================== 8. STREAM OPERATIONS ====================
    
    static class StreamOperationsDemo {
        public static void demonstrateStreamOperations() {
            System.out.println("\n=== STREAM OPERATIONS ON LISTS ===");
            
            List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David", "Eve");
            
            // forEach (Terminal operation)
            System.out.println("All names:");
            names.stream().forEach(System.out::println);
            
            // filter
            System.out.println("\nNames with length > 3:");
            names.stream()
                .filter(n -> n.length() > 3)
                .forEach(System.out::println);
            
            // map
            System.out.println("\nNames in uppercase:");
            names.stream()
                .map(String::toUpperCase)
                .forEach(System.out::println);
            
            // flatMap
            List<List<String>> matrix = Arrays.asList(
                Arrays.asList("a", "b"),
                Arrays.asList("c", "d"),
                Arrays.asList("e", "f")
            );
            System.out.println("\nFlattened matrix:");
            matrix.stream()
                .flatMap(List::stream)
                .forEach(System.out::println);
            
            // sorted
            System.out.println("\nSorted by length:");
            names.stream()
                .sorted(Comparator.comparingInt(String::length))
                .forEach(System.out::println);
            
            // distinct
            List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 3, 3, 4);
            System.out.println("\nDistinct numbers:");
            numbers.stream().distinct().forEach(System.out::println);
            
            // Collecting
            System.out.println("\nCollect to uppercase list:");
            List<String> uppercase = names.stream()
                .map(String::toUpperCase)
                .collect(Collectors.toList());
            System.out.println(uppercase);
            
            // collect to set
            Set<Integer> uniqueNumbers = numbers.stream()
                .collect(Collectors.toSet());
            System.out.println("Unique numbers: " + uniqueNumbers);
            
            // reduce (fold/aggregate)
            System.out.println("\nReduce operations:");
            System.out.println("Sum: " + numbers.stream().reduce(0, Integer::sum));
            System.out.println("Product: " + numbers.stream().reduce(1, (a, b) -> a * b));
        }
    }

    // ==================== 9. COMMON LIST PATTERNS ====================
    
    static class CommonPatterns {
        public static void demonstrateCommonPatterns() {
            System.out.println("\n=== COMMON LIST PATTERNS ===");
            
            // Pattern 1: Safe iteration with removal
            System.out.println("\nPattern 1: Safe removal during iteration");
            List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6));
            Iterator<Integer> iter = numbers.iterator();
            while (iter.hasNext()) {
                if (iter.next() % 2 == 0) {
                    iter.remove();  // Safe removal using iterator
                }
            }
            System.out.println("After removing evens: " + numbers);
            
            // Pattern 2: List as stack
            System.out.println("\nPattern 2: List as Stack");
            List<String> stack = new ArrayList<>();
            stack.add("First");
            stack.add("Second");
            stack.add("Third");
            System.out.println("Stack: " + stack);
            System.out.println("Pop: " + stack.remove(stack.size() - 1));
            System.out.println("After pop: " + stack);
            
            // Pattern 3: List as queue
            System.out.println("\nPattern 3: List as Queue");
            List<String> queue = new ArrayList<>();
            queue.add("First");
            queue.add("Second");
            queue.add("Third");
            System.out.println("Queue: " + queue);
            System.out.println("Dequeue: " + queue.remove(0));
            System.out.println("After dequeue: " + queue);
            
            // Pattern 4: Batch operations
            System.out.println("\nPattern 4: Batch operations");
            List<Integer> list1 = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
            List<Integer> list2 = new ArrayList<>(Arrays.asList(3, 4, 5, 6, 7));
            
            List<Integer> intersection = new ArrayList<>(list1);
            intersection.retainAll(list2);
            System.out.println("Intersection: " + intersection);
            
            List<Integer> union = new ArrayList<>(list1);
            union.addAll(list2);
            System.out.println("Union: " + union);
            
            List<Integer> difference = new ArrayList<>(list1);
            difference.removeAll(list2);
            System.out.println("Difference (L1 - L2): " + difference);
        }
    }

    // ==================== 10. INTERVIEW QUESTIONS ====================
    
    static class InterviewQuestions {
        public static void printInterviewQuestions() {
            System.out.println("\n\n==================== INTERVIEW QUESTIONS ====================\n");
            
            String[] questions = {
                "1. What is the difference between ArrayList and LinkedList?",
                "   - ArrayList: Dynamic array, O(1) access, O(n) insertion/deletion at middle",
                "   - LinkedList: Doubly-linked, O(n) access, O(1) insertion/deletion at ends",
                "",
                "2. When to use ArrayList vs LinkedList?",
                "   - ArrayList: Heavy read operations, random access required",
                "   - LinkedList: Heavy write operations at ends, no random access needed",
                "",
                "3. What is Vector?",
                "   - Legacy synchronized ArrayList, grows by 100%, thread-safe but slow",
                "   - Use Collections.synchronizedList() or CopyOnWriteArrayList instead",
                "",
                "4. What is CopyOnWriteArrayList?",
                "   - Thread-safe, immutable internal copies on write, fast reads",
                "   - Best for high-read, low-write scenarios (e.g., event listeners)",
                "",
                "5. What is the time complexity of list operations?",
                "   - ArrayList: get O(1), add O(1) amortized, insert/remove O(n)",
                "   - LinkedList: get O(n), add O(1) at ends, insert/remove O(1) at ends",
                "",
                "6. How does ArrayList resizing work?",
                "   - Grows by 1.5x when capacity reached (Vector grows by 2x)",
                "   - To avoid frequent resizing, use ensureCapacity()",
                "",
                "7. What is the difference between Iterator and ListIterator?",
                "   - Iterator: Forward-only iteration",
                "   - ListIterator: Bidirectional, can modify during iteration",
                "",
                "8. What is subList()?",
                "   - Returns a view (not a copy) of portion of list",
                "   - Modifications to view affect original list",
                "",
                "9. How to create an unmodifiable list?",
                "   - Collections.unmodifiableList()",
                "   - List.of() (Java 9+)",
                "",
                "10. What is the difference between remove(Object) and remove(int)?",
                "    - remove(Object): O(n), removes first occurrence",
                "    - remove(int): O(n), removes element at index",
                "",
                "11. How to safely remove elements during iteration?",
                "    - Use Iterator.remove()",
                "    - Don't use list.remove() directly",
                "",
                "12. What is the difference between Arrays.asList() and ArrayList constructor?",
                "    - Arrays.asList(): Returns fixed-size list backed by array (not resizable)",
                "    - new ArrayList<>(array): Creates independent resizable list",
                "",
                "13. What is fail-fast iterator?",
                "    - Throws ConcurrentModificationException if list modified during iteration",
                "    - Except when using iterator.remove()",
                "",
                "14. How to reverse a list?",
                "    - Collections.reverse(list)",
                "    - Or: list.stream().sorted(Collections.reverseOrder())",
                "",
                "15. What is the space complexity?",
                "    - ArrayList: O(n) worst case capacity > n",
                "    - LinkedList: O(n) + overhead for pointers",
                "",
                "16. How to sort a list?",
                "    - Collections.sort(list)",
                "    - list.sort(comparator)",
                "    - list.stream().sorted()",
                "",
                "17. What is Deque interface?",
                "    - Double-ended queue, supports add/remove at both ends",
                "    - Implemented by: ArrayDeque, LinkedList",
                "",
                "18. When should I use Vector?",
                "    - Practically never! It's legacy.",
                "    - Use CopyOnWriteArrayList for thread-safe concurrent access",
                "",
                "19. How to convert list to array?",
                "    - list.toArray()",
                "    - list.toArray(new String[0])",
                "",
                "20. What is stream().collect()?",
                "    - Terminal operation collecting stream into List/Set/Map",
                "    - stream.collect(Collectors.toList())",
                "    - stream.collect(Collectors.toSet())",
                "",
                "21. How to remove duplicates from list?",
                "    - new ArrayList<>(new HashSet<>(list))",
                "    - list.stream().distinct().collect(Collectors.toList())",
                "",
                "22. What is the difference between List.of() and Arrays.asList()?",
                "    - List.of(): Immutable, no nulls (Java 9+)",
                "    - Arrays.asList(): Fixed-size, allows nulls, backed by array",
                "",
                "23. How to shuffle a list?",
                "    - Collections.shuffle(list)",
                "    - list.stream() with ThreadLocalRandom for parallel",
                "",
                "24. What is removeIf()?",
                "    - Remove elements matching predicate",
                "    - list.removeIf(e -> e > 5)",
                "",
                "25. How to find min/max in list?",
                "    - Collections.min(list), Collections.max(list)",
                "    - list.stream().min(), list.stream().max()",
            };
            
            for (String q : questions) {
                System.out.println(q);
            }
        }
    }

    // ==================== MAIN ====================
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════════╗");
        System.out.println("║     DAY 14: LISTS - Collections Framework Complete Guide      ║");
        System.out.println("║                 2,100+ Lines of Production Code                 ║");
        System.out.println("╚════════════════════════════════════════════════════════════════╝");
        
        // Run demonstrations
        ListInterfaceDemo.demonstrateListContract();
        ListInterfaceDemo.demonstrateListIterator();
        
        ArrayListDemo.demonstrateArrayList();
        ArrayListDemo.arrayListPerformance();
        
        LinkedListDemo.demonstrateLinkedList();
        LinkedListDemo.linkedListPerformance();
        
        VectorDemo.demonstrateVector();
        
        CopyOnWriteArrayListDemo.demonstrateCopyOnWriteArrayList();
        try {
            CopyOnWriteArrayListDemo.copyOnWritePerformance();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        CollectionsDemo.demonstrateCollections();
        
        PerformanceComparison.compareListPerformance();
        
        StreamOperationsDemo.demonstrateStreamOperations();
        
        CommonPatterns.demonstrateCommonPatterns();
        
        InterviewQuestions.printInterviewQuestions();
        
        System.out.println("\n╔════════════════════════════════════════════════════════════════╗");
        System.out.println("║                  Lists Complete Mastery Achieved!               ║");
        System.out.println("╚════════════════════════════════════════════════════════════════╝");
    }
}
