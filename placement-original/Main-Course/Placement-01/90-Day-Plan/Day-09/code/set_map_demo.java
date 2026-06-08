/**
 * Day 9: Set and Map Implementations
 * 
 * Topics Covered:
 * - HashSet (no duplicates, unordered)
 * - LinkedHashSet (insertion order preserved)
 * - TreeSet (sorted, NavigableSet)
 * - HashMap (key-value pairs, unordered)
 * - LinkedHashMap (insertion order)
 * - TreeMap (sorted keys)
 */

import java.util.*;

public class set_map_demo {
    public static void main(String[] args) {
        System.out.println("=== Set and Map Implementations ===\n");
        
        // ============ SET IMPLEMENTATIONS ============
        
        // 1. HashSet Basics
        System.out.println("1. HashSet Basics:");
        HashSet<String> hashSet = new HashSet<>();
        
        hashSet.add("Apple");
        hashSet.add("Banana");
        hashSet.add("Cherry");
        hashSet.add("Apple");  // Duplicate - won't be added
        
        System.out.println("HashSet: " + hashSet);
        System.out.println("Size: " + hashSet.size());
        System.out.println("Contains 'Banana': " + hashSet.contains("Banana"));
        
        hashSet.remove("Cherry");
        System.out.println("After remove: " + hashSet);
        System.out.println();
        
        // 2. LinkedHashSet (Insertion Order)
        System.out.println("2. LinkedHashSet (Insertion Order):");
        LinkedHashSet<String> linkedHashSet = new LinkedHashSet<>();
        
        linkedHashSet.add("First");
        linkedHashSet.add("Second");
        linkedHashSet.add("Third");
        linkedHashSet.add("First");  // Duplicate ignored
        
        System.out.println("LinkedHashSet: " + linkedHashSet);
        System.out.println("Order preserved: insertion order maintained");
        System.out.println();
        
        // 3. TreeSet (Sorted)
        System.out.println("3. TreeSet (Sorted):");
        TreeSet<Integer> treeSet = new TreeSet<>();
        
        treeSet.add(50);
        treeSet.add(20);
        treeSet.add(70);
        treeSet.add(10);
        treeSet.add(40);
        
        System.out.println("TreeSet (auto-sorted): " + treeSet);
        System.out.println("First (min): " + treeSet.first());
        System.out.println("Last (max): " + treeSet.last());
        System.out.println("Lower than 50: " + treeSet.lower(50));
        System.out.println("Higher than 50: " + treeSet.higher(50));
        System.out.println("Subset [20, 70): " + treeSet.subSet(20, 70));
        System.out.println();
        
        // 4. TreeSet with Custom Comparator
        System.out.println("4. TreeSet with Custom Comparator:");
        TreeSet<String> reverseSet = new TreeSet<>(Collections.reverseOrder());
        reverseSet.addAll(Arrays.asList("Dog", "Cat", "Elephant", "Bear", "Ant"));
        
        System.out.println("Reverse order: " + reverseSet);
        
        // Custom comparator by length
        TreeSet<String> lengthSet = new TreeSet<>((a, b) -> {
            if (a.length() != b.length()) {
                return a.length() - b.length();
            }
            return a.compareTo(b);
        });
        lengthSet.addAll(Arrays.asList("Apple", "Banana", "Fig", "Cherry", "Date"));
        System.out.println("Sorted by length: " + lengthSet);
        System.out.println();
        
        // 5. Set Operations
        System.out.println("5. Set Operations:");
        Set<Integer> set1 = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5));
        Set<Integer> set2 = new HashSet<>(Arrays.asList(4, 5, 6, 7, 8));
        
        // Union
        Set<Integer> union = new HashSet<>(set1);
        union.addAll(set2);
        System.out.println("Set1: " + set1);
        System.out.println("Set2: " + set2);
        System.out.println("Union: " + union);
        
        // Intersection
        Set<Integer> intersection = new HashSet<>(set1);
        intersection.retainAll(set2);
        System.out.println("Intersection: " + intersection);
        
        // Difference
        Set<Integer> difference = new HashSet<>(set1);
        difference.removeAll(set2);
        System.out.println("Difference (Set1 - Set2): " + difference);
        
        // Symmetric difference
        Set<Integer> symmetricDiff = new HashSet<>(union);
        symmetricDiff.removeAll(intersection);
        System.out.println("Symmetric Difference: " + symmetricDiff);
        System.out.println();
        
        // ============ MAP IMPLEMENTATIONS ============
        
        // 6. HashMap Basics
        System.out.println("6. HashMap Basics:");
        HashMap<String, Integer> hashMap = new HashMap<>();
        
        hashMap.put("Alice", 25);
        hashMap.put("Bob", 30);
        hashMap.put("Charlie", 28);
        hashMap.put("Alice", 26);  // Updates existing value
        
        System.out.println("HashMap: " + hashMap);
        System.out.println("Get 'Bob': " + hashMap.get("Bob"));
        System.out.println("Contains key 'Alice': " + hashMap.containsKey("Alice"));
        System.out.println("Contains value 30: " + hashMap.containsValue(30));
        
        hashMap.remove("Charlie");
        System.out.println("After remove: " + hashMap);
        System.out.println();
        
        // 7. HashMap Iteration
        System.out.println("7. HashMap Iteration:");
        Map<String, String> capitals = new HashMap<>();
        capitals.put("India", "New Delhi");
        capitals.put("USA", "Washington DC");
        capitals.put("Japan", "Tokyo");
        capitals.put("France", "Paris");
        
        // Iterate keys
        System.out.println("Keys:");
        for (String country : capitals.keySet()) {
            System.out.println("  " + country);
        }
        
        // Iterate values
        System.out.println("Values:");
        for (String capital : capitals.values()) {
            System.out.println("  " + capital);
        }
        
        // Iterate entries
        System.out.println("Entries:");
        for (Map.Entry<String, String> entry : capitals.entrySet()) {
            System.out.println("  " + entry.getKey() + " -> " + entry.getValue());
        }
        
        // forEach with lambda
        System.out.println("Lambda forEach:");
        capitals.forEach((k, v) -> System.out.println("  " + k + " = " + v));
        System.out.println();
        
        // 8. HashMap Advanced Methods
        System.out.println("8. HashMap Advanced Methods:");
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Math", 85);
        scores.put("Science", 90);
        
        // getOrDefault
        System.out.println("English score: " + scores.getOrDefault("English", 0));
        
        // putIfAbsent
        scores.putIfAbsent("Math", 100);  // Won't update (key exists)
        scores.putIfAbsent("History", 88);  // Will add (key doesn't exist)
        System.out.println("After putIfAbsent: " + scores);
        
        // compute
        scores.compute("Math", (k, v) -> v == null ? 0 : v + 5);
        System.out.println("After compute (Math +5): " + scores);
        
        // merge
        scores.merge("Science", 10, Integer::sum);  // Add 10 to existing value
        System.out.println("After merge (Science +10): " + scores);
        System.out.println();
        
        // 9. LinkedHashMap (Insertion Order)
        System.out.println("9. LinkedHashMap (Insertion Order):");
        LinkedHashMap<String, Integer> linkedHashMap = new LinkedHashMap<>();
        
        linkedHashMap.put("First", 1);
        linkedHashMap.put("Second", 2);
        linkedHashMap.put("Third", 3);
        
        System.out.println("LinkedHashMap: " + linkedHashMap);
        System.out.println("Insertion order preserved");
        
        // LRU Cache using LinkedHashMap
        LinkedHashMap<String, String> lruCache = new LinkedHashMap<String, String>(16, 0.75f, true) {
            @Override
            protected boolean removeEldestEntry(Map.Entry<String, String> eldest) {
                return size() > 3;  // Max 3 entries
            }
        };
        
        lruCache.put("A", "Value A");
        lruCache.put("B", "Value B");
        lruCache.put("C", "Value C");
        System.out.println("LRU Cache: " + lruCache);
        
        lruCache.get("A");  // Access A (moves to end)
        lruCache.put("D", "Value D");  // B should be evicted
        System.out.println("After access & insert: " + lruCache);
        System.out.println();
        
        // 10. TreeMap (Sorted Keys)
        System.out.println("10. TreeMap (Sorted Keys):");
        TreeMap<Integer, String> treeMap = new TreeMap<>();
        
        treeMap.put(3, "Three");
        treeMap.put(1, "One");
        treeMap.put(5, "Five");
        treeMap.put(2, "Two");
        treeMap.put(4, "Four");
        
        System.out.println("TreeMap (sorted keys): " + treeMap);
        System.out.println("First key: " + treeMap.firstKey());
        System.out.println("Last key: " + treeMap.lastKey());
        System.out.println("Lower key than 3: " + treeMap.lowerKey(3));
        System.out.println("Higher key than 3: " + treeMap.higherKey(3));
        System.out.println("SubMap [2, 5): " + treeMap.subMap(2, 5));
        System.out.println();
        
        // 11. TreeMap with Custom Comparator
        System.out.println("11. TreeMap with Custom Comparator:");
        TreeMap<String, Integer> reversMap = new TreeMap<>(Collections.reverseOrder());
        reversMap.put("Zebra", 1);
        reversMap.put("Apple", 2);
        reversMap.put("Mango", 3);
        
        System.out.println("Reverse sorted keys: " + reversMap);
        System.out.println();
        
        // 12. Frequency Counter Example
        System.out.println("12. Frequency Counter (Common Pattern):");
        String text = "hello world hello java world";
        Map<String, Integer> wordCount = new HashMap<>();
        
        for (String word : text.split(" ")) {
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }
        
        System.out.println("Word frequencies: " + wordCount);
        
        // Alternative using merge
        Map<String, Integer> wordCount2 = new HashMap<>();
        for (String word : text.split(" ")) {
            wordCount2.merge(word, 1, Integer::sum);
        }
        System.out.println("Using merge: " + wordCount2);
        System.out.println();
        
        // 13. Null Handling
        System.out.println("13. Null Handling:");
        
        HashMap<String, Integer> hashMapNull = new HashMap<>();
        hashMapNull.put(null, 100);  // HashMap allows one null key
        hashMapNull.put("Key", null);  // HashMap allows null values
        System.out.println("HashMap with nulls: " + hashMapNull);
        
        // TreeMap<String, Integer> treeMapNull = new TreeMap<>();
        // treeMapNull.put(null, 100);  // NullPointerException - TreeMap doesn't allow null keys
        
        TreeMap<String, Integer> treeMapNull = new TreeMap<>();
        treeMapNull.put("Key", null);  // TreeMap allows null values
        System.out.println("TreeMap with null value: " + treeMapNull);
        System.out.println();
        
        System.out.println("=== Set and Map Demo Complete ===");
    }
}

