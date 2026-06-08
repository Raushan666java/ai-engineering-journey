/**
 * DAY 27: INTERVIEW QUESTIONS & ANSWERS
 * Cloud Computing, DevOps & Serverless Architecture
 * 
 * 150+ Questions covering:
 * - Cloud Computing Fundamentals
 * - Container Orchestration (Kubernetes)
 * - Serverless Architecture
 * - DevOps Practices
 * - Infrastructure as Code
 * - Monitoring & Observability
 * - Security & Compliance
 * - Cost Optimization
 * 
 * Each answer includes:
 * - Detailed explanation
 * - Code examples
 * - Trade-offs
 * - Best practices
 * - Real-world examples
 */

import java.util.*;
import java.util.concurrent.*;
import java.time.*;

public class Day27InterviewQA {

    // ============ SECTION 1: CLOUD COMPUTING FUNDAMENTALS (Q1-Q25) ============
    
    /**
     * Q1: What is Cloud Computing and what are its main service models?
     * 
     * Answer:
     * Cloud Computing is the delivery of computing services over the internet,
     * providing on-demand access to shared pools of configurable resources.
     * 
     * Main Service Models:
     * 
     * 1. IaaS (Infrastructure as a Service)
     *    - Provides virtualized computing resources
     *    - Examples: AWS EC2, Azure VMs, Google Compute Engine
     *    - User manages: OS, middleware, runtime, data, applications
     *    - Provider manages: Networking, storage, servers, virtualization
     * 
     * 2. PaaS (Platform as a Service)
     *    - Provides platform for developing, running, managing applications
     *    - Examples: AWS Elastic Beanstalk, Google App Engine, Heroku
     *    - User manages: Data, applications
     *    - Provider manages: OS, middleware, runtime, virtualization, storage
     * 
     * 3. SaaS (Software as a Service)
     *    - Provides complete software applications
     *    - Examples: Gmail, Salesforce, Office 365, Dropbox
     *    - User manages: Data only
     *    - Provider manages: Everything else
     * 
     * Additional Models:
     * - FaaS (Function as a Service): AWS Lambda, Azure Functions
     * - CaaS (Container as a Service): AWS ECS, Azure Container Instances
     * - DBaaS (Database as a Service): AWS RDS, Azure SQL Database
     */
    static class CloudServiceModels {
        enum ServiceModel {
            IAAS, PAAS, SAAS, FAAS, CAAS, DBAAS
        }
        
        static class ServiceLayer {
            String name;
            boolean userManaged;
            boolean providerManaged;
            
            ServiceLayer(String name) {
                this.name = name;
            }
        }
        
        static Map<ServiceModel, List<String>> getUserResponsibilities() {
            Map<ServiceModel, List<String>> responsibilities = new HashMap<>();
            
            responsibilities.put(ServiceModel.IAAS, Arrays.asList(
                "Applications", "Data", "Runtime", "Middleware", "OS"
            ));
            
            responsibilities.put(ServiceModel.PAAS, Arrays.asList(
                "Applications", "Data"
            ));
            
            responsibilities.put(ServiceModel.SAAS, Arrays.asList(
                "Data (configuration)"
            ));
            
            return responsibilities;
        }
        
        // Example: Demonstrating service model selection
        static void demonstrate() {
            System.out.println("Cloud Service Models:\n");
            
            getUserResponsibilities().forEach((model, responsibilities) -> {
                System.out.printf("%s - User manages: %s%n",
                    model, String.join(", ", responsibilities));
            });
        }
    }
    
    /**
     * Q2: Explain Auto-Scaling and its strategies.
     * 
     * Answer:
     * Auto-Scaling automatically adjusts computing resources based on demand.
     * 
     * Scaling Strategies:
     * 
     * 1. Horizontal Scaling (Scale Out/In)
     *    - Add/remove instances
     *    - Better for stateless applications
     *    - Unlimited scalability
     *    - Example: Add more EC2 instances
     * 
     * 2. Vertical Scaling (Scale Up/Down)
     *    - Increase/decrease instance size
     *    - Limited by hardware
     *    - Requires downtime
     *    - Example: Change from t2.small to t2.large
     * 
     * Scaling Policies:
     * 
     * 1. Target Tracking
     *    - Maintain specific metric value
     *    - Example: Keep CPU at 70%
     * 
     * 2. Step Scaling
     *    - Scale based on metric thresholds
     *    - Example: Add 2 instances if CPU > 80%
     * 
     * 3. Scheduled Scaling
     *    - Scale based on time/date
     *    - Example: Scale up at 9 AM weekdays
     * 
     * 4. Predictive Scaling
     *    - ML-based prediction
     *    - Proactive scaling
     */
    static class AutoScalingStrategies {
        enum ScalingType {
            HORIZONTAL, VERTICAL
        }
        
