# Application Properties & Configuration

> **Previous:** [Auto-Configuration & Starters](./11-auto-configuration.md) | **Next:** [Actuator, DevTools & Monitoring](./13-actuator-devtools.md)

## Learning Objectives

After completing this chapter, you will be able to:

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/java/12-configuration/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/12-configuration/hero.svg" alt="Chapter Banner: Application Properties & Configuration" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/12-configuration/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/12-configuration/handwritten-notes.svg" alt="Handwritten Notes: Application Properties & Configuration" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/12-configuration/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/12-configuration/sticky-notes.svg" alt="Sticky Notes: Application Properties & Configuration" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/12-configuration/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/12-configuration/visual-explanation.svg" alt="Visual Explanation: Application Properties & Configuration" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/12-configuration/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/12-configuration/architecture.svg" alt="Architecture: Application Properties & Configuration" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/12-configuration/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/12-configuration/workflow.svg" alt="Workflow: Application Properties & Configuration" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/12-configuration/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/12-configuration/mindmap.svg" alt="Mind Map: Application Properties & Configuration" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/12-configuration/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/12-configuration/comparison.svg" alt="Comparison: Application Properties & Configuration" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/12-configuration/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/12-configuration/cheatsheet.svg" alt="Cheat Sheet: Application Properties & Configuration" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/12-configuration/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/12-configuration/interview-quiz.svg" alt="Quiz Card: Application Properties & Configuration" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/12-configuration/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/12-configuration/social-card.svg" alt="Social Card: Application Properties & Configuration" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


- Configure Spring Boot applications using `application.properties` and `application.yml`
- Bind configuration properties to type-safe Java beans using `@ConfigurationProperties`
- Inject individual property values with `@Value`
- Load custom property files with `@PropertySource`
- Use YAML profiles and multi-document YAML for environment-specific configuration
- Externalize configuration via command-line arguments, environment variables, JNDI, and config data locations
- Leverage relaxed binding for property name flexibility
- Use Kubernetes ConfigMaps via the config tree mount approach
- Generate random property values for testing and seeding
- Validate configuration properties at startup
- Convert Duration and DataSize properties automatically
- Import additional configuration with `spring.config.import`
- Understand config location ordering and override precedence

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| Property Sources | Properties vs YAML, loading order | YAML supports hierarchical structure and multi-doc profiles |
| @ConfigurationProperties | Type-safe property binding | Use @ConstructorBinding for immutable config beans |
| @Value | SpEL-powered single property injection | Use for simple values; prefer @ConfigurationProperties for groups |
| Externalization | CLI args, env vars, JNDI, config trees | CLI args override env vars, which override files |
| Profiles | Environment-specific property files | application-{profile}.properties loaded after base |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Property Files] --> B[@ConfigurationProperties]
    B --> C[@Value & SpEL]
    C --> D[Externalized Config]
    D --> E[Profiles]
    E --> F[Relaxed Binding]
    F --> G[Validation & Conversion]
    G --> H[Config Import]
```

> **Pro Tip:** Always externalize environment-specific configuration. Database URLs, credentials, and API keys should never be hardcoded — use environment variables or a secrets manager.

---

## 1. Theory

![Externalized Configuration Flow](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/12-configuration.png)

### 1.1 The Philosophy of Externalized Configuration


One of the twelve-factor app principles states that configuration should be **strictly separated from code**. A twelve-factor app stores config in **environment variables**, not in the codebase. Spring Boot embraces this by allowing configuration from many sources with a well-defined precedence order.

The fundamental idea is that the same deployable artifact (a JAR or WAR) should work across development, staging, production, and every other environment without recompilation. You change behaviour by changing configuration, not code.

### 1.2 Configuration Priority Order


Spring Boot loads configuration from many sources in a specific order. Later sources override earlier ones:

| Priority | Source |
|----------|--------|
| 1 (highest) | Devtools global settings (`~/.spring-boot-devtools.properties`) |
| 2 | `@TestPropertySource` annotations on test classes |
| 3 | `@SpringBootTest` properties |
| 4 | Command-line arguments (`--server.port=9090`) |
| 5 | Properties from `SPRING_APPLICATION_JSON` (inline JSON) |
| 6 | Servlet `ServletConfig` init parameters |
| 7 | Servlet `ServletContext` init parameters |
| 8 | JNDI attributes from `java:comp/env` |
| 9 | Java system properties (`System.getProperties()`) |
| 10 | OS environment variables |
| 11 | `application.properties` / `application.yml` (outside packaged JAR) |
| 12 | `application.properties` / `application.yml` (inside packaged JAR) |
| 13 | `@PropertySource` on `@Configuration` classes |
| 14 | Default properties (specified via `SpringApplication.setDefaultProperties`) |

Understanding this order is crucial for debugging "why isn't my property being picked up?"

### 1.3 application.properties vs application.yml


Spring Boot supports two primary configuration file formats:

**application.properties** → A flat, key-value format inherited from standard Java properties:

```properties
server.port=8080
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=appuser
spring.datasource.password=${DB_PASSWORD}
app.theme.color=blue
app.theme.font-size=14px
```

**application.yml** → A hierarchical YAML format that reduces repetition:

```yaml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/mydb
    username: appuser
    password: ${DB_PASSWORD}

app:
  theme:
    color: blue
    font-size: 14px
```

YAML uses indentation to represent structure. Do not use tabs; Spring Boot's YAML parser (SnakeYAML) expects spaces. Two-space indentation is the convention.

YAML supports richer types than properties files:

```yaml
# Lists
app:
  allowed-origins:
    - https://example.com
    - https://api.example.com

# Inline list
app:
  allowed-origins: [https://example.com, https://api.example.com]

# Maps
app:
  database:
    host: localhost
    port: 5432
    credentials:
      user: admin
      password: secret

# Multi-line strings
app:
  description: >
    This is a single paragraph that
    will be folded into one line.

app:
  banner: |
    This is a block
    that preserves
    line breaks.
```

**Warning about YAML lists and `@Value`**: You cannot inject a YAML list directly with `@Value`. Use `@ConfigurationProperties` instead.

### 1.4 Type-Safe Configuration with @ConfigurationProperties


The most robust way to work with configuration is to bind properties to strongly-typed Java beans.

#### 1.4.1 Basic Binding

```java
package com.example.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "app.theme")
public class ThemeProperties {

