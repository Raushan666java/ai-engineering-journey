package dsa.day58;

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;

/**
 * Day 58: Rate Limiting Algorithms - Production-grade implementations
 *
 * Implementations:
 * 1. Token Bucket - allows bursts, smooth rate limiting
 * 2. Leaky Bucket - fixed outflow rate, queue-based
 * 3. Fixed Window Counter - simple but allows burst at window boundaries
 * 4. Sliding Window Log - precise but memory-intensive
 * 5. Sliding Window Counter - hybrid approach, memory-efficient
 *
 * Each rate limiter provides:
 * - tryAcquire(): attempts to acquire permit, returns true if allowed
 * - Time injection for deterministic testing
 *
 * Thread-safety: All implementations use atomic operations or synchronization.
 */
public class RateLimiters {

    // ==================== 1. Token Bucket ====================
    /**
     * Token Bucket Algorithm
     * - Tokens refill at constant rate (refillRate tokens per second)
     * - Bucket has maximum capacity
     * - Allows bursts up to capacity
     * 
     * Time: O(1) per request
     * Space: O(1)
     * 
     * Best for: APIs that can handle occasional bursts
     */
    public static class TokenBucket {
        private final long capacity;
        private final long refillRate; // tokens per second
        private final AtomicLong tokens;
        private final AtomicLong lastRefillTime;
        private final LongSupplier timeProvider; // injectable for testing

        public TokenBucket(long capacity, long refillRate, LongSupplier timeProvider) {
            this.capacity = capacity;
            this.refillRate = refillRate;
            this.tokens = new AtomicLong(capacity);
            this.lastRefillTime = new AtomicLong(timeProvider.getAsLong());
            this.timeProvider = timeProvider;
        }

        public TokenBucket(long capacity, long refillRate) {
            this(capacity, refillRate, System::currentTimeMillis);
        }

        public boolean tryAcquire() {
            return tryAcquire(1);
        }

        public boolean tryAcquire(long permits) {
            refill();
            long current = tokens.get();
            if (current >= permits) {
                if (tokens.compareAndSet(current, current - permits)) {
                    return true;
                }
                return tryAcquire(permits); // retry on CAS failure
            }
            return false;
        }

        private void refill() {
            long now = timeProvider.getAsLong();
            long last = lastRefillTime.get();
            long elapsed = now - last;
            if (elapsed > 0) {
                long tokensToAdd = (elapsed * refillRate) / 1000; // convert ms to seconds
                if (tokensToAdd > 0) {
                    lastRefillTime.compareAndSet(last, now);
                    long current, newVal;
                    do {
                        current = tokens.get();
                        newVal = Math.min(capacity, current + tokensToAdd);
                    } while (!tokens.compareAndSet(current, newVal));
                }
            }
        }

        public long availableTokens() { refill(); return tokens.get(); }
    }

    // ==================== 2. Leaky Bucket ====================
    /**
     * Leaky Bucket Algorithm
     * - Fixed outflow rate
     * - Queue-based implementation
     * - Smooths traffic spikes
     * 
     * Time: O(1) per request
     * Space: O(queueCapacity)
     * 
     * Best for: Smoothing bursty traffic to backend
     */
    public static class LeakyBucket {
        private final long capacity;
        private final long leakRate; // requests per second
        private final Queue<Long> queue;
        private final AtomicLong lastLeakTime;
        private final LongSupplier timeProvider;

        public LeakyBucket(long capacity, long leakRate, LongSupplier timeProvider) {
            this.capacity = capacity;
            this.leakRate = leakRate;
            this.queue = new ConcurrentLinkedQueue<>();
            this.lastLeakTime = new AtomicLong(timeProvider.getAsLong());
            this.timeProvider = timeProvider;
        }

        public LeakyBucket(long capacity, long leakRate) {
            this(capacity, leakRate, System::currentTimeMillis);
        }

        public synchronized boolean tryAcquire() {
            leak();
            if (queue.size() < capacity) {
                queue.offer(timeProvider.getAsLong());
                return true;
            }
            return false;
        }

        private void leak() {
            long now = timeProvider.getAsLong();
            long last = lastLeakTime.get();
            long elapsed = now - last;
            long itemsToLeak = (elapsed * leakRate) / 1000;
            
            for (int i = 0; i < itemsToLeak && !queue.isEmpty(); i++) {
                queue.poll();
            }
            
            if (itemsToLeak > 0) {
                lastLeakTime.set(now);
            }
        }

        public int queueSize() { leak(); return queue.size(); }
    }

    // ==================== 3. Fixed Window Counter ====================
    /**
     * Fixed Window Counter
     * - Simple counter reset at fixed intervals
     * - Can allow 2x burst at window boundaries
     * 
     * Time: O(1) per request
     * Space: O(1)
     * 
     * Best for: Simple rate limiting with acceptable boundary bursts
     */
    public static class FixedWindowCounter {
        private final long limit;
        private final long windowSizeMs;
        private final AtomicLong counter;
        private final AtomicLong windowStart;
        private final LongSupplier timeProvider;

