/**
 * DAY 27: CLOUD COMPUTING & DEVOPS PATTERNS
 * 
 * Topics Covered:
 * 1. Cloud Design Patterns (10 patterns)
 * 2. Container Orchestration (Kubernetes patterns)
 * 3. Infrastructure as Code (IaC)
 * 4. Cloud Migration Strategies
 * 5. Serverless Architecture
 * 6. Multi-Cloud Patterns
 * 
 * Each pattern includes:
 * - Complete implementation
 * - Time/Space complexity analysis
 * - Production-ready code
 * - Comprehensive demonstrations
 * - Real-world use cases
 */

import java.util.*;
import java.util.concurrent.*;
import java.time.*;
import java.util.stream.*;

public class CloudComputingPatterns {

    // ==================== 1. AUTO-SCALING PATTERN ====================
    
    /**
     * Auto-Scaling Pattern
     * Automatically adjusts compute resources based on demand
     * 
     * Time Complexity: O(1) for scaling decision
     * Space Complexity: O(n) where n = metrics history
     */
    static class AutoScaler {
        private int currentInstances;
        private final int minInstances;
        private final int maxInstances;
        private final double scaleUpThreshold;
        private final double scaleDownThreshold;
        private final Queue<Double> metricsHistory;
        private final int historySize;
        private final List<ScalingPolicy> policies;
        
        static class ScalingPolicy {
            String name;
            String metricName;
            double threshold;
            int adjustmentValue;
            String adjustmentType; // "ChangeInCapacity", "ExactCapacity", "PercentChangeInCapacity"
            int cooldownPeriod; // seconds
            long lastScalingTime;
            
            ScalingPolicy(String name, String metricName, double threshold, 
                         int adjustmentValue, String adjustmentType, int cooldownPeriod) {
                this.name = name;
                this.metricName = metricName;
                this.threshold = threshold;
                this.adjustmentValue = adjustmentValue;
                this.adjustmentType = adjustmentType;
                this.cooldownPeriod = cooldownPeriod;
                this.lastScalingTime = 0;
            }
            
            boolean canScale() {
                return System.currentTimeMillis() - lastScalingTime > cooldownPeriod * 1000L;
            }
        }
        
        static class ScalingEvent {
            Instant timestamp;
            int oldCapacity;
            int newCapacity;
            String reason;
            String policyName;
            
            ScalingEvent(int oldCapacity, int newCapacity, String reason, String policyName) {
                this.timestamp = Instant.now();
                this.oldCapacity = oldCapacity;
                this.newCapacity = newCapacity;
                this.reason = reason;
                this.policyName = policyName;
            }
            
            @Override
            public String toString() {
                return String.format("[%s] Scaled from %d to %d instances (Policy: %s, Reason: %s)",
                    timestamp, oldCapacity, newCapacity, policyName, reason);
            }
        }
        
        private final List<ScalingEvent> scalingHistory;
        
        AutoScaler(int initialInstances, int minInstances, int maxInstances,
                   double scaleUpThreshold, double scaleDownThreshold, int historySize) {
            this.currentInstances = initialInstances;
            this.minInstances = minInstances;
            this.maxInstances = maxInstances;
            this.scaleUpThreshold = scaleUpThreshold;
            this.scaleDownThreshold = scaleDownThreshold;
            this.historySize = historySize;
            this.metricsHistory = new LinkedList<>();
            this.policies = new ArrayList<>();
            this.scalingHistory = new ArrayList<>();
        }
        
        void addPolicy(ScalingPolicy policy) {
            policies.add(policy);
        }
        
        void reportMetric(double cpuUtilization) {
            metricsHistory.offer(cpuUtilization);
            if (metricsHistory.size() > historySize) {
                metricsHistory.poll();
            }
            
            evaluateScaling(cpuUtilization);
        }
        
        private void evaluateScaling(double currentMetric) {
            for (ScalingPolicy policy : policies) {
                if (!policy.canScale()) continue;
                
                if (policy.metricName.equals("CPU") && shouldTriggerPolicy(currentMetric, policy)) {
                    int oldCapacity = currentInstances;
                    scale(policy);
                    policy.lastScalingTime = System.currentTimeMillis();
                    
                    if (currentInstances != oldCapacity) {
                        String reason = String.format("CPU %.1f%% %s threshold %.1f%%",
                            currentMetric, currentMetric > policy.threshold ? "above" : "below", policy.threshold);
                        scalingHistory.add(new ScalingEvent(oldCapacity, currentInstances, reason, policy.name));
                    }
                    break;
                }
            }
        }
        
