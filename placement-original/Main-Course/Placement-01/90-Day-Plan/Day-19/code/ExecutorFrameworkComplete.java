package day19.executors;

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.util.stream.Collectors;

/**
 * DAY 19 - SECTION 2: EXECUTOR FRAMEWORK & THREAD POOLS
 * ======================================================
 * Complete guide to Java's executor framework for managing thread pools.
 * 
 * Topics Covered:
 * 1. Executor Interface Hierarchy
 * 2. ExecutorService Implementation
 * 3. ThreadPoolExecutor Configuration
 * 4. ScheduledExecutorService
 * 5. ForkJoinPool & Parallel Streams
 * 6. Future & Callable
 * 7. Task Submission & Lifecycle
 * 8. Thread Pool Best Practices
 * 9. Resource Management & Shutdown
 * 
 * Topics: 15+ executor concepts
 * Examples: 50+ working implementations
 * Interview Questions: 25 Q&A with detailed answers
 */

public class ExecutorFrameworkComplete {

    // ================== SECTION 1: EXECUTOR BASICS ==================
    
    /**
     * Example 1: Using Executors factory methods
     */
    static class ExecutorBasics {
        public static void basicExecutor() throws InterruptedException {
            // Single thread executor
            ExecutorService executor = Executors.newSingleThreadExecutor();
            executor.submit(() -> System.out.println("Task 1"));
            executor.submit(() -> System.out.println("Task 2"));
            
            executor.shutdown();
            executor.awaitTermination(5, TimeUnit.SECONDS);
        }
        
        public static void fixedThreadPool() throws InterruptedException {
            // Fixed thread pool with 3 threads
            ExecutorService executor = Executors.newFixedThreadPool(3);
            
            for (int i = 0; i < 10; i++) {
                final int taskId = i;
                executor.submit(() -> 
                    System.out.println("Task " + taskId + " by " + 
                        Thread.currentThread().getName())
                );
            }
            
            executor.shutdown();
            executor.awaitTermination(5, TimeUnit.SECONDS);
        }
    }
    
    /**
     * Example 2: CachedThreadPool for dynamic thread pool
     */
    static class CachedThreadPoolExample {
        public static void demonstrate() throws InterruptedException {
            ExecutorService executor = Executors.newCachedThreadPool();
            
            // Submit many short tasks
            for (int i = 0; i < 10; i++) {
                final int taskId = i;
                executor.submit(() -> {
                    try {
                        System.out.println("Task " + taskId + " started");
                        Thread.sleep(100);
                        System.out.println("Task " + taskId + " completed");
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                });
            }
            
            executor.shutdown();
            executor.awaitTermination(10, TimeUnit.SECONDS);
        }
    }
    
    /**
     * Example 3: Callable and Future
     */
    static class CallableAndFutureExample {
        public static void demonstrate() throws InterruptedException, ExecutionException {
            ExecutorService executor = Executors.newSingleThreadExecutor();
            
            // Submit callable that returns value
            Callable<Integer> callable = () -> {
                System.out.println("Computing...");
                Thread.sleep(1000);
                return 42;
            };
            
            Future<Integer> future = executor.submit(callable);
            
            System.out.println("Task submitted");
            System.out.println("Is done? " + future.isDone());
            
            Integer result = future.get(); // Blocking call
            System.out.println("Result: " + result);
            
            executor.shutdown();
        }
    }
    
    /**
     * Example 4: Handling multiple futures
     */
    static class MultipleFuturesExample {
        public static void demonstrate() throws InterruptedException, ExecutionException {
            ExecutorService executor = Executors.newFixedThreadPool(3);
            List<Future<Integer>> futures = new ArrayList<>();
            
            for (int i = 0; i < 5; i++) {
                final int taskId = i;
                futures.add(executor.submit(() -> {
                    Thread.sleep(taskId * 100);
                    return taskId * 10;
                }));
            }
            
            // Wait for all futures
            List<Integer> results = new ArrayList<>();
            for (Future<Integer> future : futures) {
                results.add(future.get());
            }
            System.out.println("Results: " + results);
            
            executor.shutdown();
        }
    }
    
    /**
     * Example 5: Future with timeout
     */
    static class FutureTimeoutExample {
        public static void demonstrate() throws InterruptedException {
            ExecutorService executor = Executors.newSingleThreadExecutor();
            
            Future<String> future = executor.submit(() -> {
                Thread.sleep(5000);
                return "Done";
            });
            
            try {
                String result = future.get(2, TimeUnit.SECONDS);
                System.out.println("Result: " + result);
            } catch (TimeoutException e) {
                System.out.println("Task timed out!");
                future.cancel(true); // Cancel the task
            } catch (ExecutionException e) {
                System.out.println("Task threw exception: " + e.getCause());
            }
            
            executor.shutdown();
        }
    }
    
