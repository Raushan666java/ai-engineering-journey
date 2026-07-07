# Chapter 10: Production AI — Deployment, Monitoring & Scaling

> **Take your AI services from local development to production. Learn to Dockerize Genkit and LangGraph services, orchestrate full-stack deployments with Kubernetes, monitor with OpenTelemetry, and implement CI/CD pipelines for AI applications.**

## Learning Objectives

After completing this chapter, you will be able to:

- Dockerize Genkit and LangGraph AI services with optimized multi-stage builds
- Set up Docker Compose for a full-stack stack (Laravel + AI service + PostgreSQL + Redis)
- Deploy and scale AI workloads on Kubernetes
- Implement observability with OpenTelemetry, Prometheus, and Grafana
- Build CI/CD pipelines for AI applications with automated testing
- Perform load testing on AI endpoints
- Implement rate limiting, caching, and cost management strategies

## Estimated Time: 6 hours

---

## 10.1 Dockerizing AI Services

### Why Containerize AI Services?

Containerization provides **reproducibility**, **isolation**, and **scalability** for AI workloads. A Genkit or LangGraph service that runs on your laptop should run identically in production.

**Benefits specific to AI services:**
- Pin exact versions of Node.js, model SDKs, and system dependencies
- Control memory limits (critical for LLM inference)
- Reproduce environment for evaluation and testing
- Cold-start optimization with layer caching

### Dockerfile for a Genkit Service

```dockerfile
# Stage 1: Dependencies
FROM node:20-slim AS deps

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install ALL dependencies (including dev)
RUN npm ci

# Stage 2: Build
FROM node:20-slim AS build

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build TypeScript
RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# Stage 3: Production
FROM node:20-slim AS production

WORKDIR /app

# Install runtime system dependencies
RUN apt-get update -qq && \
    apt-get install -y -qq --no-install-recommends \
    ca-certificates \
    tini \
    && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN groupadd -r appuser && useradd -r -g appuser -d /app -s /sbin/nologin appuser

# Copy built artifacts
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./

# Set permissions
RUN chown -R appuser:appuser /app

USER appuser

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:4000/health', r => { process.exit(r.statusCode === 200 ? 0 : 1) }).on('error', () => process.exit(1))"

EXPOSE 4000

ENTRYPOINT ["/usr/bin/tini", "--"]

CMD ["node", "dist/index.js"]
```

### Multi-Stage Build Explained

The Dockerfile uses three stages:

1. **`deps` stage**: Installs all npm dependencies. This layer is cached unless `package.json` changes.
2. **`build` stage**: Compiles TypeScript, removes dev dependencies. Separating build from deps ensures we only copy what's needed.
3. **`production` stage**: Minimal runtime image with only production artifacts, non-root user, and health check.

### Dockerfile for a LangGraph Service

```dockerfile
FROM node:20-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-slim AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:20-slim
WORKDIR /app

# Install curl for health checks
RUN apt-get update -qq && apt-get install -y -qq --no-install-recommends curl tini && rm -rf /var/lib/apt/lists/*

RUN groupadd -r appuser && useradd -r -g appuser -d /app -s /sbin/nologin appuser

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./
COPY --from=build /app/graphs ./graphs

RUN chown -R appuser:appuser /app
USER appuser

# LangGraph serves on a different port
ENV PORT=3000
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

CMD ["node", "dist/agent-server.js"]
```

### Docker Compose for Full Stack

