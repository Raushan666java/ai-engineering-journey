/**
 * DAY 26: API DESIGN & VERSIONING PATTERNS
 * 
 * This file contains advanced API design patterns:
 * 1. RESTful API Design Principles
 * 2. GraphQL API Pattern
 * 3. API Versioning Strategies
 * 4. API Gateway Patterns
 * 5. API Rate Limiting & Throttling
 * 6. API Authentication & Authorization
 * 7. API Documentation & Contracts
 * 8. API Monitoring & Analytics
 * 
 * @author Day 26 - API Design
 * @version 2.0 - Production Ready
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.time.*;
import java.util.function.*;
import java.util.stream.*;

// ============================================================================
// 1. RESTFUL API DESIGN
// ============================================================================

/**
 * RESTful API Framework
 * Following REST principles: Resources, HTTP Methods, Stateless
 */
class RESTfulAPI {
    
    enum HttpMethod {
        GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS
    }
    
    enum HttpStatus {
        OK(200), CREATED(201), NO_CONTENT(204),
        BAD_REQUEST(400), UNAUTHORIZED(401), FORBIDDEN(403), NOT_FOUND(404),
        INTERNAL_ERROR(500), SERVICE_UNAVAILABLE(503);
        
        final int code;
        HttpStatus(int code) { this.code = code; }
    }
    
    static class Request {
        HttpMethod method;
        String path;
        Map<String, String> headers = new HashMap<>();
        Map<String, String> queryParams = new HashMap<>();
        Map<String, String> pathParams = new HashMap<>();
        String body;
        
        public Request(HttpMethod method, String path) {
            this.method = method;
            this.path = path;
        }
        
        public Request header(String key, String value) {
            headers.put(key, value);
            return this;
        }
        
        public Request query(String key, String value) {
            queryParams.put(key, value);
            return this;
        }
        
        public Request body(String body) {
            this.body = body;
            return this;
        }
    }
    
    static class Response {
        HttpStatus status;
        Map<String, String> headers = new HashMap<>();
        String body;
        
        public Response(HttpStatus status) {
            this.status = status;
        }
        
        public Response header(String key, String value) {
            headers.put(key, value);
            return this;
        }
        
        public Response body(String body) {
            this.body = body;
            return this;
        }
        
        public static Response ok(String body) {
            return new Response(HttpStatus.OK).body(body);
        }
        
        public static Response created(String body) {
            return new Response(HttpStatus.CREATED).body(body);
        }
        
        public static Response error(HttpStatus status, String message) {
            return new Response(status).body("{\"error\":\"" + message + "\"}");
        }
    }
    
    interface RequestHandler {
        Response handle(Request request);
    }
    
    static class Route {
        HttpMethod method;
        String pathPattern;
        RequestHandler handler;
        
        public Route(HttpMethod method, String pathPattern, RequestHandler handler) {
            this.method = method;
            this.pathPattern = pathPattern;
            this.handler = handler;
        }
        
        public boolean matches(Request request) {
            if (!method.equals(request.method)) {
                return false;
            }
            return matchPath(pathPattern, request.path, request.pathParams);
        }
        
        private boolean matchPath(String pattern, String path, Map<String, String> params) {
            String[] patternParts = pattern.split("/");
            String[] pathParts = path.split("/");
            
            if (patternParts.length != pathParts.length) {
                return false;
            }
            
            for (int i = 0; i < patternParts.length; i++) {
                String patternPart = patternParts[i];
                String pathPart = pathParts[i];
                
                if (patternPart.startsWith("{") && patternPart.endsWith("}")) {
                    // Path parameter
                    String paramName = patternPart.substring(1, patternPart.length() - 1);
                    params.put(paramName, pathPart);
                } else if (!patternPart.equals(pathPart)) {
                    return false;
                }
            }
            
            return true;
        }
    }
    
    static class Router {
        private List<Route> routes = new ArrayList<>();
        
        public void addRoute(Route route) {
            routes.add(route);
        }
        
        public void get(String path, RequestHandler handler) {
            routes.add(new Route(HttpMethod.GET, path, handler));
        }
        
        public void post(String path, RequestHandler handler) {
            routes.add(new Route(HttpMethod.POST, path, handler));
        }
        
        public void put(String path, RequestHandler handler) {
            routes.add(new Route(HttpMethod.PUT, path, handler));
        }
        
