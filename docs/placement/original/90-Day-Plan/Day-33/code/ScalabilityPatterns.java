package day33.scalability;

import java.util.*;
import java.util.concurrent.*;
import java.time.*;
import java.util.stream.*;
import java.util.function.*;

/**
 * DAY 33: SCALABILITY PATTERNS
 * 
 * Topics Covered:
 * 1. Horizontal Pod Autoscaling (HPA)
 * 2. Vertical Pod Autoscaling (VPA)
 * 3. Load Balancing Strategies
 * 4. Caching Patterns
 * 5. Rate Limiting
 * 
 * Real-world applications:
 * - Amazon: Auto-scaling for Black Friday traffic
 * - Netflix: Predictive scaling based on streaming patterns
 * - Shopify: Flash sale handling with autoscaling
 * - Twitter: Real-time event scaling (Super Bowl, elections)
 */

public class ScalabilityPatterns {
    
    /**
     * PATTERN 1: HORIZONTAL POD AUTOSCALER (HPA)
     * ===========================================
     * 
     * Automatically scales number of pods based on:
     * - CPU utilization
     * - Memory utilization
     * - Custom metrics (requests per second, queue length, etc.)
     * 
     * Algorithm: Target metric = (current metric / desired metric) * current replicas
     */
    
    static class HorizontalPodAutoscaler {
        private final String name;
        private final String targetDeployment;
        private final int minReplicas;
        private final int maxReplicas;
        private final List<MetricTarget> metrics;
        private final ScheduledExecutorService scheduler;
        private int currentReplicas;
        private final long evaluationIntervalSeconds;
        
        public HorizontalPodAutoscaler(String name, String targetDeployment, 
                                      int minReplicas, int maxReplicas) {
            this.name = name;
            this.targetDeployment = targetDeployment;
            this.minReplicas = minReplicas;
            this.maxReplicas = maxReplicas;
            this.metrics = new ArrayList<>();
            this.scheduler = Executors.newSingleThreadScheduledExecutor();
            this.currentReplicas = minReplicas;
            this.evaluationIntervalSeconds = 15; // Every 15 seconds
        }
        
        public void addMetric(MetricTarget metric) {
            metrics.add(metric);
        }
        
        public void start(MetricsProvider metricsProvider, ScalingExecutor executor) {
            System.out.println("\n[HPA " + name + "] Started");
            System.out.println("  Target: " + targetDeployment);
            System.out.println("  Range: " + minReplicas + "-" + maxReplicas + " replicas");
            
            scheduler.scheduleAtFixedRate(() -> {
                try {
                    evaluate(metricsProvider, executor);
                } catch (Exception e) {
                    System.err.println("[HPA] Evaluation error: " + e.getMessage());
                }
            }, 0, evaluationIntervalSeconds, TimeUnit.SECONDS);
        }
        
        private void evaluate(MetricsProvider metricsProvider, ScalingExecutor executor) {
            System.out.println("\n[HPA] Evaluating at " + Instant.now());
            
            List<Integer> recommendations = new ArrayList<>();
            
            for (MetricTarget metric : metrics) {
                double currentValue = metricsProvider.getMetric(metric.getName());
                double targetValue = metric.getTarget();
                
                // Calculate desired replicas
                int desiredReplicas = (int) Math.ceil(
                    (currentValue / targetValue) * currentReplicas
                );
                
                // Apply bounds
                desiredReplicas = Math.max(minReplicas, Math.min(maxReplicas, desiredReplicas));
                
                recommendations.add(desiredReplicas);
                
                System.out.println("  Metric: " + metric.getName());
                System.out.println("    Current: " + String.format("%.2f", currentValue) + 
                                 " | Target: " + targetValue);
                System.out.println("    Recommends: " + desiredReplicas + " replicas");
            }
            
            // Use the maximum recommendation (most conservative)
            int newReplicas = recommendations.stream()
                .max(Integer::compareTo)
                .orElse(currentReplicas);
            
            if (newReplicas != currentReplicas) {
                System.out.println("  → Scaling from " + currentReplicas + " to " + newReplicas);
                executor.scale(targetDeployment, newReplicas);
                currentReplicas = newReplicas;
            } else {
                System.out.println("  → No scaling needed");
            }
        }
        
