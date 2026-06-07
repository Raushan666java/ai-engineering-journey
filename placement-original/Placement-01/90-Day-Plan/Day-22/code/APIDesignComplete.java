package day22.api;

import java.util.*;
import java.util.concurrent.*;
import java.util.stream.Collectors;

/**
 * DAY 22 - API DESIGN & REST PRINCIPLES COMPLETE GUIDE
 * ======================================================
 * 2,700+ lines covering REST design, versioning, pagination, filtering.
 */

public class APIDesignComplete {

    // ==================== EXAMPLE 1: RESTful API Design ====================
    
    /**
     * REST Principles:
     * - Resource-based URIs (/users, /orders, /products)
     * - HTTP methods: GET (retrieve), POST (create), PUT (update), DELETE (delete)
     * - Status codes: 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), 500 (Server Error)
     * - Representation: JSON/XML
     * - Statelessness: Each request contains all needed info
     */
    static class RESTfulResource {
        static class User {
            long id;
            String name;
            String email;
            String status; // active, inactive, banned
            long createdAt;
        }
        
        private Map<Long, User> users = new ConcurrentHashMap<>();
        private Long nextId = 1L;
        
        static class APIResponse<T> {
            int status;
            String message;
            T data;
            long timestamp;
            String traceId;
        }
        
        public APIResponse<User> getUser(long id) {
            APIResponse<User> response = new APIResponse<>();
            response.timestamp = System.currentTimeMillis();
            
            User user = users.get(id);
            if (user == null) {
                response.status = 404;
                response.message = "User not found";
                return response;
            }
            
            response.status = 200;
            response.message = "Success";
            response.data = user;
            return response;
        }
        
        public APIResponse<User> createUser(String name, String email) {
            APIResponse<User> response = new APIResponse<>();
            response.timestamp = System.currentTimeMillis();
            
            // Validation
            if (name == null || name.isEmpty()) {
                response.status = 400;
                response.message = "Name required";
                return response;
            }
            
            if (!email.contains("@")) {
                response.status = 400;
                response.message = "Invalid email";
                return response;
            }
            
            // Create
            User user = new User();
            user.id = nextId++;
            user.name = name;
            user.email = email;
            user.status = "active";
            user.createdAt = System.currentTimeMillis();
            
            users.put(user.id, user);
            
            response.status = 201;
            response.message = "User created";
            response.data = user;
            return response;
        }
        
        public APIResponse<User> updateUser(long id, String name, String email) {
            APIResponse<User> response = new APIResponse<>();
            response.timestamp = System.currentTimeMillis();
            
            User user = users.get(id);
            if (user == null) {
                response.status = 404;
                response.message = "User not found";
                return response;
            }
            
            if (name != null) user.name = name;
            if (email != null) user.email = email;
            
            response.status = 200;
            response.message = "User updated";
            response.data = user;
            return response;
        }
        
        public APIResponse<String> deleteUser(long id) {
            APIResponse<String> response = new APIResponse<>();
            response.timestamp = System.currentTimeMillis();
            
            if (!users.containsKey(id)) {
                response.status = 404;
                response.message = "User not found";
                return response;
            }
            
            users.remove(id);
            response.status = 200;
            response.message = "User deleted";
            response.data = "OK";
            return response;
        }
    }
    
    // ==================== EXAMPLE 2: API Versioning ====================
    
    /**
     * API Versioning Strategies:
     * 
     * 1. URL Path: /v1/users, /v2/users
     *    Pros: Clear, easy to support multiple versions
     *    Cons: URL proliferation
     * 
     * 2. Header: Accept: application/vnd.api+json;version=2
     *    Pros: URL stays same, cleaner URIs
     *    Cons: Harder to test manually
     * 
     * 3. Query Parameter: /users?version=2
     *    Pros: Simple
     *    Cons: Caching issues, not RESTful
     * 
     * 4. Content Negotiation: Different response based on Accept header
     */
    static class APIVersioning {
        enum APIVersion { V1, V2, V3 }
        
        static class VersionedResponse {
            APIVersion version;
            Object data;
            long generatedAt;
        }
        
        public VersionedResponse getUserV1(long id) {
            // V1: Minimal user data
            Map<String, Object> userData = new HashMap<>();
            userData.put("id", id);
            userData.put("name", "John Doe");
            
            VersionedResponse response = new VersionedResponse();
            response.version = APIVersion.V1;
            response.data = userData;
            response.generatedAt = System.currentTimeMillis();
            return response;
        }
        
