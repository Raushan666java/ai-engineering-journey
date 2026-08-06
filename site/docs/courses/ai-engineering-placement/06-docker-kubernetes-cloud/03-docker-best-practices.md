---
id: 03-docker-best-practices
slug: /ai-engineering-placement/06-docker-kubernetes-cloud/03-docker-best-practices
title: "Docker Best Practices — Security, Optimization, and Production Readiness"
sidebar_label: "Docker Best Practices — Security, Optimization, and Production Readiness"
sidebar_position: 76
---
<!-- Clear Language: Keep sentences under 50 words -->
# Docker Best Practices — Security, Optimization, and Production Readiness

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Apply Dockerfile optimization techniques for faster builds and smaller images |
| LO2 | Implement Docker security best practices including least privilege and secret management |
| LO3 | Configure resource constraints and monitoring for production containers |
| LO4 | Manage image tagging, versioning, and registry hygiene |
| LO5 | Implement CI/CD integration patterns for Docker builds |
| LO6 | Troubleshoot common Docker production issues |

## Introduction

Containers and cloud platforms are where AI models live in production. Docker packages your model, Kubernetes orchestrates it, and cloud platforms scale it. This module covers the full deployment stack.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding docker best practices is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how docker best practices works in practice.

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 3.1 | Optimizing Dockerfiles | Layer ordering, multi-stage, slim base images |
| 3.2 | Security Best Practices | Least privilege, secrets, image scanning |
| 3.3 | Resource Management | CPU/memory limits, OOM handling |
| 3.4 | Image Tagging and Versioning | Semantic tags, digests, registry management |
| 3.5 | CI/CD Integration | GitHub Actions, GitLab CI, build caching |
| 3.6 | Production Monitoring | Health checks, logging, metrics |
| 3.7 | Common Pitfalls | Zombie processes, permission issues, timezones |
| 3.8 | Performance Tuning | Layer caching, buildkit, parallel builds |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Optimize Dockerfiles] --> B[Security Hardening]
    B --> C[Resource Management]
    C --> D[Image Versioning]
    D --> E[CI/CD Integration]
    E --> F[Monitoring]
    F --> G[Pitfalls]
    G --> H[Performance Tuning]
```

## 3.1 Optimizing Dockerfiles

A well-optimized Dockerfile produces smaller, faster-building, and more secure images.

**Choose minimal base images**:

```dockerfile

## Fat — ~800MB
FROM python:3.11

## Slim — ~120MB
FROM python:3.11-slim

## Alpine — ~50MB (use with caution)
FROM python:3.11-alpine

## Distroless — ~40MB (no shell, no package manager)
FROM gcr.io/distroless/python3:latest
```

**Order layers for maximum cache reuse**:

```dockerfile

## ❌ Inefficient — cache invalidated on every code change
FROM node:20
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

## ✅ Efficient — dependency layer cached separately
FROM node:20 AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-slim AS runtime
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
CMD ["node", "dist/server.js"]
```

**Multi-stage build patterns**:

```dockerfile

## Stage 1: Compile
FROM golang:1.21 AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -o server .

## Stage 2: Runtime
FROM alpine:3.18
RUN addgroup -S app && adduser -S app -G app
COPY --from=builder /app/server /server
USER app
EXPOSE 8080
CMD ["/server"]
```

**Additional optimization tips**:

```dockerfile

## Combine RUN commands to reduce layers
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

## Use .dockerignore effectively

## Exclude: node_modules, .git, .env, *.md, __pycache__

## Set --no-cache-dir for pip
RUN pip install --no-cache-dir -r requirements.txt

## Use COPY --link for better cache behavior
COPY --link package*.json ./
```

## 3.2 Security Best Practices

Security must be integrated into every stage of the Docker workflow.

**Least privilege principle**:

```dockerfile

## ❌ Running as root
FROM node:20-alpine
COPY . /app
CMD ["node", "server.js"]

## ✅ Create and use non-root user
FROM node:20-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
WORKDIR /app
COPY --chown=appuser:appgroup . .
CMD ["node", "server.js"]
```

**Secret management**:

```dockerfile

## ❌ Never hardcode secrets
ENV API_KEY=sk-abc123  # BAD — exposed in image layers

## ✅ Build-time secrets (Docker BuildKit)

## docker build --secret id=api_key,env=API_KEY .
RUN --mount=type=secret,id=api_key \
    export API_KEY=$(cat /run/secrets/api_key) && \
    ./configure --api-key=$API_KEY
```

```bash

## Runtime secrets
docker run -e API_KEY=sk-abc123 my-image
docker run --secret id=api_key my-image  # Swarm secrets
```

**Image scanning**:

```bash

## Scan with Docker Scout
docker scout quickview my-image
docker scout recommendations my-image

## Scan with Trivy
trivy image my-image:latest

## Scan with Snyk
snyk container test my-image
```

**Security checklist**:

| Practice | Implementation |
|----------|----------------|
| No root user | `USER appuser` |
| Read-only rootfs | `docker run --read-only` |
| Drop capabilities | `--cap-drop=ALL --cap-add=NET_BIND_SERVICE` |
| No privileged mode | Never `--privileged` |
| Security scanning | Run in CI pipeline |
| Minimal base image | Use distroless or slim |
| No secrets in layers | Use BuildKit secrets |
| Regular updates | Rebase images weekly |

```bash

## Run with security hardening
docker run -d \
    --read-only \
    --cap-drop=ALL \
    --cap-add=NET_BIND_SERVICE \
    --security-opt=no-new-privileges:true \
    --tmpfs /tmp:rw,noexec,nosuid,size=64m \
    my-app
```

## 3.3 Resource Management

Containers without limits can exhaust host resources. Always set constraints.

```bash

