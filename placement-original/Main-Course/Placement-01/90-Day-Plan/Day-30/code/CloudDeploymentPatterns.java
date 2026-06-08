/**
 * DAY 30: CLOUD DEPLOYMENT & CONTAINERIZATION PATTERNS
 * 
 * Complete implementation of cloud deployment patterns including:
 * - Container Orchestration
 * - Blue-Green Deployment
 * - Canary Deployment
 * - Auto-Scaling
 * - Health Checks & Monitoring
 * 
 * @author Placement Preparation Team
 * @version 1.0
 * @since December 3, 2025
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.time.*;
import java.util.stream.*;

// ============================================================================
// PATTERN 1: CONTAINER ORCHESTRATION
// ============================================================================

/**
 * Container Orchestrator - Manage containerized applications
 * 
 * Pattern: Automated deployment, scaling, and management of containers
 * Features:
 * - Service discovery
 * - Load balancing
 * - Auto-scaling
 * - Rolling updates
 * - Health monitoring
 * 
 * Time Complexity: O(1) schedule, O(n) scale
 * Space Complexity: O(n) where n = number of containers
 */
class ContainerOrchestrator {
    
    /**
     * Container specification
     */
    static class ContainerSpec {
        private final String image;
        private final Map<String, String> env;
        private final int memory; // MB
        private final double cpu; // cores
        private final Map<Integer, Integer> ports; // containerPort -> hostPort
        
        ContainerSpec(String image, Map<String, String> env, int memory, double cpu,
                     Map<Integer, Integer> ports) {
            this.image = image;
            this.env = new HashMap<>(env);
            this.memory = memory;
            this.cpu = cpu;
            this.ports = new HashMap<>(ports);
        }
        
        public String getImage() { return image; }
        public Map<String, String> getEnv() { return new HashMap<>(env); }
        public int getMemory() { return memory; }
        public double getCpu() { return cpu; }
        public Map<Integer, Integer> getPorts() { return new HashMap<>(ports); }
    }
    
    /**
     * Container instance
     */
    static class Container {
        private final String id;
        private final String name;
        private final ContainerSpec spec;
        private final String node;
        private ContainerStatus status;
        private final Instant createdAt;
        private Instant lastHealthCheck;
        private int restartCount;
        
        Container(String name, ContainerSpec spec, String node) {
            this.id = UUID.randomUUID().toString();
            this.name = name;
            this.spec = spec;
            this.node = node;
            this.status = ContainerStatus.PENDING;
            this.createdAt = Instant.now();
            this.lastHealthCheck = Instant.now();
            this.restartCount = 0;
        }
        
        public String getId() { return id; }
        public String getName() { return name; }
        public ContainerSpec getSpec() { return spec; }
        public String getNode() { return node; }
        public ContainerStatus getStatus() { return status; }
        public void setStatus(ContainerStatus status) { this.status = status; }
        public Instant getLastHealthCheck() { return lastHealthCheck; }
        public void updateHealthCheck() { this.lastHealthCheck = Instant.now(); }
        public int getRestartCount() { return restartCount; }
        public void incrementRestartCount() { this.restartCount++; }
        
        @Override
        public String toString() {
            return String.format("Container[id=%s, name=%s, status=%s, node=%s]",
                id.substring(0, 8), name, status, node);
        }
    }
    
    enum ContainerStatus {
        PENDING, RUNNING, STOPPED, FAILED, RESTARTING
    }
    
    /**
     * Deployment specification
     */
    static class Deployment {
        private final String name;
        private final ContainerSpec spec;
        private int replicas;
        private final DeploymentStrategy strategy;
        
        Deployment(String name, ContainerSpec spec, int replicas, DeploymentStrategy strategy) {
            this.name = name;
            this.spec = spec;
            this.replicas = replicas;
            this.strategy = strategy;
        }
        
        public String getName() { return name; }
        public ContainerSpec getSpec() { return spec; }
        public int getReplicas() { return replicas; }
        public void setReplicas(int replicas) { this.replicas = replicas; }
        public DeploymentStrategy getStrategy() { return strategy; }
    }
    
    enum DeploymentStrategy {
        RECREATE,        // Stop all old, start all new
        ROLLING_UPDATE,  // Gradually replace old with new
        BLUE_GREEN,      // Switch traffic between environments
        CANARY          // Gradual traffic shift
    }
    
    /**
     * Cluster node
     */
    static class Node {
        private final String id;
        private final String hostname;
        private final int totalMemory; // MB
        private final double totalCpu; // cores
        private int availableMemory;
        private double availableCpu;
        private final List<Container> containers;
        
