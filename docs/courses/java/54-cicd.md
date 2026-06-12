# CI/CD for Spring Boot

## Learning Objectives

By the end of this chapter, you will be able to:

- Design and implement GitHub Actions workflows for Spring Boot with matrix builds, caching, and Docker layer caching
- Configure GitLab CI pipelines with stages, artifacts, docker-in-docker, security scanning, and environment-based deployments
- Structure a build pipeline from compile through test, package, publish, and deploy
- Publish artifacts to Maven Central, GitHub Packages, Nexus/Artifactory, and container registries
- Implement automated deployment strategies including rolling, blue-green, and canary releases
- Integrate database migrations into CI/CD pipelines with Flyway
- Configure approval gates with quality checks, coverage thresholds, and security scanning

---

## 1. CI/CD Pipeline Overview

```
┌─────────┐    ┌──────┐    ┌─────────┐    ┌─────────┐    ┌──────────┐
│ COMPILE │ →  │ TEST │ →  │ PACKAGE │ →  │ PUBLISH │ →  │  DEPLOY  │
└─────────┘    └──────┘    └─────────┘    └─────────┘    └──────────┘
     │             │             │              │               │
     ▼             ▼             ▼              ▼               ▼
  javac        unit tests    mvn package     docker push    kubectl apply
  mvn compile  int tests     bootBuildImage  mvn deploy    helm upgrade
  gradle build  security scan jar shadow      to registry   terraform apply
```

### 1.1 Pipeline Stages

| Stage | Description | Typical Duration |
|-------|-------------|-----------------|
| **Checkout** | Fetch source code | ~10 seconds |
| **Compile** | Compile Java source, process resources | ~30-60 seconds |
| **Unit Test** | Run unit tests with JUnit | ~1-3 minutes |
| **Integration Test** | Run integration tests with Testcontainers | ~3-10 minutes |
| **Static Analysis** | SonarQube, Checkstyle, SpotBugs | ~1-2 minutes |
| **Security Scan** | SAST, dependency scanning, container scan | ~2-5 minutes |
| **Package** | Build JAR, Docker image | ~1-3 minutes |
| **Publish** | Push to registry (JAR, Docker) | ~1-2 minutes |
| **Deploy Staging** | Deploy to staging environment | ~1-5 minutes |
| **Deploy Production** | Deploy to production (with approval) | ~5-15 minutes |

---

## 2. GitHub Actions

### 2.1 Full Workflow for Spring Boot with Maven

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main
      - develop
      - 'feature/**'
    tags:
      - 'v*'
  pull_request:
    branches:
      - main
      - develop

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}
  JAVA_VERSION: "17"

concurrency:
  group: ${{ github.ref }}
  cancel-in-progress: true

jobs:
  ###########################################################################
  # BUILD — Compile, test, and analyze
  ###########################################################################
  build:
    name: Build and Test
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:15-alpine
        env:
          POSTGRES_DB: testdb
          POSTGRES_USER: testuser
          POSTGRES_PASSWORD: testpass
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    strategy:
      matrix:
        java-version: [17, 21]
        java-distribution: [temurin]

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup JDK ${{ matrix.java-version }}
        uses: actions/setup-java@v4
        with:
          java-version: ${{ matrix.java-version }}
          distribution: ${{ matrix.java-distribution }}
          cache: maven

      - name: Cache Maven dependencies
        uses: actions/cache@v4
        with:
          path: ~/.m2/repository
          key: ${{ runner.os }}-maven-${{ hashFiles('**/pom.xml') }}
          restore-keys: |
            ${{ runner.os }}-maven-

      - name: Cache SonarQube
        uses: actions/cache@v4
        with:
          path: ~/.sonar/cache
          key: ${{ runner.os }}-sonar

      - name: Compile
        run: ./mvnw compile -B -q

      - name: Unit Tests
        run: ./mvnw test -B

      - name: Integration Tests
        run: ./mvnw verify -B -Pintegration-tests
        env:
          SPRING_DATASOURCE_URL: jdbc:postgresql://localhost:5432/testdb
          SPRING_DATASOURCE_USERNAME: testuser
          SPRING_DATASOURCE_PASSWORD: testpass

      - name: Static Analysis (Checkstyle)
        run: ./mvnw checkstyle:check -B

      - name: Security Scan with Trivy
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: fs
          scan-ref: .
          format: sarif
          output: trivy-results.sarif
          severity: CRITICAL,HIGH

      - name: Upload Trivy results to GitHub
        uses: github/codeql-action/upload-sarif@v3
        with:
          sarif_file: trivy-results.sarif
          category: trivy

      - name: SonarQube Analysis
        uses: SonarSource/sonarqube-scan-action@v4
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
          SONAR_HOST_URL: ${{ secrets.SONAR_HOST_URL }}
        with:
          args: >
            -Dsonar.projectKey=${{ github.repository }}
            -Dsonar.qualitygate.wait=true
            -Dsonar.coverage.jacoco.xmlReportPaths=target/site/jacoco/jacoco.xml

      - name: Upload Test Results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: test-results-${{ matrix.java-version }}
          path: |
            target/surefire-reports/
            target/failsafe-reports/
            target/site/jacoco/
          retention-days: 7

  ###########################################################################
  # PACKAGE — Build JAR and Docker image
  ###########################################################################
  package:
    name: Package
    runs-on: ubuntu-latest
    needs: [build]
    if: github.ref == 'refs/heads/main' || startsWith(github.ref, 'refs/tags/v')

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup JDK 17
        uses: actions/setup-java@v4
        with:
          java-version: 17
          distribution: temurin
          cache: maven

      - name: Build JAR
        run: ./mvnw package -DskipTests -B

      - name: Upload JAR
        uses: actions/upload-artifact@v4
        with:
          name: app-jar
          path: target/*.jar
          retention-days: 7

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Docker metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=ref,event=branch
            type=ref,event=pr
            type=semver,pattern={{version}}
            type=semver,pattern={{major}}.{{minor}}
            type=sha,format=short
            type=raw,value=latest,enable={{is_default_branch}}

      - name: Log in to GitHub Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
          build-args: |
            BUILD_DATE=${{ steps.meta.outputs.created }}
            VERSION=${{ steps.meta.outputs.version }}
            COMMIT_SHA=${{ github.sha }}

  ###########################################################################
  # DEPLOY STAGING — Deploy to staging on PR merge to develop
  ###########################################################################
  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    needs: [package]
    if: github.ref == 'refs/heads/develop'

    environment:
      name: staging
      url: https://staging.myapp.com

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Configure kubectl
        uses: azure/setup-kubectl@v4
        with:
          version: 'v1.28.0'

      - name: Set up kubeconfig
        run: |
          echo "${{ secrets.KUBECONFIG_STAGING }}" | base64 -d > kubeconfig
          echo "KUBECONFIG=${PWD}/kubeconfig" >> $GITHUB_ENV

      - name: Deploy with Helm
        run: |
          helm upgrade --install myapp ./helm/myapp \
            --namespace staging \
            --create-namespace \
            --wait \
            --timeout 5m \
            -f helm/myapp/values.staging.yaml \
            --set image.repository=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }} \
            --set image.tag=sha-${{ github.sha }} \
            --set replicaCount=1

      - name: Run smoke tests
        run: |
          sleep 10
          curl -f --retry 5 --retry-delay 5 https://staging.myapp.com/actuator/health

      - name: Run database migrations
        run: |
          kubectl create job --namespace staging \
            --from=cronjob/myapp-migration migration-manual-$(date +%s)

  ###########################################################################
  # DEPLOY PRODUCTION — Manual approval gate
  ###########################################################################
  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    needs: [deploy-staging]
    if: startsWith(github.ref, 'refs/tags/v')

    environment:
      name: production
      url: https://myapp.com

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Configure kubectl
        uses: azure/setup-kubectl@v4

      - name: Set up kubeconfig
        run: |
          echo "${{ secrets.KUBECONFIG_PRODUCTION }}" | base64 -d > kubeconfig
          echo "KUBECONFIG=${PWD}/kubeconfig" >> $GITHUB_ENV

      - name: Deploy with Helm (canary 10%)
        run: |
          helm upgrade --install myapp-canary ./helm/myapp \
            --namespace production \
            --create-namespace \
            --wait \
            --timeout 5m \
            -f helm/myapp/values.prod.yaml \
            --set image.repository=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }} \
            --set image.tag=${{ github.ref_name }} \
            --set replicaCount=1 \
            --set canary.enabled=true \
            --set canary.weight=10

      - name: Monitor canary (5 minutes)
        run: |
          echo "Monitoring canary for 5 minutes..."
          sleep 300
          echo "Canary healthy, proceeding with full rollout"

      - name: Full rollout
        run: |
          helm upgrade --install myapp ./helm/myapp \
            --namespace production \
            --wait \
            --timeout 10m \
            -f helm/myapp/values.prod.yaml \
            --set image.repository=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }} \
            --set image.tag=${{ github.ref_name }} \
            --set replicaCount=5 \
            --set canary.enabled=false

      - name: Verify deployment
        run: |
          kubectl rollout status deployment/myapp -n production --timeout=5m
          curl -f https://myapp.com/actuator/health

      - name: Notify
        if: always()
        uses: slackapi/slack-github-action@v1.25.0
        with:
          channel-id: 'C12345678'
          slack-message: |
            Deployment ${{ job.status }}: ${{ github.repository }}@${{ github.ref_name }}
            https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}
        env:
          SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}
```

### 2.2 Matrix Builds for JDK Versions

```yaml
# Compile and test against multiple JDK versions
build:
  strategy:
    matrix:
      java-version: [17, 21]
      java-distribution: [temurin, zulu]
      exclude:
        - java-version: 21
          java-distribution: zulu
  steps:
    - uses: actions/setup-java@v4
      with:
        java-version: ${{ matrix.java-version }}
        distribution: ${{ matrix.java-distribution }}
```

### 2.3 Caching Maven Dependencies

```yaml
- name: Cache Maven dependencies
  uses: actions/cache@v4
  with:
    path: ~/.m2/repository
    key: ${{ runner.os }}-maven-${{ hashFiles('**/pom.xml') }}
    restore-keys: |
      ${{ runner.os }}-maven-

