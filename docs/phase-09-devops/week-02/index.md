# Week 2 — CI/CD & Monitoring

**Dates:** Sep 1–7, 2026
**Daily:** 5 hours
**Goal:** AI apps ke liye CI/CD pipelines + monitoring setup karo

---

## Day 1 — CI/CD Pipelines for AI Applications

### Complete CI/CD Flow

```
Developer Push (main)
     │
     ▼
┌─────────────────────┐
│ 1. CI Pipeline      │ ← GitHub Actions
│    ├─ Lint (ruff)   │
│    ├─ Type Check    │
│    ├─ Unit Tests    │
│    └─ Integration   │
└─────────┬───────────┘
          │ (tests pass)
          ▼
┌─────────────────────┐
│ 2. Build Pipeline   │
│    ├─ Docker build  │
│    ├─ Security scan │
│    └─ Push to reg. │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│ 3. Deploy Pipeline  │
│    ├─ SSH to server │
│    ├─ Pull new image│
│    ├─ Migrate DB    │
│    ├─ Health check  │
│    └─ Rollback on   │
│       failure       │
└─────────┬───────────┘
          │
          ▼
    Production Live!
```

### Advanced CI Pipeline (with Rollback)

```yaml
name: Deploy AI App

on:
  push:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  test:
    runs-on: ubuntu-latest
    timeout-minutes: 15

    services:
      redis:
        image: redis:7-alpine
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
      qdrant:
        image: qdrant/qdrant:latest
        options: >-
          --health-cmd "curl -f http://localhost:6333/health"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
          cache: 'pip'

      - name: Install
        run: |
          pip install -r requirements.txt
          pip install pytest pytest-cov ruff mypy

      - name: Lint
        run: ruff check app/ tests/

      - name: Type check
        run: mypy app/

      - name: Unit tests
        run: pytest tests/unit/ --cov=app --cov-report=xml
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}

      - name: Integration tests
        run: pytest tests/integration/ --timeout=60
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          REDIS_URL: redis://localhost:6379
          QDRANT_URL: http://localhost:6333

      - name: RAG quality tests
        run: pytest tests/rag/ --timeout=120
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          QDRANT_URL: http://localhost:6333

  build-and-push:
    needs: test
    runs-on: ubuntu-latest
    timeout-minutes: 10

    steps:
      - uses: actions/checkout@v4

      - name: Log in to registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: |
            ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
            ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  deploy:
    needs: build-and-push
    runs-on: ubuntu-latest
    timeout-minutes: 10

    steps:
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.HETZNER_HOST }}
          username: ${{ secrets.HETZNER_USER }}
          key: ${{ secrets.HETZNER_SSH_KEY }}
          script: |
            cd /opt/document-ai
            
            # Pull new image
            docker compose pull api
            
            # Backup current state
            docker compose exec -T postgres pg_dump -U user db > backup_$(date +%Y%m%d_%H%M%S).sql
            
            # Restart with new image
            docker compose up -d api --force-recreate
            
            # Health check (30 second window)
            for i in {1..30}; do
              if curl -sf http://localhost:8000/health; then
                echo "✅ Health check passed"
                exit 0
              fi
              echo "Waiting... ($i)"
              sleep 1
            done
            
            # Health check failed → rollback
            echo "❌ Health check failed, rolling back..."
            docker compose stop api
            docker compose up -d api --force-recreate
            
            exit 1

  notify:
    needs: [deploy]
    if: always()
    runs-on: ubuntu-latest
    steps:
      - name: Slack notification
        uses: rtCamp/action-slack-notify@v2
        env:
          SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
          SLACK_MESSAGE: |
            Deploy ${{ job.status }}
            Commit: ${{ github.sha }}
            Author: ${{ github.actor }}
```

### Day 1 Exercise

```
GitHub Actions workflow banao for your project:

1. CI: lint + type check + unit tests + integration tests
2. CD: build Docker → push to registry → SSH deploy
3. Rollback on health check failure
4. Slack notification on deploy status

Push to main → auto-deploy trigger karo.
```

---

## Day 2 — Testing in CI

### Testing Strategy for AI Apps

```
┌─────────────────────────────────────────┐
│           Test Pyramid for AI            │
│                                         │
│           ╱ Manual / E2E ╲              │
│          ╱   (expensive)   ╲            │
│         ╱ RAG Quality Tests ╲           │
│        ╱   (RAGAS, latency)   ╲         │
│       ╱  Integration Tests     ╲        │
│      ╱ (DB, Redis, Qdrant)      ╲       │
│     ╱   Unit Tests (fast!)       ╲      │
│    ╱ prompt, parsers, utils       ╲     │
│   ╱─────────────────────────────────╲    │
└─────────────────────────────────────────┘
```

