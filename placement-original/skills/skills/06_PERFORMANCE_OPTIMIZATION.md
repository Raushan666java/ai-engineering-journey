# Performance Optimization 🚀

## Complete Guide to Building Fast Applications

---

## Table of Contents

1. [Performance Fundamentals](#performance-fundamentals)
2. [Backend Performance (Laravel/PHP)](#backend-performance)
3. [Frontend Performance (React)](#frontend-performance)
4. [Database Optimization](#database-optimization)
5. [Caching Strategies](#caching-strategies)
6. [Asset Optimization](#asset-optimization)
7. [Network Performance](#network-performance)
8. [Monitoring & Profiling](#monitoring-profiling)

---

## Performance Fundamentals

### Key Performance Metrics

```
Backend Metrics:
- Response Time: < 200ms (excellent), < 500ms (good)
- Throughput: Requests per second
- Database Query Time: < 50ms per query
- Memory Usage: Monitor for leaks
- CPU Usage: < 70% average

Frontend Metrics:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms
```

### Performance Budget

```javascript
// Define performance budget
{
    "javascript": "200KB",
    "css": "50KB",
    "images": "500KB",
    "fonts": "100KB",
    "total": "1MB",
    "requests": "50"
}
```

---

## Backend Performance (Laravel/PHP)

### 1. Query Optimization

```php
// ❌ Bad: N+1 Problem
$posts = Post::all();
foreach ($posts as $post) {
    echo $post->author->name; // N additional queries
    foreach ($post->comments as $comment) { // N * M queries
        echo $comment->user->name;
    }
}

// ✅ Good: Eager Loading
$posts = Post::with(['author', 'comments.user'])->get();
foreach ($posts as $post) {
    echo $post->author->name; // No extra queries
    foreach ($post->comments as $comment) {
        echo $comment->user->name;
    }
}

// ✅ Better: Selective Loading
$posts = Post::with([
    'author:id,name,email',
    'comments' => function ($query) {
        $query->where('approved', true)
              ->with('user:id,name')
              ->latest()
              ->limit(5);
    }
])->get();

// ✅ Best: Pagination
$posts = Post::with('author')->paginate(20);
```

### 2. Database Indexes

```php
// Add indexes for frequently queried columns
Schema::table('posts', function (Blueprint $table) {
    // Single column index
    $table->index('user_id');
    $table->index('status');
    $table->index('published_at');

    // Composite index (order matters!)
    $table->index(['user_id', 'status', 'published_at']);

    // Unique index
    $table->unique('slug');

    // Full-text index (MySQL/PostgreSQL)
    $table->fullText(['title', 'content']);
});

// Analyze query performance
DB::table('posts')
    ->where('status', 'published')
    ->where('user_id', 123)
    ->explain()
    ->dd();
```

### 3. Query Caching

```php
// Basic cache
$users = Cache::remember('users.active', 3600, function () {
    return User::where('active', true)->get();
});

// Cache tags (Redis/Memcached)
Cache::tags(['users', 'active'])->put('users.active', $users, 3600);
Cache::tags(['users'])->flush(); // Clear all user caches

// Query-specific caching
$posts = DB::table('posts')
    ->where('status', 'published')
    ->remember(3600) // Using rememberable trait
    ->get();

// Model caching
class Post extends Model
{
    use Cachable;

    protected $cacheFor = 3600; // Cache for 1 hour
    protected $cacheTags = ['posts'];
}

// Clear cache on model events
protected static function booted()
{
    static::saved(function ($post) {
        Cache::tags(['posts'])->flush();
    });
}
```

### 4. Response Optimization

```php
// Use API Resources for consistent responses
class PostResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'excerpt' => $this->excerpt,
            'author' => new UserResource($this->whenLoaded('author')),
            'comments_count' => $this->when(
                $request->has('include_counts'),
                fn() => $this->comments_count
            ),
        ];
    }
}

// HTTP Compression
// In nginx config
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;

// In Apache .htaccess
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/json
</IfModule>

// Response caching headers
return response()
    ->json($data)
    ->header('Cache-Control', 'public, max-age=3600')
    ->header('ETag', md5(json_encode($data)));
```

### 5. Lazy Loading & Chunking

```php
// ❌ Bad: Load all records
$users = User::all(); // Memory overflow with large datasets

// ✅ Good: Chunking
User::chunk(100, function ($users) {
    foreach ($users as $user) {
        $this->processUser($user);
    }
});

// ✅ Better: Lazy loading (Generator)
User::lazy()->each(function ($user) {
    $this->processUser($user);
});

// ✅ Best: Cursor (most memory efficient)
foreach (User::cursor() as $user) {
    $this->processUser($user);
}

// Lazy eager loading
$users = User::all();
$users->load('posts'); // Load relationships after initial query
```

### 6. Queue Long Operations

```php
// ❌ Bad: Process immediately
public function store(Request $request)
{
    $user = User::create($request->validated());

    // These slow down response
    Mail::to($user)->send(new WelcomeEmail());
    $this->generatePDF($user);
    $this->processImages($user);

    return response()->json($user);
}

// ✅ Good: Queue background jobs
public function store(Request $request)
{
    $user = User::create($request->validated());

    // Fast response, jobs process in background
    SendWelcomeEmail::dispatch($user);
    GenerateUserPDF::dispatch($user);
    ProcessUserImages::dispatch($user);

    return response()->json($user, 201);
}

// Job with retry and timeout
class ProcessOrder implements ShouldQueue
{
    public $tries = 3;
    public $timeout = 120;
    public $backoff = [30, 60, 120];

    public function handle()
    {
        // Process order
    }
}
```

### 7. OPcache Configuration

```ini
; php.ini
opcache.enable=1
opcache.memory_consumption=256
opcache.interned_strings_buffer=16
opcache.max_accelerated_files=10000
opcache.revalidate_freq=0
opcache.validate_timestamps=0  ; In production only
opcache.fast_shutdown=1
```

---

## Frontend Performance (React)

### 1. Component Optimization

```typescript
// ❌ Bad: Unnecessary re-renders
function UserList({ users }) {
    return users.map(user => (
        <UserCard key={user.id} user={user} />
    ));
}

// ✅ Good: Memoized component
const UserCard = React.memo(({ user }) => {
    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.user.id === nextProps.user.id;
});

// ✅ useMemo for expensive calculations
function Dashboard({ data }) {
    const statistics = useMemo(() => {
        console.log('Calculating statistics...');
        return {
            total: data.reduce((sum, item) => sum + item.value, 0),
            average: data.length > 0 ? data.reduce((sum, item) => sum + item.value, 0) / data.length : 0,
            max: Math.max(...data.map(item => item.value)),
        };
    }, [data]);

    return <div>Total: {statistics.total}</div>;
}

// ✅ useCallback for stable functions
function Parent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('Clicked');
    }, []); // Stable reference

    return <ExpensiveChild onClick={handleClick} />;
}

const ExpensiveChild = React.memo(({ onClick }) => {
    console.log('Child rendered');
    return <button onClick={onClick}>Click</button>;
});
```

### 2. Code Splitting

```typescript
// Route-based splitting
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Suspense>
    );
}

// Component-based splitting
const HeavyChart = lazy(() => import('./components/HeavyChart'));

function Analytics() {
    const [showChart, setShowChart] = useState(false);

    return (
        <div>
            <button onClick={() => setShowChart(true)}>
                Show Chart
            </button>

            {showChart && (
                <Suspense fallback={<div>Loading chart...</div>}>
                    <HeavyChart />
                </Suspense>
            )}
        </div>
    );
}

// Dynamic imports
async function handleExport() {
    const { exportToExcel } = await import('./utils/export');
    exportToExcel(data);
}
```

### 3. Virtual Scrolling

```typescript
// For long lists, only render visible items
import { FixedSizeList } from 'react-window';

function VirtualUserList({ users }) {
    const Row = ({ index, style }) => (
        <div style={style} className="user-row">
            {users[index].name}
        </div>
    );

    return (
        <FixedSizeList
            height={600}
            itemCount={users.length}
            itemSize={50}
            width="100%"
        >
            {Row}
        </FixedSizeList>
    );
}

// Variable size list
import { VariableSizeList } from 'react-window';

function DynamicList({ items }) {
    const getItemSize = (index) => items[index].height;

    return (
        <VariableSizeList
            height={600}
            itemCount={items.length}
            itemSize={getItemSize}
            width="100%"
        >
            {Row}
        </VariableSizeList>
    );
}
```

### 4. Image Optimization

```typescript
// Lazy loading images
function LazyImage({ src, alt }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={imgRef}
            src={isLoaded ? src : '/placeholder.jpg'}
            alt={alt}
            loading="lazy"
        />
    );
}

// Responsive images
function ResponsiveImage({ src, alt }) {
    return (
        <picture>
            <source
                media="(min-width: 1200px)"
                srcSet={`${src}-large.webp`}
                type="image/webp"
            />
            <source
                media="(min-width: 768px)"
                srcSet={`${src}-medium.webp`}
                type="image/webp"
            />
            <source
                srcSet={`${src}-small.webp`}
                type="image/webp"
            />
            <img src={`${src}.jpg`} alt={alt} />
        </picture>
    );
}
```

### 5. Debouncing & Throttling

```typescript
// Debounce hook
function useDebounce<T>(value: T, delay: number = 500): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}

// Usage: Search with debounce
function SearchComponent() {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 300);

    useEffect(() => {
        if (debouncedSearch) {
            fetchResults(debouncedSearch);
        }
    }, [debouncedSearch]);

    return (
        <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
        />
    );
}

// Throttle hook
function useThrottle<T>(value: T, interval: number = 500): T {
    const [throttledValue, setThrottledValue] = useState<T>(value);
    const lastRan = useRef(Date.now());

    useEffect(() => {
        const handler = setTimeout(() => {
            if (Date.now() - lastRan.current >= interval) {
                setThrottledValue(value);
                lastRan.current = Date.now();
            }
        }, interval - (Date.now() - lastRan.current));

        return () => clearTimeout(handler);
    }, [value, interval]);

    return throttledValue;
}
```

---

## Database Optimization

### 1. Index Strategy

```sql
-- Analyze query patterns first
EXPLAIN SELECT * FROM posts WHERE user_id = 123 AND status = 'published';

-- Add appropriate indexes
CREATE INDEX idx_posts_user_status ON posts(user_id, status);
CREATE INDEX idx_posts_created ON posts(created_at DESC);

-- Composite index order matters (most selective first)
CREATE INDEX idx_posts_search ON posts(status, published_at, user_id);

-- Full-text search
CREATE FULLTEXT INDEX idx_posts_fulltext ON posts(title, content);

-- Remove unused indexes (they slow down writes)
DROP INDEX unused_index ON posts;

-- Check index usage
SELECT * FROM sys.schema_unused_indexes;
```

### 2. Query Optimization

```php
// ❌ Bad: Select all columns
$users = DB::table('users')->get();

// ✅ Good: Select only needed columns
$users = DB::table('users')->select('id', 'name', 'email')->get();

// ❌ Bad: Multiple separate queries
$user = User::find($id);
$posts = Post::where('user_id', $id)->get();
$comments = Comment::where('user_id', $id)->get();

// ✅ Good: Single query with relationships
$user = User::with(['posts', 'comments'])->find($id);

// ❌ Bad: COUNT queries in loop
foreach ($users as $user) {
    $postsCount = $user->posts()->count(); // N queries
}

// ✅ Good: Eager load counts
$users = User::withCount('posts')->get();
foreach ($users as $user) {
    echo $user->posts_count; // No extra queries
}

// Subquery for complex aggregations
$users = User::select('users.*')
    ->selectSub(function ($query) {
        $query->from('posts')
            ->whereColumn('posts.user_id', 'users.id')
            ->selectRaw('COUNT(*)');
    }, 'posts_count')
    ->get();
```

### 3. Database Connection Pooling

```php
// config/database.php
'mysql' => [
    'driver' => 'mysql',
    'host' => env('DB_HOST', '127.0.0.1'),
    'port' => env('DB_PORT', '3306'),
    'database' => env('DB_DATABASE', 'forge'),
    'username' => env('DB_USERNAME', 'forge'),
    'password' => env('DB_PASSWORD', ''),
    'unix_socket' => env('DB_SOCKET', ''),
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
    'prefix_indexes' => true,
    'strict' => true,
    'engine' => null,
    'options' => extension_loaded('pdo_mysql') ? array_filter([
        PDO::MYSQL_ATTR_SSL_CA => env('MYSQL_ATTR_SSL_CA'),
        PDO::ATTR_PERSISTENT => true, // Connection pooling
        PDO::ATTR_TIMEOUT => 3,
    ]) : [],
],
```

---

## Caching Strategies

### Multi-Layer Caching

```
Browser Cache
    ↓
CDN Cache
    ↓
Application Cache (Redis/Memcached)
    ↓
Query Cache
    ↓
Database
```

### Implementation

```php
// 1. Browser cache (HTTP headers)
return response($data)
    ->header('Cache-Control', 'public, max-age=3600')
    ->header('ETag', $etag);

// 2. Application cache
Cache::remember('posts.popular', 3600, function () {
    return Post::where('views', '>', 1000)
        ->with('author')
        ->get();
});

// 3. Fragment caching in views
@cache('sidebar.popular-posts', now()->addHour())
    <!-- Expensive view fragment -->
@endcache

// 4. Model caching
class Post extends Model
{
    protected static function booted()
    {
        static::created(function ($post) {
            Cache::forget("post.{$post->id}");
        });

        static::updated(function ($post) {
            Cache::forget("post.{$post->id}");
        });
    }

    public static function findCached($id)
    {
        return Cache::remember("post.{$id}", 3600, function () use ($id) {
            return static::find($id);
        });
    }
}

// 5. Cache tags
Cache::tags(['posts', 'featured'])->put('posts.featured', $posts, 3600);
Cache::tags(['posts'])->flush(); // Clear all post caches
```

---

## Asset Optimization

### 1. Build Optimization

```javascript
// vite.config.js
export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom"],
                    utils: ["lodash", "date-fns"],
                },
            },
        },
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
});
```

### 2. Image Optimization

```bash
# Install image optimization tools
npm install -D imagemin imagemin-webp imagemin-mozjpeg imagemin-pngquant

# Optimize images in build process
# vite-plugin-imagemin
```

### 3. Font Optimization

```css
/* Use font-display: swap */
@font-face {
    font-family: 'CustomFont';
    src: url('/fonts/custom.woff2') format('woff2');
    font-display: swap;
}

/* Preload critical fonts */
<link rel="preload" href="/fonts/custom.woff2" as="font" type="font/woff2" crossorigin>
```

---

## Monitoring & Profiling

### Laravel Telescope

```bash
composer require laravel/telescope
php artisan telescope:install
php artisan migrate
```

### Application Performance Monitoring

```php
// New Relic
// Install extension and configure

// Sentry Performance
\Sentry\init([
    'dsn' => env('SENTRY_DSN'),
    'traces_sample_rate' => 0.2,
]);

// Custom timing
$startTime = microtime(true);
// ... operation ...
$duration = microtime(true) - $startTime;
Log::info('Operation took ' . $duration . 's');
```

---

**Next**: [Security Practices →](./07_SECURITY_PRACTICES.md)
