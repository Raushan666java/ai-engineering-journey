package day33.cloudnative;

import java.util.*;
import java.util.concurrent.*;
import java.time.*;
import java.util.stream.*;
import java.nio.file.*;
import java.util.function.*;

/**
 * DAY 33: CLOUD-NATIVE ARCHITECTURE & KUBERNETES PATTERNS
 * 
 * Topics Covered:
 * 1. 12-Factor App Principles
 * 2. Cloud-Native Design Patterns
 * 3. Container Patterns
 * 4. Immutable Infrastructure
 * 
 * Real-world applications:
 * - Netflix: Cloud-native microservices on AWS
 * - Spotify: Containerized services on GCP
 * - Uber: Multi-cloud architecture
 * - Airbnb: Kubernetes-based infrastructure
 */

public class CloudNativePatterns {
    
    /**
     * PATTERN 1: 12-FACTOR APP IMPLEMENTATION
     * ========================================
     * 
     * The 12-Factor App methodology provides best practices for building
     * modern, scalable, maintainable cloud-native applications.
     * 
     * 12 Factors:
     * I. Codebase - One codebase tracked in revision control
     * II. Dependencies - Explicitly declare and isolate dependencies
     * III. Config - Store config in the environment
     * IV. Backing Services - Treat backing services as attached resources
     * V. Build, Release, Run - Strictly separate build and run stages
     * VI. Processes - Execute the app as stateless processes
     * VII. Port Binding - Export services via port binding
     * VIII. Concurrency - Scale out via the process model
     * IX. Disposability - Maximize robustness with fast startup and graceful shutdown
     * X. Dev/Prod Parity - Keep development, staging, and production as similar as possible
     * XI. Logs - Treat logs as event streams
     * XII. Admin Processes - Run admin/management tasks as one-off processes
     * 
     * Benefits:
     * - Cloud platform agnostic
     * - Horizontal scalability
     * - Continuous deployment
     * - Portability
     * 
     * Used by: Heroku, Cloud Foundry, Kubernetes platforms
     */
    
    // Factor III: Configuration Management
    static class ConfigurationManager {
        private final Map<String, String> environment;
        private final Map<String, String> secrets;
        private final Map<String, String> defaults;
        
        public ConfigurationManager() {
            this.environment = new ConcurrentHashMap<>();
            this.secrets = new ConcurrentHashMap<>();
            this.defaults = new ConcurrentHashMap<>();
            
            // Initialize defaults
            defaults.put("PORT", "8080");
            defaults.put("LOG_LEVEL", "INFO");
            defaults.put("MAX_CONNECTIONS", "100");
            defaults.put("TIMEOUT_SECONDS", "30");
        }
        
        // Load configuration from environment variables
        public void loadFromEnvironment(Map<String, String> envVars) {
            environment.putAll(envVars);
            System.out.println("✓ Loaded " + envVars.size() + " environment variables");
        }
        
        // Load secrets from secure vault (simulated)
        public void loadSecrets(Map<String, String> secretData) {
            secrets.putAll(secretData);
            System.out.println("✓ Loaded " + secretData.size() + " secrets from vault");
        }
        
        // Get configuration value with fallback
        public String get(String key) {
            // Priority: Environment > Secrets > Defaults
            if (environment.containsKey(key)) {
                return environment.get(key);
            }
            if (secrets.containsKey(key)) {
                return secrets.get(key);
            }
            return defaults.get(key);
        }
        
        public String getRequired(String key) {
            String value = get(key);
            if (value == null) {
                throw new IllegalStateException("Required configuration missing: " + key);
            }
            return value;
        }
        
        public int getInt(String key) {
            return Integer.parseInt(get(key));
        }
        
        public boolean isDevelopment() {
            return "development".equals(get("ENVIRONMENT"));
        }
        
        public boolean isProduction() {
            return "production".equals(get("ENVIRONMENT"));
        }
        
        // Validate all required configurations
        public void validate(List<String> requiredKeys) {
            List<String> missing = requiredKeys.stream()
                .filter(key -> get(key) == null)
                .collect(Collectors.toList());
            
            if (!missing.isEmpty()) {
                throw new IllegalStateException("Missing required config: " + missing);
            }
            
            System.out.println("✓ All required configurations validated");
        }
    }
    