        public void stop() {
            scheduler.shutdown();
            System.out.println("[HPA] Stopped");
        }
        
        public int getCurrentReplicas() {
            return currentReplicas;
        }
    }
    
    static class MetricTarget {
        private final String name;
        private final double target;
        private final MetricType type;
        
        enum MetricType {
            CPU_UTILIZATION,      // Percentage (0-100)
            MEMORY_UTILIZATION,   // Percentage (0-100)
            REQUESTS_PER_SECOND,  // Count
            QUEUE_LENGTH,         // Count
            CUSTOM                // Custom metric
        }
        
        public MetricTarget(String name, MetricType type, double target) {
            this.name = name;
            this.type = type;
            this.target = target;
        }
        
        public String getName() {
            return name;
        }
        
        public double getTarget() {
            return target;
        }
        
        public MetricType getType() {
            return type;
        }
    }
    
    interface MetricsProvider {
        double getMetric(String name);
    }
    
    interface ScalingExecutor {
        void scale(String deployment, int replicas);
    }
    
    /**
     * PATTERN 2: VERTICAL POD AUTOSCALER (VPA)
     * =========================================
     * 
     * Automatically adjusts CPU and memory requests/limits
     * based on actual usage patterns
     */
    
    static class VerticalPodAutoscaler {
        private final String name;
        private final String targetDeployment;
        private final UpdateMode updateMode;
        private final Map<String, ResourceRecommendation> recommendations;
        private final ScheduledExecutorService scheduler;
        
        enum UpdateMode {
            OFF,        // Only provide recommendations
            INITIAL,    // Set on pod creation
            RECREATE,   // Delete and recreate pods
            AUTO        // Update without restarting (requires special support)
        }
        
        public VerticalPodAutoscaler(String name, String targetDeployment, UpdateMode mode) {
            this.name = name;
            this.targetDeployment = targetDeployment;
            this.updateMode = mode;
            this.recommendations = new ConcurrentHashMap<>();
            this.scheduler = Executors.newSingleThreadScheduledExecutor();
        }
        
        public void start(ResourceUsageCollector collector) {
            System.out.println("\n[VPA " + name + "] Started");
            System.out.println("  Target: " + targetDeployment);
            System.out.println("  Mode: " + updateMode);
            
            scheduler.scheduleAtFixedRate(() -> {
                try {
                    analyze(collector);
                } catch (Exception e) {
                    System.err.println("[VPA] Analysis error: " + e.getMessage());
                }
            }, 0, 60, TimeUnit.SECONDS); // Every minute
        }
        
        private void analyze(ResourceUsageCollector collector) {
            System.out.println("\n[VPA] Analyzing resource usage");
            
            Map<String, List<Double>> cpuHistory = collector.getCpuHistory();
            Map<String, List<Double>> memoryHistory = collector.getMemoryHistory();
            
            cpuHistory.forEach((podName, usage) -> {
                // Calculate percentiles
                double p50 = calculatePercentile(usage, 50);
                double p95 = calculatePercentile(usage, 95);
                double p99 = calculatePercentile(usage, 99);
                
                // Recommendation: P95 for request, P99 + 20% for limit
                double recommendedRequest = p95;
                double recommendedLimit = p99 * 1.2;
                
                ResourceRecommendation rec = recommendations.computeIfAbsent(
                    podName, k -> new ResourceRecommendation(podName)
                );
                
                rec.setCpuRequest(recommendedRequest);
                rec.setCpuLimit(recommendedLimit);
                
                System.out.println("  Pod: " + podName);
                System.out.println("    CPU Usage - P50: " + String.format("%.2f", p50) + 
                                 " | P95: " + String.format("%.2f", p95) + 
                                 " | P99: " + String.format("%.2f", p99));
                System.out.println("    Recommended - Request: " + String.format("%.2f", recommendedRequest) + 
                                 " | Limit: " + String.format("%.2f", recommendedLimit));
            });
            
            if (updateMode == UpdateMode.AUTO || updateMode == UpdateMode.RECREATE) {
                applyRecommendations();
            }
        }
        
        private double calculatePercentile(List<Double> data, int percentile) {
            if (data.isEmpty()) return 0;
            
            List<Double> sorted = new ArrayList<>(data);
            Collections.sort(sorted);
            
            int index = (int) Math.ceil((percentile / 100.0) * sorted.size()) - 1;
            index = Math.max(0, Math.min(sorted.size() - 1, index));
            
            return sorted.get(index);
        }
        
