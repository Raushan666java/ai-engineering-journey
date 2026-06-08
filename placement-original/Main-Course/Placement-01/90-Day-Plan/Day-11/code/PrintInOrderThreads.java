/**
 * DAY 11: LEETCODE - Print in Order (LeetCode #1114)
 * 
 * Problem: Ensure three methods execute in order across threads
 * 
 * Approaches:
 * 1. Synchronized with wait/notify
 * 2. Semaphore
 * 3. CountDownLatch
 * 4. Lock and Condition
 * 5. AtomicInteger
 * 6. BlockingQueue
 * 7. CompletableFuture
 * 
 * Difficulty: Easy
 * Topics: Concurrency, Synchronization
 */

package day11.leetcode;

import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.util.concurrent.locks.*;

public class PrintInOrderThreads {

    // ===========================================
    // APPROACH 1: SYNCHRONIZED WITH WAIT/NOTIFY
    // ===========================================
    
    /**
     * Time: O(1)
     * Space: O(1)
     * 
     * Uses synchronized block with wait/notify for coordination
     */
    static class Foo1 {
        private int order = 1;
        
        public Foo1() {}
        
        public synchronized void first(Runnable printFirst) throws InterruptedException {
            printFirst.run();
            order = 2;
            notifyAll(); // Wake up waiting threads
        }
        
        public synchronized void second(Runnable printSecond) throws InterruptedException {
            while (order != 2) {
                wait(); // Wait until first completes
            }
            printSecond.run();
            order = 3;
            notifyAll();
        }
        
        public synchronized void third(Runnable printThird) throws InterruptedException {
            while (order != 3) {
                wait(); // Wait until second completes
            }
            printThird.run();
        }
    }
    
    // ===========================================
    // APPROACH 2: SEMAPHORE
    // ===========================================
    
    /**
     * Time: O(1)
     * Space: O(1)
     * 
     * Uses semaphores to control execution order
     * Most elegant solution for this problem
     */
    static class Foo2 {
        private Semaphore sem2 = new Semaphore(0);
        private Semaphore sem3 = new Semaphore(0);
        
        public Foo2() {}
        
        public void first(Runnable printFirst) throws InterruptedException {
            printFirst.run();
            sem2.release(); // Allow second to proceed
        }
        
        public void second(Runnable printSecond) throws InterruptedException {
            sem2.acquire(); // Wait for first
            printSecond.run();
            sem3.release(); // Allow third to proceed
        }
        
        public void third(Runnable printThird) throws InterruptedException {
            sem3.acquire(); // Wait for second
            printThird.run();
        }
    }
    
    // ===========================================
    // APPROACH 3: COUNTDOWNLATCH
    // ===========================================
    
    /**
     * Time: O(1)
     * Space: O(1)
     * 
     * Uses CountDownLatch for synchronization
     */
    static class Foo3 {
        private CountDownLatch latch2 = new CountDownLatch(1);
        private CountDownLatch latch3 = new CountDownLatch(1);
        
        public Foo3() {}
        
        public void first(Runnable printFirst) throws InterruptedException {
            printFirst.run();
            latch2.countDown();
        }
        
        public void second(Runnable printSecond) throws InterruptedException {
            latch2.await();
            printSecond.run();
            latch3.countDown();
        }
        
        public void third(Runnable printThird) throws InterruptedException {
            latch3.await();
            printThird.run();
        }
    }
    
    // ===========================================
    // APPROACH 4: LOCK AND CONDITION
    // ===========================================
    
    /**
     * Time: O(1)
     * Space: O(1)
     * 
     * Uses ReentrantLock with Condition objects
     */
    static class Foo4 {
        private int order = 1;
        private Lock lock = new ReentrantLock();
        private Condition cond2 = lock.newCondition();
        private Condition cond3 = lock.newCondition();
        
        public Foo4() {}
        
        public void first(Runnable printFirst) throws InterruptedException {
            lock.lock();
            try {
                printFirst.run();
                order = 2;
                cond2.signal();
            } finally {
                lock.unlock();
            }
        }
        
