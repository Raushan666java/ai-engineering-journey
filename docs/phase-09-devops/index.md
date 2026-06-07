# Phase 9 — DevOps

**Duration:** 2 Weeks (Aug 25 – Sep 7, 2026)
**Daily:** 5 hours | **Goal:** AI applications deploy, monitor, and scale karna seekho

---

## Why DevOps for AI Engineer?

```
Tu Laravel developer hai. Deploy ka experience hai:
  → Shared hosting pe PHP daal diya
  → Forge/Envoyer se Laravel deploy kiya
  → DigitalOcean VPS manage kiya

Par AI engineering mein DevOps alag hai:

🔥 Model files large hote hain (GBs)
🔥 GPU drivers + CUDA setup karna hota hai
🔥 LLM APIs ke saath integrate karna hota hai
🔥 Monitoring alag hoti hai (embedding quality, drift)
🔥 Cost tracking chahiye (LLM API costs, compute)

DevOps skill = AI Engineer ka differentiator
Bina DevOps ke, tum sirf Jupyter Notebook wale ho.
```

---

## DevOps vs MLOps

```
DevOps:
  → CI/CD pipelines
  → Containerization
  → Infrastructure as Code
  → Monitoring & Logging
  → Security & Backup

MLOps (subset for AI):
  → Model versioning
  → Experiment tracking
  → Model serving
  → Drift detection
  → Feature store
  → A/B testing models

Tumhare liye as a solo AI Engineer:
  DevOps + MLOps basics = Complete package
```

---

## 2-Week Plan

### Week 1 — Docker & Deploy

```
Day 1: Docker review (Dockerfile, docker-compose, multi-stage)
Day 2: Deployment targets (VPS, Railway, Render, Fly.io)
Day 3: GitHub Actions for Python/AI apps
Day 4: Docker Compose for AI stack
Day 5: Environment management (secrets, .env, Docker secrets)
Day 6: PRACTICAL — Deploy Document AI to Hetzner VPS
Day 7: REST + Troubleshooting
```

### Week 2 — CI/CD & Monitoring

```
Day 1: CI/CD pipelines for AI applications
Day 2: Testing in CI (pytest, integration tests, test containers)
Day 3: Monitoring with Prometheus + Grafana
Day 4: Logging (structured logging, Loki)
Day 5: Alerting + Model monitoring + Cost monitoring
Day 6: Backup + Security
Day 7: Full deploy — all 3 projects live
```

---

## What You'll Have at the End

```
✅ All 3 projects containerized and deployed
✅ CI/CD pipeline (push → test → build → deploy)
✅ Monitoring dashboard (Prometheus + Grafana)
✅ Structured logging with Loki
✅ Alerts on Slack/Discord
✅ Cost tracking for LLM APIs
✅ Database backups automated
✅ SSL + firewall + security basics
```

---

## Prerequisites

- Docker basics (Dockerfile, docker-compose)
- Basic Linux commands
- GitHub account
- A VPS (Hetzner CX22 — $10/month)
- Phase 8 system design concepts

---

## Completion Criteria

- [ ] Docker multi-stage builds samajh gaye
- [ ] GitHub Actions CI working hai
- [ ] Docker Compose for AI stack ready
- [ ] Document AI deployed on Hetzner
- [ ] CI/CD pipeline (push → test → deploy)
- [ ] Prometheus + Grafana dashboard ready
- [ ] Loki logging setup
- [ ] Slack alerts configured
- [ ] Database backups automated
- [ ] SSL + firewall configured
- [ ] All 3 projects live and accessible

---

## Weeks

- [Week 1 — Docker & Deploy](week-01/index.md)
- [Week 2 — CI/CD & Monitoring](week-02/index.md)
