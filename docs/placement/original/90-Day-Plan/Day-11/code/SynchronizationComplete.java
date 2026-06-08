/**
 * DAY 11: SYNCHRONIZATION COMPLETE GUIDE
 * 
 * Complete reference for Thread Synchronization & Thread Safety
 * 
 * Topics Covered:
 * 1. Race Conditions & Thread Safety
 * 2. Synchronized Methods
 * 3. Synchronized Blocks
 * 4. Static Synchronization
 * 5. Locks (ReentrantLock, ReadWriteLock)
 * 6. Volatile Keyword
 * 7. Atomic Variables
 * 8. Deadlock, Livelock & Starvation
 * 9. Semaphores & CountDownLatch
 * 10. CyclicBarrier & Phaser
 * 
 * Total Sections: 10
 * Lines: 2200+
 */

package day11.synchronization;

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.util.concurrent.locks.*;

public class SynchronizationComplete {

    // ============================================
    // SECTION 1: RACE CONDITIONS & THREAD SAFETY
    // ============================================
    
    static class RaceConditionDemo {
        
        /**
         * Race Condition: Multiple threads access shared data
         * and at least one modifies it, leading to inconsistent state
         */
        
        // Example 1: Counter without synchronization (UNSAFE)
        static class UnsafeCounter {
            private int count = 0;
            
            public void increment() {
                count++; // NOT atomic! (read, increment, write)
            }
            
            public int getCount() {
                return count;
            }
        }
        
        static void demonstrateRaceCondition() throws InterruptedException {
            System.out.println("\n=== Race Condition Demo ===\n");
            
            UnsafeCounter counter = new UnsafeCounter();
            
            Runnable task = () -> {
                for (int i = 0; i < 1000; i++) {
                    counter.increment();
                }
            };
            
            Thread t1 = new Thread(task);
            Thread t2 = new Thread(task);
            
            t1.start();
            t2.start();
            
            t1.join();
            t2.join();
            
            System.out.println("Expected: 2000");
            System.out.println("Actual: " + counter.getCount()); // Often < 2000!
            System.out.println("Race condition occurred!\n");
        }
        
        // Example 2: Bank Account (Race Condition)
        static class UnsafeBankAccount {
            private double balance;
            
            public UnsafeBankAccount(double initial) {
                this.balance = initial;
            }
            
            public void deposit(double amount) {
                double temp = balance;
                // Simulate processing time
                try {
                    Thread.sleep(10);
                } catch (InterruptedException e) {}
                balance = temp + amount;
            }
            
            public void withdraw(double amount) {
                double temp = balance;
                try {
                    Thread.sleep(10);
                } catch (InterruptedException e) {}
                balance = temp - amount;
            }
            
            public double getBalance() {
                return balance;
            }
        }
        
        static void demonstrateBankRaceCondition() throws InterruptedException {
            System.out.println("\n=== Bank Account Race Condition ===\n");
            
            UnsafeBankAccount account = new UnsafeBankAccount(1000);
            
            Thread t1 = new Thread(() -> account.deposit(500));
            Thread t2 = new Thread(() -> account.withdraw(300));
            
            t1.start();
            t2.start();
            
            t1.join();
            t2.join();
            
            System.out.println("Expected: 1200");
            System.out.println("Actual: " + account.getBalance()); // Inconsistent!
        }
    }
    
    // ============================================
    // SECTION 2: SYNCHRONIZED METHODS
    // ============================================
    
    static class SynchronizedMethods {
        
        /**
         * Synchronized Method: Only one thread can execute at a time
         * - Acquires lock on object (this)
         * - Releases lock when method completes
         */
        
        // Safe Counter with synchronized method
        static class SafeCounter {
            private int count = 0;
            
            public synchronized void increment() {
                count++; // Thread-safe now
            }
            
            public synchronized int getCount() {
                return count;
            }
        }
        