```yaml
# docker-compose.yml
version: '3.9'

services:
  genkit-service:
    build: ./ai-services/genkit
    ports: ['4000:4000']
    environment:
      NODE_ENV=production
      GOOGLE_GENAI_API_KEY=${GOOGLE_GENAI_API_KEY}
      DATABASE_URL=postgresql://app:secret@postgres:5432/ai_platform
      REDIS_URL=redis://redis:6379
      OTEL_EXPORTER_OTLP_ENDPOINT=http://otel-collector:4318
    depends_on: { postgres: { condition: service_healthy }, redis: { condition: service_healthy } }
    deploy: { resources: { limits: { memory: 2G }, reservations: { memory: 512M } } }

  langgraph-service:
    build: ./ai-services/langgraph
    ports: ['3000:3000']
    environment:
      NODE_ENV=production
      OPENAI_API_KEY=${OPENAI_API_KEY}
      REDIS_URL=redis://redis:6379
    depends_on: { redis: { condition: service_healthy } }
    deploy: { resources: { limits: { memory: 4G }, reservations: { memory: 1G } } }

  laravel-api:
    build: ./laravel-api
    ports: ['8080:80']
    environment:
      APP_ENV=production
      DB_CONNECTION=pgsql DB_HOST=postgres DB_DATABASE=ai_platform
      DB_USERNAME=app DB_PASSWORD=secret
      REDIS_HOST=redis REDIS_PORT=6379
      GENKIT_SERVICE_URL=http://genkit-service:4000
    depends_on: { postgres: { condition: service_healthy }, redis: { condition: service_healthy } }

  postgres:
    image: pgvector/pgvector:pg16
    environment: { POSTGRES_DB: ai_platform, POSTGRES_USER: app, POSTGRES_PASSWORD: secret }
    ports: ['5432:5432']
    volumes: [postgres-data:/var/lib/postgresql/data, ./init-scripts:/docker-entrypoint-initdb.d]
    healthcheck: { test: ['CMD-SHELL', 'pg_isready -U app -d ai_platform'], interval: 10s, timeout: 5s, retries: 5 }

  redis:
    image: redis:7-alpine
    ports: ['6379:6379']
    volumes: [redis-data:/data]
    healthcheck: { test: ['CMD', 'redis-cli', 'ping'], interval: 10s, timeout: 5s, retries: 5 }

  otel-collector:
    image: otel/opentelemetry-collector-contrib:latest
    command: ['--config=/etc/otel-collector-config.yaml']
    volumes: [./otel-collector-config.yaml:/etc/otel-collector-config.yaml]
    ports: ['4318:4318', '4317:4317', '8888:8888']

  prometheus:
    image: prom/prometheus:latest
    volumes: [./prometheus.yml:/etc/prometheus/prometheus.yml, prometheus-data:/prometheus]
    ports: ['9090:9090']

  grafana:
    image: grafana/grafana:latest
    ports: ['3001:3000']
    volumes: [grafana-data:/var/lib/grafana]
    environment: { GF_SECURITY_ADMIN_PASSWORD: admin }

  jaeger:
    image: jaegertracing/all-in-one:latest
    ports: ['16686:16686', '14250:14250']
    environment: { COLLECTOR_OTLP_ENABLED: true }

volumes: { postgres-data:, redis-data:, prometheus-data:, grafana-data: }
```

---

## 10.2 Kubernetes Deployment for AI Workloads

### Why Kubernetes for AI?

Kubernetes provides **autoscaling**, **self-healing**, **rolling updates**, and **resource management** — all critical for production AI services that experience variable load.

### Genkit Service Deployment Manifest

```yaml
# genkit-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: genkit-service
  namespace: ai-platform
spec:
  replicas: 3
  selector:
    matchLabels:
      app: genkit-service
  template:
    metadata:
      labels:
        app: genkit-service
      annotations:
        prometheus.io/scrape: 'true'
        prometheus.io/port: '4000'
    spec:
      containers:
        - name: genkit
          image: ghcr.io/your-org/genkit-service:v1.2.3
          ports: [{ containerPort: 4000 }]
          env:
            - name: NODE_ENV; value: 'production'
            - name: GOOGLE_GENAI_API_KEY
              valueFrom: { secretKeyRef: { name: ai-secrets, key: google-genai-api-key } }
            - name: DATABASE_URL
              valueFrom: { secretKeyRef: { name: ai-secrets, key: database-url } }
            - name: REDIS_URL; value: 'redis://redis-service:6379'
            - name: OTEL_EXPORTER_OTLP_ENDPOINT; value: 'http://otel-collector-service:4318'
          resources:
            requests: { memory: '512Mi', cpu: '250m' }
            limits: { memory: '2Gi', cpu: '1000m' }
          livenessProbe: { httpGet: { path: /health, port: 4000 }, initialDelaySeconds: 10, periodSeconds: 30 }
          readinessProbe: { httpGet: { path: /ready, port: 4000 }, initialDelaySeconds: 5, periodSeconds: 10 }
---
apiVersion: v1
kind: Service
metadata:
  name: genkit-service
  namespace: ai-platform
spec:
  selector: { app: genkit-service }
  ports: [{ port: 4000, targetPort: 4000 }]
  type: ClusterIP
```

### Horizontal Pod Autoscaler

```yaml
# genkit-hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: genkit-service-hpa
  namespace: ai-platform
spec:
  scaleTargetRef: { apiVersion: apps/v1, kind: Deployment, name: genkit-service }
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource: { name: cpu, target: { type: Utilization, averageUtilization: 70 } }
    - type: Resource
      resource: { name: memory, target: { type: Utilization, averageUtilization: 80 } }
  behavior:
    scaleUp: { stabilizationWindowSeconds: 60, policies: [{ type: Pods, value: 2, periodSeconds: 60 }] }
    scaleDown: { stabilizationWindowSeconds: 300, policies: [{ type: Pods, value: 1, periodSeconds: 120 }] }
```

### Ingress with Rate Limiting

```yaml
# ai-ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ai-ingress
  namespace: ai-platform
  annotations:
    nginx.ingress.kubernetes.io/limit-rps: '50'
    nginx.ingress.kubernetes.io/limit-burst: '100'
    nginx.ingress.kubernetes.io/enable-cors: 'true'
    nginx.ingress.kubernetes.io/cors-allow-origin: 'https://app.yourdomain.com'
spec:
  tls: [{ hosts: [api.yourdomain.com], secretName: ai-tls-secret }]
  rules:
    - host: api.yourdomain.com
      http:
        paths:
          - path: /api/genkit
            pathType: Prefix
            backend: { service: { name: genkit-service, port: { number: 4000 } } }
          - path: /api/agent
            pathType: Prefix
            backend: { service: { name: langgraph-service, port: { number: 3000 } } }
```