        Node(String hostname, int totalMemory, double totalCpu) {
            this.id = UUID.randomUUID().toString();
            this.hostname = hostname;
            this.totalMemory = totalMemory;
            this.totalCpu = totalCpu;
            this.availableMemory = totalMemory;
            this.availableCpu = totalCpu;
            this.containers = new CopyOnWriteArrayList<>();
        }
        
        public String getId() { return id; }
        public String getHostname() { return hostname; }
        public int getAvailableMemory() { return availableMemory; }
        public double getAvailableCpu() { return availableCpu; }
        
        public boolean canSchedule(ContainerSpec spec) {
            return availableMemory >= spec.getMemory() && 
                   availableCpu >= spec.getCpu();
        }
        
        public void allocate(Container container) {
            containers.add(container);
            availableMemory -= container.getSpec().getMemory();
            availableCpu -= container.getSpec().getCpu();
        }
        
        public void release(Container container) {
            if (containers.remove(container)) {
                availableMemory += container.getSpec().getMemory();
                availableCpu += container.getSpec().getCpu();
            }
        }
        
        public List<Container> getContainers() {
            return new ArrayList<>(containers);
        }
        
        @Override
        public String toString() {
            return String.format("Node[hostname=%s, mem=%d/%dMB, cpu=%.1f/%.1fcores, containers=%d]",
                hostname, totalMemory - availableMemory, totalMemory,
                totalCpu - availableCpu, totalCpu, containers.size());
        }
    }
    
    // Orchestrator components
    private final List<Node> nodes;
    private final Map<String, Deployment> deployments;
    private final Map<String, List<Container>> containers; // deployment -> containers
    private final ScheduledExecutorService scheduler;
    
    public ContainerOrchestrator() {
        this.nodes = new CopyOnWriteArrayList<>();
        this.deployments = new ConcurrentHashMap<>();
        this.containers = new ConcurrentHashMap<>();
        this.scheduler = Executors.newScheduledThreadPool(2);
        
        // Start health check monitor
        startHealthMonitor();
    }
    
    /**
     * Add node to cluster
     */
    public void addNode(Node node) {
        nodes.add(node);
        System.out.printf("[Orchestrator] Added node: %s%n", node);
    }
    
    /**
     * Create deployment
     */
    public void createDeployment(Deployment deployment) {
        deployments.put(deployment.getName(), deployment);
        containers.put(deployment.getName(), new CopyOnWriteArrayList<>());
        
        System.out.printf("[Orchestrator] Created deployment: %s (replicas=%d)%n",
            deployment.getName(), deployment.getReplicas());
        
        // Schedule containers
        scheduleContainers(deployment);
    }
    
    /**
     * Schedule containers for deployment
     */
    private void scheduleContainers(Deployment deployment) {
        for (int i = 0; i < deployment.getReplicas(); i++) {
            scheduleContainer(deployment.getName() + "-" + i, deployment.getSpec());
        }
    }
    
    /**
     * Schedule single container
     */
    private void scheduleContainer(String name, ContainerSpec spec) {
        // Find suitable node
        Optional<Node> nodeOpt = nodes.stream()
                .filter(node -> node.canSchedule(spec))
                .min(Comparator.comparingInt(Node::getAvailableMemory));
        
        if (nodeOpt.isEmpty()) {
            System.err.printf("[Orchestrator] No available node for container: %s%n", name);
            return;
        }
        
        Node node = nodeOpt.get();
        Container container = new Container(name, spec, node.getHostname());
        
        // Allocate resources
        node.allocate(container);
        
        // Start container
        startContainer(container);
        
        // Track container
        String deploymentName = name.substring(0, name.lastIndexOf('-'));
        containers.get(deploymentName).add(container);
        
        System.out.printf("[Orchestrator] Scheduled container: %s on node: %s%n",
            name, node.getHostname());
    }
    
    /**
     * Start container
     */
    private void startContainer(Container container) {
        CompletableFuture.runAsync(() -> {
            container.setStatus(ContainerStatus.RUNNING);
            System.out.printf("[Orchestrator] Started: %s%n", container);
        });
    }
    
    /**
     * Stop container
     */
    private void stopContainer(Container container) {
        container.setStatus(ContainerStatus.STOPPED);
        
        // Release resources
        nodes.stream()
                .filter(node -> node.getHostname().equals(container.getNode()))
                .findFirst()
                .ifPresent(node -> node.release(container));
        
        System.out.printf("[Orchestrator] Stopped: %s%n", container);
    }
    