        public void delete(String path, RequestHandler handler) {
            routes.add(new Route(HttpMethod.DELETE, path, handler));
        }
        
        public Response route(Request request) {
            for (Route route : routes) {
                if (route.matches(request)) {
                    return route.handler.handle(request);
                }
            }
            return Response.error(HttpStatus.NOT_FOUND, "Route not found");
        }
    }
}

// ============================================================================
// 2. GRAPHQL API PATTERN
// ============================================================================

/**
 * GraphQL API Implementation
 * Allows clients to request exactly what they need
 */
class GraphQLAPI {
    
    interface GraphQLType {
        String getName();
        Map<String, Object> getFields();
    }
    
    static class ObjectType implements GraphQLType {
        String name;
        Map<String, Object> fields = new LinkedHashMap<>();
        
        public ObjectType(String name) {
            this.name = name;
        }
        
        public ObjectType field(String name, Object value) {
            fields.put(name, value);
            return this;
        }
        
        @Override
        public String getName() {
            return name;
        }
        
        @Override
        public Map<String, Object> getFields() {
            return fields;
        }
    }
    
    static class Query {
        String query;
        Map<String, Object> variables = new HashMap<>();
        
        public Query(String query) {
            this.query = query;
        }
        
        public Query variable(String name, Object value) {
            variables.put(name, value);
            return this;
        }
    }
    
    static class QueryResult {
        Map<String, Object> data = new LinkedHashMap<>();
        List<String> errors = new ArrayList<>();
        
        public QueryResult data(String field, Object value) {
            data.put(field, value);
            return this;
        }
        
        public QueryResult error(String message) {
            errors.add(message);
            return this;
        }
        
        public String toJSON() {
            StringBuilder sb = new StringBuilder("{");
            
            if (!data.isEmpty()) {
                sb.append("\"data\":{");
                data.forEach((k, v) -> sb.append("\"").append(k).append("\":").append(toJSONValue(v)).append(","));
                sb.setLength(sb.length() - 1);
                sb.append("}");
            }
            
            if (!errors.isEmpty()) {
                if (!data.isEmpty()) sb.append(",");
                sb.append("\"errors\":[");
                errors.forEach(e -> sb.append("\"").append(e).append("\","));
                sb.setLength(sb.length() - 1);
                sb.append("]");
            }
            
            sb.append("}");
            return sb.toString();
        }
        
        private String toJSONValue(Object value) {
            if (value instanceof String) {
                return "\"" + value + "\"";
            } else if (value instanceof Map) {
                Map<?, ?> map = (Map<?, ?>) value;
                StringBuilder sb = new StringBuilder("{");
                map.forEach((k, v) -> sb.append("\"").append(k).append("\":").append(toJSONValue(v)).append(","));
                if (sb.length() > 1) sb.setLength(sb.length() - 1);
                sb.append("}");
                return sb.toString();
            } else if (value instanceof List) {
                List<?> list = (List<?>) value;
                StringBuilder sb = new StringBuilder("[");
                list.forEach(v -> sb.append(toJSONValue(v)).append(","));
                if (sb.length() > 1) sb.setLength(sb.length() - 1);
                sb.append("]");
                return sb.toString();
            }
            return String.valueOf(value);
        }
    }
    
    interface Resolver {
        Object resolve(Map<String, Object> args);
    }
    
    static class Schema {
        Map<String, Resolver> queryResolvers = new HashMap<>();
        Map<String, Resolver> mutationResolvers = new HashMap<>();
        
        public void addQuery(String name, Resolver resolver) {
            queryResolvers.put(name, resolver);
        }
        
        public void addMutation(String name, Resolver resolver) {
            mutationResolvers.put(name, resolver);
        }
        
        public QueryResult execute(Query query) {
            QueryResult result = new QueryResult();
            
            // Simple query parsing (in production, use proper GraphQL parser)
            String queryStr = query.query.trim();
            
            if (queryStr.startsWith("query")) {
                parseAndExecuteQuery(queryStr, query.variables, result);
            } else if (queryStr.startsWith("mutation")) {
                parseAndExecuteMutation(queryStr, query.variables, result);
            }
            
            return result;
        }
        
