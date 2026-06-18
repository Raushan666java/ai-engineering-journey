# Chapter 9: Service Container, Facades & Package Development

---

## Learning Objectives

- Master the Laravel service container for dependency injection, interface binding, contextual resolution, and extension
- Design and implement service providers with proper registration, booting, deferral, and ordering
- Understand facade architecture, real-time facades, and the trade-offs between facades and dependency injection
- Build distributable Laravel packages with config publishing, migrations, views, routes, and Artisan commands
- Create custom Artisan commands with complex input, output formatting, and progress feedback
- Schedule tasks, manage overlapping prevention, and leverage Laravel's concurrency primitives

---

## Theory

![Service Container and Packages](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/09-container-packages.png)


### Service Container Deep Dive

The service container manages class dependencies and performs automatic resolution.

**`bind()`** registers a concrete implementation; every resolution creates a new instance:

```php
$this->app->bind(PaymentGateway::class, StripePaymentGateway::class);

$this->app->bind(PaymentGateway::class, function (Application $app) {
    return new StripePaymentGateway(config('services.stripe.secret'));
});
```

**`singleton()`** returns the same instance on every resolution:

```php
$this->app->singleton(PaymentGateway::class, StripePaymentGateway::class);
```

**`instance()`** registers a pre-built object:

```php
$this->app->instance(PaymentGateway::class, $gateway);
// Useful in tests:
$this->app->instance(PaymentGateway::class, $mockGateway);
```

**Tagged binding** groups multiple bindings:

```php
$this->app->tag([ReportPdfGenerator::class, ReportCsvGenerator::class], 'report-generators');

$this->app->tagged('report-generators')->each(function (ReportGenerator $gen) {
    $gen->setFormat($format);
});
```

**Contextual binding** provides different implementations per class:

```php
$this->app->when(PhotoController::class)
    ->needs(FileStorage::class)
    ->give(fn() => new S3Storage(config('filesystems.disks.s3')));

$this->app->when(UserAvatarController::class)
    ->needs(FileStorage::class)
    ->give(fn() => new LocalStorage(storage_path('app/avatars')));

$this->app->when(ReportGenerator::class)
    ->needs('$maxRetries')
    ->give(3);
```

**`extend()`** wraps a resolved instance with a decorator:

```php
$this->app->extend(PaymentGateway::class, function (PaymentGateway $gateway, Application $app) {
    return new LoggingPaymentGateway($gateway);
});
```

**Container events** fire during resolution:

```php
$this->app->resolving(PaymentGateway::class, function ($gateway, $app) { /* ... */ });
$this->app->afterResolving(PaymentGateway::class, function ($gateway, $app) { /* ... */ });
```

### Service Providers

Providers bootstrap all framework components through two phases:

1. **`register()`** â€” Only container bindings. Never use events, routes, or middleware here.
2. **`boot()`** â€” Runs after all providers are registered. Safe to use registered services.

```php
class PaymentServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(PaymentGateway::class, fn($app) => new StripePaymentGateway(config('services.stripe.secret')));
    }

    public function boot(): void
    {
        RateLimiter::for('payments', fn() => Limit::perMinute(30));
    }

    public function provides(): array
    {
        return [PaymentGateway::class];
    }
}
```

**Deferrable providers** load only when their services are requested:

```php
class PaymentServiceProvider extends ServiceProvider implements DeferrableProvider
{
    public function register(): void
    {
        $this->app->singleton(PaymentGateway::class, StripePaymentGateway::class);
    }

    public function provides(): array
    {
        return [PaymentGateway::class];
    }
}
```

### Facades

Facades provide a static-like interface to container bindings.

**How they work:**

```php
class Cache extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return 'cache';
    }
}

// Cache::get('key') resolves to:
$resolved = app('cache');
$resolved->get('key');
```

**Real-time facades** turn any class into a facade by prefixing with `Facades\`:

```php
use Facades\App\Services\PaymentService;

