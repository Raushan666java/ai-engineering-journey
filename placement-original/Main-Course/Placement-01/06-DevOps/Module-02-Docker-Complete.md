# 🐳 Module 2: Containerization with Docker - Complete Course

## Week 4: Docker Fundamentals

### Day 1-2: Docker Installation & Basics

#### Understanding Containerization

**What are Containers?**
- Lightweight, portable, self-sufficient packages
- Include application code, runtime, libraries, and dependencies
- Run consistently across different environments

**Containers vs Virtual Machines:**

```
Virtual Machines:
Host OS → Hypervisor → Guest OS → App

Containers:
Host OS → Container Runtime → App
```

**Benefits of Containers:**
- Consistency across environments
- Resource efficiency
- Fast startup times
- Easy scaling
- Isolation and security

#### Docker Architecture

**Docker Components:**
```
Docker Client → Docker Daemon → Images/Containers
     ↓              ↓
Docker CLI    Docker Engine
```

**Key Concepts:**
- **Image**: Read-only template for creating containers
- **Container**: Running instance of an image
- **Dockerfile**: Text file with instructions to build image
- **Registry**: Storage for Docker images (Docker Hub)

#### Docker Installation

**Ubuntu/Debian:**
```bash
# Update package index
sudo apt update

# Install prerequisites
sudo apt install apt-transport-https ca-certificates curl gnupg lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io

# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker
```

**CentOS/RHEL:**
```bash
# Install required packages
sudo yum install -y yum-utils

# Add Docker repository
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# Install Docker
sudo yum install docker-ce docker-ce-cli containerd.io

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker
```

**Windows/macOS:**
```bash
# Download Docker Desktop from docker.com
# Install and follow setup wizard
```

**Verify Installation:**
```bash
docker --version
docker info
docker run hello-world
```

#### Basic Docker Commands

**Image Operations:**
```bash
# List images
docker images
docker image ls

# Pull image from registry
docker pull ubuntu:20.04
docker pull nginx:latest
docker pull node:18-alpine

# Remove image
docker rmi ubuntu:20.04
docker image rm nginx:latest

# Search images
docker search nginx
```

**Container Operations:**
```bash
# Run container
docker run ubuntu:20.04
docker run -it ubuntu:20.04 bash    # Interactive mode
docker run -d nginx:latest           # Detached mode
docker run --name my-nginx nginx     # Named container

# List containers
docker ps                            # Running containers
docker ps -a                         # All containers
docker container ls                  # Alternative syntax

# Stop/Start containers
docker stop container-id
docker start container-id
docker restart container-id

# Remove containers
docker rm container-id
docker container rm container-name
```

### Day 3-4: Images & Containers

#### Working with Images

**Image Layers:**
```
Application Layer
├── Node.js Runtime Layer
├── Operating System Layer
└── Base Layer
```

**Inspect Images:**
```bash
# Detailed image information
docker inspect ubuntu:20.04

# Image history (layers)
docker history ubuntu:20.04

# Image size and details
docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"
```

**Tagging Images:**
```bash
# Tag existing image
docker tag ubuntu:20.04 my-ubuntu:latest
docker tag nginx:latest myregistry.com/nginx:v1.0

# Build with tag
docker build -t my-app:v1.0 .
```

#### Container Lifecycle

**Container States:**
- Created
- Running
- Paused
- Stopped
- Deleted

**Detailed Container Operations:**
```bash
# Run with various options
docker run -d \
  --name web-server \
  -p 8080:80 \
  -v /host/path:/container/path \
  -e ENV_VAR=value \
  nginx:latest

# Execute commands in running container
docker exec -it web-server bash
docker exec web-server ls -la /usr/share/nginx/html

# Copy files to/from container
docker cp file.txt web-server:/usr/share/nginx/html/
docker cp web-server:/var/log/nginx/access.log ./logs/

# View container logs
docker logs web-server
docker logs -f web-server              # Follow logs
docker logs --tail 50 web-server       # Last 50 lines

# Container statistics
docker stats web-server
docker stats --no-stream               # One-time stats
```

