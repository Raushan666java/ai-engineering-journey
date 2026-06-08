# Queues in Laravel

Queues allow you to defer the processing of time-consuming tasks, such as sending emails, generating reports, or processing uploads, until a later time. This can significantly speed up web requests to your application.

## Queue Configuration

### Basic Configuration

Queue configuration is stored in `config/queue.php`. Laravel supports several queue drivers out of the box:

```php
'default' => env('QUEUE_CONNECTION', 'sync'),

'connections' => [
    'sync' => [
        'driver' => 'sync',
    ],
    
    'database' => [
        'driver' => 'database',
        'table' => 'jobs',
        'queue' => 'default',
        'retry_after' => 90,
        'after_commit' => false,
    ],
    
    'redis' => [
        'driver' => 'redis',
        'connection' => 'default',
        'queue' => env('REDIS_QUEUE', 'default'),
        'retry_after' => 90,
        'block_for' => null,
        'after_commit' => false,
    ],
    
    // Other drivers: beanstalkd, sqs, etc.
]
```

### Database Setup

If using the database driver, you need to create the jobs table:

```bash
php artisan queue:table
php artisan migrate
```

## Creating Jobs

### Generating Job Classes

```bash
# Generate a new job class
php artisan make:job ProcessPodcast

# Generate a job that should be queued (implements ShouldQueue)
php artisan make:job ProcessPodcast --queued
```

### Job Structure

```php
<?php

namespace App\Jobs;

use App\Models\Podcast;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessPodcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $podcast;

    /**
     * Create a new job instance.
     */
    public function __construct(Podcast $podcast)
    {
        $this->podcast = $podcast;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // Process the podcast...
    }
}
```

### Job Traits

- **Dispatchable**: Allows the job to be dispatched using static methods
- **InteractsWithQueue**: Provides methods to interact with the queue
- **Queueable**: Allows the job to be pushed onto queues
- **SerializesModels**: Serializes Eloquent models to prevent full database serialization

## Dispatching Jobs

### Basic Dispatch

```php
// Dispatch a job
ProcessPodcast::dispatch($podcast);

// Alternative syntax
dispatch(new ProcessPodcast($podcast));
```

### Delayed Dispatch

```php
// Delay job execution
ProcessPodcast::dispatch($podcast)->delay(now()->addMinutes(10));
```

### Customizing Queue and Connection

```php
// Specify queue
ProcessPodcast::dispatch($podcast)->onQueue('processing');

// Specify connection
ProcessPodcast::dispatch($podcast)->onConnection('redis');

// Combine both
ProcessPodcast::dispatch($podcast)
    ->onConnection('redis')
    ->onQueue('processing');
```

### Job Chaining

```php
ProcessPodcast::withChain([
    new OptimizePodcast($podcast),
    new ReleasePodcast($podcast),
])->dispatch($podcast);
```

### Conditional Dispatch

```php
ProcessPodcast::dispatchIf($condition, $podcast);
ProcessPodcast::dispatchUnless($condition, $podcast);
```

### Synchronous Dispatch

```php
// Run job immediately (not queued)
ProcessPodcast::dispatchSync($podcast);
```

## Job Middleware

Job middleware allow you to wrap custom logic around the execution of queued jobs:

```php
<?php

namespace App\Jobs\Middleware;

use Illuminate\Support\Facades\Redis;

class RateLimited
{
    /**
     * Process the queued job.
     */
    public function handle($job, $next)
    {
        Redis::throttle('key')
            ->block(0)->allow(1)->every(5)
            ->then(function () use ($job, $next) {
                // Job can be processed...
                $next($job);
            }, function () use ($job) {
                // Could not obtain lock...
                $job->release(5);
            });
    }
}
```

### Using Middleware in Jobs

```php
use App\Jobs\Middleware\RateLimited;

class ProcessPodcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    /**
     * Get the middleware the job should pass through.
     */
    public function middleware(): array
    {
        return [new RateLimited];
    }
    
    // ...
}
```

