/**
 * DAY 11: CONCURRENT COLLECTIONS COMPLETE GUIDE
 * 
 * Complete reference for Java Concurrent Collections
 * 
 * Topics Covered:
 * 1. ConcurrentHashMap
 * 2. CopyOnWriteArrayList
 * 3. CopyOnWriteArraySet
 * 4. ConcurrentLinkedQueue
 * 5. BlockingQueue (LinkedBlockingQueue, ArrayBlockingQueue)
 * 6. PriorityBlockingQueue
 * 7. DelayQueue
 * 8. SynchronousQueue
 * 9. ConcurrentSkipListMap & ConcurrentSkipListSet
 * 10. Performance Comparison & Best Practices
 * 
 * Total Sections: 10
 * Lines: 1800+
 */

package day11.concurrent;

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;

public class ConcurrentCollectionsComplete {

    // ============================================
    // SECTION 1: CONCURRENTHASHMAP
    // ============================================
    
    static class ConcurrentHashMapDemo {
        
        /**
         * ConcurrentHashMap: Thread-safe HashMap
         * - Segment-level locking (not whole map)
         * - Better performance than Hashtable
         * - No null keys or values
         * - Atomic operations (putIfAbsent, compute, merge)
         */
        
        static void basicOperations() {
            System.out.println("\n=== ConcurrentHashMap Basic Operations ===\n");
            
            ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
            
            // Put operations
            map.put("One", 1);
            map.put("Two", 2);
            map.put("Three", 3);
            
            System.out.println("Map: " + map);
            
            // putIfAbsent - atomic operation
            Integer prev = map.putIfAbsent("Four", 4);
            System.out.println("putIfAbsent(Four, 4): " + prev); // null
            
            prev = map.putIfAbsent("One", 10);
            System.out.println("putIfAbsent(One, 10): " + prev); // 1 (not updated)
            
            // Get operations
            System.out.println("get(One): " + map.get("One"));
            System.out.println("getOrDefault(Five, 0): " + map.getOrDefault("Five", 0));
            
            // Remove
            map.remove("Two");
            System.out.println("After remove(Two): " + map);
            
            // computeIfAbsent - atomic
            map.computeIfAbsent("Five", k -> 5);
            System.out.println("After computeIfAbsent(Five, 5): " + map);
            
            // computeIfPresent - atomic
            map.computeIfPresent("One", (k, v) -> v * 10);
            System.out.println("After computeIfPresent(One, v*10): " + map);
            
            // compute - atomic
            map.compute("Six", (k, v) -> v == null ? 1 : v + 1);
            System.out.println("After compute(Six): " + map);
            
            // merge - atomic
            map.merge("Three", 10, Integer::sum);
            System.out.println("After merge(Three, 10, sum): " + map);
        }
        
        static void concurrentAccess() throws InterruptedException {
            System.out.println("\n=== ConcurrentHashMap Concurrent Access ===\n");
            
            ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
            
            // Multiple threads writing
            ExecutorService executor = Executors.newFixedThreadPool(10);
            
            for (int i = 0; i < 100; i++) {
                int num = i;
                executor.submit(() -> {
                    map.put("Key" + num, num);
                });
            }
            
            executor.shutdown();
            executor.awaitTermination(5, TimeUnit.SECONDS);
            
            System.out.println("Map size: " + map.size()); // Always 100
            System.out.println("Thread-safe!\n");
        }
        
        static void wordCount() throws InterruptedException {
            System.out.println("\n=== Word Count with ConcurrentHashMap ===\n");
            
            String[] words = {"apple", "banana", "apple", "cherry", "banana", "apple"};
            ConcurrentHashMap<String, Integer> wordCount = new ConcurrentHashMap<>();
            
            ExecutorService executor = Executors.newFixedThreadPool(3);
            
            for (String word : words) {
                executor.submit(() -> {
                    wordCount.merge(word, 1, Integer::sum); // Atomic increment
                });
            }
            
            executor.shutdown();
            executor.awaitTermination(5, TimeUnit.SECONDS);
            
            System.out.println("Word count: " + wordCount);
            // {apple=3, banana=2, cherry=1}
        }
    }
    
