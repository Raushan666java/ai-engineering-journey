# DevOps — CI/CD se Cloud tak

DevOps sirf deployment nahi hai — ye ek culture hai. Placement mein DevOps kaafi poochha jaata hai, khaaskar service-based aur product companies mein. Content `Placement-01/06-DevOps/` folder mein milega.

## Git & GitHub

**Location**: `Placement-01/06-DevOps/Module-01-Git-Complete.md`

```bash
git init
git add .
git commit -m "feat: initial commit"
git push origin main
```

- Branching strategies: git-flow, trunk-based, feature branches
- Collaboration: pull requests, code review, merge conflict resolution
- GitHub Actions workflows: `.github/workflows/` folder reference

## Docker

**Location**: `Placement-01/06-DevOps/Module-02-Docker-Complete.md`

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

## Kubernetes Basics

- Pods, Services, Deployments, ConfigMaps, Secrets
- `kubectl` commands
- Minikube / kind for local dev

## CI/CD

**Location**: `Placement-01/06-DevOps/Module-03-CICD-Complete.md`

### GitHub Actions

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

### Jenkins Basics

- Pipeline as Code (Jenkinsfile)
- Build triggers, plugins, agents

## Cloud Platforms

**Location**: `Placement-01/06-DevOps/Module-04-Cloud-Infrastructure-Complete.md`

### AWS

| Service | Use Case |
|---------|----------|
| EC2 | Compute instances |
| S3 | Object storage |
| RDS | Managed databases |
| Lambda | Serverless functions |
| API Gateway | API management |
| CloudFront | CDN |

### GCP & Azure

- GCP: Compute Engine, Cloud Storage, Cloud Functions
- Azure: VMs, Blob Storage, Azure Functions

## IaC — Infrastructure as Code

### Terraform

```hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
```

- State management, modules, workspaces
- `terraform plan`, `terraform apply`

### Ansible

- Playbooks, inventory, roles
- Ad-hoc commands vs playbooks

## Monitoring Basics

- **Prometheus**: Metrics collection
- **Grafana**: Dashboards
- **ELK Stack**: Elasticsearch, Logstash, Kibana
- **Uptime monitoring**: Health checks, alerts

## DevOps Syllabus Structure

| Module | Location | Status |
|--------|----------|--------|
| Git Complete | `Module-01-Git-Complete.md` | ✅ |
| Docker Complete | `Module-02-Docker-Complete.md` | ✅ |
| CI/CD Complete | `Module-03-CICD-Complete.md` | ✅ |
| Cloud Infrastructure | `Module-04-Cloud-Infrastructure-Complete.md` | ✅ |
| DevOps Full Course | `DevOps-Complete-Course/` | ✅ |

## Checklist

- [ ] Git branching strategies seekh li
- [ ] Dockerfile + docker-compose banaya
- [ ] K8s basics (pods, services) samjhe
- [ ] GitHub Actions CI/CD pipeline banaya
- [ ] AWS (EC2, S3, RDS) basics cover kiye
- [ ] Terraform ya Ansible ka ek project kiya
- [ ] Monitoring (Prometheus/Grafana) setup kiya
