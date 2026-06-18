# Chapter 20: Scaling Laravel

---
## Learning Objectives
- Design horizontally scalable Laravel applications with stateless architecture, shared-nothing principles, and Redis-backed session management
- Deploy and configure Laravel Vapor for serverless AWS Lambda hosting with auto-scaling, database pooling, and queue workers
- Optimize Laravel Octane applications using Swoole or RoadRunner with in-memory state management and persistent service bootstrapping
- Scale Redis beyond a single instance using Redis Cluster hashing, Sentinel failover, and multi-purpose Redis usage for sessions, cache, queues, rate limiting, and broadcasting
- Configure database read replicas with read/write connection separation and handle replication lag in application code
- Scale queue workers across multiple servers using Horizon balancing, Redis Cluster backends, and SQS for unlimited throughput
- Implement CDN strategies for static assets, image optimization pipelines, and geo-distributed content delivery
- Monitor production Laravel applications at scale using Pulse, Nightwatch, CloudWatch, and Datadog
---
## Theory

![Scaling Laravel](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/20-scaling-laravel.png)


### 1. Horizontal Scaling Fundamentals

Horizontal scaling adds more application servers rather than making a single server larger. Laravel applications must be designed as stateless, share-nothing processes.

#### Stateless Application Design

A horizontally scalable Laravel instance stores zero important data in local memory or local files:

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  App Node 1  â”‚  â”‚  App Node 2  â”‚  â”‚  App Node 3  â”‚
â”‚  (ephemeral) â”‚  â”‚  (ephemeral) â”‚  â”‚  (ephemeral) â”‚
â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
       â”‚                 â”‚                 â”‚
       â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                         â”‚
          â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
          â”‚         Redis (state)        â”‚
          â”‚  sessions Â· cache Â· queues   â”‚
          â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                         â”‚
          â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
          â”‚    Database (persistence)    â”‚
          â”‚  primary + read replicas     â”‚
          â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

| State Type | Where to Store | Anti-pattern |
|-----------|---------------|--------------|
| User session | Redis or database | File session (local disk) |
| Cache data | Redis or Memcached | File cache (local disk) |
| Uploaded files | S3, Cloud Storage | Local `storage/app/public` |
| Logs | CloudWatch, DataDog, Papertrail | Local `storage/logs/` |
| Queued jobs | Redis, SQS, Database | Sync driver |
| Rate limiter state | Redis | In-memory array |

#### Shared Nothing Architecture

Each request must be self-contained. Avoid:

```php
// Anti-pattern: storing state in static properties
class UserService
{
    private static array $cache = [];

    public function find(int $id): User
    {
        if (!isset(self::$cache[$id])) {
            self::$cache[$id] = User::find($id);
        }
        return self::$cache[$id];
    }
}
```

Use Redis for all cross-request state:

```php
class UserService
{
    public function __construct(
        private \Illuminate\Contracts\Cache\Repository $cache
    ) {}

    public function find(int $id): User
    {
        return $this->cache->remember("user.{$id}", 3600, function () use ($id) {
            return User::findOrFail($id);
        });
    }
}
```

#### Session Management

Configure session driver for horizontal scaling:

```php
// config/session.php
'driver' => env('SESSION_DRIVER', 'redis'),

'connection' => 'session',
```

The `database` driver also works but increases latency:

```php
'driver' => 'database', // Works across servers, slower than Redis
```

#### Cache as Central State

```php
// config/cache.php
'default' => env('CACHE_DRIVER', 'redis'),

'stores' => [
    'redis' => [
        'driver' => 'redis',
        'connection' => 'cache',
    ],
],
```

#### Database Read Replicas

Horizontal scaling requires read replicas to prevent the database from becoming the bottleneck:

```php
// config/database.php
'mysql' => [
    'driver' => 'mysql',
    'read' => [
        'host' => [
            env('DB_READ_HOST_1', '127.0.0.1'),
            env('DB_READ_HOST_2', '127.0.0.1'),
        ],
    ],
    'write' => [
        'host' => [
            env('DB_WRITE_HOST', '127.0.0.1'),
        ],
    ],
    'database' => env('DB_DATABASE', 'forge'),
    // ...
],
```

---

### 2. Laravel Vapor (Serverless)

Vapor runs Laravel on AWS Lambda, abstracting server management entirely.

#### Vapor Configuration (`vapor.yml`)

