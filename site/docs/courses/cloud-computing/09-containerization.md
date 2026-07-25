---
slug: /cloud-computing/09-containerization
title: "Chapter 9: Containerization and Orchestration"
sidebar_label: "Chapter 9: Containerization and Orchestration"
sidebar_position: 9
---
# Chapter 9: Containerization and Orchestration

> **Previous:** [Chapter 8: Serverless Computing](./08-serverless.md) | **Next:** [Chapter 10: Cloud Architecture Design](./10-architecture.md)

## Learning Objectives

After completing this chapter, students will be able to:

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/cloud-computing/09-containerization/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/cloud-computing/09-containerization/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/cloud-computing/09-containerization/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/cloud-computing/09-containerization/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/cloud-computing/09-containerization/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/cloud-computing/09-containerization/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


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
  async scan(imageName: string): Promise&lt;ContainerImage&gt; {
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

async function checkImage(): Promise&lt;void&gt; {
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
<summary>Answer&lt;/summary&gt;
**B) Smaller final image by separating build and runtime dependencies.** Multi-stage builds use one stage with all build tools to compile the application, then copy only the compiled artifacts to a minimal runtime stage ? reducing image size by 5-10x.
</details>

2. Which Kubernetes resource provides stable networking for a set of pods?
   - A) Deployment
   - B) Service
   - C) ConfigMap
   - D) Ingress

<details>
<summary>Answer&lt;/summary&gt;
**B) Service.** Services provide a stable DNS name and IP address for a set of pods, which can change as pods are created and destroyed. Ingress is for HTTP routing; Deployments manage pod lifecycle.
</details>

3. What is the difference between ECS and EKS?
   - A) ECS is AWS-native; EKS uses standard Kubernetes
   - B) ECS is cheaper than EKS
   - C) ECS supports Windows containers; EKS does not
   - D) There is no difference

<details>
<summary>Answer&lt;/summary&gt;
**A) ECS is AWS-native; EKS uses standard Kubernetes.** ECS uses AWS-proprietary scheduling while EKS runs standard Kubernetes, making workloads portable across clouds and on-premises K8s clusters.
</details>

4. What happens if a container does not specify resource limits?
   - A) It is limited to default Kubernetes limits
   - B) It can consume all CPU and memory on the node, starving other pods
   - C) It is automatically assigned limits matching its requests
   - D) The pod is not scheduled

<details>
<summary>Answer&lt;/summary&gt;
**B) It can consume all CPU and memory on the node, starving other pods.** Without limits, a container can use unbounded resources. Always set both resource requests (for scheduling) and limits (to prevent resource starvation).
</details>

5. Which Kubernetes security resource controls pod-to-pod traffic?
   - A) RBAC
   - B) Pod Security Standards
   - C) NetworkPolicy
   - D) Secret

<details>
<summary>Answer&lt;/summary&gt;
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

### TypeScript: Kubernetes Pod Resource Scheduler

