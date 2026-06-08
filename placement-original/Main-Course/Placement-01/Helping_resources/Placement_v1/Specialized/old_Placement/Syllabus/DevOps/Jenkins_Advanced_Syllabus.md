# 🔧 Jenkins Advanced Syllabus
*Duration: 4 weeks | Focus: CI/CD Automation*

## Week 1: Jenkins Fundamentals 🟢

### Installation & Setup
```bash
# Docker installation
docker run -d \
  --name jenkins \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  jenkins/jenkins:lts

# Ubuntu installation
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update && sudo apt install jenkins

# Initial setup
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

### Basic Configuration
```groovy
// System configuration
// Manage Jenkins > Configure System

// Global Tool Configuration
// Git: /usr/bin/git
// Maven: /usr/share/maven
// JDK: /usr/lib/jvm/java-11-openjdk
// Node.js: /usr/bin/node

// Security configuration
// Enable security
// Jenkins' own user database
// Allow users to sign up: false
// Authorization: Matrix-based security
```

### First Pipeline
```groovy
// Freestyle Job
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/user/repo.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }
        
        stage('Test') {
            steps {
                sh 'mvn test'
            }
            post {
                always {
                    junit 'target/surefire-reports/*.xml'
                }
            }
        }
        
        stage('Package') {
            steps {
                sh 'mvn package'
            }
            post {
                success {
                    archiveArtifacts 'target/*.jar'
                }
            }
        }
    }
}
```

## Week 2: Pipeline as Code 🟡

### Declarative Pipeline
```groovy
pipeline {
    agent {
        docker {
            image 'node:16-alpine'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    
    environment {
        NODE_ENV = 'production'
        API_KEY = credentials('api-key')
        DOCKER_REGISTRY = 'your-registry.com'
    }
    
    parameters {
        choice(
            name: 'ENVIRONMENT',
            choices: ['dev', 'staging', 'prod'],
            description: 'Deployment environment'
        )
        booleanParam(
            name: 'SKIP_TESTS',
            defaultValue: false,
            description: 'Skip test execution'
        )
    }
    
    triggers {
        pollSCM('H/5 * * * *')
        cron('H 2 * * *')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
            post {
                always {
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'reports',
                        reportFiles: 'eslint.html',
                        reportName: 'ESLint Report'
                    ])
                }
            }
        }
        
        stage('Test') {
            when {
                not { params.SKIP_TESTS }
            }
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh 'npm run test:unit'
                    }
                    post {
                        always {
                            publishTestResults testResultsPattern: 'test-results.xml'
                            publishCoverage adapters: [
                                istanbulCoberturaAdapter('coverage/cobertura-coverage.xml')
                            ]
                        }
                    }
                }
                stage('Integration Tests') {
                    steps {
                        sh 'npm run test:integration'
                    }
                }
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Docker Build') {
            steps {
                script {
                    def image = docker.build("${DOCKER_REGISTRY}/myapp:${BUILD_NUMBER}")
                    docker.withRegistry("https://${DOCKER_REGISTRY}", 'docker-registry-credentials') {
                        image.push()
                        image.push('latest')
                    }
                }
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                script {
                    if (params.ENVIRONMENT == 'prod') {
                        input message: 'Deploy to production?', ok: 'Deploy'
                    }
                    
                    sh """
                        kubectl set image deployment/myapp \
                        myapp=${DOCKER_REGISTRY}/myapp:${BUILD_NUMBER} \
                        --namespace=${params.ENVIRONMENT}
                    """
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            slackSend(
                channel: '#deployments',
                color: 'good',
                message: "✅ Build successful: ${env.JOB_NAME} - ${env.BUILD_NUMBER}"
            )
        }
        failure {
            slackSend(
                channel: '#deployments',
                color: 'danger',
                message: "❌ Build failed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}"
            )
            emailext(
                subject: "Build Failed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}",
                body: "Build failed. Check console output at ${env.BUILD_URL}",
                to: "${env.CHANGE_AUTHOR_EMAIL}"
            )
        }
    }
}
```

### Scripted Pipeline
```groovy
node {
    def app
    
    stage('Checkout') {
        checkout scm
    }
    
    stage('Build Image') {
        app = docker.build("myapp:${env.BUILD_ID}")
    }
    
    stage('Test Image') {
        app.inside {
            sh 'npm test'
        }
    }
    
    stage('Push Image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
    
    stage('Deploy') {
        if (env.BRANCH_NAME == 'main') {
            sh """
                helm upgrade --install myapp ./helm-chart \
                --set image.tag=${env.BUILD_NUMBER} \
                --namespace production
            """
        }
    }
}
```

## Week 3: Advanced Features 🟠

### Shared Libraries
```groovy
// vars/deployApp.groovy
def call(Map config) {
    pipeline {
        agent any
        stages {
            stage('Deploy') {
                steps {
                    script {
                        sh """
                            kubectl set image deployment/${config.appName} \
                            ${config.appName}=${config.image}:${config.tag} \
                            --namespace=${config.namespace}
                        """
                        
                        // Wait for rollout
                        sh "kubectl rollout status deployment/${config.appName} --namespace=${config.namespace}"
                        
                        // Health check
                        sh """
                            kubectl wait --for=condition=available \
                            deployment/${config.appName} \
                            --namespace=${config.namespace} \
                            --timeout=300s
                        """
                    }
                }
            }
        }
    }
}

// vars/buildDockerImage.groovy
def call(String imageName, String tag = 'latest') {
    script {
        def image = docker.build("${imageName}:${tag}")
        return image
    }
}

// Usage in Jenkinsfile
@Library('shared-library') _

pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    def image = buildDockerImage('myapp', env.BUILD_NUMBER)
                }
            }
        }
        stage('Deploy') {
            steps {
                deployApp([
                    appName: 'myapp',
                    image: 'myapp',
                    tag: env.BUILD_NUMBER,
                    namespace: 'production'
                ])
            }
        }
    }
}
```

### Multi-branch Pipeline
```groovy
// Jenkinsfile for multi-branch
pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }
        
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
        
        stage('Deploy to Dev') {
            when {
                branch 'develop'
            }
            steps {
                sh 'deploy-to-dev.sh'
            }
        }
        
        stage('Deploy to Staging') {
            when {
                branch 'release/*'
            }
            steps {
                sh 'deploy-to-staging.sh'
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Deploy to production?'
                sh 'deploy-to-prod.sh'
            }
        }
    }
}