    /**
     * Scale deployment
     */
    public void scale(String deploymentName, int newReplicas) {
        Deployment deployment = deployments.get(deploymentName);
        if (deployment == null) {
            System.err.printf("[Orchestrator] Deployment not found: %s%n", deploymentName);
            return;
        }
        
        int currentReplicas = deployment.getReplicas();
        deployment.setReplicas(newReplicas);
        
        System.out.printf("[Orchestrator] Scaling %s: %d -> %d replicas%n",
            deploymentName, currentReplicas, newReplicas);
        
        if (newReplicas > currentReplicas) {
            // Scale up
            for (int i = currentReplicas; i < newReplicas; i++) {
                scheduleContainer(deploymentName + "-" + i, deployment.getSpec());
            }
        } else if (newReplicas < currentReplicas) {
            // Scale down
            List<Container> deploymentContainers = containers.get(deploymentName);
            for (int i = currentReplicas - 1; i >= newReplicas; i--) {
                if (i < deploymentContainers.size()) {
                    Container container = deploymentContainers.remove(i);
                    stopContainer(container);
                }
            }
        }
    }
    
    /**
     * Rolling update
     */
    public void rollingUpdate(String deploymentName, ContainerSpec newSpec) {
        Deployment deployment = deployments.get(deploymentName);
        if (deployment == null) {
            System.err.printf("[Orchestrator] Deployment not found: %s%n", deploymentName);
            return;
        }
        
        List<Container> oldContainers = new ArrayList<>(containers.get(deploymentName));
        
        System.out.printf("[Orchestrator] Rolling update for: %s%n", deploymentName);
        
        // Update one at a time
        for (int i = 0; i < oldContainers.size(); i++) {
            Container oldContainer = oldContainers.get(i);
            
            // Schedule new container
            scheduleContainer(deploymentName + "-" + i, newSpec);
            
            // Wait for new container to be healthy
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            
            // Stop old container
            stopContainer(oldContainer);
            containers.get(deploymentName).remove(oldContainer);
        }
        
        System.out.printf("[Orchestrator] Rolling update completed for: %s%n", deploymentName);
    }
    
    /**
     * Health check monitor
     */
    private void startHealthMonitor() {
        scheduler.scheduleAtFixedRate(() -> {
            containers.values().stream()
                    .flatMap(List::stream)
                    .forEach(container -> {
                        // Simulate health check
                        if (container.getStatus() == ContainerStatus.RUNNING) {
                            container.updateHealthCheck();
                            
                            // Simulate random failures (5% chance)
                            if (Math.random() < 0.05) {
                                container.setStatus(ContainerStatus.FAILED);
                                System.out.printf("[Health] Container failed: %s%n", container);
                                
                                // Auto-restart if restart count < 3
                                if (container.getRestartCount() < 3) {
                                    container.incrementRestartCount();
                                    container.setStatus(ContainerStatus.RESTARTING);
                                    startContainer(container);
                                    System.out.printf("[Health] Restarting: %s (attempt %d)%n",
                                        container, container.getRestartCount());
                                }
                            }
                        }
                    });
        }, 5, 5, TimeUnit.SECONDS);
    }
    
    /**
     * Get cluster status
     */
    public void printStatus() {
        System.out.println("\n=== CLUSTER STATUS ===");
        System.out.println("\nNodes:");
        nodes.forEach(node -> System.out.println("  " + node));
        
        System.out.println("\nDeployments:");
        deployments.forEach((name, deployment) -> {
            List<Container> depContainers = containers.get(name);
            long running = depContainers.stream()
                    .filter(c -> c.getStatus() == ContainerStatus.RUNNING)
                    .count();
            System.out.printf("  %s: %d/%d running%n", name, running, deployment.getReplicas());
        });
    }
    
    public void shutdown() {
        scheduler.shutdown();
    }
}

// ============================================================================
// PATTERN 2: AUTO-SCALING
// ============================================================================

/**
 * Auto-Scaler - Automatically scale based on metrics
 * 
 * Pattern: Monitor metrics and adjust capacity
 * Strategies:
 * - CPU-based scaling
 * - Memory-based scaling
 * - Request rate scaling
 * - Custom metrics
 * 
 * Time Complexity: O(1) metric collection, O(n) scaling decision
 * Space Complexity: O(m) where m = metric history size
 */
class AutoScaler {
    
