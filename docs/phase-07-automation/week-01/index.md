# Week 1 — n8n Advanced

**Goal:** n8n with AI integration
**Output:** 3 production workflows with AI nodes

---

## Day 1 — n8n Setup

### Docker Setup

```yaml
# docker-compose.yml
version: "3.8"

services:
  n8n:
    image: n8nio/n8n:latest
    container_name: n8n
    restart: unless-stopped
    ports:
      - "5678:5678"
    volumes:
      - n8n_data:/home/node/.n8n
      - ./local-files:/files
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=password123
      - N8N_HOST=localhost
      - N8N_PORT=5678
      - N8N_PROTOCOL=http
      - WEBHOOK_URL=http://localhost:5678/
      # AI API Keys
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}

volumes:
  n8n_data:
```

```bash
# Start n8n
docker-compose up -d

# Access at http://localhost:5678
# Login: admin / password123
```

### n8n API Setup

```python
# Python mein n8n API se workflow trigger karna
import requests
import json

class N8nAPI:
    def __init__(self, base_url="http://localhost:5678", api_key=None):
        self.base_url = base_url
        self.headers = {
            "X-N8N-API-KEY": api_key or "your-api-key",
            "Content-Type": "application/json"
        }
    
    def create_webhook_workflow(self, name: str, webhook_path: str, nodes: list) -> dict:
        """Create a webhook-triggered workflow."""
        workflow = {
            "name": name,
            "nodes": [
                {
                    "parameters": {"path": webhook_path},
                    "name": "Webhook",
                    "type": "n8n-nodes-base.webhook",
                    "position": [250, 300],
                },
                *nodes
            ],
            "connections": {},  # Set appropriately
            "settings": {"executionOrder": "v1"},
        }
        
        resp = requests.post(
            f"{self.base_url}/rest/workflows",
            headers=self.headers,
            json=workflow
        )
        return resp.json()
    
    def trigger_workflow(self, workflow_id: str, data: dict) -> dict:
        """Trigger workflow via webhook (external trigger)."""
        resp = requests.post(
            f"{self.base_url}/webhook/{workflow_id}",
            json=data
        )
        return resp.json()
    
    def get_executions(self, workflow_id: str, limit: int = 10) -> list:
        """Get recent executions for a workflow."""
        resp = requests.get(
            f"{self.base_url}/rest/executions",
            headers=self.headers,
            params={"workflowId": workflow_id, "limit": limit}
        )
        return resp.json().get("data", [])

# Usage
n8n = N8nAPI()
executions = n8n.get_executions("workflow_id_here")
```

---

## Day 2 — AI Nodes in n8n

### OpenAI Node

```
n8n workflow nodes:

1. Webhook Trigger → Receives user query
2. OpenAI Node → Processes with GPT-4
3. Respond → Returns AI response

OpenAI Node Configuration:
┌─────────────────────────────────────┐
│ OpenAI Node Settings                │
│                                     │
│ Resource: Chat Completion           │
│ Model: gpt-4o                       │
│ Messages:                           │
│   System: "You are ApexERP helper"  │
│   User:   "{{ $json.query }}"       │
│ Temperature: 0.7                    │
│ Max Tokens: 1000                    │
└─────────────────────────────────────┘
```

### LangChain Node

```
LangChain Agent Node in n8n:

Agent Type: ReAct Agent
LLM: OpenAI (gpt-4o)
Tools:
  ├── Calculator
  ├── HTTP Request (API calls)
  └── Search (web search)

Memory: Buffer Memory (recent messages)
```

### AI Node with Code

```javascript
// JavaScript Code Node — Preprocessing for AI
const input = $input.first().json;

// Add context
const prompt = `
You are ApexERP assistant. 
User question: ${input.question}
User name: ${input.user_name || 'Guest'}
Previous context: ${input.context || 'None'}

Respond in Hinglish.
`;

return {
  prompt: prompt,
  metadata: {
    user: input.user_name,
    timestamp: new Date().toISOString()
  }
};
```

---

## Day 3 — Error Handling

### Error Workflow

```yaml
# Error Workflow Pattern

Main Workflow:
  1. Webhook Trigger
  2. OpenAI Call
  3. HTTP Request (API)
  4. Send Email
  
  On Error → Error Workflow

Error Workflow:
  1. Error Trigger (receives error details)
  2. Extract error info
  3. Send Slack alert
  4. Log to Google Sheet
  5. Retry logic (optional)
```