PaymentService::charge(5000);
```

**Facade vs DI trade-offs:**

| Aspect          | Facade                          | Dependency Injection          |
|-----------------|---------------------------------|-------------------------------|
| Testing         | `Facade::shouldReceive`         | Mock via container swap       |
| IDE support     | Limited without IDE helper      | Full autocomplete             |
| Explicit dependency | Hidden                      | Explicit constructor param    |
| Convenience     | Very high                       | Requires manual wiring        |

Use facades for framework utilities (Cache, Log, Redis). Use DI for custom domain services.

**Common facades:** `Route`, `DB`, `Cache`, `Redis`, `Queue`, `Bus`, `Event`, `Log`, `Mail`, `Notification`, `Auth`, `Hash`, `Storage`, `Validator`, `File`.

### Package Development

**Package discovery** in `composer.json`:

```json
{
    "name": "vendor/analytics-package",
    "extra": {
        "laravel": {
            "providers": ["Vendor\\Analytics\\AnalyticsServiceProvider"],
            "aliases": { "Analytics": "Vendor\\Analytics\\AnalyticsFacade" }
        }
    }
}
```

**Service provider for packages:**

```php
class AnalyticsServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->mergeConfigFrom(__DIR__.'/../config/analytics.php', 'analytics');
        $this->app->singleton(Analytics::class, fn($app) => new Analytics($app['config']['analytics']));
    }

    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'analytics');
        $this->loadRoutesFrom(__DIR__.'/../routes/api.php');

        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../config/analytics.php' => config_path('analytics.php'),
            ], 'analytics-config');

            $this->publishes([
                __DIR__.'/../database/migrations/' => database_path('migrations'),
            ], 'analytics-migrations');

            $this->publishes([
                __DIR__.'/../resources/lang' => $this->app->langPath('vendor/analytics'),
            ], 'analytics-lang');

            $this->publishes([
                __DIR__.'/../public' => public_path('vendor/analytics'),
            ], 'analytics-assets');

            $this->commands([Console\AnalyticsReport::class]);
        }
    }
}
```

Publishing commands:

```bash
php artisan vendor:publish --tag=analytics-config
php artisan vendor:publish --tag=analytics-migrations
```

### Custom Artisan Commands

```bash
php artisan make:command GenerateReport
```

```php
class GenerateReport extends Command
{
    protected $signature = 'report:generate
                            {type : Report type}
                            {--days=30 : Lookback period}
                            {--format=csv : Output format}
                            {--email : Send via email}';

    protected $description = 'Generate a business report';

