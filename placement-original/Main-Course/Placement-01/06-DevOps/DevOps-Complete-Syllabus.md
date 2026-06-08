# 🚀 DevOps Complete Syllabus - Full Details

## 📋 Course Overview
**Duration**: 12 Weeks (120+ Hours)  
**Level**: Beginner to Advanced  
**Prerequisites**: Basic programming, Linux fundamentals  
**Outcome**: Job-ready DevOps Engineer

---

## 📚 Module 1: Version Control & Git (Weeks 1-3)

### Week 1: Git Fundamentals

#### Day 1-2: Version Control Basics
```bash
# Git Installation & Setup
sudo apt update && sudo apt install git
git --version

# Global Configuration
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main
git config --list
```

#### Day 3-4: Repository Operations
```bash
# Initialize Repository
mkdir my-project && cd my-project
git init
echo "# My Project" > README.md
git add README.md
git commit -m "Initial commit"

# Check Status & History
git status
git log --oneline
git log --graph --all --decorate
```

#### Day 5-7: Basic Git Workflow
```bash
# Working Directory → Staging → Repository
echo "New feature" > feature.txt
git add feature.txt
git commit -m "Add new feature"

# Modify and track changes
echo "Updated content" >> feature.txt
git diff
git add .
git commit -m "Update feature"
```

**Week 1 Project**: Create personal portfolio repository with proper commit history

### Week 2: Branching & Collaboration

#### Day 1-2: Branching Strategies
```bash
# Create and switch branches
git branch feature/login
git checkout feature/login
# OR combined
git checkout -b feature/user-auth

# Work on feature
echo "Login functionality" > login.js
git add login.js
git commit -m "Add login functionality"

# Switch back and merge
git checkout main
git merge feature/login
git branch -d feature/login
```

#### Day 3-4: Remote Repositories
```bash
# Add remote origin
git remote add origin https://github.com/username/repo.git
git remote -v

# Push to remote
git push -u origin main
git push origin feature/new-feature

# Clone and pull
git clone https://github.com/username/repo.git
git pull origin main
```

#### Day 5-7: Conflict Resolution
```bash
# Create conflict scenario
git checkout -b feature/conflict
echo "Version A" > conflict.txt
git add . && git commit -m "Add version A"

git checkout main
echo "Version B" > conflict.txt
git add . && git commit -m "Add version B"

# Merge and resolve
git merge feature/conflict
# Edit conflict.txt to resolve
git add conflict.txt
git commit -m "Resolve merge conflict"
```

**Week 2 Project**: Collaborative project with team members using branching

### Week 3: Advanced Git Workflows

#### Day 1-2: Git Flow Implementation
```bash
# Install git-flow
sudo apt install git-flow

# Initialize git flow
git flow init

# Start feature
git flow feature start user-authentication
# Work on feature...
git flow feature finish user-authentication

# Start release
git flow release start v1.0.0
# Prepare release...
git flow release finish v1.0.0
```

#### Day 3-4: Advanced Operations
```bash
# Interactive rebase
git rebase -i HEAD~3

# Cherry-pick commits
git cherry-pick <commit-hash>

# Stash operations
git stash
git stash list
git stash pop
git stash drop

# Reset operations
git reset --soft HEAD~1   # Keep changes staged
git reset --mixed HEAD~1  # Keep changes unstaged
git reset --hard HEAD~1   # Discard changes
```

#### Day 5-7: Git Hooks & Automation
```bash
# Pre-commit hook
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
echo "Running pre-commit checks..."
npm test
if [ $? -ne 0 ]; then
    echo "Tests failed. Commit aborted."
    exit 1
fi
EOF
chmod +x .git/hooks/pre-commit
```

**Week 3 Project**: Implement complete Git workflow with hooks and automation

---

## 🐳 Module 2: Containerization with Docker (Weeks 4-6)

### Week 4: Docker Fundamentals

#### Day 1-2: Docker Installation & Basics
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Basic commands
docker --version
docker info
docker run hello-world
```

#### Day 3-4: Images & Containers
```bash
# Pull and run images
docker pull ubuntu:20.04
docker images
docker run -it ubuntu:20.04 bash

