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

### Purvanchal Market — Ground Reality

Bihar aur Eastern UP ke SMEs ke saath kaam karte waqt yeh realities hain:

```
Market Realities for Raushan:
─────────────────────────────
👥 Target Users:
  ├── Small manufacturers (Patna, Muzaffarpur)
  ├── Wholesale distributors (Gorakhpur, Varanasi)
  ├── Retail chains (local, 5-20 stores)
  ├── Service providers (logistics, repair)
  └── Govt. contractors (tenders, PWD)

🔧 Technical Constraints:
  ├── Internet connectivity: Unstable, 2-10 Mbps
  ├── Power backup: Inverter/ups, not generator
  ├── Device: Mostly Android phones + shared desktop
  ├── Tech literacy: Low-medium
  └── Budget: ₹1,000-5,000/month for automation

💡 What They Actually Need:
  ├── "Bill bhejna hai WhatsApp pe auto"
  ├── "Stock khatam hone pe alert chahiye"
  ├── "Har subah sales ka message chahiye"
  ├── "Customer se baat auto ho jaaye"
  └── "Tender ki last date pe notification"
```

**Why Flow Studio fits:** Self-hosted = no recurring SaaS cost. AI nodes = Hinglish mein baat kar sakta hai. Offline queue = Internet jaye tab bi kaam.

### Platform Personas

```
Who Uses Flow Studio?
─────────────────────

1. Business Owner (Raushan ka client)
   → Uses: Template workflows, dashboard
   → Skill: Zero coding
   → Need: "Bas kaam ho jaaye"

2. Operations Manager
   → Uses: Custom workflows, monitoring
   → Skill: Can configure n8n nodes
   → Need: "Daily reports, alerts, tracking"

3. Laravel Developer (Raushan)
   → Uses: Custom nodes, API integration
   → Skill: PHP + some Python
   → Need: "Clients ke liye automation deploy karna"

4. Power User (Internal team)
   → Uses: Complex pipelines, AI integration
   → Skill: Technical + business domain
   → Need: "End-to-end process automation"
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

### Mermaid: Pipeline Sequence

```mermaid
sequenceDiagram
    participant U as User/App
    participant N as n8n Core
    participant C as Code Node
    participant A as AI Node (LLM)
    participant M as Microservice
    participant D as Database
    
    U->>N: Webhook / API / Cron trigger
    N->>C: Preprocess input data
    C->>C: Validate, clean, transform
    C->>A: Send cleaned context
    A->>A: LLM reasoning + generation
    A->>M: Structured output
    M->>M: Execute action (API/DB/Email)
    M->>D: Log execution
    M->>U: Return response
    N->>U: Confirm completion
```

**PHP→Python Mental Map:** Laravel Job queue = n8n queue node. Laravel Event = n8n Webhook trigger. Laravel Notification = n8n action node. Laravel Artisan command = n8n Cron trigger. Same mental model, visual version.

### Multi-Model AI Routing Strategy

Different AI queries need different models. Waste nahi karna chahiye expensive model pe simple tasks.

```yaml
AI Model Routing Strategy:
───────────────────────────

Query Classification → Route to correct model:

┌──────────────────┐
│  Incoming Query   │
└────────┬─────────┘
         │
    ┌────▼────┐
    │Classify │  (Cheap: gpt-4o-mini, 1 call)
    │Query    │
    └────┬────┘
         │
    ┌────┴────────────────────────────────────┐
    │                                        │
    ▼                                        ▼
┌────────────┐                    ┌──────────────────┐
│ Simple     │                    │ Complex           │
│ Query      │                    │ Query             │
│            │                    │                   │
│ GPT-4o-mini│                    │ Claude 3.5 Sonnet │
│ Cost: $0.15│                    │ Cost: $3.00       │
│ 1M tokens  │                    │ 1M tokens         │
│            │                    │                   │
│ Use cases: │                    │ Use cases:        │
│ Translate  │                    │ Code generation   │
│ Classify   │                    │ Complex analysis  │
│ Extract    │                    │ Strategy          │
│ Summarize  │                    │ Creative writing  │
└────────────┘                    └──────────────────┘
         │                                        │
         └────────────┬───────────────────────────┘
                      │
                 ┌────▼────┐
                 │ Result   │
                 │ Cache?   │
                 └────┬────┘
                      │
              ┌───────┴────────┐
              │                │
              ▼                ▼
        ┌──────────┐    ┌──────────┐
        │ Cache hit│    │ Cache    │
        │ Return   │    │ Store +  │
        │ cached   │    │ Return   │
        └──────────┘    └──────────┘
```

```javascript
// n8n Code Node — AI Model Router

const query = $json.query;
const queryType = $json.query_type || 'general';
const complexity = $json.complexity || 'auto';

// Complexity detection
function detectComplexity(query) {
  const complexKeywords = ['code', 'analyze', 'strategy', 'explain', 'compare',
                           'architect', 'design pattern', 'refactor'];
  const wordCount = query.split(' ').length;
  
  // Short < 20 words, no complex keywords = simple
  if (wordCount < 20 && !complexKeywords.some(k => query.toLowerCase().includes(k))) {
    return 'simple';
  }
  return 'complex';
}

const actualComplexity = complexity === 'auto' 
  ? detectComplexity(query) 
  : complexity;

const route = {
  query: query,
  type: queryType,
  complexity: actualComplexity,
  recommended_model: actualComplexity === 'simple' 
    ? 'gpt-4o-mini' 
    : 'claude-3-5-sonnet',
  estimated_cost: actualComplexity === 'simple' ? 0.002 : 0.03,
  cache_key: `${queryType}:${query.substring(0, 100)}`
};

return route;
```

### Context Caching Strategy

Har baar same context bhejna = waste. Cache karo frequent contexts.

```python
# microservices/cache_service.py
import redis
import json
import hashlib

class ContextCache:
    def __init__(self):
        self.redis = redis.Redis.from_url(
            os.getenv('REDIS_URL', 'redis://redis:6379')
        )
        self.default_ttl = 3600  # 1 hour
    
    def _hash(self, text: str) -> str:
        return hashlib.md5(text.encode()).hexdigest()
    
    def get_or_compute(self, key: str, compute_fn, ttl: int = None):
        """Cache-aside pattern: check cache first, compute if miss."""
        cache_key = f"ctx:{self._hash(key)}"
        
        # Try cache
        cached = self.redis.get(cache_key)
        if cached:
            return json.loads(cached)
        
        # Compute and store
        result = compute_fn()
        self.redis.setex(
            cache_key, 
            ttl or self.default_ttl, 
            json.dumps(result)
        )
        return result
    
    def invalidate_pattern(self, pattern: str):
        """Invalidate all cache keys matching pattern."""
        for key in self.redis.scan_iter(f"ctx:{pattern}:*"):
            self.redis.delete(key)
```

**PHP→Python Mental Map:** `Illuminate\Cache\CacheManager` → Redis cache. `remember()` method = `get_or_compute()`. `flush()` = `invalidate_pattern()`. Laravel ka cache system same pattern follow karta hai.

---

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

### Translation Service (Hinglish ↔ English)

Purvanchal Flow Studio ka USP — Hinglish mein kaam karo.

```python
# microservices/translation_service.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import openai
import os

app = FastAPI(title="Flow Studio Translation Service")

class TranslationRequest(BaseModel):
    text: str
    source_lang: str = "auto"
    target_lang: str = "en"
    preserve_format: bool = True

class TranslationResponse(BaseModel):
    translated_text: str
    source_lang: str
    target_lang: str
    confidence: float

class HinglishRequest(BaseModel):
    text: str
    tone: str = "friendly"  # friendly, professional, formal

SUPPORTED_LANGUAGES = {
    "hi": "Hindi",
    "en": "English",
    "hi+en": "Hinglish",
    "bho": "Bhojpuri",
    "mai": "Maithili"
}

@app.post("/translate", response_model=TranslationResponse)
async def translate(request: TranslationRequest):
    """Translate between Hindi, English, and Hinglish."""
    system_prompt = f"""
    You are a translator for Indian languages.
    
    Rules:
    - Source: {request.source_lang}
    - Target: {request.target_lang}
    - Preserve formatting: {request.preserve_format}
    
    For Hinglish (hi+en):
    Mix Hindi and English naturally like people in Bihar/UP speak.
    Example: "Yeh order kal deliver ho jayega, don't worry."
    
    Return ONLY the translated text, no explanations.
    """
    
    client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": request.text}
        ],
        temperature=0.3
    )
    
    return TranslationResponse(
        translated_text=response.choices[0].message.content,
        source_lang=request.source_lang,
        target_lang=request.target_lang,
        confidence=0.92
    )

