# Security Testing & Performance Testing
> **Previous:** [Testcontainers](32-testcontainers.md) | **Next:** [Async and Events](34-async-events.md)

## Learning Objectives

By the end of this chapter, you will be able to:

1.  Test Spring Security configurations using `@WithMockUser`, `@WithAnonymousUser`, and `@WithUserDetails`
2.  Create custom security annotations like `@WithMockJwt` for JWT-authenticated tests
3.  Write tests for method security (`@PreAuthorize`, `@PostAuthorize`) and CORS/CSRF configurations
4.  Test OAuth2 client and resource server with `@WithMockOAuth2Client` and mocked JWT decoders
5.  Build JMeter test plans with thread groups, samplers, listeners, and assertions
6.  Write Gatling simulations with scenarios, checks, feeds, and injection profiles
7.  Profile Spring Boot endpoints under load Ã¢â‚¬â€ connection pools, query performance, latency percentiles
8.  Execute stress tests (ramp-up, spike, soak) with proper thresholds and resource monitoring
9.  Apply chaos engineering with Chaos Monkey for Spring Boot Ã¢â‚¬â€ latency, exceptions, service shutdown

---
## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|------------|-------------------|
| Security Testing → verify auth and authorization controls | Use `@WithMockUser`, `@WithAnonymousUser`, and request post-processors |
| Performance Testing → measure throughput, latency, and resource usage | Java Microbenchmark Harness (JMH) for micro-benchmarks |
| Load Testing → simulate concurrent users with Gatling | Scenario-based DSL for HTTP, WebSocket, and JMS load tests |

---
## Chapter Roadmap

```mermaid
flowchart TD
    A[Security and Performance Testing] --> B[Security Testing]
    A --> C[Performance Testing]
    A --> D[Load Testing]
    B --> B1[@WithMockUser]
    B --> B2[@WithAnonymousUser]
    B --> B3[Security test annotations]
    C --> C1[JMH benchmarks]
    C --> C2[JVM profiling]
    D --> D1[Gatling scenarios]
    D --> D2[Report analysis]
```

---
## Concept Comparison Table

| Concept | Description | Key Difference |
|---------|-------------|----------------|
| `@WithMockUser` | Creates user with given roles | No authentication against real provider |
| `@WithUserDetails` | Uses real `UserDetailsService` | Full authentication flow |
| JMH | Java microbenchmark harness | Method-level performance measurement |
| Gatling | Load testing tool | Scala-based scenario DSL |

---
## Quick Reference

| Element | Purpose | Example |
|---------|---------|---------|
| `@WithMockUser(roles="ADMIN")` | Security test annotation | Test endpoint authorization |
| `@WithAnonymousUser` | Test anonymous access | Unauthenticated request scenarios |
| `@Benchmark` | JMH benchmark method | `@Benchmark public void measureSomething() { ... }` |
| `gatling.Run` | Gatling simulation class | Extends `Simulation` with scenario definitions |

---
## Cross-Application Matrix

| Domain | Application | Use Case |
|--------|-------------|----------|
| API Endpoint Testing | `@WithMockUser` + `@WebMvcTest` | Verify role-based access on each endpoint |
| Algorithm Performance | JMH micro-benchmarks | Measure hashing, encryption, serialization throughput |
| User Load Simulation | Gatling | Test system behavior under 1000+ concurrent users |

---
## Chapter Quiz

1. Which annotation creates a test user with specific roles without contacting the auth provider? **Answer:** `@WithMockUser`
2. What is JMH? **Answer:** Java Microbenchmark Harness → for accurate method-level performance measurement
3. What tool uses a Scala-based DSL for HTTP load testing? **Answer:** Gatling

---

## 1. Security Testing with Annotations

![Security & Performance Testing Flow](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/33-security-perf-test.png)

Spring Security provides a set of testing annotations that simulate authenticated requests without starting a full OAuth2 provider or setting up a real identity store.

### 1.1 @WithMockUser

`@WithMockUser` creates a `SecurityContext` with a mocked `UsernamePasswordAuthenticationToken`. No actual authentication takes place.

```java
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.junit.jupiter.api.Test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

@WebMvcTest(UserController.class)
class SecurityAnnotationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithMockUser  // Default: username="user", roles={"USER"}, password="password"
    void testAuthenticatedUserCanAccess() throws Exception {
        mockMvc.perform(get("/api/users/me"))
            .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(username = "admin", roles = {"ADMIN"})
    void testAdminAccess() throws Exception {
        mockMvc.perform(get("/api/admin/users"))
            .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(username = "admin", authorities = {"ROLE_ADMIN", "SCOPE_read"})
    void testWithAuthorities() throws Exception {
        mockMvc.perform(get("/api/admin/users"))
            .andExpect(status().isOk());
    }

    @Test  // No @WithMockUser Ã¢â‚¬â€ unauthenticated
    void testUnauthenticatedAccess() throws Exception {
        mockMvc.perform(get("/api/users/me"))
            .andExpect(status().isUnauthorized());
    }
}
```

### 1.2 @WithAnonymousUser

Explicitly creates an anonymous `SecurityContext`. Useful when your code checks for `isAnonymous()`.

```java
import org.springframework.security.test.context.support.WithAnonymousUser;

@WebMvcTest(PublicController.class)
class AnonymousTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithAnonymousUser
    void testPublicEndpointWithAnonymous() throws Exception {
        mockMvc.perform(get("/api/public/info"))
            .andExpect(status().isOk())
            .andExpect(content().string("Public information"));
    }

    @Test
    @WithAnonymousUser
    void testAnonymousCannotAccessSecured() throws Exception {
        mockMvc.perform(get("/api/users/me"))
            .andExpect(status().isForbidden());
    }
}
```

### 1.3 @WithUserDetails

Loads a real user from your `UserDetailsService`. This tests both authentication and your `UserDetailsService` implementation.

```java
import org.springframework.security.test.context.support.WithUserDetails;

@WebMvcTest(UserController.class)
class UserDetailsTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithUserDetails("alice@example.com")  // Username passed to UserDetailsService.loadUserByUsername()
    void testLoadRealUser() throws Exception {
        mockMvc.perform(get("/api/users/me"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.email").value("alice@example.com"));
    }

    @Test
    @WithUserDetails(value = "admin@example.com", userDetailsServiceBeanName = "customUserDetailsService")
    void testWithCustomUserDetailsService() throws Exception {
        mockMvc.perform(get("/api/admin/users"))
            .andExpect(status().isOk());
    }
}
```

### 1.4 Custom @WithMockJwt

For JWT-authenticated tests, create a custom annotation that populates the `JwtAuthenticationToken`.

```java
// Custom annotation definition
import org.springframework.security.test.context.support.WithSecurityContext;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
@WithSecurityContext(factory = WithMockJwtSecurityContextFactory.class)
public @interface WithMockJwt {

    String subject() default "user";
    String email() default "user@example.com";
    String[] roles() default {};
    String[] scopes() default {};
}
```

```java
// Security context factory
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.test.context.support.WithSecurityContextFactory;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

public class WithMockJwtSecurityContextFactory
        implements WithSecurityContextFactory<WithMockJwt> {

    @Override
    public SecurityContext createSecurityContext(WithMockJwt annotation) {
        var jwt = Jwt.withTokenValue("mock-token")
            .header("alg", "RS256")
            .header("typ", "JWT")
            .subject(annotation.subject())
            .claim("email", annotation.email())
            .claim("scope", String.join(" ", annotation.scopes()))
            .issuedAt(Instant.now())
            .expiresAt(Instant.now().plusSeconds(3600))
            .build();

        var authorities = Stream.concat(
            Stream.of(annotation.roles()).map(r -> "ROLE_" + r),
            Stream.of(annotation.scopes()).map(s -> "SCOPE_" + s)
        ).map(SimpleGrantedAuthority::new).toList();

        var token = new JwtAuthenticationToken(jwt, authorities, annotation.subject());

        SecurityContext context = SecurityContextHolder.createEmptyContext();
        context.setAuthentication(token);
        return context;
    }
}
```

```java
// Using the custom annotation
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @GetMapping
    public List<String> getOrders(@AuthenticationPrincipal JwtAuthenticationToken token) {
        String userId = token.getToken().getSubject();
        return List.of("order-1", "order-2");
    }

    @PreAuthorize("hasAuthority('SCOPE_admin')")
    @PostMapping
    public String createOrder() {
        return "order-created";
    }
}

// Test
@WebMvcTest(OrderController.class)
class OrderControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithMockJwt(subject = "user123", scopes = {"read"})
    void testGetOrders() throws Exception {
        mockMvc.perform(get("/api/orders"))
            .andExpect(status().isOk());
    }

    @Test
    @WithMockJwt(subject = "admin", roles = {"ADMIN"}, scopes = {"admin"})
    void testCreateOrderWithAdmin() throws Exception {
        mockMvc.perform(post("/api/orders"))
            .andExpect(status().isOk());
    }

    @Test
    @WithMockJwt(subject = "user", scopes = {"read"})
    void testCreateOrderWithoutAdminScope_ShouldReturnForbidden() throws Exception {
        mockMvc.perform(post("/api/orders"))
            .andExpect(status().isForbidden());
    }
}
```

### 1.5 Testing Method Security

