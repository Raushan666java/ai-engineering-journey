# Day 60: Bloom Filters & Probabilistic Data Structures - System Design Architecture

## 🏗️ Architectural Overview

Probabilistic data structures are **foundational building blocks** for scalable distributed systems. This document covers production architectures, distributed patterns, and real-world implementations.

---

## 1️⃣ Bloom Filter in Distributed Cache Architecture

### Architecture: Multi-Tier Caching with Bloom Filter

```
┌─────────────┐
│   Client    │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────┐
│   Application Server        │
│  ┌────────────────────────┐ │
│  │ Local Bloom Filter     │ │ ◄── In-memory (KB-MB)
│  │ (Cache Key Existence)  │ │
│  └────────┬───────────────┘ │
│           │                 │
│           ▼ (if might exist)│
│  ┌────────────────────────┐ │
│  │  Redis/Memcached       │ │ ◄── Distributed cache
│  │  (L2 Cache)            │ │
│  └────────┬───────────────┘ │
│           │                 │
└───────────┼─────────────────┘
            │ (on cache miss)
            ▼
┌─────────────────────────────┐
│   PostgreSQL/MySQL          │
│   (Source of Truth)         │
└─────────────────────────────┘
```

### Problem Statement
**Challenge**: Checking distributed cache for non-existent keys wastes:
- Network round-trip latency (~1-5ms)
- Cache server CPU cycles
- Connection pool resources

**Solution**: Bloom Filter as **negative cache** in application memory.

### Implementation Pattern

```java
public class BloomFilterCache {
    private final BloomFilter<String> bloomFilter;
    private final RedisClient redis;
    private final Database database;
    
    public BloomFilterCache(int expectedKeys, double fpRate) {
        // Size for 10M keys, 1% false positive → ~12 MB
        this.bloomFilter = new BloomFilter<>(expectedKeys, fpRate);
        this.redis = new RedisClient();
        this.database = new Database();
        
        // Warm up Bloom Filter on startup
        warmUpBloomFilter();
    }
    
    public String get(String key) {
        // Step 1: Check Bloom Filter (in-memory, <1μs)
        if (!bloomFilter.mightContain(key)) {
            // Definitely not in cache or DB → early return
            metrics.increment("bloom_filter_saved_cache_check");
            return null;
        }
        
        // Step 2: Check Redis cache (network, ~1-5ms)
        String value = redis.get(key);
        if (value != null) {
            return value;
        }
        
        // Step 3: Query database (network + disk, ~10-100ms)
        value = database.query(key);
        if (value != null) {
            redis.set(key, value, TTL);
            // Key now exists, Bloom filter already has it
        } else {
            // False positive from Bloom Filter
            metrics.increment("bloom_filter_false_positive");
        }
        
        return value;
    }
    
    public void put(String key, String value) {
        database.insert(key, value);
        redis.set(key, value, TTL);
        bloomFilter.add(key);  // Add to Bloom Filter
    }
    
    private void warmUpBloomFilter() {
        // Load all existing keys from database into Bloom Filter
        database.streamAllKeys().forEach(bloomFilter::add);
    }
}
```

### Performance Metrics
**Without Bloom Filter**:
- Cache hit rate: 80%
- Cache miss rate: 20%
- Non-existent key lookups: 10%
- Wasted cache checks: **10% × network latency**

**With Bloom Filter** (1% FP rate):
- Bloom filter saves: 9.9% of cache checks (99% of non-existent keys)
- False positives: 0.1% (acceptable overhead)
- Latency reduction: ~1ms per saved cache check
- **Total savings**: 9.9% × 1ms = ~100μs per request average

### Bloom Filter Maintenance Strategies

#### Strategy 1: Static Bloom Filter (Immutable)
```java
// Build once on startup from database snapshot
BloomFilter bloom = buildFromSnapshot(database);
// Never modified, eventually becomes stale
```
- ✅ Simple, no synchronization
- ❌ False negatives over time (new keys not in filter)