    private String color;
    private int fontSize;

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getFontSize() {
        return fontSize;
    }

    public void setFontSize(int fontSize) {
        this.fontSize = fontSize;
    }
}
```

With:

```yaml
app:
  theme:
    color: blue
    font-size: 14
```

Note: `font-size` in YAML maps to `fontSize` in Java via **relaxed binding**.

#### 1.4.2 Enabling @ConfigurationProperties with @EnableConfigurationProperties

Instead of `@Component`, you can register the class explicitly:

```java
package com.example.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app.datasource")
public class DataSourceProperties {

    private String url;
    private String username;
    private String password;
    private int maxPoolSize = 10;

    // getters and setters
}
```

Then in a configuration class:

```java
package com.example.config;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(DataSourceProperties.class)
public class AppConfig {
    // configuration
}
```

#### 1.4.3 Constructor Binding (Immutable Properties)

With Spring Boot 2.2+, you can use constructor binding for immutable beans:

```java
package com.example.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

@ConstructorBinding
@ConfigurationProperties(prefix = "app.mail")
public class MailProperties {

    private final String host;
    private final int port;
    private final String from;

    public MailProperties(String host, int port, String from) {
        this.host = host;
        this.port = port;
        this.from = from;
    }

    public String getHost() {
        return host;
    }

    public int getPort() {
        return port;
    }

    public String getFrom() {
        return from;
    }
}
```

Constructor binding eliminates setters, making the properties immutable and thus thread-safe.

#### 1.4.4 Nested Properties

```java
package com.example.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "app")
public class AppProperties {

    private final Theme theme = new Theme();
    private final Database database = new Database();
    private final Security security = new Security();

    public Theme getTheme() {
        return theme;
    }

    public Database getDatabase() {
        return database;
    }

    public Security getSecurity() {
        return security;
    }

    public static class Theme {
        private String color;
        private int fontSize;
        private boolean darkMode;

        public String getColor() {
            return color;
        }

        public void setColor(String color) {
            this.color = color;
        }

        public int getFontSize() {
            return fontSize;
        }

        public void setFontSize(int fontSize) {
            this.fontSize = fontSize;
        }

        public boolean isDarkMode() {
            return darkMode;
        }

        public void setDarkMode(boolean darkMode) {
            this.darkMode = darkMode;
        }
    }

    public static class Database {
        private String url;
        private String username;
        private String password;
        private int maxPoolSize;

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public int getMaxPoolSize() {
            return maxPoolSize;
        }

        public void setMaxPoolSize(int maxPoolSize) {
            this.maxPoolSize = maxPoolSize;
        }
    }

    public static class Security {
        private boolean enabled;
        private List<String> allowedOrigins = new ArrayList<>();
        private Jwt jwt = new Jwt();

        public boolean isEnabled() {
            return enabled;
        }

        public void setEnabled(boolean enabled) {
            this.enabled = enabled;
        }

        public List<String> getAllowedOrigins() {
            return allowedOrigins;
        }

        public void setAllowedOrigins(List<String> allowedOrigins) {
            this.allowedOrigins = allowedOrigins;
        }

        public Jwt getJwt() {
            return jwt;
        }

        public void setJwt(Jwt jwt) {
            this.jwt = jwt;
        }

        public static class Jwt {
            private String secret;
            private long expirationMs;

            public String getSecret() {
                return secret;
            }

            public void setSecret(String secret) {
                this.secret = secret;
            }

            public long getExpirationMs() {
                return expirationMs;
            }

            public void setExpirationMs(long expirationMs) {
                this.expirationMs = expirationMs;
            }
        }
    }
}
```

Corresponding YAML:

```yaml
app:
  theme:
    color: blue
    font-size: 14
    dark-mode: true
  database:
    url: jdbc:postgresql://localhost:5432/mydb
    username: ${DB_USER}
    password: ${DB_PASS}
    max-pool-size: 20
  security:
    enabled: true
    allowed-origins:
      - https://app.example.com
      - https://admin.example.com
    jwt:
      secret: ${JWT_SECRET}
      expiration-ms: 3600000
```

#### 1.4.5 Lists and Maps in @ConfigurationProperties

```java
@Component
@ConfigurationProperties(prefix = "app.cache")
public class CacheProperties {

    private List<String> evictionPolicies = new ArrayList<>();
    private Map<String, Integer> ttlSeconds = new HashMap<>();
    private List<Server> servers = new ArrayList<>();

    // getters and setters

    public static class Server {
        private String host;
        private int port;

        public String getHost() {
            return host;
        }

        public void setHost(String host) {
            this.host = host;
        }

        public int getPort() {
            return port;
        }

        public void setPort(int port) {
            this.port = port;
        }
    }
}
```

YAML:

```yaml
app:
  cache:
    eviction-policies:
      - LRU
      - LFU
      - TTL
    ttl-seconds:
      users: 3600
      sessions: 1800
      products: 300
    servers:
      - host: cache-01.example.com
        port: 6379
      - host: cache-02.example.com
        port: 6380
```

### 1.5 @Value Annotation


For simple, one-off property values, `@Value` is convenient:

```java
@Service
public class EmailService {

    @Value("${app.mail.host}")
    private String host;

    @Value("${app.mail.port:587}")
    private int port;

    @Value("${app.mail.from}")
    private String from;

    @Value("${app.mail.reply-to:noreply@example.com}")
    private String replyTo;

    @Value("#{${app.mail.retry.count} * 2}")
    private int calculatedRetryCount;

    @Value("${app.mail.templates}")
    private String[] templates;