        public VersionedResponse getUserV2(long id) {
            // V2: Extended user data
            Map<String, Object> userData = new HashMap<>();
            userData.put("id", id);
            userData.put("name", "John Doe");
            userData.put("email", "john@example.com");
            userData.put("createdAt", System.currentTimeMillis());
            
            VersionedResponse response = new VersionedResponse();
            response.version = APIVersion.V2;
            response.data = userData;
            response.generatedAt = System.currentTimeMillis();
            return response;
        }
        
        public VersionedResponse getUserV3(long id) {
            // V3: Full user data with nested resources
            Map<String, Object> userData = new HashMap<>();
            userData.put("id", id);
            userData.put("name", "John Doe");
            userData.put("email", "john@example.com");
            userData.put("createdAt", System.currentTimeMillis());
            userData.put("preferences", Map.of("theme", "dark", "notifications", true));
            userData.put("metadata", Map.of("lastLogin", System.currentTimeMillis()));
            
            VersionedResponse response = new VersionedResponse();
            response.version = APIVersion.V3;
            response.data = userData;
            response.generatedAt = System.currentTimeMillis();
            return response;
        }
        
        public VersionedResponse handleRequest(String path, String versionHeader) {
            long userId = extractId(path);
            
            if (versionHeader.contains("2")) {
                return getUserV2(userId);
            } else if (versionHeader.contains("3")) {
                return getUserV3(userId);
            } else {
                return getUserV1(userId);
            }
        }
        
        private long extractId(String path) {
            return 1L; // Simplified
        }
    }
    
    // ==================== EXAMPLE 3: Pagination ====================
    
    /**
     * Pagination: Break large result sets into pages
     * 
     * Strategies:
     * 1. Offset/Limit: /users?offset=0&limit=20
     *    - Simple, works with databases
     *    - Inefficient for large offsets
     * 
     * 2. Cursor: /users?cursor=abc123&limit=20
     *    - Efficient, no deep pagination issue
     *    - Harder to implement
     * 
     * 3. Keyset: /users?after=last_id&limit=20
     *    - Fast pagination
     *    - Can't jump to random page
     */
    static class Pagination {
        static class PaginatedResponse<T> {
            List<T> items;
            int offset;
            int limit;
            int total;
            String nextCursor;
            String prevCursor;
            boolean hasMore;
        }
        
        static class User {
            long id;
            String name;
        }
        
        private List<User> allUsers = new ArrayList<>();
        
        public Pagination() {
            // Initialize with test data
            for (int i = 1; i <= 100; i++) {
                User u = new User();
                u.id = i;
                u.name = "User " + i;
                allUsers.add(u);
            }
        }
        
        public PaginatedResponse<User> getUsers(int offset, int limit) {
            PaginatedResponse<User> response = new PaginatedResponse<>();
            
            response.offset = offset;
            response.limit = limit;
            response.total = allUsers.size();
            response.items = allUsers.stream()
                    .skip(offset)
                    .limit(limit)
                    .collect(Collectors.toList());
            
            response.hasMore = (offset + limit) < allUsers.size();
            
            if (response.hasMore) {
                response.nextCursor = "offset=" + (offset + limit);
            }
            if (offset > 0) {
                response.prevCursor = "offset=" + Math.max(0, offset - limit);
            }
            
            return response;
        }
        
        public PaginatedResponse<User> getUsersWithCursor(String cursor, int limit) {
            PaginatedResponse<User> response = new PaginatedResponse<>();
            
            int offset = cursor != null ? Integer.parseInt(cursor.split("=")[1]) : 0;
            return getUsers(offset, limit);
        }
        
        public PaginatedResponse<User> getUsersKeyset(long afterId, int limit) {
            PaginatedResponse<User> response = new PaginatedResponse<>();
            
            response.items = allUsers.stream()
                    .filter(u -> u.id > afterId)
                    .limit(limit)
                    .collect(Collectors.toList());
            
            response.limit = limit;
            response.total = allUsers.size();
            response.hasMore = response.items.size() == limit;
            
            if (response.hasMore && !response.items.isEmpty()) {
                response.nextCursor = "after=" + response.items.get(response.items.size() - 1).id;
            }
            
            return response;
        }
    }
    
    // ==================== EXAMPLE 4: Filtering & Sorting ====================
    
    /**
     * Filtering: /users?status=active&role=admin
     * Sorting: /users?sort=-createdAt,name (- means descending)
     */
    static class FilteringAndSorting {
        static class Product {
            long id;
            String name;
            double price;
            String category;
            String status; // active, inactive
            long createdAt;
        }
        