        private boolean shouldTriggerPolicy(double metric, ScalingPolicy policy) {
            if (policy.adjustmentValue > 0) {
                return metric >= policy.threshold;
            } else {
                return metric <= policy.threshold;
            }
        }
        
        private void scale(ScalingPolicy policy) {
            int newCapacity = currentInstances;
            
            switch (policy.adjustmentType) {
                case "ChangeInCapacity":
                    newCapacity = currentInstances + policy.adjustmentValue;
                    break;
                case "ExactCapacity":
                    newCapacity = policy.adjustmentValue;
                    break;
                case "PercentChangeInCapacity":
                    newCapacity = currentInstances + (int)(currentInstances * policy.adjustmentValue / 100.0);
                    break;
            }
            
            currentInstances = Math.max(minInstances, Math.min(maxInstances, newCapacity));
        }
        
        double getAverageUtilization() {
            if (metricsHistory.isEmpty()) return 0.0;
            return metricsHistory.stream().mapToDouble(d -> d).average().orElse(0.0);
        }
        
        int getCurrentInstances() {
            return currentInstances;
        }
        
        List<ScalingEvent> getScalingHistory() {
            return new ArrayList<>(scalingHistory);
        }
    }

    // ==================== 2. CIRCUIT BREAKER FOR CLOUD SERVICES ====================
    
    /**
     * Circuit Breaker for Cloud Services
     * Prevents cascading failures in distributed cloud systems
     * 
     * Time Complexity: O(1) for all operations
     * Space Complexity: O(w) where w = metrics window size
     */
    static class CloudCircuitBreaker {
        enum State { CLOSED, OPEN, HALF_OPEN }
        
        private State state;
        private int failureCount;
        private int successCount;
        private final int failureThreshold;
        private final int successThreshold;
        private final long timeout;
        private long lastFailureTime;
        private final Map<String, ServiceMetrics> serviceMetrics;
        
        static class ServiceMetrics {
            long totalRequests;
            long successfulRequests;
            long failedRequests;
            double averageResponseTime;
            Queue<Long> responseTimes;
            int maxResponseTimeHistory;
            
            ServiceMetrics(int maxHistory) {
                this.maxResponseTimeHistory = maxHistory;
                this.responseTimes = new LinkedList<>();
            }
            
            void recordSuccess(long responseTime) {
                totalRequests++;
                successfulRequests++;
                recordResponseTime(responseTime);
            }
            
            void recordFailure() {
                totalRequests++;
                failedRequests++;
            }
            
            private void recordResponseTime(long responseTime) {
                responseTimes.offer(responseTime);
                if (responseTimes.size() > maxResponseTimeHistory) {
                    responseTimes.poll();
                }
                averageResponseTime = responseTimes.stream().mapToLong(l -> l).average().orElse(0);
            }
            
            double getSuccessRate() {
                return totalRequests == 0 ? 0 : (double) successfulRequests / totalRequests * 100;
            }
            
            @Override
            public String toString() {
                return String.format("Total: %d, Success: %d (%.1f%%), Failed: %d, Avg Response: %.0fms",
                    totalRequests, successfulRequests, getSuccessRate(), failedRequests, averageResponseTime);
            }
        }
        
        CloudCircuitBreaker(int failureThreshold, int successThreshold, long timeout) {
            this.state = State.CLOSED;
            this.failureThreshold = failureThreshold;
            this.successThreshold = successThreshold;
            this.timeout = timeout;
            this.failureCount = 0;
            this.successCount = 0;
            this.serviceMetrics = new ConcurrentHashMap<>();
        }
        
        <T> T execute(String serviceName, CloudServiceCall<T> call, T fallbackValue) throws Exception {
            ServiceMetrics metrics = serviceMetrics.computeIfAbsent(serviceName, k -> new ServiceMetrics(100));
            
            if (state == State.OPEN) {
                if (System.currentTimeMillis() - lastFailureTime >= timeout) {
                    state = State.HALF_OPEN;
                    successCount = 0;
                } else {
                    return fallbackValue;
                }
            }
            
            long startTime = System.currentTimeMillis();
            try {
                T result = call.execute();
                long responseTime = System.currentTimeMillis() - startTime;
                
                metrics.recordSuccess(responseTime);
                onSuccess();
                return result;
            } catch (Exception e) {
                metrics.recordFailure();
                onFailure();
                throw e;
            }
        }
        
