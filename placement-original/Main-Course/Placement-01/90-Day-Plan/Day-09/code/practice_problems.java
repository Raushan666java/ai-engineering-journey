/**
 * Day 9: Collections Framework Practice Problems
 * 
 * Problems:
 * 1. Remove Duplicates from List
 * 2. Find K Most Frequent Elements
 * 3. Group Anagrams
 * 4. LRU Cache Implementation
 * 5. Top K Frequent Words
 * 6. Custom Sorting with Multiple Criteria
 */

import java.util.*;

public class practice_problems {
    
    // Problem 1: Remove Duplicates from List (preserve order)
    public static List<Integer> removeDuplicates(List<Integer> list) {
        // Using LinkedHashSet to preserve insertion order
        return new ArrayList<>(new LinkedHashSet<>(list));
    }
    
    // Problem 2: Find K Most Frequent Elements
    public static List<Integer> topKFrequent(int[] nums, int k) {
        // Count frequencies
        Map<Integer, Integer> freqMap = new HashMap<>();
        for (int num : nums) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }
        
        // Use min heap to keep top k elements
        PriorityQueue<Map.Entry<Integer, Integer>> minHeap = 
            new PriorityQueue<>((a, b) -> a.getValue() - b.getValue());
        
        for (Map.Entry<Integer, Integer> entry : freqMap.entrySet()) {
            minHeap.offer(entry);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        
        // Extract elements
        List<Integer> result = new ArrayList<>();
        while (!minHeap.isEmpty()) {
            result.add(minHeap.poll().getKey());
        }
        
        Collections.reverse(result);  // Descending order
        return result;
    }
    
    // Problem 3: Group Anagrams
    public static List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        
        for (String str : strs) {
            // Sort characters to create key
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            
            // Add to group
            map.putIfAbsent(key, new ArrayList<>());
            map.get(key).add(str);
        }
        
