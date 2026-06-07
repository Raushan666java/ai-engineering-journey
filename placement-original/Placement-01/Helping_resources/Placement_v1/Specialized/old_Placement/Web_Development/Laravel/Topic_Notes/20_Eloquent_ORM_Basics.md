# Eloquent ORM Basics in Laravel

Eloquent is Laravel's built-in ORM (Object-Relational Mapper) that makes it enjoyable to interact with your database. When using Eloquent, each database table has a corresponding "Model" that is used to interact with that table.

## Introduction to Eloquent

Eloquent provides a beautiful, simple ActiveRecord implementation for working with your database. Each database table has a corresponding "Model" which is used to interact with that table.

## Defining Models

### Basic Model Definition

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Model code here
}
```

### Generating Models

```bash
# Generate a model
php artisan make:model Flight

# Generate a model with a migration
php artisan make:model Flight --migration
# or
php artisan make:model Flight -m

# Generate a model with a controller
php artisan make:model Flight --controller
# or
php artisan make:model Flight -c

# Generate a model with a factory
php artisan make:model Flight --factory
# or
php artisan make:model Flight -f

# Generate a model with all related resources
php artisan make:model Flight --all
# or
php artisan make:model Flight -a
```

### Table Names

By default, Eloquent uses the plural, snake_case version of the class name as the table name:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Custom table name
    protected $table = 'my_users';
}
```

### Primary Keys

By default, Eloquent expects an auto-incrementing `id` column as the primary key:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Custom primary key
    protected $primaryKey = 'user_id';
    
    // Non-incrementing primary key
    public $incrementing = false;
    
    // Non-integer primary key
    protected $keyType = 'string';
}
```

### Timestamps

By default, Eloquent expects `created_at` and `updated_at` columns to exist:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Disable timestamps
    public $timestamps = false;
    
    // Custom timestamp column names
    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'last_update';
}
```

### Database Connections

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Use a different connection
    protected $connection = 'mysql_readonly';
}
```

### Default Attribute Values

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Default values for attributes
    protected $attributes = [
        'is_active' => true,
        'role' => 'customer',
    ];
}
```

## Retrieving Models

### Retrieving All Models

```php
// Get all users
$users = App\Models\User::all();

// Loop through results
foreach ($users as $user) {
    echo $user->name;
}
```

### Retrieving Single Models

```php
// Find by primary key
$user = App\Models\User::find(1);

// Find with exception if not found
$user = App\Models\User::findOrFail(1);

// First record matching criteria
$user = App\Models\User::where('active', 1)->first();

// First with exception if not found
$user = App\Models\User::where('active', 1)->firstOrFail();

// First or create
$user = App\Models\User::firstOrCreate(
    ['email' => 'john@example.com'],
    ['name' => 'John', 'active' => true]
);

// First or new (doesn't save to database)
$user = App\Models\User::firstOrNew(
    ['email' => 'john@example.com'],
    ['name' => 'John', 'active' => true]
);
```

### Building Queries

```php
// Basic where clauses
$users = App\Models\User::where('status', 'active')
                        ->where('age', '>', 18)
                        ->get();

// Order by
$users = App\Models\User::orderBy('name', 'desc')->get();

// Limit and offset
$users = App\Models\User::skip(10)->take(5)->get();

// Random order
$users = App\Models\User::inRandomOrder()->get();

// Grouping
$users = App\Models\User::groupBy('role')->having('count', '>', 100)->get();

// Select specific columns
$users = App\Models\User::select('name', 'email', 'phone')->get();
```

### Chunking Results

```php
// Process records in chunks to save memory
App\Models\User::chunk(200, function ($users) {
    foreach ($users as $user) {
        // Process user
    }
});

// Using lazy loading for large datasets
foreach (App\Models\User::lazy() as $user) {
    // Process user
}

// Using cursor for memory-efficient iteration
foreach (App\Models\User::cursor() as $user) {
    // Process user
}
```

### Aggregates

```php
$count = App\Models\User::where('status', 'active')->count();
$max = App\Models\Order::max('price');
$min = App\Models\Order::min('price');
$avg = App\Models\Order::avg('price');
$sum = App\Models\Order::sum('price');
```

## Inserting & Updating Models

### Creating Models

```php
// Create a new instance and save
$user = new App\Models\User;
$user->name = 'John';
$user->email = 'john@example.com';
$user->save();

// Create using create method (requires $fillable property)
$user = App\Models\User::create([
    'name' => 'John',
    'email' => 'john@example.com',
    'password' => bcrypt('password'),
]);

// firstOrCreate - find first record or create if not exists
$user = App\Models\User::firstOrCreate(
    ['email' => 'john@example.com'], // attributes to search by
    ['name' => 'John', 'password' => bcrypt('password')] // attributes to set if creating
);

// updateOrCreate - update if exists, create if not
$user = App\Models\User::updateOrCreate(
    ['email' => 'john@example.com'],
    ['name' => 'John', 'active' => true]
);
```

### Mass Assignment Protection

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Attributes that are mass assignable
    protected $fillable = ['name', 'email', 'password'];
    
    // Alternative: attributes that are NOT mass assignable
    protected $guarded = ['id', 'admin_flag'];
}
```

### Updating Models

```php
// Find and update
$user = App\Models\User::find(1);
$user->name = 'New Name';
$user->save();

// Update using query
App\Models\User::where('status', 'inactive')
               ->update(['status' => 'active']);

// Mass update with timestamps
$user->update(['name' => 'New Name', 'email' => 'new@example.com']);
```

### Deleting Models

```php
// Find and delete
$user = App\Models\User::find(1);
$user->delete();

