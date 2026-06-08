/**
 * DAY 27: KUBERNETES & CONTAINER ORCHESTRATION PATTERNS
 * 
 * Topics Covered:
 * 1. Pod Design Patterns (Sidecar, Ambassador, Adapter)
 * 2. Service Discovery & Load Balancing
 * 3. Configuration Management (ConfigMaps, Secrets)
 * 4. Storage Patterns (Persistent Volumes)
 * 5. Scaling Patterns (HPA, VPA, Cluster Autoscaler)
 * 6. Health Checks & Self-Healing
 * 7. Resource Management & Quotas
 * 8. Rolling Updates & Rollbacks
 * 
 * All patterns with production-ready implementations
 */

import java.util.*;
import java.util.concurrent.*;
import java.time.*;
import java.util.stream.*;

public class KubernetesPatterns {

    // ==================== 1. POD DESIGN PATTERNS ====================
    
    /**
     * Sidecar Pattern
     * Helper container alongside main application
     * 
     * Use cases: Logging, Monitoring, Proxy, Service Mesh
     * Time Complexity: O(1) for container communication
     */
    static class SidecarPattern {
        static class Pod {
            String name;
            List<Container> containers;
            Map<String, Volume> volumes;
            PodStatus status;
            
            enum PodStatus { PENDING, RUNNING, SUCCEEDED, FAILED, UNKNOWN }
            
            Pod(String name) {
                this.name = name;
                this.containers = new ArrayList<>();
                this.volumes = new HashMap<>();
                this.status = PodStatus.PENDING;
            }
            
            void addContainer(Container container) {
                containers.add(container);
            }
            
            void addVolume(String name, Volume volume) {
                volumes.put(name, volume);
            }
            
            void start() {
                status = PodStatus.RUNNING;
                containers.forEach(Container::start);
            }
            
            void stop() {
                containers.forEach(Container::stop);
                status = PodStatus.SUCCEEDED;
            }
            
            @Override
            public String toString() {
                return String.format("Pod[%s] Status: %s, Containers: %d",
                    name, status, containers.size());
            }
        }
        
        static class Container {
            String name;
            String image;
            List<String> command;
            Map<String, String> env;
            List<VolumeMount> volumeMounts;
            ResourceRequirements resources;
            boolean running;
            
            Container(String name, String image) {
                this.name = name;
                this.image = image;
                this.command = new ArrayList<>();
                this.env = new HashMap<>();
                this.volumeMounts = new ArrayList<>();
                this.resources = new ResourceRequirements();
                this.running = false;
            }
            
            void addEnv(String key, String value) {
                env.put(key, value);
            }
            
            void addVolumeMount(VolumeMount mount) {
                volumeMounts.add(mount);
            }
            
            void start() {
                running = true;
                System.out.printf("Starting container: %s (image: %s)%n", name, image);
            }
            
            void stop() {
                running = false;
                System.out.printf("Stopping container: %s%n", name);
            }
            
            @Override
            public String toString() {
                return String.format("Container[%s] Image: %s, Running: %s",
                    name, image, running);
            }
        }
        
        static class VolumeMount {
            String name;
            String mountPath;
            boolean readOnly;
            
            VolumeMount(String name, String mountPath, boolean readOnly) {
                this.name = name;
                this.mountPath = mountPath;
                this.readOnly = readOnly;
            }
        }
        
        static class Volume {
            String name;
            String type; // emptyDir, hostPath, configMap, secret, persistentVolumeClaim
            Map<String, Object> spec;
            
            Volume(String name, String type) {
                this.name = name;
                this.type = type;
                this.spec = new HashMap<>();
            }
        }
        
        static class ResourceRequirements {
            Map<String, String> requests;
            Map<String, String> limits;
            
            ResourceRequirements() {
                this.requests = new HashMap<>();
                this.limits = new HashMap<>();
            }
            
            void setRequest(String resource, String value) {
                requests.put(resource, value);
            }
            
            void setLimit(String resource, String value) {
                limits.put(resource, value);
            }
        }
        