        private void applyRecommendations() {
            System.out.println("  → Applying resource recommendations");
            // In production: update pod specs via Kubernetes API
        }
        
        public Map<String, ResourceRecommendation> getRecommendations() {
            return new HashMap<>(recommendations);
        }
        
        public void stop() {
            scheduler.shutdown();
        }
    }
    
    static class ResourceRecommendation {
        private final String podName;
        private double cpuRequest;
        private double cpuLimit;
        private double memoryRequest;
        private double memoryLimit;
        
        public ResourceRecommendation(String podName) {
            this.podName = podName;
        }
        
        public void setCpuRequest(double cpuRequest) {
            this.cpuRequest = cpuRequest;
        }
        
        public void setCpuLimit(double cpuLimit) {
            this.cpuLimit = cpuLimit;
        }
        
        public void setMemoryRequest(double memoryRequest) {
            this.memoryRequest = memoryRequest;
        }
        
        public void setMemoryLimit(double memoryLimit) {
            this.memoryLimit = memoryLimit;
        }
    }
    
    interface ResourceUsageCollector {
        Map<String, List<Double>> getCpuHistory();
        Map<String, List<Double>> getMemoryHistory();
    }
    
    /**
     * PATTERN 3: LOAD BALANCING
     * ==========================
     * 
     * Round Robin - Distribute evenly across backends
     * Least Connections - Route to server with fewest active connections
     * Weighted Round Robin - Route based on server capacity
     * IP Hash - Consistent routing based on client IP
     */
    
    static class LoadBalancer {
        private final String name;
        private final List<Backend> backends;
        private final LoadBalancingStrategy strategy;
        private int roundRobinIndex;
        
        public LoadBalancer(String name, LoadBalancingStrategy strategy) {
            this.name = name;
            this.backends = new CopyOnWriteArrayList<>();
            this.strategy = strategy;
            this.roundRobinIndex = 0;
        }
        
        public void addBackend(Backend backend) {
            backends.add(backend);
            System.out.println("[LB] Added backend: " + backend.getName() + 
                             " (weight: " + backend.getWeight() + ")");
        }
        
        public void removeBackend(Backend backend) {
            backends.remove(backend);
            System.out.println("[LB] Removed backend: " + backend.getName());
        }
        
        public Backend selectBackend(Request request) {
            List<Backend> healthy = backends.stream()
                .filter(Backend::isHealthy)
                .collect(Collectors.toList());
            
            if (healthy.isEmpty()) {
                throw new IllegalStateException("No healthy backends available");
            }
            
            return strategy.select(healthy, request, this);
        }
        
        public synchronized int getAndIncrementRoundRobinIndex() {
            int index = roundRobinIndex;
            roundRobinIndex = (roundRobinIndex + 1) % backends.size();
            return index;
        }
        
        public String getName() {
            return name;
        }
    }
    
    interface LoadBalancingStrategy {
        Backend select(List<Backend> backends, Request request, LoadBalancer lb);
    }
    
    static class RoundRobinStrategy implements LoadBalancingStrategy {
        @Override
        public Backend select(List<Backend> backends, Request request, LoadBalancer lb) {
            int index = lb.getAndIncrementRoundRobinIndex() % backends.size();
            return backends.get(index);
        }
    }
    
    static class LeastConnectionsStrategy implements LoadBalancingStrategy {
        @Override
        public Backend select(List<Backend> backends, Request request, LoadBalancer lb) {
            return backends.stream()
                .min(Comparator.comparingInt(Backend::getActiveConnections))
                .orElseThrow();
        }
    }
    
    static class WeightedRoundRobinStrategy implements LoadBalancingStrategy {
        private final Map<Backend, Integer> currentWeights = new ConcurrentHashMap<>();
        
        @Override
        public Backend select(List<Backend> backends, Request request, LoadBalancer lb) {
            // Weighted round robin using smooth algorithm
            int totalWeight = backends.stream().mapToInt(Backend::getWeight).sum();
            
            Backend selected = null;
            int maxWeight = Integer.MIN_VALUE;
            
            for (Backend backend : backends) {
                int currentWeight = currentWeights.getOrDefault(backend, 0);
                currentWeight += backend.getWeight();
                currentWeights.put(backend, currentWeight);
                
                if (currentWeight > maxWeight) {
                    maxWeight = currentWeight;
                    selected = backend;
                }
            }
            
            if (selected != null) {
                currentWeights.put(selected, maxWeight - totalWeight);
            }
            
            return selected;
        }
    }
    
