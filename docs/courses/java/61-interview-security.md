# Security Interview Q&A

> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-d.md) | **Next:** [Testing Interview Q&amp;A](./62-interview-testing.md)

This chapter covers essential security concepts every Java and Spring Boot developer should master for technical interviews. From foundational distinctions like authentication versus authorization to advanced topics such as OAuth2 authorization flows, JWT token management, Spring Security configuration, CSRF protection, secrets management with Vault, and password hashing with Argon2 â€” each question provides detailed explanations with complete, production-quality code examples. Security is not a feature; it is a cross-cutting concern that must be designed into every layer of an application. Understanding these patterns, protocols, and their implementations will prepare you to design, build, and defend secure systems at any scale.

![Security Interview Topics - Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/61-interview-security.png)

## Chapter at a Glance

| Topic | Key Focus | Key Questions |
|-------|----------|--------------|
| Core Concepts | Foundational understanding | Definitions, contrasts, trade-offs |
| Code Examples | Compilable, runnable solutions | Real interview scenarios |
| Best Practices | Production-ready patterns | Pitfalls to avoid |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Core Concepts] --> B[Code Examples]
    B --> C[Edge Cases]
    C --> D[Best Practices]
```

### Q1: What is the difference between authentication and authorization? How does Spring Security model these two concepts?
> **Pro Tip:** In interviews, always start with the "why" before the "how." Explaining the reasoning behind a design choice is more valuable than reciting syntax.

> **Remember:** Code readability matters in interviews. Write clean, well-structured code with meaningful variable names.


**Answer:**

Authentication and authorization are two fundamental but distinct security concerns. Authentication answers the question "Who are you?" â€” it verifies the identity of a user or system. Authorization answers "What are you allowed to do?" â€” it determines what resources an authenticated principal may access.

In a typical web application, authentication happens first. The user presents credentials (username and password, token, certificate), and the system validates them. Once identity is established, authorization checks are applied to every subsequent request to ensure the principal has permission to perform the requested action.

Spring Security models these concepts through several key abstractions. Authentication is represented by the `Authentication` interface, which extends `Principal`. An `Authentication` object carries the principal's identity, credentials, granted authorities, and whether the authentication is currently valid (the `authenticated` flag). The `AuthenticationManager` is the core strategy interface for performing authentication. Its most common implementation, `ProviderManager`, delegates to a list of `AuthenticationProvider` beans.

Authorization is handled through two complementary mechanisms: URL-based security via the `SecurityFilterChain` API and method-level security via annotations.

Here is a complete Spring Security configuration that demonstrates both concepts:

```java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authenticationProvider(authenticationProvider())
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin(Customizer.withDefaults())
            .httpBasic(Customizer.withDefaults());
        return http.build();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService());
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.builder()
            .username("user")
            .password(passwordEncoder().encode("password"))
            .roles("USER")
            .build();
        UserDetails admin = User.builder()
            .username("admin")
            .password(passwordEncoder().encode("admin"))
            .roles("ADMIN")
            .build();
        return new InMemoryUserDetailsManager(user, admin);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

And here is how method-level security works in a service class:

```java
@Service
public class OrderService {

    @PreAuthorize("hasRole('ADMIN')")
    public List<Order> findAllOrders() {
        return orderRepository.findAll();
    }

    @PostAuthorize("returnObject.customerId == authentication.principal.id")
    public Order findOrderById(Long id) {
        return orderRepository.findById(id)
            .orElseThrow(() -> new OrderNotFoundException(id));
    }

    @PreAuthorize("#order.customerId == authentication.principal.id")
    public Order createOrder(@P("order") Order order) {
        return orderRepository.save(order);
    }

    @Secured("ROLE_ADMIN")
    public void cancelOrder(Long id) {
        Order order = findOrderById(id);
        order.setStatus(OrderStatus.CANCELLED);
        orderRepository.save(order);
    }
}
```

The `@PreAuthorize` annotation runs its SpEL expression before the method executes. The `@PostAuthorize` annotation runs after the method returns, which is useful for scenarios where you need to inspect the return value. The `@Secured` annotation is simpler â€” it checks that the authenticated principal has the specified role â€” but lacks the expressiveness of SpEL expressions.

In the filter chain, the ordering matters. Spring Security processes filters in a specific order, and the `authorizeHttpRequests` rules are evaluated in declaration order. The first matching rule wins. Always put permissive rules first and the catch-all `.anyRequest().authenticated()` last.

### Q2: Explain the structure of a JSON Web Token. How are JWT signatures created and verified?

**Answer:**

A JSON Web Token consists of three Base64url-encoded segments separated by dots: the header, the payload, and the signature. The full structure looks like this:

```
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.POstGetfAytaZS82wHcjoTyoqhMyxXiWdR7Nn7A29DNSl0EiXLdwJ6xC6AfgZWF1bOsS_TuYI3OG85AmiExREkrS6tDfTQ2B3WXlrrPp5h3s2kF4hFfQn2kfSUhPY6GgG6RrVfHkUPT8MYR6Kj6E-bo5sFzYJn3dFf9fB8v4wU
```

The **header** typically contains the token type and the signing algorithm:

```json
{
  "alg": "RS256",
  "typ": "JWT",
  "kid": "key-id-1"
}
```

The **payload** contains claims â€” statements about the entity and additional metadata. There are three categories of claims: registered (standardized), public (custom but collision-resistant), and private (custom between parties). Standard registered claims include:

- `sub` (subject) â€” the principal identifier
- `iss` (issuer) â€” who issued the token
- `aud` (audience) â€” who the token is intended for
- `exp` (expiration) â€” expiration time as a Unix timestamp
- `nbf` (not before) â€” token is not valid before this time
- `iat` (issued at) â€” when the token was issued
- `jti` (JWT ID) â€” unique identifier for the token

The **signature** is computed over the base64url-encoded header and payload concatenated with a dot:

```
signature = algorithm(base64url(header) + "." + base64url(payload), secretOrPrivateKey)
```

For HMAC-based algorithms like HS256, the signature is computed using a symmetric key:

```java
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import javax.crypto.SecretKey;

public class JwtHmacExample {

    private static final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public String createToken(String subject, String role) {
        return Jwts.builder()
            .setSubject(subject)
            .claim("role", role)
            .setIssuedAt(new Date())
            .setExpiration(Date.from(Instant.now().plus(1, ChronoUnit.HOURS)))
            .setIssuer("my-app")
            .signWith(SECRET_KEY)
            .compact();
    }

    public Claims parseToken(String token) {
        return Jwts.parserBuilder()
            .setSigningKey(SECRET_KEY)
            .build()
            .parseClaimsJws(token)
            .getBody();
    }

    public boolean validateToken(String token) {
        try {
            parseToken(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }
}
```

For asymmetric algorithms like RS256, the signature uses a private key to sign and a public key to verify. This is the preferred approach for microservice architectures where the signing service (auth server) is separate from consuming services:

```java
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;

public class JwtAsymmetricExample {

    private final PrivateKey privateKey;
    private final PublicKey publicKey;

    public JwtAsymmetricExample() throws Exception {
        KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA");
        generator.initialize(2048);
        KeyPair keyPair = generator.generateKeyPair();
        this.privateKey = keyPair.getPrivate();
        this.publicKey = keyPair.getPublic();
    }

    public String createToken(String subject, Map<String, Object> claims) {
        return Jwts.builder()
            .setSubject(subject)
            .addClaims(claims)
            .setIssuedAt(new Date())
            .setExpiration(Date.from(Instant.now().plus(30, ChronoUnit.MINUTES)))
            .signWith(privateKey, SignatureAlgorithm.RS256)
            .compact();
    }

    public Claims verifyAndParse(String token) {
        return Jwts.parserBuilder()
            .setSigningKey(publicKey)
            .build()
            .parseClaimsJws(token)
            .getBody();
    }
}
```

The verification process works by recomputing the signature using the received header and payload and comparing it against the transmitted signature. If they match, the token has not been tampered with. The verification also checks the `exp` claim to ensure the token is not expired, and optionally checks `iss`, `aud`, and `nbf`.

Modern best practices recommend using asymmetric algorithms (RS256, ES256) over symmetric ones (HS256) in distributed systems. The key management is simpler â€” only the issuer holds the private key, and any service can verify using the public key without needing to protect a shared secret.

### Q3: How do refresh tokens work in a JWT-based authentication system? When should you rotate refresh tokens?

**Answer:**

A JWT-based authentication system typically uses a two-token strategy: an access token and a refresh token. The access token is short-lived (typically 5-30 minutes) and is sent with every API request in the Authorization header. The refresh token is long-lived (days to months) and is used exclusively to obtain new access tokens without requiring the user to re-authenticate.

The flow works as follows:

1. The client authenticates with credentials and receives both an access token and a refresh token.
2. The client uses the access token for API requests.
3. When the access token expires, the client receives a 401 response.
4. The client sends the refresh token to a dedicated endpoint.
5. The server validates the refresh token and issues a new access token (and optionally a new refresh token).
6. The client retries the original request with the new access token.

Here is a complete implementation of the token endpoint:

```java
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authManager;
    private final JwtTokenProvider tokenProvider;
    private final RefreshTokenService refreshTokenService;

    public AuthController(AuthenticationManager authManager,
                          JwtTokenProvider tokenProvider,
                          RefreshTokenService refreshTokenService) {
        this.authManager = authManager;
        this.tokenProvider = tokenProvider;
        this.refreshTokenService = refreshTokenService;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody @Valid LoginRequest request) {
        Authentication authentication = authManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.email(), request.password())
        );
        String accessToken = tokenProvider.generateAccessToken(authentication);
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(authentication.getName());
        return ResponseEntity.ok(new AuthResponse(accessToken, refreshToken.getToken()));
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(@RequestBody @Valid RefreshTokenRequest request) {
        String newAccessToken = tokenProvider.generateAccessToken(
            SecurityContextHolder.getContext().getAuthentication());
        RefreshToken newRefreshToken = refreshTokenService.verifyAndRotate(request.refreshToken());
        return ResponseEntity.ok(new AuthResponse(newAccessToken, newRefreshToken.getToken()));
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(@RequestBody @Valid RefreshTokenRequest request) {
        refreshTokenService.revokeToken(request.refreshToken());
        return ResponseEntity.noContent().build();
    }
}
```

The refresh token entity with rotation:

```java
@Entity
@Table(name = "refresh_tokens")
public class RefreshToken {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false, unique = true, length = 512)
    private String token;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private Instant expiresAt;

    @Column(nullable = false)
    private boolean revoked;

    private String replacedByToken;

    @Column(nullable = false)
    private Instant createdAt;

    @Column(nullable = false)
    private String deviceInfo;

    @PrePersist
    public void prePersist() {
        this.createdAt = Instant.now();
        this.token = UUID.randomUUID().toString();
    }

    public boolean isValid() {
        return !revoked && expiresAt.isAfter(Instant.now());
    }
}
```

The service that handles refresh token rotation:

```java
@Service
@Transactional
public class RefreshTokenService {

    private static final long REFRESH_TOKEN_VALIDITY_MS = 30L * 24 * 60 * 60 * 1000;
    private final RefreshTokenRepository repository;

    public RefreshTokenService(RefreshTokenRepository repository) {
        this.repository = repository;
    }

    public RefreshToken createRefreshToken(String username, String deviceInfo) {
        RefreshToken refreshToken = new RefreshToken();
        refreshToken.setUsername(username);
        refreshToken.setExpiresAt(Instant.now().plusMillis(REFRESH_TOKEN_VALIDITY_MS));
        refreshToken.setDeviceInfo(deviceInfo);
        return repository.save(refreshToken);
    }

    public RefreshToken verifyAndRotate(String tokenValue) {
        RefreshToken refreshToken = repository.findByToken(tokenValue)
            .orElseThrow(() -> new TokenRefreshException("Refresh token not found"));

        if (!refreshToken.isValid()) {
            refreshToken.setRevoked(true);
            repository.save(refreshToken);
            throw new TokenRefreshException("Refresh token expired or revoked");
        }

        // Reuse detection: if already revoked, this indicates token theft
        if (refreshToken.isRevoked()) {
            repository.revokeAllByUsername(refreshToken.getUsername());
            throw new TokenRefreshException("Potential token theft detected â€” all tokens revoked");
        }

        refreshToken.setRevoked(true);
        RefreshToken newToken = new RefreshToken();
        newToken.setUsername(refreshToken.getUsername());
        newToken.setExpiresAt(Instant.now().plusMillis(REFRESH_TOKEN_VALIDITY_MS));
        newToken.setDeviceInfo(refreshToken.getDeviceInfo());
        newToken.setReplacedByToken(tokenValue);
        repository.save(refreshToken);
        return repository.save(newToken);
    }

    public void revokeToken(String tokenValue) {
        repository.findByToken(tokenValue).ifPresent(token -> {
            token.setRevoked(true);
            repository.save(token);
        });
    }

    public void revokeAllUserTokens(String username) {
        int revoked = repository.revokeAllByUsername(username);
    }
}
```

Refresh token rotation is an essential security mechanism. Every time a refresh token is used, the old one is revoked and a new one is issued. This limits the window of opportunity if a refresh token is stolen. If an attacker steals a refresh token and the legitimate user also tries to refresh, one of them will use a revoked token, alerting the system to potential token theft. At that point, all refresh tokens for that user should be revoked immediately.

Best practices for refresh token storage:
- Store refresh tokens in an HTTP-only, Secure, SameSite=Strict cookie rather than in localStorage. This prevents XSS attacks from accessing the token.
- The refresh endpoint should use CSRF protection.
- Implement refresh token reuse detection â€” if a revoked token is used, it indicates token theft.
- Set appropriate expiration based on the sensitivity of the application. Banking apps might use 15 minutes; social apps might use 30 days.
- Store a device fingerprint or user agent alongside the token to detect anomalous usage.

### Q4: What are the OAuth2 authorization code flow and the PKCE extension? When would you use each?

**Answer:**

The OAuth2 authorization code flow is the most secure flow for applications that can securely store a client secret, such as server-side web applications. The flow involves the following participants: the Resource Owner (user), the Client (application), the Authorization Server, and the Resource Server.

Here is the complete flow:

1. The client redirects the user to the authorization server with query parameters including `response_type=code`, `client_id`, `redirect_uri`, and `scope`.
2. The user authenticates and consents to the requested permissions.
3. The authorization server redirects back to the client with an authorization code in the query string.
4. The client exchanges the authorization code for an access token by making a back-channel POST request to the token endpoint. This request includes the `client_id`, `client_secret`, `code`, `redirect_uri`, and `grant_type=authorization_code`.
5. The authorization server returns an access token and optionally a refresh token.

Here is a Spring Boot resource server configured for OAuth2:

```yaml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: https://auth.example.com/realms/my-realm
          jwk-set-uri: https://auth.example.com/realms/my-realm/protocol/openid-connect/certs
```