    // Factor IV: Backing Services as Attached Resources
    static class BackingServiceRegistry {
        private final Map<String, BackingService> services;
        
        public BackingServiceRegistry() {
            this.services = new ConcurrentHashMap<>();
        }
        
        public void register(String name, BackingService service) {
            services.put(name, service);
            System.out.println("✓ Registered backing service: " + name);
        }
        
        public BackingService get(String name) {
            BackingService service = services.get(name);
            if (service == null) {
                throw new IllegalArgumentException("Unknown backing service: " + name);
            }
            return service;
        }
        
        // Attach/detach services at runtime without code changes
        public void detach(String name) {
            services.remove(name);
            System.out.println("✓ Detached backing service: " + name);
        }
        
        public void healthCheck() {
            System.out.println("\n=== Backing Services Health Check ===");
            services.forEach((name, service) -> {
                boolean healthy = service.isHealthy();
                String status = healthy ? "✓ HEALTHY" : "✗ UNHEALTHY";
                System.out.println(name + ": " + status);
            });
        }
    }
    
    interface BackingService {
        boolean isHealthy();
        void connect();
        void disconnect();
    }
    
    static class DatabaseService implements BackingService {
        private final String connectionUrl;
        private boolean connected;
        
        public DatabaseService(String connectionUrl) {
            this.connectionUrl = connectionUrl;
            this.connected = false;
        }
        
        @Override
        public void connect() {
            // Simulate database connection
            connected = true;
            System.out.println("Connected to database: " + connectionUrl);
        }
        
        @Override
        public void disconnect() {
            connected = false;
            System.out.println("Disconnected from database");
        }
        
        @Override
        public boolean isHealthy() {
            return connected;
        }
    }
    
    static class CacheService implements BackingService {
        private final String redisUrl;
        private boolean connected;
        
        public CacheService(String redisUrl) {
            this.redisUrl = redisUrl;
            this.connected = false;
        }
        
        @Override
        public void connect() {
            connected = true;
            System.out.println("Connected to Redis: " + redisUrl);
        }
        
        @Override
        public void disconnect() {
            connected = false;
            System.out.println("Disconnected from Redis");
        }
        
        @Override
        public boolean isHealthy() {
            return connected;
        }
    }
    
    // Factor VI: Stateless Processes
    static class StatelessRequestHandler {
        private final BackingServiceRegistry serviceRegistry;
        private final Map<String, Integer> requestStats; // For demo only
        
        public StatelessRequestHandler(BackingServiceRegistry serviceRegistry) {
            this.serviceRegistry = serviceRegistry;
            this.requestStats = new ConcurrentHashMap<>();
        }
        
        // Each request is completely independent
        public Response handleRequest(Request request) {
            // No session state stored in process memory
            // All state comes from backing services
            
            String requestId = UUID.randomUUID().toString();
            System.out.println("\n[" + requestId + "] Processing request: " + request.path);
            
            try {
                // Fetch session from external store (e.g., Redis)
                SessionData session = getSessionFromStore(request.sessionId);
                
                // Process request using session data
                String result = processWithSession(request, session);
                
                // Save any state changes back to external store
                saveSessionToStore(session);
                
                // Track request (this would be in external metrics system in production)
                requestStats.merge(request.path, 1, Integer::sum);
                
                return new Response(200, result);
                
            } catch (Exception e) {
                return new Response(500, "Error: " + e.getMessage());
            }
        }
        
        private SessionData getSessionFromStore(String sessionId) {
            // In production: fetch from Redis/Memcached
            CacheService cache = (CacheService) serviceRegistry.get("cache");
            // Simulated session fetch
            return new SessionData(sessionId, "user123");
        }
        
        private String processWithSession(Request request, SessionData session) {
            return "Processed " + request.path + " for user " + session.userId;
        }
        
        private void saveSessionToStore(SessionData session) {
            // In production: save to Redis/Memcached
            CacheService cache = (CacheService) serviceRegistry.get("cache");
            // Simulated session save
        }
        
        // Since process is stateless, can be killed and restarted anytime
        public void shutdown() {
            System.out.println("Shutting down handler (no state to persist)");
        }
    }
    
    static class Request {
        String path;
        String sessionId;
        Map<String, String> headers;
        
        public Request(String path, String sessionId) {
            this.path = path;
            this.sessionId = sessionId;
            this.headers = new HashMap<>();
        }
    }
    
