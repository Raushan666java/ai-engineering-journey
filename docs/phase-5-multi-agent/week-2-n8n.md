# Week 2: n8n Automation

**Duration:** October 6-12, 2026 | **Hours:** 35

---

## Day 1: n8n Setup

```bash
docker run -d --name n8n \
  -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  n8nio/n8n
```

## Day 2-3: Workflow Patterns

- **Webhook → HTTP → AI Agent → Response**
- **Cron → Database Query → Email Report**
- **WhatsApp → Classify → Route → Respond**

## Day 4-5: n8n + AI

- n8n AI agent node
- LangChain integration
- Custom code nodes (Python)

## Day 6-7: Build Lead Automation

```text
WhatsApp Lead → n8n Webhook
    → Lead qualification (AI)
    → CRM add (API call)
    → Welcome email
    → Slack notification
```

Full automated pipeline with error handling.
