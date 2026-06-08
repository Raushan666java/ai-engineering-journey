---
title: DevOps — CI/CD se Cloud tak
---

<div class="module-hero">

# 🚀 DevOps — CI/CD se Cloud tak

DevOps sirf deployment nahi hai — ye ek culture hai. Placement mein DevOps kaafi poochha jaata hai, khaaskar service-based aur product companies mein.

**Topics**: Git · Docker · Kubernetes · CI/CD · Cloud · IaC · Monitoring

</div>

<div class="roadmap-path">

## Learning Roadmap

<div class="roadmap-step" data-step="1">

### Git & GitHub

Version control, branching, collaboration

</div>

<div class="roadmap-step" data-step="2">

### Docker

Containerization, multi-stage builds, compose

</div>

<div class="roadmap-step" data-step="3">

### Kubernetes

Pods, services, deployments, kubectl

</div>

<div class="roadmap-step" data-step="4">

### CI/CD

GitHub Actions, Jenkins, pipelines

</div>

<div class="roadmap-step" data-step="5">

### Cloud Platforms

AWS, GCP, Azure — compute, storage, serverless

</div>

<div class="roadmap-step" data-step="6">

### IaC

Terraform, Ansible — infra as code

</div>

<div class="roadmap-step" data-step="7">

### Monitoring

Prometheus, Grafana, ELK Stack

</div>

</div>

## Core Topics

<div class="phase-section">

<div class="phase-header">

### <span class="tag tag-hot">Phase 1</span> Git & GitHub
</div>

<div class="phase-body">

```bash
git init
git add .
git commit -m "feat: initial commit"
git push origin main
```

- Branching strategies: git-flow, trunk-based, feature branches
- Collaboration: pull requests, code review, merge conflict resolution
- GitHub Actions workflows: `.github/workflows/` folder reference

### Advanced Git

**git rebase vs git merge**

Dono branches ko combine karte hain lekin approach different hai.

```bash
# Merge — naya commit banata hai, history preserve karta hai
git checkout main
git merge feature-branch

# Rebase — history linear banata hai
git checkout feature-branch
git rebase main
```

Merge se "merge commit" aata hai. Rebase se history clean rehti hai. Public branches pe kabhi rebase mat karo — danger.

**git stash**

Jab kaam beech mein chhod kar urgent bug fix karni ho:

```bash
git stash push -m "wip-feature"
git checkout main
# fix karo
git checkout feature-branch
git stash pop
```

**git cherry-pick**

Kisi specific commit ko doosri branch mein laana:

```bash
git cherry-pick a1b2c3d
```

**git bisect**

Bug kab aaya binary search se dhundhna:

```bash
git bisect start
git bisect bad HEAD
git bisect good v1.0
# har step pe test karo, git bisect good/bad do
git bisect reset
```

**Interactive Rebase — Squash Commits**

```bash
git rebase -i HEAD~3
```

pick, squash, reword, edit — apni choice. Multiple commits ko ek mein squash karo.

**gitignore Common Patterns**

```
node_modules/
.env
*.log
dist/
.DS_Store
.vscode/
*.pyc
```

**Git Hooks — Pre-commit Linting**

`.git/hooks/pre-commit`:

```bash
#!/bin/sh
npm run lint
if [ $? -ne 0 ]; then
  echo "Lint failed. Commit rejected."
  exit 1
fi
```

**git reflog — Recovery**

```bash
git reflog
git reset --hard HEAD@{2}
```

Deleted commits ya branches recover kar sakte ho.

**Interview Q&A**

- **Q**: `git pull` vs `git fetch`?
- **A**: fetch sirf remote data laata hai. pull = fetch + merge.
- **Q**: merge conflict kaise resolve karte ho?
- **A**: files edit karo, `git add`, phir `git commit`.
- **Q**: detached HEAD state kya hai?
- **A**: Kisi specific commit pe ho, branch pe nahi. `git checkout main` se fix.
- **Q**: sensitive file commit ho gaya?
- **A**: `git rm --cached file` + `.gitignore` mein daalo + `git reset --soft HEAD~1`.
- **Q**: git-flow vs trunk-based?
- **A**: Git-flow mein develop/release/hotfix branches. Trunk-based mein sab main pe short-lived branches.

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 Tip</span>
**Git**: Roz koi ek feature branch banao, PR raise karo, merge karo. Command muscle memory banao — pehle `git status` har baar.
</div>

<div class="phase-section">

<div class="phase-header">

### <span class="tag tag-hot">Phase 2</span> Docker
</div>

<div class="phase-body">

```dockerfile
# Multi-stage build example
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

- Dockerfile best practices (multi-stage, layer caching, .dockerignore)
- docker-compose for multi-service apps
- Volumes, networks, environment variables
- Docker hub, image tagging, registry

### Advanced Docker

**Docker Networking Types**

```bash
# Bridge (default) — isolated network on host
docker network create --driver bridge my-bridge
docker run --network my-bridge nginx

# Host — container host ke network mein directly
docker run --network host nginx