    /**
     * Scaling Policy
     */
    static class ScalingPolicy {
        private final String metricName;
        private final double targetValue;
        private final int minReplicas;
        private final int maxReplicas;
        private final Duration cooldownPeriod;
        
        ScalingPolicy(String metricName, double targetValue, int minReplicas,
                     int maxReplicas, Duration cooldownPeriod) {
            this.metricName = metricName;
            this.targetValue = targetValue;
            this.minReplicas = minReplicas;
            this.maxReplicas = maxReplicas;
            this.cooldownPeriod = cooldownPeriod;
        }
        
        public String getMetricName() { return metricName; }
        public double getTargetValue() { return targetValue; }
        public int getMinReplicas() { return minReplicas; }
        public int getMaxReplicas() { return maxReplicas; }
        public Duration getCooldownPeriod() { return cooldownPeriod; }
    }
    
    /**
     * Metric data point
     */
    static class Metric {
        private final String name;
        private final double value;
        private final Instant timestamp;
        
        Metric(String name, double value) {
            this.name = name;
            this.value = value;
            this.timestamp = Instant.now();
        }
        
        public String getName() { return name; }
        public double getValue() { return value; }
        public Instant getTimestamp() { return timestamp; }
    }
    
    private final ContainerOrchestrator orchestrator;
    private final Map<String, ScalingPolicy> policies;
    private final Map<String, Deque<Metric>> metricHistory;
    private final Map<String, Instant> lastScaleTime;
    private final ScheduledExecutorService scheduler;
    
    public AutoScaler(ContainerOrchestrator orchestrator) {
        this.orchestrator = orchestrator;
        this.policies = new ConcurrentHashMap<>();
        this.metricHistory = new ConcurrentHashMap<>();
        this.lastScaleTime = new ConcurrentHashMap<>();
        this.scheduler = Executors.newSingleThreadScheduledExecutor();
    }
    
    /**
     * Add scaling policy
     */
    public void addPolicy(String deploymentName, ScalingPolicy policy) {
        policies.put(deploymentName, policy);
        metricHistory.put(deploymentName, new ConcurrentLinkedDeque<>());
        
        System.out.printf("[AutoScaler] Added policy for %s: target %s=%.2f, min=%d, max=%d%n",
            deploymentName, policy.getMetricName(), policy.getTargetValue(),
            policy.getMinReplicas(), policy.getMaxReplicas());
    }
    
    /**
     * Report metric
     */
    public void reportMetric(String deploymentName, String metricName, double value) {
        Metric metric = new Metric(metricName, value);
        
        Deque<Metric> history = metricHistory.get(deploymentName);
        if (history != null) {
            history.addLast(metric);
            
            // Keep only last 100 metrics
            while (history.size() > 100) {
                history.removeFirst();
            }
        }
    }
    
    /**
     * Start auto-scaling
     */
    public void start() {
        scheduler.scheduleAtFixedRate(() -> {
            policies.forEach((deploymentName, policy) -> {
                evaluateScaling(deploymentName, policy);
            });
        }, 10, 10, TimeUnit.SECONDS);
    }
    
    /**
     * Evaluate if scaling is needed
     */
    private void evaluateScaling(String deploymentName, ScalingPolicy policy) {
        // Check cooldown period
        Instant lastScale = lastScaleTime.get(deploymentName);
        if (lastScale != null && 
            Duration.between(lastScale, Instant.now()).compareTo(policy.getCooldownPeriod()) < 0) {
            return; // Still in cooldown
        }
        
        // Calculate average metric value
        Deque<Metric> history = metricHistory.get(deploymentName);
        if (history == null || history.isEmpty()) {
            return;
        }
        
        double avgValue = history.stream()
                .filter(m -> m.getName().equals(policy.getMetricName()))
                .filter(m -> Duration.between(m.getTimestamp(), Instant.now())
                        .compareTo(Duration.ofMinutes(5)) < 0)
                .mapToDouble(Metric::getValue)
                .average()
                .orElse(0.0);
        
        // Get current replicas (would query from orchestrator in real impl)
        int currentReplicas = getCurrentReplicas(deploymentName);
        
        // Calculate desired replicas
        int desiredReplicas = calculateDesiredReplicas(currentReplicas, avgValue, 
            policy.getTargetValue(), policy.getMinReplicas(), policy.getMaxReplicas());
        
        if (desiredReplicas != currentReplicas) {
            System.out.printf("[AutoScaler] Scaling %s: %d -> %d (avg %s=%.2f, target=%.2f)%n",
                deploymentName, currentReplicas, desiredReplicas,
                policy.getMetricName(), avgValue, policy.getTargetValue());
            
            orchestrator.scale(deploymentName, desiredReplicas);
            lastScaleTime.put(deploymentName, Instant.now());
        }
    }
    
