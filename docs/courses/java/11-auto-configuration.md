# Auto-Configuration & Starters

> **Previous:** [Dependency Injection & IoC Container](./10-di-container.md) | **Next:** [Application Properties & Configuration](./12-configuration.md)

Auto-configuration is Spring Boot's killer feature. It is the mechanism that transforms a bare Spring Framework application ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â where you must manually declare every bean, every component scan, every property source ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â into a Spring Boot application that "just works." When you add `spring-boot-starter-web` to your dependencies, Spring Boot automatically configures a `DispatcherServlet`, an embedded Tomcat server, a Jackson `ObjectMapper`, a multipart resolver, error handling, and dozens of other beans. You write zero configuration for any of them.

The key insight is that auto-configuration is **opinionated but overridable**. Spring Boot makes reasonable default choices (Tomcat over Jetty, Jackson over Gson, Logback over Log4j2) but provides clean escape hatches: exclude an auto-configuration class, supply your own bean (which takes priority), or flip a property. This philosophy ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â "start with sensible defaults, customize only what you need" ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â is why Spring Boot dominates enterprise Java.

This chapter covers the complete auto-configuration machinery: how `@EnableAutoConfiguration` works, the `@Conditional` family of annotations that gates auto-configuration beans, how auto-configuration classes are discovered and ordered, how to build custom starters, how configuration properties bind, how metadata is generated, and how to extend the infrastructure with custom failure analysis and environment post-processing.

Every example in this chapter is complete and compilable. Create a Maven project with `spring-boot-starter` and `spring-boot-starter-web` as dependencies, or use any existing Spring Boot 3.x project.

---

## Learning Objectives

By the end of this chapter, you will be able to:

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/java/11-auto-configuration/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/11-auto-configuration/hero.svg" alt="Chapter Banner: Auto-Configuration & Starters" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/11-auto-configuration/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/11-auto-configuration/handwritten-notes.svg" alt="Handwritten Notes: Auto-Configuration & Starters" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/11-auto-configuration/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/11-auto-configuration/sticky-notes.svg" alt="Sticky Notes: Auto-Configuration & Starters" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/11-auto-configuration/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/11-auto-configuration/visual-explanation.svg" alt="Visual Explanation: Auto-Configuration & Starters" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/11-auto-configuration/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/11-auto-configuration/architecture.svg" alt="Architecture: Auto-Configuration & Starters" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/11-auto-configuration/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/11-auto-configuration/workflow.svg" alt="Workflow: Auto-Configuration & Starters" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/11-auto-configuration/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/11-auto-configuration/mindmap.svg" alt="Mind Map: Auto-Configuration & Starters" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/11-auto-configuration/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/11-auto-configuration/comparison.svg" alt="Comparison: Auto-Configuration & Starters" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/11-auto-configuration/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/11-auto-configuration/cheatsheet.svg" alt="Cheat Sheet: Auto-Configuration & Starters" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/11-auto-configuration/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/11-auto-configuration/interview-quiz.svg" alt="Quiz Card: Auto-Configuration & Starters" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/11-auto-configuration/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/11-auto-configuration/social-card.svg" alt="Social Card: Auto-Configuration & Starters" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


- Explain how `@EnableAutoConfiguration` delegates to `AutoConfigurationImportSelector` and loads auto-configuration classes from `spring.factories` and `AutoConfiguration.imports`
- Use every member of the `@Conditional` family to gate bean definitions on classpath presence, bean presence, property values, resource availability, expression evaluation, cloud platform, JNDI, Java version, single-candidate beans, and war deployment
- Recognize the major auto-configuration classes ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â `DataSourceAutoConfiguration`, `JpaRepositoriesAutoConfiguration`, `SecurityAutoConfiguration` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â and understand their conditional guards
- Distinguish `@AutoConfiguration` from `@Configuration` and understand the Spring Boot 3.x import mechanism
- Configure auto-configuration ordering with `@AutoConfigureBefore`, `@AutoConfigureAfter`, and `@AutoConfigureOrder`
- Build a complete custom Spring Boot starter with auto-configuration module, starter module, `@ConfigurationProperties`, conditionals, and metadata
- Exclude unwanted auto-configuration classes using both `exclude` and `excludeName`
- Bind configuration properties with `@ConfigurationProperties(prefix)`, `@EnableConfigurationProperties`, `@ConstructorBinding`, relaxed binding, `Duration` and `DataSize` conversion, and `@NestedConfigurationProperty`
- Generate configuration metadata with `spring-boot-configuration-processor` and understand the generated JSON schema
- Implement a custom `FailureAnalyzer` and `FailureAnalysis`
- Implement a custom `EnvironmentPostProcessor` to inject property sources before bean creation

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| Auto-Configuration | @EnableAutoConfiguration loads from spring.factories/AutoConfiguration.imports | Opinionated defaults, easily overridable |
| @Conditional Family | Class/property/bean/resource conditions gate auto-config beans | Enables graceful fallback when dependencies are absent |
| Custom Starters | Auto-config module + starter POM + configuration properties | Encapsulate reusable infrastructure |
| Configuration Properties | @ConfigurationProperties with relaxed binding and metadata | Type-safe, IDE-friendly configuration |
| @AutoConfiguration | Spring Boot 3.x replaces @Configuration for auto-config classes | Dedicated annotation with ordering support |

## Chapter Roadmap

```mermaid
flowchart LR
    A[@EnableAutoConfiguration] --> B[@Conditional Family]
    B --> C[Auto-Configuration Classes]
    C --> D[Custom Starters]
    D --> E[Configuration Properties]
    E --> F[Metadata & Tooling]
    F --> G[Failure Analysis]
    G --> H[Environment Post-Processing]
```

> **Pro Tip:** When building a custom starter, publish it as a separate Maven module from your application. The auto-configuration module should have zero dependency on your application code.


---

## 1. @EnableAutoConfiguration ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â The Entry Point

![Spring Boot Auto-Configuration Flow](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/11-auto-configuration.png)

Every Spring Boot application class is annotated with `@SpringBootApplication`, which is a composed annotation that bundles three others:

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication is equivalent to:
// @Configuration + @EnableAutoConfiguration + @ComponentScan
@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

Decomposing `@SpringBootApplication`:

| Annotation | Purpose |
|-----------|---------|
| `@Configuration` | Marks the class as a source of bean definitions |
| `@EnableAutoConfiguration` | Activates Spring Boot's auto-configuration machinery |
| `@ComponentScan` | Enables component scanning in the package hierarchy |

### 1.1 @EnableAutoConfiguration Internals

<a href="../../../assets/images/diagrams/java/11-auto-configuration/1-1-enableautoconfiguration-internals-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/1-1-enableautoconfiguration-internals-handwritten.svg" alt="Handwritten: 1.1 @EnableAutoConfiguration Internals" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/1-1-enableautoconfiguration-internals-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/1-1-enableautoconfiguration-internals-diagram.svg" alt="Diagram: 1.1 @EnableAutoConfiguration Internals" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/1-1-enableautoconfiguration-internals-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/1-1-enableautoconfiguration-internals-sticky.svg" alt="Sticky Note: 1.1 @EnableAutoConfiguration Internals" width="30%">
</a>


The annotation itself is simple:

```java
package com.example.enableautoconfig;

import org.springframework.context.annotation.Import;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@Import(AutoConfigurationImportSelector.class)
public @interface EnableAutoConfiguration {

    // Exclude specific auto-configuration classes by class reference
    Class<?>[] exclude() default {};

    // Exclude specific auto-configuration classes by fully-qualified name
    String[] excludeName() default {};
}
```

The critical element is `@Import(AutoConfigurationImportSelector.class)`. `AutoConfigurationImportSelector` implements `ImportSelector`, which means Spring will call its `selectImports` method and process the returned class names as `@Configuration` classes.

### 1.2 AutoConfigurationImportSelector

<a href="../../../assets/images/diagrams/java/11-auto-configuration/1-2-autoconfigurationimportselector-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/1-2-autoconfigurationimportselector-handwritten.svg" alt="Handwritten: 1.2 AutoConfigurationImportSelector" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/1-2-autoconfigurationimportselector-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/1-2-autoconfigurationimportselector-diagram.svg" alt="Diagram: 1.2 AutoConfigurationImportSelector" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/1-2-autoconfigurationimportselector-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/1-2-autoconfigurationimportselector-sticky.svg" alt="Sticky Note: 1.2 AutoConfigurationImportSelector" width="30%">
</a>


`AutoConfigurationImportSelector` does the heavy lifting:

```java
package com.example.enableautoconfig;

import org.springframework.boot.autoconfigure.AutoConfigurationImportSelector;
import org.springframework.core.type.AnnotationMetadata;
import org.springframework.core.io.support.SpringFactoriesLoader;
import org.springframework.core.io.ResourceLoader;

import java.util.List;

public class SelectorDemo {

    // This is a simplified illustration of what AutoConfigurationImportSelector does.
    // The real implementation is much more complex (filtering, ordering, exclusion, etc.)

    public static void simulateSelection(ResourceLoader resourceLoader, ClassLoader classLoader) {
        // In Spring Boot 3.x the primary source is META-INF/spring/AutoConfiguration.imports
        // In Spring Boot 2.x it was META-INF/spring.factories under the key:
        //   org.springframework.boot.autoconfigure.EnableAutoConfiguration

        // Load auto-configuration class names from all AutoConfiguration.imports files
        // on the classpath using SpringFactoriesLoader
        List<String> autoConfigClasses = SpringFactoriesLoader.loadFactoryNames(
                AutoConfigurationImportSelector.class,
                classLoader
        );

        System.out.println("Loaded " + autoConfigClasses.size() + " auto-configuration candidates:");
        autoConfigClasses.stream()
                .limit(10)
                .forEach(name -> System.out.println("  - " + name));
    }

    public static void main(String[] args) {
        System.out.println("AutoConfigurationImportSelector simulation:");
        System.out.println("(Run within a Spring Boot application to see actual results)");
    }
}
```

When `selectImports` is called, the selector:

1. Loads all entries for `org.springframework.boot.autoconfigure.EnableAutoConfiguration` from `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` (Spring Boot 3.x) or `META-INF/spring.factories` (Spring Boot 2.x).
2. Applies filtering based on `@Conditional` annotations on each candidate class.
3. Applies ordering via `@AutoConfigureBefore`, `@AutoConfigureAfter`, and `@AutoConfigureOrder`.
4. Applies any exclusions from `@SpringBootApplication(exclude = ...)` or `spring.autoconfigure.exclude`.
5. Returns the filtered, ordered, excluded list to Spring's `@Import` processing.

The result is that only the auto-configuration classes whose conditions are met are actually loaded and processed.

### 1.3 Which Auto-Configuration Classes Are Loaded?

<a href="../../../assets/images/diagrams/java/11-auto-configuration/1-3-which-auto-configuration-classes-are-loaded-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/1-3-which-auto-configuration-classes-are-loaded-handwritten.svg" alt="Handwritten: 1.3 Which Auto-Configuration Classes Are Loaded?" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/1-3-which-auto-configuration-classes-are-loaded-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/1-3-which-auto-configuration-classes-are-loaded-diagram.svg" alt="Diagram: 1.3 Which Auto-Configuration Classes Are Loaded?" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/1-3-which-auto-configuration-classes-are-loaded-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/1-3-which-auto-configuration-classes-are-loaded-sticky.svg" alt="Sticky Note: 1.3 Which Auto-Configuration Classes Are Loaded?" width="30%">
</a>


You can inspect the auto-configuration report at runtime:

```java
package com.example.enableautoconfig;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfigurationImportEvent;
import org.springframework.boot.autoconfigure.AutoConfigurationImportListener;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class AutoConfigReportApp {

    public static void main(String[] args) {
        SpringApplication.run(AutoConfigReportApp.class, args);
    }
}

@Component
class AutoConfigListener implements AutoConfigurationImportListener {

    @Override
    public void onAutoConfigurationImport(AutoConfigurationImportEvent event) {
        System.out.println("=== Auto-Configuration Import Report ===");
        System.out.println("Selected configurations (" + event.getSelectedConfigurations().size() + "):");
        event.getSelectedConfigurations().forEach(c -> System.out.println("  + " + c));

        System.out.println("\nExcluded configurations (" + event.getExclusions().size() + "):");
        event.getExclusions().forEach(c -> System.out.println("  - " + c));
    }
}
```

A more practical approach: set `debug=true` in `application.properties` (or use `--debug`) to print the auto-configuration report in the console.

```properties
# application.properties
debug=true
```

This produces a report that shows:
- **Positive matches**: auto-configuration classes that matched and were applied.
- **Negative matches**: auto-configuration classes that did **not** match (with the reason).
- **Exclusions**: classes that were explicitly excluded.
- **Unconditional classes**: classes with no conditional guards.

---

## 2. The @Conditional Family

Auto-configuration classes declare beans that should only exist under certain conditions. If a classpath library is absent, the beans that depend on it should not be created. If the user has already defined a `DataSource` bean, the auto-configured `DataSource` should back off. If a property is not set, the default value should apply.

These decisions are expressed with the `@Conditional` family of annotations, which are evaluated **before the bean definition is registered**, not at runtime.

### 2.1 @ConditionalOnClass and @ConditionalOnMissingClass