```java
@Configuration
@EnableWebSecurity
public class OAuth2ResourceServerConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasAuthority("SCOPE_admin")
                .requestMatchers("/api/orders/**").hasAuthority("SCOPE_orders:read")
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt
                    .jwtAuthenticationConverter(jwtAuthenticationConverter())
                )
            );
        return http.build();
    }

    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtGrantedAuthoritiesConverter grantedAuthorities = new JwtGrantedAuthoritiesConverter();
        grantedAuthorities.setAuthorityPrefix("ROLE_");
        grantedAuthorities.setAuthoritiesClaimName("realm_access.roles");
        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
        converter.setJwtGrantedAuthoritiesConverter(grantedAuthorities);
        return converter;
    }
}
```

The PKCE (Proof Key for Code Exchange) extension is designed for public clients that cannot securely store a client secret â€” mobile apps, single-page applications, and native desktop apps. PKCE prevents the authorization code interception attack by introducing a cryptographically random secret that the client generates for each authorization request.

Here is how PKCE works:

1. The client generates a cryptographically random string called `code_verifier` and a transformed version called `code_challenge`.
2. The client sends the `code_challenge` and `code_challenge_method=S256` along with the authorization request.
3. When exchanging the authorization code, the client sends the original `code_verifier`.
4. The authorization server transforms the `code_verifier` using the agreed method and compares it to the `code_challenge`. If they match, the code exchange succeeds.

```java
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.Base64;

public class PkceUtil {

    public static String generateCodeVerifier() {
        SecureRandom sr = new SecureRandom();
        byte[] code = new byte[32];
        sr.nextBytes(code);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(code);
    }

    public static String generateCodeChallenge(String codeVerifier) throws Exception {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] digest = md.digest(codeVerifier.getBytes("US-ASCII"));
        return Base64.getUrlEncoder().withoutPadding().encodeToString(digest);
    }
}
```

Here is a Spring Boot client application using the authorization code flow with PKCE:

```java
@Configuration
public class OAuth2ClientConfig {

    @Bean
    public SecurityFilterChain oauth2ClientFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/login", "/oauth2/**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/oauth2/authorization/my-client")
                .defaultSuccessUrl("/dashboard")
            )
            .oauth2Client(Customizer.withDefaults());
        return http.build();
    }
}
```

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          my-client:
            client-id: my-client-id
            client-secret: my-client-secret
            authorization-grant-type: authorization_code
            redirect-uri: "{baseUrl}/login/oauth2/code/{registrationId}"
            scope: openid,profile,email,orders:read
            client-authentication-method: client_secret_basic
        provider:
          my-client:
            issuer-uri: https://auth.example.com/realms/my-realm
```

For public clients (SPA, mobile), you would omit the `client-secret`:

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          mobile-app:
            client-id: mobile-client-id
            authorization-grant-type: authorization_code
            client-authentication-method: none
            scope: openid,profile
```

The choice of flow depends on your application type:
- **Server-side web app**: Authorization code flow with client secret. The secret is stored securely on the server.
- **Single-page app**: Authorization code flow with PKCE. No client secret, the code verifier prevents interception.
- **Mobile app**: Authorization code flow with PKCE. The app uses a custom scheme or universal link for the redirect URI.
- **Machine-to-machine**: Client credentials grant. No user involved, the application authenticates itself.
- **IoT / devices with no browser**: Device authorization grant. The user uses a separate device to authorize.

### Q5: How do you configure Spring Security for a stateless REST API? Show the complete setup for JWT-based authentication.

**Answer:**

Configuring Spring Security for a stateless REST API requires disabling session management, CSRF protection, and configuring a JWT authentication filter. The server should not create HTTP sessions â€” every request must carry its own authentication in the form of a JWT access token.

Here is the complete configuration:

```java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final JwtAuthenticationProvider jwtAuthProvider;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter,
                          JwtAuthenticationProvider jwtAuthProvider) {
        this.jwtAuthFilter = jwtAuthFilter;
        this.jwtAuthProvider = jwtAuthProvider;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .exceptionHandling(ex -> ex
                .authenticationEntryPoint(new BearerTokenAuthenticationEntryPoint())
                .accessDeniedHandler(new BearerTokenAccessDeniedHandler())
            )
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/auth/**", "/actuator/health", "/error").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.GET, "/api/products/**").permitAll()
                .anyRequest().authenticated()
            )
            .authenticationProvider(jwtAuthProvider)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
```

The JWT authentication filter extracts and validates the token from every request:

```java
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenProvider tokenProvider;
    private final UserDetailsService userDetailsService;

    public JwtAuthenticationFilter(JwtTokenProvider tokenProvider,
                                    UserDetailsService userDetailsService) {
        this.tokenProvider = tokenProvider;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain)
            throws ServletException, IOException {
        try {
            String jwt = extractJwtFromRequest(request);
            if (jwt != null && tokenProvider.validateToken(jwt)) {
                String username = tokenProvider.getUsernameFromToken(jwt);
                UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                UsernamePasswordAuthenticationToken authentication =
                    new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                authentication.setDetails(
                    new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception e) {
            SecurityContextHolder.clearContext();
        }
        filterChain.doFilter(request, response);
    }

    private String extractJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
```

The JWT token provider:

```java
@Component
public class JwtTokenProvider {

    private final JwtConfig config;

    public JwtTokenProvider(JwtConfig config) {
        this.config = config;
    }

    public String generateAccessToken(Authentication authentication) {
        UserPrincipal principal = (UserPrincipal) authentication.getPrincipal();
        Date now = new Date();
        Date expiry = new Date(now.getTime() + config.getAccessTokenExpiration());

        return Jwts.builder()
            .setSubject(principal.getUsername())
            .claim("userId", principal.getId())
            .claim("roles", principal.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList()))
            .setIssuedAt(now)
            .setIssuer(config.getIssuer())
            .setExpiration(expiry)
            .signWith(config.getSigningKey())
            .compact();
    }

    public String getUsernameFromToken(String token) {
        return parseClaims(token).getSubject();
    }

    public boolean validateToken(String token) {
        try {
            parseClaims(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    public Authentication getAuthentication(String token) {
        Claims claims = parseClaims(token);
        UserDetails userDetails = userDetailsService.loadUserByUsername(claims.getSubject());
        return new UsernamePasswordAuthenticationToken(userDetails, token, userDetails.getAuthorities());
    }

    private Claims parseClaims(String token) {
        return Jwts.parserBuilder()
            .setSigningKey(config.getSigningKey())
            .build()
            .parseClaimsJws(token)
            .getBody();
    }
}
```

The JWT configuration:

```java
@ConfigurationProperties(prefix = "app.jwt")
@Component
public class JwtConfig {

    private String secret;
    private long accessTokenExpiration;
    private long refreshTokenExpiration;
    private String issuer;

    public SecretKey getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(this.secret);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String getSecret() { return secret; }
    public void setSecret(String secret) { this.secret = secret; }
    public long getAccessTokenExpiration() { return accessTokenExpiration; }
    public void setAccessTokenExpiration(long accessTokenExpiration) { this.accessTokenExpiration = accessTokenExpiration; }
    public long getRefreshTokenExpiration() { return refreshTokenExpiration; }
    public void setRefreshTokenExpiration(long refreshTokenExpiration) { this.refreshTokenExpiration = refreshTokenExpiration; }
    public String getIssuer() { return issuer; }
    public void setIssuer(String issuer) { this.issuer = issuer; }
}
```

```yaml
app:
  jwt:
    secret: bXktc2VjcmV0LWtleS10aGF0LWlzLWF0LWxlYXN0LTI1Ni1iaXRzLWxvbmc=
    access-token-expiration: 900000
    refresh-token-expiration: 2592000000
    issuer: my-app
```

Key points about this configuration:
- `SessionCreationPolicy.STATELESS` ensures Spring Security never creates an HTTP session.
- CSRF is disabled because there is no session to protect â€” CSRF tokens prevent session-based attacks.
- The `OncePerRequestFilter` guarantees the filter executes once per request, even if forwarded to other servlets.
- The filter extracts the token, validates it, and sets the `SecurityContext` before the request reaches the controller.

### Q6: What is OpenID Connect and how does it extend OAuth2? What is the ID token?

**Answer:**

OpenID Connect (OIDC) is an identity layer built on top of OAuth2. While OAuth2 is an authorization framework that provides access tokens for accessing resources, OIDC adds authentication capabilities by introducing the ID token â€” a signed JWT that contains information about the authenticated user.

The key extension points of OIDC over OAuth2 are:

1. **ID Token**: A signed JWT that carries identity claims about the authenticated user. It is issued alongside the access token during the authorization flow.

2. **UserInfo Endpoint**: A protected OAuth2 resource that returns claims about the authenticated user. The client uses its access token to call this endpoint.

3. **Standardized Scopes**: `openid` (required), `profile`, `email`, `address`, `phone`. These scopes control which claims the client receives.

4. **Discovery**: The OpenID Connect Discovery document at `/.well-known/openid-configuration` describes the provider's configuration, including endpoint URLs and supported features.

The ID token is a JWT with specific registered claims:

```json
{
  "iss": "https://auth.example.com/realms/my-realm",
  "sub": "a1b2c3d4-1234-5678-9abc-def012345678",
  "aud": "my-client-id",
  "exp": 1717000000,
  "iat": 1716913600,
  "auth_time": 1716913500,
  "nonce": "n-0S6_WzA2Mj",
  "acr": "phr",
  "amr": ["pwd"],
  "azp": "my-client-id",
  "preferred_username": "jdoe",
  "email": "john@example.com",
  "email_verified": true,
  "name": "John Doe"
}
```

Key claims in an ID token:
- `iss` (issuer) â€” MUST match the issuer URL obtained from discovery.
- `sub` (subject) â€” a unique, stable identifier for the user.
- `aud` (audience) â€” MUST include the client's ID.
- `exp` â€” the client MUST verify this timestamp.
- `nonce` â€” a one-time value sent by the client during the initial request, included in the ID token to prevent replay attacks.
- `auth_time` â€” when the user last authenticated.
- `acr` (Authentication Context Class Reference) â€” indicates the level of authentication assurance.
- `amr` (Authentication Methods Reference) â€” lists the authentication methods used.

Here is a Spring Boot application that acts as an OIDC client:

```java
@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/profile")
    public Map<String, Object> profile(
            @AuthenticationPrincipal OidcUser oidcUser) {
        Map<String, Object> profile = new HashMap<>();
        profile.put("username", oidcUser.getPreferredUsername());
        profile.put("email", oidcUser.getEmail());
        profile.put("name", oidcUser.getFullName());
        profile.put("claims", oidcUser.getClaims());
        return profile;
    }

    @GetMapping("/id-token")
    public String idToken(@AuthenticationPrincipal OidcUser oidcUser) {
        return oidcUser.getIdToken().getTokenValue();
    }
}
```

Configuring Spring Security as an OIDC client:

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          keycloak:
            client-id: spring-client
            client-secret: ${KEYCLOAK_CLIENT_SECRET}
            authorization-grant-type: authorization_code
            redirect-uri: "{baseUrl}/login/oauth2/code/{registrationId}"
            scope: openid,profile,email
        provider:
          keycloak:
            issuer-uri: https://auth.example.com/realms/my-realm
            user-name-attribute: preferred_username
```

```java
@Configuration
@EnableWebSecurity
public class OidcClientConfig {

    @Bean
    public SecurityFilterChain oidcFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/", "/login").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/oauth2/authorization/keycloak")
                .defaultSuccessUrl("/dashboard", true)
                .failureUrl("/login?error=true")
            )
            .oauth2Client(Customizer.withDefaults());
        return http.build();
    }
}
```

### Q7: How do you implement method-level security in Spring Boot? Compare @PreAuthorize, @PostAuthorize, @Secured, and @RolesAllowed.

**Answer:**

Method-level security in Spring Boot allows you to enforce authorization at the method invocation level rather than only at the URL level. It is enabled with the `@EnableMethodSecurity` annotation and supports four annotation types with different capabilities.

First, enable method security:

```java
@Configuration
@EnableMethodSecurity
public class MethodSecurityConfig {
}
```

```java
@Configuration
@EnableGlobalMethodSecurity(
    prePostEnabled = true,
    securedEnabled = true,
    jsr250Enabled = true
)
public class LegacyMethodSecurityConfig {
}
```

**@PreAuthorize** â€” Executes a SpEL expression before the method:

```java
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public List<Order> getAllOrders() { return orderService.findAll(); }

    @PreAuthorize("#order.customerEmail == authentication.principal.username")
    @PostMapping
    public Order createOrder(@RequestBody Order order) { return orderService.save(order); }

    @PreAuthorize("hasRole('ADMIN') or #order.customerEmail == authentication.principal.username")
    @PutMapping("/{id}")
    public Order updateOrder(@PathVariable Long id, @RequestBody Order order) {
        return orderService.update(id, order);
    }

    @PreAuthorize("hasPermission(#id, 'Order', 'DELETE')")
    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) { orderService.delete(id); }
}
```

**@PostAuthorize** â€” Executes after the method returns and can access the return value:

```java
@Service
public class DocumentService {

    @PostAuthorize("returnObject.owner == authentication.principal.username")
    public Document findById(Long id) {
        return documentRepository.findById(id)
            .orElseThrow(() -> new DocumentNotFoundException(id));
    }

    @PostAuthorize("returnObject.visibility == 'PUBLIC' or " +
                   "returnObject.owner == authentication.principal.username or " +
                   "hasRole('ADMIN')")
    public Document findByShareId(String shareId) {
        return documentRepository.findByShareId(shareId)
            .orElseThrow(() -> new DocumentNotFoundException("Not found"));
    }
}
```

**@Secured** â€” A simpler annotation that takes an array of role strings:

```java
@Service
public class AdminService {

    @Secured("ROLE_ADMIN")
    public void performAdminTask() { }

    @Secured({"ROLE_ADMIN", "ROLE_SUPERVISOR"})
    public void performPrivilegedTask() { }
}
```

**@RolesAllowed** â€” The JSR-250 equivalent of `@Secured`:

```java
import jakarta.annotation.security.RolesAllowed;

@Service
public class PaymentService {

    @RolesAllowed("ADMIN")
    public void refundPayment(Long paymentId) { }

    @RolesAllowed({"ADMIN", "MANAGER"})
    public void approveRefund(Long refundId) { }
}
```

**@PreFilter and @PostFilter** for collection-level filtering:

```java
@PreFilter("filterObject.owner == authentication.principal.username")
public List<Document> bulkSave(List<Document> documents) {
    return documentRepository.saveAll(documents);
}

@PostFilter("filterObject.owner == authentication.principal.username")
public List<Document> findAllVisible() {
    return documentRepository.findAll();
}
```

Comparison table:

| Feature | @PreAuthorize | @PostAuthorize | @Secured | @RolesAllowed |
|---------|---------------|----------------|----------|---------------|
| SpEL support | Yes | Yes | No | No |
| Access to params | Yes (#paramName) | Yes | No | No |
| Access to return | No | Yes (returnObject) | No | No |
| Role prefix | Configurable | Configurable | ROLE_ | Depends |
| Permission evaluator | Yes | Yes | No | No |
| Package | spring-security | spring-security | spring-security | jakarta.annotation |

A custom PermissionEvaluator:

```java
@Component
public class OrderPermissionEvaluator implements PermissionEvaluator {