    public void send() {
        System.out.printf("Sending mail via %s:%d from %s%n", host, port, from);
    }
}
```

**Key differences between @Value and @ConfigurationProperties**:

| Aspect | @Value | @ConfigurationProperties |
|--------|--------|--------------------------|
| Binding | SpEL evaluation, loose | Relaxed binding |
| Validation | Manual | JSR-303 / `@Validated` |
| Complex types | Difficult (lists, maps) | Built-in support |
| Immutability | Via `final` + constructor | Constructor binding |
| IDE support | No metadata | Spring Boot metadata |
| Nested properties | Not supported | Fully supported |

**Recommendation**: Use `@ConfigurationProperties` for groups of related properties and `@Value` only for simple, standalone injections.

### 1.6 @PropertySource


Load custom `.properties` files (not YAML):

```java
@Configuration
@PropertySource({
    "classpath:mail.properties",
    "classpath:custom.properties",
    "file:${external.config.path}/override.properties"
})
public class CustomConfig {
    // configuration
}
```

`mail.properties`:

```properties
mail.host=smtp.example.com
mail.port=587
mail.from=app@example.com
```

These properties are then accessible via `@Value` or `Environment`.

**Important limitations of @PropertySource**:
- Does **not** support YAML files (use `YamlPropertySourceLoader` or `application.yml` instead).
- Properties from `@PropertySource` are added to the `Environment` but have **lower priority** than `application.properties`.
- In Spring Boot 3.1+, `@PropertySource` can be made repeatable; simply add multiple annotations.

For YAML support with `@PropertySource`, you need a custom factory:

```java
package com.example.config;

import org.springframework.boot.env.YamlPropertySourceLoader;
import org.springframework.core.env.PropertySource;
import org.springframework.core.io.support.DefaultPropertySourceFactory;
import org.springframework.core.io.support.EncodedResource;

import java.io.IOException;

public class YamlPropertySourceFactory extends DefaultPropertySourceFactory {

    @Override
    public PropertySource<?> createPropertySource(String name, EncodedResource resource) throws IOException {
        YamlPropertySourceLoader loader = new YamlPropertySourceLoader();
        String filename = resource.getResource().getFilename();
        return loader.load(filename != null ? filename : name, resource.getResource())
                .get(0);
    }
}
```

Usage:

```java
@Configuration
@PropertySource(value = "classpath:app-config.yml", factory = YamlPropertySourceFactory.class)
public class YamlConfig {
    // properties from app-config.yml available via @Value
}
```

### 1.7 Profiles


#### 1.7.1 Profile-Specific Files

Spring Boot loads `application-{profile}.properties` or `application-{profile}.yml` automatically:

```
application.yml           # base configuration
application-dev.yml       # development overrides
application-staging.yml   # staging overrides
application-prod.yml      # production overrides
```

Active profiles can be set in:

```properties
# application.properties
spring.profiles.active=dev
```

Or via command line:

```shell
java -jar app.jar --spring.profiles.active=prod
```

Or as an environment variable:

```shell
export SPRING_PROFILES_ACTIVE=staging
```

#### 1.7.2 YAML Multi-Document Profiles

A single YAML file can contain multiple profile-specific sections separated by `---`:

```yaml
# Default profile (applies when no active profile matches)
server:
  port: 8080

spring:
  application:
    name: myapp

app:
  cache:
    enabled: true
    provider: local

---
spring:
  config:
    activate:
      on-profile: dev

server:
  port: 8081

app:
  cache:
    provider: embedded-redis

---
spring:
  config:
    activate:
      on-profile: prod

server:
  port: 80

app:
  cache:
    provider: redis-cluster

---
spring:
  config:
    activate:
      on-profile: test

server:
  port: 0  # random port
```

**Important**: In Spring Boot 2.4+, use `spring.config.activate.on-profile` instead of the legacy `spring.profiles`. The legacy approach still works but triggers a deprecation warning.

#### 1.7.3 Including and Excluding Profiles

```yaml
spring:
  profiles:
    active: dev,eu-west
    include: common,monitoring
```

Using `spring.profiles.include` to always include certain profiles:

```yaml
# application-dev.yml
spring:
  profiles:
    include: dev-db,dev-logging
```

#### 1.7.4 Programmatic Profile Configuration

```java
@SpringBootApplication
public class MyApplication {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(MyApplication.class);
        app.setAdditionalProfiles("dev", "eu-west");
        app.run(args);
    }
}
```

Or using `SpringApplicationBuilder`:

```java
@SpringBootApplication
public class MyApplication {

    public static void main(String[] args) {
        new SpringApplicationBuilder(MyApplication.class)
            .profiles("dev")
            .properties("spring.config.additional-location=optional:config/")
            .run(args);
    }
}
```

#### 1.7.5 @Profile Annotation

Conditionally activate beans based on profile:

```java
@Service
@Profile("dev")
public class DevNotificationService implements NotificationService {
    @Override
    public void send(String message) {
        System.out.println("[DEV] Notification: " + message);
    }
}

@Service
@Profile("prod")
public class ProdNotificationService implements NotificationService {
    @Override
    public void send(String message) {
        // Send via real SMS/email provider
    }
}

@Service
@Profile("!test")  // Active for all profiles EXCEPT 'test'
public class ProductionReadyService {
    // not available during tests
}
```

### 1.8 Relaxed Binding


Spring Boot's relaxed binding allows flexible property name matching. The following are all equivalent when binding to `app.theme.backgroundColor`:

```yaml
app:
  theme:
    backgroundColor: red         # camelCase
    background-color: red        # kebab-case (recommended for .properties and YAML)
    background_color: red        # snake_case
    BACKGROUND_COLOR: red        # UPPER_CASE (common for env vars)
```

The recommended convention:
- **YAML/properties files**: kebab-case (`background-color`, `max-pool-size`)
- **Environment variables**: UPPER_SNAKE_CASE (`APP_THEME_BACKGROUND_COLOR`)

#### Binding to Enums

```java
public enum DatabaseProvider {
    POSTGRESQL, MYSQL, H2, ORACLE
}

@Component
@ConfigurationProperties(prefix = "app.database")
public class DatabaseProperties {
    private DatabaseProvider provider;

    public DatabaseProvider getProvider() {
        return provider;
    }

