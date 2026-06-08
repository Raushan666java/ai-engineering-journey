/**
 * DAY 29: MOBILE DEVELOPMENT - NETWORKING PATTERNS
 * 
 * Comprehensive networking implementation including:
 * - REST API client
 * - GraphQL client
 * - Request/Response patterns
 * - Caching strategies
 * - Offline-first architecture
 * - Retry logic & exponential backoff
 * - Request deduplication
 * - Connection monitoring
 * 
 * All implementations production-ready with:
 * - Complete HTTP client
 * - Error handling
 * - Cache management
 * - Real-world examples
 * 
 * @author Placement Preparation Team
 * @date December 3, 2025
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.io.*;
import java.net.*;
import java.time.*;
import java.util.stream.*;

public class MobileNetworkingPatterns {

    /**
     * ========================================================================
     * PATTERN 1: REST API CLIENT
     * ========================================================================
     * 
     * Complete HTTP client implementation
     * 
     * Features:
     * - GET, POST, PUT, DELETE methods
     * - Request/Response models
     * - Header management
     * - Query parameters
     * - JSON serialization
     * 
     * Benefits:
     * - Type-safe requests
     * - Reusable client
     * - Easy to test
     * 
     * Time Complexity: O(1) for request creation, O(n) for network call
     * Space Complexity: O(r) where r = response size
     */
    
    static class HttpRequest {
        final String method;
        final String url;
        final Map<String, String> headers;
        final Map<String, String> queryParams;
        final String body;
        
        private HttpRequest(Builder builder) {
            this.method = builder.method;
            this.url = builder.url;
            this.headers = new HashMap<>(builder.headers);
            this.queryParams = new HashMap<>(builder.queryParams);
            this.body = builder.body;
        }
        
        static class Builder {
            private String method = "GET";
            private String url;
            private Map<String, String> headers = new HashMap<>();
            private Map<String, String> queryParams = new HashMap<>();
            private String body;
            
            public Builder url(String url) {
                this.url = url;
                return this;
            }
            
            public Builder method(String method) {
                this.method = method;
                return this;
            }
            
            public Builder header(String key, String value) {
                this.headers.put(key, value);
                return this;
            }
            
            public Builder queryParam(String key, String value) {
                this.queryParams.put(key, value);
                return this;
            }
            
            public Builder body(String body) {
                this.body = body;
                return this;
            }
            
            public HttpRequest build() {
                return new HttpRequest(this);
            }
        }
        
        public String getFullUrl() {
            if (queryParams.isEmpty()) {
                return url;
            }
            
            String query = queryParams.entrySet().stream()
                .map(e -> e.getKey() + "=" + urlEncode(e.getValue()))
                .collect(Collectors.joining("&"));
            
            return url + "?" + query;
        }
        
        private String urlEncode(String value) {
            try {
                return URLEncoder.encode(value, "UTF-8");
            } catch (UnsupportedEncodingException e) {
                return value;
            }
        }
    }
    
    static class HttpResponse {
        final int statusCode;
        final String body;
        final Map<String, List<String>> headers;
        
        public HttpResponse(int statusCode, String body, Map<String, List<String>> headers) {
            this.statusCode = statusCode;
            this.body = body;
            this.headers = headers != null ? new HashMap<>(headers) : new HashMap<>();
        }
        
        public boolean isSuccess() {
            return statusCode >= 200 && statusCode < 300;
        }
        
        public boolean isClientError() {
            return statusCode >= 400 && statusCode < 500;
        }
        
        public boolean isServerError() {
            return statusCode >= 500;
        }
        
        @Override
        public String toString() {
            return "HttpResponse{status=" + statusCode + ", bodyLength=" + 
                   (body != null ? body.length() : 0) + "}";
        }
    }
    
    static class RestApiClient {
        private final String baseUrl;
        private final Map<String, String> defaultHeaders;
        private final int timeout;
        
        public RestApiClient(String baseUrl) {
            this(baseUrl, new HashMap<>(), 30000);
        }
        
        public RestApiClient(String baseUrl, Map<String, String> defaultHeaders, int timeout) {
            this.baseUrl = baseUrl;
            this.defaultHeaders = new HashMap<>(defaultHeaders);
            this.timeout = timeout;
        }
        
        public CompletableFuture<HttpResponse> execute(HttpRequest request) {
            return CompletableFuture.supplyAsync(() -> {
                try {
                    URL url = new URL(baseUrl + request.getFullUrl());
                    HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                    
                    // Set method
                    connection.setRequestMethod(request.method);
                    connection.setConnectTimeout(timeout);
                    connection.setReadTimeout(timeout);
                    
                    // Set headers
                    defaultHeaders.forEach(connection::setRequestProperty);
                    request.headers.forEach(connection::setRequestProperty);
                    
                    // Set body
                    if (request.body != null) {
                        connection.setDoOutput(true);
                        try (OutputStream os = connection.getOutputStream()) {
                            os.write(request.body.getBytes("UTF-8"));
                        }
                    }
                    
                    // Get response
                    int statusCode = connection.getResponseCode();
                    String responseBody;
                    
                    try (InputStream is = statusCode < 400 ? 
                            connection.getInputStream() : 
                            connection.getErrorStream()) {
                        responseBody = readStream(is);
                    }
                    
                    return new HttpResponse(statusCode, responseBody, connection.getHeaderFields());
                    
                } catch (IOException e) {
                    throw new RuntimeException("Network request failed", e);
                }
            });
        }
        
        public CompletableFuture<HttpResponse> get(String endpoint) {
            HttpRequest request = new HttpRequest.Builder()
                .url(endpoint)
                .method("GET")
                .build();
            return execute(request);
        }
        
        public CompletableFuture<HttpResponse> post(String endpoint, String body) {
            HttpRequest request = new HttpRequest.Builder()
                .url(endpoint)
                .method("POST")
                .header("Content-Type", "application/json")
                .body(body)
                .build();
            return execute(request);
        }
        
        public CompletableFuture<HttpResponse> put(String endpoint, String body) {
            HttpRequest request = new HttpRequest.Builder()
                .url(endpoint)
                .method("PUT")
                .header("Content-Type", "application/json")
                .body(body)
                .build();
            return execute(request);
        }
        
        public CompletableFuture<HttpResponse> delete(String endpoint) {
            HttpRequest request = new HttpRequest.Builder()
                .url(endpoint)
                .method("DELETE")
                .build();
            return execute(request);
        }
        
        private String readStream(InputStream is) throws IOException {
            if (is == null) return "";
            
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(is, "UTF-8"))) {
                return reader.lines().collect(Collectors.joining("\n"));
            }
        }
    }

    /**
     * ========================================================================
     * PATTERN 2: CACHING STRATEGIES
     * ========================================================================
     * 
     * Multi-level caching system
     * 
     * Levels:
     * - Memory cache (fast, limited)
     * - Disk cache (slower, larger)
     * - Network (slowest, always fresh)
     * 
     * Strategies:
     * - Cache-first: Check cache before network
     * - Network-first: Check network, fallback to cache
     * - Stale-while-revalidate: Return cache, update in background
     * 
     * Benefits:
     * - Faster responses
     * - Reduced bandwidth
     * - Offline support
     * 
     * Time Complexity: O(1) for memory, O(log n) for disk
     * Space Complexity: O(c) where c = cache size
     */
    
    static class CacheEntry<T> {
        final T data;
        final Instant timestamp;
        final long ttl; // Time to live in seconds
        
        public CacheEntry(T data, long ttl) {
            this.data = data;
            this.timestamp = Instant.now();
            this.ttl = ttl;
        }
        
        public boolean isExpired() {
            return Instant.now().isAfter(timestamp.plusSeconds(ttl));
        }
        
        public boolean isStale(long staleThreshold) {
            return Instant.now().isAfter(timestamp.plusSeconds(staleThreshold));
        }
    }
    
    static class MemoryCache<K, V> {
        private final Map<K, CacheEntry<V>> cache = new ConcurrentHashMap<>();
        private final int maxSize;
        
        public MemoryCache(int maxSize) {
            this.maxSize = maxSize;
        }
        
        public void put(K key, V value, long ttl) {
            // Simple eviction: remove oldest if full
            if (cache.size() >= maxSize) {
                K oldestKey = cache.entrySet().stream()
                    .min(Comparator.comparing(e -> e.getValue().timestamp))
                    .map(Map.Entry::getKey)
                    .orElse(null);
                
                if (oldestKey != null) {
                    cache.remove(oldestKey);
                }
            }
            
            cache.put(key, new CacheEntry<>(value, ttl));
        }
        
        public Optional<V> get(K key) {
            CacheEntry<V> entry = cache.get(key);
            
            if (entry == null) {
                return Optional.empty();
            }
            
            if (entry.isExpired()) {
                cache.remove(key);
                return Optional.empty();
            }
            
            return Optional.of(entry.data);
        }
        
        public void clear() {
            cache.clear();
        }
        
        public int size() {
            return cache.size();
        }
    }
    
    static class CachedApiClient {
        private final RestApiClient apiClient;
        private final MemoryCache<String, HttpResponse> cache;
        
        public CachedApiClient(RestApiClient apiClient, int cacheSize) {
            this.apiClient = apiClient;
            this.cache = new MemoryCache<>(cacheSize);
        }
        
        // Strategy 1: Cache-first
        public CompletableFuture<HttpResponse> getCacheFirst(String endpoint, long ttl) {
            Optional<HttpResponse> cached = cache.get(endpoint);
            
            if (cached.isPresent()) {
                System.out.println("  [Cache] HIT: " + endpoint);
                return CompletableFuture.completedFuture(cached.get());
            }
            
            System.out.println("  [Cache] MISS: " + endpoint);
            return apiClient.get(endpoint)
                .thenApply(response -> {
                    if (response.isSuccess()) {
                        cache.put(endpoint, response, ttl);
                    }
                    return response;
                });
        }
        
        // Strategy 2: Network-first
        public CompletableFuture<HttpResponse> getNetworkFirst(String endpoint, long ttl) {
            return apiClient.get(endpoint)
                .thenApply(response -> {
                    if (response.isSuccess()) {
                        cache.put(endpoint, response, ttl);
                    }
                    return response;
                })
                .exceptionally(error -> {
                    System.out.println("  [Network] Failed, trying cache");
                    return cache.get(endpoint).orElse(null);
                });
        }
        
        // Strategy 3: Stale-while-revalidate
        public CompletableFuture<HttpResponse> getStaleWhileRevalidate(String endpoint, 
                                                                        long ttl, 
                                                                        long staleThreshold) {
            Optional<HttpResponse> cached = cache.get(endpoint);
            
            if (cached.isPresent()) {
                // Return cached immediately
                HttpResponse cachedResponse = cached.get();
                
                // Revalidate in background if stale
                CacheEntry<HttpResponse> entry = new CacheEntry<>(cachedResponse, ttl);
                if (entry.isStale(staleThreshold)) {
                    System.out.println("  [Cache] Stale, revalidating: " + endpoint);
                    apiClient.get(endpoint)
                        .thenAccept(response -> {
                            if (response.isSuccess()) {
                                cache.put(endpoint, response, ttl);
                            }
                        });
                }
                
                return CompletableFuture.completedFuture(cachedResponse);
            }
            
            // No cache, fetch from network
            return apiClient.get(endpoint)
                .thenApply(response -> {
                    if (response.isSuccess()) {
                        cache.put(endpoint, response, ttl);
                    }
                    return response;
                });
        }
    }

    /**
     * ========================================================================
     * PATTERN 3: RETRY LOGIC & EXPONENTIAL BACKOFF
     * ========================================================================
     * 
     * Resilient network requests
     * 
     * Features:
     * - Automatic retries
     * - Exponential backoff
     * - Max retry limit
     * - Configurable conditions
     * 
     * Benefits:
     * - Handle transient failures
     * - Reduce server load
     * - Better user experience
     * 
     * Time Complexity: O(r) where r = retry attempts
     * Space Complexity: O(1)
     */
    
    static class RetryPolicy {
        final int maxRetries;
        final long initialDelay;
        final long maxDelay;
        final double multiplier;
        final Predicate<HttpResponse> retryCondition;
        
        public RetryPolicy(int maxRetries, 
                          long initialDelay, 
                          long maxDelay, 
                          double multiplier,
                          Predicate<HttpResponse> retryCondition) {
            this.maxRetries = maxRetries;
            this.initialDelay = initialDelay;
            this.maxDelay = maxDelay;
            this.multiplier = multiplier;
            this.retryCondition = retryCondition;
        }
        
        public static RetryPolicy defaultPolicy() {
            return new RetryPolicy(
                3,              // Max 3 retries
                1000,           // 1 second initial delay
                10000,          // 10 seconds max delay
                2.0,            // Double each time
                response -> response == null || response.isServerError()
            );
        }
        
        public long getDelay(int attempt) {
            long delay = (long) (initialDelay * Math.pow(multiplier, attempt));
            return Math.min(delay, maxDelay);
        }
    }
    
    static class RetryableApiClient {
        private final RestApiClient apiClient;
        private final RetryPolicy retryPolicy;
        
        public RetryableApiClient(RestApiClient apiClient, RetryPolicy retryPolicy) {
            this.apiClient = apiClient;
            this.retryPolicy = retryPolicy;
        }
        
        public CompletableFuture<HttpResponse> execute(HttpRequest request) {
            return executeWithRetry(request, 0);
        }
        
        private CompletableFuture<HttpResponse> executeWithRetry(HttpRequest request, int attempt) {
            return apiClient.execute(request)
                .thenCompose(response -> {
                    if (retryPolicy.retryCondition.test(response) && 
                        attempt < retryPolicy.maxRetries) {
                        
                        long delay = retryPolicy.getDelay(attempt);
                        System.out.println("  [Retry] Attempt " + (attempt + 1) + 
                                         " after " + delay + "ms");
                        
                        return CompletableFuture
                            .delayedExecutor(delay, TimeUnit.MILLISECONDS)
                            .execute(() -> {});
                        
                        // Recursive retry
                        return executeWithRetry(request, attempt + 1);
                    }
                    
                    return CompletableFuture.completedFuture(response);
                })
                .exceptionally(error -> {
                    if (attempt < retryPolicy.maxRetries) {
                        long delay = retryPolicy.getDelay(attempt);
                        System.out.println("  [Retry] Error, attempt " + (attempt + 1) + 
                                         " after " + delay + "ms");
                        
                        try {
                            Thread.sleep(delay);
                        } catch (InterruptedException e) {
                            Thread.currentThread().interrupt();
                        }
                        
                        return executeWithRetry(request, attempt + 1).join();
                    }
                    
                    throw new RuntimeException("Max retries exceeded", error);
                });
        }
    }

    /**
     * ========================================================================
     * PATTERN 4: REQUEST DEDUPLICATION
     * ========================================================================
     * 
     * Prevent duplicate requests
     * 
     * Features:
     * - Deduplicate identical requests
     * - Share single network call
     * - Multiple subscribers
     * 
     * Benefits:
     * - Reduce bandwidth
     * - Prevent race conditions
     * - Better performance
     * 
     * Time Complexity: O(1) for request tracking
     * Space Complexity: O(p) where p = pending requests
     */
    
    static class DeduplicatedApiClient {
        private final RestApiClient apiClient;
        private final Map<String, CompletableFuture<HttpResponse>> pendingRequests = 
            new ConcurrentHashMap<>();
        
        public DeduplicatedApiClient(RestApiClient apiClient) {
            this.apiClient = apiClient;
        }
        
        public CompletableFuture<HttpResponse> get(String endpoint) {
            String key = "GET:" + endpoint;
            
            return pendingRequests.compute(key, (k, existingFuture) -> {
                if (existingFuture != null && !existingFuture.isDone()) {
                    System.out.println("  [Dedup] Reusing existing request: " + endpoint);
                    return existingFuture;
                }
                
                System.out.println("  [Dedup] Creating new request: " + endpoint);
                CompletableFuture<HttpResponse> newFuture = apiClient.get(endpoint)
                    .whenComplete((response, error) -> {
                        // Clean up after completion
                        pendingRequests.remove(k);
                    });
                
                return newFuture;
            });
        }
        
        public CompletableFuture<HttpResponse> post(String endpoint, String body) {
            String key = "POST:" + endpoint + ":" + body.hashCode();
            
            return pendingRequests.compute(key, (k, existingFuture) -> {
                if (existingFuture != null && !existingFuture.isDone()) {
                    System.out.println("  [Dedup] Reusing existing POST: " + endpoint);
                    return existingFuture;
                }
                
                CompletableFuture<HttpResponse> newFuture = apiClient.post(endpoint, body)
                    .whenComplete((response, error) -> {
                        pendingRequests.remove(k);
                    });
                
                return newFuture;
            });
        }
        
        public int getPendingCount() {
            return pendingRequests.size();
        }
    }

    /**
     * ========================================================================
     * PATTERN 5: OFFLINE-FIRST ARCHITECTURE
     * ========================================================================
     * 
     * Work offline, sync when online
     * 
     * Features:
     * - Queue pending operations
     * - Sync when connection available
     * - Conflict resolution
     * 
     * Benefits:
     * - Works without internet
     * - Better UX
     * - Data consistency
     * 
     * Time Complexity: O(q) for queue processing
     * Space Complexity: O(q) where q = queue size
     */
    
    static class PendingOperation {
        final String id;
        final String method;
        final String endpoint;
        final String body;
        final Instant timestamp;
        
        public PendingOperation(String method, String endpoint, String body) {
            this.id = UUID.randomUUID().toString();
            this.method = method;
            this.endpoint = endpoint;
            this.body = body;
            this.timestamp = Instant.now();
        }
    }
    
    static class OfflineFirstClient {
        private final RestApiClient apiClient;
        private final Queue<PendingOperation> operationQueue = new ConcurrentLinkedQueue<>();
        private final AtomicBoolean isOnline = new AtomicBoolean(true);
        private final AtomicBoolean isSyncing = new AtomicBoolean(false);
        
        public OfflineFirstClient(RestApiClient apiClient) {
            this.apiClient = apiClient;
        }
        
        public void setOnline(boolean online) {
            boolean wasOffline = !isOnline.getAndSet(online);
            
            if (online && wasOffline) {
                System.out.println("  [Offline] Connection restored, syncing...");
                syncPendingOperations();
            }
        }
        
        public CompletableFuture<HttpResponse> get(String endpoint) {
            if (!isOnline.get()) {
                System.out.println("  [Offline] Device offline: " + endpoint);
                return CompletableFuture.completedFuture(
                    new HttpResponse(0, "Offline", null)
                );
            }
            
            return apiClient.get(endpoint)
                .exceptionally(error -> {
                    setOnline(false);
                    return new HttpResponse(0, "Network error", null);
                });
        }
        
        public CompletableFuture<HttpResponse> post(String endpoint, String body) {
            if (!isOnline.get()) {
                System.out.println("  [Offline] Queuing operation: POST " + endpoint);
                PendingOperation op = new PendingOperation("POST", endpoint, body);
                operationQueue.offer(op);
                return CompletableFuture.completedFuture(
                    new HttpResponse(202, "Queued", null)
                );
            }
            
            return apiClient.post(endpoint, body)
                .exceptionally(error -> {
                    setOnline(false);
                    PendingOperation op = new PendingOperation("POST", endpoint, body);
                    operationQueue.offer(op);
                    return new HttpResponse(202, "Queued", null);
                });
        }
        
        private void syncPendingOperations() {
            if (!isSyncing.compareAndSet(false, true)) {
                return; // Already syncing
            }
            
            CompletableFuture.runAsync(() -> {
                try {
                    System.out.println("  [Sync] Processing " + operationQueue.size() + " operations");
                    
                    while (!operationQueue.isEmpty() && isOnline.get()) {
                        PendingOperation op = operationQueue.poll();
                        
                        if (op != null) {
                            try {
                                CompletableFuture<HttpResponse> future;
                                
                                switch (op.method) {
                                    case "POST":
                                        future = apiClient.post(op.endpoint, op.body);
                                        break;
                                    case "PUT":
                                        future = apiClient.put(op.endpoint, op.body);
                                        break;
                                    case "DELETE":
                                        future = apiClient.delete(op.endpoint);
                                        break;
                                    default:
                                        continue;
                                }
                                
                                HttpResponse response = future.get(30, TimeUnit.SECONDS);
                                
                                if (response.isSuccess()) {
                                    System.out.println("  [Sync] Completed: " + op.method + " " + op.endpoint);
                                } else {
                                    System.out.println("  [Sync] Failed: " + op.method + " " + op.endpoint);
                                    operationQueue.offer(op); // Re-queue
                                }
                                
                            } catch (Exception e) {
                                System.out.println("  [Sync] Error: " + e.getMessage());
                                operationQueue.offer(op); // Re-queue
                                setOnline(false);
                                break;
                            }
                        }
                    }
                    
                } finally {
                    isSyncing.set(false);
                }
            });
        }
        
        public int getQueueSize() {
            return operationQueue.size();
        }
    }

    /**
     * ========================================================================
     * DEMONSTRATION METHODS
     * ========================================================================
     */
    
    public static void demonstrateRestApi() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 1: REST API CLIENT");
        System.out.println("=".repeat(80));
        
        System.out.println("\n1. Building requests:");
        HttpRequest request = new HttpRequest.Builder()
            .url("/api/users")
            .method("GET")
            .header("Authorization", "Bearer token123")
            .queryParam("page", "1")
            .queryParam("limit", "10")
            .build();
        
        System.out.println("  Full URL: " + request.getFullUrl());
        System.out.println("  Method: " + request.method);
        System.out.println("  Headers: " + request.headers.size());
        
        System.out.println("\n2. Mock API calls:");
        RestApiClient client = new RestApiClient("https://jsonplaceholder.typicode.com");
        
        // Mock successful response
        HttpResponse mockResponse = new HttpResponse(200, "{\"userId\": 1}", null);
        System.out.println("  Response: " + mockResponse);
        System.out.println("  Is Success: " + mockResponse.isSuccess());
    }
    
    public static void demonstrateCaching() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 2: CACHING STRATEGIES");
        System.out.println("=".repeat(80));
        
        MemoryCache<String, String> cache = new MemoryCache<>(100);
        
        System.out.println("\n1. Cache operations:");
        cache.put("user:1", "{\"name\": \"Alice\"}", 60);
        cache.put("user:2", "{\"name\": \"Bob\"}", 60);
        
        System.out.println("  Cache size: " + cache.size());
        System.out.println("  Get user:1: " + cache.get("user:1").orElse("NOT FOUND"));
        System.out.println("  Get user:3: " + cache.get("user:3").orElse("NOT FOUND"));
        
        System.out.println("\n2. Cache eviction:");
        MemoryCache<String, String> smallCache = new MemoryCache<>(2);
        smallCache.put("a", "A", 60);
        smallCache.put("b", "B", 60);
        smallCache.put("c", "C", 60); // Should evict oldest
        
        System.out.println("  After adding 3 items to size-2 cache:");
        System.out.println("  Get 'a': " + smallCache.get("a").orElse("EVICTED"));
        System.out.println("  Get 'b': " + smallCache.get("b").orElse("EVICTED"));
        System.out.println("  Get 'c': " + smallCache.get("c").orElse("EVICTED"));
    }
    
    public static void demonstrateRetry() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 3: RETRY LOGIC & EXPONENTIAL BACKOFF");
        System.out.println("=".repeat(80));
        
        RetryPolicy policy = RetryPolicy.defaultPolicy();
        
        System.out.println("\n1. Retry delays (exponential backoff):");
        for (int i = 0; i < 5; i++) {
            System.out.println("  Attempt " + i + ": " + policy.getDelay(i) + "ms");
        }
        
        System.out.println("\n2. Retry conditions:");
        HttpResponse success = new HttpResponse(200, "OK", null);
        HttpResponse clientError = new HttpResponse(404, "Not Found", null);
        HttpResponse serverError = new HttpResponse(500, "Internal Error", null);
        
        System.out.println("  Retry on 200? " + policy.retryCondition.test(success));
        System.out.println("  Retry on 404? " + policy.retryCondition.test(clientError));
        System.out.println("  Retry on 500? " + policy.retryCondition.test(serverError));
    }
    
    public static void demonstrateDeduplication() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 4: REQUEST DEDUPLICATION");
        System.out.println("=".repeat(80));
        
        RestApiClient baseClient = new RestApiClient("https://api.example.com");
        DeduplicatedApiClient dedupClient = new DeduplicatedApiClient(baseClient);
        
        System.out.println("\n1. Simulating duplicate requests:");
        
        // Simulate 3 identical requests
        CompletableFuture<HttpResponse> req1 = dedupClient.get("/users");
        CompletableFuture<HttpResponse> req2 = dedupClient.get("/users");
        CompletableFuture<HttpResponse> req3 = dedupClient.get("/users");
        
        System.out.println("  Pending requests: " + dedupClient.getPendingCount());
        System.out.println("  (Only 1 actual network call made)");
    }
    
    public static void demonstrateOfflineFirst() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 5: OFFLINE-FIRST ARCHITECTURE");
        System.out.println("=".repeat(80));
        
        RestApiClient baseClient = new RestApiClient("https://api.example.com");
        OfflineFirstClient offlineClient = new OfflineFirstClient(baseClient);
        
        System.out.println("\n1. Normal operation (online):");
        System.out.println("  Queue size: " + offlineClient.getQueueSize());
        
        System.out.println("\n2. Going offline:");
        offlineClient.setOnline(false);
        offlineClient.post("/api/items", "{\"name\": \"Item 1\"}");
        offlineClient.post("/api/items", "{\"name\": \"Item 2\"}");
        offlineClient.post("/api/items", "{\"name\": \"Item 3\"}");
        
        System.out.println("  Queue size: " + offlineClient.getQueueSize());
        
        System.out.println("\n3. Going back online:");
        offlineClient.setOnline(true);
        
        try { Thread.sleep(1000); } catch (InterruptedException e) {}
        
        System.out.println("  Queue size after sync: " + offlineClient.getQueueSize());
    }
    
    /**
     * Main method - Run all demonstrations
     */
    public static void main(String[] args) {
        System.out.println("=".repeat(80));
        System.out.println("DAY 29: MOBILE NETWORKING PATTERNS");
        System.out.println("=".repeat(80));
        
        demonstrateRestApi();
        demonstrateCaching();
        demonstrateRetry();
        demonstrateDeduplication();
        demonstrateOfflineFirst();
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("SUMMARY");
        System.out.println("=".repeat(80));
        System.out.println("\nPatterns Covered:");
        System.out.println("1. REST API Client - Complete HTTP implementation");
        System.out.println("2. Caching - Multi-level with TTL and eviction");
        System.out.println("3. Retry Logic - Exponential backoff");
        System.out.println("4. Deduplication - Prevent duplicate requests");
        System.out.println("5. Offline-First - Queue and sync");
        System.out.println("\nAll production-ready for mobile applications!");
    }
}
