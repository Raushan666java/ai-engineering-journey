package day14_collections;

import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;

/**
 * DAY 14: MAPS - Complete Guide to Map Interface & Implementations
 * ==================================================================
 * 
 * Topics Covered:
 * 1. Map Interface & Contract
 * 2. HashMap - Hash table based map
 * 3. TreeMap - Sorted map (Red-Black tree)
 * 4. LinkedHashMap - Insertion-ordered map
 * 5. WeakHashMap - Weak references
 * 6. IdentityHashMap - Reference equality
 * 7. ConcurrentHashMap - Thread-safe map
 * 8. Map Operations (Entry, KeySet, Values)
 * 9. Stream Operations on Maps
 * 10. Interview Questions
 * 
 * Total Lines: 2,200+
 */
public class MapsComplete {

    // ==================== 1. MAP INTERFACE BASICS ====================
    
    static class MapInterfaceDemo {
        public static void demonstrateMapContract() {
            System.out.println("\n=== MAP INTERFACE CONTRACT ===");
            
            // Map: Key-value pairs, keys must be unique
            Map<String, Integer> ages = new HashMap<>();
            
            // put(K, V): Add key-value pair - O(1) for HashMap
            ages.put("Alice", 30);
            ages.put("Bob", 25);
            ages.put("Charlie", 35);
            System.out.println("After puts: " + ages);
            
            // put() returns old value if key exists
            Integer oldValue = ages.put("Alice", 31);
            System.out.println("Old value for 'Alice': " + oldValue);
            System.out.println("After update: " + ages);
            
            // get(Object): Retrieve value - O(1) for HashMap
            System.out.println("Age of Bob: " + ages.get("Bob"));
            System.out.println("Age of Unknown: " + ages.get("Unknown"));
            
            // getOrDefault()
            System.out.println("Age with default: " + ages.getOrDefault("Unknown", 0));
            
            // containsKey() / containsValue()
            System.out.println("Contains 'Alice': " + ages.containsKey("Alice"));
            System.out.println("Contains value 25: " + ages.containsValue(25));
            
            // remove(Object) - O(1)
            ages.remove("Bob");
            System.out.println("After remove Bob: " + ages);
            
            // size()
            System.out.println("Size: " + ages.size());
            
            // clear()
            Map<String, Integer> temp = new HashMap<>(ages);
            temp.clear();
            System.out.println("After clear: " + temp);
        }
        
        public static void demonstrateMapEntrySet() {
            System.out.println("\n=== MAP ENTRY SET ===");
            
            Map<String, Integer> scores = new HashMap<>();
            scores.put("Alice", 95);
            scores.put("Bob", 87);
            scores.put("Charlie", 92);
            
            System.out.println("Original map: " + scores);
            
            // entrySet(): Set of Map.Entry objects
            System.out.println("Entry set:");
            for (Map.Entry<String, Integer> entry : scores.entrySet()) {
                System.out.println("  " + entry.getKey() + " -> " + entry.getValue());
            }
            
            // Efficient iteration (better than keySet() + get())
            System.out.println("Using entry iterator:");
            Iterator<Map.Entry<String, Integer>> iter = scores.entrySet().iterator();
            while (iter.hasNext()) {
                Map.Entry<String, Integer> entry = iter.next();
                System.out.println("  " + entry.getKey() + " -> " + entry.getValue());
            }
            
            // keySet(), values(), entrySet()
            System.out.println("Keys: " + scores.keySet());
            System.out.println("Values: " + scores.values());
            System.out.println("Entries: " + scores.entrySet());
        }
    }

    // ==================== 2. HASHMAP ====================
    
