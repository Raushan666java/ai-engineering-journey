# Week 2 — Purvanchal Flow Studio Pipeline

**Goal:** Build end-to-end AI pipelines with n8n + Python microservices
**Output:** Flow Studio integration with Laravel + n8n

---

## Day 1 — Project Context

```
Purvanchal Flow Studio kya hai?

= An automation platform that combines:
├── n8n — Visual workflow builder
├── FastAPI — Python microservices
├── Redis — Queue management + caching
└── Laravel — User dashboard + management

Users can:
→ Build workflows visually (no code)
→ Add AI nodes (GPT, Claude, etc.)
→ Connect 200+ apps
→ Monitor executions
→ Get alerts on failures
```

### Why This Matters for Raushan?

```
Tu Laravel developer hai (ApexPillar Tech, Patna).

Flow Studio se:
→ Laravel apps ko AI workflows se connect kar sakta hai
→ Custom n8n nodes bana sakta hai (Python)
→ Automated pipelines bana sakta hai
→ Clients ke liye automation solutions de sakta hai

Real use cases for ApexERP clients:
→ "Order aate hi WhatsApp notification bhejo" ✅
→ "Daily sales report email karo" ✅
→ "Low stock alert on Slack" ✅
→ "Customer support auto-reply" ✅
```

---

## Day 2 — AI Pipeline Architecture

```yaml
Architecture Overview:

┌──────────────┐
│  User Input  │  (Webhook / API / Cron / Email)
└──────┬───────┘
       │
┌──────▼───────┐
│   n8n Core   │  ← Trigger decides workflow
└──────┬───────┘
       │
┌──────▼───────────────────┐
│  Processing Pipeline     │
│                          │
│  1. Preprocess (Code)    │  Clean, validate, transform
│  2. AI Node (LLM)        │  Think, decide, generate
│  3. Action Node           │  Execute (API, DB, Email)
│  4. Postprocess (Code)   │  Format, store, respond
└──────┬───────────────────┘
       │
┌──────▼───────┐
│   Output      │  (Slack / Email / API / DB / SMS)
└──────────────┘

AI Pipeline Flow:
Input → Context Building → LLM Call → Output Parsing → Action → Response
```

### Complete Pipeline Example

```javascript
// n8n Workflow: "AI Customer Response Pipeline"

/* Node 1: Webhook Trigger */
// Receives: { customer_id, message, channel }

/* Node 2: Code Node — Context Building */
const customerId = $json.customer_id;
const message = $json.message;

// Fetch customer context from API
const customer = await $http.get(`http://laravel-api:8000/api/customers/${customerId}`, {
  headers: { 'Authorization': `Bearer ${$env.API_TOKEN}` }
});

// Build context for AI
return {
  customer: customer.data,
  message: message,
  context: {
    name: customer.data.name,
    company: customer.data.company,
    plan: customer.data.subscription_plan,
    recent_orders: customer.data.recent_orders || [],
    previous_tickets: customer.data.open_tickets || 0
  }
};

/* Node 3: AI Node (OpenAI) */
// System Prompt:
/*
You are ApexERP customer support AI.
Customer: {{ $json.customer.name }}
Company: {{ $json.customer.company }}
Plan: {{ $json.context.plan }}

Message: {{ $json.message }}

Respond in Hinglish. Be helpful and professional.
If it's a technical issue, provide step-by-step solution.
If it's billing-related, explain charges clearly.
If you can't solve, apologize and offer to create a ticket.
*/

/* Node 4: Code Node — Parse & Act */
const aiResponse = $json.response;
const message = $json.message;

// Check if we need to create a ticket
const needsTicket = aiResponse.includes('ticket') || 
                     aiResponse.includes('escalate') ||
                     message.includes('complaint');

if (needsTicket) {
  await $http.post('http://laravel-api:8000/api/tickets', {
    customer_id: $json.customer.id,
    message: message,
    ai_response: aiResponse,
    source: 'flow-studio-ai'
  });
}

return {
  response: aiResponse,
  ticket_created: needsTicket
};

/* Node 5: Respond to user */
// Send back via original channel (Slack/Email/API)
```

---

## Day 3 — n8n + Python Microservices

### Python Microservice Template

```python
# microservices/ai_service.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List
import openai
import os
import json

app = FastAPI(title="Flow Studio AI Service")

