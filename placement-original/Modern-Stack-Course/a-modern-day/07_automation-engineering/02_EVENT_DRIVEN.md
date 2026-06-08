# 📡 STAGE 7B — Event-Driven Architecture

> **Level:** Advanced | **Duration:** 1 Week

---

## 1. Event-Driven Design Principles

```
Traditional (Request-Response):
Client → Server → Process → Response → Client
(Everything waits)

Event-Driven:
Client → Server → Quick Response → Client
         ↓
    Event Published → Queue
         ↓
    Worker 1: Send Email
    Worker 2: Update Analytics
    Worker 3: AI Processing
    Worker 4: Notify Slack
(Nothing waits — everything runs independently)
```

---

## 2. Pub/Sub Pattern with Redis

```php
// Publisher (Laravel)
Redis::publish('events:order', json_encode([
    'event' => 'order.placed',
    'data' => ['order_id' => $order->id, 'total' => $order->total],
    'timestamp' => now()->toISOString(),
]));

// Multiple subscribers can listen
```

```python
# Subscriber (Python AI Service)
import redis
r = redis.Redis()
pubsub = r.pubsub()
pubsub.subscribe('events:order')

for message in pubsub.listen():
    if message['type'] == 'message':
        event = json.loads(message['data'])
        if event['event'] == 'order.placed':
            # AI: Generate personalized recommendations
            recommendations = generate_recommendations(event['data']['order_id'])
            store_recommendations(recommendations)
```

---

## 3. Event Sourcing Basics

```php
// Instead of updating state directly, store events
Schema::create('events', function (Blueprint $table) {
    $table->id();
    $table->string('aggregate_type'); // 'Order', 'User'
    $table->uuid('aggregate_id');
    $table->string('event_type');     // 'OrderPlaced', 'ItemAdded'
    $table->json('payload');
    $table->json('metadata')->nullable();
    $table->timestamps();
    $table->index(['aggregate_type', 'aggregate_id']);
});

// Record events
EventStore::record([
    'aggregate_type' => 'Order',
    'aggregate_id' => $order->id,
    'event_type' => 'OrderPlaced',
    'payload' => ['items' => $items, 'total' => $total],
]);

// Replay events to rebuild state
$events = EventStore::where('aggregate_id', $orderId)
    ->orderBy('created_at')
    ->get();

$state = [];
foreach ($events as $event) {
    $state = applyEvent($state, $event);
}
```

---

## 4. CQRS (Command Query Responsibility Segregation)

```
Commands (Write):
CreateOrder → OrderCommandHandler → Database

Queries (Read):
GetOrders → OrderQueryHandler → Read Database / Cache

Why? Different optimization for reads vs writes
Writes: Consistency, validation
Reads: Speed, caching, denormalization
```

---

## 5. Real-World AI Automation Flows

### Lead Automation
```
Website Form Submitted
    ↓ Event: lead.created
    ├──→ Store in CRM database
    ├──→ AI: Score lead quality (0-100)
    ├──→ AI: Enrich with scraped company data
    ├──→ If score > 70: Assign to sales rep
    ├──→ If score > 50: Add to nurture sequence
    └──→ Send acknowledgement email
```

### Content Pipeline
```
New Article Published
    ↓ Event: article.published
    ├──→ AI: Generate summary
    ├──→ AI: Extract keywords/tags
    ├──→ AI: Generate social media posts
    ├──→ Generate embeddings → Store in vector DB
    ├──→ Update search index
    └──→ Notify subscribers
```

---

## 🎯 Practice Tasks
- [ ] Implement Redis pub/sub between services
- [ ] Build an event store for audit logging
- [ ] Create a lead automation pipeline
- [ ] Implement CQRS for a read-heavy feature
- [ ] Build real-time event dashboard

---

*Next: [AI Automation Projects →](./03_AI_AUTOMATION_PROJECTS.md)*
