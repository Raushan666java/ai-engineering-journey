# 🔄 Module 3: CI/CD Pipelines - Complete Course

## Week 7: CI/CD Fundamentals

### Day 1-2: CI/CD Concepts

#### Understanding CI/CD

**Continuous Integration (CI):**
- Developers integrate code frequently (multiple times per day)
- Each integration triggers automated build and test
- Early detection of integration issues
- Maintains a working main branch

**Continuous Delivery (CD):**
- Extension of CI
- Ensures code is always in deployable state
- Manual approval for production deployment
- Automated deployment to staging environments

**Continuous Deployment:**
- Extension of Continuous Delivery
- Automatic deployment to production
- No manual intervention required
- High confidence in automated testing

#### CI/CD Pipeline Stages

**Typical Pipeline Flow:**
```
Source → Build → Test → Package → Deploy → Monitor
   ↓        ↓      ↓       ↓        ↓        ↓
 Git    Compile  Unit   Docker   Staging  Metrics
Commit   Code   Tests   Image   Deploy   Alerts
```

**Detailed Pipeline Stages:**

**1. Source Control:**
```bash
# Developer workflow
git checkout -b feature/user-auth
# Make changes
git add .
git commit -m "feat: add user authentication"
git push origin feature/user-auth
# Create pull request
```

**2. Build Stage:**
```bash
# Install dependencies
npm ci

# Compile/transpile code
npm run build

# Generate artifacts
npm run package
```

**3. Test Stage:**
```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# End-to-end tests
npm run test:e2e

# Code quality checks
npm run lint
npm run security-audit
```

**4. Package Stage:**
```bash
# Build Docker image
docker build -t my-app:${BUILD_NUMBER} .

# Push to registry
docker push my-registry.com/my-app:${BUILD_NUMBER}
```

**5. Deploy Stage:**
```bash
# Deploy to staging
kubectl apply -f k8s/staging/

# Run smoke tests
npm run test:smoke

# Deploy to production (if tests pass)
kubectl apply -f k8s/production/
```

#### Benefits of CI/CD

**For Development Teams:**
- Faster feedback loops
- Reduced integration problems
- Higher code quality
- Automated testing coverage
- Consistent deployment process

**For Business:**
- Faster time to market
- Reduced deployment risks
- Better customer satisfaction
- Lower operational costs
- Improved reliability

#### CI/CD Best Practices

**Code Quality:**
```yaml
# Example quality gates
quality_gates:
  - code_coverage: ">= 80%"
  - security_scan: "no_high_vulnerabilities"
  - performance_test: "response_time < 200ms"
  - lint_score: ">= 9.0"
```

**Testing Strategy:**
```
Testing Pyramid:
    /\
   /E2E\     <- Few, slow, expensive
  /______\
 /Integration\ <- Some, medium speed
/______________\
/   Unit Tests  \ <- Many, fast, cheap
```

### Day 3-4: GitHub Actions Basics

#### Understanding GitHub Actions

**Core Concepts:**
- **Workflow**: Automated process defined in YAML
- **Job**: Set of steps that execute on same runner
- **Step**: Individual task in a job
- **Action**: Reusable unit of code
- **Runner**: Server that runs workflows

#### Basic Workflow Structure

**Simple CI Workflow:**
```yaml
# .github/workflows/ci.yml
name: Continuous Integration

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run tests
      run: npm test
    
    - name: Upload coverage reports
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info
```

#### Workflow Triggers

**Event Triggers:**
```yaml
# Push to specific branches
on:
  push:
    branches: [ main, develop ]
    paths: [ 'src/**', 'package.json' ]

# Pull requests
on:
  pull_request:
    branches: [ main ]
    types: [ opened, synchronize, reopened ]

# Scheduled runs
on:
  schedule:
    - cron: '0 2 * * 1-5'  # Weekdays at 2 AM

# Manual trigger
on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Environment to deploy'
        required: true
        default: 'staging'
        type: choice
        options:
        - staging
        - production

# Multiple triggers
on: [push, pull_request, workflow_dispatch]
```

#### Jobs and Steps