<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-1-conditionalonclass-and-conditionalonmissingclass-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-1-conditionalonclass-and-conditionalonmissingclass-handwritten.svg" alt="Handwritten: 2.1 @ConditionalOnClass and @ConditionalOnMissingClass" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-1-conditionalonclass-and-conditionalonmissingclass-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-1-conditionalonclass-and-conditionalonmissingclass-diagram.svg" alt="Diagram: 2.1 @ConditionalOnClass and @ConditionalOnMissingClass" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-1-conditionalonclass-and-conditionalonmissingclass-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-1-conditionalonclass-and-conditionalonmissingclass-sticky.svg" alt="Sticky Note: 2.1 @ConditionalOnClass and @ConditionalOnMissingClass" width="30%">
</a>


`@ConditionalOnClass` activates a configuration only when the specified classes are on the classpath. `@ConditionalOnMissingClass` is the inverse.

```java
package com.example.conditionals;

import com.example.conditionals.lib.HazelcastClient;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingClass;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// This auto-configuration only loads if Hazelcast is on the classpath.
@AutoConfiguration
@ConditionalOnClass(HazelcastClient.class)
public class HazelcastAutoConfiguration {

    @Bean
    public HazelcastClient hazelcastClient() {
        return new HazelcastClient("localhost:5701");
    }
}

// Fallback: if Hazelcast is NOT on the classpath, use an in-memory map.
@AutoConfiguration
@ConditionalOnMissingClass("com.example.conditionals.lib.HazelcastClient")
public class SimpleCacheAutoConfiguration {

    @Bean
    public SimpleCache simpleCache() {
        return new SimpleCache();
    }
}

// Supporting classes
class SimpleCache {
    private final java.util.Map<String, Object> store = new java.util.concurrent.ConcurrentHashMap<>();

    public void put(String key, Object value) {
        store.put(key, value);
    }

    @SuppressWarnings("unchecked")
    public <T> T get(String key, Class<T> type) {
        return (T) store.get(key);
    }
}
```

The `name` attribute accepts fully-qualified class names as strings, which is useful when the class itself may not be available at compile time:

```java
package com.example.conditionals;

import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnClass(name = "org.postgresql.Driver")
public class PostgresConfiguration {

    // This configuration only loads if the PostgreSQL driver is on the classpath.
    // Using name = "..." means the code compiles even without the dependency.
}
```

### 2.2 @ConditionalOnBean and @ConditionalOnMissingBean

<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-2-conditionalonbean-and-conditionalonmissingbean-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-2-conditionalonbean-and-conditionalonmissingbean-handwritten.svg" alt="Handwritten: 2.2 @ConditionalOnBean and @ConditionalOnMissingBean" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-2-conditionalonbean-and-conditionalonmissingbean-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-2-conditionalonbean-and-conditionalonmissingbean-diagram.svg" alt="Diagram: 2.2 @ConditionalOnBean and @ConditionalOnMissingBean" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-2-conditionalonbean-and-conditionalonmissingbean-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-2-conditionalonbean-and-conditionalonmissingbean-sticky.svg" alt="Sticky Note: 2.2 @ConditionalOnBean and @ConditionalOnMissingBean" width="30%">
</a>


`@ConditionalOnBean` activates a configuration only when a bean of the specified type (or name) already exists in the context. `@ConditionalOnMissingBean` activates only when no such bean exists.

This is the primary **back-off** mechanism: auto-configuration classes declare their beans with `@ConditionalOnMissingBean`, so a user-defined bean with the same type takes priority.

```java
package com.example.conditionals;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingClass;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
@ConditionalOnClass(DataSource.class)
public class DataSourceConditionalDemo {

    // This bean is only created if no DataSource bean already exists.
    // If the user defines their own DataSource, this is skipped.
    @Bean
    @ConditionalOnMissingBean(DataSource.class)
    public DataSource autoConfiguredDataSource() {
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:h2:mem:testdb");
        ds.setUsername("sa");
        ds.setPassword("");
        return ds;
    }

    // This bean is only created if a DataSource bean is present.
    @Bean
    @ConditionalOnBean(DataSource.class)
    public DataSourceHealthIndicator dataSourceHealthIndicator(DataSource dataSource) {
        return new DataSourceHealthIndicator(dataSource);
    }
}

// Minimal health indicator class
class DataSourceHealthIndicator {
    private final DataSource dataSource;

    DataSourceHealthIndicator(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public boolean isHealthy() {
        try (var conn = dataSource.getConnection()) {
            return conn.isValid(5);
        } catch (Exception e) {
            return false;
        }
    }
}
```

Complex matching with `@ConditionalOnBean`:

```java
package com.example.conditionals;

import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;

@Configuration
@ConditionalOnBean(name = "transactionManager")
@ConditionalOnBean({DataSource.class, PlatformTransactionManager.class})
// Both DataSource and PlatformTransactionManager beans must exist
// AND a bean named "transactionManager" must exist
public class ComplexConditionalConfig {

}
```

### 2.3 @ConditionalOnProperty

<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-3-conditionalonproperty-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-3-conditionalonproperty-handwritten.svg" alt="Handwritten: 2.3 @ConditionalOnProperty" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-3-conditionalonproperty-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-3-conditionalonproperty-diagram.svg" alt="Diagram: 2.3 @ConditionalOnProperty" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-3-conditionalonproperty-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-3-conditionalonproperty-sticky.svg" alt="Sticky Note: 2.3 @ConditionalOnProperty" width="30%">
</a>


`@ConditionalOnProperty` activates a configuration based on the presence and value of a Spring Environment property.

```java
package com.example.conditionals;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PropertyConditionalConfig {

    @Bean
    @ConditionalOnProperty(
        name = "app.features.reporting.enabled",
        havingValue = "true",
        matchIfMissing = false
    )
    public ReportingService reportingService() {
        return new ReportingService();
    }

    @Bean
    @ConditionalOnProperty(
        name = "app.cache.type",
        havingValue = "redis",
        matchIfMissing = true
    )
    public CacheService cacheService() {
        return new CacheService();
    }

    // Using prefix attribute to group related properties
    @Bean
    @ConditionalOnProperty(
        prefix = "app.features.analytics",
        name = "enabled",
        havingValue = "true",
        matchIfMissing = false
    )
    public AnalyticsService analyticsService() {
        return new AnalyticsService();
    }
}

class ReportingService {
    public String generateReport() {
        return "Monthly Report: ...";
    }
}

class CacheService {
    public void cache(String key, Object value) {
        System.out.println("Caching: " + key);
    }
}

class AnalyticsService {
    public void track(String event) {
        System.out.println("Tracking: " + event);
    }
}
```

The attributes:

| Attribute | Description |
|-----------|-------------|
| `prefix` | Property prefix (e.g., `spring.datasource`) |
| `name` | Property name relative to prefix |
| `havingValue` | The value that must match for the condition to be true |
| `matchIfMissing` | Whether the condition should match if the property is absent (default: `false`) |

### 2.4 @ConditionalOnResource

<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-4-conditionalonresource-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-4-conditionalonresource-handwritten.svg" alt="Handwritten: 2.4 @ConditionalOnResource" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-4-conditionalonresource-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-4-conditionalonresource-diagram.svg" alt="Diagram: 2.4 @ConditionalOnResource" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-4-conditionalonresource-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-4-conditionalonresource-sticky.svg" alt="Sticky Note: 2.4 @ConditionalOnResource" width="30%">
</a>


`@ConditionalOnResource` activates a configuration only when a specific resource exists on the classpath.

```java
package com.example.conditionals;

import org.springframework.boot.autoconfigure.condition.ConditionalOnResource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnResource(resources = "classpath:logging-config.xml")
public class LoggingConfiguration {

    @Bean
    public CustomLogger customLogger() {
        return new CustomLogger();
    }
}

class CustomLogger {
    public void log(String message) {
        System.out.println("[CUSTOM] " + message);
    }
}
```

### 2.5 @ConditionalOnExpression

<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-5-conditionalonexpression-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-5-conditionalonexpression-handwritten.svg" alt="Handwritten: 2.5 @ConditionalOnExpression" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-5-conditionalonexpression-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-5-conditionalonexpression-diagram.svg" alt="Diagram: 2.5 @ConditionalOnExpression" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-5-conditionalonexpression-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-5-conditionalonexpression-sticky.svg" alt="Sticky Note: 2.5 @ConditionalOnExpression" width="30%">
</a>


`@ConditionalOnExpression` uses a SpEL expression to determine whether a configuration should be activated. This is the most flexible conditional ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â you can combine multiple conditions, reference other beans, and evaluate complex logic.

```java
package com.example.conditionals;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.boot.autoconfigure.condition.ConditionalOnJava;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.system.JavaVersion;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ExpressionConditionalConfig {

    @Bean
    @ConditionalOnExpression(
        "#{ '${app.deployment:development}' == 'production' " +
        "&& '${app.region}' == 'us-east-1' }"
    )
    public ProductionService productionService() {
        return new ProductionService();
    }

    @Bean
    @ConditionalOnExpression(
        "#{T(java.lang.Runtime).getRuntime().availableProcessors() > 4}"
    )
    public ParallelProcessor parallelProcessor() {
        return new ParallelProcessor();
    }

    // Combine multiple conditions ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â this is equivalent to using
    // @ConditionalOnProperty AND @ConditionalOnExpression together.
    // Spring Boot evaluates ALL conditions in a logical AND.
    @Bean
    @ConditionalOnProperty("app.features.parallel.enabled")
    @ConditionalOnExpression("#{T(java.lang.Runtime).getRuntime().availableProcessors() > 4}")
    public ComputeIntensiveService computeIntensiveService() {
        return new ComputeIntensiveService();
    }
}

class ProductionService {
    public String status() {
        return "Production service running in us-east-1";
    }
}

class ParallelProcessor {
    public void process() {
        System.out.println("Processing with " + Runtime.getRuntime().availableProcessors() + " cores");
    }
}

class ComputeIntensiveService {
    public double compute(double input) {
        return Math.pow(input, Math.PI);
    }
}
```

### 2.6 @ConditionalOnCloudPlatform

<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-6-conditionaloncloudplatform-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-6-conditionaloncloudplatform-handwritten.svg" alt="Handwritten: 2.6 @ConditionalOnCloudPlatform" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-6-conditionaloncloudplatform-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-6-conditionaloncloudplatform-diagram.svg" alt="Diagram: 2.6 @ConditionalOnCloudPlatform" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-6-conditionaloncloudplatform-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-6-conditionaloncloudplatform-sticky.svg" alt="Sticky Note: 2.6 @ConditionalOnCloudPlatform" width="30%">
</a>


`@ConditionalOnCloudPlatform` activates a configuration when the application is deployed on a specific cloud platform (Cloud Foundry, Heroku, Kubernetes, etc.).

```java
package com.example.conditionals;

import org.springframework.boot.autoconfigure.condition.ConditionalOnCloudPlatform;
import org.springframework.boot.cloud.CloudPlatform;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudPlatformConfig {

    @Bean
    @ConditionalOnCloudPlatform(CloudPlatform.KUBERNETES)
    public KubernetesHealthIndicator kubernetesHealthIndicator() {
        return new KubernetesHealthIndicator();
    }

    @Bean
    @ConditionalOnCloudPlatform(CloudPlatform.CLOUD_FOUNDRY)
    public CloudFoundryService cloudFoundryService() {
        return new CloudFoundryService();
    }

    @Bean
    @ConditionalOnCloudPlatform(CloudPlatform.HEROKU)
    public HerokuService herokuService() {
        return new HerokuService();
    }
}

class KubernetesHealthIndicator {
    public String check() {
        return "Running on Kubernetes";
    }
}

class CloudFoundryService {
    public String info() {
        return "Bound to Cloud Foundry";
    }
}

class HerokuService {
    public String dynoInfo() {
        return "Dyno: " + System.getenv("DYNO");
    }
}
```

### 2.7 @ConditionalOnJndi

<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-7-conditionalonjndi-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-7-conditionalonjndi-handwritten.svg" alt="Handwritten: 2.7 @ConditionalOnJndi" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-7-conditionalonjndi-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-7-conditionalonjndi-diagram.svg" alt="Diagram: 2.7 @ConditionalOnJndi" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-7-conditionalonjndi-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-7-conditionalonjndi-sticky.svg" alt="Sticky Note: 2.7 @ConditionalOnJndi" width="30%">
</a>


`@ConditionalOnJndi` activates a configuration when a JNDI InitialContext is available and, optionally, when a specific JNDI resource exists.

```java
package com.example.conditionals;

import org.springframework.boot.autoconfigure.condition.ConditionalOnJndi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
@ConditionalOnJndi
public class JndiDataSourceConfig {

    // This configuration only loads if a JNDI InitialContext is available.
    // This is typically the case in Java EE / Jakarta EE application servers.

    @Bean
    @ConditionalOnJndi("java:comp/env/jdbc/myDataSource")
    public DataSource jndiDataSource() {
        // Spring Boot will look up the DataSource from JNDI
        return new org.springframework.jndi.JndiObjectFactoryBean() {
            {
                setJndiName("java:comp/env/jdbc/myDataSource");
                setExpectedType(DataSource.class);
            }
        }.getObject();
    }
}
```

### 2.8 @ConditionalOnJava

<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-8-conditionalonjava-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-8-conditionalonjava-handwritten.svg" alt="Handwritten: 2.8 @ConditionalOnJava" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-8-conditionalonjava-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-8-conditionalonjava-diagram.svg" alt="Diagram: 2.8 @ConditionalOnJava" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-8-conditionalonjava-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-8-conditionalonjava-sticky.svg" alt="Sticky Note: 2.8 @ConditionalOnJava" width="30%">
</a>