    /**
     * Calculate desired replicas
     */
    private int calculateDesiredReplicas(int current, double avgValue, double targetValue,
                                        int min, int max) {
        if (avgValue == 0) {
            return current;
        }
        
        // Simple proportional scaling
        double ratio = avgValue / targetValue;
        int desired = (int) Math.ceil(current * ratio);
        
        // Clamp to min/max
        return Math.max(min, Math.min(max, desired));
    }
    
    private int getCurrentReplicas(String deploymentName) {
        // Simplified - would query orchestrator
        return 3;
    }
    
    public void stop() {
        scheduler.shutdown();
    }
}

// ============================================================================
// PATTERN 3: BLUE-GREEN DEPLOYMENT
// ============================================================================

/**
 * Blue-Green Deployer - Zero-downtime deployment
 * 
 * Pattern: Maintain two identical production environments
 * Process:
 * 1. Deploy new version to inactive environment (green)
 * 2. Test green environment
 * 3. Switch traffic from blue to green
 * 4. Keep blue as rollback option
 * 
 * Time Complexity: O(1) switch
 * Space Complexity: O(2n) - two environments
 */
class BlueGreenDeployer {
    
    enum Environment {
        BLUE, GREEN
    }
    
    static class EnvironmentState {
        private final Environment environment;
        private String version;
        private boolean active;
        private final List<String> instances;
        
        EnvironmentState(Environment environment) {
            this.environment = environment;
            this.version = null;
            this.active = false;
            this.instances = new CopyOnWriteArrayList<>();
        }
        
        public Environment getEnvironment() { return environment; }
        public String getVersion() { return version; }
        public void setVersion(String version) { this.version = version; }
        public boolean isActive() { return active; }
        public void setActive(boolean active) { this.active = active; }
        public List<String> getInstances() { return new ArrayList<>(instances); }
        public void addInstance(String instance) { instances.add(instance); }
        public void clearInstances() { instances.clear(); }
    }
    
    private final EnvironmentState blue;
    private final EnvironmentState green;
    private final ContainerOrchestrator orchestrator;
    
    public BlueGreenDeployer(ContainerOrchestrator orchestrator) {
        this.blue = new EnvironmentState(Environment.BLUE);
        this.green = new EnvironmentState(Environment.GREEN);
        this.orchestrator = orchestrator;
        
        // Initially blue is active
        blue.setActive(true);
        blue.setVersion("v1.0");
    }
    
    /**
     * Deploy new version
     */
    public void deploy(String newVersion, ContainerOrchestrator.ContainerSpec spec, int replicas) {
        // Get inactive environment
        EnvironmentState inactive = blue.isActive() ? green : blue;
        
        System.out.printf("[BlueGreen] Deploying %s to %s environment%n",
            newVersion, inactive.getEnvironment());
        
        // Deploy to inactive environment
        String deploymentName = inactive.getEnvironment().name().toLowerCase() + "-deployment";
        ContainerOrchestrator.Deployment deployment = new ContainerOrchestrator.Deployment(
            deploymentName, spec, replicas, ContainerOrchestrator.DeploymentStrategy.RECREATE
        );
        
        orchestrator.createDeployment(deployment);
        
        inactive.setVersion(newVersion);
        inactive.clearInstances();
        for (int i = 0; i < replicas; i++) {
            inactive.addInstance(deploymentName + "-" + i);
        }
        
        System.out.printf("[BlueGreen] Deployed %s to %s%n", newVersion, inactive.getEnvironment());
    }
    
    /**
     * Switch traffic to new environment
     */
    public void switchTraffic() {
        EnvironmentState active = blue.isActive() ? blue : green;
        EnvironmentState inactive = blue.isActive() ? green : blue;
        
        System.out.printf("[BlueGreen] Switching traffic from %s to %s%n",
            active.getEnvironment(), inactive.getEnvironment());
        
        // Switch active flag
        active.setActive(false);
        inactive.setActive(true);
        
        System.out.printf("[BlueGreen] Traffic switched to %s (%s)%n",
            inactive.getEnvironment(), inactive.getVersion());
    }
    
