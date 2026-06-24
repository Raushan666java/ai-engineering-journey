# Chapter 18: Capstone Project

> **Previous:** [SRE Principles](./17-sre.md)

## Learning Objectives

![Capstone Project Architecture](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/devops/ch18-capstone.png)

By the end of this chapter, students will be able to:

1. Design and implement a complete CI/CD pipeline integrating all tools covered in the course
2. Deploy a multi-service application to Kubernetes with monitoring and observability
3. Provision cloud infrastructure using Terraform with secure, scalable patterns
4. Integrate security scanning at every stage of the delivery pipeline
5. Implement blue-green deployment with automated rollback
6. Produce comprehensive documentation of the architecture and operational procedures


## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Pipeline Design | Lint/Test, Build/Scan, Deploy Staging, Deploy Prod, Observe | Incremental implementation from lint/test first |
| Infrastructure as Code | VPC, K8s, DB, Container Registry via Terraform | Provision infrastructure before deploying apps |
| Kubernetes Deployment | Frontend, API, Database with Ingress, HPA, PDB | StatefulSet for DB; HPA for API auto-scaling |
| Blue-Green Deployment | Color-labeled deployments with service switch | Zero-downtime traffic migration with rollback |
| Observability | Prometheus, Grafana, Loki for metrics/logs | RED metrics dashboard with alert rules |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Version Control] --> B[Local Dev]
    B --> C[CI/CD Pipeline]
    C --> D[Lint & Test]
    C --> E[Build & Scan]
    C --> F[Deploy Staging]
    C --> G[Deploy Prod]
    C --> H[Observability]
    G --> I[Blue-Green]
    I --> J[Rollback]
```

## Project Overview

You will build a complete DevOps pipeline for a sample e-commerce application. The application consists of three microservices:

- **Frontend** â€” React single-page application served by Nginx
- **API** â€” Node.js or Go REST API service
- **Database** â€” PostgreSQL

The pipeline must automate build, test, security scan, deploy, monitor, and rollback. All infrastructure is provisioned through code. All operations are observable.

## Architecture Requirements

> **One-Sentence Takeaway:** The capstone integrates all DevOps topics into a single cohesive CI/CD pipeline system.

### 1. Version Control

> **Pro Tip:** Start with Terraform infrastructure first, then test locally with Docker Compose, then build the pipeline.

- Create a GitHub repository with the following directory structure:
```
/
â”œâ”€â”€ frontend/          # React application
â”œâ”€â”€ api/               # Node.js or Go API service
â”œâ”€â”€ infra/             # Terraform configurations
â”œâ”€â”€ k8s/               # Kubernetes manifests
â”œâ”€â”€ scripts/           # Automation scripts
â”œâ”€â”€ .github/           # CI/CD workflows
â”‚   â””â”€â”€ workflows/
â”œâ”€â”€ docs/              # Documentation
â”œâ”€â”€ docker-compose.yml # Local development
â”œâ”€â”€ Makefile           # Development helpers
â””â”€â”€ README.md
```

- Use trunk-based development with short-lived feature branches
- Enforce commit message conventions
- Implement branch protection rules requiring CI passing and code review

### 2. Local Development

> **Remember:** Implement CI/CD incrementally: lint/test first, then build, then deploy, then security.

- Docker Compose file for local development with hot-reload
- All three services start with `docker compose up`
- Database initializes with schema migrations
- Environment variables configured through `.env` file

### 3. CI/CD Pipeline (GitHub Actions)

> **Warning:** Test blue-green deployment manually before automating. Verify traffic switching works.

The pipeline must include the following stages:

**Stage 1: Lint and Test**
- Run linters (ESLint for JS, golangci-lint for Go)
- Run unit tests with coverage
- Run SAST scanning (Semgrep)
- Run secret scanning (GitLeaks)
- Quality gate: all must pass with zero HIGH findings

**Stage 2: Build and Scan**
- Build Docker images for frontend and API
- Scan images with Trivy (fail on CRITICAL vulnerabilities)
- Generate SBOM with Syft in CycloneDX format
- Push images to container registry

**Stage 3: Deploy to Staging**
- Deploy to staging Kubernetes namespace
- Apply database migrations
- Run integration tests against staging
- Run DAST scan (OWASP ZAP) against staging API

**Stage 4: Deploy to Production (Blue-Green)**
- Provision production infrastructure if not existing
- Deploy green environment alongside blue
- Run smoke tests against green
- Switch traffic to green via service selector update
- Monitor error rates for 10 minutes
- Rollback automatically if error rate exceeds threshold
- Notify team via Slack on success or rollback

**Stage 5: Observability**
- Deploy Prometheus and Grafana to monitoring namespace
- Deploy Loki for log aggregation
- Configure RED metrics dashboard
- Set up alerts for high error rate and latency

### 4. Infrastructure as Code (Terraform)

Provision the following on a cloud provider (AWS, Azure, or GCP):

- **Network**: VPC, public/private subnets, NAT gateway, security groups
- **Compute**: Kubernetes cluster (EKS, AKS, or GKE)
- **Storage**: S3 bucket (or equivalent) for Terraform state backend with DynamoDB locking
- **Database**: Managed PostgreSQL (RDS, Azure Database, or Cloud SQL)
- **Container Registry**: ECR, ACR, or GCR

Store Terraform state remotely with locking. Use modules for VPC and Kubernetes. Parameterize environment (staging vs production).

```hcl
# Minimum required: VPC module, K8s cluster, database, state backend
# Implementation details are left to the student
```

### 5. Kubernetes Deployment

Deploy the application to Kubernetes with:

- **Frontend**: Deployment with 2 replicas, ClusterIP Service, ConfigMap for API endpoint
- **API**: Deployment with 3 replicas, ClusterIP Service, ConfigMap and Secret for configuration
- **Database**: StatefulSet with persistent volume claim, headless Service
- **Ingress**: NGINX ingress controller with TLS
- **NetworkPolicy**: API pods accept traffic only from frontend pods; database accepts only from API
- **HPA**: API scales based on CPU utilization (target 70%)
- **PDB**: Minimum available for API is 2

### 6. Blue-Green Deployment

Implement blue-green deployment without downtime:

```yaml
# Deployment template with color label
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-{color}
  labels:
    app: api
    color: {color}
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
      color: {color}
  template:
    metadata:
      labels:
        app: api
        color: {color}
    spec:
      containers:
        - name: api
          image: {image}