    @Override
    public boolean hasPermission(Authentication auth, Object targetDomainObject, Object permission) {
        if (auth == null || !(targetDomainObject instanceof Order order)) return false;
        String username = auth.getName();
        return switch (permission.toString()) {
            case "READ", "UPDATE" -> order.getCustomerEmail().equals(username);
            case "DELETE" -> order.getCustomerEmail().equals(username) ||
                auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));
            default -> false;
        };
    }

    @Override
    public boolean hasPermission(Authentication auth, Serializable targetId,
                                  String targetType, Object permission) {
        return false;
    }
}
```

Register the permission evaluator:

```java
@Bean
public MethodSecurityExpressionHandler methodSecurityExpressionHandler() {
    DefaultMethodSecurityExpressionHandler handler = new DefaultMethodSecurityExpressionHandler();
    handler.setPermissionEvaluator(orderPermissionEvaluator());
    return handler;
}
```

### Q8: Explain CSRF, CORS, XSS, and SQL injection. How does Spring Security protect against each?

**Answer:**

These four attacks represent different categories of web application vulnerabilities.

**CSRF (Cross-Site Request Forgery)**

CSRF attacks trick an authenticated user into executing unwanted actions on a web application where they are currently logged in. The attacker crafts a malicious request that leverages the user's active session cookies.

Spring Security protects against CSRF by default when you use form-based login. It generates a unique CSRF token on the server, associates it with the user's session, and includes it in forms. Every mutating request (POST, PUT, DELETE, PATCH) must include this token.

```java
@Configuration
@EnableWebSecurity
public class CsrfConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .csrfTokenRequestHandler(new CsrfTokenRequestAttributeHandler())
            );
        return http.build();
    }
}
```

For SPAs:

```java
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .csrf(csrf -> csrf
            .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
            .csrfTokenRequestHandler(new SpaCsrfTokenRequestHandler())
        );
    return http.build();
}
```

For stateless REST APIs using JWT, you disable CSRF:

```java
http.csrf(AbstractHttpConfigurer::disable);
```

This is safe because JWT tokens are sent explicitly in the Authorization header, not automatically attached by the browser.

**CORS (Cross-Origin Resource Sharing)**

CORS is a browser security mechanism that controls which origins can access resources on your server.

```java
@Configuration
public class CorsConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList(
            "https://app.example.com",
            "https://admin.example.com"
        ));
        configuration.setAllowedMethods(Arrays.asList(
            "GET", "POST", "PUT", "DELETE", "OPTIONS"
        ));
        configuration.setAllowedHeaders(Arrays.asList(
            "Authorization", "Content-Type", "X-Requested-With"
        ));
        configuration.setExposedHeaders(Arrays.asList(
            "X-Total-Count", "X-Rate-Limit-Remaining"
        ));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", configuration);
        return source;
    }
}
```

In the security filter chain:

```java
http.cors(Customizer.withDefaults());
```

**XSS (Cross-Site Scripting)**

XSS attacks inject malicious scripts into web pages viewed by other users. Spring Security provides several defenses:

1. Content Security Policy (CSP) headers:

```java
http.headers(headers -> headers
    .contentSecurityPolicy(csp -> csp
        .policyDirectives("default-src 'self'; " +
                        "script-src 'self'; " +
                        "img-src 'self' https://trusted-cdn.com; " +
                        "frame-ancestors 'none'; " +
                        "form-action 'self'")
    )
);
```

2. X-Content-Type-Options:

```java
http.headers(headers -> headers
    .contentTypeOptions(Customizer.withDefaults())
);
```

3. Automatic HTML escaping in template engines â€” Thymeleaf, React, and Angular escape output by default:

```html
<!-- Thymeleaf auto-escapes by default -->
<div th:text="${userInput}">Safe escaped content</div>

<!-- Only use th:utext when you explicitly need unescaped HTML -->
<div th:utext="${sanitizedHtml}">Unsafe but sanitized content</div>
```

**SQL Injection**

SQL injection attacks inject malicious SQL statements into input fields. The primary defense is to never concatenate user input into SQL strings.

```java
// VULNERABLE: Never do this
@Query("SELECT * FROM users WHERE username = '" + username + "'")
User findByUsernameUnsafe(String username);

// SAFE: Use named parameters
@Query("SELECT u FROM User u WHERE u.username = :username")
User findByUsername(@Param("username") String username);

// SAFE: Use Spring Data JPA derived queries
User findByUsername(String username);

// SAFE: Use native queries with parameter binding
@Query(value = "SELECT * FROM users WHERE username = :username", nativeQuery = true)
User findByUsernameNative(@Param("username") String username);
```

For JDBC:

```java
// SAFE: PreparedStatement with parameterized queries
public User findUser(String username) {
    String sql = "SELECT * FROM users WHERE username = ?";
    return jdbcTemplate.queryForObject(
        sql, new BeanPropertyRowMapper<>(User.class), username);
}

// VULNERABLE: String concatenation
public User findUserUnsafe(String username) {
    String sql = "SELECT * FROM users WHERE username = '" + username + "'";
    return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(User.class));
}
```

### Q9: Implement a complete Spring Security configuration with multiple authentication providers (JWT, LDAP, and database).

**Answer:**

A real-world application often needs to support multiple authentication mechanisms simultaneously. Spring Security's `ProviderManager` delegates to a list of `AuthenticationProvider` beans in order.

```java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class MultiProviderSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .authenticationManager(authenticationManager());
        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager() {
        List<AuthenticationProvider> providers = List.of(
            jwtAuthenticationProvider(),
            ldapAuthenticationProvider(),
            databaseAuthenticationProvider()
        );
        return new ProviderManager(providers);
    }

    @Bean
    public AuthenticationProvider jwtAuthenticationProvider() {
        return new JwtAuthenticationProvider();
    }

    @Bean
    public AuthenticationProvider ldapAuthenticationProvider() {
        LdapAuthenticationProvider provider = new LdapAuthenticationProvider(
            ldapAuthenticator(), ldapAuthoritiesPopulator());
        return provider;
    }

    @Bean
    public AuthenticationProvider databaseAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService());
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }
}
```

The LDAP authenticator configuration:

```java
@Configuration
public class LdapConfig {

    @Value("${ldap.url}")
    private String ldapUrl;

    @Value("${ldap.base-dn}")
    private String baseDn;

    @Bean
    public LdapAuthenticator ldapAuthenticator() {
        FilterBasedLdapUsernamePasswordAuthenticationFilter authenticator =
            new FilterBasedLdapUsernamePasswordAuthenticationFilter();
        authenticator.setContextSource(contextSource());
        authenticator.setUserFilter("(&(uid={0})(objectClass=inetOrgPerson))");
        return authenticator;
    }

    @Bean
    public LdapContextSource contextSource() {
        LdapContextSource contextSource = new LdapContextSource();
        contextSource.setUrl(ldapUrl);
        contextSource.setBase(baseDn);
        contextSource.setUserDn("cn=admin,dc=example,dc=com");
        contextSource.setPassword("admin-password");
        contextSource.setPooled(true);
        return contextSource;
    }

    @Bean
    public LdapAuthoritiesPopulator ldapAuthoritiesPopulator() {
        DefaultLdapAuthoritiesPopulator populator =
            new DefaultLdapAuthoritiesPopulator(contextSource(), "ou=groups");
        populator.setGroupRoleAttribute("cn");
        populator.setRolePrefix("ROLE_");
        populator.setSearchSubtree(true);
        return populator;
    }
}
```

The database authentication provider with a custom `UserDetailsService`:

```java
@Service
public class JpaUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public JpaUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        return userRepository.findByEmail(username)
            .map(this::toUserDetails)
            .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    }

    private UserDetails toUserDetails(User user) {
        return org.springframework.security.core.userdetails.User.builder()
            .username(user.getEmail())
            .password(user.getPasswordHash())
            .authorities(user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getName()))
                .collect(Collectors.toList()))
            .disabled(!user.isEnabled())
            .accountExpired(user.isAccountExpired())
            .accountLocked(user.isAccountLocked())
            .credentialsExpired(user.isCredentialsExpired())
            .build();
    }
}
```

### Q10: What is Keycloak? How do you configure a realm, client, roles, and identity brokering?

**Answer:**

Keycloak is an open-source identity and access management (IAM) solution that provides authentication, authorization, single sign-on (SSO), and identity brokering out of the box. It implements OAuth2, OpenID Connect, and SAML 2.0 protocols.

**Realms**

A realm in Keycloak is a security domain that manages a set of users, credentials, roles, and client configurations. Realms are isolated from each other.

You configure a realm through the Keycloak admin console or via the Admin REST API:

```json
{
  "id": "my-company",
  "realm": "my-company",
  "displayName": "My Company",
  "enabled": true,
  "sslRequired": "external",
  "registrationAllowed": false,
  "loginWithEmailAllowed": true,
  "duplicateEmailsAllowed": false,
  "resetPasswordAllowed": true,
  "bruteForceProtected": true,
  "maxFailureWaitSeconds": 900,
  "minimumQuickLoginWaitSeconds": 60,
  "failureFactor": 5,
  "accessTokenLifespan": 300,
  "ssoSessionIdleTimeout": 1800,
  "ssoSessionMaxLifespan": 36000
}
```

**Clients**

A client represents an application that requests authentication from Keycloak. Clients can be confidential (server-side apps with a client secret) or public (SPAs, mobile apps).

```json
{
  "clientId": "spring-boot-api",
  "enabled": true,
  "protocol": "openid-connect",
  "publicClient": false,
  "secret": "********",
  "redirectUris": ["https://app.example.com/*"],
  "webOrigins": ["https://app.example.com"],
  "standardFlowEnabled": true,
  "directAccessGrantsEnabled": true,
  "serviceAccountsEnabled": true,
  "authorizationServicesEnabled": true,
  "fullScopeAllowed": false,
  "defaultClientScopes": ["openid", "profile", "email", "roles"]
}
```

**Roles**

Keycloak supports realm-level and client-level roles:

```json
{
  "realmRoles": [
    { "name": "admin", "description": "Full access", "composite": true,
      "composites": { "realm": ["user", "manager"] } },
    { "name": "manager", "description": "Elevated privileges", "composite": false },
    { "name": "user", "description": "Regular user", "composite": false }
  ]
}
```

**Identity Brokering**

Identity brokering allows Keycloak to act as a broker between external identity providers (Google, GitHub, Facebook) and your application:

```json
{
  "alias": "google",
  "displayName": "Google",
  "enabled": true,
  "providerId": "google",
  "config": {
    "clientId": "google-client-id.apps.googleusercontent.com",
    "clientSecret": "GOCSPX-...",
    "useJwksUrl": "true",
    "tokenUrl": "https://oauth2.googleapis.com/token",
    "authorizationUrl": "https://accounts.google.com/o/oauth2/v2/auth",
    "userInfoUrl": "https://www.googleapis.com/oauth2/v3/userinfo",
    "defaultScope": "openid profile email",
    "syncMode": "FORCE",
    "storeToken": "true",
    "acceptsPromptNone": "true",
    "disableUserInfo": "false"
  }
}
```

Configuring Spring Boot as a Keycloak resource server:

```yaml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: https://auth.example.com/realms/my-company
          jwk-set-uri: https://auth.example.com/realms/my-company/protocol/openid-connect/certs
```

```java
@Configuration
@EnableWebSecurity
public class KeycloakResourceServerConfig {

    @Bean
    public SecurityFilterChain resourceServerFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("admin")
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt
                    .jwtAuthenticationConverter(jwtAuthenticationConverter())
                )
            );
        return http.build();
    }

    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtGrantedAuthoritiesConverter grantedAuthorities = new JwtGrantedAuthoritiesConverter();
        grantedAuthorities.setAuthorityPrefix("ROLE_");
        grantedAuthorities.setAuthoritiesClaimName("realm_access.roles");
        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
        converter.setJwtGrantedAuthoritiesConverter(grantedAuthorities);
        return converter;
    }
}
```

**Keycloak Event Listeners:**

```java
import org.keycloak.events.Event;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.EventType;
import org.keycloak.events.admin.AdminEvent;

public class CustomEventListenerProvider implements EventListenerProvider {

    private final EventPublisher eventPublisher;

    public CustomEventListenerProvider(EventPublisher eventPublisher) {
        this.eventPublisher = eventPublisher;
    }

    @Override
    public void onEvent(Event event) {
        if (event.getType() == EventType.LOGIN_ERROR) {
            eventPublisher.publishSecurityEvent(new SecurityEvent(
                SecurityEventType.LOGIN_FAILURE,
                event.getDetail("username"),
                event.getError(),
                event.getIpAddress()
            ));
        }
        if (event.getType() == EventType.UPDATE_PASSWORD) {
            eventPublisher.publishSecurityEvent(new SecurityEvent(
                SecurityEventType.PASSWORD_CHANGED,
                event.getUserId(), null, event.getIpAddress()));
        }
        if (event.getType() == EventType.REGISTER) {
            eventPublisher.publishUserLifecycleEvent(new UserLifecycleEvent(
                UserLifecycleType.USER_REGISTERED,
                event.getUserId(), event.getDetail("email")));
        }
    }

    @Override
    public void onEvent(AdminEvent adminEvent, boolean b) {
        eventPublisher.publishAdminEvent(new AdminAuditEvent(
            adminEvent.getOperationType().name(),
            adminEvent.getResourceTypeAsString(),
            adminEvent.getResourcePath(),
            adminEvent.getAuthDetails().getUserId()));
    }

    @Override
    public void close() { }
}
```

### Q11: How should you securely store JWT tokens on the client side? Discuss localStorage, sessionStorage, cookies, and their trade-offs.

**Answer:**

The choice of where to store JWT tokens on the client side has significant security implications.

**localStorage**

Convenient but vulnerable to XSS attacks. Any script running on your domain can read `localStorage.getItem('access_token')` and exfiltrate the token.

```javascript
// Storing in localStorage
localStorage.setItem('access_token', jwtToken);

// Using the token
const token = localStorage.getItem('access_token');
fetch('/api/protected', { headers: { 'Authorization': `Bearer ${token}` } });
```

Risks:
- Full XSS vulnerability â€” one injected script compromises all tokens.
- No built-in expiry mechanism.
- Accessible by any JavaScript on the same origin.

**sessionStorage**

Same XSS vulnerabilities as localStorage, but scoped to the browser tab and cleared when the tab is closed.

```javascript
sessionStorage.setItem('access_token', jwtToken);
```

**HTTP-Only Cookies (Recommended)**

Provides the best protection against XSS attacks because JavaScript cannot read the cookie at all:

```java
@Component
public class JwtCookieHelper {

    public ResponseCookie createAccessTokenCookie(String token) {
        return ResponseCookie.from("access_token", token)
            .httpOnly(true)
            .secure(true)
            .sameSite("Strict")
            .path("/")
            .maxAge(Duration.ofMinutes(15))
            .build();
    }

