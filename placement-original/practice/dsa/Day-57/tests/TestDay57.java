package dsa.day57.tests;

import dsa.day57.CacheStrategies;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TestDay57 {

    @Test
    public void testLRUBasic() {
        CacheStrategies.LRUCache<Integer, String> cache = new CacheStrategies.LRUCache<>(2);
        cache.put(1, "a");
        cache.put(2, "b");
        assertEquals("a", cache.get(1));
        cache.put(3, "c"); // evicts key 2
        assertNull(cache.get(2));
        assertEquals("a", cache.get(1));
        assertEquals("c", cache.get(3));
    }

    @Test
    public void testLRUEviction() {
        CacheStrategies.LRUCache<Integer, Integer> cache = new CacheStrategies.LRUCache<>(3);
        cache.put(1, 1); cache.put(2, 2); cache.put(3, 3);
        cache.get(1); // access 1
        cache.put(4, 4); // evicts 2
        assertNull(cache.get(2));
        assertEquals(1, cache.get(1));
    }

    @Test
    public void testLFUBasic() {
        CacheStrategies.LFUCache<Integer, String> cache = new CacheStrategies.LFUCache<>(2);
        cache.put(1, "a");
        cache.put(2, "b");
        cache.get(1); // freq of 1 = 2
        cache.put(3, "c"); // evicts key 2 (freq=1)
        assertNull(cache.get(2));
        assertEquals("a", cache.get(1));
        assertEquals("c", cache.get(3));
    }

    @Test
    public void testLFUFrequencyTracking() {
        CacheStrategies.LFUCache<Integer, Integer> cache = new CacheStrategies.LFUCache<>(2);
        cache.put(1, 1); cache.put(2, 2);
        cache.get(1); cache.get(1); // 1 has freq 3
        cache.put(3, 3); // evicts 2
        assertNull(cache.get(2));
        assertEquals(1, cache.get(1));
    }

    @Test
    public void testARCBasic() {
        CacheStrategies.ARCCache<Integer, String> cache = new CacheStrategies.ARCCache<>(3);
        cache.put(1, "a");
        cache.put(2, "b");
        assertEquals("a", cache.get(1)); // promote to t2
        cache.put(3, "c");
        assertNotNull(cache.get(1));
    }

    @Test
    public void testLRUClear() {
        CacheStrategies.LRUCache<Integer, Integer> cache = new CacheStrategies.LRUCache<>(2);
        cache.put(1, 1); cache.put(2, 2);
        cache.clear();
        assertEquals(0, cache.size());
        assertNull(cache.get(1));
    }
}
