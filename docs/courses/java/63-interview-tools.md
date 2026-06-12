# 63. Tools & DevOps — Interview Q&A

This chapter covers the essential tools and DevOps practices every Java backend developer needs to know: build tools, containers, orchestration, CI/CD, monitoring, logging, version control, code review, and database migrations.

---

### Q1: What is Maven and what problem does it solve?

**Answer:** Maven is a build automation and dependency management tool for Java projects. Before Maven, Java projects had no standardized build process — developers used Ant with hand-written XML build files that required manually specifying every compile, test, and packaging step. Dependencies were downloaded and stored in `lib/` folders checked into version control, leading to bloated repositories and version conflicts.

Maven introduced two key innovations:
1. **Convention over configuration** — a standard project layout (`src/main/java`, `src/test/java`, etc.) means a Maven project can be built without any custom configuration for standard cases.
2. **Declarative dependency management** — dependencies are declared in `pom.xml` with groupId, artifactId, and version; Maven automatically downloads them from repositories (Maven Central) and manages transitive dependencies.

```xml
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>3.2.0</version>
        </dependency>
    </dependencies>
</project>
```

Maven also provides a lifecycle (validate, compile, test, package, verify, install, deploy) that standardizes when plugins execute, and a vast ecosystem of plugins for code coverage, static analysis, and more.

---

### Q2: What are the key differences between Maven and Gradle?

**Answer:**

| Aspect | Maven | Gradle |
|--------|-------|--------|
| **Build file** | XML (`pom.xml`) | Groovy or Kotlin DSL |
| **Performance** | Slower — sequential phases | Faster — incremental builds, build cache |
| **Flexibility** | Rigid lifecycle — hard to inject custom logic | Highly flexible — tasks with custom dependencies |
| **Dependency mgmt** | `<dependencyManagement>` BOM style | `platform()` and version catalogs |
| **Build script logic** | Plugins only — no imperative logic | Full programming language available |
| **Ecosystem** | Older, more established | Newer, rapidly growing |

Choose **Maven** for teams that value predictability and strict conventions. Choose **Gradle** for large monorepos needing incremental builds or when custom build logic is required.

---

### Q3: What is the Maven lifecycle and what are its phases?

**Answer:** Maven has three built-in lifecycles: **default** (main build), **clean** (cleanup), and **site** (documentation). The default lifecycle phases in order:

```
validate   → Project is correct and all necessary info is available
compile    → Compiles the source code
test       → Tests using a unit test framework
package    → Packages into JAR/WAR
verify     → Integration tests and quality checks
install    → Installs into local repository for use as dependency
deploy     → Copies to remote repository for sharing
```

Each phase executes sequentially — `mvn package` runs validate, compile, test, and package. Plugins bind goals to lifecycle phases.

---

### Q4: How does Gradle incremental build work?

**Answer:** Gradle tracks **inputs** and **outputs** for every task. If neither inputs nor outputs have changed since the last execution, the task is marked `UP-TO-DATE` and skipped entirely. Inputs include source files, task configuration, and system properties. Outputs include files and directories produced by the task.

The **build cache** extends this across machines — CI can publish cache entries to a shared cache (HTTP or S3), and developer machines pull those entries instead of rebuilding.

---

### Q5: What are Maven BOMs and how do they help manage dependencies?

**Answer:** A BOM (Bill of Materials) centralizes dependency versions. Instead of specifying versions in every module's `pom.xml`, you import a BOM and omit versions in individual dependency declarations.

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson</groupId>
            <artifactId>jackson-bom</artifactId>
            <version>2.16.0</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

Spring Boot provides `spring-boot-dependencies` as a BOM — that's why you don't specify versions for most Spring dependencies when using `spring-boot-starter-parent`.

---

### Q6: What is Docker and why is it important for Java applications?

**Answer:** Docker packages an application and its dependencies into a lightweight, portable container image. For Java, it solves the "works on my machine" problem by ensuring the exact same environment (OS, JDK version, system libraries) runs everywhere.

**Multi-stage Docker build for Spring Boot:**

```dockerfile
# Stage 1: Build with JDK + Maven
FROM eclipse-temurin:17-jdk-alpine AS builder
WORKDIR /app
COPY mvnw pom.xml ./
COPY .mvn .mvn
RUN ./mvnw dependency:go-offline
COPY src src
RUN ./mvnw package -DskipTests

# Stage 2: Runtime with JRE only (much smaller)
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

---

### Q7: What are best practices for writing Dockerfiles for Java applications?

**Answer:**

1. **Use specific base image tags** — never `:latest`. Pin to specific versions.
2. **Leverage layer caching** — order commands from least to most frequently changing. Copy `pom.xml` and download dependencies before source code.
3. **Use multi-stage builds** — keep JDK and build tools out of runtime images.
4. **Run as non-root user** — create a dedicated user: `RUN addgroup -S appgroup && adduser -S appuser -G appgroup`
5. **Optimize JVM for containers** — `-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0`
6. **Set memory limits** — `docker run -m 512m my-app`
7. **Use health checks** — `HEALTHCHECK --interval=30s --timeout=3s CMD wget --spider http://localhost:8080/actuator/health`