    public void setProvider(DatabaseProvider provider) {
        this.provider = provider;
    }
}
```

YAML:

```yaml
app:
  database:
    provider: postgresql   # case-insensitive matching
```

### 1.9 Random Values


Spring Boot provides a `RandomValuePropertySource` for generating random values:

```properties
# Random integer
app.secret.id=${random.int}
app.secret.range=${random.int(1000,9999)}
app.secret.max=${random.int(10000)}
app.secret.long=${random.long}

# Random UUID
app.secret.uuid=${random.uuid}

# Random string
app.secret.token=${random.value}
app.secret.alphanumeric=${random.value(32)}  # 32 characters
```

```java
@Component
@ConfigurationProperties(prefix = "app.secret")
public class SecretProperties {
    private int id;
    private int range;
    private int max;
    private long longValue;
    private UUID uuid;
    private String token;
    private String alphanumeric;

    // getters and setters
}
```

### 1.10 External Configuration Sources


#### 1.10.1 Command-Line Arguments

```shell
java -jar app.jar --server.port=9090 --app.theme.color=red --logging.level.com.example=DEBUG
```

By default, Spring Boot converts `--server.port=9090` into a property. Use `SpringApplication.setAddCommandLineProperties(false)` to disable this.

#### 1.10.2 Environment Variables

On Unix-like systems:

```shell
export SERVER_PORT=9090
export APP_THEME_COLOR=red
export SPRING_DATASOURCE_URL=jdbc:postgresql://prod-db:5432/mydb
```

On Windows:

```cmd
set SERVER_PORT=9090
set APP_THEME_COLOR=red
```

Spring Boot's relaxed binding maps `APP_THEME_COLOR` to property `app.theme.color`.

#### 1.10.3 JNDI Properties

```xml
<!-- In web.xml or embedded container config -->
<env-entry>
    <env-entry-name>java:comp/env/app/database/maxPoolSize</env-entry-name>
    <env-entry-type>java.lang.Integer</env-entry-type>
    <env-entry-value>20</env-entry-value>
</env-entry>
```

JNDI properties can be accessed via `Environment`:

```java
@Component
public class JndiConfigReader {

    @Autowired
    private Environment env;

