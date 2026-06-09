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
      - N8N_METRICS=true
      - N8N_METRICS_INCLUDE_DEFAULT_METRICS=true
      - N8N_PAYLOAD_SIZE_MAX=16
      - N8N_EXECUTIONS_DATA_PRUNE=true
      - N8N_EXECUTIONS_DATA_MAX_AGE=168
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

# Check logs
docker-compose logs -f n8n

# Stop
docker-compose down
```

### n8n API Setup

```python
# Python mein n8n API se workflow trigger karna
import requests
import json
import time

class N8nAPI:
    """
    n8n API wrapper for workflow management.
    
    PHP Mental Map: Laravel HTTP Client + Queue integration
    """
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
            "connections": {},
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
    
    def get_workflows(self) -> list:
        """List all workflows."""
        resp = requests.get(
            f"{self.base_url}/rest/workflows",
            headers=self.headers
        )
        return resp.json().get("data", [])
    
    def get_executions(self, workflow_id: str, limit: int = 10) -> list:
        """Get recent executions for a workflow."""
        resp = requests.get(
            f"{self.base_url}/rest/executions",
            headers=self.headers,
            params={"workflowId": workflow_id, "limit": limit}
        )
        return resp.json().get("data", [])
    
    def activate_workflow(self, workflow_id: str) -> dict:
        """Activate a workflow."""
        resp = requests.post(
            f"{self.base_url}/rest/workflows/{workflow_id}/activate",
            headers=self.headers
        )
        return resp.json()
    
    def deactivate_workflow(self, workflow_id: str) -> dict:
        """Deactivate a workflow."""
        resp = requests.post(
            f"{self.base_url}/rest/workflows/{workflow_id}/deactivate",
            headers=self.headers
        )
        return resp.json()
    
    def get_workflow_stats(self, workflow_id: str) -> dict:
        """Get execution stats for a workflow."""
        executions = self.get_executions(workflow_id, limit=100)
        
        total = len(executions)
        successful = sum(1 for e in executions if e.get("status") == "success")
        failed = sum(1 for e in executions if e.get("status") == "error")
        
        return {
            "workflow_id": workflow_id,
            "total_executions": total,
            "successful": successful,
            "failed": failed,
            "success_rate": (successful / total * 100) if total > 0 else 0
        }

# Usage
n8n = N8nAPI()
print(n8n.get_workflow_stats("workflow_id_here"))
```

### Production Hardening

```yaml
# docker-compose.prod.yml — Production setup
version: "3.8"

services:
  n8n:
    image: n8nio/n8n:latest
    container_name: n8n-prod
    restart: always
    ports:
      - "127.0.0.1:5678:5678"  # Localhost only, reverse proxy se serve karo
    volumes:
      - n8n_data:/home/node/.n8n
      - ./local-files:/files
    environment:
      - N8N_ENCRYPTION_KEY=${N8N_ENCRYPTION_KEY}  # 32-char random
      - N8N_USER_MANAGEMENT_DISABLED=false
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_DATABASE=n8n
      - DB_POSTGRESDB_USER=n8n
      - DB_POSTGRESDB_PASSWORD=${DB_PASSWORD}
      - EXECUTIONS_DATA_PRUNE=true
      - EXECUTIONS_DATA_MAX_AGE=168  # 7 days
      - N8N_METRICS=true
      - N8N_METRICS_INCLUDE_DEFAULT_METRICS=true
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.n8n.rule=Host(`n8n.apexerp.com`)"
    depends_on:
      - postgres
    healthcheck:
      test: ["CMD", "wget", "--spider", "http://localhost:5678/healthz"]
      interval: 30s
      timeout: 10s
      retries: 3

  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: n8n
      POSTGRES_USER: n8n
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: always

volumes:
  n8n_data:
  postgres_data:
```

### n8n Environment Variables Reference

| Variable | Purpose | Example |
|---|---|---|
| `N8N_ENCRYPTION_KEY` | Encrypt credentials | 32-char random string |
| `N8N_METRICS` | Prometheus metrics | true |
| `EXECUTIONS_DATA_PRUNE` | Auto-delete old executions | true |
| `EXECUTIONS_DATA_MAX_AGE` | Keep executions for N hours | 168 |
| `N8N_PAYLOAD_SIZE_MAX` | Max webhook payload (MB) | 16 |
| `WEBHOOK_URL` | Public webhook URL | https://n8n.apexerp.com/ |
| `N8N_BASIC_AUTH_ACTIVE` | Enable auth | true |

---

## Day 2 — AI Nodes in n8n

### OpenAI Node Deep-Dive

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

### AI Node Types in n8n

```
1. OpenAI Node
   └─ Chat Completion, Image Gen, Embeddings, Audio

2. Anthropic Node
   └─ Claude models, longer context, safety

3. LangChain Node
   └─ ReAct Agent, Vector Store, Tools, Memory

4. Hugging Face Node
   └─ Inference API, hosted models

5. Custom AI Node
   └─ HTTP Request to custom AI API

Kaunsa kab use karein?

OpenAI: General purpose, cheaper
Anthropic: Long context (100K+), complex reasoning
LangChain: Multi-tool agents within n8n
Custom: Self-hosted models (Llama, Mistral)
```

### LangChain Agent Node

```
LangChain Agent Node in n8n:

Agent Type: ReAct Agent
LLM: OpenAI (gpt-4o)
Tools:
  ├── Calculator
  ├── HTTP Request (API calls)
  └── Search (web search)

Memory: Buffer Memory (recent messages)

Example Use Case:
User: "Last month ka revenue kya tha? Isse humara target kitna % achieve hua?"
1. Agent → HTTP Request to API for revenue data
2. Agent → Calculator to compute percentage
3. Agent → Responds with answer

Ke fayda: Ek agent multiple tools use kar sakta hai
```

### AI Node with Code — Pre/Post Processing

```javascript
// JavaScript Code Node — Preprocessing for AI
const input = $input.first().json;

// Add context from previous steps
const context = {
  query: input.question,
  user_name: input.user_name || 'Guest',
  previous_messages: input.history || [],
  timestamp: new Date().toISOString()
};

// Build enhanced prompt
const prompt = `
You are ApexERP assistant. 
User question: ${context.query}
User name: ${context.user_name}
Previous context: ${context.previous_messages.slice(-3).join('\n') || 'None'}

Respond in Hinglish.
Keep response under 200 words.
`;

// Token estimation (rough)
const estimatedTokens = prompt.split(' ').length * 1.3;

return {
  prompt: prompt,
  estimated_tokens: Math.ceil(estimatedTokens),
  metadata: {
    user: context.user_name,
    timestamp: context.timestamp,
    source: 'ai_preprocessing'
  }
};
```

### Prompt Template System

```javascript
// Code Node — Prompt Template Engine
const templates = {
  summary: `
    Summarize the following in 2-3 sentences in Hinglish:
    Text: {{TEXT}}
  `,
  classify: `
    Classify this query into one category:
    Categories: BILLING, TECHNICAL, ACCOUNT, SALES, GENERAL
    Query: {{TEXT}}
    Category:
  `,
  extract: `
    Extract the following from this text:
    - amount (number)
    - date (date)
    - vendor (string)
    - invoice_number (string)
    
    Text: {{TEXT}}
    
    Return as JSON.
  `
};

const input = $input.first().json;
const templateName = input.template || 'summary';
const text = input.text || '';

// Apply template
let prompt = templates[templateName] || templates.summary;
prompt = prompt.replace('{{TEXT}}', text);

return {
  prompt: prompt,
  template_used: templateName,
  timestamp: new Date().toISOString()
};
```

### OpenAI Whisper for Audio Processing

```
Workflow: Voice Note Processor

1. Webhook → receives audio file URL
2. HTTP Request → download audio
3. OpenAI (Whisper) → transcribe audio
4. Code Node → extract action items
5. Create Task → in project management

Whisper Config:
  Resource: Transcription
  File: {{ $json.audio_url }}
  Language: hi (Hindi) or auto-detect
  Response Format: verbose_json (includes timestamps)
