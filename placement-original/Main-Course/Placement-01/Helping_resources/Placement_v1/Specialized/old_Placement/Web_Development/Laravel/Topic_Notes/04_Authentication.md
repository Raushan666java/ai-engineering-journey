# Authentication in Laravel

Authentication is a fundamental part of most web applications. Laravel provides a complete authentication system out of the box with various features and customization options.

## Authentication Basics

### Configuration

Authentication configuration is stored in `config/auth.php`:

```php
return [
    // Default authentication guard
    'defaults' => [
        'guard' => 'web',
        'passwords' => 'users',
    ],

    // Authentication guards
    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],
        'api' => [
            'driver' => 'token',
            'provider' => 'users',
            'hash' => false,
        ],
    ],

    // User providers
    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => App\\Models\\User::class,
        ],
        // 'users' => [
        //     'driver' => 'database',
        //     'table' => 'users',
        // ],
    ],

    // Password reset settings
    'passwords' => [
        'users' => [
            'provider' => 'users',
            'table' => 'password_reset_tokens',
            'expire' => 60,
            'throttle' => 60,
        ],
    ],

    'password_timeout' => 10800,
];
```

### User Model

The default `User` model implements the `Authenticatable` contract:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
```

## Authentication Starter Kits

Laravel provides several starter kits to quickly scaffold authentication features.

### Laravel Breeze

Laravel Breeze is a minimal, simple implementation of all of Laravel's authentication features, including login, registration, password reset, email verification, and password confirmation.

```bash
# Install Breeze with Blade templates
composer require laravel/breeze --dev
php artisan breeze:install

# Install Breeze with Inertia (Vue or React)
php artisan breeze:install vue
# or
php artisan breeze:install react

# Install Breeze API stack
php artisan breeze:install api
```

### Laravel Jetstream

Laravel Jetstream provides a more robust starting point with features like two-factor authentication, session management, API support via Laravel Sanctum, and optional team management.

```bash
# Install Jetstream with Livewire
composer require laravel/jetstream
php artisan jetstream:install livewire

# Install Jetstream with Inertia
php artisan jetstream:install inertia

# Add team support
php artisan jetstream:install livewire --teams
```

### Laravel Fortify

Laravel Fortify is a frontend agnostic authentication backend implementation for Laravel. It's used by Jetstream but can be used independently.

```bash
composer require laravel/fortify
php artisan vendor:publish --provider="Laravel\Fortify\FortifyServiceProvider"
```

## Core Authentication Features

### Registration

```php
// app/Http/Controllers/Auth/RegisterController.php
public function register(Request $request)
{
    $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        'password' => ['required', 'string', 'min:8', 'confirmed'],
    ]);

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);

    Auth::login($user);

    return redirect(RouteServiceProvider::HOME);
}
```

### Login

```php
// app/Http/Controllers/Auth/LoginController.php
public function login(Request $request)
{
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    if (Auth::attempt($credentials, $request->boolean('remember'))) {
        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    return back()->withErrors([
        'email' => 'The provided credentials do not match our records.',
    ])->onlyInput('email');
}
```

### Logout

```php
// app/Http/Controllers/Auth/LoginController.php
public function logout(Request $request)
{
    Auth::logout();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return redirect('/');
}
```

### Password Reset

```php
// routes/web.php
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\NewPasswordController;

Route::get('/forgot-password', [PasswordResetLinkController::class, 'create'])
    ->middleware('guest')
    ->name('password.request');

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
    ->middleware('guest')
    ->name('password.email');

Route::get('/reset-password/{token}', [NewPasswordController::class, 'create'])
    ->middleware('guest')
    ->name('password.reset');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
    ->middleware('guest')
    ->name('password.update');
```

### Email Verification

```php
// app/Models/User.php
use Illuminate\Contracts\Auth\MustVerifyEmail;

class User extends Authenticatable implements MustVerifyEmail
{
    // ...
}

// routes/web.php
Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
    return redirect('/home');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');
```

## Retrieving the Authenticated User

```php
// Get the currently authenticated user
$user = Auth::user();

// Get the currently authenticated user's ID
$id = Auth::id();

// Check if the user is authenticated
if (Auth::check()) {
    // The user is logged in...
}

// In a controller
public function profile(Request $request)
{
    $user = $request->user();
    // or
    $user = auth()->user();
    
    return view('profile', ['user' => $user]);
}
```

## Protecting Routes

### Using Middleware

```php
// Single route
Route::get('/profile', function () {
    // Only authenticated users may access this route...
})->middleware('auth');

// Route group
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::get('/settings', [SettingsController::class, 'index']);
});

// Controller constructor
public function __construct()
{
    $this->middleware('auth');
    // Or specific methods only
    $this->middleware('auth')->only(['store', 'update', 'destroy']);
    // Or except specific methods
    $this->middleware('auth')->except(['index', 'show']);
}
```

### Guest Middleware

```php
// Only non-authenticated users may access this route
Route::get('/login', function () {
    // ...
})->middleware('guest');