# Overlay — multi-host communication (Swarm/K8s)
docker network create --driver overlay my-overlay
```

- **Bridge**: Containers aapas mein communicate kar sakte hain.
- **Host**: Port mapping nahi karni padti, directly host port use hota hai.
- **Overlay**: Multi-node swarms ke liye.

**Docker Compose — 3-Service App YAML**

```yaml
version: "3.8"
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=db
      - REDIS_HOST=redis
    depends_on:
      - db
      - redis

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    restart: unless-stopped

volumes:
  pgdata:
```

**Health Checks, Resource Limits, Restart Policies**

```yaml
services:
  app:
    restart: unless-stopped
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: "512M"
        reservations:
          cpus: "0.25"
          memory: "256M"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```

Restart policies: `no`, `always`, `on-failure`, `unless-stopped`.

**Docker Multi-Stage Build — Detailed**

```dockerfile
# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Stage 2: Production deps
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Stage 3: Runtime
FROM node:18-alpine
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json .
EXPOSE 3000
USER node
CMD ["node", "dist/server.js"]
```

**Dockerfile Best Practices**

- Layer caching: `COPY package*.json ./` pehle karo, `RUN npm ci` phir, `COPY . .` baad mein.
- `.dockerignore` file banao — `node_modules`, `.git`, `*.md` exclude karo.
- Non-root user use karo: `USER node` ya custom user banao.
- Multi-stage use karo — production image choti hoti hai.
- Specific tags use karo (`node:18-alpine`), `latest` nahi.

**Docker Registry — Push/Pull**

```bash
# Docker Hub
docker tag my-app username/my-app:v1
docker push username/my-app:v1
docker pull username/my-app:v1

# Private Registry
docker tag my-app registry.example.com/my-app:v1
docker push registry.example.com/my-app:v1

# AWS ECR
aws ecr get-login-password | docker login --username AWS --password-stdin <account>.dkr.ecr.us-east-1.amazonaws.com
docker push <account>.dkr.ecr.us-east-1.amazonaws.com/my-app:v1
```

**useful Docker Commands**

```bash
docker system prune -a    # clean unused containers, images, networks
docker stats              # live CPU/memory usage
docker inspect <id>       # detailed container info (JSON)
docker logs -f <id>       # follow logs
docker exec -it <id> sh   # shell inside container
```

**Interview Q&A**

- **Q**: Docker image vs container?
- **A**: Image executable package hai. Container image ka running instance hai.
- **Q**: ENTRYPOINT vs CMD?
- **A**: ENTRYPOINT fixed command hai, CMD default arguments deta hai. Dono combine ho sakte hain.
- **Q**: scratch image kya hai?
- **A**: Empty base image, static binaries ke liye. Bohot chhoti image banati hai.
- **Q**: container mein data kaise persist karein?
- **A**: Volumes (`-v`) ya bind mounts use karo.
- **Q**: docker-compose vs docker run?
- **A**: compose multi-container apps ke liye, `docker run` single container ke liye.

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 Tip</span>
**Docker**: Ek simple Node.js + Redis app likho, docker-compose se chalao. `docker ps`, `docker logs`, `docker exec` — ye 3 commands yaad rakho interview ke liye.
</div>

<div class="phase-section">

<div class="phase-header">

### <span class="tag tag-star">Phase 3</span> Kubernetes Basics
</div>

<div class="phase-body">

- Pods, Services, Deployments, ConfigMaps, Secrets
- `kubectl` commands
- Minikube / kind for local dev

### Advanced Kubernetes

**Complete Deployment YAML**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:1.25
          ports:
            - containerPort: 80
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"
          livenessProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 5
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 3
            periodSeconds: 5
```

**Complete Service YAML**

```yaml
# ClusterIP — internal access
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  type: ClusterIP
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
---
# NodePort — external access on each node's IP
apiVersion: v1
kind: Service
metadata:
  name: nginx-nodeport
spec:
  type: NodePort
  selector:
    app: nginx
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30080
---
# LoadBalancer — cloud load balancer
apiVersion: v1
kind: Service
metadata:
  name: nginx-lb
spec:
  type: LoadBalancer
  selector:
    app: nginx
  ports:
    - port: 80
      targetPort: 80
```

**ConfigMap and Secret Examples**

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  APP_ENV: production
  APP_DEBUG: "false"
  DB_HOST: postgres-service
---
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
type: Opaque
data:
  DB_PASSWORD: cGFzc3dvcmQxMjM=  # base64
  API_KEY: c2VjcmV0LWtleS0xMjM=
---
# Pod mein injection
apiVersion: v1
kind: Pod
metadata:
  name: app-pod
spec:
  containers:
    - name: app
      image: my-app:latest
      envFrom:
        - configMapRef:
            name: app-config
        - secretRef:
            name: app-secret
```

**Ingress YAML — Path-Based Routing**

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
    - host: myapp.example.com
      http:
        paths:
          - path: /api
            pathType: Prefix
            backend:
              service:
                name: api-service
                port:
                  number: 80
          - path: /
            pathType: Prefix
            backend:
              service:
                name: web-service
                port:
                  number: 80
```