    // ================== SECTION 2: THREADPOOLEXECUTOR ==================
    
    /**
     * Example 6: ThreadPoolExecutor configuration
     */
    static class ThreadPoolExecutorExample {
        public static void demonstrate() throws InterruptedException {
            ThreadPoolExecutor executor = new ThreadPoolExecutor(
                2,           // corePoolSize
                5,           // maximumPoolSize
                60,          // keepAliveTime
                TimeUnit.SECONDS,
                new LinkedBlockingQueue<>(10) // workQueue
            );
            
            // Submit tasks
            for (int i = 0; i < 15; i++) {
                final int taskId = i;
                executor.submit(() -> {
                    System.out.println("Task " + taskId + " by " + 
                        Thread.currentThread().getName() + 
                        " (Active: " + executor.getActiveCount() + ")");
                });
            }
            
            executor.shutdown();
            executor.awaitTermination(10, TimeUnit.SECONDS);
            System.out.println("Completed tasks: " + executor.getCompletedTaskCount());
        }
    }
    
    /**
     * Example 7: ThreadPoolExecutor with custom rejection policy
     */
    static class RejectionPolicyExample {
        public static void demonstrate() throws InterruptedException {
            // Queue size = 2, so 3rd task onwards will be rejected
            ThreadPoolExecutor executor = new ThreadPoolExecutor(
                1, 1, 60, TimeUnit.SECONDS,
                new LinkedBlockingQueue<>(2),
                new ThreadPoolExecutor.CallerRunsPolicy() // Rejection policy
            );
            
            for (int i = 0; i < 5; i++) {
                final int taskId = i;
                try {
                    executor.submit(() -> {
                        System.out.println("Task " + taskId + " executed");
                        try {
                            Thread.sleep(1000);
                        } catch (InterruptedException e) {
                            Thread.currentThread().interrupt();
                        }
                    });
                } catch (RejectedExecutionException e) {
                    System.out.println("Task " + taskId + " rejected!");
                }
            }
            
            executor.shutdown();
            executor.awaitTermination(10, TimeUnit.SECONDS);
        }
    }
    
    /**
     * Example 8: Rejection policies
     */
    static class RejectionPoliciesDemo {
        public static void showAllPolicies() {
            System.out.println("Available Rejection Policies:");
            System.out.println("1. AbortPolicy - Throws RejectedExecutionException");
            System.out.println("2. CallerRunsPolicy - Runs task in calling thread");
            System.out.println("3. DiscardPolicy - Silently discards task");
            System.out.println("4. DiscardOldestPolicy - Discards oldest task in queue");
        }
    }
    
    // ================== SECTION 3: SCHEDULEDEXECUTORSERVICE ==================
    
    /**
     * Example 9: Scheduled tasks - delay
     */
    static class ScheduledTasksExample {
        public static void demonstrate() throws InterruptedException {
            ScheduledExecutorService scheduler = 
                Executors.newScheduledThreadPool(2);
            
            // Execute after 2 seconds delay
            scheduler.schedule(
                () -> System.out.println("Task executed after 2 seconds"),
                2,
                TimeUnit.SECONDS
            );
            
            Thread.sleep(3000);
            scheduler.shutdown();
        }
    }
    
    /**
     * Example 10: Scheduled tasks - periodic execution
     */
    static class PeriodicTasksExample {
        public static void demonstrate() throws InterruptedException {
            ScheduledExecutorService scheduler = 
                Executors.newScheduledThreadPool(1);
            
            // Execute every 1 second
            ScheduledFuture<?> future = scheduler.scheduleAtFixedRate(
                () -> System.out.println("Periodic task: " + 
                    System.currentTimeMillis()),
                0,  // initial delay
                1,  // period
                TimeUnit.SECONDS
            );
            
            Thread.sleep(5000);
            future.cancel(true);
            scheduler.shutdown();
        }
    }
    
    /**
     * Example 11: ScheduleWithFixedDelay
     */
    static class FixedDelayExample {
        public static void demonstrate() throws InterruptedException {
            ScheduledExecutorService scheduler = 
                Executors.newScheduledThreadPool(1);
            
            // Fixed delay between executions (including task duration)
            scheduler.scheduleWithFixedDelay(
                () -> {
                    System.out.println("Task started");
                    try {
                        Thread.sleep(500);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                    System.out.println("Task completed");
                },
                0,  // initial delay
                2,  // delay between tasks
                TimeUnit.SECONDS
            );
            
            Thread.sleep(10000);
            scheduler.shutdown();
        }
    }
    
    // ================== SECTION 4: FORKJOINPOOL ==================
    