### K8s Resource Management for AI

AI services have unique resource profiles. They need **consistent CPU** during LLM calls (not burstable) and **predictable memory** for context windows.

| Resource | Recommendation | Reason |
|----------|---------------|--------|
| CPU request | 250m-500m minimum | LLM calls need consistent compute |
| CPU limit | 1-2 cores | Prevent noisy neighbors |
| Memory request | 512Mi-1Gi | Context window baseline |
| Memory limit | 2-4Gi | Spikes during large prompts |
| GPU (optional) | NVIDIA T4/A10G | For local model inference |

Use **Guaranteed QoS class** by setting requests = limits for predictable performance.

---

## 10.3 Monitoring with OpenTelemetry

### Instrumenting a Genkit Service

Genkit has built-in OpenTelemetry support. Enable it with environment variables and the Genkit telemetry configuration.

```typescript
import { genkit, z } from 'genkit';
import { geminiPro } from '@genkit-ai/google-genai';
import { instrument } from '@genkit-ai/telemetry';

// Configure OpenTelemetry
instrument({
  serviceName: 'genkit-production-service',
  instrumentations: [], // Default instrumentations for HTTP, gRPC
});

const ai = genkit({
  plugins: [geminiPro()],
  telemetry: {
    // Enable detailed tracing
    instrumentation: true,
    // Log all prompts and responses (careful with PII)
    logInputs: true,
    logOutputs: true,
    // Set sample rate (1.0 = all requests)
    sampler: 1.0,
  },
});
```

### OpenTelemetry Collector & Prometheus Configuration

```yaml
# otel-collector-config.yaml
receivers:
  otlp:
    protocols: { grpc: { endpoint: 0.0.0.0:4317 }, http: { endpoint: 0.0.0.0:4318 } }
processors:
  batch: { timeout: 1s, send_batch_size: 1024 }
  memory_limiter: { check_interval: 1s, limit_mib: 512 }
exporters:
  prometheus: { endpoint: 0.0.0.0:8888, namespace: ai_platform }
  otlp: { endpoint: jaeger:4317, tls: { insecure: true } }
service:
  pipelines:
    traces: { receivers: [otlp], processors: [memory_limiter, batch], exporters: [otlp] }
    metrics: { receivers: [otlp], processors: [memory_limiter, batch], exporters: [prometheus] }

# prometheus.yml
global: { scrape_interval: 15s }
scrape_configs:
  - job_name: 'otel-collector'
    static_configs: [{ targets: ['otel-collector:8888'] }]
  - job_name: 'genkit-service'
    metrics_path: /metrics
    static_configs: [{ targets: ['genkit-service:4000'], labels: { service: 'genkit' } }]
```

### Key Metrics for Production AI

Every production AI service needs a standardized set of metrics to monitor health and cost:

| Category | Metric | Instrument Type | Alert Threshold |
|----------|--------|----------------|-----------------|
| **Traffic** | Requests per second | Counter | Spike > 2x baseline |
| **Latency** | Flow duration (p50/p95/p99) | Histogram | p95 > 10s |
| **Errors** | Error rate by flow | Counter | Rate > 5% |
| **Tokens** | Input/output tokens per request | Counter | Budget-based |
| **Cost** | Daily/monthly spend | Counter | > 80% of budget |
| **Cache** | Cache hit ratio | Gauge | Ratio < 20% |
| **Rate Limit** | Rate-limited requests | Counter | > 1% of traffic |
| **LLM Calls** | Calls per model per minute | Counter | Monitor for spikes |

### Implementing Custom Metrics

```typescript
import { metrics } from '@opentelemetry/api';
const meter = metrics.getMeter('ai-platform', '1.0.0');

const requestCounter = meter.createCounter('ai_requests_total', { description: 'Total AI requests' });
const latencyHistogram = meter.createHistogram('ai_latency_ms', { description: 'Latency in ms', unit: 'ms', boundaries: [100, 500, 1000, 2000, 5000, 10000, 30000] });
const tokenCounter = meter.createCounter('ai_tokens_total', { description: 'Total tokens' });
const costCounter = meter.createCounter('ai_cost_total_usd', { description: 'Total cost USD' });

const monitoredFlow = ai.defineFlow(
  { name: 'monitoredFlow', inputSchema: z.object({ prompt: z.string() }), outputSchema: z.object({ response: z.string(), tokens: z.number() }) },
  async (input) => {
    const startTime = Date.now();
    requestCounter.add(1, { flow_name: 'monitoredFlow', environment: process.env.NODE_ENV ?? 'dev' });
    try {
      const result = await ai.generate({ model: geminiPro, prompt: input.prompt });
      const duration = Date.now() - startTime;
      const tokens = result.usage?.totalTokens ?? 0;
      latencyHistogram.record(duration, { flow_name: 'monitoredFlow' });
      tokenCounter.add(tokens, { model: 'gemini-pro' });
      costCounter.add(estimateCost(tokens, 'gemini-pro'), { model: 'gemini-pro' });
      return { response: result.text, tokens };
    } catch (error) {
      latencyHistogram.record(Date.now() - startTime, { flow_name: 'monitoredFlow', error: 'true' });
      throw error;
    }
  }
);
function estimateCost(tokens: number, model: string): number {
  const rates: Record<string, number> = { 'gemini-pro': 0.000125 / 1000, 'gpt-4o': 0.0025 / 1000, 'gpt-4o-mini': 0.00015 / 1000 };
  return tokens * (rates[model] ?? 0);
}
```

