package dsa.day60;

import java.util.*;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * Day 60: Bloom Filters & Probabilistic Data Structures
 * 
 * Comprehensive implementations of space-efficient probabilistic data structures:
 * 1. Bloom Filter - membership testing with configurable false positive rate
 * 2. Count-Min Sketch - frequency estimation with bounded error
 * 3. HyperLogLog - cardinality estimation for massive datasets
 * 4. Cuckoo Filter - Bloom Filter with deletion support
 * 
 * These structures trade exactness for space efficiency, essential for:
 * - Big data processing (billions of elements)
 * - Distributed caching systems
 * - Network traffic analysis
 * - Database query optimization
 */
public class ProbabilisticStructures {

    /**
     * Bloom Filter: Space-efficient probabilistic data structure for membership testing.
     * 
     * Key Properties:
     * - No false negatives (if says NO, element definitely not in set)
     * - Possible false positives (if says YES, element might be in set)
     * - Cannot delete elements (use Counting Bloom Filter variant)
     * - Space usage independent of element size
     * 
     * Optimal Parameters:
     * - m (bits) = -n * ln(p) / (ln(2)^2)
     * - k (hashes) = (m/n) * ln(2)
     * where n = expected elements, p = false positive rate
     * 
     * Time Complexity:
     * - Add: O(k) where k is number of hash functions
     * - Contains: O(k)
     * 
     * Space Complexity: O(m) bits
     * 
     * Example with n=1000, p=0.01:
     * - m ≈ 9585 bits (1.2 KB)
     * - k ≈ 7 hash functions
     * 
     * Real-world Usage:
     * - Google Chrome: malicious URL detection
     * - Cassandra: reduce disk lookups for non-existent keys
     * - CDN: negative cache (avoid origin requests for 404s)
     */
    public static class BloomFilter<T> {
        private final BitSet bitSet;
        private final int bitSize;
        private final int numHashFunctions;
        private int elementCount;

        /**
         * Construct Bloom Filter with specified size and hash functions.
         * 
         * @param expectedElements Expected number of elements to insert
         * @param falsePositiveRate Desired false positive rate (e.g., 0.01 = 1%)
         */
        public BloomFilter(int expectedElements, double falsePositiveRate) {
            // Calculate optimal bit size: m = -n*ln(p) / (ln(2)^2)
            this.bitSize = (int) Math.ceil(
                -expectedElements * Math.log(falsePositiveRate) / (Math.log(2) * Math.log(2))
            );
            
            // Calculate optimal number of hash functions: k = (m/n) * ln(2)
            this.numHashFunctions = (int) Math.ceil(
                (bitSize / (double) expectedElements) * Math.log(2)
            );
            
            this.bitSet = new BitSet(bitSize);
            this.elementCount = 0;
        }

        /**
         * Add element to Bloom Filter.
         * Sets k bits to 1 using k different hash functions.
         * 
         * Time Complexity: O(k)
         */
        public void add(T element) {
            int[] hashes = getHashes(element);
            for (int hash : hashes) {
                bitSet.set(Math.abs(hash % bitSize));
            }
            elementCount++;
        }

        /**
         * Check if element might be in set.
         * 
         * @return false = definitely not in set, true = probably in set
         * 
         * Time Complexity: O(k)
         */
        public boolean mightContain(T element) {
            int[] hashes = getHashes(element);
            for (int hash : hashes) {
                if (!bitSet.get(Math.abs(hash % bitSize))) {
                    return false; // Definitely not in set
                }
            }
            return true; // Probably in set (could be false positive)
        }

        /**
         * Get current false positive probability based on actual fill rate.
         * Formula: (1 - e^(-k*n/m))^k
         */
        public double getCurrentFalsePositiveProbability() {
            int bitsSet = bitSet.cardinality();
            double fillRatio = bitsSet / (double) bitSize;
            return Math.pow(fillRatio, numHashFunctions);
        }