```

The deployment script:
1. Deploys new color (green if blue is current)
2. Waits for all pods to be ready
3. Runs smoke tests against green
4. Updates Service selector to point to green
5. Monitors error rate for 10 minutes
6. On failure: revert Service selector to blue (rollback)
7. On success: delete blue deployment

### 7. Monitoring and Observability

- Deploy Prometheus using the Prometheus Operator (kube-prometheus-stack Helm chart)
- Configure node-exporter, kube-state-metrics
- Create a Grafana dashboard with panels for:
  - Request rate (RPS) per service
  - Error rate (% of 5xx responses)
  - Latency (p50, p95, p99)
  - Resource utilization (CPU, memory)
- Configure Loki for log aggregation with Promtail
- Set up alert rules:
  - High error rate (>1% for 5 minutes) â†’ PagerDuty
  - High latency (p95 > 500ms for 5 minutes) â†’ Slack notification
  - Pod crash loop â†’ PagerDuty

### 8. Security Scanning

Integrate the following security tools in the pipeline:

- **SAST**: Semgrep on every push to any branch
- **Secret scanning**: GitLeaks in CI
- **Container scanning**: Trivy on every built image
- **SCA**: Dependabot for dependency updates
- **DAST**: ZAP baseline scan on staging deployment

### 9. Database Migrations

- Use Flyway or Alembic for schema migrations
- Migrations run as a Kubernetes Job before the API deployment
- Migration failure prevents deployment (pipeline gate)
- Include rollback migration scripts
- Test migration against staging database first

## Deliverables

> **One-Sentence Takeaway:** Trunk-based development with short-lived branches supports CI/CD velocity.

Submit the following:

1. **GitHub Repository** â€” Complete source code with all configurations
2. **README.md** â€” Architecture overview, setup instructions, deployment guide
3. **Pipeline Documentation** â€” Description of each stage, triggers, and gates
4. **Architecture Diagram** â€” System architecture including network, deployment, and data flow
5. **Runbook** â€” Operational procedures for deployment, rollback, incident response, and recovery
6. **Presentation** â€” 10-minute recorded walkthrough of the pipeline

## Evaluation Criteria

> **One-Sentence Takeaway:** Blue-green deployment with automated monitoring and rollback enables zero-downtime releases.

| Criterion | Weight | Description |
|-----------|--------|-------------|
| Pipeline completeness | 20% | All stages implemented and functional |
| Infrastructure as Code | 15% | Terraform configurations complete and modular |
| Kubernetes deployment | 15% | All K8s resources correctly configured |
| Monitoring & observability | 10% | Prometheus, Grafana, Loki operational |
| Security integration | 10% | All scanning stages operational with policy enforcement |
| Blue-green deployment | 10% | Zero-downtime deployment with rollback verified |
| Documentation quality | 10% | README, architecture diagram, runbook complete |
| Code quality | 5% | Clean, idiomatic, well-structured |
| Error handling | 5% | Pipeline handles failures gracefully |

## Hints and Guidance

> **One-Sentence Takeaway:** Security scanning at every stage ensures supply chain integrity and compliance.

- Start with the Terraform infrastructure. Provision the cluster first.
- Test the application locally with Docker Compose before deploying to Kubernetes.
- Implement the CI/CD pipeline incrementally: lint/test first, then build, then deploy.
- Test blue-green deployment manually before automating it.
- Use Helm charts from Artifact Hub for Prometheus and Loki rather than building from scratch.
- Document your design decisions and trade-offs as you go.

## Summary

## Concept Comparison Table

| Concept | Description |
|---------|-------------|
| CI/CD Pipeline | Lint/Test -> Build/Scan -> Deploy -> Observe |
| Terraform IaC | VPC, K8s cluster, database, registry |
| K8s Deploy | Deployments, Services, Ingress, HPA, PDB |
| Blue-Green | Color-label deployments, traffic switch, rollback |
| Observability | Prometheus metrics, Grafana dashboards, Loki logs |

## Quick Reference

| Topic | Key Points |
|-------|------------|
| Pipeline Stages | Lint/Test, Build/Scan, Deploy Staging, Deploy Prod, Observe |
| Terraform | VPC module, K8s cluster, database, state backend |
| K8s Objects | Deployment, StatefulSet, Service, Ingress, HPA, PDB, NetworkPolicy |
| Blue-Green | Color label, service selector switch, monitoring window, rollback |
| Security | SAST (Semgrep), Secret (GitLeaks), Container (Trivy), DAST (ZAP) |

## Cross-Application Matrix

| Domain | Application |
|--------|-------------|
| Web | Full pipeline for web application delivery |
| Cloud | Cloud-native CI/CD and infrastructure |
| Enterprise | Production-grade deployment standards |
| Startup | Blueprint for DevOps platform setup |

## Chapter Quiz

<details><summary>Question 1: Why use trunk-based development for this capstone?</summary>**A)** It's the only option<br>**B)** Supports CI/CD with short-lived branches<br>**C)** Required by GitHub<br>**D)** Easier to document<br><br>**Answer: B)** Supports CI/CD with short-lived branches</details>

<details><summary>Question 2: How does blue-green achieve zero-downtime?</summary>**A)** Rolling restart<br>**B)** Service selector switch between environments<br>**C)** Canary traffic routing<br>**D)** Parallel deployments<br><br>**Answer: B)** Service selector switch between environments</details>

<details><summary>Question 3: What metric triggers automated rollback?</summary>**A)** Build time<br>**B)** Error rate threshold exceeded<br>**C)** Code coverage<br>**D)** Number of commits<br><br>**Answer: B)** Error rate threshold exceeded</details>


## Summary

The capstone project integrates all course topics into a single cohesive system. By completing this project, students demonstrate mastery of DevOps engineering: version control strategy, CI/CD automation, containerization, orchestration, infrastructure as code, configuration management, monitoring, observability, security integration, database operations, networking, and reliability engineering. The blue-green deployment pattern with automated rollback represents the production-grade deployment standard expected of senior DevOps engineers.

## Exercises

### Review Questions

1. Why is trunk-based development preferred over Git Flow for CI/CD pipelines in this project?
2. What is the purpose of deploying to staging before production? What risks does staging mitigate?
3. How does the blue-green service selector switch achieve zero-downtime traffic migration?
4. What monitoring metrics must be observed during the post-deployment monitoring window?
5. Why are database migrations run as a Kubernetes Job rather than as a container command in the API deployment?

### Application Problems

1. Implement the complete pipeline described in this chapter. Demonstrate each stage working with screenshots or terminal output. Verify that a pipeline failure at each gate correctly blocks the next stage.
2. Test the blue-green deployment by deploying two different application versions (distinguishable by a visible feature or header). Verify zero-downtime by maintaining a continuous HTTP request stream during deployment.
3. Simulate a pipeline failure scenario: introduce a security vulnerability (e.g., a known-vulnerable dependency version or a hardcoded secret) and verify that the pipeline correctly detects and blocks it.

### Challenge Problem

Extend the capstone system with the following advanced features (choose two):
1. **Feature flags** â€” Integrate LaunchDarkly or Unleash to decouple deployment from feature release. Implement a canary release that gradually shifts 1%, 10%, 50%, 100% of traffic to the new version.
2. **Chaos engineering** â€” Integrate Chaos Mesh or Litmus to inject faults during the post-deployment monitoring window. Verify that the system degrades gracefully and auto-heals.
3. **Cost optimization** â€” Implement a FinOps dashboard showing per-service and per-environment infrastructure costs. Configure automatic scaling policies and spot instance usage for non-critical workloads.
4. **Multi-cloud** â€” Deploy the database on a second cloud provider. Implement cross-region failover and replication using streaming replication or change data capture.
5. **ML/AI integration** â€” Add a service that uses a machine learning model for recommendation or personalization. Implement model versioning, A/B testing, and automated model retraining in the pipeline.
