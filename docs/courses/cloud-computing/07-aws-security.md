# Chapter 7: AWS Security

## Learning Objectives

After completing this chapter, students will be able to:

1. Design and implement IAM users, groups, roles, and policies following least privilege.
2. Configure identity federation using SAML and Amazon Cognito.
3. Manage encryption keys using AWS KMS with envelope encryption.
4. Implement Secrets Manager and Parameter Store for secrets management.
5. Configure CloudTrail for API activity logging and audit.
6. Implement AWS Config rules for compliance monitoring.
7. Design security monitoring with GuardDuty, Security Hub, and WAF.
8. Apply the shared responsibility model to real-world architectures.

## Theory

### 7.1 AWS Identity and Access Management (IAM)

IAM is the foundational AWS security service for controlling access to AWS resources. IAM enables the creation and management of users, groups, roles, and policies to define who can access which resources under what conditions.

**Users.** An IAM user represents a person or service that interacts with AWS. Each user has a unique name, a set of credentials (password for the console, access keys for the API/CLI), and permissions assigned directly or through group membership. IAM users are global entities spanning all regions. AWS recommends creating individual IAM users rather than sharing root account credentials.

**Groups.** An IAM group is a collection of IAM users. Groups simplify permission management: instead of assigning policies to each user individually, policies are attached to a group, and all members inherit those permissions. Groups can contain only users, not other groups. A user can belong to up to 10 groups.

**Roles.** An IAM role is an identity with permissions that can be assumed temporarily by users, applications, or AWS services. Roles do not have static credentials; when assumed, they provide temporary security credentials via AWS STS (Security Token Service). Roles enable cross-account access, service-to-service access (e.g., a Lambda function accessing S3), and federated user access. The trust policy specifies who can assume the role, and the permissions policy specifies what the role can do.

**Policies.** IAM policies are JSON documents that define permissions. Identity-based policies are attached to users, groups, or roles. Resource-based policies are attached to resources (S3 bucket policy, KMS key policy). Policies contain: Effect (Allow or Deny), Action (list of API actions), Resource (ARNs the policy applies to), and Condition (optional constraints on when the policy applies).

**Policy Evaluation Logic.** By default, all requests are denied. An explicit allow overrides the default deny. An explicit deny overrides any allow. This logic ensures that even if a policy grants access, an explicit deny in another policy blocks the request. AWS recommends using the least privilege principle: granting only the permissions required for a specific task.

**IAM Access Analyzer.** Analyzes resource-based policies to identify resources shared with external principals (outside the AWS account). It generates findings for S3 buckets, KMS keys, IAM roles, Lambda functions, SQS queues, and Secrets Manager secrets. Access Analyzer helps identify unintended public or cross-account access.

### 7.2 Identity Federation

Identity federation allows users to access AWS resources using existing identities from an external identity provider (IdP), avoiding the need to create separate IAM users for every person.

**SAML 2.0 Federation.** Organizations can integrate their existing identity provider (Microsoft AD FS, Okta, Ping Identity, Keycloak) with AWS using SAML 2.0. Users authenticate with their corporate credentials and receive SAML assertions, which are exchanged for temporary AWS credentials via the AWS SSO endpoint. SAML federation supports role-based access to the AWS console and CLI.

**Web Identity Federation (Amazon Cognito).** Cognito provides identity federation for web and mobile applications. Identity pools exchange tokens from public OIDC providers (Amazon, Facebook, Google, Apple) or from Cognito user pools for AWS credentials. User pools provide user directory with sign-up/sign-in, MFA, and adaptive authentication. Cognito integrates with API Gateway and ALB for authentication.

**AWS IAM Identity Center (SSO).** Centrally manages access to multiple AWS accounts and business applications. Identity Center integrates with Active Directory and external IdPs. Users are organized into permission sets that define their level of access. Identity Center provides a user portal for accessing assigned accounts and applications.

### 7.3 AWS Key Management Service (KMS)

KMS is a managed service for creating and controlling encryption keys used to encrypt AWS resources. KMS is integrated with most AWS services (S3, EBS, RDS, Lambda) for transparent server-side encryption.

**Key Types.** Symmetric keys (AES-256) are used for most AWS encryption operations. Asymmetric keys (RSA, ECC) support encrypt/decrypt and sign/verify operations. AWS managed keys (prefix aws/) are created, managed, and used on the customer's behalf by AWS services. Customer managed keys provide full control over key policies, rotation, and access. Custom key stores (CloudHSM) allow keys to be stored in a customer-controlled HSM cluster.

**Key Hierarchy and Envelope Encryption.** KMS uses envelope encryption: data is encrypted under a data key, and the data key is encrypted under a master key (KMS key). This approach solves the performance and management challenges of encrypting large amounts of data with a single key. The GenerateDataKey API returns a plaintext data key for encryption and an encrypted copy for storage. The Decrypt API takes the encrypted data key and returns the plaintext data key for decryption. Envelope encryption enables efficient key rotation (only the encrypted data keys need re-encryption).

