# Controllers in Laravel

Controllers are a fundamental part of Laravel applications, organizing request handling logic into classes rather than defining all of your request handling logic as closures in route files.

## Introduction to Controllers

Controllers group related request handling logic into classes. Instead of defining all of your request handling logic as closures in route files, you may wish to organize this behavior using controller classes.

## Basic Controllers

### Creating Controllers

You can create a controller using the `make:controller` Artisan command:

```bash
php artisan make:controller UserController
```

This will create a new controller at `app/Http/Controllers/UserController.php`:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //
}
```

### Basic Controller Methods

```php
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Show a list of all users.
     */
    public function index()
    {
        $users = User::all();
        
        return view('users.index', ['users' => $users]);
    }

    /**
     * Show the form for creating a new user.
     */
    public function create()
    {
        return view('users.create');
    }

    /**
     * Store a newly created user.
     */
    public function store(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed',
        ]);
        
        // Create the user
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
        ]);
        
        // Redirect to the user's profile
        return redirect()->route('users.show', $user)
                         ->with('success', 'User created successfully!');
    }

    /**
     * Display the specified user.
     */
    public function show(User $user)
    {
        return view('users.show', ['user' => $user]);
    }

    /**
     * Show the form for editing the specified user.
     */
    public function edit(User $user)
    {
        return view('users.edit', ['user' => $user]);
    }

    /**
     * Update the specified user.
     */
    public function update(Request $request, User $user)
    {
        // Validate the request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
        ]);
        
        // Update the user
        $user->update($validated);
        
        // Redirect to the user's profile
        return redirect()->route('users.show', $user)
                         ->with('success', 'User updated successfully!');
    }

    /**
     * Remove the specified user.
     */
    public function destroy(User $user)
    {
        $user->delete();
        
        return redirect()->route('users.index')
                         ->with('success', 'User deleted successfully!');
    }
}
```

### Routing to Controllers

```php
// Basic route to controller method
Route::get('/users', [UserController::class, 'index']);

// Route with parameters
Route::get('/users/{user}', [UserController::class, 'show']);

// Named route to controller method
Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');

// Controller route with middleware
Route::get('/users', [UserController::class, 'index'])->middleware('auth');
```

## Single Action Controllers

Single action controllers contain only a single method, typically named `__invoke`. These are useful when a controller only needs to handle a single action:

```bash
php artisan make:controller ShowProfile --invokable
```

```php
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ShowProfile extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, $id)
    {
        $user = User::findOrFail($id);
        
        return view('users.profile', ['user' => $user]);
    }
}
```

Routing to a single action controller:

```php
Route::get('/user/{id}', ShowProfile::class);
```

## Resource Controllers

Resource controllers handle typical CRUD operations for a resource. Laravel provides a shortcut for creating resource controllers:

```bash
php artisan make:controller PhotoController --resource
```

This will create a controller with methods for each of the typical resource operations:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
```

### Resource Routes

You can register a resource route that maps to all of the typical CRUD routes:

```php
Route::resource('photos', PhotoController::class);
```

This single line creates the following routes:

| Verb      | URI                  | Action  | Route Name     |
|-----------|----------------------|---------|----------------|
| GET       | /photos              | index   | photos.index   |
| GET       | /photos/create       | create  | photos.create  |
| POST      | /photos              | store   | photos.store   |
| GET       | /photos/{photo}      | show    | photos.show    |
| GET       | /photos/{photo}/edit | edit    | photos.edit    |
| PUT/PATCH | /photos/{photo}      | update  | photos.update  |
| DELETE    | /photos/{photo}      | destroy | photos.destroy |

### Customizing Resource Routes

```php
// Specify only certain actions
Route::resource('photos', PhotoController::class)->only([
    'index', 'show'
]);

// Exclude certain actions
Route::resource('photos', PhotoController::class)->except([
    'create', 'store', 'update', 'destroy'
]);

// Customize route names
Route::resource('photos', PhotoController::class)->names([
    'create' => 'photos.build'
]);

// Customize route parameters
Route::resource('photos', PhotoController::class)->parameters([
    'photos' => 'photo_id'
]);
```

### API Resource Routes

For API resources that don't need the `create` and `edit` methods (which are typically used for displaying HTML forms), you can use the `apiResource` method:

```php
Route::apiResource('photos', PhotoController::class);
```

You can also generate an API resource controller:

```bash
php artisan make:controller API/PhotoController --api
```

### Nested Resource Routes

Sometimes you may need to define routes to a nested resource:

```php
Route::resource('photos.comments', PhotoCommentController::class);
```

This will create nested resource routes like:

```
/photos/{photo}/comments
/photos/{photo}/comments/create
/photos/{photo}/comments/{comment}
```

## Dependency Injection in Controllers

