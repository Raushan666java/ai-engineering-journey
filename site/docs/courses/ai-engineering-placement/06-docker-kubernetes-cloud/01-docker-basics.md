---
id: 01-docker-basics
slug: /ai-engineering-placement/06-docker-kubernetes-cloud/01-docker-basics
title: "Docker Basics — Containers, Images, and Docker Engine"
sidebar_label: "Docker Basics — Containers, Images, and Docker Engine"
sidebar_position: 74
---
<!-- Clear Language: Keep sentences under 50 words -->
# Docker Basics — Containers, Images, and Docker Engine

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand the difference between containers and virtual machines |
| LO2 | Install Docker Engine and run your first container |
| LO3 | Work with Docker images: pull, list, tag, and remove |
| LO4 | Create Dockerfiles and build custom images |
| LO5 | Manage container lifecycle: run, stop, exec, logs, inspect |
| LO6 | Use Docker networking and volumes for data persistence |

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 1.1 | Containers vs VMs | OS-level virtualization vs hardware virtualization |
| 1.2 | Docker Architecture | Engine, daemon, CLI, registry, objects |
| 1.3 | Working with Images | pull, push, tag, rmi, layers |
| 1.4 | Dockerfiles | FROM, RUN, COPY, CMD, ENTRYPOINT, multi-stage |
| 1.5 | Container Lifecycle | run, start, stop, rm, exec, logs |
| 1.6 | Networking | bridge, host, none, custom networks |
| 1.7 | Volumes and Bind Mounts | persist, share, backup data |
| 1.8 | Docker Compose Basics | multi-container with docker-compose.yml |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Install Docker] --> B[Understand Architecture]
    B --> C[Pull & Run Images]
    C --> D[Write Dockerfiles]
    D --> E[Build Custom Images]
    E --> F[Manage Containers]
    F --> G[Networking]
    G --> H[Volumes]
    H --> I[Docker Compose]
```

## Introduction

Docker is the standard for packaging and deploying AI applications — from training environments with GPU passthrough to production inference services at scale. Without containers,.
the "it works on my machine" problem plagues ML teams, making model deployment unreliable and slow. This chapter covers containers, images,.
Dockerfiles, and Docker Compose — the essential skills for any AI engineer who needs to ship models from laptop to production.

## Prerequisites

- Basic command line / terminal proficiency
- Understanding of what a server and process are
- Familiarity with Python or TypeScript project structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

### 1.1 Containers vs Virtual Machines

Containers provide OS-level virtualization by sharing the host kernel, while VMs use a hypervisor to run full guest operating systems. This fundamental difference makes containers lighter, faster, and more resource-efficient.

## Examples

```bash

## Check Docker version
docker --version
docker info
```

**Comparison table**:

| Feature | Container | Virtual Machine |
|---------|-----------|----------------|
| Startup time | milliseconds | seconds to minutes |
| Image size | MB | GB |
| Kernel | Shares host kernel | Own kernel per VM |
| Isolation | Process-level | Full isolation |
| Resource usage | Minimal | High overhead |
| Density | 10s-100s per host | 1-10 per host |

**Why containers for AI engineering**:
- Reproducible environments for model training
- Consistent deployment across dev, staging, production
- Microservices architecture for ML pipelines
- GPU passthrough for training containers

```mermaid
flowchart LR
    subgraph VM["Virtual Machines"]
        V1[App A<br/>Libs] --> G1[Guest OS]
        V2[App B<br/>Libs] --> G2[Guest OS]
        G1 --> H1[Hypervisor]
        G2 --> H1
        H1 --> H2[Host OS]
        H2 --> H3[Hardware]
    end
    subgraph Container["Containers"]
        C1[App A] --> D1[Docker Engine]
        C2[App B] --> D1
        D1 --> D2[Host OS]
        D2 --> D3[Hardware]
    end
```

## Overview

### 1.2 Docker Architecture

Docker follows a client-server architecture with three main components:

**Docker Daemon (dockerd)**: Background service that manages Docker objects — images, containers, networks, volumes. Listens on a Unix socket or network port.

**Docker Client (docker)**: CLI tool that sends commands to the daemon using the Docker API. Most commands map directly to REST API calls.

**Docker Registry (Docker Hub)**: Repository for Docker images. Default public registry is Docker Hub. Private registries include AWS ECR, Google Artifact Registry, and self-hosted registries.

```bash

## Docker daemon info
docker info

## Show running containers
docker ps

## Show all containers (including stopped)
docker ps -a
```

**Key Docker objects**:

```mermaid
flowchart TD
    D[Docker Daemon] --> I[Images]
    D --> C[Containers]
    D --> N[Networks]
    D --> V[Volumes]
    I --> R[Registry]
    C --> I
    C --> N
    C --> V
```

Images are read-only templates. Containers are runnable instances of images. Each container gets its own filesystem, network stack, and process tree.

## Overview

### 1.3 Working with Docker Images

Images consist of read-only layers stacked on top of each other. Each RUN, COPY, or ADD instruction adds a new layer. Layers are cached and reused across builds.

```bash

## Pull an image
docker pull nginx:latest
docker pull python:3.11-slim

## List images
docker images

## or
docker image ls

## Tag an image
docker tag nginx:latest my-nginx:v1

## Push to registry
docker push my-nginx:v1

## Remove images
docker rmi nginx:latest
docker image prune  # remove dangling images

## Show image layers
docker history nginx:latest
```

**Image naming convention**:

```text
[registry/][user/]repository[:tag]
```text

Examples: `python:3.11-slim`, `nginx:latest`, `myregistry.com/team/app:v2`

**Layers and caching**: Docker caches each layer after a successful build. If a layer hasn't changed, Docker reuses the cached version. Place instructions that change less frequently (system packages) earlier in the Dockerfile.

```bash