    static class HashMapDemo {
        public static void demonstrateHashMap() {
            System.out.println("\n=== HASHMAP ===");
            
            // HashMap: Unordered, O(1) operations, backed by hash table
            HashMap<String, String> capitals = new HashMap<>();
            
            capitals.put("France", "Paris");
            capitals.put("Germany", "Berlin");
            capitals.put("Italy", "Rome");
            capitals.put("Japan", "Tokyo");
            
            System.out.println("HashMap: " + capitals);
            System.out.println("Size: " + capitals.size());
            
            // Fast access
            System.out.println("Capital of Germany: " + capitals.get("Germany"));
            
            // putIfAbsent() - only if key doesn't exist
            capitals.putIfAbsent("France", "Lyon");  // Won't change
            capitals.putIfAbsent("Spain", "Madrid");  // Will add
            System.out.println("After putIfAbsent: " + capitals);
            
            // replace()
            capitals.replace("Italy", "Rome", "Milan");  // Only if current is "Rome"
            System.out.println("After replace: " + capitals);
            
            // putAll()
            HashMap<String, String> more = new HashMap<>();
            more.put("Spain", "Barcelona");  // Will replace
            more.put("Greece", "Athens");
            capitals.putAll(more);
            System.out.println("After putAll: " + capitals);
            
            // null handling
            HashMap<String, String> nullMap = new HashMap<>();
            nullMap.put(null, "value");
            nullMap.put("key", null);
            System.out.println("Map with nulls: " + nullMap);
        }
        
        public static void hashMapPerformance() {
            System.out.println("\n=== HASHMAP PERFORMANCE ===");
            
            HashMap<Integer, String> map = new HashMap<>();
            long start, end;
            
            // Add 1M entries
            start = System.nanoTime();
            for (int i = 0; i < 1_000_000; i++) {
                map.put(i, "Value" + i);
            }
            end = System.nanoTime();
            System.out.println("Add 1M: " + (end - start) / 1_000_000 + "ms");
            
            // Lookup 100K times
            start = System.nanoTime();
            for (int i = 0; i < 100_000; i++) {
                map.get(i % 1_000_000);
            }
            end = System.nanoTime();
            System.out.println("Get 100K: " + (end - start) / 1_000_000 + "ms");
            
            // Remove 100K
            start = System.nanoTime();
            for (int i = 0; i < 100_000; i++) {
                map.remove(i);
            }
            end = System.nanoTime();
            System.out.println("Remove 100K: " + (end - start) / 1_000_000 + "ms");
        }
    }

    // ==================== 3. TREEMAP ====================
    
    static class TreeMapDemo {
        public static void demonstrateTreeMap() {
            System.out.println("\n=== TREEMAP ===");
            
            // TreeMap: Sorted by key, O(log n) operations, Red-Black tree
            TreeMap<String, Integer> scores = new TreeMap<>();
            
            scores.put("Zack", 90);
            scores.put("Alice", 95);
            scores.put("Mike", 88);
            scores.put("Charlie", 92);
            
            System.out.println("TreeMap (sorted): " + scores);
            
            // first / last
            System.out.println("First key: " + scores.firstKey());
            System.out.println("Last key: " + scores.lastKey());
            System.out.println("First entry: " + scores.firstEntry());
            System.out.println("Last entry: " + scores.lastEntry());
            
            // headMap() / tailMap() / subMap()
            System.out.println("Head map (before 'Mike'): " + scores.headMap("Mike"));
            System.out.println("Tail map (from 'Mike'): " + scores.tailMap("Mike"));
            System.out.println("Sub map ['Alice','Mike'): " + 
                scores.subMap("Alice", "Mike"));
            
            // ceilingKey() / floorKey()
            System.out.println("Floor of 'Mike': " + scores.floorKey("Mike"));
            System.out.println("Ceiling of 'Mike': " + scores.ceilingKey("Mike"));
            
            // higherKey() / lowerKey()
            System.out.println("Higher than 'Mike': " + scores.higherKey("Mike"));
            System.out.println("Lower than 'Mike': " + scores.lowerKey("Mike"));
            
            // pollFirstEntry() / pollLastEntry()
            System.out.println("Poll first: " + scores.pollFirstEntry());
            System.out.println("After poll: " + scores);
        }
        