**Key Policies.** Key policies are resource-based policies that define who can use and manage a KMS key. Every KMS key has a single key policy. Grant-based access allows delegating access to AWS principals without modifying the key policy.

**Automatic Key Rotation.** Customer managed keys can be configured to rotate annually. KMS retains all previous key material so data encrypted under previous keys remains decryptable. Imported key material cannot be automatically rotated.

### 7.4 AWS Secrets Manager

Secrets Manager securely stores, rotates, and manages secrets such as database credentials, API keys, and OAuth tokens. Secrets are encrypted using KMS. Secrets Manager can automatically rotate secrets for supported services (RDS, Redshift, DocumentDB, and custom rotations via Lambda). Automatic rotation reduces the operational burden and security risk of managing credentials. Secrets Manager supports cross-account access through resource-based policies.

### 7.5 AWS Systems Manager Parameter Store

Parameter Store provides secure, hierarchical storage for configuration data and secrets. Parameters can be organized as plaintext (String, StringList) or ciphertext (SecureString using KMS). Parameter Store is cost-effective (no additional charge for standard parameters) and integrates with EC2 Systems Manager for secure parameter retrieval on instances.

### 7.6 AWS Certificate Manager (ACM)

ACM provisions, manages, and deploys public and private SSL/TLS certificates for use with AWS services (CloudFront, ALB, API Gateway). ACM handles certificate renewal automatically. Public certificates are free of charge. ACM supports importing externally obtained certificates but cannot automatically renew them.

### 7.7 AWS CloudTrail

CloudTrail records API activity across AWS infrastructure and governance data. CloudTrail is enabled by default on all AWS accounts (90-day event history in Event history). For comprehensive auditing, a trail should be created that logs management events (control plane operations) and data events (data plane operations like S3 GetObject or Lambda Invoke) to an S3 bucket.

**Trail Types.** Organization trails log events for all accounts in an AWS Organizations organization. Multi-region trails log events from all regions. Single-region trails log events from one region. CloudTrail Lake provides SQL-based querying of activity logs for analysis.

**Event Types.** Management events (free) include operations on AWS resources (CreateVpc, TerminateInstances, IAM policy changes). Data events (charged) include resource-level operations (S3 object-level, Lambda function invocations, DynamoDB item operations). Insights events identify unusual activity patterns.

### 7.8 AWS Config

AWS Config provides resource inventory, configuration history, and configuration change notifications. It evaluates resource configurations against desired rules and provides compliance dashboards. Config rules can be AWS managed (required tags, EBS encryption, S3 public access) or custom rules using Lambda. Config aggregates data across accounts and regions for centralized compliance monitoring.

### 7.9 Amazon GuardDuty

GuardDuty is a continuous security monitoring service that analyzes VPC Flow Logs, CloudTrail event logs, and DNS logs to identify unexpected and potentially malicious activity. GuardDuty uses machine learning, anomaly detection, and integrated threat intelligence (including AWS Security Hub and third-party feeds) to detect threats such as: unusual API calls, unauthorized deployments, compromised instances, reconnaissance by attackers, communication with known malicious IPs and domains. Findings are categorized by severity (Low, Medium, High) and can trigger automated responses through EventBridge.

### 7.10 AWS Security Hub

Security Hub provides a unified view of security alerts and compliance status across AWS accounts. It aggregates findings from GuardDuty, Inspector, Macie, IAM Access Analyzer, Firewall Manager, and third-party security products. Security Hub performs automated compliance checks against standards (CIS AWS Foundations, PCI DSS, AWS Foundational Security Best Practices). Findings are normalized into the AWS Security Finding Format (ASFF) for consistent processing.

### 7.11 AWS WAF and Shield Advanced

(Described in Chapter 6 networking context. From a security perspective, WAF provides Layer 7 protection against SQL injection, XSS, and OWASP Top 10 threats. Shield Advanced provides enhanced DDoS protection and cost protection. Both integrate with Security Hub for centralized finding management.)

### 7.12 Shared Responsibility Model

The shared responsibility model defines security boundaries between AWS and the customer.

**AWS responsibility: Security OF the cloud.** AWS is responsible for: physical security of data centers, hardware and software infrastructure (compute, storage, networking), managed service operations (RDS, DynamoDB, Lambda), and global infrastructure (regions, AZs, edge locations).

**Customer responsibility: Security IN the cloud.** The customer is responsible for: customer data, platform/application/IAM configuration, operating system and network configuration (security groups, NACLs), client-side data encryption, server-side encryption, network traffic protection, and compliance with applicable regulations.

The responsibility division depends on the service model. For IaaS (EC2), the customer manages the OS, applications, and security groups. For PaaS (RDS), AWS manages the OS and database engine, the customer manages data access and IAM. For SaaS (S3), AWS manages the underlying infrastructure, the customer manages data classification, access policies, and encryption.

### 7.13 AWS Organizations

