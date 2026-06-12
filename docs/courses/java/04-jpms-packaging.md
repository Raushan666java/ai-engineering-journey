# Java Modules (JPMS) & Packaging

Java's module system—formally **Java Platform Module System (JPMS)**—was introduced in Java 9 as part of Project Jigsaw. It is the largest structural change to the Java language since its inception. Before JPMS, Java had only packages as a namespacing mechanism, with no concept of declared dependencies, no enforced encapsulation at the JAR level, and no reliable way to reason about what a library required or exposed. The result was classpath hell: conflicting versions, missing classes at runtime, and a `public` keyword that was all-or-nothing.

JPMS introduces **modules** as a new level of abstraction above packages. A module is a self-describing collection of code and data that explicitly declares its dependencies and its exported API. This chapter covers the full module system: from motivation and basic `module-info.java` declarations through advanced topics like ServiceLoader, `jlink` for custom runtime images, `jpackage` for native installers, multi-module project architecture, migration strategies for existing codebases, and how Spring Boot interacts with the module system.

All examples are written for **Java 21+** and are fully compilable.

---

## Learning Objectives

By the end of this chapter, you will be able to:

- Explain the five core motivations for the Java module system: JAR hell, strong encapsulation, reliable configuration, scalable reasoning, and JDK modularization
- Write `module-info.java` declarations using `requires`, `exports`, `opens`, `provides`, `uses`, and `permits`
- Distinguish between named modules, unnamed modules, and automatic modules, and understand how the module graph is resolved
- Apply `requires transitive` correctly for implicit readability
- Configure reflective access via `opens` and `open module` for frameworks like Spring and Hibernate
- Implement the ServiceLoader provider-consumer pattern and compare it with Spring's `SpringFactoriesLoader`
- Build custom runtime images with `jlink` and native installers with `jpackage`
- Architect multi-module Maven and Gradle projects with JPMS, avoiding split-package and circular-dependency problems
- Migrate an existing application to JPMS using `jdeps`, `--add-exports`, `--add-opens`, `--add-reads`, and the automatic-module-name pattern
- Understand how Spring Boot auto-configuration, JPA entities, and modular JARs interact with the module system

---

## 1. Motivation: Why Modules?

Java's package system, while useful for namespacing, had fundamental flaws that grew worse as the ecosystem scaled.

### 1.1 JAR Hell

The classpath is a flat list of JAR files. When two JARs contain the same class (same fully qualified name), the first one found wins—silently. There is no mechanism to express that library A requires version 2 of library B, or to ensure that two versions of the same library do not coexist.

```java
// Suppose classpath contains both log4j-core-2.17.0.jar
// and log4j-core-2.14.0.jar.
// The JVM loads org.apache.logging.log4j.core.Logger from whichever
// JAR appears first on the classpath. No warning is issued.
// If an incompatible class from 2.14.0 is loaded alongside a class
// from 2.17.0 that depends on a method only present in 2.17.0,
// the result is a random NoSuchMethodError at runtime.
```

JPMS solves this with **reliable configuration**: every module declares its dependencies in `module-info.java`, and the module system ensures that exactly one version of each module is resolved and that all required modules are present at startup.

### 1.2 Weak Encapsulation

In the classpath world, `public` meant accessible to everyone. Frameworks could access your internal classes via reflection. There was no way to declare that a package was internal implementation detail.

```java
// In a library JAR:
package com.example.internal;

public class InternalHelper {
    public static void doSecretThing() {
        // This is internal, but anyone can call it
    }
}

// Any consumer can do:
// import com.example.internal.InternalHelper;
// InternalHelper.doSecretThing(); // No protection
```

JPMS provides **strong encapsulation**: a module must explicitly `export` a package for it to be accessible outside the module. Reflective access also requires explicit `opens` declarations.

### 1.3 JDK Modularization

Before Java 9, the JRE was a monolithic `rt.jar` of around 60 MB containing every public class in the JDK. Applications could not shrink the runtime, and internal APIs like `com.sun.*` were technically public but unsupported.

```java
// Before JPMS, this worked (though it was discouraged):
import com.sun.org.apache.xerces.internal.parsers.DOMParser;

public class BadExample {
    public static void main(String[] args) throws Exception {
        // This accesses an internal JDK class that happened to be public
        DOMParser parser = new DOMParser();
    }
}
```

Java 9 broke the JDK itself into about 80 modules (e.g., `java.base`, `java.sql`, `java.xml`, `java.desktop`). Internal classes are now truly encapsulated. The above code will not compile or run on Java 9+ without explicit `--add-exports` flags.

### 1.4 Reliable Configuration

JPMS performs **module resolution** at startup: it reads all `module-info.class` descriptors, builds a directed graph of dependencies, checks that every `requires` is satisfied by exactly one module, and fails fast with a clear error message if anything is missing.

```java
// At startup, if module A requires module B but B is not present:
// Error: Module B not found, required by A
// This is far better than a random ClassNotFoundException five minutes
// into application runtime.
```

### 1.5 Scalable Reasoning

As projects grow beyond a few dozen JARs, understanding the dependency graph becomes impossible without tooling. JPMS makes the graph explicit: every module's dependencies are declared in a single file, and tools can query, visualize, and validate the graph statically.

```java
// jdeps --module-path lib --module my.app
// Produces a detailed module-dependency report showing what each
// module reads, what it exports, and what it requires transitively.
```

---

## 2. The module-info.java File

Every Java module is defined by a `module-info.java` file at the root of the module's source tree. This file is compiled by `javac` into a `module-info.class` that is placed in the root of the compiled JAR.

### 2.1 Basic Module Declaration

The simplest possible module declaration:

```java
// src/main/java/module-info.java
module com.example.demo {
    // No dependencies, no exports — this module is self-contained
}
```

A module that depends on another module:

```java
// src/main/java/module-info.java
module com.example.store {
    requires java.sql;         // Requires the java.sql module
    requires com.example.data; // Requires our own module
    exports com.example.store.api;  // Export this package to consumers
}
```

### 2.2 The requires Keyword

`requires` declares that this module depends on another module at both compile time and runtime.

```java
module com.example.inventory {
    requires java.base;     // Implicitly required by all modules
    requires java.logging;  // For java.util.logging
    requires com.example.common;
}
```

**Notes:**
- `java.base` is required by every module implicitly; it is the only module you never need to declare.
- Module names use reversed-domain naming (like packages), but they are not the same as package names. A module can contain multiple packages.

### 2.3 requires transitive

`requires transitive` adds **implicit readability**: any module that `requires` your module also reads the transitive dependency.

```java
// com.example.database module
module com.example.database {
    requires transitive java.sql;
    exports com.example.database.api;
}

// com.example.app module — by requiring com.example.database,
// it implicitly also reads java.sql
module com.example.app {
    requires com.example.database;  // Implicitly gets java.sql too
    // Without "transitive" in com.example.database, this module
    // would need its own "requires java.sql" to use java.sql types
}
```

**When to use `requires transitive`:**

Use it when your module's exported API exposes types from the dependency:

```java
package com.example.database.api;

import java.sql.Connection;

public class DatabaseManager {
    // The return type java.sql.Connection is part of the public API
    public Connection getConnection() { ... }
}
```

If a consumer of `com.example.database` calls `getConnection()` and receives a `Connection`, they need `java.sql` to be readable. `requires transitive java.sql` ensures this automatically.

**Common transitive dependencies:**

```java
module com.example.orm {
    requires transitive java.sql;       // Exposed in return types
    requires transitive jakarta.persistence;  // Exposed in entity annotations
    requires java.logging;              // Internal use only — don't use transitive
    exports com.example.orm.api;
}
```

### 2.4 requires static

`requires static` declares a dependency that is needed at compile time but is optional at runtime.

```java
module com.example.export {
    requires static com.fasterxml.jackson.databind;
    // Jackson is needed to compile annotation processors or code
    // that generates JSON, but may not be on the runtime module path
    exports com.example.export.api;
}
```

This is equivalent to Maven's `<optional>true</optional>` or Gradle's `compileOnly` configuration.

### 2.5 exports

`exports` makes a package accessible to other modules at both compile time and runtime. Without `exports`, all packages in a module are inaccessible to other modules.

```java
module com.example.library {
    // These packages are part of the public API
    exports com.example.library.api;
    exports com.example.library.dto;

    // These packages are NOT exported — they are internal
    // com.example.library.internal is invisible to other modules
}
```

