# Authorization in Laravel

Laravel provides a powerful authorization system for controlling access to resources and actions in your application. This guide covers gates, policies, and other authorization features.

## Introduction to Authorization

Authorization determines whether an authenticated user has permission to perform a specific action or access a specific resource. Laravel provides two primary ways to authorize actions:

1. **Gates**: Simple closures that determine if a user can perform a given action
2. **Policies**: Classes that organize authorization logic around a particular model or resource

## Gates

Gates are simple closures that determine if a user can perform a given action. They are typically defined in the `boot` method of the `AuthServiceProvider`:

```php
<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Models\Post;
use App\Models\User;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // Model => Policy mappings
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        // Register gates
        Gate::define('update-post', function (User $user, Post $post) {
            return $user->id === $post->user_id;
        });
        
        Gate::define('admin', function (User $user) {
            return $user->is_admin;
        });
    }
}
```

### Using Gates

Gates can be checked in several ways:

```php
// Using the Gate facade
use Illuminate\Support\Facades\Gate;

if (Gate::allows('update-post', $post)) {
    // The user can update the post...
}

if (Gate::denies('update-post', $post)) {
    // The user cannot update the post...
}

// Using the User model
if ($user->can('update-post', $post)) {
    // The user can update the post...
}

if ($user->cannot('update-post', $post)) {
    // The user cannot update the post...
}

// Using the authorize method in controllers
public function update(Request $request, Post $post)
{
    $this->authorize('update-post', $post);
    
    // The user can update the post...
}

// Using middleware
Route::put('/post/{post}', function (Post $post) {
    // The user can update the post...
})->middleware('can:update-post,post');
```

### Gate Responses

Gates can return custom responses:

```php
Gate::define('update-post', function (User $user, Post $post) {
    if ($user->id === $post->user_id) {
        return true;
    }
    
    return Response::deny('You do not own this post.');
});

// Using the response
$response = Gate::inspect('update-post', $post);

if ($response->allowed()) {
    // The user can update the post...
} else {
    echo $response->message();
}
```

### Gate Hooks

You can define hooks that run before or after all authorization checks:

```php
// Before hook
Gate::before(function (User $user, string $ability) {
    if ($user->isAdministrator()) {
        return true;
    }
});

// After hook
Gate::after(function (User $user, string $ability, bool $result, mixed $arguments) {
    if ($user->isOwner($arguments[0])) {
        return true;
    }
});
```

## Policies

Policies are classes that organize authorization logic around a particular model or resource. They are typically stored in the `app/Policies` directory.

### Creating Policies

```bash
# Generate a policy for a model
php artisan make:policy PostPolicy --model=Post
```

This creates a policy class with methods for various actions:

```php
<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Post $post): bool
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Post $post): bool
    {
        return $user->id === $post->user_id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Post $post): bool
    {
        return $user->id === $post->user_id;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Post $post): bool
    {
        return $user->id === $post->user_id;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Post $post): bool
    {
        return $user->isAdmin();
    }
}
```

### Registering Policies

Policies are registered in the `AuthServiceProvider`:

```php
/**
 * The model to policy mappings for the application.
 *
 * @var array<class-string, class-string>
 */
protected $policies = [
    Post::class => PostPolicy::class,
];
```

Alternatively, you can use auto-discovery by implementing the `shouldRegisterPolicies` method:

```php
/**
 * Register any application authentication / authorization services.
 */
public function boot(): void
{
    $this->registerPolicies();
    
    // Auto-discover policies
    Gate::guessPolicyNamesUsing(function (string $modelClass) {
        // Return the policy class name for the given model...
        return 'App\\Policies\\' . class_basename($modelClass) . 'Policy';
    });
}
```

### Using Policies

Policies can be checked in several ways:

```php
// Using the User model
if ($user->can('update', $post)) {
    // The user can update the post...
}

if ($user->cannot('update', $post)) {
    // The user cannot update the post...
}

// Using the Gate facade
if (Gate::allows('update', $post)) {
    // The user can update the post...
}

if (Gate::denies('update', $post)) {
    // The user cannot update the post...
}

// Using the authorize method in controllers
public function update(Request $request, Post $post)
{
    $this->authorize('update', $post);
    
    // The user can update the post...
}

// Using middleware
Route::put('/post/{post}', function (Post $post) {
    // The user can update the post...
})->middleware('can:update,post');
```

### Policy Filters

Policy filters allow you to grant all abilities to certain users:

```php
public function before(User $user, string $ability): bool|null
{
    if ($user->isAdministrator()) {
        return true;
    }
    
    return null;
}
```

### Policy Responses

Like gates, policies can return custom responses:

```php
public function update(User $user, Post $post): Response|bool
{
    if ($user->id === $post->user_id) {
        return true;
    }
    
    return Response::deny('You do not own this post.');
}
```

## Authorizing Resource Controllers