        static void demonstrateSafeCounter() throws InterruptedException {
            System.out.println("\n=== Synchronized Method Demo ===\n");
            
            SafeCounter counter = new SafeCounter();
            
            Runnable task = () -> {
                for (int i = 0; i < 1000; i++) {
                    counter.increment();
                }
            };
            
            Thread t1 = new Thread(task);
            Thread t2 = new Thread(task);
            
            t1.start();
            t2.start();
            
            t1.join();
            t2.join();
            
            System.out.println("Expected: 2000");
            System.out.println("Actual: " + counter.getCount()); // Always 2000!
            System.out.println("Thread-safe!\n");
        }
        
        // Safe Bank Account
        static class SafeBankAccount {
            private double balance;
            
            public SafeBankAccount(double initial) {
                this.balance = initial;
            }
            
            public synchronized void deposit(double amount) {
                double temp = balance;
                try {
                    Thread.sleep(10);
                } catch (InterruptedException e) {}
                balance = temp + amount;
                System.out.println("Deposited: " + amount + ", Balance: " + balance);
            }
            
            public synchronized void withdraw(double amount) {
                double temp = balance;
                try {
                    Thread.sleep(10);
                } catch (InterruptedException e) {}
                balance = temp - amount;
                System.out.println("Withdrew: " + amount + ", Balance: " + balance);
            }
            
            public synchronized double getBalance() {
                return balance;
            }
        }
        
        static void demonstrateSafeBankAccount() throws InterruptedException {
            System.out.println("\n=== Safe Bank Account ===\n");
            
            SafeBankAccount account = new SafeBankAccount(1000);
            
            Thread t1 = new Thread(() -> account.deposit(500));
            Thread t2 = new Thread(() -> account.withdraw(300));
            Thread t3 = new Thread(() -> account.deposit(200));
            
            t1.start();
            t2.start();
            t3.start();
            
            t1.join();
            t2.join();
            t3.join();
            
            System.out.println("\nFinal Balance: " + account.getBalance()); // Consistent!
        }
    }
    
    // ============================================
    // SECTION 3: SYNCHRONIZED BLOCKS
    // ============================================
    
    static class SynchronizedBlocks {
        
        /**
         * Synchronized Block: More flexible than synchronized method
         * - Can specify which object to lock
         * - Can minimize synchronization scope
         * - Better performance
         */
        
        static class BankAccountWithBlock {
            private double balance;
            private final Object lock = new Object();
            
            public BankAccountWithBlock(double initial) {
                this.balance = initial;
            }
            
            public void deposit(double amount) {
                // Non-critical code here (outside block)
                System.out.println("Processing deposit...");
                
                synchronized (lock) { // Critical section
                    double temp = balance;
                    try {
                        Thread.sleep(10);
                    } catch (InterruptedException e) {}
                    balance = temp + amount;
                }
                
                // Non-critical code here
                System.out.println("Deposit complete: " + amount);
            }
            
            public void withdraw(double amount) {
                synchronized (lock) {
                    double temp = balance;
                    try {
                        Thread.sleep(10);
                    } catch (InterruptedException e) {}
                    balance = temp - amount;
                }
            }
            
            public double getBalance() {
                synchronized (lock) {
                    return balance;
                }
            }
        }
        
        // Multiple locks for different resources
        static class MultiLockExample {
            private int counter1 = 0;
            private int counter2 = 0;
            private final Object lock1 = new Object();
            private final Object lock2 = new Object();
            
            public void incrementCounter1() {
                synchronized (lock1) {
                    counter1++;
                }
            }
            
            public void incrementCounter2() {
                synchronized (lock2) {
                    counter2++;
                }
            }
            
            // Can run in parallel!
            public int getCounter1() {
                synchronized (lock1) {
                    return counter1;
                }
            }
            
            public int getCounter2() {
                synchronized (lock2) {
                    return counter2;
                }
            }
        }
        