### 2.6 exports to

`exports ... to` restricts a package's accessibility to specific modules only.

```java
module com.example.framework {
    // Only these specific modules can access the internal SPI package
    exports com.example.framework.spi to
        com.example.plugin1,
        com.example.plugin2;

    // Everyone can access the public API
    exports com.example.framework.api;
}
```

### 2.7 opens

`opens` allows **reflective access** to a package at runtime. Without `opens`, reflection (including `setAccessible(true)`) cannot access private members of classes in the package, even if the package is exported.

```java
module com.example.model {
    exports com.example.model.dto;

    // Allow reflective access to these packages
    opens com.example.model.entities;
    opens com.example.model.converters;
}
```

**Why this matters:** Frameworks like Spring, Hibernate, and Jackson use reflection to inject dependencies, map JSON to objects, and proxy classes. Without `opens`, these frameworks cannot access the classes they need.

```java
package com.example.model.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    private Long id;
    private String name;

    // Hibernate needs reflective access to the private fields
    // and the no-arg constructor — only works if the package is opened
    public User() {}

    // getters and setters
}
```

### 2.8 opens to

`opens ... to` restricts reflective access to specific modules:

```java
module com.example.model {
    exports com.example.model.dto;

    // Only Spring and Hibernate can reflectively access entities
    opens com.example.model.entities to
        spring.beans,
        spring.core,
        org.hibernate.orm;

    // Jackson can access converters
    opens com.example.model.converters to
        com.fasterxml.jackson.databind;
}
```

### 2.9 open module

An `open module` makes all its packages available for reflective access, while still controlling which packages are exported for compile-time access:

```java
open module com.example.model {
    // All packages are open for reflection (Spring, Hibernate, etc. can access everything)
    // But only api and dto packages are exported for compile-time access
    exports com.example.model.api;
    exports com.example.model.dto;

    // entities, internal — not exported, but still open for reflection
}
```

This is a pragmatic choice for applications that use many frameworks requiring reflection, at the cost of weaker encapsulation.

### 2.10 provides and uses (ServiceLoader)

The ServiceLoader pattern allows modules to provide implementations of interfaces without compile-time dependencies.

**Service provider interface (SPI) module:**

```java
// spi-module/src/main/java/com/example/spi/NotificationService.java
package com.example.spi;

public interface NotificationService {
    void send(String recipient, String message);
    String getProviderName();
}
```

```java
// spi-module/src/main/java/module-info.java
module com.example.spi {
    exports com.example.spi;
    uses com.example.spi.NotificationService;
}
```

**Provider implementation module:**

```java
// email-provider/src/main/java/com/example/email/EmailNotificationService.java
package com.example.email;

import com.example.spi.NotificationService;

public class EmailNotificationService implements NotificationService {
    @Override
    public void send(String recipient, String message) {
        System.out.println("Email to " + recipient + ": " + message);
    }

    @Override
    public String getProviderName() {
        return "Email";
    }
}
```

```java
// email-provider/src/main/java/module-info.java
module com.example.email {
    requires com.example.spi;
    provides com.example.spi.NotificationService
        with com.example.email.EmailNotificationService;
}
```

**Consumer module:**

```java
// app/src/main/java/com/example/app/Main.java
package com.example.app;

import com.example.spi.NotificationService;
import java.util.ServiceLoader;

public class Main {
    public static void main(String[] args) {
        ServiceLoader<NotificationService> loader =
            ServiceLoader.load(NotificationService.class);

        // Iterate over all discovered providers
        for (NotificationService provider : loader) {
            provider.send("user@example.com",
                "Hello from " + provider.getProviderName());
        }
    }
}
```

```java
// app/src/main/java/module-info.java
module com.example.app {
    requires com.example.spi;
    uses com.example.spi.NotificationService;
}
```

**ServiceLoader.Stream (lazy loading):**

```java
// Java 9+ Streaming API for ServiceLoader
ServiceLoader<NotificationService> loader =
    ServiceLoader.load(NotificationService.class);

// filter() returns a Stream<ServiceLoader.Provider<NotificationService>>
// The provider is not instantiated until .get() is called
loader.stream()
    .filter(p -> !p.get().getProviderName().equals("SMS"))
    .forEach(p -> {
        NotificationService svc = p.get();
        svc.send("user@example.com",
            "Hello from " + svc.getProviderName());
    });
```

**Comparison with Spring's SpringFactoriesLoader:**

Spring Boot's `spring.factories` (now `org.springframework.boot.autoconfigure.AutoConfiguration.imports`) is conceptually similar to ServiceLoader but predates JPMS:

| Aspect | ServiceLoader (JPMS) | SpringFactoriesLoader |
|--------|---------------------|----------------------|
| Declaration | `provides X with Y` in `module-info.java` | Key-value pairs in `META-INF/spring.factories` |
| Discovery | Module-path scanning | Classpath scanning of `META-INF` files |
| Lazy loading | `ServiceLoader.Stream` since Java 9 | Manual via `SpringFactoriesLoader.loadFactoryNames` |
| Module support | Native (no reflection needed) | Works on classpath; requires `opens` on module path |
| Use case | JDK services (e.g., `java.sql.Driver`) | Spring auto-configuration, initializers |

### 2.11 permits (Sealed Modules)

Java 17 introduced **sealed classes**, and Java 21's module system can seal modules to restrict which modules can extend or implement certain classes.

```java
// In base-module/src/main/java/module-info.java
module com.example.base {
    exports com.example.base.api;

    // Only the listed modules may extend classes in the exported packages
    permits com.example.plugin;
}
```

```java
package com.example.base.api;

// This sealed interface can only be implemented by classes
// in the permitted module
public sealed interface Plugin
    permits com.example.plugin.PluginImpl {
    void execute();
}
```

```java
// In plugin-module/src/main/java/com/example/plugin/PluginImpl.java
package com.example.plugin;

import com.example.base.api.Plugin;

// This is allowed because com.example.plugin is in the permits list
public final class PluginImpl implements Plugin {
    @Override
    public void execute() {
        System.out.println("Plugin running");
    }
}
```

---

## 3. Module Types and the Module Graph

JPMS defines three categories of modules.

### 3.1 Named Modules

A **named module** is a module with a `module-info.class` on the module path. All examples above are named modules. Named modules have full strong encapsulation: only exported packages are accessible, and only declared dependencies are readable.

### 3.2 Automatic Modules

An **automatic module** is a regular JAR file (without `module-info.class`) placed on the module path. The module system automatically derives a module name for it, either from the `Automatic-Module-Name` entry in the JAR's `MANIFEST.MF` or from the JAR filename.

```java
// MANIFEST.MF in a JAR that wants to be an automatic module:
// Automatic-Module-Name: org.apache.logging.log4j
//
// If this entry is absent, the module name is derived from the filename:
// log4j-core-2.17.0.jar → module name "log4j.core" (dots replace non-alphanumeric)
```

Characteristics of automatic modules:
- They read all other modules (both named and automatic).
- All their packages are exported and opened (full reflective access granted).
- They can access all packages of named modules (since they read all).
- They serve as a bridge between the module path and the classpath.

```java
module com.example.myapp {
    // This JAR has Automatic-Module-Name: org.apache.logging.log4j
    requires org.apache.logging.log4j;

    requires com.google.guice;  // Guice is an automatic module
}
```

### 3.3 Unnamed Modules

The **unnamed module** is the special module that contains all classes loaded from the classpath (as opposed to the module path). It is not a named module and has special behavior:

- The unnamed module reads all named modules.
- Named modules cannot `requires` the unnamed module.
- The unnamed module has no `module-info.class` and no declared name.
- All packages in the unnamed module are exported and opened.

```java
// If you run:
// java --class-path lib/* com.example.LegacyMain
//
// Every class from the classpath resides in the unnamed module.
// The unnamed module can access all named modules on the module path.
// BUT named modules on the module path CANNOT access the unnamed module.
// This is a key migration challenge.
```

### 3.4 Module Graph Resolution

At startup, the module system resolves dependencies as follows:

```
[Java launcher reads --module-path and --add-modules]
        │
        ▼
[Identifies root modules]
    • The main application module (--module/-m)
    • Modules listed in --add-modules
    • java.base (always a root)
        │
        ▼
[Resolution phase: reads module-info.class from each JAR]
    • Builds a directed graph where nodes are modules
    • Edges are "requires" relationships
    • Checks for cycles (JPMS does NOT allow module-level cycles)
    • Checks that each "requires" target exists
    • For each required module, recursively resolves its dependencies
        │
        ▼
[Validation phase]
    • Exactly one version of each module must be present
    • No split packages (same package in multiple modules)
    • All required modules are readable
        │
        ▼
[Phase  — ready to run]

// This is what a resolution failure looks like:
// Error occurred during initialization of boot layer
// java.lang.module.FindException: Module com.example.missing not found
//     Required by: com.example.myapp

// This is what a split-package failure looks like:
// Error occurred during initialization of boot layer
// java.lang.module.ResolutionException: Package com.example.util
//     exists in multiple modules: lib.core, lib.extra
```

The module graph is a **directed acyclic graph (DAG)**:

```java
// com.example.app
//   ├── requires → com.example.service
//   │               ├── requires transitive → com.example.data
//   │               │                        └── requires → java.sql
//   │               └── requires → java.logging
//   └── requires → com.example.config
//                   └── requires → com.example.data (shared!)
//
// The graph has a diamond: com.example.app requires both
// com.example.service and com.example.config, which both require
// com.example.data. This is fine — data is resolved once.
// The graph remains acyclic. No version conflict for data.
```

---

## 4. jlink: Custom Runtime Images

`jlink` creates a custom Java runtime image that contains only the modules needed by your application. This reduces the runtime from ~300 MB (full JDK) to ~30–50 MB for a typical application, and enables Java to compete with Go and Rust in containerized deployments.

### 4.1 Basic jlink Usage

```bash
# Step 1: Compile your module
javac -d out --module-source-path src -m com.example.myapp

# Step 2: Create a custom runtime image
jlink \
    --module-path out:$JAVA_HOME/jmods \
    --add-modules com.example.myapp \
    --output myapp-runtime

# The resulting myapp-runtime/ directory contains:
#   bin/        — java launcher and other executables
#   conf/       — configuration files
#   lib/        — runtime libraries (modules, jli, etc.)
# Total size: ~40 MB (vs ~300 MB JDK)
```

### 4.2 --launcher

Create platform-specific launchers for your application:

```bash
jlink \
    --module-path out:$JAVA_HOME/jmods \
    --add-modules com.example.myapp \
    --launcher myapp=com.example.myapp/com.example.app.Main \
    --output myapp-runtime

# Now myapp-runtime/bin/myapp (or myapp-runtime/bin/myapp.bat on Windows)
# is a launcher that runs your app without needing java -m ...
```

### 4.3 --compress

Reduce the size of the runtime image:

```bash
# Compression levels: 0 (none), 1 (constant-string sharing), 2 (ZIP)
jlink \
    --module-path out:$JAVA_HOME/jmods \
    --add-modules com.example.myapp \
    --launcher myapp=com.example.myapp/com.example.app.Main \
    --compress=2 \
    --output myapp-runtime
```

### 4.4 --strip-debug, --no-header-files, --no-man-pages

Remove debug information and documentation to minimize size:

```bash
jlink \
    --module-path out:$JAVA_HOME/jmods \
    --add-modules com.example.myapp \
    --launcher myapp=com.example.myapp/com.example.app.Main \
    --compress=2 \
    --strip-debug \
    --no-header-files \
    --no-man-pages \
    --output myapp-runtime

# This can reduce the runtime image by another 30-50%.
# Final image may be ~20-30 MB for a simple application.
```

### 4.5 Complete Build Pipeline with jlink

```bash
#!/bin/bash
# build.sh — Full jlink build pipeline

set -euo pipefail

MODULE_NAME="com.example.myapp"
MAIN_CLASS="com.example.app.Main"
SOURCE_DIR="src"
OUTPUT_DIR="build"
RUNTIME_DIR="myapp-runtime"

echo "=== Cleaning ==="
rm -rf "$OUTPUT_DIR" "$RUNTIME_DIR"

echo "=== Compiling ==="
javac \
    -d "$OUTPUT_DIR" \
    --module-source-path "$SOURCE_DIR" \
    -m "$MODULE_NAME"

echo "=== Creating runtime image ==="
jlink \
    --module-path "$OUTPUT_DIR:$JAVA_HOME/jmods" \
    --add-modules "$MODULE_NAME" \
    --launcher "myapp=$MODULE_NAME/$MAIN_CLASS" \
    --compress=2 \
    --strip-debug \
    --no-header-files \
    --no-man-pages \
    --output "$RUNTIME_DIR"

echo "=== Running ==="
"$RUNTIME_DIR/bin/myapp"

echo "=== Runtime image size ==="
du -sh "$RUNTIME_DIR"
```

### 4.6 jlink with Maven (jlink-maven-plugin)

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-jlink-plugin</artifactId>
    <version>3.1.0</version>
    <configuration>
        <outputDirectory>${project.build.directory}/runtime</outputDirectory>
        <addModules>
            <module>com.example.myapp</module>
        </addModules>
        <launcher>
            <name>myapp</name>
            <module>com.example.myapp/com.example.app.Main</module>
        </launcher>
        <compress>2</compress>
        <stripDebug>true</stripDebug>
        <noHeaderFiles>true</noHeaderFiles>
        <noManPages>true</noManPages>
    </configuration>
    <executions>
        <execution>
            <phase>package</phase>
            <goals>
                <goal>jlink</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

---

## 5. jpackage: Native Installers

`jpackage` (incubated in Java 14, finalized in Java 16) packages a Java application into a native installer for Windows (MSI, EXE), macOS (DMG, PKG), or Linux (DEB, RPM).

### 5.1 jpackage from a JAR

```bash
# Step 1: Build your modular JAR
javac -d out --module-source-path src -m com.example.myapp

jar --create \
    --file myapp.jar \
    --main-class com.example.app.Main \
    -C out/com.example.myapp .

# Step 2: Create native installer
jpackage \
    --input . \
    --main-jar myapp.jar \
    --main-class com.example.app.Main \
    --module com.example.myapp \
    --name MyApp \
    --vendor "Example Corp" \
    --app-version "1.0.0" \
    --description "My Java application" \
    --type msi \
    --output dist

# On macOS:
# jpackage --type dmg --name MyApp --input . --main-jar myapp.jar ...

# On Linux:
# jpackage --type deb --name myapp --input . --main-jar myapp.jar ...
```

### 5.2 jpackage with jlink

`jpackage` can use a `jlink` runtime image for the bundled JRE:

```bash
# Build runtime image first
jlink \
    --module-path out:$JAVA_HOME/jmods \
    --add-modules com.example.myapp \
    --compress=2 \
    --strip-debug \
    --no-header-files \
    --no-man-pages \
    --output runtime-image

# Then package with the runtime image
jpackage \
    --runtime-image runtime-image \
    --module com.example.myapp/com.example.app.Main \
    --name MyApp \
    --vendor "Example Corp" \
    --app-version "1.0.0" \
    --type msi \
    --icon app-icon.ico \
    --output dist
```

### 5.3 jpackage Options

| Option | Description |
|--------|-------------|
| `--input` | Directory containing JARs (and optionally files to bundle) |
| `--main-jar` | Main JAR containing the entry point |
| `--main-class` | Fully qualified main class |
| `--module` | Module path to main class (e.g., `module/class`) |
| `--name` | Application name |
| `--app-version` | Version string |
| `--vendor` | Vendor string |
| `--description` | Description |
| `--icon` | Path to application icon (ICO for Windows, ICNS for macOS, PNG for Linux) |
| `--type` | Installer type: `msi`, `exe`, `dmg`, `pkg`, `deb`, `rpm` |
| `--runtime-image` | Path to a jlink-created runtime image |
| `--dest` / `--output` | Output directory |
| `--java-options` | Additional JVM arguments |
| `--app-image` | Instead of creating the app image, package an existing one |

### 5.4 Complete jpackage Build (Maven)

```xml
<plugin>
    <groupId>org.panteleyev.jpackage-maven-plugin</groupId>
    <artifactId>jpackage-maven-plugin</artifactId>
    <version>1.6.0</version>
    <configuration>
        <name>MyApp</name>
        <appVersion>${project.version}</appVersion>
        <vendor>Example Corp</vendor>
        <type>MSI</type>
        <icon>src/main/resources/icon.ico</icon>
        <module>com.example.myapp/com.example.app.Main</module>
        <runtimeImage>${project.build.directory}/runtime</runtimeImage>
        <javaOptions>
            <option>-Xmx512m</option>
            <option>-Dfile.encoding=UTF-8</option>
        </javaOptions>
    </configuration>
</plugin>
```

