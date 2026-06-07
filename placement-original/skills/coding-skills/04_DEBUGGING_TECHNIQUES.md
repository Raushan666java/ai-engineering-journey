# Complete Debugging Guide 🐛

## Master Debugging for Laravel, React, HTML & JavaScript

---

## Table of Contents

1. [Debugging Mindset](#debugging-mindset)
2. [Laravel Debugging](#laravel-debugging)
3. [React Debugging](#react-debugging)
4. [JavaScript Debugging](#javascript-debugging)
5. [HTML/CSS Debugging](#html-css-debugging)
6. [API Debugging](#api-debugging)
7. [Database Debugging](#database-debugging)
8. [Performance Debugging](#performance-debugging)
9. [Production Debugging](#production-debugging)
10. [Debugging Tools Reference](#debugging-tools-reference)

---

## Debugging Mindset

### The Scientific Method of Debugging

```
1. OBSERVE → What is the actual behavior?
2. HYPOTHESIZE → What could cause this?
3. TEST → Verify your hypothesis
4. ANALYZE → Examine the results
5. REPEAT → Until bug is found and fixed
```

### Common Debugging Mistakes

```
❌ DON'T:
- Make random changes hoping it works
- Skip reading error messages carefully
- Debug without understanding the code flow
- Fix symptoms instead of root causes
- Forget to test after fixing

✅ DO:
- Read error messages completely
- Reproduce the bug consistently
- Isolate the problem area
- Use logging and breakpoints
- Understand WHY the fix works
- Add tests to prevent regression
```

---

## Laravel Debugging

### 1. **Laravel Debug Tools**

#### Install Laravel Debugbar

```bash
composer require barryvdh/laravel-debugbar --dev
```

```php
// Automatically shows:
// - Database queries with timing
// - Route information
// - View rendering time
// - Memory usage
// - Request/Response data
```

#### Install Laravel Telescope

```bash
composer require laravel/telescope --dev
php artisan telescope:install
php artisan migrate
```

Access at: `http://your-app.test/telescope`

### 2. **Dump & Die (dd)**

```php
// Basic dd()
$user = User::find(1);
dd($user); // Dumps and dies

// Multiple values
dd($user, $orders, $settings);

// Dump without dying
dump($user); // Continues execution

// Ray debugging (better than dd)
// composer require spatie/laravel-ray
ray($user)->label('User Data');
ray()->table($users);
ray()->measure(function() {
    // Code to measure
});
```

### 3. **Laravel Logging**

```php
use Illuminate\Support\Facades\Log;

// Different log levels
Log::emergency('System is down');
Log::alert('Database connection lost');
Log::critical('Application crashed');
Log::error('Failed to process payment', ['order_id' => $order->id]);
Log::warning('High memory usage detected');
Log::notice('User login from new device');
Log::info('Order processed successfully', ['order' => $order->toArray()]);
Log::debug('Variable state', ['var' => $var]);

// Contextual logging
Log::channel('slack')->error('Payment gateway down');

// Log SQL queries
DB::listen(function($query) {
    Log::info('SQL Query', [
        'sql' => $query->sql,
        'bindings' => $query->bindings,
        'time' => $query->time
    ]);
});

// Enable query logging temporarily
DB::enableQueryLog();
// ... run queries ...
$queries = DB::getQueryLog();
dd($queries);
```

### 4. **Exception Handling**

```php
// Custom exception handler
// app/Exceptions/Handler.php

public function register()
{
    $this->reportable(function (Throwable $e) {
        // Log to external service
        if (app()->bound('sentry')) {
            app('sentry')->captureException($e);
        }
    });

    $this->renderable(function (NotFoundHttpException $e, $request) {
        if ($request->is('api/*')) {
            return response()->json([
                'message' => 'Resource not found'
            ], 404);
        }
    });
}

// Custom exceptions
namespace App\Exceptions;

class PaymentFailedException extends \Exception
{
    public function __construct(
        public readonly string $gateway,
        public readonly array $details,
        string $message = 'Payment processing failed'
    ) {
        parent::__construct($message);
    }

    public function report()
    {
        Log::error('Payment Failed', [
            'gateway' => $this->gateway,
            'details' => $this->details,
        ]);
    }

    public function render($request)
    {
        return response()->json([
            'error' => $this->getMessage(),
            'gateway' => $this->gateway,
        ], 402);
    }
}

// Using custom exception
throw new PaymentFailedException(
    gateway: 'stripe',
    details: ['error_code' => 'card_declined']
);
```

### 5. **Debugging Eloquent Queries**

```php
// See SQL query
$query = User::where('active', true)->where('role', 'admin');
dd($query->toSql(), $query->getBindings());

// Log slow queries
DB::listen(function ($query) {
    if ($query->time > 1000) { // More than 1 second
        Log::warning('Slow Query Detected', [
            'sql' => $query->sql,
            'time' => $query->time,
            'bindings' => $query->bindings,
        ]);
    }
});

// Debug with explain
$users = User::where('email', 'like', '%@example.com')->get();
DB::table('users')
    ->where('email', 'like', '%@example.com')
    ->explain()
    ->dd();

// N+1 Query Detection
// Install: composer require barryvdh/laravel-debugbar --dev
// Shows all queries and highlights N+1 issues

// Fix N+1
// ❌ Bad: N+1 queries
$posts = Post::all();
foreach ($posts as $post) {
    echo $post->author->name; // Queries for each post
}

// ✅ Good: Eager loading
$posts = Post::with('author')->get();
foreach ($posts as $post) {
    echo $post->author->name; // No extra queries
}
```

### 6. **Route Debugging**

```bash
# List all routes
php artisan route:list

# Filter routes
php artisan route:list --name=user
php artisan route:list --path=api

# Show specific route
php artisan route:list --name=users.store

# Test route exists
Route::has('users.store'); // true/false

# Get route info
dd(route('users.store')); // URL
dd(Route::currentRouteName()); // Current route name
dd(Route::currentRouteAction()); // Controller@method
```

### 7. **Middleware Debugging**

```php
// Log middleware execution
class LogMiddleware
{
    public function handle($request, Closure $next)
    {
        Log::info('Before Middleware', [
            'url' => $request->url(),
            'method' => $request->method(),
            'user' => $request->user()?->id,
        ]);

        $response = $next($request);

        Log::info('After Middleware', [
            'status' => $response->status(),
        ]);

        return $response;
    }
}
```

### 8. **Validation Debugging**

```php
// See validation errors
$validator = Validator::make($request->all(), $rules);

if ($validator->fails()) {
    dd($validator->errors()->all());
    dd($validator->errors()->toArray());
}

// In FormRequest
public function withValidator($validator)
{
    $validator->after(function ($validator) {
        Log::info('Validation Data', [
            'input' => $this->all(),
            'errors' => $validator->errors()->toArray(),
        ]);
    });
}
```

### 9. **Job/Queue Debugging**

```php
// Log job execution
class ProcessOrder implements ShouldQueue
{
    public function handle()
    {
        Log::info('Job Started', ['order_id' => $this->order->id]);

        try {
            // Process order
            Log::info('Job Completed', ['order_id' => $this->order->id]);
        } catch (\Exception $e) {
            Log::error('Job Failed', [
                'order_id' => $this->order->id,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);
            throw $e;
        }
    }

    public function failed(\Throwable $exception)
    {
        Log::error('Job Permanently Failed', [
            'order_id' => $this->order->id,
            'exception' => $exception->getMessage(),
        ]);
    }
}

// Monitor failed jobs
php artisan queue:failed
php artisan queue:retry {id}
php artisan queue:forget {id}
```

---

## React Debugging

### 1. **React DevTools**

Install browser extension: React Developer Tools

```javascript
// Component inspection
- Inspect component tree
- View props and state
- Track re-renders (Profiler)
- Highlight component updates

// In your component
function UserProfile() {
    useEffect(() => {
        console.log('UserProfile rendered');
    });

    // Add display name for debugging
    UserProfile.displayName = 'UserProfile';
}
```

### 2. **Console Debugging**

```typescript
// Structured logging
console.log("User data:", user);
console.table(users); // Table format
console.group("API Call");
console.log("Request:", request);
console.log("Response:", response);
console.groupEnd();

// Conditional logging
console.assert(user !== null, "User should not be null");

// Performance timing
console.time("API Call");
await fetchUsers();
console.timeEnd("API Call");

// Stack traces
console.trace("Trace from here");

// Styled console
console.log("%c Bug Found!", "color: red; font-size: 20px; font-weight: bold");
```

### 3. **React Hooks Debugging**

```typescript
// Debug custom hooks
export function useUser(userId: number) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("useUser effect triggered", { userId });

        fetchUser(userId)
            .then((data) => {
                console.log("User fetched:", data);
                setUser(data);
            })
            .catch((error) => {
                console.error("Error fetching user:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [userId]);

    // Debug hook return values
    useDebugValue(user ? `User: ${user.name}` : "No user");

    return { user, loading };
}

// Use debug hook
function useDebugValue(value: any, label: string = "Debug") {
    useEffect(() => {
        console.log(`[${label}]`, value);
    }, [value, label]);
}

// Usage
const user = useUser(123);
useDebugValue(user, "Current User");
```

### 4. **Error Boundaries**

```typescript
import React, { Component, ErrorInfo } from 'react';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error Boundary Caught:', error, errorInfo);

        // Log to error tracking service
        logErrorToService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-container">
                    <h1>Something went wrong</h1>
                    <details>
                        <summary>Error Details</summary>
                        <pre>{this.state.error?.message}</pre>
                        <pre>{this.state.error?.stack}</pre>
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

// Usage
<ErrorBoundary>
    <App />
</ErrorBoundary>
```

### 5. **React Query DevTools**

```typescript
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <YourApp />
            {/* Shows all queries, their state, and cache */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
```

### 6. **Redux DevTools**

```typescript
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: rootReducer,
    // Redux DevTools automatically enabled in development
    devTools: process.env.NODE_ENV !== "production",
});

// Time-travel debugging
// - See all dispatched actions
// - Inspect state changes
// - Replay actions
// - Export/import state
```

### 7. **Debugging Re-renders**

```typescript
// Use React DevTools Profiler to identify unnecessary re-renders

// Why Did You Render (helpful library)
import whyDidYouRender from "@welldone-software/why-did-you-render";

if (process.env.NODE_ENV === "development") {
    whyDidYouRender(React, {
        trackAllPureComponents: true,
        logOnDifferentValues: true,
    });
}

// Add to component
UserProfile.whyDidYouRender = true;

// Use React.memo to prevent re-renders
const MemoizedComponent = React.memo(Component, (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    return prevProps.id === nextProps.id;
});

// Use useCallback to stabilize functions
const handleClick = useCallback(() => {
    console.log("Clicked");
}, []); // Dependencies

// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
    return calculateExpensiveValue(data);
}, [data]);
```

---

## JavaScript Debugging

### 1. **Debugger Statement**

```javascript
function calculateTotal(items) {
    let total = 0;

    debugger; // Execution pauses here when DevTools open

    for (const item of items) {
        total += item.price * item.quantity;
    }

    return total;
}
```

### 2. **Chrome DevTools**

```javascript
// Breakpoints
- Line breakpoints: Click line number
- Conditional breakpoints: Right-click → Add conditional breakpoint
- Logpoints: Right-click → Add logpoint (logs without stopping)
- DOM breakpoints: Right-click element → Break on...

// Call stack
- See function call hierarchy
- Navigate between stack frames

// Scope variables
- Local variables
- Closure variables
- Global variables

// Watch expressions
- Add expressions to watch
- Evaluate on each pause

// Console commands
$0 // Currently selected element
$_ // Last evaluated expression
$$ // Shorthand for querySelectorAll
copy(obj) // Copy object to clipboard
monitor(functionName) // Log when function called
```

### 3. **Network Debugging**

```javascript
// Inspect fetch requests
fetch("/api/users")
    .then((response) => {
        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);
        return response.json();
    })
    .then((data) => {
        console.log("Response data:", data);
    })
    .catch((error) => {
        console.error("Fetch error:", error);
    });

// Intercept with DevTools Network tab
// - See request/response headers
// - Timing information
// - Response preview
// - Copy as fetch/cURL
```

### 4. **Source Maps**

```javascript
// Ensure source maps are enabled in build config

// Vite (vite.config.js)
export default {
    build: {
        sourcemap: true,
    },
};

// Now you can debug TypeScript/JSX source instead of compiled code
```

### 5. **Error Tracking**

```javascript
// Global error handler
window.addEventListener("error", (event) => {
    console.error("Global error:", {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
    });
});

// Unhandled promise rejections
window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled promise rejection:", event.reason);
});

// Try-catch with detailed logging
try {
    riskyOperation();
} catch (error) {
    console.error("Error details:", {
        name: error.name,
        message: error.message,
        stack: error.stack,
        cause: error.cause,
    });
}
```

---

## HTML/CSS Debugging

### 1. **Chrome DevTools Elements**

```
- Inspect element structure
- Edit HTML live
- Add/remove classes
- Modify attributes
- See event listeners
- Check accessibility tree
```

### 2. **CSS Debugging**

```css
/* Outline everything */
* {
    outline: 1px solid red;
}

/* Debug specific element */
.problematic-element {
    border: 2px solid red !important;
    background: rgba(255, 0, 0, 0.1) !important;
}
```

```javascript
// Computed styles
const element = document.querySelector(".my-element");
const styles = window.getComputedStyle(element);
console.log("Color:", styles.color);
console.log("Display:", styles.display);

// Check if CSS is applied
console.log(element.classList.contains("active")); // true/false
```

### 3. **Layout Debugging**

```
Chrome DevTools:
- Layout tab: See box model
- Computed tab: See final CSS values
- Flexbox/Grid debugger: Visual layout tools
- Layer borders: cmd+shift+P → "Show layer borders"
```

### 4. **Responsive Design Debugging**

```
DevTools Device Mode:
- Toggle device toolbar: Ctrl+Shift+M
- Test different screen sizes
- Simulate touch events
- Throttle network speed
- Rotate device orientation
```

---

## API Debugging

### 1. **Postman/Insomnia**

```
Test API endpoints:
- Send requests with different methods
- Set headers and auth
- Save request collections
- Write automated tests
- Generate code snippets
```

### 2. **Laravel API Debugging**

```php
// Log API requests
Route::middleware('log.api')->group(function () {
    // API routes
});

class LogApiMiddleware
{
    public function handle($request, Closure $next)
    {
        $requestId = Str::uuid();

        Log::info('API Request', [
            'id' => $requestId,
            'url' => $request->fullUrl(),
            'method' => $request->method(),
            'headers' => $request->headers->all(),
            'body' => $request->all(),
        ]);

        $response = $next($request);

        Log::info('API Response', [
            'id' => $requestId,
            'status' => $response->status(),
            'body' => $response->getContent(),
        ]);

        return $response;
    }
}
```

### 3. **Browser DevTools Network Tab**

```
- See all network requests
- Filter by type (XHR, Fetch, etc.)
- View request/response
- Copy as cURL
- Replay XHR request
- Preserve log across page loads
```

---

## Database Debugging

### 1. **Query Logging**

```php
// Enable query log
DB::enableQueryLog();

// Run queries
$users = User::where('active', true)->get();

// Get queries
$queries = DB::getQueryLog();
foreach ($queries as $query) {
    dump([
        'query' => $query['query'],
        'bindings' => $query['bindings'],
        'time' => $query['time'] . 'ms',
    ]);
}
```

### 2. **Database Tools**

```bash
# Laravel Tinker (interactive shell)
php artisan tinker

>>> User::count()
=> 150

>>> User::first()
=> App\Models\User {#1234}

>>> DB::table('users')->where('active', true)->count()
=> 50
```

---

## Performance Debugging

### 1. **Laravel Performance**

```php
// Measure execution time
$start = microtime(true);
// ... code ...
$end = microtime(true);
Log::info('Execution time: ' . ($end - $start) . 's');

// Memory usage
Log::info('Memory usage: ' . memory_get_usage(true) / 1024 / 1024 . 'MB');

// Laravel Telescope for profiling
```

### 2. **React Performance**

```typescript
// React Profiler
import { Profiler } from 'react';

<Profiler id="UserList" onRender={onRenderCallback}>
    <UserList />
</Profiler>

function onRenderCallback(
    id, phase, actualDuration, baseDuration, startTime, commitTime
) {
    console.log(`${id} (${phase}) took ${actualDuration}ms`);
}
```

---

## Production Debugging

### 1. **Error Tracking Services**

```php
// Sentry
composer require sentry/sentry-laravel

// config/sentry.php
'dsn' => env('SENTRY_LARAVEL_DSN'),

// Automatic error tracking
```

### 2. **Log Aggregation**

```
- Papertrail
- Loggly
- Datadog
- CloudWatch (AWS)
```

### 3. **APM Tools**

```
- New Relic
- Datadog APM
- Scout APM
- Blackfire.io
```

---

## Debugging Tools Reference

### Laravel

- Laravel Debugbar
- Laravel Telescope
- Ray by Spatie
- Laravel Tinker
- XDebug

### React/JavaScript

- React DevTools
- Redux DevTools
- React Query DevTools
- Chrome DevTools
- Vue DevTools (if using Inertia with Vue)

### Database

- MySQL Workbench
- TablePlus
- DBeaver
- phpMyAdmin

### API

- Postman
- Insomnia
- Thunder Client (VS Code)
- cURL

### Performance

- Blackfire.io
- Laravel Telescope
- Chrome Lighthouse
- WebPageTest

---

**Next**: [Testing Strategies →](./05_TESTING_STRATEGIES.md)
