---
title: DevOps — CI/CD se Cloud tak
---

<div class="module-hero">

# 🚀 DevOps — CI/CD se Cloud tak

DevOps sirf deployment nahi hai — ye ek culture hai. Placement mein DevOps kaafi poochha jaata hai, khaaskar service-based aur product companies mein.

**Topics**: Git · Docker · Kubernetes · CI/CD · Cloud · IaC · Monitoring

</div>

<div class="roadmap-path">

## Learning Roadmap

<div class="roadmap-step" data-step="1">

### Git & GitHub

Version control, branching, collaboration

</div>

<div class="roadmap-step" data-step="2">

### Docker

Containerization, multi-stage builds, compose

</div>

<div class="roadmap-step" data-step="3">

### Kubernetes

Pods, services, deployments, kubectl

</div>

<div class="roadmap-step" data-step="4">

### CI/CD

GitHub Actions, Jenkins, pipelines

</div>

<div class="roadmap-step" data-step="5">

### Cloud Platforms

AWS, GCP, Azure — compute, storage, serverless

</div>

<div class="roadmap-step" data-step="6">

### IaC

Terraform, Ansible — infra as code

</div>

<div class="roadmap-step" data-step="7">

### Monitoring

Prometheus, Grafana, ELK Stack

</div>

</div>

## Core Topics

<div class="phase-section">

<div class="phase-header">

### <span class="tag tag-hot">Phase 1</span> Git & GitHub
</div>

<div class="phase-body">

```bash
git init
git add .
git commit -m "feat: initial commit"
git push origin main
```

- Branching strategies: git-flow, trunk-based, feature branches
- Collaboration: pull requests, code review, merge conflict resolution
- GitHub Actions workflows: `.github/workflows/` folder reference

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 Tip</span>
**Git**: Roz koi ek feature branch banao, PR raise karo, merge karo. Command muscle memory banao — pehle `git status` har baar.
</div>

<div class="phase-section">

<div class="phase-header">

### <span class="tag tag-hot">Phase 2</span> Docker
</div>

<div class="phase-body">

```dockerfile
# Multi-stage build example
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

- Dockerfile best practices (multi-stage, layer caching, .dockerignore)
- docker-compose for multi-service apps
- Volumes, networks, environment variables
- Docker hub, image tagging, registry

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 Tip</span>
**Docker**: Ek simple Node.js + Redis app likho, docker-compose se chalao. `docker ps`, `docker logs`, `docker exec` — ye 3 commands yaad rakho interview ke liye.
</div>

<div class="phase-section">

<div class="phase-header">

### <span class="tag tag-star">Phase 3</span> Kubernetes Basics
</div>

<div class="phase-body">

- Pods, Services, Deployments, ConfigMaps, Secrets
- `kubectl` commands
- Minikube / kind for local dev

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 Tip</span>
**K8s**: Sirf theory mat padho — `minikube start` karo, ek nginx pod deploy karo, service expose karo. YAML likhna aana chahiye.
</div>

<div class="phase-section">

<div class="phase-header">

### <span class="tag tag-method">Phase 4</span> CI/CD
</div>

<div class="phase-body">

#### GitHub Actions

```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: composer install
      - run: php artisan test
```

#### Jenkins Basics

- Pipeline as Code (Jenkinsfile)
- Build triggers, plugins, agents

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 Tip</span>
**CI/CD**: Pehle GitHub Actions sikho (easy hai), phir Jenkins (industry standard). Ek baar apni koi bhi repo mein CI pipeline banao — test pass ho toh deploy.
</div>

<div class="phase-section">

<div class="phase-header">

### <span class="tag tag-star">Phase 5</span> Cloud Platforms
</div>

<div class="phase-body">

#### AWS

| Service | Use Case |
|---------|----------|
| EC2 | Compute instances |
| S3 | Object storage |
| RDS | Managed databases |
| Lambda | Serverless functions |
| API Gateway | API management |
| CloudFront | CDN |

#### GCP & Azure

- GCP: Compute Engine, Cloud Storage, Cloud Functions
- Azure: VMs, Blob Storage, Azure Functions

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 Tip</span>
**Cloud**: AWS kaafi hai placement ke liye — EC2 + S3 + RSA + Lambda 4 cheezein strong karo. Free tier mein practice karo.
</div>

<div class="phase-section">

<div class="phase-header">

### <span class="tag tag-method">Phase 6</span> IaC — Infrastructure as Code
</div>

<div class="phase-body">

#### Terraform

```hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
```

- State management, modules, workspaces
- `terraform plan`, `terraform apply`

#### Ansible

- Playbooks, inventory, roles
- Ad-hoc commands vs playbooks

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 Tip</span>
**IaC**: Terraform seekho — HCL syntax easy hai aur bahut companies use karti hain. Ek EC2 instance Terraform se banao, destroy karo, fir waapas banao — ye cycle 2-3 baar karo.
</div>

<div class="phase-section">

<div class="phase-header">

### <span class="tag">Phase 7</span> Monitoring Basics
</div>

<div class="phase-body">

- **Prometheus**: Metrics collection
- **Grafana**: Dashboards
- **ELK Stack**: Elasticsearch, Logstash, Kibana
- **Uptime monitoring**: Health checks, alerts

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 Tip</span>
**Monitoring**: Apne project mein Prometheus + Grafana lagao. Docker compose mein ek click mein setup ho jaata hai. CPU/memory dashboard dikhana aana chahiye.
</div>

## Syllabus Table

<table class="table-dash">

| Module | Status |
|--------|--------|
| Git Complete | ✅ |
| Docker Complete | ✅ |
| CI/CD Complete | ✅ |
| Cloud Infrastructure | ✅ |
| DevOps Full Course | ✅ |

</table>

## Checklist

- [ ] Git branching strategies seekh li
- [ ] Dockerfile + docker-compose banaya
- [ ] K8s basics (pods, services) samjhe
- [ ] GitHub Actions CI/CD pipeline banaya
- [ ] AWS (EC2, S3, RDS) basics cover kiye
- [ ] Terraform ya Ansible ka ek project kiya
- [ ] Monitoring (Prometheus/Grafana) setup kiya

---

## 📂 Original Deep Content

Original DevOps content — 43+ files:

- [DevOps Complete Guide](../original/06-DevOps/)
- [Docker](../original/06-DevOps/Docker/)
- [Kubernetes](../original/06-DevOps/Kubernetes/)
- [CI/CD](../original/06-DevOps/CI-CD/)
- [Cloud (AWS)](../original/06-DevOps/Cloud/)

---

## Notes

<div id="page-notes"></div>
