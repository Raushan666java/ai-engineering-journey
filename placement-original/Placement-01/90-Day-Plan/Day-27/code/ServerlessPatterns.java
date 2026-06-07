/**
 * DAY 27: INFRASTRUCTURE AS CODE & SERVERLESS PATTERNS
 * 
 * Topics Covered:
 * 1. Infrastructure as Code (IaC) Patterns
 * 2. Serverless Computing Patterns
 * 3. Function as a Service (FaaS)
 * 4. Event-Driven Serverless Architecture
 * 5. API Gateway for Serverless
 * 6. State Management in Serverless
 * 7. Cold Start Optimization
 * 8. Serverless Workflows
 * 
 * Production-ready implementations with real-world examples
 */

import java.util.*;
import java.util.concurrent.*;
import java.time.*;
import java.util.function.*;
import java.util.stream.*;

public class ServerlessPatterns {

    // ==================== 1. FUNCTION AS A SERVICE (FaaS) ====================
    
    /**
     * FaaS Runtime
     * Manages serverless function execution with auto-scaling
     * 
     * Time Complexity: O(1) for function invocation
     * Space Complexity: O(f) where f = number of functions
     */
    static class FaaSRuntime {
        static class Function {
            String name;
            String runtime; // nodejs, python, java, go
            int memoryMB;
            int timeoutSeconds;
            Map<String, String> environment;
            FunctionHandler handler;
            FunctionMetrics metrics;
            
            Function(String name, String runtime, int memoryMB, int timeoutSeconds) {
                this.name = name;
                this.runtime = runtime;
                this.memoryMB = memoryMB;
                this.timeoutSeconds = timeoutSeconds;
                this.environment = new HashMap<>();
                this.metrics = new FunctionMetrics();
            }
            
            void setHandler(FunctionHandler handler) {
                this.handler = handler;
            }
            
            void setEnvironment(String key, String value) {
                environment.put(key, value);
            }
            
            @Override
            public String toString() {
                return String.format("Function[%s] Runtime: %s, Memory: %dMB, Timeout: %ds",
                    name, runtime, memoryMB, timeoutSeconds);
            }
        }
        
        @FunctionalInterface
        interface FunctionHandler {
            FunctionResponse handle(FunctionRequest request) throws Exception;
        }
        
        static class FunctionRequest {
            Map<String, String> headers;
            Map<String, String> queryParams;
            String body;
            Map<String, Object> context;
            
            FunctionRequest() {
                this.headers = new HashMap<>();
                this.queryParams = new HashMap<>();
                this.context = new HashMap<>();
            }
        }
        
        static class FunctionResponse {
            int statusCode;
            Map<String, String> headers;
            String body;
            
            FunctionResponse(int statusCode, String body) {
                this.statusCode = statusCode;
                this.body = body;
                this.headers = new HashMap<>();
            }
            
            static FunctionResponse ok(String body) {
                return new FunctionResponse(200, body);
            }
            
            static FunctionResponse error(int statusCode, String message) {
                return new FunctionResponse(statusCode, message);
            }
        }
        
        static class FunctionMetrics {
            long totalInvocations;
            long successfulInvocations;
            long failedInvocations;
            long totalDuration;
            long coldStarts;
            double averageDuration;
            
            void recordInvocation(boolean success, long duration, boolean coldStart) {
                totalInvocations++;
                if (success) {
                    successfulInvocations++;
                } else {
                    failedInvocations++;
                }
                totalDuration += duration;
                if (coldStart) {
                    coldStarts++;
                }
                averageDuration = (double) totalDuration / totalInvocations;
            }
            
            double getSuccessRate() {
                return totalInvocations == 0 ? 0 : 
                    (double) successfulInvocations / totalInvocations * 100;
            }
            
            double getColdStartRate() {
                return totalInvocations == 0 ? 0 :
                    (double) coldStarts / totalInvocations * 100;
            }
            
