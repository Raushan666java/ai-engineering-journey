# Method Security, CORS & CSRF

Security in Spring is layered. Authentication answers "who are you?"; authorization answers "what are you allowed to do?"; CORS controls "where can requests come from?"; and CSRF protects against "was this request forged?".

This chapter covers the four pillars of web security beyond basic authentication: method-level authorization with SpEL expressions and annotations, cross-origin resource sharing configuration, cross-site request forgery protection, and content security policy headers.

---

## Learning Objectives

By the end of this chapter you should be able to:

- Enable method-level security with `@EnableMethodSecurity` (Java 17+ syntax)
- Apply `@PreAuthorize`, `@PostAuthorize`, `@PreFilter`, and `@PostFilter` with SpEL expressions
- Understand and use `hasRole`, `hasAuthority`, `hasAnyAuthority`, `hasPermission`, `authentication`, `principal`, `returnObject`, and `filterObject`
- Implement custom `PermissionEvaluator` with `@PreAuthorize("hasPermission(...)")`
- Create custom security meta-annotations like `@IsAdmin`
- Configure CORS with `@CrossOrigin`, `CorsConfigurationSource`, and `UrlBasedCorsConfigurationSource`
- Handle preflight (OPTIONS) requests and per-URL CORS configuration
- Understand CSRF protection modes (`CookieCsrfTokenRepository`, `HttpSessionCsrfTokenRepository`)
- Disable CSRF for REST APIs and configure double-submit cookie for SPAs
- Configure Content Security Policy and related security headers
- Apply the deprecated `@Secured` and JSR-250 `@RolesAllowed` annotations
- Implement pointcut-based aspect security for cross-cutting authorization

---

## 1. Method Security — @EnableMethodSecurity

![Method Security CORS CSRF Flow](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/java/27-method-cors-csrf.png)

Spring Security 6.0 introduced `@EnableMethodSecurity` as a unified replacement for the older `@EnableGlobalMethodSecurity`. It enables annotation-based authorization at the method level using Spring Expression Language (SpEL).

### 1.1 Basic Setup

```java
package com.course.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic(httpBasic -> {})
            .csrf(csrf -> csrf.disable());

        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails admin = User.builder()
            .username("admin")
            .password("{noop}admin123")
            .roles("ADMIN")
            .build();

        UserDetails editor = User.builder()
            .username("editor")
            .password("{noop}editor123")
            .roles("EDITOR")
            .build();

        UserDetails viewer = User.builder()
            .username("viewer")
            .password("{noop}viewer123")
            .roles("VIEWER")
            .build();

        UserDetails author = User.builder()
            .username("author")
            .password("{noop}author123")
            .roles("AUTHOR")
            .authorities("ROLE_AUTHOR", "WRITE_ARTICLES", "EDIT_OWN_ARTICLES")
            .build();

        return new InMemoryUserDetailsManager(admin, editor, viewer, author);
    }
}
```

### 1.2 @EnableMethodSecurity Attributes

```java
@Configuration
@EnableMethodSecurity(
    securedEnabled = true,      // Enables @Secured (default false)
    jsr250Enabled = true,       // Enables @RolesAllowed (default false)
    prePostEnabled = true       // Enables @PreAuthorize etc. (default true)
)
public class MethodSecurityConfig {
}
```

| Attribute | Default | Purpose |
|-----------|---------|---------|
| `prePostEnabled` | `true` | Enable `@PreAuthorize`, `@PostAuthorize`, `@PreFilter`, `@PostFilter` |
| `securedEnabled` | `false` | Enable deprecated `@Secured` |
| `jsr250Enabled` | `false` | Enable JSR-250 `@RolesAllowed`, `@PermitAll`, `@DenyAll` |

### 1.3 Method Security Delegating Evaluator

Internally, `@EnableMethodSecurity` registers a `MethodSecurityExpressionHandler` that evaluates SpEL expressions against the security context.

```java
package com.course.security.internal;

import org.aopalliance.intercept.MethodInvocation;
import org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;
import org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;
import org.springframework.security.access.expression.method.MethodSecurityExpressionOperations;
import org.springframework.security.authentication.AuthenticationTrustResolver;
import org.springframework.security.authentication.AuthenticationTrustResolverImpl;
import org.springframework.security.core.Authentication;

public class CustomMethodSecurityExpressionHandler
        extends DefaultMethodSecurityExpressionHandler {

    private final AuthenticationTrustResolver trustResolver =
        new AuthenticationTrustResolverImpl();

    @Override
    protected MethodSecurityExpressionOperations createSecurityExpressionRoot(
            Authentication authentication, MethodInvocation invocation) {

        CustomMethodSecurityExpressionRoot root =
            new CustomMethodSecurityExpressionRoot(authentication);
        root.setPermissionEvaluator(getPermissionEvaluator());
        root.setTrustResolver(this.trustResolver);
        root.setRoleHierarchy(getRoleHierarchy());
        return root;
    }
}
```

The expression root provides methods like `hasRole()`, `hasAuthority()`, `hasPermission()`, `authentication`, `principal`, etc. that you reference in SpEL expressions.

---

## 2. @PreAuthorize — Before Method Invocation

`@PreAuthorize` evaluates a SpEL expression before the method executes. If the expression returns `false`, an `AccessDeniedException` is thrown.

### 2.1 Basic Role Checks

```java
package com.course.security.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    // Only users with ROLE_ADMIN
    @GetMapping("/dashboard")
    @PreAuthorize("hasRole('ADMIN')")
    public String dashboard() {
        return "Admin Dashboard";
    }

    // Users with ADMIN or EDITOR role
    @GetMapping("/reports")
    @PreAuthorize("hasAnyRole('ADMIN', 'EDITOR')")
    public String reports() {
        return "Reports";
    }

    // Users with specific authority (not role-based)
    @GetMapping("/analytics")
    @PreAuthorize("hasAuthority('VIEW_ANALYTICS')")
    public String analytics() {
        return "Analytics";
    }

    // Multiple authorities
    @PostMapping("/publish")
    @PreAuthorize("hasAnyAuthority('WRITE_ARTICLES', 'PUBLISH_ARTICLES')")
    public String publish() {
        return "Published";
    }

    // Authenticated users only (any logged-in user)
    @GetMapping("/profile")
    @PreAuthorize("isAuthenticated()")
    public String profile() {
        return "Profile";
    }

    // Anonymous access allowed
    @GetMapping("/public")
    @PreAuthorize("permitAll()")
    public String publicInfo() {
        return "Public Info";
    }
}
```

### 2.2 hasRole vs hasAuthority

`hasRole('ADMIN')` internally checks for `ROLE_ADMIN`. `hasAuthority('ROLE_ADMIN')` does the same check explicitly. `hasAuthority('WRITE_ARTICLES')` checks for a custom authority without the `ROLE_` prefix.

```java
@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    @GetMapping
    @PreAuthorize("hasRole('VIEWER') or hasRole('EDITOR') or hasRole('ADMIN')")
    public List<String> listArticles() {
        return List.of("Article 1", "Article 2");
    }

    @PostMapping
    @PreAuthorize("hasAuthority('WRITE_ARTICLES')")
    public String createArticle() {
        return "Created";
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('EDIT_OWN_ARTICLES') and #id == authentication.principal.id")
    public String updateArticle(@PathVariable Long id) {
        return "Updated " + id;
    }
}
```

### 2.3 hasRole, hasAnyRole — Under the Hood

```java
// These are equivalent:
@PreAuthorize("hasRole('ADMIN')")
@PreAuthorize("hasAuthority('ROLE_ADMIN')")

// hasAnyRole expands to:
@PreAuthorize("hasAnyRole('ADMIN', 'EDITOR')")
// Same as:
@PreAuthorize("hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_EDITOR')")

// Custom authority (no ROLE_ prefix):
@PreAuthorize("hasAuthority('WRITE_ARTICLES')")
```

By default, `hasRole` adds the `ROLE_` prefix. You can change this by setting the `defaultRolePrefix` on the expression handler:

```java
package com.course.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;
import org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;

@Configuration
public class ExpressionHandlerConfig {

    @Bean
    public MethodSecurityExpressionHandler methodSecurityExpressionHandler() {
        DefaultMethodSecurityExpressionHandler handler =
            new DefaultMethodSecurityExpressionHandler();
        handler.setDefaultRolePrefix("APP_");
        return handler;
    }
}
```

### 2.4 Accessing Authentication and Principal

The SpEL expression has access to the `Authentication` object and its principal:

```java
package com.course.security.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {

    // Access Authentication object directly in SpEL
    @GetMapping("/me")
    @PreAuthorize("isAuthenticated()")
    public Map<String, Object> currentUser(
            @AuthenticationPrincipal UserDetails userDetails,
            Authentication authentication) {

        return Map.of(
            "username", authentication.getName(),
            "authorities", authentication.getAuthorities(),
            "principal", authentication.getPrincipal().toString()
        );
    }

    // Conditional access based on principal
    @GetMapping("/documents/{username}")
    @PreAuthorize("authentication.name == #username")
    public String getDocument(@PathVariable String username) {
        return "Document for " + username;
    }

    // Check principal type
    @GetMapping("/admin-info")
    @PreAuthorize("isAuthenticated() and " +
        "authentication.principal instanceof T(org.springframework.security.core.userdetails.User)")
    public String adminInfo() {
        return "Admin Info";
    }
}
```

### 2.5 Complex SpEL Expressions

SpEL supports boolean operators, method calls, and type references:

```java
@RestController
@RequestMapping("/api/secure")
public class SpELController {

    // Logical AND
    @GetMapping("/secret")
    @PreAuthorize("hasRole('ADMIN') and hasAuthority('VIEW_SECRETS')")
    public String secret() {
        return "Top Secret";
    }

    // Logical OR with negation
    @GetMapping("/restricted")
    @PreAuthorize("hasRole('ADMIN') or " +
        "(hasRole('EDITOR') and !hasAuthority('SUSPENDED'))")
    public String restricted() {
        return "Restricted";
    }

    // Ternary — expression must resolve to boolean
    @GetMapping("/conditional")
    @PreAuthorize("hasRole('ADMIN') ? true : hasRole('EDITOR')")
    public String conditional() {
        return "Conditional Access";
    }

    // Method calls on parameters
    @PostMapping("/items")
    @PreAuthorize("#item.owner == authentication.name")
    public String createItem(@RequestBody Item item) {
        return "Item created by " + item.getOwner();
    }

    // Static method call
    @GetMapping("/evaluated")
    @PreAuthorize("T(java.time.LocalTime).now().hour < 17")
    public String businessHoursOnly() {
        return "Accessed during business hours";
    }

    // Spring Bean reference
    @GetMapping("/custom-check")
    @PreAuthorize("@accessEvaluator.hasAccess(authentication, 'CUSTOM_FEATURE')")
    public String customCheck() {
        return "Custom check passed";
    }

    // Collection containment
    @GetMapping("/dept/{dept}")
    @PreAuthorize("authentication.principal.departments.contains(#dept)")
    public String departmentOnly(@PathVariable String dept) {
        return "Department: " + dept;
    }
}
```

### 2.6 Matching Method Parameters in SpEL

Spring Security makes method parameters available in SpEL via `#paramName`:

```java
package com.course.security.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/owners")
public class OwnerController {

    // Parameter match — user can only access their own data
    @GetMapping("/{userId}/profile")
    @PreAuthorize("#userId == authentication.name")
    public String getProfile(@PathVariable String userId) {
        return "Profile for " + userId;
    }

    @PutMapping("/{userId}/settings")
    @PreAuthorize("#userId == authentication.principal.username")
    public String updateSettings(
            @PathVariable String userId,
            @RequestBody Map<String, Object> settings) {
        return "Settings updated for " + userId;
    }

    @DeleteMapping("/{userId}")
    @PreAuthorize("hasRole('ADMIN') or #userId == authentication.name")
    public String deleteUser(@PathVariable String userId) {
        return "Deleted user " + userId;
    }

    // Multiple parameter constraints
    @PostMapping("/transfer")
    @PreAuthorize("#fromAccount.owner == authentication.name and " +
        "#amount <= 10000")
    public String transfer(
            @RequestBody Account fromAccount,
            @RequestParam BigDecimal amount) {
        return "Transferred " + amount;
    }
}
```

---

## 3. @PostAuthorize — After Method Invocation

`@PostAuthorize` evaluates after the method returns but before the response is sent. It can use `returnObject` to access the method's return value.

### 3.1 Basic PostAuthorize

```java
package com.course.security.controller;

import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/documents")
public class PostAuthorizeController {

    private final DocumentService documentService;

    public PostAuthorizeController(DocumentService documentService) {
        this.documentService = documentService;
    }

    // Method runs, then authorization checks the return value
    @GetMapping("/{id}")
    @PostAuthorize("returnObject.owner == authentication.name or " +
        "hasRole('ADMIN')")
    public Document getDocument(@PathVariable Long id) {
        return documentService.findById(id);
    }

    // Safe navigation — if null, access is denied
    @GetMapping("/optional/{id}")
    @PostAuthorize("returnObject?.owner == authentication.name")
    public Optional<Document> getOptionalDocument(@PathVariable Long id) {
        return documentService.findOptionalById(id);
    }

    // Check properties of the return value
    @GetMapping("/{id}/details")
    @PostAuthorize("returnObject.visibility == 'PUBLIC' or " +
        "returnObject.owner == authentication.name")
    public DocumentDetails getDetails(@PathVariable Long id) {
        return documentService.getDetails(id);
    }
}
```

### 3.2 PostAuthorize with DTO Projection

```java
@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/{accountId}")
    @PostAuthorize("returnObject.ownerId == authentication.principal.id")
    public AccountDto getAccount(@PathVariable Long accountId) {
        Account entity = accountService.findById(accountId);
        return new AccountDto(
            entity.getId(),
            entity.getOwnerId(),
            entity.getBalance(),
            entity.getAccountType()
        );
    }

    // SpEL with method chaining on returnObject
    @GetMapping("/summary/{accountId}")
    @PostAuthorize("returnObject.getOwner().equals(authentication.name)")
    public AccountSummary getSummary(@PathVariable Long accountId) {
        return accountService.getSummary(accountId);
    }
}
```

### 3.3 PreAuthorize vs PostAuthorize Decision Table

| Aspect | @PreAuthorize | @PostAuthorize |
|--------|---------------|----------------|
| When evaluated | Before method | After method |
| Performance | No wasted execution | Method runs even if denied |
| Access to params | Full (`#param`) | Full (`#param`) |
| Access to return | None | Full (`returnObject`) |
| Use case | Role checks, param matching | Object-level security on result |
| Null safety | N/A | Use `?.` (safe navigation) |

---

## 4. @PreFilter and @PostFilter — Collection Filtering

Spring Security can automatically filter collections based on SpEL expressions.

### 4.1 @PreFilter — Filter Method Arguments

Filters a collection parameter before the method executes. Elements that do not match the expression are removed.

```java
package com.course.security.controller;

import org.springframework.security.access.prepost.PreFilter;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/batch")
public class BatchController {

    // Only process items where the owner matches the authenticated user
    @PostMapping("/process")
    @PreFilter("filterObject.owner == authentication.name")
    public String processItems(@RequestBody List<Item> items) {
        // items now contains only owned entries
        return "Processed " + items.size() + " items";
    }

    // Multiple filter targets
    @PostMapping("/compare")
    @PreFilter(filterTarget = "leftList",
        value = "filterObject.owner == authentication.name")
    @PreFilter(filterTarget = "rightList",
        value = "filterObject.active == true")
    public String compareLists(
            @RequestBody List<Item> leftList,
            @RequestBody List<Item> rightList) {

        return "Left: " + leftList.size() + ", Right: " + rightList.size();
    }

    // Filter arrays too
    @PostMapping("/bulk-delete")
    @PreFilter("filterObject.owner == authentication.name or hasRole('ADMIN')")
    public String bulkDelete(@RequestBody Item[] items) {
        return "Deleting " + items.length + " items";
    }
}
```