---

### Q8: What is Docker Compose and when should you use it?

**Answer:** Docker Compose defines multi-container applications using a YAML file. It's ideal for local development and test environments where you need to run several services together.

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/mydb
      SPRING_DATA_REDIS_HOST: redis
    depends_on:
      - db
      - redis
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data
  redis:
    image: redis:7-alpine
volumes:
  pgdata:
```

Use for: local development, CI test environments, staging. Not for production — use Kubernetes.

---

### Q9: What is Kubernetes and what problems does it solve for Java microservices?

**Answer:** Kubernetes (K8s) is a container orchestration platform that automates deployment, scaling, and management of containerized applications. For Java microservices, it solves:

1. **Service discovery** — pods get DNS names and find each other via Services
2. **Self-healing** — restarts failed containers, reschedules failed nodes
3. **Horizontal scaling** — auto-scales pods based on CPU/memory or custom metrics
4. **Rolling updates** — deploys new versions without downtime
5. **Configuration management** — ConfigMaps and Secrets inject configuration
6. **Resource management** — CPU/memory requests and limits per pod

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: order-service
  template:
    metadata:
      labels:
        app: order-service
    spec:
      containers:
      - name: order-service
        image: registry.example.com/order-service:1.2.3
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /actuator/health/liveness
            port: 8080
          initialDelaySeconds: 30
        readinessProbe:
          httpGet:
            path: /actuator/health/readiness
            port: 8080
          initialDelaySeconds: 20
---
apiVersion: v1
kind: Service
metadata:
  name: order-service
spec:
  selector:
    app: order-service
  ports:
  - port: 80
    targetPort: 8080
  type: ClusterIP
```

---

### Q10: How do you configure Spring Boot health probes for Kubernetes?

**Answer:** Spring Boot Actuator provides dedicated endpoints for liveness and readiness checks:

```yaml
management:
  endpoint:
    health:
      probes:
        enabled: true
  health:
    livenessstate:
      enabled: true
    readinessstate:
      enabled: true
```

This exposes `/actuator/health/liveness` (is the app alive? restart if stuck) and `/actuator/health/readiness` (can the app accept traffic? remove from Service if not).

The readiness probe should include database connectivity but the liveness probe should not — a database being down doesn't mean the app should be killed.

---

### Q11: What is a CI/CD pipeline and how do you build one for a Java project?

**Answer:** CI/CD automates the process from code commit to production deployment.

- **CI (Continuous Integration):** Every commit is built and tested automatically
- **CD (Continuous Delivery/Deployment):** Every successful build is deployable (or auto-deployed)

**GitHub Actions pipeline for Spring Boot:**

```yaml
name: CI/CD
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up JDK 17
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'
      - name: Build and test
        run: mvn verify -B
  docker:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: registry.example.com/my-app:${{ github.sha }}
```

Stages: Checkout → Compile → Unit tests → Integration tests → Static analysis → Package → Docker build → Push → Deploy

---

### Q12: What is the difference between blue-green and canary deployment?

**Answer:**

**Blue-Green:** Two identical environments (blue = current, green = new). Deploy to green, switch the router to green once verified. Rollback is instant — switch back to blue.

**Canary:** Gradually shift traffic to the new version (1% → 5% → 10% → 50% → 100%). Monitor errors at each step and rollback if needed.

| Aspect | Blue-Green | Canary |
|--------|-----------|--------|
| Rollback | Instant (switch back) | Needs traffic rebalancing |
| Infrastructure cost | Double during deploy | Same as normal |
| Risk validation | Only tested before switch | Real traffic validation |
| Speed | Fast switchover (seconds) | Gradual (minutes to hours) |
| Complexity | Lower | Higher (traffic routing needed) |

---

### Q13: What monitoring metrics are essential for a Java microservice?

**Answer:**

**JVM metrics:** Heap memory (used, max, committed), GC pause time and frequency, thread count (active, daemon, blocked), class loading

**Application metrics:** Request rate (req/s), error rate (4xx, 5xx), latency percentiles (p50, p95, p99, p99.9), active DB connections

**Infrastructure metrics:** CPU usage, memory usage (RSS vs heap), disk I/O, network I/O

**Spring Boot + Micrometer + Prometheus:**

```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,metrics,prometheus
  metrics:
    distribution:
      percentiles-histogram:
        http.server.requests: true
```

