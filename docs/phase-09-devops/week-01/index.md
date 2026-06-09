# Week 1 — Docker & Deploy

**Goal:** AI applications ko containerize karo aur production mein deploy karo

---

## Day 1 — Docker Review

### Dockerfile Patterns — Deep Dive

Dockerfile ka matlab hai: tumhari application ka blueprint. Laravel developer ke liye analogy — jaise `composer.json` dependency define karta hai, Dockerfile poora environment define karta hai.

```dockerfile
# ❌ BAD Dockerfile — common mistakes
FROM python:3.12
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]

# Problems:
# 1. Full Python image (1GB+) instead of slim
# 2. COPY before pip — no layer caching
# 3. All files copied (.git, __pycache__, .env)
# 4. Runs as root (security risk)
# 5. No .dockerignore


# ✅ GOOD Dockerfile — production-ready multi-stage
# Stage 1: Build dependencies
FROM python:3.12-slim AS builder

# Install build dependencies (only needed for compilation)
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt .

# Install with --user to keep it in /root/.local
RUN pip install --user --no-cache-dir -r requirements.txt


# Stage 2: Runtime — minimal image
FROM python:3.12-slim AS runtime

# Only runtime dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq5 \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy only installed packages from builder
COPY --from=builder /root/.local /root/.local

# Copy application code
COPY . .

# Set PATH to include user-installed packages
ENV PATH=/root/.local/bin:$PATH \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

EXPOSE 8000

# Non-root user for security
RUN useradd -m -u 1000 appuser && \
    chown -R appuser:appuser /app
USER appuser

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Docker Layer Caching Explained

```dockerfile
"""
Laravel dev mental model for Docker layers:

Har Dockerfile instruction ek layer banata hai.
Docker cache karta hai har layer ko.

Jaise Laravel ka config cache hota hai,
Docker bhi previous builds ki layers cache karta hai.

Cache hit tab hota hai jab:
  → Layer ka context change nahi hua
  → Previous layer ka cache available hai

Cache miss tab hota hai jab:
  → COPY mein file change hui
  → RUN command change hua
  → FROM image version change hua

Isliye hum COPY requirements.txt pehle karte hain (rarely changes)
aur COPY . baad mein (frequently changes)
"""

# Layer caching optimization

# Layer 1: Always cached (base image rarely changes)
FROM python:3.12-slim AS builder

# Layer 2: Cached until apt packages change
RUN apt-get update && apt-get install -y gcc libpq-dev

# Layer 3: Cached until requirements.txt changes (🔥 this is the KEY optimization)
COPY requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt

# Layer 4: ALWAYS rebuilt (code changes frequently)
COPY . .

"""
Cache hit ratio typically:
  - Layer 1-3: 90%+ cache hit (rarely change)
  - Layer 4: 10% cache hit (always changing)
  
Without optimization (COPY . first):
  - Layer 2 (pip install) runs EVERY time = 5+ minutes each build
With optimization (requirements.txt first):
  - pip install runs only when dependencies change = 5 minutes saved per build
"""
```

### Docker Networking — Bridge vs Host vs Overlay

```yaml
Docker Network Types:

bridge (default):
  - Isolated network on single host
  - Containers communicate via service names
  - Port mapping: -p 8000:8000
  - Use: Single server, Compose
  - Security: Good (isolated by default)

host:
  - Container uses host's network stack directly
  - No port mapping needed
  - Performance: Best (no NAT overhead)
  - Use: High-performance, monitoring agents
  - Security: Poor (no isolation)

overlay:
  - Multi-host networking (Swarm/Kubernetes)
  - Containers across hosts communicate
  - Use: Distributed systems
  - Complexity: High (needs key-value store)

For AI Apps:
  - Use bridge (default) for most services
  - Use host only if you need raw performance
  - AI app example: n8n + Qdrant + Redis + API all on bridge network
```

### Docker Volumes — Data Persistence

```yaml
Volume Types for AI Apps:

named volumes (managed by Docker):
  redis_data:
  qdrant_data:
  - Location: /var/lib/docker/volumes/
  - Best for: Database data, vector indices
  - Backup: docker run --rm -v redis_data:/data alpine tar czf backup.tar.gz /data

bind mounts:
  ./models:/app/models
  ./data:/app/data
  - Location: Anywhere on host
  - Best for: Model files, large datasets, development hot-reload
  - Permission: Uses host user/group IDs

tmpfs mounts (in-memory):
  --tmpfs /app/cache:size=100M
  - Location: RAM only
  - Best for: Cache, temp files
  - Speed: Fastest (RAM)
  - Warning: Lost on container restart

AI-Specific Volume Strategy:
  - Qdrant data → named volume (backup regularly, 1-10GB expected)
  - Model weights → bind mount (large 2-30GB, pre-downloaded)
  - Upload directory → bind mount (user uploads, needs persistence)
  - Redis data → named volume with AOF (can recreate from DB)
  - n8n data → named volume (workflow configurations)
  - Temp files → tmpfs in RAM (ephemeral inference cache)

# Volume backup script example
: '
#!/bin/bash
# Backup all AI app volumes
BACKUP_DIR="/backups/$(date +%Y%m%d)"
mkdir -p $BACKUP_DIR

for volume in redis_data qdrant_data n8n_data; do
    docker run --rm -v ${volume}:/data \
        -v $BACKUP_DIR:/backup \
        alpine tar czf /backup/${volume}.tar.gz -C /data .
done

echo "Backup complete: $BACKUP_DIR"
'
```

### .dockerignore — Why It Matters

```
# .dockerignore — build context ko clean rakho

# Python cache — useless in container
__pycache__
*.pyc
*.pyo
*.egg-info/

# Git — full history is huge
.git/
.gitignore

# Environment files — contain secrets!
.env
.env.*
!.env.example

# Virtual environments — don't copy host venv
venv/
.venv/
env/

# Documentation — not needed at runtime
*.md
docs/
README*

# Tests & dev files
tests/
test_*
notebooks/
*.ipynb
Dockerfile
docker-compose*.yml

# Large data files — download at runtime
data/
models/
*.pth
*.pt
*.bin

# CI artifacts
.coverage
htmlcov/
.mypy_cache/
.ruff_cache/

"""
Impact of NOT having .dockerignore:
  - .git folder: 100-500MB (full history)
  - node_modules: 500MB-1GB (if frontend)
  - __pycache__: 50-100MB
  - .env: Your secrets leaked in image layers!
  - Total: ~1-2GB extra → slower builds, bigger images
  
With .dockerignore:
  - Only source code + requirements
  - ~5-50MB build context
  - 10-50x faster docker build
"""
```

### Day 1 Exercise — Expanded

```
Apni Document AI project ke liye:

1. Multi-stage Dockerfile likho:
   - Stage 1: pip install with build tools (gcc, libpq-dev)
   - Stage 2: slim runtime with only libpq5 + curl
   - Non-root user (appuser:appuser)
   - HEALTHCHECK endpoint
   - Layer ordering optimized for caching

2. docker-compose.yml banao (api + redis + qdrant):
   - All services on same network
   - Redis + Qdrant with health checks
   - API depends_on both with condition: service_healthy
   - Resource limits (memory + CPU)

3. .dockerignore banao:
   - Exclude .git, __pycache__, .env, venv, data/
   - Check build context size: docker build -t test . 2>&1

4. Build karo: docker compose build
5. Run karo: docker compose up -d
6. Verify: docker compose ps (all 3 services healthy)
```

---

## Day 2 — Deployment Targets

### Options Comparison — Expanded Analysis

Deployment target selection ka matlab hai: tumhari AI app kahan live hogi. Laravel developer ke liye analogy — jaise tum Shared Hosting vs VPS vs Laravel Forge mein choose karte ho.

```python
"""
Deployment Decision Framework for AI Apps
"""

from dataclasses import dataclass
from typing import List, Optional

@dataclass
class DeploymentRequirement:
    needs_gpu: bool = False
    needs_persistent_storage: bool = True
    expected_users: int = 100
    budget_monthly: float = 50.0
    need_domain: bool = True
    need_ssl: bool = True
    team_size: int = 1