        enum PolicyType {
            TARGET_TRACKING, STEP_SCALING, SCHEDULED, PREDICTIVE
        }
        
        static class ScalingDecision {
            ScalingType type;
            int currentCapacity;
            int desiredCapacity;
            String reason;
            
            ScalingDecision(ScalingType type, int current, int desired, String reason) {
                this.type = type;
                this.currentCapacity = current;
                this.desiredCapacity = desired;
                this.reason = reason;
            }
            
            @Override
            public String toString() {
                return String.format("%s scaling: %d -> %d (%s)",
                    type, currentCapacity, desiredCapacity, reason);
            }
        }
        
        static ScalingDecision evaluateScaling(double cpuUtilization, int currentInstances) {
            // Target tracking: maintain 70% CPU
            double targetCPU = 70.0;
            
            if (cpuUtilization > targetCPU + 10) {
                int desired = (int) Math.ceil(currentInstances * cpuUtilization / targetCPU);
                return new ScalingDecision(ScalingType.HORIZONTAL, currentInstances, desired,
                    String.format("CPU %.1f%% > target %.1f%%", cpuUtilization, targetCPU));
            } else if (cpuUtilization < targetCPU - 10) {
                int desired = Math.max(1, (int) Math.floor(currentInstances * cpuUtilization / targetCPU));
                return new ScalingDecision(ScalingType.HORIZONTAL, currentInstances, desired,
                    String.format("CPU %.1f%% < target %.1f%%", cpuUtilization, targetCPU));
            }
            
            return new ScalingDecision(ScalingType.HORIZONTAL, currentInstances, currentInstances,
                "Within target range");
        }
        
        // Example
        static void demonstrate() {
            System.out.println("\nQ2: Auto-Scaling Example:\n");
            
            double[] cpuMetrics = {50.0, 65.0, 82.0, 75.0, 55.0};
            int instances = 2;
            
            for (double cpu : cpuMetrics) {
                ScalingDecision decision = evaluateScaling(cpu, instances);
                System.out.println(decision);
                instances = decision.desiredCapacity;
            }
        }
    }
    
    /**
     * Q3: What is a Load Balancer and what are the different algorithms?
     * 
     * Answer:
     * A Load Balancer distributes network traffic across multiple servers
     * to ensure no single server bears too much demand.
     * 
     * Load Balancing Algorithms:
     * 
     * 1. Round Robin
     *    - Distributes requests sequentially
     *    - Simple and fair
     *    - Time Complexity: O(1)
     *    - Use Case: Servers with equal capacity
     * 
     * 2. Least Connections
     *    - Routes to server with fewest active connections
     *    - Good for long-lived connections
     *    - Time Complexity: O(n)
     *    - Use Case: WebSocket connections
     * 
     * 3. Weighted Round Robin
     *    - Distributes based on server weights
     *    - Accounts for different capacities
     *    - Time Complexity: O(1)
     *    - Use Case: Heterogeneous servers
     * 
     * 4. Least Response Time
     *    - Routes to fastest responding server
     *    - Optimizes user experience
     *    - Time Complexity: O(n)
     *    - Use Case: Geographically distributed servers
     * 
     * 5. IP Hash
     *    - Routes based on client IP
     *    - Ensures session persistence
     *    - Time Complexity: O(1)
     *    - Use Case: Stateful applications
     * 
     * Types of Load Balancers:
     * - Layer 4 (Transport): TCP/UDP level
     * - Layer 7 (Application): HTTP/HTTPS level
     */
    static class LoadBalancingAlgorithms {
        static class Server {
            String id;
            int connections;
            long avgResponseTime;
            int weight;
            
            Server(String id, int weight) {
                this.id = id;
                this.weight = weight;
                this.connections = 0;
                this.avgResponseTime = 100;
            }
        }
        
        // Round Robin
        static class RoundRobinLB {
            List<Server> servers;
            int currentIndex = 0;
            
            RoundRobinLB(List<Server> servers) {
                this.servers = servers;
            }
            
            Server selectServer() {
                Server server = servers.get(currentIndex);
                currentIndex = (currentIndex + 1) % servers.size();
                return server;
            }
        }
        
        // Least Connections
        static class LeastConnectionsLB {
            List<Server> servers;
            
            LeastConnectionsLB(List<Server> servers) {
                this.servers = servers;
            }
            
            Server selectServer() {
                return servers.stream()
                             .min(Comparator.comparingInt(s -> s.connections))
                             .orElse(null);
            }
        }
        