Custom metrics:

```java
@Service
public class OrderService {
    private final Counter orderCreatedCounter;
    private final Timer orderProcessingTimer;

    public OrderService(MeterRegistry registry) {
        this.orderCreatedCounter = Counter.builder("orders.created")
            .description("Total orders created")
            .register(registry);
        this.orderProcessingTimer = Timer.builder("orders.processing.time")
            .description("Time to process an order")
            .publishPercentiles(0.5, 0.95, 0.99)
            .register(registry);
    }

    public Order createOrder(OrderRequest request) {
        return orderProcessingTimer.record(() -> {
            Order order = doCreateOrder(request);
            orderCreatedCounter.increment();
            return order;
        });
    }
}
```

---

### Q14: How do you implement centralized logging for microservices?

**Answer:** Use the pattern: structured logging (JSON) + correlation IDs + centralized aggregation.

**Logback structured JSON output:**

```xml
<appender name="JSON" class="ch.qos.logback.core.ConsoleAppender">
    <encoder class="net.logstash.logback.encoder.LogstashEncoder">
        <customFields>{"service":"order-service","environment":"${ENV}"}</customFields>
    </encoder>
</appender>
```

**Correlation ID filter for request tracing:**

```java
@Component
public class CorrelationIdFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                     HttpServletResponse response,
                                     FilterChain chain) {
        String correlationId = request.getHeader("X-Correlation-Id");
        if (correlationId == null || correlationId.isEmpty()) {
            correlationId = UUID.randomUUID().toString();
        }
        MDC.put("correlationId", correlationId);
        response.setHeader("X-Correlation-Id", correlationId);
        try {
            chain.doFilter(request, response);
        } finally {
            MDC.remove("correlationId");
        }
    }
}
```

Propagate via RestClient interceptor to downstream services.

---

### Q15: What are health checks and why are they important?

**Answer:** Health checks expose the operational status of an application so orchestrators, load balancers, and monitoring systems know whether the application can serve traffic.

Three types:
- **Liveness probe** — Is the app running? Restart if stuck (deadlocks, infinite loops).
- **Readiness probe** — Can the app accept traffic? Remove from load balancer if not (DB down, cache warming).
- **Startup probe** — Has the app initialized? Delay liveness checks for slow-starting apps.

**Custom health indicator:**

```java
@Component
public class ExternalApiHealthIndicator implements HealthIndicator {
    @Override
    public Health health() {
        try {
            ResponseEntity<String> response = restTemplate.exchange(
                "https://api.external.com/health",
                HttpMethod.GET, null, String.class
            );
            if (response.getStatusCode().is2xxSuccessful()) {
                return Health.up().build();
            }
            return Health.down()
                .withDetail("statusCode", response.getStatusCode())
                .build();
        } catch (Exception e) {
            return Health.down(e).build();
        }
    }
}
```

---

### Q16: What Git branching strategy works best for microservices?

**Answer:** **Trunk-based development** or **GitHub Flow** work best for microservices. Avoid Git Flow — it's too heavyweight for independently deployable services.

**GitHub Flow:** Feature branches → PR → merge to main → deploy immediately.

**Trunk-based:** Short-lived branches (hours), merged to main via PR. Feature flags control unfinished features:

```java
@Value("${features.new-payment-flow:false}")
private boolean newPaymentFlowEnabled;

public PaymentResult processPayment(PaymentRequest request) {
    if (newPaymentFlowEnabled) {
        return newPaymentFlow(request);
    }
    return oldPaymentFlow(request);
}
```

---

### Q17: What do you look for in a code review?

**Answer:**
- **Functionality:** Correct implementation, edge cases handled, proper error handling
- **Design:** SOLID principles, high cohesion, appropriate abstractions, clean package structure
- **Security:** Input validation, authentication/authorization checks, no hardcoded secrets
- **Performance:** N+1 queries, proper indexing, thread safety, caching strategies
- **Testing:** Happy path + edge cases, integration tests with Testcontainers, error scenarios
- **Style:** Team conventions, meaningful names, no dead code or TODOs

---

### Q18: What is Flyway and how do you use it for database migrations?

**Answer:** Flyway applies versioned SQL scripts to a database. It tracks applied scripts in a `flyway_schema_history` table and only runs new ones.

```sql
-- V1__create_users_table.sql
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- V2__add_name_to_users.sql
ALTER TABLE users
    ADD COLUMN first_name VARCHAR(100),
    ADD COLUMN last_name VARCHAR(100);
```

```yaml
spring:
  flyway:
    enabled: true
    locations: classpath:db/migration
    baseline-on-migrate: true
```

**Best practices:** Never modify applied migrations, always create new ones. Keep migrations backward-compatible for two versions.