#### Port Mapping and Networking

**Port Mapping:**
```bash
# Map single port
docker run -p 8080:80 nginx

# Map multiple ports
docker run -p 8080:80 -p 8443:443 nginx

# Map to specific interface
docker run -p 127.0.0.1:8080:80 nginx

# Map random port
docker run -P nginx                     # Maps to random host port
```

**Environment Variables:**
```bash
# Set environment variables
docker run -e NODE_ENV=production -e PORT=3000 node-app

# Load from file
docker run --env-file .env node-app

# View container environment
docker exec container-name env
```

### Day 5-7: Creating Dockerfiles

#### Dockerfile Basics

**Dockerfile Structure:**
```dockerfile
# Comments start with #
FROM base-image
LABEL maintainer="your-email@example.com"
WORKDIR /app
COPY source destination
RUN command
EXPOSE port
CMD ["executable", "param1", "param2"]
```

**Basic Node.js Dockerfile:**
```dockerfile
# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Change ownership
RUN chown -R nodejs:nodejs /usr/src/app
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start application
CMD ["node", "server.js"]
```

#### Dockerfile Instructions

**FROM:**
```dockerfile
FROM ubuntu:20.04                      # Specific version
FROM node:18-alpine                    # Alpine Linux (smaller)
FROM scratch                          # Empty base image
FROM node:18 AS builder                # Multi-stage build
```

**WORKDIR:**
```dockerfile
WORKDIR /app                           # Set working directory
WORKDIR /usr/src/app                   # Absolute path
WORKDIR relative/path                  # Relative to current WORKDIR
```

**COPY vs ADD:**
```dockerfile
# COPY (preferred for simple file copying)
COPY package.json ./
COPY src/ ./src/
COPY --from=builder /app/dist ./dist   # Multi-stage copy

# ADD (has additional features)
ADD https://example.com/file.tar.gz .  # Download and extract
ADD file.tar.gz .                      # Auto-extract archives
```

**RUN:**
```dockerfile
# Shell form
RUN apt-get update && apt-get install -y curl

# Exec form (preferred)
RUN ["apt-get", "update"]

# Multi-line with backslash
RUN apt-get update && \
    apt-get install -y \
        curl \
        wget \
        vim && \
    rm -rf /var/lib/apt/lists/*
```

**ENV:**
```dockerfile
ENV NODE_ENV=production
ENV PORT=3000
ENV PATH="/app/bin:${PATH}"

# Multiple variables
ENV NODE_ENV=production \
    PORT=3000 \
    DEBUG=false
```

**EXPOSE:**
```dockerfile
EXPOSE 3000                            # Single port
EXPOSE 3000 8080                       # Multiple ports
EXPOSE 3000/tcp 53/udp                 # Specify protocol
```

**CMD vs ENTRYPOINT:**
```dockerfile
# CMD - can be overridden
CMD ["node", "server.js"]
CMD node server.js                     # Shell form

# ENTRYPOINT - always executed
ENTRYPOINT ["node", "server.js"]

# Combined usage
ENTRYPOINT ["node"]
CMD ["server.js"]                      # Default parameter
```

#### Building Images

**Build Commands:**
```bash
# Basic build
docker build .
docker build -t my-app:latest .

# Build with different Dockerfile
docker build -f Dockerfile.prod -t my-app:prod .

# Build with build arguments
docker build --build-arg NODE_ENV=production -t my-app .

# Build with no cache
docker build --no-cache -t my-app .

# Build and tag multiple versions
docker build -t my-app:latest -t my-app:v1.0 .
```

**Build Arguments:**
```dockerfile
# Dockerfile
ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine

ARG BUILD_DATE
ARG VERSION
LABEL build-date=${BUILD_DATE}
LABEL version=${VERSION}

# Build command
docker build \
  --build-arg NODE_VERSION=16 \
  --build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') \
  --build-arg VERSION=1.0.0 \
  -t my-app:1.0.0 .
```

