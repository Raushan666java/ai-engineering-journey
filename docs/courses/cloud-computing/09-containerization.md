# Chapter 9: Containerization and Orchestration

> **Previous:** [Chapter 8: Serverless Computing](./08-serverless.md) | **Next:** [Chapter 10: Cloud Architecture Design](./10-architecture.md)

## Learning Objectives

After completing this chapter, students will be able to:

1. Build and optimize Docker images for cloud deployment.
2. Orchestrate containers with Kubernetes for production workloads.
3. Design pod, service, and deployment configurations.
4. Implement CI/CD pipelines for containerized applications.
5. Configure auto-scaling and resource limits for container workloads.
6. Manage container registries and image lifecycle policies.
7. Apply security scanning and runtime protection for containers.
8. Compare ECS, EKS, Fargate, and self-managed Kubernetes trade-offs.

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| Docker | Container images package code + dependencies | Build once, run anywhere |
| Kubernetes | Container orchestration | Pods, Services, Deployments |
| ECS vs EKS | AWS-native vs standard Kubernetes | ECS simpler, EKS more portable |
| Fargate | Serverless containers | No node management, higher cost |
| CI/CD | Automated build, test, deploy | Integrate with ECR and EKS |
| Auto-Scaling | HPA, Cluster Autoscaler, KEDA | Scale pods and nodes based on metrics |
| Security | Image scanning, runtime protection | Scan in pipeline, enforce at runtime |
| Service Mesh | Istio, App Mesh | Traffic management, observability |

## Chapter Roadmap

\\\mermaid
flowchart LR
    A[Containerization] --> B[Docker Images]
    A --> C[Container Registries ECR]
    C --> D[Orchestration]
    D --> E[ECS]
    D --> F[EKS / Kubernetes]
    D --> G[Fargate]
    F --> H[Pods, Services, Deployments]
    H --> I[Auto-Scaling HPA + CA]
    H --> J[Security: RBAC, PodSecurity, NetworkPolicies]
\\\

## Theory

### 9.1 Docker Fundamentals

Docker packages an application with all its dependencies into a portable image file.

**Dockerfile Layers:**

\\\dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/index.js"]
\\\

**Multi-stage builds** reduce final image size by separating build dependencies from runtime. The first stage includes TypeScript compiler, Dev dependencies; the second stage contains only the compiled output and production node_modules.

**Image Optimization:**

| Technique | Impact | Implementation |
|-----------|--------|----------------|
| Multi-stage builds | 5-10x smaller images | Separate build and runtime stages |
| Alpine base images | ~100 MB vs ~1 GB | Use alpine or distroless variants |
| .dockerignore | Faster builds, smaller context | Exclude node_modules, .git, tests |
| Layer caching | Faster CI builds | Order COPY by change frequency |
| Distroless images | Minimal attack surface | No shell, no package manager |

\\\mermaid
graph TB
    subgraph "Docker Build Process"
        A[Dockerfile] --> B[Layer 1: OS Base]
        B --> C[Layer 2: Dependencies]
        C --> D[Layer 3: Application Code]
        D --> E[Layer 4: Entrypoint]
        E --> F[Final Image]
        
        G[.dockerignore] --> A
        H[Build Cache] --> B
        H --> C
    end
    
    subgraph "Image Registries"
        F --> I[Local Docker]
        F --> J[Amazon ECR]
        F --> K[Docker Hub]
        F --> L[GCR / Artifact Registry]
    end
\\\

### 9.2 Kubernetes Core Concepts

**Pods:** Smallest deployable unit in Kubernetes. One or more containers sharing network and storage.

**Services:** Stable network endpoint for a set of pods. Types: ClusterIP (internal), NodePort (node port), LoadBalancer (cloud LB).

**Deployments:** Declarative updates for pods and ReplicaSets. Supports rolling updates and rollbacks.

**ConfigMaps & Secrets:** External configuration injected into pods. ConfigMaps for non-sensitive, Secrets for sensitive data.