        public void second(Runnable printSecond) throws InterruptedException {
            lock.lock();
            try {
                while (order != 2) {
                    cond2.await();
                }
                printSecond.run();
                order = 3;
                cond3.signal();
            } finally {
                lock.unlock();
            }
        }
        
        public void third(Runnable printThird) throws InterruptedException {
            lock.lock();
            try {
                while (order != 3) {
                    cond3.await();
                }
                printThird.run();
            } finally {
                lock.unlock();
            }
        }
    }
    
    // ===========================================
    // APPROACH 5: ATOMICINTEGER
    // ===========================================
    
    /**
     * Time: O(1)
     * Space: O(1)
     * 
     * Uses AtomicInteger with busy waiting
     */
    static class Foo5 {
        private AtomicInteger order = new AtomicInteger(1);
        
        public Foo5() {}
        
        public void first(Runnable printFirst) throws InterruptedException {
            printFirst.run();
            order.set(2);
        }
        
        public void second(Runnable printSecond) throws InterruptedException {
            while (order.get() != 2) {
                Thread.yield(); // Busy wait
            }
            printSecond.run();
            order.set(3);
        }
        
        public void third(Runnable printThird) throws InterruptedException {
            while (order.get() != 3) {
                Thread.yield();
            }
            printThird.run();
        }
    }
    
    // ===========================================
    // APPROACH 6: BLOCKINGQUEUE
    // ===========================================
    
    /**
     * Time: O(1)
     * Space: O(1)
     * 
     * Uses BlockingQueue for coordination
     */
    static class Foo6 {
        private BlockingQueue<Integer> queue2 = new LinkedBlockingQueue<>(1);
        private BlockingQueue<Integer> queue3 = new LinkedBlockingQueue<>(1);
        
        public Foo6() {}
        
        public void first(Runnable printFirst) throws InterruptedException {
            printFirst.run();
            queue2.put(1);
        }
        
        public void second(Runnable printSecond) throws InterruptedException {
            queue2.take();
            printSecond.run();
            queue3.put(1);
        }
        
        public void third(Runnable printThird) throws InterruptedException {
            queue3.take();
            printThird.run();
        }
    }
    
    // ===========================================
    // APPROACH 7: COMPLETABLEFUTURE
    // ===========================================
    
    /**
     * Time: O(1)
     * Space: O(1)
     * 
     * Uses CompletableFuture for async coordination
     */
    static class Foo7 {
        private CompletableFuture<Void> future2 = new CompletableFuture<>();
        private CompletableFuture<Void> future3 = new CompletableFuture<>();
        
        public Foo7() {}
        
        public void first(Runnable printFirst) throws InterruptedException {
            printFirst.run();
            future2.complete(null);
        }
        
        public void second(Runnable printSecond) throws InterruptedException {
            try {
                future2.get();
                printSecond.run();
                future3.complete(null);
            } catch (ExecutionException e) {
                e.printStackTrace();
            }
        }
        
        public void third(Runnable printThird) throws InterruptedException {
            try {
                future3.get();
                printThird.run();
            } catch (ExecutionException e) {
                e.printStackTrace();
            }
        }
    }
    
    // ===========================================
    // TESTING ALL APPROACHES
    // ===========================================
    
