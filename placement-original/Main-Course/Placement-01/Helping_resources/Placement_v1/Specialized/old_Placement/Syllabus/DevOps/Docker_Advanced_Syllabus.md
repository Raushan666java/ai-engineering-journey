# 🐳 Docker Advanced Syllabus
*Duration: 4-5 weeks | Focus: Production-Ready Containerization*

## Week 1: Docker Fundamentals & Architecture 🟢

### Container Technology Deep Dive
**Container vs VM Architecture (2 days)**
```
Traditional VM Stack:
┌─────────────────────────────────────┐
│        Application Layer            │
├─────────────────────────────────────┤
│         Guest OS (Linux)            │
├─────────────────────────────────────┤
│        Hypervisor (VMware)          │
├─────────────────────────────────────┤
│         Host OS (Linux)             │
├─────────────────────────────────────┤
│       Physical Hardware             │
└─────────────────────────────────────┘

Container Stack:
┌─────────────────────────────────────┐
│        Application Layer            │
├─────────────────────────────────────┤
│      Container Runtime              │
├─────────────────────────────────────┤
│         Host OS (Linux)             │
├─────────────────────────────────────┤
│       Physical Hardware             │
└─────────────────────────────────────┘

Key Differences:
- Containers share host OS kernel
- VMs include full guest OS
- Containers: faster startup, less resource usage
- VMs: better isolation, different OS support
```

**Docker Architecture Components (2 days)**
```
Docker Architecture:
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Docker Client  │    │  Docker Daemon  │    │ Docker Registry │
│                 │    │                 │    │                 │
│ docker build    │───▶│ dockerd         │───▶│ Docker Hub      │
│ docker pull     │    │                 │    │ Private Registry│
│ docker run      │    │ Images          │    │                 │
└─────────────────┘    │ Containers      │    └─────────────────┘
                       │ Networks        │
                       │ Volumes         │
                       └─────────────────┘

Components Explained:
- Docker Client: CLI interface (docker command)
- Docker Daemon: Background service managing containers
- Docker Registry: Repository for Docker images
- Images: Read-only templates for containers
- Containers: Running instances of images
```

**Linux Namespaces & Cgroups (3 days)**
```bash
# Namespaces provide isolation
# PID namespace - process isolation
sudo unshare --pid --fork --mount-proc bash
ps aux  # Shows only processes in this namespace

# Network namespace - network isolation
sudo ip netns add test-ns
sudo ip netns exec test-ns ip link show

# Mount namespace - filesystem isolation
sudo unshare --mount bash
mount -t tmpfs tmpfs /tmp  # Only affects this namespace

# Cgroups provide resource limiting
# Create cgroup for memory limiting
sudo mkdir /sys/fs/cgroup/memory/docker-demo
echo "128M" | sudo tee /sys/fs/cgroup/memory/docker-demo/memory.limit_in_bytes

# Add process to cgroup
echo $$ | sudo tee /sys/fs/cgroup/memory/docker-demo/cgroup.procs
```

### Docker Installation & Configuration
**Production Installation (2 days)**
```bash
# Ubuntu/Debian installation
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Configure Docker daemon
sudo tee /etc/docker/daemon.json <<EOF
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  },
  "storage-driver": "overlay2",
  "registry-mirrors": ["https://mirror.gcr.io"],
  "insecure-registries": ["myregistry.local:5000"],
  "default-ulimits": {
    "nofile": {
      "Name": "nofile",
      "Hard": 64000,
      "Soft": 64000
    }
  }
}
EOF

sudo systemctl restart docker
sudo systemctl enable docker

# Add user to docker group
sudo usermod -aG docker $USER
```

## Week 2: Advanced Dockerfile & Image Optimization 🟡

### Multi-Stage Builds
**Optimized Build Process (3 days)**
```dockerfile
# Multi-stage build for Node.js application
# Stage 1: Build dependencies
FROM node:16-alpine AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Stage 2: Build application
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 3: Production runtime
FROM node:16-alpine AS runtime
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

WORKDIR /app

# Copy only necessary files from previous stages
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --chown=nextjs:nodejs package*.json ./

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["npm", "start"]

# Benefits:
# - Smaller final image (no build tools)
# - Better security (no dev dependencies)
# - Faster deployment
# - Layer caching optimization
```