        /**
         * Generate k hash values for an element using double hashing technique.
         * Uses two independent hash functions to simulate k hash functions:
         * h_i(x) = (h1(x) + i * h2(x)) mod m
         * 
         * This avoids computing k different hash functions while maintaining independence.
         */
        private int[] getHashes(T element) {
            int[] hashes = new int[numHashFunctions];
            String str = element.toString();
            
            // Primary hash (use built-in hashCode)
            int h1 = str.hashCode();
            
            // Secondary hash (use murmur-like mixing)
            int h2 = murmurHash(str);
            
            // Generate k hashes using double hashing
            for (int i = 0; i < numHashFunctions; i++) {
                hashes[i] = h1 + i * h2;
            }
            
            return hashes;
        }

        /**
         * Simple murmur-inspired hash for secondary hash function.
         */
        private int murmurHash(String str) {
            int hash = 0;
            for (int i = 0; i < str.length(); i++) {
                hash = 31 * hash + str.charAt(i);
            }
            hash ^= (hash >>> 16);
            hash *= 0x85ebca6b;
            hash ^= (hash >>> 13);
            hash *= 0xc2b2ae35;
            hash ^= (hash >>> 16);
            return hash;
        }

        public int size() {
            return elementCount;
        }

        public int getBitSize() {
            return bitSize;
        }
    }

    /**
     * Count-Min Sketch: Probabilistic frequency estimation data structure.
     * 
     * Key Properties:
     * - Estimates frequency with bounded error
     * - Count overestimates (never underestimates)
     * - Error bound: ε with probability 1-δ
     * 
     * Structure:
     * - 2D matrix of counters: d rows × w columns
     * - d = ⌈ln(1/δ)⌉ (depth for confidence)
     * - w = ⌈e/ε⌉ (width for accuracy)
     * 
     * Time Complexity:
     * - Update: O(d)
     * - Query: O(d)
     * 
     * Space Complexity: O(w × d) counters
     * 
     * Example with ε=0.01, δ=0.01:
     * - w = ⌈2.718/0.01⌉ = 272
     * - d = ⌈ln(100)⌉ = 5
     * - Total: 1360 counters (vs potentially millions of keys)
     * 
     * Real-world Usage:
     * - Twitter: trending topics detection
     * - Network monitoring: DDoS detection (heavy hitters)
     * - Database query optimization: frequency statistics
     */
    public static class CountMinSketch<T> {
        private final int[][] counters;
        private final int depth;    // d = number of hash functions
        private final int width;    // w = number of buckets per hash
        private final int[] hashSeeds;

        /**
         * Construct Count-Min Sketch with specified error parameters.
         * 
         * @param epsilon Error in estimate (e.g., 0.01 = 1% error)
         * @param delta Confidence level (e.g., 0.01 = 99% confidence)
         */
        public CountMinSketch(double epsilon, double delta) {
            this.width = (int) Math.ceil(Math.E / epsilon);
            this.depth = (int) Math.ceil(Math.log(1.0 / delta));
            this.counters = new int[depth][width];
            
            // Generate random seeds for independent hash functions
            this.hashSeeds = new int[depth];
            Random random = new Random(42); // Fixed seed for determinism
            for (int i = 0; i < depth; i++) {
                hashSeeds[i] = random.nextInt();
            }
        }

        /**
         * Increment count for an element.
         * Updates d counters (one per hash function).
         * 
         * Time Complexity: O(d)
         */
        public void increment(T element) {
            add(element, 1);
        }

        /**
         * Add count to an element.
         * 
         * Time Complexity: O(d)
         */
        public void add(T element, int count) {
            int elementHash = element.hashCode();
            for (int i = 0; i < depth; i++) {
                int hash = hash(elementHash, hashSeeds[i]);
                int bucket = Math.abs(hash % width);
                counters[i][bucket] += count;
            }
        }

        /**
         * Estimate frequency of an element.
         * Returns minimum across all d counters (conservative estimate).
         * 
         * Guarantee: estimate(x) >= actual_count(x)
         * With probability 1-δ: estimate(x) <= actual_count(x) + ε*N
         * where N is sum of all counts.
         * 
         * Time Complexity: O(d)
         */
        public int estimate(T element) {
            int elementHash = element.hashCode();
            int minCount = Integer.MAX_VALUE;
            
            for (int i = 0; i < depth; i++) {
                int hash = hash(elementHash, hashSeeds[i]);
                int bucket = Math.abs(hash % width);
                minCount = Math.min(minCount, counters[i][bucket]);
            }
            
            return minCount;
        }