            @Override
            public String toString() {
                return String.format("Invocations: %d, Success: %.1f%%, Avg Duration: %.0fms, Cold Starts: %.1f%%",
                    totalInvocations, getSuccessRate(), averageDuration, getColdStartRate());
            }
        }
        
        static class FunctionInstance {
            String instanceId;
            Function function;
            Instant lastUsed;
            boolean warm;
            
            FunctionInstance(String instanceId, Function function) {
                this.instanceId = instanceId;
                this.function = function;
                this.lastUsed = Instant.now();
                this.warm = false;
            }
            
            FunctionResponse invoke(FunctionRequest request) throws Exception {
                boolean coldStart = !warm;
                warm = true;
                lastUsed = Instant.now();
                
                long startTime = System.currentTimeMillis();
                
                try {
                    // Simulate cold start delay
                    if (coldStart) {
                        Thread.sleep(500); // Cold start overhead
                    }
                    
                    FunctionResponse response = function.handler.handle(request);
                    long duration = System.currentTimeMillis() - startTime;
                    function.metrics.recordInvocation(true, duration, coldStart);
                    
                    return response;
                } catch (Exception e) {
                    long duration = System.currentTimeMillis() - startTime;
                    function.metrics.recordInvocation(false, duration, coldStart);
                    throw e;
                }
            }
            
            boolean isExpired(int idleTimeoutSeconds) {
                return Duration.between(lastUsed, Instant.now()).getSeconds() > idleTimeoutSeconds;
            }
        }
        
        private final Map<String, Function> functions;
        private final Map<String, List<FunctionInstance>> instancePools;
        private final int idleTimeoutSeconds;
        private final ScheduledExecutorService cleaner;
        
        FaaSRuntime(int idleTimeoutSeconds) {
            this.functions = new ConcurrentHashMap<>();
            this.instancePools = new ConcurrentHashMap<>();
            this.idleTimeoutSeconds = idleTimeoutSeconds;
            this.cleaner = Executors.newSingleThreadScheduledExecutor();
            
            // Start instance cleanup task
            cleaner.scheduleAtFixedRate(this::cleanupIdleInstances, 10, 10, TimeUnit.SECONDS);
        }
        
        void registerFunction(Function function) {
            functions.put(function.name, function);
            instancePools.put(function.name, new CopyOnWriteArrayList<>());
        }
        
        FunctionResponse invokeFunction(String functionName, FunctionRequest request) throws Exception {
            Function function = functions.get(functionName);
            if (function == null) {
                throw new IllegalArgumentException("Function not found: " + functionName);
            }
            
            FunctionInstance instance = getOrCreateInstance(function);
            return instance.invoke(request);
        }
        
        private FunctionInstance getOrCreateInstance(Function function) {
            List<FunctionInstance> instances = instancePools.get(function.name);
            
            // Try to find a warm instance
            Optional<FunctionInstance> warmInstance = instances.stream()
                .filter(i -> i.warm && !i.isExpired(idleTimeoutSeconds))
                .findFirst();
            
            if (warmInstance.isPresent()) {
                return warmInstance.get();
            }
            
            // Create new instance
            String instanceId = UUID.randomUUID().toString();
            FunctionInstance newInstance = new FunctionInstance(instanceId, function);
            instances.add(newInstance);
            
            return newInstance;
        }
        
        private void cleanupIdleInstances() {
            instancePools.values().forEach(instances -> {
                instances.removeIf(instance -> instance.isExpired(idleTimeoutSeconds));
            });
        }
        
        Function getFunction(String name) {
            return functions.get(name);
        }
        
        void shutdown() {
            cleaner.shutdown();
        }
    }

    // ==================== 2. EVENT-DRIVEN SERVERLESS ====================
    
    /**
     * Event-Driven Serverless Architecture
     * Trigger functions based on events from various sources
     * 
     * Time Complexity: O(1) for event dispatch
     * Space Complexity: O(e) where e = number of events
     */
    static class EventDrivenServerless {
        static class Event {
            String id;
            String source;
            String type;
            Map<String, Object> data;
            Instant timestamp;
            