    public void printConfig() {
        Integer maxPoolSize = env.getProperty("app.database.maxPoolSize", Integer.class, 10);
        System.out.println("Max pool size from JNDI/ENV: " + maxPoolSize);
    }
}
```

#### 1.10.4 SPRING_APPLICATION_JSON

Pass configuration as a JSON string:

```shell
java -jar app.jar -Dspring.application.json='{"server":{"port":9090},"app":{"theme":{"color":"red"}}}'
```

Or as environment variable:

```shell
SPRING_APPLICATION_JSON='{"server":{"port":9090}}' java -jar app.jar
```

### 1.11 Config Data Locations and Ordering


Spring Boot 2.4+ introduced `spring.config.import` for explicitly importing configuration files.

#### 1.11.1 Standard Search Locations

Spring Boot searches for `application.properties`/`application.yml` in these locations (in order):

1. `file:./config/`  (classpath root's `config/` subdirectory)
2. `file:./config/*/` (subdirectories of `config/`)
3. `file:./` (classpath root)
4. `classpath:config/`
5. `classpath:/` (classpath root)

This ordering means an `application.yml` in `./config/` (file system) overrides one in `classpath:/` (JAR).

#### 1.11.2 spring.config.name

Change the config file name:

```properties
spring.config.name=myapp-config
```

This will look for `myapp-config.properties` instead of `application.properties`.

#### 1.11.3 spring.config.location

Override the search path entirely:

```shell
java -jar app.jar --spring.config.location=/etc/myapp/config.yml
```

Multiple locations:

```shell
java -jar app.jar --spring.config.location=optional:/etc/myapp/,classpath:/config/
```

The `optional:` prefix means Spring Boot won't fail if the file doesn't exist.

#### 1.11.4 spring.config.additional-location

Add locations to the default search path:

```shell
java -jar app.jar --spring.config.additional-location=/etc/external/
```

Files in additional locations override files in standard locations.

#### 1.11.5 spring.config.import

In Spring Boot 2.4+, `spring.config.import` provides fine-grained control:

```yaml
# application.yml
spring:
  application:
    name: myapp
  config:
    import:
      - classpath:common.yml
      - classpath:db-config.yml
      - optional:file:./override.yml
      - configtree:/etc/myapp/config/
      - classpath:${app.environment:-dev}-config.yml
```

**Import types**:

| Prefix | Behavior |
|--------|----------|
| (none) | Import from classpath or filesystem; fail if missing |
| `optional:` | Do not fail if file is missing |
| `configtree:` | Import from a Kubernetes-style config tree directory |
| `classpath:` | Load from classpath |
| `file:` | Load from filesystem |

#### 1.11.6 Import Ordering

Imports are processed in declaration order. Properties from later imports override earlier ones:

```yaml
spring:
  config:
    import:
      - classpath:base.yml           # Lowest priority among imports
      - classpath:environment.yml    # Overrides base.yml
      - file:./local-override.yml    # Overrides all above
```

The overall ordering from lowest to highest priority:
1. Default properties
2. `@PropertySource`
3. Imported config data (`spring.config.import`)
4. `application.yml` (inside JAR)
5. `application.yml` (outside JAR)
6. Profile-specific files
7. `spring.config.additional-location`
8. `spring.config.location`
9. Command-line arguments
10. Environment variables

### 1.12 Config Tree (Kubernetes)


Kubernetes ConfigMaps can be mounted as volumes where each key becomes a file:

```
/etc/config/
├── app.cache.enabled
├── app.cache.provider
├── app.database.max-pool-size
└── app.database.url
```

Spring Boot's config tree support reads these files and maps the file path to property keys:

```yaml
spring:
  config:
    import: "configtree:/etc/config/"
```

Each file's content becomes the value of the property implied by its filename path. The file `app.database.url` with content `jdbc:postgresql://prod:5432/db` sets property `app.database.url` to that value.

**Automatic reloading in Kubernetes**: When the ConfigMap is updated, Kubernetes updates the files. Spring Boot can be configured to reload on file changes:

```yaml
spring:
  config:
    import: "configtree:/etc/config/"
  cloud:
    kubernetes:
      reload:
        enabled: true
        mode: polling
        period: 5000
```

### 1.13 Validation of Configuration Properties


Apply JSR-303/Jakarta Bean Validation annotations:

```java
import jakarta.validation.constraints.*;

@Component
@Validated
@ConfigurationProperties(prefix = "app.mail")
public class ValidatedMailProperties {

    @NotBlank(message = "SMTP host must not be blank")
    private String host;

    @Min(value = 1, message = "Port must be positive")
    @Max(value = 65535, message = "Port must be <= 65535")
    private int port = 25;

    @Email(message = "From address must be valid email")
    @NotBlank
    private String from;

    @NotEmpty
    private List<@Email String> bccRecipients;

    @Pattern(regexp = "^(STARTTLS|SSL|NONE)$")
    private String encryption = "STARTTLS";

    @Positive
    private long timeoutMs = 5000;

    @NotNull
    private Credentials credentials;

    // getters and setters

    public static class Credentials {
        @NotBlank
        private String username;

        @NotBlank
        private String password;

        // getters and setters
    }
}
```

Spring Boot will fail to start with a descriptive error if validation fails:

```
Binding to target org.springframework.boot.context.properties.bind.BindException:
  Failed to bind properties under 'app.mail' to com.example.config.ValidatedMailProperties:

    Property: app.mail.host
    Value: null
    Reason: SMTP host must not be blank

    Property: app.mail.port
    Value: 0
    Reason: Port must be positive
```

### 1.14 Duration and DataSize Conversion


Spring Boot automatically converts properties to `java.time.Duration` and `org.springframework.util.unit.DataSize`.

#### Duration Conversion

```java
@Component
@ConfigurationProperties(prefix = "app.timeout")
public class TimeoutProperties {

    private Duration connect;
    private Duration read;
    private Duration write;
    private Duration cacheTtl;

    // getters and setters
}
```

```yaml
app:
  timeout:
    connect: 5s          # 5 seconds
    read: 30s             # 30 seconds
    write: 2m             # 2 minutes
    cache-ttl: 1h         # 1 hour

    # Other valid formats:
    # 10ns   → 10 nanoseconds
    # 5ms    → 5 milliseconds
    # 5000ms → 5000 milliseconds
    # 10s    → 10 seconds
    # 5m     → 5 minutes
    # 2h     → 2 hours
    # 1d     → 1 day
    # PT5S   → ISO-8601 format (5 seconds)
```

You can also use long values with a default unit:

```java
@DurationUnit(ChronoUnit.SECONDS)
private Duration connect;
```

Then `connect: 30` would be interpreted as 30 seconds.

#### DataSize Conversion

```java
@Component
@ConfigurationProperties(prefix = "app.buffer")
public class BufferProperties {

    private DataSize maxSize;
    private DataSize chunkSize;
    private DataSize memoryLimit;

    // getters and setters
}
```

```yaml
app:
  buffer:
    max-size: 100MB      # 100 megabytes
    chunk-size: 64KB     # 64 kilobytes
    memory-limit: 2GB    # 2 gigabytes

    # Valid suffixes:
    # B     → bytes
    # KB    → kilobytes (1000-based)
    # MB    → megabytes (1000-based)
    # GB    → gigabytes (1000-based)
    # TB    → terabytes (1000-based)
```

### 1.15 Configuration Metadata


Generate IDE autocompletion for custom properties. Add the `spring-boot-configuration-processor` dependency:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <optional>true</optional>
</dependency>
```

When you compile, the annotation processor generates `META-INF/spring-configuration-metadata.json` with property descriptions, types, and default values. For additional documentation:

```java
@Component
@ConfigurationProperties(prefix = "app.mail")
public class DocumentedMailProperties {

    /**
     * SMTP server hostname.
     */
    private String host;

    /**
     * SMTP server port. Defaults to 587 for STARTTLS.
     */
    private int port = 587;

    /**
     * Email address used as the "From" field.
     */
    private String from;

    /**
     * Whether to use STARTTLS encryption.
     */
    private boolean starttls = true;

    /**
     * Maximum number of retry attempts on failure.
     */
    private int maxRetries = 3;

    // getters and setters
}
```

The Javadoc comments become descriptions in the generated metadata.

### 1.16 Complete Application Configuration Example


Let's build a complete, real-world example tying together all the concepts.

**application.yml**:

```yaml
spring:
  application:
    name: order-service
  profiles:
    active: ${ACTIVE_PROFILES:default}

  config:
    import:
      - optional:classpath:build-info.yml
      - optional:file:./secrets.yml

  datasource:
    url: ${DATABASE_URL}
    username: ${DATABASE_USER}
    password: ${DATABASE_PASSWORD}
    hikari:
      maximum-pool-size: ${HIKARI_MAX_POOL:20}
      minimum-idle: 5
      idle-timeout: 300000
      connection-timeout: 20000

  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
    properties:
      hibernate:
        format_sql: true
        jdbc:
          batch_size: 50

  jackson:
    serialization:
      write-dates-as-timestamps: false
    deserialization:
      fail-on-unknown-properties: false

server:
  port: ${PORT:8080}
  compression:
    enabled: true
    mime-types: text/html,text/css,application/json
    min-response-size: 2048
  tomcat:
    max-connections: 10000
    threads:
      max: 200
      min-spare: 20

app:
  order:
    processing-timeout: 30s
    max-items-per-order: 50
    payment-grace-period: 5m
    statuses:
      - PENDING
      - CONFIRMED
      - PROCESSING
      - SHIPPED
      - DELIVERED
      - CANCELLED
    notification:
      enabled: true
      channels: [EMAIL, SMS, PUSH]

  cache:
    provider: redis
    default-ttl: 10m
    max-size: 500MB
    redis:
      host: ${REDIS_HOST:localhost}
      port: ${REDIS_PORT:6379}
      password: ${REDIS_PASSWORD:}

  monitoring:
    enabled: true
    alert-email: ops@example.com
    thresholds:
      error-rate: 0.05
      latency-p99: 500ms
      cpu-warning: 80
      memory-warning: 85

  features:
    new-checkout: ${FEATURE_NEW_CHECKOUT:false}
    dark-mode: true
    beta-users: ${BETA_USERS:}