    static void testApproach(String name, Object foo) throws Exception {
        System.out.println("\n=== " + name + " ===\n");
        
        Runnable printFirst = () -> System.out.print("first");
        Runnable printSecond = () -> System.out.print("second");
        Runnable printThird = () -> System.out.print("third");
        
        // Create threads in random order
        Thread t3 = new Thread(() -> {
            try {
                if (foo instanceof Foo1) ((Foo1) foo).third(printThird);
                else if (foo instanceof Foo2) ((Foo2) foo).third(printThird);
                else if (foo instanceof Foo3) ((Foo3) foo).third(printThird);
                else if (foo instanceof Foo4) ((Foo4) foo).third(printThird);
                else if (foo instanceof Foo5) ((Foo5) foo).third(printThird);
                else if (foo instanceof Foo6) ((Foo6) foo).third(printThird);
                else if (foo instanceof Foo7) ((Foo7) foo).third(printThird);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        
        Thread t1 = new Thread(() -> {
            try {
                if (foo instanceof Foo1) ((Foo1) foo).first(printFirst);
                else if (foo instanceof Foo2) ((Foo2) foo).first(printFirst);
                else if (foo instanceof Foo3) ((Foo3) foo).first(printFirst);
                else if (foo instanceof Foo4) ((Foo4) foo).first(printFirst);
                else if (foo instanceof Foo5) ((Foo5) foo).first(printFirst);
                else if (foo instanceof Foo6) ((Foo6) foo).first(printFirst);
                else if (foo instanceof Foo7) ((Foo7) foo).first(printFirst);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        
        Thread t2 = new Thread(() -> {
            try {
                if (foo instanceof Foo2) ((Foo2) foo).second(printSecond);
                else if (foo instanceof Foo1) ((Foo1) foo).second(printSecond);
                else if (foo instanceof Foo3) ((Foo3) foo).second(printSecond);
                else if (foo instanceof Foo4) ((Foo4) foo).second(printSecond);
                else if (foo instanceof Foo5) ((Foo5) foo).second(printSecond);
                else if (foo instanceof Foo6) ((Foo6) foo).second(printSecond);
                else if (foo instanceof Foo7) ((Foo7) foo).second(printSecond);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        
        // Start in reverse order
        t3.start();
        Thread.sleep(100);
        t2.start();
        Thread.sleep(100);
        t1.start();
        
        t1.join();
        t2.join();
        t3.join();
        
        System.out.println("\n");
    }
    
    // ===========================================
    // COMPLEXITY ANALYSIS
    // ===========================================
    
    static void printComplexityAnalysis() {
        System.out.println("\n=== COMPLEXITY ANALYSIS ===\n");
        
        System.out.println("┌────────────────────────────┬──────┬───────┬────────────────────────────┐");
        System.out.println("│ Approach                   │ Time │ Space │ Notes                      │");
        System.out.println("├────────────────────────────┼──────┼───────┼────────────────────────────┤");
        System.out.println("│ 1. wait/notify             │ O(1) │ O(1)  │ Classic, but verbose       │");
        System.out.println("│ 2. Semaphore              │ O(1) │ O(1)  │ Most elegant, recommended  │");
        System.out.println("│ 3. CountDownLatch         │ O(1) │ O(1)  │ Clean, one-time use        │");
        System.out.println("│ 4. Lock & Condition       │ O(1) │ O(1)  │ More control, complex      │");
        System.out.println("│ 5. AtomicInteger          │ O(1) │ O(1)  │ Busy waiting, CPU waste    │");
        System.out.println("│ 6. BlockingQueue          │ O(1) │ O(1)  │ Creative use of queue      │");
        System.out.println("│ 7. CompletableFuture      │ O(1) │ O(1)  │ Modern async style         │");
        System.out.println("└────────────────────────────┴──────┴───────┴────────────────────────────┘");
        
        System.out.println("\nRECOMMENDED: Semaphore (Approach 2)");
        System.out.println("- Clean and concise");
        System.out.println("- No busy waiting");
        System.out.println("- Easy to understand");
    }
    
    // ===========================================
    // MAIN METHOD
    // ===========================================
    
    public static void main(String[] args) throws Exception {
        testApproach("Approach 1: wait/notify", new Foo1());
        testApproach("Approach 2: Semaphore", new Foo2());
        testApproach("Approach 3: CountDownLatch", new Foo3());
        testApproach("Approach 4: Lock & Condition", new Foo4());
        testApproach("Approach 5: AtomicInteger", new Foo5());
        testApproach("Approach 6: BlockingQueue", new Foo6());
        testApproach("Approach 7: CompletableFuture", new Foo7());
        
        printComplexityAnalysis();
    }
}