// Branch-specific configuration
// Jenkinsfile.dev
pipeline {
    agent any
    stages {
        stage('Quick Build') {
            steps {
                sh 'mvn compile -DskipTests'
            }
        }
    }
}
```

### Blue Ocean & Pipeline Visualization
```groovy
// Blue Ocean compatible pipeline
pipeline {
    agent any
    
    stages {
        stage('Parallel Execution') {
            parallel {
                stage('Frontend') {
                    steps {
                        dir('frontend') {
                            sh 'npm install'
                            sh 'npm run build'
                            sh 'npm test'
                        }
                    }
                }
                stage('Backend') {
                    steps {
                        dir('backend') {
                            sh 'mvn clean compile'
                            sh 'mvn test'
                            sh 'mvn package'
                        }
                    }
                }
                stage('Database Migration') {
                    steps {
                        sh 'flyway migrate'
                    }
                }
            }
        }
        
        stage('Integration Tests') {
            steps {
                sh 'docker-compose up -d'
                sh 'npm run test:e2e'
            }
            post {
                always {
                    sh 'docker-compose down'
                }
            }
        }
    }
}
```

## Week 4: Production & Administration 🔴

### Jenkins Administration
```groovy
// Configuration as Code (JCasC)
// jenkins.yaml
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
        name: "worker-1"
        remoteFS: "/home/jenkins"
        launcher:
          ssh:
            host: "worker-1.example.com"
            credentialsId: "worker-ssh-key"

tool:
  git:
    installations:
      - name: "Default"
        home: "/usr/bin/git"
  
  maven:
    installations:
      - name: "Maven-3.8"
        home: "/usr/share/maven"

credentials:
  system:
    domainCredentials:
      - credentials:
          - usernamePassword:
              scope: GLOBAL
              id: "docker-hub"
              username: "${DOCKER_HUB_USER}"
              password: "${DOCKER_HUB_PASSWORD}"
          - string:
              scope: GLOBAL
              id: "api-key"
              secret: "${API_KEY}"
```

### Distributed Builds
```groovy
// Master-Agent setup
pipeline {
    agent {
        label 'docker && linux'
    }
    
    stages {
        stage('Parallel Builds') {
            parallel {
                stage('Build on Linux') {
                    agent {
                        label 'linux'
                    }
                    steps {
                        sh 'make build-linux'
                    }
                }
                stage('Build on Windows') {
                    agent {
                        label 'windows'
                    }
                    steps {
                        bat 'build.bat'
                    }
                }
                stage('Build on macOS') {
                    agent {
                        label 'macos'
                    }
                    steps {
                        sh 'make build-macos'
                    }
                }
            }
        }
    }
}

