/**
 * Day 9: Collections Algorithms and Utilities
 * 
 * Topics Covered:
 * - Collections utility class methods
 * - Sorting (natural order and custom comparators)
 * - Searching (binary search)
 * - Shuffling, reversing, rotating
 * - Synchronization and unmodifiable collections
 * - Comparator vs Comparable
 */

import java.util.*;

public class collections_algorithms {
    public static void main(String[] args) {
        System.out.println("=== Collections Algorithms and Utilities ===\n");
        
        // ============ SORTING ============
        
        // 1. Natural Order Sorting
        System.out.println("1. Natural Order Sorting:");
        List<Integer> numbers = new ArrayList<>(Arrays.asList(50, 20, 70, 10, 40, 30));
        
        System.out.println("Original: " + numbers);
        Collections.sort(numbers);
        System.out.println("Sorted (ascending): " + numbers);
        
        Collections.sort(numbers, Collections.reverseOrder());
        System.out.println("Sorted (descending): " + numbers);
        System.out.println();
        
        // 2. Custom Comparator Sorting
        System.out.println("2. Custom Comparator Sorting:");
        List<String> words = new ArrayList<>(Arrays.asList("Apple", "Banana", "Fig", "Cherry", "Date"));
        
        // Sort by length
        Collections.sort(words, (a, b) -> a.length() - b.length());
        System.out.println("Sorted by length: " + words);
        
        // Sort by length, then alphabetically
        Collections.sort(words, Comparator.comparingInt(String::length)
                                          .thenComparing(String::compareTo));
        System.out.println("Length then alphabetical: " + words);
        System.out.println();
        
        // 3. Comparable vs Comparator
        System.out.println("3. Comparable vs Comparator:");
        
        class Student implements Comparable<Student> {
            String name;
            int marks;
            
            Student(String name, int marks) {
                this.name = name;
                this.marks = marks;
            }
            
            // Natural ordering: by marks (descending)
            @Override
            public int compareTo(Student other) {
                return other.marks - this.marks;  // Descending
            }
            
            @Override
            public String toString() {
                return name + "(" + marks + ")";
            }
        }
        
        List<Student> students = new ArrayList<>();
        students.add(new Student("Alice", 85));
        students.add(new Student("Bob", 92));
        students.add(new Student("Charlie", 78));
        students.add(new Student("David", 92));
        
        // Sort using Comparable (by marks)
        Collections.sort(students);
        System.out.println("By marks (Comparable): " + students);
        
        // Sort using Comparator (by name)
        Collections.sort(students, Comparator.comparing(s -> s.name));
        System.out.println("By name (Comparator): " + students);
        
        // Sort by marks (desc) then name (asc)
        Collections.sort(students, 
            Comparator.comparingInt((Student s) -> s.marks).reversed()
                      .thenComparing(s -> s.name));
        System.out.println("By marks desc, name asc: " + students);
        System.out.println();
        
        // ============ SEARCHING ============
        
        // 4. Binary Search
        System.out.println("4. Binary Search:");
        List<Integer> sorted = new ArrayList<>(Arrays.asList(10, 20, 30, 40, 50, 60, 70));
        
        int index = Collections.binarySearch(sorted, 40);
        System.out.println("Search 40 in " + sorted);
        System.out.println("Found at index: " + index);
        
        int notFound = Collections.binarySearch(sorted, 25);
        System.out.println("Search 25: " + notFound + " (negative = not found)");
        System.out.println("Insertion point: " + (-notFound - 1));
        System.out.println();
        
        // 5. Binary Search with Comparator
        System.out.println("5. Binary Search with Comparator:");
        List<String> sortedWords = new ArrayList<>(Arrays.asList("Apple", "Banana", "Cherry", "Date", "Fig"));
        
        int idx = Collections.binarySearch(sortedWords, "Cherry");
        System.out.println("Search 'Cherry' in " + sortedWords);
        System.out.println("Found at index: " + idx);
        System.out.println();
        
        // ============ MANIPULATION ============
        
        // 6. Reverse
        System.out.println("6. Reverse:");
        List<Integer> nums = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        System.out.println("Original: " + nums);
        
        Collections.reverse(nums);
        System.out.println("Reversed: " + nums);
        System.out.println();
        
        // 7. Shuffle
        System.out.println("7. Shuffle:");
        List<String> deck = new ArrayList<>(Arrays.asList("A", "2", "3", "4", "5", "6", "7", "8", "9", "10"));
        System.out.println("Original: " + deck);
        
        Collections.shuffle(deck);
        System.out.println("Shuffled: " + deck);
        
        // Shuffle with seed for reproducibility
        Collections.shuffle(deck, new Random(42));
        System.out.println("Shuffled (seeded): " + deck);
        System.out.println();
        
        // 8. Rotate
        System.out.println("8. Rotate:");
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        System.out.println("Original: " + list);
        
        Collections.rotate(list, 2);  // Rotate right by 2
        System.out.println("Rotate right 2: " + list);
        
        Collections.rotate(list, -3);  // Rotate left by 3
        System.out.println("Rotate left 3: " + list);
        System.out.println();
        
        // 9. Fill and Copy
        System.out.println("9. Fill and Copy:");
        List<String> fillList = new ArrayList<>(Arrays.asList("A", "B", "C", "D", "E"));
        System.out.println("Original: " + fillList);
        
        Collections.fill(fillList, "X");
        System.out.println("After fill: " + fillList);
        
        List<String> source = new ArrayList<>(Arrays.asList("1", "2", "3"));
        List<String> dest = new ArrayList<>(Arrays.asList("A", "B", "C", "D", "E"));
        Collections.copy(dest, source);
        System.out.println("After copy: " + dest);
        System.out.println();
        
        // 10. Swap and Replace
        System.out.println("10. Swap and Replace:");
        List<Integer> swapList = new ArrayList<>(Arrays.asList(10, 20, 30, 40, 50));
        System.out.println("Original: " + swapList);
        
        Collections.swap(swapList, 1, 3);
        System.out.println("After swap(1, 3): " + swapList);
        
        Collections.replaceAll(swapList, 30, 99);
        System.out.println("Replace 30 with 99: " + swapList);
        System.out.println();
        
        // ============ MIN, MAX, FREQUENCY ============
        
        // 11. Min, Max, Frequency
        System.out.println("11. Min, Max, Frequency:");
        List<Integer> values = new ArrayList<>(Arrays.asList(5, 2, 8, 2, 9, 2, 3));
        
        System.out.println("List: " + values);
        System.out.println("Min: " + Collections.min(values));
        System.out.println("Max: " + Collections.max(values));
        System.out.println("Frequency of 2: " + Collections.frequency(values, 2));
        System.out.println();
        
        // 12. Disjoint
        System.out.println("12. Disjoint (no common elements):");
        Collection<Integer> c1 = Arrays.asList(1, 2, 3, 4);
        Collection<Integer> c2 = Arrays.asList(5, 6, 7, 8);
        Collection<Integer> c3 = Arrays.asList(3, 4, 5, 6);
        
        System.out.println("c1: " + c1);
        System.out.println("c2: " + c2);
        System.out.println("c3: " + c3);
        System.out.println("c1 and c2 disjoint: " + Collections.disjoint(c1, c2));
        System.out.println("c1 and c3 disjoint: " + Collections.disjoint(c1, c3));
        System.out.println();
        
        // ============ UNMODIFIABLE COLLECTIONS ============
        
        // 13. Unmodifiable Collections
        System.out.println("13. Unmodifiable Collections:");
        List<String> modifiable = new ArrayList<>(Arrays.asList("A", "B", "C"));
        List<String> unmodifiable = Collections.unmodifiableList(modifiable);
        
        System.out.println("Unmodifiable list: " + unmodifiable);
        
        try {
            unmodifiable.add("D");  // Throws UnsupportedOperationException
        } catch (UnsupportedOperationException e) {
            System.out.println("Cannot modify: " + e.getClass().getSimpleName());
        }
        
        // Changes to original reflect in unmodifiable view
        modifiable.add("D");
        System.out.println("After modifying original: " + unmodifiable);
        System.out.println();
        
        // 14. Synchronized Collections
        System.out.println("14. Synchronized Collections:");
        List<Integer> syncList = Collections.synchronizedList(new ArrayList<>());
        syncList.add(1);
        syncList.add(2);
        syncList.add(3);
        
        System.out.println("Synchronized list: " + syncList);
        
        // Must synchronize on collection when iterating
        synchronized(syncList) {
            Iterator<Integer> it = syncList.iterator();
            while (it.hasNext()) {
                System.out.print(it.next() + " ");
            }
        }
        System.out.println("\n");
        
        // 15. Singleton, Empty, and Checked Collections
        System.out.println("15. Special Collections:");
        
        // Singleton (immutable single element)
        Set<String> singleton = Collections.singleton("Only");
        System.out.println("Singleton: " + singleton);
        
        // Empty collections
        List<String> emptyList = Collections.emptyList();
        Set<String> emptySet = Collections.emptySet();
        Map<String, String> emptyMap = Collections.emptyMap();
        System.out.println("Empty list: " + emptyList);
        
        // Checked collection (runtime type checking)
        List<String> checkedList = Collections.checkedList(new ArrayList<>(), String.class);
        checkedList.add("Valid");
        System.out.println("Checked list: " + checkedList);
        System.out.println();
        
        // ============ ADVANCED COMPARATORS ============
        
        // 16. Advanced Comparator Chaining
        System.out.println("16. Advanced Comparator Chaining:");
        
        class Person {
            String name;
            int age;
            String city;
            
            Person(String name, int age, String city) {
                this.name = name;
                this.age = age;
                this.city = city;
            }
            
            @Override
            public String toString() {
                return name + "(" + age + "," + city + ")";
            }
        }
        
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 25, "NYC"));
        people.add(new Person("Bob", 30, "LA"));
        people.add(new Person("Charlie", 25, "NYC"));
        people.add(new Person("David", 30, "NYC"));
        
        // Sort by age (asc), then city (asc), then name (asc)
        people.sort(Comparator.comparingInt((Person p) -> p.age)
                              .thenComparing(p -> p.city)
                              .thenComparing(p -> p.name));
        
        System.out.println("Sorted by age, city, name:");
        people.forEach(System.out::println);
        System.out.println();
        
        // 17. Natural Order Comparator
        System.out.println("17. Natural Order Comparators:");
        List<String> strings = new ArrayList<>(Arrays.asList("Zebra", "Apple", "Mango", "Banana"));
        
        strings.sort(Comparator.naturalOrder());
        System.out.println("Natural order: " + strings);
        
        strings.sort(Comparator.reverseOrder());
        System.out.println("Reverse order: " + strings);
        
        // Null-safe comparators
        List<String> withNulls = new ArrayList<>(Arrays.asList("B", null, "A", null, "C"));
        withNulls.sort(Comparator.nullsFirst(Comparator.naturalOrder()));
        System.out.println("Nulls first: " + withNulls);
        
        withNulls.sort(Comparator.nullsLast(Comparator.naturalOrder()));
        System.out.println("Nulls last: " + withNulls);
        System.out.println();
        
        System.out.println("=== Collections Algorithms Complete ===");
    }
}

