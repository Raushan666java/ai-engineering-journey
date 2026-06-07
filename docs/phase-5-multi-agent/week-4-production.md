# Week 4: Production Deploy

**Duration:** October 20-26, 2026 | **Hours:** 35

---

## Goals

- All 3 projects deployed on Hetzner VPS
- Docker compose managing all services
- CI/CD via GitHub Actions
- Monitoring with Grafana + LangSmith

## Day 1: Docker Compose

```yaml
version: '3.8'
services:
  api:
    build: ./api
    ports: ["8000:8000"]
    env_file: .env
  
  chromadb:
    image: chromadb/chroma
  
  qdrant:
    image: qdrant/qdrant
  
  n8n:
    image: n8nio/n8n
    ports: ["5678:5678"]
```

## Day 2: CI/CD

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
      - name: Deploy to Hetzner
        run: |
          ssh deploy@${{ secrets.HOST }} "
            cd /app && git pull && docker compose up -d
          "
```

## Day 3: Nginx + SSL

```nginx
server {
    listen 443 ssl;
    server_name ai.apexpillar.tech;
    
    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
    }
}
```

## Day 4-5: Monitoring

- Grafana dashboards
- LangSmith traces
- Log aggregation
- Error alerts

## Day 6: Load Test

```bash
pip install locust
locust -f locustfile.py --headless -u 100 -r 10
```

## Day 7: REST + Review

- All services stable
- Tests passing
- Docs written
- Domains configured
