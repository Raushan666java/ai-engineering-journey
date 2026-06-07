# Day 60: Bloom Filters & Probabilistic Data Structures - Study Notes

## 📚 Core Concepts

### What Are Probabilistic Data Structures?
Data structures that **trade exactness for space efficiency** using randomization and hashing. Unlike exact structures (HashSet, TreeSet), they provide:
- **Approximate answers** with quantifiable error bounds
- **Sub-linear space complexity** (often O(log n) or O(1) relative to data size)
- **Fast operations** (typically O(1) or O(k) where k is small constant)

**Key Trade-off**: Accept small probability of error to achieve massive space savings.

---

## 🔍 1. Bloom Filter

### Concept
A **space-efficient probabilistic set** that answers: "Is element X in the set?"
- **Guarantees**: No false negatives (if says NO, definitely not there)
- **Trade-off**: Possible false positives (if says YES, might be there)

### Structure
```
Bit array of size m:  [0 1 0 0 1 1 0 1 0 0 ...]
                       ↑   ↑       ↑
                    hash1 hash2  hash3
```

### Algorithm
**Insert(x)**:
1. Compute k hash values: h₁(x), h₂(x), ..., hₖ(x)
2. Set bits at positions h₁(x) mod m, h₂(x) mod m, ..., hₖ(x) mod m to 1
3. Time: O(k)

**Contains(x)**:
1. Compute k hash values
2. Check if ALL k bits are set to 1
3. If any bit is 0 → **definitely NOT in set**
4. If all bits are 1 → **probably in set** (could be collision)
5. Time: O(k)

### Optimal Parameters
Given:
- **n** = expected number of elements
- **p** = desired false positive rate

Calculate:
- **m (bits)** = -n × ln(p) / (ln(2))²
- **k (hash functions)** = (m/n) × ln(2) ≈ 0.693 × (m/n)

**Example**: n=10,000, p=0.01 (1%)
- m = -10,000 × ln(0.01) / (0.693)² ≈ 95,851 bits (~12 KB)
- k = 0.693 × (95,851 / 10,000) ≈ 7 hash functions
- Compare to HashSet: ~10,000 × 32 bytes = 320 KB (26× larger!)

### False Positive Probability
After inserting n elements:
```
p = (1 - e^(-kn/m))^k
```
- As more elements added, more bits set to 1 → higher false positive rate
- Cannot delete elements (would cause false negatives)

### Real-World Use Cases
1. **Google Chrome**: Malicious URL detection
   - Bloom filter on device (small memory)
   - Full blacklist on server (only checked if Bloom says "maybe")

2. **Apache Cassandra**: SSTable filtering
   - Each SSTable has Bloom filter
   - Avoids disk reads for keys definitely not in SSTable

3. **CDN Edge Caches**: Negative caching
   - Remember which URLs are 404 to avoid origin requests

4. **Spell Checkers**: Dictionary membership
   - Bloom filter for fast rejection of non-words
   - Full dictionary only for potential matches

### Implementation Optimizations
**Double Hashing**: Generate k hash functions from 2 independent hashes:
```java
h_i(x) = (h1(x) + i × h2(x)) mod m
```
- Avoids computing k different hash functions
- Maintains statistical independence

**Hash Functions**: Use fast, well-distributed hashes
- MurmurHash3, xxHash (faster than cryptographic hashes)
- Built-in hashCode() + custom mixing

---

## 📊 2. Count-Min Sketch

### Concept
Estimates **frequency of elements** in a stream with bounded error.
- Answers: "How many times did element X appear?"
- **Guarantee**: Never underestimates (count ≥ actual)
- **Error bound**: With probability 1-δ, error ≤ ε × N (N = total count)

### Structure
```
2D matrix of counters:
      w columns (width)
    ┌─────────────────┐
d   │ counter[0][0..w]│  hash function 1
r   │ counter[1][0..w]│  hash function 2
o   │ counter[2][0..w]│  hash function 3
w   │      ...        │      ...
s   └─────────────────┘  hash function d
```

### Parameters
- **w (width)** = ⌈e / ε⌉ (e ≈ 2.718)
- **d (depth)** = ⌈ln(1 / δ)⌉

**Example**: ε=0.01 (1% error), δ=0.01 (99% confidence)
- w = ⌈2.718 / 0.01⌉ = 272
- d = ⌈ln(100)⌉ = 5
- Total: 272 × 5 = 1,360 counters (vs millions of unique keys!)

### Algorithm
**Update(x, count)**:
1. For each row i = 1 to d:
   - Compute hash: j = hᵢ(x) mod w
   - Increment: counter[i][j] += count
2. Time: O(d)

**Estimate(x)**:
1. For each row i = 1 to d:
   - Compute hash: j = hᵢ(x) mod w
   - Read: count[i] = counter[i][j]