`@ConditionalOnJava` activates a configuration based on the Java runtime version.

```java
package com.example.conditionals;

import org.springframework.boot.autoconfigure.condition.ConditionalOnJava;
import org.springframework.boot.system.JavaVersion;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JavaVersionConfig {

    @Bean
    @ConditionalOnJava(JavaVersion.SEVENTEEN)
    public Java17FeatureService java17FeatureService() {
        return new Java17FeatureService();
    }

    @Bean
    @ConditionalOnJava(
        range = ConditionalOnJava.Range.EQUAL_OR_NEWER,
        value = JavaVersion.TWENTY_ONE
    )
    public VirtualThreadService virtualThreadService() {
        return new VirtualThreadService();
    }

    @Bean
    @ConditionalOnJava(
        range = ConditionalOnJava.Range.OLDER_THAN,
        value = JavaVersion.EIGHTEEN
    )
    public LegacyCompatibilityService legacyCompatibilityService() {
        return new LegacyCompatibilityService();
    }
}

class Java17FeatureService {
    public String features() {
        return """
            Sealed classes, pattern matching for switch,
            records, text blocks
            """;
    }
}

class VirtualThreadService {
    public void executeTasks() {
        Thread.startVirtualThread(() -> System.out.println("Running on virtual thread"));
    }
}

class LegacyCompatibilityService {
    public void compatibilityWarning() {
        System.out.println("Running on Java < 18. Some features are unavailable.");
    }
}
```

### 2.9 @ConditionalOnSingleCandidate

<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-9-conditionalonsinglecandidate-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-9-conditionalonsinglecandidate-handwritten.svg" alt="Handwritten: 2.9 @ConditionalOnSingleCandidate" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-9-conditionalonsinglecandidate-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-9-conditionalonsinglecandidate-diagram.svg" alt="Diagram: 2.9 @ConditionalOnSingleCandidate" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-9-conditionalonsinglecandidate-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-9-conditionalonsinglecandidate-sticky.svg" alt="Sticky Note: 2.9 @ConditionalOnSingleCandidate" width="30%">
</a>


`@ConditionalOnSingleCandidate` activates a configuration when a bean of the specified type exists **and** is a primary/single candidate. This is stricter than `@ConditionalOnBean` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â it requires that exactly one bean of that type is available (or that one of them is `@Primary`).

```java
package com.example.conditionals;

import org.springframework.boot.autoconfigure.condition.ConditionalOnSingleCandidate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class SingleCandidateConfig {

    @Bean
    @ConditionalOnSingleCandidate(DataSource.class)
    public DataSourceMetrics dataSourceMetrics(DataSource dataSource) {
        // This bean is only created if there is exactly one DataSource bean
        // (or one marked as @Primary). If there are multiple DataSources
        // and none is @Primary, this bean will NOT be created.
        return new DataSourceMetrics(dataSource);
    }
}

class DataSourceMetrics {
    private final DataSource dataSource;

    DataSourceMetrics(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public int getActiveConnections() {
        try (var conn = dataSource.getConnection()) {
            var meta = conn.getMetaData();
            return meta.getMaxConnections();
        } catch (Exception e) {
            return -1;
        }
    }
}
```

### 2.10 @ConditionalOnWarDeployment

<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-10-conditionalonwardeployment-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-10-conditionalonwardeployment-handwritten.svg" alt="Handwritten: 2.10 @ConditionalOnWarDeployment" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-10-conditionalonwardeployment-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-10-conditionalonwardeployment-diagram.svg" alt="Diagram: 2.10 @ConditionalOnWarDeployment" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-10-conditionalonwardeployment-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-10-conditionalonwardeployment-sticky.svg" alt="Sticky Note: 2.10 @ConditionalOnWarDeployment" width="30%">
</a>


`@ConditionalOnWarDeployment` activates a configuration only when the application is deployed as a traditional WAR file (as opposed to an embedded container).

```java
package com.example.conditionals;

import org.springframework.boot.autoconfigure.condition.ConditionalOnWarDeployment;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnWarDeployment
public class WarDeploymentConfig {

    @Bean
    public JndiDataSourceProvider jndiDataSourceProvider() {
        // JNDI lookups are common in traditional app-server deployments
        // but unnecessary with embedded containers
        return new JndiDataSourceProvider();
    }
}

class JndiDataSourceProvider {
    public String lookupType() {
        return "WAR deployment ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â using JNDI datasource";
    }
}
```

### 2.11 Custom @Conditional

<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-11-custom-conditional-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-11-custom-conditional-handwritten.svg" alt="Handwritten: 2.11 Custom @Conditional" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-11-custom-conditional-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-11-custom-conditional-diagram.svg" alt="Diagram: 2.11 Custom @Conditional" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/2-11-custom-conditional-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/2-11-custom-conditional-sticky.svg" alt="Sticky Note: 2.11 Custom @Conditional" width="30%">
</a>


You can also write your own conditional by implementing the `Condition` interface:

```java
package com.example.conditionals;

import org.springframework.context.annotation.Condition;
import org.springframework.context.annotation.ConditionContext;
import org.springframework.context.annotation.Conditional;
import org.springframework.core.type.AnnotatedTypeMetadata;
import org.springframework.stereotype.Component;

import java.lang.annotation.*;
import java.time.LocalTime;

// Custom conditional annotation
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Conditional(OnAfternoonCondition.class)
@interface ConditionalOnAfternoon {
}

// Condition implementation
class OnAfternoonCondition implements Condition {

    @Override
    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        LocalTime now = LocalTime.now();
        return now.isAfter(LocalTime.NOON) && now.isBefore(LocalTime.of(18, 0));
    }
}

// Usage
@Component
@ConditionalOnAfternoon
class AfternoonGreeter {

    public String greet() {
        return "Good afternoon!";
    }
}
```

A more practical custom conditional ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â checking for a specific system property:

```java
package com.example.conditionals;

import org.springframework.context.annotation.Condition;
import org.springframework.context.annotation.ConditionContext;
import org.springframework.context.annotation.Conditional;
import org.springframework.core.type.AnnotatedTypeMetadata;

import java.lang.annotation.*;
import java.util.Map;

@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Conditional(OnSystemPropertyCondition.class)
@interface ConditionalOnSystemProperty {

    String name();

    String havingValue();
}

class OnSystemPropertyCondition implements Condition {

    @Override
    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        Map<String, Object> attrs = metadata.getAnnotationAttributes(
                ConditionalOnSystemProperty.class.getName());
        if (attrs == null) return false;

        String name = (String) attrs.get("name");
        String havingValue = (String) attrs.get("havingValue");
        String actualValue = System.getProperty(name);

        return havingValue.equals(actualValue);
    }
}
```

---

## 3. Auto-Configuration Classes

Auto-configuration classes are `@Configuration` classes that declare beans that are only created when certain conditions are met. Spring Boot ships with over 200 auto-configuration classes covering almost every common technology.

### 3.1 @AutoConfiguration vs @Configuration

<a href="../../../assets/images/diagrams/java/11-auto-configuration/3-1-autoconfiguration-vs-configuration-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/3-1-autoconfiguration-vs-configuration-handwritten.svg" alt="Handwritten: 3.1 @AutoConfiguration vs @Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/3-1-autoconfiguration-vs-configuration-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/3-1-autoconfiguration-vs-configuration-diagram.svg" alt="Diagram: 3.1 @AutoConfiguration vs @Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/3-1-autoconfiguration-vs-configuration-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/3-1-autoconfiguration-vs-configuration-sticky.svg" alt="Sticky Note: 3.1 @AutoConfiguration vs @Configuration" width="30%">
</a>


Spring Boot 3.0 introduced the `@AutoConfiguration` annotation as a specialization of `@Configuration`. It is identical in behavior but signals intent: this is an auto-configuration class that should be discovered via the `AutoConfiguration.imports` mechanism.

```java
// Spring Boot 3.x style
package com.example.autoconfigclasses;

import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;

@AutoConfiguration
@ConditionalOnClass(name = "org.springframework.web.servlet.DispatcherServlet")
public class MyWebAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public MyWebFilter myWebFilter() {
        return new MyWebFilter();
    }
}

class MyWebFilter {
    public void doFilter() {
        System.out.println("MyWebFilter applied");
    }
}
```

`@AutoConfiguration` differs from `@Configuration` in an important way: it enables **auto-configuration ordering** via `@AutoConfigureBefore`, `@AutoConfigureAfter`, and `@AutoConfigureOrder`. Plain `@Configuration` classes loaded via component scanning are not subject to auto-configuration ordering.

### 3.2 Major Auto-Configuration Classes

<a href="../../../assets/images/diagrams/java/11-auto-configuration/3-2-major-auto-configuration-classes-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/3-2-major-auto-configuration-classes-handwritten.svg" alt="Handwritten: 3.2 Major Auto-Configuration Classes" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/3-2-major-auto-configuration-classes-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/3-2-major-auto-configuration-classes-diagram.svg" alt="Diagram: 3.2 Major Auto-Configuration Classes" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/3-2-major-auto-configuration-classes-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/3-2-major-auto-configuration-classes-sticky.svg" alt="Sticky Note: 3.2 Major Auto-Configuration Classes" width="30%">
</a>


Here is a representative subset of the auto-configuration classes Spring Boot provides, with their conditional guards:

```java
package com.example.autoconfigclasses;

import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;

// These are NOT real implementations ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â they illustrate the conditional chain
// that Spring Boot uses. The actual sources are in the spring-boot-autoconfigure JAR.

public class AutoConfigurationExamples {

    // DataSourceAutoConfiguration is conditional on:
    //   - @ConditionalOnClass(DataSource.class, EmbeddedDatabaseType.class)
    //   - @ConditionalOnMissingBean(DataSource.class)
    // If H2 is on the classpath and no DataSource bean exists,
    // Spring Boot creates an embedded H2 DataSource.

    // HibernateJpaAutoConfiguration is conditional on:
    //   - @ConditionalOnClass(DataSource.class, JpaConfiguration.class)
    //   - @ConditionalOnBean(DataSource.class)
    //   - @ConditionalOnMissingBean(EntityManagerFactory.class)
    // Only loads after DataSource is available.

    // SecurityAutoConfiguration is conditional on:
    //   - @ConditionalOnClass(DefaultAuthenticationEventPublisher.class)
    // Configures basic authentication with a default user.

    // WebMvcAutoConfiguration is conditional on:
    //   - @ConditionalOnClass(Servlet.class, DispatcherServlet.class, WebMvcConfigurer.class)
    //   - @ConditionalOnMissingBean(WebMvcConfigurationSupport.class)
    // Configures DispatcherServlet, static resource handling, message converters, etc.

    public static void main(String[] args) {
        System.out.println("See individual auto-configuration class Javadoc for full conditional chains.");
    }
}
```

### 3.3 Conditional Chain Evaluation

<a href="../../../assets/images/diagrams/java/11-auto-configuration/3-3-conditional-chain-evaluation-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/3-3-conditional-chain-evaluation-handwritten.svg" alt="Handwritten: 3.3 Conditional Chain Evaluation" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/3-3-conditional-chain-evaluation-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/3-3-conditional-chain-evaluation-diagram.svg" alt="Diagram: 3.3 Conditional Chain Evaluation" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/3-3-conditional-chain-evaluation-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/3-3-conditional-chain-evaluation-sticky.svg" alt="Sticky Note: 3.3 Conditional Chain Evaluation" width="30%">
</a>


When an auto-configuration class has multiple `@Conditional` annotations, they are evaluated in order. If any condition fails, the class is skipped and no further conditions are evaluated. This means you should order your conditionals from **cheapest to most expensive**.

```java
package com.example.autoconfigclasses;

import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.*;

// Spring Boot evaluates conditions in this order:
// 1. @ConditionalOnClass (classpath check ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â fast)
// 2. @ConditionalOnBean (bean check ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â requires bean factory)
// 3. @ConditionalOnProperty (property check ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â requires environment)
// 4. @ConditionalOnExpression (SpEL evaluation ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â slowest)

@AutoConfiguration
// Evaluated first: if Hibernate is not on classpath, skip entirely
@ConditionalOnClass(name = "org.hibernate.Session")
// Evaluated second: only if DataSource bean exists
@ConditionalOnBean(javax.sql.DataSource.class)
// Evaluated third: allow user to disable with property
@ConditionalOnProperty(prefix = "spring.jpa", name = "enabled", matchIfMissing = true)
public class ConditionalChainExample {

}
```

### 3.4 @AutoConfigureBefore, @AutoConfigureAfter, @AutoConfigureOrder

<a href="../../../assets/images/diagrams/java/11-auto-configuration/3-4-autoconfigurebefore-autoconfigureafter-autoconfigureorder-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/3-4-autoconfigurebefore-autoconfigureafter-autoconfigureorder-handwritten.svg" alt="Handwritten: 3.4 @AutoConfigureBefore, @AutoConfigureAfter, @AutoConfigureOrder" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/3-4-autoconfigurebefore-autoconfigureafter-autoconfigureorder-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/3-4-autoconfigurebefore-autoconfigureafter-autoconfigureorder-diagram.svg" alt="Diagram: 3.4 @AutoConfigureBefore, @AutoConfigureAfter, @AutoConfigureOrder" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/3-4-autoconfigurebefore-autoconfigureafter-autoconfigureorder-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/3-4-autoconfigurebefore-autoconfigureafter-autoconfigureorder-sticky.svg" alt="Sticky Note: 3.4 @AutoConfigureBefore, @AutoConfigureAfter, @AutoConfigureOrder" width="30%">
</a>


