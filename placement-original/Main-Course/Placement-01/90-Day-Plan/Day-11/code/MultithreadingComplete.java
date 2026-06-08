/**
 * DAY 11: MULTITHREADING COMPLETE GUIDE
 * 
 * Complete reference for Java Multithreading & Concurrency
 * 
 * Topics Covered:
 * 1. Thread Basics & Creation
 * 2. Thread Lifecycle & States
 * 3. Thread Methods (start, run, sleep, join, interrupt)
 * 4. Thread Priority & Daemon Threads
 * 5. ExecutorService & Thread Pools
 * 6. Callable & Future
 * 7. CompletableFuture (Async Programming)
 * 8. Thread Communication (wait, notify, notifyAll)
 * 9. ThreadLocal Variables
 * 10. Interview Questions & Best Practices
 * 
 * Total Sections: 10
 * Lines: 2000+
 */

package day11.multithreading;

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;

public class MultithreadingComplete {

    // ============================================
    // SECTION 1: THREAD BASICS & CREATION
    // ============================================
    
    static class ThreadBasics {
        
        /**
         * What is a Thread?
         * - Lightweight subprocess, smallest unit of processing
         * - Independent path of execution within a program
         * - Multiple threads share same memory space (heap)
         * - Each thread has its own stack
         */
        
        // Method 1: Extending Thread class
        static class MyThread extends Thread {
            private String threadName;
            
            public MyThread(String name) {
                this.threadName = name;
            }
            
            @Override
            public void run() {
                System.out.println(threadName + " is running");
                for (int i = 1; i <= 5; i++) {
                    System.out.println(threadName + " - Count: " + i);
                    try {
                        Thread.sleep(500); // Sleep 500ms
                    } catch (InterruptedException e) {
                        System.out.println(threadName + " interrupted");
                    }
                }
                System.out.println(threadName + " finished");
            }
        }
        
        // Method 2: Implementing Runnable interface (PREFERRED)
        static class MyRunnable implements Runnable {
            private String taskName;
            
            public MyRunnable(String name) {
                this.taskName = name;
            }
            
            @Override
            public void run() {
                System.out.println(taskName + " executing on thread: " 
                    + Thread.currentThread().getName());
                for (int i = 1; i <= 5; i++) {
                    System.out.println(taskName + " - Count: " + i);
                    try {
                        Thread.sleep(500);
                    } catch (InterruptedException e) {
                        System.out.println(taskName + " interrupted");
                    }
                }
                System.out.println(taskName + " completed");
            }
        }
        
        // Method 3: Anonymous Runnable
        static void anonymousRunnable() {
            Thread t = new Thread(new Runnable() {
                @Override
                public void run() {
                    System.out.println("Anonymous runnable executing");
                }
            });
            t.start();
        }
        
        // Method 4: Lambda Expression (Java 8+)
        static void lambdaThread() {
            Thread t = new Thread(() -> {
                System.out.println("Lambda thread executing on: " 
                    + Thread.currentThread().getName());
            });
            t.start();
        }
        
        public static void demonstrateThreadCreation() {
            System.out.println("\n=== Thread Creation Methods ===\n");
            
            // Method 1: Extending Thread
            MyThread thread1 = new MyThread("Thread-1");
            thread1.start(); // Starts new thread, calls run()
            
            // Method 2: Implementing Runnable
            Thread thread2 = new Thread(new MyRunnable("Task-1"));
            thread2.start();
            
            // Method 3: Anonymous Runnable
            anonymousRunnable();
            
            // Method 4: Lambda
            lambdaThread();
            
            // Method 5: Inline Lambda
            new Thread(() -> System.out.println("Inline lambda thread")).start();
        }
    }
    
    // ============================================
    // SECTION 2: THREAD LIFECYCLE & STATES
    // ============================================
    
    static class ThreadLifecycle {
        
        /**
         * Thread States (6 states):
         * 1. NEW - Thread created but not started
         * 2. RUNNABLE - Thread is executing or ready to execute
         * 3. BLOCKED - Waiting for monitor lock
         * 4. WAITING - Waiting indefinitely for another thread
         * 5. TIMED_WAITING - Waiting for specified time
         * 6. TERMINATED - Thread completed execution
         */
        