2. Return: min(count[1], count[2], ..., count[d])
3. Time: O(d)

**Why minimum?** Each row overestimates due to hash collisions. Minimum is closest to true value.

### Use Cases
1. **Network Traffic Analysis**: Top-K heavy hitters
   - Identify IPs sending most packets (DDoS detection)
   - Space: O(1) per flow vs O(n) for exact counting

2. **Twitter Trending**: Find hashtags with highest frequency
   - Count-Min Sketch for all hashtags
   - Heap for top-K candidates

3. **Database Query Optimization**: Column statistics
   - Estimate frequency distribution for query planning
   - Used in PostgreSQL, MemSQL

### Heavy Hitters Problem
Find elements with frequency > θ × N (where N = total count).

**Algorithm**:
1. Maintain Count-Min Sketch for all elements
2. Keep heap of candidates (elements that crossed threshold)
3. Periodically prune heap using Sketch estimates
4. Space: O(k log k) for heap + O(wd) for Sketch

---

## 🧮 3. HyperLogLog

### Concept
Estimates **cardinality** (number of distinct elements) in a stream.
- Answers: "How many unique users visited?"
- **Space**: O(log log n) bits per element (hence "LogLog")
- **Accuracy**: Standard error = 1.04 / √m (m = number of registers)

### Intuition
**Key Observation**: If we hash elements uniformly:
- Probability of hash starting with 0: 1/2
- Probability of hash starting with 00: 1/4
- Probability of hash starting with 000: 1/8
- ...

If we see a hash with **ρ leading zeros**, we estimate there are ~2^ρ distinct elements.

**Improvement**: Use m registers, take harmonic mean for better accuracy.

### Structure
```
Array of m registers (typically m = 2^14 = 16,384):
registers[0..m-1], each holds max leading zeros seen

Hash element:
┌──────────────┬─────────────────────────┐
│ first p bits │  remaining 64-p bits     │
└──────────────┴─────────────────────────┘
      ↓                    ↓
 register index      count leading zeros
```

### Algorithm
**Add(x)**:
1. Hash element to 64-bit value: h = hash(x)
2. Use first p bits as register index: j = h[1..p]
3. Count leading zeros in remaining bits: ρ = leadingZeros(h[p+1..64]) + 1
4. Update register: registers[j] = max(registers[j], ρ)
5. Time: O(1)

**Count()**:
1. Compute harmonic mean: Z = 1 / Σ(2^(-registers[i]))
2. Raw estimate: E = α_m × m² × Z
3. Apply corrections for small/large ranges
4. Time: O(m)

**Correction constant α_m**:
- m=16: α = 0.673
- m=32: α = 0.697
- m=64: α = 0.709
- m≥128: α = 0.7213 / (1 + 1.079/m)

### Parameters
**Precision p**: Number of bits for register addressing
- m = 2^p registers
- Standard error ≈ 1.04 / √m = 1.04 / 2^(p/2)

| Precision | Registers | Memory  | Std Error |
|-----------|-----------|---------|-----------|
| 10        | 1,024     | 1 KB    | 3.25%     |
| 12        | 4,096     | 4 KB    | 1.625%    |
| 14        | 16,384    | 16 KB   | 0.81%     |
| 16        | 65,536    | 64 KB   | 0.4%      |

### Merging
**Union of sets**: max(registers) element-wise
```java
merged.registers[i] = max(hll1.registers[i], hll2.registers[i])
```
Useful for distributed counting:
- Each server maintains local HyperLogLog
- Aggregate by merging all HyperLogLogs

### Use Cases
1. **Redis**: `PFADD`, `PFCOUNT`, `PFMERGE` commands
   - Count unique visitors across multiple servers
   - Memory: 12 KB per key (precision=14)

2. **Google BigQuery**: `APPROX_COUNT_DISTINCT()`
   - Estimate unique values in petabyte-scale tables
   - 100× faster than exact COUNT(DISTINCT)

3. **A/B Testing**: Unique users per variant
   - Track millions of users with KB of memory
   - Merge across geographic regions

---

## 🥒 4. Cuckoo Filter

### Concept
Improved **Bloom Filter** with:
- ✅ **Deletion support** (remove elements)
- ✅ **Better space efficiency** at low false positive rates (<3%)
- ✅ **Faster lookups** (only 2 bucket checks vs k hash functions)
- ❌ **More complex** insertion (cuckoo hashing)

### Structure
```
Array of buckets, each holds b fingerprints (typically b=4):
┌──────────────────────────┐
│ Bucket 0: [fp, fp, fp, fp]│
│ Bucket 1: [fp, fp, fp, fp]│
│ Bucket 2: [fp, fp, fp, fp]│
│       ...                 │
│ Bucket n: [fp, fp, fp, fp]│
└──────────────────────────┘

fingerprint = hash(x) truncated to f bits (typically 8-16)
```

