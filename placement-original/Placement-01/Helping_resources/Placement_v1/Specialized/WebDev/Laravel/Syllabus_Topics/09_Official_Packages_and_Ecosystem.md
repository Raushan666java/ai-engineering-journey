# 9. Official Packages and Ecosystem

## Laravel Cashier

### Overview
- Subscription billing integration with Stripe and Paddle
- Handles coupons, swapping subscriptions, subscription quantities, cancellation grace periods
- Generates invoice PDFs

### Installation and Setup
```bash
# For Stripe
composer require laravel/cashier

# For Paddle
composer require laravel/cashier-paddle
```

### Basic Usage with Stripe
```php
// Add to User model
use Laravel\Cashier\Billable;

class User extends Authenticatable
{
    use Billable;
}

// Create subscription
$user->newSubscription('default', 'price_monthly')
    ->create($paymentMethod);

// Check subscription status
if ($user->subscribed('default')) {
    // User has an active subscription
}

// Cancel subscription
$user->subscription('default')->cancel();
```

## Laravel Dusk

### Overview
- Browser automation and testing API
- Chrome driver installation included
- Screenshot and console log capture
- Testing of JavaScript-enabled applications

### Installation and Setup
```bash
composer require --dev laravel/dusk
php artisan dusk:install
```

### Basic Usage
```php
// tests/Browser/ExampleTest.php
public function testBasicExample()
{
    $this->browse(function (Browser $browser) {
        $browser->visit('/')
                ->assertSee('Laravel')
                ->clickLink('Login')
                ->type('email', 'user@example.com')
                ->type('password', 'password')
                ->press('Login')
                ->assertPathIs('/home');
    });
}

// Run tests
php artisan dusk
```

## Laravel Horizon

### Overview
- Dashboard and code-driven configuration for Laravel Redis queues
- Queue monitoring, metrics, and failure management
- Job throughput, runtime, and failure monitoring

### Installation and Setup
```bash
composer require laravel/horizon
php artisan horizon:install
```

### Configuration
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

### Running Horizon
```bash
# Start Horizon
php artisan horizon

# In production with Supervisor
[program:horizon]
process_name=%(program_name)s
command=php /path/to/artisan horizon
autostart=true
autorestart=true
user=forge
redirect_stderr=true
stdout_logfile=/path/to/horizon.log
stopwaitsecs=3600
```

## Laravel Octane

### Overview
- Server-side application performance optimization
- Powered by Swoole or RoadRunner
- Keeps application bootstrapped in memory
- Significant performance improvements

### Installation and Setup
```bash
composer require laravel/octane
php artisan octane:install
```

### Running Octane
```bash
# With Swoole
php artisan octane:start --server=swoole

# With RoadRunner
php artisan octane:start --server=roadrunner

# With workers and watch mode
php artisan octane:start --workers=4 --max-requests=250 --watch
```

## Laravel Scout

### Overview
- Full-text search for Eloquent models
- Driver based (Algolia, Meilisearch, Database)
- Syncs database with search indexes
- Simple query interface

### Installation and Setup
```bash
composer require laravel/scout
php artisan vendor:publish --provider="Laravel\Scout\ScoutServiceProvider"
```

### Basic Usage
```php
// Add to model
use Laravel\Scout\Searchable;

class Post extends Model
{
    use Searchable;
    
    public function toSearchableArray()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
        ];
    }
}

// Search
$posts = Post::search('Laravel')->get();

// Advanced search
$posts = Post::search('Laravel')
    ->where('user_id', 1)
    ->paginate(20);
```

## Laravel Pennant

### Overview
- Feature flags implementation
- Scope features to users, groups, or percentages
- Database or Redis storage
- Artisan commands for management

### Installation and Setup
```bash
composer require laravel/pennant
php artisan vendor:publish --provider="Laravel\Pennant\PennantServiceProvider"
php artisan migrate
```

### Basic Usage
```php
// Define features
Feature::define('new-api', function () {
    return true; // Everyone gets the feature
});

Feature::define('beta-feature', function (User $user) {
    return $user->isBetaTester();
});

// Check features
if (Feature::active('new-api')) {
    // Use new API
}

// For specific user
if (Feature::for($user)->active('beta-feature')) {
    // Show beta feature
}
```

## Laravel Pint

### Overview
- Opinionated PHP code style fixer
- Based on PHP-CS-Fixer
- Zero configuration by default
- Customizable rules

### Installation and Usage
```bash
composer require laravel/pint --dev

# Run Pint
./vendor/bin/pint

# Run in test mode
./vendor/bin/pint --test

# Format specific files
./vendor/bin/pint app/Models
```

### Configuration
```json
// pint.json
{
    "preset": "laravel",
    "rules": {
        "array_syntax": {
            "syntax": "short"
        },
        "ordered_imports": {
            "sort_algorithm": "alpha"
        },
        "no_unused_imports": true
    }
}
```

## Laravel Sail