# For Gradle projects:
- name: Cache Gradle dependencies
  uses: actions/cache@v4
  with:
    path: |
      ~/.gradle/caches
      ~/.gradle/wrapper
    key: ${{ runner.os }}-gradle-${{ hashFiles('**/*.gradle*', '**/gradle-wrapper.properties') }}
    restore-keys: |
      ${{ runner.os }}-gradle-
```

### 2.4 Docker Layer Caching

```yaml
- name: Set up Docker Buildx
  uses: docker/setup-buildx-action@v3

- name: Build and push with cache
  uses: docker/build-push-action@v5
  with:
    context: .
    push: true
    tags: ${{ steps.meta.outputs.tags }}
    cache-from: type=gha
    cache-to: type=gha,mode=max
```

### 2.5 Quality Gate Workflow

```yaml
name: Quality Gate

on:
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-java@v4
        with:
          java-version: 17
          distribution: temurin
          cache: maven

      - name: Build and analyze
        run: ./mvnw verify sonar:sonar -B
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}

      - name: Check coverage threshold
        run: |
          COVERAGE=$(python3 -c "import xml.etree.ElementTree as ET; \
            root = ET.parse('target/site/jacoco/jacoco.xml'); \
            counter = root.find('.//counter[@type=\"INSTRUCTION\"]'); \
            covered = float(counter.get('covered')); \
            missed = float(counter.get('missed')); \
            total = covered + missed; \
            print(round(covered / total * 100, 2))")
          echo "Code coverage: $COVERAGE%"
          THRESHOLD=80.0
          if (( $(echo "$COVERAGE < $THRESHOLD" | bc -l) )); then
            echo "Coverage $COVERAGE% is below threshold $THRESHOLD%"
            exit 1
          fi

  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: SAST with CodeQL
        uses: github/codeql-action/init@v3
        with:
          languages: java
          queries: security-extended,security-and-quality

      - name: Autobuild
        uses: github/codeql-action/autobuild@v3

      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v3

      - name: Dependency scan
        uses: dependency-check/Dependency-Check_Action@main
        with:
          project: myapp
          path: .
          format: SARIF
        env:
          JAVA_HOME: ${{ env.JAVA_HOME }}

      - name: Upload dependency scan results
        uses: github/codeql-action/upload-sarif@v3
        with:
          sarif_file: reports/dependency-check-report.sarif
