# 🚀 Module 11: DevSecOps - Complete Guide

## 📚 Table of Contents
1. [DevSecOps Fundamentals](#fundamentals)
2. [CI/CD Pipeline Security](#cicd-security)
3. [Infrastructure as Code (IaC) Security](#iac-security)
4. [Container Security in CI/CD](#container-security)
5. [Secrets Management](#secrets-management)
6. [Security Testing Automation](#security-automation)
7. [Vulnerability Management](#vulnerability-management)
8. [Security as Code](#security-as-code)
9. [Compliance Automation](#compliance-automation)
10. [DevSecOps Tools & Integration](#tools-integration)

---

## 🎯 DevSecOps Fundamentals

### DevOps vs DevSecOps

```
Traditional DevOps:
Plan → Code → Build → Test → Release → Deploy → Operate → Monitor

DevSecOps (Security Integrated):
Plan (Threat Modeling)
  ↓
Code (Secure Coding, IDE Security Plugins)
  ↓
Build (SAST, Dependency Scanning)
  ↓
Test (DAST, IAST, Penetration Testing)
  ↓
Release (Security Approval Gates)
  ↓
Deploy (Configuration Management, IaC Scanning)
  ↓
Operate (Runtime Security, WAF, RASP)
  ↓
Monitor (SIEM, Threat Detection, Incident Response)
  ↓
[Continuous Feedback Loop]
```

### DevSecOps Principles

1. **Shift Left** - Integrate security early in SDLC
2. **Automation** - Automate security testing and compliance
3. **Continuous Monitoring** - Real-time threat detection
4. **Collaboration** - Dev, Sec, Ops work together
5. **Compliance as Code** - Automate compliance checks
6. **Fast Feedback** - Immediate security feedback to developers
7. **Immutable Infrastructure** - Replace, don't patch
8. **Zero Trust** - Never trust, always verify

---

## 🔧 CI/CD Pipeline Security

### 1. Secure Jenkins Pipeline

```groovy
// Jenkinsfile - Secure CI/CD Pipeline
pipeline {
    agent any
    
    environment {
        // Store credentials in Jenkins Credential Store
        DOCKER_CREDS = credentials('docker-hub-credentials')
        SONAR_TOKEN = credentials('sonarqube-token')
        SNYK_TOKEN = credentials('snyk-api-token')
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Use SSH keys for Git
                git credentialsId: 'github-ssh-key', 
                    url: 'git@github.com:org/repo.git',
                    branch: 'main'
            }
        }
        
        stage('Secret Scanning') {
            steps {
                script {
                    // Scan for hardcoded secrets
                    sh '''
                        docker run --rm -v $(pwd):/src \
                            trufflesecurity/trufflehog:latest \
                            filesystem /src --json > secrets-report.json
                    '''
                    
                    // Fail if secrets found
                    def secrets = readJSON file: 'secrets-report.json'
                    if (secrets.size() > 0) {
                        error("Secrets detected in code!")
                    }
                }
            }
        }
        
        stage('Dependency Check') {
            steps {
                // Check dependencies for vulnerabilities
                sh '''
                    pip install safety
                    safety check --json --output safety-report.json || true
                '''
                
                // Parse results
                script {
                    def report = readJSON file: 'safety-report.json'
                    def critical = report.findAll { it.severity == 'critical' }
                    if (critical.size() > 0) {
                        error("Critical vulnerabilities found!")
                    }
                }
            }
        }
        
        stage('SAST - Static Analysis') {
            steps {
                // SonarQube scan
                withSonarQubeEnv('SonarQube') {
                    sh 'sonar-scanner'
                }
                
                // Quality Gate
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        
        stage('Build') {
            steps {
                sh 'docker build -t myapp:${BUILD_NUMBER} .'
            }
        }
        
        stage('Container Scan') {
            steps {
                // Trivy container scan
                sh '''
                    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
                        aquasec/trivy image --severity HIGH,CRITICAL \
                        --exit-code 1 myapp:${BUILD_NUMBER}
                '''
            }
        }
        
        stage('DAST - Dynamic Testing') {
            steps {
                // Start application
                sh 'docker run -d -p 8080:8080 --name test-app myapp:${BUILD_NUMBER}'
                
                // Wait for app to start
                sleep 30
                
                // OWASP ZAP scan
                sh '''
                    docker run --rm --network host \
                        owasp/zap2docker-stable zap-baseline.py \
                        -t http://localhost:8080 -r zap-report.html
                '''
                
                // Stop and remove container
                sh 'docker stop test-app && docker rm test-app'
            }
        }
        
        stage('Push to Registry') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("myapp:${BUILD_NUMBER}").push()
                        docker.image("myapp:${BUILD_NUMBER}").push('latest')
                    }
                }
            }
        }
        
        stage('Deploy to Staging') {
            steps {
                // Deploy with security controls
                sh '''
                    kubectl apply -f k8s/network-policy.yaml
                    kubectl apply -f k8s/pod-security-policy.yaml
                    kubectl set image deployment/myapp myapp=myapp:${BUILD_NUMBER}
                '''
            }
        }
        
        stage('Smoke Tests') {
            steps {
                sh './run-smoke-tests.sh'
            }
        }
    }
    
    post {
        always {
            // Archive security reports
            archiveArtifacts artifacts: '*-report.*', allowEmptyArchive: true
            
            // Cleanup
            cleanWs()
        }
        
        failure {
            // Send notification
            mail to: 'security-team@company.com',
                 subject: "Pipeline Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Security issues detected. Check console output."
        }
    }
}
```

### 2. GitHub Actions Secure Workflow

```yaml
# .github/workflows/security.yml
name: Security Checks

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read
  security-events: write

jobs:
  secret-scanning:
    name: Secret Scanning
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        with:
          fetch-depth: 0  # Full history for accurate scanning
      
      - name: TruffleHog Secret Scan
        uses: trufflesecurity/trufflehog@main
        with:
          path: ./
          base: main
          head: HEAD
      
      - name: GitLeaks
        uses: gitleaks/gitleaks-action@v2
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  
  dependency-check:
    name: Dependency Vulnerability Scan
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
      
      - name: Safety Check
        run: |
          pip install safety
          safety check --json
      
      - name: Snyk Security Scan
        uses: snyk/actions/python@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          args: --severity-threshold=high
  
  sast:
    name: Static Application Security Testing
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Run Bandit
        run: |
          pip install bandit
          bandit -r . -f json -o bandit-report.json
      
      - name: Run Semgrep
        uses: returntocorp/semgrep-action@v1
        with:
          config: >-
            p/security-audit
            p/owasp-top-ten
            p/cwe-top-25
      
      - name: CodeQL Analysis
        uses: github/codeql-action/init@v2
        with:
          languages: python
      
      - name: Autobuild
        uses: github/codeql-action/autobuild@v2
      
      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v2
  
  container-scan:
    name: Container Security Scan
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: docker build -t myapp:${{ github.sha }} .
      
      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'myapp:${{ github.sha }}'
          format: 'sarif'
          output: 'trivy-results.sarif'
          severity: 'CRITICAL,HIGH'
      
      - name: Upload Trivy results to GitHub Security
        uses: github/codeql-action/upload-sarif@v2
        with:
          sarif_file: 'trivy-results.sarif'
  
  iac-scan:
    name: Infrastructure as Code Security
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Checkov - Terraform/CloudFormation Scan
        uses: bridgecrewio/checkov-action@master
        with:
          directory: infrastructure/
          framework: terraform
          output_format: sarif
          output_file_path: checkov-results.sarif
      
      - name: tfsec - Terraform Security Scan
        uses: aquasecurity/tfsec-action@v1.0.0
        with:
          working_directory: infrastructure/
          format: sarif
          soft_fail: false
```

---

## 🏗️ Infrastructure as Code (IaC) Security

### 1. Secure Terraform Configuration

```hcl
# ❌ INSECURE Terraform
resource "aws_s3_bucket" "data" {
  bucket = "my-data-bucket"
  acl    = "public-read"  # Insecure!
}

resource "aws_security_group" "web" {
  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]  # Too permissive!
  }
}

# ✅ SECURE Terraform
resource "aws_s3_bucket" "data" {
  bucket = "my-data-bucket"
  
  # Block public access
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
  
  # Enable versioning
  versioning {
    enabled = true
  }
  
  # Enable encryption
  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
  
  # Enable logging
  logging {
    target_bucket = aws_s3_bucket.logs.id
    target_prefix = "data-bucket-logs/"
  }
  
  # Lifecycle policy
  lifecycle_rule {
    enabled = true
    
    transition {
      days          = 90
      storage_class = "GLACIER"
    }
  }
}

resource "aws_security_group" "web" {
  name        = "web-server-sg"
  description = "Security group for web server"
  vpc_id      = aws_vpc.main.id
  
  # HTTPS only
  ingress {
    description = "HTTPS from ALB"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    security_groups = [aws_security_group.alb.id]
  }
  
  # Restricted egress
  egress {
    description = "HTTPS to internet"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  tags = {
    Name        = "web-server-sg"
    Environment = "production"
  }
}

# Enable AWS Config for compliance
resource "aws_config_configuration_recorder" "main" {
  name     = "config-recorder"
  role_arn = aws_iam_role.config.arn
  
  recording_group {
    all_supported = true
  }
}

# CloudTrail for audit logging
resource "aws_cloudtrail" "main" {
  name                          = "organization-trail"
  s3_bucket_name                = aws_s3_bucket.cloudtrail.id
  include_global_service_events = true
  is_multi_region_trail         = true
  enable_log_file_validation    = true
  
  event_selector {
    read_write_type           = "All"
    include_management_events = true
    
    data_resource {
      type   = "AWS::S3::Object"
      values = ["arn:aws:s3:::*/"]
    }
  }
}
```

### 2. IaC Security Scanning

```python
# iac_scanner.py - Custom IaC security scanner
import re
import json
from pathlib import Path

class IaCSecurityScanner:
    def __init__(self):
        self.issues = []
    
    def scan_terraform(self, file_path):
        """Scan Terraform file for security issues"""
        content = Path(file_path).read_text()
        
        # Check for hardcoded credentials
        if re.search(r'(password|secret|api_key)\s*=\s*"[^"]+"', content, re.IGNORECASE):
            self.issues.append({
                'file': file_path,
                'severity': 'HIGH',
                'issue': 'Hardcoded credentials detected',
                'line': self._get_line_number(content, 'password')
            })
        
        # Check for public S3 buckets
        if re.search(r'acl\s*=\s*"public-read"', content):
            self.issues.append({
                'file': file_path,
                'severity': 'CRITICAL',
                'issue': 'S3 bucket with public-read ACL',
                'line': self._get_line_number(content, 'public-read')
            })
        
        # Check for unrestricted security groups
        if re.search(r'cidr_blocks\s*=\s*\["0\.0\.0\.0/0"\]', content):
            self.issues.append({
                'file': file_path,
                'severity': 'HIGH',
                'issue': 'Security group allows traffic from 0.0.0.0/0',
                'line': self._get_line_number(content, '0.0.0.0/0')
            })
        
        # Check for missing encryption
        if 'aws_s3_bucket' in content:
            if 'server_side_encryption_configuration' not in content:
                self.issues.append({
                    'file': file_path,
                    'severity': 'HIGH',
                    'issue': 'S3 bucket without encryption',
                    'line': self._get_line_number(content, 'aws_s3_bucket')
                })
        
        # Check for unencrypted EBS volumes
        if 'aws_ebs_volume' in content:
            if 'encrypted = true' not in content:
                self.issues.append({
                    'file': file_path,
                    'severity': 'HIGH',
                    'issue': 'EBS volume not encrypted',
                    'line': self._get_line_number(content, 'aws_ebs_volume')
                })
    
    def scan_dockerfile(self, file_path):
        """Scan Dockerfile for security issues"""
        content = Path(file_path).read_text()
        lines = content.split('\n')
        
        for i, line in enumerate(lines, 1):
            # Check for using :latest tag
            if re.match(r'^FROM.*:latest', line):
                self.issues.append({
                    'file': file_path,
                    'severity': 'MEDIUM',
                    'issue': 'Using :latest tag (not reproducible)',
                    'line': i
                })
            
            # Check for running as root
            if line.strip() == 'USER root':
                self.issues.append({
                    'file': file_path,
                    'severity': 'HIGH',
                    'issue': 'Running container as root',
                    'line': i
                })
            
            # Check for exposed secrets
            if re.search(r'ENV.*PASSWORD', line, re.IGNORECASE):
                self.issues.append({
                    'file': file_path,
                    'severity': 'CRITICAL',
                    'issue': 'Potential hardcoded password in ENV',
                    'line': i
                })
    
    def scan_kubernetes(self, file_path):
        """Scan Kubernetes YAML for security issues"""
        import yaml
        
        with open(file_path) as f:
            docs = yaml.safe_load_all(f)
            
            for doc in docs:
                if not doc:
                    continue
                
                kind = doc.get('kind', '')
                
                # Check Pod security
                if kind == 'Pod':
                    spec = doc.get('spec', {})
                    containers = spec.get('containers', [])
                    
                    for container in containers:
                        # Check for privileged containers
                        security_context = container.get('securityContext', {})
                        if security_context.get('privileged'):
                            self.issues.append({
                                'file': file_path,
                                'severity': 'CRITICAL',
                                'issue': 'Privileged container detected',
                                'container': container.get('name')
                            })
                        
                        # Check for running as root
                        if not security_context.get('runAsNonRoot'):
                            self.issues.append({
                                'file': file_path,
                                'severity': 'HIGH',
                                'issue': 'Container may run as root',
                                'container': container.get('name')
                            })
                        
                        # Check for resource limits
                        if 'resources' not in container:
                            self.issues.append({
                                'file': file_path,
                                'severity': 'MEDIUM',
                                'issue': 'No resource limits defined',
                                'container': container.get('name')
                            })
    
    def _get_line_number(self, content, search_str):
        """Get line number of search string"""
        for i, line in enumerate(content.split('\n'), 1):
            if search_str in line:
                return i
        return 0
    
    def generate_report(self):
        """Generate security report"""
        print("\n=== IaC Security Scan Report ===\n")
        
        # Group by severity
        critical = [i for i in self.issues if i['severity'] == 'CRITICAL']
        high = [i for i in self.issues if i['severity'] == 'HIGH']
        medium = [i for i in self.issues if i['severity'] == 'MEDIUM']
        
        print(f"Critical: {len(critical)}")
        print(f"High: {len(high)}")
        print(f"Medium: {len(medium)}")
        print(f"\nTotal Issues: {len(self.issues)}\n")
        
        for issue in self.issues:
            print(f"[{issue['severity']}] {issue['file']}:{issue.get('line', 'N/A')}")
            print(f"  {issue['issue']}\n")

# Usage
scanner = IaCSecurityScanner()
scanner.scan_terraform('main.tf')
scanner.scan_dockerfile('Dockerfile')
scanner.scan_kubernetes('deployment.yaml')
scanner.generate_report()
```

---

## 🔐 Secrets Management

### 1. HashiCorp Vault Integration

```python
# vault_manager.py
import hvac
import os

class VaultManager:
    def __init__(self, vault_url, token=None):
        self.client = hvac.Client(url=vault_url, token=token)
        
        # Authenticate with AppRole
        if not token:
            self.authenticate_approle()
    
    def authenticate_approle(self):
        """Authenticate using AppRole"""
        role_id = os.getenv('VAULT_ROLE_ID')
        secret_id = os.getenv('VAULT_SECRET_ID')
        
        response = self.client.auth.approle.login(
            role_id=role_id,
            secret_id=secret_id
        )
        
        self.client.token = response['auth']['client_token']
    
    def get_secret(self, path):
        """Read secret from Vault"""
        try:
            response = self.client.secrets.kv.v2.read_secret_version(
                path=path,
                mount_point='secret'
            )
            return response['data']['data']
        except Exception as e:
            print(f"Error reading secret: {e}")
            return None
    
    def store_secret(self, path, secret_data):
        """Store secret in Vault"""
        try:
            self.client.secrets.kv.v2.create_or_update_secret(
                path=path,
                secret=secret_data,
                mount_point='secret'
            )
            return True
        except Exception as e:
            print(f"Error storing secret: {e}")
            return False
    
    def rotate_secret(self, path):
        """Rotate secret (generate new version)"""
        current_secret = self.get_secret(path)
        
        # Generate new secret (example: database password)
        import secrets
        import string
        
        alphabet = string.ascii_letters + string.digits + string.punctuation
        new_password = ''.join(secrets.choice(alphabet) for _ in range(32))
        
        # Store new version
        current_secret['password'] = new_password
        self.store_secret(path, current_secret)
        
        return new_password

# Usage in application
vault = VaultManager('http://vault:8200')

# Get database credentials
db_creds = vault.get_secret('database/mysql')
db_host = db_creds['host']
db_user = db_creds['username']
db_pass = db_creds['password']

# Connect to database
import psycopg2
conn = psycopg2.connect(
    host=db_host,
    user=db_user,
    password=db_pass,
    database='myapp'
)
```

### 2. AWS Secrets Manager Integration

```python
# aws_secrets.py
import boto3
import json
from botocore.exceptions import ClientError

class AWSSecretsManager:
    def __init__(self, region='us-east-1'):
        self.client = boto3.client('secretsmanager', region_name=region)
    
    def get_secret(self, secret_name):
        """Retrieve secret from AWS Secrets Manager"""
        try:
            response = self.client.get_secret_value(SecretId=secret_name)
            
            if 'SecretString' in response:
                return json.loads(response['SecretString'])
            else:
                return response['SecretBinary']
        
        except ClientError as e:
            print(f"Error retrieving secret: {e}")
            return None
    
    def create_secret(self, secret_name, secret_value, description=''):
        """Create new secret"""
        try:
            self.client.create_secret(
                Name=secret_name,
                Description=description,
                SecretString=json.dumps(secret_value)
            )
            return True
        except ClientError as e:
            print(f"Error creating secret: {e}")
            return False
    
    def rotate_secret(self, secret_name, lambda_arn):
        """Enable automatic secret rotation"""
        try:
            self.client.rotate_secret(
                SecretId=secret_name,
                RotationLambdaARN=lambda_arn,
                RotationRules={
                    'AutomaticallyAfterDays': 30
                }
            )
            return True
        except ClientError as e:
            print(f"Error rotating secret: {e}")
            return False

# Usage
secrets_manager = AWSSecretsManager()

# Get API key
api_creds = secrets_manager.get_secret('prod/api/credentials')
api_key = api_creds['api_key']
api_secret = api_creds['api_secret']
```

---

## 📊 Security Metrics & KPIs

### DevSecOps Key Metrics

```python
# security_metrics.py
class SecurityMetrics:
    def __init__(self):
        self.metrics = {}
    
    def calculate_vulnerability_density(self, vulnerabilities, loc):
        """Vulnerabilities per 1000 lines of code"""
        return (vulnerabilities / loc) * 1000
    
    def calculate_mttr(self, vulnerability_times):
        """Mean Time To Remediate (hours)"""
        if not vulnerability_times:
            return 0
        return sum(vulnerability_times) / len(vulnerability_times)
    
    def calculate_security_debt(self, vulnerabilities):
        """Security debt score based on severity"""
        weights = {'Critical': 10, 'High': 5, 'Medium': 2, 'Low': 1}
        return sum(weights.get(v['severity'], 0) for v in vulnerabilities)
    
    def generate_dashboard(self):
        """Generate security metrics dashboard"""
        print("=== Security Metrics Dashboard ===\n")
        print(f"Vulnerability Density: {self.metrics.get('vd', 0):.2f} per 1K LOC")
        print(f"Mean Time To Remediate: {self.metrics.get('mttr', 0):.1f} hours")
        print(f"Security Debt Score: {self.metrics.get('debt', 0)}")
        print(f"Critical Vulnerabilities: {self.metrics.get('critical', 0)}")
        print(f"High Vulnerabilities: {self.metrics.get('high', 0)}")
```

**Module 11 Complete! Next: Module 12 - Mobile Security** 📱