## CPU constraints
docker run --cpus=0.5 my-image      # half a core
docker run --cpus=2 my-image        # 2 cores
docker run --cpuset-cpus=0,2 my-image # specific cores

## Memory constraints
docker run --memory=512m my-image
docker run --memory-reservation=256m my-image
docker run --memory-swap=1g my-image  # memory + swap limit

## Combined
docker run -d \
    --name api \
    --cpus=0.5 \
    --memory=256m \
    --memory-reservation=128m \
    --oom-kill-disable=false \
    my-api:latest
```

**Docker Compose resource configuration**:

```yaml
services:
  api:
    deploy:
      resources:
        limits:
          cpus: "0.50"
          memory: "256M"
        reservations:
          cpus: "0.25"
          memory: "128M"
    oom_kill_disable: false
    restart: unless-stopped
```

**Understanding OOM behavior**:

When a container exceeds its memory limit, the kernel's OOM killer terminates it. Set `--oom-score-adj` to control which containers get killed first:

```bash
docker run --oom-score-adj=-1000 my-critical-app  # less likely to be killed
docker run --oom-score-adj=1000 my-batch-job       # more likely to be killed
```

**Monitoring resource usage**:

```bash

## Real-time stats
docker stats

## Inspect resource usage history
docker inspect --format '{{.Name}}: Memory={{.HostConfig.Memory}} CPU={{.HostConfig.NanoCpus}}' container_name

## cgroup stats
cat /sys/fs/cgroup/memory/docker/<container_id>/memory.usage_in_bytes
```

## 3.4 Image Tagging and Versioning

Consistent image tagging enables traceability and rollback.

**Tagging strategies**:

```bash

## Semantic versioning
docker build -t my-app:1.0.0 .
docker build -t my-app:1.0 .
docker build -t my-app:1 .
docker build -t my-app:latest .

## Git-based tagging
docker build -t my-app:$(git rev-parse --short HEAD) .
docker build -t my-app:$(git describe --tags) .

## Environment tags
docker build -t my-app:staging-$(git rev-parse --short HEAD) .
docker build -t my-app:production-$(git rev-parse --short HEAD) .
```

**Image digests** — immutable references:

```bash

## Get digest
docker images --digests my-app

## Pull by digest
docker pull my-app@sha256:abc123...

## Use digest in production (immutable)
docker run my-app@sha256:def456...
```

**Registry management**:

```bash

## Tag for registry
docker tag my-app:1.0.0 registry.example.com/team/my-app:1.0.0

## Push
docker push registry.example.com/team/my-app:1.0.0

## Multi-architecture images
docker buildx build --platform linux/amd64,linux/arm64 -t my-app:latest --push .

## Garbage collection

## AWS ECR lifecycle policies

## Docker Registry: bin/registry garbage-collect /etc/docker/registry/config.yml
```

**Retention policies**:

| Pattern | Keep | Delete |
|---------|------|--------|
| Latest N versions | 5 most recent | Older than 5 |
| Date-based | Last 30 days | Older than 30 days |
| Git SHA | All tagged builds | All untagged builds |
| Environment | staging-* (7 days) | prod-* (indefinite) |

## 3.5 CI/CD Integration

Docker builds in CI/CD pipelines require optimized caching and security scanning.

**GitHub Actions example**:

```yaml
name: Build and Push Docker Image

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Cache Docker layers
        uses: actions/cache@v3
        with:
          path: /tmp/.buildx-cache
          key: ${{ runner.os }}-buildx-${{ github.sha }}
          restore-keys: |
            ${{ runner.os }}-buildx-

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: |
            ghcr.io/${{ github.repository }}:latest
            ghcr.io/${{ github.repository }}:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

      - name: Scan image
        run: |
          docker scout quickview ghcr.io/${{ github.repository }}:${{ github.sha }}
```

**Build caching strategies**:

```yaml

## GitHub Actions caching
cache-from: type=gha
cache-to: type=gha,mode=max

## Registry caching
cache-from: type=registry,ref=my-image:buildcache
cache-to: type=registry,ref=my-image:buildcache,mode=max

## Local caching
cache-from: type=local,src=/tmp/.buildx-cache
cache-to: type=local,dest=/tmp/.buildx-cache
```

**GitLab CI example**:

```yaml
docker-build:
  stage: build
  image: docker:24
  services:
    - docker:dind
  variables:
    DOCKER_BUILDKIT: "1"
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker build
        --cache-from $CI_REGISTRY_IMAGE:latest
        -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA
        -t $CI_REGISTRY_IMAGE:latest
        .
    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA
    - docker push $CI_REGISTRY_IMAGE:latest
```

## 3.6 Production Monitoring

**Health checks** — required for container orchestration:

```dockerfile

## HTTP health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

## TCP health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s \
    CMD nc -z localhost 5432 || exit 1

## Custom command
HEALTHCHECK --interval=60s --timeout=5s \
    CMD python /app/health_check.py || exit 1
```

**Logging best practices**:

```dockerfile

## Send logs to stdout/stderr
ENV PYTHONUNBUFFERED=1

## Configure application logger

## Python: logging.basicConfig(stream=sys.stdout)

## Node: pino-pretty

## Java: Logback console appender
```

```yaml

## Compose logging configuration
services:
  api:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

**Metrics exposure**:

```dockerfile

## Expose metrics endpoint
EXPOSE 9090

## Prometheus metrics (Python)
RUN pip install prometheus-client
```

```python
from prometheus_client import Counter, Histogram, start_http_server

REQUEST_COUNT = Counter("http_requests_total", "Total HTTP requests")
REQUEST_DURATION = Histogram("http_request_duration_seconds", "HTTP request duration")

@app.get("/metrics")
def metrics():
    return Response(prometheus_client.generate_latest(), media_type="text/plain")
```