        // Example: Application with logging sidecar
        static Pod createWebAppWithLoggingSidecar() {
            Pod pod = new Pod("webapp-with-logging");
            
            // Main application container
            Container app = new Container("webapp", "nginx:1.21");
            app.addEnv("APP_ENV", "production");
            app.resources.setRequest("cpu", "100m");
            app.resources.setRequest("memory", "128Mi");
            app.resources.setLimit("cpu", "200m");
            app.resources.setLimit("memory", "256Mi");
            
            // Logging sidecar container
            Container logCollector = new Container("log-collector", "fluent/fluentd:v1.14");
            logCollector.addEnv("FLUENT_ELASTICSEARCH_HOST", "elasticsearch.logging.svc.cluster.local");
            logCollector.resources.setRequest("cpu", "50m");
            logCollector.resources.setRequest("memory", "64Mi");
            
            // Shared volume for logs
            Volume logVolume = new Volume("log-volume", "emptyDir");
            pod.addVolume("log-volume", logVolume);
            
            // Mount log volume in both containers
            app.addVolumeMount(new VolumeMount("log-volume", "/var/log/nginx", false));
            logCollector.addVolumeMount(new VolumeMount("log-volume", "/var/log/nginx", true));
            
            pod.addContainer(app);
            pod.addContainer(logCollector);
            
            return pod;
        }
    }

    // ==================== 2. SERVICE DISCOVERY ====================
    
    /**
     * Kubernetes Service Discovery
     * DNS-based service discovery within cluster
     * 
     * Time Complexity: O(1) for DNS lookup
     * Space Complexity: O(s) where s = number of services
     */
    static class ServiceDiscovery {
        static class Service {
            String name;
            String namespace;
            ServiceType type;
            Map<String, String> selector;
            List<ServicePort> ports;
            String clusterIP;
            List<Endpoint> endpoints;
            
            enum ServiceType { CLUSTER_IP, NODE_PORT, LOAD_BALANCER, EXTERNAL_NAME }
            
            Service(String name, String namespace, ServiceType type) {
                this.name = name;
                this.namespace = namespace;
                this.type = type;
                this.selector = new HashMap<>();
                this.ports = new ArrayList<>();
                this.endpoints = new ArrayList<>();
                this.clusterIP = generateClusterIP();
            }
            
            void addSelector(String key, String value) {
                selector.put(key, value);
            }
            
            void addPort(ServicePort port) {
                ports.add(port);
            }
            
            void addEndpoint(Endpoint endpoint) {
                endpoints.add(endpoint);
            }
            
            String getDNSName() {
                return String.format("%s.%s.svc.cluster.local", name, namespace);
            }
            
            private String generateClusterIP() {
                return String.format("10.%d.%d.%d",
                    ThreadLocalRandom.current().nextInt(256),
                    ThreadLocalRandom.current().nextInt(256),
                    ThreadLocalRandom.current().nextInt(256));
            }
            
            Endpoint selectEndpoint() {
                if (endpoints.isEmpty()) return null;
                // Simple round-robin
                return endpoints.get(ThreadLocalRandom.current().nextInt(endpoints.size()));
            }
            
            @Override
            public String toString() {
                return String.format("Service[%s.%s] Type: %s, ClusterIP: %s, Endpoints: %d",
                    name, namespace, type, clusterIP, endpoints.size());
            }
        }
        
        static class ServicePort {
            String name;
            int port;
            int targetPort;
            String protocol;
            
            ServicePort(String name, int port, int targetPort, String protocol) {
                this.name = name;
                this.port = port;
                this.targetPort = targetPort;
                this.protocol = protocol;
            }
        }
        
        static class Endpoint {
            String ip;
            int port;
            boolean ready;
            
            Endpoint(String ip, int port, boolean ready) {
                this.ip = ip;
                this.port = port;
                this.ready = ready;
            }
            
            @Override
            public String toString() {
                return String.format("%s:%d (ready: %s)", ip, port, ready);
            }
        }
        
        private final Map<String, Map<String, Service>> services; // namespace -> name -> service
        
        ServiceDiscovery() {
            this.services = new ConcurrentHashMap<>();
        }
        
        void registerService(Service service) {
            services.computeIfAbsent(service.namespace, k -> new ConcurrentHashMap<>())
                   .put(service.name, service);
        }
        
        Service lookupService(String name, String namespace) {
            return services.getOrDefault(namespace, Collections.emptyMap()).get(name);
        }
        
        Service lookupByDNS(String dnsName) {
            // Parse DNS name: service.namespace.svc.cluster.local
            String[] parts = dnsName.split("\\.");
            if (parts.length < 2) return null;
            
            return lookupService(parts[0], parts[1]);
        }
        
        List<Service> listServices(String namespace) {
            return new ArrayList<>(services.getOrDefault(namespace, Collections.emptyMap()).values());
        }
    }

    // ==================== 3. CONFIG MANAGEMENT ====================
    
    /**
     * ConfigMap and Secrets Management
     * Externalized configuration for applications
     * 
     * Time Complexity: O(1) for get/set
     * Space Complexity: O(n) where n = config entries
     */
    static class ConfigManagement {
        static class ConfigMap {
            String name;
            String namespace;
            Map<String, String> data;
            Map<String, String> binaryData;
            Instant creationTimestamp;
            