```

### AI Response Post-Processing

```javascript
// Code Node — Post-process AI response
const response = $input.first().json;

let aiText = response.response || response.text || response.content;

// Clean up
aiText = aiText
  .replace(/^Assistant:\s*/i, '')  // Remove prefix
  .replace(/\n{3,}/g, '\n\n')      // Max 2 newlines
  .trim();

// Extract structured data if present
let structured = null;
try {
  // Check if response contains JSON
  const jsonMatch = aiText.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    structured = JSON.parse(jsonMatch[0]);
  }
} catch (e) {
  // Not JSON, that's fine
}

return {
  cleaned_text: aiText,
  has_structured_data: structured !== null,
  structured_data: structured,
  original_length: response.response?.length || 0,
  cleaned_length: aiText.length,
  timestamp: new Date().toISOString()
};
```

### Common AI Integration Patterns

```
Pattern 1: AI → API Call
  AI classifies query → API call based on category

Pattern 2: API Call → AI
  Fetch data → AI summarizes → Send result

Pattern 3: AI → Decision → Branch
  AI decides A or B → Workflow branches accordingly

Pattern 4: Multi-AI Chain
  AI 1 classifies → AI 2 generates response → AI 3 checks quality

Pattern 5: AI with RAG
  Query → Search vector DB → Context + Query → AI → Response
```

---

## Day 3 — Error Handling

### Error Workflow Pattern

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

### Building an Error Workflow

```
Step-by-step error workflow creation:

1. Main workflow mein "Error Workflow" settings kholo
2. "Error Workflow" dropdown mein existing workflow select karo
3. Error workflow mein "Error Trigger" node add karo
4. Extract error details:
   └─ Code Node:
   ```javascript
   const error = $input.first().json;
   return {
     workflow_id: error.workflowId,
     execution_id: error.executionId,
     error_message: error.error.message,
     error_timestamp: new Date().toISOString(),
     node_name: error.node?.name || 'unknown',
     input_data: error.inputData || {}
   };
   ```
5. Send alert (Slack, Email, or both)
```

### Retry Logic

```javascript
// Code Node — Retry Logic with exponential backoff
const maxRetries = 3;
const baseDelay = 5;  // seconds

// Get retry count from workflow data
$execution.customData = $execution.customData || {};
const retryCount = $execution.customData.retryCount || 0;

// Current workflow info
const currentWorkflowId = $workflow.id;

// Check if we should retry
if ($json.error && retryCount < maxRetries) {
  // Exponential backoff: 5s, 10s, 20s
  const delay = baseDelay * Math.pow(2, retryCount);
  
  console.log(`[RETRY] Attempt ${retryCount + 1}/${maxRetries}, waiting ${delay}s`);
  await new Promise(r => setTimeout(r, delay * 1000));
  
  // Retry the workflow
  await $workflow.execute(currentWorkflowId, {
    retryCount: retryCount + 1,
    originalInput: $json.originalInput
  });
}

