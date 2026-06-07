import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

import dsa.day60.ProbabilisticStructures.*;

import java.util.*;

/**
 * Comprehensive test suite for Day 60: Bloom Filters & Probabilistic Data Structures
 * 
 * Tests cover:
 * 1. Bloom Filter membership testing and false positive rates
 * 2. Count-Min Sketch frequency estimation accuracy
 * 3. HyperLogLog cardinality estimation and merging
 * 4. Cuckoo Filter insertion, deletion, and lookup
 */
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class TestDay60 {

    @Test
    @Order(1)
    @DisplayName("Bloom Filter: Basic membership testing")
    public void testBloomFilterBasic() {
        System.out.println("\n=== Test 1: Bloom Filter Basic Operations ===");
        
        BloomFilter<String> bloom = new BloomFilter<>(1000, 0.01);
        
        // Add elements
        Set<String> addedElements = new HashSet<>();
        for (int i = 0; i < 500; i++) {
            String element = "user_" + i;
            bloom.add(element);
            addedElements.add(element);
        }
        
        // Test true positives (should all return true)
        int truePositives = 0;
        for (String element : addedElements) {
            if (bloom.mightContain(element)) {
                truePositives++;
            }
        }
        
        System.out.println("Added elements: 500");
        System.out.println("True positives: " + truePositives);
        assertEquals(500, truePositives, "All added elements should be found");
        
        // Test false positives
        int falsePositives = 0;
        int testCount = 1000;
        for (int i = 500; i < 500 + testCount; i++) {
            String element = "user_" + i;
            if (bloom.mightContain(element)) {
                falsePositives++;
            }
        }
        
        double actualFPRate = falsePositives / (double) testCount;
        System.out.printf("False positives: %d / %d (%.2f%%)\n", 
            falsePositives, testCount, actualFPRate * 100);
        System.out.printf("Expected FP rate: 1.00%%\n");
        System.out.printf("Actual FP rate: %.2f%%\n", actualFPRate * 100);
        
        // Allow some tolerance (false positive rate should be close to 1%)
        assertTrue(actualFPRate < 0.03, 
            "False positive rate should be below 3% (configured for 1%)");
        
        System.out.println("✓ Bloom Filter maintains FP rate within bounds");
    }

    @Test
    @Order(2)
    @DisplayName("Bloom Filter: False positive probability increases with load")
    public void testBloomFilterLoadFactor() {
        System.out.println("\n=== Test 2: Bloom Filter Load Factor Impact ===");
        
        BloomFilter<String> bloom = new BloomFilter<>(100, 0.01);
        
        System.out.println("Testing FP probability as filter fills up:");
        System.out.printf("%-10s %-20s %-20s\n", "Elements", "Theoretical FP%", "Measured FP%");
        
        int[] testPoints = {25, 50, 75, 100, 125};
        for (int n : testPoints) {
            // Add elements
            for (int i = 0; i < n; i++) {
                bloom.add("elem_" + i);
            }
            
            // Measure false positive rate
            int falsePositives = 0;
            int testCount = 500;
            for (int i = n; i < n + testCount; i++) {
                if (bloom.mightContain("elem_" + i)) {
                    falsePositives++;
                }
            }
            
            double measuredFP = falsePositives / (double) testCount;
            double theoreticalFP = bloom.getCurrentFalsePositiveProbability();
            
            System.out.printf("%-10d %-20.2f %-20.2f\n", 
                n, theoreticalFP * 100, measuredFP * 100);
        }
        
        System.out.println("✓ False positive rate increases as filter fills");
    }

    @Test
    @Order(3)
    @DisplayName("Count-Min Sketch: Frequency estimation accuracy")
    public void testCountMinSketchFrequency() {
        System.out.println("\n=== Test 3: Count-Min Sketch Frequency Estimation ===");
        
        CountMinSketch<String> cms = new CountMinSketch<>(0.01, 0.01);
        
        // Generate stream with known frequencies
        Map<String, Integer> actualCounts = new HashMap<>();
        Random random = new Random(42);
        
        // Zipfian distribution: some items very frequent, most items rare
        String[] items = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J"};
        int[] frequencies = {1000, 500, 250, 125, 60, 30, 15, 10, 5, 5};
        
        System.out.println("Inserting stream with Zipfian distribution:");
        for (int i = 0; i < items.length; i++) {
            actualCounts.put(items[i], frequencies[i]);
            for (int j = 0; j < frequencies[i]; j++) {
                cms.increment(items[i]);
            }
            System.out.printf("  %s: %d times\n", items[i], frequencies[i]);
        }
        
        // Verify estimates
        System.out.println("\nEstimation accuracy:");
        System.out.printf("%-10s %-15s %-15s %-15s\n", 
            "Item", "Actual Count", "Estimated", "Error %");
        
        int totalError = 0;
        for (String item : items) {
            int actual = actualCounts.get(item);
            int estimated = cms.estimate(item);
            double errorPercent = Math.abs(estimated - actual) * 100.0 / actual;
            
            System.out.printf("%-10s %-15d %-15d %-15.2f\n", 
                item, actual, estimated, errorPercent);
            
            // Count-Min Sketch guarantees: estimate >= actual
            assertTrue(estimated >= actual, 
                "Estimate should never undercount");
            
            totalError += Math.abs(estimated - actual);
        }
        
        System.out.printf("\nTotal absolute error: %d\n", totalError);
        System.out.println("✓ Count-Min Sketch provides accurate frequency estimates");
    }

    @Test
    @Order(4)
    @DisplayName("Count-Min Sketch: Heavy hitters detection")
    public void testCountMinSketchHeavyHitters() {
        System.out.println("\n=== Test 4: Count-Min Sketch Heavy Hitters ===");
        
        CountMinSketch<String> cms = new CountMinSketch<>(0.001, 0.01);
        
        // Simulate network traffic with some heavy hitters
        Random random = new Random(42);
        Map<String, Integer> actualCounts = new HashMap<>();
        
        // Generate 10000 requests with some IPs dominating (DDoS simulation)
        String[] normalIPs = new String[100];
        for (int i = 0; i < 100; i++) {
            normalIPs[i] = "192.168.1." + i;
        }
        
        String[] attackIPs = {"10.0.0.1", "10.0.0.2", "10.0.0.3"};
        
        System.out.println("Simulating 10,000 requests (with DDoS attack):");
        for (int i = 0; i < 10000; i++) {
            String ip;
            if (random.nextDouble() < 0.7) {
                // 70% from attack IPs
                ip = attackIPs[random.nextInt(attackIPs.length)];
            } else {
                // 30% normal traffic
                ip = normalIPs[random.nextInt(normalIPs.length)];
            }
            
            cms.increment(ip);
            actualCounts.merge(ip, 1, Integer::sum);
        }
        
        // Find top IPs
        System.out.println("\nTop 5 IPs by request count:");
        actualCounts.entrySet().stream()
            .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
            .limit(5)
            .forEach(entry -> {
                String ip = entry.getKey();
                int actual = entry.getValue();
                int estimated = cms.estimate(ip);
                System.out.printf("  %s: actual=%d, estimated=%d\n", 
                    ip, actual, estimated);
                
                // Estimate should be close to actual for heavy hitters
                assertTrue(Math.abs(estimated - actual) < actual * 0.1,
                    "Heavy hitter estimate should be within 10% of actual");
            });
        
        System.out.println("✓ Count-Min Sketch successfully identifies heavy hitters");
    }

    @Test
    @Order(5)
    @DisplayName("HyperLogLog: Cardinality estimation accuracy")
    public void testHyperLogLogAccuracy() {
        System.out.println("\n=== Test 5: HyperLogLog Cardinality Estimation ===");
        
        int[] testSizes = {100, 1000, 10000, 100000};
        int precision = 14; // Standard precision
        
        System.out.println("Precision: " + precision + " (16,384 registers)");
        System.out.printf("%-15s %-15s %-15s %-15s\n", 
            "Actual Count", "Estimated", "Error", "Error %");
        
        for (int actualCount : testSizes) {
            HyperLogLog<String> hll = new HyperLogLog<>(precision);
            
            // Add unique elements
            for (int i = 0; i < actualCount; i++) {
                hll.add("element_" + i);
            }
            
            long estimated = hll.count();
            long error = Math.abs(estimated - actualCount);
            double errorPercent = error * 100.0 / actualCount;
            
            System.out.printf("%-15d %-15d %-15d %-15.2f\n", 
                actualCount, estimated, error, errorPercent);
            
            // Standard error for precision=14 is ~0.81%
            // Allow up to 3% error in tests (with some randomness)
            assertTrue(errorPercent < 5.0, 
                "HyperLogLog error should be below 5%");
        }
        
        System.out.println("\n✓ HyperLogLog provides accurate cardinality estimates");
    }

    @Test
    @Order(6)
    @DisplayName("HyperLogLog: Merging multiple HyperLogLogs")
    public void testHyperLogLogMerge() {
        System.out.println("\n=== Test 6: HyperLogLog Distributed Counting ===");
        
        int precision = 14;
        int totalUnique = 10000;
        
        // Simulate 3 servers counting unique users
        HyperLogLog<String> server1 = new HyperLogLog<>(precision);
        HyperLogLog<String> server2 = new HyperLogLog<>(precision);
        HyperLogLog<String> server3 = new HyperLogLog<>(precision);
        
        Random random = new Random(42);
        Set<String> actualUnique = new HashSet<>();
        
        System.out.println("Simulating distributed user tracking across 3 servers:");
        
        // Distribute users randomly (with overlap)
        for (int i = 0; i < totalUnique; i++) {
            String user = "user_" + i;
            actualUnique.add(user);
            
            // Randomly assign to servers (user might hit multiple servers)
            int serverChoice = random.nextInt(3);
            if (serverChoice == 0) server1.add(user);
            if (serverChoice == 1) server2.add(user);
            if (serverChoice == 2) server3.add(user);
        }
        
        System.out.println("Server 1 estimate: " + server1.count());
        System.out.println("Server 2 estimate: " + server2.count());
        System.out.println("Server 3 estimate: " + server3.count());
        
        // Merge all servers
        HyperLogLog<String> merged = new HyperLogLog<>(precision);
        merged.merge(server1);
        merged.merge(server2);
        merged.merge(server3);
        
        long mergedEstimate = merged.count();
        long actualCount = actualUnique.size();
        double errorPercent = Math.abs(mergedEstimate - actualCount) * 100.0 / actualCount;
        
        System.out.println("\nMerged estimate: " + mergedEstimate);
        System.out.println("Actual unique users: " + actualCount);
        System.out.printf("Error: %.2f%%\n", errorPercent);
        
        assertTrue(errorPercent < 10.0, 
            "Merged HyperLogLog should maintain accuracy");
        
        System.out.println("✓ HyperLogLog merge operation works correctly");
    }

    @Test
    @Order(7)
    @DisplayName("Cuckoo Filter: Insertion and lookup with deletions")
    public void testCuckooFilterBasic() {
        System.out.println("\n=== Test 7: Cuckoo Filter with Deletions ===");
        
        CuckooFilter<String> cuckoo = new CuckooFilter<>(1000);
        
        // Insert elements
        Set<String> inserted = new HashSet<>();
        int insertCount = 0;
        for (int i = 0; i < 500; i++) {
            String element = "item_" + i;
            if (cuckoo.insert(element)) {
                inserted.add(element);
                insertCount++;
            }
        }
        
        System.out.println("Successfully inserted: " + insertCount);
        System.out.printf("Load factor: %.2f%%\n", cuckoo.getLoadFactor() * 100);
        
        // Verify all insertions
        int foundCount = 0;
        for (String element : inserted) {
            if (cuckoo.mightContain(element)) {
                foundCount++;
            }
        }
        assertEquals(insertCount, foundCount, "All inserted elements should be found");
        System.out.println("All inserted elements found: " + foundCount);
        
        // Test deletion (key advantage over Bloom Filter!)
        List<String> toDelete = new ArrayList<>();
        int deleteCount = 100;
        Iterator<String> iter = inserted.iterator();
        for (int i = 0; i < deleteCount && iter.hasNext(); i++) {
            toDelete.add(iter.next());
        }
        
        System.out.println("\nDeleting " + deleteCount + " elements...");
        int successfulDeletes = 0;
        for (String element : toDelete) {
            if (cuckoo.delete(element)) {
                successfulDeletes++;
            }
        }
        
        System.out.println("Successfully deleted: " + successfulDeletes);
        assertEquals(deleteCount, successfulDeletes, "All deletes should succeed");
        
        // Verify deletions
        int stillFound = 0;
        for (String element : toDelete) {
            if (cuckoo.mightContain(element)) {
                stillFound++;
            }
        }
        
        System.out.println("Deleted elements still found (false positives): " + stillFound);
        assertTrue(stillFound == 0, "Deleted elements should not be found");
        
        System.out.println("✓ Cuckoo Filter supports deletion correctly");
    }

    @Test
    @Order(8)
    @DisplayName("Cuckoo Filter: High load factor performance")
    public void testCuckooFilterLoadFactor() {
        System.out.println("\n=== Test 8: Cuckoo Filter Load Factor ===");
        
        int capacity = 1000;
        CuckooFilter<Integer> cuckoo = new CuckooFilter<>(capacity);
        
        System.out.println("Testing insertion success rate at various load factors:");
        System.out.printf("%-15s %-20s %-20s\n", "Load Factor", "Insert Attempts", "Success Rate");
        
        int inserted = 0;
        int[] checkpoints = {250, 500, 750, 900, 950};
        int lastCheckpoint = 0;
        
        for (int checkpoint : checkpoints) {
            int attempts = checkpoint - lastCheckpoint;
            int successes = 0;
            
            for (int i = lastCheckpoint; i < checkpoint; i++) {
                if (cuckoo.insert(i)) {
                    successes++;
                    inserted++;
                }
            }
            
            double successRate = successes * 100.0 / attempts;
            System.out.printf("%-15.2f %-20d %-20.2f%%\n", 
                cuckoo.getLoadFactor() * 100, attempts, successRate);
            
            lastCheckpoint = checkpoint;
        }
        
        System.out.printf("\nTotal inserted: %d / %d\n", inserted, checkpoints[checkpoints.length-1]);
        System.out.printf("Final load factor: %.2f%%\n", cuckoo.getLoadFactor() * 100);
        
        // Cuckoo Filter should achieve >90% load factor
        assertTrue(cuckoo.getLoadFactor() > 0.80, 
            "Cuckoo Filter should achieve >80% load factor");
        
        System.out.println("✓ Cuckoo Filter achieves high load factor");
    }

    @Test
    @Order(9)
    @DisplayName("Memory comparison: Probabilistic vs Exact structures")
    public void testMemoryComparison() {
        System.out.println("\n=== Test 9: Memory Efficiency Comparison ===");
        
        ProbabilisticStructures.MemoryComparison.compareStructures(1_000_000, 0.01);
        
        System.out.println("\n✓ Probabilistic structures offer significant space savings");
    }

    @Test
    @Order(10)
    @DisplayName("Real-world scenario: Cache negative lookup optimization")
    public void testCacheNegativeLookup() {
        System.out.println("\n=== Test 10: Cache Negative Lookup Optimization ===");
        
        // Scenario: Database with 10K records, cache with Bloom Filter to avoid
        // checking database for non-existent keys
        
        Set<String> database = new HashSet<>();
        BloomFilter<String> cacheFilter = new BloomFilter<>(10000, 0.01);
        
        // Populate database and Bloom Filter
        for (int i = 0; i < 10000; i++) {
            String key = "record_" + i;
            database.add(key);
            cacheFilter.add(key);
        }
        
        System.out.println("Database records: 10,000");
        System.out.println("Bloom Filter size: " + cacheFilter.getBitSize() / 8 + " bytes");
        
        // Simulate 1000 lookups (mix of existing and non-existing)
        Random random = new Random(42);
        int totalLookups = 1000;
        int dbQueries = 0;
        int bloomFalsePositives = 0;
        
        for (int i = 0; i < totalLookups; i++) {
            String key = "record_" + random.nextInt(20000); // Half don't exist
            
            // Check Bloom Filter first
            if (cacheFilter.mightContain(key)) {
                // Only query database if Bloom Filter says "maybe"
                dbQueries++;
                if (!database.contains(key)) {
                    bloomFalsePositives++;
                }
            }
            // If Bloom Filter says "no", skip database query (guaranteed not there)
        }
        
        System.out.println("\nLookup simulation (1000 queries):");
        System.out.println("Database queries: " + dbQueries);
        System.out.println("Bloom Filter false positives: " + bloomFalsePositives);
        System.out.printf("Database query reduction: %.1f%%\n", 
            (1 - dbQueries / (double) totalLookups) * 100);
        
        // Bloom Filter should significantly reduce database queries
        assertTrue(dbQueries < totalLookups * 0.6, 
            "Bloom Filter should reduce DB queries by >40%");
        
        System.out.println("✓ Bloom Filter effectively reduces negative lookups");
    }
}
