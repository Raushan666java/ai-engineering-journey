/*
 * ============================================================================
 * DAY 9 PRACTICE PROBLEMS
 * Topics: Collections, Generics, Type Erasure
 * Total: 30 Problems with Complete Solutions
 * ============================================================================
 * 
 * PROBLEM CATEGORIES:
 * Section 1: Collection Basics (Problems 1-5)
 * Section 2: List Operations (Problems 6-10)
 * Section 3: Set and Map Operations (Problems 11-15)
 * Section 4: Queue and Priority Queue (Problems 16-20)
 * Section 5: Generics Fundamentals (Problems 21-25)
 * Section 6: Advanced Generics and Type Erasure (Problems 26-30)
 */

import java.util.*;
import java.util.stream.*;
import java.util.function.*;

public class Day9PracticeProblems {

    // ========================================================================
    // SECTION 1: COLLECTION BASICS (Problems 1-5)
    // ========================================================================

    /**
     * Problem 1: Remove Duplicates from ArrayList
     * Given: [1, 2, 2, 3, 4, 4, 5]
     * Output: [1, 2, 3, 4, 5] (order preserved)
     */
    public static List<Integer> removeDuplicates(List<Integer> list) {
        // Solution 1: Using LinkedHashSet (preserves order)
        return new ArrayList<>(new LinkedHashSet<>(list));
        
        // Solution 2: Using Stream distinct()
        // return list.stream().distinct().collect(Collectors.toList());
    }

    /**
     * Problem 2: Find First Non-Repeating Element
     * Given: [4, 5, 4, 6, 5, 7]
     * Output: 6
     */
    public static Integer firstNonRepeating(List<Integer> list) {
        Map<Integer, Integer> frequency = new LinkedHashMap<>();
        
        // Count frequencies
        for (Integer num : list) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
        }
        
        // Find first with frequency 1
        for (Map.Entry<Integer, Integer> entry : frequency.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }
        
