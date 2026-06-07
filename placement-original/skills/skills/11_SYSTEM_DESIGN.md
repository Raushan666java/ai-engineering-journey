# System Design & Architecture 🏗️

## Complete Guide to Designing Scalable Systems

---

## Table of Contents

1. [System Design Fundamentals](#system-design-fundamentals)
2. [Design Patterns](#design-patterns)
3. [Architecture Patterns](#architecture-patterns)
4. [Microservices Architecture](#microservices-architecture)
5. [Database Design](#database-design)
6. [API Design](#api-design)
7. [Scalability Patterns](#scalability-patterns)
8. [System Design Interview](#system-design-interview)

---

## System Design Fundamentals

### Key Concepts

```
Scalability: Handle increasing load
Reliability: System works correctly even with failures
Availability: System is operational and accessible
Maintainability: Easy to understand, modify, and extend
Performance: Response time and throughput
```

### CAP Theorem

```
A distributed system can provide at most 2 of 3 guarantees:

Consistency (C): All nodes see same data at same time
Availability (A): Every request receives a response
Partition Tolerance (P): System works despite network failures

CP Systems: Traditional databases (MySQL, PostgreSQL)
AP Systems: NoSQL databases (Cassandra, DynamoDB)
CA Systems: Single-node systems (not distributed)
```

### System Design Process

```
1. Requirements Gathering
   - Functional requirements
   - Non-functional requirements
   - Scale estimation

2. High-Level Design
   - Major components
   - Data flow
   - Technology choices

3. Detailed Design
   - Database schema
   - API contracts
   - Algorithms

4. Identify Bottlenecks
   - Single points of failure
   - Performance issues
   - Scaling challenges

5. Optimization
   - Caching
   - Load balancing
   - Replication
```

---

## Design Patterns

### 1. Creational Patterns

#### Singleton Pattern

```php
class DatabaseConnection
{
    private static ?self $instance = null;
    private PDO $connection;

    private function __construct()
    {
        $this->connection = new PDO(
            'mysql:host=localhost;dbname=app',
            'user',
            'password'
        );
    }

    public static function getInstance(): self
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function getConnection(): PDO
    {
        return $this->connection;
    }

    // Prevent cloning and unserialization
    private function __clone() {}
    public function __wakeup() {}
}

// Usage
$db = DatabaseConnection::getInstance();
```

#### Factory Pattern

```php
interface PaymentGateway
{
    public function charge(float $amount): bool;
}

class StripeGateway implements PaymentGateway
{
    public function charge(float $amount): bool
    {
        // Stripe implementation
        return true;
    }
}

class PayPalGateway implements PaymentGateway
{
    public function charge(float $amount): bool
    {
        // PayPal implementation
        return true;
    }
}

class PaymentGatewayFactory
{
    public static function create(string $type): PaymentGateway
    {
        return match($type) {
            'stripe' => new StripeGateway(),
            'paypal' => new PayPalGateway(),
            default => throw new InvalidArgumentException("Unknown gateway: $type"),
        };
    }
}

// Usage
$gateway = PaymentGatewayFactory::create('stripe');
$gateway->charge(100.00);
```

#### Builder Pattern

```php
class QueryBuilder
{
    private string $table = '';
    private array $select = ['*'];
    private array $where = [];
    private array $orderBy = [];
    private ?int $limit = null;

    public function table(string $table): self
    {
        $this->table = $table;
        return $this;
    }

    public function select(array $columns): self
    {
        $this->select = $columns;
        return $this;
    }

    public function where(string $column, mixed $value): self
    {
        $this->where[] = [$column, $value];
        return $this;
    }

    public function orderBy(string $column, string $direction = 'asc'): self
    {
        $this->orderBy[] = [$column, $direction];
        return $this;
    }

    public function limit(int $limit): self
    {
        $this->limit = $limit;
        return $this;
    }

    public function build(): string
    {
        $sql = 'SELECT ' . implode(', ', $this->select);
        $sql .= ' FROM ' . $this->table;

        if (!empty($this->where)) {
            $conditions = array_map(fn($w) => "{$w[0]} = ?", $this->where);
            $sql .= ' WHERE ' . implode(' AND ', $conditions);
        }

        if (!empty($this->orderBy)) {
            $orders = array_map(fn($o) => "{$o[0]} {$o[1]}", $this->orderBy);
            $sql .= ' ORDER BY ' . implode(', ', $orders);
        }

        if ($this->limit) {
            $sql .= ' LIMIT ' . $this->limit;
        }

        return $sql;
    }
}

// Usage
$query = (new QueryBuilder())
    ->table('users')
    ->select(['id', 'name', 'email'])
    ->where('active', true)
    ->orderBy('created_at', 'desc')
    ->limit(10)
    ->build();
```

### 2. Structural Patterns

#### Adapter Pattern

```php
// Legacy system
class LegacyPaymentSystem
{
    public function processPayment(array $customerData, float $amount): bool
    {
        // Old implementation
        return true;
    }
}

// New interface
interface ModernPaymentInterface
{
    public function charge(Customer $customer, Money $amount): PaymentResult;
}

// Adapter
class LegacyPaymentAdapter implements ModernPaymentInterface
{
    public function __construct(
        private LegacyPaymentSystem $legacySystem
    ) {}

    public function charge(Customer $customer, Money $amount): PaymentResult
    {
        $customerData = [
            'name' => $customer->getName(),
            'email' => $customer->getEmail(),
        ];

        $success = $this->legacySystem->processPayment(
            $customerData,
            $amount->getValue()
        );

        return new PaymentResult($success);
    }
}
```

#### Decorator Pattern

```php
interface Coffee
{
    public function cost(): float;
    public function description(): string;
}

class SimpleCoffee implements Coffee
{
    public function cost(): float
    {
        return 2.00;
    }

    public function description(): string
    {
        return 'Simple coffee';
    }
}

abstract class CoffeeDecorator implements Coffee
{
    public function __construct(
        protected Coffee $coffee
    ) {}
}

class MilkDecorator extends CoffeeDecorator
{
    public function cost(): float
    {
        return $this->coffee->cost() + 0.50;
    }

    public function description(): string
    {
        return $this->coffee->description() . ', milk';
    }
}

class SugarDecorator extends CoffeeDecorator
{
    public function cost(): float
    {
        return $this->coffee->cost() + 0.25;
    }

    public function description(): string
    {
        return $this->coffee->description() . ', sugar';
    }
}

// Usage
$coffee = new SimpleCoffee();
$coffee = new MilkDecorator($coffee);
$coffee = new SugarDecorator($coffee);

echo $coffee->description(); // Simple coffee, milk, sugar
echo $coffee->cost(); // 2.75
```

### 3. Behavioral Patterns

#### Strategy Pattern

```php
interface SortStrategy
{
    public function sort(array $data): array;
}

class BubbleSortStrategy implements SortStrategy
{
    public function sort(array $data): array
    {
        // Bubble sort implementation
        return $data;
    }
}

class QuickSortStrategy implements SortStrategy
{
    public function sort(array $data): array
    {
        // Quick sort implementation
        return $data;
    }
}

class Sorter
{
    public function __construct(
        private SortStrategy $strategy
    ) {}

    public function setStrategy(SortStrategy $strategy): void
    {
        $this->strategy = $strategy;
    }

    public function sort(array $data): array
    {
        return $this->strategy->sort($data);
    }
}

// Usage
$sorter = new Sorter(new QuickSortStrategy());
$sorted = $sorter->sort([5, 2, 8, 1, 9]);
```

#### Observer Pattern

```php
interface Observer
{
    public function update(string $event, mixed $data): void;
}

interface Subject
{
    public function attach(Observer $observer): void;
    public function detach(Observer $observer): void;
    public function notify(string $event, mixed $data): void;
}

class Order implements Subject
{
    private array $observers = [];
    private string $status;

    public function attach(Observer $observer): void
    {
        $this->observers[] = $observer;
    }

    public function detach(Observer $observer): void
    {
        $this->observers = array_filter(
            $this->observers,
            fn($o) => $o !== $observer
        );
    }

    public function notify(string $event, mixed $data): void
    {
        foreach ($this->observers as $observer) {
            $observer->update($event, $data);
        }
    }

    public function setStatus(string $status): void
    {
        $this->status = $status;
        $this->notify('status_changed', $status);
    }
}

class EmailNotifier implements Observer
{
    public function update(string $event, mixed $data): void
    {
        if ($event === 'status_changed') {
            echo "Sending email: Order status changed to {$data}\n";
        }
    }
}

class SMSNotifier implements Observer
{
    public function update(string $event, mixed $data): void
    {
        if ($event === 'status_changed') {
            echo "Sending SMS: Order status changed to {$data}\n";
        }
    }
}

// Usage
$order = new Order();
$order->attach(new EmailNotifier());
$order->attach(new SMSNotifier());
$order->setStatus('shipped');
```

---

## Architecture Patterns

### 1. MVC (Model-View-Controller)

```
Request → Controller → Model → Database
              ↓
           View
              ↓
         Response

Separation of concerns:
- Model: Data and business logic
- View: Presentation layer
- Controller: Handles requests, coordinates model and view
```

### 2. Layered Architecture

```
Presentation Layer (Controllers, Views)
       ↓
Business Logic Layer (Services, Use Cases)
       ↓
Data Access Layer (Repositories, ORMs)
       ↓
Database Layer
```

```php
// Presentation Layer
class UserController
{
    public function __construct(
        private UserService $userService
    ) {}

    public function store(StoreUserRequest $request)
    {
        $user = $this->userService->createUser($request->validated());
        return new UserResource($user);
    }
}

// Business Logic Layer
class UserService
{
    public function __construct(
        private UserRepositoryInterface $userRepository,
        private EmailService $emailService
    ) {}

    public function createUser(array $data): User
    {
        return DB::transaction(function () use ($data) {
            $user = $this->userRepository->create($data);
            $this->emailService->sendWelcomeEmail($user);
            event(new UserCreated($user));
            return $user;
        });
    }
}

// Data Access Layer
class EloquentUserRepository implements UserRepositoryInterface
{
    public function create(array $data): User
    {
        return User::create($data);
    }

    public function find(int $id): ?User
    {
        return User::find($id);
    }
}
```

### 3. Hexagonal Architecture (Ports & Adapters)

```
        External Systems
              ↓
         Adapters (Controllers, CLI)
              ↓
         Ports (Interfaces)
              ↓
    Core Domain (Business Logic)
              ↓
         Ports (Interfaces)
              ↓
    Adapters (Database, External APIs)
```

```php
// Core Domain
namespace App\Domain\User;

interface UserRepositoryPort
{
    public function save(User $user): void;
    public function findById(UserId $id): ?User;
}

class CreateUserUseCase
{
    public function __construct(
        private UserRepositoryPort $repository
    ) {}

    public function execute(CreateUserCommand $command): User
    {
        $user = User::create(
            new UserId($command->id),
            new Email($command->email),
            new Name($command->name)
        );

        $this->repository->save($user);
        return $user;
    }
}

// Infrastructure Layer (Adapter)
namespace App\Infrastructure\Persistence;

class EloquentUserRepository implements UserRepositoryPort
{
    public function save(User $user): void
    {
        UserModel::updateOrCreate(
            ['id' => $user->getId()->value()],
            [
                'email' => $user->getEmail()->value(),
                'name' => $user->getName()->value(),
            ]
        );
    }

    public function findById(UserId $id): ?User
    {
        $model = UserModel::find($id->value());
        return $model ? $this->toDomain($model) : null;
    }

    private function toDomain(UserModel $model): User
    {
        return User::create(
            new UserId($model->id),
            new Email($model->email),
            new Name($model->name)
        );
    }
}
```

### 4. Event-Driven Architecture

```php
// Event
class OrderPlaced
{
    public function __construct(
        public readonly Order $order,
        public readonly \DateTimeImmutable $occurredAt
    ) {}
}

// Event Handlers
class SendOrderConfirmationEmail
{
    public function handle(OrderPlaced $event): void
    {
        Mail::to($event->order->user)
            ->send(new OrderConfirmationMail($event->order));
    }
}

class UpdateInventory
{
    public function handle(OrderPlaced $event): void
    {
        foreach ($event->order->items as $item) {
            $item->product->decrement('stock', $item->quantity);
        }
    }
}

class NotifyWarehouse
{
    public function handle(OrderPlaced $event): void
    {
        Http::post('https://warehouse.api/orders', [
            'order_id' => $event->order->id,
            'items' => $event->order->items->toArray(),
        ]);
    }
}

// Event Bus
class EventBus
{
    private array $handlers = [];

    public function subscribe(string $eventClass, callable $handler): void
    {
        $this->handlers[$eventClass][] = $handler;
    }

    public function dispatch(object $event): void
    {
        $eventClass = get_class($event);

        if (isset($this->handlers[$eventClass])) {
            foreach ($this->handlers[$eventClass] as $handler) {
                $handler($event);
            }
        }
    }
}

// Usage
$eventBus = new EventBus();
$eventBus->subscribe(OrderPlaced::class, new SendOrderConfirmationEmail());
$eventBus->subscribe(OrderPlaced::class, new UpdateInventory());
$eventBus->subscribe(OrderPlaced::class, new NotifyWarehouse());

$event = new OrderPlaced($order, new \DateTimeImmutable());
$eventBus->dispatch($event);
```

---

## Microservices Architecture

### Service Boundaries

```
User Service: User management, authentication
Order Service: Order processing, order history
Product Service: Product catalog, inventory
Payment Service: Payment processing
Notification Service: Email, SMS, push notifications
```

### Communication Patterns

#### 1. REST API

```php
// User Service API
Route::prefix('api/v1')->group(function () {
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::post('/users', [UserController::class, 'store']);
    Route::put('/users/{id}', [UserController::class, 'update']);
});

// Order Service calling User Service
class OrderService
{
    public function createOrder(array $data): Order
    {
        // Verify user exists in User Service
        $userResponse = Http::get("http://user-service/api/v1/users/{$data['user_id']}");

        if ($userResponse->failed()) {
            throw new UserNotFoundException();
        }

        return Order::create($data);
    }
}
```

#### 2. Message Queue (Async)

```php
// Order Service publishes event
use Illuminate\Support\Facades\Queue;

class OrderService
{
    public function placeOrder(array $data): Order
    {
        $order = Order::create($data);

        // Publish event to message queue
        Queue::connection('rabbitmq')->push(new OrderPlacedEvent([
            'order_id' => $order->id,
            'user_id' => $order->user_id,
            'total' => $order->total,
        ]));

        return $order;
    }
}

// Notification Service subscribes to event
class OrderPlacedEventHandler
{
    public function handle(OrderPlacedEvent $event): void
    {
        // Send notification
        $user = Http::get("http://user-service/api/v1/users/{$event->user_id}")->json();

        Mail::to($user['email'])->send(new OrderConfirmationMail($event));
    }
}
```

### Service Discovery

```php
// Service Registry
class ServiceRegistry
{
    private array $services = [];

    public function register(string $serviceName, string $url): void
    {
        $this->services[$serviceName] = $url;
    }

    public function discover(string $serviceName): string
    {
        if (!isset($this->services[$serviceName])) {
            throw new ServiceNotFoundException($serviceName);
        }

        return $this->services[$serviceName];
    }
}

// Usage
$registry = new ServiceRegistry();
$registry->register('user-service', 'http://user-service:8080');
$registry->register('order-service', 'http://order-service:8081');

$userServiceUrl = $registry->discover('user-service');
$response = Http::get("{$userServiceUrl}/api/users/123");
```

### API Gateway Pattern

```php
// API Gateway
class APIGateway
{
    public function getUserWithOrders(int $userId): array
    {
        // Aggregate data from multiple services
        $userResponse = Http::get("http://user-service/api/users/{$userId}");
        $ordersResponse = Http::get("http://order-service/api/orders?user_id={$userId}");

        return [
            'user' => $userResponse->json(),
            'orders' => $ordersResponse->json(),
        ];
    }
}
```

---

## Database Design

### Normalization

```sql
-- 1NF: Atomic values, no repeating groups
-- ❌ Bad
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    emails VARCHAR(500) -- Multiple emails in one column
);

-- ✅ Good
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE user_emails (
    id INT PRIMARY KEY,
    user_id INT,
    email VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 2NF: No partial dependencies
-- 3NF: No transitive dependencies

-- Denormalization for performance
CREATE TABLE orders_summary (
    order_id INT PRIMARY KEY,
    user_name VARCHAR(100), -- Denormalized for faster queries
    order_total DECIMAL(10,2),
    items_count INT
);
```

### Schema Design Patterns

```sql
-- Time-series data
CREATE TABLE metrics (
    id BIGINT PRIMARY KEY,
    metric_name VARCHAR(50),
    value DECIMAL(10,2),
    recorded_at TIMESTAMP,
    INDEX idx_metric_time (metric_name, recorded_at)
);

-- Polymorphic relationships
CREATE TABLE comments (
    id INT PRIMARY KEY,
    commentable_type VARCHAR(50), -- 'Post', 'Video', etc.
    commentable_id INT,
    content TEXT,
    INDEX idx_polymorphic (commentable_type, commentable_id)
);

-- Soft deletes
CREATE TABLE posts (
    id INT PRIMARY KEY,
    title VARCHAR(200),
    deleted_at TIMESTAMP NULL,
    INDEX idx_active (deleted_at)
);

-- Audit trail
CREATE TABLE audit_log (
    id BIGINT PRIMARY KEY,
    table_name VARCHAR(50),
    record_id INT,
    action ENUM('CREATE', 'UPDATE', 'DELETE'),
    old_values JSON,
    new_values JSON,
    user_id INT,
    created_at TIMESTAMP
);
```

---

## API Design

### RESTful API Best Practices

```
GET    /api/users          - List users
GET    /api/users/123      - Get specific user
POST   /api/users          - Create user
PUT    /api/users/123      - Update user (full)
PATCH  /api/users/123      - Update user (partial)
DELETE /api/users/123      - Delete user

Nested resources:
GET    /api/users/123/posts       - User's posts
GET    /api/posts/456/comments    - Post's comments

Filtering, sorting, pagination:
GET /api/users?role=admin&sort=-created_at&page=2&per_page=20
```

### API Versioning

```php
// URL versioning
Route::prefix('api/v1')->group(function () {
    Route::apiResource('users', UserV1Controller::class);
});

Route::prefix('api/v2')->group(function () {
    Route::apiResource('users', UserV2Controller::class);
});

// Header versioning
Route::middleware('api.version:v1')->group(function () {
    Route::apiResource('users', UserController::class);
});
```

### Response Format

```php
// Success response
{
    "data": {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
    },
    "meta": {
        "timestamp": "2026-01-23T10:00:00Z"
    }
}

// Error response
{
    "error": {
        "code": "VALIDATION_ERROR",
        "message": "The given data was invalid",
        "details": {
            "email": ["The email field is required"],
            "name": ["The name must be at least 3 characters"]
        }
    },
    "meta": {
        "timestamp": "2026-01-23T10:00:00Z"
    }
}

// Pagination
{
    "data": [...],
    "meta": {
        "current_page": 1,
        "per_page": 20,
        "total": 150,
        "last_page": 8
    },
    "links": {
        "first": "/api/users?page=1",
        "last": "/api/users?page=8",
        "prev": null,
        "next": "/api/users?page=2"
    }
}
```

---

## Scalability Patterns

### Horizontal vs Vertical Scaling

```
Vertical Scaling (Scale Up):
- Add more CPU, RAM to existing server
- Easier to implement
- Has limits
- Single point of failure

Horizontal Scaling (Scale Out):
- Add more servers
- Unlimited scaling
- Requires load balancing
- Complex architecture
```

### Load Balancing

```nginx
# Nginx load balancer config
upstream app_servers {
    least_conn;  # or: ip_hash, round_robin
    server app1.example.com:8080 weight=3;
    server app2.example.com:8080 weight=2;
    server app3.example.com:8080 weight=1 backup;
}

server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://app_servers;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Database Replication

```
Master-Slave Replication:
- Master: Handles writes
- Slaves: Handle reads
- Improves read performance

Master-Master Replication:
- Both handle writes and reads
- Conflict resolution needed
```

```php
// Laravel read/write connections
'mysql' => [
    'write' => [
        'host' => env('DB_HOST_WRITE', '127.0.0.1'),
    ],
    'read' => [
        ['host' => env('DB_HOST_READ_1', '127.0.0.1')],
        ['host' => env('DB_HOST_READ_2', '127.0.0.1')],
    ],
    'sticky' => true,
],
```

---

**Next**: [DevOps & Deployment →](./08_DEVOPS_DEPLOYMENT.md)
