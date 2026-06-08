# 5. Next Steps in Laravel

## Request Lifecycle

### Entry Point
- `public/index.php` - Application entry point
- Autoloading via Composer
- Bootstrap application instance

### Request Handling
1. HTTP request received
2. Request captured by `index.php`
3. Request sent to HTTP kernel
4. Middleware processing
5. Route matching
6. Controller/action execution
7. Response generation
8. Middleware (again, in reverse)
9. Response sent to browser

### Service Providers
- Register application services
- Bootstrap application components
- Key providers:
  - `AppServiceProvider`
  - `RouteServiceProvider`
  - `EventServiceProvider`
  - `AuthServiceProvider`

## Routing Fundamentals

### Basic Routes
```php
Route::get('/greeting', function () {
    return 'Hello World';
});

Route::post('/users', [UserController::class, 'store']);
```

### Route Parameters
```php
Route::get('/users/{id}', [UserController::class, 'show']);

// Optional parameters
Route::get('/users/{name?}', function ($name = 'Guest') {
    return 'Hello ' . $name;
});
```

### Named Routes
```php
Route::get('/profile', [ProfileController::class, 'show'])->name('profile');

// Generate URL
$url = route('profile');
```

### Route Groups
```php
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::get('/settings', [SettingsController::class, 'index']);
});

Route::prefix('admin')->group(function () {
    Route::get('/users', [AdminController::class, 'users']);
    Route::get('/settings', [AdminController::class, 'settings']);
});
```

## Controllers

### Basic Controller
```php
namespace App\Http\Controllers;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('users.index', ['users' => $users]);
    }
    
    public function show($id)
    {
        $user = User::findOrFail($id);
        return view('users.show', ['user' => $user]);
    }
}
```

### Resource Controllers
```php
// Generate controller
// php artisan make:controller PhotoController --resource

// Register resource routes
Route::resource('photos', PhotoController::class);
```

### Single Action Controllers
```php
namespace App\Http\Controllers;

class ShowProfile extends Controller
{
    public function __invoke($id)
    {
        return view('profile', ['user' => User::findOrFail($id)]);
    }
}

Route::get('/user/{id}/profile', ShowProfile::class);
```

## Views and Blade Templating

### Basic Views
```php
return view('greeting', ['name' => 'James']);
```

### Blade Syntax
```blade
{{-- Comments --}}

{!! $unescapedVariable !!}
{{ $escapedVariable }}

@if ($condition)
    This is true
@elseif ($anotherCondition)
    This is also true
@else
    This is false
@endif

@foreach ($users as $user)
    {{ $user->name }}
@endforeach
```

### Blade Layouts
```blade
<!-- layouts/app.blade.php -->
<html>
    <head>
        <title>@yield('title')</title>
    </head>
    <body>
        @section('sidebar')
            This is the master sidebar.
        @show

        <div class="container">
            @yield('content')
        </div>
    </body>
</html>

<!-- child.blade.php -->
@extends('layouts.app')

@section('title', 'Page Title')

@section('sidebar')
    @parent
    <p>This is appended to the sidebar.</p>
@endsection

@section('content')
    <p>This is my body content.</p>
@endsection
```

### Blade Components
```blade
<!-- components/alert.blade.php -->
<div class="alert alert-{{ $type }}">
    {{ $slot }}
</div>

<!-- Usage -->
<x-alert type="error">
    <strong>Whoops!</strong> Something went wrong!
</x-alert>
```

## Eloquent ORM Basics

### Model Definition
```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Table name (optional if follows convention)
    protected $table = 'users';
    
    // Primary key (optional if 'id')
    protected $primaryKey = 'user_id';
    
    // Mass assignable attributes
    protected $fillable = ['name', 'email', 'password'];
    
    // Hidden attributes
    protected $hidden = ['password', 'remember_token'];
}
```

### Basic Operations
```php
// Retrieve all records
$users = User::all();

// Find by primary key
$user = User::find(1);

// Find with conditions
$activeUsers = User::where('active', 1)->get();

// Create
$user = User::create([
    'name' => 'John',
    'email' => 'john@example.com',
    'password' => bcrypt('password')
]);

// Update
$user = User::find(1);
$user->name = 'Jane';
$user->save();

// Delete
$user = User::find(1);
$user->delete();
```

### Relationships
```php
// One-to-One
class User extends Model
{
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}

// One-to-Many
class Post extends Model
{
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}

// Many-to-Many
class User extends Model
{
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
```

## Frontend Development

### Vite Integration
- Modern asset bundling
- Hot Module Replacement (HMR)
- Configuration in `vite.config.js`
- Usage in Blade: `@vite(['resources/css/app.css', 'resources/js/app.js'])`

### Inertia.js
- SPA-like experience without API complexity
- Server-side routing with client-side rendering
- Vue, React, or Svelte components
- Persistent layouts

### Livewire
- Full-stack framework for dynamic interfaces
- No JavaScript required
- Real-time validation
- File uploads, modals, pagination

## Best Learning Methods
- Read the request lifecycle docs: https://laravel.com/docs/12.x/lifecycle
- Create routes for a simple blog or todo application
- Build CRUD operations with controllers and Eloquent
- Practice creating Blade layouts and components
- Experiment with different frontend approaches
- Follow step-by-step tutorials for each concept
- Build a small project combining all these elements
