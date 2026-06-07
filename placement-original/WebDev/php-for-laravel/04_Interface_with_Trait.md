# 04. Interface with Trait: Spatie Media Model

**Time:** 3 minutes | **Difficulty:** Intermediate

---

## 🎯 What You'll Learn

- How interfaces and traits work together
- Real Spatie Media Library example
- When to use this pattern
- Common Laravel packages using this pattern

---

## 📖 The Pattern

**Interface** = Contract (what must be done)  
**Trait** = Implementation (how to do it)

```php
// Interface: Contract
interface HasMedia
{
    public function addMedia($file);
    public function getMedia(string $collection);
}

// Trait: Implementation
trait InteractsWithMedia
{
    public function addMedia($file)
    {
        // Actual code here
    }

    public function getMedia(string $collection)
    {
        // Actual code here
    }
}

// Model: Uses both
class Product extends Model implements HasMedia
{
    use InteractsWithMedia; // Provides the implementation
}
```

---

## 💻 Spatie Media Library Example

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;  // Interface
use Spatie\MediaLibrary\InteractsWithMedia;  // Trait

class Product extends Model implements HasMedia
{
    use InteractsWithMedia;

    protected $fillable = ['name', 'price', 'description'];

    // Configure media collections
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('images')
            ->singleFile()
            ->registerMediaConversions(function () {
                $this->addMediaConversion('thumb')
                    ->width(150)
                    ->height(150);
            });

        $this->addMediaCollection('documents')
            ->acceptsMimeTypes(['application/pdf', 'application/msword']);
    }
}
```

---

## 🔍 How It Works

1. **Interface (`HasMedia`)** says: "You must have these methods"
2. **Trait (`InteractsWithMedia`)** provides the actual implementation
3. **Your model** uses both: implements the contract + uses the implementation

### Usage Example

```php
// Add media
$product = Product::find(1);
$product->addMedia($request->file('image'))
    ->toMediaCollection('images');

// Get media
$images = $product->getMedia('images');
$firstImage = $product->getFirstMediaUrl('images', 'thumb');

// Check if has media
if ($product->hasMedia('images')) {
    $image = $product->getFirstMedia('images');
}

// Delete media
$product->clearMediaCollection('images');
```

---

## 🎯 Why This Pattern?

### Flexibility

You could provide your own implementation:

```php
class CustomProduct extends Model implements HasMedia
{
    // Don't use InteractsWithMedia trait
    // Provide custom implementation
    public function addMedia($file)
    {
        // Your custom S3 logic
    }

    public function getMedia(string $collection)
    {
        // Your custom retrieval logic
    }
}
```

### Type Safety

Functions can require the interface:

```php
function attachProductImage(HasMedia $model, $file)
{
    $model->addMedia($file)->toMediaCollection('images');
    // Guaranteed to work with any HasMedia implementation
}
```

---

## 🛠️ More Laravel Examples

### 1. Spatie Permission Package

```php
use Spatie\Permission\Contracts\Role as RoleContract;
use Spatie\Permission\Traits\HasRoles;

class User extends Model implements RoleContract
{
    use HasRoles;

    // Now has: assignRole(), hasRole(), getRoleNames()
}

// Usage
$user->assignRole('admin');
if ($user->hasRole('admin')) {
    // Admin logic
}
```

### 2. Laravel Scout (Search)

```php
use Laravel\Scout\Searchable;

class Post extends Model
{
    use Searchable;  // Provides search implementation

    public function toSearchableArray()
    {
        return [
            'title' => $this->title,
            'content' => $this->content,
        ];
    }
}

// Usage
Post::search('laravel')->get();
```

### 3. Laravel Passport (OAuth)

```php
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;

    // Adds: createToken(), token(), tokens()
}

// Usage
$token = $user->createToken('API Token')->accessToken;
```

---

## 🏗️ Creating Your Own

```php
// Step 1: Define interface
namespace App\Contracts;

interface Auditable
{
    public function recordChange(string $action): void;
    public function getAuditLog(): array;
}

// Step 2: Create trait
namespace App\Traits;

trait HasAuditLog
{
    public function recordChange(string $action): void
    {
        $this->audits()->create([
            'action' => $action,
            'user_id' => auth()->id(),
            'changes' => $this->getDirty(),
        ]);
    }

    public function getAuditLog(): array
    {
        return $this->audits()->get()->toArray();
    }

    public function audits()
    {
        return $this->morphMany(Audit::class, 'auditable');
    }
}

// Step 3: Use in model
use App\Contracts\Auditable;
use App\Traits\HasAuditLog;

class Product extends Model implements Auditable
{
    use HasAuditLog;

    protected static function booted()
    {
        static::updated(function ($product) {
            $product->recordChange('updated');
        });
    }
}

// Usage
$product->update(['price' => 99.99]);
$log = $product->getAuditLog();
```

---

## ⚠️ Common Pitfalls

1. **Implementing interface without trait:**

```php
class Product implements HasMedia
{
    // ERROR: Must implement all methods
    // OR use InteractsWithMedia trait
}
```

2. **Using trait without implementing interface:**

```php
class Product extends Model
{
    use InteractsWithMedia;
    // Works, but not type-safe for HasMedia type hints
}
```

3. **Forgetting to configure:**

```php
class Product implements HasMedia
{
    use InteractsWithMedia;

    // Missing: registerMediaCollections()
    // Default collections will be used
}
```

---

## 🏋️ Practice Exercises

### Exercise 1: Setup Spatie Media

1. Install: `composer require spatie/laravel-medialibrary`
2. Add to Product model
3. Upload an image and display it

### Exercise 2: Custom Auditable

Create your own `Auditable` interface + trait:

- Track created, updated, deleted actions
- Store user_id and timestamp
- Add to User and Post models

### Exercise 3: Multiple Traits

Create a model that uses:

- `InteractsWithMedia` (Spatie)
- `HasRoles` (Spatie Permission)
- Your custom `HasAuditLog`
- Test all work together

---

## 📝 Quick Reference

```php
// Pattern structure
interface MyInterface {
    public function method();
}

trait MyTrait {
    public function method() {
        // Implementation
    }
}

class MyModel implements MyInterface {
    use MyTrait;
}

// Spatie Media quick setup
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Model extends Model implements HasMedia {
    use InteractsWithMedia;

    public function registerMediaCollections(): void {
        $this->addMediaCollection('name');
    }
}

// Usage
$model->addMedia($file)->toMediaCollection('name');
$media = $model->getMedia('name');
```

---

**Next:** [05. Override/Extend Package Functions](05_Override_Extend_Functions.md)
