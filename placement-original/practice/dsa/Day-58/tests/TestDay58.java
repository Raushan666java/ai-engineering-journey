package dsa.day58.tests;

import dsa.day58.RateLimiters;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.concurrent.atomic.AtomicLong;

public class TestDay58 {

    // Helper: controllable time provider
    static class MockTime {
        AtomicLong time = new AtomicLong(0);
        long get() { return time.get(); }
        void advance(long ms) { time.addAndGet(ms); }
        void set(long ms) { time.set(ms); }
    }

    @Test
    public void testTokenBucketBasic() {
        MockTime time = new MockTime();
        RateLimiters.TokenBucket bucket = new RateLimiters.TokenBucket(10, 1, time::get);
        
        // Use 5 tokens
        for (int i = 0; i < 5; i++) assertTrue(bucket.tryAcquire());
        assertEquals(5, bucket.availableTokens());
        
        // Advance 3 seconds, should refill 3 tokens
        time.advance(3000);
        assertEquals(8, bucket.availableTokens());
    }

    @Test
    public void testTokenBucketBurst() {
        MockTime time = new MockTime();
        RateLimiters.TokenBucket bucket = new RateLimiters.TokenBucket(5, 1, time::get);
        
        // Consume all tokens
        for (int i = 0; i < 5; i++) assertTrue(bucket.tryAcquire());
        assertFalse(bucket.tryAcquire()); // should fail
        
        // Refill and burst again
        time.advance(5000);
        for (int i = 0; i < 5; i++) assertTrue(bucket.tryAcquire());
    }

    @Test
    public void testLeakyBucketSmoothing() {
        MockTime time = new MockTime();
        RateLimiters.LeakyBucket bucket = new RateLimiters.LeakyBucket(3, 1, time::get);
        
        // Fill bucket
        assertTrue(bucket.tryAcquire());
        assertTrue(bucket.tryAcquire());
        assertTrue(bucket.tryAcquire());
        assertFalse(bucket.tryAcquire()); // full
        
        // Leak one item
        time.advance(1000);
        assertTrue(bucket.tryAcquire());
    }

    @Test
    public void testFixedWindowCounter() {
        MockTime time = new MockTime();
        RateLimiters.FixedWindowCounter counter = new RateLimiters.FixedWindowCounter(5, 1000, time::get);
        
        // Use all permits in window
        for (int i = 0; i < 5; i++) assertTrue(counter.tryAcquire());
        assertFalse(counter.tryAcquire());
        
        // New window
        time.advance(1000);
        assertTrue(counter.tryAcquire());
    }

    @Test
    public void testSlidingWindowLog() {
        MockTime time = new MockTime();
        RateLimiters.SlidingWindowLog log = new RateLimiters.SlidingWindowLog(3, 1000, time::get);
        
        assertTrue(log.tryAcquire()); // t=0
        time.advance(100);
        assertTrue(log.tryAcquire()); // t=100
        time.advance(100);
        assertTrue(log.tryAcquire()); // t=200
        assertFalse(log.tryAcquire()); // limit reached
        
        // Advance past first request
        time.advance(800); // now at t=1000, first request at t=0 expires
        assertTrue(log.tryAcquire());
    }

    @Test
    public void testSlidingWindowCounter() {
        MockTime time = new MockTime();
        RateLimiters.SlidingWindowCounter counter = new RateLimiters.SlidingWindowCounter(10, 1000, time::get);
        
        // Use 5 in first window
        for (int i = 0; i < 5; i++) assertTrue(counter.tryAcquire());
        
        // Advance halfway into next window
        time.advance(500);
        
        // Should use weighted calculation: prev=5 * 0.5 + curr=0 = 2.5
        // Should allow more requests
        for (int i = 0; i < 7; i++) assertTrue(counter.tryAcquire());
        
        // Total estimated: 2.5 + 7 = 9.5, should allow one more
        assertTrue(counter.tryAcquire());
    }

    @Test
    public void testTokenBucketConcurrency() throws InterruptedException {
        RateLimiters.TokenBucket bucket = new RateLimiters.TokenBucket(100, 10);
        
        int threads = 10;
        int requestsPerThread = 10;
        AtomicLong successes = new AtomicLong(0);
        
        Thread[] workers = new Thread[threads];
        for (int i = 0; i < threads; i++) {
            workers[i] = new Thread(() -> {
                for (int j = 0; j < requestsPerThread; j++) {
                    if (bucket.tryAcquire()) successes.incrementAndGet();
                }
            });
            workers[i].start();
        }
        
        for (Thread t : workers) t.join();
        
        // Should not exceed capacity
        assertTrue(successes.get() <= 100);
    }
}
