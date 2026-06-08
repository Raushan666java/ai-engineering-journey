# 🐳 STAGE 2A — Docker Production Mastery

> **Level:** Beginner → Advanced | **Duration:** 1–2 Weeks

---

## 📋 Topics
1. Docker Fundamentals
2. Dockerfile Deep Dive
3. Docker Compose
4. Multi-Stage Builds
5. Docker Networking
6. Volumes & Data Persistence
7. Production Docker Setup
8. Docker Security

---

## 1. Docker Fundamentals

### What Is Docker?
Docker packages your application + all dependencies into a portable container.

```
Without Docker: "It works on my machine" 😭
With Docker:    "It works on EVERY machine" ✅
```

### Core Concepts
```
Image       → Blueprint/recipe (like a class)
Container   → Running instance (like an object)
Dockerfile  → Instructions to build an image
Volume      → Persistent storage
Network     → Container communication
Registry    → Docker Hub (image store)
```

### Essential Commands
```bash
# Images
docker build -t myapp:1.0 .          # Build image
docker images                         # List images
docker pull nginx:alpine              # Download image
docker rmi myapp:1.0                  # Remove image

# Containers
docker run -d -p 8080:80 nginx       # Run container
docker ps                             # List running containers
docker ps -a                          # List all containers
docker stop <container_id>            # Stop container
docker rm <container_id>              # Remove container
docker logs <container_id>            # View logs
docker exec -it <id> /bin/sh          # Shell into container

# Cleanup
docker system prune -a                # Remove everything unused
docker volume prune                   # Remove unused volumes
```

---

## 2. Dockerfile Deep Dive

### Laravel Dockerfile (Production)
```dockerfile
# Stage 1: Build PHP dependencies
FROM composer:latest AS composer
WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-scripts

# Stage 2: Build frontend assets
FROM node:20-alpine AS frontend
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY resources/ resources/
COPY vite.config.js ./
RUN npm run build

# Stage 3: Production image
FROM php:8.3-fpm-alpine

# Install extensions
RUN apk add --no-cache \
    libpng-dev libjpeg-turbo-dev freetype-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql opcache redis

# PHP optimization
COPY docker/php.ini /usr/local/etc/php/conf.d/custom.ini

WORKDIR /var/www/html

# Copy application
COPY . .
COPY --from=composer /app/vendor vendor/
COPY --from=frontend /app/public/build public/build/

# Permissions
RUN chown -R www-data:www-data storage bootstrap/cache

# Cache config
RUN php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

EXPOSE 9000
CMD ["php-fpm"]
```

### Python AI Service Dockerfile
```dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install system deps
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
RUN playwright install --with-deps chromium

COPY . .

EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

---

## 3. Docker Compose

### Full SaaS Stack
```yaml
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./docker/nginx/default.conf:/etc/nginx/conf.d/default.conf
      - ./public:/var/www/html/public
    depends_on:
      - laravel
      - ai-service

  laravel:
    build:
      context: .
      dockerfile: docker/laravel/Dockerfile
    volumes:
      - .:/var/www/html
    depends_on:
      - mysql
      - redis
    environment:
      DB_HOST: mysql
      REDIS_HOST: redis
      AI_SERVICE_URL: http://ai-service:8000

  ai-service:
    build: ./ai-service
    environment:
      HF_API_KEY: ${HF_API_KEY}
      REDIS_HOST: redis

  queue-worker:
    build:
      context: .
      dockerfile: docker/laravel/Dockerfile
    command: php artisan queue:work --sleep=3 --tries=3
    depends_on:
      - mysql
      - redis

  scheduler:
    build:
      context: .
      dockerfile: docker/laravel/Dockerfile
    command: >
      sh -c "while true; do php artisan schedule:run; sleep 60; done"
    depends_on:
      - mysql
      - redis

  mysql:
    image: mysql:8.0
    volumes:
      - mysql_data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: ${DB_PASSWORD}
      MYSQL_DATABASE: ${DB_DATABASE}
    ports:
      - "3306:3306"

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  mysql_data:
  redis_data:
```

### Commands
```bash
docker compose up -d              # Start all services
docker compose down               # Stop all
docker compose logs -f laravel    # Follow logs
docker compose exec laravel sh    # Shell into container
docker compose build --no-cache   # Rebuild
```

---

## 4. Docker Networking

```
# Default bridge network — containers communicate by service name
laravel → mysql (not localhost!)
laravel → redis (not 127.0.0.1!)
laravel → ai-service:8000
```

### Custom Network
```yaml
networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge

services:
  nginx:
    networks: [frontend]
  laravel:
    networks: [frontend, backend]
  mysql:
    networks: [backend]  # Not accessible from nginx
```

---

## 5. Volumes (Data Persistence)

```yaml
volumes:
  # Named volume (managed by Docker)
  mysql_data:

  # Bind mount (sync with host)
  - ./src:/var/www/html

  # Read-only mount
  - ./config:/etc/app/config:ro
```

---

## 6. Production Best Practices

```
✅ Use multi-stage builds (smaller images)
✅ Use .dockerignore
✅ Don't run as root (USER directive)
✅ Use specific image tags (not :latest)
✅ Health checks
✅ Resource limits
❌ Don't store secrets in images
❌ Don't use bind mounts in production
```

### .dockerignore
```
node_modules
vendor
.git
.env
storage/logs/*
storage/framework/cache/*
```

### Health Checks
```yaml
services:
  laravel:
    healthcheck:
      test: ["CMD", "php", "artisan", "about"]
      interval: 30s
      timeout: 10s
      retries: 3
```

---

## 🎯 Practice Tasks
- [ ] Dockerize a Laravel application
- [ ] Create multi-stage Dockerfile
- [ ] Build Docker Compose with Laravel + MySQL + Redis
- [ ] Add Python AI service to compose
- [ ] Deploy with Docker on VPS

---

*Next: [CI/CD Pipelines →](./02_CICD_PIPELINES.md)*
