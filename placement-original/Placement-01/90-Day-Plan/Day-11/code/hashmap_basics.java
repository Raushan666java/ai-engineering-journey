/**
 * Day 11: HashMap Basics and Internals
 * 
 * Topics Covered:
 * - HashMap creation and basic operations
 * - Internal working (buckets, hash function, collisions)
 * - Load factor and rehashing
 * - Common methods and use cases
 * - HashMap vs Hashtable vs ConcurrentHashMap
 * - Performance analysis
 */

import java.util.*;

public class hashmap_basics {
    public static void main(String[] args) {
        System.out.println("=== HashMap Basics and Internals ===\n");
        
        // ============ BASIC OPERATIONS ============
        
        // 1. Creating HashMap
        System.out.println("1. Creating HashMap:");
        
        // Empty HashMap
        HashMap<String, Integer> map1 = new HashMap<>();
        
        // With initial capacity
        HashMap<String, Integer> map2 = new HashMap<>(16);
        
        // With initial capacity and load factor
        HashMap<String, Integer> map3 = new HashMap<>(16, 0.75f);
        
        // From another map
        Map<String, Integer> map4 = new HashMap<>(map1);
        
        System.out.println("HashMap created successfully\n");
        
        // 2. put() - Add/Update entries
        System.out.println("2. put() - Adding entries:");
        
        HashMap<String, Integer> ages = new HashMap<>();
        ages.put("Alice", 25);
        ages.put("Bob", 30);
        ages.put("Charlie", 35);
        ages.put("Alice", 26);  // Updates existing value
        
        System.out.println("Ages: " + ages);
        System.out.println();
        
        // 3. get() - Retrieve value
        System.out.println("3. get() - Retrieving values:");
        
        int aliceAge = ages.get("Alice");
        Integer davidAge = ages.get("David");  // Returns null if not found
        
        System.out.println("Alice's age: " + aliceAge);
        System.out.println("David's age: " + davidAge);
        System.out.println();
        
        // 4. getOrDefault() - Safe retrieval
        System.out.println("4. getOrDefault() - Safe retrieval:");
        
        int age = ages.getOrDefault("David", 0);
        System.out.println("David's age (with default): " + age);
        System.out.println();
        
        // 5. containsKey() and containsValue()
        System.out.println("5. containsKey() and containsValue():");
        
        boolean hasAlice = ages.containsKey("Alice");
        boolean hasAge30 = ages.containsValue(30);
        
        System.out.println("Has Alice: " + hasAlice);
        System.out.println("Has age 30: " + hasAge30);
        System.out.println();
        
        // 6. remove() - Delete entry
        System.out.println("6. remove() - Deleting entries:");
        
        ages.remove("Charlie");
        System.out.println("After removing Charlie: " + ages);
        
        // Remove only if value matches
        ages.remove("Bob", 25);  // Won't remove (value doesn't match)
        ages.remove("Bob", 30);  // Will remove
        System.out.println("After conditional remove: " + ages);
        System.out.println();
        
        // 7. size() and isEmpty()
        System.out.println("7. size() and isEmpty():");
        
        System.out.println("Size: " + ages.size());
        System.out.println("Is empty: " + ages.isEmpty());
        System.out.println();
        
        // 8. clear() - Remove all entries
        System.out.println("8. clear() - Removing all entries:");
        
        ages.put("Eve", 28);
        System.out.println("Before clear: " + ages);
        ages.clear();
        System.out.println("After clear: " + ages);
        System.out.println("Is empty: " + ages.isEmpty());
        System.out.println();
        
        // ============ ITERATION METHODS ============
        
        // 9. Iterating over HashMap
        System.out.println("9. Iterating over HashMap:");
        
        HashMap<String, Integer> scores = new HashMap<>();
        scores.put("Math", 95);
        scores.put("Physics", 88);
        scores.put("Chemistry", 92);
        
        // Method 1: Using entrySet()
        System.out.println("Method 1: entrySet()");
        for (Map.Entry<String, Integer> entry : scores.entrySet()) {
            System.out.println("  " + entry.getKey() + ": " + entry.getValue());
        }
        System.out.println();
        
        // Method 2: Using keySet()
        System.out.println("Method 2: keySet()");
        for (String subject : scores.keySet()) {
            System.out.println("  " + subject + ": " + scores.get(subject));
        }
        System.out.println();
        
        // Method 3: Using values()
        System.out.println("Method 3: values()");
        for (Integer score : scores.values()) {
            System.out.println("  Score: " + score);
        }
        System.out.println();
        
        // Method 4: Using forEach() (Java 8+)
        System.out.println("Method 4: forEach()");
        scores.forEach((subject, score) -> 
            System.out.println("  " + subject + ": " + score));
        System.out.println();
        
        // ============ ADVANCED OPERATIONS ============
        
        // 10. putIfAbsent() - Add only if key doesn't exist
        System.out.println("10. putIfAbsent():");
        
        scores.putIfAbsent("Math", 100);       // Won't update (key exists)
        scores.putIfAbsent("Biology", 90);     // Will add (new key)
        
        System.out.println("After putIfAbsent: " + scores);
        System.out.println();
        
        // 11. replace() - Update existing entry
        System.out.println("11. replace():");
        
        scores.replace("Math", 98);            // Updates
        scores.replace("English", 85);         // Won't add (key doesn't exist)
        
        // Replace only if current value matches
        scores.replace("Physics", 88, 90);     // Will update
        scores.replace("Chemistry", 95, 98);   // Won't update (value doesn't match)
        
        System.out.println("After replace: " + scores);
        System.out.println();
        
        // 12. compute() - Compute new value
        System.out.println("12. compute():");
        
        scores.compute("Math", (k, v) -> v + 2);  // Add 2 to Math score
        scores.compute("English", (k, v) -> 85);  // Add new entry
        
        System.out.println("After compute: " + scores);
        System.out.println();
        
        // 13. computeIfPresent() - Compute only if key exists
        System.out.println("13. computeIfPresent():");
        
        scores.computeIfPresent("Math", (k, v) -> v + 2);
        scores.computeIfPresent("History", (k, v) -> 80);  // Won't execute
        
        System.out.println("After computeIfPresent: " + scores);
        System.out.println();
        
        // 14. computeIfAbsent() - Compute only if key absent
        System.out.println("14. computeIfAbsent():");
        
        scores.computeIfAbsent("History", k -> 85);
        scores.computeIfAbsent("Math", k -> 100);  // Won't execute
        
        System.out.println("After computeIfAbsent: " + scores);
        System.out.println();
        
        // 15. merge() - Merge values
        System.out.println("15. merge():");
        
        HashMap<String, Integer> bonusPoints = new HashMap<>();
        bonusPoints.put("Math", 5);
        bonusPoints.put("Physics", 10);
        bonusPoints.put("History", 8);
        
        bonusPoints.forEach((subject, bonus) -> 
            scores.merge(subject, bonus, Integer::sum));
        
        System.out.println("After merging bonus points: " + scores);
        System.out.println();
        
        // ============ FREQUENCY COUNTING PATTERN ============
        
        // 16. Character Frequency Count
        System.out.println("16. Character Frequency Count:");
        
        String text = "hello world";
        HashMap<Character, Integer> charFreq = new HashMap<>();
        
        for (char c : text.toCharArray()) {
            if (c != ' ') {
                charFreq.put(c, charFreq.getOrDefault(c, 0) + 1);
            }
        }
        
        System.out.println("Character frequencies:");
        charFreq.forEach((ch, freq) -> 
            System.out.println("  '" + ch + "': " + freq));
        System.out.println();
        
        // 17. Word Frequency Count
        System.out.println("17. Word Frequency Count:");
        
        String sentence = "the quick brown fox jumps over the lazy dog the fox";
        HashMap<String, Integer> wordFreq = new HashMap<>();
        
        for (String word : sentence.split(" ")) {
            wordFreq.put(word, wordFreq.getOrDefault(word, 0) + 1);
        }
        
        System.out.println("Word frequencies:");
        wordFreq.forEach((word, freq) -> 
            System.out.println("  \"" + word + "\": " + freq));
        System.out.println();
        
        // ============ HASHMAP INTERNALS ============
        
        // 18. Hash Code and Bucket Index
        System.out.println("18. Hash Code and Bucket Index:");
        
        demonstrateHashing("Alice", 16);
        demonstrateHashing("Bob", 16);
        demonstrateHashing("Charlie", 16);
        System.out.println();
        
        // 19. Collision Demonstration
        System.out.println("19. Collision Handling:");
        
        // Create custom objects that hash to same bucket
        Person p1 = new Person("Alice", 25);
        Person p2 = new Person("Bob", 30);
        
        HashMap<Person, String> personMap = new HashMap<>();
        personMap.put(p1, "Engineer");
        personMap.put(p2, "Doctor");
        
        System.out.println("Person map: " + personMap);
        System.out.println();
        
        // 20. Load Factor and Rehashing
        System.out.println("20. Load Factor and Rehashing:");
        
        HashMap<Integer, String> loadFactorDemo = new HashMap<>(4, 0.75f);
        System.out.println("Initial capacity: 4, Load factor: 0.75");
        System.out.println("Threshold = capacity * loadFactor = 4 * 0.75 = 3");
        
        for (int i = 1; i <= 5; i++) {
            loadFactorDemo.put(i, "Value" + i);
            System.out.println("Added " + i + " entries, size: " + loadFactorDemo.size());
            if (i == 3) {
                System.out.println("  → Rehashing occurs! Capacity doubled.");
            }
        }
        System.out.println();
        
        // ============ HASHMAP VS OTHERS ============
        
        // 21. HashMap vs Hashtable
        System.out.println("21. HashMap vs Hashtable:");
        
        HashMap<String, Integer> hashMap = new HashMap<>();
        hashMap.put(null, 1);        // Allows null key
        hashMap.put("key", null);    // Allows null values
        System.out.println("HashMap (allows nulls): " + hashMap);
        
        Hashtable<String, Integer> hashTable = new Hashtable<>();
        // hashTable.put(null, 1);   // Throws NullPointerException
        // hashTable.put("key", null); // Throws NullPointerException
        hashTable.put("key1", 1);
        System.out.println("Hashtable (no nulls): " + hashTable);
        System.out.println();
        
        // 22. LinkedHashMap - Maintains insertion order
        System.out.println("22. LinkedHashMap - Insertion Order:");
        
        LinkedHashMap<String, Integer> linkedMap = new LinkedHashMap<>();
        linkedMap.put("C", 3);
        linkedMap.put("A", 1);
        linkedMap.put("B", 2);
        
        System.out.println("LinkedHashMap: " + linkedMap);
        System.out.println("Maintains insertion order: C, A, B");
        System.out.println();
        
        // 23. Performance Comparison
        System.out.println("23. Performance Test:");
        
        performanceTest(10000);
        
        System.out.println("\n=== HashMap Basics Complete ===");
    }
    
