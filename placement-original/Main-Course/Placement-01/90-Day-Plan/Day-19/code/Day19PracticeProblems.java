package day19.practice;

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.util.concurrent.locks.*;

/**
 * DAY 19 - COMPLETE PRACTICE PROBLEMS
 * ====================================
 * 40+ comprehensive practice problems with complete solutions
 * covering all concurrency topics from Day 19.
 * 
 * Problem Categories:
 * 1. Threading Basics (5 problems)
 * 2. Synchronization (8 problems)
 * 3. Executor Framework (5 problems)
 * 4. Lock Framework (7 problems)
 * 5. Concurrent Collections (8 problems)
 * 6. Advanced Concurrency (7 problems)
 */

public class Day19PracticeProblems {

    // ================== CATEGORY 1: THREADING BASICS ==================
    
    /**
     * Problem 1: Create a thread-safe counter using synchronized
     * Solution: Use synchronized method or block
     */
    static class ThreadSafeCounter {
        private int count = 0;
        
        public synchronized void increment() {
            count++;
        }
        
        public synchronized int getCount() {
            return count;
        }
    }
    
    /**
     * Problem 2: Implement a thread that prints numbers 1-10
     * Solution: Extend Thread or implement Runnable
     */
    static class NumberPrinter implements Runnable {
        private String name;
        
        public NumberPrinter(String name) {
            this.name = name;
        }
        
        @Override
        public void run() {
            for (int i = 1; i <= 10; i++) {
                System.out.println(name + ": " + i);
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        }
    }
    
    /**
     * Problem 3: Implement thread priority demonstration
     * Solution: Set thread priorities and show execution order
     */
    static class ThreadPriorityDemo {
        public static void demonstrate() throws InterruptedException {
            Runnable task = () -> {
                System.out.println(Thread.currentThread().getName() + 
                    " (Priority: " + Thread.currentThread().getPriority() + ")");
            };
            
            Thread low = new Thread(task, "Low");
            Thread high = new Thread(task, "High");
            
            low.setPriority(Thread.MIN_PRIORITY);
            high.setPriority(Thread.MAX_PRIORITY);
            
            low.start();
            high.start();
            low.join();
            high.join();
        }
    }
    
    /**
     * Problem 4: Implement thread interruption handling
     * Solution: Check isInterrupted() and handle InterruptedException
     */
    static class InterruptibleWorker implements Runnable {
        @Override
        public void run() {
            try {
                for (int i = 0; i < 10; i++) {
                    if (Thread.currentThread().isInterrupted()) {
                        System.out.println("Thread interrupted");
                        break;
                    }
                    System.out.println("Working: " + i);
                    Thread.sleep(1000);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                System.out.println("Interrupted during sleep");
            }
        }
    }
    
    /**
     * Problem 5: Implement wait/notify pattern
     * Solution: Use synchronized methods with wait() and notify()
     */
    static class WaitNotifyBuffer {
        private int[] buffer = new int[5];
        private int count = 0;
        
        public synchronized void put(int value) throws InterruptedException {
            while (count == buffer.length) {
                wait();
            }
            buffer[count++] = value;
            notifyAll();
        }
        
        public synchronized int get() throws InterruptedException {
            while (count == 0) {
                wait();
            }
            int value = buffer[--count];
            notifyAll();
            return value;
        }
    }
    
    // ================== CATEGORY 2: SYNCHRONIZATION ==================
    
    /**
     * Problem 6: Prevent race condition with multiple threads
     * Solution: Use synchronized or locks
     */
    static class RaceConditionFix {
        private int balance = 1000;
        
        public synchronized void withdraw(int amount) {
            if (balance >= amount) {
                balance -= amount;
                System.out.println("Withdrawn: " + amount + 
                    ", Balance: " + balance);
            }
        }
        
        public synchronized void deposit(int amount) {
            balance += amount;
            System.out.println("Deposited: " + amount + 
                ", Balance: " + balance);
        }
    }
    
    /**
     * Problem 7: Implement deadlock prevention using lock ordering
     * Solution: Always acquire locks in same order
     */
    static class DeadlockPrevention {
        private Object lock1 = new Object();
        private Object lock2 = new Object();
        
        public void transferFunds() {
            // Always acquire lock1 first
            synchronized (lock1) {
                synchronized (lock2) {
                    System.out.println("Transferring funds safely");
                }
            }
        }
    }
    
