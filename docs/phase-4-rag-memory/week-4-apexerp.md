# Week 4: ApexERP AI Module

**Duration:** September 22-28, 2026 | **Hours:** 35

---

## Project: ApexERP WhatsApp AI

A WhatsApp bot for your ERP that handles orders, payments, and customer queries.

### Architecture

```text
WhatsApp → n8n Webhook → Laravel API
                            ↓
                      Router Agent
                     /      |      \
                Order   Payment   Support
                 Agent    Agent     Agent
                     \      |      /
                      Memory Layer
                          ↓
                    Response → WhatsApp
```

### Tools

| Tool | Purpose |
|------|---------|
| `customer_lookup` | Find customer by phone |
| `check_inventory` | Check stock availability |
| `get_price` | Get product pricing |
| `create_order` | Create new order |
| `verify_payment` | Verify UPI/bank payment |

### Build Steps

**Day 1-2:** WhatsApp webhook + n8n setup
**Day 3-4:** Router agent with intent classification
**Day 5-6:** Order + Payment agents
**Day 7:** Memory integration + deploy

### Deliverable

- Live WhatsApp bot on your ERP
- Can handle orders via chat
- Remembers customer preferences
- Deployed on Hetzner VPS
