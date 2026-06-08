# 🐳 Docker & Containerization - Complete Theory

## 📋 What is Containerization?

Containerization packages applications with dependencies into portable containers.

### Containers vs Virtual Machines
```
Virtual Machines: Host OS → Hypervisor → Guest OS → App
Containers: Host OS → Container Runtime → App
```

### Benefits
- **Portability**: Run anywhere consistently
- **Efficiency**: Lightweight and fast startup
- **Isolation**: Secure application separation
- **Scalability**: Easy horizontal scaling

## 🐳 Docker Architecture

### Core Components
- **Docker Engine**: Container runtime
- **Docker Images**: Read-only templates
- **Docker Containers**: Running instances
- **Docker Registry**: Image storage
- **Dockerfile**: Build instructions

### Docker Workflow
```
Dockerfile → Build → Image → Run → Container
```

## 📦 Docker Images & Containers

### Image Commands
```bash
docker images
docker pull nginx:latest
docker build -t myapp:v1.0 .
docker rmi myapp:v1.0
```

### Container Commands
```bash
docker run -d --name myapp -p 8080:80 nginx
docker ps
docker stop myapp
docker exec -it myapp bash
docker rm myapp
```

## 📝 Dockerfile Best Practices

### Multi-stage Build
```dockerfile
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```

### Security
```dockerfile
FROM node:18.17.0-alpine
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs
COPY package.json ./
```

## 🌐 Docker Networking & Volumes

### Networks
```bash
docker network create mynetwork
docker run --network mynetwork myapp
```

### Volumes
```bash
docker volume create mydata
docker run -v mydata:/data myapp
docker run -v /host/path:/container/path myapp
```

## 🔧 Docker Compose

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
  
  db:
    image: postgres:13
    environment:
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Compose Commands
```bash
docker-compose up -d
docker-compose down
docker-compose up --scale web=3
```