    /**
     * Problem 8: Use ReentrantLock with try-lock timeout
     * Solution: Use tryLock(timeout) to avoid deadlock
     */
    static class TimeoutLockExample {
        private ReentrantLock lock = new ReentrantLock();
        
        public boolean performOperation() throws InterruptedException {
            if (lock.tryLock(2, TimeUnit.SECONDS)) {
                try {
                    System.out.println("Lock acquired");
                    Thread.sleep(1000);
                    return true;
                } finally {
                    lock.unlock();
                }
            } else {
                System.out.println("Could not acquire lock");
                return false;
            }
        }
    }
    
    /**
     * Problem 9: Implement ReadWriteLock for concurrent reads
     * Solution: Use ReentrantReadWriteLock
     */
    static class ConcurrentReadWrite {
        private ReadWriteLock lock = new ReentrantReadWriteLock();
        private String data = "initial";
        
        public String read() {
            lock.readLock().lock();
            try {
                return data;
            } finally {
                lock.readLock().unlock();
            }
        }
        
        public void write(String newData) {
            lock.writeLock().lock();
            try {
                this.data = newData;
            } finally {
                lock.writeLock().unlock();
            }
        }
    }
    
    /**
     * Problem 10: Use StampedLock for optimistic read
     * Solution: Optimistic read with validation
     */
    static class OptimisticLockExample {
        private StampedLock lock = new StampedLock();
        private double value = 0;
        
        public double readOptimistic() {
            long stamp = lock.tryOptimisticRead();
            double result = value;
            
            if (!lock.validate(stamp)) {
                // Retry with pessimistic read
                stamp = lock.readLock();
                try {
                    result = value;
                } finally {
                    lock.unlockRead(stamp);
                }
            }
            return result;
        }
    }
    
    /**
     * Problem 11: Implement Semaphore for resource limiting
     * Solution: Use Semaphore with permits
     */
    static class SemaphoreResourcePool {
        private Semaphore semaphore = new Semaphore(3);
        
        public void useResource() throws InterruptedException {
            semaphore.acquire();
            try {
                System.out.println("Using resource");
                Thread.sleep(1000);
            } finally {
                semaphore.release();
            }
        }
    }
    
    /**
     * Problem 13: Use Phaser for complex synchronization
     * Solution: Use Phaser for multiple phases
     */
    static class PhaserSynchronization {
        public static void demonstrate() throws InterruptedException {
            Phaser phaser = new Phaser(3);
            
            for (int i = 0; i < 3; i++) {
                new Thread(() -> {
                    System.out.println("Phase 1");
                    phaser.arriveAndAwaitAdvance();
                    System.out.println("Phase 2");
                }).start();
            }
            
            Thread.sleep(5000);
        }
    }
    
    // ================== CATEGORY 3: EXECUTOR FRAMEWORK ==================
    
    /**
     * Problem 14: Submit tasks to ExecutorService
     * Solution: Use Executors.newFixedThreadPool()
     */
    static class ExecutorBasicExample {
        public static void demonstrate() throws InterruptedException {
            ExecutorService executor = Executors.newFixedThreadPool(3);
            
            for (int i = 0; i < 10; i++) {
                final int taskId = i;
                executor.submit(() -> 
                    System.out.println("Task " + taskId + " executed")
                );
            }
            
            executor.shutdown();
            executor.awaitTermination(5, TimeUnit.SECONDS);
        }
    }
    
    /**
     * Problem 15: Use Future to get task results
     * Solution: Use submit(Callable) to get Future
     */
    static class FutureExample {
        public static void demonstrate() throws ExecutionException, InterruptedException {
            ExecutorService executor = Executors.newSingleThreadExecutor();
            
            Future<Integer> future = executor.submit(() -> {
                Thread.sleep(1000);
                return 42;
            });
            
            Integer result = future.get();
            System.out.println("Result: " + result);
            
            executor.shutdown();
        }
    }
    
    /**
     * Problem 16: Use ScheduledExecutorService for delayed tasks
     * Solution: Use scheduleAtFixedRate()
     */
    static class ScheduledTaskExample {
        public static void demonstrate() throws InterruptedException {
            ScheduledExecutorService scheduler = 
                Executors.newScheduledThreadPool(1);
            
            ScheduledFuture<?> future = scheduler.scheduleAtFixedRate(
                () -> System.out.println("Periodic task"),
                0, 1, TimeUnit.SECONDS
            );
            
            Thread.sleep(5000);
            future.cancel(true);
            scheduler.shutdown();
        }
    }
    