            Event(String source, String type, Map<String, Object> data) {
                this.id = UUID.randomUUID().toString();
                this.source = source;
                this.type = type;
                this.data = new HashMap<>(data);
                this.timestamp = Instant.now();
            }
            
            @Override
            public String toString() {
                return String.format("Event[%s] Source: %s, Type: %s, Time: %s",
                    id, source, type, timestamp);
            }
        }
        
        static class EventTrigger {
            String functionName;
            String eventSource;
            String eventType;
            Predicate<Event> filter;
            
            EventTrigger(String functionName, String eventSource, String eventType) {
                this.functionName = functionName;
                this.eventSource = eventSource;
                this.eventType = eventType;
                this.filter = e -> true; // No filter by default
            }
            
            EventTrigger withFilter(Predicate<Event> filter) {
                this.filter = filter;
                return this;
            }
            
            boolean matches(Event event) {
                return eventSource.equals(event.source) &&
                       eventType.equals(event.type) &&
                       filter.test(event);
            }
        }
        
        static class EventBus {
            private final Map<String, List<EventTrigger>> triggers;
            private final FaaSRuntime runtime;
            private final Queue<Event> eventQueue;
            private final ExecutorService eventProcessor;
            private final List<Event> eventHistory;
            
            EventBus(FaaSRuntime runtime) {
                this.triggers = new ConcurrentHashMap<>();
                this.runtime = runtime;
                this.eventQueue = new ConcurrentLinkedQueue<>();
                this.eventProcessor = Executors.newFixedThreadPool(4);
                this.eventHistory = new CopyOnWriteArrayList<>();
                
                // Start event processing
                startEventProcessing();
            }
            
            void addTrigger(EventTrigger trigger) {
                String key = trigger.eventSource + ":" + trigger.eventType;
                triggers.computeIfAbsent(key, k -> new CopyOnWriteArrayList<>())
                       .add(trigger);
            }
            
            void publishEvent(Event event) {
                eventQueue.offer(event);
                eventHistory.add(event);
            }
            
            private void startEventProcessing() {
                for (int i = 0; i < 4; i++) {
                    eventProcessor.submit(() -> {
                        while (!Thread.currentThread().isInterrupted()) {
                            try {
                                Event event = eventQueue.poll();
                                if (event != null) {
                                    processEvent(event);
                                } else {
                                    Thread.sleep(100);
                                }
                            } catch (InterruptedException e) {
                                Thread.currentThread().interrupt();
                                break;
                            }
                        }
                    });
                }
            }
            
            private void processEvent(Event event) {
                String key = event.source + ":" + event.type;
                List<EventTrigger> matchingTriggers = triggers.getOrDefault(key, Collections.emptyList());
                
                matchingTriggers.stream()
                    .filter(trigger -> trigger.matches(event))
                    .forEach(trigger -> {
                        try {
                            FaaSRuntime.FunctionRequest request = new FaaSRuntime.FunctionRequest();
                            request.context.put("event", event);
                            request.body = event.data.toString();
                            
                            runtime.invokeFunction(trigger.functionName, request);
                        } catch (Exception e) {
                            System.err.println("Error invoking function: " + e.getMessage());
                        }
                    });
            }
            
            List<Event> getEventHistory() {
                return new ArrayList<>(eventHistory);
            }
            
            void shutdown() {
                eventProcessor.shutdown();
            }
        }
    }

    // ==================== 3. SERVERLESS API GATEWAY ====================
    
    /**
     * API Gateway for Serverless Functions
     * Routes HTTP requests to serverless functions
     * 
     * Time Complexity: O(1) for route matching
     * Space Complexity: O(r) where r = number of routes
     */
    static class ServerlessAPIGateway {
        static class Route {
            String path;
            String method;
            String functionName;
            List<String> requiredParams;
            Map<String, String> responseHeaders;
            RateLimiter rateLimiter;
            
