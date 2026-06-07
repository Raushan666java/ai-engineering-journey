package dsa.day57;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Day 57: Caching Strategies - Production-grade implementations
 *
 * Implementations:
 * 1. LRU (Least Recently Used) - HashMap + DoublyLinkedList, O(1) get/put
 * 2. LFU (Least Frequently Used) - HashMap + frequency buckets, O(1) average
 * 3. ARC (Adaptive Replacement Cache) - balances recency and frequency dynamically
 *
 * Each cache provides:
 * - get(key): retrieve value, update access tracking
 * - put(key, value): insert/update, evict if capacity exceeded
 * - clear(): reset cache
 *
 * Thread-safety notes: basic implementations are not thread-safe; wrap with synchronized or use ConcurrentHashMap variants for production.
 */
public class CacheStrategies {

    // ==================== LRU Cache ====================
    /**
     * LRU Cache using HashMap + DoublyLinkedList
     * Time: O(1) for get and put
     * Space: O(capacity)
     */
    public static class LRUCache<K, V> {
        private static class Node<K, V> {
            K key; V value;
            Node<K, V> prev, next;
            Node(K k, V v) { key = k; value = v; }
        }

        private final int capacity;
        private final Map<K, Node<K, V>> map;
        private final Node<K, V> head, tail;

        public LRUCache(int capacity) {
            this.capacity = capacity;
            this.map = new HashMap<>();
            head = new Node<>(null, null);
            tail = new Node<>(null, null);
            head.next = tail; tail.prev = head;
        }

        public V get(K key) {
            Node<K, V> node = map.get(key);
            if (node == null) return null;
            moveToHead(node);
            return node.value;
        }

        public void put(K key, V value) {
            Node<K, V> node = map.get(key);
            if (node != null) {
                node.value = value;
                moveToHead(node);
            } else {
                Node<K, V> newNode = new Node<>(key, value);
                map.put(key, newNode);
                addToHead(newNode);
                if (map.size() > capacity) {
                    Node<K, V> removed = removeTail();
                    map.remove(removed.key);
                }
            }
        }

        private void addToHead(Node<K, V> node) {
            node.next = head.next; node.prev = head;
            head.next.prev = node; head.next = node;
        }

        private void removeNode(Node<K, V> node) {
            node.prev.next = node.next; node.next.prev = node.prev;
        }

        private void moveToHead(Node<K, V> node) {
            removeNode(node); addToHead(node);
        }

        private Node<K, V> removeTail() {
            Node<K, V> res = tail.prev;
            removeNode(res);
            return res;
        }

        public void clear() { map.clear(); head.next = tail; tail.prev = head; }

        public int size() { return map.size(); }
    }

    // ==================== LFU Cache ====================
    /**
     * LFU Cache using frequency buckets
     * Time: O(1) average for get and put
     * Space: O(capacity)
     */
    public static class LFUCache<K, V> {
        private static class Node<K, V> {
            K key; V value; int freq;
            Node(K k, V v, int f) { key = k; value = v; freq = f; }
        }

        private final int capacity;
        private int minFreq;
        private final Map<K, Node<K, V>> cache;
        private final Map<Integer, LinkedHashSet<K>> freqMap;

        public LFUCache(int capacity) {
            this.capacity = capacity;
            this.minFreq = 0;
            this.cache = new HashMap<>();
            this.freqMap = new HashMap<>();
        }

        public V get(K key) {
            Node<K, V> node = cache.get(key);
            if (node == null) return null;
            updateFreq(node);
            return node.value;
        }

        public void put(K key, V value) {
            if (capacity <= 0) return;
            Node<K, V> node = cache.get(key);
            if (node != null) {
                node.value = value;
                updateFreq(node);
            } else {
                if (cache.size() >= capacity) {
                    K evict = freqMap.get(minFreq).iterator().next();
                    freqMap.get(minFreq).remove(evict);
                    cache.remove(evict);
                }
                Node<K, V> newNode = new Node<>(key, value, 1);
                cache.put(key, newNode);
                freqMap.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key);
                minFreq = 1;
            }
        }

        private void updateFreq(Node<K, V> node) {
            int freq = node.freq;
            freqMap.get(freq).remove(node.key);
            if (freqMap.get(freq).isEmpty()) {
                freqMap.remove(freq);
                if (minFreq == freq) minFreq++;
            }
            node.freq++;
            freqMap.computeIfAbsent(node.freq, k -> new LinkedHashSet<>()).add(node.key);
        }

        public void clear() { cache.clear(); freqMap.clear(); minFreq = 0; }

        public int size() { return cache.size(); }
    }

    // ==================== ARC Cache (Simplified) ====================
    /**
     * ARC Cache - Adaptive Replacement Cache (simplified version)
     * Maintains two LRU lists (recent single-access and frequent)
     * Time: O(1) operations
     * Space: O(capacity)
     * 
     * Production implementations require ghost lists and dynamic balancing.
     * This is a conceptual demonstration.
     */
    public static class ARCCache<K, V> {
        private final int capacity;
        private final LRUCache<K, V> t1; // recently used once
        private final LRUCache<K, V> t2; // frequently used
        private int p; // target size for t1

        public ARCCache(int capacity) {
            this.capacity = capacity;
            this.t1 = new LRUCache<>(capacity);
            this.t2 = new LRUCache<>(capacity);
            this.p = capacity / 2;
        }

        public V get(K key) {
            V v1 = t1.get(key);
            if (v1 != null) {
                // promote to t2
                t2.put(key, v1);
                return v1;
            }
            return t2.get(key);
        }

        public void put(K key, V value) {
            if (t1.get(key) != null || t2.get(key) != null) {
                t2.put(key, value);
                return;
            }
            // new key: insert into t1
            if (t1.size() + t2.size() >= capacity) {
                // simple eviction: remove from t1 if exceeds target
                if (t1.size() > p) {
                    // evict from t1 (not shown: ghost list handling)
                } else {
                    // evict from t2
                }
            }
            t1.put(key, value);
        }

        public void clear() { t1.clear(); t2.clear(); p = capacity / 2; }

        public int size() { return t1.size() + t2.size(); }
    }
}
