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
```text


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
```text

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
```text



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
```text

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
```text

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
```text

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
```text



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
```text

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
```text



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
```text

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
```text



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
```text

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
```text



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
```text

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
```text



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
```text

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
```text

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
```text

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
```text

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


## Summary

Docker containers provide lightweight, reproducible environments by sharing the host kernel at the OS level, contrasting with VMs that run full guest operating systems. Docker's client-server architecture uses a daemon to manage images (read-only layered templates),.
containers (runnable instances), networks, and volumes. Dockerfiles define custom images through layered instructions, with multi-stage builds producing lean production artifacts. Container lifecycle management,.
networking modes (bridge, host, overlay), and persistent volumes are essential for production deployments. Docker Compose orchestrates multi-container applications, and best practices include non-root users,.
health checks, specific image tags, and `.dockerignore` files.


## Placement Section


### Top 10 Interview Questions

#### Google Style
1. Design a Docker-based CI/CD pipeline for an ML model that builds, tests, and deploys to a GPU-enabled cluster. How do you handle model weights and dependencies?
2. Explain the difference between COPY and ADD in a Dockerfile and when you would use each

#### Amazon Style
1. A containerized microservice is consuming 3x more memory than expected. Walk through your debugging approach from Docker stats to application profiling
2. How would you design a Docker image that works identically in development, staging, and production environments?

#### Microsoft Style
1. Your team has 20 microservices in Docker Compose for local development. How do you manage shared configurations, secrets, and service discovery?
2. Explain how Docker networking works between containers and how you would implement service-to-service communication with proper isolation

#### NVIDIA Style
1. A deep learning training container needs GPU passthrough, 64GB of shared memory, and access to a mounted dataset volume. How do you configure all three?
2. Your GPU container image is 15GB. How do you optimize it for faster pulls and deploys without losing required CUDA libraries?

#### AI Startup Style
1. You need to containerize a FastAPI app that runs a Hugging Face model for inference. Write the Dockerfile from memory, including GPU support and health checks
2. Docker builds are taking 10 minutes. Identify the three most impactful optimizations you would implement


### Resume Tips
- List "Docker" and "Containerization" under Technical Skills with proficiency level
- Project example: "Containerized ML inference service using multi-stage Docker builds, reducing image size from 8GB to 1.2GB and deploy time from 5 minutes to 30 seconds"
- Mention Docker in DevOps or deployment sections: "Implemented Docker Compose development environment with 5 services and automated health checks"


### Interview Day Checklist
- [ ] Can write a multi-stage Dockerfile from memory for a Python/Node.js application
- [ ] Can explain the difference between CMD and ENTRYPOINT with examples
- [ ] Can describe container states and lifecycle transitions
- [ ] Can explain how Docker networking works (bridge, host, overlay)
- [ ] Can list 5 Docker production best practices without notes

> **Next**: [02 — Docker Compose](02-docker-compose.md)


## Difficulty Level

**Level**: Intermediate
**Estimated Study Time**: 30-45 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to Docker, Kubernetes & Cloud fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master docker basics?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of docker basics helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding docker basics at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of docker basics like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply docker basics concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of docker basics?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply docker basics in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of Docker, Kubernetes & Cloud?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering Docker, Kubernetes & Cloud, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Inference Workflow

1. **Input Validation**: Sanitize and validate incoming requests
2. **Preprocessing**: Transform input to model-ready format
3. **Model Execution**: Run inference with optimized runtime
4. **Postprocessing**: Format model output for consumption
5. **Response**: Return results with metadata and timing
6. **Monitoring**: Log requests, responses, and latency

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