### Overview
- Docker development environment for Laravel
- PHP, MySQL, Redis, Mailhog, and more
- Simple CLI commands
- Customizable Docker configuration

### Installation and Setup
```bash
# For new projects
laravel new example-app --sail

# For existing projects
composer require laravel/sail --dev
php artisan sail:install
```

### Basic Usage
```bash
# Start containers
./vendor/bin/sail up

# Start in detached mode
./vendor/bin/sail up -d

# Stop containers
./vendor/bin/sail down

# Run Artisan commands
./vendor/bin/sail artisan migrate

# Run tests
./vendor/bin/sail test
```

## Laravel Sanctum

### Overview
- Lightweight API authentication system
- SPA authentication
- Mobile application authentication
- API token authentication

### Installation and Setup
```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

### API Token Authentication
```php
// Issue token
$token = $user->createToken('api-token');
return ['token' => $token->plainTextToken];

// Protect routes
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
```

## Laravel Socialite

### Overview
- OAuth authentication with social providers
- Supports Facebook, Twitter, LinkedIn, Google, GitHub, GitLab, Bitbucket
- Consistent interface across providers
- Customizable with custom providers

### Installation and Setup
```bash
composer require laravel/socialite
```

### Basic Usage
```php
// config/services.php
'github' => [
    'client_id' => env('GITHUB_CLIENT_ID'),
    'client_secret' => env('GITHUB_CLIENT_SECRET'),
    'redirect' => 'http://example.com/callback-url',
],

// Routes
Route::get('/auth/github', function () {
    return Socialite::driver('github')->redirect();
});

Route::get('/auth/github/callback', function () {
    $githubUser = Socialite::driver('github')->user();
    
    // Find or create user
    $user = User::updateOrCreate([
        'github_id' => $githubUser->id,
    ], [
        'name' => $githubUser->name,
        'email' => $githubUser->email,
        'github_token' => $githubUser->token,
    ]);
    
    Auth::login($user);
    
    return redirect('/dashboard');
});
```

## Laravel Telescope

### Overview
- Debug assistant for Laravel
- Monitors requests, exceptions, database queries, jobs, mail, notifications, cache, and more
- Searchable and filterable interface
- Tag-based organization

### Installation and Setup
```bash
composer require laravel/telescope --dev
php artisan telescope:install
php artisan migrate
```

### Configuration
```php
// config/telescope.php
'enabled' => env('TELESCOPE_ENABLED', true),

'middleware' => [
    'web',
    Authorize::class,
],

'only_paths' => [
    // 'api/*'
],

'ignore_paths' => [
    'nova-api*',
],

'watchers' => [
    Watchers\CacheWatcher::class => true,
    Watchers\CommandWatcher::class => true,
    // ...
],
```

## Laravel Pulse

### Overview
- Real-time application performance monitoring and metrics
- Monitors queues, servers, databases, cache, and more
- Customizable dashboard
- Trend visualization

### Installation and Setup
```bash
composer require laravel/pulse
php artisan pulse:install
php artisan migrate
```

### Basic Usage
```php
// Register recorders in app/Providers/PulseServiceProvider.php
Pulse::register([
    Cache::class,
    Exceptions::class,
    Queues::class,
    Servers::class,
    Slow::class,
    UserJobs::class,
    Users::class,
]);

// Access dashboard at /pulse
Route::prefix('pulse')->group(function () {
    Pulse::routes();
});
```

## Laravel Reverb

### Overview
- WebSocket server for Laravel
- Real-time event broadcasting
- Scalable and secure
- Compatible with Laravel Echo

### Installation and Setup
```bash
composer require laravel/reverb
php artisan reverb:install
```

### Basic Usage
```php
// Start the server
php artisan reverb:start

// Broadcasting events
event(new OrderShipped($order));

// Client-side with Echo
Echo.private(`orders.${orderId}`)
    .listen('OrderShipped', (e) => {
        console.log(e.order);
    });
```

## Laravel Echo

### Overview
- JavaScript library for subscribing to channels and listening for events
- Works with Pusher, Ably, or Laravel Reverb
- Supports public, private, and presence channels
- Simple API for event handling

### Installation and Setup
```bash
npm install --save laravel-echo pusher-js
```

### Basic Usage
```javascript
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
Echo.channel('orders')
    .listen('OrderShipped', (e) => {
        console.log(e.order);
    });

// Private channels
Echo.private('orders.' + orderId)
    .listen('OrderShipped', (e) => {
        console.log(e.order);
    });

// Presence channels
Echo.join('room.' + roomId)
    .here((users) => {
        console.log(users);
    })
    .joining((user) => {
        console.log(user.name + ' joined');
    })
    .leaving((user) => {
        console.log(user.name + ' left');
    });
```

## Best Learning Methods
- Read the documentation for each package: https://laravel.com/docs/12.x
- Integrate one package at a time into your projects
- Follow tutorials specific to each package
- Explore the source code on GitHub to understand implementation
- Join Laravel communities to learn from others' experiences
- Watch Laracasts videos covering official packages
