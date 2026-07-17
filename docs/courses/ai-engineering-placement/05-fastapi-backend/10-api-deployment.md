# API Deployment — Docker, CI/CD, and Production Readiness

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Containerize FastAPI applications with Docker for consistent deployment |
| LO2 | Configure production ASGI servers with uvicorn and gunicorn |
| LO3 | Set up CI/CD pipelines for automated testing and deployment |
| LO4 | Deploy to cloud platforms (AWS, GCP, Azure) and PaaS services |
| LO5 | Implement environment configuration, secrets management, and scaling |
| LO6 | Apply production best practices: reverse proxy, monitoring, logging |

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 10.1 | Docker Containerization | Dockerfile, multi-stage builds, docker-compose |
| 10.2 | Production ASGI Server | Uvicorn workers, gunicorn, performance tuning |
| 10.3 | Reverse Proxy | Nginx, Traefik, Caddy configuration |
| 10.4 | Environment Configuration | .env, settings management, secrets |
| 10.5 | CI/CD Pipeline | GitHub Actions, build, test, deploy |
| 10.6 | Cloud Deployment | AWS ECS, GCP Cloud Run, Azure App Service |
| 10.7 | Database in Production | Migrations, connection pooling, backups |
| 10.8 | Monitoring and Observability | Log aggregation, metrics, alerting |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Docker] --> B[ASGI Server]
    B --> C[Reverse Proxy]
    C --> D[Configuration]
    D --> E[CI/CD]
    E --> F[Cloud Deploy]
    F --> G[Production DB]
    G --> H[Monitoring]
```

## 10.1 Docker Containerization

Docker ensures consistent environments from development to production.

```dockerfile
# Dockerfile — multi-stage build
# Stage 1: Build
FROM python:3.12-slim AS builder

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Stage 2: Runtime
FROM python:3.12-slim AS runtime

WORKDIR /app
COPY --from=builder /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin
COPY . .

EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]

# docker build -t myapi:latest .
# docker run -p 8000:8000 myapi:latest
```

**Docker Compose** for local development with dependencies:

```yaml
# docker-compose.yml
version: "3.9"

services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql+asyncpg://postgres:postgres@db:5432/appdb
      - REDIS_URL=redis://redis:6379/0
    depends_on:
      - db
      - redis
    volumes:
      - ./app:/app/app  # Hot reload in development

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: appdb
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  celery_worker:
    build: .
    command: celery -A app.tasks worker --loglevel=info
    environment:
      - DATABASE_URL=postgresql+asyncpg://postgres:postgres@db:5432/appdb
      - REDIS_URL=redis://redis:6379/0
    depends_on:
      - db
      - redis

volumes:
  postgres_data:
```

**Docker best practices**:
- Use multi-stage builds to reduce image size (from ~1GB to ~150MB)
- Use slim or alpine base images
- Pin dependency versions
- Run as non-root user
- Use .dockerignore to exclude unnecessary files

## 10.2 Production ASGI Server

```bash
# Uvicorn direct (single process)
uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4

# Gunicorn with Uvicorn workers (recommended for production on Linux)
gunicorn app.main:app \
    --worker-class uvicorn.workers.UvicornWorker \
    --bind 0.0.0.0:8000 \
    --workers 4 \
    --timeout 120 \
    --keep-alive 5 \
    --max-requests 1000 \
    --max-requests-jitter 50 \
    --access-logfile - \
    --error-logfile -
```

**Worker calculation**: `2 * CPU cores + 1` (for I/O-bound). For CPU-bound, use fewer workers.

```python
# gunicorn.conf.py
import multiprocessing

bind = "0.0.0.0:8000"
worker_class = "uvicorn.workers.UvicornWorker"
workers = multiprocessing.cpu_count() * 2 + 1
timeout = 120
keepalive = 5
max_requests = 1000
max_requests_jitter = 50
accesslog = "-"
errorlog = "-"
loglevel = "info"
```

**Uvicorn configuration options**:

| Option | Description | Recommended |
|--------|-------------|-------------|
| workers | Number of worker processes | 2*CPU+1 |
| timeout | Worker timeout in seconds | 120 |
| keep-alive | HTTP keep-alive timeout | 5 |
| max-requests | Restart worker after N requests | 1000 |
| limit-max-requests | Prevent memory leaks | 1000 |
| backlog | Connection backlog size | 2048 |

## 10.3 Reverse Proxy

Nginx handles SSL termination, static files, and load balancing.

```nginx
# nginx.conf
upstream api_servers {
    least_conn;
    server api1:8000 max_fails=3 fail_timeout=30s;
    server api2:8000 max_fails=3 fail_timeout=30s;
}

