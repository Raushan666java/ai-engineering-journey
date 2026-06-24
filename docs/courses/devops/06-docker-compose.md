# Chapter 6: Docker Compose

> **Previous:** [Docker](./05-docker.md) | **Next:** [Container Orchestration with Kubernetes](./06-orchestration.md)

## Learning Objectives

![Docker Compose Multi-Service Architecture](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/devops/ch06-docker-compose.png)

By the end of this chapter, students will be able to:

1. Define multi-service applications using Docker Compose with services, networks, and volumes
2. Implement health checks and dependency management between services
3. Use Compose profiles for environment-specific configurations
4. Apply YAML extensions for DRY configuration
5. Configure production-oriented Compose deployments with logging and secrets


## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Docker Compose Overview | Multi-container applications defined in YAML | Use for local dev and small-scale production |
| Services | Image, build, ports, environment, volumes, health checks | Define each service with explicit health checks |
| Networks | Default, custom bridge, internal networks | Use internal networks for database isolation |
| Profiles | Conditional services per environment | Replace multiple compose files with profiles |
| Production Patterns | Resource limits, logging, secrets, restart policies | Every production service needs resource constraints |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Docker Compose] --> B[Services]
    B --> C[Images]
    B --> D[Networks]
    B --> E[Volumes]
    B --> F[Health Checks]
    C & D & E & F --> G[Profiles]
    G --> H[Production Deploy]
```

## Theory

### 6.1 Docker Compose Overview

> **Pro Tip:** Use depends_on with condition: service_healthy for proper startup ordering, not just simple depends.

Docker Compose defines and runs multi-container Docker applications. A `compose.yaml` (or `docker-compose.yml`) file declares the application's services, networks, and volumes. A single command (`docker compose up`) creates and starts the entire application stack.

Compose is primarily a development and local-testing tool. In production, Docker Compose is suitable for small-scale deployments (single host, non-critical workloads). For multi-host, large-scale, or critical production deployments, Kubernetes or Docker Swarm is recommended.

Compose v2 is integrated into the Docker CLI as the `docker compose` command (replacing the standalone `docker-compose`).

### 6.2 Services

> **Remember:** Docker Compose is primarily for development. For multi-host production, use Kubernetes or Docker Swarm.

Services are the core abstraction. Each service defines a container image, configuration, environment, and runtime behavior.

```yaml
services:
  api:
    image: myapp-api:latest
    build:
      context: ./api
      dockerfile: Dockerfile.dev
    ports:
      - "8080:8080"
    environment:
      - NODE_ENV=development
      - DB_HOST=db
    env_file:
      - ./config/api.env
    volumes:
      - ./api/src:/app/src:ro
    depends_on:
      db:
        condition: service_healthy
```

Each service can specify:
- **image/build** â€” Use a pre-built image or build from source
- **ports** â€” Publish container ports to the host
- **environment / env_file** â€” Environment variables
- **volumes** â€” Mount host paths or named volumes
- **depends_on** â€” Startup and shutdown ordering
- **healthcheck** â€” Container health verification
- **restart** â€” Restart policy
- **deploy** â€” Deployment configuration (replicas, resources, placement)

### 6.3 Networks

> **Warning:** Never hardcode secrets in compose files. Use secrets: with external files or Docker Swarm secrets.

Compose creates a default network for the application stack. Custom networks enable service isolation and configuration:

```yaml
networks:
  frontend:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16
  backend:
    internal: true

services:
  nginx:
    networks:
      - frontend
  api:
    networks:
      - frontend
      - backend
  db:
    networks:
      - backend
```

The `internal: true` flag prevents external access to the network, useful for database networks.

### 6.4 Volumes

Named volumes persist data across container restarts:

```yaml
volumes:
  pgdata:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /data/postgres
```

Volumes can use external storage drivers (NFS, cloud block storage) via `driver: rexray` or similar.

### 6.5 Health Checks

Health checks tell Compose when a container is ready to serve traffic:

```yaml
services:
  db:
    image: postgres:16
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 5s
      retries: 5
      start_period: 10s
```

Other services use `depends_on` with `condition: service_healthy` to wait for the database before starting. This replaces the unreliable `depends_on` without conditions.

### 6.6 Profiles

Profiles conditionally enable services based on the execution context:

```yaml
services:
  db:
    image: postgres:16

  redis:
    image: redis:7

  mailhog:
    image: mailhog/mailhog
    profiles:
      - dev
      - test

  datadog-agent:
    image: datadog/agent
    profiles:
      - monitoring
```

```bash
# Start only core services
docker compose up -d

# Start core + dev tools
docker compose --profile dev up -d

# Start everything
docker compose --profile '*' up -d
```

Profiles eliminate the need for multiple compose files for environment variation.

### 6.7 Extensions

YAML anchors and Compose extensions enable DRY configuration:

```yaml
x-logging: &logging
  logging:
    driver: json-file
    options:
      max-size: "10m"
      max-file: "3"

x-healthcheck: &healthcheck
  healthcheck:
    test: ["CMD", "curl", "-f", "http://localhost/health"]
    interval: 30s
    timeout: 10s
    retries: 3