```java
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

@Service
public class DocumentService {

    @PreAuthorize("isAuthenticated()")
    public String getPublicDocument(Long id) {
        return "public-doc-" + id;
    }

    @PreAuthorize("hasRole('ADMIN')")
    public String getAdminDocument(Long id) {
        return "admin-doc-" + id;
    }

    @PreAuthorize("#owner == authentication.name")
    public String getOwnedDocument(Long id, String owner) {
        return "owned-doc-" + id;
    }

    @PreAuthorize("hasRole('ADMIN') or hasPermission(#id, 'com.example.Document', 'read')")
    public String getPermissionBasedDocument(Long id) {
        return "permission-doc-" + id;
    }

    @PostAuthorize("returnObject.owner == authentication.name")
    public Document getDocumentWithOwnerCheck(Long id) {
        return new Document(id, "content", "alice");
    }

    record Document(Long id, String content, String owner) {}
}
```

```java
@SpringBootTest
class MethodSecurityTest {

    @Autowired
    private DocumentService documentService;

    @Test
    @WithMockUser
    void testAuthenticatedCanAccess() {
        String result = documentService.getPublicDocument(1L);
        assertEquals("public-doc-1", result);
    }

    @Test
    @WithMockUser(roles = {"USER"})
    void testUserCannotAccessAdmin() {
        assertThrows(AccessDeniedException.class, () ->
            documentService.getAdminDocument(1L));
    }

    @Test
    @WithMockUser(roles = {"ADMIN"})
    void testAdminCanAccessAdmin() {
        String result = documentService.getAdminDocument(1L);
        assertEquals("admin-doc-1", result);
    }

    @Test
    @WithMockUser(username = "alice")
    void testOwnedDocumentByOwner() {
        String result = documentService.getOwnedDocument(1L, "alice");
        assertEquals("owned-doc-1", result);
    }

    @Test
    @WithMockUser(username = "bob")
    void testOwnedDocumentByNonOwner_ShouldDeny() {
        assertThrows(AccessDeniedException.class, () ->
            documentService.getOwnedDocument(1L, "alice"));
    }
}
```

### 1.6 Testing CORS

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins("https://trusted-frontend.com")
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*")
            .allowCredentials(true)
            .maxAge(3600);
    }
}
```

```java
@WebMvcTest(CorsController.class)
@AutoConfigureMockMvc
class CorsTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithMockUser
    void testCorsAllowedOrigin() throws Exception {
        mockMvc.perform(options("/api/orders")
                .header("Origin", "https://trusted-frontend.com")
                .header("Access-Control-Request-Method", "POST"))
            .andExpect(status().isOk())
            .andExpect(header().string("Access-Control-Allow-Origin",
                "https://trusted-frontend.com"))
            .andExpect(header().exists("Access-Control-Allow-Methods"));
    }

    @Test
    @WithMockUser
    void testCorsBlockedOrigin() throws Exception {
        mockMvc.perform(get("/api/orders")
                .header("Origin", "https://malicious-site.com"))
            .andExpect(header().doesNotExist("Access-Control-Allow-Origin"));
    }

    @Test
    @WithMockUser
    void testCorsBlockedMethod() throws Exception {
        mockMvc.perform(options("/api/orders")
                .header("Origin", "https://trusted-frontend.com")
                .header("Access-Control-Request-Method", "DELETE"))
            .andExpect(status().isOk())
            .andExpect(header().string("Access-Control-Allow-Methods",
                "GET, POST, PUT, DELETE"));
    }
}
```

### 1.7 CSRF Test Configuration

Spring Security enables CSRF protection by default for state-changing requests. In tests, you must either include the CSRF token or disable CSRF.

```java
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;

@WebMvcTest(CsrfController.class)
class CsrfTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithMockUser
    void testPostWithoutCsrf_ShouldReturn403() throws Exception {
        mockMvc.perform(post("/api/items"))
            .andExpect(status().isForbidden());  // Missing CSRF token
    }

    @Test
    @WithMockUser
    void testPostWithCsrf_ShouldSucceed() throws Exception {
        mockMvc.perform(post("/api/items")
                .with(csrf()))
            .andExpect(status().isOk());
    }

    @Test
    void testPutWithCsrf() throws Exception {
        mockMvc.perform(put("/api/items/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                    {"name": "updated-item"}
                    """)
                .with(csrf())
                .with(user("admin").roles("ADMIN")))
            .andExpect(status().isOk());
    }

    @Test
    void testDeleteWithInvalidCsrf() throws Exception {
        mockMvc.perform(delete("/api/items/1")
                .with(csrf().useInvalidToken()))
            .andExpect(status().isForbidden());
    }
}

// Disable CSRF for a specific test class
@SpringBootTest
@AutoConfigureMockMvc
class DisabledCsrfTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testPostWithoutCsrfWhenDisabled() throws Exception {
        mockMvc.perform(post("/api/public/contact"))
            .andExpect(status().isOk());
    }
}
```

> [!TIP]
> Create custom meta-annotations like `@WithAdminUser` that combine `@WithMockUser` with default role values to reduce repetition.

---

## 2. OAuth2 Test Support

### 2.1 @WithMockOAuth2Client

Simulates an OAuth2 client registration in the security context.

```java
import org.springframework.security.test.context.support.WithMockOAuth2Client;

@WebMvcTest(SocialLoginController.class)
class OAuth2ClientTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithMockOAuth2Client(
        clientId = "google",
        clientRegistrationId = "google",
        principalName = "user@google.com",
        scopes = {"email", "profile"}
    )
    void testGoogleOAuth2Login() throws Exception {
        mockMvc.perform(get("/api/social/login/google"))
            .andExpect(status().isOk());
    }

    @Test
    @WithMockOAuth2Client(
        clientId = "github",
        clientRegistrationId = "github",
        principalName = "github-user-123",
        scopes = {"read:user"}
    )
    void testGithubOAuth2Login() throws Exception {
        mockMvc.perform(get("/api/social/login/github"))
            .andExpect(status().isOk());
    }
}
```

### 2.2 OAuth2AuthorizedClientRepository Testing

When your code relies on `OAuth2AuthorizedClientRepository` or `OAuth2AuthorizedClientService`, use `mockOAuth2Test` to set up the mock.

```java
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.core.AuthorizationGrantType;

@SpringBootTest
class OAuth2ClientServiceTest {

    @MockBean
    private OAuth2AuthorizedClientService authorizedClientService;

    @Test
    @WithMockUser
    void testAuthorizedClientService() {
        var registration = ClientRegistration.withRegistrationId("google")
            .clientId("client-id")
            .clientSecret("client-secret")
            .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
            .redirectUri("{baseUrl}/login/oauth2/code/google")
            .scope("email", "profile")
            .authorizationUri("https://accounts.google.com/o/oauth2/v2/auth")
            .tokenUri("https://oauth2.googleapis.com/token")
            .clientName("Google")
            .build();

        var client = new OAuth2AuthorizedClient(registration, "user",
            new OAuth2AccessToken(OAuth2AccessToken.TokenType.BEARER,
                "mock-token", Instant.now(), Instant.now().plusSeconds(300)));

        when(authorizedClientService.loadAuthorizedClient("google", "user"))
            .thenReturn(client);

        var loaded = authorizedClientService.loadAuthorizedClient("google", "user");
        assertNotNull(loaded);
        assertEquals("mock-token", loaded.getAccessToken().getTokenValue());
    }
}
```

### 2.3 JWT Token Mocking

For resource servers that validate JWT tokens, mock the `JwtDecoder` to avoid calling the authorization server.

```java
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.Jwt;

@SpringBootTest
@AutoConfigureMockMvc
class JwtResourceServerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private JwtDecoder jwtDecoder;

    @Test
    void testAuthenticatedRequestWithMockedJwt() throws Exception {
        Jwt jwt = Jwt.withTokenValue("mock-token")
            .header("alg", "RS256")
            .header("typ", "JWT")
            .subject("user123")
            .claim("scope", "openid email read")
            .claim("email", "alice@example.com")
            .issuedAt(Instant.now())
            .expiresAt(Instant.now().plusSeconds(3600))
            .build();

        when(jwtDecoder.decode(anyString())).thenReturn(jwt);

        mockMvc.perform(get("/api/orders")
                .header("Authorization", "Bearer mock-token"))
            .andExpect(status().isOk());
    }

    @Test
    void testInvalidToken() throws Exception {
        when(jwtDecoder.decode(anyString()))
            .thenThrow(new JwtException("Invalid token"));

        mockMvc.perform(get("/api/orders")
                .header("Authorization", "Bearer invalid-token"))
            .andExpect(status().isUnauthorized());
    }

    @Test
    void testMissingToken() throws Exception {
        mockMvc.perform(get("/api/orders"))
            .andExpect(status().isUnauthorized());
    }
}
```

### 2.4 Testing Resource Server with JWT Authentication Token

Combining `@WithMockJwt` and a mocked `JwtDecoder` for full control.

```java
@WebMvcTest(OrderController.class)
class FullJwtTest {

    @Autowired
    private MockMvc mockMvc;

    // When using @WithMockJwt, we don't need JwtDecoder Ã¢â‚¬â€ the annotation
    // populates the SecurityContext directly. But if the controller
    // or a filter calls JwtDecoder, we still need the mock.

    @MockBean
    private JwtDecoder jwtDecoder;

    @Test
    @WithMockJwt(subject = "alice", scopes = {"read", "write"})
    void testReadScope() throws Exception {
        mockMvc.perform(get("/api/orders"))
            .andExpect(status().isOk());
    }

    @Test
    @WithMockJwt(subject = "bob", scopes = {"read"})
    void testReadScopeOnly_ShouldFailOnWrite() throws Exception {
        mockMvc.perform(post("/api/orders")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                    {"productId": "prod-1", "quantity": 1}
                    """)
                .with(csrf()))
            .andExpect(status().isForbidden());
    }

    @Test
    void testNoToken() throws Exception {
        mockMvc.perform(get("/api/orders"))
            .andExpect(status().isUnauthorized());
    }

    @Test
    void testExpiredToken() throws Exception {
        Jwt expiredJwt = Jwt.withTokenValue("expired")
            .header("alg", "RS256")
            .subject("alice")
            .issuedAt(Instant.now().minusSeconds(7200))
            .expiresAt(Instant.now().minusSeconds(3600))
            .build();

        when(jwtDecoder.decode(anyString())).thenThrow(
            new JwtValidationException("Token expired",
                List.of(new OAuth2Error("expired_token"))));

        mockMvc.perform(get("/api/orders")
                .header("Authorization", "Bearer expired"))
            .andExpect(status().isUnauthorized());
    }
}
```

---

## 3. Performance Testing with JMeter

Apache JMeter is a graphical, Java-based performance testing tool. It tests applications by simulating multiple concurrent users sending requests.

### 3.1 Test Plan Structure

A JMeter test plan follows this hierarchy:

```
Test Plan
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ User Defined Variables
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ HTTP Request Defaults
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ Thread Group (simulates users)
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ HTTP Request Sampler (GET /api/orders)
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ HTTP Header Manager
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ Assertions (Response Assertion)
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ Listeners (Summary Report, Aggregate Report)
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ Thread Group (admin users)
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ HTTP Request Sampler (POST /api/orders)
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ View Results Tree
```

### 3.2 Creating a JMeter Test Programmatically

```java
// JMeterTestPlan.java Ã¢â‚¬â€ creates a JMX test plan programmatically
import org.apache.jmeter.config.Arguments;
import org.apache.jmeter.config.gui.ArgumentsPanel;
import org.apache.jmeter.control.LoopController;
import org.apache.jmeter.control.gui.LoopControlPanel;
import org.apache.jmeter.engine.StandardJMeterEngine;
import org.apache.jmeter.protocol.http.control.Header;
import org.apache.jmeter.protocol.http.control.HeaderManager;
import org.apache.jmeter.protocol.http.sampler.HTTPSampler;
import org.apache.jmeter.protocol.http.util.HTTPArgument;
import org.apache.jmeter.reporters.ResultCollector;
import org.apache.jmeter.reporters.Summariser;
import org.apache.jmeter.save.SaveService;
import org.apache.jmeter.testelement.TestPlan;
import org.apache.jmeter.threads.ThreadGroup;
import org.apache.jmeter.util.JMeterUtils;
import org.apache.jorphan.collections.HashTree;
import java.io.FileOutputStream;