        private void onSuccess() {
            failureCount = 0;
            if (state == State.HALF_OPEN) {
                successCount++;
                if (successCount >= successThreshold) {
                    state = State.CLOSED;
                    successCount = 0;
                }
            }
        }
        
        private void onFailure() {
            successCount = 0;
            failureCount++;
            lastFailureTime = System.currentTimeMillis();
            if (failureCount >= failureThreshold) {
                state = State.OPEN;
            }
        }
        
        State getState() {
            return state;
        }
        
        Map<String, ServiceMetrics> getServiceMetrics() {
            return new HashMap<>(serviceMetrics);
        }
    }
    
    @FunctionalInterface
    interface CloudServiceCall<T> {
        T execute() throws Exception;
    }

    // ==================== 3. LOAD BALANCER ====================
    
    /**
     * Cloud Load Balancer
     * Distributes traffic across multiple instances
     * 
     * Algorithms:
     * - Round Robin: O(1)
     * - Least Connections: O(n)
     * - Weighted Round Robin: O(1)
     * - IP Hash: O(1)
     */
    static class LoadBalancer {
        enum Algorithm { ROUND_ROBIN, LEAST_CONNECTIONS, WEIGHTED_ROUND_ROBIN, IP_HASH }
        
        static class Backend {
            String id;
            String host;
            int port;
            int weight;
            int activeConnections;
            boolean healthy;
            long totalRequests;
            double averageResponseTime;
            
            Backend(String id, String host, int port, int weight) {
                this.id = id;
                this.host = host;
                this.port = port;
                this.weight = weight;
                this.activeConnections = 0;
                this.healthy = true;
                this.totalRequests = 0;
                this.averageResponseTime = 0;
            }
            
            void incrementConnections() {
                activeConnections++;
                totalRequests++;
            }
            
            void decrementConnections() {
                activeConnections = Math.max(0, activeConnections - 1);
            }
            
            @Override
            public String toString() {
                return String.format("%s (%s:%d) - Weight: %d, Connections: %d, Healthy: %s, Requests: %d",
                    id, host, port, weight, activeConnections, healthy, totalRequests);
            }
        }
        
        private final List<Backend> backends;
        private final Algorithm algorithm;
        private int roundRobinIndex;
        private int weightedRoundRobinIndex;
        private int currentWeight;
        
        LoadBalancer(Algorithm algorithm) {
            this.backends = new ArrayList<>();
            this.algorithm = algorithm;
            this.roundRobinIndex = 0;
            this.weightedRoundRobinIndex = 0;
            this.currentWeight = 0;
        }
        
        void addBackend(Backend backend) {
            backends.add(backend);
        }
        
        void removeBackend(String backendId) {
            backends.removeIf(b -> b.id.equals(backendId));
        }
        
        void markHealthy(String backendId, boolean healthy) {
            backends.stream()
                   .filter(b -> b.id.equals(backendId))
                   .forEach(b -> b.healthy = healthy);
        }
        
        Backend selectBackend(String clientIp) {
            List<Backend> healthyBackends = backends.stream()
                                                   .filter(b -> b.healthy)
                                                   .collect(Collectors.toList());
            
            if (healthyBackends.isEmpty()) {
                return null;
            }
            
            switch (algorithm) {
                case ROUND_ROBIN:
                    return roundRobin(healthyBackends);
                case LEAST_CONNECTIONS:
                    return leastConnections(healthyBackends);
                case WEIGHTED_ROUND_ROBIN:
                    return weightedRoundRobin(healthyBackends);
                case IP_HASH:
                    return ipHash(healthyBackends, clientIp);
                default:
                    return roundRobin(healthyBackends);
            }
        }
        
        private Backend roundRobin(List<Backend> backends) {
            Backend backend = backends.get(roundRobinIndex % backends.size());
            roundRobinIndex = (roundRobinIndex + 1) % backends.size();
            return backend;
        }
        