services:
  api:
    image: myapp-api
    <<: *logging
    <<: *healthcheck
```

### 6.8 Docker Compose in Production

For production single-host deployments:

- Use `restart: unless-stopped` or `restart: always`
- Configure logging drivers (`json-file` with rotation, `syslog`, `fluentd`)
- Set resource limits (memory, CPU) on every service
- Use secrets for sensitive data instead of environment variables
- Specify `deploy.resources` for swarm deployments
- Use `depends_on` with health checks for proper startup ordering
- Implement graceful shutdown with `stop_grace_period`

```yaml
services:
  api:
    image: myapp:1.2.3
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-size: "10m"
        max-file: "3"
    deploy:
      resources:
        limits:
          cpus: "1.0"
          memory: "512M"
        reservations:
          cpus: "0.5"
          memory: "256M"
    secrets:
      - db_password
    stop_grace_period: 30s

secrets:
  db_password:
    file: ./secrets/db_password.txt
```

### 6.9 Docker Swarm Mode

Compose files (version 3+) are compatible with Docker Swarm for multi-host orchestration. The `docker stack deploy` command deploys a Compose file to a Swarm cluster. Swarm adds:
- **Replicated and global services**
- **Rolling updates** with configurable parallelism and delay
- **Encrypted overlay networking**
- **Load-balanced service discovery** via DNS
- **Secret management** natively

Swarm mode is simpler than Kubernetes but less capable for complex workloads.

## Summary

## Concept Comparison Table

| Concept | Description |
|---------|-------------|
| Docker Compose | YAML-based multi-container app definition |
| Docker Swarm | Multi-host orchestration using Compose files |
| Service | Container definition with image, config, env |
| Profile | Conditional service enablement per environment |
| Health Check | Container readiness verification |

## Quick Reference

| Topic | Key Points |
|-------|------------|
| Services | image, build, ports, environment, volumes |
| Networks | driver(bridge/overlay), internal, ipam |
| Volumes | driver, driver_opts, external |
| Health Check | test, interval, timeout, retries |
| Production | restart, logging, secrets, deploy.resources |

## Cross-Application Matrix

| Domain | Application |
|--------|-------------|
| Web | Full-stack app with API, DB, and cache services |
| Cloud | Local development mirroring cloud services |
| Enterprise | Microservice stack for testing environments |
| ML | Multiple service containers for model serving |

## Chapter Quiz

<details><summary>Question 1: What is Docker Compose best suited for?</summary>**A)** Multi-host production deployments<br>**B)** Local development and testing<br>**C)** Database migrations<br>**D)** CI/CD pipelines<br><br>**Answer: B)** Local development and testing</details>

<details><summary>Question 2: What does depends_on: condition: service_healthy do?</summary>**A)** Starts services in random order<br>**B)** Waits for the service health check to pass<br>**C)** Ignores service health<br>**D)** Stops unhealthy services<br><br>**Answer: B)** Waits for the service health check to pass</details>

<details><summary>Question 3: What problem do Compose profiles solve?</summary>**A)** Network performance<br>**B)** Environment-specific service configurations<br>**C)** Image layer caching<br>**D)** Volume backup<br><br>**Answer: B)** Environment-specific service configurations</details>


## Summary

Docker Compose streamlines multi-service application management for development and small-scale production. Services define containers with images, ports, volumes, environment, and health checks. Networks isolate traffic between service tiers. Profiles enable environment-specific configurations in a single file. YAML extensions reduce configuration duplication. Production Compose deployments require resource limits, logging configuration, secrets management, and proper restart policies. Docker Swarm extends Compose to multi-host orchestration.

## Exercises

### Review Questions

1. Why is Docker Compose primarily recommended for development rather than large-scale production?
2. How does `depends_on` with healthcheck conditions improve startup ordering?
3. What problem do Compose profiles solve? Provide an example of profile usage.
4. How do YAML anchors and extensions reduce duplication in compose files?
5. Compare Docker Compose local volumes with Docker Swarm secrets for managing credentials.

### Application Problems

1. Create a Compose file for a web application stack: Nginx reverse proxy, Node.js API (with healthcheck), PostgreSQL database, and Redis cache. Configure isolated networks (frontend and backend), named volumes for database persistence, health checks with dependencies, and resource limits.
2. Extend the above Compose file with profiles: `dev` (adds mailhog, pgadmin, and hot-reload volumes), `monitoring` (adds Prometheus and Grafana), and `test` (adds integration test runner). Demonstrate starting each profile combination.
3. Configure a production-ready Compose file that limits log file size, uses secrets for database credentials, sets restart policies, and configures graceful shutdown timeouts.

### Challenge Problem

Design a Docker Compose deployment for a multi-tier application that must support three environments (dev, staging, production) from a single configuration base. The application includes: React frontend (served via Nginx), Go API server (8 instances in production), PostgreSQL with replication (primary + read replica), Redis cluster, RabbitMQ message broker, and periodic background workers. Use profiles, extensions, and override files. Address secrets management, rolling updates, health checks, resource limits, logging, backup volumes for databases, and graceful shutdown. Document the startup ordering strategy and the production deploy command sequence.
