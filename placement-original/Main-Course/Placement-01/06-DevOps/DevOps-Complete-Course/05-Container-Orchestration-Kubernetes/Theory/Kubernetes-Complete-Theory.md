# ☸️ Kubernetes - Complete Theory

## 📋 What is Kubernetes?

Kubernetes (K8s) is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.

## 🏗️ Kubernetes Architecture

### Master Components (Control Plane)
- **API Server**: Central management entity
- **etcd**: Distributed key-value store
- **Scheduler**: Assigns pods to nodes
- **Controller Manager**: Manages controllers

### Node Components
- **kubelet**: Node agent
- **kube-proxy**: Network proxy
- **Container Runtime**: Docker/containerd

## 🎯 Core Kubernetes Objects

### Pods
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: app
    image: nginx:latest
    ports:
    - containerPort: 80
```

### Deployments
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: app
        image: nginx:latest
```

### Services
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer
```

## 🔧 Essential Commands

### Cluster Management
```bash
kubectl cluster-info
kubectl get nodes
kubectl describe node <node-name>
```

### Pod Management
```bash
kubectl get pods
kubectl describe pod <pod-name>
kubectl logs <pod-name>
kubectl exec -it <pod-name> -- bash
```

### Deployment Management
```bash
kubectl create deployment my-app --image=nginx
kubectl scale deployment my-app --replicas=5
kubectl rollout status deployment/my-app
kubectl rollout undo deployment/my-app
```

## 🌐 Networking

### Service Types
- **ClusterIP**: Internal cluster access
- **NodePort**: External access via node port
- **LoadBalancer**: Cloud load balancer
- **ExternalName**: DNS CNAME record

### Ingress
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-service
            port:
              number: 80
```

## 💾 Storage

### Persistent Volumes
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-pv
spec:
  capacity:
    storage: 10Gi
  accessModes:
  - ReadWriteOnce
  hostPath:
    path: /data
```

### Persistent Volume Claims
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
```

## 🔒 Security

### RBAC
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]
```

### Network Policies
```yaml
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

## 📊 Monitoring & Scaling

### Horizontal Pod Autoscaler
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-deployment
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

## 🛠️ Best Practices

### Resource Management
- Set resource requests and limits
- Use namespaces for organization
- Implement health checks
- Use ConfigMaps and Secrets

### Deployment Strategies
- Rolling updates for zero downtime
- Blue-green deployments
- Canary releases
- A/B testing