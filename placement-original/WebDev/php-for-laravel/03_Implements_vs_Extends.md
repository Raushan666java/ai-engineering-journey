# 03. "implements" vs "extends": Interfaces in Filament User Model

**Time:** 4 minutes | **Difficulty:** Intermediate

---

## 🎯 What You'll Learn

- Difference between `implements` and `extends`
- What interfaces are and why they matter
- Real Filament User model example
- When to use each

---

## 📖 Key Concepts

### `extends` (Inheritance)

- Inherits **implementation** from ONE parent class
- Gets actual code (methods, properties)
- Child IS-A parent

### `implements` (Contract)

- Promises to implement methods defined in interface
- Can implement MULTIPLE interfaces
- No code inherited, just method signatures

---

## 🔑 What is an Interface?

An **interface** is a contract that says "any class implementing me MUST have these methods."

```php
interface Payable
{
    public function pay(float $amount): bool;
    public function refund(float $amount): bool;
}

class Invoice implements Payable
{
    // MUST implement both methods
    public function pay(float $amount): bool
    {
        // Implementation
        return true;
    }

    public function refund(float $amount): bool
    {
        // Implementation
        return true;
    }
}
```

---

## 💻 Filament User Model Example

```php
<?php

namespace App\Models;

use Filament\Models\Contracts\FilamentUser;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements FilamentUser
{
    use Notifiable;

    protected $fillable = ['name', 'email', 'password', 'role'];

    // MUST implement this method (required by FilamentUser interface)
    public function canAccessFilament(): bool
    {
        return $this->role === 'admin' || $this->role === 'moderator';
    }

    // Optional: additional methods
    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }
}
```

**Breakdown:**

- `extends Authenticatable` → inherits auth functionality
- `implements FilamentUser` → promises to have `canAccessFilament()` method
- Filament checks this method before allowing admin panel access

---

## 🔍 Multiple Interfaces

You can implement multiple interfaces but extend only one class:

```php
interface Auditable
{
    public function getAuditLog(): array;
}

interface Exportable
{
    public function toExcel(): string;
    public function toCsv(): string;
}

class Post extends Model implements Auditable, Exportable
{
    // Must implement all interface methods
    public function getAuditLog(): array
    {
        return $this->audits()->get()->toArray();
    }

    public function toExcel(): string
    {
        // Excel export logic
    }

    public function toCsv(): string
    {
        // CSV export logic
    }
}
```

---

## ⚖️ extends vs implements

| Feature       | extends                      | implements                     |
| ------------- | ---------------------------- | ------------------------------ |
| **Number**    | ONE class                    | MULTIPLE interfaces            |
| **Gets code** | ✅ Yes (methods, properties) | ❌ No (just signatures)        |
| **Purpose**   | Code reuse, IS-A             | Contract, CAN-DO               |
| **Example**   | `Post extends Model`         | `User implements FilamentUser` |

---

## 🛠️ Real Laravel Interface Examples

### 1. Authenticatable Contract

```php
use Illuminate\Contracts\Auth\Authenticatable;

class User extends Model implements Authenticatable
{
    // Must implement:
    // getAuthIdentifierName()
    // getAuthIdentifier()
    // getAuthPassword()
    // getRememberToken()
    // setRememberToken($value)
    // getRememberTokenName()
}
```

_Note: Laravel's `Authenticatable` class implements this interface for you!_

### 2. ShouldQueue Interface

```php
use Illuminate\Contracts\Queue\ShouldQueue;

class SendEmailJob implements ShouldQueue
{
    // Laravel automatically queues this job
    public function handle()
    {
        // Send email
    }
}
```

### 3. Responsable Interface

```php
use Illuminate\Contracts\Support\Responsable;

class ApiResponse implements Responsable
{
    public function toResponse($request)
    {
        return response()->json([...]);
    }
}

// In controller
return new ApiResponse();
```

---

## 🏗️ Creating Your Own Interface

```php
<?php

namespace App\Contracts;

interface Searchable
{
    public function search(string $query): array;
    public function getSearchFields(): array;
}

// Implement in models
class Product extends Model implements Searchable
{
    public function search(string $query): array
    {
        return static::where('name', 'like', "%{$query}%")
            ->orWhere('description', 'like', "%{$query}%")
            ->get()
            ->toArray();
    }

    public function getSearchFields(): array
    {
        return ['name', 'description', 'sku'];
    }
}
```

---

## 🎯 Why Use Interfaces?

1. **Type hinting**: Ensure any class passed has required methods

```php
function processPayment(Payable $item)
{
    $item->pay(100); // Guaranteed to exist
}
```

2. **Swappable implementations**: Change implementation without changing interface

```php
interface PaymentGateway
{
    public function charge(float $amount): bool;
}

class StripeGateway implements PaymentGateway { }
class PayPalGateway implements PaymentGateway { }

// Can swap implementations
function checkout(PaymentGateway $gateway)
{
    $gateway->charge(99.99);
}
```

3. **Documentation**: Interface shows what a class can do

---

## ⚠️ Common Pitfalls

1. **Forgetting to implement all methods:**

```php
class User implements FilamentUser
{
    // ERROR: Must implement canAccessFilament()
}
```

2. **Wrong method signature:**

```php
interface FilamentUser
{
    public function canAccessFilament(): bool;
}

class User implements FilamentUser
{
    // ERROR: Wrong return type
    public function canAccessFilament(): string
    {
        return 'yes';
    }
}
```

3. **Trying to extend multiple classes:**

```php
// ERROR: Can't extend two classes
class User extends Model, Authenticatable {}

// CORRECT: Extend one, implement many
class User extends Model implements Interface1, Interface2 {}
```

---

## 🏋️ Practice Exercises

### Exercise 1: Filament Access

Create a User model that implements `FilamentUser` and allows access only if:

- User has role 'admin' OR 'editor'
- User's email is verified

### Exercise 2: Create Interface

Create a `Notifiable` interface with:

- `sendNotification(string $message): void`
- `getNotificationChannels(): array`

Implement it in User and Admin models.

### Exercise 3: Multiple Interfaces

Create a Post model that implements:

- `Searchable` (from above)
- `Exportable` (toExcel, toCsv)
- Test both interfaces work

---

## 📝 Quick Reference

```php
// Interface definition
interface MyInterface
{
    public function method(): ReturnType;
}

// Single interface
class MyClass extends Parent implements MyInterface
{
    public function method(): ReturnType
    {
        // Implementation
    }
}

// Multiple interfaces
class MyClass implements Interface1, Interface2, Interface3
{
    // Implement all methods
}

// Check if class implements interface
$user = new User();
if ($user instanceof FilamentUser) {
    // User implements FilamentUser
}
```

---

**Next:** [04. Interface with Trait: Spatie Media](04_Interface_with_Trait.md)
