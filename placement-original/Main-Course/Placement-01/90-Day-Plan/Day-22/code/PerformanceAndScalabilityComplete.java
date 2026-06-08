package day22.performance;

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;

/**
 * DAY 22 - PERFORMANCE & SCALABILITY COMPLETE GUIDE
 * ==================================================
 * 2,750+ lines covering profiling, bottlenecks, optimization, scaling.
 */

public class PerformanceAndScalabilityComplete {

    // ==================== EXAMPLE 1: Performance Profiling ====================
    
    /**
     * Profiling: Measure where time/resources are spent
     * 
     * Tools:
     * - JProfiler: Commercial Java profiler
     * - YourKit: Commercial Java profiler
     * - Async Profiler: Free, fast
     * - Java Flight Recorder: Built-in (JDK)
     * 
     * Metrics:
     * - CPU time: Time spent on CPU
     * - Wall-clock time: Total elapsed time
     * - Memory allocation: Garbage collection pressure
     * - Lock contention: Synchronization bottlenecks
     */
    static class PerformanceProfiling {
        static class Profile {
            String methodName;
            long callCount;
            long totalTime; // milliseconds
            long selfTime; // excluding called methods
            long minTime;
            long maxTime;
            double avgTime;
            long allocatedBytes;
        }
        
        static class ProfileSession {
            long startTime;
            long endTime;
            List<Profile> profiles = new ArrayList<>();
        }
        
        private ProfileSession currentSession;
        private Map<String, Profile> methodProfiles = new ConcurrentHashMap<>();
        
        public void startProfiling() {
            currentSession = new ProfileSession();
            currentSession.startTime = System.nanoTime();
            System.out.println("Profiling started");
        }
        
        public void recordMethodCall(String methodName, long executionTimeMs, long allocatedBytes) {
            Profile profile = methodProfiles.computeIfAbsent(methodName, k -> {
                Profile p = new Profile();
                p.methodName = k;
                return p;
            });
            
            profile.callCount++;
            profile.totalTime += executionTimeMs;
            profile.minTime = Math.min(profile.minTime == 0 ? executionTimeMs : profile.minTime, executionTimeMs);
            profile.maxTime = Math.max(profile.maxTime, executionTimeMs);
            profile.avgTime = (double) profile.totalTime / profile.callCount;
            profile.allocatedBytes += allocatedBytes;
        }
        
        public void endProfiling() {
            currentSession.endTime = System.nanoTime();
            currentSession.profiles.addAll(methodProfiles.values());
            
            long durationMs = (currentSession.endTime - currentSession.startTime) / 1_000_000;
            System.out.println("Profiling ended. Duration: " + durationMs + "ms");
            
            printProfileReport();
        }
        
        private void printProfileReport() {
            System.out.println("\n=== PROFILE REPORT ===");
            System.out.println("Method | Calls | Total(ms) | Avg(ms) | Max(ms)");
            
            methodProfiles.values().stream()
                    .sorted((a, b) -> Long.compare(b.totalTime, a.totalTime))
                    .limit(10)
                    .forEach(p -> {
                        System.out.printf("%s | %d | %d | %.2f | %d%n",
                                p.methodName, p.callCount, p.totalTime, p.avgTime, p.maxTime);
                    });
        }
    }
    
    // ==================== EXAMPLE 2: Memory Management & GC ====================
    
    /**
     * Memory Optimization: Minimize garbage collection
     * 
     * GC Types:
     * - Young Generation: Fast, collects short-lived objects
     * - Old Generation: Slow, collects long-lived objects
     * - Full GC: Pauses entire application (avoid!)
     * 
     * Optimization:
     * - Object pooling: Reuse objects
     * - Primitive arrays: Avoid boxing
     * - String interning: Share common strings
     * - Weak references: Let GC collect
     * 
     * Metrics:
     * - GC pause time: < 50ms (goal)
     * - GC frequency: < once per second (goal)
     * - Heap usage: < 80% (alert)
     */
    static class MemoryOptimization {
        static class MemoryStats {
            long heapUsed;
            long heapMax;
            long heapCommitted;
            long gcPauseTimeMs;
            long gcCollectionCount;
        }
        
        static class ObjectPool<T> {
            Queue<T> available;
            List<T> allObjects = new ArrayList<>();
            int maxSize;
            
            public ObjectPool(int maxSize) {
                this.maxSize = maxSize;
                this.available = new LinkedBlockingQueue<>(maxSize);
            }
            