Auto-configuration classes often need to run in a specific order. For example, `JpaRepositoriesAutoConfiguration` must run after `DataSourceAutoConfiguration`. Ordering is specified with dedicated annotations ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â not with `@Order`.

```java
package com.example.autoconfigclasses;

import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;
import org.springframework.core.Ordered;

// This auto-configuration runs after DataSourceAutoConfiguration
@AutoConfiguration
@AutoConfigureAfter(DataSourceAutoConfiguration.class)
@AutoConfigureBefore(HibernateJpaAutoConfiguration.class)
public class MyDataSourceDecoratorAutoConfiguration {

}

// Run this auto-configuration with a specific order value
@AutoConfiguration
@AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE + 10)
@AutoConfigureAfter(WebMvcAutoConfiguration.class)
public class MyWebCustomizerAutoConfiguration {

}
```

The order of evaluation:

1. `@AutoConfigureOrder` defines a numeric order (lower = earlier). Default is `0`.
2. `@AutoConfigureBefore` declares that this class runs before the specified class.
3. `@AutoConfigureAfter` declares that this class runs after the specified class.

The auto-configuration sorting algorithm combines these into a total order using a topological sort. Circular dependencies (`A` must be before `B` and `B` must be before `A`) will cause a startup failure.

---

## 4. Auto-Configuration Discovery: spring.factories and AutoConfiguration.imports

### 4.1 The Old Way: spring.factories (Spring Boot 2.x)

<a href="../../../assets/images/diagrams/java/11-auto-configuration/4-1-the-old-way-spring-factories-spring-boot-2-x-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/4-1-the-old-way-spring-factories-spring-boot-2-x-handwritten.svg" alt="Handwritten: 4.1 The Old Way: spring.factories (Spring Boot 2.x)" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/4-1-the-old-way-spring-factories-spring-boot-2-x-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/4-1-the-old-way-spring-factories-spring-boot-2-x-diagram.svg" alt="Diagram: 4.1 The Old Way: spring.factories (Spring Boot 2.x)" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/4-1-the-old-way-spring-factories-spring-boot-2-x-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/4-1-the-old-way-spring-factories-spring-boot-2-x-sticky.svg" alt="Sticky Note: 4.1 The Old Way: spring.factories (Spring Boot 2.x)" width="30%">
</a>


In Spring Boot 2.x, auto-configuration classes were registered in `META-INF/spring.factories`:

```properties
# META-INF/spring.factories (Spring Boot 2.x style)
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.example.starter.autoconfigure.MyAutoConfiguration,\
com.example.starter.autoconfigure.MyOtherAutoConfiguration
```

### 4.2 The New Way: AutoConfiguration.imports (Spring Boot 3.x)

<a href="../../../assets/images/diagrams/java/11-auto-configuration/4-2-the-new-way-autoconfiguration-imports-spring-boot-3-x-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/4-2-the-new-way-autoconfiguration-imports-spring-boot-3-x-handwritten.svg" alt="Handwritten: 4.2 The New Way: AutoConfiguration.imports (Spring Boot 3.x)" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/4-2-the-new-way-autoconfiguration-imports-spring-boot-3-x-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/4-2-the-new-way-autoconfiguration-imports-spring-boot-3-x-diagram.svg" alt="Diagram: 4.2 The New Way: AutoConfiguration.imports (Spring Boot 3.x)" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/4-2-the-new-way-autoconfiguration-imports-spring-boot-3-x-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/4-2-the-new-way-autoconfiguration-imports-spring-boot-3-x-sticky.svg" alt="Sticky Note: 4.2 The New Way: AutoConfiguration.imports (Spring Boot 3.x)" width="30%">
</a>


Spring Boot 3.x migrated to a dedicated file format that is more efficient to parse:

```properties
# META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports
com.example.starter.autoconfigure.MyAutoConfiguration
com.example.starter.autoconfigure.MyOtherAutoConfiguration
```

Each line is a fully-qualified auto-configuration class name. The file is read by `AutoConfigurationImportSelector` at startup.

### 4.3 Listing Boot's Built-In Auto-Configurations

<a href="../../../assets/images/diagrams/java/11-auto-configuration/4-3-listing-boot-s-built-in-auto-configurations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/4-3-listing-boot-s-built-in-auto-configurations-handwritten.svg" alt="Handwritten: 4.3 Listing Boot's Built-In Auto-Configurations" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/4-3-listing-boot-s-built-in-auto-configurations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/4-3-listing-boot-s-built-in-auto-configurations-diagram.svg" alt="Diagram: 4.3 Listing Boot's Built-In Auto-Configurations" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/4-3-listing-boot-s-built-in-auto-configurations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/4-3-listing-boot-s-built-in-auto-configurations-sticky.svg" alt="Sticky Note: 4.3 Listing Boot's Built-In Auto-Configurations" width="30%">
</a>


You can list all auto-configuration classes registered by Spring Boot:

```java
package com.example.discovery;

import org.springframework.boot.autoconfigure.AutoConfigurationImportSelector;
import org.springframework.core.io.support.SpringFactoriesLoader;
import org.springframework.core.io.DefaultResourceLoader;

import java.util.List;

public class ListAutoConfigurations {

    public static void main(String[] args) {
        var loader = new DefaultResourceLoader();
        var classLoader = ListAutoConfigurations.class.getClassLoader();

        // Load from AutoConfiguration.imports
        List<String> configs = SpringFactoriesLoader.loadFactoryNames(
                AutoConfigurationImportSelector.class,
                classLoader
        );

        System.out.println("Total auto-configuration classes: " + configs.size());
        configs.forEach(name -> System.out.println("  " + name));
    }
}
```

---

## 5. Building a Custom Spring Boot Starter

A Spring Boot starter is a Maven/Gradle module that bundles dependencies and auto-configuration to provide a turnkey experience for a specific technology. The most famous example is `spring-boot-starter-web` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â add it and you get a working web server.

The convention is to use two modules:

| Module | Purpose | Naming |
|--------|---------|--------|
| **autoconfigure** | Auto-configuration classes, conditionals, `@ConfigurationProperties` | `{name}-spring-boot-autoconfigure` |
| **starter** | POM that pulls in the autoconfigure module + required dependencies | `{name}-spring-boot-starter` |

### 5.1 Building a Greeting Starter

<a href="../../../assets/images/diagrams/java/11-auto-configuration/5-1-building-a-greeting-starter-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/5-1-building-a-greeting-starter-handwritten.svg" alt="Handwritten: 5.1 Building a Greeting Starter" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/5-1-building-a-greeting-starter-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/5-1-building-a-greeting-starter-diagram.svg" alt="Diagram: 5.1 Building a Greeting Starter" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/5-1-building-a-greeting-starter-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/5-1-building-a-greeting-starter-sticky.svg" alt="Sticky Note: 5.1 Building a Greeting Starter" width="30%">
</a>


Let's build a complete starter that provides a `GreetingService`. The starter will:

1. Expose a `GreetingService` bean.
2. Allow configuration via `application.properties`.
3. Support multiple greeting formats (formal, casual, festive).
4. Back off if the user defines their own `GreetingService`.
5. Only activate if a property is enabled.

#### Step 1: The Auto-Configuration Module

```java
// ============================================
// File: greeting-spring-boot-autoconfigure/
//   src/main/java/.../autoconfigure/GreetingProperties.java
// ============================================
package com.example.greeting.autoconfigure;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.bind.ConstructorBinding;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.boot.convert.DurationUnit;

import java.time.Duration;
import java.time.temporal.ChronoUnit;

@ConfigurationProperties(prefix = "greeting")
public class GreetingProperties {

    /** Whether the greeting starter is enabled. Defaults to true. */
    private boolean enabled = true;

    /** The greeting template. Use %s as placeholder for the name. */
    private String template = "Hello, %s!";

    /** The format style: formal, casual, or festive. */
    private Style style = Style.CASUAL;

    /** How often to refresh the greeting message. */
    @DurationUnit(ChronoUnit.SECONDS)
    private Duration refreshInterval = Duration.ofSeconds(60);

    /** Name prefixes for common titles. */
    private final Titles titles;

    public GreetingProperties() {
        this.titles = new Titles();
    }

    public boolean isEnabled() { return enabled; }
    public void setEnabled(boolean enabled) { this.enabled = enabled; }

    public String getTemplate() { return template; }
    public void setTemplate(String template) { this.template = template; }

    public Style getStyle() { return style; }
    public void setStyle(Style style) { this.style = style; }

    public Duration getRefreshInterval() { return refreshInterval; }
    public void setRefreshInterval(Duration refreshInterval) { this.refreshInterval = refreshInterval; }

    public Titles getTitles() { return titles; }

    public enum Style {
        FORMAL, CASUAL, FESTIVE
    }

    public static class Titles {
        private String male = "Mr.";
        private String female = "Ms.";
        private String neutral = "Mx.";

        public String getMale() { return male; }
        public void setMale(String male) { this.male = male; }
        public String getFemale() { return female; }
        public void setFemale(String female) { this.female = female; }
        public String getNeutral() { return neutral; }
        public void setNeutral(String neutral) { this.neutral = neutral; }
    }
}
```

```java
// ============================================
// File: greeting-spring-boot-autoconfigure/
//   src/main/java/.../autoconfigure/GreetingService.java
// ============================================
package com.example.greeting.autoconfigure;

public class GreetingService {

    private final GreetingProperties properties;

    public GreetingService(GreetingProperties properties) {
        this.properties = properties;
    }

    public String greet(String name) {
        return switch (properties.getStyle()) {
            case FORMAL -> String.format("Good day, %s %s.",
                    properties.getTitles().getMale(), name);
            case CASUAL -> String.format(properties.getTemplate(), name);
            case FESTIVE -> String.format("Welcome, magnificent %s! ÃƒÂ¢Ã…â€œÃ‚Â¨", name);
        };
    }

    public GreetingProperties getProperties() {
        return properties;
    }
}
```

```java
// ============================================
// File: greeting-spring-boot-autoconfigure/
//   src/main/java/.../autoconfigure/GreetingAutoConfiguration.java
// ============================================
package com.example.greeting.autoconfigure;

import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

@AutoConfiguration
@ConditionalOnProperty(prefix = "greeting", name = "enabled", havingValue = "true", matchIfMissing = true)
@EnableConfigurationProperties(GreetingProperties.class)
public class GreetingAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public GreetingService greetingService(GreetingProperties properties) {
        return new GreetingService(properties);
    }
}
```

```properties
# ============================================
# File: greeting-spring-boot-autoconfigure/
#   src/main/resources/META-INF/spring/
#   org.springframework.boot.autoconfigure.AutoConfiguration.imports
# ============================================
com.example.greeting.autoconfigure.GreetingAutoConfiguration
```

#### Step 2: The Starter Module

The starter module is a POM-only project:

```xml
<!-- ============================================
     File: greeting-spring-boot-starter/pom.xml
     ============================================ -->
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>greeting-spring-boot-starter</artifactId>
    <version>1.0.0</version>
    <packaging>pom</packaging>

    <dependencies>
        <dependency>
            <groupId>com.example</groupId>
            <artifactId>greeting-spring-boot-autoconfigure</artifactId>
            <version>1.0.0</version>
        </dependency>
        <!-- Pull in any runtime dependencies the auto-configuration needs -->
        <!-- Typically this is the library being auto-configured -->
    </dependencies>
</project>
```

#### Step 3: Using the Starter

A consumer application adds the starter:

```xml
<dependency>
    <groupId>com.example</groupId>
    <artifactId>greeting-spring-boot-starter</artifactId>
    <version>1.0.0</version>
</dependency>
```

And configures it:

```properties
# application.properties
greeting.enabled=true
greeting.style=FESTIVE
greeting.template=Hey there, %s!
greeting.refresh-interval=30s
greeting.titles.male=Sir
greeting.titles.female=Lady
greeting.titles.neutral=Comrade
```

```java
package com.example.consumer;

import com.example.greeting.autoconfigure.GreetingService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GreetingConsumerApp {

    public static void main(String[] args) {
        SpringApplication.run(GreetingConsumerApp.class, args);
    }

    @Bean
    CommandLineRunner demo(GreetingService greetingService) {
        return args -> {
            System.out.println(greetingService.greet("Alice"));
            System.out.println(greetingService.greet("Bob"));
            System.out.println("Style: " + greetingService.getProperties().getStyle());
            System.out.println("Refresh interval: " + greetingService.getProperties().getRefreshInterval());
        };
    }
}
```

### 5.2 Naming Conventions

<a href="../../../assets/images/diagrams/java/11-auto-configuration/5-2-naming-conventions-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/5-2-naming-conventions-handwritten.svg" alt="Handwritten: 5.2 Naming Conventions" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/5-2-naming-conventions-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/5-2-naming-conventions-diagram.svg" alt="Diagram: 5.2 Naming Conventions" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/5-2-naming-conventions-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/5-2-naming-conventions-sticky.svg" alt="Sticky Note: 5.2 Naming Conventions" width="30%">
</a>


Official Spring Boot starters follow strict naming conventions:

| Type | Pattern | Example |
|------|---------|---------|
| Official Spring starter | `spring-boot-starter-{name}` | `spring-boot-starter-web` |
| Custom starter | `{name}-spring-boot-starter` | `greeting-spring-boot-starter` |
| Custom autoconfigure | `{name}-spring-boot-autoconfigure` | `greeting-spring-boot-autoconfigure` |

### 5.3 Auto-Configuration Conditionals in the Starter

<a href="../../../assets/images/diagrams/java/11-auto-configuration/5-3-auto-configuration-conditionals-in-the-starter-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/5-3-auto-configuration-conditionals-in-the-starter-handwritten.svg" alt="Handwritten: 5.3 Auto-Configuration Conditionals in the Starter" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/5-3-auto-configuration-conditionals-in-the-starter-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/5-3-auto-configuration-conditionals-in-the-starter-diagram.svg" alt="Diagram: 5.3 Auto-Configuration Conditionals in the Starter" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/5-3-auto-configuration-conditionals-in-the-starter-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/5-3-auto-configuration-conditionals-in-the-starter-sticky.svg" alt="Sticky Note: 5.3 Auto-Configuration Conditionals in the Starter" width="30%">
</a>


The auto-configuration module should be carefully conditioned:

```java
package com.example.greeting.autoconfigure;

import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.*;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

@AutoConfiguration
// 1. Only activate if the library's core class is present
@ConditionalOnClass(GreetingService.class)
// 2. Only activate if the user hasn't disabled it
@ConditionalOnProperty(prefix = "greeting", name = "enabled", havingValue = "true", matchIfMissing = true)
// 3. Register the @ConfigurationProperties bean
@EnableConfigurationProperties(GreetingProperties.class)
public class GreetingAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    // 4. Back off if the user has already defined a GreetingService
    public GreetingService greetingService(GreetingProperties properties) {
        return new GreetingService(properties);
    }

    @Bean
    @ConditionalOnMissingBean
    @ConditionalOnProperty(prefix = "greeting", name = "health-indicator-enabled", havingValue = "true", matchIfMissing = false)
    public GreetingHealthIndicator greetingHealthIndicator(GreetingService greetingService) {
        return new GreetingHealthIndicator(greetingService);
    }
}
```

---

## 6. Configuration Properties Binding

Spring Boot's type-safe configuration properties mechanism binds external configuration (from `application.properties`, environment variables, command-line arguments, etc.) to strongly-typed Java beans.

### 6.1 @ConfigurationProperties(prefix)

<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-1-configurationproperties-prefix-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-1-configurationproperties-prefix-handwritten.svg" alt="Handwritten: 6.1 @ConfigurationProperties(prefix)" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-1-configurationproperties-prefix-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-1-configurationproperties-prefix-diagram.svg" alt="Diagram: 6.1 @ConfigurationProperties(prefix)" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-1-configurationproperties-prefix-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-1-configurationproperties-prefix-sticky.svg" alt="Sticky Note: 6.1 @ConfigurationProperties(prefix)" width="30%">
</a>


```java
package com.example.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import java.net.URI;
import java.time.Duration;
import java.util.List;
import java.util.Map;

@ConfigurationProperties(prefix = "app.mail")
@Validated
public class MailProperties {

    @NotBlank
    private String hostname;

    @Min(1024)
    @Max(65535)
    private int port = 587;

    private Credentials credentials = new Credentials();
    private List<String> recipients;
    private Map<String, String> customHeaders;
    private Duration connectionTimeout = Duration.ofSeconds(10);

    // Nested class
    public static class Credentials {
        @NotBlank
        private String username;
        @NotBlank
        private String password;

        public String getUsername() { return username; }
        public void setUsername(String username) { this.username = username; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }

    // Getters and setters
    public String getHostname() { return hostname; }
    public void setHostname(String hostname) { this.hostname = hostname; }
    public int getPort() { return port; }
    public void setPort(int port) { this.port = port; }
    public Credentials getCredentials() { return credentials; }
    public void setCredentials(Credentials credentials) { this.credentials = credentials; }
    public List<String> getRecipients() { return recipients; }
    public void setRecipients(List<String> recipients) { this.recipients = recipients; }
    public Map<String, String> getCustomHeaders() { return customHeaders; }
    public void setCustomHeaders(Map<String, String> customHeaders) { this.customHeaders = customHeaders; }
    public Duration getConnectionTimeout() { return connectionTimeout; }
    public void setConnectionTimeout(Duration connectionTimeout) { this.connectionTimeout = connectionTimeout; }
}
```

### 6.2 @EnableConfigurationProperties

<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-2-enableconfigurationproperties-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-2-enableconfigurationproperties-handwritten.svg" alt="Handwritten: 6.2 @EnableConfigurationProperties" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-2-enableconfigurationproperties-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-2-enableconfigurationproperties-diagram.svg" alt="Diagram: 6.2 @EnableConfigurationProperties" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-2-enableconfigurationproperties-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-2-enableconfigurationproperties-sticky.svg" alt="Sticky Note: 6.2 @EnableConfigurationProperties" width="30%">
</a>


The properties class must be registered. The cleanest way is `@EnableConfigurationProperties`:

```java
package com.example.properties;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(MailProperties.class)
public class MailConfiguration {

    private final MailProperties properties;

    public MailConfiguration(MailProperties properties) {
        this.properties = properties;
    }

    public void sendTestEmail() {
        System.out.println("Connecting to " + properties.getHostname() + ":" + properties.getPort());
        System.out.println("Timeout: " + properties.getConnectionTimeout().toSeconds() + "s");
        System.out.println("Recipients: " + String.join(", ", properties.getRecipients()));
    }
}
```

### 6.3 Relaxed Binding

<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-3-relaxed-binding-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-3-relaxed-binding-handwritten.svg" alt="Handwritten: 6.3 Relaxed Binding" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-3-relaxed-binding-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-3-relaxed-binding-diagram.svg" alt="Diagram: 6.3 Relaxed Binding" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-3-relaxed-binding-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-3-relaxed-binding-sticky.svg" alt="Sticky Note: 6.3 Relaxed Binding" width="30%">
</a>


Spring Boot uses **relaxed binding** ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â property keys can use various naming conventions and Spring Boot will bind them correctly. This is critical because environment variables (which cannot contain dots or dashes) must map cleanly to property names.

| Property source | Example |
|----------------|---------|
| application.properties | `app.mail.hostname=mail.example.com` |
| Environment variable | `APP_MAIL_HOSTNAME=mail.example.com` |
| Command line | `--app.mail.hostname=mail.example.com` |
| YAML | `app.mail.hostname: mail.example.com` |

Relaxed binding rules (all of these map to `mailProperties.hostname`):

| Format | Example |
|--------|---------|
| Exact (kebab-case) | `app.mail.hostname` |
| Camel case | `app.mail.hostName` |
| Underscore notation | `app.mail.host_name` |
| Upper camel case | `app.mail.HostName` |
| Environment variable | `APP_MAIL_HOSTNAME` |

### 6.4 @ConstructorBinding

<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-4-constructorbinding-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-4-constructorbinding-handwritten.svg" alt="Handwritten: 6.4 @ConstructorBinding" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-4-constructorbinding-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-4-constructorbinding-diagram.svg" alt="Diagram: 6.4 @ConstructorBinding" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-4-constructorbinding-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-4-constructorbinding-sticky.svg" alt="Sticky Note: 6.4 @ConstructorBinding" width="30%">
</a>


Instead of setters, you can use constructor binding for immutable properties:

```java
package com.example.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.bind.ConstructorBinding;
import org.springframework.boot.context.properties.bind.DefaultValue;

import java.time.Duration;
import java.util.List;

@ConfigurationProperties(prefix = "app.cache")
public class CacheProperties {

    private final String type;
    private final Duration ttl;
    private final List<String> evictionPolicies;
    private final RedisConfig redis;

    @ConstructorBinding
    public CacheProperties(
            @DefaultValue("local") String type,
            @DefaultValue("10m") Duration ttl,
            @DefaultValue({}) List<String> evictionPolicies,
            @DefaultValue RedisConfig redis) {
        this.type = type;
        this.ttl = ttl;
        this.evictionPolicies = evictionPolicies;
        this.redis = redis;
    }

    public String getType() { return type; }
    public Duration getTtl() { return ttl; }
    public List<String> getEvictionPolicies() { return evictionPolicies; }
    public RedisConfig getRedis() { return redis; }

    public static class RedisConfig {
        private final String host;
        private final int port;

        @ConstructorBinding
        public RedisConfig(@DefaultValue("localhost") String host,
                          @DefaultValue("6379") int port) {
            this.host = host;
            this.port = port;
        }

        public String getHost() { return host; }
        public int getPort() { return port; }
    }
}
```

### 6.5 Duration and DataSize Conversion

<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-5-duration-and-datasize-conversion-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-5-duration-and-datasize-conversion-handwritten.svg" alt="Handwritten: 6.5 Duration and DataSize Conversion" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-5-duration-and-datasize-conversion-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-5-duration-and-datasize-conversion-diagram.svg" alt="Diagram: 6.5 Duration and DataSize Conversion" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-5-duration-and-datasize-conversion-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-5-duration-and-datasize-conversion-sticky.svg" alt="Sticky Note: 6.5 Duration and DataSize Conversion" width="30%">
</a>


Spring Boot automatically converts `Duration` and `DataSize` strings from properties:

```java
package com.example.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.convert.DataSizeUnit;
import org.springframework.boot.convert.DurationUnit;
import org.springframework.util.unit.DataSize;
import org.springframework.util.unit.DataUnit;

import java.time.Duration;
import java.time.temporal.ChronoUnit;

@ConfigurationProperties(prefix = "app.server")
public class ServerProperties {

    // All of these are valid:
    //   app.server.connection-timeout=5s
    //   app.server.connection-timeout=5000ms
    //   app.server.connection-timeout=1m
    private Duration connectionTimeout = Duration.ofSeconds(30);

    // Specify default unit
    @DurationUnit(ChronoUnit.MINUTES)
    private Duration sessionTimeout = Duration.ofMinutes(30);

    // All of these are valid:
    //   app.server.max-request-size=10MB
    //   app.server.max-request-size=10485760B
    //   app.server.max-request-size=10GB
    private DataSize maxRequestSize = DataSize.ofMegabytes(10);

    @DataSizeUnit(DataUnit.KILOBYTES)
    private DataSize bufferSize = DataSize.ofKilobytes(8);

    // Getters and setters
    public Duration getConnectionTimeout() { return connectionTimeout; }
    public void setConnectionTimeout(Duration connectionTimeout) { this.connectionTimeout = connectionTimeout; }
    public Duration getSessionTimeout() { return sessionTimeout; }
    public void setSessionTimeout(Duration sessionTimeout) { this.sessionTimeout = sessionTimeout; }
    public DataSize getMaxRequestSize() { return maxRequestSize; }
    public void setMaxRequestSize(DataSize maxRequestSize) { this.maxRequestSize = maxRequestSize; }
    public DataSize getBufferSize() { return bufferSize; }
    public void setBufferSize(DataSize bufferSize) { this.bufferSize = bufferSize; }
}
```

Valid duration formats:
- `5s` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â 5 seconds
- `5000ms` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â 5000 milliseconds
- `1m` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â 1 minute
- `2h` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â 2 hours
- `1d` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â 1 day
- `PT10S` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â ISO-8601 format (10 seconds)

Valid data size formats:
- `10B` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â 10 bytes
- `10KB` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â 10 kilobytes
- `10MB` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â 10 megabytes
- `10GB` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â 10 gigabytes
- `10TB` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â 10 terabytes

### 6.6 @NestedConfigurationProperty

<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-6-nestedconfigurationproperty-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-6-nestedconfigurationproperty-handwritten.svg" alt="Handwritten: 6.6 @NestedConfigurationProperty" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-6-nestedconfigurationproperty-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-6-nestedconfigurationproperty-diagram.svg" alt="Diagram: 6.6 @NestedConfigurationProperty" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-6-nestedconfigurationproperty-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-6-nestedconfigurationproperty-sticky.svg" alt="Sticky Note: 6.6 @NestedConfigurationProperty" width="30%">
</a>


For nested POJOs that are not top-level `@ConfigurationProperties`, use `@NestedConfigurationProperty` to signal to the metadata generator and binding infrastructure that the field contains nested properties:

```java
package com.example.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.NestedConfigurationProperty;

@ConfigurationProperties(prefix = "app.database")
public class DatabaseProperties {

    private String url;
    private String username;

    @NestedConfigurationProperty
    private PoolConfig pool = new PoolConfig();

    // Getters and setters
    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public PoolConfig getPool() { return pool; }
    public void setPool(PoolConfig pool) { this.pool = pool; }

    public static class PoolConfig {
        private int minSize = 5;
        private int maxSize = 20;
        private boolean connectionTestEnabled = true;

        public int getMinSize() { return minSize; }
        public void setMinSize(int minSize) { this.minSize = minSize; }
        public int getMaxSize() { return maxSize; }
        public void setMaxSize(int maxSize) { this.maxSize = maxSize; }
        public boolean isConnectionTestEnabled() { return connectionTestEnabled; }
        public void setConnectionTestEnabled(boolean connectionTestEnabled) { this.connectionTestEnabled = connectionTestEnabled; }
    }
}
```

### 6.7 Validation