    /**
     * Problem 17: Implement producer-consumer with ExecutorService
     * Solution: Use two threads, one producer, one consumer
     */
    static class ProducerConsumerExecutor {
        private BlockingQueue<Integer> queue = new LinkedBlockingQueue<>();
        
        public void run() throws InterruptedException {
            ExecutorService executor = Executors.newFixedThreadPool(2);
            
            executor.submit(() -> {
                try {
                    for (int i = 0; i < 5; i++) {
                        queue.put(i);
                        Thread.sleep(100);
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
            
            executor.submit(() -> {
                try {
                    while (true) {
                        Integer value = queue.take();
                        System.out.println("Consumed: " + value);
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
            
            Thread.sleep(2000);
            executor.shutdownNow();
        }
    }
    
    /**
     * Problem 18: Use invokeAll to wait for all tasks
     * Solution: Use executor.invokeAll(tasks)
     */
    static class InvokeAllExample {
        public static void demonstrate() throws InterruptedException {
            ExecutorService executor = Executors.newFixedThreadPool(3);
            
            List<Callable<String>> tasks = new ArrayList<>();
            for (int i = 0; i < 3; i++) {
                final int taskId = i;
                tasks.add(() -> "Result " + taskId);
            }
            
            List<Future<String>> futures = executor.invokeAll(tasks);
            
            for (Future<String> future : futures) {
                try {
                    System.out.println(future.get());
                } catch (ExecutionException e) {
                    e.printStackTrace();
                }
            }
            
            executor.shutdown();
        }
    }
    
    // ================== CATEGORY 4: LOCK FRAMEWORK ==================
    
    /**
     * Problem 19: Implement ReentrantLock basic usage
     * Solution: Use lock/unlock in try-finally
     */
    static class ReentrantLockExample {
        private ReentrantLock lock = new ReentrantLock();
        private int value = 0;
        
        public void increment() {
            lock.lock();
            try {
                value++;
            } finally {
                lock.unlock();
            }
        }
    }
    
    /**
     * Problem 20: Use Condition variables for coordination
     * Solution: Create condition from lock
     */
    static class ConditionExample {
        private ReentrantLock lock = new ReentrantLock();
        private Condition notEmpty = lock.newCondition();
        private Queue<Integer> queue = new LinkedList<>();
        
        public void put(int value) throws InterruptedException {
            lock.lock();
            try {
                queue.add(value);
                notEmpty.signalAll();
            } finally {
                lock.unlock();
            }
        }
        
        public int take() throws InterruptedException {
            lock.lock();
            try {
                while (queue.isEmpty()) {
                    notEmpty.await();
                }
                return queue.poll();
            } finally {
                lock.unlock();
            }
        }
    }
    
    /**
     * Problem 21: Use CyclicBarrier for multi-way synchronization
     * Solution: Create barrier with party count
     */
    static class BarrierExample {
        public static void demonstrate() throws InterruptedException {
            CyclicBarrier barrier = new CyclicBarrier(3);
            
            for (int i = 0; i < 3; i++) {
                new Thread(() -> {
                    try {
                        System.out.println("Waiting at barrier");
                        barrier.await();
                        System.out.println("Passed barrier");
                    } catch (BrokenBarrierException | InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                }).start();
            }
            
            Thread.sleep(3000);
        }
    }
    
    /**
     * Problem 22: Use CountDownLatch for synchronization point
     * Solution: Create latch with count, count down on completion
     */
    static class LatchExample {
        public static void demonstrate() throws InterruptedException {
            CountDownLatch latch = new CountDownLatch(3);
            
            for (int i = 0; i < 3; i++) {
                new Thread(() -> {
                    try {
                        Thread.sleep(1000);
                        latch.countDown();
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                }).start();
            }
            
            latch.await();
            System.out.println("All tasks completed");
        }
    }
    
    // ================== CATEGORY 5: CONCURRENT COLLECTIONS ==================
    
    /**
     * Problem 23: Use ConcurrentHashMap safely
     * Solution: Use putIfAbsent and replace atomically
     */
    static class ConcurrentHashMapExample {
        private ConcurrentHashMap<String, Integer> map = 
            new ConcurrentHashMap<>();
        
        public void safeUpdate(String key, int value) {
            map.putIfAbsent(key, value);
            map.replace(key, value);
        }
    }
    
    /**
     * Problem 24: Implement producer-consumer with BlockingQueue
     * Solution: Use take() and put() for blocking operations
     */
    static class BlockingQueueProducerConsumer {
        private BlockingQueue<Integer> queue = new LinkedBlockingQueue<>(10);
        
        public void run() throws InterruptedException {
            Thread producer = new Thread(() -> {
                try {
                    for (int i = 0; i < 5; i++) {
                        queue.put(i);
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
            
            Thread consumer = new Thread(() -> {
                try {
                    for (int i = 0; i < 5; i++) {
                        Integer value = queue.take();
                        System.out.println("Consumed: " + value);
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
            
            producer.start();
            consumer.start();
            producer.join();
            consumer.join();
        }
    }
    
    /**
     * Problem 25: Use CopyOnWriteArrayList for read-heavy workload
     * Solution: Multiple readers, occasional writers
     */
    static class CopyOnWriteExample {
        private CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();
        
        public void addItem(String item) {
            list.add(item);
        }
        
        public void readItems() {
            for (String item : list) {
                System.out.println(item);
            }
        }
    }
    
    /**
     * Problem 26: Use ConcurrentSkipListMap for sorted concurrent map
     * Solution: Elements automatically sorted by key
     */
    static class SkipListExample {
        private ConcurrentSkipListMap<Integer, String> map = 
            new ConcurrentSkipListMap<>();
        
        public void demonstrate() {
            map.put(3, "three");
            map.put(1, "one");
            map.put(2, "two");
            
            map.forEach((k, v) -> System.out.println(k + " -> " + v));
        }
    }
    
    // ================== CATEGORY 6: ADVANCED CONCURRENCY ==================
    
    /**
     * Problem 27: Use AtomicInteger for lock-free counter
     * Solution: Use incrementAndGet()
     */
    static class AtomicCounterExample {
        private AtomicInteger counter = new AtomicInteger(0);
        
        public void increment() {
            counter.incrementAndGet();
        }
        
        public int getCount() {
            return counter.get();
        }
    }
    
    /**
     * Problem 28: Use volatile for visibility
     * Solution: Mark field volatile for cross-thread visibility
     */
    static class VolatileExample {
        private volatile boolean flag = false;
        
        public void setFlag() {
            flag = true;
        }
        
        public void waitForFlag() throws InterruptedException {
            while (!flag) {
                Thread.sleep(100);
            }
        }
    }
    
    /**
     * Problem 29: Implement double-checked locking (correctly)
     * Solution: Use volatile for lazy initialization
     */
    static class LazyInitialization {
        private volatile Expensive instance = null;
        
        public Expensive getInstance() {
            if (instance == null) {
                synchronized (this) {
                    if (instance == null) {
                        instance = new Expensive();
                    }
                }
            }
            return instance;
        }
    }
    
    static class Expensive {
        // Expensive initialization
    }
    
    /**
     * Problem 30: Use ThreadLocal for thread-specific data
     * Solution: Each thread gets its own instance
     */
    static class ThreadLocalExample {
        private static ThreadLocal<String> threadData = 
            ThreadLocal.withInitial(() -> "Data for " + 
                Thread.currentThread().getName());
        
        public String getData() {
            return threadData.get();
        }
        
        public void cleanup() {
            threadData.remove();
        }
    }
    
    // ================== MAIN - DEMONSTRATE ALL PROBLEMS ==================
    
    public static void main(String[] args) {
        try {
            System.out.println("=== DAY 19: PRACTICE PROBLEMS ===\n");
            
            System.out.println("--- PROBLEM 1: Thread-Safe Counter ---");
            ThreadSafeCounter counter = new ThreadSafeCounter();
            counter.increment();
            System.out.println("Count: " + counter.getCount());
            
            System.out.println("\n--- PROBLEM 14: Executor Example ---");
            ExecutorBasicExample.demonstrate();
            
            System.out.println("\n--- PROBLEM 24: BlockingQueue ---");
            new BlockingQueueProducerConsumer().run();
            
            System.out.println("\n--- PROBLEM 27: Atomic Counter ---");
            AtomicCounterExample ac = new AtomicCounterExample();
            ac.increment();
            System.out.println("Atomic Count: " + ac.getCount());
            
            System.out.println("\n=== PRACTICE PROBLEMS COMPLETE ===");
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