    /**
     * Rollback to previous environment
     */
    public void rollback() {
        EnvironmentState active = blue.isActive() ? blue : green;
        EnvironmentState inactive = blue.isActive() ? green : blue;
        
        System.out.printf("[BlueGreen] Rolling back from %s (%s) to %s (%s)%n",
            active.getEnvironment(), active.getVersion(),
            inactive.getEnvironment(), inactive.getVersion());
        
        switchTraffic();
    }
    
    /**
     * Get active environment
     */
    public EnvironmentState getActiveEnvironment() {
        return blue.isActive() ? blue : green;
    }
    
    /**
     * Get inactive environment
     */
    public EnvironmentState getInactiveEnvironment() {
        return blue.isActive() ? green : blue;
    }
}

// ============================================================================
// PATTERN 4: CANARY DEPLOYMENT
// ============================================================================

/**
 * Canary Deployer - Gradual rollout with monitoring
 * 
 * Pattern: Route small percentage of traffic to new version
 * Process:
 * 1. Deploy new version alongside old
 * 2. Route 5% traffic to new version
 * 3. Monitor metrics (errors, latency)
 * 4. Gradually increase traffic (10%, 25%, 50%, 100%)
 * 5. Rollback if metrics degrade
 * 
 * Time Complexity: O(1) per traffic shift
 * Space Complexity: O(n) old + O(m) new versions
 */
class CanaryDeployer {
    
    static class CanaryConfig {
        private final List<Integer> trafficSteps; // e.g., [5, 10, 25, 50, 100]
        private final Duration stepDuration;
        private final Map<String, Double> metricThresholds; // metric -> max value
        
        CanaryConfig(List<Integer> trafficSteps, Duration stepDuration,
                    Map<String, Double> metricThresholds) {
            this.trafficSteps = new ArrayList<>(trafficSteps);
            this.stepDuration = stepDuration;
            this.metricThresholds = new HashMap<>(metricThresholds);
        }
        
        public List<Integer> getTrafficSteps() { return new ArrayList<>(trafficSteps); }
        public Duration getStepDuration() { return stepDuration; }
        public Map<String, Double> getMetricThresholds() { return new HashMap<>(metricThresholds); }
    }
    
    static class CanaryDeployment {
        private final String oldVersion;
        private final String newVersion;
        private int currentTrafficPercentage;
        private int currentStepIndex;
        private Instant stepStartedAt;
        private CanaryStatus status;
        
        CanaryDeployment(String oldVersion, String newVersion) {
            this.oldVersion = oldVersion;
            this.newVersion = newVersion;
            this.currentTrafficPercentage = 0;
            this.currentStepIndex = 0;
            this.stepStartedAt = Instant.now();
            this.status = CanaryStatus.IN_PROGRESS;
        }
        
        public String getOldVersion() { return oldVersion; }
        public String getNewVersion() { return newVersion; }
        public int getCurrentTrafficPercentage() { return currentTrafficPercentage; }
        public void setCurrentTrafficPercentage(int percentage) { 
            this.currentTrafficPercentage = percentage;
        }
        public int getCurrentStepIndex() { return currentStepIndex; }
        public void incrementStepIndex() { this.currentStepIndex++; }
        public Instant getStepStartedAt() { return stepStartedAt; }
        public void resetStepTimer() { this.stepStartedAt = Instant.now(); }
        public CanaryStatus getStatus() { return status; }
        public void setStatus(CanaryStatus status) { this.status = status; }
    }
    
    enum CanaryStatus {
        IN_PROGRESS, COMPLETED, ROLLED_BACK
    }
    
    private final ContainerOrchestrator orchestrator;
    private final CanaryConfig config;
    private CanaryDeployment currentDeployment;
    private final Map<String, Deque<Double>> metrics;
    private final ScheduledExecutorService scheduler;
    
    public CanaryDeployer(ContainerOrchestrator orchestrator, CanaryConfig config) {
        this.orchestrator = orchestrator;
        this.config = config;
        this.metrics = new ConcurrentHashMap<>();
        this.scheduler = Executors.newSingleThreadScheduledExecutor();
    }
    
    /**
     * Start canary deployment
     */
    public void deploy(String oldVersion, String newVersion, 
                      ContainerOrchestrator.ContainerSpec newSpec) {
        System.out.printf("[Canary] Starting deployment: %s -> %s%n", oldVersion, newVersion);
        
        currentDeployment = new CanaryDeployment(oldVersion, newVersion);
        
        // Deploy canary version with minimal replicas
        ContainerOrchestrator.Deployment canaryDeployment = new ContainerOrchestrator.Deployment(
            "canary-" + newVersion, newSpec, 1,
            ContainerOrchestrator.DeploymentStrategy.RECREATE
        );
        orchestrator.createDeployment(canaryDeployment);
        
        // Start gradual rollout
        startGradualRollout();
    }
    
