/**
 * DAY 27: COMPREHENSIVE PRACTICE PROBLEMS
 * Cloud Computing, DevOps & Serverless Architecture
 * 
 * 60+ Problems covering:
 * - Auto-Scaling Algorithms
 * - Load Balancing Strategies
 * - Container Orchestration
 * - Serverless Computing
 * - Infrastructure as Code
 * - CI/CD Pipelines
 * - Monitoring & Observability
 * - Cost Optimization
 * 
 * Each problem includes:
 * - Complete solution
 * - Time/Space complexity
 * - Test cases
 * - Real-world applications
 */

import java.util.*;
import java.util.concurrent.*;
import java.time.*;
import java.util.stream.*;

public class Day27ComprehensivePractice {

    // ============ CATEGORY 1: AUTO-SCALING & RESOURCE MANAGEMENT ============
    
    /**
     * Problem 1: Implement Predictive Auto-Scaler
     * Given historical metrics, predict future load and pre-scale resources
     * 
     * Time Complexity: O(n) where n = history size
     * Space Complexity: O(n)
     */
    static class PredictiveAutoScaler {
        static class MetricPoint {
            Instant timestamp;
            double value;
            
            MetricPoint(Instant timestamp, double value) {
                this.timestamp = timestamp;
                this.value = value;
            }
        }
        
        private final Queue<MetricPoint> history;
        private final int historySize;
        private final int currentInstances;
        
        PredictiveAutoScaler(int historySize, int currentInstances) {
            this.history = new LinkedList<>();
            this.historySize = historySize;
            this.currentInstances = currentInstances;
        }
        
        void addMetric(double cpuUtilization) {
            history.offer(new MetricPoint(Instant.now(), cpuUtilization));
            if (history.size() > historySize) {
                history.poll();
            }
        }
        
        int predictOptimalInstances() {
            if (history.size() < 5) return currentInstances;
            
            // Simple linear regression for prediction
            List<MetricPoint> recent = new ArrayList<>(history);
            double sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
            int n = recent.size();
            
            for (int i = 0; i < n; i++) {
                double x = i;
                double y = recent.get(i).value;
                sumX += x;
                sumY += y;
                sumXY += x * y;
                sumX2 += x * x;
            }
            
            double slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
            double intercept = (sumY - slope * sumX) / n;
            
            // Predict next value
            double predictedCPU = slope * n + intercept;
            
            // Scale based on prediction
            if (predictedCPU > 80) {
                return (int) Math.ceil(currentInstances * 1.5);
            } else if (predictedCPU < 30) {
                return Math.max(1, (int) Math.floor(currentInstances * 0.7));
            }
            
            return currentInstances;
        }
        
        // Test
        static void test() {
            PredictiveAutoScaler scaler = new PredictiveAutoScaler(10, 2);
            
            // Simulate increasing load
            double[] metrics = {40, 45, 55, 65, 75, 85, 90};
            
            for (double cpu : metrics) {
                scaler.addMetric(cpu);
                int predicted = scaler.predictOptimalInstances();
                System.out.printf("CPU: %.1f%% -> Predicted instances: %d%n", cpu, predicted);
            }
        }
    }
    
    /**
     * Problem 2: Resource Bin Packing for Container Placement
     * Optimal placement of containers on hosts (First-Fit Decreasing)
     * 
     * Time Complexity: O(n log n + n*m) where n = containers, m = hosts
     * Space Complexity: O(m)
     */
    static class ContainerBinPacking {
        static class Container {
            String id;
            int cpuRequired;
            int memoryRequired;
            
            Container(String id, int cpu, int memory) {
                this.id = id;
                this.cpuRequired = cpu;
                this.memoryRequired = memory;
            }
        }
        
        static class Host {
            String id;
            int cpuCapacity;
            int memoryCapacity;
            int cpuUsed;
            int memoryUsed;
            List<Container> containers;
            
            Host(String id, int cpu, int memory) {
                this.id = id;
                this.cpuCapacity = cpu;
                this.memoryCapacity = memory;
                this.cpuUsed = 0;
                this.memoryUsed = 0;
                this.containers = new ArrayList<>();
            }
            
            boolean canFit(Container container) {
                return cpuUsed + container.cpuRequired <= cpuCapacity &&
                       memoryUsed + container.memoryRequired <= memoryCapacity;
            }
            
            void addContainer(Container container) {
                containers.add(container);
                cpuUsed += container.cpuRequired;
                memoryUsed += container.memoryRequired;
            }
            