---

### Q19: Flyway vs Liquibase?

**Answer:**

| Aspect | Flyway | Liquibase |
|--------|--------|-----------|
| Format | SQL files | XML, YAML, JSON, SQL |
| Learning curve | Low — just write SQL | Medium — must learn changelog syntax |
| Rollback | Paid version or manual scripts | Built-in rollback support |
| Idempotent re-runs | No (checksum mismatch) | Supported with `runAlways` |
| Complexity | Simple, straightforward | More features, more complex |
| Git-friendly | Very (plain SQL) | XML/YAML diff less clean |

Choose Flyway for SQL-first teams that value simplicity. Choose Liquibase if you need rollback support or work with multiple database types.

---

### Q20: How do you ensure database migrations are safe in production?

**Answer:**

1. **Backward-compatible changes only** — add columns with `DEFAULT NULL`, never rename or drop in one deploy
2. **Expand-Migrate-Contract pattern:** Add column → Migrate data → Drop old column (across 3 deploys)
3. **Lock migration** — Spring Boot + Flyway acquires a lock automatically
4. **Test against production-size data** — timing matters (1ms local vs 10min on 50M rows)
5. **Never modify applied migrations** — creates checksum mismatch; always create new migration
6. **Validate in CI** — `mvn flyway:validate`

---

### Q21: What is the Twelve-Factor App methodology?

**Answer:** Twelve-Factor App is a methodology for building SaaS applications. The 12 factors:

1. **Codebase** — One codebase, many deploys
2. **Dependencies** — Explicitly declare and isolate (Maven/Gradle + Docker)
3. **Config** — Store in environment variables, not code
4. **Backing services** — Treat databases, queues, caches as attached resources
5. **Build, release, run** — Strictly separate stages
6. **Processes** — Stateless (no sticky sessions)
7. **Port binding** — Export services via port (embedded Tomcat)
8. **Concurrency** — Scale out via process model
9. **Disposability** — Fast startup and graceful shutdown
10. **Dev/prod parity** — Keep environments similar (Docker)
11. **Logs** — Treat as event streams (stdout)
12. **Admin processes** — Run as one-off tasks (migrations)

---

### Q22: How do you implement graceful shutdown in Spring Boot?

**Answer:**

```yaml
server:
  shutdown: graceful
spring:
  lifecycle:
    timeout-per-shutdown-phase: 30s
```

When SIGTERM is received: stop accepting new requests, wait for active requests to complete (up to 30s), then close the ApplicationContext and exit.

For Kubernetes, add a preStop hook to give the load balancer time to remove the pod:

```yaml
lifecycle:
  preStop:
    exec:
      command: ["sleep", "5"]
```

---

### Q23: What is SLF4J and why is it the standard logging facade for Java?

**Answer:** SLF4J (Simple Logging Facade for Java) decouples application code from the logging implementation. Your code logs via SLF4J API, and at deployment time you choose the backend (Logback, Log4j2, java.util.logging).

Benefits:
- **Swappable backends** — change logging library without touching application code
- **Parameterized logging** — avoids string concatenation: `log.debug("Order {} for user {}", orderId, userId)`
- **MDC (Mapped Diagnostic Context)** — thread-local map for correlation IDs
- **Marker support** — filter or route log events programmatically

---

### Q24: How do you troubleshoot performance issues in production?

**Answer:** Use a systematic top-down approach:

1. **Check dashboards** — CPU, memory, latency, error rate, GC activity
2. **Thread dump analysis** (high CPU, thread contention):
   ```
   jstack <pid> > threaddump.txt
   ```
   Look for RUNNABLE threads in unexpected places or BLOCKED threads.
3. **Heap dump analysis** (memory leaks, high GC):
   ```
   -XX:+HeapDumpOnOutOfMemoryError
   jmap -dump:live,format=b,file=heapdump.hprof <pid>
   ```
   Use Eclipse MAT or VisualVM to analyze.
4. **Common issues:**
   - High CPU + RUNNABLE threads → infinite loop or tight polling
   - GC > 20% CPU → too many object allocations
   - OOM → memory leak or too small heap
   - High p99 latency → GC pauses or slow external API calls
   - Connection pool exhaustion → slow queries or connection leaks

---

### Q25: Performance vs load vs stress testing?

**Answer:**

| Type | Purpose |
|------|---------|
| Performance | Measure response time and throughput under normal conditions |
| Load | Verify system behavior under expected load |
| Stress | Find the breaking point — when does it fail? |
| Endurance | Stability over extended periods (detect memory leaks) |
| Spike | Behavior with sudden traffic surges |
| Scalability | How adding resources improves performance |

Tools: JMH (microbenchmarking), Gatling/k6 (load testing)

---