\\\yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
  labels:
    app: web
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
      - name: app
        image: 123456789.dkr.ecr.us-east-1.amazonaws.com/web-app:1.2.3
        ports:
        - containerPort: 3000
        resources:
          requests:
            cpu: 250m
            memory: 256Mi
          limits:
            cpu: 500m
            memory: 512Mi
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  type: LoadBalancer
  selector:
    app: web
  ports:
  - port: 80
    targetPort: 3000
\\\

### 9.3 Kubernetes Architecture

\\\mermaid
graph TB
    subgraph "Kubernetes Cluster"
        subgraph "Control Plane"
            API[API Server]
            ETCD[etcd]
            SCH[Schedule]
            CONTR[Controller Manager]
            API --> ETCD
            API --> SCH
            API --> CONTR
        end
        
        subgraph "Worker Node 1"
            KUBE1[kubelet]
            POD_A[Pod: app v1]
            POD_B[Pod: app v1]
        end
        
        subgraph "Worker Node 2"
            KUBE2[kubelet]
            POD_C[Pod: app v1]
            POD_D[Pod: sidecar]
        end
        
        API --> KUBE1
        API --> KUBE2
    end
    
    INGRESS[Ingress] --> SVC[Service: web]
    SVC --> POD_A
    SVC --> POD_B
    SVC --> POD_C
\\\

### 9.4 Auto-Scaling

**Horizontal Pod Autoscaler (HPA):** Scales pods based on CPU, memory, or custom metrics.

\\\yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: web-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: web-app
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
\\\

**Cluster Autoscaler:** Adds or removes worker nodes based on unschedulable pods. Integrates with EC2 Auto Scaling Groups.

**KEDA (Kubernetes Event-Driven Autoscaling):** Scales based on event sources: SQS queue length, Kafka lag, Prometheus metrics, custom scalers.

\\\	ypescript
interface AutoScalingConfig {
  minReplicas: number;
  maxReplicas: number;
  targetCPUUtilization: number;
  scaleUpCooldown: number;
  scaleDownCooldown: number;
}

class ScalingCalculator {
  constructor(private config: AutoScalingConfig) {}

  calculateDesiredReplicas(currentCPULoad: number): number {
    const target = this.config.targetCPUUtilization;
    const ratio = currentCPULoad / target;
    const desired = Math.ceil(this.config.minReplicas * ratio);
    return Math.min(Math.max(desired, this.config.minReplicas), this.config.maxReplicas);
  }
}

const calc = new ScalingCalculator({ minReplicas: 3, maxReplicas: 20, targetCPUUtilization: 70, scaleUpCooldown: 60, scaleDownCooldown: 300 });
console.log("Desired replicas at 90% CPU:", calc.calculateDesiredReplicas(90));
\\\

### 9.5 Container Storage

| Storage Type | Kubernetes Volume Type | Use Case |
|-------------|----------------------|----------|
| Ephemeral | emptyDir | Temporary scratch space, cache |
| Persistent | PersistentVolumeClaim | Databases, stateful apps |
| Shared | NFS / EFS | Multi-pod shared access |
| High-Perf | EBS / Local SSD | Low-latency storage |

**StatefulSets:** For stateful applications requiring stable network identities and persistent storage per pod.

\\\yaml
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
    spec:
      containers:
      - name: postgres
        image: postgres:16
        volumeMounts:
        - name: data
          mountPath: /var/lib/postgresql/data
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 100Gi
\\\

### 9.6 Container Security

| Security Layer | Kubernetes Feature | Purpose |
|---------------|--------------------|---------|
| Image Scanning | ECR scanning, Trivy | Find vulnerabilities before deploy |
| Network Policy | NetworkPolicy objects | Control pod-to-pod traffic |
| Pod Security | Pod Security Standards | Restrict privileged containers |
| RBAC | Roles, RoleBindings | Least privilege access to K8s API |
| Secrets | etcd encryption | Encrypt secrets at rest |
| Runtime | Falco, Sysdig | Detect anomalous behavior |

**Pod Security Standards:**