        private void parseAndExecuteQuery(String queryStr, Map<String, Object> variables, QueryResult result) {
            // Extract field names (simplified)
            queryResolvers.forEach((fieldName, resolver) -> {
                if (queryStr.contains(fieldName)) {
                    Object value = resolver.resolve(variables);
                    result.data(fieldName, value);
                }
            });
        }
        
        private void parseAndExecuteMutation(String queryStr, Map<String, Object> variables, QueryResult result) {
            mutationResolvers.forEach((fieldName, resolver) -> {
                if (queryStr.contains(fieldName)) {
                    Object value = resolver.resolve(variables);
                    result.data(fieldName, value);
                }
            });
        }
    }
}

// ============================================================================
// 3. API VERSIONING STRATEGIES
// ============================================================================

/**
 * API Versioning Patterns
 */
class APIVersioning {
    
    /**
     * URI Versioning: /api/v1/users
     */
    static class URIVersioning {
        Map<String, RESTfulAPI.Router> versionRouters = new HashMap<>();
        
        public void addVersion(String version, RESTfulAPI.Router router) {
            versionRouters.put(version, router);
        }
        
        public RESTfulAPI.Response route(String version, RESTfulAPI.Request request) {
            RESTfulAPI.Router router = versionRouters.get(version);
            if (router == null) {
                return RESTfulAPI.Response.error(RESTfulAPI.HttpStatus.NOT_FOUND, 
                                                "API version not found");
            }
            return router.route(request);
        }
    }
    
    /**
     * Header Versioning: Accept: application/vnd.api.v1+json
     */
    static class HeaderVersioning {
        Map<String, RESTfulAPI.Router> versionRouters = new HashMap<>();
        
        public void addVersion(String version, RESTfulAPI.Router router) {
            versionRouters.put(version, router);
        }
        
        public RESTfulAPI.Response route(RESTfulAPI.Request request) {
            String acceptHeader = request.headers.get("Accept");
            String version = extractVersionFromHeader(acceptHeader);
            
            RESTfulAPI.Router router = versionRouters.getOrDefault(version, versionRouters.get("v1"));
            return router.route(request);
        }
        
        private String extractVersionFromHeader(String header) {
            if (header != null && header.contains(".v")) {
                int start = header.indexOf(".v") + 2;
                int end = header.indexOf("+", start);
                if (end == -1) end = header.length();
                return header.substring(start, end);
            }
            return "v1";
        }
    }
    
    /**
     * Query Parameter Versioning: /api/users?version=1
     */
    static class QueryParamVersioning {
        Map<String, RESTfulAPI.Router> versionRouters = new HashMap<>();
        
        public void addVersion(String version, RESTfulAPI.Router router) {
            versionRouters.put(version, router);
        }
        
        public RESTfulAPI.Response route(RESTfulAPI.Request request) {
            String version = request.queryParams.getOrDefault("version", "v1");
            RESTfulAPI.Router router = versionRouters.getOrDefault(version, versionRouters.get("v1"));
            return router.route(request);
        }
    }
}

// ============================================================================
// 4. API AUTHENTICATION & AUTHORIZATION
// ============================================================================

/**
 * API Security Patterns
 */
class APISecurity {
    
    /**
     * JWT Token Authentication
     */
    static class JWTAuth {
        static class Token {
            String header;
            String payload;
            String signature;
            
            public Token(String userId, String role, long expiryMs) {
                this.header = Base64.getEncoder().encodeToString(
                    "{\"alg\":\"HS256\",\"typ\":\"JWT\"}".getBytes()
                );
                
                long expiry = System.currentTimeMillis() + expiryMs;
                this.payload = Base64.getEncoder().encodeToString(
                    ("{\"userId\":\"" + userId + "\",\"role\":\"" + role + 
                     "\",\"exp\":" + expiry + "}").getBytes()
                );
                
                this.signature = generateSignature(header, payload);
            }
            
            private String generateSignature(String header, String payload) {
                return Base64.getEncoder().encodeToString(
                    (header + "." + payload).hashCode() + "SIGNATURE".getBytes()
                );
            }
            
            public String getToken() {
                return header + "." + payload + "." + signature;
            }
            
            public static Token parse(String token) {
                String[] parts = token.split("\\.");
                if (parts.length != 3) {
                    throw new IllegalArgumentException("Invalid token format");
                }
                
                Token t = new Token("", "", 0);
                t.header = parts[0];
                t.payload = parts[1];
                t.signature = parts[2];
                return t;
            }
            
