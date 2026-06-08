# 🚀 DevOps Complete Syllabus
*Duration: 16-20 weeks | Focus: Hands-on Implementation*

## Week 1-2: DevOps Fundamentals 🟢

### DevOps Culture & Principles
**Core Concepts (3 days)**
```
Traditional Development:
Dev Team → Code → QA Team → Ops Team → Production
Problems: Silos, slow delivery, blame culture

DevOps Approach:
Collaboration + Automation + Monitoring + Feedback
Result: Faster delivery, better quality, shared responsibility
```

**DevOps Lifecycle (2 days)**
```
Plan → Code → Build → Test → Release → Deploy → Operate → Monitor
    ↑                                                           ↓
    ←←←←←←←←←←←← Feedback Loop ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
```

**Key Principles (2 days)**
- **Continuous Integration**: Frequent code integration
- **Continuous Delivery**: Always ready to deploy
- **Infrastructure as Code**: Manage infrastructure through code
- **Monitoring & Logging**: Observability at all levels
- **Collaboration**: Breaking down silos
- **Automation**: Reduce manual processes

### DevOps Tools Ecosystem
**Tool Categories (5 days)**
```
Version Control: Git, GitHub, GitLab, Bitbucket
CI/CD: Jenkins, GitHub Actions, GitLab CI, Azure DevOps
Containerization: Docker, Podman
Orchestration: Kubernetes, Docker Swarm
Infrastructure: Terraform, CloudFormation, Ansible
Monitoring: Prometheus, Grafana, ELK Stack
Cloud: AWS, Azure, GCP
Communication: Slack, Teams, Jira
```

## Week 3-4: Linux & Shell Scripting 🟡

### Linux Administration
**Essential Commands (4 days)**
```bash
# File Operations
ls -la                          # List files with details
find /path -name "*.log"        # Find files by pattern
grep -r "error" /var/log/       # Search in files
chmod 755 script.sh             # Change permissions
chown user:group file.txt       # Change ownership

# Process Management
ps aux | grep nginx             # List processes
top                            # Real-time process monitor
kill -9 PID                    # Force kill process
nohup command &                # Run in background
jobs                           # List background jobs

# System Monitoring
df -h                          # Disk usage
free -m                        # Memory usage
netstat -tulpn                 # Network connections
iostat                         # I/O statistics
vmstat                         # Virtual memory stats

# Package Management (Ubuntu/CentOS)
apt update && apt upgrade       # Update packages (Ubuntu)
yum update                     # Update packages (CentOS)
systemctl status nginx         # Service status
systemctl enable nginx         # Enable service at boot
```

**Shell Scripting (3 days)**
```bash
#!/bin/bash
# Deployment script example

# Variables
APP_NAME="myapp"
VERSION="1.0.0"
DEPLOY_DIR="/opt/${APP_NAME}"

# Functions
deploy_app() {
    echo "Deploying ${APP_NAME} version ${VERSION}"
    
    # Backup current version
    if [ -d "${DEPLOY_DIR}" ]; then
        cp -r ${DEPLOY_DIR} ${DEPLOY_DIR}.backup.$(date +%Y%m%d_%H%M%S)
    fi
    
    # Deploy new version
    tar -xzf ${APP_NAME}-${VERSION}.tar.gz -C /opt/
    
    # Restart services
    systemctl restart ${APP_NAME}
    
    # Health check
    if curl -f http://localhost:8080/health; then
        echo "Deployment successful"
        rm -rf ${DEPLOY_DIR}.backup.*
    else
        echo "Deployment failed, rolling back"
        rollback_deployment
        exit 1
    fi
}

rollback_deployment() {
    BACKUP_DIR=$(ls -t ${DEPLOY_DIR}.backup.* | head -1)
    if [ -n "$BACKUP_DIR" ]; then
        rm -rf ${DEPLOY_DIR}
        mv ${BACKUP_DIR} ${DEPLOY_DIR}
        systemctl restart ${APP_NAME}
    fi
}

# Main execution
case "$1" in
    deploy)
        deploy_app
        ;;
    rollback)
        rollback_deployment
        ;;
    *)
        echo "Usage: $0 {deploy|rollback}"
        exit 1
        ;;
esac
```

## Week 5-6: Git & Version Control 🟡

