# 🏗 STAGE 1A — Laravel Advanced Mastery

> **Level:** Intermediate → Advanced  
> **Duration:** 2–3 Weeks  
> **Prerequisites:** Basic Laravel (Routes, Controllers, Models, Blade)

---

## 📋 Table of Contents

1. [Queues & Jobs — Async Processing](#1-queues--jobs--async-processing)
2. [Events & Listeners — Decoupled Architecture](#2-events--listeners--decoupled-architecture)
3. [Broadcasting & WebSockets — Real-Time Apps](#3-broadcasting--websockets--real-time-apps)
4. [Task Scheduling — Cron on Steroids](#4-task-scheduling--cron-on-steroids)
5. [Service Container & Dependency Injection](#5-service-container--dependency-injection)
6. [Service Providers — Application Bootstrap](#6-service-providers--application-bootstrap)
7. [Repository Pattern](#7-repository-pattern)
8. [Action Classes — Single Responsibility](#8-action-classes--single-responsibility)
9. [Laravel Multi-Tenancy](#9-laravel-multi-tenancy)
10. [Performance Optimization](#10-performance-optimization)

---

## 1. Queues & Jobs — Async Processing

### 🧠 What Are Queues?

Queues allow you to defer time-consuming tasks (sending emails, processing uploads, calling APIs) to background workers. This keeps your web requests fast.

### Why This Matters

Without queues:
```
User Request → Send Email (3 seconds) → Response
Total: 3+ seconds for user
```

With queues:
```
User Request → Dispatch Job → Response (instant)
Background Worker → Send Email (whenever)
Total: <200ms for user
```

### Basic Setup

**1. Configure queue driver in `.env`:**
```env
QUEUE_CONNECTION=redis
```

Available drivers: `sync`, `database`, `redis`, `sqs`, `beanstalkd`

> **💡 Tip:** Use `redis` for production. Use `sync` for development/testing.

**2. Create a Job:**
```bash
php artisan make:job ProcessPodcastUpload
```

**3. Job Class Structure:**
```php
<?php

namespace App\Jobs;

use App\Models\Podcast;
use App\Services\AudioProcessor;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessPodcastUpload implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    // Number of retry attempts
    public $tries = 3;

    // Timeout in seconds
    public $timeout = 120;

    // Backoff between retries (seconds)
    public $backoff = [10, 30, 60];

    public function __construct(
        public Podcast $podcast
    ) {}

    public function handle(AudioProcessor $processor): void
    {
        // This runs in the background
        $processor->process($this->podcast);

        $this->podcast->update(['status' => 'processed']);
    }

    // Called when all retries fail
    public function failed(\Throwable $exception): void
    {
        \Log::error("Podcast processing failed: {$exception->getMessage()}");
        $this->podcast->update(['status' => 'failed']);
    }
}
```

**4. Dispatching Jobs:**
```php
// From a controller
ProcessPodcastUpload::dispatch($podcast);

// With delay
ProcessPodcastUpload::dispatch($podcast)->delay(now()->addMinutes(5));

// To specific queue
ProcessPodcastUpload::dispatch($podcast)->onQueue('audio-processing');

// Chain jobs (run sequentially)
Bus::chain([
    new ProcessPodcastUpload($podcast),
    new GenerateThumbnail($podcast),
    new NotifySubscribers($podcast),
])->dispatch();
```

**5. Running the Worker:**
```bash
# Development
php artisan queue:work

# Production (specific queue, with retries)
php artisan queue:work redis --queue=audio-processing --tries=3 --timeout=120

# Using Supervisor (production — keeps worker alive)
```

### Supervisor Configuration (Production)

```ini
[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/html/artisan queue:work redis --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=4
redirect_stderr=true
stdout_logfile=/var/www/html/storage/logs/worker.log
stopwaitsecs=3600
```

### Job Batching (Advanced)
```php
use Illuminate\Bus\Batch;
use Illuminate\Support\Facades\Bus;

$batch = Bus::batch([
    new ImportCsvChunk($chunk1),
    new ImportCsvChunk($chunk2),
    new ImportCsvChunk($chunk3),
])->then(function (Batch $batch) {
    // All jobs completed successfully
})->catch(function (Batch $batch, \Throwable $e) {
    // First batch job failure
})->finally(function (Batch $batch) {
    // Batch finished (success or fail)
})->name('CSV Import')
  ->allowFailures()
  ->dispatch();
```

### Queue Priority
```bash
# Process 'high' queue first, then 'default', then 'low'
php artisan queue:work --queue=high,default,low
```

### 🎯 Practice Tasks
- [ ] Build email sending with queues
- [ ] Create a CSV import job with batching
- [ ] Set up Supervisor on a VPS
- [ ] Implement job retry with exponential backoff
- [ ] Build a failed job dashboard

---

## 2. Events & Listeners — Decoupled Architecture

### 🧠 What Are Events?

Events decouple your application logic. Instead of directly calling multiple services from a controller, you fire an event and let listeners handle different concerns.

### Without Events (Tightly Coupled — BAD):
```php
public function register(Request $request)
{
    $user = User::create($request->validated());

    // All these are tightly coupled here
    Mail::send(new WelcomeEmail($user));
    $this->analyticsService->track('registration', $user);
    $this->slackNotifier->notify("New user: {$user->email}");
    $this->referralService->processReferral($user);
}
```

### With Events (Decoupled — GOOD):
```php
public function register(Request $request)
{
    $user = User::create($request->validated());

    // Fire event — listeners handle everything else
    event(new UserRegistered($user));
}
```

### Implementation

**1. Create Event:**
```bash
php artisan make:event UserRegistered
```

```php
<?php

namespace App\Events;

use App\Models\User;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UserRegistered
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public User $user
    ) {}
}
```

**2. Create Listeners:**
```bash
php artisan make:listener SendWelcomeEmail --event=UserRegistered
php artisan make:listener TrackRegistration --event=UserRegistered
php artisan make:listener NotifySlack --event=UserRegistered
```

```php
<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use App\Mail\WelcomeEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendWelcomeEmail implements ShouldQueue
{
    public function handle(UserRegistered $event): void
    {
        Mail::to($event->user->email)
            ->send(new WelcomeEmail($event->user));
    }
}
```

**3. Register in EventServiceProvider:**
```php
protected $listen = [
    UserRegistered::class => [
        SendWelcomeEmail::class,
        TrackRegistration::class,
        NotifySlack::class,
    ],
];
```

### Model Observers (Event Shortcut)
```php
// app/Observers/UserObserver.php
class UserObserver
{
    public function created(User $user): void
    {
        // Runs after a user is created
        AuditLog::create([
            'action' => 'user_created',
            'model_type' => 'User',
            'model_id' => $user->id,
        ]);
    }

    public function updated(User $user): void
    {
        if ($user->isDirty('email')) {
            // Email changed — reverify
            $user->email_verified_at = null;
            $user->saveQuietly(); // Save without triggering observers again
        }
    }

    public function deleted(User $user): void
    {
        // Cleanup related data
        $user->files()->delete();
        Storage::deleteDirectory("users/{$user->id}");
    }
}
```

### 🎯 Practice Tasks
- [ ] Create UserRegistered event with 3 listeners
- [ ] Implement OrderPlaced event for an e-commerce flow
- [ ] Build audit logging with Model Observers
- [ ] Create queued listeners for heavy operations

---

## 3. Broadcasting & WebSockets — Real-Time Apps

### 🧠 Why Broadcasting?

Broadcasting enables real-time features like:
- Live notifications
- Chat systems
- Real-time dashboards
- Collaborative editing
- Live activity feeds

### Architecture
```
Laravel → Event → Redis/Pusher → WebSocket Server → Browser (JavaScript)
```

### Setup with Laravel Reverb (Built-in, Free)

**1. Install Reverb:**
```bash
php artisan install:broadcasting
```

**2. Configure `.env`:**
```env
BROADCAST_CONNECTION=reverb
REVERB_APP_ID=my-app
REVERB_APP_KEY=my-key
REVERB_APP_SECRET=my-secret
REVERB_HOST=localhost
REVERB_PORT=8080
```

**3. Create a Broadcast Event:**
```php
<?php

namespace App\Events;

use App\Models\Message;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;

class NewMessage implements ShouldBroadcast
{
    use InteractsWithSockets, SerializesModels;

    public function __construct(
        public Message $message
    ) {}

    // Public channel (anyone can listen)
    public function broadcastOn(): Channel
    {
        return new PrivateChannel("chat.{$this->message->room_id}");
    }

    // What data to send to the client
    public function broadcastWith(): array
    {
        return [
            'id' => $this->message->id,
            'body' => $this->message->body,
            'user' => $this->message->user->name,
            'created_at' => $this->message->created_at->toISOString(),
        ];
    }
}
```

**4. Channel Authorization:**
```php
// routes/channels.php
Broadcast::channel('chat.{roomId}', function (User $user, int $roomId) {
    return $user->rooms()->where('id', $roomId)->exists();
});
```

**5. Frontend (JavaScript):**
```javascript
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT,
    forceTLS: false,
    enabledTransports: ['ws'],
});

// Listen for messages
Echo.private(`chat.${roomId}`)
    .listen('NewMessage', (event) => {
        console.log('New message:', event.body);
        addMessageToChat(event);
    });
```

### 🎯 Practice Tasks
- [ ] Build a real-time notification system
- [ ] Create a simple chat application
- [ ] Build a live dashboard with auto-updating stats

---

## 4. Task Scheduling — Cron on Steroids

### 🧠 What Is Task Scheduling?

Instead of managing dozens of cron entries on the server, Laravel lets you define all scheduled tasks in code.

**Server cron (only one needed):**
```
* * * * * cd /var/www/html && php artisan schedule:run >> /dev/null 2>&1
```

### Defining Schedules

```php
// app/Console/Kernel.php
protected function schedule(Schedule $schedule): void
{
    // Daily database backup at 2 AM
    $schedule->command('backup:run')
        ->dailyAt('02:00')
        ->onOneServer()       // Only run on one server in a cluster
        ->withoutOverlapping() // Don't run if previous is still running
        ->emailOutputOnFailure('admin@example.com');

    // Hourly report generation
    $schedule->job(new GenerateReport)
        ->hourly()
        ->between('8:00', '22:00') // Only during business hours
        ->environments(['production']);

    // Clear old temp files every week
    $schedule->command('temp:clean')
        ->weekly()
        ->sundays()
        ->at('03:00');

    // Run closure every 5 minutes
    $schedule->call(function () {
        Cache::flush();
    })->everyFiveMinutes();

    // Custom frequency
    $schedule->command('analytics:process')
        ->cron('0 */4 * * *'); // Every 4 hours
}
```

### Schedule Frequency Options
```
->everyMinute()      ->everyTwoMinutes()   ->everyFiveMinutes()
->everyTenMinutes()  ->everyFifteenMinutes() ->everyThirtyMinutes()
->hourly()           ->daily()              ->weekly()
->monthly()          ->quarterly()          ->yearly()
->weekdays()         ->weekends()           ->sundays() ->mondays()
->dailyAt('13:00')   ->twiceDaily(1, 13)    ->twiceMonthly(1, 16)
```

### 🎯 Practice Tasks
- [ ] Schedule daily database cleanup
- [ ] Create scheduled report generation
- [ ] Implement health check ping

---

## 5. Service Container & Dependency Injection

### 🧠 What Is It?

The Service Container is Laravel's IoC (Inversion of Control) container. It resolves class dependencies automatically.

### Without Container (Manual — BAD):
```php
class OrderController
{
    public function store()
    {
        $stripe = new StripeGateway(config('services.stripe.key'));
        $logger = new FileLogger('/var/log/orders.log');
        $mailer = new SmtpMailer(config('mail'));

        $service = new OrderService($stripe, $logger, $mailer);
        $service->process($request->all());
    }
}
```

### With Container (Automatic — GOOD):
```php
class OrderController
{
    public function store(OrderService $service, Request $request)
    {
        // Laravel resolves OrderService and all its dependencies automatically
        $service->process($request->validated());
    }
}
```

### Binding in Service Provider
```php
// app/Providers/AppServiceProvider.php
public function register(): void
{
    // Interface binding — swap implementations easily
    $this->app->bind(
        PaymentGatewayInterface::class,
        StripeGateway::class
    );

    // Singleton — same instance everywhere
    $this->app->singleton(AnalyticsService::class, function ($app) {
        return new AnalyticsService(
            config('services.analytics.key')
        );
    });

    // Contextual binding
    $this->app->when(OrderService::class)
        ->needs(PaymentGatewayInterface::class)
        ->give(StripeGateway::class);

    $this->app->when(SubscriptionService::class)
        ->needs(PaymentGatewayInterface::class)
        ->give(PayPalGateway::class);
}
```

### 🎯 Practice Tasks
- [ ] Create interface + implementation binding
- [ ] Build a payment gateway with swappable implementations
- [ ] Use contextual binding for different services

---

## 6. Service Providers — Application Bootstrap

### 🧠 What Are Service Providers?

Service Providers are the central place of all Laravel application bootstrapping. They register bindings, event listeners, middleware, routes, and more.

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AIServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Bind AI services
        $this->app->singleton(AIClient::class, function ($app) {
            return new AIClient(
                apiKey: config('services.openai.key'),
                model: config('services.openai.model', 'gpt-4'),
            );
        });
    }

    public function boot(): void
    {
        // Publish configuration
        $this->publishes([
            __DIR__.'/../config/ai.php' => config_path('ai.php'),
        ], 'ai-config');

        // Register commands
        if ($this->app->runningInConsole()) {
            $this->commands([
                TrainModelCommand::class,
                SyncEmbeddingsCommand::class,
            ]);
        }
    }
}
```

---

## 7. Repository Pattern

### 🧠 Why Repository Pattern?

Separates data access logic from business logic. Makes your code testable and database-agnostic.

### Interface
```php
<?php

namespace App\Repositories\Contracts;

use App\Models\User;
use Illuminate\Pagination\LengthAwarePaginator;

interface UserRepositoryInterface
{
    public function findById(int $id): ?User;
    public function findByEmail(string $email): ?User;
    public function paginate(int $perPage = 15, array $filters = []): LengthAwarePaginator;
    public function create(array $data): User;
    public function update(int $id, array $data): User;
    public function delete(int $id): bool;
}
```

### Implementation
```php
<?php

namespace App\Repositories;

use App\Models\User;
use App\Repositories\Contracts\UserRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;

class EloquentUserRepository implements UserRepositoryInterface
{
    public function __construct(
        protected User $model
    ) {}

    public function findById(int $id): ?User
    {
        return $this->model->find($id);
    }

    public function findByEmail(string $email): ?User
    {
        return $this->model->where('email', $email)->first();
    }

    public function paginate(int $perPage = 15, array $filters = []): LengthAwarePaginator
    {
        $query = $this->model->query();

        if (!empty($filters['search'])) {
            $query->where(function ($q) use ($filters) {
                $q->where('name', 'like', "%{$filters['search']}%")
                  ->orWhere('email', 'like', "%{$filters['search']}%");
            });
        }

        if (!empty($filters['role'])) {
            $query->where('role', $filters['role']);
        }

        return $query->latest()->paginate($perPage);
    }

    public function create(array $data): User
    {
        return $this->model->create($data);
    }

    public function update(int $id, array $data): User
    {
        $user = $this->findById($id);
        $user->update($data);
        return $user->fresh();
    }

    public function delete(int $id): bool
    {
        return $this->model->destroy($id) > 0;
    }
}
```

### Controller Usage
```php
class UserController extends Controller
{
    public function __construct(
        protected UserRepositoryInterface $users
    ) {}

    public function index(Request $request)
    {
        $users = $this->users->paginate(
            perPage: $request->integer('per_page', 15),
            filters: $request->only(['search', 'role'])
        );

        return response()->json($users);
    }
}
```

---

## 8. Action Classes — Single Responsibility

### 🧠 Why Actions?

When your controller method does 10+ things, extract each into an Action class. Each action does exactly one thing.

```php
<?php

namespace App\Actions;

use App\Models\User;
use App\Models\Subscription;
use App\Events\UserRegistered;
use Illuminate\Support\Facades\Hash;

class CreateUserAction
{
    public function execute(array $data): User
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        // Assign default role
        $user->assignRole('user');

        // Create free trial subscription
        Subscription::create([
            'user_id' => $user->id,
            'plan' => 'trial',
            'expires_at' => now()->addDays(14),
        ]);

        // Fire event
        event(new UserRegistered($user));

        return $user;
    }
}
```

### Controller becomes ultra-clean:
```php
public function register(RegisterRequest $request, CreateUserAction $action)
{
    $user = $action->execute($request->validated());

    return response()->json([
        'user' => $user,
        'token' => $user->createToken('auth')->plainTextToken,
    ], 201);
}
```

---

## 9. Laravel Multi-Tenancy

### 🧠 What Is Multi-Tenancy?

One codebase serving multiple clients (tenants). Each tenant has isolated data.

### Using stancl/tenancy
```bash
composer require stancl/tenancy
php artisan tenancy:install
```

### Approaches

| Approach | Description | Best For |
|----------|-------------|----------|
| **Database per tenant** | Each tenant has its own database | Full data isolation |
| **Schema per tenant** | Same database, separate schemas | PostgreSQL |
| **Column per tenant** | Same tables, `tenant_id` column | Small apps |

### Basic Setup
```php
// Tenant model
class Tenant extends BaseTenant
{
    use HasDomains;

    public static function getCustomColumns(): array
    {
        return ['id', 'name', 'email', 'plan'];
    }
}
```

### 🎯 Practice Tasks
- [ ] Set up stancl/tenancy in a Laravel project
- [ ] Create tenant CRUD with domain management
- [ ] Implement tenant-aware middleware

---

## 10. Performance Optimization

### Eager Loading (N+1 Problem)
```php
// BAD — N+1 queries
$posts = Post::all();
foreach ($posts as $post) {
    echo $post->author->name; // 1 query per post!
}

// GOOD — 2 queries total
$posts = Post::with('author')->get();
foreach ($posts as $post) {
    echo $post->author->name; // No extra query
}

// Nested eager loading
$posts = Post::with(['author', 'comments.user', 'tags'])->get();
```

### Query Optimization
```php
// Use select to limit columns
User::select('id', 'name', 'email')->get();

// Use chunk for large datasets
User::chunk(1000, function ($users) {
    foreach ($users as $user) {
        // Process
    }
});

// Use lazy() for memory efficiency
User::lazy()->each(function ($user) {
    // Process one at a time
});

// Database indexing
Schema::table('orders', function (Blueprint $table) {
    $table->index('user_id');
    $table->index(['status', 'created_at']);
    $table->index('email'); // For frequently searched columns
});
```

### Caching Strategies
```php
// Cache database queries
$users = Cache::remember('active-users', 3600, function () {
    return User::where('active', true)->get();
});

// Cache tags (Redis only)
Cache::tags(['users'])->put("user:{$id}", $user, 3600);
Cache::tags(['users'])->flush(); // Clear all user caches

// Route caching (production)
php artisan route:cache
php artisan config:cache
php artisan view:cache
```

---

## 📚 Resources

- [Laravel Official Documentation](https://laravel.com/docs)
- [Laravel Best Practices](https://github.com/alexeymezenin/laravel-best-practices)
- [Laracasts — Laravel Series](https://laracasts.com)

---

*Next: [API Design & Clean Architecture →](./02_API_DESIGN.md)*