# Container operations
docker ps
docker ps -a
docker stop <container-id>
docker rm <container-id>
docker rmi <image-id>
```

#### Day 5-7: Creating Dockerfiles
```dockerfile
# Basic Node.js Dockerfile
FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
USER node
CMD ["node", "server.js"]
```

```bash
# Build and run
docker build -t my-app:v1.0 .
docker run -d -p 3000:3000 --name my-container my-app:v1.0
```

**Week 4 Project**: Containerize a web application

### Week 5: Docker Advanced Concepts

#### Day 1-2: Multi-stage Builds
```dockerfile
# Multi-stage Dockerfile
FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /usr/src/app/dist ./dist
USER node
CMD ["node", "dist/server.js"]
```

#### Day 3-4: Docker Networking
```bash
# Create custom network
docker network create my-network
docker network ls

# Run containers on network
docker run -d --name db --network my-network postgres:13
docker run -d --name app --network my-network -p 3000:3000 my-app
```

#### Day 5-7: Volume Management
```bash
# Named volumes
docker volume create my-data
docker run -v my-data:/data ubuntu

# Bind mounts
docker run -v $(pwd):/app -w /app node:18 npm install

# Volume inspection
docker volume inspect my-data
```

**Week 5 Project**: Multi-container application with networking and volumes

### Week 6: Docker Compose & Orchestration

#### Day 1-3: Docker Compose Basics
```yaml
# docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    depends_on:
      - db
  
  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

#### Day 4-5: Environment Management
```yaml
# docker-compose.override.yml (development)
version: '3.8'
services:
  web:
    volumes:
      - .:/usr/src/app
      - /usr/src/app/node_modules
    command: npm run dev

# docker-compose.prod.yml (production)
version: '3.8'
services:
  web:
    restart: unless-stopped
    environment:
      - NODE_ENV=production
```

#### Day 6-7: Container Orchestration Intro
```bash
# Docker Compose commands
docker-compose up -d
docker-compose down
docker-compose logs -f
docker-compose exec web bash
docker-compose scale web=3
```

**Week 6 Project**: Full-stack application with Docker Compose

---

## 🔄 Module 3: CI/CD Pipelines (Weeks 7-9)

### Week 7: CI/CD Fundamentals

#### Day 1-2: CI/CD Concepts
- Continuous Integration principles
- Continuous Deployment vs Delivery
- Pipeline stages: Build → Test → Deploy
- Automated testing strategies

#### Day 3-4: GitHub Actions Basics
```yaml
# .github/workflows/ci.yml
name: CI Pipeline
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm test
```

#### Day 5-7: Pipeline Design
```yaml
# Advanced pipeline
name: Full CI/CD Pipeline
on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Run tests
      run: |
        npm ci
        npm run lint
        npm test
        npm run test:integration

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Build Docker image
      run: |
        docker build -t my-app:${{ github.sha }} .
        docker tag my-app:${{ github.sha }} my-app:latest

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - name: Deploy to production
      run: echo "Deploying to production..."
```

**Week 7 Project**: Basic CI pipeline with automated testing

### Week 8: Advanced CI/CD Tools

#### Day 1-3: Jenkins Setup
```groovy
// Jenkinsfile
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh 'npm test'
                    }
                }
                stage('Integration Tests') {
                    steps {
                        sh 'npm run test:integration'
                    }
                }
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh 'docker build -t my-app .'
                sh 'docker run -d -p 3000:3000 my-app'
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}
```

#### Day 4-5: Pipeline Security
```yaml
# Security scanning in pipeline
- name: Security Audit
  run: npm audit

- name: SAST Scan
  uses: github/codeql-action/init@v2
  with:
    languages: javascript

- name: Container Security Scan
  run: |
    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
      aquasec/trivy image my-app:latest
```

#### Day 6-7: Artifact Management
```yaml
# Build and push to registry
- name: Login to DockerHub
  uses: docker/login-action@v2
  with:
    username: ${{ secrets.DOCKER_USERNAME }}
    password: ${{ secrets.DOCKER_PASSWORD }}

- name: Build and push
  uses: docker/build-push-action@v4
  with:
    push: true
    tags: |
      my-app:latest
      my-app:${{ github.sha }}
```

**Week 8 Project**: Complete CI/CD pipeline with security scanning

### Week 9: Deployment Strategies

