# DevOps and CI/CD

## Learning Objectives

After completing this chapter, the student will be able to: explain the DevOps culture and its benefits; design and implement CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions; describe infrastructure as code and use Terraform and Ansible; explain containerisation with Docker and orchestration with Kubernetes; describe monitoring and logging practices; and compare deployment strategies including blue-green, canary, and rolling deployments.

## Theory

### The DevOps Culture

DevOps represents the convergence of software development (Dev) and information technology operations (Ops). The movement emerged from the recognition that the traditional separation between development teams, who create software, and operations teams, who run it, creates organisational friction that slows delivery and reduces reliability.

The cultural foundation of DevOps includes: collaboration between developers and operations staff; shared responsibility for the entire lifecycle; automation of repetitive tasks; continuous measurement and feedback; and a blameless culture where failures are treated as learning opportunities. The three ways of DevOps, articulated by Gene Kim, describe the core principles: the First Way emphasises flow by accelerating the delivery of work from development to operations; the Second Way emphasises feedback by amplifying information flow from operations back to development; and the Third Way emphasises continuous experimentation and learning.

### CI/CD Pipelines

Continuous integration and continuous delivery pipelines automate the process from code commit to deployable artefact. A pipeline is composed of stages, each of which performs a specific transformation or verification.

The fundamental stages of a CI/CD pipeline are: source, where code is retrieved from version control; build, where the code is compiled and dependencies are resolved; test, where automated tests are executed; analyse, where static analysis and code quality checks are performed; package, where the artefact is packaged for deployment; stage, where the artefact is deployed to a staging environment for additional testing; and deploy, where the artefact is released to production.

Each stage can pass or fail. A passing stage allows the pipeline to proceed to the next stage; a failing stage stops the pipeline and notifies the team. Stages should be fast to provide rapid feedback; long-running stages can be parallelised where possible.

#### Jenkins

Jenkins is an open-source automation server for building CI/CD pipelines. Pipelines are defined using a domain-specific language in a Jenkinsfile, which can be maintained in the version control repository. Jenkins supports freestyle projects, declarative pipelines, and scripted pipelines.

A Jenkins declarative pipeline defines stages and steps in a structured format. Agents specify where the pipeline executes. Environment variables configure pipeline behaviour. Post-build actions handle pipeline completion, including success and failure notifications.

#### GitLab CI

GitLab CI integrates with the GitLab repository. Pipelines are defined in a .gitlab-ci.yml file at the root of the repository. GitLab CI uses runners — agents that execute pipeline jobs. Runners can be shared, group-specific, or project-specific.

GitLab CI supports stages, jobs within stages, and job dependencies. Jobs can be configured to run only for specific branches or when specific files change. GitLab CI includes a built-in container registry and integrates with GitLab's code review process.

#### GitHub Actions

GitHub Actions enables CI/CD directly within GitHub repositories. Workflows are defined in YAML files stored in the .github/workflows directory. Each workflow is triggered by events such as push, pull request, or schedule. Workflows contain jobs, which run on runners and contain steps that execute actions or shell commands.

GitHub Actions provides a marketplace of reusable actions for common tasks. Matrix builds enable parallel testing across multiple configurations. Artefacts can be stored and deployed to various environments.

### Infrastructure as Code

Infrastructure as code (IaC) applies software engineering practices to infrastructure management. IaC enables repeatable, version-controlled, automated provisioning and configuration of infrastructure.

#### Terraform

Terraform is an IaC tool for provisioning infrastructure across multiple cloud providers. It uses a declarative configuration language called HCL (HashiCorp Configuration Language). Terraform manages infrastructure through providers — plugins that interface with cloud APIs.

The Terraform workflow comprises: write, where configuration files describe the desired infrastructure; init, where the working directory is initialised and providers are downloaded; plan, where Terraform shows the changes that will be made; apply, where Terraform creates or modifies infrastructure; and destroy, where infrastructure is removed. Terraform maintains state files that map configuration to real-world resources.

#### Ansible

Ansible is a configuration management and automation tool. Unlike Terraform, which focuses on infrastructure provisioning, Ansible focuses on configuring software on existing servers. Ansible is agentless — it connects to managed nodes via SSH and executes modules.

Ansible playbooks are written in YAML and describe the desired state of the system. Each playbook contains plays that map to hosts, and each play contains tasks that call Ansible modules. Ansible supports idempotency: running the same playbook multiple times produces the same result.

### Containerisation

Containerisation packages software with its dependencies into a self-contained unit that can run consistently across environments. Containers share the host operating system kernel, making them lighter than virtual machines.

#### Docker

Docker is the dominant containerisation platform. A Docker image is a read-only template that contains the application and its dependencies. Images are built from Dockerfiles, which specify the base image, application code, dependencies, and configuration. Images are stored in registries such as Docker Hub or private registries.

A Docker container is a runnable instance of an image. Containers are isolated from each other and from the host system. Docker Compose defines multi-container applications in a YAML file.