### Unit Tests

```python
# tests/unit/test_chunker.py
import pytest
from app.chunker import TextChunker

class TestTextChunker:
    def test_basic_chunking(self):
        chunker = TextChunker(chunk_size=100, chunk_overlap=20)
        text = "A" * 500
        chunks = chunker.split(text)
        assert len(chunks) > 1
        assert all(len(c) <= 100 for c in chunks)

    def test_overlap(self):
        chunker = TextChunker(chunk_size=100, chunk_overlap=20)
        text = "Hello world. " * 20
        chunks = chunker.split(text)
        # Check overlap exists
        assert chunker._chunk_overlap > 0

    def test_empty_text(self):
        chunker = TextChunker(chunk_size=100, chunk_overlap=20)
        assert chunker.split("") == []


# tests/unit/test_tools.py
from app.tools import SearchTool, CalculatorTool
import pytest

class TestTools:
    def test_calculator_add(self):
        tool = CalculatorTool()
        result = tool.execute("2 + 2")
        assert result == "4"

    def test_calculator_divide_by_zero(self):
        tool = CalculatorTool()
        result = tool.execute("1 / 0")
        assert "error" in result.lower()
```

### Integration Tests

```python
# tests/integration/test_rag_pipeline.py
import pytest
from app.rag import RAGPipeline

@pytest.mark.asyncio
class TestRAGPipeline:
    async def test_full_rag_flow(self, test_document, vector_store):
        pipeline = RAGPipeline(vector_store=vector_store)

        # Index a test document
        await pipeline.index(test_document)

        # Query
        result = await pipeline.query("What is this about?")

        assert result["answer"] is not None
        assert len(result["sources"]) > 0
        assert result["confidence"] > 0.5

    async def test_empty_query(self, vector_store):
        pipeline = RAGPipeline(vector_store=vector_store)
        result = await pipeline.query("")
        assert "error" in result

    async def test_relevance(self, test_document, vector_store):
        pipeline = RAGPipeline(vector_store=vector_store)
        await pipeline.index(test_document)

        result = await pipeline.query("Completely unrelated topic")
        # Should have low confidence for irrelevant query
        assert result["confidence"] < 0.3
```

### Test Containers (for CI)

```python
# conftest.py — fixtures for integration tests
import pytest
import redis.asyncio as redis
from qdrant_client import QdrantClient
from qdrant_client.http.models import Distance, VectorParams

@pytest.fixture
async def vector_store():
    """Qdrant in Docker for tests"""
    client = QdrantClient(
        host="localhost",
        port=6333,
        prefer_grpc=True
    )
    # Create temp collection
    collection_name = f"test_{uuid.uuid4().hex[:8]}"
    client.recreate_collection(
        collection_name=collection_name,
        vectors_config=VectorParams(size=384, distance=Distance.COSINE)
    )
    yield client
    # Cleanup
    client.delete_collection(collection_name)

@pytest.fixture
def test_document():
    return {
        "id": "test_001",
        "content": "AI Engineering involves designing systems...",
        "metadata": {"source": "test", "date": "2026-01-01"}
    }
```

### Day 2 Exercise

```
Apne project mein tests add karo:

1. Unit tests: chunker, parser, tools, utils (at least 10)
2. Integration tests: RAG pipeline, agent execution (at least 5)
3. Fixtures setup for DB, Redis, Qdrant
4. GitHub Actions CI mein sab tests pass hone chahiye

Run: pytest tests/ --cov=app --cov-report=term
```

---

## Day 3 — Monitoring with Prometheus + Grafana

### Prometheus Setup

```yaml
# docker-compose.monitoring.yml
version: '3.8'

services:
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    ports:
      - "9090:9090"
    restart: unless-stopped

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=${GRAFANA_PASSWORD}
    volumes:
      - grafana_data:/var/lib/grafana
    depends_on:
      - prometheus
    restart: unless-stopped

  node_exporter:
    image: prom/node-exporter:latest
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    command:
      - '--path.procfs=/host/proc'
      - '--path.sysfs=/host/sys'
      - '--path.rootfs=/rootfs'
    restart: unless-stopped

  cadvisor:
    image: gcr.io/cadvisor/cadvisor:latest
    volumes:
      - /:/rootfs:ro
      - /var/run:/var/run:ro
      - /sys:/sys:ro
      - /var/lib/docker/:/var/lib/docker:ro
    restart: unless-stopped

volumes:
  prometheus_data:
  grafana_data:
```

