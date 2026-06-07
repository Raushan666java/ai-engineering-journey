# Week 1 — Docker & Deploy

**Dates:** Aug 25–31, 2026
**Daily:** 5 hours
**Goal:** AI applications ko containerize karo aur production mein deploy karo

---

## Day 1 — Docker Review

### Dockerfile Patterns

```dockerfile
# Bad Dockerfile (jo bahut log likhte hain)
FROM python:3.12
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]

# Issues: big image, no caching, runs as root

# Good Dockerfile (multi-stage)
# Stage 1: Build dependencies
FROM python:3.12-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt

# Stage 2: Runtime
FROM python:3.12-slim AS runtime
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
EXPOSE 8000
USER nobody
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]

# Benefits:
# → Small image (slim base + multi-stage)
# → Layer caching (requirements change rarely)
# → Non-root user (security)
# → No cache dir (smaller image)
```

### Docker Compose for AI Stack

```yaml
# docker-compose.yml
version: '3.8'

services:
  api:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    env_file:
      - .env.production
    depends_on:
      redis:
        condition: service_healthy
      qdrant:
        condition: service_healthy
    volumes:
      - ./data:/app/data
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 3s
      retries: 3

  qdrant:
    image: qdrant/qdrant:latest
    ports:
      - "6333:6333"
    volumes:
      - qdrant_data:/qdrant/storage
    restart: unless-stopped

  worker:
    build:
      context: .
      dockerfile: Dockerfile.worker
    env_file:
      - .env.production
    depends_on:
      - redis
      - qdrant
    restart: unless-stopped

  n8n:
    image: n8nio/n8n:latest
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=${N8N_PASSWORD}
    volumes:
      - n8n_data:/home/node/.n8n
    restart: unless-stopped

volumes:
  redis_data:
  qdrant_data:
  n8n_data:
```

### .dockerignore

```
# .dockerignore — build context ko clean rakho
__pycache__
*.pyc
.git
.gitignore
.env
.env.*
venv
.venv
*.md
tests/
notebooks/
data/
```

### Day 1 Exercise

```
Apni Document AI project ke liye:
1. Multi-stage Dockerfile likho
2. docker-compose.yml banao (api + redis + qdrant)
3. .dockerignore banao
4. Build karo: docker compose build
5. Run karo: docker compose up -d
```

---

## Day 2 — Deployment Targets

### Options Comparison

```
┌───────────────┬──────────┬─────────┬───────────┬──────────┐
│ Platform      │  Price   │ Effort  │   GPU?   │  Domain  │
├───────────────┼──────────┼─────────┼───────────┼──────────┤
│ Hetzner VPS   │ $10/mo   │ Medium  │  No (CPU)│    ✅    │
│ Railway       │ $5/mo    │ Low     │  No      │    ✅    │
│ Render        │ $7/mo    │ Low     │  No      │    ✅    │
│ Fly.io        │ $5/mo    │ Medium  │  No      │    ✅    │
│ Modal         │ Pay/use  │ Low     │  ✅ Yes  │    ✅    │
│ RunPod        │ $0.5/hr  │ Medium  │  ✅ Yes  │    ❌    │
│ AWS EC2       │ $30/mo   │ High    │  ✅ Yes  │    ✅    │
└───────────────┴──────────┴─────────┴───────────┴──────────┘
```

### Hetzner VPS Setup (Recommended)

```bash
# 1. Buy Hetzner CX22 ($10/month)
# 2. SSH into server
ssh root@your-server-ip

# 3. Basic setup
apt update && apt upgrade -y
apt install -y docker.io docker-compose-plugin nginx certbot
ufw enable
ufw allow 22
ufw allow 80
ufw allow 443

# 4. Docker as non-root
usermod -aG docker $USER

# 5. Install fail2ban
apt install -y fail2ban
systemctl enable fail2ban

# 6. Clone your repo
git clone https://github.com/Raushan666java/document-ai.git
cd document-ai

# 7. Create .env.production
cat > .env.production << EOF
OPENAI_API_KEY=sk-...
DATABASE_URL=postgresql://user:pass@host/db
REDIS_URL=redis://redis:6379
QDRANT_URL=http://qdrant:6333
EOF

# 8. Deploy
docker compose up -d

# 9. Setup SSL
certbot --nginx -d document-ai.apexpillar.tech
```