public class JmeterTestPlanGenerator {

    public static void main(String[] args) throws Exception {
        // Initialize JMeter
        JMeterUtils.setJMeterHome("C:/tools/apache-jmeter-5.6.3");
        JMeterUtils.loadJMeterProperties(
            "C:/tools/apache-jmeter-5.6.3/bin/jmeter.properties");
        JMeterUtils.initLocale();

        // Create Test Plan
        TestPlan testPlan = new TestPlan("Spring Boot Order API Load Test");
        testPlan.setProperty(TestPlan.TEST_COMMENTS,
            "Simulates 50 concurrent users placing orders");
        testPlan.setUserDefinedVariables(createUserDefinedVariables());

        // Thread Group: 50 users, ramp-up 10s, loop 5 times
        ThreadGroup threadGroup = createThreadGroup(50, 10, 5);

        // HTTP Request Defaults
        HTTPSampler defaultSampler = new HTTPSampler();
        defaultSampler.setName("HTTP Request Defaults");
        defaultSampler.setDomain("localhost");
        defaultSampler.setPort(8080);
        defaultSampler.setProtocol("http");
        defaultSampler.setPath("/api");

        // GET Orders Sampler
        HTTPSampler getOrdersSampler = new HTTPSampler();
        getOrdersSampler.setName("GET /api/orders");
        getOrdersSampler.setDomain("localhost");
        getOrdersSampler.setPort(8080);
        getOrdersSampler.setProtocol("http");
        getOrdersSampler.setPath("/api/orders");
        getOrdersSampler.setMethod("GET");
        getOrdersSampler.addArgument("page", "0");
        getOrdersSampler.addArgument("size", "20");

        // POST Order Sampler
        HTTPSampler createOrderSampler = new HTTPSampler();
        createOrderSampler.setName("POST /api/orders");
        createOrderSampler.setDomain("localhost");
        createOrderSampler.setPort(8080);
        createOrderSampler.setProtocol("http");
        createOrderSampler.setPath("/api/orders");
        createOrderSampler.setMethod("POST");
        createOrderSampler.addArgument("productId", "prod-${__Random(1,100)}");
        createOrderSampler.addArgument("quantity", "${__Random(1,5)}");

        // Header Manager
        HeaderManager headerManager = new HeaderManager();
        headerManager.add(new Header("Content-Type", "application/json"));
        headerManager.add(new Header("Authorization", "Bearer ${__property(jwt.token)}"));

        // Response Assertion
        org.apache.jmeter.assertions.ResponseAssertion assertion =
            new org.apache.jmeter.assertions.ResponseAssertion();
        assertion.setName("Assert Status 200");
        assertion.setTestFieldResponseCode();
        assertion.addTestString("200");
        assertion.setAssumeSuccess(false);

        // Loop Controller
        LoopController loopController = new LoopController();
        loopController.setLoops(5);
        loopController.setContinueForever(false);

        // Build test tree
        HashTree testPlanTree = new HashTree();
        HashTree threadGroupHashTree = testPlanTree.add(testPlan);
        HashTree threadGroupTree = threadGroupHashTree.add(threadGroup);

        threadGroupTree.add(getOrdersSampler);
        threadGroupTree.add(createOrderSampler);
        threadGroupTree.add(headerManager);
        threadGroupTree.add(assertion);

        // Save test plan
        SaveService.saveTree(testPlanTree,
            new FileOutputStream("order-api-load-test.jmx"));

        System.out.println("JMeter test plan saved to order-api-load-test.jmx");
    }

    private static Arguments createUserDefinedVariables() {
        Arguments args = new Arguments();
        args.addArgument("base_url", "localhost:8080");
        args.addArgument("jwt.token", "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...");
        return args;
    }

    private static ThreadGroup createThreadGroup(int users, int rampUp, int loops) {
        ThreadGroup group = new ThreadGroup();
        group.setName("Order API Users");
        group.setNumThreads(users);
        group.setRampUp(rampUp);
        group.setScheduler(true);
        group.setDuration(300);  // 5 minutes max
        group.setSamplerController(createLoopController(loops));
        return group;
    }

    private static LoopController createLoopController(int loops) {
        LoopController controller = new LoopController();
        controller.setLoops(loops);
        controller.setContinueForever(false);
        return controller;
    }
}
```

### 3.3 JMeter Listeners

```java
// Programmatic listener setup
import org.apache.jmeter.reporters.ResultCollector;
import org.apache.jmeter.reporters.Summariser;
import org.apache.jmeter.reporters.gui.SummariserGui;
import org.apache.jmeter.visualizers.SummaryReport;
import org.apache.jmeter.visualizers.ViewResultsFullVisualizer;

public class JmeterListeners {

    public static ResultCollector createSummaryReport(HashTree testPlanTree) {
        Summariser summariser = new Summariser("Summary");
        ResultCollector summaryCollector = new ResultCollector(summariser);
        summaryCollector.setName("Summary Report");
        summaryCollector.setFilename("results/summary-report.csv");
        testPlanTree.add(summaryCollector);
        return summaryCollector;
    }

    public static ResultCollector createAggregateReport(HashTree testPlanTree) {
        ResultCollector aggregateCollector = new ResultCollector();
        aggregateCollector.setName("Aggregate Report");
        aggregateCollector.setFilename("results/aggregate-report.csv");
        aggregateCollector.setProperty("collector", "aggregate");
        testPlanTree.add(aggregateCollector);
        return aggregateCollector;
    }

    public static ResultCollector createErrorLog(HashTree testPlanTree) {
        ResultCollector errorCollector = new ResultCollector();
        errorCollector.setName("Error Log");
        errorCollector.setFilename("results/errors.csv");
        errorCollector.setErrorLogging(true);
        testPlanTree.add(errorCollector);
        return errorCollector;
    }
}
```

### 3.4 Running JMeter from Command Line

```bash
# Non-GUI mode (headless Ã¢â‚¬â€ for CI/CD)
jmeter -n -t order-api-load-test.jmx -l results/raw-results.jtl -e -o results/report/

# Parameters
# -n        Non-GUI mode
# -t        Test plan file
# -l        Results log file
# -e        Generate HTML report
# -o        Output directory for HTML report

# With custom properties
jmeter -n -t order-api-load-test.jmx \
    -Jjwt.token=eyJhbGciOiJSUzI1NiJ9... \
    -Jbase_url=staging.example.com \
    -l results/raw.jtl -e -o results/report/