        private Backend leastConnections(List<Backend> backends) {
            return backends.stream()
                          .min(Comparator.comparingInt(b -> b.activeConnections))
                          .orElse(null);
        }
        
        private Backend weightedRoundRobin(List<Backend> backends) {
            int maxWeight = backends.stream().mapToInt(b -> b.weight).max().orElse(1);
            
            while (true) {
                weightedRoundRobinIndex = (weightedRoundRobinIndex + 1) % backends.size();
                if (weightedRoundRobinIndex == 0) {
                    currentWeight = currentWeight - 1;
                    if (currentWeight <= 0) {
                        currentWeight = maxWeight;
                    }
                }
                
                Backend backend = backends.get(weightedRoundRobinIndex);
                if (backend.weight >= currentWeight) {
                    return backend;
                }
            }
        }
        
        private Backend ipHash(List<Backend> backends, String clientIp) {
            int hash = Math.abs(clientIp.hashCode());
            int index = hash % backends.size();
            return backends.get(index);
        }
        
        List<Backend> getBackends() {
            return new ArrayList<>(backends);
        }
    }

    // ==================== 4. CONTENT DELIVERY NETWORK (CDN) ====================
    
    /**
     * CDN Simulation
     * Caches and serves content from edge locations
     * 
     * Time Complexity: O(1) for cache operations
     * Space Complexity: O(c) where c = cached content
     */
    static class CDN {
        static class EdgeLocation {
            String region;
            String location;
            Map<String, CachedContent> cache;
            int maxCacheSize;
            long totalHits;
            long totalMisses;
            
            static class CachedContent {
                String key;
                byte[] content;
                String contentType;
                long cachedTime;
                long expiryTime;
                long accessCount;
                
                CachedContent(String key, byte[] content, String contentType, long ttl) {
                    this.key = key;
                    this.content = content;
                    this.contentType = contentType;
                    this.cachedTime = System.currentTimeMillis();
                    this.expiryTime = cachedTime + ttl;
                    this.accessCount = 0;
                }
                
                boolean isExpired() {
                    return System.currentTimeMillis() > expiryTime;
                }
                
                void access() {
                    accessCount++;
                }
            }
            
            EdgeLocation(String region, String location, int maxCacheSize) {
                this.region = region;
                this.location = location;
                this.maxCacheSize = maxCacheSize;
                this.cache = new LinkedHashMap<String, CachedContent>(maxCacheSize, 0.75f, true) {
                    @Override
                    protected boolean removeEldestEntry(Map.Entry<String, CachedContent> eldest) {
                        return size() > maxCacheSize;
                    }
                };
                this.totalHits = 0;
                this.totalMisses = 0;
            }
            
            byte[] getContent(String key) {
                CachedContent content = cache.get(key);
                
                if (content != null && !content.isExpired()) {
                    content.access();
                    totalHits++;
                    return content.content;
                }
                
                if (content != null && content.isExpired()) {
                    cache.remove(key);
                }
                
                totalMisses++;
                return null;
            }
            
            void putContent(String key, byte[] content, String contentType, long ttl) {
                cache.put(key, new CachedContent(key, content, contentType, ttl));
            }
            
            void invalidate(String key) {
                cache.remove(key);
            }
            
            double getCacheHitRatio() {
                long total = totalHits + totalMisses;
                return total == 0 ? 0 : (double) totalHits / total * 100;
            }
            
            @Override
            public String toString() {
                return String.format("%s (%s) - Cache: %d items, Hit Ratio: %.1f%%",
                    location, region, cache.size(), getCacheHitRatio());
            }
        }
        
        private final Map<String, EdgeLocation> edgeLocations;
        private final Map<String, byte[]> originServer;
        
        CDN() {
            this.edgeLocations = new HashMap<>();
            this.originServer = new HashMap<>();
        }
        
        void addEdgeLocation(EdgeLocation edge) {
            edgeLocations.put(edge.region, edge);
        }
        
        void addOriginContent(String key, byte[] content) {
            originServer.put(key, content);
        }
        
        byte[] getContent(String region, String key, String contentType, long ttl) {
            EdgeLocation edge = edgeLocations.get(region);
            if (edge == null) {
                return fetchFromOrigin(key);
            }
            
            byte[] content = edge.getContent(key);
            if (content != null) {
                return content;
            }
            
            // Cache miss - fetch from origin
            content = fetchFromOrigin(key);
            if (content != null) {
                edge.putContent(key, content, contentType, ttl);
            }
            
            return content;
        }
        