        return new ArrayList<>(map.values());
    }
    
    // Problem 4: LRU Cache Implementation
    static class LRUCache {
        private final int capacity;
        private final LinkedHashMap<Integer, Integer> cache;
        
        public LRUCache(int capacity) {
            this.capacity = capacity;
            // Access order = true (LRU behavior)
            this.cache = new LinkedHashMap<Integer, Integer>(capacity, 0.75f, true) {
                @Override
                protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
                    return size() > capacity;
                }
            };
        }
        
        public int get(int key) {
            return cache.getOrDefault(key, -1);
        }
        
        public void put(int key, int value) {
            cache.put(key, value);
        }
        
        @Override
        public String toString() {
            return cache.toString();
        }
    }
    
    // Problem 5: Top K Frequent Words
    public static List<String> topKFrequentWords(String[] words, int k) {
        // Count frequencies
        Map<String, Integer> freqMap = new HashMap<>();
        for (String word : words) {
            freqMap.put(word, freqMap.getOrDefault(word, 0) + 1);
        }
        
        // Max heap by frequency, then alphabetically
        PriorityQueue<Map.Entry<String, Integer>> maxHeap = 
            new PriorityQueue<>((a, b) -> {
                if (!a.getValue().equals(b.getValue())) {
                    return b.getValue() - a.getValue();  // Descending frequency
                }
                return a.getKey().compareTo(b.getKey());  // Ascending alphabetical
            });
        
        maxHeap.addAll(freqMap.entrySet());
        
        // Extract top k
        List<String> result = new ArrayList<>();
        for (int i = 0; i < k && !maxHeap.isEmpty(); i++) {
            result.add(maxHeap.poll().getKey());
        }
        
        return result;
    }
    
    // Problem 6: Custom Sorting with Multiple Criteria
    static class Employee {
        String name;
        int age;
        double salary;
        String department;
        
        Employee(String name, int age, double salary, String department) {
            this.name = name;
            this.age = age;
            this.salary = salary;
            this.department = department;
        }
        
        @Override
        public String toString() {
            return String.format("%s(age=%d, salary=%.0f, dept=%s)", 
                               name, age, salary, department);
        }
    }
    
    public static void sortEmployees(List<Employee> employees, String criteria) {
        switch (criteria) {
            case "salary_desc_age_asc":
                employees.sort(Comparator.comparingDouble((Employee e) -> e.salary).reversed()
                                        .thenComparingInt(e -> e.age));
                break;
            case "department_name":
                employees.sort(Comparator.comparing((Employee e) -> e.department)
                                        .thenComparing(e -> e.name));
                break;
            case "age_salary":
                employees.sort(Comparator.comparingInt((Employee e) -> e.age)
                                        .thenComparingDouble(e -> e.salary));
                break;
            default:
                employees.sort(Comparator.comparing(e -> e.name));
        }
    }
    
    // Additional Helper Methods
    
    // Find first non-repeating character
    public static char firstNonRepeating(String str) {
        LinkedHashMap<Character, Integer> map = new LinkedHashMap<>();
        
        for (char c : str.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }
        
        return '\0';  // Not found
    }
    
    // Check if two lists have same elements (ignoring order)
    public static boolean haveSameElements(List<Integer> list1, List<Integer> list2) {
        if (list1.size() != list2.size()) return false;
        
        Map<Integer, Integer> freq1 = new HashMap<>();
        Map<Integer, Integer> freq2 = new HashMap<>();
        
        for (int num : list1) {
            freq1.put(num, freq1.getOrDefault(num, 0) + 1);
        }
        
        for (int num : list2) {
            freq2.put(num, freq2.getOrDefault(num, 0) + 1);
        }
        
        return freq1.equals(freq2);
    }
    
    // Find intersection of two lists
    public static List<Integer> intersection(List<Integer> list1, List<Integer> list2) {
        Set<Integer> set1 = new HashSet<>(list1);
        Set<Integer> set2 = new HashSet<>(list2);
        set1.retainAll(set2);
        return new ArrayList<>(set1);
    }
    
    // Sort map by values
    public static <K, V extends Comparable<V>> Map<K, V> sortByValue(Map<K, V> map) {
        List<Map.Entry<K, V>> list = new ArrayList<>(map.entrySet());
        list.sort(Map.Entry.comparingByValue());
        
        LinkedHashMap<K, V> result = new LinkedHashMap<>();
        for (Map.Entry<K, V> entry : list) {
            result.put(entry.getKey(), entry.getValue());
        }
        
        return result;
    }
    
    // Main method - Test all problems
    public static void main(String[] args) {
        System.out.println("=== Collections Practice Problems ===\n");
        
        // Problem 1: Remove Duplicates
        System.out.println("Problem 1: Remove Duplicates");
        List<Integer> withDuplicates = Arrays.asList(1, 2, 3, 2, 4, 1, 5, 3, 6);
        System.out.println("Original: " + withDuplicates);
        System.out.println("Without duplicates: " + removeDuplicates(withDuplicates));
        System.out.println();
        
        // Problem 2: Top K Frequent Elements
        System.out.println("Problem 2: Top K Frequent Elements");
        int[] nums = {1, 1, 1, 2, 2, 3, 4, 4, 4, 4};
        int k = 2;
        System.out.println("Array: " + Arrays.toString(nums));
        System.out.println("Top " + k + " frequent: " + topKFrequent(nums, k));
        System.out.println();
        
        // Problem 3: Group Anagrams
        System.out.println("Problem 3: Group Anagrams");
        String[] words = {"eat", "tea", "tan", "ate", "nat", "bat"};
        System.out.println("Words: " + Arrays.toString(words));
        System.out.println("Grouped anagrams: " + groupAnagrams(words));
        System.out.println();
        
        // Problem 4: LRU Cache
        System.out.println("Problem 4: LRU Cache (capacity=3)");
        LRUCache cache = new LRUCache(3);
        cache.put(1, 10);
        cache.put(2, 20);
        cache.put(3, 30);
        System.out.println("After putting 1,2,3: " + cache);
        
        cache.get(1);  // Access 1
        System.out.println("After accessing 1: " + cache);
        
        cache.put(4, 40);  // Should evict 2
        System.out.println("After putting 4: " + cache);
        
        System.out.println("Get 2: " + cache.get(2));  // Should return -1
        System.out.println("Get 1: " + cache.get(1));  // Should return 10
        System.out.println();
        
        // Problem 5: Top K Frequent Words
        System.out.println("Problem 5: Top K Frequent Words");
        String[] wordList = {"the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"};
        k = 4;
        System.out.println("Words: " + Arrays.toString(wordList));
        System.out.println("Top " + k + " frequent: " + topKFrequentWords(wordList, k));
        System.out.println();
        
        // Problem 6: Custom Sorting
        System.out.println("Problem 6: Custom Sorting of Employees");
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee("Alice", 30, 75000, "IT"));
        employees.add(new Employee("Bob", 25, 60000, "HR"));
        employees.add(new Employee("Charlie", 30, 80000, "IT"));
        employees.add(new Employee("David", 25, 65000, "IT"));
        
        System.out.println("Original: " + employees);
        
        sortEmployees(employees, "salary_desc_age_asc");
        System.out.println("Sorted by salary desc, age asc: " + employees);
        
        sortEmployees(employees, "department_name");
        System.out.println("Sorted by department, name: " + employees);
        System.out.println();
        
        // Additional tests
        System.out.println("Additional Helper Methods:");
        
        // First non-repeating character
        String str = "leetcode";
        System.out.println("First non-repeating in '" + str + "': " + firstNonRepeating(str));
        
        // Same elements check
        List<Integer> list1 = Arrays.asList(1, 2, 3, 2, 1);
        List<Integer> list2 = Arrays.asList(2, 1, 1, 3, 2);
        System.out.println("Lists have same elements: " + haveSameElements(list1, list2));
        
        // Intersection
        List<Integer> a = Arrays.asList(1, 2, 3, 4, 5);
        List<Integer> b = Arrays.asList(3, 4, 5, 6, 7);
        System.out.println("Intersection of " + a + " and " + b + ": " + intersection(a, b));
        
        // Sort map by values
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 85);
        scores.put("Bob", 92);
        scores.put("Charlie", 78);
        scores.put("David", 92);
        System.out.println("Original map: " + scores);
        System.out.println("Sorted by values: " + sortByValue(scores));
        
        System.out.println("\n=== All Problems Completed ===");
    }
}