---

## 10.4 CI/CD for AI Applications

### CI/CD Pipeline Structure

AI applications need special CI/CD stages that go beyond traditional pipelines:

1. **Lint & Type Check** — Catch type errors early
2. **Unit Tests** — Test individual flows and tools
3. **Integration Tests** — Test with real LLM responses (recorded)
4. **Evaluation Pipeline** — Run eval suite on candidate model
5. **Build & Push** — Create Docker image
6. **Staging Deploy** — Deploy to staging environment
7. **Smoke Tests** — Verify health endpoints
8. **Production Deploy** — Rolling update to production

### GitHub Actions Pipeline (Abbreviated)

```yaml
name: AI Service CI/CD
on:
  push: { branches: [main], paths: ['ai-services/**', 'Dockerfile'] }
  pull_request: { branches: [main], paths: ['ai-services/**'] }
env: { REGISTRY: ghcr.io, IMAGE_NAME: ${{ github.repository }} }
jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres: { image: pgvector/pgvector:pg16, env: { POSTGRES_DB: ai_test, POSTGRES_USER: test, POSTGRES_PASSWORD: test }, ports: [5432:5432], options: '--health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5' }
      redis: { image: redis:7-alpine, ports: [6379:6379], options: '--health-cmd "redis-cli ping" --health-interval 10s --health-timeout 5s --health-retries 5' }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4 with: { node-version: '20', cache: 'npm', cache-dependency-path: './ai-services/package-lock.json' }
      - run: npm ci; working-directory: ./ai-services
      - run: npx tsc --noEmit && npx eslint src/; working-directory: ./ai-services
      - run: npx vitest run; working-directory: ./ai-services; env: { DATABASE_URL: postgresql://test:test@localhost:5432/ai_test }
      - run: npx tsx src/evaluation/run-suite.ts; working-directory: ./ai-services; env: { GOOGLE_GENAI_API_KEY: ${{ secrets.GOOGLE_GENAI_API_KEY }} }
  build-and-push:
    needs: test; if: github.ref == 'refs/heads/main'; runs-on: ubuntu-latest; permissions: { contents: read, packages: write }
    steps:
      - uses: actions/checkout@v4
      - uses: docker/setup-buildx-action@v3
      - uses: docker/login-action@v3 with: { registry: ${{ env.REGISTRY }}, username: ${{ github.actor }}, password: ${{ secrets.GITHUB_TOKEN }} }
      - uses: docker/build-push-action@v5 with: { context: ./ai-services, push: true, tags: 'ghcr.io/${{ github.repository }}:${{ github.sha }}' }
  deploy-staging:
    needs: build-and-push; runs-on: ubuntu-latest; environment: staging
    steps:
      - uses: azure/setup-kubectl@v3
      - run: kubectl set image deployment/genkit-service genkit=ghcr.io/${{ github.repository }}:${{ github.sha }} -n ai-platform-staging && kubectl rollout status deployment/genkit-service -n ai-platform-staging --timeout=5m
```

### Testing Recorded LLM Responses

To avoid API costs in CI, record LLM responses and replay them during testing:

```typescript
class LLMRecorder {
  constructor(private recordingsDir: string) {}
  async record(prompt: string, response: string): Promise<void> {
    await fs.writeFile(
      path.join(this.recordingsDir, `${this.hash(prompt)}.json`),
      JSON.stringify({ prompt, response, timestamp: new Date().toISOString() }, null, 2)
    );
  }
  async replay(prompt: string): Promise<string | null> {
    try {
      const data = await fs.readFile(path.join(this.recordingsDir, `${this.hash(prompt)}.json`), 'utf-8');
      return JSON.parse(data).response;
    } catch { return null; }
  }
  private hash(s: string): string {
    let h = 0; for (let i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h = h & h; }
    return Math.abs(h).toString(36);
  }
}
```

### Common CI/CD Pitfalls for AI

| Pitfall | Solution |
|---------|----------|
| Running eval with real LLM calls in every PR | Use recorded responses for CI, run full eval nightly |
| Flaky integration tests due to LLM non-determinism | Use semantic similarity assertions (score > 0.8) instead of exact match |
| Long pipeline times (15+ minutes) | Parallelize test jobs; cache node_modules and Docker layers |
| Expensive CI bills from LLM usage | Record responses once, replay for all subsequent runs |
| Deploying untested prompt changes | Validate prompt templates in CI before merge |