<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-7-validation-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-7-validation-handwritten.svg" alt="Handwritten: 6.7 Validation" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-7-validation-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-7-validation-diagram.svg" alt="Diagram: 6.7 Validation" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-7-validation-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-7-validation-sticky.svg" alt="Sticky Note: 6.7 Validation" width="30%">
</a>


Spring Boot supports Jakarta Bean Validation annotations on `@ConfigurationProperties`:

```java
package com.example.properties;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

import java.net.URL;
import java.util.List;

@ConfigurationProperties(prefix = "app.service")
@Validated
public class ServiceProperties {

    @NotBlank(message = "Service name must not be blank")
    private String name;

    @URL(message = "Base URL must be a valid URL")
    private String baseUrl;

    @Min(value = 1, message = "Minimum pool size must be at least 1")
    @Max(value = 100, message = "Maximum pool size must be at most 100")
    private int poolSize = 10;

    @Positive(message = "Timeout must be positive")
    private long timeoutMs = 5000;

    @Valid
    private List<@Valid Endpoint> endpoints;

    // Nested validated class
    public static class Endpoint {
        @NotBlank
        private String path;
        @NotNull
        private HttpMethod method = HttpMethod.GET;

        // Getters and setters
        public String getPath() { return path; }
        public void setPath(String path) { this.path = path; }
        public HttpMethod getMethod() { return method; }
        public void setMethod(HttpMethod method) { this.method = method; }
    }

    public enum HttpMethod { GET, POST, PUT, DELETE, PATCH }

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getBaseUrl() { return baseUrl; }
    public void setBaseUrl(String baseUrl) { this.baseUrl = baseUrl; }
    public int getPoolSize() { return poolSize; }
    public void setPoolSize(int poolSize) { this.poolSize = poolSize; }
    public long getTimeoutMs() { return timeoutMs; }
    public void setTimeoutMs(long timeoutMs) { this.timeoutMs = timeoutMs; }
    public List<Endpoint> getEndpoints() { return endpoints; }
    public void setEndpoints(List<Endpoint> endpoints) { this.endpoints = endpoints; }
}
```

### 6.8 Configuration Properties in a Non-Spring-Boot Project

<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-8-configuration-properties-in-a-non-spring-boot-project-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-8-configuration-properties-in-a-non-spring-boot-project-handwritten.svg" alt="Handwritten: 6.8 Configuration Properties in a Non-Spring-Boot Project" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-8-configuration-properties-in-a-non-spring-boot-project-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-8-configuration-properties-in-a-non-spring-boot-project-diagram.svg" alt="Diagram: 6.8 Configuration Properties in a Non-Spring-Boot Project" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/6-8-configuration-properties-in-a-non-spring-boot-project-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/6-8-configuration-properties-in-a-non-spring-boot-project-sticky.svg" alt="Sticky Note: 6.8 Configuration Properties in a Non-Spring-Boot Project" width="30%">
</a>


You can use `@ConfigurationProperties` in a non-Boot Spring application by registering the `ConfigurationPropertiesBindingPostProcessor`:

```java
package com.example.properties;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.boot.context.properties.ConfigurationPropertiesBindingPostProcessor;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@Configuration
@EnableConfigurationProperties(MailProperties.class)
public class NonBootPropertiesConfig {

    // In a Spring Framework (non-Boot) application, you may need
    // to register the binding post-processor manually.
    // Spring Boot does this automatically.

    @Bean
    public static ConfigurationPropertiesBindingPostProcessor configurationPropertiesBindingPostProcessor() {
        return new ConfigurationPropertiesBindingPostProcessor();
    }

    @Bean
    public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
        return new PropertySourcesPlaceholderConfigurer();
    }
}
```

---

## 7. Metadata Generation (spring-boot-configuration-processor)

Spring Boot's configuration processor generates JSON metadata that IDEs use for auto-completion, documentation, and validation when editing `application.properties` and `application.yml`.

### 7.1 Adding the Dependency

<a href="../../../assets/images/diagrams/java/11-auto-configuration/7-1-adding-the-dependency-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/7-1-adding-the-dependency-handwritten.svg" alt="Handwritten: 7.1 Adding the Dependency" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/7-1-adding-the-dependency-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/7-1-adding-the-dependency-diagram.svg" alt="Diagram: 7.1 Adding the Dependency" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/7-1-adding-the-dependency-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/7-1-adding-the-dependency-sticky.svg" alt="Sticky Note: 7.1 Adding the Dependency" width="30%">
</a>


```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <optional>true</optional>
</dependency>
```

In Gradle:

```groovy
annotationProcessor 'org.springframework.boot:spring-boot-configuration-processor'
```

### 7.2 What It Generates

<a href="../../../assets/images/diagrams/java/11-auto-configuration/7-2-what-it-generates-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/7-2-what-it-generates-handwritten.svg" alt="Handwritten: 7.2 What It Generates" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/7-2-what-it-generates-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/7-2-what-it-generates-diagram.svg" alt="Diagram: 7.2 What It Generates" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/7-2-what-it-generates-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/7-2-what-it-generates-sticky.svg" alt="Sticky Note: 7.2 What It Generates" width="30%">
</a>


During compilation, the annotation processor scans `@ConfigurationProperties` annotated classes and generates `META-INF/spring-configuration-metadata.json`:

```json
{
  "groups": [
    {
      "name": "greeting",
      "type": "com.example.greeting.autoconfigure.GreetingProperties",
      "sourceType": "com.example.greeting.autoconfigure.GreetingProperties",
      "description": "Greeting service configuration."
    },
    {
      "name": "greeting.titles",
      "type": "com.example.greeting.autoconfigure.GreetingProperties$Titles",
      "sourceType": "com.example.greeting.autoconfigure.GreetingProperties$Titles",
      "sourceMethod": "getTitles()"
    }
  ],
  "properties": [
    {
      "name": "greeting.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether the greeting starter is enabled.",
      "sourceType": "com.example.greeting.autoconfigure.GreetingProperties",
      "defaultValue": true
    },
    {
      "name": "greeting.style",
      "type": "com.example.greeting.autoconfigure.GreetingProperties$Style",
      "description": "The format style: formal, casual, or festive.",
      "sourceType": "com.example.greeting.autoconfigure.GreetingProperties",
      "defaultValue": "casual"
    },
    {
      "name": "greeting.template",
      "type": "java.lang.String",
      "description": "The greeting template. Use %s as placeholder for the name.",
      "sourceType": "com.example.greeting.autoconfigure.GreetingProperties",
      "defaultValue": "Hello, %s!"
    },
    {
      "name": "greeting.refresh-interval",
      "type": "java.time.Duration",
      "description": "How often to refresh the greeting message.",
      "sourceType": "com.example.greeting.autoconfigure.GreetingProperties",
      "defaultValue": "60s"
    },
    {
      "name": "greeting.titles.male",
      "type": "java.lang.String",
      "description": "Title for male-gendered addressees.",
      "sourceType": "com.example.greeting.autoconfigure.GreetingProperties$Titles",
      "defaultValue": "Mr."
    },
    {
      "name": "greeting.titles.female",
      "type": "java.lang.String",
      "description": "Title for female-gendered addressees.",
      "sourceType": "com.example.greeting.autoconfigure.GreetingProperties$Titles",
      "defaultValue": "Ms."
    },
    {
      "name": "greeting.titles.neutral",
      "type": "java.lang.String",
      "description": "Title for non-binary addressees.",
      "sourceType": "com.example.greeting.autoconfigure.GreetingProperties$Titles",
      "defaultValue": "Mx."
    }
  ],
  "hints": [
    {
      "name": "greeting.style",
      "values": [
        { "value": "formal", "description": "Formal greeting with titles." },
        { "value": "casual", "description": "Casual greeting using template." },
        { "value": "festive", "description": "Festive greeting with emoji." }
      ]
    }
  ]
}
```

### 7.3 Providing Hints

<a href="../../../assets/images/diagrams/java/11-auto-configuration/7-3-providing-hints-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/7-3-providing-hints-handwritten.svg" alt="Handwritten: 7.3 Providing Hints" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/7-3-providing-hints-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/7-3-providing-hints-diagram.svg" alt="Diagram: 7.3 Providing Hints" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/7-3-providing-hints-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/7-3-providing-hints-sticky.svg" alt="Sticky Note: 7.3 Providing Hints" width="30%">
</a>


Provide value hints and provider hints by creating `additional-spring-configuration-metadata.json`:

```json
{
  "properties": [
    {
      "name": "greeting.refresh-interval",
      "description": "How often to refresh the greeting message.",
      "defaultValue": "60s"
    }
  ],
  "hints": [
    {
      "name": "greeting.refresh-interval",
      "values": [
        { "value": "30s", "description": "Refresh every 30 seconds." },
        { "value": "60s", "description": "Refresh every minute." },
        { "value": "5m", "description": "Refresh every 5 minutes." }
      ]
    },
    {
      "name": "greeting.style",
      "values": [
        { "value": "formal", "description": "Dear Sir/Madam format." },
        { "value": "casual", "description": "Hi, {name}! format." },
        { "value": "festive", "description": "Celebratory greeting." }
      ]
    },
    {
      "name": "greeting.titles.male",
      "providers": [
        { "name": "handle-as", "parameters": { "target": "java.lang.String" } }
      ]
    }
  ]
}
```

Place this file at `src/main/resources/META-INF/additional-spring-configuration-metadata.json`.

---

## 8. Auto-Configuration Ordering and Exclusion

### 8.1 Phase Ordering

<a href="../../../assets/images/diagrams/java/11-auto-configuration/8-1-phase-ordering-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/8-1-phase-ordering-handwritten.svg" alt="Handwritten: 8.1 Phase Ordering" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/8-1-phase-ordering-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/8-1-phase-ordering-diagram.svg" alt="Diagram: 8.1 Phase Ordering" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/8-1-phase-ordering-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/8-1-phase-ordering-sticky.svg" alt="Sticky Note: 8.1 Phase Ordering" width="30%">
</a>


Auto-configuration classes run in phases determined by their `@AutoConfigureOrder`, `@AutoConfigureBefore`, and `@AutoConfigureAfter` annotations. The ordering within a phase is stable across restarts.

The general informal phases are:

| Phase | Typical Classes |
|-------|----------------|
| Infrastructure | `ApplicationContextAutoConfiguration`, `JacksonAutoConfiguration` |
| DataSource | `DataSourceAutoConfiguration`, `HikariCPAutoConfiguration` |
| ORM | `HibernateJpaAutoConfiguration`, `JdbcTemplateAutoConfiguration` |
| Web | `WebMvcAutoConfiguration`, `HttpMessageConvertersAutoConfiguration` |
| Security | `SecurityAutoConfiguration`, `OAuth2ClientAutoConfiguration` |
| Actuator | `EndpointAutoConfiguration`, `HealthEndpointAutoConfiguration` |

### 8.2 Conditional Chain

<a href="../../../assets/images/diagrams/java/11-auto-configuration/8-2-conditional-chain-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/8-2-conditional-chain-handwritten.svg" alt="Handwritten: 8.2 Conditional Chain" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/8-2-conditional-chain-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/8-2-conditional-chain-diagram.svg" alt="Diagram: 8.2 Conditional Chain" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/8-2-conditional-chain-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/8-2-conditional-chain-sticky.svg" alt="Sticky Note: 8.2 Conditional Chain" width="30%">
</a>


When an auto-configuration class defines multiple beans, each bean has its own conditional chain. The class-level conditions are evaluated first; if they pass, then each `@Bean` method's conditions are evaluated independently.

```java
package com.example.ordering;

import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.boot.autoconfigure.condition.*;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;

// This auto-configuration runs after DataSourceAutoConfiguration
// and before JpaRepositoriesAutoConfiguration
@AutoConfiguration
@AutoConfigureAfter(DataSourceAutoConfiguration.class)
@AutoConfigureBefore(name = "org.springframework.boot.autoconfigure.orm.jpa.JpaRepositoriesAutoConfiguration")
@AutoConfigureOrder(Ordered.LOWEST_PRECEDENCE - 100)
public class MyPersistenceCustomizerAutoConfiguration {

    @Bean
    @ConditionalOnBean(javax.sql.DataSource.class)
    public MyConnectionValidator myConnectionValidator() {
        return new MyConnectionValidator();
    }

    @Bean
    @ConditionalOnMissingClass("com.zaxxer.hikari.HikariDataSource")
    public MySimpleDataSourceFallback mySimpleDataSourceFallback() {
        return new MySimpleDataSourceFallback();
    }
}

class MyConnectionValidator {
    public boolean validate() { return true; }
}

class MySimpleDataSourceFallback {
    public void log() { System.out.println("HikariCP not available"); }
}
```

### 8.3 Preventing Auto-Configuration

<a href="../../../assets/images/diagrams/java/11-auto-configuration/8-3-preventing-auto-configuration-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/8-3-preventing-auto-configuration-handwritten.svg" alt="Handwritten: 8.3 Preventing Auto-Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/8-3-preventing-auto-configuration-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/8-3-preventing-auto-configuration-diagram.svg" alt="Diagram: 8.3 Preventing Auto-Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/8-3-preventing-auto-configuration-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/8-3-preventing-auto-configuration-sticky.svg" alt="Sticky Note: 8.3 Preventing Auto-Configuration" width="30%">
</a>


There are three ways to exclude an auto-configuration class:

#### Method 1: @SpringBootApplication(exclude = ...)