```

### 3.5 JMeter Assertions

```java
// JSON Assertion Ã¢â‚¬â€ validates JSON response body
import org.apache.jmeter.assertions.JSONPathAssertion;

public class JmeterAssertions {

    public static JSONPathAssertion createJsonAssertion() {
        JSONPathAssertion jsonAssertion = new JSONPathAssertion();
        jsonAssertion.setName("Validate JSON Response");
        jsonAssertion.setJsonPath("$.status");
        jsonAssertion.setExpectedValue("CONFIRMED");
        jsonAssertion.setJsonValidationBool(true);
        return jsonAssertion;
    }

    public static org.apache.jmeter.assertions.DurationAssertion createDurationAssertion() {
        var durationAssertion = new org.apache.jmeter.assertions.DurationAssertion();
        durationAssertion.setName("Max Response Time 2s");
        durationAssertion.setAllowedDuration(2000);  // 2 seconds
        return durationAssertion;
    }

    public static org.apache.jmeter.assertions.SizeAssertion createSizeAssertion() {
        var sizeAssertion = new org.apache.jmeter.assertions.SizeAssertion();
        sizeAssertion.setName("Response Size between 50-50000 bytes");
        sizeAssertion.setAllowedSizeRange(true);
        sizeAssertion.setSizeMin(50);
        sizeAssertion.setSizeMax(50000);
        return sizeAssertion;
    }
}
```

> [!WARNING]
> JMH benchmarks must include warmup iterations so the JIT compiler reaches steady state before measurement.

---

## 4. Performance Testing with Gatling

Gatling is a high-performance, code-first load testing tool written in Scala. It generates realistic load and produces rich HTML reports.

### 4.1 Basic Simulation

```scala
// src/test/scala/com/example/OrderApiSimulation.scala
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class OrderApiSimulation extends Simulation {

  // HTTP Protocol configuration
  val httpProtocol = http
    .baseUrl("http://localhost:8080")
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")
    .authorizationHeader("Bearer ${jwtToken}")
    .header("X-Request-Id", "${correlationId}")
    .check(status.is(200))

  // Scenario: browse orders
  val browseOrders = scenario("Browse Orders")
    .exec(http("Get Orders Page 0")
      .get("/api/orders?page=0&size=20")
      .check(
        status.is(200),
        jsonPath("$.totalElements").exists,
        jsonPath("$.content[*]").count.gt(0)
      )
    )
    .pause(1, 3)  // Think time between 1-3 seconds
    .exec(http("Get Order Details")
      .get("/api/orders/${orderId}")
      .check(
        status.is(200),
        jsonPath("$.status").is("CONFIRMED")
      )
    )

  // Scenario: create orders
  val createOrders = scenario("Create Orders")
    .feed(Iterator.continually(Map(
      "productId" -> ("prod-" + scala.util.Random.nextInt(100)),
      "quantity"  -> (scala.util.Random.nextInt(5) + 1)
    )))
    .exec(http("Create Order")
      .post("/api/orders")
      .body(StringBody(
        """{"productId": "${productId}", "quantity": ${quantity}}"""
      )).asJson
      .check(
        status.is(200),
        jsonPath("$.id").saveAs("orderId"),
        jsonPath("$.status").is("PENDING")
      )
    )

  // Scenario: admin operations
  val adminOperations = scenario("Admin Operations")
    .exec(http("Get All Orders")
      .get("/api/admin/orders")
      .check(
        status.is(200),
        jsonPath("$..status").findAll.transform(
          statuses => statuses.distinct
        )
      )
    )

  // Injection profile
  setUp(
    browseOrders.inject(
      nothingFor(4.seconds),          // Pause before starting
      atOnceUsers(10),                // 10 immediate users
      rampUsers(50).during(30.seconds), // 50 users over 30 seconds
      constantUsersPerSec(20).during(1.minute), // 20 users/sec for 1 min
      rampUsersPerSec(20).to(100).during(2.minutes), // Ramp to 100/sec
      stressPeakUsers(200).during(30.seconds) // Spike to 200 users
    ),
    createOrders.inject(
      rampUsers(30).during(30.seconds),
      constantUsersPerSec(10).during(2.minutes)
    ),
    adminOperations.inject(
      nothingFor(10.seconds),
      atOnceUsers(5),
      rampUsers(10).during(1.minute)
    )
  ).protocols(httpProtocol)
   .maxDuration(5.minutes)
   .assertions(
     global.responseTime.mean.lt(500),          // Mean < 500ms
     global.responseTime.max.lt(3000),          // Max < 3s
     global.successfulRequests.percent.gt(99),  // 99%+ success rate
     forAll.responseTime.percentile3.lt(2000)   // p95 < 2s
   )
}
```

### 4.2 Advanced Simulation with Feeders

```scala
// src/test/scala/com/example/AdvancedOrderSimulation.scala
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._
import io.gatling.jsonpath.JsonPath
import scala.concurrent.duration._

class AdvancedOrderSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("http://localhost:8080")
    .inferHtmlResources()
    .userAgentHeader("Gatling/PerformanceTest")
    .disableFollowRedirect
    .disableCaching

  // CSV feeder Ã¢â‚¬â€ read test data from file
  val productFeeder = csv("data/products.csv").circular
  val userFeeder = csv("data/users.csv").random
  val tokenFeeder = Iterator.continually(Map(
    "authToken" -> ("Bearer " + generateToken())
  ))

  // Scenario with feeder
  val orderFlow = scenario("Complete Order Flow")
    .feed(userFeeder)
    .feed(tokenFeeder)
    .feed(productFeeder)
    .exec(http("Login")
      .post("/api/auth/login")
      .body(StringBody(
        """{"email": "${email}", "password": "${password}"}"""
      )).asJson
      .check(
        jsonPath("$.accessToken").saveAs("jwtToken")
      )
    )
    .exec(http("Browse Products")
      .get("/api/products")
      .header("Authorization", "Bearer ${jwtToken}")
      .check(
        jsonPath("$[0].id").saveAs("productId")
      )
    )
    .exec(http("Add to Cart")
      .post("/api/cart/items")
      .header("Authorization", "Bearer ${jwtToken}")
      .body(StringBody(
        """{"productId": "${productId}", "quantity": ${quantity}}"""
      )).asJson
    )
    .exec(http("Checkout")
      .post("/api/orders")
      .header("Authorization", "Bearer ${jwtToken}")
      .body(StringBody(
        """{"cartId": "${cartId}", "shippingAddress": "${address}"}"""
      )).asJson
      .check(
        jsonPath("$.id").saveAs("orderId")
      )
    )
    .exec(session => {
      println(s"Order completed: ${session("orderId").as[String]}")
      session
    })

  // Multiple injection profiles
  setUp(
    orderFlow.inject(
      incrementUsersPerSec(10.0)
        .times(5)        // 5 steps: 10, 20, 30, 40, 50 users/sec
        .eachLevelLasting(30.seconds)
        .separatedByRampsLasting(10.seconds)
        .startingFrom(10)
    )
  ).protocols(httpProtocol)
   .assertions(
     global.failedRequests.count.lt(5)
   )
}

// Helper method outside simulation
object generateToken {
  def apply(): String = {
    // In real tests, call the auth endpoint
    java.util.UUID.randomUUID().toString
  }
}
```

### 4.3 Gatling Maven Plugin Configuration

```xml
<!-- pom.xml Ã¢â‚¬â€ Gatling Maven plugin -->
<plugin>
    <groupId>io.gatling</groupId>
    <artifactId>gatling-maven-plugin</artifactId>
    <version>4.7.0</version>
    <configuration>
        <simulationClass>com.example.OrderApiSimulation</simulationClass>
        <jvmArgs>
            <jvmArg>-Xmx2g</jvmArg>
            <jvmArg>-Dgatling.http.ssl.trustStoreType=JKS</jvmArg>
        </jvmArgs>
        <runDescription>Order API load test - 200 concurrent users</runDescription>
    </configuration>
</plugin>
```

```bash
# Run Gatling test
mvn gatling:test \
    -Dgatling.simulationClass=com.example.OrderApiSimulation \
    -DbaseUrl=http://staging.example.com:8080

# Output: target/gatling/orderapisimulation-{timestamp}/index.html
```

### 4.4 JMeter vs Gatling Ã¢â‚¬â€ Comparison

| Feature | JMeter | Gatling |
|---------|--------|---------|
| **Interface** | GUI + XML (JMX) | Code-first (Scala) |
| **Learning curve** | Low (visual) | Medium (Scala DSL) |
| **Scripting** | GUI drag-drop | Scala code |
| **Reports** | HTML via -e flag | Rich HTML with graphs |
| **Performance** | Slower (Swing UI overhead) | Faster (Akka-based) |
| **Distribution** | Built-in distributed mode | Requires separate tools |
| **CI/CD integration** | Command line | Maven/Gradle/sbt |
| **Protocols** | Extensive (HTTP, JDBC, JMS, FTP, etc.) | HTTP, WebSocket, JMS, MQTT |
| **Correlation** | Manual (regex extractors) | Automatic with checks |
| **Real-time metrics** | Basic | Built-in |
| **Best for** | GUI-oriented teams, complex protocols | Developer teams, CI pipelines |

---

## 5. Load Testing Spring Boot

### 5.1 Profiling Endpoints Under Load

```java
// ProductController to be load-tested
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductRepository productRepository;
    private final PriceCalculationService priceService;

    public ProductController(ProductRepository productRepository,
                             PriceCalculationService priceService) {
        this.productRepository = productRepository;
        this.priceService = priceService;
    }

    @GetMapping
    public Page<ProductDto> getProducts(
            @PageableDefault(size = 20) Pageable pageable,
            @RequestParam(required = false) String category) {

        Page<Product> products;
        if (category != null) {
            products = productRepository.findByCategory(category, pageable);
        } else {
            products = productRepository.findAll(pageable);
        }

        return products.map(product -> new ProductDto(
            product.getId(),
            product.getName(),
            priceService.calculateFinalPrice(product.getPrice(), product.getDiscount()),
            product.getCategory()
        ));
    }

    @GetMapping("/{id}")
    public ProductDto getProduct(@PathVariable Long id) {
        Product product = productRepository.findByIdWithReviews(id)
            .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Product not found"));
        return new ProductDto(product, product.getReviews());
    }

    @PostMapping
    public ProductDto createProduct(@Valid @RequestBody CreateProductRequest request) {
        Product product = new Product(request.name(), request.price(), request.category());
        product = productRepository.save(product);
        return new ProductDto(product);
    }
}
```

### 5.2 Connection Pool Performance

Monitor HikariCP connection pool metrics during load tests.

```java
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.time.Duration;

