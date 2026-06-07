# Eloquent ORM in Laravel

## Introduction to Eloquent

Eloquent is Laravel's built-in Object-Relational Mapper (ORM) that provides a beautiful, simple ActiveRecord implementation for working with databases. Each database table has a corresponding "Model" that is used to interact with that table.

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

### Table Names

By default, Eloquent uses the plural, snake_case version of the class name as the table name. You can override this:

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

## Relationships

### One To One

```php
// User has one profile
public function profile()
{
    return $this->hasOne(Profile::class);
}

// Custom foreign key
public function profile()
{
    return $this->hasOne(Profile::class, 'user_id', 'id');
}

// Inverse relationship
public function user()
{
    return $this->belongsTo(User::class);
}
```

### One To Many

```php
// User has many posts
public function posts()
{
    return $this->hasMany(Post::class);
}

// Inverse relationship
public function user()
{
    return $this->belongsTo(User::class);
}
```

### Many To Many

```php
// User belongs to many roles
public function roles()
{
    return $this->belongsToMany(Role::class);
}

// Custom pivot table and keys
public function roles()
{
    return $this->belongsToMany(Role::class, 'user_roles', 'user_id', 'role_id');
}

// With pivot data
public function roles()
{
    return $this->belongsToMany(Role::class)->withPivot('active', 'created_by');
}

// With timestamps on pivot
public function roles()
{
    return $this->belongsToMany(Role::class)->withTimestamps();
}
```

### Has One Through

```php
// User -> Supplier -> History relationship
public function history()
{
    return $this->hasOneThrough(History::class, Supplier::class);
}
```

### Has Many Through

```php
// Country -> User -> Post relationship
public function posts()
{
    return $this->hasManyThrough(Post::class, User::class);
}
```

### Polymorphic Relationships

```php
// One-to-one polymorphic
public function image()
{
    return $this->morphOne(Image::class, 'imageable');
}

// One-to-many polymorphic
public function comments()
{
    return $this->morphMany(Comment::class, 'commentable');
}

// Many-to-many polymorphic
public function tags()
{
    return $this->morphToMany(Tag::class, 'taggable');
}
```

## Querying Relationships

### Eager Loading

```php
// Eager load single relationship
$users = App\Models\User::with('posts')->get();

// Eager load multiple relationships
$users = App\Models\User::with(['posts', 'profile'])->get();

// Nested relationships
$users = App\Models\User::with('posts.comments')->get();

// Eager load with constraints
$users = App\Models\User::with(['posts' => function ($query) {
    $query->where('published', true);
}])->get();
```

### Lazy Eager Loading

```php
$users = App\Models\User::all();

// Later decide to load relationships
if ($someCondition) {
    $users->load('posts', 'profile');
}
```

### Constraining Eager Loads

```php
$users = App\Models\User::with(['posts' => function ($query) {
    $query->where('published', true);
}])->get();
```

### Relationship Existence

```php
// Has relationship
$users = App\Models\User::has('posts')->get();

// Has relationship with count
$users = App\Models\User::has('posts', '>=', 3)->get();

// With specific conditions
$users = App\Models\User::whereHas('posts', function ($query) {
    $query->where('published', true);
})->get();

// Without relationship
$users = App\Models\User::doesntHave('posts')->get();
```

### Counting Related Models

```php
// With counts
$users = App\Models\User::withCount('posts')->get();
foreach ($users as $user) {
    echo $user->posts_count;
}

// Multiple relationship counts
$users = App\Models\User::withCount(['posts', 'comments'])->get();

// With constraints
$users = App\Models\User::withCount(['posts' => function ($query) {
    $query->where('published', true);
}])->get();
```

## Model Events

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

// Register in AppServiceProvider
use App\Models\User;
use App\Observers\UserObserver;

public function boot()
{
    User::observe(UserObserver::class);
}
```

## Query Scopes

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
```

### Global Scopes

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class User extends Model
{
    // Using closure-based global scope
    protected static function booted()
    {
        static::addGlobalScope('active', function (Builder $builder) {
            $builder->where('active', true);
        });
    }
}

// Using class-based global scope
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

// Apply in model
protected static function booted()
{
    static::addGlobalScope(new ActiveScope);
}