            public Map<String, Object> getClaims() {
                String payloadJson = new String(Base64.getDecoder().decode(payload));
                Map<String, Object> claims = new HashMap<>();
                
                // Simple JSON parsing (use proper JSON library in production)
                payloadJson = payloadJson.replaceAll("[{}\"]", "");
                String[] pairs = payloadJson.split(",");
                for (String pair : pairs) {
                    String[] kv = pair.split(":");
                    if (kv.length == 2) {
                        claims.put(kv[0].trim(), kv[1].trim());
                    }
                }
                
                return claims;
            }
            
            public boolean isExpired() {
                Map<String, Object> claims = getClaims();
                String expStr = (String) claims.get("exp");
                if (expStr != null) {
                    long exp = Long.parseLong(expStr);
                    return System.currentTimeMillis() > exp;
                }
                return false;
            }
        }
        
        public Token generateToken(String userId, String role) {
            return new Token(userId, role, 3600000); // 1 hour
        }
        
        public boolean validateToken(String tokenStr) {
            try {
                Token token = Token.parse(tokenStr);
                return !token.isExpired();
            } catch (Exception e) {
                return false;
            }
        }
    }
    
    /**
     * API Key Authentication
     */
    static class APIKeyAuth {
        private Map<String, String> apiKeys = new ConcurrentHashMap<>(); // key -> userId
        
        public String generateAPIKey(String userId) {
            String apiKey = UUID.randomUUID().toString();
            apiKeys.put(apiKey, userId);
            return apiKey;
        }
        
        public boolean validateAPIKey(String apiKey) {
            return apiKeys.containsKey(apiKey);
        }
        
        public String getUserId(String apiKey) {
            return apiKeys.get(apiKey);
        }
        
        public void revokeAPIKey(String apiKey) {
            apiKeys.remove(apiKey);
        }
    }
    
    /**
     * OAuth 2.0 Flow
     */
    static class OAuth2 {
        static class AuthorizationCode {
            String code;
            String clientId;
            String userId;
            long expiryTime;
            
            public AuthorizationCode(String clientId, String userId) {
                this.code = UUID.randomUUID().toString();
                this.clientId = clientId;
                this.userId = userId;
                this.expiryTime = System.currentTimeMillis() + 600000; // 10 minutes
            }
            
            public boolean isExpired() {
                return System.currentTimeMillis() > expiryTime;
            }
        }
        
        static class AccessToken {
            String token;
            String userId;
            long expiryTime;
            
            public AccessToken(String userId) {
                this.token = UUID.randomUUID().toString();
                this.userId = userId;
                this.expiryTime = System.currentTimeMillis() + 3600000; // 1 hour
            }
            
            public boolean isExpired() {
                return System.currentTimeMillis() > expiryTime;
            }
        }
        
        private Map<String, AuthorizationCode> authCodes = new ConcurrentHashMap<>();
        private Map<String, AccessToken> accessTokens = new ConcurrentHashMap<>();
        
        public AuthorizationCode authorize(String clientId, String userId) {
            AuthorizationCode code = new AuthorizationCode(clientId, userId);
            authCodes.put(code.code, code);
            return code;
        }
        
        public AccessToken exchangeCodeForToken(String code, String clientId) {
            AuthorizationCode authCode = authCodes.get(code);
            
            if (authCode == null || authCode.isExpired() || !authCode.clientId.equals(clientId)) {
                return null;
            }
            
            authCodes.remove(code);
            AccessToken token = new AccessToken(authCode.userId);
            accessTokens.put(token.token, token);
            
            return token;
        }
        
        public boolean validateAccessToken(String token) {
            AccessToken accessToken = accessTokens.get(token);
            return accessToken != null && !accessToken.isExpired();
        }
    }
}

// ============================================================================
// 5. API DOCUMENTATION & CONTRACTS
// ============================================================================

/**
 * OpenAPI/Swagger Specification
 */
class APIDocumentation {
    
    static class EndpointDoc {
        String path;
        String method;
        String summary;
        String description;
        List<Parameter> parameters = new ArrayList<>();
        List<Response> responses = new ArrayList<>();
        
        static class Parameter {
            String name;
            String in; // path, query, header, body
            String type;
            boolean required;
            String description;
            