---
spring:
  config:
    activate:
      on-profile: dev

server:
  port: 8081

app:
  order:
    processing-timeout: 5s
    max-items-per-order: 100
    notification:
      enabled: false

logging:
  level:
    com.example: DEBUG
    org.springframework.web: DEBUG

---
spring:
  config:
    activate:
      on-profile: prod

server:
  port: 80

app:
  order:
    processing-timeout: 60s
    max-items-per-order: 30

logging:
  level:
    com.example: WARN
```

**OrderProperties.java**:

```java
package com.example.orderservice.config;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

@Validated
@Component
@ConfigurationProperties(prefix = "app.order")
public class OrderProperties {

    @Positive
    private Duration processingTimeout;

    @Max(100)
    private int maxItemsPerOrder;

    @Positive
    private Duration paymentGracePeriod;

    @NotEmpty
    private List<@NotBlank String> statuses = new ArrayList<>();

    @Valid
    @NotNull
    private Notification notification = new Notification();

    public Duration getProcessingTimeout() {
        return processingTimeout;
    }

    public void setProcessingTimeout(Duration processingTimeout) {
        this.processingTimeout = processingTimeout;
    }

    public int getMaxItemsPerOrder() {
        return maxItemsPerOrder;
    }

    public void setMaxItemsPerOrder(int maxItemsPerOrder) {
        this.maxItemsPerOrder = maxItemsPerOrder;
    }

    public Duration getPaymentGracePeriod() {
        return paymentGracePeriod;
    }

    public void setPaymentGracePeriod(Duration paymentGracePeriod) {
        this.paymentGracePeriod = paymentGracePeriod;
    }

    public List<String> getStatuses() {
        return statuses;
    }

    public void setStatuses(List<String> statuses) {
        this.statuses = statuses;
    }

    public Notification getNotification() {
        return notification;
    }

    public void setNotification(Notification notification) {
        this.notification = notification;
    }

    public static class Notification {
        private boolean enabled;
        private List<String> channels = new ArrayList<>();

        public boolean isEnabled() {
            return enabled;
        }

        public void setEnabled(boolean enabled) {
            this.enabled = enabled;
        }

        public List<String> getChannels() {
            return channels;
        }

        public void setChannels(List<String> channels) {
            this.channels = channels;
        }
    }
}
```

**ConfigValidationRunner.java** → a component that validates configuration at startup:

```java
package com.example.orderservice.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ConfigValidationRunner implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(ConfigValidationRunner.class);

    private final AppProperties appProperties;
    private final OrderProperties orderProperties;

    public ConfigValidationRunner(AppProperties appProperties, OrderProperties orderProperties) {
        this.appProperties = appProperties;
        this.orderProperties = orderProperties;
    }

    @Override
    public void run(String... args) {
        log.info("=== Configuration Report ===");
        log.info("Application Name: {}", appProperties.getAppName());
        log.info("Active Profiles: {}", String.join(", ", appProperties.getActiveProfiles()));
        log.info("Order timeout: {}", orderProperties.getProcessingTimeout());
        log.info("Max items per order: {}", orderProperties.getMaxItemsPerOrder());
        log.info("Payment grace period: {}", orderProperties.getPaymentGracePeriod());
        log.info("Notification enabled: {}", orderProperties.getNotification().isEnabled());
        log.info("Notification channels: {}", orderProperties.getNotification().getChannels());
        log.info("Cache TTL: {}", appProperties.getCache().getDefaultTtl());
        log.info("Cache max size: {}", appProperties.getCache().getMaxSize());
        log.info("==============================");

        if (orderProperties.getProcessingTimeout().compareTo(Duration.ofSeconds(5)) < 0) {
            log.warn("Processing timeout is very low: {}", orderProperties.getProcessingTimeout());
        }
    }
}
```

### 1.17 Programmatic Environment Access


Sometimes you need to access configuration programmatically:

```java
@Component
public class EnvironmentInspector {

    @Autowired
    private Environment env;

    public void inspect() {
        // Get with default
        String themeColor = env.getProperty("app.theme.color", "blue");

        // Get with type conversion
        int port = env.getProperty("server.port", Integer.class, 8080);

        // Get required (throws IllegalStateException if missing)
        String dbUrl = env.getRequiredProperty("spring.datasource.url");

        // Check if property exists
        boolean hasJwt = env.containsProperty("app.security.jwt.secret");

        // Profile checks
        boolean isDev = env.acceptsProfiles(Profiles.of("dev"));
        boolean isProdOrStaging = env.acceptsProfiles(Profiles.of("prod", "staging"));

        // Get array of active profiles
        String[] activeProfiles = env.getActiveProfiles();
        String[] defaultProfiles = env.getDefaultProfiles();
    }
}
```

### 1.18 Property Placeholders


Properties can reference other properties:

```properties
app.name=My Application
app.description=Welcome to ${app.name}
app.homepage=https://${app.domain}/
app.domain=example.com
```

With default values:

```properties
app.database.name=${DB_NAME:mydb}
app.port=${PORT:8080}
app.host=${HOST:localhost}
app.url=jdbc:postgresql://${app.host}:${app.port}/${app.database.name}
```

Nested placeholders are resolved recursively.

### 1.19 Encryption of Configuration Values


For sensitive data, use Jasypt with Spring Boot:

```xml
<dependency>
    <groupId>com.github.ulisesbocchio</groupId>
    <artifactId>jasypt-spring-boot-starter</artifactId>
    <version>3.0.5</version>
</dependency>
```

```properties
# application.yml (with Jasypt)
app:
  database:
    password: ENC(encryptedPasswordHere)
