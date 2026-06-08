# 8. Core Concepts and Advanced Topics

## Service Container and Dependency Injection

### Basic Binding
```php
// In a service provider
public function register()
{
    $this->app->bind(PaymentGateway::class, StripePaymentGateway::class);
    
    // Binding a singleton
    $this->app->singleton(CacheManager::class, function ($app) {
        return new CacheManager($app);
    });
    
    // Binding an instance
    $this->app->instance('settings', new SettingsManager());
}
```

### Resolving Dependencies
```php
// Automatic resolution
public function __construct(PaymentGateway $paymentGateway)
{
    $this->paymentGateway = $paymentGateway;
}

// Manual resolution
$paymentGateway = app(PaymentGateway::class);
$paymentGateway = App::make(PaymentGateway::class);
$settings = app('settings');
```

### Contextual Binding
```php
$this->app->when(ReportGenerator::class)
          ->needs(Filesystem::class)
          ->give(LocalFilesystem::class);
          
$this->app->when([VideoController::class, PhotoController::class])
          ->needs(StorageInterface::class)
          ->give(CloudStorage::class);
```

## Facades

### How Facades Work
```php
// Using a facade
Cache::put('key', 'value', 60);

// Equivalent to
app('cache')->put('key', 'value', 60);
```

### Common Facades
- `Route` - Router
- `Auth` - Authentication
- `DB` - Database
- `Cache` - Cache
- `Event` - Event dispatcher
- `Storage` - Filesystem
- `Mail` - Mailer
- `Notification` - Notifications
- `Queue` - Queue
- `Validator` - Validation

### Creating Custom Facades
```php
// app/Services/PaymentProcessor.php
namespace App\Services;

class PaymentProcessor
{
    public function process($amount)
    {
        return "Processing $amount";
    }
}

// app/Facades/Payment.php
namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class Payment extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'payment';
    }
}

// Register in service provider
$this->app->singleton('payment', function () {
    return new PaymentProcessor();
});

// Usage
use App\Facades\Payment;
Payment::process(100);
```

## Queues and Jobs

### Queue Configuration
```php
// config/queue.php
'connections' => [
    'database' => [
        'driver' => 'database',
        'table' => 'jobs',
        'queue' => 'default',
        'retry_after' => 90,
    ],
    'redis' => [
        'driver' => 'redis',
        'connection' => 'default',
        'queue' => env('REDIS_QUEUE', 'default'),
        'retry_after' => 90,
    ],
],
```

### Creating Jobs
```php
// Generate job: php artisan make:job ProcessPodcast
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
    
    public function __construct(Podcast $podcast)
    {
        $this->podcast = $podcast;
    }

    public function handle()
    {
        // Process the podcast
    }
    
    public function failed(\Throwable $exception)
    {
        // Handle job failure
    }
}
```

### Dispatching Jobs
```php
// Basic dispatch
ProcessPodcast::dispatch($podcast);

// With delay
ProcessPodcast::dispatch($podcast)->delay(now()->addMinutes(10));

// To specific queue
ProcessPodcast::dispatch($podcast)->onQueue('processing');

// With chain
ProcessPodcast::withChain([
    new OptimizePodcast($podcast),
    new ReleasePodcast($podcast),
])->dispatch($podcast);
```

### Running Queue Workers
```bash
# Start a worker
php artisan queue:work

# Specify connection and queue
php artisan queue:work redis --queue=high,default

# Run a single job
php artisan queue:work --once

# Run with timeout and tries
php artisan queue:work --timeout=30 --tries=3
```

## Task Scheduling

### Defining Schedules
```php
// app/Console/Kernel.php
protected function schedule(Schedule $schedule)
{
    // Run Artisan command
    $schedule->command('emails:send')
             ->daily()
             ->at('13:00')
             ->withoutOverlapping()
             ->onSuccess(function () {
                 Log::info('Emails sent successfully');
             });
    
    // Run job
    $schedule->job(new ProcessPodcasts)
             ->everyTwoHours()
             ->onFailure(function () {
                 Log::error('Failed to process podcasts');
             });
    
    // Run shell command
    $schedule->exec('php /home/forge/script.php')
             ->hourly();
             
    // Call invokable class
    $schedule->call(new DeleteExpiredRecords)
             ->daily();
}
```

### Schedule Frequencies
```php
$schedule->command('emails:send')->daily();
$schedule->command('emails:send')->weekly();
$schedule->command('emails:send')->monthly();
$schedule->command('emails:send')->quarterly();
$schedule->command('emails:send')->yearly();
$schedule->command('emails:send')->timezone('America/New_York')->at('13:00');
$schedule->command('emails:send')->weekdays()->at('8:00');
$schedule->command('emails:send')->sundays()->at('17:00');
$schedule->command('emails:send')->everyMinute();
$schedule->command('emails:send')->everyFiveMinutes();
$schedule->command('emails:send')->everyTenMinutes();
$schedule->command('emails:send')->everyThirtyMinutes();
$schedule->command('emails:send')->hourly();
$schedule->command('emails:send')->hourlyAt(17);
$schedule->command('emails:send')->everyTwoHours();
$schedule->command('emails:send')->between('8:00', '17:00');
```

