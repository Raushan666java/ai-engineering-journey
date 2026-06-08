```java
/**
 * Generics & Multithreading - Complete Implementation
 * Topic: Generic classes/methods, type safety, threads, synchronization, concurrency
 * Difficulty: Advanced
 * Estimated Time: 120 minutes
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.util.concurrent.locks.*;

// ==========================================
// 1. ADVANCED GENERICS
// ==========================================

/**
 * Advanced generics concepts and implementations
 */
class AdvancedGenerics {

    /**
     * Generic Box class with multiple type parameters
     */
    static class Box<T> {
        private T item;

        public void setItem(T item) { this.item = item; }
        public T getItem() { return item; }

        public boolean isEmpty() { return item == null; }

        @Override
        public String toString() {
            return "Box{" + item + "}";
        }
    }

    /**
     * Generic Pair class
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

        public static <K, V> Pair<K, V> of(K key, V value) {
            return new Pair<>(key, value);
        }

        @Override
        public String toString() {
            return "(" + key + ", " + value + ")";
        }
    }

    /**
     * Generic Triple class
     */
    static class Triple<A, B, C> {
        private A first;
        private B second;
        private C third;

        public Triple(A first, B second, C third) {
            this.first = first;
            this.second = second;
            this.third = third;
        }

        public A getFirst() { return first; }
        public B getSecond() { return second; }
        public C getThird() { return third; }
    }

    /**
     * Bounded type parameters - Upper bound
     */
    static class NumberBox<T extends Number> {
        private T number;

        public NumberBox(T number) {
            this.number = number;
        }

        public double doubleValue() {
            return number.doubleValue();
        }

        public T getNumber() { return number; }
    }

    /**
     * Multiple bounds
     */
    static class AdvancedNumberBox<T extends Number & Comparable<T>> {
        private T number;

        public AdvancedNumberBox(T number) {
            this.number = number;
        }

        public T getNumber() { return number; }

        public boolean isGreaterThan(T other) {
            return number.compareTo(other) > 0;
        }
    }

    /**
     * Generic methods with wildcards
     */
    public static void printList(List<?> list) {
        for (Object item : list) {
            System.out.print(item + " ");
        }
        System.out.println();
    }

    public static double sumOfNumbers(List<? extends Number> numbers) {
        double sum = 0.0;
        for (Number num : numbers) {
            sum += num.doubleValue();
        }
        return sum;
    }

    public static void addIntegers(List<? super Integer> list) {
        list.add(1);
        list.add(2);
        list.add(3);
    }

    /**
     * Generic method for finding maximum
     */
    public static <T extends Comparable<T>> T findMax(List<T> list) {
        if (list == null || list.isEmpty()) {
            return null;
        }

        T max = list.get(0);
        for (T item : list) {
            if (item.compareTo(max) > 0) {
                max = item;
            }
        }
        return max;
    }

    /**
     * Generic method for swapping elements
     */
    public static <T> void swap(T[] array, int i, int j) {
        T temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    /**
     * Generic Stack implementation
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

        @Override
        public String toString() {
            return "Stack" + elements.toString();
        }
    }

    /**
     * Generic Cache implementation
     */
    static class GenericCache<K, V> {
        private Map<K, V> cache = new HashMap<>();
        private int maxSize;

        public GenericCache(int maxSize) {
            this.maxSize = maxSize;
        }

        public void put(K key, V value) {
            if (cache.size() >= maxSize) {
                // Simple eviction - remove first entry
                K firstKey = cache.keySet().iterator().next();
                cache.remove(firstKey);
            }
            cache.put(key, value);
        }

        public V get(K key) {
            return cache.get(key);
        }

        public boolean containsKey(K key) {
            return cache.containsKey(key);
        }

        public int size() {
            return cache.size();
        }

        public void clear() {
            cache.clear();
        }
    }

    /**
     * Demonstrate advanced generics
     */
    public static void demonstrateAdvancedGenerics() {
        System.out.println("=== ADVANCED GENERICS DEMONSTRATION ===");

        // Basic generic box
        Box<String> stringBox = new Box<>();
        stringBox.setItem("Hello Generics");
        System.out.println("String box: " + stringBox);

        Box<Integer> intBox = new Box<>();
        intBox.setItem(42);
        System.out.println("Integer box: " + intBox);

        // Generic pair
        Pair<String, Integer> person = Pair.of("Alice", 25);
        System.out.println("Person pair: " + person);

        // Generic triple
        Triple<String, Integer, Boolean> data = new Triple<>("Data", 100, true);
        System.out.println("Triple: (" + data.getFirst() + ", " + data.getSecond() + ", " + data.getThird() + ")");

        // Bounded generics
        NumberBox<Double> doubleBox = new NumberBox<>(3.14);
        System.out.println("Double box value: " + doubleBox.doubleValue());

        AdvancedNumberBox<Integer> intAdvancedBox = new AdvancedNumberBox<>(10);
        System.out.println("10 > 5: " + intAdvancedBox.isGreaterThan(5));

        // Wildcards
        List<Integer> integers = Arrays.asList(1, 2, 3, 4, 5);
        List<Double> doubles = Arrays.asList(1.1, 2.2, 3.3);
        List<Number> numbers = new ArrayList<>();

        printList(integers);
        printList(doubles);

        System.out.println("Sum of integers: " + sumOfNumbers(integers));
        System.out.println("Sum of doubles: " + sumOfNumbers(doubles));

        addIntegers(numbers);
        System.out.println("Numbers list: " + numbers);

        // Generic methods
        List<String> strings = Arrays.asList("Apple", "Banana", "Cherry");
        System.out.println("Max string: " + findMax(strings));

        List<Integer> numbersList = Arrays.asList(3, 1, 4, 1, 5);
        System.out.println("Max number: " + findMax(numbersList));

        // Generic stack
        GenericStack<String> stack = new GenericStack<>();
        stack.push("First");
        stack.push("Second");
        stack.push("Third");
        System.out.println("Stack: " + stack);
        System.out.println("Pop: " + stack.pop());
        System.out.println("Stack after pop: " + stack);

        // Generic cache
        GenericCache<String, Integer> cache = new GenericCache<>(3);
        cache.put("A", 1);
        cache.put("B", 2);
        cache.put("C", 3);
        cache.put("D", 4); // Should evict A
        System.out.println("Cache size: " + cache.size());
        System.out.println("Contains A: " + cache.containsKey("A"));
        System.out.println("Contains D: " + cache.containsKey("D"));
        System.out.println();
    }
}

// ==========================================
// 2. BASIC MULTITHREADING
// ==========================================

/**
 * Basic multithreading concepts and implementations
 */
class BasicMultithreading {

    /**
     * Thread creation by extending Thread class
     */
    static class MyThread extends Thread {
        private String name;

        public MyThread(String name) {
            this.name = name;
        }

        @Override
        public void run() {
            for (int i = 1; i <= 5; i++) {
                System.out.println(name + " - Count: " + i + " (Thread: " + Thread.currentThread().getName() + ")");
                try {
                    Thread.sleep(100); // Sleep for 100ms
                } catch (InterruptedException e) {
                    System.out.println(name + " was interrupted");
                    return;
                }
            }
        }
    }

    /**
     * Thread creation by implementing Runnable interface
     */
    static class MyRunnable implements Runnable {
        private String name;

        public MyRunnable(String name) {
            this.name = name;
        }

        @Override
        public void run() {
            for (int i = 1; i <= 5; i++) {
                System.out.println(name + " - Task: " + i + " (Thread: " + Thread.currentThread().getName() + ")");
                try {
                    Thread.sleep(150);
                } catch (InterruptedException e) {
                    System.out.println(name + " was interrupted");
                    return;
                }
            }
        }
    }

    /**
     * Thread lifecycle demonstration
     */
    static class LifecycleThread extends Thread {
        @Override
        public void run() {
            System.out.println("Thread " + getName() + " is running");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.out.println("Thread " + getName() + " was interrupted");
            }
            System.out.println("Thread " + getName() + " is finishing");
        }
    }

    /**
     * Demonstrate basic threading
     */
    public static void demonstrateBasicThreading() {
        System.out.println("=== BASIC MULTITHREADING DEMONSTRATION ===");

        // Method 1: Extend Thread
        MyThread thread1 = new MyThread("Thread-1");
        thread1.start(); // Don't call run() directly!

        // Method 2: Implement Runnable
        Thread thread2 = new Thread(new MyRunnable("Runnable-1"));
        thread2.start();

        // Method 3: Lambda expression (Java 8+)
        Thread thread3 = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Lambda Thread - Count: " + i);
                try {
                    Thread.sleep(120);
                } catch (InterruptedException e) {
                    break;
                }
            }
        });
        thread3.start();

        // Wait for threads to complete
        try {
            thread1.join();
            thread2.join();
            thread3.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread interrupted");
        }

        System.out.println("All threads completed");
        System.out.println();
    }

    /**
     * Thread lifecycle demonstration
     */
    public static void demonstrateThreadLifecycle() {
        System.out.println("=== THREAD LIFECYCLE DEMONSTRATION ===");

        LifecycleThread thread = new LifecycleThread();
        System.out.println("Thread state after creation: " + thread.getState());

        thread.start();
        System.out.println("Thread state after start: " + thread.getState());

        try {
            Thread.sleep(500);
            System.out.println("Thread state during execution: " + thread.getState());

            thread.join();
            System.out.println("Thread state after completion: " + thread.getState());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println();
    }
}

// ==========================================
// 3. SYNCHRONIZATION AND THREAD SAFETY
// ==========================================

/**
 * Synchronization and thread safety demonstrations
 */
class SynchronizationDemo {

    /**
     * Non-thread-safe counter
     */
    static class UnsafeCounter {
        private int count = 0;

        public void increment() {
            count++;
        }

        public int getCount() {
            return count;
        }
    }

    /**
     * Thread-safe counter using synchronized methods
     */
    static class SynchronizedCounter {
        private int count = 0;

        public synchronized void increment() {
            count++;
        }

        public synchronized int getCount() {
            return count;
        }
    }

    /**
     * Thread-safe counter using AtomicInteger
     */
    static class AtomicCounter {
        private AtomicInteger count = new AtomicInteger(0);

        public void increment() {
            count.incrementAndGet();
        }

        public int getCount() {
            return count.get();
        }
    }

    /**
     * Bank account with synchronized methods
     */
    static class BankAccount {
        private double balance;
        private final Object lock = new Object();

        public BankAccount(double initialBalance) {
            this.balance = initialBalance;
        }

        // Synchronized method
        public synchronized void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
                System.out.println(Thread.currentThread().getName() +
                                 " deposited $" + amount + ", balance: $" + balance);
            }
        }

        // Synchronized method
        public synchronized void withdraw(double amount) {
            if (amount > 0 && balance >= amount) {
                balance -= amount;
                System.out.println(Thread.currentThread().getName() +
                                 " withdrew $" + amount + ", balance: $" + balance);
            } else {
                System.out.println(Thread.currentThread().getName() +
                                 " failed to withdraw $" + amount + " (insufficient funds)");
            }
        }

        // Synchronized block (more granular control)
        public void transfer(BankAccount target, double amount) {
            synchronized (lock) {
                if (balance >= amount) {
                    balance -= amount;
                    synchronized (target.lock) {
                        target.balance += amount;
                    }
                    System.out.println(Thread.currentThread().getName() +
                                     " transferred $" + amount + " successfully");
                } else {
                    System.out.println(Thread.currentThread().getName() +
                                     " failed to transfer $" + amount + " (insufficient funds)");
                }
            }
        }

        public double getBalance() {
            synchronized (lock) {
                return balance;
            }
        }
    }

    /**
     * Demonstrate synchronization issues
     */
    public static void demonstrateSynchronization() {
        System.out.println("=== SYNCHRONIZATION DEMONSTRATION ===");

        // Test unsafe counter
        UnsafeCounter unsafeCounter = new UnsafeCounter();
        Thread[] threads = new Thread[10];

        for (int i = 0; i < threads.length; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    unsafeCounter.increment();
                }
            });
            threads[i].start();
        }

        // Wait for all threads
        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        System.out.println("Unsafe counter final value: " + unsafeCounter.getCount() +
                         " (Expected: 10000)");

        // Test synchronized counter
        SynchronizedCounter syncCounter = new SynchronizedCounter();
        for (int i = 0; i < threads.length; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    syncCounter.increment();
                }
            });
            threads[i].start();
        }

        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        System.out.println("Synchronized counter final value: " + syncCounter.getCount() +
                         " (Expected: 10000)");

        // Test atomic counter
        AtomicCounter atomicCounter = new AtomicCounter();
        for (int i = 0; i < threads.length; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    atomicCounter.increment();
                }
            });
            threads[i].start();
        }

        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        System.out.println("Atomic counter final value: " + atomicCounter.getCount() +
                         " (Expected: 10000)");
        System.out.println();
    }

    /**
     * Demonstrate bank account operations
     */
    public static void demonstrateBankOperations() {
        System.out.println("=== BANK OPERATIONS DEMONSTRATION ===");

        BankAccount account1 = new BankAccount(1000.0);
        BankAccount account2 = new BankAccount(500.0);

        System.out.println("Initial balances - Account1: $" + account1.getBalance() +
                         ", Account2: $" + account2.getBalance());

        // Multiple threads performing operations
        Thread depositThread = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                account1.deposit(100.0);
                try {
                    Thread.sleep(50);
                } catch (InterruptedException e) {
                    break;
                }
            }
        }, "DepositThread");

        Thread withdrawThread = new Thread(() -> {
            for (int i = 0; i < 3; i++) {
                account1.withdraw(150.0);
                try {
                    Thread.sleep(75);
                } catch (InterruptedException e) {
                    break;
                }
            }
        }, "WithdrawThread");

        Thread transferThread = new Thread(() -> {
            for (int i = 0; i < 2; i++) {
                account1.transfer(account2, 200.0);
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    break;
                }
            }
        }, "TransferThread");

        depositThread.start();
        withdrawThread.start();
        transferThread.start();

        try {
            depositThread.join();
            withdrawThread.join();
            transferThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Final balances - Account1: $" + account1.getBalance() +
                         ", Account2: $" + account2.getBalance());
        System.out.println();
    }
}

// ==========================================
// 4. ADVANCED CONCURRENCY
// ==========================================

/**
 * Advanced concurrency concepts
 */
class AdvancedConcurrency {

    /**
     * Producer-Consumer pattern using wait/notify
     */
    static class ProducerConsumer {
        private Queue<Integer> queue = new LinkedList<>();
        private final int CAPACITY = 5;
        private final Object lock = new Object();

        public void produce(int item) throws InterruptedException {
            synchronized (lock) {
                while (queue.size() == CAPACITY) {
                    System.out.println("Queue is full, producer waiting...");
                    lock.wait();
                }

                queue.add(item);
                System.out.println("Produced: " + item + ", Queue size: " + queue.size());
                lock.notifyAll();
            }
        }

        public int consume() throws InterruptedException {
            synchronized (lock) {
                while (queue.isEmpty()) {
                    System.out.println("Queue is empty, consumer waiting...");
                    lock.wait();
                }

                int item = queue.remove();
                System.out.println("Consumed: " + item + ", Queue size: " + queue.size());
                lock.notifyAll();
                return item;
            }
        }
    }

    /**
     * Using Locks for more control
     */
    static class LockExample {
        private final ReentrantLock lock = new ReentrantLock();
        private final Condition notEmpty = lock.newCondition();
        private final Condition notFull = lock.newCondition();
        private final Queue<Integer> queue = new LinkedList<>();
        private final int CAPACITY = 5;

        public void produce(int item) throws InterruptedException {
            lock.lock();
            try {
                while (queue.size() == CAPACITY) {
                    System.out.println("Lock: Queue full, producer waiting...");
                    notFull.await();
                }

                queue.add(item);
                System.out.println("Lock: Produced " + item);
                notEmpty.signal();
            } finally {
                lock.unlock();
            }
        }

        public int consume() throws InterruptedException {
            lock.lock();
            try {
                while (queue.isEmpty()) {
                    System.out.println("Lock: Queue empty, consumer waiting...");
                    notEmpty.await();
                }

                int item = queue.remove();
                System.out.println("Lock: Consumed " + item);
                notFull.signal();
                return item;
            } finally {
                lock.unlock();
            }
        }
    }

    /**
     * Using concurrent collections
     */
    static class ConcurrentCollectionsDemo {
        private final ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
        private final ConcurrentLinkedQueue<String> queue = new ConcurrentLinkedQueue<>();
        private final AtomicInteger counter = new AtomicInteger(0);

        public void demonstrateConcurrentCollections() {
            // ConcurrentHashMap
            map.put("A", 1);
            map.put("B", 2);
            System.out.println("ConcurrentHashMap: " + map);

            // Atomic operations
            System.out.println("Counter: " + counter.incrementAndGet());
            System.out.println("Counter: " + counter.addAndGet(5));
            System.out.println("Counter: " + counter.getAndIncrement());

            // Concurrent queue
            queue.offer("First");
            queue.offer("Second");
            System.out.println("Queue poll: " + queue.poll());
            System.out.println("Queue peek: " + queue.peek());
        }
    }

    /**
     * Thread pool demonstration
     */
    static class ThreadPoolDemo {
        public void demonstrateThreadPool() {
            // Fixed thread pool
            ExecutorService fixedPool = Executors.newFixedThreadPool(3);

            // Submit tasks
            for (int i = 0; i < 5; i++) {
                final int taskId = i;
                fixedPool.submit(() -> {
                    System.out.println("Task " + taskId + " executed by " + Thread.currentThread().getName());
                    try {
                        Thread.sleep(500);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                });
            }

            // Shutdown pool
            fixedPool.shutdown();
            try {
                if (!fixedPool.awaitTermination(10, TimeUnit.SECONDS)) {
                    fixedPool.shutdownNow();
                }
            } catch (InterruptedException e) {
                fixedPool.shutdownNow();
            }
        }
    }

    /**
     * Demonstrate producer-consumer pattern
     */
    public static void demonstrateProducerConsumer() {
        System.out.println("=== PRODUCER-CONSUMER PATTERN ===");

        ProducerConsumer pc = new ProducerConsumer();

        Thread producer = new Thread(() -> {
            try {
                for (int i = 1; i <= 10; i++) {
                    pc.produce(i);
                    Thread.sleep(200);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }, "Producer");

        Thread consumer = new Thread(() -> {
            try {
                for (int i = 1; i <= 10; i++) {
                    int item = pc.consume();
                    Thread.sleep(300);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }, "Consumer");

        producer.start();
        consumer.start();

        try {
            producer.join();
            consumer.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println();
    }

    /**
     * Demonstrate locks
     */
    public static void demonstrateLocks() {
        System.out.println("=== LOCKS DEMONSTRATION ===");

        LockExample lockExample = new LockExample();

        Thread producer = new Thread(() -> {
            try {
                for (int i = 1; i <= 3; i++) {
                    lockExample.produce(i * 10);
                    Thread.sleep(100);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }, "LockProducer");

        Thread consumer = new Thread(() -> {
            try {
                for (int i = 1; i <= 3; i++) {
                    lockExample.consume();
                    Thread.sleep(150);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }, "LockConsumer");

        producer.start();
        consumer.start();

        try {
            producer.join();
            consumer.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println();
    }

    /**
     * Demonstrate concurrent collections and thread pools
     */
    public static void demonstrateAdvancedConcurrency() {
        System.out.println("=== ADVANCED CONCURRENCY ===");

        ConcurrentCollectionsDemo concurrentDemo = new ConcurrentCollectionsDemo();
        concurrentDemo.demonstrateConcurrentCollections();

        System.out.println("--- Thread Pool Demo ---");
        ThreadPoolDemo poolDemo = new ThreadPoolDemo();
        poolDemo.demonstrateThreadPool();

        System.out.println("Advanced concurrency demonstration completed");
        System.out.println();
    }
}

// ==========================================
// 5. DEADLOCKS AND BEST PRACTICES
// ==========================================

/**
 * Deadlock demonstration and prevention
 */
class DeadlockDemo {

    private static final Object lock1 = new Object();
    private static final Object lock2 = new Object();

    /**
     * Method that can cause deadlock
     */
    public static void deadlockProneMethod() {
        Thread thread1 = new Thread(() -> {
            synchronized (lock1) {
                System.out.println("Thread 1: Holding lock 1...");
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {}

                System.out.println("Thread 1: Waiting for lock 2...");
                synchronized (lock2) {
                    System.out.println("Thread 1: Holding lock 1 and 2...");
                }
            }
        }, "DeadlockThread1");

        Thread thread2 = new Thread(() -> {
            synchronized (lock2) {
                System.out.println("Thread 2: Holding lock 2...");
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {}

                System.out.println("Thread 2: Waiting for lock 1...");
                synchronized (lock1) {
                    System.out.println("Thread 2: Holding lock 2 and 1...");
                }
            }
        }, "DeadlockThread2");

        thread1.start();
        thread2.start();

        try {
            thread1.join(3000); // Wait max 3 seconds
            thread2.join(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        if (thread1.isAlive() || thread2.isAlive()) {
            System.out.println("DEADLOCK DETECTED! Threads are still running.");
        } else {
            System.out.println("No deadlock occurred.");
        }
    }

    /**
     * Deadlock prevention - consistent lock ordering
     */
    public static void deadlockFreeMethod() {
        Thread thread1 = new Thread(() -> {
            // Always acquire locks in the same order
            synchronized (lock1) {
                System.out.println("Thread 1: Acquired lock 1");
                try {
                    Thread.sleep(50);
                } catch (InterruptedException e) {}

                synchronized (lock2) {
                    System.out.println("Thread 1: Acquired lock 2");
                }
            }
        }, "SafeThread1");

        Thread thread2 = new Thread(() -> {
            // Same lock acquisition order
            synchronized (lock1) {
                System.out.println("Thread 2: Acquired lock 1");
                try {
                    Thread.sleep(50);
                } catch (InterruptedException e) {}

                synchronized (lock2) {
                    System.out.println("Thread 2: Acquired lock 2");
                }
            }
        }, "SafeThread2");

        thread1.start();
        thread2.start();

        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Deadlock-free execution completed successfully.");
    }

    /**
     * Demonstrate deadlocks
     */
    public static void demonstrateDeadlocks() {
        System.out.println("=== DEADLOCK DEMONSTRATION ===");
        System.out.println("WARNING: This may cause a deadlock!");

        deadlockProneMethod();

        System.out.println("\n=== DEADLOCK PREVENTION ===");
        deadlockFreeMethod();
        System.out.println();
    }
}

// ==========================================
// MAIN METHOD - DEMONSTRATE ALL CONCEPTS
// ==========================================

public class GenericsMultithreadingComplete {
    public static void main(String[] args) {
        System.out.println("==========================================");
        System.out.println("   GENERICS & MULTITHREADING COMPLETE");
        System.out.println("==========================================\n");

        // Advanced Generics
        AdvancedGenerics.demonstrateAdvancedGenerics();

        // Basic Multithreading
        BasicMultithreading.demonstrateBasicThreading();
        BasicMultithreading.demonstrateThreadLifecycle();

        // Synchronization
        SynchronizationDemo.demonstrateSynchronization();
        SynchronizationDemo.demonstrateBankOperations();

        // Advanced Concurrency
        AdvancedConcurrency.demonstrateProducerConsumer();
        AdvancedConcurrency.demonstrateLocks();
        AdvancedConcurrency.demonstrateAdvancedConcurrency();

        // Deadlocks
        DeadlockDemo.demonstrateDeadlocks();

        System.out.println("==========================================");
        System.out.println("   ALL CONCEPTS DEMONSTRATED");
        System.out.println("==========================================");
    }
}

/*
 * COMPILATION AND RUNNING INSTRUCTIONS:
 * ====================================
 *
 * 1. Save this file as: GenericsMultithreadingComplete.java
 * 2. Compile: javac GenericsMultithreadingComplete.java
 * 3. Run: java GenericsMultithreadingComplete
 *
 * EXPECTED OUTPUT:
 * ===============
 * The program demonstrates:
 * - Advanced generics with multiple bounds, wildcards, generic methods
 * - Thread creation (extending Thread vs implementing Runnable)
 * - Thread lifecycle and states
 * - Synchronization issues and solutions
 * - Atomic operations and concurrent collections
 * - Producer-consumer pattern
 * - Locks and conditions
 * - Thread pools and executors
 * - Deadlock prevention strategies
 *
 * KEY LEARNING POINTS:
 * ===================
 * 1. Generics:
 *    - Type safety at compile time
 *    - Upper/lower bounds with extends/super
 *    - Wildcards (? extends T, ? super T)
 *    - Generic methods and classes
 *    - Type erasure (runtime behavior)
 *
 * 2. Multithreading:
 *    - Thread creation patterns
 *    - Thread lifecycle (NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED)
 *    - Race conditions and thread safety
 *    - Synchronization (methods, blocks, locks)
 *    - Atomic operations
 *
 * 3. Advanced Concurrency:
 *    - Producer-consumer pattern
 *    - Wait/notify mechanism
 *    - Locks and conditions
 *    - Concurrent collections
 *    - Thread pools and executors
 *
 * INTERVIEW PREPARATION:
 * =====================
 * - What is the difference between Thread and Runnable?
 * - How does synchronization work in Java?
 * - What are the differences between synchronized, Lock, and atomic operations?
 * - How to prevent deadlocks?
 * - When to use concurrent collections vs synchronized collections?
 * - What is thread safety and how to achieve it?
 * - Explain producer-consumer pattern
 * - What are generics and why are they useful?
 * - How do wildcards work in generics?
 *
 * COMMON INTERVIEW QUESTIONS:
 * ==========================
 * - Implement a thread-safe counter
 * - Solve producer-consumer problem
 * - Create a generic stack class
 * - Explain deadlock with code example
 * - Use synchronized vs Lock vs AtomicInteger
 * - Implement a thread pool
 * - Generic method to find maximum in a list
 */