#### Day 1-2: Blue-Green Deployment
```bash
# Blue-Green deployment script
#!/bin/bash
CURRENT=$(docker ps --format "table {{.Names}}" | grep app | head -1)
if [[ $CURRENT == *"blue"* ]]; then
    NEW_COLOR="green"
    OLD_COLOR="blue"
else
    NEW_COLOR="blue"
    OLD_COLOR="green"
fi

# Deploy new version
docker run -d --name app-$NEW_COLOR -p 8080:3000 my-app:latest

# Health check
sleep 10
if curl -f http://localhost:8080/health; then
    # Switch traffic
    docker stop nginx
    # Update nginx config to point to new color
    docker start nginx
    # Stop old version
    docker stop app-$OLD_COLOR
    docker rm app-$OLD_COLOR
else
    echo "Health check failed, rolling back"
    docker stop app-$NEW_COLOR
    docker rm app-$NEW_COLOR
fi
```

#### Day 3-4: Canary Releases
```yaml
# Kubernetes canary deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-canary
spec:
  replicas: 1
  selector:
    matchLabels:
      app: myapp
      version: canary
  template:
    metadata:
      labels:
        app: myapp
        version: canary
    spec:
      containers:
      - name: app
        image: my-app:v2.0
        ports:
        - containerPort: 3000
```

#### Day 5-7: Monitoring & Rollback
```yaml
# Automated rollback on failure
- name: Deploy
  run: kubectl apply -f k8s/
  
- name: Wait for rollout
  run: kubectl rollout status deployment/my-app

- name: Health check
  run: |
    sleep 30
    if ! curl -f http://my-app.example.com/health; then
      echo "Health check failed, rolling back"
      kubectl rollout undo deployment/my-app
      exit 1
    fi
```

**Week 9 Project**: Production deployment with rollback strategy

---

## ☁️ Module 4: Cloud Platforms & Infrastructure (Weeks 10-12)

### Week 10: AWS Fundamentals

#### Day 1-2: AWS Core Services
```bash
# AWS CLI setup
aws configure
aws sts get-caller-identity

# EC2 operations
aws ec2 describe-instances
aws ec2 run-instances \
    --image-id ami-0abcdef1234567890 \
    --instance-type t2.micro \
    --key-name my-key \
    --security-group-ids sg-12345678

# S3 operations
aws s3 mb s3://my-unique-bucket-name
aws s3 cp file.txt s3://my-unique-bucket-name/
aws s3 sync ./dist s3://my-unique-bucket-name/
```

#### Day 3-4: VPC & Networking
```bash
# Create VPC
aws ec2 create-vpc --cidr-block 10.0.0.0/16

# Create subnet
aws ec2 create-subnet \
    --vpc-id vpc-12345678 \
    --cidr-block 10.0.1.0/24

# Create internet gateway
aws ec2 create-internet-gateway
aws ec2 attach-internet-gateway \
    --internet-gateway-id igw-12345678 \
    --vpc-id vpc-12345678
```

#### Day 5-7: Application Deployment
```bash
# Deploy to ECS
aws ecs create-cluster --cluster-name my-cluster

# Create task definition
aws ecs register-task-definition \
    --cli-input-json file://task-definition.json

# Create service
aws ecs create-service \
    --cluster my-cluster \
    --service-name my-service \
    --task-definition my-app:1 \
    --desired-count 2
```

**Week 10 Project**: Deploy multi-tier application on AWS

### Week 11: Infrastructure as Code

#### Day 1-3: Terraform Basics
```hcl
# main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  
  tags = {
    Name = "${var.environment}-vpc"
  }
}

resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
  
  tags = {
    Name = "${var.environment}-public-subnet"
  }
}
```

#### Day 4-5: Advanced Terraform
```hcl
# modules/ec2/main.tf
resource "aws_instance" "web" {
  count                  = var.instance_count
  ami                    = var.ami_id
  instance_type          = var.instance_type
  subnet_id              = var.subnet_id
  vpc_security_group_ids = [var.security_group_id]
  
  user_data = templatefile("${path.module}/user_data.sh", {
    app_name = var.app_name
  })
  
  tags = {
    Name = "${var.app_name}-${count.index + 1}"
  }
}

# Auto Scaling Group
resource "aws_autoscaling_group" "web" {
  name                = "${var.app_name}-asg"
  vpc_zone_identifier = var.subnet_ids
  target_group_arns   = [aws_lb_target_group.web.arn]
  
  min_size         = var.min_size
  max_size         = var.max_size
  desired_capacity = var.desired_capacity
  
  launch_template {
    id      = aws_launch_template.web.id
    version = "$Latest"
  }
}
```

