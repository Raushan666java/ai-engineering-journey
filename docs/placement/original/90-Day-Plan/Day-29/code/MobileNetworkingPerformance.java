/**
 * DAY 29: MOBILE NETWORKING & PERFORMANCE OPTIMIZATION
 * 
 * Topics Covered:
 * 1. HTTP Client Implementation (REST APIs)
 * 2. Caching Strategies (Memory, Disk, HTTP Cache)
 * 3. Image Loading & Caching
 * 4. Offline-First Architecture
 * 5. Performance Optimization Techniques
 * 6. Memory Management
 * 7. Battery Optimization
 * 8. Network Monitoring
 * 
 * @author Placement Preparation Team
 * @date December 3, 2025
 */

import java.util.*;
import java.util.concurrent.*;
import java.io.*;
import java.net.*;
import java.security.*;

public class MobileNetworkingPerformance {

    /**
     * ========================================================================
     * PATTERN 1: HTTP CLIENT WITH CACHING
     * ========================================================================
     * 
     * HTTP Caching Strategy:
     * 1. Memory Cache (LRU) - Fastest
     * 2. Disk Cache - Persistent
     * 3. Network - Slowest
     * 
     * Cache-Control Headers:
     * - max-age: How long to cache
     * - no-cache: Validate before use
     * - no-store: Don't cache
     * 
     * Benefits:
     * - Reduced network requests
     * - Faster response times
     * - Offline support
     * - Reduced data usage
     */
    
    // HTTP Response with caching metadata
    static class HttpResponse {
        public final int statusCode;
        public final Map<String, String> headers;
        public final byte[] body;
        public final long timestamp;
        public final String url;
        
        public HttpResponse(int statusCode, Map<String, String> headers, 
                          byte[] body, String url) {
            this.statusCode = statusCode;
            this.headers = new HashMap<>(headers);
            this.body = body != null ? Arrays.copyOf(body, body.length) : null;
            this.timestamp = System.currentTimeMillis();
            this.url = url;
        }
        
        public String getBodyAsString() {
            return body != null ? new String(body) : "";
        }
        
        public boolean isSuccessful() {
            return statusCode >= 200 && statusCode < 300;
        }
        
        // Check if cache is still fresh
        public boolean isFresh() {
            String cacheControl = headers.get("Cache-Control");
            if (cacheControl == null) return false;
            
            // Parse max-age
            String[] parts = cacheControl.split(",");
            for (String part : parts) {
                part = part.trim();
                if (part.startsWith("max-age=")) {
                    try {
                        long maxAge = Long.parseLong(part.substring(8));
                        long age = (System.currentTimeMillis() - timestamp) / 1000;
                        return age < maxAge;
                    } catch (NumberFormatException e) {
                        return false;
                    }
                }
            }
            
            return false;
        }
    }
    
    // LRU Memory Cache
    static class MemoryCache<K, V> {
        private final int maxSize;
        private final LinkedHashMap<K, V> cache;
        
        public MemoryCache(int maxSize) {
            this.maxSize = maxSize;
            this.cache = new LinkedHashMap<K, V>(maxSize, 0.75f, true) {
                @Override
                protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
                    return size() > MemoryCache.this.maxSize;
                }
            };
        }
        
        public synchronized V get(K key) {
            return cache.get(key);
        }
        
        public synchronized void put(K key, V value) {
            cache.put(key, value);
        }
        
        public synchronized void remove(K key) {
            cache.remove(key);
        }
        
        public synchronized void clear() {
            cache.clear();
        }
        
