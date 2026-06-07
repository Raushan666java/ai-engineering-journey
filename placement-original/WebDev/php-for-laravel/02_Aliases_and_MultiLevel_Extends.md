# 02. Aliases and Multi-Level "extends": User Model

**Time:** 3 minutes | **Difficulty:** Beginner

---

## 🎯 What You'll Learn

- Import classes with aliases using `as`
- Understand multi-level inheritance chains
- Real User model example from Laravel

---

## 📖 Aliases with `as`

When you import a class, you can give it a different name to avoid conflicts or improve readability.

```php
use App\Models\User as UserModel;
use App\Services\User as UserService;

$user = new UserModel();
$service = new UserService();
```

---

## 🔗 Multi-Level Inheritance

Laravel's `User` model extends `Authenticatable`, which extends `Model`, which extends more base classes.

```
User
  ↓ extends
Authenticatable (adds auth features)
  ↓ extends
Model (adds database features)
  ↓ extends
...
```

---

## 💻 Laravel User Model Example

```php
<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Custom method
    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }
}
```

**Key points:**

- `User as Authenticatable` → alias for clarity
- `extends Authenticatable` → gets auth methods
- `Authenticatable extends Model` → gets Eloquent methods

---

## 🔍 What Each Level Provides

### From `Model` (grandparent)

```php
User::find(1)
User::create([...])
$user->save()
$user->update([...])
```

### From `Authenticatable` (parent)

```php
Auth::attempt([...])
auth()->user()
$user->password // automatically hashed
```

### From `HasApiTokens` trait

```php
$user->createToken('api-token')
$user->tokens()
```

### From `Notifiable` trait

```php
$user->notify(new InvoicePaid($invoice))
```

---

## 🛠️ Real-World Usage

```php
// Authentication (from Authenticatable)
if (Auth::attempt(['email' => $email, 'password' => $password])) {
    $user = auth()->user();
}

// Database operations (from Model)
$users = User::where('active', true)->get();

// API tokens (from HasApiTokens)
$token = $user->createToken('mobile-app')->plainTextToken;

// Notifications (from Notifiable)
$user->notify(new WelcomeEmail());

// Custom methods
if ($user->isAdmin()) {
    // Admin logic
}
```

---

## 📦 Multiple Alias Examples

```php
// Avoid conflicts
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Cache as CacheFacade;

// Improve readability
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Collection as LaravelCollection;

// Shorten long names
use App\Services\Payment\StripePaymentProcessor as StripeProcessor;
```

---

## 🏗️ Creating Custom Multi-Level Hierarchy

```php
// Base Model with common features
abstract class BaseModel extends Model
{
    use HasUuid, Auditable;

    protected $guarded = ['id'];
}

// Specific model
class Product extends BaseModel
{
    // Inherits HasUuid, Auditable from BaseModel
    // Inherits all Eloquent methods from Model
}
```

---

## ⚠️ Common Pitfalls

1. **Forgetting the alias:**

```php
use Illuminate\Foundation\Auth\User as Authenticatable;

// Wrong:
class User extends User {} // Circular reference!

// Correct:
class User extends Authenticatable {}
```

2. **Import conflicts without alias:**

```php
// Both named Cache - conflict!
use App\Services\Cache;
use Illuminate\Support\Facades\Cache;

// Fix with alias:
use App\Services\Cache as CacheService;
use Illuminate\Support\Facades\Cache;
```

---

## 🏋️ Practice Exercises

### Exercise 1: Custom User Model

Add to your User model:

- A `scopeActive` method
- An `orders()` relationship
- A `getFullNameAttribute()` accessor

### Exercise 2: Admin Model

Create an `Admin` model that:

- Extends the same `Authenticatable` class
- Uses a different table (`admins`)
- Has its own guard in `config/auth.php`

### Exercise 3: Alias Practice

Import and use with aliases:

- `Str` facade as `StringHelper`
- `Carbon` as `DateTime`
- Use both in a method

---

## 📝 Quick Reference

```php
// Alias syntax
use OriginalClass as NewName;

// Multi-level inheritance
User extends Authenticatable
    extends Model
        extends ...

// Inherited methods check
$user = new User();
get_class($user);           // App\Models\User
get_parent_class($user);    // Illuminate\Foundation\Auth\User
class_uses($user);          // Lists all traits
```

---

**Next:** [03. implements vs extends: Interfaces](03_Implements_vs_Extends.md)