    static class Response {
        int status;
        String body;
        
        public Response(int status, String body) {
            this.status = status;
            this.body = body;
        }
    }
    
    static class SessionData {
        String sessionId;
        String userId;
        
        public SessionData(String sessionId, String userId) {
            this.sessionId = sessionId;
            this.userId = userId;
        }
    }
    
    // Factor IX: Disposability (Fast Startup and Graceful Shutdown)
    static class DisposableApplication {
        private final ExecutorService executorService;
        private final List<BackingService> backingServices;
        private volatile boolean running;
        private final CountDownLatch shutdownLatch;
        
        public DisposableApplication() {
            this.executorService = Executors.newFixedThreadPool(10);
            this.backingServices = new CopyOnWriteArrayList<>();
            this.running = false;
            this.shutdownLatch = new CountDownLatch(1);
        }
        
        // Fast startup: minimize startup time
        public void start() {
            Instant startTime = Instant.now();
            System.out.println("\n=== Starting Application ===");
            
            // 1. Load configuration
            System.out.println("Loading configuration...");
            
            // 2. Connect to backing services (parallel for speed)
            System.out.println("Connecting to backing services...");
            backingServices.forEach(BackingService::connect);
            
            // 3. Start accepting requests
            running = true;
            
            Duration startupTime = Duration.between(startTime, Instant.now());
            System.out.println("✓ Application started in " + startupTime.toMillis() + "ms");
        }
        
        // Graceful shutdown: finish processing current requests
        public void shutdown() {
            System.out.println("\n=== Graceful Shutdown Initiated ===");
            Instant shutdownStart = Instant.now();
            
            // 1. Stop accepting new requests
            running = false;
            System.out.println("Stopped accepting new requests");
            
            // 2. Wait for in-flight requests to complete
            executorService.shutdown();
            try {
                if (!executorService.awaitTermination(30, TimeUnit.SECONDS)) {
                    System.out.println("⚠ Forcing shutdown after timeout");
                    executorService.shutdownNow();
                }
            } catch (InterruptedException e) {
                executorService.shutdownNow();
            }
            
            // 3. Disconnect from backing services
            System.out.println("Disconnecting from backing services...");
            backingServices.forEach(BackingService::disconnect);
            
            Duration shutdownTime = Duration.between(shutdownStart, Instant.now());
            System.out.println("✓ Graceful shutdown completed in " + shutdownTime.toMillis() + "ms");
            
            shutdownLatch.countDown();
        }
        
        // Handle SIGTERM signal
        public void registerShutdownHook() {
            Runtime.getRuntime().addShutdownHook(new Thread(this::shutdown));
        }
        
        public void addBackingService(BackingService service) {
            backingServices.add(service);
        }
        
        public boolean isRunning() {
            return running;
        }
    }
    
    // Factor XI: Logs as Event Streams
    static class LogStreamer {
        private final BlockingQueue<LogEvent> logQueue;
        private final ExecutorService logProcessor;
        private volatile boolean running;
        
        public LogStreamer() {
            this.logQueue = new LinkedBlockingQueue<>();
            this.logProcessor = Executors.newSingleThreadExecutor();
            this.running = false;
        }
        
        public void start() {
            running = true;
            logProcessor.submit(() -> {
                while (running || !logQueue.isEmpty()) {
                    try {
                        LogEvent event = logQueue.poll(100, TimeUnit.MILLISECONDS);
                        if (event != null) {
                            // Write to stdout (captured by log aggregator in production)
                            System.out.println(event.toJson());
                        }
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                        break;
                    }
                }
            });
        }
        
        public void log(String level, String message, Map<String, Object> context) {
            LogEvent event = new LogEvent(level, message, context);
            logQueue.offer(event);
        }
        
        public void info(String message) {
            log("INFO", message, Collections.emptyMap());
        }
        
        public void error(String message, Exception e) {
            Map<String, Object> context = new HashMap<>();
            context.put("error", e.getClass().getName());
            context.put("stack_trace", Arrays.toString(e.getStackTrace()));
            log("ERROR", message, context);
        }
        
        public void shutdown() {
            running = false;
            logProcessor.shutdown();
        }
    }
    
    static class LogEvent {
        Instant timestamp;
        String level;
        String message;
        Map<String, Object> context;
        