## Running Queue Workers

### Starting a Worker

```bash
# Basic worker
php artisan queue:work

# Specify connection
php artisan queue:work redis

# Specify queue
php artisan queue:work redis --queue=high,default

# Process only one job
php artisan queue:work --once

# Set memory limit and timeout
php artisan queue:work --memory=1024 --timeout=60
```

### Worker Options

- `--queue=high,default`: Process specific queues in order of priority
- `--daemon`: Keep the worker running in the background
- `--sleep=3`: Sleep for 3 seconds when no jobs are available
- `--tries=3`: Number of times to attempt a job before marking it as failed
- `--backoff=3`: Number of seconds to wait before retrying a job
- `--max-time=3600`: Maximum number of seconds a worker should run
- `--max-jobs=1000`: Maximum number of jobs to process before stopping
- `--stop-when-empty`: Stop when the queue is empty

### Supervisor Configuration

For production, you should use Supervisor to keep your queue workers running:

```ini
[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /path/to/artisan queue:work redis --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=forge
numprocs=8
redirect_stderr=true
stdout_logfile=/path/to/worker.log
stopwaitsecs=3600
```

## Job Batching

Job batching allows you to group related jobs and perform actions when all jobs in the batch have completed:

### Database Setup

```bash
php artisan queue:batches-table
php artisan migrate
```

### Creating and Dispatching Batches

```php
use Illuminate\Bus\Batch;
use Illuminate\Support\Facades\Bus;
use App\Jobs\ProcessPodcast;
use Throwable;

$batch = Bus::batch([
    new ProcessPodcast(1),
    new ProcessPodcast(2),
    new ProcessPodcast(3),
])->then(function (Batch $batch) {
    // All jobs completed successfully...
})->catch(function (Batch $batch, Throwable $e) {
    // First batch job failure detected...
})->finally(function (Batch $batch) {
    // The batch has finished executing...
})->dispatch();

// Get batch ID for tracking
$batchId = $batch->id;
```

### Tracking Batches

```php
use Illuminate\Support\Facades\Bus;

$batch = Bus::findBatch($batchId);

// Get batch progress
$batch->progress(); // 0 - 100

// Check batch status
$batch->finished();
$batch->cancelled();
$batch->hasPendingJobs();
$batch->hasFailures();
$batch->failedJobs;
$batch->processedJobs();
$batch->totalJobs;
```

## Handling Failed Jobs

### Defining Failure Behavior

```php
<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Throwable;

class ProcessPodcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    /**
     * The number of times the job may be attempted.
     */
    public $tries = 3;
    
    /**
     * The maximum number of unhandled exceptions to allow before failing.
     */
    public $maxExceptions = 3;
    
    /**
     * The number of seconds to wait before retrying the job.
     */
    public $backoff = 3;
    
    /**
     * Calculate the number of seconds to wait before retrying the job.
     */
    public function backoff(): array
    {
        return [1, 5, 10]; // Progressive backoff
    }
    
    /**
     * Determine the time at which the job should timeout.
     */
    public function retryUntil(): \DateTime
    {
        return now()->addHours(12);
    }
    
    /**
     * Handle a job failure.
     */
    public function failed(Throwable $exception): void
    {
        // Send notification, log error, etc.
    }
}
```

### Failed Job Events

```php
// In EventServiceProvider
protected $listen = [
    'Illuminate\Queue\Events\JobFailed' => [
        'App\Listeners\LogFailedJob',
    ],
];
```

### Failed Job Database

```bash
# Create failed jobs table
php artisan queue:failed-table
php artisan migrate

# List failed jobs
php artisan queue:failed

# Retry a specific failed job
php artisan queue:retry 5

# Retry all failed jobs
php artisan queue:retry all

# Delete a failed job
php artisan queue:forget 5

# Delete all failed jobs
php artisan queue:flush
```

## Queue Events

Laravel dispatches several events during the queue lifecycle:

```php
// In EventServiceProvider
protected $listen = [
    'Illuminate\Queue\Events\JobProcessing' => [
        'App\Listeners\LogJobProcessing',
    ],
    'Illuminate\Queue\Events\JobProcessed' => [
        'App\Listeners\LogJobProcessed',
    ],
    'Illuminate\Queue\Events\JobFailed' => [
        'App\Listeners\LogFailedJob',
    ],
    'Illuminate\Queue\Events\WorkerStopping' => [
        'App\Listeners\LogWorkerStopping',
    ],
];
```

## Rate Limiting

### Rate Limiting Jobs

```php
use Illuminate\Support\Facades\Redis;

Redis::throttle('key')->allow(10)->every(60)->then(function () {
    // Job logic...
}, function () {
    // Could not obtain lock...
    return $this->release(10);
});
```

### Time-Based Rate Limiting

```php
Redis::funnel('key')->limit(1)->then(function () {
    // Job logic...
}, function () {
    // Could not obtain lock...
    return $this->release(10);
});
```

## Horizon (Redis Queue Dashboard)

Laravel Horizon provides a beautiful dashboard for your Redis queues:

```bash
# Install Horizon
composer require laravel/horizon

# Publish assets
php artisan horizon:install

# Start Horizon
php artisan horizon
```

### Horizon Configuration

```php
// config/horizon.php
'environments' => [
    'production' => [
        'supervisor-1' => [
            'connection' => 'redis',
            'queue' => ['default'],
            'balance' => 'simple',
            'processes' => 10,
            'tries' => 3,
        ],
    ],
    'local' => [
        'supervisor-1' => [
            'connection' => 'redis',
            'queue' => ['default'],
            'balance' => 'simple',
            'processes' => 3,
            'tries' => 3,
        ],
    ],
],
```

## Best Practices

1. **Keep Jobs Small and Focused**: Each job should have a single responsibility
2. **Make Jobs Idempotent**: Jobs should be safely re-runnable
3. **Handle Failures Gracefully**: Implement proper error handling and retry logic
4. **Set Appropriate Timeouts**: Prevent jobs from running too long
5. **Use Job Batching** for related tasks that need coordination
6. **Monitor Queue Performance**: Use Horizon or other monitoring tools
7. **Use Different Queues** for different types of jobs (e.g., emails, reports)
8. **Implement Rate Limiting** for resource-intensive jobs
9. **Clean Up Resources**: Release any resources in the job's `failed` method
10. **Test Your Jobs**: Write tests for your job logic

## Common Use Cases

### Email Sending

```php
<?php

namespace App\Jobs;

use App\Mail\WelcomeEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendWelcomeEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user;

    public function __construct($user)
    {
        $this->user = $user;
    }

    public function handle()
    {
        Mail::to($this->user->email)->send(new WelcomeEmail($this->user));
    }
}
```

### File Processing

```php
<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class ProcessUploadedImage implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $path;

    public function __construct($path)
    {
        $this->path = $path;
    }

    public function handle()
    {
        $image = Image::make(Storage::path($this->path));
        
        // Create thumbnail
        $image->fit(300, 300)
              ->save(Storage::path('thumbnails/' . basename($this->path)));
              
        // Create medium size
        $image->fit(600, 600)
              ->save(Storage::path('medium/' . basename($this->path)));
    }
}
```

### Webhook Processing

```php
<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;

class ProcessWebhook implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $payload;
    protected $webhookUrl;

    public function __construct($payload, $webhookUrl)
    {
        $this->payload = $payload;
        $this->webhookUrl = $webhookUrl;
    }

    public function handle()
    {
        $response = Http::post($this->webhookUrl, $this->payload);
        
        if ($response->failed()) {
            throw new \Exception('Webhook failed: ' . $response->body());
        }
    }
}
```

## References

- [Laravel Queues Documentation](https://laravel.com/docs/12.x/queues)
- [Laravel Horizon Documentation](https://laravel.com/docs/12.x/horizon)
- [Laravel Job Batching](https://laravel.com/docs/12.x/queues#job-batching)