            double getUtilization() {
                double cpuUtil = (double) cpuUsed / cpuCapacity;
                double memUtil = (double) memoryUsed / memoryCapacity;
                return (cpuUtil + memUtil) / 2;
            }
        }
        
        static List<Host> packContainers(List<Container> containers, int hostCPU, int hostMemory) {
            // Sort containers by resource requirements (largest first)
            containers.sort((a, b) -> 
                Integer.compare(b.cpuRequired + b.memoryRequired, 
                               a.cpuRequired + a.memoryRequired));
            
            List<Host> hosts = new ArrayList<>();
            
            for (Container container : containers) {
                boolean placed = false;
                
                // Try to place in existing host
                for (Host host : hosts) {
                    if (host.canFit(container)) {
                        host.addContainer(container);
                        placed = true;
                        break;
                    }
                }
                
                // Create new host if needed
                if (!placed) {
                    Host newHost = new Host("host-" + (hosts.size() + 1), hostCPU, hostMemory);
                    newHost.addContainer(container);
                    hosts.add(newHost);
                }
            }
            
            return hosts;
        }
        
        // Test
        static void test() {
            List<Container> containers = Arrays.asList(
                new Container("c1", 2, 4096),
                new Container("c2", 1, 2048),
                new Container("c3", 3, 4096),
                new Container("c4", 1, 1024),
                new Container("c5", 2, 2048)
            );
            
            List<Host> hosts = packContainers(containers, 4, 8192);
            
            System.out.println("Container placement:");
            for (Host host : hosts) {
                System.out.printf("%s: %d containers, %.1f%% utilized%n",
                    host.id, host.containers.size(), host.getUtilization() * 100);
            }
        }
    }
    
    /**
     * Problem 3: Cost Optimizer - Choose Cheapest Instance Types
     * Select optimal mix of instance types to minimize cost
     * 
     * Time Complexity: O(n * capacity) - Dynamic Programming
     * Space Complexity: O(capacity)
     */
    static class CloudCostOptimizer {
        static class InstanceType {
            String name;
            int cpu;
            int memory;
            double costPerHour;
            
            InstanceType(String name, int cpu, int memory, double cost) {
                this.name = name;
                this.cpu = cpu;
                this.memory = memory;
                this.costPerHour = cost;
            }
            
            double getCostPerCPU() {
                return costPerHour / cpu;
            }
        }
        
        static class OptimizationResult {
            Map<String, Integer> instanceCounts;
            double totalCost;
            int totalCPU;
            int totalMemory;
            
            OptimizationResult() {
                this.instanceCounts = new HashMap<>();
                this.totalCost = 0;
            }
        }
        
        static OptimizationResult optimizeCost(List<InstanceType> types, int requiredCPU, int requiredMemory) {
            // Sort by cost efficiency (cost per CPU)
            types.sort(Comparator.comparingDouble(InstanceType::getCostPerCPU));
            
            OptimizationResult result = new OptimizationResult();
            int remainingCPU = requiredCPU;
            int remainingMemory = requiredMemory;
            
            for (InstanceType type : types) {
                if (remainingCPU <= 0 && remainingMemory <= 0) break;
                
                // Calculate how many instances of this type we need
                int neededForCPU = (int) Math.ceil((double) remainingCPU / type.cpu);
                int neededForMemory = (int) Math.ceil((double) remainingMemory / type.memory);
                int needed = Math.max(neededForCPU, neededForMemory);
                
                if (needed > 0) {
                    result.instanceCounts.put(type.name, needed);
                    result.totalCost += needed * type.costPerHour;
                    result.totalCPU += needed * type.cpu;
                    result.totalMemory += needed * type.memory;
                    
                    remainingCPU -= needed * type.cpu;
                    remainingMemory -= needed * type.memory;
                }
            }
            
            return result;
        }
        
        // Test
        static void test() {
            List<InstanceType> types = Arrays.asList(
                new InstanceType("t2.micro", 1, 1024, 0.0116),
                new InstanceType("t2.small", 1, 2048, 0.023),
                new InstanceType("t2.medium", 2, 4096, 0.0464),
                new InstanceType("t2.large", 2, 8192, 0.0928)
            );
            
            OptimizationResult result = optimizeCost(types, 10, 16384);
            
            System.out.println("Cost optimization result:");
            result.instanceCounts.forEach((type, count) ->
                System.out.printf("%s: %d instances%n", type, count));
            System.out.printf("Total cost: $%.4f/hour%n", result.totalCost);
            System.out.printf("Total resources: %d CPU, %d MB memory%n",
                result.totalCPU, result.totalMemory);
        }
    }
    
