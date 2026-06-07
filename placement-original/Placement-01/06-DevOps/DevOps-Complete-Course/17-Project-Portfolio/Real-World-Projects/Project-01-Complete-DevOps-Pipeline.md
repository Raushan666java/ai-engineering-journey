# 🚀 Project 01: Complete DevOps Pipeline

## 🎯 Project Overview
Build an end-to-end DevOps pipeline for a full-stack web application with automated testing, deployment, and monitoring.

## 📋 Project Requirements

### Application Stack
- **Frontend**: React.js application
- **Backend**: Node.js REST API
- **Database**: PostgreSQL
- **Cache**: Redis
- **Reverse Proxy**: Nginx

### DevOps Tools
- **Version Control**: Git + GitHub
- **Containerization**: Docker + Docker Compose
- **Orchestration**: Kubernetes
- **CI/CD**: GitHub Actions
- **Infrastructure**: Terraform (AWS)
- **Monitoring**: Prometheus + Grafana
- **Logging**: ELK Stack

## 🏗️ Architecture
```
Internet → Load Balancer → Nginx → React App
                                 → Node.js API → PostgreSQL
                                              → Redis
```

## 🐳 Containerization

### Frontend Dockerfile
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Backend Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /usr/src/app

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

COPY package*.json ./
RUN npm ci --only=production

COPY --chown=nodejs:nodejs . .
USER nodejs

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["node", "server.js"]
```

## ☸️ Kubernetes Deployment

### Backend Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend
  namespace: myapp-production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
      - name: backend
        image: myregistry.com/backend:latest
        ports:
        - containerPort: 3000
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow
```yaml
name: Complete DevOps Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npm test
    - run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Build Docker image
      run: docker build -t myapp:${{ github.sha }} .
    - name: Push to registry
      run: docker push myapp:${{ github.sha }}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - name: Deploy to production
      run: kubectl set image deployment/myapp myapp=myapp:${{ github.sha }}
```

## 📊 Monitoring

### Prometheus Configuration
```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'backend'
    static_configs:
    - targets: ['backend-service:80']
    metrics_path: /metrics
```

## 🎯 Success Criteria
- [ ] Application containerized and running
- [ ] Kubernetes deployment successful
- [ ] CI/CD pipeline automated
- [ ] Security scanning integrated
- [ ] Monitoring and alerting active
- [ ] Infrastructure as code implemented