**Advanced Dockerfile Techniques (2 days)**
```dockerfile
# Optimized Python application
FROM python:3.9-slim as base

# Set environment variables
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN groupadd -r appuser && useradd -r -g appuser appuser

# Build stage
FROM base as builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user -r requirements.txt

# Production stage
FROM base as production
WORKDIR /app

# Copy Python packages from builder
COPY --from=builder /root/.local /home/appuser/.local
ENV PATH=/home/appuser/.local/bin:$PATH

# Copy application code
COPY --chown=appuser:appuser . .

USER appuser

# Use exec form for proper signal handling
CMD ["python", "-m", "gunicorn", "--bind", "0.0.0.0:8000", "app:app"]

# Best Practices Applied:
# 1. Use specific base image tags
# 2. Multi-stage builds
# 3. Non-root user
# 4. Minimal layers
# 5. .dockerignore file
# 6. Health checks
# 7. Proper signal handling
```

**Image Optimization Strategies (2 days)**
```dockerfile
# .dockerignore
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.nyc_output
coverage
.nyc_output
.coverage
.pytest_cache
__pycache__

# Distroless images for maximum security
FROM gcr.io/distroless/java:11
COPY app.jar /app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]

# Alpine-based images for smaller size
FROM alpine:3.14
RUN apk add --no-cache python3 py3-pip
COPY requirements.txt .
RUN pip3 install -r requirements.txt
COPY . .
CMD ["python3", "app.py"]

# Image size comparison techniques
docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"
docker history myapp:latest  # Show layer sizes
dive myapp:latest           # Analyze image layers
```

### Container Security
**Security Best Practices (3 days)**
```dockerfile
# Security-hardened Dockerfile
FROM node:16-alpine

# Update packages and remove package manager
RUN apk update && apk upgrade && \
    apk add --no-cache dumb-init && \
    rm -rf /var/cache/apk/*

# Create non-root user with specific UID/GID
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs

# Set secure directory permissions
WORKDIR /app
RUN chown -R nextjs:nodejs /app

# Copy and install dependencies as root
COPY package*.json ./
RUN npm ci --only=production && \
    npm cache clean --force && \
    chown -R nextjs:nodejs node_modules

# Copy application files
COPY --chown=nextjs:nodejs . .

# Switch to non-root user
USER nextjs

# Use dumb-init for proper signal handling
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server.js"]

# Security scanning
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
  aquasec/trivy image myapp:latest

# Runtime security
docker run --read-only --tmpfs /tmp --tmpfs /var/run \
  --cap-drop ALL --cap-add NET_BIND_SERVICE \
  --security-opt no-new-privileges:true \
  myapp:latest
```

## Week 3: Docker Networking & Storage 🟠

### Advanced Networking
**Network Types & Configuration (3 days)**
```bash
# Bridge Network (default)
docker network create --driver bridge my-bridge
docker run --network my-bridge nginx

# Host Network (shares host networking)
docker run --network host nginx

# None Network (no networking)
docker run --network none alpine

# Custom Bridge with specific configuration
docker network create \
  --driver bridge \
  --subnet=172.20.0.0/16 \
  --ip-range=172.20.240.0/20 \
  --gateway=172.20.0.1 \
  --opt com.docker.network.bridge.name=custom-bridge \
  custom-network

# Overlay Network for multi-host
docker network create \
  --driver overlay \
  --subnet=10.0.9.0/24 \
  --attachable \
  my-overlay

# Connect containers to multiple networks
docker run -d --name web nginx
docker network connect my-bridge web
docker network connect my-overlay web

# Network troubleshooting
docker network ls
docker network inspect bridge
docker exec container_name netstat -tulpn
docker exec container_name nslookup service_name
```