        static void demonstrateThreadStates() throws InterruptedException {
            System.out.println("\n=== Thread States Demo ===\n");
            
            Thread thread = new Thread(() -> {
                System.out.println("Thread started");
                
                // TIMED_WAITING state
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                
                System.out.println("Thread finishing");
            });
            
            // State 1: NEW
            System.out.println("State after creation: " + thread.getState()); // NEW
            
            // Start thread
            thread.start();
            
            // State 2: RUNNABLE
            System.out.println("State after start: " + thread.getState()); // RUNNABLE
            
            Thread.sleep(500);
            
            // State 3: TIMED_WAITING (thread is sleeping)
            System.out.println("State while sleeping: " + thread.getState()); // TIMED_WAITING
            
            // Wait for thread to complete
            thread.join();
            
            // State 4: TERMINATED
            System.out.println("State after completion: " + thread.getState()); // TERMINATED
        }
        
        // Demonstrate BLOCKED state
        static void demonstrateBlockedState() throws InterruptedException {
            Object lock = new Object();
            
            Thread t1 = new Thread(() -> {
                synchronized (lock) {
                    System.out.println("Thread 1 acquired lock");
                    try {
                        Thread.sleep(2000); // Hold lock for 2 seconds
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            });
            
            Thread t2 = new Thread(() -> {
                synchronized (lock) {
                    System.out.println("Thread 2 acquired lock");
                }
            });
            
            t1.start();
            Thread.sleep(100); // Ensure t1 gets lock first
            t2.start();
            
            Thread.sleep(200);
            System.out.println("Thread 2 state: " + t2.getState()); // BLOCKED
            
            t1.join();
            t2.join();
        }
        
        // Demonstrate WAITING state
        static void demonstrateWaitingState() throws InterruptedException {
            Object lock = new Object();
            
            Thread t1 = new Thread(() -> {
                synchronized (lock) {
                    try {
                        System.out.println("Thread 1 waiting");
                        lock.wait(); // WAITING state
                        System.out.println("Thread 1 resumed");
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            });
            
            t1.start();
            Thread.sleep(500);
            System.out.println("Thread 1 state: " + t1.getState()); // WAITING
            
            synchronized (lock) {
                lock.notify();
            }
            
            t1.join();
        }
    }
    
    // ============================================
    // SECTION 3: THREAD METHODS
    // ============================================
    
    static class ThreadMethods {
        
        // start() vs run()
        static void startVsRun() {
            System.out.println("\n=== start() vs run() ===\n");
            
            Thread t1 = new Thread(() -> {
                System.out.println("t1 running on: " + Thread.currentThread().getName());
            });
            
            Thread t2 = new Thread(() -> {
                System.out.println("t2 running on: " + Thread.currentThread().getName());
            });
            
            t1.start(); // Creates new thread
            // Output: t1 running on: Thread-0
            
            t2.run();   // Executes on current thread (main)
            // Output: t2 running on: main
        }
        
        // sleep() - Pauses current thread
        static void sleepDemo() throws InterruptedException {
            System.out.println("\n=== sleep() Demo ===\n");
            
            System.out.println("Start: " + System.currentTimeMillis());
            Thread.sleep(2000); // Sleep for 2 seconds
            System.out.println("After 2s: " + System.currentTimeMillis());
        }
        
        // join() - Wait for thread to complete
        static void joinDemo() throws InterruptedException {
            System.out.println("\n=== join() Demo ===\n");
            
            Thread t1 = new Thread(() -> {
                for (int i = 1; i <= 5; i++) {
                    System.out.println("Thread 1: " + i);
                    try {
                        Thread.sleep(500);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            });
            
            t1.start();
            
            System.out.println("Waiting for t1 to complete...");
            t1.join(); // Main thread waits here
            System.out.println("t1 completed, main continues");
        }
        
        // join(timeout) - Wait with timeout
        static void joinTimeoutDemo() throws InterruptedException {
            System.out.println("\n=== join(timeout) Demo ===\n");
            
            Thread t1 = new Thread(() -> {
                try {
                    Thread.sleep(5000); // Sleep 5 seconds
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
            
            t1.start();
            
            System.out.println("Waiting max 2 seconds for t1...");
            t1.join(2000); // Wait max 2 seconds
            
            if (t1.isAlive()) {
                System.out.println("t1 still running after timeout");
            } else {
                System.out.println("t1 completed within timeout");
            }
        }
        
        // interrupt() - Interrupt thread
        static void interruptDemo() throws InterruptedException {
            System.out.println("\n=== interrupt() Demo ===\n");
            
            Thread t1 = new Thread(() -> {
                try {
                    System.out.println("Thread sleeping...");
                    Thread.sleep(10000); // Long sleep
                    System.out.println("Thread woke up normally");
                } catch (InterruptedException e) {
                    System.out.println("Thread interrupted!");
                }
            });
            
            t1.start();
            Thread.sleep(2000); // Let it sleep for 2 seconds
            
            System.out.println("Interrupting thread...");
            t1.interrupt(); // Interrupt the sleeping thread
            
            t1.join();
        }
        
        // yield() - Suggest thread to yield CPU
        static void yieldDemo() {
            System.out.println("\n=== yield() Demo ===\n");
            
            Thread t1 = new Thread(() -> {
                for (int i = 0; i < 5; i++) {
                    System.out.println("Thread 1: " + i);
                    Thread.yield(); // Suggest to yield
                }
            });
            
            Thread t2 = new Thread(() -> {
                for (int i = 0; i < 5; i++) {
                    System.out.println("Thread 2: " + i);
                }
            });
            
            t1.start();
            t2.start();
        }
    }
    
    // ============================================
    // SECTION 4: THREAD PRIORITY & DAEMON THREADS
    // ============================================
    
    static class ThreadPriorityAndDaemon {
        
        /**
         * Thread Priority:
         * - MIN_PRIORITY = 1
         * - NORM_PRIORITY = 5 (default)
         * - MAX_PRIORITY = 10
         * 
         * Higher priority threads get more CPU time (hint to scheduler)
         */
        
        static void priorityDemo() throws InterruptedException {
            System.out.println("\n=== Thread Priority Demo ===\n");
            
            Thread lowPriority = new Thread(() -> {
                for (int i = 0; i < 5; i++) {
                    System.out.println("Low Priority: " + i);
                }
            });
            
            Thread highPriority = new Thread(() -> {
                for (int i = 0; i < 5; i++) {
                    System.out.println("High Priority: " + i);
                }
            });
            
            lowPriority.setPriority(Thread.MIN_PRIORITY);  // 1
            highPriority.setPriority(Thread.MAX_PRIORITY); // 10
            
            System.out.println("Low priority: " + lowPriority.getPriority());
            System.out.println("High priority: " + highPriority.getPriority());
            
            lowPriority.start();
            highPriority.start();
            
            lowPriority.join();
            highPriority.join();
        }
        
        /**
         * Daemon Threads:
         * - Background threads (like garbage collector)
         * - JVM exits when only daemon threads remain
         * - Must set before start()
         */
        
        static void daemonDemo() throws InterruptedException {
            System.out.println("\n=== Daemon Thread Demo ===\n");
            
            Thread userThread = new Thread(() -> {
                for (int i = 1; i <= 3; i++) {
                    System.out.println("User thread: " + i);
                    try {
                        Thread.sleep(500);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            });
            
            Thread daemonThread = new Thread(() -> {
                int i = 1;
                while (true) {
                    System.out.println("Daemon thread: " + i++);
                    try {
                        Thread.sleep(500);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            });
            
            daemonThread.setDaemon(true); // Set as daemon
            
            System.out.println("Is daemon: " + daemonThread.isDaemon());
            
            userThread.start();
            daemonThread.start();
            
            userThread.join();
            
            System.out.println("User thread finished, JVM will exit soon");
            // Daemon thread will be terminated automatically
        }
    }
    
    // ============================================
    // SECTION 5: EXECUTOR SERVICE & THREAD POOLS
    // ============================================
    
    static class ExecutorServiceDemo {
        
        /**
         * ExecutorService: High-level thread management
         * - Manages thread pool
         * - Reuses threads
         * - Better than creating threads manually
         */
        
        // Single Thread Executor
        static void singleThreadExecutor() {
            System.out.println("\n=== Single Thread Executor ===\n");
            
            ExecutorService executor = Executors.newSingleThreadExecutor();
            
            for (int i = 1; i <= 5; i++) {
                int taskId = i;
                executor.submit(() -> {
                    System.out.println("Task " + taskId + " on " 
                        + Thread.currentThread().getName());
                });
            }
            
            executor.shutdown(); // No new tasks accepted
            
            try {
                executor.awaitTermination(10, TimeUnit.SECONDS);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        
        // Fixed Thread Pool
        static void fixedThreadPool() {
            System.out.println("\n=== Fixed Thread Pool ===\n");
            
            ExecutorService executor = Executors.newFixedThreadPool(3); // 3 threads
            
            for (int i = 1; i <= 10; i++) {
                int taskId = i;
                executor.submit(() -> {
                    System.out.println("Task " + taskId + " on " 
                        + Thread.currentThread().getName());
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                });
            }
            
            executor.shutdown();
        }
        
        // Cached Thread Pool
        static void cachedThreadPool() {
            System.out.println("\n=== Cached Thread Pool ===\n");
            
            ExecutorService executor = Executors.newCachedThreadPool();
            // Creates new threads as needed, reuses idle threads
            
            for (int i = 1; i <= 5; i++) {
                int taskId = i;
                executor.submit(() -> {
                    System.out.println("Task " + taskId + " on " 
                        + Thread.currentThread().getName());
                });
            }
            
            executor.shutdown();
        }
        
        // Scheduled Thread Pool
        static void scheduledThreadPool() throws InterruptedException {
            System.out.println("\n=== Scheduled Thread Pool ===\n");
            
            ScheduledExecutorService executor = Executors.newScheduledThreadPool(2);
            
            // Schedule task with delay
            executor.schedule(() -> {
                System.out.println("Task executed after 2 seconds");
            }, 2, TimeUnit.SECONDS);
            
            // Schedule task at fixed rate
            executor.scheduleAtFixedRate(() -> {
                System.out.println("Repeating task at: " + System.currentTimeMillis());
            }, 1, 1, TimeUnit.SECONDS); // Initial delay 1s, period 1s
            
            Thread.sleep(5000);
            executor.shutdown();
        }
        
        // Thread Pool Executor (Custom Configuration)
        static void customThreadPoolExecutor() {
            System.out.println("\n=== Custom Thread Pool Executor ===\n");
            
            ThreadPoolExecutor executor = new ThreadPoolExecutor(
                2,              // corePoolSize
                4,              // maximumPoolSize
                60,             // keepAliveTime
                TimeUnit.SECONDS,
                new LinkedBlockingQueue<>(10) // workQueue
            );
            
            for (int i = 1; i <= 15; i++) {
                int taskId = i;
                executor.submit(() -> {
                    System.out.println("Task " + taskId + " on " 
                        + Thread.currentThread().getName());
                    try {
                        Thread.sleep(2000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                });
            }
            
            System.out.println("Active threads: " + executor.getActiveCount());
            System.out.println("Pool size: " + executor.getPoolSize());
            System.out.println("Queue size: " + executor.getQueue().size());
            
            executor.shutdown();
        }
    }
    
    // ============================================
    // SECTION 6: CALLABLE & FUTURE
    // ============================================
    
    static class CallableAndFuture {
        
        /**
         * Callable vs Runnable:
         * - Callable can return a result
         * - Callable can throw checked exceptions
         * - Future holds result of Callable
         */
        
        // Basic Callable example
        static void callableDemo() throws Exception {
            System.out.println("\n=== Callable Demo ===\n");
            
            Callable<Integer> task = () -> {
                System.out.println("Calculating...");
                Thread.sleep(2000);
                return 42;
            };
            
            ExecutorService executor = Executors.newSingleThreadExecutor();
            
            Future<Integer> future = executor.submit(task);
            
            System.out.println("Task submitted");
            System.out.println("Is done? " + future.isDone());
            
            // Get result (blocks until complete)
            Integer result = future.get();
            System.out.println("Result: " + result);
            System.out.println("Is done? " + future.isDone());
            
            executor.shutdown();
        }
        
        // Multiple Callables
        static void multipleCallables() throws Exception {
            System.out.println("\n=== Multiple Callables ===\n");
            
            ExecutorService executor = Executors.newFixedThreadPool(3);
            
            List<Callable<String>> tasks = new ArrayList<>();
            
            for (int i = 1; i <= 5; i++) {
                int taskId = i;
                tasks.add(() -> {
                    Thread.sleep(taskId * 1000);
                    return "Task " + taskId + " completed";
                });
            }
            
            List<Future<String>> futures = executor.invokeAll(tasks);
            
            for (Future<String> future : futures) {
                System.out.println(future.get());
            }
            
            executor.shutdown();
        }
        
        // Future with timeout
        static void futureWithTimeout() throws InterruptedException {
            System.out.println("\n=== Future with Timeout ===\n");
            
            ExecutorService executor = Executors.newSingleThreadExecutor();
            
            Future<String> future = executor.submit(() -> {
                Thread.sleep(5000); // Long task
                return "Task completed";
            });
            
            try {
                String result = future.get(2, TimeUnit.SECONDS); // Wait max 2s
                System.out.println(result);
            } catch (TimeoutException e) {
                System.out.println("Task timed out!");
                future.cancel(true); // Cancel task
            } catch (Exception e) {
                e.printStackTrace();
            }
            
            executor.shutdown();
        }
        
        // Cancel Future
        static void cancelFuture() throws InterruptedException {
            System.out.println("\n=== Cancel Future ===\n");
            
            ExecutorService executor = Executors.newSingleThreadExecutor();
            
            Future<String> future = executor.submit(() -> {
                for (int i = 1; i <= 10; i++) {
                    if (Thread.currentThread().isInterrupted()) {
                        System.out.println("Task interrupted!");
                        return "Task cancelled";
                    }
                    System.out.println("Working: " + i);
                    Thread.sleep(500);
                }
                return "Task completed";
            });
            
            Thread.sleep(2000);
            
            System.out.println("Cancelling task...");
            boolean cancelled = future.cancel(true); // true = interrupt
            
            System.out.println("Cancelled: " + cancelled);
            System.out.println("Is cancelled: " + future.isCancelled());
            
            executor.shutdown();
        }
    }
    
    // ============================================
    // SECTION 7: COMPLETABLE FUTURE (ASYNC PROGRAMMING)
    // ============================================
    
    static class CompletableFutureDemo {
        
        /**
         * CompletableFuture: Advanced async programming
         * - Non-blocking
         * - Composable
         * - Exception handling
         * - Combines multiple async operations
         */
        
        // Basic CompletableFuture
        static void basicCompletableFuture() throws Exception {
            System.out.println("\n=== Basic CompletableFuture ===\n");
            
            CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
                System.out.println("Task running on: " + Thread.currentThread().getName());
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                return "Hello";
            });
            
            System.out.println("Main thread continues...");
            
            String result = future.get(); // Blocking
            System.out.println("Result: " + result);
        }
        
        // Chaining with thenApply
        static void thenApplyDemo() throws Exception {
            System.out.println("\n=== thenApply Demo ===\n");
            
            CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> {
                return 5;
            }).thenApply(num -> {
                return num * 2;
            }).thenApply(num -> {
                return num + 10;
            });
            
            System.out.println("Result: " + future.get()); // 20
        }
        
        // thenAccept (consume result)
        static void thenAcceptDemo() throws Exception {
            System.out.println("\n=== thenAccept Demo ===\n");
            
            CompletableFuture<Void> future = CompletableFuture.supplyAsync(() -> {
                return "Hello World";
            }).thenAccept(result -> {
                System.out.println("Result: " + result);
            });
            
            future.get();
        }
        
        // thenRun (no input, no output)
        static void thenRunDemo() throws Exception {
            System.out.println("\n=== thenRun Demo ===\n");
            
            CompletableFuture<Void> future = CompletableFuture.supplyAsync(() -> {
                return "Task completed";
            }).thenRun(() -> {
                System.out.println("Cleanup done");
            });
            
            future.get();
        }
        
        // thenCompose (flatten nested futures)
        static void thenComposeDemo() throws Exception {
            System.out.println("\n=== thenCompose Demo ===\n");
            
            CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> {
                return 5;
            }).thenCompose(num -> CompletableFuture.supplyAsync(() -> {
                return num * 2;
            }));
            
            System.out.println("Result: " + future.get()); // 10
        }
        
        // thenCombine (combine two futures)
        static void thenCombineDemo() throws Exception {
            System.out.println("\n=== thenCombine Demo ===\n");
            
            CompletableFuture<Integer> future1 = CompletableFuture.supplyAsync(() -> {
                return 10;
            });
            
            CompletableFuture<Integer> future2 = CompletableFuture.supplyAsync(() -> {
                return 20;
            });
            
            CompletableFuture<Integer> combined = future1.thenCombine(future2, (a, b) -> {
                return a + b;
            });
            
            System.out.println("Result: " + combined.get()); // 30
        }
        
        // allOf (wait for all)
        static void allOfDemo() throws Exception {
            System.out.println("\n=== allOf Demo ===\n");
            
            CompletableFuture<String> f1 = CompletableFuture.supplyAsync(() -> {
                try { Thread.sleep(2000); } catch (Exception e) {}
                return "Task 1";
            });
            
            CompletableFuture<String> f2 = CompletableFuture.supplyAsync(() -> {
                try { Thread.sleep(1000); } catch (Exception e) {}
                return "Task 2";
            });
            
            CompletableFuture<String> f3 = CompletableFuture.supplyAsync(() -> {
                try { Thread.sleep(1500); } catch (Exception e) {}
                return "Task 3";
            });
            
            CompletableFuture<Void> allOf = CompletableFuture.allOf(f1, f2, f3);
            
            allOf.get(); // Wait for all
            
            System.out.println("All tasks completed");
            System.out.println(f1.get());
            System.out.println(f2.get());
            System.out.println(f3.get());
        }
        
        // anyOf (wait for any)
        static void anyOfDemo() throws Exception {
            System.out.println("\n=== anyOf Demo ===\n");
            
            CompletableFuture<String> f1 = CompletableFuture.supplyAsync(() -> {
                try { Thread.sleep(2000); } catch (Exception e) {}
                return "Task 1";
            });
            
            CompletableFuture<String> f2 = CompletableFuture.supplyAsync(() -> {
                try { Thread.sleep(1000); } catch (Exception e) {}
                return "Task 2";
            });
            
            CompletableFuture<Object> anyOf = CompletableFuture.anyOf(f1, f2);
            
            System.out.println("First completed: " + anyOf.get()); // Task 2
        }
        
        // Exception handling
        static void exceptionHandling() throws Exception {
            System.out.println("\n=== Exception Handling ===\n");
            
            CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
                if (Math.random() > 0.5) {
                    throw new RuntimeException("Error occurred!");
                }
                return "Success";
            }).exceptionally(ex -> {
                System.out.println("Exception: " + ex.getMessage());
                return "Default value";
            });
            
            System.out.println("Result: " + future.get());
        }
    }
    
    // ============================================
    // SECTION 8: THREAD COMMUNICATION (wait, notify, notifyAll)
    // ============================================
    
    static class ThreadCommunication {
        
        /**
         * wait(), notify(), notifyAll():
         * - Used for inter-thread communication
         * - Must be called within synchronized block
         * - wait() releases lock
         * - notify() wakes one waiting thread
         * - notifyAll() wakes all waiting threads
         */
        
        // Producer-Consumer using wait/notify
        static class ProducerConsumer {
            private Queue<Integer> queue = new LinkedList<>();
            private int capacity = 5;
            
            public void produce() throws InterruptedException {
                int value = 0;
                while (true) {
                    synchronized (this) {
                        while (queue.size() == capacity) {
                            System.out.println("Queue full, producer waiting...");
                            wait(); // Release lock and wait
                        }
                        
                        System.out.println("Producing: " + value);
                        queue.add(value++);
                        
                        notify(); // Wake up consumer
                        Thread.sleep(1000);
                    }
                }
            }
            
            public void consume() throws InterruptedException {
                while (true) {
                    synchronized (this) {
                        while (queue.isEmpty()) {
                            System.out.println("Queue empty, consumer waiting...");
                            wait(); // Release lock and wait
                        }
                        
                        int value = queue.poll();
                        System.out.println("Consuming: " + value);
                        
                        notify(); // Wake up producer
                        Thread.sleep(2000);
                    }
                }
            }
        }
        
        static void demonstrateProducerConsumer() {
            System.out.println("\n=== Producer-Consumer Demo ===\n");
            
            ProducerConsumer pc = new ProducerConsumer();
            
            Thread producer = new Thread(() -> {
                try {
                    pc.produce();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
            
            Thread consumer = new Thread(() -> {
                try {
                    pc.consume();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
            
            producer.start();
            consumer.start();
        }
    }
    
    // ============================================
    // SECTION 9: THREAD LOCAL VARIABLES
    // ============================================
    
    static class ThreadLocalDemo {
        
        /**
         * ThreadLocal: Each thread has its own copy
         * - Thread-safe without synchronization
         * - Common use: storing user session, transaction ID
         */
        
        private static ThreadLocal<Integer> threadLocal = ThreadLocal.withInitial(() -> 1);
        
        static void demonstrateThreadLocal() throws InterruptedException {
            System.out.println("\n=== ThreadLocal Demo ===\n");
            
            Thread t1 = new Thread(() -> {
                threadLocal.set(100);
                System.out.println("Thread 1 initial: " + threadLocal.get());
                
                try { Thread.sleep(1000); } catch (Exception e) {}
                
                System.out.println("Thread 1 after sleep: " + threadLocal.get());
            });
            
            Thread t2 = new Thread(() -> {
                threadLocal.set(200);
                System.out.println("Thread 2 initial: " + threadLocal.get());
                
                try { Thread.sleep(1000); } catch (Exception e) {}
                
                System.out.println("Thread 2 after sleep: " + threadLocal.get());
            });
            
            t1.start();
            t2.start();
            
            t1.join();
            t2.join();
            
            // Each thread maintains its own value
        }
        
        // InheritableThreadLocal: Child threads inherit parent's value
        private static InheritableThreadLocal<String> inheritableThreadLocal = 
            new InheritableThreadLocal<>();
        
        static void demonstrateInheritableThreadLocal() throws InterruptedException {
            System.out.println("\n=== InheritableThreadLocal Demo ===\n");
            
            inheritableThreadLocal.set("Parent value");
            
            System.out.println("Main thread: " + inheritableThreadLocal.get());
            
            Thread child = new Thread(() -> {
                System.out.println("Child thread: " + inheritableThreadLocal.get());
                inheritableThreadLocal.set("Child value");
                System.out.println("Child modified: " + inheritableThreadLocal.get());
            });
            
            child.start();
            child.join();
            
            System.out.println("Main after child: " + inheritableThreadLocal.get());
        }
    }
    
    // ============================================
    // SECTION 10: INTERVIEW QUESTIONS & BEST PRACTICES
    // ============================================
    
    static class InterviewQuestions {
        
        /**
         * TOP 20 MULTITHREADING INTERVIEW QUESTIONS
         */
        
        public static void displayQuestions() {
            System.out.println("\n=== Interview Questions ===\n");
            
            System.out.println("Q1: What is a thread?");
            System.out.println("A: A thread is a lightweight subprocess, the smallest unit of processing. " +
                "It's an independent path of execution within a program.\n");
            
            System.out.println("Q2: Difference between process and thread?");
            System.out.println("A: Process has separate memory space, thread shares memory. " +
                "Process is heavyweight, thread is lightweight. " +
                "Inter-process communication is expensive, inter-thread is cheap.\n");
            
            System.out.println("Q3: What are the ways to create a thread?");
            System.out.println("A: 1) Extend Thread class, 2) Implement Runnable interface (preferred), " +
                "3) Implement Callable interface, 4) Use ExecutorService\n");
            
            System.out.println("Q4: Why Runnable is preferred over Thread?");
            System.out.println("A: 1) Multiple inheritance not allowed for Thread, " +
                "2) Runnable separates task from execution, " +
                "3) Better design (composition over inheritance)\n");
            
            System.out.println("Q5: Difference between start() and run()?");
            System.out.println("A: start() creates new thread and calls run(). " +
                "Calling run() directly executes on current thread (no multithreading).\n");
            
            System.out.println("Q6: What is thread lifecycle?");
            System.out.println("A: NEW → RUNNABLE → (BLOCKED/WAITING/TIMED_WAITING) → TERMINATED\n");
            
            System.out.println("Q7: What is thread priority?");
            System.out.println("A: Hint to scheduler about thread importance. " +
                "Range: 1 (MIN) to 10 (MAX), default 5 (NORM). Not guaranteed.\n");
            
            System.out.println("Q8: What is daemon thread?");
            System.out.println("A: Background thread (e.g., GC). JVM exits when only daemon threads remain. " +
                "Set with setDaemon(true) before start().\n");
            
            System.out.println("Q9: What is join()?");
            System.out.println("A: Makes current thread wait until the thread on which join() is called completes.\n");
            
            System.out.println("Q10: What is sleep()?");
            System.out.println("A: Pauses current thread for specified time. " +
                "Doesn't release lock (unlike wait()).\n");
            
            System.out.println("Q11: Difference between sleep() and wait()?");
            System.out.println("A: sleep() doesn't release lock, wait() releases lock. " +
                "sleep() in Thread class, wait() in Object class. " +
                "sleep() for time delay, wait() for thread communication.\n");
            
            System.out.println("Q12: What is interrupt()?");
            System.out.println("A: Sets interrupt flag. If thread is sleeping/waiting, " +
                "throws InterruptedException.\n");
            
            System.out.println("Q13: What is ExecutorService?");
            System.out.println("A: High-level thread management API. Manages thread pool, " +
                "reuses threads, better than manual thread creation.\n");
            
            System.out.println("Q14: Difference between Callable and Runnable?");
            System.out.println("A: Callable returns value and can throw checked exceptions. " +
                "Runnable doesn't return value.\n");
            
            System.out.println("Q15: What is Future?");
            System.out.println("A: Represents result of asynchronous computation. " +
                "Can check if complete, cancel, get result.\n");
            
            System.out.println("Q16: What is CompletableFuture?");
            System.out.println("A: Advanced async programming. Non-blocking, composable, " +
                "exception handling, combines multiple async operations.\n");
            
            System.out.println("Q17: What is ThreadLocal?");
            System.out.println("A: Each thread has its own copy of variable. Thread-safe without synchronization.\n");
            
            System.out.println("Q18: When to use multithreading?");
            System.out.println("A: 1) Parallel processing, 2) Async I/O, 3) UI responsiveness, " +
                "4) Background tasks, 5) Server handling multiple clients\n");
            
            System.out.println("Q19: What are thread pool benefits?");
            System.out.println("A: 1) Reuses threads (less overhead), 2) Controls resource usage, " +
                "3) Better performance, 4) Easier management\n");
            
            System.out.println("Q20: Best practices for multithreading?");
            System.out.println("A: 1) Use ExecutorService, 2) Avoid shared mutable state, " +
                "3) Use concurrent collections, 4) Minimize synchronization scope, " +
                "5) Handle InterruptedException properly\n");
        }
    }
    
    // ============================================
    // MAIN METHOD - DEMONSTRATION
    // ============================================
    
    public static void main(String[] args) {
        try {
            // Section 1: Thread Creation
            ThreadBasics.demonstrateThreadCreation();
            
            // Section 2: Thread Lifecycle
            ThreadLifecycle.demonstrateThreadStates();
            ThreadLifecycle.demonstrateBlockedState();
            ThreadLifecycle.demonstrateWaitingState();
            
            // Section 3: Thread Methods
            ThreadMethods.startVsRun();
            ThreadMethods.sleepDemo();
            ThreadMethods.joinDemo();
            ThreadMethods.joinTimeoutDemo();
            ThreadMethods.interruptDemo();
            ThreadMethods.yieldDemo();
            
            // Section 4: Priority & Daemon
            ThreadPriorityAndDaemon.priorityDemo();
            ThreadPriorityAndDaemon.daemonDemo();
            
            // Section 5: ExecutorService
            ExecutorServiceDemo.singleThreadExecutor();
            ExecutorServiceDemo.fixedThreadPool();
            ExecutorServiceDemo.cachedThreadPool();
            ExecutorServiceDemo.scheduledThreadPool();
            ExecutorServiceDemo.customThreadPoolExecutor();
            
            // Section 6: Callable & Future
            CallableAndFuture.callableDemo();
            CallableAndFuture.multipleCallables();
            CallableAndFuture.futureWithTimeout();
            CallableAndFuture.cancelFuture();
            
            // Section 7: CompletableFuture
            CompletableFutureDemo.basicCompletableFuture();
            CompletableFutureDemo.thenApplyDemo();
            CompletableFutureDemo.thenAcceptDemo();
            CompletableFutureDemo.thenRunDemo();
            CompletableFutureDemo.thenComposeDemo();
            CompletableFutureDemo.thenCombineDemo();
            CompletableFutureDemo.allOfDemo();
            CompletableFutureDemo.anyOfDemo();
            CompletableFutureDemo.exceptionHandling();
            
            // Section 8: Thread Communication
            // ThreadCommunication.demonstrateProducerConsumer(); // Runs infinitely
            
            // Section 9: ThreadLocal
            ThreadLocalDemo.demonstrateThreadLocal();
            ThreadLocalDemo.demonstrateInheritableThreadLocal();
            
            // Section 10: Interview Questions
            InterviewQuestions.displayQuestions();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