For resource controllers, you can use the `authorizeResource` method in the constructor:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Post::class, 'post');
    }
    
    // Controller methods...
}
```

This automatically applies the appropriate authorization policy methods to each controller method:

| Controller Method | Policy Method |
|------------------|--------------|
| index            | viewAny      |
| show             | view         |
| create           | create       |
| store            | create       |
| edit             | update       |
| update           | update       |
| destroy          | delete       |

## Blade Authorization Directives

Laravel provides several Blade directives for authorization:

```blade
{{-- Using can directive --}}
@can('update', $post)
    <a href="{{ route('posts.edit', $post) }}">Edit Post</a>
@elsecan('create', App\Models\Post::class)
    <a href="{{ route('posts.create') }}">Create Post</a>
@endcan

{{-- Using cannot directive --}}
@cannot('update', $post)
    <p>You cannot edit this post.</p>
@endcannot

{{-- Using canany directive --}}
@canany(['update', 'delete'], $post)
    <div class="btn-group">
        <a href="{{ route('posts.edit', $post) }}" class="btn btn-primary">Edit</a>
        <form action="{{ route('posts.destroy', $post) }}" method="POST">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-danger">Delete</button>
        </form>
    </div>
@endcanany

{{-- Using guest directive --}}
@guest
    <p>Please log in to edit posts.</p>
@endguest
```

## Supplying Additional Context

Sometimes you may need additional context for authorization decisions:

```php
// In a policy
public function viewAnalytics(User $user, Post $post, bool $isAdmin): bool
{
    return $isAdmin || $user->id === $post->user_id;
}

// Using the policy
$this->authorize('viewAnalytics', [$post, true]);
```

## Authorization Middleware

Laravel provides middleware for authorization:

```php
// Using the 'can' middleware
Route::get('/post/{post}', function (Post $post) {
    // The user can view the post...
})->middleware('can:view,post');

// Using the 'can' middleware with additional parameters
Route::get('/post/{post}/analytics', function (Post $post) {
    // The user can view the post analytics...
})->middleware('can:viewAnalytics,post,true');

// Using the 'auth' middleware with a specific guard
Route::get('/dashboard', function () {
    // The user is authenticated...
})->middleware('auth:api');
```

## Checking Multiple Abilities

You can check multiple abilities at once:

```php
// Check if the user has any of the abilities
if ($user->canAny(['update', 'delete'], $post)) {
    // The user can update or delete the post...
}

// Check if the user has all of the abilities
if (Gate::check('update', $post) && Gate::check('delete', $post)) {
    // The user can update and delete the post...
}
```

## Testing Authorization

You can test authorization in your feature tests:

```php
// Assert that a user can perform an action
$this->actingAs($user)
     ->assertCan('update', $post);

// Assert that a user cannot perform an action
$this->actingAs($user)
     ->assertCannot('delete', $post);
```

## Best Practices

1. **Use policies for model-related authorization**: Organize authorization logic around models
2. **Use gates for simple, non-model-related checks**: Like checking if a user is an admin
3. **Keep authorization logic simple**: Each method should have a single responsibility
4. **Use policy filters for common checks**: Like checking if a user is an admin
5. **Return custom responses**: Provide helpful error messages
6. **Test your authorization logic**: Write tests to ensure your authorization works correctly
7. **Use middleware for route-level authorization**: Apply authorization at the route level
8. **Use Blade directives for view-level authorization**: Control what users see in templates
9. **Document your authorization rules**: Make it clear what permissions users have
10. **Consider using roles and permissions**: For complex authorization needs

## Common Authorization Patterns

### Role-Based Authorization

```php
// User model
public function roles()
{
    return $this->belongsToMany(Role::class);
}

public function hasRole($role)
{
    return $this->roles->contains('name', $role);
}

// Gate definition
Gate::define('admin-access', function (User $user) {
    return $user->hasRole('admin');
});

// Policy with roles
public function update(User $user, Post $post)
{
    return $user->id === $post->user_id || $user->hasRole('editor');
}
```

### Permission-Based Authorization

```php
// User model
public function permissions()
{
    return $this->belongsToMany(Permission::class);
}

public function hasPermission($permission)
{
    return $this->permissions->contains('name', $permission);
}

// Gate definition
Gate::define('edit-settings', function (User $user) {
    return $user->hasPermission('edit-settings');
});

// Policy with permissions
public function update(User $user, Post $post)
{
    return $user->id === $post->user_id || $user->hasPermission('edit-posts');
}
```

### Team/Organization-Based Authorization

```php
// User model
public function teams()
{
    return $this->belongsToMany(Team::class);
}

public function belongsToTeam($team)
{
    return $this->teams->contains('id', $team->id);
}

// Policy with teams
public function update(User $user, Post $post)
{
    return $user->id === $post->user_id || $user->belongsToTeam($post->team);
}
```

## References

- [Laravel Authorization Documentation](https://laravel.com/docs/12.x/authorization)
- [Laravel Policies Documentation](https://laravel.com/docs/12.x/authorization#creating-policies)
- [Laravel Gates Documentation](https://laravel.com/docs/12.x/authorization#gates)