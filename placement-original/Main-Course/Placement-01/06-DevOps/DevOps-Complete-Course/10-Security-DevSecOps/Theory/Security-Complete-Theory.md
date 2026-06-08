# 🔒 Security & DevSecOps - Complete Theory

## 📋 DevSecOps Fundamentals

### What is DevSecOps?
DevSecOps integrates security practices into the DevOps pipeline, making security a shared responsibility throughout the development lifecycle.

### Shift-Left Security
- **Early Integration**: Security from design phase
- **Automated Testing**: Security tests in CI/CD
- **Developer Training**: Security awareness
- **Continuous Monitoring**: Real-time security checks

## 🛡️ Security in CI/CD Pipeline

### Pipeline Security Stages
```
Code → SAST → Build → Container Scan → DAST → Deploy → Runtime Security
```

### Security Gates
1. **Static Analysis**: Code vulnerability scanning
2. **Dependency Check**: Third-party library vulnerabilities
3. **Container Security**: Image vulnerability scanning
4. **Dynamic Testing**: Runtime security testing
5. **Compliance**: Policy and regulatory checks

## 🔍 Static Application Security Testing (SAST)

### SAST Tools
- **SonarQube**: Code quality and security
- **Checkmarx**: Static code analysis
- **Veracode**: Application security platform
- **CodeQL**: Semantic code analysis

### SonarQube Integration
```yaml
# GitHub Actions
- name: SonarQube Scan
  uses: sonarqube-quality-gate-action@master
  env:
    SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
  with:
    scanMetadataReportFile: target/sonar/report-task.txt
```

### Code Security Rules
```javascript
// Avoid hardcoded secrets
const API_KEY = process.env.API_KEY; // ✅ Good
const API_KEY = "sk-1234567890abcdef"; // ❌ Bad

// Input validation
function getUserById(id) {
  if (!id || typeof id !== 'string') {
    throw new Error('Invalid user ID');
  }
  // Sanitize input
  const sanitizedId = id.replace(/[^a-zA-Z0-9]/g, '');
  return database.query('SELECT * FROM users WHERE id = ?', [sanitizedId]);
}

// SQL injection prevention
const query = 'SELECT * FROM users WHERE email = ?'; // ✅ Parameterized
const query = `SELECT * FROM users WHERE email = '${email}'`; // ❌ Vulnerable
```

## 📦 Dependency Security

### Dependency Scanning Tools
- **npm audit**: Node.js vulnerabilities
- **OWASP Dependency Check**: Multi-language support
- **Snyk**: Developer-first security
- **WhiteSource**: Open source security

### Dependency Management
```bash
# Node.js security audit
npm audit
npm audit fix

# Python security check
pip-audit
safety check

# Java dependency check
mvn org.owasp:dependency-check-maven:check
```

### Package.json Security
```json
{
  "scripts": {
    "audit": "npm audit",
    "audit-fix": "npm audit fix",
    "security-check": "npm audit --audit-level high"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "overrides": {
    "vulnerable-package": "1.2.3"
  }
}
```

## 🐳 Container Security

### Container Security Best Practices
- **Minimal Base Images**: Use distroless or alpine
- **Non-root User**: Run as non-privileged user
- **Image Scanning**: Scan for vulnerabilities
- **Secrets Management**: Don't embed secrets
- **Resource Limits**: Set CPU/memory limits

### Secure Dockerfile
```dockerfile
# Use specific version
FROM node:18.17.0-alpine

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && \
    npm cache clean --force

# Copy source code
COPY --chown=nodejs:nodejs . .

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start application
CMD ["node", "server.js"]
```

### Container Scanning
```bash
# Trivy scanner
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
  aquasec/trivy image my-app:latest

# Clair scanner
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
  arminc/clair-scanner my-app:latest

# Snyk container scan
snyk container test my-app:latest
```

## 🌐 Dynamic Application Security Testing (DAST)

### DAST Tools
- **OWASP ZAP**: Web application scanner
- **Burp Suite**: Web vulnerability scanner
- **Nessus**: Vulnerability assessment
- **Qualys**: Cloud security platform

### OWASP ZAP Integration
```yaml
# GitHub Actions DAST
- name: ZAP Baseline Scan
  uses: zaproxy/action-baseline@v0.7.0
  with:
    target: 'https://staging.myapp.com'
    rules_file_name: '.zap/rules.tsv'
    cmd_options: '-a'
```