## 3.7 Common Pitfalls

**Zombie processes**: PID 1 in a container must handle signals properly. Use a minimal init system.

```dockerfile

## Solution 1: Use tini (tiny init)
FROM python:3.11-slim
RUN apt-get update && apt-get install -y tini
ENTRYPOINT ["tini", "--"]
CMD ["python", "app.py"]

## Solution 2: Use dumb-init
FROM node:20-alpine
RUN apk add --no-cache dumb-init
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server.js"]
```

**Permission issues with volumes**:

```dockerfile

## Match container user with host user
RUN adduser -u 1001 appuser
USER appuser
```

**Timezone configuration**:

```dockerfile

## Set timezone
ENV TZ=UTC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

## Or for Debian-based
RUN apt-get install -y tzdata && \
    ln -snf /usr/share/zoneinfo/UTC /etc/localtime
```

**File descriptor limits**:

```bash

## Increase in docker run
docker run --ulimit nofile=65536:65536 my-app

## Or in Docker Compose
ulimits:
  nofile:
    soft: 65536
    hard: 65536
```

**Common Dockerfile mistakes**:

```dockerfile

## ❌ Wrong
COPY . .
RUN npm install
RUN npm test
RUN npm run build

## ✅ Right
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm test
RUN npm run build
```

## 3.8 Performance Tuning

**BuildKit features**:

```bash

## Enable BuildKit
export DOCKER_BUILDKIT=1
docker build --progress=plain -t my-app .

## Parallel builds
docker build --parallel -t my-app .

## Cache mounts
RUN --mount=type=cache,target=/root/.npm \
    npm ci

## Bind mounts for temporary tools
RUN --mount=type=bind,source=scripts,target=/scripts \
    /scripts/build.sh
```

**Layer compression**:

```dockerfile

## Use buildkit's compression

## docker build --output=type=image,name=my-app,compression=zstd

## Squash layers (use with caution — breaks cache)

## docker build --squash -t my-app .
```

**Network performance**:

```bash

## Use host network for high-performance needs
docker run --network=host my-app

## Use macvlan for direct network access
docker network create -d macvlan --subnet=192.168.1.0/24 my-network
```

**Storage driver selection**:

| Driver | Pros | Cons |
|--------|------|------|
| overlay2 | Default, fast, stable | Requires Linux 4.0+ |
| fuse-overlayfs | Works in rootless mode | Slower than overlay2 |
| devicemapper | Legacy | Not recommended |
| aufs | Legacy | Not in mainline kernel |

```bash

## Check current storage driver
docker info | grep "Storage Driver"

## Switch (daemon.json)
{
  "storage-driver": "overlay2"
}
```

---

## TypeScript Parallel

TypeScript can orchestrate Docker operations and enforce best practices through automation:

```typescript
import { execSync } from "child_process";

interface DockerBuildOptions {
  context: string;
  tag: string;
  platform?: string;
  cacheFrom?: string;
  secrets?: Record<string, string>;
}

function dockerBuild(options: DockerBuildOptions): void {
  const cmd = [
    "docker buildx build",
    `--file "${options.context}/Dockerfile"`,
    `-t ${options.tag}`,
    options.platform ? `--platform ${options.platform}` : "",
    options.cacheFrom ? `--cache-from ${options.cacheFrom}` : "",
    ...Object.entries(options.secrets || {}).map(
      ([id, val]) => `--secret id=${id},env=${val}`
    ),
    options.context,
  ]
    .filter(Boolean)
    .join(" ");

  execSync(cmd, { stdio: "inherit" });
}

// Enforce best practice: multi-arch + build cache
dockerBuild({
  context: ".",
  tag: "my-app:latest",
  platform: "linux/amd64,linux/arm64",
  cacheFrom: "type=gha",
});
```

---

## Summary

- Use minimal base images (slim, alpine, distroless) to reduce attack surface and size; distroless images have no shell or package manager
- Order Dockerfile instructions by change frequency — dependencies first, code last — to maximize layer caching
- Multi-stage builds separate compilation from runtime, producing images that are 10-100x smaller
- Never run as root in containers; create a dedicated user with minimal permissions and drop all non-essential capabilities
- Use BuildKit secrets for build-time credentials; never hardcode secrets in image layers
- Always set CPU and memory limits on containers to prevent resource exhaustion on the host
- Use semantic versioning or Git SHA-based tags for traceability; pin production images by digest for immutability
- Implement health checks, structured logging to stdout, and metrics endpoints in every production container
- Use tini or dumb-init as PID 1 to handle signal forwarding and prevent zombie processes
- Integrate vulnerability scanning (Trivy, Docker Scout, Snyk) into CI/CD pipelines to catch issues before deployment

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Building images | Multi-stage, slim base, .dockerignore | Single-stage, fat base |
| Security | Non-root user, read-only rootfs, scan images | Running as root, no scanning |
| Resource limits | Always set CPU/memory limits | No limits (can crash host) |
| Image tags | Semantic version + Git SHA | Only `latest` tag |
| CI/CD pipeline | Cache Docker layers between builds | Rebuilding from scratch each time |
| Secrets | BuildKit secrets or runtime env | Hardcoding in Dockerfile |
| Logging | Write to stdout/stderr with rotation | Writing to files inside container |
| Data persistence | Named volumes | Storing data in container writable layer |

## Interview Q&A