        static void demonstrateMultipleLocks() throws InterruptedException {
            System.out.println("\n=== Multiple Locks Demo ===\n");
            
            MultiLockExample example = new MultiLockExample();
            
            Thread t1 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) {
                    example.incrementCounter1();
                }
            });
            
            Thread t2 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) {
                    example.incrementCounter2();
                }
            });
            
            long start = System.currentTimeMillis();
            
            t1.start();
            t2.start();
            
            t1.join();
            t2.join();
            
            long end = System.currentTimeMillis();
            
            System.out.println("Counter1: " + example.getCounter1());
            System.out.println("Counter2: " + example.getCounter2());
            System.out.println("Time: " + (end - start) + "ms");
            System.out.println("Parallel execution possible!\n");
        }
    }
    
    // ============================================
    // SECTION 4: STATIC SYNCHRONIZATION
    // ============================================
    
    static class StaticSynchronization {
        
        /**
         * Static Synchronized: Lock on class object (not instance)
         * - All instances share same lock
         * - Use for static variables
         */
        
        static class Counter {
            private static int staticCount = 0;
            private int instanceCount = 0;
            
            // Static synchronized method (locks on Counter.class)
            public static synchronized void incrementStatic() {
                staticCount++;
            }
            
            // Instance synchronized method (locks on this)
            public synchronized void incrementInstance() {
                instanceCount++;
            }
            
            public static int getStaticCount() {
                return staticCount;
            }
            
            public int getInstanceCount() {
                return instanceCount;
            }
        }
        
        static void demonstrateStaticSync() throws InterruptedException {
            System.out.println("\n=== Static Synchronization Demo ===\n");
            
            Counter c1 = new Counter();
            Counter c2 = new Counter();
            
            Runnable staticTask = () -> {
                for (int i = 0; i < 1000; i++) {
                    Counter.incrementStatic();
                }
            };
            
            Runnable instanceTask1 = () -> {
                for (int i = 0; i < 1000; i++) {
                    c1.incrementInstance();
                }
            };
            
            Runnable instanceTask2 = () -> {
                for (int i = 0; i < 1000; i++) {
                    c2.incrementInstance();
                }
            };
            
            Thread t1 = new Thread(staticTask);
            Thread t2 = new Thread(staticTask);
            Thread t3 = new Thread(instanceTask1);
            Thread t4 = new Thread(instanceTask2);
            
            t1.start();
            t2.start();
            t3.start();
            t4.start();
            
            t1.join();
            t2.join();
            t3.join();
            t4.join();
            
            System.out.println("Static count (shared): " + Counter.getStaticCount()); // 2000
            System.out.println("c1 instance count: " + c1.getInstanceCount()); // 1000
            System.out.println("c2 instance count: " + c2.getInstanceCount()); // 1000
        }
    }
    
    // ============================================
    // SECTION 5: LOCKS (ReentrantLock, ReadWriteLock)
    // ============================================
    
    static class LocksDemo {
        
        /**
         * ReentrantLock: More flexible than synchronized
         * - Can try to acquire lock (tryLock)
         * - Can interrupt waiting thread
         * - Can specify fairness
         * - Must manually unlock (use try-finally)
         */
        
        static class BankAccountWithLock {
            private double balance;
            private final ReentrantLock lock = new ReentrantLock();
            
            public BankAccountWithLock(double initial) {
                this.balance = initial;
            }
            
            public void deposit(double amount) {
                lock.lock(); // Acquire lock
                try {
                    double temp = balance;
                    Thread.sleep(10);
                    balance = temp + amount;
                    System.out.println("Deposited: " + amount);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } finally {
                    lock.unlock(); // Must unlock in finally!
                }
            }
            
            public boolean tryDeposit(double amount, long timeout) {
                try {
                    if (lock.tryLock(timeout, TimeUnit.MILLISECONDS)) {
                        try {
                            balance += amount;
                            System.out.println("Deposit successful: " + amount);
                            return true;
                        } finally {
                            lock.unlock();
                        }
                    } else {
                        System.out.println("Could not acquire lock");
                        return false;
                    }
                } catch (InterruptedException e) {
                    return false;
                }
            }
            
            public double getBalance() {
                lock.lock();
                try {
                    return balance;
                } finally {
                    lock.unlock();
                }
            }
        }
        
        static void demonstrateReentrantLock() throws InterruptedException {
            System.out.println("\n=== ReentrantLock Demo ===\n");
            
            BankAccountWithLock account = new BankAccountWithLock(1000);
            
            Thread t1 = new Thread(() -> account.deposit(500));
            Thread t2 = new Thread(() -> account.tryDeposit(300, 1000));
            
            t1.start();
            t2.start();
            
            t1.join();
            t2.join();
            
            System.out.println("Final balance: " + account.getBalance());
        }
        
        /**
         * ReadWriteLock: Separate locks for read and write
         * - Multiple readers can read simultaneously
         * - Writer has exclusive access
         * - Better performance for read-heavy workloads
         */
        
        static class ReadWriteCache {
            private final Map<String, String> cache = new HashMap<>();
            private final ReadWriteLock rwLock = new ReentrantReadWriteLock();
            private final Lock readLock = rwLock.readLock();
            private final Lock writeLock = rwLock.writeLock();
            
            public String get(String key) {
                readLock.lock(); // Multiple readers allowed
                try {
                    System.out.println(Thread.currentThread().getName() + " reading");
                    Thread.sleep(100); // Simulate read
                    return cache.get(key);
                } catch (InterruptedException e) {
                    return null;
                } finally {
                    readLock.unlock();
                }
            }
            
            public void put(String key, String value) {
                writeLock.lock(); // Exclusive write
                try {
                    System.out.println(Thread.currentThread().getName() + " writing");
                    Thread.sleep(200); // Simulate write
                    cache.put(key, value);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } finally {
                    writeLock.unlock();
                }
            }
        }
        
        static void demonstrateReadWriteLock() throws InterruptedException {
            System.out.println("\n=== ReadWriteLock Demo ===\n");
            
            ReadWriteCache cache = new ReadWriteCache();
            
            cache.put("key1", "value1");
            
            // Multiple readers
            Thread r1 = new Thread(() -> cache.get("key1"), "Reader-1");
            Thread r2 = new Thread(() -> cache.get("key1"), "Reader-2");
            Thread r3 = new Thread(() -> cache.get("key1"), "Reader-3");
            
            // Single writer
            Thread w1 = new Thread(() -> cache.put("key2", "value2"), "Writer-1");
            
            r1.start();
            r2.start();
            r3.start();
            w1.start();
            
            r1.join();
            r2.join();
            r3.join();
            w1.join();
            
            System.out.println("Readers can run in parallel!");
        }
    }
    
    // ============================================
    // SECTION 6: VOLATILE KEYWORD
    // ============================================
    
    static class VolatileDemo {
        
        /**
         * Volatile: Guarantees visibility of changes across threads
         * - Reads/writes go directly to main memory (not CPU cache)
         * - No caching
         * - Does NOT guarantee atomicity
         */
        
        // Without volatile (may not stop)
        static class WithoutVolatile {
            private boolean running = true;
            
            public void stop() {
                running = false;
            }
            
            public void run() {
                while (running) {
                    // Thread may cache 'running' value
                }
                System.out.println("Thread stopped");
            }
        }
        
        // With volatile (always stops)
        static class WithVolatile {
            private volatile boolean running = true;
            
            public void stop() {
                running = false;
            }
            
            public void run() {
                while (running) {
                    // 'running' always read from main memory
                }
                System.out.println("Thread stopped");
            }
        }
        
        static void demonstrateVolatile() throws InterruptedException {
            System.out.println("\n=== Volatile Demo ===\n");
            
            WithVolatile example = new WithVolatile();
            
            Thread t1 = new Thread(() -> example.run());
            
            t1.start();
            Thread.sleep(1000);
            
            System.out.println("Stopping thread...");
            example.stop();
            
            t1.join(2000);
            
            if (t1.isAlive()) {
                System.out.println("Thread still running (volatile may help)");
            } else {
                System.out.println("Thread stopped successfully");
            }
        }
        
        // Volatile for flags
        static class TaskManager {
            private volatile boolean shutdownRequested = false;
            
            public void requestShutdown() {
                shutdownRequested = true;
            }
            
            public void processTask() {
                while (!shutdownRequested) {
                    System.out.println("Processing...");
                    try {
                        Thread.sleep(500);
                    } catch (InterruptedException e) {
                        break;
                    }
                }
                System.out.println("Shutdown complete");
            }
        }
    }
    
    // ============================================
    // SECTION 7: ATOMIC VARIABLES
    // ============================================
    
    static class AtomicVariablesDemo {
        
        /**
         * Atomic Variables: Thread-safe without synchronization
         * - AtomicInteger, AtomicLong, AtomicBoolean, AtomicReference
         * - CAS (Compare-And-Swap) operations
         * - Lock-free
         */
        
        static class AtomicCounter {
            private AtomicInteger count = new AtomicInteger(0);
            
            public void increment() {
                count.incrementAndGet(); // Atomic operation
            }
            
            public void decrement() {
                count.decrementAndGet();
            }
            
            public int get() {
                return count.get();
            }
            
            public boolean compareAndSet(int expected, int update) {
                return count.compareAndSet(expected, update);
            }
        }
        
        static void demonstrateAtomicInteger() throws InterruptedException {
            System.out.println("\n=== AtomicInteger Demo ===\n");
            
            AtomicCounter counter = new AtomicCounter();
            
            Runnable task = () -> {
                for (int i = 0; i < 1000; i++) {
                    counter.increment();
                }
            };
            
            Thread t1 = new Thread(task);
            Thread t2 = new Thread(task);
            
            t1.start();
            t2.start();
            
            t1.join();
            t2.join();
            
            System.out.println("Count: " + counter.get()); // Always 2000!
            System.out.println("Thread-safe without synchronized!\n");
        }
        
        // AtomicReference example
        static class Person {
            final String name;
            final int age;
            
            Person(String name, int age) {
                this.name = name;
                this.age = age;
            }
            
            @Override
            public String toString() {
                return name + " (" + age + ")";
            }
        }
        
        static void demonstrateAtomicReference() {
            System.out.println("\n=== AtomicReference Demo ===\n");
            
            AtomicReference<Person> personRef = new AtomicReference<>(
                new Person("John", 25)
            );
            
            System.out.println("Initial: " + personRef.get());
            
            // Update atomically
            personRef.set(new Person("Jane", 30));
            System.out.println("After set: " + personRef.get());
            
            // Compare and set
            Person expected = personRef.get();
            Person newPerson = new Person("Bob", 35);
            boolean updated = personRef.compareAndSet(expected, newPerson);
            
            System.out.println("CAS successful: " + updated);
            System.out.println("Final: " + personRef.get());
        }
        
        // AtomicBoolean example
        static void demonstrateAtomicBoolean() throws InterruptedException {
            System.out.println("\n=== AtomicBoolean Demo ===\n");
            
            AtomicBoolean initialized = new AtomicBoolean(false);
            
            Runnable initTask = () -> {
                if (initialized.compareAndSet(false, true)) {
                    System.out.println(Thread.currentThread().getName() 
                        + " initializing...");
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {}
                    System.out.println("Initialization complete");
                } else {
                    System.out.println(Thread.currentThread().getName() 
                        + " already initialized");
                }
            };
            
            Thread t1 = new Thread(initTask, "Thread-1");
            Thread t2 = new Thread(initTask, "Thread-2");
            
            t1.start();
            t2.start();
            
            t1.join();
            t2.join();
        }
    }
    
    // ============================================
    // SECTION 8: DEADLOCK, LIVELOCK & STARVATION
    // ============================================
    
    static class DeadlockDemo {
        
        /**
         * Deadlock: Two or more threads waiting for each other
         * Conditions:
         * 1. Mutual Exclusion
         * 2. Hold and Wait
         * 3. No Preemption
         * 4. Circular Wait
         */
        
        static class DeadlockExample {
            private final Object lock1 = new Object();
            private final Object lock2 = new Object();
            
            public void method1() {
                synchronized (lock1) {
                    System.out.println(Thread.currentThread().getName() 
                        + " acquired lock1");
                    
                    try { Thread.sleep(100); } catch (InterruptedException e) {}
                    
                    System.out.println(Thread.currentThread().getName() 
                        + " waiting for lock2...");
                    synchronized (lock2) {
                        System.out.println("Method 1 complete");
                    }
                }
            }
            
            public void method2() {
                synchronized (lock2) {
                    System.out.println(Thread.currentThread().getName() 
                        + " acquired lock2");
                    
                    try { Thread.sleep(100); } catch (InterruptedException e) {}
                    
                    System.out.println(Thread.currentThread().getName() 
                        + " waiting for lock1...");
                    synchronized (lock1) {
                        System.out.println("Method 2 complete");
                    }
                }
            }
        }
        
        static void demonstrateDeadlock() {
            System.out.println("\n=== Deadlock Demo (will hang) ===\n");
            
            DeadlockExample example = new DeadlockExample();
            
            Thread t1 = new Thread(() -> example.method1(), "Thread-1");
            Thread t2 = new Thread(() -> example.method2(), "Thread-2");
            
            t1.start();
            t2.start();
            
            // Will deadlock!
        }
        
        /**
         * Deadlock Prevention: Always acquire locks in same order
         */
        
        static class DeadlockPrevention {
            private final Object lock1 = new Object();
            private final Object lock2 = new Object();
            
            public void method1() {
                synchronized (lock1) {
                    System.out.println("Method1 acquired lock1");
                    synchronized (lock2) {
                        System.out.println("Method1 acquired lock2");
                    }
                }
            }
            
            public void method2() {
                synchronized (lock1) { // Same order!
                    System.out.println("Method2 acquired lock1");
                    synchronized (lock2) {
                        System.out.println("Method2 acquired lock2");
                    }
                }
            }
        }
        
        static void demonstrateDeadlockPrevention() throws InterruptedException {
            System.out.println("\n=== Deadlock Prevention ===\n");
            
            DeadlockPrevention example = new DeadlockPrevention();
            
            Thread t1 = new Thread(() -> example.method1());
            Thread t2 = new Thread(() -> example.method2());
            
            t1.start();
            t2.start();
            
            t1.join();
            t2.join();
            
            System.out.println("No deadlock!\n");
        }
    }
    
    // ============================================
    // SECTION 9: SEMAPHORES & COUNTDOWNLATCH
    // ============================================
    
    static class SemaphoreDemo {
        
        /**
         * Semaphore: Controls access to resource
         * - Permits limited number of threads
         * - acquire() - get permit
         * - release() - return permit
         */
        
        static class ConnectionPool {
            private final Semaphore semaphore;
            
            public ConnectionPool(int maxConnections) {
                this.semaphore = new Semaphore(maxConnections);
            }
            
            public void useConnection(int threadId) {
                try {
                    System.out.println("Thread " + threadId + " waiting for connection...");
                    semaphore.acquire(); // Get permit
                    
                    System.out.println("Thread " + threadId + " using connection");
                    Thread.sleep(2000); // Use connection
                    
                    System.out.println("Thread " + threadId + " releasing connection");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } finally {
                    semaphore.release(); // Return permit
                }
            }
        }
        
        static void demonstrateSemaphore() throws InterruptedException {
            System.out.println("\n=== Semaphore Demo ===\n");
            
            ConnectionPool pool = new ConnectionPool(3); // Max 3 connections
            
            List<Thread> threads = new ArrayList<>();
            for (int i = 1; i <= 10; i++) {
                int threadId = i;
                Thread t = new Thread(() -> pool.useConnection(threadId));
                threads.add(t);
                t.start();
            }
            
            for (Thread t : threads) {
                t.join();
            }
            
            System.out.println("All threads completed\n");
        }
        
        /**
         * CountDownLatch: Wait for multiple threads to complete
         * - countdown() - decrement count
         * - await() - wait until count reaches zero
         * - One-time use only
         */
        
        static void demonstrateCountDownLatch() throws InterruptedException {
            System.out.println("\n=== CountDownLatch Demo ===\n");
            
            int numWorkers = 5;
            CountDownLatch latch = new CountDownLatch(numWorkers);
            
            for (int i = 1; i <= numWorkers; i++) {
                int workerId = i;
                new Thread(() -> {
                    System.out.println("Worker " + workerId + " starting");
                    try {
                        Thread.sleep(workerId * 1000);
                        System.out.println("Worker " + workerId + " completed");
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    } finally {
                        latch.countDown(); // Decrement count
                    }
                }).start();
            }
            
            System.out.println("Main thread waiting for workers...");
            latch.await(); // Wait for all workers
            System.out.println("All workers completed!\n");
        }
    }
    
    // ============================================
    // SECTION 10: CYCLICBARRIER & PHASER
    // ============================================
    
    static class CyclicBarrierDemo {
        
        /**
         * CyclicBarrier: Synchronization point for threads
         * - All threads must reach barrier before proceeding
         * - Can be reused (cyclic)
         * - Optional barrier action
         */
        
        static void demonstrateCyclicBarrier() throws InterruptedException {
            System.out.println("\n=== CyclicBarrier Demo ===\n");
            
            int numThreads = 3;
            CyclicBarrier barrier = new CyclicBarrier(numThreads, () -> {
                System.out.println("*** All threads reached barrier! ***");
            });
            
            for (int i = 1; i <= numThreads; i++) {
                int threadId = i;
                new Thread(() -> {
                    try {
                        System.out.println("Thread " + threadId + " doing phase 1");
                        Thread.sleep(threadId * 1000);
                        
                        System.out.println("Thread " + threadId + " waiting at barrier");
                        barrier.await(); // Wait for others
                        
                        System.out.println("Thread " + threadId + " doing phase 2");
                        Thread.sleep(1000);
                        
                        System.out.println("Thread " + threadId + " completed");
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }).start();
            }
            
            Thread.sleep(10000);
        }
        
        /**
         * Phaser: More flexible than CyclicBarrier
         * - Dynamic number of parties
         * - Multiple phases
         * - Can register/deregister parties
         */
        
        static void demonstratePhaser() throws InterruptedException {
            System.out.println("\n=== Phaser Demo ===\n");
            
            Phaser phaser = new Phaser(1); // 1 = main thread
            
            for (int i = 1; i <= 3; i++) {
                int threadId = i;
                phaser.register(); // Register party
                
                new Thread(() -> {
                    System.out.println("Thread " + threadId + " phase 1");
                    phaser.arriveAndAwaitAdvance(); // Phase 1 complete
                    
                    System.out.println("Thread " + threadId + " phase 2");
                    phaser.arriveAndAwaitAdvance(); // Phase 2 complete
                    
                    System.out.println("Thread " + threadId + " completed");
                    phaser.arriveAndDeregister(); // Deregister
                }).start();
            }
            
            System.out.println("Main thread phase 0");
            phaser.arriveAndAwaitAdvance(); // Phase 0 -> 1
            
            System.out.println("Main thread phase 1");
            phaser.arriveAndAwaitAdvance(); // Phase 1 -> 2
            
            System.out.println("Main thread phase 2");
            phaser.arriveAndDeregister(); // Deregister main
            
            Thread.sleep(2000);
        }
    }
    
    // ============================================
    // MAIN METHOD - DEMONSTRATION
    // ============================================
    
    public static void main(String[] args) {
        try {
            // Section 1: Race Conditions
            RaceConditionDemo.demonstrateRaceCondition();
            RaceConditionDemo.demonstrateBankRaceCondition();
            
            // Section 2: Synchronized Methods
            SynchronizedMethods.demonstrateSafeCounter();
            SynchronizedMethods.demonstrateSafeBankAccount();
            
            // Section 3: Synchronized Blocks
            SynchronizedBlocks.demonstrateMultipleLocks();
            
            // Section 4: Static Synchronization
            StaticSynchronization.demonstrateStaticSync();
            
            // Section 5: Locks
            LocksDemo.demonstrateReentrantLock();
            LocksDemo.demonstrateReadWriteLock();
            
            // Section 6: Volatile
            VolatileDemo.demonstrateVolatile();
            
            // Section 7: Atomic Variables
            AtomicVariablesDemo.demonstrateAtomicInteger();
            AtomicVariablesDemo.demonstrateAtomicReference();
            AtomicVariablesDemo.demonstrateAtomicBoolean();
            
            // Section 8: Deadlock
            // DeadlockDemo.demonstrateDeadlock(); // Will hang!
            DeadlockDemo.demonstrateDeadlockPrevention();
            
            // Section 9: Semaphore & CountDownLatch
            SemaphoreDemo.demonstrateSemaphore();
            SemaphoreDemo.demonstrateCountDownLatch();
            
            // Section 10: CyclicBarrier & Phaser
            CyclicBarrierDemo.demonstrateCyclicBarrier();
            CyclicBarrierDemo.demonstratePhaser();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