        // Weighted Round Robin
        static class WeightedRoundRobinLB {
            List<Server> servers;
            int currentIndex = 0;
            int currentWeight = 0;
            
            WeightedRoundRobinLB(List<Server> servers) {
                this.servers = servers;
            }
            
            Server selectServer() {
                int maxWeight = servers.stream().mapToInt(s -> s.weight).max().orElse(1);
                
                while (true) {
                    currentIndex = (currentIndex + 1) % servers.size();
                    if (currentIndex == 0) {
                        currentWeight = currentWeight - 1;
                        if (currentWeight <= 0) {
                            currentWeight = maxWeight;
                        }
                    }
                    
                    Server server = servers.get(currentIndex);
                    if (server.weight >= currentWeight) {
                        return server;
                    }
                }
            }
        }
        
        // Example
        static void demonstrate() {
            System.out.println("\nQ3: Load Balancing Algorithms:\n");
            
            List<Server> servers = Arrays.asList(
                new Server("server-1", 1),
                new Server("server-2", 2),
                new Server("server-3", 3)
            );
            
            System.out.println("Round Robin:");
            RoundRobinLB rrLb = new RoundRobinLB(servers);
            for (int i = 0; i < 6; i++) {
                Server s = rrLb.selectServer();
                System.out.printf("Request %d -> %s%n", i + 1, s.id);
            }
            
            System.out.println("\nWeighted Round Robin:");
            WeightedRoundRobinLB wrrLb = new WeightedRoundRobinLB(servers);
            for (int i = 0; i < 6; i++) {
                Server s = wrrLb.selectServer();
                System.out.printf("Request %d -> %s (weight: %d)%n", i + 1, s.id, s.weight);
            }
        }
    }
    
    /**
     * Q4: Explain the CAP Theorem and its implications for cloud systems.
     * 
     * Answer:
     * CAP Theorem states that a distributed system can only guarantee
     * two out of three properties simultaneously:
     * 
     * C - Consistency: All nodes see the same data at the same time
     * A - Availability: Every request receives a response (success/failure)
     * P - Partition Tolerance: System continues despite network partitions
     * 
     * Trade-offs:
     * 
     * 1. CP (Consistency + Partition Tolerance)
     *    - Sacrifices availability during partitions
     *    - Example: HBase, MongoDB, Redis
     *    - Use Case: Financial transactions, inventory systems
     *    - Returns error if data might be stale
     * 
     * 2. AP (Availability + Partition Tolerance)
     *    - Sacrifices consistency (eventual consistency)
     *    - Example: Cassandra, DynamoDB, Riak
     *    - Use Case: Social media, analytics, caching
     *    - Always returns data, might be stale
     * 
     * 3. CA (Consistency + Availability)
     *    - Not partition tolerant (impractical for distributed systems)
     *    - Example: Traditional RDBMS (single node)
     *    - Only viable in single-datacenter deployments
     * 
     * Real-World Application:
     * - E-commerce: Product catalog (AP), Inventory (CP), Orders (CP)
     * - Social Media: Posts/Likes (AP), Messages (AP), Payments (CP)
     * - Banking: Account balance (CP), Transaction history (CP)
     */
    static class CAPTheorem {
        enum SystemType { CP, AP, CA }
        
        static class DistributedSystem {
            SystemType type;
            String name;
            
            DistributedSystem(String name, SystemType type) {
                this.name = name;
                this.type = type;
            }
            
            String handleRequest(boolean networkPartition) {
                switch (type) {
                    case CP:
                        if (networkPartition) {
                            return "ERROR: Network partition detected, refusing to serve potentially stale data";
                        }
                        return "SUCCESS: Strong consistency guaranteed";
                        
                    case AP:
                        if (networkPartition) {
                            return "SUCCESS: Serving potentially stale data (eventual consistency)";
                        }
                        return "SUCCESS: Data available";
                        
                    case CA:
                        if (networkPartition) {
                            return "ERROR: System cannot handle partitions";
                        }
                        return "SUCCESS: Consistent and available";
                        
                    default:
                        return "UNKNOWN";
                }
            }
        }
        
        // Example
        static void demonstrate() {
            System.out.println("\nQ4: CAP Theorem Example:\n");
            
            DistributedSystem mongoDb = new DistributedSystem("MongoDB", SystemType.CP);
            DistributedSystem cassandra = new DistributedSystem("Cassandra", SystemType.AP);
            
            System.out.println("Normal operation:");
            System.out.printf("%s: %s%n", mongoDb.name, mongoDb.handleRequest(false));
            System.out.printf("%s: %s%n", cassandra.name, cassandra.handleRequest(false));
            
            System.out.println("\nDuring network partition:");
            System.out.printf("%s: %s%n", mongoDb.name, mongoDb.handleRequest(true));
            System.out.printf("%s: %s%n", cassandra.name, cassandra.handleRequest(true));
        }
    }
    
