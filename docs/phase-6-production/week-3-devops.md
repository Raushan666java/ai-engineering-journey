# Week 3: DevOps Production

**Duration:** November 10-16, 2026 | **Hours:** 35

---

## Day 1: Multi-stage Docker

```dockerfile
# Build stage
FROM python:3.12-slim AS builder
COPY requirements.txt .
RUN pip install --user -r requirements.txt

# Run stage  
FROM python:3.12-slim
COPY --from=builder /root/.local /root/.local
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]
```

## Day 2: Production Compose

All services together: FastAPI + ChromaDB + n8n + Redis + PostgreSQL

## Day 3: Nginx + SSL

```nginx
server {
    listen 443 ssl http2;
    server_name api.apexpillar.tech;
    
    location / {
        proxy_pass http://fastapi:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
    }
    
    location /api/ai {
        proxy_pass http://agent-api:8080;
        proxy_read_timeout 120s;
    }
}
```

## Day 4: GitHub Actions CI/CD

```yaml
name: Deploy
on:
  push: {branches: [main]}
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pip install -r requirements.txt
      - run: pytest
  deploy:
    needs: test
    steps:
      - run: ssh deploy@host "docker compose pull && docker compose up -d"
```

## Day 5-6: Monitoring

- Grafana dashboard for metrics
- LangSmith for LLM traces
- Uptime monitoring
- Error alerting (email/WhatsApp)

## Day 7: Security

- Environment variables (.env)
- API key rotation
- Rate limiting
- Input sanitization
- CORS configuration
