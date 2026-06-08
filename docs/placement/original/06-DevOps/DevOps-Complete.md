# ⚙️ DevOps - Complete Infrastructure & Automation Guide

## 📋 12-Week DevOps Mastery Plan

### Week 1-3: Version Control & Git Mastery

#### 📖 Git Fundamentals

##### Core Concepts
1. **Version Control Basics**
   - What is version control and why it matters
   - Centralized vs distributed version control
   - Git architecture and workflow
   - Repository initialization and cloning

2. **Basic Git Operations**
   - Adding and committing changes
   - Branching and merging strategies
   - Remote repositories and collaboration
   - Conflict resolution

##### 💡 Git Command Examples

```bash
# Basic Git Workflow
# Initialize a new repository
git init my-project
cd my-project

# Configure Git (first time setup)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main

# Create initial files
echo "# My Project" > README.md
echo "node_modules/" > .gitignore
echo "*.log" >> .gitignore

# Stage and commit changes
git add .
git status
git commit -m "Initial commit: Add README and .gitignore"

# Check commit history
git log --oneline
git log --graph --all --decorate

# Working with branches
git branch feature/user-authentication
git checkout feature/user-authentication
# or combine both commands:
git checkout -b feature/user-authentication

# Make changes and commit
echo "function login() { return true; }" > auth.js
git add auth.js
git commit -m "Add user authentication module"

# Switch back to main and merge
git checkout main
git merge feature/user-authentication

# Delete merged branch
git branch -d feature/user-authentication

# Working with remote repositories
git remote add origin https://github.com/username/my-project.git
git push -u origin main

# Fetch and pull changes
git fetch origin
git pull origin main

# Advanced Git Operations
# Interactive rebase to clean up commits
git rebase -i HEAD~3

# Cherry-pick specific commits
git cherry-pick <commit-hash>

# Stash changes temporarily
git stash
git stash list
git stash pop

# View differences
git diff
git diff --staged
git diff HEAD~1

# Reset operations
git reset --soft HEAD~1  # Keep changes staged
git reset --mixed HEAD~1 # Keep changes unstaged (default)
git reset --hard HEAD~1  # Discard changes completely

# Working with tags
git tag v1.0.0
git tag -a v1.0.0 -m "Version 1.0.0 release"
git push origin v1.0.0

# Advanced branching strategies
# Git Flow workflow
git flow init
git flow feature start new-feature
git flow feature finish new-feature

# GitHub Flow (simpler)
git checkout -b feature/new-feature
# make changes and commits
git push origin feature/new-feature
# create pull request on GitHub
```

##### 🔬 Git Workflow Examples

```bash
# Feature Branch Workflow Script
#!/bin/bash

# Function to create and work on a feature branch
create_feature() {
    local feature_name=$1
    echo "Creating feature branch: $feature_name"
    
    # Ensure we're on main and up to date
    git checkout main
    git pull origin main
    
    # Create and switch to feature branch
    git checkout -b "feature/$feature_name"
    
    echo "Ready to work on feature: $feature_name"
    echo "When done, run: finish_feature $feature_name"
}

# Function to finish a feature
finish_feature() {
    local feature_name=$1
    local current_branch=$(git branch --show-current)
    
    echo "Finishing feature: $feature_name"
    
    # Make sure we're on the right branch
    if [[ "$current_branch" != "feature/$feature_name" ]]; then
        echo "Error: Not on feature branch"
        return 1
    fi
    
    # Push feature branch
    git push origin "feature/$feature_name"
    
    # Switch to main and merge
    git checkout main
    git pull origin main
    git merge "feature/$feature_name"
    
    # Push merged changes
    git push origin main
    
    # Delete feature branch
    git branch -d "feature/$feature_name"
    git push origin --delete "feature/$feature_name"
    
    echo "Feature $feature_name completed and merged!"
}

# Collaborative workflow example
collaborative_workflow() {
    echo "=== Collaborative Git Workflow ==="
    
    # 1. Clone repository
    git clone https://github.com/team/project.git
    cd project
    
    # 2. Create feature branch
    git checkout -b feature/my-contribution
    
    # 3. Make changes
    echo "My changes" > new-file.txt
    git add new-file.txt
    git commit -m "Add my contribution"
    
    # 4. Keep up to date with main
    git checkout main
    git pull origin main
    git checkout feature/my-contribution
    git rebase main  # or git merge main
    
    # 5. Push and create pull request
    git push origin feature/my-contribution
    echo "Create pull request on GitHub/GitLab"
    
    # 6. After PR is approved and merged
    git checkout main
    git pull origin main
    git branch -d feature/my-contribution
}

# Git hooks example
setup_git_hooks() {
    echo "Setting up Git hooks..."
    
    # Pre-commit hook to run tests
    cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
echo "Running pre-commit checks..."

# Run tests
npm test
if [ $? -ne 0 ]; then
    echo "Tests failed. Commit aborted."
    exit 1
fi

# Run linting
npm run lint
if [ $? -ne 0 ]; then
    echo "Linting failed. Commit aborted."
    exit 1
fi

echo "Pre-commit checks passed!"
EOF
    
    chmod +x .git/hooks/pre-commit
    echo "Pre-commit hook installed!"
}

# Usage examples
echo "Git workflow functions loaded!"
echo "Usage:"
echo "  create_feature 'user-login'"
echo "  finish_feature 'user-login'"
echo "  collaborative_workflow"
echo "  setup_git_hooks"
```