**Multiple Jobs:**
```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npm run lint

  test:
    runs-on: ubuntu-latest
    needs: lint  # Wait for lint job to complete
    strategy:
      matrix:
        node-version: [16, 18, 20]
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - run: npm test

  build:
    runs-on: ubuntu-latest
    needs: [lint, test]
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npm run build
    - name: Upload build artifacts
      uses: actions/upload-artifact@v3
      with:
        name: build-files
        path: dist/
```

#### Environment Variables and Secrets

**Environment Variables:**
```yaml
env:
  NODE_ENV: production
  API_URL: https://api.example.com

jobs:
  deploy:
    runs-on: ubuntu-latest
    env:
      DEPLOY_ENV: staging
    steps:
    - name: Deploy application
      run: |
        echo "Deploying to $DEPLOY_ENV"
        echo "API URL: $API_URL"
      env:
        DATABASE_URL: ${{ secrets.DATABASE_URL }}
```

**Using Secrets:**
```yaml
steps:
- name: Login to Docker Hub
  uses: docker/login-action@v2
  with:
    username: ${{ secrets.DOCKER_USERNAME }}
    password: ${{ secrets.DOCKER_PASSWORD }}

- name: Deploy to AWS
  env:
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
  run: |
    aws s3 sync ./dist s3://my-bucket/
```

### Day 5-7: Pipeline Design

#### Advanced Pipeline Example

**Complete CI/CD Pipeline:**
```yaml
name: Full CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  # Code Quality and Security
  quality:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
      with:
        fetch-depth: 0  # Full history for SonarQube

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run ESLint
      run: npm run lint -- --format=json --output-file=eslint-report.json
      continue-on-error: true

    - name: Run Prettier check
      run: npm run format:check

    - name: Security audit
      run: npm audit --audit-level=high

    - name: Run SonarQube scan
      uses: sonarqube-quality-gate-action@master
      env:
        SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}

  # Unit and Integration Tests
  test:
    runs-on: ubuntu-latest
    needs: quality
    
    services:
      postgres:
        image: postgres:13
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432

      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 6379:6379

    strategy:
      matrix:
        node-version: [16, 18, 20]

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Setup Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run unit tests
      run: npm run test:unit
      env:
        CI: true

    - name: Run integration tests
      run: npm run test:integration
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test
        REDIS_URL: redis://localhost:6379

    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info
        flags: unittests
        name: codecov-umbrella

  # Build and Package
  build:
    runs-on: ubuntu-latest
    needs: [quality, test]
    if: github.event_name == 'push'
    
    outputs:
      image-digest: ${{ steps.build.outputs.digest }}
      image-tag: ${{ steps.meta.outputs.tags }}

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v2

    - name: Login to Container Registry
      uses: docker/login-action@v2
      with:
        registry: ${{ env.REGISTRY }}
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}

    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v4
      with:
        images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
        tags: |
          type=ref,event=branch
          type=ref,event=pr
          type=sha,prefix={{branch}}-
          type=raw,value=latest,enable={{is_default_branch}}

    - name: Build and push Docker image
      id: build
      uses: docker/build-push-action@v4
      with:
        context: .
        push: true
        tags: ${{ steps.meta.outputs.tags }}
        labels: ${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

    - name: Generate SBOM
      uses: anchore/sbom-action@v0
      with:
        image: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}

  # Security Scanning
  security:
    runs-on: ubuntu-latest
    needs: build
    if: github.event_name == 'push'

    steps:
    - name: Run Trivy vulnerability scanner
      uses: aquasecurity/trivy-action@master
      with:
        image-ref: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
        format: 'sarif'
        output: 'trivy-results.sarif'

    - name: Upload Trivy scan results
      uses: github/codeql-action/upload-sarif@v2
      with:
        sarif_file: 'trivy-results.sarif'

  # Deploy to Staging
  deploy-staging:
    runs-on: ubuntu-latest
    needs: [build, security]
    if: github.ref == 'refs/heads/develop'
    environment: staging

    steps:
    - name: Deploy to staging
      run: |
        echo "Deploying ${{ needs.build.outputs.image-tag }} to staging"
        # Add actual deployment commands here

    - name: Run smoke tests
      run: |
        echo "Running smoke tests against staging"
        # Add smoke test commands

  # Deploy to Production
  deploy-production:
    runs-on: ubuntu-latest
    needs: [build, security]
    if: github.ref == 'refs/heads/main'
    environment: production

    steps:
    - name: Deploy to production
      run: |
        echo "Deploying ${{ needs.build.outputs.image-tag }} to production"
        # Add actual deployment commands

    - name: Notify deployment
      uses: 8398a7/action-slack@v3
      with:
        status: success
        text: "🚀 Successfully deployed to production!"
      env:
        SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

#### Pipeline Optimization

**Caching Strategies:**
```yaml
# Cache dependencies
- name: Cache node modules
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-