<details class="tp-qa-card" data-qid="docker-s03-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: How do you reduce Docker image size for production?
  </summary>
  <div class="tp-qa-answer">
    <p>Several strategies combined:</p>
    <ol>
      <li><strong>Minimal base image</strong>: Use <code>-slim</code>, <code>-alpine</code>, or distroless images instead of full OS images</li>
      <li><strong>Multi-stage builds</strong>: Build in one stage, copy only artifacts to the final stage</li>
      <li><strong>Layer cleanup</strong>: Combine RUN commands, remove package manager caches in the same layer</li>
      <li><strong>.dockerignore</strong>: Exclude development files, tests, documentation</li>
    </ol>
    <pre><code># Python: slim saves ~700MB vs full
FROM python:3.11-slim  # ~120MB vs ~887MB

## Node: alpine saves ~300MB vs full
FROM node:20-alpine  # ~120MB vs ~400MB</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s03-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: Why should you not run containers as root? How do you set up a non-root user?
  </summary>
  <div class="tp-qa-answer">
    <p>Running as root in a container is dangerous because: if the container is compromised, the attacker has root access to the containerized processes; and if there's a kernel exploit, they can escape to the host.</p>
    <pre><code># Create non-root user
FROM node:20-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
WORKDIR /app
COPY --chown=appuser:appgroup . .
CMD ["node", "server.js"]

## If the app needs privileged ports (&lt;1024), use NET_BIND_SERVICE
docker run --cap-add=NET_BIND_SERVICE my-app</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s03-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: Explain Docker layer caching. How can you optimize it in CI/CD?
  </summary>
  <div class="tp-qa-answer">
    <p>Docker caches each layer after a successful build. On subsequent builds, if the instruction and context haven't changed, Docker reuses the cached layer.</p>
    <p><strong>Optimization strategies</strong>:</p>
    <ul>
      <li>Order instructions by stability: system packages → language runtime → dependencies → code</li>
      <li>Copy dependency manifests separately before running install commands</li>
      <li>Use BuildKit's <code>--cache-from</code> to pull cache from registry or previous builds</li>
      <li>In CI/CD, restore cache from a previous successful build</li>
    </ul>
    <pre><code># GitHub Actions cache
- uses: actions/cache@v3
  with:
    path: /tmp/.buildx-cache
    key: buildx-${{ github.sha }}
    restore-keys: buildx-</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s03-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: What is the purpose of HEALTHCHECK in a Dockerfile?
  </summary>
  <div class="tp-qa-answer">
    <p>HEALTHCHECK tells Docker how to test if a container is still working. It runs a command periodically inside the container. If the command fails repeatedly, Docker marks the container as unhealthy and can restart it.</p>
    <pre><code>HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1</code></pre>
    <p><strong>Options</strong>:</p>
    <ul>
      <li><code>--interval</code>: How often to run (default 30s)</li>
      <li><code>--timeout</code>: Maximum time for the check (default 30s)</li>
      <li><code>--start-period</code>: Grace period before first check (default 0s)</li>
      <li><code>--retries</code>: Consecutive failures before unhealthy (default 3)</li>
    </ul>
    <p>Orchestrators (Kubernetes, Docker Swarm) use health check status for service discovery and rolling updates.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s03-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you handle secrets in Docker builds and runtime?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Build-time secrets</strong> (Docker BuildKit):</p>
    <pre><code># Dockerfile
RUN --mount=type=secret,id=api_key \
    export KEY=$(cat /run/secrets/api_key) && \
    ./configure --key=$KEY

## Build command
docker build --secret id=api_key,env=API_KEY .</code></pre>
    <p><strong>Runtime secrets</strong>:</p>
    <ul>
      <li><code>docker run -e API_KEY=xxx my-image</code> (acceptable for local dev)</li>
      <li><code>docker run --secret id=api_key my-image</code> (Docker Swarm)</li>
      <li>Environment files: <code>docker run --env-file .env my-image</code></li>
      <li>External secret stores: HashiCorp Vault, AWS Secrets Manager</li>
    </ul>
    <p><strong>Never</strong>: Hardcode secrets in Dockerfile or copy .env files into the image.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s03-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What is the zombie process problem in Docker and how do you solve it?
  </summary>
  <div class="tp-qa-answer">
    <p>In Linux, PID 1 has special responsibilities: it must reap orphaned child processes (zombies) and forward signals. Many applications are not designed to be PID 1, so zombie processes accumulate and signals (SIGTERM, SIGINT) are not forwarded to child processes.</p>
    <p><strong>Solutions</strong>:</p>
    <pre><code># Option 1: tini (tiny init for containers)
FROM python:3.11-slim
RUN apt-get update && apt-get install -y tini
ENTRYPOINT ["tini", "--"]
CMD ["python", "app.py"]

## Option 2: dumb-init
FROM node:20-alpine
RUN apk add --no-cache dumb-init
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server.js"]

## Option 3: Use --init flag
docker run --init my-app</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s03-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is BuildKit and why should you use it?
  </summary>
  <div class="tp-qa-answer">
    <p>BuildKit is Docker's next-generation build system, available since Docker 18.09. It provides significant improvements over the legacy builder:</p>
    <ul>
      <li><strong>Parallel builds</strong>: Builds independent stages concurrently</li>
      <li><strong>Better cache management</strong>: More granular caching, cache mounts</li>
      <li><strong>Secrets support</strong>: <code>--mount=type=secret</code> for build-time secrets</li>
      <li><strong>SSH agent forwarding</strong>: <code>--mount=type=ssh</code> for private repositories</li>
      <li><strong>Multi-platform builds</strong>: Build for arm64, amd64 simultaneously</li>
      <li><strong>Inline cache</strong>: Cache metadata embedded in the image</li>
    </ul>
    <pre><code># Enable BuildKit
export DOCKER_BUILDKIT=1

## Build with cache mount
RUN --mount=type=cache,target=/root/.npm \
    npm ci