@app.post("/hinglish", response_model=TranslationResponse)
async def to_hinglish(request: HinglishRequest):
    """Convert any text to natural Hinglish."""
    tone_prompts = {
        "friendly": "Conversational, like a helpful friend. Use 'yaar', 'na', 'toh' naturally.",
        "professional": "Respectful Hinglish. Use 'aap', 'ji'. Appropriate for business.",
        "formal": "Mostly Hindi with minimal English terms. Pure and respectful."
    }
    
    system_prompt = f"""
    Convert this text to natural Hinglish.
    Style: {tone_prompts.get(request.tone, tone_prompts['friendly'])}
    
    Rules:
    - Mix Hindi and English naturally
    - Keep technical terms in English
    - Use common Hinglish words: toh, hi, na, yaar, waala, kar do
    - Don't overdo it — natural is key
    """
    
    client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": request.text}
        ],
        temperature=0.4
    )
    
    return TranslationResponse(
        translated_text=response.choices[0].message.content,
        source_lang="en",
        target_lang="hi+en",
        confidence=0.90
    )
```

**Real scenario:** ApexERP client ka order confirmation Hinglish mein. "Aapka order #1234 confirm ho gaya hai. Kal 3 PM tak deliver ho jayega. Koi problem ho toh 1800-XXX-XXX pe call karein."

### Document Processing Service

Invoices, receipts, forms — sab PDF/image se extract karo.

```python
# microservices/document_service.py
from fastapi import FastAPI, UploadFile, File, Form
from pydantic import BaseModel
from typing import Optional, List
import openai
import os
import json
import base64
from io import BytesIO

app = FastAPI(title="Flow Studio Document Service")

class ExtractionResult(BaseModel):
    fields: dict
    confidence: float
    raw_text: Optional[str] = None

INVOICE_TEMPLATE = {
    "invoice_number": "string",
    "date": "YYYY-MM-DD",
    "vendor_name": "string",
    "vendor_gst": "string",
    "customer_name": "string",
    "items": [{"name": "string", "qty": 0, "rate": 0.0, "amount": 0.0}],
    "subtotal": 0.0,
    "gst": 0.0,
    "total": 0.0,
    "due_date": "YYYY-MM-DD"
}

@app.post("/extract/invoice", response_model=ExtractionResult)
async def extract_invoice(file: UploadFile = File(...)):
    """Extract invoice details from uploaded PDF/image."""
    contents = await file.read()
    
    # For real use, you'd use OCR (Tesseract) + LLM
    # Here we send base64 image to GPT-4o for extraction
    image_b64 = base64.b64encode(contents).decode()
    
    client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    response = client.chat.completions.create(
        model="gpt-4o",  # Vision model for images
        messages=[
            {
                "role": "system",
                "content": f"""
                Extract invoice fields as JSON.
                Schema: {json.dumps(INVOICE_TEMPLATE, indent=2)}
                
                If a field is not visible, use null.
                Return ONLY valid JSON.
                """
            },
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": "Extract fields from this invoice:"},
                    {"type": "image_url", "image_url": {
                        "url": f"data:image/{file.filename.split('.')[-1]};base64,{image_b64}"
                    }}
                ]
            }
        ],
        response_format={"type": "json_object"},
        temperature=0.1
    )
    
    result = json.loads(response.choices[0].message.content)
    
    return ExtractionResult(
        fields=result,
        confidence=0.85,
        raw_text=str(response.choices[0].message.content)
    )

@app.post("/classify/document", response_model=dict)
async def classify_document(file: UploadFile = File(...)):
    """Classify document type (invoice, receipt, PO, etc.)."""
    contents = await file.read()
    image_b64 = base64.b64encode(contents).decode()
    
    client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": """
                Classify this document into one category:
                - invoice
                - receipt
                - purchase_order
                - delivery_challan
                - quotation
                - contract
                - other
                
                Return JSON: {"category": "...", "confidence": 0.0-1.0}
                """
            },
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": "Classify this document:"},
                    {"type": "image_url", "image_url": {
                        "url": f"data:image/jpeg;base64,{image_b64}"
                    }}
                ]
            }
        ],
        response_format={"type": "json_object"},
        temperature=0.1
    )
    
    return json.loads(response.choices[0].message.content)
```

### Service Health & Readiness Probes

Production mein har microservice ko health check chahiye.

```python
# Add to any microservice — health endpoints
from fastapi import FastAPI, Response
import redis
import psycopg2
import os

# Health status
service_status = {
    "service": "ai-service",
    "version": "1.0.0",
    "status": "healthy",
    "dependencies": {}
}

@app.get("/health")
async def health_check():
    """Basic health check — is the service running?"""
    return Response(
        content=json.dumps({"status": "ok", "service": "ai-service"}),
        media_type="application/json",
        status_code=200
    )

@app.get("/health/ready")
async def readiness_check():
    """Readiness check — are dependencies available?"""
    deps = {}
    all_ready = True
    
    # Check Redis
    try:
        r = redis.Redis.from_url(os.getenv("REDIS_URL", "redis://redis:6379"))
        r.ping()
        deps["redis"] = "connected"
    except Exception as e:
        deps["redis"] = f"error: {str(e)}"
        all_ready = False
    
    # Check OpenAI API key
    if os.getenv("OPENAI_API_KEY"):
        deps["openai"] = "configured"
    else:
        deps["openai"] = "missing"
        all_ready = False
    
    status_code = 200 if all_ready else 503
    
    return Response(
        content=json.dumps({
            "status": "ready" if all_ready else "not_ready",
            "dependencies": deps
        }),
        media_type="application/json",
        status_code=status_code
    )

@app.get("/health/metrics")
async def metrics():
    """Prometheus-style metrics for monitoring."""
    return Response(
        content=f"""