            ConfigMap(String name, String namespace) {
                this.name = name;
                this.namespace = namespace;
                this.data = new HashMap<>();
                this.binaryData = new HashMap<>();
                this.creationTimestamp = Instant.now();
            }
            
            void setData(String key, String value) {
                data.put(key, value);
            }
            
            String getData(String key) {
                return data.get(key);
            }
            
            void setBinaryData(String key, String base64Value) {
                binaryData.put(key, base64Value);
            }
            
            @Override
            public String toString() {
                return String.format("ConfigMap[%s.%s] Data keys: %d, Binary keys: %d",
                    name, namespace, data.size(), binaryData.size());
            }
        }
        
        static class Secret {
            String name;
            String namespace;
            SecretType type;
            Map<String, String> data; // Base64 encoded
            Instant creationTimestamp;
            
            enum SecretType { 
                OPAQUE, 
                SERVICE_ACCOUNT_TOKEN, 
                DOCKER_CONFIG_JSON,
                BASIC_AUTH,
                SSH_AUTH,
                TLS
            }
            
            Secret(String name, String namespace, SecretType type) {
                this.name = name;
                this.namespace = namespace;
                this.type = type;
                this.data = new HashMap<>();
                this.creationTimestamp = Instant.now();
            }
            
            void setData(String key, String base64Value) {
                data.put(key, base64Value);
            }
            
            String getData(String key) {
                return data.get(key);
            }
            
            String getDecodedData(String key) {
                String base64 = data.get(key);
                if (base64 == null) return null;
                return new String(Base64.getDecoder().decode(base64));
            }
            
            @Override
            public String toString() {
                return String.format("Secret[%s.%s] Type: %s, Keys: %d",
                    name, namespace, type, data.size());
            }
        }
        
        private final Map<String, Map<String, ConfigMap>> configMaps;
        private final Map<String, Map<String, Secret>> secrets;
        
        ConfigManagement() {
            this.configMaps = new ConcurrentHashMap<>();
            this.secrets = new ConcurrentHashMap<>();
        }
        
        void createConfigMap(ConfigMap configMap) {
            configMaps.computeIfAbsent(configMap.namespace, k -> new ConcurrentHashMap<>())
                     .put(configMap.name, configMap);
        }
        
        ConfigMap getConfigMap(String name, String namespace) {
            return configMaps.getOrDefault(namespace, Collections.emptyMap()).get(name);
        }
        
        void createSecret(Secret secret) {
            secrets.computeIfAbsent(secret.namespace, k -> new ConcurrentHashMap<>())
                  .put(secret.name, secret);
        }
        
        Secret getSecret(String name, String namespace) {
            return secrets.getOrDefault(namespace, Collections.emptyMap()).get(name);
        }
        
        void deleteConfigMap(String name, String namespace) {
            Map<String, ConfigMap> nsConfigMaps = configMaps.get(namespace);
            if (nsConfigMaps != null) {
                nsConfigMaps.remove(name);
            }
        }
        
        void deleteSecret(String name, String namespace) {
            Map<String, Secret> nsSecrets = secrets.get(namespace);
            if (nsSecrets != null) {
                nsSecrets.remove(name);
            }
        }
    }

    // ==================== 4. HORIZONTAL POD AUTOSCALER ====================
    
    /**
     * Horizontal Pod Autoscaler (HPA)
     * Automatically scales pods based on metrics
     * 
     * Time Complexity: O(1) for scaling calculation
     * Space Complexity: O(m) where m = metrics history
     */
    static class HorizontalPodAutoscaler {
        static class HPASpec {
            String targetDeployment;
            int minReplicas;
            int maxReplicas;
            List<MetricSpec> metrics;
            int scaleDownStabilizationWindowSeconds;
            
            HPASpec(String targetDeployment, int minReplicas, int maxReplicas) {
                this.targetDeployment = targetDeployment;
                this.minReplicas = minReplicas;
                this.maxReplicas = maxReplicas;
                this.metrics = new ArrayList<>();
                this.scaleDownStabilizationWindowSeconds = 300; // 5 minutes default
            }
            
            void addMetric(MetricSpec metric) {
                metrics.add(metric);
            }
        }
        
        static class MetricSpec {
            String type; // Resource, Pods, Object, External
            String name;
            double targetValue;
            String targetType; // Utilization, Value, AverageValue
            
            MetricSpec(String type, String name, double targetValue, String targetType) {
                this.type = type;
                this.name = name;
                this.targetValue = targetValue;
                this.targetType = targetType;
            }
        }
        