**Service Discovery & Load Balancing (2 days)**
```yaml
# docker-compose.yml with service discovery
version: '3.8'
services:
  web:
    image: nginx
    ports:
      - "80:80"
    networks:
      - frontend
    depends_on:
      - api

  api:
    image: myapi:latest
    deploy:
      replicas: 3
    networks:
      - frontend
      - backend
    environment:
      - DB_HOST=database

  database:
    image: postgres:13
    networks:
      - backend
    environment:
      - POSTGRES_DB=myapp
    volumes:
      - db_data:/var/lib/postgresql/data

networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge
    internal: true  # No external access

volumes:
  db_data:

# Load balancing with HAProxy
# haproxy.cfg
global
    daemon

defaults
    mode http
    timeout connect 5000ms
    timeout client 50000ms
    timeout server 50000ms

frontend web_frontend
    bind *:80
    default_backend web_servers

backend web_servers
    balance roundrobin
    server web1 web_1:80 check
    server web2 web_2:80 check
    server web3 web_3:80 check
```

### Persistent Storage
**Volume Management (3 days)**
```bash
# Named volumes (managed by Docker)
docker volume create mydata
docker volume ls
docker volume inspect mydata
docker run -v mydata:/data nginx

# Bind mounts (host directory)
docker run -v /host/path:/container/path nginx
docker run -v $(pwd):/app node:16 npm install

# tmpfs mounts (in-memory)
docker run --tmpfs /tmp nginx

# Volume drivers for external storage
# NFS volume
docker volume create \
  --driver local \
  --opt type=nfs \
  --opt o=addr=192.168.1.100,rw \
  --opt device=:/path/to/dir \
  nfs-volume

# AWS EBS volume (with plugin)
docker plugin install rexray/ebs
docker volume create \
  --driver rexray/ebs \
  --opt size=10 \
  ebs-volume

# Volume backup and restore
docker run --rm \
  -v mydata:/data \
  -v $(pwd):/backup \
  alpine tar czf /backup/backup.tar.gz -C /data .

# Restore volume
docker run --rm \
  -v mydata:/data \
  -v $(pwd):/backup \
  alpine tar xzf /backup/backup.tar.gz -C /data
```

**Storage Drivers & Performance (2 days)**
```bash
# Check current storage driver
docker info | grep "Storage Driver"

# Configure storage driver
# /etc/docker/daemon.json
{
  "storage-driver": "overlay2",
  "storage-opts": [
    "overlay2.override_kernel_check=true"
  ]
}

# Storage driver comparison
# overlay2: Best performance, default
# aufs: Legacy, compatibility
# devicemapper: RHEL/CentOS older versions
# btrfs: Advanced features, snapshots
# zfs: Enterprise features, compression

# Monitor storage usage
docker system df
docker system df -v
docker system prune  # Clean up unused data
docker volume prune  # Remove unused volumes
docker image prune   # Remove unused images
```

## Week 4: Docker Compose & Orchestration 🟠

### Advanced Docker Compose
**Complex Multi-Service Applications (3 days)**
```yaml
# Production-ready docker-compose.yml
version: '3.8'

x-common-variables: &common-variables
  POSTGRES_DB: ${DB_NAME:-myapp}
  POSTGRES_USER: ${DB_USER:-postgres}
  POSTGRES_PASSWORD: ${DB_PASSWORD:-password}

x-logging: &default-logging
  driver: "json-file"
  options:
    max-size: "10m"
    max-file: "3"

services:
  traefik:
    image: traefik:v2.8
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.myresolver.acme.tlschallenge=true"
      - "--certificatesresolvers.myresolver.acme.email=admin@example.com"
      - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
      - "8080:8080"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./letsencrypt:/letsencrypt"
    networks:
      - web
    logging: *default-logging

  web:
    build:
      context: .
      dockerfile: Dockerfile.prod
      args:
        - NODE_ENV=production
    environment:
      - NODE_ENV=production
      - API_URL=http://api:3001
      - REDIS_URL=redis://redis:6379
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.web.rule=Host(`myapp.example.com`)"
      - "traefik.http.routers.web.entrypoints=websecure"
      - "traefik.http.routers.web.tls.certresolver=myresolver"
    depends_on:
      api:
        condition: service_healthy
      redis:
        condition: service_started
    networks:
      - web
      - internal
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
    logging: *default-logging

  api:
    build:
      context: ./api
      dockerfile: Dockerfile
    environment:
      <<: *common-variables
      - NODE_ENV=production
      - DB_HOST=database
      - REDIS_URL=redis://redis:6379
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3001/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    depends_on:
      database:
        condition: service_healthy
    networks:
      - internal
    volumes:
      - ./uploads:/app/uploads
    logging: *default-logging

  database:
    image: postgres:13-alpine
    environment: *common-variables
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql:ro
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${DB_USER:-postgres}"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - internal
    logging: *default-logging

  redis:
    image: redis:6-alpine
    command: redis-server --appendonly yes --requirepass ${REDIS_PASSWORD:-password}
    volumes:
      - redis_data:/data
    networks:
      - internal
    logging: *default-logging

  worker:
    build:
      context: ./api
      dockerfile: Dockerfile
    command: npm run worker
    environment:
      <<: *common-variables
      - NODE_ENV=production
      - DB_HOST=database
      - REDIS_URL=redis://redis:6379
    depends_on:
      - database
      - redis
    networks:
      - internal
    deploy:
      replicas: 2
    logging: *default-logging

  monitoring:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    networks:
      - internal
    logging: *default-logging

networks:
  web:
    external: true
  internal:
    driver: bridge
    internal: true

volumes:
  postgres_data:
    driver: local
  redis_data:
    driver: local
  prometheus_data:
    driver: local

secrets:
  db_password:
    file: ./secrets/db_password.txt
  api_key:
    external: true
```