### Q26: How do you handle secrets management?

**Answer:** Never hardcode secrets in source code or configuration files.

1. **Environment variables** — basic, not suitable for production
2. **Kubernetes Secrets** — mounted as environment variables or files
3. **HashiCorp Vault** — dynamic secrets, rotation, audit logging
4. **AWS Secrets Manager / GCP Secret Manager** — cloud-native
5. **External Secrets Operator** — syncs secrets from providers into K8s Secrets

Best practices: rotate regularly, audit access, least privilege, never log secrets.

---

### Q27: What is GitOps?

**Answer:** GitOps uses a Git repository as the single source of truth for cluster state. An operator (ArgoCD, Flux) continuously synchronizes the cluster with what's defined in Git.

Benefits: audit trail (every change is a commit), easy rollback (`git revert`), self-healing (operator fixes configuration drift), pull-based deployment.

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: order-service
spec:
  destination:
    namespace: production
    server: https://kubernetes.default.svc
  source:
    repoURL: https://github.com/company/k8s-config
    targetRevision: main
    path: services/order-service
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

---

### Q28: Helm vs Kustomize?

**Answer:**

| Aspect | Helm | Kustomize |
|--------|------|-----------|
| Type | Package manager for Kubernetes | Native YAML customization |
| Templating | Go templates | YAML patches/overlays |
| Learning curve | Steeper | Gentler (pure YAML) |
| Sharing | Helm Hub/ArtifactHub | Git-based |
| Built-in? | No (separate CLI) | Yes (`kubectl -k`) |

Use Helm for third-party software installations. Use Kustomize for your own applications when you want raw YAML without template syntax.

---

### Q29: What is a service mesh (Istio vs Linkerd)?

**Answer:** A service mesh handles service-to-service communication via sidecar proxies. Provides traffic management, mTLS security, and observability without modifying application code.

| Aspect | Istio | Linkerd |
|--------|-------|---------|
| Proxy | Envoy (C++) | Linkerd-proxy (Rust) |
| Resource usage | ~100MB per sidecar | ~10MB per sidecar |
| Features | Very rich | Focused on essentials |
| Complexity | High | Simpler |
| Latency overhead | ~2-5ms | ~1ms |

Use when: 10+ services, need mTLS, canary deployments, or consistent observability. Don't use for small systems or when performance is ultra-critical.

---

### Q30: What are Docker volume types?

**Answer:**
1. **Named volumes** — Docker-managed, persisted in `/var/lib/docker/volumes/`. Most portable.
2. **Bind mounts** — host directory mapped into container. Useful for development (hot-reload).
3. **tmpfs mounts** — stored in memory only. Suitable for sensitive temporary data.

Use named volumes for databases, bind mounts for development, tmpfs for secrets.

---

### Q31: How do Docker containers communicate?

**Answer:** Through Docker networks:
- **Bridge** (default) — private internal network with DNS-based service discovery
- **Host** — container shares host network stack (no isolation, better performance)
- **Overlay** — multi-host networking (Docker Swarm, Kubernetes)

In Docker Compose, services reach each other by service name (`db:5432`, `redis:6379`).

---

### Q32: What is a container registry?

**Answer:** Stores and distributes Docker images. Common options:
- **Docker Hub** — public, rate-limited for anonymous pulls
- **GitHub Container Registry (ghcr.io)** — integrated with GitHub Actions
- **AWS ECR** — IAM integration, VPC endpoints
- **Azure Container Registry (ACR)** — geo-replication
- **Harbor** — open-source, vulnerability scanning, replication

---

### Q33: Readiness probe vs liveness probe vs startup probe?

**Answer:**

| Probe | Purpose | Failure action |
|-------|---------|----------------|
| Liveness | Is the app alive? | Restart container |
| Readiness | Can the app serve traffic? | Remove from Service endpoints |
| Startup | Has the app started? | Delay liveness checks |

---

### Q34: How do you use ConfigMaps with Spring Boot?

**Answer:** ConfigMaps inject non-sensitive configuration into pods. Mount as environment variables:

```yaml
envFrom:
  - configMapRef:
      name: app-config
```

Or as files:

```yaml
volumes:
  - name: config
    configMap:
      name: app-config
...
volumeMounts:
  - name: config
    mountPath: /workspace/config
    readOnly: true
```

For Spring Cloud Kubernetes:

```yaml
spring:
  cloud:
    kubernetes:
      config:
        enabled: true
        sources:
          - namespace: production
            name: app-config
      reload:
        enabled: true
        mode: event
```

---

### Q35: What is a Kubernetes Ingress?

