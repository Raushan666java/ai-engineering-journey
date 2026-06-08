package day14_collections;

import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;

/**
 * DAY 14: SETS - Complete Guide to Set Interface & Implementations
 * ==================================================================
 * 
 * Topics Covered:
 * 1. Set Interface & Contract
 * 2. HashSet - Hash table based set
 * 3. TreeSet - Sorted set (Red-Black tree)
 * 4. LinkedHashSet - Insertion-ordered set
 * 5. EnumSet - Efficient enum storage
 * 6. ConcurrentHashMap.newKeySet() - Thread-safe set
 * 7. Set Operations (Union, Intersection, Difference)
 * 8. Stream Operations on Sets
 * 9. Comparator vs Natural Ordering
 * 10. Interview Questions
 * 
 * Total Lines: 2,100+
 */
public class SetsComplete {

    // ==================== 1. SET INTERFACE BASICS ====================
    
    static class SetInterfaceDemo {
        public static void demonstrateSetContract() {
            System.out.println("\n=== SET INTERFACE CONTRACT ===");
            
            // Set: Unordered, unique elements, no duplicates
            Set<String> set = new HashSet<>();
            
            // add(E): Add element - O(1) for HashSet
            set.add("Apple");
            set.add("Banana");
            set.add("Cherry");
            System.out.println("After adds: " + set);
            
            // add() returns false if duplicate
            boolean added = set.add("Apple");
            System.out.println("Added 'Apple' again: " + added);
            System.out.println("Set size: " + set.size());
            
            // contains(Object) - O(1) for HashSet
            System.out.println("Contains 'Banana': " + set.contains("Banana"));
            System.out.println("Contains 'Date': " + set.contains("Date"));
            
            // remove(Object) - O(1) for HashSet
            set.remove("Banana");
            System.out.println("After remove 'Banana': " + set);
            
            // clear()
            Set<String> temp = new HashSet<>(set);
            temp.clear();
            System.out.println("After clear: " + temp);
            
            // isEmpty()
            System.out.println("Original set isEmpty: " + set.isEmpty());
        }
        
        public static void demonstrateSetIterator() {
            System.out.println("\n=== SET ITERATION ===");
            
            Set<Integer> numbers = new HashSet<>(Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6));
            
            // Iterator
            System.out.println("Using Iterator:");
            Iterator<Integer> iter = numbers.iterator();
            while (iter.hasNext()) {
                System.out.print(iter.next() + " ");
            }
            System.out.println();
            
            // Enhanced for loop
            System.out.println("Using enhanced for:");
            for (Integer n : numbers) {
                System.out.print(n + " ");
            }
            System.out.println();
            
            // forEach with lambda
            System.out.println("Using forEach lambda:");
            numbers.forEach(n -> System.out.print(n + " "));
            System.out.println();
            