    // Helper method to demonstrate hashing
    static void demonstrateHashing(String key, int bucketSize) {
        int hashCode = key.hashCode();
        int index = Math.abs(hashCode) % bucketSize;
        
        System.out.println("Key: \"" + key + "\"");
        System.out.println("  HashCode: " + hashCode);
        System.out.println("  Bucket index: " + index);
    }
    
    // Performance test
    static void performanceTest(int n) {
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // Test put performance
        long startPut = System.nanoTime();
        for (int i = 0; i < n; i++) {
            map.put(i, i);
        }
        long endPut = System.nanoTime();
        
        // Test get performance
        long startGet = System.nanoTime();
        for (int i = 0; i < n; i++) {
            map.get(i);
        }
        long endGet = System.nanoTime();
        
        System.out.println("Operations on " + n + " elements:");
        System.out.println("  put() time: " + (endPut - startPut) / 1000000.0 + " ms");
        System.out.println("  get() time: " + (endGet - startGet) / 1000000.0 + " ms");
    }
}

// Helper class for collision demonstration
class Person {
    String name;
    int age;
    
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age && Objects.equals(name, person.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
    
    @Override
    public String toString() {
        return name + "(" + age + ")";
    }
}

/**
 * Key Concepts:
 * 
 * HASHMAP STRUCTURE:
 * - Array of buckets (Node<K,V>[])
 * - Each bucket is a linked list (or tree in Java 8+)
 * - Default initial capacity: 16
 * - Default load factor: 0.75
 * 
 * HASH FUNCTION:
 * - hashCode() method converts key to integer
 * - index = hash(key) % bucketSize
 * - Good hash function distributes keys uniformly
 * 
 * COLLISION HANDLING:
 * - Chaining: Store colliding entries in linked list
 * - Java 8+: Convert to balanced tree if chain length > 8
 * - Improves worst-case performance from O(n) to O(log n)
 * 
 * LOAD FACTOR:
 * - Ratio of entries to bucket count
 * - When exceeded, HashMap rehashes (doubles capacity)
 * - Trade-off: lower = faster, higher = less memory
 * 
 * TIME COMPLEXITY:
 * - put(k, v): O(1) average, O(n) worst case
 * - get(k): O(1) average, O(n) worst case
 * - remove(k): O(1) average, O(n) worst case
 * - containsKey(k): O(1) average
 * 
 * HASHMAP VS HASHTABLE:
 * - HashMap: Not synchronized, allows null, faster
 * - Hashtable: Synchronized, no nulls, slower
 * 
 * WHEN TO USE:
 * - Fast lookups by key
 * - Frequency counting
 * - Caching
 * - Index mapping
 * - Grouping data
 * 
 * Best Practices:
 * - Override hashCode() and equals() for custom keys
 * - Use immutable objects as keys
 * - Choose appropriate initial capacity
 * - Use getOrDefault() to avoid null checks
 * - Use computeIfAbsent() for lazy initialization
 */