class DeploymentPlanner:
    """
    Recommend deployment target based on requirements
    
    Laravel analogy: Laravel Forge for production,
    but for AI apps we need different options
    """

    PLATFORMS = {
        "hetzner": {
            "price_range": "$5-100/mo",
            "gpu": "No (CPU only on basic plans)",
            "gpu_price": "$0.5-2/hr (AUX: A100, RTX4090)",
            "effort": "Medium",
            "storage": "Persistent SSD, 20-100GB included",
            "ssl": "Free via certbot",
            "domain": "Yes, any domain",
            "best_for": "Production AI apps, Document AI, ApexERP",
            "scaling": "Manual (bigger VPS or cluster)"
        },
        "railway": {
            "price_range": "$5-50/mo",
            "gpu": "No",
            "gpu_price": "N/A",
            "effort": "Low",
            "storage": "Ephemeral (disappears on restart)",
            "ssl": "Automatic",
            "domain": "Built-in *.railway.app + custom",
            "best_for": "Prototypes, MVPs, demos",
            "scaling": "Horizontal (add more instances)"
        },
        "modal": {
            "price_range": "$0.50/hr (pay per use)",
            "gpu": "Yes (A100, H100, L40S)",
            "gpu_price": "Included in per-second billing",
            "effort": "Low",
            "storage": "Ephemeral + cloud volumes (EBS/NFS)",
            "ssl": "Automatic",
            "domain": "Built-in *.modal.run",
            "best_for": "GPU inference, batch processing, training",
            "scaling": "Auto (scale to zero when idle)"
        },
        "runpod": {
            "price_range": "$0.5-2/hr",
            "gpu": "Yes (RTX3090, A100, A6000)",
            "gpu_price": "Included (pay per hour)",
            "effort": "Medium",
            "storage": "Persistent (network storage +$0.07/GB/mo)",
            "ssl": "Manual via reverse proxy",
            "domain": "Manual setup",
            "best_for": "Model serving, fine-tuning, heavy GPU workloads",
            "scaling": "Manual (rent more pods)"
        },
        "render": {
            "price_range": "$7-25/mo",
            "gpu": "No",
            "gpu_price": "N/A",
            "effort": "Low",
            "storage": "Ephemeral + managed disks",
            "ssl": "Automatic",
            "domain": "Built-in *.onrender.com + custom",
            "best_for": "Web APIs, CRUD apps, lightweight services",
            "scaling": "Horizontal (paid plans)"
        },
        "aws_ec2": {
            "price_range": "$30-500/mo",
            "gpu": "Yes (g4dn, p3, p4 instances)",
            "gpu_price": "$0.5-30/hr",
            "effort": "High",
            "storage": "EBS (gp3, io1) + S3",
            "ssl": "AWS Certificate Manager",
            "domain": "Route53",
            "best_for": "Enterprise, compliance, autoscaling",
            "scaling": "Auto-scaling groups, ECS, EKS"
        }
    }

    @staticmethod
    def recommend(requirements: DeploymentRequirement) -> List[str]:
        """Get ranked deployment recommendations"""
        scores = []

        for name, platform in DeploymentPlanner.PLATFORMS.items():
            score = 0

            if requirements.needs_gpu and platform["gpu"] != "No":
                score += 3
            elif not requirements.needs_gpu:
                score += 1

            if requirements.budget_monthly >= 50:
                score += 1  # Can afford most platforms

            if requirements.need_domain and platform["domain"] != "N/A":
                score += 1

            if requirements.need_ssl and "Automatic" in platform["ssl"]:
                score += 1

            scores.append((score, name, platform))

        scores.sort(reverse=True, key=lambda x: x[0])
        return [
            f"{name} (score: {s}/6) — {p['best_for']}"
            for s, name, p in scores
        ]


# Example: Document AI deployment analysis
planner = DeploymentPlanner()
recommendations = planner.recommend(
    DeploymentRequirement(
        needs_gpu=False,
        expected_users=1000,
        budget_monthly=50,
        need_domain=True
    )
)

for rec in recommendations:
    print(rec)

# Output:
# 1. hetzner (score: 4/6) — Best for production AI apps
# 2. railway (score: 4/6) — Best for prototypes and demos
# 3. render (score: 3/6) — Best for lightweight services
```

```
Platform Decision Matrix (Detailed):

Feature           | Hetzner  | Railway  | Modal    | RunPod   | Render   | AWS
──────────────────┼──────────┼──────────┼──────────┼──────────┼──────────┼──────────
CPU Inference     | ✅✅    | ✅       | ✅       | ✅       | ✅      | ✅✅
GPU Inference     | ✅ Aux   | ❌       | ✅✅    | ✅✅    | ❌      | ✅
Vector DB (Qdrant)| ✅✅    | ✅       | ❌      | ✅       | ✅      | ✅✅
Redis             | ✅✅    | ✅ Mngd  | ❌      | ✅ Manual | ✅ Mngd | ✅✅
Persistent Storage| ✅✅    | ❌       | ❌      | ✅ NFS   | ✅ Disk | ✅✅
Automatic SSL     | ✅ Cert  | ✅ Auto  | ✅ Auto  | ❌ Manual | ✅ Auto | ✅ CM
Custom Domain     | ✅      | ✅       | ✅       | ❌       | ✅      | ✅
Cold Start        | ❌ N/A  | ⚠️ 5-10s | ⚠️ 1-2s | ❌ N/A   | ⚠️ 10s | ⚠️ Seconds
Cost (predictable)| ✅ Fixed | ✅ Fixed | ⚠️ Usage| ⚠️ Hourly| ✅ Fixed| ⚠️ Complex
Setup Time        | 30 min  | 5 min    | 10 min   | 15 min   | 5 min   | 2 hours
```

### Hetzner VPS Setup — Expanded Guide

```bash
"""
Complete Hetzner setup for AI applications
"""

# ============================================
# PHASE 1: Server Provisioning
# ============================================

# 1. Buy Hetzner VPS
#    → Go to hetzner.com → Cloud → CX22 ($10/mo) or CX32 ($20/mo)
#    → For AI apps: Minimum CX32 (8GB RAM, 4 vCPU)
#    → OS: Ubuntu 24.04 LTS (recommended for Docker)
#    → Location: Nuremberg or Helsinki (cheapest)
#    → SSH key: Add your public key (MANDATORY — no password login)

# 2. First SSH
ssh root@your-server-ip

# Verify you're on the right machine
hostname && uname -a

# ============================================
# PHASE 2: Security Hardening
# ============================================

# Update everything
apt update && apt upgrade -y
apt autoremove -y

# Install essential tools
apt install -y \
    docker.io \
    docker-compose-plugin \
    nginx \
    certbot \
    python3-certbot-nginx \
    ufw \
    fail2ban \
    htop \
    netdata \
    curl \
    wget \
    git \
    unzip

# Firewall configuration
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp              # SSH
ufw allow 80/tcp              # HTTP (for certbot)
ufw allow 443/tcp             # HTTPS
ufw allow 6379/tcp            # Redis (only if needed externally)
ufw allow 6333/tcp            # Qdrant (only if needed externally)
ufw --force enable

# SSH hardening
sed -i 's/PermitRootLogin yes/PermitRootLogin prohibit-password/' /etc/ssh/sshd_config
sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
systemctl restart sshd

# Docker non-root access (security best practice)
usermod -aG docker $USER

# Fail2ban for SSH protection
cat > /etc/fail2ban/jail.local << 'EOF'
[sshd]
enabled = true
bantime = 3600
findtime = 600
maxretry = 3
EOF

systemctl enable fail2ban
systemctl start fail2ban

# ============================================
# PHASE 3: Docker Configuration
# ============================================

# Docker daemon config for AI workloads
cat > /etc/docker/daemon.json << 'EOF'
{
    "log-driver": "json-file",
    "log-opts": {
        "max-size": "10m",
        "max-file": "3"
    },
    "storage-driver": "overlay2",
    "experimental": true
}
EOF

systemctl restart docker

# ============================================
# PHASE 4: Swap for RAM-intensive AI apps
# ============================================

# AI apps (especially Qdrant) can use a lot of RAM
fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile

# Make permanent
echo '/swapfile none swap sw 0 0' >> /etc/fstab

# Verify
free -h
swapon --show

# ============================================
# PHASE 5: Monitoring Setup
# ============================================