    public ResponseCookie createRefreshTokenCookie(String token) {
        return ResponseCookie.from("refresh_token", token)
            .httpOnly(true)
            .secure(true)
            .sameSite("Strict")
            .path("/api/auth/refresh")
            .maxAge(Duration.ofDays(7))
            .build();
    }

    public ResponseCookie clearAccessTokenCookie() {
        return ResponseCookie.from("access_token", "")
            .httpOnly(true).secure(true).sameSite("Strict")
            .path("/").maxAge(0).build();
    }
}
```

```java
@RestController
@RequestMapping("/api/auth")
public class CookieBasedAuthController {

    private final JwtCookieHelper cookieHelper;
    private final JwtTokenProvider tokenProvider;
    private final AuthenticationManager authManager;

    public CookieBasedAuthController(JwtCookieHelper cookieHelper,
                                      JwtTokenProvider tokenProvider,
                                      AuthenticationManager authManager) {
        this.cookieHelper = cookieHelper;
        this.tokenProvider = tokenProvider;
        this.authManager = authManager;
    }

    @PostMapping("/login")
    public ResponseEntity<Void> login(@RequestBody @Valid LoginRequest request) {
        Authentication authentication = authManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.email(), request.password()));
        String accessToken = tokenProvider.generateAccessToken(authentication);
        String refreshToken = tokenProvider.generateRefreshToken(authentication);

        return ResponseEntity.ok()
            .header(HttpHeaders.SET_COOKIE, cookieHelper.createAccessTokenCookie(accessToken).toString())
            .header(HttpHeaders.SET_COOKIE, cookieHelper.createRefreshTokenCookie(refreshToken).toString())
            .build();
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {
        return ResponseEntity.ok()
            .header(HttpHeaders.SET_COOKIE, cookieHelper.clearAccessTokenCookie().toString())
            .build();
    }
}
```

Summary Table:

| Storage | XSS Protection | CSRF Protection | Auto-send | Tab-scoped |
|---------|---------------|----------------|-----------|------------|
| localStorage | None | Good (header required) | No | No |
| sessionStorage | None | Good (header required) | No | Yes |
| HttpOnly Cookie | Yes | Needs SameSite/CSRF | Yes | No |

### Q12: Explain the OAuth2 client credentials grant. When and why would you use it?

**Answer:**

The OAuth2 client credentials grant is a server-to-server authentication flow where the client application authenticates itself (not a user) to obtain an access token. It involves no user interaction, no redirects, and no browser involvement.

The flow:

```
POST /realms/my-realm/protocol/openid-connect/token HTTP/1.1
Host: auth.example.com
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=my-service
&client_secret=my-service-secret
&scope=orders:read orders:write
```

Response:

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "expires_in": 3600,
  "token_type": "Bearer",
  "scope": "orders:read orders:write"
}
```

Spring Boot service using the client credentials grant:

```java
@Service
public class ClientCredentialsService {

    private final RestTemplate restTemplate;
    private final TokenCache tokenCache;
    private final OAuth2ClientProperties properties;

    public ClientCredentialsService(RestTemplate restTemplate,
                                     TokenCache tokenCache,
                                     OAuth2ClientProperties properties) {
        this.restTemplate = restTemplate;
        this.tokenCache = tokenCache;
        this.properties = properties;
    }

    public String getAccessToken() {
        return tokenCache.getToken().orElseGet(() -> {
            String newToken = fetchNewToken();
            tokenCache.setToken(newToken);
            return newToken;
        });
    }

    private String fetchNewToken() {
        String tokenUri = properties.getProvider().get("keycloak").getTokenUri();
        String clientId = properties.getRegistration().get("my-service").getClientId();
        String clientSecret = properties.getRegistration().get("my-service").getClientSecret();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "client_credentials");
        body.add("client_id", clientId);
        body.add("client_secret", clientSecret);
        body.add("scope", "orders:read orders:write");

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(body, headers);
        ResponseEntity<OAuth2TokenResponse> response = restTemplate.postForEntity(
            tokenUri, request, OAuth2TokenResponse.class);
        return response.getBody().getAccessToken();
    }
}
```

Using Spring Security's OAuth2 client support:

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          my-service:
            client-id: my-service
            client-secret: ${MY_SERVICE_CLIENT_SECRET}
            authorization-grant-type: client_credentials
            scope: orders:read,orders:write
        provider:
          my-service:
            token-uri: https://auth.example.com/realms/my-realm/protocol/openid-connect/token
```

```java
@Service
public class ClientCredentialsClient {

    private final OAuth2AuthorizedClientManager authorizedClientManager;

    public ClientCredentialsClient(OAuth2AuthorizedClientManager authorizedClientManager) {
        this.authorizedClientManager = authorizedClientManager;
    }

    public String getToken() {
        OAuth2AuthorizeRequest authorizeRequest = OAuth2AuthorizeRequest
            .withClientRegistrationId("my-service")
            .principal(new ClientPrincipal("my-service"))
            .build();
        OAuth2AuthorizedClient authorizedClient =
            authorizedClientManager.authorize(authorizeRequest);
        if (authorizedClient == null) {
            throw new IllegalStateException("Failed to obtain token");
        }
        return authorizedClient.getAccessToken().getTokenValue();
    }

    private record ClientPrincipal(String name) implements Principal {
        @Override
        public String getName() { return name; }
    }
}
```

When to use client credentials:
- Microservice-to-microservice communication
- Scheduled batch jobs or background workers
- Admin operations and system maintenance tasks
- API gateways authenticating to downstream services

When NOT to use client credentials:
- When you need to act on behalf of a specific user
- When you need per-user authorization or audit trails
- Client-side applications cannot safely store a client secret

### Q13: How do you configure Spring Security for a reactive web application (WebFlux)? How does it differ from the servlet stack?

**Answer:**

Spring Security for WebFlux (reactive applications built on Spring WebFlux) uses a fundamentally different architecture than the traditional servlet stack.

Key differences:
1. `SecurityWebFilterChain` instead of `SecurityFilterChain`
2. `ReactiveAuthenticationManager` instead of `AuthenticationManager`
3. `ServerHttpSecurity` instead of `HttpSecurity`
4. `ServerWebExchange` instead of `HttpServletRequest/Response`
5. `ReactiveUserDetailsService` instead of `UserDetailsService`
6. `Mono/Flux` return types for all security operations

Complete WebFlux security configuration:

```java
@Configuration
@EnableWebFluxSecurity
@EnableReactiveMethodSecurity
public class ReactiveSecurityConfig {

    @Bean
    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
        http
            .csrf(ServerHttpSecurity.CsrfSpec::disable)
            .authorizeExchange(exchanges -> exchanges
                .pathMatchers("/api/auth/**").permitAll()
                .pathMatchers("/api/admin/**").hasRole("ADMIN")
                .pathMatchers(HttpMethod.GET, "/api/products/**").permitAll()
                .anyExchange().authenticated()
            )
            .authenticationManager(reactiveAuthenticationManager())
            .exceptionHandling(handling -> handling
                .authenticationEntryPoint((exchange, ex) ->
                    Mono.fromRunnable(() -> exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED)))
                .accessDeniedHandler((exchange, ex) ->
                    Mono.fromRunnable(() -> exchange.getResponse().setStatusCode(HttpStatus.FORBIDDEN)))
            );
        return http.build();
    }

    @Bean
    public ReactiveAuthenticationManager reactiveAuthenticationManager() {
        return new UserDetailsRepositoryReactiveAuthenticationManager(reactiveUserDetailsService());
    }

    @Bean
    public ReactiveUserDetailsService reactiveUserDetailsService() {
        return username -> userRepository.findByEmail(username)
            .map(this::toUserDetails)
            .cast(UserDetails.class);
    }

    private UserDetails toUserDetails(User user) {
        return org.springframework.security.core.userdetails.User.builder()
            .username(user.getEmail())
            .password(user.getPasswordHash())
            .roles(user.getRoles().stream().map(Role::getName).toArray(String[]::new))
            .build();
    }
}
```

JWT authentication filter for WebFlux:

```java
@Component
public class ReactiveJwtAuthenticationFilter implements WebFilter {

    private final ReactiveJwtTokenProvider tokenProvider;

    public ReactiveJwtAuthenticationFilter(ReactiveJwtTokenProvider tokenProvider) {
        this.tokenProvider = tokenProvider;
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        String token = extractToken(exchange.getRequest());
        if (token != null) {
            return tokenProvider.authenticate(token)
                .flatMap(authentication -> chain.filter(exchange)
                    .contextWrite(ReactiveSecurityContextHolder
                        .withSecurityContext(Mono.just(new SecurityContextImpl(authentication)))))
                .switchIfEmpty(chain.filter(exchange));
        }
        return chain.filter(exchange);
    }

    private String extractToken(ServerHttpRequest request) {
        String bearer = request.getHeaders().getFirst(HttpHeaders.AUTHORIZATION);
        if (bearer != null && bearer.startsWith("Bearer ")) return bearer.substring(7);
        return null;
    }
}
```

Reactive method security:

```java
@RestController
@RequestMapping("/api/orders")
public class ReactiveOrderController {

    private final ReactiveOrderService orderService;

    public ReactiveOrderController(ReactiveOrderService orderService) {
        this.orderService = orderService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public Flux<Order> getAllOrders() { return orderService.findAll(); }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{id}")
    public Mono<Order> getOrder(@PathVariable Long id) { return orderService.findById(id); }
}
```

Key differences from the servlet stack:

| Servlet Stack | WebFlux Stack |
|--------------|---------------|
| `SecurityFilterChain` | `SecurityWebFilterChain` |
| `HttpSecurity` | `ServerHttpSecurity` |
| `@EnableWebSecurity` | `@EnableWebFluxSecurity` |
| `AuthenticationManager` | `ReactiveAuthenticationManager` |
| `UserDetailsService` | `ReactiveUserDetailsService` |
| `SecurityContextHolder` (ThreadLocal) | `ReactiveSecurityContextHolder` (Reactor Context) |
| `OncePerRequestFilter` | `WebFilter` |
| Blocking I/O | Non-blocking, reactive |

### Q14: Implement a secure password hashing strategy using bcrypt and Argon2. Explain salt and pepper.

**Answer:**

Password hashing transforms a plaintext password into an irreversible, fixed-length string. The two primary modern algorithms are bcrypt and Argon2id. Both incorporate salts â€” random values unique per password â€” to prevent rainbow table attacks.

**Salt** is a cryptographically random string, unique per user, combined with the password before hashing. Salt prevents rainbow table attacks and detecting users with identical passwords.

**Pepper** is a secret application-wide key combined with the password before hashing, stored separately in an environment variable or HSM. If an attacker gains database access but not the pepper, they cannot crack the hashes.

**Bcrypt Implementation:**

```java
@Service
public class BcryptPasswordHashingService {

    private static final int BCRYPT_STRENGTH = 12;
    private static final String PEPPER = System.getenv("PASSWORD_PEPPER");
    private final BCryptPasswordEncoder encoder;

    public BcryptPasswordHashingService() {
        this.encoder = new BCryptPasswordEncoder(BCRYPT_STRENGTH);
    }

    public String hashPassword(String rawPassword) {
        return encoder.encode(rawPassword + PEPPER);
    }

    public boolean verifyPassword(String rawPassword, String storedHash) {
        return encoder.matches(rawPassword + PEPPER, storedHash);
    }
}
```

**Argon2 Implementation:**

```java
@Service
public class Argon2PasswordHashingService {

    private static final int SALT_LENGTH = 16;
    private static final int HASH_LENGTH = 32;
    private static final int PARALLELISM = 1;
    private static final int MEMORY = 1 << 14;
    private static final int ITERATIONS = 3;
    private static final String PEPPER = System.getenv("PASSWORD_PEPPER");

    private final Argon2PasswordEncoder encoder;

    public Argon2PasswordHashingService() {
        this.encoder = new Argon2PasswordEncoder(SALT_LENGTH, HASH_LENGTH, PARALLELISM, MEMORY, ITERATIONS);
    }

    public String hashPassword(String rawPassword) {
        return encoder.encode(rawPassword + PEPPER);
    }

    public boolean verifyPassword(String rawPassword, String storedHash) {
        return encoder.matches(rawPassword + PEPPER, storedHash);
    }

    public boolean needsUpgrade(String currentHash) {
        if (!currentHash.startsWith("$argon2id$")) return true;
        String[] parts = currentHash.split("\\$");
        if (parts.length >= 4) {
            String params = parts[3];
            return !params.contains("m=" + MEMORY) || !params.contains("t=" + ITERATIONS);
        }
        return false;
    }
}
```

**Password migration strategy:**

When a user logs in with a legacy hash format, transparently upgrade their hash:

```java
@Component
public class PasswordMigrationService {

    private final Argon2PasswordHashingService argon2Service;
    private final UserRepository userRepository;

    public PasswordMigrationService(Argon2PasswordHashingService argon2Service,
                                     UserRepository userRepository) {
        this.argon2Service = argon2Service;
        this.userRepository = userRepository;
    }

    public boolean authenticateAndUpgrade(String email, String rawPassword) {
        User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new BadCredentialsException("Invalid credentials"));

        boolean matches;
        if (user.getPasswordAlgorithm() == PasswordAlgorithm.BCRYPT) {
            BCryptPasswordEncoder legacyEncoder = new BCryptPasswordEncoder();
            matches = legacyEncoder.matches(rawPassword + PEPPER, user.getPasswordHash());
        } else if (user.getPasswordAlgorithm() == PasswordAlgorithm.ARGON2ID) {
            matches = argon2Service.verifyPassword(rawPassword, user.getPasswordHash());
        } else {
            throw new IllegalStateException("Unknown algorithm: " + user.getPasswordAlgorithm());
        }

        if (matches) {
            if (argon2Service.needsUpgrade(user.getPasswordHash())) {
                String newHash = argon2Service.hashPassword(rawPassword);
                user.setPasswordHash(newHash);
                user.setPasswordAlgorithm(PasswordAlgorithm.ARGON2ID);
                userRepository.save(user);
            }
            return true;
        }
        return false;
    }
}
```

**Password policy enforcement:**

```java
@Component
public class PasswordPolicyValidator {

    private static final int MIN_LENGTH = 12;
    private static final int MAX_LENGTH = 128;
    private static final int MIN_UPPERCASE = 1;
    private static final int MIN_LOWERCASE = 1;
    private static final int MIN_DIGITS = 1;
    private static final int MIN_SPECIAL = 1;
    private static final int MAX_CONSECUTIVE_REPEAT = 3;
    private static final int PASSWORD_HISTORY = 5;

