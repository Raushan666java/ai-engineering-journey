# ⚡ STAGE 8B — Scaling, Caching & Queues

> **Level:** Advanced | **Duration:** 1 Week

---

## 1. Caching Architecture

```
Request → CDN Cache (static assets)
  ↓
Application Cache (Redis)
  ↓
Database Query Cache
  ↓
Database (last resort)
```

### Cache Patterns

| Pattern | How It Works | Use Case |
|---------|-------------|----------|
| Cache-Aside | App checks cache first, then DB | General purpose |
| Write-Through | Write to cache + DB simultaneously | Consistency needed |
| Write-Behind | Write to cache, async write to DB | High write throughput |
| Read-Through | Cache auto-fetches from DB on miss | Simpler app code |

### Cache Invalidation Strategies
```
TTL (Time-to-Live):     Cache expires after X seconds
Event-based:            Clear cache when data changes
Version-based:          Cache key includes version number
```

---

## 2. Queue Architecture

```
High Priority Queue:    Payments, auth
  ↓ 4 workers

Default Queue:          Emails, notifications
  ↓ 2 workers

AI Queue:               Scraping, AI processing
  ↓ 2 workers (timeout: 300s)

Low Priority Queue:     Reports, cleanup
  ↓ 1 worker
```

### Dead Letter Queue
```
Job fails → Retry 3 times → Still fails → Dead Letter Queue
                                           ↓
                                    Manual review
                                    Alert admin
```

### Queue Monitoring
```php
// Dashboard endpoint
Route::get('/admin/queues', function () {
    return [
        'high' => Queue::size('high'),
        'default' => Queue::size('default'),
        'ai' => Queue::size('ai'),
        'failed' => FailedJob::count(),
    ];
});
```

---

## 3. Rate Limiting Strategies

```php
// Token Bucket (most common)
RateLimiter::for('api', function (Request $request) {
    return [
        Limit::perMinute(60)->by($request->user()?->id),
        Limit::perDay(10000)->by($request->user()?->id),
    ];
});

// Sliding Window
RateLimiter::for('ai', function (Request $request) {
    $plan = $request->user()->plan;
    return match ($plan) {
        'free' => Limit::perHour(10),
        'pro' => Limit::perHour(100),
        'enterprise' => Limit::perHour(1000),
    };
});
```

---

## 4. CDN (Content Delivery Network)

```
Without CDN:
User (India) → Server (US) = 200ms latency

With CDN:
User (India) → CDN Edge (India) = 20ms latency
```

### Setup with Cloudflare
```
1. Point DNS to Cloudflare
2. Enable caching rules
3. Set cache TTL per path
4. Purge cache on deployment
```

---

## 5. Scaling Checklist

```
□ Application is stateless
□ Sessions stored in Redis
□ Static assets on CDN
□ Database read replicas configured
□ Query results cached in Redis
□ Heavy tasks in queue workers
□ Rate limiting enabled
□ Health checks configured
□ Auto-scaling rules set
□ Monitoring and alerts active
```

---

## 🎯 Practice Tasks
- [ ] Implement multi-level caching
- [ ] Set up priority queues with workers
- [ ] Configure CDN for static assets
- [ ] Implement sliding window rate limiting
- [ ] Build queue monitoring dashboard

---

*Next: [Distributed Systems →](./03_DISTRIBUTED_OBSERVABILITY.md)*
