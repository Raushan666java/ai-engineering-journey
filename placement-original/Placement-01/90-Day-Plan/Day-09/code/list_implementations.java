/**
 * Day 9: List Implementations
 * 
 * Topics Covered:
 * - ArrayList (dynamic array, random access)
 * - LinkedList (doubly-linked list, efficient insertion)
 * - Vector (synchronized ArrayList, legacy)
 * - Performance comparison
 * - Converting between arrays and lists
 */

import java.util.*;

public class list_implementations {
    public static void main(String[] args) {
        System.out.println("=== List Implementations Demo ===\n");
        
        // 1. ArrayList Basics
        System.out.println("1. ArrayList Basics:");
        ArrayList<String> arrayList = new ArrayList<>();
        
        // Adding elements
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Cherry");
        arrayList.add(1, "Avocado");  // Insert at index
        
        System.out.println("ArrayList: " + arrayList);
        System.out.println("Size: " + arrayList.size());
        System.out.println("Get element at index 2: " + arrayList.get(2));
        System.out.println("Contains 'Banana': " + arrayList.contains("Banana"));
        System.out.println();
        
        // 2. ArrayList Methods
        System.out.println("2. ArrayList Methods:");
        arrayList.set(0, "Apricot");  // Replace element
        System.out.println("After set(0, 'Apricot'): " + arrayList);
        
        String removed = arrayList.remove(1);  // Remove by index
        System.out.println("Removed: " + removed);
        
        arrayList.remove("Cherry");  // Remove by object
        System.out.println("After removals: " + arrayList);
        
        int index = arrayList.indexOf("Banana");
        System.out.println("Index of 'Banana': " + index);
        System.out.println();
        
        // 3. ArrayList Iteration
        System.out.println("3. ArrayList Iteration:");
        List<Integer> numbers = new ArrayList<>(Arrays.asList(10, 20, 30, 40, 50));
        
        // For-each loop
        System.out.print("For-each: ");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        // Iterator
        System.out.print("Iterator: ");
        Iterator<Integer> iterator = numbers.iterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
        System.out.println();
        
        // forEach with lambda
        System.out.print("Lambda: ");
        numbers.forEach(n -> System.out.print(n + " "));
        System.out.println("\n");
        
        // 4. LinkedList Basics
        System.out.println("4. LinkedList Basics:");
        LinkedList<String> linkedList = new LinkedList<>();
        
        linkedList.add("First");
        linkedList.add("Second");
        linkedList.add("Third");
        linkedList.addFirst("Zero");     // Add at beginning
        linkedList.addLast("Fourth");    // Add at end
        
        System.out.println("LinkedList: " + linkedList);
        System.out.println("First element: " + linkedList.getFirst());
        System.out.println("Last element: " + linkedList.getLast());
        System.out.println();
        
        // 5. LinkedList as Deque
        System.out.println("5. LinkedList as Deque:");
        LinkedList<String> deque = new LinkedList<>();
        
        // Stack operations (LIFO)
        deque.push("Bottom");
        deque.push("Middle");
        deque.push("Top");
        System.out.println("Stack (LIFO): " + deque);
        System.out.println("Pop: " + deque.pop());
        System.out.println("After pop: " + deque);
        
        // Queue operations (FIFO)
        LinkedList<String> queue = new LinkedList<>();
        queue.offer("First");
        queue.offer("Second");
        queue.offer("Third");
        System.out.println("Queue (FIFO): " + queue);
        System.out.println("Poll: " + queue.poll());
        System.out.println("After poll: " + queue);
        System.out.println();
        
        // 6. Vector (Legacy, Synchronized)
        System.out.println("6. Vector (Legacy):");
        Vector<String> vector = new Vector<>();
        vector.add("V1");
        vector.add("V2");
        vector.add("V3");
        
        System.out.println("Vector: " + vector);
        System.out.println("Capacity: " + vector.capacity());
        System.out.println("Size: " + vector.size());
        System.out.println();
        
        // 7. Performance Comparison
        System.out.println("7. Performance Comparison:");
        performanceTest();
        System.out.println();
        
        // 8. Array to List Conversion
        System.out.println("8. Array to List Conversion:");
        String[] array = {"A", "B", "C", "D"};
        
        // Arrays.asList() - fixed size
        List<String> fixedList = Arrays.asList(array);
        System.out.println("Fixed-size list: " + fixedList);
        // fixedList.add("E");  // UnsupportedOperationException
        
        // Mutable list
        List<String> mutableList = new ArrayList<>(Arrays.asList(array));
        mutableList.add("E");
        System.out.println("Mutable list: " + mutableList);
        
        // List to Array
        String[] backToArray = mutableList.toArray(new String[0]);
        System.out.println("Back to array: " + Arrays.toString(backToArray));
        System.out.println();
        
        // 9. Sublist Operations
        System.out.println("9. Sublist Operations:");
        List<Integer> nums = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
        List<Integer> sublist = nums.subList(2, 7);  // [3, 4, 5, 6, 7]
        System.out.println("Original: " + nums);
        System.out.println("Sublist (2-7): " + sublist);
        
        sublist.clear();  // Clears sublist AND affects original
        System.out.println("After sublist.clear(): " + nums);
        System.out.println();
        
        // 10. List Utility Methods
        System.out.println("10. List Utility Methods:");
        List<Integer> list1 = new ArrayList<>(Arrays.asList(5, 2, 8, 1, 9, 3));
        
        // Sort
        Collections.sort(list1);
        System.out.println("Sorted: " + list1);
        
        // Reverse
        Collections.reverse(list1);
        System.out.println("Reversed: " + list1);
        
        // Shuffle
        Collections.shuffle(list1);
        System.out.println("Shuffled: " + list1);
        
        // Binary search (requires sorted list)
        Collections.sort(list1);
        int searchIndex = Collections.binarySearch(list1, 5);
        System.out.println("Binary search for 5: index " + searchIndex);
        
        // Min and Max
        System.out.println("Min: " + Collections.min(list1));
        System.out.println("Max: " + Collections.max(list1));
        
        // Frequency
        List<String> words = Arrays.asList("apple", "banana", "apple", "cherry", "apple");
        System.out.println("Frequency of 'apple': " + Collections.frequency(words, "apple"));
        System.out.println();
        
        System.out.println("=== List Implementations Demo Complete ===");
    }
    