# Netdata (real-time monitoring)
bash <(curl -Ss https://my-netdata.io/kickstart.sh) --stable-channel
# Access: http://your-server-ip:19999

# Docker stats (quick check)
docker stats --no-stream

# ============================================
# PHASE 6: Application Deploy
# ============================================

# Clone and deploy
mkdir -p /opt/apps
cd /opt/apps
git clone https://github.com/Raushan666java/document-ai.git
cd document-ai

# Create production env
cat > .env.production << 'EOF'
OPENAI_API_KEY=sk-your-key-here
LANGCHAIN_API_KEY=ls-your-key-here
LANGCHAIN_TRACING_V2=true
REDIS_URL=redis://redis:6379
QDRANT_URL=http://qdrant:6333
DATABASE_URL=postgresql://user:pass@postgres:5432/documentai
UPLOAD_DIR=/app/data/uploads
N8N_PASSWORD=your-strong-password
EOF

chmod 600 .env.production  # Only root can read

# Deploy
docker compose -f docker-compose.prod.yml up -d

# ============================================
# PHASE 7: SSL + Domain
# ============================================

# Point your domain: document-ai.apexpillar.tech → server IP
# Then run certbot:

certbot --nginx -d document-ai.apexpillar.tech --non-interactive \
    --agree-tos --email raushan@apexpillar.tech

# Auto-renewal is set up automatically by certbot
# Test renewal:
certbot renew --dry-run
```

### Railway / Render (Serverless) — Deep Analysis

```
Railway Advantages (for AI apps):
  → Auto-deploy from GitHub (git push → deploy)
  → Managed PostgreSQL ($5/mo for 1GB)
  → Managed Redis ($5/mo for 256MB)
  → Automatic SSL + CDN
  → Built-in logging dashboard
  → Environment variables UI
  → $5 free credit included

Railway Limitations for AI:
  → NO GPU — cannot run model inference
  → NO persistent disk — can't store vector DB locally
  → Cold starts — 5-10 seconds after inactivity
  → Ephemeral storage — files disappear on restart
  → Max 512MB RAM on free tier
  → No custom Docker networking

When to use Railway:
  ✅ Prototypes and MVPs (non-GPU)
  ✅ Client demos (quick setup)
  ✅ Chatbots without RAG
  ✅ API-only services (no vector DB)
  
When to AVOID Railway:
  ❌ Any service needing GPU
  ❌ Qdrant/Weaviate/Milvus (need persistent disk)
  ❌ Long-running batch processing (>30 min timeout)
  ❌ Large file uploads (ephemeral storage issue)
  
Workaround for Railway:
  → Use managed Qdrant Cloud instead of self-hosted
  → Use S3 for file storage (not local disk)
  → Use external PostgreSQL (not railway's)
```

### Day 2 Exercise — Expanded

```
Document AI deploy karo Hetzner pe:

Step-by-Step:

1. Hetzner account banao (referral se $20 free milega)
   → hetzner.com → Cloud Console
   → Add SSH key (your public key)

2. CX22 instance create karo ($10/mo):
   → CX22 = 4GB RAM, 2 vCPU, 40GB SSD
   → For Document AI: 4GB RAM enough if INT8 quantization
   → Ubuntu 24.04 LTS
   → Wait 2 minutes for provisioning

3. SSH setup:
   ssh root@<server-ip>
   → Verify: cat /etc/os-release
   → Check: free -h, df -h

4. Security:
   → ufw enable (ports: 22, 80, 443)
   → fail2ban configure
   → SSH key-only auth

5. Docker + Nginx:
   → apt install docker.io docker-compose-plugin nginx certbot
   → Test: docker run hello-world

6. Deploy:
   → git clone document-ai repo
   → Create .env.production
   → docker compose up -d

7. Domain + SSL:
   → A record → server IP
   → certbot --nginx -d yourdomain.com

8. Verify:
   → curl https://yourdomain.com/health
   → Open in browser
   → docker compose ps (all green)

Production Tip:
  Hetzner CX22 ($10/mo) is enough for up to 100 users
  For 1000+ users: CX52 ($40/mo) with 16GB RAM
```

---

## Day 3 — Docker Compose for AI Stack

### Complete AI Stack — Deep Configuration

```yaml
# docker-compose.prod.yml — Production-ready AI stack
#
# Laravel dev mental model:
# Just like docker-compose is the docker equivalent
# of Laravel's .env + config + service providers combined

version: '3.8'

services:
  # ─── Reverse Proxy ─────────────────────────
  traefik:
    image: traefik:v3.0
    container_name: traefik
    command:
      # Provider: Docker
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      # HTTP entrypoint
      - "--entrypoints.web.address=:80"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entryPoint.scheme=https"
      # HTTPS entrypoint
      - "--entrypoints.websecure.address=:443"
      # Let's Encrypt
      - "--certificatesresolvers.letsencrypt.acme.tlschallenge=true"
      - "--certificatesresolvers.letsencrypt.acme.email=raushan@apexpillar.tech"
      - "--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - traefik_letsencrypt:/letsencrypt
    restart: unless-stopped
    networks:
      - ai_network

  # ─── API Service ───────────────────────────
  api:
    build:
      context: ./backend
      dockerfile: Dockerfile
      args:
        - ENVIRONMENT=production
    container_name: document-ai-api
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.api.rule=Host(`document-ai.apexpillar.tech`)"
      - "traefik.http.routers.api.tls.certresolver=letsencrypt"
      - "traefik.http.services.api.loadbalancer.server.port=8000"
    env_file:
      - .env.production
    depends_on:
      redis:
        condition: service_healthy
      qdrant:
        condition: service_healthy
      postgres:
        condition: service_healthy
    volumes:
      # Persistent data
      - api_upload_data:/app/data/uploads
      - api_model_cache:/app/models
      # Bind mount for config (optional)
      - ./config:/app/config:ro
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: 2G
          cpus: '1.0'
        reservations:
          memory: 512M
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    networks:
      - ai_network

  # ─── Redis Cache ───────────────────────────
  redis:
    image: redis:7-alpine
    container_name: document-ai-redis
    command: >
      redis-server
      --appendonly yes
      --maxmemory 1gb
      --maxmemory-policy allkeys-lru
      --save 900 1
      --save 300 10
      --save 60 10000
    volumes:
      - redis_data:/data
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: 1G
          cpus: '0.5'
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 3s
      retries: 5
    networks:
      - ai_network

  # ─── Vector Database ───────────────────────
  qdrant:
    image: qdrant/qdrant:v1.10.0
    container_name: document-ai-qdrant
    environment:
      - QDRANT__SERVICE__GRPC_PORT=6334
      - QDRANT__SERVICE__API_PORT=6333
      - QDRANT__STORAGE__OPTIMIZERS__DEFAULT_SEGMENT_NUMBER=2
      - QDRANT__LOG_LEVEL=INFO
    volumes:
      - qdrant_data:/qdrant/storage
      - ./qdrant/config.yaml:/qdrant/config/production.yaml:ro
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: 2G
          cpus: '1.0'
        reservations:
          memory: 512M
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:6333/healthz"]
      interval: 15s
      timeout: 5s
      retries: 5
      start_period: 30s
    networks:
      - ai_network

  # ─── PostgreSQL Database ───────────────────
  postgres:
    image: postgres:16-alpine
    container_name: document-ai-postgres
    environment:
      POSTGRES_DB: documentai
      POSTGRES_USER: appuser
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql:ro
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: 1G
          cpus: '0.5'
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U appuser -d documentai"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - ai_network

  # ─── Background Worker ─────────────────────
  worker:
    build:
      context: ./backend
      dockerfile: Dockerfile.worker
    container_name: document-ai-worker
    env_file:
      - .env.production
    depends_on:
      - redis
      - qdrant
      - postgres
    restart: unless-stopped
    deploy:
      replicas: 2
      resources:
        limits:
          memory: 2G
          cpus: '1.0'
    healthcheck:
      test: ["CMD", "python", "-c", "import celery; print('ok')"]
      interval: 60s
      timeout: 10s
      retries: 3
    networks:
      - ai_network

  # ─── Workflow Automation (n8n) ────────────
  n8n:
    image: n8nio/n8n:latest
    container_name: document-ai-n8n
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.n8n.rule=Host(`n8n.apexpillar.tech`)"
      - "traefik.http.routers.n8n.tls.certresolver=letsencrypt"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=${N8N_PASSWORD}
      - N8N_HOST=n8n.apexpillar.tech
      - N8N_PORT=5678
    volumes:
      - n8n_data:/home/node/.n8n
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: 512M
          cpus: '0.5'
    networks:
      - ai_network

  # ─── Monitoring Stack ─────────────────────
  prometheus:
    image: prom/prometheus:v2.52.0
    container_name: document-ai-prometheus
    command:
      - "--config.file=/etc/prometheus/prometheus.yml"
      - "--storage.tsdb.path=/prometheus"
      - "--storage.tsdb.retention.time=15d"
    volumes:
      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml:ro
      - prometheus_data:/prometheus
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.prometheus.rule=Host(`metrics.apexpillar.tech`)"
      - "traefik.http.routers.prometheus.tls.certresolver=letsencrypt"
    networks:
      - ai_network

  grafana:
    image: grafana/grafana:latest
    container_name: document-ai-grafana
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=${GRAFANA_PASSWORD}
      - GF_INSTALL_PLUGINS=grafana-piechart-panel
    volumes:
      - ./grafana/dashboards:/etc/grafana/provisioning/dashboards:ro
      - ./grafana/datasources:/etc/grafana/provisioning/datasources:ro
      - grafana_data:/var/lib/grafana
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.grafana.rule=Host(`grafana.apexpillar.tech`)"
      - "traefik.http.routers.grafana.tls.certresolver=letsencrypt"
    depends_on:
      - prometheus
    networks:
      - ai_network

volumes:
  redis_data:
    driver: local
  qdrant_data:
    driver: local
  postgres_data:
    driver: local
  api_upload_data:
    driver: local
  api_model_cache:
    driver: local
  n8n_data:
    driver: local
  traefik_letsencrypt:
    driver: local
  prometheus_data:
    driver: local
  grafana_data:
    driver: local

networks:
  ai_network:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16
```

### Docker Compose — Service Communication

```yaml
"""
How services talk to each other in Docker Compose:

Each service becomes a DNS entry on the Compose network.
API connects to redis via hostname "redis" (not localhost).
This works because they're on the same Compose network.

Laravel analogy: 
  config/database.php mein 'host' => env('REDIS_HOST', 'redis')
  Docker Compose mein service name = hostname

.env.production values:
  REDIS_URL=redis://redis:6379      → "redis" is the service name
  QDRANT_URL=http://qdrant:6333     → "qdrant" is the service name
  DATABASE_URL=postgresql://user:pass@postgres:5432/documentai

This is why you DON'T use localhost in Docker:
  ❌ REDIS_URL=redis://localhost:6379  → "localhost" is the container itself, not redis
  ✅ REDIS_URL=redis://redis:6379      → "redis" is the service hostname

Port mapping (host:container) is only needed for EXTERNAL access:
  ports:
    - "8000:8000"  # External → Container
  Internal services don't need port mapping:
    - redis doesn't need ports (only api and other services use it)
    - qdrant doesn't need ports (only api uses it internally)

Exception: You might expose qdrant:6333 or redis:6379 for debugging
    → Remove in production!
"""
```

### Resource Management for AI Containers

```yaml
"""
AI App Resource Management Guide:

Why resource limits matter:
  Without limits, one container can eat all server RAM
  Qdrant + LLM + Redis on same server = potential OOM

Memory Calculation for Document AI:
  - API service: peak ~1GB (with large context windows)
  - Redis: max 1GB (with AOF persistence)
  - Qdrant: peak ~2GB (with 100K+ vectors in RAM)
  - Worker: peak ~2GB (batch embedding generation)
  - n8n: ~200MB
  - Postgres: ~500MB
  - System overhead: ~1GB
  Total peak: ~7.7GB
  Recommendation: 16GB server minimum

CPU Allocation:
  - AI inference is CPU-intensive (embedding generation)
  - Don't give all CPUs to one service
  - Workers need CPU for batch processing
  - Qdrant needs CPU for HNSW graph searches

Resource Limit Template:
  api:      mem_limit=2G,  cpus=1.0
  redis:    mem_limit=1G,  cpus=0.5
  qdrant:   mem_limit=2G,  cpus=1.0
  postgres: mem_limit=1G,  cpus=0.5
  worker:   mem_limit=2G,  cpus=1.0
  n8n:      mem_limit=512M, cpus=0.5
  traefik:  mem_limit=256M, cpus=0.2
"""
```

### Day 3 Exercise — Expanded

```
Apne teeno projects ke liye Docker Compose banao:

1. Document AI → api + redis + qdrant + worker + postgres
   - Redis for caching + rate limiting
   - Qdrant for vector storage
   - Worker for background embedding
   - Postgres for chat history + metadata

2. ApexERP → api + postgres + redis + qdrant + agents
   - 5 agent services (inventory, order, support, analytics, whatsapp)
   - RabbitMQ for agent communication
   - Each agent has its own resource limits

3. Flow Studio → api + redis + worker (music generation)
   - GPU worker for ACE-Step + YuE
   - CPU worker for FFmpeg
   - Redis queue for job management

Production-ready features to include:
  → Resource limits (memory, CPU) for every service
  → Health checks with start_period
  → Restart policies (unless-stopped)
  → Named volumes for all persistent data
  → Traefik reverse proxy with Let's Encrypt
  → Network isolation (internal vs external)
  → Logging limits (max 10MB per file, 3 files)
```

---

## Day 4 — Deployment & CI/CD

### GitHub Actions — Complete Pipeline

```yaml
"""
Complete CI/CD pipeline for AI applications

Laravel dev mental model:
GitHub Actions = Laravel Forge's deploy scripts +
Envoyer's zero-downtime deployment,
but for ANY hosting provider
"""

# .github/workflows/ci.yml — Continuous Integration

name: CI Pipeline

on:
  push:
    branches: [main, develop]
    paths-ignore:
      - 'docs/**'
      - 'README.md'
      - '.gitignore'
  pull_request:
    branches: [main]

env:
  PYTHON_VERSION: '3.12'

jobs:
  # Job 1: Code Quality Check
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: ${{ env.PYTHON_VERSION }}

      - name: Install linters
        run: |
          pip install ruff mypy

      - name: Ruff linting
        run: ruff check . --output-format=github

      - name: Type checking
        run: mypy app/ --ignore-missing-imports

  # Job 2: Tests (with Redis service)
  test:
    runs-on: ubuntu-latest
    needs: lint

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

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: ${{ env.PYTHON_VERSION }}
          cache: 'pip'

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements-dev.txt

      - name: Run tests with coverage
        run: |
          pytest tests/ \
            --cov=app \
            --cov-report=xml \
            --cov-report=term \
            -v --tb=short
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          REDIS_URL: redis://localhost:6379

      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v4
        with:
          file: ./coverage.xml
          fail_ci_if_error: false

  # Job 3: Build & Scan Docker image
  docker-build:
    runs-on: ubuntu-latest
    needs: test

    steps:
      - uses: actions/checkout@v4

      - name: Build Docker image
        run: |
          docker build \
            --build-arg BUILDKIT_INLINE_CACHE=1 \
            -t document-ai:${{ github.sha }} \
            -t document-ai:latest \
            .

      - name: Scan for vulnerabilities
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'document-ai:latest'
          format: 'sarif'
          output: 'trivy-results.sarif'
          severity: 'CRITICAL,HIGH'
          exit-code: '1'

      - name: Upload Trivy results
        uses: github/codeql-action/upload-sarif@v3
        with:
          sarif_file: 'trivy-results.sarif'


# .github/workflows/cd.yml — Continuous Deployment
name: Deploy to Production

on:
  workflow_run:
    workflows: ["CI Pipeline"]
    branches: [main]
    types:
      - completed

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}

    steps:
      - uses: actions/checkout@v4

      - name: Build production image
        run: |
          docker build \
            --cache-from document-ai:latest \
            -t document-ai:${{ github.sha }} \
            -t document-ai:latest \
            .

      - name: Save and compress image
        run: |
          docker save document-ai:${{ github.sha }} | gzip > image.tar.gz

      - name: Copy to server
        uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{ secrets.HETZNER_HOST }}
          username: ${{ secrets.HETZNER_USER }}
          key: ${{ secrets.HETZNER_SSH_KEY }}
          source: "image.tar.gz,docker-compose.prod.yml,.env.production"
          target: "/opt/document-ai"
          strip_components: 0
          timeout: 120s

      - name: Deploy with zero-downtime
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.HETZNER_HOST }}
          username: ${{ secrets.HETZNER_USER }}
          key: ${{ secrets.HETZNER_SSH_KEY }}
          script: |
            cd /opt/document-ai

            # Load new image
            gunzip -c image.tar.gz | docker load

            # Graceful restart (zero-downtime with health check)
            docker compose -f docker-compose.prod.yml up -d \
              --no-deps --scale api=2 api

            # Wait for new container to be healthy
            sleep 10

            # Check health
            for i in {1..6}; do
              if curl -sf http://localhost:8000/health; then
                echo "✅ Health check passed"
                break
              fi
              echo "⏳ Waiting for health check... (attempt $i)"
              sleep 5
            done

            # Remove old container
            docker compose -f docker-compose.prod.yml up -d \
              --no-deps --scale api=1 api

            # Cleanup
            docker system prune -f --filter "until=24h"

            echo "✅ Deployed successfully: $(date)"
