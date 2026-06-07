package dsa.day54.tests;

import dsa.day54.ConcurrencyAdvanced;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.concurrent.*;

public class TestDay54 {

    @Test
    public void testCounters() throws InterruptedException {
        int threads = 8, per = 10000;
        long a = ConcurrencyAdvanced.runConcurrentIncrements(threads, per, ConcurrencyAdvanced.AtomicCounter::new);
        long s = ConcurrencyAdvanced.runConcurrentIncrements(threads, per, ConcurrencyAdvanced.SynchronizedCounter::new);
        long l = ConcurrencyAdvanced.runConcurrentIncrements(threads, per, ConcurrencyAdvanced.LockCounter::new);
        assertEquals((long)threads*per, a);
        assertEquals((long)threads*per, s);
        assertEquals((long)threads*per, l);
    }

    @Test
    public void testBlockingQueueProducerConsumer() throws InterruptedException {
        ConcurrencyAdvanced.ProducerConsumer<Integer> pc = new ConcurrencyAdvanced.ProducerConsumer<>(2);
        Thread p = new Thread(() -> { try { pc.produce(1); pc.produce(2); pc.produce(3); } catch (InterruptedException e) {} });
        Thread c = new Thread(() -> { try { Thread.sleep(10); assertNotNull(pc.consume()); assertNotNull(pc.consume()); assertNotNull(pc.consume()); } catch (InterruptedException e) {} });
        p.start(); c.start(); p.join(); c.join();
    }

    @Test
    public void testForkJoinSum() {
        long[] arr = new long[1<<16]; for (int i=0;i<arr.length;i++) arr[i]=1;
        long s = ConcurrencyAdvanced.parallelSum(arr);
        assertEquals(arr.length, s);
    }

    @Test
    public void testLockFreeStack() {
        ConcurrencyAdvanced.LockFreeStack<Integer> st = new ConcurrencyAdvanced.LockFreeStack<>();
        st.push(1); st.push(2); assertEquals(2, st.pop()); assertEquals(1, st.pop()); assertNull(st.pop());
    }
}