    /**
     * Gradual traffic increase
     */
    private void startGradualRollout() {
        scheduler.scheduleAtFixedRate(() -> {
            if (currentDeployment == null || 
                currentDeployment.getStatus() != CanaryStatus.IN_PROGRESS) {
                return;
            }
            
            // Check if step duration passed
            if (Duration.between(currentDeployment.getStepStartedAt(), Instant.now())
                    .compareTo(config.getStepDuration()) < 0) {
                return; // Wait for step duration
            }
            
            // Check metrics
            if (!checkMetrics()) {
                System.err.println("[Canary] Metrics exceeded threshold, rolling back!");
                rollback();
                return;
            }
            
            // Move to next traffic step
            int stepIndex = currentDeployment.getCurrentStepIndex();
            if (stepIndex >= config.getTrafficSteps().size()) {
                completeDeployment();
                return;
            }
            
            int trafficPercentage = config.getTrafficSteps().get(stepIndex);
            currentDeployment.setCurrentTrafficPercentage(trafficPercentage);
            currentDeployment.incrementStepIndex();
            currentDeployment.resetStepTimer();
            
            System.out.printf("[Canary] Increasing traffic to new version: %d%%%n",
                trafficPercentage);
            
            // Adjust replica counts
            adjustReplicas(trafficPercentage);
            
        }, config.getStepDuration().toSeconds(), 
           config.getStepDuration().toSeconds(), 
           TimeUnit.SECONDS);
    }
    
    /**
     * Check if metrics are within thresholds
     */
    private boolean checkMetrics() {
        return config.getMetricThresholds().entrySet().stream()
                .allMatch(entry -> {
                    String metricName = entry.getKey();
                    double threshold = entry.getValue();
                    
                    Deque<Double> history = metrics.get(metricName);
                    if (history == null || history.isEmpty()) {
                        return true; // No data yet
                    }
                    
                    double avgValue = history.stream()
                            .limit(10) // Last 10 data points
                            .mapToDouble(Double::doubleValue)
                            .average()
                            .orElse(0.0);
                    
                    boolean withinThreshold = avgValue <= threshold;
                    if (!withinThreshold) {
                        System.err.printf("[Canary] Metric %s exceeded threshold: %.2f > %.2f%n",
                            metricName, avgValue, threshold);
                    }
                    return withinThreshold;
                });
    }
    
    /**
     * Adjust replica counts based on traffic split
     */
    private void adjustReplicas(int canaryPercentage) {
        int totalReplicas = 10; // Example: 10 total replicas
        int canaryReplicas = (int) Math.ceil(totalReplicas * canaryPercentage / 100.0);
        int oldReplicas = totalReplicas - canaryReplicas;
        
        orchestrator.scale("canary-" + currentDeployment.getNewVersion(), canaryReplicas);
        orchestrator.scale("prod-" + currentDeployment.getOldVersion(), oldReplicas);
    }
    
    /**
     * Complete deployment
     */
    private void completeDeployment() {
        currentDeployment.setStatus(CanaryStatus.COMPLETED);
        System.out.printf("[Canary] Deployment completed: %s is now at 100%%%n",
            currentDeployment.getNewVersion());
        scheduler.shutdown();
    }
    
    /**
     * Rollback canary deployment
     */
    private void rollback() {
        currentDeployment.setStatus(CanaryStatus.ROLLED_BACK);
        
        // Set old version to 100%
        orchestrator.scale("prod-" + currentDeployment.getOldVersion(), 10);
        orchestrator.scale("canary-" + currentDeployment.getNewVersion(), 0);
        
        System.out.printf("[Canary] Rolled back to %s%n", currentDeployment.getOldVersion());
        scheduler.shutdown();
    }
    
    /**
     * Report metric for monitoring
     */
    public void reportMetric(String metricName, double value) {
        metrics.computeIfAbsent(metricName, k -> new ConcurrentLinkedDeque<>())
                .addLast(value);
        
        // Keep only last 100 values
        Deque<Double> history = metrics.get(metricName);
        while (history.size() > 100) {
            history.removeFirst();
        }
    }
}

// ============================================================================
// DEMONSTRATION
// ============================================================================

public class CloudDeploymentPatterns {
    