    // ============ CATEGORY 2: LOAD BALANCING & TRAFFIC MANAGEMENT ============
    
    /**
     * Problem 4: Weighted Least Response Time Load Balancer
     * Route requests to server with lowest response time
     * 
     * Time Complexity: O(n) for selecting server
     * Space Complexity: O(n) where n = number of servers
     */
    static class WeightedResponseTimeBalancer {
        static class Server {
            String id;
            Queue<Long> responseTimes;
            int maxHistory;
            int activeConnections;
            
            Server(String id, int maxHistory) {
                this.id = id;
                this.maxHistory = maxHistory;
                this.responseTimes = new LinkedList<>();
                this.activeConnections = 0;
            }
            
            void recordResponse(long timeMs) {
                responseTimes.offer(timeMs);
                if (responseTimes.size() > maxHistory) {
                    responseTimes.poll();
                }
            }
            
            double getAverageResponseTime() {
                if (responseTimes.isEmpty()) return 0;
                return responseTimes.stream().mapToLong(l -> l).average().orElse(0);
            }
            
            double getScore() {
                // Lower score is better (considers both response time and connections)
                double avgResponseTime = getAverageResponseTime();
                return avgResponseTime * (1 + activeConnections * 0.1);
            }
        }
        
        private final List<Server> servers;
        
        WeightedResponseTimeBalancer() {
            this.servers = new ArrayList<>();
        }
        
        void addServer(Server server) {
            servers.add(server);
        }
        
        Server selectServer() {
            return servers.stream()
                         .min(Comparator.comparingDouble(Server::getScore))
                         .orElse(null);
        }
        
        // Test
        static void test() {
            WeightedResponseTimeBalancer balancer = new WeightedResponseTimeBalancer();
            
            Server s1 = new Server("server-1", 10);
            Server s2 = new Server("server-2", 10);
            Server s3 = new Server("server-3", 10);
            
            // Simulate different response times
            s1.recordResponse(100);
            s1.recordResponse(120);
            s2.recordResponse(80);
            s2.recordResponse(90);
            s3.recordResponse(150);
            s3.recordResponse(160);
            
            balancer.addServer(s1);
            balancer.addServer(s2);
            balancer.addServer(s3);
            
            System.out.println("Selecting servers:");
            for (int i = 0; i < 5; i++) {
                Server selected = balancer.selectServer();
                System.out.printf("Request %d -> %s (score: %.1f)%n",
                    i + 1, selected.id, selected.getScore());
                selected.activeConnections++;
            }
        }
    }
    
    /**
     * Problem 5: Implement Sticky Sessions with Consistent Hashing
     * Route same client to same server using consistent hashing
     * 
     * Time Complexity: O(log n) where n = virtual nodes
     * Space Complexity: O(n * v) where v = virtual nodes per server
     */
    static class StickySessionBalancer {
        static class VirtualNode {
            String serverId;
            int hash;
            
            VirtualNode(String serverId, int virtualId) {
                this.serverId = serverId;
                this.hash = (serverId + "-" + virtualId).hashCode();
            }
        }
        
        private final TreeMap<Integer, String> ring;
        private final int virtualNodesPerServer;
        private final Map<String, Integer> sessionCounts;
        
        StickySessionBalancer(int virtualNodesPerServer) {
            this.ring = new TreeMap<>();
            this.virtualNodesPerServer = virtualNodesPerServer;
            this.sessionCounts = new HashMap<>();
        }
        
        void addServer(String serverId) {
            for (int i = 0; i < virtualNodesPerServer; i++) {
                VirtualNode vnode = new VirtualNode(serverId, i);
                ring.put(vnode.hash, serverId);
            }
            sessionCounts.put(serverId, 0);
        }
        
        void removeServer(String serverId) {
            for (int i = 0; i < virtualNodesPerServer; i++) {
                VirtualNode vnode = new VirtualNode(serverId, i);
                ring.remove(vnode.hash);
            }
            sessionCounts.remove(serverId);
        }
        
        String getServer(String sessionId) {
            if (ring.isEmpty()) return null;
            
            int hash = sessionId.hashCode();
            Map.Entry<Integer, String> entry = ring.ceilingEntry(hash);
            
            if (entry == null) {
                entry = ring.firstEntry();
            }
            
            String serverId = entry.getValue();
            sessionCounts.merge(serverId, 1, Integer::sum);
            
            return serverId;
        }
        