        /**
         * Find heavy hitters (elements with frequency > threshold).
         * Note: This is approximate and may have false positives.
         * 
         * Time Complexity: O(width × depth) to scan all counters
         */
        public List<Integer> getHeavyHitters(int threshold) {
            // In practice, maintain a separate data structure (e.g., heap) for candidates
            // This is a simplified version for demonstration
            Map<Integer, Integer> candidates = new HashMap<>();
            
            // Check all buckets in first row as candidates
            for (int j = 0; j < width; j++) {
                if (counters[0][j] >= threshold) {
                    // This is a simplification - real implementation tracks actual elements
                    candidates.put(j, counters[0][j]);
                }
            }
            
            List<Integer> result = new ArrayList<>(candidates.values());
            Collections.sort(result, Collections.reverseOrder());
            return result;
        }

        /**
         * Hash function combining element hash with seed.
         */
        private int hash(int elementHash, int seed) {
            int hash = elementHash ^ seed;
            hash = ((hash >>> 16) ^ hash) * 0x45d9f3b;
            hash = ((hash >>> 16) ^ hash) * 0x45d9f3b;
            hash = (hash >>> 16) ^ hash;
            return hash;
        }

        public int getDepth() {
            return depth;
        }

        public int getWidth() {
            return width;
        }
    }

    /**
     * HyperLogLog: Cardinality estimation algorithm with very low memory.
     * 
     * Key Properties:
     * - Estimates distinct count in massive datasets
     * - Standard error: 1.04/√m where m = 2^precision
     * - Mergeability: can combine multiple HyperLogLog structures
     * 
     * Algorithm:
     * 1. Hash element to uniformly distributed value
     * 2. Use first p bits to select register (m = 2^p registers)
     * 3. Count leading zeros in remaining bits + 1
     * 4. Update register with max leading zeros seen
     * 5. Estimate cardinality using harmonic mean of registers
     * 
     * Time Complexity:
     * - Add: O(1)
     * - Count: O(m) where m = 2^precision
     * 
     * Space Complexity: O(m) registers, each 5-6 bits
     * 
     * Example with precision=14:
     * - m = 16384 registers
     * - Memory: ~16KB
     * - Standard error: ~0.81%
     * - Can count up to billions with high accuracy
     * 
     * Real-world Usage:
     * - Redis: PFADD, PFCOUNT commands
     * - Google BigQuery: APPROX_COUNT_DISTINCT
     * - Presto/Trino: approx_distinct aggregate
     */
    public static class HyperLogLog<T> {
        private final int precision;
        private final int numRegisters;
        private final byte[] registers;
        private final double alphaMM;

        /**
         * Construct HyperLogLog with specified precision.
         * 
         * @param precision Number of bits for register addressing (typically 14-16)
         *                  Higher precision = better accuracy but more memory
         *                  precision=14 → 16K registers → ~0.81% error
         *                  precision=16 → 64K registers → ~0.4% error
         */
        public HyperLogLog(int precision) {
            if (precision < 4 || precision > 16) {
                throw new IllegalArgumentException("Precision must be between 4 and 16");
            }
            
            this.precision = precision;
            this.numRegisters = 1 << precision; // 2^precision
            this.registers = new byte[numRegisters];
            this.alphaMM = getAlphaMM(numRegisters);
        }

        /**
         * Add element to HyperLogLog.
         * 
         * Algorithm:
         * 1. Hash element to get uniform distribution
         * 2. Use first p bits as register index
         * 3. Count leading zeros in remaining bits
         * 4. Update register with max leading zeros seen
         * 
         * Time Complexity: O(1)
         */
        public void add(T element) {
            long hash = hashLong(element);
            
            // Use first p bits to determine register
            int registerIndex = (int) (hash >>> (64 - precision));
            
            // Count leading zeros in remaining bits + 1
            long w = hash << precision;
            int leadingZeros = Long.numberOfLeadingZeros(w) + 1;
            
            // Update register with maximum leading zeros seen
            if (leadingZeros > registers[registerIndex]) {
                registers[registerIndex] = (byte) leadingZeros;
            }
        }