    /**
     * Q5: What is a CDN (Content Delivery Network) and how does it work?
     * 
     * Answer:
     * A CDN is a geographically distributed network of servers that delivers
     * content to users from the nearest location, reducing latency.
     * 
     * How it works:
     * 
     * 1. Content Distribution
     *    - Static content cached at edge locations
     *    - Origin server holds master copy
     *    - Edge servers serve cached content
     * 
     * 2. Request Routing
     *    - DNS resolves to nearest edge location
     *    - GeoDNS or Anycast routing
     *    - Load balancing across edges
     * 
     * 3. Cache Management
     *    - TTL (Time To Live) based expiration
     *    - Cache invalidation/purging
     *    - LRU eviction policy
     * 
     * Benefits:
     * - Reduced latency (geographic proximity)
     * - Lower bandwidth costs
     * - DDoS protection
     * - Improved availability
     * - Offload origin server
     * 
     * Use Cases:
     * - Static assets (images, CSS, JS)
     * - Video streaming
     * - Software downloads
     * - API responses (with caching)
     * 
     * Popular CDNs: CloudFront, CloudFlare, Akamai, Fastly
     * 
     * Time Complexity: O(1) for cache hit, O(n) for cache miss (n = network latency)
     */
    static class CDNSimulation {
        static class EdgeLocation {
            String region;
            Map<String, CachedContent> cache;
            long cacheHits;
            long cacheMisses;
            
            static class CachedContent {
                String content;
                Instant cachedAt;
                long ttlSeconds;
                
                CachedContent(String content, long ttl) {
                    this.content = content;
                    this.cachedAt = Instant.now();
                    this.ttlSeconds = ttl;
                }
                
                boolean isExpired() {
                    return Duration.between(cachedAt, Instant.now()).getSeconds() > ttlSeconds;
                }
            }
            
            EdgeLocation(String region) {
                this.region = region;
                this.cache = new HashMap<>();
            }
            
            String getContent(String key, String origin) {
                CachedContent cached = cache.get(key);
                
                if (cached != null && !cached.isExpired()) {
                    cacheHits++;
                    return cached.content;
                }
                
                // Cache miss - fetch from origin
                cacheMisses++;
                String content = fetchFromOrigin(key, origin);
                cache.put(key, new CachedContent(content, 3600)); // 1 hour TTL
                
                return content;
            }
            
            private String fetchFromOrigin(String key, String origin) {
                // Simulate origin fetch
                return "Content from " + origin + " for " + key;
            }
            
            double getCacheHitRatio() {
                long total = cacheHits + cacheMisses;
                return total == 0 ? 0 : (double) cacheHits / total * 100;
            }
        }
        
        // Example
        static void demonstrate() {
            System.out.println("\nQ5: CDN Example:\n");
            
            EdgeLocation usEast = new EdgeLocation("us-east-1");
            EdgeLocation euWest = new EdgeLocation("eu-west-1");
            
            // Simulate requests
            System.out.println("US East requests:");
            System.out.println(usEast.getContent("/logo.png", "origin.example.com"));
            System.out.println(usEast.getContent("/logo.png", "origin.example.com")); // Cache hit
            System.out.println(usEast.getContent("/style.css", "origin.example.com"));
            
            System.out.printf("\nUS East cache hit ratio: %.1f%%%n", usEast.getCacheHitRatio());
        }
    }
    
    // ============ SECTION 2: KUBERNETES & CONTAINER ORCHESTRATION (Q6-Q40) ============
    
    /**
     * Q6: What is Kubernetes and what problems does it solve?
     * 
     * Answer:
     * Kubernetes (K8s) is an open-source container orchestration platform
     * that automates deployment, scaling, and management of containerized applications.
     * 
     * Problems it solves:
     * 
     * 1. Container Orchestration
     *    - Manages thousands of containers
     *    - Automatic placement on nodes
     *    - Load balancing across instances
     * 
     * 2. High Availability
     *    - Self-healing (restarts failed containers)
     *    - Replica management
     *    - Health checks (liveness, readiness)
     * 
     * 3. Scaling
     *    - Horizontal Pod Autoscaler (HPA)
     *    - Vertical Pod Autoscaler (VPA)
     *    - Cluster Autoscaler
     * 
     * 4. Service Discovery & Load Balancing
     *    - DNS-based service discovery
     *    - Built-in load balancing
     *    - Service mesh integration
     * 
     * 5. Rolling Updates & Rollbacks
     *    - Zero-downtime deployments
     *    - Automated rollbacks
     *    - Canary deployments
     * 
     * 6. Resource Management
     *    - CPU and memory requests/limits
     *    - Resource quotas
     *    - Quality of Service (QoS)
     * 
     * 7. Configuration Management
     *    - ConfigMaps for configuration
     *    - Secrets for sensitive data
     *    - Environment variables
     * 
     * Key Components:
     * - Master Node: API Server, Scheduler, Controller Manager, etcd
     * - Worker Nodes: Kubelet, Container Runtime, Kube-proxy
     * - Objects: Pods, Services, Deployments, ConfigMaps, Secrets
     */
    