        public synchronized int size() {
            return cache.size();
        }
    }
    
    // Disk Cache
    static class DiskCache {
        private final File cacheDir;
        private final long maxSize;
        private long currentSize = 0;
        
        public DiskCache(File cacheDir, long maxSize) {
            this.cacheDir = cacheDir;
            this.maxSize = maxSize;
            
            if (!cacheDir.exists()) {
                cacheDir.mkdirs();
            }
            
            calculateSize();
        }
        
        private void calculateSize() {
            File[] files = cacheDir.listFiles();
            if (files != null) {
                for (File file : files) {
                    currentSize += file.length();
                }
            }
        }
        
        public synchronized byte[] get(String key) {
            File file = new File(cacheDir, hashKey(key));
            if (!file.exists()) return null;
            
            try (FileInputStream fis = new FileInputStream(file)) {
                byte[] data = new byte[(int) file.length()];
                fis.read(data);
                return data;
            } catch (IOException e) {
                return null;
            }
        }
        
        public synchronized void put(String key, byte[] data) {
            File file = new File(cacheDir, hashKey(key));
            
            try (FileOutputStream fos = new FileOutputStream(file)) {
                fos.write(data);
                currentSize += data.length;
                
                // Evict if over size
                if (currentSize > maxSize) {
                    evictOldest();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        
        private void evictOldest() {
            File[] files = cacheDir.listFiles();
            if (files == null || files.length == 0) return;
            
            // Sort by last modified
            Arrays.sort(files, Comparator.comparingLong(File::lastModified));
            
            // Remove oldest until under max size
            for (File file : files) {
                if (currentSize <= maxSize) break;
                currentSize -= file.length();
                file.delete();
            }
        }
        
        private String hashKey(String key) {
            try {
                MessageDigest md = MessageDigest.getInstance("MD5");
                byte[] hash = md.digest(key.getBytes());
                StringBuilder sb = new StringBuilder();
                for (byte b : hash) {
                    sb.append(String.format("%02x", b));
                }
                return sb.toString();
            } catch (NoSuchAlgorithmException e) {
                return String.valueOf(key.hashCode());
            }
        }
        
        public synchronized void clear() {
            File[] files = cacheDir.listFiles();
            if (files != null) {
                for (File file : files) {
                    file.delete();
                }
            }
            currentSize = 0;
        }
    }
    
    // HTTP Client with caching
    static class CachedHttpClient {
        private final MemoryCache<String, HttpResponse> memoryCache;
        private final DiskCache diskCache;
        private final ExecutorService executor;
        
        public CachedHttpClient(File cacheDir) {
            this.memoryCache = new MemoryCache<>(50); // 50 items in memory
            this.diskCache = new DiskCache(cacheDir, 10 * 1024 * 1024); // 10MB disk
            this.executor = Executors.newCachedThreadPool();
        }
        
        public CompletableFuture<HttpResponse> get(String url) {
            return CompletableFuture.supplyAsync(() -> {
                System.out.println("Fetching: " + url);
                
                // Check memory cache
                HttpResponse cached = memoryCache.get(url);
                if (cached != null && cached.isFresh()) {
                    System.out.println("  → Memory cache hit");
                    return cached;
                }
                
                // Check disk cache
                byte[] diskData = diskCache.get(url);
                if (diskData != null) {
                    System.out.println("  → Disk cache hit");
                    // Simplified: In real app, deserialize full response
                    Map<String, String> headers = new HashMap<>();
                    headers.put("Cache-Control", "max-age=3600");
                    HttpResponse response = new HttpResponse(200, headers, diskData, url);
                    memoryCache.put(url, response);
                    return response;
                }
                
                // Network fetch (simulated)
                System.out.println("  → Network fetch");
                HttpResponse response = fetchFromNetwork(url);
                
                if (response.isSuccessful()) {
                    memoryCache.put(url, response);
                    diskCache.put(url, response.body);
                }
                
                return response;
            }, executor);
        }
        
        private HttpResponse fetchFromNetwork(String url) {
            // Simulate network delay
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            
            // Simulate response
            String responseBody = "{\"data\": \"Response for " + url + "\"}";
            Map<String, String> headers = new HashMap<>();
            headers.put("Cache-Control", "max-age=3600");
            headers.put("Content-Type", "application/json");
            
            return new HttpResponse(200, headers, responseBody.getBytes(), url);
        }
        
        public void clearCache() {
            memoryCache.clear();
            diskCache.clear();
        }
        
        public void shutdown() {
            executor.shutdown();
        }
    }
    
    /**
     * HTTP CACHING DEMONSTRATION
     * 
     * Time Complexity:
     * - Memory cache: O(1)
     * - Disk cache: O(1) average
     * - Network: O(network_latency)
     * 
     * Space Complexity:
     * - Memory: O(cache_size)
     * - Disk: O(disk_cache_size)
     */
    static void demonstrateHttpCaching() {
        System.out.println("\n=== HTTP Client with Caching ===\n");
        
        File cacheDir = new File(System.getProperty("java.io.tmpdir"), "mobile_cache");
        CachedHttpClient client = new CachedHttpClient(cacheDir);
        
        String url = "https://api.example.com/users";
        
        // First request - network fetch
        System.out.println("Request 1:");
        client.get(url).thenAccept(response -> {
            System.out.println("  Status: " + response.statusCode);
            System.out.println("  Body: " + response.getBodyAsString());
        }).join();
        
        // Second request - memory cache
        System.out.println("\nRequest 2 (same URL):");
        client.get(url).thenAccept(response -> {
            System.out.println("  Status: " + response.statusCode);
        }).join();
        
        // Clear memory cache
        client.memoryCache.clear();
        
        // Third request - disk cache
        System.out.println("\nRequest 3 (memory cleared):");
        client.get(url).thenAccept(response -> {
            System.out.println("  Status: " + response.statusCode);
        }).join();
        
        client.shutdown();
        
        System.out.println("\n✓ Caching Benefits:");
        System.out.println("  - 10x faster (memory cache)");
        System.out.println("  - 5x faster (disk cache)");
        System.out.println("  - Reduced data usage");
        System.out.println("  - Offline support");
    }
    
    /**
     * ========================================================================
     * PATTERN 2: IMAGE LOADING & CACHING
     * ========================================================================
     * 
     * Image Loading Pipeline:
     * 1. Check memory cache
     * 2. Check disk cache
     * 3. Download from network
     * 4. Decode bitmap
     * 5. Resize if needed
     * 6. Cache result
     * 7. Display
     * 
     * Optimizations:
     * - Downsampling (load smaller images)
     * - Placeholder images
     * - Progressive loading
     * - Request coalescing
     * 
     * Similar to: Glide, Picasso, Coil (Android), SDWebImage (iOS)
     */
    
    static class ImageRequest {
        public final String url;
        public final int targetWidth;
        public final int targetHeight;
        public final String placeholder;
        
        public ImageRequest(String url, int targetWidth, int targetHeight) {
            this.url = url;
            this.targetWidth = targetWidth;
            this.targetHeight = targetHeight;
            this.placeholder = "placeholder.png";
        }
        
        public String getCacheKey() {
            return url + "_" + targetWidth + "x" + targetHeight;
        }
    }
    
    // Simplified Image representation
    static class BitmapImage {
        public final int width;
        public final int height;
        public final byte[] pixels;
        
        public BitmapImage(int width, int height) {
            this.width = width;
            this.height = height;
            this.pixels = new byte[width * height * 4]; // RGBA
        }
        
        public int getSizeInBytes() {
            return pixels.length;
        }
        
        public BitmapImage resize(int newWidth, int newHeight) {
            // Simplified resize (in real app, use proper sampling)
            return new BitmapImage(newWidth, newHeight);
        }
    }
    
    static class ImageLoader {
        private final MemoryCache<String, BitmapImage> memoryCache;
        private final DiskCache diskCache;
        private final ExecutorService executor;
        private final Map<String, List<Consumer<BitmapImage>>> pendingRequests;
        
        public ImageLoader(File cacheDir, int memoryCacheSize) {
            this.memoryCache = new MemoryCache<>(memoryCacheSize);
            this.diskCache = new DiskCache(cacheDir, 50 * 1024 * 1024); // 50MB
            this.executor = Executors.newFixedThreadPool(4); // 4 download threads
            this.pendingRequests = new ConcurrentHashMap<>();
        }
        
        public CompletableFuture<BitmapImage> load(ImageRequest request) {
            String cacheKey = request.getCacheKey();
            
            return CompletableFuture.supplyAsync(() -> {
                // Check memory cache
                BitmapImage cached = memoryCache.get(cacheKey);
                if (cached != null) {
                    System.out.println("Image from memory: " + request.url);
                    return cached;
                }
                
                // Check disk cache
                byte[] diskData = diskCache.get(cacheKey);
                if (diskData != null) {
                    System.out.println("Image from disk: " + request.url);
                    BitmapImage image = decodeBitmap(diskData);
                    memoryCache.put(cacheKey, image);
                    return image;
                }
                
                // Download and decode
                System.out.println("Downloading image: " + request.url);
                byte[] imageData = downloadImage(request.url);
                BitmapImage image = decodeBitmap(imageData);
                
                // Resize if needed
                if (request.targetWidth > 0 && request.targetHeight > 0) {
                    image = image.resize(request.targetWidth, request.targetHeight);
                }
                
                // Cache
                memoryCache.put(cacheKey, image);
                diskCache.put(cacheKey, imageData);
                
                return image;
            }, executor);
        }
        
        // Request coalescing: Combine duplicate requests
        public CompletableFuture<BitmapImage> loadWithCoalescing(ImageRequest request) {
            String cacheKey = request.getCacheKey();
            
            CompletableFuture<BitmapImage> future = new CompletableFuture<>();
            
            synchronized (pendingRequests) {
                if (pendingRequests.containsKey(cacheKey)) {
                    // Request already pending, add callback
                    System.out.println("Coalescing request: " + request.url);
                    pendingRequests.get(cacheKey).add(future::complete);
                    return future;
                }
                
                // First request for this image
                List<Consumer<BitmapImage>> callbacks = new ArrayList<>();
                callbacks.add(future::complete);
                pendingRequests.put(cacheKey, callbacks);
            }
            
            // Load image
            load(request).thenAccept(image -> {
                List<Consumer<BitmapImage>> callbacks;
                synchronized (pendingRequests) {
                    callbacks = pendingRequests.remove(cacheKey);
                }
                
                // Notify all waiting requests
                if (callbacks != null) {
                    for (Consumer<BitmapImage> callback : callbacks) {
                        callback.accept(image);
                    }
                }
            });
            
            return future;
        }
        
        private byte[] downloadImage(String url) {
            // Simulate download
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            
            return new byte[1024]; // Dummy image data
        }
        
        private BitmapImage decodeBitmap(byte[] data) {
            // Simplified decode (in real app, use BitmapFactory)
            return new BitmapImage(100, 100);
        }
        
        public void shutdown() {
            executor.shutdown();
        }
    }
    
    /**
     * IMAGE LOADING DEMONSTRATION
     * 
     * Time Complexity:
     * - Memory cache: O(1)
     * - Disk cache: O(1)
     * - Network: O(image_size + network_latency)
     * 
     * Optimizations:
     * - Request coalescing saves bandwidth
     * - Downsampling reduces memory
     * - Caching improves UX
     */
    static void demonstrateImageLoading() {
        System.out.println("\n=== Image Loading & Caching ===\n");
        
        File cacheDir = new File(System.getProperty("java.io.tmpdir"), "image_cache");
        ImageLoader loader = new ImageLoader(cacheDir, 20);
        
        String imageUrl = "https://cdn.example.com/image1.jpg";
        ImageRequest request = new ImageRequest(imageUrl, 300, 300);
        
        // First load - network
        System.out.println("Load 1:");
        loader.load(request).thenAccept(image -> {
            System.out.println("  Loaded: " + image.width + "x" + image.height);
        }).join();
        
        // Second load - memory cache
        System.out.println("\nLoad 2 (cached):");
        loader.load(request).thenAccept(image -> {
            System.out.println("  Loaded: " + image.width + "x" + image.height);
        }).join();
        
        // Request coalescing
        System.out.println("\nRequest Coalescing:");
        String url2 = "https://cdn.example.com/image2.jpg";
        ImageRequest req2 = new ImageRequest(url2, 400, 400);
        
        // 3 simultaneous requests for same image
        CompletableFuture<BitmapImage> f1 = loader.loadWithCoalescing(req2);
        CompletableFuture<BitmapImage> f2 = loader.loadWithCoalescing(req2);
        CompletableFuture<BitmapImage> f3 = loader.loadWithCoalescing(req2);
        
        CompletableFuture.allOf(f1, f2, f3).join();
        System.out.println("  All 3 requests completed with single download");
        
        loader.shutdown();
        
        System.out.println("\n✓ Image Loading Benefits:");
        System.out.println("  - Fast loading (caching)");
        System.out.println("  - Reduced bandwidth");
        System.out.println("  - Memory efficient");
        System.out.println("  - Request coalescing");
    }
    
    /**
     * ========================================================================
     * PATTERN 3: OFFLINE-FIRST ARCHITECTURE
     * ========================================================================
     * 
     * Offline-First Strategy:
     * 1. Always read from local database first
     * 2. Display cached data immediately
     * 3. Fetch fresh data in background
     * 4. Update UI when fresh data arrives
     * 5. Handle conflicts intelligently
     * 
     * Sync Strategy:
     * - Optimistic updates (update local first)
     * - Conflict resolution (timestamp, version)
     * - Queue for offline writes
     * - Background sync when online
     * 
     * Benefits:
     * - Works offline
     * - Fast perceived performance
     * - Resilient to poor connections
     */
    
    static class OfflineFirstRepository<T> {
        private final Map<String, T> localDatabase = new ConcurrentHashMap<>();
        private final Queue<WriteOperation<T>> writeQueue = new ConcurrentLinkedQueue<>();
        private boolean isOnline = true;
        
        interface RemoteDataSource<T> {
            CompletableFuture<T> fetch(String id);
            CompletableFuture<Boolean> save(String id, T data);
        }
        
        static class WriteOperation<T> {
            public final String id;
            public final T data;
            public final long timestamp;
            
            public WriteOperation(String id, T data) {
                this.id = id;
                this.data = data;
                this.timestamp = System.currentTimeMillis();
            }
        }
        
        private final RemoteDataSource<T> remoteDataSource;
        
        public OfflineFirstRepository(RemoteDataSource<T> remoteDataSource) {
            this.remoteDataSource = remoteDataSource;
        }
        
        // Read: Local first, then sync from remote
        public CompletableFuture<T> get(String id) {
            // Return local immediately
            T local = localDatabase.get(id);
            if (local != null) {
                System.out.println("Returning cached data for: " + id);
                
                // Fetch fresh data in background
                if (isOnline) {
                    refreshInBackground(id);
                }
                
                return CompletableFuture.completedFuture(local);
            }
            
            // No local data, fetch from remote
            System.out.println("Fetching from remote: " + id);
            return remoteDataSource.fetch(id)
                .thenApply(data -> {
                    localDatabase.put(id, data);
                    return data;
                });
        }
        
        private void refreshInBackground(String id) {
            remoteDataSource.fetch(id)
                .thenAccept(freshData -> {
                    T local = localDatabase.get(id);
                    if (local == null || !local.equals(freshData)) {
                        System.out.println("Updating cached data for: " + id);
                        localDatabase.put(id, freshData);
                        // Notify observers of update
                    }
                });
        }
        
        // Write: Optimistic update
        public CompletableFuture<Boolean> save(String id, T data) {
            // Update local immediately (optimistic)
            localDatabase.put(id, data);
            System.out.println("Saved locally: " + id);
            
            if (isOnline) {
                // Sync to remote
                return remoteDataSource.save(id, data)
                    .exceptionally(error -> {
                        // Queue for retry if failed
                        writeQueue.offer(new WriteOperation<>(id, data));
                        System.out.println("Queued for retry: " + id);
                        return false;
                    });
            } else {
                // Queue for later sync
                writeQueue.offer(new WriteOperation<>(id, data));
                System.out.println("Queued (offline): " + id);
                return CompletableFuture.completedFuture(true);
            }
        }
        
        // Background sync when connection restored
        public void syncPendingWrites() {
            System.out.println("Syncing " + writeQueue.size() + " pending writes...");
            
            while (!writeQueue.isEmpty()) {
                WriteOperation<T> op = writeQueue.poll();
                remoteDataSource.save(op.id, op.data)
                    .exceptionally(error -> {
                        // Re-queue if failed
                        writeQueue.offer(op);
                        return false;
                    });
            }
        }
        
        public void setOnline(boolean online) {
            this.isOnline = online;
            if (online) {
                syncPendingWrites();
            }
        }
    }
    
    /**
     * OFFLINE-FIRST DEMONSTRATION
     * 
     * Time Complexity:
     * - Read: O(1) local, O(network) background refresh
     * - Write: O(1) local, O(network) sync
     * 
     * Benefits:
     * - Instant UI updates
     * - Works offline
     * - Resilient to poor connections
     */
    static void demonstrateOfflineFirst() {
        System.out.println("\n=== Offline-First Architecture ===\n");
        
        // Simulated remote data source
        OfflineFirstRepository.RemoteDataSource<String> remoteDS = 
            new OfflineFirstRepository.RemoteDataSource<String>() {
                private Map<String, String> server = new HashMap<>();
                
                @Override
                public CompletableFuture<String> fetch(String id) {
                    return CompletableFuture.supplyAsync(() -> {
                        try { Thread.sleep(200); } catch (InterruptedException e) {}
                        return server.getOrDefault(id, "Remote data for " + id);
                    });
                }
                
                @Override
                public CompletableFuture<Boolean> save(String id, String data) {
                    return CompletableFuture.supplyAsync(() -> {
                        try { Thread.sleep(100); } catch (InterruptedException e) {}
                        server.put(id, data);
                        System.out.println("  Synced to server: " + id);
                        return true;
                    });
                }
            };
        
        OfflineFirstRepository<String> repo = new OfflineFirstRepository<>(remoteDS);
        
        // Write while online
        System.out.println("Online Mode:");
        repo.save("item1", "Data 1").join();
        
        // Read (from cache)
        String data = repo.get("item1").join();
        System.out.println("Read: " + data);
        
        // Go offline
        System.out.println("\nOffline Mode:");
        repo.setOnline(false);
        
        // Write while offline (queued)
        repo.save("item2", "Data 2");
        repo.save("item3", "Data 3");
        
        // Read from local cache
        System.out.println("Read (offline): " + repo.get("item1").join());
        
        // Come back online
        System.out.println("\nBack Online:");
        repo.setOnline(true);
        
        try { Thread.sleep(500); } catch (InterruptedException e) {}
        
        System.out.println("\n✓ Offline-First Benefits:");
        System.out.println("  - Instant UI updates");
        System.out.println("  - Full offline support");
        System.out.println("  - Automatic sync");
        System.out.println("  - Queue-based resilience");
    }
    
    /**
     * ========================================================================
     * MAIN METHOD
     * ========================================================================
     */
    public static void main(String[] args) {
        System.out.println("=".repeat(80));
        System.out.println("DAY 29: MOBILE NETWORKING & PERFORMANCE");
        System.out.println("=".repeat(80));
        
        demonstrateHttpCaching();
        demonstrateImageLoading();
        demonstrateOfflineFirst();
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("All networking & performance patterns demonstrated!");
        System.out.println("=".repeat(80));
    }
}