            Route(String method, String path, String functionName) {
                this.method = method;
                this.path = path;
                this.functionName = functionName;
                this.requiredParams = new ArrayList<>();
                this.responseHeaders = new HashMap<>();
                this.responseHeaders.put("Content-Type", "application/json");
            }
            
            Route withRateLimit(int requestsPerSecond) {
                this.rateLimiter = new RateLimiter(requestsPerSecond);
                return this;
            }
            
            Route withRequiredParam(String param) {
                this.requiredParams.add(param);
                return this;
            }
            
            boolean matches(String method, String path) {
                return this.method.equals(method) && pathMatches(path);
            }
            
            private boolean pathMatches(String requestPath) {
                String[] routeParts = path.split("/");
                String[] requestParts = requestPath.split("/");
                
                if (routeParts.length != requestParts.length) {
                    return false;
                }
                
                for (int i = 0; i < routeParts.length; i++) {
                    if (!routeParts[i].startsWith("{") && !routeParts[i].equals(requestParts[i])) {
                        return false;
                    }
                }
                
                return true;
            }
            
            Map<String, String> extractPathParams(String requestPath) {
                Map<String, String> params = new HashMap<>();
                String[] routeParts = path.split("/");
                String[] requestParts = requestPath.split("/");
                
                for (int i = 0; i < routeParts.length; i++) {
                    if (routeParts[i].startsWith("{") && routeParts[i].endsWith("}")) {
                        String paramName = routeParts[i].substring(1, routeParts[i].length() - 1);
                        params.put(paramName, requestParts[i]);
                    }
                }
                
                return params;
            }
        }
        
        static class RateLimiter {
            private final int maxRequests;
            private final Map<String, Queue<Long>> requestTimestamps;
            
            RateLimiter(int maxRequestsPerSecond) {
                this.maxRequests = maxRequestsPerSecond;
                this.requestTimestamps = new ConcurrentHashMap<>();
            }
            
            boolean allowRequest(String clientId) {
                Queue<Long> timestamps = requestTimestamps.computeIfAbsent(
                    clientId, k -> new ConcurrentLinkedQueue<>()
                );
                
                long now = System.currentTimeMillis();
                long oneSecondAgo = now - 1000;
                
                // Remove old timestamps
                timestamps.removeIf(t -> t < oneSecondAgo);
                
                if (timestamps.size() >= maxRequests) {
                    return false;
                }
                
                timestamps.offer(now);
                return true;
            }
        }
        
        static class APIRequest {
            String method;
            String path;
            Map<String, String> headers;
            Map<String, String> queryParams;
            String body;
            String clientId;
            
            APIRequest(String method, String path) {
                this.method = method;
                this.path = path;
                this.headers = new HashMap<>();
                this.queryParams = new HashMap<>();
                this.clientId = "default";
            }
        }
        
        static class APIResponse {
            int statusCode;
            Map<String, String> headers;
            String body;
            
            APIResponse(int statusCode, String body) {
                this.statusCode = statusCode;
                this.headers = new HashMap<>();
                this.body = body;
            }
        }
        
        private final List<Route> routes;
        private final FaaSRuntime runtime;
        private final Map<String, Long> requestCounts;
        
        ServerlessAPIGateway(FaaSRuntime runtime) {
            this.routes = new CopyOnWriteArrayList<>();
            this.runtime = runtime;
            this.requestCounts = new ConcurrentHashMap<>();
        }
        
        void addRoute(Route route) {
            routes.add(route);
        }
        