server {
    listen 80;
    server_name api.example.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name api.example.com;

    ssl_certificate /etc/letsencrypt/live/api.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.example.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    client_max_body_size 50M;
    proxy_read_timeout 120s;
    proxy_send_timeout 120s;

    location / {
        proxy_pass http://api_servers;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /ws {
        proxy_pass http://api_servers;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }

    location /static/ {
        alias /var/www/static/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

**Alternative: Traefik** (cloud-native reverse proxy):

```yaml
# traefik.yml
entryPoints:
  web:
    address: ":80"
  websecure:
    address: ":443"

providers:
  docker:
    exposedByDefault: false

certificatesResolvers:
  letsencrypt:
    acme:
      email: admin@example.com
      storage: /letsencrypt/acme.json
      httpChallenge:
        entryPoint: web
```

## 10.4 Environment Configuration

```python
# app/config.py
from pydantic_settings import BaseSettings
from pydantic import Field, SecretStr
from typing import Optional

class Settings(BaseSettings):
    # Application
    app_name: str = "FastAPI App"
    app_version: str = "1.0.0"
    debug: bool = False

    # Database
    database_url: str = Field(..., alias="DATABASE_URL")
    database_pool_size: int = 5
    database_max_overflow: int = 10

    # Redis
    redis_url: str = Field("redis://localhost:6379/0", alias="REDIS_URL")

    # Auth
    jwt_secret: SecretStr = Field(..., alias="JWT_SECRET")
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    refresh_token_expire_days: int = 7

    # External APIs
    sendgrid_api_key: Optional[SecretStr] = Field(None, alias="SENDGRID_API_KEY")

    # Deployment
    allowed_hosts: list[str] = ["*"]
    cors_origins: list[str] = ["http://localhost:3000"]
    environment: str = "development"

    model_config = {
        "env_file": ".env",
        "env_file_encoding": "utf-8",
        "case_sensitive": False,
    }

settings = Settings()

# app/dependencies/settings.py
from fastapi import Request

def get_settings(request: Request) -> Settings:
    return request.app.state.settings

# app/main.py
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.settings = Settings()
    yield

app = FastAPI(lifespan=lifespan)
```

**.env file** (never commit to version control):

```env
DATABASE_URL=postgresql+asyncpg://user:pass@localhost:5432/appdb
REDIS_URL=redis://localhost:6379/0
JWT_SECRET=your-256-bit-secret-key-here
SENDGRID_API_KEY=SG.example
ENVIRONMENT=production
CORS_ORIGINS=["https://example.com"]
```

**Secrets management in production**: Use Docker secrets, Kubernetes secrets, AWS Secrets Manager, or HashiCorp Vault. Never hardcode secrets or commit them to Git.

## 10.5 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: myorg/myapi

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_DB: testdb
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
        ports: ["5432:5432"]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
          cache: "pip"
      - run: pip install -r requirements.txt -r requirements-dev.txt
      - run: ruff check app/
      - run: pytest tests/ --cov=app/ --cov-report=xml
      - uses: codecov/codecov-action@v3

  build-and-push:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}

  deploy:
    needs: build-and-push
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to EC2
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            docker pull ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
            docker stop myapi || true
            docker rm myapi || true
            docker run -d --name myapi \
              --restart unless-stopped \
              -p 8000:8000 \
              --env-file /opt/myapi/.env \
              ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
```

## 10.6 Cloud Deployment

**AWS ECS (Fargate)**:

```yaml
# ecs-task-definition.json
{
  "family": "myapi",
  "taskRoleArn": "arn:aws:iam::123456789012:role/ecsTaskRole",
  "executionRoleArn": "arn:aws:iam::123456789012:role/ecsTaskExecutionRole",
  "networkMode": "awsvpc",
  "containerDefinitions": [
    {
      "name": "api",
      "image": "myrepo/myapi:latest",
      "portMappings": [{ "containerPort": 8000, "protocol": "tcp" }],
      "environment": [
        { "name": "ENVIRONMENT", "value": "production" }
      ],
      "secrets": [
        { "name": "DATABASE_URL", "valueFrom": "arn:aws:ssm:us-east-1:123456789012:parameter/database_url" },
        { "name": "JWT_SECRET", "valueFrom": "arn:aws:ssm:us-east-1:123456789012:parameter/jwt_secret" }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/myapi",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "api"
        }
      }
    }
  ],
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "512",
  "memory": "1024"
}
```

**GCP Cloud Run** (serverless containers):

```yaml
# cloudbuild.yaml
steps:
  - name: "gcr.io/cloud-builders/docker"
    args: ["build", "-t", "gcr.io/$PROJECT_ID/myapi", "."]
  - name: "gcr.io/cloud-builders/docker"
    args: ["push", "gcr.io/$PROJECT_ID/myapi"]
  - name: "gcr.io/cloud-builders/gcloud"
    args:
      - "run"
      - "deploy"
      - "myapi"
      - "--image=gcr.io/$PROJECT_ID/myapi"
      - "--platform=managed"
      - "--region=us-central1"
      - "--allow-unauthenticated"
      - "--memory=512Mi"
      - "--cpu=1"
      - "--min-instances=0"
      - "--max-instances=10"
      - "--concurrency=80"
      - "--timeout=300"
```

**Azure App Service**:

```bash
# Deploy with Azure CLI
az webapp create \
    --resource-group my-rg \
    --plan my-plan \
    --name myapi-app \
    --runtime "PYTHON:3.12"

az webapp config set \
    --resource-group my-rg \
    --name myapi-app \
    --startup-file "gunicorn app.main:app -k uvicorn.workers.UvicornWorker"

az webapp deployment source config-zip \
    --resource-group my-rg \
    --name myapi-app \
    --src dist.zip
```

## 10.7 Database in Production

```python
# Automated migration in startup
from alembic.config import Config
from alembic import command

def run_migrations():
    alembic_cfg = Config("alembic.ini")
    command.upgrade(alembic_cfg, "head")

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Run migrations on startup
    run_migrations()
    yield

# Database backup script
# backup.sh
# pg_dump -h localhost -U postgres appdb > backup_$(date +%Y%m%d).sql
# aws s3 cp backup_*.sql s3://my-backup-bucket/db/

# Connection pooling recommendations
DATABASE_POOL_SIZE = 5  # Base connections
DATABASE_MAX_OVERFLOW = 10  # Additional connections under load
DATABASE_POOL_PRE_PING = True  # Verify connections before use
DATABASE_POOL_RECYCLE = 3600  # Recycle connections after 1 hour
```

**Production database checklist**:
- Automated backups (daily + point-in-time recovery)
- Read replicas for read-heavy workloads
- Connection pooling with proper sizing
- Database migration as part of deployment
- Monitoring: slow queries, connection count, disk space
- Encryption at rest and in transit

## 10.8 Monitoring and Observability

```python
import logging
from opentelemetry import trace
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.instrumentation.fastapi import FastAPIInstrumentor
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor

# OpenTelemetry setup
provider = TracerProvider()
processor = BatchSpanProcessor(OTLPSpanExporter(endpoint="http://localhost:4317"))
provider.add_span_processor(processor)
trace.set_tracer_provider(provider)

app = FastAPI()
FastAPIInstrumentor.instrument_app(app)

# Sentry for error tracking
import sentry_sdk
from sentry_sdk.integrations.fastapi import FastApiIntegration
from sentry_sdk.integrations.sqlalchemy import SqlalchemyIntegration

sentry_sdk.init(
    dsn="https://your-dsn@sentry.io/project-id",
    integrations=[FastApiIntegration(), SqlalchemyIntegration()],
    traces_sample_rate=0.1,
    environment=settings.environment,
)

# Structured logging in JSON
logging.basicConfig(
    level=logging.INFO,
    format='{"timestamp": "%(asctime)s", "level": "%(levelname)s", "message": "%(message)s"}',
)

# Grafana dashboard for monitoring
# Key panels:
# - Request rate (RPS) by endpoint
# - Error rate (5xx vs 4xx)
# - p50/p95/p99 latency
# - Active database connections
# - CPU/Memory usage per container
# - Queue depth (Celery/SQS)
```

---

## TypeScript Parallel

```typescript
import express from "express";
import helmet from "helmet";
import compression from "compression";

const app = express();

// Production middleware
app.use(helmet());
app.use(compression());
app.use(express.json({ limit: "10mb" }));

// Environment-based configuration
const config = {
  port: parseInt(process.env.PORT || "3000"),
  isProduction: process.env.NODE_ENV === "production",
  databaseUrl: process.env.DATABASE_URL!,
  jwtSecret: process.env.JWT_SECRET!,
};

const server = app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  server.close(() => process.exit(0));
});
```

---

## Summary

- Multi-stage Docker builds produce small, secure container images for deployment
- Production ASGI servers use gunicorn with uvicorn workers and proper worker counts
- Reverse proxies (Nginx, Traefik) provide SSL termination, load balancing, and static file serving
- Environment configuration uses Pydantic Settings with .env files and secret management
- CI/CD pipelines automate testing, building, and deployment on every push
- Cloud deployment options: AWS ECS, GCP Cloud Run, Azure App Service
- Database migrations run automatically during deployment startup
- Monitoring requires structured logging, metrics (Prometheus), error tracking (Sentry), and tracing (OpenTelemetry)
- Database connection pooling prevents connection exhaustion under load
- Always implement graceful shutdown, health checks, and automated backups

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Containerization | Multi-stage Docker builds | Fat images with dev dependencies |
| Server config | Gunicorn + uvicorn workers | --reload in production |
| Reverse proxy | Nginx with SSL termination | Direct uvicorn exposure |
| Secrets | Environment variables / vault | Hardcoded secrets |
| CI/CD | GitHub Actions with testing | Manual deployment |
| Database | Automated migrations in CI | Manual schema changes |
| Monitoring | Logs + metrics + tracing | Only error logging |

## Interview Q&A

<details class="tp-qa-card" data-qid="fastapi-s10-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q1: What is the recommended production ASGI server for FastAPI?</summary>
  <div class="tp-qa-answer"><p>Gunicorn with Uvicorn workers (gunicorn -k uvicorn.workers.UvicornWorker) for Linux production. On Windows, use Uvicorn directly. Configure workers as 2*CPU+1 for I/O-bound apps. Set max_requests to prevent memory leaks. Use timeout 120s for long requests.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s10-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q2: How do you handle database migrations in production?</summary>
  <div class="tp-qa-answer"><p>Run Alembic migrations as part of the deployment startup before serving traffic. Use the lifespan context manager to run migrations on startup. Always test migrations on staging first. Have rollback plan (alembic downgrade). Use zero-downtime migration patterns for large schema changes.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s10-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q3: What is a multi-stage Docker build?</summary>
  <div class="tp-qa-answer"><p>Multi-stage builds use multiple FROM statements in a Dockerfile. Stage 1 installs dependencies and builds artifacts (includes compilers and build tools). Stage 2 copies only the runtime artifacts (app code + installed packages) to a minimal base image. This reduces final image size from ~1GB to ~150MB.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s10-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q4: How do you scale FastAPI horizontally?</summary>
  <div class="tp-qa-answer"><p>Ensure stateless application design. Use a reverse proxy (Nginx) for load balancing across multiple containers/instances. Store session data in Redis, not local memory. Use database connection pooling. Deploy behind an auto-scaling group (ECS, K8s, Cloud Run) that adds instances based on CPU/memory usage.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s10-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q5: What should be in a CI/CD pipeline for FastAPI?</summary>
  <div class="tp-qa-answer"><p>Lint (ruff), type check (mypy), unit tests (pytest), integration tests, build Docker image, run security scan, push to registry, deploy to staging, run smoke tests, deploy to production. Each stage should gate the next — if tests fail, stop the pipeline. Use GitHub Actions, GitLab CI, or Jenkins.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s10-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q6: How do you manage configuration across environments?</summary>
  <div class="tp-qa-answer"><p>Use Pydantic Settings with BaseSettings. Load from .env file locally, environment variables in production. Use different .env files per environment (.env.dev, .env.staging, .env.prod). Never commit .env files with production secrets. Use secret management services (AWS Secrets Manager, Vault) for sensitive values.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s10-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q7: What is the purpose of a reverse proxy in front of FastAPI?</summary>
  <div class="tp-qa-answer"><p>SSL/TLS termination (certificate management), load balancing across instances, static file serving (docs, assets), request buffering, connection limiting, WebSocket support, security filtering (rate limiting, IP blocking), and forwarding client IP via headers. Nginx is the most common choice.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s10-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q8: How do you implement health checks for orchestration?</summary>
  <div class="tp-qa-answer"><p>Create /health endpoint checking database, cache, and dependencies. Return 200 + JSON status. Create /ready endpoint for readiness (is app initialized?). Configure liveness probes (is app alive?) and readiness probes (is app ready to serve?) in container orchestration (K8s, ECS, Cloud Run).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s10-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q9: How do you handle graceful shutdown in FastAPI?</summary>
  <div class="tp-qa-answer"><p>The lifespan context manager handles cleanup. When a SIGTERM signal is received, the code after yield executes — close database connections, flush metrics, complete in-flight requests before exiting. Docker/K8s sends SIGTERM and waits for the grace period before SIGKILL.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s10-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q10: How do you monitor a FastAPI application in production?</summary>
  <div class="tp-qa-answer"><p>Three pillars: Logging (structured JSON to stdout, aggregated by ELK/Loki), Metrics (Prometheus metrics on /metrics endpoint — request rate, error rate, latency histograms), Tracing (OpenTelemetry for distributed tracing). Add Sentry for error tracking. Create Grafana dashboards for visualization. Set up alerts for error rate >1% and p95 >500ms.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What is the recommended worker count for a 4-CPU production server?

a) 4
b) 9
c) 2
d) 1

<details class="tp-qa-card" data-qid="fastapi-s10-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 9 (2 * 4 + 1)</strong></p></div></details>

**Q2**: Which tool manages SSL certificates in a reverse proxy?

a) Certbot
b) pip
c) Docker
d) Uvicorn

<details class="tp-qa-card" data-qid="fastapi-s10-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) Certbot</strong></p></div></details>

**Q3**: What signal triggers graceful shutdown in Docker?

a) SIGINT
b) SIGTERM
c) SIGKILL
d) SIGHUP

<details class="tp-qa-card" data-qid="fastapi-s10-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) SIGTERM</strong></p></div></details>

**Q4**: Which cloud platform provides serverless container execution?

a) AWS EC2
b) GCP Cloud Run
c) Azure VMs
d) DigitalOcean Droplets

<details class="tp-qa-card" data-qid="fastapi-s10-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) GCP Cloud Run</strong></p></div></details>

**Q5**: What port does the Prometheus metrics endpoint typically serve on?

a) 8000
b) 9090
c) 3000
d) 5432

<details class="tp-qa-card" data-qid="fastapi-s10-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 9090</strong></p></div></details>

## Exercises

**Easy** — Create a Dockerfile for a FastAPI app with multi-stage build. Include HEALTHCHECK instruction. Build and run the container. Verify it responds to requests.

**Medium** — Set up docker-compose with FastAPI, PostgreSQL, and Redis. Configure environment variables, health checks, and dependency ordering. Add a Celery worker service.

**Medium** — Create a GitHub Actions workflow: lint (ruff), type check (mypy), test (pytest), build Docker image, and push to container registry on push to main branch.

**Hard** — Deploy a FastAPI app to AWS ECS Fargate with: CloudFormation template, Application Load Balancer, auto-scaling, RDS PostgreSQL, ElastiCache Redis, CloudWatch logging, and CodePipeline CI/CD.

**Hard** — Set up full observability stack for a FastAPI app: Prometheus metrics, Loki log aggregation, Tempo tracing, Grafana dashboards, and Sentry error tracking. Create alerts for high error rates and latency.

---

> **Next**: [Back to Index](../index.md)