```yaml
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node'
    static_configs:
      - targets: ['node_exporter:9100']

  - job_name: 'cadvisor'
    static_configs:
      - targets: ['cadvisor:8080']

  - job_name: 'api'
    static_configs:
      - targets: ['api:8000']
    metrics_path: '/metrics'
```

### Custom Metrics for AI App

```python
# app/monitoring.py
from prometheus_client import Counter, Histogram, Gauge
import time

# Counters
llm_calls_total = Counter(
    'llm_calls_total', 'Total LLM API calls',
    ['model', 'provider']
)

rag_queries_total = Counter(
    'rag_queries_total', 'Total RAG queries',
    ['status']  # success, error, timeout
)

agent_actions_total = Counter(
    'agent_actions_total', 'Total agent actions',
    ['tool', 'status']
)

# Histograms
llm_latency_seconds = Histogram(
    'llm_latency_seconds', 'LLM API latency',
    ['model'],
    buckets=[0.1, 0.5, 1.0, 2.0, 5.0, 10.0]
)

rag_query_duration = Histogram(
    'rag_query_duration_seconds', 'RAG query duration',
    buckets=[0.1, 0.5, 1.0, 2.0, 5.0]
)

# Gauges
active_users = Gauge('active_users', 'Currently active users')
queue_size = Gauge('llm_queue_size', 'LLM request queue size')
vector_db_size = Gauge('vector_db_size', 'Number of vectors in DB')
daily_cost = Gauge('daily_llm_cost', 'Daily LLM API cost in USD')


# Decorator for monitoring
def monitor_llm_call(model: str):
    def decorator(func):
        async def wrapper(*args, **kwargs):
            start = time.time()
            try:
                result = await func(*args, **kwargs)
                llm_calls_total.labels(model=model, provider="openai").inc()
                return result
            finally:
                duration = time.time() - start
                llm_latency_seconds.labels(model=model).observe(duration)
        return wrapper
    return decorator


# FastAPI integration
from fastapi import FastAPI
from prometheus_fastapi_instrumentator import Instrumentator

app = FastAPI()

# Auto-instrument FastAPI
Instrumentator().instrument(app).expose(app)
```

### Grafana Dashboard

```
After setup, create these panels:

Panel 1: System Overview
  - CPU usage (node_exporter)
  - Memory usage (node_exporter)
  - Disk usage (node_exporter)
  - Network I/O (node_exporter)

Panel 2: Docker Containers
  - Container CPU/Memory (cadvisor)
  - Container restart count

Panel 3: AI Metrics
  - LLM call count (rate per minute)
  - LLM latency (p50, p95, p99)
  - RAG query duration
  - Active users
  - Vector DB size

Panel 4: Costs
  - Daily LLM cost (gauge)
  - Estimated monthly cost
  - Cost per user

Panel 5: Errors
  - Error rate (4xx, 5xx)
  - LLM error rate
  - Queue size
```

### Day 3 Exercise

```
1. Prometheus + Grafana setup with Docker Compose
2. Custom metrics in your FastAPI app
3. Grafana dashboard with 4 panels
4. Test: make some API calls, verify metrics show up
5. Set up alert for high error rate (email/Slack)
```

---

## Day 4 — Logging with Loki

### Structured Logging

```python
# app/logging_config.py
import structlog
import logging
from datetime import datetime

structlog.configure(
    processors=[
        structlog.contextvars.merge_contextvars,
        structlog.stdlib.filter_by_level,
        structlog.stdlib.add_logger_name,
        structlog.stdlib.add_log_level,
        structlog.processors.TimeStamper(fmt="iso"),
        structlog.processors.StackInfoRenderer(),
        structlog.dev.ConsoleRenderer() if __debug__
        else structlog.processors.JSONRenderer()
    ],
    context_class=dict,
    logger_factory=structlog.stdlib.LoggerFactory(),
    wrapper_class=structlog.stdlib.BoundLogger,
    cache_logger_on_first_use=True,
)

logger = structlog.get_logger()

# Usage
logger.info("llm_call", model="gpt-4", tokens=150, duration_ms=1200)
logger.error("agent_failed", agent_id="abc", error="timeout", step="search")
```

### Loki Setup

