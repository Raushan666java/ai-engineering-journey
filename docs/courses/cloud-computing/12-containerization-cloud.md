# Chapter 12: Containerization in the Cloud

## Learning Objectives

After completing this chapter, students will be able to:

1. Deploy containerized applications using Amazon ECS with Fargate and EC2 launch types.
2. Configure ECS task definitions, services, and auto scaling.
3. Deploy and manage Kubernetes clusters using Amazon EKS.
4. Compare container orchestration across ECS, EKS, AKS, and GKE.
5. Implement serverless containers using AWS Fargate and Google Cloud Run.
6. Apply container security best practices including image scanning and runtime security.

## Theory

### 12.1 Containers in Cloud Context

Containers have become the standard unit of deployment for cloud-native applications. They provide consistent environments across development, testing, and production, enable microservices architectures, and support efficient resource utilization through shared kernel architecture. Cloud providers offer multiple container management services ranging from simple container deployment to full Kubernetes orchestration.

The container ecosystem in the cloud encompasses: container registries for image storage and distribution, container orchestration for deployment and scaling, service mesh for networking and observability, and container security for image scanning and runtime protection.

### 12.2 Amazon ECS (Elastic Container Service)

ECS is a fully managed container orchestration service supporting Docker containers. ECS integrates deeply with the AWS ecosystem (VPC, IAM, CloudWatch, ALB, Route 53) and offers two launch types.

**Launch Types.** Fargate launch type is serverless: AWS manages the underlying infrastructure, and customers pay for requested resources (vCPU and memory) per running task. Fargate eliminates the need to provision or manage EC2 instances. EC2 launch type provides more control: customers manage the EC2 instances in the cluster, handle patching and capacity, and pay for the EC2 instances regardless of utilization. Fargate is simpler; EC2 provides more control and potentially lower cost for predictable workloads.

**Task Definitions.** A task definition is a JSON document describing the containers that form an application. It specifies: container images, CPU and memory allocation, port mappings, environment variables, IAM role (task execution role and task role), logging configuration (CloudWatch Logs), volumes (bind mounts, EFS, FSx), and networking mode (awsvpc, bridge, host).

**Tasks and Services.** A task is a running instance of a task definition. Tasks can be run standalone (one-off jobs) or as part of a service. A service manages the desired number of tasks, integrates with a load balancer, and supports rolling updates. Services use an orchestrator (ECS service scheduler) to maintain desired task count, replace unhealthy tasks, and handle deployment.

**Service Auto Scaling.** ECS service auto scaling adjusts the desired count using AWS Application Auto Scaling with target tracking policies (CPU, memory, ALB request count per target) or step scaling. For Fargate, tasks are added or removed. For EC2, the cluster auto scaler also adjusts the underlying EC2 capacity.

**Service Discovery.** ECS service discovery integrates with AWS Cloud Map, automatically registering running tasks with DNS records. Tasks can discover each other using DNS names rather than needing to know IP addresses.

**Amazon ECR (Elastic Container Registry).** ECR is a fully managed Docker container registry. It integrates with IAM for permission control and supports image scanning (vulnerability scanning using Amazon Inspector), cross-region replication, and lifecycle policies (automatically delete old images).

### 12.3 Amazon EKS (Elastic Kubernetes Service)

EKS is a managed Kubernetes service. AWS manages the Kubernetes control plane (API server, etcd, controllers) across multiple availability zones. The customer manages the worker nodes (or uses Fargate for serverless pods).

**Cluster Architecture.** The EKS control plane consists of the Kubernetes API server, etcd (distributed key-value store), and controllers. The control plane is highly available across three AZs. Worker nodes run in the customer's VPC and connect to the control plane through an elastic network interface.

**Node Groups.** Managed node groups automate the provisioning and lifecycle management of EC2 instances for EKS clusters. Node groups support: on-demand and spot instances, auto upgrades (Kubernetes version, OS patches), and auto scaling via the Cluster Autoscaler or Karpenter.

**Fargate Profiles.** EKS Fargate profiles specify which pods should run on Fargate (serverless) infrastructure. Pods selected by the profile run without managing EC2 instances. Fargate profiles specify a namespace and pod selectors. This enables a hybrid model where some pods run on managed nodes and others on Fargate.

**EKS Add-ons.** EKS supports add-ons for common Kubernetes extensions: CoreDNS (DNS resolution), kube-proxy (network proxy), Amazon VPC CNI (networking), AWS Load Balancer Controller (ALB/NLB integration), and Amazon EBS CSI driver (storage).

**IAM Integration.** EKS integrates with IAM through: cluster-level IAM (manage cluster access through aws-auth ConfigMap), IAM roles for service accounts (IRSA) — associating IAM roles with Kubernetes service accounts for pod-level permissions, and EKS Pod Identity Agent (simplified IAM for pods).

### 12.4 Azure Kubernetes Service (AKS)

AKS is Azure's managed Kubernetes service. Features: managed control plane (free, customer pays for nodes), automated Kubernetes version upgrades, Azure AD integration for authentication, managed Azure AD pod identity, cluster auto-scaler, virtual nodes (serverless pods using ACI), and integration with Azure Policy (Gatekeeper) for governance.

