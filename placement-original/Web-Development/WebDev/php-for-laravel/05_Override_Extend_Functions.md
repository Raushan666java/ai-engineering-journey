# 05. Override/Extend Functions of Laravel Packages

**Time:** 3 minutes | **Difficulty:** Intermediate

---

## 🎯 What You'll Learn

- How to override parent/package methods
- When to use `parent::method()`
- Extending Eloquent and package behavior
- Best practices for customization

---

## 📖 Basic Override

When you extend a class, you can **override** any method by redefining it:

```php
class User extends Model
{
    // Override Eloquent's save method
    public function save(array $options = [])
    {
        // Custom logic before save
        $this->slug = Str::slug($this->name);

        // Call original save
        return parent::save($options);
    }
}
```

---

## 💻 Real Laravel Examples

### 1. Override Eloquent `save()`

```php
class Post extends Model
{
    public function save(array $options = [])
    {
        // Auto-generate slug
        if (empty($this->slug)) {
            $this->slug = Str::slug($this->title);
        }

        // Update search index
        $this->updateSearchIndex();

        // Call parent to actually save
        return parent::save($options);
    }
}
```

### 2. Extend `boot()` Method

```php
class User extends Model
{
    protected static function boot()
    {
        parent::boot(); // IMPORTANT: Call parent first

        // Add custom event listeners
        static::creating(function ($user) {
            $user->uuid = (string) Str::uuid();
        });

        static::deleting(function ($user) {
            $user->posts()->delete();
        });
    }
}
```

### 3. Override Relationship Methods

```php
class Post extends Model
{
    public function user()
    {
        // Standard relationship
        return $this->belongsTo(User::class);
    }

    // Override to add custom logic
    public function getUserAttribute()
    {
        $user = $this->getRelationValue('user');

        // Add custom property
        if ($user) {
            $user->is_author = true;
        }

        return $user;
    }
}
```

---

## 🛠️ Extending Package Classes

### Override Spatie Permission Role

```php
namespace App\Models;

use Spatie\Permission\Models\Role as SpatieRole;

class Role extends SpatieRole
{
    // Add custom method
    public function isSystemRole(): bool
    {
        return in_array($this->name, ['admin', 'super-admin']);
    }

    // Override delete to protect system roles
    public function delete()
    {
        if ($this->isSystemRole()) {
            throw new \Exception('Cannot delete system roles');
        }

        return parent::delete();
    }
}
```

Then configure in `config/permission.php`:

```php
'models' => [
    'role' => App\Models\Role::class,
],
```

---

## 🎯 Override vs Extend

### Override (Replace)

```php
public function method()
{
    // Completely new implementation
    // Don't call parent::method()
    return 'new behavior';
}
```

### Extend (Add to)

```php
public function method()
{
    // Add logic before
    $this->customLogic();

    // Call original
    $result = parent::method();

    // Add logic after
    $this->moreLogic();

    return $result;
}
```

---

## ⚖️ When to Call `parent::`

| Scenario                        | Call parent?    |
| ------------------------------- | --------------- |
| Add logic before/after original | ✅ Yes          |
| Completely replace behavior     | ❌ No           |
| Extend boot() or booted()       | ✅ Yes (always) |
| Override accessor/mutator       | ❌ Usually no   |
| Override route model binding    | ✅ Usually yes  |

---

## 🏗️ Advanced: Macro Methods

Laravel allows adding methods to classes without extending:

```php
// In AppServiceProvider boot()
use Illuminate\Support\Collection;

Collection::macro('toUpper', function () {
    return $this->map(function ($value) {
        return strtoupper($value);
    });
});

// Usage anywhere
collect(['a', 'b'])->toUpper(); // ['A', 'B']
```

---

## ⚠️ Common Pitfalls

1. **Forgetting `parent::boot()`**

```php
// WRONG
protected static function boot()
{
    static::creating(function ($model) {
        // ...
    });
}

// CORRECT
protected static function boot()
{
    parent::boot(); // <-- Don't forget!
    static::creating(function ($model) {
        // ...
    });
}
```

2. **Infinite loop**

```php
// WRONG - creates infinite loop
public function save(array $options = [])
{
    $this->updated_at = now();
    $this->save(); // <-- Calls itself!
}

// CORRECT
public function save(array $options = [])
{
    $this->updated_at = now();
    parent::save($options); // <-- Calls parent
}
```

3. **Breaking package functionality**

```php
// DANGEROUS - might break Spatie Permission
class Role extends SpatieRole
{
    public function permissions()
    {
        // Override without understanding original
        return $this->hasMany(Permission::class);
    }
}
```

---

## 🏋️ Practice Exercises

### Exercise 1: Auto-slug

Override `save()` in Post model to:

- Auto-generate slug from title
- Ensure slug is unique
- Only generate if slug is empty

### Exercise 2: Soft Delete with Archive

Override `delete()` to:

- Move record to archive table
- Then call `parent::delete()`
- Test with a Product model

### Exercise 3: Custom User Boot

Extend `boot()` to:

- Generate UUID on create
- Send welcome email on create
- Log user deletions

---

## 📝 Quick Reference

```php
// Basic override
class MyModel extends Model
{
    public function method()
    {
        // New implementation
    }
}

// Extend with parent call
class MyModel extends Model
{
    public function method()
    {
        // Before logic
        $result = parent::method();
        // After logic
        return $result;
    }
}

// Boot extension (always call parent)
protected static function boot()
{
    parent::boot();

    static::creating(function ($model) {
        // ...
    });
}

// Macro (add method without extending)
Model::macro('methodName', function () {
    return $this->attribute;
});
```

---

**Next:** [06. Controller Response Methods](06_Controller_Response_Methods.md)