**Environment Management (2 days)**
```bash
# Environment-specific configurations
# .env.development
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
API_PORT=3001
LOG_LEVEL=debug

# .env.production
NODE_ENV=production
DB_HOST=prod-db.example.com
DB_PORT=5432
API_PORT=3001
LOG_LEVEL=info

# Override files for different environments
# docker-compose.override.yml (development)
version: '3.8'
services:
  web:
    build:
      target: development
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    ports:
      - "3000:3000"

# docker-compose.prod.yml (production)
version: '3.8'
services:
  web:
    build:
      target: production
    restart: unless-stopped
    deploy:
      replicas: 3

# Usage
docker-compose up  # Uses .env and override files
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```

### Container Orchestration Basics
**Docker Swarm (2 days)**
```bash
# Initialize swarm
docker swarm init --advertise-addr 192.168.1.100

# Join workers
docker swarm join --token SWMTKN-1-... 192.168.1.100:2377

# Deploy stack
docker stack deploy -c docker-compose.yml myapp

# Service management
docker service ls
docker service ps myapp_web
docker service scale myapp_web=5
docker service update --image myapp:v2 myapp_web

# Rolling updates
docker service update \
  --update-parallelism 2 \
  --update-delay 10s \
  --image myapp:v2 \
  myapp_web

# Secrets management
echo "mysecretpassword" | docker secret create db_password -
docker service update --secret-add db_password myapp_api
```

## Week 5: Production Deployment & Monitoring 🔴

### Production Best Practices
**Container Lifecycle Management (2 days)**
```bash
# Health checks and restart policies
docker run -d \
  --name myapp \
  --restart unless-stopped \
  --health-cmd="curl -f http://localhost:8080/health || exit 1" \
  --health-interval=30s \
  --health-timeout=10s \
  --health-retries=3 \
  myapp:latest

# Resource limits
docker run -d \
  --name myapp \
  --memory=512m \
  --cpus="1.5" \
  --memory-swap=1g \
  --oom-kill-disable=false \
  myapp:latest

# Security constraints
docker run -d \
  --name myapp \
  --user 1001:1001 \
  --read-only \
  --tmpfs /tmp \
  --cap-drop ALL \
  --cap-add NET_BIND_SERVICE \
  --security-opt no-new-privileges:true \
  --security-opt seccomp=seccomp-profile.json \
  myapp:latest
```