### Git Fundamentals
**Core Commands (3 days)**
```bash
# Repository Setup
git init                        # Initialize repository
git clone https://github.com/user/repo.git
git remote add origin <url>     # Add remote repository

# Basic Workflow
git add .                       # Stage changes
git commit -m "Add feature X"   # Commit changes
git push origin main            # Push to remote
git pull origin main            # Pull from remote

# Branching
git branch feature/login        # Create branch
git checkout feature/login      # Switch branch
git checkout -b feature/signup  # Create and switch
git merge feature/login         # Merge branch
git branch -d feature/login     # Delete branch

# Advanced Operations
git stash                       # Temporarily save changes
git stash pop                   # Restore stashed changes
git cherry-pick <commit-hash>   # Apply specific commit
git rebase -i HEAD~3           # Interactive rebase
git reset --hard HEAD~1        # Reset to previous commit
```

**Git Workflows (2 days)**
```
GitFlow:
main (production) ← hotfix branches
  ↑
develop (integration) ← feature branches
  ↑
release branches

GitHub Flow:
main ← feature branches (via Pull Requests)

Feature Branch Workflow:
1. Create feature branch from main
2. Develop feature
3. Create Pull Request
4. Code review
5. Merge to main
6. Delete feature branch
```

**Advanced Git (2 days)**
```bash
# Conflict Resolution
git status                      # Check conflict status
# Edit conflicted files manually
git add <resolved-file>         # Mark as resolved
git commit                      # Complete merge

# Git Hooks
# pre-commit hook example
#!/bin/bash
# .git/hooks/pre-commit
npm test                        # Run tests before commit
if [ $? -ne 0 ]; then
    echo "Tests failed, commit aborted"
    exit 1
fi

# Submodules
git submodule add https://github.com/user/lib.git lib
git submodule update --init --recursive
```

## Week 7-8: Docker & Containerization 🟠

### Docker Fundamentals
**Container Concepts (2 days)**
```
Containers vs VMs:
┌─────────────────┐    ┌─────────────────┐
│   Application   │    │   Application   │
├─────────────────┤    ├─────────────────┤
│   Guest OS      │    │   Container     │
├─────────────────┤    │   Runtime       │
│   Hypervisor    │    ├─────────────────┤
├─────────────────┤    │   Docker Engine │
│   Host OS       │    ├─────────────────┤
└─────────────────┘    │   Host OS       │
     Virtual Machine    └─────────────────┘
                           Container

Benefits:
- Lightweight (no guest OS)
- Fast startup
- Consistent environments
- Resource efficient
```

**Docker Commands (3 days)**
```bash
# Image Management
docker pull nginx:latest        # Download image
docker images                   # List images
docker rmi nginx:latest         # Remove image
docker build -t myapp:1.0 .     # Build image from Dockerfile

# Container Management
docker run -d -p 80:80 nginx    # Run container in background
docker ps                       # List running containers
docker ps -a                    # List all containers
docker stop container_id        # Stop container
docker rm container_id          # Remove container
docker exec -it container_id bash # Execute command in container

# Volume Management
docker volume create myvolume   # Create volume
docker run -v myvolume:/data nginx # Mount volume
docker run -v $(pwd):/app nginx # Bind mount

# Network Management
docker network create mynetwork # Create network
docker run --network mynetwork nginx # Connect to network
```

**Dockerfile Best Practices (3 days)**
```dockerfile
# Multi-stage build example
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:16-alpine AS runtime
# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

WORKDIR /app
# Copy from builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --chown=nextjs:nodejs . .

# Use non-root user
USER nextjs

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

CMD ["npm", "start"]

# Best Practices:
# 1. Use specific base image tags
# 2. Multi-stage builds for smaller images
# 3. Run as non-root user
# 4. Use .dockerignore
# 5. Minimize layers
# 6. Add health checks
```

### Docker Compose
**Multi-Container Applications (2 days)**
```yaml
# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DB_HOST=db
    depends_on:
      - db
      - redis
    volumes:
      - ./logs:/app/logs
    networks:
      - app-network

  db:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - app-network

  redis:
    image: redis:6-alpine
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - web
    networks:
      - app-network

volumes:
  postgres_data:

networks:
  app-network:
    driver: bridge
```

```bash
# Docker Compose Commands
docker-compose up -d            # Start services in background
docker-compose down             # Stop and remove services
docker-compose logs web         # View service logs
docker-compose exec web bash    # Execute command in service
docker-compose scale web=3      # Scale service to 3 replicas
```

## Week 9-10: CI/CD with Jenkins 🟠