        private byte[] fetchFromOrigin(String key) {
            return originServer.get(key);
        }
        
        void invalidateCache(String key) {
            edgeLocations.values().forEach(edge -> edge.invalidate(key));
        }
        
        Map<String, EdgeLocation> getEdgeLocations() {
            return new HashMap<>(edgeLocations);
        }
    }

    // ==================== 5. BLUE-GREEN DEPLOYMENT ====================
    
    /**
     * Blue-Green Deployment Pattern
     * Zero-downtime deployment strategy
     * 
     * Time Complexity: O(1) for switch
     * Space Complexity: O(2n) for two environments
     */
    static class BlueGreenDeployment {
        enum Environment { BLUE, GREEN }
        
        static class DeploymentEnvironment {
            String name;
            String version;
            Map<String, String> config;
            List<String> instances;
            boolean healthy;
            Instant deploymentTime;
            
            DeploymentEnvironment(String name, String version) {
                this.name = name;
                this.version = version;
                this.config = new HashMap<>();
                this.instances = new ArrayList<>();
                this.healthy = false;
                this.deploymentTime = Instant.now();
            }
            
            void addInstance(String instance) {
                instances.add(instance);
            }
            
            void setConfig(String key, String value) {
                config.put(key, value);
            }
            
            @Override
            public String toString() {
                return String.format("%s (v%s) - Instances: %d, Healthy: %s, Deployed: %s",
                    name, version, instances.size(), healthy, deploymentTime);
            }
        }
        
        private DeploymentEnvironment blue;
        private DeploymentEnvironment green;
        private Environment activeEnvironment;
        private final List<DeploymentEvent> deploymentHistory;
        
        static class DeploymentEvent {
            Instant timestamp;
            String version;
            Environment from;
            Environment to;
            String status;
            
            DeploymentEvent(String version, Environment from, Environment to, String status) {
                this.timestamp = Instant.now();
                this.version = version;
                this.from = from;
                this.to = to;
                this.status = status;
            }
            
            @Override
            public String toString() {
                return String.format("[%s] Deployment v%s: %s -> %s (%s)",
                    timestamp, version, from, to, status);
            }
        }
        
        BlueGreenDeployment(String initialVersion) {
            this.blue = new DeploymentEnvironment("Blue", initialVersion);
            this.green = new DeploymentEnvironment("Green", initialVersion);
            this.activeEnvironment = Environment.BLUE;
            this.blue.healthy = true;
            this.deploymentHistory = new ArrayList<>();
        }
        
        boolean deployToInactive(String newVersion, List<String> instances, Map<String, String> config) {
            DeploymentEnvironment inactive = getInactiveEnvironment();
            Environment inactiveEnv = activeEnvironment == Environment.BLUE ? Environment.GREEN : Environment.BLUE;
            
            // Deploy new version to inactive environment
            inactive.version = newVersion;
            inactive.instances.clear();
            instances.forEach(inactive::addInstance);
            inactive.config.clear();
            inactive.config.putAll(config);
            inactive.deploymentTime = Instant.now();
            
            // Run health checks
            inactive.healthy = runHealthChecks(inactive);
            
            String status = inactive.healthy ? "SUCCESS" : "FAILED";
            deploymentHistory.add(new DeploymentEvent(newVersion, activeEnvironment, inactiveEnv, status));
            
            return inactive.healthy;
        }
        
        boolean switchTraffic() {
            DeploymentEnvironment inactive = getInactiveEnvironment();
            
            if (!inactive.healthy) {
                return false;
            }
            
            Environment from = activeEnvironment;
            activeEnvironment = activeEnvironment == Environment.BLUE ? Environment.GREEN : Environment.BLUE;
            
            deploymentHistory.add(new DeploymentEvent(
                inactive.version, from, activeEnvironment, "TRAFFIC_SWITCHED"
            ));
            
            return true;
        }
        
        void rollback() {
            Environment from = activeEnvironment;
            activeEnvironment = activeEnvironment == Environment.BLUE ? Environment.GREEN : Environment.BLUE;
            
            deploymentHistory.add(new DeploymentEvent(
                getActiveEnvironment().version, from, activeEnvironment, "ROLLBACK"
            ));
        }
        
