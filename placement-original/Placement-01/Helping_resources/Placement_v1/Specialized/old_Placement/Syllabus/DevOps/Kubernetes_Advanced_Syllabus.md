# ☸️ Kubernetes Advanced Syllabus
*Duration: 6 weeks | Focus: Production K8s*

## Week 1: Architecture & Core Concepts 🟢

### Cluster Architecture
```
Master Node:
- kube-apiserver: REST API gateway
- etcd: Distributed key-value store
- kube-scheduler: Pod placement
- kube-controller-manager: Controllers
- cloud-controller-manager: Cloud APIs

Worker Node:
- kubelet: Node agent
- kube-proxy: Network proxy
- Container Runtime: Docker/containerd
```

### Core Resources
```yaml
# Pod - Basic unit
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:1.20
    ports:
    - containerPort: 80
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"

# Deployment - Manages ReplicaSets
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
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
        image: nginx:1.20
        ports:
        - containerPort: 80

# Service - Network abstraction
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer
```

### kubectl Commands
```bash
# Cluster info
kubectl cluster-info
kubectl get nodes
kubectl describe node node-name

# Resource management
kubectl get pods -A
kubectl describe pod pod-name
kubectl logs pod-name -f
kubectl exec -it pod-name -- bash

# Apply configurations
kubectl apply -f deployment.yaml
kubectl delete -f deployment.yaml
kubectl scale deployment nginx --replicas=5
```

## Week 2: Advanced Workloads 🟡

### StatefulSets
```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: postgres
  replicas: 3
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

### DaemonSets & Jobs
```yaml
# DaemonSet - One pod per node
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluentd
spec:
  selector:
    matchLabels:
      name: fluentd
  template:
    metadata:
      labels:
        name: fluentd
    spec:
      containers:
      - name: fluentd
        image: fluentd:latest
        volumeMounts:
        - name: varlog
          mountPath: /var/log
      volumes:
      - name: varlog
        hostPath:
          path: /var/log

# Job - Run to completion
apiVersion: batch/v1
kind: Job
metadata:
  name: data-migration
spec:
  template:
    spec:
      containers:
      - name: migration
        image: migrate:latest
        command: ["migrate", "up"]
      restartPolicy: Never
  backoffLimit: 4

# CronJob - Scheduled jobs
apiVersion: batch/v1
kind: CronJob
metadata:
  name: backup
spec:
  schedule: "0 2 * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: backup
            image: backup:latest
            command: ["backup.sh"]
          restartPolicy: OnFailure
```

## Week 3: Configuration & Storage 🟡

### ConfigMaps & Secrets
```yaml
# ConfigMap
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database.properties: |
    db.host=postgres-service
    db.port=5432
  app.properties: |
    log.level=INFO
    cache.enabled=true

# Secret
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
type: Opaque
data:
  db-password: cGFzc3dvcmQ=  # base64 encoded
  api-key: YWJjZGVmZ2g=

# Using in Pod
apiVersion: v1
kind: Pod
metadata:
  name: app-pod
spec:
  containers:
  - name: app
    image: myapp:latest
    env:
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: app-secret
          key: db-password
    volumeMounts:
    - name: config-volume
      mountPath: /etc/config
  volumes:
  - name: config-volume
    configMap:
      name: app-config
```

### Persistent Volumes
```yaml
# PersistentVolume
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

# PersistentVolumeClaim
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: fast-ssd

# StorageClass
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast-ssd
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
  fsType: ext4
allowVolumeExpansion: true
```

## Week 4: Networking & Security 🟠

### Services & Ingress
```yaml
# ClusterIP Service
apiVersion: v1
kind: Service
metadata:
  name: backend-service
spec:
  selector:
    app: backend
  ports:
  - port: 80
    targetPort: 8080
  type: ClusterIP

# Ingress
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
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
            name: frontend-service
            port:
              number: 80
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: backend-service
            port:
              number: 80
```

### RBAC & Security
```yaml
# ServiceAccount
apiVersion: v1
kind: ServiceAccount
metadata:
  name: app-service-account

# Role
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]

# RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
subjects:
- kind: ServiceAccount
  name: app-service-account
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io

# NetworkPolicy
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

## Week 5: Monitoring & Troubleshooting 🟠

### Monitoring Setup
```yaml
# Prometheus
apiVersion: apps/v1
kind: Deployment
metadata:
  name: prometheus
spec:
  replicas: 1
  selector:
    matchLabels:
      app: prometheus
  template:
    metadata:
      labels:
        app: prometheus
    spec:
      containers:
      - name: prometheus
        image: prom/prometheus
        ports:
        - containerPort: 9090
        volumeMounts:
        - name: config-volume
          mountPath: /etc/prometheus
      volumes:
      - name: config-volume
        configMap:
          name: prometheus-config

# Grafana
apiVersion: apps/v1
kind: Deployment
metadata:
  name: grafana
spec:
  replicas: 1
  selector:
    matchLabels:
      app: grafana
  template:
    metadata:
      labels:
        app: grafana
    spec:
      containers:
      - name: grafana
        image: grafana/grafana
        ports:
        - containerPort: 3000
        env:
        - name: GF_SECURITY_ADMIN_PASSWORD
          value: admin
```

### Troubleshooting Commands
```bash
# Pod debugging
kubectl describe pod pod-name
kubectl logs pod-name --previous
kubectl exec -it pod-name -- /bin/bash

# Events and debugging
kubectl get events --sort-by=.metadata.creationTimestamp
kubectl top nodes
kubectl top pods

# Network debugging
kubectl exec -it pod-name -- nslookup service-name
kubectl port-forward pod/pod-name 8080:80

# Resource debugging
kubectl describe node node-name
kubectl get pods -o wide
kubectl get endpoints
```

## Week 6: Production & Advanced Topics 🔴

### Helm Package Manager
```yaml
# Chart.yaml
apiVersion: v2
name: myapp
description: My Application Helm Chart
version: 0.1.0
appVersion: "1.0"

# values.yaml
replicaCount: 3
image:
  repository: myapp
  tag: latest
  pullPolicy: IfNotPresent
service:
  type: ClusterIP
  port: 80
ingress:
  enabled: true
  host: myapp.example.com

# templates/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include "myapp.fullname" . }}
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      {{- include "myapp.selectorLabels" . | nindent 6 }}
  template:
    metadata:
      labels:
        {{- include "myapp.selectorLabels" . | nindent 8 }}
    spec:
      containers:
      - name: {{ .Chart.Name }}
        image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
        ports:
        - containerPort: 80
```

### Cluster Management
```bash
# Helm commands
helm create myapp
helm install myapp ./myapp
helm upgrade myapp ./myapp
helm rollback myapp 1

# Cluster operations
kubectl drain node-name --ignore-daemonsets
kubectl cordon node-name
kubectl uncordon node-name

# Backup and restore
kubectl get all --all-namespaces -o yaml > cluster-backup.yaml
etcdctl snapshot save backup.db
```

### Production Best Practices
```yaml
# Resource quotas
apiVersion: v1
kind: ResourceQuota
metadata:
  name: compute-quota
spec:
  hard:
    requests.cpu: "1"
    requests.memory: 1Gi
    limits.cpu: "2"
    limits.memory: 2Gi
    persistentvolumeclaims: "4"

# Pod Disruption Budget
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: myapp-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: myapp

# HorizontalPodAutoscaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

## Interview Questions
1. Kubernetes architecture components
2. Pod vs Deployment vs StatefulSet
3. Service types and use cases
4. ConfigMap vs Secret differences
5. RBAC implementation
6. Troubleshooting pod issues
7. Helm charts and templating
8. Cluster scaling strategies
9. Network policies and security
10. Production deployment patterns

## Hands-on Projects
- Multi-tier application deployment
- CI/CD pipeline with Kubernetes
- Monitoring and logging setup
- Security hardening implementation
- Disaster recovery planning

## Certification Path
- **CKA**: Certified Kubernetes Administrator
- **CKAD**: Certified Kubernetes Application Developer
- **CKS**: Certified Kubernetes Security Specialist