AWS Organizations centrally governs the AWS environment across multiple accounts. Organizations provide: consolidated billing, account creation and management, service control policies (SCPs) for permission guardrails, and integration with other security services. SCPs define the maximum permissions for accounts within an organizational unit (OU), providing a preventive security control at the account level.

## Examples

### Example 7.1: Create an IAM Role for EC2

```bash
# Create a role for EC2 to access S3
aws iam create-role \
  --role-name EC2-S3-ReadOnly \
  --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Principal": {"Service": "ec2.amazonaws.com"},
      "Action": "sts:AssumeRole"
    }]
  }'

# Attach managed policy
aws iam attach-role-policy \
  --role-name EC2-S3-ReadOnly \
  --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess

# Create instance profile (required for EC2)
aws iam create-instance-profile \
  --instance-profile-name EC2-S3-ReadOnly-Profile

aws iam add-role-to-instance-profile \
  --instance-profile-name EC2-S3-ReadOnly-Profile \
  --role-name EC2-S3-ReadOnly
```

### Example 7.2: Encrypt and Decrypt with KMS

```bash
# Encrypt a secret using KMS
aws kms encrypt \
  --key-id alias/my-key \
  --plaintext fileb://secret.txt \
  --output text \
  --query CiphertextBlob > encrypted-secret.txt

# Decrypt using KMS
aws kms decrypt \
  --ciphertext-blob fileb://encrypted-secret.txt \
  --output text \
  --query Plaintext | base64 --decode > decrypted.txt
```

### Example 7.3: Create an SCP in AWS Organizations

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Deny",
      "Action": [
        "ec2:RunInstances",
        "ec2:CreateVolume"
      ],
      "Resource": "*",
      "Condition": {
        "Bool": {
          "ec2:Encrypted": "false"
        }
      }
    }
  ]
}
```

## Summary

IAM is the access control foundation of AWS, supporting users, groups, roles, and policies with least privilege principles. Identity federation extends access to existing corporate identities via SAML, Cognito, and IAM Identity Center. KMS provides centralized key management with envelope encryption. Secrets Manager and Parameter Store handle secrets and configuration securely. CloudTrail records all API activity for auditing. AWS Config monitors resource configuration compliance. GuardDuty provides intelligent threat detection, and Security Hub aggregates findings. The shared responsibility model clarifies the division of security obligations between AWS and customers. AWS Organizations with SCPs provides preventive security control at scale.

## Exercises

### Review Questions

1. What is the difference between an IAM user, group, and role? When should each be used?
2. Explain IAM policy evaluation logic. How does an explicit deny interact with an explicit allow?
3. How does SAML 2.0 federation work with AWS? What is the role of the SAML assertion?
4. Describe envelope encryption and explain why KMS uses this approach.
5. What is the difference between Secrets Manager and Parameter Store?
6. How does CloudTrail differ from AWS Config in terms of what each service records?
7. What types of threats does GuardDuty detect and what logs does it analyze?
8. Describe the shared responsibility model for EC2 vs S3 vs Lambda.
9. What are service control policies and how do they differ from IAM policies?
10. How does AWS Certificate Manager handle certificate renewal?

### Application Problems

1. A company with 500 employees needs to grant AWS console access using corporate Active Directory credentials and provide developers access to specific EC2 instances in a development account. Design an identity federation architecture including the IdP integration, IAM roles, and permission boundaries.

2. A healthcare application stores patient data in S3 and RDS. The application must encrypt all data at rest, rotate encryption keys annually, and maintain an audit trail of all access to encrypted data. Design the encryption architecture covering KMS key hierarchy, key rotation, and access logging.

3. A SaaS provider manages 10 AWS accounts for different customers. They need to enforce the following security rules across all accounts: prohibit public S3 buckets, require encryption on all EBS volumes, enforce EC2 instance type restrictions, and require CloudTrail to be enabled. Design the security governance architecture using AWS Organizations, SCPs, and AWS Config.

4. An organization was breached when an IAM access key was exposed in a public GitHub repository. Design a credential management architecture that eliminates long-term access keys where possible and detects exposed credentials proactively.

### Challenge Problem

Design a comprehensive security architecture for a multi-account, multi-region financial services platform that processes credit card transactions (PCI DSS scope). Requirements: 15 AWS accounts (production, staging, development, security, logging, shared services, three per region), personal identifiable information (PII) and cardholder data (CHD) must be encrypted at rest and in transit, all API activity must be logged with 7-year retention, account-level guardrails must prevent the creation of non-compliant resources, identity federation with on-premises AD must work for both AWS console and CLI access, automated detection of and response to security threats must complete within 5 minutes, cross-account access must be controlled through roles with automatic privilege escalation approval, and incident response teams must have break-glass access to all accounts with full audit logging. Your design must include: account structure with organizational units, SCP hierarchy and specific policies, IAM architecture with cross-account roles and identity federation, KMS key hierarchy and key policies, CloudTrail organization trail configuration, GuardDuty multi-account setup with automated response, AWS Config conformance packs, incident response automation workflow, and compliance monitoring and reporting strategy.