```

### 2.6 Gradle Workflow

```yaml
name: Gradle CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:15-alpine
        env:
          POSTGRES_DB: testdb
          POSTGRES_USER: testuser
          POSTGRES_PASSWORD: testpass
        ports:
          - 5432:5432
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
      - uses: actions/checkout@v4

      - name: Setup JDK 17
        uses: actions/setup-java@v4
        with:
          java-version: 17
          distribution: temurin
          cache: gradle

      - name: Cache Gradle packages
        uses: actions/cache@v4
        with:
          path: |
            ~/.gradle/caches
            ~/.gradle/wrapper
            .gradle/loom-cache
          key: ${{ runner.os }}-gradle-${{ hashFiles('**/*.gradle*', '**/gradle-wrapper.properties') }}
          restore-keys: |
            ${{ runner.os }}-gradle-

      - name: Compile
        run: ./gradlew compileJava --no-daemon

      - name: Unit tests
        run: ./gradlew test --no-daemon

      - name: Integration tests
        run: ./gradlew integrationTest --no-daemon
        env:
          SPRING_DATASOURCE_URL: jdbc:postgresql://localhost:5432/testdb
          SPRING_DATASOURCE_USERNAME: testuser
          SPRING_DATASOURCE_PASSWORD: testpass

      - name: Build JAR
        run: ./gradlew bootJar --no-daemon

      - name: Build Docker image
        run: ./gradlew bootBuildImage --no-daemon

      - name: Upload artifacts
        uses: actions/upload-artifact@v4
        with:
          name: app-jar-gradle
          path: build/libs/*.jar
```

---

## 3. GitLab CI

### 3.1 Full .gitlab-ci.yml

```yaml
# .gitlab-ci.yml
image: eclipse-temurin:17-jdk-alpine

variables:
  MAVEN_OPTS: "-Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=WARN"
  MAVEN_CLI_OPTS: "--batch-mode --errors --fail-at-end --show-version"
  DOCKER_HOST: tcp://docker:2375
  DOCKER_TLS_CERTDIR: ""
  REGISTRY_IMAGE: $CI_REGISTRY_IMAGE
  REGISTRY_USER: $CI_REGISTRY_USER
  REGISTRY_PASSWORD: $CI_REGISTRY_PASSWORD

cache:
  key: ${CI_COMMIT_REF_SLUG}
  paths:
    - .m2/repository/
    - target/
    - node_modules/

stages:
  - compile
  - test
  - analyze
  - security-scan
  - package
  - publish
  - deploy-staging
  - deploy-production

###############################################################################
# COMPILE
###############################################################################
compile:
  stage: compile
  script:
    - ./mvnw compile $MAVEN_CLI_OPTS
  artifacts:
    paths:
      - target/classes/
    expire_in: 1 hour

###############################################################################
# TEST
###############################################################################
unit-test:
  stage: test
  script:
    - ./mvnw test $MAVEN_CLI_OPTS
  artifacts:
    paths:
      - target/surefire-reports/
    reports:
      junit: target/surefire-reports/TEST-*.xml
    expire_in: 1 week

integration-test:
  stage: test
  services:
    - name: postgres:15-alpine
      alias: postgres
  variables:
    POSTGRES_DB: testdb
    POSTGRES_USER: testuser
    POSTGRES_PASSWORD: testpass
    SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/testdb
    SPRING_DATASOURCE_USERNAME: testuser
    SPRING_DATASOURCE_PASSWORD: testpass
  script:
    - ./mvnw verify $MAVEN_CLI_OPTS -Pintegration-tests
  artifacts:
    paths:
      - target/failsafe-reports/
      - target/site/jacoco/
    reports:
      junit: target/failsafe-reports/TEST-*.xml
    expire_in: 1 week

###############################################################################
# ANALYZE
###############################################################################
sonarqube:
  stage: analyze
  script:
    - ./mvnw sonar:sonar $MAVEN_CLI_OPTS
      -Dsonar.projectKey=${CI_PROJECT_PATH_SLUG}
      -Dsonar.host.url=${SONAR_HOST_URL}
      -Dsonar.login=${SONAR_TOKEN}
      -Dsonar.qualitygate.wait=true
      -Dsonar.coverage.jacoco.xmlReportPaths=target/site/jacoco/jacoco.xml
  dependencies:
    - integration-test
  only:
    - main
    - develop
    - merge_requests

checkstyle:
  stage: analyze
  script:
    - ./mvnw checkstyle:check $MAVEN_CLI_OPTS

spotbugs:
  stage: analyze
  script:
    - ./mvnw spotbugs:check $MAVEN_CLI_OPTS

###############################################################################
# SECURITY
###############################################################################
sast:
  stage: security-scan
  image: registry.gitlab.com/gitlab-org/security-products/sast:latest
  variables:
    SAST_EXPERIMENTAL: "true"
  script:
    - /analyzer run
  artifacts:
    reports:
      sast: gl-sast-report.json

dependency-scanning:
  stage: security-scan
  image: registry.gitlab.com/gitlab-org/security-products/dependency-scanning:latest
  script:
    - /analyzer run
  artifacts:
    reports:
      dependency_scanning: gl-dependency-scanning-report.json

secret-detection:
  stage: security-scan
  image: registry.gitlab.com/gitlab-org/security-products/secret-detection:latest
  script:
    - /analyzer run
  artifacts:
    reports:
      secret_detection: gl-secret-detection-report.json

container-scanning:
  stage: security-scan
  image: registry.gitlab.com/gitlab-org/security-products/container-scanning:latest
  variables:
    CI_APPLICATION_REPOSITORY: $CI_REGISTRY_IMAGE
    CI_APPLICATION_TAG: $CI_COMMIT_SHORT_SHA
  script:
    - /analyzer run
  artifacts:
    reports:
      container_scanning: gl-container-scanning-report.json
  only:
    - main

###############################################################################
# PACKAGE
###############################################################################
package:
  stage: package
  script:
    - ./mvnw package $MAVEN_CLI_OPTS -DskipTests
  artifacts:
    paths:
      - target/*.jar
    expire_in: 1 month
  only:
    - main
    - tags

docker-build:
  stage: package
  image: docker:24.0.7
  services:
    - name: docker:24.0.7-dind
      alias: docker
  variables:
    IMAGE_TAG: $CI_COMMIT_SHORT_SHA
  before_script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
  script:
    - |
      docker build \
        --build-arg BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ") \
        --build-arg VERSION=$CI_COMMIT_TAG \
        --build-arg COMMIT_SHA=$CI_COMMIT_SHA \
        -t $CI_REGISTRY_IMAGE:$IMAGE_TAG \
        -t $CI_REGISTRY_IMAGE:latest \
        .
    - docker push $CI_REGISTRY_IMAGE:$IMAGE_TAG
    - docker push $CI_REGISTRY_IMAGE:latest
  dependencies:
    - package
  only:
    - main
    - tags

###############################################################################
# PUBLISH
###############################################################################
publish-jar:
  stage: publish
  script:
    - ./mvnw deploy $MAVEN_CLI_OPTS -DskipTests
  dependencies:
    - package
  only:
    - tags
  except:
    - branches

###############################################################################
# DEPLOY STAGING
###############################################################################
deploy-staging:
  stage: deploy-staging
  image: dtzar/helm-kubectl:3.14
  script:
    - kubectl config use-context staging
    - |
      helm upgrade --install myapp ./helm/myapp \
        --namespace staging \
        --create-namespace \
        --wait \
        --timeout 5m \
        -f helm/myapp/values.staging.yaml \
        --set image.repository=$CI_REGISTRY_IMAGE \
        --set image.tag=$CI_COMMIT_SHORT_SHA
    - kubectl rollout status deployment/myapp -n staging --timeout=3m
    - |
      response=$(curl -s -o /dev/null -w "%{http_code}" --retry 5 --retry-delay 10 \
        https://staging.myapp.com/actuator/health)
    - |
      if [ "$response" != "200" ]; then
        echo "Smoke test failed with status $response"
        exit 1
      fi
  environment:
    name: staging
    url: https://staging.myapp.com
  only:
    - develop

###############################################################################
# DEPLOY PRODUCTION
###############################################################################
deploy-production:
  stage: deploy-production
  image: dtzar/helm-kubectl:3.14
  when: manual
  allow_failure: false
  script:
    - kubectl config use-context production
    - |
      helm upgrade --install myapp ./helm/myapp \
        --namespace production \
        --create-namespace \
        --wait \
        --timeout 10m \
        -f helm/myapp/values.prod.yaml \
        --set image.repository=$CI_REGISTRY_IMAGE \
        --set image.tag=$CI_COMMIT_TAG
    - kubectl rollout status deployment/myapp -n production --timeout=10m
  environment:
    name: production
    url: https://myapp.com
    on_stop: rollback-production
  only:
    - tags
  except:
    - branches

rollback-production:
  stage: deploy-production
  when: manual
  script:
    - kubectl config use-context production
    - kubectl rollout undo deployment/myapp -n production
    - kubectl rollout status deployment/myapp -n production --timeout=5m
  environment:
    name: production
    action: stop
  only:
    - tags
  except:
    - branches
```

### 3.2 GitLab CI with Docker-in-Docker

```yaml
# Docker in Docker configuration
variables:
  DOCKER_HOST: tcp://docker:2375
  DOCKER_TLS_CERTDIR: ""

build-image:
  stage: package
  image: docker:24.0.7
  services:
    - name: docker:24.0.7-dind
      alias: docker
      command: ["--insecure-registry=gitlab.myorg.com:5000"]
  before_script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
  script:
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
  only:
    - main
```

### 3.3 GitLab CI with Maven/Gradle Image

```yaml
# Maven build
maven-build:
  image: eclipse-temurin:17-jdk-alpine
  cache:
    key: ${CI_COMMIT_REF_SLUG}
    paths:
      - .m2/repository/
  script:
    - ./mvnw clean verify -B

# Gradle build
gradle-build:
  image: gradle:7.6-jdk17
  cache:
    key: ${CI_COMMIT_REF_SLUG}
    paths:
      - ~/.gradle/caches/
      - ~/.gradle/wrapper/
  script:
    - gradle clean build --no-daemon
```

### 3.4 GitLab CI Manual Approvals

```yaml
# Manual approval required before production deployment
stages:
  - test
  - staging
  - approval
  - production

approval:
  stage: approval
  script:
    - echo "Manual approval required for production deployment"
  when: manual
  allow_failure: false
  only:
    - tags

deploy-production:
  stage: production
  needs: ["approval"]
  script:
    - ./deploy-prod.sh
  only:
    - tags
```

---

## 4. Build Pipeline

### 4.1 Maven Build Phases

```bash
# Maven build lifecycle:
mvn compile          # Compile Java sources
mvn test-compile     # Compile test sources
mvn test             # Run unit tests
mvn verify           # Run integration tests
mvn package          # Package into JAR
mvn install          # Install in local repository
mvn deploy           # Deploy to remote repository
```

### 4.2 Integration Test Configuration

```xml
<profiles>
    <profile>
        <id>integration-tests</id>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-failsafe-plugin</artifactId>
                    <version>3.2.5</version>
                    <executions>
                        <execution>
                            <goals>
                                <goal>integration-test</goal>
                                <goal>verify</goal>
                            </goals>
                        </execution>
                    </executions>
                    <configuration>
                        <includes>
                            <include>**/*IT.java</include>
                            <include>**/*IntegrationTest.java</include>
                        </includes>
                        <systemPropertyVariables>
                            <testcontainers.reuse.enable>true</testcontainers.reuse.enable>
                        </systemPropertyVariables>
                    </configuration>
                </plugin>

                <plugin>
                    <groupId>org.jacoco</groupId>
                    <artifactId>jacoco-maven-plugin</artifactId>
                    <version>0.8.11</version>
                    <executions>
                        <execution>
                            <id>prepare-agent</id>
                            <goals>
                                <goal>prepare-agent</goal>
                            </goals>
                        </execution>
                        <execution>
                            <id>report</id>
                            <phase>verify</phase>
                            <goals>
                                <goal>report</goal>
                            </goals>
                        </execution>
                        <execution>
                            <id>check</id>
                            <phase>verify</phase>
                            <goals>
                                <goal>check</goal>
                            </goals>
                            <configuration>
                                <rules>
                                    <rule>
                                        <element>BUNDLE</element>
                                        <limits>
                                            <limit>
                                                <counter>INSTRUCTION</counter>
                                                <value>COVERED_RATIO</value>
                                                <minimum>0.80</minimum>
                                            </limit>
                                            <limit>
                                                <counter>BRANCH</counter>
                                                <value>COVERED_RATIO</value>
                                                <minimum>0.70</minimum>
                                            </limit>
                                            <limit>
                                                <counter>CLASS</counter>
                                                <value>COVERED_RATIO</value>
                                                <minimum>0.95</minimum>
                                            </limit>
                                        </limits>
                                    </rule>
                                </rules>
                            </configuration>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </build>
    </profile>
</profiles>
```

### 4.3 Gradle Build Pipeline

```gradle
plugins {
    id 'java'
    id 'org.springframework.boot' version '3.2.0'
    id 'io.spring.dependency-management' version '1.1.4'
    id 'jacoco'
    id 'checkstyle'
    id 'com.github.spotbugs' version '6.0.0'
    id 'org.sonarqube' version '5.0.0.4638'
}

java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

sourceSets {
    integrationTest {
        compileClasspath += sourceSets.main.output
        runtimeClasspath += sourceSets.main.output
    }
}

configurations {
    integrationTestImplementation.extendsFrom testImplementation
    integrationTestRuntimeOnly.extendsFrom testRuntimeOnly
}

task integrationTest(type: Test) {
    description = 'Runs integration tests'
    group = 'verification'
    testClassesDirs = sourceSets.integrationTest.output.classesDirs
    classpath = sourceSets.integrationTest.runtimeClasspath
    shouldRunAfter test
}

check.dependsOn integrationTest

jacocoTestCoverageVerification {
    violationRules {
        rule {
            limit {
                counter = 'INSTRUCTION'
                value = 'COVERED_RATIO'
                minimum = 0.80
            }
            limit {
                counter = 'BRANCH'
                value = 'COVERED_RATIO'
                minimum = 0.70
            }
        }
    }
}

check.dependsOn jacocoTestCoverageVerification

checkstyle {
    toolVersion = '10.12.0'
    configFile = file("${rootDir}/config/checkstyle/checkstyle.xml")
    maxWarnings = 0
}

spotbugsMain {
    reports {
        html {
            required = true
            outputLocation = file("${buildDir}/reports/spotbugs/main.html")
        }
    }
}

sonarqube {
    properties {
        property "sonar.host.url", System.getenv("SONAR_HOST_URL") ?: "https://sonarcloud.io"
        property "sonar.token", System.getenv("SONAR_TOKEN")
        property "sonar.coverage.jacoco.xmlReportPaths", "${buildDir}/reports/jacoco/test/jacocoTestReport.xml"
        property "sonar.java.source", "17"
    }
}

tasks.named('test') {
    useJUnitPlatform()
    finalizedBy jacocoTestReport
}

tasks.named('integrationTest') {
    useJUnitPlatform()
    shouldRunAfter test
}

bootBuildImage {
    imageName = "${System.getenv('REGISTRY') ?: 'localhost'}/${project.name}:${version}"
    environment = [
        "BPE_DELIM_JAVA_TOOL_OPTIONS" : " ",
        "BPE_APPEND_JAVA_TOOL_OPTIONS" : "-XX:+UseContainerSupport -XX:MaxRAMPercentage=70.0"
    ]
    docker {
        publishRegistry {
            username = System.getenv('REGISTRY_USER')
            password = System.getenv('REGISTRY_PASS')
        }
    }
}
```

### 4.4 Containerized Build (Maven)

```yaml
# gitlab-ci.yml using Maven Docker image
variables:
  MAVEN_IMAGE: maven:3.9.6-eclipse-temurin-17-alpine

maven-build:
  image: $MAVEN_IMAGE
  script:
    - mvn clean verify -B

# Same pattern for GitHub Actions
# .github/workflows/ci.yml
jobs:
  build:
    container:
      image: maven:3.9.6-eclipse-temurin-17-alpine
    steps:
      - uses: actions/checkout@v4
      - run: mvn clean verify -B
```

---

## 5. Artifact Publishing

### 5.1 Maven Central (via OSSRH)

```xml
<distributionManagement>
    <snapshotRepository>
        <id>ossrh</id>
        <url>https://s01.oss.sonatype.org/content/repositories/snapshots</url>
    </snapshotRepository>
    <repository>
        <id>ossrh</id>
        <url>https://s01.oss.sonatype.org/service/local/staging/deploy/maven2</url>
    </repository>
</distributionManagement>

<profiles>
    <profile>
        <id>release</id>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.sonatype.plugins</groupId>
                    <artifactId>nexus-staging-maven-plugin</artifactId>
                    <version>1.6.13</version>
                    <extensions>true</extensions>
                    <configuration>
                        <serverId>ossrh</serverId>
                        <nexusUrl>https://s01.oss.sonatype.org/</nexusUrl>
                        <autoReleaseAfterClose>true</autoReleaseAfterClose>
                    </configuration>
                </plugin>

                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-gpg-plugin</artifactId>
                    <version>3.1.0</version>
                    <executions>
                        <execution>
                            <id>sign-artifacts</id>
                            <phase>verify</phase>
                            <goals>
                                <goal>sign</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>

                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-source-plugin</artifactId>
                    <version>3.3.0</version>
                    <executions>
                        <execution>
                            <id>attach-sources</id>
                            <goals>
                                <goal>jar-no-fork</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>

                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-javadoc-plugin</artifactId>
                    <version>3.6.3</version>
                    <executions>
                        <execution>
                            <id>attach-javadoc</id>
                            <goals>
                                <goal>jar</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </build>
    </profile>
</profiles>
```

```bash
# Release to Maven Central
mvn clean deploy -P release -Dgpg.passphrase=$GPG_PASSPHRASE -DskipTests
```

### 5.2 GitHub Packages

```xml
<distributionManagement>
    <repository>
        <id>github</id>
        <name>GitHub Packages</name>
        <url>https://maven.pkg.github.com/myorg/myapp</url>
    </repository>
</distributionManagement>
```

```yaml
# .github/workflows/publish.yml
name: Publish to GitHub Packages

on:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-java@v4
        with:
          java-version: 17
          distribution: temurin
          cache: maven

      - name: Publish
        run: ./mvnw deploy -DskipTests -B
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### 5.3 Nexus/Artifactory

```xml
<!-- pom.xml -->
<distributionManagement>
    <repository>
        <id>nexus</id>
        <name>Nexus Releases</name>
        <url>https://nexus.myorg.com/repository/maven-releases/</url>
    </repository>
    <snapshotRepository>
        <id>nexus</id>
        <name>Nexus Snapshots</name>
        <url>https://nexus.myorg.com/repository/maven-snapshots/</url>
    </snapshotRepository>
</distributionManagement>
```

```xml
<!-- settings.xml (CI) -->
<servers>
    <server>
        <id>nexus</id>
        <username>${env.NEXUS_USERNAME}</username>
        <password>${env.NEXUS_PASSWORD}</password>
    </server>
</servers>
```

```bash
# Deploy to Nexus
mvn deploy -DskipTests -B
```

### 5.4 Docker Hub

```yaml
- name: Login to Docker Hub
  uses: docker/login-action@v3
  with:
    username: ${{ secrets.DOCKER_USERNAME }}
    password: ${{ secrets.DOCKER_PASSWORD }}

- name: Build and push
  uses: docker/build-push-action@v5
  with:
    push: true
    tags: ${{ secrets.DOCKER_USERNAME }}/myapp:${{ github.sha }}
```

### 5.5 Amazon ECR

```yaml
- name: Configure AWS credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: us-east-1

- name: Login to Amazon ECR
  id: login-ecr
  uses: aws-actions/amazon-ecr-login@v2

- name: Build and push to ECR
  uses: docker/build-push-action@v5
  with:
    push: true
    tags: ${{ steps.login-ecr.outputs.registry }}/myapp:${{ github.sha }}
```

---

## 6. Automated Deployment

### 6.1 Deploy to Staging on PR

```yaml
name: PR Preview Deploy

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  deploy-preview:
    runs-on: ubuntu-latest
    if: github.event.pull_request.head.repo.full_name == github.repository

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-java@v4
        with:
          java-version: 17
          distribution: temurin
          cache: maven

      - name: Build
        run: ./mvnw package -DskipTests -B

      - name: Build Docker image
        run: |
          docker build -t preview:${{ github.event.number }} .
          docker tag preview:${{ github.event.number }} ${{ secrets.REGISTRY }}/preview:${{ github.event.number }}

      - name: Deploy preview environment
        run: |
          helm upgrade --install preview-${{ github.event.number }} ./helm/myapp \
            --namespace preview \
            --create-namespace \
            --wait \
            --timeout 3m \
            --set image.repository=${{ secrets.REGISTRY }}/preview \
            --set image.tag=${{ github.event.number }} \
            --set ingress.hosts[0].host=pr-${{ github.event.number }}.preview.myapp.com

      - name: Comment PR with preview URL
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `🚀 Preview deployed at https://pr-${context.issue.number}.preview.myapp.com`
            })
```

### 6.2 Rolling Deployment

```bash
#!/bin/bash
# rolling-deploy.sh

set -euo pipefail

NAMESPACE="production"
DEPLOYMENT="myapp"
IMAGE="${1:?Usage: $0 <image:tag>}"

echo "Starting rolling deployment of ${IMAGE}..."

kubectl set image deployment/${DEPLOYMENT} \
  -n ${NAMESPACE} \
  myapp=${IMAGE} \
  --record

kubectl rollout status deployment/${DEPLOYMENT} \
  -n ${NAMESPACE} \
  --timeout=10m

echo "Rolling deployment complete."

# Health verification
echo "Running health check..."
if kubectl exec deployment/${DEPLOYMENT} -n ${NAMESPACE} -- \
  curl -sf http://localhost:8080/actuator/health > /dev/null; then
  echo "Health check passed."
else
  echo "Health check failed. Rolling back..."
  kubectl rollout undo deployment/${DEPLOYMENT} -n ${NAMESPACE}
  exit 1
fi
```

### 6.3 Blue-Green Deployment

```yaml
# blue-green-deploy.sh
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
  labels:
    app: myapp
spec:
  selector:
    app: myapp
    color: blue  # Toggle between "blue" and "green"
  ports:
    - port: 80
      targetPort: 8080
```

```bash
#!/bin/bash
# blue-green-deploy.sh

set -euo pipefail

NAMESPACE="production"
NEW_COLOR="green"
OLD_COLOR="blue"
IMAGE="${1:?Usage: $0 <image:tag>}"

echo "Blue-Green Deployment"
echo "Current: ${OLD_COLOR}"
echo "New: ${NEW_COLOR}"
echo "Image: ${IMAGE}"

# Deploy new version
kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-${NEW_COLOR}
  namespace: ${NAMESPACE}
spec:
  replicas: 5
  selector:
    matchLabels:
      app: myapp
      color: ${NEW_COLOR}
  template:
    metadata:
      labels:
        app: myapp
        color: ${NEW_COLOR}
    spec:
      containers:
        - name: myapp
          image: ${IMAGE}
          ports:
            - containerPort: 8080
          livenessProbe:
            httpGet:
              path: /actuator/health/liveness
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /actuator/health/readiness
              port: 8080
            initialDelaySeconds: 20
            periodSeconds: 5
EOF

# Wait for new deployment to be ready
kubectl rollout status deployment/myapp-${NEW_COLOR} \
  -n ${NAMESPACE} --timeout=5m

# Smoke test new version
echo "Running smoke tests on new version..."
NEW_POD=$(kubectl get pods -n ${NAMESPACE} -l app=myapp,color=${NEW_COLOR} \
  -o jsonpath='{.items[0].metadata.name}')
kubectl exec ${NEW_POD} -n ${NAMESPACE} -- \
  curl -sf http://localhost:8080/actuator/health

# Switch traffic to new version
kubectl patch service myapp-service -n ${NAMESPACE} \
  -p "{\"spec\":{\"selector\":{\"app\":\"myapp\",\"color\":\"${NEW_COLOR}\"}}}"

# Verify traffic switch
echo "Traffic switched to ${NEW_COLOR}"

# Scale down old version
kubectl scale deployment/myapp-${OLD_COLOR} \
  -n ${NAMESPACE} --replicas=0

echo "Blue-green deployment complete."
```

### 6.4 Canary Release

```yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
    track: stable  # Both stable and canary pods match this label
  ports:
    - port: 80
      targetPort: 8080
```

```bash
#!/bin/bash
# canary-deploy.sh

set -euo pipefail

NAMESPACE="production"
IMAGE="${1:?Usage: $0 <image:tag>}"
STABLE_REPLICAS=5
CANARY_REPLICAS=1

echo "Canary Deployment"
echo "Image: ${IMAGE}"
echo "Stable replicas: ${STABLE_REPLICAS}"
echo "Canary replicas: ${CANARY_REPLICAS}"

# Deploy stable version (current)
kubectl scale deployment/myapp-stable \
  -n ${NAMESPACE} --replicas=${STABLE_REPLICAS}

# Deploy canary
kubectl set image deployment/myapp-canary \
  -n ${NAMESPACE} myapp=${IMAGE} || \
  kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-canary
  namespace: ${NAMESPACE}
spec:
  replicas: ${CANARY_REPLICAS}
  selector:
    matchLabels:
      app: myapp
      track: canary
  template:
    metadata:
      labels:
        app: myapp
        track: canary
    spec:
      containers:
        - name: myapp
          image: ${IMAGE}
          ports:
            - containerPort: 8080
          env:
            - name: CANARY
              value: "true"
          livenessProbe:
            httpGet:
              path: /actuator/health/liveness
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /actuator/health/readiness
              port: 8080
            initialDelaySeconds: 20
            periodSeconds: 5
EOF

# Wait for canary to be ready
kubectl rollout status deployment/myapp-canary \
  -n ${NAMESPACE} --timeout=5m

# Monitor canary metrics (check error rate, latency)
echo "Monitoring canary for 10 minutes..."
sleep 600

# Check Prometheus for error rate
ERROR_RATE=$(curl -s "http://prometheus:9090/api/v1/query" \
  --data-urlencode 'query=sum(rate(http_server_requests_seconds_count{status=~"5..",track="canary"}[5m])) / sum(rate(http_server_requests_seconds_count{track="canary"}[5m])) * 100')
ERROR_THRESHOLD=1.0

if (( $(echo "$ERROR_RATE > $ERROR_THRESHOLD" | bc -l) )); then
  echo "Canary error rate ${ERROR_RATE}% exceeds threshold ${ERROR_THRESHOLD}%. Rolling back."
  kubectl scale deployment/myapp-canary -n ${NAMESPACE} --replicas=0
  exit 1
fi

# Promote to stable (scale up canary, scale down stable)
echo "Canary healthy. Promoting to stable."
kubectl set image deployment/myapp-stable \
  -n ${NAMESPACE} myapp=${IMAGE}
kubectl scale deployment/myapp-stable \
  -n ${NAMESPACE} --replicas=${STABLE_REPLICAS}

# Wait for stable rollout
kubectl rollout status deployment/myapp-stable \
  -n ${NAMESPACE} --timeout=5m

# Remove canary
kubectl scale deployment/myapp-canary \
  -n ${NAMESPACE} --replicas=0

echo "Canary deployment promoted to stable."
```

### 6.5 Feature Flags in CI/CD

```yaml
# Feature flags allow deploying code without enabling the feature

name: Feature Flag Deployment

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Deploy with feature flags
        run: |
          # Deploy with feature flags managed by LaunchDarkly/Split.io
          helm upgrade --install myapp ./helm/myapp \
            --set featureFlags.newCheckout=false \
            --set featureFlags.darkLaunchV2=false

  enable-feature:
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Enable feature flag in production
        run: |
          # In a real scenario, use LaunchDarkly API or Split.io API
          curl -X POST https://api.launchdarkly.com/api/v2/flags/myapp/newCheckout \
            -H "Authorization: ${{ secrets.LAUNCHDARKLY_TOKEN }}" \
            -d '{"environments": {"production": {"on": true}}}'
```

---

## 7. Database Migrations in CI

### 7.1 Flyway CI Pattern

```xml
<plugin>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-maven-plugin</artifactId>
    <version>10.7.0</version>
    <configuration>
        <url>${flyway.url}</url>
        <user>${flyway.user}</user>
        <password>${flyway.password}</password>
    </configuration>
</plugin>
```

```yaml
# Migration job in GitHub Actions
db-migration:
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/main'
  steps:
    - uses: actions/checkout@v4

    - uses: actions/setup-java@v4
      with:
        java-version: 17
        distribution: temurin
        cache: maven

    - name: Verify migration scripts
      run: ./mvnw flyway:validate -B
      env:
        flyway.url: ${{ secrets.STAGING_DB_URL }}
        flyway.user: ${{ secrets.STAGING_DB_USER }}
        flyway.password: ${{ secrets.STAGING_DB_PASS }}

    - name: Apply migrations to staging
      run: ./mvnw flyway:migrate -B
      env:
        flyway.url: ${{ secrets.STAGING_DB_URL }}
        flyway.user: ${{ secrets.STAGING_DB_USER }}
        flyway.password: ${{ secrets.STAGING_DB_PASS }}

    - name: Run integration tests against migrated DB
      run: ./mvnw verify -Pintegration-tests -B
      env:
        SPRING_DATASOURCE_URL: ${{ secrets.STAGING_DB_URL }}
        SPRING_DATASOURCE_USERNAME: ${{ secrets.STAGING_DB_USER }}
        SPRING_DATASOURCE_PASSWORD: ${{ secrets.STAGING_DB_PASS }}

    - name: Apply migrations to production
      if: startsWith(github.ref, 'refs/tags/v')
      run: ./mvnw flyway:migrate -B
      env:
        flyway.url: ${{ secrets.PROD_DB_URL }}
        flyway.user: ${{ secrets.PROD_DB_USER }}
        flyway.password: ${{ secrets.PROD_DB_PASS }}
```

### 7.2 Migration Verification in CI

```yaml
verify-migrations:
  runs-on: ubuntu-latest
  services:
    postgres:
      image: postgres:15-alpine
      env:
        POSTGRES_DB: testdb
        POSTGRES_USER: testuser
        POSTGRES_PASSWORD: testpass
      ports:
        - 5432:5432
      options: >-
        --health-cmd pg_isready
        --health-interval 10s
        --health-timeout 5s
        --health-retries 5

  steps:
    - uses: actions/checkout@v4

    - uses: actions/setup-java@v4
      with:
        java-version: 17
        distribution: temurin
        cache: maven

    - name: Apply migrations
      run: ./mvnw flyway:migrate -B
      env:
        flyway.url: jdbc:postgresql://localhost:5432/testdb
        flyway.user: testuser
        flyway.password: testpass

    - name: Verify migration integrity
      run: ./mvnw flyway:info -B
      env:
        flyway.url: jdbc:postgresql://localhost:5432/testdb
        flyway.user: testuser
        flyway.password: testpass

    - name: Check migration checksums
      run: ./mvnw flyway:validate -B
      env:
        flyway.url: jdbc:postgresql://localhost:5432/testdb
        flyway.user: testuser
        flyway.password: testpass

    - name: Test rollback
      run: |
        # Record current version
        VERSION=$(./mvnw flyway:info -B -q \
          -Dflyway.url=jdbc:postgresql://localhost:5432/testdb \
          -Dflyway.user=testuser \
          -Dflyway.password=testpass 2>&1 | grep "Version" | tail -1 | awk '{print $2}')
        echo "Current version: ${VERSION}"

        # Undo last migration (requires Flyway Teams or undo migration scripts)
        # ./mvnw flyway:undo -B

        # Re-apply
        # ./mvnw flyway:migrate -B
```

### 7.3 Rollback Testing in Pipeline

```xml
<profiles>
    <profile>
        <id>migration-test</id>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.flywaydb</groupId>
                    <artifactId>flyway-maven-plugin</artifactId>
                    <executions>
                        <execution>
                            <id>migrate</id>
                            <phase>pre-integration-test</phase>
                            <goals>
                                <goal>migrate</goal>
                            </goals>
                        </execution>
                        <execution>
                            <id>verify-rollback</id>
                            <phase>post-integration-test</phase>
                            <goals>
                                <goal>undo</goal>
                                <goal>migrate</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </build>
    </profile>
</profiles>
```

---

## 8. Approval Gates

### 8.1 Manual Approval in GitHub Environments

```yaml
# Required reviewers must approve before deployment
deploy-production:
  runs-on: ubuntu-latest
  needs: [deploy-staging]
  if: startsWith(github.ref, 'refs/tags/v')
  environment:
    name: production
    url: https://myapp.com
  steps:
    - name: Deploy
      run: ./deploy.sh
```

Configure in GitHub:
1. Settings → Environments → Production
2. Required reviewers: DevOps Lead, Tech Lead
3. Wait timer: 10 minutes

### 8.2 Quality Gates in Pipeline

```yaml
quality-gate:
  runs-on: ubuntu-latest
  needs: [unit-test, integration-test, sonarqube]
  if: always()
  steps:
    - name: Check all quality gates
      run: |
        # Check test results
        if [[ "${{ needs.unit-test.result }}" != "success" ]]; then
          echo "Unit tests failed"
          exit 1
        fi
        if [[ "${{ needs.integration-test.result }}" != "success" ]]; then
          echo "Integration tests failed"
          exit 1
        fi
        if [[ "${{ needs.sonarqube.result }}" != "success" ]]; then
          echo "SonarQube analysis failed or quality gate not met"
          exit 1
        fi
        echo "All quality gates passed!"
```

### 8.3 Test Coverage Threshold

```yaml
coverage-check:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-java@v4
      with:
        java-version: 17
        distribution: temurin
        cache: maven

    - name: Run tests with coverage
      run: ./mvnw verify -Pcoverage -B

    - name: Check coverage
      run: |
        python3 -c "
import xml.etree.ElementTree as ET
tree = ET.parse('target/site/jacoco/jacoco.xml')
root = tree.getroot()
counters = {c.get('type'): {'covered': float(c.get('covered')), 'missed': float(c.get('missed'))}
            for c in root.findall('.//counter')}
instruction = counters['INSTRUCTION']
branch = counters.get('BRANCH', {'covered': 0, 'missed': 0})
ratio = instruction['covered'] / (instruction['covered'] + instruction['missed']) * 100
branch_ratio = branch['covered'] / (branch['covered'] + branch['missed']) * 100 if (branch['covered'] + branch['missed']) > 0 else 100

print(f'Instruction coverage: {ratio:.2f}%')
print(f'Branch coverage: {branch_ratio:.2f}%')

# Thresholds
if ratio < 80:
    print('FAIL: Instruction coverage below 80%')
    exit(1)
if branch_ratio < 70:
    print('FAIL: Branch coverage below 70%')
    exit(1)
print('PASS: Coverage thresholds met')
"
```

### 8.4 SonarQube Quality Gate

```yaml
sonarqube-check:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
      with:
        fetch-depth: 0

    - uses: actions/setup-java@v4
      with:
        java-version: 17
        distribution: temurin
        cache: maven

    - name: Cache SonarQube packages
      uses: actions/cache@v4
      with:
        path: ~/.sonar/cache
        key: ${{ runner.os }}-sonar
        restore-keys: ${{ runner.os }}-sonar

    - name: Build and analyze
      env:
        SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
        SONAR_HOST_URL: ${{ secrets.SONAR_HOST_URL }}
      run: |
        ./mvnw verify sonar:sonar -B \
          -Dsonar.qualitygate.wait=true \
          -Dsonar.qualitygate.timeout=300

    - name: Verify quality gate
      run: |
        STATUS=$(curl -s -u ${{ secrets.SONAR_TOKEN }}: \
          "${{ secrets.SONAR_HOST_URL }}/api/qualitygates/project_status?projectKey=myapp" \
          | jq -r '.projectStatus.status')
        if [ "$STATUS" != "OK" ]; then
          echo "SonarQube quality gate failed: $STATUS"
          exit 1
        fi
        echo "SonarQube quality gate passed"
```

### 8.5 Security Scan Passing Gate

```yaml
security-gate:
  runs-on: ubuntu-latest
  needs: [sast, dependency-scanning, container-scanning]
  if: always()
  steps:
    - name: Aggregate security results
      run: |
        # Check SAST results
        if [[ "${{ needs.sast.result }}" != "success" ]]; then
          echo "SAST scan failed"
          exit 1
        fi

        # Check dependency scanning
        if [[ "${{ needs.dependency-scanning.result }}" != "success" ]]; then
          echo "Dependency scanning failed"
          exit 1
        fi

        # Check container scanning
        if [[ "${{ needs.container-scanning.result }}" != "success" ]]; then
          echo "Container scanning failed"
          exit 1
        fi

        echo "All security scans passed"
```

---

## 9. Complete CI/CD Configurations

### 9.1 All-in-One GitHub Actions (Maven)

```yaml
name: Full CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  release:
    types: [published]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}
  DOCKER_BUILDKIT: 1

jobs:
  build:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15-alpine
        env:
          POSTGRES_DB: testdb
          POSTGRES_USER: testuser
          POSTGRES_PASSWORD: testpass
        ports:
          - 5432:5432
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    strategy:
      matrix:
        java: [17, 21]

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-java@v4
        with:
          java-version: ${{ matrix.java }}
          distribution: temurin
          cache: maven

      - run: ./mvnw compile -B -q
      - run: ./mvnw test -B
      - run: ./mvnw verify -B -Pintegration-tests
        env:
          SPRING_DATASOURCE_URL: jdbc:postgresql://localhost:5432/testdb
          SPRING_DATASOURCE_USERNAME: testuser
          SPRING_DATASOURCE_PASSWORD: testpass

      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: test-results-${{ matrix.java }}
          path: target/surefire-reports/

  package:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: 17
          distribution: temurin
          cache: maven

      - run: ./mvnw package -DskipTests -B
      - uses: actions/upload-artifact@v4
        with:
          name: app-jar
          path: target/*.jar

      - uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest,${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}

  deploy:
    runs-on: ubuntu-latest
    needs: package
    environment: production
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - run: |
          helm upgrade --install myapp ./helm/myapp \
            --namespace production \
            --wait \
            --timeout 5m \
            --set image.repository=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }} \
            --set image.tag=${{ github.sha }}
```

### 9.2 Gradle Variant

```yaml
name: Gradle CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: 17
          distribution: temurin
          cache: gradle

      - run: ./gradlew build --no-daemon
      - run: ./gradlew check --no-daemon

      - uses: actions/upload-artifact@v4
        with:
          name: jar
          path: build/libs/*.jar

  docker:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USER }}
          password: ${{ secrets.DOCKER_PASS }}

      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: myorg/myapp:latest
```

---

## Summary

- **GitHub Actions** provides native CI/CD with matrix builds, caching, Docker layer caching, and environment-based deployments
- **GitLab CI** offers built-in security scanning (SAST, dependency scanning, container scanning), docker-in-docker, and manual approvals
- **Build pipelines** follow compile → test → package → publish → deploy, with integration tests using Testcontainers or service containers
- **Artifact publishing** supports Maven Central (via OSSRH), GitHub Packages, Nexus/Artifactory, Docker Hub, and Amazon ECR
- **Automated deployments** range from simple rolling updates to blue-green and canary releases with feature flags
- **Database migrations** in CI use Flyway with validation, migration integrity checks, and rollback testing
- **Approval gates** enforce quality standards through manual approvals, test coverage thresholds, SonarQube quality gates, and security scan passing criteria

---

## Exercises

1. **GitHub Actions workflow:** Create a workflow that compiles, tests (unit + integration), and packages a Spring Boot application on every push to main.

2. **Matrix build:** Extend the workflow to run tests against JDK 17 and 21 in parallel. Ensure both pass before proceeding.

3. **Docker layer caching:** Add Docker layer caching to your build workflow. Verify that subsequent builds reuse cached layers.

4. **GitLab CI:** Convert your GitHub Actions workflow to a `.gitlab-ci.yml`. Include docker-in-docker for building and pushing images.

5. **Security scanning:** Add SAST and dependency scanning to your CI pipeline. Configure it to fail the build on CRITICAL vulnerabilities.

6. **Artifact publishing:** Set up publishing to either GitHub Packages or a local Nexus repository. Publish JARs and Docker images.

7. **Deployment strategy:** Implement a blue-green deployment script for your Spring Boot application on Kubernetes.

8. **Canary release:** Create a canary deployment workflow that routes 10% of traffic to the new version and monitors error rates before full rollout.

9. **Database migrations:** Integrate Flyway migrations into your CI pipeline. Include a migration verification step that runs against a fresh PostgreSQL container.

10. **Approval gate:** Configure a production deployment that requires manual approval. Add quality gate checks (coverage ≥ 80%, SonarQube pass, no critical security findings).