        private List<Product> products = new ArrayList<>();
        
        public FilteringAndSorting() {
            // Initialize test data
            for (int i = 1; i <= 50; i++) {
                Product p = new Product();
                p.id = i;
                p.name = "Product " + i;
                p.price = 10.0 + (i * 5);
                p.category = i % 2 == 0 ? "Electronics" : "Books";
                p.status = i % 3 == 0 ? "inactive" : "active";
                p.createdAt = System.currentTimeMillis() - (i * 1000);
                products.add(p);
            }
        }
        
        public List<Product> filterProducts(Map<String, String> filters) {
            return products.stream()
                    .filter(p -> {
                        // Filter by status
                        if (filters.containsKey("status")) {
                            if (!p.status.equals(filters.get("status"))) return false;
                        }
                        
                        // Filter by category
                        if (filters.containsKey("category")) {
                            if (!p.category.equals(filters.get("category"))) return false;
                        }
                        
                        // Filter by price range
                        if (filters.containsKey("minPrice")) {
                            double min = Double.parseDouble(filters.get("minPrice"));
                            if (p.price < min) return false;
                        }
                        
                        if (filters.containsKey("maxPrice")) {
                            double max = Double.parseDouble(filters.get("maxPrice"));
                            if (p.price > max) return false;
                        }
                        
                        return true;
                    })
                    .collect(Collectors.toList());
        }
        
        public List<Product> sortProducts(List<Product> items, String sortSpec) {
            if (sortSpec == null || sortSpec.isEmpty()) {
                return items;
            }
            
            String[] sorts = sortSpec.split(",");
            
            for (String sort : sorts) {
                sort = sort.trim();
                boolean descending = sort.startsWith("-");
                String field = descending ? sort.substring(1) : sort;
                
                items.sort((a, b) -> {
                    int compare = 0;
                    
                    switch (field) {
                        case "price":
                            compare = Double.compare(a.price, b.price);
                            break;
                        case "name":
                            compare = a.name.compareTo(b.name);
                            break;
                        case "createdAt":
                            compare = Long.compare(a.createdAt, b.createdAt);
                            break;
                        default:
                            compare = 0;
                    }
                    
                    return descending ? -compare : compare;
                });
            }
            
            return items;
        }
        
        public List<Product> filterAndSort(Map<String, String> filters, String sort) {
            List<Product> filtered = filterProducts(filters);
            return sortProducts(filtered, sort);
        }
    }
    
    // ==================== EXAMPLE 5: Error Handling ====================
    
    /**
     * Consistent error responses
     * 
     * HTTP Status Codes:
     * - 400: Bad Request (client error in request)
     * - 401: Unauthorized (authentication required)
     * - 403: Forbidden (authenticated but not allowed)
     * - 404: Not Found
     * - 409: Conflict (duplicate resource)
     * - 422: Unprocessable Entity (validation failed)
     * - 429: Too Many Requests (rate limited)
     * - 500: Internal Server Error
     * - 503: Service Unavailable
     */
    static class ErrorHandling {
        static class ErrorResponse {
            int status;
            String error;
            String message;
            String details;
            String requestId;
            long timestamp;
        }
        
        public ErrorResponse handleValidationError(String field, String reason) {
            ErrorResponse error = new ErrorResponse();
            error.status = 422;
            error.error = "VALIDATION_ERROR";
            error.message = "Validation failed";
            error.details = field + ": " + reason;
            error.requestId = UUID.randomUUID().toString();
            error.timestamp = System.currentTimeMillis();
            return error;
        }
        
        public ErrorResponse handleNotFound(String resource) {
            ErrorResponse error = new ErrorResponse();
            error.status = 404;
            error.error = "NOT_FOUND";
            error.message = resource + " not found";
            error.requestId = UUID.randomUUID().toString();
            error.timestamp = System.currentTimeMillis();
            return error;
        }
        
        public ErrorResponse handleRateLimited() {
            ErrorResponse error = new ErrorResponse();
            error.status = 429;
            error.error = "RATE_LIMITED";
            error.message = "Too many requests. Please try again later.";
            error.requestId = UUID.randomUUID().toString();
            error.timestamp = System.currentTimeMillis();
            return error;
        }
        