### 4.2 @PostFilter — Filter Return Value

Filters the returned collection, removing elements that do not match the expression.

```java
package com.course.security.controller;

import org.springframework.security.access.prepost.PostFilter;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/documents")
public class PostFilterController {

    private final DocumentService documentService;

    public PostFilterController(DocumentService documentService) {
        this.documentService = documentService;
    }

    // Return only documents owned by or shared with the current user
    @GetMapping
    @PostFilter("filterObject.owner == authentication.name or " +
        "filterObject.sharedUsers.contains(authentication.name) or " +
        "hasRole('ADMIN')")
    public List<Document> getAllDocuments() {
        return documentService.findAll();
    }

    // Filter arrays and streams
    @GetMapping("/active")
    @PostFilter("filterObject.active == true")
    public List<Document> getActiveDocuments() {
        return documentService.findAll();
    }

    // Filter with property comparison
    @GetMapping("/by-department/{dept}")
    @PostFilter("filterObject.department == #dept")
    public List<Document> getDepartmentDocuments(@PathVariable String dept) {
        return documentService.findAll();
    }

    // PostFilter on a Map
    @GetMapping("/summary")
    @PostFilter("filterObject.value.accessLevel != 'RESTRICTED'")
    public Map<String, DocumentSummary> getSummary() {
        return documentService.getSummaryMap();
    }
}
```

### 4.3 PostFilter with Pagination Warning

`@PostFilter` executes on the **entire** result set in memory. For paginated endpoints, this can cause unexpected behavior — the filter runs after the method returns but before Spring MVC serializes the response.

```java
@RestController
@RequestMapping("/api/items")
public class PagedFilterController {

    private final ItemService itemService;

    public PagedFilterController(ItemService itemService) {
        this.itemService = itemService;
    }

    // WARNING: Page size may shrink after filtering!
    // If page has 20 items but only 5 pass the filter, the client gets 5.
    @GetMapping("/paged")
    @PostFilter("filterObject.owner == authentication.name")
    public List<Item> getMyItemsPaged(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        return itemService.findAllPaged(page, size);
    }

    // Better approach: filter at the query level
    @GetMapping("/my-items")
    public List<Item> getMyItems() {
        // Query the database with the owner filter
        return itemService.findByOwner(getCurrentUsername());
    }

    private String getCurrentUsername() {
        return org.springframework.security.core.context
            .SecurityContextHolder.getContext()
            .getAuthentication().getName();
    }
}
```

### 4.4 @PreFilter and @PostFilter Summary

| Annotation | Target | Direction | Variable |
|------------|--------|-----------|----------|
| `@PreFilter` | Parameter (Collection/Array) | Remove before method | `filterObject` |
| `@PostFilter` | Return value (Collection/Array/Map) | Remove after method | `filterObject` |
| `filterTarget` | Attribute on `@PreFilter` | Which param to filter | Required for multiple params |

---

## 5. @Secured (Deprecated) and @RolesAllowed (JSR-250)

### 5.1 @Secured — Legacy Annotation

`@Secured` is the original Spring Security annotation. It supports only role-based checks (no SpEL). Enable it with `@EnableMethodSecurity(securedEnabled = true)`.

```java
package com.course.security.controller;

import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/secured")
public class SecuredController {

    @GetMapping("/admin-area")
    @Secured("ROLE_ADMIN")
    public String adminArea() {
        return "Admin Area";
    }

    @GetMapping("/editor-area")
    @Secured({"ROLE_ADMIN", "ROLE_EDITOR"})
    public String editorArea() {
        return "Editor Area — multiple roles are OR-ed";
    }

    @GetMapping("/super")
    @Secured("ROLE_SUPER_ADMIN")
    public String superArea() {
        return "Super Admin Only";
    }
}
```

Limitations of `@Secured`:
- No SpEL expressions (no `#param` access)
- No `returnObject` access
- No permission-based checks
- All roles must use the full `ROLE_` prefix

### 5.2 @RolesAllowed — JSR-250 Standard

`@RolesAllowed` is the Jakarta EE standard annotation for role-based access. Enable it with `@EnableMethodSecurity(jsr250Enabled = true)`.

```java
package com.course.security.controller;

import jakarta.annotation.security.DenyAll;
import jakarta.annotation.security.PermitAll;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/jsr250")
public class Jsr250Controller {

    @GetMapping("/all")
    @RolesAllowed({"ADMIN", "EDITOR"})
    @PermitAll
    public String allRoles() {
        return "Accessible by ADMIN or EDITOR";
    }

    @GetMapping("/any-authenticated")
    @PermitAll
    public String anyAuthenticated() {
        return "Any authenticated user — actually @PermitAll allows everyone including anonymous";
    }

    @DeleteMapping("/block-all")
    @DenyAll
    public String blocked() {
        return "This will never be reached";
    }

    @GetMapping("/admin-only")
    @RolesAllowed("ADMIN")
    public String adminOnly() {
        return "Admin only via JSR-250";
    }
}
```

### 5.3 @RolesAllowed vs @Secured vs @PreAuthorize

| Feature | @Secured | @RolesAllowed | @PreAuthorize |
|---------|----------|---------------|---------------|
| Standard | Spring | JSR-250 (Jakarta) | Spring |
| SpEL support | No | No | Yes |
| Role prefix | Required (`ROLE_`) | Inferred (`ROLE_` default) | Flexible |
| Parameter access | No | No | `#paramName` |
| Return object | No | No | With `@PostAuthorize` |
| Collection filter | No | No | `@PreFilter/@PostFilter` |
| Permission evaluator | No | No | Yes |
| When to use | Legacy code | Jakarta EE / portability | New projects |

---

## 6. Custom Security Meta-Annotations

Create composed annotations to reduce repetition and improve readability.

### 6.1 @IsAdmin — Custom Meta-Annotation

```java
package com.course.security.annotation;

import org.springframework.security.access.prepost.PreAuthorize;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("hasRole('ADMIN')")
public @interface IsAdmin {
}
```

### 6.2 @IsEditorOrAdmin

```java
package com.course.security.annotation;

import org.springframework.security.access.prepost.PreAuthorize;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("hasAnyRole('ADMIN', 'EDITOR') and isAuthenticated()")
public @interface IsEditorOrAdmin {
}
```

### 6.3 @OwnResource — Parameterized Meta-Annotation

```java
package com.course.security.annotation;

import org.springframework.security.access.prepost.PreAuthorize;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("hasRole('ADMIN') or #id.toString() == authentication.name")
public @interface OwnResource {
}
```

### 6.4 Using Meta-Annotations

```java
package com.course.security.controller;

import com.course.security.annotation.IsAdmin;
import com.course.security.annotation.IsEditorOrAdmin;
import com.course.security.annotation.OwnResource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/content")
public class MetaAnnotationController {

    @GetMapping("/admin-tools")
    @IsAdmin
    public String adminTools() {
        return "Admin Tools";
    }

    @PostMapping("/manage")
    @IsEditorOrAdmin
    public String manageContent() {
        return "Manage Content";
    }

    @GetMapping("/users/{id}/settings")
    @OwnResource
    public String userSettings(@PathVariable String id) {
        return "User settings for " + id;
    }

    // Class-level meta-annotation
    @IsAdmin
    @RestController
    @RequestMapping("/api/internal")
    public static class InternalController {

        @GetMapping("/config")
        public String config() {
            return "Internal Config — inherits @IsAdmin from class";
        }

        @GetMapping("/health")
        public String health() {
            return "Health Check";
        }
    }
}
```

### 6.5 Composed Annotation with Multiple Expressions

```java
package com.course.security.annotation;

import org.springframework.security.access.prepost.PreAuthorize;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("hasRole('ADMIN') and " +
    "hasAuthority('AUDIT_ACCESS') and " +
    "@auditWindowChecker.isWithinWindow()")
public @interface IsAuditor {
}
```

---

## 7. PermissionEvaluator — Custom hasPermission

The `hasPermission` expression in SpEL delegates to a `PermissionEvaluator`. Implement one to add domain-object-level authorization.