```

### GitHub Actions Secrets — Complete Guide

```bash
"""
GitHub Secrets for AI App Deployment:

Go to: GitHub Repo → Settings → Secrets and variables → Actions

Required Secrets:
─────────────────────────────────────────────────────────────
Name                    │ Description                    │ Example
─────────────────────────────────────────────────────────────
HETZNER_HOST            │ Your server IP                 │ 123.123.123.123
HETZNER_USER            │ SSH username                   │ root
HETZNER_SSH_KEY         │ Private SSH key (full)          │ -----BEGIN OPENSSH...
OPENAI_API_KEY          │ OpenAI API key                 │ sk-proj-...
ANTHROPIC_API_KEY       │ Anthropic API key              │ sk-ant-...
LANGCHAIN_API_KEY       │ LangSmith tracing              │ lsv2_...
DB_PASSWORD             │ PostgreSQL password            │ Sup3rSecure!
N8N_PASSWORD            │ n8n admin password             │ Str0ngP@ss!
GRAFANA_PASSWORD        │ Grafana admin password          │ Gr@fana#2024
QDRANT_API_KEY          │ Qdrant API key                 │ Qdrant#Key123
─────────────────────────────────────────────────────────────

Optional Secrets:
SLACK_WEBHOOK_URL       │ Deployment notifications       │ https://hooks.slack.com...
SENTRY_DSN              │ Error tracking                  │ https://key@sentry.io/proj
─────────────────────────────────────────────────────────────

How GitHub Actions uses these secrets:
  In YAML: ${{ secrets.OPENAI_API_KEY }}

How the SERVER gets these secrets:
  During deploy, the CD pipeline:
  1. Reads secrets from GitHub
  2. Creates .env.production on the server with all secrets
  3. Deletes .env.production after backup

Security Best Practices:
  ✅ Use dedicated deploy keys (not your personal SSH key)
  ✅ Rotate secrets every 90 days
  ✅ Never log secrets
  ✅ Use Docker secrets (Swarm mode) for extra security
  ✅ Restrict GitHub Actions to trusted branches only
  ❌ Never put real secrets in .env.example
"""
```

### Day 4 Exercise — Expanded

```
Complete CI/CD Setup:

1. GitHub Secrets:
   → HETZNER_HOST, HETZNER_USER, HETZNER_SSH_KEY
   → OPENAI_API_KEY, DB_PASSWORD
   → All other production secrets

2. CI Pipeline (ci.yml):
   → Trigger: push to main, pull requests
   → Jobs: lint → test → docker-build
   → Redis service container for tests
   → Coverage upload to Codecov
   → Trivy vulnerability scan (fail on CRITICAL/HIGH)

3. CD Pipeline (cd.yml):
   → Trigger: CI pipeline success on main
   → Build production image with cache
   → SCP to Hetzner server
   → Zero-downtime deployment (blue-green)
   → Health check verification
   → Docker cleanup (prune old images)

4. Test the pipeline:
   → Push to main branch
   → Watch GitHub Actions run
   → Fix any failing tests
   → Verify deploy completes
   → Check production health endpoint

5. Production Tip:
   Always test CI locally before pushing:
   docker compose -f docker-compose.test.yml run --rm test
```

---

## Day 5 — Environment & Secrets Management

### Environment Strategy — Production Deep-Dive

```python
"""
Complete environment management for AI applications
"""

from typing import Optional, Dict, List
import os
from pathlib import Path
from functools import lru_cache

# ═══════════════════════════════════════════════
# Python Configuration (Pydantic v2)
# ═══════════════════════════════════════════════

from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field, field_validator
import json


class AISettings(BaseSettings):
    """
    Centralized settings for AI application
    
    Loads from:
    1. .env file (local development)
    2. Environment variables (Docker/Hosting)
    3. Docker secrets (/run/secrets/)
    4. Default values (sensible fallbacks)

    Laravel dev mental model:
    Jaise Laravel mein config/services.php hota hai,
    yahan Pydantic Settings use karte hain.
    """

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore"
    )

    # ── App Configuration ──
    app_name: str = "Document AI"
    debug: bool = Field(default=False, alias="APP_DEBUG")
    environment: str = Field(default="production", alias="APP_ENV")
    secret_key: str = Field(default="change-me", alias="APP_SECRET")

    # ── LLM Provider Keys ──
    openai_api_key: str = Field(default="", alias="OPENAI_API_KEY")
    anthropic_api_key: str = Field(default="", alias="ANTHROPIC_API_KEY")
    openai_org_id: Optional[str] = Field(default=None, alias="OPENAI_ORG_ID")

    # ── Database ──
    database_url: str = Field(
        default="sqlite:///./data/app.db",
        alias="DATABASE_URL"
    )
    redis_url: str = Field(
        default="redis://localhost:6379",
        alias="REDIS_URL"
    )

    # ── Vector Database ──
    qdrant_url: str = Field(
        default="http://localhost:6333",
        alias="QDRANT_URL"
    )
    qdrant_api_key: str = Field(default="", alias="QDRANT_API_KEY")
    qdrant_collection: str = Field(
        default="document_chunks",
        alias="QDRANT_COLLECTION"
    )

    # ── Storage ──
    upload_dir: str = Field(
        default="./data/uploads",
        alias="UPLOAD_DIR"
    )
    model_cache_dir: str = Field(
        default="./models",
        alias="MODEL_CACHE_DIR"
    )
    max_upload_size_mb: int = Field(default=50, alias="MAX_UPLOAD_SIZE")

    # ── Rate Limiting ──
    rate_limit_per_minute: int = Field(default=30, alias="RATE_LIMIT")
    rate_limit_burst: int = Field(default=10, alias="RATE_LIMIT_BURST")

    # ── Monitoring ──
    sentry_dsn: Optional[str] = Field(default=None, alias="SENTRY_DSN")
    langsmith_api_key: Optional[str] = Field(
        default=None, alias="LANGSMITH_API_KEY"
    )
    langsmith_project: str = Field(
        default="document-ai", alias="LANGSMITH_PROJECT"
    )

    # ── Feature Flags ──
    enable_caching: bool = Field(default=True, alias="ENABLE_CACHING")
    enable_telemetry: bool = Field(default=False, alias="ENABLE_TELEMETRY")
    enable_streaming: bool = Field(default=True, alias="ENABLE_STREAMING")

    # ── AI Model Configuration ──
    embedding_model: str = Field(
        default="text-embedding-3-small",
        alias="EMBEDDING_MODEL"
    )
    llm_model: str = Field(
        default="gpt-4o-mini",
        alias="LLM_MODEL"
    )
    llm_temperature: float = Field(default=0.3, alias="LLM_TEMPERATURE")
    chunk_size: int = Field(default=1000, alias="CHUNK_SIZE")
    chunk_overlap: int = Field(default=200, alias="CHUNK_OVERLAP")

    # ── Business Configuration (ApexERP) ──
    default_tenant_plan: str = Field(default="free", alias="DEFAULT_PLAN")
    max_documents_free: int = Field(default=50, alias="MAX_DOCS_FREE")
    max_documents_pro: int = Field(default=5000, alias="MAX_DOCS_PRO")

    @field_validator("openai_api_key", "anthropic_api_key")
    @classmethod
    def check_api_keys(cls, v: str, info) -> str:
        """Validate API keys are present in production"""
        env = os.getenv("APP_ENV", "development")
        if env == "production" and not v:
            raise ValueError(
                f"{info.field_name} is required in production"
            )
        return v

    def get_docker_secret(self, secret_name: str) -> Optional[str]:
        """
        Read Docker secrets from /run/secrets/
        Falls back to environment variable
        """
        secret_path = Path(f"/run/secrets/{secret_name}")
        if secret_path.exists():
            return secret_path.read_text().strip()
        return None

    def get_all_settings(self) -> Dict[str, str]:
        """Get all non-secret settings for debugging"""
        sensitive_keys = {
            "openai_api_key", "anthropic_api_key",
            "qdrant_api_key", "sentry_dsn", "secret_key"
        }
        return {
            k: ("***" if k in sensitive_keys else str(v))
            for k, v in self.model_dump().items()
        }