    // ============================================
    // SECTION 2: COPYONWRITEARRAYLIST
    // ============================================
    
    static class CopyOnWriteArrayListDemo {
        
        /**
         * CopyOnWriteArrayList: Thread-safe ArrayList
         * - Creates copy on write (add, set, remove)
         * - Read operations don't lock
         * - Best for read-heavy workloads
         * - Iterators are snapshot-based (won't throw ConcurrentModificationException)
         */
        
        static void basicOperations() {
            System.out.println("\n=== CopyOnWriteArrayList Basic Operations ===\n");
            
            CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();
            
            // Add elements
            list.add("Java");
            list.add("Python");
            list.add("C++");
            
            System.out.println("List: " + list);
            
            // Read (no locking)
            for (String lang : list) {
                System.out.println(lang);
            }
            
            // Modify during iteration (safe!)
            for (String lang : list) {
                if (lang.equals("Python")) {
                    list.add("JavaScript"); // No ConcurrentModificationException!
                }
                System.out.println(lang);
            }
            
            System.out.println("After modification: " + list);
        }
        
        static void safeIteration() throws InterruptedException {
            System.out.println("\n=== Safe Iteration ===\n");
            
            CopyOnWriteArrayList<Integer> list = new CopyOnWriteArrayList<>();
            
            for (int i = 1; i <= 10; i++) {
                list.add(i);
            }
            
            // Thread 1: Iterate
            Thread reader = new Thread(() -> {
                for (Integer num : list) {
                    System.out.println("Reading: " + num);
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {}
                }
            });
            
            // Thread 2: Modify
            Thread writer = new Thread(() -> {
                try {
                    Thread.sleep(300);
                    list.add(11);
                    System.out.println("Added 11");
                    list.remove(Integer.valueOf(5));
                    System.out.println("Removed 5");
                } catch (InterruptedException e) {}
            });
            
            reader.start();
            writer.start();
            
            reader.join();
            writer.join();
            
            System.out.println("Final list: " + list);
        }
        
        static void performanceComparison() throws InterruptedException {
            System.out.println("\n=== Performance Comparison ===\n");
            
            // CopyOnWriteArrayList
            CopyOnWriteArrayList<Integer> cowList = new CopyOnWriteArrayList<>();
            
            long start = System.currentTimeMillis();
            for (int i = 0; i < 1000; i++) {
                cowList.add(i);
            }
            long end = System.currentTimeMillis();
            
            System.out.println("CopyOnWriteArrayList write time: " + (end - start) + "ms");
            
            // Read test
            start = System.currentTimeMillis();
            for (int i = 0; i < 10000; i++) {
                cowList.get(i % cowList.size());
            }
            end = System.currentTimeMillis();
            
            System.out.println("CopyOnWriteArrayList read time: " + (end - start) + "ms");
            System.out.println("Best for read-heavy workloads!\n");
        }
    }
    
    // ============================================
    // SECTION 3: COPYONWRITEARRAYSET
    // ============================================
    
    static class CopyOnWriteArraySetDemo {
        
        /**
         * CopyOnWriteArraySet: Thread-safe Set
         * - Uses CopyOnWriteArrayList internally
         * - No duplicates
         * - Best for small sets with rare modifications
         */
        
        static void basicOperations() {
            System.out.println("\n=== CopyOnWriteArraySet Basic Operations ===\n");
            
            CopyOnWriteArraySet<String> set = new CopyOnWriteArraySet<>();
            
            // Add elements
            set.add("Apple");
            set.add("Banana");
            set.add("Cherry");
            set.add("Apple"); // Duplicate, won't be added
            
            System.out.println("Set: " + set);
            System.out.println("Size: " + set.size()); // 3
            
            // Contains
            System.out.println("Contains Apple: " + set.contains("Apple"));
            
            // Remove
            set.remove("Banana");
            System.out.println("After remove: " + set);
            
            // Iterate (safe)
            for (String fruit : set) {
                System.out.println(fruit);
            }
        }
    }
    