### Railway / Render (Serverless Option)

```
Railway advantages:
  → Auto-deploy from GitHub
  → Built-in PostgreSQL + Redis
  → Automatic SSL
  → No server management
  → $5 credit included

Limitations:
  → No GPU
  → No persistent storage (ephemeral)
  → Cold starts
  → Sleep after inactivity (free tier)

When to use railway:
  → Prototypes
  → Client demos
  → MVP launches

When to use Hetzner:
  → Production
  → Heavy workloads
  → Need GPU
  → Custom configuration
```

### Day 2 Exercise

```
Document AI deploy karo Hetzner pe:

1. Hetzner account banao (referral se $20 free milega)
2. CX22 instance create karo ($10/mo)
3. SSH setup karo
4. Docker + Nginx install karo
5. Document AI repo clone karo
6. .env.production banao
7. docker compose up -d
8. Domain point karo
9. SSL setup karo (certbot)
10. Test karo: https://document-ai.apexpillar.tech/health
```

---

## Day 3 — GitHub Actions for AI Apps

### Basic CI Pipeline

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      redis:
        image: redis:7-alpine
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v4

      - name: Set up Python 3.12
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'
          cache: 'pip'

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
          pip install pytest pytest-cov ruff

      - name: Lint with Ruff
        run: ruff check .

      - name: Test with pytest
        run: |
          pytest tests/ --cov=app --cov-report=xml
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          REDIS_URL: redis://localhost:6379

      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

### CD Pipeline (Deploy to Hetzner)

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Build Docker image
        run: |
          docker build -t document-ai:latest .
          docker save document-ai:latest | gzip > image.tar.gz

      - name: Copy to server
        uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{ secrets.HETZNER_HOST }}
          username: ${{ secrets.HETZNER_USER }}
          key: ${{ secrets.HETZNER_SSH_KEY }}
          source: "image.tar.gz,docker-compose.yml,.env.production"
          target: "/opt/document-ai"

      - name: Deploy on server
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.HETZNER_HOST }}
          username: ${{ secrets.HETZNER_USER }}
          key: ${{ secrets.HETZNER_SSH_KEY }}
          script: |
            cd /opt/document-ai
            docker compose down
            docker load < image.tar.gz
            docker compose up -d
            docker system prune -f
            echo "✅ Deployed successfully"
```

### Secrets Management

```bash
# GitHub repo → Settings → Secrets and variables → Actions

# Add these secrets:
HETZNER_HOST=123.123.123.123
HETZNER_USER=root
HETZNER_SSH_KEY=-----BEGIN OPENSSH PRIVATE KEY-----
OPENAI_API_KEY=sk-...

