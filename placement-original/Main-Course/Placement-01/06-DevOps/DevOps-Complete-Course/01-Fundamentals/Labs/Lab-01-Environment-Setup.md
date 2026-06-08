# 🧪 Lab 01: DevOps Environment Setup

## 🎯 Objective
Set up a complete DevOps development environment with all essential tools.

## 🛠️ Essential Tools Installation

### 1. **Git & Version Control**
```bash
# Install Git
sudo apt install git -y

# Configure Git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main

# Verify
git --version
```

### 2. **Docker & Containerization**
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify
docker --version
docker-compose --version
```

### 3. **Kubernetes Tools**
```bash
# Install kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install kubectl /usr/local/bin/kubectl

# Install Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Verify
kubectl version --client
minikube version
```

### 4. **Cloud CLI Tools**
```bash
# AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Terraform
wget https://releases.hashicorp.com/terraform/1.5.0/terraform_1.5.0_linux_amd64.zip
unzip terraform_1.5.0_linux_amd64.zip
sudo mv terraform /usr/local/bin/

# Verify
aws --version
terraform --version
```

## 🧪 Lab Exercises

### Exercise 1: Environment Verification
```bash
#!/bin/bash
echo "=== DevOps Tools Verification ==="
git --version
docker --version
kubectl version --client
terraform --version
aws --version
echo "=== Setup Complete! ==="
```

### Exercise 2: Docker Test
```bash
# Test Docker installation
docker run hello-world

# Create simple web service
docker run -d -p 8080:80 nginx:alpine
curl http://localhost:8080
docker stop $(docker ps -q)
```

### Exercise 3: Kubernetes Test
```bash
# Start Minikube
minikube start

# Deploy test app
kubectl create deployment test-app --image=nginx
kubectl expose deployment test-app --port=80 --type=NodePort

# Verify
kubectl get pods
kubectl get services

# Cleanup
kubectl delete deployment test-app
kubectl delete service test-app
minikube stop
```

## ✅ Success Criteria
- [ ] All tools installed and verified
- [ ] Docker can run containers
- [ ] Kubernetes cluster operational
- [ ] Cloud CLI tools configured
- [ ] Development workspace ready