        private boolean runHealthChecks(DeploymentEnvironment env) {
            // Simulate health checks
            return !env.instances.isEmpty() && env.version != null;
        }
        
        DeploymentEnvironment getActiveEnvironment() {
            return activeEnvironment == Environment.BLUE ? blue : green;
        }
        
        DeploymentEnvironment getInactiveEnvironment() {
            return activeEnvironment == Environment.BLUE ? green : blue;
        }
        
        List<DeploymentEvent> getDeploymentHistory() {
            return new ArrayList<>(deploymentHistory);
        }
    }

    // ==================== 6. CANARY DEPLOYMENT ====================
    
    /**
     * Canary Deployment Pattern
     * Gradual rollout with traffic splitting
     * 
     * Time Complexity: O(1) for traffic routing
     * Space Complexity: O(n) where n = instances
     */
    static class CanaryDeployment {
        static class Version {
            String version;
            List<String> instances;
            int trafficPercentage;
            Map<String, Object> metrics;
            boolean stable;
            
            Version(String version, int trafficPercentage) {
                this.version = version;
                this.instances = new ArrayList<>();
                this.trafficPercentage = trafficPercentage;
                this.metrics = new HashMap<>();
                this.stable = false;
            }
            
            void recordMetric(String metricName, double value) {
                metrics.put(metricName, value);
            }
            
            @Override
            public String toString() {
                return String.format("v%s - Traffic: %d%%, Instances: %d, Stable: %s",
                    version, trafficPercentage, instances.size(), stable);
            }
        }
        
        private Version stableVersion;
        private Version canaryVersion;
        private final List<CanaryEvent> eventHistory;
        
        static class CanaryEvent {
            Instant timestamp;
            String event;
            String canaryVersion;
            int trafficPercentage;
            
            CanaryEvent(String event, String canaryVersion, int trafficPercentage) {
                this.timestamp = Instant.now();
                this.event = event;
                this.canaryVersion = canaryVersion;
                this.trafficPercentage = trafficPercentage;
            }
            
            @Override
            public String toString() {
                return String.format("[%s] %s (v%s @ %d%%)",
                    timestamp, event, canaryVersion, trafficPercentage);
            }
        }
        
        CanaryDeployment(String stableVersion) {
            this.stableVersion = new Version(stableVersion, 100);
            this.stableVersion.stable = true;
            this.eventHistory = new ArrayList<>();
        }
        
        void startCanary(String newVersion, int initialTrafficPercentage) {
            canaryVersion = new Version(newVersion, initialTrafficPercentage);
            stableVersion.trafficPercentage = 100 - initialTrafficPercentage;
            
            eventHistory.add(new CanaryEvent("CANARY_STARTED", newVersion, initialTrafficPercentage));
        }
        
        void increaseCanaryTraffic(int percentage) {
            if (canaryVersion == null) return;
            
            canaryVersion.trafficPercentage = Math.min(100, canaryVersion.trafficPercentage + percentage);
            stableVersion.trafficPercentage = 100 - canaryVersion.trafficPercentage;
            
            eventHistory.add(new CanaryEvent("TRAFFIC_INCREASED", 
                canaryVersion.version, canaryVersion.trafficPercentage));
        }
        
        void promoteCanary() {
            if (canaryVersion == null) return;
            
            canaryVersion.stable = true;
            canaryVersion.trafficPercentage = 100;
            stableVersion = canaryVersion;
            canaryVersion = null;
            
            eventHistory.add(new CanaryEvent("CANARY_PROMOTED", 
                stableVersion.version, 100));
        }
        
        void abortCanary() {
            if (canaryVersion == null) return;
            
            String version = canaryVersion.version;
            canaryVersion = null;
            stableVersion.trafficPercentage = 100;
            
            eventHistory.add(new CanaryEvent("CANARY_ABORTED", version, 0));
        }
        
        String routeRequest() {
            if (canaryVersion == null) {
                return stableVersion.version;
            }
            
            int random = ThreadLocalRandom.current().nextInt(100);
            return random < canaryVersion.trafficPercentage ? 
                   canaryVersion.version : stableVersion.version;
        }
        
