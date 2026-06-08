# 01. Classes and Traits: Eloquent Model with "extends" and "use"

**Time:** 4 minutes | **Difficulty:** Beginner

---

## 🎯 What You'll Learn

- How `extends` inherits from a parent class
- How `use` imports traits into a class
- Real Laravel Eloquent examples
- When to use traits vs inheritance

---

## 📖 Concepts

### Inheritance with `extends`

When a class **extends** another, it inherits all public and protected properties and methods.

```php
class Model {
    public function save() { /* ... */ }
}

class Post extends Model {
    // Post now has save() method
}
```

### Traits with `use`

**Traits** are reusable code blocks you can "mix in" to classes. Unlike inheritance, you can use multiple traits.

```php
trait Timestampable {
    public function updateTimestamps() { /* ... */ }
}

class Post {
    use Timestampable; // Adds updateTimestamps() method
}
```

---

## 💻 Laravel Eloquent Example

### Basic Eloquent Model

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['title', 'content', 'user_id'];
    protected $dates = ['deleted_at'];

    // Relationship
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Scope
    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }
}
```

**Breakdown:**

- `extends Model` → inherits all Eloquent functionality (save, find, update, etc.)
- `use HasFactory` → adds factory methods for testing
- `use SoftDeletes` → adds soft delete capability (deleted_at column)

---

## 🔍 Real-World Usage

### Creating and Using Models

```php
// Create
$post = Post::create([
    'title' => 'My First Post',
    'content' => 'Hello World',
    'user_id' => 1
]);

// Use inherited methods from Model class
$post->save();
$post->delete(); // Soft delete (from SoftDeletes trait)

// Use trait methods
$post = Post::factory()->create(); // from HasFactory trait

// Use custom scope
$published = Post::published()->get();

// Use relationship
$author = $post->user; // from belongsTo relationship
```

---

## 📊 Inheritance Chain

```
Post
  ↓ extends
Model (provides: save, find, update, create, etc.)
  ↓ extends
...base Laravel classes
```

**Traits mix-in:**

- `HasFactory` adds `factory()` method
- `SoftDeletes` adds `deleted_at` handling and `restore()` method

---

## ⚖️ When to Use What

| Use Case                                | Solution                      |
| --------------------------------------- | ----------------------------- |
| Share behavior across unrelated classes | **Trait**                     |
| IS-A relationship (Post IS-A Model)     | **extends**                   |
| Need multiple "inheritance"             | **Trait** (use multiple)      |
| Override parent behavior                | **extends** + override method |

---

## 🛠️ Common Laravel Traits

```php
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\MediaLibrary\InteractsWithMedia;
```

---

## ⚠️ Common Pitfalls

1. **Forgetting to use trait:** If you skip `use SoftDeletes`, calling `restore()` will fail
2. **Trait conflicts:** If two traits have same method name, you must resolve:

```php
use TraitA, TraitB {
    TraitA::method insteadof TraitB;
    TraitB::method as methodB;
}
```

3. **Override trait method:** Just define it in your class

```php
class Post extends Model
{
    use SoftDeletes;

    // Override trait method
    public function restore()
    {
        // Custom logic
        parent::restore();
    }
}
```

---

## 🏋️ Practice Exercises

### Exercise 1: Basic Model

Create a `Product` model that:

- Extends `Model`
- Uses `HasFactory` and `SoftDeletes`
- Has fillable: `name, price, stock`
- Has a `scopeInStock` that filters where stock > 0

### Exercise 2: Custom Trait

Create a `HasUuid` trait that:

- Generates a UUID on model creation
- Add it to your Product model
- Test with `Product::create([...])`

### Exercise 3: Relationship

Add to Product model:

- `category()` belongsTo relationship
- Use it: `$product->category->name`

---

## 📝 Quick Reference

```php
// Basic structure
class MyModel extends Model
{
    use TraitOne, TraitTwo;

    // Properties
    protected $fillable = [];

    // Methods
    public function myMethod() {}
}

// Common Eloquent methods (inherited from Model)
Model::all()
Model::find($id)
Model::create([...])
$model->save()
$model->update([...])
$model->delete()

// Trait methods (depends on trait)
HasFactory → factory()
SoftDeletes → restore(), forceDelete()
```

---

**Next:** [02. Aliases and Multi-Level extends](02_Aliases_and_MultiLevel_Extends.md)