@lru_cache()
def get_settings() -> AISettings:
    """Cached settings instance (singleton pattern)"""
    return AISettings()


# Usage in application code:
# from config import get_settings
# settings = get_settings()
# client = OpenAI(api_key=settings.openai_api_key)
```

### Environment File Template

```bash
"""
.env.example — committed to repository (template only!)

IMPORTANT: Never commit .env or .env.production to git!
Only .env.example should be in version control.
"""

# ════════════════════════════════════════════
# Document AI — Environment Variables Template
# ════════════════════════════════════════════

# ── App Configuration ──
APP_NAME="Document AI"
APP_ENV=development
APP_DEBUG=true
APP_SECRET=change-me-in-production

# ── LLM Provider Keys (get from platform.openai.com) ──
OPENAI_API_KEY=sk-your-key-here
ANTHROPIC_API_KEY=sk-ant-your-key-here

# ── Database (see below for options) ──
# SQLite (development):
DATABASE_URL=sqlite:///./data/app.db

# PostgreSQL (production):
# DATABASE_URL=postgresql://user:password@localhost:5432/documentai

# ── Caching ──
REDIS_URL=redis://localhost:6379
ENABLE_CACHING=true

# ── Vector Database ──
QDRANT_URL=http://localhost:6333
QDRANT_COLLECTION=document_chunks

# ── Storage ──
UPLOAD_DIR=./data/uploads
MODEL_CACHE_DIR=./models
MAX_UPLOAD_SIZE=50

# ── Rate Limiting ──
RATE_LIMIT=30
RATE_LIMIT_BURST=10

# ── Monitoring ──
# SENTRY_DSN=https://key@sentry.io/projectid
# LANGSMITH_API_KEY=lsv2_pt_...
LANGSMITH_PROJECT=document-ai

# ── AI Model Configuration ──
EMBEDDING_MODEL=text-embedding-3-small
LLM_MODEL=gpt-4o-mini
LLM_TEMPERATURE=0.3
CHUNK_SIZE=1000
CHUNK_OVERLAP=200

# ── Feature Flags ──
ENABLE_STREAMING=true
ENABLE_TELEMETRY=false
```

### Day 5 Exercise — Expanded

```
Environment Management Setup:

1. .env.example banao for all 3 projects:
   → Document AI: LLM keys, DB, Redis, Qdrant, rate limits
   → ApexERP: + multi-tenant config, WhatsApp API keys
   → Flow Studio: GPU config, storage paths, API keys

2. .env.production banao (locally, never commit):
   → Real API keys
   → Production URLs
   → Debug = false
   → Rate limits tuned for production

3. Python config class (Pydantic Settings v2):
   → All env vars with typing
   → Validation (check API keys in production)
   → Docker secret fallback
   → Cached singleton

4. Docker secrets support:
   → /run/secrets/ file reader
   → Key rotation support (re-read on SIGHUP)

5. Test: bina .env ke bhi app chalni chahiye:
   → Default values work
   → Helpful error messages for missing required fields
   → Graceful degradation (no API key = mock responses)
```

---

## Day 6 — PRACTICAL: Deploy Document AI to Hetzner

### Complete Deployment Walkthrough

```bash
"""
Complete production deployment of Document AI to Hetzner

This is the most important practical day of Phase 9.
Har command ko manually run karo, samjho kya ho raha hai.
"""

# ═══════════════════════════════════════════════
# SECTION 1: Server Setup (Run once per server)
# ═══════════════════════════════════════════════

# Step 1.1: Basic server setup
ssh root@your-server-ip
echo "=== Server Info ===" && hostname && uname -r && free -h && df -h

# Step 1.2: System update
apt update && apt upgrade -y && apt autoremove -y

# Step 1.3: Install Docker + essentials
apt install -y \
    docker.io \
    docker-compose-plugin \
    nginx \
    certbot \
    python3-certbot-nginx \
    ufw \
    fail2ban \
    htop \
    curl \
    wget \
    git

# Step 1.4: Firewall setup
ufw --force reset
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable
ufw status verbose

# Step 1.5: Docker permissions
usermod -aG docker $USER
systemctl enable docker

# Step 1.6: Fail2ban for SSH
systemctl enable fail2ban --now
fail2ban-client status sshd

# Step 1.7: Create swap (4GB for AI workloads)
fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab

echo "=== Server Setup Complete ==="

# ═══════════════════════════════════════════════
# SECTION 2: Application Deploy (Run per deployment)
# ═══════════════════════════════════════════════

# Step 2.1: Create app directory
mkdir -p /opt/document-ai
cd /opt/document-ai

# Step 2.2: Clone repository
git clone https://github.com/Raushan666java/document-ai.git .
# Or copy files manually via SCP

# Step 2.3: Create .env.production
cat > .env.production << 'EOF'
APP_ENV=production
APP_DEBUG=false
OPENAI_API_KEY=sk-your-key-here
DATABASE_URL=postgresql://appuser:password@postgres:5432/documentai
REDIS_URL=redis://redis:6379
QDRANT_URL=http://qdrant:6333
UPLOAD_DIR=/app/data/uploads
MODEL_CACHE_DIR=/app/models
ENABLE_CACHING=true
RATE_LIMIT=30
EOF

# Step 2.4: Set secure permissions
chmod 600 .env.production

# Step 2.5: Pull and start services
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d

# Step 2.6: Check all services are running
echo "=== Service Status ==="
docker compose ps

# Step 2.7: Check logs for any errors
docker compose logs --tail=50

# Step 2.8: Test health endpoint
echo "=== Health Check ==="
curl -s http://localhost:8000/health | python3 -m json.tool

# ═══════════════════════════════════════════════
# SECTION 3: Domain + SSL (Run once per domain)
# ═══════════════════════════════════════════════

# Step 3.1: Point domain to server
# In your DNS provider:
#   Type: A Record
#   Name: document-ai
#   Value: YOUR_SERVER_IP
#   TTL: 300 (5 minutes)