    public ValidationResult validate(String password, List<String> passwordHistory) {
        List<String> errors = new ArrayList<>();
        if (password.length() < MIN_LENGTH) errors.add("Must be at least " + MIN_LENGTH + " characters");
        if (password.length() > MAX_LENGTH) errors.add("Must not exceed " + MAX_LENGTH + " characters");
        if (count(password, Character::isUpperCase) < MIN_UPPERCASE) errors.add("Need uppercase letter");
        if (count(password, Character::isLowerCase) < MIN_LOWERCASE) errors.add("Need lowercase letter");
        if (count(password, Character::isDigit) < MIN_DIGITS) errors.add("Need digit");
        if (count(password, c -> !Character.isLetterOrDigit(c)) < MIN_SPECIAL) errors.add("Need special character");
        if (password.matches(".*(.)\\1{" + (MAX_CONSECUTIVE_REPEAT - 1) + ",}.*")) errors.add("Too many consecutive characters");

        for (String oldHash : passwordHistory) {
            if (new BCryptPasswordEncoder().matches(password, oldHash)) {
                errors.add("Must not match any of the last " + PASSWORD_HISTORY + " passwords");
                break;
            }
        }
        return new ValidationResult(errors.isEmpty(), errors);
    }

    private int count(String password, java.util.function.IntPredicate predicate) {
        return (int) password.chars().filter(predicate).count();
    }

    public record ValidationResult(boolean valid, List<String> errors) {}
}
```

**Complete password configuration in Spring Security:**

```java
@Configuration
public class PasswordConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        String defaultEncodingId = "argon2id";
        Map<String, PasswordEncoder> encoders = new HashMap<>();
        encoders.put("argon2id", new Argon2PasswordEncoder(16, 32, 1, 1 << 14, 3));
        encoders.put("bcrypt", new BCryptPasswordEncoder(12));
        encoders.put("pbkdf2", Pbkdf2PasswordEncoder.defaultsForSpringSecurity_v5_8());

        DelegatingPasswordEncoder delegatingEncoder = new DelegatingPasswordEncoder(defaultEncodingId, encoders);
        delegatingEncoder.setDefaultPasswordEncoderForMatches(encoders.get(defaultEncodingId));
        return delegatingEncoder;
    }
}
```

### Q15: Explain the OAuth2 Device Authorization Grant. When would you use it?

**Answer:**

The OAuth2 Device Authorization Grant (Device Flow) is designed for devices that have no browser or limited input capabilities â€” smart TVs, game consoles, IoT devices, CLI tools.

The flow:

1. The device requests a device code from the authorization server.
2. The server returns a device code, user code, verification URI, and polling interval.
3. The device displays the user code and verification URI.
4. The user navigates to the verification URI on a browser-enabled device and enters the code.
5. The device polls the token endpoint until authorization is granted or expires.
6. The server returns an access token to the device.

```
Device â†’ Auth Server:
POST /realms/my-realm/protocol/openid-connect/auth/device
client_id=smart-tv-app
&scope=openid profile streaming:read

Auth Server â†’ Device:
{
  "device_code": "dGhpcyBpcyBhbiBleGFtcGxl",
  "user_code": "WDJB-MJHT",
  "verification_uri": "https://auth.example.com/device",
  "expires_in": 1800,
  "interval": 5
}
```

Spring Boot implementation:

```java
@Service
public class DeviceAuthorizationService {

    private final RestTemplate restTemplate;
    private final String clientId;
    private final String tokenEndpoint;
    private final String deviceAuthEndpoint;

    public DeviceAuthorizationService(RestTemplate restTemplate,
                                       @Value("${oauth2.client-id}") String clientId,
                                       @Value("${oauth2.token-uri}") String tokenEndpoint,
                                       @Value("${oauth2.device-auth-uri}") String deviceAuthEndpoint) {
        this.restTemplate = restTemplate;
        this.clientId = clientId;
        this.tokenEndpoint = tokenEndpoint;
        this.deviceAuthEndpoint = deviceAuthEndpoint;
    }

    public DeviceAuthorizationResponse requestDeviceAuthorization() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("client_id", clientId);
        body.add("scope", "openid profile streaming:read");

        ResponseEntity<DeviceAuthorizationResponse> response = restTemplate.postForEntity(
            deviceAuthEndpoint, new HttpEntity<>(body, headers), DeviceAuthorizationResponse.class);
        return response.getBody();
    }

    public TokenResponse pollForToken(String deviceCode, long expiresIn, int interval) {
        long startTime = System.currentTimeMillis();
        long timeout = expiresIn * 1000L;

        while (System.currentTimeMillis() - startTime < timeout) {
            try { Thread.sleep(interval * 1000L); } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                throw new RuntimeException("Polling interrupted", e);
            }
            try {
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
                MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
                body.add("grant_type", "urn:ietf:params:oauth:grant-type:device_code");
                body.add("device_code", deviceCode);
                body.add("client_id", clientId);

                ResponseEntity<TokenResponse> response = restTemplate.postForEntity(
                    tokenEndpoint, new HttpEntity<>(body, headers), TokenResponse.class);
                return response.getBody();
            } catch (HttpClientErrorException e) {
                String errorBody = e.getResponseBodyAsString();
                try {
                    String errorCode = new ObjectMapper().readTree(errorBody).get("error").asText();
                    if ("authorization_pending".equals(errorCode)) continue;
                    if ("slow_down".equals(errorCode)) { interval += 5; continue; }
                    if ("expired_token".equals(errorCode)) throw new RuntimeException("Device code expired");
                    if ("access_denied".equals(errorCode)) throw new RuntimeException("User denied authorization");
                } catch (JsonProcessingException ex) {
                    throw new RuntimeException("Failed to parse error", ex);
                }
            }
        }
        throw new RuntimeException("Device code timed out");
    }
}
```

### Q16: Explain SSL/TLS, HTTPS, and certificate pinning. How does Spring Boot configure HTTPS?

**Answer:**

TLS (Transport Layer Security) encrypts data between client and server, providing confidentiality, integrity, and authentication. HTTPS is HTTP over TLS.

**How TLS Works:**

1. **Client Hello**: The client sends supported TLS versions, cipher suites, and a random number.
2. **Server Hello**: The server selects protocol and cipher, sends its certificate (with public key), and a server random.
3. **Certificate Verification**: The client verifies the certificate against trusted CAs.
4. **Key Exchange**: The client generates a pre-master secret, encrypts it with the server's public key.
5. **Session Keys**: Both parties derive symmetric session keys.
6. **Finished**: Encrypted "Finished" messages confirm the handshake.

**Configuring HTTPS in Spring Boot:**

Generate a keystore:
```bash
keytool -genkeypair -alias myapp -keyalg RSA -keysize 4096 \
  -validity 365 -keystore keystore.p12 -storetype PKCS12 \
  -dname "CN=example.com,OU=IT,O=My Company,L=New York,ST=NY,C=US"
```

```yaml
server:
  port: 8443
  ssl:
    enabled: true
    key-store: classpath:keystore.p12
    key-store-password: ${KEYSTORE_PASSWORD}
    key-store-type: PKCS12
    key-alias: myapp
    protocol: TLS
    enabled-protocols:
      - TLSv1.3
      - TLSv1.2
    ciphers:
      - TLS_AES_256_GCM_SHA384
      - TLS_AES_128_GCM_SHA256
      - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
```

HTTP to HTTPS redirect:

```java
http.requiresChannel(channel -> channel
    .anyRequest().requiresSecure()
);
.portMapper(portMapper -> portMapper
    .http(8080).mapsTo(8443)
);
```

For deployments behind a reverse proxy:

```yaml
server:
  forward-headers-strategy: framework
  tomcat:
    remoteip:
      protocol-header: X-Forwarded-Proto
      remote-ip-header: X-Forwarded-For
```

**Mutual TLS (mTLS):**

```java
http.x509(x509 -> x509
    .subjectPrincipalRegex("CN=(.*?)(?:,|$)")
    .userDetailsService(x509UserDetailsService())
);
```

**Certificate Pinning:**

Associates a host with its expected certificate or public key. Prevents attacks from compromised CAs.

```java
@Configuration
public class CertificatePinningConfig {

    @Bean
    public RestTemplate pinningRestTemplate() {
        return new RestTemplate(pinningRequestFactory());
    }

    private ClientHttpRequestFactory pinningRequestFactory() {
        try {
            TrustManager pinnedTrustManager = new X509ExtendedTrustManager() {
                @Override
                public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
                    if (chain == null || chain.length == 0) throw new CertificateException("Empty chain");
                    PublicKey publicKey = chain[0].getPublicKey();
                    String keyHash = computeSha256Hash(publicKey.getEncoded());
                    if (!PINNED_KEY_HASHES.contains(keyHash)) {
                        throw new CertificateException("Certificate not pinned: " + keyHash);
                    }
                }
                @Override
                public X509Certificate[] getAcceptedIssuers() { return new X509Certificate[0]; }
                private String computeSha256Hash(byte[] input) throws Exception {
                    byte[] hash = MessageDigest.getInstance("SHA-256").digest(input);
                    return Base64.getEncoder().encodeToString(hash);
                }
                @Override public void checkClientTrusted(X509Certificate[] chain, String authType) { }
                @Override public void checkClientTrusted(X509Certificate[] chain, String authType, Socket socket) { }
                @Override public void checkServerTrusted(X509Certificate[] chain, String authType, Socket socket) {
                    checkServerTrusted(chain, authType);
                }
                @Override public void checkClientTrusted(X509Certificate[] chain, String authType, SSLEngine engine) { }
                @Override public void checkServerTrusted(X509Certificate[] chain, String authType, SSLEngine engine) {
                    checkServerTrusted(chain, authType);
                }
            };
            SSLContext sslContext = SSLContext.getInstance("TLSv1.3");
            sslContext.init(null, new TrustManager[]{pinnedTrustManager}, null);
            HttpsUrlConnectionDefaultSslSocketFactory factory = new HttpsUrlConnectionDefaultSslSocketFactory(sslContext);
            return new HttpComponentsClientHttpRequestFactory();
        } catch (Exception e) {
            throw new RuntimeException("Failed to configure certificate pinning", e);
        }
    }

    private static final Set<String> PINNED_KEY_HASHES = Set.of(
        "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
        "2CI5SDPJkW7C+Z0hJk8nEJ1Rq+W8LlYqE3FoFASnFpA="
    );
}
```

**HSTS:**

```java
http.headers(headers -> headers
    .httpStrictTransportSecurity(hsts -> hsts
        .includeSubDomains(true)
        .maxAgeInSeconds(31536000)
        .preload(true)
    )
);
```

### Q17: How do you implement a custom AuthenticationProvider in Spring Security?

**Answer:**

A custom `AuthenticationProvider` allows you to implement non-standard authentication mechanisms â€” OTP codes, hardware tokens, biometrics, MFA, or integration with legacy systems.

The `AuthenticationProvider` interface has two methods:
- `authenticate(Authentication)` â€” performs auth and returns a populated `Authentication` object
- `supports(Class)` â€” returns true if this provider handles the given token type

Complete TOTP-based MFA authentication provider:

```java
@Service
public class TotpAuthenticationProvider implements AuthenticationProvider {

    private final UserRepository userRepository;
    private final TotpService totpService;
    private final PasswordEncoder passwordEncoder;

    public TotpAuthenticationProvider(UserRepository userRepository,
                                       TotpService totpService,
                                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.totpService = totpService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Authentication authenticate(Authentication authentication)
            throws AuthenticationException {
        TotpAuthenticationToken token = (TotpAuthenticationToken) authentication;

        // Stage 1: Initial authentication (username + password)
        if (token.getTotpCode() == null) {
            User user = userRepository.findByEmail(token.getPrincipal().toString())
                .orElseThrow(() -> new BadCredentialsException("Invalid credentials"));

            if (!passwordEncoder.matches(token.getCredentials().toString(), user.getPasswordHash())) {
                throw new BadCredentialsException("Invalid credentials");
            }

            if (user.isMfaEnabled()) {
                return new TotpAuthenticationToken(token.getPrincipal(), token.getCredentials(),
                    null, user.getMfaSecret(), List.of());
            }

            return new UsernamePasswordAuthenticationToken(user.getEmail(), null,
                user.getRoles().stream().map(r -> new SimpleGrantedAuthority("ROLE_" + r.getName())).toList());
        }

        // Stage 2: TOTP verification
        User user = userRepository.findByEmail(token.getPrincipal().toString())
            .orElseThrow(() -> new BadCredentialsException("User not found"));

        boolean isValid = totpService.verifyCode(user.getMfaSecret(), token.getTotpCode());
        if (!isValid) throw new BadCredentialsException("Invalid TOTP code");

        return new UsernamePasswordAuthenticationToken(user.getEmail(), null,
            user.getRoles().stream().map(r -> new SimpleGrantedAuthority("ROLE_" + r.getName())).toList());
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return TotpAuthenticationToken.class.isAssignableFrom(authentication);
    }
}
```

The custom authentication token:

```java
public class TotpAuthenticationToken extends AbstractAuthenticationToken {
    private final Object principal;
    private final Object credentials;
    private final String totpCode;
    private final String mfaSecret;

    public TotpAuthenticationToken(Object principal, Object credentials,
                                    String totpCode, String mfaSecret,
                                    Collection<? extends GrantedAuthority> authorities) {
        super(authorities);
        this.principal = principal;
        this.credentials = credentials;
        this.totpCode = totpCode;
        this.mfaSecret = mfaSecret;
        setAuthenticated(authorities != null && !authorities.isEmpty());
    }

    @Override public Object getPrincipal() { return principal; }
    @Override public Object getCredentials() { return credentials; }
    public String getTotpCode() { return totpCode; }
    public String getMfaSecret() { return mfaSecret; }
}
```

The TOTP service:

```java
@Service
public class TotpService {

    private static final long TIME_STEP_SECONDS = 30;
    private static final int WINDOW_SIZE = 1;

    public String generateSecret() {
        byte[] secret = new byte[20];
        new SecureRandom().nextBytes(secret);
        return Base32.getEncoder().encodeToString(secret);
    }

    public String generateQrCodeUri(String secret, String email, String issuer) {
        return String.format("otpauth://totp/%s:%s?secret=%s&issuer=%s&algorithm=SHA1&digits=6&period=%d",
            issuer, email, secret, issuer, TIME_STEP_SECONDS);
    }

    public boolean verifyCode(String secret, String code) {
        long timeIndex = Instant.now().getEpochSecond() / TIME_STEP_SECONDS;
        for (int i = -WINDOW_SIZE; i <= WINDOW_SIZE; i++) {
            if (generateTOTP(secret, timeIndex + i).equals(code)) return true;
        }
        return false;
    }