        static class HPAStatus {
            int currentReplicas;
            int desiredReplicas;
            Map<String, Double> currentMetrics;
            Instant lastScaleTime;
            
            HPAStatus() {
                this.currentMetrics = new HashMap<>();
            }
            
            @Override
            public String toString() {
                return String.format("Current: %d, Desired: %d, Last Scale: %s",
                    currentReplicas, desiredReplicas, lastScaleTime);
            }
        }
        
        private final HPASpec spec;
        private final HPAStatus status;
        private final Queue<ScalingDecision> scaleDownHistory;
        
        static class ScalingDecision {
            Instant timestamp;
            int recommendedReplicas;
            String reason;
            
            ScalingDecision(int recommendedReplicas, String reason) {
                this.timestamp = Instant.now();
                this.recommendedReplicas = recommendedReplicas;
                this.reason = reason;
            }
        }
        
        HorizontalPodAutoscaler(HPASpec spec, int currentReplicas) {
            this.spec = spec;
            this.status = new HPAStatus();
            this.status.currentReplicas = currentReplicas;
            this.status.desiredReplicas = currentReplicas;
            this.scaleDownHistory = new LinkedList<>();
        }
        
        void updateMetrics(Map<String, Double> currentMetrics) {
            status.currentMetrics.putAll(currentMetrics);
            calculateDesiredReplicas();
        }
        
        private void calculateDesiredReplicas() {
            int maxDesired = spec.minReplicas;
            
            for (MetricSpec metric : spec.metrics) {
                Double currentValue = status.currentMetrics.get(metric.name);
                if (currentValue == null) continue;
                
                int desiredForMetric = calculateReplicasForMetric(metric, currentValue);
                maxDesired = Math.max(maxDesired, desiredForMetric);
            }
            
            // Apply min/max constraints
            int desired = Math.max(spec.minReplicas, Math.min(spec.maxReplicas, maxDesired));
            
            // Check scale down stabilization
            if (desired < status.currentReplicas) {
                scaleDownHistory.offer(new ScalingDecision(desired, "Scale down candidate"));
                if (scaleDownHistory.size() > 10) {
                    scaleDownHistory.poll();
                }
                
                // Only scale down if consistent for stabilization window
                if (isScaleDownStable(desired)) {
                    status.desiredReplicas = desired;
                    status.lastScaleTime = Instant.now();
                }
            } else if (desired > status.currentReplicas) {
                // Scale up immediately
                status.desiredReplicas = desired;
                status.lastScaleTime = Instant.now();
                scaleDownHistory.clear();
            }
        }
        
        private int calculateReplicasForMetric(MetricSpec metric, double currentValue) {
            if (metric.targetType.equals("Utilization")) {
                // For CPU/Memory utilization
                double utilizationRatio = currentValue / metric.targetValue;
                return (int) Math.ceil(status.currentReplicas * utilizationRatio);
            } else {
                // For absolute values
                double ratio = currentValue / metric.targetValue;
                return (int) Math.ceil(status.currentReplicas * ratio);
            }
        }
        
        private boolean isScaleDownStable(int desiredReplicas) {
            if (scaleDownHistory.size() < 3) return false;
            
            return scaleDownHistory.stream()
                                  .allMatch(d -> d.recommendedReplicas == desiredReplicas);
        }
        
        boolean shouldScale() {
            return status.desiredReplicas != status.currentReplicas;
        }
        
        void applyScaling() {
            status.currentReplicas = status.desiredReplicas;
        }
        
        HPAStatus getStatus() {
            return status;
        }
    }

    // ==================== 5. ROLLING UPDATE ====================
    
    /**
     * Rolling Update Strategy
     * Zero-downtime deployments with gradual rollout
     * 
     * Time Complexity: O(n) where n = number of pods
     * Space Complexity: O(n)
     */
    static class RollingUpdate {
        static class Deployment {
            String name;
            String namespace;
            int replicas;
            Map<String, String> selector;
            PodTemplate template;
            RollingUpdateStrategy strategy;
            List<ReplicaSet> replicaSets;
            
            Deployment(String name, String namespace, int replicas) {
                this.name = name;
                this.namespace = namespace;
                this.replicas = replicas;
                this.selector = new HashMap<>();
                this.strategy = new RollingUpdateStrategy();
                this.replicaSets = new ArrayList<>();
            }
            
            @Override
            public String toString() {
                return String.format("Deployment[%s.%s] Replicas: %d, ReplicaSets: %d",
                    name, namespace, replicas, replicaSets.size());
            }
        }
        
