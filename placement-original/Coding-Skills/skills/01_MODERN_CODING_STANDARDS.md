# Modern Coding Standards & Best Practices 📝

## Complete Guide to Writing Professional Code

---

## Table of Contents

1. [Core Principles](#core-principles)
2. [PHP/Laravel Standards](#php-laravel-standards)
3. [JavaScript/React Standards](#javascript-react-standards)
4. [HTML/CSS Standards](#html-css-standards)
5. [Code Organization](#code-organization)
6. [Naming Conventions](#naming-conventions)
7. [Documentation](#documentation)
8. [Code Review Checklist](#code-review-checklist)

---

## Core Principles

### SOLID Principles

#### 1. Single Responsibility Principle (SRP)

```php
// ❌ Bad: Class doing too much
class UserController
{
    public function store(Request $request)
    {
        // Validation
        $validated = $request->validate([...]);

        // Create user
        $user = User::create($validated);

        // Send email
        Mail::to($user)->send(new WelcomeEmail($user));

        // Log activity
        Log::info('User created', ['user_id' => $user->id]);

        // Generate PDF
        $pdf = PDF::loadView('welcome', compact('user'));

        return response()->json($user);
    }
}

// ✅ Good: Separated concerns
class UserController
{
    public function __construct(
        private UserService $userService,
        private UserNotificationService $notificationService
    ) {}

    public function store(StoreUserRequest $request)
    {
        $user = $this->userService->create($request->validated());
        $this->notificationService->sendWelcomeNotification($user);

        return new UserResource($user);
    }
}

class UserService
{
    public function create(array $data): User
    {
        return DB::transaction(function () use ($data) {
            $user = User::create($data);
            event(new UserCreated($user));
            return $user;
        });
    }
}
```

#### 2. Open/Closed Principle

```php
// ✅ Good: Open for extension, closed for modification
interface PaymentGateway
{
    public function charge(float $amount): PaymentResult;
}

class StripePaymentGateway implements PaymentGateway
{
    public function charge(float $amount): PaymentResult
    {
        // Stripe implementation
    }
}

class PayPalPaymentGateway implements PaymentGateway
{
    public function charge(float $amount): PaymentResult
    {
        // PayPal implementation
    }
}

class PaymentService
{
    public function __construct(private PaymentGateway $gateway) {}

    public function processPayment(float $amount): PaymentResult
    {
        return $this->gateway->charge($amount);
    }
}
```

#### 3. Liskov Substitution Principle

```php
// ✅ Subtypes must be substitutable for their base types
abstract class Bird
{
    abstract public function eat(): void;
}

class FlyingBird extends Bird
{
    public function eat(): void { /* implementation */ }
    public function fly(): void { /* implementation */ }
}

class Penguin extends Bird
{
    public function eat(): void { /* implementation */ }
    public function swim(): void { /* implementation */ }
}
```

#### 4. Interface Segregation Principle

```php
// ❌ Bad: Fat interface
interface Worker
{
    public function work(): void;
    public function eat(): void;
    public function sleep(): void;
}

// ✅ Good: Segregated interfaces
interface Workable
{
    public function work(): void;
}

interface Feedable
{
    public function eat(): void;
}

interface Sleepable
{
    public function sleep(): void;
}

class Human implements Workable, Feedable, Sleepable
{
    public function work(): void { /* implementation */ }
    public function eat(): void { /* implementation */ }
    public function sleep(): void { /* implementation */ }
}

class Robot implements Workable
{
    public function work(): void { /* implementation */ }
}
```

#### 5. Dependency Inversion Principle

```php
// ✅ Good: Depend on abstractions, not concretions
interface Logger
{
    public function log(string $message): void;
}

class FileLogger implements Logger
{
    public function log(string $message): void
    {
        file_put_contents('app.log', $message, FILE_APPEND);
    }
}

class DatabaseLogger implements Logger
{
    public function log(string $message): void
    {
        DB::table('logs')->insert(['message' => $message]);
    }
}

class UserService
{
    public function __construct(private Logger $logger) {}

    public function createUser(array $data): User
    {
        $user = User::create($data);
        $this->logger->log("User created: {$user->id}");
        return $user;
    }
}
```

---

## PHP/Laravel Standards

### PSR Standards Compliance

#### PSR-1: Basic Coding Standard

```php
<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    private const MAX_LOGIN_ATTEMPTS = 5;

    public function createUser(array $data): User
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }
}
```

#### PSR-12: Extended Coding Style

```php
<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\User;
use App\Events\UserCreated;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function __construct(
        private NotificationService $notificationService,
        private AuditService $auditService
    ) {
    }

    public function createUser(array $data): User
    {
        return DB::transaction(function () use ($data) {
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);

            event(new UserCreated($user));

            return $user;
        });
    }

    public function updateUser(User $user, array $data): User
    {
        $user->update($data);
        $this->auditService->logUpdate($user);

        return $user->fresh();
    }
}
```

### Laravel Best Practices

#### 1. Controllers - Thin Controllers

```php
// ✅ Good: Thin controller, delegates to services
class OrderController extends Controller
{
    public function __construct(
        private OrderService $orderService
    ) {}

    public function store(StoreOrderRequest $request)
    {
        $order = $this->orderService->createOrder(
            $request->user(),
            $request->validated()
        );

        return new OrderResource($order);
    }

    public function update(UpdateOrderRequest $request, Order $order)
    {
        $this->authorize('update', $order);

        $order = $this->orderService->updateOrder($order, $request->validated());

        return new OrderResource($order);
    }
}
```

#### 2. Models - Rich Models

```php
class Order extends Model
{
    protected $fillable = ['user_id', 'status', 'total_amount'];

    protected $casts = [
        'total_amount' => 'decimal:2',
        'ordered_at' => 'datetime',
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    // Query Scopes
    public function scopePending(Builder $query): void
    {
        $query->where('status', 'pending');
    }

    public function scopeForUser(Builder $query, User $user): void
    {
        $query->where('user_id', $user->id);
    }

    // Accessors & Mutators (Laravel 9+)
    protected function totalAmount(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $value / 100,
            set: fn ($value) => $value * 100,
        );
    }

    // Business Logic Methods
    public function markAsPaid(): void
    {
        $this->update(['status' => 'paid', 'paid_at' => now()]);
        event(new OrderPaid($this));
    }

    public function canBeCancelled(): bool
    {
        return in_array($this->status, ['pending', 'processing']);
    }
}
```

#### 3. Service Classes

```php
class OrderService
{
    public function __construct(
        private PaymentService $paymentService,
        private InventoryService $inventoryService,
        private NotificationService $notificationService
    ) {}

    public function createOrder(User $user, array $data): Order
    {
        return DB::transaction(function () use ($user, $data) {
            // Create order
            $order = Order::create([
                'user_id' => $user->id,
                'status' => 'pending',
                'total_amount' => $this->calculateTotal($data['items']),
            ]);

            // Create order items
            foreach ($data['items'] as $item) {
                $order->items()->create($item);
            }

            // Reserve inventory
            $this->inventoryService->reserve($order);

            // Send notification
            $this->notificationService->sendOrderConfirmation($order);

            return $order;
        });
    }

    public function processPayment(Order $order, array $paymentData): bool
    {
        try {
            $result = $this->paymentService->charge($order->total_amount, $paymentData);

            if ($result->success) {
                $order->markAsPaid();
                return true;
            }

            return false;
        } catch (\Exception $e) {
            Log::error('Payment processing failed', [
                'order_id' => $order->id,
                'error' => $e->getMessage(),
            ]);
            throw $e;
        }
    }

    private function calculateTotal(array $items): float
    {
        return collect($items)->sum(fn ($item) => $item['price'] * $item['quantity']);
    }
}
```

#### 4. Request Validation

```php
class StoreOrderRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('create', Order::class);
    }

    public function rules(): array
    {
        return [
            'items' => ['required', 'array', 'min:1'],
            'items.*.product_id' => ['required', 'exists:products,id'],
            'items.*.quantity' => ['required', 'integer', 'min:1', 'max:100'],
            'shipping_address' => ['required', 'string', 'max:255'],
            'payment_method' => ['required', 'in:credit_card,paypal,bank_transfer'],
        ];
    }

    public function messages(): array
    {
        return [
            'items.required' => 'Please add at least one item to your order.',
            'items.*.product_id.exists' => 'One or more products are no longer available.',
        ];
    }

    public function prepareForValidation(): void
    {
        $this->merge([
            'user_id' => $this->user()->id,
        ]);
    }
}
```

#### 5. Resources (API Responses)

```php
class OrderResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'status' => $this->status,
            'total_amount' => $this->total_amount,
            'created_at' => $this->created_at->toISOString(),
            'items' => OrderItemResource::collection($this->whenLoaded('items')),
            'user' => new UserResource($this->whenLoaded('user')),
            'can_cancel' => $this->canBeCancelled(),

            // Conditional fields
            'payment_details' => $this->when(
                $request->user()->isAdmin(),
                fn () => $this->payment_details
            ),
        ];
    }
}
```

---

## JavaScript/React Standards

### Modern JavaScript (ES6+)

#### 1. Variable Declarations

```javascript
// ✅ Use const by default
const API_URL = "https://api.example.com";
const user = { name: "John", email: "john@example.com" };

// ✅ Use let when reassignment is needed
let counter = 0;
for (let i = 0; i < 10; i++) {
    counter += i;
}

// ❌ Never use var
var oldStyle = "avoid this";
```

#### 2. Arrow Functions

```javascript
// ✅ Good: Arrow functions for callbacks
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);

// ✅ Good: Arrow functions preserve 'this' context
class Timer {
    constructor() {
        this.seconds = 0;
        setInterval(() => {
            this.seconds++;
        }, 1000);
    }
}

// ❌ Don't use arrow functions for methods
const obj = {
    name: "John",
    // Bad
    greet: () => console.log(`Hello, ${this.name}`),
    // Good
    greet() {
        console.log(`Hello, ${this.name}`);
    },
};
```

#### 3. Destructuring

```javascript
// ✅ Object destructuring
const user = { name: "John", email: "john@example.com", age: 30 };
const { name, email } = user;

// ✅ Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// ✅ Function parameters
function createUser({ name, email, role = "user" }) {
    return { name, email, role };
}

// ✅ Nested destructuring
const response = {
    data: {
        user: {
            name: "John",
            address: { city: "New York" },
        },
    },
};
const {
    data: {
        user: {
            address: { city },
        },
    },
} = response;
```

#### 4. Spread & Rest Operators

```javascript
// ✅ Array spreading
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

// ✅ Object spreading
const defaults = { theme: "light", fontSize: 14 };
const userPrefs = { fontSize: 16 };
const settings = { ...defaults, ...userPrefs };

// ✅ Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
```

#### 5. Template Literals

```javascript
// ✅ String interpolation
const name = "John";
const greeting = `Hello, ${name}!`;

// ✅ Multi-line strings
const html = `
    <div class="card">
        <h2>${title}</h2>
        <p>${description}</p>
    </div>
`;

// ✅ Tagged templates
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return `${result}${str}<mark>${values[i] || ""}</mark>`;
    }, "");
}
```

### React Best Practices

#### 1. Functional Components with Hooks

```typescript
// ✅ Good: Modern functional component
import { useState, useEffect, useCallback, useMemo } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserProfileProps {
    userId: number;
}

export function UserProfile({ userId }: UserProfileProps) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch user data
    useEffect(() => {
        let cancelled = false;

        async function fetchUser() {
            try {
                setLoading(true);
                const response = await fetch(`/api/users/${userId}`);
                const data = await response.json();

                if (!cancelled) {
                    setUser(data);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err.message);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        fetchUser();

        return () => {
            cancelled = true;
        };
    }, [userId]);

    // Memoized computed value
    const displayName = useMemo(() => {
        return user ? `${user.name} (${user.email})` : 'Unknown User';
    }, [user]);

    // Memoized callback
    const handleRefresh = useCallback(() => {
        setUser(null);
        setLoading(true);
    }, []);

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;
    if (!user) return <NotFound />;

    return (
        <div className="user-profile">
            <h1>{displayName}</h1>
            <button onClick={handleRefresh}>Refresh</button>
        </div>
    );
}
```

#### 2. Custom Hooks

```typescript
// ✅ Good: Reusable custom hook
import { useState, useEffect } from 'react';

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> & { refetch: () => void } {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [refetchIndex, setRefetchIndex] = useState(0);

    useEffect(() => {
        let cancelled = false;

        async function fetchData() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(url);
                if (!response.ok) throw new Error('Fetch failed');

                const json = await response.json();
                if (!cancelled) setData(json);
            } catch (err) {
                if (!cancelled) setError(err.message);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        fetchData();

        return () => {
            cancelled = true;
        };
    }, [url, refetchIndex]);

    const refetch = () => setRefetchIndex(prev => prev + 1);

    return { data, loading, error, refetch };
}

// Usage
function UserList() {
    const { data: users, loading, error, refetch } = useFetch<User[]>('/api/users');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {users?.map(user => <UserCard key={user.id} user={user} />)}
            <button onClick={refetch}>Refresh</button>
        </div>
    );
}
```

#### 3. Component Composition

```typescript
// ✅ Good: Composable components
interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`card ${className}`}>
            {children}
        </div>
    );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
    return <div className="card-header">{children}</div>;
}

export function CardBody({ children }: { children: React.ReactNode }) {
    return <div className="card-body">{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
    return <div className="card-footer">{children}</div>;
}

// Usage
function UserCard({ user }: { user: User }) {
    return (
        <Card>
            <CardHeader>
                <h3>{user.name}</h3>
            </CardHeader>
            <CardBody>
                <p>{user.email}</p>
                <p>{user.bio}</p>
            </CardBody>
            <CardFooter>
                <button>Edit</button>
                <button>Delete</button>
            </CardFooter>
        </Card>
    );
}
```

---

## Naming Conventions

### PHP/Laravel

```php
// Classes: PascalCase
class UserService {}
class OrderController {}

// Methods and functions: camelCase
public function getUserById(int $id): User {}
function calculateTotal(array $items): float {}

// Variables: camelCase
$userName = 'John';
$orderTotal = 100.50;

// Constants: SCREAMING_SNAKE_CASE
const MAX_LOGIN_ATTEMPTS = 5;
const API_VERSION = '1.0';

// Database tables: snake_case, plural
users, order_items, user_preferences

// Database columns: snake_case
created_at, user_id, total_amount

// Routes: kebab-case
/api/user-preferences
/admin/order-management
```

### JavaScript/React

```typescript
// Components: PascalCase
function UserProfile() {}
class OrderList extends Component {}

// Functions and variables: camelCase
const getUserData = () => {};
let itemCount = 0;

// Constants: SCREAMING_SNAKE_CASE
const API_URL = 'https://api.example.com';
const MAX_RETRIES = 3;

// Files: PascalCase for components, camelCase for utilities
UserProfile.tsx
OrderList.tsx
apiClient.ts
formatUtils.ts

// CSS classes: kebab-case
.user-profile {}
.order-list-item {}
```

---

## Documentation

### PHPDoc Standards

```php
/**
 * Create a new order for the specified user.
 *
 * This method handles the complete order creation process including
 * inventory reservation, payment processing, and notifications.
 *
 * @param  User  $user  The user placing the order
 * @param  array  $data  The order data including items and shipping info
 * @return Order The created order instance
 * @throws InsufficientInventoryException If items are out of stock
 * @throws PaymentFailedException If payment processing fails
 */
public function createOrder(User $user, array $data): Order
{
    // Implementation
}
```

### JSDoc/TSDoc Standards

````typescript
/**
 * Fetch user data from the API.
 *
 * @param userId - The unique identifier of the user
 * @param options - Optional fetch configuration
 * @returns Promise resolving to user data
 * @throws {Error} If the user is not found or network fails
 *
 * @example
 * ```typescript
 * const user = await fetchUser(123);
 * console.log(user.name);
 * ```
 */
async function fetchUser(userId: number, options?: RequestInit): Promise<User> {
    // Implementation
}
````

---

## Code Review Checklist

### ✅ Before Submitting Code

- [ ] Code follows project style guide
- [ ] All tests pass
- [ ] New tests added for new features
- [ ] No console.log() or dd() left in code
- [ ] No commented-out code
- [ ] Meaningful commit messages
- [ ] Code is self-documenting or has comments
- [ ] No hardcoded values (use config/env)
- [ ] Error handling implemented
- [ ] Security considerations addressed
- [ ] Performance implications considered
- [ ] Documentation updated if needed

### ✅ During Code Review

- [ ] Code is understandable
- [ ] Logic is correct
- [ ] Edge cases handled
- [ ] No code duplication
- [ ] Proper error handling
- [ ] Security vulnerabilities checked
- [ ] Performance bottlenecks identified
- [ ] Database queries optimized
- [ ] API responses consistent
- [ ] Accessibility considered (frontend)

---

**Next**: [Framework Mastery →](./02_FRAMEWORK_MASTERY.md)