- **Privileged:** Unrestricted. For system-level components (rare).
- **Baseline:** Minimal restrictions. Default for most workloads.
- **Restricted:** Maximum security. No privileged containers, read-only root filesystem.

\\\	ypescript
interface ContainerImage {
  name: string;
  tag: string;
  digest: string;
  vulnerabilities: { critical: number; high: number; medium: number };
}

class ImageScanner {
  async scan(imageName: string): Promise<ContainerImage> {
    return {
      name: imageName,
      tag: "latest",
      digest: "sha256:abc123",
      vulnerabilities: { critical: 0, high: 2, medium: 5 },
    };
  }

  isDeployable(image: ContainerImage, maxCritical = 0, maxHigh = 5): boolean {
    if (image.vulnerabilities.critical > maxCritical) {
      console.log("BLOCKED:", image.name, "has", image.vulnerabilities.critical, "critical vulns");
      return false;
    }
    if (image.vulnerabilities.high > maxHigh) {
      console.log("BLOCKED:", image.name, "has", image.vulnerabilities.high, "high vulns");
      return false;
    }
    return true;
  }
}

async function checkImage(): Promise<void> {
  const scanner = new ImageScanner();
  const result = await scanner.scan("web-app:latest");
  console.log("Deployable:", scanner.isDeployable(result));
}
\\\

### 9.7 ECS vs EKS vs Fargate

| Feature | ECS | EKS | Fargate |
|---------|-----|-----|---------|
| Kubernetes | No (AWS-native) | Yes (standard K8s) | Yes (with EKS or ECS) |
| Node Management | EC2 launch type | Managed node groups | No nodes to manage |
| Portability | AWS-only | Portable across clouds | AWS-only |
| Complexity | Lower | Higher | Lowest |
| Cost | EC2 pricing | EC2 + control plane \.10/hr | Per-task pricing (higher) |
| Control | Limited | Full K8s API | Limited |

## Examples

### Example 9.1: Multi-Stage TypeScript Dockerfile

\\\dockerfile
FROM node:20-alpine AS builder
WORKDIR /build
COPY tsconfig.json package*.json ./
RUN npm ci
COPY src/ src/
RUN npm run build

FROM node:20-alpine
RUN apk add --no-cache tini
WORKDIR /app
COPY --from=builder /build/dist ./dist
COPY --from=builder /build/node_modules ./node_modules
EXPOSE 3000
USER node
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "dist/index.js"]
\\\

### Example 9.2: CI/CD Pipeline (GitHub Actions)

\\\yaml
name: Build and Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Build and scan
      run: |
        docker build -t app:latest .
        docker run app:latest npm test
    - name: Push to ECR and deploy to EKS
      run: |
        aws ecr get-login-password | docker login --password-stdin
        docker tag app:latest \/app:latest
        docker push \/app:latest
        kubectl set image deployment/web-app app=\/app:latest
\\\

### Example 9.3: Docker Compose Local Development

\\\yaml
version: "3.8"
services:
  api:
    build: .
    ports: ["3000:3000"]
    environment:
      - DB_HOST=postgres
    depends_on: [postgres]
    volumes:
      - ./src:/app/src
  postgres:
    image: postgres:16
    environment:
      POSTGRES_DB: myapp
      POSTGRES_PASSWORD: devpassword
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:
\\\

> **One-Sentence Takeaway:** Containers provide consistent, portable application packaging; Kubernetes orchestrates them at scale; and choosing ECS vs EKS vs Fargate is a trade-off between simplicity, portability, and cost.

> **Pro Tip:** Always set resource requests and limits on every container. Without limits, one container can starve the entire node. Without requests, the scheduler cannot make informed placement decisions.