    // ============================================
    // SECTION 4: CONCURRENTLINKEDQUEUE
    // ============================================
    
    static class ConcurrentLinkedQueueDemo {
        
        /**
         * ConcurrentLinkedQueue: Thread-safe Queue
         * - Non-blocking algorithm (CAS)
         * - Unbounded
         * - FIFO ordering
         * - No null elements
         */
        
        static void basicOperations() {
            System.out.println("\n=== ConcurrentLinkedQueue Basic Operations ===\n");
            
            ConcurrentLinkedQueue<Integer> queue = new ConcurrentLinkedQueue<>();
            
            // Add elements
            queue.offer(1);
            queue.offer(2);
            queue.offer(3);
            queue.add(4); // Same as offer
            
            System.out.println("Queue: " + queue);
            
            // Peek (doesn't remove)
            System.out.println("peek(): " + queue.peek());
            
            // Poll (removes)
            System.out.println("poll(): " + queue.poll());
            System.out.println("After poll: " + queue);
            
            // Size
            System.out.println("Size: " + queue.size());
            
            // Contains
            System.out.println("Contains 2: " + queue.contains(2));
        }
        
        static void producerConsumer() throws InterruptedException {
            System.out.println("\n=== Producer-Consumer with ConcurrentLinkedQueue ===\n");
            
            ConcurrentLinkedQueue<Integer> queue = new ConcurrentLinkedQueue<>();
            AtomicBoolean running = new AtomicBoolean(true);
            
            // Producer
            Thread producer = new Thread(() -> {
                for (int i = 1; i <= 10; i++) {
                    queue.offer(i);
                    System.out.println("Produced: " + i);
                    try {
                        Thread.sleep(500);
                    } catch (InterruptedException e) {}
                }
                running.set(false);
            });
            
            // Consumer
            Thread consumer = new Thread(() -> {
                while (running.get() || !queue.isEmpty()) {
                    Integer item = queue.poll();
                    if (item != null) {
                        System.out.println("Consumed: " + item);
                    }
                    try {
                        Thread.sleep(700);
                    } catch (InterruptedException e) {}
                }
            });
            
            producer.start();
            consumer.start();
            
            producer.join();
            consumer.join();
            
            System.out.println("Queue empty: " + queue.isEmpty());
        }
    }
    
    // ============================================
    // SECTION 5: BLOCKINGQUEUE
    // ============================================
    
    static class BlockingQueueDemo {
        
        /**
         * BlockingQueue: Thread-safe queue with blocking operations
         * - put() blocks if queue full
         * - take() blocks if queue empty
         * - Implementations: LinkedBlockingQueue, ArrayBlockingQueue
         */
        