    public static void main(String[] args) throws InterruptedException {
        System.out.println("=".repeat(80));
        System.out.println("CLOUD DEPLOYMENT PATTERNS DEMONSTRATION");
        System.out.println("=".repeat(80));
        
        // Demo 1: Container Orchestration
        demonstrateContainerOrchestration();
        
        Thread.sleep(2000);
        
        // Demo 2: Auto-Scaling
        demonstrateAutoScaling();
        
        Thread.sleep(2000);
        
        // Demo 3: Blue-Green Deployment
        demonstrateBlueGreenDeployment();
    }
    
    private static void demonstrateContainerOrchestration() throws InterruptedException {
        System.out.println("\n--- DEMO 1: CONTAINER ORCHESTRATION ---\n");
        
        ContainerOrchestrator orchestrator = new ContainerOrchestrator();
        
        // Add nodes
        orchestrator.addNode(new ContainerOrchestrator.Node("node-1", 8192, 4.0));
        orchestrator.addNode(new ContainerOrchestrator.Node("node-2", 8192, 4.0));
        
        // Create deployment
        ContainerOrchestrator.ContainerSpec spec = new ContainerOrchestrator.ContainerSpec(
            "myapp:1.0",
            Map.of("ENV", "production"),
            512, // 512 MB
            0.5, // 0.5 CPU cores
            Map.of(8080, 80)
        );
        
        ContainerOrchestrator.Deployment deployment = new ContainerOrchestrator.Deployment(
            "web-app", spec, 3, ContainerOrchestrator.DeploymentStrategy.ROLLING_UPDATE
        );
        
        orchestrator.createDeployment(deployment);
        
        Thread.sleep(1000);
        orchestrator.printStatus();
        
        // Scale up
        System.out.println("\nScaling up...");
        orchestrator.scale("web-app", 5);
        
        Thread.sleep(1000);
        orchestrator.printStatus();
        
        orchestrator.shutdown();
    }
    
    private static void demonstrateAutoScaling() throws InterruptedException {
        System.out.println("\n--- DEMO 2: AUTO-SCALING ---\n");
        
        ContainerOrchestrator orchestrator = new ContainerOrchestrator();
        AutoScaler autoScaler = new AutoScaler(orchestrator);
        
        // Add scaling policy
        AutoScaler.ScalingPolicy policy = new AutoScaler.ScalingPolicy(
            "cpu_usage",
            70.0, // target 70% CPU
            2,    // min 2 replicas
            10,   // max 10 replicas
            Duration.ofSeconds(30) // 30s cooldown
        );
        
        autoScaler.addPolicy("web-app", policy);
        autoScaler.start();
        
        // Simulate increasing load
        System.out.println("Simulating increasing CPU usage...");
        for (int i = 0; i < 10; i++) {
            double cpuUsage = 50 + (i * 5); // 50% to 95%
            autoScaler.reportMetric("web-app", "cpu_usage", cpuUsage);
            System.out.printf("Reported CPU: %.1f%%%n", cpuUsage);
            Thread.sleep(2000);
        }
        
        autoScaler.stop();
        orchestrator.shutdown();
    }
    
    private static void demonstrateBlueGreenDeployment() throws InterruptedException {
        System.out.println("\n--- DEMO 3: BLUE-GREEN DEPLOYMENT ---\n");
        
        ContainerOrchestrator orchestrator = new ContainerOrchestrator();
        BlueGreenDeployer blueGreen = new BlueGreenDeployer(orchestrator);
        
        orchestrator.addNode(new ContainerOrchestrator.Node("node-1", 16384, 8.0));
        
        System.out.println("Active environment: " + blueGreen.getActiveEnvironment().getEnvironment());
        
        // Deploy new version to inactive environment
        ContainerOrchestrator.ContainerSpec newSpec = new ContainerOrchestrator.ContainerSpec(
            "myapp:2.0",
            Map.of("ENV", "production"),
            512, 0.5,
            Map.of(8080, 80)
        );
        
        blueGreen.deploy("v2.0", newSpec, 3);
        
        Thread.sleep(2000);
        
        // Test new version (simulated)
        System.out.println("\nTesting new version...");
        Thread.sleep(1000);
        System.out.println("Tests passed!");
        
        // Switch traffic
        blueGreen.switchTraffic();
        
        System.out.println("\nActive environment: " + blueGreen.getActiveEnvironment().getEnvironment());
        System.out.println("Active version: " + blueGreen.getActiveEnvironment().getVersion());
        
        orchestrator.shutdown();
    }
}
