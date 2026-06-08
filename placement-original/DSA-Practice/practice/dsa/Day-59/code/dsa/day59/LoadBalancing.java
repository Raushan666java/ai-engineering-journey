package dsa.day59;

import java.util.*;
import java.util.concurrent.ConcurrentSkipListMap;
import java.util.concurrent.atomic.AtomicInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * Day 59: Consistent Hashing & Load Balancing - Production implementations
 *
 * Implementations:
 * 1. Consistent Hashing with Virtual Nodes
 * 2. Round Robin Load Balancer
 * 3. Weighted Round Robin
 * 4. Least Connections
 * 5. Random Selection
 * 6. Hash-based (IP Hash)
 *
 * Consistent Hashing provides:
 * - Minimal rebalancing when nodes added/removed (only K/N keys move)
 * - Uniform distribution with virtual nodes
 * - O(log N) lookup using TreeMap
 */
public class LoadBalancing {

    // ==================== Consistent Hashing ====================
    /**
     * Consistent Hashing with Virtual Nodes
     * 
     * Virtual nodes improve distribution uniformity:
     * - Each physical node creates multiple virtual nodes on the ring
     * - More virtual nodes = better distribution but higher memory
     * 
     * Time: O(log N) for get/add/remove where N = total virtual nodes
     * Space: O(N * virtualNodes)
     */
    public static class ConsistentHash<T> {
        private final TreeMap<Long, T> ring;
        private final int virtualNodes;
        private final Map<T, Set<Long>> nodeHashes;

        public ConsistentHash(int virtualNodes) {
            this.ring = new TreeMap<>();
            this.virtualNodes = virtualNodes;
            this.nodeHashes = new HashMap<>();
        }

        public void addNode(T node) {
            Set<Long> hashes = new HashSet<>();
            for (int i = 0; i < virtualNodes; i++) {
                String key = node.toString() + "#" + i;
                long hash = hash(key);
                ring.put(hash, node);
                hashes.add(hash);
            }
            nodeHashes.put(node, hashes);
        }

        public void removeNode(T node) {
            Set<Long> hashes = nodeHashes.remove(node);
            if (hashes != null) {
                for (long hash : hashes) {
                    ring.remove(hash);
                }
            }
        }

        public T getNode(String key) {
            if (ring.isEmpty()) return null;
            long hash = hash(key);
            Map.Entry<Long, T> entry = ring.ceilingEntry(hash);
            if (entry == null) {
                entry = ring.firstEntry();
            }
            return entry.getValue();
        }

        private long hash(String key) {
            try {
                MessageDigest md = MessageDigest.getInstance("MD5");
                byte[] digest = md.digest(key.getBytes());
                long hash = 0;
                for (int i = 0; i < 8; i++) {
                    hash = (hash << 8) | (digest[i] & 0xFF);
                }
                return hash;
            } catch (NoSuchAlgorithmException e) {
                return key.hashCode();
            }
        }

        public int nodeCount() { return nodeHashes.size(); }
        public int virtualNodeCount() { return ring.size(); }

        // Distribution analysis helper
        public Map<T, Integer> getDistribution(List<String> keys) {
            Map<T, Integer> dist = new HashMap<>();
            for (String key : keys) {
                T node = getNode(key);
                dist.put(node, dist.getOrDefault(node, 0) + 1);
            }
            return dist;
        }
    }

    // ==================== Server abstraction ====================
    public static class Server {
        public final String id;
        public final int weight;
        private final AtomicInteger activeConnections;

        public Server(String id, int weight) {
            this.id = id;
            this.weight = weight;
            this.activeConnections = new AtomicInteger(0);
        }

        public Server(String id) { this(id, 1); }

        public int getConnections() { return activeConnections.get(); }
        public void incrementConnections() { activeConnections.incrementAndGet(); }
        public void decrementConnections() { activeConnections.decrementAndGet(); }