        /**
         * Estimate cardinality (distinct count).
         * 
         * Algorithm:
         * 1. Calculate raw estimate using harmonic mean
         * 2. Apply bias correction for small/large ranges
         * 
         * Time Complexity: O(m) where m = number of registers
         */
        public long count() {
            double sum = 0;
            int zeroCount = 0;
            
            // Calculate harmonic mean: 1 / (∑ 2^(-M[i]))
            for (int i = 0; i < numRegisters; i++) {
                sum += Math.pow(2, -registers[i]);
                if (registers[i] == 0) {
                    zeroCount++;
                }
            }
            
            double rawEstimate = alphaMM / sum;
            
            // Apply corrections for small and large ranges
            if (rawEstimate <= 2.5 * numRegisters) {
                // Small range correction
                if (zeroCount > 0) {
                    return Math.round(numRegisters * Math.log(numRegisters / (double) zeroCount));
                }
            } else if (rawEstimate > (1.0 / 30.0) * (1L << 32)) {
                // Large range correction (for hash collisions)
                return Math.round(-1L * (1L << 32) * Math.log(1.0 - rawEstimate / (1L << 32)));
            }
            
            return Math.round(rawEstimate);
        }

        /**
         * Merge another HyperLogLog into this one.
         * Useful for distributed counting (e.g., across multiple servers).
         * 
         * Time Complexity: O(m)
         */
        public void merge(HyperLogLog<T> other) {
            if (this.precision != other.precision) {
                throw new IllegalArgumentException("Cannot merge HyperLogLogs with different precision");
            }
            
            for (int i = 0; i < numRegisters; i++) {
                this.registers[i] = (byte) Math.max(this.registers[i], other.registers[i]);
            }
        }

        /**
         * Get alpha constant for bias correction.
         * Based on paper: α_m = (m * ∫[0,∞] (log2((2+u)/(1+u)))^m du)^(-1)
         */
        private double getAlphaMM(int m) {
            switch (m) {
                case 16: return 0.673 * m * m;
                case 32: return 0.697 * m * m;
                case 64: return 0.709 * m * m;
                default: return (0.7213 / (1 + 1.079 / m)) * m * m;
            }
        }

        /**
         * Hash element to 64-bit long for uniform distribution.
         */
        private long hashLong(T element) {
            // Use MurmurHash3-inspired mixing for better distribution
            long hash = element.hashCode();
            hash ^= (hash >>> 33);
            hash *= 0xff51afd7ed558ccdL;
            hash ^= (hash >>> 33);
            hash *= 0xc4ceb9fe1a85ec53L;
            hash ^= (hash >>> 33);
            return hash;
        }

        public int getPrecision() {
            return precision;
        }

        public int getNumRegisters() {
            return numRegisters;
        }
    }

    /**
     * Cuckoo Filter: Space-efficient probabilistic set with deletion support.
     * 
     * Key Advantages over Bloom Filter:
     * - Supports deletion (removes fingerprint from bucket)
     * - Better space efficiency at low false positive rates (<3%)
     * - Faster lookups (max 2 bucket checks vs k hash computations)
     * 
     * Structure:
     * - Array of buckets, each holds b fingerprints (typically b=4)
     * - Each item maps to 2 candidate buckets using cuckoo hashing
     * - Fingerprint: hash(item) truncated to f bits (typically f=8-16)
     * 
     * Insertion Algorithm:
     * 1. Compute i1 = hash(x), i2 = i1 XOR hash(fingerprint(x))
     * 2. If bucket[i1] or bucket[i2] has space, insert fingerprint
     * 3. Otherwise, evict random entry and reinsert (cuckoo hashing)
     * 4. Repeat up to MaxKicks times, fail if still no space
     * 
     * Time Complexity:
     * - Insert: O(1) average, O(MaxKicks) worst case
     * - Lookup: O(1) - check only 2 buckets
     * - Delete: O(1) - check 2 buckets, remove fingerprint
     * 
     * Space Complexity: O(n) with load factor ~95%
     * 
     * Real-world Usage:
     * - Dynamic cache admission policies
     * - Network packet filtering with updates
     * - Distributed sets requiring deletions
     */
    public static class CuckooFilter<T> {
        private static final int BUCKET_SIZE = 4;
        private static final int MAX_KICKS = 500;
        private static final int FINGERPRINT_SIZE = 16; // bits
        