**Answer:** Ingress exposes HTTP/S routes from outside the cluster to internal Services. Requires an Ingress Controller (NGINX, Traefik, HAProxy).

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-app-ingress
spec:
  ingressClassName: nginx
  rules:
  - host: api.example.com
    http:
      paths:
      - path: /orders
        pathType: Prefix
        backend:
          service:
            name: order-service
            port:
              number: 80
```

Provides path-based routing, host-based routing, TLS termination, and controller-specific annotations.

---

### Q36: Kubernetes Service vs Ingress?

**Answer:** Service = Layer 4 (TCP/UDP), stable internal endpoint for pods, simple load balancing. Ingress = Layer 7 (HTTP/S), external traffic routing, path-based, TLS termination, rate limiting.

Flow: `Ingress → Service → Pod(s)`

---

### Q37: Kubernetes resource model (Requests vs Limits)?

**Answer:**
- **Requests** — minimum guaranteed resources. Used for scheduling.
- **Limits** — maximum allowed resources. CPU throttles, memory OOMKills.

```yaml
resources:
  requests:
    memory: "256Mi"
    cpu: "250m"
  limits:
    memory: "512Mi"
    cpu: "500m"
```

For Java: `-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0` so JVM respects container limits.

QoS classes: Guaranteed (request = limit), Burstable (request < limit), BestEffort (no requests/limits).

---

### Q38: How do you achieve zero-downtime deployments in Kubernetes?

**Answer:** Combine multiple features:

1. **Readiness probes** — only route traffic to healthy pods
2. **Graceful shutdown** — `server.shutdown: graceful` with 30s timeout
3. **Rolling update strategy** — `maxSurge: 1, maxUnavailable: 0`
4. **preStop hook** — `sleep 5` to let endpoints update before shutdown
5. **PodDisruptionBudget** — `minAvailable: 2` prevents voluntary disruptions
6. **Anti-affinity** — spread pods across nodes

---

### Q39: Reverse proxy vs forward proxy?

**Answer:**
- **Forward proxy** — sits between clients and the internet. Hides client IP, used for content filtering and access control. (Corporate proxy, Squid)
- **Reverse proxy** — sits in front of servers. Hides server topology, provides load balancing, SSL termination, caching. (NGINX, Traefik, HAProxy)

---

### Q40: What is the role of a message broker in microservices?

**Answer:** Enables asynchronous communication between services. Benefits:
- **Decoupling** — services don't know each other, only the message format
- **Resilience** — messages persist if consumer is down
- **Buffering** — handle traffic spikes without data loss
- **Fan-out** — one event triggers multiple actions

Common brokers: RabbitMQ (AMQP), Apache Kafka (event streaming, replayable), Amazon SQS/SNS (managed).

---

### Q41: Queue vs topic in messaging?

**Answer:**
- **Queue (point-to-point):** Each message consumed by exactly one consumer. Best for work distribution.
- **Topic (publish-subscribe):** Each message delivered to all subscribers. Best for event broadcasting.

Kafka combines both: consumer groups get every message (topic), partitions distribute within a group (queue).

---

### Q42: What is the Circuit Breaker pattern?

**Answer:** Prevents cascading failures by stopping calls to a failing service and failing fast. States: CLOSED (normal), OPEN (fail fast), HALF_OPEN (probe for recovery).

```yaml
resilience4j:
  circuitbreaker:
    configs:
      default:
        sliding-window-size: 10
        failure-rate-threshold: 50
        wait-duration-in-open-state: 10s
```

```java
@CircuitBreaker(name = "paymentService", fallbackMethod = "paymentFallback")
public PaymentResult processPayment(Order order) {
    return paymentClient.charge(order.total(), order.currency());
}

public PaymentResult paymentFallback(Order order, Throwable t) {
    return PaymentResult.failed("Payment service temporarily unavailable");
}
```

---

### Q43: Retry vs Circuit Breaker?

**Answer:** Retry for transient failures (network hiccup, connection timeout). Circuit Breaker for persistent failures (service down, DB disconnected). They complement each other — retry first, then circuit breaker.

---

### Q44: What is the Bulkhead pattern?

**Answer:** Isolates resources so a failure in one part doesn't take down others. Two types:
- **Thread pool isolation** — each service gets its own thread pool (max 10 threads for payment, max 20 for orders)
- **Semaphore isolation** — limit concurrent calls without separate thread pools

```java
@Bulkhead(name = "paymentBulkhead", type = Bulkhead.Type.THREADPOOL)
public PaymentResult processPayment(Order order) {
    return paymentClient.charge(order.total());
}
```

---

### Q45: How do you implement observability (logging, metrics, tracing)?

**Answer:** Three pillars:
1. **Logging** — structured JSON with correlation IDs. Centralized in Elasticsearch/Loki.
2. **Metrics** — Prometheus + Micrometer. Request rates, error rates, latency, JVM stats.
3. **Tracing** — Micrometer Tracing + OpenTelemetry + Jaeger/Tempo. Distributed traces across services.

Spring Boot 3.x setup:

```yaml
management:
  tracing:
    sampling:
      probability: 0.1
  endpoints:
    web:
      exposure:
        include: health,prometheus
  metrics:
    distribution:
      percentiles-histogram:
        http.server.requests: true