### Week 4-6: Containerization with Docker

#### 📖 Docker Fundamentals

##### Core Concepts
1. **Container Technology**
   - What are containers and why use them
   - Containers vs Virtual Machines
   - Docker architecture
   - Images, containers, and registries

2. **Docker Operations**
   - Building and running containers
   - Docker networking and volumes
   - Multi-container applications
   - Docker Compose

##### 💡 Docker Examples

```dockerfile
# Basic Dockerfile for Node.js application
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
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Change ownership of the app directory
RUN chown -R nodejs:nodejs /usr/src/app
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start the application
CMD ["node", "server.js"]
```

```dockerfile
# Multi-stage Dockerfile for optimized builds
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

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy built application from builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

RUN chown -R nodejs:nodejs /usr/src/app
USER nodejs

EXPOSE 3000

CMD ["node", "dist/server.js"]
```

```yaml
# Docker Compose for full-stack application
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

  # PostgreSQL (alternative database)
  postgres:
    image: postgres:14
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql

volumes:
  mongodb_data:
  redis_data:
  postgres_data:

networks:
  default:
    driver: bridge
```

```bash
# Docker Command Examples

# Basic Docker commands
docker --version
docker info

# Working with images
docker images
docker pull ubuntu:20.04
docker build -t my-app:v1.0 .
docker tag my-app:v1.0 my-registry.com/my-app:v1.0
docker push my-registry.com/my-app:v1.0

# Working with containers
docker ps  # Running containers
docker ps -a  # All containers
docker run -d --name my-container -p 8080:80 nginx
docker exec -it my-container bash
docker logs my-container
docker stop my-container
docker rm my-container

# Docker volumes
docker volume create my-volume
docker volume ls
docker run -v my-volume:/data ubuntu
docker volume inspect my-volume

# Docker networks
docker network create my-network
docker network ls
docker run --network=my-network my-app

# Docker Compose commands
docker-compose up -d
docker-compose down
docker-compose logs
docker-compose exec backend bash
docker-compose scale backend=3

# Docker system commands
docker system df  # Disk usage
docker system prune  # Clean up
docker system prune -a  # Clean everything

# Advanced Docker operations
# Build with build args
docker build --build-arg NODE_ENV=production -t my-app .

# Run with environment variables
docker run -e NODE_ENV=production -e PORT=3000 my-app

# Multi-platform builds
docker buildx create --use
docker buildx build --platform linux/amd64,linux/arm64 -t my-app .

# Docker security scanning
docker scan my-app:latest

# Container resource limits
docker run --memory=512m --cpus=1.0 my-app
```

### Week 7-9: CI/CD Pipelines

#### 📖 Continuous Integration/Continuous Deployment

##### Core Concepts
1. **CI/CD Fundamentals**
   - Continuous Integration principles
   - Continuous Deployment vs Delivery
   - Pipeline design and best practices
   - Testing strategies

2. **Popular CI/CD Tools**
   - GitHub Actions
   - Jenkins
   - GitLab CI/CD
   - CircleCI