**Horizontal Pod Autoscaler YAML**

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: nginx-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: nginx-deployment
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
    - type: Resource
      resource:
        name: memory
        target:
          type: Utilization
          averageUtilization: 80
```

**kubectl Cheatsheet — Top 20 Commands**

```bash
# Cluster info
kubectl cluster-info
kubectl get nodes

# Pods
kubectl get pods
kubectl get pods -o wide
kubectl describe pod <name>
kubectl logs -f <name>
kubectl exec -it <name> -- sh

# Deployments
kubectl get deployments
kubectl rollout status deployment/<name>
kubectl rollout history deployment/<name>
kubectl rollout undo deployment/<name>

# Services
kubectl get svc
kubectl expose deployment <name> --type=NodePort --port=80

# Config & Secrets
kubectl get configmaps
kubectl get secrets

# Debugging
kubectl top pods
kubectl top nodes
kubectl get events --sort-by='.lastTimestamp'
kubectl port-forward pod/<name> 8080:80

# Delete
kubectl delete pod <name>
kubectl delete -f manifest.yaml
```

**Interview Q&A**

- **Q**: Pod vs Deployment?
- **A**: Pod smallest unit hai. Deployment manages replicas, rolling updates, rollbacks.
- **Q**: ClusterIP vs NodePort vs LoadBalancer?
- **A**: ClusterIP internal access. NodePort external on node IP:port. LoadBalancer cloud LB deta hai.
- **Q**: livenessProbe vs readinessProbe?
- **A**: Liveness container restart karta hai agar fail ho. Readiness traffic nahi bhejta jab tak ready na ho.
- **Q**: ConfigMap vs Secret?
- **A**: Dono configuration data ke liye. Secret base64 encoded hota hai, sensitive data ke liye.
- **Q**: StatefulSet kya hai?
- **A**: Stateful applications ke liye — stable network ID, persistent storage, ordered deployment.
- **Q**: scenario — pod pending state mein hai?
- **A**: `kubectl describe pod` karo. Usually insufficient resources ya ImagePullBackOff.
- **Q**: zero-downtime deployment kaise karein?
- **A**: RollingUpdate strategy, readiness probes, aur multiple replicas.

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 Tip</span>
**K8s**: Sirf theory mat padho — `minikube start` karo, ek nginx pod deploy karo, service expose karo. YAML likhna aana chahiye.
</div>

<div class="phase-section">

<div class="phase-header">

### <span class="tag tag-method">Phase 4</span> CI/CD
</div>

<div class="phase-body">

#### GitHub Actions

```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: composer install
      - run: php artisan test
```

#### Jenkins Basics

- Pipeline as Code (Jenkinsfile)
- Build triggers, plugins, agents

### Advanced CI/CD

**GitHub Actions — Detailed Workflow**

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: "18"

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run lint

  test:
    needs: lint
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16, 18, 20]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
      - uses: actions/cache@v3
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - run: npm ci
      - run: npm test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: test-results
          path: test-results/

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run build
      - uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - run: aws s3 sync dist/ s3://my-app-bucket/
```

**Complete Jenkinsfile (Declarative Pipeline)**

```groovy
pipeline {
    agent any

    environment {
        NODE_VERSION = '18'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                always {
                    junit 'test-results/**/*.xml'
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Staging') {
            when {
                branch 'develop'
            }
            steps {
                sh 'npm run deploy:staging'
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Deploy to production?', ok: 'Yes'
                sh 'npm run deploy:prod'
            }
        }
    }

    post {
        failure {
            slackSend(
                channel: '#devops-alerts',
                message: "Pipeline failed: ${env.JOB_NAME} - ${env.BUILD_URL}"
            )
        }
        success {
            slackSend(
                channel: '#devops-alerts',
                message: "Pipeline succeeded: ${env.JOB_NAME}"
            )
        }
    }
}
```

**Comparison: GitHub Actions vs Jenkins vs GitLab CI**

| Feature | GitHub Actions | Jenkins | GitLab CI |
|---------|---------------|---------|-----------|
| Hosting | Cloud (managed) | Self-hosted | Cloud or self |
| Setup | Zero config | Manual install | GitLab project |
| Syntax | YAML | Groovy | YAML |
| Plugins | Marketplace | Rich ecosystem | Built-in |
| Scalability | Automatic | Needs config | Automatic |
| Cost | Free tier + paid | Free | Free tier + paid |
| Best for | Small/medium teams | Enterprise | GitLab users |

**Environment-Based Deployments**

```yaml
name: Multi-Environment Deploy

on:
  push:
    branches:
      - main       # production
      - develop    # staging
      - feature/*  # dev

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: ${{ github.ref_name == 'main' && 'production' || github.ref_name == 'develop' && 'staging' || 'development' }}
      url: ${{ steps.deploy-url.outputs.url }}
    steps:
      - uses: actions/checkout@v3
      - run: echo "Deploying to ${{ github.ref_name }}"
```