        public LogEvent(String level, String message, Map<String, Object> context) {
            this.timestamp = Instant.now();
            this.level = level;
            this.message = message;
            this.context = context;
        }
        
        public String toJson() {
            StringBuilder json = new StringBuilder("{");
            json.append("\"timestamp\":\"").append(timestamp).append("\",");
            json.append("\"level\":\"").append(level).append("\",");
            json.append("\"message\":\"").append(message).append("\"");
            
            if (!context.isEmpty()) {
                json.append(",\"context\":{");
                context.forEach((k, v) -> 
                    json.append("\"").append(k).append("\":\"").append(v).append("\",")
                );
                json.setLength(json.length() - 1); // Remove trailing comma
                json.append("}");
            }
            
            json.append("}");
            return json.toString();
        }
    }
    
    /**
     * PATTERN 2: CLOUD-NATIVE DESIGN PATTERNS
     * ========================================
     * 
     * Sidecar Pattern - Deploy helper container alongside main container
     * Ambassador Pattern - Proxy for network communication
     * Adapter Pattern - Standardize output from heterogeneous sources
     */
    
    // Sidecar Pattern: Log Shipper
    static class SidecarContainer {
        private final String mainContainerName;
        private final ExecutorService executor;
        private volatile boolean running;
        
        public SidecarContainer(String mainContainerName) {
            this.mainContainerName = mainContainerName;
            this.executor = Executors.newSingleThreadExecutor();
            this.running = false;
        }
        
        // Sidecar runs alongside main container
        public void start() {
            running = true;
            executor.submit(() -> {
                System.out.println("[Sidecar] Started for " + mainContainerName);
                
                while (running) {
                    try {
                        // Read logs from shared volume
                        List<String> logs = readLogsFromVolume();
                        
                        // Ship logs to centralized system
                        if (!logs.isEmpty()) {
                            shipLogsToElasticsearch(logs);
                        }
                        
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                        break;
                    }
                }
            });
        }
        
        private List<String> readLogsFromVolume() {
            // In production: read from /var/log/app shared volume
            return Arrays.asList(
                "2024-01-01 12:00:00 INFO Application started",
                "2024-01-01 12:00:01 INFO Request processed"
            );
        }
        
        private void shipLogsToElasticsearch(List<String> logs) {
            // Simulate shipping to Elasticsearch
            System.out.println("[Sidecar] Shipped " + logs.size() + " log entries");
        }
        
        public void stop() {
            running = false;
            executor.shutdown();
            System.out.println("[Sidecar] Stopped");
        }
    }
    
    // Ambassador Pattern: Database Proxy
    static class AmbassadorProxy {
        private final String targetDatabase;
        private final CircuitBreaker circuitBreaker;
        private final Map<String, Integer> queryCache;
        
        public AmbassadorProxy(String targetDatabase) {
            this.targetDatabase = targetDatabase;
            this.circuitBreaker = new CircuitBreaker(3, Duration.ofSeconds(5));
            this.queryCache = new ConcurrentHashMap<>();
        }
        
        // Ambassador handles complexity: retry, circuit breaking, caching
        public String query(String sql) {
            // Check cache first
            if (queryCache.containsKey(sql)) {
                System.out.println("[Ambassador] Cache hit for query");
                return "cached_result_" + queryCache.get(sql);
            }
            
            // Execute with circuit breaker protection
            try {
                String result = circuitBreaker.execute(
                    () -> executeQuery(sql),
                    () -> "fallback_result"
                );
                
                // Cache result
                queryCache.put(sql, result.hashCode());
                
                return result;
            } catch (Exception e) {
                System.err.println("[Ambassador] Query failed: " + e.getMessage());
                return "error_result";
            }
        }
        
        private String executeQuery(String sql) throws Exception {
            // Simulate database query
            if (Math.random() < 0.1) { // 10% failure rate
                throw new Exception("Database connection timeout");
            }
            
            Thread.sleep(10); // Simulate query time
            return "result_for_" + sql;
        }
    }
    
    static class CircuitBreaker {
        private enum State { CLOSED, OPEN, HALF_OPEN }
        
        private State state;
        private int failureCount;
        private final int failureThreshold;
        private final Duration timeout;
        private Instant lastFailureTime;
        