##### 💡 CI/CD Pipeline Examples

```yaml
# GitHub Actions workflow
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  NODE_VERSION: '18'
  DOCKER_REGISTRY: 'ghcr.io'

jobs:
  # Test job
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:14
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ env.NODE_VERSION }}
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run linting
      run: npm run lint

    - name: Run unit tests
      run: npm test

    - name: Run integration tests
      run: npm run test:integration
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test

    - name: Upload coverage reports
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info

  # Security scanning job
  security:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Run security audit
      run: npm audit

    - name: Run SAST scan
      uses: github/codeql-action/init@v2
      with:
        languages: javascript

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v2

  # Build and push Docker image
  build:
    needs: [test, security]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    outputs:
      image-tag: ${{ steps.meta.outputs.tags }}
      image-digest: ${{ steps.build.outputs.digest }}

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v2

    - name: Login to Container Registry
      uses: docker/login-action@v2
      with:
        registry: ${{ env.DOCKER_REGISTRY }}
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}

    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v4
      with:
        images: ${{ env.DOCKER_REGISTRY }}/${{ github.repository }}
        tags: |
          type=ref,event=branch
          type=ref,event=pr
          type=sha,prefix={{branch}}-
          type=raw,value=latest,enable={{is_default_branch}}

    - name: Build and push Docker image
      id: build
      uses: docker/build-push-action@v4
      with:
        context: .
        push: true
        tags: ${{ steps.meta.outputs.tags }}
        labels: ${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

  # Deploy to staging
  deploy-staging:
    needs: [build]
    runs-on: ubuntu-latest
    environment: staging
    if: github.ref == 'refs/heads/develop'

    steps:
    - name: Deploy to staging
      run: |
        echo "Deploying ${{ needs.build.outputs.image-tag }} to staging"
        # Add your deployment script here

  # Deploy to production
  deploy-production:
    needs: [build]
    runs-on: ubuntu-latest
    environment: production
    if: github.ref == 'refs/heads/main'

    steps:
    - name: Deploy to production
      run: |
        echo "Deploying ${{ needs.build.outputs.image-tag }} to production"
        # Add your deployment script here

    - name: Notify deployment
      uses: 8398a7/action-slack@v3
      with:
        status: success
        text: "🚀 Successfully deployed to production!"
      env:
        SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

```groovy
// Jenkins Pipeline (Jenkinsfile)
pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'your-registry.com'
        DOCKER_REPO = 'myapp'
        NODE_VERSION = '18'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Setup') {
            steps {
                script {
                    // Install Node.js
                    sh "nvm use ${NODE_VERSION}"
                    sh 'npm ci'
                }
            }
        }
        
        stage('Quality Gates') {
            parallel {
                stage('Lint') {
                    steps {
                        sh 'npm run lint'
                    }
                }
                
                stage('Unit Tests') {
                    steps {
                        sh 'npm test'
                        publishTestResults testResultsPattern: 'test-results.xml'
                    }
                }
                
                stage('Security Scan') {
                    steps {
                        sh 'npm audit'
                        sh 'docker run --rm -v $(pwd):/app clair-scanner'
                    }
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    def image = docker.build("${DOCKER_REGISTRY}/${DOCKER_REPO}:${BUILD_NUMBER}")
                    docker.withRegistry("https://${DOCKER_REGISTRY}", 'docker-registry-credentials') {
                        image.push()
                        image.push('latest')
                    }
                }
            }
        }
        
        stage('Deploy to Staging') {
            when {
                branch 'develop'
            }
            steps {
                script {
                    deployToEnvironment('staging')
                }
            }
        }
        
        stage('Integration Tests') {
            when {
                branch 'develop'
            }
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
                    deployToEnvironment('production')
                }
            }
        }
    }
    
    post {
        always {
            cleanup()
        }
        success {
            slackSend channel: '#deployments',
                     color: 'good',
                     message: "✅ Pipeline succeeded for ${env.JOB_NAME} - ${env.BUILD_NUMBER}"
        }
        failure {
            slackSend channel: '#deployments',
                     color: 'danger',
                     message: "❌ Pipeline failed for ${env.JOB_NAME} - ${env.BUILD_NUMBER}"
        }
    }
}