Key Docker practices include: using multi-stage builds to reduce image size; running containers with non-root users; scanning images for vulnerabilities; and using Docker volumes for persistent data.

#### Kubernetes

Kubernetes is an orchestration platform for managing containerised applications at scale. It automates deployment, scaling, and operations across clusters of machines.

The fundamental Kubernetes objects include: Pods, the smallest deployable unit representing one or more containers; Deployments, which manage the desired state of replicated Pods; Services, which provide stable network endpoints for Pods; ConfigMaps and Secrets, which manage configuration; and Ingress, which manages external access.

Kubernetes provides self-healing through health checks and restart policies, scaling through ReplicaSets and Horizontal Pod Autoscalers, rolling updates with configurable surge and unavailable tolerances, and service discovery through DNS-based service resolution.

### Monitoring and Logging

Monitoring provides visibility into the behaviour and health of production systems. The key pillars of observability are metrics, logs, and traces.

Metrics are numeric measurements collected over time, such as request rate, error rate, response time, and resource utilisation. Prometheus is a widely adopted metrics collection and alerting system. Grafana provides visualisation dashboards for metrics.

Logs record discrete events with timestamps. The ELK stack (Elasticsearch, Logstash, Kibana) or the Elastic Stack with Beats provides centralised logging. Structured logging formats such as JSON enable automated analysis.

Tracing follows requests through distributed systems. OpenTelemetry provides a standardised framework for collecting and exporting distributed traces. Traces enable the identification of bottlenecks and failures in complex microservice architectures.

### Deployment Strategies

The deployment strategy determines how new versions are introduced to production.

Rolling deployment gradually replaces instances of the old version with the new version. Instances are updated incrementally, ensuring that the system remains available throughout the deployment. Rolling deployments provide basic safety but can be slow to roll back.

Blue-green deployment maintains two identical environments: the blue environment runs the current version, and the green environment runs the new version. Traffic is switched from blue to green when testing is complete. Rollback is achieved by switching traffic back. Blue-green deployment provides instant rollback but requires double the infrastructure.

Canary deployment routes a small percentage of traffic to the new version while the majority continues to use the old version. The percentage is gradually increased as confidence grows. If problems are detected, the canary is terminated. Canary deployment provides the highest safety but requires sophisticated traffic routing and monitoring.

## Examples

### Case Study: DevOps Transformation at Etsy

Etsy's DevOps transformation reduced deployment time from over an hour to under a minute. Key changes included: automated deployment scripts; feature flags for gradual rollout; continuous monitoring with dashboards; a blameless post-mortem culture; and the principle that developers should be on call for their own code.

### Template: GitHub Actions CI/CD Workflow

name: CI/CD Pipeline
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build
        run: mvn clean compile
      - name: Test
        run: mvn test
      - name: Package
        run: mvn package
  deploy:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: ./deploy.sh

### Template: Kubernetes Deployment

apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 8080
        readinessProbe:
          httpGet:
            path: /health
            port: 8080

## Summary

DevOps unifies development and operations through collaboration, automation, and measurement. CI/CD pipelines automate the path from commit to deployment. Jenkins, GitLab CI, and GitHub Actions provide pipeline automation. Infrastructure as code with Terraform and Ansible enables repeatable infrastructure management. Docker and Kubernetes provide containerisation and orchestration. Monitoring and logging with Prometheus, Grafana, and the Elastic Stack provide observability. Deployment strategies from rolling to blue-green to canary provide graduated approaches to releasing changes.

## Exercises

### Review Questions

1. What are the three ways of DevOps?
2. What are the typical stages of a CI/CD pipeline?
3. How does a Jenkins declarative pipeline differ from a scripted pipeline?
4. What is the purpose of a Terraform state file?
5. How does Ansible ensure idempotency?
6. Distinguish between a Docker image and a Docker container.
7. What Kubernetes object manages the desired state of replicated Pods?
8. What are the three pillars of observability?
9. How does a canary deployment differ from a blue-green deployment?
10. What is the purpose of a readiness probe in Kubernetes?

### Application Problems

1. Design a CI/CD pipeline for a Node.js web application deployed to AWS ECS. Specify the stages, tools, and triggers.
2. Write a Terraform configuration that provisions an AWS EC2 instance with a security group allowing HTTP and SSH access.
3. Compare rolling deployment, blue-green deployment, and canary deployment for a mission-critical financial trading application. Recommend one strategy with justification.

### Challenge Problem

A company is migrating its monolithic Java application to microservices running on Kubernetes. The current deployment process involves monthly manual releases with four hours of downtime. The target is multiple deployments per day with zero downtime across fifty microservices. Design a comprehensive DevOps strategy covering CI/CD pipeline architecture, containerisation approach, Kubernetes cluster design, deployment strategy for each service, monitoring and observability, and the organisational changes required. Address how you will manage dependencies between services, how you will handle database migrations in the context of microservices, how you will implement feature flags for gradual rollouts, and how you will ensure developers have appropriate access to production monitoring without compromising security.