## Multi-platform build
docker buildx build --platform linux/amd64,linux/arm64 -t my-app .</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s03-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you debug a container that uses 100% CPU?
  </summary>
  <div class="tp-qa-answer">
    <p>Step-by-step debugging approach:</p>
    <ol>
      <li><strong>Identify container</strong>: <code>docker stats</code> shows CPU usage per container</li>
      <li><strong>Inspect processes</strong>: <code>docker top container_name</code></li>
      <li><strong>Profile inside container</strong>:
        <pre><code>docker exec -it container_name bash
top  # or htop
ps aux --sort=-%cpu</code></pre></li>
      <li><strong>Get thread dump</strong>:
        <pre><code># Java
docker exec container_name jstack -l &lt;pid&gt;

## Python
docker exec container_name python -c "import threading; print(threading.enumerate())"</code></pre></li>
      <li><strong>Set CPU limits</strong>: <code>docker update --cpus=0.5 container_name</code></li>
    </ol>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s03-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What is the difference between docker commit, save, and export?
  </summary>
  <div class="tp-qa-answer">
    <p>Three ways to capture container state:</p>
    <ul>
      <li><strong>docker commit</strong>: Creates a new image from a container's changes. Not recommended — prefer Dockerfiles for reproducible builds.</li>
      <li><strong>docker save</strong>: Saves an image (with all layers and metadata) to a tar archive. Used for offline transfer.</li>
      <li><strong>docker export</strong>: Exports a container's filesystem as a tar archive. No history, no metadata — just the files.</li>
    </ul>
    <pre><code># Save image (preserves layers, history)
docker save -o my-image.tar my-app:latest

## Export filesystem (flattened, no history)
docker export -o filesystem.tar container_name

## Import filesystem as image
cat filesystem.tar | docker import - imported-image:latest</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s03-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: What are Docker content trust and image signing?
  </summary>
  <div class="tp-qa-answer">
    <p>Docker Content Trust (DCT) provides image signing and verification using cryptographic signatures. It ensures that the image you pull is exactly what the publisher signed.</p>
    <pre><code># Enable content trust
export DOCKER_CONTENT_TRUST=1

## Push signed image
docker push my-registry/my-app:latest

## Only signed images can be pulled/run
docker run my-registry/my-app:latest  # fails if not signed

## Manage signing keys
docker trust key generate my-key
docker trust signer add --key my-key.pub signer my-registry/my-app</code></pre>
    <p><strong>Notary</strong>: The underlying service that manages trust metadata. Docker Hub provides a Notary server; you can run your own for private registries.</p>
    <p>Image signing prevents supply chain attacks by verifying image provenance and integrity.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which of the following Dockerfiles produces the smallest production image?

a) `FROM python:3.11` with `COPY . .` and `RUN pip install`
b) Multi-stage build with `FROM python:3.11-slim` for runtime
c) `FROM python:3.11-alpine` with `RUN pip install`
d) Single-stage `FROM ubuntu:latest` with Python installed

<details class="tp-qa-card" data-qid="docker-s03-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Multi-stage build with python:3.11-slim</strong></p><p>Multi-stage builds separate build tools from runtime, and slim base images are smaller than full or alpine (which may have compatibility issues).</p></div></details>

**Q2**: What Docker flag prevents a container from writing to its own filesystem?

a) `--read-only`
b) `--immutable`
c) `--no-write`
d) `--frozen`

<details class="tp-qa-card" data-qid="docker-s03-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) --read-only</strong></p><p>The --read-only flag makes the container's filesystem read-only, preventing any writes. Use --tmpfs for directories that need writes (like /tmp).</p></div></details>

**Q3**: Which instruction in a Dockerfile tells Docker how to verify a container is working?

a) `CHECK`
b) `HEALTHCHECK`
c) `STATUS`
d) `MONITOR`

<details class="tp-qa-card" data-qid="docker-s03-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) HEALTHCHECK</strong></p><p>HEALTHCHECK defines a command that Docker runs periodically to determine if the container is still healthy.</p></div></details>

**Q4**: What is the primary purpose of Docker Content Trust?

a) Speed up image pulls
b) Sign and verify image integrity
c) Compress image layers
d) Cache images locally

<details class="tp-qa-card" data-qid="docker-s03-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Sign and verify image integrity</strong></p><p>DCT uses cryptographic signatures to ensure images haven't been tampered with and come from a trusted publisher.</p></div></details>

**Q5**: Which flag limits a container to using at most one CPU core?

a) `--cpu=1`
b) `--cpus=1.0`
c) `--cpu-shares=1024`
d) `--cpu-quota=100000`

<details class="tp-qa-card" data-qid="docker-s03-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) --cpus=1.0</strong></p><p>The --cpus flag specifies the number of CPU cores available. --cpu-shares is relative weight, not a limit.</p></div></details>

## Exercises

**Easy** — Take a Dockerfile that produces a 1GB+ image and optimize it using multi-stage builds, a slim base image, and proper layer ordering. Measure the before and after sizes.

**Medium** — Create a security-hardened Dockerfile for a Node.js application: non-root user, read-only filesystem, dropped capabilities, no secrets in layers, health check, and tini init.

**Medium** — Set up a GitHub Actions workflow that builds a Docker image, caches layers between runs, scans for vulnerabilities with Docker Scout, and pushes to a registry with both a Git SHA and semantic version tag.

**Hard** — Optimize a Python ML training Dockerfile: use CUDA base image, implement multi-stage to separate build (compiling native extensions) from runtime, use cache mounts for pip, and set GPU resource reservations.

**Hard** — Debug a production container issue: a container is OOM-killed every few hours. Set up proper memory limits, add health checks, configure logging, and implement a monitoring solution using docker stats and custom metrics.

