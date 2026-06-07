# 📱 DAY 29: QUICK REFERENCE GUIDE

> **Fast lookup cheat sheet for mobile development patterns - Perfect for interviews!**

---

## 📋 Table of Contents

- [Architecture Patterns](#architecture-patterns)
- [Reactive Programming](#reactive-programming)
- [Networking](#networking)
- [Performance](#performance)
- [Security](#security)
- [Testing](#testing)
- [Complexity Cheat Sheet](#complexity-cheat-sheet)
- [Decision Guides](#decision-guides)
- [Common Pitfalls](#common-pitfalls)

---

## 🏗️ Architecture Patterns

### MVVM (Model-View-ViewModel)

**When to Use:** Data-driven UI, Android/iOS standard
**Pattern:**
```java
Model (Data) → ViewModel (Logic) → View (UI)
           ← LiveData/Observable ←
```

**Quick Template:**
```java
// ViewModel
class UserViewModel {
    LiveData<User> user = new LiveData<>();
    
    void loadUser(String id) {
        repository.getUser(id)
            .thenAccept(u -> user.setValue(u));
    }
}

// View
viewModel.user.observe(this, user -> {
    nameText.setText(user.getName());
});
```

**Pros:** Testable, lifecycle-aware, clean separation
**Cons:** Boilerplate, learning curve

---

### MVI (Model-View-Intent)

**When to Use:** Complex state, unidirectional flow needed
**Pattern:**
```java
Intent → Model (State) → View
  ↑←←←←←←←←←←←←←←←←←←←←←←↓
  (User Action)  (Render)
```

**Quick Template:**
```java
// Intent
sealed interface UserIntent {
    class Load implements UserIntent {}
    class Update implements UserIntent { String name; }
}

// State (immutable)
class UserState {
    final User user;
    final boolean loading;
    final String error;
}

// Reducer
UserState reduce(UserState state, UserIntent intent) {
    if (intent instanceof Load) {
        return new UserState(null, true, null);
    }
    // ...
}
```

**Pros:** Predictable, time-travel debugging, testable
**Cons:** Verbose, immutability overhead

---

### Clean Architecture

**When to Use:** Large apps, team collaboration, long-term maintenance

**Layers (Dependency Rule: Inner → Outer only):**
```
┌─────────────────────────────────────┐
│  Frameworks & Drivers (UI, DB, Web) │ ← Outermost
├─────────────────────────────────────┤
│  Interface Adapters (Presenters)    │
├─────────────────────────────────────┤
│  Use Cases (Business Logic)         │
├─────────────────────────────────────┤
│  Entities (Core Business Objects)   │ ← Innermost
└─────────────────────────────────────┘
```

**Quick Template:**
```java
// Entity
class User {
    String id, name, email;
}

// Use Case
class GetUserUseCase {
    execute(String id) {
        return repository.findById(id);
    }
}

// Repository Interface (in Use Case layer)
interface UserRepository {
    User findById(String id);
}

// Repository Implementation (in Framework layer)
class ApiUserRepository implements UserRepository {
    User findById(String id) {
        return api.getUser(id);
    }
}
```

**Pros:** Testable, framework-independent, maintainable
**Cons:** Boilerplate, initial complexity

---

### Dependency Injection

**When to Use:** Always (for testable code)

**Types:**
```java
// 1. Constructor Injection (preferred)
class Service {
    Service(Logger logger, NetworkClient client) {
        this.logger = logger;
        this.client = client;
    }
}

// 2. Setter Injection
class Service {
    void setLogger(Logger logger) { ... }
}

// 3. Interface Injection
interface LoggerAware {
    void injectLogger(Logger logger);
}
```

**DI Container:**
```java
Container container = new Container();
container.registerSingleton(Logger.class, new ConsoleLogger());
container.register(Service.class, Service::new);

Service service = container.resolve(Service.class);
```

---

## ⚡ Reactive Programming

### Observable Operators

| Operator | Use Case | Example |
|----------|----------|---------|
| `map` | Transform each item | `map(x -> x * 2)` |
| `filter` | Remove items | `filter(x -> x > 5)` |
| `flatMap` | Nested observables | `flatMap(id -> getUser(id))` |
| `take(n)` | Limit to n items | `take(5)` |
| `skip(n)` | Skip first n items | `skip(2)` |
| `distinct` | Remove duplicates | `distinct()` |
| `debounce` | Wait for quiet period | `debounce(300ms)` |
| `throttle` | Rate limit | `throttle(1s)` |

**Quick Template:**
```java
Observable.from(1, 2, 3, 4, 5)
    .map(x -> x * 2)        // 2, 4, 6, 8, 10
    .filter(x -> x > 5)     // 6, 8, 10
    .take(2)                // 6, 8
    .subscribe(System.out::println);
```

---

### Subject Types

| Type | Behavior | Use Case |
|------|----------|----------|
| **PublishSubject** | New subscribers miss previous | Event bus, real-time updates |
| **BehaviorSubject** | New subscribers get latest value | Current state (e.g., user) |
| **ReplaySubject** | New subscribers get history | Analytics, debugging |

**Quick Template:**
```java
// BehaviorSubject (most common)
BehaviorSubject<User> currentUser = new BehaviorSubject<>(null);

// Emit value
currentUser.onNext(new User("John"));

// Subscribe (gets latest immediately)
currentUser.subscribe(user -> updateUI(user));
```

---

### Redux Pattern

**Quick Template:**
```java
// 1. Define State
class AppState {
    final int counter;
    final List<Todo> todos;
}

// 2. Define Actions
sealed interface Action {
    class Increment implements Action {}
    class AddTodo implements Action { String text; }
}

// 3. Pure Reducer
AppState reduce(AppState state, Action action) {
    if (action instanceof Increment) {
        return new AppState(state.counter + 1, state.todos);
    }
    // ...
}

// 4. Create Store
Store<AppState, Action> store = new Store<>(initialState, this::reduce);

// 5. Dispatch & Subscribe
store.dispatch(new Action.Increment());
store.subscribe(state -> updateUI(state));
```

---

## 🌐 Networking

### REST API Client

**Quick Template:**
```java
HttpRequest request = new HttpRequest.Builder()
    .url("/api/users")
    .method("GET")
    .header("Authorization", "Bearer " + token)
    .queryParam("page", "1")
    .queryParam("limit", "20")
    .build();

CompletableFuture<HttpResponse> response = client.execute(request);
response.thenAccept(res -> {
    if (res.getStatusCode() == 200) {
        List<User> users = parseJson(res.getBody());
    }
});
```

---

### Caching Strategies

| Strategy | When to Use | Implementation |
|----------|-------------|----------------|
| **Cache-First** | Offline support, static data | Check cache → fallback to network |
| **Network-First** | Always fresh data | Try network → fallback to cache |
| **Stale-While-Revalidate** | Fast UX + fresh data | Return cache immediately, revalidate in background |

**Quick Template:**
```java
// Cache-First
Optional<Data> cached = cache.get(key);
if (cached.isPresent() && !cached.get().isExpired()) {
    return CompletableFuture.completedFuture(cached.get());
}
return fetchFromNetwork(url).thenApply(data -> {
    cache.put(key, data);
    return data;
});

// Stale-While-Revalidate
Optional<Data> cached = cache.get(key);
if (cached.isPresent()) {
    // Return immediately
    CompletableFuture<Data> result = CompletableFuture.completedFuture(cached.get());
    
    // Revalidate in background
    if (cached.get().isStale()) {
        fetchFromNetwork(url).thenAccept(fresh -> cache.put(key, fresh));
    }
    
    return result;
}
return fetchFromNetwork(url);
```

---

### Retry with Exponential Backoff

**Quick Template:**
```java
RetryPolicy policy = new RetryPolicy(
    maxRetries: 3,
    initialDelay: 1000,
    maxDelay: 10000,
    multiplier: 2.0
);

// Delays: 1s, 2s, 4s, 8s (capped at 10s)

CompletableFuture<Data> retryableRequest(String url, int attempt) {
    return client.get(url).exceptionally(error -> {
        if (attempt < policy.maxRetries && isRetryable(error)) {
            long delay = Math.min(
                policy.initialDelay * Math.pow(policy.multiplier, attempt),
                policy.maxDelay
            );
            return CompletableFuture
                .delayedExecutor(delay, MILLISECONDS)
                .execute(() -> retryableRequest(url, attempt + 1));
        }
        throw error;
    });
}
```

---

### Offline-First

**Quick Template:**
```java
class OfflineFirstClient {
    private Queue<PendingOperation> queue = new ConcurrentLinkedQueue<>();
    private volatile boolean isOnline = true;
    
    void save(User user) {
        // 1. Save locally (immediate)
        localDB.save(user);
        
        // 2. Queue network operation
        queue.add(new PendingOperation("POST", "/users", user));
        
        // 3. Sync if online
        if (isOnline) {
            syncQueue();
        }
    }
    
    void syncQueue() {
        while (!queue.isEmpty() && isOnline) {
            PendingOperation op = queue.poll();
            try {
                api.execute(op);
            } catch (NetworkException e) {
                queue.add(op); // Re-queue on failure
                isOnline = false;
                break;
            }
        }
    }
}
```

---

## ⚡ Performance

### LRU Cache

**Quick Template:**
```java
class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private final int maxSize;
    
    LRUCache(int maxSize) {
        super(16, 0.75f, true); // accessOrder = true
        this.maxSize = maxSize;
    }
    
    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > maxSize;
    }
}

// Usage
LRUCache<String, byte[]> imageCache = new LRUCache<>(100);
imageCache.put(url, imageData); // Auto-evicts LRU when full
```

**Complexity:** O(1) get, O(1) put

---

### Object Pool

**Quick Template:**
```java
class ObjectPool<T> {
    private final Queue<T> pool = new ConcurrentLinkedQueue<>();
    private final Supplier<T> factory;
    private final Consumer<T> reset;
    
    T acquire() {
        T obj = pool.poll();
        return obj != null ? obj : factory.get();
    }
    
    void release(T obj) {
        reset.accept(obj);
        pool.offer(obj);
    }
}

// Usage
ObjectPool<Bitmap> bitmapPool = new ObjectPool<>(
    factory: () -> Bitmap.createBitmap(100, 100, Config.ARGB_8888),
    reset: bitmap -> bitmap.eraseColor(Color.TRANSPARENT)
);

Bitmap bitmap = bitmapPool.acquire();
// Use bitmap
bitmapPool.release(bitmap);
```

---

### Pagination

**Quick Template:**
```java
class PaginatedList<T> {
    private int currentPage = 0;
    private final int pageSize = 20;
    private boolean hasMore = true;
    private boolean isLoading = false;
    
    CompletableFuture<List<T>> loadNextPage() {
        if (!hasMore || isLoading) {
            return CompletableFuture.completedFuture(Collections.emptyList());
        }
        
        isLoading = true;
        int start = currentPage * pageSize;
        
        return dataSource.loadPage(start, pageSize).thenApply(page -> {
            currentPage++;
            hasMore = page.size() == pageSize;
            isLoading = false;
            return page;
        });
    }
}

// With prefetching
void onScroll(int position, int totalLoaded) {
    if (position / (double)totalLoaded > 0.8) {
        loadNextPage(); // Prefetch when 80% scrolled
    }
}
```

---

### Memory Management

**Techniques:**

1. **Object Pooling** (above)
2. **Weak References** (GC-friendly cache)
```java
Map<String, WeakReference<LargeObject>> cache = new ConcurrentHashMap<>();

void put(String key, LargeObject obj) {
    cache.put(key, new WeakReference<>(obj));
}

Optional<LargeObject> get(String key) {
    WeakReference<LargeObject> ref = cache.get(key);
    return ref != null ? Optional.ofNullable(ref.get()) : Optional.empty();
}
```

3. **Bitmap Recycling** (Android)
```java
bitmap.recycle(); // Release native memory
bitmap = null;
```

4. **Memory Monitoring**
```java
Runtime runtime = Runtime.getRuntime();
long usedMemory = runtime.totalMemory() - runtime.freeMemory();
long maxMemory = runtime.maxMemory();

if (usedMemory / (double)maxMemory > 0.9) {
    // Low memory, clear caches
    imageCache.clear();
}
```

---

### Battery Optimization

**Techniques:**

1. **Task Batching** (reduce wake-ups)
```java
scheduler.scheduleAtFixedRate(
    () -> processBatchedTasks(),
    15, 15, MINUTES
);
```

2. **Network Batching** (reduce radio usage)
```java
class NetworkBatcher {
    private List<Request> batch = new ArrayList<>();
    
    void addRequest(Request req) {
        batch.add(req);
        if (batch.size() >= 10 || timeSinceLastBatch > 5_SECONDS) {
            sendBatch();
        }
    }
}
```

3. **Doze Mode Optimization** (Android)
- Use WorkManager for background tasks
- Use Firebase Cloud Messaging for push
- Use JobScheduler for periodic tasks

---

### List Virtualization

**Quick Template:**
```java
class VirtualList<T> {
    private List<T> allItems;
    private int viewportHeight = 1000;
    private int itemHeight = 100;
    
    List<T> getVisibleItems(int scrollPosition) {
        int firstVisible = scrollPosition / itemHeight;
        int visibleCount = viewportHeight / itemHeight + 2; // +2 for buffer
        int lastVisible = Math.min(firstVisible + visibleCount, allItems.size());
        
        return allItems.subList(firstVisible, lastVisible);
    }
}

// RecyclerView Pattern
class ViewHolderPool {
    private Queue<ViewHolder> pool = new ArrayDeque<>(10);
    
    ViewHolder getViewHolder() {
        ViewHolder holder = pool.poll();
        return holder != null ? holder : new ViewHolder();
    }
    
    void recycleViewHolder(ViewHolder holder) {
        holder.reset();
        pool.offer(holder);
    }
}
```

**Complexity:** O(v) memory where v = visible items (not O(n) total items)

---

## 🔒 Security

### AES Encryption

**Quick Template:**
```java
// Encrypt
SecretKey key = KeyGenerator.getInstance("AES").generateKey(); // 256-bit
byte[] iv = new byte[16];
new SecureRandom().nextBytes(iv);

Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
cipher.init(Cipher.ENCRYPT_MODE, key, new IvParameterSpec(iv));
byte[] encrypted = cipher.doFinal(plaintext.getBytes());

// Decrypt
cipher.init(Cipher.DECRYPT_MODE, key, new IvParameterSpec(iv));
byte[] decrypted = cipher.doFinal(encrypted);
```

**Best Practices:**
- Use AES-256 (not AES-128)
- Use CBC or GCM mode (not ECB)
- Generate random IV for each encryption
- Store key in Android Keystore / iOS Keychain

---

### JWT Authentication

**Quick Template:**
```java
// Create token
Map<String, Object> claims = Map.of(
    "userId", "123",
    "role", "admin",
    "exp", System.currentTimeMillis() + 3600_000 // 1 hour
);
String header = base64("{\"alg\":\"HS256\",\"typ\":\"JWT\"}");
String payload = base64(toJson(claims));
String signature = hmacSHA256(header + "." + payload, secretKey);
String token = header + "." + payload + "." + signature;

// Validate token
String[] parts = token.split("\\.");
String receivedSignature = parts[2];
String expectedSignature = hmacSHA256(parts[0] + "." + parts[1], secretKey);

if (!receivedSignature.equals(expectedSignature)) {
    throw new SecurityException("Invalid signature");
}

Map<String, Object> claims = parseJson(base64Decode(parts[1]));
long exp = (long) claims.get("exp");
if (System.currentTimeMillis() > exp) {
    throw new SecurityException("Token expired");
}
```

---

### OAuth 2.0 Flow

**Quick Template:**
```java
// 1. Get authorization URL
String authUrl = "https://provider.com/oauth/authorize" +
    "?client_id=" + clientId +
    "&redirect_uri=" + redirectUri +
    "&scope=read+write" +
    "&response_type=code";

// 2. User authorizes, receive code
String authCode = "received_from_redirect";

// 3. Exchange code for token
HttpRequest tokenRequest = new HttpRequest.Builder()
    .url("https://provider.com/oauth/token")
    .method("POST")
    .body("grant_type=authorization_code" +
          "&code=" + authCode +
          "&client_id=" + clientId +
          "&client_secret=" + clientSecret)
    .build();

OAuthToken token = client.execute(tokenRequest)
    .thenApply(response -> parseToken(response.getBody()))
    .join();

// 4. Use token
HttpRequest apiRequest = new HttpRequest.Builder()
    .url("/api/data")
    .header("Authorization", "Bearer " + token.getAccessToken())
    .build();

// 5. Refresh token
if (token.isExpired()) {
    HttpRequest refreshRequest = new HttpRequest.Builder()
        .url("https://provider.com/oauth/token")
        .method("POST")
        .body("grant_type=refresh_token" +
              "&refresh_token=" + token.getRefreshToken() +
              "&client_id=" + clientId)
        .build();
}
```

---

## 🧪 Testing

### Unit Testing

**Quick Template:**
```java
class CalculatorTest {
    private Calculator calculator;
    
    @BeforeEach
    void setup() {
        calculator = new Calculator();
    }
    
    @Test
    void testAdd() {
        assertEquals(5, calculator.add(2, 3));
        assertEquals(0, calculator.add(-5, 5));
    }
    
    @Test
    void testDivideByZero() {
        assertThrows(ArithmeticException.class, 
            () -> calculator.divide(5, 0));
    }
    
    @Test
    void testAsync() {
        CompletableFuture<Integer> result = calculator.addAsync(2, 3);
        assertEquals(5, result.join());
    }
}
```

---

### Mocking

**Quick Template:**
```java
// Mock Repository
class MockUserRepository implements UserRepository {
    private List<User> users = new ArrayList<>();
    private List<String> methodCalls = new ArrayList<>();
    
    @Override
    public User findById(String id) {
        methodCalls.add("findById:" + id);
        return users.stream()
            .filter(u -> u.getId().equals(id))
            .findFirst()
            .orElse(null);
    }
    
    void verifyCalled(String method, String arg) {
        assertTrue(methodCalls.contains(method + ":" + arg));
    }
    
    void verifyCallCount(String method, int count) {
        long actual = methodCalls.stream()
            .filter(call -> call.startsWith(method))
            .count();
        assertEquals(count, actual);
    }
}

// Test
@Test
void testServiceUsesRepository() {
    MockUserRepository repo = new MockUserRepository();
    repo.users.add(new User("123", "John"));
    
    UserService service = new UserService(repo);
    User user = service.getUser("123");
    
    assertEquals("John", user.getName());
    repo.verifyCalled("findById", "123");
}
```

---

## 📊 Complexity Cheat Sheet

| Data Structure / Algorithm | Get | Put | Delete | Space | Use Case |
|----------------------------|-----|-----|--------|-------|----------|
| **LRU Cache** | O(1) | O(1) | O(1) | O(n) | Image caching |
| **Object Pool** | O(1) | O(1) | - | O(k) | Bitmap recycling |
| **Pagination** | O(p) | - | - | O(p) | Infinite scroll |
| **Virtual List** | O(v) | - | - | O(v) | Large lists (n >> v) |
| **DiffUtil** | O(n) | - | - | O(n) | List updates |
| **BehaviorSubject** | O(1) | O(m) | O(m) | O(m) | State broadcasting |
| **Redux Store** | O(1) | O(n) | - | O(1) | State management |

**Legend:**
- n = total items
- p = page size
- v = visible items
- k = pool size
- m = number of subscribers

---

## 🧭 Decision Guides

### When to Use Which Architecture?

| Pattern | Use When | Avoid When |
|---------|----------|------------|
| **MVVM** | Android/iOS standard, data-driven UI | Simple views, no state |
| **MVP** | Legacy Android, need testable presenters | Modern apps (use MVVM) |
| **MVI** | Complex state, predictability needed | Simple CRUD apps |
| **Clean Architecture** | Large apps, team > 5, long-term | Prototypes, MVPs |

---

### When to Use Which Cache Strategy?

| Strategy | Use When | Example |
|----------|----------|---------|
| **Cache-First** | Offline support, static data | User profile, settings |
| **Network-First** | Always fresh, live data | Stock prices, news feed |
| **Stale-While-Revalidate** | Fast UX + fresh data | Social media feed |

---

### When to Use Which State Management?

| Pattern | Use When | Avoid When |
|---------|----------|------------|
| **LiveData** | Android, simple state | Cross-platform, complex flow |
| **RxJava/Combine** | Async, complex transformations | Simple UI updates |
| **Redux** | Predictable state, time-travel debugging | Simple apps, learning curve |

---

## ⚠️ Common Pitfalls

### 1. Memory Leaks

**Problem:**
```java
// ❌ Static reference to Activity
static Context context;

// ❌ Anonymous inner class
button.setOnClickListener(new OnClickListener() {
    public void onClick(View v) {
        // Holds reference to Activity
    }
});

// ❌ Thread with Activity reference
new Thread(() -> {
    // Activity can't be GC'd while thread runs
}).start();
```

**Solution:**
```java
// ✅ Use WeakReference
WeakReference<Context> contextRef = new WeakReference<>(context);

// ✅ Use static inner class
static class MyClickListener implements OnClickListener {
    WeakReference<Activity> activityRef;
    
    public void onClick(View v) {
        Activity activity = activityRef.get();
        if (activity != null) {
            // ...
        }
    }
}

// ✅ Cancel threads in onDestroy
@Override
protected void onDestroy() {
    thread.interrupt();
    super.onDestroy();
}
```

---

### 2. Main Thread Blocking

**Problem:**
```java
// ❌ Network on main thread
User user = api.getUser("123").join(); // Blocks UI!
```

**Solution:**
```java
// ✅ Use async
api.getUser("123")
    .thenAcceptAsync(user -> {
        runOnUiThread(() -> updateUI(user));
    });

// ✅ Or use coroutines/async-await
```

---

### 3. N+1 Query Problem

**Problem:**
```java
// ❌ N+1 queries
List<User> users = getUsers(); // 1 query
for (User user : users) {
    List<Post> posts = getPosts(user.getId()); // N queries
}
```

**Solution:**
```java
// ✅ Batch query
List<User> users = getUsers();
List<String> userIds = users.stream().map(User::getId).collect(toList());
Map<String, List<Post>> postsByUser = getPostsByUserIds(userIds); // 1 query
```

---

### 4. Improper Error Handling

**Problem:**
```java
// ❌ Swallowing exceptions
try {
    api.saveUser(user);
} catch (Exception e) {
    // Silent failure
}
```

**Solution:**
```java
// ✅ Proper error handling
api.saveUser(user)
    .exceptionally(error -> {
        logger.error("Failed to save user", error);
        showError("Could not save. Please try again.");
        return null;
    });
```

---

### 5. Not Cancelling Requests

**Problem:**
```java
// ❌ Request continues after leaving screen
api.getUser("123").thenAccept(user -> updateUI(user));
// User navigates away, updateUI called on destroyed view
```

**Solution:**
```java
// ✅ Cancel on destroy
CompletableFuture<User> request = api.getUser("123");
request.thenAccept(user -> {
    if (!isDestroyed) {
        updateUI(user);
    }
});

@Override
protected void onDestroy() {
    request.cancel(true);
    super.onDestroy();
}
```

---

## 🎯 Interview Shortcuts

### MVVM in 30 Seconds
"MVVM separates UI (View) from business logic (ViewModel) using observable data (LiveData). The View observes the ViewModel, and when data changes, the UI updates automatically. It's lifecycle-aware and testable."

### MVI in 30 Seconds
"MVI uses unidirectional data flow. User actions (Intents) update immutable state (Model), which re-renders the UI (View). It's predictable, debuggable, and great for complex state management."

### Clean Architecture in 30 Seconds
"Clean Architecture separates code into layers with dependency inversion. Inner layers (Entities, Use Cases) don't depend on outer layers (Frameworks, UI). This makes the core business logic framework-independent and testable."

### Reactive Programming in 30 Seconds
"Reactive programming treats data as streams that can be transformed using operators like map, filter, flatMap. It's great for async operations, complex data transformations, and handling multiple data sources."

### Offline-First in 30 Seconds
"Offline-first always reads from local storage first for instant UX, then syncs with the server in the background. It provides resilience, faster load times, and works without internet."

---

## 📚 Quick Code Snippets

### Lazy Initialization
```java
class Singleton {
    private static volatile Singleton instance;
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

### Debounce Function
```java
class Debouncer {
    private ScheduledExecutorService executor = Executors.newSingleThreadScheduledExecutor();
    private ScheduledFuture<?> pending;
    
    void debounce(Runnable task, long delay, TimeUnit unit) {
        if (pending != null) {
            pending.cancel(false);
        }
        pending = executor.schedule(task, delay, unit);
    }
}

// Usage
debouncer.debounce(() -> search(query), 300, MILLISECONDS);
```

### Thread-Safe Counter
```java
class Counter {
    private AtomicInteger count = new AtomicInteger(0);
    
    int increment() {
        return count.incrementAndGet();
    }
    
    int get() {
        return count.get();
    }
}
```

---

**🎉 Bookmark this page for quick reference during interviews and coding!**

*Last Updated: December 3, 2025*