    private String generateTOTP(String secret, long timeIndex) {
        try {
            byte[] key = Base32.getDecoder().decode(secret);
            byte[] message = ByteBuffer.allocate(8).putLong(timeIndex).array();
            Mac mac = Mac.getInstance("HmacSHA1");
            mac.init(new SecretKeySpec(key, "HmacSHA1"));
            byte[] hash = mac.doFinal(message);
            int offset = hash[hash.length - 1] & 0xF;
            int binary = ((hash[offset] & 0x7F) << 24) | ((hash[offset + 1] & 0xFF) << 16) |
                         ((hash[offset + 2] & 0xFF) << 8) | (hash[offset + 3] & 0xFF);
            return String.format("%06d", binary % 1_000_000);
        } catch (Exception e) {
            throw new RuntimeException("Failed to generate TOTP", e);
        }
    }
}
```

### Q18: Explain the OAuth2 authorization code flow with PKCE in detail. Show the complete implementation.

**Answer:**

The authorization code flow with PKCE (Proof Key for Code Exchange) is the recommended OAuth2 flow for public clients â€” single-page applications, mobile apps, and native desktop apps. PKCE prevents the authorization code interception attack by introducing a cryptographic challenge-verifier pair.

**Complete step-by-step flow:**

1. The client generates a cryptographically random `code_verifier` string.
2. The client computes a `code_challenge` by SHA-256 hashing the verifier.
3. The client redirects the user to the authorization server with `code_challenge` and `code_challenge_method=S256`.
4. The user authenticates and consents.
5. The authorization server redirects back with an authorization code.
6. The client exchanges the code by sending the original `code_verifier` to the token endpoint.
7. The server hashes the verifier, compares it to the challenge, and if they match, issues tokens.

```
Browser â†’ Auth Server: GET /authorize?response_type=code&client_id=myapp&code_challenge=E9Melho...&code_challenge_method=S256

Auth Server â†’ Browser: redirect with ?code=xxxxx

Browser â†’ Client Backend: POST /callback?code=xxxxx

Client Backend â†’ Auth Server: POST /token
  grant_type=authorization_code
  code=xxxxx
  code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk
  client_id=myapp

Auth Server â†’ Client Backend: { access_token, id_token, refresh_token }
```

Spring Boot controller implementing the client:

```java
@RestController
@RequestMapping("/api/auth")
public class PkceAuthController {

    private final RestTemplate restTemplate;
    private final String tokenEndpoint;
    private final String clientId;
    private final String redirectUri;

    public PkceAuthController(RestTemplate restTemplate,
                               @Value("${oauth2.token-uri}") String tokenEndpoint,
                               @Value("${oauth2.client-id}") String clientId,
                               @Value("${oauth2.redirect-uri}") String redirectUri) {
        this.restTemplate = restTemplate;
        this.tokenEndpoint = tokenEndpoint;
        this.clientId = clientId;
        this.redirectUri = redirectUri;
    }

    @PostMapping("/callback")
    public ResponseEntity<TokenResponse> handleCallback(@RequestParam String code,
                                                          @RequestParam String state,
                                                          @SessionAttribute String expectedState,
                                                          @SessionAttribute String codeVerifier) {
        // Validate state to prevent CSRF
        if (!expectedState.equals(state)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "authorization_code");
        body.add("code", code);
        body.add("redirect_uri", redirectUri);
        body.add("client_id", clientId);
        body.add("code_verifier", codeVerifier);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(body, headers);

        ResponseEntity<TokenResponse> response = restTemplate.postForEntity(
            tokenEndpoint, request, TokenResponse.class);

        return ResponseEntity.ok(response.getBody());
    }

    @GetMapping("/authorize")
    public ResponseEntity<AuthInitResponse> initiateAuthorization() {
        try {
            String codeVerifier = PkceUtil.generateCodeVerifier();
            String codeChallenge = PkceUtil.generateCodeChallenge(codeVerifier);
            String state = UUID.randomUUID().toString();

            String authorizeUrl = String.format(
                "%s?response_type=code&client_id=%s&redirect_uri=%s&code_challenge=%s&code_challenge_method=S256&state=%s&scope=%s",
                authorizeEndpoint, clientId, redirectUri, codeChallenge, state,
                URLEncoder.encode("openid profile email", "UTF-8")
            );

            return ResponseEntity.ok(new AuthInitResponse(authorizeUrl, state, codeVerifier));
        } catch (Exception e) {
            throw new RuntimeException("Failed to initiate authorization", e);
        }
    }
}

public record AuthInitResponse(String authorizeUrl, String state, String codeVerifier) {}
public record TokenResponse(@JsonProperty("access_token") String accessToken,
                             @JsonProperty("id_token") String idToken,
                             @JsonProperty("refresh_token") String refreshToken,
                             @JsonProperty("expires_in") long expiresIn) {}
```

### Q19: How does Spring Security handle CORS preflight requests? What is the OPTIONS request handling?

**Answer:**

CORS preflight requests are `OPTIONS` requests sent by browsers before certain cross-origin requests. They check if the actual request is safe to send. Preflight triggers when:
- HTTP methods other than GET, HEAD, or POST are used
- Custom headers (e.g., Authorization, X-Requested-With) are included
- Content-Type is not `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`

The browser sends an OPTIONS request with:
- `Origin`: the source origin
- `Access-Control-Request-Method`: the intended HTTP method
- `Access-Control-Request-Headers`: the intended custom headers

The server must respond with:
- `Access-Control-Allow-Origin`: the allowed origin
- `Access-Control-Allow-Methods`: the allowed methods
- `Access-Control-Allow-Headers`: the allowed headers
- `Access-Control-Max-Age`: how long to cache the preflight result

Spring Security delegates CORS handling to Spring MVC's `CorsProcessor`. The most common issue is that the security filter chain blocks OPTIONS requests before they reach the CORS processor. The fix is to ensure CORS is configured in Spring Security and that OPTIONS requests bypass authentication.

```java
@Configuration
@EnableWebSecurity
public class CorsSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors(Customizer.withDefaults())
            .authorizeHttpRequests(authz -> authz
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                // ... other rules
            );
        return http.build();
    }
}
```

The CORS configuration source:

```java
@Bean
public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    configuration.setAllowedOrigins(Arrays.asList("https://app.example.com"));
    configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
    configuration.setAllowedHeaders(Arrays.asList("*"));
    configuration.setAllowCredentials(true);
    configuration.setMaxAge(3600L);

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", configuration);
    return source;
}
```

If your Spring Security version does not have explicit OPTIONS handling, or if a custom filter is intercepting requests, you may see CORS errors. Debug with:

```yaml
logging:
  level:
    org.springframework.security: DEBUG
    org.springframework.web.cors: DEBUG
```

Common CORS troubleshooting checklist:
- The `Access-Control-Allow-Origin` must exactly match the request's `Origin` header.
- `allowCredentials(true)` requires `allowedOrigins` to be specific (not `*`).
- The browser sends preflight OPTIONS before the actual request â€” check both in server logs.
- If CORS is configured in both Spring Security and Spring MVC, Spring Security takes precedence.
- For Spring Cloud Gateway or API gateways, ensure the gateway does not strip CORS headers.

### Q20: Explain secrets management in Spring Boot applications. How do you integrate with HashiCorp Vault?

**Answer:**

Secrets management involves securely storing, accessing, and rotating sensitive configuration â€” database passwords, API keys, TLS certificates, and encryption keys. Never hardcode secrets in source code or configuration files.

**Spring Cloud Vault Integration:**

```yaml
spring:
  application:
    name: my-app
  cloud:
    vault:
      host: vault.example.com
      port: 8200
      scheme: https
      authentication: TOKEN
      token: ${VAULT_TOKEN}
      kv:
        enabled: true
        backend: secret
        default-context: my-app
        profile-separator: /
      database:
        enabled: true
        role: my-app-db-role
        backend: database
```

```java
@Configuration
public class VaultConfig {

    @Bean
    public VaultTemplate vaultTemplate() {
        VaultEndpoint endpoint = VaultEndpoint.create("vault.example.com", 8200);
        endpoint.setScheme("https");

        ClientAuthentication auth = new TokenAuthentication(System.getenv("VAULT_TOKEN"));
        return new VaultTemplate(endpoint, auth);
    }
}
```

Reading secrets from Vault:

```java
@Service
public class VaultSecretService {

    private final VaultTemplate vaultTemplate;

    public VaultSecretService(VaultTemplate vaultTemplate) {
        this.vaultTemplate = vaultTemplate;
    }

    public String getDatabasePassword() {
        VaultResponseSupport<Map<String, Object>> response = vaultTemplate
            .read("secret/my-app/database");
        if (response != null && response.getData() != null) {
            return (String) response.getData().get("password");
        }
        throw new IllegalStateException("Database password not found in Vault");
    }

    public Map<String, Object> readSecret(String path) {
        VaultResponseSupport<Map<String, Object>> response = vaultTemplate.read(path);
        return response != null ? response.getData() : Map.of();
    }

    public void writeSecret(String path, Map<String, Object> secrets) {
        vaultTemplate.write(path, secrets);
    }
}
```

**Dynamic database credentials with Vault:**

```java
@Configuration
public class VaultDatabaseConfig {

    @Bean
    public DataSource dataSource(VaultTemplate vaultTemplate) {
        VaultDatabaseCredentials credentials = vaultTemplate.read(
            "database/creds/my-app-db-role", VaultDatabaseCredentials.class);

        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:postgresql://db.example.com:5432/myapp");
        config.setUsername(credentials.getUsername());
        config.setPassword(credentials.getPassword());
        config.setMaximumPoolSize(10);

        return new HikariDataSource(config);
    }
}
```

**Lease rotation for dynamic secrets:**

```java
@Component
public class VaultLeaseManager {

    private final VaultTemplate vaultTemplate;
    private final DataSource dataSource;

    public VaultLeaseManager(VaultTemplate vaultTemplate, DataSource dataSource) {
        this.vaultTemplate = vaultTemplate;
        this.dataSource = dataSource;
    }

    @Scheduled(fixedRate = 300_000) // Every 5 minutes
    public void rotateCredentials() {
        VaultDatabaseCredentials credentials = vaultTemplate.read(
            "database/creds/my-app-db-role", VaultDatabaseCredentials.class);
        // Renew the lease
        vaultTemplate.doWithSession(ops -> ops.renew(credentials.getLeaseId()));

        // Update the datasource with new credentials
        if (dataSource instanceof HikariDataSource hikariDS) {
            hikariDS.setUsername(credentials.getUsername());
            hikariDS.setPassword(credentials.getPassword());
        }
    }
}
```

**Alternative: Spring Cloud Config with encrypted values:**

```yaml
spring:
  datasource:
    password: '{cipher}AQA...encrypted_value...'
```

**AWS Secrets Manager integration:**

```java
@Service
public class AwsSecretsManagerService {

    private final SecretsManagerClient secretsClient;

    public AwsSecretsManagerService() {
        this.secretsClient = SecretsManagerClient.builder()
            .region(Region.US_EAST_1)
            .build();
    }

    public DatabaseSecret getDatabaseSecret() {
        GetSecretValueRequest request = GetSecretValueRequest.builder()
            .secretId("prod/my-app/database")
            .build();

        GetSecretValueResponse response = secretsClient.getSecretValue(request);
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.readValue(response.secretString(), DatabaseSecret.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to parse database secret", e);
        }
    }

    public record DatabaseSecret(String username, String password, String host, int port, String dbname) {}
}
```

**Azure Key Vault integration:**

```xml
<dependency>
    <groupId>com.azure.spring</groupId>
    <artifactId>spring-cloud-azure-starter-keyvault-secrets</artifactId>
</dependency>
```

```yaml
spring:
  cloud:
    azure:
      keyvault:
        secret:
          property-sources-enabled: true
          endpoint: https://myvault.vault.azure.net/
      credential:
        managed-identity-enabled: true
```

**Best practices for secrets management:**
- Never commit secrets to version control. Use `.gitignore` for configuration files containing secrets.
- Use environment variables for local development secrets.
- Use a dedicated secrets manager (Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager) in production.
- Enable audit logging for secret access.
- Implement automatic secret rotation.
- Use dynamic secrets (short-lived, on-demand credentials) when possible.
- Encrypt secrets at rest and in transit.
- Restrict access to secrets using IAM policies and the principle of least privilege.
- Use Kubernetes external secrets operator to sync secrets from vault to pods.

### Q21: How do you implement encryption at rest and in transit in a Spring Boot application?

**Answer:**

**Encryption in Transit:**

Encryption in transit protects data as it travels over the network. In a Spring Boot application, this means:

1. **HTTPS/TLS** for client-to-server communication â€” configure as shown in Q16.
2. **Database TLS** â€” configure SSL connection to the database:

```yaml
spring:
  datasource:
    url: jdbc:postgresql://db.example.com:5432/myapp?ssl=true&sslmode=verify-full
    hikari:
      initialization-fail-timeout: -1
  jpa:
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
```

3. **Message broker TLS** â€” configure SSL for RabbitMQ or Kafka:

```yaml
spring:
  rabbitmq:
    ssl:
      enabled: true
      key-store: classpath:client-key.p12
      key-store-password: ${KEYSTORE_PASSWORD}
      trust-store: classpath:truststore.p12
      trust-store-password: ${TRUSTSTORE_PASSWORD}
  kafka:
    ssl:
      enabled: true
      truststore-location: classpath:kafka.truststore.jks
      truststore-password: ${KAFKA_SSL_PASSWORD}
      keystore-location: classpath:kafka.keystore.jks
      keystore-password: ${KAFKA_SSL_PASSWORD}
```

4. **gRPC TLS**:

```java
@Bean
public GrpcChannelFactory grpcChannelFactory() throws Exception {
    SSLContext sslContext = SSLContext.getInstance("TLSv1.3");
    sslContext.init(null, new TrustManager[]{trustAllManager()}, null);
    return new InProcessChannelFactory("my-service", sslContext);
}
```

**Encryption at Rest:**

Encryption at rest protects stored data. In a Spring Boot application, this involves:

1. **Database-level encryption** â€” transparent data encryption (TDE) in PostgreSQL, MySQL, or SQL Server.
2. **Column-level encryption** with JPA:

```java
@Converter
public class EncryptionConverter implements AttributeConverter<String, String> {

    private static final String ALGORITHM = "AES/GCM/NoPadding";
    private static final SecretKey KEY = new SecretKeySpec(
        Hex.decodeHex(System.getenv("ENCRYPTION_KEY")), "AES");

    @Override
    public String convertToDatabaseColumn(String plaintext) {
        try {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.ENCRYPT_MODE, KEY);
            byte[] iv = cipher.getIV();
            byte[] encrypted = cipher.doFinal(plaintext.getBytes(StandardCharsets.UTF_8));
            byte[] combined = ByteBuffer.allocate(iv.length + encrypted.length)
                .put(iv).put(encrypted).array();
            return Base64.getEncoder().encodeToString(combined);
        } catch (Exception e) {
            throw new RuntimeException("Encryption failed", e);
        }
    }

    @Override
    public String convertToEntityAttribute(String encrypted) {
        try {
            byte[] combined = Base64.getDecoder().decode(encrypted);
            ByteBuffer buffer = ByteBuffer.wrap(combined);
            byte[] iv = new byte[12];
            buffer.get(iv);
            byte[] ciphertext = new byte[buffer.remaining()];
            buffer.get(ciphertext);
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.DECRYPT_MODE, KEY, new GCMParameterSpec(128, iv));
            return new String(cipher.doFinal(ciphertext), StandardCharsets.UTF_8);
        } catch (Exception e) {
            throw new RuntimeException("Decryption failed", e);
        }
    }
}
```

Using the converter in an entity:

```java
@Entity
@Table(name = "users")
public class User {