---

## 10.5 Load Testing AI Endpoints

### Load Testing with k6

```javascript
// k6-load-test.js
import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Rate, Trend } from 'k6/metrics';

const errorRate = new Rate('errors');
const aiLatency = new Trend('ai_latency_ms');

export const options = {
  stages: [
    { duration: '2m', target: 10 }, { duration: '5m', target: 50 },
    { duration: '2m', target: 100 }, { duration: '5m', target: 100 }, { duration: '2m', target: 0 },
  ],
  thresholds: { errors: ['rate<0.05'], ai_latency_ms: ['p(95)<10000'] },
};

export default function () {
  group('AI Generation Endpoint', () => {
    const payload = JSON.stringify({ prompt: 'Explain quantum computing', maxTokens: 500 });
    const params = {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${__ENV.API_KEY}`, 'X-Request-ID': `load-test-${__VU}-${__ITER}` },
      timeout: '120s',
    };
    const startTime = Date.now();
    const response = http.post(`${__ENV.BASE_URL || 'http://localhost:4000'}/api/generate`, payload, params);
    const duration = Date.now() - startTime;
    check(response, { 'status is 200': (r) => r.status === 200 });
    aiLatency.add(duration);
    errorRate.add(response.status !== 200);
    sleep(Math.random() * 3 + 1);
  });
}
```

### Interpreting Load Test Results

```typescript
function analyzeLoadTest(data: any[]): LoadTestReport {
  const latencies = data.map(r => r.duration).sort((a, b) => a - b);
  const total = data.length, errors = data.filter(r => r.status !== 200).length;
  const totalTokens = data.reduce((s, r) => s + (r.tokens ?? 0), 0);
  const durationMs = Math.max(...data.map(r => r.timestamp)) - Math.min(...data.map(r => r.timestamp));
  return {
    totalRequests: total, successfulRequests: total - errors, errorRate: errors / total,
    avgLatency: latencies.reduce((a, b) => a + b, 0) / latencies.length,
    p95: latencies[Math.floor(latencies.length * 0.95)],
    requestsPerSecond: (total / durationMs) * 1000,
    estimatedCost: totalTokens * 0.000125 / 1000,
  };
}
```

### Progressive Rollout Strategy for AI Deployments

Deploying AI changes requires more care than traditional software due to non-deterministic outputs:

1. **Canary Deployment (10% traffic)**: Route 10% of requests to the new version. Monitor error rates and evaluation scores.
2. **Evaluate in Production**: Run the evaluation pipeline on the canary's outputs. Compare against the baseline version.
3. **Gradual Rollout (25% → 50% → 100%)**: Increase traffic only if eval scores meet thresholds. Roll back immediately if scores drop.
4. **Monitor for Drift**: After full rollout, continue monitoring evaluation metrics for 48 hours. LLM behavior can shift over time.
5. **Document the Rollback**: Every deployment should have a one-command rollback (`kubectl rollout undo deployment/genkit-service`).

```typescript
// Canary traffic split configuration
const canaryConfig = {
  versions: [
    { name: 'stable', weight: 90, tag: 'v1.2.0' },
    { name: 'canary', weight: 10, tag: 'v1.3.0-rc1' },
  ],
  evaluation: {
    minScore: 0.85,
    minSamples: 100,
    rollbackOnFailure: true,
  },
};
```

---

## 10.6 Rate Limiting, Caching & Cost Management

### Rate Limiters (Request-Based & Token-Based)

```typescript
// Redis-based sliding window rate limiter
class RedisRateLimiter {
  constructor(private config: { windowMs: number; maxRequests: number }) {}
  middleware() {
    return async (req: any, res: any, next: any) => {
      const key = `rate-limit:${req.ip}:${Math.floor(Date.now() / this.config.windowMs)}`;
      try {
        const client = createClient({ url: process.env.REDIS_URL }); await client.connect();
        const current = await client.incr(key);
        if (current === 1) await client.expire(key, this.config.windowMs / 1000);
        await client.quit();
        res.setHeader('X-RateLimit-Remaining', Math.max(0, this.config.maxRequests - current));
        if (current > this.config.maxRequests) return res.status(429).json({ error: 'rate_limit_exceeded', retryAfter: Math.ceil(this.config.windowMs / 1000) });
        next();
      } catch { next(); } // fail open
    };
  }
}