```yaml
# Add to docker-compose.monitoring.yml
services:
  loki:
    image: grafana/loki:latest
    ports:
      - "3100:3100"
    volumes:
      - ./loki-config.yml:/etc/loki/local-config.yaml
      - loki_data:/loki

  promtail:
    image: grafana/promtail:latest
    volumes:
      - /var/lib/docker/containers:/var/lib/docker/containers:ro
      - /var/log:/var/log:ro
      - ./promtail-config.yml:/etc/promtail/config.yml

volumes:
  loki_data:
```

### Log Aggregation Best Practices

```
What to log (always):
  ✅ LLM calls (model, tokens, latency, cost)
  ✅ RAG queries (query, chunks retrieved, relevance score)
  ✅ Agent actions (tool, input, output, duration)
  ✅ Errors (stack trace, context, user)
  ✅ Rate limit hits
  ✅ Cache hits/misses

What NOT to log:
  ❌ Full LLM responses (expensive, privacy)
  ❌ User passwords / API keys
  ❌ Raw documents (PII)
  ❌ Debug logs in production
```

### Day 4 Exercise

```
1. structlog setup in your FastAPI app
2. Loki + Promtail configuration
3. Grafana datasource for Loki
4. Log queries in Grafana Explore:

Example Loki queries:
  {job="api"} |= "error"
  {job="api"} |= "llm_call" | json | duration_ms > 2000
  rate({job="api"} |= "error"[5m])
```

---

## Day 5 — Alerting + Model Monitoring + Cost Monitoring

### Alerting Rules

```yaml
# prometheus-alerts.yml
groups:
  - name: ai_app_alerts
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.05
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "Error rate > 5% for 2 minutes"

      - alert: HighLLMLatency
        expr: histogram_quantile(0.95, rate(llm_latency_seconds_bucket[5m])) > 5
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "P95 LLM latency > 5s"

      - alert: LLMErrorRate
        expr: rate(llm_calls_total{status="error"}[5m]) > 0.1
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "LLM error rate > 10%"

      - alert: LowDiskSpace
        expr: (node_filesystem_avail_bytes / node_filesystem_size_bytes) < 0.1
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "Disk space < 10%"

      - alert: DailyBudgetExceeded
        expr: daily_llm_cost > 40
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: "Daily LLM cost > $40 (budget: $50)"
```

### Slack/Discord Alerts

```python
# app/alerting.py
import httpx
import os

class AlertManager:
    def __init__(self):
        self.slack_webhook = os.getenv("SLACK_WEBHOOK")
        self.discord_webhook = os.getenv("DISCORD_WEBHOOK")

    async def send_alert(self, level: str, title: str, message: str):
        """Send alert to Slack and Discord"""
        payload = {
            "blocks": [
                {
                    "type": "header",
                    "text": {"type": "plain_text", "text": f"{level}: {title}"}
                },
                {
                    "type": "section",
                    "text": {"type": "mrkdwn", "text": message}
                },
                {
                    "type": "context",
                    "elements": [
                        {"type": "mrkdwn", "text": f"Time: {datetime.now().isoformat()}"}
                    ]
                }
            ]
        }

        async with httpx.AsyncClient() as client:
            if self.slack_webhook:
                await client.post(self.slack_webhook, json=payload)
            if self.discord_webhook:
                await client.post(self.discord_webhook, json=payload)
```

### Model Monitoring (Drift Detection)

```python
# app/monitoring/model_drift.py
import numpy as np
from typing import List
from datetime import datetime

class ModelMonitor:
    """Monitor model performance over time"""

    def __init__(self, window_size: int = 100):
        self.window_size = window_size
        self.recent_scores = []
        self.baseline_mean = None
        self.baseline_std = None

    def record_query(self, query: str, relevance_scores: List[float]):
        """Record retrieval relevance scores"""
        avg_score = np.mean(relevance_scores)
        self.recent_scores.append({
            "timestamp": datetime.now(),
            "query_length": len(query),
            "avg_relevance": avg_score,
            "num_chunks": len(relevance_scores)
        })

        # Keep only recent
        if len(self.recent_scores) > self.window_size:
            self.recent_scores.pop(0)

    def check_drift(self) -> dict:
        """Check if model performance has drifted"""
        if len(self.recent_scores) < 30:
            return {"drift_detected": False, "reason": "insufficient_data"}

        scores = [s["avg_relevance"] for s in self.recent_scores[-30:]]
        current_mean = np.mean(scores)

        if self.baseline_mean is None:
            self.baseline_mean = current_mean
            self.baseline_std = np.std(scores)
            return {"drift_detected": False, "reason": "establishing_baseline"}

        # Z-score based drift detection
        z_score = abs(current_mean - self.baseline_mean) / (self.baseline_std + 1e-8)

        if z_score > 2.0:
            return {
                "drift_detected": True,
                "z_score": z_score,
                "previous_mean": self.baseline_mean,
                "current_mean": current_mean,
                "suggestion": "Check embedding model or data quality"
            }

        return {"drift_detected": False, "z_score": z_score}
```