            public Parameter(String name, String in, String type, boolean required) {
                this.name = name;
                this.in = in;
                this.type = type;
                this.required = required;
            }
        }
        
        static class Response {
            int statusCode;
            String description;
            String schema;
            
            public Response(int statusCode, String description) {
                this.statusCode = statusCode;
                this.description = description;
            }
        }
        
        public EndpointDoc(String path, String method, String summary) {
            this.path = path;
            this.method = method;
            this.summary = summary;
        }
        
        public EndpointDoc description(String desc) {
            this.description = desc;
            return this;
        }
        
        public EndpointDoc addParameter(Parameter param) {
            parameters.add(param);
            return this;
        }
        
        public EndpointDoc addResponse(Response response) {
            responses.add(response);
            return this;
        }
        
        public String toOpenAPI() {
            StringBuilder sb = new StringBuilder();
            sb.append("  \"").append(path).append("\": {\n");
            sb.append("    \"").append(method.toLowerCase()).append("\": {\n");
            sb.append("      \"summary\": \"").append(summary).append("\",\n");
            
            if (description != null) {
                sb.append("      \"description\": \"").append(description).append("\",\n");
            }
            
            if (!parameters.isEmpty()) {
                sb.append("      \"parameters\": [\n");
                parameters.forEach(p -> {
                    sb.append("        {\n");
                    sb.append("          \"name\": \"").append(p.name).append("\",\n");
                    sb.append("          \"in\": \"").append(p.in).append("\",\n");
                    sb.append("          \"type\": \"").append(p.type).append("\",\n");
                    sb.append("          \"required\": ").append(p.required).append("\n");
                    sb.append("        },\n");
                });
                sb.setLength(sb.length() - 2);
                sb.append("\n      ],\n");
            }
            
            if (!responses.isEmpty()) {
                sb.append("      \"responses\": {\n");
                responses.forEach(r -> {
                    sb.append("        \"").append(r.statusCode).append("\": {\n");
                    sb.append("          \"description\": \"").append(r.description).append("\"\n");
                    sb.append("        },\n");
                });
                sb.setLength(sb.length() - 2);
                sb.append("\n      }\n");
            }
            
            sb.append("    }\n");
            sb.append("  }");
            
            return sb.toString();
        }
    }
    
    static class APISpec {
        String title;
        String version;
        String description;
        List<EndpointDoc> endpoints = new ArrayList<>();
        
        public APISpec(String title, String version) {
            this.title = title;
            this.version = version;
        }
        
        public APISpec description(String desc) {
            this.description = desc;
            return this;
        }
        
        public APISpec addEndpoint(EndpointDoc endpoint) {
            endpoints.add(endpoint);
            return this;
        }
        
        public String toOpenAPI() {
            StringBuilder sb = new StringBuilder();
            sb.append("{\n");
            sb.append("  \"openapi\": \"3.0.0\",\n");
            sb.append("  \"info\": {\n");
            sb.append("    \"title\": \"").append(title).append("\",\n");
            sb.append("    \"version\": \"").append(version).append("\"\n");
            sb.append("  },\n");
            sb.append("  \"paths\": {\n");
            
            for (int i = 0; i < endpoints.size(); i++) {
                sb.append(endpoints.get(i).toOpenAPI());
                if (i < endpoints.size() - 1) {
                    sb.append(",\n");
                }
            }
            
            sb.append("\n  }\n");
            sb.append("}");
            
            return sb.toString();
        }
    }
}

// ============================================================================
// 6. API MONITORING & ANALYTICS
// ============================================================================

/**
 * API Monitoring and Metrics
 */
class APIMonitoring {
    
    static class Metrics {
        private AtomicLong totalRequests = new AtomicLong(0);
        private AtomicLong successfulRequests = new AtomicLong(0);
        private AtomicLong failedRequests = new AtomicLong(0);
        private ConcurrentHashMap<String, AtomicLong> endpointCounts = new ConcurrentHashMap<>();
        private ConcurrentHashMap<String, List<Long>> responseTimes = new ConcurrentHashMap<>();
        
        public void recordRequest(String endpoint, long responseTime, boolean success) {
            totalRequests.incrementAndGet();
            
            if (success) {
                successfulRequests.incrementAndGet();
            } else {
                failedRequests.incrementAndGet();
            }
            
            endpointCounts.computeIfAbsent(endpoint, k -> new AtomicLong(0))
                         .incrementAndGet();
            
            responseTimes.computeIfAbsent(endpoint, k -> new CopyOnWriteArrayList<>())
                        .add(responseTime);
        }
        
