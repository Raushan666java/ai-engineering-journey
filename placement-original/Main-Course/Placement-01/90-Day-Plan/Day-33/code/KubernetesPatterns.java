package day33.kubernetes;

import java.util.*;
import java.util.concurrent.*;
import java.time.*;
import java.util.stream.*;
import java.util.function.*;

/**
 * DAY 33: KUBERNETES PATTERNS
 * 
 * Topics Covered:
 * 1. Pod Design Patterns
 * 2. Deployment Strategies
 * 3. Service Patterns
 * 4. Configuration Management (ConfigMap & Secrets)
 * 5. StatefulSets and Persistent Volumes
 * 
 * Real-world applications:
 * - Google: Kubernetes originated from Google's Borg
 * - Spotify: Running 1000+ microservices on Kubernetes
 * - Airbnb: Managing global infrastructure with K8s
 * - Netflix: Multi-region Kubernetes deployments
 */

public class KubernetesPatterns {
    
    /**
     * PATTERN 1: POD DESIGN PATTERNS
     * ===============================
     * 
     * Single Container Pod - One container per pod (most common)
     * Sidecar Pattern - Helper container alongside main container
     * Ambassador Pattern - Proxy container for external communication
     * Adapter Pattern - Standardize output from main container
     * Init Container Pattern - Initialize before main containers start
     */
    
    static class Pod {
        private final String name;
        private final String namespace;
        private final List<Container> containers;
        private final List<Container> initContainers;
        private final Map<String, Volume> volumes;
        private PodPhase phase;
        private final Map<String, String> labels;
        private final Map<String, String> annotations;
        
        public enum PodPhase {
            PENDING, RUNNING, SUCCEEDED, FAILED, UNKNOWN
        }
        
        public Pod(String name, String namespace) {
            this.name = name;
            this.namespace = namespace;
            this.containers = new CopyOnWriteArrayList<>();
            this.initContainers = new CopyOnWriteArrayList<>();
            this.volumes = new ConcurrentHashMap<>();
            this.phase = PodPhase.PENDING;
            this.labels = new ConcurrentHashMap<>();
            this.annotations = new ConcurrentHashMap<>();
        }
        
        public void addContainer(Container container) {
            containers.add(container);
        }
        
        public void addInitContainer(Container container) {
            initContainers.add(container);
        }
        
        public void addVolume(String name, Volume volume) {
            volumes.put(name, volume);
        }
        
        public void addLabel(String key, String value) {
            labels.put(key, value);
        }
        
        // Pod lifecycle
        public void start() {
            System.out.println("\n[Pod " + name + "] Starting...");
            
            // Run init containers first (sequentially)
            for (Container initContainer : initContainers) {
                System.out.println("  Running init container: " + initContainer.getName());
                initContainer.start();
                
                // Wait for init container to complete
                while (initContainer.isRunning()) {
                    try {
                        Thread.sleep(10);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                        break;
                    }
                }
                
                if (!initContainer.isCompleted()) {
                    phase = PodPhase.FAILED;
                    System.out.println("  ✗ Init container failed");
                    return;
                }
                System.out.println("  ✓ Init container completed");
            }
            
            // Start all main containers (parallel)
            System.out.println("  Starting main containers...");
            containers.forEach(Container::start);
            
            phase = PodPhase.RUNNING;
            System.out.println("✓ Pod " + name + " is running");
        }
        
        public void stop() {
            System.out.println("[Pod " + name + "] Stopping...");
            containers.forEach(Container::stop);
            phase = PodPhase.SUCCEEDED;
        }
        
        public boolean isHealthy() {
            return phase == PodPhase.RUNNING && 
                   containers.stream().allMatch(Container::isHealthy);
        }
        
        public String getName() {
            return name;
        }
        
        public Map<String, String> getLabels() {
            return Collections.unmodifiableMap(labels);
        }
        
        public PodPhase getPhase() {
            return phase;
        }
    }
    
    static class Container {
        private final String name;
        private final String image;
        private final List<String> command;
        private final Map<String, String> env;
        private final List<VolumeMount> volumeMounts;
        private volatile boolean running;
        private volatile boolean completed;
        private volatile boolean healthy;
        private final ResourceRequirements resources;
        