#### Strategy 2: Append-Only Bloom Filter
```java
// Add new keys as they're written
public void put(String key, String value) {
    database.insert(key, value);
    synchronized (bloomLock) {
        bloomFilter.add(key);  // Thread-safe append
    }
}
```
- ✅ No false negatives (all keys eventually added)
- ❌ No deletions (deleted keys remain in filter → false positives)

#### Strategy 3: Rotating Bloom Filters
```java
class RotatingBloomFilter {
    private BloomFilter current;
    private BloomFilter previous;
    private ScheduledExecutor scheduler;
    
    public RotatingBloomFilter() {
        current = new BloomFilter(10_000_000, 0.01);
        previous = new BloomFilter(10_000_000, 0.01);
        
        // Rotate every 24 hours
        scheduler.scheduleAtFixedRate(() -> {
            previous = current;
            current = buildFreshFromDatabase();
        }, 24, 24, TimeUnit.HOURS);
    }
    
    public boolean mightContain(String key) {
        // Check both current and previous filter
        return current.mightContain(key) || previous.mightContain(key);
    }
}
```
- ✅ Handles deletes (old keys age out after rotation)
- ✅ Controlled false positive rate
- ❌ 2× memory during rotation period

---

## 2️⃣ Count-Min Sketch for Real-Time Analytics

### Architecture: Distributed Heavy Hitters Detection

```
┌──────────────────────────────────────────────┐
│        Edge Servers (Geographically Distributed)        │
├──────────────┬──────────────┬──────────────┐
│   US-East    │   US-West    │   EU-West    │
│ ┌──────────┐ │ ┌──────────┐ │ ┌──────────┐ │
│ │Count-Min │ │ │Count-Min │ │ │Count-Min │ │
│ │ Sketch   │ │ │ Sketch   │ │ │ Sketch   │ │
│ │ (ε=0.01) │ │ │ (ε=0.01) │ │ │ (ε=0.01) │ │
│ └────┬─────┘ │ └────┬─────┘ │ └────┬─────┘ │
└──────┼───────┴──────┼───────┴──────┼───────┘
       │              │              │
       │  (periodic flush every 10s) │
       ▼              ▼              ▼
┌─────────────────────────────────────────────┐
│        Aggregation Service (Kafka)         │
│   ┌───────────────────────────────────┐   │
│   │   Merge Count-Min Sketches        │   │
│   │   (element-wise sum)              │   │
│   └───────────────┬───────────────────┘   │
└───────────────────┼───────────────────────┘
                    ▼
┌─────────────────────────────────────────────┐
│     Analytics Dashboard (Real-time)        │
│   - Top-K trending topics                  │
│   - Heavy hitter detection                 │
│   - Anomaly alerts (traffic spikes)        │
└─────────────────────────────────────────────┘
```

### Use Case: DDoS Detection

**Problem**: Identify source IPs sending >10,000 requests/minute (0.1% of total traffic).

**Solution**: Count-Min Sketch per edge server + aggregation.

```java
public class DDoSDetector {
    private final CountMinSketch<String> sketch;
    private final int threshold;
    private final Set<String> blockedIPs;
    
    public DDoSDetector(double epsilon, double delta, int threshold) {
        this.sketch = new CountMinSketch<>(epsilon, delta);
        this.threshold = threshold;
        this.blockedIPs = new ConcurrentHashSet<>();
    }
    
    public boolean shouldBlock(String ipAddress) {
        // Increment request count
        sketch.increment(ipAddress);
        
        // Check if over threshold
        int estimatedCount = sketch.estimate(ipAddress);
        if (estimatedCount > threshold) {
            if (blockedIPs.add(ipAddress)) {
                // First time blocking this IP
                alertSecurityTeam(ipAddress, estimatedCount);
            }
            return true;
        }
        
        return false;
    }
    
    // Called every 60 seconds to reset sketch
    public void resetWindow() {
        // Create new sketch for next time window
        this.sketch = new CountMinSketch<>(epsilon, delta);
        this.blockedIPs.clear();
    }
}
```