### Cost Monitoring

```python
# app/monitoring/cost_tracker.py
class CostTracker:
    """Track and alert on LLM API costs"""

    def __init__(self, daily_budget: float = 50.0):
        self.daily_budget = daily_budget
        self.daily_cost = 0.0
        self.last_reset = datetime.now().date()

        self.model_pricing = {
            "gpt-4": {"input": 0.03, "output": 0.06},   # per 1K tokens
            "gpt-4o": {"input": 0.01, "output": 0.03},
            "gpt-4o-mini": {"input": 0.00015, "output": 0.0006},
            "claude-3-haiku": {"input": 0.00025, "output": 0.00125},
            "claude-3-sonnet": {"input": 0.003, "output": 0.015},
        }

    def track(self, model: str, input_tokens: int, output_tokens: int):
        """Record LLM API usage and calculate cost"""
        if datetime.now().date() != self.last_reset:
            self.daily_cost = 0.0
            self.last_reset = datetime.now().date()

        pricing = self.model_pricing.get(model, {"input": 0, "output": 0})
        cost = (input_tokens * pricing["input"] +
                output_tokens * pricing["output"]) / 1000

        self.daily_cost += cost
        daily_cost.set(self.daily_cost)  # Prometheus gauge

        if self.daily_cost > self.daily_budget:
            alert_manager.send_alert(
                level="CRITICAL",
                title="Daily Budget Exceeded",
                message=f"Daily cost: ${self.daily_cost:.2f}, Budget: ${self.daily_budget}"
            )

        return cost
```

### Day 5 Exercise

```
1. Prometheus alerting rules for AI app
2. Slack webhook integration
3. Model drift detection monitor
4. Cost tracking with daily budget
5. Test: manually trigger an alert
```

---

## Day 6 — Backup + Security

### Database Backups

```bash
#!/bin/bash
# backup.sh — Automated backups

BACKUP_DIR="/backups"
DB_NAME="documentai"
DB_USER="user"
RETENTION_DAYS=7

# PostgreSQL backup
docker compose exec -T postgres \
  pg_dump -U $DB_USER $DB_NAME | gzip > \
  "$BACKUP_DIR/postgres_$(date +%Y%m%d_%H%M%S).sql.gz"

# Qdrant backup (API call)
curl -X POST "http://localhost:6333/collections/documents/snapshot"

# Redis backup
docker compose exec -T redis redis-cli SAVE

# Clean old backups
find $BACKUP_DIR -name "*.sql.gz" -mtime +$RETENTION_DAYS -delete

# Upload to S3-compatible storage (optional)
# rclone sync $BACKUP_DIR s3:my-backups/
```

```yaml
# docker-compose.backup.yml
services:
  backup:
    image: alpine:latest
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./backups:/backups
      - ./backup.sh:/backup.sh:ro
    command: >
      sh -c "apk add --no-cache docker-cli postgresql-client
             && chmod +x /backup.sh
             && echo '0 3 * * * /backup.sh' | crontab -
             && crond -f"
```

### Volume Backups

```bash
# Backup Docker volumes
docker run --rm \
  -v qdrant_data:/source:ro \
  -v ./backups:/backups \
  alpine tar czf /backups/qdrant_$(date +%Y%m%d).tar.gz -C /source .
```

### Security Checklist

```bash
# Firewall
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp       # SSH
ufw allow 80/tcp       # HTTP
ufw allow 443/tcp      # HTTPS
ufw allow 51820/udp    # WireGuard VPN (optional)
ufw enable

# Fail2Ban
apt install fail2ban
cat > /etc/fail2ban/jail.local << EOF
[sshd]
enabled = true
maxretry = 3
bantime = 3600

[nginx-http-auth]
enabled = true
maxretry = 5
bantime = 600
EOF
systemctl restart fail2ban

# SSL (Let's Encrypt)
certbot --nginx -d document-ai.apexpillar.tech
# Auto-renewal: systemctl enable certbot.timer

# SSH Hardening
# /etc/ssh/sshd_config
# PermitRootLogin prohibit-password
# PasswordAuthentication no
# Port 2222 (change from default)
systemctl restart sshd

# Docker Security
# Don't run containers as root
# Use read-only filesystem where possible
# Limit container capabilities
# docker run --read-only --cap-drop=ALL ...

# Secrets Rotation
# Rotate API keys every 90 days
# Use Docker secrets (not env vars)
# Never commit .env to git
```