> **Warning:** Default Kubernetes Secrets are only base64-encoded, not encrypted. Enable etcd encryption at rest and use external secrets management (AWS Secrets Manager via CSI driver) for production secrets.

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| Docker Image | Portable application package | Build once, run anywhere | Container packaging |
| Pod | Smallest K8s deployable unit | One or more containers | Application instances |
| Deployment | Declarative pod management | Rolling updates, rollbacks | Stateless apps |
| Service | Stable network endpoint for pods | Load-balanced access | Internal or external traffic |
| StatefulSet | Stateful pod management | Stable identity, storage | Databases, queues |
| ConfigMap / Secret | External configuration | Non-sensitive vs sensitive | Feature flags, DB passwords |
| HPA | Pod scaling | CPU, memory, custom metrics | Auto-scaling workloads |
| Ingress | HTTP(S) routing to services | Path-based, TLS termination | API routing |

## Quick Reference

| Category | Key Concepts | Notes |
|----------|-------------|-------|
| **Docker** | Images, containers, Dockerfile, multi-stage builds | Alpine for small images |
| **Kubernetes** | Pods, Deployments, Services, ConfigMaps | Declarative YAML config |
| **AWS** | ECS, EKS, Fargate, ECR, App Mesh | ECS simpler, EKS portable |
| **Scaling** | HPA, Cluster Autoscaler, KEDA | CPU, queue, event-driven |
| **Security** | Image scan, RBAC, NetworkPolicy, Falco | Defense in depth |
| **CI/CD** | Docker build, push, deploy pipeline | Automate the entire flow |

## Cross-Application Matrix

| Technique | Cloud Architecture | DevOps | Security | Enterprise |
|-----------|-------------------|--------|----------|------------|
| Multi-stage Builds | Smaller images | Faster CI/CD | Reduced attack surface | Lower costs |
| K8s RBAC | Access control | CI/CD service accounts | Least privilege | Multi-team isolation |
| HPA + CA | Auto-scaling | Cost optimization | DDoS resilience | Performance SLAs |
| Network Policies | Micro-segmentation | Environment isolation | Zero trust networking | Compliance |
| Image Scanning | Secure supply chain | Pipeline gate | Vulnerability management | Audit compliance |

## Chapter Quiz

1. What is the primary benefit of multi-stage Docker builds?
   - A) Faster local development
   - B) Smaller final image by separating build and runtime dependencies
   - C) Better security through network isolation
   - D) Automatic deployment to Kubernetes

<details>
<summary>Answer</summary>
**B) Smaller final image by separating build and runtime dependencies.** Multi-stage builds use one stage with all build tools to compile the application, then copy only the compiled artifacts to a minimal runtime stage — reducing image size by 5-10x.
</details>

2. Which Kubernetes resource provides stable networking for a set of pods?
   - A) Deployment
   - B) Service
   - C) ConfigMap
   - D) Ingress

<details>
<summary>Answer</summary>
**B) Service.** Services provide a stable DNS name and IP address for a set of pods, which can change as pods are created and destroyed. Ingress is for HTTP routing; Deployments manage pod lifecycle.
</details>

3. What is the difference between ECS and EKS?
   - A) ECS is AWS-native; EKS uses standard Kubernetes
   - B) ECS is cheaper than EKS
   - C) ECS supports Windows containers; EKS does not
   - D) There is no difference

<details>
<summary>Answer</summary>
**A) ECS is AWS-native; EKS uses standard Kubernetes.** ECS uses AWS-proprietary scheduling while EKS runs standard Kubernetes, making workloads portable across clouds and on-premises K8s clusters.
</details>

4. What happens if a container does not specify resource limits?
   - A) It is limited to default Kubernetes limits
   - B) It can consume all CPU and memory on the node, starving other pods
   - C) It is automatically assigned limits matching its requests
   - D) The pod is not scheduled

<details>
<summary>Answer</summary>
**B) It can consume all CPU and memory on the node, starving other pods.** Without limits, a container can use unbounded resources. Always set both resource requests (for scheduling) and limits (to prevent resource starvation).
</details>

5. Which Kubernetes security resource controls pod-to-pod traffic?
   - A) RBAC
   - B) Pod Security Standards
   - C) NetworkPolicy
   - D) Secret

<details>
<summary>Answer</summary>
**C) NetworkPolicy.** NetworkPolicy controls which pods can communicate with each other at the network level. RBAC controls API access; Pod Security Standards control pod capabilities.
</details>