        static class PodTemplate {
            Map<String, String> labels;
            String containerImage;
            String containerVersion;
            
            PodTemplate(String containerImage, String version) {
                this.labels = new HashMap<>();
                this.containerImage = containerImage;
                this.containerVersion = version;
            }
        }
        
        static class RollingUpdateStrategy {
            int maxSurge; // Max pods above desired count
            int maxUnavailable; // Max pods below desired count
            
            RollingUpdateStrategy() {
                this.maxSurge = 1;
                this.maxUnavailable = 0;
            }
            
            RollingUpdateStrategy(int maxSurge, int maxUnavailable) {
                this.maxSurge = maxSurge;
                this.maxUnavailable = maxUnavailable;
            }
        }
        
        static class ReplicaSet {
            String name;
            int replicas;
            int readyReplicas;
            String podTemplateHash;
            Instant creationTimestamp;
            
            ReplicaSet(String name, int replicas, String podTemplateHash) {
                this.name = name;
                this.replicas = replicas;
                this.readyReplicas = 0;
                this.podTemplateHash = podTemplateHash;
                this.creationTimestamp = Instant.now();
            }
            
            void updateReadyReplicas(int ready) {
                this.readyReplicas = Math.min(ready, replicas);
            }
            
            boolean isFullyReady() {
                return readyReplicas == replicas;
            }
            
            @Override
            public String toString() {
                return String.format("ReplicaSet[%s] Replicas: %d/%d ready",
                    name, readyReplicas, replicas);
            }
        }
        
        private Deployment deployment;
        private final List<UpdateEvent> updateHistory;
        
        static class UpdateEvent {
            Instant timestamp;
            String event;
            String oldVersion;
            String newVersion;
            
            UpdateEvent(String event, String oldVersion, String newVersion) {
                this.timestamp = Instant.now();
                this.event = event;
                this.oldVersion = oldVersion;
                this.newVersion = newVersion;
            }
            
            @Override
            public String toString() {
                return String.format("[%s] %s: %s -> %s",
                    timestamp, event, oldVersion, newVersion);
            }
        }
        
        RollingUpdate(Deployment deployment) {
            this.deployment = deployment;
            this.updateHistory = new ArrayList<>();
        }
        
        void performRollingUpdate(String newVersion) {
            String oldVersion = deployment.template.containerVersion;
            updateHistory.add(new UpdateEvent("UPDATE_STARTED", oldVersion, newVersion));
            
            // Create new ReplicaSet for new version
            String newHash = generateHash(newVersion);
            ReplicaSet newRS = new ReplicaSet(
                deployment.name + "-" + newHash,
                0,
                newHash
            );
            deployment.replicaSets.add(newRS);
            
            // Get old ReplicaSet
            ReplicaSet oldRS = deployment.replicaSets.stream()
                .filter(rs -> !rs.podTemplateHash.equals(newHash))
                .findFirst()
                .orElse(null);
            
            if (oldRS == null) {
                oldRS = new ReplicaSet(deployment.name + "-old", deployment.replicas, "old");
                oldRS.updateReadyReplicas(deployment.replicas);
            }
            
            // Perform rolling update
            int maxSurge = deployment.strategy.maxSurge;
            int maxUnavailable = deployment.strategy.maxUnavailable;
            int targetReplicas = deployment.replicas;
            
            while (newRS.readyReplicas < targetReplicas || oldRS.replicas > 0) {
                // Calculate how many pods we can create/destroy
                int totalRunning = newRS.replicas + oldRS.replicas;
                int totalReady = newRS.readyReplicas + oldRS.readyReplicas;
                
                // Scale up new ReplicaSet
                if (newRS.replicas < targetReplicas && 
                    totalRunning < targetReplicas + maxSurge) {
                    newRS.replicas++;
                    newRS.updateReadyReplicas(newRS.replicas); // Simulate readiness
                    updateHistory.add(new UpdateEvent("POD_CREATED", oldVersion, newVersion));
                }
                
                // Scale down old ReplicaSet
                if (oldRS.replicas > 0 && 
                    totalReady - 1 >= targetReplicas - maxUnavailable &&
                    newRS.readyReplicas > 0) {
                    oldRS.replicas--;
                    oldRS.updateReadyReplicas(oldRS.replicas);
                    updateHistory.add(new UpdateEvent("POD_TERMINATED", oldVersion, newVersion));
                }
                
                try { Thread.sleep(100); } catch (InterruptedException e) {}
            }
            
            // Update deployment template
            deployment.template.containerVersion = newVersion;
            updateHistory.add(new UpdateEvent("UPDATE_COMPLETED", oldVersion, newVersion));
        }
        