### Merging Count-Min Sketches
**Property**: Element-wise addition of counters preserves frequency guarantees.

```java
public class DistributedCountMinSketch {
    public static CountMinSketch merge(List<CountMinSketch> sketches) {
        // All sketches must have same dimensions (width × depth)
        int width = sketches.get(0).getWidth();
        int depth = sketches.get(0).getDepth();
        
        CountMinSketch merged = new CountMinSketch(width, depth);
        
        // Sum counters element-wise
        for (int i = 0; i < depth; i++) {
            for (int j = 0; j < width; j++) {
                int sum = 0;
                for (CountMinSketch sketch : sketches) {
                    sum += sketch.getCounter(i, j);
                }
                merged.setCounter(i, j, sum);
            }
        }
        
        return merged;
    }
}
```

### Space-Time Trade-offs

| Epsilon (ε) | Delta (δ) | Width | Depth | Memory  | Error Bound        |
|-------------|-----------|-------|-------|---------|---------------------|
| 0.01        | 0.01      | 272   | 5     | 5 KB    | ±1% with 99% conf  |
| 0.001       | 0.01      | 2718  | 5     | 53 KB   | ±0.1% with 99% conf|
| 0.01        | 0.001     | 272   | 7     | 7 KB    | ±1% with 99.9% conf|

**Guideline**: Set ε based on acceptable error, δ based on confidence level.

---

## 3️⃣ HyperLogLog for Distributed Unique Counting

### Architecture: Cross-Region Unique Visitor Tracking

```
┌────────────────────────────────────────────────┐
│            CDN Edge Locations                  │
├─────────────┬─────────────┬─────────────┐
│  SF Edge    │  NY Edge    │  London Edge│
│ ┌─────────┐ │ ┌─────────┐ │ ┌─────────┐│
│ │  HLL-1  │ │ │  HLL-2  │ │ │  HLL-3  ││
│ │(14-bit) │ │ │(14-bit) │ │ │(14-bit) ││
│ │ 16 KB   │ │ │ 16 KB   │ │ │ 16 KB   ││
│ └────┬────┘ │ └────┬────┘ │ └────┬────┘│
└──────┼──────┴──────┼──────┴──────┼──────┘
       │             │             │
       │    (hourly flush to S3)   │
       ▼             ▼             ▼
┌────────────────────────────────────────────────┐
│         S3 Bucket (HLL Snapshots)             │
│  /2025/01/15/01/sf.hll                        │
│  /2025/01/15/01/ny.hll                        │
│  /2025/01/15/01/london.hll                    │
└────────────────┬───────────────────────────────┘
                 │
                 ▼ (Spark job runs hourly)
┌────────────────────────────────────────────────┐
│      Apache Spark / EMR Cluster               │
│   ┌──────────────────────────────────┐       │
│   │  Read all HLLs for time window   │       │
│   │  Merge: max(registers)           │       │
│   │  Compute global unique count     │       │
│   └──────────────┬───────────────────┘       │
└──────────────────┼────────────────────────────┘
                   ▼
┌────────────────────────────────────────────────┐
│         Analytics Database (BigQuery)         │
│  timestamp        | unique_visitors           │
│  2025-01-15 01:00 | 15,234,892                │
│  2025-01-15 02:00 | 14,892,103                │
└────────────────────────────────────────────────┘
```

### Implementation: Redis-Based HyperLogLog

**Redis Commands**:
```bash
# Add user IDs to HyperLogLog
PFADD daily:2025-01-15 "user_123" "user_456" "user_789"
# Returns: 1 (HLL modified) or 0 (no change)

# Get unique count estimate
PFCOUNT daily:2025-01-15
# Returns: 3 (approximate count)

# Merge multiple HyperLogLogs
PFMERGE weekly:2025-W03 daily:2025-01-15 daily:2025-01-16 daily:2025-01-17
# Merges 3 daily HLLs into weekly aggregate

PFCOUNT weekly:2025-W03
# Returns unique users across entire week
```