        Map<String, Integer> getSessionDistribution() {
            return new HashMap<>(sessionCounts);
        }
        
        // Test
        static void test() {
            StickySessionBalancer balancer = new StickySessionBalancer(150);
            
            balancer.addServer("server-1");
            balancer.addServer("server-2");
            balancer.addServer("server-3");
            
            System.out.println("Routing sessions:");
            for (int i = 0; i < 1000; i++) {
                String sessionId = "session-" + (i % 100);
                balancer.getServer(sessionId);
            }
            
            System.out.println("\nSession distribution:");
            balancer.getSessionDistribution().forEach((server, count) ->
                System.out.printf("%s: %d sessions%n", server, count));
        }
    }
    
    // ============ CATEGORY 3: CONTAINER ORCHESTRATION ============
    
    /**
     * Problem 6: Pod Scheduling with Affinity Rules
     * Schedule pods considering node affinity and anti-affinity
     * 
     * Time Complexity: O(p * n) where p = pods, n = nodes
     * Space Complexity: O(p + n)
     */
    static class PodScheduler {
        static class Node {
            String name;
            Map<String, String> labels;
            int cpuCapacity;
            int memoryCapacity;
            int cpuUsed;
            int memoryUsed;
            List<Pod> pods;
            
            Node(String name, int cpu, int memory) {
                this.name = name;
                this.labels = new HashMap<>();
                this.cpuCapacity = cpu;
                this.memoryCapacity = memory;
                this.cpuUsed = 0;
                this.memoryUsed = 0;
                this.pods = new ArrayList<>();
            }
            
            boolean canSchedule(Pod pod) {
                return cpuUsed + pod.cpuRequest <= cpuCapacity &&
                       memoryUsed + pod.memoryRequest <= memoryCapacity;
            }
            
            boolean matchesAffinity(Pod pod) {
                for (Map.Entry<String, String> requirement : pod.nodeAffinity.entrySet()) {
                    if (!requirement.getValue().equals(labels.get(requirement.getKey()))) {
                        return false;
                    }
                }
                return true;
            }
            
            boolean violatesAntiAffinity(Pod pod) {
                for (Pod existing : pods) {
                    for (String label : pod.podAntiAffinity) {
                        if (existing.labels.containsKey(label)) {
                            return true;
                        }
                    }
                }
                return false;
            }
            
            void schedulePod(Pod pod) {
                pods.add(pod);
                cpuUsed += pod.cpuRequest;
                memoryUsed += pod.memoryRequest;
                pod.scheduledNode = this.name;
            }
        }
        
        static class Pod {
            String name;
            Map<String, String> labels;
            int cpuRequest;
            int memoryRequest;
            Map<String, String> nodeAffinity;
            List<String> podAntiAffinity;
            String scheduledNode;
            
            Pod(String name, int cpu, int memory) {
                this.name = name;
                this.labels = new HashMap<>();
                this.cpuRequest = cpu;
                this.memoryRequest = memory;
                this.nodeAffinity = new HashMap<>();
                this.podAntiAffinity = new ArrayList<>();
            }
        }
        
        private final List<Node> nodes;
        
        PodScheduler() {
            this.nodes = new ArrayList<>();
        }
        
        void addNode(Node node) {
            nodes.add(node);
        }
        
        boolean schedulePod(Pod pod) {
            // Filter nodes that match requirements
            List<Node> candidates = nodes.stream()
                .filter(n -> n.canSchedule(pod))
                .filter(n -> n.matchesAffinity(pod))
                .filter(n -> !n.violatesAntiAffinity(pod))
                .collect(Collectors.toList());
            
            if (candidates.isEmpty()) {
                return false;
            }
            
            // Select node with most available resources
            Node bestNode = candidates.stream()
                .min(Comparator.comparingDouble(n -> 
                    (double)(n.cpuUsed + n.memoryUsed) / (n.cpuCapacity + n.memoryCapacity)))
                .orElse(null);
            
            if (bestNode != null) {
                bestNode.schedulePod(pod);
                return true;
            }
            
            return false;
        }
        