/**
 * Problem Solutions Summary:
 * 
 * 1. Remove Duplicates:
 *    - Use LinkedHashSet to preserve insertion order
 *    - Time: O(n), Space: O(n)
 * 
 * 2. Top K Frequent Elements:
 *    - HashMap for frequencies + Min Heap of size k
 *    - Time: O(n log k), Space: O(n)
 * 
 * 3. Group Anagrams:
 *    - Sort characters as key, HashMap to group
 *    - Time: O(n * m log m) where m = avg word length
 *    - Space: O(n * m)
 * 
 * 4. LRU Cache:
 *    - LinkedHashMap with access order
 *    - Override removeEldestEntry for auto-eviction
 *    - Time: O(1) get/put, Space: O(capacity)
 * 
 * 5. Top K Frequent Words:
 *    - HashMap + Max Heap with custom comparator
 *    - Time: O(n log n), Space: O(n)
 * 
 * 6. Custom Sorting:
 *    - Comparator.comparing() with method references
 *    - Chain with thenComparing() for multiple criteria
 *    - Time: O(n log n), Space: O(1)
 * 
 * Key Patterns:
 * - Frequency counting: HashMap with getOrDefault/merge
 * - Top K problems: Heap (PriorityQueue)
 * - Ordering: LinkedHashSet/LinkedHashMap
 * - Custom sorting: Comparator with chaining
 * - LRU: LinkedHashMap with access order
 * - Anagrams: Sort as key for grouping
 * 
 * Interview Tips:
 * - LinkedHashSet = HashSet + insertion order
 * - Min heap for top K = keep k largest elements
 * - Max heap for top K = extract k times
 * - LRU cache = LinkedHashMap(capacity, 0.75f, true)
 * - Sort string chars to detect anagrams
 * - Use method references for cleaner comparators
 */