        boolean analyzeCanaryMetrics() {
            if (canaryVersion == null) return false;
            
            // Analyze error rate, latency, etc.
            double errorRate = (double) canaryVersion.metrics.getOrDefault("errorRate", 0.0);
            double latency = (double) canaryVersion.metrics.getOrDefault("latency", 0.0);
            
            return errorRate < 1.0 && latency < 500; // Example thresholds
        }
        
        Version getStableVersion() {
            return stableVersion;
        }
        
        Version getCanaryVersion() {
            return canaryVersion;
        }
        
        List<CanaryEvent> getEventHistory() {
            return new ArrayList<>(eventHistory);
        }
    }

    // ==================== DEMONSTRATIONS ====================
    
    public static void main(String[] args) {
        demonstrateAutoScaling();
        demonstrateCloudCircuitBreaker();
        demonstrateLoadBalancer();
        demonstrateCDN();
        demonstrateBlueGreenDeployment();
        demonstrateCanaryDeployment();
    }
    
    private static void demonstrateAutoScaling() {
        System.out.println("=== AUTO-SCALING DEMONSTRATION ===\n");
        
        AutoScaler scaler = new AutoScaler(2, 1, 10, 70.0, 30.0, 10);
        
        // Add scaling policies
        scaler.addPolicy(new AutoScaler.ScalingPolicy(
            "ScaleUp", "CPU", 70.0, 2, "ChangeInCapacity", 60
        ));
        scaler.addPolicy(new AutoScaler.ScalingPolicy(
            "ScaleDown", "CPU", 30.0, -1, "ChangeInCapacity", 120
        ));
        
        // Simulate load patterns
        double[] cpuMetrics = {40, 50, 65, 75, 80, 85, 60, 40, 25, 20};
        
        for (double cpu : cpuMetrics) {
            scaler.reportMetric(cpu);
            System.out.printf("CPU: %.1f%% -> Instances: %d (Avg: %.1f%%)%n",
                cpu, scaler.getCurrentInstances(), scaler.getAverageUtilization());
            
            try { Thread.sleep(100); } catch (InterruptedException e) {}
        }
        
        System.out.println("\nScaling History:");
        scaler.getScalingHistory().forEach(System.out::println);
        System.out.println();
    }
    
    private static void demonstrateCloudCircuitBreaker() {
        System.out.println("=== CLOUD CIRCUIT BREAKER DEMONSTRATION ===\n");
        
        CloudCircuitBreaker breaker = new CloudCircuitBreaker(3, 2, 5000);
        
        // Simulate service calls
        for (int i = 0; i < 10; i++) {
            try {
                int requestNum = i;
                String result = breaker.execute("PaymentService", () -> {
                    if (requestNum >= 2 && requestNum <= 4) {
                        throw new Exception("Service unavailable");
                    }
                    return "Success";
                }, "Fallback: Using cached data");
                
                System.out.printf("Request %d: %s (State: %s)%n", 
                    i, result, breaker.getState());
            } catch (Exception e) {
                System.out.printf("Request %d: Failed - %s (State: %s)%n",
                    i, e.getMessage(), breaker.getState());
            }
            
            try { Thread.sleep(200); } catch (InterruptedException e) {}
        }
        
        System.out.println("\nService Metrics:");
        breaker.getServiceMetrics().forEach((service, metrics) ->
            System.out.printf("%s: %s%n", service, metrics));
        System.out.println();
    }
    
    private static void demonstrateLoadBalancer() {
        System.out.println("=== LOAD BALANCER DEMONSTRATION ===\n");
        
        // Test different algorithms
        LoadBalancer.Algorithm[] algorithms = {
            LoadBalancer.Algorithm.ROUND_ROBIN,
            LoadBalancer.Algorithm.LEAST_CONNECTIONS,
            LoadBalancer.Algorithm.WEIGHTED_ROUND_ROBIN
        };
        
        for (LoadBalancer.Algorithm algo : algorithms) {
            System.out.printf("Algorithm: %s%n", algo);
            LoadBalancer lb = new LoadBalancer(algo);
            
            lb.addBackend(new LoadBalancer.Backend("backend-1", "10.0.1.1", 8080, 1));
            lb.addBackend(new LoadBalancer.Backend("backend-2", "10.0.1.2", 8080, 2));
            lb.addBackend(new LoadBalancer.Backend("backend-3", "10.0.1.3", 8080, 3));
            
            for (int i = 0; i < 6; i++) {
                LoadBalancer.Backend backend = lb.selectBackend("192.168.1." + i);
                if (backend != null) {
                    backend.incrementConnections();
                    System.out.printf("Request %d -> %s%n", i, backend.id);
                }
            }
            
            System.out.println("\nBackend Stats:");
            lb.getBackends().forEach(System.out::println);
            System.out.println();
        }
    }
    