# Step 3.2: Create Nginx config for certbot
cat > /etc/nginx/sites-available/document-ai << 'EOF'
server {
    listen 80;
    server_name document-ai.apexpillar.tech;
    
    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

ln -s /etc/nginx/sites-available/document-ai /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

# Step 3.3: Get SSL certificate
certbot --nginx -d document-ai.apexpillar.tech \
    --non-interactive \
    --agree-tos \
    --email raushan@apexpillar.tech

# Step 3.4: Test SSL renewal
certbot renew --dry-run

# ═══════════════════════════════════════════════
# SECTION 4: Verification
# ═══════════════════════════════════════════════

echo "=== Full Stack Verification ==="

# Test HTTPS
curl -s https://document-ai.apexpillar.tech/health | python3 -m json.tool

# Test API endpoint
curl -X POST https://document-ai.apexpillar.tech/api/query \
    -H "Content-Type: application/json" \
    -d '{"query": "What is this document about?"}' | python3 -m json.tool

# Check Docker resource usage
echo "=== Resource Usage ==="
docker stats --no-stream

# Check disk space
echo "=== Disk ==="
df -h / | tail -1

echo "=== Deployment Complete! ==="
```

### Production Deploy Script

```bash
#!/bin/bash
"""
deploy.sh — Production deploy script for Document AI

Usage:
  chmod +x deploy.sh
  ./deploy.sh                    # Deploy latest
  ./deploy.sh --rollback         # Rollback to previous version
  ./deploy.sh --status           # Check deployment status

This script is your AI app's deployment automation.
Laravel devs: Think of it as Forge's deploy script but custom.
"""

set -euo pipefail  # Exit on error, undefined vars, pipe failures

# Configuration
APP_DIR="/opt/document-ai"
COMPOSE_FILE="docker-compose.prod.yml"
BACKUP_DIR="/opt/backups/document-ai"
IMAGE_NAME="document-ai"
SERVER_IP="${SERVER_IP:-$(hostname -I | awk '{print $1}')}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log() { echo -e "${GREEN}[$(date '+%H:%M:%S')]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

# Pre-flight checks
preflight() {
    log "Running pre-flight checks..."

    # Check Docker
    command -v docker >/dev/null 2>&1 || error "Docker not installed"
    command -v docker compose >/dev/null 2>&1 || error "Docker Compose not installed"

    # Check directory
    [ -d "$APP_DIR" ] || error "App directory not found: $APP_DIR"
    [ -f "$APP_DIR/$COMPOSE_FILE" ] || error "Compose file not found"

    # Check .env
    [ -f "$APP_DIR/.env.production" ] || error ".env.production not found"

    # Check disk space (need at least 5GB free)
    available=$(df "$APP_DIR" | awk 'NR==2 {print $4}')
    [ "$available" -gt 5000000 ] || warn "Low disk space: $((available/1000000))GB free"

    log "Pre-flight checks passed ✅"
}

# Backup current state
backup() {
    local timestamp=$(date +%Y%m%d_%H%M%S)
    local backup_path="$BACKUP_DIR/$timestamp"

    log "Creating backup at $backup_path..."
    mkdir -p "$backup_path"

    # Backup volumes
    for volume in redis_data qdrant_data postgres_data; do
        docker run --rm -v ${volume}:/data \
            -v "$backup_path":/backup \
            alpine tar czf /backup/${volume}.tar.gz -C /data . 2>/dev/null || \
            warn "Volume $volume not found, skipping"
    done

    # Backup .env
    cp "$APP_DIR/.env.production" "$backup_path/"

    # Keep only last 5 backups
    ls -t "$BACKUP_DIR" | tail -n +6 | while read old; do
        rm -rf "$BACKUP_DIR/$old"
        log "Removed old backup: $old"
    done

    log "Backup complete ✅"
}

# Deploy new version
deploy() {
    log "Starting deployment..."

    cd "$APP_DIR"

    # Pull latest code (if git repo)
    if [ -d .git ]; then
        log "Pulling latest code..."
        git pull origin main || warn "Git pull failed, continuing with local code"
    fi

    # Pull latest images
    log "Pulling images..."
    docker compose -f "$COMPOSE_FILE" pull || warn "Pull failed, using cached images"

    # Deploy with zero-downtime
    log "Starting services..."
    docker compose -f "$COMPOSE_FILE" up -d --remove-orphans

    # Wait for health
    log "Waiting for health check..."
    for i in {1..12}; do
        if curl -sf http://localhost:8000/health >/dev/null 2>&1; then
            log "Health check passed ✅"
            break
        fi
        if [ "$i" -eq 12 ]; then
            warn "Health check failed after 60s! Check logs: docker compose logs api"
        fi
        sleep 5
    done

    # Cleanup old images
    log "Cleaning up..."
    docker system prune -f --filter "until=24h"

    log "Deployment complete ✅"
}

# Rollback to previous version
rollback() {
    log "Rolling back to previous version..."
    local latest=$(ls -t "$BACKUP_DIR" | head -1)

    if [ -z "$latest" ]; then
        error "No backup found to rollback to"
    fi

    log "Restoring from: $latest"

    # Restore .env
    cp "$BACKUP_DIR/$latest/.env.production" "$APP_DIR/.env.production"

    # Restart services
    docker compose -f "$APP_DIR/$COMPOSE_FILE" down
    docker compose -f "$APP_DIR/$COMPOSE_FILE" up -d

    log "Rollback complete ✅"
}

# Show status
show_status() {
    echo ""
    echo "═══════════════════════════════════════"
    echo "  Document AI — Deployment Status"
    echo "═══════════════════════════════════════"
    echo ""

    cd "$APP_DIR"

    # Service status
    echo "📦 Services:"
    docker compose ps --format "table {{.Name}}\t{{.Status}}\t{{.Ports}}"

    echo ""
    echo "💾 Resource Usage:"
    docker stats --no-stream --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}"

    echo ""
    echo "🔍 Health Endpoint:"
    curl -s http://localhost:8000/health | python3 -m json.tool 2>/dev/null || \
        echo "Health endpoint not responding"

    echo ""
    echo "📁 Backups Available:"
    ls -1 "$BACKUP_DIR" 2>/dev/null | head -5 || echo "No backups found"

    echo ""
    echo "═══════════════════════════════════════"
}

# Main
case "${1:-deploy}" in
    deploy)
        preflight
        backup
        deploy
        ;;
    rollback)
        rollback
        ;;
    status)
        show_status
        ;;
    *)
        echo "Usage: $0 {deploy|rollback|status}"
        exit 1
        ;;
esac
```

### Day 6 Exercise — Expanded

```
Today ka target — FULL PRODUCTION DEPLOY:

Phase 1: Server Setup (30 min)
  [ ] Hetzner CX32 instance ($20/mo)
  [ ] Ubuntu 24.04 fresh install
  [ ] SSH key-only auth
  [ ] UFW firewall (22, 80, 443 only)
  [ ] Docker + Compose installed
  [ ] 4GB swap created
  [ ] Fail2ban configured

Phase 2: Application Deploy (20 min)
  [ ] Code cloned/copied to /opt/document-ai
  [ ] .env.production created with real keys
  [ ] docker compose up -d
  [ ] All 5+ services healthy
  [ ] Health endpoint returning 200

Phase 3: Domain + SSL (15 min)
  [ ] A record pointing to server IP
  [ ] Nginx reverse proxy configured
  [ ] Let's Encrypt SSL installed
  [ ] certbot auto-renewal working
  [ ] HTTPS working (cert valid)

Phase 4: Verification (10 min)
  [ ] curl https://domain.com/health → 200
  [ ] At least 1 test query working
  [ ] docker stats shows <80% memory
  [ ] Logs show no errors
  [ ] Service survives: docker compose restart

Final: Deploy Script
  [ ] deploy.sh written
  [ ] Backup system working
  [ ] Rollback tested
  [ ] Status command working
```

---

## Day 7 — Production Troubleshooting

### Common Docker Problems & Solutions

```python
"""
Complete Docker troubleshooting guide for AI applications
"""