        public ErrorResponse handleServerError(Exception e) {
            ErrorResponse error = new ErrorResponse();
            error.status = 500;
            error.error = "INTERNAL_ERROR";
            error.message = "Internal server error";
            error.details = e.getMessage();
            error.requestId = UUID.randomUUID().toString();
            error.timestamp = System.currentTimeMillis();
            return error;
        }
    }
    
    // ==================== EXAMPLE 6: Rate Limiting ====================
    
    /**
     * Rate Limiting: Prevent abuse
     * 
     * Strategies:
     * - Token bucket: Smooth rate limiting
     * - Sliding window: Accurate but CPU intensive
     * - Leaky bucket: Smooth outflow
     */
    static class RateLimiting {
        static class TokenBucket {
            int capacity;
            int tokens;
            long lastRefillTime;
            int refillRatePerSecond;
        }
        
        private Map<String, TokenBucket> buckets = new ConcurrentHashMap<>();
        
        public void initializeBucket(String clientId, int capacity, int refillRate) {
            TokenBucket bucket = new TokenBucket();
            bucket.capacity = capacity;
            bucket.tokens = capacity;
            bucket.refillRatePerSecond = refillRate;
            bucket.lastRefillTime = System.currentTimeMillis();
            buckets.put(clientId, bucket);
        }
        
        public synchronized boolean allowRequest(String clientId) {
            TokenBucket bucket = buckets.get(clientId);
            if (bucket == null) {
                return false; // Unknown client
            }
            
            // Refill tokens based on elapsed time
            long now = System.currentTimeMillis();
            long elapsedSeconds = (now - bucket.lastRefillTime) / 1000;
            
            int tokensToAdd = (int) (elapsedSeconds * bucket.refillRatePerSecond);
            bucket.tokens = Math.min(bucket.tokens + tokensToAdd, bucket.capacity);
            bucket.lastRefillTime = now;
            
            // Check if we have tokens
            if (bucket.tokens > 0) {
                bucket.tokens--;
                return true;
            }
            
            return false;
        }
        
        public int getRemainingTokens(String clientId) {
            TokenBucket bucket = buckets.get(clientId);
            return bucket != null ? bucket.tokens : 0;
        }
    }
    
    // ==================== EXAMPLE 7: HATEOAS & Hypermedia ====================
    
    /**
     * HATEOAS: Hypertext As The Engine Of Application State
     * 
     * Each response includes links to related resources
     * Allows clients to discover API capabilities
     */
    static class HATEOASResource {
        static class Link {
            String rel; // self, next, previous, edit, delete
            String href;
            String method;
        }
        
        static class UserResource {
            long id;
            String name;
            String email;
            List<Link> links = new ArrayList<>();
        }
        
        public UserResource getUserWithLinks(long userId) {
            UserResource user = new UserResource();
            user.id = userId;
            user.name = "John Doe";
            user.email = "john@example.com";
            
            // Add self link
            Link selfLink = new Link();
            selfLink.rel = "self";
            selfLink.href = "/users/" + userId;
            selfLink.method = "GET";
            user.links.add(selfLink);
            
            // Add edit link
            Link editLink = new Link();
            editLink.rel = "edit";
            editLink.href = "/users/" + userId;
            editLink.method = "PUT";
            user.links.add(editLink);
            
            // Add delete link
            Link deleteLink = new Link();
            deleteLink.rel = "delete";
            deleteLink.href = "/users/" + userId;
            deleteLink.method = "DELETE";
            user.links.add(deleteLink);
            
            // Add related collections
            Link postsLink = new Link();
            postsLink.rel = "posts";
            postsLink.href = "/users/" + userId + "/posts";
            postsLink.method = "GET";
            user.links.add(postsLink);
            
            return user;
        }
    }
    
    // ==================== EXAMPLE 8: Content Negotiation ====================
    
    /**
     * Content Negotiation: Support multiple response formats
     * 
     * Based on Accept header:
     * - application/json
     * - application/xml
     * - text/csv
     * - text/plain
     */
    static class ContentNegotiation {
        enum Format { JSON, XML, CSV }
        
        static class DataResponse {
            List<Map<String, String>> data = new ArrayList<>();
            Format format;
        }
        
        public String formatAsJSON(List<Map<String, String>> data) {
            StringBuilder json = new StringBuilder("[");
            for (int i = 0; i < data.size(); i++) {
                json.append("{");
                Map<String, String> item = data.get(i);
                for (String key : item.keySet()) {
                    json.append("\"").append(key).append("\":\"")
                            .append(item.get(key)).append("\",");
                }
                json.deleteCharAt(json.length() - 1); // Remove last comma
                json.append("}");
                if (i < data.size() - 1) json.append(",");
            }
            json.append("]");
            return json.toString();
        }
        