### Jenkins Setup & Configuration
**Installation & Setup (2 days)**
```bash
# Jenkins installation (Ubuntu)
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install jenkins

# Start Jenkins
sudo systemctl start jenkins
sudo systemctl enable jenkins

# Access Jenkins at http://localhost:8080
# Initial admin password
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

**Pipeline as Code (3 days)**
```groovy
// Jenkinsfile - Declarative Pipeline
pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'your-registry.com'
        IMAGE_NAME = 'myapp'
        KUBECONFIG = credentials('kubeconfig')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Test') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm test'
                    publishTestResults testResultsPattern: 'test-results.xml'
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    def image = docker.build("${IMAGE_NAME}:${BUILD_NUMBER}")
                    docker.withRegistry("https://${DOCKER_REGISTRY}", 'docker-registry-credentials') {
                        image.push()
                        image.push('latest')
                    }
                }
            }
        }
        
        stage('Security Scan') {
            steps {
                sh "docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy ${IMAGE_NAME}:${BUILD_NUMBER}"
            }
        }
        
        stage('Deploy to Staging') {
            steps {
                script {
                    sh """
                        helm upgrade --install myapp-staging ./helm-chart \
                        --set image.tag=${BUILD_NUMBER} \
                        --set environment=staging \
                        --namespace staging
                    """
                }
            }
        }
        
        stage('Integration Tests') {
            steps {
                sh 'npm run test:integration'
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
                script {
                    sh """
                        helm upgrade --install myapp-prod ./helm-chart \
                        --set image.tag=${BUILD_NUMBER} \
                        --set environment=production \
                        --namespace production
                    """
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            slackSend channel: '#deployments', 
                     color: 'good', 
                     message: "✅ Deployment successful: ${env.JOB_NAME} - ${env.BUILD_NUMBER}"
        }
        failure {
            slackSend channel: '#deployments', 
                     color: 'danger', 
                     message: "❌ Deployment failed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}"
        }
    }
}
```

**Jenkins Administration (2 days)**
```groovy
// Shared Library Example
// vars/deployApp.groovy
def call(Map config) {
    pipeline {
        agent any
        stages {
            stage('Deploy') {
                steps {
                    script {
                        sh """
                            kubectl set image deployment/${config.appName} \
                            ${config.appName}=${config.image}:${config.tag} \
                            --namespace=${config.namespace}
                        """
                    }
                }
            }
        }
    }
}

// Usage in Jenkinsfile
@Library('shared-library') _
deployApp([
    appName: 'myapp',
    image: 'myapp',
    tag: env.BUILD_NUMBER,
    namespace: 'production'
])
```

### Advanced CI/CD Patterns
**Blue-Green Deployment (1 day)**
```bash
# Blue-Green deployment script
#!/bin/bash
CURRENT_ENV=$(kubectl get service myapp -o jsonpath='{.spec.selector.version}')
NEW_ENV=$([ "$CURRENT_ENV" = "blue" ] && echo "green" || echo "blue")

echo "Current environment: $CURRENT_ENV"
echo "Deploying to: $NEW_ENV"

# Deploy to new environment
kubectl set image deployment/myapp-$NEW_ENV myapp=myapp:$BUILD_NUMBER
kubectl rollout status deployment/myapp-$NEW_ENV

# Health check
if curl -f http://myapp-$NEW_ENV.internal/health; then
    # Switch traffic
    kubectl patch service myapp -p '{"spec":{"selector":{"version":"'$NEW_ENV'"}}}'
    echo "Traffic switched to $NEW_ENV"
    
    # Scale down old environment
    kubectl scale deployment myapp-$CURRENT_ENV --replicas=0
else
    echo "Health check failed, keeping current environment"
    exit 1
fi
```

**Canary Deployment (1 day)**
```yaml
# Canary deployment with Istio
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: myapp
spec:
  http:
  - match:
    - headers:
        canary:
          exact: "true"
    route:
    - destination:
        host: myapp
        subset: canary
  - route:
    - destination:
        host: myapp
        subset: stable
      weight: 90
    - destination:
        host: myapp
        subset: canary
      weight: 10
```

## Week 11-12: Kubernetes & Container Orchestration 🔴

### Kubernetes Architecture
**Cluster Components (2 days)**
```
Master Node Components:
┌─────────────────────────────────────┐
│ kube-apiserver: REST API gateway    │
│ etcd: Distributed key-value store   │
│ kube-scheduler: Pod placement       │
│ kube-controller-manager: Controllers│
│ cloud-controller-manager: Cloud API │
└─────────────────────────────────────┘