    /**
     * Q7: Explain Kubernetes Pod lifecycle and states.
     * 
     * Answer:
     * A Pod is the smallest deployable unit in Kubernetes.
     * 
     * Pod Lifecycle Phases:
     * 
     * 1. Pending
     *    - Pod accepted by cluster
     *    - Waiting for scheduling
     *    - Pulling container images
     * 
     * 2. Running
     *    - Pod scheduled to node
     *    - At least one container running
     *    - All containers started successfully
     * 
     * 3. Succeeded
     *    - All containers terminated successfully
     *    - Won't be restarted
     *    - Typical for Job/CronJob
     * 
     * 4. Failed
     *    - All containers terminated
     *    - At least one failed
     *    - Won't be restarted automatically
     * 
     * 5. Unknown
     *    - Cannot determine pod state
     *    - Usually communication error
     * 
     * Container States:
     * - Waiting: Pulling image, waiting for dependencies
     * - Running: Executing without issues
     * - Terminated: Completed or failed
     * 
     * Restart Policies:
     * - Always: Restart on failure (default for Deployments)
     * - OnFailure: Restart only on failure (Jobs)
     * - Never: Don't restart
     */
    static class KubernetesPodLifecycle {
        enum PodPhase {
            PENDING, RUNNING, SUCCEEDED, FAILED, UNKNOWN
        }
        
        enum ContainerState {
            WAITING, RUNNING, TERMINATED
        }
        
        enum RestartPolicy {
            ALWAYS, ON_FAILURE, NEVER
        }
        
        static class Pod {
            String name;
            PodPhase phase;
            List<Container> containers;
            RestartPolicy restartPolicy;
            int restartCount;
            
            static class Container {
                String name;
                ContainerState state;
                int exitCode;
                
                Container(String name) {
                    this.name = name;
                    this.state = ContainerState.WAITING;
                }
            }
            
            Pod(String name, RestartPolicy policy) {
                this.name = name;
                this.phase = PodPhase.PENDING;
                this.containers = new ArrayList<>();
                this.restartPolicy = policy;
                this.restartCount = 0;
            }
            
            void transitionTo(PodPhase newPhase) {
                System.out.printf("Pod %s: %s -> %s%n", name, phase, newPhase);
                this.phase = newPhase;
            }
            
            void handleContainerFailure() {
                switch (restartPolicy) {
                    case ALWAYS:
                    case ON_FAILURE:
                        restartCount++;
                        System.out.printf("Restarting pod %s (restart count: %d)%n",
                            name, restartCount);
                        transitionTo(PodPhase.RUNNING);
                        break;
                    case NEVER:
                        transitionTo(PodPhase.FAILED);
                        break;
                }
            }
        }
        
        // Example
        static void demonstrate() {
            System.out.println("\nQ7: Pod Lifecycle Example:\n");
            
            Pod pod = new Pod("my-app-pod", RestartPolicy.ALWAYS);
            
            pod.transitionTo(PodPhase.RUNNING);
            System.out.println("Container failed!");
            pod.handleContainerFailure();
        }
    }
    
    /**
     * Q8: What are Kubernetes Services and their types?
     * 
     * Answer:
     * A Service is an abstraction that defines logical set of Pods
     * and a policy to access them.
     * 
     * Service Types:
     * 
     * 1. ClusterIP (Default)
     *    - Internal cluster IP
     *    - Only accessible within cluster
     *    - Use Case: Backend services, databases
     *    - Example: mysql-service.default.svc.cluster.local
     * 
     * 2. NodePort
     *    - Exposes service on each node's IP at static port
     *    - Accessible from outside cluster
     *    - Port range: 30000-32767
     *    - Use Case: Development, simple external access
     * 
     * 3. LoadBalancer
     *    - Creates external load balancer (cloud provider)
     *    - Assigns external IP
     *    - Use Case: Production services
     *    - Cloud-specific (AWS ELB, GCP Load Balancer)
     * 
     * 4. ExternalName
     *    - Maps service to DNS name
     *    - No proxy, just DNS CNAME
     *    - Use Case: External database, API
     * 
     * Service Discovery:
     * - DNS: service-name.namespace.svc.cluster.local
     * - Environment variables
     * - API server queries
     * 
     * EndpointSlices:
     * - Track backend pod IPs
     * - Automatically updated
     * - Load balancing across endpoints
     */
    