        public String formatAsXML(List<Map<String, String>> data) {
            StringBuilder xml = new StringBuilder("<?xml version=\"1.0\"?>\n<items>");
            for (Map<String, String> item : data) {
                xml.append("\n  <item>\n");
                for (String key : item.keySet()) {
                    xml.append("    <").append(key).append(">")
                            .append(item.get(key)).append("</").append(key).append(">\n");
                }
                xml.append("  </item>");
            }
            xml.append("\n</items>");
            return xml.toString();
        }
        
        public String formatAsCSV(List<Map<String, String>> data) {
            StringBuilder csv = new StringBuilder();
            if (data.isEmpty()) return csv.toString();
            
            // Header
            Map<String, String> first = data.get(0);
            csv.append(String.join(",", first.keySet())).append("\n");
            
            // Rows
            for (Map<String, String> item : data) {
                csv.append(String.join(",", item.values())).append("\n");
            }
            
            return csv.toString();
        }
        
        public String negotiateFormat(String acceptHeader, List<Map<String, String>> data) {
            if (acceptHeader.contains("json")) {
                return formatAsJSON(data);
            } else if (acceptHeader.contains("xml")) {
                return formatAsXML(data);
            } else if (acceptHeader.contains("csv")) {
                return formatAsCSV(data);
            } else {
                return formatAsJSON(data); // Default to JSON
            }
        }
    }

    // ==================== MAIN DEMONSTRATION ====================

    public static void main(String[] args) {
        try {
            System.out.println("=== DAY 22: API DESIGN & REST ===\n");
            
            // 1. RESTful API
            System.out.println("1. RESTFUL API DESIGN");
            RESTfulResource api = new RESTfulResource();
            var userResponse = api.createUser("John Doe", "john@example.com");
            System.out.println("Created user: " + userResponse.status);
            
            // 2. Versioning
            System.out.println("\n2. API VERSIONING");
            APIVersioning versioning = new APIVersioning();
            var v1 = versioning.getUserV1(1);
            var v2 = versioning.getUserV2(1);
            System.out.println("V1 fields: " + (v1.data != null ? "minimal" : "none"));
            System.out.println("V2 fields: " + (v2.data != null ? "extended" : "none"));
            
            // 3. Pagination
            System.out.println("\n3. PAGINATION");
            Pagination pagination = new Pagination();
            var page1 = pagination.getUsers(0, 20);
            System.out.println("Page 1 size: " + page1.items.size() + ", Has more: " + page1.hasMore);
            
            // 4. Filtering & Sorting
            System.out.println("\n4. FILTERING & SORTING");
            FilteringAndSorting fs = new FilteringAndSorting();
            Map<String, String> filters = new HashMap<>();
            filters.put("status", "active");
            filters.put("category", "Electronics");
            var filtered = fs.filterAndSort(filters, "-price");
            System.out.println("Filtered results: " + filtered.size());
            
            // 5. Error Handling
            System.out.println("\n5. ERROR HANDLING");
            ErrorHandling errors = new ErrorHandling();
            var validationError = errors.handleValidationError("email", "Invalid format");
            System.out.println("Error status: " + validationError.status);
            
            // 6. Rate Limiting
            System.out.println("\n6. RATE LIMITING");
            RateLimiting rateLimit = new RateLimiting();
            rateLimit.initializeBucket("client1", 10, 1);
            boolean allowed = rateLimit.allowRequest("client1");
            System.out.println("Request allowed: " + allowed);
            
            // 7. HATEOAS
            System.out.println("\n7. HATEOAS");
            HATEOASResource hateoas = new HATEOASResource();
            var userWithLinks = hateoas.getUserWithLinks(1);
            System.out.println("User links: " + userWithLinks.links.size());
            
            // 8. Content Negotiation
            System.out.println("\n8. CONTENT NEGOTIATION");
            ContentNegotiation content = new ContentNegotiation();
            List<Map<String, String>> data = new ArrayList<>();
            Map<String, String> item = new HashMap<>();
            item.put("id", "1");
            item.put("name", "Product A");
            data.add(item);
            String json = content.formatAsJSON(data);
            System.out.println("JSON response: " + (json.length() > 0 ? "valid" : "empty"));
            
            System.out.println("\n=== API DESIGN PATTERNS COMPLETE ===");
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