Worker Node Components:
┌─────────────────────────────────────┐
│ kubelet: Node agent                 │
│ kube-proxy: Network proxy           │
│ Container Runtime: Docker/containerd│
└─────────────────────────────────────┘
```

**Core Resources (3 days)**
```yaml
# Pod - Smallest deployable unit
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
spec:
  containers:
  - name: myapp
    image: myapp:1.0
    ports:
    - containerPort: 8080
    env:
    - name: DB_HOST
      value: "postgres-service"
    resources:
      requests:
        memory: "256Mi"
        cpu: "250m"
      limits:
        memory: "512Mi"
        cpu: "500m"

---
# Deployment - Manages ReplicaSets
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:1.0
        ports:
        - containerPort: 8080

---
# Service - Network abstraction
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
  type: LoadBalancer

---
# ConfigMap - Configuration data
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
data:
  database.properties: |
    db.host=postgres-service
    db.port=5432
    db.name=myapp
  app.properties: |
    log.level=INFO
    cache.enabled=true

---
# Secret - Sensitive data
apiVersion: v1
kind: Secret
metadata:
  name: myapp-secret
type: Opaque
data:
  db-password: cGFzc3dvcmQ=  # base64 encoded
  api-key: YWJjZGVmZ2g=      # base64 encoded
```

**Advanced Resources (3 days)**
```yaml
# Ingress - HTTP routing
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  tls:
  - hosts:
    - myapp.example.com
    secretName: myapp-tls
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: myapp-service
            port:
              number: 80

---
# PersistentVolume - Storage
apiVersion: v1
kind: PersistentVolume
metadata:
  name: postgres-pv
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: fast-ssd
  hostPath:
    path: /data/postgres

---
# StatefulSet - Stateful applications
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: postgres
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:13
        env:
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgres-secret
              key: password
        volumeMounts:
        - name: postgres-storage
          mountPath: /var/lib/postgresql/data
  volumeClaimTemplates:
  - metadata:
      name: postgres-storage
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 10Gi
```

### Kubernetes Operations
**kubectl Commands (2 days)**
```bash
# Cluster Management
kubectl cluster-info                # Cluster information
kubectl get nodes                   # List nodes
kubectl describe node node-name     # Node details

# Resource Management
kubectl get pods -A                 # List all pods
kubectl get deployments -n namespace # List deployments
kubectl describe pod pod-name       # Pod details
kubectl logs pod-name -f            # Follow pod logs
kubectl exec -it pod-name -- bash   # Execute in pod

# Resource Creation/Updates
kubectl apply -f deployment.yaml    # Apply configuration
kubectl delete -f deployment.yaml   # Delete resources
kubectl scale deployment myapp --replicas=5 # Scale deployment
kubectl rollout status deployment/myapp # Check rollout status
kubectl rollout undo deployment/myapp # Rollback deployment

# Debugging
kubectl port-forward pod/myapp 8080:8080 # Port forwarding
kubectl cp file.txt pod-name:/tmp/   # Copy files
kubectl top nodes                   # Resource usage
kubectl get events --sort-by=.metadata.creationTimestamp
```

## Week 13-14: Infrastructure as Code 🔴

### Terraform Fundamentals
**Core Concepts (2 days)**
```hcl
# main.tf - AWS Infrastructure
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  
  backend "s3" {
    bucket = "terraform-state-bucket"
    key    = "infrastructure/terraform.tfstate"
    region = "us-west-2"
  }
}

provider "aws" {
  region = var.aws_region
}

# Variables
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-west-2"
}

variable "environment" {
  description = "Environment name"
  type        = string
  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be dev, staging, or prod."
  }
}

# VPC
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true
  
  tags = {
    Name        = "${var.environment}-vpc"
    Environment = var.environment
  }
}

# Subnets
resource "aws_subnet" "public" {
  count = 2
  
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.${count.index + 1}.0/24"
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  map_public_ip_on_launch = true
  
  tags = {
    Name = "${var.environment}-public-subnet-${count.index + 1}"
    Type = "public"
  }
}

resource "aws_subnet" "private" {
  count = 2
  
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.${count.index + 10}.0/24"
  availability_zone = data.aws_availability_zones.available.names[count.index]
  
  tags = {
    Name = "${var.environment}-private-subnet-${count.index + 1}"
    Type = "private"
  }
}

