package dsa.day59.tests;

import dsa.day59.LoadBalancing.*;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.*;
import java.util.stream.*;

public class TestDay59 {

    @Test
    public void testConsistentHashBasic() {
        ConsistentHash<String> ch = new ConsistentHash<>(100);
        ch.addNode("server1");
        ch.addNode("server2");
        ch.addNode("server3");
        
        String node = ch.getNode("user123");
        assertNotNull(node);
        
        // Same key should route to same node
        assertEquals(node, ch.getNode("user123"));
    }

    @Test
    public void testConsistentHashDistribution() {
        ConsistentHash<String> ch = new ConsistentHash<>(150);
        ch.addNode("A");
        ch.addNode("B");
        ch.addNode("C");
        
        List<String> keys = IntStream.range(0, 10000)
            .mapToObj(i -> "key" + i)
            .collect(Collectors.toList());
        
        Map<String, Integer> dist = ch.getDistribution(keys);
        
        // Check reasonably uniform distribution (each node gets 20-40% with margin)
        for (int count : dist.values()) {
            double ratio = count / 10000.0;
            assertTrue(ratio > 0.20 && ratio < 0.40, "Distribution ratio: " + ratio);
        }
    }

    @Test
    public void testConsistentHashMinimalRebalancing() {
        ConsistentHash<String> ch = new ConsistentHash<>(100);
        ch.addNode("A");
        ch.addNode("B");
        ch.addNode("C");
        
        // Record initial assignments
        Map<String, String> initialAssignments = new HashMap<>();
        for (int i = 0; i < 1000; i++) {
            String key = "key" + i;
            initialAssignments.put(key, ch.getNode(key));
        }
        
        // Add new node
        ch.addNode("D");
        
        // Count how many keys moved
        int moved = 0;
        for (String key : initialAssignments.keySet()) {
            if (!initialAssignments.get(key).equals(ch.getNode(key))) {
                moved++;
            }
        }
        
        // Should move approximately 1/4 of keys (250 ± margin)
        assertTrue(moved > 150 && moved < 350, "Moved: " + moved);
    }

    @Test
    public void testRoundRobin() {
        List<Server> servers = Arrays.asList(
            new Server("S1"), new Server("S2"), new Server("S3")
        );
        RoundRobin rr = new RoundRobin(servers);
        
        assertEquals("S1", rr.next().id);
        assertEquals("S2", rr.next().id);
        assertEquals("S3", rr.next().id);
        assertEquals("S1", rr.next().id);
    }

    @Test
    public void testWeightedRoundRobin() {
        List<Server> servers = Arrays.asList(
            new Server("S1", 3),
            new Server("S2", 1)
        );
        WeightedRoundRobin wrr = new WeightedRoundRobin(servers);
        
        Map<String, Integer> counts = new HashMap<>();
        for (int i = 0; i < 400; i++) {
            String id = wrr.next().id;
            counts.put(id, counts.getOrDefault(id, 0) + 1);
        }
        
        // S1 should get ~3x more requests than S2
        double ratio = (double) counts.get("S1") / counts.get("S2");
        assertTrue(ratio > 2.5 && ratio < 3.5, "Ratio: " + ratio);
    }

    @Test
    public void testLeastConnections() {
        List<Server> servers = Arrays.asList(
            new Server("S1"), new Server("S2"), new Server("S3")
        );
        LeastConnections lc = new LeastConnections(servers);
        
        Server s1 = lc.next();
        s1.incrementConnections();
        s1.incrementConnections();
        
        Server s2 = lc.next();
        s2.incrementConnections();
        
        // Next should pick S2 or S3 (both have 1 or 0 connections)
        Server next = lc.next();
        assertTrue(next.getConnections() <= 1);
    }

    @Test
    public void testIPHash() {
        List<Server> servers = Arrays.asList(
            new Server("S1"), new Server("S2"), new Server("S3")
        );
        IPHash ih = new IPHash(servers);
        
        String ip = "192.168.1.100";
        Server s1 = ih.getServer(ip);
        Server s2 = ih.getServer(ip);
        
        // Same IP should always route to same server
        assertEquals(s1, s2);
    }

    @Test
    public void testRandomSelectionDistribution() {
        List<Server> servers = Arrays.asList(
            new Server("S1"), new Server("S2"), new Server("S3")
        );
        RandomSelection rs = new RandomSelection(servers, 12345L);
        
        Map<String, Integer> counts = new HashMap<>();
        for (int i = 0; i < 3000; i++) {
            String id = rs.next().id;
            counts.put(id, counts.getOrDefault(id, 0) + 1);
        }
        
        // Each should get roughly 1000 ± margin
        for (int count : counts.values()) {
            assertTrue(count > 800 && count < 1200, "Count: " + count);
        }
    }

    @Test
    public void testLoadBalancerFactory() {
        List<Server> servers = Arrays.asList(new Server("S1"), new Server("S2"));
        
        LoadBalancer lb = create(Strategy.CONSISTENT_HASH, servers);
        Server s1 = lb.route("user123");
        Server s2 = lb.route("user123");
        assertEquals(s1, s2);
    }
}
