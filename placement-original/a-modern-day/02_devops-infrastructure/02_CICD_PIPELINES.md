# 🔄 STAGE 2B — CI/CD Pipelines

> **Level:** Intermediate | **Duration:** 1 Week

---

## 📋 Topics
1. What Is CI/CD
2. GitHub Actions
3. Automated Testing Pipeline
4. Automated Deployment
5. Docker Registry Integration

---

## 1. What Is CI/CD?

```
CI (Continuous Integration)  → Auto test every push
CD (Continuous Delivery)     → Auto deploy after tests pass
CD (Continuous Deployment)   → Auto deploy to production
```

### Pipeline Flow
```
Developer pushes code
       ↓
GitHub Actions triggered
       ↓
Run linting & tests
       ↓
Build Docker image
       ↓
Push to Docker Registry
       ↓
Deploy to VPS (SSH)
       ↓
Health check ✅
```

---

## 2. GitHub Actions — Complete Pipeline

### Laravel CI/CD
```yaml
# .github/workflows/deploy.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  # Job 1: Test
  test:
    runs-on: ubuntu-latest
    services:
      mysql:
        image: mysql:8.0
        env:
          MYSQL_DATABASE: testing
          MYSQL_ROOT_PASSWORD: secret
        ports: ['3306:3306']
        options: --health-cmd="mysqladmin ping" --health-interval=10s

    steps:
      - uses: actions/checkout@v4

      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: '8.3'
          extensions: mbstring, pdo, mysql
          coverage: xdebug

      - name: Install Dependencies
        run: composer install --prefer-dist --no-progress

      - name: Copy Environment
        run: cp .env.example .env && php artisan key:generate

      - name: Run Tests
        run: php artisan test --coverage
        env:
          DB_HOST: 127.0.0.1
          DB_DATABASE: testing
          DB_PASSWORD: secret

  # Job 2: Build Docker Image
  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v4

      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build & Push
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: |
            ${{ secrets.DOCKER_USERNAME }}/myapp:latest
            ${{ secrets.DOCKER_USERNAME }}/myapp:${{ github.sha }}

  # Job 3: Deploy to VPS
  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /var/www/html
            docker compose pull
            docker compose up -d
            docker compose exec laravel php artisan migrate --force
            docker compose exec laravel php artisan config:cache
            echo "✅ Deployed successfully!"
```

---

## 3. Setting Up Secrets

In GitHub → Repository → Settings → Secrets:

```
DOCKER_USERNAME    → your Docker Hub username
DOCKER_PASSWORD    → your Docker Hub token
VPS_HOST           → your server IP
VPS_USER           → root or deploy user
VPS_SSH_KEY        → private SSH key content
```

---

## 4. Branch Strategy

```
main        → Production (auto-deploy)
staging     → Staging environment
develop     → Development
feature/*   → Feature branches (PR to develop)
hotfix/*    → Emergency fixes (PR to main)
```

### Branch Protection Rules
- Require pull request reviews
- Require status checks to pass
- No direct pushes to main

---

## 5. Python AI Service CI/CD
```yaml
# .github/workflows/ai-service.yml
name: AI Service CI/CD

on:
  push:
    paths: ['ai-service/**']

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      - name: Install deps
        run: |
          cd ai-service
          pip install -r requirements.txt
          pip install pytest
      - name: Run tests
        run: cd ai-service && pytest

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - name: Deploy AI Service
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /var/www/ai-service
            git pull
            docker compose build ai-service
            docker compose up -d ai-service
```

---

## 🎯 Practice Tasks
- [ ] Set up GitHub Actions for a Laravel project
- [ ] Create automated test pipeline
- [ ] Build Docker image in CI
- [ ] Deploy to VPS via SSH action
- [ ] Set up branch protection rules

---

*Next: [VPS, Nginx & Deployment →](./03_VPS_NGINX_DEPLOYMENT.md)*