**Node Pools.** System node pools run critical system pods. User node pools run application workloads. Each pool can have different VM sizes and scaling configurations. Availability zones distribute nodes within a region.

**Networking.** Azure CNI (advanced networking) assigns IP addresses to pods from the VNet. Kubenet (basic networking) uses a separate IP range for pods. Azure CNI provides better performance and integration with Azure network policies.

### 12.5 Google Kubernetes Engine (GKE)

GKE is Google's managed Kubernetes service with unique advantages because Google created Kubernetes and runs it at scale in production. GKE offers: Autopilot mode (fully managed nodes, pay per pod), release channels (rapid, regular, stable for Kubernetes version management), workload identity (pod-level IAM without service account keys), and Config Connector (manage GCP resources through Kubernetes API).

**GKE Autopilot vs Standard.** Autopilot mode manages the entire node infrastructure. Users define Pod specifications and GKE selects the optimal node configuration. Autopilot enforces security best practices and eliminates node management overhead. Standard mode provides full control over node configuration, including GPU nodes, custom machine types, and node taints/tolerations.

**GKE Networking.** GKE supports VPC-native clusters (alias IP ranges for pods), Cloud NAT for outbound connectivity, GKE Dataplane V2 (eBPF-based data plane for improved performance), and multi-cluster ingress for cross-cluster traffic management.

### 12.6 Container Orchestration Comparison

| Feature | ECS | EKS | AKS | GKE |
|---------|-----|-----|-----|-----|
| Kubernetes-native | No | Yes | Yes | Yes |
| Serverless option | Fargate | Fargate profile | Virtual nodes (ACI) | Autopilot |
| Pricing | No control plane fee | $0.10/hour per cluster | No control plane fee | $0.10/hour per cluster |
| Managed node groups | N/A | Yes | Yes | Yes |
| IAM integration | Native | IRSA / Pod Identity | Azure AD pod identity | Workload Identity |
| Multi-AZ | Yes | Yes | Yes | Yes |
| Auto scaling | App auto scaling | CA / Karpenter | Cluster auto scaler | Node auto-provisioning |
| Container registry | ECR | ECR | ACR | Artifact Registry |

**Selection Criteria.** Choose ECS when deep AWS integration and simplicity are priorities and Kubernetes-specific features are not required. Choose EKS when Kubernetes ecosystem compatibility, multi-cloud portability, or specific Kubernetes features (Custom Resource Definitions, admission controllers) are required. Choose AKS when Azure ecosystem integration and .NET workloads are the primary focus. Choose GKE when Google Cloud integration, Autopilot's operational simplicity, or bleeding-edge Kubernetes features are priorities.

### 12.7 Serverless Containers

Serverless containers abstract infrastructure management while using container technology, combining the flexibility of containers with the operational simplicity of serverless.

**AWS Fargate.** Fargate is the serverless compute engine for ECS and EKS. Key characteristics: no infrastructure management (no EC2 instances to provision or manage), pay for requested resources (vCPU and memory, rounded up to the nearest second), task-level isolation (each task runs in its own isolated environment), and integration with AWS services (VPC, IAM, CloudWatch, ALB).

Fargate pricing is based on the vCPU and memory allocated to tasks per second. Fargate Spot offers access to spare capacity at up to 70% discount (interruption possible). Fargate is ideal for event-driven workloads, batch processing, and applications requiring infrastructure abstraction.

**Google Cloud Run.** Cloud Run is a fully managed serverless container platform that executes containers in response to HTTP requests or events. Key characteristics: automatically scales from zero, pay only for resources used during request processing, supports any container image (any language, any framework), provides built-in HTTPS with managed SSL certificates, and supports traffic splitting for canary deployments.

Cloud Run's unique value is its balance of serverless simplicity and container flexibility. Unlike Fargate, which requires ECS or EKS, Cloud Run accepts a container image directly. Cloud Run pricing is based on CPU, memory, and request duration (billed per 100ms increments).

### 12.8 Container Security

**Image Security.** Scan images for vulnerabilities using ECR Inspector scanning, Docker Scout, or third-party scanners (Trivy, Snyk, Aqua). Scan images during CI/CD and block deployments based on severity thresholds. Sign images using Docker Content Trust or cosign (Sigstore) for supply chain security.

**Runtime Security.** Run containers with least privilege: avoid running as root, drop unnecessary Linux capabilities, use read-only root filesystems. Implement resource limits (CPU, memory) at the container level. Use seccomp, AppArmor, or SELinux profiles. Consider container-optimized OS (Bottlerocket, Flatcar Container Linux).

**Network Security.** Use Kubernetes network policies to restrict pod-to-pod communication. Leverage service mesh (Istio, Linkerd) for mTLS encryption. Avoid hostNetwork mode and NodePort services in production.

**Registry Security.** Configure private registries (ECR, ACR, Artifact Registry) with IAM-based access control. Enable tag immutability to prevent image overwrites. Implement lifecycle policies for automatic cleanup.