### 7.1 PermissionEvaluator Interface

```java
package org.springframework.security.access;

import java.io.Serializable;

public interface PermissionEvaluator {

    boolean hasPermission(Authentication authentication,
                          Object targetDomainObject,
                          Object permission);

    boolean hasPermission(Authentication authentication,
                          Serializable targetId,
                          String targetType,
                          Object permission);
}
```

### 7.2 Custom PermissionEvaluator Implementation

```java
package com.course.security.evaluator;

import com.course.security.model.Document;
import com.course.security.service.DocumentService;
import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Component
public class DocumentPermissionEvaluator implements PermissionEvaluator {

    private final DocumentService documentService;

    public DocumentPermissionEvaluator(DocumentService documentService) {
        this.documentService = documentService;
    }

    @Override
    public boolean hasPermission(
            Authentication authentication,
            Object targetDomainObject,
            Object permission) {

        if (targetDomainObject instanceof Document document) {
            return hasDocumentPermission(authentication, document, permission.toString());
        }

        return false;
    }

    @Override
    public boolean hasPermission(
            Authentication authentication,
            Serializable targetId,
            String targetType,
            Object permission) {

        if ("Document".equals(targetType)) {
            Document document = documentService.findById((Long) targetId);
            if (document == null) return false;
            return hasDocumentPermission(authentication, document, permission.toString());
        }

        return false;
    }

    private boolean hasDocumentPermission(
            Authentication authentication,
            Document document,
            String permission) {

        String username = authentication.getName();

        return switch (permission) {
            case "READ" ->
                document.getOwner().equals(username)
                || document.getSharedUsers().contains(username)
                || isAdmin(authentication);

            case "WRITE" ->
                document.getOwner().equals(username)
                || isAdmin(authentication);

            case "DELETE" ->
                isAdmin(authentication);

            case "SHARE" ->
                document.getOwner().equals(username)
                || hasAuthority(authentication, "ROLE_ADMIN");

            default -> false;
        };
    }

    private boolean isAdmin(Authentication authentication) {
        return hasAuthority(authentication, "ROLE_ADMIN");
    }

    private boolean hasAuthority(Authentication authentication, String authority) {
        return authentication.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority)
            .anyMatch(a -> a.equals(authority));
    }
}
```

### 7.3 Registering the PermissionEvaluator

```java
package com.course.security.config;

import com.course.security.evaluator.DocumentPermissionEvaluator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;
import org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;

@Configuration
public class PermissionEvaluatorConfig {

    private final DocumentPermissionEvaluator documentPermissionEvaluator;

    public PermissionEvaluatorConfig(DocumentPermissionEvaluator documentPermissionEvaluator) {
        this.documentPermissionEvaluator = documentPermissionEvaluator;
    }

    @Bean
    public MethodSecurityExpressionHandler methodSecurityExpressionHandler() {
        DefaultMethodSecurityExpressionHandler handler =
            new DefaultMethodSecurityExpressionHandler();
        handler.setPermissionEvaluator(documentPermissionEvaluator);
        return handler;
    }
}
```

### 7.4 Using hasPermission in Controllers

```java
package com.course.security.controller;

import com.course.security.model.Document;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/permissions")
public class PermissionController {

    private final DocumentService documentService;

    public PermissionController(DocumentService documentService) {
        this.documentService = documentService;
    }

    // Object-level permission check (target domain object)
    @GetMapping("/{id}")
    @PreAuthorize("hasPermission(#id, 'Document', 'READ')")
    public Document getDocument(@PathVariable Long id) {
        return documentService.findById(id);
    }

    // Write permission
    @PutMapping("/{id}")
    @PreAuthorize("hasPermission(#id, 'Document', 'WRITE')")
    public Document updateDocument(@PathVariable Long id, @RequestBody Document doc) {
        return documentService.update(id, doc);
    }

    // Delete permission — only admins
    @DeleteMapping("/{id}")
    @PreAuthorize("hasPermission(#id, 'Document', 'DELETE')")
    public void deleteDocument(@PathVariable Long id) {
        documentService.delete(id);
    }

    // Object-level check with return object
    @GetMapping("/object/{id}")
    @PostAuthorize("hasPermission(returnObject, 'READ')")
    public Document getDocumentObject(@PathVariable Long id) {
        return documentService.findById(id);
    }

    // Multiple permission checks
    @PostMapping("/{id}/share")
    @PreAuthorize("hasPermission(#id, 'Document', 'SHARE') and " +
        "hasPermission(#targetUser, 'Document', 'READ')")
    public String shareDocument(
            @PathVariable Long id,
            @RequestParam String targetUser) {
        documentService.share(id, targetUser);
        return "Shared";
    }
}
```

### 7.5 hasPermission with MethodSecurityExpressionHandler

For more control, extend the expression handler to add custom methods:

```java
package com.course.security.evaluator;

import org.springframework.security.access.expression.SecurityExpressionRoot;
import org.springframework.security.access.expression.method.MethodSecurityExpressionOperations;
import org.springframework.security.core.Authentication;

public class CustomSecurityExpressionRoot
        extends SecurityExpressionRoot
        implements MethodSecurityExpressionOperations {

    private Object filterObject;
    private Object returnObject;
    private Object target;

    public CustomSecurityExpressionRoot(Authentication authentication) {
        super(authentication);
    }

    // Custom expression methods
    public boolean isMemberOf(String group) {
        return this.getAuthentication().getAuthorities().stream()
            .anyMatch(a -> a.getAuthority().equals("GROUP_" + group));
    }

    public boolean isDuringBusinessHours() {
        return java.time.LocalTime.now().getHour() >= 9
            && java.time.LocalTime.now().getHour() < 17;
    }

    public boolean hasAnyEmailDomain(String... domains) {
        String email = this.getAuthentication().getName();
        if (!email.contains("@")) return false;
        String domain = email.substring(email.indexOf("@") + 1);
        return java.util.Arrays.asList(domains).contains(domain);
    }

    @Override
    public void setFilterObject(Object filterObject) {
        this.filterObject = filterObject;
    }

    @Override
    public Object getFilterObject() {
        return filterObject;
    }

    @Override
    public void setReturnObject(Object returnObject) {
        this.returnObject = returnObject;
    }

    @Override
    public Object getReturnObject() {
        return returnObject;
    }

    @Override
    public Object getThis() {
        return target;
    }

    public void setThis(Object target) {
        this.target = target;
    }
}
```

Usage in controller:

```java
@GetMapping("/business")
@PreAuthorize("isDuringBusinessHours()")
public String businessHoursOnly() {
    return "Accessed during business hours";
}

@GetMapping("/group/{groupName}")
@PreAuthorize("isMemberOf(#groupName)")
public String groupAccess(@PathVariable String groupName) {
    return "Accessing group: " + groupName;
}
```

---

## 8. Pointcut-Based Security (AspectJ)

When annotations are impractical (e.g., third-party classes, legacy code), use AspectJ pointcuts for method security.

### 8.1 Aspect-Based Security