        APIResponse handleRequest(APIRequest request) {
            // Find matching route
            Route route = routes.stream()
                .filter(r -> r.matches(request.method, request.path))
                .findFirst()
                .orElse(null);
            
            if (route == null) {
                return new APIResponse(404, "{\"error\":\"Route not found\"}");
            }
            
            // Check rate limit
            if (route.rateLimiter != null && !route.rateLimiter.allowRequest(request.clientId)) {
                return new APIResponse(429, "{\"error\":\"Rate limit exceeded\"}");
            }
            
            // Validate required parameters
            for (String param : route.requiredParams) {
                if (!request.queryParams.containsKey(param)) {
                    return new APIResponse(400, "{\"error\":\"Missing required parameter: " + param + "\"}");
                }
            }
            
            // Extract path parameters
            Map<String, String> pathParams = route.extractPathParams(request.path);
            
            try {
                // Create function request
                FaaSRuntime.FunctionRequest funcRequest = new FaaSRuntime.FunctionRequest();
                funcRequest.headers.putAll(request.headers);
                funcRequest.queryParams.putAll(request.queryParams);
                funcRequest.queryParams.putAll(pathParams);
                funcRequest.body = request.body;
                
                // Invoke function
                FaaSRuntime.FunctionResponse funcResponse = runtime.invokeFunction(
                    route.functionName, funcRequest
                );
                
                // Track request
                requestCounts.merge(route.functionName, 1L, Long::sum);
                
                // Create API response
                APIResponse response = new APIResponse(funcResponse.statusCode, funcResponse.body);
                response.headers.putAll(route.responseHeaders);
                response.headers.putAll(funcResponse.headers);
                
                return response;
            } catch (Exception e) {
                return new APIResponse(500, "{\"error\":\"" + e.getMessage() + "\"}");
            }
        }
        
        Map<String, Long> getRequestCounts() {
            return new HashMap<>(requestCounts);
        }
    }

    // ==================== 4. SERVERLESS WORKFLOWS ====================
    
    /**
     * Serverless Workflow Engine (Step Functions)
     * Orchestrates multiple serverless functions into workflows
     * 
     * Time Complexity: O(n) where n = number of steps
     * Space Complexity: O(n)
     */
    static class ServerlessWorkflow {
        interface WorkflowStep {
            String getName();
            StepResult execute(Map<String, Object> input) throws Exception;
        }
        
        static class StepResult {
            boolean success;
            Map<String, Object> output;
            String error;
            
            StepResult(boolean success, Map<String, Object> output) {
                this.success = success;
                this.output = output;
            }
            
            static StepResult success(Map<String, Object> output) {
                return new StepResult(true, output);
            }
            
            static StepResult failure(String error) {
                StepResult result = new StepResult(false, new HashMap<>());
                result.error = error;
                return result;
            }
        }
        
        static class FunctionStep implements WorkflowStep {
            String name;
            String functionName;
            FaaSRuntime runtime;
            
            FunctionStep(String name, String functionName, FaaSRuntime runtime) {
                this.name = name;
                this.functionName = functionName;
                this.runtime = runtime;
            }
            
            @Override
            public String getName() {
                return name;
            }
            
            @Override
            public StepResult execute(Map<String, Object> input) throws Exception {
                FaaSRuntime.FunctionRequest request = new FaaSRuntime.FunctionRequest();
                request.context.putAll(input);
                
                FaaSRuntime.FunctionResponse response = runtime.invokeFunction(functionName, request);
                
                if (response.statusCode >= 200 && response.statusCode < 300) {
                    Map<String, Object> output = new HashMap<>(input);
                    output.put(name + "_result", response.body);
                    return StepResult.success(output);
                } else {
                    return StepResult.failure(response.body);
                }
            }
        }
        
        static class ParallelStep implements WorkflowStep {
            String name;
            List<WorkflowStep> steps;
            ExecutorService executor;
            
            ParallelStep(String name, List<WorkflowStep> steps) {
                this.name = name;
                this.steps = steps;
                this.executor = Executors.newFixedThreadPool(steps.size());
            }
            
            @Override
            public String getName() {
                return name;
            }
            
            @Override
            public StepResult execute(Map<String, Object> input) throws Exception {
                List<Future<StepResult>> futures = new ArrayList<>();
                
                for (WorkflowStep step : steps) {
                    futures.add(executor.submit(() -> step.execute(input)));
                }
                
                Map<String, Object> combinedOutput = new HashMap<>(input);
                
                for (int i = 0; i < futures.size(); i++) {
                    StepResult result = futures.get(i).get();
                    if (!result.success) {
                        return result;
                    }
                    combinedOutput.putAll(result.output);
                }
                
                return StepResult.success(combinedOutput);
            }
        }
        