# HELP ai_service_requests_total Total AI requests
# TYPE ai_service_requests_total counter
ai_service_requests_total 1234
# HELP ai_service_request_duration_seconds Request duration
# TYPE ai_service_request_duration_seconds histogram
ai_service_request_duration_seconds_bucket{{le="0.1"}} 100
ai_service_request_duration_seconds_bucket{{le="0.5"}} 500
ai_service_request_duration_seconds_bucket{{le="1.0"}} 900
ai_service_request_duration_seconds_bucket{{le="+Inf"}} 1234
ai_service_request_duration_seconds_sum 234.5
ai_service_request_duration_seconds_count 1234
        """,
        media_type="text/plain"
    )
```

### Rate Limiting Middleware

Ek user se ek limit — abuse se bachao.

```python
# microservices/middleware/rate_limit.py
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.base import BaseHTTPMiddleware
import redis
import time
import os

class RateLimitMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, redis_client=None):
        super().__init__(app)
        self.redis = redis_client or redis.Redis.from_url(
            os.getenv("REDIS_URL", "redis://redis:6379")
        )
        # Per-user limits
        self.limits = {
            "free": {"requests": 100, "window": 3600},     # 100/hr
            "basic": {"requests": 1000, "window": 3600},    # 1000/hr
            "pro": {"requests": 10000, "window": 3600},     # 10000/hr
            "enterprise": {"requests": 100000, "window": 3600}
        }
    
    async def dispatch(self, request: Request, call_next):
        # Skip health endpoints
        if request.url.path.startswith("/health"):
            return await call_next(request)
        
        # Get user tier from header or default to free
        api_key = request.headers.get("X-API-Key", "anonymous")
        user_tier = request.headers.get("X-User-Tier", "free")
        
        limit_config = self.limits.get(user_tier, self.limits["free"])
        
        # Redis rate counter
        key = f"rate_limit:{api_key}:{int(time.time() / limit_config['window'])}"
        current = self.redis.incr(key)
        
        if current == 1:
            self.redis.expire(key, limit_config["window"])
        
        if current > limit_config["requests"]:
            raise HTTPException(
                status_code=429,
                detail={
                    "error": "rate_limit_exceeded",
                    "limit": limit_config["requests"],
                    "window_seconds": limit_config["window"],
                    "tier": user_tier,
                    "message": f"Rate limit exceeded. {limit_config['requests']} requests per {limit_config['window']}s. Upgrade your plan for higher limits."
                }
            )
        
        response = await call_next(request)
        response.headers["X-RateLimit-Limit"] = str(limit_config["requests"])
        response.headers["X-RateLimit-Remaining"] = str(
            limit_config["requests"] - current
        )
        response.headers["X-RateLimit-Reset"] = str(
            int(time.time() / limit_config["window"]) * limit_config["window"]
        )
        
        return response
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

### Pattern 4: RAG Knowledge Retrieval Pipeline

AI ko apna data do — custom knowledge base se answer.

```yaml
Flow: User Query → Search KB → Generate Answer → Respond

Trigger: Webhook (user question)
↓
Code Node: Classify query intent
  - Support question → KB search
  - Sales question → Product catalog
  - General → Web search
↓
IF KB Search:
  → HTTP Request: Query vector database (Pinecone/Qdrant)
  → Input: User query embedding
  → Output: Top 3 similar documents + scores
  ↓
  AI Node (Context + Question):
  System Prompt: """
  You are ApexERP support AI. Use ONLY the provided context.
  If context doesn't have answer, say "I don't have that info."
  
  Context:
  {{ $json.context }}
  
  Question: {{ $json.question }}
  
  Answer in Hinglish, reference the source document numbers.
  """
  ↓
  IF confidence > 0.8:
    → Return answer to user
  ELSE:
    → Escalate to human agent
    → Create support ticket with context

IF Sales Question:
  → Search product catalog
  → AI generates personalized recommendation
  → Send to user + log to CRM

IF General:
  → Web search via AI
  → Summarize and return
```

```python
# microservices/rag_service.py — RAG Pipeline
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List
import openai
import os
import json

app = FastAPI(title="Flow Studio RAG Service")

class RAGQuery(BaseModel):
    question: str
    knowledge_base: str = "apexerp-support"
    top_k: int = 3
    min_score: float = 0.7

class RAGResponse(BaseModel):
    answer: str
    sources: List[dict]
    confidence: float
    needs_escalation: bool

# Simulated vector search — in production use Pinecone/Qdrant
def search_knowledge_base(query: str, kb: str, top_k: int) -> List[dict]:
    """Search vector DB for similar documents."""
    client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    
    # Get embedding
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=query
    )
    query_embedding = response.data[0].embedding
    
    # In production: query Pinecone/Qdrant with this embedding
    # Here we simulate with a lookup
    # TODO: Replace with actual vector DB call
    return [
        {
            "id": "doc-1",
            "title": "Order Cancellation Policy",
            "content": "Orders can be cancelled within 24 hours...",
            "score": 0.92
        },
        {
            "id": "doc-2", 
            "title": "Refund Process",
            "content": "Refunds are processed within 5-7 business days...",
            "score": 0.85
        }
    ]

@app.post("/rag/query", response_model=RAGResponse)
async def rag_query(request: RAGQuery):
    """Retrieve + Generate answer from knowledge base."""
    # Step 1: Retrieve
    documents = search_knowledge_base(
        request.question,
        request.knowledge_base,
        request.top_k
    )
    
    # Filter by minimum score
    documents = [d for d in documents if d['score'] >= request.min_score]
    
    if not documents:
        return RAGResponse(
            answer="Mujhe is sawaal ka jawab nahi pata. Main kisi support agent se connect kar deta hoon.",
            sources=[],
            confidence=0.0,
            needs_escalation=True
        )
    
    # Step 2: Generate
    context = "\n\n".join([
        f"Document {i+1} (Score: {d['score']}):\n{d['content']}"
        for i, d in enumerate(documents)
    ])
    
    client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": f"""
                You are ApexERP support AI. Answer using ONLY this context:
                
                {context}
                
                Rules:
                - Answer in Hinglish
                - Reference source document numbers
                - If context insufficient, say so clearly
                - Be concise, max 3 paragraphs
                """
            },
            {"role": "user", "content": request.question}
        ],
        temperature=0.3
    )
    
    answer = response.choices[0].message.content
    avg_confidence = sum(d['score'] for d in documents) / len(documents)
    
    return RAGResponse(
        answer=answer,
        sources=documents,
        confidence=avg_confidence,
        needs_escalation=avg_confidence < 0.7
    )
```

**PHP→Python Mental Map:** Laravel Scout (Algolia/Meilisearch) = Vector database. Full-text search = Semantic search. Eloquent scopes = Embedding filters. Laravel's `scopeSearch()` gets upgraded to AI-powered retrieval.

### Pattern 5: Multi-Approval Workflow with Escalation

Jab multiple logon ki approval chahiye, waqt pe escalate karo.

```yaml
Flow: Request → Level 1 → Level 2 → Level 3 → Execute

Trigger: Webhook (purchase request > ₹50,000)
↓
AI Node: Generate request summary
  System Prompt:
  "Summarize this purchase request for approval:
  - What: Item + quantity
  - Why: Business justification
  - Cost: Amount + budget code
  - Urgency: When needed by
  Make it concise, 3-4 bullet points."
↓
Step 1: Manager Approval (Level 1)
  → Send Slack message with buttons
  → Action: Approve / Reject / Request Changes
  → Wait for response (24 hr timeout)
  
  IF Timeout:
    → Escalate to Level 2 (skip Level 1)
    → Notify Level 1: "Escalated due to timeout"
  
  IF Reject:
    → End workflow
    → Notify requester with reason
  
  IF Request Changes:
    → Notify requester
    → Wait for updated request
    → Re-submit for approval
  
  IF Approve:
    ↓
Step 2: Director Approval (Level 2, if > ₹2,00,000)
  → Same pattern as Level 1
  → Shorter timeout: 12 hr
  → Escalate to VP if timeout

  IF Approve:
    ↓
Step 3: Finance Release (Level 3)
  → Auto-generate PO number
  → Create accounting entry
  → Notify vendor
  → Release payment (if advance)
↓
End: Log complete audit trail
```

```javascript
// n8n Code Node — Escalation Logic

const approvalData = $json;
const currentLevel = approvalData.current_level || 1;
const maxLevel = 3;
const requestAmount = approvalData.amount;
const timeElapsed = approvalData.time_elapsed_hours || 0;

// Determine approval levels needed
function getRequiredLevels(amount) {
  if (amount > 200000) return 3;  // > ₹2L: Level 1+2+3
  if (amount > 50000) return 2;   // > ₹50K: Level 1+2
  return 1;                        // < ₹50K: Level 1 only
}

const requiredLevels = getRequiredLevels(requestAmount);

// Escalation timeouts by level
const timeouts = {
  1: 24,  // Manager: 24 hr
  2: 12,  // Director: 12 hr
  3: 6    // Finance: 6 hr
};

// Whom to notify at each level
const approvers = {
  1: {
    role: 'Manager',
    channel: 'slack',
    contact: '#approvals-manager'
  },
  2: {
    role: 'Director',
    channel: 'email',
    contact: 'directors@apexerp.com'
  },
  3: {
    role: 'VP Finance',
    channel: 'email+slack',
    contact: 'vp-finance@apexerp.com'
  }
};

// Current decision logic
const escalated = timeElapsed > timeouts[currentLevel];
const nextLevel = escalated ? currentLevel + 1 : currentLevel;

return {
  request_id: approvalData.request_id,
  amount: requestAmount,
  current_level: currentLevel,
  required_levels: requiredLevels,
  escalated: escalated,
  time_elapsed: timeElapsed,
  timeout: timeouts[currentLevel],
  next_action: escalated ? 'ESCALATE' : 'WAIT',
  next_approver: nextLevel <= requiredLevels 
    ? approvers[nextLevel]
    : null,
  is_complete: nextLevel > requiredLevels,
  audit_trail: [
    ...(approvalData.audit_trail || []),
    {
      level: currentLevel,
      action: escalated ? 'ESCALATED' : 'PENDING',
      timestamp: new Date().toISOString(),
      escalated_from: escalated ? `Level ${currentLevel} (timeout ${timeElapsed}h)` : null
    }
  ]
};
```

### Pattern 6: Scheduled AI Reporting with Insights

Har subah boss ke phone pe — "Aaj ka business update."

```yaml
Flow: Cron → Fetch Data → AI Analyze → Generate Report → Deliver

Schedule: Cron "0 8 * * 1-5" (Monday-Friday 8 AM)
↓
Step 1: Fetch Yesterday's Business Data
  HTTP Request (Parallel):
  ├── GET /api/sales/yesterday → Sales data
  ├── GET /api/inventory/status → Stock levels
  ├── GET /api/customers/new → New registrations
  └── GET /api/support/tickets → Open tickets
↓
Step 2: AI Analysis
  OpenAI Node:
  System Prompt: """
  You are ApexERP's business analyst AI.
  
  Analyze this daily data and provide:
  1. 🎯 Key Metrics: Revenue, orders, new customers
  2. 📈 Trends: Compare with yesterday, last week
  3. ⚠️ Alerts: Low stock, high support, anomalies
  4. 💡 Recommendations: Actionable insights for today
  5. 📊 Summary: One-line business health status
  
  Format in Hinglish, conversational tone.
  Use emojis for visual priority.
  """
  
  Data Input:
  {
    "sales": "₹45,230 (12 orders, avg ₹3,769)",
    "inventory": "5 products below threshold",
    "new_customers": 3,
    "support_tickets": 8,
    "top_product": "Steel Pipe 2inch"
  }
↓
Step 3: Generate Deliverables
  ─────────────────────────────
  → WhatsApp to Owner: Short 3-line summary
  → Email to Manager: Full report with tables
  → Slack to Team: Highlights and callouts
  → Dashboard Update: Live stats refresh
  → Database Log: Archive for weekly trends
↓
Step 4: Conditional Alerts
  IF any_product_stock < 10:
    → Immediate alert: "🚨 URGENT: [Product] stock khatam!"
  IF sales_vs_yesterday < -20%:
    → Alert: "📉 Sales down 20% vs yesterday. Investigation needed."
  IF support_tickets > 20:
    → Alert: "🆘 Unusually high support volume. Check for issues."
```

```python
# microservices/reporting_service.py
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
from datetime import datetime, timedelta
from typing import Optional
import openai
import os

app = FastAPI(title="Flow Studio Reporting Service")

class DailyReport(BaseModel):
    business_date: str
    generated_at: str
    metrics: dict
    insights: list
    alerts: list
    recommendations: list

class ScheduledReport(BaseModel):
    workflow_id: str
    schedule: str  # cron expression
    recipients: list
    channels: list
    template_id: str

@app.post("/report/daily", response_model=DailyReport)
async def generate_daily_report():
    """Generate AI-powered daily business report."""
    # Fetch data from ApexERP (simulated)
    business_data = {
        "date": (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d"),
        "sales": {
            "total": 45230,
            "orders": 12,
            "avg_order_value": 3769,
            "top_products": ["Steel Pipe 2inch", "Cement 50kg", "TMT Bar 12mm"]
        },
        "inventory": {
            "total_products": 156,
            "below_threshold": 5,
            "out_of_stock": 2,
            "top_alerts": ["Steel Pipe low (8 units)", "Cement low (20 bags)"]
        },
        "customers": {
            "new": 3,
            "total_active": 89,
            "repeat_rate": 0.72
        },
        "support": {
            "new_tickets": 8,
            "open": 14,
            "resolved_yesterday": 6,
            "avg_response_time": "4.2 hours"
        },
        "comparison": {
            "sales_vs_yesterday": "+12%",
            "sales_vs_last_week": "+5%",
            "customers_vs_yesterday": "+2",
            "support_vs_yesterday": "-3"
        }
    }
    
    # AI Analysis
    client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": """
                Generate a daily business report in Hinglish.
                
                Structure:
                1. Executive Summary (2-3 lines)
                2. Key Numbers (sales, orders, customers)
                3. What's Good (positive trends)
                4. What Needs Attention (issues)
                5. Recommendations (3 actionable items)
                
                Be honest — don't sugarcoat problems.
                Use Hinglish naturally.
                """
            },
            {
                "role": "user",
                "content": f"Generate report for: {json.dumps(business_data, indent=2)}"
            }
        ],
        temperature=0.4
    )
    
    report_text = response.choices[0].message.content
    
    return DailyReport(
        business_date=business_data["date"],
        generated_at=datetime.now().isoformat(),
        metrics=business_data,
        insights=[report_text],
        alerts=[
            "Steel Pipe stock critical (8 units)",
            "Support response time increased to 4.2h"
        ],
        recommendations=[
            "Re-order Steel Pipe today",
            "Hire temporary support staff",
            "Follow up with 3 new customers"
        ]
    )
```

### Pattern 7: Error Recovery with Dead Letter Queue

Koi workflow fail ho jaye toh — automatically retry, escalate, ya DLQ mein daalo.

```yaml
Flow: Execute → Detect Failure → Retry → Escalate → DLQ

Trigger: Error event from any workflow
↓
Step 1: Classify Error
  Code Node:
  IF error type = NETWORK:
    → Retry strategy: 3 times, exponential backoff
  IF error type = VALIDATION:
    → Log error, notify developer
    → No retry (won't help)
  IF error type = API_LIMIT:
    → Wait 60s, retry once
    → If fails, schedule for off-peak
  IF error type = TIMEOUT:
    → Increase timeout, retry once
    → If fails, reduce scope and retry
  IF error type = AUTH:
    → Refresh token, retry once
    → If fails, alert admin
↓
Step 2: Retry with Exponential Backoff
  ┌────────────────────────────────────┐
  │ Retry #1 → Wait 5s                 │
  │ Retry #2 → Wait 25s                │
  │ Retry #3 → Wait 125s               │
  │ [All fail] → Move to DLQ           │
  └────────────────────────────────────┘
↓
Step 3: Dead Letter Queue Handler
  → Store failed execution in DLQ table
    { workflow_id, input_data, error, attempts, timestamp }
  → Send weekly digest of DLQ items
  → Admin can: Retry / Ignore / Fix input
↓
Step 4: Notification
  IF retry succeeded:
    → Log: "Recovered after N retries"
    → No alert needed
  
  IF moved to DLQ:
    → Slack: "⚠️ Workflow [name] failed after 3 retries"
    → Email: Full error report to developer
    → Dashboard: Update error counter
```

```javascript
// n8n Code Node — Error Handler with DLQ

const execution = $input.first().json;
const error = execution.error || {};
const workflowName = execution.workflow?.name || 'Unknown';
const attempts = execution.execution?.retry_count || 0;
const maxRetries = 3;

// Error classification
const errorType = classifyError(error);
const retryConfig = getRetryConfig(errorType);

function classifyError(err) {
  const msg = (err.message || '').toLowerCase();
  const code = err.code || '';
  
  if (msg.includes('econnrefused') || msg.includes('timeout') || msg.includes('dns')) 
    return 'NETWORK';
  if (msg.includes('429') || msg.includes('rate limit')) 
    return 'API_LIMIT';
  if (msg.includes('401') || msg.includes('unauthorized') || msg.includes('token')) 
    return 'AUTH';
  if (msg.includes('validation') || msg.includes('invalid data')) 
    return 'VALIDATION';
  if (msg.includes('timeout')) 
    return 'TIMEOUT';
  return 'UNKNOWN';
}

function getRetryConfig(type) {
  const configs = {
    'NETWORK':    { retries: 3, backoff: 'exponential', baseDelay: 5000, dlq: true },
    'API_LIMIT':  { retries: 2, backoff: 'linear', baseDelay: 60000, dlq: true },
    'AUTH':       { retries: 1, backoff: 'none', baseDelay: 1000, dlq: true },
    'TIMEOUT':    { retries: 1, backoff: 'none', baseDelay: 5000, dlq: true },
    'VALIDATION': { retries: 0, backoff: 'none', baseDelay: 0, dlq: true },
    'UNKNOWN':    { retries: 1, backoff: 'exponential', baseDelay: 10000, dlq: true }
  };
  return configs[type] || configs['UNKNOWN'];
}

// Calculate backoff delay
function getBackoffDelay(baseDelay, attempt, type) {
  if (type === 'exponential') return baseDelay * Math.pow(5, attempt - 1);
  if (type === 'linear') return baseDelay * attempt;
  return baseDelay;
}

const shouldRetry = attempts < retryConfig.retries;
const nextDelay = shouldRetry 
  ? getBackoffDelay(retryConfig.baseDelay, attempts + 1, retryConfig.backoff)
  : 0;

return {
  workflow: workflowName,
  error: {
    message: error.message,
    type: errorType,
    code: error.code
  },
  attempts: attempts,
  max_retries: retryConfig.retries,
  should_retry: shouldRetry,
  move_to_dlq: !shouldRetry && retryConfig.dlq,
  next_retry_delay_ms: nextDelay,
  backoff_type: retryConfig.backoff,
  dlq_entry: !shouldRetry ? {
    workflow: workflowName,
    error: error.message,
    error_type: errorType,
    input_data: execution.input,
    attempts: attempts,
    timestamp: new Date().toISOString(),
    status: 'pending_review'
  } : null
};
```

**PHP→Python Mental Map:** Laravel Queue failed jobs table = DLQ. `$this->release(30)` = exponential backoff. `$fail()` = DLQ entry. `horizon` dashboard = n8n execution monitoring.

### Pattern 8: Human-in-the-Loop Handoff

AI kuch nahi kar paaye toh — human ko de do.

```yaml
Flow: AI Attempt → Low Confidence → Human Handoff → Resume

Trigger: AI node returns confidence < 0.6
↓
Code Node: Prepare handoff package
  → Original input
  → AI's attempted response
  → AI's reasoning (why low confidence)
  → Suggested action for human
↓
Step 1: Find Available Agent
  → Check agent status table
  → Pick least busy agent
  → If all busy → add to queue
  
  Assignment Rules:
  - Sales query → Sales team (priority)
  - Support → Support team
  - Technical → Developer (Raushan)
  - Billing → Accounts team
↓
Step 2: Send to Human Interface
  → Create task in Laravel dashboard
  → Send Slack with "Claim" button
  → Email notification (fallback)
  → 15 min timeout to claim
↓
Step 3: Human Processes
  → Views all context in dashboard
  → Takes action (or types response)
  → Closes with resolution
↓
Step 4: Resume Automation
  → Log human decision
  → Update AI training data
  → Continue downstream workflow nodes
  → Notify requester
```

```python
# microservices/handoff_service.py
from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
from typing import Optional, List
from enum import Enum
import openai
import os
from datetime import datetime

app = FastAPI(title="Flow Studio Human Handoff Service")

class HandoffPriority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    URGENT = "urgent"

class HandoffRequest(BaseModel):
    workflow_id: str
    execution_id: str
    original_input: dict
    ai_response: Optional[str] = None
    ai_reasoning: str
    confidence: float
    category: str
    priority: HandoffPriority = HandoffPriority.MEDIUM
    customer_email: Optional[str] = None

class Agent(BaseModel):
    id: str
    name: str
    role: str
    skills: List[str]
    status: str  # available, busy, offline
    current_load: int

class HandoffResponse(BaseModel):
    handoff_id: str
    assigned_agent: Optional[Agent]
    queue_position: int
    estimated_wait_minutes: int

# Agent roster
AGENTS = [
    Agent(id="a1", name="Amit", role="Support Lead", 
          skills=["technical", "billing"], status="available", current_load=2),
    Agent(id="a2", name="Priya", role="Sales", 
          skills=["sales", "product"], status="available", current_load=1),
    Agent(id="a3", name="Raushan", role="Developer", 
          skills=["technical", "integration", "api"], status="available", current_load=0),
    Agent(id="a4", name="Sunil", role="Accountant", 
          skills=["billing", "finance"], status="busy", current_load=5),
]

def find_best_agent(category: str, priority: str) -> tuple[Agent | None, int]:
    """Find best available agent for this category."""
    # Route by category
    skill_map = {
        "technical": ["technical", "api"],
        "billing": ["billing", "finance"],
        "sales": ["sales", "product"],
        "support": ["technical", "sales", "billing"],
        "general": ["technical", "sales", "billing", "finance"]
    }
    
    required_skills = skill_map.get(category, skill_map["general"])
    
    # Find available agents with matching skills
    candidates = [
        a for a in AGENTS 
        if a.status == "available" 
        and any(s in a.skills for s in required_skills)
    ]
    
    if not candidates:
        return None, 1  # No one available, queue it
    
    # Pick least loaded
    best = min(candidates, key=lambda a: a.current_load)
    return best, 0

@app.post("/handoff/create", response_model=HandoffResponse)
async def create_handoff(request: HandoffRequest, background: BackgroundTasks):
    """Create a human handoff task."""
    agent, queue_pos = find_best_agent(request.category, request.priority)
    
    # In production, store in database
    handoff_id = f"hf-{datetime.now().strftime('%Y%m%d%H%M%S')}-{hash(request.execution_id) % 10000}"
    
    if agent:
        # Send notification to agent
        background.add_task(notify_agent, agent.id, handoff_id, request)
    
    return HandoffResponse(
        handoff_id=handoff_id,
        assigned_agent=agent,
        queue_position=queue_pos,
        estimated_wait_minutes=0 if agent else 15 * queue_pos
    )

async def notify_agent(agent_id: str, handoff_id: str, request: HandoffRequest):
    """Send notification to agent via Slack/email."""
    message = f"""
    🆘 Human Handoff Required
    
    Workflow: {request.workflow_id}
    Customer: {request.customer_email or 'Unknown'}
    Category: {request.category}
    Priority: {request.priority.value}
    AI Confidence: {request.confidence:.1%}
    
    AI Reasoning: {request.ai_reasoning[:200]}
    
    Claim here: /handoff/{handoff_id}
    """
    
    # Send to Slack
    # await slack_client.chat_postMessage(channel=f"@agent_{agent_id}", text=message)
    print(f"Notified agent {agent_id}: {message}")
```

---

## Day 5 — Monitoring & Observability

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

### Prometheus Metrics Collection

Production monitoring ke liye Prometheus metrics har microservice se.

```yaml
# prometheus/prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'n8n'
    static_configs:
      - targets: ['n8n:5678']
    metrics_path: '/metrics'
  
  - job_name: 'ai-service'
    static_configs:
      - targets: ['ai-service:8000']
    metrics_path: '/health/metrics'
  
  - job_name: 'workflow-service'
    static_configs:
      - targets: ['workflow-service:8002']
    metrics_path: '/health/metrics'
  
  - job_name: 'monitoring-service'
    static_configs:
      - targets: ['monitoring-service:8003']
    metrics_path: '/health/metrics'
  
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']
```

```python
# microservices/monitoring_service/prometheus_metrics.py
from prometheus_client import Counter, Histogram, Gauge, generate_latest
from fastapi import Response
import time
import functools

# Metrics definitions
AI_REQUESTS_TOTAL = Counter(
    'ai_requests_total', 
    'Total AI requests',
    ['model', 'endpoint', 'status']
)

AI_REQUEST_DURATION = Histogram(
    'ai_request_duration_seconds',
    'AI request duration in seconds',
    ['model', 'endpoint'],
    buckets=[0.1, 0.5, 1.0, 2.0, 5.0, 10.0, 30.0]
)

WORKFLOW_EXECUTIONS_TOTAL = Counter(
    'workflow_executions_total',
    'Total workflow executions',
    ['workflow_id', 'status']
)

WORKFLOW_DURATION = Histogram(
    'workflow_duration_seconds',
    'Workflow execution duration',
    ['workflow_id'],
    buckets=[1, 5, 10, 30, 60, 120, 300]
)

ACTIVE_WORKFLOWS = Gauge(
    'active_workflows',
    'Number of currently active workflows'
)

QUEUE_DEPTH = Gauge(
    'queue_depth',
    'Current queue depth by priority',
    ['priority']
)

ERROR_COUNTER = Counter(
    'error_total',
    'Total errors by type',
    ['error_type', 'workflow_id']
)

API_COST_TRACKER = Counter(
    'api_cost_usd_total',
    'Total API cost in USD',
    ['provider', 'model']
)

def track_ai_request(model: str, endpoint: str):
    """Decorator to track AI request metrics."""
    def decorator(func):
        @functools.wraps(func)
        async def wrapper(*args, **kwargs):
            start = time.time()
            try:
                result = await func(*args, **kwargs)
                AI_REQUESTS_TOTAL.labels(model=model, endpoint=endpoint, status='success').inc()
                return result
            except Exception as e:
                AI_REQUESTS_TOTAL.labels(model=model, endpoint=endpoint, status='error').inc()
                ERROR_COUNTER.labels(error_type=type(e).__name__, workflow_id='unknown').inc()
                raise
            finally:
                duration = time.time() - start
                AI_REQUEST_DURATION.labels(model=model, endpoint=endpoint).observe(duration)
        return wrapper
    return decorator

@app.get("/metrics")
async def get_metrics():
    """Expose Prometheus metrics."""
    return Response(
        content=generate_latest(),
        media_type="text/plain"
    )
```

### Grafana Dashboard

```json
// grafana/dashboards/flow-studio.json
{
  "dashboard": {
    "title": "Flow Studio — Production Overview",
    "panels": [
      {
        "title": "Workflow Execution Rate",
        "type": "graph",
        "targets": [{
          "expr": "rate(workflow_executions_total[5m])",
          "legendFormat": "{{workflow_id}}"
        }]
      },
      {
        "title": "AI Request Latency (p95)",
        "type": "graph",
        "targets": [{
          "expr": "histogram_quantile(0.95, rate(ai_request_duration_seconds_bucket[5m]))",
          "legendFormat": "{{model}}"
        }]
      },
      {
        "title": "Success Rate %",
        "type": "stat",
        "targets": [{
          "expr": "sum(rate(workflow_executions_total{status=\"success\"}[1h])) / sum(rate(workflow_executions_total[1h])) * 100"
        }]
      },
      {
        "title": "API Cost (24h)",
        "type": "bar-gauge",
        "targets": [{
          "expr": "sum(api_cost_usd_total[24h]) by (provider)"
        }]
      },
      {
        "title": "Active Workflows",
        "type": "stat",
        "targets": [{
          "expr": "active_workflows"
        }]
      },
      {
        "title": "Queue Depth by Priority",
        "type": "bar-gauge",
        "targets": [{
          "expr": "queue_depth"
        }]
      },
      {
        "title": "Error Rate by Type",
        "type": "pie-chart",
        "targets": [{
          "expr": "sum(rate(error_total[1h])) by (error_type)"
        }]
      }
    ]
  }
}
```

### Cost Tracking Per Workflow

Har AI call ka cost pata hona chahiye — client ko bill kaise doge?

```python
# microservices/monitoring_service/cost_tracker.py
from pydantic import BaseModel
from datetime import datetime, timedelta
from typing import Optional
import sqlite3  # Use PostgreSQL in production

class CostRecord(BaseModel):
    workflow_id: str
    execution_id: str
    provider: str  # openai, anthropic, huggingface
    model: str
    prompt_tokens: int
    completion_tokens: int
    total_tokens: int
    cost_usd: float
    timestamp: datetime

# Cost per 1K tokens (as of 2026)
MODEL_COSTS = {
    "gpt-4o": {"input": 0.005, "output": 0.015},
    "gpt-4o-mini": {"input": 0.00015, "output": 0.0006},
    "claude-3-5-sonnet": {"input": 0.003, "output": 0.015},
    "claude-3-haiku": {"input": 0.00025, "output": 0.00125},
    "gemini-1.5-pro": {"input": 0.00125, "output": 0.005},
    "gemini-1.5-flash": {"input": 0.000075, "output": 0.0003}
}

def calculate_cost(provider: str, model: str, prompt_tokens: int, completion_tokens: int) -> float:
    """Calculate cost for an AI API call."""
    model_key = f"{provider}/{model}" if "/" not in model else model
    costs = MODEL_COSTS.get(model_key) or MODEL_COSTS.get(model)
    
    if not costs:
        return 0.0
    
    prompt_cost = (prompt_tokens / 1000) * costs["input"]
    completion_cost = (completion_tokens / 1000) * costs["output"]
    
    return round(prompt_cost + completion_cost, 6)

@app.post("/cost/record")
async def record_cost(record: CostRecord):
    """Record AI API cost for an execution."""
    # In production: INSERT INTO execution_costs ...
    print(f"""
    Cost Recorded:
    ├── Workflow: {record.workflow_id}
    ├── Model: {record.model}
    ├── Tokens: {record.total_tokens}
    ├── Cost: ${record.cost_usd:.6f}
    └── Timestamp: {record.timestamp}
    """)
    return {"status": "recorded", "cost": record.cost_usd}

@app.get("/cost/summary")
async def cost_summary(workflow_id: Optional[str] = None, days: int = 7):
    """Get cost summary for period."""
    since = datetime.now() - timedelta(days=days)
    
    # In production: SELECT model, SUM(cost_usd) FROM execution_costs
    #             WHERE timestamp > since GROUP BY model
    
    return {
        "period_days": days,
        "total_cost": 12.45,
        "by_model": {
            "gpt-4o-mini": 5.20,
            "gpt-4o": 4.80,
            "claude-3-haiku": 2.45
        },
        "by_workflow": {
            "customer-support": 6.30,
            "sales-pipeline": 3.15,
            "invoice-processing": 3.00
        },
        "avg_cost_per_execution": 0.045
    }

@app.get("/cost/budget-alert")
async def budget_alert(monthly_budget: float = 100.0):
    """Check if approaching budget limit."""
    # Simulated monthly cost
    current_month_cost = 78.50
    usage_percent = (current_month_cost / monthly_budget) * 100
    
    alerts = []
    if usage_percent > 80:
        alerts.append({
            "severity": "warning",
            "message": f"⚠️ Budget {usage_percent:.0f}% used. ${current_month_cost:.2f} of ${monthly_budget:.2f}"
        })
    if usage_percent > 95:
        alerts.append({
            "severity": "critical",
            "message": f"🚨 Budget almost exhausted! Reduce AI usage or upgrade plan."
        })
    
    return {
        "current_cost": current_month_cost,
        "budget": monthly_budget,
        "usage_percent": round(usage_percent, 1),
        "remaining": round(monthly_budget - current_month_cost, 2),
        "alerts": alerts,
        "recommendation": "Switch low-stakes workflows to gpt-4o-mini" if usage_percent > 80 else "On track"
    }
```

### SLA Monitoring

Client ko SLA dena hai — "99.9% uptime, < 5s response." Monitor karo.

```python
# microservices/monitoring_service/sla_monitor.py
from datetime import datetime, timedelta
from typing import Optional
from pydantic import BaseModel

class SLATarget(BaseModel):
    workflow_id: str
    max_response_time_ms: int = 5000
    uptime_target: float = 99.9
    max_error_rate: float = 0.01  # 1%
    business_hours_only: bool = True

class SLAReport(BaseModel):
    workflow_id: str
    period_hours: int
    total_executions: int
    avg_response_time_ms: float
    p95_response_time_ms: float
    p99_response_time_ms: float
    error_rate: float
    uptime_percent: float
    sla_met: bool
    violations: list

@app.get("/sla/status/{workflow_id}")
async def check_sla(workflow_id: str, hours: int = 24):
    """Check if workflow meets SLA targets."""
    # Simulated check — in production query execution_logs
    violations = []
    
    # Check 1: Response time
    p95_latency = 3200  # ms — simulated
    if p95_latency > 5000:
        violations.append({
            "metric": "p95_latency",
            "threshold": "5000ms",
            "actual": f"{p95_latency}ms",
            "severity": "warning"
        })
    
    # Check 2: Error rate
    error_rate = 0.008  # 0.8% — simulated
    if error_rate > 0.01:
        violations.append({
            "metric": "error_rate",
            "threshold": "1%",
            "actual": f"{error_rate*100:.1f}%",
            "severity": "critical"
        })
    
    # Check 3: Uptime
    uptime = 99.95  # % — simulated
    if uptime < 99.9:
        violations.append({
            "metric": "uptime",
            "threshold": "99.9%",
            "actual": f"{uptime}%",
            "severity": "critical"
        })
    
    sla_met = len(violations) == 0
    
    return SLAReport(
        workflow_id=workflow_id,
        period_hours=hours,
        total_executions=1240,
        avg_response_time_ms=1800,
        p95_response_time_ms=p95_latency,
        p99_response_time_ms=7800,
        error_rate=error_rate,
        uptime_percent=uptime,
        sla_met=sla_met,
        violations=violations
    )
```

### Execution Tracing

Har request ka full trace — kaunsa node kitna time liya.

```javascript
// n8n Code Node — Execution Trace Logger

const executionId = $execution?.id || 'unknown';
const workflowId = $workflow?.id || 'unknown';
const workflowName = $workflow?.name || 'Unknown';
const currentNode = $node?.name || 'Unknown';

// Build trace
const trace = {
  trace_id: `trace-${executionId}`,
  workflow_id: workflowId,
  workflow_name: workflowName,
  node: currentNode,
  timestamp: new Date().toISOString(),
  input: $json,
  previous_nodes: $execution?.executionData?.nodeExecutionStack 
    ?.map(n => n.node.name) || [],
  execution_order: $execution?.executionData?.nodeExecutionStack?.length || 0
};

// Log to monitoring service
await $http.post(
  'http://monitoring-service:8003/api/traces',
  trace,
  { headers: { 'Content-Type': 'application/json' } }
);

return $json;  // Pass through unchanged
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

### Webhook Signature Verification (HMAC)

Webhooks fake ho sakte hain — verify karo incoming requests.

```python
# microservices/middleware/webhook_auth.py
import hmac
import hashlib
import time
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.base import BaseHTTPMiddleware
import os

class WebhookSignatureMiddleware(BaseHTTPMiddleware):
    def __init__(self, app):
        super().__init__(app)
        self.webhook_secret = os.getenv("WEBHOOK_SECRET", "change-me")
        # Tolerance for clock skew (seconds)
        self.max_age = 300  # 5 minutes
    
    async def dispatch(self, request: Request, call_next):
        # Only verify webhook endpoints
        if not request.url.path.startswith("/webhook/"):
            return await call_next(request)
        
        # Get signature headers
        signature = request.headers.get("X-Webhook-Signature", "")
        timestamp = request.headers.get("X-Webhook-Timestamp", "")
        
        if not signature or not timestamp:
            raise HTTPException(
                status_code=401,
                detail="Missing webhook signature headers"
            )
        
        # Check timestamp freshness (prevent replay attacks)
        try:
            ts = int(timestamp)
            if abs(time.time() - ts) > self.max_age:
                raise HTTPException(
                    status_code=401,
                    detail="Webhook timestamp expired — possible replay attack"
                )
        except ValueError:
            raise HTTPException(status_code=401, detail="Invalid timestamp")
        
        # Read body
        body = await request.body()
        
        # Compute expected signature
        # Format: timestamp + "." + body
        expected = hmac.new(
            self.webhook_secret.encode(),
            f"{timestamp}.{body.decode()}".encode(),
            hashlib.sha256
        ).hexdigest()
        
        # Constant-time comparison (prevents timing attacks)
        if not hmac.compare_digest(signature, expected):
            raise HTTPException(
                status_code=401,
                detail="Invalid webhook signature"
            )
        
        return await call_next(request)
```

```javascript
// n8n Code Node — Generate Webhook Signature (for outgoing webhooks)

const payload = $json;
const webhookSecret = $env.WEBHOOK_SECRET;
const timestamp = Math.floor(Date.now() / 1000).toString();

// Create signature: HMAC-SHA256(timestamp + "." + JSON body)
const crypto = require('crypto');
const dataToSign = timestamp + '.' + JSON.stringify(payload);
const signature = crypto
  .createHmac('sha256', webhookSecret)
  .update(dataToSign)
  .digest('hex');

return {
  ...payload,
  _webhook: {
    url: 'https://client-app.com/webhook',
    headers: {
      'X-Webhook-Signature': signature,
      'X-Webhook-Timestamp': timestamp,
      'Content-Type': 'application/json'
    }
  }
};
```

### IP Whitelisting

Sensitive workflows sirf trusted IPs se accept karo.

```python
# microservices/middleware/ip_whitelist.py
import ipaddress
from fastapi import Request, HTTPException
from fastapi.middleware.base import BaseHTTPMiddleware
import os

class IPWhitelistMiddleware(BaseHTTPMiddleware):
    def __init__(self, app):
        super().__init__(app)
        # Comma-separated IPs/CIDRs from env
        whitelist = os.getenv("IP_WHITELIST", "127.0.0.1,10.0.0.0/8,172.16.0.0/12")
        self.allowed_networks = [
            ipaddress.ip_network(cidr.strip())
            for cidr in whitelist.split(",")
            if cidr.strip()
        ]
        # Endpoints requiring IP whitelist
        self.protected_paths = [
            "/api/workflows/",
            "/api/executions/",
            "/admin/",
            "/webhook/internal/"
        ]
    
    async def dispatch(self, request: Request, call_next):
        path = request.url.path
        
        # Check if path needs protection
        needs_protection = any(
            path.startswith(p) for p in self.protected_paths
        )
        
        if needs_protection:
            client_ip = request.client.host
            
            # Check if IP is allowed
            ip_addr = ipaddress.ip_address(client_ip)
            allowed = any(
                ip_addr in network for network in self.allowed_networks
            )
            
            if not allowed:
                raise HTTPException(
                    status_code=403,
                    detail={
                        "error": "access_denied",
                        "message": "IP not whitelisted for this endpoint",
                        "ip": client_ip,
                        "protected_endpoint": path
                    }
                )
        
        return await call_next(request)
```

### Multi-Tenant Isolation

Ek hi n8n instance par multiple clients — unka data alag rakhna hai.

```python
# microservices/middleware/tenant_isolation.py
from fastapi import Request, HTTPException
import os

class TenantMiddleware:
    """Ensures tenants can only access their own data."""
    
    def __init__(self):
        # Mapping of API key → tenant ID
        self.tenant_keys = {
            "tenant_1_key": "apexerp",
            "tenant_2_key": "patna_sales",
            "tenant_3_key": "bihar_traders"
        }
    
    async def get_tenant(self, request: Request) -> str:
        """Extract tenant from request."""
        # Try API key header first
        api_key = request.headers.get("X-Tenant-Key", "")
        
        if api_key in self.tenant_keys:
            return self.tenant_keys[api_key]
        
        # Try JWT claim
        auth = request.headers.get("Authorization", "")
        if auth.startswith("Bearer "):
            token = auth[7:]
            # Decode JWT and extract tenant
            # import jwt
            # payload = jwt.decode(token, os.getenv("JWT_SECRET"), algorithms=["HS256"])
            # return payload.get("tenant_id", "default")
            pass
        
        return "default"
    
    def filter_query(self, tenant_id: str, query: str) -> str:
        """Add tenant filter to SQL queries."""
        if "WHERE" in query.upper():
            return query + f" AND tenant_id = '{tenant_id}'"
        return query + f" WHERE tenant_id = '{tenant_id}'"
    
    def filter_workflow_data(self, tenant_id: str, data: dict) -> dict:
        """Tag data with tenant ID."""
        return {
            **data,
            "tenant_id": tenant_id,
            "created_at": "now()"
        }
```

### Audit Trail

Har action log karo — "Kaun, kab, kya, kyun."

```python
# microservices/audit_service.py
from fastapi import FastAPI
from pydantic import BaseModel
from datetime import datetime
from typing import Optional

app = FastAPI(title="Flow Studio Audit Service")

class AuditEntry(BaseModel):
    timestamp: datetime
    actor_id: str
    actor_type: str  # user, system, workflow
    action: str       # created, updated, deleted, triggered, failed
    resource_type: str # workflow, execution, api_key, user
    resource_id: str
    details: dict
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None

@app.post("/audit/log")
async def log_audit(entry: AuditEntry):
    """Log an audit entry."""
    # In production: INSERT INTO audit_log ...
    print(f"""
    [AUDIT] {entry.timestamp}
    ├── Actor: {entry.actor_id} ({entry.actor_type})
    ├── Action: {entry.action}
    ├── Resource: {entry.resource_type}#{entry.resource_id}
    └── Details: {entry.details}
    """)
    return {"status": "logged"}

@app.get("/audit/search")
async def search_audit(
    actor_id: Optional[str] = None,
    resource_type: Optional[str] = None,
    action: Optional[str] = None,
    from_date: Optional[str] = None,
    to_date: Optional[str] = None,
    limit: int = 50
):
    """Search audit log entries."""
    # In production: SELECT * FROM audit_log WHERE ...
    return {
        "entries": [
            {
                "timestamp": "2026-06-01T10:30:00Z",
                "actor_id": "user_123",
                "action": "created",
                "resource_type": "workflow",
                "resource_id": "wf_456",
                "details": {"name": "Daily Sales Report"}
            }
        ],
        "total": 1,
        "query": {
            "actor_id": actor_id,
            "resource_type": resource_type,
            "action": action,
            "from_date": from_date,
            "to_date": to_date
        }
    }
```

```javascript
// n8n Code Node — Audit Logger at Critical Points

const auditEntry = {
  timestamp: new Date().toISOString(),
  actor_id: $json.triggered_by || 'system',
  actor_type: $json.triggered_by ? 'user' : 'system',
  action: 'triggered',
  resource_type: 'workflow',
  resource_id: $workflow.id,
  details: {
    workflow_name: $workflow.name,
    input_summary: JSON.stringify($json).substring(0, 200),
    source: $json._source || 'webhook'
  },
  ip_address: $json._ip || null
};

// Log to audit service (fire-and-forget)
await $http.post(
  'http://audit-service:8004/audit/log',
  auditEntry
);

return $json;
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

### CI/CD Pipeline

GitHub Actions se automatically deploy karo jab code push ho.

```yaml
# .github/workflows/deploy-flow-studio.yml
name: Deploy Flow Studio

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: |
          cd microservices
          pip install -r requirements.txt
      
      - name: Run tests
        run: |
          cd microservices
          pytest tests/ --cov=./ --cov-report=xml
      
      - name: Lint
        run: |
          cd microservices
          flake8 . --max-line-length=100
      
      - name: Type check
        run: |
          cd microservices
          mypy . --ignore-missing-imports
  
  build-and-push:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
      
      - name: Login to DockerHub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      
      - name: Build and push AI service
        uses: docker/build-push-action@v5
        with:
          context: ./microservices
          file: ./microservices/Dockerfile
          push: true
          tags: |
            apexerp/flow-studio-ai:latest
            apexerp/flow-studio-ai:${{ github.sha }}
      
      - name: Build and push workflow service
        run: |
          docker build -t apexerp/flow-studio-workflow:latest ./workflow-service
          docker push apexerp/flow-studio-workflow:latest
  
  deploy:
    needs: build-and-push
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.DEPLOY_HOST }}
          username: ${{ secrets.DEPLOY_USER }}
          key: ${{ secrets.DEPLOY_KEY }}
          script: |
            cd /opt/flow-studio
            docker-compose pull
            docker-compose up -d --remove-orphans
            docker system prune -f
            echo "Deployment complete!"
      
      - name: Health check
        run: |
          sleep 30
          curl -f http://${{ secrets.DEPLOY_HOST }}/health || exit 1
          curl -f http://${{ secrets.DEPLOY_HOST }}:8001/health/ready || exit 1
          echo "All services healthy!"
      
      - name: Notify team
        uses: slackapi/slack-github-action@v1.24.0
        with:
          payload: |
            {
              "text": "🚀 Flow Studio deployed successfully!\nCommit: ${{ github.sha }}\nServices: ai-service, workflow-service, monitoring"
            }
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

### Load Testing with k6

Production deploy se pehle — kitna load handle karega?

```javascript
// k6/load-test.js
import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Rate, Trend } from 'k6/metrics';

// Custom metrics
const errorRate = new Rate('errors');
const aiLatency = new Trend('ai_request_duration');

export const options = {
  stages: [
    { duration: '2m', target: 10 },   // Ramp up to 10 users
    { duration: '5m', target: 50 },   // Ramp to 50 users
    { duration: '2m', target: 100 },  // Stress test: 100 users
    { duration: '1m', target: 0 },    // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<5000'],  // 95% under 5s
    errors: ['rate<0.1'],                // <10% errors
    http_req_failed: ['rate<0.05'],     // <5% failures
  },
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:8001';

export default function () {
  group('AI Service', () => {
    // Test 1: Simple completion
    const payload = JSON.stringify({
      prompt: 'Ek chhota sa email likho customer ko order confirmation ke liye',
      model: 'gpt-4o-mini',
      temperature: 0.3,
      max_tokens: 200,
    });
    
    const res1 = http.post(`${BASE_URL}/ai/complete`, payload, {
      headers: { 'Content-Type': 'application/json' },
    });
    
    check(res1, {
      'AI completion status 200': (r) => r.status === 200,
      'AI response has text': (r) => r.json('text') !== '',
    });
    
    aiLatency.add(res1.timings.duration);
    errorRate.add(res1.status !== 200);
    
    // Test 2: Classification
    const classifyPayload = JSON.stringify({
      text: 'Mera order kab deliver hoga?',
      categories: ['support', 'sales', 'billing', 'general'],
    });
    
    const res2 = http.post(`${BASE_URL}/ai/classify`, classifyPayload, {
      headers: { 'Content-Type': 'application/json' },
    });
    
    check(res2, {
      'Classification status 200': (r) => r.status === 200,
      'Has category': (r) => r.json('category') !== '',
    });
    
    sleep(1);  // Wait between iterations
  });
  
  group('Translation Service', () => {
    const hinglishPayload = JSON.stringify({
      text: 'Your order has been confirmed and will be delivered tomorrow',
      tone: 'friendly',
    });
    
    const res = http.post(`${BASE_URL}/hinglish`, hinglishPayload, {
      headers: { 'Content-Type': 'application/json' },
    });
    
    check(res, {
      'Translation status 200': (r) => r.status === 200,
      'Has Hinglish output': (r) => r.json('translated_text') !== '',
    });
    
    sleep(0.5);
  });
}

// Run: k6 run --vus 10 --duration 30s k6/load-test.js
```

### Backup & Disaster Recovery

Production data kabhi mat kho na — backup strategy essential hai.

```yaml
Backup Strategy:
────────────────

1. DATABASE BACKUPS (PostgreSQL)
   ┌────────────────────────────────────────────┐
   │ Schedule: Daily 2 AM (cron)               │
   │ Retention: 30 days daily, 12 monthly      │
   │ Command: pg_dump -Fc > backup_$(date).dump │
   │ Storage: S3-compatible (MinIO/Minio)       │
   │ Restore: pg_restore -d flowstudio backup   │
   └────────────────────────────────────────────┘

2. n8n WORKFLOW EXPORTS
   ┌────────────────────────────────────────────┐
   │ Schedule: After every workflow change      │
   │ Export: n8n API → JSON files               │
   │ Git: Commit to private repo                │
   │ Retention: Full git history                │
   └────────────────────────────────────────────┘

3. ENVIRONMENT CONFIG
   ┌────────────────────────────────────────────┐
   │ Storage: HashiCorp Vault OR Docker secrets │
   │ Backup: vault export → encrypted file      │
   │ Access: Only deployment admin (Raushan)    │
   └────────────────────────────────────────────┘

4. APPLICATION CODE
   ┌────────────────────────────────────────────┐
   │ Storage: GitHub (private repo)             │
   │ Backup: GitHub Actions → S3 on every push  │
   │ Versioning: Git tags for releases          │
   └────────────────────────────────────────────┘
```

```bash
# backup/backup.sh — Automated backup script
#!/bin/bash
# Flow Studio — Backup Script
# Run: cron job, daily 2 AM

set -euo pipefail

BACKUP_DIR="/backups/flow-studio"
DATE=$(date +%Y-%m-%d)
RETENTION_DAYS=30

echo "=== Flow Studio Backup: $DATE ==="

# 1. PostgreSQL backup
echo "Backing up PostgreSQL..."
docker exec flow-studio-postgres-1 pg_dump \
  -U user \
  -Fc \
  flowstudio > "$BACKUP_DIR/postgres/flowstudio_$DATE.dump"

# Compress
gzip "$BACKUP_DIR/postgres/flowstudio_$DATE.dump"
echo "  → Database backup: $(ls -lh $BACKUP_DIR/postgres/flowstudio_$DATE.dump.gz)"

# 2. n8n workflows export
echo "Backing up n8n workflows..."
curl -s -X GET \
  -H "X-N8N-API-KEY: $N8N_API_KEY" \
  http://n8n:5678/rest/workflows > "$BACKUP_DIR/n8n/workflows_$DATE.json"

gzip "$BACKUP_DIR/n8n/workflows_$DATE.json"
echo "  → Workflows backup: $(ls -lh $BACKUP_DIR/n8n/workflows_$DATE.json.gz)"

# 3. Redis data
echo "Backing up Redis..."
docker exec flow-studio-redis-1 redis-cli SAVE
cp /var/lib/docker/volumes/flow-studio_redis_data/_data/dump.rdb \
   "$BACKUP_DIR/redis/redis_$DATE.rdb"
gzip "$BACKUP_DIR/redis/redis_$DATE.rdb"
echo "  → Redis backup done"

# 4. Clean old backups
echo "Cleaning backups older than $RETENTION_DAYS days..."
find "$BACKUP_DIR" -name "*.gz" -mtime +$RETENTION_DAYS -delete
echo "  → Cleanup complete"

echo "=== Backup complete: $DATE ==="
```

### Scaling Strategy

Jab Flow Studio grow karega — kaise scale karega?

```yaml
Scaling Flow Studio:
────────────────────

PHASE 1 — Single Server (0-100 workflows/day)
  ├── Architecture: All services on 1 VPS (4GB RAM)
  ├── n8n: Single instance
  ├── DB: PostgreSQL on same machine
  ├── Queue: Redis on same machine
  └── Cost: ~₹1,000/month

PHASE 2 — Split Services (100-1,000 workflows/day)
  ├── Architecture: Separate DB + app servers
  ├── n8n: 2 instances behind load balancer
  ├── DB: Dedicated PostgreSQL (8GB RAM)
  ├── Queue: Redis (4GB RAM)
  ├── AI Service: 2 replicas
  └── Cost: ~₹5,000/month

PHASE 3 — Horizontal Scale (1,000-10,000 workflows/day)
  ┌─────────────────────────────────────────────┐
  │                                             │
  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
  │  │  n8n #1  │  │  n8n #2  │  │  n8n #3  │  │
  │  └────┬─────┘  └────┬─────┘  └────┬─────┘  │
  │       │             │             │         │
  │  ┌────▼─────────────▼─────────────▼────┐    │
  │  │        Load Balancer (nginx)        │    │
  │  └────────────────┬────────────────────┘    │
  │                   │                         │
  │  ┌────────────────▼────────────────────┐    │
  │  │        PostgreSQL (Primary)         │    │
  │  └────────────────┬────────────────────┘    │
  │                   │                         │
  │  ┌────────────────▼────────────────────┐    │
  │  │        PostgreSQL (Read Replica)    │    │
  │  └─────────────────────────────────────┘    │
  │                                             │
  │  ┌─────────────────────────────────────┐    │
  │  │        Redis Cluster                │    │
  │  │  (3 masters, 3 replicas)           │    │
  │  └─────────────────────────────────────┘    │
  │                                             │
  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
  │  │ AI Svc   │  │ AI Svc   │  │ AI Svc   │  │
  │  │ Replica1 │  │ Replica2 │  │ Replica3 │  │
  │  └──────────┘  └──────────┘  └──────────┘  │
  │                                             │
  └─────────────────────────────────────────────┘
  
  Cost: ~₹15,000-25,000/month

PHASE 4 — Enterprise (10,000+ workflows/day)
  ├── Kubernetes (EKS/GKE) for orchestration
  ├── Auto-scaling n8n workers based on queue depth
  ├── Multi-region PostgreSQL (CockroachDB/Yugabyte)
  ├── AI model caching layer (Redis + PGVector)
  ├── CDN for static assets
  └── Cost: ₹50,000+/month (or more)
```

### Zero-Downtime Deployment

Bina downtime ke naye version deploy karo.

```yaml
Zero-Downtime Deploy Strategy:
────────────────────────────────

1. BLUE-GREEN DEPLOYMENT
   ┌──────────────────────────────────────────────┐
   │ Blue (Current)    │  Green (New)            │
   │ ┌───────────────┐ │ ┌───────────────┐      │
   │ │ AI Service v2 │ │ │ AI Service v3 │      │
   │ │ (running)     │ │ │ (starting)    │      │
   │ └───────────────┘ │ └───────────────┘      │
   │                                                │
   │ Load Balancer → Routes to Blue                 │
   │ Wait until Green is healthy (health check)     │
   │ Switch Load Balancer → Routes to Green         │
   │ Keep Blue running for 15 min (rollback window) │
   └──────────────────────────────────────────────┘

2. ROLLING UPDATE (for stateless services)
   ┌──────────────────────────────────────────────┐
   │ Docker Compose:                              │
   │ docker-compose up -d --no-deps --scale       │
   │   ai-service=2 --no-recreate ai-service      │
   │                                                │
   │ Stops 1 replica, starts new version           │
   │ Other replica handles traffic                 │
   │ Repeat for all replicas                       │
   └──────────────────────────────────────────────┘

3. ROLLBACK PLAN
   ┌──────────────────────────────────────────────┐
   │ If deploy fails:                             │
   │ 1. docker-compose down <new-service>        │
   │ 2. docker-compose up -d <old-service>        │
   │ 3. Run health check                          │
   │ 4. Notify team: "Rolled back to v{version}" │
   └──────────────────────────────────────────────┘
```

```yaml
# docker-compose.prod.yml — Production overrides
version: "3.8"

services:
  ai-service:
    deploy:
      replicas: 3
      update_config:
        parallelism: 1
        delay: 10s
        order: start-first
      restart_policy:
        condition: any
        delay: 5s
        max_attempts: 3
  
  workflow-service:
    deploy:
      replicas: 2
      update_config:
        parallelism: 1
        order: start-first
  
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/ssl:/etc/nginx/ssl
    depends_on:
      - ai-service
      - workflow-service
      - monitoring-service
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