### Two Candidate Buckets
Each item can be in **one of two buckets**:
- **i₁** = hash(x)
- **i₂** = i₁ ⊕ hash(fingerprint(x))

**Key property**: Can compute alternate bucket from current position:
- If at i₁, alternate is i₁ ⊕ hash(fp)
- If at i₂, alternate is i₂ ⊕ hash(fp) = (i₁ ⊕ hash(fp)) ⊕ hash(fp) = i₁

This allows **lookup and deletion without storing full item**!

### Algorithm
**Insert(x)**:
1. Compute fingerprint: fp = fingerprint(x)
2. Compute buckets: i₁ = hash(x), i₂ = i₁ ⊕ hash(fp)
3. If bucket[i₁] or bucket[i₂] has space, insert fp and return
4. Otherwise, **cuckoo eviction**:
   - Randomly pick i₁ or i₂
   - For up to MaxKicks iterations:
     - Evict random fingerprint from bucket
     - Insert new fingerprint
     - Compute alternate bucket for evicted fingerprint
     - Try inserting evicted fingerprint in alternate bucket
   - If still no space after MaxKicks → return false (filter full)
5. Time: O(1) average, O(MaxKicks) worst case

**Lookup(x)**:
1. Compute fp, i₁, i₂
2. Check if fp is in bucket[i₁] or bucket[i₂]
3. Time: O(1) - only check 2 buckets!

**Delete(x)**:
1. Compute fp, i₁, i₂
2. Remove fp from bucket[i₁] or bucket[i₂] if found
3. Time: O(1)

### Load Factor
Cuckoo Filter achieves **~95% load factor** before insertions start failing:
- Bloom Filter: 50% load factor (half bits set)
- Cuckoo Filter: 95% load factor (95% of slots filled)

### Space Comparison
For false positive rate p:
- **Bloom Filter**: -n × ln(p) / (ln(2))² bits
- **Cuckoo Filter**: n × f bits / load_factor (where f = fingerprint size)

At p=0.01 (1%):
- Bloom: ~9.6 bits per element
- Cuckoo (f=8): 8 / 0.95 ≈ 8.4 bits per element ✅ Better!

At p=0.001 (0.1%):
- Bloom: ~14.4 bits per element ✅ Better
- Cuckoo (f=12): 12 / 0.95 ≈ 12.6 bits per element

**Conclusion**: Cuckoo Filter is more space-efficient at **low false positive rates**.

### Use Cases
1. **Dynamic Cache Admission**: Decide whether to cache item
   - Insert frequently accessed items
   - Delete when evicted from cache
   - Bloom Filter can't handle deletions!

2. **Network Packet Filtering**: Firewall rules
   - Dynamically add/remove blocked IPs
   - Fast lookup (2 buckets vs k hashes)

3. **Distributed Systems**: Membership sets with churn
   - Nodes join/leave cluster
   - Need to update membership filter

---

## ⚖️ Comparison Matrix

| Structure        | Operation    | Exactness | Supports Delete | Space (bits/elem) | Use Case                  |
|------------------|--------------|-----------|-----------------|-------------------|---------------------------|
| **HashSet**      | Membership   | Exact     | ✅              | ~32-64            | Small sets, exact needed  |
| **Bloom Filter** | Membership   | Approx    | ❌              | ~10               | Static sets, cache filter |
| **Cuckoo Filter**| Membership   | Approx    | ✅              | ~8-16             | Dynamic sets, deletions   |
| **Count-Min**    | Frequency    | Approx    | ✅ (decrement)  | ~O(1) total       | Heavy hitters, trending   |
| **HyperLogLog**  | Cardinality  | Approx    | ❌              | ~O(log log n)     | Unique counting, analytics|

---

## 🎯 When to Use Each Structure

### Bloom Filter
✅ **Use when**:
- Static set (no deletions needed)
- Only need membership testing (not counts)
- Extremely low memory is critical
- Can tolerate false positives

❌ **Don't use when**:
- Need to delete elements → use **Cuckoo Filter**
- Need exact membership → use **HashSet**
- False positives are unacceptable

### Count-Min Sketch
✅ **Use when**:
- Need frequency estimates, not just membership
- Finding heavy hitters (top-K most frequent)
- Stream processing with millions of unique keys
- Can tolerate overestimation

❌ **Don't use when**:
- Need exact counts → use **HashMap**
- Need underestimation (Count-Min always overestimates)

### HyperLogLog
✅ **Use when**:
- Only care about cardinality (distinct count)
- Dataset is massive (millions to billions)
- Memory is severely limited
- Can tolerate ~1% error