        public CircuitBreaker(int failureThreshold, Duration timeout) {
            this.state = State.CLOSED;
            this.failureCount = 0;
            this.failureThreshold = failureThreshold;
            this.timeout = timeout;
        }
        
        public <T> T execute(Callable<T> operation, Callable<T> fallback) throws Exception {
            if (state == State.OPEN) {
                if (Duration.between(lastFailureTime, Instant.now()).compareTo(timeout) > 0) {
                    state = State.HALF_OPEN;
                    failureCount = 0;
                } else {
                    return fallback.call();
                }
            }
            
            try {
                T result = operation.call();
                onSuccess();
                return result;
            } catch (Exception e) {
                onFailure();
                return fallback.call();
            }
        }
        
        private void onSuccess() {
            failureCount = 0;
            state = State.CLOSED;
        }
        
        private void onFailure() {
            failureCount++;
            lastFailureTime = Instant.now();
            if (failureCount >= failureThreshold) {
                state = State.OPEN;
            }
        }
    }
    
    /**
     * PATTERN 3: CONTAINER PATTERNS
     * ==============================
     * 
     * Multi-stage builds for optimized images
     * Layer caching strategies
     * Health check patterns
     */
    
    static class ContainerImage {
        private final String name;
        private final List<Layer> layers;
        private long totalSize;
        
        public ContainerImage(String name) {
            this.name = name;
            this.layers = new ArrayList<>();
            this.totalSize = 0;
        }
        
        // Multi-stage build pattern
        public void buildMultiStage() {
            System.out.println("\n=== Multi-Stage Build ===");
            
            // Stage 1: Build stage (large, with build tools)
            System.out.println("Stage 1: Building application...");
            addLayer("base-jdk", 200_000_000); // 200MB JDK
            addLayer("maven-deps", 150_000_000); // 150MB Maven dependencies
            addLayer("source-code", 5_000_000);  // 5MB source code
            addLayer("compiled-app", 10_000_000); // 10MB compiled JAR
            
            // Stage 2: Runtime stage (small, production-ready)
            System.out.println("\nStage 2: Creating runtime image...");
            ContainerImage runtimeImage = new ContainerImage(name + "-runtime");
            runtimeImage.addLayer("base-jre", 80_000_000); // 80MB JRE (smaller than JDK)
            runtimeImage.addLayer("compiled-app", 10_000_000); // 10MB compiled JAR
            
            System.out.println("\n=== Build Complete ===");
            System.out.println("Build stage size: " + (totalSize / 1_000_000) + "MB");
            System.out.println("Runtime stage size: " + (runtimeImage.totalSize / 1_000_000) + "MB");
            System.out.println("Size reduction: " + 
                ((totalSize - runtimeImage.totalSize) * 100 / totalSize) + "%");
        }
        
        private void addLayer(String name, long size) {
            Layer layer = new Layer(name, size);
            layers.add(layer);
            totalSize += size;
            System.out.println("  + Layer: " + name + " (" + (size / 1_000_000) + "MB)");
        }
        
        // Layer caching optimization
        public void optimizeLayerCaching() {
            System.out.println("\n=== Layer Caching Optimization ===");
            System.out.println("Best practices:");
            System.out.println("1. Order layers from least to most frequently changing");
            System.out.println("2. Install system dependencies first (rarely change)");
            System.out.println("3. Copy dependency manifests and install (change occasionally)");
            System.out.println("4. Copy source code last (changes frequently)");
            
            // Example Dockerfile layer ordering:
            System.out.println("\nOptimized Dockerfile structure:");
            System.out.println("  FROM openjdk:11-jre-slim         # Base layer (cached)");
            System.out.println("  RUN apt-get update && ...        # System deps (cached)");
            System.out.println("  COPY pom.xml .                   # Dependencies manifest");
            System.out.println("  RUN mvn dependency:go-offline    # Download deps (cached if pom unchanged)");
            System.out.println("  COPY src/ ./src/                 # Source code (rebuilt on every change)");
            System.out.println("  RUN mvn package                  # Build app");
        }
    }
    
    static class Layer {
        String name;
        long size;
        String checksum;
        
        public Layer(String name, long size) {
            this.name = name;
            this.size = size;
            this.checksum = UUID.randomUUID().toString();
        }
    }
    
    // Container Health Checks
    static class HealthCheckEndpoint {
        private final List<HealthCheck> checks;
        