```

The password is decrypted at runtime.

### 1.20 Lazy Binding with @ConfigurationPropertiesScan


Instead of using `@Component` on every properties class, scan packages:

```java
@SpringBootApplication
@ConfigurationPropertiesScan("com.example.orderservice.config")
public class OrderServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
}
```

Now properties classes only need `@ConfigurationProperties` with the prefix:

```java
@ConfigurationProperties(prefix = "app.cache")
public class CacheProperties {
    // ...
}
```

### 1.21 Custom PropertySource


Create a custom property source for loading from a custom source (e.g., a database):

```java
package com.example.orderservice.config;

import org.springframework.core.env.PropertySource;

public class DatabasePropertySource extends PropertySource<String> {

    private final DatabaseConfigRepository repository;

    public DatabasePropertySource(String name, DatabaseConfigRepository repository) {
        super(name);
        this.repository = repository;
    }

    @Override
    public Object getProperty(String name) {
        // Look up the property from a database table
        return repository.findValueByName(name)
                .orElse(null);
    }
}
```

Register it in a `ConfigurableEnvironment`:

```java
@Component
public class DatabasePropertySourceConfig implements ApplicationContextInitializer<ConfigurableApplicationContext> {

    @Override
    public void initialize(ConfigurableApplicationContext context) {
        ConfigurableEnvironment environment = context.getEnvironment();
        DatabaseConfigRepository repository = context.getBean(DatabaseConfigRepository.class);
        DatabasePropertySource propertySource = new DatabasePropertySource("database", repository);
        environment.getPropertySources().addLast(propertySource);
    }
}
```

### 1.22 Testing with Custom Configuration


```java
@SpringBootTest
@ActiveProfiles("test")
class OrderPropertiesTest {

    @Autowired
    private OrderProperties orderProperties;

    @Test
    void shouldLoadProperties() {
        assertThat(orderProperties.getProcessingTimeout()).isEqualTo(Duration.ofSeconds(5));
        assertThat(orderProperties.getMaxItemsPerOrder()).isEqualTo(100);
        assertThat(orderProperties.getNotification().isEnabled()).isFalse();
    }
}
```

Using `@TestPropertySource` for test-specific overrides:

```java
@SpringBootTest
@TestPropertySource(properties = {
    "app.order.processing-timeout=10s",
    "app.order.notification.enabled=true"
})
class OrderServiceTest {

    @Autowired
    private OrderProperties orderProperties;

    @Test
    void shouldUseTestOverrides() {
        assertThat(orderProperties.getProcessingTimeout()).isEqualTo(Duration.ofSeconds(10));
        assertThat(orderProperties.getNotification().isEnabled()).isTrue();
    }
}
```

### 1.23 Building Config Hierarchy in Large Projects


For microservices or multi-module projects, organize configuration as:

```
config/
├── application.yml                  # shared base config
├── application-dev.yml              # shared dev overrides
├── application-prod.yml             # shared prod overrides
├── service-order/
│   ├── application.yml              # order-service defaults
│   └── application-prod.yml         # order-service prod overrides
└── service-payment/
    ├── application.yml              # payment-service defaults
    └── application-prod.yml         # payment-service prod overrides
```

Launch with:

```shell
java -jar order-service.jar \
  --spring.config.additional-location=config/ \
  --spring.config.location=config/service-order/
```

### 1.24 Spring Cloud Config Integration


For centralized configuration in microservices, integrate with Spring Cloud Config:

```yaml
# bootstrap.yml (or spring.config.import in 2020+)
spring:
  application:
    name: order-service
  cloud:
    config:
      uri: http://config-server:8888
      fail-fast: true
      retry:
        initial-interval: 1000
        max-attempts: 5
        multiplier: 1.5
```

```yaml
# Using spring.config.import in 2024+
spring:
  config:
    import: configserver:http://config-server:8888