@Configuration
class ConnectionPoolConfig {

    @Bean
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:postgresql://localhost:5432/orderdb");
        config.setUsername("app");
        config.setPassword("app");
        config.setDriverClassName("org.postgresql.Driver");

        // Connection pool tuning
        config.setMaximumPoolSize(50);          // Max connections
        config.setMinimumIdle(10);              // Keep 10 idle
        config.setIdleTimeout(Duration.ofMinutes(5).toMillis());
        config.setConnectionTimeout(Duration.ofSeconds(5).toMillis());  // Wait 5s for connection
        config.setMaxLifetime(Duration.ofMinutes(30).toMillis());
        config.setValidationTimeout(Duration.ofSeconds(2).toMillis());
        config.setConnectionTestQuery("SELECT 1");
        config.setPoolName("OrderAppPool");

        // Metrics
        config.setMetricsTrackerFactory(new MicrometerMetricsTrackerFactory());

        return new HikariDataSource(config);
    }
}
```

### 5.3 Database Query Performance Under Load

```java
import io.micrometer.core.annotation.Timed;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Timed(value = "db.query.findByCategory", extraTags = {"repo", "ProductRepository"})
    Page<Product> findByCategory(String category, Pageable pageable);

    @Query("""
        SELECT p FROM Product p
        LEFT JOIN FETCH p.reviews
        LEFT JOIN FETCH p.category
        WHERE p.id = :id
        """)
    @Timed(value = "db.query.findByIdWithReviews", extraTags = {"repo", "ProductRepository"})
    Optional<Product> findByIdWithReviews(@Param("id") Long id);

    @Query(value = """
        SELECT p FROM Product p
        WHERE lower(p.name) LIKE lower(concat('%', :keyword, '%'))
        ORDER BY p.salesCount DESC
        """)
    @Timed(value = "db.query.searchByName")
    Page<Product> searchByName(@Param("keyword") String keyword, Pageable pageable);
}
```

### 5.4 Measuring Latency Percentiles

```java
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;
import org.springframework.web.filter.OncePerRequestFilter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class LatencyMetricsFilter extends OncePerRequestFilter {

    private final MeterRegistry meterRegistry;

    public LatencyMetricsFilter(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) {

        Timer.Sample sample = Timer.start(meterRegistry);

        try {
            filterChain.doFilter(request, response);
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            String path = request.getRequestURI();
            String method = request.getMethod();
            int status = response.getStatus();

            sample.stop(Timer.builder("http.request.latency")
                .description("HTTP request latency")
                .tags("method", method, "path", path, "status", String.valueOf(status))
                .publishPercentiles(0.5, 0.75, 0.90, 0.95, 0.99, 0.999)
                .publishPercentileHistogram()
                .register(meterRegistry));
        }
    }
}
```

```yaml
# application.yml Ã¢â‚¬â€ Micrometer percentile config
management:
  metrics:
    distribution:
      percentiles-histogram:
        http.request.latency: true
      percentiles:
        http.request.latency: 0.5, 0.75, 0.90, 0.95, 0.99, 0.999
      slo:
        http.request.latency: 10ms, 50ms, 100ms, 200ms, 500ms, 1s, 2s, 5s
```

### 5.5 Spring Boot Actuator Endpoints for Load Monitoring

```properties
# application.properties Ã¢â‚¬â€ expose all metrics during load test
management.endpoints.web.exposure.include=health,metrics,prometheus,threaddump,heapdump
management.endpoint.metrics.enabled=true
management.metrics.export.prometheus.enabled=true

# Expose HikariCP metrics
spring.datasource.hikari.metrics-tracker-factory=com.zaxxer.hikari.metrics.prometheus.PrometheusMetricsTrackerFactory
```

```bash
# During a load test, watch these endpoints:

# Active connections
curl localhost:8080/actuator/metrics/hikaricp.connections.active

# Thread pool status
curl localhost:8080/actuator/metrics/jvm.threads.live

# Database connections waiting
curl localhost:8080/actuator/metrics/hikaricp.connections.pending

# HTTP request throughput
curl localhost:8080/actuator/metrics/http.server.requests

# Heap memory
curl localhost:8080/actuator/metrics/jvm.memory.used
```

> [!NOTE]
> Always run load tests against a staging environment that mirrors production → results from a developer laptop are not meaningful.

---

## 6. Stress Testing

Stress testing pushes the system beyond normal capacity to find breaking points.

### 6.1 Ramp-Up Test

Gradually increases load to find the saturation point.

```java
// Gatling ramp-up simulation
import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class RampUpSimulation extends Simulation {

    HttpProtocolBuilder httpProtocol = http
        .baseUrl("http://localhost:8080")
        .acceptHeader("application/json");

    ScenarioBuilder rampUp = scenario("Ramp-Up Test")
        .exec(http("GET /api/orders")
            .get("/api/orders?page=0&size=20")
            .check(status().is(200)))
        .pause(1);

    {
        setUp(
            rampUp.inject(
                rampUsersPerSec(1).to(500)
                    .during(Duration.ofMinutes(10))  // 1 Ã¢â€ â€™ 500 req/sec over 10 min
            )
        ).protocols(httpProtocol)
         .assertions(
             global().responseTime().max().lt(5000),  // Fail if max > 5s
             global().successfulRequests().percent().gt(95.0)
         );
    }
}
```

### 6.2 Spike Test

Sudden burst of traffic Ã¢â‚¬â€ tests auto-scaling and circuit breakers.

```java
// Gatling spike simulation
public class SpikeSimulation extends Simulation {

    HttpProtocolBuilder httpProtocol = http
        .baseUrl("http://localhost:8080")
        .acceptHeader("application/json");

    ScenarioBuilder spike = scenario("Spike Test")
        .exec(http("GET /api/products")
            .get("/api/products")
            .check(status().is(200)));

    {
        setUp(
            spike.inject(
                nothingFor(2.minutes),                    // Baseline steady state
                atOnceUsers(1000),                         // Immediate 1000 users
                nothingFor(30.seconds),                    // Observe recovery
                atOnceUsers(2000),                         // Bigger spike
                nothingFor(1.minutes),                     // Recovery
                rampUsers(300).during(10.seconds)          // Mini spike
            )
        ).protocols(httpProtocol)
         .maxDuration(5.minutes);
    }
}
```

### 6.3 Soak Test (Endurance)

Sustained load over hours to detect memory leaks and resource exhaustion.

```java
// Gatling soak simulation
public class SoakSimulation extends Simulation {

    HttpProtocolBuilder httpProtocol = http
        .baseUrl("http://localhost:8080")
        .acceptHeader("application/json");

    ScenarioBuilder steadyLoad = scenario("Soak Test Ã¢â‚¬â€ 8 hours sustained")
        .exec(http("GET /api/health")
            .get("/api/health")
            .check(status().is(200)))
        .pause(2, 5);  // Random pause between 2-5 seconds

    {
        setUp(
            steadyLoad.inject(
                constantUsersPerSec(100).during(8.hours)  // 100 req/sec for 8 hours
            )
        ).protocols(httpProtocol)
         .assertions(
             global().responseTime().mean().lt(1000),
             global().failedRequests().count().lt(100)
         );
    }
}
```

### 6.4 Stress Test Thresholds

```java
// Threshold configuration
public class StressTestThresholds {

    // Define thresholds as constants
    public static final int MAX_P95_LATENCY_MS = 2000;
    public static final int MAX_P99_LATENCY_MS = 5000;
    public static final int MAX_ERROR_RATE_PERCENT = 1;
    public static final int MIN_THROUGHPUT_RPS = 100;
    public static final int MAX_CPU_PERCENT = 80;
    public static final int MAX_MEMORY_USAGE_MB = 1024;
    public static final int MAX_DB_CONNECTION_POOL_ACTIVE = 45;

    // Gatling assertions from Java
    public static PopulationBuilder applyAssertions(SetUp setUp) {
        return setUp.assertions(
            global().responseTime().percentile(95).lt(MAX_P95_LATENCY_MS),
            global().responseTime().percentile(99).lt(MAX_P99_LATENCY_MS),
            global().failedRequests().percent().lt(MAX_ERROR_RATE_PERCENT),
            global().requestsPerSec().gt(MIN_THROUGHPUT_RPS)
        );
    }
}