### TypeScript: Container Orchestrator Simulator

```typescript
interface PodSpec { cpu: number; mem: number; image: string; replicas: number; }
interface NodeResource { cpu: number; mem: number; }

class KubeScheduler {
  private nodes: Map<string, { capacity: NodeResource; allocatable: NodeResource }> = new Map();

  addNode(name: string, cpu: number, mem: number): void {
    this.nodes.set(name, {
      capacity: { cpu, mem },
      allocatable: { cpu, mem },
    });
  }

  schedule(pod: PodSpec): string[] {
    const assignments: string[] = [];
    for (let i = 0; i < pod.replicas; i++) {
      for (const [name, node] of this.nodes) {
        if (node.allocatable.cpu >= pod.cpu && node.allocatable.mem >= pod.mem) {
          node.allocatable.cpu -= pod.cpu;
          node.allocatable.mem -= pod.mem;
          assignments.push(`${pod.image}@${name}`);
          break;
        }
      }
    }
    return assignments;
  }

  utilization(): Record<string, { cpuPct: number; memPct: number }> {
    const result: Record<string, any> = {};
    for (const [name, node] of this.nodes) {
      result[name] = {
        cpuPct: ((node.capacity.cpu - node.allocatable.cpu) / node.capacity.cpu) * 100,
        memPct: ((node.capacity.mem - node.allocatable.mem) / node.capacity.mem) * 100,
      };
    }
    return result;
  }
}
```

## Summary

- Docker packages applications with dependencies into portable images.
- Kubernetes orchestrates containers at scale with self-healing and rolling updates.
- Multi-stage builds significantly reduce production image sizes.
- Fargate removes node management overhead at higher per-task cost.
- Container security spans image scanning, RBAC, and runtime protection.
- HPA scales pods on CPU/memory; Cluster Autoscaler scales nodes.
- ECS and EKS offer managed Kubernetes with different trade-offs.
- Docker containers provide consistent, portable application packaging through images.
- Kubernetes orchestrates containers with Pods, Services, Deployments, and ConfigMaps.
- Multi-stage builds and Alpine base images significantly reduce container image size.
- Auto-scaling combines HPA (pod scaling) with Cluster Autoscaler (node scaling).
- ECS offers simpler AWS-native orchestration; EKS provides standard Kubernetes portability.
- Fargate eliminates node management at a higher per-task cost.
- Container security spans image scanning, RBAC, Network Policies, and runtime protection.

## Exercises

### Review Questions

1. Explain the difference between ECS, EKS, and Fargate and when to use each.
2. What is a multi-stage Docker build and why is it important for production images?
3. Describe the relationship between Pods, Services, and Deployments in Kubernetes.
4. How does Horizontal Pod Autoscaling work and what metrics can trigger scaling?
5. What security measures should be applied to container workloads in production?
6. Compare StatefulSets vs Deployments and when to use each.

### Application Problems

1. Write a multi-stage Dockerfile for a TypeScript application that produces an image under 150 MB.

2. Design a Kubernetes deployment for a Node.js web app with environment-specific ConfigMaps, secrets from Secrets Manager, and an ALB Ingress.

3. A container periodically consumes 200% CPU during batch processing. Design a resource configuration and autoscaling strategy that handles this spike without affecting other workloads.

4. Create a CI/CD pipeline for a containerized application with build, scan, push, and deploy stages using GitHub Actions and EKS.

5. Design a service mesh architecture with traffic splitting for canary deployments of a microservice in EKS.

### Challenge Problem

Design a complete container platform for a SaaS company migrating from EC2. Requirements: 1) Multi-tenant isolation at the cluster level, 2) Auto-scaling based on SQS queue depth and CPU, 3) Blue/green deployments with traffic shifting, 4) Centralized logging and monitoring, 5) Secret rotation without pod restart, 6) Network policies enforcing zero trust, 7) Image scanning gating the pipeline, 8) Cost allocation per tenant. Propose specific services, YAML configurations, and architecture diagrams.