return { 
  retried: true, 
  attempt: retryCount + 1,
  maxRetries: maxRetries
};
```

### Safe API Call Template

```javascript
// Code Node — Safe API Call with full error handling
try {
  const response = await $http.send({
    method: 'POST',
    url: 'https://api.example.com/data',
    headers: {
      'Authorization': `Bearer ${$env.API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: { query: $json.query },
    timeout: 30000  // 30 second timeout
  });
  
  return {
    success: true,
    data: response.data,
    statusCode: response.statusCode,
    responseTime: response.responseTime
  };
  
} catch (error) {
  // Categorize error
  let category = 'unknown';
  let recoverable = false;
  
  if (error.statusCode === 429) {
    category = 'rate_limit';
    recoverable = true;  // Can retry
  } else if (error.statusCode >= 500) {
    category = 'server_error';
    recoverable = true;  // Server might recover
  } else if (error.code === 'ECONNREFUSED') {
    category = 'connection_refused';
    recoverable = false; // Won't recover quickly
  } else {
    category = 'other';
    recoverable = false;
  }
  
  console.error('API call failed:', error.message);
  
  return {
    success: false,
    error: error.message,
    errorCategory: category,
    recoverable: recoverable,
    statusCode: error.statusCode || 500,
    timestamp: new Date().toISOString()
  };
}
```

### Dead Letter Queue Pattern

```
Dead Letter Queue (DLQ) Pattern:

Main Workflow:
  1. Process item
  2. If success → continue
  3. If fail after retries → DLQ

DLQ Workflow:
  1. Cron (every hour)
  2. Read failed items from storage
  3. Try processing again
  4. If still failing → notify admin

Implementation:
  ┌─────────────────────────────────────┐
  │ Failed items store in Google Sheet   │
  │                                      │
  │ Columns:                             │
  │ - timestamp                          │
  │ - workflow_id                        │
  │ - input_data                         │
  │ - error_message                      │
  │ - retry_count                        │
  │ - status (pending/failed/processed)  │
  └─────────────────────────────────────┘
```

### Error Monitoring Dashboard

```javascript
// Code Node — Collect error metrics for monitoring
const errors = $input.all();

const metrics = {
  total_errors: errors.length,
  by_workflow: {},
  by_node: {},
  by_type: {},
  recent: errors.slice(-10).map(e => ({
    time: new Date(e.json.timestamp).toISOString(),
    workflow: e.json.workflow_id,
    error: e.json.error_message?.substring(0, 100)
  }))
};

// Aggregate by workflow
for (const e of errors) {
  const wf = e.json.workflow_id || 'unknown';
  const node = e.json.node_name || 'unknown';
  const type = e.json.errorCategory || 'unknown';
  
  metrics.by_workflow[wf] = (metrics.by_workflow[wf] || 0) + 1;
  metrics.by_node[node] = (metrics.by_node[node] || 0) + 1;
  metrics.by_type[type] = (metrics.by_type[type] || 0) + 1;
}

return metrics;
```

### Error Scenarios and Responses

| Scenario | Error Type | Recovery Strategy |
|---|---|---|
| LLM API down | 503 | Retry 3x with backoff, then fallback |
| Rate limited | 429 | Wait 60s, then retry |
| Invalid input | 400 | Log + notify user |
| Network timeout | Timeout | Retry on different endpoint |
| Auth expired | 401 | Refresh token, retry once |
| Data not found | 404 | Log + continue with defaults |

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
Every 15 min:     "*/15 * * * *"
Every 2 hours:    "0 */2 * * *"
Every Sunday:     "0 0 * * 0"
Business hours:   "0 9-17 * * 1-5"
```

### Daily Email Summarizer

```yaml
Workflow: Daily Sales Summary

Trigger: Cron (0 9 * * 1-5)  # Weekdays 9 AM

Nodes:
  1. Cron Trigger
  2. HTTP Request → "GET /api/sales/yesterday"
  3. Code Node — Format for AI:
     ```javascript
     const data = $json.data;
     return {
       summary_input: JSON.stringify({
         total_revenue: data.total,
         orders_count: data.count,
         top_product: data.top_product,
         region: data.region_breakdown
       })
     };
     ```
  4. AI Node:
     Prompt: "Summarize this sales data in 2 sentences in Hinglish: {{ $json.summary_input }}"
  5. Code Node — Create email body:
     ```javascript
     return {
       subject: `Daily Sales Summary - {{ $today }}`,
       body: `
       📊 Daily Sales Report
       
       ${$json.response}
       
       ---
       Generated automatically by ApexERP
       ${new Date().toISOString()}
       `
     };
     ```
  6. Email Node:
     To: raushan@apexpillar.com
     Subject: "{{ $json.subject }}"
     Body: "{{ $json.body }}"
```

### Multi-Timezone Scheduling

```javascript
// Code Node — Handle different timezones in scheduler
const config = {
  offices: [
    { name: "Patna HQ", timezone: "Asia/Kolkata", cron: "0 9 * * 1-5" },
    { name: "NY Office", timezone: "America/New_York", cron: "0 9 * * 1-5" },
    { name: "UK Office", timezone: "Europe/London", cron: "0 9 * * 1-5" }
  ]
};

// Current execution time in UTC
const now = new Date();
const utcHour = now.getUTCHours();

// Determine which office reports to generate
const activeOffices = config.offices.filter(office => {
  const officeTime = new Date(now.toLocaleString('en-US', { timeZone: office.timezone }));
  return officeTime.getHours() === 9;  // 9 AM in that timezone
});

return {
  active_offices: activeOffices.map(o => o.name),
  generate_reports: activeOffices.length > 0,
  current_utc_hour: utcHour
};
```

### Conditional Scheduling

```
Workflow: Conditional Report Generator

Trigger: Cron (every hour)

Nodes:
1. Cron (0 * * * *)
2. HTTP Request — Check if data is ready
   └─ GET /api/reports/status
3. IF Node:
   └─ Condition: {{ $json.ready }} === true
   └─ True: Generate and send report
   └─ False: Do nothing (end workflow)
4. Code Node — Log:
   ```javascript
   return {
     status: $json.ready ? 'generated' : 'skipped',
     reason: $json.ready ? 'Data ready' : 'Data not yet available',
     timestamp: new Date().toISOString()
   };
   ```
```

### Holiday-Aware Scheduling

```javascript
// Code Node — Skip holidays
const holidays = [
  "2024-01-26",  // Republic Day
  "2024-08-15",  // Independence Day
  "2024-10-02",  // Gandhi Jayanti
  // Add more holidays
];

const today = new Date().toISOString().split('T')[0];

// Check if today is holiday or weekend
const isHoliday = holidays.includes(today);
const isWeekend = [0, 6].includes(new Date().getDay());  // Sunday=0, Saturday=6

if (isHoliday || isWeekend) {
  console.log(`Skipping: ${isHoliday ? 'Holiday' : 'Weekend'}`);
  return { should_run: false, reason: isHoliday ? 'holiday' : 'weekend' };
}

return { should_run: true, reason: 'business_day' };
```

### Cron Workflow Templates

```
Workflow: Weekly Report (Monday 9 AM)
Trigger: 0 9 * * 1
Action: Query DB → AI Summary → Email to team

Workflow: Monthly Invoice Generation (1st, 9 AM)
Trigger: 0 9 1 * *
Action: Query subscriptions → Generate invoices → Email

Workflow: Hourly Health Check
Trigger: 0 * * * *
Action: Ping all services → If any down → Alert Slack

Workflow: Daily Backup (Night)
Trigger: 0 2 * * *
Action: Export DB → Compress → Upload S3 → Clean old

Workflow: Bi-hourly Sync
Trigger: 0 */2 * * *
Action: Pull from ERP → Transform → Push to CRM
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
  channel: input.channel_name || input.channel_id,
  message: input.text || input.body || input.message,
  timestamp: input.timestamp || new Date().toISOString(),
  source: input.source || 'webhook',
  raw: JSON.stringify(input).substring(0, 200)  // For debugging
};

// Validate
if (!response.message) {
  return { error: 'No message provided', valid: false };
}

// Check for commands
const msg = response.message.toLowerCase();
const commands = ['help', 'report', 'status', 'sales'];
const matchedCommand = commands.find(cmd => msg.includes(cmd));

return {
  ...response,
  valid: true,
  command: matchedCommand || 'unknown'
};
```

### Webhook Security

```javascript
// Code Node — Validate webhook signatures
const crypto = require('crypto');

const input = $input.first().json;

// Verify signature (example: Slack signing)
const signature = $headers['x-slack-signature'];
const timestamp = $headers['x-slack-request-timestamp'];
const secret = $env.SLACK_SIGNING_SECRET;

// Check timestamp freshness (avoid replay attacks)
const fiveMinutesAgo = Math.floor(Date.now() / 1000) - 300;
if (parseInt(timestamp) < fiveMinutesAgo) {
  return { error: 'Timestamp too old', valid: false };
}

// Compute expected signature
const sigBasestring = `v0:${timestamp}:${JSON.stringify(input)}`;
const expectedSignature = 'v0=' + crypto
  .createHmac('sha256', secret)
  .update(sigBasestring)
  .digest('hex');

if (crypto.timingSafeEqual(
  Buffer.from(signature),
  Buffer.from(expectedSignature)
)) {
  return { valid: true, data: input };
} else {
  return { error: 'Invalid signature', valid: false };
}
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

### Advanced Data Mapping

```javascript
// Code Node — Multi-format data mapper
const input = $input.first().json;
const sourceFormat = $json.source_format || 'erp';
const targetFormat = $json.target_format || 'crm';

const mappers = {
  erp_to_crm: {
    'order_no': 'opportunity_id',
    'customer_name': 'contact_name',
    'total': 'amount',
    'date': 'close_date',
    'status': 'stage'
  },
  crm_to_erp: {
    'opportunity_id': 'order_no',
    'contact_name': 'customer_name',
    'amount': 'total',
    'close_date': 'date',
    'stage': 'status'
  }
};

const mapper = mappers[`${sourceFormat}_to_${targetFormat}`];
if (!mapper) {
  return { error: `No mapper for ${sourceFormat} → ${targetFormat}` };
}

const output = {};
for (const [srcKey, tgtKey] of Object.entries(mapper)) {
  if (input[srcKey] !== undefined) {
    output[tgtKey] = input[srcKey];
  }
}

// Add unmapped fields
output._unmapped_fields = Object.keys(input).filter(k => !mapper[k]);

return {
  ...output,
  _transform: `${sourceFormat} → ${targetFormat}`,
  _timestamp: new Date().toISOString()
};
```

### Webhook as API Gateway

```
Architecture: n8n as API Gateway

External System → n8n Webhook → Transform → Internal API

Example Workflow:
1. Webhook (POST /api/orders)
2. Code Node — Validate input
3. HTTP Request — Forward to internal ERP
4. Code Node — Transform response
5. Respond to webhook caller

Benefits:
- Rate limiting built-in
- Authentication at gateway level
- Request/response transformation
- Error handling centralized
- Logging and monitoring
```

### Common Webhook Patterns

```
Pattern 1: Stripe → n8n → ERP
  Stripe sends payment events → n8n processes → Updates ERP

Pattern 2: Shopify → n8n → Accounting
  New Shopify order → n8n creates invoice → Updates accounting

Pattern 3: Typeform → n8n → CRM
  Form submission → n8n enriches data → Creates contact in CRM

Pattern 4: GitHub → n8n → Slack
  GitHub webhook events → n8n filters → Posts to Slack

Pattern 5: Calendar → n8n → SMS
  Google Calendar event → n8n extracts details → Sends reminder SMS
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
   ```javascript
   return {
     from: $json.from,
     subject: $json.subject,
     body: $json.text,
     received_at: $json.receivedDate
   };
   ```
   
3. AI Node (OpenAI):
   └─ System Prompt: "Summarize this support email in 2-3 sentences. 
                      Identify urgency: high/medium/low"
   └─ User Message: "{{ $json.body }}"
   
4. Code Node — Format for Slack:
   ```javascript
   const urgency = $json.ai_response.toLowerCase().includes('high') ? '🔴' 
                 : $json.ai_response.toLowerCase().includes('medium') ? '🟡' 
                 : '🟢';
                 
   return {
     channel: 'support-team',
     blocks: [
       { type: 'header', text: `${urgency} ${$json.subject}` },
       { type: 'section', text: $json.ai_response },
       { type: 'context', elements: [`From: ${$json.from}`, `Time: ${$json.received_at}`] }
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
     user: $json.user,
     thread_ts: $json.ts
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
   
   return { 
     response: response,
     thread_ts: $json.thread_ts,
     channel: $json.channel 
   };
   ```
   
5. Slack Node:
   └─ Reply in thread: {{ $json.response }}
```

### Workflow 3: Multi-Channel Notification

```
Name: Multi-Channel Notification
Trigger: Webhook (from ApexERP events)
Actions: Slack + Email + SMS based on severity

Nodes:
1. Webhook Trigger
   └─ Receives: { event, severity, message, data }
   
2. Code Node — Route by severity:
   ```javascript
   const severity = $json.severity?.toLowerCase() || 'info';
   const event = $json.event;
   const message = $json.message;
   
   const routing = {
     critical: { slack: true, email: true, sms: true, phone: true },
     warning: { slack: true, email: true, sms: false, phone: false },
     info: { slack: true, email: false, sms: false, phone: false }
   };
   
   const channels = routing[severity] || routing.info;
   
   return {
     ...channels,
     event: event,
     message: message,
     severity: severity,
     formatted_message: `[${severity.toUpperCase()}] ${event}: ${message}`
   };
   ```
   
3. Switch Node:
   └─ If slack → Slack Node: Post to #alerts
   └─ If email → Email Node: Send to admin
   └─ If sms → Twilio Node: Send SMS
   └─ If phone → VoIP Node: Automated call
```

### Workflow 4: Document AI Processor

```
Name: Document AI Processor
Trigger: Watch folder for new PDFs
AI: Extract data from documents
Output: Create record in database

Nodes:
1. Watch Directory Trigger
   └─ Folder: /files/invoices/
   └─ Pattern: *.pdf
   
2. Read Binary File
   
3. OpenAI Vision Node:
   └─ Resource: Chat Completion (Vision)
   └─ Image: {{ $json.data }}
   └─ Prompt: "Extract: vendor, date, amount, invoice_no, gst"
   
4. Code Node — Validate extraction:
   ```javascript
   const extracted = $json;
   const required = ['vendor', 'date', 'amount', 'invoice_no'];
   const missing = required.filter(f => !extracted[f]);
   
   return {
     valid: missing.length === 0,
     data: extracted,
     missing_fields: missing,
     filename: $json._source
   };
   ```
   
5. IF Node:
   └─ Valid → HTTP POST to create record
   └─ Invalid → Move to manual review folder + notify
```

### Workflow 5: RAG Query System

```
Name: RAG Query System
Trigger: Webhook (user question)
Process: Embed → Search → Context → Answer

Nodes:
1. Webhook Trigger
   └─ Question: {{ $json.question }}
   
2. OpenAI Embeddings Node:
   └─ Input: {{ $json.question }}
   └─ Model: text-embedding-3-small
   
3. Qdrant / Pinecone Node (Vector DB):
   └─ Search for similar documents
   └─ Similarity: > 0.75
   └─ Limit: 3 results
   
4. Code Node — Build context:
   ```javascript
   const results = $json.results || [];
   const context = results.map(r => `[${r.metadata.source}]: ${r.content}`).join('\n\n');
   
   return {
     question: $json.question,
     context: context,
     sources: results.map(r => r.metadata.source)
   };
   ```
   
5. OpenAI Chat Node:
   └─ System: "Answer using only the provided context. If unsure, say so."
   └─ Context: {{ $json.context }}
   └─ Question: {{ $json.question }}
   
6. Respond to webhook
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

# Template 6: Customer Feedback Analysis
Trigger: Survey submission
AI: Sentiment + theme extraction + action items
Action: Log to analytics + notify product team

# Template 7: AI Chatbot with Memory
Trigger: Webhook (chat message)
AI: Conversational with history
Action: Reply + log conversation

# Template 8: Automated Data Enrichment
Trigger: New contact in CRM
AI: Research company, find social profiles, enrich
Action: Update CRM record
```

### n8n Performance Optimization

```javascript
// Code Node — Batch processing for performance
const records = $input.all();

// Process in batches of 10
const BATCH_SIZE = 10;
const batches = [];

for (let i = 0; i < records.length; i += BATCH_SIZE) {
  batches.push(records.slice(i, i + BATCH_SIZE));
}

// Process first batch
const firstBatch = batches[0];
const results = firstBatch.map(record => {
  const data = record.json;
  // ... process ...
  return processed;
});

return results;
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
  - Version control your workflows (export JSON)
  - Use sub-workflows for reusable logic
  - Monitor execution metrics

❌ Don't:
  - Hardcode API keys
  - Skip error handling
  - Infinite loops without max iterations
  - Process sensitive data without encryption
  - Ignore workflow execution order
  - Use same credential for dev and prod
  - Forget to deactivate test workflows
```

### Scaling n8n for Production

```
Scaling Strategies:

1. Multiple n8n instances behind load balancer
   └─ Share same PostgreSQL and Redis
   └─ Horizontal scaling

2. Queue mode for heavy workloads
   └─ Use Redis bull queue
   └─ Execute workflows in background

3. Worker separation
   └─ Main n8n: UI + webhooks
   └─ Worker n8n: Execute heavy workflows

4. Database optimization
   └─ PostgreSQL instead of SQLite
   └─ Regular pruning of execution data

5. Caching
   └─ Redis for frequently accessed data
   └─ Reduces API calls to external services
```

### Workflow Export/Import for Version Control

```bash
# Export workflows as JSON (version control friendly)
curl -X GET http://localhost:5678/rest/workflows \
  -H "X-N8N-API-KEY: your-api-key" > workflows.json

# Store in git
git add workflows.json
git commit -m "chore: export n8n workflows"

# Import to different environment
curl -X POST http://prod-n8n:5678/rest/workflows \
  -H "X-N8N-API-KEY: prod-key" \
  -H "Content-Type: application/json" \
  -d @workflows.json
```

### Monitoring Workflows

```javascript
// Code Node — Execution monitoring
const execution = $execution;
const workflow = $workflow;

return {
  workflow_id: workflow.id,
  workflow_name: workflow.name,
  execution_id: execution.id,
  mode: execution.mode,  // 'webhook', 'trigger', 'manual'
  started_at: new Date(execution.startedAt).toISOString(),
  duration_seconds: (Date.now() - new Date(execution.startedAt).getTime()) / 1000,
  node_count: execution.nodeExecutionStack?.length || 0,
  // Custom metrics
  custom_metrics: {
    items_processed: $input.all().length,
    // Add any business metrics
  }
};
```

### Laravel + n8n Integration

```
PHP Laravel → n8n Integration Pattern:

Laravel Job → Webhook → n8n Workflow → Action → Response

Example: Order Processing
1. Laravel: NewOrder Job creates order
2. Laravel: HTTP POST to n8n webhook
   └─ POST /webhook/new-order
   └─ Body: { order_id, customer, items, total }
3. n8n: Process order
   ├─ Check inventory
   ├─ Process payment
   ├─ Generate invoice
   └─ Send confirmation email
4. n8n: POST back to Laravel callback
   └─ POST /api/orders/callback
   └─ Body: { status, invoice_url, tracking }
5. Laravel: Update order status

Benefits:
- Laravel handles business logic
- n8n handles integrations (email, SMS, Slack)
- Clear separation of concerns
- Visual workflow management for non-devs
```

### PHP Developer's n8n Mental Map

```
Laravel Concept     → n8n Equivalent
──────────────────────────────────────
Artisan Command     → Workflow
Cron Job            → Cron Trigger
Queue Job           → Execution
Event Listener      → Webhook Trigger
Mail                → Email Node
Notification        → Multi-channel Nodes
HTTP Client         → HTTP Request Node
Job Batching        → Batch processing
Pipeline            → Multi-step workflow
Service Provider    → Credential store
Middleware          → IF/Switch Nodes
Log                 → Code Node + logging
Cache               → Redis node
```

### Production Readiness Checklist

```
□ All credentials stored as environment variables
□ Error workflow attached to each main workflow
□ Execution data pruning enabled (max 7 days)
□ Rate limiting configured
□ Webhook authentication implemented
□ HTTPS via reverse proxy
□ Regular exports to version control
□ Monitoring and alerting set up
□ Backup strategy for n8n data
□ Load testing completed
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
✅ Document AI Processing — PDF invoice extraction
✅ RAG Integration — Vector search + AI answers
✅ Production Hardening — Scaling, monitoring, security

Next week: Purvanchal Flow Studio, custom nodes, monitoring
```