**Application Code**:
```java
public class UniqueVisitorTracker {
    private final RedisClient redis;
    
    public void trackVisitor(String userId, LocalDate date) {
        String dailyKey = "daily:" + date;
        redis.pfadd(dailyKey, userId);
        
        // Set expiration (e.g., 90 days)
        redis.expire(dailyKey, Duration.ofDays(90));
    }
    
    public long getDailyUnique(LocalDate date) {
        String dailyKey = "daily:" + date;
        return redis.pfcount(dailyKey);
    }
    
    public long getWeeklyUnique(LocalDate weekStart) {
        String weeklyKey = "weekly:" + weekStart;
        
        // Merge 7 daily HyperLogLogs
        List<String> dailyKeys = new ArrayList<>();
        for (int i = 0; i < 7; i++) {
            dailyKeys.add("daily:" + weekStart.plusDays(i));
        }
        
        redis.pfmerge(weeklyKey, dailyKeys.toArray(new String[0]));
        redis.expire(weeklyKey, Duration.ofDays(30));
        
        return redis.pfcount(weeklyKey);
    }
}
```

### HyperLogLog in BigQuery

**SQL Example**:
```sql
-- Exact count (slow, expensive for large tables)
SELECT COUNT(DISTINCT user_id) FROM events
WHERE date = '2025-01-15';

-- Approximate count with HyperLogLog (fast, cheap)
SELECT APPROX_COUNT_DISTINCT(user_id) FROM events
WHERE date = '2025-01-15';
```

**Performance Comparison**:
- Exact `COUNT(DISTINCT)`: Scans all rows, shuffles data → **minutes**
- `APPROX_COUNT_DISTINCT`: Sketches in parallel, merges → **seconds**
- **100× speedup** for queries on petabyte-scale tables

### Multi-Dimensional Counting

**Problem**: Count unique users per (country, device_type) combination.

**Naive Solution**: 
```sql
SELECT country, device_type, COUNT(DISTINCT user_id)
FROM events
GROUP BY country, device_type;
```
- Requires grouping + exact distinct count → **very slow**

**HyperLogLog Solution**:
```java
public class MultiDimensionalHLL {
    private final Map<Tuple<String, String>, HyperLogLog<String>> sketches;
    
    public void trackEvent(String userId, String country, String deviceType) {
        Tuple<String, String> key = new Tuple<>(country, deviceType);
        
        sketches.computeIfAbsent(key, k -> new HyperLogLog<>(14))
                .add(userId);
    }
    
    public Map<Tuple<String, String>, Long> getCounts() {
        Map<Tuple<String, String>, Long> counts = new HashMap<>();
        
        for (Map.Entry<Tuple<String, String>, HyperLogLog<String>> entry : sketches.entrySet()) {
            counts.put(entry.getKey(), entry.getValue().count());
        }
        
        return counts;
    }
}
```

**Memory Efficiency**:
- 100 countries × 10 device types = 1,000 combinations
- Each HyperLogLog: 16 KB (precision=14)
- **Total memory**: 1,000 × 16 KB = **16 MB** (vs GB for exact HashSets)

---

## 4️⃣ Cuckoo Filter for Dynamic Membership

### Architecture: Distributed Cache Admission Policy

```
┌────────────────────────────────────────────┐
│        Application Server (Stateful)      │
│  ┌──────────────────────────────────────┐ │
│  │   Cuckoo Filter (10M capacity)       │ │
│  │   - Tracks "hot" items (frequently   │ │
│  │     accessed in last 5 minutes)      │ │
│  │   - Supports insertion + deletion    │ │
│  └──────────────┬───────────────────────┘ │
│                 │                         │
│                 ▼                         │
│  ┌──────────────────────────────────────┐ │
│  │   LRU Cache (1 GB capacity)          │ │
│  │   - Only admits items in Cuckoo      │ │
│  │   - On eviction, delete from Cuckoo  │ │
│  └──────────────┬───────────────────────┘ │
└─────────────────┼──────────────────────────┘
                  │ (on cache miss)
                  ▼
┌────────────────────────────────────────────┐
│          Backend Database                 │
└────────────────────────────────────────────┘
```