# Internet Gateway
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id
  
  tags = {
    Name = "${var.environment}-igw"
  }
}

# EKS Cluster
resource "aws_eks_cluster" "main" {
  name     = "${var.environment}-eks-cluster"
  role_arn = aws_iam_role.eks_cluster.arn
  version  = "1.27"
  
  vpc_config {
    subnet_ids              = concat(aws_subnet.public[*].id, aws_subnet.private[*].id)
    endpoint_private_access = true
    endpoint_public_access  = true
  }
  
  depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_policy,
  ]
}

# Outputs
output "vpc_id" {
  description = "VPC ID"
  value       = aws_vpc.main.id
}

output "eks_cluster_endpoint" {
  description = "EKS cluster endpoint"
  value       = aws_eks_cluster.main.endpoint
}
```

**Terraform Modules (2 days)**
```hcl
# modules/vpc/main.tf
variable "cidr_block" {
  description = "CIDR block for VPC"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
}

resource "aws_vpc" "this" {
  cidr_block           = var.cidr_block
  enable_dns_hostnames = true
  enable_dns_support   = true
  
  tags = {
    Name        = "${var.environment}-vpc"
    Environment = var.environment
  }
}

output "vpc_id" {
  value = aws_vpc.this.id
}

# Root module usage
module "vpc" {
  source = "./modules/vpc"
  
  cidr_block  = "10.0.0.0/16"
  environment = var.environment
}
```

**Terraform Best Practices (2 days)**
```bash
# Terraform workflow
terraform init                      # Initialize
terraform plan                      # Plan changes
terraform apply                     # Apply changes
terraform destroy                   # Destroy infrastructure

# State management
terraform state list                # List resources in state
terraform state show aws_vpc.main   # Show resource details
terraform import aws_vpc.main vpc-12345 # Import existing resource

# Workspace management
terraform workspace new staging     # Create workspace
terraform workspace select staging # Switch workspace
terraform workspace list           # List workspaces
```

### Ansible Configuration Management
**Ansible Basics (2 days)**
```yaml
# inventory.yml
all:
  children:
    webservers:
      hosts:
        web1:
          ansible_host: 192.168.1.10
        web2:
          ansible_host: 192.168.1.11
    databases:
      hosts:
        db1:
          ansible_host: 192.168.1.20
  vars:
    ansible_user: ubuntu
    ansible_ssh_private_key_file: ~/.ssh/id_rsa

# playbook.yml
---
- name: Configure web servers
  hosts: webservers
  become: yes
  vars:
    nginx_port: 80
    app_name: myapp
    
  tasks:
    - name: Update package cache
      apt:
        update_cache: yes
        
    - name: Install nginx
      apt:
        name: nginx
        state: present
        
    - name: Start and enable nginx
      systemd:
        name: nginx
        state: started
        enabled: yes
        
    - name: Copy nginx configuration
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/sites-available/{{ app_name }}
        backup: yes
      notify: restart nginx
      
    - name: Enable site
      file:
        src: /etc/nginx/sites-available/{{ app_name }}
        dest: /etc/nginx/sites-enabled/{{ app_name }}
        state: link
      notify: restart nginx
      
  handlers:
    - name: restart nginx
      systemd:
        name: nginx
        state: restarted
```

**Ansible Roles (2 days)**
```yaml
# roles/nginx/tasks/main.yml
---
- name: Install nginx
  package:
    name: nginx
    state: present
    
- name: Configure nginx
  template:
    src: nginx.conf.j2
    dest: /etc/nginx/nginx.conf
  notify: restart nginx
  
- name: Start nginx service
  service:
    name: nginx
    state: started
    enabled: yes

# roles/nginx/handlers/main.yml
---
- name: restart nginx
  service:
    name: nginx
    state: restarted

# site.yml - Using roles
---
- hosts: webservers
  become: yes
  roles:
    - nginx
    - { role: mysql, mysql_port: 3306 }
    - role: app
      vars:
        app_port: 8080
```

## Week 15-16: Monitoring & Observability 🔴

### Prometheus & Grafana
**Prometheus Setup (2 days)**
```yaml
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "alert_rules.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
      
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']
      
  - job_name: 'myapp'
    static_configs:
      - targets: ['myapp:8080']
    metrics_path: /metrics
    scrape_interval: 5s

  - job_name: 'kubernetes-pods'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