def deployToEnvironment(environment) {
    sh """
        helm upgrade --install myapp-${environment} ./helm-chart \\
            --namespace ${environment} \\
            --set image.tag=${BUILD_NUMBER} \\
            --set environment=${environment}
    """
}
```

### Week 10-12: Cloud Platforms & Infrastructure

#### 📖 AWS Fundamentals

##### Core Services
1. **Compute Services**
   - EC2 (Elastic Compute Cloud)
   - Lambda (Serverless functions)
   - ECS/EKS (Container services)
   - Auto Scaling Groups

2. **Storage and Database**
   - S3 (Simple Storage Service)
   - RDS (Relational Database Service)
   - DynamoDB (NoSQL database)
   - CloudFront (CDN)

##### 💡 AWS Examples

```bash
# AWS CLI Examples

# Configure AWS CLI
aws configure
# Enter Access Key ID, Secret Access Key, Region, Output format

# EC2 Operations
aws ec2 describe-instances
aws ec2 run-instances --image-id ami-0abcdef1234567890 --instance-type t2.micro --key-name my-key
aws ec2 stop-instances --instance-ids i-1234567890abcdef0
aws ec2 terminate-instances --instance-ids i-1234567890abcdef0

# S3 Operations
aws s3 mb s3://my-bucket-name
aws s3 cp file.txt s3://my-bucket-name/
aws s3 sync ./local-folder s3://my-bucket-name/remote-folder
aws s3 ls s3://my-bucket-name/

# Lambda Functions
aws lambda create-function \
    --function-name my-function \
    --runtime nodejs18.x \
    --role arn:aws:iam::account-id:role/lambda-role \
    --handler index.handler \
    --zip-file fileb://function.zip

aws lambda invoke \
    --function-name my-function \
    --payload '{"key": "value"}' \
    response.json

# RDS Operations
aws rds create-db-instance \
    --db-instance-identifier mydb \
    --db-instance-class db.t3.micro \
    --engine mysql \
    --master-username admin \
    --master-user-password mypassword \
    --allocated-storage 20

# CloudFormation
aws cloudformation create-stack \
    --stack-name my-stack \
    --template-body file://template.yaml \
    --parameters ParameterKey=Environment,ParameterValue=production
```

```yaml
# CloudFormation Template
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Web application infrastructure'

Parameters:
  Environment:
    Type: String
    Default: staging
    AllowedValues: [staging, production]
  
  InstanceType:
    Type: String
    Default: t3.micro
    AllowedValues: [t3.micro, t3.small, t3.medium]