    @Id
    private Long id;

    @Convert(converter = EncryptionConverter.class)
    @Column(name = "ssn", columnDefinition = "TEXT")
    private String ssn;

    @Convert(converter = EncryptionConverter.class)
    @Column(name = "credit_card", columnDefinition = "TEXT")
    private String creditCardNumber;

    // Getters and setters
}
```

3. **File encryption**:

```java
@Service
public class FileEncryptionService {

    private static final String ALGORITHM = "AES/GCM/NoPadding";

    public byte[] encryptFile(byte[] plaintext, SecretKey key) throws Exception {
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.ENCRYPT_MODE, key);
        byte[] iv = cipher.getIV();
        byte[] encrypted = cipher.doFinal(plaintext);
        return ByteBuffer.allocate(iv.length + encrypted.length)
            .put(iv).put(encrypted).array();
    }

    public byte[] decryptFile(byte[] ciphertext, SecretKey key) throws Exception {
        ByteBuffer buffer = ByteBuffer.wrap(ciphertext);
        byte[] iv = new byte[12];
        buffer.get(iv);
        byte[] encrypted = new byte[buffer.remaining()];
        buffer.get(encrypted);
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.DECRYPT_MODE, key, new GCMParameterSpec(128, iv));
        return cipher.doFinal(encrypted);
    }

    public SecretKey generateKey() throws Exception {
        KeyGenerator keyGen = KeyGenerator.getInstance("AES");
        keyGen.init(256);
        return keyGen.generateKey();
    }
}
```

4. **Spring Cloud Config encryption**:

```yaml
encrypt:
  key: ${ENCRYPT_KEY}
```

Set encrypted values in application.properties:

```yaml
spring:
  datasource:
    password: '{cipher}AQA...encrypted_value...'
```

### Q22: What are Spring Security filter chain ordering rules? How do you add custom filters at specific positions?

**Answer:**

Spring Security maintains a strict ordering of its internal filters. Custom filters can be added at specific positions using the `addFilterBefore`, `addFilterAfter`, or `addFilterAt` methods. Understanding filter ordering is critical because the wrong position can bypass security checks.

**Default Spring Security filter order (from Spring Security 6.x):**

| Order | Filter Class | Purpose |
|-------|-------------|---------|
| 1 | `DisableEncodeUrlFilter` | Prevents session ID in URLs |
| 2 | `WebAsyncManagerIntegrationFilter` | Integrates SecurityContext with async requests |
| 3 | `SecurityContextHolderFilter` | Loads SecurityContext from session |
| 4 | `HeaderWriterFilter` | Adds security headers |
| 5 | `CorsFilter` | Processes CORS requests |
| 6 | `CsrfFilter` | CSRF protection |
| 7 | `LogoutFilter` | Handles logout |
| 8 | `OAuth2AuthorizationRequestRedirectFilter` | OAuth2 authorization redirect |
| 9 | `Saml2WebSsoAuthenticationRequestFilter` | SAML2 auth request |
| 10 | `X509AuthenticationFilter` | X509 certificate auth |
| 11 | `AbstractPreAuthenticatedProcessingFilter` | Pre-authenticated auth |
| 12 | `CasAuthenticationFilter` | CAS auth |
| 13 | `OAuth2LoginAuthenticationFilter` | OAuth2 login |
| 14 | `Saml2WebSsoAuthenticationFilter` | SAML2 authentication |
| 15 | `UsernamePasswordAuthenticationFilter` | Form login |
| 16 | `OpenIDAuthenticationFilter` | OpenID auth (deprecated) |
| 17 | `DefaultLoginPageGeneratingFilter` | Default login page |
| 18 | `ConcurrentSessionFilter` | Session concurrency |
| 19 | `DigestAuthenticationFilter` | Digest auth |
| 20 | `BearerTokenAuthenticationFilter` | Bearer token auth |
| 21 | `BasicAuthenticationFilter` | Basic auth |
| 22 | `RequestCacheAwareFilter` | Saved request cache |
| 23 | `SecurityContextHolderAwareRequestFilter` | Wraps request |
| 24 | `JaasApiIntegrationFilter` | JAAS integration |
| 25 | `RememberMeAuthenticationFilter` | Remember-me auth |
| 26 | `AnonymousAuthenticationFilter` | Anonymous auth |
| 27 | `OAuth2AuthorizationCodeGrantFilter` | OAuth2 authorization code grant |
| 28 | `SessionManagementFilter` | Session management |
| 29 | `ExceptionTranslationFilter` | Exception handling |
| 30 | `FilterSecurityInterceptor` | Authorization |

Adding custom filters:

```java
@Configuration
public class CustomFilterConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .addFilterBefore(new RequestTimingFilter(), UsernamePasswordAuthenticationFilter.class)
            .addFilterAfter(new MfaCheckFilter(), UsernamePasswordAuthenticationFilter.class)
            .addFilterAt(new CustomAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
            .addFilterBefore(new RateLimitingFilter(), FilterSecurityInterceptor.class);
        return http.build();
    }
}
```

The `addFilterAt` method places the filter at the same position as the specified filter class. Spring Security does not guarantee which filter runs first if two filters are at the same position â€” it is safer to use `addFilterBefore` or `addFilterAfter`.

**Implementing custom filters:**

```java
@Component
public class RequestTimingFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                     HttpServletResponse response,
                                     FilterChain filterChain)
            throws ServletException, IOException {
        long start = System.currentTimeMillis();
        try {
            filterChain.doFilter(request, response);
        } finally {
            long duration = System.currentTimeMillis() - start;
            // Log or expose the timing
        }
    }
}
```

```java
@Component
public class RateLimitingFilter extends OncePerRequestFilter {

    private final RateLimiter rateLimiter;

    public RateLimitingFilter(RateLimiter rateLimiter) {
        this.rateLimiter = rateLimiter;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                     HttpServletResponse response,
                                     FilterChain filterChain)
            throws ServletException, IOException {
        String clientIp = request.getRemoteAddr();
        if (!rateLimiter.tryAcquire(clientIp)) {
            response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
            response.getWriter().write("Rate limit exceeded");
            return;
        }
        filterChain.doFilter(request, response);
    }
}
```

**Important filter placement rules:**

- Place authentication filters before `UsernamePasswordAuthenticationFilter`.
- Place authorization auditing filters after `FilterSecurityInterceptor`.
- Place logging/observability filters before `SecurityContextHolderFilter` to capture all requests.
- Place tenant resolution filters before authentication filters.
- Place CORS and rate-limiting filters early in the chain.

### Q23: What is the Spring Security authentication architecture? Explain the AuthenticationManager, ProviderManager, and AuthenticationProvider relationship.

**Answer:**

The Spring Security authentication architecture follows a layered design pattern with three main participants:

**AuthenticationManager** â€” The core strategy interface with a single method:

```java
public interface AuthenticationManager {
    Authentication authenticate(Authentication authentication)
        throws AuthenticationException;
}
```

**ProviderManager** â€” The default implementation of `AuthenticationManager`. It holds a list of `AuthenticationProvider` instances and iterates through them until one returns a non-null `Authentication` or throws a non-final exception.

```java
public class ProviderManager implements AuthenticationManager, MessageSourceAware {

    private List<AuthenticationProvider> providers;
    private AuthenticationManager parent;

    public Authentication authenticate(Authentication authentication) {
        Class<? extends Authentication> toTest = authentication.getClass();
        AuthenticationException lastException = null;
        Authentication result = null;

        for (AuthenticationProvider provider : getProviders()) {
            if (!provider.supports(toTest)) continue;

            try {
                result = provider.authenticate(authentication);
                if (result != null) {
                    copyDetails(authentication, result);
                    break;
                }
            } catch (AccountStatusException | InternalAuthenticationServiceException e) {
                throw e;
            } catch (AuthenticationException e) {
                lastException = e;
            }
        }

        if (result == null && parent != null) {
            try {
                result = parent.authenticate(authentication);
            } catch (AuthenticationException e) {
                lastException = e;
            }
        }

        if (result != null) {
            if (eraseCredentialsAfterAuthentication) {
                result.eraseCredentials();
            }
            eventPublisher.publishAuthenticationSuccess(result);
            return result;
        }

        if (lastException == null) {
            lastException = new ProviderNotFoundException("No provider found");
        }
        throw lastException;
    }
}
```

**AuthenticationProvider** â€” The strategy interface that performs a specific type of authentication:

```java
public interface AuthenticationProvider {
    Authentication authenticate(Authentication authentication)
        throws AuthenticationException;
    boolean supports(Class<?> authentication);
}
```

**Architecture flow:**

1. A filter (e.g., `UsernamePasswordAuthenticationFilter`) creates an `Authentication` object (e.g., `UsernamePasswordAuthenticationToken`) from the request.
2. The filter delegates to `AuthenticationManager.authenticate()`.
3. `ProviderManager` iterates through its `AuthenticationProvider` list.
4. The first provider whose `supports()` method matches the authentication token type handles the authentication.
5. The provider returns a fully populated `Authentication` object with `authenticated=true` and `GrantedAuthority` list.
6. `ProviderManager` stores the result in the `SecurityContextHolder`.

**Building the authentication architecture:**

```java
@Configuration
@EnableWebSecurity
public class AuthArchitectureConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authenticationManager(authenticationManager())
            .authenticationProvider(daoAuthenticationProvider())
            .authenticationProvider(ldapAuthenticationProvider());
        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager() {
        ProviderManager manager = new ProviderManager(
            daoAuthenticationProvider(),
            ldapAuthenticationProvider()
        );
        manager.setParent(new CustomParentAuthenticationProvider());
        manager.setEraseCredentialsAfterAuthentication(true);
        return manager;
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService());
        provider.setPasswordEncoder(passwordEncoder());
        provider.setUserDetailsPasswordService(passwordUpgradeService());
        provider.setPreAuthenticationChecks(user -> {
            if (!user.isEnabled()) throw new DisabledException("Account disabled");
        });
        return provider;
    }
}
```

**Provider iteration rules:**
- `supports()` is checked first. If false, the provider is skipped.
- If a provider throws `AuthenticationException` that is not `AccountStatusException` or `InternalAuthenticationServiceException`, the next provider is tried.
- If a provider throws `AccountStatusException` (locked, disabled, expired), the exception is thrown immediately â€” no fallback.
- If no provider succeeds, the parent `AuthenticationManager` is tried.
- If no provider succeeds and there is no parent, `ProviderNotFoundException` is thrown.

**SecurityContext propagation:**

```java
// After successful authentication
SecurityContext context = SecurityContextHolder.createEmptyContext();
context.setAuthentication(authentication);
SecurityContextHolder.setContext(context);

// Later, in a controller
Authentication auth = SecurityContextHolder.getContext().getAuthentication();
String username = auth.getName();
Collection<? extends GrantedAuthority> roles = auth.getAuthorities();
```

### Q24: How do you implement a rate limiter in Spring Boot? Show both in-memory and distributed approaches.

**Answer:**

Rate limiting protects your APIs from abuse, brute-force attacks, and excessive usage. Two common approaches are in-memory (single instance) and distributed (Redis-backed).

**In-Memory Rate Limiter (Token Bucket):**

```java
@Component
public class InMemoryRateLimiter {

    private final ConcurrentHashMap<String, TokenBucket> buckets = new ConcurrentHashMap<>();
    private final int capacity;
    private final int refillTokens;
    private final long refillDurationMs;

    public InMemoryRateLimiter() {
        this.capacity = 100;
        this.refillTokens = 10;
        this.refillDurationMs = 1000;
    }

    public boolean tryAcquire(String key) {
        TokenBucket bucket = buckets.computeIfAbsent(key, k -> new TokenBucket(capacity));
        return bucket.tryAcquire();
    }

    private class TokenBucket {
        private final int capacity;
        private int tokens;
        private long lastRefillTimestamp;

        TokenBucket(int capacity) {
            this.capacity = capacity;
            this.tokens = capacity;
            this.lastRefillTimestamp = System.currentTimeMillis();
        }

        synchronized boolean tryAcquire() {
            refill();
            if (tokens > 0) {
                tokens--;
                return true;
            }
            return false;
        }

        private void refill() {
            long now = System.currentTimeMillis();
            long elapsed = now - lastRefillTimestamp;
            int tokensToAdd = (int) (elapsed / refillDurationMs) * refillTokens;
            if (tokensToAdd > 0) {
                tokens = Math.min(capacity, tokens + tokensToAdd);
                lastRefillTimestamp = now;
            }
        }
    }
}
```

**Applying the rate limiter via filter:**

```java
@Component
public class RateLimitingFilter extends OncePerRequestFilter {

    private final InMemoryRateLimiter rateLimiter;

    public RateLimitingFilter(InMemoryRateLimiter rateLimiter) {
        this.rateLimiter = rateLimiter;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                     HttpServletResponse response,
                                     FilterChain filterChain)
            throws ServletException, IOException {
        String clientIp = request.getRemoteAddr();
        String apiKey = request.getHeader("X-API-Key");
        String rateLimitKey = apiKey != null ? apiKey : clientIp;

        if (!rateLimiter.tryAcquire(rateLimitKey)) {
            response.setStatus(429);
            response.setHeader("Retry-After", "1");
            response.getWriter().write("{\"error\":\"Too Many Requests\"}");
            return;
        }
        filterChain.doFilter(request, response);
    }
}
```

**Distributed Rate Limiter (Redis + Bucket4j):**

```xml
<dependency>
    <groupId>com.bucket4j</groupId>
    <artifactId>bucket4j-core</artifactId>
</dependency>
<dependency>
    <groupId>com.bucket4j</groupId>
    <artifactId>bucket4j-redis</artifactId>
</dependency>
<dependency>
    <groupId>org.redisson</groupId>
    <artifactId>redisson-spring-boot-starter</artifactId>
</dependency>
```

```java
@Service
public class DistributedRateLimiter {

    private final RedissonClient redisson;
    private final ObjectMapper objectMapper;

    public DistributedRateLimiter(RedissonClient redisson, ObjectMapper objectMapper) {
        this.redisson = redisson;
        this.objectMapper = objectMapper;
    }

    public boolean tryAcquire(String key, long capacity, long refillTokens, Duration refillDuration) {
        RRateLimiter rateLimiter = redisson.getRateLimiter("rate-limit:" + key);
        rateLimiter.trySetRate(RateType.OVERALL, capacity, refillDuration.toSeconds(), RateIntervalUnit.SECONDS);
        return rateLimiter.tryAcquire(1);
    }

    public boolean tryAcquire(String key) {
        return tryAcquire(key, 100, 10, Duration.ofSeconds(1));
    }
}
```

**Annotation-based rate limiting:**

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RateLimit {
    String key() default "";
    long capacity() default 100;
    long refillTokens() default 10;
    long refillDuration() default 1;
    TimeUnit refillTimeUnit() default TimeUnit.SECONDS;
}
```