// Redirect to a named route if authenticated
Route::get('/login', function () {
    // ...
})->middleware('guest:dashboard');
```

### Specifying a Guard

```php
Route::get('/dashboard', function () {
    // ...
})->middleware('auth:web');

Route::get('/api/user', function () {
    // ...
})->middleware('auth:api');
```

## Manual Authentication

### Authenticating Users

```php
// Attempt to authenticate a user
if (Auth::attempt(['email' => $email, 'password' => $password])) {
    // Authentication was successful...
    $request->session()->regenerate();
    return redirect()->intended('dashboard');
}

// With remember me
if (Auth::attempt(['email' => $email, 'password' => $password], $remember)) {
    // ...
}

// With additional conditions
if (Auth::attempt(['email' => $email, 'password' => $password, 'active' => 1])) {
    // ...
}

// Authenticate a user instance
Auth::login($user);

// Remember the user
Auth::login($user, true);

// Authenticate by ID
Auth::loginUsingId(1);

// Remember the user by ID
Auth::loginUsingId(1, true);

// Login once without storing in session
if (Auth::once(['email' => $email, 'password' => $password])) {
    // ...
}
```

### Logging Out

```php
// Log out the user
Auth::logout();

// Log out from all sessions
Auth::logoutOtherDevices($password);

// Invalidate and regenerate the session
$request->session()->invalidate();
$request->session()->regenerateToken();
```

## Authentication Events

Laravel fires several events during the authentication process:

```php
// app/Providers/EventServiceProvider.php
protected $listen = [
    'Illuminate\Auth\Events\Registered' => [
        'App\Listeners\SendWelcomeEmail',
    ],
    'Illuminate\Auth\Events\Login' => [
        'App\Listeners\LogSuccessfulLogin',
    ],
    'Illuminate\Auth\Events\Failed' => [
        'App\Listeners\LogFailedLogin',
    ],
    'Illuminate\Auth\Events\Logout' => [
        'App\Listeners\LogSuccessfulLogout',
    ],
    'Illuminate\Auth\Events\Lockout' => [
        'App\Listeners\LogLockout',
    ],
    'Illuminate\Auth\Events\PasswordReset' => [
        'App\Listeners\LogPasswordReset',
    ],
    'Illuminate\Auth\Events\Verified' => [
        'App\Listeners\LogVerifiedUser',
    ],
];
```

## Guards and Providers

### Custom Guards

```php
// config/auth.php
'guards' => [
    'admin' => [
        'driver' => 'session',
        'provider' => 'admins',
    ],
],

// app/Providers/AuthServiceProvider.php
public function boot()
{
    $this->registerPolicies();

    // Define a custom guard
    Auth::extend('jwt', function ($app, $name, array $config) {
        // Return an instance of Illuminate\Contracts\Auth\Guard...
        return new JwtGuard(Auth::createUserProvider($config['provider']));
    });
}
```

### Custom User Providers

```php
// app/Providers/AuthServiceProvider.php
public function boot()
{
    $this->registerPolicies();

    // Define a custom user provider
    Auth::provider('custom', function ($app, array $config) {
        // Return an instance of Illuminate\Contracts\Auth\UserProvider...
        return new CustomUserProvider($app['hash'], $config['model']);
    });
}

// config/auth.php
'providers' => [
    'users' => [
        'driver' => 'custom',
        'model' => App\Models\User::class,
    ],
],
```

## API Authentication

### Token Authentication with Sanctum

```php
// Install Sanctum
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate

// app/Models/User.php
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    // ...
}

// Create a token
$token = $user->createToken('token-name');
return ['token' => $token->plainTextToken];

// Authenticate requests
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
```

### SPA Authentication with Sanctum

```php
// config/sanctum.php
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(
    '%s%s',
    'localhost,localhost:3000,127.0.0.1,127.0.0.1:8000,::1',
    env('APP_URL') ? ','.parse_url(env('APP_URL'), PHP_URL_HOST) : ''
))),

// app/Http/Kernel.php
'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
],

// routes/api.php
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
```

## Two-Factor Authentication

Laravel Fortify and Jetstream provide two-factor authentication out of the box:

```php
// Enable two-factor authentication in config/fortify.php
'features' => [
    Features::registration(),
    Features::resetPasswords(),
    Features::emailVerification(),
    Features::updateProfileInformation(),
    Features::updatePasswords(),
    Features::twoFactorAuthentication([
        'confirmPassword' => true,
    ]),
],
```

## Social Authentication

Laravel Socialite provides an expressive, fluent interface to OAuth authentication with Facebook, Twitter, Google, LinkedIn, GitHub, GitLab, and Bitbucket.

```php
// Install Socialite
composer require laravel/socialite

// config/services.php
'github' => [
    'client_id' => env('GITHUB_CLIENT_ID'),
    'client_secret' => env('GITHUB_CLIENT_SECRET'),
    'redirect' => 'http://example.com/callback-url',
],

// routes/web.php
use Laravel\Socialite\Facades\Socialite;

Route::get('/auth/redirect', function () {
    return Socialite::driver('github')->redirect();
});