# Cache Docker layers
- name: Set up Docker Buildx
  uses: docker/setup-buildx-action@v2

- name: Build and push
  uses: docker/build-push-action@v4
  with:
    cache-from: type=gha
    cache-to: type=gha,mode=max
```

**Parallel Execution:**
```yaml
jobs:
  test:
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node-version: [16, 18, 20]
        include:
          - os: ubuntu-latest
            node-version: 18
            coverage: true
    runs-on: ${{ matrix.os }}
```

---

## Week 8: Advanced CI/CD Tools

### Day 1-3: Jenkins Setup

#### Jenkins Installation

**Docker Installation:**
```bash
# Run Jenkins in Docker
docker run -d \
  --name jenkins \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  jenkins/jenkins:lts

# Get initial admin password
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```

**Linux Installation:**
```bash
# Add Jenkins repository
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'

# Install Jenkins
sudo apt update
sudo apt install jenkins

# Start Jenkins
sudo systemctl start jenkins
sudo systemctl enable jenkins
```

#### Jenkins Configuration

**Initial Setup:**
1. Access Jenkins at `http://localhost:8080`
2. Enter initial admin password
3. Install suggested plugins
4. Create admin user
5. Configure Jenkins URL

**Essential Plugins:**
```bash
# Install via Jenkins CLI or UI
- Pipeline
- Git
- Docker Pipeline
- Blue Ocean
- Slack Notification
- SonarQube Scanner
- Kubernetes
- AWS Steps
```

#### Jenkinsfile (Pipeline as Code)

**Basic Declarative Pipeline:**
```groovy
pipeline {
    agent any
    
    environment {
        NODE_VERSION = '18'
        DOCKER_REGISTRY = 'your-registry.com'
        IMAGE_NAME = 'my-app'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Setup') {
            steps {
                script {
                    // Install Node.js
                    sh "nvm use ${NODE_VERSION}"
                    sh 'npm ci'
                }
            }
        }
        
        stage('Quality Gates') {
            parallel {
                stage('Lint') {
                    steps {
                        sh 'npm run lint'
                        publishHTML([
                            allowMissing: false,
                            alwaysLinkToLastBuild: true,
                            keepAll: true,
                            reportDir: 'reports',
                            reportFiles: 'lint-report.html',
                            reportName: 'Lint Report'
                        ])
                    }
                }
                
                stage('Unit Tests') {
                    steps {
                        sh 'npm test'
                        publishTestResults testResultsPattern: 'test-results.xml'
                        publishCoverage adapters: [
                            coberturaAdapter('coverage/cobertura-coverage.xml')
                        ]
                    }
                }
                
                stage('Security Scan') {
                    steps {
                        sh 'npm audit'
                        script {
                            def scanResult = sh(
                                script: 'docker run --rm -v $(pwd):/app clair-scanner',
                                returnStatus: true
                            )
                            if (scanResult != 0) {
                                error("Security scan failed")
                            }
                        }
                    }
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    def image = docker.build("${DOCKER_REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER}")
                    docker.withRegistry("https://${DOCKER_REGISTRY}", 'docker-registry-credentials') {
                        image.push()
                        image.push('latest')
                    }
                }
            }
        }
        
        stage('Deploy to Staging') {
            when {
                branch 'develop'
            }
            steps {
                script {
                    deployToEnvironment('staging')
                }
            }
        }
        
        stage('Integration Tests') {
            when {
                branch 'develop'
            }
            steps {
                sh 'npm run test:integration'
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
                script {
                    deployToEnvironment('production')
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            slackSend channel: '#deployments',
                     color: 'good',
                     message: "✅ Pipeline succeeded for ${env.JOB_NAME} - ${env.BUILD_NUMBER}"
        }
        failure {
            slackSend channel: '#deployments',
                     color: 'danger',
                     message: "❌ Pipeline failed for ${env.JOB_NAME} - ${env.BUILD_NUMBER}"
        }
    }
}

def deployToEnvironment(environment) {
    sh """
        helm upgrade --install my-app-${environment} ./helm-chart \\
            --namespace ${environment} \\
            --set image.tag=${BUILD_NUMBER} \\
            --set environment=${environment}
    """
}
```