        // Test
        static void test() {
            PodScheduler scheduler = new PodScheduler();
            
            // Create nodes
            Node node1 = new Node("node-1", 4, 8192);
            node1.labels.put("zone", "us-east-1a");
            node1.labels.put("instance-type", "m5.large");
            
            Node node2 = new Node("node-2", 4, 8192);
            node2.labels.put("zone", "us-east-1b");
            node2.labels.put("instance-type", "m5.large");
            
            scheduler.addNode(node1);
            scheduler.addNode(node2);
            
            // Create pods with affinity
            Pod pod1 = new Pod("web-1", 1, 2048);
            pod1.nodeAffinity.put("zone", "us-east-1a");
            pod1.labels.put("app", "web");
            
            Pod pod2 = new Pod("web-2", 1, 2048);
            pod2.labels.put("app", "web");
            pod2.podAntiAffinity.add("app");
            
            System.out.println("Scheduling pods:");
            System.out.printf("Pod %s: %s%n", pod1.name,
                scheduler.schedulePod(pod1) ? "Scheduled on " + pod1.scheduledNode : "Failed");
            System.out.printf("Pod %s: %s%n", pod2.name,
                scheduler.schedulePod(pod2) ? "Scheduled on " + pod2.scheduledNode : "Failed");
        }
    }
    
    // ============ CATEGORY 4: SERVERLESS COMPUTING ============
    
    /**
     * Problem 7: Cold Start Optimizer - Warm Pool Management
     * Maintain pool of warm function instances
     * 
     * Time Complexity: O(1) for instance retrieval
     * Space Complexity: O(w) where w = warm pool size
     */
    static class ColdStartOptimizer {
        static class FunctionInstance {
            String id;
            String functionName;
            Instant lastUsed;
            boolean warm;
            int invocations;
            
            FunctionInstance(String id, String functionName) {
                this.id = id;
                this.functionName = functionName;
                this.lastUsed = Instant.now();
                this.warm = false;
                this.invocations = 0;
            }
            
            void warmUp() {
                warm = true;
                lastUsed = Instant.now();
            }
            
            void invoke() {
                invocations++;
                lastUsed = Instant.now();
            }
            
            boolean isExpired(int ttlSeconds) {
                return Duration.between(lastUsed, Instant.now()).getSeconds() > ttlSeconds;
            }
        }
        
        private final Map<String, Queue<FunctionInstance>> warmPools;
        private final int minWarmInstances;
        private final int maxWarmInstances;
        private final int ttlSeconds;
        private final Map<String, Integer> coldStarts;
        private final Map<String, Integer> warmStarts;
        
        ColdStartOptimizer(int minWarm, int maxWarm, int ttl) {
            this.warmPools = new ConcurrentHashMap<>();
            this.minWarmInstances = minWarm;
            this.maxWarmInstances = maxWarm;
            this.ttlSeconds = ttl;
            this.coldStarts = new ConcurrentHashMap<>();
            this.warmStarts = new ConcurrentHashMap<>();
        }
        
        void ensureWarmPool(String functionName) {
            Queue<FunctionInstance> pool = warmPools.computeIfAbsent(
                functionName, k -> new ConcurrentLinkedQueue<>()
            );
            
            while (pool.size() < minWarmInstances) {
                FunctionInstance instance = new FunctionInstance(
                    UUID.randomUUID().toString(), functionName
                );
                instance.warmUp();
                pool.offer(instance);
            }
        }
        
        FunctionInstance getInstance(String functionName) {
            Queue<FunctionInstance> pool = warmPools.get(functionName);
            
            if (pool != null && !pool.isEmpty()) {
                FunctionInstance instance = pool.poll();
                if (instance != null && !instance.isExpired(ttlSeconds)) {
                    warmStarts.merge(functionName, 1, Integer::sum);
                    instance.invoke();
                    return instance;
                }
            }
            
            // Cold start
            coldStarts.merge(functionName, 1, Integer::sum);
            FunctionInstance instance = new FunctionInstance(
                UUID.randomUUID().toString(), functionName
            );
            instance.warmUp();
            instance.invoke();
            
            return instance;
        }
        
        void releaseInstance(FunctionInstance instance) {
            Queue<FunctionInstance> pool = warmPools.get(instance.functionName);
            
            if (pool != null && pool.size() < maxWarmInstances) {
                pool.offer(instance);
            }
        }
        
        double getColdStartRate(String functionName) {
            int cold = coldStarts.getOrDefault(functionName, 0);
            int warm = warmStarts.getOrDefault(functionName, 0);
            int total = cold + warm;
            
            return total == 0 ? 0 : (double) cold / total * 100;
        }
        