```

---

### Q46: What is Prometheus?

**Answer:** Prometheus is a time-series monitoring system that scrapes metrics from instrumented applications. Spring Boot exposes `/actuator/prometheus` via Micrometer. PromQL queries metrics for dashboards and alerts.

Workflow: `Spring Boot → /actuator/prometheus → Prometheus (scrape) → Grafana (visualize)`

---

### Q47: What is Grafana?

**Answer:** Visualization platform connecting to data sources (Prometheus, Elasticsearch) for dashboards. Pre-built Spring Boot dashboards available (ID 10280 for JVM/Micrometer). Configure alerting via Slack, PagerDuty, or webhook.

---

### Q48: APM vs traditional monitoring?

**Answer:** APM provides code-level visibility — method-level profiling, distributed traces, transaction breakdowns. Traditional monitoring shows infrastructure metrics (CPU, memory, disk). APM answers "why was this request slow?" with a detailed breakdown.

---

### Q49: Structured vs unstructured logging?

**Answer:** Structured = JSON format, machine-parseable, filterable by field. Unstructured = free text, hard to search programmatically. Always use structured logging in production for reliable analysis in Kibana/Grafana.

---

### Q50: Best practices for log levels?

**Answer:**
- **ERROR** — needs immediate attention (data loss, service unreachable)
- **WARN** — unexpected but recovered gracefully (rate limited, used cache)
- **INFO** — important business events (order created, payment processed)
- **DEBUG** — detailed diagnostics (off in production normally)

Never log sensitive data. Include context (orderId, userId). Use dynamic level changes via Actuator without restart.

---

### Q51: How do you implement health checks for external dependencies?

**Answer:** Implement `HealthIndicator` for each dependency. Spring Boot auto-configures DataSource, Redis, Mongo, RabbitMQ, Kafka health checks. Add custom ones for external APIs.

Group health by purpose — readiness checks include external dependencies, liveness checks should be minimal (just the app process).

---

### Q52: How do you manage database connection pools?

**Answer:** HikariCP (default in Spring Boot):

```yaml
spring:
  datasource:
    hikari:
      maximum-pool-size: 20
      minimum-idle: 5
      connection-timeout: 3000
      leak-detection-threshold: 60000
```

Monitor: `hikaricp_connections_active`, `hikaricp_connections_pending`, `hikaricp_connections_timeout_total`. Alert on pending > 0 or timeout > 0.

---

### Q53: Monorepo vs multi-repo for microservices?

**Answer:**
- **Monorepo:** All services in one repo. Atomic cross-service changes, easier code sharing, but git scales poorly and CI needs test impact analysis.
- **Multi-repo:** Each service in its own repo. Clean ownership, independent deployments, but coordinated multi-repo changes are hard.

---

### Q54: Semantic versioning for microservices?

**Answer:** `MAJOR.MINOR.PATCH`. MAJOR for breaking API changes, MINOR for backward-compatible features, PATCH for bug fixes. Expose version via Actuator's `/actuator/info`. Use git commit SHA as Docker image tag for traceability.

---

### Q55: REST vs gRPC?

**Answer:**

| Aspect | REST | gRPC |
|--------|------|------|
| Protocol | HTTP/1.1 | HTTP/2 |
| Data format | JSON (text) | Protocol Buffers (binary) |
| Code generation | Optional | Mandatory |
| Streaming | Limited (chunked) | Bidirectional |
| Performance | Slower (text parsing) | Faster (binary, multiplexed) |
| Browser support | Native | Requires gRPC-web proxy |

Use REST for public APIs and browser clients. Use gRPC for internal service-to-service communication and real-time streaming.

---

### Q56: Database migrations across microservices?

**Answer:** Each service owns its database schema independently (database-per-service pattern). Never share databases between services. Backward-compatible changes only. Use expand-migrate-contract pattern across multiple deploys.

---

### Q57: Deployment safety in Kubernetes?

**Answer:** Combine: probes (liveness/readiness/startup) + rolling update strategy + PodDisruptionBudget + progressive delivery (Argo Rollouts with canary + metric analysis) + automated rollback triggers.

---

### Q58: Horizontal vs vertical scaling?

**Answer:**
- **Horizontal (scale out):** Add more instances. Near-infinite for stateless apps. Better resilience. Use HPA.
- **Vertical (scale up):** Add more resources. Limited by hardware. Easier for stateful apps.

For Java microservices: scale horizontally for stateless services, vertically for databases.

---

### Q59: Stress testing and capacity planning?

**Answer:**
1. Define target metrics (peak traffic, SLOs)
2. Execute Gatling/k6 tests with ramp-up and sustained load
3. Monitor all layers (app, DB, infrastructure)
4. Identify bottlenecks (N+1 queries, connection pools, CPU)
5. Calculate instances needed: `Instances = (Peak traffic / Capacity per instance) x Safety margin (2x)`

---

### Q60: What is a Kubernetes Operator?

**Answer:** An application-specific controller that encodes human operational knowledge into software. Manages complex stateful applications (databases, Kafka, Redis) with automated backup, restore, scaling, and upgrades.

Examples: Strimzi (Kafka), CloudNativePG (PostgreSQL), Prometheus Operator, ArgoCD Operator.

---

### Q61: Setting up a development environment for microservices?

**Answer:** Three tiers:
- **Tier 1 (Docker Compose):** App + DB + Redis + Kafka + dependencies
- **Tier 2 (Tilt):** Kubernetes-native dev with live reload, resource view
- **Tier 3 (Telepresence):** Run local service connected to remote cluster

Best practices: hot reload (DevTools), realistic DB (PostgreSQL, not H2), mock external APIs (WireMock), profile-based config.

---

### Q62: What is Testcontainers and how does it improve tests?

**Answer:** Testcontainers provides disposable Docker containers for integration testing. Uses the same database as production (PostgreSQL, not H2), catching compatibility issues early.

```java
@SpringBootTest
@Testcontainers
class OrderRepositoryTest {
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine");