**Scripted Pipeline:**
```groovy
node {
    def app
    
    stage('Clone repository') {
        checkout scm
    }
    
    stage('Build image') {
        app = docker.build("my-app:${env.BUILD_ID}")
    }
    
    stage('Test image') {
        app.inside {
            sh 'npm test'
        }
    }
    
    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}
```

#### Jenkins Configuration as Code (JCasC)

**jenkins.yaml:**
```yaml
jenkins:
  systemMessage: "Jenkins configured automatically by Jenkins Configuration as Code plugin"
  
  securityRealm:
    local:
      allowsSignup: false
      users:
       - id: admin
         password: ${JENKINS_ADMIN_PASSWORD}
  
  authorizationStrategy:
    globalMatrix:
      permissions:
        - "Overall/Administer:admin"
        - "Overall/Read:authenticated"

  nodes:
    - permanent:
        name: "docker-agent"
        remoteFS: "/home/jenkins"
        launcher:
          ssh:
            host: "docker-agent"
            credentialsId: "docker-agent-key"

credentials:
  system:
    domainCredentials:
    - credentials:
      - usernamePassword:
          scope: GLOBAL
          id: "docker-registry"
          username: ${DOCKER_USERNAME}
          password: ${DOCKER_PASSWORD}
      - string:
          scope: GLOBAL
          id: "slack-token"
          secret: ${SLACK_TOKEN}

tool:
  git:
    installations:
    - name: "Default"
      home: "git"
  
  nodejs:
    installations:
    - name: "NodeJS 18"
      properties:
      - installSource:
          installers:
          - nodeJSInstaller:
              id: "18.17.0"
              npmPackagesRefreshHours: 72
```

### Day 4-5: Pipeline Security

#### Security Best Practices

**Secrets Management:**
```groovy
pipeline {
    agent any
    
    environment {
        // Use Jenkins credentials
        DOCKER_CREDS = credentials('docker-registry-credentials')
        API_KEY = credentials('api-key')
    }
    
    stages {
        stage('Deploy') {
            steps {
                script {
                    // Use credentials securely
                    withCredentials([
                        usernamePassword(
                            credentialsId: 'aws-credentials',
                            usernameVariable: 'AWS_ACCESS_KEY_ID',
                            passwordVariable: 'AWS_SECRET_ACCESS_KEY'
                        )
                    ]) {
                        sh 'aws s3 sync ./dist s3://my-bucket/'
                    }
                }
            }
        }
    }
}
```

**Security Scanning Integration:**
```groovy
stage('Security Scans') {
    parallel {
        stage('SAST Scan') {
            steps {
                script {
                    // SonarQube scan
                    withSonarQubeEnv('SonarQube') {
                        sh 'sonar-scanner'
                    }
                    
                    // Wait for quality gate
                    timeout(time: 10, unit: 'MINUTES') {
                        def qg = waitForQualityGate()
                        if (qg.status != 'OK') {
                            error "Pipeline aborted due to quality gate failure: ${qg.status}"
                        }
                    }
                }
            }
        }
        
        stage('Dependency Scan') {
            steps {
                sh 'npm audit --audit-level=high'
                
                // OWASP Dependency Check
                dependencyCheck additionalArguments: '--format XML --format JSON', odcInstallation: 'Default'
                dependencyCheckPublisher pattern: 'dependency-check-report.xml'
            }
        }
        
        stage('Container Scan') {
            steps {
                script {
                    // Trivy scan
                    sh """
                        docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \\
                            -v \$(pwd):/tmp aquasec/trivy \\
                            image --exit-code 1 --severity HIGH,CRITICAL \\
                            my-app:${BUILD_NUMBER}
                    """
                }
            }
        }
    }
}
```