        void rollback() {
            if (deployment.replicaSets.size() < 2) return;
            
            // Find previous ReplicaSet
            ReplicaSet current = deployment.replicaSets.get(deployment.replicaSets.size() - 1);
            ReplicaSet previous = deployment.replicaSets.get(deployment.replicaSets.size() - 2);
            
            updateHistory.add(new UpdateEvent("ROLLBACK_STARTED",
                deployment.template.containerVersion, previous.podTemplateHash));
            
            // Swap replicas
            int temp = current.replicas;
            current.replicas = 0;
            current.readyReplicas = 0;
            previous.replicas = deployment.replicas;
            previous.updateReadyReplicas(deployment.replicas);
            
            updateHistory.add(new UpdateEvent("ROLLBACK_COMPLETED",
                deployment.template.containerVersion, previous.podTemplateHash));
        }
        
        private String generateHash(String version) {
            return Integer.toHexString(version.hashCode()).substring(0, 8);
        }
        
        List<UpdateEvent> getUpdateHistory() {
            return new ArrayList<>(updateHistory);
        }
        
        Deployment getDeployment() {
            return deployment;
        }
    }

    // ==================== 6. HEALTH CHECKS ====================
    
    /**
     * Health Check Patterns
     * Liveness, Readiness, and Startup Probes
     * 
     * Time Complexity: O(1) for probe execution
     */
    static class HealthChecks {
        interface Probe {
            ProbeResult execute();
        }
        
        static class ProbeResult {
            boolean success;
            String message;
            long responseTime;
            
            ProbeResult(boolean success, String message, long responseTime) {
                this.success = success;
                this.message = message;
                this.responseTime = responseTime;
            }
            
            @Override
            public String toString() {
                return String.format("%s: %s (%.0fms)",
                    success ? "SUCCESS" : "FAILURE", message, (double)responseTime);
            }
        }
        
        static class HTTPProbe implements Probe {
            String path;
            int port;
            Map<String, String> headers;
            
            HTTPProbe(String path, int port) {
                this.path = path;
                this.port = port;
                this.headers = new HashMap<>();
            }
            
            @Override
            public ProbeResult execute() {
                long start = System.currentTimeMillis();
                // Simulate HTTP GET request
                boolean success = ThreadLocalRandom.current().nextDouble() > 0.1; // 90% success
                long responseTime = System.currentTimeMillis() - start;
                
                return new ProbeResult(success,
                    success ? "HTTP 200 OK" : "HTTP 503 Service Unavailable",
                    responseTime);
            }
        }
        
        static class TCPProbe implements Probe {
            String host;
            int port;
            
            TCPProbe(String host, int port) {
                this.host = host;
                this.port = port;
            }
            
            @Override
            public ProbeResult execute() {
                long start = System.currentTimeMillis();
                // Simulate TCP connection
                boolean success = ThreadLocalRandom.current().nextDouble() > 0.05; // 95% success
                long responseTime = System.currentTimeMillis() - start;
                
                return new ProbeResult(success,
                    success ? "TCP connection successful" : "Connection refused",
                    responseTime);
            }
        }
        
        static class ExecProbe implements Probe {
            List<String> command;
            
            ExecProbe(String... command) {
                this.command = Arrays.asList(command);
            }
            
            @Override
            public ProbeResult execute() {
                long start = System.currentTimeMillis();
                // Simulate command execution
                boolean success = ThreadLocalRandom.current().nextDouble() > 0.02; // 98% success
                long responseTime = System.currentTimeMillis() - start;
                
                return new ProbeResult(success,
                    success ? "Exit code 0" : "Exit code 1",
                    responseTime);
            }
        }
        
        static class ProbeConfig {
            int initialDelaySeconds;
            int periodSeconds;
            int timeoutSeconds;
            int successThreshold;
            int failureThreshold;
            
            ProbeConfig() {
                this.initialDelaySeconds = 0;
                this.periodSeconds = 10;
                this.timeoutSeconds = 1;
                this.successThreshold = 1;
                this.failureThreshold = 3;
            }
        }
        
        static class PodHealthManager {
            Probe livenessProbe;
            Probe readinessProbe;
            Probe startupProbe;
            ProbeConfig livenessConfig;
            ProbeConfig readinessConfig;
            ProbeConfig startupConfig;
            
            int livenessFailures;
            int readinessFailures;
            int startupFailures;
            boolean ready;
            boolean started;
            
            PodHealthManager() {
                this.livenessConfig = new ProbeConfig();
                this.readinessConfig = new ProbeConfig();
                this.startupConfig = new ProbeConfig();
                this.ready = false;
                this.started = false;
            }
            