        public HealthCheckEndpoint() {
            this.checks = new CopyOnWriteArrayList<>();
        }
        
        public void addCheck(HealthCheck check) {
            checks.add(check);
        }
        
        // Kubernetes liveness probe
        public boolean livenessProbe() {
            // Returns true if application is alive (should not be restarted)
            // Check if critical components are not deadlocked
            return checks.stream()
                .filter(HealthCheck::isCritical)
                .allMatch(HealthCheck::isHealthy);
        }
        
        // Kubernetes readiness probe
        public boolean readinessProbe() {
            // Returns true if application can serve traffic
            // Check if all dependencies are available
            return checks.stream()
                .allMatch(HealthCheck::isHealthy);
        }
        
        // Kubernetes startup probe
        public boolean startupProbe() {
            // Returns true if application has finished starting
            // Gives slow-starting apps more time
            return checks.stream()
                .filter(HealthCheck::isStartupCheck)
                .allMatch(HealthCheck::isHealthy);
        }
        
        public Map<String, Object> getHealthStatus() {
            Map<String, Object> status = new HashMap<>();
            status.put("liveness", livenessProbe());
            status.put("readiness", readinessProbe());
            status.put("startup", startupProbe());
            
            Map<String, String> details = new HashMap<>();
            checks.forEach(check -> 
                details.put(check.getName(), check.isHealthy() ? "UP" : "DOWN")
            );
            status.put("details", details);
            
            return status;
        }
    }
    
    interface HealthCheck {
        String getName();
        boolean isHealthy();
        boolean isCritical();
        boolean isStartupCheck();
    }
    
    static class DatabaseHealthCheck implements HealthCheck {
        private final DatabaseService database;
        
        public DatabaseHealthCheck(DatabaseService database) {
            this.database = database;
        }
        
        @Override
        public String getName() {
            return "database";
        }
        
        @Override
        public boolean isHealthy() {
            return database.isHealthy();
        }
        
        @Override
        public boolean isCritical() {
            return true; // Critical for application
        }
        
        @Override
        public boolean isStartupCheck() {
            return true; // Must be ready at startup
        }
    }
    
    /**
     * PATTERN 4: IMMUTABLE INFRASTRUCTURE
     * ===================================
     * 
     * Infrastructure as Code (IaC)
     * Never modify running instances
     * Replace instead of update
     */
    
    static class ImmutableInfrastructure {
        private final Map<String, Server> servers;
        private final Map<String, ServerTemplate> templates;
        private int serverIdCounter;
        
        public ImmutableInfrastructure() {
            this.servers = new ConcurrentHashMap<>();
            this.templates = new ConcurrentHashMap<>();
            this.serverIdCounter = 0;
        }
        
        // Define infrastructure as code
        public void defineTemplate(String templateName, ServerTemplate template) {
            templates.put(templateName, template);
            System.out.println("✓ Defined template: " + templateName);
        }
        
        // Create new server from template (never modify existing)
        public Server createServer(String templateName) {
            ServerTemplate template = templates.get(templateName);
            if (template == null) {
                throw new IllegalArgumentException("Unknown template: " + templateName);
            }
            
            String serverId = "server-" + (++serverIdCounter);
            Server server = new Server(serverId, template);
            servers.put(serverId, server);
            
            System.out.println("✓ Created immutable server: " + serverId);
            System.out.println("  Image: " + template.imageId);
            System.out.println("  Version: " + template.version);
            
            return server;
        }
        
        // Blue-Green deployment: replace old servers with new ones
        public void blueGreenDeploy(String oldTemplate, String newTemplate) {
            System.out.println("\n=== Blue-Green Deployment ===");
            
            // Get all servers running old template (Blue)
            List<Server> blueServers = servers.values().stream()
                .filter(s -> s.template.equals(templates.get(oldTemplate)))
                .collect(Collectors.toList());
            
            System.out.println("Blue environment: " + blueServers.size() + " servers");
            
            // Create new servers with new template (Green)
            List<Server> greenServers = new ArrayList<>();
            for (int i = 0; i < blueServers.size(); i++) {
                Server greenServer = createServer(newTemplate);
                greenServer.start();
                greenServers.add(greenServer);
            }
            
            System.out.println("Green environment: " + greenServers.size() + " servers created");
            
            // Switch traffic to green
            System.out.println("Switching traffic to green environment...");
            greenServers.forEach(s -> s.receiveTraffic = true);
            blueServers.forEach(s -> s.receiveTraffic = false);
            
            // Wait and monitor
            System.out.println("Monitoring green environment...");
            
            // If successful, terminate blue servers
            System.out.println("Deployment successful! Terminating blue environment...");
            blueServers.forEach(this::terminateServer);
        }
        