#### Access Control and Permissions

**Role-Based Access Control:**
```groovy
// In Jenkins configuration
authorizationStrategy:
  roleBased:
    roles:
      global:
        - name: "admin"
          description: "Jenkins administrators"
          permissions:
            - "Overall/Administer"
        - name: "developer"
          description: "Developers"
          permissions:
            - "Overall/Read"
            - "Job/Build"
            - "Job/Cancel"
            - "Job/Read"
      items:
        - name: "frontend-team"
          pattern: "frontend-.*"
          permissions:
            - "Job/Build"
            - "Job/Configure"
            - "Job/Read"
```

### Day 6-7: Artifact Management

#### Artifact Storage

**Jenkins Artifacts:**
```groovy
pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'npm run build'
                
                // Archive artifacts
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
                
                // Stash for later use
                stash includes: 'dist/**/*', name: 'build-artifacts'
            }
        }
        
        stage('Deploy') {
            steps {
                // Unstash artifacts
                unstash 'build-artifacts'
                
                sh 'deploy.sh'
            }
        }
    }
}
```

**Docker Registry Integration:**
```groovy
stage('Push to Registry') {
    steps {
        script {
            def image = docker.build("my-app:${BUILD_NUMBER}")
            
            // Push to multiple registries
            docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                image.push("${BUILD_NUMBER}")
                image.push("latest")
            }
            
            docker.withRegistry('https://my-private-registry.com', 'private-registry-credentials') {
                image.push("${BUILD_NUMBER}")
            }
        }
    }
}
```

#### Nexus Repository Integration

**Maven/Gradle Artifacts:**
```groovy
stage('Publish Artifacts') {
    steps {
        script {
            // Publish to Nexus
            nexusArtifactUploader(
                nexusVersion: 'nexus3',
                protocol: 'http',
                nexusUrl: 'nexus.example.com:8081',
                groupId: 'com.example',
                version: "${BUILD_NUMBER}",
                repository: 'maven-releases',
                credentialsId: 'nexus-credentials',
                artifacts: [
                    [artifactId: 'my-app',
                     classifier: '',
                     file: 'target/my-app.jar',
                     type: 'jar']
                ]
            )
        }
    }
}
```

**NPM Package Publishing:**
```groovy
stage('Publish NPM Package') {
    steps {
        script {
            // Update version
            sh "npm version ${BUILD_NUMBER} --no-git-tag-version"
            
            // Publish to NPM registry
            withCredentials([string(credentialsId: 'npm-token', variable: 'NPM_TOKEN')]) {
                sh '''
                    echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
                    npm publish
                '''
            }
        }
    }
}
```

---

## Week 9: Deployment Strategies

### Day 1-2: Blue-Green Deployment

#### Understanding Blue-Green Deployment

**Concept:**
- Two identical production environments (Blue and Green)
- Only one serves production traffic at a time
- Switch traffic instantly between environments
- Easy rollback if issues occur

**Benefits:**
- Zero-downtime deployments
- Instant rollback capability
- Full testing in production-like environment
- Reduced deployment risk

#### Implementation Examples