    static class IpHashStrategy implements LoadBalancingStrategy {
        @Override
        public Backend select(List<Backend> backends, Request request, LoadBalancer lb) {
            int hash = request.getClientIp().hashCode();
            int index = Math.abs(hash) % backends.size();
            return backends.get(index);
        }
    }
    
    static class Backend {
        private final String name;
        private final String host;
        private final int port;
        private final int weight;
        private volatile boolean healthy;
        private final AtomicInteger activeConnections;
        
        public Backend(String name, String host, int port, int weight) {
            this.name = name;
            this.host = host;
            this.port = port;
            this.weight = weight;
            this.healthy = true;
            this.activeConnections = new AtomicInteger(0);
        }
        
        public void handleRequest() {
            activeConnections.incrementAndGet();
            try {
                Thread.sleep(ThreadLocalRandom.current().nextInt(10, 50));
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            } finally {
                activeConnections.decrementAndGet();
            }
        }
        
        public String getName() {
            return name;
        }
        
        public int getWeight() {
            return weight;
        }
        
        public boolean isHealthy() {
            return healthy;
        }
        
        public void setHealthy(boolean healthy) {
            this.healthy = healthy;
        }
        
        public int getActiveConnections() {
            return activeConnections.get();
        }
        
        @Override
        public String toString() {
            return name + " (" + host + ":" + port + ")";
        }
    }
    
    static class Request {
        private final String id;
        private final String clientIp;
        private final String path;
        
        public Request(String id, String clientIp, String path) {
            this.id = id;
            this.clientIp = clientIp;
            this.path = path;
        }
        
        public String getClientIp() {
            return clientIp;
        }
        
        public String getId() {
            return id;
        }
    }
    
    /**
     * PATTERN 4: CACHING STRATEGIES
     * ==============================
     * 
     * Cache-Aside - Application manages cache
     * Read-Through - Cache loads data on miss
     * Write-Through - Write to cache and DB simultaneously
     * Write-Behind - Write to cache, async write to DB
     */
    
    static class CacheManager<K, V> {
        private final Map<K, CacheEntry<V>> cache;
        private final CacheStrategy<K, V> strategy;
        private final int maxSize;
        private final Duration ttl;
        private final ScheduledExecutorService evictionScheduler;
        
        public CacheManager(CacheStrategy<K, V> strategy, int maxSize, Duration ttl) {
            this.cache = new ConcurrentHashMap<>();
            this.strategy = strategy;
            this.maxSize = maxSize;
            this.ttl = ttl;
            this.evictionScheduler = Executors.newSingleThreadScheduledExecutor();
            
            // Schedule periodic eviction
            evictionScheduler.scheduleAtFixedRate(
                this::evictExpired,
                1, 1, TimeUnit.MINUTES
            );
        }
        
        public V get(K key, Supplier<V> loader) {
            return strategy.get(key, loader, this);
        }
        
        public void put(K key, V value) {
            strategy.put(key, value, this);
        }
        
        public void invalidate(K key) {
            cache.remove(key);
        }
        
        public void invalidateAll() {
            cache.clear();
        }
        
        V getFromCache(K key) {
            CacheEntry<V> entry = cache.get(key);
            if (entry == null) {
                return null;
            }
            
            if (entry.isExpired(ttl)) {
                cache.remove(key);
                return null;
            }
            
            entry.recordAccess();
            return entry.getValue();
        }
        
        void putInCache(K key, V value) {
            // Evict if at capacity
            if (cache.size() >= maxSize) {
                evictOne();
            }
            
            cache.put(key, new CacheEntry<>(value));
        }
        
        private void evictOne() {
            // LRU eviction
            cache.entrySet().stream()
                .min(Comparator.comparing(e -> e.getValue().getLastAccessTime()))
                .ifPresent(entry -> cache.remove(entry.getKey()));
        }
        
        private void evictExpired() {
            cache.entrySet().removeIf(entry -> entry.getValue().isExpired(ttl));
        }
        
