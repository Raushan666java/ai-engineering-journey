# ☸️ STAGE 2D — Kubernetes & Scaling

> **Level:** Advanced | **Duration:** 2 Weeks

---

## 📋 Topics
1. Kubernetes Basics
2. Pods, Deployments, Services
3. Horizontal Pod Autoscaler
4. Load Balancing
5. Helm Charts

---

## 1. Kubernetes Basics

### What Is Kubernetes (K8s)?
Container orchestration at scale. Docker runs containers, K8s manages thousands.

```
Docker Compose  → Single server (1-10 containers)
Kubernetes      → Multiple servers (10-10,000+ containers)
```

### Core Concepts
```
Pod         → Smallest unit (1+ containers)
Deployment  → Manages pod replicas
Service     → Network access to pods
Ingress     → External HTTP routing
Namespace   → Logical isolation
ConfigMap   → Configuration
Secret      → Sensitive data
Volume      → Storage
```

### Setup (Local — Minikube)
```bash
# Install minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Start cluster
minikube start

# Install kubectl
sudo snap install kubectl --classic
```

---

## 2. Deployment YAML

### Laravel Deployment
```yaml
# k8s/laravel-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: laravel-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: laravel
  template:
    metadata:
      labels:
        app: laravel
    spec:
      containers:
        - name: laravel
          image: yourregistry/laravel-app:latest
          ports:
            - containerPort: 8080
          env:
            - name: DB_HOST
              value: mysql-service
            - name: REDIS_HOST
              value: redis-service
          resources:
            requests:
              memory: "128Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"
          livenessProbe:
            httpGet:
              path: /health
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: laravel-service
spec:
  selector:
    app: laravel
  ports:
    - port: 80
      targetPort: 8080
  type: ClusterIP
```

### AI Service Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ai-service
spec:
  replicas: 2
  selector:
    matchLabels:
      app: ai-service
  template:
    metadata:
      labels:
        app: ai-service
    spec:
      containers:
        - name: ai-service
          image: yourregistry/ai-service:latest
          ports:
            - containerPort: 8000
          env:
            - name: HF_API_KEY
              valueFrom:
                secretKeyRef:
                  name: ai-secrets
                  key: hf-api-key
          resources:
            requests:
              memory: "256Mi"
              cpu: "500m"
            limits:
              memory: "1Gi"
              cpu: "1000m"
```

---

## 3. Horizontal Pod Autoscaler

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: laravel-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: laravel-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```

### How It Works
```
CPU < 70% → Stay at current replicas
CPU > 70% → Scale up (add more pods)
CPU < 30% → Scale down (remove pods)
Min: 2 pods | Max: 10 pods
```

---

## 4. Ingress (External Access)
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt
spec:
  tls:
    - hosts: [yourdomain.com]
      secretName: tls-secret
  rules:
    - host: yourdomain.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: laravel-service
                port: { number: 80 }
          - path: /ai
            pathType: Prefix
            backend:
              service:
                name: ai-service
                port: { number: 8000 }
```

---

## 5. Essential kubectl Commands
```bash
kubectl get pods                    # List pods
kubectl get deployments             # List deployments
kubectl get services                # List services
kubectl logs <pod-name>             # View logs
kubectl exec -it <pod> -- /bin/sh   # Shell into pod
kubectl apply -f k8s/               # Apply all configs
kubectl scale deployment laravel --replicas=5  # Manual scale
kubectl rollout restart deployment laravel     # Restart
kubectl rollout status deployment laravel      # Check status
```

---

## 🎯 Practice Tasks
- [ ] Set up Minikube locally
- [ ] Deploy Laravel app to Kubernetes
- [ ] Configure Horizontal Pod Autoscaler
- [ ] Set up Ingress with TLS
- [ ] Practice kubectl commands

---

*Next: [AI Core Concepts →](../03_ai-foundations/01_AI_CORE_CONCEPTS.md)*