// Dynamic agent provisioning
pipeline {
    agent {
        kubernetes {
            yaml """
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: maven
    image: maven:3.8-openjdk-11
    command:
    - cat
    tty: true
  - name: docker
    image: docker:latest
    command:
    - cat
    tty: true
    volumeMounts:
    - mountPath: /var/run/docker.sock
      name: docker-sock
  volumes:
  - name: docker-sock
    hostPath:
      path: /var/run/docker.sock
"""
        }
    }
    
    stages {
        stage('Build') {
            steps {
                container('maven') {
                    sh 'mvn clean package'
                }
            }
        }
        stage('Docker Build') {
            steps {
                container('docker') {
                    sh 'docker build -t myapp .'
                }
            }
        }
    }
}
```

### Security & Monitoring
```groovy
// Security scanning pipeline
pipeline {
    agent any
    
    stages {
        stage('SAST Scan') {
            steps {
                sh 'sonar-scanner'
            }
            post {
                always {
                    publishSonarQubeQualityGate abortPipeline: true
                }
            }
        }
        
        stage('Dependency Check') {
            steps {
                sh 'dependency-check --project myapp --scan .'
            }
            post {
                always {
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'reports',
                        reportFiles: 'dependency-check-report.html',
                        reportName: 'Dependency Check Report'
                    ])
                }
            }
        }
        
        stage('Container Scan') {
            steps {
                sh 'trivy image myapp:latest'
            }
        }
    }
}

// Monitoring and alerting
pipeline {
    agent any
    
    options {
        timeout(time: 30, unit: 'MINUTES')
        retry(3)
        timestamps()
    }
    
    stages {
        stage('Deploy') {
            steps {
                script {
                    try {
                        sh 'deploy.sh'
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        throw e
                    }
                }
            }
        }
    }
    
    post {
        always {
            // Collect metrics
            sh 'collect-metrics.sh'
        }
        failure {
            // Alert on failure
            slackSend(
                channel: '#alerts',
                color: 'danger',
                message: "🚨 Deployment failed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}"
            )
        }
    }
}
```

### Backup & Disaster Recovery
```bash
# Jenkins backup script
#!/bin/bash
JENKINS_HOME="/var/lib/jenkins"
BACKUP_DIR="/backup/jenkins"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory
mkdir -p ${BACKUP_DIR}/${DATE}

# Stop Jenkins
sudo systemctl stop jenkins

# Backup Jenkins home
tar -czf ${BACKUP_DIR}/${DATE}/jenkins_home.tar.gz -C ${JENKINS_HOME} .

# Backup configuration
cp -r ${JENKINS_HOME}/config.xml ${BACKUP_DIR}/${DATE}/
cp -r ${JENKINS_HOME}/jobs ${BACKUP_DIR}/${DATE}/
cp -r ${JENKINS_HOME}/plugins ${BACKUP_DIR}/${DATE}/
cp -r ${JENKINS_HOME}/users ${BACKUP_DIR}/${DATE}/

# Start Jenkins
sudo systemctl start jenkins

# Cleanup old backups (keep last 7 days)
find ${BACKUP_DIR} -type d -mtime +7 -exec rm -rf {} \;

# Restore script
#!/bin/bash
BACKUP_FILE=$1
JENKINS_HOME="/var/lib/jenkins"

sudo systemctl stop jenkins
sudo rm -rf ${JENKINS_HOME}/*
sudo tar -xzf ${BACKUP_FILE} -C ${JENKINS_HOME}
sudo chown -R jenkins:jenkins ${JENKINS_HOME}
sudo systemctl start jenkins
```

## Interview Questions
1. Jenkins architecture and components
2. Pipeline as Code benefits
3. Shared libraries implementation
4. Multi-branch pipeline strategies
5. Agent and node management
6. Security best practices
7. Plugin management and updates
8. Backup and disaster recovery
9. Performance optimization
10. Integration with other tools

## Hands-on Projects
- Complete CI/CD pipeline setup
- Multi-environment deployment
- Security scanning integration
- Monitoring and alerting
- Disaster recovery implementation

## Best Practices
- Use Pipeline as Code
- Implement proper error handling
- Secure credentials management
- Regular backup procedures
- Monitor pipeline performance
- Use shared libraries for reusability