# Useful tip: Avoid storing secrets in .env files in repo
# Use GitHub secrets and generate .env during CI
```

### Day 3 Exercise

```
1. GitHub repo mein secrets add karo
2. CI pipeline banake push karo
3. Check karo ki test pass ho raha hai
4. CD pipeline banake push karo  
5. Deploy trigger karo (push to main)
6. Verify: site accessible hai?
```

---

## Day 4 — Docker Compose for AI Stack

### Complete AI Stack Example

```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  traefik:
    image: traefik:v3.0
    command:
      - "--providers.docker=true"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.letsencrypt.acme.tlschallenge=true"
      - "--certificatesresolvers.letsencrypt.acme.email=raushan@apexpillar.tech"
      - "--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json"
    ports:
      - "443:443"
      - "80:80"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - traefik_letsencrypt:/letsencrypt
    restart: unless-stopped

  api:
    build:
      context: ./backend
      dockerfile: Dockerfile
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.api.rule=Host(`document-ai.apexpillar.tech`)"
      - "traefik.http.routers.api.tls.certresolver=letsencrypt"
    env_file:
      - .env.production
    depends_on:
      redis:
        condition: service_healthy
      qdrant:
        condition: service_healthy
    volumes:
      - ./data:/app/data
      - ./models:/app/models
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: 2G
          cpus: '1.0'

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      retries: 5
    deploy:
      resources:
        limits:
          memory: 512M

  qdrant:
    image: qdrant/qdrant:latest
    volumes:
      - qdrant_data:/qdrant/storage
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: 1G

  worker:
    build:
      context: ./backend
      dockerfile: Dockerfile.worker
    env_file:
      - .env.production
    depends_on:
      - redis
      - qdrant
    restart: unless-stopped
    deploy:
      replicas: 2
      resources:
        limits:
          memory: 2G
          cpus: '1.0'

  n8n:
    image: n8nio/n8n:latest
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.n8n.rule=Host(`n8n.apexpillar.tech`)"
      - "traefik.http.routers.n8n.tls.certresolver=letsencrypt"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=${N8N_PASSWORD}
    volumes:
      - n8n_data:/home/node/.n8n
    restart: unless-stopped

volumes:
  redis_data:
  qdrant_data:
  n8n_data:
  traefik_letsencrypt:
```

### Day 4 Exercise

```
Apne projects ke liye Docker Compose banao:

1. Document AI → api + redis + qdrant + worker
2. ApexERP → api + postgres + redis + qdrant + agents
3. Flow Studio → api + redis + worker (music generation)

Production-ready config:
  → Resource limits (memory, CPU)
  → Health checks
  → Restart policies
  → Volume management
  → Traefik reverse proxy
```

---

## Day 5 — Environment & Secrets Management

### Environment Strategy

```
.env.local         → Local development
.env.staging       → Staging server
.env.production    → Production (NEVER commit!)

.env.example       → Committed to repo (template)
```

### Docker Secrets (Swarm mode)

```yaml
# Use Docker secrets instead of env for sensitive data
version: '3.8'

secrets:
  openai_api_key:
    file: ./secrets/openai_api_key.txt
  db_password:
    file: ./secrets/db_password.txt

services:
  api:
    build: .
    secrets:
      - openai_api_key
      - db_password
    # Inside container: /run/secrets/openai_api_key
```

### Python Secret Management

```python
# config.py
import os
from functools import lru_cache
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # App
    app_name: str = "Document AI"
    debug: bool = False

    # API Keys
    openai_api_key: str = ""
    langsmith_api_key: str = ""

    # Database
    database_url: str = "sqlite:///./data.db"
    redis_url: str = "redis://localhost:6379"

    # Vector DB
    qdrant_url: str = "http://localhost:6333"
    qdrant_api_key: str = ""

    # Storage
    upload_dir: str = "./data/uploads"

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

    def get_secret(self, key: str) -> str:
        # Docker secret support
        secret_path = f"/run/secrets/{key}"
        if os.path.exists(secret_path):
            with open(secret_path) as f:
                return f.read().strip()
        return getattr(self, key, "")

@lru_cache()
def get_settings():
    return Settings()
```

### Day 5 Exercise

```
1. .env.example banao for all 3 projects
2. .env.production banao (locally, gitignore mein)
3. Config class banao (Pydantic Settings)
4. Docker secrets support add karo
5. Test: bina .env ke bhi app chalni chahiye (defaults)
```

---

## Day 6 — PRACTICAL: Deploy Document AI to Hetzner

### Complete Deployment Walkthrough

```bash
# Step 1: Hetzner Server Setup
ssh root@your-server-ip

# Update & install basics
apt update && apt upgrade -y
apt install -y docker.io docker-compose-plugin nginx certbot fail2ban ufw