```java
package com.course.security.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Set;
import java.util.stream.Collectors;

@Aspect
@Component
public class SecurityAuditAspect {

    private static final Set<String> ADMIN_AUTHORITIES = Set.of("ROLE_ADMIN");
    private static final Set<String> SENSITIVE_OPERATIONS = Set.of("delete", "purge", "reset");

    // Pointcut: all methods in service package
    @Pointcut("execution(* com.course.security.service.*.*(..))")
    public void serviceLayer() {}

    // Pointcut: methods annotated with @AuditLog
    @Pointcut("@annotation(com.course.security.annotation.AuditLog)")
    public void auditLogged() {}

    // Pointcut: methods starting with "delete" or "purge"
    @Pointcut("execution(* com.course.security.service.*.delete*(..)) || " +
        "execution(* com.course.security.service.*.purge*(..))")
    public void destructiveOperations() {}

    // Log all service method invocations
    @Around("serviceLayer()")
    public Object auditServiceCall(ProceedingJoinPoint joinPoint) throws Throwable {
        String methodName = joinPoint.getSignature().toShortString();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth != null ? auth.getName() : "ANONYMOUS";

        System.out.printf("[AUDIT] %s called %s%n", username, methodName);

        long start = System.currentTimeMillis();
        try {
            Object result = joinPoint.proceed();
            long elapsed = System.currentTimeMillis() - start;
            System.out.printf("[AUDIT] %s completed %s in %dms%n",
                username, methodName, elapsed);
            return result;
        } catch (Exception e) {
            long elapsed = System.currentTimeMillis() - start;
            System.out.printf("[AUDIT] %s FAILED %s in %dms: %s%n",
                username, methodName, elapsed, e.getMessage());
            throw e;
        }
    }

    // Security check on destructive operations
    @Around("destructiveOperations()")
    public Object requireAdminForDestructiveOps(ProceedingJoinPoint joinPoint) throws Throwable {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth == null || !auth.isAuthenticated()) {
            throw new AccessDeniedException("Authentication required");
        }

        Set<String> authorities = auth.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority)
            .collect(Collectors.toSet());

        if (authorities.stream().noneMatch(a -> a.equals("ROLE_ADMIN"))) {
            throw new AccessDeniedException(
                "Only administrators can perform destructive operations");
        }

        return joinPoint.proceed();
    }

    // Pointcut with parameter binding
    @Around("execution(* com.course.security.service.*.transfer(..)) && args(from, to, amount)")
    public void validateLargeTransfers(
            ProceedingJoinPoint joinPoint,
            String from, String to, Double amount) throws Throwable {

        if (amount > 10000) {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            boolean isAdmin = auth.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

            if (!isAdmin) {
                throw new AccessDeniedException(
                    "Transfers over $10,000 require administrator approval");
            }
        }

        joinPoint.proceed();
    }
}
```

### 8.2 @AuditLog Annotation

```java
package com.course.security.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface AuditLog {
    String action() default "";
    String resource() default "";
}
```

### 8.3 Enabling AspectJ in Spring Boot

```java
package com.course.security.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy
public class AspectConfig {
}
```

---

## 9. CORS — Cross-Origin Resource Sharing

CORS is a browser security mechanism that controls which origins (domains, schemes, ports) are allowed to access resources from a different origin.

### 9.1 Same-Origin Policy

By default, browsers enforce the same-origin policy: a web page at `https://app.example.com` cannot make fetch requests to `https://api.example.com`. CORS relaxes this selectively.

### 9.2 @CrossOrigin on Controller

The simplest way to enable CORS is with `@CrossOrigin` on a controller or method:

```java
package com.course.security.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "https://myapp.example.com")
public class BookCorsController {

    private final BookRepository bookRepository;

    public BookCorsController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // Inherits @CrossOrigin from class
    @GetMapping
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    // Method-level override
    @GetMapping("/{id}")
    @CrossOrigin(origins = "https://trusted-partner.example.com")
    public Book getBook(@PathVariable Long id) {
        return bookRepository.findById(id)
            .orElseThrow(() -> new BookNotFoundException(id));
    }

    // Allow multiple origins
    @PostMapping
    @CrossOrigin(origins = {
        "https://myapp.example.com",
        "https://staging.example.com",
        "http://localhost:3000"
    })
    public Book createBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }

    // Allow all origins (use with caution)
    @GetMapping("/public")
    @CrossOrigin(origins = "*")
    public List<Book> publicBooks() {
        return bookRepository.findAll();
    }

    // Full CORS configuration
    @PutMapping("/{id}")
    @CrossOrigin(
        origins = "https://myapp.example.com",
        allowedHeaders = {"Content-Type", "Authorization", "X-Request-Id"},
        exposedHeaders = {"X-Total-Count", "X-Rate-Limit-Remaining"},
        methods = {RequestMethod.PUT, RequestMethod.OPTIONS},
        allowCredentials = "true",
        maxAge = 3600
    )
    public Book updateBook(@PathVariable Long id, @RequestBody Book book) {
        return bookRepository.findById(id)
            .map(existing -> {
                existing.setTitle(book.getTitle());
                existing.setAuthor(book.getAuthor());
                return bookRepository.save(existing);
            })
            .orElseThrow(() -> new BookNotFoundException(id));
    }
}
```

### 9.3 @CrossOrigin Attribute Reference

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `origins` | `String[]` | `*` | Allowed origins |
| `originPatterns` | `String[]` | `*` | Allowed origin patterns (e.g., `https://*.example.com`) |
| `allowedHeaders` | `String[]` | `*` | Allowed request headers |
| `exposedHeaders` | `String[]` | `[]` | Headers exposed to the browser |
| `methods` | `RequestMethod[]` | Method's HTTP method | Allowed HTTP methods |
| `allowCredentials` | `String` | `"true"` | Whether to send credentials (cookies, auth headers) |
| `maxAge` | `long` | `1800` (30 min) | How long the preflight response is cached |

### 9.4 Global CORS with CorsConfigurationSource

For centralized CORS configuration, define a `CorsConfigurationSource` bean:

```java
package com.course.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class CorsGlobalConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOrigins(List.of(
            "https://myapp.example.com",
            "https://staging.example.com",
            "http://localhost:3000"
        ));
        configuration.setAllowedMethods(List.of(
            "GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"
        ));
        configuration.setAllowedHeaders(List.of(
            "Authorization",
            "Content-Type",
            "X-Request-Id",
            "X-CSRF-TOKEN"
        ));
        configuration.setExposedHeaders(List.of(
            "X-Total-Count",
            "X-Rate-Limit-Remaining",
            "X-Rate-Limit-Reset"
        ));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", configuration);
        source.registerCorsConfiguration("/public/**", configuration);

        return source;
    }
}
```

### 9.5 Allowed Origin Patterns

Use `allowedOriginPatterns` instead of `allowedOrigins` when you need wildcard matching or credentials:

```java
@Configuration
public class CorsPatternConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        // allowedOrigins does NOT support "*" with allowCredentials=true
        // Use allowedOriginPatterns instead:
        configuration.setAllowedOriginPatterns(List.of(
            "https://*.example.com",
            "https://*.vercel.app",
            "http://localhost:*"
        ));
        configuration.setAllowedMethods(List.of("*"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", configuration);
        return source;
    }
}
```

### 9.6 Per-URL CORS Configuration

Different URL patterns need different CORS rules:

```java
@Configuration
public class PerUrlCorsConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

        // Public API — wide open
        CorsConfiguration publicApi = new CorsConfiguration();
        publicApi.setAllowedOrigins(List.of("*"));
        publicApi.setAllowedMethods(List.of("GET"));
        publicApi.setAllowedHeaders(List.of("*"));
        publicApi.setMaxAge(3600L);
        source.registerCorsConfiguration("/api/public/**", publicApi);

        // Authenticated API — specific origins only
        CorsConfiguration secureApi = new CorsConfiguration();
        secureApi.setAllowedOriginPatterns(List.of("https://*.example.com"));
        secureApi.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
        secureApi.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        secureApi.setAllowCredentials(true);
        secureApi.setExposedHeaders(List.of("X-Request-Id"));
        secureApi.setMaxAge(1800L);
        source.registerCorsConfiguration("/api/secure/**", secureApi);

        // Admin API — single origin
        CorsConfiguration adminApi = new CorsConfiguration();
        adminApi.setAllowedOrigins(List.of("https://admin.example.com"));
        adminApi.setAllowedMethods(List.of("*"));
        adminApi.setAllowedHeaders(List.of("*"));
        adminApi.setAllowCredentials(true);
        adminApi.setMaxAge(600L);
        source.registerCorsConfiguration("/api/admin/**", adminApi);

        return source;
    }
}
```

### 9.7 CORS with Spring Security Filter Chain

CORS must be configured before Spring Security's filter chain processes the request. Use `.cors()` in the security configuration:

```java
@Configuration
@EnableWebSecurity
public class SecurityCorsConfig {

    private final CorsConfigurationSource corsConfigurationSource;

    public SecurityCorsConfig(CorsConfigurationSource corsConfigurationSource) {
        this.corsConfigurationSource = corsConfigurationSource;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors(cors -> cors.configurationSource(corsConfigurationSource))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic(httpBasic -> {})
            .csrf(csrf -> csrf.disable());

        return http.build();
    }
}
```