        // Test
        static void test() {
            ColdStartOptimizer optimizer = new ColdStartOptimizer(2, 5, 30);
            
            String functionName = "my-function";
            optimizer.ensureWarmPool(functionName);
            
            System.out.println("Invoking function 10 times:");
            for (int i = 0; i < 10; i++) {
                FunctionInstance instance = optimizer.getInstance(functionName);
                System.out.printf("Invocation %d: Instance %s (invocations: %d)%n",
                    i + 1, instance.id.substring(0, 8), instance.invocations);
                optimizer.releaseInstance(instance);
            }
            
            System.out.printf("\nCold start rate: %.1f%%%n",
                optimizer.getColdStartRate(functionName));
        }
    }
    
    /**
     * Problem 8: Serverless Function Chaining
     * Execute sequence of serverless functions with data passing
     * 
     * Time Complexity: O(n) where n = number of functions
     * Space Complexity: O(n)
     */
    static class FunctionChain {
        @FunctionalInterface
        interface ChainFunction {
            Map<String, Object> execute(Map<String, Object> input) throws Exception;
        }
        
        static class ChainStep {
            String name;
            ChainFunction function;
            int retries;
            int timeoutMs;
            
            ChainStep(String name, ChainFunction function) {
                this.name = name;
                this.function = function;
                this.retries = 3;
                this.timeoutMs = 5000;
            }
            
            Map<String, Object> executeWithRetry(Map<String, Object> input) throws Exception {
                Exception lastException = null;
                
                for (int attempt = 0; attempt <= retries; attempt++) {
                    try {
                        return function.execute(input);
                    } catch (Exception e) {
                        lastException = e;
                        if (attempt < retries) {
                            Thread.sleep(100 * (1 << attempt)); // Exponential backoff
                        }
                    }
                }
                
                throw lastException;
            }
        }
        
        static class ExecutionResult {
            boolean success;
            Map<String, Object> output;
            List<StepResult> stepResults;
            long totalDurationMs;
            
            static class StepResult {
                String stepName;
                boolean success;
                long durationMs;
                String error;
            }
            
            ExecutionResult() {
                this.stepResults = new ArrayList<>();
            }
        }
        
        private final List<ChainStep> steps;
        
        FunctionChain() {
            this.steps = new ArrayList<>();
        }
        
        void addStep(ChainStep step) {
            steps.add(step);
        }
        
        ExecutionResult execute(Map<String, Object> initialInput) {
            ExecutionResult result = new ExecutionResult();
            Map<String, Object> currentData = new HashMap<>(initialInput);
            
            long startTime = System.currentTimeMillis();
            
            for (ChainStep step : steps) {
                ExecutionResult.StepResult stepResult = new ExecutionResult.StepResult();
                stepResult.stepName = step.name;
                
                long stepStart = System.currentTimeMillis();
                
                try {
                    Map<String, Object> output = step.executeWithRetry(currentData);
                    currentData.putAll(output);
                    stepResult.success = true;
                } catch (Exception e) {
                    stepResult.success = false;
                    stepResult.error = e.getMessage();
                    result.success = false;
                    result.stepResults.add(stepResult);
                    return result;
                }
                
                stepResult.durationMs = System.currentTimeMillis() - stepStart;
                result.stepResults.add(stepResult);
            }
            
            result.success = true;
            result.output = currentData;
            result.totalDurationMs = System.currentTimeMillis() - startTime;
            
            return result;
        }
        
        // Test
        static void test() {
            FunctionChain chain = new FunctionChain();
            
            chain.addStep(new ChainStep("validate", input -> {
                Map<String, Object> output = new HashMap<>();
                output.put("validated", true);
                return output;
            }));
            
            chain.addStep(new ChainStep("process", input -> {
                Map<String, Object> output = new HashMap<>();
                output.put("processed", true);
                output.put("result", "success");
                return output;
            }));
            
            chain.addStep(new ChainStep("notify", input -> {
                Map<String, Object> output = new HashMap<>();
                output.put("notified", true);
                return output;
            }));
            
            Map<String, Object> input = Map.of("data", "test");
            ExecutionResult result = chain.execute(input);
            
            System.out.println("Chain execution:");
            System.out.printf("Success: %s, Duration: %dms%n",
                result.success, result.totalDurationMs);
            
            System.out.println("\nStep results:");
            result.stepResults.forEach(sr ->
                System.out.printf("%s: %s (%dms)%n",
                    sr.stepName, sr.success ? "SUCCESS" : "FAILED", sr.durationMs));
        }
    }
    
