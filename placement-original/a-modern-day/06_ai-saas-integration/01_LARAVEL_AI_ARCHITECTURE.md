# 🔌 STAGE 6A — Laravel + AI Microservice Architecture

> **Level:** Advanced | **Duration:** 1 Week

---

## 1. Architecture Overview

```
┌─────────────────────────────────────────────┐
│                   Nginx                      │
│              (Reverse Proxy)                 │
├──────────────┬──────────────────────────────┤
│              │                              │
│  Laravel     │    Python AI Service         │
│  (PHP)       │    (FastAPI)                 │
│              │                              │
│  • Auth      │    • Scraping               │
│  • Dashboard │    • AI Processing          │
│  • Billing   │    • Embeddings             │
│  • API       │    • Agent Engine           │
│              │                              │
├──────────────┴──────────────────────────────┤
│        Redis (Queue + Cache + Sessions)      │
├─────────────────────────────────────────────┤
│     MySQL / PostgreSQL     │   Vector DB     │
└─────────────────────────────────────────────┘
```

---

## 2. Laravel → AI Service Communication

### AI Service Client
```php
<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class AIService
{
    private string $baseUrl;

    public function __construct()
    {
        $this->baseUrl = config('services.ai.url', 'http://ai-service:8000');
    }

    public function scrapeAndAnalyze(string $url): array
    {
        $response = Http::timeout(120)
            ->retry(3, 5000)
            ->post("{$this->baseUrl}/scrape", [
                'url' => $url,
            ]);

        if ($response->failed()) {
            throw new \Exception("AI Service error: {$response->status()}");
        }

        return $response->json();
    }

    public function generateEmbedding(string $text): array
    {
        $cacheKey = 'embedding:' . md5($text);

        return Cache::remember($cacheKey, 86400, function () use ($text) {
            $response = Http::timeout(30)
                ->post("{$this->baseUrl}/embed", ['text' => $text]);
            return $response->json()['embedding'];
        });
    }

    public function chat(string $message, array $context = []): string
    {
        $response = Http::timeout(60)
            ->post("{$this->baseUrl}/chat", [
                'message' => $message,
                'context' => $context,
            ]);

        return $response->json()['reply'];
    }

    public function isHealthy(): bool
    {
        try {
            return Http::timeout(5)
                ->get("{$this->baseUrl}/health")
                ->successful();
        } catch (\Exception $e) {
            return false;
        }
    }
}
```

---

## 3. Queue-Based Integration (Async)

```php
// app/Jobs/ProcessScrapeJob.php
class ProcessScrapeJob implements ShouldQueue
{
    public $tries = 3;
    public $timeout = 300;

    public function __construct(
        public ScrapeRequest $scrapeRequest,
        public User $user
    ) {}

    public function handle(AIService $aiService): void
    {
        $result = $aiService->scrapeAndAnalyze($this->scrapeRequest->url);

        // Store results
        $this->scrapeRequest->update([
            'status' => 'completed',
            'result' => $result,
            'completed_at' => now(),
        ]);

        // Notify user
        $this->user->notify(new ScrapeCompleted($this->scrapeRequest));
    }

    public function failed(\Throwable $e): void
    {
        $this->scrapeRequest->update([
            'status' => 'failed',
            'error' => $e->getMessage(),
        ]);
    }
}
```

### Controller
```php
class ScrapeController extends Controller
{
    public function store(Request $request, AIService $ai)
    {
        $validated = $request->validate(['url' => 'required|url']);

        $scrapeRequest = ScrapeRequest::create([
            'user_id' => auth()->id(),
            'url' => $validated['url'],
            'status' => 'pending',
        ]);

        ProcessScrapeJob::dispatch($scrapeRequest, auth()->user());

        return response()->json([
            'message' => 'Scrape job queued',
            'request_id' => $scrapeRequest->id,
        ], 202);
    }

    public function show(ScrapeRequest $scrapeRequest)
    {
        $this->authorize('view', $scrapeRequest);
        return new ScrapeRequestResource($scrapeRequest);
    }
}
```

---

## 4. Database Schema

```php
// Migration
Schema::create('scrape_requests', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->cascadeOnDelete();
    $table->string('url');
    $table->enum('status', ['pending', 'processing', 'completed', 'failed']);
    $table->json('result')->nullable();
    $table->text('error')->nullable();
    $table->timestamp('completed_at')->nullable();
    $table->timestamps();
    $table->index(['user_id', 'status']);
});

Schema::create('ai_conversations', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained();
    $table->string('session_id');
    $table->text('message');
    $table->enum('role', ['user', 'assistant']);
    $table->json('metadata')->nullable();
    $table->timestamps();
    $table->index(['user_id', 'session_id']);
});
```

---

## 5. Webhook Pattern (AI Service → Laravel)

```python
# FastAPI calls back to Laravel when done
import httpx

async def notify_laravel(request_id: str, result: dict):
    async with httpx.AsyncClient() as client:
        await client.post(
            f"{LARAVEL_URL}/api/webhooks/ai-complete",
            json={"request_id": request_id, "result": result},
            headers={"X-Webhook-Secret": WEBHOOK_SECRET}
        )
```

```php
// Laravel webhook endpoint
Route::post('/webhooks/ai-complete', function (Request $request) {
    abort_unless($request->header('X-Webhook-Secret') === config('services.ai.webhook_secret'), 403);

    $scrapeRequest = ScrapeRequest::findOrFail($request->request_id);
    $scrapeRequest->update([
        'status' => 'completed',
        'result' => $request->result,
        'completed_at' => now(),
    ]);

    event(new ScrapeCompleted($scrapeRequest));

    return response()->json(['status' => 'ok']);
});
```

---

## 🎯 Practice Tasks
- [ ] Create AIService client class in Laravel
- [ ] Build queue-based scraping job
- [ ] Implement webhook callback pattern
- [ ] Set up Docker Compose with both services
- [ ] Build API endpoint for user-facing scrape requests

---

*Next: [AI SaaS Features →](./02_AI_SAAS_FEATURES.md)*