```typescript
interface Pod {
  name: string;
  cpuRequest: number;
  memoryRequestGB: number;
  cpuLimit: number;
  memoryLimitGB: number;
  priority: number;
  namespace: string;
}

interface NodeResource {
  name: string;
  allocatableCPU: number;
  allocatableMemoryGB: number;
  allocatedCPU: number;
  allocatedMemoryGB: number;
  labels: Record<string, string>;
}

class K8sScheduler {
  private nodes: NodeResource[] = [];

  addNode(node: Omit<NodeResource, "allocatedCPU" | "allocatedMemoryGB">): void {
    this.nodes.push({ ...node, allocatedCPU: 0, allocatedMemoryGB: 0 });
  }

  schedule(pod: Pod): { node: string; status: "scheduled" | "pending" } {
    const candidates = this.nodes
      .filter((n) =>
        n.allocatedCPU + pod.cpuRequest <= n.allocatableCPU &&
        n.allocatedMemoryGB + pod.memoryRequestGB <= n.allocatableMemoryGB
      )
      .sort((a, b) => {
        const aScore = (a.allocatedCPU + pod.cpuRequest) / a.allocatableCPU +
          (a.allocatedMemoryGB + pod.memoryRequestGB) / a.allocatableMemoryGB;
        const bScore = (b.allocatedCPU + pod.cpuRequest) / b.allocatableCPU +
          (b.allocatedMemoryGB + pod.memoryRequestGB) / b.allocatableMemoryGB;
        return aScore - bScore;
      });

    if (candidates.length === 0) return { node: "", status: "pending" };

    const node = candidates[0];
    node.allocatedCPU += pod.cpuRequest;
    node.allocatedMemoryGB += pod.memoryRequestGB;
    return { node: node.name, status: "scheduled" };
  }

  scheduleBatch(pods: Pod[]): { scheduled: number; pending: number; report: { pod: string; node: string }[] } {
    const sorted = [...pods].sort((a, b) => b.priority - a.priority);
    const report: { pod: string; node: string }[] = [];
    let pending = 0;

    for (const pod of sorted) {
      const result = this.schedule(pod);
      if (result.status === "scheduled") report.push({ pod: pod.name, node: result.node });
      else pending++;
    }

    return { scheduled: report.length, pending, report };
  }

  getUtilization(): { node: string; cpuPercent: number; memPercent: number }[] {
    return this.nodes.map((n) => ({
      node: n.name,
      cpuPercent: Math.round((n.allocatedCPU / n.allocatableCPU) * 100),
      memPercent: Math.round((n.allocatedMemoryGB / n.allocatableMemoryGB) * 100),
    }));
  }
}

const scheduler = new K8sScheduler();
scheduler.addNode({ name: "node-1", allocatableCPU: 16, allocatableMemoryGB: 64, labels: { "node-type": "general" } });
scheduler.addNode({ name: "node-2", allocatableCPU: 32, allocatableMemoryGB: 128, labels: { "node-type": "compute" } });
scheduler.addNode({ name: "node-3", allocatableCPU: 8, allocatableMemoryGB: 32, labels: { "node-type": "general" } });

const pods: Pod[] = [
  { name: "web-1", cpuRequest: 1, memoryRequestGB: 2, cpuLimit: 2, memoryLimitGB: 4, priority: 5, namespace: "prod" },
  { name: "web-2", cpuRequest: 1, memoryRequestGB: 2, cpuLimit: 2, memoryLimitGB: 4, priority: 5, namespace: "prod" },
  { name: "db-1", cpuRequest: 4, memoryRequestGB: 16, cpuLimit: 8, memoryLimitGB: 32, priority: 10, namespace: "prod" },
  { name: "batch-1", cpuRequest: 8, memoryRequestGB: 32, cpuLimit: 16, memoryLimitGB: 64, priority: 3, namespace: "batch" },
  { name: "cache-1", cpuRequest: 2, memoryRequestGB: 8, cpuLimit: 4, memoryLimitGB: 16, priority: 7, namespace: "prod" },
];

const batchResult = scheduler.scheduleBatch(pods);
console.log(`Scheduled: ${batchResult.scheduled}, Pending: ${batchResult.pending}`);
console.log("Node utilization:", JSON.stringify(scheduler.getUtilization(), null, 2));
```

### TypeScript: Docker Layer Cache Simulator