        public long getTotalRequests() {
            return totalRequests.get();
        }
        
        public double getSuccessRate() {
            long total = totalRequests.get();
            return total == 0 ? 0 : (successfulRequests.get() * 100.0 / total);
        }
        
        public Map<String, Long> getEndpointStats() {
            Map<String, Long> stats = new HashMap<>();
            endpointCounts.forEach((endpoint, count) -> stats.put(endpoint, count.get()));
            return stats;
        }
        
        public double getAverageResponseTime(String endpoint) {
            List<Long> times = responseTimes.get(endpoint);
            if (times == null || times.isEmpty()) {
                return 0;
            }
            return times.stream().mapToLong(Long::longValue).average().orElse(0);
        }
        
        public double getP95ResponseTime(String endpoint) {
            List<Long> times = responseTimes.get(endpoint);
            if (times == null || times.isEmpty()) {
                return 0;
            }
            
            List<Long> sorted = new ArrayList<>(times);
            Collections.sort(sorted);
            int index = (int) Math.ceil(sorted.size() * 0.95) - 1;
            return sorted.get(Math.max(0, index));
        }
        
        public String getReport() {
            StringBuilder sb = new StringBuilder();
            sb.append("API Metrics Report\n");
            sb.append("==================\n");
            sb.append("Total Requests: ").append(totalRequests.get()).append("\n");
            sb.append("Success Rate: ").append(String.format("%.2f%%", getSuccessRate())).append("\n");
            sb.append("\nEndpoint Statistics:\n");
            
            endpointCounts.forEach((endpoint, count) -> {
                sb.append("  ").append(endpoint).append("\n");
                sb.append("    Requests: ").append(count.get()).append("\n");
                sb.append("    Avg Response Time: ")
                  .append(String.format("%.2fms", getAverageResponseTime(endpoint))).append("\n");
                sb.append("    P95 Response Time: ")
                  .append(String.format("%.2fms", getP95ResponseTime(endpoint))).append("\n");
            });
            
            return sb.toString();
        }
    }
    
    /**
     * Health Check Endpoint
     */
    static class HealthCheck {
        enum Status {
            UP, DOWN, DEGRADED
        }
        
        static class HealthStatus {
            Status status;
            Map<String, Object> details = new HashMap<>();
            
            public HealthStatus(Status status) {
                this.status = status;
            }
            
            public HealthStatus detail(String key, Object value) {
                details.put(key, value);
                return this;
            }
            
            public String toJSON() {
                StringBuilder sb = new StringBuilder("{");
                sb.append("\"status\":\"").append(status).append("\",");
                sb.append("\"details\":{");
                
                details.forEach((k, v) -> {
                    sb.append("\"").append(k).append("\":\"").append(v).append("\",");
                });
                
                if (!details.isEmpty()) {
                    sb.setLength(sb.length() - 1);
                }
                
                sb.append("}}");
                return sb.toString();
            }
        }
        
        private List<Supplier<Boolean>> healthChecks = new ArrayList<>();
        
        public void addCheck(Supplier<Boolean> check) {
            healthChecks.add(check);
        }
        
        public HealthStatus check() {
            boolean allHealthy = healthChecks.stream().allMatch(Supplier::get);
            
            HealthStatus health = new HealthStatus(allHealthy ? Status.UP : Status.DOWN);
            health.detail("timestamp", Instant.now().toString());
            health.detail("checks_passed", healthChecks.stream().filter(Supplier::get).count());
            health.detail("checks_total", healthChecks.size());
            
            return health;
        }
    }
}

// ============================================================================
// DEMONSTRATION AND TESTING
// ============================================================================

public class APIDesignPatterns {
    
    public static void main(String[] args) {
        System.out.println("=".repeat(80));
        System.out.println("DAY 26: API DESIGN PATTERNS - COMPREHENSIVE DEMO");
        System.out.println("=".repeat(80));
        
        demoRESTfulAPI();
        demoGraphQLAPI();
        demoAPIVersioning();
        demoAPISecurity();
        demoAPIDocumentation();
        demoAPIMonitoring();
    }
    