// Token bucket rate limiter (tracks by API key, for fine-grained control)
class TokenBucketLimiter {
  private buckets = new Map<string, { tokens: number; lastRefill: number }>();
  constructor(private maxTokens: number, private refillRate: number, private intervalMs: number = 1000) {}
  consume(key: string, tokens: number = 1): { allowed: boolean; remaining: number; retryAfterMs?: number } {
    this.refill(key);
    const bucket = this.buckets.get(key);
    if (!bucket || bucket.tokens < tokens) {
      const retryAfter = bucket ? Math.ceil(((tokens - bucket.tokens) / this.refillRate) * 1000) : this.intervalMs;
      return { allowed: false, remaining: bucket?.tokens ?? 0, retryAfterMs: retryAfter };
    }
    bucket.tokens -= tokens;
    return { allowed: true, remaining: bucket.tokens };
  }
  private refill(key: string) {
    const now = Date.now();
    const bucket = this.buckets.get(key) ?? { tokens: this.maxTokens, lastRefill: now };
    const elapsed = now - bucket.lastRefill;
    bucket.tokens = Math.min(this.maxTokens, bucket.tokens + Math.floor((elapsed / this.intervalMs) * this.refillRate));
    bucket.lastRefill = now;
    this.buckets.set(key, bucket);
  }
}
```

### Caching Layer (Exact + Semantic)

```typescript
class AICache {
  private cache = new Map<string, { data: any; expiry: number }>();
  constructor(private config: { ttlMs: number; maxSize: number; namespace: string }) {}

  generateKey(input: any): string {
    const str = JSON.stringify(input); let h = 0;
    for (let i = 0; i < str.length; i++) { h = ((h << 5) - h) + str.charCodeAt(i); h = h & h; }
    return `${this.config.namespace}:${Math.abs(h).toString(36)}`;
  }

  get(key: string) { const e = this.cache.get(key); if (!e) return undefined; if (Date.now() > e.expiry) { this.cache.delete(key); return undefined; } return e.data; }

  set(key: string, data: any) {
    if (this.cache.size >= this.config.maxSize) { const first = this.cache.keys().next().value; if (first) this.cache.delete(first); }
    this.cache.set(key, { data, expiry: Date.now() + this.config.ttlMs });
  }
}
```

### Cost Management

```typescript
class CostManager {
  private costs = new Map<string, number>();
  constructor(private budget: { monthlyUsd: number; modelRates: Record<string, number> }) {}

  async checkBudget(model: string, tokens: number): Promise<boolean> {
    const cost = (this.budget.modelRates[model] ?? 0.001 / 1000) * tokens;
    const month = new Date().toISOString().substring(0, 7);
    const total = (this.costs.get(month) ?? 0) + cost;
    this.costs.set(month, total);
    if (total > this.budget.monthlyUsd) { console.error('Budget exceeded'); return false; }
    return true;
  }
}

// Usage in a Genkit flow
const cachedFlow = ai.defineFlow(
  { name: 'cachedGeneration', inputSchema: z.object({ prompt: z.string() }), outputSchema: z.object({ text: z.string(), cached: z.boolean() }) },
  async (input) => {
    const cache = new AICache({ ttlMs: 3600000, maxSize: 1000, namespace: 'genkit' });
    const key = cache.generateKey(input);
    const cached = cache.get(key);
    if (cached) return { text: cached, cached: true };
    const result = await ai.generate({ model: geminiPro, prompt: input.prompt });
    cache.set(key, result.text);
    return { text: result.text, cached: false };
  }
);
```

---

## 10.7 Architecture Diagrams

### Docker Architecture

```mermaid
graph TB
    subgraph "Docker Host"
        subgraph "AI Services"
            GS[Genkit Service<br/>Port 4000]
            LS[LangGraph Service<br/>Port 3000]
        end

        subgraph "Web API"
            LA[Laravel API<br/>Port 8080]
        end

        subgraph "Data Layer"
            PG[PostgreSQL<br/>pgvector<br/>Port 5432]
            RD[Redis<br/>Port 6379]
        end

        subgraph "Observability"
            OTC[OTel Collector<br/>Port 4318]
            PR[Prometheus<br/>Port 9090]
            GF[Grafana<br/>Port 3001]
            JR[Jaeger<br/>Port 16686]
        end
    end

    LA --> GS
    LA --> LS
    GS --> PG
    GS --> RD
    LS --> RD
    GS --> OTC
    LS --> OTC
    OTC --> PR
    OTC --> JR
    PR --> GF
```

### Kubernetes Deployment

```mermaid
graph TB
    subgraph "Kubernetes Cluster"
        subgraph "Namespace: ai-platform"
            subgraph "Deployments"
                GSD[Genkit<br/>Deployment<br/>Replicas: 3]
                LSD[LangGraph<br/>Deployment<br/>Replicas: 2]
            end

            subgraph "Services"
                GSS[Genkit Service<br/>ClusterIP:4000]
                LSS[LangGraph Service<br/>ClusterIP:3000]
            end

            subgraph "Autoscaling"
                HPA[HPA<br/>Min:2 Max:10<br/>CPU:70% Mem:80%]
            end

            subgraph "Ingress"
                ING[Ingress<br/>api.yourdomain.com]
                TLS[TLS Termination]
                RL[Rate Limit<br/>50 RPS]
            end
        end

        subgraph "Data Services"
            POS[PostgreSQL<br/>StatefulSet]
            RED[Redis<br/>StatefulSet]
        end

        subgraph "Monitoring"
            OTC[OTel Collector<br/>DaemonSet]
            PRM[Prometheus<br/>Deployment]
            GRF[Grafana<br/>Deployment]
        end
    end

    User --> ING
    ING --> GSS
    ING --> LSS
    GSD --- HPA
    LSD --- HPA
    GSS --> GSD
    LSS --> LSD
    GSD --> POS
    GSD --> RED
    GSD --> OTC
    LSD --> OTC
    OTC --> PRM
    PRM --> GRF