```yaml
id: 12345
name: my-production-app
environments:
  production:
    domain: api.example.com
    memory: 1024
    runtime: 'php-8.3:al2'
    storage: my-production-storage-bucket
    assets:
      - url: /
        directory: public
      - url: /storage
        directory: storage/app/public
    databases:
      - name: my-production-db
        type: mysql
        capacity: STANDARD
        high_availability: true
        auto_scale: true
        max_scale: 16
        min_scale: 2
    cache:
      - name: my-production-cache
        type: redis
        capacity: 1
        high_availability: true
    queues:
      - name: default
        type: sqs
        concurrency: 10
      - name: high
        type: sqs
        concurrency: 5
    cli: php artisan my:custom-command
    warm: 5
```

#### Deployment Flow

```bash
# Deploy to Vapor
vapor deploy production

# Vapor handles:
#   1. Builds PHP Lambda layer
#   2. Uploads assets to S3 + CloudFront
#   3. Runs database migrations
#   4. Configures API Gateway
#   5. Warms N concurrent Lambda containers
#   6. Switches traffic to new version
```

#### Auto-Scaling Behavior

| Metric | Scaling Action | Timeframe |
|--------|---------------|-----------|
| Concurrent requests > provisioned concurrency | Lambda allocates more instances | Milliseconds |
| Database CPU > 80% | Aurora auto-scales read replicas | Minutes |
| Cache memory > 75% | Elasticache scales vertically | Configuration dependent |
| Queue backlog depth | Lambda workers scale to process | Seconds |

#### Database Connection Pooling

Vapor uses RDS Proxy between Lambda and Aurora:

```
Lambda Instance â†’ RDS Proxy â†’ Aurora Cluster
     â”‚                             â”‚
     â”‚  Connection pooling         â”‚  Read/write replicas
     â”‚  IAM authentication         â”‚  Auto-scaling
     â”‚  Minimal cold start latency  â”‚  Multi-AZ
```

Configure the proxy in `config/database.php`:

```php
'mysql' => [
    'driver' => 'mysql',
    'host' => env('DB_HOST'),
    'port' => env('DB_PORT', 3306),
    'database' => env('DB_DATABASE'),
    'username' => env('DB_USERNAME'),
    'password' => env('DB_PASSWORD'),
    'engine' => 'mysql',
    'unix_socket' => env('DB_SOCKET', ''),
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
    'prefix_indexes' => true,
    'strict' => true,
    'options' => extension_loaded('pdo_mysql') ? array_filter([
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::MYSQL_ATTR_LOCAL_INFILE => false,
        PDO::MYSQL_ATTR_MAX_BUFFER_SIZE => 1024 * 1024 * 100,
        PDO::ATTR_PERSISTENT => true,
    ]) : [],
],
```

#### Vapor Cache

```php
// Stored in ElastiCache Redis â€” persists across Lambda executions
Cache::store('vapor')->put('key', 'value', 3600);
$value = Cache::store('vapor')->get('key');
```

#### Vapor Queues (SQS)

```php
// Dispatches to SQS, processed by Lambda workers
dispatch(new ProcessPodcast($podcast))->onQueue('default');
```

```php
// Vapor processes queue jobs via Lambda workers
// Each job runs in its own Lambda invocation
// Concurrency set in vapor.yml
class ProcessPodcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $timeout = 120;

    public function handle(): void
    {
        // Job logic here â€” each invocation is isolated
        // Database connections managed by RDS Proxy
        // Cache available via Vapor cache store
    }

    public function failed(\Throwable $e): void
    {
        Log::error('Podcast processing failed', [
            'podcast_id' => $this->podcast->id,
            'error' => $e->getMessage(),
        ]);
    }
}
```

#### Vapor Cron Jobs

```yaml
# vapor.yml
schedules:
  - command: subscriptions:process-recurring
    rate: everyMinute
    name: Process recurring subscriptions
  - command: reports:generate-daily
    rate: '0 2 * * *'
    name: Generate daily reports
  - command: cleanup:expired-tokens
    rate: '0 */6 * * *'
    name: Clean expired tokens
```

---

### 3. Laravel Cloud

Laravel Cloud is a managed PaaS with LAN-connected services, auto-scaling databases, and native CI/CD.

#### Cloud Environment Configuration

```yaml
# .cloud/production.yaml
id: 12345
name: production
region: us-east-1
database:
  type: aurora
  engine: mysql
  min: 2
  max: 16
  auto_pause: false
cache:
  type: redis
  size: 3
  high_availability: true
queue:
  type: sqs
  concurrency: 10
assets:
  type: s3-cloudfront
  cdn: true
```

LAN-connected services eliminate network latency between app, database, cache, and queue:

```
App Container â”€â”€LANâ”€â”€â†’ Aurora Database
     â”‚                  (sub-millisecond latency)
     â”œâ”€â”€LANâ”€â”€â†’ ElastiCache Redis
     â”œâ”€â”€LANâ”€â”€â†’ SQS Queue
     â””â”€â”€LANâ”€â”€â†’ S3 Assets
```

#### Auto-Scaling Databases

Aurora Serverless v2 scales from 0 to 256 ACU (Aurora Capacity Units). Configure min/max in the Cloud dashboard or YAML. Zero capacity when paused (cost savings), resume in ~30 seconds on first request.

#### CI/CD Integration

```yaml
# .cloud/ci.yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      mysql:
        image: mysql:8.0
        env:
          MYSQL_ALLOW_EMPTY_PASSWORD: yes
          MYSQL_DATABASE: testing
    steps:
      - uses: actions/checkout@v4
      - uses: ./.cloud/actions/setup
      - run: vendor/bin/phpunit

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: cloud deploy production
```

---

### 4. Octane Performance Tuning

Laravel Octane boots your application once and keeps it in memory across requests using Swoole or RoadRunner.

#### Swoole vs RoadRunner Comparison

| Feature | Swoole | RoadRunner |
|---------|--------|------------|
| Runtime | PHP extension (swoole.so) | Go binary (standalone) |
| Concurrency model | Coroutine-based async I/O | Goroutine-per-request |
| Installation | `pecl install swoole` | Binary download, no PHP extension |
| Memory usage per worker | ~30-50 MB | ~25-40 MB |
| HTTP server | Built-in | Built-in |
| WebSocket | Native support | Via plugin |
| Task workers | Built-in | Built-in |
| Debugging | Complex (coroutine stack traces) | Easier (sync per request) |
| Maturity | Very mature | Mature, growing |

#### Starting Octane

```bash
# Swoole
php artisan octane:start --server=swoole --host=0.0.0.0 --port=8080 --workers=8

# RoadRunner
php artisan octane:start --server=roadrunner --host=0.0.0.0 --port=8080 --workers=8
```

Configure in `config/octane.php`:

```php
'workers' => env('OCTANE_WORKERS', 8),
'max_requests' => 500,
'task_workers' => env('OCTANE_TASK_WORKERS', 4),
'max_request_time' => 30,
```

#### In-Memory State Management

Octane keeps state in memory across requests. Use Octane's state management intentionally:

```php
use Laravel\Octane\Facades\Octane;

// Get or set application-level state
$counter = Octane::get('request_counter', 0);
Octane::set('request_counter', ++$counter);

// Table storage (pre-allocated fixed-size tables)
Octane::table('api_keys', 1000, 255);
Octane::table('api_keys')->set('user_1', ['key' => 'abc123', 'hits' => 0]);
```

#### Service Bootstrapping

Services that should be created once and reused across requests:

```php
// config/octane.php
'listeners' => [
    // Services to warm on boot
    \App\Services\PaymentGateway::class => fn () => app(\App\Services\PaymentGateway::class),
],

'warm' => [
    ...,
    \App\Services\PaymentGateway::class,
    \App\Services\GeocodingService::class,
    \App\Services\RecommendationEngine::class,
],
```

#### Event Listeners for Octane

Octane emits lifecycle events for connection and request management:

```php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Octane\Events\RequestReceived;
use Laravel\Octane\Events\RequestHandled;
use Laravel\Octane\Events\WorkerStarting;
use Laravel\Octane\Events\WorkerStopping;

class OctaneServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        // Runs once when each worker starts
        Event::listen(WorkerStarting::class, function ($event) {
            config(['app.worker_id' => $event->workerId]);
            Log::info("Worker {$event->workerId} starting");
        });

        // Runs before each request
        Event::listen(RequestReceived::class, function ($event) {
            $event->sandbox->singleton(
                \App\Services\CurrentRequestContext::class,
                fn () => new \App\Services\CurrentRequestContext()
            );
        });

        // Runs after each request
        Event::listen(RequestHandled::class, function ($event) {
            // Cleanup per-request state
            if ($event->sandbox->resolved(\App\Services\CurrentRequestContext::class)) {
                $event->sandbox->make(\App\Services\CurrentRequestContext::class)->reset();
            }
        });

        // Runs when worker stops
        Event::listen(WorkerStopping::class, function ($event) {
            Log::info("Worker {$event->workerId} stopping after {$event->requests} requests");
        });
    }
}
```