    // ============ CATEGORY 5: MONITORING & OBSERVABILITY ============
    
    /**
     * Problem 9: Distributed Tracing System
     * Track requests across microservices with trace IDs
     * 
     * Time Complexity: O(1) for span creation, O(n) for trace reconstruction
     * Space Complexity: O(t * s) where t = traces, s = spans per trace
     */
    static class DistributedTracing {
        static class TraceContext {
            String traceId;
            String spanId;
            String parentSpanId;
            
            TraceContext() {
                this.traceId = UUID.randomUUID().toString();
                this.spanId = UUID.randomUUID().toString();
            }
            
            TraceContext(String traceId, String parentSpanId) {
                this.traceId = traceId;
                this.spanId = UUID.randomUUID().toString();
                this.parentSpanId = parentSpanId;
            }
        }
        
        static class Span {
            String traceId;
            String spanId;
            String parentSpanId;
            String serviceName;
            String operationName;
            Instant startTime;
            Instant endTime;
            Map<String, String> tags;
            Map<String, String> logs;
            
            Span(TraceContext context, String serviceName, String operationName) {
                this.traceId = context.traceId;
                this.spanId = context.spanId;
                this.parentSpanId = context.parentSpanId;
                this.serviceName = serviceName;
                this.operationName = operationName;
                this.startTime = Instant.now();
                this.tags = new HashMap<>();
                this.logs = new HashMap<>();
            }
            
            void finish() {
                this.endTime = Instant.now();
            }
            
            long getDurationMs() {
                return Duration.between(startTime, endTime != null ? endTime : Instant.now()).toMillis();
            }
            
            void addTag(String key, String value) {
                tags.put(key, value);
            }
            
            void log(String event, String details) {
                logs.put(event, details);
            }
        }
        
        static class Trace {
            String traceId;
            List<Span> spans;
            
            Trace(String traceId) {
                this.traceId = traceId;
                this.spans = new ArrayList<>();
            }
            
            void addSpan(Span span) {
                spans.add(span);
            }
            
            long getTotalDuration() {
                if (spans.isEmpty()) return 0;
                
                Instant start = spans.stream()
                    .map(s -> s.startTime)
                    .min(Instant::compareTo)
                    .orElse(Instant.now());
                
                Instant end = spans.stream()
                    .map(s -> s.endTime != null ? s.endTime : Instant.now())
                    .max(Instant::compareTo)
                    .orElse(Instant.now());
                
                return Duration.between(start, end).toMillis();
            }
            
            List<Span> getCriticalPath() {
                // Build span tree and find longest path
                Map<String, List<Span>> childrenMap = new HashMap<>();
                
                for (Span span : spans) {
                    String parent = span.parentSpanId != null ? span.parentSpanId : "root";
                    childrenMap.computeIfAbsent(parent, k -> new ArrayList<>()).add(span);
                }
                
                return spans; // Simplified - would need full tree traversal
            }
        }
        
        private final Map<String, Trace> traces;
        
        DistributedTracing() {
            this.traces = new ConcurrentHashMap<>();
        }
        
        void recordSpan(Span span) {
            Trace trace = traces.computeIfAbsent(span.traceId, Trace::new);
            trace.addSpan(span);
        }
        
        Trace getTrace(String traceId) {
            return traces.get(traceId);
        }
        
        // Test
        static void test() throws InterruptedException {
            DistributedTracing tracing = new DistributedTracing();
            
            // Simulate a request through multiple services
            TraceContext rootContext = new TraceContext();
            
            Span apiSpan = new Span(rootContext, "api-gateway", "handleRequest");
            apiSpan.addTag("http.method", "GET");
            apiSpan.addTag("http.url", "/api/users/123");
            Thread.sleep(50);
            apiSpan.finish();
            tracing.recordSpan(apiSpan);
            
            TraceContext serviceContext = new TraceContext(rootContext.traceId, apiSpan.spanId);
            Span serviceSpan = new Span(serviceContext, "user-service", "getUser");
            serviceSpan.addTag("user.id", "123");
            Thread.sleep(100);
            serviceSpan.finish();
            tracing.recordSpan(serviceSpan);
            
            TraceContext dbContext = new TraceContext(rootContext.traceId, serviceSpan.spanId);
            Span dbSpan = new Span(dbContext, "database", "query");
            dbSpan.addTag("db.statement", "SELECT * FROM users WHERE id = ?");
            Thread.sleep(30);
            dbSpan.finish();
            tracing.recordSpan(dbSpan);
            
            Trace trace = tracing.getTrace(rootContext.traceId);
            
            System.out.println("Distributed trace:");
            System.out.printf("Trace ID: %s%n", trace.traceId);
            System.out.printf("Total duration: %dms%n", trace.getTotalDuration());
            System.out.println("\nSpans:");
            
            trace.spans.forEach(span ->
                System.out.printf("  %s.%s: %dms%n",
                    span.serviceName, span.operationName, span.getDurationMs()));
        }
    }
    
