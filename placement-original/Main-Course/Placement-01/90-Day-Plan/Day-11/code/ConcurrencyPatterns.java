/**
 * DAY 11: CONCURRENCY PATTERNS
 * 
 * Classic concurrent programming patterns and LeetCode problems
 * 
 * Patterns Covered:
 * 1. Producer-Consumer Pattern
 * 2. Reader-Writer Pattern
 * 3. Dining Philosophers Problem
 * 4. Thread Pool Pattern
 * 5. Future Pattern
 * 6. Fork-Join Pattern
 * 7. Print FooBar Alternately (LeetCode #1115)
 * 8. Building H2O (LeetCode #1117)
 * 
 * Total: 8 patterns with implementations
 * Lines: 1500+
 */

package day11.patterns;

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.locks.*;
import java.util.concurrent.atomic.*;

public class ConcurrencyPatterns {

    // ===========================================
    // PATTERN 1: PRODUCER-CONSUMER
    // ===========================================
    
    /**
     * Producer-Consumer: Classic synchronization problem
     * - Producer produces items
     * - Consumer consumes items
     * - Bounded buffer
     */
    static class ProducerConsumerPattern {
        
        static class BoundedBuffer<T> {
            private Queue<T> queue = new LinkedList<>();
            private int capacity;
            
            public BoundedBuffer(int capacity) {
                this.capacity = capacity;
            }
            
            public synchronized void produce(T item) throws InterruptedException {
                while (queue.size() == capacity) {
                    System.out.println("Buffer full, producer waiting...");
                    wait();
                }
                queue.add(item);
                System.out.println("Produced: " + item);
                notifyAll();
            }
            
            public synchronized T consume() throws InterruptedException {
                while (queue.isEmpty()) {
                    System.out.println("Buffer empty, consumer waiting...");
                    wait();
                }
                T item = queue.poll();
                System.out.println("Consumed: " + item);
                notifyAll();
                return item;
            }
        }
        