### Retry Logic

```javascript
// Code Node — Retry Logic
const maxRetries = 3;
let retryCount = 0;

// Get from workflow data or default
const currentWorkflowId = $workflow.id;

// Check if we should retry
if ($json.error && retryCount < maxRetries) {
  // Wait 5 seconds
  await new Promise(r => setTimeout(r, 5000));
  
  // Retry the workflow
  await $workflow.execute(currentWorkflowId, {
    retryCount: retryCount + 1,
    originalInput: $json.originalInput
  });
}

return { retried: true, attempt: retryCount + 1 };
```

### Error Handling Template

```javascript
// Code Node — Safe API Call
try {
  const response = await $http.send({
    method: 'POST',
    url: 'https://api.example.com/data',
    headers: {
      'Authorization': `Bearer ${$env.API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: { query: $json.query }
  });
  
  return {
    success: true,
    data: response.data,
    statusCode: response.statusCode
  };
  
} catch (error) {
  // Log error details
  console.error('API call failed:', error.message);
  
  return {
    success: false,
    error: error.message,
    statusCode: error.statusCode || 500,
    timestamp: new Date().toISOString()
  };
}
```

---

## Day 4 — Scheduled Workflows (Cron)

### Cron Trigger Examples

```yaml
# Cron expressions for scheduling

Every hour:       "0 * * * *"
Every day 9 AM:   "0 9 * * *"
Every Monday:     "0 0 * * 1"
Weekdays 8 AM:    "0 8 * * 1-5"
Every 30 min:     "*/30 * * * *"
First of month:   "0 0 1 * *"
```

### Daily Email Summarizer

```yaml
Workflow: Daily Sales Summary

Trigger: Cron (0 9 * * 1-5)  # Weekdays 9 AM

Nodes:
  1. Cron Trigger
  2. HTTP Request → "GET /api/sales/yesterday"
  3. AI Node:
     Prompt: "Summarize this sales data in 2 sentences: {{ $json.data }}"
  4. Email Node:
     To: raushan@apexpillar.com
     Subject: "Daily Sales Summary - {{ $today }}"
     Body: "{{ $json.response }}"
```

---

## Day 5 — Webhooks & Data Transformation

### Webhook Receiver

```javascript
// Webhook → Receive data from any system
// Example: Receive Slack slash command

// Code Node — Parse webhook data
const input = $input.first().json;

// Extract relevant fields
const response = {
  user: input.user_name || input.user,
  channel: input.channel_name,
  message: input.text || input.body,
  timestamp: input.timestamp || new Date().toISOString(),
  source: input.source || 'webhook'
};

// Validate
if (!response.message) {
  return { error: 'No message provided' };
}

return response;
```

### Data Transformation

```javascript
// Code Node — Transform data between systems
const records = $input.all();

const transformed = records.map(record => {
  const data = record.json;
  
  // ERP format → CRM format
  return {
    id: data.order_id || data.id,
    customer: {
      name: `${data.first_name} ${data.last_name}`,
      email: data.email,
      phone: data.phone
    },
    product: {
      name: data.product_name,
      sku: data.sku,
      quantity: data.qty,
      price: data.unit_price
    },
    order: {
      total: data.total_amount,
      date: data.order_date,
      status: data.status,
      payment_method: data.payment_type
    },
    shipping: {
      address: data.shipping_address,
      city: data.shipping_city,
      pincode: data.pincode
    }
  };
});

return transformed;
```

---

## Day 6 — Practical Workflows

### Workflow 1: Auto-Email Summarizer

```
Name: Auto Email Summarizer
Trigger: IMAP Email (new email received)
AI: Summarize email body
Output: Post to Slack channel

Nodes:
1. Email Trigger (IMAP)
   └─ Check: Unread emails from support@apexerp.com
   
2. Code Node — Extract:
   ├─ from: {{ $json.from }}
   ├─ subject: {{ $json.subject }}
   └─ body: {{ $json.text }}
   
3. AI Node (OpenAI):
   └─ System Prompt: "Summarize this support email in 2-3 sentences. 
                       Identify urgency: high/medium/low"
   