        public Container(String name, String image) {
            this.name = name;
            this.image = image;
            this.command = new ArrayList<>();
            this.env = new ConcurrentHashMap<>();
            this.volumeMounts = new CopyOnWriteArrayList<>();
            this.running = false;
            this.completed = false;
            this.healthy = false;
            this.resources = new ResourceRequirements();
        }
        
        public void addEnv(String key, String value) {
            env.put(key, value);
        }
        
        public void addVolumeMount(VolumeMount mount) {
            volumeMounts.add(mount);
        }
        
        public void start() {
            running = true;
            healthy = true;
            System.out.println("    Container " + name + " started (" + image + ")");
        }
        
        public void stop() {
            running = false;
            healthy = false;
            completed = true;
            System.out.println("    Container " + name + " stopped");
        }
        
        public String getName() {
            return name;
        }
        
        public boolean isRunning() {
            return running;
        }
        
        public boolean isCompleted() {
            return completed;
        }
        
        public boolean isHealthy() {
            return healthy;
        }
        
        public void setCommand(String... cmd) {
            command.clear();
            command.addAll(Arrays.asList(cmd));
        }
    }
    
    static class VolumeMount {
        String name;
        String mountPath;
        boolean readOnly;
        
        public VolumeMount(String name, String mountPath, boolean readOnly) {
            this.name = name;
            this.mountPath = mountPath;
            this.readOnly = readOnly;
        }
    }
    
    static class Volume {
        String name;
        VolumeType type;
        Map<String, String> config;
        
        enum VolumeType {
            EMPTY_DIR, CONFIG_MAP, SECRET, PERSISTENT_VOLUME_CLAIM
        }
        
        public Volume(String name, VolumeType type) {
            this.name = name;
            this.type = type;
            this.config = new HashMap<>();
        }
    }
    
    static class ResourceRequirements {
        Map<String, String> requests;
        Map<String, String> limits;
        
        public ResourceRequirements() {
            this.requests = new HashMap<>();
            this.limits = new HashMap<>();
            
            // Defaults
            requests.put("cpu", "100m");
            requests.put("memory", "128Mi");
            limits.put("cpu", "500m");
            limits.put("memory", "512Mi");
        }
    }
    
    /**
     * PATTERN 2: DEPLOYMENT STRATEGIES
     * =================================
     * 
     * Recreate - Terminate all old pods, then create new ones
     * Rolling Update - Gradually replace old pods with new ones
     * Blue-Green - Run two identical environments, switch traffic
     * Canary - Gradually increase traffic to new version
     */
    
    static class Deployment {
        private final String name;
        private final String namespace;
        private final int replicas;
        private final Map<String, String> selector;
        private final PodTemplate template;
        private final DeploymentStrategy strategy;
        private final List<Pod> pods;
        private int currentRevision;
        
        public enum StrategyType {
            RECREATE, ROLLING_UPDATE, BLUE_GREEN, CANARY
        }
        
        public Deployment(String name, String namespace, int replicas, 
                         PodTemplate template, DeploymentStrategy strategy) {
            this.name = name;
            this.namespace = namespace;
            this.replicas = replicas;
            this.selector = new ConcurrentHashMap<>();
            this.template = template;
            this.strategy = strategy;
            this.pods = new CopyOnWriteArrayList<>();
            this.currentRevision = 1;
        }
        
        public void deploy() {
            System.out.println("\n=== Deploying " + name + " ===");
            System.out.println("Strategy: " + strategy.getType());
            System.out.println("Replicas: " + replicas);
            
            strategy.execute(this);
        }
        
        public void rollout(PodTemplate newTemplate) {
            System.out.println("\n=== Rolling out new version ===");
            currentRevision++;
            
            this.template.updateFrom(newTemplate);
            strategy.execute(this);
        }
        