    public function handle(): int
    {
        $type = $this->argument('type');
        $this->info("Generating {$type} report...");

        $report = ReportGenerator::for($type)->days($this->option('days'))->generate();

        $this->table(['Metric', 'Value'], [['Total', $report->total]]);

        if ($this->option('email')) {
            Notification::route('mail', 'admin@example.com')->notify(new ReportMail($report));
        }

        return Command::SUCCESS;
    }
}
```

**Input methods:** `$this->argument('name')`, `$this->option('name')`, `$this->ask('Question?')`, `$this->secret('Password?')`, `$this->confirm('Proceed?')`, `$this->anticipate('Size?', ['s','m','l'])`, `$this->choice('Role?', ['admin','user'], 0)`.

**Output methods:** `$this->info('text')`, `$this->error('text')`, `$this->warn('text')`, `$this->line('text')`, `$this->alert('text')`, `$this->table($headers, $rows)`, `$this->newLine($n)`.

**Progress bars:**

```php
$bar = $this->output->createProgressBar(count($users));
$bar->start();
foreach ($users as $user) { $user->process(); $bar->advance(); }
$bar->finish();
```

**Command closures** in `routes/console.php`:

```php
Artisan::command('app:cleanup', function () {
    DB::table('sessions')->where('last_activity', '<', now()->subDays(7)->getTimestamp())->delete();
    $this->info('Cleanup complete.');
})->purpose('Remove old session data');
```

### Scheduled Tasks

Define in `App\Console\Kernel::schedule()`:

```php
protected function schedule(Schedule $schedule): void
{
    $schedule->command('report:generate revenue --email')
        ->dailyAt('06:00')
        ->timezone('America/New_York')
        ->environments(['production']);

    $schedule->command('analytics:sync')
        ->hourly()
        ->withoutOverlapping(60)
        ->onOneServer();

    $schedule->call(function () {
        User::whereNull('last_active')->where('created_at', '<', now()->subYear())->delete();
    })->weeklyOn(1, '02:00');

    $schedule->exec('node health.js')
        ->everyFiveMinutes()
        ->sendOutputTo(storage_path('logs/health.log'))
        ->emailOutputTo('admin@example.com');
}
```

**Frequencies:** `->cron('* * * * *')`, `->everyMinute()`, `->everyFiveMinutes()`, `->hourly()`, `->hourlyAt(15)`, `->daily()`, `->dailyAt('13:00')`, `->twiceDaily(1, 13)`, `->weekly()`, `->weeklyOn(1, '08:00')`, `->monthly()`, `->monthlyOn(15, '09:00')`, `->weekdays()`, `->weekends()`.

**Task hooks:**

```php
$schedule->command('emails:send')
    ->hourly()
    ->before(function () { /* starting */ })
    ->after(function () { /* completed */ })
    ->onSuccess(function () { /* exit code 0 */ })
    ->onFailure(function () { /* non-zero exit */ })
    ->pingBefore($url)
    ->thenPing($url);
```

**Overlapping prevention** uses a cache lock:

```php
$schedule->command('analytics:sync')->everyMinute()->withoutOverlapping(60);
```

**Single-server execution:**

```php
$schedule->command('reports:cleanup')->daily()->onOneServer();
```

Requires a shared cache driver (Redis, Memcached, database).

### Process & Concurrency

**Process facade:**

```php
use Illuminate\Support\Facades\Process;

$result = Process::run('php artisan report:generate');

$process = Process::start('php artisan queue:work --once');
sleep(2);
if ($process->running()) { $process->signal(SIGTERM); }
```

**Process pools** for parallel execution:

```php
$results = Process::pool(function (Pool $pool) {
    $pool->command('php artisan report:generate --type=users');
    $pool->command('php artisan report:generate --type=orders');
    $pool->command('php artisan report:generate --type=revenue');
})->start()->wait();
```

**Piping processes:**

```php
$result = Process::pipe(function (Pipe $pipe) {
    $pipe->command('cat log.txt');
    $pipe->command('grep -i "error"');
    $pipe->command('head -50');
});
```

**Concurrency facade** runs callables in parallel:

```php
use Illuminate\Support\Facades\Concurrency;

[$userCount, $orderTotal] = Concurrency::run([
    fn() => User::count(),
    fn() => Order::whereDate('created_at', today())->sum('total'),
]);
```

**`Concurrency::defer()`** runs callbacks after the HTTP response is sent:

```php
Concurrency::defer(function () {
    Log::info('Runs after response is sent');
});
```

### Example: Custom Analytics Package

**Package class:**

```php
class Analytics
{
    public function __construct(protected readonly array $config) {}

    public function track(string $event, array $properties = []): void
    {
        DB::table('analytics_events')->insert([
            'event' => $event,
            'properties' => json_encode($properties),
            'user_id' => auth()->id(),
            'ip_address' => request()->ip(),
            'created_at' => now(),
        ]);
    }

    public function summary(string $event): array
    {
        return [
            'total' => DB::table('analytics_events')->where('event', $event)->count(),
            'today' => DB::table('analytics_events')->where('event', $event)->whereDate('created_at', today())->count(),
            'unique_users' => DB::table('analytics_events')->where('event', $event)->distinct('user_id')->count('user_id'),
        ];
    }
}
```

**Facade:**

```php
class AnalyticsFacade extends Facade
{
    protected static function getFacadeAccessor(): string { return Analytics::class; }
}
```

**Artisan command:**

```php
class AnalyticsReport extends Command
{
    protected $signature = 'analytics:report {event : Event name} {--days=30} {--format=table}';