#### Best Practices

**Layer Optimization:**
```dockerfile
# Bad - creates multiple layers
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y wget
RUN rm -rf /var/lib/apt/lists/*

# Good - single layer
RUN apt-get update && \
    apt-get install -y curl wget && \
    rm -rf /var/lib/apt/lists/*
```

**Caching Optimization:**
```dockerfile
# Copy package files first (changes less frequently)
COPY package*.json ./
RUN npm ci --only=production

# Copy source code last (changes more frequently)
COPY . .
```

**Security Best Practices:**
```dockerfile
# Use specific versions
FROM node:18.17.0-alpine

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Don't run as root
USER nodejs

# Use COPY instead of ADD
COPY package.json ./

# Remove unnecessary packages
RUN apk add --no-cache curl && \
    apk del build-dependencies
```

---

## Week 5: Docker Advanced Concepts

### Day 1-2: Multi-stage Builds

#### Understanding Multi-stage Builds

**Purpose:**
- Reduce final image size
- Separate build and runtime environments
- Keep production images clean

**Basic Multi-stage Example:**
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --from=builder /usr/src/app/dist ./dist
USER node
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

**Advanced Multi-stage Build:**
```dockerfile
# Base stage with common dependencies
FROM node:18-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Development stage
FROM base AS development
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Build stage
FROM base AS builder
RUN npm ci
COPY . .
RUN npm run build
RUN npm run test

# Production stage
FROM base AS production
COPY --from=builder /usr/src/app/dist ./dist
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001
RUN chown -R nodejs:nodejs /usr/src/app
USER nodejs
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1
CMD ["node", "dist/server.js"]
```

**Target Specific Stage:**
```bash
# Build development image
docker build --target development -t my-app:dev .

# Build production image
docker build --target production -t my-app:prod .

# Build all stages
docker build -t my-app:latest .
```

#### Language-Specific Examples

**Java Multi-stage:**
```dockerfile
# Build stage
FROM maven:3.8.6-openjdk-18 AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM openjdk:18-jre-slim
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
```

**Go Multi-stage:**
```dockerfile
# Build stage
FROM golang:1.19-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# Runtime stage
FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /app/main .
EXPOSE 8080
CMD ["./main"]
```

**Python Multi-stage:**
```dockerfile
# Build stage
FROM python:3.11-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user -r requirements.txt

# Runtime stage
FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
EXPOSE 5000
CMD ["python", "app.py"]
```

### Day 3-4: Docker Networking

#### Docker Network Types

**Default Networks:**
```bash
# List networks
docker network ls

# Default networks:
# bridge    - Default network for containers
# host      - Use host's network stack
# none      - No networking
```

**Bridge Network (Default):**
```bash
# Containers can communicate with each other
# NAT to host network
# Isolated from host network by default

# Run container on default bridge
docker run -d --name web nginx
docker run -d --name app node-app

# Containers can communicate using container names (with custom bridge)
```

**Host Network:**
```bash
# Container uses host's network directly
# No network isolation
# Better performance but less security

docker run -d --network host nginx
# Nginx accessible directly on host's port 80
```

**None Network:**
```bash
# No network access
# Useful for batch processing or security

docker run -d --network none alpine sleep 3600
```

#### Custom Networks

**Create Custom Bridge Network:**
```bash
# Create network
docker network create my-network
docker network create --driver bridge my-bridge-network

# Create with custom subnet
docker network create \
  --driver bridge \
  --subnet=172.20.0.0/16 \
  --ip-range=172.20.240.0/20 \
  my-custom-network

# Inspect network
docker network inspect my-network
```

**Connect Containers to Network:**
```bash
# Run containers on custom network
docker run -d --name web --network my-network nginx
docker run -d --name app --network my-network node-app

# Connect existing container to network
docker network connect my-network existing-container

# Disconnect from network
docker network disconnect my-network container-name
```

#### Container Communication