    // Performance comparison between ArrayList and LinkedList
    public static void performanceTest() {
        int size = 100000;
        
        // ArrayList performance
        ArrayList<Integer> arrayList = new ArrayList<>();
        long startTime = System.nanoTime();
        for (int i = 0; i < size; i++) {
            arrayList.add(i);
        }
        long endTime = System.nanoTime();
        System.out.println("ArrayList add() time: " + (endTime - startTime) / 1000000 + " ms");
        
        // LinkedList performance
        LinkedList<Integer> linkedList = new LinkedList<>();
        startTime = System.nanoTime();
        for (int i = 0; i < size; i++) {
            linkedList.add(i);
        }
        endTime = System.nanoTime();
        System.out.println("LinkedList add() time: " + (endTime - startTime) / 1000000 + " ms");
        
        // Random access - ArrayList should be faster
        startTime = System.nanoTime();
        for (int i = 0; i < 1000; i++) {
            arrayList.get(50000);
        }
        endTime = System.nanoTime();
        System.out.println("ArrayList get() time: " + (endTime - startTime) / 1000000 + " ms");
        
        startTime = System.nanoTime();
        for (int i = 0; i < 1000; i++) {
            linkedList.get(50000);
        }
        endTime = System.nanoTime();
        System.out.println("LinkedList get() time: " + (endTime - startTime) / 1000000 + " ms");
        
        // Insert at beginning - LinkedList should be faster
        startTime = System.nanoTime();
        for (int i = 0; i < 1000; i++) {
            arrayList.add(0, i);
        }
        endTime = System.nanoTime();
        System.out.println("ArrayList add(0, e) time: " + (endTime - startTime) / 1000000 + " ms");
        
        startTime = System.nanoTime();
        for (int i = 0; i < 1000; i++) {
            linkedList.add(0, i);
        }
        endTime = System.nanoTime();
        System.out.println("LinkedList add(0, e) time: " + (endTime - startTime) / 1000000 + " ms");
    }
}

/**
 * Key Concepts:
 * 
 * ArrayList:
 * - Backed by dynamic array
 * - Fast random access: O(1) for get()
 * - Slow insertion/deletion: O(n) for add(0, e)
 * - Resizes when capacity reached (1.5x growth)
 * - Use when: frequent random access, rare modifications
 * 
 * LinkedList:
 * - Doubly-linked list implementation
 * - Slow random access: O(n) for get()
 * - Fast insertion/deletion: O(1) at known position
 * - Implements Deque interface
 * - Use when: frequent insertions/deletions, sequential access
 * 
 * Vector:
 * - Synchronized ArrayList (thread-safe)
 * - Legacy class (use ArrayList + synchronization instead)
 * - Slower than ArrayList due to synchronization
 * - Doubles capacity when full (ArrayList grows 1.5x)
 * 
 * Time Complexities:
 * 
 * ArrayList:
 * - get(index): O(1)
 * - add(element): O(1) amortized, O(n) worst case
 * - add(index, element): O(n)
 * - remove(index): O(n)
 * - contains(element): O(n)
 * 
 * LinkedList:
 * - get(index): O(n)
 * - add(element): O(1)
 * - add(index, element): O(n) to find position, O(1) to insert
 * - remove(index): O(n) to find, O(1) to remove
 * - contains(element): O(n)
 * 
 * Interview Tips:
 * - ArrayList for random access, LinkedList for insertions
 * - Vector is synchronized but outdated
 * - Arrays.asList() creates fixed-size list
 * - Sublist is a view, changes affect original
 * - Use ArrayList by default unless specific need for LinkedList
 */