    public function handle(Analytics $analytics): int
    {
        $summary = $analytics->summary($this->argument('event'));

        $this->table(['Metric', 'Value'], [
            ['Total', $summary['total']],
            ['Today', $summary['today']],
            ['Unique Users', $summary['unique_users']],
        ]);

        return Command::SUCCESS;
    }
}
```

### Example: Custom Report Generation Command

```php
class GenerateDailyReport extends Command
{
    protected $signature = 'report:daily
                            {--email= : Email address}
                            {--section=* : Sections (users, orders, revenue)}
                            {--format=csv}';

    public function handle(): int
    {
        $sections = $this->option('section') ?: ['users', 'orders', 'revenue'];

        $report = [];
        if (in_array('users', $sections)) $report['new_users'] = User::whereDate('created_at', today())->count();
        if (in_array('orders', $sections)) $report['total_orders'] = Order::whereDate('created_at', today())->count();
        if (in_array('revenue', $sections)) $report['revenue'] = Order::whereDate('created_at', today())->where('status', 'completed')->sum('total');

        $this->table(['Metric', 'Value'], collect($report)->map(fn($v, $k) => [$k, $v])->toArray());

        if ($email = $this->option('email')) {
            Notification::route('mail', $email)->notify(new DailyReport($report));
        }

        return Command::SUCCESS;
    }
}
```

Schedule it:

```php
$schedule->command('report:daily --email=admin@example.com')
    ->dailyAt('23:59')
    ->onOneServer();
```

---

## Summary

- The service container uses `bind()`, `singleton()`, `instance()`, tagged binding, contextual binding with `when...needs...give`, and `extend()` for decorators
- Service providers follow `register()` for bindings and `boot()` for using registered services; deferrable providers load on demand
- Facades proxy static calls to container instances; real-time facades use the `Facades\` prefix for any class
- Package development leverages Composer's `extra.laravel` section and provides helpers for publishing config, migrations, assets, views, and routes
- Custom Artisan commands define input via `$signature`, logic in `handle()`, and output via rich I/O methods
- The task scheduler offers 20+ frequency methods with hooks, overlapping prevention, and single-server locking
- `Process` and `Concurrency` facades enable parallel process execution and concurrent callable execution

---

## Exercises

### Review Questions

1. Explain the difference between `bind()` and `singleton()`. When would you use `instance()` instead?
2. Why should bindings go in `register()` and not `boot()`? What happens if another provider tries to resolve in `register()`?
3. Describe the execution path from `Cache::get('key')` to the method call on the underlying class.
4. What is the `extra.laravel` section in `composer.json` used for?
5. Compare `Concurrency::run()` with `Process::pool()`. When would you use each?

### Application Problems

1. **Contextual Payment Resolution**: Configure `InvoiceController` â†’ Stripe, `RefundController` â†’ Braintree, `PayoutController` â†’ PayPal through the same `PaymentGateway` interface, with `extend()` adding logging to all calls.

2. **Feature Flag Package**: Create a package with config, migration, facade, Artisan command to toggle flags, and Blade directive to check them. Use automatic provider discovery.

3. **Multi-Step Artisan Wizard**: Build an interactive command that guides deployment setup: server credentials, service selection, environment configuration, progress bars.

### Challenge Problem

**Build a Complete Notification Channel Package**: Implement a Slack webhook notification channel package including:
- `DeferrableProvider` registering the channel with merged config
- `SlackWebhookChannel` implementing `send()`
- `SlackWebhookMessage` value object for structure
- `SlackWebhook` facade for standalone messages
- `slack:test` Artisan command
- Config publishing with timeout, retry, channel defaults
- Scheduled task for daily report delivery via the channel
- Real-time facade variant (`Facades\App\Services\SlackWebhook`)
- Contextual binding: `AlertController` uses high-priority channel, `LogController` uses low-priority