        // Rolling update: gradually replace old servers
        public void rollingUpdate(String oldTemplate, String newTemplate) {
            System.out.println("\n=== Rolling Update ===");
            
            List<Server> oldServers = servers.values().stream()
                .filter(s -> s.template.equals(templates.get(oldTemplate)))
                .collect(Collectors.toList());
            
            System.out.println("Updating " + oldServers.size() + " servers...");
            
            // Update 25% at a time
            int batchSize = Math.max(1, oldServers.size() / 4);
            
            for (int i = 0; i < oldServers.size(); i += batchSize) {
                int endIndex = Math.min(i + batchSize, oldServers.size());
                List<Server> batch = oldServers.subList(i, endIndex);
                
                System.out.println("\nBatch " + (i/batchSize + 1) + ": Updating " + batch.size() + " servers");
                
                // Create new servers
                List<Server> newServers = new ArrayList<>();
                for (int j = 0; j < batch.size(); j++) {
                    Server newServer = createServer(newTemplate);
                    newServer.start();
                    newServers.add(newServer);
                }
                
                // Wait for new servers to be healthy
                System.out.println("Waiting for new servers to be healthy...");
                
                // Switch traffic
                newServers.forEach(s -> s.receiveTraffic = true);
                batch.forEach(s -> s.receiveTraffic = false);
                
                // Terminate old servers
                batch.forEach(this::terminateServer);
                
                System.out.println("✓ Batch complete");
            }
            
            System.out.println("\n✓ Rolling update complete!");
        }
        
        private void terminateServer(Server server) {
            server.stop();
            servers.remove(server.id);
            System.out.println("✓ Terminated server: " + server.id);
        }
        
        public void listServers() {
            System.out.println("\n=== Active Servers ===");
            servers.values().forEach(server -> {
                String traffic = server.receiveTraffic ? "ACTIVE" : "DRAINING";
                System.out.println(server.id + " | " + server.template.version + " | " + traffic);
            });
        }
    }
    
    static class ServerTemplate {
        String imageId;
        String version;
        Map<String, String> config;
        
        public ServerTemplate(String imageId, String version) {
            this.imageId = imageId;
            this.version = version;
            this.config = new HashMap<>();
        }
    }
    
    static class Server {
        String id;
        ServerTemplate template;
        boolean running;
        boolean receiveTraffic;
        
        public Server(String id, ServerTemplate template) {
            this.id = id;
            this.template = template;
            this.running = false;
            this.receiveTraffic = false;
        }
        
        public void start() {
            running = true;
        }
        
        public void stop() {
            running = false;
            receiveTraffic = false;
        }
    }
    