    private static void demoRESTfulAPI() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 1: RESTful API Design");
        System.out.println("=".repeat(80));
        
        RESTfulAPI.Router router = new RESTfulAPI.Router();
        
        // Define routes
        router.get("/api/users", req -> {
            return RESTfulAPI.Response.ok("[{\"id\":1,\"name\":\"John\"},{\"id\":2,\"name\":\"Jane\"}]");
        });
        
        router.get("/api/users/{id}", req -> {
            String id = req.pathParams.get("id");
            return RESTfulAPI.Response.ok("{\"id\":" + id + ",\"name\":\"User " + id + "\"}");
        });
        
        router.post("/api/users", req -> {
            return RESTfulAPI.Response.created("{\"id\":3,\"name\":\"New User\"}");
        });
        
        router.delete("/api/users/{id}", req -> {
            String id = req.pathParams.get("id");
            System.out.println("Deleted user: " + id);
            return new RESTfulAPI.Response(RESTfulAPI.HttpStatus.NO_CONTENT);
        });
        
        // Test requests
        System.out.println("\nTesting RESTful API:");
        
        RESTfulAPI.Request req1 = new RESTfulAPI.Request(RESTfulAPI.HttpMethod.GET, "/api/users");
        RESTfulAPI.Response resp1 = router.route(req1);
        System.out.println("GET /api/users: " + resp1.status.code + " - " + resp1.body);
        
        RESTfulAPI.Request req2 = new RESTfulAPI.Request(RESTfulAPI.HttpMethod.GET, "/api/users/123");
        RESTfulAPI.Response resp2 = router.route(req2);
        System.out.println("GET /api/users/123: " + resp2.status.code + " - " + resp2.body);
        
