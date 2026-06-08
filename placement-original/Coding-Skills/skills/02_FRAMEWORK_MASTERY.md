# Framework Mastery: Laravel & React 🚀

## Deep Dive into Modern Framework Architecture

---

## Table of Contents

1. [Laravel Architecture](#laravel-architecture)
2. [Laravel Advanced Patterns](#laravel-advanced-patterns)
3. [React Architecture](#react-architecture)
4. [React Advanced Patterns](#react-advanced-patterns)
5. [Inertia.js Integration](#inertiajs-integration)
6. [State Management](#state-management)
7. [Performance Patterns](#performance-patterns)
8. [Security Patterns](#security-patterns)

---

## Laravel Architecture

### MVC Pattern in Laravel

```
Model (Data Layer)
  ↓
Controller (Business Logic)
  ↓
View (Presentation)

Additional Layers:
- Services (Complex business logic)
- Repositories (Data access abstraction)
- Actions (Single responsibility tasks)
- DTOs (Data Transfer Objects)
```

### Request Lifecycle

```
1. Entry Point (public/index.php)
2. HTTP Kernel
3. Service Providers
4. Middleware Stack
5. Router
6. Controller/Closure
7. Response
8. Terminate Middleware
```

### Service Container & Dependency Injection

```php
// Binding in Service Provider
public function register()
{
    // Singleton binding
    $this->app->singleton(OrderService::class, function ($app) {
        return new OrderService(
            $app->make(PaymentGateway::class),
            $app->make(NotificationService::class)
        );
    });

    // Interface binding
    $this->app->bind(
        PaymentGatewayInterface::class,
        StripePaymentGateway::class
    );

    // Contextual binding
    $this->app->when(OrderController::class)
        ->needs(PaymentGatewayInterface::class)
        ->give(StripePaymentGateway::class);
}

// Automatic dependency injection
class OrderController extends Controller
{
    public function __construct(
        private OrderService $orderService,
        private PaymentGateway $paymentGateway
    ) {}

    public function store(StoreOrderRequest $request)
    {
        // Dependencies automatically injected
        $order = $this->orderService->create($request->validated());
        return new OrderResource($order);
    }
}
```

### Eloquent ORM Mastery

```php
// Relationships
class User extends Model
{
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class)
            ->withPivot('assigned_at')
            ->withTimestamps();
    }

    public function latestPost(): HasOne
    {
        return $this->hasOne(Post::class)->latestOfMany();
    }

    public function profile(): HasOneThrough
    {
        return $this->hasOneThrough(Profile::class, Account::class);
    }
}

// Query Scopes
class Post extends Model
{
    public function scopePublished(Builder $query): void
    {
        $query->where('status', 'published')
              ->where('published_at', '<=', now());
    }

    public function scopePopular(Builder $query, int $threshold = 100): void
    {
        $query->where('views', '>=', $threshold);
    }

    public function scopeByAuthor(Builder $query, User $user): void
    {
        $query->where('user_id', $user->id);
    }
}

// Usage
$posts = Post::published()
    ->popular()
    ->byAuthor($user)
    ->with('author', 'comments')
    ->get();

// Advanced Queries
$users = User::query()
    ->select('users.*', DB::raw('COUNT(posts.id) as post_count'))
    ->leftJoin('posts', 'users.id', '=', 'posts.user_id')
    ->groupBy('users.id')
    ->having('post_count', '>', 10)
    ->orderBy('post_count', 'desc')
    ->get();

// Subqueries
$latestPosts = Post::select('user_id', DB::raw('MAX(created_at) as last_post_at'))
    ->groupBy('user_id');

$users = User::query()
    ->joinSub($latestPosts, 'latest_posts', function ($join) {
        $join->on('users.id', '=', 'latest_posts.user_id');
    })
    ->get();

// Chunk for large datasets
User::chunk(100, function ($users) {
    foreach ($users as $user) {
        // Process user
    }
});

// Lazy loading for memory efficiency
User::lazy()->each(function ($user) {
    // Process one at a time
});
```

### Events & Listeners

```php
// Event
namespace App\Events;

class OrderPlaced
{
    public function __construct(
        public Order $order
    ) {}
}

// Listeners
namespace App\Listeners;

class SendOrderConfirmation
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

class NotifyAdmin
{
    public function handle(OrderPlaced $event): void
    {
        Notification::send(
            User::admins()->get(),
            new NewOrderNotification($event->order)
        );
    }
}

// Register in EventServiceProvider
protected $listen = [
    OrderPlaced::class => [
        SendOrderConfirmation::class,
        UpdateInventory::class,
        NotifyAdmin::class,
    ],
];

// Dispatch event
event(new OrderPlaced($order));
```

---

## Laravel Advanced Patterns

### 1. Repository Pattern

```php
// Interface
namespace App\Contracts;

interface UserRepositoryInterface
{
    public function find(int $id): ?User;
    public function create(array $data): User;
    public function update(User $user, array $data): bool;
    public function delete(User $user): bool;
}

// Implementation
namespace App\Repositories;

class EloquentUserRepository implements UserRepositoryInterface
{
    public function find(int $id): ?User
    {
        return User::find($id);
    }

    public function create(array $data): User
    {
        return User::create($data);
    }

    public function update(User $user, array $data): bool
    {
        return $user->update($data);
    }

    public function delete(User $user): bool
    {
        return $user->delete();
    }

    public function findByEmail(string $email): ?User
    {
        return User::where('email', $email)->first();
    }
}

// Bind in Service Provider
$this->app->bind(
    UserRepositoryInterface::class,
    EloquentUserRepository::class
);

// Usage in Service
class UserService
{
    public function __construct(
        private UserRepositoryInterface $userRepository
    ) {}

    public function createUser(array $data): User
    {
        return $this->userRepository->create($data);
    }
}
```

### 2. Action Pattern

```php
// Single-purpose action classes
namespace App\Actions;

class CreateOrderAction
{
    public function __construct(
        private ValidateOrderDataAction $validateData,
        private CalculateOrderTotalAction $calculateTotal,
        private ReserveInventoryAction $reserveInventory
    ) {}

    public function execute(User $user, array $data): Order
    {
        $this->validateData->execute($data);

        return DB::transaction(function () use ($user, $data) {
            $order = Order::create([
                'user_id' => $user->id,
                'total' => $this->calculateTotal->execute($data['items']),
                'status' => 'pending',
            ]);

            foreach ($data['items'] as $item) {
                $order->items()->create($item);
            }

            $this->reserveInventory->execute($order);

            event(new OrderCreated($order));

            return $order;
        });
    }
}

// Usage
class OrderController
{
    public function store(
        StoreOrderRequest $request,
        CreateOrderAction $action
    ) {
        $order = $action->execute($request->user(), $request->validated());
        return new OrderResource($order);
    }
}
```

### 3. Query Builder Pattern

```php
namespace App\Queries;

class UserQueryBuilder
{
    private Builder $query;

    public function __construct()
    {
        $this->query = User::query();
    }

    public function active(): self
    {
        $this->query->where('active', true);
        return $this;
    }

    public function verified(): self
    {
        $this->query->whereNotNull('email_verified_at');
        return $this;
    }

    public function withRole(string $role): self
    {
        $this->query->whereHas('roles', function ($q) use ($role) {
            $q->where('name', $role);
        });
        return $this;
    }

    public function search(string $term): self
    {
        $this->query->where(function ($q) use ($term) {
            $q->where('name', 'like', "%{$term}%")
              ->orWhere('email', 'like', "%{$term}%");
        });
        return $this;
    }

    public function get(): Collection
    {
        return $this->query->get();
    }

    public function paginate(int $perPage = 15)
    {
        return $this->query->paginate($perPage);
    }
}

// Usage
$users = (new UserQueryBuilder())
    ->active()
    ->verified()
    ->withRole('admin')
    ->search('john')
    ->paginate(20);
```

### 4. Pipeline Pattern

```php
namespace App\Pipelines;

class ProcessOrderPipeline
{
    public function handle(Order $order)
    {
        return app(Pipeline::class)
            ->send($order)
            ->through([
                ValidateOrder::class,
                ChargePayment::class,
                UpdateInventory::class,
                SendNotifications::class,
            ])
            ->then(function ($order) {
                return $order;
            });
    }
}

// Pipeline steps
class ChargePayment
{
    public function handle(Order $order, Closure $next)
    {
        $result = $this->paymentGateway->charge($order->total);

        if (!$result->success) {
            throw new PaymentFailedException();
        }

        $order->update(['payment_status' => 'paid']);

        return $next($order);
    }
}
```

---

## React Architecture

### Component Hierarchy

```
App
├── Layout
│   ├── Header
│   │   ├── Logo
│   │   ├── Navigation
│   │   └── UserMenu
│   ├── Sidebar
│   └── Footer
├── Pages
│   ├── Dashboard
│   ├── UserList
│   │   ├── UserTable
│   │   │   ├── UserRow
│   │   │   └── UserActions
│   │   └── UserFilters
│   └── UserProfile
│       ├── ProfileHeader
│       ├── ProfileInfo
│       └── ProfileSettings
└── Shared Components
    ├── Button
    ├── Input
    ├── Modal
    └── Card
```

### Component Patterns

```typescript
// 1. Container/Presentational Pattern

// Container (logic)
export function UserListContainer() {
    const { data: users, loading, error } = useFetch<User[]>('/api/users');
    const [filters, setFilters] = useState({});

    const filteredUsers = useMemo(() => {
        return users?.filter(user =>
            Object.entries(filters).every(([key, value]) =>
                user[key] === value
            )
        );
    }, [users, filters]);

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    return (
        <UserListPresentation
            users={filteredUsers}
            onFilterChange={setFilters}
        />
    );
}

// Presentational (UI)
interface UserListPresentationProps {
    users: User[];
    onFilterChange: (filters: any) => void;
}

export function UserListPresentation({
    users,
    onFilterChange
}: UserListPresentationProps) {
    return (
        <div>
            <UserFilters onChange={onFilterChange} />
            <UserTable users={users} />
        </div>
    );
}

// 2. Compound Component Pattern

export const Tabs = ({ children, defaultValue }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabsContext.Provider>
    );
};

Tabs.List = function TabsList({ children }: { children: React.ReactNode }) {
    return <div className="tabs-list">{children}</div>;
};

Tabs.Trigger = function TabsTrigger({ value, children }: TriggerProps) {
    const { activeTab, setActiveTab } = useTabsContext();
    return (
        <button
            className={activeTab === value ? 'active' : ''}
            onClick={() => setActiveTab(value)}
        >
            {children}
        </button>
    );
};

Tabs.Content = function TabsContent({ value, children }: ContentProps) {
    const { activeTab } = useTabsContext();
    if (activeTab !== value) return null;
    return <div>{children}</div>;
};

// Usage
<Tabs defaultValue="profile">
    <Tabs.List>
        <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="profile">
        <ProfileContent />
    </Tabs.Content>
    <Tabs.Content value="settings">
        <SettingsContent />
    </Tabs.Content>
</Tabs>

// 3. Render Props Pattern

interface DataLoaderProps<T> {
    url: string;
    children: (data: T | null, loading: boolean, error: string | null) => React.ReactNode;
}

export function DataLoader<T>({ url, children }: DataLoaderProps<T>) {
    const { data, loading, error } = useFetch<T>(url);
    return <>{children(data, loading, error)}</>;
}

// Usage
<DataLoader<User[]> url="/api/users">
    {(users, loading, error) => {
        if (loading) return <Loading />;
        if (error) return <Error message={error} />;
        return <UserList users={users} />;
    }}
</DataLoader>

// 4. Higher-Order Component (HOC) Pattern

function withAuth<P extends object>(
    Component: React.ComponentType<P>
) {
    return function AuthenticatedComponent(props: P) {
        const { user, loading } = useAuth();

        if (loading) return <Loading />;
        if (!user) return <Navigate to="/login" />;

        return <Component {...props} />;
    };
}

// Usage
const ProtectedDashboard = withAuth(Dashboard);
```

---

## React Advanced Patterns

### Custom Hooks Best Practices

```typescript
// 1. useLocalStorage Hook
export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function
                ? value(storedValue)
                : value;

            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
}

// 2. useDebounce Hook
export function useDebounce<T>(value: T, delay: number = 500): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

// Usage
function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    useEffect(() => {
        if (debouncedSearchTerm) {
            // API call with debounced value
            fetchResults(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);

    return <input onChange={e => setSearchTerm(e.target.value)} />;
}

// 3. usePrevious Hook
export function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

// 4. useAsync Hook
export function useAsync<T>(
    asyncFunction: () => Promise<T>,
    immediate = true
) {
    const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);

    const execute = useCallback(async () => {
        setStatus('pending');
        setData(null);
        setError(null);

        try {
            const response = await asyncFunction();
            setData(response);
            setStatus('success');
        } catch (error: any) {
            setError(error.message);
            setStatus('error');
        }
    }, [asyncFunction]);

    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);

    return { execute, status, data, error };
}
```

### Performance Optimization

```typescript
// 1. React.memo with custom comparison
const UserCard = React.memo(
    ({ user }: { user: User }) => {
        return (
            <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        );
    },
    (prevProps, nextProps) => {
        // Only re-render if user ID changes
        return prevProps.user.id === nextProps.user.id;
    }
);

// 2. useMemo for expensive calculations
function ExpensiveComponent({ data }: { data: number[] }) {
    const expensiveResult = useMemo(() => {
        console.log('Calculating...');
        return data.reduce((acc, num) => acc + num * 2, 0);
    }, [data]);

    return <div>Result: {expensiveResult}</div>;
}

// 3. useCallback to prevent re-renders
function ParentComponent() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    // Without useCallback, this creates new function on every render
    const handleClick = useCallback(() => {
        setCount(c => c + 1);
    }, []);

    return (
        <div>
            <ChildComponent onClick={handleClick} />
            <button onClick={() => setOther(o => o + 1)}>
                Other: {other}
            </button>
        </div>
    );
}

const ChildComponent = React.memo(({ onClick }: { onClick: () => void }) => {
    console.log('Child rendered');
    return <button onClick={onClick}>Click me</button>;
});

// 4. Code splitting with React.lazy
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const UserProfile = React.lazy(() => import('./pages/UserProfile'));

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </Suspense>
    );
}

// 5. Virtual scrolling for large lists
import { FixedSizeList } from 'react-window';

function VirtualList({ items }: { items: any[] }) {
    const Row = ({ index, style }: any) => (
        <div style={style}>
            {items[index].name}
        </div>
    );

    return (
        <FixedSizeList
            height={600}
            itemCount={items.length}
            itemSize={50}
            width="100%"
        >
            {Row}
        </FixedSizeList>
    );
}
```

---

## Inertia.js Integration

### Inertia Setup

```typescript
// app.tsx
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
        return pages[`./Pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});

// Laravel Controller
class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Users/Index', [
            'users' => User::paginate(20),
            'filters' => request()->only(['search', 'role']),
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        $user = User::create($request->validated());

        return redirect()
            ->route('users.show', $user)
            ->with('success', 'User created successfully');
    }
}

// React Component
import { Link, useForm } from '@inertiajs/react';

export default function UserIndex({ users, filters }) {
    const { data, setData, get } = useForm(filters);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        get(route('users.index'), {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    value={data.search}
                    onChange={e => setData('search', e.target.value)}
                />
            </form>

            {users.data.map(user => (
                <Link
                    key={user.id}
                    href={route('users.show', user.id)}
                >
                    {user.name}
                </Link>
            ))}
        </div>
    );
}
```

---

**Next**: [Testing Strategies →](./05_TESTING_STRATEGIES.md)