---

## 6. Multi-Module Projects with JPMS

Real applications are composed of multiple modules. Both Maven and Gradle can combine their own multi-module project structure with JPMS modules.

### 6.1 Maven Multi-Module with JPMS

**Project structure:**

```
my-app/
├── pom.xml                         (parent POM)
├── common/
│   ├── pom.xml
│   └── src/main/java/
│       ├── module-info.java        (module com.example.common)
│       └── com/example/common/
│           └── util/
│               ├── Strings.java
│               └── Validation.java
├── domain/
│   ├── pom.xml
│   └── src/main/java/
│       ├── module-info.java        (module com.example.domain)
│       └── com/example/domain/
│           ├── model/
│           │   └── User.java
│           └── repository/
│               └── UserRepository.java
├── service/
│   ├── pom.xml
│   └── src/main/java/
│       ├── module-info.java        (module com.example.service)
│       └── com/example/service/
│           └── UserService.java
└── application/
    ├── pom.xml
    └── src/main/java/
        ├── module-info.java        (module com.example.application)
        └── com/example/app/
            └── Main.java
```

**Parent POM (`pom.xml`):**

```xml
<project>
    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0.0</version>
    <packaging>pom</packaging>

    <modules>
        <module>common</module>
        <module>domain</module>
        <module>service</module>
        <module>application</module>
    </modules>

    <properties>
        <maven.compiler.source>21</maven.compiler.source>
        <maven.compiler.target>21</maven.compiler.target>
    </properties>
</project>
```

**Common module's `module-info.java`:**

```java
module com.example.common {
    exports com.example.common.util;
}
```

**Domain module's `module-info.java`:**

```java
module com.example.domain {
    requires com.example.common;

    exports com.example.domain.model;
    exports com.example.domain.repository;

    // JPA entities need reflective access
    opens com.example.domain.model to
        org.hibernate.orm,
        spring.beans,
        spring.core;
}
```

**Service module's `module-info.java`:**

```java
module com.example.service {
    requires com.example.common;
    requires com.example.domain;
    requires java.sql;

    exports com.example.service;

    // Spring needs reflective access for DI
    opens com.example.service to
        spring.beans,
        spring.core,
        spring.context;
}
```

**Application module's `module-info.java`:**

```java
module com.example.application {
    requires com.example.common;
    requires com.example.domain;
    requires com.example.service;

    // Spring Boot launcher
    requires spring.boot;
    requires spring.boot.autoconfigure;

    // Open entire module for Spring (simplest approach)
    opens com.example.app to
        spring.beans,
        spring.core,
        spring.context,
        spring.boot;
}
```

### 6.2 Gradle Multi-Project with JPMS

**`settings.gradle`:**

```groovy
rootProject.name = 'my-app'
include 'common'
include 'domain'
include 'service'
include 'application'
```

**`build.gradle` (root):**

```groovy
subprojects {
    apply plugin: 'java'

    java {
        modularity.inferModulePath = true
    }

    tasks.withType(JavaCompile) {
        options.compilerArgs += ['--module-source-path', 'src/main/java']
    }
}
```

**`domain/build.gradle`:**

```groovy
dependencies {
    implementation project(':common')
}

java {
    modularity.inferModulePath = true
}
```

### 6.3 The Split-Package Problem

A **split package** occurs when the same Java package exists in two different modules on the module path. This is illegal in JPMS and causes a resolution error.

```java
// WRONG — will crash:
// lib-core.jar contains: com.example.util.Strings
// lib-extra.jar contains: com.example.util.Dates
// Both are in the "com.example.util" package.
//
// Error: package com.example.util exists in multiple modules:
//        lib.core, lib.extra
```

**How to avoid split packages:**

```java
// Solution 1: Restructure packages (rename one)
// lib-core.jar: com.example.core.util.Strings
// lib-extra.jar: com.example.extra.util.Dates

// Solution 2: Merge the JARs (combine into one module)
// lib-all.jar contains both classes in com.example.util

// Solution 3: Use the classpath for conflicting JARs
// If one library cannot be changed, put it on the classpath
// so it becomes part of the unnamed module.
```

### 6.4 Circular Dependencies

JPMS does **not** allow circular dependencies between modules at compile time or runtime.

```java
// ILLEGAL — circular dependency:
// module com.example.a { requires com.example.b; }
// module com.example.b { requires com.example.a; }
//
// Error: Cycle detected: com.example.a -> com.example.b -> com.example.a
```

**How to break cycles:**

```java
// Solution 1: Extract shared types into a third module
// module com.example.common { /* shared types */ }
// module com.example.a { requires com.example.common; }
// module com.example.b { requires com.example.common; }

// Solution 2: Use interfaces in one direction
// module com.example.contracts { exports com.example.contracts; }
// module com.example.impl { requires com.example.contracts; }
// module com.example.app {
//     requires com.example.contracts;
//     requires com.example.impl;
// }

// Solution 3: Invert the dependency using ServiceLoader
// module com.example.spi {
//     exports com.example.spi;
//     uses com.example.spi.Plugin;
// }
// module com.example.plugin {
//     requires com.example.spi;
//     provides com.example.spi.Plugin with com.example.plugin.MyPlugin;
// }
```

### 6.5 Module Graph Visualization

```bash
# Show the module graph as a tree
jdeps --module-path build --module com.example.application

# Output:
# com.example.application
# ├-> java.base
# ├-> com.example.common
# ├-> com.example.domain
# |   └-> com.example.common
# |   └-> java.sql
# └-> com.example.service
#     ├-> com.example.common
#     └-> com.example.domain
#         └-> ...
```

---

## 7. Migration Strategies

Migrating an existing Java application to JPMS requires careful planning. Here is a step-by-step approach.

### 7.1 Step 1: Run jdeps

`jdeps` analyzes your existing JARs and tells you what you need for JPMS.

```bash
# Analyze a JAR for module dependencies
jdeps -summary -recursive myapp.jar

# Output:
# myapp.jar -> java.base
# myapp.jar -> java.sql
# myapp.jar -> com.google.guice
# myapp.jar -> org.apache.logging.log4j

# Generate module-info.java hints
jdeps --generate-module-info out myapp.jar

# This creates out/myapp/module-info.java with suggested module info
```

### 7.2 Step 2: Add Automatic-Module-Name

For JARs you control but cannot yet fully modularize, add an `Automatic-Module-Name` entry to `MANIFEST.MF`:

```java
// In your build tool:
// Maven — maven-jar-plugin:
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-jar-plugin</artifactId>
    <configuration>
        <archive>
            <manifestEntries>
                <Automatic-Module-Name>com.example.legacy</Automatic-Module-Name>
            </manifestEntries>
        </archive>
    </configuration>
</plugin>

// Gradle — jar task:
jar {
    manifest {
        attributes 'Automatic-Module-Name': 'com.example.legacy'
    }
}
```

This gives the JAR a stable module name when placed on the module path as an automatic module.

### 7.3 Step 3: Use --add-exports, --add-opens, --add-reads

During migration, you may need to work around modules that do not export or open packages you need.

```bash
# --add-exports: make a package compile-time accessible
# Syntax: --add-exports source-module/package=target-module
java \
    --add-exports java.base/com.sun.crypto.provider=ALL-UNNAMED \
    --module-path lib \
    --module com.example.myapp

# --add-opens: make a package reflectively accessible
# Syntax: --add-opens source-module/package=target-module
java \
    --add-opens java.base/java.lang=ALL-UNNAMED \
    --add-opens java.base/java.util=com.example.framework \
    --module-path lib \
    --module com.example.myapp

# --add-reads: add a readability edge that module-info doesn't declare
# Syntax: --add-reads source-module=target-module
java \
    --add-reads com.example.myapp=java.desktop \
    --module-path lib \
    --module com.example.myapp
```

**Using in Maven (maven-compiler-plugin):**

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.12.1</version>
    <configuration>
        <compilerArgs>
            <arg>--add-exports</arg>
            <arg>java.base/com.sun.crypto.provider=ALL-UNNAMED</arg>
        </compilerArgs>
    </configuration>
</plugin>
```

**Using in Gradle:**

```groovy
tasks.withType(JavaCompile) {
    options.compilerArgs += [
        '--add-exports', 'java.base/com.sun.crypto.provider=ALL-UNNAMED'
    ]
}