        static class ChoiceStep implements WorkflowStep {
            String name;
            Predicate<Map<String, Object>> condition;
            WorkflowStep trueStep;
            WorkflowStep falseStep;
            
            ChoiceStep(String name, Predicate<Map<String, Object>> condition,
                      WorkflowStep trueStep, WorkflowStep falseStep) {
                this.name = name;
                this.condition = condition;
                this.trueStep = trueStep;
                this.falseStep = falseStep;
            }
            
            @Override
            public String getName() {
                return name;
            }
            
            @Override
            public StepResult execute(Map<String, Object> input) throws Exception {
                if (condition.test(input)) {
                    return trueStep.execute(input);
                } else {
                    return falseStep != null ? falseStep.execute(input) : StepResult.success(input);
                }
            }
        }
        
        static class Workflow {
            String name;
            List<WorkflowStep> steps;
            Map<String, Object> initialInput;
            List<WorkflowExecution> executions;
            
            Workflow(String name) {
                this.name = name;
                this.steps = new ArrayList<>();
                this.initialInput = new HashMap<>();
                this.executions = new ArrayList<>();
            }
            
            void addStep(WorkflowStep step) {
                steps.add(step);
            }
            
            void setInitialInput(Map<String, Object> input) {
                this.initialInput = new HashMap<>(input);
            }
            
            WorkflowExecution execute() {
                WorkflowExecution execution = new WorkflowExecution(name);
                executions.add(execution);
                
                Map<String, Object> currentState = new HashMap<>(initialInput);
                
                for (WorkflowStep step : steps) {
                    try {
                        long startTime = System.currentTimeMillis();
                        StepResult result = step.execute(currentState);
                        long duration = System.currentTimeMillis() - startTime;
                        
                        execution.addStepExecution(step.getName(), result.success, duration);
                        
                        if (!result.success) {
                            execution.markFailed(result.error);
                            return execution;
                        }
                        
                        currentState = result.output;
                    } catch (Exception e) {
                        execution.markFailed(e.getMessage());
                        return execution;
                    }
                }
                
                execution.markCompleted(currentState);
                return execution;
            }
        }
        
        static class WorkflowExecution {
            String workflowName;
            String executionId;
            Instant startTime;
            Instant endTime;
            String status; // RUNNING, SUCCEEDED, FAILED
            Map<String, Object> output;
            String error;
            List<StepExecution> stepExecutions;
            
            static class StepExecution {
                String stepName;
                boolean success;
                long durationMs;
                Instant timestamp;
                
                StepExecution(String stepName, boolean success, long durationMs) {
                    this.stepName = stepName;
                    this.success = success;
                    this.durationMs = durationMs;
                    this.timestamp = Instant.now();
                }
                
                @Override
                public String toString() {
                    return String.format("%s: %s (%.0fms)",
                        stepName, success ? "SUCCESS" : "FAILED", (double)durationMs);
                }
            }
            
            WorkflowExecution(String workflowName) {
                this.workflowName = workflowName;
                this.executionId = UUID.randomUUID().toString();
                this.startTime = Instant.now();
                this.status = "RUNNING";
                this.stepExecutions = new ArrayList<>();
            }
            
            void addStepExecution(String stepName, boolean success, long duration) {
                stepExecutions.add(new StepExecution(stepName, success, duration));
            }
            
            void markCompleted(Map<String, Object> output) {
                this.status = "SUCCEEDED";
                this.endTime = Instant.now();
                this.output = output;
            }
            
            void markFailed(String error) {
                this.status = "FAILED";
                this.endTime = Instant.now();
                this.error = error;
            }
            
            long getDurationMs() {
                return Duration.between(startTime, endTime != null ? endTime : Instant.now()).toMillis();
            }
            