        private final List<Bucket> buckets;
        private final int numBuckets;
        private int size;

        private static class Bucket {
            private final int[] fingerprints;
            private int count;

            Bucket() {
                this.fingerprints = new int[BUCKET_SIZE];
                this.count = 0;
            }

            boolean isFull() {
                return count == BUCKET_SIZE;
            }

            boolean contains(int fingerprint) {
                for (int i = 0; i < count; i++) {
                    if (fingerprints[i] == fingerprint) {
                        return true;
                    }
                }
                return false;
            }

            boolean insert(int fingerprint) {
                if (count < BUCKET_SIZE) {
                    fingerprints[count++] = fingerprint;
                    return true;
                }
                return false;
            }

            boolean delete(int fingerprint) {
                for (int i = 0; i < count; i++) {
                    if (fingerprints[i] == fingerprint) {
                        // Shift elements
                        for (int j = i; j < count - 1; j++) {
                            fingerprints[j] = fingerprints[j + 1];
                        }
                        count--;
                        return true;
                    }
                }
                return false;
            }

            int getRandomFingerprint(Random random) {
                return fingerprints[random.nextInt(count)];
            }

            void replaceFingerprint(int oldFp, int newFp) {
                for (int i = 0; i < count; i++) {
                    if (fingerprints[i] == oldFp) {
                        fingerprints[i] = newFp;
                        return;
                    }
                }
            }
        }

        /**
         * Construct Cuckoo Filter with specified capacity.
         * 
         * @param capacity Expected number of elements
         */
        public CuckooFilter(int capacity) {
            // Calculate number of buckets for ~95% load factor
            this.numBuckets = (int) Math.ceil(capacity / (BUCKET_SIZE * 0.95));
            this.buckets = new ArrayList<>(numBuckets);
            for (int i = 0; i < numBuckets; i++) {
                buckets.add(new Bucket());
            }
            this.size = 0;
        }

        /**
         * Insert element into Cuckoo Filter.
         * 
         * Algorithm:
         * 1. Compute fingerprint and two candidate bucket indices
         * 2. Try inserting in either bucket if space available
         * 3. Otherwise, evict random entry and retry (cuckoo hashing)
         * 
         * Time Complexity: O(1) average case
         */
        public boolean insert(T element) {
            int fingerprint = getFingerprint(element);
            int i1 = getIndex1(element);
            int i2 = getIndex2(i1, fingerprint);
            
            // Try inserting in either bucket
            if (buckets.get(i1).insert(fingerprint)) {
                size++;
                return true;
            }
            if (buckets.get(i2).insert(fingerprint)) {
                size++;
                return true;
            }
            
            // Cuckoo eviction: randomly evict and reinsert
            Random random = new Random();
            int i = random.nextBoolean() ? i1 : i2;
            
            for (int kicks = 0; kicks < MAX_KICKS; kicks++) {
                Bucket bucket = buckets.get(i);
                int evictedFp = bucket.getRandomFingerprint(random);
                bucket.replaceFingerprint(evictedFp, fingerprint);
                
                fingerprint = evictedFp;
                i = getIndex2(i, fingerprint);
                
                if (buckets.get(i).insert(fingerprint)) {
                    size++;
                    return true;
                }
            }
            
            // Filter is full or needs rehashing
            return false;
        }

        /**
         * Check if element might be in filter.
         * 
         * Time Complexity: O(1) - only check 2 buckets
         */
        public boolean mightContain(T element) {
            int fingerprint = getFingerprint(element);
            int i1 = getIndex1(element);
            int i2 = getIndex2(i1, fingerprint);
            
            return buckets.get(i1).contains(fingerprint) || 
                   buckets.get(i2).contains(fingerprint);
        }