**Docker-based Blue-Green:**
```bash
#!/bin/bash
# blue-green-deploy.sh

set -e

# Configuration
APP_NAME="my-app"
NEW_VERSION=$1
HEALTH_CHECK_URL="http://localhost/health"
NGINX_CONFIG="/etc/nginx/sites-available/default"

if [ -z "$NEW_VERSION" ]; then
    echo "Usage: $0 <version>"
    exit 1
fi

# Determine current and new colors
CURRENT_COLOR=$(docker ps --format "table {{.Names}}" | grep $APP_NAME | head -1 | cut -d'-' -f2)
if [[ "$CURRENT_COLOR" == "blue" ]]; then
    NEW_COLOR="green"
    OLD_COLOR="blue"
else
    NEW_COLOR="blue"
    OLD_COLOR="green"
fi

echo "Current: $OLD_COLOR, Deploying: $NEW_COLOR"

# Deploy new version
echo "Deploying $APP_NAME:$NEW_VERSION to $NEW_COLOR environment..."
docker run -d \
    --name $APP_NAME-$NEW_COLOR \
    --network app-network \
    -e NODE_ENV=production \
    $APP_NAME:$NEW_VERSION

# Wait for container to be ready
echo "Waiting for $NEW_COLOR environment to be ready..."
sleep 30

# Health check
echo "Performing health check..."
for i in {1..10}; do
    if curl -f http://$APP_NAME-$NEW_COLOR:3000/health; then
        echo "Health check passed!"
        break
    fi
    if [ $i -eq 10 ]; then
        echo "Health check failed after 10 attempts"
        docker stop $APP_NAME-$NEW_COLOR
        docker rm $APP_NAME-$NEW_COLOR
        exit 1
    fi
    sleep 10
done

# Update load balancer configuration
echo "Switching traffic to $NEW_COLOR environment..."
sed -i "s/$APP_NAME-$OLD_COLOR/$APP_NAME-$NEW_COLOR/g" $NGINX_CONFIG
nginx -s reload

# Verify traffic switch
sleep 10
if curl -f $HEALTH_CHECK_URL; then
    echo "Traffic switch successful!"
    
    # Stop and remove old environment
    echo "Stopping $OLD_COLOR environment..."
    docker stop $APP_NAME-$OLD_COLOR || true
    docker rm $APP_NAME-$OLD_COLOR || true
    
    echo "Deployment completed successfully!"
else
    echo "Traffic switch failed, rolling back..."
    sed -i "s/$APP_NAME-$NEW_COLOR/$APP_NAME-$OLD_COLOR/g" $NGINX_CONFIG
    nginx -s reload
    docker stop $APP_NAME-$NEW_COLOR
    docker rm $APP_NAME-$NEW_COLOR
    exit 1
fi
```

**Kubernetes Blue-Green:**
```yaml
# blue-green-deployment.yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  selector:
    app: my-app
    version: blue  # Switch between blue/green
  ports:
  - port: 80
    targetPort: 3000

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app-blue
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
      version: blue
  template:
    metadata:
      labels:
        app: my-app
        version: blue
    spec:
      containers:
      - name: my-app
        image: my-app:v1.0
        ports:
        - containerPort: 3000

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app-green
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
      version: green
  template:
    metadata:
      labels:
        app: my-app
        version: green
    spec:
      containers:
      - name: my-app
        image: my-app:v2.0
        ports:
        - containerPort: 3000
```

**Blue-Green Switch Script:**
```bash
#!/bin/bash
# k8s-blue-green-switch.sh

CURRENT_VERSION=$(kubectl get service my-app-service -o jsonpath='{.spec.selector.version}')
if [ "$CURRENT_VERSION" = "blue" ]; then
    NEW_VERSION="green"
else
    NEW_VERSION="blue"
fi

echo "Switching from $CURRENT_VERSION to $NEW_VERSION"

# Update service selector
kubectl patch service my-app-service -p '{"spec":{"selector":{"version":"'$NEW_VERSION'"}}}'

# Verify deployment
kubectl rollout status deployment/my-app-$NEW_VERSION

echo "Traffic switched to $NEW_VERSION environment"
```

### Day 3-4: Canary Releases

#### Understanding Canary Deployment

**Concept:**
- Gradually roll out new version to subset of users
- Monitor metrics and user feedback
- Increase traffic percentage if successful
- Quick rollback if issues detected

**Traffic Distribution:**
```
Version 1.0: 90% traffic
Version 2.0: 10% traffic (canary)

If successful:
Version 1.0: 50% traffic
Version 2.0: 50% traffic

Finally:
Version 2.0: 100% traffic
```

#### Implementation Examples

**Nginx-based Canary:**
```nginx
# nginx.conf
upstream backend_stable {
    server app-v1-1:3000;
    server app-v1-2:3000;
    server app-v1-3:3000;
}

upstream backend_canary {
    server app-v2-1:3000;
}

split_clients $remote_addr $variant {
    10%     canary;
    *       stable;
}

server {
    listen 80;
    
    location / {
        if ($variant = canary) {
            proxy_pass http://backend_canary;
        }
        proxy_pass http://backend_stable;
    }
}
```