### 9.8 Preflight (OPTIONS) Handling

Before the actual request, browsers send a preflight OPTIONS request to check CORS permissions:

```
OPTIONS /api/books HTTP/1.1
Origin: https://myapp.example.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Authorization, Content-Type
```

Spring's CORS filter handles this automatically when CORS is configured. The response includes:

```
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://myapp.example.com
Access-Control-Allow-Methods: POST, GET, PUT, DELETE
Access-Control-Allow-Headers: Authorization, Content-Type
Access-Control-Max-Age: 3600
```

If you need custom preflight handling:

```java
@Component
public class CorsPreflightFilter implements Filter {

    @Override
    public void doFilter(
            ServletRequest request,
            ServletResponse response,
            FilterChain chain) throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        if ("OPTIONS".equalsIgnoreCase(httpRequest.getMethod())) {
            httpResponse.setHeader("Access-Control-Allow-Origin", "https://myapp.example.com");
            httpResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            httpResponse.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
            httpResponse.setHeader("Access-Control-Max-Age", "3600");
            httpResponse.setStatus(HttpServletResponse.SC_OK);
            return;
        }

        chain.doFilter(request, response);
    }
}
```

### 9.9 CORS Error Handling

When CORS validation fails, Spring returns a `403 Forbidden` with an error message. Customize the response:

```java
@Component
public class CorsAccessDeniedHandler implements AccessDeniedHandler {

    @Override
    public void handle(
            HttpServletRequest request,
            HttpServletResponse response,
            AccessDeniedException accessDeniedException)
            throws IOException, ServletException {

        response.setContentType("application/json");
        response.setStatus(HttpServletResponse.SC_FORBIDDEN);

        String json = """
            {
                "error": "CORS Forbidden",
                "message": "Origin '%s' is not allowed",
                "timestamp": "%s"
            }
            """.formatted(
                request.getHeader("Origin"),
                java.time.Instant.now().toString()
            );

        response.getWriter().write(json);
    }
}
```

Register it:

```java
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .cors(cors -> cors.configurationSource(corsConfigurationSource())
            .accessDeniedHandler(new CorsAccessDeniedHandler()))
        // ...
        ;
    return http.build();
}
```

---

## 10. CSRF — Cross-Site Request Forgery

CSRF (also called XSRF) is an attack that forces an authenticated user to perform unwanted actions on a web application. Spring Security provides built-in CSRF protection.

### 10.1 How CSRF Works

An attacker tricks the victim's browser into sending a forged request:

1. User logs into `https://bank.example.com`
2. Browser stores the session cookie
3. User visits `https://malicious.site`
4. Malicious site sends `<form action="https://bank.example.com/transfer" method="POST">`
5. Browser includes the bank's cookie, and the server processes the request

CSRF tokens prevent this by requiring a token that the attacker cannot predict.

### 10.2 Default CSRF Protection

Spring Security enables CSRF protection by default for state-changing operations (POST, PUT, DELETE, PATCH).

```java
@Configuration
@EnableWebSecurity
public class CsrfDefaultConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .formLogin(form -> {})
            // CSRF is enabled by default
            // .csrf(csrf -> csrf.disable())
            ;

        return http.build();
    }
}
```

### 10.3 CsrfTokenRepository Implementations

Spring Security provides two built-in CSRF token repositories:

#### HttpSessionCsrfTokenRepository (Default)

Stores the CSRF token in the HTTP session. The token is generated and stored server-side.

```java
@Configuration
@EnableWebSecurity
public class SessionCsrfConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf
                .csrfTokenRepository(new HttpSessionCsrfTokenRepository())
            )
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .formLogin(form -> {});

        return http.build();
    }
}
```

The token is exposed via a request attribute named `_csrf` and must be included in requests as a header `X-CSRF-TOKEN` or parameter `_csrf`.

#### CookieCsrfTokenRepository

Stores the CSRF token in a cookie named `XSRF-TOKEN`. The client reads the cookie and sends it back as a header.

```java
@Configuration
@EnableWebSecurity
public class CookieCsrfConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
            )
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .formLogin(form -> {});

        return http.build();
    }
}
```

`withHttpOnlyFalse()` makes the cookie readable by JavaScript — required for SPAs that need to read the token.

### 10.4 Custom CsrfTokenRepository

```java
package com.course.security.csrf;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.DefaultCsrfToken;

import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

public class CustomCsrfTokenRepository implements CsrfTokenRepository {

    private static final String DEFAULT_CSRF_PARAMETER_NAME = "_csrf";
    private static final String DEFAULT_CSRF_HEADER_NAME = "X-CSRF-TOKEN";
    private static final String DEFAULT_CSRF_COOKIE_NAME = "CUSTOM-XSRF-TOKEN";

    private final ConcurrentHashMap<String, String> tokenStore = new ConcurrentHashMap<>();

    @Override
    public CsrfToken generateToken(HttpServletRequest request) {
        return new DefaultCsrfToken(
            DEFAULT_CSRF_HEADER_NAME,
            DEFAULT_CSRF_PARAMETER_NAME,
            UUID.randomUUID().toString()
        );
    }

    @Override
    public void saveToken(
            CsrfToken token,
            HttpServletRequest request,
            HttpServletResponse response) {

        String tokenValue = token != null ? token.getToken() : "";
        Cookie cookie = new Cookie(DEFAULT_CSRF_COOKIE_NAME, tokenValue);
        cookie.setSecure(true);
        cookie.setHttpOnly(false);
        cookie.setPath("/");
        cookie.setMaxAge(token != null ? -1 : 0);
        response.addCookie(cookie);

        // Also store in session as fallback
        if (token != null) {
            request.getSession().setAttribute(DEFAULT_CSRF_COOKIE_NAME, token.getToken());
        } else {
            request.getSession().removeAttribute(DEFAULT_CSRF_COOKIE_NAME);
        }
    }

    @Override
    public CsrfToken loadToken(HttpServletRequest request) {
        String tokenValue = null;

        // Try cookie first
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (DEFAULT_CSRF_COOKIE_NAME.equals(cookie.getName())) {
                    tokenValue = cookie.getValue();
                    break;
                }
            }
        }

        // Fall back to session
        if (tokenValue == null || tokenValue.isEmpty()) {
            tokenValue = (String) request.getSession()
                .getAttribute(DEFAULT_CSRF_COOKIE_NAME);
        }

        if (tokenValue == null || tokenValue.isEmpty()) {
            return null;
        }

        return new DefaultCsrfToken(
            DEFAULT_CSRF_HEADER_NAME,
            DEFAULT_CSRF_PARAMETER_NAME,
            tokenValue
        );
    }
}
```

### 10.5 When to Disable CSRF

CSRF protection is unnecessary for:

- **REST APIs that use token-based authentication** (JWT, OAuth2, API keys)
- **Services consumed by non-browser clients** (mobile apps, server-to-server)
- **Stateless APIs** (no session cookie)

```java
@Configuration
@EnableWebSecurity
public class RestApiSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic(httpBasic -> {});

        return http.build();
    }
}
```

### 10.6 CSRF with SPA (Single Page Application)

SPAs typically use the double-submit cookie pattern:

```java
@Configuration
@EnableWebSecurity
public class SpaCsrfConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .csrfTokenRequestHandler(new CsrfTokenRequestAttributeHandler())
            )
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(form -> {});

        return http.build();
    }
}
```

The SPA reads the `XSRF-TOKEN` cookie and sends it back as the `X-XSRF-TOKEN` header:

```javascript
// Angular does this automatically for XSRF-TOKEN cookie
// React example:
async function apiCall(url, options = {}) {
    const csrfToken = getCookie('XSRF-TOKEN');
    const response = await fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            'X-XSRF-TOKEN': csrfToken,
        },
        credentials: 'include',
    });
    return response.json();
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}
```