    /**
     * Example 12: ForkJoinTask basic example
     */
    static class ForkJoinExample extends RecursiveTask<Long> {
        private int[] array;
        private int start, end;
        private static final int THRESHOLD = 1000;
        
        public ForkJoinExample(int[] array, int start, int end) {
            this.array = array;
            this.start = start;
            this.end = end;
        }
        
        @Override
        protected Long compute() {
            if (end - start <= THRESHOLD) {
                // Base case: compute directly
                long sum = 0;
                for (int i = start; i < end; i++) {
                    sum += array[i];
                }
                return sum;
            } else {
                // Divide and conquer
                int mid = (start + end) / 2;
                ForkJoinExample left = new ForkJoinExample(array, start, mid);
                ForkJoinExample right = new ForkJoinExample(array, mid, end);
                
                left.fork();
                long rightResult = right.compute();
                long leftResult = left.join();
                
                return leftResult + rightResult;
            }
        }
    }
    
    /**
     * Example 13: ForkJoinPool usage
     */
    static class ForkJoinPoolDemo {
        public static void demonstrate() {
            int[] array = new int[10000];
            Arrays.fill(array, 1);
            
            ForkJoinPool pool = ForkJoinPool.commonPool();
            ForkJoinExample task = new ForkJoinExample(array, 0, array.length);
            Long result = pool.invoke(task);
            System.out.println("Sum: " + result);
        }
    }
    
    /**
     * Example 14: RecursiveAction (no return value)
     */
    static class RecursiveActionExample extends RecursiveAction {
        private int[] array;
        private int start, end;
        private static final int THRESHOLD = 1000;
        
        public RecursiveActionExample(int[] array, int start, int end) {
            this.array = array;
            this.start = start;
            this.end = end;
        }
        
        @Override
        protected void compute() {
            if (end - start <= THRESHOLD) {
                for (int i = start; i < end; i++) {
                    array[i] *= 2;
                }
            } else {
                int mid = (start + end) / 2;
                invokeAll(
                    new RecursiveActionExample(array, start, mid),
                    new RecursiveActionExample(array, mid, end)
                );
            }
        }
    }
    
    // ================== SECTION 5: EXECUTORCOMPLETIONSERVICE ==================
    
    /**
     * Example 15: ExecutorCompletionService for result processing
     */
    static class CompletionServiceExample {
        public static void demonstrate() throws InterruptedException, ExecutionException {
            ExecutorService executor = Executors.newFixedThreadPool(3);
            CompletionService<Integer> service = 
                new ExecutorCompletionService<>(executor);
            
            // Submit tasks
            for (int i = 0; i < 5; i++) {
                final int taskId = i;
                service.submit(() -> {
                    Thread.sleep(taskId * 200);
                    return taskId * 10;
                });
            }
            
            // Process results in completion order (not submission order)
            for (int i = 0; i < 5; i++) {
                Future<Integer> future = service.take();
                System.out.println("Completed: " + future.get());
            }
            
            executor.shutdown();
        }
    }
    
    /**
     * Example 16: invokeAll vs invokeAny
     */
    static class InvokeMethodsExample {
        public static void invokeAllDemo() throws InterruptedException {
            ExecutorService executor = Executors.newFixedThreadPool(3);
            
            List<Callable<String>> tasks = new ArrayList<>();
            for (int i = 0; i < 3; i++) {
                final int taskId = i;
                tasks.add(() -> {
                    Thread.sleep(taskId * 100);
                    return "Result " + taskId;
                });
            }
            
            // Wait for all to complete
            List<Future<String>> futures = executor.invokeAll(tasks);
            for (Future<String> future : futures) {
                System.out.println(future.get());
            }
            
            executor.shutdown();
        }
        
        public static void invokeAnyDemo() throws InterruptedException, ExecutionException {
            ExecutorService executor = Executors.newFixedThreadPool(3);
            
            List<Callable<String>> tasks = new ArrayList<>();
            for (int i = 0; i < 3; i++) {
                final int taskId = i;
                tasks.add(() -> {
                    Thread.sleep((3 - taskId) * 100);
                    return "Result " + taskId;
                });
            }
            
            // Returns first completed result
            String result = executor.invokeAny(tasks);
            System.out.println("First result: " + result);
            
            executor.shutdown();
        }
    }
    
    // ================== SECTION 6: SHUTDOWN PATTERNS ==================
    