            void setLivenessProbe(Probe probe, ProbeConfig config) {
                this.livenessProbe = probe;
                this.livenessConfig = config;
            }
            
            void setReadinessProbe(Probe probe, ProbeConfig config) {
                this.readinessProbe = probe;
                this.readinessConfig = config;
            }
            
            void setStartupProbe(Probe probe, ProbeConfig config) {
                this.startupProbe = probe;
                this.startupConfig = config;
            }
            
            boolean checkStartup() {
                if (started || startupProbe == null) {
                    started = true;
                    return true;
                }
                
                ProbeResult result = startupProbe.execute();
                if (result.success) {
                    started = true;
                    startupFailures = 0;
                } else {
                    startupFailures++;
                    if (startupFailures >= startupConfig.failureThreshold) {
                        // Container should be restarted
                        return false;
                    }
                }
                
                return started;
            }
            
            boolean checkLiveness() {
                if (!started || livenessProbe == null) return true;
                
                ProbeResult result = livenessProbe.execute();
                if (result.success) {
                    livenessFailures = 0;
                    return true;
                } else {
                    livenessFailures++;
                    return livenessFailures < livenessConfig.failureThreshold;
                }
            }
            
            boolean checkReadiness() {
                if (!started || readinessProbe == null) return false;
                
                ProbeResult result = readinessProbe.execute();
                if (result.success) {
                    readinessFailures = 0;
                    ready = true;
                } else {
                    readinessFailures++;
                    if (readinessFailures >= readinessConfig.failureThreshold) {
                        ready = false;
                    }
                }
                
                return ready;
            }
            
            boolean isReady() {
                return ready;
            }
            
            boolean isStarted() {
                return started;
            }
        }
    }

    // ==================== DEMONSTRATIONS ====================
    
    public static void main(String[] args) {
        demonstrateSidecarPattern();
        demonstrateServiceDiscovery();
        demonstrateConfigManagement();
        demonstrateHPA();
        demonstrateRollingUpdate();
        demonstrateHealthChecks();
    }
    
    private static void demonstrateSidecarPattern() {
        System.out.println("=== SIDECAR PATTERN DEMONSTRATION ===\n");
        
        SidecarPattern.Pod pod = SidecarPattern.createWebAppWithLoggingSidecar();
        
        System.out.println("Created pod with sidecar pattern:");
        System.out.println(pod);
        
        System.out.println("\nContainers:");
        pod.containers.forEach(System.out::println);
        
        System.out.println("\nStarting pod...");
        pod.start();
        
        System.out.println("\nStopping pod...");
        pod.stop();
        System.out.println();
    }
    
    private static void demonstrateServiceDiscovery() {
        System.out.println("=== SERVICE DISCOVERY DEMONSTRATION ===\n");
        
        ServiceDiscovery sd = new ServiceDiscovery();
        
        // Create service
        ServiceDiscovery.Service webService = new ServiceDiscovery.Service(
            "web-app", "production", ServiceDiscovery.Service.ServiceType.CLUSTER_IP
        );
        webService.addSelector("app", "web");
        webService.addPort(new ServiceDiscovery.ServicePort("http", 80, 8080, "TCP"));
        
        // Add endpoints
        webService.addEndpoint(new ServiceDiscovery.Endpoint("10.1.1.1", 8080, true));
        webService.addEndpoint(new ServiceDiscovery.Endpoint("10.1.1.2", 8080, true));
        webService.addEndpoint(new ServiceDiscovery.Endpoint("10.1.1.3", 8080, true));
        
        sd.registerService(webService);
        
        System.out.println("Registered service:");
        System.out.println(webService);
        System.out.println("DNS Name: " + webService.getDNSName());
        
        System.out.println("\nService endpoints:");
        webService.endpoints.forEach(System.out::println);
        
        System.out.println("\nLoad balancing requests:");
        for (int i = 0; i < 5; i++) {
            ServiceDiscovery.Endpoint endpoint = webService.selectEndpoint();
            System.out.printf("Request %d -> %s%n", i + 1, endpoint);
        }
        System.out.println();
    }
    
