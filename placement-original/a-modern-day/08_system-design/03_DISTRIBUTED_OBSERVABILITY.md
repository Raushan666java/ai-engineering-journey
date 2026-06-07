# 🔭 STAGE 8C — Distributed Systems & Observability

> **Level:** Expert | **Duration:** 1 Week

---

## 1. Distributed System Challenges

```
Challenge        | Solution
-----------------|------------------
Network failures | Retry + Circuit breaker
Data consistency | Distributed transactions / Sagas
Service discovery| DNS / Consul
Config management| Environment variables / Vault
Observability    | Logs + Metrics + Traces
```

---

## 2. Circuit Breaker Pattern

```php
class CircuitBreaker
{
    private int $failures = 0;
    private int $threshold = 5;
    private string $state = 'closed'; // closed, open, half-open
    private ?Carbon $lastFailure = null;
    private int $resetTimeout = 30; // seconds

    public function call(callable $fn)
    {
        if ($this->state === 'open') {
            if (now()->diffInSeconds($this->lastFailure) > $this->resetTimeout) {
                $this->state = 'half-open';
            } else {
                throw new CircuitOpenException('Service unavailable');
            }
        }

        try {
            $result = $fn();
            $this->onSuccess();
            return $result;
        } catch (\Exception $e) {
            $this->onFailure();
            throw $e;
        }
    }

    private function onSuccess(): void
    {
        $this->failures = 0;
        $this->state = 'closed';
    }

    private function onFailure(): void
    {
        $this->failures++;
        $this->lastFailure = now();
        if ($this->failures >= $this->threshold) {
            $this->state = 'open';
        }
    }
}

// Usage
$breaker = new CircuitBreaker();
$result = $breaker->call(fn () => Http::get('http://ai-service:8000/health'));
```

---

## 3. Saga Pattern (Distributed Transactions)

```
Order Saga:
1. Create Order → success
2. Reserve Inventory → success
3. Charge Payment → FAILED!
4. Compensate: Release Inventory ← rollback
5. Compensate: Cancel Order ← rollback
```

```php
class OrderSaga
{
    private array $compensations = [];

    public function execute(array $orderData): Order
    {
        try {
            // Step 1
            $order = Order::create($orderData);
            $this->compensations[] = fn () => $order->delete();

            // Step 2
            $this->reserveInventory($order);
            $this->compensations[] = fn () => $this->releaseInventory($order);

            // Step 3
            $this->chargePayment($order);

            return $order;
        } catch (\Exception $e) {
            $this->compensate();
            throw $e;
        }
    }

    private function compensate(): void
    {
        foreach (array_reverse($this->compensations) as $comp) {
            try { $comp(); } catch (\Exception $e) {
                Log::error("Compensation failed: " . $e->getMessage());
            }
        }
    }
}
```

---

## 4. Observability — The Three Pillars

### Logs (What happened?)
```php
// Structured logging
Log::channel('json')->info('Scrape completed', [
    'url' => $url,
    'duration_ms' => $duration,
    'status' => 'success',
    'tenant_id' => tenant('id'),
    'tokens_used' => $tokens,
]);
```

### Metrics (How is it performing?)
```php
// Track custom metrics
Metrics::counter('scrape_requests_total', ['status' => 'success']);
Metrics::histogram('scrape_duration_seconds', $duration);
Metrics::gauge('queue_length', Queue::size('ai'));
```

### Traces (Where is the bottleneck?)
```
Request: POST /api/scrape
  ├── [120ms] Validate input
  ├── [2ms]   Create DB record
  ├── [5000ms] Call AI Service ← BOTTLENECK
  │      ├── [3000ms] Scrape page
  │      ├── [1500ms] AI analysis
  │      └── [500ms]  Store embeddings
  ├── [3ms]   Update DB
  └── [1ms]   Return response
Total: 5126ms
```

---

## 5. Monitoring Stack

```
Application → Prometheus (metrics collection)
    ↓
Grafana (visualization/dashboards)
    ↓
AlertManager (alerts → Slack/Email)
```

### Key Metrics to Monitor
```
Application:
- Request rate (req/sec)
- Error rate (5xx/total)
- Response time (p50, p95, p99)
- Queue depth

Infrastructure:
- CPU usage
- Memory usage
- Disk I/O
- Network traffic

AI-Specific:
- Token usage
- Model latency
- Embedding generation time
- Vector search accuracy
```

---

## 6. Health Check Endpoints

```php
Route::get('/health', function () {
    $checks = [
        'database' => fn () => DB::select('SELECT 1'),
        'redis' => fn () => Redis::ping(),
        'ai_service' => fn () => Http::timeout(5)->get('http://ai-service:8000/health'),
    ];

    $results = [];
    $healthy = true;

    foreach ($checks as $name => $check) {
        try {
            $check();
            $results[$name] = 'ok';
        } catch (\Exception $e) {
            $results[$name] = 'failed';
            $healthy = false;
        }
    }

    return response()->json([
        'status' => $healthy ? 'healthy' : 'degraded',
        'checks' => $results,
        'timestamp' => now()->toISOString(),
    ], $healthy ? 200 : 503);
});
```

---

## 🎯 Practice Tasks
- [ ] Implement circuit breaker pattern
- [ ] Build saga pattern for multi-step transactions
- [ ] Set up structured JSON logging
- [ ] Create health check endpoints
- [ ] Set up Prometheus + Grafana monitoring

---

*Next: [Modern Stack 2026 →](../09_modern-stack/MODERN_STACK_2026.md)*