```java
package com.example.exclusion;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(
    exclude = {
        DataSourceAutoConfiguration.class,
        SecurityAutoConfiguration.class
    }
)
public class ExcludingApp {

    public static void main(String[] args) {
        SpringApplication.run(ExcludingApp.class, args);
    }
}
```

#### Method 2: excludeName

```java
package com.example.exclusion;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(
    excludeName = {
        "org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration",
        "org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration"
    }
)
public class ExcludingByNameApp {

    public static void main(String[] args) {
        SpringApplication.run(ExcludingByNameApp.class, args);
    }
}
```

#### Method 3: Property-based exclusion

```properties
# application.properties
spring.autoconfigure.exclude=\
  org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration,\
  org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration
```

This is useful when you want to exclude a class without modifying the source code ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â for example, across different deployment profiles.

### 8.4 Testing Exclusions

<a href="../../../assets/images/diagrams/java/11-auto-configuration/8-4-testing-exclusions-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/8-4-testing-exclusions-handwritten.svg" alt="Handwritten: 8.4 Testing Exclusions" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/8-4-testing-exclusions-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/8-4-testing-exclusions-diagram.svg" alt="Diagram: 8.4 Testing Exclusions" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/8-4-testing-exclusions-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/8-4-testing-exclusions-sticky.svg" alt="Sticky Note: 8.4 Testing Exclusions" width="30%">
</a>


```java
package com.example.exclusion;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.assertj.AssertableApplicationContext;

import javax.sql.DataSource;

import static org.assertj.core.api.Assertions.assertThat;

// Using properties to exclude for a specific test
@SpringBootTest(
    properties = {
        "spring.autoconfigure.exclude=" +
        "org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration"
    }
)
class DataSourceExclusionTest {

    @Test
    void dataSourceShouldNotBeConfigured(AssertableApplicationContext ctx) {
        assertThat(ctx.getBeansOfType(DataSource.class)).isEmpty();
    }
}
```

---

## 9. Failure Analysis

### 9.1 Built-in FailureAnalyzers

<a href="../../../assets/images/diagrams/java/11-auto-configuration/9-1-built-in-failureanalyzers-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/9-1-built-in-failureanalyzers-handwritten.svg" alt="Handwritten: 9.1 Built-in FailureAnalyzers" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/9-1-built-in-failureanalyzers-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/9-1-built-in-failureanalyzers-diagram.svg" alt="Diagram: 9.1 Built-in FailureAnalyzers" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/9-1-built-in-failureanalyzers-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/9-1-built-in-failureanalyzers-sticky.svg" alt="Sticky Note: 9.1 Built-in FailureAnalyzers" width="30%">
</a>


When Spring Boot encounters a startup failure, `FailureAnalyzers` convert the raw exception into a human-readable message. For example:

```
***************************
APPLICATION FAILED TO START
***************************

Description:

Failed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured.

Reason: Failed to determine a suitable driver class

Action:

Consider the following:
    If you want an embedded database (H2, HSQL, or Derby), please put it on the classpath.
    If you have database settings to be loaded from a particular profile you may need to activate it.
```

This comes from `DataSourceBeanCreationFailureAnalyzer`.

### 9.2 Custom FailureAnalyzer

<a href="../../../assets/images/diagrams/java/11-auto-configuration/9-2-custom-failureanalyzer-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/9-2-custom-failureanalyzer-handwritten.svg" alt="Handwritten: 9.2 Custom FailureAnalyzer" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/9-2-custom-failureanalyzer-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/9-2-custom-failureanalyzer-diagram.svg" alt="Diagram: 9.2 Custom FailureAnalyzer" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/9-2-custom-failureanalyzer-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/9-2-custom-failureanalyzer-sticky.svg" alt="Sticky Note: 9.2 Custom FailureAnalyzer" width="30%">
</a>


```java
package com.example.failure;

import org.springframework.boot.diagnostics.FailureAnalysis;
import org.springframework.boot.diagnostics.FailureAnalyzer;
import org.springframework.stereotype.Component;

public class GreetingServiceNotFoundException extends RuntimeException {

    public GreetingServiceNotFoundException(String message) {
        super(message);
    }
}

@Component
public class GreetingFailureAnalyzer implements FailureAnalyzer {

    @Override
    public FailureAnalysis analyze(Throwable failure) {
        if (failure instanceof GreetingServiceNotFoundException ex) {
            return new FailureAnalysis(
                getDescription(ex),
                getAction(ex),
                ex
            );
        }
        return null; // Not my exception ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â pass to next analyzer
    }

    private String getDescription(GreetingServiceNotFoundException ex) {
        return """
            Failed to configure GreetingService: %s
            """.formatted(ex.getMessage());
    }

    private String getAction(GreetingServiceNotFoundException ex) {
        return """
            Ensure 'greeting.enabled=true' is set in your application.properties.
            Alternatively, define your own GreetingService @Bean.
            """;
    }
}
```

### 9.3 Registering the Custom FailureAnalyzer

<a href="../../../assets/images/diagrams/java/11-auto-configuration/9-3-registering-the-custom-failureanalyzer-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/9-3-registering-the-custom-failureanalyzer-handwritten.svg" alt="Handwritten: 9.3 Registering the Custom FailureAnalyzer" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/9-3-registering-the-custom-failureanalyzer-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/9-3-registering-the-custom-failureanalyzer-diagram.svg" alt="Diagram: 9.3 Registering the Custom FailureAnalyzer" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/9-3-registering-the-custom-failureanalyzer-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/9-3-registering-the-custom-failureanalyzer-sticky.svg" alt="Sticky Note: 9.3 Registering the Custom FailureAnalyzer" width="30%">
</a>


In Spring Boot 3.x, `FailureAnalyzer` implementations are registered via `spring.factories`:

```properties
# META-INF/spring/org.springframework.boot.diagnostics.FailureAnalyzer.imports
com.example.failure.GreetingFailureAnalyzer
```

In Spring Boot 2.x:

```properties
# META-INF/spring.factories
org.springframework.boot.diagnostics.FailureAnalyzer=\
com.example.failure.GreetingFailureAnalyzer
```

The import file for Spring Boot 3.x is a simple one-per-line format identical to the `AutoConfiguration.imports` pattern.

### 9.4 Testing a FailureAnalyzer

<a href="../../../assets/images/diagrams/java/11-auto-configuration/9-4-testing-a-failureanalyzer-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/9-4-testing-a-failureanalyzer-handwritten.svg" alt="Handwritten: 9.4 Testing a FailureAnalyzer" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/9-4-testing-a-failureanalyzer-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/9-4-testing-a-failureanalyzer-diagram.svg" alt="Diagram: 9.4 Testing a FailureAnalyzer" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/9-4-testing-a-failureanalyzer-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/9-4-testing-a-failureanalyzer-sticky.svg" alt="Sticky Note: 9.4 Testing a FailureAnalyzer" width="30%">
</a>


```java
package com.example.failure;

import org.junit.jupiter.api.Test;
import org.springframework.boot.diagnostics.FailureAnalysis;

import static org.assertj.core.api.Assertions.assertThat;

class GreetingFailureAnalyzerTest {

    private final GreetingFailureAnalyzer analyzer = new GreetingFailureAnalyzer();

    @Test
    void shouldHandleGreetingServiceNotFoundException() {
        var exception = new GreetingServiceNotFoundException("GreetingService is disabled");
        FailureAnalysis analysis = analyzer.analyze(exception);

        assertThat(analysis).isNotNull();
        assertThat(analysis.getDescription()).contains("disabled");
        assertThat(analysis.getAction()).contains("greeting.enabled=true");
    }

    @Test
    void shouldReturnNullForOtherExceptions() {
        var exception = new RuntimeException("Something else");
        FailureAnalysis analysis = analyzer.analyze(exception);

        assertThat(analysis).isNull();
    }
}
```

---

## 10. Environment Post-Processing

`EnvironmentPostProcessor` is a Spring Boot extension point that allows you to add custom property sources to the `Environment` **before any beans are created**. This is useful for injecting default values, random values, platform-specific properties, or values from external sources.

### 10.1 Built-in: RandomValuePropertySource

<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-1-built-in-randomvaluepropertysource-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-1-built-in-randomvaluepropertysource-handwritten.svg" alt="Handwritten: 10.1 Built-in: RandomValuePropertySource" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-1-built-in-randomvaluepropertysource-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-1-built-in-randomvaluepropertysource-diagram.svg" alt="Diagram: 10.1 Built-in: RandomValuePropertySource" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-1-built-in-randomvaluepropertysource-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-1-built-in-randomvaluepropertysource-sticky.svg" alt="Sticky Note: 10.1 Built-in: RandomValuePropertySource" width="30%">
</a>


Spring Boot includes a built-in `RandomValuePropertySource` that generates random values:

```properties
# application.properties
app.secret=${random.value}
app.number=${random.int}
app.limit=${random.int(1024,65536)}
app.range=${random.long}
app.uuid=${random.uuid}
app.hex=${random.hex(32)}
```

The underlying implementation is `RandomValuePropertySource`, which registers itself early in environment preparation.

### 10.2 Custom EnvironmentPostProcessor

<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-2-custom-environmentpostprocessor-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-2-custom-environmentpostprocessor-handwritten.svg" alt="Handwritten: 10.2 Custom EnvironmentPostProcessor" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-2-custom-environmentpostprocessor-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-2-custom-environmentpostprocessor-diagram.svg" alt="Diagram: 10.2 Custom EnvironmentPostProcessor" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-2-custom-environmentpostprocessor-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-2-custom-environmentpostprocessor-sticky.svg" alt="Sticky Note: 10.2 Custom EnvironmentPostProcessor" width="30%">
</a>


Let's build one that reads properties from a YAML file on the filesystem:

```java
package com.example.envpost;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.env.EnvironmentPostProcessor;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.MapPropertySource;
import org.springframework.core.env.PropertySource;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Properties;

@Order(Ordered.LOWEST_PRECEDENCE - 10)
public class ExternalConfigEnvironmentPostProcessor implements EnvironmentPostProcessor {

    private static final String PROPERTY_SOURCE_NAME = "externalConfig";
    private static final String EXTERNAL_CONFIG_PATH = "/etc/myapp/application.properties";

    @Override
    public void postProcessEnvironment(ConfigurableEnvironment environment,
                                       SpringApplication application) {
        try (InputStream input = new FileInputStream(EXTERNAL_CONFIG_PATH)) {
            Properties props = new Properties();
            props.load(input);

            Map<String, Object> map = new LinkedHashMap<>();
            props.stringPropertyNames().forEach(key -> map.put(key, props.getProperty(key)));

            PropertySource<?> externalSource = new MapPropertySource(PROPERTY_SOURCE_NAME, map);

            // Add with highest priority (before the existing sources)
            environment.getPropertySources().addFirst(externalSource);

            System.out.println("Loaded " + map.size() + " properties from " + EXTERNAL_CONFIG_PATH);
        } catch (Exception e) {
            // File not found is not an error ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â just skip
            System.out.println("No external config at " + EXTERNAL_CONFIG_PATH + " (" + e.getMessage() + ")");
        }
    }
}
```

### 10.3 Registering EnvironmentPostProcessor

<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-3-registering-environmentpostprocessor-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-3-registering-environmentpostprocessor-handwritten.svg" alt="Handwritten: 10.3 Registering EnvironmentPostProcessor" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-3-registering-environmentpostprocessor-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-3-registering-environmentpostprocessor-diagram.svg" alt="Diagram: 10.3 Registering EnvironmentPostProcessor" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-3-registering-environmentpostprocessor-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-3-registering-environmentpostprocessor-sticky.svg" alt="Sticky Note: 10.3 Registering EnvironmentPostProcessor" width="30%">
</a>


```properties
# META-INF/spring/org.springframework.boot.env.EnvironmentPostProcessor.imports
com.example.envpost.ExternalConfigEnvironmentPostProcessor
```

### 10.4 Adding Custom Property Sources

<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-4-adding-custom-property-sources-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-4-adding-custom-property-sources-handwritten.svg" alt="Handwritten: 10.4 Adding Custom Property Sources" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-4-adding-custom-property-sources-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-4-adding-custom-property-sources-diagram.svg" alt="Diagram: 10.4 Adding Custom Property Sources" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-4-adding-custom-property-sources-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-4-adding-custom-property-sources-sticky.svg" alt="Sticky Note: 10.4 Adding Custom Property Sources" width="30%">
</a>


A more sophisticated example that adds a property source backed by a database:

```java
package com.example.envpost;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.env.EnvironmentPostProcessor;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.MapPropertySource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;
import java.util.LinkedHashMap;
import java.util.Map;

@Order(Ordered.HIGHEST_PRECEDENCE + 20)
public class DatabasePropertySourcePostProcessor implements EnvironmentPostProcessor {

    @Override
    public void postProcessEnvironment(ConfigurableEnvironment environment,
                                       SpringApplication application) {
        // Read database connection from existing properties (already loaded)
        String dbUrl = environment.getProperty("app.config.db.url");
        if (dbUrl == null) {
            return;
        }

        try {
            DataSource ds = new DriverManagerDataSource(dbUrl);
            JdbcTemplate jdbc = new JdbcTemplate(ds);

            Map<String, Object> props = new LinkedHashMap<>();
            jdbc.query(
                "SELECT property_key, property_value FROM app_config",
                (rs) -> {
                    props.put(rs.getString("property_key"),
                              rs.getString("property_value"));
                }
            );

            if (!props.isEmpty()) {
                environment.getPropertySources().addFirst(
                    new MapPropertySource("databaseConfig", props)
                );
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to load config from database: " + dbUrl, e);
        }
    }
}
```