        /**
         * Delete element from filter.
         * This is a key advantage over Bloom Filter!
         * 
         * Time Complexity: O(1)
         */
        public boolean delete(T element) {
            int fingerprint = getFingerprint(element);
            int i1 = getIndex1(element);
            int i2 = getIndex2(i1, fingerprint);
            
            if (buckets.get(i1).delete(fingerprint)) {
                size--;
                return true;
            }
            if (buckets.get(i2).delete(fingerprint)) {
                size--;
                return true;
            }
            
            return false;
        }

        /**
         * Compute fingerprint: truncated hash of element.
         */
        private int getFingerprint(T element) {
            int hash = element.hashCode();
            // Mix bits for better distribution
            hash ^= (hash >>> 16);
            hash *= 0x85ebca6b;
            hash ^= (hash >>> 13);
            // Truncate to FINGERPRINT_SIZE bits
            return hash & ((1 << FINGERPRINT_SIZE) - 1);
        }

        /**
         * Compute primary bucket index.
         */
        private int getIndex1(T element) {
            return Math.abs(element.hashCode() % numBuckets);
        }

        /**
         * Compute alternate bucket index using partial-key cuckoo hashing.
         * Key property: i2 = i1 XOR hash(fingerprint)
         * This allows computing alternate index from current index + fingerprint.
         */
        private int getIndex2(int i1, int fingerprint) {
            int hash = fingerprint * 0x5bd1e995; // Mix fingerprint
            return Math.abs((i1 ^ hash) % numBuckets);
        }

        public int size() {
            return size;
        }

        public double getLoadFactor() {
            return size / (double) (numBuckets * BUCKET_SIZE);
        }
    }

    /**
     * Utility: Compare memory efficiency of different structures.
     */
    public static class MemoryComparison {
        
        public static void compareStructures(int numElements, double fpRate) {
            System.out.println("=== Memory Comparison for " + numElements + " elements ===\n");
            
            // HashSet (baseline)
            long hashSetBytes = numElements * 40; // Approximate: object overhead + pointer
            System.out.printf("HashSet: %,d bytes (%.2f MB)\n", 
                hashSetBytes, hashSetBytes / (1024.0 * 1024));
            
            // Bloom Filter
            BloomFilter<String> bloom = new BloomFilter<>(numElements, fpRate);
            long bloomBytes = bloom.getBitSize() / 8;
            System.out.printf("Bloom Filter: %,d bytes (%.2f MB) - %.1f%% FP rate\n",
                bloomBytes, bloomBytes / (1024.0 * 1024), fpRate * 100);
            System.out.printf("  Space savings: %.1fx smaller\n", 
                hashSetBytes / (double) bloomBytes);
            
            // Cuckoo Filter
            int cuckooBytes = (int) Math.ceil(numElements / 0.95) * 4 * 2; // 4 slots, 2 bytes/fp
            System.out.printf("\nCuckoo Filter: %,d bytes (%.2f MB)\n",
                cuckooBytes, cuckooBytes / (1024.0 * 1024));
            System.out.printf("  Space savings: %.1fx smaller\n",
                hashSetBytes / (double) cuckooBytes);
            
            // Count-Min Sketch
            CountMinSketch<String> cms = new CountMinSketch<>(0.01, 0.01);
            long cmsBytes = cms.getWidth() * cms.getDepth() * 4L; // 4 bytes per counter
            System.out.printf("\nCount-Min Sketch: %,d bytes (%.2f MB)\n",
                cmsBytes, cmsBytes / (1024.0 * 1024));
            
            // HyperLogLog
            HyperLogLog<String> hll = new HyperLogLog<>(14);
            long hllBytes = hll.getNumRegisters(); // 1 byte per register
            System.out.printf("\nHyperLogLog: %,d bytes (%.2f MB)\n",
                hllBytes, hllBytes / (1024.0 * 1024));
            System.out.printf("  Space savings: %.0fx smaller\n",
                hashSetBytes / (double) hllBytes);
        }
    }
}