```typescript
interface Layer {
  id: string;
  command: string;
  sizeMB: number;
  cacheHit: boolean;
}

interface Dockerfile {
  baseImage: string;
  layers: { command: string; sizeMB: number }[];
}

class DockerBuildCache {
  private cache: Map<string, Layer[]> = new Map();
  private hitCount: number = 0;
  private missCount: number = 0;

  private hashLayer(command: string): string {
    let hash = 0;
    for (let i = 0; i < command.length; i++) {
      const char = command.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0;
    }
    return `layer-${Math.abs(hash).toString(16).slice(0, 8)}`;
  }

  build(dockerfile: Dockerfile, tag: string): Layer[] {
    const result: Layer[] = [];
    let invalidated = false;

    const cached = this.cache.get(tag) || [];

    for (const layerDef of dockerfile.layers) {
      const layerId = this.hashLayer(layerDef.command);
      const cachedLayer = cached.find((l) => l.id === layerId && !invalidated);

      if (cachedLayer) {
        result.push({ ...cachedLayer, cacheHit: true });
        this.hitCount++;
      } else {
        result.push({ id: layerId, command: layerDef.command, sizeMB: layerDef.sizeMB, cacheHit: false });
        this.missCount++;
        invalidated = true;
      }
    }

    this.cache.set(tag, result);
    console.log(`Build ${tag}: ${result.filter((l) => l.cacheHit).length} cache hits, ${result.filter((l) => !l.cacheHit).length} new layers`);
    return result;
  }

  getStats(): { hitRatio: number; totalBuilds: number; cacheSizeMB: number } {
    const total = this.hitCount + this.missCount;
    const allLayers = [...this.cache.values()].flat();
    return {
      hitRatio: total > 0 ? Math.round((this.hitCount / total) * 10000) / 100 : 0,
      totalBuilds: this.cache.size,
      cacheSizeMB: allLayers.reduce((s, l) => s + l.sizeMB, 0),
    };
  }
}

const cache = new DockerBuildCache();
const appDockerfile: Dockerfile = {
  baseImage: "node:20-alpine",
  layers: [
    { command: "COPY package.json package-lock.json", sizeMB: 1 },
    { command: "RUN npm ci --production", sizeMB: 150 },
    { command: "COPY src/", sizeMB: 20 },
    { command: "RUN npm run build", sizeMB: 30 },
    { command: "RUN rm -rf node_modules && npm ci --production", sizeMB: 120 },
  ],
};
cache.build(appDockerfile, "myapp:1.0");
cache.build(appDockerfile, "myapp:1.0");
const changedDockerfile: Dockerfile = {
  baseImage: "node:20-alpine",
  layers: [
    { command: "COPY package.json package-lock.json", sizeMB: 1 },
    { command: "RUN npm ci --production", sizeMB: 150 },
    { command: "COPY src/", sizeMB: 22 },
    { command: "RUN npm run build", sizeMB: 35 },
    { command: "RUN rm -rf node_modules && npm ci --production", sizeMB: 120 },
  ],
};
cache.build(changedDockerfile, "myapp:1.1");
console.log("Cache stats:", JSON.stringify(cache.getStats(), null, 2));
```

### TypeScript: Pod Resource Validator & HPA Config Tester

