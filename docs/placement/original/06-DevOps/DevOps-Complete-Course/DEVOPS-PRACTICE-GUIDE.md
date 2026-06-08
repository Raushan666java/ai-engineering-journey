# 🚀 DevOps Practice Guide - Hands-On Learning

## 🎯 **PRACTICE METHODOLOGY**

### **📋 Daily Practice Structure**
```
Morning (1 hour)   → Theory + Commands
Afternoon (2 hours) → Hands-on Labs
Evening (1 hour)   → Projects + Review
```

---

## **WEEK 1-2: Foundation Practice**

### **Day 1-3: Linux Mastery**
```bash
# Essential Commands Practice
ls -la /var/log/
ps aux | grep nginx
top -p $(pgrep nginx)
netstat -tulpn | grep :80
find /etc -name "*.conf" -type f
grep -r "error" /var/log/
tail -f /var/log/syslog
```

**Practice Tasks:**
1. Create user management script
2. Set up file permissions
3. Monitor system resources
4. Configure cron jobs

### **Day 4-7: Git Workflow**
```bash
# Git Practice Commands
git init project-demo
git add . && git commit -m "Initial commit"
git branch feature/login
git checkout feature/login
git merge main
git rebase main
git log --oneline --graph
```

**Practice Tasks:**
1. Create branching strategy
2. Handle merge conflicts
3. Set up Git hooks
4. Practice code reviews

### **Day 8-14: Docker Fundamentals**
```dockerfile
# Dockerfile Practice
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Docker Commands Practice
docker build -t myapp:v1 .
docker run -d -p 3000:3000 myapp:v1
docker exec -it container_id bash
docker logs container_id
docker-compose up -d
```

---

## **WEEK 3-4: Orchestration Practice**

### **Kubernetes Hands-On**
```yaml
# pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
```

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: web
        image: nginx:latest
```

**Practice Commands:**
```bash
kubectl apply -f pod.yaml
kubectl get pods -o wide
kubectl describe pod nginx-pod
kubectl logs nginx-pod
kubectl exec -it nginx-pod -- bash
kubectl scale deployment web-app --replicas=5
```

---

## **WEEK 5-6: CI/CD Pipeline Practice**

### **GitHub Actions Pipeline**
```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline
on:
  push:
    branches: [main]
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
        node-version: '16'
    - run: npm install
    - run: npm test
    - run: npm run build