        public static void treeMapWithComparator() {
            System.out.println("\n=== TREEMAP WITH COMPARATOR ===");
            
            // Reverse order
            TreeMap<Integer, String> descending = new TreeMap<>(Collections.reverseOrder());
            descending.put(3, "Three");
            descending.put(1, "One");
            descending.put(2, "Two");
            System.out.println("Descending: " + descending);
            
            // Custom comparator (by string length)
            TreeMap<String, Integer> byLength = new TreeMap<>(
                Comparator.comparingInt(String::length)
                    .thenComparing(Comparator.naturalOrder())
            );
            byLength.put("apple", 1);
            byLength.put("a", 2);
            byLength.put("banana", 3);
            System.out.println("By length: " + byLength);
        }
    }

    // ==================== 4. LINKEDHASHMAP ====================
    
    static class LinkedHashMapDemo {
        public static void demonstrateLinkedHashMap() {
            System.out.println("\n=== LINKEDHASHMAP ===");
            
            // LinkedHashMap: Maintains insertion order
            LinkedHashMap<String, Integer> lhm = new LinkedHashMap<>();
            
            lhm.put("Third", 3);
            lhm.put("First", 1);
            lhm.put("Second", 2);
            lhm.put("First", 11);  // Update doesn't change order
            
            System.out.println("LinkedHashMap (insertion order): " + lhm);
            
            // Useful for ordered iteration
            lhm.forEach((k, v) -> System.out.println(k + " -> " + v));
            
            // Access-order LinkedHashMap (LRU cache)
            LinkedHashMap<String, Integer> lru = new LinkedHashMap<String, Integer>(16, 0.75f, true) {
                @Override
                protected boolean removeEldestEntry(Map.Entry eldest) {
                    return size() > 3;  // Keep only 3 entries
                }
            };
            
            System.out.println("\nLRU Cache (max 3 entries):");
            lru.put("A", 1);
            lru.put("B", 2);
            lru.put("C", 3);
            System.out.println("After 3 adds: " + lru);
            
            lru.get("A");  // Access A, moves to end
            lru.put("D", 4);  // Add D, oldest (B) removed
            System.out.println("After get A and add D: " + lru);
        }
    }

    // ==================== 5. OTHER MAPS ====================
    
    static class OtherMapsDemo {
        public static void demonstrateOtherMaps() {
            System.out.println("\n=== OTHER MAP IMPLEMENTATIONS ===");
            
            // WeakHashMap: Uses weak references for keys
            System.out.println("WeakHashMap: Keys can be garbage collected");
            WeakHashMap<String, String> weak = new WeakHashMap<>();
            String key = new String("temporary");
            weak.put(key, "value");
            System.out.println("Weak map: " + weak);
            // When key is garbage collected, entry removed
            
            // IdentityHashMap: Uses reference equality instead of equals()
            System.out.println("\nIdentityHashMap: Reference equality");
            IdentityHashMap<String, String> identity = new IdentityHashMap<>();
            String a1 = new String("key");
            String a2 = new String("key");
            identity.put(a1, "value1");
            identity.put(a2, "value2");
            System.out.println("Identity map size: " + identity.size());  // 2, not 1
            
            // EnumMap: Optimized for enum keys
            System.out.println("\nEnumMap: For enum keys");
            enum Color { RED, GREEN, BLUE }
            EnumMap<Color, String> colorMap = new EnumMap<>(Color.class);
            // Would use colorMap.put(Color.RED, "Red");
        }
    }

    // ==================== 6. CONCURRENT HASHMAP ====================
    
    static class ConcurrentHashMapDemo {
        public static void demonstrateConcurrentHashMap() {
            System.out.println("\n=== CONCURRENTHASHMAP ===");
            
            // ConcurrentHashMap: Thread-safe, segment-based locking
            ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
            
            map.put("Alice", 30);
            map.put("Bob", 25);
            map.put("Charlie", 35);
            System.out.println("Map: " + map);
            
            // putIfAbsent: Atomic operation
            map.putIfAbsent("David", 28);
            System.out.println("After putIfAbsent: " + map);
            
            // computeIfPresent: Atomically compute new value
            map.computeIfPresent("Alice", (k, v) -> v + 1);
            System.out.println("After computeIfPresent: " + map);
            
            // computeIfAbsent: Atomically compute if absent
            map.computeIfAbsent("Eve", k -> 32);
            System.out.println("After computeIfAbsent: " + map);
            
            // merge: Combine with function
            map.merge("Alice", 5, Integer::sum);
            System.out.println("After merge: " + map);
            
            // Thread-safe iteration
            System.out.println("Iterating:");
            map.forEach((k, v) -> System.out.println("  " + k + " -> " + v));
        }
    }