        static void linkedBlockingQueue() throws InterruptedException {
            System.out.println("\n=== LinkedBlockingQueue Demo ===\n");
            
            BlockingQueue<Integer> queue = new LinkedBlockingQueue<>(5); // Capacity 5
            
            // Producer
            Thread producer = new Thread(() -> {
                try {
                    for (int i = 1; i <= 10; i++) {
                        System.out.println("Producing: " + i);
                        queue.put(i); // Blocks if full
                        System.out.println("Produced: " + i + ", Queue size: " + queue.size());
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
            
            // Consumer
            Thread consumer = new Thread(() -> {
                try {
                    for (int i = 1; i <= 10; i++) {
                        Thread.sleep(1000); // Slow consumer
                        Integer item = queue.take(); // Blocks if empty
                        System.out.println("Consumed: " + item);
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
            
            producer.start();
            consumer.start();
            
            producer.join();
            consumer.join();
        }
        
        static void arrayBlockingQueue() throws InterruptedException {
            System.out.println("\n=== ArrayBlockingQueue Demo ===\n");
            
            BlockingQueue<String> queue = new ArrayBlockingQueue<>(3);
            
            // offer with timeout
            queue.offer("A");
            queue.offer("B");
            queue.offer("C");
            
            boolean added = queue.offer("D", 1, TimeUnit.SECONDS);
            System.out.println("offer(D, 1s): " + added); // false (queue full)
            
            // poll with timeout
            String item = queue.poll(1, TimeUnit.SECONDS);
            System.out.println("poll(1s): " + item); // A
            
            // Now can add
            queue.offer("D");
            System.out.println("Queue: " + queue);
        }
    }
    
    // ============================================
    // SECTION 6: PRIORITYBLOCKINGQUEUE
    // ============================================
    
    static class PriorityBlockingQueueDemo {
        
        /**
         * PriorityBlockingQueue: Unbounded priority queue
         * - Elements ordered by natural ordering or Comparator
         * - Thread-safe
         * - Blocking take() operation
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
                return Integer.compare(other.priority, this.priority); // Higher priority first
            }
            
            @Override
            public String toString() {
                return name + "(P" + priority + ")";
            }
        }
        
        static void demonstratePriorityQueue() throws InterruptedException {
            System.out.println("\n=== PriorityBlockingQueue Demo ===\n");
            
            PriorityBlockingQueue<Task> queue = new PriorityBlockingQueue<>();
            
            // Add tasks with different priorities
            queue.put(new Task("Task1", 3));
            queue.put(new Task("Task2", 1));
            queue.put(new Task("Task3", 5));
            queue.put(new Task("Task4", 2));
            queue.put(new Task("Task5", 4));
            
            System.out.println("Tasks will be processed by priority:");
            
            while (!queue.isEmpty()) {
                Task task = queue.take();
                System.out.println("Processing: " + task);
            }
        }
    }
    
    // ============================================
    // SECTION 7: DELAYQUEUE
    // ============================================
    
    static class DelayQueueDemo {
        
        /**
         * DelayQueue: Elements available only after delay
         * - Elements must implement Delayed interface
         * - Used for scheduling
         */
        
        static class DelayedTask implements Delayed {
            private String name;
            private long startTime;
            
            DelayedTask(String name, long delayInMillis) {
                this.name = name;
                this.startTime = System.currentTimeMillis() + delayInMillis;
            }
            
            @Override
            public long getDelay(TimeUnit unit) {
                long diff = startTime - System.currentTimeMillis();
                return unit.convert(diff, TimeUnit.MILLISECONDS);
            }
            
            @Override
            public int compareTo(Delayed other) {
                return Long.compare(this.startTime, ((DelayedTask) other).startTime);
            }
            
            @Override
            public String toString() {
                return name;
            }
        }
        
        static void demonstrateDelayQueue() throws InterruptedException {
            System.out.println("\n=== DelayQueue Demo ===\n");
            
            DelayQueue<DelayedTask> queue = new DelayQueue<>();
            
            // Add tasks with different delays
            queue.put(new DelayedTask("Task1", 3000)); // 3 seconds
            queue.put(new DelayedTask("Task2", 1000)); // 1 second
            queue.put(new DelayedTask("Task3", 2000)); // 2 seconds
            
            System.out.println("Tasks added, waiting for delays...");
            
            while (!queue.isEmpty()) {
                DelayedTask task = queue.take(); // Blocks until delay expires
                System.out.println("Executing: " + task + " at " 
                    + System.currentTimeMillis());
            }
        }
    }
    
    // ============================================
    // SECTION 8: SYNCHRONOUSQUEUE
    // ============================================
    
    static class SynchronousQueueDemo {
        
        /**
         * SynchronousQueue: No capacity
         * - Each insert must wait for remove (handoff)
         * - Direct handoff between threads
         */
        
        static void demonstrateSynchronousQueue() throws InterruptedException {
            System.out.println("\n=== SynchronousQueue Demo ===\n");
            
            SynchronousQueue<Integer> queue = new SynchronousQueue<>();
            
            // Producer
            Thread producer = new Thread(() -> {
                try {
                    for (int i = 1; i <= 5; i++) {
                        System.out.println("Putting: " + i);
                        queue.put(i); // Blocks until taken
                        System.out.println("Put complete: " + i);
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
            
            // Consumer
            Thread consumer = new Thread(() -> {
                try {
                    for (int i = 1; i <= 5; i++) {
                        Thread.sleep(1000); // Delay
                        Integer item = queue.take(); // Blocks until available
                        System.out.println("Took: " + item);
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
            
            producer.start();
            consumer.start();
            
            producer.join();
            consumer.join();
            
            System.out.println("Queue size: " + queue.size()); // Always 0
        }
    }
    
    // ============================================
    // SECTION 9: CONCURRENTSKIPLISTMAP & SET
    // ============================================
    
    static class ConcurrentSkipListDemo {
        
        /**
         * ConcurrentSkipListMap: Sorted Map
         * - Thread-safe TreeMap alternative
         * - Log(n) operations
         * - No null keys or values
         */
        
        static void demonstrateConcurrentSkipListMap() {
            System.out.println("\n=== ConcurrentSkipListMap Demo ===\n");
            
            ConcurrentSkipListMap<Integer, String> map = new ConcurrentSkipListMap<>();
            
            map.put(3, "Three");
            map.put(1, "One");
            map.put(5, "Five");
            map.put(2, "Two");
            map.put(4, "Four");
            
            System.out.println("Map (sorted by key): " + map);
            
            // Navigable operations
            System.out.println("firstKey(): " + map.firstKey());
            System.out.println("lastKey(): " + map.lastKey());
            System.out.println("ceilingKey(3): " + map.ceilingKey(3)); // >= 3
            System.out.println("floorKey(3): " + map.floorKey(3));     // <= 3
            System.out.println("higherKey(3): " + map.higherKey(3));   // > 3
            System.out.println("lowerKey(3): " + map.lowerKey(3));     // < 3
            
            // SubMap
            System.out.println("subMap(2, 5): " + map.subMap(2, 5)); // [2, 5)
        }
        
        /**
         * ConcurrentSkipListSet: Sorted Set
         * - Thread-safe TreeSet alternative
         */
        
        static void demonstrateConcurrentSkipListSet() {
            System.out.println("\n=== ConcurrentSkipListSet Demo ===\n");
            
            ConcurrentSkipListSet<Integer> set = new ConcurrentSkipListSet<>();
            
            set.add(5);
            set.add(2);
            set.add(8);
            set.add(1);
            set.add(9);
            
            System.out.println("Set (sorted): " + set);
            
            // Navigable operations
            System.out.println("first(): " + set.first());
            System.out.println("last(): " + set.last());
            System.out.println("ceiling(6): " + set.ceiling(6)); // >= 6
            System.out.println("floor(6): " + set.floor(6));     // <= 6
            
            // SubSet
            System.out.println("subSet(2, 8): " + set.subSet(2, 8)); // [2, 8)
        }
    }
    
    // ============================================
    // SECTION 10: PERFORMANCE COMPARISON & BEST PRACTICES
    // ============================================
    
    static class PerformanceAndBestPractices {
        
        static void performanceComparison() throws InterruptedException {
            System.out.println("\n=== Performance Comparison ===\n");
            
            int operations = 100000;
            
            // 1. HashMap (not thread-safe)
            Map<Integer, Integer> hashMap = new HashMap<>();
            long start = System.currentTimeMillis();
            for (int i = 0; i < operations; i++) {
                hashMap.put(i, i);
            }
            long end = System.currentTimeMillis();
            System.out.println("HashMap: " + (end - start) + "ms");
            
            // 2. Hashtable (synchronized)
            Map<Integer, Integer> hashtable = new Hashtable<>();
            start = System.currentTimeMillis();
            for (int i = 0; i < operations; i++) {
                hashtable.put(i, i);
            }
            end = System.currentTimeMillis();
            System.out.println("Hashtable: " + (end - start) + "ms");
            
            // 3. ConcurrentHashMap
            Map<Integer, Integer> concurrentMap = new ConcurrentHashMap<>();
            start = System.currentTimeMillis();
            for (int i = 0; i < operations; i++) {
                concurrentMap.put(i, i);
            }
            end = System.currentTimeMillis();
            System.out.println("ConcurrentHashMap: " + (end - start) + "ms");
            
            System.out.println("\nConcurrentHashMap faster than Hashtable!\n");
        }
        
        static void displayBestPractices() {
            System.out.println("\n=== Best Practices ===\n");
            
            System.out.println("1. ConcurrentHashMap:");
            System.out.println("   - Use for high concurrency read/write");
            System.out.println("   - Better than Hashtable");
            System.out.println("   - No null keys/values\n");
            
            System.out.println("2. CopyOnWriteArrayList:");
            System.out.println("   - Use for read-heavy workloads");
            System.out.println("   - Rare modifications");
            System.out.println("   - Safe iteration\n");
            
            System.out.println("3. ConcurrentLinkedQueue:");
            System.out.println("   - Use for non-blocking queue");
            System.out.println("   - High throughput");
            System.out.println("   - Unbounded\n");
            
            System.out.println("4. BlockingQueue:");
            System.out.println("   - Use for producer-consumer");
            System.out.println("   - Blocking operations needed");
            System.out.println("   - Bounded queues\n");
            
            System.out.println("5. ConcurrentSkipListMap:");
            System.out.println("   - Use for sorted concurrent map");
            System.out.println("   - Alternative to TreeMap");
            System.out.println("   - Log(n) operations\n");
            
            System.out.println("General Guidelines:");
            System.out.println("- Prefer concurrent collections over synchronized wrappers");
            System.out.println("- Choose based on access pattern (read/write ratio)");
            System.out.println("- Consider capacity for bounded collections");
            System.out.println("- Test under realistic concurrency load");
        }
    }
    
    // ============================================
    // MAIN METHOD - DEMONSTRATION
    // ============================================
    
    public static void main(String[] args) {
        try {
            // Section 1: ConcurrentHashMap
            ConcurrentHashMapDemo.basicOperations();
            ConcurrentHashMapDemo.concurrentAccess();
            ConcurrentHashMapDemo.wordCount();
            
            // Section 2: CopyOnWriteArrayList
            CopyOnWriteArrayListDemo.basicOperations();
            CopyOnWriteArrayListDemo.safeIteration();
            CopyOnWriteArrayListDemo.performanceComparison();
            
            // Section 3: CopyOnWriteArraySet
            CopyOnWriteArraySetDemo.basicOperations();
            
            // Section 4: ConcurrentLinkedQueue
            ConcurrentLinkedQueueDemo.basicOperations();
            ConcurrentLinkedQueueDemo.producerConsumer();
            
            // Section 5: BlockingQueue
            BlockingQueueDemo.linkedBlockingQueue();
            BlockingQueueDemo.arrayBlockingQueue();
            
            // Section 6: PriorityBlockingQueue
            PriorityBlockingQueueDemo.demonstratePriorityQueue();
            
            // Section 7: DelayQueue
            DelayQueueDemo.demonstrateDelayQueue();
            
            // Section 8: SynchronousQueue
            SynchronousQueueDemo.demonstrateSynchronousQueue();
            
            // Section 9: ConcurrentSkipList
            ConcurrentSkipListDemo.demonstrateConcurrentSkipListMap();
            ConcurrentSkipListDemo.demonstrateConcurrentSkipListSet();
            
            // Section 10: Performance & Best Practices
            PerformanceAndBestPractices.performanceComparison();
            PerformanceAndBestPractices.displayBestPractices();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