```

### **Jenkins Pipeline**
```groovy
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t myapp .'
            }
        }
        stage('Test') {
            steps {
                sh 'docker run --rm myapp npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}
```

---

## **WEEK 7-8: Infrastructure as Code**

### **Terraform Practice**
```hcl
# main.tf
provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "web" {
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t2.micro"
  
  tags = {
    Name = "WebServer"
  }
}

resource "aws_security_group" "web_sg" {
  name = "web-security-group"
  
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
```

**Practice Commands:**
```bash
terraform init
terraform plan
terraform apply
terraform destroy
```

### **Ansible Practice**
```yaml
# playbook.yml
---
- hosts: webservers
  become: yes
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present
    
    - name: Start nginx
      service:
        name: nginx
        state: started
        enabled: yes
```

---

## **WEEK 9-10: Monitoring & Security**

### **Prometheus Configuration**
```yaml
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
  
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['localhost:9100']
```

### **Security Scanning**
```bash
# Container Security
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
  aquasec/trivy image nginx:latest

# Code Security
bandit -r ./src/
safety check requirements.txt
```

---

## **🛠️ DAILY PRACTICE ROUTINE**

### **Morning Routine (30 mins)**
```bash
# System Check
kubectl get nodes
docker ps
systemctl status nginx
df -h && free -m
```

### **Hands-On Labs (2 hours)**
1. **Week 1-2**: Linux + Git + Docker basics
2. **Week 3-4**: Kubernetes + Container orchestration
3. **Week 5-6**: CI/CD pipeline creation
4. **Week 7-8**: Infrastructure automation
5. **Week 9-10**: Monitoring + Security

### **Evening Review (30 mins)**
- Document what you learned
- Update your GitHub portfolio
- Plan next day's practice

---

## **🎯 PRACTICE PROJECTS**

### **Project 1: Simple Web App Deployment**
```bash
# Complete workflow
git clone https://github.com/your-repo/webapp
cd webapp
docker build -t webapp:v1 .
kubectl create deployment webapp --image=webapp:v1
kubectl expose deployment webapp --port=80 --type=LoadBalancer
```

### **Project 2: CI/CD Pipeline**
1. Create GitHub repository
2. Add Dockerfile
3. Set up GitHub Actions
4. Deploy to Kubernetes
5. Add monitoring

### **Project 3: Infrastructure Automation**
1. Write Terraform code
2. Create Ansible playbooks
3. Set up monitoring stack
4. Implement security scanning

---

## **📊 PRACTICE TRACKING**

### **Daily Checklist**
- [ ] Linux commands (10 commands)
- [ ] Git operations (5 operations)
- [ ] Docker tasks (3 tasks)
- [ ] Kubernetes practice (2 tasks)
- [ ] Pipeline work (1 task)

### **Weekly Goals**
- [ ] Complete 1 mini-project
- [ ] Document learnings
- [ ] Update portfolio
- [ ] Practice troubleshooting

---

## **🚀 PRACTICE ENVIRONMENTS**

### **Local Setup**
```bash
# Install essentials
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Kubernetes (minikube)
minikube start
kubectl cluster-info

# Terraform
wget https://releases.hashicorp.com/terraform/1.5.0/terraform_1.5.0_linux_amd64.zip
unzip terraform_1.5.0_linux_amd64.zip
sudo mv terraform /usr/local/bin/
```

### **Cloud Practice**
- **AWS Free Tier**: EC2, S3, RDS
- **Azure Free Account**: VMs, Storage
- **GCP Free Credits**: Compute Engine, GKE

---

## **🎯 SKILL VALIDATION**

### **Self-Assessment Checklist**
- [ ] Can deploy containerized app
- [ ] Can create CI/CD pipeline
- [ ] Can manage Kubernetes cluster
- [ ] Can write Infrastructure as Code
- [ ] Can set up monitoring
- [ ] Can implement security practices

### **Practice Scenarios**
1. **Incident Response**: App is down, debug and fix
2. **Scaling**: Handle traffic spike
3. **Security**: Patch vulnerability
4. **Deployment**: Zero-downtime release

---

## **📚 PRACTICE RESOURCES**

### **Hands-On Platforms**
- **Katacoda**: Interactive scenarios
- **Play with Docker**: Browser-based Docker
- **Play with Kubernetes**: K8s playground
- **AWS Labs**: Hands-on tutorials

### **Practice Repositories**
```bash
git clone https://github.com/dockersamples/example-voting-app
git clone https://github.com/kubernetes/examples
git clone https://github.com/terraform-providers/terraform-provider-aws
```

---

## **🏆 MASTERY MILESTONES**

### **Beginner (Week 1-4)**
- Basic Linux navigation
- Git workflow understanding
- Container creation and management
- Simple Kubernetes deployments

### **Intermediate (Week 5-8)**
- CI/CD pipeline creation
- Infrastructure automation
- Multi-service applications
- Basic monitoring setup

### **Advanced (Week 9-12)**
- Production-ready deployments
- Security implementation
- Performance optimization
- Incident management

---

## **💡 PRACTICE TIPS**

### **Effective Learning**
1. **Break it down**: Small, focused sessions
2. **Document everything**: Keep notes and commands
3. **Practice daily**: Consistency over intensity
4. **Build projects**: Apply knowledge practically
5. **Join communities**: Learn from others

### **Common Mistakes to Avoid**
- Skipping fundamentals
- Not practicing regularly
- Only following tutorials
- Ignoring security
- Not documenting progress

---

## **🚀 SUCCESS FORMULA**

```
Daily Practice + Real Projects + Community Learning = DevOps Mastery
```

**Start today, practice consistently, build continuously!**