tasks.withType(JavaExec) {
    jvmArgs += [
        '--add-opens', 'java.base/java.lang=ALL-UNNAMED'
    ]
}
```

### 7.4 Step 4: --illegal-access

In Java 9, the default behavior was `--illegal-access=permit` (warn on first reflective access to internal API). Java 16 made the default `--illegal-access=deny`, which means any reflective access to internal packages that are not opened will throw an `InaccessibleObjectException`.

```bash
# Java 9-15 default:
java --illegal-access=permit -jar myapp.jar
# Shows one warning per illegal reflective access but allows it

# Java 16+ default (and Java 9-15 explicit deny):
java --illegal-access=deny -jar myapp.jar
# Throws InaccessibleObjectException on first illegal access

# To allow illegal access during migration (temporary!):
java --add-opens java.base/java.lang=ALL-UNNAMED -jar myapp.jar
```

### 7.5 Migration Checklist

| Step | Description | Tool / Action |
|------|-------------|---------------|
| 1 | Analyze dependencies | `jdeps -summary -recursive app.jar` |
| 2 | Identify third-party JARs that have module-info | Check `jar --describe-module --file lib.jar` |
| 3 | Add Automatic-Module-Name to JARs you maintain | `MANIFEST.MF` entry |
| 4 | Place all JARs on module path | `--module-path lib` |
| 5 | Resolve missing-module errors | `--add-modules` or add JARs |
| 6 | Resolve split-package errors | Restructure packages or use classpath for conflict |
| 7 | Resolve export errors | `--add-exports` or add `exports` to your module |
| 8 | Resolve reflective-access errors | `--add-opens` or add `opens` to your module |
| 9 | Add module-info.java to your application | Write it from jdeps hints |
| 10 | Remove workarounds | Delete `--add-exports`/`--add-opens` that are no longer needed |
| 11 | Test thoroughly | Verify both compile and runtime |

### 7.6 jdeps in Depth

```bash
# Full analysis of a JAR
jdeps \
    -verbose:class \
    --module-path lib \
    --add-modules ALL-MODULE-PATH \
    myapp.jar

# Generate module-info.java hint
jdeps \
    --generate-module-info generated-modules \
    myapp.jar

# Check for JDK internal API usage
jdeps \
    --jdk-internals \
    myapp.jar

# Output:
# myapp.jar -> JDK removed internal API
# Warning: com.example.util.XmlParser uses
//     sun.security.provider.X509Factory (internal API)
# Warning: com.example.util.CryptoHelper uses
//     com.sun.crypto.provider.AESCipher (internal API)
```

---

## 8. Spring Boot and JPMS

Spring Boot interacts with JPMS in several important ways. Understanding these interactions is critical for running Spring Boot applications on the module path.

### 8.1 Spring's Use of opens

Spring Framework relies heavily on reflection for dependency injection, AOP proxies, and configuration property binding. For Spring to work with JPMS, the packages containing Spring beans must be opened.

```java
// Every Spring bean package needs to be opened for Spring's reflection
module com.example.shop {
    requires spring.boot;
    requires spring.boot.autoconfigure;
    requires spring.context;
    requires spring.beans;

    // Spring needs to reflectively access these packages for DI
    opens com.example.shop.controller to spring.beans, spring.core, spring.context;
    opens com.example.shop.service to spring.beans, spring.core, spring.context;
    opens com.example.shop.repository to spring.beans, spring.core, spring.context;

    // Configuration classes (with @Configuration, @Bean methods)
    opens com.example.shop.config to spring.beans, spring.core, spring.context;

    // Exported API (compile-time access, not just reflection)
    exports com.example.shop.dto;
    exports com.example.shop.api;
}
```

### 8.2 JPA Entities in Modules

JPA entities require reflective access for Hibernate to instantiate proxies, read field annotations, and set field values.

```java
module com.example.entities {
    requires jakarta.persistence;
    requires org.hibernate.orm;

    exports com.example.entities;

    // Required for Hibernate lazy-loading proxies and field access
    opens com.example.entities to
        org.hibernate.orm,
        spring.beans,
        spring.core;
}
```

```java
package com.example.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String email;

    private String displayName;

    // Hibernate requires the no-arg constructor (reflectively invoked)
    protected User() {}

    // Constructor for application code
    public User(String email, String displayName) {
        this.email = email;
        this.displayName = displayName;
    }

    // Getters and setters — Hibernate uses reflection to set fields
    // even without setters if FieldAccessType.FIELD is configured
    public Long getId() { return id; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getDisplayName() { return displayName; }
    public void setDisplayName(String displayName) { this.displayName = displayName; }
}
```

### 8.3 Auto-Configuration in Modular JARs

Spring Boot's auto-configuration depends on `spring.factories` files (now `AutoConfiguration.imports`). On the module path, these files are still loaded from `META-INF/spring/` directories inside JARs. The key requirement is that the auto-configuration classes themselves must be accessible.

```java
// In a Spring Boot starter JAR with module-info.java:
module com.example.starter {
    requires spring.boot;
    requires spring.boot.autoconfigure;
    requires spring.context;

    // Export the auto-configuration packages (needed for
    // SpringFactoriesLoader or AutoConfiguration.imports to work)
    exports com.example.starter.autoconfigure;

    // Spring also needs reflective access to instantiate
    // @Configuration classes and process @Conditional annotations
    opens com.example.starter.autoconfigure to
        spring.beans,
        spring.core,
        spring.boot,
        spring.boot.autoconfigure;
}
```

### 8.4 Spring Boot Starter Pattern with JPMS

```java
// Complete module-info.java for a custom Spring Boot starter

module com.example.monitoring.starter {
    // Core Spring Boot dependencies
    requires spring.boot;
    requires spring.boot.autoconfigure;
    requires spring.context;
    requires spring.beans;
    requires spring.core;

    // Application dependencies
    requires io.micrometer.core;
    requires com.example.monitoring.core;
    requires java.management;

    // Export auto-configuration for Spring Boot's scanning
    exports com.example.monitoring.starter.autoconfigure;

    // Open configuration classes for Spring's reflective processing
    opens com.example.monitoring.starter.autoconfigure to
        spring.core,
        spring.beans,
        spring.boot,
        spring.boot.autoconfigure;

    // Open health indicators for actuator integration
    opens com.example.monitoring.starter.health to
        spring.core,
        spring.beans,
        org.springframework.boot.actuate;
}
```

### 8.5 open module for Spring Boot Applications

The simplest migration path for Spring Boot applications is often an `open module` declaration:

```java
// Open module — all packages are open for reflection
// Export only what other modules need at compile time
open module com.example.myapp {
    requires spring.boot;
    requires spring.boot.autoconfigure;
    requires spring.context;
    requires spring.beans;
    requires spring.data.jpa;
    requires jakarta.persistence;
    requires org.hibernate.orm;
    requires java.sql;

    // Only export what other modules (e.g., test) need
    exports com.example.myapp.dto;
    exports com.example.myapp.api;

    // Internal packages (service, repository, controller) are
    // NOT exported BUT are open for reflection because of
    // the "open module" declaration at the top
}
```

This is the recommended starting point for Spring Boot applications migrating to JPMS. You can gradually tighten encapsulation later by removing `open` and adding targeted `opens` declarations.

### 8.6 SpringFactoriesLoader vs ServiceLoader

Spring Boot's `SpringFactoriesLoader` (and its successor `AutoConfiguration.imports`) provides similar functionality to `ServiceLoader` but is classpath-based rather than module-path-based.

```java
// Spring's approach — META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports:
// com.example.monitoring.starter.autoconfigure.MonitoringAutoConfiguration

// This file is loaded by SpringFactoriesLoader, which scans the classpath
// for all META-INF/spring/ files with the matching name.
// It does NOT use JPMS ServiceLoader. This means on the module path,
// the auto-configuration class must be in an exported or opened package.
```

**Bridging the two approaches:**

```java
// You can use both mechanisms:

// 1. Spring AutoConfiguration.imports (for Spring Boot)
// 2. provides with ServiceLoader (for Java's standard service loading)

module com.example.starter {
    exports com.example.starter.autoconfigure;
    exports com.example.starter.spi;

    // For Spring Boot (via AutoConfiguration.imports file):
    opens com.example.starter.autoconfigure to
        spring.boot.autoconfigure;