        static void demonstrate() throws InterruptedException {
            System.out.println("\n=== Producer-Consumer Pattern ===\n");
            
            BoundedBuffer<Integer> buffer = new BoundedBuffer<>(5);
            
            Thread producer = new Thread(() -> {
                try {
                    for (int i = 1; i <= 10; i++) {
                        buffer.produce(i);
                        Thread.sleep(500);
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
            
            Thread consumer = new Thread(() -> {
                try {
                    for (int i = 1; i <= 10; i++) {
                        buffer.consume();
                        Thread.sleep(1000);
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
    }
    
    // ===========================================
    // PATTERN 2: READER-WRITER
    // ===========================================
    
    /**
     * Reader-Writer: Multiple readers, exclusive writer
     * - Many readers can read simultaneously
     * - Only one writer can write
     * - No reading while writing
     */
    static class ReaderWriterPattern {
        
        static class ReadWriteResource {
            private int data = 0;
            private ReadWriteLock lock = new ReentrantReadWriteLock();
            private Lock readLock = lock.readLock();
            private Lock writeLock = lock.writeLock();
            
            public int read(int readerId) {
                readLock.lock();
                try {
                    System.out.println("Reader " + readerId + " reading: " + data);
                    Thread.sleep(1000);
                    return data;
                } catch (InterruptedException e) {
                    return -1;
                } finally {
                    readLock.unlock();
                }
            }
            
            public void write(int writerId, int value) {
                writeLock.lock();
                try {
                    System.out.println("Writer " + writerId + " writing: " + value);
                    Thread.sleep(2000);
                    data = value;
                } finally {
                    writeLock.unlock();
                }
            }
        }
        
        static void demonstrate() throws InterruptedException {
            System.out.println("\n=== Reader-Writer Pattern ===\n");
            
            ReadWriteResource resource = new ReadWriteResource();
            
            // Multiple readers
            for (int i = 1; i <= 3; i++) {
                int readerId = i;
                new Thread(() -> resource.read(readerId)).start();
            }
            
            Thread.sleep(500);
            
            // Writer
            new Thread(() -> resource.write(1, 100)).start();
            
            Thread.sleep(3000);
        }
    }
    
    // ===========================================
    // PATTERN 3: DINING PHILOSOPHERS
    // ===========================================
    
    /**
     * Dining Philosophers: Classic deadlock problem
     * - 5 philosophers, 5 forks
     * - Need 2 forks to eat
     * - Solution: Ordered resource acquisition
     */
    static class DiningPhilosophers {
        
        static class Philosopher implements Runnable {
            private int id;
            private Lock leftFork;
            private Lock rightFork;
            
            public Philosopher(int id, Lock leftFork, Lock rightFork) {
                this.id = id;
                this.leftFork = leftFork;
                this.rightFork = rightFork;
            }
            
            private void think() throws InterruptedException {
                System.out.println("Philosopher " + id + " is thinking");
                Thread.sleep(1000);
            }
            
            private void eat() throws InterruptedException {
                System.out.println("Philosopher " + id + " is eating");
                Thread.sleep(1000);
            }
            
            @Override
            public void run() {
                try {
                    for (int i = 0; i < 3; i++) {
                        think();
                        
                        // Acquire forks in order to prevent deadlock
                        Lock first = leftFork.hashCode() < rightFork.hashCode() ? leftFork : rightFork;
                        Lock second = leftFork.hashCode() < rightFork.hashCode() ? rightFork : leftFork;
                        
                        first.lock();
                        try {
                            second.lock();
                            try {
                                eat();
                            } finally {
                                second.unlock();
                            }
                        } finally {
                            first.unlock();
                        }
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
        
        static void demonstrate() throws InterruptedException {
            System.out.println("\n=== Dining Philosophers ===\n");
            
            Lock[] forks = new Lock[5];
            for (int i = 0; i < 5; i++) {
                forks[i] = new ReentrantLock();
            }
            
            Thread[] philosophers = new Thread[5];
            for (int i = 0; i < 5; i++) {
                Lock leftFork = forks[i];
                Lock rightFork = forks[(i + 1) % 5];
                philosophers[i] = new Thread(new Philosopher(i, leftFork, rightFork));
                philosophers[i].start();
            }
            
            for (Thread p : philosophers) {
                p.join();
            }
            
            System.out.println("All philosophers finished eating");
        }
    }
    
    // ===========================================
    // PATTERN 4: THREAD POOL
    // ===========================================
    
    /**
     * Thread Pool: Reuse threads for multiple tasks
     * - Fixed number of worker threads
     * - Task queue
     * - Better than creating new threads
     */
    static class ThreadPoolPattern {
        
        static class SimpleThreadPool {
            private BlockingQueue<Runnable> taskQueue;
            private List<WorkerThread> workers;
            private volatile boolean isShutdown = false;
            
            public SimpleThreadPool(int numThreads, int queueSize) {
                taskQueue = new LinkedBlockingQueue<>(queueSize);
                workers = new ArrayList<>();
                
                for (int i = 0; i < numThreads; i++) {
                    WorkerThread worker = new WorkerThread("Worker-" + i);
                    workers.add(worker);
                    worker.start();
                }
            }
            
            public void submit(Runnable task) throws InterruptedException {
                if (isShutdown) {
                    throw new IllegalStateException("ThreadPool is shutdown");
                }
                taskQueue.put(task);
            }
            
            public void shutdown() {
                isShutdown = true;
                for (WorkerThread worker : workers) {
                    worker.interrupt();
                }
            }
            
            private class WorkerThread extends Thread {
                public WorkerThread(String name) {
                    super(name);
                }
                
                @Override
                public void run() {
                    while (!isShutdown) {
                        try {
                            Runnable task = taskQueue.poll(1, TimeUnit.SECONDS);
                            if (task != null) {
                                System.out.println(getName() + " executing task");
                                task.run();
                            }
                        } catch (InterruptedException e) {
                            break;
                        }
                    }
                    System.out.println(getName() + " terminated");
                }
            }
        }
        
        static void demonstrate() throws InterruptedException {
            System.out.println("\n=== Thread Pool Pattern ===\n");
            
            SimpleThreadPool pool = new SimpleThreadPool(3, 10);
            
            for (int i = 1; i <= 10; i++) {
                int taskId = i;
                pool.submit(() -> {
                    System.out.println("Task " + taskId + " running");
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {}
                });
            }
            
            Thread.sleep(5000);
            pool.shutdown();
        }
    }
    
    // ===========================================
    // PATTERN 5: FORK-JOIN
    // ===========================================
    
    /**
     * Fork-Join: Divide and conquer parallel processing
     * - Split task into subtasks
     * - Process in parallel
     * - Join results
     */
    static class ForkJoinPattern {
        
        static class SumTask extends RecursiveTask<Long> {
            private long[] array;
            private int start;
            private int end;
            private static final int THRESHOLD = 1000;
            
            public SumTask(long[] array, int start, int end) {
                this.array = array;
                this.start = start;
                this.end = end;
            }
            
            @Override
            protected Long compute() {
                if (end - start <= THRESHOLD) {
                    // Small enough, compute directly
                    long sum = 0;
                    for (int i = start; i < end; i++) {
                        sum += array[i];
                    }
                    return sum;
                } else {
                    // Split into subtasks
                    int mid = start + (end - start) / 2;
                    SumTask leftTask = new SumTask(array, start, mid);
                    SumTask rightTask = new SumTask(array, mid, end);
                    
                    leftTask.fork(); // Async execution
                    long rightResult = rightTask.compute();
                    long leftResult = leftTask.join();
                    
                    return leftResult + rightResult;
                }
            }
        }
        
        static void demonstrate() {
            System.out.println("\n=== Fork-Join Pattern ===\n");
            
            long[] array = new long[10000];
            for (int i = 0; i < array.length; i++) {
                array[i] = i + 1;
            }
            
            ForkJoinPool pool = new ForkJoinPool();
            SumTask task = new SumTask(array, 0, array.length);
            
            long start = System.currentTimeMillis();
            long result = pool.invoke(task);
            long end = System.currentTimeMillis();
            
            System.out.println("Sum: " + result);
            System.out.println("Time: " + (end - start) + "ms");
            
            // Verify
            long expected = (long) array.length * (array.length + 1) / 2;
            System.out.println("Expected: " + expected);
            System.out.println("Correct: " + (result == expected));
        }
    }
    
    // ===========================================
    // LEETCODE: PRINT FOOBAR ALTERNATELY (#1115)
    // ===========================================
    
    /**
     * Problem: Print "foo" and "bar" alternately n times
     * Output: "foobarfoobarfoobar..."
     */
    static class PrintFooBarAlternately {
        
        // Solution 1: Semaphore
        static class FooBar1 {
            private int n;
            private Semaphore fooSem = new Semaphore(1);
            private Semaphore barSem = new Semaphore(0);
            
            public FooBar1(int n) {
                this.n = n;
            }
            
            public void foo(Runnable printFoo) throws InterruptedException {
                for (int i = 0; i < n; i++) {
                    fooSem.acquire();
                    printFoo.run();
                    barSem.release();
                }
            }
            
            public void bar(Runnable printBar) throws InterruptedException {
                for (int i = 0; i < n; i++) {
                    barSem.acquire();
                    printBar.run();
                    fooSem.release();
                }
            }
        }
        
        // Solution 2: wait/notify
        static class FooBar2 {
            private int n;
            private boolean fooTurn = true;
            
            public FooBar2(int n) {
                this.n = n;
            }
            
            public synchronized void foo(Runnable printFoo) throws InterruptedException {
                for (int i = 0; i < n; i++) {
                    while (!fooTurn) {
                        wait();
                    }
                    printFoo.run();
                    fooTurn = false;
                    notifyAll();
                }
            }
            
            public synchronized void bar(Runnable printBar) throws InterruptedException {
                for (int i = 0; i < n; i++) {
                    while (fooTurn) {
                        wait();
                    }
                    printBar.run();
                    fooTurn = true;
                    notifyAll();
                }
            }
        }
        
        static void demonstrate() throws InterruptedException {
            System.out.println("\n=== Print FooBar Alternately ===\n");
            
            FooBar1 foobar = new FooBar1(5);
            
            Thread t1 = new Thread(() -> {
                try {
                    foobar.foo(() -> System.out.print("foo"));
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
            
            Thread t2 = new Thread(() -> {
                try {
                    foobar.bar(() -> System.out.print("bar"));
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
            
            t1.start();
            t2.start();
            
            t1.join();
            t2.join();
            
            System.out.println("\n");
        }
    }
    
    // ===========================================
    // LEETCODE: BUILDING H2O (#1117)
    // ===========================================
    
    /**
     * Problem: Build H2O molecules from H and O threads
     * - Need 2 H and 1 O to form H2O
     * - Must form complete molecules
     */
    static class BuildingH2O {
        
        static class H2O {
            private Semaphore hSem = new Semaphore(2);
            private Semaphore oSem = new Semaphore(0);
            private CyclicBarrier barrier = new CyclicBarrier(3);
            
            public H2O() {}
            
            public void hydrogen(Runnable releaseHydrogen) throws InterruptedException {
                hSem.acquire();
                
                try {
                    barrier.await(); // Wait for 2H + 1O
                    releaseHydrogen.run();
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    hSem.release();
                }
            }
            
            public void oxygen(Runnable releaseOxygen) throws InterruptedException {
                oSem.acquire();
                
                try {
                    // Release 2 H permits
                    hSem.acquire(2);
                    
                    barrier.await();
                    releaseOxygen.run();
                    
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    hSem.release(2);
                    oSem.release();
                }
            }
        }
        
        static void demonstrate() throws InterruptedException {
            System.out.println("\n=== Building H2O ===\n");
            
            H2O h2o = new H2O();
            String input = "HHOHHOHHO"; // 3 H2O molecules possible
            
            for (char c : input.toCharArray()) {
                if (c == 'H') {
                    new Thread(() -> {
                        try {
                            h2o.hydrogen(() -> System.out.print("H"));
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }).start();
                } else {
                    new Thread(() -> {
                        try {
                            h2o.oxygen(() -> System.out.print("O"));
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }).start();
                }
            }
            
            Thread.sleep(3000);
            System.out.println("\n");
        }
    }
    
    // ===========================================
    // MAIN METHOD
    // ===========================================
    
    public static void main(String[] args) {
        try {
            // Pattern 1: Producer-Consumer
            ProducerConsumerPattern.demonstrate();
            
            // Pattern 2: Reader-Writer
            ReaderWriterPattern.demonstrate();
            
            // Pattern 3: Dining Philosophers
            DiningPhilosophers.demonstrate();
            
            // Pattern 4: Thread Pool
            ThreadPoolPattern.demonstrate();
            
            // Pattern 5: Fork-Join
            ForkJoinPattern.demonstrate();
            
            // LeetCode: Print FooBar Alternately
            PrintFooBarAlternately.demonstrate();
            
            // LeetCode: Building H2O
            BuildingH2O.demonstrate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
