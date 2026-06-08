/**
 * Day 11: HashSet Operations and Applications
 * 
 * Topics Covered:
 * - HashSet creation and basic operations
 * - Set operations (union, intersection, difference)
 * - Duplicate removal
 * - HashSet vs TreeSet vs LinkedHashSet
 * - Common use cases and patterns
 */

import java.util.*;

public class hashset_operations {
    public static void main(String[] args) {
        System.out.println("=== HashSet Operations ===\n");
        
        // ============ BASIC OPERATIONS ============
        
        // 1. Creating HashSet
        System.out.println("1. Creating HashSet:");
        
        // Empty HashSet
        HashSet<String> set1 = new HashSet<>();
        
        // With initial capacity
        HashSet<String> set2 = new HashSet<>(16);
        
        // With initial capacity and load factor
        HashSet<String> set3 = new HashSet<>(16, 0.75f);
        
        // From collection
        List<String> list = Arrays.asList("A", "B", "C", "A");
        HashSet<String> set4 = new HashSet<>(list);  // Removes duplicates
        
        System.out.println("HashSet from list (duplicates removed): " + set4);
        System.out.println();
        
        // 2. add() - Add elements
        System.out.println("2. add() - Adding elements:");
        
        HashSet<String> colors = new HashSet<>();
        boolean added1 = colors.add("Red");
        boolean added2 = colors.add("Blue");
        boolean added3 = colors.add("Red");  // Duplicate, won't add
        
        System.out.println("Colors: " + colors);
        System.out.println("Added Red first time: " + added1);
        System.out.println("Added Red second time: " + added3);
        System.out.println();
        
        // 3. remove() - Remove element
        System.out.println("3. remove() - Removing elements:");
        
        colors.add("Green");
        colors.add("Yellow");
        System.out.println("Before remove: " + colors);
        
        boolean removed = colors.remove("Green");
        System.out.println("After removing Green: " + colors);
        System.out.println("Remove successful: " + removed);
        System.out.println();
        
        // 4. contains() - Check membership
        System.out.println("4. contains() - Checking membership:");
        
        boolean hasRed = colors.contains("Red");
        boolean hasGreen = colors.contains("Green");
        
        System.out.println("Has Red: " + hasRed);
        System.out.println("Has Green: " + hasGreen);
        System.out.println();
        
        // 5. size() and isEmpty()
        System.out.println("5. size() and isEmpty():");
        
        System.out.println("Size: " + colors.size());
        System.out.println("Is empty: " + colors.isEmpty());
        System.out.println();
        
        // 6. clear() - Remove all elements
        System.out.println("6. clear() - Clearing set:");
        
        HashSet<String> temp = new HashSet<>(colors);
        temp.clear();
        System.out.println("After clear: " + temp);
        System.out.println("Is empty: " + temp.isEmpty());
        System.out.println();
        
        // ============ ITERATION METHODS ============
        
        // 7. Iterating over HashSet
        System.out.println("7. Iterating over HashSet:");
        
        HashSet<Integer> numbers = new HashSet<>(Arrays.asList(5, 2, 8, 1, 9));
        
        // Method 1: Enhanced for loop
        System.out.println("Method 1: Enhanced for loop");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println("\n");
        
        // Method 2: Iterator
        System.out.println("Method 2: Iterator");
        Iterator<Integer> it = numbers.iterator();
        while (it.hasNext()) {
            System.out.print(it.next() + " ");
        }
        System.out.println("\n");
        
        // Method 3: forEach() (Java 8+)
        System.out.println("Method 3: forEach()");
        numbers.forEach(num -> System.out.print(num + " "));
        System.out.println("\n");
        
        // Method 4: Stream
        System.out.println("Method 4: Stream");
        numbers.stream().forEach(num -> System.out.print(num + " "));
        System.out.println("\n");
        
        // ============ SET OPERATIONS ============
        
        // 8. Union - Combine all elements
        System.out.println("8. Union - Combining sets:");
        
        HashSet<Integer> setA = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5));
        HashSet<Integer> setB = new HashSet<>(Arrays.asList(4, 5, 6, 7, 8));
        
        HashSet<Integer> union = new HashSet<>(setA);
        union.addAll(setB);
        
        System.out.println("Set A: " + setA);
        System.out.println("Set B: " + setB);
        System.out.println("Union (A ∪ B): " + union);
        System.out.println();
        
        // 9. Intersection - Common elements
        System.out.println("9. Intersection - Common elements:");
        
        HashSet<Integer> intersection = new HashSet<>(setA);
        intersection.retainAll(setB);
        
        System.out.println("Intersection (A ∩ B): " + intersection);
        System.out.println();
        
        // 10. Difference - Elements in A but not in B
        System.out.println("10. Difference - Elements in A but not B:");
        
        HashSet<Integer> difference = new HashSet<>(setA);
        difference.removeAll(setB);
        
        System.out.println("Difference (A - B): " + difference);
        System.out.println();
        
        // 11. Symmetric Difference - Elements in either but not both
        System.out.println("11. Symmetric Difference:");
        
        HashSet<Integer> symmetricDiff = new HashSet<>(setA);
        symmetricDiff.addAll(setB);  // Union
        
        HashSet<Integer> tempIntersection = new HashSet<>(setA);
        tempIntersection.retainAll(setB);  // Intersection
        
        symmetricDiff.removeAll(tempIntersection);  // Union - Intersection
        
        System.out.println("Symmetric Difference (A Δ B): " + symmetricDiff);
        System.out.println();
        
        // 12. Subset Check
        System.out.println("12. Subset Check:");
        
        HashSet<Integer> setC = new HashSet<>(Arrays.asList(2, 3, 4));
        boolean isSubset = setA.containsAll(setC);
        
        System.out.println("Set C: " + setC);
        System.out.println("Is C subset of A: " + isSubset);
        System.out.println();
        
        // ============ DUPLICATE REMOVAL ============
        
        // 13. Remove duplicates from array
        System.out.println("13. Remove duplicates from array:");
        
        int[] arr = {1, 2, 3, 2, 4, 1, 5, 3};
        System.out.println("Original array: " + Arrays.toString(arr));
        
        HashSet<Integer> uniqueSet = new HashSet<>();
        for (int num : arr) {
            uniqueSet.add(num);
        }
        
        System.out.println("Unique elements: " + uniqueSet);
        System.out.println();
        
        // 14. Remove duplicates from list
        System.out.println("14. Remove duplicates from list:");
        
        List<String> fruits = Arrays.asList("apple", "banana", "apple", "orange", "banana");
        System.out.println("Original list: " + fruits);
        
        List<String> uniqueFruits = new ArrayList<>(new HashSet<>(fruits));
        System.out.println("Unique fruits: " + uniqueFruits);
        System.out.println();
        
        // 15. Find duplicates
        System.out.println("15. Find duplicates:");
        
        List<Integer> numbersList = Arrays.asList(1, 2, 3, 2, 4, 1, 5, 3, 6);
        System.out.println("Numbers: " + numbersList);
        
        HashSet<Integer> seen = new HashSet<>();
        HashSet<Integer> duplicates = new HashSet<>();
        
        for (int num : numbersList) {
            if (!seen.add(num)) {
                duplicates.add(num);
            }
        }
        
        System.out.println("Duplicates: " + duplicates);
        System.out.println();
        
        // ============ COMMON PATTERNS ============
        
        // 16. First Unique Character
        System.out.println("16. First Unique Character:");
        
        String str = "leetcode";
        char firstUnique = findFirstUnique(str);
        
        System.out.println("String: " + str);
        System.out.println("First unique character: " + firstUnique);
        System.out.println();
        
        // 17. Check if two arrays have common elements
        System.out.println("17. Common elements check:");
        
        int[] array1 = {1, 2, 3, 4};
        int[] array2 = {5, 6, 3, 7};
        
        boolean hasCommon = hasCommonElements(array1, array2);
        System.out.println("Array 1: " + Arrays.toString(array1));
        System.out.println("Array 2: " + Arrays.toString(array2));
        System.out.println("Have common elements: " + hasCommon);
        System.out.println();
        
        // 18. Count distinct elements
        System.out.println("18. Count distinct elements:");
        
        int[] nums = {1, 2, 2, 3, 4, 4, 4, 5};
        int distinctCount = countDistinct(nums);
        
        System.out.println("Array: " + Arrays.toString(nums));
        System.out.println("Distinct count: " + distinctCount);
        System.out.println();
        
        // ============ HASHSET VARIANTS ============
        
        // 19. LinkedHashSet - Maintains insertion order
        System.out.println("19. LinkedHashSet - Insertion order:");
        
        LinkedHashSet<String> linkedSet = new LinkedHashSet<>();
        linkedSet.add("Gamma");
        linkedSet.add("Alpha");
        linkedSet.add("Beta");
        
        System.out.println("LinkedHashSet: " + linkedSet);
        System.out.println("Maintains order: Gamma, Alpha, Beta");
        System.out.println();
        
        // 20. TreeSet - Sorted order
        System.out.println("20. TreeSet - Sorted order:");
        
        TreeSet<String> treeSet = new TreeSet<>();
        treeSet.add("Gamma");
        treeSet.add("Alpha");
        treeSet.add("Beta");
        
        System.out.println("TreeSet: " + treeSet);
        System.out.println("Maintains sorted order: Alpha, Beta, Gamma");
        System.out.println();
        
        // 21. Performance Comparison
        System.out.println("21. Performance Comparison:");
        
        System.out.println("HashSet:");
        System.out.println("  - Order: No guaranteed order");
        System.out.println("  - Null: Allows one null");
        System.out.println("  - Performance: O(1) for add/remove/contains");
        System.out.println("  - Use: Fast lookups, duplicates removal");
        
        System.out.println("\nLinkedHashSet:");
        System.out.println("  - Order: Insertion order");
        System.out.println("  - Null: Allows one null");
        System.out.println("  - Performance: O(1) for add/remove/contains");
        System.out.println("  - Use: When order matters");
        
        System.out.println("\nTreeSet:");
        System.out.println("  - Order: Sorted (natural or custom)");
        System.out.println("  - Null: No nulls (before Java 7)");
        System.out.println("  - Performance: O(log n) for add/remove/contains");
        System.out.println("  - Use: Sorted data, range operations");
        System.out.println();
        
        // 22. Advanced Use Cases
        System.out.println("22. Advanced Use Cases:");
        
        // Check if string has all unique characters
        String testStr1 = "abcdef";
        String testStr2 = "hello";
        
        System.out.println("\"" + testStr1 + "\" has unique chars: " + hasUniqueChars(testStr1));
        System.out.println("\"" + testStr2 + "\" has unique chars: " + hasUniqueChars(testStr2));
        System.out.println();
        
        // 23. Bulk Operations
        System.out.println("23. Bulk Operations:");
        
        HashSet<String> fruits1 = new HashSet<>(Arrays.asList("apple", "banana", "orange"));
        HashSet<String> fruits2 = new HashSet<>(Arrays.asList("banana", "grape", "mango"));
        
        // Check if sets are disjoint (no common elements)
        HashSet<String> tempSet = new HashSet<>(fruits1);
        tempSet.retainAll(fruits2);
        boolean disjoint = tempSet.isEmpty();
        
        System.out.println("Fruits1: " + fruits1);
        System.out.println("Fruits2: " + fruits2);
        System.out.println("Are disjoint: " + disjoint);
        
        System.out.println("\n=== HashSet Operations Complete ===");
    }
    
    // Helper: Find first unique character
    static char findFirstUnique(String s) {
        LinkedHashMap<Character, Integer> freq = new LinkedHashMap<>();
        
        for (char c : s.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        for (Map.Entry<Character, Integer> entry : freq.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }
        
        return '\0';  // No unique character
    }
    
    // Helper: Check common elements
    static boolean hasCommonElements(int[] arr1, int[] arr2) {
        HashSet<Integer> set = new HashSet<>();
        
        for (int num : arr1) {
            set.add(num);
        }
        
        for (int num : arr2) {
            if (set.contains(num)) {
                return true;
            }
        }
        
        return false;
    }
    
    // Helper: Count distinct elements
    static int countDistinct(int[] arr) {
        HashSet<Integer> set = new HashSet<>();
        
        for (int num : arr) {
            set.add(num);
        }
        
        return set.size();
    }
    
    // Helper: Check unique characters
    static boolean hasUniqueChars(String s) {
        HashSet<Character> set = new HashSet<>();
        
        for (char c : s.toCharArray()) {
            if (!set.add(c)) {
                return false;
            }
        }
        
        return true;
    }
}

