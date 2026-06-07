# DAY 27: QUICK REFERENCE GUIDE
## Cloud Computing & DevOps Patterns Cheat Sheet

---

## 🚀 Quick Navigation
- [Auto-Scaling](#auto-scaling)
- [Load Balancing](#load-balancing)
- [Kubernetes](#kubernetes)
- [Serverless](#serverless)
- [Deployment Strategies](#deployment-strategies)
- [Monitoring](#monitoring)
- [Complexity Cheat Sheet](#complexity-cheat-sheet)

---

## 🔄 Auto-Scaling

### Scaling Policies Quick Reference

```java
// Target Tracking
Target: Maintain metric at specific value
Example: Keep CPU at 70%
Formula: scale when currentMetric != targetMetric

// Step Scaling
Condition: Threshold-based
Example: 
  CPU > 80%: +2 instances
  CPU > 90%: +4 instances
  CPU < 30%: -1 instance

// Scheduled Scaling
Trigger: Time-based
Example: Scale up Mon-Fri 9am, down 6pm

// Predictive Scaling
Method: ML-based forecasting
Use: Proactive scaling before load arrives
```

### Auto-Scaling Code Template

```java
class AutoScaler {
    Map<String, List<Instance>> instances;
    Map<String, ScalingPolicy> policies;
    
    void scale(String service, Map<String, Double> metrics) {
        ScalingPolicy policy = policies.get(service);
        double targetValue = policy.getTargetValue();
        double currentValue = metrics.get(policy.getMetricName());
        
        int currentSize = instances.get(service).size();
        int desiredSize = calculateDesiredSize(
            currentSize, currentValue, targetValue
        );
        
        if (desiredSize > currentSize) {
            scaleUp(service, desiredSize - currentSize);
        } else if (desiredSize < currentSize) {
            scaleDown(service, currentSize - desiredSize);
        }
    }
    
    int calculateDesiredSize(int current, double currentMetric, double target) {
        return (int) Math.ceil(current * currentMetric / target);
    }
}
```

**Complexity:** O(1) for scaling decision

---

## ⚖️ Load Balancing

### Algorithm Comparison

| Algorithm | Time | Use Case | Pros | Cons |
|-----------|------|----------|------|------|
| Round Robin | O(1) | Equal servers | Simple, fair | Ignores load |
| Least Connections | O(n) | Varying requests | Load-aware | Slower |
| Weighted RR | O(1) | Different capacity | Capacity-aware | Static weights |
| IP Hash | O(1) | Session persistence | Sticky sessions | Uneven distribution |
| Least Response Time | O(n) | Performance-critical | Best performance | Complex |

### Round Robin Template

```java
class RoundRobinBalancer {
    List<Backend> backends;
    int currentIndex = 0;
    
    Backend selectBackend() {
        if (backends.isEmpty()) return null;
        Backend selected = backends.get(currentIndex);
        currentIndex = (currentIndex + 1) % backends.size();
        return selected;
    }
}
```

### Least Connections Template

```java
class LeastConnectionsBalancer {
    List<Backend> backends;
    
    Backend selectBackend() {
        return backends.stream()
            .min(Comparator.comparingInt(Backend::getConnections))
            .orElse(null);
    }
}
```

### IP Hash Template

```java
class IPHashBalancer {
    List<Backend> backends;
    
    Backend selectBackend(String clientIP) {
        int hash = clientIP.hashCode();
        int index = Math.abs(hash % backends.size());
        return backends.get(index);
    }
}
```

---

## ☸️ Kubernetes

### Pod Lifecycle States

```
PENDING → RUNNING → SUCCEEDED/FAILED/UNKNOWN
           ↓
        TERMINATING
```

**State Details:**
- `Pending`: Waiting for scheduling
- `Running`: At least one container running
- `Succeeded`: All containers terminated successfully
- `Failed`: At least one container failed
- `Unknown`: Cannot determine state

### Service Types Quick Guide

```yaml
# ClusterIP (default) - Internal only
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: ClusterIP
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 8080
```

```yaml
# NodePort - External access via node IP
spec:
  type: NodePort
  ports:
  - port: 80
    targetPort: 8080
    nodePort: 30080  # 30000-32767
```

```yaml
# LoadBalancer - Cloud provider LB
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 8080
```

### HPA Formula

```
desiredReplicas = ceil(currentReplicas × currentMetric / targetMetric)

Example:
currentReplicas = 3
currentCPU = 80%
targetCPU = 50%

desiredReplicas = ceil(3 × 80 / 50) = ceil(4.8) = 5
```

### HPA Configuration Template

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-deployment
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

### Rolling Update Parameters

```yaml
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1        # Max extra pods during update
      maxUnavailable: 0  # Min available pods
```

**Example Scenarios:**

| Replicas | maxSurge | maxUnavailable | Max Pods | Min Available |
|----------|----------|----------------|----------|---------------|
| 5 | 1 | 0 | 6 | 5 |
| 5 | 2 | 1 | 7 | 4 |
| 10 | 25% | 25% | 13 | 8 |

### ConfigMaps vs Secrets

```java
// ConfigMap - Non-sensitive data
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DATABASE_HOST: "postgres.example.com"
  LOG_LEVEL: "info"
  MAX_CONNECTIONS: "100"
```

```java
// Secret - Sensitive data (Base64 encoded)
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  DB_PASSWORD: cGFzc3dvcmQxMjM=  # password123
  API_KEY: YWJjZGVmZ2hpams=        # abcdefghijk
```

**Key Differences:**

| Feature | ConfigMap | Secret |
|---------|-----------|--------|
| Purpose | Configuration | Credentials |
| Encoding | Plain text | Base64 |
| Encryption | No | Optional (at rest) |
| Size Limit | 1MB | 1MB |
| Distribution | etcd | etcd (encrypted) |

### Health Check Probes

```yaml
# Liveness Probe - Container alive?
livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 10
  failureThreshold: 3

# Readiness Probe - Ready for traffic?
readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5

# Startup Probe - Application started?
startupProbe:
  httpGet:
    path: /startup
    port: 8080
  failureThreshold: 30
  periodSeconds: 10
```

**Probe Types:**
- `httpGet`: HTTP request (200-399 = success)
- `tcpSocket`: TCP connection
- `exec`: Command execution (exit 0 = success)

---

## ⚡ Serverless

### Cold Start Optimization Strategies

```java
// 1. Provisioned Concurrency
provisionedConcurrency: 5  // Keep 5 warm instances

// 2. Keep-Warm Pattern
CloudWatch Event → Lambda (every 5 min)

// 3. Package Size Optimization
- Use layers for dependencies
- Remove unused code
- Compress artifacts
- Use tree-shaking

// 4. Runtime Selection
NodeJS, Python: Fastest cold start
Java, .NET: Slower but better warm performance

// 5. VPC Configuration
Avoid VPC unless needed (adds ENI creation time)
```

### FaaS Code Template

```java
class FaaSRuntime {
    Map<String, Function> functions;
    Map<String, List<Instance>> warmPool;
    
    FunctionResponse invoke(String functionName, Map<String, Object> input) {
        Function function = functions.get(functionName);
        Instance instance = getOrCreateInstance(functionName);
        
        long startTime = System.currentTimeMillis();
        boolean isColdStart = instance.getInvocations() == 0;
        
        FunctionResponse response = instance.execute(input);
        
        long duration = System.currentTimeMillis() - startTime;
        recordMetrics(functionName, duration, isColdStart);
        
        return response;
    }
    
    Instance getOrCreateInstance(String functionName) {
        List<Instance> pool = warmPool.computeIfAbsent(
            functionName, k -> new ArrayList<>()
        );
        
        // Reuse warm instance
        for (Instance inst : pool) {
            if (inst.isIdle()) return inst;
        }
        
        // Create new instance (cold start)
        Instance newInstance = new Instance(functions.get(functionName));
        pool.add(newInstance);
        return newInstance;
    }
}
```

### Event-Driven Pattern

```java
class EventBus {
    Map<String, List<Trigger>> triggers;
    
    void publishEvent(Event event) {
        List<Trigger> matchedTriggers = triggers.getOrDefault(
            event.getType(), new ArrayList<>()
        );
        
        for (Trigger trigger : matchedTriggers) {
            if (trigger.matches(event)) {
                CompletableFuture.runAsync(() -> 
                    trigger.execute(event)
                );
            }
        }
    }
}

// Usage
eventBus.publishEvent(new Event("s3:ObjectCreated", data));
```

### Serverless API Gateway Template

```java
class APIGateway {
    Map<String, Route> routes;
    RateLimiter rateLimiter;
    
    Response handleRequest(Request request) {
        // Rate limiting
        if (!rateLimiter.allowRequest(request.getClientId())) {
            return new Response(429, "Too Many Requests");
        }
        
        // Route matching
        Route route = findRoute(request.getPath(), request.getMethod());
        if (route == null) {
            return new Response(404, "Not Found");
        }
        
        // Invoke handler
        return route.getHandler().handle(request);
    }
    
    Route findRoute(String path, String method) {
        String key = method + ":" + path;
        return routes.get(key);
    }
}
```

---

## 🚢 Deployment Strategies

### Blue-Green Deployment

```
┌─────────┐     ┌─────────┐
│  Blue   │ ←── │ Router  │
│  (v1)   │     │ (100%)  │
└─────────┘     └─────────┘
                     
┌─────────┐           
│  Green  │     
│  (v2)   │ Deploy & Test
└─────────┘     

Switch:
┌─────────┐     
│  Blue   │     
│  (v1)   │     
└─────────┘     
                ┌─────────┐
┌─────────┐ ←── │ Router  │
│  Green  │     │ (100%)  │
│  (v2)   │     └─────────┘
└─────────┘     
```

**Code Template:**

```java
class BlueGreenDeployer {
    Environment blue, green;
    
    void deploy(Version newVersion) {
        Environment inactive = getInactiveEnvironment();
        
        // Deploy to inactive
        inactive.deploy(newVersion);
        
        // Run health checks
        if (!inactive.isHealthy()) {
            inactive.rollback();
            throw new DeploymentException("Health check failed");
        }
        
        // Switch traffic
        switchTraffic(inactive);
    }
    
    void switchTraffic(Environment target) {
        router.setTarget(target);
        // Old environment kept for rollback
    }
}
```

### Canary Deployment

```
Traffic Distribution:
Initial:  100% v1, 0% v2
Step 1:   90% v1, 10% v2  (monitor)
Step 2:   80% v1, 20% v2  (monitor)
Step 3:   50% v1, 50% v2  (monitor)
Final:    0% v1, 100% v2
```

**Code Template:**

```java
class CanaryDeployer {
    void deploy(Version newVersion, int[] stages) {
        for (int percentage : stages) {
            // Gradually increase traffic
            setTrafficPercentage(newVersion, percentage);
            
            // Monitor metrics
            sleep(monitoringPeriod);
            
            // Check for errors
            if (getErrorRate() > threshold) {
                rollback();
                break;
            }
        }
    }
    
    void setTrafficPercentage(Version version, int percentage) {
        router.setWeights(
            oldVersion, 100 - percentage,
            version, percentage
        );
    }
}
```

---

## 📊 Monitoring

### Distributed Tracing Template

```java
class DistributedTracing {
    Map<String, List<Span>> traces;
    
    Span startSpan(String operation, String parentTraceId) {
        String traceId = parentTraceId != null 
            ? parentTraceId 
            : generateTraceId();
            
        Span span = new Span(
            generateSpanId(),
            traceId,
            operation,
            System.currentTimeMillis()
        );
        
        traces.computeIfAbsent(traceId, k -> new ArrayList<>())
               .add(span);
               
        return span;
    }
    
    void endSpan(Span span) {
        span.setEndTime(System.currentTimeMillis());
        span.setDuration(span.getEndTime() - span.getStartTime());
    }
    
    List<Span> getTrace(String traceId) {
        return traces.get(traceId);
    }
}

// Usage
Span span = tracing.startSpan("database-query", traceId);
try {
    // Execute operation
    database.query(sql);
} finally {
    tracing.endSpan(span);
}
```

### Three Pillars of Observability

```java
// 1. Metrics - Quantitative measurements
class MetricsCollector {
    void recordMetric(String name, double value, Map<String, String> tags) {
        // Examples:
        // http_requests_total{method="GET", status="200"}
        // cpu_usage{host="server1", region="us-east-1"}
    }
}

// 2. Logs - Discrete events
class Logger {
    void log(Level level, String message, Map<String, Object> context) {
        // Structured logging
        // {"timestamp": "2024-01-15T10:30:00Z", 
        //  "level": "ERROR",
        //  "message": "Database connection failed",
        //  "service": "api-server",
        //  "trace_id": "abc123"}
    }
}

// 3. Traces - Request flow
class Tracer {
    Span createSpan(String operation, String traceId) {
        // Distributed tracing across services
    }
}
```

---

## 📐 Complexity Cheat Sheet

### Cloud Patterns

| Pattern | Operation | Time | Space | Notes |
|---------|-----------|------|-------|-------|
| Auto-Scaler | Scale decision | O(1) | O(h) | h = history size |
| | Metric collection | O(1) | O(1) | Per metric |
| Circuit Breaker | Check state | O(1) | O(w) | w = window size |
| | Record result | O(1) | O(1) | |
| Load Balancer (RR) | Select backend | O(1) | O(n) | n = backends |
| Load Balancer (LC) | Select backend | O(n) | O(n) | Scan all |
| CDN | Cache lookup | O(1) | O(c) | c = cached items |
| | Cache eviction | O(log c) | O(c) | LRU with heap |

### Kubernetes Operations

| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| Service discovery | O(1) | O(s) | s = services |
| Pod scheduling | O(p × n) | O(p + n) | p = pods, n = nodes |
| HPA calculation | O(1) | O(1) | Simple formula |
| Rolling update | O(r) | O(r) | r = replicas |
| ConfigMap get | O(1) | O(1) | Hash lookup |
| Health check | O(1) | O(1) | Single probe |

### Serverless Operations

| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| Function invoke | O(1) | O(f) | f = functions |
| Cold start | O(1) | O(1) | Pool management |
| Event dispatch | O(t) | O(e) | t = triggers, e = events |
| API route match | O(1) | O(r) | r = routes |
| Workflow execute | O(s) | O(s) | s = steps |

### Practice Problems Complexity

| Problem | Time | Space | Algorithm |
|---------|------|-------|-----------|
| Predictive Auto-Scaler | O(n) | O(n) | Linear regression |
| Container Bin Packing | O(n log n + nm) | O(m) | First-Fit Decreasing |
| Cost Optimizer | O(n × c) | O(c) | Dynamic programming |
| Weighted RT Balancer | O(n) | O(n) | Weighted selection |
| Sticky Sessions | O(log n) | O(n × v) | Consistent hashing |
| Pod Scheduler | O(p × n) | O(p + n) | Scoring algorithm |
| Cold Start Optimizer | O(1) | O(w) | Warm pool |
| Function Chaining | O(n) | O(n) | Sequential execution |
| Distributed Tracing | O(1) create, O(n) get | O(t × s) | Trace recording |

---

## 🎯 Decision Guide

### When to use Auto-Scaling?

```
✅ Use when:
- Traffic varies significantly
- Cost optimization important
- Predictable load patterns
- Can tolerate startup time

❌ Avoid when:
- Constant steady load
- Startup time critical (use over-provision)
- Very small scale
```

### Which Load Balancer Algorithm?

```
Round Robin:
✅ Equal capacity servers
✅ Stateless applications
✅ Simple setup needed

Least Connections:
✅ Long-lived connections
✅ Varying request complexity
✅ Different server capacities

IP Hash:
✅ Session persistence needed
✅ Stateful applications
✅ Cache locality important

Weighted:
✅ Different server specs
✅ Gradual rollouts
✅ Geographic distribution
```

### Kubernetes vs Serverless?

```
Kubernetes:
✅ Long-running services
✅ Complex applications
✅ Stateful workloads
✅ Custom networking needs
✅ Need full control

Serverless:
✅ Event-driven tasks
✅ Sporadic traffic
✅ Stateless functions
✅ Fast iteration needed
✅ Pay-per-use preferred
```

### Blue-Green vs Canary?

```
Blue-Green:
✅ Quick rollback needed
✅ All-or-nothing deploy
✅ Testing environment identical
✅ Can afford 2x resources

Canary:
✅ Gradual rollout preferred
✅ Risk mitigation critical
✅ Real user testing needed
✅ Limited resources
```

---

## 🔧 Common Commands

### Kubernetes

```bash
# Deployments
kubectl apply -f deployment.yaml
kubectl get deployments
kubectl describe deployment my-app
kubectl rollout status deployment/my-app
kubectl rollout undo deployment/my-app

# Pods
kubectl get pods
kubectl logs pod-name
kubectl exec -it pod-name -- /bin/bash
kubectl describe pod pod-name

# Services
kubectl get services
kubectl expose deployment my-app --port=80
kubectl port-forward service/my-app 8080:80

# Scaling
kubectl scale deployment my-app --replicas=5
kubectl autoscale deployment my-app --min=2 --max=10 --cpu-percent=70

# ConfigMaps & Secrets
kubectl create configmap app-config --from-file=config.properties
kubectl create secret generic app-secret --from-literal=password=secret123
kubectl get configmaps
kubectl get secrets
```

### Docker

```bash
# Build & Run
docker build -t my-app:latest .
docker run -d -p 8080:80 my-app:latest
docker ps
docker logs container-id

# Images
docker images
docker pull nginx:latest
docker push my-repo/my-app:latest
docker rmi image-id

# Cleanup
docker system prune
docker volume prune
docker network prune
```

### AWS Lambda

```bash
# Deploy
aws lambda create-function \
  --function-name my-function \
  --runtime nodejs18.x \
  --handler index.handler \
  --zip-file fileb://function.zip

# Invoke
aws lambda invoke \
  --function-name my-function \
  --payload '{"key":"value"}' \
  response.json

# Update
aws lambda update-function-code \
  --function-name my-function \
  --zip-file fileb://function.zip

# Configure
aws lambda put-function-concurrency \
  --function-name my-function \
  --reserved-concurrent-executions 5
```

---

## 🎓 Interview Quick Answers

### Q: Explain CAP Theorem
**A:** CAP = Consistency, Availability, Partition tolerance. Can only guarantee 2 of 3. Examples:
- **CP (MongoDB):** Consistent + Partition-tolerant, may be unavailable
- **AP (Cassandra):** Available + Partition-tolerant, eventual consistency

### Q: Cold Start in Serverless?
**A:** Time to initialize function instance. Optimize via:
- Provisioned concurrency
- Smaller package sizes
- Faster runtime (Node.js > Java)
- Keep-warm strategies
- Avoid VPC unless needed

### Q: HPA vs VPA?
**A:** 
- **HPA:** Scales pod replicas horizontally (more pods)
- **VPA:** Scales pod resources vertically (more CPU/memory)
- Use HPA for stateless, VPA for stateful

### Q: Blue-Green vs Rolling?
**A:**
- **Blue-Green:** Two environments, instant switch, instant rollback, 2x resources
- **Rolling:** Gradual replacement, zero downtime, less resources

### Q: Service Mesh vs Ingress?
**A:**
- **Ingress:** L7 load balancer, external traffic entry
- **Service Mesh:** Inter-service communication, mTLS, observability, circuit breaking

---

**Quick Reference Complete! Print this for interviews and coding sessions! 📖**