Laravel's service container automatically resolves dependencies for your controller methods:

```php
<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $users;
    
    /**
     * Create a new controller instance.
     */
    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }
    
    /**
     * Show the user with the given ID.
     */
    public function show(Request $request, User $user)
    {
        // $user is automatically resolved by route model binding
        return view('users.show', ['user' => $user]);
    }
}
```

## Route Model Binding

Laravel's route model binding provides a convenient way to automatically inject model instances into your routes:

### Implicit Binding

```php
Route::get('/users/{user}', [UserController::class, 'show']);

public function show(User $user)
{
    return view('users.show', ['user' => $user]);
}
```

### Custom Keys

By default, Laravel uses the model's primary key. You can customize this by overriding the `getRouteKeyName` method in your model:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName(): string
    {
        return 'username';
    }
}
```

### Explicit Binding

You can explicitly bind parameters in your `RouteServiceProvider`:

```php
/**
 * Define your route model bindings, pattern filters, etc.
 */
public function boot(): void
{
    Route::model('user', User::class);
    
    // Custom resolution logic
    Route::bind('user', function (string $value) {
        return User::where('username', $value)->firstOrFail();
    });
    
    // ...
}
```

### Customizing Missing Model Behavior

You can customize what happens when a model is not found by defining a `missing` method on your route definition:

```php
Route::get('/users/{user}', [UserController::class, 'show'])
    ->missing(function (Request $request) {
        return redirect()->route('users.index');
    });
```

## Form Method Spoofing

HTML forms only support `GET` and `POST` methods, but Laravel routes support `PUT`, `PATCH`, and `DELETE` methods. To use these methods in your forms, you need to add a hidden `_method` field:

```html
<form action="/photos/1" method="POST">
    @csrf
    @method('PUT')
    <!-- Form fields -->
</form>
```

## Accessing the Current Route

You can access information about the current route using the `Route` facade:

```php
$route = Route::current();
$name = Route::currentRouteName();
$action = Route::currentRouteAction();
```

## Controller Middleware

You can assign middleware to controller routes in several ways:

### In the Route Definition

```php
Route::get('profile', [UserController::class, 'show'])->middleware('auth');
```

### In the Controller Constructor

```php
public function __construct()
{
    $this->middleware('auth');
    $this->middleware('log')->only('index');
    $this->middleware('subscribed')->except(['index', 'show']);
}
```

### Controller Middleware with Parameters

```php
$this->middleware(function ($request, $next) {
    // Custom middleware logic...
    
    return $next($request);
});
```

## Resource Controllers with Model Binding

You can type-hint the model in resource controller methods:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return view('posts.show', ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        // Validate the request...
        
        $post->update($request->all());
        
        return redirect()->route('posts.show', $post);
    }
}
```

## Nested Resource Controllers

When working with nested resources, you can access both parent and child models:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Comment;
use Illuminate\Http\Request;

class PostCommentController extends Controller
{
    /**
     * Display a listing of the comments for a post.
     */
    public function index(Post $post)
    {
        return view('comments.index', [
            'post' => $post,
            'comments' => $post->comments,
        ]);
    }

    /**
     * Store a newly created comment for a post.
     */
    public function store(Request $request, Post $post)
    {
        $validated = $request->validate([
            'body' => 'required|string',
        ]);
        
        $comment = $post->comments()->create($validated);
        
        return redirect()->route('posts.comments.index', $post);
    }

    /**
     * Display the specified comment.
     */
    public function show(Post $post, Comment $comment)
    {
        // Ensure the comment belongs to the post
        if ($comment->post_id !== $post->id) {
            abort(404);
        }
        
        return view('comments.show', [
            'post' => $post,
            'comment' => $comment,
        ]);
    }
}
```

## Best Practices

1. **Keep controllers focused**: Each controller should handle a specific resource or group of related actions
2. **Use resource controllers**: For standard CRUD operations, use resource controllers
3. **Use dependency injection**: Inject dependencies through the constructor or method parameters
4. **Use route model binding**: Let Laravel automatically resolve models from route parameters
5. **Validate input**: Always validate user input in controller methods
6. **Use form requests**: For complex validation, use form request classes
7. **Keep controllers thin**: Move business logic to services or repositories
8. **Use middleware**: Apply middleware to restrict access to controller actions
9. **Return appropriate responses**: Return views for web requests and JSON for API requests
10. **Use named routes**: Use named routes for redirects and URL generation

## References

- [Laravel Controllers Documentation](https://laravel.com/docs/12.x/controllers)
- [Laravel Resource Controllers Documentation](https://laravel.com/docs/12.x/controllers#resource-controllers)
- [Laravel Route Model Binding Documentation](https://laravel.com/docs/12.x/routing#route-model-binding)