```

**PromQL Queries (2 days)**
```promql
# Basic queries
up                                    # Service availability
rate(http_requests_total[5m])         # Request rate per second
histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) # 95th percentile latency

# Resource monitoring
node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100  # Memory usage %
rate(node_cpu_seconds_total{mode!="idle"}[5m]) * 100              # CPU usage %
rate(node_disk_io_time_seconds_total[5m]) * 100                   # Disk I/O %

# Application metrics
sum(rate(http_requests_total[5m])) by (status_code)               # Requests by status
avg(http_request_duration_seconds) by (endpoint)                  # Average response time
increase(error_count_total[1h])                                   # Error count last hour
```

**Grafana Dashboards (2 days)**
```json
{
  "dashboard": {
    "title": "Application Monitoring",
    "panels": [
      {
        "title": "Request Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "sum(rate(http_requests_total[5m])) by (service)",
            "legendFormat": "{{service}}"
          }
        ]
      },
      {
        "title": "Error Rate",
        "type": "singlestat",
        "targets": [
          {
            "expr": "sum(rate(http_requests_total{status=~\"5..\"}[5m])) / sum(rate(http_requests_total[5m])) * 100"
          }
        ]
      }
    ]
  }
}
```

### ELK Stack (Elasticsearch, Logstash, Kibana)
**Logstash Configuration (2 days)**
```ruby
# logstash.conf
input {
  beats {
    port => 5044
  }
  
  file {
    path => "/var/log/nginx/access.log"
    start_position => "beginning"
    type => "nginx-access"
  }
}

