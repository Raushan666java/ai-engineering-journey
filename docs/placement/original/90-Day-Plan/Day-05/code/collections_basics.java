/**
 * Day 5 - Collections Basics
 * Demonstrates ArrayList, LinkedList, HashSet, TreeSet, HashMap and common operations
 */

import java.util.*;

public class collections_basics {

    public static void main(String[] args) {
        System.out.println("=== COLLECTIONS BASICS - DAY 5 ===\n");

        demonstrateList();
        demonstrateSet();
        demonstrateMap();
        demonstrateQueueAndStack();
        demonstrateSortingAndComparator();
    }

    public static void demonstrateList() {
        System.out.println("1. LIST - ArrayList & LinkedList");

        List<String> arrayList = new ArrayList<>();
        arrayList.add("Alice");
        arrayList.add("Bob");

        List<String> linkedList = new LinkedList<>();
        linkedList.add("Carol");
        linkedList.add("Dan");

        System.out.println("ArrayList: " + arrayList);
        System.out.println("LinkedList: " + linkedList);

        // Combine
        linkedList.addAll(arrayList);
        System.out.println("linkedList after addAll: " + linkedList);

        // Remove demonstration
        linkedList.remove("Bob");
        System.out.println("After remove Bob: " + linkedList);

        // Iteration
        System.out.println("Iteration with iterator:");
        Iterator<String> it = linkedList.iterator();
        while (it.hasNext()) {
            System.out.print(it.next() + " ");
        }
        System.out.println();

        System.out.println();
    }

    public static void demonstrateSet() {
        System.out.println("2. SET - HashSet & TreeSet");

        Set<String> hashSet = new HashSet<>();
        hashSet.add("apple");
        hashSet.add("banana");
        hashSet.add("apple"); // duplicate ignored

        Set<String> treeSet = new TreeSet<>();
        treeSet.add("zebra");
        treeSet.add("apple");
        treeSet.add("mango");

        System.out.println("HashSet: " + hashSet);
        System.out.println("TreeSet (sorted): " + treeSet);

        System.out.println();
    }

    public static void demonstrateMap() {
        System.out.println("3. MAP - HashMap & TreeMap");

        Map<String, Integer> hashMap = new HashMap<>();
        hashMap.put("Alice", 25);
        hashMap.put("Bob", 30);

        System.out.println("HashMap: " + hashMap);
        System.out.println("Get Alice: " + hashMap.get("Alice"));

        Map<String, Integer> treeMap = new TreeMap<>();
        treeMap.put("Charlie", 27);
        treeMap.put("Dan", 29);
        System.out.println("TreeMap (sorted by key): " + treeMap);

        // Iterating through entries
        for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }

        System.out.println();
    }

    public static void demonstrateQueueAndStack() {
        System.out.println("4. QUEUE & STACK");

        Queue<Integer> queue = new LinkedList<>();
        queue.add(1);
        queue.add(2);
        queue.add(3);

        System.out.println("Queue poll: " + queue.poll());
        System.out.println("Queue peek: " + queue.peek());

        Deque<String> stack = new ArrayDeque<>();
        stack.push("first");
        stack.push("second");
        System.out.println("Stack pop: " + stack.pop());

        System.out.println();
    }

    public static void demonstrateSortingAndComparator() {
        System.out.println("5. SORTING & COMPARATOR");

        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 25));
        people.add(new Person("Bob", 20));
        people.add(new Person("Cathy", 30));

        System.out.println("Before sort: " + people);
        // Sort by age asc
        people.sort(Comparator.comparingInt(p -> p.age));
        System.out.println("After sort (by age): " + people);

        // Custom comparator - name length
        people.sort(Comparator.comparingInt(p -> p.name.length()));
        System.out.println("After sort (name length): " + people);

        System.out.println();
    }

    static class Person {
        String name;
        int age;

        Person(String name, int age) { this.name = name; this.age = age; }

        public String toString() { return name + "(" + age + ")"; }
    }
}