### Security Testing Checklist
- [ ] Authentication bypass
- [ ] Authorization flaws
- [ ] Input validation
- [ ] SQL injection
- [ ] Cross-site scripting (XSS)
- [ ] Cross-site request forgery (CSRF)
- [ ] Security misconfigurations
- [ ] Sensitive data exposure

## 🔐 Secrets Management

### Secrets Management Tools
- **HashiCorp Vault**: Enterprise secrets management
- **AWS Secrets Manager**: AWS native solution
- **Azure Key Vault**: Azure secrets storage
- **Kubernetes Secrets**: Container orchestration secrets

### Vault Integration
```bash
# Install Vault
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt-get update && sudo apt-get install vault

# Start Vault server
vault server -dev

# Store secrets
vault kv put secret/myapp/db password=supersecret

# Retrieve secrets
vault kv get secret/myapp/db
```

### Application Secrets Integration
```javascript
// Node.js with Vault
const vault = require('node-vault')({
  endpoint: 'http://vault:8200',
  token: process.env.VAULT_TOKEN
});

async function getDbPassword() {
  try {
    const result = await vault.read('secret/data/myapp/db');
    return result.data.data.password;
  } catch (error) {
    console.error('Failed to retrieve secret:', error);
    throw error;
  }
}
```

## 🔒 Infrastructure Security

### Network Security
```yaml
# Kubernetes Network Policy
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress

---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-web-to-api
spec:
  podSelector:
    matchLabels:
      app: api
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: web
    ports:
    - protocol: TCP
      port: 8080
```

### Cloud Security
```hcl
# Terraform AWS Security Group
resource "aws_security_group" "web" {
  name        = "web-sg"
  description = "Security group for web servers"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "web-security-group"
  }
}
```

## 📊 Security Monitoring

### Security Information and Event Management (SIEM)
- **Splunk**: Data analytics platform
- **ELK Stack**: Elasticsearch, Logstash, Kibana
- **AWS CloudTrail**: API call logging
- **Azure Sentinel**: Cloud-native SIEM

### Security Metrics
```promql
# Failed login attempts
increase(auth_failed_total[5m])

# Suspicious network traffic
rate(network_connections_total{destination!~"internal.*"}[5m])

# High privilege operations
increase(admin_operations_total[1h])

# Security scan results
security_vulnerabilities_total by (severity)
```

## 🚨 Incident Response

### Security Incident Response Plan
1. **Preparation**: Incident response team and procedures
2. **Identification**: Detect and analyze incidents
3. **Containment**: Limit damage and prevent spread
4. **Eradication**: Remove threat from environment
5. **Recovery**: Restore systems to normal operation
6. **Lessons Learned**: Post-incident analysis

### Automated Response
```yaml
# Security automation with GitHub Actions
name: Security Incident Response
on:
  repository_dispatch:
    types: [security-alert]

jobs:
  respond:
    runs-on: ubuntu-latest
    steps:
    - name: Block suspicious IP
      run: |
        aws ec2 authorize-security-group-ingress \
          --group-id sg-12345 \
          --protocol tcp \
          --port 22 \
          --source-group sg-67890
    
    - name: Notify security team
      uses: 8398a7/action-slack@v3
      with:
        status: custom
        custom_payload: |
          {
            text: "🚨 Security incident detected and contained",
            attachments: [{
              color: 'danger',
              fields: [{
                title: 'Incident Type',
                value: '${{ github.event.client_payload.type }}',
                short: true
              }]
            }]
          }
```

## 🎯 Compliance and Governance

### Compliance Frameworks
- **SOC 2**: Security, availability, processing integrity
- **PCI DSS**: Payment card industry standards
- **GDPR**: General Data Protection Regulation
- **HIPAA**: Health Insurance Portability and Accountability Act

### Policy as Code
```yaml
# Open Policy Agent (OPA) policy
package kubernetes.admission

deny[msg] {
  input.request.kind.kind == "Pod"
  input.request.object.spec.containers[_].image
  not starts_with(input.request.object.spec.containers[_].image, "myregistry.com/")
  msg := "Only images from myregistry.com are allowed"
}

deny[msg] {
  input.request.kind.kind == "Pod"
  input.request.object.spec.securityContext.runAsUser == 0
  msg := "Containers must not run as root"
}
```