filter {
  if [type] == "nginx-access" {
    grok {
      match => { 
        "message" => "%{NGINXACCESS}" 
      }
    }
    
    date {
      match => [ "timestamp", "dd/MMM/yyyy:HH:mm:ss Z" ]
    }
    
    mutate {
      convert => { "response_code" => "integer" }
      convert => { "bytes" => "integer" }
    }
  }
  
  if [fields][environment] {
    mutate {
      add_field => { "environment" => "%{[fields][environment]}" }
    }
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "logs-%{+YYYY.MM.dd}"
  }
  
  stdout {
    codec => rubydebug
  }
}
```

**Filebeat Configuration (1 day)**
```yaml
# filebeat.yml
filebeat.inputs:
- type: log
  enabled: true
  paths:
    - /var/log/myapp/*.log
  fields:
    environment: production
    service: myapp
  multiline.pattern: '^\d{4}-\d{2}-\d{2}'
  multiline.negate: true
  multiline.match: after

output.logstash:
  hosts: ["logstash:5044"]

processors:
  - add_host_metadata:
      when.not.contains.tags: forwarded
```

**Kibana Dashboards (1 day)**
```json
{
  "version": "7.10.0",
  "objects": [
    {
      "type": "dashboard",
      "attributes": {
        "title": "Application Logs Dashboard",
        "panelsJSON": "[{\"version\":\"7.10.0\",\"panelIndex\":\"1\",\"gridData\":{\"x\":0,\"y\":0,\"w\":24,\"h\":15},\"panelRefName\":\"panel_1\",\"embeddableConfig\":{}}]"
      }
    }
  ]
}
```

## Week 17-18: Cloud Platforms 🔴

### AWS DevOps Services
**AWS CodePipeline (2 days)**
```yaml
# buildspec.yml for CodeBuild
version: 0.2

phases:
  pre_build:
    commands:
      - echo Logging in to Amazon ECR...
      - aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com
      - REPOSITORY_URI=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO_NAME
      - COMMIT_HASH=$(echo $CODEBUILD_RESOLVED_SOURCE_VERSION | cut -c 1-7)
      - IMAGE_TAG=${COMMIT_HASH:=latest}
  build:
    commands:
      - echo Build started on `date`
      - echo Building the Docker image...
      - docker build -t $REPOSITORY_URI:latest .
      - docker tag $REPOSITORY_URI:latest $REPOSITORY_URI:$IMAGE_TAG
  post_build:
    commands:
      - echo Build completed on `date`
      - echo Pushing the Docker images...
      - docker push $REPOSITORY_URI:latest
      - docker push $REPOSITORY_URI:$IMAGE_TAG
      - echo Writing image definitions file...
      - printf '[{"name":"myapp","imageUri":"%s"}]' $REPOSITORY_URI:$IMAGE_TAG > imagedefinitions.json
artifacts:
  files:
    - imagedefinitions.json
```

**CloudFormation Templates (2 days)**
```yaml
# infrastructure.yml
AWSTemplateFormatVersion: '2010-09-09'
Description: 'ECS Fargate application infrastructure'

Parameters:
  Environment:
    Type: String
    Default: dev
    AllowedValues: [dev, staging, prod]

Resources:
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsHostnames: true
      EnableDnsSupport: true
      Tags:
        - Key: Name
          Value: !Sub ${Environment}-vpc

  ECSCluster:
    Type: AWS::ECS::Cluster
    Properties:
      ClusterName: !Sub ${Environment}-cluster
      CapacityProviders:
        - FARGATE
        - FARGATE_SPOT

  TaskDefinition:
    Type: AWS::ECS::TaskDefinition
    Properties:
      Family: !Sub ${Environment}-myapp
      NetworkMode: awsvpc
      RequiresCompatibilities:
        - FARGATE
      Cpu: 256
      Memory: 512
      ExecutionRoleArn: !Ref TaskExecutionRole
      ContainerDefinitions:
        - Name: myapp
          Image: !Sub ${AWS::AccountId}.dkr.ecr.${AWS::Region}.amazonaws.com/myapp:latest
          PortMappings:
            - ContainerPort: 8080
          LogConfiguration:
            LogDriver: awslogs
            Options:
              awslogs-group: !Ref LogGroup
              awslogs-region: !Ref AWS::Region
              awslogs-stream-prefix: ecs

Outputs:
  ClusterName:
    Description: ECS Cluster Name
    Value: !Ref ECSCluster
    Export:
      Name: !Sub ${Environment}-cluster-name
```

### Azure DevOps
**Azure Pipelines (2 days)**
```yaml
# azure-pipelines.yml
trigger:
  branches:
    include:
      - main
      - develop

variables:
  dockerRegistryServiceConnection: 'myacr-connection'
  imageRepository: 'myapp'
  containerRegistry: 'myacr.azurecr.io'
  dockerfilePath: '$(Build.SourcesDirectory)/Dockerfile'
  tag: '$(Build.BuildId)'

stages:
- stage: Build
  displayName: Build and push stage
  jobs:
  - job: Build
    displayName: Build
    pool:
      vmImage: ubuntu-latest
    steps:
    - task: Docker@2
      displayName: Build and push image
      inputs:
        command: buildAndPush
        repository: $(imageRepository)
        dockerfile: $(dockerfilePath)
        containerRegistry: $(dockerRegistryServiceConnection)
        tags: |
          $(tag)
          latest

- stage: Deploy
  displayName: Deploy stage
  dependsOn: Build
  condition: succeeded()
  jobs:
  - deployment: Deploy
    displayName: Deploy
    pool:
      vmImage: ubuntu-latest
    environment: 'production'
    strategy:
      runOnce:
        deploy:
          steps:
          - task: KubernetesManifest@0
            displayName: Deploy to Kubernetes cluster
            inputs:
              action: deploy
              manifests: |
                $(Pipeline.Workspace)/manifests/deployment.yml
                $(Pipeline.Workspace)/manifests/service.yml
              containers: |
                $(containerRegistry)/$(imageRepository):$(tag)
```

### Google Cloud Platform
**Cloud Build (2 days)**
```yaml
# cloudbuild.yaml
steps:
  # Build the container image
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/myapp:$COMMIT_SHA', '.']
  
  # Push the container image to Container Registry
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/myapp:$COMMIT_SHA']
  
  # Deploy to GKE
  - name: 'gcr.io/cloud-builders/gke-deploy'
    args:
    - run
    - --filename=k8s/
    - --image=gcr.io/$PROJECT_ID/myapp:$COMMIT_SHA
    - --location=us-central1-a
    - --cluster=production-cluster

options:
  logging: CLOUD_LOGGING_ONLY
```

## Week 19-20: Security & Best Practices 🔴

### DevSecOps Implementation
**Security Scanning (2 days)**
```yaml
# .github/workflows/security.yml
name: Security Scan
on: [push, pull_request]

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      # SAST - Static Application Security Testing
      - name: Run Semgrep
        uses: returntocorp/semgrep-action@v1
        with:
          config: >-
            p/security-audit
            p/secrets
            p/owasp-top-ten
      
      # Dependency Scanning
      - name: Run Snyk
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          args: --severity-threshold=high
      
      # Container Scanning
      - name: Build Docker image
        run: docker build -t myapp:latest .
        
      - name: Run Trivy scanner
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'myapp:latest'
          format: 'sarif'
          output: 'trivy-results.sarif'
      
      # Infrastructure Scanning
      - name: Run Checkov
        uses: bridgecrewio/checkov-action@master
        with:
          directory: .
          framework: terraform
```

**Secrets Management (2 days)**
```bash
# HashiCorp Vault setup
vault server -dev

# Store secrets
vault kv put secret/myapp/db password=supersecret username=admin

# Kubernetes integration
kubectl create secret generic vault-secret \
  --from-literal=vault-token=$VAULT_TOKEN

# Using External Secrets Operator
apiVersion: external-secrets.io/v1beta1
kind: SecretStore
metadata:
  name: vault-backend
spec:
  provider:
    vault:
      server: "https://vault.example.com"
      path: "secret"
      version: "v2"
      auth:
        kubernetes:
          mountPath: "kubernetes"
          role: "myapp"
```

**Security Policies (2 days)**
```yaml
# Pod Security Policy
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: restricted
spec:
  privileged: false
  allowPrivilegeEscalation: false
  requiredDropCapabilities:
    - ALL
  volumes:
    - 'configMap'
    - 'emptyDir'
    - 'projected'
    - 'secret'
    - 'downwardAPI'
    - 'persistentVolumeClaim'
  runAsUser:
    rule: 'MustRunAsNonRoot'
  seLinux:
    rule: 'RunAsAny'
  fsGroup:
    rule: 'RunAsAny'

# Network Policy
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
```

### Compliance & Governance
**Policy as Code (2 days)**
```rego
# OPA Gatekeeper policy
package kubernetes.admission

deny[msg] {
  input.request.kind.kind == "Pod"
  input.request.object.spec.containers[_].image
  not starts_with(input.request.object.spec.containers[_].image, "myregistry.com/")
  msg := "Container images must come from approved registry"
}

deny[msg] {
  input.request.kind.kind == "Pod"
  input.request.object.spec.containers[_].securityContext.privileged == true
  msg := "Privileged containers are not allowed"
}
```

## Interview Preparation & Real-World Projects

### Common DevOps Interview Questions
**Technical Questions**
1. Explain CI/CD pipeline components
2. Docker vs VM differences
3. Kubernetes architecture and components
4. Infrastructure as Code benefits
5. Monitoring and alerting strategies
6. Blue-green vs canary deployment
7. GitOps workflow explanation
8. Container security best practices
9. Microservices deployment challenges
10. Cloud-native application design

### Hands-on Projects
**Project 1: Complete CI/CD Pipeline (Week 17)**
- Multi-tier application (frontend, backend, database)
- Git-based workflow with feature branches
- Automated testing (unit, integration, security)
- Docker containerization
- Kubernetes deployment
- Monitoring and logging

**Project 2: Infrastructure Automation (Week 18)**
- Terraform infrastructure provisioning
- Ansible configuration management
- Multi-environment setup (dev, staging, prod)
- Disaster recovery implementation
- Cost optimization strategies

**Project 3: Microservices Platform (Week 19-20)**
- Service mesh implementation (Istio)
- API gateway configuration
- Distributed tracing and monitoring
- Security policies and compliance
- Performance optimization

## Resources & Certification Paths

### Books
- "The Phoenix Project" by Gene Kim
- "The DevOps Handbook" by Gene Kim
- "Site Reliability Engineering" by Google
- "Kubernetes in Action" by Marko Lukša

### Certifications
- **AWS**: Solutions Architect, DevOps Engineer
- **Azure**: DevOps Engineer Expert
- **Google Cloud**: Professional Cloud DevOps Engineer
- **Kubernetes**: CKA, CKAD, CKS
- **Docker**: Docker Certified Associate

### Practice Platforms
- **Katacoda**: Interactive scenarios
- **Play with Docker/Kubernetes**: Browser-based labs
- **AWS/Azure/GCP**: Free tier accounts
- **GitHub**: Actions and workflows

## Success Metrics
- **Practical Skills**: Deploy applications using CI/CD pipelines
- **Infrastructure**: Provision cloud resources with IaC
- **Monitoring**: Set up comprehensive observability
- **Security**: Implement DevSecOps practices
- **Troubleshooting**: Debug production issues
- **Interview Ready**: Explain DevOps concepts and demonstrate hands-on experience