# Firewall
ufw default deny incoming
ufw default allow outgoing
ufw allow 22
ufw allow 80
ufw allow 443
ufw enable

# Step 2: Clone repo
mkdir -p /opt/apps
cd /opt/apps
git clone https://github.com/Raushan666java/document-ai.git
cd document-ai

# Step 3: Environment setup
cat > .env.production << 'EOF'
OPENAI_API_KEY=sk-your-key-here
LANGCHAIN_API_KEY=ls-your-key-here
LANGCHAIN_TRACING_V2=true
REDIS_URL=redis://redis:6379
QDRANT_URL=http://qdrant:6333
DATABASE_URL=postgresql://user:pass@postgres:5432/documentai
UPLOAD_DIR=/app/data/uploads
EOF

# Step 4: Start services
docker compose -f docker-compose.prod.yml up -d

# Step 5: Check health
docker compose ps
curl http://localhost:8000/health

# Step 6: Setup domain + SSL
# Domain: document-ai.apexpillar.tech → A record → server IP
certbot --nginx -d document-ai.apexpillar.tech

# Step 7: Test full flow
curl -X POST https://document-ai.apexpillar.tech/api/query \
  -H "Content-Type: application/json" \
  -d '{"question": "What is this document about?"}'

# Step 8: Monitor logs
docker compose logs -f --tail=100
```

### Production Checklist

```
✅ Docker multi-stage build → small images
✅ Non-root user in containers
✅ Resource limits (memory, CPU)
✅ Health checks on all services
✅ Restart policy: unless-stopped
✅ Firewall: only 22, 80, 443 open
✅ SSL: Let's Encrypt auto-renewal
✅ Logs: docker compose logs (later Loki)
✅ Backups: volume snapshots
✅ Monitoring: docker stats | later Grafana
```

### Day 6 Exercise

```
Today ka target:
  → Document AI full production deploy
  → Domain + SSL working
  → Health endpoint returning 200
  → At least 1 test query working
  → All services running (api, redis, qdrant, worker)
  → Docker compose restart se system recover ho raha hai

Write the deploy.sh script:
  #!/bin/bash
  # Production deploy script for Document AI
  # Usage: ./deploy.sh
```

---

## Day 7 — REST + Troubleshooting

### Common Problems & Solutions

```
Problem 1: Container keeps restarting
  → docker compose logs api
  → Check .env variables
  → Check port conflicts

Problem 2: Redis connection refused
  → Check service name in .env
  → Wait for health check
  → docker compose restart redis

Problem 3: Qdrant not accepting connections
  → Check disk space (df -h)
  → docker compose logs qdrant
  → Reset volume: docker compose down -v

Problem 4: Out of memory
  → docker stats (check memory usage)
  → Add memory limits
  → Swap enable karo

Problem 5: SSL not renewing
  → certbot renew --dry-run
  → Check port 80 is accessible
  → Check DNS records
```

### Day 7 — Week 1 Checklist

```
DONE?  ┌──────────────────────────────────────┐
  ☐    │ Docker multi-stage build ready        │
  ☐    │ docker-compose for AI stack ready     │
  ☐    │ Hetzner server setup + secured        │
  ☐    │ Document AI deployed                  │
  ☐    │ Domain + SSL configured               │
  ☐    │ GitHub Actions CI pipeline working    │
  ☐    │ .env strategy for dev/prod            │
  ☐    │ Deploy script (./deploy.sh) ready      │
  ☐    │ Can restart and recover               │
  └──────────────────────────────────────┘
```

---

## Resources

- **Docker Docs:** [docs.docker.com](https://docs.docker.com)
- **Hetzner:** [hetzner.com](https://hetzner.com)
- **GitHub Actions:** [docs.github.com/actions](https://docs.github.com/actions)
- **Traefik:** [traefik.io](https://traefik.io)
- **certbot:** [certbot.eff.org](https://certbot.eff.org)