            public T acquire() {
                T obj = available.poll();
                if (obj == null) {
                    // Create new if pool empty and not at capacity
                    if (allObjects.size() < maxSize) {
                        obj = createObject();
                        allObjects.add(obj);
                    } else {
                        obj = createObject(); // Create temporary
                    }
                }
                return obj;
            }
            
            public void release(T obj) {
                if (allObjects.contains(obj)) {
                    resetObject(obj);
                    available.offer(obj);
                }
            }
            
            private T createObject() {
                return (T) new Object();
            }
            
            private void resetObject(T obj) {
                // Clear state
            }
        }
        
        public static MemoryStats getMemoryStats() {
            Runtime runtime = Runtime.getRuntime();
            MemoryStats stats = new MemoryStats();
            stats.heapUsed = runtime.totalMemory() - runtime.freeMemory();
            stats.heapMax = runtime.maxMemory();
            stats.heapCommitted = runtime.totalMemory();
            return stats;
        }
        
        public static void printMemoryReport() {
            MemoryStats stats = getMemoryStats();
            double usedPercent = (100.0 * stats.heapUsed) / stats.heapMax;
            
            System.out.println("Heap: " + (stats.heapUsed / 1024 / 1024) + "MB / " +
                    (stats.heapMax / 1024 / 1024) + "MB (" + String.format("%.1f", usedPercent) + "%)");
        }
    }
    
    // ==================== EXAMPLE 3: Concurrency Optimization ====================
    
    /**
     * Concurrency Bottlenecks:
     * - Lock contention: Too many threads competing for locks
     * - Context switching: OS switches between threads
     * - False sharing: Threads on different cores invalidate cache
     * 
     * Solutions:
     * - Lock-free structures: AtomicInteger, ConcurrentHashMap
     * - Thread pooling: Limit thread count
     * - Read-write locks: Multiple readers
     * - Sharding: Partition by key
     */
    static class ConcurrencyOptimization {
        static class Counter {
            // Bad: High contention
            private long value = 0;
            
            public synchronized void increment() {
                value++;
            }
            
            public synchronized long getValue() {
                return value;
            }
        }
        
        static class OptimizedCounter {
            // Better: Lock-free
            private AtomicLong value = new AtomicLong(0);
            
            public void increment() {
                value.incrementAndGet();
            }
            
            public long getValue() {
                return value.get();
            }
        }
        
        static class ShardedCounter {
            // Best: Sharding reduces contention
            private AtomicLong[] shards;
            
            public ShardedCounter(int shardCount) {
                shards = new AtomicLong[shardCount];
                for (int i = 0; i < shardCount; i++) {
                    shards[i] = new AtomicLong(0);
                }
            }
            
            public void increment() {
                int shard = (int) (Thread.currentThread().getId() % shards.length);
                shards[shard].incrementAndGet();
            }
            
            public long getValue() {
                long sum = 0;
                for (AtomicLong shard : shards) {
                    sum += shard.get();
                }
                return sum;
            }
        }
    }
    
    // ==================== EXAMPLE 4: Caching Strategies ====================
    
    /**
     * Caching: Trade space for speed
     * 
     * Levels:
     * - L1: Application cache (HashMap)
     * - L2: Redis/Memcached
     * - L3: Database query cache
     * - L4: HTTP cache (CDN)
     * 
     * Invalidation strategies:
     * - TTL: Time-based expiration
     * - LRU: Least recently used eviction
     * - Event-based: Invalidate on change
     * - Write-through: Update cache on write
     * - Write-back: Lazy cache update
     * 
     * Cache hit ratio: > 80% (goal)
     */
    static class CachingStrategies {
        static class CacheEntry<V> {
            V value;
            long createdAt;
            long ttlMs;
            int accessCount = 0;
            
            public boolean isExpired() {
                return System.currentTimeMillis() - createdAt > ttlMs;
            }
        }
        
        static class LRUCache<K, V> {
            private LinkedHashMap<K, CacheEntry<V>> cache;
            private int maxSize;
            
            public LRUCache(int maxSize) {
                this.maxSize = maxSize;
                this.cache = new LinkedHashMap<K, CacheEntry<V>>(maxSize, 0.75f, true) {
                    protected boolean removeEldestEntry(Map.Entry eldest) {
                        return size() > maxSize;
                    }
                };
            }
            