        public FixedWindowCounter(long limit, long windowSizeMs, LongSupplier timeProvider) {
            this.limit = limit;
            this.windowSizeMs = windowSizeMs;
            this.counter = new AtomicLong(0);
            this.windowStart = new AtomicLong(timeProvider.getAsLong());
            this.timeProvider = timeProvider;
        }

        public FixedWindowCounter(long limit, long windowSizeMs) {
            this(limit, windowSizeMs, System::currentTimeMillis);
        }

        public boolean tryAcquire() {
            long now = timeProvider.getAsLong();
            long start = windowStart.get();
            
            if (now - start >= windowSizeMs) {
                // New window
                if (windowStart.compareAndSet(start, now)) {
                    counter.set(1);
                    return true;
                }
                return tryAcquire(); // retry if CAS failed
            }
            
            long current = counter.get();
            if (current < limit) {
                if (counter.compareAndSet(current, current + 1)) {
                    return true;
                }
                return tryAcquire(); // retry
            }
            return false;
        }

        public long currentCount() { return counter.get(); }
    }

    // ==================== 4. Sliding Window Log ====================
    /**
     * Sliding Window Log
     * - Maintains log of all request timestamps
     * - Most accurate but memory-intensive
     * 
     * Time: O(N) where N is requests in window
     * Space: O(N)
     * 
     * Best for: Precise rate limiting with low traffic
     */
    public static class SlidingWindowLog {
        private final long limit;
        private final long windowSizeMs;
        private final Queue<Long> log;
        private final LongSupplier timeProvider;

        public SlidingWindowLog(long limit, long windowSizeMs, LongSupplier timeProvider) {
            this.limit = limit;
            this.windowSizeMs = windowSizeMs;
            this.log = new ConcurrentLinkedQueue<>();
            this.timeProvider = timeProvider;
        }

        public SlidingWindowLog(long limit, long windowSizeMs) {
            this(limit, windowSizeMs, System::currentTimeMillis);
        }

        public synchronized boolean tryAcquire() {
            long now = timeProvider.getAsLong();
            long windowStart = now - windowSizeMs;
            
            // Remove old entries
            while (!log.isEmpty() && log.peek() <= windowStart) {
                log.poll();
            }
            
            if (log.size() < limit) {
                log.offer(now);
                return true;
            }
            return false;
        }

        public int requestCount() { 
            long now = timeProvider.getAsLong();
            long windowStart = now - windowSizeMs;
            while (!log.isEmpty() && log.peek() <= windowStart) log.poll();
            return log.size(); 
        }
    }

    // ==================== 5. Sliding Window Counter ====================
    /**
     * Sliding Window Counter (Hybrid)
     * - Combines fixed window counters with weighted calculation
     * - Memory-efficient approximation of sliding window
     * 
     * Time: O(1) per request
     * Space: O(1)
     * 
     * Best for: Balance between accuracy and efficiency
     */
    public static class SlidingWindowCounter {
        private final long limit;
        private final long windowSizeMs;
        private final AtomicLong prevWindowCount;
        private final AtomicLong currWindowCount;
        private final AtomicLong currWindowStart;
        private final LongSupplier timeProvider;

        public SlidingWindowCounter(long limit, long windowSizeMs, LongSupplier timeProvider) {
            this.limit = limit;
            this.windowSizeMs = windowSizeMs;
            this.prevWindowCount = new AtomicLong(0);
            this.currWindowCount = new AtomicLong(0);
            this.currWindowStart = new AtomicLong(timeProvider.getAsLong());
            this.timeProvider = timeProvider;
        }

        public SlidingWindowCounter(long limit, long windowSizeMs) {
            this(limit, windowSizeMs, System::currentTimeMillis);
        }

        public synchronized boolean tryAcquire() {
            long now = timeProvider.getAsLong();
            long start = currWindowStart.get();
            
            if (now - start >= windowSizeMs) {
                // Slide window
                prevWindowCount.set(currWindowCount.get());
                currWindowCount.set(0);
                currWindowStart.set(now);
            }
            
            // Calculate weighted count
            long elapsed = now - currWindowStart.get();
            double weight = 1.0 - ((double) elapsed / windowSizeMs);
            long estimatedCount = (long) (prevWindowCount.get() * weight) + currWindowCount.get();
            
            if (estimatedCount < limit) {
                currWindowCount.incrementAndGet();
                return true;
            }
            return false;
        }

        public long estimatedCount() {
            long now = timeProvider.getAsLong();
            long elapsed = now - currWindowStart.get();
            double weight = Math.max(0, 1.0 - ((double) elapsed / windowSizeMs));
            return (long) (prevWindowCount.get() * weight) + currWindowCount.get();
        }
    }
}