```

### Monitoring Stack

```mermaid
graph LR
    subgraph "Application"
        GS[Genkit Service]
        LS[LangGraph Service]
        LA[Laravel API]
    end

    subgraph "Collection"
        OTC[OTel Collector]
    end

    subgraph "Storage"
        PR[Prometheus<br/>Metrics]
        JR[Jaeger<br/>Traces]
        LK[Loki<br/>Logs]
    end

    subgraph "Visualization"
        GF[Grafana Dashboards]
    end

    subgraph "Alerting"
        AM[AlertManager]
        DC[Discord/PagerDuty]
    end

    GS -->|OTLP| OTC
    LS -->|OTLP| OTC
    LA -->|OTLP| OTC
    OTC -->|Metrics| PR
    OTC -->|Traces| JR
    OTC -->|Logs| LK
    PR --> GF
    JR --> GF
    LK --> GF
    PR --> AM
    AM --> DC
```

### CI/CD Pipeline for AI Apps

```mermaid
graph LR
    subgraph "CI Pipeline"
        LINT[Lint & TypeCheck]
        UNIT[Unit Tests]
        INT[Integration Tests]
        EVAL[Eval Suite]
    end

    subgraph "Build & Push"
        BUILD[Docker Build]
        PUSH[Push to Registry]
    end

    subgraph "Staging"
        DEPLOY_STG[Deploy Staging]
        SMOKE[Smoke Tests]
    end

    subgraph "Production"
        APPROVAL[Manual Approval]
        DEPLOY_PROD[Rolling Update]
        MONITOR[Monitor 15min]
    end

    Code[Code Push] --> LINT
    LINT --> UNIT
    UNIT --> INT
    INT --> EVAL
    EVAL --> BUILD
    BUILD --> PUSH
    PUSH --> DEPLOY_STG
    DEPLOY_STG --> SMOKE
    SMOKE --> APPROVAL
    APPROVAL --> DEPLOY_PROD
    DEPLOY_PROD --> MONITOR
    MONITOR -->|Rollback if needed| ROLLBACK[Auto Rollback]
    DEPLOY_PROD -->|Success| DONE[Done]