// Removing global scopes
User::withoutGlobalScope('active')->get();
User::withoutGlobalScope(ActiveScope::class)->get();
User::withoutGlobalScopes()->get();
```

## Accessors & Mutators

### Accessors

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class User extends Model
{
    // Using Attribute class (Laravel 9+)
    protected function firstName(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => ucfirst($value),
        );
    }
    
    // Legacy style (pre-Laravel 9)
    public function getFirstNameAttribute($value)
    {
        return ucfirst($value);
    }
    
    // Accessor for non-column attribute
    protected function fullName(): Attribute
    {
        return Attribute::make(
            get: fn () => "{$this->first_name} {$this->last_name}",
        );
    }
}

// Usage
$user = App\Models\User::find(1);
echo $user->first_name; // Automatically uses the accessor
echo $user->full_name;
```

### Mutators

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class User extends Model
{
    // Using Attribute class (Laravel 9+)
    protected function firstName(): Attribute
    {
        return Attribute::make(
            set: fn ($value) => strtolower($value),
        );
    }
    
    // Legacy style (pre-Laravel 9)
    public function setFirstNameAttribute($value)
    {
        $this->attributes['first_name'] = strtolower($value);
    }
    
    // Combined accessor and mutator
    protected function firstName(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => ucfirst($value),
            set: fn ($value) => strtolower($value),
        );
    }
}

// Usage
$user = App\Models\User::find(1);
$user->first_name = 'John'; // Automatically uses the mutator
$user->save();
```

## Attribute Casting

### Basic Casting

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Cast attributes to native types
    protected $casts = [
        'is_admin' => 'boolean',
        'age' => 'integer',
        'height' => 'float',
        'options' => 'array',
        'settings' => 'json',
        'birthday' => 'date',
        'last_login_at' => 'datetime',
        'expires_at' => 'datetime:Y-m-d',
    ];
}
```

### Custom Casts

```php
<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

class Json implements CastsAttributes
{
    public function get($model, string $key, $value, array $attributes)
    {
        return json_decode($value, true);
    }
    
    public function set($model, string $key, $value, array $attributes)
    {
        return json_encode($value);
    }
}

// In model
protected $casts = [
    'options' => Json::class,
];
```

### Enum Casting (PHP 8.1+)

```php
<?php

namespace App\Enums;

enum Status: string
{
    case Pending = 'pending';
    case Active = 'active';
    case Suspended = 'suspended';
}

// In model
protected $casts = [
    'status' => Status::class,
];

// Usage
$user->status = Status::Active;
$user->save();
```

## Collections

Eloquent returns results as `Collection` objects, which provide numerous helpful methods:

```php
$users = App\Models\User::all();

// Collection methods
$names = $users->pluck('name');
$activeUsers = $users->where('active', true);
$usersByRole = $users->groupBy('role');
$hasAdmin = $users->contains('role', 'admin');
$transformed = $users->map(function ($user) {
    return [
        'id' => $user->id,
        'name' => $user->name,
        'email' => $user->email,
    ];
});
```

## Serialization

### Converting to Arrays / JSON

```php
$user = App\Models\User::find(1);

// To array
$array = $user->toArray();

// To JSON
$json = $user->toJson();
$json = json_encode($user);
```

### Hiding Attributes

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Hide attributes from serialization
    protected $hidden = ['password', 'remember_token'];
    
    // Alternative: only include specific attributes
    protected $visible = ['id', 'name', 'email'];
}
```

### Appending Values

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Append non-column attributes
    protected $appends = ['full_name', 'is_admin'];
    
    // Define the accessor
    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }
    
    public function getIsAdminAttribute()
    {
        return $this->role === 'admin';
    }
}
```

## Best Practices

1. **Follow naming conventions**:
   - Models: singular, PascalCase (e.g., `User`)
   - Tables: plural, snake_case (e.g., `users`)
   - Foreign keys: singular model name + `_id` (e.g., `user_id`)

2. **Use mass assignment protection** (`$fillable` or `$guarded`)

3. **Leverage model events** for side effects (e.g., sending emails)

4. **Use eager loading** to avoid N+1 query problems

5. **Create query scopes** for commonly used queries

6. **Use accessors and mutators** for consistent data formatting

7. **Implement proper relationships** between models

8. **Use soft deletes** when appropriate

9. **Leverage Eloquent collections** for data manipulation

10. **Keep models thin** by moving complex logic to dedicated classes

## References

- [Laravel Eloquent Documentation](https://laravel.com/docs/12.x/eloquent)
- [Eloquent Relationships](https://laravel.com/docs/12.x/eloquent-relationships)
- [Eloquent Collections](https://laravel.com/docs/12.x/eloquent-collections)
- [Eloquent Serialization](https://laravel.com/docs/12.x/eloquent-serialization)