class DockerTroubleshooter:
    """
    Systematic Docker debugging for AI apps
    """

    PROBLEMS = {
        "container_restarting": {
            "symptoms": [
                "docker ps shows 'restarting' or 'unhealthy'",
                "Service intermittently available",
                "Container uptime < 5 minutes"
            ],
            "diagnosis": [
                "docker compose logs api --tail=100",
                "docker inspect api | grep -A 10 State",
                "Check .env variables: diff .env.example .env.production",
                "Check port conflicts: netstat -tulpn | grep 8000"
            ],
            "solutions": [
                "1. Read logs: docker compose logs api",
                "2. Fix env vars: cat -A shows hidden chars?",
                "3. Port conflict: change host port from 8000:8000 to 8080:8000",
                "4. OOM: check dmesg | grep -i oom",
                "5. Health check failing: test endpoint manually inside container"
            ]
        },

        "redis_connection_refused": {
            "symptoms": [
                "API logs: 'Cannot connect to Redis'",
                "Redis health check failing"
            ],
            "diagnosis": [
                "Check service name in .env: should be 'redis' not 'localhost'",
                "docker compose exec redis redis-cli ping",
                "Check network: docker network inspect document-ai_default"
            ],
            "solutions": [
                "1. Fix REDIS_URL: redis://redis:6379 (service name, not localhost)",
                "2. Restart redis: docker compose restart redis",
                "3. Check redis password: redis-cli -a password ping",
                "4. Verify service order: depends_on with condition: service_healthy"
            ]
        },

        "qdrant_no_connection": {
            "symptoms": [
                "API logs: 'Cannot connect to Qdrant'",
                "Qdrant container running but API can't reach it"
            ],
            "diagnosis": [
                "Check disk space: df -h (Qdrant needs disk for WAL)",
                "docker compose logs qdrant --tail=50",
                "Check Qdrant API: curl http://localhost:6333/collections"
            ],
            "solutions": [
                "1. Clear Qdrant storage (last resort): docker compose down -v",
                "2. Check QDRANT_URL: http://qdrant:6333 (not localhost)",
                "3. Add swap: Qdrant needs RAM for HNSW index",
                "4. Tune Qdrant config: reduce ef_construct, M parameters"
            ]
        },

        "out_of_memory": {
            "symptoms": [
                "Container dies with exit code 137 (SIGKILL)",
                "dmesg shows OOM killer messages",
                "Server becomes unresponsive"
            ],
            "diagnosis": [
                "docker stats --no-stream (check current usage)",
                "dmesg | grep -i 'killed process'",
                "free -h (check total vs used)",
                "htop (interactive process viewer)"
            ],
            "solutions": [
                "1. Add memory limits to docker-compose.yml",
                "2. Increase swap: 2x RAM minimum for AI workloads",
                "3. Use smaller model: INT8 instead of FP16",
                "4. Reduce Qdrant RAM: limit HNSW ef_construct",
                "5. Horizontal scaling: split services across servers"
            ]
        },

        "ssl_not_renewing": {
            "symptoms": [
                "Browser shows 'NET::ERR_CERT_DATE_INVALID'",
                "certbot renew --dry-run fails"
            ],
            "diagnosis": [
                "certbot certificates (list all certs)",
                "systemctl status certbot.timer",
                "Check port 80 is accessible externally"
            ],
            "solutions": [
                "1. Ensure port 80 is open (certbot needs it for HTTP challenge)",
                "2. Check DNS: dig document-ai.apexpillar.tech",
                "3. Test renewal: certbot renew --force-renewal --dry-run",
                "4. Check nginx config: nginx -t"
            ]
        },

        "slow_llm_response": {
            "symptoms": [
                "API responses taking >10 seconds",
                "LLM provider timing out"
            ],
            "diagnosis": [
                "docker stats (check if CPU/memory is bottleneck)",
                "Check LLM provider status page",
                "Measure network latency to OpenAI: ping api.openai.com"
            ],
            "solutions": [
                "1. Implement caching (same query → cached response)",
                "2. Use streaming response (TTFB improves)",
                "3. Switch to faster model (GPT-4o-mini vs GPT-4o)",
                "4. Add connection pooling to HTTP client",
                "5. Consider batch processing for non-urgent queries"
            ]
        },

        "docker_disk_full": {
            "symptoms": [
                "docker compose up fails with 'no space left on device'",
                "df -h shows /var/lib/docker is 100%"
            ],
            "diagnosis": [
                "docker system df (show disk usage by Docker)",
                "du -sh /var/lib/docker/volumes/",
                "docker image ls | head -20 (check image sizes)"
            ],
            "solutions": [
                "1. Clean unused images: docker image prune -a",
                "2. Clean build cache: docker builder prune",
                "3. Clean volumes: docker volume prune (CAREFUL: deletes data)",
                "4. Limit logs: add logging config to daemon.json",
                "5. Move Docker to larger disk: edit /etc/docker/daemon.json"
            ]
        }
    }

    @staticmethod
    def diagnose(symptom: str) -> str:
        """Given a symptom, return diagnosis steps"""
        for problem, details in DockerTroubleshooter.PROBLEMS.items():
            if any(s.lower() in symptom.lower()
                   for s in details["symptoms"]):
                return f"""
Problem: {problem}
Diagnosis:
{chr(10).join(f'  → {d}' for d in details['diagnosis'])}
Solutions:
{chr(10).join(details['solutions'])}
"""
        return "Unknown problem. Check logs: docker compose logs --tail=100"


# Quick diagnostic command reference
DOCKER_DIAG_CMDS = """
Essential Docker Diagnostic Commands:

# Service status
docker compose ps                          # All services status
docker compose top                         # Running processes in each service
docker compose logs --tail=100 -f         # Live log tailing

# Resource monitoring
docker stats                               # Live CPU/RAM/Network per container
docker system df                           # Disk usage by Docker components
docker compose exec api free -m            # Memory inside container

# Network debugging
docker network ls                          # List all networks
docker network inspect document-ai_default  # Check network config
docker compose exec api ping redis         # Test service connectivity

# Container debugging
docker compose exec api /bin/bash          # Shell into container
docker compose exec api env                # Check env vars inside
docker inspect api | jq '.State'           # Container state details

# Image management
docker images                              # List all images
docker image prune -a                      # Remove unused images
docker system prune -f --filter "until=24h"  # Aggressive cleanup

# Volume management
docker volume ls                           # List volumes
docker volume inspect qdrant_data          # Volume details
docker run --rm -v qdrant_data:/data alpine ls /data  # Inspect volume contents
"""

print("Docker Troubleshooting Guide Loaded")
print(f"Run diagnose() with your symptom, or use docker commands above")
```

### Production Monitoring — Quick Setup

```bash
"""
Real-time production monitoring for AI apps

You don't need full Grafana for basic monitoring.
Start with these lightweight tools:
"""

# Option 1: Netdata (best for quick setup)
bash <(curl -Ss https://my-netdata.io/kickstart.sh)
# Access: http://your-server-ip:19999
# Shows: CPU, RAM, Disk, Network per container

# Option 2: ctop (terminal dashboard)
wget https://github.com/bcicen/ctop/releases/download/v0.7.7/ctop-0.7.7-linux-amd64 -O /usr/local/bin/ctop
chmod +x /usr/local/bin/ctop
ctop  # Interactive container monitor

# Option 3: dokku (Heroku-like PaaS)
# Too complex for now — stick with Docker Compose

# Quick health check script
cat > /usr/local/bin/health-check << 'SCRIPT'
#!/bin/bash
# Quick health check for all AI services
SERVICES=("api" "redis" "qdrant" "postgres" "worker")

for service in "${SERVICES[@]}"; do
    status=$(docker inspect --format='{{.State.Status}}' "document-ai-$service" 2>/dev/null)
    if [ "$status" = "running" ]; then
        echo "✅ $service is $status"
    else
        echo "❌ $service is ${status:-NOT FOUND}"
    fi
done

echo ""
echo "System Resources:"
free -h | head -2
echo ""
df -h / | tail -1
SCRIPT

chmod +x /usr/local/bin/health-check

# Check every 5 minutes (add to crontab)
# echo "*/5 * * * * /usr/local/bin/health-check >> /var/log/health.log" | crontab -
```

### Day 7 — Week 1 Final Checklist

```
═══════════════════════════════════════════
  WEEK 1 — PRODUCTION DEPLOYMENT CHECKLIST
═══════════════════════════════════════════

 Prerequisites:
   ☐ Hetzner account with SSH key
   ☐ Domain pointed to server
   ☐ GitHub repo with secrets configured

 Docker Setup:
   ☐ Multi-stage Dockerfile (builder + runtime)
   ☐ Non-root user in containers
   ☐ Layer caching optimization (requirements.txt first)
   ☐ .dockerignore with all exclusions
   ☐ Docker Compose for full AI stack (5+ services)
   ☐ Resource limits (memory + CPU) per service
   ☐ Health checks on all services
   ☐ Named volumes for persistent data

 Server Setup:
   ☐ Ubuntu 24.04 LTS
   ☐ Docker + Docker Compose installed
   ☐ UFW firewall (ports 22, 80, 443)
   ☐ Fail2ban configured
   ☐ 4GB swap for AI workloads
   ☐ Docker daemon.json (log limits, overlay2)
   ☐ SSH key-only auth

 CI/CD:
   ☐ GitHub Actions CI (lint → test → docker-build)
   ☐ GitHub Actions CD (auto-deploy to Hetzner)
   ☐ Zero-downtime deployment (rolling update)
   ☐ Secrets management (GitHub secrets)
   ☐ Vulnerability scanning (Trivy)

 Environment:
   ☐ .env.example committed (template only)
   ☐ .env.production on server (gitignored)
   ☐ Pydantic Settings v2 configuration class
   ☐ Docker secret support (fallback)
   ☐ Graceful degradation without .env

 Practical Deploy:
   ☐ Server setup complete
   ☐ Application deployed and running
   ☐ Domain + SSL configured
   ☐ Health endpoint responding
   ☐ At least 1 test query working
   ☐ deploy.sh script ready
   ☐ Backup/rollback tested

 Troubleshooting:
   ☐ Can read logs (docker compose logs)
   ☐ Can debug container (docker compose exec)
   ☐ Know common problems and solutions
   ☐ Monitoring setup (Netdata or basic)
   ☐ Recovery tested (server restart)

═══════════════════════════════════════════
  8/8 Deployments
═══════════════════════════════════════════

Production Tip: Deployment mein perfection se better hai consistency.
Har deploy same process follow karo (deploy.sh).
Manual changes on server = future outage.
Document everything. Automate everything.
```