❌ **Don't use when**:
- Need exact count → use **HashSet.size()**
- Need to enumerate elements (HyperLogLog can't do this)
- Dataset is small (<10K elements) → exact structures fine

### Cuckoo Filter
✅ **Use when**:
- Need membership testing with deletions
- False positive rate <3% (more space efficient than Bloom)
- Want faster lookups than Bloom Filter

❌ **Don't use when**:
- False positive rate >3% → use **Bloom Filter** (better space)
- Filter will be >95% full (insertions start failing)

---

## 💡 Interview Pro Tips

### System Design Questions
**Q: "Design a system to count unique daily active users for 1 billion users."**
- ✅ Use **HyperLogLog** (16 KB per day vs 1 GB for exact HashSet)
- Mention: Redis `PFADD`, merge across regions
- Trade-off: 1% error acceptable for analytics

**Q: "Optimize cache to avoid checking database for non-existent keys."**
- ✅ Use **Bloom Filter** in front of cache
- Flow: Bloom says NO → skip cache/DB, Bloom says YES → check cache → check DB
- Mention: False positives cause unnecessary cache checks, but never miss valid keys

**Q: "Find top 100 trending hashtags from Twitter's firehose."**
- ✅ Use **Count-Min Sketch** + min-heap
- Sketch tracks all hashtag frequencies (~1 MB for millions of hashtags)
- Heap maintains top-100 candidates (~1 KB)
- Update heap when Sketch estimate crosses threshold

### Complexity Analysis
Always mention **error bounds**:
- Bloom Filter: False positive rate p (typically 1%)
- Count-Min Sketch: ε (error), δ (confidence) → "ε=0.01, δ=0.01 means 99% confidence error ≤1% of total"
- HyperLogLog: Standard error = 1.04/√m → "precision=14 means 16K registers, 0.81% error"

### Space-Time Trade-offs
**More space → Better accuracy**:
- Bloom: larger m → lower false positive rate
- Count-Min: larger w,d → tighter error bounds
- HyperLogLog: larger m → lower standard error

---

## 🔥 Advanced Topics

### Counting Bloom Filter
- Each position is **counter** (not just bit)
- Supports **deletion**: decrement counters
- Trade-off: 4× more space (4 bits per counter vs 1 bit)

### Spectral Bloom Filter
- Tracks **frequency ranges** (low/medium/high frequency)
- Multiple Bloom filters, each for frequency threshold
- Use case: Cache frequently accessed items only

### Scalable Bloom Filter
- Dynamically grows as more elements added
- Series of Bloom filters with increasing sizes
- Maintains constant false positive rate

### Lossy Counting
- Alternative to Count-Min Sketch for heavy hitters
- Deterministic algorithm (no randomization)
- Space: O(1/ε log(εN)) vs Count-Min's O(1/ε log(1/δ))

---

## 🚀 Production Gotchas

1. **Hash Function Quality**: Poor hash → biased distributions → higher errors
   - Use: MurmurHash3, xxHash, CityHash
   - Avoid: Simple modulo, weak mixing

2. **Floating Point in HyperLogLog**: Harmonic mean calculation
   - Watch for underflow with many registers
   - Use log-space arithmetic for stability

3. **Cuckoo Filter Insertion Failures**: At high load (>95%)
   - MaxKicks too low → early failures
   - MaxKicks too high → slow insertions
   - Solution: Monitor load factor, rehash when needed

4. **Serialization**: Probabilistic structures are compact
   - Bloom: serialize bit array
   - HyperLogLog: serialize registers (m bytes)
   - Count-Min: serialize 2D array (w×d integers)

5. **Distributed Merging**:
   - HyperLogLog: element-wise max (commutative, associative)
   - Count-Min: element-wise sum (if disjoint streams)
   - Bloom: bit-wise OR (if disjoint sets)

---

## 📖 References & Further Reading

### Papers
- "Space/Time Trade-offs in Hash Coding with Allowable Errors" (Bloom, 1970)
- "An Improved Data Stream Summary: The Count-Min Sketch and its Applications" (Cormode, Muthukrishnan, 2005)
- "HyperLogLog: the analysis of a near-optimal cardinality estimation algorithm" (Flajolet et al., 2007)
- "Cuckoo Filter: Practically Better Than Bloom" (Fan et al., 2014)

### Implementations
- Redis: HyperLogLog (`PFADD`, `PFCOUNT`)
- Google Guava: `BloomFilter<T>`
- Apache DataSketches: Count-Min, HyperLogLog, Theta Sketch
- Twitter Algebird: Scala implementations

---

**Key Takeaway**: Probabilistic data structures enable **big data processing** with **sub-linear space**. Always communicate the **error bounds** and **trade-offs** in interviews!