        public CacheStats getStats() {
            return new CacheStats(
                cache.size(),
                maxSize,
                cache.values().stream()
                    .mapToInt(CacheEntry::getHitCount)
                    .sum()
            );
        }
        
        public void shutdown() {
            evictionScheduler.shutdown();
        }
    }
    
    static class CacheEntry<V> {
        private final V value;
        private final Instant createdAt;
        private volatile Instant lastAccessTime;
        private final AtomicInteger hitCount;
        
        public CacheEntry(V value) {
            this.value = value;
            this.createdAt = Instant.now();
            this.lastAccessTime = Instant.now();
            this.hitCount = new AtomicInteger(0);
        }
        
        public V getValue() {
            return value;
        }
        
        public void recordAccess() {
            lastAccessTime = Instant.now();
            hitCount.incrementAndGet();
        }
        
        public boolean isExpired(Duration ttl) {
            return Duration.between(createdAt, Instant.now()).compareTo(ttl) > 0;
        }
        
        public Instant getLastAccessTime() {
            return lastAccessTime;
        }
        
        public int getHitCount() {
            return hitCount.get();
        }
    }
    
    interface CacheStrategy<K, V> {
        V get(K key, Supplier<V> loader, CacheManager<K, V> manager);
        void put(K key, V value, CacheManager<K, V> manager);
    }
    
    // Cache-Aside Pattern
    static class CacheAsideStrategy<K, V> implements CacheStrategy<K, V> {
        @Override
        public V get(K key, Supplier<V> loader, CacheManager<K, V> manager) {
            // Try cache first
            V value = manager.getFromCache(key);
            
            if (value != null) {
                System.out.println("[Cache] HIT: " + key);
                return value;
            }
            
            // Cache miss - load from source
            System.out.println("[Cache] MISS: " + key);
            value = loader.get();
            
            // Put in cache
            manager.putInCache(key, value);
            
            return value;
        }
        
        @Override
        public void put(K key, V value, CacheManager<K, V> manager) {
            // Write to database first
            // Then update cache
            manager.putInCache(key, value);
        }
    }
    
    // Write-Through Pattern
    static class WriteThroughStrategy<K, V> implements CacheStrategy<K, V> {
        private final Map<K, V> database;
        
        public WriteThroughStrategy(Map<K, V> database) {
            this.database = database;
        }
        
        @Override
        public V get(K key, Supplier<V> loader, CacheManager<K, V> manager) {
            V value = manager.getFromCache(key);
            
            if (value != null) {
                return value;
            }
            
            // Load from database
            value = database.get(key);
            if (value != null) {
                manager.putInCache(key, value);
            }
            
            return value;
        }
        
        @Override
        public void put(K key, V value, CacheManager<K, V> manager) {
            // Write to both cache and database synchronously
            manager.putInCache(key, value);
            database.put(key, value);
            System.out.println("[Write-Through] Updated cache and DB: " + key);
        }
    }
    
    static class CacheStats {
        final int size;
        final int maxSize;
        final int totalHits;
        
        public CacheStats(int size, int maxSize, int totalHits) {
            this.size = size;
            this.maxSize = maxSize;
            this.totalHits = totalHits;
        }
    }
    
    /**
     * PATTERN 5: RATE LIMITING
     * =========================
     * 
     * Token Bucket - Tokens added at fixed rate
     * Leaky Bucket - Requests processed at fixed rate
     * Fixed Window - Count requests in fixed time windows
     * Sliding Window - More accurate than fixed window
     */
    
    static class RateLimiter {
        private final RateLimitStrategy strategy;
        
        public RateLimiter(RateLimitStrategy strategy) {
            this.strategy = strategy;
        }
        
        public boolean allowRequest(String clientId) {
            return strategy.allowRequest(clientId);
        }
    }
    
    interface RateLimitStrategy {
        boolean allowRequest(String clientId);
    }
    
    // Token Bucket Algorithm
    static class TokenBucketStrategy implements RateLimitStrategy {
        private final int capacity;
        private final int refillRate; // tokens per second
        private final Map<String, TokenBucket> buckets;
        
        public TokenBucketStrategy(int capacity, int refillRate) {
            this.capacity = capacity;
            this.refillRate = refillRate;
            this.buckets = new ConcurrentHashMap<>();
        }
        