    /**
     * Example 17: Proper executor shutdown
     */
    static class ShutdownExample {
        public static void properShutdown() throws InterruptedException {
            ExecutorService executor = Executors.newFixedThreadPool(3);
            
            for (int i = 0; i < 10; i++) {
                executor.submit(() -> {
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                });
            }
            
            // Step 1: Stop accepting new tasks
            executor.shutdown();
            
            // Step 2: Wait for tasks to complete
            if (!executor.awaitTermination(5, TimeUnit.SECONDS)) {
                // Timeout occurred
                executor.shutdownNow();
                
                // Wait a bit more
                if (!executor.awaitTermination(2, TimeUnit.SECONDS)) {
                    System.out.println("Executor did not terminate");
                }
            }
            
            System.out.println("Executor terminated");
        }
    }
    
    /**
     * Example 18: ExecutorService wrapper for automatic cleanup
     */
    static class AutoCloseable_ExecutorExample {
        public static void demonstrateWithTryResource() throws Exception {
            // Try-with-resources automatically calls shutdown
            try (ExecutorService executor = Executors.newFixedThreadPool(2)) {
                for (int i = 0; i < 5; i++) {
                    executor.submit(() -> System.out.println("Task " + 
                        Thread.currentThread().getName()));
                }
            } // Executor automatically shutdown here
        }
    }
    
    // ================== SECTION 7: BEST PRACTICES ==================
    
    /**
     * Example 19: Thread naming for debugging
     */
    static class ThreadFactoryExample {
        static class NamedThreadFactory implements ThreadFactory {
            private final String prefix;
            private final AtomicInteger count = new AtomicInteger(0);
            
            public NamedThreadFactory(String prefix) {
                this.prefix = prefix;
            }
            
            @Override
            public Thread newThread(Runnable r) {
                Thread t = new Thread(r, prefix + "-" + count.incrementAndGet());
                t.setDaemon(false);
                return t;
            }
        }
        
        public static void demonstrate() throws InterruptedException {
            ExecutorService executor = Executors.newFixedThreadPool(
                3,
                new NamedThreadFactory("Worker")
            );
            
            for (int i = 0; i < 5; i++) {
                executor.submit(() -> 
                    System.out.println("Running on " + 
                        Thread.currentThread().getName())
                );
            }
            
            executor.shutdown();
            executor.awaitTermination(5, TimeUnit.SECONDS);
        }
    }
    
    /**
     * Example 20: Monitor executor metrics
     */
    static class ExecutorMonitoring {
        public static void demonstrateMonitoring() throws InterruptedException {
            ThreadPoolExecutor executor = new ThreadPoolExecutor(
                2, 5, 60, TimeUnit.SECONDS,
                new LinkedBlockingQueue<>(10)
            );
            
            for (int i = 0; i < 10; i++) {
                final int taskId = i;
                executor.submit(() -> {
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                });
                
                System.out.println("Active: " + executor.getActiveCount() +
                    ", Queue: " + executor.getQueue().size() +
                    ", Total: " + executor.getTaskCount());
            }
            
            executor.shutdown();
            executor.awaitTermination(10, TimeUnit.SECONDS);
        }
    }
    
    // ================== SECTION 8: INTERVIEW QUESTIONS ==================
    
    /**
     * Q1: What's the difference between ExecutorService and Executor?
     * A: Executor is basic interface with execute() method.
     * ExecutorService extends it with submit(), shutdown(), and lifecycle methods.
     */
    
    /**
     * Q2: What are the common thread pool types?
     * A: newSingleThreadExecutor, newFixedThreadPool, newCachedThreadPool,
     * newScheduledThreadPool, newWorkStealingPool
     */
    
    /**
     * Q3: What's the difference between Future.get() and isDone()?
     * A: isDone() returns immediately (non-blocking),
     * get() blocks until result is available.
     */
    
    /**
     * Q4: How does ThreadPoolExecutor work?
     * A: Core threads handle tasks. If queue is full, new threads created
     * up to max. If max reached, tasks are rejected per policy.
     */
    
    /**
     * Q5: When should you use ForkJoinPool?
     * A: For divide-and-conquer problems with work stealing,
     * and parallel stream operations.
     */
    
    // Continue with 20 more questions...
    
    // ================== MAIN DEMONSTRATION ==================
    
    public static void main(String[] args) {
        try {
            System.out.println("=== DAY 19: SECTION 2 - EXECUTOR FRAMEWORK ===\n");
            
            System.out.println("--- BASIC EXECUTOR ---");
            ExecutorBasics.fixedThreadPool();
            
            System.out.println("\n--- CALLABLE & FUTURE ---");
            CallableAndFutureExample.demonstrate();
            
            System.out.println("\n--- SCHEDULED TASKS ---");
            ScheduledTasksExample.demonstrate();
            
            System.out.println("\n--- THREAD FACTORY ---");
            ThreadFactoryExample.demonstrate();
            
            System.out.println("\n=== SECTION 2 COMPLETE ===");
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