4. Code Node — Format:
   ```javascript
   return {
     channel: 'support-team',
     blocks: [
       { type: 'header', text: `📧 ${$json.subject}` },
       { type: 'section', text: $json.ai_response },
       { type: 'context', elements: [`From: ${$json.from}`] }
     ]
   };
   ```
   
5. Slack Node:
   └─ Post message to #support-team
   
Error: Send to #errors channel
```

### Workflow 2: Slack Bot with AI

```
Name: Slack AI Assistant
Trigger: Slack command (/ask)
AI: Process query with RAG context
Output: Response in Slack thread

Nodes:
1. Slack Trigger
   └─ Event: Message received
   └─ Filter: bot doesn't respond to itself
   
2. Code Node — Parse:
   ```javascript
   const msg = $json.text;
   // Check if it's for the bot
   if (!msg.includes('@apexerp-bot')) return null;
   
   return {
     query: msg.replace('@apexerp-bot', '').trim(),
     channel: $json.channel,
     user: $json.user
   };
   ```
   
3. HTTP Request — RAG API:
   └─ POST http://apexerp-rag:8000/ask
   └─ Body: { "question": "{{ $json.query }}" }
   
4. Code Node — Format Response:
   ```javascript
   const answer = $json.answer;
   const sources = $json.sources || [];
   
   let response = `${answer}\n\n`;
   if (sources.length > 0) {
     response += `📚 *Sources:*\n`;
     sources.forEach(s => {
       response += `• ${s.title}\n`;
     });
   }
   
   return { response };
   ```
   
5. Slack Node:
   └─ Reply in thread: {{ $json.response }}
```

### Workflow 3: Notification System

```
Name: Multi-Channel Notification
Trigger: Webhook (from ApexERP events)
Actions: Slack + Email + SMS based on severity

Nodes:
1. Webhook Trigger
   └─ Receives: { event, severity, message, data }
   
2. Code Node — Route by severity:
   ```javascript
   const severity = $json.severity;
   const event = $json.event;
   
   if (severity === 'critical') {
     // All channels
     return { slack: true, email: true, sms: true };
   } else if (severity === 'warning') {
     // Slack + Email
     return { slack: true, email: true, sms: false };
   } else {
     // Slack only
     return { slack: true, email: false, sms: false };
   }
   ```
   
3. Slack (if true): Post to #alerts
4. Email (if true): Send to raushan@apexpillar.com
5. SMS (if true): Twilio SMS to registered phone
```

---

## Day 7 — Review + Advanced Patterns

### Workflow Template Library

```yaml
# Template 1: AI-Powered Support Ticket System
Trigger: Contact form submission
AI: Classify (billing/technical/sales) + set priority
Action: Create ticket in system + notify team

# Template 2: Daily Automated Reports
Trigger: Cron (9 AM weekdays)
Action: Query DB → AI Summary → Email PDF → Log

# Template 3: Lead Qualification
Trigger: New CRM contact
AI: Analyze company size, industry, potential
Action: Assign sales rep + send welcome email

# Template 4: Social Media Monitor
Trigger: RSS/Search for company mentions
AI: Sentiment analysis (positive/negative/neutral)
Action: Alert team if negative

# Template 5: Invoice Processing
Trigger: Email with attachment
AI: Extract invoice details (amount, date, vendor)
Action: Create in accounting + approval request
```

### n8n Best Practices

```yaml
✅ Do:
  - Use environment variables for secrets
  - Name nodes descriptively
  - Add error workflows
  - Test with sample data
  - Log important steps
  - Use code nodes for complex logic
  - Set execution timeouts

❌ Don't:
  - Hardcode API keys
  - Skip error handling
  - Infinite loops without max iterations
  - Process sensitive data without encryption
  - Ignore workflow execution order
```

---

## Summary

```
Week 1 khatam:

✅ n8n Docker Setup — Running on localhost:5678
✅ AI Nodes — OpenAI, LangChain in workflows
✅ Error Handling — Error workflows, retry logic
✅ Cron Scheduling — Automated daily/weekly workflows
✅ Webhooks — Receive external triggers
✅ Data Transformation — Format data between systems
✅ 3 Production Workflows — Email summarizer, Slack bot, notifications

Next week: Purvanchal Flow Studio, custom nodes, monitoring
```