        @Override
        public boolean allowRequest(String clientId) {
            TokenBucket bucket = buckets.computeIfAbsent(
                clientId, k -> new TokenBucket(capacity, refillRate)
            );
            
            return bucket.tryConsume();
        }
    }
    
    static class TokenBucket {
        private final int capacity;
        private final int refillRate;
        private double tokens;
        private Instant lastRefill;
        
        public TokenBucket(int capacity, int refillRate) {
            this.capacity = capacity;
            this.refillRate = refillRate;
            this.tokens = capacity;
            this.lastRefill = Instant.now();
        }
        
        public synchronized boolean tryConsume() {
            refill();
            
            if (tokens >= 1.0) {
                tokens -= 1.0;
                return true;
            }
            
            return false;
        }
        
        private void refill() {
            Instant now = Instant.now();
            double secondsElapsed = Duration.between(lastRefill, now).toMillis() / 1000.0;
            
            double tokensToAdd = secondsElapsed * refillRate;
            tokens = Math.min(capacity, tokens + tokensToAdd);
            
            lastRefill = now;
        }
    }
    
    // Sliding Window Counter
    static class SlidingWindowStrategy implements RateLimitStrategy {
        private final int maxRequests;
        private final Duration windowSize;
        private final Map<String, Queue<Instant>> requestTimestamps;
        
        public SlidingWindowStrategy(int maxRequests, Duration windowSize) {
            this.maxRequests = maxRequests;
            this.windowSize = windowSize;
            this.requestTimestamps = new ConcurrentHashMap<>();
        }
        
        @Override
        public boolean allowRequest(String clientId) {
            Queue<Instant> timestamps = requestTimestamps.computeIfAbsent(
                clientId, k -> new ConcurrentLinkedQueue<>()
            );
            
            Instant now = Instant.now();
            Instant windowStart = now.minus(windowSize);
            
            // Remove old timestamps
            timestamps.removeIf(t -> t.isBefore(windowStart));
            
            if (timestamps.size() < maxRequests) {
                timestamps.offer(now);
                return true;
            }
            
            return false;
        }
    }
    