```

---

## 10.8 Summary & Practical Takeaways

### Key Concepts

1. **Docker Multi-Stage Builds**: Separate dependency installation, compilation, and runtime for minimal production images.
2. **Docker Compose**: Orchestrate Genkit, LangGraph, Laravel, PostgreSQL, Redis, and observability stack locally.
3. **Kubernetes**: Use Deployments for AI services, HPA for autoscaling, and Ingress for traffic management.
4. **OpenTelemetry**: Instrument AI services for traces, metrics, and logs with a collector pipeline.
5. **CI/CD**: AI pipelines need stages beyond traditional software — include evaluation gates.
6. **Rate Limiting**: Use Redis-based rate limiters with token-bucket algorithms for fine-grained control.
7. **Caching**: Implement both exact and semantic caching to reduce LLM costs.
8. **Cost Management**: Track daily and monthly spend; implement model-specific budget limits.

### Practical Takeaways

- **Always set resource limits**: AI services without memory limits will OOM the node.
- **Health checks on every service**: Liveness and readiness probes prevent serving traffic to degraded pods.
- **Fail open for rate limiting**: If Redis is down, allow requests rather than blocking everything.
- **Cache aggressively**: Semantic caching can reduce costs by 40-60% for repetitive queries.
- **Monitor token usage**: Measuring tokens is more important than request count for cost management.
- **Record LLM responses in CI**: Save money by replaying recorded responses during test runs.
- **Start with Docker Compose**: Get the full stack running locally before deploying to K8s.

### Production Checklist

Before deploying any AI service to production, verify each item:

- [ ] Dockerfile with multi-stage build and non-root user
- [ ] Health check endpoint (`/health`) and readiness check (`/ready`)
- [ ] Resource limits (CPU and memory) set on containers and K8s pods
- [ ] Environment variables via secrets (never hardcoded)
- [ ] Rate limiting configured (request-level and token-level)
- [ ] Caching layer (exact match) enabled for repeated queries
- [ ] OpenTelemetry instrumentation on every flow
- [ ] Prometheus metrics endpoint exposed
- [ ] Logging with structured log format (JSON)
- [ ] Graceful degradation path for LLM failures
- [ ] Cost tracking and budget alerts configured
- [ ] CI/CD pipeline with evaluation gate before production deploy
- [ ] Load test results within SLA thresholds
- [ ] Rollback plan documented and tested

---

## Chapter Quiz

### Question 1
Why use multi-stage Docker builds for AI services?

A) To reduce the number of Docker commands
B) To create smaller production images by separating build and runtime dependencies
C) To run multiple services in one container
D) To enable GPU support in containers

**Answer**: B

### Question 2
In Kubernetes, what does a Horizontal Pod Autoscaler (HPA) do?

A) Manually scales pods based on user requests
B) Automatically adjusts the number of pod replicas based on CPU/memory utilization
C) Horizontally divides the database across pods
D) Provides load balancing between services

**Answer**: B

### Question 3
What is the role of the OpenTelemetry Collector in the monitoring stack?

A) To generate test traffic for AI services
B) To receive, process, and export telemetry data (traces, metrics, logs) to backends
C) To collect user feedback on AI responses
D) To manage Docker container lifecycle

**Answer**: B

### Question 4
Why would you record LLM responses for CI/CD pipelines?

A) To reduce API costs during test runs
B) To improve response quality
C) To bypass rate limits
D) To train custom models

**Answer**: A

### Question 5
In the token bucket rate limiting algorithm, what does the "refill rate" control?

A) The maximum number of requests per minute
B) How quickly tokens are restored to the bucket
C) The size of the API response
D) The number of users allowed simultaneously

**Answer**: B

### Question 6
What is semantic caching?

A) Caching responses based on exact prompt matching
B) Caching responses based on semantic similarity of prompts using embeddings
C) Caching the meaning of words in a dictionary
D) Caching model weights for faster loading

**Answer**: B

### Question 7
Which Kubernetes resource type should you use for a PostgreSQL database in production?

A) Deployment
B) StatefulSet
C) DaemonSet
D) Job

**Answer**: B

### Question 8
What is the purpose of the `fail open` pattern in rate limiting?

A) To fail all requests when the rate limiter errors
B) To allow requests to proceed if the rate limiter itself fails (e.g., Redis is down)
C) To open a circuit breaker for debugging
D) To fail requests that don't have proper authentication

**Answer**: B

### Question 9
In the CI/CD pipeline described, what comes immediately after the Docker build stage?

A) Unit tests
B) Deploy to staging
C) Push to container registry
D) Manual approval

**Answer**: C

### Question 10
What is the recommended Kubernetes QoS class for AI services?

A) BestEffort
B) Burstable
C) Guaranteed
D) LatencySensitive

**Answer**: C (Guaranteed, by setting requests = limits, ensures predictable performance)

---

## Exercises

### Exercise 1: Dockerize a Genkit Service (Easy)

Take the Genkit service from Chapter 2 and create a complete Docker setup:

1. Write a multi-stage Dockerfile (deps → build → production)
2. Add a health check endpoint (`/health`)
3. Add a `.dockerignore` file
4. Build the image and verify it runs locally

**Deliverable**: Dockerfile, .dockerignore, and a screenshot of the running container responding to `/health`.

### Exercise 2: Docker Compose Full Stack (Medium)

Create a `docker-compose.yml` that runs:

1. A Genkit AI service (your Docker image from Exercise 1)
2. PostgreSQL with pgvector
3. Redis
4. A simple Express.js test client that calls the AI service

All services should:
- Use a shared network
- Have health checks
- Store data in named volumes
- Use environment variables from a `.env` file

**Deliverable**: `docker-compose.yml`, test client code, and proof that all services are healthy.

### Exercise 3: Kubernetes Deployment (Medium)

Write Kubernetes manifests for a Genkit service:

1. `deployment.yaml` — Deployment with 3 replicas, resource limits, liveness/readiness probes
2. `service.yaml` — ClusterIP service
3. `hpa.yaml` — Horizontal Pod Autoscaler (CPU at 70%, min 2, max 10)
4. `ingress.yaml` — Ingress with rate limiting annotations

**Deliverable**: All four YAML files with proper Kubernetes annotations and configurations.

### Exercise 4: OpenTelemetry Instrumentation (Hard)

Add full OpenTelemetry instrumentation to a Genkit service:

1. Configure the Genkit flow with telemetry enabled
2. Add custom metrics (request counter, latency histogram, token counter)
3. Create a custom span around a critical flow operation
4. Set up the OpenTelemetry Collector configuration to receive OTLP and export to Prometheus and Jaeger
5. Verify that traces appear in Jaeger UI and metrics in Prometheus

**Deliverable**: TypeScript instrumentation code, otel-collector-config.yaml, and screenshots of Jaeger traces and Prometheus metrics.

### Exercise 5: Rate Limiter + Cache + Cost Manager (Hard)

Build production middleware for an AI service that combines:

1. **Redis-based rate limiter**: 30 requests/minute per IP, with proper headers
2. **Semantic cache**: Cache responses for similar prompts (cosine similarity > 0.95)
3. **Cost manager**: Track daily spend and reject requests if daily budget is exceeded

All three should work together:
- Check cache first (return cached if found)
- Check rate limit (reject if exceeded)
- Check budget (reject if exceeded)
- Track cost and cache the response

**Deliverable**: Complete TypeScript implementation with Express middleware, test cases, and a demonstration of all three components working together.

---

> **Next**: [Chapter 11: AI Evaluation & Observability →](11-evaluation-observability.md)