```java
@Aspect
@Component
public class RateLimitAspect {

    private final DistributedRateLimiter rateLimiter;

    public RateLimitAspect(DistributedRateLimiter rateLimiter) {
        this.rateLimiter = rateLimiter;
    }

    @Around("@annotation(rateLimit)")
    public Object rateLimit(ProceedingJoinPoint joinPoint, RateLimit rateLimit) throws Throwable {
        String key = resolveKey(joinPoint, rateLimit);
        if (!rateLimiter.tryAcquire(key, rateLimit.capacity(), rateLimit.refillTokens(),
                Duration.of(rateLimit.refillDuration(), rateLimit.refillTimeUnit().toChronoUnit()))) {
            throw new RateLimitExceededException("Rate limit exceeded for key: " + key);
        }
        return joinPoint.proceed();
    }

    private String resolveKey(ProceedingJoinPoint joinPoint, RateLimit rateLimit) {
        if (!rateLimit.key().isEmpty()) return rateLimit.key();
        // Use authenticated user or IP
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth != null ? auth.getName() : "anonymous";
    }
}
```

**Applying rate limits in controllers:**

```java
@RestController
@RequestMapping("/api")
public class RateLimitedController {

    @PostMapping("/login")
    @RateLimit(key = "login", capacity = 5, refillTokens = 5, refillDuration = 1, refillTimeUnit = TimeUnit.MINUTES)
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        // Rate limited to 5 login attempts per minute
        return authService.login(request);
    }

    @GetMapping("/orders")
    @RateLimit(capacity = 1000, refillTokens = 100, refillDuration = 1, refillTimeUnit = TimeUnit.SECONDS)
    public List<Order> getOrders() {
        return orderService.findAll();
    }
}
```

### Q25: What is the difference between authenticationEntryPoint and accessDeniedHandler in Spring Security?

**Answer:**

`AuthenticationEntryPoint` and `AccessDeniedHandler` handle two different security failure scenarios:

- **AuthenticationEntryPoint** handles unauthenticated requests â€” when a user tries to access a protected resource without valid credentials.
- **AccessDeniedHandler** handles authenticated but unauthorized requests â€” when a user has valid credentials but lacks the required permissions for the requested resource.

```java
@Configuration
@EnableWebSecurity
public class SecurityExceptionConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .exceptionHandling(ex -> ex
                .authenticationEntryPoint(restAuthenticationEntryPoint())
                .accessDeniedHandler(restAccessDeniedHandler())
            )
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            );
        return http.build();
    }

    @Bean
    public AuthenticationEntryPoint restAuthenticationEntryPoint() {
        return (request, response, authException) -> {
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

            Map<String, Object> body = new HashMap<>();
            body.put("status", 401);
            body.put("error", "Unauthorized");
            body.put("message", authException.getMessage());
            body.put("path", request.getRequestURI());

            ObjectMapper mapper = new ObjectMapper();
            mapper.writeValue(response.getOutputStream(), body);
        };
    }

    @Bean
    public AccessDeniedHandler restAccessDeniedHandler() {
        return (request, response, accessDeniedException) -> {
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);

            Map<String, Object> body = new HashMap<>();
            body.put("status", 403);
            body.put("error", "Forbidden");
            body.put("message", accessDeniedException.getMessage());
            body.put("path", request.getRequestURI());

            ObjectMapper mapper = new ObjectMapper();
            mapper.writeValue(response.getOutputStream(), body);
        };
    }
}
```

**When each is triggered:**

| Scenario | Handler | HTTP Status |
|----------|---------|-------------|
| No token presented | AuthenticationEntryPoint | 401 |
| Expired token | AuthenticationEntryPoint | 401 |
| Invalid token signature | AuthenticationEntryPoint | 401 |
| Valid token, wrong role | AccessDeniedHandler | 403 |
| Valid token, @PreAuthorize fails | AccessDeniedHandler | 403 |
| Valid token, IP not allowed | AccessDeniedHandler | 403 |

The `ExceptionTranslationFilter` is the filter that catches authentication and authorization exceptions and delegates to the appropriate handler:

```
ExceptionTranslationFilter
â”œâ”€â”€ AuthenticationException â†’ AuthenticationEntryPoint
â””â”€â”€ AccessDeniedException  â†’ AccessDeniedHandler
```

For form-based login, the default `AuthenticationEntryPoint` redirects to the login page. For REST APIs, you should use a custom entry point that returns 401 with a JSON body.

If you use Spring Security's `@EnableMethodSecurity`, you can also customize the `AccessDeniedHandler` globally:

```java
@Configuration
@EnableMethodSecurity
public class MethodSecurityConfig {

    @Bean
    public MethodSecurityExpressionHandler methodSecurityExpressionHandler() {
        DefaultMethodSecurityExpressionHandler handler = new DefaultMethodSecurityExpressionHandler();
        return handler;
    }
}
```

### Q26: What is the Spring Boot actuator security? How do you securely expose actuator endpoints?

**Answer:**

Spring Boot Actuator provides production-ready endpoints for monitoring and managing your application. These endpoints expose sensitive information about your application's health, metrics, environment properties, and thread dumps â€” so they must be secured properly.

**Secure actuator configuration:**

```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
      base-path: /internal
  endpoint:
    health:
      show-details: when-authorized
      roles: ADMIN
      probes:
        enabled: true
    env:
      enabled: false
    configprops:
      enabled: false
    shutdown:
      enabled: false
    info:
      env:
        enabled: true
  info:
    env:
      enabled: true
    java:
      enabled: true
    os:
      enabled: true
    build:
      enabled: true
```

**Security filter chain for actuator:**

```java
@Configuration
@EnableWebSecurity
public class ActuatorSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .securityMatcher("/internal/**")
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/internal/health").permitAll()
                .requestMatchers("/internal/info").permitAll()
                .requestMatchers("/internal/prometheus").hasRole("ADMIN")
                .requestMatchers("/internal/metrics").hasRole("ADMIN")
                .requestMatchers("/internal/env").denyAll()
                .anyRequest().hasRole("ADMIN")
            )
            .httpBasic(Customizer.withDefaults())
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            );
        return http.build();
    }
}
```

**Custom health indicators:**

```java
@Component
public class DatabaseHealthIndicator implements HealthIndicator {

    private final DataSource dataSource;

    public DatabaseHealthIndicator(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public Health health() {
        try (Connection conn = dataSource.getConnection()) {
            if (conn.isValid(5)) {
                return Health.up()
                    .withDetail("database", "reachable")
                    .withDetail("type", conn.getMetaData().getDatabaseProductName())
                    .build();
            }
            return Health.down()
                .withDetail("database", "unreachable")
                .build();
        } catch (SQLException e) {
            return Health.down(e)
                .withDetail("database", "connection failed")
                .build();
        }
    }
}
```

**Custom info contributor:**

```java
@Component
public class CustomInfoContributor implements InfoContributor {

    @Override
    public void contribute(Info.Builder builder) {
        builder
            .withDetail("application", Map.of(
                "name", "My Application",
                "version", "1.0.0",
                "environment", System.getenv("APP_ENV")
            ))
            .withDetail("team", Map.of(
                "name", "Platform Engineering",
                "contact", "platform@example.com",
                "slack", "#platform-eng"
            ));
    }
}
```

**Securing health information:**

```yaml
management:
  endpoint:
    health:
      show-details: when-authorized
      show-components: when-authorized
      roles: ADMIN
```

**Network-level security for production:**

```yaml
management:
  server:
    port: 8081
    address: 127.0.0.1
  endpoints:
    web:
      base-path: /actuator
```

In Kubernetes, use a separate management port that is only accessible via the service mesh or internal cluster network.

**Auditing actuator access:**

```java
@Component
public class ActuatorAuditListener {

    private static final Logger log = LoggerFactory.getLogger("ACTUATOR_AUDIT");

    @EventListener
    public void onApplicationEvent(AuditApplicationEvent event) {
        AuditEvent auditEvent = event.getAuditEvent();
        if (auditEvent.getPrincipal() != null &&
            auditEvent.getType().startsWith("ACTUATOR_")) {
            log.warn("Actuator access: principal={}, type={}, data={}",
                auditEvent.getPrincipal(),
                auditEvent.getType(),
                auditEvent.getData());
        }
    }
}
```

### Q27: Explain the security considerations for a Spring Boot microservices architecture. How do you handle service-to-service authentication?

**Answer:**

Microservices security requires a defense-in-depth approach across multiple layers: external API gateway, service mesh, service-to-service communication, and data access.

**Architecture overview:**

```
Client â†’ API Gateway â†’ Service A â†’ Service B
                â†“            â†“           â†“
          Auth Server    Database    Message Queue
```

**Layer 1: External API Gateway**

The API Gateway handles authentication, rate limiting, TLS termination, and request validation:

```yaml
spring:
  cloud:
    gateway:
      routes:
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**
          filters:
            - StripPrefix=1
            - name: RequestRateLimiter
              args:
                redis-rate-limiter:
                  replenishRate: 100
                  burstCapacity: 200
      default-filters:
        - TokenRelay
```

**Layer 2: Service-to-Service Authentication**

Three common approaches for inter-service authentication:

**Approach 1: JWT Token Propagation (recommended)**

The service receives a JWT from the API Gateway and validates it locally:

```java
@Configuration
@EnableWebSecurity
public class MicroserviceSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/internal/health").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt
                    .jwtAuthenticationConverter(jwtAuthenticationConverter())
                )
            );
        return http.build();
    }

    @Bean
    public JwtDecoder jwtDecoder() {
        return NimbusJwtDecoder
            .withJwkSetUri("https://auth.example.com/.well-known/jwks.json")
            .jwsAlgorithm(SignatureAlgorithm.RS256)
            .build();
    }
}
```

When Service A needs to call Service B, it forwards the original JWT:

```java
@Service
public class InterServiceClient {

    private final RestTemplate restTemplate;

    public InterServiceClient(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public Order getOrderFromServiceB(Long orderId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String token = extractJwt(auth);

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);

        HttpEntity<Void> entity = new HttpEntity<>(headers);
        ResponseEntity<Order> response = restTemplate.exchange(
            "http://order-service/api/orders/{id}",
            HttpMethod.GET, entity, Order.class, orderId);
        return response.getBody();
    }

    private String extractJwt(Authentication auth) {
        if (auth instanceof JwtAuthenticationToken jwtAuth) {
            return jwtAuth.getToken().getTokenValue();
        }
        if (auth instanceof BearerTokenAuthentication bearerAuth) {
            return bearerAuth.getToken().toString();
        }
        return null;
    }
}
```

**Approach 2: mTLS (Mutual TLS)**

Each service has a client certificate that it presents when calling other services:

```yaml
server:
  ssl:
    client-auth: need
    trust-store: classpath:service-truststore.jks
    trust-store-password: ${TRUSTSTORE_PASSWORD}
```

**Approach 3: Service Account Tokens**

Each service has its own OAuth2 client credentials:

```java
@Service
public class ServiceMeshClient {

    private final OAuth2AuthorizedClientManager authorizedClientManager;

    public ServiceMeshClient(OAuth2AuthorizedClientManager authorizedClientManager) {
        this.authorizedClientManager = authorizedClientManager;
    }

    public String getServiceToken() {
        OAuth2AuthorizeRequest request = OAuth2AuthorizeRequest
            .withClientRegistrationId("order-service-sa")
            .principal("order-service")
            .build();

        OAuth2AuthorizedClient client = authorizedClientManager.authorize(request);
        return client.getAccessToken().getTokenValue();
    }
}
```

**Layer 3: Defence in Depth**

Additional security measures:

- **Network policies**: Kubernetes NetworkPolicies restrict which services can communicate.
- **Service mesh**: Istio or Linkerd provides mTLS, authorization policies, and observability at the mesh layer.
- **Secret rotation**: Automatically rotate service account tokens and database credentials.
- **Audit logging**: All inter-service calls are logged with correlation IDs.
- **Circuit breakers**: Prevent cascading failures and limit blast radius.
- **Data encryption**: Encrypt sensitive data at rest in each service's database.
- **Input validation**: Each service validates inputs independently â€” never trust downstream service data.

Istio authorization policy example:

```yaml
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: order-service-policy
  namespace: prod
spec:
  selector:
    matchLabels:
      app: order-service
  rules:
    - from:
        - source:
            principals: ["cluster.local/ns/prod/sa/api-gateway"]
      to:
        - operation:
            methods: ["GET"]
            paths: ["/api/orders/*"]
```

**Security checklist for microservices:**

- Use a dedicated API Gateway for external traffic.
- Never expose internal services directly.
- Use JWT propagation or mTLS for inter-service communication.
- Validate all tokens on each service independently.
- Use network policies to restrict inter-service traffic.
- Encrypt all data at rest and in transit.
- Implement centralized audit logging with correlation IDs.
- Use a service mesh for advanced security policies.
- Rotate secrets regularly.
- Apply least privilege to service accounts.
- Use rate limiting and circuit breakers.

This concludes the Security Interview Q&A chapter. Each question covered a critical aspect of application security, from foundational concepts to advanced distributed system security patterns.

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| Interface | Contract without state | Multiple inheritance of type | API contracts |
| Abstract Class | Partial implementation | Single inheritance, shared state | Template method pattern |
| Record | Transparent data carrier | Auto-generated methods | DTOs, value objects |

## Quick Reference

| Topic | Key Points | Interview Frequency |
|-------|-----------|-------------------|
| **OOP** | Encapsulation, Inheritance, Polymorphism, Abstraction | Every interview |
| **Collections** | List, Set, Map, Queue, Deque | 9/10 interviews |
| **Concurrency** | synchronized, volatile, Locks, CompletableFuture | 7/10 senior interviews |
| **Java 8+** | Lambdas, Streams, Optional, CompletableFuture | 8/10 interviews |

## Cross-Application Matrix

| Skill | Junior (0-2yr) | Mid (3-5yr) | Senior (6-9yr) | Staff (10+) |
|-------|---------------|-------------|----------------|-------------|
| OOP & Design Patterns | Define and identify | Apply and combine | Evaluate and refactor | Create and teach |
| Collections | Basic usage | Performance trade-offs | Concurrent collections | Custom implementations |
| Concurrency | Syntax knowledge | Write thread-safe code | Debug deadlocks | Design concurrent systems |

## Chapter Quiz

1. What is the difference between equals() and == in Java?
   - A) They are identical
   - B) equals() compares values, == compares references
   - C) == compares values, equals() compares references
   - D) equals() is for primitives, == is for objects

<details>
<summary>Answer</summary>
**B) equals() compares logical equality (overridable), == compares reference equality.**
</details>

2. Which collection guarantees insertion order?
   - A) HashMap
   - B) TreeMap
   - C) LinkedHashMap
   - D) HashSet

<details>
<summary>Answer</summary>
**C) LinkedHashMap.** LinkedHashMap maintains a doubly-linked list of entries to preserve insertion order.
</details>

3. What keyword prevents a method from being overridden?
   - A) static
   - B) final
   - C) private
   - D) abstract

<details>
<summary>Answer</summary>
**B) final.** A final method cannot be overridden by subclasses.
</details>