### Problem: Cache Pollution

**Challenge**: One-time access patterns (e.g., bot crawls) evict frequently-used items from cache.

**Solution**: Two-tier admission policy with Cuckoo Filter.

```java
public class SmartCache {
    private final CuckooFilter<String> admissionFilter;
    private final LRUCache<String, String> cache;
    private final Map<String, Integer> accessCounts;
    
    public SmartCache(int cacheSize, int filterCapacity) {
        this.admissionFilter = new CuckooFilter<>(filterCapacity);
        this.cache = new LRUCache<>(cacheSize);
        this.accessCounts = new ConcurrentHashMap<>();
    }
    
    public String get(String key) {
        // Check cache first
        String value = cache.get(key);
        if (value != null) {
            return value;
        }
        
        // Cache miss: fetch from database
        value = database.query(key);
        
        // Track access frequency
        int count = accessCounts.merge(key, 1, Integer::sum);
        
        // Admission policy: only cache if accessed 2+ times
        if (count >= 2) {
            if (!admissionFilter.mightContain(key)) {
                // First time being considered for cache
                admissionFilter.insert(key);
            } else {
                // Already in admission filter, now cache it
                String evicted = cache.put(key, value);
                if (evicted != null) {
                    // Remove evicted key from filter
                    admissionFilter.delete(evicted);
                    accessCounts.remove(evicted);
                }
            }
        }
        
        return value;
    }
    
    // Periodic cleanup (e.g., every 5 minutes)
    public void resetAdmissionFilter() {
        // Age out old entries
        admissionFilter = new CuckooFilter<>(filterCapacity);
        accessCounts.clear();
    }
}
```

### Benefits
- **Reduces cache pollution**: One-time requests don't evict hot items
- **Dynamic membership**: Cuckoo Filter supports deletion (unlike Bloom Filter)
- **Low overhead**: Cuckoo Filter ~10 MB for 10M items vs cache's GBs

---

## 5️⃣ Hybrid Architecture: Bloom + HyperLogLog

### Use Case: Ad Frequency Capping

**Requirements**:
1. Show ad to user at most 3 times per day
2. Track unique users who saw ad (for billing)
3. Scale to 1 billion users

**Naive Solution**:
```java
Map<String, Integer> userImpressions; // O(n) space
Set<String> uniqueUsers; // O(n) space
```
- **Memory**: 1B users × 64 bytes = **64 GB** 😱

**Hybrid Solution**:
```java
public class FrequencyCappedAds {
    private final CountMinSketch<String> impressionCount;
    private final HyperLogLog<String> uniqueReach;
    private final int maxImpressions;
    
    public FrequencyCappedAds(int maxImpressions) {
        this.impressionCount = new CountMinSketch<>(0.01, 0.01); // ~5 KB
        this.uniqueReach = new HyperLogLog<>(14); // ~16 KB
        this.maxImpressions = maxImpressions;
    }
    
    public boolean shouldShowAd(String userId, String adId) {
        String key = adId + ":" + userId;
        
        // Check if user exceeded frequency cap
        int count = impressionCount.estimate(key);
        if (count >= maxImpressions) {
            return false; // User has seen ad too many times
        }
        
        // Show ad and update counters
        impressionCount.increment(key);
        uniqueReach.add(userId);
        
        return true;
    }
    
    public long getUniqueReach(String adId) {
        return uniqueReach.count();
    }
}
```

**Memory**:
- Count-Min Sketch: 5 KB (for all ad-user pairs!)
- HyperLogLog: 16 KB (for unique count)
- **Total: 21 KB** vs 64 GB for exact structures 🎉
- **3 million times smaller**!

---

## 6️⃣ Production Monitoring & Observability

### Key Metrics to Track