// Usage in Gatling Java API
/*
setUp(scenario.inject(...))
    .assertions(
        global().responseTime().percentile3().lt(2000),  // p95 < 2s
        global().responseTime().percentile4().lt(5000),  // p99 < 5s
        global().failedRequests().percent().lt(1.0),     // < 1% errors
        global().requestsPerSec().gt(100)                // > 100 req/sec
    );
*/
```

### 6.5 Resource Monitoring During Load

```java
import java.lang.management.ManagementFactory;
import java.lang.management.MemoryMXBean;
import java.lang.management.OperatingSystemMXBean;
import java.lang.management.ThreadMXBean;

@Component
public class ResourceMonitor {

    private final MemoryMXBean memoryMXBean = ManagementFactory.getMemoryMXBean();
    private final OperatingSystemMXBean osBean = ManagementFactory.getOperatingSystemMXBean();
    private final ThreadMXBean threadMXBean = ManagementFactory.getThreadMXBean();

    private final MeterRegistry meterRegistry;

    public ResourceMonitor(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
    }

    @Scheduled(fixedRate = 1000)
    public void monitorResources() {
        // JVM heap memory
        var heap = memoryMXBean.getHeapMemoryUsage();
        meterRegistry.gauge("jvm.memory.heap.used", heap.getUsed());
        meterRegistry.gauge("jvm.memory.heap.max", heap.getMax());
        meterRegistry.gauge("jvm.memory.heap.percent",
            (double) heap.getUsed() / heap.getMax() * 100);

        // Non-heap memory
        var nonHeap = memoryMXBean.getNonHeapMemoryUsage();
        meterRegistry.gauge("jvm.memory.nonheap.used", nonHeap.getUsed());

        // Thread count
        meterRegistry.gauge("jvm.threads.live", threadMXBean.getThreadCount());
        meterRegistry.gauge("jvm.threads.daemon", threadMXBean.getDaemonThreadCount());
        meterRegistry.gauge("jvm.threads.peak", threadMXBean.getPeakThreadCount());

        // CPU load
        if (osBean instanceof com.sun.management.OperatingSystemMXBean sunOsBean) {
            meterRegistry.gauge("system.cpu.load", sunOsBean.getCpuLoad());
            meterRegistry.gauge("process.cpu.load", sunOsBean.getProcessCpuLoad());
            meterRegistry.gauge("system.memory.free",
                sunOsBean.getFreePhysicalMemorySize());
            meterRegistry.gauge("system.memory.total",
                sunOsBean.getTotalPhysicalMemorySize());
        }
    }

    @Scheduled(fixedRate = 5000)
    public void logResourceSnapshot() {
        var heap = memoryMXBean.getHeapMemoryUsage();
        var usedMB = heap.getUsed() / (1024.0 * 1024.0);
        var maxMB = heap.getMax() / (1024.0 * 1024.0);

        log.info("Heap: {:.1f}/{:.1f} MB | Threads: {} | CPU: {:.1f}%",
            usedMB, maxMB,
            threadMXBean.getThreadCount(),
            getProcessCpuLoad() * 100);
    }

    private double getProcessCpuLoad() {
        if (osBean instanceof com.sun.management.OperatingSystemMXBean sunOsBean) {
            return sunOsBean.getProcessCpuLoad();
        }
        return -1;
    }
}
```

---

## 7. Chaos Testing

Chaos engineering tests system resilience by introducing failures in a controlled way.

### 7.1 Chaos Monkey for Spring Boot

Chaos Monkey is a Spring Boot actuator module that injects faults (latency, exceptions, service shutdown) into running applications.

```xml
<!-- pom.xml -->
<dependency>
    <groupId>de.codecentric</groupId>
    <artifactId>chaos-monkey-spring-boot</artifactId>
    <version>3.1.0</version>
    <scope>test</scope>
</dependency>
```

```properties
# application-chaos.properties Ã¢â‚¬â€ enable Chaos Monkey
# Enable Chaos Monkey
chaos.monkey.enabled=true

# Assault configuration
chaos.monkey.assaults.level=1
chaos.monkey.assaults.latency-active=true
chaos.monkey.assaults.latency-range-start=1000
chaos.monkey.assaults.latency-range-end=5000
chaos.monkey.assaults.exceptions-active=true
chaos.monkey.assaults.kill-application-active=true
chaos.monkey.assaults.watched-custom-services=com.example.demo.*

# Watcher configuration
chaos.monkey.watcher.controller=true
chaos.monkey.watcher.rest-controller=true
chaos.monkey.watcher.service=true
chaos.monkey.watcher.repository=true
chaos.monkey.watcher.component=true
```

### 7.2 Chaos Engineering Principles

```java
// ChaosExperiment.java Ã¢â‚¬â€ programmatic chaos experiment
import org.springframework.web.client.RestTemplate;

public class ChaosExperiment {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String baseUrl = "http://localhost:8080";

    public record ExperimentResult(
        String name,
        boolean passed,
        long p95LatencyMs,
        double errorRate,
        String details
    ) {}

    // Experiment 1: Inject latency into a single endpoint
    public ExperimentResult testLatencyInjection() {
        System.out.println("=== Experiment: Inject 3s latency into GET /api/orders ===");

        // Before chaos
        long beforeAvg = measureAverageLatency("/api/orders", 100);
        System.out.println("Baseline avg latency: " + beforeAvg + "ms");

        // Enable latency assault via Chaos Monkey Actuator
        restTemplate.postForEntity(
            baseUrl + "/actuator/chaosmonkey/assaults",
            Map.of(
                "latencyActive", true,
                "latencyRangeStart", 3000,
                "latencyRangeEnd", 3000,
                "level", 1
            ),
            Void.class
        );

        // Wait for assault to activate
        sleep(2000);

        // During chaos
        long duringAvg = measureAverageLatency("/api/orders", 50);
        System.out.println("During chaos avg latency: " + duringAvg + "ms");

        // Disable assault
        restTemplate.postForEntity(
            baseUrl + "/actuator/chaosmonkey/assaults",
            Map.of("latencyActive", false),
            Void.class
        );

        // Verify recovery
        long afterAvg = measureAverageLatency("/api/orders", 50);
        System.out.println("After recovery avg latency: " + afterAvg + "ms");

        return new ExperimentResult("Latency Injection",
            duringAvg > beforeAvg + 2000, duringAvg, 0,
            "Baseline: " + beforeAvg + "ms Ã¢â€ â€™ During: " + duringAvg + "ms Ã¢â€ â€™ Recovery: " + afterAvg + "ms");
    }

    // Experiment 2: Inject exceptions
    public ExperimentResult testExceptionInjection() {
        System.out.println("=== Experiment: Inject exceptions into POST /api/orders ===");

        // Baseline
        double beforeErrors = measureErrorRate("/api/orders", "POST", 50);
        System.out.println("Baseline error rate: " + (beforeErrors * 100) + "%");

        // Enable exception assault
        restTemplate.postForEntity(
            baseUrl + "/actuator/chaosmonkey/assaults",
            Map.of(
                "exceptionsActive", true,
                "level", 5,  // High probability
                "watchedCustomServices", List.of("com.example.demo.service.OrderService")
            ),
            Void.class
        );

        sleep(1000);

        // During chaos
        double duringErrors = measureErrorRate("/api/orders", "POST", 100);
        System.out.println("During chaos error rate: " + (duringErrors * 100) + "%");

        // Disable
        restTemplate.postForEntity(
            baseUrl + "/actuator/chaosmonkey/assaults",
            Map.of("exceptionsActive", false),
            Void.class
        );

        return new ExperimentResult("Exception Injection",
            duringErrors > beforeErrors, 0, duringErrors,
            "Error rate: " + (beforeErrors * 100) + "% Ã¢â€ â€™ " + (duringErrors * 100) + "%");
    }

    // Experiment 3: Kill application (test graceful shutdown + restart)
    public ExperimentResult testKillApplication() {
        System.out.println("=== Experiment: Kill application ===");

        // Enable kill
        restTemplate.postForEntity(
            baseUrl + "/actuator/chaosmonkey/assaults",
            Map.of("killApplicationActive", true),
            Void.class
        );

        sleep(5000);

        // Application should have been killed
        try {
            restTemplate.getForEntity(baseUrl + "/actuator/health", String.class);
            return new ExperimentResult("Kill Application", false, 0, 0,
                "Application did not die Ã¢â‚¬â€ kill failed");
        } catch (Exception e) {
            return new ExperimentResult("Kill Application", true, 0, 1.0,
                "Application died as expected");
        }
    }

    private long measureAverageLatency(String path, int samples) {
        long total = 0;
        int success = 0;
        for (int i = 0; i < samples; i++) {
            try {
                long start = System.currentTimeMillis();
                restTemplate.getForEntity(baseUrl + path, String.class);
                total += System.currentTimeMillis() - start;
                success++;
            } catch (Exception e) {
                // Ignore Ã¢â‚¬â€ we're measuring latency, error handling is separate
            }
        }
        return success > 0 ? total / success : -1;
    }

    private double measureErrorRate(String path, String method, int samples) {
        int errors = 0;
        for (int i = 0; i < samples; i++) {
            try {
                if ("POST".equals(method)) {
                    restTemplate.postForEntity(baseUrl + path,
                        Map.of("productId", "test", "quantity", 1), String.class);
                } else {
                    restTemplate.getForEntity(baseUrl + path, String.class);
                }
            } catch (Exception e) {
                errors++;
            }
        }
        return (double) errors / samples;
    }