/**
 * Key Concepts:
 * 
 * SET IMPLEMENTATIONS:
 * 
 * HashSet:
 * - Uses HashMap internally (elements as keys)
 * - No duplicates, unordered
 * - O(1) add, remove, contains (average)
 * - Allows one null element
 * - Use when: unique elements, no ordering needed
 * 
 * LinkedHashSet:
 * - Extends HashSet with doubly-linked list
 * - Insertion order preserved
 * - Slightly slower than HashSet
 * - Use when: unique elements + insertion order
 * 
 * TreeSet:
 * - Implements NavigableSet using Red-Black tree
 * - Elements sorted (natural order or comparator)
 * - O(log n) add, remove, contains
 * - No null elements
 * - Use when: unique sorted elements, range queries
 * 
 * MAP IMPLEMENTATIONS:
 * 
 * HashMap:
 * - Hash table implementation
 * - Unordered key-value pairs
 * - O(1) get, put, remove (average)
 * - One null key, multiple null values
 * - Use when: fast lookups, no ordering needed
 * 
 * LinkedHashMap:
 * - HashMap + doubly-linked list
 * - Insertion order or access order (LRU)
 * - Slightly slower than HashMap
 * - Use when: ordered iteration, LRU cache
 * 
 * TreeMap:
 * - NavigableMap using Red-Black tree
 * - Keys sorted (natural order or comparator)
 * - O(log n) get, put, remove
 * - No null keys, allows null values
 * - Use when: sorted keys, range queries
 * 
 * Time Complexities:
 * 
 * HashSet/HashMap:
 * - add/put: O(1) average, O(n) worst case
 * - remove: O(1) average
 * - contains/get: O(1) average
 * 
 * TreeSet/TreeMap:
 * - add/put: O(log n)
 * - remove: O(log n)
 * - contains/get: O(log n)
 * 
 * Interview Tips:
 * - HashMap for fast lookups, TreeMap for sorted keys
 * - Use getOrDefault to avoid null checks
 * - merge() simplifies frequency counting
 * - LinkedHashMap perfect for LRU cache
 * - TreeSet provides NavigableSet operations (floor, ceiling, etc.)
 * - Set operations: union (addAll), intersection (retainAll), difference (removeAll)
 */