class AIRequest(BaseModel):
    prompt: str
    system_prompt: Optional[str] = "You are a helpful assistant."
    model: str = "gpt-4o-mini"
    temperature: float = 0.7
    max_tokens: int = 1000

class AIResponse(BaseModel):
    text: str
    model: str
    usage: dict

class WorkflowRequest(BaseModel):
    workflow_id: str
    trigger: str
    data: dict
    metadata: Optional[dict] = {}

class WorkflowResponse(BaseModel):
    status: str
    execution_id: str
    result: Optional[dict] = None

@app.post("/ai/complete", response_model=AIResponse)
async def ai_complete(request: AIRequest):
    """Generic AI completion endpoint for n8n."""
    try:
        client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        
        response = client.chat.completions.create(
            model=request.model,
            messages=[
                {"role": "system", "content": request.system_prompt},
                {"role": "user", "content": request.prompt}
            ],
            temperature=request.temperature,
            max_tokens=request.max_tokens,
        )
        
        return AIResponse(
            text=response.choices[0].message.content,
            model=response.model,
            usage={
                "prompt_tokens": response.usage.prompt_tokens,
                "completion_tokens": response.usage.completion_tokens,
                "total_tokens": response.usage.total_tokens
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/ai/classify", response_model=dict)
async def ai_classify(text: str, categories: List[str]):
    """Classify text into categories."""
    prompt = f"""
    Classify this text into one of these categories: {', '.join(categories)}
    
    Text: {text}
    
    Return only the category name.
    """
    
    result = await ai_complete(AIRequest(prompt=prompt, temperature=0))
    return {"category": result.text.strip(), "confidence": 0.85}

@app.post("/ai/extract", response_model=dict)
async def ai_extract(text: str, fields: List[str]):
    """Extract structured data from text."""
    prompt = f"""
    Extract these fields from the text: {', '.join(fields)}
    
    Text: {text}
    
    Return as JSON with only these fields.
    """
    
    result = await ai_complete(AIRequest(prompt=prompt, temperature=0.1))
    try:
        return json.loads(result.text)
    except:
        return {"extracted": result.text}

@app.post("/workflow/trigger", response_model=WorkflowResponse)
async def trigger_workflow(request: WorkflowRequest):
    """Trigger an n8n workflow."""
    import requests
    
    n8n_url = os.getenv("N8N_URL", "http://n8n:5678")
    
    try:
        resp = requests.post(
            f"{n8n_url}/webhook/{request.workflow_id}",
            json=request.data,
            headers={"Content-Type": "application/json"}
        )
        
        return WorkflowResponse(
            status="triggered",
            execution_id=str(resp.elapsed.total_seconds()),
            result=resp.json() if resp.ok else None
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

### Docker Compose Integration

```yaml
# docker-compose.yml — Full Flow Studio
version: "3.8"

services:
  # n8n
  n8n:
    image: n8nio/n8n:latest
    ports:
      - "5678:5678"
    volumes:
      - n8n_data:/home/node/.n8n
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=${N8N_PASSWORD}
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    depends_on:
      - redis

  # Python microservices
  ai-service:
    build: ./microservices
    ports:
      - "8001:8000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - N8N_URL=http://n8n:5678
      - REDIS_URL=redis://redis:6379
    depends_on:
      - redis

  # Workflow service
  workflow-service:
    build: ./workflow-service
    ports:
      - "8002:8000"
    environment:
      - N8N_URL=http://n8n:5678
      - DATABASE_URL=postgresql://user:pass@postgres:5432/flowstudio
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis

  # Redis
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  # PostgreSQL
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: flowstudio
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  n8n_data:
  postgres_data:
```

---

## Day 4 — Workflow Patterns

### Pattern 1: Approval Workflows

```yaml
Flow: New Order → Manager Approval → Processing

Trigger: ApexERP webhook (new order)
↓
Code: Check order value
  if > ₹50,000 → Needs approval
  if < ₹50,000 → Auto-approve
↓
AI Node: Generate order summary
↓
IF Needs Approval:
  → Send Slack message to manager
  → Wait for response (button: Approve/Reject)
  → If Approve → Process order
  → If Reject → Notify customer
  
IF Auto-approve:
  → Process order directly
↓
End: Log to database + notify customer
```

### Pattern 2: Data Processing Pipelines

```yaml
Flow: Raw Data → Clean → Transform → Load

Trigger: Cron (daily 2 AM)
↓
HTTP Request: Fetch sales data from ApexERP API
↓
Code Node: Validate + clean data
  Remove duplicates
  Fix missing values
  Standardize formats
↓
AI Node: 
  Prompt: "Check this data for anomalies: {{ $json.data }}"
  Output: { anomalies: [...], clean_data: true/false }
↓
If anomalies found:
  → Log to issues table
  → Notify data team
  
If clean:
  → Transform to warehouse format
  → Load to analytics DB
  → Send "Data updated" notification
```

### Pattern 3: AI Document Processing

```yaml
Flow: Email Attachment → Extract → Store → Notify

Trigger: Email with invoice attachment
↓
HTTP Request: Download attachment
↓
AI Node:
  Prompt: "Extract from this invoice:
          - Invoice number
          - Date
          - Vendor name
          - Amount
          - Items
          Return as JSON"
↓
Code Node: Validate extracted data
↓
HTTP Request: Create record in accounting system
↓
If success:
  → Log to spreadsheet
  → Send confirmation email
  
If failure:
  → Send alert to accounts team
  → Save for manual processing
```

---

## Day 5 — Monitoring

### Execution Logs

```python
# workflow-service/monitoring.py
from fastapi import FastAPI, Query
from datetime import datetime, timedelta
from typing import Optional
import psycopg2
import json

app = FastAPI(title="Flow Studio Monitoring")

@app.get("/api/executions")
async def get_executions(
    workflow_id: Optional[str] = None,
    status: Optional[str] = None,
    limit: int = 50,
    offset: int = 0
):
    """Get execution logs with filters."""
    conn = psycopg2.connect(os.getenv("DATABASE_URL"))
    cur = conn.cursor()
    
    query = "SELECT * FROM executions WHERE 1=1"
    params = []
    
    if workflow_id:
        query += " AND workflow_id = %s"
        params.append(workflow_id)
    if status:
        query += " AND status = %s"
        params.append(status)
    
    query += " ORDER BY created_at DESC LIMIT %s OFFSET %s"
    params.extend([limit, offset])
    
    cur.execute(query, params)
    rows = cur.fetchall()
    
    return {"executions": [dict(row) for row in rows]}

@app.get("/api/stats")
async def get_stats(hours: int = 24):
    """Get execution statistics."""
    conn = psycopg2.connect(os.getenv("DATABASE_URL"))
    cur = conn.cursor()
    
    since = datetime.now() - timedelta(hours=hours)
    
    stats = {}
    
    # Total executions
    cur.execute(
        "SELECT COUNT(*) FROM executions WHERE created_at > %s",
        (since,)
    )
    stats["total"] = cur.fetchone()[0]
    
    # Success rate
    cur.execute(
        "SELECT status, COUNT(*) FROM executions WHERE created_at > %s GROUP BY status",
        (since,)
    )
    stats["by_status"] = dict(cur.fetchall())
    
    # Average execution time
    cur.execute(
        "SELECT AVG(EXTRACT(EPOCH FROM (finished_at - started_at))) FROM executions WHERE created_at > %s AND finished_at IS NOT NULL",
        (since,)
    )
    avg_time = cur.fetchone()[0]
    stats["avg_execution_seconds"] = round(avg_time, 2) if avg_time else 0
    
    return stats

@app.get("/api/alerts")
async def get_alerts(severity: Optional[str] = None):
    """Get active alerts."""
    conn = psycopg2.connect(os.getenv("DATABASE_URL"))
    cur = conn.cursor()
    
    query = """
    SELECT w.name, e.error_message, e.created_at, e.workflow_id
    FROM executions e
    JOIN workflows w ON e.workflow_id = w.id
    WHERE e.status = 'error' AND e.created_at > NOW() - INTERVAL '24 hours'
    """
    
    if severity:
        query += f" AND w.severity = '{severity}'"
    
    cur.execute(query)
    rows = cur.fetchall()
    
    return {
        "alerts": [
            {
                "workflow": row[0],
                "error": row[1],
                "time": row[2].isoformat(),
                "workflow_id": row[3]
            }
            for row in rows
        ]
    }
```

### n8n Alert Configuration

```javascript
// n8n Error Workflow — Send Alert

/* Trigger: Error workflow (connected to main workflows) */

// Code Node — Format Alert
const error = $input.first().json;
const workflowName = error.workflow?.name || 'Unknown';
const errorMessage = error.error?.message || 'Unknown error';

const alert = {
  title: `⚠️ Workflow Failed: ${workflowName}`,
  message: errorMessage,
  timestamp: new Date().toISOString(),
  workflow_id: error.workflow?.id,
  execution_id: error.execution?.id
};

// Log to database
await $http.post('http://workflow-service:8002/api/alerts', alert);

return alert;

/* Then: Send to Slack + Email */
```

---

## Day 6 — Security

### API Keys & Environment Variables

```yaml
# .env — NEVER commit this to git
# n8n
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=strong_password_123

# AI Provider Keys
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
HUGGINGFACE_API_KEY=hf_...

# Database
DATABASE_URL=postgresql://user:strong_pass@postgres:5432/flowstudio

# Redis
REDIS_URL=redis://:strong_redis_pass@redis:6379

# JWT Secret
JWT_SECRET=random_64_char_secret_here

# Service Tokens
N8N_API_KEY=n8n_api_key_here
```

### Access Control in n8n

```javascript
// Code Node — Check API Authorization
const authHeader = $input.first().json.headers?.authorization || '';
const apiKey = authHeader.replace('Bearer ', '');

// Verify API key
const validKeys = [
  $env.APEXERP_API_KEY,
  $env.FLOW_STUDIO_API_KEY,
  $env.INTERNAL_API_KEY
];

if (!validKeys.includes(apiKey)) {
  return {
    status: 'error',
    code: 401,
    message: 'Unauthorized — invalid API key'
  };
}

return {
  status: 'authorized',
  user: 'verified'
};
```

### Secrets Management

```yaml
# Best practices

# 1. Use environment variables (not hardcoded)
✅ process.env.OPENAI_API_KEY
❌ "sk-123456789..."

# 2. n8n credential system
✅ Use n8n's built-in credential store
❌ Don't put keys in workflow JSON

# 3. Encrypted secrets
✅ Use Docker secrets for production
✅ HashiCorp Vault for enterprise

# 4. Access control
✅ n8n basic auth
✅ API gateway in front
✅ Rate limiting per user

# 5. Audit logging
✅ Log all API access
✅ Track who triggered workflows
✅ Monitor unusual patterns
```

---

## Day 7 — End-to-End Pipeline Project

### Complete Workflow: "AI Sales Pipeline"

```yaml
Workflow: AI-Powered Sales Pipeline
Purpose: Incoming leads → AI qualification → CRM → Notify sales team

Trigger: Webhook (from website contact form)
↓
Step 1: Validate Input
  Code Node:
  - Check required fields (name, email, phone, company)
  - Sanitize inputs
  - Return error if invalid
  
Step 2: AI Lead Scoring
  OpenAI Node:
  System Prompt:
  """
  You are a lead scoring AI for ApexERP.
  Score this lead 1-10 based on:
  - Company size (10+ employees = +2)
  - Industry relevance (ERP compatible = +2)
  - Budget mentioned (yes = +3)
  - Timeline (urgent = +2)
  - Decision maker (yes = +1)
  """
  User Prompt: "Lead: {{ $json.company }}, {{ $json.industry }}, 
                Budget: {{ $json.budget }}, Timeline: {{ $json.timeline }}"
  
Step 3: Route based on score
  IF score ≥ 7 → Hot Lead
    → Create in CRM (high priority)
    → Send Slack to sales team
    → Send personalized email with demo link
    
  IF score 4-6 → Warm Lead
    → Create in CRM (normal priority)
    → Add to email nurturing sequence
    
  IF score < 4 → Cold Lead
    → Add to newsletter list
    → No immediate action

Step 4: Log Everything
  → Database: Insert lead + score
  → Spreadsheet: Update daily tracker
  → Analytics: Increment counter
```

---

## Summary

```
Week 2 khatam:

✅ Flow Studio Architecture — n8n + FastAPI + Redis + Laravel
✅ Python Microservices — AI service, workflow service
✅ Docker Compose — Full stack deployment
✅ Workflow Patterns — Approval, data processing, document AI
✅ Monitoring — Execution logs, stats, alerts
✅ Security — API keys, env vars, access control
✅ End-to-End Pipeline — Complete AI sales workflow

Ab tu AI-powered automation systems bana sakta hai!

Full Stack AI Automation Engineer!
```