**Interview Q&A**

- **Q**: CI/CD pipeline mein stages kya rehti hain?
- **A**: Typical stages — lint, test, build, deploy. Har stage gaurd ho sakti hai.
- **Q**: Jenkinsfile declarative vs scripted?
- **A**: Declarative structured hota hai (`pipeline { stages { stage { } } }`). Scripted mein full Groovy flexibility.
- **Q**: build artifact kya hota hai?
- **A**: Code compile/build ke baad jo output aata hai — JAR, bundle, Docker image.
- **Q**: continuous delivery vs continuous deployment?
- **A**: CDelivery — production mein manually deploy hota hai. CDeployment — har commit auto deploy.
- **Q**: scenario — build fail ho raha hai intermittent?
- **A**: Flaky test ho sakta hai. Retry mechanism ya test isolate karo. Cache bhi check karo.

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 Tip</span>
**CI/CD**: Pehle GitHub Actions sikho (easy hai), phir Jenkins (industry standard). Ek baar apni koi bhi repo mein CI pipeline banao — test pass ho toh deploy.
</div>

<div class="phase-section">

<div class="phase-header">

### <span class="tag tag-star">Phase 5</span> Cloud Platforms
</div>

<div class="phase-body">

#### AWS

| Service | Use Case |
|---------|----------|
| EC2 | Compute instances |
| S3 | Object storage |
| RDS | Managed databases |
| Lambda | Serverless functions |
| API Gateway | API management |
| CloudFront | CDN |

#### GCP & Azure

- GCP: Compute Engine, Cloud Storage, Cloud Functions
- Azure: VMs, Blob Storage, Azure Functions

### Advanced Cloud

**AWS — VPC Setup (Subnets, Route Tables, Internet Gateway, NAT)**

```yaml
# CloudFormation-style VPC architecture
# VPC: 10.0.0.0/16
# Public subnet: 10.0.1.0/24 (internet gateway attached)
# Private subnet: 10.0.2.0/24 (NAT gateway attached)
# Route table: public route -> 0.0.0.0/0 via igw
# Route table: private route -> 0.0.0.0/0 via nat-gw
```

VPC ka concept important hai — subnets mein aap resources (EC2, RDS) daalte hain. Public subnet internet facing, private subnet internal.

**EC2 User Data Script**

```bash
#!/bin/bash
yum update -y
yum install -y nginx
systemctl enable nginx
systemctl start nginx
echo "<h1>Deployed via User Data</h1>" > /usr/share/nginx/html/index.html
```

Ye script EC2 launch ke time execute hoti hai. Bootstrap ke liye perfect.