```typescript
interface PodResources { requests: { cpu: string; memory: string }; limits: { cpu: string; memory: string }; replicas: number; }
interface HPAConfig { minReplicas: number; maxReplicas: number; targetCPUUtilization: number; targetMemoryUtilization?: number; }

class PodValidator {
  validate(resources: PodResources, nodeCapacity: { cpuCores: number; memoryGB: number }, nodeCount: number): { valid: boolean; issues: string[]; maxPodsPerNode: number } {
    const issues: string[] = [];
    const reqCPU = parseInt(resources.requests.cpu) || 0;
    const reqMem = parseInt(resources.requests.memory) || 0;
    const limCPU = parseInt(resources.limits.cpu) || 0;
    const limMem = parseInt(resources.limits.memory) || 0;

    if (reqCPU > limCPU && limCPU > 0) issues.push("CPU request exceeds limit");
    if (reqMem > limMem && limMem > 0) issues.push("Memory request exceeds limit");
    if (reqCPU <= 0) issues.push("CPU request not set");
    if (reqMem <= 0) issues.push("Memory request not set");

    const maxByCPU = Math.floor((nodeCapacity.cpuCores * 1000) / Math.max(reqCPU, 1));
    const maxByMem = Math.floor((nodeCapacity.memoryGB * 1024) / Math.max(reqMem, 1));
    const maxPodsPerNode = Math.min(maxByCPU, maxByMem);

    const totalPods = maxPodsPerNode * nodeCount;
    if (resources.replicas > totalPods) issues.push(`Replicas (${resources.replicas}) exceed cluster pod capacity (${totalPods})`);

    return { valid: issues.length === 0, issues, maxPodsPerNode };
  }

  testHPA(config: HPAConfig, currentReplicas: number, currentCPU: number): { desiredReplicas: number; scalingReason: string } {
    const ratio = currentCPU / config.targetCPUUtilization;
    let desiredReplicas = Math.round(currentReplicas * ratio);
    desiredReplicas = Math.max(config.minReplicas, Math.min(config.maxReplicas, desiredReplicas));
    let reason = "";
    if (desiredReplicas > currentReplicas) reason = `Scaling up: CPU ${currentCPU}% > target ${config.targetCPUUtilization}%`;
    else if (desiredReplicas < currentReplicas) reason = `Scaling down: CPU ${currentCPU}% < target ${config.targetCPUUtilization}%`;
    else reason = "Stable";
    return { desiredReplicas, scalingReason: reason };
  }
}

const pv = new PodValidator();
const val = pv.validate({ requests: { cpu: "500m", memory: "512Mi" }, limits: { cpu: "1", memory: "1Gi" }, replicas: 20 }, { cpuCores: 8, memoryGB: 32 }, 3);
console.log("Pod validation:", val.valid ? "PASS" : val.issues.join("; "));
console.log("HPA test:", JSON.stringify(pv.testHPA({ minReplicas: 3, maxReplicas: 30, targetCPUUtilization: 70 }, 10, 90), null, 2));
```
```


// containerization
// iaas-paas-saas-cloud-native implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit<Task, "status">): Promise<void> {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise<void> {
    const running: Promise<void>[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise<void> {
    t.status = "running"
    await new Promise(r => setTimeout(r, 10))
    t.status = "done"
  }
  getResults(): Task[] { return this.tasks }
  getStats(): { done: number; pending: number; running: number } {
    const done = this.tasks.filter(t => t.status === "done").length
    const pending = this.tasks.filter(t => t.status === "pending").length
    const running = this.tasks.filter(t => t.status === "running").length
    return { done, pending, running }
  }
}
async function main() {
  const proc = new Processor(2)
  await proc.add({ id: '1', name: 'containerization', data: { topic: 'iaas-paas-saas-cloud-native' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }

// containerization - additional TS implementations

interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }
class Cache {
  private store: Map<string, CacheEntry> = new Map()
  constructor(private defaultTTL: number = 60000) {}
  set(key: string, value: unknown, ttl?: number): void {
    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })
  }
  get(key: string): unknown | undefined {
    const entry = this.store.get(key)
    if (!entry) return undefined
    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }
    return entry.value
  }
  delete(key: string): boolean { return this.store.delete(key) }
  clear(): void { this.store.clear() }
  size(): number { return this.store.size }
  keys(): string[] { return Array.from(this.store.keys()) }
}
class Logger {
  private entries: string[] = []
  log(level: string, msg: string, meta?: Record<string, unknown>): void {
    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })
    this.entries.push(entry)
    console.log(entry)
  }
  info(msg: string, meta?: Record<string, unknown>): void { this.log("info", msg, meta) }
  warn(msg: string, meta?: Record<string, unknown>): void { this.log("warn", msg, meta) }
  error(msg: string, meta?: Record<string, unknown>): void { this.log("error", msg, meta) }
  getLogs(): string[] { return [...this.entries] }
  clear(): void { this.entries = [] }
}
function computeHash(input: string): string {
  let hash = 0
  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }
  return Math.abs(hash).toString(16)
}
async function demo(): Promise<void> {
  const cache = new Cache(5000)
  cache.set('key1', 'cloud-services demo')
  const log = new Logger()
  log.info('Cache demo started', { course: 'cloud-computing', chapter: 'containerization' })
  const v = cache.get("key1")
  console.log('Cached:', v)
  console.log('Hash:', computeHash('cloud-services'))
}
demo()
export { Cache, Logger, computeHash, CacheEntry }
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