Resources:
  # VPC
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsHostnames: true
      EnableDnsSupport: true
      Tags:
        - Key: Name
          Value: !Sub ${Environment}-vpc

  # Internet Gateway
  InternetGateway:
    Type: AWS::EC2::InternetGateway
    Properties:
      Tags:
        - Key: Name
          Value: !Sub ${Environment}-igw

  # Attach Gateway to VPC
  AttachGateway:
    Type: AWS::EC2::VPCGatewayAttachment
    Properties:
      VpcId: !Ref VPC
      InternetGatewayId: !Ref InternetGateway

  # Public Subnet
  PublicSubnet:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref VPC
      CidrBlock: 10.0.1.0/24
      AvailabilityZone: !Select [0, !GetAZs '']
      MapPublicIpOnLaunch: true
      Tags:
        - Key: Name
          Value: !Sub ${Environment}-public-subnet

  # Route Table
  RouteTable:
    Type: AWS::EC2::RouteTable
    Properties:
      VpcId: !Ref VPC
      Tags:
        - Key: Name
          Value: !Sub ${Environment}-route-table

  # Route to Internet
  Route:
    Type: AWS::EC2::Route
    DependsOn: AttachGateway
    Properties:
      RouteTableId: !Ref RouteTable
      DestinationCidrBlock: 0.0.0.0/0
      GatewayId: !Ref InternetGateway

  # Associate Route Table with Subnet
  SubnetRouteTableAssociation:
    Type: AWS::EC2::SubnetRouteTableAssociation
    Properties:
      SubnetId: !Ref PublicSubnet
      RouteTableId: !Ref RouteTable

  # Security Group
  SecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Security group for web application
      VpcId: !Ref VPC
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: 80
          ToPort: 80
          CidrIp: 0.0.0.0/0
        - IpProtocol: tcp
          FromPort: 443
          ToPort: 443
          CidrIp: 0.0.0.0/0
        - IpProtocol: tcp
          FromPort: 22
          ToPort: 22
          CidrIp: 0.0.0.0/0
      Tags:
        - Key: Name
          Value: !Sub ${Environment}-security-group

  # Launch Template
  LaunchTemplate:
    Type: AWS::EC2::LaunchTemplate
    Properties:
      LaunchTemplateName: !Sub ${Environment}-launch-template
      LaunchTemplateData:
        ImageId: ami-0abcdef1234567890  # Amazon Linux 2 AMI
        InstanceType: !Ref InstanceType
        SecurityGroupIds:
          - !Ref SecurityGroup
        UserData:
          Fn::Base64: !Sub |
            #!/bin/bash
            yum update -y
            yum install -y docker
            service docker start
            usermod -a -G docker ec2-user
            
            # Install Docker Compose
            curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
            chmod +x /usr/local/bin/docker-compose
            
            # Start application
            docker run -d -p 80:3000 my-app:latest

  # Auto Scaling Group
  AutoScalingGroup:
    Type: AWS::AutoScaling::AutoScalingGroup
    Properties:
      VPCZoneIdentifier:
        - !Ref PublicSubnet
      LaunchTemplate:
        LaunchTemplateId: !Ref LaunchTemplate
        Version: !GetAtt LaunchTemplate.LatestVersionNumber
      MinSize: 1
      MaxSize: 3
      DesiredCapacity: 2
      Tags:
        - Key: Name
          Value: !Sub ${Environment}-asg-instance
          PropagateAtLaunch: true

  # Application Load Balancer
  LoadBalancer:
    Type: AWS::ElasticLoadBalancingV2::LoadBalancer
    Properties:
      Name: !Sub ${Environment}-alb
      Scheme: internet-facing
      Type: application
      Subnets:
        - !Ref PublicSubnet
      SecurityGroups:
        - !Ref SecurityGroup

Outputs:
  LoadBalancerDNS:
    Description: Load Balancer DNS Name
    Value: !GetAtt LoadBalancer.DNSName
    Export:
      Name: !Sub ${Environment}-LoadBalancerDNS

  VPCId:
    Description: VPC ID
    Value: !Ref VPC
    Export:
      Name: !Sub ${Environment}-VPC-ID
```

```yaml
# Terraform Configuration
terraform {
  required_version = ">= 1.0"
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

# Variables
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-west-2"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "staging"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

# Data sources
data "aws_availability_zones" "available" {
  state = "available"
}

data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"]
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

# Internet Gateway
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name        = "${var.environment}-igw"
    Environment = var.environment
  }
}

# Public Subnets
resource "aws_subnet" "public" {
  count = 2

  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.${count.index + 1}.0/24"
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  map_public_ip_on_launch = true

  tags = {
    Name        = "${var.environment}-public-subnet-${count.index + 1}"
    Environment = var.environment
  }
}

# Route Table
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  tags = {
    Name        = "${var.environment}-public-rt"
    Environment = var.environment
  }
}

# Route Table Association
resource "aws_route_table_association" "public" {
  count = length(aws_subnet.public)

  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

# Security Group
resource "aws_security_group" "web" {
  name        = "${var.environment}-web-sg"
  description = "Security group for web servers"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "${var.environment}-web-sg"
    Environment = var.environment
  }
}

# Launch Template
resource "aws_launch_template" "web" {
  name_prefix   = "${var.environment}-web-"
  image_id      = data.aws_ami.amazon_linux.id
  instance_type = var.instance_type

  vpc_security_group_ids = [aws_security_group.web.id]

  user_data = base64encode(templatefile("${path.module}/user_data.sh", {
    environment = var.environment
  }))

  tag_specifications {
    resource_type = "instance"
    tags = {
      Name        = "${var.environment}-web-instance"
      Environment = var.environment
    }
  }
}