**Name Resolution:**
```bash
# Containers on same custom network can communicate by name
docker network create app-network

docker run -d --name database --network app-network postgres:13
docker run -d --name backend --network app-network \
  -e DATABASE_URL=postgresql://postgres:password@database:5432/myapp \
  my-backend-app

# Backend can connect to database using hostname "database"
```

**Port Publishing:**
```bash
# Publish ports to host
docker run -d -p 8080:80 --name web nginx

# Publish to specific interface
docker run -d -p 127.0.0.1:8080:80 nginx

# Publish multiple ports
docker run -d -p 8080:80 -p 8443:443 nginx

# Publish all exposed ports to random host ports
docker run -d -P nginx
```

#### Network Troubleshooting

**Inspect Network Configuration:**
```bash
# Container network settings
docker inspect container-name | grep -A 20 NetworkSettings

# Network details
docker network inspect bridge

# Container processes and ports
docker port container-name
```

**Network Testing:**
```bash
# Test connectivity between containers
docker exec -it container1 ping container2
docker exec -it container1 curl http://container2:8080

# Test external connectivity
docker exec -it container1 ping google.com
docker exec -it container1 curl http://httpbin.org/ip
```

### Day 5-7: Volume Management

#### Understanding Docker Volumes

**Storage Types:**
1. **Volumes**: Managed by Docker, stored in Docker area
2. **Bind Mounts**: Mount host directory into container
3. **tmpfs Mounts**: Stored in host memory (Linux only)

**Volume Benefits:**
- Persist data beyond container lifecycle
- Share data between containers
- Backup and restore capabilities
- Better performance than bind mounts

#### Working with Volumes

**Named Volumes:**
```bash
# Create volume
docker volume create my-data
docker volume create --driver local my-local-data

# List volumes
docker volume ls

# Inspect volume
docker volume inspect my-data

# Use volume in container
docker run -d -v my-data:/data ubuntu
docker run -d --mount source=my-data,target=/data ubuntu

# Remove volume
docker volume rm my-data
docker volume prune  # Remove unused volumes
```

**Anonymous Volumes:**
```bash
# Docker creates anonymous volume
docker run -d -v /data ubuntu

# List anonymous volumes
docker volume ls
# Shows volumes with random names
```

**Bind Mounts:**
```bash
# Mount host directory
docker run -d -v /host/path:/container/path ubuntu
docker run -d -v $(pwd):/app node:18 npm install

# Read-only bind mount
docker run -d -v /host/path:/container/path:ro ubuntu

# Mount with specific options
docker run -d --mount type=bind,source=/host/path,target=/container/path,readonly ubuntu
```

#### Volume Examples

**Database with Persistent Storage:**
```bash
# Create volume for database
docker volume create postgres-data

# Run PostgreSQL with persistent storage
docker run -d \
  --name postgres-db \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=myapp \
  -v postgres-data:/var/lib/postgresql/data \
  postgres:13

# Data persists even if container is removed
docker rm -f postgres-db
docker run -d \
  --name postgres-db-new \
  -e POSTGRES_PASSWORD=password \
  -v postgres-data:/var/lib/postgresql/data \
  postgres:13
# Data is still there!
```

**Development Environment:**
```bash
# Mount source code for development
docker run -d \
  --name dev-container \
  -v $(pwd):/usr/src/app \
  -v /usr/src/app/node_modules \
  -p 3000:3000 \
  node:18 \
  npm run dev

# Changes to source code are immediately reflected
```

**Shared Volume Between Containers:**
```bash
# Create shared volume
docker volume create shared-data

# Container 1 writes data
docker run -d --name writer -v shared-data:/data alpine \
  sh -c 'echo "Hello from writer" > /data/message.txt && sleep 3600'

# Container 2 reads data
docker run --rm -v shared-data:/data alpine cat /data/message.txt
# Output: Hello from writer
```

#### Volume Backup and Restore