**Kubernetes Canary with Istio:**
```yaml
# Virtual Service for canary deployment
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: my-app-canary
spec:
  http:
  - match:
    - headers:
        canary:
          exact: "true"
    route:
    - destination:
        host: my-app-service
        subset: canary
  - route:
    - destination:
        host: my-app-service
        subset: stable
      weight: 90
    - destination:
        host: my-app-service
        subset: canary
      weight: 10

---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: my-app-destination
spec:
  host: my-app-service
  subsets:
  - name: stable
    labels:
      version: stable
  - name: canary
    labels:
      version: canary
```

**Automated Canary with Flagger:**
```yaml
apiVersion: flagger.app/v1beta1
kind: Canary
metadata:
  name: my-app-canary
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  progressDeadlineSeconds: 60
  service:
    port: 80
    targetPort: 3000
  analysis:
    interval: 1m
    threshold: 5
    maxWeight: 50
    stepWeight: 10
    metrics:
    - name: request-success-rate
      thresholdRange:
        min: 99
      interval: 1m
    - name: request-duration
      thresholdRange:
        max: 500
      interval: 1m
    webhooks:
    - name: load-test
      url: http://flagger-loadtester.test/
      metadata:
        cmd: "hey -z 1m -q 10 -c 2 http://my-app-canary.test/"
```

#### Canary Deployment Pipeline

**Jenkins Pipeline:**
```groovy
pipeline {
    agent any
    
    parameters {
        choice(
            name: 'CANARY_PERCENTAGE',
            choices: ['10', '25', '50', '75', '100'],
            description: 'Percentage of traffic for canary'
        )
    }
    
    stages {
        stage('Deploy Canary') {
            steps {
                script {
                    // Deploy canary version
                    sh """
                        kubectl set image deployment/my-app-canary \\
                            my-app=my-app:${BUILD_NUMBER}
                        kubectl rollout status deployment/my-app-canary
                    """
                    
                    // Update traffic split
                    sh """
                        kubectl patch virtualservice my-app-vs \\
                            --type='json' \\
                            -p='[{"op": "replace", "path": "/spec/http/0/route/1/weight", "value": ${params.CANARY_PERCENTAGE}}]'
                    """
                }
            }
        }
        
        stage('Monitor Canary') {
            steps {
                script {
                    // Wait and monitor metrics
                    sleep(time: 5, unit: 'MINUTES')
                    
                    // Check error rate
                    def errorRate = sh(
                        script: "curl -s 'http://prometheus:9090/api/v1/query?query=rate(http_requests_total{status=~\"5..\"}[5m])' | jq -r '.data.result[0].value[1]'",
                        returnStdout: true
                    ).trim()
                    
                    if (errorRate.toFloat() > 0.01) {
                        error("Error rate too high: ${errorRate}")
                    }
                    
                    // Check response time
                    def responseTime = sh(
                        script: "curl -s 'http://prometheus:9090/api/v1/query?query=histogram_quantile(0.95,rate(http_request_duration_seconds_bucket[5m]))' | jq -r '.data.result[0].value[1]'",
                        returnStdout: true
                    ).trim()
                    
                    if (responseTime.toFloat() > 0.5) {
                        error("Response time too high: ${responseTime}s")
                    }
                }
            }
        }
        
        stage('Promote or Rollback') {
            steps {
                script {
                    if (params.CANARY_PERCENTAGE == '100') {
                        // Full promotion
                        sh """
                            kubectl set image deployment/my-app \\
                                my-app=my-app:${BUILD_NUMBER}
                            kubectl rollout status deployment/my-app
                            
                            # Reset canary
                            kubectl patch virtualservice my-app-vs \\
                                --type='json' \\
                                -p='[{"op": "replace", "path": "/spec/http/0/route/1/weight", "value": 0}]'
                        """
                    } else {
                        input message: 'Promote canary to next stage?', ok: 'Promote'
                    }
                }
            }
        }
    }
    
    post {
        failure {
            script {
                // Rollback canary on failure
                sh """
                    kubectl patch virtualservice my-app-vs \\
                        --type='json' \\
                        -p='[{"op": "replace", "path": "/spec/http/0/route/1/weight", "value": 0}]'
                """
            }
        }
    }
}
```