### 10.5 @PropertySource Ordering

<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-5-propertysource-ordering-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-5-propertysource-ordering-handwritten.svg" alt="Handwritten: 10.5 @PropertySource Ordering" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-5-propertysource-ordering-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-5-propertysource-ordering-diagram.svg" alt="Diagram: 10.5 @PropertySource Ordering" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/11-auto-configuration/10-5-propertysource-ordering-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/11-auto-configuration/10-5-propertysource-ordering-sticky.svg" alt="Sticky Note: 10.5 @PropertySource Ordering" width="30%">
</a>


Spring Boot also supports `@PropertySource` on `@Configuration` classes to import property files. The ordering of property sources in the environment is:

```
1. Command-line arguments (--app.foo=bar)
2. JNDI attributes
3. System properties (System.getProperties())
4. OS environment variables
5. RandomValuePropertySource
6. application-{profile}.properties (profile-specific)
7. application.properties (main)
8. @PropertySource on @Configuration classes
9. Default properties (SpringApplication.setDefaultProperties)
```

Note that `EnvironmentPostProcessor` can inject at any position ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â you can use `addFirst`, `addLast`, `addBefore`, or `addAfter`.


## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| @ConditionalOnClass | Bean created only if class is on classpath | Dependency-based gating | Auto-configure only when library present |
| @ConditionalOnProperty | Bean created only if property has expected value | Configuration-based gating | Feature toggles |
| @ConditionalOnBean | Bean created only if another bean exists | Dependency-based gating | Ordered configuration |
| @ConfigurationProperties | Type-safe property binding | Relaxed binding, metadata generation | Application configuration |
| @AutoConfiguration | Spring Boot 3.x auto-config marker | Ordered import via AutoConfiguration.imports | Custom starter development |

## Quick Reference

| Category | Key Mechanisms | Notes |
|----------|---------------|-------|
| **Conditionals** | @ConditionalOnClass, OnProperty, OnBean, OnMissingBean | Combined with Any/Nested for complex logic |
| **Auto-Config Location** | META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports | Line-separated fully qualified class names |
| **Ordering** | @AutoConfigureBefore, @AutoConfigureAfter, @AutoConfigureOrder | Last auto-config wins on conflict |
| **Properties** | @ConfigurationProperties(prefix), @ConstructorBinding | @EnableConfigurationProperties to register |
| **Metadata** | spring-boot-configuration-processor | Generates spring-configuration-metadata.json |

## Cross-Application Matrix

| Technique | Web Apps | Data Access | Security | Custom Infrastructure |
|-----------|----------|-------------|----------|----------------------|
| Auto-Configuration | DispatcherServlet | DataSource, JPA | SecurityFilterChain | Custom starter |
| @Conditional | Server selection | Driver availability | Provider presence | Library feature gating |
| @ConfigurationProperties | Server config | Connection pool settings | OAuth2 properties | Starter configuration |

## Chapter Quiz

1. Where does Spring Boot 3.x read auto-configuration class names from?
   - A) spring.factories
   - B) META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports
   - C) application.properties
   - D) web.xml

<details>
<summary>Answer&lt;/summary&gt;
**B) META-INF/spring/...AutoConfiguration.imports.** In Spring Boot 3.x, auto-configuration candidates are listed in this imports file, replacing the older spring.factories approach.
</details>

2. Which @Conditional annotation would you use to gate a bean on a property value?
   - A) @ConditionalOnClass
   - B) @ConditionalOnBean
   - C) @ConditionalOnProperty
   - D) @ConditionalOnResource

<details>
<summary>Answer&lt;/summary&gt;
**C) @ConditionalOnProperty.** This annotation creates the bean only when a specified property has the expected value (or is defined).
</details>

3. What is the purpose of @ConstructorBinding?
   - A) To inject dependencies via constructor
   - B) To enable immutable @ConfigurationProperties with constructor parameters
   - C) To bind request parameters to a constructor
   - D) To enable AOP for constructors

<details>
<summary>Answer&lt;/summary&gt;
**B) To enable immutable @ConfigurationProperties with constructor parameters.** @ConstructorBinding allows configuration properties to be bound through a constructor, enabling final fields.
</details>

---

## Summary

Spring Boot's auto-configuration is the mechanism that eliminates boilerplate configuration by providing opinionated, conditionally-applied bean definitions. Understanding this machinery is essential for every Spring Boot developer ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â not just framework authors.

**Key takeaways:**

- **@EnableAutoConfiguration** imports `AutoConfigurationImportSelector`, which loads auto-configuration class names from `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` (Spring Boot 3.x) or `META-INF/spring.factories` (Spring Boot 2.x).
- **The @Conditional family** provides fine-grained gating: classpath presence (`@ConditionalOnClass`), bean presence (`@ConditionalOnBean`), property values (`@ConditionalOnProperty`), resource availability (`@ConditionalOnResource`), SpEL expressions (`@ConditionalOnExpression`), cloud platform, JNDI, Java version, single-candidate beans, and war deployment.
- **@AutoConfiguration** (Spring Boot 3.x) is a specialized `@Configuration` that participates in auto-configuration ordering via `@AutoConfigureBefore`, `@AutoConfigureAfter`, and `@AutoConfigureOrder`.
- **Custom starters** follow a two-module convention: `{name}-spring-boot-autoconfigure` (contains the auto-configuration and properties) and `{name}-spring-boot-starter` (the consumer POM).
- **Configuration properties** bind external configuration to type-safe POJOs via `@ConfigurationProperties(prefix)`, with support for `@ConstructorBinding`, `@NestedConfigurationProperty`, `@Validated`, relaxed binding, and automatic `Duration`/`DataSize` conversion.
- **spring-boot-configuration-processor** generates IDE metadata from `@ConfigurationProperties` classes for auto-completion, documentation rendering, and validation in `application.properties` and `application.yml`.
- **Failure analysis** converts raw startup exceptions into actionable, human-readable messages. Custom `FailureAnalyzer` implementations plug into this system.
- **EnvironmentPostProcessor** allows injecting property sources before bean creation, enabling external configuration sources like filesystem paths, databases, or vault services.

---

## Exercises

### Review Questions

1. What is the difference between `@Configuration` and `@AutoConfiguration` in Spring Boot 3.x?

2. How does `AutoConfigurationImportSelector` determine which auto-configuration classes to load? List the steps in order.

3. Explain the difference between `@ConditionalOnBean` and `@ConditionalOnSingleCandidate`. When would you use each?

4. Why should `@ConditionalOnClass` typically be placed before `@ConditionalOnExpression` on an auto-configuration class?

5. What is relaxed binding? Give three examples of property key formats that would bind to the field `mailProperties.hostname`.

6. How does `@ConstructorBinding` differ from traditional setter-based binding? What are the advantages?

7. What is the purpose of `spring-boot-configuration-processor`? Where does it place its output?

8. How would you exclude the `DataSourceAutoConfiguration` class without modifying any Java source code?

9. What is the naming convention for a custom Spring Boot starter called "redis-streams"? What are the two modules?

10. Why would you implement an `EnvironmentPostProcessor` instead of using a regular `@PropertySource`?

### Application Problems

**Problem 1: Analyze an Auto-Configuration Report**

Start a Spring Boot 3.x application with `spring-boot-starter-web` and `spring-boot-starter-data-jpa` as dependencies. Set `debug=true` in `application.properties`. Read the auto-configuration report in the startup log. Identify:

- Three auto-configuration classes with positive matches.
- Three auto-configuration classes with negative matches and the reason why.
- One unconditional auto-configuration class.
- Write a short explanation of why `DataSourceAutoConfiguration` matches but `FlywayAutoConfiguration` (if present) does not.

**Problem 2: Write Custom Conditionals**

Implement a custom `@ConditionalOnOperatingSystem` annotation that accepts a `name` attribute (`WINDOWS`, `LINUX`, `MAC`). Implement the `Condition` interface to check `System.getProperty("os.name")`. Create two beans:
- `WindowsSpecificService` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â annotated with `@ConditionalOnOperatingSystem(name = "WINDOWS")`
- `UnixSpecificService` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â annotated with `@ConditionalOnOperatingSystem(name = "LINUX")`

Verify the correct service is created based on your current operating system.

**Problem 3: Configuration Properties with Nested and Duration Types**

Create a `@ConfigurationProperties` class called `NotificationProperties` with prefix `app.notification`:

| Property | Type | Default |
|----------|------|---------|
| app.notification.enabled | boolean | true |
| app.notification.providers | List&lt;String&gt; | ["email"] |
| app.notification.retry-delay | Duration | 30s |
| app.notification.max-retries | int | 3 |
| app.notification.email.host | String | (required) |
| app.notification.email.port | int | 587 |
| app.notification.email.credentials.username | String | (required) |
| app.notification.email.credentials.password | String | (required) |

Use a nested static class for `Email` and `Credentials`. Add `@Validated` and `@jakarta.validation.constraints` annotations to enforce the constraints. Provide the corresponding `application.properties` with sample values.

**Problem 4: Build a Full Custom Starter ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â Rate Limiter**

Build a two-module custom starter that provides a rate-limiting capability:

**Auto-Configuration Module (`ratelimit-spring-boot-autoconfigure`):**

- `RateLimitProperties` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â prefix `ratelimit`, properties: `enabled` (boolean, default true), `default-limit` (int, default 100), `default-window` (Duration, default 1m), `strategies` (Map&lt;String, StrategyConfig&gt;).
- `StrategyConfig` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â nested class with `limit` (int) and `window` (Duration).
- `RateLimiter` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â simple token-bucket implementation.
- `RateLimitAutoConfiguration` ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â conditionally creates a `RateLimiter` bean with `@ConditionalOnMissingBean` and `@ConditionalOnProperty`.

**Starter Module (`ratelimit-spring-boot-starter`):**

- POM-only, depends on the autoconfigure module and a `bucket4j` or similar library (or implement a simple in-memory counter).

**Consumer Application:**

- Add the starter, configure with `ratelimit.default-limit=50` and `ratelimit.strategies.api.limit=10` and `ratelimit.strategies.api.window=1s`.
- Inject `RateLimiter` and call it in a loop, printing whether each call is allowed.

### Challenge Problems

**Problem 5: Deep Dive ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â Override Auto-Configuration with Custom Bean**

Spring Boot's `WebMvcAutoConfiguration` configures a `ContentNegotiationManager` that includes a `PathExtensionContentNegotiationStrategy`. You want to **disable** path-extension content negotiation (e.g., `/users.json` should return JSON, not trigger `.json` content negotiation) and instead use only the `Accept` header.

1. Research: What bean in `WebMvcAutoConfiguration` controls content negotiation?
2. Write a `@Configuration` class that overrides this bean.
3. Add `@AutoConfigureAfter(WebMvcAutoConfiguration.class)` and `@AutoConfigureOrder(0)`.
4. Verify the behavior with a simple REST controller and curl requests demonstrating that `.json` and `.xml` extensions no longer change the response format.

**Problem 6: Custom FailureAnalyzer for Missing Configuration**

Create an auto-configuration class `ReportingAutoConfiguration` that requires a property `app.reporting.database-url` to be set. If the property is missing, throw a `ReportingConfigurationException` with a descriptive message. Write a `ReportingFailureAnalyzer` that produces a FailureAnalysis with:

- Description: "Reporting database URL (app.reporting.database-url) is not configured."
- Action: "Set the 'app.reporting.database-url' property in application.properties or define a bean of type 'javax.sql.DataSource' named 'reportingDataSource'."

Register the analyzer and verify it works by starting the application without the required property.

**Problem 7: EnvironmentPostProcessor with Encrypted Properties**

Implement an `EnvironmentPostProcessor` that:

1. Scans the existing `PropertySource` entries for keys ending with `.encrypted`.
2. For each such key, reads the value (a Base64-encoded, AES-encrypted string).
3. Decrypts the value using a secret key read from `system.properties` or an environment variable.
4. Registers a new `PropertySource` with the decrypted values, using the same key name with the `.encrypted` suffix removed.
5. Removes the original encrypted property source (or marks it as last priority).

Include a utility class `AESEncryption` for encrypting/decrypting, and provide a test that verifies the decryption works end-to-end with `@Value("${database.password}")` resolving to the decrypted value.

**Problem 8: Metadata Generation for a Complex Configuration Class**

Extend the `GreetingProperties` starter from Section 5 with:

1. A `@DurationUnit` annotated field for `cache-ttl`.
2. A `@DataSizeUnit` annotated field for `max-message-size`.
3. A `List<String>` field for `fallback-greetings`.
4. A `Map<String, String>` field for `localized-templates` (key: locale code, value: template).

Generate the configuration metadata by building the project. Inspect `target/classes/META-INF/spring-configuration-metadata.json` and confirm that:

- All properties are listed with correct types.
- `Duration` and `DataSize` properties show the correct type.
- Nested properties (under `titles`) are present.
- The map property shows `java.util.Map<java.lang.String,java.lang.String>`.

Add an `additional-spring-configuration-metadata.json` that provides value hints for the `cache-ttl` field suggesting `30s`, `60s`, `5m`, and `10m`.
