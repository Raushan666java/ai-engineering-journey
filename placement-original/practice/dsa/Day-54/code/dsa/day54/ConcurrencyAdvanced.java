package dsa.day54;

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.util.function.*;

/**
 * Day 54: Concurrency & Parallelism - Advanced examples and utilities
 *
 * Sections:
 *  - Safe counters: synchronized, ReentrantLock, AtomicLong
 *  - Producer/Consumer with BlockingQueue
 *  - CompletableFuture composition & timeouts
 *  - ForkJoin recursive parallelism (sum of array)
 *  - ThreadPool usage and graceful shutdown
 *  - Lock-free algorithms (compareAndSet) demonstration
 *  - Deterministic testing helpers (CountDownLatch)
 *
 * Emphasis: deterministic tests, clear API, well-commented code suitable for interviews and production discussion.
 */
public class ConcurrencyAdvanced {

    // ---------- 1) Counters ----------

    public static class SynchronizedCounter {
        private long value = 0;
        public synchronized void inc() { value++; }
        public synchronized long get() { return value; }
    }

    public static class LockCounter {
        private final java.util.concurrent.locks.ReentrantLock lock = new java.util.concurrent.locks.ReentrantLock();
        private long value = 0;
        public void inc() { lock.lock(); try { value++; } finally { lock.unlock(); } }
        public long get() { lock.lock(); try { return value; } finally { lock.unlock(); } }
    }

    public static class AtomicCounter {
        private final AtomicLong v = new AtomicLong();
        public void inc() { v.incrementAndGet(); }
        public long get() { return v.get(); }
    }

    // ---------- 2) Producer/Consumer ----------
    public static class ProducerConsumer<T> {
        private final BlockingQueue<T> q;
        public ProducerConsumer(int capacity) { this.q = new ArrayBlockingQueue<>(capacity); }
        public void produce(T item) throws InterruptedException { q.put(item); }
        public T consume() throws InterruptedException { return q.take(); }
    }

    // ---------- 3) CompletableFuture helpers ----------
    public static <T> CompletableFuture<T> withTimeout(CompletableFuture<T> cf, long timeout, TimeUnit unit, ScheduledExecutorService sched) {
        final CompletableFuture<T> timeoutCF = new CompletableFuture<>();
        sched.schedule(() -> timeoutCF.completeExceptionally(new TimeoutException("Timeout")), timeout, unit);
        return cf.applyToEither(timeoutCF, Function.identity());
    }

    // ---------- 4) ForkJoin sum (example) ----------
    public static class SumTask extends RecursiveTask<Long> {
        private final long[] arr; private final int l, r; private final int THRESHOLD = 1 << 13;
        public SumTask(long[] arr, int l, int r) { this.arr = arr; this.l = l; this.r = r; }
        @Override protected Long compute() {
            int len = r - l;
            if (len <= THRESHOLD) {
                long s=0; for (int i=l;i<r;i++) s += arr[i]; return s;
            }
            int m = l + len/2;
            SumTask left = new SumTask(arr, l, m); SumTask right = new SumTask(arr, m, r);
            left.fork(); long rightRes = right.compute(); long leftRes = left.join();
            return leftRes + rightRes;
        }
    }

    public static long parallelSum(long[] arr) {
        ForkJoinPool fj = ForkJoinPool.commonPool();
        return fj.invoke(new SumTask(arr, 0, arr.length));
    }

    // ---------- 5) Lock-free stack (simple) ----------
    public static class LockFreeStack<T> {
        private static class Node<T> { final T value; final Node<T> next; Node(T v, Node<T> n){value=v;next=n;} }
        private final AtomicReference<Node<T>> head = new AtomicReference<>();
        public void push(T v) {
            Node<T> oldHead;
            do { oldHead = head.get(); } while (!head.compareAndSet(oldHead, new Node<>(v, oldHead)));
        }
        public T pop() {
            Node<T> oldHead; Node<T> newHead;
            do { oldHead = head.get(); if (oldHead == null) return null; newHead = oldHead.next; } while (!head.compareAndSet(oldHead, newHead));
            return oldHead.value;
        }
    }

    // ---------- 6) Utility: run concurrently with join and return final counter ----------
    public static long runConcurrentIncrements(int threads, int incrementsPerThread, Supplier<Object> counterFactory) throws InterruptedException {
        Thread[] ts = new Thread[threads]; Object counter = counterFactory.get();
        Runnable r = () -> {
            try {
                if (counter instanceof SynchronizedCounter) { SynchronizedCounter c = (SynchronizedCounter)counter; for (int i=0;i<incrementsPerThread;i++) c.inc(); }
                else if (counter instanceof LockCounter) { LockCounter c = (LockCounter)counter; for (int i=0;i<incrementsPerThread;i++) c.inc(); }
                else if (counter instanceof AtomicCounter) { AtomicCounter c = (AtomicCounter)counter; for (int i=0;i<incrementsPerThread;i++) c.inc(); }
            } catch (Exception e) { throw new RuntimeException(e); }
        };
        for (int i=0;i<threads;i++) ts[i] = new Thread(r);
        for (Thread t : ts) t.start();
        for (Thread t : ts) t.join();
        if (counter instanceof SynchronizedCounter) return ((SynchronizedCounter)counter).get();
        if (counter instanceof LockCounter) return ((LockCounter)counter).get();
        return ((AtomicCounter)counter).get();
    }

}