    // For Java's ServiceLoader:
    provides com.example.starter.spi.HealthReporter
        with com.example.starter.spi.internal.DefaultHealthReporter;

    uses com.example.starter.spi.HealthReporter;
}
```

---

## 9. Complete Multi-Module JPMS Example

This section presents a complete, compilable multi-module project that demonstrates all the concepts discussed.

### 9.1 Project Structure

```
banking-app/
├── build.sh                           # Compilation script
├── banking-api/
│   ├── module-info.java               # com.example.banking.api
│   └── com/example/banking/api/
│       ├── AccountService.java
│       └── Account.java
├── banking-impl/
│   ├── module-info.java               # com.example.banking.impl
│   └── com/example/banking/impl/
│       ├── AccountServiceImpl.java
│       ├── InMemoryAccountRepository.java
│       └── InternalValidator.java
├── banking-persistence/
│   ├── module-info.java               # com.example.banking.persistence
│   └── com/example/banking/persistence/
│       ├── JpaAccountRepository.java
│       └── AccountEntity.java
├── banking-reporting/
│   ├── module-info.java               # com.example.banking.reporting
│   └── com/example/banking/reporting/
│       ├── CsvReportExporter.java
│       └── ReportGenerator.java
├── banking-app/
│   ├── module-info.java               # com.example.banking.app
│   └── com/example/banking/app/
│       └── Main.java
└── banking-spi/
    ├── module-info.java               # com.example.banking.spi
    └── com/example/banking/spi/
        └── ReportExporter.java
```

### 9.2 banking-api — Public API

```java
// banking-api/src/main/java/com/example/banking/api/Account.java
package com.example.banking.api;

import java.math.BigDecimal;
import java.util.Objects;

public class Account {
    private final String id;
    private final String owner;
    private BigDecimal balance;

    public Account(String id, String owner, BigDecimal balance) {
        this.id = Objects.requireNonNull(id);
        this.owner = Objects.requireNonNull(owner);
        this.balance = balance != null ? balance : BigDecimal.ZERO;
    }

    public String getId() { return id; }
    public String getOwner() { return owner; }
    public BigDecimal getBalance() { return balance; }

    public void deposit(BigDecimal amount) {
        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Deposit must be positive");
        }
        balance = balance.add(amount);
    }

    public void withdraw(BigDecimal amount) {
        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Withdrawal must be positive");
        }
        if (amount.compareTo(balance) > 0) {
            throw new IllegalArgumentException("Insufficient funds");
        }
        balance = balance.subtract(amount);
    }
}
```

```java
// banking-api/src/main/java/com/example/banking/api/AccountService.java
package com.example.banking.api;

import java.util.Optional;

public interface AccountService {
    Account createAccount(String owner);
    Optional<Account> findAccount(String id);
    void transfer(String fromId, String toId, java.math.BigDecimal amount);
}
```

```java
// banking-api/src/main/java/module-info.java
module com.example.banking.api {
    exports com.example.banking.api;
}
```

### 9.3 banking-spi — Service Provider Interface

```java
// banking-spi/src/main/java/com/example/banking/spi/ReportExporter.java
package com.example.banking.spi;

import com.example.banking.api.Account;
import java.util.List;

public interface ReportExporter {
    String getFormatName();
    byte[] export(List<Account> accounts);
}
```

```java
// banking-spi/src/main/java/module-info.java
module com.example.banking.spi {
    requires com.example.banking.api;

    exports com.example.banking.spi;

    uses com.example.banking.spi.ReportExporter;
}
```

### 9.4 banking-persistence — Data Access

```java
// banking-persistence/src/main/java/com/example/banking/persistence/AccountEntity.java
package com.example.banking.persistence;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "accounts")
public class AccountEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    private String owner;

    @Column(nullable = false, precision = 19, scale = 4)
    private BigDecimal balance;

    protected AccountEntity() {}

    public AccountEntity(String owner, BigDecimal balance) {
        this.owner = owner;
        this.balance = balance;
    }

    public String getId() { return id; }
    public String getOwner() { return owner; }
    public BigDecimal getBalance() { return balance; }
    public void setBalance(BigDecimal balance) { this.balance = balance; }
}
```

```java
// banking-persistence/src/main/java/com/example/banking/persistence/JpaAccountRepository.java
package com.example.banking.persistence;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import java.util.Optional;

public class JpaAccountRepository {
    private final EntityManagerFactory emf;

    public JpaAccountRepository() {
        this.emf = Persistence.createEntityManagerFactory("banking-pu");
    }

    public void save(AccountEntity entity) {
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(entity);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

    public Optional<AccountEntity> findById(String id) {
        EntityManager em = emf.createEntityManager();
        try {
            return Optional.ofNullable(em.find(AccountEntity.class, id));
        } finally {
            em.close();
        }
    }
}
```

```java
// banking-persistence/src/main/java/module-info.java
module com.example.banking.persistence {
    requires jakarta.persistence;
    requires org.hibernate.orm;

    exports com.example.banking.persistence;

    // Hibernate needs reflective access to entities
    opens com.example.banking.persistence to
        org.hibernate.orm,
        spring.beans,
        spring.core;
}
```

### 9.5 banking-impl — Implementation

```java
// banking-impl/src/main/java/com/example/banking/impl/InternalValidator.java
package com.example.banking.impl;

import java.math.BigDecimal;

// This class is intentionally NOT exported — it is internal implementation
class InternalValidator {
    static void validateAmount(BigDecimal amount) {
        if (amount == null) {
            throw new NullPointerException("Amount must not be null");
        }
        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException(
                "Amount must be positive: " + amount);
        }
        if (amount.scale() > 4) {
            throw new IllegalArgumentException(
                "Too many decimal places: " + amount);
        }
    }
}
```

```java
// banking-impl/src/main/java/com/example/banking/impl/AccountServiceImpl.java
package com.example.banking.impl;

import com.example.banking.api.Account;
import com.example.banking.api.AccountService;
import com.example.banking.persistence.AccountEntity;
import com.example.banking.persistence.JpaAccountRepository;
import java.math.BigDecimal;
import java.util.Optional;

public class AccountServiceImpl implements AccountService {

    private final JpaAccountRepository repository;

    public AccountServiceImpl() {
        this.repository = new JpaAccountRepository();
    }

    @Override
    public Account createAccount(String owner) {
        AccountEntity entity = new AccountEntity(owner, BigDecimal.ZERO);
        repository.save(entity);
        return toAccount(entity);
    }

    @Override
    public Optional<Account> findAccount(String id) {
        return repository.findById(id).map(this::toAccount);
    }

    @Override
    public void transfer(String fromId, String toId, BigDecimal amount) {
        InternalValidator.validateAmount(amount);

        AccountEntity from = repository.findById(fromId)
            .orElseThrow(() -> new IllegalArgumentException(
                "Source account not found: " + fromId));
        AccountEntity to = repository.findById(toId)
            .orElseThrow(() -> new IllegalArgumentException(
                "Target account not found: " + toId));

        InternalValidator.validateAmount(from.getBalance()
            .subtract(amount));
        from.setBalance(from.getBalance().subtract(amount));
        to.setBalance(to.getBalance().add(amount));

        repository.save(from);
        repository.save(to);
    }

    private Account toAccount(AccountEntity entity) {
        return new Account(
            entity.getId(),
            entity.getOwner(),
            entity.getBalance()
        );
    }
}
```

```java
// banking-impl/src/main/java/com/example/banking/impl/InMemoryAccountRepository.java
package com.example.banking.impl;

import com.example.banking.api.Account;
import java.math.BigDecimal;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

public class InMemoryAccountRepository {
    private final Map<String, Account> accounts = new ConcurrentHashMap<>();
    private final AtomicLong idGen = new AtomicLong(1);

    public Account createAccount(String owner) {
        String id = String.valueOf(idGen.getAndIncrement());
        Account account = new Account(id, owner, BigDecimal.ZERO);
        accounts.put(id, account);
        return account;
    }

    public Optional<Account> findById(String id) {
        return Optional.ofNullable(accounts.get(id));
    }

    public void save(Account account) {
        accounts.put(account.getId(), account);
    }
}
```

```java
// banking-impl/src/main/java/module-info.java
module com.example.banking.impl {
    requires com.example.banking.api;
    requires com.example.banking.persistence;
    requires java.sql;

    exports com.example.banking.impl;