    private void sleep(long ms) {
        try { Thread.sleep(ms); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
    }

    public static void main(String[] args) {
        ChaosExperiment experiment = new ChaosExperiment();

        var latencyResult = experiment.testLatencyInjection();
        System.out.println(latencyResult);

        var exceptionResult = experiment.testExceptionInjection();
        System.out.println(exceptionResult);

        // Don't run kill in automated tests unless you have a restart mechanism
        // var killResult = experiment.testKillApplication();
    }
}
```

### 7.3 Chaos Monkey Configuration for Different Assault Types

```java
// ChaosMonkeyConfig.java Ã¢â‚¬â€ programmatic configuration
import de.codecentric.spring.boot.chaos.monkey.configuration.AssaultProperties;
import de.codecentric.spring.boot.chaos.monkey.configuration.ChaosMonkeySettings;
import de.codecentric.spring.boot.chaos.monkey.configuration.WatcherProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("chaos-test")
public class ChaosMonkeyConfig {

    @Bean
    public ChaosMonkeySettings chaosMonkeySettings() {
        var assaultProperties = new AssaultProperties();
        assaultProperties.setLevel(3);
        assaultProperties.setLatencyRangeStart(2000);
        assaultProperties.setLatencyRangeEnd(8000);
        assaultProperties.setLatencyActive(true);
        assaultProperties.setExceptionsActive(true);
        assaultProperties.setKillApplicationActive(false);
        assaultProperties.setMemoryActive(true);
        assaultProperties.setMemoryMillisecondsHold(5000);
        assaultProperties.setRuntimeAssaultCronExpression("OFF");

        var watcherProperties = new WatcherProperties();
        watcherProperties.setController(true);
        watcherProperties.setRestController(true);
        watcherProperties.setService(true);
        watcherProperties.setRepository(true);

        var settings = new ChaosMonkeySettings();
        settings.setChaosMonkeyProperties(
            new de.codecentric.spring.boot.chaos.monkey.configuration.ChaosMonkeyProperties());
        settings.getChaosMonkeyProperties().setEnabled(true);
        settings.setAssaultProperties(assaultProperties);
        settings.setWatcherProperties(watcherProperties);

        return settings;
    }
}
```

### 7.4 Chaos Experiment Framework Ã¢â‚¬â€ Automated Resilience Tests

```java
// AbstractChaosTest.java Ã¢â‚¬â€ base class for resilience tests
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("chaos-test")
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public abstract class AbstractChaosTest {

    @Autowired
    protected TestRestTemplate restTemplate;

    @Autowired
    private ResilienceProperties resilienceProperties;

    protected record ResilienceAssertion(
        String endpoint,
        int expectedMaxLatencyMs,
        double expectedMinSuccessRate,
        int concurrentCalls,
        Duration testDuration
    ) {}

    protected void assertEndpointResilient(ResilienceAssertion assertion) {
        var executor = Executors.newFixedThreadPool(assertion.concurrentCalls());
        var futures = new ArrayList<java.util.concurrent.Future<ResponseEntity<String>>>();
        var startTime = System.currentTimeMillis();

        // Submit concurrent requests
        for (int i = 0; i < assertion.concurrentCalls(); i++) {
            futures.add(executor.submit(() ->
                restTemplate.getForEntity(assertion.endpoint(), String.class)));
        }

        executor.shutdown();
        try {
            boolean completed = executor.awaitTermination(
                assertion.testDuration().toSeconds(), TimeUnit.SECONDS);
            assertThat(completed).as("All requests completed within timeout").isTrue();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        // Analyze results
        int successCount = 0;
        int failureCount = 0;
        long totalLatency = 0;
        long maxLatency = 0;
        List<Long> latencies = new ArrayList<>();

        for (var future : futures) {
            try {
                long start = System.nanoTime();
                var response = future.get();
                long latency = Duration.ofNanos(System.nanoTime() - start).toMillis();

                if (response.getStatusCode().is2xxSuccessful()) {
                    successCount++;
                    totalLatency += latency;
                    latencies.add(latency);
                    maxLatency = Math.max(maxLatency, latency);
                } else {
                    failureCount++;
                }
            } catch (Exception e) {
                failureCount++;
            }
        }

        double successRate = (double) successCount / assertion.concurrentCalls();
        double avgLatency = successCount > 0 ? (double) totalLatency / successCount : 0;

        // Sort for percentile calculation
        java.util.Collections.sort(latencies);
        int p95Index = (int) (latencies.size() * 0.95);
        long p95Latency = p95Index < latencies.size() ? latencies.get(p95Index) : 0;

        System.out.printf("""
            
            === Resilience Test Results for %s ===
            Total calls:     %d
            Success:         %d (%.1f%%)
            Failures:        %d (%.1f%%)
            Avg latency:     %.0f ms
            Max latency:     %d ms
            p95 latency:     %d ms
            Thresholds:      maxLatency=%dms, minSuccess=%.0f%%
            %n""",
            assertion.endpoint(),
            assertion.concurrentCalls(),
            successCount, successRate * 100,
            failureCount, (1 - successRate) * 100,
            avgLatency, maxLatency, p95Latency,
            assertion.expectedMaxLatencyMs(),
            assertion.expectedMinSuccessRate() * 100);

        // Assert against thresholds
        assertThat(successRate)
            .as("Success rate %.1f%% >= %.1f%%", successRate * 100,
                assertion.expectedMinSuccessRate() * 100)
            .isGreaterThanOrEqualTo(assertion.expectedMinSuccessRate());

        assertThat(p95Latency)
            .as("p95 latency %dms <= %dms", p95Latency, assertion.expectedMaxLatencyMs())
            .isLessThanOrEqualTo(assertion.expectedMaxLatencyMs());
    }
}
```

### 7.5 Circuit Breaker Resilience Under Chaos

```java
// ResilienceProperties.java
@ConfigurationProperties(prefix = "resilience")
@Component
public class ResilienceProperties {
    private int maxLatencyMs = 5000;
    private double minSuccessRate = 0.95;
    private int concurrentCalls = 50;
    private Duration testDuration = Duration.ofSeconds(30);

    // Getters and setters
}

// application-chaos.yml
/*
resilience:
  max-latency-ms: 5000
  min-success-rate: 0.95
  concurrent-calls: 100
  test-duration: 60s
*/
```

```java
// OrderServiceResilienceTest.java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("chaos-test")
class OrderServiceResilienceTest extends AbstractChaosTest {

    @Autowired
    private OrderService orderService;

    @Test
    void testGetOrderEndpointUnderLatencyChaos() {
        assertEndpointResilient(new ResilienceAssertion(
            "/api/orders?page=0&size=20",
            5000,     // max 5s p95 latency under chaos
            0.90,     // 90% success rate minimum
            50,       // 50 concurrent users
            Duration.ofSeconds(30)
        ));
    }

    @Test
    void testCreateOrderWithExceptionAssault() {
        // The exception assault will randomly throw exceptions
        // Our service must handle them gracefully (circuit breaker, retry, fallback)

        var executor = Executors.newFixedThreadPool(20);
        var results = new ArrayList<java.util.concurrent.Future<ResponseEntity<String>>>();

        for (int i = 0; i < 100; i++) {
            String productId = "prod-" + i;
            results.add(executor.submit(() ->
                restTemplate.postForEntity(
                    "/api/orders",
                    Map.of("productId", productId, "quantity", 1),
                    String.class
                )
            ));
        }

        executor.shutdown();

        long successCount = results.stream()
            .filter(f -> {
                try { return f.get().getStatusCode().is2xxSuccessful(); }
                catch (Exception e) { return false; }
            })
            .count();

        double successRate = (double) successCount / results.size();
        System.out.println("Order creation success rate under chaos: " +
            (successRate * 100) + "%");

        // With circuit breaker, we expect some failures but not total outage
        assertThat(successRate).isGreaterThan(0.50);
    }
}
```

### 7.6 Graceful Degradation Patterns

```java
// Fallback methods to handle chaos monkey-induced failures
@Service
public class ResilientOrderService {

    private final OrderRepository orderRepository;
    private final PaymentClient paymentClient;

    public ResilientOrderService(OrderRepository orderRepository,
                                  PaymentClient paymentClient) {
        this.orderRepository = orderRepository;
        this.paymentClient = paymentClient;
    }

    @CircuitBreaker(name = "orderService", fallbackMethod = "createOrderFallback")
    @Retry(name = "orderService", fallbackMethod = "createOrderFallback")
    public Order createOrder(String customerEmail, BigDecimal total) {
        // May fail with latency or exceptions during chaos
        Order order = new Order(customerEmail, total);
        order = orderRepository.save(order);

        PaymentResult payment = paymentClient.processPayment(order);
        if (!payment.success()) {
            throw new PaymentFailedException("Payment declined");
        }

        order.setStatus(OrderStatus.CONFIRMED);
        return orderRepository.save(order);
    }

    public Order createOrderFallback(String customerEmail, BigDecimal total, Throwable t) {
        System.out.println("Fallback: creating pending order due to: " + t.getMessage());
        Order order = new Order(customerEmail, total);
        order.setStatus(OrderStatus.PENDING);
        return orderRepository.save(order);
    }

    @TimeLimiter(name = "orderService")
    public CompletableFuture<Order> createOrderAsync(String email, BigDecimal total) {
        return CompletableFuture.supplyAsync(() -> createOrder(email, total));
    }
}
```

### 7.7 Load Testing with Simulated Chaos

```java
// Combined stress + chaos test
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles({"load-test", "chaos-test"})
class StressAndChaosTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void testSystemUnderCombinedStressAndChaos() {
        // Step 1: Warm up
        System.out.println("=== Phase 1: Warm up ===");
        for (int i = 0; i < 100; i++) {
            restTemplate.getForEntity("/api/health", String.class);
        }

        // Step 2: Enable Chaos Monkey Ã¢â‚¬â€ latency injection
        System.out.println("=== Phase 2: Enable latency chaos ===");
        restTemplate.postForEntity(
            "http://localhost:8080/actuator/chaosmonkey/assaults",
            Map.of("latencyActive", true,
                   "latencyRangeStart", 100,
                   "latencyRangeEnd", 2000,
                   "level", 3),
            Void.class
        );

        // Step 3: Ramp up load
        System.out.println("=== Phase 3: Ramp up load under chaos ===");
        var executor = Executors.newFixedThreadPool(50);
        var futures = new ArrayList<java.util.concurrent.Future<ResponseEntity<String>>>();

        for (int i = 0; i < 500; i++) {
            futures.add(executor.submit(() ->
                restTemplate.getForEntity("/api/orders?page=0&size=20", String.class)));
        }

        executor.shutdown();
        try {
            executor.awaitTermination(30, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        // Step 4: Analyze results
        long successCount = futures.stream()
            .filter(f -> {
                try { return f.get().getStatusCode().is2xxSuccessful(); }
                catch (Exception e) { return false; }
            })
            .count();

        long failureCount = futures.size() - successCount;
        double successRate = (double) successCount / futures.size();

        System.out.printf("""
            
            === Stress + Chaos Results ===
            Total requests: %d
            Successful:     %d
            Failed:         %d
            Success rate:   %.1f%%
            %n""",
            futures.size(), successCount, failureCount, successRate * 100);

        // Step 5: Clean up Ã¢â‚¬â€ disable chaos monkey
        restTemplate.postForEntity(
            "http://localhost:8080/actuator/chaosmonkey/assaults",
            Map.of("latencyActive", false, "exceptionsActive", false),
            Void.class
        );

        // Step 6: Verify recovery
        ResponseEntity<String> healthCheck = restTemplate.getForEntity("/api/health", String.class);
        assertThat(healthCheck.getStatusCode().is2xxSuccessful()).isTrue();

        // Assert that system survives
        assertThat(successRate).isGreaterThan(0.80);
    }
}
```

---

## Summary

- **Security testing annotations** (`@WithMockUser`, `@WithAnonymousUser`, `@WithUserDetails`) simulate authenticated requests without actual authentication. They populate the `SecurityContext` before each test method.
- **Custom security annotations** like `@WithMockJwt` use `@WithSecurityContext` with a `SecurityContextFactory` to create arbitrary `Authentication` objects Ã¢â‚¬â€ essential for JWT and OAuth2 resource server tests.
- **Method security testing** verifies `@PreAuthorize`, `@PostAuthorize`, and expression-based access control. Test each role and permission combination.
- **CORS testing** validates `Access-Control-Allow-Origin` headers from allowed and blocked origins.
- **CSRF test configuration** uses `SecurityMockMvcRequestPostProcessors.csrf()` to include tokens, or disables CSRF for non-state-changing endpoints.
- **OAuth2 test support** (`@WithMockOAuth2Client`, mocked `JwtDecoder`) tests OAuth2 client and resource server configurations without a real authorization server.
- **JMeter** provides GUI-based test plan creation with thread groups, samplers, assertions, and listeners. Best for teams that prefer visual test design.
- **Gatling** offers code-first simulations in Scala with rich HTML reports, feeders, checks, and sophisticated injection profiles. Best for developer-driven CI pipelines.
- **Load testing Spring Boot** involves profiling endpoints under load, monitoring connection pools (HikariCP), measuring query performance with Micrometer `@Timed`, and tracking latency percentiles.
- **Stress testing** includes ramp-up (gradual load increase), spike (sudden traffic bursts), and soak (sustained load over hours) patterns Ã¢â‚¬â€ each finding different failure modes.
- **Resource monitoring** during load tests tracks heap memory, thread counts, CPU load, and database connection pool utilization via Actuator and Micrometer metrics.
- **Chaos testing** with Chaos Monkey for Spring Boot injects latency, exceptions, and application shutdown in controlled experiments. Combined with Resilience4j circuit breakers and fallbacks, it validates system resilience under real-world failure conditions.

---

## Exercises

1. **@WithMockUser Basics:** Create a `@WebMvcTest` for a `UserController` with endpoints `/api/users/me` (requires authentication) and `/api/admin/users` (requires ADMIN role). Write tests using `@WithMockUser` with default values, custom username, custom roles, and custom authorities. Verify that unauthenticated requests receive 401 and users without ADMIN role receive 403.

2. **Custom @WithMockJwt:** Implement a `@WithMockJwt` annotation as shown in this chapter. Create a `DocumentController` that extracts claims from the JWT and returns user-specific data. Write tests that verify: valid JWT returns data, expired JWT returns 401, missing required scope returns 403.

3. **@WithUserDetails vs @WithMockUser:** Create a `CustomUserDetailsService` that loads users with roles from a database. Write two versions of the same test: one using `@WithUserDetails("alice@example.com")` and one using `@WithMockUser(username = "alice", roles = {"USER"})`. Explain the difference and when each is appropriate.

4. **Method Security Testing:** Implement a `DocumentService` with `@PreAuthorize` on methods that requires: `isAuthenticated()` for viewing, `hasRole('EDITOR')` for editing, `#owner == authentication.name` for deleting. Write a full test class using `@SpringBootTest` that tests all method-level security rules with both success and failure cases.

5. **CORS Testing:** Configure CORS to allow `https://app.example.com` with methods GET, POST, PUT. Write `MockMvc` tests that verify: preflight OPTIONS returns correct headers, GET from allowed origin succeeds, requests from blocked origin do not include CORS headers, requests with disallowed methods are rejected.

6. **OAuth2 Resource Server:** Set up a Spring Boot resource server that validates JWT tokens. Mock the `JwtDecoder` and write tests that: pass a valid JWT in the Authorization header, pass an expired JWT, pass a JWT with missing scopes, and omit the token entirely. Use `@WithMockJwt` as an alternative approach and compare the two methods.

7. **JMeter Test Plan:** Create a JMeter test plan (programmatically or via GUI) that tests a Spring Boot API with: 100 concurrent users, ramp-up over 30 seconds, loop count of 10, GET and POST samplers, JSON response assertion, duration assertion (max 2s), and an aggregate report listener. Save the plan as a .jmx file.

8. **Gatling Simulation:** Write a Gatling simulation that tests the order management API. Include: a CSV feeder for test data, a scenario for browsing orders (GET), a scenario for creating orders (POST), a scenario for admin operations (GET admin endpoints), injection profile with ramp-up and constant load, assertions for p95 &lt; 2s and success rate &gt; 99%. Run it with `mvn gatling:test`.

9. **Latency Percentiles:** Configure Micrometer to capture HTTP request latency percentiles (p50, p75, p90, p95, p99, p999). Write a load test that generates traffic and verify the percentiles appear in Prometheus format. Set SLO targets for each percentile and fail the test if any percentile exceeds its target.

10. **Soak Test:** Design a soak test that runs for 2 hours with 50 constant users. Monitor JVM heap, thread count, and database connection pool metrics every 30 seconds. Log a warning if heap exceeds 80% or active connections exceed 90% of pool. Write assertions that verify no memory leak (heap stabilizes after warmup).

11. **Chaos Monkey Setup:** Configure Chaos Monkey for a Spring Boot application. Enable latency assault (1-3s), exception assault (level 3), and controller/service watchers. Write an integration test that: enables chaos monkey, sends 200 requests to an endpoint, measures the impact, disables chaos monkey, verifies recovery.

12. **Circuit Breaker + Chaos:** Add `@CircuitBreaker` with a fallback method to a service. Run a chaos experiment where Chaos Monkey injects exceptions into that service. Assert that the circuit breaker opens after 5 failures and the fallback method is invoked. Verify the circuit recovers to half-open and then closed state.

13. **Stress Test Thresholds:** Define threshold constants (p95 &lt; 2s, p99 < 5s, error rate < 1%, throughput &gt; 100 rps). Write a Gatling simulation that includes these assertions. Run the simulation and force a threshold violation by increasing the load. Capture the assertion failure report.

14. **Spike Test:** Write a spike simulation that sends 1000 concurrent users to a `/api/search` endpoint within 2 seconds. Measure: success rate during the spike, recovery time after the spike, max latency during the spike, and whether the endpoint returns to baseline performance within 30 seconds.

15. **Combined Security + Performance Test:** Create an API endpoint that requires JWT authentication and performs a database query. Write a Gatling simulation that: authenticates users via OAuth2 (or mocked JWT), ramps up to 200 users/sec, measures authenticated endpoint performance under load, and asserts that p95 latency stays under 1s even under maximum load. Include Chaos Monkey to inject latency into the database layer and verify circuit breakers protect the endpoint.