## Events and Listeners

### Defining Events
```php
// Generate event: php artisan make:event OrderShipped
namespace App\Events;

use App\Models\Order;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class OrderShipped
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $order;

    public function __construct(Order $order)
    {
        $this->order = $order;
    }
}
```

### Defining Listeners
```php
// Generate listener: php artisan make:listener SendShipmentNotification --event=OrderShipped
namespace App\Listeners;

use App\Events\OrderShipped;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendShipmentNotification implements ShouldQueue
{
    public function handle(OrderShipped $event)
    {
        // Send notification about shipped order
    }
}
```

### Registering Event Listeners
```php
// app/Providers/EventServiceProvider.php
protected $listen = [
    OrderShipped::class => [
        SendShipmentNotification::class,
        UpdateInventory::class,
    ],
];
```

### Dispatching Events
```php
use App\Events\OrderShipped;

// Dispatch event
event(new OrderShipped($order));

// Or using the dispatch method
OrderShipped::dispatch($order);
```

## Broadcasting and Real-Time Events

### Configuration
```php
// config/broadcasting.php
'default' => env('BROADCAST_DRIVER', 'null'),

'connections' => [
    'pusher' => [
        'driver' => 'pusher',
        'key' => env('PUSHER_APP_KEY'),
        'secret' => env('PUSHER_APP_SECRET'),
        'app_id' => env('PUSHER_APP_ID'),
        'options' => [
            'cluster' => env('PUSHER_APP_CLUSTER'),
            'useTLS' => true,
        ],
    ],
    'ably' => [
        'driver' => 'ably',
        'key' => env('ABLY_KEY'),
    ],
],
```

### Broadcastable Event
```php
namespace App\Events;

use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewMessage implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;
    public $user;

    public function __construct(string $message, User $user)
    {
        $this->message = $message;
        $this->user = $user;
    }

    public function broadcastOn()
    {
        return new PrivateChannel('chat.' . $this->user->id);
    }
    
    public function broadcastAs()
    {
        return 'message.new';
    }
    
    public function broadcastWith()
    {
        return [
            'message' => $this->message,
            'user_id' => $this->user->id,
            'created_at' => now()->toIso8601String(),
        ];
    }
}
```

### Laravel Echo Setup
```javascript
// Install Echo and Pusher
// npm install --save laravel-echo pusher-js

// resources/js/bootstrap.js
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true
});

// Listen for events
window.Echo.private(`chat.${userId}`)
    .listen('.message.new', (e) => {
        console.log(e.message);
    });
```

## Notifications

### Creating Notifications
```php
// Generate notification: php artisan make:notification InvoicePaid
namespace App\Notifications;

use App\Models\Invoice;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class InvoicePaid extends Notification implements ShouldQueue
{
    use Queueable;

    protected $invoice;

    public function __construct(Invoice $invoice)
    {
        $this->invoice = $invoice;
    }

    public function via($notifiable)
    {
        return ['mail', 'database', 'broadcast'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject('Invoice Paid')
                    ->greeting('Hello!')
                    ->line('Your invoice has been paid!')
                    ->action('View Invoice', url('/invoices/' . $this->invoice->id))
                    ->line('Thank you for using our application!');
    }

    public function toDatabase($notifiable)
    {
        return [
            'invoice_id' => $this->invoice->id,
            'amount' => $this->invoice->amount,
        ];
    }
    
    public function toBroadcast($notifiable)
    {
        return [
            'invoice_id' => $this->invoice->id,
            'amount' => $this->invoice->amount,
        ];
    }
}
```

### Sending Notifications
```php
use App\Notifications\InvoicePaid;

// Send to a user
$user->notify(new InvoicePaid($invoice));

// Send via Notification facade
Notification::send($users, new InvoicePaid($invoice));

// Send on-demand notification (no notifiable)
Notification::route('mail', 'taylor@example.com')
            ->route('nexmo', '5555555555')
            ->notify(new InvoicePaid($invoice));
```

### Notifiable Trait
```php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;
    
    // Customize notification routing
    public function routeNotificationForMail($notification)
    {
        return $this->email_address;
    }
}
```

## Testing

### Unit Tests
```php
namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Services\Calculator;

class CalculatorTest extends TestCase
{
    public function test_it_adds_numbers()
    {
        $calculator = new Calculator();
        $result = $calculator->add(2, 3);
        $this->assertEquals(5, $result);
    }
}
```

### Feature Tests
```php
namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_the_application_returns_a_successful_response()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }
    
    public function test_users_can_authenticate_using_the_login_screen()
    {
        $user = User::factory()->create();
        
        $response = $this->post('/login', [
            'email' => $user->email,
            'password' => 'password',
        ]);
        
        $this->assertAuthenticated();
        $response->assertRedirect('/dashboard');
    }
    
    public function test_users_can_create_posts()
    {
        $user = User::factory()->create();
        
        $response = $this->actingAs($user)
                         ->post('/posts', [
                             'title' => 'Test Post',
                             'content' => 'This is a test post.',
                         ]);
        
        $response->assertRedirect('/posts');
        $this->assertDatabaseHas('posts', [
            'title' => 'Test Post',
            'user_id' => $user->id,
        ]);
    }
}
```