## Examples

### Example 12.1: ECS Task Definition with Fargate

```json
{
  "family": "web-app",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "512",
  "memory": "1024",
  "executionRoleArn": "arn:aws:iam::123:role/ecs-task-execution-role",
  "taskRoleArn": "arn:aws:iam::123:role/ecs-task-role",
  "containerDefinitions": [{
    "name": "web",
    "image": "nginx:latest",
    "essential": true,
    "portMappings": [{
      "containerPort": 80,
      "protocol": "tcp"
    }],
    "environment": [
      {"name": "DB_HOST", "value": "mydb.example.com"}
    ],
    "logConfiguration": {
      "logDriver": "awslogs",
      "options": {
        "awslogs-group": "/ecs/web-app",
        "awslogs-region": "us-east-1",
        "awslogs-stream-prefix": "ecs"
      }
    }
  }]
}
```

### Example 12.2: Deploy to Amazon EKS

```bash
# Create an EKS cluster
eksctl create cluster \
  --name my-cluster \
  --region us-east-1 \
  --nodegroup-name standard-workers \
  --node-type t3.medium \
  --nodes 3 \
  --nodes-min 1 \
  --nodes-max 10 \
  --managed

# Deploy a sample application
kubectl create deployment nginx --image=nginx
kubectl expose deployment nginx --port=80 --type=LoadBalancer

# Scale the deployment
kubectl scale deployment nginx --replicas=5
```

### Example 12.3: Deploy to Cloud Run

```bash
# Deploy a containerized application
gcloud run deploy my-service \
  --image gcr.io/my-project/my-app:latest \
  --platform managed \
  --region us-central1 \
  --memory 2Gi \
  --cpu 2 \
  --min-instances 1 \
  --max-instances 10 \
  --concurrency 80 \
  --timeout 300 \
  --set-env-vars "DB_HOST=mydb,DB_NAME=myapp"
```

## Summary

Container orchestration in the cloud provides managed environments for deploying and scaling containerized applications. ECS offers deep AWS integration with Fargate serverless and EC2 launch types. EKS provides managed Kubernetes with managed node groups, Fargate profiles, and IAM integration. AKS and GKE offer Azure and Google alternatives with unique features (Autopilot, release channels, Azure AD integration). Serverless containers (Fargate, Cloud Run) eliminate infrastructure management while providing container flexibility. Container security encompasses image scanning, runtime security, network policies, and registry controls. Selection between services depends on Kubernetes requirements, ecosystem integration, operational complexity tolerance, and cost considerations.

## Exercises

### Review Questions

1. Compare ECS Fargate and ECS EC2 launch types across management overhead, cost model, and use cases.
2. What is an ECS task definition and what configuration options does it include?
3. How does EKS manage the Kubernetes control plane?
4. What is the difference between managed node groups and Fargate profiles in EKS?
5. How does GKE Autopilot differ from GKE Standard mode?
6. Compare the pricing models of ECS, EKS, AKS, and GKE.
7. What is serverless containers and how does Cloud Run differ from AWS Fargate?
8. Describe four container security best practices for image management.
9. How does IAM integration work for pods in EKS (IRSA vs Pod Identity)?
10. What factors should drive the choice between ECS and EKS for a new application?

### Application Problems

1. A startup is deploying a Node.js microservices application on AWS. The team has no Kubernetes experience and wants minimal infrastructure management overhead. Design a container deployment strategy using ECS with Fargate, including task definitions, service configuration, and auto scaling.

2. An enterprise team is migrating 40 microservices to Kubernetes on AWS. The application requires specific Kubernetes features (Custom Resource Definitions, admission controllers, Helm charts). Design an EKS architecture including cluster configuration, node groups, networking, and CI/CD integration.

3. A SaaS company wants to deploy a containerized web application that can scale to zero when idle to minimize costs. The application uses a Python Flask framework and PostgreSQL. Compare Cloud Run vs ECS Fargate for this workload, providing a recommendation with cost analysis.

4. A security team needs to enforce container security across 200 microservices running on EKS. Design a container security architecture covering image scanning, runtime security, network policies, supply chain security, and compliance monitoring.

### Challenge Problem

A multinational company is building a multi-cloud container platform to run its application workloads across AWS and GCP. The platform must support 500 microservices with the following requirements: consistent deployment experience across both clouds, service mesh for mTLS and observability, disaster recovery (active-active across clouds), zero-downtime deployments, auto scaling based on custom metrics, pod-level IAM in both clouds, and centralized logging and monitoring across both platforms. Design a comprehensive container architecture covering: EKS (AWS) and GKE (GCP) cluster configuration, CI/CD pipeline using cloud-agnostic tooling (Tekton, ArgoCD), service mesh selection (Istio, Linkerd) and configuration, cross-cloud networking (multi-cluster service mesh), observability strategy (Prometheus, Grafana, Loki or managed equivalents), disaster recovery approach (active-active), security across both platforms, cost comparison (EKS vs GKE with equivalent workloads), and migration strategy for transitioning from the current on-premises Docker Compose deployments.