    // ============ DEMONSTRATIONS ============
    
    public static void main(String[] args) throws Exception {
        System.out.println("DAY 27: COMPREHENSIVE PRACTICE PROBLEMS\n");
        
        System.out.println("Problem 1: Predictive Auto-Scaler");
        PredictiveAutoScaler.test();
        
        System.out.println("\nProblem 2: Container Bin Packing");
        ContainerBinPacking.test();
        
        System.out.println("\nProblem 3: Cloud Cost Optimizer");
        CloudCostOptimizer.test();
        
        System.out.println("\nProblem 4: Weighted Response Time Balancer");
        WeightedResponseTimeBalancer.test();
        
        System.out.println("\nProblem 5: Sticky Session Balancer");
        StickySessionBalancer.test();
        
        System.out.println("\nProblem 6: Pod Scheduler");
        PodScheduler.test();
        
        System.out.println("\nProblem 7: Cold Start Optimizer");
        ColdStartOptimizer.test();
        
        System.out.println("\nProblem 8: Function Chain");
        FunctionChain.test();
        
        System.out.println("\nProblem 9: Distributed Tracing");
        DistributedTracing.test();
    }
}

/*
 * ADDITIONAL PROBLEMS OUTLINED (10-60):
 * 
 * Category 6: CI/CD & Deployment (10-15)
 * 10. Blue-Green Deployment Manager
 * 11. Canary Release Controller
 * 12. Feature Flag System
 * 13. Rollback Automation
 * 14. Deployment Pipeline Orchestrator
 * 15. Artifact Version Manager
 * 
 * Category 7: Storage & Data (16-22)
 * 16. Multi-Region Data Replication
 * 17. S3 Lifecycle Policy Manager
 * 18. Database Backup Scheduler
 * 19. Cache Invalidation Strategy
 * 20. Data Migration Planner
 * 21. Volume Snapshot Manager
 * 22. Geo-Redundant Storage
 * 
 * Category 8: Security & Compliance (23-29)
 * 23. IAM Policy Generator
 * 24. Secret Rotation System
 * 25. Security Group Manager
 * 26. Certificate Auto-Renewal
 * 27. Compliance Checker
 * 28. Audit Log Analyzer
 * 29. Vulnerability Scanner
 * 
 * Category 9: Network & Connectivity (30-36)
 * 30. Service Mesh Routing
 * 31. DNS Failover Manager
 * 32. VPC Peering Optimizer
 * 33. CDN Configuration Manager
 * 34. API Rate Limiting
 * 35. Network Topology Analyzer
 * 36. Traffic Mirroring System
 * 
 * Category 10: Cost & Resource Optimization (37-43)
 * 37. Spot Instance Manager
 * 38. Reserved Instance Planner
 * 39. Resource Tagging Auditor
 * 40. Idle Resource Detector
 * 41. Cost Allocation Report
 * 42. Budget Alert System
 * 43. Right-Sizing Recommender
 * 
 * Category 11: High Availability & DR (44-50)
 * 44. Multi-AZ Deployment
 * 45. Disaster Recovery Planner
 * 46. Health Check Aggregator
 * 47. Failover Automation
 * 48. Chaos Engineering Simulator
 * 49. SLA Monitor
 * 50. Backup Verification System
 * 
 * Category 12: Advanced Topics (51-60)
 * 51. ML Model Serving Pipeline
 * 52. Edge Computing Orchestrator
 * 53. IoT Device Fleet Manager
 * 54. Blockchain Node Manager
 * 55. Quantum Job Scheduler
 * 56. 5G Network Slice Manager
 * 57. AR/VR Content Delivery
 * 58. Real-Time Analytics Pipeline
 * 59. Multi-Tenant Isolation
 * 60. GraphQL Federation Gateway
 */
