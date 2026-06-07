# 🏢 STAGE 6C — Multi-Tenant AI Systems

> **Level:** Expert | **Duration:** 1 Week

---

## 1. Multi-Tenant AI Architecture

```
Tenant A ──┐
Tenant B ──┤──→ Laravel (Auth + Routing)
Tenant C ──┘         │
                     ↓
              AI Service (FastAPI)
                     │
         ┌───────────┼───────────┐
         ↓           ↓           ↓
    Vector DB    Vector DB    Vector DB
    (Tenant A)   (Tenant B)   (Tenant C)
```

### Isolation Strategies

| Strategy | Implementation | Pros | Cons |
|----------|---------------|------|------|
| **Namespace** | Same index, tenant_id filter | Simple | Less isolation |
| **Collection** | Separate collection per tenant | Good isolation | More resources |
| **Database** | Separate vector DB per tenant | Full isolation | Most complex |

---

## 2. Tenant-Aware AI Service

```python
# FastAPI with tenant awareness
@app.post("/embed")
async def embed(request: EmbedRequest):
    tenant_id = request.tenant_id
    
    # Use tenant-specific collection
    collection = get_collection(f"tenant_{tenant_id}")
    
    embedding = generate_embedding(request.text)
    
    collection.add(
        embeddings=[embedding],
        documents=[request.text],
        ids=[str(uuid.uuid4())],
        metadatas=[{"tenant_id": tenant_id}]
    )
    
    return {"status": "stored"}

@app.post("/search")
async def search(request: SearchRequest):
    tenant_id = request.tenant_id
    collection = get_collection(f"tenant_{tenant_id}")
    
    results = collection.query(
        query_texts=[request.query],
        n_results=request.limit,
        where={"tenant_id": tenant_id}  # Extra safety filter
    )
    
    return {"results": results}
```

---

## 3. Laravel Tenant Context

```php
// Pass tenant context to AI service
class AIService
{
    public function searchWithTenantContext(string $query): array
    {
        $tenantId = tenant('id');
        
        return Http::post("{$this->baseUrl}/search", [
            'query' => $query,
            'tenant_id' => $tenantId,
            'limit' => 10,
        ])->json();
    }
    
    public function indexDocumentForTenant(string $text, array $metadata = []): void
    {
        Http::post("{$this->baseUrl}/embed", [
            'text' => $text,
            'tenant_id' => tenant('id'),
            'metadata' => $metadata,
        ]);
    }
}
```

---

## 4. Usage Tracking & Billing

```php
Schema::create('ai_usage', function (Blueprint $table) {
    $table->id();
    $table->string('tenant_id');
    $table->string('feature'); // 'chat', 'search', 'scrape'
    $table->integer('tokens_used')->default(0);
    $table->decimal('cost_usd', 10, 6)->default(0);
    $table->timestamps();
    $table->index(['tenant_id', 'feature', 'created_at']);
});

// Track usage
class TrackAIUsage
{
    public static function record(string $feature, int $tokens): void
    {
        AIUsage::create([
            'tenant_id' => tenant('id'),
            'feature' => $feature,
            'tokens_used' => $tokens,
            'cost_usd' => $tokens * 0.00003, // example rate
        ]);
    }
}

// Check limits
class CheckAIQuota
{
    public function handle(Request $request, Closure $next)
    {
        $monthlyUsage = AIUsage::where('tenant_id', tenant('id'))
            ->where('created_at', '>=', now()->startOfMonth())
            ->sum('tokens_used');
        
        $limit = tenant('plan') === 'pro' ? 1_000_000 : 100_000;
        
        if ($monthlyUsage >= $limit) {
            return response()->json(['error' => 'AI quota exceeded'], 429);
        }
        
        return $next($request);
    }
}
```

---

## 🎯 Practice Tasks
- [ ] Set up tenant-aware vector DB
- [ ] Build tenant context passing in AI requests
- [ ] Implement usage tracking and billing
- [ ] Create quota limits per plan
- [ ] Test data isolation between tenants

---

*Next: [Workflow Automation →](../07_automation-engineering/01_WORKFLOW_AUTOMATION.md)*