        @Override
        public String toString() { return id; }
        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (!(o instanceof Server)) return false;
            return id.equals(((Server) o).id);
        }
        @Override
        public int hashCode() { return id.hashCode(); }
    }

    // ==================== 2. Round Robin ====================
    /**
     * Round Robin - simplest load balancing
     * Time: O(1), Space: O(1)
     */
    public static class RoundRobin {
        private final List<Server> servers;
        private final AtomicInteger index;

        public RoundRobin(List<Server> servers) {
            this.servers = new ArrayList<>(servers);
            this.index = new AtomicInteger(0);
        }

        public Server next() {
            if (servers.isEmpty()) return null;
            int idx = index.getAndIncrement() % servers.size();
            return servers.get(idx);
        }
    }

    // ==================== 3. Weighted Round Robin ====================
    /**
     * Weighted Round Robin - respects server capacity
     * Time: O(1) amortized, Space: O(sum of weights)
     */
    public static class WeightedRoundRobin {
        private final List<Server> expandedList;
        private final AtomicInteger index;

        public WeightedRoundRobin(List<Server> servers) {
            this.expandedList = new ArrayList<>();
            for (Server s : servers) {
                for (int i = 0; i < s.weight; i++) {
                    expandedList.add(s);
                }
            }
            this.index = new AtomicInteger(0);
        }

        public Server next() {
            if (expandedList.isEmpty()) return null;
            int idx = index.getAndIncrement() % expandedList.size();
            return expandedList.get(idx);
        }
    }

    // ==================== 4. Least Connections ====================
    /**
     * Least Connections - routes to server with fewest active connections
     * Time: O(N), Space: O(1)
     */
    public static class LeastConnections {
        private final List<Server> servers;

        public LeastConnections(List<Server> servers) {
            this.servers = new ArrayList<>(servers);
        }

        public synchronized Server next() {
            if (servers.isEmpty()) return null;
            Server min = servers.get(0);
            for (Server s : servers) {
                if (s.getConnections() < min.getConnections()) {
                    min = s;
                }
            }
            return min;
        }
    }

    // ==================== 5. Random Selection ====================
    /**
     * Random Selection - uniformly random
     * Time: O(1), Space: O(1)
     */
    public static class RandomSelection {
        private final List<Server> servers;
        private final Random rand;

        public RandomSelection(List<Server> servers, long seed) {
            this.servers = new ArrayList<>(servers);
            this.rand = new Random(seed);
        }

        public RandomSelection(List<Server> servers) {
            this(servers, System.nanoTime());
        }

        public Server next() {
            if (servers.isEmpty()) return null;
            return servers.get(rand.nextInt(servers.size()));
        }
    }

    // ==================== 6. IP Hash ====================
    /**
     * IP Hash - consistent routing based on client IP
     * Time: O(1), Space: O(1)
     */
    public static class IPHash {
        private final List<Server> servers;

        public IPHash(List<Server> servers) {
            this.servers = new ArrayList<>(servers);
        }

        public Server getServer(String clientIP) {
            if (servers.isEmpty()) return null;
            int hash = Math.abs(clientIP.hashCode());
            return servers.get(hash % servers.size());
        }
    }

    // ==================== Load Balancer Factory ====================
    public enum Strategy {
        ROUND_ROBIN, WEIGHTED_ROUND_ROBIN, LEAST_CONNECTIONS, RANDOM, IP_HASH, CONSISTENT_HASH
    }

    public interface LoadBalancer {
        Server next();
        default Server route(String clientKey) { return next(); }
    }

    public static LoadBalancer create(Strategy strategy, List<Server> servers) {
        switch (strategy) {
            case ROUND_ROBIN:
                RoundRobin rr = new RoundRobin(servers);
                return rr::next;
            case WEIGHTED_ROUND_ROBIN:
                WeightedRoundRobin wrr = new WeightedRoundRobin(servers);
                return wrr::next;
            case LEAST_CONNECTIONS:
                LeastConnections lc = new LeastConnections(servers);
                return lc::next;
            case RANDOM:
                RandomSelection rs = new RandomSelection(servers);
                return rs::next;
            case IP_HASH:
                IPHash ih = new IPHash(servers);
                return new LoadBalancer() {
                    @Override public Server next() { return ih.getServer("default"); }
                    @Override public Server route(String clientKey) { return ih.getServer(clientKey); }
                };
            case CONSISTENT_HASH:
                ConsistentHash<Server> ch = new ConsistentHash<>(150);
                servers.forEach(ch::addNode);
                return new LoadBalancer() {
                    @Override public Server next() { return ch.getNode(UUID.randomUUID().toString()); }
                    @Override public Server route(String clientKey) { return ch.getNode(clientKey); }
                };
            default:
                throw new IllegalArgumentException("Unknown strategy");
        }
    }
}