Route::get('/auth/callback', function () {
    $user = Socialite::driver('github')->user();
    
    // Find or create user
    $authUser = User::updateOrCreate([
        'github_id' => $user->id,
    ], [
        'name' => $user->name,
        'email' => $user->email,
        'github_token' => $user->token,
        'github_refresh_token' => $user->refreshToken,
    ]);
    
    Auth::login($authUser);
    
    return redirect('/dashboard');
});
```

## Password Validation and Hashing

```php
// Validate password
$request->validate([
    'password' => [
        'required',
        'string',
        'min:8',
        'confirmed',
        Password::min(8)
            ->letters()
            ->mixedCase()
            ->numbers()
            ->symbols()
            ->uncompromised(),
    ],
]);

// Hash password
$hashedPassword = Hash::make($password);

// Check password
if (Hash::check($password, $user->password)) {
    // Password matches...
}

// Check if password needs rehash
if (Hash::needsRehash($user->password)) {
    $user->password = Hash::make($password);
    $user->save();
}
```

## Session Authentication

Laravel's session-based authentication is managed through cookies and session storage:

```php
// config/session.php
return [
    'driver' => env('SESSION_DRIVER', 'file'),
    'lifetime' => env('SESSION_LIFETIME', 120),
    'expire_on_close' => false,
    'encrypt' => false,
    'files' => storage_path('framework/sessions'),
    'connection' => env('SESSION_CONNECTION', null),
    'table' => 'sessions',
    'store' => env('SESSION_STORE', null),
    'lottery' => [2, 100],
    'cookie' => env(
        'SESSION_COOKIE',
        Str::slug(env('APP_NAME', 'laravel'), '_').'_session'
    ),
    'path' => '/',
    'domain' => env('SESSION_DOMAIN', null),
    'secure' => env('SESSION_SECURE_COOKIE'),
    'http_only' => true,
    'same_site' => 'lax',
];
```

## Testing Authentication

```php
// Feature test for authentication
public function test_users_can_authenticate_using_the_login_screen()
{
    $user = User::factory()->create();

    $response = $this->post('/login', [
        'email' => $user->email,
        'password' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(RouteServiceProvider::HOME);
}

public function test_users_can_not_authenticate_with_invalid_password()
{
    $user = User::factory()->create();

    $this->post('/login', [
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);

    $this->assertGuest();
}

// Acting as a user in tests
public function test_authenticated_users_can_access_dashboard()
{
    $user = User::factory()->create();

    $response = $this->actingAs($user)
                     ->get('/dashboard');

    $response->assertStatus(200);
}

// Acting as a user with specific guard
$response = $this->actingAs($user, 'api')
                 ->get('/api/user');
```

## Best Practices

1. **Always hash passwords** - Never store plain-text passwords
2. **Use HTTPS** - Secure all authentication routes with HTTPS
3. **Implement rate limiting** - Prevent brute force attacks
4. **Use secure cookies** - Set secure and HTTP-only flags
5. **Regenerate session IDs** - After login to prevent session fixation
6. **Implement two-factor authentication** - For sensitive applications
7. **Log authentication events** - For security monitoring
8. **Use password policies** - Enforce strong passwords
9. **Implement account lockout** - After multiple failed attempts
10. **Validate email addresses** - Require email verification

## Common Authentication Patterns

### Remember Me Functionality

```php
// Login form
<input type="checkbox" name="remember"> Remember Me

// Authentication attempt
if (Auth::attempt($credentials, $request->filled('remember'))) {
    // User is logged in with "remember me" cookie...
}
```

### Throttling Login Attempts

```php
// routes/web.php
Route::post('/login', [AuthController::class, 'login'])
    ->middleware(['guest', 'throttle:login']);

// app/Providers/RouteServiceProvider.php
protected function configureRateLimiting()
{
    RateLimiter::for('login', function (Request $request) {
        return Limit::perMinute(5)->by($request->email.$request->ip());
    });
}
```

### Confirming Password Before Sensitive Actions

```php
// routes/web.php
Route::put('/user/password', function () {
    // ...
})->middleware(['auth', 'password.confirm']);

Route::get('/confirm-password', function () {
    return view('auth.confirm-password');
})->middleware('auth')->name('password.confirm');

Route::post('/confirm-password', function (Request $request) {
    if (! Hash::check($request->password, $request->user()->password)) {
        return back()->withErrors([
            'password' => ['The provided password does not match our records.']
        ]);
    }

    $request->session()->passwordConfirmed();

    return redirect()->intended();
})->middleware(['auth', 'throttle:6,1']);
```

## References

- [Laravel Authentication Documentation](https://laravel.com/docs/12.x/authentication)
- [Laravel Breeze Documentation](https://laravel.com/docs/12.x/starter-kits#laravel-breeze)
- [Laravel Jetstream Documentation](https://jetstream.laravel.com/introduction.html)
- [Laravel Sanctum Documentation](https://laravel.com/docs/12.x/sanctum)
- [Laravel Fortify Documentation](https://laravel.com/docs/12.x/fortify)
- [Laravel Socialite Documentation](https://laravel.com/docs/12.x/socialite)