### Day 5-7: Monitoring & Rollback

#### Deployment Monitoring

**Key Metrics to Monitor:**
- Error rates
- Response times
- Throughput
- Resource utilization
- Business metrics

**Prometheus Queries:**
```promql
# Error rate
rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m])

# 95th percentile response time
histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))

# Request throughput
rate(http_requests_total[5m])

# CPU utilization
rate(container_cpu_usage_seconds_total[5m]) * 100

# Memory utilization
container_memory_usage_bytes / container_spec_memory_limit_bytes * 100
```

#### Automated Rollback

**Health Check Based Rollback:**
```bash
#!/bin/bash
# automated-rollback.sh

APP_NAME="my-app"
HEALTH_ENDPOINT="/health"
MAX_FAILURES=3
CHECK_INTERVAL=30

failure_count=0

while true; do
    if curl -f "http://$APP_NAME$HEALTH_ENDPOINT"; then
        echo "Health check passed"
        failure_count=0
    else
        echo "Health check failed"
        failure_count=$((failure_count + 1))
        
        if [ $failure_count -ge $MAX_FAILURES ]; then
            echo "Max failures reached, initiating rollback"
            kubectl rollout undo deployment/$APP_NAME
            kubectl rollout status deployment/$APP_NAME
            
            # Send alert
            curl -X POST -H 'Content-type: application/json' \
                --data '{"text":"🚨 Automatic rollback triggered for '$APP_NAME'"}' \
                $SLACK_WEBHOOK_URL
            
            break
        fi
    fi
    
    sleep $CHECK_INTERVAL
done
```

**Metrics-based Rollback:**
```yaml
# Prometheus AlertManager rule
groups:
- name: deployment.rules
  rules:
  - alert: HighErrorRate
    expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05
    for: 2m
    labels:
      severity: critical
    annotations:
      summary: "High error rate detected"
      description: "Error rate is {{ $value | humanizePercentage }}"

  - alert: HighResponseTime
    expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 1
    for: 2m
    labels:
      severity: critical
    annotations:
      summary: "High response time detected"
      description: "95th percentile response time is {{ $value }}s"
```

**Rollback Webhook:**
```python
# rollback-webhook.py
from flask import Flask, request, jsonify
import subprocess
import logging

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)

@app.route('/rollback', methods=['POST'])
def rollback():
    data = request.json
    
    # Validate alert
    if data.get('status') == 'firing':
        alert_name = data['alerts'][0]['labels']['alertname']
        
        if alert_name in ['HighErrorRate', 'HighResponseTime']:
            try:
                # Perform rollback
                result = subprocess.run([
                    'kubectl', 'rollout', 'undo', 'deployment/my-app'
                ], capture_output=True, text=True)
                
                if result.returncode == 0:
                    logging.info("Rollback successful")
                    return jsonify({"status": "success", "message": "Rollback completed"})
                else:
                    logging.error(f"Rollback failed: {result.stderr}")
                    return jsonify({"status": "error", "message": result.stderr}), 500
                    
            except Exception as e:
                logging.error(f"Rollback error: {str(e)}")
                return jsonify({"status": "error", "message": str(e)}), 500
    
    return jsonify({"status": "ignored"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

---

## 🎯 Week 7-9 Assessment Projects

### Week 7 Project: Basic CI Pipeline

**Requirements:**
1. Set up GitHub Actions workflow
2. Implement automated testing
3. Add code quality checks
4. Configure build and artifact storage
5. Add notification system

### Week 8 Project: Advanced CI/CD with Security

**Requirements:**
1. Set up Jenkins pipeline
2. Implement security scanning (SAST, dependency, container)
3. Add artifact management
4. Configure multi-environment deployment
5. Implement pipeline as code

### Week 9 Project: Production Deployment Strategy

**Requirements:**
1. Implement blue-green deployment
2. Set up canary release process
3. Add automated monitoring and alerting
4. Configure automatic rollback
5. Document deployment procedures

---

**Next: Module 4 - Cloud Platforms & Infrastructure**