#### Dangerous Patterns in Octane

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                        Octane Anti-Patterns                            â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                      â”‚                                 â”‚
â”‚  Global state in static properties    â†’  Shared across requests         â”‚
â”‚  Facade with deferred resolution       â†’  Resolution happens once        â”‚
â”‚  Locally scoped cache without flush    â†’  Stale data persists forever    â”‚
â”‚  Unclosed database transactions        â†’  Held across requests           â”‚
â”‚  Memory accumulation in arrays         â†’  Worker grows over time         â”‚
â”‚  Singletons with mutable state         â†’  Corrupted by concurrent reqs  â”‚
â”‚                                                                         â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

### 5. Redis Cluster

When a single Redis instance can't keep up with memory or throughput demands, Redis Cluster distributes data across multiple nodes.

#### Redis Cluster Architecture

```
Client
  â”‚
  â”œâ”€â”€ Hash slot 0-5460   â†’ Redis Node A (master + replica)
  â”œâ”€â”€ Hash slot 5461-10922 â†’ Redis Node B (master + replica)
  â””â”€â”€ Hash slot 10923-16383 â†’ Redis Node C (master + replica)
```

Key routing uses CRC16 modulo 16384:

```
slot = CRC16("user:12345") % 16384
```

#### Configuring Laravel for Redis Cluster

```php
// config/database.php
'redis' => [
    'client' => 'phpredis',
    'options' => [
        'cluster' => 'redis',
    ],
    'clusters' => [
        'default' => [
            [
                'host' => env('REDIS_CLUSTER_HOST_1', '127.0.0.1'),
                'port' => env('REDIS_CLUSTER_PORT_1', 6379),
                'database' => 0,
            ],
            [
                'host' => env('REDIS_CLUSTER_HOST_2', '127.0.0.1'),
                'port' => env('REDIS_CLUSTER_PORT_2', 6379),
                'database' => 0,
            ],
            [
                'host' => env('REDIS_CLUSTER_HOST_3', '127.0.0.1'),
                'port' => env('REDIS_CLUSTER_PORT_3', 6379),
                'database' => 0,
            ],
        ],
    ],
],
```

#### Redis Sentinel for High Availability

Sentinel provides automatic failover:

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                   Sentinel                      â”‚
â”‚  Monitors: Node A (master), Node B (slave),     â”‚
â”‚  Node C (slave). If A fails, promote B.         â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

Laravel config connects via sentinel service:

'sentinel' => [
    'hosts' => [
        env('SENTINEL_HOST_1', '10.0.0.1:26379'),
        env('SENTINEL_HOST_2', '10.0.0.2:26379'),
        env('SENTINEL_HOST_3', '10.0.0.3:26379'),
    ],
    'service' => 'mymaster',
    'options' => [
        'parameters' => ['password' => env('REDIS_PASSWORD', '')],
    ],
],
```

#### Redis for Multiple Concerns

```php
// Separate Redis connections for different concerns
'redis' => [
    'client' => 'phpredis',
    'default' => [
        'host' => env('REDIS_HOST', '127.0.0.1'),
        'password' => env('REDIS_PASSWORD'),
        'port' => env('REDIS_PORT', 6379),
        'database' => 0, // Sessions
    ],
    'cache' => [
        'host' => env('REDIS_HOST', '127.0.0.1'),
        'password' => env('REDIS_PASSWORD'),
        'port' => env('REDIS_PORT', 6379),
        'database' => 1, // Cache
    ],
    'queue' => [
        'host' => env('REDIS_HOST', '127.0.0.1'),
        'password' => env('REDIS_PASSWORD'),
        'port' => env('REDIS_PORT', 6379),
        'database' => 2, // Queues
    ],
    'broadcast' => [
        'host' => env('REDIS_HOST', '127.0.0.1'),
        'password' => env('REDIS_PASSWORD'),
        'port' => env('REDIS_PORT', 6379),
        'database' => 3, // Broadcasting
    ],
],
```

---

### 6. Database Read Replicas

Read replicas offload SELECT queries from the primary database, preserving write capacity.

#### Read/Write Connection Separation

```php
// config/database.php
'mysql' => [
    'read' => [
        'host' => [
            env('DB_READ_HOST_1', 'replica1.example.com'),
            env('DB_READ_HOST_2', 'replica2.example.com'),
        ],
    ],
    'write' => [
        'host' => [
            env('DB_WRITE_HOST', 'primary.example.com'),
        ],
    ],
    'sticky' => env('DB_STICKY', true), // Important for replication lag
    'driver' => 'mysql',
    'database' => env('DB_DATABASE'),
    'username' => env('DB_USERNAME'),
    'password' => env('DB_PASSWORD'),
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
],
```

The `sticky` option ensures that writes are followed by reads on the same connection for the duration of the request, preventing the user from seeing stale data immediately after a write.

#### Usage Pattern

Laravel automatically routes queries:

```php
// Goes to the WRITE connection
User::create([...]);
User::where('id', 5)->update([...]);
DB::insert(...);
DB::update(...);