    private static void demonstrateCDN() {
        System.out.println("=== CDN DEMONSTRATION ===\n");
        
        CDN cdn = new CDN();
        
        // Add edge locations
        cdn.addEdgeLocation(new CDN.EdgeLocation("us-east", "Virginia", 100));
        cdn.addEdgeLocation(new CDN.EdgeLocation("us-west", "California", 100));
        cdn.addEdgeLocation(new CDN.EdgeLocation("eu-west", "Ireland", 100));
        
        // Add origin content
        cdn.addOriginContent("/index.html", "<!DOCTYPE html>...".getBytes());
        cdn.addOriginContent("/app.js", "console.log('Hello');".getBytes());
        
        // Simulate requests
        String[] regions = {"us-east", "us-east", "us-west", "eu-west", "us-east"};
        String[] resources = {"/index.html", "/index.html", "/app.js", "/index.html", "/index.html"};
        
        for (int i = 0; i < regions.length; i++) {
            byte[] content = cdn.getContent(regions[i], resources[i], "text/html", 60000);
            System.out.printf("Request from %s for %s: %s%n",
                regions[i], resources[i], content != null ? "HIT" : "MISS");
        }
        
        System.out.println("\nEdge Location Stats:");
        cdn.getEdgeLocations().forEach((region, edge) ->
            System.out.println(edge));
        System.out.println();
    }
    
    private static void demonstrateBlueGreenDeployment() {
        System.out.println("=== BLUE-GREEN DEPLOYMENT DEMONSTRATION ===\n");
        
        BlueGreenDeployment deployment = new BlueGreenDeployment("1.0.0");
        
        System.out.println("Initial state:");
        System.out.println("Active: " + deployment.getActiveEnvironment());
        
        // Deploy new version to inactive
        System.out.println("\nDeploying v2.0.0 to inactive environment...");
        boolean deployed = deployment.deployToInactive(
            "2.0.0",
            Arrays.asList("instance-1", "instance-2", "instance-3"),
            Map.of("feature.newUI", "enabled")
        );
        
        System.out.println("Deployment: " + (deployed ? "SUCCESS" : "FAILED"));
        System.out.println("Inactive: " + deployment.getInactiveEnvironment());
        
        // Switch traffic
        if (deployed) {
            System.out.println("\nSwitching traffic...");
            deployment.switchTraffic();
            System.out.println("Active: " + deployment.getActiveEnvironment());
        }
        
        System.out.println("\nDeployment History:");
        deployment.getDeploymentHistory().forEach(System.out::println);
        System.out.println();
    }
    
    private static void demonstrateCanaryDeployment() {
        System.out.println("=== CANARY DEPLOYMENT DEMONSTRATION ===\n");
        
        CanaryDeployment canary = new CanaryDeployment("1.0.0");
        
        System.out.println("Starting canary deployment...");
        canary.startCanary("2.0.0", 10);
        
        // Simulate gradual rollout
        int[] trafficIncreases = {10, 20, 30, 40};
        for (int increase : trafficIncreases) {
            System.out.printf("\nIncreasing canary traffic by %d%%%n", increase);
            canary.increaseCanaryTraffic(increase);
            
            // Simulate requests
            Map<String, Integer> versionCounts = new HashMap<>();
            for (int i = 0; i < 100; i++) {
                String version = canary.routeRequest();
                versionCounts.merge(version, 1, Integer::sum);
            }
            
            System.out.println("Traffic distribution:");
            versionCounts.forEach((v, count) ->
                System.out.printf("v%s: %d%%%n", v, count));
            
            if (canary.getCanaryVersion() != null) {
                System.out.printf("Canary: %s%n", canary.getCanaryVersion());
            }
        }
        
        System.out.println("\nPromoting canary to stable...");
        canary.promoteCanary();
        System.out.println("Stable: " + canary.getStableVersion());
        
        System.out.println("\nCanary Event History:");
        canary.getEventHistory().forEach(System.out::println);
        System.out.println();
    }
}