        public void scale(int newReplicas) {
            System.out.println("\n=== Scaling from " + replicas + " to " + newReplicas + " ===");
            
            int currentSize = pods.size();
            
            if (newReplicas > currentSize) {
                // Scale up
                for (int i = currentSize; i < newReplicas; i++) {
                    Pod pod = createPodFromTemplate(i);
                    pods.add(pod);
                    pod.start();
                }
            } else if (newReplicas < currentSize) {
                // Scale down
                for (int i = currentSize - 1; i >= newReplicas; i--) {
                    Pod pod = pods.remove(i);
                    pod.stop();
                }
            }
            
            System.out.println("✓ Scaled to " + newReplicas + " replicas");
        }
        
        private Pod createPodFromTemplate(int index) {
            String podName = name + "-" + currentRevision + "-" + index;
            Pod pod = new Pod(podName, namespace);
            
            // Copy labels from template
            template.labels.forEach(pod::addLabel);
            pod.addLabel("app", name);
            pod.addLabel("revision", String.valueOf(currentRevision));
            
            // Copy containers from template
            template.containers.forEach(pod::addContainer);
            
            return pod;
        }
        
        public List<Pod> getPods() {
            return Collections.unmodifiableList(pods);
        }
        
        public String getName() {
            return name;
        }
        
        public int getReplicas() {
            return replicas;
        }
        
        public PodTemplate getTemplate() {
            return template;
        }
    }
    
    static class PodTemplate {
        Map<String, String> labels;
        List<Container> containers;
        
        public PodTemplate() {
            this.labels = new HashMap<>();
            this.containers = new ArrayList<>();
        }
        
        public void addContainer(Container container) {
            containers.add(container);
        }
        
        public void addLabel(String key, String value) {
            labels.put(key, value);
        }
        
        public void updateFrom(PodTemplate other) {
            this.labels.putAll(other.labels);
            this.containers.clear();
            this.containers.addAll(other.containers);
        }
    }
    
    interface DeploymentStrategy {
        StrategyType getType();
        void execute(Deployment deployment);
    }
    
    static class RollingUpdateStrategy implements DeploymentStrategy {
        private final int maxSurge;      // Max extra pods during update
        private final int maxUnavailable; // Max unavailable pods during update
        
        public RollingUpdateStrategy(int maxSurge, int maxUnavailable) {
            this.maxSurge = maxSurge;
            this.maxUnavailable = maxUnavailable;
        }
        
        @Override
        public StrategyType getType() {
            return Deployment.StrategyType.ROLLING_UPDATE;
        }
        
        @Override
        public void execute(Deployment deployment) {
            List<Pod> existingPods = new ArrayList<>(deployment.getPods());
            int desired = deployment.getReplicas();
            
            if (existingPods.isEmpty()) {
                // Initial deployment
                System.out.println("Creating initial " + desired + " pods...");
                for (int i = 0; i < desired; i++) {
                    Pod pod = deployment.createPodFromTemplate(i);
                    deployment.pods.add(pod);
                    pod.start();
                }
                return;
            }
            
            // Rolling update
            System.out.println("Performing rolling update...");
            System.out.println("MaxSurge: " + maxSurge + ", MaxUnavailable: " + maxUnavailable);
            
            int batchSize = Math.max(1, desired / 4); // Update 25% at a time
            
            for (int i = 0; i < existingPods.size(); i += batchSize) {
                int endIndex = Math.min(i + batchSize, existingPods.size());
                List<Pod> batch = existingPods.subList(i, endIndex);
                
                System.out.println("\nUpdating batch " + (i/batchSize + 1) + " (" + batch.size() + " pods)");
                
                // Create new pods
                List<Pod> newPods = new ArrayList<>();
                for (int j = 0; j < batch.size(); j++) {
                    Pod newPod = deployment.createPodFromTemplate(i + j);
                    newPods.add(newPod);
                    newPod.start();
                }
                
                // Wait for new pods to be healthy
                System.out.println("  Waiting for new pods to be ready...");
                waitForPodsReady(newPods);
                
                // Add new pods to deployment
                deployment.pods.addAll(newPods);
                
                // Remove old pods
                batch.forEach(pod -> {
                    pod.stop();
                    deployment.pods.remove(pod);
                });
                
                System.out.println("  ✓ Batch complete");
            }
            
            System.out.println("\n✓ Rolling update complete!");
        }
        