    /**
     * DEMONSTRATION
     */
    public static void main(String[] args) throws Exception {
        System.out.println("=".repeat(70));
        System.out.println("DAY 33: SCALABILITY PATTERNS");
        System.out.println("=".repeat(70));
        
        // Demo 1: Horizontal Pod Autoscaler
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 1: HORIZONTAL POD AUTOSCALING");
        System.out.println("=".repeat(70));
        
        MetricsProvider metricsProvider = new MetricsProvider() {
            private int counter = 0;
            
            @Override
            public double getMetric(String name) {
                counter++;
                if ("cpu".equals(name)) {
                    // Simulate increasing CPU load
                    return 30 + (counter * 15);
                }
                return 50.0;
            }
        };
        
        ScalingExecutor executor = (deployment, replicas) -> {
            System.out.println("  ✓ Scaled " + deployment + " to " + replicas + " replicas");
        };
        
        HorizontalPodAutoscaler hpa = new HorizontalPodAutoscaler(
            "web-app-hpa", "web-deployment", 2, 10
        );
        hpa.addMetric(new MetricTarget("cpu", MetricTarget.MetricType.CPU_UTILIZATION, 50.0));
        
        hpa.start(metricsProvider, executor);
        Thread.sleep(3500);
        hpa.stop();
        
        // Demo 2: Vertical Pod Autoscaler
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 2: VERTICAL POD AUTOSCALING");
        System.out.println("=".repeat(70));
        
        ResourceUsageCollector collector = new ResourceUsageCollector() {
            @Override
            public Map<String, List<Double>> getCpuHistory() {
                Map<String, List<Double>> history = new HashMap<>();
                List<Double> usage = Arrays.asList(45.0, 52.0, 48.0, 55.0, 60.0, 58.0, 62.0);
                history.put("web-pod-1", usage);
                return history;
            }
            
            @Override
            public Map<String, List<Double>> getMemoryHistory() {
                return new HashMap<>();
            }
        };
        
        VerticalPodAutoscaler vpa = new VerticalPodAutoscaler(
            "web-app-vpa", "web-deployment", VerticalPodAutoscaler.UpdateMode.OFF
        );
        vpa.start(collector);
        Thread.sleep(1500);
        vpa.stop();
        
        // Demo 3: Load Balancing
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 3: LOAD BALANCING STRATEGIES");
        System.out.println("=".repeat(70));
        
        // Round Robin
        LoadBalancer rrLb = new LoadBalancer("round-robin-lb", new RoundRobinStrategy());
        rrLb.addBackend(new Backend("backend-1", "10.0.1.1", 8080, 1));
        rrLb.addBackend(new Backend("backend-2", "10.0.1.2", 8080, 1));
        rrLb.addBackend(new Backend("backend-3", "10.0.1.3", 8080, 1));
        
        System.out.println("\nRound Robin:");
        for (int i = 0; i < 6; i++) {
            Request req = new Request("req-" + i, "192.168.1.100", "/api/users");
            Backend backend = rrLb.selectBackend(req);
            System.out.println("  Request " + i + " → " + backend.getName());
        }
        
        // Weighted Round Robin
        LoadBalancer wrrLb = new LoadBalancer("weighted-lb", new WeightedRoundRobinStrategy());
        wrrLb.addBackend(new Backend("high-capacity", "10.0.2.1", 8080, 3));
        wrrLb.addBackend(new Backend("medium-capacity", "10.0.2.2", 8080, 2));
        wrrLb.addBackend(new Backend("low-capacity", "10.0.2.3", 8080, 1));
        
        System.out.println("\nWeighted Round Robin:");
        Map<String, Integer> distribution = new HashMap<>();
        for (int i = 0; i < 12; i++) {
            Request req = new Request("req-" + i, "192.168.1.100", "/api/orders");
            Backend backend = wrrLb.selectBackend(req);
            distribution.merge(backend.getName(), 1, Integer::sum);
        }
        distribution.forEach((name, count) -> 
            System.out.println("  " + name + ": " + count + " requests")
        );
        
        // Demo 4: Caching
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 4: CACHING STRATEGIES");
        System.out.println("=".repeat(70));
        
        CacheManager<String, String> cache = new CacheManager<>(
            new CacheAsideStrategy<>(),
            100,
            Duration.ofMinutes(5)
        );
        
        Supplier<String> dbLoader = () -> {
            System.out.println("  [DB] Loading from database...");
            return "User data from DB";
        };
        
        System.out.println("\nCache-Aside Pattern:");
        String value1 = cache.get("user:123", dbLoader);
        String value2 = cache.get("user:123", dbLoader); // Should hit cache
        String value3 = cache.get("user:456", dbLoader); // Different key, miss
        
        CacheStats stats = cache.getStats();
        System.out.println("\nCache Stats:");
        System.out.println("  Size: " + stats.size + "/" + stats.maxSize);
        System.out.println("  Total Hits: " + stats.totalHits);
        
        cache.shutdown();
        
        // Demo 5: Rate Limiting
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 5: RATE LIMITING");
        System.out.println("=".repeat(70));
        
        // Token Bucket: 5 requests per second
        RateLimiter tokenBucket = new RateLimiter(new TokenBucketStrategy(5, 2));
        
        System.out.println("\nToken Bucket (5 capacity, 2/sec refill):");
        for (int i = 0; i < 8; i++) {
            boolean allowed = tokenBucket.allowRequest("client-1");
            System.out.println("  Request " + (i+1) + ": " + (allowed ? "✓ ALLOWED" : "✗ REJECTED"));
        }
        
        // Sliding Window: 3 requests per 2 seconds
        RateLimiter slidingWindow = new RateLimiter(
            new SlidingWindowStrategy(3, Duration.ofSeconds(2))
        );
        
        System.out.println("\nSliding Window (3 requests per 2 seconds):");
        for (int i = 0; i < 5; i++) {
            boolean allowed = slidingWindow.allowRequest("client-2");
            System.out.println("  Request " + (i+1) + ": " + (allowed ? "✓ ALLOWED" : "✗ REJECTED"));
            if (i == 2) {
                Thread.sleep(2100); // Wait for window to slide
                System.out.println("  [Waited 2 seconds - window refreshed]");
            }
        }
        
        System.out.println("\n" + "=".repeat(70));
        System.out.println("ALL DEMONSTRATIONS COMPLETED SUCCESSFULLY!");
        System.out.println("=".repeat(70));
    }
}