**Logging & Monitoring (3 days)**
```bash
# Centralized logging with ELK
# docker-compose.logging.yml
version: '3.8'
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.14.0
    environment:
      - discovery.type=single-node
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    volumes:
      - elasticsearch_data:/usr/share/elasticsearch/data

  logstash:
    image: docker.elastic.co/logstash/logstash:7.14.0
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    depends_on:
      - elasticsearch

  kibana:
    image: docker.elastic.co/kibana/kibana:7.14.0
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch

  filebeat:
    image: docker.elastic.co/beats/filebeat:7.14.0
    volumes:
      - /var/lib/docker/containers:/var/lib/docker/containers:ro
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./filebeat.yml:/usr/share/filebeat/filebeat.yml:ro
    depends_on:
      - logstash

# Application with structured logging
version: '3.8'
services:
  app:
    image: myapp:latest
    logging:
      driver: "fluentd"
      options:
        fluentd-address: localhost:24224
        tag: myapp
    labels:
      - "logging=true"

# Monitoring with Prometheus
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/etc/prometheus/console_libraries'
      - '--web.console.templates=/etc/prometheus/consoles'

  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana_data:/var/lib/grafana
```

**CI/CD Integration (3 days)**
```yaml
# .github/workflows/docker.yml
name: Docker Build and Deploy

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v2

    - name: Log in to Container Registry
      uses: docker/login-action@v2
      with:
        registry: ${{ env.REGISTRY }}
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}

    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v4
      with:
        images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
        tags: |
          type=ref,event=branch
          type=ref,event=pr
          type=sha,prefix={{branch}}-
          type=raw,value=latest,enable={{is_default_branch}}

    - name: Build and push Docker image
      uses: docker/build-push-action@v4
      with:
        context: .
        platforms: linux/amd64,linux/arm64
        push: true
        tags: ${{ steps.meta.outputs.tags }}
        labels: ${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

    - name: Run security scan
      uses: aquasecurity/trivy-action@master
      with:
        image-ref: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
        format: 'sarif'
        output: 'trivy-results.sarif'

    - name: Upload Trivy scan results
      uses: github/codeql-action/upload-sarif@v2
      with:
        sarif_file: 'trivy-results.sarif'

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - name: Deploy to production
      uses: appleboy/ssh-action@v0.1.5
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.KEY }}
        script: |
          docker pull ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
          docker-compose -f /opt/myapp/docker-compose.prod.yml up -d
          docker system prune -f
```

### Troubleshooting & Debugging
**Common Issues & Solutions (2 days)**
```bash
# Container debugging commands
docker logs container_name --tail 100 -f
docker exec -it container_name bash
docker inspect container_name
docker stats container_name

# Network debugging
docker network ls
docker network inspect bridge
docker exec container_name netstat -tulpn
docker exec container_name ping other_container

# Storage debugging
docker volume ls
docker volume inspect volume_name
docker system df
docker system events

# Performance debugging
docker stats --no-stream
docker exec container_name top
docker exec container_name ps aux
docker exec container_name free -m

# Common issues and solutions
# 1. Container exits immediately
docker logs container_name  # Check logs
docker run -it image_name bash  # Interactive debugging

# 2. Port binding issues
netstat -tulpn | grep :8080  # Check if port is in use
docker run -p 8081:8080 image_name  # Use different port

# 3. Permission issues
docker exec -it container_name ls -la /path
# Fix with proper user/group in Dockerfile

# 4. Memory issues
docker stats  # Check memory usage
# Increase memory limits or optimize application

# 5. Network connectivity
docker exec container_name nslookup service_name
docker network inspect network_name
# Check network configuration and DNS resolution
```

## Interview Preparation & Practical Projects

### Docker Interview Questions
1. Explain Docker architecture and components
2. Difference between images and containers
3. Multi-stage builds benefits and implementation
4. Docker networking types and use cases
5. Volume types and when to use each
6. Container security best practices
7. Docker Compose vs Docker Swarm vs Kubernetes
8. Troubleshooting container issues
9. CI/CD integration with Docker
10. Production deployment strategies

### Hands-on Projects
**Project 1: Microservices Application**
- Multi-service application with Docker Compose
- Service discovery and load balancing
- Centralized logging and monitoring
- CI/CD pipeline integration

**Project 2: Production Deployment**
- Multi-stage Dockerfile optimization
- Security hardening implementation
- Health checks and restart policies
- Backup and disaster recovery

## Resources & Certification
- **Docker Certified Associate (DCA)**
- **Books**: "Docker Deep Dive" by Nigel Poulton
- **Practice**: Docker Playground, Katacoda scenarios
- **Documentation**: Official Docker docs and best practices