// Goes to a READ connection
User::find(5);
User::where('status', 'active')->get();
DB::select('SELECT * FROM users');

// Explicitly force write for stale-sensitive reads:
$user = DB::connection('mysql::write')->select('SELECT ...');
```

#### Read Replicas for Reporting and AI Queries

Heavy analytical queries should explicitly use the read connection:

```php
namespace App\Services\Reporting;

use Illuminate\Support\Facades\DB;

class RevenueReportService
{
    public function monthlyRevenueByPlan(int $year): array
    {
        return DB::connection('mysql_read')
            ->table('subscriptions')
            ->selectRaw("
                plan_id,
                MONTH(created_at) as month,
                COUNT(*) as new_subscriptions,
                SUM(amount) as revenue
            ")
            ->whereYear('created_at', $year)
            ->groupBy('plan_id', 'month')
            ->get()
            ->toArray();
    }

    public function churnRate(\Carbon\Carbon $start, \Carbon\Carbon $end): float
    {
        $result = DB::connection('mysql_read')
            ->table('subscriptions')
            ->selectRaw("
                (SELECT COUNT(*) FROM subscriptions
                 WHERE status = 'canceled'
                 AND canceled_at BETWEEN ? AND ?) * 100.0 /
                NULLIF((SELECT COUNT(*) FROM subscriptions
                 WHERE created_at < ?), 0) as churn_rate
            ", [$start, $end, $end])
            ->first();

        return round($result->churn_rate, 2);
    }
}
```

#### Replication Lag Handling

Replication lag means a read replica may be seconds behind the primary. Strategies:

| Strategy | Implementation | Trade-off |
|----------|---------------|-----------|
| `sticky` option | Session sticks to write connection after write | Extra connection per user |
| Cache-after-write | Cache the written data for immediate reads | Cache invalidation complexity |
| Route after delay | Send reads to primary for N seconds after write | Write connection overload |
| Eventually-consistent UI | Show "saving..." indicator, accept stale data | UX complexity |

```php
class SubscriptionService
{
    public function create(array $data): Subscription
    {
        $subscription = Subscription::create($data);

        // Cache the result for immediate reads
        Cache::put("subscription.{$subscription->id}", $subscription, 60);

        return $subscription;
    }

    public function find(int $id): ?Subscription
    {
        // Check cache first (written on create)
        return Cache::remember("subscription.{$id}", 60, function () use ($id) {
            return Subscription::find($id); // May lag, but cache covers it
        });
    }
}
```

---

### 7. Queue Scaling

Queue throughput determines how fast asynchronous work processes.

#### Multiple Queue Workers on Multiple Servers

```
â”Œâ”€ App Server 1 â”€â”    â”Œâ”€ Worker Pool A â”€â”
â”‚  Web requests   â”‚    â”‚  php artisan    â”‚
â”‚  + dispatch jobsâ”‚    â”‚  queue:work     â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜    â””â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                               â”‚
                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                    â”‚       Redis/SQS      â”‚
                    â”‚    (queue backend)   â”‚
                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                               â”‚
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚         Worker Pool B        â”‚       Worker Pool C      â”‚
â”‚  php artisan queue:work      â”‚  php artisan queue:work  â”‚
â”‚  --queue=high,default        â”‚  --queue=default,low     â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

Each worker server runs:

```bash
# Supervisor configuration
[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/artisan queue:work redis --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
numprocs=8
user=forge
redirect_stderr=true
stdout_logfile=/var/log/supervisor/worker.log
```

#### Horizon Balancing

Horizon provides a dashboard and auto-scaling worker configuration:

```php
// config/horizon.php
'environments' => [
    'production' => [
        'supervisor-1' => [
            'connection' => 'redis',
            'queue' => ['high', 'default', 'low'],
            'balance' => 'auto',          // Auto-balance across workers
            'autoScaling' => true,         // Scale workers based on workload
            'minProcesses' => 3,
            'maxProcesses' => 20,
            'tries' => 3,
            'timeout' => 60,
        ],
        'supervisor-2' => [
            'connection' => 'redis',
            'queue' => ['reports', 'exports'],
            'balance' => 'simple',         // Fixed worker count
            'processes' => 5,
            'tries' => 1,
            'timeout' => 600,
        ],
    ],
],
```

| Balance Strategy | Behavior | Use Case |
|-----------------|----------|----------|
| `simple` | Fixed workers per queue | Predictable load |
| `auto` | Adjusts workers by queue backlog | Variable load |
| `false` | Default round-robin | General purpose |

#### SQS for Virtually Unlimited Scale

SQS has no upper limit on throughput. Queues scale to handle any number of messages:

```php
// config/queue.php
'connections' => [
    'sqs' => [
        'driver' => 'sqs',
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'prefix' => env('SQS_PREFIX', 'https://sqs.us-east-1.amazonaws.com/your-account'),
        'queue' => env('SQS_QUEUE', 'default'),
        'suffix' => env('SQS_SUFFIX'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
        'after_commit' => false,
    ],
],
```

#### Job Prioritization

```php
// High priority
dispatch(new ProcessPayment($payment))->onQueue('high');

// Default priority
dispatch(new SendWelcomeEmail($user))->onQueue('default');

// Low priority
dispatch(new GenerateReport($report))->onQueue('low');

// Worker picks in order: high â†’ default â†’ low
php artisan queue:work redis --queue=high,default,low
```

---

### 8. CDN (Content Delivery Network)

A CDN distributes static assets geographically, reducing latency and origin server load.

#### CloudFront / Cloudflare Configuration

```
User in Tokyo
    â”‚
    â”œâ”€â”€ CloudFront Edge (Tokyo)  â”€â”€cache hitâ”€â”€â†’  User gets asset
    â”‚       â”‚
    â”‚       â””â”€â”€ cache miss
    â”‚           â”‚
    â”‚           â””â”€â”€ Origin (us-east-1 S3 / App Server)
    â”‚
    â”œâ”€â”€ CloudFront Edge (London)  â”€â”€cache hitâ”€â”€â†’  Other user
    â”‚
    â””â”€â”€ CloudFront Edge (SÃ£o Paulo)
```

Laravel Mix / Vite integration:

```js
// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        // Use absolute CDN URLs in production
        base: process.env.APP_ENV === 'production'
            ? 'https://d2u3w4c5.cloudfront.net/build/'
            : '/build/',
    },
});
```

Set CDN URLs in `.env`:

```bash
ASSET_URL=https://d2u3w4c5.cloudfront.net
MIX_ASSET_URL="${ASSET_URL}"
VITE_ASSET_URL="${ASSET_URL}"
```

#### Image Optimization Pipeline

```php
namespace App\Services\Media;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use Illuminate\Http\UploadedFile;

class ImageOptimizer
{
    public function __construct(
        private ImageManager $manager,
        private string $cdnDisk = 's3-cdn'
    ) {}

    public function optimizeAndUpload(
        UploadedFile $file,
        string $path,
        array $sizes = [
            'sm' => 320,
            'md' => 768,
            'lg' => 1200,
            'xl' => 1920,
        ]
    ): array {
        $source = $this->manager->read($file);
        $paths = [];

        foreach ($sizes as $label => $width) {
            $resized = $source->scale(width: $width);
            $filename = "{$path}/{$label}-{$file->hashName()}";

            // Optimize with 80% quality
            $encoded = (string) $resized->toWebp(quality: 80);

            Storage::disk($this->cdnDisk)->put(
                $filename,
                $encoded,
                'public'
            );

            $paths[$label] = Storage::disk($this->cdnDisk)->url($filename);
        }

        return $paths;
    }
}
```

#### CDN for Downloadable Content

Generate signed CloudFront URLs for protected content:

```php
use Illuminate\Support\Facades\Storage;

class DownloadService
{
    public function signedDownloadUrl(string $path, int $expiresInMinutes = 60): string
    {
        $disk = Storage::disk('s3');

        // CloudFront signed URL with key pair
        $client = $disk->getClient();
        $cloudFrontClient = new \Aws\CloudFront\CloudFrontClient([
            'region' => 'us-east-1',
            'version' => 'latest',
        ]);

        $resourceKey = config('filesystems.disks.s3.cdn_url') . '/' . $path;
        $expires = now()->addMinutes($expiresInMinutes)->timestamp;

        $signedUrl = $cloudFrontClient->getSignedUrl([
            'url' => $resourceKey,
            'expires' => $expires,
            'private_key' => storage_path('cloudfront-private-key.pem'),
            'key_pair_id' => config('filesystems.cloudfront_key_pair_id'),
        ]);

        return $signedUrl;
    }
}
```

---

### 9. Session Scaling

Multiple application servers must share session state.

#### Redis Session Driver

```php
// config/session.php
'driver' => 'redis',
'connection' => 'sessions',
'lifetime' => 120,
'expire_on_close' => true,
'encrypt' => true, // Encrypt session data at rest
```

#### Sticky Sessions vs Stateless Tokens

| Approach | Pro | Con |
|----------|-----|-----|
| Sticky sessions (ELB cookie) | Simple, no code changes | Uneven load, server loss kills sessions |
| Redis sessions | Even load, fault-tolerant | Redis is a dependency |
| Sanctum API tokens | Fully stateless, no server affinity | Token revocation requires a check |

#### Sanctum for Stateless Authentication

```php
// config/sanctum.php
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(
    '%s%s',
    'localhost,localhost:3000,localhost:8000,::1',
    env('APP_URL') ? ',' . parse_url(env('APP_URL'), PHP_URL_HOST) : ''
))),
```

API token authentication:

```php
// Generate token on login
$token = $user->createToken('api-token', ['read', 'write'])->plainTextToken;

// Return to client
return response()->json(['token' => $token]);

// Middleware handles verification â€” no session storage needed
// Token is hashed and stored in DB, verified on every request
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn (Request $r) => $r->user());
});
```

---

### 10. Monitoring at Scale

Without monitoring, scaling decisions are guesses.

#### Laravel Pulse

Pulse provides real-time application monitoring:

```php
// config/pulse.php
'recorders' => [
    \Laravel\Pulse\Recorders\CacheInteractions::class => [
        'enabled' => env('PULSE_CACHE_ENABLED', true),
    ],
    \Laravel\Pulse\Recorders\SlowJobs::class => [
        'enabled' => true,
        'threshold' => 1000, // ms
    ],
    \Laravel\Pulse\Recorders\SlowOutgoingRequests::class => [
        'enabled' => true,
        'threshold' => 500,
    ],
    \Laravel\Pulse\Recorders\SlowQueries::class => [
        'enabled' => true,
        'threshold' => 100, // ms
    ],
    \Laravel\Pulse\Recorders\UserRequests::class => [
        'enabled' => true,
    ],
],
```

Capture custom Pulse records:

```php
use Laravel\Pulse\Facades\Pulse;

class SubscriptionService
{
    public function create(array $data): Subscription
    {
        $start = microtime(true);

        $subscription = Subscription::create($data);

        // Record custom metric
        Pulse::record('subscription_creation_time', (microtime(true) - $start) * 1000)
            ->avg()
            ->max();

        // Increment counter per plan
        Pulse::increment('subscription_count', $data['plan_id']);

        return $subscription;
    }
}
```

#### Custom CloudWatch/Datadog Metrics

```php
namespace App\Services\Monitoring;

use Aws\CloudWatch\CloudWatchClient;

class CloudWatchMetrics
{
    public function __construct(
        private CloudWatchClient $cloudwatch
    ) {}

    public function recordQueueDepth(string $queue, int $depth): void
    {
        $this->cloudwatch->putMetricData([
            'Namespace' => 'Laravel/Production',
            'MetricData' => [
                [
                    'MetricName' => 'QueueDepth',
                    'Dimensions' => [
                        ['Name' => 'Queue', 'Value' => $queue],
                    ],
                    'Value' => $depth,
                    'Unit' => 'Count',
                    'Timestamp' => now()->toIso8601String(),
                ],
            ],
        ]);
    }

    public function recordResponseTime(float $milliseconds, string $route): void
    {
        $this->cloudwatch->putMetricData([
            'Namespace' => 'Laravel/Production',
            'MetricData' => [
                [
                    'MetricName' => 'ResponseTime',
                    'Dimensions' => [
                        ['Name' => 'Route', 'Value' => $route],
                    ],
                    'Value' => $milliseconds,
                    'Unit' => 'Milliseconds',
                ],
            ],
        ]);
    }
}
```

#### Key Metrics Dashboard

| Category | Metric | Warning | Critical | Action |
|----------|--------|---------|----------|--------|
| Traffic | Requests/min | +50% baseline | +200% baseline | Auto-scale |
| Performance | P95 response time | >500ms | >2000ms | Optimize query/route |
| Error rate | 5xx responses | >1% | >5% | Rollback or investigate |
| Queue | Backlog depth | >1000 | >10000 | Add workers |
| Database | Connection count | >80% pool | >95% pool | RDS Proxy / scale |
| Cache | Hit rate | <80% | <60% | Review cache strategy |
| Memory | PHP memory usage | >128MB/req | >256MB/req | Profile memory leaks |

#### Nightwatch for Production Errors

```php
// config/nightwatch.php
return [
    'api_key' => env('NIGHTWATCH_API_KEY'),
    'environment' => env('APP_ENV'),
    'ingest' => [
        'exceptions' => true,
        'logs' => true,
        'queries' => [
            'enabled' => true,
            'slow' => 100, // ms â€” captures slow queries
        ],
        'requests' => true,
        'schedule' => true,
        'jobs' => true,
    ],
];
```

Nightwatch captures and groups production errors with full stack traces, request context, and database queries â€” critical for post-deployment monitoring.

---

## Summary
- Horizontal scaling requires stateless application design with all shared state stored in Redis, database, or S3 â€” never in local memory or files
- Laravel Vapor abstracts server management entirely by running on AWS Lambda, with SQS queues, RDS Proxy connection pooling, and ElastiCache Redis for state
- Laravel Cloud provides a managed PaaS with LAN-connected services, auto-scaling Aurora databases, and native CI/CD integration
- Octane boots the framework once and serves thousands of requests per worker using Swoole or RoadRunner, but requires careful management of in-memory state
- Redis Cluster distributes data across multiple nodes using CRC16 hash slots, while Redis Sentinel provides automatic failover for high availability
- Database read replicas offload SELECT queries from the primary; the `sticky` option and caching strategies mitigate replication lag
- Queue workers scale by adding more servers running `queue:work`, with Horizon providing auto-balancing across queues based on backlog depth
- CDNs reduce latency and origin load by serving static assets from edge locations; signed URLs protect private downloadable content
- Session scaling requires a shared Redis backend or stateless API tokens; Sanctum tokens eliminate server affinity entirely
- Monitoring at scale requires real-time metrics from Pulse, production error tracking from Nightwatch, and custom CloudWatch/Datadog metrics for queue depth, response time, and throughput
---
## Exercises

### Review Questions

1. Explain the difference between sticky sessions and Redis-backed sessions in the context of horizontal scaling. Under what conditions would each approach fail?

2. Compare Swoole and RoadRunner as Octane backends. Why might a team choose RoadRunner over Swoole for an existing Laravel application?

3. How does RDS Proxy solve the database connection problem in serverless Laravel (Vapor)? What would happen without it when Lambda scales to 100 concurrent invocations?

4. What is the CRC16 hash slot mechanism in Redis Cluster? How does it determine which node stores a given key, and what happens when a node is added or removed?

5. Describe the difference between Laravel Pulse and Nightwatch. What type of monitoring problem does each tool solve?

### Application Problems

1. **Design a scaling strategy for a SaaS application**: A Laravel SaaS application receives 5,000 requests/second at peak, stores 2TB of user-uploaded images, has 500K active users with sessions, runs 200K queued jobs daily, and generates 50MB of logs per hour. Design the full infrastructure with specific services, instance counts, Redis memory sizing, and database topology.

2. **Configure Horizon for a multi-tenant queue**: A platform serves 50 tenants with varying traffic. Each tenant has "critical" jobs (sub-second latency needed) and "background" jobs (up to 5 minutes). Write the Horizon configuration that auto-scales workers per tenant and prioritizes critical jobs.

3. **Implement replication-lag-safe reporting**: A reporting module queries subscription data for CEO-facing dashboards. The data must be no more than 30 seconds stale. The application grows at 10K new subscriptions per hour. Design and implement the query strategy using read replicas with a fallback mechanism that switches to the primary when lag exceeds the threshold.

### Challenge Problem

A rapidly growing Laravel marketplace handles 50,000 orders per hour, 2 million product views per day, and serves users across North America, Europe, and Asia. The current architecture is a single large server with a monolith codebase.

Design a complete scaling architecture that includes:

- Multi-region active-active deployment with read replicas in each region
- A global Redis Cluster handling sessions, cache, queues, and rate limiting
- An Octane-powered web tier with 16 workers per node across 10 nodes per region
- SQS queues with tiered job prioritization (real-time inventory > order processing > email notifications > analytics aggregation)
- CloudFront CDN for product images with WebP conversion pipeline
- A CloudWatch-based dashboard monitoring P50/P95/P99 latency, error rate, queue backlog per priority tier, cache hit rate per region, and database connection pool utilization across all read replicas

Provide the specific configuration files (database.php, horizon.php, octane.php, vapor.yml, cloud.yaml), the server count per region based on throughput estimates, Redis memory sizing, database connection pooling calculations, and the monitoring dashboard layout with threshold alarms.