        RESTfulAPI.Request req3 = new RESTfulAPI.Request(RESTfulAPI.HttpMethod.POST, "/api/users")
                                                       .body("{\"name\":\"Alice\"}");
        RESTfulAPI.Response resp3 = router.route(req3);
        System.out.println("POST /api/users: " + resp3.status.code + " - " + resp3.body);
    }
    
    private static void demoGraphQLAPI() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 2: GraphQL API");
        System.out.println("=".repeat(80));
        
        GraphQLAPI.Schema schema = new GraphQLAPI.Schema();
        
        // Add query resolvers
        schema.addQuery("user", args -> {
            Map<String, Object> user = new HashMap<>();
            user.put("id", args.get("id"));
            user.put("name", "John Doe");
            user.put("email", "john@example.com");
            return user;
        });
        
        schema.addQuery("users", args -> {
            List<Map<String, Object>> users = new ArrayList<>();
            for (int i = 1; i <= 3; i++) {
                Map<String, Object> user = new HashMap<>();
                user.put("id", i);
                user.put("name", "User " + i);
                users.add(user);
            }
            return users;
        });
        
        // Add mutation resolvers
        schema.addMutation("createUser", args -> {
            Map<String, Object> user = new HashMap<>();
            user.put("id", 4);
            user.put("name", args.get("name"));
            return user;
        });
        
        // Test queries
        System.out.println("\nTesting GraphQL:");
        
        GraphQLAPI.Query query1 = new GraphQLAPI.Query("query { user }")
                                                .variable("id", "1");
        GraphQLAPI.QueryResult result1 = schema.execute(query1);
        System.out.println("Query result: " + result1.toJSON());
        
        GraphQLAPI.Query query2 = new GraphQLAPI.Query("mutation { createUser }")
                                                .variable("name", "Alice");
        GraphQLAPI.QueryResult result2 = schema.execute(query2);
        System.out.println("Mutation result: " + result2.toJSON());
    }
    
    private static void demoAPIVersioning() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 3: API Versioning");
        System.out.println("=".repeat(80));
        
        // URI Versioning
        System.out.println("\nURI Versioning:");
        APIVersioning.URIVersioning uriVersion = new APIVersioning.URIVersioning();
        
        RESTfulAPI.Router v1Router = new RESTfulAPI.Router();
        v1Router.get("/api/users", req -> RESTfulAPI.Response.ok("{\"version\":\"v1\"}"));
        
        RESTfulAPI.Router v2Router = new RESTfulAPI.Router();
        v2Router.get("/api/users", req -> RESTfulAPI.Response.ok("{\"version\":\"v2\",\"enhanced\":true}"));
        
        uriVersion.addVersion("v1", v1Router);
        uriVersion.addVersion("v2", v2Router);
        
        RESTfulAPI.Request req = new RESTfulAPI.Request(RESTfulAPI.HttpMethod.GET, "/api/users");
        System.out.println("V1: " + uriVersion.route("v1", req).body);
        System.out.println("V2: " + uriVersion.route("v2", req).body);
    }
    
    private static void demoAPISecurity() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 4: API Security");
        System.out.println("=".repeat(80));
        
        // JWT Authentication
        System.out.println("\nJWT Authentication:");
        APISecurity.JWTAuth jwtAuth = new APISecurity.JWTAuth();
        
        APISecurity.JWTAuth.Token token = jwtAuth.generateToken("user123", "admin");
        System.out.println("Generated JWT: " + token.getToken());
        System.out.println("Valid: " + jwtAuth.validateToken(token.getToken()));
        System.out.println("Claims: " + token.getClaims());
        
        // API Key Authentication
        System.out.println("\nAPI Key Authentication:");
        APISecurity.APIKeyAuth apiKeyAuth = new APISecurity.APIKeyAuth();
        
        String apiKey = apiKeyAuth.generateAPIKey("user123");
        System.out.println("Generated API Key: " + apiKey);
        System.out.println("Valid: " + apiKeyAuth.validateAPIKey(apiKey));
        
        // OAuth 2.0
        System.out.println("\nOAuth 2.0 Flow:");
        APISecurity.OAuth2 oauth = new APISecurity.OAuth2();
        
        APISecurity.OAuth2.AuthorizationCode authCode = oauth.authorize("client123", "user123");
        System.out.println("Authorization Code: " + authCode.code);
        
        APISecurity.OAuth2.AccessToken accessToken = oauth.exchangeCodeForToken(authCode.code, "client123");
        System.out.println("Access Token: " + accessToken.token);
        System.out.println("Valid: " + oauth.validateAccessToken(accessToken.token));
    }
    
    private static void demoAPIDocumentation() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 5: API Documentation (OpenAPI)");
        System.out.println("=".repeat(80));
        
        APIDocumentation.APISpec spec = new APIDocumentation.APISpec("User API", "1.0.0")
                                                           .description("API for user management");
        
        APIDocumentation.EndpointDoc getUserEndpoint = 
            new APIDocumentation.EndpointDoc("/users/{id}", "GET", "Get user by ID")
                .description("Retrieve a single user by their ID")
                .addParameter(new APIDocumentation.EndpointDoc.Parameter("id", "path", "integer", true))
                .addResponse(new APIDocumentation.EndpointDoc.Response(200, "Successful response"))
                .addResponse(new APIDocumentation.EndpointDoc.Response(404, "User not found"));
        
        spec.addEndpoint(getUserEndpoint);
        
        System.out.println("\nOpenAPI Specification:");
        System.out.println(spec.toOpenAPI());
    }
    
    private static void demoAPIMonitoring() throws InterruptedException {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("DEMO 6: API Monitoring");
        System.out.println("=".repeat(80));
        
        APIMonitoring.Metrics metrics = new APIMonitoring.Metrics();
        
        // Simulate API requests
        System.out.println("\nSimulating API requests...");
        for (int i = 0; i < 100; i++) {
            String endpoint = i % 3 == 0 ? "/api/users" : (i % 3 == 1 ? "/api/orders" : "/api/products");
            long responseTime = 50 + ThreadLocalRandom.current().nextInt(200);
            boolean success = ThreadLocalRandom.current().nextDouble() > 0.1; // 90% success rate
            
            metrics.recordRequest(endpoint, responseTime, success);
        }
        
        System.out.println("\n" + metrics.getReport());
        
        // Health Check
        System.out.println("\nHealth Check:");
        APIMonitoring.HealthCheck healthCheck = new APIMonitoring.HealthCheck();
        healthCheck.addCheck(() -> true); // Database check
        healthCheck.addCheck(() -> true); // Cache check
        healthCheck.addCheck(() -> true); // External API check
        
        APIMonitoring.HealthCheck.HealthStatus health = healthCheck.check();
        System.out.println(health.toJSON());
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("ALL API DESIGN PATTERNS DEMONSTRATED!");
        System.out.println("=".repeat(80));
    }
}