### HTTP Tests
```php
public function test_api_returns_posts()
{
    $user = User::factory()->create();
    $posts = Post::factory()->count(3)->create(['user_id' => $user->id]);
    
    $response = $this->getJson('/api/posts');
    
    $response->assertStatus(200)
             ->assertJsonCount(3, 'data')
             ->assertJsonStructure([
                 'data' => [
                     '*' => ['id', 'title', 'content', 'created_at']
                 ]
             ]);
}

public function test_api_creates_post()
{
    $user = User::factory()->create();
    
    $response = $this->actingAs($user)
                     ->postJson('/api/posts', [
                         'title' => 'New API Post',
                         'content' => 'Created via API',
                     ]);
    
    $response->assertStatus(201)
             ->assertJson([
                 'data' => [
                     'title' => 'New API Post',
                     'content' => 'Created via API',
                 ]
             ]);
}
```

## Caching and Performance

### Cache Configuration
```php
// config/cache.php
'default' => env('CACHE_DRIVER', 'file'),

'stores' => [
    'apc' => [
        'driver' => 'apc',
    ],
    'array' => [
        'driver' => 'array',
        'serialize' => false,
    ],
    'file' => [
        'driver' => 'file',
        'path' => storage_path('framework/cache/data'),
    ],
    'memcached' => [
        'driver' => 'memcached',
        'persistent_id' => env('MEMCACHED_PERSISTENT_ID'),
        'sasl' => [
            env('MEMCACHED_USERNAME'),
            env('MEMCACHED_PASSWORD'),
        ],
        'options' => [
            // ...
        ],
        'servers' => [
            [
                'host' => env('MEMCACHED_HOST', '127.0.0.1'),
                'port' => env('MEMCACHED_PORT', 11211),
                'weight' => 100,
            ],
        ],
    ],
    'redis' => [
        'driver' => 'redis',
        'connection' => 'cache',
        'lock_connection' => 'default',
    ],
],
```

### Basic Cache Usage
```php
// Store item in cache
Cache::put('key', 'value', now()->addMinutes(10));

// Retrieve from cache
$value = Cache::get('key');

// Retrieve with default
$value = Cache::get('key', 'default');

// Check if exists
if (Cache::has('key')) {
    // ...
}

// Store forever
Cache::forever('key', 'value');

// Remove from cache
Cache::forget('key');

// Clear entire cache
Cache::flush();
```

### Cache Helper
```php
// Using the cache helper
$value = cache('key');
$value = cache('key', 'default');
cache(['key' => 'value'], now()->addMinutes(10));
```

### Remember Pattern
```php
$value = Cache::remember('users', 3600, function () {
    return User::all();
});

$value = Cache::rememberForever('users', function () {
    return User::all();
});
```

### Cache Tags
```php
// With Redis or Memcached drivers
Cache::tags(['people', 'authors'])->put('John', $john, 3600);
Cache::tags(['people', 'artists'])->put('Anne', $anne, 3600);

// Retrieve
$john = Cache::tags(['people', 'authors'])->get('John');

// Flush tagged cache
Cache::tags(['people', 'authors'])->flush();
```

### Route Caching
```bash
# Cache routes
php artisan route:cache

# Clear route cache
php artisan route:clear
```

### Config Caching
```bash
# Cache config
php artisan config:cache

# Clear config cache
php artisan config:clear
```

### View Caching
```bash
# Cache views
php artisan view:cache

# Clear view cache
php artisan view:clear
```

## Security Best Practices

### CSRF Protection
```php
// In forms
@csrf

// In JavaScript
const token = document.head.querySelector('meta[name="csrf-token"]').content;

axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
```

### XSS Prevention
```php
// Blade automatically escapes content
{{ $userInput }} // Escaped
{!! $trustedHtml !!} // Unescaped (use with caution)
```

### SQL Injection Prevention
```php
// Safe - uses prepared statements
User::where('email', $email)->first();
DB::table('users')->where('email', $email)->first();

// Unsafe - avoid raw queries with user input
DB::raw("SELECT * FROM users WHERE email = '{$email}'");
```

### Authentication Protection
```php
// Rate limiting
Route::middleware(['throttle:login'])->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
});

// In RouteServiceProvider
RateLimiter::for('login', function (Request $request) {
    return Limit::perMinute(5)->by($request->ip());
});
```

### Mass Assignment Protection
```php
// In model
protected $fillable = ['name', 'email'];
protected $guarded = ['id', 'is_admin'];

// In controller
$user->update($request->only(['name', 'email']));
```

## Best Learning Methods
- Explore each topic in the official docs: https://laravel.com/docs/12.x
- Build features using queues, events, and notifications
- Write and run tests with PHPUnit
- Implement caching strategies for performance optimization
- Practice dependency injection and service container usage
- Create custom facades for your application services
- Set up broadcasting for real-time features