**S3 Bucket Policy Example**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-public-bucket/*",
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "203.0.113.0/24"
        }
      }
    }
  ]
}
```

Public read access sirf specific IP range se allow karta hai.

**AWS Lambda Function (Python)**

```python
import json
import boto3

def lambda_handler(event, context):
    s3 = boto3.client('s3')
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = event['Records'][0]['s3']['object']['key']

    response = s3.get_object(Bucket=bucket, Key=key)
    content = response['Body'].read().decode('utf-8')

    print(f"Processed file {key} from {bucket}")
    return {
        'statusCode': 200,
        'body': json.dumps(f'Processed {key}')
    }
```

S3 bucket trigger — jaise hi file aati hai, Lambda process karta hai.

**CloudWatch Alarms**

```bash
aws cloudwatch put-metric-alarm \
  --alarm-name "HighCPU" \
  --metric-name CPUUtilization \
  --namespace AWS/EC2 \
  --statistic Average \
  --period 300 \
  --threshold 80 \
  --comparison-operator GreaterThanThreshold \
  --evaluation-periods 2 \
  --alarm-actions arn:aws:sns:us-east-1:123456789012:alert-topic
```

CPU 80% se upar 2 baar gaya toh SNS notification.

**IAM Roles vs Users**

- **User**: Specific person ya service ke liye long-term credentials.
- **Role**: Temporary credentials, EC2/Lambda services assume karte hain.
- Best practice: Users mat banao, roles use karo. Human access ke liye SSO + IAM Identity Center.

**GCP Quick Comparison**

| AWS | GCP | Use Case |
|-----|-----|----------|
| EC2 | Compute Engine | Virtual machines |
| S3 | Cloud Storage | Object storage |
| Lambda | Cloud Functions | Serverless compute |
| RDS | Cloud SQL | Managed databases |
| VPC | VPC | Networking |

**Azure Quick Comparison**

| AWS | Azure | Use Case |
|-----|-------|----------|
| EC2 | Virtual Machines | Compute |
| S3 | Blob Storage | Object storage |
| Lambda | Azure Functions | Serverless |
| RDS | Azure SQL | Managed DB |
| VPC | Virtual Network | Networking |

**Multi-Cloud Interview Questions**

- **Q**: EC2 instance types kaun si hain?
- **A**: General purpose (t3, m5), Compute optimized (c5), Memory optimized (r5), Storage optimized (i3).
- **Q**: spot instance vs on-demand?
- **A**: Spot cheaper hai but reclaim ho sakta hai. On-demand fixed price, reliable.
- **Q**: S3 storage classes?
- **A**: Standard, Intelligent-Tiering, Glacier (archive), Deep Archive.
- **Q**: Lambda limits kya hain?
- **A**: 15 min timeout, 10GB memory, 250MB tmp storage.
- **Q**: VPC peering kya hai?
- **A**: Do VPCs ko connect karna, same AWS account ya different.
- **Q**: security group vs NACL?
- **A**: SG stateful hai, instance level. NACL stateless, subnet level.
- **Q**: AWS vs GCP vs Azure — kab kya use karein?
- **A**: AWS sabse mature hai. GCP data/ML ke liye. Azure Microsoft shops ke liye.
- **Q**: scenario — EC2 se S3 access nahi ho raha?
- **A**: Check IAM role attached hai ya nahi, S3 bucket policy, aur security group egress rules.

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 Tip</span>
**Cloud**: AWS kaafi hai placement ke liye — EC2 + S3 + RSA + Lambda 4 cheezein strong karo. Free tier mein practice karo.
</div>

<div class="phase-section">

<div class="phase-header">

### <span class="tag tag-method">Phase 6</span> IaC — Infrastructure as Code
</div>

<div class="phase-body">

#### Terraform

```hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
```

- State management, modules, workspaces
- `terraform plan`, `terraform apply`

#### Ansible

- Playbooks, inventory, roles
- Ad-hoc commands vs playbooks

### Advanced IaC

**Terraform — variables.tf**

```hcl
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}

variable "environment" {
  description = "Environment name"
  type        = string
  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be dev, staging, or prod."
  }
}
```

**Terraform — outputs.tf**

```hcl
output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.web.id
}

output "instance_public_ip" {
  description = "Public IP of the EC2 instance"
  value       = aws_instance.web.public_ip
}

output "s3_bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = aws_s3_bucket.assets.arn
}
```

**Terraform — Remote State (S3 Backend)**

```hcl
terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-locks"
  }
}
```

State locking ke liye DynamoDB table bhi use hota hai.

**Terraform — Modules Structure**

```
infrastructure/
├── modules/
│   ├── networking/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   └── outputs.tf
│   └── compute/
│       ├── main.tf
│       ├── variables.tf
│       └── outputs.tf
├── environments/
│   ├── dev/
│   │   ├── main.tf
│   │   └── terraform.tfvars
│   └── prod/
│       ├── main.tf
│       └── terraform.tfvars
```

Module reusable infrastructure ka block hai. Environments alag alag tfvars use karte hain.

**terraform import and workspaces**

```bash
# Import existing resource
terraform import aws_instance.web i-1234567890abcdef0

# Workspaces — environment isolation
terraform workspace new dev
terraform workspace new prod
terraform workspace select dev
terraform plan
```

**Ansible — Complete Playbook for Nginx Setup**

```yaml
---
- name: Setup Nginx Web Server
  hosts: webservers
  become: yes
  vars:
    nginx_port: 80
    server_name: example.com

  tasks:
    - name: Update apt cache
      apt:
        update_cache: yes
        cache_valid_time: 3600

    - name: Install nginx
      apt:
        name: nginx
        state: present

    - name: Create website directory
      file:
        path: /var/www/html/{{ server_name }}
        state: directory
        owner: www-data
        group: www-data
        mode: '0755'

    - name: Copy index.html
      copy:
        content: "<h1>Welcome to {{ server_name }}</h1>"
        dest: /var/www/html/{{ server_name }}/index.html
        owner: www-data
        group: www-data
        mode: '0644'

    - name: Copy nginx config
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/sites-available/{{ server_name }}

    - name: Enable site
      file:
        src: /etc/nginx/sites-available/{{ server_name }}
        dest: /etc/nginx/sites-enabled/{{ server_name }}
        state: link

    - name: Restart nginx
      service:
        name: nginx
        state: restarted
        enabled: yes
```

**Ansible — Inventory File**

```ini
[webservers]
web1 ansible_host=192.168.1.10 ansible_user=ubuntu
web2 ansible_host=192.168.1.11 ansible_user=ubuntu

[dbservers]
db1 ansible_host=192.168.1.20 ansible_user=ubuntu

[all:vars]
ansible_ssh_private_key_file=~/.ssh/id_rsa
ansible_python_interpreter=/usr/bin/python3
```

**Ansible — Roles Directory Structure**

```
ansible-project/
├── inventory/
│   └── production.ini
├── playbooks/
│   └── site.yml
├── roles/
│   ├── nginx/
│   │   ├── tasks/
│   │   │   └── main.yml
│   │   ├── templates/
│   │   │   └── nginx.conf.j2
│   │   ├── handlers/
│   │   │   └── main.yml
│   │   ├── vars/
│   │   │   └── main.yml
│   │   └── defaults/
│   │       └── main.yml
│   └── postgres/
│       ├── tasks/
│       │   └── main.yml
│       └── vars/
│           └── main.yml
└── ansible.cfg
```

**Terraform vs Ansible Comparison**

| Aspect | Terraform | Ansible |
|--------|-----------|---------|
| Type | Provisioning tool | Configuration management |
| State | Stateful (terraform.tfstate) | Stateless |
| Language | HCL | YAML + Jinja2 |
| Idempotent | Yes | Yes |
| Orchestration | Multi-cloud | Multi-platform |
| Config management | Limited | Excellent |
| Provisioning | Excellent | Limited |
| Use case | Create/update infra | Configure/running systems |

**Interview Q&A**

- **Q**: Terraform state kya hai?
- **A**: Real-world resources ka mapping. Remote backend pe store karo, kisi ke paas local na ho.
- **Q**: `terraform plan` vs `apply`?
- **A**: Plan dry-run hai — kya hoga dikhata hai. Apply actually changes karta hai.
- **Q**: Terraform modules kyu use karte hain?
- **A**: Reusability, DRY, standardized infrastructure components.
- **Q**: Ansible idempotency kya hai?
- **A**: Multiple baar run karo toh same result milega — no side effects.
- **Q**: Ansible pull vs push?
- **A**: Ansible push model use karta hai — control node agents ko bhejta hai. Pull mode bhi hai (ansible-pull).
- **Q**: Terraform vs Ansible kab kya use karein?
- **A**: Infra provision (VPC, EC2, S3) ke liye Terraform. Config management (nginx, app deploy) ke liye Ansible.

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 Tip</span>
**IaC**: Terraform seekho — HCL syntax easy hai aur bahut companies use karti hain. Ek EC2 instance Terraform se banao, destroy karo, fir waapas banao — ye cycle 2-3 baar karo.
</div>

<div class="phase-section">

<div class="phase-header">

### <span class="tag">Phase 7</span> Monitoring Basics
</div>

<div class="phase-body">

- **Prometheus**: Metrics collection
- **Grafana**: Dashboards
- **ELK Stack**: Elasticsearch, Logstash, Kibana
- **Uptime monitoring**: Health checks, alerts

### Advanced Monitoring

**Prometheus Configuration — prometheus.yml**

```yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "alerts.yml"

scrape_configs:
  - job_name: "prometheus"
    static_configs:
      - targets: ["localhost:9090"]

  - job_name: "node"
    static_configs:
      - targets:
          - "node-exporter:9100"
          - "web-server:9100"

  - job_name: "app"
    metrics_path: "/metrics"
    static_configs:
      - targets:
          - "my-app:3000"

alerting:
  alertmanagers:
    - static_configs:
        - targets: ["alertmanager:9093"]
```

**Prometheus Alerting Rules — alerts.yml**

```yaml
groups:
  - name: instance_alerts
    rules:
      - alert: InstanceDown
        expr: up == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Instance {{ $labels.instance }} down"
          description: "Instance has been down for more than 1 minute."

      - alert: HighCpuUsage
        expr: 100 - (avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High CPU on {{ $labels.instance }}"
          description: "CPU usage is above 80% for 5 minutes."
```

**Grafana Dashboard — JSON Snippet**

```json
{
  "title": "Node Exporter Dashboard",
  "panels": [
    {
      "title": "CPU Usage",
      "type": "graph",
      "targets": [
        {
          "expr": "100 - (avg by(instance)(rate(node_cpu_seconds_total{mode=\"idle\"}[5m])) * 100)",
          "legendFormat": "CPU %"
        }
      ],
      "gridPos": {"h": 8, "w": 12, "x": 0, "y": 0}
    },
    {
      "title": "Memory Usage",
      "type": "graph",
      "targets": [
        {
          "expr": "node_memory_MemTotal_bytes - node_memory_MemFree_bytes - node_memory_Buffers_bytes - node_memory_Cached_bytes",
          "legendFormat": "Memory used"
        }
      ],
      "gridPos": {"h": 8, "w": 12, "x": 12, "y": 0}
    }
  ]
}
```

Import karne ke liye Grafana UI mein `+` → Import → paste JSON.

**ELK Stack — Logstash Config for Nginx**

```ruby
input {
  file {
    path => "/var/log/nginx/access.log"
    start_position => "beginning"
    sincedb_path => "/dev/null"
  }
}

filter {
  grok {
    match => {
      "message" => "%{COMBINEDAPACHELOG}"
    }
  }
  date {
    match => ["timestamp", "dd/MMM/yyyy:HH:mm:ss Z"]
  }
  geoip {
    source => "clientip"
  }
}

output {
  elasticsearch {
    hosts => ["localhost:9200"]
    index => "nginx-logs-%{+YYYY.MM.dd}"
  }
  stdout {
    codec => rubydebug
  }
}
```

Kibana mein `Discover` → index pattern `nginx-logs-*` → visualize.

**Uptime Monitoring — Health Check Endpoint**

```javascript
// Express.js health check
app.get('/health', (req, res) => {
  const health = {
    status: 'ok',
    uptime: process.uptime(),
    timestamp: Date.now(),
    checks: {
      database: dbIsConnected,
      redis: redisIsConnected
    }
  };
  res.status(200).json(health);
});
```

External monitoring services (Pingdom, UptimeRobot, StatusCake) is endpoint ko hit karte hain.

**Prometheus vs CloudWatch vs Loki Comparison**

| Feature | Prometheus | CloudWatch | Loki |
|---------|-----------|------------|------|
| Type | Metrics | Metrics + Logs | Logs |
| Pull/Push | Pull | Push | Pull (agent) |
| Storage | Local/remote | AWS managed | S3-based |
| Query | PromQL | CloudWatch Insights | LogQL |
| Integration | Grafana | AWS services | Grafana |
| Best for | K8s/apps | AWS infra | K8s logs |

**Interview Q&A**

- **Q**: Prometheus pull model kya hai?
- **A**: Prometheus targets se data scrape karta hai, targets data push nahi karte.
- **Q**: Grafana data source kaise add karein?
- **A**: Configuration → Data Sources → Prometheus → URL daalo → Save & Test.
- **Q**: ELK stack mein kya kya aata hai?
- **A**: Elasticsearch (storage/search), Logstash (ingestion/parsing), Kibana (visualization).
- **Q**: Logstash grok filter kya karta hai?
- **A**: Unstructured log ko structured fields mein convert karta hai (regex matching).
- **Q**: alertmanager kya hai?
- **A**: Prometheus se alerts receive karta hai, Slack/Email/PagerDuty bhejta hai.
- **Q**: scenario — high memory alert aa raha hai?
- **A**: `kubectl top pods` ya `docker stats` check karo. Pod resources increase karo ya HPA adjust karo.

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 Tip</span>
**Monitoring**: Apne project mein Prometheus + Grafana lagao. Docker compose mein ek click mein setup ho jaata hai. CPU/memory dashboard dikhana aana chahiye.
</div>

## DevOps Interview Questions

Har phase ke common interview questions — placement ke liye must read.

### Git Interview Questions

- **Q**: Difference between `git merge` and `git rebase`?
- **A**: Merge preserves history (merge commit), rebase linear history banata hai. Public branches pe rebase risky hai.
- **Q**: How to undo a commit that has already been pushed?
- **A**: `git revert <commit>` — ek naya commit banata hai jo changes undo karta hai. `git reset` mat karo agar push ho chuka hai.
- **Q**: What is a merge conflict and how to resolve it?
- **A**: Jab do branches same file ki different lines change karein. Conflicted file edit karo, `git add`, `git commit`.
- **Q**: Explain git-flow branching strategy.
- **A**: `main` (production), `develop` (integration), `feature/*` (features), `release/*` (release prep), `hotfix/*` (urgent fixes).
- **Q**: What is `.gitignore` used for?
- **A**: Unintentionally track hone wali files ko ignore karna — node_modules, .env, build artifacts.

### Docker Interview Questions

- **Q**: What is the difference between an image and a container?
- **A**: Image is a read-only template. Container is a running instance of an image.
- **Q**: Explain Docker multi-stage builds.
- **A**: Ek Dockerfile mein multiple FROM statements. Build stage mein code compile hota hai, runtime stage sirf binary copy karta hai. Image size chhoti hoti hai.
- **Q**: How do you persist data in Docker?
- **A**: Volumes (`docker volume create`) ya bind mounts (`-v /host:/container`).
- **Q**: What is Docker Compose used for?
- **A**: Multi-container applications define aur run karne ke liye. Ek YAML file mein saare services define karte hain.
- **Q**: Explain Docker networking — bridge vs host vs overlay.
- **A**: Bridge — default, containers aapas mein communicate karte hain. Host — container host network use karta hai. Overlay — multi-node swarm communication.

### Kubernetes Interview Questions

- **Q**: What is a Pod in Kubernetes?
- **A**: Smallest deployable unit. Ek ya multiple containers ka group jo same network aur storage share karta hai.
- **Q**: Difference between Deployment and StatefulSet?
- **A**: Deployment stateless apps ke liye. StatefulSet stateful apps ke liye — stable network ID, ordered rolling updates, persistent storage.
- **Q**: How does a Service work?
- **A**: Pods ka stable network endpoint provide karta hai. Selector labels ke through pods find karta hai.
- **Q**: What is the role of kube-apiserver?
- **A**: Central control plane component. All API requests yahi se handle hote hain. Authentication, authorization, validation karta hai.
- **Q**: Explain Horizontal Pod Autoscaler.
- **A**: CPU/memory metrics ke basis pe pods ki count automatically increase/decrease karta hai.

### CI/CD Interview Questions

- **Q**: What is CI/CD?
- **A**: Continuous Integration — code frequently merge, automatically build/test. Continuous Deployment/Delivery — automatically deploy to production/staging.
- **Q**: Difference between Jenkins and GitHub Actions?
- **A**: Jenkins self-hosted, highly customizable, Groovy DSL. GitHub Actions cloud-hosted, YAML syntax, GitHub ecosystem ke saath tight integration.
- **Q**: What is a Jenkins pipeline?
- **A**: CI/CD process ka definition as code. Declarative (structured) ya Scripted (flexible) ho sakta hai.
- **Q**: How do you secure secrets in CI/CD?
- **A**: GitHub Actions — `secrets` use karo. Jenkins — Credentials plugin. Kabhi hardcode mat karo.
- **Q**: What is a build artifact?
- **A**: Build process ke output — JAR, WAR, Docker image, compiled binary, static files.

### Cloud Interview Questions

- **Q**: Difference between scalability and elasticity?
- **A**: Scalability — peak load handle karne ki capacity. Elasticity — auto scale up/down based on demand.
- **Q**: What is an IAM role?
- **A**: Temporary credentials wala identity. EC2, Lambda assume karte hain. Long-term access keys nahi chahiye.
- **Q**: Explain S3 storage classes.
- **A**: Standard (frequent access), Intelligent-Tiering (auto tier change), Glacier (archive), Deep Archive (long-term).
- **Q**: What is a VPC?
- **A**: Virtual Private Cloud — isolated network in AWS. Subnets, route tables, internet gateway, NAT gateway.
- **Q**: Difference between security group and NACL?
- **A**: Security group — stateful, instance level. NACL — stateless, subnet level.

### IaC Interview Questions

- **Q**: What is Infrastructure as Code?
- **A**: Manual operations ki jagah code se infrastructure manage karna. Version control, repeatability, consistency.
- **Q**: Explain Terraform state.
- **A**: Real-world resources ka state joh terraform.tfstate file mein store hota hai. Remote backend pe lock karo.
- **Q**: What is idempotency in Ansible?
- **A**: Playbook multiple baar run karo, same result. No unintended side effects.
- **Q**: Terraform vs Ansible — kab kya use karein?
- **A**: Terraform provision infrastructure (create/update/destroy). Ansible configure running systems (install software, manage config).

### Monitoring Interview Questions

- **Q**: What is Prometheus?
- **A**: Open-source monitoring system with time-series database. Pull model — targets se metrics scrape karta hai.
- **Q**: Explain Grafana.
- **A**: Visualization tool — Prometheus data ko dashboards mein show karta hai. Alerting bhi kar sakta hai.
- **Q**: What is the ELK Stack?
- **A**: Elasticsearch (search + storage), Logstash (log parsing), Kibana (visualization).
- **Q**: What is a health check endpoint?
- **A**: Application ka endpoint jo status batata hai — `/health` ya `/readyz`. Liveness/readiness probes use karte hain.
- **Q**: Scenario — Your application is running slow. How do you debug?
- **A**: Check monitoring (CPU/memory/disk), logs (ELK/Grafana), database queries, network latency. Pod logs + metrics + tracing.

## Syllabus Table

<table class="table-dash">

| Module | Status |
|--------|--------|
| Git Complete | ✅ |
| Docker Complete | ✅ |
| CI/CD Complete | ✅ |
| Cloud Infrastructure | ✅ |
| DevOps Full Course | ✅ |

</table>

## Checklist

- [ ] Git branching strategies seekh li
- [ ] Dockerfile + docker-compose banaya
- [ ] K8s basics (pods, services) samjhe
- [ ] GitHub Actions CI/CD pipeline banaya
- [ ] AWS (EC2, S3, RDS) basics cover kiye
- [ ] Terraform ya Ansible ka ek project kiya
- [ ] Monitoring (Prometheus/Grafana) setup kiya

---

## 📂 Original Deep Content

Original DevOps content — 43+ files:

- [DevOps Complete Guide](../original/06-DevOps/)
- [Docker](../original/06-DevOps/Docker/)
- [Kubernetes](../original/06-DevOps/Kubernetes/)
- [CI/CD](../original/06-DevOps/CI-CD/)
- [Cloud (AWS)](../original/06-DevOps/Cloud/)

## Reference: Kubernetes Pod YAML

Ek complete pod YAML — interview mein likhne ko bola ja sakta hai:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
    tier: frontend
spec:
  containers:
    - name: nginx
      image: nginx:1.25
      ports:
        - containerPort: 80
      resources:
        requests:
          memory: "256Mi"
          cpu: "250m"
        limits:
          memory: "512Mi"
          cpu: "500m"
      env:
        - name: ENVIRONMENT
          value: "production"
      volumeMounts:
        - name: html-volume
          mountPath: /usr/share/nginx/html
  volumes:
    - name: html-volume
      configMap:
        name: nginx-html
  restartPolicy: Always
```

Yeh pod ek nginx container chalata hai with resource requests/limits, environment variables, aur volume mounts. `kubectl apply -f pod.yaml` se deploy karo.

---

## Notes

<div id="page-notes"></div>