    /**
     * DEMONSTRATION
     */
    public static void main(String[] args) throws Exception {
        System.out.println("=".repeat(70));
        System.out.println("DAY 33: CLOUD-NATIVE ARCHITECTURE & KUBERNETES PATTERNS");
        System.out.println("=".repeat(70));
        
        // Demo 1: 12-Factor App
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 1: 12-FACTOR APP IMPLEMENTATION");
        System.out.println("=".repeat(70));
        
        // Configuration Management
        ConfigurationManager config = new ConfigurationManager();
        Map<String, String> env = new HashMap<>();
        env.put("ENVIRONMENT", "production");
        env.put("DATABASE_URL", "postgres://prod-db:5432/myapp");
        env.put("REDIS_URL", "redis://prod-cache:6379");
        config.loadFromEnvironment(env);
        
        Map<String, String> secrets = new HashMap<>();
        secrets.put("DB_PASSWORD", "secret123");
        secrets.put("API_KEY", "key456");
        config.loadSecrets(secrets);
        
        System.out.println("\nConfiguration loaded:");
        System.out.println("Environment: " + config.get("ENVIRONMENT"));
        System.out.println("Database URL: " + config.get("DATABASE_URL"));
        System.out.println("Port: " + config.get("PORT"));
        
        // Backing Services
        BackingServiceRegistry serviceRegistry = new BackingServiceRegistry();
        DatabaseService db = new DatabaseService(config.get("DATABASE_URL"));
        CacheService cache = new CacheService(config.get("REDIS_URL"));
        
        db.connect();
        cache.connect();
        
        serviceRegistry.register("database", db);
        serviceRegistry.register("cache", cache);
        serviceRegistry.healthCheck();
        
        // Stateless Request Handling
        StatelessRequestHandler handler = new StatelessRequestHandler(serviceRegistry);
        Response response1 = handler.handleRequest(new Request("/api/users", "session123"));
        Response response2 = handler.handleRequest(new Request("/api/orders", "session123"));
        System.out.println("\nRequest 1: " + response1.body);
        System.out.println("Request 2: " + response2.body);
        
        // Disposability
        DisposableApplication app = new DisposableApplication();
        app.addBackingService(db);
        app.addBackingService(cache);
        app.registerShutdownHook();
        app.start();
        
        Thread.sleep(100); // Simulate some runtime
        app.shutdown();
        
        // Logs as Event Streams
        LogStreamer logger = new LogStreamer();
        logger.start();
        logger.info("Application started successfully");
        logger.log("DEBUG", "Processing request", Map.of("request_id", "123", "path", "/api/users"));
        Thread.sleep(100);
        logger.shutdown();
        
        // Demo 2: Cloud-Native Patterns
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 2: CLOUD-NATIVE DESIGN PATTERNS");
        System.out.println("=".repeat(70));
        
        // Sidecar Pattern
        SidecarContainer sidecar = new SidecarContainer("main-app");
        sidecar.start();
        Thread.sleep(2000);
        sidecar.stop();
        
        // Ambassador Pattern
        AmbassadorProxy ambassador = new AmbassadorProxy("postgres://db:5432");
        System.out.println("\n[Ambassador] Query 1: " + ambassador.query("SELECT * FROM users"));
        System.out.println("[Ambassador] Query 2: " + ambassador.query("SELECT * FROM users")); // Cached
        System.out.println("[Ambassador] Query 3: " + ambassador.query("SELECT * FROM orders"));
        
        // Demo 3: Container Patterns
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 3: CONTAINER PATTERNS");
        System.out.println("=".repeat(70));
        
        ContainerImage image = new ContainerImage("myapp");
        image.buildMultiStage();
        image.optimizeLayerCaching();
        
        // Health Checks
        HealthCheckEndpoint healthCheck = new HealthCheckEndpoint();
        healthCheck.addCheck(new DatabaseHealthCheck(db));
        
        System.out.println("\n=== Health Check Status ===");
        Map<String, Object> health = healthCheck.getHealthStatus();
        System.out.println("Liveness: " + health.get("liveness"));
        System.out.println("Readiness: " + health.get("readiness"));
        System.out.println("Startup: " + health.get("startup"));
        
        // Demo 4: Immutable Infrastructure
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 4: IMMUTABLE INFRASTRUCTURE");
        System.out.println("=".repeat(70));
        
        ImmutableInfrastructure infra = new ImmutableInfrastructure();
        
        // Define templates
        ServerTemplate v1Template = new ServerTemplate("ami-12345", "v1.0.0");
        ServerTemplate v2Template = new ServerTemplate("ami-67890", "v2.0.0");
        ServerTemplate v3Template = new ServerTemplate("ami-abcdef", "v3.0.0");
        
        infra.defineTemplate("app-v1", v1Template);
        infra.defineTemplate("app-v2", v2Template);
        infra.defineTemplate("app-v3", v3Template);
        
        // Create initial deployment
        System.out.println("\n--- Initial Deployment (v1) ---");
        for (int i = 0; i < 4; i++) {
            Server server = infra.createServer("app-v1");
            server.start();
            server.receiveTraffic = true;
        }
        infra.listServers();
        
        // Blue-Green deployment to v2
        infra.blueGreenDeploy("app-v1", "app-v2");
        infra.listServers();
        
        // Rolling update to v3
        infra.rollingUpdate("app-v2", "app-v3");
        infra.listServers();
        
        System.out.println("\n" + "=".repeat(70));
        System.out.println("ALL DEMONSTRATIONS COMPLETED SUCCESSFULLY!");
        System.out.println("=".repeat(70));
    }
}