---

## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style

1. **Explain the core idea of Docker Best Practices — Security, Optimization, and Production Readiness in under 60 seconds, then give a real-world analogy.** — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?

2. **Design a minimal, well-typed function that demonstrates Docker Best Practices — Security, Optimization, and Production Readiness.** — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?

3. **What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review.

#### Amazon Style

4. **Describe a production bug caused by misunderstanding Docker Best Practices — Security, Optimization, and Production Readiness. How did you diagnose and fix it?** — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added.

5. **How would you scale a system that relies on Docker Best Practices — Security, Optimization, and Production Readiness from 10 users to 10 million?** — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?

#### Microsoft Style

6. **Compare Docker Best Practices — Security, Optimization, and Production Readiness with the closest alternative approach. When would you choose each?** — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?

7. **Walk through how you would test a component that depends on Docker Best Practices — Security, Optimization, and Production Readiness.** — Unit, integration, property-based tests; mocking boundaries; golden files for outputs.

#### NVIDIA Style

8. **How does Docker Best Practices — Security, Optimization, and Production Readiness behave differently at scale — memory, throughput, or precision-wise?** — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?

9. **How would you make an implementation of Docker Best Practices — Security, Optimization, and Production Readiness run faster on GPU hardware?** — Batch operations, vectorization, avoiding Python loops, reducing data movement.

#### AI Startup Style

10. **Write the smallest possible implementation of Docker Best Practices — Security, Optimization, and Production Readiness that is production-quality.** — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?

### Resume Tips

- Name Docker Best Practices — Security, Optimization, and Production Readiness explicitly in your skills section, paired with a measurable achievement ("Reduced X by 40% using Docker Best Practices — Security, Optimization, and Production Readiness").
- Add a bullet describing a project that applies Docker Best Practices — Security, Optimization, and Production Readiness to real data, with numbers.
- Mention the tools and libraries you used alongside Docker Best Practices — Security, Optimization, and Production Readiness (linters, test frameworks, profiling tools).
- Keep resume bullets under 15 words and start each with an action verb.

### Interview Day Checklist

- Rehearse a 60-second explanation of Docker Best Practices — Security, Optimization, and Production Readiness and one real-world analogy.
- Prepare one STAR story about debugging a Docker Best Practices — Security, Optimization, and Production Readiness-related production issue.
- Review complexity and edge cases for the classic Docker Best Practices — Security, Optimization, and Production Readiness interview problem.
- Have questions ready: how does the team apply Docker Best Practices — Security, Optimization, and Production Readiness in production today?
- Test your environment (Python, editor, internet) 15 minutes before the interview.

## True/False

1. **True or False:** Docker Best Practices — Security, Optimization, and Production Readiness builds directly on the fundamentals covered in the earlier chapters of this module. — **True.** Every advanced topic in this module assumes the core concepts from the previous chapters.
2. **True or False:** You should write at least one code example for Docker Best Practices — Security, Optimization, and Production Readiness before moving to the next chapter. — **True.** Active recall with hands-on code beats passive reading for retention.
3. **True or False:** The complexity analysis for Docker Best Practices — Security, Optimization, and Production Readiness is the same regardless of input size. — **False.** Complexity grows with input size; always state best, average, and worst case.
4. **True or False:** Edge cases (empty input, invalid input, boundary values) matter for Docker Best Practices — Security, Optimization, and Production Readiness in production. — **True.** Most production bugs come from unhandled edge cases.
5. **True or False:** You should memorize the Docker Best Practices — Security, Optimization, and Production Readiness chapter content once and never review it again. — **False.** Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall.

## Fill in the Blank

1. The chapter that covers Docker Best Practices — Security, Optimization, and Production Readiness is Chapter ___ of this module. — Answer: check the module's table of contents.
2. The time complexity of the standard approach to Docker Best Practices — Security, Optimization, and Production Readiness is ___. — Answer: review the theory section and state big-O notation.
3. The main edge case to handle when implementing Docker Best Practices — Security, Optimization, and Production Readiness is ___. — Answer: empty or invalid input handling, as discussed in the chapter.
4. The tools commonly used to debug Docker Best Practices — Security, Optimization, and Production Readiness issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter.
5. The related topic that connects to Docker Best Practices — Security, Optimization, and Production Readiness in the next chapter is ___. — Answer: see the Next Topic section.

## Scenario Questions

1. **Scenario:** A teammate ships a change involving Docker Best Practices — Security, Optimization, and Production Readiness that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist.

2. **Scenario:** Your implementation of Docker Best Practices — Security, Optimization, and Production Readiness is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes.

3. **Scenario:** A new hire asks you to explain Docker Best Practices — Security, Optimization, and Production Readiness in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo.

4. **Scenario:** Your team's codebase has three different patterns for Docker Best Practices — Security, Optimization, and Production Readiness and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it.

## Output Questions

1. **What is the output of the simplest correct implementation of Docker Best Practices — Security, Optimization, and Production Readiness on an empty input?** — Trace through the code: it should return the documented default (None, 0, empty collection) without raising.
2. **What is the output when the input is at the boundary value?** — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples.
3. **What does the implementation return when given invalid input types?** — With type hints and validation, it raises a clear error; without, it may fail silently.
4. **What is the output for the sample input given in the chapter's Examples section?** — Re-run the chapter's example code and compare against the documented output.
5. **What is the time complexity output when you profile the implementation at 10x input size?** — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear).

## Difficulty Level

