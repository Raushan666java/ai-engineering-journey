```java
/**
 * Collections Framework - Complete Implementation
 * Topic: List, Set, Map interfaces and implementations, utility classes
 * Difficulty: Intermediate to Advanced
 * Estimated Time: 90 minutes
 */

import java.util.*;
import java.util.stream.Collectors;
import java.util.function.Function;
import java.util.function.Predicate;

// ==========================================
// 1. LIST IMPLEMENTATIONS
// ==========================================

/**
 * Comprehensive List operations demonstration
 */
class ListOperations {

    /**
     * ArrayList demonstration - Fast random access, slow insertions/deletions
     */
    public static void demonstrateArrayList() {
        System.out.println("=== ARRAYLIST DEMONSTRATION ===");

        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        fruits.add(1, "Mango"); // Insert at index 1

        System.out.println("Fruits: " + fruits);
        System.out.println("Size: " + fruits.size());
        System.out.println("Get index 2: " + fruits.get(2));
        System.out.println("Contains 'Apple': " + fruits.contains("Apple"));
        System.out.println("Index of 'Banana': " + fruits.indexOf("Banana"));

        // Bulk operations
        List<String> moreFruits = Arrays.asList("Grape", "Pineapple");
        fruits.addAll(moreFruits);
        System.out.println("After adding more fruits: " + fruits);

        // Remove operations
        fruits.remove("Banana");
        fruits.remove(1); // Remove by index
        System.out.println("After removals: " + fruits);

        // Sublist
        List<String> subList = fruits.subList(1, 3);
        System.out.println("Sublist (1-3): " + subList);

        // Sorting
        Collections.sort(fruits);
        System.out.println("Sorted: " + fruits);

        // Reverse
        Collections.reverse(fruits);
        System.out.println("Reversed: " + fruits);
        System.out.println();
    }

    /**
     * LinkedList demonstration - Fast insertions/deletions, slow random access
     */
    public static void demonstrateLinkedList() {
        System.out.println("=== LINKEDLIST DEMONSTRATION ===");

        LinkedList<String> tasks = new LinkedList<>();
        tasks.add("Task 1");
        tasks.add("Task 2");
        tasks.add("Task 3");

        System.out.println("Tasks: " + tasks);

        // LinkedList specific operations
        tasks.addFirst("Urgent Task");
        tasks.addLast("Low Priority Task");
        System.out.println("After adding first/last: " + tasks);

        System.out.println("First: " + tasks.getFirst());
        System.out.println("Last: " + tasks.getLast());

        System.out.println("Removed first: " + tasks.removeFirst());
        System.out.println("Removed last: " + tasks.removeLast());
        System.out.println("After removals: " + tasks);

        // Use as Queue
        LinkedList<String> queue = new LinkedList<>();
        queue.offer("Customer 1");
        queue.offer("Customer 2");
        queue.offer("Customer 3");

        System.out.println("Queue: " + queue);
        System.out.println("Poll (dequeue): " + queue.poll());
        System.out.println("Peek (front): " + queue.peek());
        System.out.println("Queue after poll: " + queue);
        System.out.println();
    }

    /**
     * Vector demonstration - Synchronized ArrayList (legacy)
     */
    public static void demonstrateVector() {
        System.out.println("=== VECTOR DEMONSTRATION ===");

        Vector<Integer> numbers = new Vector<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        System.out.println("Vector: " + numbers);
        System.out.println("Capacity: " + numbers.capacity());
        System.out.println("Size: " + numbers.size());

        // Vector-specific methods
        numbers.addElement(40);
        System.out.println("After addElement: " + numbers);
        System.out.println("Element at 2: " + numbers.elementAt(2));
        System.out.println("First element: " + numbers.firstElement());
        System.out.println("Last element: " + numbers.lastElement());
        System.out.println();
    }

    /**
     * Stack demonstration - LIFO data structure
     */
    public static void demonstrateStack() {
        System.out.println("=== STACK DEMONSTRATION ===");

        Stack<String> browserHistory = new Stack<>();
        browserHistory.push("Homepage");
        browserHistory.push("About Us");
        browserHistory.push("Contact");
        browserHistory.push("Products");

        System.out.println("Browser history: " + browserHistory);
        System.out.println("Top of stack: " + browserHistory.peek());

        // Simulate back button
        System.out.println("Going back...");
        while (!browserHistory.isEmpty()) {
            System.out.println("Current page: " + browserHistory.pop());
            if (!browserHistory.isEmpty()) {
                System.out.println("Previous pages: " + browserHistory);
            }
        }
        System.out.println();
    }
}

// ==========================================
// 2. SET IMPLEMENTATIONS
// ==========================================

/**
 * Comprehensive Set operations demonstration
 */
class SetOperations {

    /**
     * HashSet demonstration - Fast lookup, no order guarantee
     */
    public static void demonstrateHashSet() {
        System.out.println("=== HASHSET DEMONSTRATION ===");

        Set<String> cities = new HashSet<>();
        cities.add("New York");
        cities.add("London");
        cities.add("Tokyo");
        cities.add("New York"); // Duplicate - will be ignored

        System.out.println("Cities: " + cities);
        System.out.println("Size: " + cities.size());
        System.out.println("Contains 'London': " + cities.contains("London"));

        // Bulk operations
        Set<String> moreCities = new HashSet<>(Arrays.asList("Paris", "Berlin"));
        cities.addAll(moreCities);
        System.out.println("After adding more cities: " + cities);

        // Set operations
        Set<String> asianCities = new HashSet<>(Arrays.asList("Tokyo", "Beijing", "Seoul"));
        Set<String> europeanCities = new HashSet<>(Arrays.asList("London", "Paris", "Berlin"));

        // Union
        Set<String> allCities = new HashSet<>(asianCities);
        allCities.addAll(europeanCities);
        System.out.println("Union: " + allCities);

        // Intersection
        Set<String> commonCities = new HashSet<>(asianCities);
        commonCities.retainAll(europeanCities);
        System.out.println("Intersection: " + commonCities);

        // Difference
        Set<String> onlyAsian = new HashSet<>(asianCities);
        onlyAsian.removeAll(europeanCities);
        System.out.println("Asian cities only: " + onlyAsian);
        System.out.println();
    }

    /**
     * LinkedHashSet demonstration - Maintains insertion order
     */
    public static void demonstrateLinkedHashSet() {
        System.out.println("=== LINKEDHASHSET DEMONSTRATION ===");

        LinkedHashSet<String> orderedCities = new LinkedHashSet<>();
        orderedCities.add("Tokyo");
        orderedCities.add("New York");
        orderedCities.add("London");
        orderedCities.add("Paris");

        System.out.println("Ordered cities: " + orderedCities);

        // Order is preserved
        System.out.print("Iteration order: ");
        for (String city : orderedCities) {
            System.out.print(city + " ");
        }
        System.out.println("\n");
    }

    /**
     * TreeSet demonstration - Sorted set
     */
    public static void demonstrateTreeSet() {
        System.out.println("=== TREESET DEMONSTRATION ===");

        TreeSet<Integer> numbers = new TreeSet<>();
        numbers.add(5);
        numbers.add(2);
        numbers.add(8);
        numbers.add(1);
        numbers.add(10);

        System.out.println("TreeSet (auto-sorted): " + numbers);
        System.out.println("First (smallest): " + numbers.first());
        System.out.println("Last (largest): " + numbers.last());

        // NavigableSet operations
        System.out.println("Lower than 5: " + numbers.lower(5));
        System.out.println("Higher than 5: " + numbers.higher(5));
        System.out.println("Floor of 7: " + numbers.floor(7));
        System.out.println("Ceiling of 7: " + numbers.ceiling(7));

        // Subset operations
        System.out.println("HeadSet (< 8): " + numbers.headSet(8));
        System.out.println("TailSet (>= 5): " + numbers.tailSet(5));
        System.out.println("SubSet [2, 8): " + numbers.subSet(2, 8));
        System.out.println();
    }
}

// ==========================================
// 3. MAP IMPLEMENTATIONS
// ==========================================

/**
 * Comprehensive Map operations demonstration
 */
class MapOperations {

    /**
     * HashMap demonstration - Fast key-value lookup
     */
    public static void demonstrateHashMap() {
        System.out.println("=== HASHMAP DEMONSTRATION ===");

        Map<String, Integer> studentGrades = new HashMap<>();
        studentGrades.put("Alice", 95);
        studentGrades.put("Bob", 87);
        studentGrades.put("Charlie", 92);
        studentGrades.put("Diana", 88);

        System.out.println("Student grades: " + studentGrades);
        System.out.println("Alice's grade: " + studentGrades.get("Alice"));
        System.out.println("Contains key 'Bob': " + studentGrades.containsKey("Bob"));
        System.out.println("Contains value 90: " + studentGrades.containsValue(90));

        // Update value
        studentGrades.put("Alice", 97); // Overwrites existing value
        System.out.println("After updating Alice: " + studentGrades);

        // Default values
        System.out.println("Eve's grade (default 0): " + studentGrades.getOrDefault("Eve", 0));

        // Compute if absent
        studentGrades.computeIfAbsent("Eve", k -> 85);
        System.out.println("After computeIfAbsent: " + studentGrades);

        // Iteration
        System.out.println("All entries:");
        for (Map.Entry<String, Integer> entry : studentGrades.entrySet()) {
            System.out.println("  " + entry.getKey() + ": " + entry.getValue());
        }

        // Only keys
        System.out.println("All students: " + studentGrades.keySet());

        // Only values
        System.out.println("All grades: " + studentGrades.values());
        System.out.println();
    }

    /**
     * LinkedHashMap demonstration - Maintains insertion order
     */
    public static void demonstrateLinkedHashMap() {
        System.out.println("=== LINKEDHASHMAP DEMONSTRATION ===");

        LinkedHashMap<String, String> capitals = new LinkedHashMap<>();
        capitals.put("Japan", "Tokyo");
        capitals.put("France", "Paris");
        capitals.put("Germany", "Berlin");
        capitals.put("Italy", "Rome");

        System.out.println("Capitals (insertion order): " + capitals);

        // Access order (for LRU cache simulation)
        LinkedHashMap<String, Integer> accessMap = new LinkedHashMap<>(16, 0.75f, true);
        accessMap.put("A", 1);
        accessMap.put("B", 2);
        accessMap.put("C", 3);

        System.out.println("Before access: " + accessMap);
        accessMap.get("A"); // Access A
        System.out.println("After accessing A: " + accessMap);
        System.out.println();
    }

    /**
     * TreeMap demonstration - Sorted map
     */
    public static void demonstrateTreeMap() {
        System.out.println("=== TREEMAP DEMONSTRATION ===");

        TreeMap<String, Integer> sortedMap = new TreeMap<>();
        sortedMap.put("Charlie", 85);
        sortedMap.put("Alice", 95);
        sortedMap.put("Bob", 90);

        System.out.println("TreeMap (sorted by key): " + sortedMap);
        System.out.println("First key: " + sortedMap.firstKey());
        System.out.println("Last key: " + sortedMap.lastKey());

        // NavigableMap operations
        System.out.println("Lower key than 'Bob': " + sortedMap.lowerKey("Bob"));
        System.out.println("Higher key than 'Bob': " + sortedMap.higherKey("Bob"));
        System.out.println("Floor key of 'Ben': " + sortedMap.floorKey("Ben"));
        System.out.println("Ceiling key of 'Ben': " + sortedMap.ceilingKey("Ben"));

        // Submap operations
        System.out.println("HeadMap (< 'Bob'): " + sortedMap.headMap("Bob"));
        System.out.println("TailMap (>= 'Bob'): " + sortedMap.tailMap("Bob"));
        System.out.println("SubMap ['Alice', 'Charlie'): " + sortedMap.subMap("Alice", "Charlie"));
        System.out.println();
    }

    /**
     * Hashtable demonstration - Synchronized HashMap (legacy)
     */
    public static void demonstrateHashtable() {
        System.out.println("=== HASHTABLE DEMONSTRATION ===");

        Hashtable<String, String> config = new Hashtable<>();
        config.put("db.host", "localhost");
        config.put("db.port", "5432");
        config.put("db.name", "mydb");

        System.out.println("Configuration: " + config);

        // Hashtable is synchronized (thread-safe)
        System.out.println("Thread-safe operations available");
        System.out.println();
    }
}

// ==========================================
// 4. ADVANCED COLLECTIONS FEATURES
// ==========================================

/**
 * Advanced collections features and utilities
 */
class AdvancedCollections {

    /**
     * Collections utility class demonstration
     */
    public static void demonstrateCollectionsUtils() {
        System.out.println("=== COLLECTIONS UTILITIES ===");

        List<Integer> numbers = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6);
        System.out.println("Original: " + numbers);

        // Sorting
        List<Integer> sortedList = new ArrayList<>(numbers);
        Collections.sort(sortedList);
        System.out.println("Sorted: " + sortedList);

        // Reverse
        Collections.reverse(sortedList);
        System.out.println("Reversed: " + sortedList);

        // Binary search (requires sorted list)
        Collections.sort(sortedList);
        int index = Collections.binarySearch(sortedList, 5);
        System.out.println("Binary search for 5: index " + index);

        // Shuffle
        List<Integer> shuffled = new ArrayList<>(numbers);
        Collections.shuffle(shuffled);
        System.out.println("Shuffled: " + shuffled);

        // Fill
        List<String> filled = new ArrayList<>(Arrays.asList("A", "B", "C", "D"));
        Collections.fill(filled, "X");
        System.out.println("Filled: " + filled);

        // Frequency
        int freq = Collections.frequency(numbers, 1);
        System.out.println("Frequency of 1: " + freq);

        // Min/Max
        System.out.println("Min: " + Collections.min(numbers));
        System.out.println("Max: " + Collections.max(numbers));
        System.out.println();
    }

    /**
     * Arrays utility class demonstration
     */
    public static void demonstrateArraysUtils() {
        System.out.println("=== ARRAYS UTILITIES ===");

        int[] numbers = {3, 1, 4, 1, 5, 9, 2, 6};
        System.out.println("Original array: " + Arrays.toString(numbers));

        // Sorting
        int[] sorted = numbers.clone();
        Arrays.sort(sorted);
        System.out.println("Sorted: " + Arrays.toString(sorted));

        // Binary search
        int index = Arrays.binarySearch(sorted, 5);
        System.out.println("Binary search for 5: index " + index);

        // Fill
        int[] filled = new int[5];
        Arrays.fill(filled, 42);
        System.out.println("Filled array: " + Arrays.toString(filled));

        // Copy
        int[] copied = Arrays.copyOf(numbers, numbers.length);
        System.out.println("Copied: " + Arrays.toString(copied));

        // Copy range
        int[] range = Arrays.copyOfRange(numbers, 2, 6);
        System.out.println("Range copy (2-6): " + Arrays.toString(range));

        // Equals
        System.out.println("Arrays equal: " + Arrays.equals(numbers, copied));

        // Multi-dimensional arrays
        int[][] matrix = {{1, 2}, {3, 4}};
        System.out.println("2D array: " + Arrays.deepToString(matrix));
        System.out.println();
    }

    /**
     * Comparator and Comparable demonstration
     */
    public static void demonstrateComparators() {
        System.out.println("=== COMPARATORS DEMONSTRATION ===");

        List<Student> students = Arrays.asList(
            new Student("Alice", 85, 20),
            new Student("Bob", 92, 19),
            new Student("Charlie", 78, 21),
            new Student("Diana", 95, 20)
        );

        System.out.println("Original: " + students);

        // Sort by grade (natural ordering - implements Comparable)
        Collections.sort(students);
        System.out.println("Sorted by grade: " + students);

        // Sort by name using Comparator
        students.sort(Comparator.comparing(Student::getName));
        System.out.println("Sorted by name: " + students);

        // Sort by age using Comparator
        students.sort(Comparator.comparingInt(Student::getAge));
        System.out.println("Sorted by age: " + students);

        // Complex sorting: grade descending, then name ascending
        students.sort(Comparator.comparing(Student::getGrade).reversed()
                             .thenComparing(Student::getName));
        System.out.println("Grade desc, name asc: " + students);
        System.out.println();
    }

    /**
     * Student class for comparator demonstration
     */
    static class Student implements Comparable<Student> {
        private String name;
        private int grade;
        private int age;

        public Student(String name, int grade, int age) {
            this.name = name;
            this.grade = grade;
            this.age = age;
        }

        public String getName() { return name; }
        public int getGrade() { return grade; }
        public int getAge() { return age; }

        @Override
        public int compareTo(Student other) {
            return Integer.compare(this.grade, other.grade);
        }

        @Override
        public String toString() {
            return String.format("%s(%d,%d)", name, grade, age);
        }
    }
}

// ==========================================
// 5. GENERICS AND TYPE SAFETY
// ==========================================

/**
 * Generic classes and methods demonstration
 */
class GenericCollections {

    /**
     * Generic Pair class
     */
    static class Pair<K, V> {
        private K key;
        private V value;

        public Pair(K key, V value) {
            this.key = key;
            this.value = value;
        }

        public K getKey() { return key; }
        public V getValue() { return value; }

        @Override
        public String toString() {
            return "(" + key + ", " + value + ")";
        }
    }

    /**
     * Generic utility methods
     */
    public static <T> void printList(List<T> list) {
        for (T item : list) {
            System.out.print(item + " ");
        }
        System.out.println();
    }

    public static <T> List<T> reverseList(List<T> list) {
        List<T> reversed = new ArrayList<>(list);
        Collections.reverse(reversed);
        return reversed;
    }

    public static <T> boolean containsDuplicate(List<T> list) {
        Set<T> set = new HashSet<>(list);
        return set.size() < list.size();
    }

    /**
     * Bounded type parameters
     */
    public static <T extends Number> double sum(List<T> numbers) {
        double total = 0.0;
        for (T num : numbers) {
            total += num.doubleValue();
        }
        return total;
    }

    /**
     * Wildcard demonstration
     */
    public static void printNumbers(List<? extends Number> numbers) {
        for (Number num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static void addNumbers(List<? super Integer> list) {
        list.add(1);
        list.add(2);
        list.add(3);
    }

    /**
     * Generic collections demonstration
     */
    public static void demonstrateGenerics() {
        System.out.println("=== GENERICS DEMONSTRATION ===");

        // Generic Pair
        Pair<String, Integer> person = new Pair<>("Alice", 25);
        System.out.println("Person pair: " + person);

        // Generic methods
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        System.out.print("Original list: ");
        printList(names);

        List<String> reversed = reverseList(names);
        System.out.print("Reversed list: ");
        printList(reversed);

        System.out.println("Contains duplicates: " + containsDuplicate(names));

        // Bounded generics
        List<Integer> integers = Arrays.asList(1, 2, 3, 4, 5);
        System.out.println("Sum of integers: " + sum(integers));

        List<Double> doubles = Arrays.asList(1.1, 2.2, 3.3);
        System.out.println("Sum of doubles: " + sum(doubles));

        // Wildcards
        System.out.print("Numbers: ");
        printNumbers(integers);

        List<Number> numbers = new ArrayList<>();
        addNumbers(numbers);
        System.out.println("Added numbers: " + numbers);
        System.out.println();
    }
}

// ==========================================
// 6. PERFORMANCE COMPARISONS
// ==========================================

/**
 * Performance comparison between different collection types
 */
class PerformanceComparison {

    private static final int OPERATIONS = 100000;

    public static void compareListPerformance() {
        System.out.println("=== LIST PERFORMANCE COMPARISON ===");
        System.out.println("Operations: " + OPERATIONS);

        // ArrayList performance
        List<Integer> arrayList = new ArrayList<>();
        long startTime = System.nanoTime();
        for (int i = 0; i < OPERATIONS; i++) {
            arrayList.add(i);
        }
        long arrayListTime = System.nanoTime() - startTime;
        System.out.println("ArrayList add time: " + arrayListTime / 1000000 + " ms");

        // LinkedList performance
        List<Integer> linkedList = new LinkedList<>();
        startTime = System.nanoTime();
        for (int i = 0; i < OPERATIONS; i++) {
            linkedList.add(i);
        }
        long linkedListTime = System.nanoTime() - startTime;
        System.out.println("LinkedList add time: " + linkedListTime / 1000000 + " ms");

        // Random access comparison
        startTime = System.nanoTime();
        for (int i = 0; i < OPERATIONS / 100; i++) {
            arrayList.get(i);
        }
        long arrayAccessTime = System.nanoTime() - startTime;

        startTime = System.nanoTime();
        for (int i = 0; i < OPERATIONS / 100; i++) {
            linkedList.get(i);
        }
        long linkedAccessTime = System.nanoTime() - startTime;

        System.out.println("ArrayList random access: " + arrayAccessTime / 1000000 + " ms");
        System.out.println("LinkedList random access: " + linkedAccessTime / 1000000 + " ms");
        System.out.println();
    }

    public static void compareSetPerformance() {
        System.out.println("=== SET PERFORMANCE COMPARISON ===");

        Set<Integer> hashSet = new HashSet<>();
        Set<Integer> treeSet = new TreeSet<>();
        Set<Integer> linkedHashSet = new LinkedHashSet<>();

        // Add operations
        long startTime = System.nanoTime();
        for (int i = 0; i < OPERATIONS / 10; i++) {
            hashSet.add(i);
        }
        long hashTime = System.nanoTime() - startTime;

        startTime = System.nanoTime();
        for (int i = 0; i < OPERATIONS / 10; i++) {
            treeSet.add(i);
        }
        long treeTime = System.nanoTime() - startTime;

        startTime = System.nanoTime();
        for (int i = 0; i < OPERATIONS / 10; i++) {
            linkedHashSet.add(i);
        }
        long linkedTime = System.nanoTime() - startTime;

        System.out.println("HashSet add time: " + hashTime / 1000000 + " ms");
        System.out.println("TreeSet add time: " + treeTime / 1000000 + " ms");
        System.out.println("LinkedHashSet add time: " + linkedTime / 1000000 + " ms");

        // Contains operations
        startTime = System.nanoTime();
        for (int i = 0; i < OPERATIONS / 10; i++) {
            hashSet.contains(i);
        }
        hashTime = System.nanoTime() - startTime;

        startTime = System.nanoTime();
        for (int i = 0; i < OPERATIONS / 10; i++) {
            treeSet.contains(i);
        }
        treeTime = System.nanoTime() - startTime;

        System.out.println("HashSet contains time: " + hashTime / 1000000 + " ms");
        System.out.println("TreeSet contains time: " + treeTime / 1000000 + " ms");
        System.out.println();
    }
}

// ==========================================
// MAIN METHOD - DEMONSTRATE ALL COLLECTIONS
// ==========================================

public class CollectionsFrameworkComplete {
    public static void main(String[] args) {
        System.out.println("==========================================");
        System.out.println("    COLLECTIONS FRAMEWORK COMPLETE");
        System.out.println("==========================================\n");

        // List demonstrations
        ListOperations.demonstrateArrayList();
        ListOperations.demonstrateLinkedList();
        ListOperations.demonstrateVector();
        ListOperations.demonstrateStack();

        // Set demonstrations
        SetOperations.demonstrateHashSet();
        SetOperations.demonstrateLinkedHashSet();
        SetOperations.demonstrateTreeSet();

        // Map demonstrations
        MapOperations.demonstrateHashMap();
        MapOperations.demonstrateLinkedHashMap();
        MapOperations.demonstrateTreeMap();
        MapOperations.demonstrateHashtable();

        // Advanced features
        AdvancedCollections.demonstrateCollectionsUtils();
        AdvancedCollections.demonstrateArraysUtils();
        AdvancedCollections.demonstrateComparators();

        // Generics
        GenericCollections.demonstrateGenerics();

        // Performance comparisons
        PerformanceComparison.compareListPerformance();
        PerformanceComparison.compareSetPerformance();

        System.out.println("==========================================");
        System.out.println("    ALL COLLECTIONS DEMONSTRATED");
        System.out.println("==========================================");
    }
}

/*
 * COMPILATION AND RUNNING INSTRUCTIONS:
 * ====================================
 *
 * 1. Save this file as: CollectionsFrameworkComplete.java
 * 2. Compile: javac CollectionsFrameworkComplete.java
 * 3. Run: java CollectionsFrameworkComplete
 *
 * EXPECTED OUTPUT:
 * ===============
 * The program demonstrates all major collection types:
 * - Lists: ArrayList, LinkedList, Vector, Stack
 * - Sets: HashSet, LinkedHashSet, TreeSet
 * - Maps: HashMap, LinkedHashMap, TreeMap, Hashtable
 * - Utilities: Collections, Arrays classes
 * - Advanced: Comparators, generics, performance comparisons
 *
 * KEY LEARNING POINTS:
 * ===================
 * 1. Choose the right collection for your use case:
 *    - ArrayList: Fast random access, good for read-heavy operations
 *    - LinkedList: Fast insertions/deletions, good for write-heavy operations
 *    - HashSet: Fast lookup, no duplicates, no order
 *    - TreeSet: Sorted, slower operations
 *    - HashMap: Fast key-value operations
 *    - TreeMap: Sorted keys
 *
 * 2. Understand time complexities:
 *    - ArrayList get/set: O(1)
 *    - LinkedList get: O(n), add/remove: O(1)
 *    - HashSet/Map operations: O(1) average
 *    - TreeSet/Map operations: O(log n)
 *
 * 3. Thread safety considerations:
 *    - Vector/Hashtable: Synchronized (legacy)
 *    - Collections.synchronizedList/Map: Wrapper approach
 *    - Concurrent collections: Modern approach
 *
 * INTERVIEW PREPARATION:
 * =====================
 * - When to use List vs Set vs Map?
 * - Difference between ArrayList and LinkedList?
 * - How does HashMap work internally?
 * - What is the difference between HashSet and TreeSet?
 * - How to make a collection thread-safe?
 * - Understanding fail-fast vs fail-safe iterators
 *
 * COMMON INTERVIEW QUESTIONS:
 * ==========================
 * - How to remove duplicates from a list?
 * - Find first non-repeated character in a string (using collections)
 * - Implement LRU cache using LinkedHashMap
 * - Group elements by some property (using streams/collectors)
 * - Find intersection/union of two arrays (using sets)
 */