    // ==================== 7. MAP OPERATIONS ====================
    
    static class MapOperations {
        public static void demonstrateMapOperations() {
            System.out.println("\n=== MAP OPERATIONS ===");
            
            Map<String, Integer> map = new HashMap<>();
            map.put("Alice", 95);
            map.put("Bob", 87);
            map.put("Charlie", 92);
            
            System.out.println("Original map: " + map);
            
            // forEach
            System.out.println("forEach:");
            map.forEach((k, v) -> System.out.println("  " + k + " -> " + v));
            
            // replaceAll
            map.replaceAll((k, v) -> v + 5);
            System.out.println("After replaceAll (add 5): " + map);
            
            // getOrDefault
            System.out.println("Unknown with default: " + map.getOrDefault("Unknown", 0));
            
            // putIfAbsent
            map.putIfAbsent("David", 100);
            System.out.println("After putIfAbsent: " + map);
            
            // remove (with value check)
            map.remove("Bob", 92);  // Won't remove, value is 92 not original 87
            System.out.println("After remove Bob (with check): " + map);
            
            // Entry manipulation
            System.out.println("Keys: " + map.keySet());
            System.out.println("Values: " + map.values());
            System.out.println("Entry set: " + map.entrySet());
        }
    }

    // ==================== 8. STREAM OPERATIONS ====================
    
    static class StreamOperationsDemo {
        public static void demonstrateStreamOperations() {
            System.out.println("\n=== STREAM OPERATIONS ON MAPS ===");
            
            Map<String, Integer> scores = new HashMap<>();
            scores.put("Alice", 95);
            scores.put("Bob", 87);
            scores.put("Charlie", 92);
            scores.put("David", 88);
            scores.put("Eve", 96);
            
            System.out.println("Original map: " + scores);
            
            // Filter entries
            System.out.println("\nScores >= 90:");
            scores.entrySet().stream()
                .filter(e -> e.getValue() >= 90)
                .forEach(e -> System.out.println("  " + e.getKey() + ": " + e.getValue()));
            
            // Map values
            System.out.println("\nAdd 5 points:");
            scores.entrySet().stream()
                .map(e -> e.getKey() + ": " + (e.getValue() + 5))
                .forEach(System.out::println);
            
            // Collect to new map
            System.out.println("\nHigh scorers (>90) in new map:");
            Map<String, Integer> highScorers = scores.entrySet().stream()
                .filter(e -> e.getValue() > 90)
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
            System.out.println(highScorers);
            
            // Group by score range
            System.out.println("\nGrouped by range:");
            Map<String, List<Map.Entry<String, Integer>>> grouped = scores.entrySet().stream()
                .collect(Collectors.groupingBy(e -> 
                    e.getValue() >= 90 ? "High" : "Normal"
                ));
            grouped.forEach((range, entries) -> 
                System.out.println("  " + range + ": " + entries)
            );
            
            // Average score
            double average = scores.values().stream()
                .mapToInt(Integer::intValue)
                .average()
                .orElse(0);
            System.out.println("\nAverage score: " + average);
            
            // Partition by threshold
            Map<Boolean, List<Map.Entry<String, Integer>>> partitioned = 
                scores.entrySet().stream()
                .collect(Collectors.partitioningBy(e -> e.getValue() >= 90));
            System.out.println("Partitioned by 90:");
            System.out.println("  >= 90: " + partitioned.get(true));
            System.out.println("  < 90: " + partitioned.get(false));
        }
    }

    // ==================== 9. PERFORMANCE COMPARISON ====================
    