| Level | Time | What It Takes |
|-------|------|---------------|
| Beginner | 1-2 sessions | Read theory, run the chapter examples, solve the Easy exercises |
| Intermediate | 3-5 sessions | Complete Medium exercises, explain Docker Best Practices — Security, Optimization, and Production Readiness to someone else |
| Advanced | 1+ week | Solve Hard exercises, optimize for real datasets, answer interview follow-ups |

## Tips & Tricks

- Always write a one-line example of Docker Best Practices — Security, Optimization, and Production Readiness from memory before opening the chapter — active recall first.
- Use the chapter's Revision Notes as a checklist: you have mastered Docker Best Practices — Security, Optimization, and Production Readiness when you can explain each bullet.
- Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus.
- For interviews, practice explaining Docker Best Practices — Security, Optimization, and Production Readiness twice: once with a technical audience, once with a non-technical audience.
- Keep a personal examples file where you collect your own Docker Best Practices — Security, Optimization, and Production Readiness snippets; interviewers love original examples.

## Memory Tricks

- **Acronym**: build a mnemonic from the 5 key concepts of Docker Best Practices — Security, Optimization, and Production Readiness listed in the Chapter at a Glance table.
- **Story**: link Docker Best Practices — Security, Optimization, and Production Readiness to a familiar story — the analogy in the Visual Analogy section is designed to stick.
- **Number anchor**: remember the complexity of Docker Best Practices — Security, Optimization, and Production Readiness by connecting it to a known algorithm of the same class.
- **Color code**: highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing.
- **Teach-back**: explain Docker Best Practices — Security, Optimization, and Production Readiness to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory.

## Further Reading

- Official documentation for the primary tool or library used in this chapter
- The chapter referenced in Related Topics for the next-level treatment of Docker Best Practices — Security, Optimization, and Production Readiness
- The classic textbook chapter on Docker Best Practices — Security, Optimization, and Production Readiness (check the Research References below)
- Two blog posts from engineers who debugged real Docker Best Practices — Security, Optimization, and Production Readiness problems in production
- The repository of the open-source project that implements Docker Best Practices — Security, Optimization, and Production Readiness

## Related Topics

- The previous chapter in this module (see table of contents) — foundational for Docker Best Practices — Security, Optimization, and Production Readiness
- The next chapter (see Next Topic below) — builds on Docker Best Practices — Security, Optimization, and Production Readiness
- The system design chapters in Module 07 — how Docker Best Practices — Security, Optimization, and Production Readiness fits into production architectures
- The interview preparation module — how Docker Best Practices — Security, Optimization, and Production Readiness is asked in screening rounds
- The capstone project — where Docker Best Practices — Security, Optimization, and Production Readiness is applied end-to-end

## FAQs

1. **Do I need to memorize all of Docker Best Practices — Security, Optimization, and Production Readiness, or understand the big picture?** — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth.
2. **What if I get stuck on an exercise?** — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day.
3. **How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation.
4. **Is Docker Best Practices — Security, Optimization, and Production Readiness asked in interviews?** — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies.
5. **What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days.

## Important Notes

- Docker Best Practices — Security, Optimization, and Production Readiness is a core requirement for the rest of this module — do not skip the examples.
- Always analyze complexity (time and space) when working with Docker Best Practices — Security, Optimization, and Production Readiness.
- Production correctness means handling edge cases, not just the happy path.
- Interview answers should start with the definition, then the example, then the trade-offs.
- Revisit this chapter after finishing the module; the context from later chapters deepens understanding.

## Historical Context

- Docker Best Practices — Security, Optimization, and Production Readiness emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews.
- The tools used for Docker Best Practices — Security, Optimization, and Production Readiness today evolved from simpler versions; the chapter covers the modern, recommended approach.
- Interviewers value knowing one historical fact about Docker Best Practices — Security, Optimization, and Production Readiness — it shows genuine interest, not just cramming.
- The library/tooling ecosystem around Docker Best Practices — Security, Optimization, and Production Readiness changes quickly; focus on fundamentals that remain stable.

## Security Considerations

- Never trust external input: validate and sanitize data before processing Docker Best Practices — Security, Optimization, and Production Readiness.
- Avoid `eval()` and dynamic code execution on untrusted strings.
- Log errors without leaking sensitive data (keys, PII, internal paths).
- For API contexts, add rate limiting and input size limits.
- Review the chapter's code examples for injection or overflow risks before using them verbatim.

## ML Intuition

- Docker Best Practices — Security, Optimization, and Production Readiness appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation.
- Understanding Docker Best Practices — Security, Optimization, and Production Readiness helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs.
- In production ML, the Docker Best Practices — Security, Optimization, and Production Readiness concepts from this chapter map directly to NumPy/PyTorch operations on tensors.
- When optimizing ML systems, Docker Best Practices — Security, Optimization, and Production Readiness skills let you profile and fix the data path, not just the training loop.
- Interview follow-up: how would you apply Docker Best Practices — Security, Optimization, and Production Readiness to a dataset of 10 million records? — Batching and vectorization.

## Analogies

- **Docker Best Practices — Security, Optimization, and Production Readiness is like a recipe**: the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice.
- **Complexity is like a delivery route**: a linear route visits each stop once; a nested route revisits stops, and you feel it at scale.
- **Edge cases are like weather**: the happy path is a sunny day; production is the storm — build for the storm.
- **The chapter roadmap is a journey map**: each section is a checkpoint; skipping one means getting lost later in the module.

## Capstone Project Link