// Delete by ID
App\Models\User::destroy(1);
App\Models\User::destroy([1, 2, 3]);

// Delete using query
App\Models\User::where('status', 'inactive')->delete();
```

### Soft Deletes

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
    use SoftDeletes;
    
    // Custom column name (default is 'deleted_at')
    protected $dates = ['deleted_at'];
}

// Querying soft deleted models
$users = App\Models\User::withTrashed()->get();
$users = App\Models\User::onlyTrashed()->get();

// Restore soft deleted models
$user->restore();
App\Models\User::withTrashed()->where('status', 'active')->restore();

// Force delete (permanent)
$user->forceDelete();
```

## Query Scopes

Query scopes allow you to define common sets of query constraints that you can easily reuse throughout your application.

### Local Scopes

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Define a local scope
    public function scopeActive($query)
    {
        return $query->where('active', true);
    }
    
    // Scope with parameters
    public function scopeOfType($query, $type)
    {
        return $query->where('type', $type);
    }
}

// Using scopes
$users = App\Models\User::active()->get();
$users = App\Models\User::ofType('admin')->get();

// Combining scopes
$users = App\Models\User::active()->ofType('admin')->get();
```

### Global Scopes

Global scopes are automatically applied to all queries for a given model.

#### Using a Closure

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class User extends Model
{
    protected static function booted()
    {
        static::addGlobalScope('active', function (Builder $builder) {
            $builder->where('active', true);
        });
    }
}
```

#### Using a Class

```php
<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class ActiveScope implements Scope
{
    public function apply(Builder $builder, Model $model)
    {
        $builder->where('active', true);
    }
}
```

```php
<?php

namespace App\Models;

use App\Scopes\ActiveScope;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected static function booted()
    {
        static::addGlobalScope(new ActiveScope);
    }
}
```

#### Removing Global Scopes

```php
// Remove all global scopes
$users = App\Models\User::withoutGlobalScopes()->get();

// Remove specific global scopes
$users = App\Models\User::withoutGlobalScopes([
    ActiveScope::class, AnotherScope::class
])->get();

// Remove a single global scope
$users = App\Models\User::withoutGlobalScope(ActiveScope::class)->get();
```

## Model Events

Eloquent models fire several events, allowing you to hook into various points in the model's lifecycle.

### Available Events

- `retrieved`: after a model has been retrieved from the database
- `creating`: before a model is created
- `created`: after a model is created
- `updating`: before a model is updated
- `updated`: after a model is updated
- `saving`: before a model is saved (created or updated)
- `saved`: after a model is saved (created or updated)
- `deleting`: before a model is deleted
- `deleted`: after a model is deleted
- `restoring`: before a soft-deleted model is restored
- `restored`: after a soft-deleted model is restored
- `replicating`: before a model is replicated

### Using Event Listeners

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected static function booted()
    {
        static::created(function ($user) {
            // Handle the event
        });
        
        static::updated(function ($user) {
            // Handle the event
        });
    }
}
```

### Observers

```php
<?php

namespace App\Observers;

use App\Models\User;

class UserObserver
{
    public function created(User $user)
    {
        // Handle the created event
    }
    
    public function updated(User $user)
    {
        // Handle the updated event
    }
    
    public function deleted(User $user)
    {
        // Handle the deleted event
    }
}
```

Register the observer in the `boot` method of your `AppServiceProvider`:

```php
<?php

namespace App\Providers;

use App\Models\User;
use App\Observers\UserObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        User::observe(UserObserver::class);
    }
}
```

## Comparing Models

### Comparing Two Models

```php
if ($user1->is($user2)) {
    // Models are the same
}

if ($user1->isNot($user2)) {
    // Models are not the same
}
```

### Comparing With Existing Model

```php
if ($user->exists) {
    // Model exists in the database
}

if ($user->wasRecentlyCreated) {
    // Model was recently created
}
```

## Collections

When you retrieve multiple models, the results are wrapped in an instance of `Illuminate\Database\Eloquent\Collection`.

```php
$users = App\Models\User::all();

// Count the collection
$count = $users->count();

// Filter the collection
$activeUsers = $users->filter(function ($user) {
    return $user->active;
});

// Transform the collection
$names = $users->map(function ($user) {
    return $user->name;
});

// Check if the collection contains a specific item
if ($users->contains(1)) {
    // Collection contains the user with ID 1
}

// Get the first item in the collection
$firstUser = $users->first();

// Get a random item from the collection
$randomUser = $users->random();

// Chunk the collection
$users->chunk(2)->each(function ($chunk) {
    // Process chunk
});
```

## Best Practices

1. **Use mass assignment protection**: Define `$fillable` or `$guarded` properties
2. **Use query scopes**: Encapsulate common query constraints
3. **Use model events**: Hook into the model lifecycle for side effects
4. **Use eager loading**: Avoid N+1 query problems
5. **Use soft deletes**: Consider using soft deletes instead of permanent deletion
6. **Use model factories**: Create test data easily
7. **Use model observers**: Organize event handling logic
8. **Use custom collections**: Extend the base collection for model-specific methods
9. **Use accessors and mutators**: Format data consistently
10. **Use model caching**: Cache frequently accessed models

## References

- [Laravel Eloquent Documentation](https://laravel.com/docs/12.x/eloquent)
- [Laravel Collections Documentation](https://laravel.com/docs/12.x/collections)
- [Laravel Eloquent Events Documentation](https://laravel.com/docs/12.x/eloquent#events)