/**
 * Key Concepts:
 * 
 * SORTING:
 * - Collections.sort(list): Natural order (Comparable)
 * - Collections.sort(list, comparator): Custom order
 * - Stable sort (preserves order of equal elements)
 * - O(n log n) time complexity
 * 
 * COMPARABLE VS COMPARATOR:
 * - Comparable: Natural ordering (compareTo method in class)
 * - Comparator: External ordering (separate class/lambda)
 * - Use Comparable for default ordering
 * - Use Comparator for custom/multiple orderings
 * 
 * SEARCHING:
 * - Collections.binarySearch(): O(log n) on sorted list
 * - Returns index if found, negative if not found
 * - Negative value: insertion point = -(index) - 1
 * - List must be sorted before searching
 * 
 * MANIPULATION:
 * - reverse(): O(n) - reverses order
 * - shuffle(): O(n) - random permutation
 * - rotate(list, distance): O(n) - circular shift
 * - fill(list, obj): O(n) - replace all with obj
 * - copy(dest, src): O(n) - copy elements
 * - swap(list, i, j): O(1) - swap two elements
 * 
 * UNMODIFIABLE COLLECTIONS:
 * - Collections.unmodifiableList/Set/Map()
 * - Returns read-only view
 * - Throws UnsupportedOperationException on modification
 * - Changes to original reflect in view
 * 
 * SYNCHRONIZED COLLECTIONS:
 * - Collections.synchronizedList/Set/Map()
 * - Thread-safe wrapper
 * - Must manually synchronize when iterating
 * - Consider ConcurrentHashMap for better performance
 * 
 * SPECIAL COLLECTIONS:
 * - singleton(obj): Immutable single-element set
 * - emptyList/Set/Map(): Immutable empty collection
 * - checkedList/Set/Map(): Runtime type checking
 * - nCopies(n, obj): Immutable list of n copies
 * 
 * COMPARATOR METHODS:
 * - comparing(keyExtractor): Create comparator
 * - thenComparing(): Chain comparators
 * - reversed(): Reverse comparator
 * - naturalOrder()/reverseOrder(): Natural ordering
 * - nullsFirst()/nullsLast(): Handle nulls
 * 
 * Time Complexities:
 * - sort(): O(n log n)
 * - binarySearch(): O(log n)
 * - reverse(), shuffle(), rotate(), fill(): O(n)
 * - min(), max(): O(n)
 * - frequency(): O(n)
 * - disjoint(): O(n + m)
 * 
 * Interview Tips:
 * - Always sort before binary search
 * - Use Comparator.comparing() for clean code
 * - Chain comparators with thenComparing()
 * - Unmodifiable != immutable (original can change)
 * - Synchronize manually when iterating synchronized collections
 * - Empty collections are singleton instances (memory efficient)
 */