    // InternalValidator is package-private, so it is not exported
    // and not accessible outside this module
}
```

### 9.6 banking-reporting — ServiceLoader Provider

```java
// banking-reporting/src/main/java/com/example/banking/reporting/ReportGenerator.java
package com.example.banking.reporting;

import com.example.banking.api.Account;
import com.example.banking.spi.ReportExporter;
import java.util.List;
import java.util.ServiceLoader;

public class ReportGenerator {

    private final ServiceLoader<ReportExporter> exporterLoader;

    public ReportGenerator() {
        this.exporterLoader = ServiceLoader.load(ReportExporter.class);
    }

    public void generateAllReports(List<Account> accounts) {
        for (ReportExporter exporter : exporterLoader) {
            byte[] data = exporter.export(accounts);
            System.out.printf("Generated %s report: %d bytes%n",
                exporter.getFormatName(), data.length);
        }
    }

    public void generateNamedReport(String format, List<Account> accounts) {
        exporterLoader.stream()
            .filter(p -> p.get().getFormatName().equalsIgnoreCase(format))
            .findFirst()
            .ifPresentOrElse(
                p -> {
                    byte[] data = p.get().export(accounts);
                    System.out.printf("Generated %s report: %d bytes%n",
                        format, data.length);
                },
                () -> System.out.printf("No exporter found for format: %s%n", format)
            );
    }
}
```

```java
// banking-reporting/src/main/java/com/example/banking/reporting/CsvReportExporter.java
package com.example.banking.reporting;

import com.example.banking.api.Account;
import com.example.banking.spi.ReportExporter;
import java.util.List;
import java.util.stream.Collectors;

public class CsvReportExporter implements ReportExporter {
    @Override
    public String getFormatName() {
        return "CSV";
    }

    @Override
    public byte[] export(List<Account> accounts) {
        String csv = accounts.stream()
            .map(a -> String.format("%s,%s,%.2f",
                a.getId(), a.getOwner(), a.getBalance()))
            .collect(Collectors.joining("\n", "id,owner,balance\n", ""));
        return csv.getBytes();
    }
}
```

```java
// banking-reporting/src/main/java/module-info.java
module com.example.banking.reporting {
    requires com.example.banking.api;
    requires com.example.banking.spi;

    exports com.example.banking.reporting;

    // Declare that we provide a ReportExporter implementation
    provides com.example.banking.spi.ReportExporter
        with com.example.banking.reporting.CsvReportExporter;
}
```

### 9.7 banking-app — Main Application

```java
// banking-app/src/main/java/com/example/banking/app/Main.java
package com.example.banking.app;

import com.example.banking.api.Account;
import com.example.banking.api.AccountService;
import com.example.banking.impl.AccountServiceImpl;
import com.example.banking.reporting.ReportGenerator;
import java.math.BigDecimal;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Banking Application ===\n");

        AccountService service = new AccountServiceImpl();

        // Create accounts
        Account alice = service.createAccount("Alice");
        Account bob = service.createAccount("Bob");

        System.out.printf("Created: %s (%s) — balance: $%.2f%n",
            alice.getId(), alice.getOwner(), alice.getBalance());
        System.out.printf("Created: %s (%s) — balance: $%.2f%n",
            bob.getId(), bob.getOwner(), bob.getBalance());

        // Deposit
        alice.deposit(new BigDecimal("1000.00"));
        System.out.printf("%nAlice deposited $1000. New balance: $%.2f%n",
            alice.getBalance());

        // Transfer
        service.transfer(alice.getId(), bob.getId(),
            new BigDecimal("250.00"));

        // Check balances
        System.out.printf("\nAfter transfer of $250:%n");
        System.out.printf("  Alice: $%.2f%n",
            service.findAccount(alice.getId())
                .map(Account::getBalance).orElse(BigDecimal.ZERO));
        System.out.printf("  Bob:   $%.2f%n",
            service.findAccount(bob.getId())
                .map(Account::getBalance).orElse(BigDecimal.ZERO));

        // Generate reports
        System.out.println("\n=== Reports ===");
        ReportGenerator reports = new ReportGenerator();
        List<Account> allAccounts = List.of(alice, bob);
        reports.generateAllReports(allAccounts);

        System.out.println("\nDone.");
    }
}
```

```java
// banking-app/src/main/java/module-info.java
module com.example.banking.app {
    requires com.example.banking.api;
    requires com.example.banking.impl;
    requires com.example.banking.reporting;
    requires com.example.banking.spi;

    // Main class is internal — no exports needed
}
```

### 9.8 Build Script

```bash
#!/bin/bash
# build.sh — Compile and run the banking application
set -euo pipefail

SRC="src"
OUT="build"
MODULES="com.example.banking.api,com.example.banking.spi,com.example.banking.persistence,com.example.banking.impl,com.example.banking.reporting,com.example.banking.app"
MAIN="com.example.banking.app/com.example.banking.app.Main"

echo "=== Cleaning ==="
rm -rf "$OUT"

echo "=== Compiling ==="
javac \
    -d "$OUT" \
    --module-source-path "$SRC" \
    -m "$MODULES"

echo "=== Running ==="
java \
    --module-path "$OUT" \
    -m "$MAIN"

echo "=== Creating runtime image ==="
jlink \
    --module-path "$OUT:$JAVA_HOME/jmods" \
    --add-modules "$MODULES" \
    --launcher "banking=$MAIN" \
    --compress=2 \
    --strip-debug \
    --no-header-files \
    --no-man-pages \
    --output banking-runtime

echo ""
echo "Run with: ./banking-runtime/bin/banking"
```

---

## 10. Advanced Module Patterns

### 10.1 Selective Export with Qualified Exports

```java
module com.example.framework {
    // Everyone can use the public API
    exports com.example.framework.api;

    // Only internal modules can access the SPI
    exports com.example.framework.spi to
        com.example.framework.impl,
        com.example.framework.ext;

    // Secret experimental API — only our test module
    exports com.example.framework.experimental to
        com.example.framework.test;
}
```

### 10.2 Multi-Release JARs with Module Info

Multi-release JARs (MRJARs) can include a `module-info.class` in the Java 9+ versioned directory:

```
my-lib.jar
├── META-INF/
│   ├── MANIFEST.MF
│   └── versions/
│       └── 9/
│           └── module-info.class    ← JPMS descriptor for Java 9+
├── com/
│   └── example/
│       └── lib/
│           └── Util.class
└── module-info.class                ← Fallback (Java 9, same content)
```

```java
// META-INF/versions/9/module-info.class (compiled from:)
module com.example.lib {
    exports com.example.lib;
}
```

### 10.3 Module Layers

JPMS supports multiple module layers for advanced scenarios like application servers and IDEs:

```java
import java.lang.module.*;
import java.util.List;

public class ModuleLayerExample {
    public static void main(String[] args) {
        // Create a new module layer from an existing boot layer
        ModuleLayer bootLayer = ModuleLayer.boot();

        ModuleFinder finder = ModuleFinder.of(
            Path.of("plugins"));

        Set<String> pluginModules = Set.of("com.example.plugin");

        Configuration config = bootLayer.configuration()
            .resolve(finder,
                ModuleFinder.of(),
                pluginModules);

        ClassLoader scl = ClassLoader.getSystemClassLoader();
        ModuleLayer pluginLayer = bootLayer.defineModules(
            config, List.of(scl),
            layer -> new ClassLoader(scl) { /* custom loader */ }
        );

        // Load a class from the new layer
        Class<?> pluginClass = pluginLayer
            .findLoader("com.example.plugin")
            .loadClass("com.example.plugin.PluginMain");
    }
}
```

### 10.4 Module Annotations

Modules themselves can be annotated:

```java
// Define a module-level annotation
package com.example.annotations;

import java.lang.annotation.*;

@Retention(RetentionPolicy.CLASS)
@Target(ElementType.MODULE)
public @interface ModuleMetadata {
    String version();
    String description() default "";
    String[] authors() default {};
}
```

```java
// Use it on a module
@ModuleMetadata(
    version = "1.0.0",
    description = "Core domain module",
    authors = {"Alice", "Bob"}
)
module com.example.domain {
    exports com.example.domain.model;
}
```

Module annotations are stored in `module-info.class` and can be read via `Module.getAnnotation()`:

```java
Module module = ModuleLayer.boot()
    .findModule("com.example.domain")
    .orElseThrow();

