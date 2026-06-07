# 💾 STAGE 1C — Database Scaling & Redis

> **Level:** Intermediate → Advanced | **Duration:** 1–2 Weeks

---

## 📋 Topics Covered

1. MySQL/PostgreSQL Advanced Queries
2. Indexing Deep Dive
3. Query Optimization (N+1, Chunking)
4. Redis — In-Memory Data Store
5. Caching Strategies
6. Database Replication & Sharding

---

## 1. MySQL vs PostgreSQL

| Feature | MySQL | PostgreSQL |
|---------|-------|------------|
| Speed (reads) | ✅ Faster | Good |
| Complex queries | Good | ✅ Better |
| JSON support | Basic | ✅ Advanced |
| Full-text search | Basic | ✅ Built-in |
| Best for | Web apps | Data-heavy apps |

---

## 2. Indexing Deep Dive

### Types of Indexes
```sql
-- Single column
CREATE INDEX idx_users_email ON users(email);

-- Composite (order matters!)
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- Unique
CREATE UNIQUE INDEX idx_users_email_unique ON users(email);

-- Partial (PostgreSQL)
CREATE INDEX idx_active_users ON users(email) WHERE active = true;
```

### Laravel Migrations
```php
Schema::table('orders', function (Blueprint $table) {
    $table->index('user_id');
    $table->index(['status', 'created_at']);
    $table->unique('order_number');
});
```

### When NOT to Index
- Small tables (<1000 rows)
- Rarely searched columns
- Very frequent write tables
- Low cardinality columns (boolean)

### Analyze with EXPLAIN
```sql
EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 123 AND status = 'pending';
```

---

## 3. Query Optimization

### N+1 Problem Fix
```php
// ❌ BAD: N+1 queries
$posts = Post::all();
foreach ($posts as $post) {
    echo $post->author->name; // N extra queries!
}

// ✅ GOOD: Eager loading (2 queries total)
$posts = Post::with('author')->get();

// Nested
$posts = Post::with(['author', 'comments.user', 'tags'])->get();
```

### Large Dataset Processing
```php
// Chunk (batch processing)
User::chunk(1000, function ($users) {
    foreach ($users as $user) { /* process */ }
});

// Lazy (ultra low memory)
User::lazy()->each(fn ($user) => /* process */);

// Select only needed columns
User::select('id', 'name', 'email')->get();
```

### Subqueries
```php
$users = User::addSelect([
    'latest_order' => Order::select('created_at')
        ->whereColumn('user_id', 'users.id')
        ->latest()->limit(1),
])->get();
```

### Aggregates
```php
$stats = DB::table('orders')
    ->select([
        DB::raw('DATE(created_at) as date'),
        DB::raw('COUNT(*) as total'),
        DB::raw('SUM(total) as revenue'),
        DB::raw('AVG(total) as avg_value'),
    ])
    ->where('created_at', '>=', now()->subDays(30))
    ->groupBy('date')->orderBy('date')->get();
```

---

## 4. Redis — In-Memory Data Store

### What Is Redis?
Lightning-fast in-memory data store used for caching, sessions, queues, and real-time features.

### Installation
```bash
# Ubuntu
sudo apt install redis-server && sudo systemctl enable redis

# Docker
docker run -d --name redis -p 6379:6379 redis:alpine
```

### Laravel Config
```env
CACHE_STORE=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
REDIS_HOST=127.0.0.1
```

### Redis Data Structures
```php
use Illuminate\Support\Facades\Redis;

// Strings
Redis::set('user:1:name', 'Raushan');
Redis::get('user:1:name');
Redis::setex('temp:token', 3600, 'abc123'); // TTL

// Hashes (like objects)
Redis::hset('user:1', 'name', 'Raushan');
Redis::hgetall('user:1');

// Lists (queues)
Redis::lpush('queue:emails', json_encode($data));
Redis::rpop('queue:emails');

// Sets (unique values)
Redis::sadd('online:users', 'user:1');
Redis::scard('online:users'); // count

// Sorted Sets (leaderboards)
Redis::zadd('leaderboard', 100, 'player:1');
Redis::zadd('leaderboard', 250, 'player:2');
Redis::zrevrange('leaderboard', 0, 9); // Top 10

// Counters
Redis::incr('pageviews:home');
Redis::incrby('user:1:points', 50);
```

---

## 5. Caching Strategies

### Cache-Aside Pattern
```php
$product = Cache::remember("product:{$id}", 3600, function () use ($id) {
    return Product::with(['category', 'tags'])->findOrFail($id);
});
```

### Cache Invalidation
```php
public function update(Product $product, array $data): Product
{
    $product->update($data);
    Cache::forget("product:{$product->id}");
    Cache::tags(['products'])->flush();
    return $product->fresh();
}
```

### Cache Tags (Redis only)
```php
Cache::tags(['products', 'featured'])->put("product:{$id}", $product, 3600);
Cache::tags(['products'])->flush(); // Flush all product caches
```

### Cached Repository
```php
class CachedProductRepo implements ProductRepoInterface
{
    public function __construct(
        protected EloquentProductRepo $repo,
        protected CacheManager $cache
    ) {}

    public function findById(int $id): ?Product
    {
        return $this->cache->remember("product:{$id}", 3600,
            fn () => $this->repo->findById($id)
        );
    }
}
```

---

## 6. Database Replication

### Master-Slave Config
```php
// config/database.php
'mysql' => [
    'read' => ['host' => ['slave1.db.com', 'slave2.db.com']],
    'write' => ['host' => ['master.db.com']],
    'sticky' => true,
],
```

### How It Works
```
Writes → Master Server
Reads  → Slave 1 or Slave 2 (load balanced)
```

### Sharding Strategies

| Strategy | Example | Best For |
|----------|---------|----------|
| Range | Users 1-1M → Shard 1 | Sequential IDs |
| Hash | user_id % 4 = shard | Even distribution |
| Geographic | India → Shard IN | Regional apps |
| Tenant | Tenant A → Shard 1 | Multi-tenant SaaS |

---

## 🎯 Practice Tasks
- [ ] Set up Redis caching for a Laravel API
- [ ] Implement cache invalidation on model update
- [ ] Build a leaderboard with Redis sorted sets
- [ ] Optimize slow queries with EXPLAIN
- [ ] Set up Master-Slave replication with Docker

---

*Next: [Microservices Design →](./04_MICROSERVICES.md)*