    private static void demonstrateConfigManagement() {
        System.out.println("=== CONFIG MANAGEMENT DEMONSTRATION ===\n");
        
        ConfigManagement cm = new ConfigManagement();
        
        // Create ConfigMap
        ConfigManagement.ConfigMap appConfig = new ConfigManagement.ConfigMap(
            "app-config", "production"
        );
        appConfig.setData("database.host", "postgres.production.svc.cluster.local");
        appConfig.setData("database.port", "5432");
        appConfig.setData("log.level", "INFO");
        
        cm.createConfigMap(appConfig);
        
        System.out.println("Created ConfigMap:");
        System.out.println(appConfig);
        System.out.println("\nConfiguration data:");
        appConfig.data.forEach((k, v) -> System.out.printf("%s: %s%n", k, v));
        
        // Create Secret
        ConfigManagement.Secret dbSecret = new ConfigManagement.Secret(
            "db-credentials", "production", ConfigManagement.Secret.SecretType.OPAQUE
        );
        dbSecret.setData("username", Base64.getEncoder().encodeToString("admin".getBytes()));
        dbSecret.setData("password", Base64.getEncoder().encodeToString("secret123".getBytes()));
        
        cm.createSecret(dbSecret);
        
        System.out.println("\nCreated Secret:");
        System.out.println(dbSecret);
        System.out.println("\nSecret data (decoded):");
        dbSecret.data.keySet().forEach(key ->
            System.out.printf("%s: %s%n", key, dbSecret.getDecodedData(key)));
        System.out.println();
    }
    
    private static void demonstrateHPA() {
        System.out.println("=== HORIZONTAL POD AUTOSCALER DEMONSTRATION ===\n");
        
        HorizontalPodAutoscaler.HPASpec spec = new HorizontalPodAutoscaler.HPASpec(
            "web-app", 2, 10
        );
        spec.addMetric(new HorizontalPodAutoscaler.MetricSpec(
            "Resource", "cpu", 70.0, "Utilization"
        ));
        
        HorizontalPodAutoscaler hpa = new HorizontalPodAutoscaler(spec, 2);
        
        System.out.println("Initial state:");
        System.out.println(hpa.getStatus());
        
        // Simulate varying load
        double[] cpuUtilizations = {50.0, 60.0, 75.0, 85.0, 90.0, 80.0, 60.0, 40.0, 30.0};
        
        for (double cpu : cpuUtilizations) {
            Map<String, Double> metrics = Map.of("cpu", cpu);
            hpa.updateMetrics(metrics);
            
            System.out.printf("\nCPU: %.1f%% -> %s%n", cpu, hpa.getStatus());
            
            if (hpa.shouldScale()) {
                System.out.println("Scaling triggered!");
                hpa.applyScaling();
            }
            
            try { Thread.sleep(100); } catch (InterruptedException e) {}
        }
        System.out.println();
    }
    
    private static void demonstrateRollingUpdate() {
        System.out.println("=== ROLLING UPDATE DEMONSTRATION ===\n");
        
        RollingUpdate.Deployment deployment = new RollingUpdate.Deployment(
            "web-app", "production", 5
        );
        deployment.template = new RollingUpdate.PodTemplate("nginx", "1.20");
        deployment.strategy = new RollingUpdate.RollingUpdateStrategy(1, 0);
        
        RollingUpdate ru = new RollingUpdate(deployment);
        
        System.out.println("Initial deployment:");
        System.out.println(deployment);
        System.out.println("Version: " + deployment.template.containerVersion);
        
        System.out.println("\nPerforming rolling update to v1.21...");
        ru.performRollingUpdate("1.21");
        
        System.out.println("\nUpdate completed:");
        System.out.println(deployment);
        System.out.println("Version: " + deployment.template.containerVersion);
        
        System.out.println("\nUpdate history:");
        ru.getUpdateHistory().forEach(System.out::println);
        System.out.println();
    }
    
    private static void demonstrateHealthChecks() {
        System.out.println("=== HEALTH CHECKS DEMONSTRATION ===\n");
        
        HealthChecks.PodHealthManager health = new HealthChecks.PodHealthManager();
        
        // Configure probes
        health.setStartupProbe(new HealthChecks.HTTPProbe("/startup", 8080), 
            new HealthChecks.ProbeConfig());
        health.setLivenessProbe(new HealthChecks.HTTPProbe("/healthz", 8080),
            new HealthChecks.ProbeConfig());
        health.setReadinessProbe(new HealthChecks.HTTPProbe("/ready", 8080),
            new HealthChecks.ProbeConfig());
        
        System.out.println("Checking pod health...\n");
        
        for (int i = 0; i < 10; i++) {
            boolean startup = health.checkStartup();
            boolean liveness = health.checkLiveness();
            boolean readiness = health.checkReadiness();
            
            System.out.printf("Check %d - Startup: %s, Liveness: %s, Readiness: %s, Ready: %s%n",
                i + 1, startup, liveness, readiness, health.isReady());
            
            try { Thread.sleep(200); } catch (InterruptedException e) {}
        }
        System.out.println();
    }
}