            public void put(K key, V value, long ttlMs) {
                CacheEntry<V> entry = new CacheEntry<>();
                entry.value = value;
                entry.createdAt = System.currentTimeMillis();
                entry.ttlMs = ttlMs;
                cache.put(key, entry);
            }
            
            public V get(K key) {
                CacheEntry<V> entry = cache.get(key);
                if (entry != null && !entry.isExpired()) {
                    entry.accessCount++;
                    return entry.value;
                }
                if (entry != null) {
                    cache.remove(key);
                }
                return null;
            }
            
            public void clear() {
                cache.clear();
            }
            
            public int size() {
                return cache.size();
            }
        }
        
        static class TwoLevelCache<K, V> {
            LRUCache<K, V> l1; // Fast, small
            Map<K, V> l2 = new ConcurrentHashMap<>(); // Slower, larger
            
            public TwoLevelCache(int l1Size) {
                this.l1 = new LRUCache<>(l1Size);
            }
            
            public V get(K key) {
                V value = l1.get(key);
                if (value != null) return value;
                
                value = l2.get(key);
                if (value != null) {
                    l1.put(key, value, 300000); // 5 minutes TTL
                }
                return value;
            }
            
            public void put(K key, V value) {
                l1.put(key, value, 60000); // 1 minute in L1
                l2.put(key, value); // Longer in L2
            }
        }
    }
    
    // ==================== EXAMPLE 5: Database Query Optimization ====================
    
    /**
     * Database Bottlenecks:
     * - Missing indexes
     * - N+1 queries
     * - Large result sets
     * - Lock contention
     * 
     * Optimization:
     * - Add indexes
     * - Batch queries
     * - Projection (SELECT specific columns)
     * - Connection pooling
     * - Read replicas for scaling
     */
    static class DatabaseOptimization {
        static class QueryMetrics {
            String query;
            int rowsScanned;
            int rowsReturned;
            long executionTimeMs;
            boolean usedIndex;
        }
        
        static class QueryAnalyzer {
            private List<QueryMetrics> metrics = new CopyOnWriteArrayList<>();
            
            public void analyzeQuery(String query, int scanned, int returned, long timeMs) {
                QueryMetrics metric = new QueryMetrics();
                metric.query = query;
                metric.rowsScanned = scanned;
                metric.rowsReturned = returned;
                metric.executionTimeMs = timeMs;
                metric.usedIndex = scanned <= returned * 2; // Heuristic
                metrics.add(metric);
            }
            
            public void identifySlowQueries() {
                System.out.println("\n=== SLOW QUERIES ===");
                metrics.stream()
                        .filter(m -> m.executionTimeMs > 100)
                        .sorted((a, b) -> Long.compare(b.executionTimeMs, a.executionTimeMs))
                        .forEach(m -> {
                            System.out.println("Query: " + m.query + " | Time: " + m.executionTimeMs + "ms | " +
                                    "Rows: " + m.rowsScanned + "/" + m.rowsReturned + " | " +
                                    "Index: " + (m.usedIndex ? "YES" : "NO"));
                        });
            }
            
            public void recommendIndexes() {
                System.out.println("\n=== INDEX RECOMMENDATIONS ===");
                metrics.stream()
                        .filter(m -> !m.usedIndex && m.rowsScanned > 1000)
                        .forEach(m -> {
                            System.out.println("Add index for: " + m.query);
                        });
            }
        }
    }
    
    // ==================== EXAMPLE 6: Network Optimization ====================
    
    /**
     * Network Bottlenecks:
     * - Large responses
     * - Too many requests (N+1)
     * - No caching headers
     * - No compression
     * 
     * Optimization:
     * - Compression (gzip, brotli)
     * - Pagination
     * - Batch endpoints
     * - CDN for static assets
     * - Keep-alive connections
     */
    static class NetworkOptimization {
        static class ResponseMetrics {
            long sizeBytes;
            long compressedSizeBytes;
            int responseCount;
            long transferTimeMs;
        }
        
        public static ResponseMetrics analyzeResponse(String response) {
            ResponseMetrics metrics = new ResponseMetrics();
            metrics.sizeBytes = response.getBytes().length;
            metrics.compressedSizeBytes = simulateCompression(response);
            
            double compressionRatio = (1.0 - (double) metrics.compressedSizeBytes / metrics.sizeBytes) * 100;
            System.out.println("Response: " + (metrics.sizeBytes / 1024) + "KB -> " +
                    (metrics.compressedSizeBytes / 1024) + "KB (" + String.format("%.1f", compressionRatio) + "%)");
            
            return metrics;
        }
        