        return null;
    }

    /**
     * Problem 3: Intersection of Two Lists
     * Given: list1 = [1, 2, 3, 4], list2 = [3, 4, 5, 6]
     * Output: [3, 4]
     */
    public static List<Integer> intersection(List<Integer> list1, List<Integer> list2) {
        Set<Integer> set1 = new HashSet<>(list1);
        Set<Integer> set2 = new HashSet<>(list2);
        
        set1.retainAll(set2);  // Intersection operation
        
        return new ArrayList<>(set1);
    }

    /**
     * Problem 4: Union of Two Lists (No Duplicates)
     * Given: list1 = [1, 2, 3], list2 = [3, 4, 5]
     * Output: [1, 2, 3, 4, 5]
     */
    public static List<Integer> union(List<Integer> list1, List<Integer> list2) {
        Set<Integer> unionSet = new HashSet<>(list1);
        unionSet.addAll(list2);
        
        return new ArrayList<>(unionSet);
    }

    /**
     * Problem 5: Frequency Map of Elements
     * Given: [apple, banana, apple, cherry, banana, apple]
     * Output: {apple=3, banana=2, cherry=1}
     */
    public static Map<String, Integer> frequencyMap(List<String> list) {
        Map<String, Integer> freq = new HashMap<>();
        
        for (String item : list) {
            freq.put(item, freq.getOrDefault(item, 0) + 1);
        }
        
        return freq;
    }

    // ========================================================================
    // SECTION 2: LIST OPERATIONS (Problems 6-10)
    // ========================================================================

    /**
     * Problem 6: Reverse a List In-Place
     * Given: [1, 2, 3, 4, 5]
     * Output: [5, 4, 3, 2, 1]
     */
    public static void reverseList(List<Integer> list) {
        Collections.reverse(list);
        
        // Manual solution:
        // int left = 0, right = list.size() - 1;
        // while (left < right) {
        //     Collections.swap(list, left++, right--);
        // }
    }

    /**
     * Problem 7: Rotate List by K Positions
     * Given: [1, 2, 3, 4, 5], k = 2
     * Output: [4, 5, 1, 2, 3]
     */
    public static void rotateList(List<Integer> list, int k) {
        if (list == null || list.size() == 0) return;
        
        k = k % list.size();  // Handle k > size
        Collections.rotate(list, k);
        
        // Manual solution:
        // List<Integer> temp = new ArrayList<>(list.subList(list.size() - k, list.size()));
        // temp.addAll(list.subList(0, list.size() - k));
        // list.clear();
        // list.addAll(temp);
    }

    /**
     * Problem 8: Find Median from ArrayList
     * Given: [3, 1, 4, 2, 5]
     * Output: 3.0
     */
    public static double findMedian(List<Integer> list) {
        List<Integer> sorted = new ArrayList<>(list);
        Collections.sort(sorted);
        
        int n = sorted.size();
        if (n % 2 == 0) {
            return (sorted.get(n/2 - 1) + sorted.get(n/2)) / 2.0;
        } else {
            return sorted.get(n/2);
        }
    }

    /**
     * Problem 9: Merge Two Sorted Lists
     * Given: list1 = [1, 3, 5], list2 = [2, 4, 6]
     * Output: [1, 2, 3, 4, 5, 6]
     */
    public static List<Integer> mergeSortedLists(List<Integer> list1, List<Integer> list2) {
        List<Integer> result = new ArrayList<>();
        int i = 0, j = 0;
        
        while (i < list1.size() && j < list2.size()) {
            if (list1.get(i) <= list2.get(j)) {
                result.add(list1.get(i++));
            } else {
                result.add(list2.get(j++));
            }
        }
        
        while (i < list1.size()) result.add(list1.get(i++));
        while (j < list2.size()) result.add(list2.get(j++));
        
        return result;
    }

    /**
     * Problem 10: Partition List into Even and Odd
     * Given: [1, 2, 3, 4, 5, 6]
     * Output: {even=[2, 4, 6], odd=[1, 3, 5]}
     */
    public static Map<String, List<Integer>> partitionEvenOdd(List<Integer> list) {
        Map<String, List<Integer>> result = new HashMap<>();
        result.put("even", new ArrayList<>());
        result.put("odd", new ArrayList<>());
        
        for (Integer num : list) {
            if (num % 2 == 0) {
                result.get("even").add(num);
            } else {
                result.get("odd").add(num);
            }
        }
        
        return result;
    }

    // ========================================================================
    // SECTION 3: SET AND MAP OPERATIONS (Problems 11-15)
    // ========================================================================

    /**
     * Problem 11: Check if Two Strings are Anagrams
     * Given: "listen", "silent"
     * Output: true
     */
    public static boolean areAnagrams(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        
        Map<Character, Integer> freq = new HashMap<>();
        
        for (char c : s1.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        for (char c : s2.toCharArray()) {
            if (!freq.containsKey(c)) return false;
            freq.put(c, freq.get(c) - 1);
            if (freq.get(c) < 0) return false;
        }
        
        return true;
    }

    /**
     * Problem 12: Find Symmetric Pairs in Map
     * Given: {(1,2), (2,1), (3,4), (5,6), (6,5)}
     * Output: [(1,2), (5,6)]
     */
    public static List<Map.Entry<Integer, Integer>> findSymmetricPairs(
            List<Map.Entry<Integer, Integer>> pairs) {
        
        Map<Integer, Integer> map = new HashMap<>();
        List<Map.Entry<Integer, Integer>> result = new ArrayList<>();
        
        for (Map.Entry<Integer, Integer> pair : pairs) {
            Integer key = pair.getKey();
            Integer value = pair.getValue();
            
            if (map.containsKey(value) && map.get(value).equals(key)) {
                result.add(new AbstractMap.SimpleEntry<>(value, key));
            } else {
                map.put(key, value);
            }
        }
        
        return result;
    }

    /**
     * Problem 13: Count Words in String
     * Given: "hello world hello java world"
     * Output: {hello=2, world=2, java=1}
     */
    public static Map<String, Integer> countWords(String text) {
        Map<String, Integer> wordCount = new HashMap<>();
        String[] words = text.toLowerCase().split("\\s+");
        
        for (String word : words) {
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }
        
        return wordCount;
    }

    /**
     * Problem 14: Find Missing Number in Range
     * Given: Set {1, 2, 4, 5, 6}, range 1-6
     * Output: 3
     */
    public static int findMissingNumber(Set<Integer> set, int start, int end) {
        for (int i = start; i <= end; i++) {
            if (!set.contains(i)) {
                return i;
            }
        }
        return -1;  // No missing number
    }

    /**
     * Problem 15: LRU Cache Implementation
     * Implement get() and put() with O(1) complexity
     */
    static class LRUCache<K, V> extends LinkedHashMap<K, V> {
        private final int capacity;
        
        public LRUCache(int capacity) {
            super(capacity, 0.75f, true);  // accessOrder = true
            this.capacity = capacity;
        }
        
        @Override
        protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
            return size() > capacity;
        }
    }

    // ========================================================================
    // SECTION 4: QUEUE AND PRIORITY QUEUE (Problems 16-20)
    // ========================================================================

    /**
     * Problem 16: Implement Stack Using Queue
     */
    static class StackUsingQueue<T> {
        private Queue<T> queue = new LinkedList<>();
        
        public void push(T item) {
            queue.offer(item);
            // Rotate queue to make last element first
            for (int i = 0; i < queue.size() - 1; i++) {
                queue.offer(queue.poll());
            }
        }
        
        public T pop() {
            return queue.poll();
        }
        
        public T peek() {
            return queue.peek();
        }
        
        public boolean isEmpty() {
            return queue.isEmpty();
        }
    }

    /**
     * Problem 17: Find Kth Largest Element
     * Given: [3, 2, 1, 5, 6, 4], k = 2
     * Output: 5
     */
    public static int findKthLargest(int[] nums, int k) {
        // Min-heap of size k
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        
        return minHeap.peek();
    }

    /**
     * Problem 18: Merge K Sorted Lists
     * Given: [[1,4,5], [1,3,4], [2,6]]
     * Output: [1,1,2,3,4,4,5,6]
     */
    public static List<Integer> mergeKSortedLists(List<List<Integer>> lists) {
        PriorityQueue<int[]> minHeap = new PriorityQueue<>(
            (a, b) -> lists.get(a[0]).get(a[1]) - lists.get(b[0]).get(b[1])
        );
        
        // Add first element from each list
        for (int i = 0; i < lists.size(); i++) {
            if (!lists.get(i).isEmpty()) {
                minHeap.offer(new int[]{i, 0});  // {listIndex, elementIndex}
            }
        }
        
        List<Integer> result = new ArrayList<>();
        
        while (!minHeap.isEmpty()) {
            int[] curr = minHeap.poll();
            int listIdx = curr[0];
            int elemIdx = curr[1];
            
            result.add(lists.get(listIdx).get(elemIdx));
            
            // Add next element from same list
            if (elemIdx + 1 < lists.get(listIdx).size()) {
                minHeap.offer(new int[]{listIdx, elemIdx + 1});
            }
        }
        
        return result;
    }

    /**
     * Problem 19: Task Scheduler with Priority
     * Tasks have priority and name. Execute in priority order.
     */
    static class Task implements Comparable<Task> {
        String name;
        int priority;
        
        Task(String name, int priority) {
            this.name = name;
            this.priority = priority;
        }
        
        @Override
        public int compareTo(Task other) {
            return Integer.compare(other.priority, this.priority);  // Higher priority first
        }
        
        @Override
        public String toString() {
            return name + "(P" + priority + ")";
        }
    }
    
    public static List<String> executeTasks(List<Task> tasks) {
        PriorityQueue<Task> pq = new PriorityQueue<>(tasks);
        List<String> executionOrder = new ArrayList<>();
        
        while (!pq.isEmpty()) {
            executionOrder.add(pq.poll().name);
        }
        
        return executionOrder;
    }

    /**
     * Problem 20: Sliding Window Maximum
     * Given: nums = [1,3,-1,-3,5,3,6,7], k = 3
     * Output: [3,3,5,5,6,7]
     */
    public static int[] slidingWindowMaximum(int[] nums, int k) {
        Deque<Integer> deque = new ArrayDeque<>();  // Store indices
        int[] result = new int[nums.length - k + 1];
        int ri = 0;
        
        for (int i = 0; i < nums.length; i++) {
            // Remove elements outside window
            while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
                deque.pollFirst();
            }
            
            // Remove smaller elements from back
            while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
                deque.pollLast();
            }
            
            deque.offerLast(i);
            
            // Add to result when window is complete
            if (i >= k - 1) {
                result[ri++] = nums[deque.peekFirst()];
            }
        }
        
        return result;
    }

    // ========================================================================
    // SECTION 5: GENERICS FUNDAMENTALS (Problems 21-25)
    // ========================================================================

    /**
     * Problem 21: Generic Swap Method
     * Swap two elements in an array
     */
    public static <T> void swap(T[] array, int i, int j) {
        T temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    /**
     * Problem 22: Generic Min Method
     * Find minimum element in array
     */
    public static <T extends Comparable<T>> T findMin(T[] array) {
        if (array == null || array.length == 0) {
            throw new IllegalArgumentException("Array is empty");
        }
        
        T min = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i].compareTo(min) < 0) {
                min = array[i];
            }
        }
        
        return min;
    }

    /**
     * Problem 23: Generic Pair Class
     * Create a generic pair to hold two values
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
        
        public void setKey(K key) { this.key = key; }
        public void setValue(V value) { this.value = value; }
        
        @Override
        public String toString() {
            return "(" + key + ", " + value + ")";
        }
    }

    /**
     * Problem 24: Generic Stack Implementation
     */
    static class GenericStack<T> {
        private List<T> elements = new ArrayList<>();
        
        public void push(T item) {
            elements.add(item);
        }
        
        public T pop() {
            if (isEmpty()) {
                throw new EmptyStackException();
            }
            return elements.remove(elements.size() - 1);
        }
        
        public T peek() {
            if (isEmpty()) {
                throw new EmptyStackException();
            }
            return elements.get(elements.size() - 1);
        }
        
        public boolean isEmpty() {
            return elements.isEmpty();
        }
        
        public int size() {
            return elements.size();
        }
    }

    /**
     * Problem 25: Generic Filter Method
     * Filter list based on predicate
     */
    public static <T> List<T> filter(List<T> list, Predicate<T> predicate) {
        List<T> result = new ArrayList<>();
        for (T item : list) {
            if (predicate.test(item)) {
                result.add(item);
            }
        }
        return result;
    }

    // ========================================================================
    // SECTION 6: ADVANCED GENERICS AND TYPE ERASURE (Problems 26-30)
    // ========================================================================

    /**
     * Problem 26: Wildcard - Sum of Numbers
     * Accept any List of Number subclasses
     */
    public static double sum(List<? extends Number> numbers) {
        double sum = 0.0;
        for (Number num : numbers) {
            sum += num.doubleValue();
        }
        return sum;
    }

    /**
     * Problem 27: Wildcard - Add Integers
     * Add integers to list of Integer or any superclass
     */
    public static void addIntegers(List<? super Integer> list) {
        for (int i = 1; i <= 5; i++) {
            list.add(i);
        }
    }

    /**
     * Problem 28: Generic Copy Method (PECS)
     * Copy from source to destination
     */
    public static <T> void copy(List<? extends T> source, List<? super T> dest) {
        for (T item : source) {
            dest.add(item);
        }
    }

    /**
     * Problem 29: Type-Safe Heterogeneous Container
     * Store different types with type safety
     */
    static class TypeSafeMap {
        private Map<Class<?>, Object> map = new HashMap<>();
        
        public <T> void put(Class<T> type, T instance) {
            map.put(type, type.cast(instance));
        }
        
        public <T> T get(Class<T> type) {
            return type.cast(map.get(type));
        }
    }

    /**
     * Problem 30: Generic Method with Multiple Bounds
     * Find max of elements that are Comparable and have doubleValue()
     */
    public static <T extends Number & Comparable<T>> T findMaxNumber(List<T> list) {
        if (list == null || list.isEmpty()) {
            throw new IllegalArgumentException("List is empty");
        }
        
        T max = list.get(0);
        for (T item : list) {
            if (item.compareTo(max) > 0) {
                max = item;
            }
        }
        
        return max;
    }

    // ========================================================================
    // TEST ALL PROBLEMS
    // ========================================================================

    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║          DAY 9 PRACTICE PROBLEMS - ALL SOLUTIONS           ║");
        System.out.println("║          30 Problems on Collections & Generics             ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        // Section 1: Collection Basics
        System.out.println("=== SECTION 1: COLLECTION BASICS ===\n");
        
        System.out.println("Problem 1: Remove Duplicates");
        System.out.println(removeDuplicates(Arrays.asList(1, 2, 2, 3, 4, 4, 5)));
        
        System.out.println("\nProblem 2: First Non-Repeating");
        System.out.println(firstNonRepeating(Arrays.asList(4, 5, 4, 6, 5, 7)));
        
        System.out.println("\nProblem 3: Intersection");
        System.out.println(intersection(
            Arrays.asList(1, 2, 3, 4),
            Arrays.asList(3, 4, 5, 6)
        ));
        
        System.out.println("\nProblem 4: Union");
        System.out.println(union(
            Arrays.asList(1, 2, 3),
            Arrays.asList(3, 4, 5)
        ));
        
        System.out.println("\nProblem 5: Frequency Map");
        System.out.println(frequencyMap(Arrays.asList("apple", "banana", "apple", "cherry", "banana", "apple")));
        
        // Section 2: List Operations
        System.out.println("\n=== SECTION 2: LIST OPERATIONS ===\n");
        
        System.out.println("Problem 6: Reverse List");
        List<Integer> list6 = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        reverseList(list6);
        System.out.println(list6);
        
        System.out.println("\nProblem 7: Rotate List");
        List<Integer> list7 = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        rotateList(list7, 2);
        System.out.println(list7);
        
        System.out.println("\nProblem 8: Find Median");
        System.out.println(findMedian(Arrays.asList(3, 1, 4, 2, 5)));
        
        System.out.println("\nProblem 9: Merge Sorted Lists");
        System.out.println(mergeSortedLists(
            Arrays.asList(1, 3, 5),
            Arrays.asList(2, 4, 6)
        ));
        
        System.out.println("\nProblem 10: Partition Even/Odd");
        System.out.println(partitionEvenOdd(Arrays.asList(1, 2, 3, 4, 5, 6)));
        
        // Section 3: Set and Map
        System.out.println("\n=== SECTION 3: SET AND MAP OPERATIONS ===\n");
        
        System.out.println("Problem 11: Anagrams");
        System.out.println(areAnagrams("listen", "silent"));
        
        System.out.println("\nProblem 13: Count Words");
        System.out.println(countWords("hello world hello java world"));
        
        System.out.println("\nProblem 14: Missing Number");
        System.out.println(findMissingNumber(new HashSet<>(Arrays.asList(1, 2, 4, 5, 6)), 1, 6));
        
        System.out.println("\nProblem 15: LRU Cache");
        LRUCache<Integer, String> cache = new LRUCache<>(3);
        cache.put(1, "A");
        cache.put(2, "B");
        cache.put(3, "C");
        cache.get(1);  // Access 1
        cache.put(4, "D");  // Should evict 2
        System.out.println("Cache: " + cache);
        
        // Section 4: Queue and PriorityQueue
        System.out.println("\n=== SECTION 4: QUEUE AND PRIORITY QUEUE ===\n");
        
        System.out.println("Problem 16: Stack Using Queue");
        StackUsingQueue<Integer> stack = new StackUsingQueue<>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        System.out.println("Pop: " + stack.pop() + ", Peek: " + stack.peek());
        
        System.out.println("\nProblem 17: Kth Largest");
        System.out.println(findKthLargest(new int[]{3, 2, 1, 5, 6, 4}, 2));
        
        System.out.println("\nProblem 19: Task Scheduler");
        List<Task> tasks = Arrays.asList(
            new Task("Email", 2),
            new Task("Meeting", 5),
            new Task("Coffee", 1)
        );
        System.out.println("Execution order: " + executeTasks(tasks));
        
        System.out.println("\nProblem 20: Sliding Window Maximum");
        System.out.println(Arrays.toString(slidingWindowMaximum(new int[]{1,3,-1,-3,5,3,6,7}, 3)));
        
        // Section 5: Generics Fundamentals
        System.out.println("\n=== SECTION 5: GENERICS FUNDAMENTALS ===\n");
        
        System.out.println("Problem 21: Generic Swap");
        Integer[] arr21 = {1, 2, 3, 4, 5};
        swap(arr21, 0, 4);
        System.out.println(Arrays.toString(arr21));
        
        System.out.println("\nProblem 22: Generic Min");
        System.out.println(findMin(new Integer[]{5, 2, 8, 1, 9}));
        
        System.out.println("\nProblem 23: Generic Pair");
        Pair<String, Integer> pair = new Pair<>("Age", 25);
        System.out.println(pair);
        
        System.out.println("\nProblem 24: Generic Stack");
        GenericStack<String> genStack = new GenericStack<>();
        genStack.push("A");
        genStack.push("B");
        genStack.push("C");
        System.out.println("Pop: " + genStack.pop() + ", Peek: " + genStack.peek());
        
        System.out.println("\nProblem 25: Generic Filter");
        List<Integer> filtered = filter(
            Arrays.asList(1, 2, 3, 4, 5, 6),
            n -> n % 2 == 0
        );
        System.out.println("Even numbers: " + filtered);
        
        // Section 6: Advanced Generics
        System.out.println("\n=== SECTION 6: ADVANCED GENERICS ===\n");
        
        System.out.println("Problem 26: Wildcard Sum");
        System.out.println("Sum of integers: " + sum(Arrays.asList(1, 2, 3, 4, 5)));
        System.out.println("Sum of doubles: " + sum(Arrays.asList(1.5, 2.5, 3.5)));
        
        System.out.println("\nProblem 27: Add Integers");
        List<Number> numbers27 = new ArrayList<>();
        addIntegers(numbers27);
        System.out.println(numbers27);
        
        System.out.println("\nProblem 28: Generic Copy (PECS)");
        List<Integer> source28 = Arrays.asList(1, 2, 3);
        List<Number> dest28 = new ArrayList<>();
        copy(source28, dest28);
        System.out.println("Copied: " + dest28);
        
        System.out.println("\nProblem 29: Type-Safe Map");
        TypeSafeMap tsMap = new TypeSafeMap();
        tsMap.put(String.class, "Hello");
        tsMap.put(Integer.class, 42);
        System.out.println("String: " + tsMap.get(String.class));
        System.out.println("Integer: " + tsMap.get(Integer.class));
        
        System.out.println("\nProblem 30: Multiple Bounds");
        System.out.println("Max: " + findMaxNumber(Arrays.asList(1, 5, 3, 9, 2)));
        
        System.out.println("\n╔════════════════════════════════════════════════════════════╗");
        System.out.println("║            ALL 30 PROBLEMS COMPLETED!                      ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
    }
}