### 10.7 CsrfTokenRequestAttributeHandler

Controls how the CSRF token is exposed to the request. The default handler makes the token available as a request attribute.

```java
@Configuration
@EnableWebSecurity
public class CsrfHandlerConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .csrfTokenRequestHandler(new CsrfTokenRequestAttributeHandler())
            )
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .formLogin(form -> {});

        return http.build();
    }
}
```

Custom request handler:

```java
package com.course.security.csrf;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.security.web.csrf.CsrfTokenRequestHandler;
import org.springframework.security.web.csrf.CsrfTokenRequestResolver;

import java.util.function.Supplier;

public class CustomCsrfTokenRequestHandler implements CsrfTokenRequestHandler {

    private final CsrfTokenRequestHandler delegate =
        new CsrfTokenRequestAttributeHandler();

    @Override
    public void handle(
            HttpServletRequest request,
            HttpServletResponse response,
            Supplier<CsrfToken> deferredCsrfToken) {

        // Perform custom handling before delegating
        CsrfToken token = deferredCsrfToken.get();

        // Log CSRF validation attempts in debug mode
        if (request.getHeader(token.getHeaderName()) != null) {
            System.out.printf("[CSRF] Token found in header for %s %s%n",
                request.getMethod(), request.getRequestURI());
        }

        delegate.handle(request, response, deferredCsrfToken);
    }

    @Override
    public String resolveCsrfTokenValue(HttpServletRequest request, CsrfToken csrfToken) {
        // Try header first, then parameter
        String headerValue = request.getHeader(csrfToken.getHeaderName());
        if (headerValue != null) return headerValue;

        String paramValue = request.getParameter(csrfToken.getParameterName());
        if (paramValue != null) return paramValue;

        // Try alternate header names
        String xsrfValue = request.getHeader("X-XSRF-TOKEN");
        if (xsrfValue != null) return xsrfValue;

        return "";
    }
}
```

### 10.8 Custom AccessDeniedHandler for CSRF Failures

When CSRF validation fails, Spring returns a `403 Forbidden`. Customize this response:

```java
package com.course.security.csrf;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.csrf.InvalidCsrfTokenException;
import org.springframework.security.web.csrf.MissingCsrfTokenException;

import java.io.IOException;
import java.time.Instant;

public class CsrfAccessDeniedHandler implements AccessDeniedHandler {

    @Override
    public void handle(
            HttpServletRequest request,
            HttpServletResponse response,
            AccessDeniedException accessDeniedException)
            throws IOException {

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        String errorType;
        String message;

        if (accessDeniedException instanceof MissingCsrfTokenException) {
            errorType = "CSRF_TOKEN_MISSING";
            message = "CSRF token is missing. Include X-CSRF-TOKEN header or _csrf parameter.";
            response.setStatus(403);
        } else if (accessDeniedException instanceof InvalidCsrfTokenException) {
            errorType = "CSRF_TOKEN_INVALID";
            message = "CSRF token is invalid or expired. Refresh the page and try again.";
            response.setStatus(403);
        } else {
            errorType = "CSRF_ERROR";
            message = accessDeniedException.getMessage();
            response.setStatus(403);
        }

        String json = """
            {
                "error": "%s",
                "message": "%s",
                "timestamp": "%s",
                "path": "%s"
            }
            """.formatted(
                errorType,
                message,
                Instant.now().toString(),
                request.getRequestURI()
            );

        response.getWriter().write(json);
    }
}
```

Register it:

```java
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .csrf(csrf -> csrf
            .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
            .accessDeniedHandler(new CsrfAccessDeniedHandler())
        )
        .authorizeHttpRequests(auth -> auth
            .anyRequest().authenticated()
        )
        .formLogin(form -> {});

    return http.build();
}
```

### 10.9 CSRF Protection for Non-Browser Clients

For mobile apps or service-to-service calls, disable CSRF entirely:

```java
@Configuration
@Order(1)
public class MobileApiSecurityConfig {

    @Bean
    @Order(1)
    public SecurityFilterChain mobileFilterChain(HttpSecurity http) throws Exception {
        http
            .securityMatcher("/api/mobile/**")
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .httpBasic(httpBasic -> {});

        return http.build();
    }
}

@Configuration
@Order(2)
public class WebSecurityConfig {

    @Bean
    @Order(2)
    public SecurityFilterChain webFilterChain(HttpSecurity http) throws Exception {
        http
            .securityMatcher("/web/**")
            .csrf(csrf -> csrf
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
            )
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .formLogin(form -> {});

        return http.build();
    }
}
```

---

## 11. CSP — Content Security Policy Headers

Content Security Policy (CSP) is a browser security mechanism that helps detect and mitigate content injection attacks, including XSS and data injection.

### 11.1 Basic CSP Configuration

```java
@Configuration
@EnableWebSecurity
public class CspSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .headers(headers -> headers
                .contentSecurityPolicy(csp -> csp
                    .policyDirectives("default-src 'self'; " +
                        "script-src 'self' 'unsafe-inline'; " +
                        "style-src 'self' 'unsafe-inline'; " +
                        "img-src 'self' data: https:; " +
                        "font-src 'self' https://fonts.gstatic.com; " +
                        "connect-src 'self' https://api.example.com; " +
                        "frame-ancestors 'none'; " +
                        "form-action 'self'; " +
                        "base-uri 'self'; " +
                        "object-src 'none'")
                )
                .frameOptions(frame -> frame.deny())
                .xssProtection(xss -> xss.block(false))
                .contentTypeOptions(content -> contentTypeOptions -> {})
            )
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .formLogin(form -> {});

        return http.build();
    }
}
```

### 11.2 Comprehensive Security Headers

```java
@Configuration
@EnableWebSecurity
public class ComprehensiveHeaderConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .headers(headers -> headers
                // Content Security Policy
                .contentSecurityPolicy(csp -> csp
                    .policyDirectives("default-src 'self'; " +
                        "script-src 'self'; " +
                        "style-src 'self' 'unsafe-inline'; " +
                        "img-src 'self' data: https:; " +
                        "font-src 'self'; " +
                        "connect-src 'self'; " +
                        "frame-ancestors 'none'; " +
                        "form-action 'self'; " +
                        "base-uri 'self'; " +
                        "object-src 'none'; " +
                        "upgrade-insecure-requests")
                )

                // X-Content-Type-Options: nosniff
                .contentTypeOptions(contentTypeOptions -> {})

                // X-Frame-Options: DENY
                .frameOptions(frameOptions -> frameOptions.deny())

                // Strict-Transport-Security (HSTS)
                .httpStrictTransportSecurity(hsts -> hsts
                    .includeSubDomains(true)
                    .maxAgeInSeconds(31536000)
                    .preload(true)
                )

                // Referrer-Policy
                .referrerPolicy(referrer ->
                    referrer.policy(
                        org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter
                            .ReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN
                    )
                )

                // Permissions-Policy
                .permissionsPolicy(permissions -> permissions
                    .policy("camera=(), " +
                        "microphone=(), " +
                        "geolocation=(self), " +
                        "payment=(), " +
                        "fullscreen=(self)")
                )

                // Remove Server header
                .cacheControl(cache -> {})
            )
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            );

        return http.build();
    }
}
```

### 11.3 Custom Headers with addHeaderWriter

Add custom security headers programmatically:

```java
@Configuration
@EnableWebSecurity
public class CustomHeaderConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .headers(headers -> headers
                .addHeaderWriter((request, response) -> {
                    response.setHeader("X-Content-Type-Options", "nosniff");
                    response.setHeader("X-Frame-Options", "DENY");
                    response.setHeader("X-XSS-Protection", "0");
                    response.setHeader("Strict-Transport-Security",
                        "max-age=31536000; includeSubDomains; preload");
                    response.setHeader("Referrer-Policy",
                        "strict-origin-when-cross-origin");
                    response.setHeader("Permissions-Policy",
                        "camera=(), microphone=(), geolocation=(self)");
                    response.setHeader("Content-Security-Policy",
                        "default-src 'self'");
                    response.setHeader("X-Powered-By", "");
                    response.setHeader("Server", "");
                })
            )
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            );

        return http.build();
    }
}
```