            @Override
            public String toString() {
                return String.format("Execution[%s] Status: %s, Duration: %.0fms, Steps: %d",
                    executionId, status, (double)getDurationMs(), stepExecutions.size());
            }
        }
    }

    // ==================== DEMONSTRATIONS ====================
    
    public static void main(String[] args) throws Exception {
        demonstrateFaaS();
        demonstrateEventDriven();
        demonstrateAPIGateway();
        demonstrateWorkflows();
    }
    
    private static void demonstrateFaaS() throws Exception {
        System.out.println("=== FUNCTION AS A SERVICE DEMONSTRATION ===\n");
        
        FaaSRuntime runtime = new FaaSRuntime(30);
        
        // Register a simple function
        FaaSRuntime.Function helloFunction = new FaaSRuntime.Function(
            "hello-world", "java", 128, 5
        );
        helloFunction.setEnvironment("GREETING", "Hello");
        helloFunction.setHandler(request -> {
            String name = request.queryParams.getOrDefault("name", "World");
            String greeting = helloFunction.environment.get("GREETING");
            return FaaSRuntime.FunctionResponse.ok(greeting + ", " + name + "!");
        });
        
        runtime.registerFunction(helloFunction);
        
        System.out.println("Registered function: " + helloFunction);
        
        // Invoke function multiple times
        System.out.println("\nInvoking function...");
        for (int i = 0; i < 5; i++) {
            FaaSRuntime.FunctionRequest request = new FaaSRuntime.FunctionRequest();
            request.queryParams.put("name", "User" + i);
            
            FaaSRuntime.FunctionResponse response = runtime.invokeFunction("hello-world", request);
            System.out.printf("Invocation %d: %s (Status: %d)%n",
                i + 1, response.body, response.statusCode);
            
            Thread.sleep(100);
        }
        
        System.out.println("\nFunction Metrics:");
        System.out.println(helloFunction.metrics);
        
        runtime.shutdown();
        System.out.println();
    }
    
    private static void demonstrateEventDriven() throws Exception {
        System.out.println("=== EVENT-DRIVEN SERVERLESS DEMONSTRATION ===\n");
        
        FaaSRuntime runtime = new FaaSRuntime(30);
        
        // Register event handler function
        FaaSRuntime.Function eventHandler = new FaaSRuntime.Function(
            "event-processor", "java", 256, 10
        );
        eventHandler.setHandler(request -> {
            EventDrivenServerless.Event event = 
                (EventDrivenServerless.Event) request.context.get("event");
            System.out.printf("Processing event: %s%n", event);
            return FaaSRuntime.FunctionResponse.ok("Event processed");
        });
        
        runtime.registerFunction(eventHandler);
        
        // Create event bus and add trigger
        EventDrivenServerless.EventBus eventBus = new EventDrivenServerless.EventBus(runtime);
        
        EventDrivenServerless.EventTrigger trigger = new EventDrivenServerless.EventTrigger(
            "event-processor", "S3", "ObjectCreated"
        );
        eventBus.addTrigger(trigger);
        
        System.out.println("Event trigger registered\n");
        
        // Publish events
        System.out.println("Publishing events...");
        for (int i = 0; i < 3; i++) {
            Map<String, Object> data = Map.of(
                "bucket", "my-bucket",
                "key", "file-" + i + ".txt"
            );
            EventDrivenServerless.Event event = new EventDrivenServerless.Event(
                "S3", "ObjectCreated", data
            );
            eventBus.publishEvent(event);
            Thread.sleep(200);
        }
        
        Thread.sleep(1000); // Wait for processing
        
        System.out.println("\nEvent History:");
        eventBus.getEventHistory().forEach(System.out::println);
        
        eventBus.shutdown();
        runtime.shutdown();
        System.out.println();
    }
    