**Backup Volume:**
```bash
# Create backup
docker run --rm \
  -v my-data:/data \
  -v $(pwd):/backup \
  alpine \
  tar czf /backup/backup.tar.gz -C /data .

# Alternative with specific container
docker run --rm \
  --volumes-from data-container \
  -v $(pwd):/backup \
  alpine \
  tar czf /backup/backup.tar.gz /data
```

**Restore Volume:**
```bash
# Create new volume
docker volume create restored-data

# Restore from backup
docker run --rm \
  -v restored-data:/data \
  -v $(pwd):/backup \
  alpine \
  tar xzf /backup/backup.tar.gz -C /data
```

#### tmpfs Mounts

**Temporary Storage in Memory:**
```bash
# Mount tmpfs (Linux only)
docker run -d --tmpfs /tmp ubuntu

# With size limit
docker run -d --tmpfs /tmp:size=100m ubuntu

# Using --mount syntax
docker run -d --mount type=tmpfs,destination=/tmp,tmpfs-size=100m ubuntu
```

---

## Week 6: Docker Compose & Orchestration

### Day 1-3: Docker Compose Basics

#### Understanding Docker Compose

**What is Docker Compose?**
- Tool for defining multi-container applications
- Uses YAML files to configure services
- Single command to start entire application stack

**Benefits:**
- Simplified multi-container management
- Environment consistency
- Easy scaling and networking
- Development workflow optimization

#### Docker Compose Installation

**Linux:**
```bash
# Download Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Make executable
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker-compose --version
```

**Alternative Installation:**
```bash
# Using pip
pip install docker-compose

# Using package manager
sudo apt install docker-compose  # Ubuntu
brew install docker-compose      # macOS
```

#### Basic docker-compose.yml

**Simple Web Application:**
```yaml
version: '3.8'

services:
  web:
    image: nginx:latest
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html:ro
    
  database:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

**Full-Stack Application:**
```yaml
version: '3.8'

services:
  # Frontend React App
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://localhost:5000
    volumes:
      - ./frontend:/usr/src/app
      - /usr/src/app/node_modules
    depends_on:
      - backend

  # Backend Node.js API
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=mongodb://mongodb:27017/myapp
      - REDIS_URL=redis://redis:6379
    volumes:
      - ./backend:/usr/src/app
      - /usr/src/app/node_modules
    depends_on:
      - mongodb
      - redis

  # MongoDB Database
  mongodb:
    image: mongo:5.0
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password
      - MONGO_INITDB_DATABASE=myapp
    volumes:
      - mongodb_data:/data/db
      - ./init-mongo.js:/docker-entrypoint-initdb.d/init-mongo.js:ro

  # Redis Cache
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    command: redis-server --appendonly yes

  # Nginx Reverse Proxy
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - frontend
      - backend

volumes:
  mongodb_data:
  redis_data:

networks:
  default:
    driver: bridge
```

#### Docker Compose Commands

**Basic Commands:**
```bash
# Start services
docker-compose up
docker-compose up -d              # Detached mode
docker-compose up --build         # Rebuild images

# Stop services
docker-compose down
docker-compose down -v            # Remove volumes
docker-compose down --rmi all     # Remove images

# View running services
docker-compose ps
docker-compose top                # Show processes

# View logs
docker-compose logs
docker-compose logs -f            # Follow logs
docker-compose logs backend       # Specific service logs
```

**Service Management:**
```bash
# Start specific service
docker-compose up backend

# Stop specific service
docker-compose stop backend

# Restart service
docker-compose restart backend

# Scale services
docker-compose up --scale backend=3

# Execute commands
docker-compose exec backend bash
docker-compose exec backend npm test

# Run one-off commands
docker-compose run backend npm install
docker-compose run --rm backend npm test
```

### Day 4-5: Environment Management

#### Environment Variables

**Using .env File:**
```bash
# .env file
NODE_ENV=development
DATABASE_URL=mongodb://mongodb:27017/myapp
REDIS_URL=redis://redis:6379
API_PORT=5000
FRONTEND_PORT=3000
```

**docker-compose.yml with Environment:**
```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "${API_PORT}:5000"
    environment:
      - NODE_ENV=${NODE_ENV}
      - DATABASE_URL=${DATABASE_URL}
      - REDIS_URL=${REDIS_URL}
    env_file:
      - .env