# Auto Scaling Group
resource "aws_autoscaling_group" "web" {
  name                = "${var.environment}-web-asg"
  vpc_zone_identifier = aws_subnet.public[*].id
  target_group_arns   = [aws_lb_target_group.web.arn]
  health_check_type   = "ELB"

  min_size         = 1
  max_size         = 3
  desired_capacity = 2

  launch_template {
    id      = aws_launch_template.web.id
    version = "$Latest"
  }

  tag {
    key                 = "Name"
    value               = "${var.environment}-web-asg"
    propagate_at_launch = true
  }

  tag {
    key                 = "Environment"
    value               = var.environment
    propagate_at_launch = true
  }
}

# Application Load Balancer
resource "aws_lb" "web" {
  name               = "${var.environment}-web-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.web.id]
  subnets            = aws_subnet.public[*].id

  tags = {
    Name        = "${var.environment}-web-alb"
    Environment = var.environment
  }
}

# Target Group
resource "aws_lb_target_group" "web" {
  name     = "${var.environment}-web-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id

  health_check {
    enabled             = true
    healthy_threshold   = 2
    interval            = 30
    matcher             = "200"
    path                = "/"
    port                = "traffic-port"
    protocol            = "HTTP"
    timeout             = 5
    unhealthy_threshold = 2
  }

  tags = {
    Name        = "${var.environment}-web-tg"
    Environment = var.environment
  }
}

# Listener
resource "aws_lb_listener" "web" {
  load_balancer_arn = aws_lb.web.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.web.arn
  }
}

# Outputs
output "load_balancer_dns" {
  description = "DNS name of the load balancer"
  value       = aws_lb.web.dns_name
}

output "vpc_id" {
  description = "ID of the VPC"
  value       = aws_vpc.main.id
}
```

## 🎯 DevOps Project Portfolio

### Project 1: Automated Deployment Pipeline
**Technologies**: GitHub Actions, Docker, AWS ECS
- Multi-stage pipeline with testing
- Blue-green deployment strategy
- Automated rollback on failure
- Monitoring and alerting

### Project 2: Infrastructure as Code
**Technologies**: Terraform, AWS, CloudFormation
- Complete infrastructure provisioning
- Environment management (dev/staging/prod)
- State management and versioning
- Cost optimization strategies

### Project 3: Microservices Platform
**Technologies**: Kubernetes, Docker, Helm
- Container orchestration
- Service mesh implementation
- Monitoring with Prometheus/Grafana
- Log aggregation with ELK stack

### Project 4: Disaster Recovery System
**Technologies**: AWS, Backup automation, Monitoring
- Automated backup strategies
- Cross-region replication
- Recovery time optimization
- Documentation and runbooks

## 📊 DevOps Progress Tracking

### Weekly Assessment Template
```markdown
# DevOps Week [X] Progress

## Technical Skills ✅
- [ ] Git and version control
- [ ] Docker containerization
- [ ] CI/CD pipelines
- [ ] Cloud platforms (AWS/GCP/Azure)
- [ ] Infrastructure as Code

## Tools Mastered ✅
- [ ] Git workflows
- [ ] Docker & Docker Compose
- [ ] GitHub Actions/Jenkins
- [ ] Terraform/CloudFormation
- [ ] Kubernetes basics

## Projects Completed
- [ ] Basic CI/CD pipeline
- [ ] Containerized application
- [ ] Infrastructure automation
- [ ] Monitoring setup

## Practice Hours
- Version Control: ___/10 hours
- Containerization: ___/15 hours
- CI/CD: ___/15 hours
- Cloud: ___/20 hours
```

## 📚 DevOps Learning Resources

### Documentation
- Git Official Documentation
- Docker Documentation
- Kubernetes Documentation
- AWS/GCP/Azure Documentation

### Books
- "The DevOps Handbook" by Gene Kim
- "Site Reliability Engineering" by Google
- "Infrastructure as Code" by Kief Morris
- "Continuous Delivery" by Jez Humble

### Practice Platforms
- AWS Free Tier
- Google Cloud Free Tier
- Docker Hub
- GitHub Actions (free for public repos)

### Communities
- DevOps Reddit community
- CNCF (Cloud Native Computing Foundation)
- AWS User Groups
- Local DevOps meetups

---

**Remember**: DevOps is about culture and collaboration as much as it is about tools. Focus on understanding the principles behind the practices!