    private static void demonstrateAPIGateway() throws Exception {
        System.out.println("=== SERVERLESS API GATEWAY DEMONSTRATION ===\n");
        
        FaaSRuntime runtime = new FaaSRuntime(30);
        
        // Register API functions
        FaaSRuntime.Function getUserFunction = new FaaSRuntime.Function(
            "get-user", "java", 128, 5
        );
        getUserFunction.setHandler(request -> {
            String userId = request.queryParams.get("id");
            String response = "{\"id\":\"" + userId + "\",\"name\":\"John Doe\"}";
            return FaaSRuntime.FunctionResponse.ok(response);
        });
        runtime.registerFunction(getUserFunction);
        
        // Create API Gateway
        ServerlessAPIGateway gateway = new ServerlessAPIGateway(runtime);
        
        // Add routes
        gateway.addRoute(new ServerlessAPIGateway.Route("GET", "/api/users/{id}", "get-user")
            .withRateLimit(10)
            .withRequiredParam("id"));
        
        System.out.println("API Gateway configured\n");
        
        // Test API calls
        System.out.println("Making API requests...");
        for (int i = 1; i <= 3; i++) {
            ServerlessAPIGateway.APIRequest request = new ServerlessAPIGateway.APIRequest(
                "GET", "/api/users/" + i
            );
            request.queryParams.put("id", String.valueOf(i));
            request.clientId = "client-1";
            
            ServerlessAPIGateway.APIResponse response = gateway.handleRequest(request);
            System.out.printf("Request %d: Status %d, Body: %s%n",
                i, response.statusCode, response.body);
        }
        
        System.out.println("\nRequest counts:");
        gateway.getRequestCounts().forEach((func, count) ->
            System.out.printf("%s: %d requests%n", func, count));
        
        runtime.shutdown();
        System.out.println();
    }
    
    private static void demonstrateWorkflows() throws Exception {
        System.out.println("=== SERVERLESS WORKFLOWS DEMONSTRATION ===\n");
        
        FaaSRuntime runtime = new FaaSRuntime(30);
        
        // Register workflow functions
        FaaSRuntime.Function validateFunction = new FaaSRuntime.Function(
            "validate-order", "java", 128, 5
        );
        validateFunction.setHandler(request ->
            FaaSRuntime.FunctionResponse.ok("{\"valid\":true}")
        );
        runtime.registerFunction(validateFunction);
        
        FaaSRuntime.Function processFunction = new FaaSRuntime.Function(
            "process-payment", "java", 256, 10
        );
        processFunction.setHandler(request ->
            FaaSRuntime.FunctionResponse.ok("{\"paymentId\":\"pay-123\"}")
        );
        runtime.registerFunction(processFunction);
        
        FaaSRuntime.Function fulfillFunction = new FaaSRuntime.Function(
            "fulfill-order", "java", 128, 5
        );
        fulfillFunction.setHandler(request ->
            FaaSRuntime.FunctionResponse.ok("{\"orderId\":\"order-123\"}")
        );
        runtime.registerFunction(fulfillFunction);
        
        // Create workflow
        ServerlessWorkflow.Workflow orderWorkflow = new ServerlessWorkflow.Workflow("order-processing");
        
        orderWorkflow.addStep(new ServerlessWorkflow.FunctionStep(
            "validate", "validate-order", runtime
        ));
        orderWorkflow.addStep(new ServerlessWorkflow.FunctionStep(
            "payment", "process-payment", runtime
        ));
        orderWorkflow.addStep(new ServerlessWorkflow.FunctionStep(
            "fulfill", "fulfill-order", runtime
        ));
        
        orderWorkflow.setInitialInput(Map.of("orderId", "order-123", "amount", 99.99));
        
        System.out.println("Executing workflow: " + orderWorkflow.name);
        
        // Execute workflow
        ServerlessWorkflow.WorkflowExecution execution = orderWorkflow.execute();
        
        System.out.println("\nWorkflow execution:");
        System.out.println(execution);
        
        System.out.println("\nStep executions:");
        execution.stepExecutions.forEach(System.out::println);
        
        runtime.shutdown();
        System.out.println();
    }
}