## Save and load images as tar files
docker save -o my-image.tar my-image:tag
docker load -i my-image.tar
```

## Overview

### 1.4 Dockerfiles

A Dockerfile is a text file with instructions for building an image.

```dockerfile

## Dockerfile for a Python AI service
FROM python:3.11-slim AS builder

WORKDIR /app

## Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

## Copy requirements first (leverage layer caching)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

## Copy application code
COPY src/ ./src/

## Final stage — multi-stage build
FROM python:3.11-slim AS runtime

WORKDIR /app
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --from=builder /app/src ./src

EXPOSE 8000

CMD ["python", "-m", "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

**Key Dockerfile instructions**:

| Instruction | Purpose | Example |
|-------------|---------|---------|
| FROM | Base image | `FROM python:3.11-slim` |
| WORKDIR | Working directory | `WORKDIR /app` |
| COPY | Copy files | `COPY . .` |
| RUN | Execute commands | `RUN pip install -r requirements.txt` |
| EXPOSE | Document port | `EXPOSE 8000` |
| CMD | Default command | `CMD ["python", "app.py"]` |
| ENTRYPOINT | Executable wrapper | `ENTRYPOINT ["python"]` |
| ENV | Environment variables | `ENV PYTHONUNBUFFERED=1` |
| ARG | Build-time variables | `ARG VERSION=latest` |

**Multi-stage builds** keep final images small by separating build and runtime stages.

```bash

## Build an image
docker build -t my-app:v1 .

## Build with build args
docker build --build-arg VERSION=2.0 -t my-app:v2 .
```

## Overview

### 1.5 Container Lifecycle

```bash

## Run a container
docker run -d --name web -p 8080:80 nginx:latest

## Run interactively
docker run -it --name debug python:3.11-slim bash

## List containers
docker ps           # running only
docker ps -a        # all containers

## Stop a container
docker stop web

## Start a stopped container
docker start web

## Restart
docker restart web

## Remove a container
docker rm web
docker rm -f web    # force remove running container
docker container prune  # remove all stopped containers

## Execute command in running container
docker exec -it web bash

## View logs
docker logs web
docker logs -f web  # follow mode

## Inspect container details
docker inspect web

## View resource usage
docker stats web
```

**Container states**:

```mermaid
stateDiagram-v2
    [*] --> Created: docker create
    Created --> Running: docker start
    Running --> Paused: docker pause
    Paused --> Running: docker unpause
    Running --> Stopped: docker stop
    Running --> Exited: process dies
    Stopped --> Running: docker start
    Stopped --> [*]: docker rm
    Exited --> [*]: docker rm
```

## Overview

### 1.6 Docker Networking

Docker provides several network drivers for different isolation levels.

```bash

## List networks
docker network ls

## Create custom network
docker network create --driver bridge my-network

## Run container on specific network
docker run -d --name app --network my-network my-app

## Connect container to network
docker network connect my-network web

## Inspect network
docker network inspect my-network
```

**Network drivers**:

| Driver | Use Case | Isolation |
|--------|----------|-----------|
| bridge | Default for single host | Containers can communicate via IP |
| host | No network isolation | Container uses host network stack |
| none | No networking | Completely isolated |
| overlay | Multi-host (Swarm) | Containers across hosts communicate |

**DNS resolution**: Containers on the same user-defined bridge network can resolve each other by container name, not just IP.

```bash

## Port mapping
docker run -d -p 8080:80 -p 443:443 nginx

## HOST:CONTAINER
```

## Overview

### 1.7 Volumes and Bind Mounts

Data persistence in Docker is managed through volumes and bind mounts.

```bash

## Create a volume
docker volume create data-volume

## Run with volume
docker run -d --name db -v data-volume:/var/lib/postgresql/data postgres:15

## Bind mount (host directory)
docker run -d --name dev -v $(pwd):/app python:3.11-slim python /app/script.py

## List volumes
docker volume ls

## Remove volume
docker volume rm data-volume
docker volume prune

## Copy files between container and host
docker cp file.txt container:/app/
docker cp container:/app/output.txt .
```

**Volume types**:

| Type | Managed by | Location | Backup |
|------|------------|----------|--------|
| Named volume | Docker | `/var/lib/docker/volumes/` | Easy — copy from volume |
| Bind mount | User | Any host path | Manual |
| tmpfs mount | Memory | Host RAM | Not persistent |

**Best practices**:
- Use named volumes for database data
- Use bind mounts for development (hot-reload)
- Never store sensitive data in image layers
- Use `--mount` syntax for more explicit configuration

```bash

## Using --mount syntax
docker run -d \
    --mount type=volume,source=data,target=/data \
    --mount type=bind,source=$(pwd),target=/app \
    my-image
```

## Overview

### 1.8 Docker Compose Basics

Docker Compose defines multi-container applications in a YAML file.

```yaml

## docker-compose.yml
version: "3.9"

services:
  api:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "8000:8000"
    volumes:
      - .:/app
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/app
    depends_on:
      - db
      - redis

  db:
    image: postgres:15
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_DB: app

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

**Common Compose commands**:

```bash

## Start services
docker compose up
docker compose up -d  # detached

## Build and start
docker compose up --build

## Stop services
docker compose down

## Stop and remove volumes
docker compose down -v

## View logs
docker compose logs -f

## Scale a service
docker compose up -d --scale api=3

## Execute in running service
docker compose exec api bash
```

```mermaid
flowchart TD
    A[docker-compose.yml] --> B[docker compose up]
    B --> C[Create network]
    B --> D[Pull/Build images]
    B --> E[Create containers]
    E --> F[api:8000]
    E --> G[db:5432]
    E --> H[redis:6379]
    F --> G
    F --> H
```

---

## Visual Analogy

Think of Docker like **shipping containers** on a cargo ship:

- **Docker container** = A shipping container — a standardized box that holds your app, its libraries, and everything it needs to run. It doesn't care what's inside; the port crane (Docker Engine) handles it the same way.
- **Docker image** = The blueprint for a container — a read-only template that says "put Python 3.11 here, copy the code there, run this command." You build images from Dockerfiles.
- **Dockerfile** = The recipe — step-by-step instructions for building an image. "Start with this base, install these packages, copy the code."
- **Docker Compose** = The shipping manifest — a document that describes multiple containers (app + database + cache) and how they work together.
- **Volumes** = Storage containers — persistent boxes that stay even when the shipping container is unloaded. Your data survives container restarts.

This helps because the entire Docker revolution came from the shipping industry's insight: **standardize the container, not the contents**. Just as you can ship anything in a standard 20-foot box, you can run any app in a standard Docker container regardless of the language or framework inside.

## TypeScript Parallel

While Docker is primarily managed via CLI, TypeScript can interact with the Docker daemon programmatically using the `dockerode` library:

```typescript
import Docker from "dockerode";

const docker = new Docker({ socketPath: "/var/run/docker.sock" });

async function listContainers(): Promise<void> {
  const containers = await docker.listContainers({ all: true });
  for (const c of containers) {
    console.log(`${c.Id.slice(0, 12)} — ${c.Image} — ${c.State}`);
  }
}

async function runContainer(image: string, cmd: string[]): Promise<void> {
  const container = await docker.createContainer({
    Image: image,
    Cmd: cmd,
    AttachStdout: true,
  });
  await container.start();
  const stream = await container.logs({ stdout: true, follow: true });
  stream.pipe(process.stdout);
}
```

---

## Summary

- Containers share the host kernel, making them lighter and faster than VMs; they start in milliseconds and consume minimal resources
- Docker uses a client-server architecture with the daemon (dockerd), CLI (docker), and registry (Docker Hub)
- Images are read-only templates composed of layers; each Dockerfile instruction creates a new layer that can be cached
- Multi-stage builds produce smaller production images by separating build and runtime stages
- Container lifecycle: create, start, pause, stop, restart, remove — managed through simple CLI commands
- Docker networking allows containers to communicate via bridge, host, overlay, or none networks
- Volumes provide persistent storage independent of container lifecycle; bind mounts enable host-container file sharing
- Docker Compose defines multi-container applications in YAML, enabling orchestration with a single command
- Layer caching optimizes builds: place infrequently-changing instructions early in the Dockerfile
- Best practices include using `.dockerignore`, minimal base images, non-root users, and health checks

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Development environment | Bind mount source code + hot-reload | Rebuilding image for every code change |
| Production deployment | Multi-stage build with slim base image | Large images with build tools included |
| Database storage | Named volume | Bind mount (permission issues) |
| Multi-service app | Docker Compose with depends_on | Running services manually |
| Secrets | Docker secrets or env_file | Hardcoding in Dockerfile |
| GPU access | `--gpus all` flag | CPU-only when GPU needed |
| Health checks | HEALTHCHECK instruction in Dockerfile | No health monitoring |

## Interview Q&A

<details class="tp-qa-card" data-qid="docker-s01-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is the difference between a container and a virtual machine?
  </summary>
  <div class="tp-qa-answer">
    <p>Containers share the host OS kernel and run as isolated processes in user space, while VMs run a full guest OS on top of a hypervisor. This makes containers more lightweight — they start in milliseconds, use MB instead of GB, and achieve higher density per host.</p>
    <p>Containers provide process-level isolation (cgroups, namespaces), whereas VMs provide hardware-level isolation. Containers are ideal for microservices and stateless applications, while VMs offer stronger isolation for multi-tenant environments.</p>
    <pre><code># Container — shares host kernel
FROM python:3.11-slim  # ~125 MB

## VM — full OS image

## Ubuntu Server + Python: ~2 GB</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s01-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: Explain Docker's layered filesystem. How does it improve build performance?
  </summary>
  <div class="tp-qa-answer">
    <p>Each Dockerfile instruction (FROM, RUN, COPY) creates a new read-only layer. Layers are cached — if a layer hasn't changed since the last build, Docker reuses it from cache.</p>
    <p><strong>Cache optimization</strong>: Order instructions so that the most stable layers come first. Copy dependencies (package.json, requirements.txt) before source code so dependency installation is cached.</p>
    <pre><code># Efficient: cache npm install unless package.json changes
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

## Inefficient: copies everything first, cache invalidated
COPY . .
RUN npm ci</code></pre>
    <p><strong>Layer sharing</strong>: If two images share the same base (e.g., both FROM python:3.11-slim), the base layer is stored once and shared, saving disk space.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s01-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What is the difference between CMD and ENTRYPOINT in a Dockerfile?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>CMD</strong> provides default arguments for the container. It can be overridden when running the container: <code>docker run image command</code> replaces CMD.</p>
    <p><strong>ENTRYPOINT</strong> defines the executable that always runs. Arguments passed to <code>docker run</code> are appended to ENTRYPOINT.</p>
    <pre><code># CMD overridden
CMD ["python", "app.py"]

## docker run my-image python other.py  # runs other.py

## ENTRYPOINT fixed, CMD as default args
ENTRYPOINT ["python"]
CMD ["app.py"]

## docker run my-image other.py  # runs python other.py

## docker run my-image  # runs python app.py</code></pre>
    <p><strong>Best practice</strong>: Use ENTRYPOINT for the main executable and CMD for default arguments.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s01-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How does Docker networking work? Explain bridge, host, and overlay modes.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Bridge</strong> (default): Each container gets a virtual Ethernet interface connected to the bridge. Containers can communicate via IP, and can resolve each other by name on user-defined bridges.</p>
    <p><strong>Host</strong>: Container uses the host's network stack directly. No network isolation — the container binds directly to host ports. Best for performance-critical applications.</p>
    <p><strong>Overlay</strong>: Used in Docker Swarm for multi-host communication. Creates a distributed network across all Swarm nodes, enabling containers on different hosts to communicate.</p>
    <p><strong>None</strong>: No network access. Useful for offline batch jobs.</p>
    <pre><code>docker network create --driver overlay my-overlay
docker service create --network my-overlay my-service</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s01-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What are Docker volumes and why are they important?
  </summary>
  <div class="tp-qa-answer">
    <p>Volumes are the preferred mechanism for persisting data generated and used by Docker containers. They are managed by Docker and stored in <code>/var/lib/docker/volumes/</code>.</p>
    <p><strong>Key features</strong>:</p>
    <ul>
      <li>Data persists when container is removed</li>
      <li>Can be shared across multiple containers</li>
      <li>Easy to backup and migrate</li>
      <li>Driver support for remote storage (NFS, cloud)</li>
    </ul>
    <p><strong>When to use volumes vs bind mounts</strong>:</p>
    <ul>
      <li>Volumes: production databases, configuration data, any data that Docker should manage</li>
      <li>Bind mounts: development hot-reload, sharing host config files</li>
    </ul>
    <pre><code>docker volume create app-data
docker run -v app-data:/app/data my-image</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s01-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What is a multi-stage build and why would you use it?
  </summary>
  <div class="tp-qa-answer">
    <p>A multi-stage build uses multiple FROM statements in a single Dockerfile. Each FROM begins a new stage. You can selectively copy artifacts from one stage to another, leaving behind build tools and intermediate files.</p>
    <pre><code># Build stage
FROM golang:1.21 AS builder
WORKDIR /app
COPY . .
RUN go build -o myapp

## Runtime stage — only the binary
FROM alpine:latest
COPY --from=builder /app/myapp /usr/local/bin/
CMD ["myapp"]</code></pre>
    <p><strong>Benefits</strong>:</p>
    <ul>
      <li>Smaller final images (GB -> MB)</li>
      <li>Smaller attack surface (fewer tools in runtime)</li>
      <li>Faster deploys and pulls</li>
      <li>No need for separate Dockerfiles for build and runtime</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s01-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you debug a container that fails to start?
  </summary>
  <div class="tp-qa-answer">
    <p>Several techniques for debugging failing containers:</p>
    <ol>
      <li><strong>Check logs</strong>: <code>docker logs container_name</code></li>
      <li><strong>Override entrypoint</strong>: <code>docker run --entrypoint bash my-image</code> to inspect interactively</li>
      <li><strong>Inspect</strong>: <code>docker inspect container_name</code> for exit code, mounts, network</li>
      <li><strong>Run with same config</strong>: Replicate the run command with <code>--rm -it</code></li>
      <li><strong>Check Docker events</strong>: <code>docker events --filter container=name</code></li>
    </ol>
    <pre><code># Debug with interactive shell
docker run -it --entrypoint sh my-image

## Check exit code
docker inspect --format '{{.State.ExitCode}}' container_name</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s01-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: Explain the purpose of a .dockerignore file.
  </summary>
  <div class="tp-qa-answer">
    <p>The <code>.dockerignore</code> file specifies which files and directories to exclude from the Docker build context. This improves build performance and security by:</p>
    <ul>
      <li>Reducing context size sent to Docker daemon</li>
      <li>Preventing secrets (env files, SSH keys, tokens) from being included in images</li>
      <li>Avoiding accidental inclusion of node_modules, .git, etc.</li>
    </ul>
    <pre><code># .dockerignore
.git
node_modules
.env
*.md
dist
__pycache__
*.pyc
.vscode</code></pre>
    <p>Without a <code>.dockerignore</code>, building in a project directory with gigabytes of dependencies will be extremely slow.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s01-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you handle environment variables in Docker?
  </summary>
  <div class="tp-qa-answer">
    <p>Multiple ways to pass environment variables:</p>
    <ul>
      <li><strong>In Dockerfile</strong>: <code>ENV MY_VAR=value</code> — baked into image, not ideal for secrets</li>
      <li><strong>At runtime</strong>: <code>docker run -e MY_VAR=value</code></li>
      <li><strong>From file</strong>: <code>docker run --env-file .env</code></li>
      <li><strong>In Compose</strong>: <code>environment:</code> section or <code>env_file:</code></li>
    </ul>
    <pre><code># .env file
DATABASE_URL=postgresql://user:pass@localhost:5432/db
API_KEY=sk-abc123

## docker run with env file
docker run --env-file .env my-app

## docker-compose.yml
services:
  app:
    env_file: .env</code></pre>
    <p><strong>Security</strong>: For production, use Docker secrets or external secret managers (HashiCorp Vault, AWS Secrets Manager). Never hardcode secrets in Dockerfiles.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="docker-s01-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: What are Docker best practices for production?
  </summary>
  <div class="tp-qa-answer">
    <p>Production Docker best practices:</p>
    <ol>
      <li><strong>Use specific tags</strong>: <code>python:3.11-slim</code> not <code>python:latest</code></li>
      <li><strong>Multi-stage builds</strong>: Keep production images small</li>
      <li><strong>Non-root user</strong>: <code>USER appuser</code> — reduces security risk</li>
      <li><strong>Health checks</strong>: HEALTHCHECK instruction for container orchestration</li>
      <li><strong>Read-only root filesystem</strong>: <code>docker run --read-only</code></li>
      <li><strong>Resource limits</strong>: <code>--memory=512m --cpus=0.5</code></li>
      <li><strong>Logging</strong>: Write logs to stdout/stderr, not files</li>
      <li><strong>Security scanning</strong>: Use Docker Scout, Trivy, or Snyk</li>
      <li><strong>.dockerignore</strong>: Exclude irrelevant files from build context</li>
      <li><strong>Layer caching</strong>: Order Dockerfile instructions for maximum cache reuse</li>
    </ol>
    <pre><code># Production-ready Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:20-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1
CMD ["node", "dist/server.js"]</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which Docker component is responsible for managing containers, images, and volumes?

a) Docker Client
b) Docker Daemon
c) Docker Compose
d) Docker Hub

<details class="tp-qa-card" data-qid="docker-s01-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Docker Daemon</strong></p><p>The Docker daemon (dockerd) manages all Docker objects. The client sends commands to the daemon via the Docker API.</p></div></details>

**Q2**: What instruction in a Dockerfile sets the command that always runs when the container starts?

a) CMD
b) RUN
c) ENTRYPOINT
d) START

<details class="tp-qa-card" data-qid="docker-s01-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) ENTRYPOINT</strong></p><p>ENTRYPOINT defines the executable that always runs. CMD provides default arguments that can be overridden.</p></div></details>

**Q3**: Which network driver allows a container to use the host's network stack directly?

a) bridge
b) overlay
c) host
d) none

<details class="tp-qa-card" data-qid="docker-s01-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) host</strong></p><p>Host mode removes network isolation between the container and the host — the container binds directly to host ports.</p></div></details>

**Q4**: What is the purpose of a .dockerignore file?

a) Ignore Docker updates
b) Exclude files from the build context
c) Ignore container errors
d) Skip Dockerfile validation

<details class="tp-qa-card" data-qid="docker-s01-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Exclude files from the build context</strong></p><p>The .dockerignore file prevents specified files from being sent to the Docker daemon as part of the build context, improving build speed and security.</p></div></details>

**Q5**: Which command shows resource usage of running containers?

a) docker ps
b) docker stats
c) docker info
d) docker inspect

<details class="tp-qa-card" data-qid="docker-s01-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) docker stats</strong></p><p>docker stats displays real-time CPU, memory, network I/O, and disk I/O for running containers.</p></div></details>

### True/False

**T/F 1**: This topic is fundamental to AI engineering.
**Answer**: True — Understanding docker kubernetes cloud is essential for building production AI systems.

**T/F 2**: The concepts in this chapter are only used in interviews.
**Answer**: False — These concepts are used daily in real-world AI engineering work.

**T/F 3**: Time/space complexity analysis applies to docker kubernetes cloud.
**Answer**: True — Every algorithm and system has performance characteristics to analyze.

**T/F 4**: docker kubernetes cloud concepts are independent of each other.
**Answer**: False — Most concepts build on each other and are interconnected.

**T/F 5**: Real-world applications often combine multiple concepts from this chapter.
**Answer**: True — Production systems use combinations of these fundamental concepts.

### Fill in the Blank

**FIB 1**: The key concept in this chapter is ________.
**Answer**: [Review the chapter's Learning Objectives for the specific answer]

**FIB 2**: In docker kubernetes cloud, the time complexity of the basic operation is ________.
**Answer**: [Depends on the specific operation — check the Theory section]

### Scenario Questions

**Scenario 1**: How would you apply the concepts from this chapter in a real AI engineering project?

**Answer**: [Think about how the specific topic applies to: data processing pipelines, model training infrastructure, production systems, or interview scenarios]

### Output Questions

**Output 1**: What is the time complexity of the main algorithm discussed in this chapter?
**Answer**: [Check the Theory section for the specific complexity analysis]

## Exercises

**Easy** — Run a simple Nginx container on port 8080 and verify it serves the default page. Stop and remove the container.

**Medium** — Write a Dockerfile for a FastAPI application that uses multi-stage builds, installs dependencies from requirements.txt, runs as a non-root user, and includes a health check.

**Medium** — Create a docker-compose.yml with a FastAPI app, PostgreSQL database, and Redis. Configure proper depends_on, volumes for persistence, and environment variables.

**Hard** — Build a Python image that runs a machine learning inference script. The Dockerfile should download model weights at build time (not runtime), use GPU passthrough, and include a health check that pings the model endpoint.

**Hard** — Debug a broken Docker setup: given a Dockerfile that fails to build (provide a buggy Dockerfile with issues like incorrect WORKDIR, missing COPY, base image mismatch), identify and fix all issues.

---

## Common Mistakes

1. Using `latest` tag in production Dockerfiles — always pin specific versions (`python:3.11-slim`) for reproducible builds
2. Copying source code before `pip install` or `npm ci` — invalidates the layer cache and rebuilds dependencies on every code change
3. Running containers as root — always add a non-root USER for security in production
4. Storing secrets in Dockerfiles or images — use Docker secrets, env_file, or external secret managers instead
5. Skipping `.dockerignore` — the build context sends the entire directory including `.git`, `node_modules`, and `.env` to the daemon

## Revision Notes

- Containers share the host kernel (OS-level virtualization); VMs run full guest OSes (hardware-level virtualization)
- Docker architecture: daemon (dockerd) manages objects, CLI (docker) sends commands, registry stores images
- Images are read-only layers; each Dockerfile instruction adds a layer; layers are cached across builds
- Multi-stage builds separate build and runtime stages to produce smaller production images
- Container states: Created → Running → Paused → Stopped → Removed
- Volumes persist data independently of containers; bind mounts enable hot-reload in development
- Docker Compose defines multi-container apps in YAML with automatic networking
- `.dockerignore` excludes files from build context; HEALTHCHECK enables orchestrator health monitoring

## Placement Section

### Top 10 Interview Questions

#### Google Style

1. **Explain the core idea of Docker Basics — Containers, Images, and Docker Engine in under 60 seconds, then give a real-world analogy.** â€” Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?

2. **Design a minimal, well-typed function that demonstrates Docker Basics — Containers, Images, and Docker Engine.** â€” Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?

3. **What are the common pitfalls when engineers first learn ** â€” List 3-4, then explain how you would prevent each in a code review.

#### Amazon Style

4. **Describe a production bug caused by misunderstanding Docker Basics — Containers, Images, and Docker Engine. How did you diagnose and fix it?** â€” STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added.

5. **How would you scale a system that relies on Docker Basics — Containers, Images, and Docker Engine from 10 users to 10 million?** â€” Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?

#### Microsoft Style

6. **Compare Docker Basics — Containers, Images, and Docker Engine with the closest alternative approach. When would you choose each?** â€” Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?

7. **Walk through how you would test a component that depends on Docker Basics — Containers, Images, and Docker Engine.** â€” Unit, integration, property-based tests; mocking boundaries; golden files for outputs.

#### NVIDIA Style

8. **How does Docker Basics — Containers, Images, and Docker Engine behave differently at scale â€” memory, throughput, or precision-wise?** â€” Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?

9. **How would you make an implementation of Docker Basics — Containers, Images, and Docker Engine run faster on GPU hardware?** â€” Batch operations, vectorization, avoiding Python loops, reducing data movement.

#### AI Startup Style

10. **Write the smallest possible implementation of Docker Basics — Containers, Images, and Docker Engine that is production-quality.** â€” Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?

### Resume Tips

- Name Docker Basics — Containers, Images, and Docker Engine explicitly in your skills section, paired with a measurable achievement ("Reduced X by 40% using Docker Basics — Containers, Images, and Docker Engine").
- Add a bullet describing a project that applies Docker Basics — Containers, Images, and Docker Engine to real data, with numbers.
- Mention the tools and libraries you used alongside Docker Basics — Containers, Images, and Docker Engine (linters, test frameworks, profiling tools).
- Keep resume bullets under 15 words and start each with an action verb.

### Interview Day Checklist

- Rehearse a 60-second explanation of Docker Basics — Containers, Images, and Docker Engine and one real-world analogy.
- Prepare one STAR story about debugging a Docker Basics — Containers, Images, and Docker Engine-related production issue.
- Review complexity and edge cases for the classic Docker Basics — Containers, Images, and Docker Engine interview problem.
- Have questions ready: how does the team apply Docker Basics — Containers, Images, and Docker Engine in production today?
- Test your environment (Python, editor, internet) 15 minutes before the interview.

## True/False

1. **True or False:** Docker Basics — Containers, Images, and Docker Engine builds directly on the fundamentals covered in the earlier chapters of this module. â€” **True.** Every advanced topic in this module assumes the core concepts from the previous chapters.
2. **True or False:** You should write at least one code example for Docker Basics — Containers, Images, and Docker Engine before moving to the next chapter. â€” **True.** Active recall with hands-on code beats passive reading for retention.
3. **True or False:** The complexity analysis for Docker Basics — Containers, Images, and Docker Engine is the same regardless of input size. â€” **False.** Complexity grows with input size; always state best, average, and worst case.
4. **True or False:** Edge cases (empty input, invalid input, boundary values) matter for Docker Basics — Containers, Images, and Docker Engine in production. â€” **True.** Most production bugs come from unhandled edge cases.
5. **True or False:** You should memorize the Docker Basics — Containers, Images, and Docker Engine chapter content once and never review it again. â€” **False.** Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall.

## Fill in the Blank

1. The chapter that covers Docker Basics — Containers, Images, and Docker Engine is Chapter ___ of this module. â€” Answer: check the module's table of contents.
2. The time complexity of the standard approach to Docker Basics — Containers, Images, and Docker Engine is ___. â€” Answer: review the theory section and state big-O notation.
3. The main edge case to handle when implementing Docker Basics — Containers, Images, and Docker Engine is ___. â€” Answer: empty or invalid input handling, as discussed in the chapter.
4. The tools commonly used to debug Docker Basics — Containers, Images, and Docker Engine issues are ___ and ___. â€” Answer: refer to the Debugging Guide section of this chapter.
5. The related topic that connects to Docker Basics — Containers, Images, and Docker Engine in the next chapter is ___. â€” Answer: see the Next Topic section.

## Scenario Questions

1. **Scenario:** A teammate ships a change involving Docker Basics — Containers, Images, and Docker Engine that breaks production at 3 AM. â€” Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist.

2. **Scenario:** Your implementation of Docker Basics — Containers, Images, and Docker Engine is correct but too slow for the required latency. â€” Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes.

3. **Scenario:** A new hire asks you to explain Docker Basics — Containers, Images, and Docker Engine in five minutes before a customer demo. â€” Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo.

4. **Scenario:** Your team's codebase has three different patterns for Docker Basics — Containers, Images, and Docker Engine and you must standardize. â€” Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it.

## Output Questions

1. **What is the output of the simplest correct implementation of Docker Basics — Containers, Images, and Docker Engine on an empty input?** â€” Trace through the code: it should return the documented default (None, 0, empty collection) without raising.
2. **What is the output when the input is at the boundary value?** â€” Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples.
3. **What does the implementation return when given invalid input types?** â€” With type hints and validation, it raises a clear error; without, it may fail silently.
4. **What is the output for the sample input given in the chapter's Examples section?** â€” Re-run the chapter's example code and compare against the documented output.
5. **What is the time complexity output when you profile the implementation at 10x input size?** â€” Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear).

## Difficulty Level

| Level | Time | What It Takes |
|-------|------|---------------|
| Beginner | 1-2 sessions | Read theory, run the chapter examples, solve the Easy exercises |
| Intermediate | 3-5 sessions | Complete Medium exercises, explain Docker Basics — Containers, Images, and Docker Engine to someone else |
| Advanced | 1+ week | Solve Hard exercises, optimize for real datasets, answer interview follow-ups |

## Tips & Tricks

- Always write a one-line example of Docker Basics — Containers, Images, and Docker Engine from memory before opening the chapter â€” active recall first.
- Use the chapter's Revision Notes as a checklist: you have mastered Docker Basics — Containers, Images, and Docker Engine when you can explain each bullet.
- Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus.
- For interviews, practice explaining Docker Basics — Containers, Images, and Docker Engine twice: once with a technical audience, once with a non-technical audience.
- Keep a personal examples file where you collect your own Docker Basics — Containers, Images, and Docker Engine snippets; interviewers love original examples.

## Memory Tricks

- **Acronym**: build a mnemonic from the 5 key concepts of Docker Basics — Containers, Images, and Docker Engine listed in the Chapter at a Glance table.
- **Story**: link Docker Basics — Containers, Images, and Docker Engine to a familiar story â€” the analogy in the Visual Analogy section is designed to stick.
- **Number anchor**: remember the complexity of Docker Basics — Containers, Images, and Docker Engine by connecting it to a known algorithm of the same class.
- **Color code**: highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing.
- **Teach-back**: explain Docker Basics — Containers, Images, and Docker Engine to an imaginary junior engineer for 2 minutes â€” gaps in your explanation are gaps in memory.

## Further Reading

- Official documentation for the primary tool or library used in this chapter
- The chapter referenced in Related Topics for the next-level treatment of Docker Basics — Containers, Images, and Docker Engine
- The classic textbook chapter on Docker Basics — Containers, Images, and Docker Engine (check the Research References below)
- Two blog posts from engineers who debugged real Docker Basics — Containers, Images, and Docker Engine problems in production
- The repository of the open-source project that implements Docker Basics — Containers, Images, and Docker Engine

## Related Topics

- The previous chapter in this module (see table of contents) â€” foundational for Docker Basics — Containers, Images, and Docker Engine
- The next chapter (see Next Topic below) â€” builds on Docker Basics — Containers, Images, and Docker Engine
- The system design chapters in Module 07 â€” how Docker Basics — Containers, Images, and Docker Engine fits into production architectures
- The interview preparation module â€” how Docker Basics — Containers, Images, and Docker Engine is asked in screening rounds
- The capstone project â€” where Docker Basics — Containers, Images, and Docker Engine is applied end-to-end

## FAQs

1. **Do I need to memorize all of Docker Basics — Containers, Images, and Docker Engine, or understand the big picture?** â€” Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth.
2. **What if I get stuck on an exercise?** â€” Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day.
3. **How much time should I spend on ** â€” Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation.
4. **Is Docker Basics — Containers, Images, and Docker Engine asked in interviews?** â€” Yes â€” the Interview Q&A and Placement Section list the exact question styles used by top companies.
5. **What's the fastest way to master ** â€” Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days.

## Important Notes

- Docker Basics — Containers, Images, and Docker Engine is a core requirement for the rest of this module â€” do not skip the examples.
- Always analyze complexity (time and space) when working with Docker Basics — Containers, Images, and Docker Engine.
- Production correctness means handling edge cases, not just the happy path.
- Interview answers should start with the definition, then the example, then the trade-offs.
- Revisit this chapter after finishing the module; the context from later chapters deepens understanding.

## Historical Context

- Docker Basics — Containers, Images, and Docker Engine emerged as a standard practice because early systems failed without it â€” understanding why helps you explain it in interviews.
- The tools used for Docker Basics — Containers, Images, and Docker Engine today evolved from simpler versions; the chapter covers the modern, recommended approach.
- Interviewers value knowing one historical fact about Docker Basics — Containers, Images, and Docker Engine â€” it shows genuine interest, not just cramming.
- The library/tooling ecosystem around Docker Basics — Containers, Images, and Docker Engine changes quickly; focus on fundamentals that remain stable.

## Security Considerations

- Never trust external input: validate and sanitize data before processing Docker Basics — Containers, Images, and Docker Engine.
- Avoid `eval()` and dynamic code execution on untrusted strings.
- Log errors without leaking sensitive data (keys, PII, internal paths).
- For API contexts, add rate limiting and input size limits.
- Review the chapter's code examples for injection or overflow risks before using them verbatim.

## ML Intuition

- Docker Basics — Containers, Images, and Docker Engine appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation.
- Understanding Docker Basics — Containers, Images, and Docker Engine helps you debug why a model misbehaves â€” most ML bugs are data bugs, not model bugs.
- In production ML, the Docker Basics — Containers, Images, and Docker Engine concepts from this chapter map directly to NumPy/PyTorch operations on tensors.
- When optimizing ML systems, Docker Basics — Containers, Images, and Docker Engine skills let you profile and fix the data path, not just the training loop.
- Interview follow-up: how would you apply Docker Basics — Containers, Images, and Docker Engine to a dataset of 10 million records? â€” Batching and vectorization.

## Analogies

- **Docker Basics — Containers, Images, and Docker Engine is like a recipe**: the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice.
- **Complexity is like a delivery route**: a linear route visits each stop once; a nested route revisits stops, and you feel it at scale.
- **Edge cases are like weather**: the happy path is a sunny day; production is the storm â€” build for the storm.
- **The chapter roadmap is a journey map**: each section is a checkpoint; skipping one means getting lost later in the module.

## Capstone Project Link

- [Module Capstone: End-to-End Project](https://github.com/Raushan666java/ai-engineering-journey) â€” this chapter contributes the Docker Basics — Containers, Images, and Docker Engine skills used in the module's capstone project. Complete the exercises here before starting the capstone.

## Flashcards

<details class="tp-qa-card" data-qid="06dockerkubernetescloud-01dockerbasics-flash1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which Docker component is responsible for managing containers, images, and volumes?
  </summary>
  <div class="tp-qa-answer">
    <p>b) Docker Daemon</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="06dockerkubernetescloud-01dockerbasics-flash2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What instruction in a Dockerfile sets the command that always runs when the container starts?
  </summary>
  <div class="tp-qa-answer">
    <p>c) ENTRYPOINT</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="06dockerkubernetescloud-01dockerbasics-flash3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which network driver allows a container to use the host's network stack directly?
  </summary>
  <div class="tp-qa-answer">
    <p>c) host</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="06dockerkubernetescloud-01dockerbasics-flash4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the purpose of a .dockerignore file?
  </summary>
  <div class="tp-qa-answer">
    <p>b) Exclude files from the build context</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="06dockerkubernetescloud-01dockerbasics-flash5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which command shows resource usage of running containers?
  </summary>
  <div class="tp-qa-answer">
    <p>b) docker stats</p>
  </div>
</details>

## Research References

- Official documentation of the primary library for Docker Basics — Containers, Images, and Docker Engine (linked in Further Reading)
- The classic paper or textbook chapter introducing Docker Basics — Containers, Images, and Docker Engine (see References below)
- The standard library reference for Docker Basics — Containers, Images, and Docker Engine-related functions
- Engineering blog posts from companies running Docker Basics — Containers, Images, and Docker Engine in production at scale
- PEPs and RFCs where applicable (Python and networking standards)

## Open-Source Tools

- The primary library used in this chapter (see the code examples)
- Python standard library modules used in the examples (check the imports)
- Testing: pytest for unit tests of Docker Basics — Containers, Images, and Docker Engine code
- Linting and formatting: ruff + black
- Profiling: cProfile or py-spy for performance work on Docker Basics — Containers, Images, and Docker Engine

## Debugging Guide

- Start with `print()` or a debugger to inspect intermediate values in Docker Basics — Containers, Images, and Docker Engine code.
- Reproduce the failure with the smallest possible input before changing code.
- Check the common failure modes listed in Common Mistakes â€” most bugs are listed there.
- For performance problems, profile before optimizing: measure, then fix.
- When stuck, re-read the chapter's Examples and compare line by line with your code.
- Use `pdb` or your IDE's debugger to step through the Docker Basics — Containers, Images, and Docker Engine example code.

## Mock Interview Section

**Round 1 â€” Screening (15 min)**
- Explain Docker Basics — Containers, Images, and Docker Engine in 60 seconds.
- Write a minimal working example of Docker Basics — Containers, Images, and Docker Engine.
- What is the complexity of your example?

**Round 2 â€” Coding (45 min)**
- Solve the Medium exercise from this chapter under time pressure.
- State your assumptions, then implement with type hints.
- Test with edge cases: empty input, boundary values, invalid input.

**Round 3 â€” Behavioral + System (30 min)**
- Tell me about a time you debugged a Docker Basics — Containers, Images, and Docker Engine problem in a project.
- How would you design a system where Docker Basics — Containers, Images, and Docker Engine is used at scale?
- What metrics would you monitor?

**Evaluation rubric**: correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%).

## Optimized Implementation

`python
from typing import Any, Optional

def demonstrate_topic(input_data: list[Any]) -> Optional[float]:
    """Runnable scaffold for Docker Basics — Containers, Images, and Docker Engine.

    Replace the body with the optimized implementation from the chapter,
    keeping type hints, docstring, and edge-case handling.
    """
    if not input_data:
        return None
    # Step 1: validate input types
    # Step 2: apply the core Docker Basics — Containers, Images, and Docker Engine logic from the Examples section
    # Step 3: return the result with the documented default
    return 0.0
`

- Keeps the function signature stable so tests written against it stay valid.
- Handles the empty-input contract explicitly.
- Add unit tests for the edge cases before implementing the logic (test-first).

## Evaluation Metrics

| Skill | Test | Target |
|-------|------|--------|
| Concept recall | Explain Docker Basics — Containers, Images, and Docker Engine without notes | 60-second explanation |
| Code fluency | Write the chapter example from memory | No syntax errors |
| Edge cases | Handle empty/invalid input in exercises | All cases pass |
| Complexity | State time/space for the standard approach | Correct big-O |
| Interview readiness | Answer 5 Interview Q&A questions out loud | Fluent, structured answers |
| Retention | Chapter quiz score after 3 days | 80%+ |

## Real-World Examples

- **Startup**: a small team uses Docker Basics — Containers, Images, and Docker Engine daily in their data pipeline â€” the chapter's examples mirror their code.
- **E-commerce**: Docker Basics — Containers, Images, and Docker Engine patterns appear in order processing, inventory checks, and recommendation feeds.
- **Fintech**: Docker Basics — Containers, Images, and Docker Engine principles apply to transaction validation and fraud detection flows.
- **ML platform**: Docker Basics — Containers, Images, and Docker Engine shows up in feature engineering and model-serving infrastructure.
- **Interview insight**: recruiters look for engineers who can connect Docker Basics — Containers, Images, and Docker Engine to the business outcome, not just the code.

## Next Topic

[Docker Compose — Multi-Container Orchestration](02-docker-compose.md)

## Limitations

- Docker Basics — Containers, Images, and Docker Engine, like any technique, is not a silver bullet â€” it has specific cases where it fits best (covered in the theory).
- The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling.
- Performance of Docker Basics — Containers, Images, and Docker Engine depends on input size and distribution â€” always benchmark for your own data.
- This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone.