```

**Multiple Environment Files:**
```bash
# Development
docker-compose --env-file .env.dev up

# Production
docker-compose --env-file .env.prod up

# Override with multiple files
docker-compose --env-file .env --env-file .env.local up
```

#### Override Files

**docker-compose.override.yml (Development):**
```yaml
version: '3.8'

services:
  backend:
    volumes:
      - ./backend:/usr/src/app
      - /usr/src/app/node_modules
    command: npm run dev
    environment:
      - DEBUG=true

  frontend:
    volumes:
      - ./frontend:/usr/src/app
      - /usr/src/app/node_modules
    command: npm start
```

**docker-compose.prod.yml (Production):**
```yaml
version: '3.8'

services:
  backend:
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    command: npm start

  frontend:
    restart: unless-stopped
    command: npm run serve

  nginx:
    restart: unless-stopped
```

**Using Override Files:**
```bash
# Development (uses override.yml automatically)
docker-compose up

# Production
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

# Testing
docker-compose -f docker-compose.yml -f docker-compose.test.yml up
```

#### Configuration Management

**External Configuration:**
```yaml
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
    ports:
      - "80:80"

  app:
    build: .
    volumes:
      - ./config/app.json:/usr/src/app/config/app.json:ro
```

**Secrets Management:**
```yaml
version: '3.8'

services:
  database:
    image: postgres:13
    environment:
      - POSTGRES_PASSWORD_FILE=/run/secrets/db_password
    secrets:
      - db_password

secrets:
  db_password:
    file: ./secrets/db_password.txt
```

### Day 6-7: Container Orchestration Intro

#### Scaling Services

**Horizontal Scaling:**
```bash
# Scale specific service
docker-compose up --scale backend=3
docker-compose up --scale worker=5

# Scale multiple services
docker-compose up --scale backend=3 --scale worker=2
```

**Load Balancing with Nginx:**
```nginx
# nginx.conf
upstream backend {
    server backend_1:5000;
    server backend_2:5000;
    server backend_3:5000;
}

server {
    listen 80;
    
    location /api {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

#### Health Checks

**Service Health Checks:**
```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:5000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    depends_on:
      database:
        condition: service_healthy

  database:
    image: postgres:13
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
```

#### Monitoring and Logging

**Centralized Logging:**
```yaml
version: '3.8'

services:
  app:
    build: .
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"

  # ELK Stack for log aggregation
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.14.0
    environment:
      - discovery.type=single-node
    volumes:
      - elasticsearch_data:/usr/share/elasticsearch/data

  logstash:
    image: docker.elastic.co/logstash/logstash:7.14.0
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf

  kibana:
    image: docker.elastic.co/kibana/kibana:7.14.0
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch

volumes:
  elasticsearch_data:
```

#### Production Considerations

**Resource Limits:**
```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    deploy:
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
```

**Security Hardening:**
```yaml
version: '3.8'

services:
  app:
    build: .
    user: "1001:1001"
    read_only: true
    tmpfs:
      - /tmp
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
```

---

## 🎯 Week 4-6 Assessment Projects

### Week 4 Project: Containerize Web Application

**Requirements:**
1. Create Dockerfile for web application
2. Implement multi-stage build
3. Use proper base images and security practices
4. Include health checks
5. Document build and run process

### Week 5 Project: Multi-Container Application

**Requirements:**
1. Set up custom Docker networks
2. Implement persistent storage with volumes
3. Configure container communication
4. Add monitoring and logging
5. Implement backup/restore procedures

### Week 6 Project: Full-Stack Docker Compose

**Requirements:**
1. Create complete docker-compose.yml
2. Implement environment management
3. Add reverse proxy and load balancing
4. Configure health checks and scaling
5. Production-ready configuration

---

**Next: Module 3 - CI/CD Pipelines**