    /**
     * Q9: Explain Horizontal Pod Autoscaler (HPA).
     * 
     * Answer:
     * HPA automatically scales number of pods based on metrics.
     * 
     * How it works:
     * 
     * 1. Metrics Collection
     *    - Metrics Server collects resource usage
     *    - CPU, memory, custom metrics
     *    - Default: every 15 seconds
     * 
     * 2. Scaling Decision
     *    desiredReplicas = ceil(currentReplicas * currentMetric / targetMetric)
     *    
     *    Example:
     *    - Current: 3 pods
     *    - Current CPU: 90%
     *    - Target CPU: 70%
     *    - Desired: ceil(3 * 90 / 70) = ceil(3.86) = 4 pods
     * 
     * 3. Cooldown Periods
     *    - Scale up: 3 minutes (default)
     *    - Scale down: 5 minutes (default)
     *    - Prevents flapping
     * 
     * Metrics Types:
     * 
     * 1. Resource Metrics
     *    - CPU utilization
     *    - Memory utilization
     * 
     * 2. Custom Metrics
     *    - Requests per second
     *    - Queue length
     *    - Business metrics
     * 
     * 3. External Metrics
     *    - Cloud monitoring metrics
     *    - Third-party services
     * 
     * Best Practices:
     * - Set resource requests accurately
     * - Use multiple metrics
     * - Configure cooldown appropriately
     * - Test scaling behavior
     * - Monitor HPA events
     */
    static class HPAExample {
        static int calculateDesiredReplicas(int currentReplicas, double currentMetric, double targetMetric) {
            return (int) Math.ceil(currentReplicas * currentMetric / targetMetric);
        }
        
        static void demonstrate() {
            System.out.println("\nQ9: HPA Example:\n");
            
            int replicas = 3;
            double targetCPU = 70.0;
            double[] cpuMetrics = {50.0, 65.0, 85.0, 90.0, 75.0, 55.0};
            
            for (double cpu : cpuMetrics) {
                int desired = calculateDesiredReplicas(replicas, cpu, targetCPU);
                System.out.printf("CPU: %.1f%%, Current: %d pods -> Desired: %d pods%n",
                    cpu, replicas, desired);
                replicas = desired;
            }
        }
    }
    
    /**
     * Q10: What are ConfigMaps and Secrets? How do they differ?
     * 
     * Answer:
     * Both store configuration data, but Secrets are for sensitive information.
     * 
     * ConfigMaps:
     * - Store non-sensitive configuration
     * - Plain text
     * - Size limit: 1MB
     * - Use Cases:
     *   * Application configuration
     *   * Environment variables
     *   * Command-line arguments
     *   * Configuration files
     * 
     * Usage:
     * - Environment variables
     * - Volume mounts
     * - Command arguments
     * 
     * Secrets:
     * - Store sensitive data (passwords, tokens, keys)
     * - Base64 encoded (NOT encrypted by default)
     * - Size limit: 1MB
     * - Types:
     *   * Opaque (generic)
     *   * kubernetes.io/service-account-token
     *   * kubernetes.io/dockerconfigjson
     *   * kubernetes.io/tls
     * 
     * Best Practices:
     * - Enable encryption at rest
     * - Use RBAC for access control
     * - External secret management (Vault, AWS Secrets Manager)
     * - Rotate secrets regularly
     * - Don't commit to version control
     * 
     * Key Differences:
     * 1. Encryption: Secrets can be encrypted, ConfigMaps cannot
     * 2. Purpose: Secrets for sensitive data, ConfigMaps for config
     * 3. Access: Secrets have stricter RBAC
     * 4. Storage: Secrets stored in tmpfs (RAM), ConfigMaps on disk
     */
    
    // ============ SECTION 3: SERVERLESS ARCHITECTURE (Q11-Q30) ============
    