```java
public class ProbabilisticMetrics {
    // Bloom Filter Metrics
    @Gauge
    public double bloomFilterFillRatio() {
        return bloomFilter.getBitsSet() / (double) bloomFilter.getBitSize();
    }
    
    @Counter
    public long bloomFilterFalsePositives;
    
    @Counter
    public long bloomFilterSavedQueries;
    
    // Count-Min Sketch Metrics
    @Gauge
    public double countMinSketchMemoryMB() {
        return (sketch.getWidth() * sketch.getDepth() * 4) / (1024.0 * 1024);
    }
    
    @Timer
    public void recordEstimateLatency(Duration latency);
    
    // HyperLogLog Metrics
    @Gauge
    public double hyperLogLogStandardError() {
        return 1.04 / Math.sqrt(hll.getNumRegisters());
    }
    
    @Counter
    public long hyperLogLogMergeOperations;
    
    // Cuckoo Filter Metrics
    @Gauge
    public double cuckooFilterLoadFactor() {
        return cuckooFilter.getLoadFactor();
    }
    
    @Counter
    public long cuckooFilterInsertionFailures;
}
```

### Alerting Thresholds

| Metric                          | Warning | Critical | Action                          |
|---------------------------------|---------|----------|---------------------------------|
| Bloom Filter Fill Ratio         | >70%    | >85%     | Rebuild with larger size        |
| Bloom Filter FP Rate            | >3%     | >5%      | Investigate hash distribution   |
| Cuckoo Filter Load Factor       | >90%    | >95%     | Increase capacity or rehash     |
| HyperLogLog Merge Lag           | >5 min  | >15 min  | Scale aggregation service       |
| Count-Min Sketch Counter Overflow| >50%   | >80%     | Reset or use larger counters    |

---

## 🎯 Design Patterns Summary

### Pattern 1: Negative Cache (Bloom Filter)
**When**: Avoid expensive lookups for non-existent keys
**Example**: Database query optimization, CDN 404 caching
**Trade-off**: False positives → some wasted lookups

### Pattern 2: Heavy Hitter Detection (Count-Min Sketch)
**When**: Find top-K most frequent items in stream
**Example**: DDoS detection, trending topics, hot keys
**Trade-off**: Overestimation → need min-heap to track actual top-K

### Pattern 3: Cardinality Estimation (HyperLogLog)
**When**: Count unique elements at massive scale
**Example**: Unique visitors, A/B testing, database statistics
**Trade-off**: ~1% error → not suitable for exact billing

### Pattern 4: Dynamic Membership (Cuckoo Filter)
**When**: Need set membership with insertions + deletions
**Example**: Cache admission policies, dynamic firewall rules
**Trade-off**: Insertion failures at high load → monitor load factor

### Pattern 5: Distributed Aggregation
**When**: Merge probabilistic structures across nodes
**Example**: Multi-region analytics, distributed counters
**Trade-off**: Network overhead for periodic merging

---

## 📚 Real-World Case Studies

### 1. Google Chrome Safe Browsing
- **Challenge**: Check URLs against millions of malicious sites
- **Solution**: 2-level Bloom Filter
  - Local Bloom Filter (2 MB): Fast rejection of safe URLs
  - Server check only for Bloom "maybe" hits
- **Result**: 99% of checks done locally, <1ms latency

### 2. Apache Cassandra SSTable Filtering
- **Challenge**: Avoid disk reads for keys not in SSTable
- **Solution**: Bloom Filter per SSTable (~1 MB)
- **Result**: 95% reduction in disk seeks for non-existent keys

### 3. Reddit Unique Visitor Counting
- **Challenge**: Track daily uniques across 50M+ users
- **Solution**: HyperLogLog in Redis (12 KB per day)
- **Result**: 99.9% accuracy, 5000× memory reduction

### 4. Twitter Trending Topics
- **Challenge**: Find top-100 hashtags from 500M tweets/day
- **Solution**: Count-Min Sketch + min-heap
- **Result**: Real-time updates (<1s latency), constant memory

---

**Key Takeaway**: Probabilistic structures enable **web-scale systems** by trading small, bounded error for massive space savings. Always design for observability and monitor error rates!