### Day 6 Exercise

```
1. Automated backup script
2. Crontab setup for daily backups
3. Test backup restore
4. Firewall rules verify
5. Fail2Ban setup
6. SSH hardening
7. Docker security scan
```

---

## Day 7 — Full Deploy: All 3 Projects Live

### Deployment Script

```bash
#!/bin/bash
# deploy-all.sh — Deploy all 3 projects

set -e

echo "🚀 Deploying all projects..."

# 1. Document AI
echo "📄 Deploying Document AI..."
cd /opt/document-ai
git pull origin main
docker compose -f docker-compose.prod.yml build
docker compose -f docker-compose.prod.yml up -d
if curl -sf http://localhost:8000/health; then
    echo "✅ Document AI deployed"
else
    echo "❌ Document AI health check failed"
    exit 1
fi

# 2. ApexERP
echo "🏪 Deploying ApexERP..."
cd /opt/apexerp
git pull origin main
docker compose -f docker-compose.prod.yml build
docker compose -f docker-compose.prod.yml up -d
if curl -sf http://localhost:8001/health; then
    echo "✅ ApexERP deployed"
else
    echo "❌ ApexERP health check failed"
    exit 1
fi

# 3. Flow Studio
echo "🎵 Deploying Flow Studio..."
cd /opt/flow-studio
git pull origin main
docker compose -f docker-compose.prod.yml build
docker compose -f docker-compose.prod.yml up -d
if curl -sf http://localhost:8002/health; then
    echo "✅ Flow Studio deployed"
else
    echo "❌ Flow Studio health check failed"
    exit 1
fi

echo ""
echo "🎉 All projects deployed successfully!"
echo "📄 Document AI: https://document-ai.apexpillar.tech"
echo "🏪 ApexERP:     https://apexerp.apexpillar.tech"
echo "🎵 Flow Studio: https://flow.apexpillar.tech"
```

### Final Architecture

```
                         ┌─────────────┐
User ──→ Cloudflare ──→  │  Hetzner VPS│
                          │  (1 App)    │
                          ├─────────────┤
                          │  Traefik     │
                          │  (Reverse    │
                          │   Proxy)     │
                          ├──────┬──────┤
                          │ doc  │  api  │
                          │ .ai  │  Port │
                          ├──────┼──────┤
                          │ apex │  api  │
                          │ .ai  │  Port │
                          ├──────┼──────┤
                          │ flow │  api  │
                          │ .ai  │  Port │
                          ├──────┴──────┤
                          │ Shared:      │
                          │ Redis,       │
                          │ Monitoring   │
                          │ (Grafana,    │
                          │  Prometheus, │
                          │  Loki)       │
                          └─────────────┘
```

### Day 7 — Week 2 Checklist

```
FINAL CHECKLIST:
  ☐ CI/CD pipeline (push → test → build → deploy)
  ☐ All 3 projects containerized
  ☐ Prometheus + Grafana monitoring live
  ☐ Loki log aggregation setup
  ☐ Slack alerts configured
  ☐ Model drift monitoring
  ☐ Cost tracking (daily budget alerts)
  ☐ Database backups automated
  ☐ Docker security hardening
  ☐ SSL for all 3 domains
  ☐ Firewall + Fail2Ban active
  ☐ Deploy script ready

🎉 CELEBRATE: All 3 projects production-ready!
```

---

## Resources

- **Prometheus:** [prometheus.io/docs](https://prometheus.io/docs)
- **Grafana:** [grafana.com/docs](https://grafana.com/docs)
- **Loki:** [grafana.com/docs/loki](https://grafana.com/docs/loki)
- **GitHub Actions:** [docs.github.com/actions](https://docs.github.com/actions)
- **Prometheus FastAPI:** [github.com/trallnag/prometheus-fastapi-instrumentator](https://github.com/trallnag/prometheus-fastapi-instrumentator)
- **structlog:** [structlog.org](https://structlog.org)