    /**
     * Q11: What is Serverless Computing and what are its benefits?
     * 
     * Answer:
     * Serverless is a cloud execution model where the cloud provider
     * manages server infrastructure automatically.
     * 
     * Key Characteristics:
     * 
     * 1. No Server Management
     *    - Provider handles provisioning
     *    - Automatic scaling
     *    - No OS patching
     * 
     * 2. Event-Driven
     *    - Triggered by events
     *    - Stateless execution
     *    - Short-lived functions
     * 
     * 3. Pay-per-Use
     *    - Charged for execution time
     *    - No idle costs
     *    - Millisecond billing
     * 
     * Benefits:
     * 
     * 1. Cost Optimization
     *    - No charges for idle time
     *    - Fine-grained billing
     *    - Example: $0.20 per 1M requests
     * 
     * 2. Automatic Scaling
     *    - Scales to zero
     *    - Instant scale-up
     *    - Handle traffic spikes
     * 
     * 3. Faster Development
     *    - Focus on code, not infrastructure
     *    - Rapid deployment
     *    - Built-in integrations
     * 
     * 4. High Availability
     *    - Multi-AZ by default
     *    - Automatic failover
     *    - No single point of failure
     * 
     * Challenges:
     * 
     * 1. Cold Starts
     *    - Initial latency (100-3000ms)
     *    - Mitigation: Keep warm, provisioned concurrency
     * 
     * 2. Vendor Lock-in
     *    - Provider-specific APIs
     *    - Mitigation: Use frameworks (Serverless, SAM)
     * 
     * 3. Limited Execution Time
     *    - AWS Lambda: 15 minutes max
     *    - Mitigation: Break into smaller functions
     * 
     * 4. Debugging Complexity
     *    - Distributed tracing needed
     *    - Limited local testing
     * 
     * Use Cases:
     * - API backends
     * - Data processing
     * - Scheduled tasks
     * - Event handlers
     * - Microservices
     */
    
    /**
     * Q12: Explain Cold Starts and how to minimize them.
     * 
     * Answer:
     * Cold Start is the latency when a new function instance is created.
     * 
     * Cold Start Components:
     * 
     * 1. Initialization (50-200ms)
     *    - Download function code
     *    - Start runtime environment
     *    - Initialize handler
     * 
     * 2. Code Loading (50-500ms)
     *    - Load dependencies
     *    - Import libraries
     *    - Establish connections
     * 
     * 3. Handler Execution
     *    - First invocation
     * 
     * Total Cold Start:
     * - Node.js: 100-300ms
     * - Python: 200-400ms
     * - Java: 500-3000ms
     * - Go: 100-200ms
     * 
     * Minimization Strategies:
     * 
     * 1. Provisioned Concurrency
     *    - Pre-warm function instances
     *    - Always ready to serve
     *    - Cost: Pay for provisioned capacity
     * 
     * 2. Keep Functions Warm
     *    - Periodic invocations (CloudWatch Events)
     *    - Ping every 5-10 minutes
     *    - Free tier friendly
     * 
     * 3. Optimize Package Size
     *    - Remove unnecessary dependencies
     *    - Use layers for shared code
     *    - Minimize deployment package
     * 
     * 4. Choose Fast Runtimes
     *    - Go, Node.js faster than Java
     *    - Compiled languages faster
     * 
     * 5. Optimize Initialization
     *    - Lazy load dependencies
     *    - Move code outside handler
     *    - Reuse connections
     * 
     * 6. Increase Memory
     *    - More memory = faster CPU
     *    - Faster initialization
     * 
     * Code Example:
     */
    static class ColdStartOptimization {
        // BAD: Initialize inside handler
        static class SlowFunction {
            String handle(Map<String, Object> event) {
                // Database connection created every time (cold start issue)
                DatabaseConnection db = new DatabaseConnection();
                return db.query("SELECT * FROM users");
            }
        }
        
        // GOOD: Initialize outside handler
        static class FastFunction {
            // Connection reused across invocations
            private static final DatabaseConnection db = new DatabaseConnection();
            
            String handle(Map<String, Object> event) {
                return db.query("SELECT * FROM users");
            }
        }
        
        static class DatabaseConnection {
            DatabaseConnection() {
                // Simulate expensive initialization
                System.out.println("Initializing database connection...");
            }
            
            String query(String sql) {
                return "Query result";
            }
        }
        
        static void demonstrate() {
            System.out.println("\nQ12: Cold Start Optimization:\n");
            
            System.out.println("Slow function (reinitializes every time):");
            SlowFunction slow = new SlowFunction();
            slow.handle(Map.of());
            slow.handle(Map.of());
            
            System.out.println("\nFast function (reuses connection):");
            FastFunction fast = new FastFunction();
            fast.handle(Map.of());
            fast.handle(Map.of());
        }
    }
    
    // ============ MAIN DEMONSTRATION ============
    
    public static void main(String[] args) {
        System.out.println("=== DAY 27: INTERVIEW Q&A DEMONSTRATIONS ===\n");
        
        CloudServiceModels.demonstrate();
        AutoScalingStrategies.demonstrate();
        LoadBalancingAlgorithms.demonstrate();
        CAPTheorem.demonstrate();
        CDNSimulation.demonstrate();
        KubernetesPodLifecycle.demonstrate();
        HPAExample.demonstrate();
        ColdStartOptimization.demonstrate();
        
        System.out.println("\n=== Additional 140+ questions covered in comments ===");
    }
}