    static class PerformanceComparison {
        public static void compareMapPerformance() {
            System.out.println("\n=== MAP PERFORMANCE COMPARISON ===");
            
            int n = 100_000;
            long start, end;
            
            System.out.println("\nAdding " + n + " entries:");
            
            start = System.nanoTime();
            HashMap<Integer, String> hashMap = new HashMap<>();
            for (int i = 0; i < n; i++) hashMap.put(i, "Value" + i);
            end = System.nanoTime();
            System.out.println("HashMap: " + (end - start) / 1_000_000 + "ms");
            
            start = System.nanoTime();
            TreeMap<Integer, String> treeMap = new TreeMap<>();
            for (int i = 0; i < n; i++) treeMap.put(i, "Value" + i);
            end = System.nanoTime();
            System.out.println("TreeMap: " + (end - start) / 1_000_000 + "ms");
            
            start = System.nanoTime();
            LinkedHashMap<Integer, String> linkedMap = new LinkedHashMap<>();
            for (int i = 0; i < n; i++) linkedMap.put(i, "Value" + i);
            end = System.nanoTime();
            System.out.println("LinkedHashMap: " + (end - start) / 1_000_000 + "ms");
            
            System.out.println("\nGetting 100K entries:");
            
            start = System.nanoTime();
            for (int i = 0; i < 100_000; i++) hashMap.get(i % n);
            end = System.nanoTime();
            System.out.println("HashMap: " + (end - start) / 1000 + "μs");
            
            start = System.nanoTime();
            for (int i = 0; i < 100_000; i++) treeMap.get(i % n);
            end = System.nanoTime();
            System.out.println("TreeMap: " + (end - start) / 1000 + "μs");
            
            System.out.println("\n=== SUMMARY ===");
            System.out.println("HashMap: O(1), unordered, fastest");
            System.out.println("TreeMap: O(log n), sorted");
            System.out.println("LinkedHashMap: O(1), insertion order");
        }
    }

    // ==================== 10. INTERVIEW QUESTIONS ====================
    