/**
 * Key Concepts:
 * 
 * HASHSET STRUCTURE:
 * - Backed by HashMap internally
 * - Elements stored as keys, dummy value (PRESENT) as value
 * - No duplicates allowed
 * - No guaranteed order
 * 
 * UNIQUENESS:
 * - Uses hashCode() and equals() to check duplicates
 * - add() returns false if element already exists
 * - Only one null element allowed
 * 
 * TIME COMPLEXITY:
 * - add(e): O(1) average
 * - remove(e): O(1) average
 * - contains(e): O(1) average
 * - size(): O(1)
 * 
 * SET OPERATIONS:
 * - Union: addAll()
 * - Intersection: retainAll()
 * - Difference: removeAll()
 * - Subset: containsAll()
 * 
 * WHEN TO USE:
 * - Remove duplicates
 * - Fast membership testing
 * - Set operations
 * - Unique collection
 * - Mathematical sets
 * 
 * HASHSET VS LINKEDHASHSET VS TREESET:
 * - HashSet: Fastest, no order
 * - LinkedHashSet: Ordered by insertion
 * - TreeSet: Sorted, slower (O(log n))
 * 
 * Best Practices:
 * - Override hashCode() and equals() for custom objects
 * - Use when uniqueness matters
 * - Choose variant based on ordering needs
 * - Prefer HashSet for best performance
 */
