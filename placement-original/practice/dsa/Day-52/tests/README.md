# Tests - Day 52

This folder contains unit test scaffolding for the Task Management System demo.

## Running locally (quick options)

### Option A: Use IDE (recommended)
- Import project as a Java project in IntelliJ or Eclipse
- Add JUnit 5 to test classpath
- Run `dsa.day52.tests.TaskServiceTest` as a JUnit test

### Option B: Compile & run with Maven (recommended for CI)
1. Create a simple `pom.xml` at project root including JUnit 5 dependency
2. Run `mvn -DskipTests=false test`

Example `pom.xml` dependencies:
```xml
<dependency>
  <groupId>org.junit.jupiter</groupId>
  <artifactId>junit-jupiter</artifactId>
  <version>5.9.3</version>
  <scope>test</scope>
</dependency>
```

## What to add next
- Add Mockito-based unit tests for services
- Add integration tests with TestContainers and Postgres
- Add a GitHub Actions workflow to run tests on push