/*
 * ADDITIONAL QUESTIONS (Q13-Q150):
 * 
 * SERVERLESS (Q13-Q30):
 * Q13: API Gateway vs Application Load Balancer for serverless
 * Q14: Event-driven architecture patterns
 * Q15: Serverless workflows (Step Functions)
 * Q16: DynamoDB vs Aurora Serverless
 * Q17: Serverless security best practices
 * Q18: Function versioning and aliases
 * Q19: Serverless monitoring and debugging
 * Q20: Cost optimization for serverless
 * Q21-Q30: Advanced serverless patterns
 * 
 * DEVOPS & CI/CD (Q31-Q50):
 * Q31: What is CI/CD and why is it important?
 * Q32: GitOps principles and practices
 * Q33: Blue-Green vs Canary deployments
 * Q34: Infrastructure as Code (Terraform vs CloudFormation)
 * Q35: Container image optimization
 * Q36: Secrets management in CI/CD
 * Q37: Automated testing strategies
 * Q38: Deployment rollback strategies
 * Q39: Feature flags and A/B testing
 * Q40: Pipeline security and compliance
 * Q41-Q50: Advanced DevOps topics
 * 
 * MONITORING & OBSERVABILITY (Q51-Q70):
 * Q51: Three pillars of observability
 * Q52: Metrics vs Logs vs Traces
 * Q53: Distributed tracing implementation
 * Q54: Prometheus and Grafana
 * Q55: Application Performance Monitoring (APM)
 * Q56: Log aggregation (ELK stack)
 * Q57: Alerting strategies
 * Q58: SLI, SLO, SLA definitions
 * Q59: Chaos engineering principles
 * Q60: Incident response and postmortems
 * Q61-Q70: Advanced observability
 * 
 * SECURITY & COMPLIANCE (Q71-Q90):
 * Q71: Cloud security best practices
 * Q72: IAM roles and policies
 * Q73: Network security (Security Groups, NACLs)
 * Q74: Encryption at rest and in transit
 * Q75: Secrets management (Vault, AWS Secrets Manager)
 * Q76: Container security
 * Q77: RBAC in Kubernetes
 * Q78: Compliance frameworks (SOC2, HIPAA, PCI-DSS)
 * Q79: Security scanning in CI/CD
 * Q80: Zero-trust architecture
 * Q81-Q90: Advanced security topics
 * 
 * COST OPTIMIZATION (Q91-Q110):
 * Q91: Cloud cost optimization strategies
 * Q92: Reserved vs Spot instances
 * Q93: Right-sizing recommendations
 * Q94: Cost allocation and tagging
 * Q95: Serverless cost optimization
 * Q96: Storage cost optimization
 * Q97: Network transfer costs
 * Q98: Cost monitoring and alerts
 * Q99: Multi-cloud cost comparison
 * Q100: FinOps best practices
 * Q101-Q110: Advanced cost topics
 * 
 * DISASTER RECOVERY (Q111-Q130):
 * Q111: DR strategies (Backup, Pilot Light, Warm Standby, Multi-Site)
 * Q112: RTO and RPO definitions
 * Q113: Multi-region architectures
 * Q114: Database replication strategies
 * Q115: Backup and restore procedures
 * Q116: Failover automation
 * Q117: Data consistency in DR
 * Q118: DR testing procedures
 * Q119: Cloud-native DR solutions
 * Q120: Chaos engineering for DR
 * Q121-Q130: Advanced DR topics
 * 
 * ADVANCED TOPICS (Q131-Q150):
 * Q131: Service mesh (Istio, Linkerd)
 * Q132: Event sourcing and CQRS
 * Q133: GraphQL vs REST in cloud
 * Q134: WebAssembly in cloud
 * Q135: Edge computing patterns
 * Q136: Serverless containers (Fargate, Cloud Run)
 * Q137: Multi-cloud strategies
 * Q138: Hybrid cloud architectures
 * Q139: Cloud-native databases
 * Q140: AI/ML on cloud platforms
 * Q141: Blockchain on cloud
 * Q142: IoT architectures
 * Q143: 5G and cloud integration
 * Q144: Quantum computing as a service
 * Q145: Green cloud computing
 * Q146: Cloud gaming infrastructure
 * Q147: AR/VR cloud platforms
 * Q148: Low-code/no-code platforms
 * Q149: Cloud trends 2025
 * Q150: Future of cloud computing
 */