```

### 1.25 Best Practices Summary


1. **Prefer `@ConfigurationProperties` over `@Value`** for groups of related properties.
2. **Use constructor binding** for immutable configuration objects.
3. **Always validate** configuration at startup with Bean Validation.
4. **Use kebab-case** in YAML and properties files for consistency.
5. **Externalize secrets** via environment variables, never hardcode them.
6. **Use `optional:`** in `spring.config.import` when the file might not exist.
7. **Keep profile-specific files minimal** → only the values that differ.
8. **Use relaxed binding** to maintain clean env var names.
9. **Generate metadata** with the configuration processor for IDE support.
10. **Document properties** with meaningful Javadoc for generated metadata.

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| application.properties | Flat key=value format | Simple, familiar to Java devs | Simple apps, basic configuration |
| application.yml | Hierarchical YAML format | Supports structured data, multi-doc profiles | Complex config with nesting |
| @ConfigurationProperties | Type-safe binding | IDE support, metadata generation | Configuration POJOs |
| @Value | Direct property injection | SpEL support for expressions | Simple single-value injection |
| Environment Abstraction | Unified property source access | Profile-aware, ordered resolution | Runtime environment information |

## Quick Reference

| Property Source | Order | Override Mechanism |
|----------------|-------|-------------------|
| Command line args | Highest | --server.port=9090 |
| JNDI attributes | 2nd | Environment properties |
| System properties | 3rd | -Dserver.port=9090 |
| OS environment variables | 4th | SERVER_PORT=9090 |
| application-{profile}.properties | 5th | Profile-specific overrides |
| application.properties | 6th | Base application config |
| @PropertySource | 7th | Class-level source annotation |

## Cross-Application Matrix

| Configuration Type | Development | QA/Staging | Production |
|-------------------|-------------|------------|------------|
| Database | H2 in-memory | Test database | RDS connection pool |
| Logging | DEBUG | INFO | WARN |
| Server Port | 8080 | 8080 | 80/443 |
| Endpoints | All exposed | Restricted | Minimal |

## Chapter Quiz

1. Which property binding form has the highest precedence?
   - A) application.properties
   - B) OS environment variables
   - C) Command line arguments
   - D) application-{profile}.properties

<details>
<summary>Answer&lt;/summary&gt;
**C) Command line arguments.** CLI args override all other property sources except those with explicitly higher priority.
</details>

2. What annotation enables type-safe configuration properties?
   - A) @Value
   - B) @PropertySource
   - C) @ConfigurationProperties
   - D) @EnableAutoConfiguration

<details>
<summary>Answer&lt;/summary&gt;
**C) @ConfigurationProperties.** This annotation binds external properties to a POJO with full IDE support.
</details>

3. How does Spring Boot handle relaxed binding for property names?
   - A) Exact case-sensitive match
   - B) Case-insensitive, hyphens/camelCase/underscores match
   - C) Only exact camelCase matches
   - D) Regular expression matching

<details>
<summary>Answer&lt;/summary&gt;
**B) Case-insensitive, hyphens/camelCase/underscores match.** Relaxed binding allows `my-property`, `myProperty`, `my_property` to bind to the same field.
</details>

---

## Summary

Spring Boot's externalized configuration is one of its most powerful features. You learned the complete configuration landscape:

- **File formats**: `application.properties` and `application.yml` with different trade-offs
- **Type-safe binding**: `@ConfigurationProperties` with constructor binding, nested objects, lists, and maps
- **Property injection**: `@Value` for simple values, `@PropertySource` for custom files
- **Profiles**: Profile-specific files, multi-document YAML, `@Profile` annotation
- **External sources**: Command-line arguments, environment variables, JNDI
- **Advanced features**: Relaxed binding, random values, validation, Duration/DataSize conversion
- **Config data API**: `spring.config.import`, location ordering, config tree for Kubernetes
- **Best practices**: Metadata generation, encryption, testing patterns

The key takeaway: externalized configuration keeps your code environment-agnostic. A single deployable artifact can behave differently in dev, staging, and production with zero code changes.

---

## Exercises

### Exercise 1: Type-Safe Properties

Create a `@ConfigurationProperties` class called `ApplicationProperties` with prefix `app` that binds:

- `app.name` → String
- `app.version` → String  
- `app.description` → String with default "No description"
- `app.contact.email` → String with `@Email` validation
- `app.features` → `Map<String, Boolean>` with default for "analytics" = true, "reporting" = true
- `app.allowed-origins` → `List<String>`

Write a YAML file with sample values and a `CommandLineRunner` that prints all properties at startup.

### Exercise 2: Profile-Based Configuration

Create three YAML profiles → `dev`, `staging`, `prod` → with:

- `dev`: Server port 8081, logging level DEBUG, mock database enabled
- `staging`: Server port 8082, logging level INFO, staging database URL
- `prod`: Server port 80, logging level WARN, production database URL with encrypted password

Use both multi-document YAML (single file) and separate files. Write a REST controller that exposes the current profile and port.

### Exercise 3: Config Tree for Kubernetes

Write a `ConfigTreeApplication` that imports config from `/etc/app-config/`. The config tree has files:

- `app.theme.color` containing "dark-amber"
- `app.theme.font-size` containing "16"
- `app.features.new-dashboard` containing "true"
- `app.features.experimental` containing "false"

Create `ThemeProperties` and `FeatureProperties` with `@ConfigurationProperties` and verify binding with a `@PostConstruct` method.

### Exercise 4: Property Validation

Create a properties class `DatabaseProperties` with prefix `app.database` and these validation rules:

- `url`: must not be blank, must start with "jdbc:"
- `username`: must not be blank
- `password`: must not be blank  
- `pool-size`: must be between 5 and 100 (default 10)
- `connection-timeout`: must be positive Duration (default 30s)
- `max-lifetime`: must be positive Duration (default 30m)
- `cache-prepared-statements`: boolean (default true)
- `prepared-statement-cache-size`: must be between 1 and 100 (default 25)

Write a test that verifies startup fails with invalid configuration.

### Exercise 5: Multi-Source Configuration

Build a Spring Boot application that loads configuration from these sources:

1. A file `config/database.properties` on the filesystem (containing JDBC URL, username, password)
2. Environment variable `CACHE_TTL` mapped to `app.cache.ttl-seconds`
3. Command-line argument `--app.server.node-id`
4. A custom `@PropertySource` loading `labels.properties` from classpath

Create an endpoint `/api/config/report` that returns a JSON object showing which value came from which source.

### Exercise 6: Duration and DataSize

Create a properties class `MultimediaProperties` with prefix `app.media`:

- `max-upload-size`: DataSize
- `max-video-duration`: Duration
- `thumbnail-size`: DataSize with default 150KB
- `compression-timeout`: Duration with default 30s
- `allowed-formats`: List&lt;String&gt; with default ["jpg", "png", "mp4"]

Bind and print all values. Ensure invalid values cause startup failure.

### Exercise 7: Random Values

Create a `SecretProperties` class using random values for:

- A unique installation ID (random long)
- An API key (32-character random alphanumeric)
- A port number between 8000 and 8999
- A UUID

Print these at startup. Verify they change on each restart.

### Exercise 8: Config Location Ordering

Create a project with:

- Default property `app.message=from-jar` in `application.yml` inside the JAR
- An `application.yml` outside the JAR in `./config/` with `app.message=from-config-dir`
- A profile `dev` override `app.message=from-dev-profile`

Launch three ways and verify the message value:
1. Without any flags (should be `from-config-dir` if `./config/` exists)
2. With `--spring.config.location=classpath:/` (should be `from-jar`)
3. With `--spring.profiles.active=dev` (should be `from-dev-profile` if that's highest priority)

Document the precedence chain.

### Exercise 9: External Configuration

Write a `ConfigReportEndpoint` using `@ConfigurationProperties` that reads `app.config.file` (a path to a properties file), loads that file at runtime using `Properties.load()`, and returns all key-value pairs as a JSON map at `/api/config/external`. Handle the case where the file doesn't exist gracefully.

### Exercise 10: Spring Config Import

Create three configuration files:

1. `base-app.yml` → defines `app.name`, `app.cache.enabled=true`
2. `extended-app.yml` → imports `base-app.yml`, defines `app.version`, `app.cache.provider=redis`  
3. Main `application.yml` → imports `extended-app.yml`, defines `app.description`

Use `spring.config.import` to chain them. Create a properties class that reads all these values and verify they're properly merged.