    @DynamicPropertySource
    static void properties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }
}
```

---

### Q63: Testing async code (Kafka, CompletableFuture)?

**Answer:** Use Awaitility for polling assertions:

```java
await().atMost(10, SECONDS)
    .pollInterval(100, MILLISECONDS)
    .untilAsserted(() -> {
        assertThat(receivedEvents).hasSize(1);
    });
```

For CompletableFuture, use `.get(5, SECONDS)` with timeout. For reactive code (Project Reactor), use `StepVerifier`.

---

### Q64: What is contract testing?

**Answer:** Contract testing verifies that API provider and consumer agree on the contract. Spring Cloud Contract: provider writes contracts (Groovy DSL), tests verify fulfillment, consumers use generated stubs. Catches integration issues before deployment.

---

### Q65: What is a Docker layer cache and how do you optimize it?

**Answer:** Docker caches each layer. Order commands from least to most frequently changing:

```dockerfile
# Cached unless pom.xml changes
COPY pom.xml ./
RUN mvn dependency:go-offline

# Only runs when source changes
COPY src src/
RUN mvn package
```

Use `.dockerignore` to exclude unnecessary files (`.git`, `target/`, `node_modules/`).

---

### Q66: How do you handle configuration for multiple environments?

**Answer:**
1. **Spring profiles** — `application-dev.yml`, `application-prod.yml`
2. **Kubernetes ConfigMaps/Secrets** — per-environment with Kustomize overlays or Helm value files
3. **External config servers** — Spring Cloud Config, Vault
4. **Environment variables** — deployment-specific settings (DB URLs, API keys)

```yaml
# application.yml
server.port: 8080

# application-prod.yml (activated by SPRING_PROFILES_ACTIVE=prod)
server.port: 80
spring.datasource.url: ${DB_URL}
```

---

### Q67: What is the ELK/EFK stack?

**Answer:** ELK = Elasticsearch (storage/search) + Logstash (ingestion/transformation) + Kibana (visualization). EFK replaces Logstash with Fluentd (lighter, Kubernetes-native).

Services emit JSON logs to stdout → Fluentd collects → ships to Elasticsearch → Kibana provides search and dashboards.

---

### Q68: Centralized logging vs distributed tracing?

**Answer:**
- **Logging:** Individual log events, correlated by correlation ID. Tells you what happened.
- **Tracing:** Request spanning multiple services, with trace ID and span IDs. Tells you where in the request flow latency occurred.

Both are essential for observability in microservices.

---

### Q69: How do you handle file uploads in Kubernetes?

**Answer:** Don't store on pod filesystem (ephemeral). Options:
1. **Cloud storage** — AWS S3, GCS, Azure Blob (preferred)
2. **Persistent Volume Claim** — shared filesystem with ReadWriteMany access mode
3. **MinIO** — self-hosted S3-compatible object storage

---

### Q70: What is a PodDisruptionBudget?

**Answer:** A PodDisruptionBudget (PDB) limits the number of pods that can be voluntarily disrupted at a time (e.g., during node maintenance). Ensures minimum availability during cluster operations.

```yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: order-service-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: order-service
```