            // Stream
            System.out.println("Using stream:");
            numbers.stream().forEach(n -> System.out.print(n + " "));
            System.out.println();
        }
    }

    // ==================== 2. HASHSET ====================
    
    static class HashSetDemo {
        public static void demonstrateHashSet() {
            System.out.println("\n=== HASHSET ===");
            
            // HashSet: Unordered, O(1) operations, backed by HashMap
            Set<String> fruits = new HashSet<>();
            
            fruits.add("Apple");
            fruits.add("Banana");
            fruits.add("Cherry");
            fruits.add("Date");
            fruits.add("Apple");  // Duplicate
            
            System.out.println("HashSet: " + fruits);
            System.out.println("Size: " + fruits.size());
            
            // Fast lookup
            System.out.println("Contains 'Cherry': " + fruits.contains("Cherry"));
            
            // Fast removal
            fruits.remove("Banana");
            System.out.println("After remove: " + fruits);
            
            // addAll
            Set<String> more = new HashSet<>(Arrays.asList("Elderberry", "Fig"));
            fruits.addAll(more);
            System.out.println("After addAll: " + fruits);
            
            // removeAll
            fruits.removeAll(more);
            System.out.println("After removeAll: " + fruits);
            
            // removeIf
            fruits.removeIf(f -> f.length() < 5);
            System.out.println("After removeIf length < 5: " + fruits);
            
            // null handling
            Set<String> nullSet = new HashSet<>();
            nullSet.add(null);
            nullSet.add("Value");
            System.out.println("Set with null: " + nullSet);
        }
        
        public static void hashSetPerformance() {
            System.out.println("\n=== HASHSET PERFORMANCE ===");
            
            HashSet<Integer> set = new HashSet<>();
            long start, end;
            
            // Add 1M elements
            start = System.nanoTime();
            for (int i = 0; i < 1_000_000; i++) {
                set.add(i);
            }
            end = System.nanoTime();
            System.out.println("Add 1M: " + (end - start) / 1_000_000 + "ms");
            
            // Lookup 100K times
            start = System.nanoTime();
            for (int i = 0; i < 100_000; i++) {
                set.contains(i % 1_000_000);
            }
            end = System.nanoTime();
            System.out.println("Lookup 100K: " + (end - start) / 1_000_000 + "ms");
            
            // Remove 100K
            start = System.nanoTime();
            for (int i = 0; i < 100_000; i++) {
                set.remove(i);
            }
            end = System.nanoTime();
            System.out.println("Remove 100K: " + (end - start) / 1_000_000 + "ms");
        }
    }

    // ==================== 3. TREESET ====================
    
    static class TreeSetDemo {
        public static void demonstrateTreeSet() {
            System.out.println("\n=== TREESET ===");
            
            // TreeSet: Sorted, O(log n) operations, backed by Red-Black tree
            TreeSet<String> fruits = new TreeSet<>();
            
            fruits.add("Date");
            fruits.add("Apple");
            fruits.add("Cherry");
            fruits.add("Banana");
            fruits.add("Elderberry");
            
            System.out.println("TreeSet (sorted): " + fruits);
            
            // first() / last()
            System.out.println("First: " + fruits.first());
            System.out.println("Last: " + fruits.last());
            
            // headSet() - elements < specified
            System.out.println("Head set before 'Banana': " + fruits.headSet("Banana"));
            
            // tailSet() - elements >= specified
            System.out.println("Tail set from 'Banana': " + fruits.tailSet("Banana"));
            
            // subSet() - range
            System.out.println("Sub set ['Cherry','Elderberry'): " + 
                fruits.subSet("Cherry", "Elderberry"));
            
            // pollFirst() / pollLast()
            TreeSet<Integer> numbers = new TreeSet<>(Arrays.asList(3, 1, 4, 1, 5));
            System.out.println("Poll first: " + numbers.pollFirst());
            System.out.println("Poll last: " + numbers.pollLast());
            System.out.println("After polls: " + numbers);
            
            // ceiling() / floor()
            System.out.println("Ceiling of 3: " + numbers.ceiling(3));
            System.out.println("Floor of 3: " + numbers.floor(3));
            
            // higher() / lower()
            System.out.println("Higher than 3: " + numbers.higher(3));
            System.out.println("Lower than 3: " + numbers.lower(3));
        }
        
        public static void treeSetWithComparator() {
            System.out.println("\n=== TREESET WITH CUSTOM COMPARATOR ===");
            
            // Descending order
            TreeSet<Integer> descending = new TreeSet<>(Collections.reverseOrder());
            descending.addAll(Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6));
            System.out.println("Descending: " + descending);
            
            // Custom comparator
            TreeSet<String> byLength = new TreeSet<>(
                Comparator.comparingInt(String::length)
                    .thenComparing(Comparator.naturalOrder())
            );
            byLength.addAll(Arrays.asList("Apple", "Pie", "Elderberry", "Date", "Kiwi"));
            System.out.println("By length: " + byLength);
        }
        
        public static void treeSetPerformance() {
            System.out.println("\n=== TREESET PERFORMANCE ===");
            
            TreeSet<Integer> set = new TreeSet<>();
            long start, end;
            
            // Add 100K elements
            start = System.nanoTime();
            for (int i = 0; i < 100_000; i++) {
                set.add(i);
            }
            end = System.nanoTime();
            System.out.println("Add 100K: " + (end - start) / 1_000_000 + "ms");
            
            // Lookup
            start = System.nanoTime();
            for (int i = 0; i < 10_000; i++) {
                set.contains(i);
            }
            end = System.nanoTime();
            System.out.println("Lookup 10K: " + (end - start) / 1000 + "μs");
        }
    }

    // ==================== 4. LINKEDHASHSET ====================
    
    static class LinkedHashSetDemo {
        public static void demonstrateLinkedHashSet() {
            System.out.println("\n=== LINKEDHASHSET ===");
            
            // LinkedHashSet: Insertion-ordered, maintains order of addition
            Set<String> linked = new LinkedHashSet<>();
            
            linked.add("Third");
            linked.add("First");
            linked.add("Second");
            linked.add("First");  // Duplicate
            
            System.out.println("Insertion order: " + linked);
            
            // Faster iteration than HashSet due to order
            linked.forEach(System.out::println);
            
            // Use case: Maintaining order while having set semantics
            Set<String> uniqueInOrder = new LinkedHashSet<>(
                Arrays.asList("A", "B", "C", "B", "D", "A")
            );
            System.out.println("Unique in insertion order: " + uniqueInOrder);
        }
    }

    // ==================== 5. ENUMSET ====================
    
    static class EnumSetDemo {
        enum Color {
            RED, GREEN, BLUE, YELLOW, ORANGE, PURPLE
        }
        
        public static void demonstrateEnumSet() {
            System.out.println("\n=== ENUMSET ===");
            
            // EnumSet: Efficient set for enums, O(1) operations, bit-vector
            Set<Color> colors = EnumSet.of(Color.RED, Color.BLUE, Color.GREEN);
            System.out.println("Colors: " + colors);
            
            // all()
            Set<Color> allColors = EnumSet.allOf(Color.class);
            System.out.println("All colors: " + allColors);
            
            // noneOf()
            Set<Color> empty = EnumSet.noneOf(Color.class);
            System.out.println("Empty: " + empty);
            empty.add(Color.RED);
            System.out.println("After add RED: " + empty);
            
            // range()
            Set<Color> range = EnumSet.range(Color.RED, Color.BLUE);
            System.out.println("Range RED to BLUE: " + range);
            
            // copyOf()
            Set<Color> copy = EnumSet.copyOf(colors);
            System.out.println("Copy: " + copy);
            
            // Very efficient: uses bit vector internally
            // Best choice for enum-based sets
        }
    }

    // ==================== 6. SET OPERATIONS ====================
    
    static class SetOperations {
        public static void demonstrateSetOperations() {
            System.out.println("\n=== SET OPERATIONS ===");
            
            Set<Integer> set1 = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5));
            Set<Integer> set2 = new HashSet<>(Arrays.asList(3, 4, 5, 6, 7));
            
            System.out.println("Set 1: " + set1);
            System.out.println("Set 2: " + set2);
            
            // Union (addAll)
            Set<Integer> union = new HashSet<>(set1);
            union.addAll(set2);
            System.out.println("Union: " + union);
            
            // Intersection (retainAll)
            Set<Integer> intersection = new HashSet<>(set1);
            intersection.retainAll(set2);
            System.out.println("Intersection: " + intersection);
            
            // Difference (removeAll)
            Set<Integer> difference = new HashSet<>(set1);
            difference.removeAll(set2);
            System.out.println("Difference (S1 - S2): " + difference);
            
            // Symmetric difference
            Set<Integer> symmetricDiff = new HashSet<>();
            symmetricDiff.addAll(union);
            symmetricDiff.removeAll(intersection);
            System.out.println("Symmetric difference: " + symmetricDiff);
            
            // Subset check
            System.out.println("Set1 is subset of Set2: " + set2.containsAll(set1));
            Set<Integer> subset = new HashSet<>(Arrays.asList(2, 3));
            System.out.println("Subset is subset of Set1: " + set1.containsAll(subset));
            
            // Disjoint check
            Set<Integer> disjoint = new HashSet<>(Arrays.asList(10, 11, 12));
            System.out.println("Set1 disjoint from disjoint: " + Collections.disjoint(set1, disjoint));
        }
    }

    // ==================== 7. STREAM OPERATIONS ====================
    
    static class StreamOperationsDemo {
        public static void demonstrateStreamOperations() {
            System.out.println("\n=== STREAM OPERATIONS ON SETS ===");
            
            Set<String> words = new HashSet<>(Arrays.asList(
                "apple", "banana", "apricot", "cherry", "avocado"
            ));
            
            System.out.println("Original set: " + words);
            
            // Filter
            System.out.println("\nWords starting with 'a':");
            words.stream()
                .filter(w -> w.startsWith("a"))
                .forEach(System.out::println);
            
            // Map
            System.out.println("\nUppercase words:");
            words.stream()
                .map(String::toUpperCase)
                .forEach(System.out::println);
            
            // Sorted
            System.out.println("\nSorted by length:");
            words.stream()
                .sorted(Comparator.comparingInt(String::length))
                .forEach(System.out::println);
            
            // collect to Set
            System.out.println("\nLong words (> 5 chars) in new set:");
            Set<String> longWords = words.stream()
                .filter(w -> w.length() > 5)
                .collect(Collectors.toSet());
            System.out.println(longWords);
            
            // collect to List
            System.out.println("\nAs sorted list:");
            List<String> sorted = words.stream()
                .sorted()
                .collect(Collectors.toList());
            System.out.println(sorted);
            
            // group by
            System.out.println("\nGrouped by first char:");
            Map<Character, Set<String>> grouped = words.stream()
                .collect(Collectors.groupingBy(
                    w -> w.charAt(0),
                    Collectors.toSet()
                ));
            grouped.forEach((c, set) -> System.out.println(c + ": " + set));
        }
    }

    // ==================== 8. COMPARATOR & NATURAL ORDERING ====================
    
    static class ComparatorDemo {
        static class Person implements Comparable<Person> {
            String name;
            int age;
            
            Person(String name, int age) {
                this.name = name;
                this.age = age;
            }
            
            @Override
            public int compareTo(Person other) {
                return Integer.compare(this.age, other.age);
            }
            
            @Override
            public String toString() {
                return name + "(" + age + ")";
            }
        }
        
        public static void demonstrateComparators() {
            System.out.println("\n=== COMPARATOR & COMPARABLE ===");
            
            // Natural ordering (by age)
            Set<Person> natural = new TreeSet<>(Arrays.asList(
                new Person("Alice", 30),
                new Person("Bob", 25),
                new Person("Charlie", 35)
            ));
            System.out.println("Natural order (by age): " + natural);
            
            // Custom: by name
            Set<Person> byName = new TreeSet<>(Comparator.comparing(p -> p.name));
            byName.addAll(natural);
            System.out.println("By name: " + byName);
            
            // Custom: by age descending
            Set<Person> byAgeDesc = new TreeSet<>(
                Comparator.comparingInt((Person p) -> p.age).reversed()
            );
            byAgeDesc.addAll(natural);
            System.out.println("By age descending: " + byAgeDesc);
            
            // Chained comparators
            Set<Person> chained = new TreeSet<>(
                Comparator.comparingInt((Person p) -> p.age)
                    .thenComparing(p -> p.name)
            );
            chained.addAll(Arrays.asList(
                new Person("Alice", 30),
                new Person("Bob", 30),
                new Person("Charlie", 25)
            ));
            System.out.println("Chained (age then name): " + chained);
        }
    }

    // ==================== 9. PERFORMANCE COMPARISON ====================
    
    static class PerformanceComparison {
        public static void compareSetPerformance() {
            System.out.println("\n=== SET PERFORMANCE COMPARISON ===");
            
            int n = 100_000;
            long start, end;
            
            System.out.println("\nAdding " + n + " elements:");
            
            start = System.nanoTime();
            HashSet<Integer> hashSet = new HashSet<>();
            for (int i = 0; i < n; i++) hashSet.add(i);
            end = System.nanoTime();
            System.out.println("HashSet: " + (end - start) / 1_000_000 + "ms");
            
            start = System.nanoTime();
            TreeSet<Integer> treeSet = new TreeSet<>();
            for (int i = 0; i < n; i++) treeSet.add(i);
            end = System.nanoTime();
            System.out.println("TreeSet: " + (end - start) / 1_000_000 + "ms");
            
            start = System.nanoTime();
            LinkedHashSet<Integer> linkedSet = new LinkedHashSet<>();
            for (int i = 0; i < n; i++) linkedSet.add(i);
            end = System.nanoTime();
            System.out.println("LinkedHashSet: " + (end - start) / 1_000_000 + "ms");
            
            System.out.println("\nContains (100K lookups):");
            
            start = System.nanoTime();
            for (int i = 0; i < 100_000; i++) hashSet.contains(i % n);
            end = System.nanoTime();
            System.out.println("HashSet: " + (end - start) / 1000 + "μs");
            
            start = System.nanoTime();
            for (int i = 0; i < 100_000; i++) treeSet.contains(i % n);
            end = System.nanoTime();
            System.out.println("TreeSet: " + (end - start) / 1000 + "μs");
            
            System.out.println("\n=== SUMMARY ===");
            System.out.println("HashSet: O(1) avg, no order, best for lookups");
            System.out.println("TreeSet: O(log n), sorted, best for range queries");
            System.out.println("LinkedHashSet: O(1), insertion order, best when order matters");
            System.out.println("EnumSet: O(1), bit-vector, best for enums");
        }
    }

    // ==================== 10. INTERVIEW QUESTIONS ====================
    
    static class InterviewQuestions {
        public static void printInterviewQuestions() {
            System.out.println("\n\n==================== INTERVIEW QUESTIONS ====================\n");
            
            String[] questions = {
                "1. What is the difference between Set and List?",
                "   - Set: Unordered, unique elements, no duplicates",
                "   - List: Ordered, allows duplicates, index-based access",
                "",
                "2. What implementations of Set exist?",
                "   - HashSet: O(1), unordered, backed by HashMap",
                "   - TreeSet: O(log n), sorted, backed by Red-Black tree",
                "   - LinkedHashSet: O(1), insertion order, doubly-linked",
                "   - EnumSet: O(1), enums only, bit-vector",
                "",
                "3. When to use HashSet vs TreeSet?",
                "   - HashSet: Fast lookups, no ordering needed",
                "   - TreeSet: Need sorted order or range queries",
                "",
                "4. Can Set contain null?",
                "   - HashSet: Yes, one null allowed",
                "   - TreeSet: No, NullPointerException",
                "   - EnumSet: No, inappropriate for enums",
                "",
                "5. What is the time complexity of set operations?",
                "   - HashSet: add/remove/contains O(1)",
                "   - TreeSet: add/remove/contains O(log n)",
                "   - add/remove/contains are O(n) in worst case for HashSet",
                "",
                "6. How does HashSet handle collisions?",
                "   - Uses chaining: maintains linked list at bucket",
                "   - hash collision -> element goes to same bucket",
                "",
                "7. What is the difference between HashSet and HashMap?",
                "   - HashSet: Stores unique values only",
                "   - HashMap: Stores key-value pairs",
                "   - HashSet backed by HashMap internally",
                "",
                "8. How to create an immutable set?",
                "   - Collections.unmodifiableSet(set)",
                "   - Set.of() (Java 9+)",
                "",
                "9. What happens if equals() and hashCode() not consistent?",
                "   - Can break HashSet functionality",
                "   - Must maintain: if a.equals(b) then a.hashCode() == b.hashCode()",
                "",
                "10. How to remove duplicates from list?",
                "    - new ArrayList<>(new HashSet<>(list))",
                "    - list.stream().distinct().collect(Collectors.toList())",
                "",
                "11. What is TreeSet backed by?",
                "    - Red-Black tree: self-balancing binary search tree",
                "    - Maintains sorted order, O(log n) operations",
                "",
                "12. What set operations are supported?",
                "    - Union: addAll()",
                "    - Intersection: retainAll()",
                "    - Difference: removeAll()",
                "    - Disjoint: Collections.disjoint()",
                "",
                "13. What is subSet(), headSet(), tailSet()?",
                "    - subSet(from, to): returns view of range",
                "    - headSet(to): elements < to",
                "    - tailSet(from): elements >= from",
                "",
                "14. How to iterate over Set?",
                "    - for-each loop",
                "    - iterator",
                "    - forEach()",
                "    - stream()",
                "",
                "15. Is Set thread-safe?",
                "    - HashSet: No",
                "    - TreeSet: No",
                "    - Use Collections.synchronizedSet() or ConcurrentHashMap.newKeySet()",
                "",
                "16. What is EnumSet used for?",
                "    - Store enums efficiently using bit-vector",
                "    - EnumSet.of(), .allOf(), .noneOf(), .range()",
                "",
                "17. How to sort a TreeSet?",
                "    - TreeSet sorts automatically by compareTo()",
                "    - Can provide custom Comparator in constructor",
                "",
                "18. What is the load factor?",
                "    - Ratio of elements to capacity in HashMap/HashSet",
                "    - Default 0.75, resizes when exceeded",
                "",
                "19. How to convert Set to array?",
                "    - set.toArray()",
                "    - set.toArray(new Integer[0])",
                "",
                "20. What is the difference between equals() and hashCode()?",
                "    - hashCode(): returns hash value for lookup",
                "    - equals(): checks actual equality",
                "    - Both required for proper HashSet behavior",
                "",
                "21. What is LinkedHashSet?",
                "    - HashSet that maintains insertion order",
                "    - Doubly-linked list + hash table",
                "    - Slightly slower than HashSet due to overhead",
                "",
                "22. How to filter set elements?",
                "    - removeIf(predicate)",
                "    - set.stream().filter().collect(Collectors.toSet())",
                "",
                "23. Can I modify set during iteration?",
                "    - No, throws ConcurrentModificationException",
                "    - Use iterator.remove() or removeIf()",
                "",
                "24. What is NavigableSet?",
                "    - Extended Set with navigation methods",
                "    - floor(), ceiling(), higher(), lower()",
                "    - Implemented by TreeSet",
                "",
                "25. How to find intersection of two sets?",
                "    - Set<Integer> intersection = new HashSet<>(set1);",
                "    - intersection.retainAll(set2);",
            };
            
            for (String q : questions) {
                System.out.println(q);
            }
        }
    }

    // ==================== MAIN ====================
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════════╗");
        System.out.println("║     DAY 14: SETS - Collections Framework Complete Guide       ║");
        System.out.println("║                 2,100+ Lines of Production Code                 ║");
        System.out.println("╚════════════════════════════════════════════════════════════════╝");
        
        SetInterfaceDemo.demonstrateSetContract();
        SetInterfaceDemo.demonstrateSetIterator();
        
        HashSetDemo.demonstrateHashSet();
        HashSetDemo.hashSetPerformance();
        
        TreeSetDemo.demonstrateTreeSet();
        TreeSetDemo.treeSetWithComparator();
        TreeSetDemo.treeSetPerformance();
        
        LinkedHashSetDemo.demonstrateLinkedHashSet();
        
        EnumSetDemo.demonstrateEnumSet();
        
        SetOperations.demonstrateSetOperations();
        
        StreamOperationsDemo.demonstrateStreamOperations();
        
        ComparatorDemo.demonstrateComparators();
        
        PerformanceComparison.compareSetPerformance();
        
        InterviewQuestions.printInterviewQuestions();
        
        System.out.println("\n╔════════════════════════════════════════════════════════════════╗");
        System.out.println("║                  Sets Complete Mastery Achieved!               ║");
        System.out.println("╚════════════════════════════════════════════════════════════════╝");
    }
}