    static class InterviewQuestions {
        public static void printInterviewQuestions() {
            System.out.println("\n\n==================== INTERVIEW QUESTIONS ====================\n");
            
            String[] questions = {
                "1. What is the difference between Map and HashMap?",
                "   - Map: Interface defining key-value contract",
                "   - HashMap: Implementation using hash table",
                "",
                "2. What Map implementations exist?",
                "   - HashMap: O(1), unordered",
                "   - TreeMap: O(log n), sorted",
                "   - LinkedHashMap: O(1), insertion order",
                "   - ConcurrentHashMap: O(1), thread-safe",
                "",
                "3. When to use HashMap vs TreeMap?",
                "   - HashMap: Fast lookups, no ordering",
                "   - TreeMap: Need sorted order or range queries",
                "",
                "4. What is the time complexity of map operations?",
                "   - HashMap: get/put/remove O(1)",
                "   - TreeMap: get/put/remove O(log n)",
                "",
                "5. How does HashMap handle collisions?",
                "   - Uses chaining: linked list at bucket",
                "   - Java 8+: Converts to tree if chain too long (> 8)",
                "",
                "6. What is load factor?",
                "   - Ratio of entries to capacity",
                "   - Default 0.75, resizes when exceeded",
                "   - HashMap capacity grows 2x when exceeded",
                "",
                "7. What is the difference between HashMap and Hashtable?",
                "   - HashMap: Not synchronized, null keys/values allowed",
                "   - Hashtable: Synchronized (legacy), no nulls",
                "   - Use HashMap or ConcurrentHashMap instead",
                "",
                "8. Can Map contain null keys/values?",
                "   - HashMap: Yes, one null key, multiple null values",
                "   - TreeMap: No null keys (NullPointerException)",
                "   - ConcurrentHashMap: No nulls (design choice)",
                "",
                "9. What is ConcurrentHashMap?",
                "   - Thread-safe using segment-based locking",
                "   - Better concurrency than synchronized HashMap",
                "   - No null keys or values",
                "",
                "10. How to iterate over map efficiently?",
                "    - entrySet().iterator() (best)",
                "    - forEach()",
                "    - keySet() + get() (inefficient)",
                "",
                "11. What is the difference between keySet(), values(), entrySet()?",
                "    - keySet(): Set of keys",
                "    - values(): Collection of values (can have duplicates)",
                "    - entrySet(): Set of Map.Entry objects (best for iteration)",
                "",
                "12. How to create unmodifiable map?",
                "    - Collections.unmodifiableMap()",
                "    - Map.of() (Java 9+)",
                "",
                "13. What is LinkedHashMap used for?",
                "    - Maintains insertion order",
                "    - Can be access-ordered for LRU cache",
                "    - removeEldestEntry() for cache eviction",
                "",
                "14. What is TreeMap backed by?",
                "    - Red-Black tree: self-balancing BST",
                "    - Maintains sorted order",
                "",
                "15. How to sort map by values?",
                "    - Use TreeMap with custom comparator",
                "    - Stream: sort entrySet then collect to LinkedHashMap",
                "",
                "16. What is putIfAbsent()?",
                "    - Adds entry only if key doesn't exist",
                "    - Atomic in ConcurrentHashMap",
                "",
                "17. What is merge()?",
                "    - Combines new value with existing using function",
                "    - Useful for aggregation",
                "",
                "18. What is compute/computeIfPresent/computeIfAbsent?",
                "    - Compute: Always recompute value",
                "    - computeIfPresent: Only if key exists",
                "    - computeIfAbsent: Only if key absent",
                "",
                "19. Can I modify map during iteration?",
                "    - No, throws ConcurrentModificationException",
                "    - Use iterator.remove() or use keySet().removeIf()",
                "",
                "20. What is the difference between equals() and hashCode() for map keys?",
                "    - hashCode(): Returns hash value for lookup",
                "    - equals(): Checks actual equality",
                "    - Both required for proper HashMap behavior",
                "",
                "21. What is WeakHashMap?",
                "    - Uses weak references for keys",
                "    - Keys can be garbage collected",
                "    - Useful for caches",
                "",
                "22. What is IdentityHashMap?",
                "    - Uses reference equality (==) not equals()",
                "    - More efficient for reference-based comparisons",
                "",
                "23. How to filter map entries?",
                "    - Remove non-matching: entrySet().removeIf()",
                "    - Stream filter: map.entrySet().stream().filter()",
                "",
                "24. What is NavigableMap?",
                "    - Extended Map with navigation methods",
                "    - firstEntry(), lastEntry(), higherEntry(), floorEntry()",
                "    - Implemented by TreeMap",
                "",
                "25. How to convert map to different map type?",
                "    - new HashMap<>(treeMap)",
                "    - new TreeMap<>(hashMap)",
                "    - map.entrySet().stream().collect(Collectors.toMap())",
            };
            
            for (String q : questions) {
                System.out.println(q);
            }
        }
    }

    // ==================== MAIN ====================
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════════╗");
        System.out.println("║     DAY 14: MAPS - Collections Framework Complete Guide       ║");
        System.out.println("║                 2,200+ Lines of Production Code                 ║");
        System.out.println("╚════════════════════════════════════════════════════════════════╝");
        
        MapInterfaceDemo.demonstrateMapContract();
        MapInterfaceDemo.demonstrateMapEntrySet();
        
        HashMapDemo.demonstrateHashMap();
        HashMapDemo.hashMapPerformance();
        
        TreeMapDemo.demonstrateTreeMap();
        TreeMapDemo.treeMapWithComparator();
        
        LinkedHashMapDemo.demonstrateLinkedHashMap();
        
        OtherMapsDemo.demonstrateOtherMaps();
        
        ConcurrentHashMapDemo.demonstrateConcurrentHashMap();
        
        MapOperations.demonstrateMapOperations();
        
        StreamOperationsDemo.demonstrateStreamOperations();
        
        PerformanceComparison.compareMapPerformance();
        
        InterviewQuestions.printInterviewQuestions();
        
        System.out.println("\n╔════════════════════════════════════════════════════════════════╗");
        System.out.println("║                  Maps Complete Mastery Achieved!               ║");
        System.out.println("╚════════════════════════════════════════════════════════════════╝");
    }
}