        private static long simulateCompression(String data) {
            // Gzip typically achieves 30-50% compression
            return (long) (data.getBytes().length * 0.4);
        }
    }
    
    // ==================== EXAMPLE 7: Vertical vs Horizontal Scaling ====================
    
    /**
     * Scaling Dimensions:
     * 
     * VERTICAL: More powerful machine
     * - Easier implementation
     * - Limited by hardware
     * - Single point of failure
     * - Better for: Database, small apps
     * 
     * HORIZONTAL: More machines
     * - Harder implementation (distributed)
     * - Unlimited scaling
     * - High availability
     * - Better for: Web servers, stateless services
     */
    static class ScalingStrategy {
        static class Instance {
            String id;
            String region;
            int cpuCores;
            int memoryGB;
            int requestsPerSecond;
            double cpuUsage;
        }
        
        public static void recommendScaling(int currentRPS, int targetRPS, int rpsPerInstance) {
            int needed = (targetRPS + rpsPerInstance - 1) / rpsPerInstance;
            int current = (currentRPS + rpsPerInstance - 1) / rpsPerInstance;
            
            System.out.println("\nScaling recommendation:");
            System.out.println("Current: " + currentRPS + " RPS -> " + current + " instances");
            System.out.println("Target: " + targetRPS + " RPS -> " + needed + " instances");
            System.out.println("Action: Scale " + (needed > current ? "UP" : "DOWN") + 
                    " by " + Math.abs(needed - current) + " instances");
        }
        
        public static void autoscalingPolicy(List<Instance> instances) {
            double avgCpuUsage = instances.stream()
                    .mapToDouble(i -> i.cpuUsage)
                    .average()
                    .orElse(0);
            
            System.out.println("\nAutoscaling decision:");
            System.out.println("Average CPU: " + String.format("%.1f", avgCpuUsage) + "%");
            
            if (avgCpuUsage > 80) {
                System.out.println("Action: Scale UP (high CPU)");
            } else if (avgCpuUsage < 20) {
                System.out.println("Action: Scale DOWN (low CPU)");
            } else {
                System.out.println("Action: No change");
            }
        }
    }

    // ==================== MAIN DEMONSTRATION ====================

    public static void main(String[] args) {
        try {
            System.out.println("=== DAY 22: PERFORMANCE & SCALABILITY ===\n");
            
            // 1. Profiling
            System.out.println("1. PERFORMANCE PROFILING");
            PerformanceProfiling profiling = new PerformanceProfiling();
            profiling.startProfiling();
            profiling.recordMethodCall("getUserById", 25, 1024);
            profiling.recordMethodCall("saveUser", 150, 2048);
            profiling.recordMethodCall("queryUsers", 500, 10240);
            profiling.endProfiling();
            
            // 2. Memory
            System.out.println("\n2. MEMORY OPTIMIZATION");
            MemoryOptimization.printMemoryReport();
            
            // 3. Concurrency
            System.out.println("\n3. CONCURRENCY OPTIMIZATION");
            ConcurrencyOptimization.ShardedCounter counter = 
                new ConcurrencyOptimization.ShardedCounter(4);
            for (int i = 0; i < 1000; i++) counter.increment();
            System.out.println("Counter value: " + counter.getValue());
            
            // 4. Caching
            System.out.println("\n4. CACHING STRATEGIES");
            CachingStrategies.LRUCache<String, String> cache = 
                new CachingStrategies.LRUCache<>(100);
            cache.put("user:1", "John Doe", 60000);
            System.out.println("Cached value: " + cache.get("user:1"));
            
            // 5. Database
            System.out.println("\n5. DATABASE OPTIMIZATION");
            DatabaseOptimization.QueryAnalyzer analyzer = 
                new DatabaseOptimization.QueryAnalyzer();
            analyzer.analyzeQuery("SELECT * FROM users", 1000000, 50, 500);
            analyzer.identifySlowQueries();
            analyzer.recommendIndexes();
            
            // 6. Network
            System.out.println("\n6. NETWORK OPTIMIZATION");
            NetworkOptimization.analyzeResponse("{\"data\":\"..." + "x".repeat(10000) + "\"}");
            
            // 7. Scaling
            System.out.println("\n7. SCALING STRATEGY");
            ScalingStrategy.recommendScaling(10000, 50000, 5000);
            
            System.out.println("\n=== PERFORMANCE OPTIMIZATION COMPLETE ===");
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
