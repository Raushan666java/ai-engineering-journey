/**
 * DAY 11: MULTITHREADING PRACTICE PROBLEMS
 * 
 * 30 Practice Problems + 5 Bonus Problems
 * Covers: Threading, Synchronization, Concurrent Collections, Patterns
 * 
 * Sections:
 * 1. Thread Basics (1-5)
 * 2. Synchronization (6-10)
 * 3. Locks & Atomic (11-15)
 * 4. ExecutorService (16-20)
 * 5. Concurrent Collections (21-25)
 * 6. Advanced Patterns (26-30)
 * 7. Bonus (31-35)
 */

package day11.practice;

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.util.concurrent.locks.*;

public class Day11PracticeProblems {

    // ============================================
    // SECTION 1: THREAD BASICS (1-5)
    // ============================================
    
    // Problem 1: Create thread using Runnable
    static class Problem1 {
        public static void createThreadWithRunnable() {
            Runnable task = () -> {
                System.out.println("Thread running: " + Thread.currentThread().getName());
            };
            Thread t = new Thread(task, "MyThread");
            t.start();
        }
    }
    
    // Problem 2: Create 5 threads and print their names
    static class Problem2 {
        public static void createMultipleThreads() throws InterruptedException {
            List<Thread> threads = new ArrayList<>();
            for (int i = 1; i <= 5; i++) {
                int threadId = i;
                Thread t = new Thread(() -> {
                    System.out.println("Thread-" + threadId + " executing");
                });
                threads.add(t);
                t.start();
            }
            for (Thread t : threads) {
                t.join();
            }
        }
    }
    
    // Problem 3: Use Thread.sleep() to delay execution
    static class Problem3 {
        public static void useSleep() throws InterruptedException {
            System.out.println("Start: " + System.currentTimeMillis());
            Thread.sleep(2000); // 2 seconds
            System.out.println("After 2s: " + System.currentTimeMillis());
        }
    }
    
    // Problem 4: Use Thread.join() to wait for completion
    static class Problem4 {
        public static void useJoin() throws InterruptedException {
            Thread t = new Thread(() -> {
                for (int i = 1; i <= 3; i++) {
                    System.out.println("Count: " + i);
                    try {
                        Thread.sleep(500);
                    } catch (InterruptedException e) {}
                }
            });
            t.start();
            t.join(); // Wait for completion
            System.out.println("Thread completed");
        }
    }
    
    // Problem 5: Check if thread is alive
    static class Problem5 {
        public static void checkThreadAlive() throws InterruptedException {
            Thread t = new Thread(() -> {
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e) {}
            });
            