ModuleMetadata meta = module.getAnnotation(ModuleMetadata.class);
if (meta != null) {
    System.out.printf("Module version: %s%n", meta.version());
}
```

---

## Summary

The Java Platform Module System represents the most significant architectural change to Java since its inception. This chapter covered:

- **Motivation**: JPMS solves JAR hell, weak encapsulation, monolithic JDK, and unreliable configuration through explicit module declarations and a resolved module graph.

- **module-info.java**: The core declaration file using `requires` (including `transitive` and `static`), `exports` (including qualified `exports to`), `opens` (including qualified `opens to`), `provides`/`uses` for ServiceLoader, and `permits` for sealed modules.

- **Module types**: Named modules (full encapsulation, explicit module-info), automatic modules (bridge from JARs lacking module-info, derived name from `Automatic-Module-Name`), and unnamed modules (classpath fallback, cannot be required by named modules).

- **ServiceLoader**: The standard Java service-provider loading mechanism, contrast with Spring Boot's `SpringFactoriesLoader`, lazy loading via `ServiceLoader.Stream`.

- **jlink**: Custom runtime image creation that reduces JDK size from ~300 MB to ~20–50 MB, with options for compression, debug stripping, launcher creation, and header/man-page removal.

- **jpackage**: Native installer generation for Windows (MSI/EXE), macOS (DMG/PKG), and Linux (DEB/RPM), with bundling of JRE via jlink images.

- **Multi-module projects**: Structuring Maven/Gradle projects with JPMS, avoiding split-package problems (same package in multiple modules), breaking circular dependencies (extract shared module, invert via ServiceLoader).

- **Migration strategies**: Using `jdeps` to analyze dependencies, adding `Automatic-Module-Name` to JARs, applying `--add-exports`, `--add-opens`, and `--add-reads` as temporary workarounds, following the migration checklist from analysis through full modularization.

- **Spring Boot integration**: Opening packages for Spring's reflection, configuring JPA entity modules, designing auto-configuration for modular JARs, and using the `open module` declaration as a pragmatic starting point.

JPMS is not an all-or-nothing proposition. You can migrate incrementally, starting with the automatic-module-name pattern, moving to a single application module, and gradually decomposing into finer-grained modules as the dependency structure clarifies. The module system pays dividends immediately in startup-time validation, reduced runtime size (via jlink), and enforced architectural boundaries that prevent accidental coupling.

---

## Exercises

### Review Questions

1. What problem does `requires transitive` solve? Give an example where it is necessary.

2. Explain the difference between `exports` and `opens`. Why does a framework like Hibernate need `opens` even when the package is `exports`ed?

3. What is a split package and why does JPMS forbid it? How would you fix a split-package conflict when using two third-party libraries?

4. Describe the three types of modules in JPMS. How does an automatic module differ from a named module regarding encapsulation?

5. What happens at startup when a required module is missing from the module path? How is this different from a missing JAR on the classpath?

6. Why does `open module` exist? When would you choose `open module` over individual `opens` declarations?

7. What is the difference between `ServiceLoader` (JPMS) and Spring Boot's `SpringFactoriesLoader`? List two advantages of each.

8. How does `jlink` reduce the size of a Java application? Name three flags that minimize the output size.

### Application Problems

9. **Write a module-info.java**: Given the following packages and dependencies, write a `module-info.java`:

   - Module name: `com.example.orders`
   - Packages: `com.example.orders.api`, `com.example.orders.internal`, `com.example.orders.model`
   - Dependencies: `java.sql`, `com.example.users`, `com.example.payments`
   - API package should be exported to all consumers
   - Model package should be exported but also opened for Hibernate
   - Internal package should not be accessible to anyone
   - The module should use `ReportService` from `com.example.reporting.spi`

10. **Migrate with jdeps**: You have a legacy `myapp.jar` that has been analyzed by `jdeps`. The report shows it uses `com.sun.crypto.provider` (internal JDK API), requires `java.sql`, and depends on `guice-5.0.jar` (which has no module-info). Write the `module-info.java`, the command to compile with `--add-exports`, and the command to run with the necessary flags.

11. **jlink pipeline**: Write a complete bash script that compiles a modular application named `com.example.tool` (main class `com.example.tool.Cli`), creates a custom runtime image with compression and debug stripping, generates a launcher named `tool`, and creates a Linux DEB package. Assume the module depends on `java.base` and `java.sql` only.

12. **ServiceLoader contract**: Create three modules:
    - `com.example.search.spi` — defines `SearchEngine` interface with method `List<Result> search(String query)`
    - `com.example.search.simple` — provides a simple `SimpleSearchEngine` implementation
    - `com.example.search.app` — uses ServiceLoader to discover and invoke all `SearchEngine` providers
    Write all `module-info.java` files and the ServiceLoader iteration code.

13. **Multi-module graph**: You have modules `A`, `B`, `C`, `D`, `E` with the following dependencies:
    - A requires B, C
    - B requires D
    - C requires D, E
    - D requires java.sql
    - E requires java.base only

    Draw the module dependency graph. Is there a diamond dependency? Where would you use `requires transitive` if D's public API includes `java.sql.Connection`?

14. **Spring Boot open module**: Write the `module-info.java` for a Spring Boot application module named `com.example.blog` that contains packages:
    - `com.example.blog.controller` (Spring MVC controllers)
    - `com.example.blog.service` (Spring @Service classes)
    - `com.example.blog.repository` (Spring Data JPA repositories)
    - `com.example.blog.model` (JPA entities)
    - `com.example.blog.dto` (data transfer objects)
    - `com.example.blog.config` (Spring @Configuration classes)

    The module depends on `spring.boot`, `spring.boot.autoconfigure`, `spring.context`, `spring.beans`, `spring.data.jpa`, `jakarta.persistence`. Only DTOs need compile-time access. All other packages need reflective access for Spring and Hibernate.

### Challenge Problems

15. **Module layer classloader**: Write a program that uses `ModuleLayer.defineModules` to load a plugin module from a separate directory at runtime. The plugin should implement a `Plugin` interface from a common SPI module. Demonstrate that the plugin can be instantiated and its methods called, and that it cannot access the main application's internal classes.

16. **Gradual migration refactoring**: You have a monolithic JAR with these packages:
    - `com.example.app.main` (entry point)
    - `com.example.app.api` (public interfaces)
    - `com.example.app.impl` (implementations — depends on api)
    - `com.example.app.model` (data classes)
    - `com.example.app.dao` (database access — depends on model)
    - `com.example.app.util` (utilities — depends on nothing)

    Design a refactoring plan that splits this into four JPMS modules (`api`, `model`, `dao`, `app`) while maintaining compilability at each intermediate step. Show the `module-info.java` for each final module and describe the order of extraction.

17. **jlink with Spring Boot**: Create a build configuration (Maven POM or Gradle build) that:
    - Builds a Spring Boot 4.x application as a modular JAR
    - Runs `jdeps` and resolves any module issues
    - Creates a jlink runtime image
    - Packages it as a native MSI/DEB/DMG using jpackage
    - The final installer should be under 50 MB

    What challenges does Spring Boot's runtime classpath scanning (e.g., `@ComponentScan`, `@EntityScan`) pose on the module path, and how would you address them?

18. **Sealed modules for SPI enforcement**: Design a sealed module pattern where only approved third-party modules can provide implementations of a security-sensitive interface. Show the `module-info.java` with `permits`, the sealed interface, and how the module system enforces the restriction. What are the limitations of this approach compared to runtime security managers?

---

## References

- [JSR 376: Java Platform Module System](https://jcp.org/en/jsr/detail?id=376)
- [OpenJDK Project Jigsaw](https://openjdk.org/projects/jigsaw/)
- [Java Language Specification — Chapter 7 (Modules)](https://docs.oracle.com/javase/specs/jls/se21/html/jls-7.html)
- [Java Module System — Nicolai Parlog (O'Reilly)](https://www.amazon.com/Java-Module-System-Nicolai-Parlog/dp/1617294284)
- [JDK 21: JEP 261 — Module System](https://openjdk.org/jeps/261)
- [JDK 21: jlink Reference](https://docs.oracle.com/en/java/javase/21/docs/specs/man/jlink.html)
- [JDK 21: jpackage Reference](https://docs.oracle.com/en/java/javase/21/docs/specs/man/jpackage.html)
- [Spring Boot Reference — Modular Applications](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#appendix.dependency-versions.modules)
- [Baeldung — Java 9 Modularity Guide](https://www.baeldung.com/java-9-modularity)