- [Module Capstone: End-to-End Project](https://github.com/Raushan666java/ai-engineering-journey) — this chapter contributes the Docker Best Practices — Security, Optimization, and Production Readiness skills used in the module's capstone project. Complete the exercises here before starting the capstone.

## Flashcards

<details class="tp-qa-card" data-qid="06dockerkubernetescloud-03dockerbestpractices-flash1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which of the following Dockerfiles produces the smallest production image?
  </summary>
  <div class="tp-qa-answer">
    <p>b) Multi-stage build with python:3.11-slim</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="06dockerkubernetescloud-03dockerbestpractices-flash2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What Docker flag prevents a container from writing to its own filesystem?
  </summary>
  <div class="tp-qa-answer">
    <p>a) --read-only</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="06dockerkubernetescloud-03dockerbestpractices-flash3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which instruction in a Dockerfile tells Docker how to verify a container is working?
  </summary>
  <div class="tp-qa-answer">
    <p>b) HEALTHCHECK</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="06dockerkubernetescloud-03dockerbestpractices-flash4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the primary purpose of Docker Content Trust?
  </summary>
  <div class="tp-qa-answer">
    <p>b) Sign and verify image integrity</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="06dockerkubernetescloud-03dockerbestpractices-flash5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which flag limits a container to using at most one CPU core?
  </summary>
  <div class="tp-qa-answer">
    <p>b) --cpus=1.0</p>
  </div>
</details>

## Research References

- Official documentation of the primary library for Docker Best Practices — Security, Optimization, and Production Readiness (linked in Further Reading)
- The classic paper or textbook chapter introducing Docker Best Practices — Security, Optimization, and Production Readiness (see References below)
- The standard library reference for Docker Best Practices — Security, Optimization, and Production Readiness-related functions
- Engineering blog posts from companies running Docker Best Practices — Security, Optimization, and Production Readiness in production at scale
- PEPs and RFCs where applicable (Python and networking standards)

## Open-Source Tools

- The primary library used in this chapter (see the code examples)
- Python standard library modules used in the examples (check the imports)
- Testing: pytest for unit tests of Docker Best Practices — Security, Optimization, and Production Readiness code
- Linting and formatting: ruff + black
- Profiling: cProfile or py-spy for performance work on Docker Best Practices — Security, Optimization, and Production Readiness

## Debugging Guide

- Start with `print()` or a debugger to inspect intermediate values in Docker Best Practices — Security, Optimization, and Production Readiness code.
- Reproduce the failure with the smallest possible input before changing code.
- Check the common failure modes listed in Common Mistakes — most bugs are listed there.
- For performance problems, profile before optimizing: measure, then fix.
- When stuck, re-read the chapter's Examples and compare line by line with your code.
- Use `pdb` or your IDE's debugger to step through the Docker Best Practices — Security, Optimization, and Production Readiness example code.

## Mock Interview Section

**Round 1 — Screening (15 min)**
- Explain Docker Best Practices — Security, Optimization, and Production Readiness in 60 seconds.
- Write a minimal working example of Docker Best Practices — Security, Optimization, and Production Readiness.
- What is the complexity of your example?

**Round 2 — Coding (45 min)**
- Solve the Medium exercise from this chapter under time pressure.
- State your assumptions, then implement with type hints.
- Test with edge cases: empty input, boundary values, invalid input.

**Round 3 — Behavioral + System (30 min)**
- Tell me about a time you debugged a Docker Best Practices — Security, Optimization, and Production Readiness problem in a project.
- How would you design a system where Docker Best Practices — Security, Optimization, and Production Readiness is used at scale?
- What metrics would you monitor?

**Evaluation rubric**: correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%).

## Optimized Implementation

`python
from typing import Any, Optional

def demonstrate_topic(input_data: list[Any]) -> Optional[float]:
    """Runnable scaffold for Docker Best Practices — Security, Optimization, and Production Readiness.

    Replace the body with the optimized implementation from the chapter,
    keeping type hints, docstring, and edge-case handling.
    """
    if not input_data:
        return None
    # Step 1: validate input types
    # Step 2: apply the core Docker Best Practices — Security, Optimization, and Production Readiness logic from the Examples section
    # Step 3: return the result with the documented default
    return 0.0
`

- Keeps the function signature stable so tests written against it stay valid.
- Handles the empty-input contract explicitly.
- Add unit tests for the edge cases before implementing the logic (test-first).

## Evaluation Metrics

| Skill | Test | Target |
|-------|------|--------|
| Concept recall | Explain Docker Best Practices — Security, Optimization, and Production Readiness without notes | 60-second explanation |
| Code fluency | Write the chapter example from memory | No syntax errors |
| Edge cases | Handle empty/invalid input in exercises | All cases pass |
| Complexity | State time/space for the standard approach | Correct big-O |
| Interview readiness | Answer 5 Interview Q&A questions out loud | Fluent, structured answers |
| Retention | Chapter quiz score after 3 days | 80%+ |

## Real-World Examples

- **Startup**: a small team uses Docker Best Practices — Security, Optimization, and Production Readiness daily in their data pipeline — the chapter's examples mirror their code.
- **E-commerce**: Docker Best Practices — Security, Optimization, and Production Readiness patterns appear in order processing, inventory checks, and recommendation feeds.
- **Fintech**: Docker Best Practices — Security, Optimization, and Production Readiness principles apply to transaction validation and fraud detection flows.
- **ML platform**: Docker Best Practices — Security, Optimization, and Production Readiness shows up in feature engineering and model-serving infrastructure.
- **Interview insight**: recruiters look for engineers who can connect Docker Best Practices — Security, Optimization, and Production Readiness to the business outcome, not just the code.

## Next Topic

[Kubernetes Basics — Pods, Services, and Deployments](04-kubernetes-basics.md)

## Limitations

- Docker Best Practices — Security, Optimization, and Production Readiness, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory).
- The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling.
- Performance of Docker Best Practices — Security, Optimization, and Production Readiness depends on input size and distribution — always benchmark for your own data.
- This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone.