#### Day 6-7: State Management
```bash
# Remote state backend
terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-west-2"
  }
}

# Terraform commands
terraform init
terraform plan
terraform apply
terraform destroy

# Workspace management
terraform workspace new production
terraform workspace select production
```

**Week 11 Project**: Complete infrastructure automation with Terraform

### Week 12: Monitoring & Maintenance

#### Day 1-2: Application Monitoring
```yaml
# Prometheus configuration
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'my-app'
    static_configs:
      - targets: ['localhost:3000']
    metrics_path: /metrics
    scrape_interval: 5s

# Docker compose for monitoring stack
version: '3.8'
services:
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
  
  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
```

#### Day 3-4: Log Management
```yaml
# ELK Stack setup
version: '3.8'
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.14.0
    environment:
      - discovery.type=single-node
    ports:
      - "9200:9200"
  
  logstash:
    image: docker.elastic.co/logstash/logstash:7.14.0
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    ports:
      - "5044:5044"
  
  kibana:
    image: docker.elastic.co/kibana/kibana:7.14.0
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch
```

#### Day 5-7: Disaster Recovery
```bash
# Automated backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups"

# Database backup
pg_dump myapp > $BACKUP_DIR/db_backup_$DATE.sql

# Application files backup
tar -czf $BACKUP_DIR/app_backup_$DATE.tar.gz /var/www/myapp

# Upload to S3
aws s3 cp $BACKUP_DIR/ s3://my-backup-bucket/ --recursive

# Cleanup old backups (keep last 7 days)
find $BACKUP_DIR -name "*.sql" -mtime +7 -delete
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete
```

**Week 12 Project**: Complete monitoring and disaster recovery solution

---

## 🎯 Assessment & Projects

### Weekly Assessments (60%)
1. **Week 1**: Git repository with proper history
2. **Week 2**: Collaborative Git workflow
3. **Week 3**: Advanced Git operations
4. **Week 4**: Containerized application
5. **Week 5**: Multi-container setup
6. **Week 6**: Docker Compose application
7. **Week 7**: Basic CI pipeline
8. **Week 8**: Advanced CI/CD with security
9. **Week 9**: Deployment strategies
10. **Week 10**: AWS deployment
11. **Week 11**: Infrastructure as Code
12. **Week 12**: Monitoring solution

### Major Projects (40%)
1. **Mid-term (Week 6)**: Full-stack containerized application
2. **Final (Week 12)**: Complete DevOps pipeline with monitoring

---

## 🛠️ Tools & Setup

### Required Software
```bash
# Development tools
sudo apt update
sudo apt install -y git curl wget vim

# Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Terraform
wget https://releases.hashicorp.com/terraform/1.5.0/terraform_1.5.0_linux_amd64.zip
unzip terraform_1.5.0_linux_amd64.zip
sudo mv terraform /usr/local/bin/

# kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

### VS Code Extensions
- GitLens
- Docker
- Kubernetes
- Terraform
- AWS Toolkit
- YAML

---

## 📊 Progress Tracking

### Daily Checklist Template
```markdown
# DevOps Day [X] Progress

## Today's Goals
- [ ] Complete theory reading
- [ ] Finish hands-on exercises
- [ ] Practice commands/tools
- [ ] Document learnings

## Skills Practiced
- [ ] Git operations
- [ ] Docker commands
- [ ] Pipeline configuration
- [ ] Cloud deployment

## Time Spent
- Theory: ___ minutes
- Hands-on: ___ minutes
- Projects: ___ minutes

## Challenges & Solutions
- Challenge: ___
- Solution: ___

## Tomorrow's Plan
- [ ] ___
- [ ] ___
```

---

## 🏆 Career Preparation

### Resume Skills Section
```
Technical Skills:
• Version Control: Git, GitHub, GitLab
• Containerization: Docker, Docker Compose, Kubernetes
• CI/CD: GitHub Actions, Jenkins, GitLab CI
• Cloud Platforms: AWS (EC2, S3, RDS, VPC, ECS)
• Infrastructure as Code: Terraform, CloudFormation
• Monitoring: Prometheus, Grafana, ELK Stack
• Scripting: Bash, Python
• Operating Systems: Linux (Ubuntu, CentOS)
```

### Interview Preparation
- System design questions
- Troubleshooting scenarios
- Best practices discussions
- Hands-on technical tests

---

**🎯 Success Guarantee**: Complete this syllabus with 80%+ scores to be job-ready for DevOps Engineer positions!**