            System.out.println("Before start: " + t.isAlive());
            t.start();
            System.out.println("After start: " + t.isAlive());
            Thread.sleep(3000);
            System.out.println("After completion: " + t.isAlive());
        }
    }
    
    // ============================================
    // SECTION 2: SYNCHRONIZATION (6-10)
    // ============================================
    
    // Problem 6: Fix race condition with synchronized method
    static class Problem6 {
        static class Counter {
            private int count = 0;
            
            public synchronized void increment() {
                count++;
            }
            
            public int getCount() {
                return count;
            }
        }
        
        public static void fixRaceCondition() throws InterruptedException {
            Counter counter = new Counter();
            Thread t1 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) counter.increment();
            });
            Thread t2 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) counter.increment();
            });
            t1.start();
            t2.start();
            t1.join();
            t2.join();
            System.out.println("Count: " + counter.getCount()); // 2000
        }
    }
    
    // Problem 7: Use synchronized block
    static class Problem7 {
        private static int shared = 0;
        private static final Object lock = new Object();
        
        public static void useSynchronizedBlock() throws InterruptedException {
            Runnable task = () -> {
                for (int i = 0; i < 1000; i++) {
                    synchronized (lock) {
                        shared++;
                    }
                }
            };
            Thread t1 = new Thread(task);
            Thread t2 = new Thread(task);
            t1.start();
            t2.start();
            t1.join();
            t2.join();
            System.out.println("Shared: " + shared); // 2000
        }
    }
    
    // Problem 8: Implement wait/notify
    static class Problem8 {
        static class WaitNotifyExample {
            private boolean ready = false;
            
            public synchronized void waitForSignal() throws InterruptedException {
                while (!ready) {
                    wait();
                }
                System.out.println("Signal received!");
            }
            
            public synchronized void sendSignal() {
                ready = true;
                notify();
            }
        }
        
        public static void useWaitNotify() throws InterruptedException {
            WaitNotifyExample example = new WaitNotifyExample();
            Thread waiter = new Thread(() -> {
                try {
                    example.waitForSignal();
                } catch (InterruptedException e) {}
            });
            
            waiter.start();
            Thread.sleep(2000);
            example.sendSignal();
            waiter.join();
        }
    }
    
    // Problem 9: Static synchronization
    static class Problem9 {
        static class StaticCounter {
            private static int count = 0;
            
            public static synchronized void increment() {
                count++;
            }
            
            public static int getCount() {
                return count;
            }
        }
        
        public static void useStaticSync() throws InterruptedException {
            Thread t1 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) StaticCounter.increment();
            });
            Thread t2 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) StaticCounter.increment();
            });
            t1.start();
            t2.start();
            t1.join();
            t2.join();
            System.out.println("Static count: " + StaticCounter.getCount());
        }
    }
    
    // Problem 10: Implement simple producer-consumer
    static class Problem10 {
        static class SimplePC {
            private int value;
            private boolean available = false;
            
            public synchronized void produce(int val) throws InterruptedException {
                while (available) {
                    wait();
                }
                value = val;
                available = true;
                System.out.println("Produced: " + val);
                notify();
            }
            
            public synchronized int consume() throws InterruptedException {
                while (!available) {
                    wait();
                }
                available = false;
                System.out.println("Consumed: " + value);
                notify();
                return value;
            }
        }
        
        public static void producerConsumer() throws InterruptedException {
            SimplePC pc = new SimplePC();
            Thread producer = new Thread(() -> {
                try {
                    for (int i = 1; i <= 5; i++) {
                        pc.produce(i);
                        Thread.sleep(500);
                    }
                } catch (InterruptedException e) {}
            });
            Thread consumer = new Thread(() -> {
                try {
                    for (int i = 1; i <= 5; i++) {
                        pc.consume();
                        Thread.sleep(1000);
                    }
                } catch (InterruptedException e) {}
            });
            producer.start();
            consumer.start();
            producer.join();
            consumer.join();
        }
    }
    
    // ============================================
    // SECTION 3: LOCKS & ATOMIC (11-15)
    // ============================================
    
    // Problem 11: Use ReentrantLock
    static class Problem11 {
        private static int count = 0;
        private static Lock lock = new ReentrantLock();
        
        public static void useReentrantLock() throws InterruptedException {
            Runnable task = () -> {
                for (int i = 0; i < 1000; i++) {
                    lock.lock();
                    try {
                        count++;
                    } finally {
                        lock.unlock();
                    }
                }
            };
            Thread t1 = new Thread(task);
            Thread t2 = new Thread(task);
            t1.start();
            t2.start();
            t1.join();
            t2.join();
            System.out.println("Count: " + count);
        }
    }
    
    // Problem 12: Use tryLock() with timeout
    static class Problem12 {
        private static Lock lock = new ReentrantLock();
        
        public static void useTryLock() throws InterruptedException {
            Thread t1 = new Thread(() -> {
                lock.lock();
                try {
                    System.out.println("Thread 1 acquired lock");
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                } finally {
                    lock.unlock();
                }
            });
            
            Thread t2 = new Thread(() -> {
                try {
                    Thread.sleep(500);
                    if (lock.tryLock(1, TimeUnit.SECONDS)) {
                        try {
                            System.out.println("Thread 2 acquired lock");
                        } finally {
                            lock.unlock();
                        }
                    } else {
                        System.out.println("Thread 2 could not acquire lock");
                    }
                } catch (InterruptedException e) {}
            });
            
            t1.start();
            t2.start();
            t1.join();
            t2.join();
        }
    }
    
    // Problem 13: Use AtomicInteger
    static class Problem13 {
        private static AtomicInteger count = new AtomicInteger(0);
        
        public static void useAtomicInteger() throws InterruptedException {
            Runnable task = () -> {
                for (int i = 0; i < 1000; i++) {
                    count.incrementAndGet();
                }
            };
            Thread t1 = new Thread(task);
            Thread t2 = new Thread(task);
            t1.start();
            t2.start();
            t1.join();
            t2.join();
            System.out.println("Atomic count: " + count.get());
        }
    }
    
    // Problem 14: Use volatile keyword
    static class Problem14 {
        private static volatile boolean flag = false;
        
        public static void useVolatile() throws InterruptedException {
            Thread t1 = new Thread(() -> {
                while (!flag) {
                    // Busy wait
                }
                System.out.println("Flag is true!");
            });
            
            t1.start();
            Thread.sleep(2000);
            flag = true;
            t1.join();
        }
    }
    
    // Problem 15: Use ReadWriteLock
    static class Problem15 {
        private static int data = 0;
        private static ReadWriteLock rwLock = new ReentrantReadWriteLock();
        
        public static void useReadWriteLock() throws InterruptedException {
            Runnable reader = () -> {
                rwLock.readLock().lock();
                try {
                    System.out.println("Reading: " + data);
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                } finally {
                    rwLock.readLock().unlock();
                }
            };
            
            Runnable writer = () -> {
                rwLock.writeLock().lock();
                try {
                    data++;
                    System.out.println("Writing: " + data);
                    Thread.sleep(200);
                } finally {
                    rwLock.writeLock().unlock();
                }
            };
            
            Thread r1 = new Thread(reader);
            Thread r2 = new Thread(reader);
            Thread w1 = new Thread(writer);
            
            r1.start();
            r2.start();
            w1.start();
            
            r1.join();
            r2.join();
            w1.join();
        }
    }
    
    // ============================================
    // SECTION 4: EXECUTORSERVICE (16-20)
    // ============================================
    
    // Problem 16: Use SingleThreadExecutor
    static class Problem16 {
        public static void useSingleThreadExecutor() {
            ExecutorService executor = Executors.newSingleThreadExecutor();
            for (int i = 1; i <= 5; i++) {
                int taskId = i;
                executor.submit(() -> {
                    System.out.println("Task " + taskId + " on " 
                        + Thread.currentThread().getName());
                });
            }
            executor.shutdown();
        }
    }
    
    // Problem 17: Use FixedThreadPool
    static class Problem17 {
        public static void useFixedThreadPool() {
            ExecutorService executor = Executors.newFixedThreadPool(3);
            for (int i = 1; i <= 10; i++) {
                int taskId = i;
                executor.submit(() -> {
                    System.out.println("Task " + taskId + " on " 
                        + Thread.currentThread().getName());
                });
            }
            executor.shutdown();
        }
    }
    
    // Problem 18: Use Callable and Future
    static class Problem18 {
        public static void useCallableAndFuture() throws Exception {
            ExecutorService executor = Executors.newSingleThreadExecutor();
            
            Callable<Integer> task = () -> {
                Thread.sleep(2000);
                return 42;
            };
            
            Future<Integer> future = executor.submit(task);
            System.out.println("Task submitted");
            System.out.println("Result: " + future.get()); // Blocks
            
            executor.shutdown();
        }
    }
    
    // Problem 19: Use ScheduledExecutorService
    static class Problem19 {
        public static void useScheduledExecutor() throws InterruptedException {
            ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);
            
            executor.schedule(() -> {
                System.out.println("Task executed after 2 seconds");
            }, 2, TimeUnit.SECONDS);
            
            Thread.sleep(3000);
            executor.shutdown();
        }
    }
    
    // Problem 20: Use invokeAll for multiple Callables
    static class Problem20 {
        public static void useInvokeAll() throws Exception {
            ExecutorService executor = Executors.newFixedThreadPool(3);
            
            List<Callable<Integer>> tasks = new ArrayList<>();
            for (int i = 1; i <= 5; i++) {
                int taskId = i;
                tasks.add(() -> {
                    Thread.sleep(1000);
                    return taskId * taskId;
                });
            }
            
            List<Future<Integer>> results = executor.invokeAll(tasks);
            
            for (Future<Integer> result : results) {
                System.out.println("Result: " + result.get());
            }
            
            executor.shutdown();
        }
    }
    
    // ============================================
    // SECTION 5: CONCURRENT COLLECTIONS (21-25)
    // ============================================
    
    // Problem 21: Use ConcurrentHashMap
    static class Problem21 {
        public static void useConcurrentHashMap() throws InterruptedException {
            ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
            
            ExecutorService executor = Executors.newFixedThreadPool(3);
            for (int i = 1; i <= 100; i++) {
                int num = i;
                executor.submit(() -> {
                    map.put("Key" + num, num);
                });
            }
            
            executor.shutdown();
            executor.awaitTermination(5, TimeUnit.SECONDS);
            
            System.out.println("Map size: " + map.size());
        }
    }
    
    // Problem 22: Use CopyOnWriteArrayList
    static class Problem22 {
        public static void useCopyOnWriteArrayList() {
            CopyOnWriteArrayList<Integer> list = new CopyOnWriteArrayList<>();
            
            list.add(1);
            list.add(2);
            list.add(3);
            
            for (Integer num : list) {
                System.out.println(num);
                list.add(4); // Safe!
            }
            
            System.out.println("Final list: " + list);
        }
    }
    
    // Problem 23: Use BlockingQueue
    static class Problem23 {
        public static void useBlockingQueue() throws InterruptedException {
            BlockingQueue<Integer> queue = new LinkedBlockingQueue<>(5);
            
            Thread producer = new Thread(() -> {
                try {
                    for (int i = 1; i <= 10; i++) {
                        queue.put(i);
                        System.out.println("Produced: " + i);
                    }
                } catch (InterruptedException e) {}
            });
            
            Thread consumer = new Thread(() -> {
                try {
                    for (int i = 1; i <= 10; i++) {
                        Thread.sleep(1000);
                        int item = queue.take();
                        System.out.println("Consumed: " + item);
                    }
                } catch (InterruptedException e) {}
            });
            
            producer.start();
            consumer.start();
            producer.join();
            consumer.join();
        }
    }
    
    // Problem 24: Use ConcurrentLinkedQueue
    static class Problem24 {
        public static void useConcurrentLinkedQueue() throws InterruptedException {
            ConcurrentLinkedQueue<Integer> queue = new ConcurrentLinkedQueue<>();
            
            Thread producer = new Thread(() -> {
                for (int i = 1; i <= 5; i++) {
                    queue.offer(i);
                    System.out.println("Offered: " + i);
                }
            });
            
            Thread consumer = new Thread(() -> {
                try {
                    Thread.sleep(1000);
                    while (!queue.isEmpty()) {
                        Integer item = queue.poll();
                        if (item != null) {
                            System.out.println("Polled: " + item);
                        }
                    }
                } catch (InterruptedException e) {}
            });
            
            producer.start();
            consumer.start();
            producer.join();
            consumer.join();
        }
    }
    
    // Problem 25: Use PriorityBlockingQueue
    static class Problem25 {
        public static void usePriorityBlockingQueue() throws InterruptedException {
            PriorityBlockingQueue<Integer> queue = new PriorityBlockingQueue<>();
            
            queue.put(5);
            queue.put(2);
            queue.put(8);
            queue.put(1);
            
            while (!queue.isEmpty()) {
                System.out.println("Took: " + queue.take());
            }
        }
    }
    
    // ============================================
    // SECTION 6: ADVANCED PATTERNS (26-30)
    // ============================================
    
    // Problem 26: Use Semaphore
    static class Problem26 {
        public static void useSemaphore() throws InterruptedException {
            Semaphore sem = new Semaphore(3); // Max 3 permits
            
            List<Thread> threads = new ArrayList<>();
            for (int i = 1; i <= 10; i++) {
                int threadId = i;
                Thread t = new Thread(() -> {
                    try {
                        sem.acquire();
                        System.out.println("Thread " + threadId + " acquired permit");
                        Thread.sleep(2000);
                        System.out.println("Thread " + threadId + " releasing permit");
                    } catch (InterruptedException e) {
                    } finally {
                        sem.release();
                    }
                });
                threads.add(t);
                t.start();
            }
            
            for (Thread t : threads) {
                t.join();
            }
        }
    }
    
    // Problem 27: Use CountDownLatch
    static class Problem27 {
        public static void useCountDownLatch() throws InterruptedException {
            CountDownLatch latch = new CountDownLatch(3);
            
            for (int i = 1; i <= 3; i++) {
                int workerId = i;
                new Thread(() -> {
                    System.out.println("Worker " + workerId + " working");
                    try {
                        Thread.sleep(workerId * 1000);
                    } catch (InterruptedException e) {}
                    System.out.println("Worker " + workerId + " done");
                    latch.countDown();
                }).start();
            }
            
            System.out.println("Waiting for workers...");
            latch.await();
            System.out.println("All workers done!");
        }
    }
    
    // Problem 28: Use CyclicBarrier
    static class Problem28 {
        public static void useCyclicBarrier() throws InterruptedException {
            CyclicBarrier barrier = new CyclicBarrier(3, () -> {
                System.out.println("All reached barrier!");
            });
            
            for (int i = 1; i <= 3; i++) {
                int threadId = i;
                new Thread(() -> {
                    try {
                        System.out.println("Thread " + threadId + " working");
                        Thread.sleep(threadId * 1000);
                        System.out.println("Thread " + threadId + " waiting at barrier");
                        barrier.await();
                        System.out.println("Thread " + threadId + " continuing");
                    } catch (Exception e) {}
                }).start();
            }
            
            Thread.sleep(5000);
        }
    }
    
    // Problem 29: Use CompletableFuture
    static class Problem29 {
        public static void useCompletableFuture() throws Exception {
            CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> {
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e) {}
                return 42;
            }).thenApply(result -> result * 2);
            
            System.out.println("Result: " + future.get());
        }
    }
    
    // Problem 30: Use ThreadLocal
    static class Problem30 {
        private static ThreadLocal<Integer> threadLocal = ThreadLocal.withInitial(() -> 0);
        
        public static void useThreadLocal() throws InterruptedException {
            Thread t1 = new Thread(() -> {
                threadLocal.set(100);
                System.out.println("Thread 1: " + threadLocal.get());
            });
            
            Thread t2 = new Thread(() -> {
                threadLocal.set(200);
                System.out.println("Thread 2: " + threadLocal.get());
            });
            
            t1.start();
            t2.start();
            t1.join();
            t2.join();
        }
    }
    
    // ============================================
    // BONUS PROBLEMS (31-35)
    // ============================================
    
    // Bonus 1: Implement thread-safe Singleton
    static class Bonus1 {
        static class ThreadSafeSingleton {
            private static volatile ThreadSafeSingleton instance;
            
            private ThreadSafeSingleton() {}
            
            public static ThreadSafeSingleton getInstance() {
                if (instance == null) {
                    synchronized (ThreadSafeSingleton.class) {
                        if (instance == null) {
                            instance = new ThreadSafeSingleton();
                        }
                    }
                }
                return instance;
            }
        }
    }
    
    // Bonus 2: Print numbers alternately using two threads
    static class Bonus2 {
        static class AlternatePrinter {
            private boolean oddTurn = true;
            
            public synchronized void printOdd(int num) {
                while (!oddTurn) {
                    try {
                        wait();
                    } catch (InterruptedException e) {}
                }
                System.out.println("Odd: " + num);
                oddTurn = false;
                notifyAll();
            }
            
            public synchronized void printEven(int num) {
                while (oddTurn) {
                    try {
                        wait();
                    } catch (InterruptedException e) {}
                }
                System.out.println("Even: " + num);
                oddTurn = true;
                notifyAll();
            }
        }
        
        public static void printAlternately() throws InterruptedException {
            AlternatePrinter printer = new AlternatePrinter();
            
            Thread odd = new Thread(() -> {
                for (int i = 1; i <= 10; i += 2) {
                    printer.printOdd(i);
                }
            });
            
            Thread even = new Thread(() -> {
                for (int i = 2; i <= 10; i += 2) {
                    printer.printEven(i);
                }
            });
            
            odd.start();
            even.start();
            odd.join();
            even.join();
        }
    }
    
    // Bonus 3: Implement rate limiter
    static class Bonus3 {
        static class RateLimiter {
            private Semaphore semaphore;
            
            public RateLimiter(int permitsPerSecond) {
                this.semaphore = new Semaphore(permitsPerSecond);
                
                new Thread(() -> {
                    while (true) {
                        try {
                            Thread.sleep(1000);
                            semaphore.release(permitsPerSecond - semaphore.availablePermits());
                        } catch (InterruptedException e) {}
                    }
                }).start();
            }
            
            public void acquire() throws InterruptedException {
                semaphore.acquire();
            }
        }
    }
    
    // Bonus 4: Parallel sum using Fork-Join
    static class Bonus4 {
        static class SumTask extends RecursiveTask<Long> {
            private long[] array;
            private int start, end;
            
            public SumTask(long[] array, int start, int end) {
                this.array = array;
                this.start = start;
                this.end = end;
            }
            
            @Override
            protected Long compute() {
                if (end - start <= 1000) {
                    long sum = 0;
                    for (int i = start; i < end; i++) {
                        sum += array[i];
                    }
                    return sum;
                } else {
                    int mid = start + (end - start) / 2;
                    SumTask left = new SumTask(array, start, mid);
                    SumTask right = new SumTask(array, mid, end);
                    left.fork();
                    long rightResult = right.compute();
                    long leftResult = left.join();
                    return leftResult + rightResult;
                }
            }
        }
    }
    
    // Bonus 5: Implement connection pool
    static class Bonus5 {
        static class SimpleConnectionPool {
            private BlockingQueue<Object> pool;
            
            public SimpleConnectionPool(int size) {
                pool = new LinkedBlockingQueue<>(size);
                for (int i = 0; i < size; i++) {
                    pool.offer(new Object()); // Mock connection
                }
            }
            
            public Object getConnection() throws InterruptedException {
                return pool.take();
            }
            
            public void releaseConnection(Object conn) {
                pool.offer(conn);
            }
        }
    }
    
    // ============================================
    // MAIN METHOD - RUN ALL PROBLEMS
    // ============================================
    
    public static void main(String[] args) {
        try {
            System.out.println("=== Day 11: Multithreading Practice Problems ===\n");
            
            // Run all problems
            System.out.println("Problem 1:"); Problem1.createThreadWithRunnable();
            System.out.println("\nProblem 2:"); Problem2.createMultipleThreads();
            System.out.println("\nProblem 3:"); Problem3.useSleep();
            System.out.println("\nProblem 4:"); Problem4.useJoin();
            System.out.println("\nProblem 5:"); Problem5.checkThreadAlive();
            System.out.println("\nProblem 6:"); Problem6.fixRaceCondition();
            System.out.println("\nProblem 7:"); Problem7.useSynchronizedBlock();
            System.out.println("\nProblem 8:"); Problem8.useWaitNotify();
            System.out.println("\nProblem 9:"); Problem9.useStaticSync();
            System.out.println("\nProblem 10:"); Problem10.producerConsumer();
            System.out.println("\nProblem 11:"); Problem11.useReentrantLock();
            System.out.println("\nProblem 12:"); Problem12.useTryLock();
            System.out.println("\nProblem 13:"); Problem13.useAtomicInteger();
            System.out.println("\nProblem 14:"); Problem14.useVolatile();
            System.out.println("\nProblem 15:"); Problem15.useReadWriteLock();
            System.out.println("\nProblem 16:"); Problem16.useSingleThreadExecutor();
            System.out.println("\nProblem 17:"); Problem17.useFixedThreadPool();
            System.out.println("\nProblem 18:"); Problem18.useCallableAndFuture();
            System.out.println("\nProblem 19:"); Problem19.useScheduledExecutor();
            System.out.println("\nProblem 20:"); Problem20.useInvokeAll();
            System.out.println("\nProblem 21:"); Problem21.useConcurrentHashMap();
            System.out.println("\nProblem 22:"); Problem22.useCopyOnWriteArrayList();
            System.out.println("\nProblem 23:"); Problem23.useBlockingQueue();
            System.out.println("\nProblem 24:"); Problem24.useConcurrentLinkedQueue();
            System.out.println("\nProblem 25:"); Problem25.usePriorityBlockingQueue();
            System.out.println("\nProblem 26:"); Problem26.useSemaphore();
            System.out.println("\nProblem 27:"); Problem27.useCountDownLatch();
            System.out.println("\nProblem 28:"); Problem28.useCyclicBarrier();
            System.out.println("\nProblem 29:"); Problem29.useCompletableFuture();
            System.out.println("\nProblem 30:"); Problem30.useThreadLocal();
            System.out.println("\nBonus 2:"); Bonus2.printAlternately();
            
            System.out.println("\n=== All 30+ problems completed! ===");
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