        private void waitForPodsReady(List<Pod> pods) {
            // Simulate waiting for pods to be ready
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
    
    static class RecreateStrategy implements DeploymentStrategy {
        @Override
        public StrategyType getType() {
            return Deployment.StrategyType.RECREATE;
        }
        
        @Override
        public void execute(Deployment deployment) {
            System.out.println("Executing recreate strategy...");
            
            // Terminate all existing pods
            List<Pod> existingPods = new ArrayList<>(deployment.getPods());
            if (!existingPods.isEmpty()) {
                System.out.println("Terminating " + existingPods.size() + " existing pods...");
                existingPods.forEach(pod -> {
                    pod.stop();
                    deployment.pods.remove(pod);
                });
            }
            
            // Create new pods
            System.out.println("Creating " + deployment.getReplicas() + " new pods...");
            for (int i = 0; i < deployment.getReplicas(); i++) {
                Pod pod = deployment.createPodFromTemplate(i);
                deployment.pods.add(pod);
                pod.start();
            }
            
            System.out.println("✓ Recreate complete!");
        }
    }
    
    /**
     * PATTERN 3: SERVICE PATTERNS
     * ============================
     * 
     * ClusterIP - Internal service (default)
     * NodePort - Expose on each node's IP
     * LoadBalancer - Cloud provider load balancer
     * Headless Service - Direct pod access (for StatefulSets)
     */
    
    static class Service {
        private final String name;
        private final String namespace;
        private final ServiceType type;
        private final Map<String, String> selector;
        private final List<ServicePort> ports;
        private final String clusterIP;
        private final List<Endpoint> endpoints;
        
        public enum ServiceType {
            CLUSTER_IP, NODE_PORT, LOAD_BALANCER, HEADLESS
        }
        
        public Service(String name, String namespace, ServiceType type) {
            this.name = name;
            this.namespace = namespace;
            this.type = type;
            this.selector = new HashMap<>();
            this.ports = new ArrayList<>();
            this.clusterIP = generateClusterIP();
            this.endpoints = new CopyOnWriteArrayList<>();
        }
        
        private String generateClusterIP() {
            if (type == ServiceType.HEADLESS) {
                return "None";
            }
            return "10.96." + ThreadLocalRandom.current().nextInt(256) + "." + 
                   ThreadLocalRandom.current().nextInt(256);
        }
        
        public void addSelector(String key, String value) {
            selector.put(key, value);
        }
        
        public void addPort(ServicePort port) {
            ports.add(port);
        }
        
        // Discover pods matching selector
        public void discoverEndpoints(List<Pod> allPods) {
            endpoints.clear();
            
            List<Pod> matchingPods = allPods.stream()
                .filter(pod -> matchesSelector(pod))
                .filter(Pod::isHealthy)
                .collect(Collectors.toList());
            
            System.out.println("\n[Service " + name + "] Discovered " + matchingPods.size() + " endpoints");
            
            for (Pod pod : matchingPods) {
                String podIP = generatePodIP();
                Endpoint endpoint = new Endpoint(pod.getName(), podIP, ports.get(0).getTargetPort());
                endpoints.add(endpoint);
                System.out.println("  + " + podIP + ":" + ports.get(0).getTargetPort());
            }
        }
        
        private boolean matchesSelector(Pod pod) {
            Map<String, String> podLabels = pod.getLabels();
            return selector.entrySet().stream()
                .allMatch(entry -> entry.getValue().equals(podLabels.get(entry.getKey())));
        }
        
        private String generatePodIP() {
            return "10.244." + ThreadLocalRandom.current().nextInt(256) + "." + 
                   ThreadLocalRandom.current().nextInt(256);
        }
        
        // Load balance across endpoints
        public Endpoint getEndpoint() {
            if (endpoints.isEmpty()) {
                throw new IllegalStateException("No endpoints available");
            }
            
            // Round-robin load balancing
            int index = ThreadLocalRandom.current().nextInt(endpoints.size());
            return endpoints.get(index);
        }
        
        public String getClusterIP() {
            return clusterIP;
        }
        
        public ServiceType getType() {
            return type;
        }
        
        public void printInfo() {
            System.out.println("\n=== Service: " + name + " ===");
            System.out.println("Type: " + type);
            System.out.println("Cluster IP: " + clusterIP);
            System.out.println("Selector: " + selector);
            System.out.println("Ports:");
            ports.forEach(p -> System.out.println("  - " + p.getPort() + " -> " + p.getTargetPort()));
            System.out.println("Endpoints: " + endpoints.size());
        }
    }
    
    static class ServicePort {
        private final String name;
        private final int port;
        private final int targetPort;
        private final String protocol;
        
        public ServicePort(String name, int port, int targetPort) {
            this.name = name;
            this.port = port;
            this.targetPort = targetPort;
            this.protocol = "TCP";
        }
        
        public int getPort() {
            return port;
        }
        
        public int getTargetPort() {
            return targetPort;
        }
    }
    
    static class Endpoint {
        String podName;
        String ip;
        int port;
        
        public Endpoint(String podName, String ip, int port) {
            this.podName = podName;
            this.ip = ip;
            this.port = port;
        }
        
        @Override
        public String toString() {
            return podName + " (" + ip + ":" + port + ")";
        }
    }
    
    /**
     * PATTERN 4: CONFIGURATION MANAGEMENT
     * ====================================
     * 
     * ConfigMap - Store non-sensitive configuration
     * Secret - Store sensitive data (base64 encoded)
     * Environment Variables - Inject config into containers
     * Volume Mounts - Mount config as files
     */
    
    static class ConfigMap {
        private final String name;
        private final String namespace;
        private final Map<String, String> data;
        
        public ConfigMap(String name, String namespace) {
            this.name = name;
            this.namespace = namespace;
            this.data = new ConcurrentHashMap<>();
        }
        
        public void put(String key, String value) {
            data.put(key, value);
        }
        
        public String get(String key) {
            return data.get(key);
        }
        
        public Map<String, String> getData() {
            return Collections.unmodifiableMap(data);
        }
        
        public String getName() {
            return name;
        }
        
        // Inject as environment variables
        public Map<String, String> asEnvVars() {
            return new HashMap<>(data);
        }
        
        // Mount as volume
        public void mountAsVolume(String mountPath) {
            System.out.println("Mounted ConfigMap " + name + " at " + mountPath);
            data.forEach((key, value) -> 
                System.out.println("  " + mountPath + "/" + key + " -> " + value)
            );
        }
    }
    
    static class Secret {
        private final String name;
        private final String namespace;
        private final SecretType type;
        private final Map<String, byte[]> data;
        
        public enum SecretType {
            OPAQUE, TLS, DOCKER_CONFIG
        }
        
        public Secret(String name, String namespace, SecretType type) {
            this.name = name;
            this.namespace = namespace;
            this.type = type;
            this.data = new ConcurrentHashMap<>();
        }
        
        public void put(String key, String value) {
            // In production, this would be base64 encoded
            data.put(key, value.getBytes());
        }
        
        public String get(String key) {
            byte[] value = data.get(key);
            return value != null ? new String(value) : null;
        }
        
        public String getName() {
            return name;
        }
        
        // Inject as environment variables
        public Map<String, String> asEnvVars() {
            Map<String, String> env = new HashMap<>();
            data.forEach((key, value) -> env.put(key, new String(value)));
            return env;
        }
        
        // Mount as volume (files are created with restricted permissions)
        public void mountAsVolume(String mountPath) {
            System.out.println("Mounted Secret " + name + " at " + mountPath + " (mode 0400)");
            data.forEach((key, value) -> 
                System.out.println("  " + mountPath + "/" + key + " -> [REDACTED]")
            );
        }
    }
    
    /**
     * PATTERN 5: STATEFULSETS & PERSISTENT VOLUMES
     * =============================================
     * 
     * StatefulSet - For stateful applications (databases, etc.)
     * PersistentVolumeClaim - Request persistent storage
     * Headless Service - Stable network identity for StatefulSet pods
     */
    
    static class StatefulSet {
        private final String name;
        private final String namespace;
        private final int replicas;
        private final PodTemplate template;
        private final String serviceName;
        private final List<PersistentVolumeClaim> volumeClaimTemplates;
        private final List<Pod> pods;
        
        public StatefulSet(String name, String namespace, int replicas, 
                          String serviceName, PodTemplate template) {
            this.name = name;
            this.namespace = namespace;
            this.replicas = replicas;
            this.serviceName = serviceName;
            this.template = template;
            this.volumeClaimTemplates = new ArrayList<>();
            this.pods = new CopyOnWriteArrayList<>();
        }
        
        public void addVolumeClaimTemplate(PersistentVolumeClaim pvc) {
            volumeClaimTemplates.add(pvc);
        }
        
        // StatefulSets create pods with stable, unique identities
        public void deploy() {
            System.out.println("\n=== Deploying StatefulSet " + name + " ===");
            System.out.println("Replicas: " + replicas);
            System.out.println("Service: " + serviceName);
            
            // Create pods sequentially (ordered deployment)
            for (int i = 0; i < replicas; i++) {
                String podName = name + "-" + i; // Predictable name
                Pod pod = new Pod(podName, namespace);
                
                // Add stable network identity
                pod.addLabel("statefulset.kubernetes.io/pod-name", podName);
                pod.addLabel("app", name);
                
                // Copy containers from template
                template.containers.forEach(pod::addContainer);
                
                // Create PVC for this pod
                for (PersistentVolumeClaim pvcTemplate : volumeClaimTemplates) {
                    String pvcName = pvcTemplate.getName() + "-" + podName;
                    PersistentVolumeClaim pvc = new PersistentVolumeClaim(
                        pvcName, namespace, pvcTemplate.getStorageClass()
                    );
                    pvc.request(pvcTemplate.getRequestedStorage());
                    pvc.provision();
                    
                    // Mount to pod
                    Volume volume = new Volume(pvcName, Volume.VolumeType.PERSISTENT_VOLUME_CLAIM);
                    pod.addVolume(pvcName, volume);
                }
                
                pods.add(pod);
                pod.start();
                
                // Wait for pod to be ready before creating next one
                System.out.println("  Waiting for " + podName + " to be ready...");
                try {
                    Thread.sleep(50);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
            
            System.out.println("✓ StatefulSet deployed successfully");
        }
        
        // Scale StatefulSet (maintains order)
        public void scale(int newReplicas) {
            System.out.println("\n=== Scaling StatefulSet from " + replicas + " to " + newReplicas + " ===");
            
            if (newReplicas > replicas) {
                // Scale up (create new pods with incrementing index)
                for (int i = replicas; i < newReplicas; i++) {
                    String podName = name + "-" + i;
                    Pod pod = new Pod(podName, namespace);
                    template.containers.forEach(pod::addContainer);
                    pods.add(pod);
                    pod.start();
                    System.out.println("  ✓ Created pod " + podName);
                }
            } else if (newReplicas < replicas) {
                // Scale down (delete pods in reverse order)
                for (int i = replicas - 1; i >= newReplicas; i--) {
                    Pod pod = pods.remove(i);
                    pod.stop();
                    System.out.println("  ✓ Deleted pod " + pod.getName());
                }
            }
            
            System.out.println("✓ Scaled to " + newReplicas + " replicas");
        }
        
        public List<Pod> getPods() {
            return Collections.unmodifiableList(pods);
        }
    }
    
    static class PersistentVolumeClaim {
        private final String name;
        private final String namespace;
        private final String storageClass;
        private String requestedStorage;
        private PVCPhase phase;
        private String volumeName;
        
        public enum PVCPhase {
            PENDING, BOUND, LOST
        }
        
        public PersistentVolumeClaim(String name, String namespace, String storageClass) {
            this.name = name;
            this.namespace = namespace;
            this.storageClass = storageClass;
            this.phase = PVCPhase.PENDING;
        }
        
        public void request(String storage) {
            this.requestedStorage = storage;
        }
        
        // Provision persistent volume
        public void provision() {
            System.out.println("  Provisioning PVC " + name + " (" + requestedStorage + ")");
            
            // Simulate dynamic provisioning
            this.volumeName = "pv-" + UUID.randomUUID().toString().substring(0, 8);
            this.phase = PVCPhase.BOUND;
            
            System.out.println("    ✓ Bound to volume " + volumeName);
        }
        
        public String getName() {
            return name;
        }
        
        public String getStorageClass() {
            return storageClass;
        }
        
        public String getRequestedStorage() {
            return requestedStorage;
        }
    }
    
    /**
     * PATTERN 6: INGRESS FOR EXTERNAL ACCESS
     * =======================================
     */
    
    static class Ingress {
        private final String name;
        private final String namespace;
        private final List<IngressRule> rules;
        private final Map<String, String> annotations;
        
        public Ingress(String name, String namespace) {
            this.name = name;
            this.namespace = namespace;
            this.rules = new ArrayList<>();
            this.annotations = new HashMap<>();
        }
        
        public void addRule(IngressRule rule) {
            rules.add(rule);
        }
        
        public void addAnnotation(String key, String value) {
            annotations.put(key, value);
        }
        
        public String route(String host, String path) {
            for (IngressRule rule : rules) {
                if (rule.getHost().equals(host)) {
                    for (HttpPath httpPath : rule.getPaths()) {
                        if (path.startsWith(httpPath.getPath())) {
                            return httpPath.getServiceName() + ":" + httpPath.getServicePort();
                        }
                    }
                }
            }
            return null;
        }
        
        public void printRouting() {
            System.out.println("\n=== Ingress: " + name + " ===");
            rules.forEach(rule -> {
                System.out.println("Host: " + rule.getHost());
                rule.getPaths().forEach(path -> 
                    System.out.println("  " + path.getPath() + " -> " + 
                                     path.getServiceName() + ":" + path.getServicePort())
                );
            });
        }
    }
    
    static class IngressRule {
        private final String host;
        private final List<HttpPath> paths;
        
        public IngressRule(String host) {
            this.host = host;
            this.paths = new ArrayList<>();
        }
        
        public void addPath(HttpPath path) {
            paths.add(path);
        }
        
        public String getHost() {
            return host;
        }
        
        public List<HttpPath> getPaths() {
            return paths;
        }
    }
    
    static class HttpPath {
        private final String path;
        private final String serviceName;
        private final int servicePort;
        
        public HttpPath(String path, String serviceName, int servicePort) {
            this.path = path;
            this.serviceName = serviceName;
            this.servicePort = servicePort;
        }
        
        public String getPath() {
            return path;
        }
        
        public String getServiceName() {
            return serviceName;
        }
        
        public int getServicePort() {
            return servicePort;
        }
    }
    
    /**
     * DEMONSTRATION
     */
    public static void main(String[] args) throws Exception {
        System.out.println("=".repeat(70));
        System.out.println("DAY 33: KUBERNETES PATTERNS");
        System.out.println("=".repeat(70));
        
        // Demo 1: Pod Patterns
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 1: POD DESIGN PATTERNS");
        System.out.println("=".repeat(70));
        
        // Create pod with init container
        Pod webPod = new Pod("web-app", "default");
        
        // Init container: prepare data
        Container initContainer = new Container("init-db", "busybox");
        initContainer.setCommand("sh", "-c", "echo 'Initializing database schema...'");
        webPod.addInitContainer(initContainer);
        
        // Main container
        Container appContainer = new Container("app", "myapp:1.0");
        appContainer.addEnv("DATABASE_URL", "postgres://db:5432");
        webPod.addContainer(appContainer);
        
        // Sidecar container: log shipper
        Container sidecarContainer = new Container("log-shipper", "fluentd");
        webPod.addContainer(sidecarContainer);
        
        webPod.start();
        Thread.sleep(100);
        
        // Demo 2: Deployment Strategies
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 2: DEPLOYMENT STRATEGIES");
        System.out.println("=".repeat(70));
        
        // Create pod template
        PodTemplate template = new PodTemplate();
        template.addLabel("app", "nginx");
        template.addLabel("version", "v1");
        Container nginxContainer = new Container("nginx", "nginx:1.19");
        template.addContainer(nginxContainer);
        
        // Rolling Update Deployment
        DeploymentStrategy rollingStrategy = new RollingUpdateStrategy(1, 0);
        Deployment deployment = new Deployment("nginx-deployment", "default", 4, template, rollingStrategy);
        deployment.deploy();
        
        // Update to new version
        PodTemplate newTemplate = new PodTemplate();
        newTemplate.addLabel("app", "nginx");
        newTemplate.addLabel("version", "v2");
        Container nginxV2 = new Container("nginx", "nginx:1.20");
        newTemplate.addContainer(nginxV2);
        
        deployment.rollout(newTemplate);
        
        // Demo 3: Service Discovery
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 3: SERVICE PATTERNS");
        System.out.println("=".repeat(70));
        
        // Create service
        Service service = new Service("nginx-service", "default", Service.ServiceType.CLUSTER_IP);
        service.addSelector("app", "nginx");
        service.addPort(new ServicePort("http", 80, 80));
        
        // Discover endpoints from deployment
        service.discoverEndpoints(deployment.getPods());
        service.printInfo();
        
        // Load balance request
        System.out.println("\nRouting request to: " + service.getEndpoint());
        
        // Demo 4: ConfigMap and Secrets
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 4: CONFIGURATION MANAGEMENT");
        System.out.println("=".repeat(70));
        
        // Create ConfigMap
        ConfigMap appConfig = new ConfigMap("app-config", "default");
        appConfig.put("LOG_LEVEL", "INFO");
        appConfig.put("MAX_CONNECTIONS", "100");
        appConfig.put("CACHE_TTL", "300");
        
        System.out.println("ConfigMap created with " + appConfig.getData().size() + " keys");
        appConfig.mountAsVolume("/etc/config");
        
        // Create Secret
        Secret dbSecret = new Secret("db-credentials", "default", Secret.SecretType.OPAQUE);
        dbSecret.put("username", "admin");
        dbSecret.put("password", "secretpassword123");
        
        System.out.println("\nSecret created with " + 2 + " keys");
        dbSecret.mountAsVolume("/etc/secrets");
        
        // Demo 5: StatefulSet
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 5: STATEFULSETS");
        System.out.println("=".repeat(70));
        
        // Create StatefulSet for database
        PodTemplate dbTemplate = new PodTemplate();
        dbTemplate.addLabel("app", "mysql");
        Container mysqlContainer = new Container("mysql", "mysql:8.0");
        mysqlContainer.addEnv("MYSQL_ROOT_PASSWORD", "rootpass");
        dbTemplate.addContainer(mysqlContainer);
        
        StatefulSet statefulSet = new StatefulSet("mysql", "default", 3, "mysql-headless", dbTemplate);
        
        // Add PVC template
        PersistentVolumeClaim pvcTemplate = new PersistentVolumeClaim("data", "default", "fast-ssd");
        pvcTemplate.request("10Gi");
        statefulSet.addVolumeClaimTemplate(pvcTemplate);
        
        statefulSet.deploy();
        
        // Scale StatefulSet
        statefulSet.scale(5);
        
        // Demo 6: Ingress
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 6: INGRESS");
        System.out.println("=".repeat(70));
        
        Ingress ingress = new Ingress("app-ingress", "default");
        ingress.addAnnotation("kubernetes.io/ingress.class", "nginx");
        ingress.addAnnotation("cert-manager.io/cluster-issuer", "letsencrypt-prod");
        
        IngressRule rule = new IngressRule("example.com");
        rule.addPath(new HttpPath("/api", "api-service", 8080));
        rule.addPath(new HttpPath("/web", "web-service", 3000));
        ingress.addRule(rule);
        
        ingress.printRouting();
        
        // Test routing
        System.out.println("\nRouting tests:");
        System.out.println("example.com/api/users -> " + ingress.route("example.com", "/api/users"));
        System.out.println("example.com/web/home -> " + ingress.route("example.com", "/web/home"));
        
        System.out.println("\n" + "=".repeat(70));
        System.out.println("ALL DEMONSTRATIONS COMPLETED SUCCESSFULLY!");
        System.out.println("=".repeat(70));
    }
}