### 11.4 StaticHeadersWriter

```java
import org.springframework.security.web.header.writers.StaticHeadersWriter;

@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .headers(headers -> headers
            .addHeaderWriter(new StaticHeadersWriter("X-Robots-Tag", "noindex, nofollow"))
            .addHeaderWriter(new StaticHeadersWriter("X-Permitted-Cross-Domain-Policies", "none"))
        )
        .authorizeHttpRequests(auth -> auth
            .anyRequest().authenticated()
        );

    return http.build();
}
```

### 11.5 CSP Reporting

For monitoring CSP violations without full enforcement:

```java
@Configuration
@EnableWebSecurity
public class CspReportConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .headers(headers -> headers
                .contentSecurityPolicy(csp -> csp
                    .policyDirectives("default-src 'self'; " +
                        "script-src 'self' 'report-sample'; " +
                        "style-src 'self' 'report-sample'; " +
                        "img-src 'self'; " +
                        "report-uri /api/csp-violation; " +
                        "report-to csp-endpoint")
                )
            )
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/csp-violation").permitAll()
                .anyRequest().authenticated()
            );

        return http.build();
    }
}
```

CSP violation receiver endpoint:

```java
package com.course.security.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class CspViolationController {

    @PostMapping(value = "/csp-violation",
        consumes = "application/csp-report")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void receiveCspReport(@RequestBody Map<String, Object> report) {
        // Log the CSP violation
        System.err.println("[CSP VIOLATION] " + report);
        // Store in database for analysis
    }

    @PostMapping(value = "/csp-violation",
        consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void receiveCspReportJson(@RequestBody Map<String, Object> report) {
        System.err.println("[CSP VIOLATION] " + report);
    }
}
```

---

## 12. Complete Integration Example

A full configuration integrating method security, CORS, CSRF, and CSP:

```java
package com.course.security.config;

import com.course.security.csrf.CsrfAccessDeniedHandler;
import com.course.security.evaluator.DocumentPermissionEvaluator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;
import org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRequestAttributeHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true, jsr250Enabled = true)
public class MasterSecurityConfig {

    private final DocumentPermissionEvaluator documentPermissionEvaluator;

    public MasterSecurityConfig(DocumentPermissionEvaluator documentPermissionEvaluator) {
        this.documentPermissionEvaluator = documentPermissionEvaluator;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // CORS
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))

            // CSRF — enabled for browser clients, disabled for API
            .csrf(csrf -> csrf
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .csrfTokenRequestHandler(new CsrfTokenRequestAttributeHandler())
                .accessDeniedHandler(new CsrfAccessDeniedHandler())
            )

            // Security Headers / CSP
            .headers(headers -> headers
                .contentSecurityPolicy(csp -> csp
                    .policyDirectives("default-src 'self'; " +
                        "script-src 'self'; " +
                        "style-src 'self' 'unsafe-inline'; " +
                        "img-src 'self' data:; " +
                        "font-src 'self'; " +
                        "connect-src 'self'; " +
                        "frame-ancestors 'none'; " +
                        "form-action 'self'; " +
                        "base-uri 'self'; " +
                        "object-src 'none'")
                )
                .frameOptions(frame -> frame.deny())
                .httpStrictTransportSecurity(hsts -> hsts
                    .includeSubDomains(true)
                    .maxAgeInSeconds(31536000))
                .referrerPolicy(referrer -> referrer
                    .policy(org.springframework.security.web.header.writers
                        .ReferrerPolicyHeaderWriter.ReferrerPolicy
                        .STRICT_ORIGIN_WHEN_CROSS_ORIGIN))
                .permissionsPolicy(permissions -> permissions
                    .policy("camera=(), microphone=(), geolocation=(), payment=()"))
            )

            // Authorization
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/csp-violation").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )

            .formLogin(form -> {})
            .httpBasic(httpBasic -> {});

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOriginPatterns(List.of("https://*.example.com", "http://localhost:*"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
        config.setAllowedHeaders(List.of("Authorization", "Content-Type", "X-CSRF-TOKEN", "X-XSRF-TOKEN"));
        config.setExposedHeaders(List.of("X-Total-Count", "X-Request-Id"));
        config.setAllowCredentials(true);
        config.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", config);
        return source;
    }

    @Bean
    public MethodSecurityExpressionHandler methodSecurityExpressionHandler() {
        DefaultMethodSecurityExpressionHandler handler =
            new DefaultMethodSecurityExpressionHandler();
        handler.setPermissionEvaluator(documentPermissionEvaluator);
        return handler;
    }
}
```

---

## Summary

- `@EnableMethodSecurity(prePostEnabled=true)` enables `@PreAuthorize`, `@PostAuthorize`, `@PreFilter`, `@PostFilter` with full SpEL support
- `hasRole('ADMIN')` checks for `ROLE_ADMIN`; `hasAuthority('WRITE')` checks for that exact authority string
- `@PostAuthorize` evaluates after the method and can access `returnObject` — useful for object-level security
- `@PreFilter` and `@PostFilter` remove elements from collections that don't match the SpEL expression
- `@Secured` and `@RolesAllowed` are legacy alternatives without SpEL support
- Custom `PermissionEvaluator` + `MethodSecurityExpressionHandler` enables `hasPermission(...)` checks
- Custom meta-annotations like `@IsAdmin` reduce boilerplate
- AspectJ pointcuts provide cross-cutting security for third-party or legacy code
- `@CrossOrigin` on controllers or a global `CorsConfigurationSource` bean controls cross-origin access
- `allowedOriginPatterns` supports wildcards with credentials; `allowedOrigins` does not
- CSRF is enabled by default and uses `HttpSessionCsrfTokenRepository`; SPAs should use `CookieCsrfTokenRepository.withHttpOnlyFalse()`
- Disable CSRF for stateless REST APIs, mobile clients, and service-to-service communication
- CSP headers (`Content-Security-Policy`, `X-Frame-Options`, `HSTS`, etc.) provide defense-in-depth against XSS and injection attacks

---

## Exercises

1. **Role-based access**: Configure `@EnableMethodSecurity` with `InMemoryUserDetailsManager` containing users with `USER`, `EDITOR`, and `ADMIN` roles. Secure an endpoint so only `EDITOR` and `ADMIN` can POST new articles.

2. **SpEL parameter matching**: Create a `TicketController` with `@PreAuthorize("#ticket.creator == authentication.name or hasRole('ADMIN')")`. Implement a `Ticket` model with a `creator` field.

3. **PostAuthorize with returnObject**: Build a `PatientController` where `@PostAuthorize("returnObject.doctorId == authentication.principal.id")` ensures doctors only see their own patients.

4. **PermissionEvaluator**: Implement a `ProjectPermissionEvaluator` that supports `READ`, `WRITE`, and `MANAGE` permissions on `Project` objects. Use `hasPermission(#id, 'Project', 'READ')` in controllers.

5. **Meta-annotation**: Create a `@CanManageProjects` meta-annotation combining `hasRole('ADMIN')` and `hasAuthority('MANAGE_PROJECTS')`. Apply it to a project management controller.

6. **CORS configuration**: Set up `CorsConfigurationSource` that allows `http://localhost:5173` (Vite dev server) with credentials. Configure Spring Security to use this CORS source.

7. **CSRF for SPA**: Configure `CookieCsrfTokenRepository.withHttpOnlyFalse()` for a Spring Boot backend consumed by a React SPA. Write the JavaScript code that reads `XSRF-TOKEN` and sends `X-XSRF-TOKEN` header.

8. **CSP reporting**: Enable CSP with `report-uri /api/csp-violation`. Create a `@PostMapping` endpoint that receives and logs CSP violation reports.

9. **Security headers audit**: Configure all major security headers (`Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security`, `Referrer-Policy`, `Permissions-Policy`) and verify them with curl.

10. **Multi-chain security**: Create two security filter chains: one for `/api/mobile/**` (stateless, CSRF disabled) and one for `/web/**` (session-based, CSRF with cookie repository).
